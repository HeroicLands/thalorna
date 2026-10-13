/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { allSources } from "./word-lists.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { LEXICON, SOURCES, SPEC } from "./ekpelu-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree(undefined, { titles: SPEC.titles });

const run = (text = lexicon, lists = null, notes = tree) =>
    analyse({
        lexFile: SPEC.lexicon,
        lexText: text,
        tree: notes,
        earth: lists,
        sources: SPEC.sources,
        extra: SPEC.extra,
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

test("the Ekpelu page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a word closing on a consonant the page does not list is an error", () => {
    const broken = rowEdited("| `biko`", (line) => line.replace("`biko`", "`bikol`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`bikol`")));
});

test("two vowels standing together are an error, since the page lists no pair", () => {
    const broken = rowEdited("| `biko`", (line) => line.replace("`biko`", "`bioko`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`bioko`")));
});

test("a letter outside the letter table is an error", () => {
    const broken = rowEdited("| `biko`", (line) => line.replace("`biko`", "`bifo`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`bifo` writes `f`")));
});

test("a word opening on a pair the page does not list is an error", () => {
    const broken = rowEdited("| `tolu`", (line) => line.replace("`tolu`", "`ptolu`"));
    assert(errorsOf(broken).some((f) => f.message.includes("opens on `pt`")));
});

test("more consonants together than the page allows is an error", () => {
    const broken = rowEdited("| `tolu`", (line) => line.replace("`tolu`", "`tondlu`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`tondlu`")));
});

test("a tradition name its parts do not give is an error", () => {
    const broken = rowEdited("| `luwando`", (line) =>
        line.replace("`luwa` + `-ndo`", "`luwa` + `-ma`"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a note of the tongue missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Ekpelu Language**"))
        .join("\n");
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("Ekpelu Language") && f.message.includes("not in the register"),
        ),
    );
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const broken = rowEdited("| `sepo`", (line) => line.replace("`sepo`", "`tamba`"));
    const gloss = glossOn(broken, "tamba");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`tamba` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("tamba", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("tamba", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("tamba", "quenya", gloss)), ["warning"]);
});

/** The `biko` row with its tones cell, `HL`, replaced by `tones`. */
const bikoTones = (tones) =>
    rowEdited("| `biko`", (line) => line.replace(/\| `HL`\s+\|/, `| ${tones} |`));

test("a word with an empty tones cell is an error", () => {
    assert(errorsOf(bikoTones(" ")).some((f) => f.message.includes("`biko` has no tones")));
});

test("a tone other than H or L is an error", () => {
    assert(
        errorsOf(bikoTones("`HM`")).some((f) =>
            f.message.includes("`biko` has tones `HM`, which are not only H and L"),
        ),
    );
});

test("tones that do not match the syllable count are an error", () => {
    assert(
        errorsOf(bikoTones("`HLH`")).some((f) =>
            f.message.includes("`biko` has 3 tones for 2 syllables"),
        ),
    );
});

test("a built word whose tones differ from its parts is an error", () => {
    const broken = rowEdited("| `luwando`", (line) => line.replace(/`LHL`/, "`LHH`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`luwando` has tones `LHH`")));
});

test("an ending whose tone is changed breaks every word built with it", () => {
    const broken = rowEdited("| `-ndo`", (line) => line.replace(/`L`/, "`H`"));
    const hits = errorsOf(broken).filter((f) => f.message.includes("its parts give"));
    assert(hits.length >= 3);
});
