/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { BEING_LOOK_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";
import { VOCABULARY, checkNote, featureProblems } from "./appearance.mjs";

/** A being note whose appearance block is `lines`. */
const note = (lines, frame = "medium") =>
    [
        "---",
        "shortcode: test",
        "type: being",
        "data:",
        `  frame: ${frame}`,
        "  appearance:",
        ...lines.map((l) => `    ${l}`),
        "---",
        "",
        "Body.",
        "",
    ].join("\n");

const CLEAN = [
    "eye_color: dark_brown",
    "hair_color: black",
    "skin_color: olive",
    "complexion: [weathered, scarred]",
    "extra_features:",
    "  - a burn scar on the left forearm",
    "  - a missing finger",
    "  - a tattoo of a knight's helmet on the shoulder",
];

const rules = (lines, frame) => checkNote("n.md", note(lines, frame)).map((f) => f.rule);

test("the vocabulary is the installed package's, not a copy", () => {
    for (const [field, list] of Object.entries(VOCABULARY)) {
        assert.deepEqual(
            list,
            BEING_LOOK_VOCABULARY[field].map(({ value }) => value),
        );
    }
});

test("a clean record has no finding", () => {
    assert.deepEqual(checkNote("n.md", note(CLEAN)), []);
    assert.deepEqual(rules(["complexion: []"]), []);
});

test("a note without data.appearance is not checked", () => {
    assert.deepEqual(checkNote("n.md", "---\ntype: lore\ndata: {}\n---\n"), []);
});

test("rule 1: complexion absent or null", () => {
    assert.deepEqual(rules(["hair_color: black"]), ["complexion-missing"]);
    assert.deepEqual(rules(["complexion: null"]), ["complexion-missing"]);
    assert.deepEqual(rules(["complexion:"]), ["complexion-missing"]);
    assert.deepEqual(rules(["complexion: clear"]), ["complexion-missing"]);
});

test("rule 2: a value outside its vocabulary", () => {
    assert.deepEqual(rules(["complexion: [tanned]"]), ["vocabulary"]);
    assert.deepEqual(rules(["complexion: [weathered, tanned]"]), ["vocabulary"]);
    assert.deepEqual(rules(["complexion: [clear]", "hair_color: gray"]), ["vocabulary"]);
    assert.deepEqual(rules(["complexion: [clear]", "eye_color: weathered"]), ["vocabulary"]);
    assert.deepEqual(rules(["complexion: [clear]", "skin_color: auburn"]), ["vocabulary"]);
    assert.deepEqual(rules(["complexion: [clear]"], "stocky"), ["vocabulary"]);
    assert.deepEqual(rules(['complexion: [""]']), ["vocabulary"]);
});

test("rule 3: a colour or skin condition among the features", () => {
    for (const entry of [
        "auburn hair",
        "pale skin",
        "weathered complexion",
        "freckled",
        "Pox marks",
        "close-cropped gray-streaked hair",
        "bright blue eyes",
        "red eyes",
        "milky white eyes",
        "brown-and-black hair",
    ]) {
        assert.deepEqual(
            rules(["complexion: [clear]", "extra_features:", `  - ${entry}`]),
            ["feature-vocabulary"],
            entry,
        );
    }
});

test("rule 3: a localised mark that mentions skin is allowed", () => {
    for (const entry of [
        "a burn scar on the left forearm",
        "a brand scarred into the skin above the heart",
        "a scar on the left eye",
        "ink-stained fingers",
        "a tattoo of a crown on the chest",
    ]) {
        assert.deepEqual(featureProblems(entry), [], entry);
    }
});

test("rule 4: a non-physical feature", () => {
    const cases = {
        "a mail shirt kept oiled": "gear",
        "carries a heavy battleaxe": "gear",
        "often wears patterned clothing": "gear",
        "a voice pitched to carry": "voice",
        "speaks with a lisp": "voice",
        "fidgets constantly": "behaviour",
        "moves with quiet precision": "behaviour",
        "an infectious grin": "behaviour",
        "startlingly beautiful": "impression",
        "a commanding presence": "impression",
        "Hair: black": "colon",
        "left-handed": "handedness",
        ambidextrous: "handedness",
        sterile: "sterility",
        "boyish face that makes him look younger": "age",
    };
    for (const entry of Object.keys(cases)) {
        assert.deepEqual(
            rules([
                "complexion: [clear]",
                "extra_features:",
                `  - ${JSON.stringify(entry)}`,
            ]).includes("feature-non-physical"),
            true,
            entry,
        );
    }
});

test("rule 4: punctuation other than a hyphen or apostrophe inside a word", () => {
    const flagged = (entry) =>
        rules([
            "complexion: [scarred]",
            "extra_features:",
            `  - ${JSON.stringify(entry)}`,
        ]).includes("feature-non-physical");
    for (const entry of [
        "a scar on the left cheek, faded",
        "a burn scar on the hand—old",
        "a tattoo (blue) on the arm",
        "a scar on the chin.",
        "a scar; a tattoo",
        "a brand on the chest/back",
        "a scar - long",
    ]) {
        assert.equal(flagged(entry), true, entry);
    }
    for (const entry of [
        "ink-stained fingers",
        "a lion's mane tattoo on the chest",
        "a lion’s mane tattoo on the back",
    ]) {
        assert.equal(flagged(entry), false, entry);
    }
});

test("rule 4: impression words are refused even beside a mark", () => {
    for (const entry of [
        "a beautiful tattoo of a crane on the back",
        "handsome",
        "a pretty face",
        "girly features",
        "a boyish face",
        "strikingly elegant",
        "rugged good looks",
    ]) {
        assert.equal(
            rules([
                "complexion: [clear]",
                "extra_features:",
                `  - ${JSON.stringify(entry)}`,
            ]).includes("feature-non-physical"),
            true,
            entry,
        );
    }
});

test("rule 4: temperament and handedness are refused", () => {
    for (const entry of [
        "hyperactive",
        "restless and jittery",
        "a nervous twitchy manner",
        "left-handed",
        "cheerful",
        "shy",
    ]) {
        assert.equal(
            rules([
                "complexion: [clear]",
                "extra_features:",
                `  - ${JSON.stringify(entry)}`,
            ]).includes("feature-non-physical"),
            true,
            entry,
        );
    }
});

test("a visible tremor is a physical mark", () => {
    assert.equal(
        rules(["complexion: [clear]", "extra_features:", "  - trembling hands"]).includes(
            "feature-non-physical",
        ),
        false,
    );
});

test("a finding is located on the offending line and column", () => {
    const [f] = checkNote(
        "n.md",
        note(["complexion: [clear]", "extra_features:", "  - a scar", "  - pale skin"]),
    );
    assert.equal(f.finding.startsWith("n.md:10:9: error: "), true, f.finding);
    const [g] = checkNote("n.md", note(["complexion: [tanned]"]));
    assert.equal(g.finding.startsWith("n.md:7:18: error: "), true, g.finding);
});
