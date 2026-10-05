/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { corpus, judge, lexiconFrom, withGods } from "./nordmal-lexicon.mjs";

const rule = withGods(
    lexiconFrom(fs.readFileSync("assets/content/Skills/Languages/Nordmal.md", "utf8")),
);
const table = JSON.parse(fs.readFileSync("utils/nordmal-concordance.json", "utf8"));

test("explicit given-name exemptions preserve clan validation and published lists", () => {
    const entry = table.entries.find((row) => row.newName === "Gróa the Seidr of Norgaad");
    assert.deepEqual(entry.kinds, []);
    const baseline = corpus(rule).names;
    assert(baseline.some((row) => row.file === entry.newPath && row.name === "Gróa"));
    assert(judge("Gróa", "given", rule).length > 0);
    const { names } = corpus(rule, table);
    assert(!names.some((row) => row.file === entry.newPath && row.kind === "given"));
    assert(
        names.some(
            (row) =>
                row.file === entry.newPath && row.kind === "clan" && row.name === "Nalthendikh",
        ),
    );
    assert(names.some((row) => row.name === "Tvarnynda" && row.listed));
    assert.deepEqual(judge("Tvarnynda", "given", rule), []);
    assert.equal(
        names.filter((row) => row.file === entry.newPath && row.kind === "given").length,
        0,
    );
});

test("a concordance row with a Nordmal class keeps its given name subject to validation", () => {
    const classified = structuredClone(table);
    classified.entries.find((row) => row.newName === "Gróa the Seidr of Norgaad").kinds = ["given"];
    assert(
        corpus(rule, classified).names.some((row) => row.name === "Gróa" && row.kind === "given"),
    );
});

test("an exemption does not cover another name at the same path", () => {
    const mismatched = structuredClone(table);
    mismatched.entries.find((row) => row.newName === "Gróa the Seidr of Norgaad").newName =
        "Invented";
    assert(
        corpus(rule, mismatched).names.some((row) => row.name === "Gróa" && row.kind === "given"),
    );
    assert(judge("Invented", "given", rule).length > 0);
});

test("Gróa remains a live short name while its historical identity is preserved", () => {
    const entry = table.entries.find((row) => row.newName === "Gróa the Seidr of Norgaad");
    assert(entry.oldAliases.includes("Gróa"));
    const live = new Set(table.entries.flatMap((row) => [row.newName, ...(row.newAliases ?? [])]));
    assert(live.has("Gróa"));
    assert(entry.newAliases.includes("Gróa"));
});

test("published seasonal vocabulary is accepted without compound derivation", () => {
    const festivals = table.entries.filter((row) =>
        ["Jól", "Sumarmál", "Midsumar", "Vetrnaetr"].includes(row.newName),
    );
    assert.equal(festivals.length, 4);
    for (const entry of festivals) {
        assert.equal(entry.type, "lore");
        assert.equal(entry.subType, "culture");
        assert(rule.kept.has(entry.newName.toLowerCase()));
        assert.deepEqual(judge(entry.newName, "compound", rule), []);
        assert(judge(entry.newName, "given", rule).length > 0);
        assert(judge(entry.newName, "clan", rule).length > 0);
        assert(judge(entry.newName, "place", rule).length > 0);
        assert(judge(entry.newName, "realm", rule).length > 0);
    }
    assert(judge("Unpublished", "compound", rule).length > 0);
});
