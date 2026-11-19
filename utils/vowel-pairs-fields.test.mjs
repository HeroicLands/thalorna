/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { dataFields } from "@heroiclands/package-build/engine/note-vocabulary";
import { WORD_FIELD_PATHS, isWordField, pairInventory } from "./vowel-pairs.mjs";

/** One language-note `data` fragment per word-holding path, with `$` for the form under test. */
const FIXTURES = {
    "data.words.form": "{words: [{form: $, gloss: x}]}",
    "data.words.variants": "{words: [{form: bar, variants: [$], gloss: x}]}",
    "data.words.plural": "{words: [{form: bar, plural: $, gloss: x}]}",
    "data.words.built": "{words: [{form: bar, built: [$], gloss: x}]}",
    "data.affixes.form": "{affixes: [{form: -$, gloss: x}]}",
    "data.affixes.front": "{affixes: [{form: -bar, front: -$, gloss: x}]}",
    "data.affixes.replaces": "{affixes: [{form: -bar, replaces: $, gloss: x}]}",
    "data.affixes.examples": "{affixes: [{form: -bar, examples: [$], gloss: x}]}",
    "data.older.form": "{older: [{form: $, gloss: x}]}",
    "data.elements.form": "{elements: [{form: $-, sense: x}]}",
    "data.elements.variants": "{elements: [{form: bar-, variants: [$-], sense: x}]}",
    "data.elements.examples": "{elements: [{form: bar-, examples: [$], sense: x}]}",
    "data.elements.word": "{elements: [{form: bar-, word: $, sense: x}]}",
    "data.elements.joining": "{elements: [{form: -bar, joining: -$jar, sense: x}]}",
    "data.retired.instead": "{retired: [{form: bar, instead: $, why: x}]}",
    "data.cognates.forms.*": "{cognates: [{forms: {skill-other: $}, gloss: x}]}",
    "data.cognates.proto": "{cognates: [{forms: {skill-other: bar}, proto: $, gloss: x}]}",
    "data.callingNames.closings.form": "{callingNames: {closings: [{form: -$, usual: man}]}}",
    "data.negation.particle": "{negation: {particle: $}}",
    "data.sounds.finals.final": "{sounds: {finals: [{final: $}]}}",
    "data.sounds.joining.example":
        "{sounds: {joining: [{first: [a], second: [b], written: x, example: $}]}}",
    "data.sounds.mutations.example":
        "{sounds: {mutations: [{mutation: m, sound: p, becomes: v, example: $}]}}",
    "data.sounds.frames.examples.*":
        "{sounds: {frames: [{frame: f, shape: K1aK2, class: [n], makes: x, examples: {b-r: $}}]}}",
    "data.naming.heldFrom.joining":
        "{naming: {heldFrom: [{source: x, takes: element, joining: [-$jar]}]}}",
    "data.naming.heldFrom.elements":
        "{naming: {heldFrom: [{source: x, takes: element, elements: [$-]}]}}",
    "data.naming.nearName.examples.near":
        "{naming: {nearName: {minSyllables: 2, examples: [{near: $, given: Bar}]}}}",
    "data.naming.nearName.examples.given":
        "{naming: {nearName: {minSyllables: 2, examples: [{near: Bar, given: $}]}}}",
    "data.grammar.plural.ending": "{grammar: {plural: [{ending: $, becomes: x}]}}",
    "data.grammar.plural.becomes": "{grammar: {plural: [{ending: x, becomes: $}]}}",
    "data.grammar.verbs.persons.*":
        "{grammar: {verbs: {persons: {I: $, you: '', heShe: '', we: '', youAll: '', they: ''}}}}",
    "data.grammar.verbs.replaces":
        "{grammar: {verbs: {persons: {I: '', you: '', heShe: '', we: '', youAll: '', they: ''}, replaces: $}}}",
    "data.grammar.agreement.endings": "{grammar: {agreement: {classes: [adj], endings: [$, a]}}}",
    "data.grammar.participles.root": "{grammar: {participles: {root: [$], affixes: [-bar]}}}",
    "data.grammar.participles.affixes": "{grammar: {participles: {root: [bar], affixes: [$]}}}",
};

const audit = (fragment, form) => {
    const text = `---\ntype: skill\nsubType: language\nshortcode: one\ndata: ${fragment.replaceAll("$", form)}\n---\n`;
    return pairInventory([{ file: "one.md", text }], { languages: { one: { note: "skill-one" } } });
};

/** Whether a dotted path names a declared field, following maps, lists and `*` map keys. */
const declared = (path) => {
    let fields = dataFields("skill");
    const parts = path.split(".").slice(1);
    for (const [i, part] of parts.entries()) {
        if (part === "*") return i === parts.length - 1;
        const spec = fields?.find((field) => field.name === part);
        if (!spec) return false;
        if (i === parts.length - 1) return true;
        fields = spec.fields ?? spec.entries?.fields;
    }
    return false;
};

test("every fixture covers one word-holding path and every path has one", () => {
    assert.deepEqual(Object.keys(FIXTURES).sort(), [...WORD_FIELD_PATHS].sort());
});

test("every word-holding path is a field the language schema declares", () => {
    for (const path of WORD_FIELD_PATHS) assert.ok(declared(path), path);
});

test("a path is a word field regardless of list position", () => {
    assert.equal(isWordField(["data", "elements", 4, "joining"]), true);
    assert.equal(isWordField(["data", "naming", "heldFrom", 0, "joining", 2]), true);
    assert.equal(isWordField(["data", "elements", 4, "sense"]), false);
});

for (const [path, fragment] of Object.entries(FIXTURES))
    for (const form of ["tay", "sey", "toy"]) {
        test(`${path} reports a closing ${form.slice(1)}`, () => {
            const report = audit(fragment, form);
            assert.ok(
                report.findings.some((hit) => hit.pair === form.slice(1)),
                JSON.stringify(report.findings),
            );
        });
    }

test("a closing ai, ei or oi in a word-holding field passes", () => {
    for (const [path, fragment] of Object.entries(FIXTURES))
        for (const form of ["tai", "sei", "toi"])
            assert.deepEqual(audit(fragment, form).findings, [], `${path} ${form}`);
});
