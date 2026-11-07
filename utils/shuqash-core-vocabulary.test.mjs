/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";
import { notePath } from "./note-index.mjs";

const read = (file) => YAML.parse(splitFrontmatter(fs.readFileSync(file, "utf8")).yaml);
const language = read(notePath("skill-shuqashlng"));
const inventory = read(notePath("doc-coreconcepts"));
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.data.words;
const ids = (w) => [w.concept ?? []].flat();

// A vowel sound can have several letters. Read the guide's longest groups,
// including its rule that y before a vowel begins the next syllable.
const sounds = read(notePath("doc-prnncthlrn")).data.sounds.letters;
const vowelSounds = new Set(
    sounds.filter((row) => row.kind.includes("vowel")).flatMap((row) => row.letters),
);
const singleVowels = new Set([...vowelSounds].filter((letters) => letters.length === 1));
const groups = [...vowelSounds]
    .filter((letters) => letters.length > 1)
    .sort((a, b) => b.length - a.length);
function hasHiatus(form) {
    let precedingVowel = false;
    for (let at = 0; at < form.length;) {
        const group = groups.find(
            (letters) =>
                form.startsWith(letters, at) &&
                !(letters.endsWith("y") && singleVowels.has(form[at + letters.length])),
        );
        const token = group ?? form[at];
        const vowel = vowelSounds.has(token);
        if (vowel && precedingVowel) return true;
        precedingVowel = vowel;
        at += token.length;
    }
    return false;
}

test("the no-hiatus palette counts guide vowel sounds, including groups", () => {
    for (const form of ["tumai", "tumei", "tumoi", "shiyawa", "tuyawa"])
        assert.equal(hasHiatus(form), false, form);
    for (const form of ["tumaia", "tumea", "tui", "tuiy", "taaai"])
        assert.equal(hasHiatus(form), true, form);
});

test("Shuqash expresses every core concept with an ordinary word or phrase", () => {
    const known = new Set(inventory.data.concepts.map((x) => x.id));
    const covered = new Set(
        words.filter((w) => eligible.has(parseWordClass(w.class).base)).flatMap(ids),
    );
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack a word`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});

test("Shuqash words keep the palette: lowercase, no sound the tongue leaves out, no two vowel sounds together", () => {
    const roman = new Set(language.data.roman);
    for (const { form } of words)
        for (const part of form.split(" ")) {
            const bare = part.replace(/^-|-$/g, "");
            for (const char of bare) assert(roman.has(char), `${form}: ${char}`);
            assert(!/[bdfgjrvxz']|c(?!h)|th|kh|ng/u.test(bare), form);
            assert(!hasHiatus(bare), form);
            assert(/(?:[aeiou]|sh|[qlnkywtpsm])$/u.test(bare), form);
        }
});

test("Shuqash states each form once", () => {
    const seen = new Set();
    for (const { form } of words) {
        assert(!seen.has(form), form);
        seen.add(form);
    }
});
