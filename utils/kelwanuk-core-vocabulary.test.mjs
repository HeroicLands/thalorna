/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";

const read = (file) => YAML.parse(splitFrontmatter(fs.readFileSync(file, "utf8")).yaml);
const language = read("assets/content/Skills/Languages/Kelwanuk.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.data.words;
const ids = (w) => [w.concept ?? []].flat();

test("Kelwanuk expresses every core concept with an ordinary word or phrase", () => {
    const known = new Set(inventory.data.concepts.map((x) => x.id));
    const covered = new Set(
        words.filter((w) => eligible.has(parseWordClass(w.class).base)).flatMap(ids),
    );
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack a word`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});

test("Kelwanuk words keep the palette: lowercase, no sound the tongue leaves out", () => {
    const roman = new Set(language.data.roman);
    for (const { form } of words)
        for (const part of form.split(" ")) {
            const bare = part.replace(/^-|-$/g, "");
            for (const char of bare) assert(roman.has(char), `${form}: ${char}`);
            assert(!/[cfjqrvxz]|sh|th|dh|kh|gh|zh|ng|ny/u.test(bare), form);
            assert((bare.match(/'/g) ?? []).length <= 1, form);
            assert(/(?:[aiou]|s|k|l|m|n|t)$/u.test(bare), form);
            assert(/^(?:kw|gw|ts|[^aeiou']?)[aeiou]/u.test(bare), form);
        }
});

/** A Kelwanuk form uses no sound the tongue leaves out, and closes on a vowel, `s`, `k`, `l`, `m`, `n` or `t`. */
const keepsPalette = (bare) =>
    !/[cfjqrvxz]|sh|th|dh|kh|gh|zh|ng|ny/u.test(bare) && /(?:[aiou]|s|k|l|m|n|t)$/u.test(bare);

test("Kelwanuk names are two whole words of the language and keep the palette", () => {
    const { elements, names } = language.data;
    const bare = (e) => e.form.replace(/^-|-$/gu, "");
    const firsts = elements.filter((e) => e.position !== "closing").map(bare);
    const lasts = elements.filter((e) => e.position !== "opening").map(bare);
    for (const e of elements) {
        assert.equal(bare(e), e.word, `${e.form}: the element is the whole word`);
        assert(
            words.some((w) => w.form === e.word),
            `${e.form}: ${e.word} is not a word of the language`,
        );
    }
    const built = (name) => firsts.some((a) => lasts.some((b) => name === a + b));
    for (const e of elements)
        for (const example of e.examples ?? [])
            assert(built(example), `${example} is not a first and a last element`);
    for (const name of [...names.given.female, ...names.given.male]) {
        assert(built(name), `${name} is not built from the elements`);
        assert(keepsPalette(name), name);
    }
});

test("Kelwanuk states each form once", () => {
    const seen = new Set();
    for (const { form } of words) {
        assert(!seen.has(form), form);
        seen.add(form);
    }
});
