/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";

const read = (file) => YAML.parse(splitFrontmatter(fs.readFileSync(file, "utf8")).yaml);
const language = read("assets/content/Skills/Languages/Tenlaya.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.data.words;
const ids = (w) => [w.concept ?? []].flat();

test("Tenlaya expresses every core concept with an ordinary word or phrase", () => {
    const known = new Set(inventory.data.concepts.map((x) => x.id));
    const covered = new Set(
        words.filter((w) => eligible.has(parseWordClass(w.class).base)).flatMap(ids),
    );
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack a word`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});

test("Tenlaya words keep the palette: lowercase, no sound the tongue leaves out", () => {
    const roman = new Set(language.data.roman);
    for (const { form } of words)
        for (const part of form.split(" ")) {
            const bare = part.replace(/^-|-$/g, "");
            for (const char of bare) assert(roman.has(char), `${form}: ${char}`);
            assert(!/[bdfgrvzjqx]|c(?!h)|th|kh|[aeiou]{2}/u.test(bare), form);
            assert(/(?:[aeiou]|n)$/u.test(bare), form);
        }
});

test("Tenlaya states each form once", () => {
    const seen = new Set();
    for (const { form } of words) {
        assert(!seen.has(form), form);
        seen.add(form);
    }
});
