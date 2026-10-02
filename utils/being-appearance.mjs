/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of this license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Holds `data.gender` and the four colour fields under `data.appearance` to a
 * closed vocabulary, so a consumer that branches on one has a list to branch
 * on. `data.appearance.extra_features` is free text and carries whatever the
 * closed fields cannot.
 *
 * A field is unstated when it is absent, `null` or `""`, and an unstated field
 * passes. A stated value outside its list fails, as does any key under
 * `data.appearance` that is not one of the five.
 *
 * The vocabulary is also published to authors in the gazetteer README. This
 * guard compares that table against the registry below and fails when the two
 * disagree, so widening a list is one edit to both rather than a silent edit to
 * either.
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const CONTENT_DIR = "assets/content";
const VOCABULARY_DOC = path.join(CONTENT_DIR, "README-gazeteer.md");

/** The closed vocabulary, keyed by the field's dotted path under a note's `data`. */
const VOCABULARY = Object.freeze({
    "data.gender": Object.freeze(["female", "male", "nonbinary", "none", "other"]),
    "data.appearance.eye_color": Object.freeze([
        "amber",
        "black",
        "blue",
        "brown",
        "dark_amber",
        "dark_brown",
        "gray",
        "green",
        "hazel",
        "honey_brown",
        "violet",
        "warm_brown",
    ]),
    "data.appearance.hair_color": Object.freeze([
        "auburn",
        "bald",
        "black",
        "blonde",
        "brown",
        "chestnut",
        "dark_blonde",
        "dark_brown",
        "gray",
        "graying_black",
        "graying_brown",
        "red",
        "silver",
        "white",
    ]),
    "data.appearance.skin_color": Object.freeze([
        "dark",
        "dark_brown",
        "ebony",
        "fair",
        "golden",
        "light",
        "medium",
        "olive",
        "olive_tanned",
        "pale",
        "rich_brown",
        "tanned",
        "tawny",
        "warm",
        "warm_golden",
    ]),
    "data.appearance.complexion": Object.freeze([
        "battle_scarred",
        "bronzed",
        "clear",
        "dusky",
        "fair",
        "flawless",
        "freckled",
        "olive_toned",
        "pale",
        "rough",
        "ruddy",
        "rugged",
        "sallow",
        "smooth",
        "sun_kissed",
        "sun_scarred",
        "tanned",
        "weathered",
        "wrinkled",
    ]),
});

/** The keys `data.appearance` may hold. `extra_features` carries free text. */
const APPEARANCE_KEYS = Object.freeze([
    "eye_color",
    "hair_color",
    "skin_color",
    "complexion",
    "extra_features",
]);

let errors = 0;

/**
 * Report one finding as `file:line:column: error: message`, dropping a position
 * field that is not known rather than defaulting it.
 *
 * @param {string} file Path to the offending file, relative to the working directory.
 * @param {string} message What is wrong.
 * @param {{line?: number, column?: number}} [position] Where it is, as far as it is known.
 */
function report(file, message, position = {}) {
    const { line, column } = position;
    const where =
        line === undefined ? `${file}:`
        : column === undefined ? `${file}:${line}:`
        : `${file}:${line}:${column}:`;
    console.error(`${where} error: ${message}`);
    errors += 1;
}

/**
 * Locate a key's value, so a finding about it lands on the value rather than on
 * the file's first line. The search is bounded, so a note's body cannot answer
 * for its frontmatter.
 *
 * @param {string} source The text to search.
 * @param {string} key The YAML key or table label, unqualified.
 * @param {number} [lastLine] The last line to search, one-based.
 * @returns {{line: number, column: number} | {line: number} | {}} What is known of the position.
 */
function locate(source, key, lastLine = Infinity) {
    const lines = source.split("\n").slice(0, lastLine);
    const pattern = new RegExp(`^\\s*${key}:[ \\t]*`);
    for (const [index, text] of lines.entries()) {
        const match = text.match(pattern);
        if (!match) continue;
        const line = index + 1;
        return match[0].length < text.length ? { line, column: match[0].length + 1 } : { line };
    }
    return {};
}

/**
 * Every markdown file beneath a directory.
 *
 * @param {string} directory Where to start.
 * @returns {string[]} Paths, in directory order.
 */
function markdownFiles(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(directory, entry.name);
        return (
            entry.isDirectory() ? markdownFiles(fullPath)
            : entry.isFile() && entry.name.endsWith(".md") ? [fullPath]
            : []
        );
    });
}

/** True when a field says nothing — absent, `null`, or an empty string. */
const isUnstated = (value) =>
    value === undefined || value === null || (typeof value === "string" && value.trim() === "");

