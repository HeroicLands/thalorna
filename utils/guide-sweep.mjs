#!/usr/bin/env node
/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/**
 * Respell the forms listed in `guide-sweep.json` in note and changeset prose,
 * so that each tongue's words read as Pronouncing Thalorna reads them.
 *
 * The data file holds groups. Each names a `tongue` (a language note's
 * address), a `scope` and a map of `forms`, old spelling to new:
 *
 * - `scope: "corpus"` respells the forms in every note;
 * - `scope: "tongue"` respells them only in the notes the language's own
 *   `data.scope` catches, the language note itself and the notes listed in the
 *   group's `also`.
 *
 * Only whole words change, matched without regard to case and written back in
 * the case of the word they replace (all lower, Capitalised or all upper). A
 * form may carry an apostrophe or a hyphen of its own, and an English
 * possessive after a form is kept. Where a form's old spelling is also an
 * English word, it changes only where the text is the tongue's own: in a
 * frontmatter field that holds forms (`form`, `variants`, `plural`, `built`),
 * in an italic span whose every word is one of the group's forms, or where the
 * innermost `[…]{lang=…}` span or `::: {lang=…}` block holding it names the
 * tongue's key or tag in `package-build.config.yaml`. An inner span in another
 * tongue or in English keeps its words.
 *
 * Wikilink targets, link destinations, heading ids, URLs, code and `⟦…⟧`
 * codage are left as written, except a code span that holds exactly one form. In frontmatter, so is every value under a field
 * that holds identifiers (`shortcode`, `tags`, `packFolder`, `tongue`,
 * `culture`, `parents` and the rest of `IDENTIFIER_KEYS`), every key of a
 * `relations` or `affiliations` map, every `form` of a `retired` entry, and
 * every string outside a prose field that is exactly a note's shortcode or
 * address. Rerunning the script finishes the job, and a second run changes
 * nothing.
 *
 * A note this changes whose file name no longer matches its name is renamed
 * to the name the file-name rule gives it.
 *
 * Usage: node utils/guide-sweep.mjs [--check] [path ...]
 * Without paths it sweeps `assets/content` and `.changeset`. `--check` writes
 * nothing and exits 1 when a file would change.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { inScope } from "@heroiclands/package-build/engine/language-rows";
import { CONTENT_DIR, noteIndex } from "./note-index.mjs";
import { expectedNames } from "./note-filename.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

/** The groups of the data file. */
export const GROUPS = JSON.parse(
    fs.readFileSync(path.join(HERE, "guide-sweep.json"), "utf8"),
).groups;

/** English spellings, lowercase NFC. */
let english;
function englishWords() {
    english ??= new Set(
        JSON.parse(
            fs.readFileSync(path.join(HERE, "..", "assets", "data", "english-words.json"), "utf8"),
        ),
    );
    return english;
}

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
/** The excluded fields in their inline layouts, for frontmatter that does not parse. */
const LINE_FIELDS = [
    /\bform:\s*(?:"[^"\n]*"|'[^'\n]*'|[^,}\n]*)/u.source,
    /^\s*(?:-\s+)?(?:shortcode|tags?|packFolder|icon|pack|tongue):[^\n]*$/mu.source,
];

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
    "how",
    "id",
    "concept",
    "class",
    "field",
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
/** Fields whose values are forms of a tongue, never English. */
const FORM_KEYS = new Set(["form", "variants", "plural", "built"]);
/** A scalar, or a list of scalars: a form value holds nothing else. */
const isFormValue = (node) =>
    YAML.isScalar(node) || (YAML.isSeq(node) && node.items.every((item) => YAML.isScalar(item)));
/** Maps whose keys are shortcodes or addresses. */
const IDENTIFIER_MAPS = new Set(["relations", "affiliations"]);

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

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
const fold = (s) => s.normalize("NFC").toLowerCase();

/**
 * One compiled group: its lowercase map, the forms whose old spelling is
 * English, and the pattern that finds them.
 * @param {{forms: Record<string, string>}} group
 */
