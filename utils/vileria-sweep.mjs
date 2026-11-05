#!/usr/bin/env node
/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/**
 * Respell Vylaria, Vylarian, Vylarians and Vylari to Viléria, Vilérian,
 * Vilérians and Vilari, and Khazryn and Khazryni to Khazrin and Khazrini,
 * in note and changeset prose.
 *
 * Only whole words change. Wikilink targets, link destinations, heading ids,
 * code and `⟦…⟧` codage are left as written. In frontmatter, so is every value
 * under a field that holds identifiers (`shortcode`, `tags`, `packFolder`,
 * `tongue`, `culture`, `parents` and the rest of `IDENTIFIER_KEYS`), every key
 * of a `relations` or `affiliations` map, every `form` of a `retired` entry,
 * and every string outside a prose field that is exactly a note's shortcode or
 * address, whatever its quoting or block form. Every other value is prose, `description`, `gloss`,
 * `name`, `instead` and `why` included, and changes in any case, even as a
 * single word. Rerunning the
 * script on any tree, including one that merged other work first, finishes
 * the job and a second run changes nothing.
 *
 * Further respellings are read from `utils/fixtures/place-name-respellings.json`,
 * each a `from` and a `to`. Such a form changes only as written, all in capitals
 * or capitalized, never in lowercase, so an English word of the same letters and
 * a shortcode stay as they are.
 *
 * Note files whose names carry a Vylar or Khazryn form, or a respelled form, are
 * renamed to the accent-free form (Vylarian_Empire.md becomes Vilerian_Empire.md,
 * Khazryn_Desert.md becomes Khazrin_Desert.md, Lut_Regyt.md becomes Lut_Regit.md);
 * directories are not.
 *
 * Usage: node utils/vileria-sweep.mjs [--check] [path ...]
 * Without paths it sweeps `assets/content` and `.changeset`. `--check`
 * writes nothing and exits 1 when a file would change.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { CONTENT_DIR, noteIndex } from "./note-index.mjs";

export const MAPPING = new Map([
    ["vylarians", "vilérians"],
    ["vylarian", "vilérian"],
    ["vylaria", "viléria"],
    ["vylari", "vilari"],
    ["khazryni", "khazrini"],
    ["khazryn", "khazrin"],
]);

/** Accent-free file name forms; a note's file name is its sanitized name. */
const FILE_FORMS = {
    Vylarians: "Vilerians",
    Vylarian: "Vilerian",
    Vylaria: "Vileria",
    Vylari: "Vilari",
    Khazryni: "Khazrini",
    Khazryn: "Khazrin",
};

/** The data file of further respellings. */
export const RESPELLINGS_FILE = fileURLToPath(
    new URL("./fixtures/place-name-respellings.json", import.meta.url),
);

/**
 * The respellings a data file lists.
 * @param {string} [file]
 * @returns {{from: string, to: string}[]}
 */
export function loadRespellings(file = RESPELLINGS_FILE) {
    const { respellings = [] } = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const { from, to } of respellings)
        if (typeof from !== "string" || typeof to !== "string" || !from || !to)
            throw new Error(`${file}: a respelling needs a from and a to`);
    return respellings.map(({ from, to }) => ({ from, to }));
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const accentFree = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");
const fileForm = (s) => accentFree(s).replace(/-/g, "_");

/**
 * The table a sweep applies: the built-in mapping, which also changes lowercase
 * forms, and the data file's respellings, which change only as written,
 * capitalized or all in capitals.
 * @param {{from: string, to: string}[]} [respellings]
 */
export function sweepTable(respellings = []) {
    const words = new Map();
    for (const [from, to] of MAPPING) words.set(from, { from, to, lower: true });
    for (const { from, to } of respellings)
        words.set(from.toLowerCase(), { from, to, lower: false });
    const files = new Map(Object.entries(FILE_FORMS));
    for (const { from, to } of respellings) files.set(fileForm(from), fileForm(to));
    const alternation = (keys) =>
        [...keys]
            .sort((a, b) => b.length - a.length)
            .map(escape)
            .join("|");
    return {
        words,
        word: `(?<![\\p{L}\\p{N}]|[\\p{L}\\p{N}]_)(${alternation(words.keys())})(?![\\p{L}\\p{N}]|_[\\p{L}\\p{N}])`,
        files,
        filePattern: new RegExp(
            `(?<![\\p{L}\\p{N}])(${alternation(files.keys())})(?![\\p{L}\\p{N}])`,
            "gu",
        ),
    };
}

