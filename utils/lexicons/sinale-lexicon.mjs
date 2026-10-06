/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Sinalë language.
 *
 * `Skills/Languages/Sinale.md` states the language as tables under fixed
 * headings: the consonants, the vowels with their harmony sets and the front
 * partner each takes in a suffix, the diphthongs, the medial clusters, the
 * sounds a word may begin and end on, wearing, the case, verb and derivational
 * suffixes, the name endings and the hearth ending, the words older than the
 * rules and the shared-ancestor cognates. `Lore/Sinale_Lexicon.md` holds the
 * words: its classes and fields, one table of words per field, and the
 * register of attested names. This guard reads every one of those at run time
 * and asks whether the two pages obey the rules the first one states.
 *
 * **The notes are the single source.** No letter, suffix, cluster, ending,
 * class, field or tongue is restated here. A rule the notes stop stating is a
 * rule this guard stops enforcing, and a table a note renames is reported as
 * missing rather than silently skipped.
 *
 * The checks:
 *
 * 1. **Inventory and marks.** Every letter of every checked word stands in the
 *    consonant table or the vowel table, and the only combining mark is one a
 *    letter of those tables carries.
 * 2. **Onsets, medial clusters and finals.** A word begins on a vowel or on a
 *    sound the onset row allows, holds no consonant run longer than two, holds
 *    only the two-consonant runs the cluster table lists, and ends on a vowel or
 *    a sound the final row allows.
 * 3. **Harmony.** No stem or word holds a back and a front vowel; a suffix or
 *    prefix takes the form the word it attaches to calls for; each stem of a
 *    compound keeps its own harmony.
 * 4. **Diphthongs.** Two different vowels side by side form a listed pair.
 * 5. **Wearing.** A worn form is recomputed from the wearing table. A lineage
 *    name never begins on a radical stop, nor does a genitive (the possessor
 *    stands before its head and wears), nor a verb after the negative particle.
 * 6. **Names.** A given name is a radical stem and an ending for the list's
 *    gender, in the harmony the stem calls for, never repeating the stem's last
 *    consonant, within the stated syllable count. A lineage name is a worn stem
 *    and the hearth ending, never on a stem whose last consonant the note
 *    excludes, glossed as the stem is glossed. Every stem a name uses is a row.
 * 7. **The note against itself.** Every italic word in Phonology, Grammar Notes
 *    and Sample Phrases is a stem or a function word, worn or radical, with the
 *    declared affixes, or a compound of stems.
 * 8. **The lexicon.** Every row passes checks 1–4, stands under a field the
 *    lexicon declares, has a class the lexicon declares, carries a gloss and an
 *    attested cell, and no form stands twice. A row's "built from" cell is `—`
 *    for a root word, which must keep harmony, or forms in code spans joined by
 *    `+`: stems that are rows of the lexicon, then suffixes the language
 *    declares, with `, worn` to wear the whole. Every stem of a compound but
 *    the last wears, a suffix takes the form the last stem calls for, and the
 *    result must be the row's form letter for letter.
 * 9. **The register.** Every name and alias of a note whose `data.lore` names
 *    the Sinalë folk, of a rank note of the Faith of Bjartr, and of the God of
 *    Dreams, and every bold term in a clause where the Sinalë call, name or have
 *    a word for something, stands in the register under that note's address.
 *    Each register row names a note that exists and a tongue the register
 *    declares; an `older` row is in the older-than-the-rules table; a `sinale`
 *    row whose "built from" cell gives parts must recompute to the name, and
 *    one that gives none is a warning, since it is a name the rules do not yet
 *    reach.
 * 10. **Words older than the rules.** Only what that table lists is exempt from
 *     the checks above; each row carries a gloss and a layer the note's
 *     historical layers name; every exemption applied is printed.
 * 11. **Cognates.** The shared-ancestor table agrees, row for row, with the copy
 *     in `Skills/Languages/Khazari.md`, and its Sinalë column agrees with the
 *     case table. A Khazári note with no copy is a warning, since the two notes
 *     are edited apart.
 *
 * A guard proves the page is consistent with its own rules, never that the
 * rules are good. Whether a coined stem sounds right is a judgement made by
 * reading it aloud.
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

/** The note every predicate is derived from. */
export const NOTE = "assets/content/Skills/Languages/Sinale.md";

/** The note holding the words and the register of attested names. */
export const LEXICON = "assets/content/Lore/Sinale_Lexicon.md";

/** The content tree the register's scope is derived from. */
export const CONTENT = "assets/content";

/** The folk note whose naming in `data.lore` puts a note in the register's scope. */
const FOLK = "flksinale";

/** Folders and notes in the register's scope whatever their `data.lore` says. */
const SCOPE_PATHS = ["Lore/Ranks/Nordheimn/Faith_of_Bjartr/", "Lore/The_God_of_Dreams.md"];

/** A clause saying what the Sinalë call something; bold terms after it are names. */
const NAMING = /Sinal[eë](?:\]\])?\s+(?:call|calls|called|name|names|named|word|words)\b/gu;

/** The note holding the other copy of the shared-ancestor table. */
export const KHAZARI = "assets/content/Skills/Languages/Khazari.md";

/** The sections whose italic words are checked against the lexicon. */
const CHECKED_SECTIONS = ["## Phonology", "## Grammar Notes", "## Sample Phrases"];

/** Spelled-out counts, for a rule the note states in words. */
const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };

