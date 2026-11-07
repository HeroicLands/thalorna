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
 * entry's `tongue` list when it has one). A language note never adds a group.
 * A diaeresis anywhere else changes nothing and is a finding: every sound has
 * one spelling. Runs of vowels are read left to right, longest group first. A
 * grave never joins a group. The letter `y` is a consonant. A hyphen, space,
 * apostrophe or any other non-letter ends a run of vowels.
 *
 * No language is exempt: Aelwythi is held to the standard like every other.
 *
 * Diaeresis findings remain report-only warnings. Closing ay, ey and oy are
 * errors in source-attested in-world spellings; iy and uy stay. The
 * source audit includes typed forms, native names, Roman runs and verse.
 * Ambiguous unmarked homographs are reported for review, never auto-corrected.
 * Native codage, code, English glosses and link targets are not Roman forms.
 * --json emits the exact-source work list, ambiguities and exclusion evidence.
 * Deprecated spellings or a duplicate sound inventory make the command exit 1.
 *
 * @module
 */

import fs from "node:fs";
import { reviewedNativeForms, reviewedAffixExamples } from "./vowel-pairs-adjudications.mjs";
import path from "node:path";
import YAML from "yaml";
import { addressOfText, noteFiles, noteFilesWhere, notePath } from "./note-index.mjs";
import { parseAddress } from "@heroiclands/package-build/engine/address";
import { resolveNoteLanguages } from "@heroiclands/package-build/engine/note-language";
import { scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { scanSpans } from "@heroiclands/package-build/engine/content-spans";
import { scanVerse } from "@heroiclands/package-build/engine/content-verse";
import { scanScrolls } from "@heroiclands/package-build/engine/content-scroll";
import { scanBlocks } from "@heroiclands/package-build/engine/content-blocks";
import { codeRegions } from "@heroiclands/package-build/engine/code-fences";
import { WIKILINK, parseWikilink } from "@heroiclands/package-build/engine/wikilink-syntax";
import { normalizeName, nameFormLists } from "@heroiclands/package-build/engine/name-forms";
import { nameForms } from "@heroiclands/package-build/engine/names";
import { glossaryLanguage } from "@heroiclands/package-build/engine/glossary-language";

/** Keys under `data.names` that hold no name. */
const NOT_NAMES = new Set(["pattern", "metadata", "en"]);

/** The `kind`s of a `data.sounds.letters` entry that are vowel groups. */
const GROUP_KINDS = new Set(["vowel pair", "long vowel"]);

const ACUTE = "́";
const DIAERESIS = "̈";

export const frontmatterDoc = (text) => {
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
export function sourcePositions(node, src) {
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
    const out = [];
    for (const { form, at } of formsOf(text))
        for (const { pair, offset } of badPairs(form, common))
            out.push({ form, pair, ...at(offset) });
    return out;
}

/**
 * Run the check.
 *
 * @param {string[]} argv - Note paths and optional --json; all notes by default.
 * @param {{out: (s: string) => void, err: (s: string) => void}} [io]
 * @param {string} [cwd]
 * @returns {number} 1 for deprecated spellings or a duplicate sound inventory.
 */
export function main(argv, io = { out: console.log, err: console.error }, cwd = process.cwd()) {
    const [guideFile] = noteFilesWhere(
        (fm) => fm?.type === "doc" && fm?.shortcode === "prnncthlrn",
        cwd,
    );
    if (!guideFile) {
        io.err("vowel-pair check failed: the Pronouncing Thalorna guide was not found");
        return 1;
    }
    const guideText = fs.readFileSync(path.resolve(cwd, guideFile), "utf8");
    const json = argv.includes("--json");
    const named = argv.filter((arg) => arg !== "--json");
    const config = YAML.parse(fs.readFileSync(path.join(cwd, "package-build.config.yaml"), "utf8"));
    const audit = pairInventory(
        noteFiles(cwd).map((file) => ({
            file,
            text: fs.readFileSync(path.resolve(cwd, file), "utf8"),
        })),
        config,
    );
    const inventory = soundInventory(guideText);
    if (named.length) {
        const selected = new Set(named.map((file) => path.relative(cwd, path.resolve(cwd, file))));
        for (const group of ["findings", "ambiguities", "exclusions"])
            audit[group] = audit[group].filter((hit) => selected.has(hit.file));
    }
    const failed =
        audit.findings.length > 0 || inventory.duplicates.length > 0 || inventory.uniqueIPA !== 49;
    if (json) {
        io.out(JSON.stringify({ inventory, ...audit }, null, 2));
        return failed ? 1 : 0;
    }
    for (const hit of audit.findings)
        io.err(
            `${hit.file}:${hit.line}:${hit.column}: error: \"${hit.form}\" closes \"${hit.pair}\"; write \"${hit.replacement}\" (${hit.language}; ${hit.field}; ${hit.surface})`,
        );
    io.out(
        `${audit.findings.length} deprecated pair occurrence(s); ${audit.ambiguities.length} ambiguous occurrence(s), available with --json`,
    );
    io.out(
        `Guide: ${inventory.rows} sound rows / ${inventory.uniqueIPA} distinct IPA sequences; ${inventory.duplicates.length} duplicate(s)`,
    );
    const files =
        named.length ? named : (
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
    return failed ? 1 : 0;
}

// The owner's three duplicate spellings; the sound inventory itself comes from
// data.sounds, never from a second list of sounds.
const DEPRECATED = new Map([
    ["ay", "ai"],
    ["ey", "ei"],
    ["oy", "oi"],
]);
const WORD = /[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*/gu;
const baseLetter = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

const GUIDE_GROUPS = groupsOf(fs.readFileSync(notePath("doc-prnncthlrn"), "utf8"));

/** Closing ay/ey/oy, in original UTF-16 coordinates, with only y changed.
 * Consume guide vowel groups first; a marked vowel after y still starts
 * the next syllable.
 */
export function deprecatedPairs(form, groups = GUIDE_GROUPS) {
    const letters = [...form.matchAll(/\P{M}\p{M}*/gu)];
    const out = [];
    for (let i = 0; i + 1 < letters.length; i++) {
        const a = letters[i],
            b = letters[i + 1],
            next = letters[i + 2];
        const first = a[0].normalize("NFD"),
            second = b[0].normalize("NFD");
        if (first.includes("̀")) continue;
        // A second-vowel acute or diaeresis starts a new syllable. Tone
        // marks on the first vowel preserve the guide's held-vowel group.
        if (
            !/[̀́̈̌̂]/u.test(second) &&
            groups.has(baseLetter(a[0]) + baseLetter(b[0])) &&
            /^[aeiou]$/.test(baseLetter(b[0]))
        ) {
            i += 1;
            continue;
        }
        if (!DEPRECATED.has(baseLetter(a[0]) + b[0].toLowerCase())) continue;
        if (next && /^[aeiou]$/.test(baseLetter(next[0]))) continue;
        const offset = a.index,
            end = b.index + b[0].length;
        const pair = form.slice(offset, end);
        out.push({ pair, offset, end, replacement: a[0] + (b[0] === "Y" ? "I" : "i") });
    }
    return out;
}

/** The measured and prospective inventory, both derived from the authored rows. */
export function soundInventory(text) {
    const rows = frontmatterDoc(text)?.doc.toJS()?.data?.sounds?.letters ?? [];
    const summarize = (items) => ({
        rows: items.length,
        uniqueIPA: new Set(items.map((row) => row.ipa)).size,
        spellings: items.flatMap((row) => row.letters ?? []),
    });
    const ipa = new Map();
    for (const row of rows) ipa.set(row.ipa, [...(ipa.get(row.ipa) ?? []), ...(row.letters ?? [])]);
    return {
        ...summarize(rows),
        duplicates: [...ipa]
            .filter(([, spellings]) => spellings.length > 1)
            .map(([ipa, spellings]) => ({ ipa, spellings })),
        prospective: summarize(
            rows.filter((row) => !(row.letters ?? []).some((s) => DEPRECATED.has(s))),
        ),
    };
}

/** Parse source once, keeping YAML ranges in the original text (including CRLF). */
function pairSource({ file, text }) {
    const front = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
    const yaml = front?.[1] ?? "";
    const prefix = front ? text.indexOf(yaml) : 0;
    const doc = YAML.parseDocument(yaml);
    const fm = doc.toJS() ?? {};
    const scalars = [];
    const walk = (node, keys = []) => {
        if (YAML.isScalar(node) && typeof node.value === "string")
            scalars.push({
                node,
                keys,
                field: keys
                    .map((k, i) => (typeof k === "number" ? "[" + k + "]" : (i ? "." : "") + k))
                    .join(""),
            });
        else if (YAML.isSeq(node)) node.items.forEach((child, i) => walk(child, [...keys, i]));
        else if (YAML.isMap(node))
            for (const pair of node.items) {
                const childKeys = [...keys, String(pair.key.value)];
                if (keys.join(".") === "data.governance.offices")
                    walk(pair.key, [...childKeys, "$key"]);
                walk(pair.value, childKeys);
            }
    };
    walk(doc.contents);
    return { file, text, yaml, prefix, body: front?.[0].length ?? 0, fm, doc, scalars };
}

/**
 * Audit authoritative Roman surfaces. Findings carry exact source replacements;
 * ambiguous ownership is separate, with no automatic replacement. Ordinary
 * prose is never assigned its note's language wholesale. Name.full is English;
 * native name lists, register attestation and explicit runs establish spellings.
 * @param {{file:string,text:string}[]} sources
 * @param {object} config - The repository's language configuration.
 */
export function pairInventory(sources, config = {}) {
    const notes = sources.map(pairSource);
    const pkg = config.contentPackage ?? "thalorna";
    const types = new Set(notes.map((n) => n.fm.type));
    const tuple = (value, type) =>
        typeof value === "string" ?
            parseAddress(value, { package: pkg, system: "note", type, types })
        :   value;
    const key = (value, type = "skill") => {
        const t = tuple(value, type);
        return t && !t.reason && t.package === pkg && t.type && t.shortcode ?
                t.type + "-" + t.shortcode
            :   undefined;
    };
    const records = notes.map((n) => {
        const r = structuredClone(n.fm);
        r.package = pkg;
        r.file = { path: n.file };
        if (r.data?.culture) r.data.culture = tuple(r.data.culture, "lore");
        if (Array.isArray(r.data?.parents))
            r.data.parents = r.data.parents.map((p) => tuple(p, r.type));
        return r;
    });
    const ownershipProblems = [];
    resolveNoteLanguages(records, {
        contentPackage: pkg,
        languages: config.languages,
        problems: ownershipProblems,
        parsed: new Map(notes.map((n) => [n.file, { raw: n.text }])),
    });
    const byAddress = new Map();
    notes.forEach((n, i) => {
        n.record = records[i];
        n.address = n.fm.type + "-" + n.fm.shortcode;
        byAddress.set(n.address, n);
    });
    const codes = new Map();
    for (const [code, spec] of Object.entries(config.languages ?? {})) {
        const address = key(spec.note);
        if (address) for (const alias of [code, spec.tag]) if (alias) codes.set(alias, address);
    }
    const language = (selector, n) => {
        if (!selector) return undefined;
        if (codes.has(selector)) return codes.get(selector);
        const tag = String(selector).replace(/^(other|exonym):/, "");
        const local = (n?.fm.data?.tongues ?? []).filter((row) => row.tag === tag);
        if (local.length) {
            const addresses = new Set(local.map((row) => key(row.language)));
            return addresses.size === 1 ? [...addresses][0] : undefined;
        }
        const address = key(selector);
        return byAddress.get(address)?.fm.subType === "language" ? address : undefined;
    };
    const ownLanguage = (n) =>
        n.fm.type === "skill" && n.fm.subType === "language" ?
            n.address
        :   language(n.record.lang, n);
    const at = (n, start) => {
        const before = n.text.slice(0, start),
            line = before.split("\n").length;
        return { line, column: start - before.lastIndexOf("\n") };
    };
    const findings = [],
        ambiguities = [],
        exclusions = [],
        forms = [];
    const reviewedNative = (form) =>
        [...form.matchAll(WORD)].some((m) =>
            reviewedNativeForms.has(normalizeName(m[0]).replace(/[’']s$/, "")),
        );
    const push = (n, form, positions, detail, ambiguous = false) => {
        const confirmedInWorld =
            reviewedNative(form) ||
            (detail.surface === "mixed-affix-example" && reviewedAffixExamples.has(form));
        for (const hit of deprecatedPairs(form)) {
            const start = positions?.[hit.offset],
                last = positions?.[hit.end - 1];
            if (start === undefined || last === undefined) {
                ambiguities.push({
                    file: n.file,
                    field: detail.field,
                    form,
                    reason: "scalar source cannot be aligned",
                });
                continue;
            }
            const end = last + (n.text[last] === "\\" ? (escapeAt(n.text, last)?.len ?? 1) : 1);
            const source = n.text.slice(start, end);
            // Quoted YAML escapes may spell y with more than one source byte.
            const replacement = n.text.slice(start, last) + (form[hit.end - 1] === "Y" ? "I" : "i");
            const item = {
                file: n.file,
                ...at(n, start),
                start,
                end,
                source,
                replacement,
                context: n.text.slice(
                    n.text.lastIndexOf("\n", start - 1) + 1,
                    n.text.indexOf("\n", end) < 0 ? n.text.length : n.text.indexOf("\n", end),
                ),
                form,
                pair: hit.pair,
                ...detail,
                ...(confirmedInWorld ?
                    { confirmedInWorld: true, needsLanguage: !detail.language }
                :   {}),
                ...(ambiguous || !detail.language ?
                    {
                        automatic: false,
                        reason: detail.reason ?? "source language or Roman boundary is unresolved",
                    }
                :   { automatic: true }),
            };
            (!confirmedInWorld && (ambiguous || !detail.language) ? ambiguities : findings).push(
                item,
            );
        }
    };
    const scalar = (n, s, lang, surface, ambiguous = false) => {
        const p = sourcePositions(s.node, n.yaml);
        const positions = p?.map((i) => i + n.prefix);
        push(n, s.node.value, positions, { field: s.field, language: lang, surface }, ambiguous);
        if (lang && !ambiguous)
            forms.push({
                file: n.file,
                field: s.field,
                form: s.node.value,
                language: lang,
                surface,
            });
    };
    const proseScalar = (s) =>
        [
            "description",
            "summary",
            "gloss",
            "definition",
            "meaning",
            "note",
            "notes",
            "occupation",
            "title",
        ].includes(s.keys.at(-1)) || s.keys.slice(0, 3).join(".") === "data.governance.offices";
    const englishTag = (tag) => ["en", "translation", "gloss"].includes(tag);
    for (const n of notes) {
        const own = ownLanguage(n);
        for (const s of n.scalars) {
            const [top, section, row, leaf] = s.keys;
            const nativeNameKeys = new Set(
                nameFormLists(n.fm.name)
                    .map(([code]) => code)
                    .filter((code) => code !== "en" && code !== "aliases"),
            );
            let lang = own,
                surface,
                ambiguous = false;
            if (top === "name" && ["given", "clan"].includes(section) && n.fm.type === "being") {
                surface = "personal-name";
            } else if (top === "name" && nativeNameKeys.has(section)) {
                lang = language(section, n);
                surface = "native-name";
            } else if (top === "data" && n.fm.subType === "language") {
                if (section === "words" && ["form", "variants", "plural", "built"].includes(leaf))
                    surface = "word";
                if (
                    section === "affixes" &&
                    ["form", "front", "replaces", "variants"].includes(leaf)
                )
                    surface = "affix";
                if (section === "elements" && ["form", "examples"].includes(leaf))
                    surface = "element";
                if (section === "roots" && ["form", "variants"].includes(leaf)) surface = "root";
                if (section === "retired" && leaf === "instead") surface = "replacement-target";
                if (section === "older" && leaf === "form") {
                    surface = "historical-form";
                    ambiguous = true;
                }
                if (section === "affixes" && leaf === "examples") {
                    surface = "mixed-affix-example";
                    ambiguous = true;
                }
                if (
                    section === "grammar" &&
                    (s.keys.includes("presentParadigms") || s.keys.includes("present")) &&
                    (s.keys.includes("forms") || s.keys.at(-1) === "verb")
                )
                    surface = "grammar-example";
                if (section === "words" && leaf === "source" && s.keys.at(-1) === "form") {
                    lang = language(n.fm.data.words[row].source.language, n);
                    surface = "source-form";
                }
                if (section === "names" && !s.keys.some((k) => NOT_NAMES.has(k)))
                    surface = "name-list";
                if (section === "register" && ["name", "built"].includes(leaf)) {
                    const entry = n.fm.data.register[row];
                    if (englishTag(entry.tongue) && leaf === "name") {
                        exclusions.push({
                            file: n.file,
                            field: s.field,
                            category: "English register label",
                        });
                        continue;
                    }
                    lang =
                        englishTag(entry.tongue) ? own : (
                            (language(entry.tongue, n) ?? (entry.tongue ? undefined : own))
                        );
                    surface = "registered-name";
                }
            }
            if (top === "data" && section === "glossary" && ["term", "variants"].includes(leaf)) {
                lang = glossaryLanguage(n.fm.data.glossary[row], n.record, {
                    keyOf: key,
                    noteOf: (code) => language(code, n),
                    self: n.address,
                });
                surface = "glossary";
            }
            if (surface) scalar(n, s, lang, surface, ambiguous);
        }
    }
    // An attested whole name can be recognized in ordinary prose without
    // treating every English word in an English title as a coined spelling.
    const names = new Map(),
        words = new Map();
    const englishWords = new Set();
    for (const n of notes)
        for (const s of n.scalars)
            if (s.keys.at(-1) === "gloss")
                for (const m of s.node.value.matchAll(WORD)) englishWords.add(normalizeName(m[0]));
    for (const form of forms) {
        const table =
            (
                ["native-name", "name-list", "personal-name"].includes(form.surface) ||
                (form.surface === "registered-name" && form.field.endsWith(".name"))
            ) ?
                names
            :   words;
        const id = normalizeName(form.form);
        const entries = table.get(id) ?? [];
        entries.push(form);
        table.set(id, entries);
    }
    // Typed name spans attest their visible identity even when its language
    // is unknown. Personal first names are recognized only on the same page.
    for (const n of notes) {
        const chunks = [
            { text: n.text.slice(n.body), field: "body" },
            ...n.scalars.filter(proseScalar).map((s) => ({ text: s.node.value, field: s.field })),
        ];
        for (const chunk of chunks)
            for (const span of scanSpans(chunk.text).spans) {
                const attrs = Object.fromEntries(span.attrs);
                if (!(attrs.class ?? "").split(/\s+/).includes("name")) continue;
                const form = chunk.text.slice(span.start + 1, span.contentEnd);
                if (!reviewedNative(form)) continue;
                const id = normalizeName(form);
                const existing = names.get(id) ?? [];
                if (!existing.length)
                    names.set(id, [
                        {
                            file: n.file,
                            field: chunk.field,
                            form,
                            language: language(attrs.lang, n),
                            surface: "name-span",
                        },
                    ]);
                if ((attrs["data-type"] ?? "").startsWith("being/")) {
                    const first = normalizeName(form.split(/\s+/)[0]);
                    if (first !== id && deprecatedPairs(first).length) {
                        const entries = names.get(first) ?? [];
                        entries.push({
                            file: n.file,
                            field: chunk.field,
                            form: first,
                            language: language(attrs.lang, n) ?? existing[0]?.language,
                            surface: "name-span",
                            local: true,
                        });
                        names.set(first, entries);
                    }
                }
            }
    }
    const uniqueLanguage = (entries) => {
        const values = new Set((entries ?? []).map((e) => e.language));
        return values.size === 1 ? [...values][0] : undefined;
    };
    const namePatterns = [...names]
        .filter(([name]) => deprecatedPairs(name).length)
        .flatMap(([name, entries]) => nameForms(name).map((form) => [form, entries]))
        .map(([name, entries]) => ({
            regex: new RegExp(
                "(?<![\\p{L}\\p{M}])" +
                    name
                        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                        .replace(/ /g, "\\s+")
                        .replaceAll("'", "['’]") +
                    "(?![\\p{L}\\p{M}])",
                "giu",
            ),
            entries,
        }));
    for (const n of notes) {
        for (const s of n.scalars) {
            if (s.keys.at(-1) === "$key") {
                const entries = words.get(normalizeName(s.node.value));
                if (entries) scalar(n, s, uniqueLanguage(entries), "attested-office-key");
            }
            if (
                s.keys[0] !== "name" ||
                !["full", "en", "aliases", "given", "clan"].includes(s.keys[1])
            )
                continue;
            const p = sourcePositions(s.node, n.yaml)?.map((i) => i + n.prefix);
            for (const { regex, entries } of namePatterns)
                for (const m of s.node.value.matchAll(regex)) {
                    if (!entries.some((e) => !e.local || e.file === n.file)) continue;
                    const lang = uniqueLanguage(entries);
                    push(
                        n,
                        m[0],
                        p?.slice(m.index, m.index + m[0].length),
                        {
                            field: s.field,
                            surface: "attested-name-field",
                            language: lang,
                            evidence: entries,
                        },
                        !lang || englishWords.has(normalizeName(m[0])),
                    );
                }
        }
        const chunks = [{ body: n.text.slice(n.body), field: "body", position: (i) => n.body + i }];
        for (const s of n.scalars) {
            if (!proseScalar(s)) continue;
            const positions = sourcePositions(s.node, n.yaml);
            if (positions)
                chunks.push({
                    body: s.node.value,
                    field: s.field,
                    position: (i) => n.prefix + positions[i],
                });
        }
        for (const { body, field, position } of chunks) {
            if (!deprecatedPairs(body).length) continue;
            const starts = [0];
            for (const m of body.matchAll(/\n/g)) starts.push(m.index + 1);
            const spans = scanSpans(body).spans;
            const ranges = [],
                masks = [];
            const nameRanges = namePatterns.flatMap(({ regex, entries }) =>
                [...body.matchAll(regex)]
                    .filter(() => entries.some((e) => !e.local || e.file === n.file))
                    .map((m) => ({
                        from: m.index,
                        to: m.index + m[0].length,
                        entries,
                        english: englishWords.has(normalizeName(m[0])),
                    })),
            );
            const selected = (attrs, fallback) => {
                if (attrs.lang) return { language: language(attrs.lang, n), stated: attrs.lang };
                if (attrs.enc && attrs.enc !== "default") {
                    const enc = byAddress.get(key(attrs.enc, "doc"));
                    return {
                        language: language(enc?.fm.data?.language, enc),
                        stated: enc?.fm.data?.language ?? attrs.enc,
                    };
                }
                return fallback ?? {};
            };
            const addRange = (from, to, attrs, surface, fallback) => {
                const range = { from, to, ...selected(attrs, fallback), surface };
                const previous = ranges.findIndex((r) => r.from === from && r.to === to);
                if (previous >= 0) ranges[previous] = range;
                else ranges.push(range);
            };
            for (const run of scanRuns(body, { languages: config.languages ?? {} }).runs) {
                const span = spans.find((s) => s.start === run.start);
                if (run.kind === "span" && span)
                    addRange(
                        span.start + 1,
                        span.contentEnd,
                        Object.fromEntries(span.attrs),
                        "roman-span",
                        { language: language(run.lang, n), stated: run.lang },
                    );
                else if (run.kind !== "span")
                    addRange(
                        starts[run.start + 1],
                        starts[run.end] ?? body.length,
                        { lang: run.lang },
                        run.kind,
                    );
            }
            for (const span of spans) {
                const attrs = Object.fromEntries(span.attrs);
                masks.push({
                    start: span.contentEnd,
                    end: span.end,
                    category: "markup attributes",
                });
                if (attrs.lang || attrs.enc)
                    addRange(span.start + 1, span.contentEnd, attrs, "roman-span");
                else if ((attrs.class ?? "").split(/\s+/).includes("name")) {
                    const text = body.slice(span.start + 1, span.contentEnd);
                    const attested = names.get(normalizeName(text));
                    const ref = byAddress.get(key(attrs.ref, "doc"));
                    addRange(span.start + 1, span.contentEnd, {}, "name-span", {
                        language: uniqueLanguage(attested),
                        stated: "name",
                        attested: attested?.map((x) => x.field),
                        ref: ref?.address,
                    });
                }
            }
            const blocks = [];
            const collect = (source, line = 0) => {
                for (const block of scanBlocks(source).blocks)
                    if (block.name === "div") {
                        blocks.push({ ...block, start: block.start + line, end: block.end + line });
                        collect(block.body, line + block.start + 1);
                    }
            };
            collect(body);
            for (const block of [...blocks, ...scanVerse(body).blocks, ...scanScrolls(body).blocks])
                if (block.attributes?.lang || block.attributes?.enc)
                    addRange(
                        starts[block.start + 1],
                        starts[block.end] ?? body.length,
                        block.attributes,
                        block.fence ? "scroll"
                        : block.form ? "verse"
                        : block.name === "div" ? "roman-block"
                        : "verse",
                    );
            const scrolls = scanScrolls(body).blocks;
            for (const region of codeRegions(body)) {
                const scroll = scrolls.find(
                    (s) => region.start === starts[s.start] && region.end >= starts[s.end],
                );
                if (scroll) {
                    masks.push({
                        start: region.start,
                        end: starts[scroll.start + 1],
                        category: "scroll fence",
                    });
                    masks.push({
                        start: starts[scroll.end],
                        end: region.end,
                        category: "scroll fence",
                    });
                } else masks.push({ ...region, category: "code" });
            }
            for (const m of body.matchAll(/⟦[^]*?(?:⟧|$)/g))
                masks.push({
                    start: m.index,
                    end: m.index + m[0].length,
                    category: "native-literal",
                });
            for (const m of body.matchAll(/\{[^{}\n]*\}|<[^>\n]+>|\]\([^\n)]*\)/g))
                masks.push({ start: m.index, end: m.index + m[0].length, category: "markup" });
            for (const m of body.matchAll(
                new RegExp(
                    WIKILINK.source,
                    WIKILINK.flags.includes("g") ? WIKILINK.flags : WIKILINK.flags + "g",
                ),
            )) {
                const parsed = parseWikilink(m[1], m[0]);
                const bar = m[0].indexOf("|");
                if (
                    bar >= 0 &&
                    parsed.attributes?.values &&
                    (parsed.attributes.values.lang || parsed.attributes.values.enc)
                )
                    addRange(
                        m.index + bar + 1,
                        m.index + m[0].indexOf("]]"),
                        parsed.attributes.values,
                        "roman-link",
                    );
                masks.push({
                    start: m.index,
                    end: bar < 0 ? m.index + m[0].length : m.index + bar + 1,
                    category: "link target",
                });
            }
            for (const m of body.matchAll(WORD)) {
                const form = m[0],
                    from = m.index,
                    to = from + form.length;
                if (!deprecatedPairs(form).length) continue;
                const mask = masks.find((r) => r.start < to && r.end > from);
                if (mask) {
                    exclusions.push({
                        file: n.file,
                        ...at(n, position(from)),
                        field,
                        form,
                        category: mask.category,
                    });
                    continue;
                }
                const containing = ranges
                    .filter((r) => r.from <= from && r.to >= to)
                    .sort((a, b) => a.to - a.from - (b.to - b.from));
                const range =
                    containing.find((r) => r.language || r.stated !== "name") ?? containing[0];
                if (range?.stated === "en" || range?.stated === "zxx") {
                    exclusions.push({
                        file: n.file,
                        ...at(n, position(from)),
                        field,
                        form,
                        category: range.stated === "en" ? "explicit English" : "native-literal",
                    });
                    continue;
                }
                const nameRange = nameRanges
                    .filter((r) => r.from <= from && r.to >= to)
                    .sort((a, b) => b.to - b.from - (a.to - a.from))[0];
                const attested = nameRange?.entries;
                const lexical = words.get(normalizeName(form));
                const lang =
                    range?.language ??
                    (range && range.stated !== "name" ? undefined
                    : nameRange?.english ? undefined
                    : (uniqueLanguage(attested) ??
                        (lexical && !englishWords.has(normalizeName(form)) ?
                            uniqueLanguage(lexical)
                        :   undefined)));
                const surface =
                    range?.surface ?? (attested ? "attested-name" : "unmarked lexical occurrence");
                const lineStart = body.lastIndexOf("\n", from - 1) + 1,
                    lineEnd = body.indexOf("\n", to);
                const definitionTerm = lineStart === from && /^\n[ \t]*:/.test(body.slice(lineEnd));
                const emphasized =
                    /[*_]$/.test(body.slice(0, from)) && /^[*_]/.test(body.slice(to));
                if (
                    !range &&
                    !attested &&
                    !(
                        lexical &&
                        (emphasized ||
                            definitionTerm ||
                            (field.endsWith(".$key") && body === body.toLowerCase()))
                    )
                ) {
                    exclusions.push({
                        file: n.file,
                        ...at(n, position(from)),
                        field,
                        form,
                        category:
                            lexical ?
                                "ordinary English; lexical overlap"
                            :   "ordinary English; no native signal",
                    });
                    continue;
                }
                const positions = Array.from({ length: form.length }, (_, i) => position(from + i));
                push(
                    n,
                    form,
                    positions,
                    {
                        surface,
                        language: lang,
                        field,
                        evidence: (attested ?? lexical)?.map((e) => ({
                            file: e.file,
                            field: e.field,
                            language: e.language,
                        })),
                        ...(!lang ?
                            {
                                reason:
                                    range ?
                                        "marked surface has no unambiguous language"
                                    :   "emphasized/definition term or name overlaps English; inspect the stated context",
                            }
                        :   {}),
                    },
                    !lang,
                );
            }
        }
    }
    // One source range gets one classification. Conflicting name attestations
    // must not leave an automatic edit beside a review-only copy of that edit.
    const grouped = new Map();
    for (const hit of [...findings, ...ambiguities]) {
        const id = hit.file + ":" + (hit.start ?? hit.field + ":" + hit.form) + ":" + hit.end;
        const group = grouped.get(id) ?? [];
        group.push(hit);
        grouped.set(id, group);
    }
    const definite = [],
        unresolved = [];
    for (const group of grouped.values()) {
        const languages = [
            ...new Set(
                group.flatMap((hit) =>
                    [hit.language, ...(hit.evidence ?? []).map((e) => e.language)].filter(Boolean),
                ),
            ),
        ];
        const hit = group.at(-1);
        if (group.some((h) => h.confirmedInWorld)) {
            definite.push({
                ...hit,
                confirmedInWorld: true,
                needsLanguage: languages.length !== 1 || !hit.language,
                candidateLanguages: languages,
                evidence: group.flatMap((h) => h.evidence ?? []),
            });
        } else if (group.some((h) => h.automatic !== true) || languages.length !== 1) {
            unresolved.push({
                ...hit,
                automatic: false,
                candidateLanguages: languages,
                reason:
                    languages.length > 1 ? "conflicting source language attestations" : hit.reason,
                evidence: group.flatMap((h) => h.evidence ?? []),
            });
        } else definite.push(hit);
    }
    const sorted = (items) =>
        items.sort((a, b) => a.file.localeCompare(b.file) || (a.start ?? 0) - (b.start ?? 0));
    return {
        findings: sorted(definite),
        ambiguities: sorted(unresolved),
        exclusions,
        ownershipProblems,
        forms,
    };
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
