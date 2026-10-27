/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { assertEncodingMigrationPreserved } from "./encoding-preservation.mjs";

function fixture() {
    const before = {
        file: "assets/content/Skills/Languages/Dunhari.md",
        fm: {
            type: "skill",
            data: {
                roman: "Qqarvel.",
                writtenIn: { map: "qalezu", font: "qalezu-hand" },
                words: [
                    {
                        form: "Qarvel",
                        class: "n",
                        gloss: "A garden.",
                        concept: "garden",
                        source: { kind: "borrowed", language: "skill-neighbour", form: "Foreign" },
                    },
                ],
                names: { given: ["Qarvel"], metadata: { source: "English Name" } },
                register: [{ name: "Qarvel", tongue: "own" }],
            },
        },
        raw: "---\ntype: skill\n---\nThe English reading stays exactly the same.\n",
    };
    const current = structuredClone(before);
    delete current.fm.data.writtenIn;
    current.fm.data.roman = "qarvel";
    current.fm.data.words[0].form = "qarvel";
    current.fm.data.names.given[0] = "qarvel";
    current.fm.data.register[0].name = "qarvel";
    return { before, current };
}

test("approved spelling-case and presentation changes retain the whole meaning", () => {
    const { before, current } = fixture();
    assert.doesNotThrow(() => assertEncodingMigrationPreserved(current, before));
});
test("migration comparison rejects lost records, changed concepts, senses, names and English readings", () => {
    for (const edit of [
        (note) => {
            note.fm.data.words = [];
        },
        (note) => {
            note.fm.data.words[0].gloss = "A pond.";
        },
        (note) => {
            note.fm.data.words[0].concept = "water";
        },
        (note) => {
            note.fm.data.words[0].form = "qerel";
        },
        (note) => {
            note.fm.data.names.given[0] = "qerel";
        },
        (note) => {
            note.fm.data.names.metadata.source = "english name";
        },
        (note) => {
            note.fm.data.words[0].source.form = "foreign";
        },
        (note) => {
            note.raw = note.raw.replace("English reading", "English meaning");
        },
    ]) {
        const { before, current } = fixture();
        edit(current);
        assert.throws(() => assertEncodingMigrationPreserved(current, before));
    }
});
