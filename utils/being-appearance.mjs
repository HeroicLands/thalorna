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
 * Holds `data.gender`, `data.frame` and the four colour fields under
 * `data.appearance` to a closed vocabulary, so a consumer that branches on one
 * has a list to branch on. `data.appearance.extra_features` is free text and
 * carries whatever the closed fields cannot.
 *
 * The lists describe human beings, and they apply to the subtypes that state
 * them — `character` and `npc`. A field is unstated when it is absent, `null` or
 * `""`, and an unstated field passes. A stated value outside its list fails, as
 * does any key under `data.appearance` that is not one of the five.
 *
 * `complexion` holds one value or several; every entry is held to the list.
 *
 * The vocabulary is also published to authors in the gazetteer README, with a
 * definition for every value. This guard holds the two together: a value or an
 * English reading in one and not the other fails, and so does a value the
 * README defines nothing for.
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const CONTENT_DIR = "assets/content";
const VOCABULARY_DOC = path.join(CONTENT_DIR, "README-gazeteer.md");

/**
 * The closed vocabulary, keyed by the field's dotted path under a note's `data`.
 * Each field maps a value to the English a reader meets. The gazetteer README
 * carries the same values with a definition for each, and `checkVocabularyDoc`
 * holds the two together.
 */
const VOCABULARY = Object.freeze({
    "data.gender": Object.freeze({
        female: "Female",
        male: "Male",
        nonbinary: "Nonbinary",
        none: "None",
        other: "Other",
    }),
    "data.frame": Object.freeze({
        scant: "Scant",
        light: "Light",
        medium: "Medium",
        heavy: "Heavy",
        massive: "Massive",
    }),
    "data.appearance.eye_color": Object.freeze({
        amber: "Amber",
        blue: "Blue",
        brown: "Brown",
        dark_brown: "Dark Brown",
        gray: "Gray",
        green: "Green",
        hazel: "Hazel",
        violet: "Violet",
    }),
    "data.appearance.hair_color": Object.freeze({
        auburn: "Auburn",
        black: "Black",
        blonde: "Blonde",
        brown: "Brown",
        chestnut: "Chestnut",
        dark_blonde: "Dark Blonde",
        dark_brown: "Dark Brown",
        gray: "Gray",
        graying_black: "Graying Black",
        graying_brown: "Graying Brown",
        red: "Red",
        silver: "Silver",
        white: "White",
    }),
    "data.appearance.skin_color": Object.freeze({
        pale: "Pale",
        fair: "Fair",
        light: "Light",
        medium: "Medium",
        olive: "Olive",
        tawny: "Tawny",
        golden: "Golden",
        tanned: "Tanned",
        brown: "Brown",
        dark_brown: "Dark Brown",
        ebony: "Ebony",
    }),
    "data.appearance.complexion": Object.freeze({
        ashen: "Ashen",
        blotchy: "Blotchy",
        chapped: "Chapped",
        clear: "Clear",
        freckled: "Freckled",
        jaundiced: "Jaundiced",
        leathery: "Leathery",
        oily: "Oily",
        pasty: "Pasty",
        pimpled: "Pimpled",
        pockmarked: "Pockmarked",
        rough: "Rough",
        ruddy: "Ruddy",
        sallow: "Sallow",
        scabrous: "Scabrous",
        scarred: "Scarred",
        smooth: "Smooth",
        sun_kissed: "Sun-Kissed",
        sunburnt: "Sunburnt",
        translucent: "Translucent",
        vitiligo: "Vitiligo",
        wan: "Wan",
        weathered: "Weathered",
        wrinkled: "Wrinkled",
    }),
});

/**
 * The being subtypes these fields belong to. A `creature` states none of them,
 * so its colouring is not held to a vocabulary written for human beings.
 */
const SUBTYPES = Object.freeze(["character", "npc"]);

/**
 * `complexion` holds one value or several, because a face carries more than one
 * condition at once — weathered and ruddy, pockmarked and leathery. A single
 * value means a list of one.
 */
const MULTIPLE = Object.freeze(["data.appearance.complexion"]);

/**
 * `clear` says the skin carries no mark, so it cannot stand beside one that
 * says it does.
 */
const MARKS = Object.freeze([
    "blotchy",
    "freckled",
    "pimpled",
    "pockmarked",
    "scabrous",
    "scarred",
]);

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
 * Check one stated value against its field's list.
 *
 * @param {string} file The note.
 * @param {string} source The note's text, for locating the value.
 * @param {string} field The dotted field path.
 * @param {unknown} value What the note states.
 * @param {number} lastLine The note's frontmatter ends here, one-based.
 */
