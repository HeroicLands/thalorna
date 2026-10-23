/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { coreReport } from "@heroiclands/package-build/engine/core-report";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { compileMap, applyMap } from "@heroiclands/package-build/engine/text-maps";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { nativeLookup } from "@heroiclands/package-build/engine/map-lexicon";
import {
    renderRuns,
    runContext,
    scanRuns,
} from "@heroiclands/package-build/engine/content-scripts";
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
const language = note(process.env.AELENDI_PATH ?? "assets/content/Skills/Languages/Aelendi.md");
const inventory = note("assets/content/Reference/Core_Vocabulary.md");
const ids = (word) => [word.concept ?? []].flat();
const bindings = (id) => language.fm.data.words.filter((word) => ids(word).includes(id));
const records = [language, inventory].map((value) => ({
    ...value.fm,
    package: "thalorna",
    system: "note",
    file: value.file,
}));

test("Áelendi expresses every current core concept in a dictionary eligible form", () => {
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
    const report = coreReport(records, { language: "aelendlng" });
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
                entry.language === "thalorna-note-skill-aelendlng" &&
                entry.name === word.form &&
                entry.class === word.class,
        );
        assert(printed, `printed dictionary lost ${word.form}`);
        assert.equal(printed.class, word.class);
        assert.deepEqual(
            printed.senses.map((sense) => sense.text),
            [word.gloss].flat(),
        );
    }
});

test("Áelendi frontmatter and word declarations use the installed consumer", () => {
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
        ["love-storge", /family|kin/],
        ["love-agape", /selfless|given to all/],
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

test("every borrowed word names a real Sinale source", () => {
    const sinale = note("assets/content/Skills/Languages/Sinale.md");
    const forms = new Set(sinale.fm.data.words.map((word) => word.form));
    for (const word of language.fm.data.words.filter((word) => word.source?.kind === "borrowed")) {
        assert.equal(word.source.language, "skill-sinalelng", word.form);
        assert(
            forms.has(word.source.form),
            `${word.form}: unattested Sinale source ${word.source.form}`,
        );
    }
});

test("Veldikko mapping and its actual face draw every core expression", () => {
    const spelling = note("assets/content/Lore/Scripts/Veldikko_Aelendi_Spelling.md");
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(language.fm.data.writtenIn.font);
    const outlines = fontOutlines(face.file);
    assert.equal(map.name, language.fm.data.writtenIn.map);
    for (const word of language.fm.data.words) {
        const written = applyMap(map, word.form, { font: face.slug }).text;
        assert(written.trim(), word.form);
        for (const char of written) {
            if (/\s/u.test(char)) continue;
            const codepoint = char.codePointAt(0);
            assert(codepoint >= 0x1ed50 && codepoint <= 0x1edff, `${word.form}: unmapped ${char}`);
            const glyph = outlines.glyph(codepoint);
            assert(
                face.draws.has(codepoint) && glyph?.d && glyph.index > 0,
                `${word.form}: ${char} has no usable Veldikko outline`,
            );
        }
    }
});

test("ordinary Áelendi citations do not reuse its retired forms", () => {
    const retired = new Set(language.fm.data.retired.map(({ form }) => form.normalize("NFC")));
    for (const word of language.fm.data.words)
        for (const form of [word.form, ...word.form.split(/\s+/u)])
            assert(!retired.has(form.normalize("NFC")), `${word.form}: retired ${form}`);
});

test("the coined affirmative keeps its native shape and actual configured rendering", () => {
    const yes = bindings("yes");
    assert.equal(yes.length, 1);
    const word = yes[0];
    assert.equal(word.source.kind, "coined");
    assert.equal(parseWordClass(word.class).base, "part");
    assert.equal((word.form.match(/[aeiou]/gu) ?? []).length, 1);
    assert(!/[fvbpw'’]|ae|ou/u.test(word.form));
    const onset = word.form.match(/^[^aeiou]+/u)?.[0];
    const coda = word.form.match(/[^aeiou]+$/u)?.[0];
    assert(
        language.fm.data.sounds.edges
            .find(({ edge }) => edge === "openCluster")
            .sounds.includes(onset),
    );
    assert(
        language.fm.data.sounds.edges
            .find(({ edge }) => edge === "closeConsonant")
            .sounds.includes(coda),
    );
    const phrase = bindings("of-course")[0];
    assert.deepEqual(phrase.built, [word.form, "tenri"]);
    const spelling = note("assets/content/Lore/Scripts/Veldikko_Aelendi_Spelling.md");
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(language.fm.data.writtenIn.font);
    const outlines = fontOutlines(face.file);
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = runContext({ ...config, rootDir: process.cwd() }, [
        ...records,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const configured = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${language.fm.type}-${language.fm.shortcode}`,
    );
    assert.equal(configured.length, 1);
    const [[key, definition]] = configured;
    assert(context.wordBooks.has(key));
    assert(context.lexicons.has(key));
    const native = nativeLookup(context.lexicons.get(key), map.name, face.slug);
    const attributes = `.nativefont lang=${key} map=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${word.form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].lang, key);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const drawn = (form) => {
        const written = applyMap(map, form, { font: face.slug, native }).text;
        for (const char of written) {
            if (/\s/u.test(char)) continue;
            const code = char.codePointAt(0);
            const glyph = outlines.glyph(code);
            assert(code >= 0x1ed50 && code <= 0x1edff, `${form}: unmapped ${char}`);
            assert(face.draws.has(code) && glyph?.d && glyph.index > 0, `${form}: missing outline`);
        }
        return written;
    };
    const dictionary = dictionaryAndTermRows(records).dictionary;
    for (const citation of [word, phrase]) {
        const row = dictionary.find(
            ({ language: owner, name }) =>
                owner === "thalorna-note-skill-aelendlng" && name === citation.form,
        );
        assert.equal(row.class, citation.class);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [citation.gloss].flat(),
        );
        const output = renderRuns(`[${citation.form}]{${attributes}}`, context);
        assert.deepEqual(output.errors, []);
        assert(output.markdown.includes(drawn(citation.form)));
    }
    const unknown = "drindrin";
    assert.equal(context.wordBooks.get(key).accepts(unknown), false);
    drawn(unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${key}\` lexicon`));
});
