/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Every note's file name is its sanitized name.
 *
 * The rule and its two suffixed shapes are stated in `note-filename.mjs`. A
 * note that states no name is exempt and counted.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { expectedNames, sanitizeName } from "./note-filename.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("the sanitizer transliterates, elides apostrophes and keeps the case", () => {
    assert.equal(sanitizeName("Ki'ich'chik"), "Kiichchik");
    assert.equal(sanitizeName("Kenbet’Pat"), "KenbetPat");
    assert.equal(sanitizeName("Jênchái"), "Jenchai");
    assert.equal(sanitizeName("Temple of Two Fires"), "Temple_of_Two_Fires");
    assert.equal(sanitizeName(" (Old) Road -- North "), "Old_Road_North");
    assert.equal(sanitizeName("Ærin Þór"), "AErin_Thor");
});

/**
 * The notes whose path is not the one their name gives them.
 *
 * @param {string} root - The repository root.
 */
function mismatches(root) {
    return expectedNames(root)
        .filter((row) => row.expected !== undefined && row.expected !== row.path)
        .map((row) => `${row.path}: expected ${row.expected} (from "${row.name}")`);
}

test("every note's file name is the sanitized form of its name", () => {
    const rows = expectedNames(REPO_ROOT);
    const exempt = rows.filter((row) => row.exempt);
    test.diagnostic?.(`exempt: ${exempt.length} (${exempt.map((row) => row.path).join(", ")})`);
    const wrong = mismatches(REPO_ROOT);
    assert.equal(wrong.length, 0, `${wrong.length} notes are misnamed:\n${wrong.join("\n")}`);
});

test("the guard fails on a planted mismatch, and suffixes collisions and folders", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "note-filenames-"));
    try {
        const write = (/** @type {string} */ rel, /** @type {string} */ fm) => {
            fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
            fs.writeFileSync(path.join(root, rel), `---\n${fm}\n---\n\nBody.\n`);
        };
        write("assets/content/Places/Old_Name.md", "shortcode: hilen\nname:\n  full: Hilen");
        write("assets/content/Places/Hilen_Hall.md", "shortcode: hall\nname:\n  full: Hilen Hall");
        write("assets/content/Twins/Calypsa.md", "shortcode: calypsa\nname:\n  full: Kalipsa");
        write("assets/content/Twins/x.md", "shortcode: city\nname:\n  full: Kalipsa");
        write(
            "assets/content/Folders/F.md",
            "shortcode: f1\ntype: folder\nname:\n  full: Ki'ich'chik",
        );
        fs.writeFileSync(path.join(root, "assets/content/README.md"), "# Read me\n");

        assert.deepEqual(mismatches(root), [
            "assets/content/Folders/F.md: expected assets/content/Folders/Kiichchik_f1.md (from \"Ki'ich'chik\")",
            'assets/content/Places/Old_Name.md: expected assets/content/Places/Hilen.md (from "Hilen")',
            'assets/content/Twins/Calypsa.md: expected assets/content/Twins/Kalipsa_calypsa.md (from "Kalipsa")',
            'assets/content/Twins/x.md: expected assets/content/Twins/Kalipsa_city.md (from "Kalipsa")',
        ]);
        assert.deepEqual(
            expectedNames(root)
                .filter((row) => row.exempt)
                .map((row) => row.path),
            ["assets/content/README.md"],
        );
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});
