/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Setting checks for proposed place names.
 *
 * {@link createSettingChecks} builds the five synchronous callbacks
 * (`spelling`, `language`, `earthWords`, `earthNames` and `indexedNames`) that a
 * place-name proposer calls as `(candidate, context)`. Each returns
 * `{available: true, valid: true | false, check, resource, evidence}` or
 * `{available: false, check, reason}`. Nothing here runs unless an author or a
 * tool calls it: no lint, build or CI step does.
 *
 * The supported scope is the plain opening and closing place elements declared
 * by the Eilwìthi language note: a candidate is one place-compatible opening
 * element followed by one place-compatible closing element, with no joining
 * form. Any other language or composition is `{available: false}`.
 *
 * Importing this module reads no file. The factory performs no I/O and
 * snapshots every resource at setup: it never reads one again. Every resource is
 * loaded first, by the caller or from explicit files by
 * {@link loadSettingCheckResources}, and carries an identity of `name`,
 * `version` and `source`, with the SHA-256 digest of its captured content that
 * every result repeats. A resource that is absent, unidentified, empty,
 * unparsable or still a promise leaves the callbacks that need it unavailable;
 * an absent resource is never a passing check. A callback never throws and
 * never returns a promise.
 *
 * The checks reuse the repository's guards: the spelling guard and vowel-pair
 * guard for `spelling`, the Earth-name guard for `earthNames`, and the Earth-word
 * guard's model-language declarations and lists for `earthWords`.
 *
 * @module
 */

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeName, nameFormsOf } from "@heroiclands/package-build/engine/name-forms";
import { earthMatcher, findEarthNames } from "./earth-names.mjs";
import { SOURCES, earthHits, parseEarth } from "./earth-words.mjs";
import { alphabetOf, checkWord } from "./spelling-guard.mjs";
import { badPairs, deprecatedPairs, groupsOf } from "./vowel-pairs.mjs";

/** The names of the five callbacks, in the order a proposer calls them. */
export const CHECK_NAMES = Object.freeze([
    "spelling",
    "language",
    "earthWords",
    "earthNames",
    "indexedNames",
]);

/** The language the factory supports, and the composition it reads. */
export const SUPPORTED_SCOPE = Object.freeze({
    package: "thalorna",
    shortcode: "aelwthlng",
    languageCode: "aelw",
    address: "skill-aelwthlng",
    elementKind: "place",
});

/** The resources each callback needs. */
export const REQUIRED_RESOURCES = Object.freeze({
    spelling: Object.freeze(["guide", "index"]),
    language: Object.freeze(["index"]),
    earthWords: Object.freeze(["englishWords", "index"]),
    earthNames: Object.freeze(["earthNames", "index"]),
    indexedNames: Object.freeze(["index"]),
});

const EARTH_NAMES_SOURCE = "utils/earth-names.mjs";
const DIGEST = /^sha256:[0-9a-f]{64}$/;

/** The largest size, in bytes, the loader reads for each explicit input. */
export const DEFAULT_LIMITS = Object.freeze({
    guideFile: 4 * 1024 * 1024,
    englishWordsFile: 64 * 1024 * 1024,
    englishSourcesFile: 1024 * 1024,
    indexFile: 512 * 1024 * 1024,
    wordlistDirs: 512 * 1024 * 1024,
    wordlistEntries: 10000,
});

/** The Earth-name guard's file sets, empty: a candidate is not a note file. */
const NO_FILES = Object.freeze({ references: new Set(), exempt: new Set() });

