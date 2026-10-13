/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, builtForm, fold, readPage, readTree } from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { allSources } from "./word-lists.mjs";
import { LEXICON, REFUSED_ENDINGS, SOURCES, SPEC, refusedEndings } from "./dunhari-lexicon.mjs";

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

/** The page with one table cell, counted from zero after the leading bar, replaced. */
function cellEdited(start, index, value) {
    return rowEdited(start, (line) => {
        const cells = line.split(/(?<!\\)\|/);
        cells[index + 1] = ` ${value} `;
        return cells.join("|");
    });
}

test("the Dunhari page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a place of the Dunhara missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Shêbarakhend**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Shêbarakhend") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| `vazhmadêr`", 3, "`vazhm-` + `-î`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word closing on a consonant the page does not allow is an error", () => {
    const broken = rowEdited("| `zevrogâr`", (line) => line.replace("`zevrogâr`", "`zevrogâp`"));
    assert(errorsOf(broken).length > 0);
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Shêbarakhend**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const broken = rowEdited("| `velmûz`", (line) =>
        line.replace("`velmûz`", "`marûn`").replace(/\[\[skill-dunharlng[^\]]*\]\]/, "—"),
    );
    const gloss = glossOn(broken, "marûn");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`marûn` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("marûn", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("marûn", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("marûn", "quenya", gloss)), ["warning"]);
});

test("an office of the Sultanate missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Vazhmadêr**"))
        .join("\n");
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Vazhmadêr") && f.message.includes("not in the register"),
        ),
    );
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-dunhariclt" ?
            { ...note, text: `${note.text}\nAsk the Qadi.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Qadi") && f.message.includes("Vazhmadêr"),
        ),
    );
});

test("a retired office written in a note names the form that replaces it", () => {
    const notes = tree.map((note) =>
        note.address === "lore-dunhariclt" ?
            { ...note, text: `${note.text}\nThe Grand Vashkôr speaks.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Vashkôr") && f.message.includes("Vashkadêr"),
        ),
    );
});

const page = readPage(lexicon);

test("the suffix table declares neither -ôr nor -ekh", () => {
    const forms = page.suffixes.map((s) => fold(s.form));
    for (const ending of REFUSED_ENDINGS) assert(!forms.includes(ending), `${ending} is declared`);
});

test("the suffix table declares the endings of offices and places", () => {
    const forms = page.suffixes.map((s) => s.form);
    for (const ending of ["-adêr", "-abûn", "-ogâr", "-âvad", "-akhend", "-akhêm", "-adêz"])
        assert(forms.includes(ending), `${ending} is not declared`);
});

test("no word and no dunhari name closes on -ôr or -ekh, and the Ātárzādi titles pass", () => {
    assert.deepEqual(
        refusedEndings(page).map((r) => r.message),
        [],
    );
    for (const title of ["Dēlkoshekh", "Rōqeshekh"]) {
        const row = page.register.find((r) => r.name === title);
        assert(row, `${title} is in the register`);
        assert.equal(row.tongue, "ashaian");
    }
});

test("a dunhari name closing on -ôr or -ekh, however marked, is refused, and an ashaian one is not", () => {
    for (const name of ["Vashkôr", "Qarvelekh", "Vashkōr", "Qarvelēkh"]) {
        const added = { name, tongue: "dunhari", built: "—", offset: 0 };
        const refused = refusedEndings({ ...page, register: [...page.register, added] });
        assert(
            refused.some((r) => r.message.includes(name)),
            `${name} is not refused`,
        );
    }
    const title = { name: "Dēlkoshekh", tongue: "ashaian", built: "—", offset: 0 };
    assert.deepEqual(refusedEndings({ ...page, register: [title] }), []);
});

test("a suffix row declaring -ôr or -ekh is refused", () => {
    for (const form of ["-ôr", "-ekh"]) {
        const added = { form, replaces: null, makes: "", offset: 0 };
        const refused = refusedEndings({ ...page, suffixes: [...page.suffixes, added] });
        assert(refused.some((r) => r.message.includes(form)));
    }
});

test("each new ending has a word or a register name built on it that recomputes", () => {
    for (const ending of ["-adêr", "-abûn", "-ogâr", "-âvad", "-akhend", "-akhêm", "-adêz"]) {
        const rows = [
            ...page.words.map((w) => ({ name: w.form, built: w.built })),
            ...page.register.filter((r) => r.tongue === "dunhari"),
        ].filter((r) => r.built.includes(`\`${ending}\``));
        assert(rows.length > 0, `no row is built on ${ending}`);
        for (const row of rows) {
            const made = builtForm(row.built, page)?.made;
            assert.equal(made, row.name.toLowerCase(), `${row.name} does not recompute`);
        }
    }
});
