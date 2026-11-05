#!/usr/bin/env node
/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/**
 * Respell every vowel _y_ to Pronouncing Thalorna: _y_ is never a vowel.
 *
 * A vowel _y_ is a _y_ that neither stands before a vowel nor closes a glide
 * after one (_ay_, _ey_, _iy_, _oy_, _uy_), and any _ý_. Sinale writes it _ì_,
 * the front vowel of its harmony, and every other tongue _i_. Sinale has no
 * _ny_ consonant, so its _ny_ before a consonant or at a word's end is _n_ and
 * the vowel too.
 *
 * Three passes, each rerunnable, so a tree that merged other work first is
 * finished by a second run and a third changes nothing:
 *
 * 1. **Prose.** Each `respellings` entry of `utils/fixtures/vowel-y-respellings.json`
 *    without a `scope` changes as a whole word, in any case, through notes and
 *    changesets. An entry scoped `eilwithi` is an English word, and changes
 *    only in the Eilwithi pass.
 *    The spans and fields `vileria-sweep.mjs` protects stay as written:
 *    wikilink targets, link destinations, heading ids, code, `⟦…⟧` codage,
 *    identifier fields, and every `form` of a `retired` entry.
 * 2. **Eilwithi.** Eilwithi's words are English words, so they change only
 *    where they are Eilwithi: in the forms of its language note (words,
 *    variants, plurals, names, elements and register names) and inside
 *    passages tagged as Eilwithi, by the rule above. A form listed in `held`
 *    stays as it is.
 * 3. **Retired records.** Each respelled form is recorded in its tongue's
 *    `data.retired`, with what replaced it.
 *
 * Note files whose names carry a respelled form are renamed to the accent-free
 * form; directories are not.
 *
 * Usage: node utils/vowel-y-sweep.mjs [--check] [path ...]
 * Without paths it sweeps `assets/content` and `.changeset`. `--check`
 * writes nothing and exits 1 when a file would change.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { scopedEdits } from "./aelwythi-respell.mjs";
import { notePath } from "./note-index.mjs";
import { PROTECTED, SPANS, excludedRanges } from "./vileria-sweep.mjs";
import { FIXTURE, TONGUES, loadFixture, respellVowelY } from "./vowel-y.mjs";

export { FIXTURE, TONGUES, loadFixture, respellVowelY };

/** Why a respelled form is retired. */
export const WHY = "y is never a vowel";

/** This branch's own changeset names the old spellings and stays as written. */
const STATEMENTS = new Set([".changeset/y-consonant.md"]);

const fold = (text) => text.normalize("NFC").toLowerCase();
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
const accentFree = (text) => text.normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");

/** Match the case of `source` (all lower, Capitalized or all upper) or return undefined. */
function matchCase(source, target) {
    if (source === source.toLowerCase()) return target;
    if (source === source.toUpperCase()) return target.toUpperCase();
    const capital = source[0].toUpperCase() + source.slice(1).toLowerCase();
    if (source === capital) return target[0].toUpperCase() + target.slice(1);
    return undefined;
}

/**
 * The prose table of a fixture.
 *
 * @param {ReturnType<typeof loadFixture>} fixture
 */
export function proseTable({ respellings: all }) {
    const respellings = all.filter(({ scope }) => scope === undefined);
    const words = new Map(respellings.map(({ from, to }) => [fold(from), fold(to)]));
    const keys = [...words.keys()].sort((a, b) => b.length - a.length).map(escape);
    const word =
        keys.length ?
            `(?<![\\p{L}\\p{M}\\p{N}]|[\\p{L}\\p{N}]_)(${keys.join("|")})(?![\\p{L}\\p{M}\\p{N}]|_[\\p{L}\\p{N}])`
        :   "(?!)";
    const files = new Map(
        respellings.map(({ from, to }) => [accentFree(fold(from)), accentFree(fold(to))]),
    );
    return { words, word, files };
}

/** Respell one stretch of text, leaving `protect` spans as written. */
function respellStretch(text, table, protect, counts) {
    const re = new RegExp(`(${protect})|${table.word}`, "giu");
    return text.replace(re, (whole, kept, word) => {
        if (kept !== undefined || word === undefined) return whole;
        const result = matchCase(word, table.words.get(fold(word)));
        if (result === undefined) return whole;
        counts?.set(fold(result), (counts.get(fold(result)) ?? 0) + 1);
        return result;
    });
}

const FRONT = /^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*)(?=\r?\n|$)/u;

/**
 * The prose pass over one note or changeset.
 *
 * @param {string} text
 * @param {ReturnType<typeof proseTable>} table
 * @param {Map<string, number>} [counts] - receives a tally per new form.
 * @returns {string}
 */
