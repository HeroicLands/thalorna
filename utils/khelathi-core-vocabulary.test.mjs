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
const language = read("assets/content/Skills/Languages/Khelathi.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.fm.data.words;
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
    assert(!ids(words.find((w) => w.form === "Halzi")).includes("heart"));
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
test("Khelathi preserves all original meanings, optional writings and name interpretations", async () => {
    const hash = (value) =>
        crypto
            .createHash("sha256")
            .update(typeof value === "string" ? value : JSON.stringify(value))
            .digest("hex");
    const omitConcept = ({ concept, ...rest }) => rest;
    assert.equal(
        hash(words.slice(0, 156).map(omitConcept)),
        "69c7a3087d6d15e73722d4c3238d4a7f94a23fb09ec4f0156a842e7e524e0fcb",
    );
    const fm = structuredClone(language.fm);
    delete fm.data.words;
    assert.equal(fm.data.fields.pop().name, "Everyday speech");
    assert.equal(hash(fm), "ad9d903596d6c43ffbf97f9e20002b4b4262827f95f677d3fcdecdc0e51c6a8b");
    const body = splitFrontmatter(language.raw).body.replace(
        /## Everyday speech\n[\s\S]*?(?=## Script & Literacy\n)/u,
        "",
    );
    assert.equal(hash(body), "d65548d88e0876d03ec3e184bf1761eadf2c6332679ff7ed7e57cef89cb8ff54");
    const originalTagBindings = [
        ["Halzi", "heart"],
        ["qelzu", "lock"],
        ["halzi", "heart"],
        ["lazen", "one"],
        ["khul", "two"],
        ["khemu", "three"],
        ["tuzar", "four"],
        ["chalen", "five"],
        ["chun", "six"],
        ["salet", "seven"],
        ["waqen", "eight"],
        ["qanu", "nine"],
        ["gerun", "ten"],
        ["khen", "hundred"],
        ["qalzun", "thousand"],
    ];
    for (const [form, id] of originalTagBindings)
        if (form !== "Halzi")
            assert(ids(words.find((w) => w.form === form)).includes(id), `${form}: ${id}`);
    const originalData = {
        ...language.fm.data,
        words: words.slice(0, 156),
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
                ["form", "front", "joining", "instead", "near"].includes(key) &&
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
    for (const form of originalData.names.house) probes.add(form);
    const before = pieceGlosses(originalData),
        after = pieceGlosses(language.fm.data);
    for (const form of [...probes].flatMap((f) => [
        f,
        f.toLowerCase(),
        f.replace(/^-+|-+$/gu, ""),
        f.replace(/^-+|-+$/gu, "").toLowerCase(),
    ]))
        assert.equal(after(form), before(form), `${form}: original piece meaning`);
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
    for (const word of words.slice(156)) {
        assert(eligible.has(parseWordClass(word.class).base), word.form);
        for (const piece of word.built ?? [])
            assert(
                ordinary.some((w) => w.form === piece),
                `${word.form}: free component ${piece}`,
            );
    }
});
test("new Khelathi citations follow the actual syllable and sound edges", () => {
    for (const word of words.slice(156)) {
        if (word.form === "Khelathu elu anlagh") continue;
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
    const { renderRuns, runContext, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const { compileMap, applyMap } = await import("@heroiclands/package-build/engine/text-maps");
    const { nativeLookup } = await import("@heroiclands/package-build/engine/map-lexicon");
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
    const context = runContext({ ...config, rootDir: process.cwd() }, [
        record,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const [[lang, definition]] = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert(context.wordBooks.has(lang));
    assert(context.lexicons.has(lang));
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(language.fm.data.writtenIn.font);
    assert.equal(map.name, language.fm.data.writtenIn.map);
    const native = nativeLookup(context.lexicons.get(lang), map.name, face.slug);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    const attributes = `.nativefont lang=${lang} map=${map.name} font=${face.slug}`;
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
        const mapped = applyMap(map, word.form, { font: face.slug, native }).text;
        draw(mapped, word.form);
        const rendered = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(rendered.errors, [], word.form);
        assert(rendered.markdown.includes(mapped), word.form);
    }
    const unknown = "qazalazal";
    assert.equal(context.wordBooks.get(lang).accepts(unknown), false);
    draw(applyMap(map, unknown, { font: face.slug, native }).text, unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${lang}\` lexicon`));
});
