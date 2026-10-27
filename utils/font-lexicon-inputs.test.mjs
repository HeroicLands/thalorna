/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { test } from "node:test";
import { affixForms, nameForms, TARGETS } from "./font-lexicon-inputs.mjs";
import { convertVeldikko, veldikkoTable } from "./veldikko-reference.mjs";

const glyphNames = [
    ..."pvmtsdnkhlr",
    "dh",
    "ng",
    "carrier",
    ..."aeiouy".split("").map((v) => `vowel.${v}`),
    "vowel.edieresis",
    "long",
    "bar",
];
const fonts = {
    manifest: {
        families: [
            {
                family: "Veldikko",
                codepoints: glyphNames.map((glyph, i) => ({
                    glyph,
                    codepoint: `U+${(0xf5000 + i).toString(16)}`,
                })),
            },
        ],
    },
};
const table = veldikkoTable(fonts);
const glyph = (name) => String.fromCodePoint(0xf5000 + glyphNames.indexOf(name));

test("eight independent font families select their own language documents", () => {
    assert.equal(TARGETS.length, 8);
    assert.deepEqual(TARGETS.find((target) => target.model === "qalezu-hand").languages, ["khel"]);
    assert.deepEqual(TARGETS.find((target) => target.model === "semaron-kuriale").languages, [
        "vyl",
    ]);
    assert.equal(TARGETS.find((target) => target.model === "thuravark-carved").elements, true);
    assert.deepEqual(TARGETS.find((target) => target.model === "helonika").languages, [
        "helo",
        "valt",
        "biza",
        "beth",
    ]);
});
test("registered English labels and other tongues are not Helonic font words", () => {
    assert.deepEqual(
        nameForms(
            {
                names: {
                    pattern: "{given}",
                    metadata: { description: "A prose label" },
                    given: { male: ["Arsos"] },
                },
                register: [
                    { name: "Aghris", tongue: "helonic" },
                    { name: "Academy of Knowledge", tongue: "translation" },
                    { name: "Agápeia", tongue: "byzarian" },
                ],
            },
            "helo",
        ),
        ["Arsos", "Aghris"],
    );
});
test("zero affixes have no font input and ordinary affixes require a form", () => {
    assert.deepEqual(affixForms({ affixes: [{ zero: true }, { form: "-os" }] }), ["-os"]);
    assert.throws(() => affixForms({ affixes: [{}] }), /nonzero.*nonempty form/);
    assert.throws(() => affixForms({ affixes: [{ form: "" }] }), /nonzero.*nonempty form/);
});
test("independent Veldikko model obtains codepoints from font metadata", () => {
    assert.equal(
        convertVeldikko("NUUVA", table),
        glyph("n") + glyph("vowel.u") + glyph("long") + glyph("v") + glyph("vowel.a"),
    );
    assert.equal(
        convertVeldikko("ank", table),
        glyph("carrier") + glyph("vowel.a") + glyph("ng") + glyph("k"),
    );
    assert.equal(
        convertVeldikko("eë-ai", table),
        glyph("carrier") +
            glyph("vowel.edieresis") +
            glyph("long") +
            " " +
            glyph("carrier") +
            glyph("vowel.a") +
            glyph("vowel.i"),
    );
    assert.equal(convertVeldikko("tt", table), glyph("t") + glyph("bar"));
    assert.equal(convertVeldikko("d", table), glyph("d"));
    assert.throws(() => convertVeldikko("tx", table), /"x" at 1/);
    assert.throws(() => veldikkoTable({ manifest: { families: [] } }), /no Veldikko/);
});
