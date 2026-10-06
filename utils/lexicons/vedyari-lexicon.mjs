/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Vedyari language.
 *
 * `Lore/Vedyari_Lexicon.md` states the language as tables under fixed headings:
 * the letters, the clusters that may open a word and the consonants that may
 * close one, the longest run of consonants, the spellings the pages do not use,
 * the joining of two words at a seam, the suffixes, the endings a given name
 * reserves for a woman, the cutting of a calling name, the classes and fields,
 * one table of words per field, the register of attested names and the names
 * retired from the setting. `Skills/Languages/Vedyari.md` adds the
 * one table the lexicon cannot carry, the scholars' spelling of the retroflex
 * and palatal letters, together with the name lists. This guard reads every one
 * of those at run time and asks whether the names the setting uses obey the
 * rules the lexicon states.
 *
 * **The notes are the single source.** No letter, cluster, suffix, seam, ending,
 * class, field or tongue is restated here. A rule the notes stop stating is a
 * rule this guard stops enforcing, and a table a note renames is reported as
 * missing rather than silently skipped.
 *
 * The checks:
 *
 * 1. **The lexicon's words.** Every row stands under a declared field, has a
 *    declared class, a gloss and an attested cell whose links name notes that
 *    exist, and no form stands twice. Its letters are the letter table's, it
 *    opens on a vowel, a single consonant or a listed cluster, it closes on a
 *    vowel or a listed consonant (a verb stem, written with a closing hyphen,
 *    is bound and closes on anything), no run of consonants is longer than the
 *    stated count, and no two vowels stand together but a listed diphthong. A
 *    "built from" cell recomputes to the form through the joining and suffix
 *    tables. Each of these is an error.
 * 2. **The register's coverage.** Every name and alias of a Vedyaran note, every
 *    given and clan name of a being of the Vedyari culture, and every title and
 *    calendar name a Vedyaran note's frontmatter carries stands in the register
 *    with that note's address. A Vedyaran note is one filed under a Vedyaran
 *    folder, one whose `data.culture` or `data.lore` names the Vedyari culture,
 *    one tagged `vedyara`, or one whose own name says Vedyara; a folder note
 *    names nothing in the setting and is never in scope. A name missing
 *    from the register, a register row naming a note that does not exist or
 *    does not carry the name, a tongue the register does not declare and a row
 *    standing twice are errors.
 * 3. **The register's Vedyari names.** A row in the `vedyari` tongue is read
 *    through the spellings table and then held to check 1's sound rules. A
 *    spelling the pages do not use and a sound rule the name breaks are
 *    warnings: the name is attested, and renaming it is the owner's decision.
 *    A "built from" cell must recompute to the name letter for letter, which is
 *    an error when it does not; where the letters agree and only a vowel's
 *    length differs, it is a warning. A row that gives no parts is a warning,
 *    since it is a name the lexicon does not yet reach.
 * 4. **The language page's name lists.** Every listed name is read through the
 *    scholars' spelling table and the spellings table and held to the sound
 *    rules; a break is a warning on the name. A man's name closing on an
 *    ending the lexicon reserves for a woman, and a name listed twice, are
 *    warnings. The marks the lists write that the pages do not use are counted
 *    once per list.
 * 5. **The beings.** A man's given name that closes on a woman's ending is a
 *    warning on the being's note.
 * 6. **Calling names.** A register row in the `calling` tongue is a calling
 *    name: every note it names is a being with a given name, its "built from"
 *    cell gives that given name, and the name is one the calling-name rule cuts
 *    from it. Breaking any of these, or a sound rule, is an error; a closing the
 *    lexicon gives to the other gender is a warning. A being in scope whose given
 *    name runs to the stated number of syllables and carries no calling name is
 *    an error on the being's note.
 * 7. **Retired names.** A name the lexicon's retired table lists, written in any
 *    note of the content tree, is an error at the place it is written. Marks are
 *    ignored and case is kept, so a retired name is caught however it is accented
 *    and an address, which is lower case, never matches. A literature note, a
 *    poetry fence, a `terran_analog` comment and the retired table itself are
 *    not read.
 *
 * A guard proves the pages agree with their own rules, never that the rules are
 * good. Whether a coined root sounds Vedyari is a judgement made by reading it
 * aloud.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory, with a field dropped rather
 * than guessed. Both severities go to stderr and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** The note holding the scholars' spelling and the name lists. */
export const NOTE = "assets/content/Skills/Languages/Vedyari.md";

/** The note holding the rules, the words and the register of attested names. */
export const LEXICON = "assets/content/Lore/Vedyari_Lexicon.md";

/** The content tree the register's scope is derived from. */
export const CONTENT = "assets/content";

/** The culture whose naming in `data.culture` or `data.lore` puts a note in scope. */
const CULTURE = "vedyariclt";

/** The tag that puts a note in scope wherever it is filed. */
const TAG = "vedyara";

