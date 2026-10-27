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
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const note = read("assets/content/Skills/Languages/Atarzadi.md"),
    inventory = read("assets/content/Reference/Core_Vocabulary.md");
const ordinary = new Set(WORD_CLASS_BASES.filter((c) => c.glossary).map((c) => c.token));
const expected = new Set(inventory.fm.data.concepts.map((c) => c.id));
test("Atárzadi supplies actual ordinary expressions for the complete inventory", () => {
    const actual = new Set(
        note.fm.data.words
            .filter((w) => ordinary.has(parseWordClass(w.class).base))
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
        "unknown IDs",
    );
});

import { createHash } from "node:crypto";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { pieceGlosses } from "@heroiclands/package-build/engine/word-rows";
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
const hash = (o) =>
    createHash("sha256")
        .update(typeof o === "string" ? o : JSON.stringify(o))
        .digest("hex");
const record = ({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" }),
    records = [note, inventory].map(record),
    words = note.fm.data.words;
const citations = words.filter((w) => ordinary.has(parseWordClass(w.class).base));
const historicalCitations = new Set(
    beforeEncodingMigration(note.file).fm.data.words.slice(0, 40).map(caselessCitationKey),
);
const newCitations = words.filter((word) => !historicalCitations.has(caselessCitationKey(word)));
test("Atárzadi preserves the original names, stems, endings, metadata and prose", () => {
    const before = beforeEncodingMigration(note.file);
    assertEncodingMigrationPreserved(note, before);
    assertPublicLanguageProjections(note, before, 40);
    // Keep the original fingerprints: the approved representation changes are
    // proved separately against every historical record, rather than rehashed.
    assert.equal(
        contentHash(before.fm.data.words.slice(0, 40)),
        "18086d735f63cdf0df9c9c68ba168b1b577df8a3d91792ddb2b768461fdbc330",
    );
    const { words: _words, fields, roman: _roman, ...data } = before.fm.data;
    assert.equal(
        contentHash({ ...before.fm, data }),
        "c173ebf6f82d0c711391ee010af4170348cbaedf3c84f2c85a9ff19c549613c1",
    );
    assert.equal(
        contentHash(fields.slice(0, -1)),
        "a5a3aef16fcc628ee5428ebc2b3f82ef369658caa1c138935a26f17eb0db2f2d",
    );
    assert.deepEqual(note.fm.data.fields.at(-1), {
        name: "Everyday speech",
        holds: "Ordinary words and expressions for bodily life, relationships, things, actions and conversation.",
    });
    assert.equal(
        contentHash(
            splitFrontmatter(before.raw).body.replace(/\n## Everyday speech\n[\s\S]*$/u, ""),
        ),
        "4052e8b595e24d79bc9795cf2c39b65e9e7120121a2d16874b636d0461aa5da0",
    );
});

test("Atárzadi projects actual ordinary classes and senses through the published engine", () => {
    assert.equal(note.fm.data.family, undefined);
    assert.deepEqual(
        lintNote(note, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(note, { index: { notes: [note, inventory] } }), []);
    assert.deepEqual(namesFindings(note, BEING_LOOK_VOCABULARY), []);
    const dict = dictionaryAndTermRows(records).dictionary.filter(
        (r) => r.language === "thalorna-note-skill-atarzadilng",
    );
    assert.equal(dict.length, citations.length);
    for (const w of citations) {
        const r = dict.find((r) => r.name.normalize("NFC") === w.form.normalize("NFC"));
        assert(r, w.form);
        assert.equal(r.class, w.class, w.form);
        assert.equal(r.depth, 0, w.form);
        assert.deepEqual(
            r.senses.map((s) => s.text),
            [w.gloss].flat(),
            w.form,
        );
    }
    const report = coreReport(records, { language: note.fm.shortcode }).languages[0];
    assert.equal(report.total, expected.size);
    assert.equal(report.covered, expected.size);
});
test("new Atárzadi citations use real free stems and the stated spelling palette", () => {
    const free = new Set(newCitations.map((w) => w.form)),
        established = new Map(note.fm.data.elements.map((e) => [e.form, e.sense]));
    for (const w of newCitations) {
        assert.equal(w.form, w.form.trim());
        for (const t of w.form.split(" ")) {
            assert(free.has(t), w.form + ": undefined ordinary constituent " + t);
            if (established.has(t)) continue;
            assert(!/[vpfw]/u.test(t), t);
            assert(!/([a-z])\1/u.test(t), t);
            assert(!/[aeiou][aeiou]/u.test(t), t);
            const s = t
                .replaceAll("kh", "K")
                .replaceAll("gh", "G")
                .replaceAll("sh", "S")
                .replaceAll("zh", "Z");
            assert(/^(?:[btdkgqm nrlszSZGKhy]?[aeiou][btdkgqmnrlszSZGK]?)+$/u.test(s), t);
            assert(/(?:[tdkqmnrlsz]|sh|kh)$/u.test(t), t);
        }
        if (established.has(w.form)) assert.equal(w.gloss, established.get(w.form), w.form);
    }
    for (const group of ["body", "verbs"]) {
        const ids = new Set(
            inventory.fm.data.concepts.filter((c) => c.group === group).map((c) => c.id),
        );
        for (const w of citations)
            for (const id of [w.concept ?? []].flat())
                if (ids.has(id)) assert.equal(w.class, group === "body" ? "n" : "v", w.form);
    }
    for (const w of newCitations.filter((w) => w.built?.includes("-ekh")))
        assert.equal(w.form, w.built[0] + "ekh");
});
test("Atárzadi publishes every ordinary meaning and its essential usage", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const section = lexicalSectionsFor(records).get("thalorna-note-skill-atarzadilng"),
        printed = insertLexicalSections(splitFrontmatter(note.raw).body, section).markdown;
    for (const w of citations) {
        assert(printed.includes("**" + w.form + "**"), w.form);
        for (const sense of [w.gloss].flat())
            assert(printed.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});
test("Atárzadi uses its real Qalezu face, configured wordbook and drawable glyphs", async () => {
    const { renderRuns } = await import("@heroiclands/package-build/engine/content-scripts");
    const { resolveScriptFonts } = await import("@heroiclands/package-build/engine/script-fonts");
    const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
    const spelling = read("assets/content/Lore/Scripts/Qalezu_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const [key, configured] = Object.entries(config.languages).find(
        ([, s]) => s.note === `skill-${note.fm.shortcode}`,
    );
    assert.equal(key, "atar");
    assert.equal(configured.tag, "art-x-atar");
    assert.equal(Object.hasOwn(note.fm.data, "writtenIn"), false);
    const ctx = referenceContext({ ...config, rootDir: process.cwd() }, [
        ...records,
        record(spelling),
    ]);
    assert(ctx.wordBooks.has(key));
    assert(ctx.lexicons.has(key));
    const map = encodingReference("atar").encoding,
        face = resolveScriptFonts(process.cwd()).faces.get(map.font);
    const native = serializeLexicon(ctx.lexicons.get(key)),
        outlines = fontOutlines(face.file);
    function mapped(form) {
        const text = encodeWithLanguage(map, form, { font: face.slug, lexicon: native }).text;
        for (const char of text)
            if (!/\s/u.test(char)) {
                assert(face.draws.has(char.codePointAt(0)), `${form}: undeclared glyph`);
                assert(outlines.glyph(char.codePointAt(0))?.d, `${form}: no glyph outline`);
            }
        return text;
    }
    for (const w of citations) {
        const result = renderRuns(`[${w.form}]{lang=${key} enc=${map.name}}`, ctx);
        assert.deepEqual(result.errors, [], w.form);
        assert(result.markdown.includes(mapped(w.form)), w.form);
        assert(result.markdown.includes(`lang=${configured.tag}`), w.form);
    }
    mapped("zhulqur");
    const unknown = renderRuns(`[zhulqur]{lang=${key} enc=${map.name}}`, ctx);
    assert.equal(unknown.errors.length, 1);
    assert.match(unknown.errors[0].message, /not a word of the `atar` lexicon/u);
});