export function compileGroup(group) {
    const map = new Map();
    // The target is kept lowercase: each occurrence takes its own case from the word it replaces.
    for (const [from, to] of Object.entries(group.forms)) map.set(fold(from), fold(to));
    const keys = [...map.keys()].sort((a, b) => b.length - a.length);
    const risky = new Set(keys.filter((key) => englishWords().has(key.replace(/^-|-$/gu, ""))));
    const word =
        keys.length ?
            `(?<![\\p{L}\\p{M}\\p{N}])(?<![\\p{L}]['’])(${keys.map(escape).join("|")})(?![\\p{L}\\p{M}\\p{N}])(?!['’](?!s(?![\\p{L}]))\\p{L})`
        :   "(?!)";
    return { map, risky, word, langs: languageCodes(group.tongue) };
}

/** The `lang` codes, key and tag, the build configuration gives a language note. */
function languageCodes(tongue) {
    const file = path.join(HERE, "..", "package-build.config.yaml");
    if (!tongue || !fs.existsSync(file)) return new Set();
    const languages = YAML.parse(fs.readFileSync(file, "utf8"))?.languages ?? {};
    const codes = new Set();
    for (const [key, entry] of Object.entries(languages))
        if (entry?.note === tongue) codes.add(key).add(entry.tag);
    return codes;
}

/** Match the case of `source` (all lower, Capitalised or all upper) or return undefined. */
export function matchCase(source, target) {
    const lower = fold(source);
    if (source === lower) return target;
    if (source === source.toUpperCase()) return target.toUpperCase();
    const first = [...source][0];
    if (first + fold(source.slice(first.length)) === source && first !== first.toLowerCase()) {
        const head = [...target][0];
        return head.toUpperCase() + target.slice(head.length);
    }
    // A phrase written with each word Capitalised keeps that.
    const title = (s) =>
        s
            .split(" ")
            .map((w) => w && w[0].toUpperCase() + w.slice(1))
            .join(" ");
    if (source.includes(" ") && title(lower) === source) return title(target);
    // A form written with capitals inside it changes only where it is written exactly so.
    return undefined;
}

/**
 * Whether an offset of a stretch is the tongue's own text. The innermost
 * `[…]{lang=…}` span or `::: {lang=…}` block holding the offset decides: it is
 * the tongue's own when its `lang` is the tongue's key or tag, and not when it
 * names another tongue or English. Outside every such span, an italic span
 * whose every word is one of the group's forms is the tongue's own.
 */
function nativeTest(text, compiled) {
    const explicit = [];
    const langOf = (attrs) => /(?<![\w-])lang=["']?([\w-]+)/u.exec(attrs)?.[1];
    const add = (m, attrs) => {
        const lang = langOf(attrs);
        if (lang)
            explicit.push({
                start: m.index,
                end: m.index + m[0].length,
                own: compiled.langs.has(lang),
            });
    };
    for (const m of text.matchAll(/\[((?:[^\[\]]|\[[^\]]*\])*)\]\{([^}\n]*)\}/gu)) add(m, m[2]);
    // A span nested inside another is found on its own as well.
    for (const m of text.matchAll(/\[([^\[\]]*)\]\{([^}\n]*)\}/gu)) add(m, m[2]);
    for (const m of text.matchAll(/^(:{3,})[ \t]*\{([^}\n]*)\}[^\n]*\n([\s\S]*?)^\1[ \t]*$/gmu))
        add(m, m[2]);
    const italic = [];
    for (const m of text.matchAll(/(?<![\p{L}\p{N}_])_([^_\n]+)_(?![\p{L}\p{N}_])/gu)) {
        const words = m[1].split(/[\s,.!?‼…«»‹›—]+/u).filter(Boolean);
        if (words.length && words.every((w) => compiled.map.has(fold(w))))
            italic.push([m.index, m.index + m[0].length]);
    }
    return (offset) => {
        let inner;
        for (const range of explicit)
            if (offset >= range.start && offset < range.end)
                if (!inner || range.end - range.start < inner.end - inner.start) inner = range;
        if (inner) return inner.own;
        return italic.some(([a, b]) => offset >= a && offset < b);
    };
}

