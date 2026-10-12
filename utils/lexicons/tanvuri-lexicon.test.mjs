/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { LEXICON, SPEC } from "./tanvuri-lexicon.mjs";

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

test("the Tānvüri page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a caste missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Zhëkzhös**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Zhëkzhös") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| **Tānvür** ", 3, "`tān` + `vōk`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `zhös`", (line) => line.replace("`zhös`", "`zhöp`"));
    assert(errorsOf(broken).length > 0);
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Zhëkzhös**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word that is an Earth word is an error", { skip: !haveLists }, () => {
    const coined = cellEdited("| `nürk`", 4, "—");
    const broken = coined.replace("| `nürk`", "| `rën`");
    assert(errorsOf(broken, earth).some((f) => f.message.includes("`rën`")));
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-tanvuriclt" ?
            { ...note, text: `${note.text}\nAsk the Shükrën.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Shükrën") && f.message.includes("Shüknürk"),
        ),
    );
});

test("an Earth constellation written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-clndrstrlgy" ?
            { ...note, text: `${note.text}\nThe Year of the Vermilion Bird.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Vermilion Bird") && f.message.includes("Star Bird"),
        ),
    );
});
