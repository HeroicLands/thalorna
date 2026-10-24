/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Veldikko spelling guard (`npm run lint:veldikko`).
 *
 * Sinale is set in the Veldikko by the `veldikko` mapping note and Áelendi by
 * `veldikko-aelendi`. Every lexicon form of each language, derived forms
 * included, and every personal and clan name of its note is run through its
 * map, and the result must hold only characters of the Veldikko block
 * (U+1ED50 to U+1EDFF) and word spaces, so no roman letter is left. A letter the map cannot write passes through unchanged and
 * is reported with the form that holds it.
 *
 * The rows of both notes must also be the ones `utils/veldikko-spelling.mjs`
 * writes.
 *
 * With `--fonts <dir>`, a checkout of the fonts repository, each Sinale form and
 * name must also equal what `tools/veldikko/convert.mjs` there writes for it,
 * code point for code point.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and
 * the exit status is 1 when there is a finding. A form is located by searching
 * its language note for it, a name likewise.
 *
 *     npm run build:deps && npm run build:content-index
 *     node utils/veldikko-guard.mjs --index build/content-index/thalorna-metadata.jsonl [--fonts ~/dev/HeroicLands/fonts]
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import { loadPackConfig } from "@heroiclands/package-build/engine/pack-config";
import {
    decodeIndexAddresses,
    noteAddressContext,
} from "@heroiclands/package-build/engine/note-addresses";
import {
    languageRecordsByName,
    lexiconEntries,
    transliterate,
} from "@heroiclands/package-build/engine/map-lexicon";

import { checkNotes } from "./veldikko-spelling.mjs";

const BLOCK_START = 0x1ed50;
const BLOCK_END = 0x1edff;

/** The languages the map writes, by their `languages` name in the configuration. */
export const LANGUAGES = [
    {
        name: "sina",
        map: "veldikko",
        note: "assets/content/Skills/Languages/Sinale.md",
        reference: true,
    },
    {
        name: "aele",
        map: "veldikko-aelendi",
        note: "assets/content/Skills/Languages/Aelendi.md",
        reference: false,
    },
];

/**
 * The characters of `text` that are neither a Veldikko character nor a space.
 *
 * @param {string} text
 * @returns {string[]} The offending characters, in order, without repeats.
 */
export function unwritable(text) {
    const bad = [];
    for (const ch of text) {
        const cp = ch.codePointAt(0);
        if (ch === " " || (cp >= BLOCK_START && cp <= BLOCK_END)) continue;
        if (!bad.includes(ch)) bad.push(ch);
    }
    return bad;
}

/** Read the local published index once; never reconstruct it from source. */
export function readIndex(file, config) {
    let text;
    try {
        text = fs.readFileSync(file, "utf8");
    } catch (error) {
        throw new Error(
            `${file}: error: cannot read index (${error.message}); run \`npm run build:deps && npm run build:content-index\``,
        );
    }
    const records = [];
    const context = noteAddressContext(config);
    for (const [at, line] of text.split("\n").entries()) {
        if (!line.trim()) continue;
        let record;
        try {
            record = JSON.parse(line);
        } catch (error) {
            throw new Error(`${file}:${at + 1}: error: malformed metadata index: ${error.message}`);
        }
        try {
            const sourcePath = record?.file?.path ?? record?.asset?.path;
            if (
                !record ||
                typeof record !== "object" ||
                Array.isArray(record) ||
                record.package !== config.contentPackage ||
                typeof sourcePath !== "string" ||
                !sourcePath
            ) {
                throw new Error(
                    `expected a ${config.contentPackage} metadata record with a source path`,
                );
            }
            records.push(decodeIndexAddresses(record, context));
        } catch (error) {
            throw new Error(
                `${file}:${at + 1}: error: incompatible metadata index: ${error.message}; run \`npm run build:content-index\``,
            );
        }
    }
    if (!records.length)
        throw new Error(
            `${file}: error: metadata index is empty; run \`npm run build:content-index\``,
        );
    return records;
}