/** Folders whose every note is in scope. */
const SCOPE_PATHS = [
    "Regions/Ankaris/Vedyara/",
    "Affiliations/Divine/Varnaka/",
    "Lore/Deities/Varnaka/",
    "Affiliations/Arcane/Varnaka/",
    "Affiliations/Organizations/Vedyaran/",
    "Skills/Mystical/Varnaka/",
];

/** A note whose own name says this is in scope. */
const OWN_NAME = /Vedyar/u;

/** The name lists of the language page. */
const LISTS = ["### Male Given Names", "### Female Given Names", "### Clan Names"];

/** The register tongue that marks a calling name. */
export const CALLING = "calling";

/** The list whose names are given to men. */
const MALE_LIST = "### Male Given Names";

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
 *
 * @param {string} text - The whole note.
 * @param {string} heading - The heading line, marks included.
 * @returns {{body: string, at: number}|null} The section, or null when absent.
 */
export function section(text, heading) {
    const marker = `\n${heading}\n`;
    const found = text.indexOf(marker);
    if (found === -1) return null;
    const start = found + 1;
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

/**
 * Every table row of a text, as cells, with the offset of the row. The header
 * row and the rule beneath it carry no data and are dropped.
 *
 * @param {string} text - The text holding the table.
 * @param {number} [offset] - Where the text starts in its note.
 * @returns {Array<{cells: string[], at: number}>} One entry per row.
 */
export function rows(text, offset = 0) {
    const lines = [];
    let at = offset;
    for (const line of text.split("\n")) {
        if (line.trim().startsWith("|")) lines.push({ line, at });
        at += line.length + 1;
    }
    // A pipe escaped inside a cell, as a wikilink in a table writes it, does not split it.
    const cells = lines.map(({ line }) =>
        line
            .split(/(?<!\\)\|/)
            .slice(1, -1)
            .map((cell) => cell.trim()),
    );
    const isRule = (row) => row.every((cell) => /^:?-+:?$/.test(cell));
    const out = [];
    for (let i = 0; i < cells.length; i += 1) {
        if (isRule(cells[i])) continue;
        if (i + 1 < cells.length && isRule(cells[i + 1])) continue;
        out.push({ cells: cells[i], at: lines[i].at });
    }
    return out;
}

/** Every backticked run in a text. */
export function ticked(text) {
    return [...(text ?? "").matchAll(/`([^`]+)`/g)].map((match) => match[1]);
}

/** A word as the rules read it: composed, lower case. */
export function plain(word) {
    return word.normalize("NFC").toLowerCase();
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
function addressesOf(cell) {
    return [...(cell ?? "").matchAll(/\[\[([^|\\\]]+)/g)].map((match) => match[1].trim());
}

/**
 * The whole rule, read off the two notes.
 *
 * @param {string} note - The language page.
 * @param {string|null} lex - The lexicon note, or null when absent.
 * @returns {{rule: object, problems: string[]}} The rule, and a message for
 *   every section either note fails to state.
 */
export function ruleFrom(note, lex) {
    const problems = [];
    const need = (text, heading, label) => {
        const found = text === null ? null : section(text, heading);
        if (!found) problems.push(`${label} states no section "${heading}"`);
        return found ?? { body: "", at: 0 };
    };
    const lexSection = (heading) => need(lex, heading, "the lexicon");

    // The letters, by kind.
    const consonants = new Set();
    const shortVowels = new Set();
    const longVowels = new Map();
    const diphthongs = new Set();
    const syllabic = new Set();
    for (const { cells } of rows(lexSection("### Letters").body)) {
        const kind = (cells[1] ?? "").toLowerCase();
        for (const letter of ticked(cells[0]).map(plain)) {
            if (kind.startsWith("diphthong")) diphthongs.add(letter);
            else if (kind.startsWith("long vowel")) longVowels.set(letter, true);
            else if (kind.startsWith("short vowel")) shortVowels.add(letter);
            else if (kind.startsWith("consonant")) {
                consonants.add(letter);
                if (/vowel between consonants/.test(kind)) syllabic.add(letter);
            }
        }
    }
    // A long vowel's short partner is the same letter without its mark.
    const lengthen = new Map();
    for (const long of longVowels.keys()) lengthen.set(demark(long), long);

    // The edges of a word.
    const onsets = new Set();
    const finals = new Set();
    for (const { cells } of rows(lexSection("### Word edges").body)) {
        const label = (cells[0] ?? "").toLowerCase();
        const sounds = ticked(cells[1]).map(plain);
        if (/open/.test(label)) sounds.forEach((one) => onsets.add(one));
        else if (/close/.test(label)) sounds.forEach((one) => finals.add(one));
    }

    let maxRun = null;
    for (const { cells } of rows(lexSection("### Clusters").body)) {
        const count = Number.parseInt(cells[1] ?? "", 10);
        if (/most consonants/i.test(cells[0] ?? "") && Number.isFinite(count)) maxRun = count;
    }
    if (maxRun === null) problems.push('the lexicon\'s "### Clusters" states no count');

    // The spellings the pages do not use, and what each reads as.
    const folds = rows(lexSection("### Spellings the pages do not use").body).map(({ cells }) => ({
        from: ticked(cells[0]).map(plain)[0] ?? "",
        to: (cells[1] ?? "").trim() === "—" ? "" : (ticked(cells[1]).map(plain)[0] ?? ""),
        what: (cells[2] ?? "").trim(),
    }));

    // The scholars' spelling on the language page.
    const scholar = rows(need(note, "### Spelling in Names", "the language page").body)
        .map(({ cells }) => ({
            from: ticked(cells[0]).map(plain)[0] ?? "",
            to: ticked(cells[1]).map(plain)[0] ?? "",
        }))
        .filter((one) => one.from);

    // The seam.
    const vowelList = (cell) => new Set(ticked(cell).map(plain));
    const joins = rows(lexSection("### Joining").body).map(({ cells }) => ({
        first: vowelList(cells[0]),
        second: vowelList(cells[1]),
        written: ticked(cells[2]).map(plain)[0] ?? "",
    }));

    // The suffixes and how each treats its stem.
    const suffixes = new Map();
    for (const { cells } of rows(lexSection("### Suffixes").body)) {
        const [form] = ticked(cells[0]).map(plain);
        if (!form) continue;
        const stem = (cells[1] ?? "").toLowerCase();
        const mode =
            /length/.test(stem) ? "lengthens"
            : /replaces/.test(stem) ? "replaces"
            : "added";
        suffixes.set(form, { mode, makes: (cells[2] ?? "").trim() });
    }

    // The endings reserved for a woman's name.
    const womanEndings = [];
    for (const { cells } of rows(lexSection("### Given names").body)) {
        if (/woman/i.test(cells[1] ?? "") && /only/i.test(cells[1] ?? ""))
            womanEndings.push(...ticked(cells[0]).map((one) => plain(one).replace(/^-/, "")));
    }

    // The calling name: its closings, the doubled syllable and the length that requires one.
    const calling = { endings: [], doubled: null, threshold: null };
    for (const { cells } of rows(lexSection("### Calling names").body)) {
        const label = cells[0] ?? "";
        const usual = (cells[1] ?? "").toLowerCase();
        const who =
            /\bwoman\b/.test(usual) ? "woman"
            : /\bman\b/.test(usual) ? "man"
            : "either";
        const count = Number.parseInt(cells[1] ?? "", 10);
        if (/fewest syllables/i.test(label) && Number.isFinite(count)) calling.threshold = count;
        else if (/doubl/i.test(label)) calling.doubled = who;
        else
            for (const ending of ticked(label).map(plain))
                if (ending.startsWith("-"))
                    calling.endings.push({ form: ending.slice(1), usual: who });
    }
    if (lex !== null && !calling.endings.length)
        problems.push('the lexicon\'s "### Calling names" states no closing');
    if (lex !== null && calling.threshold === null)
        problems.push('the lexicon\'s "### Calling names" states no fewest syllables');

    // Classes and fields.
    const classes = new Set(
        rows(lexSection("### Classes").body).flatMap(({ cells }) => ticked(cells[0])),
    );
    const fields = rows(lexSection("### Fields").body)
        .map(({ cells }) => cells[0])
        .filter(Boolean);

    // The words, field by field.
    const words = [];
    const wordsSection = lexSection("## Words");
    for (const field of fields) {
        const found = section(wordsSection.body, `### ${field}`);
        if (!found) {
            if (lex !== null) problems.push(`the lexicon states no word table for "${field}"`);
            continue;
        }
        for (const { cells, at } of rows(found.body, wordsSection.at + found.at)) {
            const [form] = ticked(cells[0]);
            words.push({
                written: form ?? cells[0],
                form: plain(form ?? cells[0] ?? ""),
                cls: (cells[1] ?? "").trim(),
                gloss: (cells[2] ?? "").trim(),
                built: (cells[3] ?? "").trim(),
                attested: (cells[4] ?? "").trim(),
                field,
                at,
            });
        }
    }
    // Every field heading under Words must be a declared field.
    const strayFields = [];
    for (const match of wordsSection.body.matchAll(/^### (.+)$/gm)) {
        if (!fields.includes(match[1].trim()))
            strayFields.push({ field: match[1].trim(), at: wordsSection.at + match.index });
    }

    // The register.
    const tongues = new Set(
        rows(lexSection("### Tongues").body).flatMap(({ cells }) => ticked(cells[0])),
    );
    const names = lexSection("### Names");
    const register = rows(names.body, names.at).map(({ cells, at }) => ({
        name: (cells[0] ?? "").replace(/\*\*/g, "").trim(),
        addresses: addressesOf(cells[1]),
        tongue: ticked(cells[2])[0] ?? (cells[2] ?? "").trim(),
        built: (cells[3] ?? "").trim(),
        at,
    }));

    // The names retired from the setting, and what is written for each.
    const retiredSection = lexSection("### Retired names");
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
            lengthen,
            diphthongs,
            syllabic,
            onsets,
            finals,
            maxRun: maxRun ?? Number.POSITIVE_INFINITY,
            folds,
            scholar,
            joins,
            suffixes,
            womanEndings,
            calling,
            classes,
            fields,
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

/**
 * A word cut into its sounds: consonants (digraphs whole), vowels and
 * diphthongs. A consonant the letter table marks as a vowel between consonants
 * is read as a vowel there.
 *
 * @param {string} word - A plain word.
 * @param {object} rule - From `ruleFrom`.
 * @returns {{sound: string, kind: "C"|"V"|"?"}[]} The sounds.
 */
export function sounds(word, rule) {
    const consonants = [...rule.consonants].sort((a, b) => b.length - a.length);
    const vowels = [...rule.diphthongs, ...rule.longVowels.keys(), ...rule.shortVowels].sort(
        (a, b) => b.length - a.length,
    );
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
            out.push({ sound: consonant, kind: "C" });
            i += consonant.length;
            continue;
        }
        const char = String.fromCodePoint(word.codePointAt(i));
        out.push({ sound: char, kind: "?" });
        i += char.length;
    }
    for (let k = 1; k < out.length - 1; k += 1) {
        if (rule.syllabic.has(out[k].sound) && out[k - 1].kind === "C" && out[k + 1].kind === "C")
            out[k] = { sound: out[k].sound, kind: "V" };
    }
    return out;
}