/** The table the command line and the default calls use. */
let defaultTable;
function tableOf(table) {
    if (table) return table;
    defaultTable ??= sweepTable(fs.existsSync(RESPELLINGS_FILE) ? loadRespellings() : []);
    return defaultTable;
}

/** Spans that never change, in frontmatter and body alike. */
export const SPANS = [
    /⟦[^⟧]*⟧/u.source,
    /```[\s\S]*?```/u.source,
    /`[^`\n]*`/u.source,
    /\[\[[^\]|\\]*/u.source,
    /\]\([^)\s]*\)/u.source,
    /\{#[^}\s]*\}/u.source,
    /https?:\/\/\S+/u.source,
];
/** The excluded fields in their inline layouts, for a body or frontmatter that does not parse. */
const LINE_FIELDS = [
    /\bform:\s*(?:"[^"\n]*"|'[^'\n]*'|[^,}\n]*)/u.source,
    /^\s*(?:-\s+)?(?:shortcode|tags?|packFolder|icon|pack|tongue):[^\n]*$/mu.source,
];
const PROTECTED = [...SPANS, ...LINE_FIELDS].join("|");

/** Fields whose values, at any depth, are shortcodes, addresses or enumerated identifiers. */
const IDENTIFIER_KEYS = new Set([
    "shortcode",
    "type",
    "subType",
    "tags",
    "tag",
    "packFolder",
    "icon",
    "pack",
    "tongue",
    "lang",
    "language",
    "culture",
    "cultures",
    "species",
    "parents",
    "parent",
    "parentSkill",
    "parentSkillCode",
    "assocSkillCode",
    "commonSkills",
    "homes",
    "seat",
    "government",
    "economy",
    "lore",
    "sources",
    "subjects",
    "addresses",
    "locus",
    "place",
    "locations",
    "cast",
    "factions",
    "by",
    "ref",
    "event",
    "calendar",
    "model",
    "enc",
    "kbcat",
    "folders",
    "journals",
    "proclaimedBy",
    "attributedTo",
    "follows",
    "id",
]);
/** Prose fields, whose values change even when a word equals a shortcode. */
const PROSE_KEYS = new Set([
    "description",
    "gloss",
    "name",
    "instead",
    "why",
    "en",
    "meaning",
    "sense",
    "title",
    "label",
    "summary",
]);
/** Maps whose keys are shortcodes or addresses. */
const IDENTIFIER_MAPS = new Set(["relations", "affiliations"]);

/** Every shortcode and address in the content tree, read once per process. */
let knownIdentifiers;
function identifiers() {
    if (knownIdentifiers) return knownIdentifiers;
    knownIdentifiers = new Set();
    if (!fs.existsSync(CONTENT_DIR)) return knownIdentifiers;
    for (const [address, file] of noteIndex().byAddress) {
        knownIdentifiers.add(address);
        const shortcode = noteIndex().frontmatter.get(file)?.shortcode;
        if (shortcode != null) knownIdentifiers.add(String(shortcode));
    }
    return knownIdentifiers;
}

/**
 * The source ranges, within `yaml`, of every value that keeps its spelling: each
 * value under an identifier field, each key of a `relations` or `affiliations`
 * map, each `form` of a `retired` entry, and each string outside a prose field
 * that is exactly a known shortcode or address, whatever its quoting or block
 * form. Every other scalar is prose. `undefined` when the YAML does not parse.
 * @param {string} yaml
 * @returns {Array<[number, number]> | undefined}
 */
export function excludedRanges(yaml) {
    const doc = YAML.parseDocument(yaml);
    if (doc.errors.length) return undefined;
    const ranges = [];
    const known = identifiers();
    const keyOf = (pair) => (YAML.isScalar(pair?.key) ? String(pair.key.value) : undefined);
    const add = (node) => node?.range && ranges.push(node.range.slice(0, 2));
    YAML.visit(doc, {
        Pair(_, pair, path) {
            const key = keyOf(pair);
            const owner = keyOf(path.at(-2));
            if (IDENTIFIER_MAPS.has(owner)) add(pair.key);
            if (IDENTIFIER_KEYS.has(key)) add(pair.value);
            const retired = YAML.isSeq(path.at(-2)) && keyOf(path.at(-3)) === "retired";
            if (retired && key === "form") add(pair.value);
        },
        Scalar(_, scalar, path) {
            if (typeof scalar.value !== "string" || !known.has(scalar.value)) return;
            const pairs = path.filter((node) => YAML.isPair(node));
            if (pairs.at(-1)?.key !== scalar && pairs.some((pair) => PROSE_KEYS.has(keyOf(pair))))
                return;
            add(scalar);
        },
    });
    return ranges.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
}

const capitalized = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase();

/**
 * The respelling of `source` in its case (as listed, all lower where the entry
 * allows it, Capitalised or all upper), or undefined.
 */
function matchCase(source, { from, to, lower }) {
    if (source === from) return to;
    if (source === source.toLowerCase()) return lower ? to.toLowerCase() : undefined;
    if (source === source.toUpperCase()) return to.toUpperCase();
    if (source === capitalized(source)) return capitalized(to);
    return undefined;
}

/**
 * Respell one stretch of text.
 * @param {string} text
 * @param {{ protect?: string, lower?: boolean, counts?: Map<string, number>, table: object }} options
 *   `protect` is the pattern of spans left as written; `lower: false` keeps lowercase forms.
 */
function respellStretch(text, { protect = PROTECTED, lower = true, counts, table }) {
    const re = new RegExp(`(${protect})|${table.word}`, "gimu");
    return text.replace(re, (whole, protectedText, word, offset) => {
        if (protectedText !== undefined || word === undefined) return whole;
        if (word === word.toLowerCase() && (!lower || text[offset - 1] === "-")) return whole;
        const entry = table.words.get(word.toLowerCase());
        const result = matchCase(word, entry);
        if (result === undefined) return whole;
        counts?.set(entry.to, (counts.get(entry.to) ?? 0) + 1);
        return result;
    });
}

/**
 * Respell parsed frontmatter between its excluded ranges. Frontmatter that does not
 * parse keeps its inline excluded fields and every lowercase form.
 */
function respellFrontmatter(yaml, counts, table) {
    const ranges = excludedRanges(yaml);
    if (!ranges) return respellStretch(yaml, { lower: false, counts, table });
    const spans = SPANS.join("|");
    let out = "",
        at = 0;
    for (const [start, end] of ranges) {
        if (start < at) continue;
        out += respellStretch(yaml.slice(at, start), { protect: spans, counts, table });
        out += yaml.slice(start, end);
        at = end;
    }
    return out + respellStretch(yaml.slice(at), { protect: spans, counts, table });
}

/**
 * Respell a whole note or changeset.
 * @param {string} text
 * @param {Map<string, number>} [counts] receives a tally per new form.
 * @param {object} [table] a `sweepTable`; the built-in mapping and the data file by default.
 * @returns {string}
 */
export function respellVileria(text, counts, table) {
    table = tableOf(table);
    const front = /^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*)(?=\r?\n|$)/u.exec(text);
    if (!front) return respellStretch(text, { counts, table });
    const [head, open, yaml, close] = front;
    return (
        open +
        respellFrontmatter(yaml, counts, table) +
        close +
        respellStretch(text.slice(head.length), { counts, table })
    );
}

/** A note file name with the accent-free forms the file-name rule requires. */
export function renamedFile(name, table) {
    const { filePattern, files } = tableOf(table);
    return name.replace(filePattern, (word) => files.get(word));
}

/** The changesets that state the renames name the old spellings and stay as written. */
const STATEMENTS = new Set([
    ".changeset/vileria.md",
    ".changeset/khazrin.md",
    ".changeset/place-name-respellings.md",
]);

function* walk(target) {
    const stat = fs.statSync(target);
    if (stat.isFile()) {
        if (target.endsWith(".md") && !STATEMENTS.has(path.relative(".", target))) yield target;
        return;
    }
    for (const entry of fs.readdirSync(target, { withFileTypes: true }))
        yield* walk(path.join(target, entry.name));
}

function main(argv) {
    const check = argv.includes("--check");
    const roots = argv.filter((arg) => arg !== "--check");
    const targets = roots.length ? roots : ["assets/content", ".changeset"];
    const counts = new Map();
    const changed = [];
    for (const target of targets) {
        if (!fs.existsSync(target)) continue;
        for (const file of walk(target)) {
            const before = fs.readFileSync(file, "utf8");
            const after = respellVileria(before, counts);
            const renamed = path.join(path.dirname(file), renamedFile(path.basename(file)));
            if (after === before && renamed === file) continue;
            changed.push(file);
            if (check) continue;
            if (after !== before) fs.writeFileSync(file, after);
            if (renamed !== file) fs.renameSync(file, renamed);
        }
    }
    for (const [form, n] of counts) console.log(`${form}\t${n}`);
    console.log(`${changed.length} file(s) ${check ? "would change" : "changed"}`);
    if (check && changed.length) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) main(process.argv.slice(2));
