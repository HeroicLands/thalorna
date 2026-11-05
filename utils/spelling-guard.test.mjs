/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { noteFilesWhere } from "./note-index.mjs";
import { alphabetOf, checkWord, main, spellingFindings } from "./spelling-guard.mjs";

const [guideFile] = noteFilesWhere((fm) => fm?.type === "doc" && fm?.shortcode === "prnncthlrn");
const guideText = fs.readFileSync(guideFile, "utf8");
const alphabet = alphabetOf(guideText);

const rules = (word, a = alphabet) => checkWord(word, a).map((i) => i.rule);

test("the alphabet is derived from the real guide", () => {
    assert.ok(alphabet.singles.size > 0);
    assert.ok(alphabet.groups.includes("ch"));
    assert.ok(alphabet.singles.has("a") && alphabet.singles.has("'"));
    assert.ok(alphabet.marks.size >= 3);
    assert.ok(!alphabet.singles.has("c") && !alphabet.singles.has("x"));
});

test("rule 1: an undeclared character is one finding", () => {
    assert.deepEqual(rules("kasa"), []);
    assert.deepEqual(rules("chila"), []);
    assert.deepEqual(rules("cala"), [1]);
    assert.deepEqual(rules("alaxa"), [1]);
    assert.deepEqual(rules("Kasa-Tel mi'ka"), []);
});

test("rule 1: a phrase entry may carry the standard roman punctuation, not ; or :", () => {
    assert.deepEqual(rules("kasa tel, mika."), []);
    assert.deepEqual(rules("«kasa?» mika‼"), []);
    assert.deepEqual(rules("kasa; tel"), [1]);
    assert.deepEqual(rules("kasa: tel"), [1]);
});

test("rule 1: letters a language declares are accepted for it only", () => {
    const note = `---\nshortcode: x\ndata:\n  sounds:\n    letters:\n      - {letters: [x], kind: consonant}\n---\n`;
    assert.deepEqual(rules("alaxa", alphabetOf(guideText, note)), []);
    assert.deepEqual(rules("alaxa"), [1]);
});

test("rule 2: a marked letter is on its mark's list, and the acute stands once", () => {
    assert.deepEqual(rules("kásà"), []);
    assert.deepEqual(rules("kasá ésa"), []);
    assert.deepEqual(rules("kçsa"), [1, 1]);
    assert.deepEqual(rules("kŭsa"), [1]);
    assert.deepEqual(rules("ḱasa"), [2]);
    assert.deepEqual(rules("kásáa"), [2]);
});

test("rule 3: a tone stands once, on the first letter of a held vowel", () => {
    assert.deepEqual(rules("kǎara"), []);
    assert.deepEqual(rules("sîir"), []);
    assert.deepEqual(rules("kǎra"), [3]);
    assert.deepEqual(rules("kaǎra"), [3]);
    assert.deepEqual(rules("kǎarûur"), [3]);
});

test("rule 4: y stands only before a vowel", () => {
    assert.deepEqual(rules("yala"), []);
    assert.deepEqual(rules("kaya"), []);
    assert.deepEqual(rules("nyala"), []);
    assert.deepEqual(rules("kay"), [4]);
    assert.deepEqual(rules("kyta"), [4]);
    assert.deepEqual(rules("kay-ta"), [4]);
});

test("rule 3: tone eligibility follows the groups the reading consumes", () => {
    assert.deepEqual(rules("paâa"), [3]);
    assert.deepEqual(rules("pâá"), [3]);
    for (const ok of ["pâa", "pǎa", "onsâa", "ovûu", "pâaa", "paaâa"])
        assert.deepEqual(rules(ok), [], ok);
});

test("rule 1: standard punctuation is matched by its whole source", () => {
    assert.deepEqual(rules("kasa\\/mika"), []);
    assert.deepEqual(rules("kasa\\mika"), [1]);
    assert.deepEqual(rules("kasa tel. mika? a! b, k — t… m/"), []);
});

const noteWith = (entry) => `---\nshortcode: x\ndata:\n  words:\n    - ${entry}\n---\n`;

test("every literal form, plural and variant reaches the check, braces included", () => {
    const form = spellingFindings(noteWith('{form: "xa{la", gloss: test}'), guideText);
    assert.deepEqual(
        form.map((h) => h.form),
        ["xa{la"],
    );
    const plural = spellingFindings(noteWith('{form: kasa, plural: "xa{la", gloss: t}'), guideText);
    assert.deepEqual(
        plural.map((h) => h.form),
        ["xa{la"],
    );
    const variant = spellingFindings(
        noteWith('{form: kasa, variants: ["xa{la"], gloss: t}'),
        guideText,
    );
    assert.deepEqual(
        variant.map((h) => h.form),
        ["xa{la"],
    );
});

test("columns point into the original scalar, not the normalised form", () => {
    const literal = spellingFindings(noteWith("{form: ka\u0301y, gloss: t}"), guideText);
    const lineText = noteWith("{form: ka\u0301y, gloss: t}").split("\n")[4];
    assert.equal(literal[0].column, lineText.indexOf("y") + 1);
    const escaped = noteWith('{form: "ka\\u0301y", gloss: t}');
    const hits = spellingFindings(escaped, guideText);
    assert.equal(hits[0].column, escaped.split("\n")[4].lastIndexOf("y") + 1);
});

test("a note's findings carry one entry per word with a position", () => {
    const note = `---\nshortcode: x\ndata:\n  words:\n    - {form: kasa, gloss: a}\n    - {form: kay, gloss: b}\n    - {form: ka, instead: kay, gloss: c}\n---\n`;
    const hits = spellingFindings(note, guideText);
    assert.equal(hits.length, 1);
    assert.deepEqual([hits[0].form, hits[0].line, hits[0].column], ["kay", 6, 16]);
});

test("the guard runs over the real corpus without throwing and exits 0", () => {
    const out = [];
    assert.equal(main([], { out: (s) => out.push(s), err: () => {} }), 0);
    assert.ok(out.length > 0);
});
