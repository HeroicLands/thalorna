/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The spelling guard (`npm run lint:spelling`).
 *
 * Every coined form of a language note (`data.words[].form`, `variants` and
 * `plural`, and every name in `data.names` apart from `pattern`, `metadata`
 * and the English lists under `en`) is checked against the alphabet of
 * Pronouncing Thalorna, read at run time from the guide's `data.sounds`:
 *
 * 1. Every character is a declared letter, group or mark, a letter or group the
 *    language's own `data.sounds.letters` declares, or a separator: a hyphen,
 *    a space, or a mark of the standard roman punctuation a phrase entry may
 *    carry. `;` and `:` are not standard and stay findings. The catch is the
 *    guide's `catch` letter. Case is ignored. Words
 *    are read left to right, longest declared group first, so a `c` outside
 *    `ch` is undeclared.
 * 2. A marked letter is on its mark's `letters` list, and a mark whose limit is
 *    `one` stands at most once in a word.
 * 3. A tone mark stands only on the first letter of a held vowel, at most once
 *    in a word.
 * 4. A standalone `y` is a consonant and stands only before a vowel.
 *
 * One finding is written per word, listing every rule it breaks. Entries
 * recording a form deliberately not used (`instead`) are skipped.
 *
 * Findings are `file:line:column: warning: message`, to stderr; the summary
 * goes to stdout. The check is report-only and exits 0.
 *
 * @module
 */

import fs from "node:fs";
import { STANDARD_ROWS } from "@heroiclands/package-build/engine/encoding-standard";
import path from "node:path";
import YAML from "yaml";
import { noteFilesWhere } from "./note-index.mjs";
import { frontmatterDoc, sourcePositions } from "./vowel-pairs.mjs";

/**
 * The tone marks: caron (rising) and circumflex (falling), as combining
 * characters. They move into the guide's frontmatter as a `kind: tone` mark
 * entry when package-build releases that kind.
 */
const TONE_MARKS = new Map([
    ["̌", "caron"],
    ["̂", "circumflex"],
]);

/** Keys under `data.names` that hold no name. */
const NOT_NAMES = new Set(["pattern", "metadata", "en"]);

/** Word separators, and the standard roman punctuation every tongue's roman shares,
 * read from the toolchain's standard rows so the guard and the encodings agree. */
const SEPARATORS = [
    ...new Set([" ", "-", ...STANDARD_ROWS.map((row) => (Array.isArray(row) ? row[0] : row.from))]),
].sort((a, b) => b.length - a.length);
const VOWEL_KINDS = new Set(["vowel", "short vowel"]);
const DIAERESIS = "̈";
const ACUTE = "́";

const nfd = (s) => s.normalize("NFD").toLowerCase();
const nfc = (s) => s.normalize("NFC").toLowerCase();
const isMark = (ch) => /\p{M}/u.test(ch);

/**
 * The entries of a note's `data.sounds.letters`.
 *
 * @param {YAML.Document} doc
 * @returns {{letters: string[], kind: string}[]}
 */
function letterEntries(doc) {
    const seq = doc.getIn(["data", "sounds", "letters"]);
    if (!YAML.isSeq(seq)) return [];
    return seq
        .toJS(doc)
        .filter((e) => e && Array.isArray(e.letters))
        .map((e) => ({ letters: e.letters.map(String), kind: String(e.kind ?? "") }));
}

/**
 * The alphabet the guide declares, plus the additions of one language note.
 *
 * @param {string} guideText - The guide note, frontmatter included.
 * @param {string} [langText] - A language note, whose `data.sounds.letters` adds letters.
 * @returns {{
 *   singles: Set<string>, groups: string[], vowels: Set<string>, held: Set<string>,
 *   marks: Map<string, {name: string, letters: Set<string>, limit: string}>
 * }}
 */
export function alphabetOf(guideText, langText) {
    const guide = frontmatterDoc(guideText);
    const singles = new Set();
    const groups = new Set();
    const vowels = new Set();
    const held = new Set();
    const marks = new Map();
    const addLetters = (entries) => {
        for (const { letters, kind } of entries)
            for (const raw of letters) {
                const base = nfd(raw);
                if (base.length === 1) {
                    singles.add(base);
                    if (VOWEL_KINDS.has(kind)) vowels.add(base);
                } else if (![...base].some(isMark)) {
                    groups.add(base);
                    if (kind === "long vowel") held.add(base[0]);
                }
            }
    };
    if (guide) {
        addLetters(letterEntries(guide.doc));
        const declared = guide.doc.getIn(["data", "sounds", "marks"]);
        if (YAML.isSeq(declared))
            for (const m of declared.toJS(guide.doc)) {
                const letters = (m.letters ?? []).map(nfc);
                if (!letters.length) continue;
                const combining = [...nfd(letters[0])].find(isMark);
                if (!combining) continue;
                marks.set(combining, {
                    name: String(m.mark),
                    letters: new Set(letters),
                    limit: String(m.limit ?? "any"),
                });
                for (const l of letters) singles.add(nfd(l)[0]);
            }
    }
    const lang = langText ? frontmatterDoc(langText) : undefined;
    if (lang) addLetters(letterEntries(lang.doc));
    return {
        singles,
        groups: [...groups].sort((a, b) => b.length - a.length),
        vowels,
        held,
        marks,
    };
}

