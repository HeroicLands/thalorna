/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";
const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read("assets/content/Skills/Languages/Osket.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.fm.data.words;
const ordinary = words.filter((w) => eligible.has(parseWordClass(w.class).base));
const ids = (w) => [w.concept ?? []].flat();
const record = { ...language.fm, file: language.file, package: "thalorna", system: "note" };
const dictionary = dictionaryAndTermRows([record]).dictionary;
test("Osket expresses every current core concept with an ordinary word or expression", () => {
    const known = new Set(inventory.fm.data.concepts.map((x) => x.id));
    const covered = new Set(ordinary.flatMap(ids));
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary expressions`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});
test("explicit core nouns, actions and negative clauses retain their distinct roles", () => {
    for (const [id, cls] of [
        ["dream", "n"],
        ["rest", "n"],
        ["conceive", "v"],
        ["nowhere", "v"],
        ["never", "v"],
        ["people", "n"],
    ]) {
        const binding = ordinary.filter((word) => ids(word).includes(id));
        assert.equal(binding.length, 1, id);
        assert.equal(parseWordClass(binding[0].class).base, cls, id);
    }
    for (const id of ["nowhere", "never"]) {
        const binding = ordinary.find((word) => ids(word).includes(id));
        assert(binding.form.includes(" qom qesh "), id);
        assert.equal(binding.form.split(" ").at(-2), "qesh", id);
    }
    const people = ordinary.find((word) => ids(word).includes("people"));
    assert.equal(people.form, "nargh narghem");
    assert(!people.form.includes("ashang"), "people does not require a large count");
});
test("every ordinary Osket entry retains its real class and all published senses", () => {
    for (const word of ordinary) {
        const row = dictionary.find((r) => r.name === word.form.normalize("NFC"));
        assert(row, word.form);
        assert.equal(row.class, word.class, word.form);
        assert.deepEqual(
            row.senses.map((s) => s.text),
            [word.gloss].flat(),
            word.form,
        );
    }
});
test("Osket preserves all original meanings, optional writings and name interpretations", async () => {
    const hash = (value) =>
        crypto
            .createHash("sha256")
            .update(typeof value === "string" ? value : JSON.stringify(value))
            .digest("hex");
    const omitConcept = ({ concept, ...rest }) => rest;
    assert.equal(
        hash(words.slice(0, 21).map(omitConcept)),
        "ae3bdcbd19169e26691b60222df79f23929e31f10e4729be60d663bddfcc5541",
    );
    const fm = structuredClone(language.fm);
    delete fm.data.words;
    // The new repertoire is checked independently by roman-inventories.test.mjs.
    delete fm.data.roman;
    assert.equal(fm.data.fields.pop().name, "Everyday speech");
    assert.equal(hash(fm), "48a4e105c1d0bb0600b54b77a51f95366cb02c6301d15c0f12aa0ce478d351a7");
    const body = splitFrontmatter(language.raw).body.replace(
        /## Everyday speech\n[\s\S]*?(?=## Script & Literacy\n)/u,
        "",
    );
    assert.equal(hash(body), "1b0779ffba8fd49a06d9d80f41764eeca85ed3ad846bbc2ad9c0b8db135e34e9");
    assert(ids(words.find((w) => w.form === "goich")).includes("hearth"));
    assert(ids(words.find((w) => w.form === "shom")).includes("door"));
    const originalData = {
        ...language.fm.data,
        words: words.slice(0, 21),
        fields: language.fm.data.fields.slice(0, -1),
    };
    const originalRows = dictionaryAndTermRows([{ ...record, data: originalData }]).dictionary;
    for (const row of originalRows)
        assert.deepEqual(
            dictionary.find((r) => r.name === row.name),
            row,
            row.name,
        );
    const { pieceGlosses } = await import("@heroiclands/package-build/engine/word-rows");
    const probes = new Set();
    function collect(value) {
        if (Array.isArray(value)) {
            value.forEach(collect);
            return;
        }
        if (!value || typeof value !== "object") return;
        for (const [key, item] of Object.entries(value)) {
            if (
                ["form", "name", "front", "joining", "instead", "near"].includes(key) &&
                typeof item === "string"
            )
                probes.add(item);
            if (["built", "variants", "elements"].includes(key) && Array.isArray(item))
                for (const s of item) if (typeof s === "string") probes.add(s);
            collect(item);
        }
    }
    collect(originalData);
    for (const form of Object.values(originalData.names.given).flat()) probes.add(form);
    for (const form of originalData.names.hearth) probes.add(form);
    const before = pieceGlosses(originalData),
        after = pieceGlosses(language.fm.data);
    for (const form of [...probes].flatMap((f) => [
        f,
        f.toLowerCase(),
        f.replace(/^-+|-+$/gu, ""),
        f.replace(/^-+|-+$/gu, "").toLowerCase(),
        f
            .normalize("NFD")
            .replace(/\p{M}/gu, "")
            .replace(/^-+|-+$/gu, "")
            .toLowerCase(),
    ])) {
        assert.equal(after(form), before(form), `${form}: original piece meaning`);
    }
});
test("the current word, schema and name contracts accept the Osket declarations", async () => {
    const { lintNote } = await import("@heroiclands/package-build/engine/frontmatter-lint");
    const { checkLanguageWords } = await import("@heroiclands/package-build/engine/language-words");
    const { ENGINE_NOTE_SCHEMAS } = await import("@heroiclands/package-build/engine/note-schemas");
    const { NOTE_SCHEMAS } = await import("@heroiclands/package-build/sohl/note-schemas");
    const { namesFindings } = await import("@heroiclands/package-build/engine/language-names");
    const { NOTE_VOCABULARY, BEING_LOOK_VOCABULARY } =
        await import("@heroiclands/package-build/engine/note-vocabulary");
    const options = {
        schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
        vocabulary: NOTE_VOCABULARY,
        addressContext: { package: "thalorna", system: "note" },
    };
    assert.deepEqual(
        lintNote(language, options).filter((x) => x.severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(language), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
    for (const word of words.slice(21)) {
        assert(
            eligible.has(parseWordClass(word.class).base) ||
                (word.class === "pref" && word.form.endsWith("-") && !ids(word).length),
            word.form,
        );
        for (const piece of word.form.includes(" ") ? word.form.split(" ") : [])
            assert(
                ordinary.some((w) => w.form === piece),
                `${word.form}: free component ${piece}`,
            );
    }
});
test("new Osket citations use the full heavy-syllable sound inventory", () => {
    for (const word of words.slice(21))
        for (const part of word.form.split(" ")) {
            assert(/^[abcdeghiklmnopqrstwuyöü]+$/u.test(part), part);
            assert(!/dz|zh|hv|f|v|j|th|dh|ph|c(?!h)/u.test(part), part);
        }
});
test("the actual published list and configured Roman wordbook accept ordinary Osket", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const { unknownWords } = await import("@heroiclands/package-build/engine/run-words");
    const { renderRuns, runContext, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const key = "thalorna-note-skill-" + language.fm.shortcode;
    const published = insertLexicalSections(
        splitFrontmatter(language.raw).body,
        lexicalSectionsFor([record]).get(key),
    ).markdown;
    for (const word of ordinary) {
        assert(published.includes(`**${word.form}**`), word.form);
        for (const gloss of [word.gloss].flat()) {
            const sentence = gloss.charAt(0).toUpperCase() + gloss.slice(1);
            assert(published.includes(sentence), `${word.form}: ${sentence}`);
        }
    }
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const [[lang, definition]] = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert.equal(language.fm.data.writtenIn, undefined);
    const context = runContext({ ...config, rootDir: process.cwd() }, [record]);
    assert(context.wordBooks.has(lang));
    const scan = scanRuns(`[${ordinary[0].form}]{lang=${lang}}`, context);
    assert.deepEqual(scan.errors, []);
    assert.equal(scan.runs[0].tag, definition.tag);
    for (const word of ordinary) {
        assert.deepEqual(unknownWords(word.form, context.wordBooks.get(lang)), [], word.form);
        const rendered = renderRuns(`[${word.form}]{lang=${lang}}`, context);
        assert.deepEqual(rendered.errors, [], word.form);
        assert(rendered.markdown.includes(word.form), word.form);
    }
    const unknown = "qölmarsk";
    assert.equal(context.wordBooks.get(lang).accepts(unknown), false);
    assert.deepEqual(unknownWords(unknown, context.wordBooks.get(lang)), [
        { offset: 0, word: unknown },
    ]);
});
