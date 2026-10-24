/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { createHash } from "node:crypto";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { coreReport } from "@heroiclands/package-build/engine/core-report";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { namesFindings } from "@heroiclands/package-build/engine/language-names";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";
const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read("assets/content/Skills/Languages/Nordmal.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const expected = new Set(inventory.fm.data.concepts.map(({ id }) => id));
const glossary = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const words = language.fm.data.words;
const coreStart = words.findIndex((w) => w.field === "Everyday speech");
assert(coreStart > 0);
const nameWords = words.slice(0, coreStart);
test("Nordmal expresses the inventory through ordinary dictionary citations", () => {
    const actual = new Set(
        words
            .filter((w) => glossary.has(parseWordClass(w.class).base))
            .flatMap((w) => [w.concept ?? []].flat()),
    );
    assert.equal(expected.size, 921);
    assert.deepEqual(
        [...expected].filter((id) => !actual.has(id)),
        [],
        "missing ordinary expressions",
    );
    assert.deepEqual(
        [...actual].filter((id) => !expected.has(id)),
        [],
        "unknown concept ids",
    );
});

const record = ({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" });
const records = [language, inventory].map(record);
const ordinary = words.filter((w) => glossary.has(parseWordClass(w.class).base));
const hash = (value) =>
    createHash("sha256")
        .update(typeof value === "string" ? value : JSON.stringify(value))
        .digest("hex");

test("Nordmal preserves its names, elements, old meanings and existing prose", () => {
    // Only eight false bound-element tags moved; six ordinary nouns gained tags.
    const old = nameWords;
    assert.equal(
        hash(old.map(({ concept, ...w }) => w)),
        "1f8d301b4b48cb2b5956e6f8b370f7ef94430075bb8ab463609302e589529423",
    );
    const { words: _words, fields, ...data } = language.fm.data;
    const { register } = data;
    // The Haulonna work on main added this Nordmal name after Thalmdal.
    // Verify that exact addition, then retain the original metadata fingerprint.
    const addedName = { name: "Hlusmil Svartrunar", tongue: "nordmal" };
    assert.deepEqual(
        register.filter(({ name }) => name === addedName.name),
        [addedName],
    );
    assert.equal(register[0].name, "Thalmdal");
    assert.deepEqual(register[1], addedName);
    const nameBoundary = register.findIndex(({ name }) => name === "Aldvar");
    assert(nameBoundary >= 0);
    const oldRegister = register
        .slice(0, nameBoundary + 1)
        .filter(({ name }) => name !== addedName.name);
    assert.equal(
        hash({ ...language.fm, data: { ...data, register: oldRegister } }),
        "cda0750d48fd983dd4952d5669981f854083a9a5d3070077279b6a639e61cfb1",
    );
    assert.equal(
        hash(fields.slice(0, -1)),
        "22d7f42365d332f3d9911cf643f6a822e334f7c0439f861f87ef09f1f2e276fc",
    );
    assert.deepEqual(fields.at(-1), {
        name: "Everyday speech",
        holds: "Ordinary words and expressions for perception, feeling, bodily life, relationships, things, actions and conversation.",
    });
    assert.equal(
        hash(
            splitFrontmatter(language.raw).body.replace(
                /### Everyday speech\n[\s\S]*?(?=## Related Languages)/u,
                "",
            ),
        ),
        "47fdc3900c1794a8243c24189d85e4361681b52c6bd571c1cad0f2953ac1e779",
    );
    for (const w of words.filter((w) =>
        ["stem", "name", "pref"].includes(parseWordClass(w.class).base),
    ))
        assert.equal(w.concept, undefined, w.form);
    for (const id of ["bone", "blood", "fire", "green", "grey", "hand", "black", "water"])
        assert(
            ordinary.some((w) => [w.concept ?? []].flat().includes(id)),
            id,
        );
});

test("Nordmal keeps secondary verse senses on their canonical citations", () => {
    const expectedNotes = {
        alva: "As a noun in verse, alva means ale.",
        heim: "As an adverb in verse: homeward, to one's home.",
        snarv: "As a verb in verse: wind or turn a line or tally.",
        ald: "As a noun in verse: an old person.",
    };
    for (const [form, note] of Object.entries(expectedNotes)) {
        const matches = words.filter((w) => w.form === form);
        assert.equal(matches.length, 1, form);
        assert.equal(matches[0].note, note, form);
    }
});

test("Nordmal projects every actual ordinary class and meaning into its dictionary", () => {
    const dictionary = dictionaryAndTermRows(records).dictionary.filter(
        (r) => r.language === "thalorna-note-skill-nordmalng",
    );
    assert.equal(dictionary.length, ordinary.length);
    for (const w of ordinary) {
        const row = dictionary.find((r) => r.name.normalize("NFC") === w.form.normalize("NFC"));
        assert(row, w.form);
        assert.equal(row.depth, 0, w.form);
        assert.equal(row.class, w.class, w.form);
        assert.deepEqual(
            row.senses.map((s) => s.text),
            [w.gloss].flat(),
            w.form,
        );
    }
    const report = coreReport(records, { language: language.fm.shortcode }).languages[0];
    assert.equal(report.total, expected.size);
    assert.equal(report.covered, expected.size);
});

test("Nordmal satisfies its frontmatter, word and name contracts", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index: { notes: [language, inventory] } }), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
});