/**
 * The problems of one coined form.
 *
 * @param {string} form
 * @param {ReturnType<typeof alphabetOf>} alphabet
 * @returns {{rule: 1 | 2 | 3 | 4, offset: number, message: string}[]}
 */
export function checkWord(form, alphabet) {
    const { singles, groups, vowels, held, marks } = alphabet;
    const issues = [];
    // Units: a base character with the combining marks that follow it.
    // A separator is matched by its whole source, longest first.
    const units = [];
    const chars = [...form.normalize("NFD")];
    for (let i = 0; i < chars.length;) {
        const ch = chars[i];
        if (isMark(ch) && units.length && !units.at(-1).sep) {
            units.at(-1).marks.push(ch);
            i += 1;
            continue;
        }
        const source = SEPARATORS.find((s) => chars.slice(i, i + s.length).join("") === s);
        if (source) {
            units.push({ base: source, marks: [], offset: 0, sep: true });
            i += [...source].length;
        } else {
            units.push({ base: ch.toLowerCase(), marks: [], offset: 0, sep: false });
            i += 1;
        }
    }
    // Offsets index the text as written, with each unit composed.
    let at = 0;
    for (const u of units) {
        u.offset = at;
        at += (u.base + u.marks.join("")).normalize("NFC").length;
    }
    const add = (rule, unit, message) => issues.push({ rule, offset: unit.offset, message });

    // Rule 1, and the tokens rule 4 reads: groups first, longest first.
    const tokens = [];
    for (let i = 0; i < units.length;) {
        if (units[i].sep) {
            i += 1;
            continue;
        }
        const group = groups.find((g) =>
            [...g].every((b, k) => {
                const v = units[i + k];
                return (
                    v &&
                    !v.sep &&
                    v.base === b &&
                    (k === 0 || !(v.marks.includes(DIAERESIS) || v.marks.includes(ACUTE)))
                );
            }),
        );
        if (group) {
            tokens.push({ text: group, start: i });
            i += [...group].length;
            continue;
        }
        if (!singles.has(units[i].base))
            add(1, units[i], `"${units[i].base}" is not a letter of the alphabet`);
        tokens.push({ text: units[i].base, start: i });
        i += 1;
    }

    // Rules 2 and 3: marks.
    // Limits hold per word: a space starts a new count.
    let count = new Map();
    let tones = [];
    const checkTones = () => {
        tones.forEach((i, k) => {
            const u = units[i];
            const token = tokens.find((t) => t.start === i);
            const heldGroup =
                token &&
                token.text.length === 2 &&
                token.text[0] === token.text[1] &&
                held.has(token.text[0]);
            if (!heldGroup)
                add(
                    3,
                    u,
                    `a tone stands only on the first letter of a held vowel, not on "${u.base}"`,
                );
            if (k === 1) add(3, u, "a word carries at most one tone");
        });
        tones = [];
    };
    units.forEach((u, i) => {
        if (u.base === " ") {
            count = new Map();
            checkTones();
            return;
        }
        for (const m of u.marks) {
            if (TONE_MARKS.has(m)) {
                tones.push(i);
                continue;
            }
            const mark = marks.get(m);
            if (!mark) {
                add(1, u, `a combining mark on "${u.base}" is not a declared mark`);
                continue;
            }
            if (!mark.letters.has((u.base + m).normalize("NFC")))
                add(2, u, `"${u.base}" cannot carry the ${mark.name}`);
            count.set(m, (count.get(m) ?? 0) + 1);
            if (mark.limit === "one" && count.get(m) === 2)
                add(2, u, `a word carries at most one ${mark.name}`);
        }
    });
    checkTones();

    // Rule 4: a standalone y is a consonant and stands before a vowel.
    for (const t of tokens) {
        if (t.text !== "y") continue;
        const next = units[t.start + 1];
        if (!next || next.sep || !vowels.has(next.base))
            add(4, units[t.start], 'the consonant "y" stands only before a vowel');
    }
    return issues.sort((a, b) => a.offset - b.offset);
}

/**
 * The index in a scalar's value of the character that starts at an offset of
 * its NFC-composed form.
 *
 * @param {string} value
 * @param {number} offset
 * @returns {number}
 */
