/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import YAML from "yaml";
import test from "node:test";
import { checkConceptList } from "../node_modules/@heroiclands/package-build/engine/core-vocabulary.mjs";
import { lintNote } from "../node_modules/@heroiclands/package-build/engine/frontmatter-lint.mjs";
import { ENGINE_NOTE_SCHEMAS } from "../node_modules/@heroiclands/package-build/engine/note-schemas.mjs";
import { NOTE_SCHEMAS } from "../node_modules/@heroiclands/package-build/sohl/note-schemas.mjs";
import { NOTE_VOCABULARY } from "../node_modules/@heroiclands/package-build/engine/note-vocabulary.mjs";

test("core inventory covers the source requirements without collapsing distinct senses", () => {
    // This structured source audit records each requested expression, including
    // repetitions across categories. It is independent of the inventory being read.
    const source = JSON.parse(
        fs.readFileSync(new URL("./core-inventory-requirements.json", import.meta.url)),
    );
    const path = process.env.CORE_INVENTORY_PATH ?? "assets/content/Reference/Core_Vocabulary.md";
    const raw = fs.readFileSync(path, "utf8");
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    assert(match, "inventory has YAML frontmatter");
    const fm = YAML.parse(match[1]);
    const note = { file: path, raw, fm };
    assert.deepEqual(
        lintNote(note, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
        "inventory frontmatter matches installed data schema",
    );
    assert.deepEqual(checkConceptList(note), [], "installed consumer accepts concept definitions");
    const concepts = fm.data.concepts;
    const byId = new Map(concepts.map((entry) => [entry.id, entry]));
    assert.equal(byId.size, concepts.length, "concept ids are unique");
    assert.equal(source.categories.length, 23, "source has all 23 categories");
    const missing = [
        ...new Set(source.requirements.filter(({ id }) => !byId.has(id)).map(({ id }) => id)),
    ];
    assert.equal(
        missing.length,
        0,
        `${missing.length} requested concepts missing: ${missing.slice(0, 20).join(", ")}`,
    );
    for (const { id } of source.legacy) assert(byId.has(id), `retired legacy id: ${id}`);
    for (const { number, group } of source.categories) {
        assert(
            source.requirements.some((row) => row.category === number),
            `category ${number} has no disposition`,
        );
        assert(
            concepts.some((entry) => entry.group === group),
            `category ${number} has no inventory group`,
        );
    }
    for (const entry of concepts) {
        assert.match(entry.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
        assert(entry.gloss.trim(), `${entry.id} needs a meaning`);
        assert(
            source.legacy.some(({ id }) => id === entry.id) ||
                source.requirements.some(({ id }) => id === entry.id),
            `unsourced concept: ${entry.id}`,
        );
    }
    // These reference-language homographs must never collapse into a claim of equivalent senses.
    for (const ids of [
        ["see-verb", "see-noun"],
        ["hear-verb", "hear-noun"],
        ["smell-verb", "smell-noun"],
        ["taste-verb", "taste-noun"],
        ["touch-verb", "touch-noun"],
        ["drink-verb", "drink-noun"],
        ["sleep-verb", "sleep-noun"],
        ["hope", "hope-verb"],
        ["hurt-pain", "hurt-verb"],
        ["lie-noun", "falsehood"],
        ["lock", "lock-verb"],
        ["end", "end-noun"],
        ["truth", "certainty"],
        ["true", "certain"],
        ["hard-texture", "difficult"],
        ["light-colour", "light-weight"],
        ["right-direction", "right-ethical"],
        ["before-spatial", "before-time"],
        ["love-eros", "love-philia", "love-storge", "love-agape", "lust"],
    ]) {
        assert.equal(
            new Set(ids.map((id) => byId.get(id))).size,
            ids.length,
            `distinct meanings: ${ids.join(", ")}`,
        );
    }
    console.log(
        `${concepts.length} concepts; ${source.categories.length} categories; ${source.requirements.length} source expressions; ${source.legacy.length} legacy ids retained`,
    );
});
