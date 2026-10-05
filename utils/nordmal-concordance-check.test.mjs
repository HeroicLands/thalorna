/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { checkCitations } from "./nordmal-concordance-check.mjs";

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