/**
 * What a word breaks of the sound rules, as messages.
 *
 * @param {string} word - A plain word, no hyphen or space.
 * @param {object} rule - From `ruleFrom`.
 * @param {boolean} [bound] - True for a verb stem, which closes on anything.
 * @returns {string[]} One message per rule broken.
 */
export function soundProblems(word, rule, bound = false) {
    const out = [];
    const cut = sounds(word, rule);
    for (const one of cut.filter((s) => s.kind === "?"))
        out.push(`holds "${one.sound}", which is not a letter of Vedyari`);
    if (out.length) return out;
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
    if (!bound && coda && !rule.finals.has(coda))
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

/**
 * A name read through a spelling table: each listed spelling replaced by what
 * it reads as, with a note of every one applied.
 *
 * @param {string} name - The name as written.
 * @param {{from: string, to: string, what?: string}[]} table - The spellings.
 * @returns {{form: string, applied: {from: string, to: string, what?: string}[]}}
 */
export function respell(name, table) {
    let form = plain(name);
    const applied = [];
    // Longer spellings first, so a pair is read before either of its letters.
    for (const one of [...table].sort((a, b) => b.from.length - a.from.length)) {
        if (!one.from || !form.includes(one.from)) continue;
        // A letter spelling such as `c` for `ch` applies only where the full form is not already written.
        if (one.to.startsWith(one.from)) {
            const pattern = new RegExp(`${one.from}(?!${one.to.slice(one.from.length)})`, "gu");
            if (!pattern.test(form)) continue;
            form = form.replace(pattern, one.to);
        } else form = form.split(one.from).join(one.to);
        applied.push(one);
    }
    return { form: form.normalize("NFC"), applied };
}

/** The vowel a word closes on, or null when it closes on a consonant. */
function lastVowel(word, rule) {
    const cut = sounds(word, rule);
    const tail = cut.at(-1);
    return tail && tail.kind === "V" ? tail.sound : null;
}

/**
 * Two words joined at a seam, by the joining table.
 *
 * @param {string} first - The first word.
 * @param {string} second - The second word.
 * @param {object} rule - From `ruleFrom`.
 * @returns {string} The joined word.
 */
export function join(first, second, rule) {
    const end = lastVowel(first, rule);
    const begin = sounds(second, rule)[0];
    if (!end || !begin || begin.kind !== "V") return first + second;
    for (const row of rule.joins) {
        if (!row.first.has(end) || !row.second.has(begin.sound)) continue;
        const head = first.slice(0, first.length - end.length);
        const rest = second.slice(begin.sound.length);
        // A written form closing on `+` stands between the two vowels, both kept.
        if (row.written.endsWith("+")) return first + row.written.slice(0, -1) + second;
        return head + row.written + rest;
    }
    return first + second;
}

/**
 * A suffix added to a stem, by the suffix table.
 *
 * @param {string} stem - The stem; a verb stem's closing hyphen is already off.
 * @param {string} suffix - The suffix, its opening hyphen included.
 * @param {object} rule - From `ruleFrom`.
 * @returns {string|null} The word, or null when the suffix is not declared.
 */
export function suffixed(stem, suffix, rule) {
    const entry = rule.suffixes.get(suffix);
    if (!entry) return null;
    const body = suffix.slice(1);
    if (entry.mode === "replaces" && stem.endsWith("a") && !stem.endsWith("ā"))
        return stem.slice(0, -1) + body;
    if (entry.mode === "lengthens") {
        const end = lastVowel(stem, rule);
        const long = end ? rule.lengthen.get(end) : null;
        if (long) return stem.slice(0, stem.length - end.length) + long + body;
    }
    return stem + body;
}

/**
 * The form a "built from" cell gives: words separated by ` · `, parts joined
 * by `+`, each part a lexicon word or a declared suffix in a code span.
 *
 * @param {string} cell - The cell.
 * @param {object} rule - From `ruleFrom`.
 * @returns {{form: string|null, problems: string[]}} The form, or the reasons
 *   it cannot be made.
 */
export function builtForm(cell, rule) {
    const problems = [];
    const lexicon = new Set(rule.words.map((word) => word.form));
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
            if (!lexicon.has(part)) {
                problems.push(`"${part}" is not a row of the lexicon`);
                continue;
            }
            const stem = part.replace(/-$/, "");
            word = word === null ? stem : join(word, stem, rule);
        }
        out.push(word ?? "");
    }
    return { form: problems.length ? null : out.join(" "), problems };
}