const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const isThenable = (value) => {
    try {
        return (
            value instanceof Promise ||
            ((typeof value === "object" || typeof value === "function") &&
                value !== null &&
                typeof value.then === "function")
        );
    } catch {
        // A value that refuses inspection is unusable.
        return true;
    }
};
const nfc = (text) => text.normalize("NFC");
const fold = (text) => nfc(text).normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
const messageOf = (error) => {
    try {
        return String(error?.message ?? error);
    } catch {
        return "an error that cannot be read";
    }
};
/** A name reduced to letters: accents, case, spaces, hyphens and apostrophes removed. */
const squash = (text) =>
    fold(normalizeName(text)).replace(/[\s\-\u2010-\u2015'\u2019\u02bc]/gu, "");
const unavailable = (check, reason) => ({ available: false, check, reason });

/**
 * The identity of a resource: its `name`, `version` and `source`, each a
 * nonempty string. Anything else is undefined, and the resource is unusable.
 *
 * @param {unknown} id
 * @returns {{name: string, version: string, source: string} | undefined}
 */
function identityOf(id, digest) {
    if (!isObject(id) || !isText(id.name) || !isText(id.version) || !isText(id.source))
        return undefined;
    return Object.freeze({ name: id.name, version: id.version, source: id.source, digest });
}

const sha256 = (data) => `sha256:${createHash("sha256").update(data).digest("hex")}`;

/**
 * The digest that identifies a resource's captured content: the `id.digest` the
 * loader or caller states for the exact bytes, else a SHA-256 of the data
 * itself.
 *
 * @param {string} key
 * @param {Record<string, any>} resource
 * @returns {string}
 */
function digestOfResource(key, resource) {
    if (typeof resource.id.digest === "string") {
        if (!DIGEST.test(resource.id.digest))
            throw new Error("the digest is not a sha256 hex digest");
        return resource.id.digest;
    }
    switch (key) {
        case "guide":
            return sha256(String(resource.text));
        case "englishWords":
            return sha256(JSON.stringify([...resource.words]));
        case "earthNames":
            return sha256(`${resource.matcher.flags}/${resource.matcher.source}`);
        case "index":
            return sha256(JSON.stringify(resource.records));
        case "earthWordLists":
            return sha256(
                JSON.stringify(
                    [...resource.earth.lists].map(([name, set]) => [name, [...set].sort()]),
                ),
            );
        default:
            throw new Error(`no digest for ${key}`);
    }
}

/**
 * A resource that is present, identified and not a promise, or why it is not.
 *
 * @param {Record<string, any>} resources
 * @param {string} key
 * @returns {{resource: Record<string, any>} | {reason: string}}
 */
function resourceOf(resources, key) {
    try {
        return inspectResource(resources[key], key);
    } catch (error) {
        return { reason: `the ${key} resource cannot be read: ${messageOf(error)}` };
    }
}

/** The inspection {@link resourceOf} guards. */
function inspectResource(resource, key) {
    if (resource === undefined || resource === null)
        return { reason: `the ${key} resource is not provided` };
    if (isThenable(resource)) return { reason: `the ${key} resource is not preloaded` };
    if (!isObject(resource)) return { reason: `the ${key} resource is not an object` };
    if (!identityOf(resource.id))
        return { reason: `the ${key} resource carries no name, version and source` };
    return { resource };
}

/**
 * Index records read from the standard content index's JSON Lines file.
 *
 * @param {string} file - The `thalorna-metadata.jsonl` path.
 * @returns {Record<string, any>[]}
 * @throws {Error} When a line is not a JSON object.
 */
export function readIndexRecords(file) {
    const records = [];
    for (const [i, line] of fs.readFileSync(file, "utf8").split("\n").entries()) {
        if (!line.trim()) continue;
        const record = JSON.parse(line);
        if (!isObject(record)) throw new Error(`${file}:${i + 1}: a record is not an object`);
        records.push(record);
    }
    return records;
}

/** The installed version of a package, read from its own `package.json`. */
function packageVersion(name) {
    let dir = path.dirname(fileURLToPath(import.meta.resolve(name)));
    for (;;) {
        const file = path.join(dir, "package.json");
        if (fs.existsSync(file)) {
            const manifest = JSON.parse(fs.readFileSync(file, "utf8"));
            if (manifest.name === name && isText(manifest.version)) return manifest.version;
        }
        const parent = path.dirname(dir);
        if (parent === dir) throw new Error(`no package.json found for ${name}`);
        dir = parent;
    }
}

/**
 * The bytes of one explicit file. The file is opened once; the same descriptor
 * must be a regular file within `limit` bytes, and at most `limit + 1` bytes are
 * read from it, so a file that grows after the size check still cannot exceed
 * the limit. A directory, FIFO, device or a link to one is refused.
 *
 * @param {string} file
 * @param {number} limit - The largest size in bytes.
 * @param {{onSized?: () => void}} [hooks] - `onSized` runs after the size check, before the read.
 * @returns {Buffer}
 */
export function readBoundedFile(file, limit, { onSized } = {}) {
    if (!isText(file)) throw new Error("no file is named");
    // A nonblocking open cannot wait on a FIFO before the type is known.
    const fd = fs.openSync(file, fs.constants.O_RDONLY | (fs.constants.O_NONBLOCK ?? 0));
    try {
        const stat = fs.fstatSync(fd);
        if (!stat.isFile()) throw new Error(`${file} is not a regular file`);
        if (stat.size > limit)
            throw new Error(`${file} is ${stat.size} bytes, above the ${limit} byte limit`);
        onSized?.();
        const chunks = [];
        let total = 0;
        while (total <= limit) {
            const chunk = Buffer.allocUnsafe(Math.min(1024 * 1024, limit + 1 - total));
            const count = fs.readSync(fd, chunk, 0, chunk.length, null);
            if (count === 0) break;
            chunks.push(count === chunk.length ? chunk : chunk.subarray(0, count));
            total += count;
        }
        if (total > limit) throw new Error(`${file} is above the ${limit} byte limit`);
        return Buffer.concat(chunks, total);
    } finally {
        fs.closeSync(fd);
    }
}

/**
 * The word-list files of the given directories in one bounded pass: at most
 * `maxEntries` directory entries and `maxBytes` bytes of `.txt` and `.tsv`
 * files in all, each read once through {@link readBoundedFile}. A path that is
 * not a directory is skipped.
 *
 * @param {string[]} dirs
 * @param {number} maxBytes
 * @param {number} maxEntries
 * @returns {{sources: Map<string, string>[], digest: string}}
 */
function readWordLists(dirs, maxBytes, maxEntries) {
    const hash = createHash("sha256");
    const sources = [];
    let entries = 0;
    let bytes = 0;
    for (const [i, dir] of dirs.entries()) {
        let handle;
        try {
            handle = fs.opendirSync(dir);
        } catch (error) {
            if (error?.code === "ENOENT" || error?.code === "ENOTDIR") continue;
            throw error;
        }
        const names = [];
        try {
            for (let entry = handle.readSync(); entry; entry = handle.readSync()) {
                entries += 1;
                if (entries > maxEntries)
                    throw new Error(
                        `the word-list directories hold more than ${maxEntries} entries`,
                    );
                if (/\.(txt|tsv)$/.test(entry.name)) names.push(entry.name);
            }
        } finally {
            handle.closeSync();
        }
        const files = new Map();
        for (const name of names.sort()) {
            const data = readBoundedFile(path.join(dir, name), maxBytes - bytes);
            bytes += data.length;
            hash.update(`${i}\0${name}\0${data.length}\0`).update(data);
            files.set(name, data.toString("utf8"));
        }
        sources.push(files);
    }
    return { sources, digest: `sha256:${hash.digest("hex")}` };
}

/**
 * Load the resources from explicit files. Only the named files and directories
 * are read, each within its size limit, and nothing depends on the working
 * directory. Each resource that is not named or cannot be read is left out and
 * reported in `problems`, so the callbacks that need it are unavailable. Each
 * resource's `id.digest` is the SHA-256 of the exact bytes read.
 *
 * - `guideFile`: the Pronouncing Thalorna note.
 * - `englishWordsFile`: the English word list, a JSON array of strings;
 *   `englishSourcesFile`, its source manifest, supplies the baseline version.
 * - `indexFile`: the standard content index's `thalorna-metadata.jsonl`.
 * - `wordlistDirs`: the model-language list directories; needed only for a
 *   language that declares model lists.
 * - `earthNames` needs no file: the matcher and the installed `countries-list`
 *   version it reads are identified by the manifest of that dependency.
 * - `limits`: limits by option name, over {@link DEFAULT_LIMITS}. A limit is a
 *   non-negative integer; any other value (`undefined`, `NaN`, `Infinity`, a
 *   negative or fractional number) is a problem for the resource it bounds.
 *   Each file is opened once and read through that descriptor; the word-list
 *   directories are read in one bounded pass.
 *
 * @param {object} [options]
 * @returns {{resources: Record<string, any>, problems: string[]}}
 */
export function loadSettingCheckResources({
    guideFile,
    englishWordsFile,
    englishSourcesFile,
    indexFile,
    wordlistDirs,
    limits = {},
} = {}) {
    const resources = {};
    const problems = [];
    const limit = (key) => {
        if (limits === null || typeof limits !== "object")
            throw new Error("the limits are not an object");
        if (!Object.hasOwn(limits, key)) return DEFAULT_LIMITS[key];
        const value = limits[key];
        if (!Number.isSafeInteger(value) || value < 0)
            throw new Error(`the ${key} limit is not a non-negative integer`);
        return value;
    };
    const attempt = (key, load) => {
        try {
            resources[key] = load();
        } catch (error) {
            problems.push(`${key}: ${messageOf(error)}`);
        }
    };
    attempt("guide", () => {
        const bytes = readBoundedFile(guideFile, limit("guideFile"));
        return {
            id: {
                name: "Pronouncing Thalorna",
                version: sha256(bytes),
                source: guideFile,
                digest: sha256(bytes),
            },
            text: bytes.toString("utf8"),
        };
    });
    attempt("englishWords", () => {
        const bytes = readBoundedFile(englishWordsFile, limit("englishWordsFile"));
        const words = JSON.parse(bytes.toString("utf8"));
        if (!Array.isArray(words) || !words.length || !words.every((w) => typeof w === "string"))
            throw new Error(`${englishWordsFile} is not a nonempty array of strings`);
        const baseline = JSON.parse(
            readBoundedFile(englishSourcesFile, limit("englishSourcesFile")).toString("utf8"),
        ).baseline;
        if (!isText(baseline?.name) || !isText(baseline?.version))
            throw new Error(`${englishSourcesFile} names no baseline word list`);
        return {
            id: {
                name: "english-words",
                version: `${baseline.name}@${baseline.version}`,
                source: englishWordsFile,
                digest: sha256(bytes),
            },
            words,
        };
    });
    attempt("earthNames", () => {
        const matcher = earthMatcher();
        return {
            id: {
                name: "earth-names",
                version: `countries-list@${packageVersion("countries-list")}`,
                source: EARTH_NAMES_SOURCE,
                digest: sha256(`${matcher.flags}/${matcher.source}`),
            },
            matcher,
        };
    });
    attempt("index", () => {
        const bytes = readBoundedFile(indexFile, limit("indexFile"));
        const records = [];
        for (const [i, line] of bytes.toString("utf8").split("\n").entries()) {
            if (!line.trim()) continue;
            const record = JSON.parse(line);
            if (!isObject(record))
                throw new Error(`${indexFile}:${i + 1}: a record is not an object`);
            records.push(record);
        }
        if (!records.length) throw new Error(`${indexFile} holds no records`);
        return {
            id: {
                name: "content-index",
                version: sha256(bytes),
                source: indexFile,
                digest: sha256(bytes),
            },
            records,
        };
    });
    if (wordlistDirs !== undefined)
        attempt("earthWordLists", () => {
            if (!Array.isArray(wordlistDirs) || !wordlistDirs.every(isText))
                throw new Error("the word-list directories are not a list of paths");
            const { sources, digest } = readWordLists(
                wordlistDirs,
                limit("wordlistDirs"),
                limit("wordlistEntries"),
            );
            const earth = parseEarth(sources);
            if (!earth.lists.size) throw new Error(`no word list in ${wordlistDirs.join(", ")}`);
            return {
                id: {
                    name: "earth-wordlists",
                    version: "lists",
                    source: wordlistDirs.join(path.delimiter),
                    digest,
                },
                earth,
            };
        });
    return { resources, problems };
}

/** Why a context is outside the supported scope, or undefined when it is inside. */
function scopeProblem(context) {
    if (!isObject(context)) return "the context is not an object";
    const language = context.language;
    if (
        !isObject(language) ||
        language.package !== SUPPORTED_SCOPE.package ||
        language.type !== "skill" ||
        language.subType !== "language" ||
        language.shortcode !== SUPPORTED_SCOPE.shortcode ||
        language.languageCode !== SUPPORTED_SCOPE.languageCode
    )
        return `only the ${SUPPORTED_SCOPE.shortcode} language is supported`;
    if (!Array.isArray(context.elements) || context.elements.length !== 2)
        return "an opening and a closing element are required";
    return undefined;
}

/**
 * The declarations the context's elements name in the captured language record,
 * or why the composition is outside the supported subset: a plain opening
 * element followed by a plain closing element, each of `place` kind or no kind
 * and with no joining form.
 *
 * @param {Record<string, any>} data - The captured language record's `data`.
 * @param {Record<string, any>} context
 * @returns {{declared: Record<string, any>[]} | {reason: string}}
 */
function declaredComposition(data, context) {
    if (!isObject(data) || !Array.isArray(data.elements))
        return { reason: "the language declares no place elements" };
    const declared = context.elements.map((item) =>
        isObject(item) && Number.isInteger(item.index) ? data.elements[item.index] : undefined,
    );
    if (
        declared.some((element) => !isObject(element) || !isText(element.form)) ||
        declared.some((element, i) => nfc(element.form) !== nfc(String(context.elements[i].form)))
    )
        return { reason: "an element is not declared by the language" };
    const [opening, closing] = declared;
    const supported = (element, positions) =>
        positions.includes(element.position) &&
        (element.kind === undefined || element.kind === SUPPORTED_SCOPE.elementKind) &&
        element.joining === undefined;
    if (!supported(opening, ["opening", "either"]) || !supported(closing, ["closing", "either"]))
        return {
            reason: "the elements are not a plain opening and a plain closing place element of the language",
        };
    return { declared };
}

/** The strings of every leaf below a value, skipping the keys named. */
function leafStrings(value, skip = new Set()) {
    if (typeof value === "string") return isText(value) ? [value] : [];
    if (Array.isArray(value)) return value.flatMap((v) => leafStrings(v, skip));
    if (!isObject(value)) return [];
    return Object.entries(value).flatMap(([key, v]) => (skip.has(key) ? [] : leafStrings(v, skip)));
}

/**
 * Every name an index record holds, with the kind of place it holds it: the
 * full name, the other forms and aliases, a character's given and clan names, a
 * typed name span, and the register and name lists of a language.
 *
 * @param {Record<string, any>} record
 * @returns {{name: string, kind: string}[]}
 */
function namesOfRecord(record) {
    const out = [];
    const add = (names, kind) => {
        for (const name of names) if (isText(name)) out.push({ name, kind });
    };
    const name = record.name;
    if (isObject(name)) {
        add([name.full], "name");
        add([name.sort, name.given, name.clan], "name");
        add(nameFormsOf(name), "alias");
    }
    if (Array.isArray(record.names))
        add(
            record.names.map((span) => span?.name),
            "name-span",
        );
    const data = isObject(record.data) ? record.data : {};
    if (Array.isArray(data.register))
        add(
            data.register.map((row) => row?.name),
            "register",
        );
    add(leafStrings(data.names, new Set(["pattern", "metadata"])), "register");
    if (Array.isArray(data.settlements))
        add(
            data.settlements.map((row) => row?.settlement),
            "settlement",
        );
    return out;
}

/** The index's names by matching key and by accent-folded key. */
function indexNames(records) {
    const bySquash = new Map();
    const push = (map, key, entry) => {
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(entry);
    };
    for (const record of records) {
        if (!isObject(record)) continue;
        const address = record.address?.canonical?.address ?? record.address?.slug ?? undefined;
        for (const { name, kind } of namesOfRecord(record)) {
            const entry = { name, kind, ...(address === undefined ? {} : { address }) };
            push(bySquash, squash(name), entry);
        }
    }
    return { bySquash };
}

/**
 * Build the five setting-check callbacks over preloaded resources.
 *
 * `resources` holds `guide` (`{id, text}`), `englishWords` (`{id, words}`),
 * `earthNames` (`{id, matcher}`), `index` (`{id, records}`) and, only for a
 * language that declares model-language lists, `earthWordLists`
 * (`{id, earth}`); each `id` is `{name, version, source}`.
 *
 * `selected` is the list of names the current operation has already chosen: an
 * array or set the caller keeps up to date, or a function returning one. It is
 * read at every `indexedNames` call, and without it that callback is
 * unavailable.
 *
 * @param {Record<string, any>} resources
 * @param {object} [options]
 * @param {Iterable<string> | (() => Iterable<string>)} [options.selected]
 * @returns {{
 *   validators: Record<string, (candidate: string, context: object) => object>,
 *   resources: Record<string, {name: string, version: string, source: string}[]>,
 *   unavailable: Record<string, string>,
 *   scope: typeof SUPPORTED_SCOPE
 * }}
 */
export function createSettingChecks(resources, { selected } = {}) {
    const given = isObject(resources) ? resources : {};
    const problems = {};
    const identities = {};
    const digests = new Map();
    const need = (check, key) => {
        const found = resourceOf(given, key);
        if (found.reason) {
            problems[check] ??= found.reason;
            return undefined;
        }
        try {
            if (!digests.has(key)) digests.set(key, digestOfResource(key, found.resource));
        } catch (error) {
            problems[check] ??= `the ${key} resource cannot be identified: ${messageOf(error)}`;
            return undefined;
        }
        (identities[check] ??= []).push(identityOf(found.resource.id, digests.get(key)));
        return found.resource;
    };

    // spelling: the guide's alphabet and vowel groups, read once.
    let guide;
    const guideResource = need("spelling", "guide");
    if (guideResource) {
        try {
            if (!isText(guideResource.text)) throw new Error("the guide text is empty");
            const alphabet = alphabetOf(guideResource.text);
            if (!alphabet.singles.size) throw new Error("the guide declares no alphabet");
            guide = { alphabet, groups: groupsOf(guideResource.text, SUPPORTED_SCOPE.address) };
        } catch (error) {
            problems.spelling ??= `the guide cannot be read: ${messageOf(error)}`;
        }
    }

    // earthWords: the English list, and any model-language lists the language declares.
    let english;
    let earthLists;
    const englishResource = need("earthWords", "englishWords");
    if (englishResource) {
        const words = englishResource.words;
        if (
            isThenable(words) ||
            typeof words?.[Symbol.iterator] !== "function" ||
            typeof words === "string"
        )
            problems.earthWords ??= "the English word list is not a collection of words";
        else {
            english = new Set();
            for (const word of words) {
                if (!isText(word)) {
                    english = undefined;
                    problems.earthWords ??= "the English word list holds a value that is no word";
                    break;
                }
                english.add(nfc(word).toLowerCase());
            }
            if (english && !english.size) {
                english = undefined;
                problems.earthWords ??= "the English word list is empty";
            }
        }
    }
    const modelLists = SOURCES[SUPPORTED_SCOPE.address] ?? [];
    if (english && modelLists.length) {
        const listResource = need("earthWords", "earthWordLists");
        if (!listResource || !(listResource.earth?.lists instanceof Map)) {
            problems.earthWords ??= "the model-language word lists are not provided";
            english = undefined;
        } else if (modelLists.some((name) => !listResource.earth.lists.get(name)?.size)) {
            problems.earthWords ??= "a model-language word list is missing";
            english = undefined;
        } else earthLists = structuredClone(listResource.earth);
    }

    // earthNames: the Earth-name guard's matcher.
    let matcher;
    const namesResource = need("earthNames", "earthNames");
    if (namesResource) {
        if (namesResource.matcher instanceof RegExp && namesResource.matcher.flags.includes("g"))
            matcher = new RegExp(namesResource.matcher.source, namesResource.matcher.flags);
        else problems.earthNames ??= "the Earth-name matcher is not a global pattern";
    }

    // indexedNames: the captured index, keyed once.
    let index;
    const indexResource = need("indexedNames", "index");
    if (indexResource) {
        const records = indexResource.records;
        if (isThenable(records) || !Array.isArray(records) || !records.length)
            problems.indexedNames ??= "the captured index holds no records";
        else {
            try {
                index = indexNames(records);
            } catch (error) {
                problems.indexedNames ??= `the captured index cannot be read: ${messageOf(error)}`;
            }
        }
    }
    // language: the supported language's record, as the captured index holds it.
    let languageRecord;
    const languageIndex = need("language", "index");
    if (languageIndex) {
        const records = languageIndex.records;
        if (isThenable(records) || !Array.isArray(records))
            problems.language ??= "the captured index holds no records";
        else {
            languageRecord = records.find(
                (record) =>
                    isObject(record) &&
                    record.package === SUPPORTED_SCOPE.package &&
                    record.type === "skill" &&
                    record.subType === "language" &&
                    record.shortcode === SUPPORTED_SCOPE.shortcode &&
                    record.languageCode === SUPPORTED_SCOPE.languageCode,
            );
            if (!languageRecord)
                problems.language ??= `the captured index has no ${SUPPORTED_SCOPE.shortcode} language record`;
            else languageRecord = structuredClone(languageRecord);
        }
    }
    for (const check of ["spelling", "earthWords", "earthNames"]) {
        need(check, "index");
        if (problems.language) problems[check] ??= problems.language;
    }
    if (selected === undefined)
        problems.indexedNames ??= "the names selected in this operation are not provided";

    const guarded = (check, body) => (candidate, context) => {
        try {
            if (problems[check]) return unavailable(check, problems[check]);
            if (!isText(candidate)) return unavailable(check, "the candidate is not a name");
            const scope = scopeProblem(context);
            if (scope) return unavailable(check, scope);
            const composition = declaredComposition(languageRecord.data, context);
            if (composition.reason) return unavailable(check, composition.reason);
            const result = body(nfc(candidate), context);
            if (isThenable(result)) return unavailable(check, "the check is not synchronous");
            return result;
        } catch (error) {
            return unavailable(check, `the check failed: ${messageOf(error)}`);
        }
    };
    const verdict = (check, evidence) => ({
        available: true,
        valid: evidence.every((item) => item.ok),
        check,
        resource: identities[check] ?? [],
        evidence,
    });

    const spelling = guarded("spelling", (candidate) => {
        const evidence = [];
        // A candidate is one written word: letters and their marks only.
        evidence.push({ rule: "one-word", ok: /^\p{L}[\p{L}\p{M}]*$/u.test(candidate) });
        const issues = checkWord(candidate, guide.alphabet, new Set());
        evidence.push({
            rule: "alphabet",
            ok: issues.length === 0,
            ...(issues.length ? { issues: issues.map((i) => `rule ${i.rule}: ${i.message}`) } : {}),
        });
        const closing = deprecatedPairs(candidate, guide.groups);
        evidence.push({
            rule: "closing-pair",
            ok: closing.length === 0,
            ...(closing.length ? { pairs: closing.map((hit) => hit.pair) } : {}),
        });
        const diaereses = badPairs(candidate, guide.groups);
        evidence.push({
            rule: "diaeresis",
            ok: diaereses.length === 0,
            ...(diaereses.length ? { pairs: diaereses.map((hit) => hit.pair) } : {}),
        });
        return verdict("spelling", evidence);
    });

    const language = guarded("language", (candidate, context) => {
        const data = languageRecord.data;
        if (!isObject(data) || !isText(data.roman))
            return unavailable("language", "the language declares no roman inventory");
        if (!Array.isArray(data.elements) || !isObject(data.naming))
            return unavailable("language", "the language declares no place elements");
        const draws = Array.isArray(data.naming.draws) ? data.naming.draws : [];
        const placeDraws = draws.filter((draw) => isObject(draw) && draw.kind === "place");
        if (placeDraws.length !== 1 || !Array.isArray(placeDraws[0].elements))
            return unavailable("language", "the language declares no single place draw");
        const evidence = [];
        evidence.push({
            rule: "place-draw",
            ok: placeDraws[0].elements.includes("place"),
        });
        const { declared } = declaredComposition(data, context);
        const [opening, closing] = declared;
        evidence.push({
            rule: "composition",
            ok: nfc(opening.form + closing.form) === candidate,
            elements: declared.map((element) => ({
                form: element.form,
                position: element.position,
                kind: element.kind ?? null,
            })),
        });
        const inventory = new Set([...data.roman].map((ch) => nfc(ch).toLowerCase()));
        const outside = [...candidate].filter((ch) => !inventory.has(ch.toLowerCase()));
        evidence.push({
            rule: "roman-inventory",
            ok: outside.length === 0,
            ...(outside.length ? { outside: [...new Set(outside)] } : {}),
        });
        const key = normalizeName(candidate);
        const retired = (Array.isArray(data.retired) ? data.retired : []).find(
            (row) => isObject(row) && isText(row.form) && normalizeName(row.form) === key,
        );
        evidence.push({
            rule: "retired-form",
            ok: retired === undefined,
            ...(retired ? { why: retired.why, instead: retired.instead } : {}),
        });
        const held = [];
        for (const word of Array.isArray(data.words) ? data.words : [])
            if (isObject(word))
                held.push(
                    word.form,
                    word.plural,
                    ...(Array.isArray(word.variants) ? word.variants : []),
                );
        held.push(
            ...(Array.isArray(data.register) ? data.register : []).map((row) => row?.name),
            ...leafStrings(data.names, new Set(["pattern", "metadata"])),
        );
        const clash = held.find((form) => isText(form) && normalizeName(form) === key);
        evidence.push({
            rule: "recorded-form",
            ok: clash === undefined,
            ...(clash ? { form: clash } : {}),
        });
        return verdict("language", evidence);
    });

    const earthWords = guarded("earthWords", (candidate) => {
        const lower = candidate.toLowerCase();
        const hits = [];
        if (english.has(lower) || english.has(fold(candidate)))
            hits.push("a word of the English list");
        if (earthLists) {
            const model = earthHits({ form: candidate, gloss: "" }, earthLists, modelLists);
            for (const hit of model) hits.push(hit.message);
        }
        return verdict("earthWords", [
            { rule: "whole-word", ok: hits.length === 0, ...(hits.length ? { hits } : {}) },
        ]);
    });

    const earthNames = guarded("earthNames", (candidate) => {
        const shown = [...candidate].map((ch, i) => (i === 0 ? ch.toUpperCase() : ch)).join("");
        const findings = findEarthNames("candidate", shown, matcher, NO_FILES);
        return verdict("earthNames", [
            {
                rule: "proper-name",
                ok: findings.length === 0,
                ...(findings.length ? { findings } : {}),
            },
        ]);
    });

    const indexedNames = guarded("indexedNames", (candidate) => {
        const chosen = typeof selected === "function" ? selected() : selected;
        if (!Array.isArray(chosen) && !(chosen instanceof Set))
            return unavailable(
                "indexedNames",
                "the selected names are not an array or a set of names",
            );
        const names = [];
        for (const name of chosen) {
            if (!isText(name)) return unavailable("indexedNames", "a selected name is not a name");
            names.push(name);
        }
        const key = squash(candidate);
        const matches = [
            ...(index.bySquash.get(key) ?? []),
            ...names
                .filter((name) => squash(name) === key)
                .map((name) => ({ name, kind: "selected" })),
        ];
        return verdict("indexedNames", [
            {
                rule: "unique-name",
                ok: matches.length === 0,
                ...(matches.length ? { matches } : {}),
            },
        ]);
    });

    return {
        validators: { spelling, language, earthWords, earthNames, indexedNames },
        resources: Object.fromEntries(CHECK_NAMES.map((check) => [check, identities[check] ?? []])),
        unavailable: problems,
        scope: SUPPORTED_SCOPE,
    };
}
