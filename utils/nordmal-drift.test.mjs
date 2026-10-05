/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { checkDrift } from "./nordmal-drift.mjs";

const table = JSON.parse(fs.readFileSync("utils/nordmal-concordance.json", "utf8"));

function tally() {
    return { kept: new Map(), excluded: new Map(), byGroup: new Map(), byToken: new Map() };
}

for (const [literal, retired] of [
    ["Devotee", "Devotee"],
    ["Wild Hunt", "Wild Hunt"],
    ["Royal Kin", "Royal Kin"],
]) {
    test(`${literal} is kept only in its distinct named files`, () => {
        const keep = table.keep.find((entry) => entry.literal === literal);
        assert(keep?.paths?.length);
        for (const file of keep.paths) {
            assert(fs.existsSync(file), `${file} must remain a real note`);
            assert(fs.readFileSync(file, "utf8").includes(literal));
        }

        const outside = "assets/content/Lore/Bestiary/Constructs.md";
        const files = [
            ...keep.paths.map((file) => ({ file, raw: literal })),
            { file: outside, raw: literal },
        ];
        const findings = checkDrift(
            [{ retired, replacement: "replacement", group: "rank", scoped: false }],
            [keep],
            files,
            new Set(),
            tally(),
        );
        assert.equal(findings.length, 1);
        assert(findings[0].startsWith(`${outside}:1:`));
    });
}

test("the order name is kept in any file but bare Muspell remains retired", () => {
    const keep = table.keep.find((entry) => entry.literal === "Sons of Muspell");
    assert.equal(keep.paths, undefined);
    const file = "assets/content/Lore/Bestiary/Constructs.md";
    const findings = checkDrift(
        [{ retired: "Muspell", replacement: "Eldheim", group: "mythfurniture", scoped: false }],
        [keep],
        [{ file, raw: "Sons of Muspell\nMuspell" }],
        new Set(),
        tally(),
    );
    assert.equal(findings.length, 1);
    assert(findings[0].startsWith(`${file}:2:1:`));
});

test("a global keep entry still protects its spelling everywhere", () => {
    const keep = table.keep.find((entry) => entry.literal === "Haulonna");
    const files = [
        { file: "assets/content/Lore/Bestiary/Constructs.md", raw: "Haulonna" },
        { file: "assets/content/Lore/Bestiary/Undead.md", raw: "Haulonna" },
    ];
    const findings = checkDrift(
        [{ retired: "Haulonna", replacement: "replacement", group: "place", scoped: false }],
        [keep],
        files,
        new Set(),
        tally(),
    );
    assert.deepEqual(findings, []);
});