/**
 * Compare a written name with what its parts give.
 *
 * @param {string} written - The name, read through the spellings table.
 * @param {string} made - What the parts give.
 * @returns {"same"|"length"|"letters"} How far apart they are.
 */
export function compareBuilt(written, made) {
    const words = (text) =>
        plain(text)
            .replace(ARTICLE, "")
            .split(/[-\s]+/)
            .filter(Boolean)
            .join(" ");
    const a = words(written);
    const b = words(made);
    if (a === b) return "same";
    return demark(a) === demark(b) ? "length" : "letters";
}

/**
 * Every reading of a name in which each vowel carrying a stress mark is taken
 * short or long. A stress mark is a spelling the spellings table reads as its
 * bare vowel and describes as a stress mark.
 *
 * @param {string} name - The name as written.
 * @param {object} rule - From `ruleFrom`.
 * @returns {string[]} The readings, each read through the spellings table.
 */
export function stressReadings(name, rule) {
    const stress = rule.folds.filter((one) => /stress/i.test(one.what));
    let readings = [plain(name)];
    for (const one of stress) {
        const long = rule.lengthen.get(one.to);
        if (!long || long === one.to) continue;
        readings = readings.flatMap((reading) => {
            if (!reading.includes(one.from)) return [reading];
            const parts = reading.split(one.from);
            let out = [parts[0]];
            for (const part of parts.slice(1))
                out = out.flatMap((head) => [head + one.to + part, head + long + part]);
            return out;
        });
    }
    return readings.map((reading) => respell(reading, rule.folds).form);
}