export function respellProse(text, table, counts) {
    const front = FRONT.exec(text);
    if (!front) return respellStretch(text, table, PROTECTED, counts);
    const [head, open, yaml, close] = front;
    const ranges = excludedRanges(yaml);
    let body;
    if (!ranges) body = respellStretch(yaml, table, PROTECTED, counts);
    else {
        const spans = SPANS.join("|");
        body = "";
        let at = 0;
        for (const [start, end] of ranges) {
            if (start < at) continue;
            body += respellStretch(yaml.slice(at, start), table, spans, counts);
            body += yaml.slice(start, end);
            at = end;
        }
        body += respellStretch(yaml.slice(at), table, spans, counts);
    }
    return open + body + close + respellStretch(text.slice(head.length), table, PROTECTED, counts);
}

const LETTERS = /[\p{L}\p{M}]+/gu;

/**
 * The Eilwithi respelling of one token, or the token when it is held.
 *
 * @param {Set<string>} held - Folded held forms.
 */
export function eilwithiRespeller(held, counts) {
    return (token) =>
        token.replace(LETTERS, (word) => {
            if (held.has(fold(word))) return word;
            const result = respellVowelY(word);
            if (result !== word) counts?.set(fold(result), (counts.get(fold(result)) ?? 0) + 1);
            return result;
        });
}

/**
 * The source ranges of the native forms in a language note's frontmatter:
 * word forms, variants, plurals and parts, names (but `pattern`, `metadata`
 * and the English lists), elements and their examples, and register names of
 * the note's own tongue with their parts.
 *
 * @param {string} yaml
 * @param {string} tongue
 * @returns {Array<[number, number]>}
 */
export function nativeRanges(yaml, tongue) {
    const doc = YAML.parseDocument(yaml);
    if (doc.errors.length) return [];
    const out = [];
    const scalars = (node) => {
        if (YAML.isScalar(node) && typeof node.value === "string") out.push(node.range.slice(0, 2));
        else if (YAML.isSeq(node)) node.items.forEach(scalars);
    };
    const data = doc.get("data", true);
    if (!YAML.isMap(data)) return out;
    const words = data.get("words", true);
    if (YAML.isSeq(words))
        for (const item of words.items) {
            if (!YAML.isMap(item) || item.has("instead")) continue;
            for (const key of ["form", "plural", "variants", "built"]) scalars(item.get(key, true));
        }
    const names = (node) => {
        if (YAML.isMap(node)) {
            if (node.has("instead")) return;
            for (const pair of node.items)
                if (!["pattern", "metadata", "en"].includes(String(pair.key?.value)))
                    names(pair.value);
        } else if (YAML.isSeq(node)) node.items.forEach(names);
        else scalars(node);
    };
    names(data.get("names", true));
    const elements = data.get("elements", true);
    if (YAML.isSeq(elements))
        for (const item of elements.items)
            if (YAML.isMap(item))
                for (const key of ["form", "examples"]) scalars(item.get(key, true));
    const register = data.get("register", true);
    if (YAML.isSeq(register))
        for (const row of register.items) {
            if (!YAML.isMap(row)) continue;
            const own = row.get("tongue");
            if (own != null && String(own) !== tongue) continue;
            for (const key of ["name", "built"]) scalars(row.get(key, true));
        }
    return out.sort((a, b) => a[0] - b[0]);
}

