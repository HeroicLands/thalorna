/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import {
    analyse,
    fold,
    lower,
    readPage,
    readTree,
    respell,
    soundProblems,
} from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { allSources } from "./word-lists.mjs";
import { LEXICON, NOTE, SOURCES, SPEC, extraFor } from "./jurthati-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree(undefined, { titles: SPEC.titles });

const run = (text = lexicon, lists = null, notes = tree) =>
    analyse({
        lexFile: SPEC.lexicon,
        lexText: text,
        tree: notes,
        earth: lists,
        sources: SPEC.sources,
        extra: extraFor(text),
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

/** The names the language note lists, every list flattened. */
function noteNames(text = fs.readFileSync(NOTE, "utf8")) {
    const front = YAML.parse(text.match(/^---\n([\s\S]*?)\n---/)[1]);
    const names = front.data?.names ?? {};
    const out = [];
    const walk = (value) => {
        if (Array.isArray(value)) out.push(...value);
        else if (value && typeof value === "object") Object.values(value).forEach(walk);
    };
    for (const [key, value] of Object.entries(names)) if (key !== "pattern") walk(value);
    return out;
}

/** Every listed name the page's sound rules refuse or its name words do not give. */
function nameProblems(names, page = readPage(lexicon)) {
    const given = new Set(page.words.filter((w) => w.cls === "name").map((w) => fold(w.form)));
    const out = [];
    for (const name of names) {
        for (const p of soundProblems(respell(lower(name), page.spellings), page, "jurthati"))
            out.push(`${name} ${p}`);
        if (!given.has(fold(name))) out.push(`${name} is no name word of the lexicon`);
    }
    return out;
}

test("the Jürthāti page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a caste of the realm missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Wòhou**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Wòhou") && f.message.includes("not in the register"),
        ),
    );
});

test("a native reading the change table does not make is an error", () => {
    const broken = rowEdited("| `jén` ", (line) => line.replace("`jen`", "`jén`"));
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("`jén` does not follow from `jén`") &&
                f.message.includes("`jen`"),
        ),
    );
});

test("a native reading that keeps a closing ng is an error", () => {
    const broken = rowEdited("| `téng` ", (line) => line.replace("`tē`", "`teng`"));
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("`teng` does not follow from `téng`") &&
                f.message.includes("`tē`"),
        ),
    );
});

test("a Where phrase the engine does not know is an error", () => {
    const broken = rowEdited("| 2    | `eng`", (line) =>
        line.replace("at the end of a word", "at the close of a verse"),
    );
    assert(errorsOf(broken).some((f) => f.message.includes("not an environment the engine knows")));
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `dōzo`", 3, "`dō` + `zei`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a compound that leaves its second part unvoiced is an error", () => {
    const broken = rowEdited("| `jenjai`", (line) =>
        line.replace("`jenjai`", "`jenchai`").replace("`jen` + `-jai`", "`jen` + `chai`"),
    );
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("`jenchai`") &&
                f.message.includes("sets `chai` unvoiced inside a compound") &&
                f.message.includes("`-jai`"),
        ),
    );
    assert.deepEqual(
        errorsOf(lexicon).filter((f) => f.message.includes("unvoiced")),
        [],
    );
});

test("a compound form that is not its word voiced is an error", () => {
    const broken = lexicon
        .split("\n")
        .map((line) =>
            line.startsWith("| `-jai`") ?
                line.replace("compound form of _chai_", "compound form of _zai_")
            :   line,
        )
        .join("\n");
    assert.notEqual(broken, lexicon);
    assert(
        errorsOf(broken).some(
            (f) =>
                f.message.includes("compound form of `zai`") &&
                f.message.includes("`zai` voiced is `zai`"),
        ),
    );
});

test("a word closing on a consonant other than n is an error", () => {
    const broken = rowEdited("| `ho` ", (line) => line.replace("`ho`", "`hot`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`hot` closes on `t`")));
});

test("two consonants inside a word that are not n and a voiced consonant are an error", () => {
    const broken = rowEdited("| `hojū`", (line) =>
        line.replace("`hojū`", "`hosjū`").replace("`ho` + `-jū`", "—"),
    );
    assert(
        errorsOf(broken).some((f) =>
            f.message.includes("sets `sj` together inside a word, a pair the page does not list"),
        ),
    );
});

test("a vowel the five-vowel table does not hold is an error", () => {
    const broken = rowEdited("| `ho` ", (line) => line.replace("`ho`", "`hö`"));
    assert(errorsOf(broken).some((f) => f.message.includes("`hö` writes `ö`")));
});

test("an ending the suffix table does not list is an error", () => {
    const broken = cellEdited("| `wanū` ", 3, "`wa` + `-mā`");
    assert(errorsOf(broken).some((f) => f.message.includes("a suffix the page does not list")));
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Zhazhò**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const gloss = glossOn(lexicon, "wōne");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(lexicon, earth)
            .filter((f) => f.message.includes("`wōne` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("wōne", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("wōne", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("wōne", "quenya", gloss)), ["warning"]);
});

test("every name the language note lists keeps the sound rules and is a name word of the page", () => {
    const names = noteNames();
    assert(names.length > 0, "the language note lists names");
    assert.deepEqual(nameProblems(names), []);
});

test("a listed name the page does not give, or that breaks the sound rules, is a problem", () => {
    const problems = nameProblems(["Rēwei", "Thālëng", "Rēro"]);
    assert(problems.some((p) => p.startsWith("Thālëng writes")));
    assert(problems.some((p) => p === "Thālëng is no name word of the lexicon"));
    assert(!problems.some((p) => p.startsWith("Rēwei") || p.startsWith("Rēro")));
});