test("Nordmal core expressions keep its spelling palette and real constituent classes", () => {
    assert.deepEqual(language.fm.data.sounds.stress, { two: "first", longer: "first" });
    const defined = new Set(words.map((w) => w.form.normalize("NFC")));
    for (const w of ordinary) assert.equal(w.form.trim(), w.form, w.form);
    for (const w of words.filter((w) => w.concept !== undefined)) {
        assert.equal(w.form.trim(), w.form, w.form);
        assert(!/w|kh|gh|zh|dh/iu.test(w.form), w.form);
        for (const token of w.form.split(/\s+/u)) {
            assert(/^[a-záéíóú]+$/u.test(token), token);
            const syllables = token.match(/[aeiouyáéíóú]+/gu)?.length ?? 0;
            assert(syllables > 0 && syllables <= 3, token);
            assert(defined.has(token), `${w.form}: undefined constituent ${token}`);
        }
    }
    const body = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "body").map((c) => c.id),
    );
    const verbs = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "verbs").map((c) => c.id),
    );
    for (const w of words)
        for (const id of [w.concept ?? []].flat()) {
            assert(glossary.has(parseWordClass(w.class).base), `${w.form}: bound/name tag ${id}`);
            if (body.has(id)) assert.equal(parseWordClass(w.class).base, "n", `${w.form}: ${id}`);
            if (verbs.has(id)) assert.equal(parseWordClass(w.class).base, "v", `${w.form}: ${id}`);
        }
});

