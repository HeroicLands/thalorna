/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Semantic preservation across the approved encoding migration, not new snapshots. */
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { pieceGlosses } from "@heroiclands/package-build/engine/word-rows";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { CONTENT_DIR, addressOf, notePath } from "./note-index.mjs";

// The utility CI checkout explicitly fetches full history for pinned git-show
// baselines. This is the last published-dependency commit before the migration;
// the tag baseline/encoding-migration keeps it reachable.
export const ENCODING_BASELINE = "e02f760d9325f1c1398ceeb9622d635224f60400";
export const contentHash = (value) =>
    createHash("sha256")
        .update(typeof value === "string" ? value : JSON.stringify(value))
        .digest("hex");
/**
 * Shortcodes a note carried at the pinned baselines where they differ from its
 * current shortcode, by current shortcode.
 */
const BASELINE_SHORTCODES = new Map([["tellumilng", "khazrilng"]]);
/**
 * The path a note had at a revision, found by its type and shortcode.
 *
 * @param {string} file The note's current path.
 * @param {string} revision A commit.
 * @returns {string}
 */
export function baselinePath(file, revision = ENCODING_BASELINE) {
    const address = addressOf(file);
    const type = address.slice(0, address.indexOf("-"));
    const current = address.slice(type.length + 1);
    const shortcode = BASELINE_SHORTCODES.get(current) ?? current;
    const found = execFileSync(
        "git",
        [
            "grep",
            "-l",
            "--all-match",
            "-e",
            `^shortcode: ${shortcode}$`,
            "-e",
            `^type: ${type}$`,
            revision,
            "--",
            CONTENT_DIR,
        ],
        { encoding: "utf8" },
    )
        .split("\n")
        .filter(Boolean)
        .map((line) => line.slice(line.indexOf(":") + 1));
    assert.equal(found.length, 1, `${address} at ${revision}: ${found.join(", ") || "no note"}`);
    return found[0];
}
const historical = new Map();
export function beforeEncodingMigration(file, revision = ENCODING_BASELINE) {
    const key = `${revision}:${baselinePath(file, revision)}`;
    if (!historical.has(key)) {
        const raw = execFileSync("git", ["show", key], { encoding: "utf8", maxBuffer: 16000000 });
        historical.set(key, { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) });
    }
    return structuredClone(historical.get(key));
}
/**
 * English prose follows American spelling, so the baseline's British forms are
 * read in their American spelling. The fixture lists each such form.
 */
const AMERICAN_SPELLING = JSON.parse(
    fs.readFileSync(new URL("./fixtures/american-spelling.json", import.meta.url), "utf8"),
);
const AMERICAN_WORDS = new RegExp(
    `(?<![\\p{L}\\p{M}'’])(${Object.keys(AMERICAN_SPELLING).join("|")})(?![\\p{L}\\p{M}])`,
    "giu",
);
/**
 * The spans the spelling does not touch: wikilinks, code, link targets,
 * attribute blocks, URLs, name and language spans, whole `{lang=…}` blocks,
 * register names, and the frontmatter fields that hold identifiers, forms or enumerated
 * values, with every entry of a block value.
 */
const PROTECTED_FIELDS =
    "form|forms|group|concept|variants|plural|plurals|pattern|shortcode|id|address|target|path|parents|culture|lang|language|tags|type|subType|packFolder|icon|source|kind|class|built|derived|from|to|instead|root|stem|affix|attaches|examples|[a-z]+_color";
