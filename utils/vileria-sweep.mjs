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
 * Note files whose names carry a Vylar or Khazryn form are renamed to the accent-free
 * form (Vylarian_Empire.md becomes Vilerian_Empire.md, Khazryn_Desert.md becomes Khazrin_Desert.md); directories are not.
 *
 * Usage: node utils/vileria-sweep.mjs [--check] [path ...]
 * Without paths it sweeps `assets/content` and `.changeset`. `--check`
 * writes nothing and exits 1 when a file would change.
 */
import fs from "node:fs";
import path from "node:path";
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

/** Spans that never change, in frontmatter and body alike. */
const SPANS = [
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

const WORD =
    /(?<![\p{L}\p{N}]|[\p{L}\p{N}]_)(vylarians|vylarian|vylaria|vylari|khazryni|khazryn)(?![\p{L}\p{N}]|_[\p{L}\p{N}])/iu
        .source;

const MAPPING_PATTERN = new RegExp(
    `(?<![\\p{L}\\p{N}])(${Object.keys(FILE_FORMS).join("|")})(?![\\p{L}\\p{N}])`,
    "gu",
);

/** Match the case of `source` (all lower, Capitalised or all upper) or return undefined. */
function matchCase(source, target) {
    if (source === source.toLowerCase()) return target;
    if (source === source.toUpperCase()) return target.toUpperCase();
    if (source === source[0].toUpperCase() + source.slice(1).toLowerCase())
        return target[0].toUpperCase() + target.slice(1);
    return undefined;
}

/**
 * Respell one stretch of text.
 * @param {string} text
 * @param {{ protect?: string, lower?: boolean, counts?: Map<string, number> }} options
 *   `protect` is the pattern of spans left as written; `lower: false` keeps lowercase forms.
 */
function respellStretch(text, { protect = PROTECTED, lower = true, counts }) {
    const re = new RegExp(`(${protect})|${WORD}`, "gimu");
    return text.replace(re, (whole, protectedText, word, offset) => {
        if (protectedText !== undefined || word === undefined) return whole;
        if (word === word.toLowerCase() && (!lower || text[offset - 1] === "-")) return whole;
        const target = MAPPING.get(word.toLowerCase());
        const result = matchCase(word, target);
        if (result === undefined) return whole;
        counts?.set(target, (counts.get(target) ?? 0) + 1);
        return result;
    });
}

/**
 * Respell parsed frontmatter between its excluded ranges. Frontmatter that does not
 * parse keeps its inline excluded fields and every lowercase form.
 */
function respellFrontmatter(yaml, counts) {
    const ranges = excludedRanges(yaml);
    if (!ranges) return respellStretch(yaml, { lower: false, counts });
    const spans = SPANS.join("|");
    let out = "",
        at = 0;
    for (const [start, end] of ranges) {
        if (start < at) continue;
        out += respellStretch(yaml.slice(at, start), { protect: spans, counts });
        out += yaml.slice(start, end);
        at = end;
    }
    return out + respellStretch(yaml.slice(at), { protect: spans, counts });
}

/**
 * Respell a whole note or changeset.
 * @param {string} text
 * @param {Map<string, number>} [counts] receives a tally per new form.
 * @returns {string}
 */
export function respellVileria(text, counts) {
    const front = /^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*)(?=\r?\n|$)/u.exec(text);
    if (!front) return respellStretch(text, { counts });
    const [head, open, yaml, close] = front;
    return (
        open +
        respellFrontmatter(yaml, counts) +
        close +
        respellStretch(text.slice(head.length), { counts })
    );
}

/** A note file name with the accent-free forms the file-name rule requires. */
export function renamedFile(name) {
    return name.replace(MAPPING_PATTERN, (word) => FILE_FORMS[word]);
}

/** The changesets that state the renames name the old spellings and stay as written. */
const STATEMENTS = new Set([".changeset/vileria.md", ".changeset/khazrin.md"]);

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
