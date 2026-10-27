/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { encodingReference, referenceContext } from "./encoding-reference.mjs";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { serializeLexicon } from "@heroiclands/package-build/engine/encoding-lexicon";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { parseAddress, renderAddress } from "@heroiclands/package-build/engine/address";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { namesFindings } from "@heroiclands/package-build/engine/language-names";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read(process.env.ELAVENDRI_PATH ?? "assets/content/Skills/Languages/Elavendri.md");
const parent = read("assets/content/Skills/Languages/Aelendi.md");
const imperial = read("assets/content/Skills/Languages/Vylari.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const notes = [language, parent, imperial, inventory];
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
const recordByKey = new Map(
    records.map((record) => [
        renderAddress({
            package: record.package,
            system: "note",
            type: record.type,
            shortcode: record.shortcode,
        }),
        record,
    ]),
);
const familyIndex = {
    notes,
    contentPackage: "thalorna",
    types: new Set(notes.map(({ fm }) => fm.type)),
    addressHit: (key) => recordByKey.get(key),
};
const eligible = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const ids = (word) => [word.concept ?? []].flat();
const nearest = new Map();
for (const [depth, note] of [language, parent].entries())
    for (const word of note.fm.data.words) {
        const key = word.form.normalize("NFC");
        if (!nearest.has(key)) nearest.set(key, { word, depth });
    }
const parentSource = `${parent.fm.type}-${parent.fm.shortcode}`;
const imperialSource = `${imperial.fm.type}-${imperial.fm.shortcode}`;
const donors = new Map([
    [parentSource, parent],
    [imperialSource, imperial],
]);
const localSources = new Set(
    language.fm.data.words
        .filter((word) => word.source?.language === parentSource)
        .map((word) => word.source.form.normalize("NFC")),
);
const inheritedUsable = (word) =>
    !/^n [mfn]$/.test(word.class) &&
    !word.form.includes(" ") &&
    !/kh|gh|dh|'|[bfz]/iu.test(word.form) &&
    !localSources.has(word.form.normalize("NFC"));
const ordinary = [...nearest.values()].filter(
    ({ word, depth }) =>
        eligible.has(parseWordClass(word.class).base) && (!depth || inheritedUsable(word)),
);
const bindings = (id) => ordinary.filter(({ word }) => ids(word).includes(id));

test("Élavendri gives every current core concept an ordinary nearest expression", () => {
    const affirmative = bindings("yes");
    assert.equal(affirmative.length, 1);
    assert.equal(affirmative[0].depth, 1, "the affirmative is a real inherited parent citation");
    const parentYes = parent.fm.data.words.find((word) => ids(word).includes("yes"));
    assert.equal(affirmative[0].word.form, parentYes.form);
    assert.deepEqual(bindings("of-course")[0].word.built, [parentYes.form, "tenri"]);
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const missing = [...known].filter((id) => !bindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary daughter expressions`);
    for (const { word } of ordinary)
        for (const id of ids(word)) assert(known.has(id), `${word.form}: unknown concept ${id}`);
});

test("nearest NFC definitions and their actual senses reach the daughter dictionary", () => {
    const dictionary = dictionaryAndTermRows(records).dictionary.filter(
        ({ language }) => language === "thalorna-note-skill-elvndrlng",
    );
    for (const { word, depth } of nearest.values()) {
        if (!eligible.has(parseWordClass(word.class).base)) continue;
        const row = dictionary.find(({ name }) => name === word.form.normalize("NFC"));
        assert(row, word.form);
        assert.equal(row.depth, depth, word.form);
        assert.equal(row.class, word.class, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Élavendri declarations use the installed word and frontmatter contracts", () => {
    const options = {
        schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
        vocabulary: NOTE_VOCABULARY,
        addressContext: { package: "thalorna", system: "note" },
    };
    assert.deepEqual(
        lintNote(language, options).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index: familyIndex }), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
    for (const word of language.fm.data.words.filter((word) => word.source?.language)) {
        const source = donors.get(word.source.language);
        assert(source, `${word.form}: undeclared source ${word.source.language}`);
        assert(
            source.fm.data.words.some(({ form }) => form === word.source.form),
            `${word.form}: source ${word.source.form}`,
        );
    }
});

test("ordinary core expressions have actual Semaron outlines", () => {
    const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
    const map = encodingReference("elav").encoding;
    const face = resolveScriptFonts(process.cwd()).faces.get(map.font);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    for (const { word } of ordinary.filter(({ word }) => ids(word).length)) {
        const written = encodeWithLanguage(map, word.form, { font: face.slug }).text;
        assert(written.trim(), word.form);
        for (const char of written) {
            if (/\s/u.test(char)) continue;
            const glyph = outlines.glyph(char.codePointAt(0));
            assert(
                face.draws.has(char.codePointAt(0)) && glyph?.d && glyph.index !== box,
                `${word.form}: ${char}`,
            );
        }
    }
});

test("Élavendri publishes nearest meanings and recognizes inherited words in mapped language runs", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const { renderRuns, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-elvndrlng");
    const rendered = insertLexicalSections(splitFrontmatter(language.raw).body, sections).markdown;
    const printable = [...nearest.values()].filter(({ word }) =>
        eligible.has(parseWordClass(word.class).base),
    );
    assert.equal([...rendered.matchAll(/\.dictionary-entry\}/g)].length, printable.length);
    for (const { word } of ordinary) {
        assert(rendered.includes(`**${word.form}**`), `visible headword: ${word.form}`);
        for (const sense of [word.gloss].flat())
            assert(
                rendered.toLowerCase().includes(sense.toLowerCase()),
                `visible sense: ${word.form}`,
            );
    }
    const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = referenceContext({ ...config, rootDir: process.cwd() }, [
        ...records,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const map = encodingReference("elav").encoding;
    const configured = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert.equal(configured.length, 1);
    const [[key, definition]] = configured;
    assert(context.wordBooks.has(key));
    assert(context.lexicons.has(key));
    const face = resolveScriptFonts(process.cwd()).faces.get(map.font);
    const native = serializeLexicon(context.lexicons.get(key));
    const attributes = `lang=${key} enc=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${bindings("yes")[0].word.form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].lang, key);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const needed = new Set(
        ordinary.filter(({ word }) => ids(word).length).map(({ word }) => word.form),
    );
    for (const { word } of ordinary.filter(({ word }) => ids(word).length))
        for (const form of word.built ?? [])
            if (nearest.has(form.normalize("NFC"))) needed.add(form);
    for (const { word } of ordinary.filter(({ word }) => needed.has(word.form))) {
        const output = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(output.errors, [], word.form);
        const mapped = encodeWithLanguage(map, word.form, {
            font: face.slug,
            lexicon: native,
        }).text;
        assert(output.markdown.includes(mapped), `actual mapped word: ${word.form}`);
    }
    const affirmative = dictionaryAndTermRows(records).dictionary.find(
        ({ language: owner, name }) =>
            owner === "thalorna-note-skill-elvndrlng" && name === bindings("yes")[0].word.form,
    );
    assert.equal(affirmative.depth, 1);
    assert.equal(affirmative.etymology.language, canonical(parentSource));
    assert.equal(affirmative.etymology.form, bindings("yes")[0].word.form);
    const unknown = "drindrin";
    assert.equal(context.wordBooks.get(key).accepts(unknown), false);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    for (const char of encodeWithLanguage(map, unknown, { font: face.slug, lexicon: native })
        .text) {
        if (/\s/u.test(char)) continue;
        const point = char.codePointAt(0);
        const glyph = outlines.glyph(point);
        assert(face.draws.has(point) && glyph?.d && glyph.index !== box);
    }
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${key}\` lexicon`));
});