/** How many syllables a name holds: one for each vowel, diphthong and vowel r. */
export function syllables(name, rule) {
    return sounds(respell(name, rule.folds).form, rule).filter((one) => one.kind === "V").length;
}

/**
 * Every calling name the rule cuts from a given name, with whom its closing is
 * usual for. The given name is cut before its second or third vowel and takes a
 * closing, or its first syllable is written twice where that syllable opens on
 * a consonant. A vowel carrying a stress mark is read short and long, and a
 * vowel r is spoken and written `ri`.
 *
 * @param {string} given - The given name as written.
 * @param {object} rule - From `ruleFrom`.
 * @returns {Map<string, string>} Each calling name, plain, to "man", "woman" or "either".
 */
export function callingNames(given, rule) {
    const out = new Map();
    for (const reading of stressReadings(given, rule)) {
        const cut = sounds(reading, rule);
        const vowels = cut.flatMap((one, at) => (one.kind === "V" ? [at] : []));
        const spell = (to) =>
            cut
                .slice(0, to)
                .map((one) =>
                    one.kind === "V" && rule.syllabic.has(one.sound) ? `${one.sound}i` : one.sound,
                )
                .join("");
        for (const nth of [1, 2]) {
            if (vowels.length <= nth) continue;
            for (const ending of rule.calling.endings) {
                const form = spell(vowels[nth]) + ending.form;
                if (!out.has(form)) out.set(form, ending.usual);
            }
        }
        if (rule.calling.doubled && vowels.length && cut[0].kind === "C") {
            const first = spell(vowels[0] + 1);
            if (!out.has(first + first)) out.set(first + first, rule.calling.doubled);
        }
    }
    return out;
}

/**
 * Every markdown file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, in walk order.
 */
function markdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/**
 * Every note's frontmatter, keyed by address, and the names in scope.
 *
 * @param {string} [root] - The content tree.
 * @returns {{notes: Map<string, {file: string, text: string, names: Set<string>, type: string,
 *   given: string|null, gender: string|null}>,
 *   names: Array<{name: string, kind: string, address: string, file: string, text: string, gender: string|null}>,
 *   texts: Array<{file: string, text: string, literature: boolean}>}}
 */