/** Every string under indexed `data.names` except the name pattern. */
function nameStrings(record) {
    const names = { ...(record.data?.names ?? {}) };
    delete names.pattern;
    const out = [];
    const walk = (node) => {
        if (typeof node === "string") out.push(node);
        else if (Array.isArray(node)) node.forEach(walk);
        else if (node && typeof node === "object") Object.values(node).forEach(walk);
    };
    walk(names);
    return out;
}

/** `file:line:column` of the first occurrence of `needle`, else `file`. */
function locate(file, needle) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    for (let i = 0; i < lines.length; i++) {
        const col = lines[i].indexOf(needle);
        if (col >= 0) return `${file}:${i + 1}:${col + 1}`;
    }
    return file;
}

function hex(text) {
    return Array.from(text, (c) => "U+" + c.codePointAt(0).toString(16).toUpperCase()).join(" ");
}

/**
 * Add Sinale delivery signs to the fonts' plain-spelling reference conversion.
 * The upstream converter predates performance notation. It still decides every
 * letter, vowel, length sign and carrier; this adapter adds only the documented
 * delivery signs after the vowel nucleus they annotate. Scalar equality remains
 * strict, including sign placement and order.
 */
export function referenceWithPerformance(source, convert) {
    const marks = new Map([
        ["\u0302", 0x1ed79],
        ["\u030c", 0x1ed7a],
        ["\u0301", 0x1ed7b],
    ]);
    const vowels = new Set([..."aeiouyë"]);
    const diphthongs = new Set([
        "ai",
        "au",
        "ia",
        "eo",
        "oi",
        "ou",
        "ui",
        "uo",
        "ei",
        "ie",
        "yi",
        "ye",
    ]);
    const tokens = [];
    for (const letter of source.normalize("NFD").toLowerCase()) {
        const last = tokens.at(-1);
        if (letter === "\u0308" && last?.letter === "e") {
            last.letter = "ë";
        } else if (marks.has(letter)) {
            if (!last || !vowels.has(last.letter)) {
                throw new Error("a Sinale performance mark must annotate a vowel");
            }
            last.signs.push(marks.get(letter));
        } else {
            tokens.push({ letter, signs: [] });
        }
    }
    // Unsupported base characters still go through the canonical converter and
    // are refused there. No spelling is guessed or silently discarded.
    const plain = convert(tokens.map(({ letter }) => letter).join(""));
    const deliveries = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!vowels.has(token.letter)) continue;
        let signs = token.signs;
        const next = tokens[i + 1];
        if (
            next &&
            (next.letter === token.letter || (token.letter === "e" && next.letter === "ë"))
        ) {
            signs = [...signs, ...next.signs];
            i++;
        } else if (next && diphthongs.has(token.letter + next.letter)) {
            deliveries.push(token.signs, next.signs);
            i++;
            continue;
        }
        // A long nucleus carries pitch then emphasis, regardless of which of
        // its written vowels bears either mark. Hiatus keeps separate nuclei.
        deliveries.push(signs.toSorted((a, b) => a - b));
    }
    const scalars = [...plain];
    const out = [];
    let nucleus = 0;
    for (let i = 0; i < scalars.length; i++) {
        const scalar = scalars[i];
        out.push(scalar);
        const cp = scalar.codePointAt(0);
        if (cp < 0x1ed70 || cp > 0x1ed76) continue;
        if (scalars[i + 1]?.codePointAt(0) === 0x1ed78) out.push(scalars[++i]);
        out.push(...deliveries[nucleus++].map((sign) => String.fromCodePoint(sign)));
    }
    if (nucleus !== deliveries.length)
        throw new Error("reference vowel nuclei do not match the spelling");
    return out.join("");
}

/**
 * Check one language.
 *
 * @param {{name: string, map: string, note: string, reference: boolean}} language
 * @param {object} ctx The canonical mapping context for the decoded index.
 * @param {object} record The decoded language note.
 * @param {((text: string) => string) | undefined} convert Sinale's reference converter.
 * @returns {{checked: number, findings: string[]}}
 */
