/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * What the Aurèldían lexicon guards share.
 *
 * Six tongues descend from ancient Vylari or borrow from its daughters, and
 * each has a lexicon note of one shape, so one reader and one set of checks
 * serve them all; a tongue's guard supplies the paths, the scope and whatever
 * check is its own. Every rule is read off the lexicon note at run time:
 *
 * - `### Classes`, `### Fields` and (for a daughter) `### Sources` under
 *   `## How to read the tables`;
 * - `### Letters`, `### Word edges`, `### Clusters` and `### Stress` under
 *   `## Sounds and spelling`;
 * - the ordered change tables (`| Step | Change | Where |`) a Sources row or
 *   the `### Sound changes` heading names, read by the sound-change engine;
 * - `### Suffixes` and the name-ending tables under `## Building words`;
 * - one word table per field under `## Words`, with the columns `Form`,
 *   `Class`, `Gloss`, `Built from` and `Attested`, plus `Ancient` in the
 *   Vylari lexicon and `Source` in a daughter's;
 * - `### Tongues`, `### Names` and `### Retired names` under `## Attested
 *   names`.
 *
 * The checks every tongue gets:
 *
 * 1. **Structure.** Every table the reader needs is present; every field under
 *    `## Words` is declared; every class is declared.
 * 2. **Sounds.** Every form is spelled with the letters of the Letters table,
 *    opens and closes as the Word edges allow, stacks no more consonants than
 *    the Clusters count, and sets two vowels together only as a listed
 *    diphthong. A letter the table marks `loan only` is an error in a row
 *    whose source is not a loan.
 * 3. **Derivation.** A daughter row's Source names an etymon in another
 *    lexicon, and the form recomputes from it through the change table the
 *    Sources row names; a Vylari row's Form recomputes from its Ancient cell.
 *    A difference in letters is an error, a difference only in marks a
 *    warning, an etymon no row of the other lexicon carries an error, and a
 *    source lexicon that does not exist a single warning.
 * 4. **Built from.** A cell that names parts recomputes to the form: lexicon
 *    forms joined, a stem (a form with a closing hyphen, or any form the stem
 *    begins) and the suffixes the lexicon declares.
 * 5. **The register.** Every name of a note in scope stands in the register
 *    with that note's address; every register row names a note that carries
 *    the name, or writes it in bold in its prose as the name of someone or
 *    something with no note of its own, and a tongue the register declares;
 *    a row in the tongue's own
 *    name gives parts that recompute, or is counted as not yet reached.
 * 6. **Retired names.** A retired name written anywhere in the content tree
 *    is an error at the place it is written; poetry fences, literature notes
 *    and `terran_analog` comments are not read.
 *
 * Breaks of the sound rules on attested names and listed names are warnings
 * and are counted once per table, with the names themselves listed when
 * `LEXICON_VERBOSE` is set, since renaming is the owner's decision and a
 * guard that prints two hundred lines of it on every run hides what matters.
 *
 * Findings are written `file:line:column: severity: message`, the path first
 * on the line and relative to the working directory, a field dropped rather
 * than guessed.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { derive, readChanges } from "./sound-change.mjs";

/** The content tree every scope is read from. */
export const CONTENT = "assets/content";

/** The reader's article, which a register key does not count. */
const ARTICLE = /^the\s+/iu;

/** A finding, in the shape every diagnostic in this repository takes. */
export function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/** The 1-based line and column of an offset in a text. */
export function lineColumn(text, at) {
    if (at === null || at === undefined || at < 0) return { line: null, column: null };
    const before = text.slice(0, at);
    return { line: before.split("\n").length, column: at - (before.lastIndexOf("\n") + 1) + 1 };
}

/**
 * A note's section with its offset, from its heading to the next heading of
 * the same depth or shallower.
 */
