/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
    NOTE,
    SINALE,
    analyse,
    check,
    cognates,
    givenName,
    houseName,
    nameLists,
    pour,
    rulesFrom,
} from "./khazari-lexicon.mjs";

const text = fs.readFileSync(NOTE, "utf8");
const sinale = fs.readFileSync(SINALE, "utf8");
const rules = rulesFrom(text);
const errors = (t, s = sinale) => check(t, s).filter((f) => f.severity === "error");

test("the Khazári note obeys its own rules", () => {
    assert.deepEqual(
        errors(text).map((f) => f.message),
        [],
    );
});

test("the cluster rule parts a second consonant outside the joiners", () => {
    const bare = rules.frames.find((f) => f.name === "bare").shape;
    const joiner = rules.joiners[0];
    const other = rules.consonants.find((c) => !rules.joiners.includes(c) && c.length === 1);
    assert.equal(pour(bare, `d-${joiner}-k`, rules), `da${joiner}k`);
    assert.equal(pour(bare, `d-${other}-k`, rules), `da${other}${rules.separator}k`);
});

test("every frame example recomputes and every listed name parses", () => {
    for (const frame of rules.frames.filter((f) => f.classes.includes("name"))) {
        for (const ex of frame.examples) assert(givenName(ex.form, rules, frame.name), ex.form);
    }
    for (const { name } of nameLists(text).house) assert(houseName(name, rules), name);
});

test("a word on an unlisted skeleton is refused", () => {
    const bare = rules.frames.find((f) => f.name === "bare").shape;
    const listed = new Set(rules.skeletons.map((s) => s.form));
    const free = ["p", "b", "t", "d", "k", "g"]
        .flatMap((a) => ["f", "z"].map((b) => `${a}-${b}-p`))
        .find((s) => !listed.has(s));
    assert.equal(analyse(pour(bare, free, rules), rules).ok, false);
});

test("a voice prefix in the wrong form is refused", () => {
    const passive = rules.prefixes.find((p) => p.kind === "voice" && p.beforeStop !== p.otherwise);
    const deed = rules.frames.find((f) => f.name === "deed").shape;
    const onStop = rules.skeletons.find((s) => rules.stops.includes(s.form.split("-")[0])).form;
    const core = pour(deed, onStop, rules);
    assert.equal(analyse(`${passive.beforeStop}${core}-ak`, rules).ok, true);
    assert.equal(analyse(`${passive.otherwise}${core}-ak`, rules).ok, false);
});

test("a given name that breaks its frame is an error at its line", () => {
    const name = text.match(/### Male Given Names\n\n(\p{Lu}\p{L}+)/u)[1];
    const broken = text.replace(`\n\n${name},`, `\n\n${name}x,`);
    assert(errors(broken).some((f) => f.message.includes(`${name}x`)));
});

test("a cognate copy that disagrees with the Sinalë note fails", () => {
    const ours = cognates(text);
    assert(ours, "the Khazári note states a shared-ancestor table");
    const proto = ours.get("accusative").proto;
    const elsewhere = `| Case | Proto-Elder | Sinalë | Khazári |\n| --- | --- | --- | --- |\n| accusative | \`${proto}x\` | \`-n\` | \`-am\` |\n`;
    assert(errors(text, elsewhere).some((f) => /accusative proto/.test(f.message)));
});

test("an exemption carries a gloss and a layer", () => {
    for (const o of rules.older) {
        assert(o.gloss, o.form);
        assert(o.layer, o.form);
    }
});
