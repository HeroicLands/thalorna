/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Notes are named by address; no utility names a file under the content tree.
// The exemptions exercise path handling itself.
const PATTERN = /assets\/content\//;
const EXEMPT = new Set([
    // Checks that a file's name follows from its note; its fixtures are synthetic trees.
    "utils/note-filenames.test.mjs",
    // This guard's own pattern.
    "utils/no-content-paths.test.mjs",
    // Plants synthetic note trees to prove the address-only query guard fails.
    "utils/address-only-queries.test.mjs",
]);

test("no utility names a note by its file or folder", () => {
    const found = [];
    for (const entry of fs.readdirSync(path.join(REPO_ROOT, "utils"), { recursive: true })) {
        const file = `utils/${entry.split(path.sep).join("/")}`;
        const full = path.join(REPO_ROOT, file);
        if (EXEMPT.has(file) || !fs.statSync(full).isFile()) continue;
        const lines = fs.readFileSync(full, "utf8").split("\n");
        lines.forEach((line, index) => {
            if (PATTERN.test(line)) found.push(`${file}:${index + 1}`);
        });
    }
    assert.deepEqual(found, [], "name notes by address through utils/note-index.mjs");
});