export function checkLanguage(language, ctx, record, convert) {
    if (!record) throw new Error(`index has no language note for \`${language.name}\``);
    const findings = [];
    const entries = [];
    const lexicon = lexiconEntries(ctx, { lang: language.name, map: language.map, derived: true });
    if ("problem" in lexicon) throw new Error(lexicon.problem);
    for (const row of lexicon.entries)
        entries.push({ source: row.form, native: row.native, kind: "form" });

    const names = nameStrings(record);
    if (names.length) {
        const result = transliterate(
            ctx,
            { map: language.map, lang: language.name },
            names.join("\n"),
        );
        if ("problem" in result) throw new Error(result.problem);
        const mapped = result.text.split("\n");
        if (mapped.length !== names.length) {
            findings.push(
                `${language.note}: error: the names came back as ${mapped.length} lines, not ${names.length}`,
            );
        } else {
            names.forEach((name, i) =>
                entries.push({ source: name, native: mapped[i], kind: "name" }),
            );
        }
    }

    for (const { source, native, kind } of entries) {
        const bad = unwritable(native);
        if (bad.length) {
            findings.push(
                `${locate(language.note, source)}: error: the ${kind} \`${source}\` has no ${language.map} sign for ${bad.map((c) => `\`${c}\``).join(", ")}`,
            );
            continue;
        }
        if (convert && language.reference) {
            const expected = referenceWithPerformance(source, convert);
            if (expected !== native) {
                findings.push(
                    `${locate(language.note, source)}: error: the ${kind} \`${source}\` is written ${hex(native)}, but the converter writes ${hex(expected)}`,
                );
            }
        }
    }
    return { checked: entries.length, findings };
}

async function main() {
    const args = process.argv.slice(2);
    const options = {};
    for (let i = 0; i < args.length; i += 2) {
        const flag = args[i];
        if (
            !["--index", "--fonts"].includes(flag) ||
            !args[i + 1] ||
            args[i + 1].startsWith("--") ||
            options[flag]
        ) {
            throw new Error(
                `invalid argument \`${flag}\`; use --index <metadata.jsonl> [--fonts <checkout>]`,
            );
        }
        options[flag] = args[i + 1];
    }
    if (!options["--index"])
        throw new Error(
            "--index <metadata.jsonl> is required; run `npm run build:deps && npm run build:content-index` first",
        );
    let convert;
    if (options["--fonts"]) {
        const file = path.resolve(options["--fonts"], "tools/veldikko/convert.mjs");
        try {
            const mod = await import(pathToFileURL(file).href);
            if (typeof mod.convertVeldikko !== "function")
                throw new Error("missing convertVeldikko export");
            convert = mod.convertVeldikko;
        } catch (error) {
            throw new Error(`${file}: error: cannot load reference converter: ${error.message}`);
        }
    }
    const started = performance.now();
    const config = loadPackConfig();
    const records = readIndex(options["--index"], config);
    const ctx = runContext(config, records);
    const languages = languageRecordsByName(records, config);
    let total = 0;
    let failed = 0;
    for (const finding of checkNotes()) {
        process.stderr.write(`${finding}\n`);
        failed += 1;
    }
    for (const language of LANGUAGES) {
        let result;
        try {
            result = checkLanguage(language, ctx, languages.get(language.name), convert);
        } catch (error) {
            const detail = String(error.stderr || error.message).trim();
            process.stderr.write(`${language.note}: error: ${detail}\n`);
            failed += 1;
            continue;
        }
        total += result.checked;
        for (const finding of result.findings) process.stderr.write(`${finding}\n`);
        failed += result.findings.length;
    }
    console.log(`Veldikko guard: ${total} forms and names checked, ${failed} findings.`);
    console.error(
        `Veldikko timing: ${(performance.now() - started).toFixed(0)}ms, ${records.length} index records.`,
    );
    process.exitCode = failed ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    try {
        await main();
    } catch (error) {
        console.error(`Veldikko guard: ${error.message}`);
        process.exitCode = 1;
    }
}
