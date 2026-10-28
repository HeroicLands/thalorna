/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import test from "node:test";
import { isDeepStrictEqual } from "node:util";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { withNameForms } from "./encoding-preservation.mjs";

const baseline = "4da8f980e";
const languageFiles = [
    "assets/content/Skills/Languages/Khazri.md",
    "assets/content/Skills/Languages/Sowides.md",
    "assets/content/Skills/Languages/Ekpelu.md",
    "assets/content/Skills/Languages/Taruzeli.md",
];
const read = (file, raw = fs.readFileSync(file, "utf8")) => ({
    raw,
    fm: YAML.parse(splitFrontmatter(raw).yaml),
    body: splitFrontmatter(raw).body,
});
const fromBaseline = (file) =>
    execFileSync("git", ["show", `${baseline}:${file}`], { encoding: "utf8" });
const ordinary = new Set(
    WORD_CLASS_BASES.filter((item) => item.glossary).map((item) => item.token),
);
const ids = (word) => [word.concept ?? []].flat();
const usableForm = (form) =>
    typeof form === "string" &&
    Boolean(form.trim()) &&
    !form
        .trim()
        .split(/\s+/u)
        .some((atom) => atom.endsWith("-"));

function preserves(oldValue, newValue) {
    if (Array.isArray(oldValue)) {
        if (!Array.isArray(newValue)) return false;
        let next = 0;
        return oldValue.every((oldItem) => {
            const found = newValue.findIndex(
                (newItem, index) => index >= next && preserves(oldItem, newItem),
            );
            if (found < 0) return false;
            next = found + 1;
            return true;
        });
    }
    if (oldValue && typeof oldValue === "object")
        return (
            newValue &&
            typeof newValue === "object" &&
            !Array.isArray(newValue) &&
            Object.entries(oldValue).every(
                ([key, value]) => Object.hasOwn(newValue, key) && preserves(value, newValue[key]),
            )
        );
    return Object.is(oldValue, newValue);
}

test("the four expanded languages cover the current core inventory with ordinary expressions", () => {
    const inventory = read("assets/content/Reference/Core_Vocabulary.md");
    const expected = new Set(inventory.fm.data.concepts.map((concept) => concept.id));

    for (const file of languageFiles) {
        const note = read(file);
        const actual = new Set(
            note.fm.data.words
                .filter((word) => {
                    const glosses = Array.isArray(word.gloss) ? word.gloss : [word.gloss];
                    return (
                        ordinary.has(parseWordClass(word.class).base) &&
                        usableForm(word.form) &&
                        glosses.length > 0 &&
                        glosses.every((gloss) => typeof gloss === "string" && gloss.trim())
                    );
                })
                .flatMap(ids),
        );

        for (const word of note.fm.data.words) {
            for (const id of ids(word)) assert(expected.has(id), `${file}: ${word.form}: ${id}`);
        }
        assert.deepEqual(
            [...expected].filter((id) => !actual.has(id)),
            [],
            `${file}: concepts without ordinary expressions`,
        );
        assert.deepEqual(
            [...actual].filter((id) => !expected.has(id)),
            [],
            `${file}: unknown concept IDs`,
        );
        for (const word of note.fm.data.words.filter(
            (item) => ids(item).length && ordinary.has(parseWordClass(item.class).base),
        )) {
            assert(
                usableForm(word.form),
                `${file}: concept-tagged word needs a free word or phrase`,
            );
            const glosses = Array.isArray(word.gloss) ? word.gloss : [word.gloss];
            assert(glosses.length > 0, `${file}: ${word.form} needs a gloss`);
            assert(
                glosses.every((gloss) => typeof gloss === "string" && gloss.trim()),
                `${file}: ${word.form} needs nonempty gloss text`,
            );
        }
    }
});

test("original language entries, metadata and prose are retained", () => {
    for (const file of languageFiles) {
        const before = read(file, fromBaseline(file));
        const after = read(file);
        const oldWords = before.fm.data.words;
        const newWords = after.fm.data.words;

        for (const oldWord of oldWords) {
            const candidates = newWords.filter(
                (word) =>
                    word.form === oldWord.form &&
                    word.class === oldWord.class &&
                    (!Object.hasOwn(oldWord, "tones") ||
                        isDeepStrictEqual(word.tones, oldWord.tones)),
            );
            assert(
                candidates.some((word) =>
                    Object.entries(oldWord).every(([key, value]) => {
                        if (key === "concept")
                            return (
                                ids(word).length >= ids(oldWord).length &&
                                ids(oldWord).every((id) => ids(word).includes(id))
                            );
                        return Object.hasOwn(word, key) && isDeepStrictEqual(word[key], value);
                    }),
                ),
                `${file}: original word record changed: ${oldWord.form}`,
            );
        }

        const oldMetadata = structuredClone(withNameForms(before.fm, after.fm));
        const newMetadata = structuredClone(after.fm);
        delete oldMetadata.data.words;
        delete newMetadata.data.words;
        assert(
            preserves(oldMetadata, newMetadata),
            `${file}: original metadata was removed or changed`,
        );

        const currentBody = after.body.replace(/\s+/gu, " ").trim();
        for (const paragraph of before.body
            .split(/\n\s*\n/u)
            .map((part) => part.replace(/\s+/gu, " ").trim())
            .filter(Boolean))
            assert(
                currentBody.includes(paragraph),
                `${file}: original prose is missing: ${paragraph.slice(0, 80)}`,
            );
    }
});
