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
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { coreReport } from "@heroiclands/package-build/engine/core-report";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";

function note(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const language = note("assets/content/Skills/Languages/Helonic.md");
const inventory = note("assets/content/Reference/Core_Vocabulary.md");
const notes = [language, inventory];
const records = notes.map(({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" }));
const glossaryBases = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const words = language.fm.data.words.filter((word) =>
    glossaryBases.has(parseWordClass(word.class).base),
);

test("Helonic gives every current core concept an ordinary usable expression", () => {
    const expected = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const actual = new Set(words.flatMap((word) => [word.concept ?? []].flat()));
    assert.deepEqual(
        [...expected].filter((id) => !actual.has(id)),
        [],
        "missing ordinary expressions",
    );
    assert.deepEqual(
        [...actual].filter((id) => !expected.has(id)),
        [],
        "unknown concepts",
    );
    for (const word of words) {
        assert(word.form.trim(), "an expression has a form");
        assert(
            [word.gloss].flat().every((sense) => typeof sense === "string" && sense.trim()),
            `${word.form} needs a meaning`,
        );
    }
    const report = coreReport(records, { language: "helonclng" }).languages[0];
    assert.equal(report.total, expected.size);
    assert.equal(report.covered, expected.size);
    assert.deepEqual(report.missing, []);
});

test("Helonic meanings reach the actual dictionary projection", () => {
    const dictionary = dictionaryAndTermRows(records).dictionary.filter(
        ({ language }) => language === "thalorna-note-skill-helonclng",
    );
    assert.equal(dictionary.length, words.length);
    for (const word of words) {
        const entry = dictionary.find(({ name }) => name === word.form);
        assert(entry, `published entry: ${word.form}`);
        assert.deepEqual(
            entry.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Helonic frontmatter and expressions satisfy the consumer contracts", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index: { notes } }), []);
});

test("Helonic expressions reach the published dictionary with their usage", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const body = splitFrontmatter(language.raw).body;
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-helonclng");
    const rendered = insertLexicalSections(body, sections).markdown;
    assert.equal([...rendered.matchAll(/\.dictionary-entry\}/g)].length, words.length);
    for (const word of words) {
        assert(rendered.includes(`**${word.form}**`), `visible headword: ${word.form}`);
        for (const sense of [word.gloss].flat())
            assert(
                rendered.toLowerCase().includes(sense.toLowerCase()),
                `visible meaning: ${word.form}`,
            );
    }
});

test("Helonic expressions render through their actual Helonika map and font", async () => {
    const { renderRuns } = await import("@heroiclands/package-build/engine/content-scripts");
    const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
    const { resolveScriptFonts } = await import("@heroiclands/package-build/engine/script-fonts");
    const spelling = note("assets/content/Lore/Scripts/Helonika_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const ctx = referenceContext({ ...config, rootDir: process.cwd() }, [
        ...records,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const map = encodingReference("helo").encoding;
    const face = resolveScriptFonts(process.cwd()).faces.get("helonika-book");
    const native = serializeLexicon(ctx.lexicons.get("helo"));
    const outlines = fontOutlines(face.file);
    for (const word of words)
        for (const form of [word.form, ...(word.variants ?? [])]) {
            const rendered = renderRuns(`[${form}]{lang=helo enc=${map.name}}`, ctx);
            assert.deepEqual(rendered.errors, [], form);
            const mapped = encodeWithLanguage(map, form, {
                font: "helonika-book",
                lexicon: native,
            }).text;
            assert(rendered.markdown.includes(mapped), `mapped output: ${form}`);
            for (const char of mapped) {
                if (/\s/u.test(char)) continue;
                assert(face.draws.has(char.codePointAt(0)), `${form}: undeclared glyph ${char}`);
                assert(
                    outlines.glyph(char.codePointAt(0))?.d,
                    `${form}: glyph has no outline ${char}`,
                );
            }
        }
});

test("every word used inside a Helonic core expression is defined", () => {
    const defined = new Set(
        language.fm.data.words.map(({ form }) => form.normalize("NFC").toLowerCase()),
    );
    for (const word of words.filter(({ concept }) => concept)) {
        for (const part of word.form.split(/\s+/u)) {
            assert(
                defined.has(part.normalize("NFC").toLowerCase()),
                `${word.form}: undefined constituent ${part}`,
            );
        }
    }
});

const daughters = ["Bethuan", "Byzarian"].map((name) =>
    note(`assets/content/Skills/Languages/${name}.md`),
);
const loanSource = note("assets/content/Skills/Languages/Khelathi.md");
const familyNotes = [language, ...daughters, inventory, loanSource];
const { parseAddress, renderAddress } = await import("@heroiclands/package-build/engine/address");
const familyRecords = familyNotes.map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
    data: {
        ...fm.data,
        ...(fm.data.words ?
            {
                words: fm.data.words.map((word) => ({
                    ...word,
                    ...(word.source?.language ?
                        {
                            source: {
                                ...word.source,
                                language: renderAddress(
                                    parseAddress(word.source.language, {
                                        package: "thalorna",
                                        system: "note",
                                        types: new Set(familyNotes.map(({ fm }) => fm.type)),
                                    }),
                                ),
                            },
                        }
                    :   {}),
                })),
            }
        :   {}),
        ...(fm.data.family ?
            {
                family: renderAddress(
                    parseAddress(fm.data.family, {
                        package: "thalorna",
                        system: "note",
                        types: new Set(familyNotes.map(({ fm }) => fm.type)),
                    }),
                ),
            }
        :   {}),
    },
}));
const familyByKey = new Map(
    familyRecords.map((record) => [
        renderAddress({
            package: record.package,
            system: "note",
            type: record.type,
            shortcode: record.shortcode,
        }),
        record,
    ]),
);
function nearestWords(record) {
    const found = new Map();
    const visited = new Set();
    for (
        let current = record;
        current && !visited.has(current);
        current = familyByKey.get(current.data?.family)
    ) {
        visited.add(current);
        for (const word of current.data?.words ?? []) {
            const form = word.form.normalize("NFC");
            if (!found.has(form)) found.set(form, { word, source: current.shortcode });
        }
    }
    return [...found.values()].filter(({ word }) =>
        glossaryBases.has(parseWordClass(word.class).base),
    );
}
function ordinaryForm(form, child) {
    const oldCognates = new Set(
        (language.fm.data.cognates ?? [])
            .map(({ forms }) => forms[`skill-${child.shortcode}`])
            .filter(Boolean),
    );
    return form
        .split(/\s+/u)
        .every(
            (part) =>
                oldCognates.has(part) ||
                (child.shortcode === "bethunlng" ?
                    !/ps|ks|eu/iu.test(part)
                :   !/^kh|th|dh|rh/iu.test(part)),
        );
}
for (const child of familyRecords.filter(({ shortcode }) =>
    daughters.some(({ fm }) => fm.shortcode === shortcode),
)) {
    test(`${child.name.full} has an ordinary expression for every core concept under its nearest definitions`, () => {
        const selected = nearestWords(child).filter(({ word }) => ordinaryForm(word.form, child));
        const have = new Set(selected.flatMap(({ word }) => [word.concept ?? []].flat()));
        const expected = inventory.fm.data.concepts.map(({ id }) => id);
        assert.deepEqual(
            expected.filter((id) => !have.has(id)),
            [],
            "missing native expressions",
        );
        const projected = dictionaryAndTermRows(familyRecords).dictionary.filter(
            ({ language }) => language === `thalorna-note-skill-${child.shortcode}`,
        );
        for (const { word } of selected) {
            const entry = projected.find(({ name }) => name === word.form);
            assert(entry, `dictionary expression: ${word.form}`);
            assert.deepEqual(
                entry.senses.map(({ text }) => text),
                [word.gloss].flat(),
                word.form,
            );
        }
        const report = coreReport(familyRecords, { language: child.shortcode }).languages[0];
        assert.equal(report.covered, expected.length);
    });
}

const familyIndex = {
    notes: familyNotes,
    contentPackage: "thalorna",
    types: new Set(familyNotes.map(({ fm }) => fm.type)),
    addressHit: (key) => familyByKey.get(key),
};
for (const child of daughters) {
    test(`${child.fm.name.full} satisfies the frontmatter, word, name and actual source contracts`, async () => {
        const { namesFindings } = await import("@heroiclands/package-build/engine/language-names");
        const local = lintNote(child, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        });
        assert.deepEqual(
            local,
            checkLanguageWords(child, { index: { notes: familyNotes } }),
            "schema findings are only the unlinked ancestor pieces",
        );
        assert.deepEqual(checkLanguageWords(child, { index: familyIndex }), []);
        assert.deepEqual(namesFindings(child, BEING_LOOK_VOCABULARY), []);
        for (const word of child.fm.data.words.filter(
            ({ source }) => source?.kind === "borrowed",
        )) {
            const sourceKey = renderAddress(
                parseAddress(word.source.language, {
                    package: "thalorna",
                    system: "note",
                    types: familyIndex.types,
                }),
            );
            const source = familyByKey.get(sourceKey);
            assert(
                source?.data.words.some(
                    ({ form }) => form.normalize("NFC") === word.source.form.normalize("NFC"),
                ),
                `${word.form}: actual source form`,
            );
            const entry = dictionaryAndTermRows(familyRecords).dictionary.find(
                ({ language, name }) =>
                    language === `thalorna-note-skill-${child.fm.shortcode}` && name === word.form,
            );
            assert.equal(entry.etymology.kind, "borrowed");
            assert.equal(entry.etymology.language, sourceKey);
            assert.equal(entry.etymology.form, word.source.form);
        }
    });
    test(`${child.fm.name.full} publishes every nearest meaning and its native Helonika forms`, async () => {
        const { lexicalSectionsFor, insertLexicalSections } =
            await import("@heroiclands/package-build/engine/lexical-sections");
        const { renderRuns } = await import("@heroiclands/package-build/engine/content-scripts");
        const { fontOutlines } = await import("@heroiclands/package-build/engine/font-outlines");
        const { resolveScriptFonts } =
            await import("@heroiclands/package-build/engine/script-fonts");
        const key = `thalorna-note-skill-${child.fm.shortcode}`;
        const record = familyByKey.get(key);
        const selected = nearestWords(record);
        const sections = lexicalSectionsFor(familyRecords).get(key);
        const rendered = insertLexicalSections(splitFrontmatter(child.raw).body, sections).markdown;
        assert.equal([...rendered.matchAll(/\.dictionary-entry\}/g)].length, selected.length);
        for (const { word } of selected) {
            assert(rendered.includes(`**${word.form}**`), `visible headword: ${word.form}`);
            for (const sense of [word.gloss].flat())
                assert(
                    rendered.toLowerCase().includes(sense.toLowerCase()),
                    `visible meaning: ${word.form}`,
                );
        }
        const maps = ["Helonika_Spelling", "Bethuan_Spelling", "Bizarian_Spelling"].map((name) =>
            note(`assets/content/Lore/Scripts/${name}.md`),
        );
        const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
        const ctx = referenceContext({ ...config, rootDir: process.cwd() }, [
            ...familyRecords,
            ...maps.map(({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" })),
        ]);
        const tag = Object.entries(config.languages).find(
            ([, value]) => value.note === `skill-${child.fm.shortcode}`,
        )[0];
        const map = encodingReference(tag).encoding,
            face = resolveScriptFonts(process.cwd()).faces.get(map.font);
        const native = serializeLexicon(ctx.lexicons.get(tag));
        const outlines = fontOutlines(face.file),
            box = outlines.glyph("c".codePointAt(0))?.index;
        const defined = new Set(
            selected.map(({ word }) => word.form.normalize("NFC").toLowerCase()),
        );
        for (const { word } of selected.filter(({ word }) => ordinaryForm(word.form, record))) {
            if (word.concept)
                for (const part of word.form.split(/\s+/u))
                    assert(
                        defined.has(part.normalize("NFC").toLowerCase()),
                        `${word.form}: missing constituent ${part}`,
                    );
            for (const form of [word.form, ...(word.variants ?? [])]) {
                const result = renderRuns(
                    `[${form}]{lang=${tag} enc=${map.name} font=${map.font}}`,
                    ctx,
                );
                assert.deepEqual(result.errors, [], form);
                const mapped = encodeWithLanguage(map, form, {
                    font: map.font,
                    lexicon: native,
                }).text;
                assert(result.markdown.includes(mapped), `actual mapped output: ${form}`);
                for (const char of mapped) {
                    if (/\s/u.test(char)) continue;
                    const glyph = outlines.glyph(char.codePointAt(0));
                    assert(
                        face.draws.has(char.codePointAt(0)),
                        `${form}: undeclared glyph ${char}`,
                    );
                    assert(
                        glyph?.d && glyph.index !== box,
                        `${form}: missing or boxed glyph ${char}`,
                    );
                }
            }
        }
    });
}

for (const child of daughters) {
    test(`${child.fm.name.full} recognizes inherited words in strict language runs`, async () => {
        const { renderRuns } = await import("@heroiclands/package-build/engine/content-scripts");
        const maps = ["Helonika_Spelling", "Bethuan_Spelling", "Bizarian_Spelling"].map((name) =>
            note(`assets/content/Lore/Scripts/${name}.md`),
        );
        const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
        const ctx = referenceContext({ ...config, rootDir: process.cwd() }, [
            ...familyRecords,
            ...maps.map(({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" })),
        ]);
        const tag = Object.entries(config.languages).find(
            ([, value]) => value.note === `skill-${child.fm.shortcode}`,
        )[0];
        const record = familyByKey.get(`thalorna-note-skill-${child.fm.shortcode}`);
        for (const { word } of nearestWords(record).filter(({ word }) =>
            ordinaryForm(word.form, record),
        )) {
            assert.deepEqual(renderRuns(`[${word.form}]{lang=${tag}}`, ctx).errors, [], word.form);
        }
    });
}
