/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The vowel-pair guard (`npm run lint:vowel-pairs`).
 *
 * Every coined form of a language note (`data.words[].form` and `variants`,
 * and every name in `data.names` apart from `pattern`, `metadata` and the
 * English lists under `en`) is read for diaereses. Two vowels side by side are
 * both said unless they form a group, so a diaeresis changes the reading only
 * on the second vowel of a group: a `vowel pair` or `long vowel` entry of
 * `data.sounds.letters` in the guide (Pronouncing Thalorna, limited by the
 * entry's `tongue` list when it has one), or in the language note itself.
 * A diaeresis anywhere else changes nothing and is a finding: every sound has
 * one spelling. Runs of vowels are read left to right, longest group first. A
 * grave never joins a group. The letter `y` is a consonant. A hyphen, space,
 * apostrophe or any other non-letter ends a run of vowels.
 *
 * No language is exempt: Aelwythi is held to the standard like every other.
 *
 * Findings are `file:line:column: warning: message`, to stderr; the summary
 * goes to stdout. The check is report-only and exits 0.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { addressOfText, noteFilesWhere } from "./note-index.mjs";

/** Keys under `data.names` that hold no name. */
const NOT_NAMES = new Set(["pattern", "metadata", "en"]);

/** The `kind`s of a `data.sounds.letters` entry that are vowel groups. */
const GROUP_KINDS = new Set(["vowel pair", "long vowel"]);

const ACUTE = "́";
const DIAERESIS = "̈";

const frontmatterDoc = (text) => {
    const match = /^---\n([\s\S]*?)\n---/.exec(text.replace(/\r\n?/g, "\n"));
    if (!match) return undefined;
    const lineCounter = new YAML.LineCounter();
    return {
        doc: YAML.parseDocument(match[1], { lineCounter }),
        lineCounter,
        source: match[1],
    };
};

/**
 * The vowel groups a note's `data.sounds.letters` declares for a tongue.
 *
 * @param {YAML.Document} doc
 * @param {string | undefined} address - The language's address, matched against an entry's `tongue`.
 * @returns {string[]}
 */
function declaredGroups(doc, address) {
    const letters = doc.getIn(["data", "sounds", "letters"]);
    const out = [];
    if (!YAML.isSeq(letters)) return out;
    for (const item of letters.toJS(doc)) {
        if (!item || !GROUP_KINDS.has(item.kind)) continue;
        if (Array.isArray(item.tongue) && !item.tongue.includes(address)) continue;
        for (const l of item.letters ?? []) out.push(String(l).normalize("NFC").toLowerCase());
    }
    return out;
}

/**
 * The groups the guide declares common, for one language.
 *
 * @param {string} guideText - The guide note, frontmatter included.
 * @param {string} [address] - The language's address.
 * @returns {Set<string>}
 */
export function groupsOf(guideText, address) {
    const parsed = frontmatterDoc(guideText);
    return new Set(parsed ? declaredGroups(parsed.doc, address) : []);
}

/**
 * The language note's own shortcode, the name a summary counts it under.
 *
 * @param {string} text
 * @returns {string}
 */
export function languageName(text) {
    const parsed = frontmatterDoc(text);
    return String(parsed?.doc.get("shortcode") ?? "");
}

/**
 * The diaereses of a form that change nothing: those not on the second vowel
 * of a group.
 *
 * @param {string} form
 * @param {Set<string>} groups
 * @returns {{pair: string, offset: number}[]}
 */
export function badPairs(form, groups) {
    const nfd = [...form.normalize("NFD")];
    // Fold combining marks onto their letters: {base, acute, diaeresis, raw}.
    const letters = [];
    for (const ch of nfd) {
        if (/\p{M}/u.test(ch) && letters.length) {
            const last = letters[letters.length - 1];
            last.raw += ch;
            if (ch === ACUTE) last.acute = true;
            else if (ch === DIAERESIS) last.diaeresis = true;
            else if (ch === "̀") last.grave = true;
        } else letters.push({ base: ch.toLowerCase(), raw: ch, acute: false, diaeresis: false });
    }
    const isVowel = (l) => l && "aeiou".includes(l.base);
    for (let i = 0; i + 1 < letters.length; i += 1) {
        const a = letters[i];
        const b = letters[i + 1];
        if (
            isVowel(a) &&
            isVowel(b) &&
            !a.inGroup &&
            !b.diaeresis &&
            !b.acute &&
            !a.grave &&
            !b.grave &&
            groups.has(a.base + b.base)
        ) {
            a.inGroup = true;
            b.inGroup = true;
        }
    }
    const out = [];
    let offset = 0;
    const offsets = letters.map((l) => {
        const o = offset;
        offset += l.raw.normalize("NFC").length;
        return o;
    });
    // Read each run of vowels left to right, longest group first. A diaeresis
    // on a vowel is needed only where, without it, that vowel would join the
    // one before it in a group; anywhere else it is a mark that changes nothing.
    for (let i = 0; i < letters.length; i += 1) {
        const b = letters[i];
        if (!isVowel(b) || !b.diaeresis) continue;
        const a = letters[i - 1];
        const splits = isVowel(a) && !a.grave && !a.inGroup && groups.has(a.base + b.base);
        if (!splits)
            out.push({
                pair: isVowel(a) ? a.base + b.base : b.base,
                offset: offsets[isVowel(a) ? i - 1 : i],
            });
    }
    return out;
}

const ESCAPES = {
    0: "\0",
    a: "\x07",
    b: "\b",
    t: "\t",
    "\t": "\t",
    n: "\n",
    v: "\v",
    f: "\f",
    r: "\r",
    e: "\x1b",
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    N: "\x85",
    _: "\xa0",
    L: "\u2028",
    P: "\u2029",
};
const HEX = { x: 2, u: 4, U: 8 };

/** The character a double-quoted escape at `pos` spells, and the length of its source. */
function escapeAt(src, pos) {
    const c = src[pos + 1];
    if (c in HEX) {
        const n = HEX[c];
        const hex = src.slice(pos + 2, pos + 2 + n);
        if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length !== n) return undefined;
        return { str: String.fromCodePoint(parseInt(hex, 16)), len: 2 + n };
    }
    if (c in ESCAPES) return { str: ESCAPES[c], len: 2 };
    return undefined;
}

