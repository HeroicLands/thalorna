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
const language = read("assets/content/Skills/Languages/Dunhari.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.fm.data.words;
const ordinary = words.filter((w) => eligible.has(parseWordClass(w.class).base));
const ids = (w) => [w.concept ?? []].flat();
const record = { ...language.fm, file: language.file, package: "thalorna", system: "note" };
const dictionary = dictionaryAndTermRows([record]).dictionary;
test("Dunhari expresses every current core concept with an ordinary word or expression", () => {
    const known = new Set(inventory.fm.data.concepts.map((x) => x.id));
    const covered = new Set(ordinary.flatMap(ids));
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary expressions`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});
test("every ordinary Dunhari entry retains its real class and all published senses", () => {
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
test("Dunhari preserves all original meanings, optional writings and name interpretations", async () => {
    const hash = (value) =>
        crypto
            .createHash("sha256")
            .update(typeof value === "string" ? value : JSON.stringify(value))
            .digest("hex");
    const omitConcept = ({ concept, ...rest }) => rest;
    assert.equal(
        hash(words.slice(0, 58).map(omitConcept)),
        "44d6b80deccbbdf3a1e3e223a7372bd3c59e289341e4a30c2779b5266c2ae048",
    );
    const fm = structuredClone(language.fm);
    delete fm.data.words;
    // The new repertoire is checked independently by roman-inventories.test.mjs.
    delete fm.data.roman;
    assert.equal(fm.data.fields.pop().name, "Everyday speech");
    assert.equal(hash(fm), "4878ec12c1f156520f5ddfc8cd58f5d18ebf7f8553f5652890087973e4bbaabe");
    const romanNote =
        "The roman repertoire keeps the straight catch apostrophe in the registered name Tigh'Baharan.";
    assert.equal(splitFrontmatter(language.raw).body.split(romanNote).length, 2);
    const body = splitFrontmatter(language.raw)
        .body.replace(romanNote + "\n\n", "")
        .replace(/## Everyday speech\n[\s\S]*?(?=## Script and Literacy\n)/u, "");
    assert.equal(hash(body), "c0f66ec2d26a541b519bb80c20f8655b4ad7ac9da9a139c4499d44dcca58adeb");
    const originalData = {
        ...language.fm.data,
        words: words.slice(0, 58),
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
    for (const form of originalData.names.clan) probes.add(form);
    const listedNames = body.match(/## Name Lists\n([\s\S]*?)## Dunhari Lexicon/u)[1];
    for (const line of listedNames.split("\n"))
        if (line && !line.startsWith("#"))
            for (const form of line.split(",")) probes.add(form.trim());
    const sayings = body.match(/## Sample Phrases\n([\s\S]*?)## Lexicon/u)[1];
    for (const line of sayings.split("\n"))
        if (line && !line.startsWith(":"))
            for (const form of line.split(" ")) probes.add(form.trim());
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
test("the current word, schema and name contracts accept the Dunhari declarations", async () => {
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
    for (const word of words.slice(58)) {
        assert(eligible.has(parseWordClass(word.class).base), word.form);
        for (const piece of word.form.includes(" ") ? word.form.split(" ") : [])
            assert(
                ordinary.some((w) => w.form === piece),
                `${word.form}: free component ${piece}`,
            );
    }
});
test("new Dunhari citations follow the actual sound edges", () => {
    const ends = new Set(
        language.fm.data.sounds.edges.find((e) => e.edge === "closeConsonant").sounds,
    );
    const pairs = new Set(
        language.fm.data.sounds.edges.find((e) => e.edge === "closeCluster").sounds,
    );
    for (const word of words.slice(58))
        for (const token of word.form.split(" ")) {
            assert(/^[a-z]+$/iu.test(token), token);
            assert(!/^kh|od$|ekh$/iu.test(token), token);
            assert(!/th|dh|ph|ch/u.test(token), token);
            const sounds = token.toLowerCase().match(/sh|zh|kh|gh|./gu);
            const clusters = sounds
                .join(" ")
                .split(/ ?[aeiou] ?/u)
                .map((s) => s.trim().split(" ").filter(Boolean));
            assert(clusters[0].length <= 1, token + ": opening");
            assert(
                clusters.every((c) => c.length <= 2),
                token + ": cluster",
            );
            const c = clusters.at(-1);
            assert(
                !c.length ||
                    (c.length === 1 && ends.has(c[0])) ||
                    (c.length === 2 && pairs.has(c.join(""))),
                token + ": closing",
            );
            assert((token.match(/[aeiou]+/giu) ?? []).length <= 4, token + ": syllables");
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
    const unknown = "vevazem";
    assert.equal(context.wordBooks.get(lang).accepts(unknown), false);
    draw(applyMap(map, unknown, { font: face.slug, native }).text, unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${lang}\` lexicon`));
});