export function section(text, heading) {
    const marker = `\n${heading}\n`;
    const found = text.startsWith(`${heading}\n`) ? 0 : text.indexOf(marker) + 1;
    if (found === 0 && !text.startsWith(`${heading}\n`)) return null;
    const start = found;
    const depth = heading.match(/^#+/)[0].length;
    const lines = text.slice(start).split("\n");
    let length = lines[0].length + 1;
    for (let i = 1; i < lines.length; i += 1) {
        const mark = lines[i].match(/^(#+)\s/);
        if (mark && mark[1].length <= depth) break;
        length += lines[i].length + 1;
    }
    return { body: text.slice(start, start + length), at: start };
}

/** Every section of a text with the given heading, in order. */
export function sections(text, heading) {
    const out = [];
    let from = 0;
    while (from <= text.length) {
        const rest = text.slice(from);
        const found = section(rest, heading);
        if (!found) break;
        out.push({ body: found.body, at: from + found.at });
        from = from + found.at + found.body.length;
    }
    return out;
}

/**
 * Every table row of a text, as cells, with the offset of the row and the
 * header it stands under. Header rows and rules carry no data and are dropped.
 */
export function rows(text, offset = 0) {
    const out = [];
    let at = offset;
    let header = null;
    let pending = null;
    for (const line of text.split("\n")) {
        const here = at;
        at += line.length + 1;
        if (!line.trim().startsWith("|")) {
            header = null;
            pending = null;
            continue;
        }
        const cells = line
            .split(/(?<!\\)\|/)
            .slice(1, -1)
            .map((cell) => cell.trim());
        const isRule = cells.every((cell) => /^:?-+:?$/.test(cell));
        if (header === null) {
            if (isRule && pending) {
                header = pending.cells.map((c) => c.toLowerCase());
                pending = null;
                continue;
            }
            pending = { cells, at: here };
            if (isRule) pending = null;
            continue;
        }
        if (isRule) continue;
        const named = {};
        header.forEach((name, i) => {
            named[name] = cells[i] ?? "";
        });
        out.push({ cells, named, header, at: here });
    }
    return out;
}

/** Every backticked run in a text. */
export function ticked(text) {
    return [...(text ?? "").matchAll(/`([^`]+)`/g)].map((match) => match[1]);
}

/** A word as the rules read it: composed, lower case. */
export function plain(word) {
    return (word ?? "").normalize("NFC").toLowerCase();
}

/** A word with every mark stripped, for comparing letters alone. */
export function demark(word) {
    return plain(word).normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");
}

/** The key a register row and a scope name meet on: no article, marks, hyphens or case. */
export function keyOf(name) {
    return demark(name.trim().replace(ARTICLE, ""))
        .replace(/[-\s]+/g, " ")
        .trim();
}

/** The wikilink addresses of a cell. */
export function addressesOf(cell) {
    return [...(cell ?? "").matchAll(/\[\[([^|\\\]]+)/g)].map((match) => match[1].trim());
}

/** The addresses a cell names, as wikilinks or as code spans of the address shape. */
function addressCells(cell) {
    const out = addressesOf(cell);
    for (const span of ticked(cell)) if (/^[a-z]+-[a-z0-9]+$/.test(span)) out.push(span);
    return out;
}

/**
 * Read the whole rule off a lexicon note.
 *
 * @param {string} lex - The lexicon note.
 * @param {{label?: string, daughter?: boolean}} [options] - `daughter` expects a Sources table and a Source column.
 * @returns {{rule: object, problems: string[]}}
 */
export function readLexicon(lex, options = {}) {
    const problems = [];
    const need = (heading) => {
        const found = section(lex, heading);
        if (!found) problems.push(`the lexicon states no section "${heading}"`);
        return found ?? { body: "", at: 0 };
    };

    // Letters, by kind.
    const consonants = new Map(); // letter -> {loanOnly}
    const shortVowels = new Set();
    const longVowels = new Set();
    const nasalVowels = new Set();
    const stressedVowels = new Set();
    const diphthongs = new Set();
    for (const { cells } of rows(need("### Letters").body)) {
        const kind = (cells[1] ?? "").toLowerCase();
        const loanOnly = /loan/.test(kind);
        for (const letter of ticked(cells[0]).map(plain)) {
            if (kind.startsWith("diphthong")) diphthongs.add(letter);
            else if (kind.startsWith("long vowel")) longVowels.add(letter);
            else if (kind.startsWith("short vowel")) shortVowels.add(letter);
            else if (kind.startsWith("nasal vowel")) nasalVowels.add(letter);
            else if (kind.startsWith("stressed vowel")) stressedVowels.add(letter);
            else if (kind.startsWith("consonant")) consonants.set(letter, { loanOnly });
        }
    }
    if (!consonants.size) problems.push('the lexicon\'s "### Letters" names no consonant');

    // The ancient letters, where the lexicon states them: the inventory its ancient forms are spelled in.
    const ancient = { consonants: new Set(), diphthongs: new Set() };
    const ancientSection = section(lex, "### Ancient letters");
    for (const { cells } of rows(ancientSection?.body ?? "")) {
        const kind = (cells[1] ?? "").toLowerCase();
        for (const letter of ticked(cells[0]).map(plain)) {
            if (kind.startsWith("diphthong")) ancient.diphthongs.add(letter);
            else if (kind.startsWith("consonant")) ancient.consonants.add(letter);
        }
    }

    const onsets = new Set();
    const finals = new Set();
    for (const { cells } of rows(need("### Word edges").body)) {
        const label = (cells[0] ?? "").toLowerCase();
        const sounds = ticked(cells[1]).map(plain);
        if (/open/.test(label)) sounds.forEach((one) => onsets.add(one));
        else if (/close/.test(label)) sounds.forEach((one) => finals.add(one));
    }

    let maxRun = null;
    for (const { cells } of rows(need("### Clusters").body)) {
        const count = Number.parseInt(cells[1] ?? "", 10);
        if (/most consonants/i.test(cells[0] ?? "") && Number.isFinite(count)) maxRun = count;
    }
    if (maxRun === null) problems.push('the lexicon\'s "### Clusters" states no count');

    let stress = null;
    for (const { cells } of rows(need("### Stress").body)) {
        if (/falls on/i.test(cells[0] ?? "")) stress = (cells[1] ?? "").trim().toLowerCase();
    }
    if (!stress) problems.push('the lexicon\'s "### Stress" states no "Stress falls on" row');

    // Suffixes.
    const suffixes = new Map();
    const suffixSection = section(lex, "### Suffixes");
    for (const { cells } of rows(suffixSection?.body ?? "")) {
        const [form] = ticked(cells[0]).map(plain);
        if (!form) continue;
        const stem = (cells[1] ?? "").toLowerCase();
        suffixes.set(form, {
            mode: /replaces the final vowel/.test(stem) ? "replaces" : "added",
            makes: (cells[2] ?? "").trim(),
        });
    }

    // Name endings: `| Ending | Who | ... |` under any heading ending in "names".
    const nameEndings = [];
    for (const match of lex.matchAll(/^### (.+ names)$/gim)) {
        const found = section(lex, match[0]);
        if (!found) continue;
        for (const { cells, named } of rows(found.body)) {
            if (!("ending" in named)) continue;
            const who = (named.who ?? cells[1] ?? "").toLowerCase();
            for (const ending of ticked(named.ending).map(plain))
                nameEndings.push({ table: match[1], ending: ending.replace(/^-/, ""), who });
        }
    }

    // Classes, fields, sources.
    const classes = new Set(
        rows(need("### Classes").body).flatMap(({ cells }) => ticked(cells[0])),
    );
    const fields = rows(need("### Fields").body)
        .map(({ cells }) => cells[0])
        .filter(Boolean);
    const sources = new Map();
    if (options.daughter) {
        for (const { named, cells } of rows(need("### Sources").body)) {
            const [prefix] = ticked(named.source ?? cells[0]);
            if (!prefix) continue;
            const [from] = addressCells(named.from ?? cells[1] ?? "");
            sources.set(prefix, {
                prefix,
                from: from ?? null,
                by: (named.by ?? cells[2] ?? "").trim(),
                meaning: (named.meaning ?? cells[3] ?? "").trim(),
            });
        }
        if (!sources.size) problems.push('the lexicon\'s "### Sources" declares no source');
    }

    // The change tables, by heading.
    const changes = new Map();
    const changeProblems = [];
    const headings = new Set(["### Sound changes"]);
    for (const src of sources.values()) if (src.by) headings.add(src.by);
    for (const heading of headings) {
        const read = readChanges(lex, heading);
        if (read.at === null) continue;
        changes.set(heading, read.steps);
        for (const p of read.problems) changeProblems.push(p);
    }

    // The words.
    const words = [];
    const wordsSection = need("## Words");
    for (const field of fields) {
        const found = section(wordsSection.body, `### ${field}`);
        if (!found) {
            problems.push(`the lexicon states no word table for "${field}"`);
            continue;
        }
        for (const { named, cells, at } of rows(found.body, wordsSection.at + found.at)) {
            const formCell = named.form ?? cells[0] ?? "";
            const [form] = ticked(formCell);
            words.push({
                written: form ?? formCell,
                form: plain(form ?? formCell),
                ancient: ticked(named.ancient ?? "").map(plain),
                ancientCell: (named.ancient ?? "").trim(),
                cls: (named.class ?? "").trim(),
                gloss: (named.gloss ?? "").trim(),
                source: (named.source ?? "").trim(),
                built: (named["built from"] ?? "").trim(),
                attested: (named.attested ?? "").trim(),
                field,
                at,
            });
        }
    }
    const strayFields = [];
    for (const match of wordsSection.body.matchAll(/^### (.+)$/gm)) {
        if (!fields.includes(match[1].trim()))
            strayFields.push({ field: match[1].trim(), at: wordsSection.at + match.index });
    }

    // The register.
    const tongues = new Set(
        rows(need("### Tongues").body).flatMap(({ cells }) => ticked(cells[0])),
    );
    const names = need("### Names");
    const register = rows(names.body, names.at).map(({ cells, at }) => ({
        name: (cells[0] ?? "").replace(/\*\*/g, "").trim(),
        addresses: addressesOf(cells[1]),
        tongue: ticked(cells[2])[0] ?? (cells[2] ?? "").trim(),
        built: (cells[3] ?? "").trim(),
        at,
    }));
    const retiredSection = need("### Retired names");
    const retired = rows(retiredSection.body, retiredSection.at)
        .map(({ cells, at }) => ({
            name: ticked(cells[0])[0] ?? "",
            instead: ticked(cells[1])[0] ?? null,
            at,
        }))
        .filter((one) => one.name);

    return {
        rule: {
            consonants,
            shortVowels,
            longVowels,
            nasalVowels,
            stressedVowels,
            diphthongs,
            onsets,
            finals,
            maxRun: maxRun ?? Number.POSITIVE_INFINITY,
            stress,
            ancient: ancientSection ? ancient : null,
            suffixes,
            nameEndings,
            classes,
            fields,
            sources,
            changes,
            changeProblems,
            words,
            strayFields,
            tongues,
            register,
            retired,
            retiredAt:
                retiredSection.body ?
                    { from: retiredSection.at, to: retiredSection.at + retiredSection.body.length }
                :   null,
        },
        problems,
    };
}

/** Every vowel letter the rule knows, longest first. */
function vowelLetters(rule) {
    return [
        ...rule.diphthongs,
        ...rule.longVowels,
        ...rule.nasalVowels,
        ...rule.stressedVowels,
        ...rule.shortVowels,
    ].sort((a, b) => b.length - a.length);
}

/**
 * A word cut into its sounds by the lexicon's letter table.
 *
 * @returns {{sound: string, kind: "C"|"V"|"?", loanOnly?: boolean}[]}
 */
export function sounds(word, rule) {
    const consonants = [...rule.consonants.keys()].sort((a, b) => b.length - a.length);
    const vowels = vowelLetters(rule);
    const out = [];
    let i = 0;
    while (i < word.length) {
        const vowel = vowels.find((v) => word.startsWith(v, i));
        if (vowel) {
            out.push({ sound: vowel, kind: "V" });
            i += vowel.length;
            continue;
        }
        const consonant = consonants.find((c) => word.startsWith(c, i));
        if (consonant) {
            out.push({
                sound: consonant,
                kind: "C",
                loanOnly: rule.consonants.get(consonant).loanOnly,
            });
            i += consonant.length;
            continue;
        }
        const char = String.fromCodePoint(word.codePointAt(i));
        out.push({ sound: char, kind: "?" });
        i += char.length;
    }
    return out;
}

/**
 * What a word breaks of the sound rules, as messages.
 *
 * @param {string} word - A plain word, no hyphen or space.
 * @param {object} rule - From `readLexicon`.
 * @param {{bound?: boolean, loan?: boolean, label?: string}} [options] - A bound
 *   stem closes on anything; a loan may use loan-only letters.
 */
export function soundProblems(word, rule, options = {}) {
    const out = [];
    const label = options.label ?? "the tongue";
    const cut = sounds(word, rule);
    for (const one of cut.filter((s) => s.kind === "?"))
        out.push(`holds "${one.sound}", which is not a letter of ${label}`);
    if (out.length) return out;
    if (!options.loan)
        for (const one of cut.filter((s) => s.loanOnly))
            out.push(`holds "${one.sound}", a letter only a loan carries`);
    let first = 0;
    while (first < cut.length && cut[first].kind === "C") first += 1;
    const onset = cut
        .slice(0, first)
        .map((s) => s.sound)
        .join("");
    if (first > 1 && !rule.onsets.has(onset))
        out.push(`opens on "${onset}", which no word opens on`);
    let last = cut.length - 1;
    while (last >= 0 && cut[last].kind === "C") last -= 1;
    const coda = cut
        .slice(last + 1)
        .map((s) => s.sound)
        .join("");
    if (!options.bound && coda && !rule.finals.has(coda))
        out.push(`closes on "${coda}", which no word closes on`);
    let run = [];
    const flush = () => {
        if (run.length > rule.maxRun)
            out.push(`stacks ${run.length} consonants together ("${run.join("")}")`);
        run = [];
    };
    for (let k = first; k <= last; k += 1) {
        if (cut[k].kind === "C") run.push(cut[k].sound);
        else flush();
    }
    flush();
    for (let k = 1; k < cut.length; k += 1) {
        if (cut[k].kind === "V" && cut[k - 1].kind === "V")
            out.push(
                `sets "${cut[k - 1].sound}" against "${cut[k].sound}", which is not a diphthong`,
            );
    }
    return out;
}

/** A suffix added to a stem, by the suffix table; null when not declared. */
export function suffixed(stem, suffix, rule) {
    const entry = rule.suffixes.get(suffix);
    if (!entry) return null;
    const body = suffix.slice(1);
    if (entry.mode === "replaces") {
        const vowels = vowelLetters(rule);
        const last = vowels.find((v) => stem.endsWith(v));
        if (last) return stem.slice(0, stem.length - last.length) + body;
    }
    return stem + body;
}

/**
 * The form a "built from" cell gives: words separated by ` · `, parts joined
 * by `+`, each part a lexicon form, a stem (a form with a closing hyphen, or a
 * run some form begins with, written with the hyphen) or a declared suffix.
 */
export function builtForm(cell, rule) {
    const problems = [];
    const lexicon = new Set(rule.words.map((word) => word.form));
    const stems = rule.words.map((word) => word.form.replace(/-$/, ""));
    const out = [];
    for (const piece of cell.split(/\s+·\s+/)) {
        const parts = ticked(piece).map(plain);
        if (!parts.length) {
            problems.push(`"${piece}" names no parts`);
            continue;
        }
        let word = null;
        for (const part of parts) {
            if (part.startsWith("-")) {
                if (word === null) {
                    problems.push(`"${part}" opens a word`);
                    continue;
                }
                const made = suffixed(word, part, rule);
                if (made === null) problems.push(`"${part}" is not a suffix the lexicon declares`);
                else word = made;
                continue;
            }
            if (lexicon.has(part)) {
                const stem = part.replace(/-$/, "");
                word = word === null ? stem : word + stem;
                continue;
            }
            if (part.endsWith("-")) {
                const stem = part.slice(0, -1);
                if (stems.some((one) => one.startsWith(stem) && one !== "")) {
                    word = word === null ? stem : word + stem;
                    continue;
                }
                problems.push(`"${part}" is a stem no row of the lexicon begins with`);
                continue;
            }
            problems.push(`"${part}" is not a row of the lexicon`);
        }
        out.push(word ?? "");
    }
    return { form: problems.length ? null : out.join(" ").normalize("NFC"), problems };
}

/** Every markdown file beneath a directory. */
function markdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/** The content tree, read once per process and shared between guards. */
let treeCache = null;

/**
 * Every note's frontmatter, keyed by address, and the names of every note.
 *
 * @param {string} [root]
 * @returns {{notes: Map<string, object>, all: Array<object>, texts: Array<{file: string, text: string, literature: boolean}>}}
 */
export function readTree(root = CONTENT) {
    if (treeCache && treeCache.root === root) return treeCache;
    const notes = new Map();
    const all = [];
    const texts = [];
    for (const file of markdownFiles(root)) {
        const text = fs.readFileSync(file, "utf8");
        const head = text.match(/^---\n([\s\S]*?)\n---/);
        if (!head) continue;
        let front;
        try {
            front = YAML.parse(head[1]);
        } catch {
            continue;
        }
        texts.push({
            file,
            text,
            literature: front?.type === "lore" && front?.subType === "literature",
        });
        if (!front?.shortcode || !front?.type) continue;
        const address = `${front.type}-${front.shortcode}`;
        const rel = path.relative(root, file).split(path.sep).join("/");
        const own = front.name ?? {};
        const mine = [];
        const push = (value, kind) => {
            if (typeof value === "string" && value.trim()) mine.push({ name: value.trim(), kind });
        };
        if (front.type === "being" && (own.given || own.clan)) {
            push(own.given, "given");
            push(own.clan, "clan");
        } else push(own.full, "full");
        for (const alias of own.aliases ?? []) push(alias, "alias");
        const walk = (value) => {
            if (Array.isArray(value)) value.forEach(walk);
            else if (value && typeof value === "object") {
                for (const [key, inner] of Object.entries(value)) {
                    if ((key === "title" || key === "name") && typeof inner === "string")
                        push(inner, "title");
                    else {
                        if (
                            key === "offices" &&
                            inner &&
                            !Array.isArray(inner) &&
                            typeof inner === "object"
                        )
                            for (const office of Object.keys(inner)) push(office, "title");
                        walk(inner);
                    }
                }
            }
        };
        walk(front.data);
        const data = front.data ?? {};
        const gender = typeof data.gender === "string" ? data.gender.toLowerCase() : null;
        const entry = {
            address,
            file,
            rel,
            text,
            front,
            names: new Set(mine.map((one) => keyOf(one.name))),
            mine,
            type: front.type,
            given:
                front.type === "being" && typeof own.given === "string" ? own.given.trim() : null,
            gender,
            culture: typeof data.culture === "string" ? data.culture : null,
            lore: [].concat(data.lore ?? []),
            tags: [].concat(front.tags ?? []),
            ownNames: [own.full, ...(own.aliases ?? [])].filter((n) => typeof n === "string"),
        };
        notes.set(address, entry);
        all.push(entry);
    }
    treeCache = { root, notes, all, texts };
    return treeCache;
}

/**
 * The names in a guard's scope.
 *
 * @param {ReturnType<typeof readTree>} tree
 * @param {{paths?: string[], notes?: string[], culture?: string, lore?: string[], tag?: string, ownName?: RegExp}} scope
 */
export function namesInScope(tree, scope) {
    const names = [];
    for (const note of tree.all) {
        if (note.type === "folder") continue;
        const inScope =
            (scope.paths ?? []).some((prefix) => note.rel.startsWith(prefix)) ||
            (scope.notes ?? []).includes(note.rel) ||
            (scope.culture && note.culture === scope.culture) ||
            (scope.lore ?? []).some((one) => note.lore.includes(one)) ||
            (scope.tag && note.tags.includes(scope.tag)) ||
            (scope.ownName && note.ownNames.some((n) => scope.ownName.test(n)));
        if (!inScope) continue;
        for (const one of note.mine)
            names.push({
                ...one,
                address: note.address,
                file: note.file,
                text: note.text,
                gender: note.gender,
            });
    }
    return names;
}

/**
 * Whether a note's prose writes a name in bold: a person or a place the note
 * names without a note of its own. The frontmatter is not read.
 */
function boldIn(text, key) {
    const body = text.replace(/^---\n[\s\S]*?\n---\n?/, "");
    for (const match of body.matchAll(/\*\*([^*\n]+)\*\*/g))
        if (keyOf(match[1]) === key) return true;
    return false;
}

/** Where a literal sits in a text, or null. */
function locate(text, literal, from = 0) {
    const at = text.indexOf(literal, from);
    return at === -1 ? null : at;
}

const unmarkedCache = new Map();

/** A text with every mark stripped and its case kept, one character for one. */
function unmarked(text) {
    const known = unmarkedCache.get(text);
    if (known !== undefined) return known;
    const bare =
        /^[\x00-\x7f]*$/.test(text) ? text : (
            text.replace(/[^\x00-\x7f]/g, (char) => {
                const stripped = char.normalize("NFD").replace(/\p{M}/gu, "");
                return stripped.length === char.length ? stripped : char;
            })
        );
    unmarkedCache.set(text, bare);
    return bare;
}

/**
 * Where a text writes a retired name. Spans in `skip`, poetry fences and
 * `terran_analog` comments are not read.
 */
export function retiredIn(text, retired, skip = []) {
    if (!retired.length) return [];
    const spans = [...skip];
    for (const match of text.matchAll(/^```poetry[^\n]*\n[\s\S]*?^```$/gm))
        spans.push({ from: match.index, to: match.index + match[0].length });
    for (const match of text.matchAll(/^[ \t]*# terran_analog:.*$/gm))
        spans.push({ from: match.index, to: match.index + match[0].length });
    const bare = unmarked(text.normalize("NFC"));
    const byForm = new Map(retired.map((one) => [unmarked(one.name.normalize("NFC")), one]));
    const escape = (form) => form.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
        `(?<![\\p{L}\\p{M}])(${[...byForm.keys()]
            .sort((a, b) => b.length - a.length)
            .map(escape)
            .join("|")})(?![\\p{L}\\p{M}])`,
        "gu",
    );
    const out = [];
    for (const match of bare.matchAll(pattern)) {
        if (spans.some((span) => match.index >= span.from && match.index < span.to)) continue;
        const one = byForm.get(match[1]);
        out.push({
            at: match.index,
            name: one.name,
            instead: one.instead,
            written: text.normalize("NFC").slice(match.index, match.index + match[1].length),
        });
    }
    return out;
}

/**
 * The names a language page lists under a heading: one per bullet, or
 * comma-separated in a paragraph, a gloss after ` – ` or ` — ` dropped.
 */
export function listedNames(note, heading) {
    const out = [];
    for (const found of sections(note, heading)) {
        const body = found.body.split("\n").slice(1).join("\n");
        let offset = found.at + found.body.split("\n")[0].length + 1;
        for (const line of body.split("\n")) {
            const lineAt = offset;
            offset += line.length + 1;
            if (!line.trim() || line.startsWith("#") || line.startsWith("|")) continue;
            const text = line.replace(/^-\s+/, "");
            const parts = text.includes(",") && !/^-/.test(line) ? text.split(",") : [text];
            let cursor = 0;
            for (const part of parts) {
                const name = part.replace(/\s[–—]\s.*$/, "").trim();
                const at = lineAt + line.indexOf(part.trim(), cursor);
                cursor = line.indexOf(part.trim(), cursor) + part.trim().length;
                if (name) out.push({ name, at, heading });
            }
        }
    }
    return out;
}

/**
 * Other lexicons, read on demand by address and cached for the process.
 *
 * @param {ReturnType<typeof readTree>} tree
 */
export function lexiconLoader(tree) {
    const cache = new Map();
    return (address) => {
        if (cache.has(address)) return cache.get(address);
        const note = tree.notes.get(address);
        if (!note) {
            cache.set(address, null);
            return null;
        }
        const daughter = /\| *Source *\|/.test(note.text);
        const { rule } = readLexicon(note.text, { daughter });
        const entry = { address, file: note.file, text: note.text, rule };
        cache.set(address, entry);
        return entry;
    };
}

/** Split a Source cell: `` `*prêdâ` `` or `` sinale:`lonvu`, worn `` or `substrate` or `—`. */
export function parseSource(cell) {
    const text = (cell ?? "").trim();
    if (!text || text === "—") return { prefix: "—", etymon: null, worn: false };
    const star = text.match(/^`\*([^`]+)`$/);
    if (star) return { prefix: "*", etymon: star[1].trim(), worn: false };
    const tagged = text.match(/^([a-z]+:)`([^`]+)`(,\s*worn)?$/u);
    if (tagged) return { prefix: tagged[1], etymon: tagged[2].trim(), worn: Boolean(tagged[3]) };
    return { prefix: text, etymon: null, worn: false };
}

/** How a written form and a derived form differ: "same", "marks" or "letters". */
export function compareForms(written, derived) {
    const a = plain(written);
    const b = plain(derived);
    if (a === b) return "same";
    return demark(a) === demark(b) ? "marks" : "letters";
}

/**
 * The checks every Aurèldían guard runs.
 *
 * @param {object} config - The tongue's guard configuration.
 * @param {string} config.label - The tongue's name, for messages.
 * @param {string} config.NOTE - The language page.
 * @param {string} config.LEXICON - The lexicon note.
 * @param {string} config.tongue - The register tongue that is the tongue's own.
 * @param {object} config.scope - What `namesInScope` reads.
 * @param {string[]} [config.lists] - Name-list headings on the language page.
 * @param {boolean} [config.daughter] - Whether the lexicon has Sources.
 * @param {string} [config.ancestor] - For a daughter: the address of the Vylari lexicon.
 * @param {string[]} [config.loanPrefixes] - For a daughter: the source prefixes
 *   whose rows are loans and may use the letters the Letters table marks
 *   `loan only`; without it, every source but an inherited one counts.
 * @param {(etymon: string, row: object, declared: object) => string} [config.startForm] -
 *   For a daughter: the form the changes start from, given the etymon and the
 *   source lexicon's row; without it, the etymon itself.
 * @param {(ctx: object) => string[]} [config.extra] - A tongue's own checks.
 * @param {{note: string, lex: string|null, tree?: object, wear?: (form: string) => string}} input
 * @returns {{findings: string[], rule: object|null, counts: object}}
 */
export function analyseTongue(config, input) {
    const findings = [];
    const { note, lex } = input;
    const tree = input.tree ?? readTree();
    const verbose = Boolean(process.env.LEXICON_VERBOSE);
    if (lex === null) {
        findings.push(
            finding(
                config.LEXICON,
                null,
                null,
                "error",
                `the ${config.label} lexicon does not exist`,
            ),
        );
        return { findings, rule: null, counts: {} };
    }
    const { rule, problems } = readLexicon(lex, { daughter: config.daughter });
    for (const problem of problems)
        findings.push(finding(config.LEXICON, null, null, "error", problem));
    const atLex = (offset) => lineColumn(lex, offset);
    const lexFinding = (offset, severity, message) => {
        const { line, column } = atLex(offset);
        findings.push(finding(config.LEXICON, line, column, severity, message));
    };
    for (const p of rule.changeProblems) lexFinding(p.at, "error", p.message);
    const load = input.load ?? lexiconLoader(tree);
    const counts = { words: rule.words.length, derived: 0, marks: 0, unsourced: 0 };

    // 1. Structure.
    for (const stray of rule.strayFields)
        lexFinding(stray.at, "error", `the field "${stray.field}" is not in the field list`);

    // 2. The words: sounds, class, gloss, attested, duplicates.
    const seen = new Set();
    for (const word of rule.words) {
        const label = `\`${word.written}\``;
        if (!word.form) {
            lexFinding(word.at, "error", "a word row gives no form in a code span");
            continue;
        }
        if (seen.has(word.form)) lexFinding(word.at, "error", `${label} stands twice`);
        seen.add(word.form);
        if (!rule.classes.has(word.cls))
            lexFinding(
                word.at,
                "error",
                `${label} has the class "${word.cls}", which the lexicon does not declare`,
            );
        if (!word.gloss) lexFinding(word.at, "error", `${label} carries no gloss`);
        if (!word.attested) lexFinding(word.at, "error", `${label} has no attested cell`);
        for (const address of addressesOf(word.attested))
            if (!tree.notes.has(address))
                lexFinding(
                    word.at,
                    "error",
                    `${label} is attested in [[${address}]], which no note has`,
                );
        const source = parseSource(word.source);
        const loan =
            config.daughter &&
            (config.loanPrefixes ?
                config.loanPrefixes.includes(source.prefix)
            :   source.prefix !== "*" && source.prefix !== "—");
        const bound = word.form.endsWith("-");
        for (const part of word.form.replace(/-$/, "").split(/\s+/))
            for (const problem of soundProblems(part, rule, { bound, loan, label: config.label }))
                lexFinding(word.at, "error", `${label} ${problem}`);
    }

    // 3. Derivation.
    const missingLexicons = new Set();
    const sourceStress = (address) => load(address)?.rule.stress ?? "by weight";
    const inventoryOf = (other, column) => {
        // A source lexicon that states no letters is cut by the engine's own defaults.
        if (!other || !other.rule.consonants.size) return {};
        const r = other.rule;
        const consonants =
            column === "ancient" && r.ancient ?
                [...r.ancient.consonants]
            :   [...r.consonants.keys()];
        const diphthongs =
            column === "ancient" && r.ancient ? [...r.ancient.diphthongs] : [...r.diphthongs];
        return { digraphs: consonants.filter((c) => c.length > 1), diphthongs };
    };
    const judgeDerived = (word, derivedForm) => {
        const how = compareForms(word.form.replace(/-$/, ""), derivedForm);
        if (how === "same") counts.derived += 1;
        else if (how === "marks") {
            counts.marks += 1;
            lexFinding(
                word.at,
                "warning",
                `\`${word.written}\` differs in its marks from what the changes give ("${derivedForm}")`,
            );
        } else
            lexFinding(
                word.at,
                "error",
                `\`${word.written}\` is not what the changes give ("${derivedForm}")`,
            );
    };
    if (!config.daughter) {
        const steps = rule.changes.get("### Sound changes");
        if (!steps)
            findings.push(
                finding(
                    config.LEXICON,
                    null,
                    null,
                    "error",
                    'the lexicon states no "### Sound changes" table',
                ),
            );
        else
            for (const word of rule.words) {
                if (!word.ancient.length) continue;
                const { form } = derive(word.ancient[0], steps, {
                    stress: rule.stress,
                    ...inventoryOf({ rule }, "ancient"),
                });
                judgeDerived(word, form);
            }
    } else {
        for (const word of rule.words) {
            const source = parseSource(word.source);
            if (source.prefix === "—") {
                counts.unsourced += 1;
                lexFinding(word.at, "warning", `\`${word.written}\` has no source`);
                continue;
            }
            const declared = rule.sources.get(source.prefix);
            if (!declared) {
                lexFinding(
                    word.at,
                    "error",
                    `\`${word.written}\` has the source "${word.source}", which the Sources table does not declare`,
                );
                continue;
            }
            if (source.etymon === null) continue; // a source with no etymon, such as a substrate word
            const other = declared.from ? load(declared.from) : null;
            if (!other) {
                if (declared.from) missingLexicons.add(declared.from);
                continue;
            }
            const column = source.prefix === "*" ? "ancient" : "form";
            const etymon = plain(source.etymon);
            const row = other.rule.words.find((w) =>
                column === "ancient" ?
                    w.ancient.includes(etymon)
                :   w.form === etymon || w.form === `${etymon}-`,
            );
            if (!row) {
                lexFinding(
                    word.at,
                    "error",
                    `\`${word.written}\` derives from \`${source.etymon}\`, which no row of ${declared.from} carries`,
                );
                continue;
            }
            const steps = rule.changes.get(declared.by);
            if (!steps) {
                lexFinding(
                    word.at,
                    "error",
                    `the Sources table names "${declared.by}", and the lexicon has no such change table`,
                );
                continue;
            }
            let start =
                config.startForm ? config.startForm(source.etymon, row, declared) : source.etymon;
            if (source.worn) {
                if (!input.wear) {
                    lexFinding(
                        word.at,
                        "error",
                        `\`${word.written}\` derives from a worn form, and nothing here wears a ${declared.from} word`,
                    );
                    continue;
                }
                start = input.wear(start, declared.from);
            }
            const { form } = derive(start, steps, {
                stress: sourceStress(declared.from),
                ...inventoryOf(other, column),
            });
            judgeDerived(word, form);
        }
        for (const address of missingLexicons)
            findings.push(
                finding(
                    config.LEXICON,
                    null,
                    null,
                    "warning",
                    `the lexicon ${address} does not exist, so the words sourced from it are not checked`,
                ),
            );
    }

    // 4. Built from.
    for (const word of rule.words) {
        if (!word.built || word.built === "—") continue;
        const { form, problems: why } = builtForm(word.built, rule);
        for (const problem of why) lexFinding(word.at, "error", `\`${word.written}\`: ${problem}`);
        if (form !== null && form !== word.form.replace(/-$/, ""))
            lexFinding(
                word.at,
                "error",
                `\`${word.written}\` is not what its parts give ("${form}")`,
            );
    }

    // 5. The register.
    const inScope = namesInScope(tree, config.scope);
    const byKey = new Map();
    for (const row of rule.register) {
        const key = keyOf(row.name);
        if (byKey.has(key))
            lexFinding(row.at, "error", `**${row.name}** stands twice in the register`);
        else byKey.set(key, row);
        const base = row.tongue.split(":")[0];
        if (!rule.tongues.has(row.tongue) && !rule.tongues.has(`${base}:<tongue>`))
            lexFinding(
                row.at,
                "error",
                `**${row.name}** is in the tongue "${row.tongue}", which the register does not declare`,
            );
        if (!row.addresses.length) lexFinding(row.at, "error", `**${row.name}** names no note`);
        for (const address of row.addresses) {
            const target = tree.notes.get(address);
            if (!target)
                lexFinding(
                    row.at,
                    "error",
                    `**${row.name}** names [[${address}]], which no note has`,
                );
            else if (!target.names.has(key) && !boldIn(target.text, key))
                lexFinding(row.at, "error", `**${row.name}** is not a name of [[${address}]]`);
        }
    }
    const reported = new Set();
    for (const one of inScope) {
        const key = keyOf(one.name);
        const row = byKey.get(key);
        if (row && row.addresses.includes(one.address)) continue;
        const tag = `${key}|${one.address}`;
        if (reported.has(tag)) continue;
        reported.add(tag);
        const { line, column } = lineColumn(one.text, locate(one.text, one.name));
        const file = path.relative(process.cwd(), one.file) || one.file;
        findings.push(
            finding(
                file,
                line,
                column,
                "error",
                row ?
                    `"${one.name}" is in the ${config.label} register, which does not list [[${one.address}]] for it`
                :   `"${one.name}" is a ${config.label} name the register does not register`,
            ),
        );
    }
    // The tongue's own names: sound rules (counted), parts (checked).
    let own = 0;
    let built = 0;
    let unreached = 0;
    const breaks = [];
    for (const row of rule.register) {
        if (row.tongue !== config.tongue) continue;
        own += 1;
        const words = plain(row.name)
            .replace(ARTICLE, "")
            .split(/[-\s]+/)
            .filter(Boolean);
        const broke = words.flatMap((w) =>
            soundProblems(w.replace(/['’]s$/, ""), rule, { label: config.label }),
        );
        if (broke.length) breaks.push({ row, broke });
        if (!row.built || row.built === "—") {
            unreached += 1;
            continue;
        }
        const made = builtForm(row.built, rule);
        for (const problem of made.problems)
            lexFinding(row.at, "error", `**${row.name}**: ${problem}`);
        if (made.form === null) continue;
        const how = compareForms(row.name.replace(ARTICLE, "").replace(/[-\s]+/g, " "), made.form);
        if (how === "letters")
            lexFinding(
                row.at,
                "error",
                `**${row.name}** is not what its parts give ("${made.form}")`,
            );
        else if (how === "marks")
            lexFinding(
                row.at,
                "warning",
                `**${row.name}** differs in its marks from what its parts give ("${made.form}")`,
            );
        else built += 1;
    }
    if (breaks.length) {
        const names = section(lex, "### Names");
        const { line, column } = atLex(names.at);
        findings.push(
            finding(
                config.LEXICON,
                line,
                column,
                "warning",
                `${breaks.length} of ${own} ${config.label} names in the register break the sound rules${verbose ? "" : " (set LEXICON_VERBOSE to list them)"}`,
            ),
        );
        if (verbose)
            for (const { row, broke } of breaks)
                for (const b of broke) lexFinding(row.at, "warning", `**${row.name}** ${b}`);
    }

    // The language page's lists.
    let listed = 0;
    for (const heading of config.lists ?? []) {
        const names = listedNames(note, heading);
        if (!names.length) {
            findings.push(
                finding(
                    config.NOTE,
                    null,
                    null,
                    "error",
                    `the note lists no names under "${heading}"`,
                ),
            );
            continue;
        }
        listed += names.length;
        const bad = [];
        for (const one of names) {
            const broke = plain(one.name)
                .split(/[-\s]+/)
                .filter(Boolean)
                .flatMap((w) => soundProblems(w, rule, { label: config.label }));
            if (broke.length) bad.push({ one, broke });
        }
        if (bad.length) {
            const { line, column } = lineColumn(note, names[0].at);
            findings.push(
                finding(
                    config.NOTE,
                    line,
                    column,
                    "warning",
                    `${bad.length} of ${names.length} names under "${heading}" break the ${config.label} sound rules${verbose ? "" : " (set LEXICON_VERBOSE to list them)"}`,
                ),
            );
            if (verbose)
                for (const { one, broke } of bad) {
                    const { line: l, column: c } = lineColumn(note, one.at);
                    for (const b of broke)
                        findings.push(finding(config.NOTE, l, c, "warning", `${one.name} ${b}`));
                }
        }
    }

    // 6. Retired names.
    const retiredSeen = new Set();
    for (const one of rule.retired) {
        const form = unmarked(one.name.normalize("NFC"));
        if (retiredSeen.has(form))
            lexFinding(one.at, "error", `\`${one.name}\` stands twice in the retired names`);
        retiredSeen.add(form);
    }
    if (rule.retired.length)
        for (const { file, text, literature } of tree.texts) {
            if (literature) continue;
            const rel = path.relative(process.cwd(), file) || file;
            const isOwn = path.resolve(file) === path.resolve(config.LEXICON);
            const body = isOwn ? lex : text;
            const skip = isOwn && rule.retiredAt ? [rule.retiredAt] : [];
            for (const hit of retiredIn(body, rule.retired, skip)) {
                const { line, column } = lineColumn(body, hit.at);
                findings.push(
                    finding(
                        rel,
                        line,
                        column,
                        "error",
                        hit.instead ?
                            `"${hit.written}" is a retired name; the setting writes ${hit.instead}`
                        :   `"${hit.written}" is a retired name, and the setting writes none in its place`,
                    ),
                );
            }
        }

    // 7. The tongue's own checks.
    if (config.extra)
        for (const line of config.extra({
            rule,
            lex,
            note,
            tree,
            load,
            lexFinding,
            finding,
            lineColumn,
            counts,
        }))
            findings.push(line);

    Object.assign(counts, {
        register: rule.register.length,
        own,
        built,
        unreached,
        listed,
        retired: rule.retired.length,
    });
    return { findings, rule, counts };
}

/** Run a guard as a command: read the notes, print the findings and a summary. */
export function runGuard(config, extraInput = {}) {
    const note = fs.readFileSync(config.NOTE, "utf8");
    const lex = fs.existsSync(config.LEXICON) ? fs.readFileSync(config.LEXICON, "utf8") : null;
    const { findings, counts } = analyseTongue(config, { note, lex, ...extraInput });
    for (const line of findings) console.error(line);
    const errors = findings.filter((line) => line.includes(": error: ")).length;
    const warnings = findings.length - errors;
    console.log(
        `${config.label} lexicon: ${counts.words ?? 0} words (${counts.derived ?? 0} derived by the changes, ` +
            `${counts.marks ?? 0} differing in marks, ${counts.unsourced ?? 0} without a source), ` +
            `${counts.register ?? 0} registered names (${counts.own ?? 0} ${config.label}, ${counts.built ?? 0} built, ` +
            `${counts.unreached ?? 0} not yet reached), ${counts.listed ?? 0} listed names, ` +
            `${counts.retired ?? 0} retired names; ${errors} error(s), ${warnings} warning(s).`,
    );
    if (errors) process.exitCode = 1;
}
