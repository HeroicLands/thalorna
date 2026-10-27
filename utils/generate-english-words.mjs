#!/usr/bin/env node
/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 * For full terms, see LICENSE.md or https://www.gnu.org/licenses/gpl-3.0.html.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Generate one local JSON array of English spellings.
 *
 * node utils/generate-english-words.mjs --base node_modules/wordlist-english \
 *   --input build/kaikki.jsonl.gz --out assets/data/english-words.json \
 *   --provenance assets/data/english-words.sources.json
 *
 * --base reads a JSON string array or an unpacked wordlist-english package.
 * Its common, American, British, Canadian and Australian lists are combined.
 * --input is repeatable and reads Wiktextract JSONL, gzip files, or stdin (-).
 * English entries with archaic, obsolete or dated tags and Middle English
 * words contribute historical spellings. A historical topic is insufficient.
 * These are attested collision candidates, not dated permissions for prose.
 * Headword forms need their own historical tags, a historically tagged record,
 * or Middle English language membership; a historical sense alone does not
 * classify every form. No suffix generates an unattested inflection.
 *
 * --review reads {additions: [{word, source}], exclusions: [word]} as JSON.
 * Each addition cites a nonempty source. Exclusions remove historical entries,
 * never baseline words. --provenance writes a separate source report.
 * The output defaults to assets/data/english-words.json relative to cwd.
 * Spelling is NFC and lowercase, with letters and diacritics preserved.
 * Outputs are sorted and deduplicated. Input errors leave outputs unchanged.
 *
 * Obtain raw data from https://kaikki.org/dictionary/rawdata.html. Keep its
 * Wiktionary attribution and applicable data licence with a distributed list.
 * This program reads local inputs and never downloads data or modifies them.
 * Run node --test utils/generate-english-words.test.mjs for focused checks.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { PassThrough, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createInterface } from "node:readline";
import { createGunzip } from "node:zlib";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

