/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { readTree } from "./lexicon-pages.mjs";
import { analyse, checkWord, LEXICON, readPage } from "./aelwythi-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree();

const run = (text = lexicon, earth = null, notes = tree) =>
    analyse({ lexFile: LEXICON, lexText: text, tree: notes, earth }).findings;
const errorsOf = (text, earth) => run(text, earth).filter((f) => f.severity === "error");

/** The page with the first line starting `start` changed by `change`. */
function rowEdited(start, change) {
    const lines = lexicon.split("\n");
    const at = lines.findIndex((line) => line.startsWith(start));
    assert(at !== -1, `the page holds a row starting ${start}`);
    lines[at] = change(lines[at]);
    return lines.join("\n");
}

test("the Aelwythi page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a registered name built from no listed element is an error", () => {
    const broken = rowEdited("| **Ashford**", (line) =>
        line.replace("**Ashford**", "**Zzqxford**"),
    );
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Zzqxford") && f.message.includes("listed elements"),
        ),
    );
});

test("a Built from cell that does not spell the name is an error", () => {
    const broken = rowEdited("| **Ashford**", (line) =>
        line.replace("`ash` + `ford`", "`ash` + `dale`"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("Ashford")));
});

test("a name of a note in scope missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Ashford**"))
        .join("\n");
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Ashford") && f.message.includes("not in the register"),
        ),
    );
});

test("a row naming a note that does not carry the name is an error", () => {
    const broken = rowEdited("| **Ashford**", (line) =>
        line.replace("place-ashford", "place-greywater"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("Ashford")));
});

test("a name standing in both the register and the outside table is an error", () => {
    const row = lexicon.split("\n").find((l) => l.startsWith("| **Ashford**"));
    assert(row, "the register holds Ashford");
    const broken = `${lexicon.trimEnd()}\n${row}\n`;
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Ashford") && f.message.includes("outside the pattern"),
        ),
    );
});

test("an outside name that the elements do build is an error", () => {
    const broken = rowEdited("| **Aelwyth**", (line) => line.replace("**Aelwyth**", "**Ashford**"));
    assert(errorsOf(broken).some((f) => f.message.includes("Ashford")));
});

test("an element no registered name uses is an error", () => {
    const broken = rowEdited("| `ash`", (line) => line.replace("`ash`", "`oakx`"));
    assert(errorsOf(broken).length > 0);
});

test("an Earth word list hit on an attested name is a warning, never an error", () => {
    const earth = { lists: new Map([["testlist", new Set(["ashford"])]]), morphemes: [] };
    const found = run(lexicon, earth).filter((f) => f.message.includes("testlist"));
    assert(found.length > 0);
    assert(found.every((f) => f.severity === "warning"));
});

test("a coined word that hits an Earth list is an error", () => {
    const page = readPage(lexicon);
    const earth = { lists: new Map([["testlist", new Set(["oakford"])]]), morphemes: [] };
    const result = checkWord("Oakford", page, earth);
    assert(result.problems.some((p) => p.includes("testlist")));
});

test("checkWord builds a new name from the listed elements", () => {
    const page = readPage(lexicon);
    assert.deepEqual(checkWord("Ashby", page, null, "byname").parts, ["ash", "by"]);
    assert.equal(checkWord("Zzqxford", page, null, "place").parts, null);
});
