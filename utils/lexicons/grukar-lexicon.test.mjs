/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { LEXICON, SPEC } from "./grukar-lexicon.mjs";

const lexicon = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : "";
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

test("the Grukar page exists", () => {
    assert(lexicon.length > 0, `${LEXICON} exists`);
});

test("the Grukar page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a name of a caste note missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Grukar-Uk**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Grukar-Uk") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `zrukak`", 3, "`zruk` + `-ok`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `zruk`", (line) => line.replace("`zruk`", "`zrup`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`zrup`")));
});

test("consonants run past the cluster count are an error", () => {
    const broken = rowEdited("| `uzgarn`", (line) => line.replace("`uzgarn`", "`uzgrkarn`"));
    assert(errorsOf(broken).some((f) => f.message.includes("runs 4 consonants together")));
});

test("a sound the transcription does not write is an error", () => {
    const broken = rowEdited("| `krazun`", (line) => line.replace("`krazun`", "`krafun`"));
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("`krafun`") && f.message.includes("not in the letter table"),
        ),
    );
});

test("a coined word that is an Earth word is an error", { skip: !haveLists }, () => {
    const broken = rowEdited("| `gazrun`", (line) =>
        line.replace("`gazrun`", "`krug`").replace(/\[\[skill-grukarlng[^\]]*\]\]/, "—"),
    );
    assert(errorsOf(broken, earth).some((f) => f.message.includes("`krug`")));
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "skill-grukarlng" ?
            { ...note, text: `${note.text}\nOne tribe's warleader was called Voth.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Voth") && f.message.includes("retired"),
        ),
    );
});