/**
 * Check one stated value against its list.
 *
 * @param {string} file The note.
 * @param {string} source The note's text, for locating the value.
 * @param {string} field The dotted field path.
 * @param {unknown} value What the note states.
 * @param {number} lastLine The note's frontmatter ends here, one-based.
 */
function checkValue(file, source, field, value, lastLine) {
    const permitted = VOCABULARY[field];
    const key = field.split(".").at(-1);
    if (isUnstated(value)) return;
    if (typeof value !== "string") {
        report(
            file,
            `${field} holds ${JSON.stringify(value)}; it takes one of ${permitted.join(", ")}`,
            locate(source, key, lastLine),
        );
        return;
    }
    if (permitted.includes(value)) return;
    report(
        file,
        `${field} holds "${value}", which is not in the vocabulary; it takes one of ${permitted.join(", ")}`,
        locate(source, key, lastLine),
    );
}

/** Compare the gazetteer README's published table against the registry. */
function checkVocabularyDoc() {
    const source = fs.readFileSync(VOCABULARY_DOC, "utf8");
    const documented = new Map();
    for (const row of source.split("\n")) {
        const match = row.match(/^\|\s*`(data\.[A-Za-z_.]+)`\s*\|(.*)\|\s*$/);
        if (!match) continue;
        documented.set(
            match[1],
            [...match[2].matchAll(/`([^`]+)`/g)].map((value) => value[1]),
        );
    }

    for (const [field, permitted] of Object.entries(VOCABULARY)) {
        const published = documented.get(field);
        if (!published) {
            report(
                VOCABULARY_DOC,
                `the vocabulary table states no values for ${field}`,
                locate(source, "Field"),
            );
            continue;
        }
        const missing = permitted.filter((value) => !published.includes(value));
        const extra = published.filter((value) => !permitted.includes(value));
        const at = {
            line: source.split("\n").findIndex((row) => row.includes(`\`${field}\``)) + 1,
        };
        if (missing.length > 0) {
            report(VOCABULARY_DOC, `the vocabulary table omits ${field} ${missing.join(", ")}`, at);
        }
        if (extra.length > 0) {
            report(
                VOCABULARY_DOC,
                `the vocabulary table states ${field} ${extra.join(", ")}, which the registry does not permit`,
                at,
            );
        }
    }

    for (const field of documented.keys()) {
        if (field in VOCABULARY) continue;
        const at = {
            line: source.split("\n").findIndex((row) => row.includes(`\`${field}\``)) + 1,
        };
        report(
            VOCABULARY_DOC,
            `the vocabulary table states ${field}, which the registry does not hold`,
            at,
        );
    }
}

checkVocabularyDoc();

let beings = 0;
for (const file of markdownFiles(CONTENT_DIR)) {
    const source = fs.readFileSync(file, "utf8");
    const match = source.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    if (!match) continue;

    let frontmatter;
    try {
        frontmatter = YAML.parse(match[1]);
    } catch {
        continue;
    }
    if (frontmatter?.type !== "being") continue;
    beings += 1;

    const lastLine = match[1].split("\n").length + 1;
    const data = frontmatter.data ?? {};
    checkValue(file, source, "data.gender", data.gender, lastLine);

    const appearance = data.appearance;
    if (isUnstated(appearance)) continue;
    if (typeof appearance !== "object" || Array.isArray(appearance)) {
        report(
            file,
            "data.appearance takes a map of appearance fields",
            locate(source, "appearance", lastLine),
        );
        continue;
    }

    for (const key of Object.keys(appearance)) {
        if (APPEARANCE_KEYS.includes(key)) continue;
        report(
            file,
            `data.appearance holds no field ${key}; it takes ${APPEARANCE_KEYS.join(", ")}`,
            locate(source, key, lastLine),
        );
    }

    for (const key of ["eye_color", "hair_color", "skin_color", "complexion"]) {
        checkValue(file, source, `data.appearance.${key}`, appearance[key], lastLine);
    }

    const features = appearance.extra_features;
    if (isUnstated(features)) continue;
    if (!Array.isArray(features)) {
        report(
            file,
            "data.appearance.extra_features takes a list",
            locate(source, "extra_features", lastLine),
        );
        continue;
    }
    for (const feature of features) {
        if (typeof feature === "string" && feature.trim() !== "") continue;
        report(
            file,
            `data.appearance.extra_features holds ${JSON.stringify(feature)}; each entry is a phrase`,
            locate(source, "extra_features", lastLine),
        );
    }
}

if (errors > 0) {
    console.error(
        `${errors} appearance ${errors === 1 ? "finding" : "findings"} across ${beings} being notes.`,
    );
    process.exitCode = 1;
}