/**
 * The frontmatter offset in the source that spells each character of a
 * scalar's value, by index into the value. Quoted scalars are stepped through
 * their escapes; block scalars skip their header and indentation; folded line
 * breaks are skipped. Undefined when the source cannot be aligned with the
 * value.
 *
 * @param {YAML.Scalar} node
 * @param {string} src - The frontmatter text the node's range indexes.
 * @returns {number[] | undefined}
 */
function sourcePositions(node, src) {
    const value = node.value;
    const type = node.type;
    const double = type === "QUOTE_DOUBLE";
    const single = type === "QUOTE_SINGLE";
    let pos = node.range[0];
    if (double || single) pos += 1;
    else if (type === "BLOCK_LITERAL" || type === "BLOCK_FOLDED") {
        const eol = src.indexOf("\n", pos);
        if (eol < 0) return undefined;
        pos = eol + 1;
    }
    const end = node.range[1];
    const out = [];
    let index = 0;
    while (index < value.length) {
        const d = String.fromCodePoint(value.codePointAt(index));
        let placed = false;
        while (pos < end) {
            const c = src[pos];
            if (double && c === "\\") {
                const esc = escapeAt(src, pos);
                if (esc) {
                    if (esc.str === d) {
                        out[index] = pos;
                        pos += esc.len;
                        placed = true;
                        break;
                    }
                    return undefined;
                }
                // A backslash before a line break joins the lines.
                pos += 1;
                continue;
            }
            if (single && c === "'" && src[pos + 1] === "'") {
                if (d !== "'") return undefined;
                out[index] = pos;
                pos += 2;
                placed = true;
                break;
            }
            if (c === d) {
                out[index] = pos;
                pos += 1;
                placed = true;
                break;
            }
            if (/\s/.test(c)) {
                pos += 1;
                continue;
            }
            return undefined;
        }
        if (!placed) return undefined;
        if (d.length === 2) out[index + 1] = out[index];
        index += d.length;
    }
    return out;
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
            const { line, col } = lineCounter.linePos(positions?.[index] ?? node.range[0]);
            return { line: line + 1, column: col };
        };
        out.push({ form: node.value, at });
    };
    const words = doc.getIn(["data", "words"]);
    if (YAML.isSeq(words))
        for (const item of words.items) {
            if (!YAML.isMap(item)) continue;
            add(item.get("form", true));
            const variants = item.get("variants", true);
            if (YAML.isSeq(variants)) for (const v of variants.items) add(v);
        }
    const walk = (node) => {
        if (YAML.isScalar(node)) add(node);
        else if (YAML.isSeq(node)) node.items.forEach(walk);
        else if (YAML.isMap(node))
            for (const pair of node.items)
                if (!NOT_NAMES.has(String(pair.key?.value ?? pair.key))) walk(pair.value);
    };
    walk(doc.getIn(["data", "names"], true));
    return out;
}

/**
 * The findings of one language note.
 *
 * @param {string} text - The language note.
 * @param {Set<string>} common - The groups the guide declares common for it.
 * @returns {{form: string, pair: string, line: number, column: number}[]}
 */
export function vowelPairFindings(text, common) {
    const parsed = frontmatterDoc(text);
    const groups = new Set(common);
    if (parsed) for (const g of declaredGroups(parsed.doc, addressOfText(text))) groups.add(g);
    const out = [];
    for (const { form, at } of formsOf(text))
        for (const { pair, offset } of badPairs(form, groups))
            out.push({ form, pair, ...at(offset) });
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
        io.err("vowel-pair check skipped: the Pronouncing Thalorna guide was not found");
        return 0;
    }
    const guideText = fs.readFileSync(path.resolve(cwd, guideFile), "utf8");
    const files =
        argv.length ? argv : (
            noteFilesWhere(({ type, subType }) => type === "skill" && subType === "language", cwd)
        );
    const byLanguage = new Map();
    const byPair = new Map();
    let total = 0;
    for (const file of files) {
        const rel = path.relative(cwd, path.resolve(cwd, file)) || file;
        const text = fs.readFileSync(path.resolve(cwd, file), "utf8");
        const name = languageName(text) || rel;
        const common = groupsOf(guideText, addressOfText(text));
        for (const hit of vowelPairFindings(text, common)) {
            total += 1;
            byLanguage.set(name, (byLanguage.get(name) ?? 0) + 1);
            byPair.set(hit.pair, (byPair.get(hit.pair) ?? 0) + 1);
            io.err(
                `${rel}:${hit.line}:${hit.column}: warning: "${hit.form}" carries a diaeresis on "${hit.pair}" that changes nothing, since a diaeresis splits only a vowel group of ${name}`,
            );
        }
    }
    const sorted = (m) => [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (const [name, n] of sorted(byLanguage)) io.out(`${name}: ${n}`);
    io.out(`${total} pair(s) in ${byLanguage.size} language(s)`);
    return 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