function originalIndex(value, offset) {
    if (value === value.normalize("NFC")) return offset;
    let best = 0;
    for (let i = 0; i <= value.length; i += 1) {
        if (value.slice(0, i).normalize("NFC").length > offset) break;
        best = i;
    }
    return best;
}

/**
 * Every coined form of a language note with its position.
 *
 * @param {string} text
 * @returns {{form: string, at: (index: number) => {line: number, column: number}}[]}
 */
function formsOf(text) {
    const parsed = frontmatterDoc(text);
    if (!parsed) return [];
    const { doc, lineCounter, source } = parsed;
    const out = [];
    const add = (node) => {
        if (!YAML.isScalar(node) || typeof node.value !== "string") return;
        const positions = sourcePositions(node, source);
        // The frontmatter starts on the line after the opening fence.
        const at = (index) => {
            const { line, col } = lineCounter.linePos(
                positions?.[originalIndex(node.value, index)] ?? node.range[0],
            );
            return { line: line + 1, column: col };
        };
        out.push({ form: node.value, at });
    };
    const words = doc.getIn(["data", "words"]);
    if (YAML.isSeq(words))
        for (const item of words.items) {
            if (!YAML.isMap(item) || item.has("instead")) continue;
            add(item.get("form", true));
            add(item.get("plural", true));
            const variants = item.get("variants", true);
            if (YAML.isSeq(variants)) for (const v of variants.items) add(v);
        }
    const walk = (node) => {
        if (YAML.isScalar(node)) add(node);
        else if (YAML.isSeq(node)) node.items.forEach(walk);
        else if (YAML.isMap(node)) {
            if (node.has("instead")) return;
            for (const pair of node.items)
                if (!NOT_NAMES.has(String(pair.key?.value ?? pair.key))) walk(pair.value);
        }
    };
    walk(doc.getIn(["data", "names"], true));
    return out;
}

/**
 * The language note's own shortcode, the name a summary counts it under.
 *
 * @param {string} text
 * @returns {string}
 */
export function languageName(text) {
    return String(frontmatterDoc(text)?.doc.get("shortcode") ?? "");
}

/**
 * The findings of one language note, one per word.
 *
 * @param {string} text - The language note.
 * @param {string} guideText - The guide note.
 * @returns {{form: string, issues: ReturnType<typeof checkWord>, line: number, column: number}[]}
 */
export function spellingFindings(text, guideText) {
    const alphabet = alphabetOf(guideText, text);
    const out = [];
    for (const { form, at } of formsOf(text)) {
        const issues = checkWord(form, alphabet);
        if (issues.length) out.push({ form, issues, ...at(issues[0].offset) });
    }
    return out;
}

/**
 * Run the check.
 *
 * @param {string[]} argv - Language notes; every language note when none are named.
 * @param {{out: (s: string) => void, err: (s: string) => void}} [io]
 * @param {string} [cwd]
 * @returns {number} The exit status, always 0.
 */
export function main(argv, io = { out: console.log, err: console.error }, cwd = process.cwd()) {
    const [guideFile] = noteFilesWhere(
        (fm) => fm?.type === "doc" && fm?.shortcode === "prnncthlrn",
        cwd,
    );
    if (!guideFile) {
        io.err("spelling check skipped: the Pronouncing Thalorna guide was not found");
        return 0;
    }
    const guideText = fs.readFileSync(path.resolve(cwd, guideFile), "utf8");
    const files =
        argv.length ? argv : (
            noteFilesWhere(({ type, subType }) => type === "skill" && subType === "language", cwd)
        );
    const byLanguage = new Map();
    const byRule = new Map();
    let words = 0;
    for (const file of files) {
        const rel = path.relative(cwd, path.resolve(cwd, file)) || file;
        const text = fs.readFileSync(path.resolve(cwd, file), "utf8");
        const name = languageName(text) || rel;
        for (const hit of spellingFindings(text, guideText)) {
            words += 1;
            byLanguage.set(name, (byLanguage.get(name) ?? 0) + 1);
            for (const i of hit.issues) byRule.set(i.rule, (byRule.get(i.rule) ?? 0) + 1);
            io.err(
                `${rel}:${hit.line}:${hit.column}: warning: "${hit.form}" breaks the spelling guide: ${hit.issues
                    .map((i) => `rule ${i.rule}, ${i.message}`)
                    .join("; ")}`,
            );
        }
    }
    const sorted = (m) => [...m].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(b[0]));
    for (const [name, n] of sorted(byLanguage)) io.out(`${name}: ${n}`);
    for (const [rule, n] of [...byRule].sort((a, b) => a[0] - b[0])) io.out(`rule ${rule}: ${n}`);
    io.out(`${words} word(s) in ${byLanguage.size} language(s)`);
    return 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
