/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import {
    beforeEncodingMigration,
    assertEncodingMigrationPreserved,
    assertPublicLanguageProjections,
    contentHash,
    caselessCitationKey,
} from "./encoding-preservation.mjs";
import { encodingReference, referenceContext } from "./encoding-reference.mjs";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { serializeLexicon } from "@heroiclands/package-build/engine/encoding-lexicon";
import fs from "node:fs";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { parseWordClass, WORD_CLASS_BASES } from "@heroiclands/package-build/engine/word-classes";
const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read("assets/content/Skills/Languages/Khelathi.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.fm.data.words;
const historicalCitations = new Set(
    beforeEncodingMigration(language.file).fm.data.words.slice(0, 156).map(caselessCitationKey),
);
// The core migration predates later literature and its additional declarations.
const beforeLiterature = YAML.parse(
    splitFrontmatter(
        execFileSync(
            "git",
            [
                "show",
                "cda3ead48069f2a05f010c512d072a6e8f424017:assets/content/Skills/Languages/Khelathi.md",
            ],
            { encoding: "utf8" },
        ),
    ).yaml,
);
const ordinary = words.filter((w) => eligible.has(parseWordClass(w.class).base));
const ids = (w) => [w.concept ?? []].flat();
const record = { ...language.fm, file: language.file, package: "thalorna", system: "note" };
const dictionary = dictionaryAndTermRows([record]).dictionary;
test("Khelathi expresses every current core concept with an ordinary word or expression", () => {
    const known = new Set(inventory.fm.data.concepts.map((x) => x.id));
    const covered = new Set(ordinary.flatMap(ids));
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary expressions`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
    const rank = language.fm.data.elements.find((element) => element.form === "halzi");
    assert.equal(rank.word, "halzi");
    assert(!Object.hasOwn(rank, "concept"));
    assert(ids(words.find((w) => w.form === "halzi")).includes("heart"));
});
test("every ordinary Khelathi entry retains its real class and all published senses", () => {
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
test("Khelathi preserves all original meanings, optional writings and name interpretations", () => {
    const before = beforeEncodingMigration(language.file);
    // The phrase-list spelling follows the lexicon's hearing formula.
    const spellingBefore = {
        ...before,
        raw: before.raw.replace(/^Shelmu zetem$/mu, "Shelmu zeten"),
    };
    assertEncodingMigrationPreserved(language, spellingBefore);
    assertPublicLanguageProjections(language, before, 156);
    assert.equal(
        contentHash(before.fm.data.words.slice(0, 156).map(({ concept, ...rest }) => rest)),
        "69c7a3087d6d15e73722d4c3238d4a7f94a23fb09ec4f0156a842e7e524e0fcb",
    );
    const fm = structuredClone(before.fm);
    delete fm.data.words;
    delete fm.data.roman;
    for (const key of ["affixes", "register"])
        fm.data[key] = fm.data[key].slice(0, beforeLiterature.data[key].length);
    assert.equal(fm.data.fields.pop().name, "Everyday speech");
    assert.equal(
        contentHash(fm),
        "ad9d903596d6c43ffbf97f9e20002b4b4262827f95f677d3fcdecdc0e51c6a8b",
    );
    const romanNote =
        "The roman inventory includes `j` and `J` for established place names such as Gar-Medjatozo, alongside the ordinary word sounds.";
    const body = splitFrontmatter(before.raw)
        .body.replace(romanNote + "\n\n", "")
        .replace(/## Everyday speech\n[\s\S]*?(?=## Script & Literacy\n)/u, "");
    assert.equal(
        contentHash(body),
        "d65548d88e0876d03ec3e184bf1761eadf2c6332679ff7ed7e57cef89cb8ff54",
    );
});

test("the current word, schema and name contracts accept the Khelathi declarations", async () => {
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
    for (const word of words.filter(
        (word) => !historicalCitations.has(caselessCitationKey(word)),
    )) {
        assert(eligible.has(parseWordClass(word.class).base), word.form);
        // Core expressions must stand on free ordinary words; literature can cite bound affixes.
        for (const piece of word.concept ? (word.built ?? []) : [])
            assert(
                ordinary.some((w) => w.form === piece),
                `${word.form}: free component ${piece}`,
            );
    }
});
test("new Khelathi citations follow the actual syllable and sound edges", () => {
    for (const word of words.filter(
        (word) => !historicalCitations.has(caselessCitationKey(word)),
    )) {
        if (word.form === "khelathu elu anlagh") continue;
        for (const token of word.form.split(" ")) {
            assert(/^[a-z]+$/iu.test(token), token);
            const sounds = token.toLowerCase().match(/th|sh|kh|gh|ch|./gu);
            assert(!/zh|dh|ph/u.test(token), token);
            const clusters = sounds
                .join(" ")
                .split(/ ?[aeiou] ?/u)
                .map((s) => s.trim().split(" ").filter(Boolean));
            const opening = clusters[0];
            assert(
                opening.length <= 1 ||
                    (opening.length === 2 &&
                        (/[yw]/u.test(opening[1]) ||
                            (/[fsz]/u.test(opening[0]) && /[ptk]/u.test(opening[1])))),
                `${token}: opening`,
            );
            const closing = clusters.at(-1);
            assert(
                closing.length <= 1 &&
                    (!closing.length ||
                        new Set(["n", "t", "s", "r", "l", "z", "th"]).has(closing[0])),
                `${token}: closing`,
            );
            assert(
                clusters.every((c) => c.length <= 2),
                `${token}: cluster`,
            );
            assert((token.match(/[aeiou]+/giu) ?? []).length <= 4, `${token}: syllables`);
        }
    }
});
test("the actual published list and configured Qalezu renderer cover every ordinary citation", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const { renderRuns, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
    const { resolveScriptFonts } = await import("@heroiclands/package-build/engine/script-fonts");
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
    const spelling = read("assets/content/Lore/Scripts/Qalezu_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = referenceContext({ ...config, rootDir: process.cwd() }, [
        record,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const [[lang, definition]] = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert(context.wordBooks.has(lang));
    assert(context.lexicons.has(lang));
    const map = encodingReference("khel", { font: "qalezu-hand" }).encoding;
    const face = resolveScriptFonts(process.cwd()).faces.get(map.font);
    assert.equal(map.language, "khel");
    const native = serializeLexicon(context.lexicons.get(lang));
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    const attributes = `lang=${lang} enc=${map.name} font=${face.slug}`;
    const scan = scanRuns(`[${ordinary[0].form}]{${attributes}}`, context);
    assert.deepEqual(scan.errors, []);
    assert.equal(scan.runs[0].tag, definition.tag);
    const draw = (text, form) => {
        assert(text.trim(), form);
        for (const char of text) {
            if (/\s/u.test(char)) continue;
            const code = char.codePointAt(0),
                glyph = outlines.glyph(code);
            assert(
                face.draws.has(code) && glyph?.d && glyph.index !== box,
                `${form}: U+${code.toString(16)}`,
            );
        }
    };
    for (const word of ordinary) {
        const mapped = encodeWithLanguage(map, word.form, {
            font: face.slug,
            lexicon: native,
        }).text;
        draw(mapped, word.form);
        const rendered = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(rendered.errors, [], word.form);
        assert(rendered.markdown.includes(mapped), word.form);
    }
    const unknown = "qazalazal";
    assert.equal(context.wordBooks.get(lang).accepts(unknown), false);
    draw(encodeWithLanguage(map, unknown, { font: face.slug, lexicon: native }).text, unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${lang}\` lexicon`));
});
