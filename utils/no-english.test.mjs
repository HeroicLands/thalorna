/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The corpus never names the reader's language.
 *
 * "English" is an Earth word, and the setting has no "Common tongue" standing
 * for the language a page is read in. Both are refused in every note, README and
 * table under `assets/content`, and in the lexicon data files, wherever they
 * stand: prose, a tag, a pronunciation guide or a comment. A name is recast as a
 * gloss or a rendering, and a sound is described without naming a language.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const ENGLISH = /\benglish\b/i;
// Capitalized only: "common speech" in lower case is an in-setting lingua franca.
const COMMON = /\bCommon[- ](?:tongue|Tongue|Speech)\b/;
const CONTENT_DIR = "assets/content";
const DATA_FILES = ["utils/nordmal-concordance.json"];

/**
 * @param {string} dir
 * @returns {string[]} every file beneath `dir`
 */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

/**
 * @param {string} file
 * @param {string} text
 * @returns {string[]} one `file:line: text` finding per offending line
 */
export function findEnglish(file, text) {
    return text
        .split("\n")
        .flatMap((line, i) =>
            ENGLISH.test(line) || COMMON.test(line) ?
                [`${file}:${i + 1}: ${line.trim().slice(0, 120)}`]
            :   [],
        );
}

test("a row naming the word is found", () => {
    assert.equal(findEnglish("a.md", "ok\n| x | `english` |\nfine").length, 1);
    assert.equal(findEnglish("a.md", "as in English").length, 1);
    assert.equal(findEnglish("a.md", "englishman").length, 0);
    assert.equal(findEnglish("a.md", "the Common tongue calls it").length, 1);
    assert.equal(findEnglish("a.md", "a Common-tongue name").length, 1);
    assert.equal(findEnglish("a.md", "the common tongue of an empire").length, 0);
});

test("no note, README or lexicon data file says English", () => {
    const files = [...walk(CONTENT_DIR).filter((f) => /\.(md|json|ya?ml)$/.test(f)), ...DATA_FILES];
    const findings = files.flatMap((f) => findEnglish(f, fs.readFileSync(f, "utf8")));
    assert.deepEqual(findings, []);
});
