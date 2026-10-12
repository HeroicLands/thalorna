/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { LEXICON, SPEC } from "./valtari-lexicon.mjs";

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

test("the Valtári page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a name of the language note missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Váltongue**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Váltongue") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `ushador`", 3, "`ushadu` + `-ela`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `pashin`", (line) => line.replace("`pashin`", "`pashik`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`pashik` closes on `k`")));
});

test("consonants run past the cluster count are an error", () => {
    const broken = rowEdited("| `telmusu`", (line) => line.replace("`telmusu`", "`telmsu`"));
    assert(errorsOf(broken).some((f) => f.message.includes("runs 3 consonants together")));
});

test("a throat sound the pidgin does not say is an error", () => {
    const broken = rowEdited("| `idiro`", (line) => line.replace("`idiro`", "`hidiro`"));
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("`hidiro`") && f.message.includes("not in the letter table"),
        ),
    );
});

test("a coined word that is an Earth word is an error", { skip: !haveLists }, () => {
    const broken = rowEdited("| `bunelo`", (line) =>
        line.replace("`bunelo`", "`kalo`").replace(/\[\[skill-valtarlng[^\]]*\]\]/, "—"),
    );
    assert(errorsOf(broken, earth).some((f) => f.message.includes("`kalo`")));
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "skill-valtarlng" ?
            { ...note, text: `${note.text}\nA common trade name is Fâtima.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Fâtima") && f.message.includes("retired"),
        ),
    );
});
