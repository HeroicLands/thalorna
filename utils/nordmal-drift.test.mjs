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

test("a kept phrase protects the retired name inside it, and the bare name is still found", () => {
    const keep = { literal: "Sons of Muspell", kinds: [] };
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

test("a retired name written without its marks is found in Nordmal material", () => {
    const file = "assets/content/Characters/Heroes_and_Knaves/Example.md";
    const findings = checkDrift(
        [{ retired: "Hróarr", replacement: "Hrindvir", group: "given", scoped: false }],
        [],
        [{ file, raw: "Her father, Hroarr, and Hróarr's wagons." }],
        new Set([file]),
        tally(),
    );
    assert.equal(findings.length, 2);
    assert(findings.some((one) => one.startsWith(`${file}:1:13: error: retired name "Hroarr"`)));
    assert(findings.some((one) => one.startsWith(`${file}:1:25: error: retired name "Hróarr"`)));
});

test("the unmarked spelling is another tongue's word outside Nordmal material", () => {
    const file = "assets/content/Skills/Languages/Vylari.md";
    const findings = checkDrift(
        [{ retired: "Magnús", replacement: "Flurnvir", group: "given", scoped: false }],
        [],
        [{ file, raw: "Magnus is a Vylarian name; Magnús is not." }],
        new Set(),
        tally(),
    );
    assert.equal(findings.length, 1);
    assert(findings[0].includes(`retired name "Magnús" survives`));
});

test("a row that retires only a spelling's marks is matched as written", () => {
    const file = "assets/content/Regions/Ankaris/Nordlands/Example.md";
    const pair = { retired: "Lögskaldar", replacement: "Lögskáld", group: "rank", scoped: false };
    const files = [{ file, raw: "the Lögskáldar sit, and the Lögskaldar do not" }];
    const asWritten = checkDrift(
        [{ ...pair, foldable: false }],
        [],
        files,
        new Set([file]),
        tally(),
    );
    assert.equal(asWritten.length, 1);
    assert(asWritten[0].startsWith(`${file}:1:29:`));
    const folded = checkDrift([pair], [], files, new Set([file]), tally());
    assert.equal(folded.length, 2);
});

test("a kept word protects its unmarked spelling from the fold", () => {
    const file = "assets/content/Regions/Ankaris/Nordlands/Example.md";
    const findings = checkDrift(
        [{ retired: "Sígrun", replacement: "x", group: "given", scoped: false }],
        [{ literal: "Sigrún", kinds: [] }],
        [{ file, raw: "Sigrun speaks" }],
        new Set([file]),
        tally(),
    );
    assert.deepEqual(findings, []);
});
