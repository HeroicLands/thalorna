/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readPage, readTree } from "./lexicon-pages.mjs";
import { earthHolding, glossOn } from "./earth-fixture.mjs";
import { allSources, earthHits } from "./word-lists.mjs";
import {
    LEXICON,
    MIN_LENGTH,
    SOURCES,
    SPEC,
    markedVowel,
    syllables,
    wordChecks,
} from "./tanvuri-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree(undefined, { titles: SPEC.titles });

const run = (text = lexicon, lists = null, notes = tree) =>
    analyse({
        lexFile: SPEC.lexicon,
        lexText: text,
        tree: notes,
        earth: lists,
        sources: SPEC.sources,
        minLength: SPEC.minLength,
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

test("the Scope names the region by its real shortcode", () => {
    const parents = readPage(lexicon).scope.find((r) => r.kind === "parent");
    assert(parents.values.includes("tantsouregin"));
    assert(!parents.values.includes("tanvurrgn"));
});

test("a caste missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Zhazhò**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Zhazhò") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| **Tāntsou** ", 3, "`tān` + `vōk`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

/** The messages the word checks give a form edited into the row of `root`. */
const wordErrors = (root, form) =>
    errorsOf(rowEdited(`| \`${root}\``, (line) => line.replace(`\`${root}\``, `\`${form}\``)))
        .map((f) => f.message)
        .filter((m) => m.startsWith(`\`${form}\``));

test("a word closing on a consonant the page does not allow is an error", () => {
    assert(wordErrors("zhò", "zhòp").length > 0);
});

test("the page states the Finals table the syllable check reads", () => {
    const { finals } = readPage(lexicon);
    assert(Array.isArray(finals) && finals.length > 0);
    assert(finals.includes("uo") && finals.includes("eng"));
});

test("a final the Finals table does not list is an error", () => {
    assert(wordErrors("hò", "hoi").some((m) => m.includes("Finals table")));
});

test("an initial the Letters table does not write is an error", () => {
    assert(wordErrors("hò", "qò").length > 0);
});

test("a syllable with two tone marks is an error", () => {
    assert(wordErrors("chài", "chàì").some((m) => m.includes("at most one")));
});

test("a tone mark off the vowel the marking rule names is an error", () => {
    assert(wordErrors("chài", "chaì").some((m) => m.includes("belongs on `a`")));
    assert(wordErrors("zhuo", "zhùo").some((m) => m.includes("belongs on `o`")));
});

test("a mark that is no tone mark is an error", () => {
    assert(wordErrors("hò", "hǒ").length > 0);
});

test("two roots that differ only in tone are accepted, and two identical with their tone are not", () => {
    const form = (w) => wordErrors("wén", w);
    assert.deepEqual(
        form("wèn").filter((m) => !m.includes("listed twice")),
        [],
    );
    const twice = errorsOf(rowEdited("| `wèn`", (line) => line.replace("`wèn`", "`wén`"))).map(
        (f) => f.message,
    );
    assert(twice.some((m) => m.includes("`wén` is listed twice")));
});

test("the roots differ in more than tone except the pairs the page lists", () => {
    const fold = (f) => f.normalize("NFD").replace(/\p{M}/gu, "");
    const forms = readPage(lexicon).words.map((w) => w.form.normalize("NFC"));
    const pairs = [];
    for (let i = 0; i < forms.length; i += 1)
        for (let j = i + 1; j < forms.length; j += 1)
            if (fold(forms[i]) === fold(forms[j]))
                pairs.push([forms[i], forms[j]].sort().join(" "));
    const listed = lexicon
        .split("### Tones")[1]
        .split("### Word edges")[0]
        .split("\n")
        .filter((l) => l.startsWith("| _"))
        .map((l) =>
            [...l.matchAll(/_([^_]+)_/g)]
                .map((m) => m[1].replace(",", ""))
                .sort()
                .join(" "),
        );
    assert.deepEqual(pairs.sort(), listed.sort());
});

test("the syllable reader cuts compounds at the next initial", () => {
    const rules = {
        initials: ["zh", "ch", "sh", "ts", "t", "w", "n", "h", "g"],
        codas: ["n", "ng"],
    };
    const cut = (w) => syllables(w, rules)?.map((s) => s.initial + s.vowels.join("") + s.coda);
    assert.deepEqual(cut("tānwén"), ["tān", "wén"]);
    assert.equal(cut("héngèn")?.join(""), "héngèn");
    assert.equal(cut("xx"), undefined);
    assert.equal(cut("wénn"), undefined);
});

test("the tone mark goes on a, else e, else o, else the last vowel", () => {
    assert.equal(markedVowel(["i", "a", "o"]), 1);
    assert.equal(markedVowel(["i", "e"]), 1);
    assert.equal(markedVowel(["o", "u"]), 0);
    assert.equal(markedVowel(["u", "i"]), 1);
});

test("the word checks name no fault in a well-formed word", () => {
    const page = readPage(lexicon);
    assert.deepEqual(wordChecks({ form: "wēng" }, page), []);
    assert.deepEqual(wordChecks({ form: "chiao" }, page), []);
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Zhazhò**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word copying its source language is an error, and any other match a warning", () => {
    const coined = cellEdited("| `nong`", 4, "—");
    const broken = coined.replace("| `nong`", "| `ba`");
    const gloss = glossOn(broken, "ba");
    const source = allSources(SOURCES)[0];
    const severities = (earth) =>
        run(broken, earth)
            .filter((f) => f.message.includes("`ba` is a word in the"))
            .map((f) => f.severity);
    assert.deepEqual(severities(earthHolding("ba", source, gloss)), ["error"]);
    assert.deepEqual(severities(earthHolding("ba", source, "a quince")), ["warning"]);
    assert.deepEqual(severities(earthHolding("ba", "quenya", gloss)), ["warning"]);
});

test("the word lists are compared from two letters, since a syllable is short", () => {
    assert.equal(MIN_LENGTH, 2);
    const earth = earthHolding("ha", "chinese", "dark");
    assert.equal(earthHits("ha", earth, { gloss: "dark", sources: ["chinese"] }).length, 0);
    assert.equal(
        earthHits("ha", earth, { gloss: "dark", sources: ["chinese"], minLength: MIN_LENGTH })
            .length,
        1,
    );
});

test("a Mandarin syllable is the same form whatever its tone", () => {
    const earth = earthHolding("hou", "chinese", "marquis");
    const hits = earthHits("hòu", earth, { gloss: "marquis", sources: ["chinese"], minLength: 2 });
    assert.equal(hits[0]?.severity, "error");
});

test("a retired name written in a note is an error", () => {
    const notes = tree.map((note) =>
        note.address === "lore-tantsouclt" ?
            { ...note, text: `${note.text}\nAsk the Shükrën.\n` }
        :   note,
    );
    assert(
        errorsOf(lexicon, null, notes).some(
            (f) => f.message.includes("Shükrën") && f.message.includes("Shuonong"),
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
