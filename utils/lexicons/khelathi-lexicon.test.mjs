/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
    NOTE,
    analyse,
    contentTexts,
    khelathiBeings,
    lexiconFrom,
    nearName,
    nearRuleFrom,
    syllables,
} from "./khelathi-lexicon.mjs";

const note = fs.readFileSync(NOTE, "utf8");
const beings = khelathiBeings();

/** The findings of the near-name rule alone. */
const nearFindings = (text = note, cast = beings) =>
    analyse(text, cast).filter((line) => /near name|carries no alias/.test(line));

/** The text with one literal replaced, failing loudly when the literal is absent. */
function edited(from, to, text = note) {
    assert(text.includes(from), `the note no longer holds "${from}"`);
    return text.replace(from, to);
}

test("a syllable is a run of vowels", () => {
    assert.equal(syllables("Gezehutyu"), 4);
    assert.equal(syllables("Lersaîs"), 2);
    assert.equal(syllables("Anlagherhafu"), 5);
});

test("a near name breaks off after the second vowel and holds it long", () => {
    assert.equal(nearName("Anlagherhafu"), "Anlâ");
    assert.equal(nearName("Amqelet-Zelemu"), "Amqê");
    assert.equal(nearName("Legirigulu"), "Legî");
    assert.equal(nearName("Khelosuefu"), "Khelô");
    assert.equal(nearName("Uqetiraku"), "Uqê");
});

test("a vowel already long stays as it is", () => {
    assert.equal(nearName("Imhûgepu"), "Imhû");
    assert.equal(nearName("Khelâden"), "Khelâ");
});

test("the note states the threshold and a worked table", () => {
    const { threshold, examples } = nearRuleFrom(note);
    assert.equal(threshold, 4);
    assert(examples.length > 0);
});

test("every worked near name and every Khelâthi being obeys the rule", () => {
    assert.deepEqual(nearFindings(), []);
});

test("a worked near name that is not its given name's form is refused", () => {
    const found = nearFindings(edited("| `Anlâ`    |", "| `Anla`    |"));
    assert.equal(found.length, 1);
    assert.match(found[0], /`Anla` is not the near name of `Anlagherhafu`, which is `Anlâ`/);
});

test("a worked near name for a short given name is refused", () => {
    const found = nearFindings(
        edited("| `Gulmê`   | `Gulmenwati`     |", "| `Lersâ` | `Lersaîs` |"),
    );
    assert.equal(found.length, 1);
    assert.match(found[0], /`Lersaîs` has 2 syllables/);
});

test("a long-named being without its near name is refused at its name line", () => {
    const cast = [{ file: "x.md", line: 3, given: "Zeshelegezu", aliases: [] }];
    assert.deepEqual(nearFindings(note, cast), [
        "x.md:3: error: `Zeshelegezu` has 5 syllables and carries no alias `Zeshê`",
    ]);
});

test("a short-named being needs no near name", () => {
    assert.deepEqual(
        nearFindings(note, [{ file: "x.md", line: 3, given: "Lersaîs", aliases: [] }]),
        [],
    );
});

test("a note that stops stating the threshold fails loudly", () => {
    const text = edited(
        "**A given name of four syllables or more has a near name**",
        "A name may be shortened",
    );
    assert.throws(() => nearRuleFrom(text), /states no near-name threshold/);
});

/** The findings of the retired-form rule alone. */
const retiredFindings = (texts, text = note) =>
    analyse(text, beings, texts).filter((line) => /retired form/.test(line));

test("the note's retired table is read with what is written instead", () => {
    const { retired } = lexiconFrom(note);
    assert.equal(retired.find((one) => one.name === "Tjelsuk")?.instead, "Tjelsur");
    assert.equal(retired.find((one) => one.name === "zuqal")?.instead, "zuqat");
    assert.equal(retired.find((one) => one.name === "Wal'Enrauqo")?.instead, "Wal'Enraqu");
});

test("no note of the content tree writes a retired form", () => {
    assert.deepEqual(retiredFindings(contentTexts()), []);
});

test("a retired form written in a note is an error at the place it is written", () => {
    const texts = [
        {
            file: "x.md",
            text: "---\ntype: lore\n---\nThe priests of Tjelsuk at Lut-Tjelsuk.",
            literature: false,
        },
    ];
    assert.deepEqual(retiredFindings(texts), [
        "x.md:4:16: error: `Tjelsuk` is a retired form; the setting writes `Tjelsur`",
        "x.md:4:31: error: `Tjelsuk` is a retired form; the setting writes `Tjelsur`",
    ]);
});

test("an address, a literature note, a poem and the retired table itself are not read", () => {
    const texts = [
        {
            file: "a.md",
            text: "See [[lore-tjelsukdty|the god]] and the zuqalu.",
            literature: false,
        },
        { file: "b.md", text: "The old song names Tjelsuk.", literature: true },
        {
            file: "c.md",
            text: "```poetry {lang=en}\nTjelsuk under the water\n```",
            literature: false,
        },
        { file: NOTE, text: note, literature: false },
    ];
    assert.deepEqual(retiredFindings(texts), []);
});

test("a retired form written back into the note's own lists is refused", () => {
    const text = edited("- Wal'Enraqu", "- Wal'Enrauqo");
    const found = retiredFindings([{ file: NOTE, text, literature: false }], text);
    assert.equal(found.length, 1);
    assert.match(found[0], /`Wal'Enrauqo` is a retired form; the setting writes `Wal'Enraqu`/);
});

/** The findings of the word-ending rule alone. */
const endingFindings = (text) =>
    analyse(text, beings).filter((line) => /ends in none of/.test(line));

test("every table of standalone words is read for the word-ending rule", () => {
    const words = lexiconFrom(note).words;
    for (const form of ["qathur", "ṭelqas", "zamlet", "qedlet"]) {
        assert(words.includes(form), `the guard does not read \`${form}\``);
    }
    assert.deepEqual(endingFindings(note), []);
});

test("a word of the counting-house or a kind of work that ends wrongly is refused", () => {
    for (const [from, to] of [
        ["| `qathur` |", "| `qathul` |"],
        ["| `zamlet`   |", "| `zamlel`   |"],
    ]) {
        const found = endingFindings(edited(from, to));
        assert.equal(found.length, 1, `${to} was not refused`);
    }
});
