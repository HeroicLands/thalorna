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
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { namesFindings } from "@heroiclands/package-build/engine/language-names";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";
import { renderRuns, scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import {
    lexicalSectionsFor,
    insertLexicalSections,
} from "@heroiclands/package-build/engine/lexical-sections";

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read(process.env.VEDYARI_PATH ?? "assets/content/Skills/Languages/Vedyari.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const spelling = read("assets/content/Lore/Scripts/Vedyakshara_Spelling.md");
const notes = [language, inventory, spelling];
const records = notes.map(({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" }));
const ids = (word) => [word.concept ?? []].flat();
const eligible = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const free = language.fm.data.words.filter(
    (word) => eligible.has(parseWordClass(word.class).base) && !word.form.endsWith("-"),
);
const bindings = (id) => free.filter((word) => ids(word).includes(id));

test("Vedyari gives every current inventory concept an ordinary free expression", () => {
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const missing = [...known].filter((id) => !bindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack free expressions`);
    for (const word of language.fm.data.words)
        for (const id of ids(word)) {
            assert(known.has(id), `${word.form}: unknown concept ${id}`);
            assert(free.includes(word), `${word.form}: bound or non-dictionary concept binding`);
        }
});

test("every free form retains its actual dictionary senses and class", () => {
    const rows = dictionaryAndTermRows(records).dictionary.filter(
        ({ language }) => language === "thalorna-note-skill-vedyarlng",
    );
    for (const word of free) {
        const row = rows.find(({ name, class: cls }) => name === word.form && cls === word.class);
        assert(row, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-vedyarlng");
    const rendered = insertLexicalSections(splitFrontmatter(language.raw).body, sections).markdown;
    for (const word of free) assert(rendered.includes(`**${word.form}**`), word.form);
});

test("Vedyari declarations satisfy the actual schema, word and name contracts", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(
        checkLanguageWords(language, { index: { notes } }).filter(
            ({ severity }) => severity === "error",
        ),
        [],
    );
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
});

test("all ordinary words and expressions render through the actual Vedyakshara map and drawn font", () => {
    const map = encodingReference("vedy").encoding;
    const face = resolveScriptFonts(process.cwd()).faces.get("vedyakshara-classical");
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("x".codePointAt(0)).index;
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = referenceContext({ ...config, rootDir: process.cwd() }, records);
    const configured = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert.equal(configured.length, 1, "this note must select exactly one configured language");
    const [[languageKey, definition]] = configured;
    assert(context.wordBooks.has(languageKey), "the configured wordbook must be selected");
    assert(context.lexicons.has(languageKey), "the configured lexicon must be selected");
    const native = serializeLexicon(context.lexicons.get(languageKey));
    const attributes = `lang=${languageKey} enc=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${free[0].form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs.length, 1);
    assert.equal(scanned.runs[0].lang, languageKey);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const assertDrawn = (form, written) => {
        assert(written.trim(), form);
        for (const char of written) {
            if (/[\s\p{Default_Ignorable_Code_Point}]/u.test(char)) continue;
            const point = char.codePointAt(0);
            const glyph = outlines.glyph(point);
            assert(face.draws.has(point) && glyph?.d && glyph.index !== box, `${form}: ${char}`);
        }
    };
    for (const word of free) {
        const written = encodeWithLanguage(map, word.form, {
            font: face.slug,
            lexicon: native,
        }).text;
        const output = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(output.errors, [], word.form);
        assert(output.markdown.includes(written), word.form);
        assertDrawn(word.form, written);
    }
    const undefinedForm = "prukpruk";
    assert.equal(context.wordBooks.get(languageKey).accepts(undefinedForm), false);
    assertDrawn(
        undefinedForm,
        encodeWithLanguage(map, undefinedForm, { font: face.slug, lexicon: native }).text,
    );
    const unknown = renderRuns(`[${undefinedForm}]{${attributes}}`, context);
    assert.equal(unknown.errors.length, 1, "a drawable undefined word must be rejected");
    assert(unknown.errors[0].message.includes(`\`${undefinedForm}\` is not a word`));
    assert(unknown.errors[0].message.includes(`\`${languageKey}\` lexicon`));
});

test("new coined ordinary forms retain Vedyari's actual word edges and short shapes", () => {
    const openings = new Set(
        language.fm.data.sounds.edges.find(({ edge }) => edge === "openCluster").sounds,
    );
    const closings = new Set(
        language.fm.data.sounds.edges.find(({ edge }) => edge === "closeConsonant").sounds,
    );
    for (const word of free.filter((word) => word.source?.kind === "coined")) {
        for (const token of word.form.match(/\p{L}[\p{L}\p{M}]*/gu) ?? []) {
            const text = token.toLowerCase();
            assert(!/th|dh|ph|lv|(?:os|is)$/.test(text), `${word.form}: forbidden new spelling`);
            assert(
                (text.match(/ai|au|[aeiou]/g) ?? []).length <= 4,
                `${word.form}: long new ordinary word`,
            );
            const sounds = text.match(/bh|kh|gh|sh|ch|ng|ny|./g) ?? [];
            const clusters = sounds
                .join(" ")
                .split(/ ?[aeiou] ?/)
                .map((part) => part.trim().split(" ").filter(Boolean));
            assert(
                clusters.every((cluster) => cluster.length <= language.fm.data.sounds.clusters.max),
                word.form,
            );
            const opening = clusters[0];
            assert(opening.length <= 1 || openings.has(opening.join("")), `${word.form}: opening`);
            const closing = clusters.at(-1);
            assert(
                closing.length === 0 ||
                    (closing.length === 1 && closings.has(closing[0])) ||
                    closing.join("") === "nd",
                `${word.form}: closing`,
            );
        }
    }
});
