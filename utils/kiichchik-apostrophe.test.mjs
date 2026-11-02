/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Ki'ich'chik text writes its apostrophe as ASCII U+0027.
 *
 * The files read are every note under `Regions/Kiichchik/` and the
 * Ki'i'chek language note; the set is found by walking the tree.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const CONTENT_DIR = "assets/content";
const REGION_DIR = path.join(CONTENT_DIR, "Regions", "Kiichchik");
const LANGUAGE_NOTE = path.join(CONTENT_DIR, "Skills", "Languages", "Kiichek_Language.md");

/** @param {string} dir @returns {string[]} */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });
}

test("Ki'ich'chik notes carry no typographic apostrophe", () => {
    const files = [...walk(REGION_DIR).filter((f) => f.endsWith(".md")), LANGUAGE_NOTE];
    assert.ok(files.length > 1, "no Ki'ich'chik notes found");
    const findings = [];
    for (const file of files) {
        fs.readFileSync(file, "utf8")
            .split("\n")
            .forEach((line, index) => {
                if (line.includes("’")) findings.push(`${file}:${index + 1}`);
            });
    }
    assert.deepEqual(findings, [], `U+2019 found:\n${findings.join("\n")}`);
});
