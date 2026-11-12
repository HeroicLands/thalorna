/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The spelling guard (`npm run lint:spelling`).
 *
 * Every coined form of a language note (`data.words[].form`, `variants` and
 * `plural`, every name in `data.names` apart from `pattern`, `metadata` and
 * the English lists under `en`, and every `data.register[].name` but those
 * whose `tongue` is `translation` or `gloss`, which render a name in English;
 * a row that states no `tongue` is a name of the note's own language) is
 * checked against the alphabet of Pronouncing Thalorna, read at run time from
 * the guide's `data.sounds`:
 *
 * 1. Every character is a letter, group or mark the guide declares, or a
 *    separator: a hyphen, a space, or a mark of the standard roman punctuation
 *    a phrase entry may carry. `;` and `:` are not standard and stay findings. The catch is the
 *    guide's `catch` letter. Case is ignored. Words
 *    are read left to right, longest declared group first, so a `c` outside
 *    `ch` is undeclared. A vowel pair ending in `y` that the guide declares is
 *    not taken before a vowel, or after a grave vowel: there the `y` stands
 *    alone. A closing `ay`, `ey` or `oy` is no pair; the vowel pairs `ai`, `ei` and `oi` spell those sounds.
 * 2. A marked letter is on its mark's `letters` list, and a mark whose limit is
 *    `one` stands at most once in a word.
 * 3. A tone mark stands only on the first letter of a held vowel, at most once
 *    in a word.
 * 4. `y` is never a vowel. A standalone `y` is a consonant and stands only
 *    before a vowel; after a vowel it closes the glide its pair declares.
 *    A rule 4 finding is an error. The one exemption is a whole word, a
 *    hyphenated compound included, that the language's `held` list in
 *    `utils/fixtures/vowel-y-respellings.json` names: an English place name
 *    kept as English.
 *
 * One finding is written per word, listing every rule it breaks. Entries
 * recording a form deliberately not used (`instead`) are skipped.
 *
 * A language narrows the guide and never adds to it. A language note's own
 * `data.sounds.letters` may list only letters, groups and marked letters the
 * guide declares, each with the guide's `kind`; any other is a finding at its
 * line, and never extends the alphabet its words are read by.
 *
 * Findings are `file:line:column: severity: message`, to stderr; the summary
 * goes to stdout. A word that breaks rule 4 is an `error`, any other finding
 * a `warning`. The check exits 1 when it reports an error and 0 otherwise.
 *
 * @module
 */

import fs from "node:fs";
import { STANDARD_ROWS } from "@heroiclands/package-build/engine/encoding-standard";
import path from "node:path";
import YAML from "yaml";
import { noteFilesWhere } from "./note-index.mjs";
import { frontmatterDoc, sourcePositions } from "./vowel-pairs.mjs";
import { TONGUES, loadFixture } from "./vowel-y.mjs";

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

/** Register tongues that render a name in English rather than coin it. */
const ENGLISH_TONGUES = new Set(["translation", "gloss"]);

/** Word separators, and the standard roman punctuation every tongue's roman shares,
 * read from the toolchain's standard rows so the guard and the encodings agree. */
const SEPARATORS = [
    ...new Set([" ", "-", ...STANDARD_ROWS.map((row) => (Array.isArray(row) ? row[0] : row.from))]),
].sort((a, b) => b.length - a.length);
const VOWEL_KINDS = new Set(["vowel", "short vowel"]);
const DIAERESIS = "̈";
const ACUTE = "́";
const GRAVE = "̀";

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
 * The alphabet the guide declares.
 *
 * @param {string} guideText - The guide note, frontmatter included.
 * @returns {{
 *   singles: Set<string>, groups: string[], vowels: Set<string>, held: Set<string>,
 *   glides: Set<string>,
 *   marks: Map<string, {name: string, letters: Set<string>, limit: string}>,
 *   kinds: Map<string, string>
 * }}
 */
export function alphabetOf(guideText) {
    const guide = frontmatterDoc(guideText);
    const singles = new Set();
    const groups = new Set();
    const vowels = new Set();
    const held = new Set();
    const glides = new Set();
    const marks = new Map();
    // Every letter, group and marked letter the guide declares, with its kind.
    const kinds = new Map();
    if (guide) {
        for (const { letters, kind } of letterEntries(guide.doc))
            for (const raw of letters) {
                kinds.set(nfc(raw), kind);
                const base = nfd(raw);
                if (base.length === 1) {
                    singles.add(base);
                    if (VOWEL_KINDS.has(kind)) vowels.add(base);
                } else if (![...base].some(isMark)) {
                    groups.add(base);
                    if (kind === "long vowel") held.add(base[0]);
                    if (kind === "vowel pair" && base.endsWith("y")) glides.add(base);
                }
            }
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
                // A marked letter is the kind of the letter it marks: á is a vowel.
                for (const l of letters) {
                    singles.add(nfd(l)[0]);
                    if (!kinds.has(l)) kinds.set(l, kinds.get(nfd(l)[0]) ?? "");
                }
            }
    }
    return {
        singles,
        groups: [...groups].sort((a, b) => b.length - a.length),
        vowels,
        held,
        glides,
        marks,
        kinds,
    };
}