const OPTIONS = {
    base: {
        type: "string",
        description: "JSON array or unpacked wordlist-english directory (required)",
    },
    input: {
        type: "string",
        multiple: true,
        description: "Wiktextract JSONL, .gz, or - for stdin; repeatable",
    },
    out: {
        type: "string",
        default: "assets/data/english-words.json",
        description: "Merged JSON output",
    },
    provenance: { type: "string", description: "Optional JSON source report" },
    review: { type: "string", description: "JSON additions and historical exclusions" },
    help: { type: "boolean", short: "h", description: "Show usage" },
};
const DIALECTS = ["english", "american", "british", "canadian", "australian"];
const HISTORICAL = new Set(["archaic", "obsolete", "dated"]);
const EXCLUDED_POS = new Set([
    "name",
    "proper-noun",
    "proper noun",
    "prefix",
    "suffix",
    "infix",
    "circumfix",
    "interfix",
    "root",
    "affix",
    "abbrev",
    "abbreviation",
    "phrase",
    "proverb",
    "symbol",
    "character",
    "punct",
]);
const EXCLUDED_TAGS = new Set([
    "abbreviation",
    "initialism",
    "acronym",
    "proper-noun",
    "proper-name",
    "bound-morpheme",
]);
const WORD = /^['’]?\p{L}[\p{L}\p{M}]*(?:['’\-‑][\p{L}\p{M}]+)*['’]?$/u;
const normalize = (word) => word.normalize("NFC").toLowerCase().normalize("NFC");

/** A positioned input error. */
class InputError extends Error {
    constructor(file, message, line, column) {
        super(message);
        this.file = file;
        this.line = line;
        this.column = column;
    }
}

/** Parse JSON with the parser's actual position, when available. */
function parseJSON(text, file, sourceLine) {
    try {
        return JSON.parse(text);
    } catch (error) {
        const offset = /position (\d+)/.exec(error.message)?.[1];
        const prefix = offset === undefined ? undefined : text.slice(0, Number(offset));
        const line = sourceLine ?? (prefix === undefined ? undefined : prefix.split("\n").length);
        const column =
            prefix === undefined ? undefined : (
                [...prefix.slice(prefix.lastIndexOf("\n") + 1)].length + 1
            );
        throw new InputError(file, `invalid JSON: ${error.message}`, line, column);
    }
}

function readJSON(file) {
    try {
        return parseJSON(fs.readFileSync(file, "utf8"), file);
    } catch (error) {
        if (error instanceof InputError) throw error;
        throw new InputError(file, error.message);
    }
}

/** Canonicalize paths even when their last components do not exist. */
function canonical(file) {
    const absolute = path.resolve(file);
    if (fs.existsSync(absolute)) return fs.realpathSync(absolute);
    const parent = path.dirname(absolute);
    return parent === absolute ? absolute : path.join(canonical(parent), path.basename(absolute));
}

function sameFile(a, b) {
    if (canonical(a) === canonical(b)) return true;
    if (!fs.existsSync(a) || !fs.existsSync(b)) return false;
    const first = fs.statSync(a),
        second = fs.statSync(b);
    return first.dev === second.dev && first.ino === second.ino;
}

/** Resolve the baseline's data files without importing or executing it. */
function baselineFiles(base) {
    let stat;
    try {
        stat = fs.statSync(base);
    } catch (error) {
        throw new InputError(base, error.message);
    }
    if (!stat.isDirectory()) return [base];
    const manifest = readJSON(path.join(base, "package.json"));
    if (manifest?.name !== "wordlist-english")
        throw new InputError(base, "expected an unpacked wordlist-english package");
    const files = fs
        .readdirSync(base)
        .filter((name) =>
            /^(?:english|american|british|canadian|australian)-words-\d+\.json$/.test(name),
        )
        .sort();
    for (const dialect of DIALECTS)
        if (!files.some((name) => name.startsWith(`${dialect}-words-`)))
            throw new InputError(base, `missing ${dialect} word lists`);
    return files.map((name) => path.join(base, name));
}

function strings(value, file, label, line) {
    if (!Array.isArray(value) || value.some((word) => typeof word !== "string" || !word.length))
        throw new InputError(file, `${label} must be an array of nonempty strings`, line);
    return value;
}

/** Tags belonging to an entry, sense or form. */
function tags(value, file, line) {
    if (value === undefined) return [];
    return strings(value, file, "tags", line);
}

function historical(value) {
    return value.some((tag) => HISTORICAL.has(tag));
}
function forbidden(value) {
    return value.some((tag) => EXCLUDED_TAGS.has(tag));
}

/** Collect only attested standalone spellings from one dictionary record. */
function historicalWords(entry, file, line) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry))
        throw new InputError(file, "each JSONL record must be an object", line);
    if (!["en", "enm"].includes(entry.lang_code)) return [];
    if (typeof entry.word !== "string" || typeof entry.pos !== "string")
        throw new InputError(file, "English records require string word and pos fields", line);
    if (EXCLUDED_POS.has(entry.pos)) return [];
    const recordTags = tags(entry.tags, file, line);
    if (forbidden(recordTags)) return [];
    if (entry.senses !== undefined && !Array.isArray(entry.senses))
        throw new InputError(file, "senses must be an array", line);
    const senses = (entry.senses ?? []).map((sense) => {
        if (!sense || typeof sense !== "object" || Array.isArray(sense))
            throw new InputError(file, "each sense must be an object", line);
        return tags(sense.tags, file, line);
    });
    if (senses.length && senses.every(forbidden)) return [];
    const wholeRecord = entry.lang_code === "enm" || historical(recordTags);
    const out = [];
    if (wholeRecord || senses.some((senseTags) => historical(senseTags) && !forbidden(senseTags)))
        out.push({
            word: entry.word,
            tags: [
                ...new Set([...recordTags, ...senses.flat().filter((tag) => HISTORICAL.has(tag))]),
            ].sort(),
            field: "word",
        });
    if (entry.forms !== undefined && !Array.isArray(entry.forms))
        throw new InputError(file, "forms must be an array", line);
    for (const form of entry.forms ?? []) {
        if (!form || typeof form !== "object" || typeof form.form !== "string")
            throw new InputError(file, "each form requires a string form field", line);
        const formTags = tags(form.tags, file, line);
        if ((wholeRecord || historical(formTags)) && !forbidden(formTags))
            out.push({
                word: form.form,
                tags: [...new Set([...recordTags, ...formTags])].sort(),
                field: "form",
            });
    }
    return out.filter(({ word }) => WORD.test(word));
}