/** A file that may hold a passage tagged as Eilwithi, by language or by encoding. */
const EILWITHI_SELECTOR =
    /\blang\s*=\s*["']?(?:art-x-)?aelw\b|\benc\s*=\s*["']?\S*aelwsemaronenc/iu;

/**
 * The Eilwithi pass over one file: its language note's native forms, and
 * every passage tagged as Eilwithi.
 *
 * @param {string} text
 * @param {{note: boolean, respell: (token: string) => string}} options
 * @returns {string}
 */
export function respellEilwithi(text, { note, respell }) {
    let out = text;
    const front = FRONT.exec(out);
    if (note && front) {
        const [head, open, yaml, close] = front;
        let edited = "";
        let at = 0;
        for (const [start, end] of nativeRanges(yaml, "eilwithi")) {
            edited += yaml.slice(at, start) + respell(yaml.slice(start, end));
            at = end;
        }
        edited += yaml.slice(at);
        out = open + edited + close + out.slice(head.length);
    }
    if (!EILWITHI_SELECTOR.test(out)) return out;
    const edits = scopedEdits(out, respell).filter((edit) => edit.form !== edit.replacement);
    for (const edit of edits.sort((a, b) => b.from - a.from))
        out = out.slice(0, edit.from) + edit.replacement + out.slice(edit.to);
    return out;
}

/**
 * Add a retired record for each respelled form a language note lacks.
 *
 * @param {string} text - The language note.
 * @param {{from: string, to: string}[]} forms - The respellings of its tongue.
 * @returns {string}
 */
export function addRetired(text, forms) {
    const front = FRONT.exec(text);
    if (!front || !forms.length) return text;
    const [head, open, yaml, close] = front;
    const doc = YAML.parseDocument(yaml);
    if (doc.errors.length) return text;
    const retired = doc.getIn(["data", "retired"], true);
    const have = new Set(
        (YAML.isSeq(retired) ? retired.toJS(doc) : []).map((entry) => fold(String(entry?.form))),
    );
    const missing = forms.filter(({ from }) => !have.has(fold(from)));
    if (!missing.length) return text;
    const quote = (value) => (/^[\p{L}\p{M}' -]+$/u.test(value) ? value : JSON.stringify(value));
    const lines = missing.map(
        ({ from, to }) => `    - {form: ${quote(from)}, instead: ${quote(to)}, why: ${WHY}}`,
    );
    let edited;
    if (YAML.isSeq(retired) && !retired.flow) {
        const end = retired.range[1];
        const lineEnd = yaml.lastIndexOf("\n", end - 1) === end - 1 ? end - 1 : end;
        edited = yaml.slice(0, lineEnd) + "\n" + lines.join("\n") + yaml.slice(lineEnd);
    } else if (YAML.isSeq(retired)) {
        const keyLine = yaml.lastIndexOf("\n", retired.range[0]) + 1;
        const items = retired.items.map(
            (item) => `    - ${yaml.slice(item.range[0], item.range[1]).trim()}`,
        );
        const end = yaml.indexOf("\n", retired.range[1]);
        edited =
            yaml.slice(0, keyLine) +
            ["  retired:", ...items, ...lines].join("\n") +
            (end < 0 ? "" : yaml.slice(end));
    } else {
        const data = doc.get("data", true);
        const end = data.range[1];
        const lineEnd = yaml[end - 1] === "\n" ? end - 1 : end;
        edited = yaml.slice(0, lineEnd) + "\n  retired:\n" + lines.join("\n") + yaml.slice(lineEnd);
    }
    return open + edited + close + text.slice(head.length);
}

let defaults;
/**
 * A note or changeset with the prose and Eilwithi passes applied, for a
 * baseline compared with the respelled tree. Retired records are not added.
 *
 * @param {string} text
 * @returns {string}
 */
export function respellVowelYText(text) {
    if (!defaults) {
        const fixture = loadFixture();
        defaults = {
            table: proseTable(fixture),
            respell: eilwithiRespeller(new Set(fixture.held.map(({ form }) => fold(form)))),
        };
    }
    const note = /^shortcode:\s*aelwthlng\s*$/mu.test(FRONT.exec(text)?.[2] ?? "");
    return respellEilwithi(respellProse(text, defaults.table), {
        note,
        respell: defaults.respell,
    });
}

/** A note file name with each respelled form in its accent-free spelling. */
export function renamedFile(name, table) {
    if (!table.files.size) return name;
    const keys = [...table.files.keys()].sort((a, b) => b.length - a.length).map(escape);
    const re = new RegExp(`(?<![\\p{L}\\p{N}])(${keys.join("|")})(?![\\p{L}\\p{N}])`, "giu");
    return name.replace(re, (word) => matchCase(word, table.files.get(fold(word))) ?? word);
}

function* walk(target) {
    const stat = fs.statSync(target);
    if (stat.isFile()) {
        if (target.endsWith(".md") && !STATEMENTS.has(path.relative(".", target))) yield target;
        return;
    }
    for (const entry of fs.readdirSync(target, { withFileTypes: true }))
        yield* walk(path.join(target, entry.name));
}

/**
 * Sweep a tree.
 *
 * @param {string[]} targets
 * @param {{check?: boolean, fixture?: ReturnType<typeof loadFixture>}} [options]
 * @returns {{changed: string[], counts: Map<string, number>}}
 */
export function sweep(targets, { check = false, fixture = loadFixture() } = {}) {
    const table = proseTable(fixture);
    const counts = new Map();
    const held = new Set(fixture.held.map(({ form }) => fold(form)));
    const respell = eilwithiRespeller(held, counts);
    const notes = new Map(
        Object.entries(TONGUES).map(([tongue, address]) => [
            path.resolve(notePath(address)),
            tongue,
        ]),
    );
    const changed = [];
    for (const target of targets) {
        if (!fs.existsSync(target)) continue;
        for (const file of walk(target)) {
            const before = fs.readFileSync(file, "utf8");
            const tongue = notes.get(path.resolve(file));
            let after = respellProse(before, table, counts);
            after = respellEilwithi(after, { note: tongue === "eilwithi", respell });
            if (tongue) {
                const own = fixture.respellings.filter((entry) => entry.tongue === tongue);
                after = addRetired(after, own);
            }
            const renamed = path.join(path.dirname(file), renamedFile(path.basename(file), table));
            if (after === before && renamed === file) continue;
            changed.push(file);
            if (check) continue;
            if (after !== before) fs.writeFileSync(file, after);
            if (renamed !== file) fs.renameSync(file, renamed);
        }
    }
    return { changed, counts };
}

function main(argv) {
    const check = argv.includes("--check");
    const roots = argv.filter((arg) => arg !== "--check");
    const { changed, counts } = sweep(roots.length ? roots : ["assets/content", ".changeset"], {
        check,
    });
    for (const [form, n] of [...counts].sort()) console.log(`${form}\t${n}`);
    console.log(`${changed.length} file(s) ${check ? "would change" : "changed"}`);
    if (check && changed.length) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url))
    main(process.argv.slice(2));