/**
 * The letters, groups and marked letters a language note's `data.sounds.letters`
 * declares beyond the guide, or with a kind other than the guide's.
 *
 * @param {string} text - The language note.
 * @param {ReturnType<typeof alphabetOf>} alphabet - The guide's alphabet.
 * @returns {{letter: string, line: number, column: number, message: string}[]}
 */
export function additionsOf(text, alphabet) {
    const parsed = frontmatterDoc(text);
    if (!parsed) return [];
    const { doc, lineCounter } = parsed;
    const seq = doc.getIn(["data", "sounds", "letters"], true);
    if (!YAML.isSeq(seq)) return [];
    const out = [];
    for (const entry of seq.items) {
        if (!YAML.isMap(entry)) continue;
        const kind = String(entry.get("kind") ?? "");
        const letters = entry.get("letters", true);
        if (!YAML.isSeq(letters)) continue;
        for (const node of letters.items) {
            if (!YAML.isScalar(node)) continue;
            const letter = String(node.value);
            const guideKind = alphabet.kinds.get(nfc(letter));
            let message;
            if (guideKind === undefined)
                message = `"${letter}" is not in Pronouncing Thalorna; a language may only narrow the guide`;
            else if (guideKind && kind && guideKind !== kind)
                message = `"${letter}" is a ${guideKind} in Pronouncing Thalorna, not a ${kind}; a language never changes how a letter of the guide works`;
            if (!message) continue;
            // The frontmatter starts on the line after the opening fence.
            const { line, col } = lineCounter.linePos(node.range[0]);
            out.push({ letter, line: line + 1, column: col, message });
        }
    }
    return out;
}

/**
 * The problems of one coined form.
 *
 * @param {string} form
 * @param {ReturnType<typeof alphabetOf>} alphabet
 * @param {Set<string>} [exempt] - Folded words rule 4 does not read.
 * @returns {{rule: 1 | 2 | 3 | 4, offset: number, message: string}[]}
 */
