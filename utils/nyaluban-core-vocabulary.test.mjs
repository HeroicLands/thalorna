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
const language = read("assets/content/Skills/Languages/Nyaluban.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const eligible = new Set(WORD_CLASS_BASES.filter((x) => x.glossary).map((x) => x.token));
const words = language.fm.data.words;
const ordinary = words.filter((w) => eligible.has(parseWordClass(w.class).base));
const ids = (w) => [w.concept ?? []].flat();
const record = { ...language.fm, file: language.file, package: "thalorna", system: "note" };
const dictionary = dictionaryAndTermRows([record]).dictionary;
test("Nyáluban expresses every current core concept with an ordinary word or expression", () => {
    const known = new Set(inventory.fm.data.concepts.map((x) => x.id));
    const covered = new Set(ordinary.flatMap(ids));
    const missing = [...known].filter((id) => !covered.has(id));
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary expressions`);
    for (const w of words) for (const id of ids(w)) assert(known.has(id), `${w.form}: ${id}`);
});
test("every ordinary Nyáluban entry retains its real class and all published senses", () => {
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
test("Nyáluban preserves all original meanings, optional writings and name interpretations", async () => {
    const hash = (value) =>
        crypto
            .createHash("sha256")
            .update(typeof value === "string" ? value : JSON.stringify(value))
            .digest("hex");
    const omitConcept = ({ concept, ...rest }) => rest;
    assert.equal(
        hash(words.slice(0, 25).map(omitConcept)),
        "ea0ea12475ed7bd20166c1d38aa72553b28aa477943473b04f3f0ed9a70ddb00",
    );
    const fm = structuredClone(language.fm);
    delete fm.data.words;
    assert.equal(fm.data.fields.pop().name, "Everyday speech");
    assert.equal(hash(fm), "8385741e140d3c8b09b74c0c656085fbd596ace223d83d862cf505f53e5cd591");
    const body = splitFrontmatter(language.raw).body.replace(
        /## Everyday speech\n[\s\S]*?(?=## Script & Literacy\n)/u,
        "",
    );
    assert.equal(hash(body), "a70222056437b461e14f78113afc2da63d9f152471c5af24e0e20961e1fa5cd8");
    assert(ids(words.find((w) => w.form === "nyoli")).includes("daughter"));
    const originalData = {
        ...language.fm.data,
        words: words.slice(0, 25),
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
    const listedNames = body.match(/## Example Name Lists\n([\s\S]*?)## Nyáluban Lexicon/u)[1];
    for (const line of listedNames.split("\n"))
        if (line.startsWith("- ")) probes.add(line.slice(2).split(" (")[0].trim());
    const sayings = body.match(/## Sample Phrases\n([\s\S]*?)## Related Languages/u)[1];
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
        f
            .normalize("NFD")
            .replace(/\p{M}/gu, "")
            .replace(/^-+|-+$/gu, "")
            .toLowerCase(),
    ])) {
        if (form === "zherami le zhone") {
            assert.equal(before(form), null);
            assert(
                body.includes(
                    'Zherami le zhone\n: _Blessing invocation; "Spirits good abide" (formulaic expression of peaceful greeting)_',
                ),
            );
            assert.equal(after(form), words.find((w) => w.form === form).gloss);
        } else assert.equal(after(form), before(form), `${form}: original piece meaning`);
    }
});
test("the current word, schema and name contracts accept the Nyáluban declarations", async () => {
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
    for (const word of words.slice(25)) {
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
test("new Nyáluban citations keep open syllables and licensed onsets", () => {
    const nasal = new Set(
        language.fm.data.sounds.edges.find((e) => e.edge === "innerCluster").sounds,
    );
    const glides = new Set(language.fm.data.sounds.edges.find((e) => e.edge === "glide").sounds);
    for (const word of words.slice(25))
        for (const part of word.form.split(" ")) {
            const spelling = part.replace(/^-+|-+$/gu, "").toLowerCase();
            assert(/^[a-záéíóú]+$/u.test(spelling), part);
            assert((spelling.match(/[áéíóú]/gu) ?? []).length <= 1, part + ": one acute at most");
            const token = spelling.normalize("NFD").replace(/\u0301/gu, "");
            assert(!/v|q|c|th|dh|ph|kh|gh/u.test(token), part);
            assert(/[aeiou]$/u.test(token), part);
            const sounds = token.match(/ny|ng|sh|zh|./gu);
            const clusters = sounds
                .join(" ")
                .split(/ ?[aeiou] ?/u)
                .map((s) => s.trim().split(" ").filter(Boolean));
            for (const c of clusters)
                assert(
                    c.length <= 1 ||
                        (c.length === 2 && (nasal.has(c.join("")) || glides.has(c[1]))),
                    part + ": closed syllable or unlicensed onset",
                );
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
    const unknown = "lelomiba";
    assert.equal(context.wordBooks.get(lang).accepts(unknown), false);
    draw(applyMap(map, unknown, { font: face.slug, native }).text, unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${lang}\` lexicon`));
});
