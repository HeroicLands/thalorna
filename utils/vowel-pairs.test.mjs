/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { groupsOf, languageName, vowelPairFindings } from "./vowel-pairs.mjs";

const guide = `---
shortcode: prnncthlrn
data:
  sounds:
    letters:
      - {letters: [a], kind: vowel}
      - {letters: [ai], kind: vowel pair}
      - {letters: [au], kind: vowel pair}
      - {letters: [ei], kind: vowel pair}
      - {letters: [aa], kind: long vowel}
      - {letters: [ie], kind: vowel pair, tongue: [skill-onelng]}
      - {letters: [b], kind: consonant}
---
body
`;

const note = (words, extra = "") =>
    `---\nname: {full: Test}\nshortcode: testlng\ndata:\n${extra}  words:\n${words
        .map((w) => `    - {form: ${w}, gloss: x}`)
        .join("\n")}\n---\nbody\n`;

const common = groupsOf(guide, "skill-testlng");
const guide2 = guide;

test("the guide's vowel pairs and long vowels are the common groups", () => {
    assert.deepEqual([...common].sort(), ["aa", "ai", "au", "ei"]);
});

test("a group limited to a tongue counts only for that tongue", () => {
    assert.ok(groupsOf(guide, "skill-onelng").has("ie"));
    assert.ok(!common.has("ie"));
});

test("bare pairs, groups or not, pass", () => {
    assert.deepEqual(vowelPairFindings(note(["kaira", "baab", "koa", "kao"]), common), []);
});

test("a diaeresis splitting a group the language note declares passes", () => {
    const extra = "  sounds:\n    letters:\n      - {letters: [ue], kind: vowel pair}\n";
    assert.deepEqual(vowelPairFindings(note(["tsuë"], extra), common), []);
    assert.equal(vowelPairFindings(note(["tsuë"]), common).length, 1);
});

test("a diaeresis that splits a listed group passes", () => {
    assert.deepEqual(vowelPairFindings(note(["kaü", "kaïra", "meï"]), common), []);
});

test("a diaeresis on a pair that is no group changes nothing and is reported", () => {
    const hits = vowelPairFindings(note(["koä", "kaü", "ë"]), common);
    assert.deepEqual(
        hits.map((h) => [h.form, h.pair]),
        [
            ["koä", "oa"],
            ["ë", "e"],
        ],
    );
});

test("a needless diaeresis is reported at its pair", () => {
    const hits = vowelPairFindings(note(["bika", "koä"]), common);
    assert.equal(hits.length, 1);
    assert.equal(hits[0].form, "koä");
    assert.equal(hits[0].pair, "oa");
    assert.equal(hits[0].line, 7);
    assert.equal(hits[0].column, 15);
});

test("an acute on a group still counts as the group, and a grave never joins one", () => {
    assert.deepEqual(vowelPairFindings(note(["káïra", "bàäl"]), common).length, 1);
    assert.deepEqual(vowelPairFindings(note(["káïra"]), common), []);
});

test("an acute on the second vowel sounds it apart", () => {
    assert.deepEqual(vowelPairFindings(note(["koá"]), common), []);
});

test("y is a consonant", () => {
    assert.deepEqual(
        vowelPairFindings(note(["kyë", "yaï"]), common).map((h) => h.form),
        ["kyë"],
    );
});

test("Aelwythi is held to the standard like any language", () => {
    const text = note(["lië"]).replace("shortcode: testlng", "shortcode: aelwythilng");
    const hits = vowelPairFindings(text, common);
    assert.equal(hits.length, 1);
    assert.equal(languageName(text), "aelwythilng");
});

test("groups are read left to right and each vowel belongs to one group", () => {
    assert.deepEqual(vowelPairFindings(note(["aia", "aiai", "auei"]), groupsOf(guide2)), []);
    const hits = vowelPairFindings(note(["aëa", "aiï"]), groupsOf(guide2));
    assert.deepEqual(
        hits.map((h) => h.pair),
        ["ae", "ii"],
    );
});

test("a CRLF language note and a CRLF guide are read", () => {
    const crlf = (t) => t.replace(/\n/g, "\r\n");
    const groups = groupsOf(crlf(guide2));
    assert.ok(groups.has("ai"));
    const hits = vowelPairFindings(crlf(note(["koä"])), groups);
    assert.equal(hits.length, 1);
    assert.equal(hits[0].line, 6);
});

test("each occurrence is reported at its own column", () => {
    const text = `---\nshortcode: x\ndata:\n  words:\n    - {form: koä, variants: [koä, "koä"]}\n---\n`;
    const cols = vowelPairFindings(text, new Set()).map((h) => h.column);
    assert.deepEqual(cols, [15, 31, 37]);
});

const located = (words) =>
    vowelPairFindings(`---\nshortcode: x\ndata:\n  words:\n${words}\n---\n`, new Set()).map(
        (h) => `${h.line}:${h.column}`,
    );

test("a folded block scalar is located at its source line and column", () => {
    assert.deepEqual(located("    - form: >-\n        koä\n      gloss: x"), ["6:10"]);
});

test("a literal block scalar is located at its source line and column", () => {
    assert.deepEqual(located("    - form: |-\n        koä\n      gloss: x"), ["6:10"]);
});

test("an escaped quoted scalar is located at the escape that spells the vowel", () => {
    assert.deepEqual(located('    - form: "k\\x6F\\xE4"'), ["5:15"]);
    assert.deepEqual(located('    - form: "\\x6B\\x6F\\xE4"'), ["5:18"]);
    assert.deepEqual(located("    - form: 'koä'"), ["5:15"]);
});
