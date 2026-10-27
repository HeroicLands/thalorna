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
import { coreReport } from "@heroiclands/package-build/engine/core-report";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { wordRows } from "@heroiclands/package-build/engine/word-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { NOTE_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";

function note(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const language = note(process.env.VYLARI_PATH ?? "assets/content/Skills/Languages/Vylari.md");
const inventory = note("assets/content/Reference/Core_Vocabulary.md");
const ids = (word) => [word.concept ?? []].flat();
const bindings = (id) => language.fm.data.words.filter((word) => ids(word).includes(id));
const records = [language, inventory].map((value) => ({
    ...value.fm,
    package: "thalorna",
    system: "note",
    file: value.file,
}));

test("Vylari expresses every current core concept in a dictionary eligible form", () => {
    const concepts = inventory.fm.data.concepts;
    const known = new Set(concepts.map((entry) => entry.id));
    const eligible = new Set(
        WORD_CLASS_BASES.filter((base) => base.glossary).map((base) => base.token),
    );
    const missing = concepts.filter((entry) => !bindings(entry.id).length);
    assert.deepEqual(
        missing.map((entry) => entry.id),
        [],
        `${missing.length} concepts lack expressions`,
    );
    for (const word of language.fm.data.words)
        for (const id of ids(word)) {
            assert(known.has(id), `unknown concept ${id}`);
            assert(
                eligible.has(parseWordClass(word.class).base),
                `${id}: ${word.form} is not a dictionary expression`,
            );
            assert(
                word.form.trim() && [word.gloss].flat().every((gloss) => gloss.trim()),
                `${id} needs a form and meaning`,
            );
        }
    const report = coreReport(records, { language: "vylarilng" });
    assert.equal(report.concepts, concepts.length);
    assert.equal(report.languages[0].covered, concepts.length);
    assert.deepEqual(report.languages[0].missing, []);
});

test("the actual dictionary projection preserves forms, senses and classes", () => {
    const rows = wordRows(records);
    const { dictionary } = dictionaryAndTermRows(records);
    for (const word of language.fm.data.words.filter((word) => ids(word).length)) {
        const row = rows.find((row) => row.form === word.form && row.class === word.class);
        assert(row, `dictionary lost ${word.form}`);
        assert.equal(row.gloss, [word.gloss].flat().join("; "));
        assert.deepEqual(row.concept, word.concept);
        const printed = dictionary.find(
            (entry) =>
                entry.language === "thalorna-note-skill-vylarilng" && entry.name === word.form,
        );
        assert(printed, `printed dictionary lost ${word.form}`);
        assert.equal(printed.class, word.class);
        assert.deepEqual(
            printed.senses.map((sense) => sense.text),
            [word.gloss].flat(),
        );
    }
});

test("Vylari frontmatter and word declarations use the installed consumer", () => {
    const index = { notes: [language, inventory] };
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }).filter((finding) => finding.severity === "error"),
        [],
    );
    assert.deepEqual(
        checkLanguageWords(language, { index }).filter((finding) => finding.severity === "error"),
        [],
    );
});

test("four loves, bodily sensation, emotion and epistemic claims stay distinct", () => {
    for (const group of [
        ["love-eros", "love-philia", "love-storge", "love-agape", "lust"],
        ["truth", "certainty"],
        ["true", "certain"],
        ["touch-verb", "feel-verb"],
        ["sensation", "satisfaction"],
        ["hurt-verb", "hurt-pain"],
        ["see-verb", "see-noun"],
        ["hear-verb", "hear-noun"],
        ["smell-verb", "smell-noun"],
        ["taste-verb", "taste-noun"],
        ["touch-verb", "touch-noun"],
        ["drink-verb", "drink-noun"],
        ["sleep-verb", "sleep-noun"],
        ["may-permission", "cannot", "must-not"],
    ]) {
        const available = group.filter((id) =>
            inventory.fm.data.concepts.some((entry) => entry.id === id),
        );
        for (const id of available) assert(bindings(id).length, id);
        const forms = available.map((id) =>
            bindings(id)
                .map((word) => word.form)
                .join("|"),
        );
        assert.equal(new Set(forms).size, forms.length, available.join(", "));
    }
    for (const [id, sense] of [
        ["love-eros", /romantic|lovers/],
        ["love-philia", /friend/],
        ["love-storge", /family/],
        ["love-agape", /selfless/],
        ["lust", /lust|sexual/],
        ["certainty", /certainty|convinced|certain/],
        ["tongue", /anatomical|mouth|organ/],
        ["may-permission", /lawful|permission|allowed/],
        ["cannot", /unable|cannot|ability/],
    ])
        assert(
            bindings(id).some((word) => sense.test([word.gloss].flat().join("; "))),
            `${id} needs its actual meaning`,
        );
});

test("Semaron mapping and its actual face draw every core expression", () => {
    const spelling = note("assets/content/Lore/Scripts/Semaron_Spelling.md");
    const map = encodingReference("vyl").encoding;
    const face = resolveScriptFonts(process.cwd()).faces.get(map.font);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    assert.equal(map.language, "vyl");
    for (const word of language.fm.data.words) {
        const written = encodeWithLanguage(map, word.form, { font: face.name }).text;
        assert(written.trim(), word.form);
        for (const char of written) {
            if (/\s/u.test(char)) continue;
            const glyph = outlines.glyph(char.codePointAt(0));
            assert(
                face.draws.has(char.codePointAt(0)) && glyph?.d && glyph.index !== box,
                `${word.form}: ${char} has no usable Semaron outline`,
            );
        }
    }
});
