/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";

const read = (file) => YAML.parse(splitFrontmatter(fs.readFileSync(file, "utf8")).yaml);
const language = read("assets/content/Skills/Languages/Tokchili.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.data.words;
const ids = (w) => [w.concept ?? []].flat();

/** A Tokchili form leaves out these sounds, and closes on a vowel, `k` or `s`. */
const keepsPalette = (bare) => !/[rdgjvzq]|th|kh/u.test(bare) && /(?:[aeiou]|k|s)$/u.test(bare);

test("Tokchili expresses every core concept with an ordinary word or phrase", () => {
    const known = new Set(inventory.data.concepts.map((x) => x.id));
    const covered = new Set(
        words.filter((w) => eligible.has(parseWordClass(w.class).base)).flatMap(ids),
    );
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack a word`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});

test("Tokchili words keep the palette: lowercase, no sound the tongue leaves out", () => {
    const roman = new Set(language.data.roman);
    for (const { form } of words)
        for (const part of form.split(" ")) {
            const bare = part.replace(/^-|-$/g, "");
            for (const char of bare) assert(roman.has(char), `${form}: ${char}`);
            assert(keepsPalette(bare), form);
        }
});

test("Tokchili names are built from the elements and keep the palette", () => {
    const { elements, names } = language.data;
    const openings = elements.filter((e) => e.position === "opening");
    const closings = elements.filter((e) => e.position === "closing");
    for (const { form, word } of elements)
        assert(
            words.some((w) => w.form === word),
            `${form}: ${word} is not a word of the language`,
        );
    for (const e of elements)
        for (const example of e.examples ?? []) {
            const built = openings.some(
                (o) =>
                    example.startsWith(o.form.replace(/-$/u, "")) &&
                    closings.some((c) => example === o.form.replace(/-$/u, "") + c.form.slice(1)),
            );
            assert(built, `${example} is not an opening and a closing`);
        }
    for (const name of [...names.given.female, ...names.given.male])
        assert(keepsPalette(name), name);
});

test("Tokchili states each form once", () => {
    const seen = new Set();
    for (const { form } of words) {
        assert(!seen.has(form), form);
        seen.add(form);
    }
});
