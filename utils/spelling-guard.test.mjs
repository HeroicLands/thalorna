/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { noteFilesWhere } from "./note-index.mjs";
import * as guard from "./spelling-guard.mjs";

const { alphabetOf, checkWord, main, spellingFindings } = guard;
const additionsOf = (...args) => {
    assert.equal(typeof guard.additionsOf, "function", "the guard exports additionsOf");
    return guard.additionsOf(...args);
};

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

const additionNote = [
    "---",
    "shortcode: x",
    "data:",
    "  sounds:",
    "    letters:",
    "      - {letters: [k, sh], kind: consonant}",
    "      - {letters: [x, bh], kind: consonant}",
    "      - {letters: [ai], kind: consonant}",
    "      - {letters: [ŭ], kind: vowel}",
    "  words:",
    "    - {form: alaxa, gloss: a}",
    "---",
    "",
].join("\n");

test("rule 1: a language narrows the guide and never adds a letter to it", () => {
    assert.deepEqual(rules("alaxa", alphabetOf(guideText, additionNote)), [1]);
    const hits = spellingFindings(additionNote, guideText);
    assert.deepEqual(
        hits.map((h) => h.form),
        ["alaxa"],
    );
});

test("a marked letter keeps its base letter's kind from the guide", () => {
    const note = (entries) =>
        ["---", "shortcode: x", "data:", "  sounds:", "    letters:", ...entries, "---", ""].join(
            "\n",
        );
    const wrong = additionsOf(note(["      - {letters: [á, ä], kind: consonant}"]), alphabet);
    assert.deepEqual(
        wrong.map((a) => [a.letter, a.line]),
        [
            ["á", 6],
            ["ä", 6],
        ],
    );
    assert.match(wrong[0].message, /is a vowel in Pronouncing Thalorna, not a consonant/);
    assert.deepEqual(
        additionsOf(
            note([
                "      - {letters: [á, é, ä, ë], kind: vowel}",
                "      - {letters: [à, ì], kind: short vowel}",
            ]),
            alphabet,
        ),
        [],
    );
});

test("a letter, group or mark a language declares beyond the guide is a finding at its line", () => {
    const found = additionsOf(additionNote, alphabet);
    assert.deepEqual(
        found.map((a) => [a.letter, a.line, a.column]),
        [
            ["x", 7, 20],
            ["bh", 7, 23],
            ["ai", 8, 20],
            ["ŭ", 9, 20],
        ],
    );
    assert.match(found[0].message, /not in Pronouncing Thalorna/);
    assert.match(found[2].message, /vowel pair/);
    const out = [];
    const err = [];
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "alden-spelling-guard-"));
    fs.writeFileSync(path.join(dir, "Test.md"), additionNote);
    try {
        main([path.join(dir, "Test.md")], { out: (s) => out.push(s), err: (s) => err.push(s) });
    } finally {
        fs.rmSync(dir, { recursive: true });
    }
    assert.ok(err.some((e) => /Test\.md:7:20: warning: "x" /.test(e)));
    assert.ok(out.some((o) => /^4 addition\(s\)/.test(o)));
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

test("rule 4: y is never a vowel", () => {
    assert.deepEqual(rules("yala"), []);
    assert.deepEqual(rules("kaya"), []);
    assert.deepEqual(rules("nyala"), []);
    assert.deepEqual(rules("kyta"), [4]);
    assert.deepEqual(rules("ylpe"), [4]);
    assert.deepEqual(rules("ilty"), [4]);
    assert.deepEqual(rules("y"), [4]);
});

test("rule 4: a y after a vowel closes the glide its pair declares", () => {
    for (const word of [
        "kay",
        "seyn",
        "moy",
        "siy",
        "kuy",
        "kay-ta",
        "Kulaywil",
        "K'aypukal",
        "káy",
    ])
        assert.deepEqual(rules(word), [], word);
    assert.ok(alphabet.glides.has("ay") && alphabet.glides.has("uy"));
});

test("rule 4: a glide is not taken before a vowel, so its y starts the next syllable", () => {
    const tokens = (word) => {
        const at = checkWord(word, alphabet);
        return at.map((i) => i.rule);
    };
    assert.deepEqual(tokens("kaya"), []);
    assert.deepEqual(tokens("koyo"), []);
    // A grave vowel opens no glide, so its y stands alone and is a vowel.
    assert.deepEqual(rules("kày"), [4]);
});

test("rule 2: y carries no acute, since it is never a vowel", () => {
    assert.deepEqual(rules("drýenalon"), [2]);
    assert.ok(!alphabet.marks.get("\u0301").letters.has("ý"));
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
    const literal = spellingFindings(noteWith("{form: ka\u0301ty, gloss: t}"), guideText);
    const lineText = noteWith("{form: ka\u0301ty, gloss: t}").split("\n")[4];
    assert.equal(literal[0].column, lineText.indexOf("y") + 1);
    const escaped = noteWith('{form: "ka\\u0301ty", gloss: t}');
    const hits = spellingFindings(escaped, guideText);
    assert.equal(hits[0].column, escaped.split("\n")[4].lastIndexOf("y") + 1);
});

test("a note's findings carry one entry per word with a position", () => {
    const note = `---\nshortcode: x\ndata:\n  words:\n    - {form: kasa, gloss: a}\n    - {form: kaky, gloss: b}\n    - {form: ka, instead: kaky, gloss: c}\n---\n`;
    const hits = spellingFindings(note, guideText);
    assert.equal(hits.length, 1);
    assert.deepEqual([hits[0].form, hits[0].line, hits[0].column], ["kaky", 6, 17]);
});

test("the guard runs over the real corpus without throwing and exits 0", () => {
    const out = [];
    assert.equal(main([], { out: (s) => out.push(s), err: () => {} }), 0);
    assert.ok(out.length > 0);
});

const registerNote = [
    "---",
    "shortcode: x",
    "data:",
    "  register:",
    "    - {name: Kasa, tongue: vylari}",
    "    - {name: Vylacor, tongue: vylari}",
    "    - {name: Cyrwick, tongue: translation}",
    "    - {name: The Cyan Coast, tongue: gloss}",
    "    - {name: Cyrdal, tongue: 'exonym:vylari'}",
    "    - {name: Cyrhold, kind: place}",
    "    - {name: Kasavel, kind: place}",
    "---",
    "",
].join("\n");

test("every register row but an English rendering is checked, at its own row", () => {
    const hits = spellingFindings(registerNote, guideText);
    assert.deepEqual(
        hits.map((h) => [h.form, h.line, h.column]),
        [
            ["Vylacor", 6, 15],
            ["Cyrdal", 9, 14],
            ["Cyrhold", 10, 14],
        ],
    );
    assert.deepEqual(
        hits[0].issues.map((i) => i.rule),
        [4, 1],
    );
    assert.deepEqual(
        hits[1].issues.map((i) => i.rule),
        [1, 4],
    );
});

test("the summary counts the register rows the guard reads", () => {
    const out = [];
    const err = [];
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "alden-spelling-guard-"));
    fs.writeFileSync(path.join(dir, "Register.md"), registerNote);
    try {
        main([path.join(dir, "Register.md")], { out: (s) => out.push(s), err: (s) => err.push(s) });
    } finally {
        fs.rmSync(dir, { recursive: true });
    }
    assert.ok(err.some((e) => /Register\.md:6:15: warning: "Vylacor" /.test(e)));
    assert.ok(out.includes("5 register row(s) checked"), out.join("\n"));
});
