/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { encodingReference, referenceContext } from "./encoding-reference.mjs";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { serializeLexicon } from "@heroiclands/package-build/engine/encoding-lexicon";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseAddress, renderAddress } from "@heroiclands/package-build/engine/address";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { namesFindings } from "@heroiclands/package-build/engine/language-names";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read(process.env.VALTARI_PATH ?? "assets/content/Skills/Languages/Valtari.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const donors = ["Helonic", "Taruzeli", "Vylari", "Provenzal", "Nordmal", "Sinale", "Aelwythi"].map(
    (name) => read(`assets/content/Skills/Languages/${name}.md`),
);
const notes = [language, inventory, ...donors];
const canonical = (value) =>
    renderAddress(
        parseAddress(value, {
            package: "thalorna",
            system: "note",
            types: new Set(notes.map(({ fm }) => fm.type)),
        }),
    );
const records = notes.map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
    data: {
        ...fm.data,
        ...(fm.data.family ? { family: canonical(fm.data.family) } : {}),
        ...(fm.data.words ?
            {
                words: fm.data.words.map((word) => ({
                    ...word,
                    ...(word.source?.language ?
                        { source: { ...word.source, language: canonical(word.source.language) } }
                    :   {}),
                })),
            }
        :   {}),
    },
}));
const byKey = new Map(
    records.map((record) => [canonical(`${record.type}-${record.shortcode}`), record]),
);
const index = {
    notes,
    contentPackage: "thalorna",
    types: new Set(notes.map(({ fm }) => fm.type)),
    addressHit: (key) => byKey.get(key),
};
const eligible = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const ids = (word) => [word.concept ?? []].flat();
const ordinary = language.fm.data.words.filter(
    (word) =>
        eligible.has(parseWordClass(word.class).base) &&
        !word.form.endsWith("-") &&
        word.field !== "Trade names",
);
const bindings = (id) => ordinary.filter((word) => ids(word).includes(id));

test("Valtari gives every actual core concept an ordinary local expression", () => {
    assert.equal(
        language.fm.data.family,
        undefined,
        "contact vocabulary is not machine inheritance",
    );
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const missing = [...known].filter((id) => !bindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary Valtari expressions`);
    for (const word of language.fm.data.words)
        for (const id of ids(word)) assert(known.has(id), `${word.form}: unknown ${id}`);
});

test("Valtari expressions publish their real classes and full meanings", () => {
    const rows = dictionaryAndTermRows(records).dictionary.filter(
        ({ language: owner }) =>
            owner === canonical(`${language.fm.type}-${language.fm.shortcode}`),
    );
    for (const word of ordinary) {
        const row = rows.find(
            ({ name, class: cls }) => name === word.form.normalize("NFC") && cls === word.class,
        );
        assert(row, word.form);
        assert.equal(row.depth, 0, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Valtari declarations and actual new donor receipts satisfy the contract", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index }), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
    const sources = new Map(donors.map((note) => [`${note.fm.type}-${note.fm.shortcode}`, note]));
    for (const word of language.fm.data.words.filter(({ source }) => source?.language)) {
        const donor = sources.get(word.source.language);
        assert(donor, word.form);
        assert(
            donor.fm.data.words.some(
                (entry) =>
                    entry.form === word.source.form ||
                    (entry.variants ?? []).includes(word.source.form),
            ),
            `${word.form}: ${word.source.form}`,
        );
    }
    assert.equal(language.fm.data.grammar.verbs.invariant, true);
});

test("Valtari uses the actual configured wordbook and drawable Helonika", async () => {
    const { renderRuns, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const spelling = read("assets/content/Lore/Scripts/Helonika_Spelling.md"),
        config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = referenceContext({ ...config, rootDir: process.cwd() }, [
        ...records,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const selected = Object.entries(config.languages).filter(
        ([, entry]) => entry.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert.equal(selected.length, 1);
    const [[key, definition]] = selected;
    assert(context.wordBooks.has(key));
    assert(context.lexicons.has(key));
    const map = encodingReference("valt").encoding,
        face = resolveScriptFonts(process.cwd()).faces.get(map.font),
        outlines = fontOutlines(face.file),
        box = outlines.glyph("c".codePointAt(0)).index,
        native = serializeLexicon(context.lexicons.get(key)),
        attributes = `lang=${key} enc=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${language.fm.data.words[0].form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].lang, key);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const draw = (form) => {
        const text = encodeWithLanguage(map, form, { font: face.slug, lexicon: native }).text;
        assert(text.trim(), form);
        for (const char of text) {
            if (/\s/u.test(char)) continue;
            const point = char.codePointAt(0),
                glyph = outlines.glyph(point);
            assert(face.draws.has(point) && glyph?.d && glyph.index !== box, `${form}: ${char}`);
        }
        return text;
    };
    for (const word of ordinary) {
        const result = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(result.errors, [], word.form);
        assert(result.markdown.includes(draw(word.form)), word.form);
    }
    const unknown = "zabuzabu";
    assert.equal(context.wordBooks.get(key).accepts(unknown), false);
    draw(unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${key}\` lexicon`));
});

test("Valtari new loans stay plain and every expression uses free local words", () => {
    const retired = new Set(
        language.fm.data.retired.map(({ form }) =>
            form.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ),
    );
    for (const word of language.fm.data.words.filter(({ source }) => source?.language)) {
        assert(!/[^aeioubdgklmnprstvwzyf]|th|kh|gh|zh|['’]/u.test(word.form), word.form);
        const clusters = word.form.replace(/sh/gu, "S").split(/[aeiou]/u);
        assert(
            clusters.every((cluster) => cluster.length <= 1),
            `${word.form}: cluster`,
        );
        assert(/[aeiounlr]$/u.test(word.form), word.form);
        assert(!retired.has(word.form), `${word.form}: retired`);
    }
    for (const word of language.fm.data.words.filter(
        ({ built }) => built && !built.some((part) => part.startsWith("-")),
    ))
        for (const component of word.built)
            assert(
                ordinary.some((entry) => entry.form === component),
                `${word.form}: ${component}`,
            );
    assert(bindings("hear-noun").length);
    for (const word of bindings("hear-noun"))
        assert.equal(parseWordClass(word.class).base, "n", word.form);
    assert.equal(language.fm.data.words.find(({ form }) => form === "temadu").class, "adj");
});
