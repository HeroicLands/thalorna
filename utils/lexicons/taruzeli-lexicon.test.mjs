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
import { LEXICON, SOURCES, SPEC } from "./taruzeli-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree();

const run = (text = lexicon, lists = null) =>
    analyse({ lexFile: SPEC.lexicon, lexText: text, tree, earth: lists, sources: SPEC.sources })
        .findings;
const errorsOf = (text, lists) => run(text, lists).filter((f) => f.severity === "error");

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

test("the Tarûzeli page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a name of the Tarûzelian lands missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Hitûsel**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Hitûsel") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `telmum`", 3, "`telm-` + `-ûsh`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `telmum`", (line) => line.replace("`telmum`", "`telmug`"));
    assert(errorsOf(broken).length > 0);
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Hitûsel**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const broken = rowEdited("| `telmum`", (line) => line.replace("`telmum`", "`qatam`"));
    const gloss = glossOn(broken, "qatam");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`qatam` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("qatam", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("qatam", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("qatam", "quenya", gloss)), ["warning"]);
});
