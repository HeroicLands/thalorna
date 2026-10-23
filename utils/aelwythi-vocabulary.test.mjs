/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { coreReport } from "@heroiclands/package-build/engine/core-report";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import {
    lexicalSectionsFor,
    insertLexicalSections,
} from "@heroiclands/package-build/engine/lexical-sections";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { NOTE_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";
import { applyMap, compileMap } from "@heroiclands/package-build/engine/text-maps";
import { renderRuns, runContext } from "@heroiclands/package-build/engine/content-scripts";
import { nativeLookup } from "@heroiclands/package-build/engine/map-lexicon";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";

function note(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const language = note("assets/content/Skills/Languages/Aelwythi.md");
const inventory = note("assets/content/Reference/Core_Vocabulary.md");
const spelling = note("assets/content/Lore/Scripts/Aelwythi_Semaron_Spelling.md");
const glossaryWords = language.fm.data.words.filter(
    (word) =>
        WORD_CLASS_BASES.find(({ token }) => token === parseWordClass(word.class).base)?.glossary,
);
const records = [language, inventory, spelling].map((value) => ({
    ...value.fm,
    package: "thalorna",
    system: "note",
    file: value.file,
}));

test("Aelwythi records an expression for every concept in the current inventory", () => {
    const expected = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const words = language.fm.data.words;
    const actual = new Set(words.flatMap((word) => [word.concept ?? []].flat()));
    assert.deepEqual(
        [...expected].filter((id) => !actual.has(id)),
        [],
        "missing concepts",
    );
    assert.deepEqual(
        [...actual].filter((id) => !expected.has(id)),
        [],
        "unknown concepts",
    );
    for (const word of words) {
        assert(word.form.trim(), "coverage needs an actual word or expression");
        assert(
            [word.gloss].flat().every((sense) => sense.trim()),
            `${word.form} needs a meaning`,
        );
    }
    const report = coreReport(records, { language: "aelwthlng" });
    assert.equal(report.languages[0].total, expected.size);
    assert.equal(report.languages[0].covered, expected.size);
    assert.deepEqual(report.languages[0].missing, []);
    const projected = dictionaryAndTermRows(records).dictionary;
    assert.equal(
        projected.length,
        glossaryWords.length,
        "the published dictionary includes every glossary word",
    );
    for (const word of glossaryWords) {
        const entry = projected.find(({ name }) => name === word.form);
        assert(entry, `${word.form} must reach the dictionary`);
        assert.deepEqual(
            entry.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
    console.log(`${expected.size} concepts expressed by ${words.length} entries`);
});

test("the expanded Aelwythi entries satisfy the installed frontmatter and lexicon contracts", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index: { notes: [language, inventory] } }), []);
});

test("every Aelwythi expression and declared variant renders through its actual dictionary and font", () => {
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
    const map = compileMap(spelling.fm.data.map);
    const native = nativeLookup(ctx.lexicons.get("aelw"), map.name, "semaron-kuriale");
    const face = resolveScriptFonts(process.cwd()).faces.get("semaron-kuriale");
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    for (const word of language.fm.data.words) {
        for (const form of [word.form, ...(word.variants ?? [])]) {
            const rendered = renderRuns(`[${form}]{.nativefont lang=aelw}`, ctx);
            assert.deepEqual(rendered.errors, [], form);
            const mapped = applyMap(map, form, { font: "semaron-kuriale", native }).text;
            assert(rendered.markdown.includes(mapped), `actual mapped output for ${form}`);
            for (const char of mapped) {
                if (/\s/u.test(char)) continue;
                const glyph = outlines.glyph(char.codePointAt(0));
                assert(face.draws.has(char.codePointAt(0)), `${form}: undeclared glyph ${char}`);
                assert(glyph?.d && glyph.index !== box, `${form}: missing or boxed glyph ${char}`);
            }
        }
    }
});

test("the published word list appears after its reading guidance and before the naming tables", () => {
    const body = language.raw.replace(/^---\n[\s\S]*?\n---\n/, "");
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-aelwthlng");
    assert(sections?.length, "frontmatter must request a real published dictionary");
    const rendered = insertLexicalSections(body, sections).markdown;
    const entries = [...rendered.matchAll(/\.dictionary-entry\}/g)];
    assert.equal(entries.length, glossaryWords.length, "every entry is published once");
    assert(rendered.indexOf("Questions are given") < entries[0].index);
    assert(entries.at(-1).index < rendered.indexOf("## How to read the tables"));
    for (const word of glossaryWords)
        assert(rendered.includes(`**${word.form}**`), `${word.form} needs a visible headword`);
    assert(rendered.includes("_v._"), "word classes reach the reader");
    assert(
        rendered.includes("A testicle; an anatomical use"),
        "modern sense definitions reach the reader",
    );
});
