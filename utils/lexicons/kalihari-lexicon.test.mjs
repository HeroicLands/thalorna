/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { LEXICON, SPEC } from "./kalihari-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree(undefined, { titles: SPEC.titles });
const earth = loadEarth(listDirs());
const haveLists = earth.lists.size > 0;

const run = (text = lexicon, lists = null, notes = tree) =>
    analyse({ lexFile: SPEC.lexicon, lexText: text, tree: notes, earth: lists }).findings;
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

test("the Kalihári page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a port of Kalihara missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Ilovanu**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Ilovanu") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `koamanu`", 3, "`koa-` + `vanu-`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a name whose Built from cell does not recompute is an error", () => {
    const broken = cellEdited("| **Nalurithan**", 3, "`nalu-` + `rith-` + `-a`");
    assert(errorsOf(broken).some((f) => f.message.includes("Nalurithan does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `koruvei`", (line) => line.replace("`koruvei`", "`koruvek`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`koruvek` closes on `k`")));
});

test("consonants run past the cluster count are an error", () => {
    const broken = rowEdited("| `koruvei`", (line) => line.replace("`koruvei`", "`korvthei`"));
    assert(errorsOf(broken).some((f) => f.message.includes("runs 3 consonants together")));
});

test("the seam mark is read past, and without that row a custodial word breaks the rules", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| `'`"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("`kaan'sili`") && f.message.includes("not in the letter table"),
        ),
    );
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Ilovanu**", 2, "`valtari`");
    assert(errorsOf(broken).some((f) => f.message.includes("valtari")));
});

test("a coined word that is an Earth word is an error", { skip: !haveLists }, () => {
    const broken = rowEdited("| `olitelinei`", (line) =>
        line.replace("`olitelinei`", "`tarikh`").replace(/\[\[being-[^\]]*\]\]/, "—"),
    );
    assert(errorsOf(broken, earth).some((f) => f.message.includes("`tarikh`")));
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-kaliharanclt" ?
            { ...note, text: `${note.text}\nShips put in at Qasirah.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Qasirah") && f.message.includes("Ilovanu"),
        ),
    );
});
