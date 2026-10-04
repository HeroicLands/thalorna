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
    assert.equal(baseline.length - names.length, 1);
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
