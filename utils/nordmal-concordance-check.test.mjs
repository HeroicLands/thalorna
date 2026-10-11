/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { checkCitations, checkCompleteness } from "./nordmal-concordance-check.mjs";

const proseRow = {
    oldName: "Ragnar",
    oldPath: "assets/content/People/Source.md",
    oldRefPaths: ["main:assets/content/People/Source.md:10:1"],
    newName: "Hugvin",
    newShortcode: "hugvin",
    newPath: "assets/content/People/Hugvin.md",
    newAddress: "being-hugvin",
};

function completeness(row) {
    return checkCompleteness([row], JSON.stringify({ entries: [row] }));
}

test("a cited prose source path remains valid when the name gains a note", () => {
    assert.deepEqual(completeness(proseRow), []);
});

test("a name that lives only in prose carries cited containing paths", () => {
    assert.deepEqual(
        completeness({
            ...proseRow,
            newShortcode: null,
            newPath: proseRow.oldPath,
            newAddress: null,
        }),
        [],
    );
});

test("a prose source path requires an exact citation path", () => {
    for (const oldRefPaths of [[], ["main:assets/content/People/Source.md.backup:10:1"]]) {
        assert.equal(completeness({ ...proseRow, oldRefPaths }).length, 1);
    }
});

test("old note fields travel together even when its path has a citation", () => {
    const oldNote = { ...proseRow, oldShortcode: "ragnar", oldAddress: "being-ragnar" };
    assert.deepEqual(completeness(oldNote), []);
    for (const field of ["oldShortcode", "oldPath", "oldAddress"]) {
        assert.equal(completeness({ ...oldNote, [field]: null }).length, 1);
    }
});

test("a prose name's new note fields travel together", () => {
    for (const field of ["newShortcode", "newPath", "newAddress"]) {
        assert.equal(completeness({ ...proseRow, [field]: null }).length, 1);
    }
});

// Pin the original visible spelling. Later revisions also contain the valid ASCII
// address `lore-nagengir`, which a whole-line source citation may legitimately find.
const revision = "f974870e6450b556fbf78c96cb2365c0ad9ccade";
const file = "assets/content/Affiliations/Divine/Asguardian/Faith_of_Nahild.md";
const lines = execFileSync("git", ["show", `${revision}:${file}`], {
    encoding: "utf8",
}).split("\n");
const index = lines.findIndex((line) => line.includes("Elite undead warriors"));
assert(index >= 0);
const column = lines[index].indexOf("nágengir") + 1;
assert(column > 0);

function findings(name, offset = 0, withColumn = true) {
    const citation = `${revision}:${file}:${index + 1}${withColumn ? `:${column + offset}` : ""}`;
    const row = { oldName: null, oldAliases: null, newName: name, oldRefPaths: [citation] };
    return checkCitations([row], JSON.stringify({ entries: [row] }));
}

test("capitalized note names accept lowercase sightings at the cited column and line", () => {
    assert.deepEqual(findings("Nágengir"), []);
    assert.deepEqual(findings("Nágengir", 0, false), []);
});

test("citation matching retains accents, names, and exact column positions", () => {
    for (const result of [
        findings("Nagengir"),
        findings("Nagengir", 0, false),
        findings("Minnir"),
        findings("Minnir", 0, false),
        findings("Nágengir", 1),
        findings("Nágengirx"),
    ]) {
        assert.equal(result.length, 1);
        assert.match(result[0], /: error: citation/);
    }
});
