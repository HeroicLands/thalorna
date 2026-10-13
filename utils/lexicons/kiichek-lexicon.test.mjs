/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { allSources } from "./word-lists.mjs";
import { LEXICON, SOURCES, SPEC } from "./kiichek-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree();

const run = (text = lexicon, lists = null, notes = tree) =>
    analyse({
        lexFile: SPEC.lexicon,
        lexText: text,
        tree: notes,
        earth: lists,
        sources: SPEC.sources,
    }).findings;
const errorsOf = (text, lists, notes) =>
    run(text, lists, notes).filter((f) => f.severity === "error");

/** The page with one table row changed by `change`, failing loudly when no row starts with `start`. */
function rowEdited(start, change) {
    const lines = lexicon.split("\n");
    const at = lines.findIndex((line) => line.startsWith(start));
    assert(at !== -1, `the page holds a row starting ${start}`);
    lines[at] = change(lines[at]);
    return lines.join("\n");
}

/** The page with one table cell, counted from zero after the leading bar, replaced. */
function cellEdited(start, index, value) {
    return rowEdited(start, (line) => {
        const cells = line.split(/(?<!\\)\|/);
        cells[index + 1] = ` ${value} `;
        return cells.join("|");
    });
}

test("the Ki'ichek page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a name of the K'ich'chik lands missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Xelem**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Xelem") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `tz'omalil`", 3, "`tz'om` + `-al`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `tz'omal`", (line) => line.replace("`tz'omal`", "`tz'omay`"));
    assert(errorsOf(broken).some((f) => f.message.includes("tz'omay")));
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Xelem**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a retired form written in a note is an error", () => {
    const note = tree.find((n) => n.address === "affiliation-xelem");
    assert(note, "the tree holds the Xelem polity");
    const written = { ...note, text: `${note.text}\nThe jaguar is the Balam of the south.\n` };
    const notes = tree.map((n) => (n === note ? written : n));
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.file === note.file && f.message.includes("`Balam` is a retired form"),
        ),
    );
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const broken = rowEdited("| `ul'om`", (line) => line.replace("`ul'om`", "`balam`"));
    const gloss = glossOn(broken, "balam");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`balam` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("balam", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("balam", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("balam", "quenya", gloss)), ["warning"]);
});
