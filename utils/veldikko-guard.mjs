/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Veldikko spelling guard (`npm run lint:veldikko`).
 *
 * Sinale and Áelendi use their own encoding documents. Every lexicon form,
 * derived form and personal or clan name must encode into the Veldikko block
 * (U+1ED50 to U+1EDFF) and word spaces. Unsupported source characters are
 * reported with the form that holds them.
 *
 * The spelling documents must agree with `utils/veldikko-spelling.mjs`.
 * Sinale's forms also match the independent `utils/veldikko-reference.mjs`
 * spelling model, using code points from the installed font's glyph metadata.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and
 * the exit status is 1 when there is a finding. A form is located by searching
 * its language note for it, a name likewise, and a repeated form or name lands on
 * its own occurrence.
 *
 *     npm run build:deps && npm run build:content-index
 *     node utils/veldikko-guard.mjs --index build/content-index/thalorna-metadata.jsonl
 */

import fs from "node:fs";
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
    encodingFor,
} from "@heroiclands/package-build/engine/encoding-lexicon";

import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { checkNotes } from "./veldikko-spelling.mjs";
import { convertVeldikko, veldikkoTable } from "./veldikko-reference.mjs";

const BLOCK_START = 0x1ed50;
const BLOCK_END = 0x1edff;

/** The languages the map writes, by their `languages` name in the configuration. */
export const LANGUAGES = [
    {
        name: "sina",
        enc: "sinaveldikkoenc",
        note: "assets/content/Skills/Languages/Sinale.md",
        reference: true,
    },
    {
        name: "aele",
        enc: "aeleveldikkoenc",
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

/**
 * A locator for one file. `claim(needle)` counts the needle's uses without reading anything, and `at(needle, n)`
 * reads the file on first need and returns the `n`th occurrence as `file:line:column`, so a repeated literal lands
 * on its own position; with no such occurrence it returns `file`.
 */
function locator(file) {
    let lines;
    const seen = new Map();
    return {
        claim(needle) {
            const n = seen.get(needle) ?? 0;
            seen.set(needle, n + 1);
            return n;
        },
        at(needle, n) {
            lines ??= fs.readFileSync(file, "utf8").split("\n");
            for (let i = 0; i < lines.length; i++) {
                for (
                    let col = lines[i].indexOf(needle);
                    col >= 0;
                    col = lines[i].indexOf(needle, col + 1)
                )
                    if (n-- === 0) return `${file}:${i + 1}:${col + 1}`;
            }
            return file;
        },
    };
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
 * @param {{name: string, enc: string, note: string, reference: boolean}} language
 * @param {object} ctx The canonical mapping context for the decoded index.
 * @param {object} record The decoded language note.
 * @param {((text: string) => string) | undefined} convert Sinale's reference converter.
 * @returns {{checked: number, findings: string[]}}
 */
export function checkLanguage(language, ctx, record, convert) {
    if (!record) throw new Error(`index has no language note for \`${language.name}\``);
    const findings = [];
    const entries = [];
    const locate = locator(language.note);
    const lexicon = lexiconEntries(ctx, { lang: language.name, enc: language.enc, derived: true });
    if ("problem" in lexicon) throw new Error(lexicon.problem);
    const selected = encodingFor(ctx, { enc: language.enc, lang: language.name });
    const append = (source, native, kind, errors = []) => {
        const n = locate.claim(source);
        const at = () => locate.at(source, n);
        if (errors.length) {
            for (const error of errors)
                findings.push(
                    `${at()}: error: the ${kind} \`${source}\` cannot be encoded: ${error.message}`,
                );
        }
        entries.push({ source, native, kind, at, failed: errors.length > 0 });
    };
    for (const row of lexicon.entries) {
        const result =
            row.source === "none" ?
                encodeWithLanguage(selected.encoding, row.form, {
                    font: selected.font,
                    lexicon: selected.lexicon,
                })
            :   undefined;
        append(row.form, row.native, "form", result?.findings);
    }
    for (const name of nameStrings(record)) {
        const result = encodeWithLanguage(selected.encoding, name, {
            font: selected.font,
            lexicon: selected.lexicon,
        });
        append(name, result.text, "name", result.findings);
    }

    for (const { source, native, kind, at, failed } of entries) {
        if (failed) continue;
        const bad = unwritable(native);
        if (bad.length) {
            findings.push(
                `${at()}: error: the ${kind} \`${source}\` has no ${language.enc} sign for ${bad.map((c) => `\`${c}\``).join(", ")}`,
            );
            continue;
        }
        if (convert && language.reference) {
            const expected = referenceWithPerformance(source, convert);
            if (expected !== native) {
                findings.push(
                    `${at()}: error: the ${kind} \`${source}\` is written ${hex(native)}, but the converter writes ${hex(expected)}`,
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
            !["--index"].includes(flag) ||
            !args[i + 1] ||
            args[i + 1].startsWith("--") ||
            options[flag]
        ) {
            throw new Error(`invalid argument \`${flag}\`; use --index <metadata.jsonl>`);
        }
        options[flag] = args[i + 1];
    }
    if (!options["--index"])
        throw new Error(
            "--index <metadata.jsonl> is required; run `npm run build:deps && npm run build:content-index` first",
        );
    const table = veldikkoTable();
    const convert = (text) => convertVeldikko(text, table);
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