test("Nordmal publishes the ordinary citations and their essential usage", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-nordmalng");
    const rendered = insertLexicalSections(splitFrontmatter(language.raw).body, sections).markdown;
    for (const w of ordinary) {
        assert(rendered.includes(`**${w.form}**`), w.form);
        for (const sense of [w.gloss].flat())
            assert(rendered.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});

test("configured Nordmal runs use the real Thuravark wordbook, face and glyph outlines", async () => {
    const { applyMap, compileMap } = await import("@heroiclands/package-build/engine/text-maps");
    const { renderRuns, runContext } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const { nativeLookup } = await import("@heroiclands/package-build/engine/map-lexicon");
    const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
    const { resolveScriptFonts } = await import("@heroiclands/package-build/engine/script-fonts");
    const spelling = read("assets/content/Lore/Scripts/Thuravark_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const [key, configured] = Object.entries(config.languages).find(
        ([, value]) => value.note === `skill-${language.fm.shortcode}`,
    );
    assert.equal(key, "nord");
    assert.equal(configured.tag, "art-x-nord");
    assert.deepEqual(language.fm.data.writtenIn, { map: "thuravark", font: "thuravark-carved" });
    const ctx = runContext({ ...config, rootDir: process.cwd() }, [...records, record(spelling)]);
    assert(ctx.lexicons.has(key));
    assert(ctx.wordBooks.has(key));
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(language.fm.data.writtenIn.font);
    const native = nativeLookup(ctx.lexicons.get(key), map.name, face.slug);
    const outlines = fontOutlines(face.file);
    function mappedWithOutlines(form) {
        const mapped = applyMap(map, form, { font: face.slug, native }).text;
        for (const [at, char] of [...mapped].entries())
            if (!/\s/u.test(char)) {
                assert(face.draws.has(char.codePointAt(0)), `${form}: undeclared glyph`);
                if (char.codePointAt(0) === 0xf0148) {
                    // The face shapes vowel + empty acutecomb into a repeated vowel stave.
                    // HarfBuzz proof for all five vowels is recorded with packet acceptance.
                    assert(
                        /[\u{f0100}-\u{f0104}]/u.test([...mapped][at - 1] ?? ""),
                        `${form}: length mark lacks its vowel`,
                    );
                    assert.equal(outlines.glyph(0xf0148)?.advance, 0);
                } else
                    assert(outlines.glyph(char.codePointAt(0))?.d, `${form}: glyph has no outline`);
            }
        return mapped;
    }
    for (const w of ordinary) {
        const rendered = renderRuns(`[${w.form}]{.nativefont lang=${key}}`, ctx);
        assert.deepEqual(rendered.errors, [], w.form);
        assert(rendered.markdown.includes(mappedWithOutlines(w.form)), w.form);
        assert(rendered.markdown.includes(`lang=${configured.tag}`), w.form);
    }
    mappedWithOutlines("hnoskurv"); // Every letter maps and draws; rejection must be lexical.
    const unknown = renderRuns(`[hnoskurv]{.nativefont lang=${key}}`, ctx);
    assert.equal(unknown.errors.length, 1);
    assert.match(unknown.errors[0].message, /not a word of the `nord` lexicon/u);
});

test("new Nordmal citations preserve interpreted old word and name pieces", async () => {
    const { pieceGlosses } = await import("@heroiclands/package-build/engine/word-rows");
    // The earlier hashes pin these exact original rows and all name metadata.
    // Compare their interpreted meanings too: an added free homonym can override
    // a former loose match to a bound piece without changing that piece's YAML.
    const originalData = {
        ...language.fm.data,
        words: nameWords,
        fields: language.fm.data.fields.slice(0, -1),
    };
    const originalRecord = { ...record(language), data: originalData };
    const oldDictionary = dictionaryAndTermRows([originalRecord]).dictionary;
    const currentDictionary = dictionaryAndTermRows(records).dictionary;
    for (const row of oldDictionary)
        assert.deepEqual(
            currentDictionary.find((r) => r.language === row.language && r.name === row.name),
            row,
            row.name,
        );
    const forms = new Set();
    function collect(value) {
        if (Array.isArray(value)) {
            for (const item of value) collect(item);
            return;
        }
        if (!value || typeof value !== "object") return;
        for (const [key, item] of Object.entries(value)) {
            if (["form", "front", "joining"].includes(key) && typeof item === "string")
                forms.add(item);
            if (["built", "variants", "elements"].includes(key) && Array.isArray(item))
                for (const form of item) if (typeof form === "string") forms.add(form);
            collect(item);
        }
    }
    collect(originalData);
    const before = pieceGlosses(originalData),
        after = pieceGlosses(language.fm.data);
    for (const form of [...forms].flatMap((form) => [form, form.replace(/^-+|-+$/gu, "")]))
        assert.equal(after(form), before(form), `${form}: original name/word-piece meaning`);
});

const varokhi = read("assets/content/Skills/Languages/Varokhi.md");
test("Varokhi independently expresses every inventory concept in its own dictionary", () => {
    const actual = new Set(
        varokhi.fm.data.words
            .filter((w) => glossary.has(parseWordClass(w.class).base))
            .flatMap((w) => [w.concept ?? []].flat()),
    );
    assert.deepEqual(
        [...expected].filter((id) => !actual.has(id)),
        [],
        "missing Varokhi ordinary expressions",
    );
    assert.deepEqual(
        [...actual].filter((id) => !expected.has(id)),
        [],
        "unknown Varokhi ids",
    );
});

const varokhiRecords = [varokhi, inventory].map(record);
const varokhiWords = varokhi.fm.data.words;
const varokhiOrdinary = varokhiWords.filter((w) => glossary.has(parseWordClass(w.class).base));
test("Varokhi additions preserve every original word, name piece and ordinary body citation", async () => {
    assert.equal(
        hash(varokhiWords.slice(0, 90).map(({ concept, ...w }) => w)),
        "90b5aaaeaa2331b510bd81b602d470b3912d63b70cdc56bb5fdc2ddf14676c9e",
    );
    const { words: _words, fields, ...data } = varokhi.fm.data;
    assert.equal(
        hash({ ...varokhi.fm, data }),
        "801ac1d67b9d2d1f3ab010077b2308d200571cd15caa678a6be32eb0be9f804b",
    );
    assert.equal(
        hash(fields.slice(0, -1)),
        "e3bb9b85de9cdc104a58caa1ffd399a3c4362b6ee2a26484910a9deda412aba2",
    );
    assert.deepEqual(fields.at(-1), {
        name: "Everyday speech",
        holds: "Ordinary words and expressions for perception, feeling, bodily life, relationships, things, actions and conversation.",
    });
    const oldBody = splitFrontmatter(varokhi.raw).body.replace(
        /## Everyday speech\n[\s\S]*?(?=## Sample Phrases)/u,
        "",
    );
    assert.equal(hash(oldBody), "7ca5e3b8bd4da8f6d35345c8eeb55182b37156109893f1bd1b33e18bf3bf3c4c");
    assert(oldBody.includes('"Eth shal."'));
    const originalData = {
        ...varokhi.fm.data,
        words: varokhiWords.slice(0, 90),
        fields: fields.slice(0, -1),
    };
    const { pieceGlosses } = await import("@heroiclands/package-build/engine/word-rows");
    const before = pieceGlosses(originalData),
        after = pieceGlosses(varokhi.fm.data);
    const forms = new Set();
    function collect(value) {
        if (Array.isArray(value)) {
            for (const item of value) collect(item);
            return;
        }
        if (!value || typeof value !== "object") return;
        for (const [key, item] of Object.entries(value)) {
            if (["form", "front", "joining"].includes(key) && typeof item === "string")
                forms.add(item);
            if (["built", "variants", "elements"].includes(key) && Array.isArray(item))
                for (const form of item) if (typeof form === "string") forms.add(form);
            collect(item);
        }
    }
    collect(originalData);
    for (const m of oldBody.matchAll(/`(-[\p{L}]+-?|-?[\p{L}]+-)`/gu)) forms.add(m[1]);
    for (const form of [...forms].flatMap((f) => [f, f.replace(/^-+|-+$/gu, "")]))
        assert.equal(after(form), before(form), `${form}: old Varokhi piece interpretation`);
    const originalRecord = { ...record(varokhi), data: originalData };
    const priorDictionary = dictionaryAndTermRows([originalRecord]).dictionary;
    const currentDictionary = dictionaryAndTermRows(varokhiRecords).dictionary;
    for (const row of priorDictionary)
        assert.deepEqual(
            currentDictionary.find((r) => r.language === row.language && r.name === row.name),
            row,
            row.name,
        );
});

test("Varokhi satisfies its own source, word, name and dictionary contracts", () => {
    assert.equal(varokhi.fm.data.family, undefined);
    assert.deepEqual(
        lintNote(varokhi, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(varokhi, { index: { notes: [varokhi, inventory] } }), []);
    assert.deepEqual(namesFindings(varokhi, BEING_LOOK_VOCABULARY), []);
    const dictionary = dictionaryAndTermRows(varokhiRecords).dictionary.filter(
        (r) => r.language === "thalorna-note-skill-varokhlng",
    );
    assert.equal(dictionary.length, varokhiOrdinary.length);
    for (const w of varokhiOrdinary) {
        const row = dictionary.find((r) => r.name.normalize("NFC") === w.form.normalize("NFC"));
        assert(row, w.form);
        assert.equal(row.depth, 0, w.form);
        assert.equal(row.class, w.class, w.form);
        assert.deepEqual(
            row.senses.map((s) => s.text),
            [w.gloss].flat(),
            w.form,
        );
    }
    const report = coreReport(varokhiRecords, { language: varokhi.fm.shortcode }).languages[0];
    assert.equal(report.total, expected.size);
    assert.equal(report.covered, expected.size);
});

test("new Varokhi words keep the ordinary forest palette and true phrase roles", () => {
    const defined = new Set(varokhiWords.map((w) => w.form));
    for (const w of varokhiWords.slice(90)) {
        assert.equal(w.form, w.form.trim(), w.form);
        for (const token of w.form.split(/\s+/u)) {
            assert(/^[a-z]+$/u.test(token), token);
            assert(!/[pqxz]|kh|gh|zh|dh/u.test(token), token);
            assert(!/^hn|^dv/u.test(token), token);
            let phonemes = token.replaceAll("th", "T").replaceAll("ch", "C");
            if (token === "shal") phonemes = "Sal"; // The original body attests this ordinary form.
            assert((phonemes.match(/^[^aeiouy]+/u)?.[0].length ?? 0) <= 2, token);
            assert(defined.has(token), `${w.form}: undefined ordinary constituent ${token}`);
        }
    }
    const body = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "body").map((c) => c.id),
    );
    const verbs = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "verbs").map((c) => c.id),
    );
    for (const w of varokhiWords)
        for (const id of [w.concept ?? []].flat()) {
            assert(glossary.has(parseWordClass(w.class).base), `${w.form}: nonordinary ${id}`);
            if (body.has(id)) assert.equal(parseWordClass(w.class).base, "n", `${w.form}: ${id}`);
            if (verbs.has(id)) assert.equal(parseWordClass(w.class).base, "v", `${w.form}: ${id}`);
        }
});