/**
 * Respell one stretch of text.
 * @param {string} text
 * @param {object} compiled - From {@link compileGroup}.
 * @param {{protect: string, forms?: boolean, counts?: Map<string, number>}} options
 *   `forms: true` marks a stretch that holds only forms of the tongue.
 */
function respellStretch(text, compiled, { protect, forms = false, counts }) {
    const re = new RegExp(`(${protect})|${compiled.word}`, "giu");
    const native = nativeTest(text, compiled);
    return text.replace(re, (whole, protectedText, word, offset) => {
        if (protectedText !== undefined) {
            // A code span that holds exactly one form cites that form.
            const code = /^`([^`\n]+)`$/u.exec(protectedText);
            const target = code && compiled.map.get(fold(code[1]));
            const result = target && matchCase(code[1], target);
            if (!result || result === code[1]) return whole;
            counts?.set(fold(code[1]), (counts.get(fold(code[1])) ?? 0) + 1);
            return `\`${result}\``;
        }
        if (word === undefined) return whole;
        const key = fold(word);
        const target = compiled.map.get(key);
        if (target === undefined) return whole;
        // A form that is also English changes only where the text is the tongue's own.
        if (compiled.risky.has(key) && !forms) {
            if (!native(offset)) return whole;
        }
        const result = matchCase(word, target);
        if (result === undefined) return whole;
        if (result !== word) counts?.set(key, (counts.get(key) ?? 0) + 1);
        return result;
    });
}

/**
 * The source ranges of a frontmatter's excluded values, and of its form values.
 * `undefined` when the YAML does not parse.
 * @param {string} yaml
 */
export function frontmatterRanges(yaml) {
    const doc = YAML.parseDocument(yaml);
    if (doc.errors.length) return undefined;
    const excluded = [];
    const forms = [];
    const known = identifiers();
    const keyOf = (pair) => (YAML.isScalar(pair?.key) ? String(pair.key.value) : undefined);
    const add = (list, node) => node?.range && list.push(node.range.slice(0, 2));
    YAML.visit(doc, {
        Pair(_, pair, nodePath) {
            const key = keyOf(pair);
            const owner = keyOf(nodePath.at(-2));
            if (IDENTIFIER_MAPS.has(owner)) add(excluded, pair.key);
            if (IDENTIFIER_KEYS.has(key)) add(excluded, pair.value);
            const retired = YAML.isSeq(nodePath.at(-2)) && keyOf(nodePath.at(-3)) === "retired";
            if (retired && key === "form") add(excluded, pair.value);
            else if (FORM_KEYS.has(key) && isFormValue(pair.value)) add(forms, pair.value);
        },
        Scalar(_, scalar, nodePath) {
            if (typeof scalar.value !== "string" || !known.has(scalar.value)) return;
            const pairs = nodePath.filter((node) => YAML.isPair(node));
            if (pairs.at(-1)?.key !== scalar && pairs.some((pair) => PROSE_KEYS.has(keyOf(pair))))
                return;
            // A form is a word of the tongue, even where it spells like a shortcode.
            if (pairs.at(-1)?.key !== scalar && FORM_KEYS.has(keyOf(pairs.at(-1)))) return;
            add(excluded, scalar);
        },
    });
    const sort = (list) => list.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    return { excluded: sort(excluded), forms: sort(forms) };
}

function respellFrontmatter(yaml, compiled, counts) {
    const spans = SPANS.join("|");
    const ranges = frontmatterRanges(yaml);
    if (!ranges)
        return respellStretch(yaml, compiled, {
            protect: [...SPANS, ...LINE_FIELDS].join("|"),
            counts,
        });
    // Cut the frontmatter at every range boundary; each piece is excluded, a form value or prose.
    const cuts = new Set([0, yaml.length]);
    for (const [a, b] of [...ranges.excluded, ...ranges.forms]) cuts.add(a).add(b);
    const points = [...cuts].sort((a, b) => a - b);
    const within = (list, a, b) => list.some(([s, e]) => a >= s && b <= e);
    let out = "";
    for (let i = 0; i + 1 < points.length; i += 1) {
        const [a, b] = [points[i], points[i + 1]];
        const piece = yaml.slice(a, b);
        if (within(ranges.excluded, a, b)) out += piece;
        else
            out += respellStretch(piece, compiled, {
                protect: spans,
                forms: within(ranges.forms, a, b),
                counts,
            });
    }
    return out;
}