/** Stream an input and propagate both file and decompression failures. */
async function readHistorical(file, receive) {
    const name = file === "-" ? "<stdin>" : file;
    const source = file === "-" ? process.stdin : fs.createReadStream(file);
    const hash = createHash("sha256");
    const hashing = new Transform({
        transform(chunk, encoding, callback) {
            hash.update(chunk);
            callback(null, chunk);
        },
    });
    const output = new PassThrough();
    const lines = createInterface({ input: output, crlfDelay: Infinity });
    output.on("error", () => lines.close());
    let line = 0;
    const consume = async () => {
        for await (const text of lines) {
            line++;
            if (!text.trim()) continue;
            const entry = parseJSON(text, name, line);
            for (const item of historicalWords(entry, name, line))
                receive(item, {
                    kind: "wiktextract",
                    file: name,
                    line,
                    language: entry.lang_code,
                    headword: entry.word,
                    field: item.field,
                    tags: item.tags,
                    url: `https://en.wiktionary.org/wiki/${encodeURIComponent(entry.word)}`,
                });
        }
    };
    try {
        await Promise.all([
            consume(),
            pipeline(source, hashing, ...(file.endsWith(".gz") ? [createGunzip()] : []), output),
        ]);
    } catch (error) {
        lines.close();
        source.destroy();
        output.destroy();
        if (error instanceof InputError) throw error;
        throw new InputError(name, error.message);
    }
    return { file: name, sha256: hash.digest("hex") };
}

/** Validate the small, reviewed list of additions and exclusions. */
function readReview(file) {
    const value = readJSON(file);
    if (
        !value ||
        typeof value !== "object" ||
        Array.isArray(value) ||
        Object.keys(value).some((key) => !["additions", "exclusions"].includes(key))
    )
        throw new InputError(file, "review must contain only additions and exclusions");
    const additions = value.additions ?? [];
    if (!Array.isArray(additions)) throw new InputError(file, "additions must be an array");
    for (const entry of additions) {
        if (
            !entry ||
            typeof entry !== "object" ||
            Array.isArray(entry) ||
            Object.keys(entry).some((key) => !["word", "source"].includes(key)) ||
            typeof entry.word !== "string" ||
            !WORD.test(entry.word) ||
            typeof entry.source !== "string" ||
            !entry.source.trim()
        )
            throw new InputError(
                file,
                "each addition requires a standalone word and a nonempty source",
            );
    }
    return { additions, exclusions: strings(value.exclusions ?? [], file, "exclusions") };
}

/** Stage every output before replacing any existing destination. */
function writeOutputs(outputs) {
    const staged = [];
    try {
        for (const [file, content] of outputs) {
            fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
            if (fs.existsSync(file) && fs.statSync(file).isDirectory())
                throw new InputError(file, "output is a directory");
            const temporary = path.join(
                path.dirname(file),
                `.${path.basename(file)}.${randomUUID()}.tmp`,
            );
            staged.push([temporary, file]);
            fs.writeFileSync(temporary, content, { flag: "wx" });
        }
        for (const [temporary, file] of staged) fs.renameSync(temporary, file);
    } finally {
        for (const [temporary] of staged) fs.rmSync(temporary, { force: true });
    }
}