test("Varokhi distinguishes attributive my from belonging and locates quantity examples", () => {
    const mine = varokhiWords.find((w) => [w.concept ?? []].flat().includes("my"));
    assert.equal(mine.form, "melgud er wi");
    assert.equal(mine.class, "n");
    assert(varokhiWords.find((w) => w.form === "thum er wi").concept === "belong");
    for (const form of ["neora", "neri nivre"]) {
        const gloss = varokhiWords.find((w) => w.form === form).gloss;
        assert(gloss.includes("thum hewra"));
        assert(!gloss.includes("thum hera"));
    }
});

test("Varokhi publishes every actual citation and its essential meaning", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const section = lexicalSectionsFor(varokhiRecords).get("thalorna-note-skill-varokhlng");
    const printed = insertLexicalSections(splitFrontmatter(varokhi.raw).body, section).markdown;
    for (const w of varokhiOrdinary) {
        assert(printed.includes(`**${w.form}**`), w.form);
        for (const sense of [w.gloss].flat())
            assert(printed.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});

test("Varokhi uses its real Semaron face, configured wordbook and drawable glyphs", async () => {
    const { applyMap, compileMap } = await import("@heroiclands/package-build/engine/text-maps");
    const { runContext, renderRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const { nativeLookup } = await import("@heroiclands/package-build/engine/map-lexicon");
    const { resolveScriptFonts } = await import("@heroiclands/package-build/engine/script-fonts");
    const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
    const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const [key, configured] = Object.entries(config.languages).find(
        ([, s]) => s.note === `skill-${varokhi.fm.shortcode}`,
    );
    assert.equal(key, "varo");
    assert.equal(configured.tag, "art-x-varo");
    assert.deepEqual(varokhi.fm.data.writtenIn, { map: "semaron", font: "semaron-kuriale" });
    const ctx = runContext({ ...config, rootDir: process.cwd() }, [
        ...varokhiRecords,
        record(spelling),
    ]);
    assert(ctx.wordBooks.has(key));
    assert(ctx.lexicons.has(key));
    const map = compileMap(spelling.fm.data.map),
        face = resolveScriptFonts(process.cwd()).faces.get(varokhi.fm.data.writtenIn.font);
    const native = nativeLookup(ctx.lexicons.get(key), map.name, face.slug),
        outlines = fontOutlines(face.file);
    function mapped(form) {
        const text = applyMap(map, form, { font: face.slug, native }).text;
        for (const char of text)
            if (!/\s/u.test(char)) {
                assert(face.draws.has(char.codePointAt(0)), `${form}: undeclared glyph`);
                assert(outlines.glyph(char.codePointAt(0))?.d, `${form}: no glyph outline`);
            }
        return text;
    }
    for (const w of varokhiOrdinary) {
        const result = renderRuns(`[${w.form}]{.nativefont lang=${key}}`, ctx);
        assert.deepEqual(result.errors, [], w.form);
        assert(result.markdown.includes(mapped(w.form)), w.form);
        assert(result.markdown.includes(`lang=${configured.tag}`), w.form);
    }
    mapped("wrathun");
    const unknown = renderRuns(`[wrathun]{.nativefont lang=${key}}`, ctx);
    assert.equal(unknown.errors.length, 1);
    assert.match(unknown.errors[0].message, /not a word of the `varo` lexicon/u);
});