/**
 * Respell a whole note or changeset for one compiled group.
 * @param {string} text
 * @param {object} compiled - From {@link compileGroup}.
 * @param {Map<string, number>} [counts] receives a tally per old form.
 * @returns {string}
 */
export function respellText(text, compiled, counts) {
    const front = /^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*)(?=\r?\n|$)/u.exec(text);
    const protect = SPANS.join("|");
    if (!front) return respellStretch(text, compiled, { protect, counts });
    const [head, open, yaml, close] = front;
    return (
        open +
        respellFrontmatter(yaml, compiled, counts) +
        close +
        respellStretch(text.slice(head.length), compiled, { protect, counts })
    );
}

/** The note files a group sweeps, or undefined for every file. */
function scopedFiles(group) {
    if (group.scope === "corpus") return undefined;
    const index = noteIndex();
    const langFile = index.byAddress.get(group.tongue);
    if (!langFile) throw new Error(`guide-sweep: no note has the address ${group.tongue}`);
    const scope = index.frontmatter.get(langFile)?.data?.scope;
    const files = new Set([langFile]);
    for (const address of group.also ?? []) {
        const file = index.byAddress.get(address);
        if (!file) throw new Error(`guide-sweep: no note has the address ${address}`);
        files.add(file);
    }
    if (scope)
        for (const [file, address] of index.byFile)
            if (inScope(index.frontmatter.get(file), address, scope)) files.add(file);
    return files;
}

function* walk(target) {
    const stat = fs.statSync(target);
    if (stat.isFile()) {
        if (target.endsWith(".md")) yield target;
        return;
    }
    for (const entry of fs
        .readdirSync(target, { withFileTypes: true })
        .sort((a, b) => a.name.localeCompare(b.name)))
        yield* walk(path.join(target, entry.name));
}

/** The changeset that states the respellings names the old spellings and stays as written. */
const STATEMENTS = new Set([".changeset/guide-remaining.md"]);

function main(argv) {
    const check = argv.includes("--check");
    const roots = argv.filter((arg) => arg !== "--check");
    const targets = roots.length ? roots : [CONTENT_DIR, ".changeset"];
    const files = [];
    for (const target of targets)
        if (fs.existsSync(target))
            for (const file of walk(target))
                if (!STATEMENTS.has(path.relative(".", file))) files.push(file);
    const compiled = GROUPS.map((group) => ({ group, compiled: compileGroup(group) }));
    const scopes = GROUPS.map(scopedFiles);
    const counts = GROUPS.map(() => new Map());
    const changed = [];
    for (const file of files) {
        const rel = path.relative(".", file).split(path.sep).join("/");
        const before = fs.readFileSync(file, "utf8");
        let after = before;
        compiled.forEach(({ compiled: c }, i) => {
            if (scopes[i] && !scopes[i].has(rel)) return;
            after = respellText(after, c, counts[i]);
        });
        if (after === before) continue;
        changed.push(rel);
        if (!check) fs.writeFileSync(file, after);
    }
    if (!check) {
        const touched = new Set(changed);
        for (const row of expectedNames(".")) {
            if (!row.expected || row.expected === row.path || !touched.has(row.path)) continue;
            fs.renameSync(row.path, row.expected);
            console.log(`renamed ${row.path} -> ${row.expected}`);
        }
    }
    GROUPS.forEach((group, i) => {
        for (const [form, n] of counts[i]) console.log(`${group.tongue}\t${form}\t${n}`);
    });
    console.log(`${changed.length} file(s) ${check ? "would change" : "changed"}`);
    if (check && changed.length) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) main(process.argv.slice(2));
