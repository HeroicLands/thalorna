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
    khelathiBeings,
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