export function checkWord(form, alphabet, exempt = new Set()) {
    const { singles, groups, vowels, held, marks } = alphabet;
    const glides = alphabet.glides ?? new Set();
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
        const group = groups.find((g) => {
            if (glides.has(g)) {
                // A glide's y starts the next syllable before a vowel, and a
                // short vowel opens no glide.
                const next = units[i + g.length];
                if (next && !next.sep && vowels.has(next.base)) return false;
                if (units[i].marks.includes(GRAVE)) return false;
            }
            return [...g].every((b, k) => {
                const v = units[i + k];
                return (
                    v &&
                    !v.sep &&
                    v.base === b &&
                    (k === 0 || !(v.marks.includes(DIAERESIS) || v.marks.includes(ACUTE)))
                );
            });
        });
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

    // Rule 4: y is never a vowel. A standalone y is a consonant and stands
    // before a vowel; a y after a vowel was taken by its glide.
    for (const t of tokens) {
        if (t.text !== "y") continue;
        let from = t.start;
        let to = t.start;
        // A hyphenated compound is one word, so the exemption reads all of it.
        const breaks = (u) => u.sep && u.base !== "-";
        while (from > 0 && !breaks(units[from - 1])) from -= 1;
        while (to + 1 < units.length && !breaks(units[to + 1])) to += 1;
        const whole = units
            .slice(from, to + 1)
            .map((u) => (u.base + u.marks.join("")).normalize("NFC"))
            .join("");
        if (exempt.has(whole)) continue;
        const next = units[t.start + 1];
        if (!next || next.sep || !vowels.has(next.base))
            add(
                4,
                units[t.start],
                '"y" is never a vowel; it stands before a vowel or closes a glide after one',
            );
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
 * @returns {{
 *   form: string, register: boolean, at: (index: number) => {line: number, column: number}
 * }[]}
 */
function formsOf(text) {
    const parsed = frontmatterDoc(text);
    if (!parsed) return [];
    const { doc, lineCounter, source } = parsed;
    const out = [];
    const add = (node, register = false) => {
        if (!YAML.isScalar(node) || typeof node.value !== "string") return;
        const positions = sourcePositions(node, source);
        // The frontmatter starts on the line after the opening fence.
        const at = (index) => {
            const { line, col } = lineCounter.linePos(
                positions?.[originalIndex(node.value, index)] ?? node.range[0],
            );
            return { line: line + 1, column: col };
        };
        out.push({ form: node.value, register, at });
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
    const register = doc.getIn(["data", "register"], true);
    if (YAML.isSeq(register))
        for (const row of register.items) {
            if (!YAML.isMap(row)) continue;
            if (ENGLISH_TONGUES.has(String(row.get("tongue")))) continue;
            add(row.get("name", true), true);
        }
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
 * How many register rows of a language note the guard reads.
 *
 * @param {string} text - The language note.
 * @returns {number}
 */
export function registerRowsChecked(text) {
    return formsOf(text).filter((f) => f.register).length;
}

/**
 * The words a language note keeps with a vowel _y_: the fixture's `held` forms
 * of the tongue whose note this is, folded to lowercase.
 *
 * @param {string} text - The language note.
 * @returns {Set<string>}
 */
export function heldWords(text) {
    const shortcode = languageName(text);
    const tongues = Object.entries(TONGUES)
        .filter(([, address]) => address.endsWith(`-${shortcode}`))
        .map(([tongue]) => tongue);
    return new Set(
        loadFixture()
            .held.filter(({ tongue }) => tongues.includes(tongue))
            .map(({ form }) => form.normalize("NFC").toLowerCase()),
    );
}

/**
 * The findings of one language note, one per word.
 *
 * @param {string} text - The language note.
 * @param {string} guideText - The guide note.
 * @returns {{
 *   form: string, register: boolean, issues: ReturnType<typeof checkWord>,
 *   line: number, column: number
 * }[]}
 */
export function spellingFindings(text, guideText) {
    const alphabet = alphabetOf(guideText);
    const exempt = heldWords(text);
    const out = [];
    for (const { form, register, at } of formsOf(text)) {
        const issues = checkWord(form, alphabet, exempt);
        if (issues.length) out.push({ form, register, issues, ...at(issues[0].offset) });
    }
    return out;
}

/**
 * Run the check.
 *
 * @param {string[]} argv - Language notes; every language note when none are named.
 * @param {{out: (s: string) => void, err: (s: string) => void}} [io]
 * @param {string} [cwd]
 * @returns {number} The exit status: 1 when a word breaks rule 4, else 0.
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
    const alphabet = alphabetOf(guideText);
    const files =
        argv.length ? argv : (
            noteFilesWhere(({ type, subType }) => type === "skill" && subType === "language", cwd)
        );
    const byLanguage = new Map();
    const byRule = new Map();
    let words = 0;
    let additions = 0;
    let registerRows = 0;
    let registerHits = 0;
    let errors = 0;
    for (const file of files) {
        const rel = path.relative(cwd, path.resolve(cwd, file)) || file;
        const text = fs.readFileSync(path.resolve(cwd, file), "utf8");
        const name = languageName(text) || rel;
        registerRows += registerRowsChecked(text);
        for (const a of additionsOf(text, alphabet)) {
            additions += 1;
            io.err(`${rel}:${a.line}:${a.column}: warning: ${a.message}`);
        }
        for (const hit of spellingFindings(text, guideText)) {
            words += 1;
            if (hit.register) registerHits += 1;
            byLanguage.set(name, (byLanguage.get(name) ?? 0) + 1);
            for (const i of hit.issues) byRule.set(i.rule, (byRule.get(i.rule) ?? 0) + 1);
            const severity = hit.issues.some((i) => i.rule === 4) ? "error" : "warning";
            if (severity === "error") errors += 1;
            io.err(
                `${rel}:${hit.line}:${hit.column}: ${severity}: "${hit.form}" breaks the spelling guide: ${hit.issues
                    .map((i) => `rule ${i.rule}, ${i.message}`)
                    .join("; ")}`,
            );
        }
    }
    const sorted = (m) => [...m].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(b[0]));
    for (const [name, n] of sorted(byLanguage)) io.out(`${name}: ${n}`);
    for (const [rule, n] of [...byRule].sort((a, b) => a[0] - b[0])) io.out(`rule ${rule}: ${n}`);
    io.out(`${additions} addition(s) to the guide`);
    io.out(`${registerRows} register row(s) checked`);
    io.out(`${registerHits} register name(s) break the guide`);
    io.out(`${words} word(s) in ${byLanguage.size} language(s)`);
    return errors ? 1 : 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