export function attestedNames(root = CONTENT) {
    const notes = new Map();
    const names = [];
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
        // Titles and calendar names a note's data carries.
        const walk = (value) => {
            if (Array.isArray(value)) value.forEach(walk);
            else if (value && typeof value === "object") {
                for (const [key, inner] of Object.entries(value)) {
                    if ((key === "title" || key === "name") && typeof inner === "string")
                        push(inner, "title");
                    else {
                        // An office is named by its key.
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
        notes.set(address, {
            file,
            text,
            names: new Set(mine.map((one) => keyOf(one.name))),
            type: front.type,
            given:
                front.type === "being" && typeof own.given === "string" ? own.given.trim() : null,
            gender,
        });

        const lore = [].concat(data.lore ?? []);
        const tags = [].concat(front.tags ?? []);
        const ownNames = [own.full, ...(own.aliases ?? [])].filter((n) => typeof n === "string");
        // A folder note files other notes and names nothing in the setting.
        const inScope =
            front.type !== "folder" &&
            (SCOPE_PATHS.some((prefix) => rel.startsWith(prefix)) ||
                data.culture === CULTURE ||
                lore.includes(CULTURE) ||
                tags.includes(TAG) ||
                ownNames.some((n) => OWN_NAME.test(n)));
        if (!inScope) continue;
        for (const one of mine) names.push({ ...one, address, file, text, gender });
    }
    return { notes, names, texts };
}

/** Where a literal sits in a text, or null. */
function locate(text, literal, from = 0) {
    const at = text.indexOf(literal, from);
    return at === -1 ? null : at;
}

/** Texts already stripped of their marks, since the whole tree is read on every run. */
const unmarkedCache = new Map();

/** A text with every mark stripped and its case kept, one character for one. */
function unmarked(text) {
    const known = unmarkedCache.get(text);
    if (known !== undefined) return known;
    // Plain ASCII carries no mark.
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
 * Where a text writes a retired name. The spans in `skip`, and every poetry
 * fence and `terran_analog` comment, are not read.
 *
 * @param {string} text - The note.
 * @param {Array<{name: string, instead: string|null}>} retired - The retired table.
 * @param {Array<{from: number, to: number}>} [skip] - Spans of the text left unread.
 * @returns {Array<{at: number, name: string, instead: string|null, written: string}>}
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

/** The given name of a being closes on a woman's ending. */
function closesAsWoman(form, rule) {
    return rule.womanEndings.find((ending) => form.endsWith(ending)) ?? null;
}

/**
 * The whole analysis.
 *
 * @param {string} note - The language page.
 * @param {string|null} lex - The lexicon note.
 * @param {ReturnType<typeof attestedNames>} tree - The tree's notes and names in scope.
 * @returns {{findings: string[], rule: object, counts: object}} Every finding,
 *   the rule, and the tallies the summary reports.
 */
export function analyse(note, lex, tree) {
    const findings = [];
    const { rule, problems } = ruleFrom(note, lex);
    for (const problem of problems) {
        const file = problem.startsWith("the lexicon") ? LEXICON : NOTE;
        findings.push(finding(file, null, null, "error", problem));
    }
    if (lex === null) return { findings, rule, counts: {} };

    const atLex = (offset) => lineColumn(lex, offset);
    const lexFinding = (offset, severity, message) => {
        const { line, column } = atLex(offset);
        findings.push(finding(LEXICON, line, column, severity, message));
    };

    // 1. The lexicon's words.
    for (const stray of rule.strayFields)
        lexFinding(stray.at, "error", `the field "${stray.field}" is not in the field list`);
    const seen = new Map();
    for (const word of rule.words) {
        const label = `\`${word.written}\``;
        if (!word.form) {
            lexFinding(word.at, "error", "a word row gives no form in a code span");
            continue;
        }
        if (seen.has(word.form)) lexFinding(word.at, "error", `${label} stands twice`);
        else seen.set(word.form, word);
        if (!rule.classes.has(word.cls))
            lexFinding(
                word.at,
                "error",
                `${label} has the class "${word.cls}", which the lexicon does not declare`,
            );
        if (!word.gloss) lexFinding(word.at, "error", `${label} carries no gloss`);
        if (!word.attested) lexFinding(word.at, "error", `${label} has no attested cell`);
        for (const address of addressesOf(word.attested)) {
            if (!tree.notes.has(address))
                lexFinding(
                    word.at,
                    "error",
                    `${label} is attested in [[${address}]], which no note has`,
                );
        }
        const bound = word.form.endsWith("-");
        for (const problem of soundProblems(word.form.replace(/-$/, ""), rule, bound))
            lexFinding(word.at, "error", `${label} ${problem}`);
    }
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

    // 2. The register's coverage.
    const byKey = new Map();
    for (const row of rule.register) {
        const key = keyOf(row.name);
        if (byKey.has(key))
            lexFinding(row.at, "error", `**${row.name}** stands twice in the register`);
        else byKey.set(key, row);
        const tongueBase = row.tongue.split(":")[0];
        if (!rule.tongues.has(row.tongue) && !rule.tongues.has(`${tongueBase}:<tongue>`))
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
            else if (!target.names.has(key))
                lexFinding(row.at, "error", `**${row.name}** is not a name of [[${address}]]`);
        }
    }
    const reported = new Set();
    for (const one of tree.names) {
        const key = keyOf(one.name);
        const row = byKey.get(key);
        if (row && row.addresses.includes(one.address)) continue;
        const tag = `${key}|${one.address}`;
        if (reported.has(tag)) continue;
        reported.add(tag);
        const at = locate(one.text, one.name);
        const { line, column } = lineColumn(one.text, at);
        const file = path.relative(process.cwd(), one.file) || one.file;
        findings.push(
            finding(
                file,
                line,
                column,
                "error",
                row ?
                    `"${one.name}" is in the Vedyari register, which does not list [[${one.address}]] for it`
                :   `"${one.name}" is a Vedyaran name the register does not register`,
            ),
        );
    }

    // 3. The register's Vedyari names.
    let underived = 0;
    let built = 0;
    for (const row of rule.register) {
        if (row.tongue !== "vedyari") continue;
        const { form, applied } = respell(row.name, rule.folds);
        for (const fold of applied)
            lexFinding(
                row.at,
                "warning",
                `**${row.name}** writes "${fold.from}", ${fold.what || "a spelling the pages do not use"}`,
            );
        for (const word of form
            .replace(ARTICLE, "")
            .split(/[-\s]+/)
            .filter(Boolean)) {
            for (const problem of soundProblems(word.replace(/['’]s$/, ""), rule))
                lexFinding(row.at, "warning", `**${row.name}** ${problem}`);
        }
        if (!row.built || row.built === "—") {
            underived += 1;
            lexFinding(
                row.at,
                "warning",
                `**${row.name}** gives no parts, so the lexicon does not reach it`,
            );
            continue;
        }
        const made = builtForm(row.built, rule);
        for (const problem of made.problems)
            lexFinding(row.at, "error", `**${row.name}**: ${problem}`);
        if (made.form === null) continue;
        // A stress mark says nothing of length, so a vowel carrying one may be read either way.
        const how =
            stressReadings(row.name, rule).some((one) => compareBuilt(one, made.form) === "same") ?
                "same"
            :   compareBuilt(form, made.form);
        if (how === "letters")
            lexFinding(
                row.at,
                "error",
                `**${row.name}** is not what its parts give ("${made.form}")`,
            );
        else if (how === "length")
            lexFinding(
                row.at,
                "warning",
                `**${row.name}** differs in a vowel's length from what its parts give ("${made.form}")`,
            );
        else built += 1;
    }

    // 4. The language page's name lists.
    const listed = new Map();
    let listNames = 0;
    for (const heading of LISTS) {
        const found = section(note, heading);
        if (!found) {
            findings.push(
                finding(NOTE, null, null, "error", `the note states no section "${heading}"`),
            );
            continue;
        }
        const marks = new Map();
        for (const match of found.body.matchAll(/^- (.+)$/gm)) {
            listNames += 1;
            const name = match[1].trim();
            const offset = found.at + match.index + 2;
            const { line, column } = lineColumn(note, offset);
            const say = (message) => findings.push(finding(NOTE, line, column, "warning", message));
            const scholarly = respell(name, rule.scholar);
            const { form, applied } = respell(scholarly.form, rule.folds);
            for (const fold of applied) marks.set(fold.from, (marks.get(fold.from) ?? 0) + 1);
            for (const word of form.split(/[-\s]+/).filter(Boolean))
                for (const problem of soundProblems(word, rule)) say(`${name} ${problem}`);
            if (heading === MALE_LIST) {
                const ending = closesAsWoman(form, rule);
                if (ending)
                    say(`${name} is a man's name and closes on "-${ending}", a woman's ending`);
            }
            const key = demark(form);
            if (
                listed.has(key) &&
                heading !== "### Clan Names" &&
                listed.get(key) !== "### Clan Names"
            )
                say(
                    `${name} is listed under both ${listed.get(key).slice(4)} and ${heading.slice(4)}`,
                );
            else if (!listed.has(key)) listed.set(key, heading);
        }
        if (marks.size) {
            const { line, column } = lineColumn(note, found.at);
            const what = [...marks]
                .map(([from, count]) => {
                    const fold = rule.folds.find((one) => one.from === from);
                    return `"${from}" ${count} time(s)${fold?.what ? ` (${fold.what})` : ""}`;
                })
                .join(", ");
            findings.push(
                finding(
                    NOTE,
                    line,
                    column,
                    "warning",
                    `${heading.slice(4)} write spellings the pages do not use: ${what}`,
                ),
            );
        }
    }

    // 5. The beings.
    for (const one of tree.names) {
        if (one.kind !== "given" || one.gender !== "male") continue;
        const { form } = respell(one.name, rule.folds);
        const ending = closesAsWoman(form, rule);
        if (!ending) continue;
        const { line, column } = lineColumn(one.text, locate(one.text, one.name));
        const file = path.relative(process.cwd(), one.file) || one.file;
        findings.push(
            finding(
                file,
                line,
                column,
                "warning",
                `${one.name} is a man's given name and closes on "-${ending}", a woman's ending`,
            ),
        );
    }

    // 6. Calling names.
    const called = new Set();
    let callingCount = 0;
    for (const row of rule.register) {
        if (row.tongue !== CALLING) continue;
        callingCount += 1;
        const { form } = respell(row.name, rule.folds);
        for (const problem of soundProblems(form, rule))
            lexFinding(row.at, "error", `**${row.name}** ${problem}`);
        const [from] = ticked(row.built);
        for (const address of row.addresses) {
            const target = tree.notes.get(address);
            if (!target) continue;
            if (!target.given) {
                lexFinding(
                    row.at,
                    "error",
                    `**${row.name}** is a calling name, and [[${address}]] has no given name`,
                );
                continue;
            }
            called.add(address);
            if (!from || keyOf(from) !== keyOf(target.given))
                lexFinding(
                    row.at,
                    "error",
                    `**${row.name}** is cut from "${from ?? ""}", and the given name of [[${address}]] is ${target.given}`,
                );
            const ways = callingNames(target.given, rule);
            if (!ways.has(form)) {
                lexFinding(
                    row.at,
                    "error",
                    `**${row.name}** is not a calling name the rule cuts from ${target.given}`,
                );
                continue;
            }
            const usual = ways.get(form);
            const other = { man: "female", woman: "male" }[usual];
            if (other && target.gender === other)
                lexFinding(
                    row.at,
                    "warning",
                    `**${row.name}** closes as a ${usual}'s calling name, and [[${address}]] is ${target.gender}`,
                );
        }
    }
    const required = new Set();
    for (const one of tree.names) {
        if (one.kind !== "given" || called.has(one.address) || required.has(one.address)) continue;
        const count = syllables(one.name, rule);
        if (count < (rule.calling.threshold ?? Number.POSITIVE_INFINITY)) continue;
        required.add(one.address);
        const { line, column } = lineColumn(one.text, locate(one.text, one.name));
        const file = path.relative(process.cwd(), one.file) || one.file;
        findings.push(
            finding(
                file,
                line,
                column,
                "error",
                `${one.name} runs to ${count} syllables, and [[${one.address}]] carries no calling name`,
            ),
        );
    }

    // 7. Retired names.
    const retiredSeen = new Set();
    for (const one of rule.retired) {
        const form = unmarked(one.name.normalize("NFC"));
        if (retiredSeen.has(form))
            lexFinding(one.at, "error", `\`${one.name}\` stands twice in the retired names`);
        retiredSeen.add(form);
    }
    for (const { file, text, literature } of tree.texts ?? []) {
        if (literature) continue;
        const rel = path.relative(process.cwd(), file) || file;
        const own = path.resolve(file) === path.resolve(LEXICON);
        // The lexicon is read as given, so the table it holds is skipped in that text.
        const body = own ? lex : text;
        const skip = own && rule.retiredAt ? [rule.retiredAt] : [];
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

    return {
        findings,
        rule,
        counts: {
            words: rule.words.length,
            register: rule.register.length,
            vedyari: rule.register.filter((row) => row.tongue === "vedyari").length,
            built,
            underived,
            listNames,
            calling: callingCount,
            retired: rule.retired.length,
        },
    };
}

/** Run the guard over the tree. */
function main() {
    const note = fs.readFileSync(NOTE, "utf8");
    const lex = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : null;
    const { findings, counts } = analyse(note, lex, attestedNames());
    for (const line of findings) console.error(line);
    const errors = findings.filter((line) => line.includes(": error: ")).length;
    const warnings = findings.length - errors;
    console.log(
        `Vedyari lexicon: ${counts.words ?? 0} words, ${counts.register ?? 0} registered names ` +
            `(${counts.vedyari ?? 0} Vedyari, ${counts.built ?? 0} built from the lexicon, ` +
            `${counts.underived ?? 0} not yet reached, ${counts.calling ?? 0} calling names), ` +
            `${counts.listNames ?? 0} listed names, ${counts.retired ?? 0} retired names; ` +
            `${errors} error(s), ${warnings} warning(s).`,
    );
    if (errors) process.exitCode = 1;
}

// Run as a command; imported, the predicates stand on their own.
if (import.meta.filename === path.resolve(process.argv[1] ?? "")) main();