/** A finding, in the shape every diagnostic in this repository takes. */
export function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/** The 1-based line and column of an offset in a text. */
export function lineColumn(text, at) {
    if (at < 0) return { line: null, column: null };
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
 * Every table row of a text, as cells, with the offset of the row.
 *
 * The header row and the rule beneath it carry no data and are dropped.
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

/** Every italic run in a text, with its offset. */
export function italics(text, offset = 0) {
    return [...text.matchAll(/(?<![\p{L}\p{N}_*])_([^_\n]+?)_(?![\p{L}\p{N}_])/gu)].map(
        (match) => ({ value: match[1], at: offset + match.index + 1 }),
    );
}

/** Every backticked run in a text. */
function ticked(text) {
    return [...text.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
}

/** A word as the rules read it: composed, lower case. */
export function plain(word) {
    return word.normalize("NFC").toLowerCase();
}

/** The combining marks a word carries. */
function marksOf(word) {
    return [...word.normalize("NFD")].filter((char) => /\p{M}/u.test(char));
}

/**
 * The whole rule, read off the note.
 *
 * @param {string} text - The note.
 * @param {string|null} [lex] - The lexicon note, or null when absent.
 * @returns {{rule: object, problems: string[], lexiconProblems: string[]}} The
 *   derived inventories with the lexicon's words, a message for every table the
 *   note fails to state, and one for every section the lexicon fails to state.
 */
export function ruleFrom(text, lex = null) {
    const problems = [];
    const need = (heading) => {
        const found = section(text, heading);
        if (!found) problems.push(`the note states no section "${heading}"`);
        return found ?? { body: "", at: 0 };
    };
    const firstItalic = (cell) => italics(cell ?? "").map((run) => plain(run.value));

    // The consonants: every italic cell of the table past its label column.
    const consonants = new Set();
    for (const { cells } of rows(need("### Consonants").body))
        for (const cell of cells.slice(1))
            for (const sound of firstItalic(cell))
                for (const one of sound.split(/,\s*/)) consonants.add(one);

    // The vowels, their sets, and the partner each takes in a suffix's front form.
    const vowels = new Map();
    for (const { cells } of rows(need("### Vowels").body)) {
        const [vowel] = firstItalic(cells[0]);
        const [partner] = firstItalic(cells[2]);
        if (vowel) vowels.set(vowel, { set: (cells[1] ?? "").toLowerCase(), partner });
    }

    const listedIn = (heading, column) => {
        const out = new Set();
        for (const { cells } of rows(need(heading).body))
            for (const sound of firstItalic(cells[column])) out.add(sound);
        return out;
    };
    const diphthongs = listedIn("### Diphthongs", 1);
    const clusters = listedIn("### Medial clusters", 1);

    // The edges of a word.
    const onsets = new Set();
    const finals = new Set();
    let vowelOnset = false;
    let vowelFinal = false;
    for (const { cells } of rows(need("### Onsets and finals").body)) {
        const label = (cells[0] ?? "").toLowerCase();
        const sounds = firstItalic(cells[1]);
        const vowelsToo = /any vowel/.test(cells[1] ?? "");
        if (/begin/.test(label)) {
            for (const sound of sounds) onsets.add(sound);
            vowelOnset = vowelsToo;
        } else if (/end/.test(label)) {
            for (const sound of sounds) finals.add(sound);
            vowelFinal = vowelsToo;
        }
    }

    // Wearing.
    const wearing = new Map();
    for (const { cells } of rows(need("### Wearing").body)) {
        const [radical] = firstItalic(cells[0]);
        const [worn] = firstItalic(cells[1]);
        if (radical && worn) wearing.set(radical, worn);
    }

    // The affixes: each row a back and a front form under a name.
    const affixes = (heading, kind) =>
        rows(need(heading).body)
            .map(({ cells }) => ({
                name: cells[0],
                back: firstItalic(cells[1])[0],
                front: firstItalic(cells[2])[0],
                kind,
            }))
            .filter((row) => row.back);
    const verbs = affixes("### Verbs", "verb");
    const prefixes = verbs.filter((row) => row.back.endsWith("-"));
    const moods = verbs.filter((row) => row.back.startsWith("-"));
    const cases = affixes("### Case suffixes", "case");
    const derivations = affixes("### Derivational suffixes", "derivation");
    const endings = affixes("### Name endings", "ending").map((row) => ({
        ...row,
        gender: /woman/i.test(row.name) ? "female" : "male",
    }));
    const hearths = affixes("### The hearth ending", "hearth");

    // The words, read off the lexicon note.
    const words = lexiconFrom(lex);
    const lexicon = new Map();
    for (const row of words.rows) if (!lexicon.has(row.form)) lexicon.set(row.form, row);

    // The words older than the rules, and the layers the note names.
    const layers = new Set(
        [...need("## Historical Development").body.matchAll(/\*\*(\p{L}+) layer\*\*/gu)].map(
            (match) => match[1],
        ),
    );
    const olderSection = need("### Words older than the rules");
    const older = rows(olderSection.body, olderSection.at).map(({ cells, at }) => ({
        form: firstItalic(cells[0])[0],
        written: italics(cells[0] ?? "")[0]?.value,
        gloss: (cells[1] ?? "").trim(),
        layer: (cells[2] ?? "").trim(),
        at,
    }));

    // The naming rules stated in prose.
    const naming = need("### Structure and Philosophy").body;
    const syllableRule = naming.match(/\*\*A given name runs (\w+) or (\w+) syllables\*\*/);
    const syllables =
        syllableRule ?
            [NUMBER_WORDS[syllableRule[1]], NUMBER_WORDS[syllableRule[2]]]
        :   (problems.push("the note states no syllable count for a given name"), [0, Infinity]);
    const hearthRule = naming.match(
        /\*\*a stem whose last consonant is _(\p{L}+)_ takes no hearth ending\*\*/u,
    );
    if (!hearthRule) problems.push("the note states no consonant that bars the hearth ending");
    const noHearth = hearthRule ? plain(hearthRule[1]) : null;

    // The negative particle, the first italic word of its section.
    const negation = need("### Negation").body;
    const negative = italics(negation).map((run) => plain(run.value))[0] ?? null;

    return {
        rule: {
            consonants,
            vowels,
            diphthongs,
            clusters,
            onsets,
            finals,
            vowelOnset,
            vowelFinal,
            wearing,
            prefixes,
            moods,
            cases,
            derivations,
            endings,
            hearths,
            lexicon,
            lexiconRows: words.rows,
            classes: words.classes,
            fields: words.fields,
            tongues: words.tongues,
            register: words.register,
            older,
            layers,
            syllables,
            noHearth,
            negative,
            allowedMarks: new Set(
                [...consonants, ...vowels.keys()].flatMap((letter) => marksOf(letter)),
            ),
        },
        problems,
        lexiconProblems: words.problems,
    };
}

/**
 * The lexicon note read into its parts.
 *
 * @param {string|null} lex - The lexicon note, or null when absent.
 * @returns {{classes: Set<string>, fields: string[], rows: object[], tongues: Set<string>,
 *   register: object[], problems: string[]}} The declared lists, every word row
 *   with its field, every register row, and a message for every missing section.
 */
export function lexiconFrom(lex) {
    const problems = [];
    const out = {
        classes: new Set(),
        fields: [],
        rows: [],
        tongues: new Set(),
        register: [],
        problems,
    };
    if (lex === null || lex === undefined) {
        problems.push(`${LEXICON} is absent, and every word is read from it`);
        return out;
    }
    const need = (heading) => {
        const found = section(lex, heading);
        if (!found) problems.push(`the lexicon states no section "${heading}"`);
        return found ?? { body: "", at: 0 };
    };
    for (const { cells } of rows(need("### Classes").body))
        for (const name of ticked(cells[0] ?? "")) out.classes.add(name);
    out.fields = rows(need("### Fields").body)
        .map(({ cells }) => (cells[0] ?? "").trim())
        .filter(Boolean);

    const words = need("## Words");
    const headings = [...words.body.matchAll(/^### (.+)$/gm)];
    for (let i = 0; i < headings.length; i += 1) {
        const start = headings[i].index;
        const end = i + 1 < headings.length ? headings[i + 1].index : words.body.length;
        const field = headings[i][1].trim();
        const fieldAt = words.at + start + 4;
        for (const { cells, at } of rows(words.body.slice(start, end), words.at + start)) {
            const [form] = ticked(cells[0] ?? "");
            if (!form) continue;
            out.rows.push({
                form: plain(form),
                written: form,
                class: (cells[1] ?? "").replace(/`/g, "").trim(),
                gloss: (cells[2] ?? "").trim(),
                built: (cells[3] ?? "").trim(),
                attested: (cells[4] ?? "").trim(),
                field,
                fieldAt,
                at: at + lex.slice(at).indexOf(form),
            });
        }
    }

    for (const { cells } of rows(need("### Tongues").body))
        for (const name of ticked(cells[0] ?? "")) out.tongues.add(name);
    const names = need("### Names");
    out.register = rows(names.body, names.at).map(({ cells, at }) => ({
        name: (cells[0] ?? "").replace(/\*\*/g, "").trim(),
        note: (cells[1] ?? "").trim(),
        address: (cells[1] ?? "").match(/\[\[([^|\]\\]+)/)?.[1] ?? null,
        tongue: ticked(cells[2] ?? "")[0] ?? (cells[2] ?? "").trim(),
        built: (cells[3] ?? "").trim(),
        at,
    }));
    return out;
}

/**
 * Recompute a form from a "built from" cell.
 *
 * @param {string} cell - The cell: `—`, or forms in code spans joined by `+`,
 *   optionally closed by `, worn`.
 * @param {object} rule - The rule, its lexicon included.
 * @param {boolean} [allowNames] - Whether name endings and the hearth ending count.
 * @returns {{root: true}|{error: string}|{form: string, stems: string[]}} A root
 *   word, a reason the cell cannot be read, or the form its parts give.
 */
export function builtForm(cell, rule, allowNames = false) {
    if (!cell || cell === "—") return { root: true };
    let rest = cell.trim();
    let wornAll = false;
    const tail = rest.match(/,\s*worn$/);
    if (tail) {
        wornAll = true;
        rest = rest.slice(0, tail.index);
    }
    const parts = rest.split(/\s*\+\s*/).map((part) => {
        const match = part.match(/^`([^`]+)`$/);
        return match ? plain(match[1]) : null;
    });
    if (parts.some((part) => part === null))
        return { error: `"${cell}" is not forms in code spans joined by "+"` };
    const stems = [];
    const suffixes = [];
    for (const part of parts) {
        if (part.startsWith("-")) suffixes.push(part);
        else if (suffixes.length) return { error: `the stem "${part}" follows a suffix` };
        else stems.push(part);
    }
    if (!stems.length) return { error: `"${cell}" names no stem` };
    for (const stem of stems)
        if (!rule.lexicon.has(stem)) return { error: `"${stem}" is not a row of the lexicon` };
    let form = stems.map((stem, i) => (i < stems.length - 1 ? worn(stem, rule) : stem)).join("");
    const last = stems[stems.length - 1];
    const harmony = harmonyOf(last, rule);
    const declared = [
        ...rule.derivations,
        ...rule.cases,
        ...(allowNames ? [...rule.endings, ...rule.hearths] : []),
    ];
    let hearth = false;
    for (const suffix of suffixes) {
        const row = declared.find(
            (one) => plain(one.back) === suffix || plain(one.front ?? "") === suffix,
        );
        if (!row) return { error: `"${suffix}" is not a suffix the language declares` };
        const { right } = formFor(row, harmony);
        if (`-${right}` !== suffix)
            return {
                error: `"${suffix}" is the ${harmony === "back" ? "front" : "back"} form of "${row.back}", after the ${harmony} stem "${last}"`,
            };
        if (row.kind === "hearth") hearth = true;
        form += right;
    }
    if (wornAll || hearth) form = worn(form, rule);
    return { form, stems };
}

/** A note's frontmatter, parsed, or null when it has none or it does not parse. */
function frontmatter(text) {
    const match = text.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    try {
        return YAML.parse(match[1]);
    } catch {
        return null;
    }
}

/**
 * Every note address in the tree, and every name the register must hold.
 *
 * @param {string} [root] - The content tree.
 * @returns {{addresses: Set<string>, names: Array<{name: string, address: string,
 *   file: string, line: number|null, column: number|null}>}} The addresses, and
 *   each attested name with the note it belongs to and where it is written.
 */
export function attestedNames(root = CONTENT) {
    const files = [];
    const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (entry.name.endsWith(".md")) files.push(full);
        }
    };
    walk(root);
    const addresses = new Set();
    const names = [];
    const seen = new Set();
    const add = (name, address, file, text, at) => {
        const key = `${name}\u0000${address}`;
        if (seen.has(key)) return;
        seen.add(key);
        const { line, column } = lineColumn(text, at);
        names.push({ name, address, file, line, column });
    };
    for (const file of files.sort()) {
        const text = fs.readFileSync(file, "utf8");
        const front = frontmatter(text);
        if (!front?.type || !front?.shortcode) continue;
        const address = `${front.type}-${front.shortcode}`;
        addresses.add(address);
        const inside = path.relative(root, file).split(path.sep).join("/");
        const lore = Array.isArray(front.data?.lore) ? front.data.lore : [];
        const inScope =
            lore.includes(FOLK) ||
            SCOPE_PATHS.some((scope) => inside === scope || inside.startsWith(scope));
        if (inScope) {
            const name = front.name;
            const all = [
                typeof name === "string" ? name : name?.full,
                ...(Array.isArray(name?.aliases) ? name.aliases : []),
            ].filter((one) => typeof one === "string" && one.trim());
            for (const one of all) add(one.trim(), address, file, text, text.indexOf(one));
        }
        const relative = path.relative(".", file).split(path.sep).join("/");
        if (relative === NOTE || relative === LEXICON) continue;
        for (const match of text.matchAll(NAMING)) {
            const from = match.index + match[0].length;
            const stops = [";", ". ", ".\n", "\n"]
                .map((stop) => text.indexOf(stop, from))
                .filter((at) => at !== -1);
            const to = stops.length ? Math.min(...stops) : text.length;
            for (const bold of text.slice(from, to).matchAll(/\*\*([^*]+)\*\*/g))
                add(bold[1].trim(), address, file, text, from + bold.index + 2);
        }
    }
    return { addresses, names };
}

/** The consonant digraphs: inventory entries of two letters that are not a doubled letter. */
function digraphsOf(rule) {
    return [...rule.consonants].filter((sound) => sound.length === 2 && sound[0] !== sound[1]);
}

/**
 * A word cut into sounds, with each consonant digraph counted as one.
 *
 * @param {string} word - The word, plain.
 * @param {object} rule - The rule.
 * @returns {string[]} The sounds.
 */
export function sounds(word, rule) {
    const pairs = new Set(digraphsOf(rule));
    const out = [];
    for (let i = 0; i < word.length;) {
        const pair = word.slice(i, i + 2);
        if (pairs.has(pair)) {
            out.push(pair);
            i += 2;
        } else {
            out.push(word[i]);
            i += 1;
        }
    }
    return out;
}

/** Whether a sound is a vowel of the note. */
function isVowel(sound, rule) {
    return rule.vowels.has(sound);
}

/**
 * The harmony of a word: back, front, or mixed.
 *
 * @param {string} word - The word, plain.
 * @param {object} rule - The rule.
 * @returns {"back"|"front"|"mixed"} A word of neutral vowels alone counts as front.
 */
export function harmonyOf(word, rule) {
    let back = false;
    let front = false;
    for (const letter of word) {
        const set = rule.vowels.get(letter)?.set;
        if (set === "back") back = true;
        if (set === "front") front = true;
    }
    if (back && front) return "mixed";
    return back ? "back" : "front";
}

/**
 * Checks 1, 2 and 4 on one word: inventory, marks, onset, clusters, finals and
 * diphthongs. Harmony is judged where the word's parts are known.
 *
 * @param {string} written - The word as the note writes it.
 * @param {object} rule - The rule.
 * @returns {string[]} One message per break.
 */
export function shape(written, rule) {
    const out = [];
    const word = plain(written);
    for (const mark of marksOf(word))
        if (!rule.allowedMarks.has(mark))
            out.push(`"${written}" carries a mark the romanization does not write`);
    const letters = new Set([...rule.consonants].flatMap((sound) => [...sound]));
    for (const letter of word)
        if (!letters.has(letter) && !rule.vowels.has(letter))
            out.push(`"${written}" holds "${letter}", which is not in the inventory`);
    if (out.length) return out;

    const cut = sounds(word, rule);
    if (!cut.length) return out;
    if (isVowel(cut[0], rule)) {
        if (!rule.vowelOnset) out.push(`"${written}" begins on a vowel`);
    } else {
        if (!rule.onsets.has(cut[0])) out.push(`"${written}" begins on "${cut[0]}"`);
        if (cut.length > 1 && !isVowel(cut[1], rule))
            out.push(`"${written}" begins with a cluster`);
    }
    const last = cut[cut.length - 1];
    if (isVowel(last, rule) ? !rule.vowelFinal : !rule.finals.has(last))
        out.push(`"${written}" ends on "${last}"`);
    if (cut.length > 1 && !isVowel(last, rule) && !isVowel(cut[cut.length - 2], rule))
        out.push(`"${written}" ends on a cluster`);

    // Medial runs: everything between the first and the last vowel.
    let run = [];
    let seenVowel = false;
    for (const sound of cut) {
        if (isVowel(sound, rule)) {
            if (seenVowel && run.length > 2)
                out.push(`"${written}" stacks ${run.length} consonants together`);
            else if (seenVowel && run.length === 2 && !rule.clusters.has(run.join("")))
                out.push(`"${written}" holds "${run.join("")}", which is not a listed cluster`);
            run = [];
            seenVowel = true;
        } else run.push(sound);
    }

    for (let i = 0; i + 1 < word.length; i += 1) {
        const pair = word.slice(i, i + 2);
        if (
            rule.vowels.has(pair[0]) &&
            rule.vowels.has(pair[1]) &&
            pair[0] !== pair[1] &&
            !rule.diphthongs.has(pair)
        )
            out.push(`"${written}" holds "${pair}", which is not a listed diphthong`);
    }
    return out;
}

/** A form worn by the wearing table; a form not opening on a radical is returned as it is. */
export function worn(form, rule) {
    for (const [radical, soft] of rule.wearing)
        if (form.startsWith(radical)) return soft + form.slice(radical.length);
    return form;
}

/** Whether a word opens on a radical the wearing table moves. */
export function opensOnRadical(word, rule) {
    return [...rule.wearing.keys()].some((radical) => word.startsWith(radical));
}

/** An affix's form for a harmony, and the form it would wrongly take. */
function formFor(row, harmony) {
    const back = plain(row.back).replace(/-/g, "");
    const front = plain(row.front ?? row.back).replace(/-/g, "");
    return harmony === "back" ? { right: back, wrong: front } : { right: front, wrong: back };
}

/**
 * The front form a suffix or prefix takes, computed from its back form and the
 * vowel table: a suffix changes its last vowel to its partner; a prefix does so
 * only when that vowel is back.
 *
 * @param {string} back - The back form, hyphen included.
 * @param {object} rule - The rule.
 * @returns {string} The computed front form.
 */
export function computedFront(back, rule) {
    const form = plain(back);
    const prefix = form.endsWith("-");
    for (let i = form.length - 1; i >= 0; i -= 1) {
        const vowel = rule.vowels.get(form[i]);
        if (!vowel) continue;
        if (prefix && vowel.set !== "back") return form;
        return form.slice(0, i) + vowel.partner + form.slice(i + 1);
    }
    return form;
}

/** Every base a word may be built on: stems and function words, with the exempt words. */
function bases(rule) {
    const out = [];
    for (const row of rule.lexicon.values()) out.push({ form: row.form, row });
    return out;
}

/**
 * Read the suffixes off the end of a body, given the harmony of what they
 * attach to. Derivational suffixes come first, then at most one case or mood
 * suffix, or for a name an ending or the hearth ending with an optional case.
 *
 * @returns {Array<{parts: object[], wrong: string[]}>} Every complete reading.
 */
function readSuffixes(rest, harmony, rule, allowNames) {
    const readings = [];
    const walk = (left, parts, wrong, stage) => {
        if (!left) {
            readings.push({ parts, wrong });
            return;
        }
        const tryRows = (list, nextStage) => {
            for (const row of list) {
                const { right, wrong: other } = formFor(row, harmony);
                if (right && left.startsWith(right))
                    walk(left.slice(right.length), [...parts, row], wrong, nextStage);
                else if (other && other !== right && left.startsWith(other))
                    walk(
                        left.slice(other.length),
                        [...parts, row],
                        [
                            ...wrong,
                            `${row.kind} "${row.back}" takes its ${harmony === "back" ? "front" : "back"} form after a ${harmony} word`,
                        ],
                        nextStage,
                    );
            }
        };
        if (stage === "derive") tryRows(rule.derivations, "derive");
        if (stage === "derive") tryRows([...rule.cases, ...rule.moods], "done");
        if (stage === "derive" && allowNames && !parts.length)
            tryRows([...rule.endings, ...rule.hearths], "named");
        if (stage === "named") tryRows(rule.cases, "done");
    };
    walk(rest, [], [], "derive");
    return readings;
}

/**
 * Every way a word is built from the page's lexicon and declared affixes.
 *
 * @param {string} word - The word, plain, with no hyphen.
 * @param {object} rule - The rule.
 * @param {number} [depth] - How many stems already stand before it in a compound.
 * @returns {Array<{stems: object[], parts: object[], wrong: string[], wornHead: boolean}>}
 */
export function readings(word, rule, depth = 0) {
    const out = [];
    for (const base of bases(rule)) {
        for (const [form, isWorn] of [
            [base.form, false],
            [worn(base.form, rule), true],
        ]) {
            if (isWorn && form === base.form && depth === 0) continue;
            if (!word.startsWith(form)) continue;
            const rest = word.slice(form.length);
            const harmony = harmonyOf(base.form, rule);
            for (const reading of readSuffixes(rest, harmony, rule, depth === 0))
                out.push({
                    stems: [base.row],
                    parts: reading.parts,
                    wrong: reading.wrong,
                    wornHead: isWorn || !opensOnRadical(base.form, rule),
                    worn: isWorn,
                });
            // A compound: this stem worn, another stem after it.
            if (rest && (isWorn || !opensOnRadical(base.form, rule)) && depth < 2)
                for (const tail of readings(rest, rule, depth + 1))
                    out.push({
                        ...tail,
                        stems: [base.row, ...tail.stems],
                        worn: isWorn || tail.worn,
                    });
        }
    }
    return out;
}

/** The beats of a word: a run of vowels counts as one. */
export function beats(word, rule) {
    let count = 0;
    let inVowel = false;
    for (const letter of word) {
        const vowel = rule.vowels.has(letter);
        if (vowel && !inVowel) count += 1;
        inVowel = vowel;
    }
    return count;
}

/** The last consonant sound of a stem. */
function lastConsonant(form, rule) {
    const cut = sounds(form, rule).filter((sound) => !isVowel(sound, rule));
    const last = cut[cut.length - 1];
    return last ? last[0] : null;
}

/** The consonant an ending opens on. */
function endingConsonant(ending) {
    return plain(ending).replace(/^-/, "")[0];
}

/**
 * Judge one listed name against its list's rule.
 *
 * @param {string} name - The name as written.
 * @param {"male"|"female"|"lineage"} kind - The list it stands in.
 * @param {object} rule - The rule.
 * @param {string} [gloss] - A lineage name's gloss.
 * @returns {string[]} One message per break.
 */
export function judgeName(name, kind, rule, gloss) {
    const out = [...shape(name, rule)];
    const word = plain(name);
    const stems = [...rule.lexicon.values()].filter((row) => !/^(pron|num|part)$/.test(row.class));
    const endingRows =
        kind === "lineage" ? rule.hearths : rule.endings.filter((row) => row.gender === kind);
    const otherRows = kind === "lineage" ? [] : rule.endings.filter((row) => row.gender !== kind);
    let matched = false;
    for (const stem of stems) {
        const harmony = harmonyOf(stem.form, rule);
        const head = kind === "lineage" ? worn(stem.form, rule) : stem.form;
        if (!word.startsWith(head)) continue;
        const rest = word.slice(head.length);
        for (const row of endingRows) {
            const { right, wrong } = formFor(row, harmony);
            if (rest !== right && rest !== wrong) continue;
            matched = true;
            if (rest !== right)
                out.push(
                    `"${name}" takes the ${harmony === "back" ? "front" : "back"} form of "${row.back}" after the ${harmony} stem "${stem.written}"`,
                );
            if (kind === "lineage") {
                if (rule.noHearth && lastConsonant(stem.form, rule) === rule.noHearth)
                    out.push(
                        `"${name}" puts the hearth ending on "${stem.written}", whose last consonant is "${rule.noHearth}"`,
                    );
                if (gloss !== undefined && gloss !== stem.gloss)
                    out.push(
                        `"${name}" is glossed "${gloss}" where its stem "${stem.written}" is glossed "${stem.gloss}"`,
                    );
            } else {
                if (lastConsonant(stem.form, rule) === endingConsonant(row.back))
                    out.push(
                        `"${name}" repeats the last consonant of "${stem.written}" in its ending`,
                    );
                const count = beats(word, rule);
                const [least, most] = rule.syllables;
                if (count < least || count > most)
                    out.push(`"${name}" runs ${count} syllable(s), outside ${least} to ${most}`);
            }
        }
        if (!matched && kind !== "lineage")
            for (const row of otherRows) {
                const { right, wrong } = formFor(row, harmony);
                if (rest === right || rest === wrong) {
                    matched = true;
                    out.push(
                        `"${name}" closes on "${row.back}", an ending given to ${row.gender === "male" ? "a man" : "a woman"}`,
                    );
                }
            }
        if (matched) break;
    }
    if (!matched) {
        const radicalHead =
            kind === "lineage" &&
            stems.some((stem) => opensOnRadical(stem.form, rule) && word.startsWith(stem.form));
        out.push(
            radicalHead ? `"${name}" is a lineage name on an unworn stem`
            : kind === "lineage" ? `"${name}" is not a worn stem of this page and the hearth ending`
            : `"${name}" is not a stem of this page and an ending given to ${kind === "male" ? "a man" : "a woman"}`,
        );
    }
    return out;
}

/** Whether a token is a sound, cluster, diphthong or long vowel the phonology names. */
function isSoundToken(token, rule) {
    if (rule.consonants.has(token) || rule.vowels.has(token)) return true;
    if (rule.clusters.has(token) || rule.diphthongs.has(token)) return true;
    return token.length === 2 && token[0] === token[1] && rule.vowels.has(token[0]);
}

/** Every declared affix form, hyphen included. */
function affixForms(rule) {
    const out = new Set();
    for (const row of [
        ...rule.prefixes,
        ...rule.moods,
        ...rule.cases,
        ...rule.derivations,
        ...rule.endings,
        ...rule.hearths,
    ]) {
        out.add(plain(row.back));
        if (row.front) out.add(plain(row.front));
    }
    return out;
}

/**
 * Judge one italic word of the checked sections.
 *
 * @param {string} written - The word as written, punctuation stripped.
 * @param {object} rule - The rule.
 * @param {Set<string>} exempt - The plain forms the older table lists.
 * @returns {{messages: string[], exempt: boolean, genitive: boolean}}
 */
export function judgeWord(written, rule, exempt) {
    const word = plain(written);
    if (exempt.has(word)) return { messages: [], exempt: true };
    if (word.startsWith("-") || word.endsWith("-"))
        return {
            messages:
                affixForms(rule).has(word) ?
                    []
                :   [`"${written}" is not an affix this page declares`],
        };
    let body = word;
    let prefix = null;
    const hyphen = word.indexOf("-");
    if (hyphen > 0) {
        const candidate = `${word.slice(0, hyphen)}-`;
        prefix = rule.prefixes.find(
            (row) => plain(row.back) === candidate || plain(row.front ?? "") === candidate,
        );
        body = prefix ? word.slice(hyphen + 1) : word;
        prefix = prefix ? { row: prefix, written: candidate } : null;
    }
    body = body.replace(/-/g, "");
    const messages = shape(body, rule);
    const found = readings(body, rule);
    if (!found.length) {
        messages.push(`"${written}" is not built from this page's stems and affixes`);
        return { messages };
    }
    // Prefer a reading that breaks nothing, then the one with fewest stems.
    found.sort((a, b) => a.wrong.length - b.wrong.length || a.stems.length - b.stems.length);
    const best = found[0];
    messages.push(...best.wrong.map((wrong) => `"${written}": the ${wrong}`));
    if (prefix) {
        const harmony = harmonyOf(best.stems[0].form, rule);
        const { right } = formFor(prefix.row, harmony);
        if (`${right}-` !== prefix.written && right !== prefix.written.replace(/-$/, ""))
            messages.push(
                `"${written}" takes the prefix "${prefix.written}" where the ${harmony} verb "${best.stems[0].written}" calls for "${right}-"`,
            );
    }
    const genitive = best.parts.some((part) => part.kind === "case" && /genitive/i.test(part.name));
    if (genitive && opensOnRadical(body, rule))
        messages.push(
            `"${written}" is a genitive that does not wear, though a possessor stands before its head`,
        );
    const lineage = best.parts.some((part) => part.kind === "hearth");
    if (lineage && opensOnRadical(body, rule))
        messages.push(`"${written}" is a lineage name on an unworn stem`);
    return { messages, exempt: false };
}

/**
 * The shared-ancestor table of a note: rows keyed by case.
 *
 * @param {string} text - The note.
 * @returns {{rows: Map<string, string[]>, at: number}|null} The table, or null.
 */
export function cognates(text) {
    const lines = text.split("\n");
    let at = 0;
    for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].trim().startsWith("|") && /\|\s*Proto/.test(lines[i])) {
            let end = i;
            while (end < lines.length && lines[end].trim().startsWith("|")) end += 1;
            const table = lines.slice(i, end).join("\n");
            const out = new Map();
            for (const { cells } of rows(table))
                out.set(
                    cells[0].toLowerCase(),
                    cells.map((cell) => cell.replace(/\s+/g, " ")),
                );
            return { rows: out, at };
        }
        at += lines[i].length + 1;
    }
    return null;
}

/**
 * Run every check over the note and the lexicon.
 *
 * @param {string} text - The Sinalë note.
 * @param {string|null} khazari - The Khazári note, or null when absent.
 * @param {string|null} lex - The lexicon note, or null when absent.
 * @param {ReturnType<typeof attestedNames>|null} [tree] - The addresses and
 *   attested names of the content tree; null skips the register's completeness.
 * @returns {{findings: string[], summary: string[]}} Findings and a summary.
 */
export function analyse(text, khazari, lex, tree = null) {
    const findings = [];
    const summary = [];
    const at = (offset) => lineColumn(text, offset);
    const report = (offset, severity, message, check) => {
        const { line, column } = offset === null ? { line: null, column: null } : at(offset);
        findings.push({ check, line: finding(NOTE, line, column, severity, message) });
    };
    const reportLex = (offset, severity, message, check) => {
        const { line, column } =
            offset === null || lex == null ? { line: null, column: null } : lineColumn(lex, offset);
        findings.push({ check, line: finding(LEXICON, line, column, severity, message) });
    };

    const { rule, problems, lexiconProblems } = ruleFrom(text, lex);
    for (const problem of problems) report(null, "error", problem, "rules");
    for (const problem of lexiconProblems) reportLex(null, "error", problem, "rules");
    const exempt = new Set(rule.older.map((row) => row.form).filter(Boolean));
    const exemptMet = new Set();

    // Check 10: the older table itself.
    for (const row of rule.older) {
        if (!row.form)
            report(row.at, "error", "a row of the older-than-the-rules table names no form", 10);
        if (!row.gloss)
            report(
                row.at,
                "error",
                `"${row.written}" is older than the rules but carries no gloss`,
                10,
            );
        if (!rule.layers.has(row.layer))
            report(
                row.at,
                "error",
                `"${row.written}" names the layer "${row.layer}", which Historical Development does not`,
                10,
            );
    }

    // The affix tables against the vowel table.
    for (const row of [
        ...rule.prefixes,
        ...rule.moods,
        ...rule.cases,
        ...rule.derivations,
        ...rule.endings,
        ...rule.hearths,
    ]) {
        if (!row.front) continue;
        const computed = computedFront(row.back, rule);
        if (computed !== plain(row.front)) {
            const offset = text.indexOf(`_${row.front}_`);
            report(
                offset,
                "error",
                `"${row.back}" gives "${computed}" by the vowel table, not "${row.front}"`,
                3,
            );
        }
        for (const form of [row.back, row.front]) {
            const bare = plain(form).replace(/-/g, "");
            const harmony = harmonyOf(bare, rule);
            if (harmony === "mixed")
                report(
                    text.indexOf(`_${form}_`),
                    "error",
                    `the affix "${form}" holds a back and a front vowel`,
                    3,
                );
        }
    }

    // Check 8: the lexicon.
    const seen = new Map();
    const fields = new Set(rule.fields);
    const fieldCounts = new Map(rule.fields.map((field) => [field, 0]));
    const badFields = new Set();
    let roots = 0;
    for (const row of rule.lexiconRows) {
        if (exempt.has(row.form)) {
            exemptMet.add(row.form);
            continue;
        }
        if (!fields.has(row.field) && !badFields.has(row.field)) {
            badFields.add(row.field);
            reportLex(
                row.fieldAt,
                "error",
                `the words stand under "${row.field}", which is not in the field list`,
                8,
            );
        }
        fieldCounts.set(row.field, (fieldCounts.get(row.field) ?? 0) + 1);
        for (const message of shape(row.written, rule)) reportLex(row.at, "error", message, 8);
        if (!rule.classes.has(row.class))
            reportLex(
                row.at,
                "error",
                `"${row.written}" has the class "${row.class}", which the lexicon does not declare`,
                8,
            );
        if (!row.gloss) reportLex(row.at, "error", `"${row.written}" carries no gloss`, 8);
        if (!row.attested)
            reportLex(row.at, "error", `"${row.written}" carries no attested cell`, 8);
        if (seen.has(row.form))
            reportLex(row.at, "error", `"${row.written}" stands twice in the lexicon`, 8);
        seen.set(row.form, row);
        const built = builtForm(row.built, rule);
        if (built.root) {
            roots += 1;
            if (harmonyOf(row.form, rule) === "mixed")
                reportLex(row.at, "error", `"${row.written}" holds a back and a front vowel`, 8);
        } else if (built.error)
            reportLex(row.at, "error", `"${row.written}" is built from ${built.error}`, 8);
        else if (built.form !== row.form)
            reportLex(
                row.at,
                "error",
                `"${row.written}" is not what its parts give, which is "${built.form}"`,
                8,
            );
    }

    // Check 9: the register.
    const registered = new Set();
    const tongueDeclared = (tongue) =>
        rule.tongues.has(tongue) ||
        [...rule.tongues].some((declared) => {
            const colon = declared.indexOf(":");
            return (
                colon > 0 &&
                declared.endsWith(">") &&
                tongue.startsWith(declared.slice(0, colon + 1)) &&
                /^[a-z]+$/.test(tongue.slice(colon + 1))
            );
        });
    let unbuilt = 0;
    for (const row of rule.register) {
        const key = `${row.name}\u0000${row.address}`;
        if (!row.name) reportLex(row.at, "error", "a register row names nothing", 9);
        if (registered.has(key))
            reportLex(row.at, "error", `"${row.name}" stands twice in the register`, 9);
        registered.add(key);
        if (!tongueDeclared(row.tongue))
            reportLex(
                row.at,
                "error",
                `"${row.name}" is in the tongue "${row.tongue}", which the register does not declare`,
                9,
            );
        if (!row.address)
            reportLex(row.at, "error", `"${row.name}" names no note it is attested in`, 9);
        else if (tree && !tree.addresses.has(row.address))
            reportLex(row.at, "error", `"${row.name}" names "${row.address}", which no note has`, 9);
        if (row.tongue === "older" && !exempt.has(plain(row.name)))
            reportLex(
                row.at,
                "error",
                `"${row.name}" is registered as older than the rules, which that table does not list`,
                9,
            );
        if (row.tongue !== "sinale") continue;
        if (!row.built || row.built === "—") {
            unbuilt += 1;
            reportLex(
                row.at,
                "warning",
                `"${row.name}" is attested as Sinalë and is not built from the lexicon`,
                9,
            );
            continue;
        }
        const words = row.name.split(/\s+/);
        const cells = row.built.split(/\s*·\s*/);
        if (words.length !== cells.length) {
            reportLex(
                row.at,
                "error",
                `"${row.name}" has ${words.length} word(s) and ${cells.length} derivation(s)`,
                9,
            );
            continue;
        }
        words.forEach((word, i) => {
            for (const message of shape(word, rule)) reportLex(row.at, "error", message, 9);
            const built = builtForm(cells[i], rule, true);
            if (built.error || built.root)
                reportLex(
                    row.at,
                    "error",
                    `"${word}" is built from ${built.error ?? "nothing the lexicon holds"}`,
                    9,
                );
            else if (built.form !== plain(word))
                reportLex(
                    row.at,
                    "error",
                    `"${word}" is not what its parts give, which is "${built.form}"`,
                    9,
                );
        });
    }
    if (tree)
        for (const one of tree.names)
            if (!registered.has(`${one.name}\u0000${one.address}`))
                findings.push({
                    check: 9,
                    line: finding(
                        path.relative(".", one.file).split(path.sep).join("/"),
                        one.line,
                        one.column,
                        "error",
                        `"${one.name}" is attested here and ${LEXICON} does not register it under "${one.address}"`,
                    ),
                });

    // Check 6: the name lists.
    const counts = {};
    for (const [heading, kind] of [
        ["### Male Given Names", "male"],
        ["### Female Given Names", "female"],
        ["### Lineage Names (Inherited Matrilineally)", "lineage"],
    ]) {
        const found = section(text, heading);
        if (!found) {
            report(null, "error", `the note states no section "${heading}"`, 6);
            continue;
        }
        const bodyAt = found.at + found.body.indexOf("\n") + 1;
        const body = found.body.slice(found.body.indexOf("\n") + 1);
        const entries =
            kind === "lineage" ?
                [...body.matchAll(/(\p{Lu}[\p{L}\p{M}]*)—"([^"]+)"/gu)].map((match) => ({
                    name: match[1],
                    gloss: match[2],
                    at: bodyAt + match.index,
                }))
            :   [...body.matchAll(/\p{Lu}[\p{L}\p{M}]*/gu)].map((match) => ({
                    name: match[0],
                    at: bodyAt + match.index,
                }));
        counts[kind] = entries.length;
        const names = new Set();
        for (const entry of entries) {
            if (exempt.has(plain(entry.name))) {
                exemptMet.add(plain(entry.name));
                continue;
            }
            if (names.has(entry.name))
                report(entry.at, "error", `"${entry.name}" stands twice in the list`, 6);
            names.add(entry.name);
            for (const message of judgeName(entry.name, kind, rule, entry.gloss))
                report(entry.at, "error", message, 6);
        }
    }

    // Check 7 (and 5 for negation): the italic words of the checked sections.
    let wordsRead = 0;
    for (const heading of CHECKED_SECTIONS) {
        const found = section(text, heading);
        if (!found) {
            report(null, "error", `the note states no section "${heading}"`, 7);
            continue;
        }
        for (const run of italics(found.body, found.at)) {
            const token = plain(run.value);
            if (isSoundToken(token, rule)) continue;
            const words = [...run.value.matchAll(/[^\s,.;:!?"“”]+/gu)];
            for (let i = 0; i < words.length; i += 1) {
                const written = words[i][0];
                const offset = run.at + words[i].index;
                if (isSoundToken(plain(written), rule)) continue;
                wordsRead += 1;
                const result = judgeWord(written, rule, exempt);
                if (result.exempt) exemptMet.add(plain(written));
                for (const message of result.messages) report(offset, "error", message, 7);
                if (rule.negative && plain(written) === rule.negative && i + 1 < words.length) {
                    const next = plain(words[i + 1][0]);
                    if (opensOnRadical(next, rule))
                        report(
                            run.at + words[i + 1].index,
                            "error",
                            `"${words[i + 1][0]}" follows the negative particle without wearing`,
                            5,
                        );
                }
            }
        }
    }

    // Check 11: the shared ancestor.
    const ours = cognates(text);
    if (!ours) report(null, "error", "the note states no shared-ancestor table", 11);
    else {
        for (const [caseName, cells] of ours.rows) {
            const caseRow = rule.cases.find((row) => row.name.toLowerCase() === caseName);
            const stated = ticked(cells[2] ?? "").map(plain);
            const expected = caseRow ? [plain(caseRow.back), plain(caseRow.front)] : [];
            const unique = [...new Set(expected)];
            if (!caseRow || stated.join("/") !== unique.join("/"))
                report(
                    ours.at,
                    "error",
                    `the shared-ancestor ${caseName} gives Sinalë "${stated.join("/")}" where the case table gives "${unique.join("/")}"`,
                    11,
                );
        }
        const theirs = khazari ? cognates(khazari) : null;
        if (!theirs)
            report(
                ours.at,
                "warning",
                `${KHAZARI} states no shared-ancestor table, so the two copies are not compared`,
                11,
            );
        else {
            const keys = new Set([...ours.rows.keys(), ...theirs.rows.keys()]);
            for (const key of keys) {
                const a = ours.rows.get(key);
                const b = theirs.rows.get(key);
                if (!a || !b || a.join("|") !== b.join("|"))
                    report(
                        ours.at,
                        "error",
                        `the shared-ancestor row "${key}" differs from the copy in ${KHAZARI}`,
                        11,
                    );
            }
        }
    }

    const errors = findings.filter((entry) => entry.line.includes(": error: "));
    const byCheck = new Map();
    for (const entry of errors) byCheck.set(entry.check, (byCheck.get(entry.check) ?? 0) + 1);
    summary.push(
        `The rules are read off ${NOTE}: ${rule.consonants.size} consonants, ${rule.vowels.size} vowels, ` +
            `${rule.diphthongs.size} diphthongs, ${rule.clusters.size} medial clusters, ` +
            `${rule.wearing.size} wearing pairs, ${rule.cases.length} cases, ` +
            `${rule.prefixes.length + rule.moods.length} verb affixes, ${rule.derivations.length} derivational suffixes, ` +
            `${rule.endings.length} name endings, ${rule.hearths.length} hearth ending(s), ` +
            `${rule.lexicon.size} words in ${LEXICON}.`,
    );
    summary.push(
        `The lexicon: ${rule.lexiconRows.length} rows, ${roots} root words and ` +
            `${rule.lexiconRows.length - roots} built. By field: ` +
            [...fieldCounts.entries()].map(([field, n]) => `${field} ${n}`).join("; ") +
            ".",
    );
    summary.push(
        `The register: ${rule.register.length} rows, ${unbuilt} Sinalë name(s) not built from the lexicon` +
            (tree ? `; ${tree.names.length} attested names derived from the tree.` : "; the tree was not read."),
    );
    summary.push(
        `Read: ${counts.male ?? 0} male given names, ${counts.female ?? 0} female given names, ` +
            `${counts.lineage ?? 0} lineage names, ${wordsRead} italic words.`,
    );
    summary.push(
        `Exempt as older than the rules: ${rule.older.map((row) => row.written).join(", ") || "none"}; ` +
            `met on the page: ${[...exemptMet].join(", ") || "none"}.`,
    );
    summary.push(
        byCheck.size ?
            `Errors by check: ${[...byCheck.entries()].map(([check, n]) => `${check}=${n}`).join("  ")}`
        :   "Every check holds.",
    );
    return { findings: findings.map((entry) => entry.line), summary };
}

/** Run as a command. */
function main() {
    if (!fs.existsSync(NOTE)) {
        console.error(`${NOTE}: error: it is absent, and every rule is read from it`);
        return 1;
    }
    const text = fs.readFileSync(NOTE, "utf8");
    const khazari = fs.existsSync(KHAZARI) ? fs.readFileSync(KHAZARI, "utf8") : null;
    const lex = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : null;
    const { findings, summary } = analyse(text, khazari, lex, attestedNames());
    for (const line of findings) console.error(line);
    for (const line of summary) process.stdout.write(`${line}\n`);
    const errors = findings.filter((line) => line.includes(": error: ")).length;
    const warnings = findings.length - errors;
    if (errors === 0) {
        process.stdout.write(`The Sinalë page obeys its own rules (${warnings} warning(s)).\n`);
        return 0;
    }
    console.error(`${errors} error(s) and ${warnings} warning(s).`);
    return 1;
}

// Run as a command; imported, the predicates stand on their own.
if (import.meta.filename === path.resolve(process.argv[1] ?? "")) process.exit(main());
