/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { LEXICON, SOURCES, SPEC } from "./hvarn-lexicon.mjs";

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

test("the Hvarn page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a vowelless word keeps the rules by its syllabic consonant", () => {
    const syllabic = rowEdited("| Consonants that may carry a syllable", () => "");
    assert(errorsOf(syllabic).some((f) => f.message.includes("`vhrn`")));
});

test("an office of the Hvarn missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Bone-bringer**"))
        .join("\n");
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Bone-bringer") && f.message.includes("not in the register"),
        ),
    );
});

test("a compound its parts do not give is an error", () => {
    const broken = rowEdited("| `dzevdpoudz`", (line) =>
        line.replace("`dzevd` + `poudz`", "`dzevd` + `zourd`"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word opening on a cluster the page does not list is an error", () => {
    const broken = rowEdited("| `vosh`", (line) => line.replace("`vosh`", "`pvosh`"));
    assert(errorsOf(broken).some((f) => f.message.includes("opens on `pv`")));
});

test("a coined word matching a list is a warning, since the tongue has no source language", () => {
    const broken = rowEdited("| `vosh`", (line) => line.replace("`vosh`", "`tudra`"));
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`tudra` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(SOURCES, []);
    assert.deepEqual(severities(earthHolding("tudra", "latin", glossOn(broken, "tudra"))), [
        "warning",
    ]);
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-hvarnclt" ?
            { ...note, text: `${note.text}\nTudra was found under the shelf.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Tudra") && f.message.includes("Tudzelv"),
        ),
    );
});