function checkValue(file, source, field, value, lastLine) {
    const permitted = Object.keys(VOCABULARY[field]);
    const key = field.split(".").at(-1);
    if (isUnstated(value)) return;
    const at = locate(source, key, lastLine);
    if (typeof value !== "string") {
        report(
            file,
            `${field} holds ${JSON.stringify(value)}; it takes one of ${permitted.join(", ")}`,
            at,
        );
        return;
    }
    if (permitted.includes(value)) return;
    report(
        file,
        `${field} holds "${value}", which is not in the vocabulary; it takes one of ${permitted.join(", ")}`,
        at,
    );
}

/**
 * Check a field that holds one value or several. A scalar is a list of one.
 *
 * @param {string} file The note.
 * @param {string} source The note's text, for locating the value.
 * @param {string} field The dotted field path.
 * @param {unknown} value What the note states.
 * @param {number} lastLine The note's frontmatter ends here, one-based.
 */
function checkValues(file, source, field, value, lastLine) {
    if (isUnstated(value)) return;
    const key = field.split(".").at(-1);
    const at = locate(source, key, lastLine);
    if (!Array.isArray(value)) {
        checkValue(file, source, field, value, lastLine);
        return;
    }
    if (value.length === 0) {
        report(file, `${field} holds an empty list; leave it unset instead`, at);
        return;
    }
    const seen = new Set();
    for (const entry of value) {
        checkValue(file, source, field, entry, lastLine);
        if (typeof entry !== "string") continue;
        if (seen.has(entry)) report(file, `${field} states ${entry} twice`, at);
        seen.add(entry);
    }
    if (seen.has("clear")) {
        const contradicted = [...seen].filter((entry) => MARKS.includes(entry));
        if (contradicted.length > 0) {
            report(file, `${field} states clear beside ${contradicted.join(", ")}`, at);
        }
    }
}

/**
 * Hold the gazetteer README's published tables and the registry together.
 *
 * Each field has its own table under a `#### \`<field>\`` heading, whose rows are
 * the value, the English a reader meets, and what the value means. All three are
 * checked: a value in one and not the other fails, a disagreeing English fails,
 * and a value with no definition fails.
 */
function checkVocabularyDoc() {
    const source = fs.readFileSync(VOCABULARY_DOC, "utf8");
    const lines = source.split("\n");
    const documented = new Map();
    let field;
    for (const [index, text] of lines.entries()) {
        const heading = text.match(/^#+\s+`(data\.[A-Za-z_.]+)`\s*$/);
        if (heading) {
            field = heading[1];
            documented.set(field, { line: index + 1, rows: new Map() });
            continue;
        }
        if (text.startsWith("#")) {
            field = undefined;
            continue;
        }
        if (!field) continue;
        const row = text.match(/^\|\s*`([a-z0-9_]+)`\s*\|([^|]*)\|(.*)\|\s*$/);
        if (!row) continue;
        documented.get(field).rows.set(row[1], {
            label: row[2].trim(),
            meaning: row[3].trim(),
            line: index + 1,
        });
    }

    for (const [name, permitted] of Object.entries(VOCABULARY)) {
        const published = documented.get(name);
        if (!published) {
            report(VOCABULARY_DOC, `no vocabulary table states ${name}`);
            continue;
        }
        for (const [value, label] of Object.entries(permitted)) {
            const row = published.rows.get(value);
            if (!row) {
                report(VOCABULARY_DOC, `the ${name} table omits ${value}`, {
                    line: published.line,
                });
                continue;
            }
            if (row.label !== label) {
                report(
                    VOCABULARY_DOC,
                    `the ${name} table says ${value} reads "${row.label}"; the registry says "${label}"`,
                    { line: row.line },
                );
            }
            if (row.meaning === "") {
                report(VOCABULARY_DOC, `the ${name} table defines nothing for ${value}`, {
                    line: row.line,
                });
            }
        }
        for (const [value, row] of published.rows) {
            if (value in permitted) continue;
            report(
                VOCABULARY_DOC,
                `the ${name} table states ${value}, which the registry does not permit`,
                { line: row.line },
            );
        }
    }

    for (const name of documented.keys()) {
        if (name in VOCABULARY) continue;
        report(
            VOCABULARY_DOC,
            `a vocabulary table states ${name}, which the registry does not hold`,
            {
                line: documented.get(name).line,
            },
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
    if (!SUBTYPES.includes(frontmatter.subType)) continue;
    beings += 1;

    const lastLine = match[1].split("\n").length + 1;
    const data = frontmatter.data ?? {};
    checkValue(file, source, "data.gender", data.gender, lastLine);
    checkValue(file, source, "data.frame", data.frame, lastLine);

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
        const field = `data.appearance.${key}`;
        const check = MULTIPLE.includes(field) ? checkValues : checkValue;
        check(file, source, field, appearance[key], lastLine);
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