const FRONTMATTER_FIELDS = new RegExp(
    String.raw`\b(?:${PROTECTED_FIELDS})\s*:\s*(?:\[[^\]]*\]|"[^"]*"|\{[^}\n]*\}|[^,}\n]*)`,
    "g",
);
/** A register entry's name, which keeps its established spelling. */
const REGISTER_NAMES = /\bname:[^,}\n]*(?=,\s*tongue:|\n *tongue:)/g;
/** Frontmatter that does not parse is read line by line. */
const LINE_FIELDS = [REGISTER_NAMES, FRONTMATTER_FIELDS];
const KEPT_SPANS = [/\[\[[^\]]*\]\]/g, /`[^`\n]*`/g, /https?:\/\/\S+/g];
const PROTECTED_KEY = new RegExp(`^(?:${PROTECTED_FIELDS})$`);
/** The source range of each protected value: a protected field's, or a register entry's name. */
function protectedRanges(yaml) {
    const doc = YAML.parseDocument(yaml);
    if (doc.errors.length) return undefined;
    const ranges = [];
    const keyOf = (pair) => (YAML.isScalar(pair.key) ? String(pair.key.value) : undefined);
    YAML.visit(doc, {
        Map(_, map) {
            const register = map.items.some((pair) => keyOf(pair) === "tongue");
            for (const pair of map.items) {
                const key = keyOf(pair);
                if (!pair.value?.range || key === undefined) continue;
                if (PROTECTED_KEY.test(key) || (register && key === "name"))
                    ranges.push(pair.value.range.slice(0, 2));
            }
        },
    });
    return ranges.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
}
/**
 * Every protected value of the parsed frontmatter, whatever its source form:
 * plain or quoted keys, flow or block values, and every entry of a list.
 */
function protectedValues(yaml, keep) {
    const ranges = protectedRanges(yaml);
    if (!ranges) return LINE_FIELDS.reduce((out, pattern) => out.replace(pattern, keep), yaml);
    let out = "",
        at = 0;
    for (const [start, end] of ranges) {
        if (start < at) continue;
        out += yaml.slice(at, start) + keep(yaml.slice(start, end));
        at = end;
    }
    return out + yaml.slice(at);
}
/** Every `::: {lang=…}` block, fences and body, nested divs included, indented up to three spaces. */
function langBlocks(body, keep) {
    const lines = body.split("\n");
    const out = [];
    for (let i = 0; i < lines.length; i++) {
        if (!/^ {0,3}:{3,}\s*\{[^}\n]*\blang=[^}\n]*\}\s*$/.test(lines[i])) {
            out.push(lines[i]);
            continue;
        }
        let depth = 0,
            end = i;
        for (; end < lines.length; end++) {
            if (/^ {0,3}:{3,}\s*$/.test(lines[end])) depth--;
            else if (/^ {0,3}:{3,}\s*\S/.test(lines[end])) depth++;
            if (depth === 0) break;
        }
        end = Math.min(end, lines.length - 1);
        out.push(keep(lines.slice(i, end + 1).join("\n")));
        i = end;
    }
    return out.join("\n");
}
const BODY_SPANS = [
    langBlocks,
    /\[[^[\]\n]*\]\{[^}\n]*(?:\.name|lang=|\.glyph)[^}\n]*\}/g,
    /\]\([^)\n]*\)/g,
    /\{[^}\n]*\}/g,
];
/** A baseline record with its prose in American spelling. */
export function inAmericanSpelling(before) {
    const raw = americanSpelling(before.raw);
    // A record built in memory, whose raw text carries no matching frontmatter, keeps its own.
    const fromNote = isDeepStrictEqual(YAML.parse(splitFrontmatter(before.raw).yaml), before.fm);
    return { ...before, raw, fm: fromNote ? YAML.parse(splitFrontmatter(raw).yaml) : before.fm };
}
/** `text` with every listed British form in its American spelling, keeping initial case. */
export function americanSpelling(text) {
    const kept = [];
    const keep = (span) => `\u0001${kept.push(span) - 1}\u0001`;
    const { yaml, body } = splitFrontmatter(text);
    const spelled = (part, spans) => {
        let out = part;
        for (const pattern of spans)
            out = typeof pattern === "function" ? pattern(out, keep) : out.replace(pattern, keep);
        out = out.replace(AMERICAN_WORDS, (word) => {
            const american = AMERICAN_SPELLING[word.toLowerCase()];
            if (word === word.toUpperCase() && word.length > 1) return american.toUpperCase();
            return word[0] === word[0].toLowerCase() ?
                    american
                :   american[0].toUpperCase() + american.slice(1);
        });
        while (/\u0001\d+\u0001/.test(out))
            out = out.replace(/\u0001(\d+)\u0001/g, (_, n) => kept[Number(n)]);
        return out;
    };
    const head = text.indexOf(yaml);
    if (head < 0) return spelled(text, [...KEPT_SPANS, ...BODY_SPANS]);
    const bodyStart = text.lastIndexOf(body);
    return (
        text.slice(0, head) +
        spelled(yaml, [protectedValues, ...KEPT_SPANS]) +
        text.slice(head + yaml.length, bodyStart) +
        spelled(body, [...KEPT_SPANS, ...BODY_SPANS])
    );
}
const transfers = JSON.parse(
    fs.readFileSync(new URL("./fixtures/encoding-role-transfers.json", import.meta.url), "utf8"),
);
const caseless = new Set([
    "skill-atarzadilng",
    "skill-dunharlng",
    "skill-khelathlng",
    "skill-nordmalng",
    "skill-nyalbnlng",
]);
const isNote = (file, ...addresses) => addresses.includes(addressOf(file));
const lower = (text) => text.toLowerCase().normalize("NFC");
export const caselessCitationKey = (word) => `${lower(word.form)}\u0000${word.class ?? ""}`;
const codeAddress = (text) => text.replace(/^thalorna-note-doc-|^doc-/u, "");
const lowerStrings = (value) =>
    typeof value === "string" ? lower(value)
    : Array.isArray(value) ? value.map(lowerStrings)
    : value && typeof value === "object" ?
        Object.fromEntries(
            Object.entries(value).map(([key, item]) => [
                key,
                ["pattern", "metadata", "source"].includes(key) ? item : lowerStrings(item),
            ]),
        )
    :   value;

/** Case changes apply only to the orthographic fields the migration changed. */
function canonical(value, file, path = []) {
    const fold = caseless.has(addressOf(file));
    if (Array.isArray(value)) return value.map((item) => canonical(item, file, path));
    if (!value || typeof value !== "object") return value;
    if (path[0] === "data" && (path.includes("source") || path.includes("metadata")))
        return structuredClone(value);
    const out = {};
    for (const [key, item] of Object.entries(value)) {
        if (path.join(".") === "data" && ["writtenIn", "roman"].includes(key)) continue;
        const scope = path[1];
        if (scope === "names" && [...path, key].includes("metadata")) {
            out[key] = structuredClone(item);
            continue;
        }
        if (key === "native" && Array.isArray(item)) {
            out.native = item.map((entry) => {
                const { map, enc, text, ...rest } = entry;
                // All old native.map entries in these six language baselines
                // are Khelathi's existing authoritative Zethu writings.
                if (map !== undefined) assert.equal(map, "zethu");
                return {
                    ...rest,
                    text:
                        typeof text === "string" ?
                            text.replace(/[\u{E0120}-\u{E01EF}]/gu, "")
                        :   text,
                    ...(enc !== undefined || map !== undefined ?
                        { enc: codeAddress(enc ?? "khelzethuenc") }
                    :   {}),
                };
            });
            continue;
        }
        const orthography =
            path[0] === "data" &&
            ["words", "elements", "register", "affixes", "names", "grammar", "naming"].includes(
                scope,
            ) &&
            (["form", "variants", "built", "examples"].includes(key) ||
                (key === "name" && scope === "register" && value.tongue !== "translation") ||
                (["ending", "becomes"].includes(key) && scope === "grammar") ||
                (scope === "names" && ![...path, key].includes("pattern")));
        out[key] = fold && orthography ? lowerStrings(item) : canonical(item, file, [...path, key]);
    }
    return out;
}
const stable = (value) =>
    JSON.stringify(value, (_key, item) =>
        item && typeof item === "object" && !Array.isArray(item) ?
            Object.fromEntries(
                Object.keys(item)
                    .sort()
                    .map((key) => [key, item[key]]),
            )
        :   item,
    );

/** Array multiplicities matter; later authored additions remain permitted. */
function contains(actual, expected, label) {
    if (Array.isArray(expected)) {
        assert(Array.isArray(actual), label);
        const remaining = new Map();
        for (const entry of actual) {
            const key = stable(entry);
            remaining.set(key, (remaining.get(key) ?? 0) + 1);
        }
        for (const entry of expected) {
            const key = stable(entry),
                count = remaining.get(key) ?? 0;
            assert(count > 0, `${label}: lost or changed ${key}`);
            remaining.set(key, count - 1);
        }
    } else if (expected && typeof expected === "object") {
        assert(actual && typeof actual === "object", label);
        for (const [key, item] of Object.entries(expected))
            contains(actual[key], item, `${label}.${key}`);
    } else assert.deepEqual(actual, expected, label);
}
function removeOne(entries, entry, label) {
    const index = entries.findIndex((candidate) => stable(candidate) === stable(entry));
    assert(index >= 0, label);
    entries.splice(index, 1);
}
function normalizedRecord(entry, file) {
    return canonical({ data: { words: [entry] } }, file).data.words[0];
}

/** English renderings in a register, by file and baseline name, which take the tongue `translation`. */
const translationRetags = new Map([
    [
        notePath("skill-atarzadilng"),
        new Set(["Atárzadi Language", "Atarzadi Language", "Tribes of Atarzád"]),
    ],
]);

/** The baseline with its English register renderings tagged `translation`, and nothing else changed. */
function withTranslationRetags(fm, file) {
    const names = translationRetags.get(file);
    if (!names) return fm;
    const copy = structuredClone(fm);
    for (const row of copy.data?.register ?? [])
        if (names.has(row?.name)) row.tongue = "translation";
    return copy;
}

/**
 * Names respelled since the baseline, by file: each baseline spelling and its
 * replacement, applied in order. A spelling matches at the start of a word, so
 * it also respells the names built on it, unless a third element `"word"` limits
 * it to the whole word.
 */
const respellings = new Map([
    [
        notePath("skill-dunharlng"),
        [
            ["nushir", "nushiran"],
            ["zarham", "zarvina"],
            ["vast-bahar", "vazder-bahvar", "word"],
            ["baharan", "bahvaran", "word"],
            ["bahar", "bahvar", "word"],
            ["farhazar", "farazar"],
            ["tamirh", "tamirun"],
            ["strmcltsbhrms", "strmcltsbzhrms"],
            ["báhramis", "bazhrámiš"],
            ["bahramish", "bazhrámiš"],
            ["khavar", "shavend", "word"],
        ],
    ],
    [
        notePath("skill-osketlng"),
        [
            ["rhankel", "rankel"],
            ["rhandug", "randug"],
        ],
    ],
    [notePath("skill-nordmalng"), [["gnuldurthann", "gnuldurvir"]]],
    [
        notePath("skill-varokhlng"),
        [
            ["vithár", "wíthar"],
            ["wíthar", "wíthgar", "word"],
        ],
    ],
    [notePath("skill-atarzadilng"), [["atárzádegan", "atárzadegan"]]],
    [
        notePath("skill-nyalbnlng"),
        [
            ["fámangalí", "fámangali"],
            ["ódúmbala", "ódumbala"],
            ["ómalesí", "ómalesi"],
            ["njuma", "njúlewa"],
            ["ándiya", "andiya", "word"],
            ["bálesha", "balesha", "word"],
            ["bénduya", "benduya", "word"],
            ["búndeya", "bundeya", "word"],
            ["díngoya", "dingoya", "word"],
            ["éduma", "eduma", "word"],
            ["fádewa", "fadewa", "word"],
            ["féliwa", "feliwa", "word"],
            ["góndesi", "gondesi", "word"],
            ["háyeba", "hayeba", "word"],
            ["káleshi", "kaleshi", "word"],
            ["kénzowa", "kenzowa", "word"],
            ["kíshela", "kishela", "word"],
            ["kóbesa", "kobesa", "word"],
            ["lálija", "lalija", "word"],
            ["lólewa", "lolewa", "word"],
            ["méshola", "meshola", "word"],
            ["mídewa", "midewa", "word"],
            ["míndeli", "mindeli", "word"],
            ["móndawe", "mondawe", "word"],
            ["múndewa", "mundewa", "word"],
            ["néntoli", "nentoli", "word"],
            ["níseta", "niseta", "word"],
            ["núremi", "nuremi", "word"],
            ["píkesa", "pikesa", "word"],
            ["rálesi", "ralesi", "word"],
            ["sálua", "salua", "word"],
            ["sándeyo", "sandeyo", "word"],
            ["sáwemi", "sawemi", "word"],
            ["séndowe", "sendowe", "word"],
            ["sílowe", "silowe", "word"],
            ["súnemi", "sunemi", "word"],
            ["táliba", "taliba", "word"],
            ["témoyi", "temoyi", "word"],
            ["téndoli", "tendoli", "word"],
            ["túndaye", "tundaye", "word"],
            ["wéndasi", "wendasi", "word"],
            ["záyeli", "zayeli", "word"],
            ["bákeni", "bakeni", "word"],
            ["bálesho", "balesho", "word"],
            ["dámbani", "dambani", "word"],
            ["fódemi", "fodemi", "word"],
            ["kádewo", "kadewo", "word"],
            ["kásimo", "kasimo", "word"],
            ["lálumo", "lalumo", "word"],
            ["lóbezo", "lobezo", "word"],
            ["máshelo", "mashelo", "word"],
            ["ndáfiyo", "ndafiyo", "word"],
            ["rábesi", "rabesi", "word"],
            ["sálumo", "salumo", "word"],
            ["tálemo", "talemo", "word"],
            ["tímbelo", "timbelo", "word"],
            ["tóbesho", "tobesho", "word"],
            ["yámeto", "yameto", "word"],
            ["zákesho", "zakesho", "word"],
            ["árambu", "arambu", "word"],
            ["bándala", "bandala", "word"],
            ["béndawe", "bendawe", "word"],
            ["dándira", "dandira", "word"],
            ["dóbalanda", "dobalanda", "word"],
            ["édumba", "edumba", "word"],
            ["fámangali", "famangali", "word"],
            ["gúndala", "gundala", "word"],
            ["índawe", "indawe", "word"],
            ["jándaka", "jandaka", "word"],
            ["kásiramba", "kasiramba", "word"],
            ["kéndalu", "kendalu", "word"],
            ["kómaludi", "komaludi", "word"],
            ["kúbola", "kubola", "word"],
            ["lándala", "landala", "word"],
            ["málazuli", "malazuli", "word"],
            ["mbándala", "mbandala", "word"],
            ["múgandala", "mugandala", "word"],
            ["ndálude", "ndalude", "word"],
            ["ndánga-sólembe", "ndanga-sólembe", "word"],
            ["Ndánga-Sólembe", "Ndanga-Sólembe", "word"],
            ["lómbala", "lombala", "word"],
            ["nkúndala", "nkundala", "word"],
            ["nómaledi", "nomaledi", "word"],
            ["nyámelo", "nyamelo", "word"],
            ["óbandala", "obandala", "word"],
            ["ódawe", "odawe", "word"],
            ["ódumbala", "odumbala", "word"],
            ["ófawe", "ofawe", "word"],
            ["ólambala", "olambala", "word"],
            ["ómalesi", "omalesi", "word"],
            ["ómaletu", "omaletu", "word"],
            ["ópala", "opala", "word"],
            ["órindi", "orindi", "word"],
            ["ótandala", "otandala", "word"],
            ["pálambe", "palambe", "word"],
            ["pándazuli", "pandazuli", "word"],
            ["péndala", "pendala", "word"],
            ["rábandala", "rabandala", "word"],
            ["róbandala", "robandala", "word"],
            ["sábandala", "sabandala", "word"],
            ["sándambala", "sandambala", "word"],
            ["shándiro", "shandiro", "word"],
            ["sónkelada", "sonkelada", "word"],
            ["tábandala", "tabandala", "word"],
            ["tálamba", "talamba", "word"],
            ["tándizuli", "tandizuli", "word"],
            ["téndiro", "tendiro", "word"],
            ["tómalinde", "tomalinde", "word"],
            ["túbandala", "tubandala", "word"],
            ["úlambo", "ulambo", "word"],
            ["úndala", "undala", "word"],
            ["wánduri", "wanduri", "word"],
            ["yándala", "yandala", "word"],
            ["yómasunde", "yomasunde", "word"],
            ["zákedala", "zakedala", "word"],
            ["zímbala", "zimbala", "word"],
            ["lúsani", "lusiro", "word"],
            ["mpanza", "mpalude", "word"],
            ["njúlewa", "njulewa", "word"],
        ],
    ],
]);

/** `text` with the file's respellings applied, in either initial case. */
function respell(text, file) {
    const upper = (word) => word[0].toUpperCase() + word.slice(1);
    let out = text;
    for (const [from, to, scope] of respellings.get(file) ?? []) {
        const end = scope === "word" ? "(?!\\p{L})" : "";
        out = out
            .replace(new RegExp(`(?<!\\p{L})${from}${end}`, "gu"), to)
            .replace(new RegExp(`(?<!\\p{L})${upper(from)}${end}`, "gu"), upper(to));
    }
    return out;
}

/** The baseline with the respellings applied to every string. */
function withRespellings(fm, file) {
    if (!respellings.has(file)) return fm;
    const walk = (value) => {
        if (typeof value === "string") return respell(value, file);
        if (Array.isArray(value)) return value.map(walk);
        if (value && typeof value === "object")
            return Object.fromEntries(
                Object.entries(value).map(([key, item]) => [key, walk(item)]),
            );
        return value;
    };
    return walk(fm);
}

/** Affix examples dropped since the baseline, by file: the affix and the example it no longer cites. */
const droppedExamples = new Map([
    [notePath("skill-varokhlng"), [{ affix: "-ar", example: "Wíthgar" }]],
]);

/** The baseline without those examples. */
function withDroppedExamples(fm, file) {
    const dropped = droppedExamples.get(file);
    if (!dropped || !Array.isArray(fm.data?.affixes)) return fm;
    const copy = structuredClone(fm);
    for (const { affix, example } of dropped) {
        const entry = copy.data.affixes.find((item) => item?.form === affix);
        if (Array.isArray(entry?.examples))
            entry.examples = entry.examples.filter((item) => item !== example);
    }
    return copy;
}

/** Register rows renamed by a ruling, by file: each baseline name, its tongue and the replacement name. */
const registerRenames = new Map([
    [
        notePath("skill-dunharlng"),
        [
            { from: "sahri", tongue: "sovidur", to: "oroqidur" },
            { from: "vast", tongue: "dunhari", to: "vazder" },
            { from: "bazhrámiš", tongue: "ashaian", to: "bazhrámish" },
        ],
    ],
]);

/** The baseline with each such register row carrying its replacement name. */
function withRegisterRenames(fm, file) {
    const renames = registerRenames.get(file);
    if (!renames || !Array.isArray(fm.data?.register)) return fm;
    const copy = structuredClone(fm);
    copy.data.register = copy.data.register.map((row) => {
        const rename = renames.find(
            (item) => item.from === row?.name?.toLowerCase() && item.tongue === row?.tongue,
        );
        return rename ? { ...row, name: rename.to } : row;
    });
    return copy;
}

/**
 * Register rows removed by a ruling, by file: each baseline name and its
 * tongue. The Ashaian priesthood titles belong to Atárzadi, which derives them.
 */
const registerRemovals = new Map([
    [
        notePath("skill-dunharlng"),
        [
            { name: "delkoshekh", tongue: "ashaian" },
            { name: "roqeshekh", tongue: "ashaian" },
            { name: "shekhul", tongue: "ashaian" },
        ],
    ],
]);

/** The baseline without those register rows. */
function withRegisterRemovals(fm, file) {
    const removals = registerRemovals.get(file);
    if (!removals || !Array.isArray(fm.data?.register)) return fm;
    const copy = structuredClone(fm);
    copy.data.register = copy.data.register.filter(
        (row) =>
            !removals.some(
                (item) => item.name === row?.name?.toLowerCase() && item.tongue === row?.tongue,
            ),
    );
    return copy;
}

/** Baseline words replaced by a ruling, by file: each baseline form and the entry written in its place. */
const wordRenames = new Map([
    [
        notePath("skill-atarzadilng"),
        [
            {
                from: "teqemod",
                to: {
                    form: "ozhmarod",
                    class: "name",
                    field: "Derived words",
                    gloss: "a tribe: the sons of right order; the strict tribe of Shirvan; `Mihran` is retired",
                    built: ["ozhmar", "-od"],
                },
            },
            {
                from: "ghishamekh",
                to: {
                    form: "ghishamekh",
                    class: "name",
                    field: "Derived words",
                    gloss: "fear-bringer: the warrior society of the Ozhmarod; `Zharván` is retired",
                    built: ["ghisham", "-ekh"],
                },
            },
        ],
    ],
]);

/** The baseline with each such word replaced by the entry the ruling wrote. */
function withWordRenames(fm, file) {
    const renames = wordRenames.get(file);
    if (!renames || !Array.isArray(fm.data?.words)) return fm;
    const copy = structuredClone(fm);
    for (const { from, to } of renames) {
        const index = copy.data.words.findIndex((word) => lower(String(word?.form)) === from);
        assert(index >= 0, `${file}: the baseline has no word ${from}`);
        copy.data.words[index] = structuredClone(to);
    }
    return copy;
}

/** Languages whose English name lists moved under `names.en`, which the encoding never reads. */
const englishNameLists = new Map([[notePath("skill-nordmalng"), ["epithet"]]]);

/** The baseline with those lists under `names.en` and their pattern placeholders renamed to match. */
function withEnglishNameLists(fm, file) {
    const lists = englishNameLists.get(file);
    if (!lists) return fm;
    const copy = structuredClone(fm);
    const names = copy.data?.names;
    if (!names) return copy;
    names.en ??= {};
    for (const list of lists) {
        names.en[list] = names[list];
        delete names[list];
    }
    const rename = (text) =>
        lists.reduce((out, list) => out.replaceAll(`{${list}}`, `{en.${list}}`), text);
    for (const [gender, patterns] of Object.entries(names.pattern ?? {}))
        names.pattern[gender] = Array.isArray(patterns) ? patterns.map(rename) : rename(patterns);
    return copy;
}

/** Register rows that wrote two names as one, by file: each baseline row's name and the names it splits into. */
const registerSplits = new Map([
    [
        notePath("skill-nordmalng"),
        new Map([
            ["gudi / gudja", ["gudi", "gudja"]],
            ["hofgudi / hofgudja", ["hofgudi", "hofgudja"]],
        ]),
    ],
]);

/** The baseline with each such register row split into one row per name. */
function withRegisterSplits(fm, file) {
    const splits = registerSplits.get(file);
    if (!splits || !Array.isArray(fm.data?.register)) return fm;
    const copy = structuredClone(fm);
    // Caseless tongues once wrote these rows capitalized; the match ignores case.
    copy.data.register = copy.data.register.flatMap((row) => {
        const names =
            typeof row?.name === "string" ? splits.get(row.name.toLowerCase()) : undefined;
        return names ? names.map((name) => ({ ...row, name })) : [row];
    });
    return copy;
}

/** Keep every meaning, class, concept, native writing, name and English reading. */
/**
 * The baseline with its `name.aliases` moved to the language lists the current
 * note gives. A note lists its other names under language codes; a baseline
 * alias is kept when one of the current note's lists holds it, ignoring case,
 * because a form under a caseless language is written lowercase. A baseline
 * alias no list holds stays, so the comparison reports where it went.
 *
 * @param {object} fm - A baseline frontmatter.
 * @param {object} [current] - The current frontmatter of the same note.
 * @returns {object} The frontmatter, copied where it changed.
 */
export function withNameForms(fm, current) {
    const aliases = fm?.name?.aliases;
    if (!Array.isArray(aliases)) return fm;
    const lists = Object.entries(current?.name ?? {}).filter(([, forms]) => Array.isArray(forms));
    const held = new Set(lists.flatMap(([, forms]) => forms.map(lower)));
    if (!aliases.every((alias) => held.has(lower(String(alias))))) return fm;
    const copy = structuredClone(fm);
    delete copy.name.aliases;
    for (const [code, forms] of lists) copy.name[code] = structuredClone(forms);
    return copy;
}

/** Notes whose stress follows the common rule; the baseline stated their own. */
export const COMMON_STRESS_NOTES = new Set([
    "skill-aelendlng",
    "skill-hvarnlng",
    "skill-nordmalng",
    "skill-sinalelng",
    "skill-nyalbnlng",
    "skill-provnzlng",
    "skill-tellumilng",
    "skill-kelwanuklng",
    "skill-sowideslng",
]);

/** Baseline sentences about stress, by note address, and the sentences that now stand in their place. */
export const STRESS_PROSE = new Map([
    [
        "skill-aelendlng",
        [
            [
                "**Stress:** Stress consistently falls on the first syllable of roots, following a clear predictable pattern. This predictability, combined with conservative phonetics, makes Áelendi relatively easy to learn despite its phonetic complexity.",
                "**Stress:** Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]. Áelendi favors short words, so the stress most often lands at the front of a word, in a clear predictable pattern. This predictability, combined with conservative phonetics, makes Áelendi relatively easy to learn despite its phonetic complexity.",
            ],
            [
                "**The stress.** Áelendi has not moved its stress off the first syllable in the whole of its recorded life. Élavendri traded fixed stress",
                "**The stress.** Áelendi keeps a steady, weighty stress and favors short words with the weight at the front. Élavendri traded fixed stress",
            ],
            [
                "It carries one mark, over its first syllable, because that is where the stress falls.",
                "It carries one mark, over the syllable that takes the stress, where the common rule would not place it.",
            ],
        ],
    ],
    [
        "skill-hvarnlng",
        [
            [
                ": Closed; stress falls on the first syllable without exception",
                ": Closed; stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Hvarn favors short, front-stressed words",
            ],
            [
                "Stress falls on the first syllable without exception.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Hvarn favors short words with the weight at the front.",
            ],
        ],
    ],
    [
        "skill-nordmalng",
        [
            [
                "Nordmal is hammer-stressed and short: one or two syllables, with the weight on the first.",
                "Nordmal is hammer-stressed and short: it favors one or two syllables, with the weight at the front.",
            ],
            [
                "Stress is predictable, falling primarily on the first syllable of words (STÓRaldur, HLARTHaruk). This creates",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Nordmal favors short words, so the weight falls at the front. This creates",
            ],
            [
                "Stress falls on the first syllable of every word without exception, so a Nordmal name has exactly one beat and it lands at the front. That is what lets a name be said correctly on sight: AL-thmyl, VRA-thy-ra, HLARTH-a-ruk.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], so a Nordmal name has exactly one beat, and the short forms the tongue favors put it at the front: AL-thmyl, vra-THI-ra, hlarth-A-ruk.",
            ],
            [
                "Stress is initial in a name as in every other word, so any of these can be said correctly on sight—AL-thann, VRA-thy-ra, HLARTH-a-rukh.",
                "Stress in a name follows the same rule as in every other word, so any of these can be said correctly on sight—AL-thann, vra-THI-ra, hlarth-A-rukh.",
            ],
            [
                "every long vowel falls after the stress, inside the ending. A stem-and-ending name therefore runs two syllables or three and never one or four: a trochee where the ending is one syllable, a dactyl where it is two.",
                "every long vowel falls inside the ending. A stem-and-ending name therefore runs two syllables or three and never one or four: a trochee stressed on the stem where the ending is one syllable, and an amphibrach stressed on the ending's first syllable where it is two.",
            ],
        ],
    ],
    [
        "skill-sinalelng",
        [
            [
                "**Stress falls on the first syllable of every word, without exception.** So a Sinale word of any length can be said correctly on sight: _NUU-va_, _OL-tes-sa_, _SEL-kin-te_.",
                "**Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Sinale favors short words with the weight at the front.** So a Sinale word of any length can be said correctly on sight: _NUU-va_, _ol-TES-sa_, _sel-KIN-te_.",
            ],
            [
                "**Writing and performance.** Stress stays on the first syllable. ",
                "**Writing and performance.** ",
            ],
            [
                "**A given name runs two to four syllables**, stressed on the first.",
                "**A given name runs two to four syllables.**",
            ],
        ],
    ],
    [
        "skill-nyalbnlng",
        [
            [
                "Stress the first syllable unless an acute marks another.",
                "Stress follows the guide unless an acute marks another syllable.",
            ],
            [
                "Every word stresses its first syllable, so every word",
                "Every word takes one stress, so every word",
            ],
            [
                "Use the letters and first-syllable stress of [[doc-prnncthlrn|Pronouncing Thalorna]] when reading Nyáluban aloud.",
                "Use the letters and stress of [[doc-prnncthlrn|Pronouncing Thalorna]] when reading Nyáluban aloud.",
            ],
            [
                ": Stress falls on the first syllable unless an acute marks another stressed syllable.",
                ": Stress follows the guide unless an acute marks another stressed syllable.",
            ],
            [
                "uses an acute only to mark stress away from the first syllable.",
                "uses an acute only to mark stress away from where the guide places it.",
            ],
            [
                "Common spelling leaves tone unwritten, uses at most one mark in a word",
                "Common spelling writes tone only where a word needs it, uses at most one mark in a word",
            ],
            [
                "Common spelling uses no grave, caron or circumflex to mark pitch.",
                "Where a word's pitch must be written, common spelling uses the guide's caron for a rise and circumflex for a fall, and most words need neither.",
            ],
            [
                "The common spelling leaves that pitch unwritten and uses an acute only",
                "The common spelling writes that pitch only where a word needs it, with the guide's caron or circumflex, and uses an acute only",
            ],
        ],
    ],
    [
        "skill-provnzlng",
        [
            [
                "Stress is generally initial (FA-ris, AR-vel) but varies for poetic effect.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Provenzian favors short words, so it often lands at the front (FA-ris, AR-vel).",
            ],
        ],
    ],
    [
        "skill-tellumilng",
        [
            [
                "Stress falls on the syllable that a doubled consonant opens: te-**LLU**-mi, ten-**NE**-li-mash. A word with no doubled consonant is stressed on its first syllable: **NE**-lim, **TASH**-bem.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: a word of two syllables is stressed on the first, a longer word on the second-to-last, as in te-**LLU**-mi, ten-ne-**LI**-mash, **NE**-lim and **TASH**-bem. Tellumi favors short words, so the weight most often falls at the front.",
            ],
        ],
    ],
    [
        "skill-kelwanuklng",
        [
            [
                "A word is stressed on its first syllable, whatever its length: _tsilkas_ is TSIL-kas, _kenwatukwa_ is KEN-wa-tu-kwa, and _kelwanuk_ is KEL-wa-nuk. A built word keeps the stress of its first root.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]], and Kelwanuk favors short words with the weight at the front: _tsilkas_ is TSIL-kas, _kenwatukwa_ is ken-wa-TU-kwa, and _kelwanuk_ is kel-WA-nuk.",
            ],
        ],
    ],
    [
        "skill-sowideslng",
        [
            [
                "Stress falls on a doubled vowel where a word has one, and otherwise on the last syllable of the word: **QII**-mod, ko-**DU**, u-ru-**VAQ**.",
                "Stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: a word of two syllables is stressed on the first, a longer word on the second-to-last, as in **QII**-mod, **KO**-du and u-**RU**-vaq.",
            ],
        ],
    ],
]);

/** The baseline stress setting of a note that now follows the common rule. */
export function withCommonStress(fm, file) {
    if (!fm?.data?.sounds?.stress) return fm;
    if (![...COMMON_STRESS_NOTES].some((address) => notePath(address) === file)) return fm;
    const copy = structuredClone(fm);
    copy.data.sounds.stress.two = "first";
    copy.data.sounds.stress.longer = "penultimate";
    return copy;
}

/** Baseline prose with its stress sentences swapped for the ones that now stand. */
export function withStressProse(text, file) {
    let out = text;
    for (const [address, pairs] of STRESS_PROSE)
        if (notePath(address) === file) for (const [from, to] of pairs) out = out.replace(from, to);
    return out;
}

export function assertEncodingMigrationPreserved(
    current,
    baseline = beforeEncodingMigration(current.file),
) {
    const before = inAmericanSpelling(baseline);
    assert.equal(current.file, before.file);
    const file = current.file;
    const actual = canonical(current.fm, file),
        expected = canonical(
            withRegisterRemovals(
                withRegisterRenames(
                    withRegisterSplits(
                        withEnglishNameLists(
                            withDroppedExamples(
                                withRespellings(
                                    withTranslationRetags(
                                        withNameForms(
                                            withCommonStress(
                                                withWordRenames(before.fm, file),
                                                file,
                                            ),
                                            current.fm,
                                        ),
                                        file,
                                    ),
                                    file,
                                ),
                                file,
                            ),
                            file,
                        ),
                        file,
                    ),
                    file,
                ),
                file,
            ),
            file,
        );
    assert(
        !Object.hasOwn(current.fm.data, "writtenIn"),
        "the encoding replaces the retired default",
    );
    const roles = transfers.filter((transfer) => transfer.note === addressOf(file));
    for (const transfer of roles) {
        const source = normalizedRecord(transfer.source, file);
        removeOne(expected.data.words, source, `baseline role ${transfer.form}`);
        const target = canonical(
            { data: { [transfer.target.section]: [transfer.target.entry] } },
            file,
        ).data[transfer.target.section][0];
        contains(
            actual.data[transfer.target.section],
            [target],
            `transferred ${transfer.retainedRole} ${transfer.form}`,
        );
        const ordinaryBefore = normalizedRecord(transfer.ordinaryBefore, file);
        removeOne(expected.data.words, ordinaryBefore, `baseline citation ${transfer.form}`);
        expected.data.words.push(normalizedRecord(transfer.ordinaryAfter, file));
        // A role move may union exact old senses, never replace the original one.
        for (const gloss of [transfer.ordinaryBefore.gloss].flat())
            assert([transfer.ordinaryAfter.gloss].flat().includes(gloss), transfer.form);
    }
    contains(actual, expected, file);
    let body = splitFrontmatter(current.raw).body;
    let originalBody = withStressProse(respell(splitFrontmatter(before.raw).body, file), file);
    // The one baseline sentence whose writing direction follows the shared Qalezu script.
    if (isNote(file, "skill-dunharlng"))
        originalBody = originalBody.replace(
            "the consonantal alphabet of Au'Khelathu, from left to right.",
            "the consonantal alphabet of Au'Khelathu, from right to left.",
        );
    if (roles.length && isNote(file, "skill-atarzadilng")) {
        const addition =
            " The derived-word titles _toqel_, _zhudek_, _rezhul_ and _shekhul_ stand with their meanings and derivations in the name register.";
        assert(body.includes(addition), "the title/name role remains in the reading guidance");
        body = body.replace(addition, "");
        const column = 'SELECT name AS "Name", coalesce(gloss, \'—\') AS "Meaning", ';
        assert(body.includes(column), "the name register displays its preserved meanings");
        body = body.replace(column, 'SELECT name AS "Name", ');
    }
    if (roles.length && isNote(file, "skill-khelathlng")) {
        const addition =
            'The rank morphemes _nelgir_ ("god"), _lekhau_ ("sacred power") and _halzi_ ("heart, and the account a heart answers for") are stems of the corresponding nouns.';
        assert(body.includes(addition), "the rank-stem roles remain explicit");
        body = body.replace(addition + "\n\n", "");
    }
    // Existing English and sample lines retain their bytes and order. New
    // explanatory prose may be added; an old reading cannot disappear.
    const lines = body.split("\n");
    let at = 0;
    for (const line of originalBody.split("\n")) {
        const found = lines.indexOf(line, at);
        assert(found >= 0, `${file}: original reading changed: ${line}`);
        at = found + 1;
    }
}

/** The historical public-API input, with only the approved representation moves. */
function projectionData(before, prefix, moveRoles = true) {
    const data = canonical(withWordRenames(before.fm, before.file), before.file).data;
    if (prefix !== undefined) data.words = data.words.slice(0, prefix);
    if (moveRoles)
        for (const transfer of transfers.filter((entry) => entry.note === addressOf(before.file))) {
            const source = normalizedRecord(transfer.source, before.file);
            const sourceIndex = data.words.findIndex((entry) => stable(entry) === stable(source));
            if (sourceIndex < 0) continue;
            data.words.splice(sourceIndex, 1);
            const ordinary = normalizedRecord(transfer.ordinaryBefore, before.file);
            const ordinaryIndex = data.words.findIndex(
                (entry) => stable(entry) === stable(ordinary),
            );
            if (ordinaryIndex >= 0) data.words.splice(ordinaryIndex, 1);
            data.words.push(normalizedRecord(transfer.ordinaryAfter, before.file));
            const section = transfer.target.section;
            const target = canonical({ data: { [section]: [transfer.target.entry] } }, before.file)
                .data[section][0];
            data[section] ??= [];
            if (!data[section].some((entry) => stable(entry) === stable(target)))
                data[section].push(target);
        }
    return data;
}

/** Restore the public piece-meaning and dictionary projection preservation proofs. */
export function assertPublicLanguageProjections(current, baseline, prefix) {
    const before = inAmericanSpelling(baseline);
    const priorData = projectionData(before, prefix);
    const oldMeaning = pieceGlosses(priorData),
        completeMeaning = pieceGlosses(projectionData(before)),
        currentMeaning = pieceGlosses(current.fm.data);
    const forms = new Set();
    const probeKeys =
        isNote(current.file, "skill-atarzadilng", "skill-varokhlng") ? ["form", "front", "joining"]
        : isNote(current.file, "skill-khelathlng") ? ["form", "front", "joining", "instead", "near"]
        : ["form", "name", "front", "joining", "instead", "near"];
    function collect(value) {
        if (Array.isArray(value)) return value.forEach(collect);
        if (!value || typeof value !== "object") return;
        for (const [key, item] of Object.entries(value)) {
            if (probeKeys.includes(key) && typeof item === "string") forms.add(item);
            if (["built", "variants", "elements"].includes(key) && Array.isArray(item))
                for (const form of item) if (typeof form === "string") forms.add(form);
            collect(item);
        }
    }
    function names(value) {
        if (typeof value === "string" && !value.includes("{")) forms.add(value);
        else if (Array.isArray(value)) value.forEach(names);
        else if (value && typeof value === "object")
            Object.entries(value)
                .filter(([key]) => key !== "metadata")
                .forEach(([, item]) => names(item));
    }
    collect(priorData);
    names(priorData.names);
    const body = splitFrontmatter(before.raw).body;
    if (isNote(current.file, "skill-dunharlng", "skill-nyalbnlng")) {
        const nameList =
            /## (?:Example )?Name Lists\n([\s\S]*?)## (?:Dunhari|Nyáluban) Lexicon/u.exec(
                body,
            )?.[1];
        assert(nameList !== undefined, "the original name-list API probes remain present");
        for (const line of nameList.split("\n")) {
            if (line.startsWith("- ")) forms.add(line.slice(2).split(" (")[0].trim());
            else if (isNote(current.file, "skill-dunharlng") && line && !line.startsWith("#"))
                for (const form of line.split(",")) forms.add(form.trim());
        }
        const sayings = /## Sample Phrases\n([\s\S]*?)## (?:Lexicon|Related Languages)/u.exec(
            body,
        )?.[1];
        assert(sayings !== undefined, "the original phrase API probes remain present");
        for (const line of sayings.split("\n"))
            if (line && !line.startsWith(":"))
                for (const form of line.split(" ")) forms.add(form.trim());
    }
    if (isNote(current.file, "skill-varokhlng"))
        for (const match of body.matchAll(/`(-[\p{L}]+-?|-?[\p{L}]+-)`/gu)) forms.add(match[1]);
    const variants = (form) => {
        const bare = form.replace(/^-+|-+$/gu, "");
        if (isNote(current.file, "skill-atarzadilng", "skill-varokhlng")) return [form, bare];
        const values = [form, form.toLowerCase(), bare, bare.toLowerCase()];
        if (isNote(current.file, "skill-nyalbnlng"))
            values.push(
                form
                    .normalize("NFD")
                    .replace(/\p{M}/gu, "")
                    .replace(/^-+|-+$/gu, "")
                    .toLowerCase(),
            );
        return values;
    };
    // A form a ruled rename introduced has no baseline meaning to preserve.
    const introduced = new Set(
        (wordRenames.get(current.file) ?? []).flatMap(({ to }) => [to.form, ...(to.built ?? [])]),
    );
    for (const form of [...forms].flatMap(variants)) {
        if (introduced.has(form) && oldMeaning(form) === null) continue;
        if (isNote(current.file, "skill-nyalbnlng") && form === "zherami le zhone") {
            assert.equal(oldMeaning(form), null);
            assert(
                body.includes(
                    'Zherami le zhone\n: _Blessing invocation; "Spirits good abide" (formulaic expression of peaceful greeting)_',
                ),
            );
            assert.equal(
                currentMeaning(form),
                current.fm.data.words.find((word) => word.form === form).gloss,
            );
        } else
            assert.equal(
                currentMeaning(respell(form, current.file)),
                isNote(current.file, "skill-khelathlng") && oldMeaning(form) === null ?
                    completeMeaning(form)
                :   oldMeaning(form),
                `${form}: preserved public piece meaning`,
            );
    }
    const record = (note, data) => ({
        ...note.fm,
        data,
        file: note.file,
        package: "thalorna",
        system: "note",
    });
    const originalRows = dictionaryAndTermRows([record(before, priorData)]).dictionary;
    const currentRows = dictionaryAndTermRows([record(current, current.fm.data)]).dictionary;
    for (const original of originalRows) {
        const row = {
            ...original,
            name: respell(original.name, current.file),
            name_sort: respell(original.name_sort, current.file),
        };
        assert.deepEqual(
            currentRows.find(
                (candidate) =>
                    candidate.language === row.language &&
                    candidate.name === row.name &&
                    candidate.class === row.class,
            ),
            row,
            `${row.name}: preserved public dictionary projection`,
        );
    }
    if (isNote(current.file, "skill-atarzadilng"))
        assert.equal(
            dictionaryAndTermRows([record(before, projectionData(before, 40, false))]).dictionary
                .length,
            0,
            "the original first forty name/stem citations do not become dictionary entries",
        );
}
