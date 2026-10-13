/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { LEXICON, SOURCES, SPEC } from "./osket-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree(undefined, { titles: SPEC.titles });

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

test("the Ösket page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a word in a letter the tongue does not write is an error", () => {
    const broken = rowEdited("| `besk`", (line) => line.replace("`besk`", "`bezk`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`z`")));
});

test("an office of the Ösket missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Cord-keeper**"))
        .join("\n");
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Cord-keeper") && f.message.includes("not in the register"),
        ),
    );
});

test("a compound its parts do not give is an error", () => {
    const broken = rowEdited("| `ghaukwugh`", (line) =>
        line.replace("`ghauk` + `wugh`", "`ghauk` + `böik`"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word opening on a cluster the page does not list is an error", () => {
    const broken = rowEdited("| `besk`", (line) => line.replace("`besk`", "`pkesk`"));
    assert(errorsOf(broken).some((f) => f.message.includes("opens on `pk`")));
});

test("a coined word matching a list is a warning, since the tongue has no source language", () => {
    const broken = rowEdited("| `besk`", (line) => line.replace("`besk`", "`qadür`"));
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`qadür` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(SOURCES, []);
    assert.deepEqual(severities(earthHolding("qadür", "latin", glossOn(broken, "qadür"))), [
        "warning",
    ]);
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-osketclt" ?
            { ...note, text: `${note.text}\nAsk for Qadür at the door.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Qadür") && f.message.includes("Ghuqöm"),
        ),
    );
});