/** Generate the merged array and optional provenance file. */
export async function generateEnglishWords(options) {
    const inputs = options.input ?? [];
    if (inputs.filter((file) => file === "-").length > 1)
        throw new InputError("<arguments>", "stdin may be read only once");
    const files = baselineFiles(options.base);
    const outputs = [options.out, options.provenance].filter(Boolean);
    const protectedFiles = [
        options.base,
        ...files,
        ...inputs.filter((file) => file !== "-"),
        ...(options.review ? [options.review] : []),
    ];
    if (fs.statSync(options.base).isDirectory()) {
        protectedFiles.push(path.join(options.base, "package.json"));
        const copyright = path.join(options.base, "Copyright");
        if (fs.existsSync(copyright)) protectedFiles.push(copyright);
    }
    for (let index = 0; index < outputs.length; index++) {
        for (const input of [...protectedFiles, ...outputs.slice(0, index)])
            if (sameFile(outputs[index], input))
                throw new InputError(outputs[index], `output and ${input} refer to the same file`);
    }
    const words = new Set(),
        baseline = new Set(),
        provenance = new Map();
    const add = (word, source) => {
        word = normalize(word);
        words.add(word);
        if (options.provenance) {
            if (!provenance.has(word)) provenance.set(word, new Map());
            provenance.get(word).set(JSON.stringify(source), source);
        }
    };
    const baselineSources = [];
    for (const file of files) {
        const text = fs.readFileSync(file, "utf8");
        for (const word of strings(parseJSON(text, file), file, "baseline")) {
            baseline.add(normalize(word));
            add(word, { kind: "baseline", file });
        }
        baselineSources.push({ file, sha256: createHash("sha256").update(text).digest("hex") });
    }
    const historicalSources = [];
    for (const file of inputs)
        historicalSources.push(
            await readHistorical(file, (item, source) => add(item.word, source)),
        );
    let review;
    if (options.review) {
        review = readReview(options.review);
        for (const { word, source } of review.additions)
            add(word, { kind: "review", file: options.review, source });
        for (const word of review.exclusions) {
            const normalized = normalize(word);
            if (baseline.has(normalized))
                throw new InputError(
                    options.review,
                    `cannot exclude baseline word \`${normalized}\``,
                );
            words.delete(normalized);
            provenance.delete(normalized);
        }
    }
    const sorted = [...words].sort();
    const results = [[options.out, JSON.stringify(sorted, null, 4) + "\n"]];
    if (options.provenance) {
        const sources = Object.fromEntries(
            sorted.map((word) => [
                word,
                [...provenance.get(word).values()].sort((a, b) =>
                    JSON.stringify(a) < JSON.stringify(b) ? -1
                    : JSON.stringify(a) > JSON.stringify(b) ? 1
                    : 0,
                ),
            ]),
        );
        let baselinePackage;
        if (fs.statSync(options.base).isDirectory()) {
            const manifest = readJSON(path.join(options.base, "package.json"));
            const copyrightFile = path.join(options.base, "Copyright");
            baselinePackage = {
                name: manifest.name,
                version: manifest.version,
                ...(fs.existsSync(copyrightFile) ?
                    { copyright: fs.readFileSync(copyrightFile, "utf8") }
                :   {}),
            };
        }
        results.push([
            options.provenance,
            JSON.stringify(
                {
                    format: 1,
                    wiktionary: {
                        source: "https://kaikki.org/dictionary/rawdata.html",
                        attribution: "Wiktionary contributors",
                        license: "https://en.wiktionary.org/wiki/Wiktionary:Copyrights",
                    },
                    ...(baselinePackage ? { baselinePackage } : {}),
                    baseline: baselineSources,
                    historical: historicalSources,
                    ...(options.review ? { review: { file: options.review, ...review } } : {}),
                    words: sources,
                },
                null,
                4,
            ) + "\n",
        ]);
    }
    writeOutputs(results);
    return { total: sorted.length, baseline: baseline.size, added: sorted.length - baseline.size };
}

async function main() {
    let options;
    try {
        options = parseArgs({
            options: Object.fromEntries(
                Object.entries(OPTIONS).map(([key, { description, ...value }]) => [key, value]),
            ),
            strict: true,
        }).values;
        if (options.help) {
            console.log(
                "Usage: node utils/generate-english-words.mjs --base <path> [options]\n\n" +
                    Object.entries(OPTIONS)
                        .map(
                            ([key, value]) =>
                                `  --${key}${value.type === "string" ? " <path>" : ""}  ${value.description}`,
                        )
                        .join("\n"),
            );
            return;
        }
        if (!options.base) throw new Error("--base is required");
    } catch (error) {
        console.error(`<arguments>: error: ${error.message}`);
        process.exitCode = 2;
        return;
    }
    try {
        const result = await generateEnglishWords(options);
        console.log(
            `Wrote ${result.total} words (${result.baseline} baseline, ${result.added} additions) to ${options.out}`,
        );
    } catch (error) {
        const location =
            error instanceof InputError ?
                [error.file, error.line, error.column]
                    .filter((part) => part !== undefined)
                    .join(":")
            :   options.out;
        console.error(`${location}: error: ${error.message}`);
        process.exitCode = 1;
    }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url))
    await main();
