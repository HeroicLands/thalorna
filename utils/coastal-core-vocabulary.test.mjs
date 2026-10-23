/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { parseAddress, renderAddress } from "@heroiclands/package-build/engine/address";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { checkLanguageWords } from "@heroiclands/package-build/engine/language-words";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { namesFindings } from "@heroiclands/package-build/engine/language-names";
import {
    NOTE_VOCABULARY,
    BEING_LOOK_VOCABULARY,
} from "@heroiclands/package-build/engine/note-vocabulary";
import { compileMap, applyMap } from "@heroiclands/package-build/engine/text-maps";
import { nativeLookup } from "@heroiclands/package-build/engine/map-lexicon";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read(process.env.PROVENZAL_PATH ?? "assets/content/Skills/Languages/Provenzal.md");
const parent = read("assets/content/Skills/Languages/Vylari.md");
const northern = read("assets/content/Skills/Languages/Elavendri.md");
const inventory = read("assets/content/Reference/Core_Vocabulary.md");
const notes = [language, parent, northern, inventory];
const canonical = (value) =>
    renderAddress(
        parseAddress(value, {
            package: "thalorna",
            system: "note",
            types: new Set(notes.map(({ fm }) => fm.type)),
        }),
    );
const records = notes.map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
    data: {
        ...fm.data,
        ...(fm.data.family ? { family: canonical(fm.data.family) } : {}),
        ...(fm.data.words ?
            {
                words: fm.data.words.map((word) => ({
                    ...word,
                    ...(word.source?.language ?
                        { source: { ...word.source, language: canonical(word.source.language) } }
                    :   {}),
                })),
            }
        :   {}),
    },
}));
const recordByKey = new Map(
    records.map((record) => [
        renderAddress({
            package: record.package,
            system: "note",
            type: record.type,
            shortcode: record.shortcode,
        }),
        record,
    ]),
);
const familyIndex = {
    notes,
    contentPackage: "thalorna",
    types: new Set(notes.map(({ fm }) => fm.type)),
    addressHit: (key) => recordByKey.get(key),
};
const eligible = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const ids = (word) => [word.concept ?? []].flat();
const nearest = new Map();
for (const [depth, note] of [language, parent].entries())
    for (const word of note.fm.data.words) {
        const key = word.form.normalize("NFC");
        if (!nearest.has(key)) nearest.set(key, { word, depth });
    }
const localSources = new Set();
for (const word of language.fm.data.words) {
    if (!word.source?.form) continue;
    if (word.source.language === "skill-vylarilng")
        localSources.add(word.source.form.normalize("NFC"));
    if (["inherited", "worn"].includes(word.source.kind))
        for (const ancestor of parent.fm.data.words)
            if (ancestor.form === word.source.form || ancestor.source?.form === word.source.form)
                localSources.add(ancestor.form.normalize("NFC"));
}
// These raw ancestor forms independently collide with whole words of the daughter's models.
// Keep their dictionary rows; ordinary Provenzal uses its own citations instead.
// eza is retained: its source matches are bound suffixes, not independent words.
const inheritedModelCollisions = new Set(["pra", "kan", "arzon", "lan"]);
const inheritedUsable = (word) =>
    // A whole ancestor utterance needs its own daughter attestation, even in one written word.
    parseWordClass(word.class).base !== "call" &&
    !inheritedModelCollisions.has(word.form.normalize("NFC")) &&
    !/^n n(?: |$)/.test(word.class) &&
    !word.form.includes(" ") &&
    !/th|dh|kh|gh|zd|w|y|'|c(?!h)|(?<!c)h/iu.test(word.form) &&
    // The charter excludes the Helonic noun/adjective ending, not particle fos.
    !(/os$/iu.test(word.form) && ["n", "adj"].includes(parseWordClass(word.class).base)) &&
    /[aeiouëlnrs]$/iu.test(word.form) &&
    !localSources.has(word.form.normalize("NFC"));
const lyricOnly = (word) =>
    [word.gloss]
        .flat()
        .every((sense) => /in a lyric|in a song|as the songs|as a song|as a poet/i.test(sense));
const ordinary = [...nearest.values()].filter(
    ({ word, depth }) =>
        eligible.has(parseWordClass(word.class).base) &&
        !word.form.endsWith("-") &&
        !lyricOnly(word) &&
        (!depth || inheritedUsable(word)),
);
const bindings = (id) => ordinary.filter(({ word }) => ids(word).includes(id));

test("Provenzal gives every current core concept an ordinary nearest expression", () => {
    assert(ordinary.some(({ word }) => word.form === "fos" && word.class === "part"));
    assert(!inheritedUsable(parent.fm.data.words.find(({ form }) => form === "kormeros")));
    for (const word of language.fm.data.words.filter(
        (word) => word.form.includes(" ") && word.built,
    ))
        for (const piece of word.built)
            assert(
                ordinary.some(({ word: component }) => component.form === piece),
                `${word.form}: ${piece} must be an ordinary free component`,
            );
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const missing = [...known].filter((id) => !bindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary daughter expressions`);
    for (const { word } of nearest.values())
        for (const id of ids(word)) assert(known.has(id), `${word.form}: unknown concept ${id}`);
});

test("nearest NFC definitions and their actual senses reach the daughter dictionary", () => {
    const dictionary = dictionaryAndTermRows(records).dictionary.filter(
        ({ language }) => language === "thalorna-note-skill-provnzlng",
    );
    for (const { word, depth } of nearest.values()) {
        if (!eligible.has(parseWordClass(word.class).base)) continue;
        const row = dictionary.find(({ name }) => name === word.form.normalize("NFC"));
        assert(row, word.form);
        assert.equal(row.depth, depth, word.form);
        assert.equal(row.class, word.class, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Provenzal declarations use the installed word and frontmatter contracts", () => {
    const options = {
        schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
        vocabulary: NOTE_VOCABULARY,
        addressContext: { package: "thalorna", system: "note" },
    };
    assert.deepEqual(
        lintNote(language, options).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index: familyIndex }), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
});

test("Provenzal prints nearest senses and renders ordinary words through its configured language", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const { renderRuns, runContext, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-provnzlng");
    const rendered = insertLexicalSections(splitFrontmatter(language.raw).body, sections).markdown;
    for (const { word } of ordinary) {
        assert(rendered.includes(`**${word.form}**`), word.form);
        for (const gloss of [word.gloss].flat())
            assert(rendered.toLowerCase().includes(gloss.toLowerCase()), word.form);
    }
    const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
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
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(language.fm.data.writtenIn.font);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    const native = nativeLookup(context.lexicons.get(key), map.name, face.slug);
    const attributes = `.nativefont lang=${key} map=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${language.fm.data.words[0].form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const drawn = (text, form) => {
        assert(text.trim(), form);
        for (const char of text) {
            if (/\s/u.test(char)) continue;
            const code = char.codePointAt(0);
            const glyph = outlines.glyph(code);
            assert(face.draws.has(code) && glyph?.d && glyph.index !== box, `${form}: ${char}`);
        }
    };
    for (const { word } of ordinary) {
        const mapped = applyMap(map, word.form, { font: face.slug, native }).text;
        drawn(mapped, word.form);
        const output = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(output.errors, [], word.form);
        assert(output.markdown.includes(mapped), word.form);
    }
    const unknown = "ulmerulmer";
    assert.equal(context.wordBooks.get(key).accepts(unknown), false);
    drawn(applyMap(map, unknown, { font: face.slug, native }).text, unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${key}\` lexicon`));
});

test("ordinary Provenzal respects its documented sound edges and attested exceptions", () => {
    const body = splitFrontmatter(language.raw).body;
    const samples = body.split("## Sample Phrases")[1].split("\n## ")[0];
    const formula = "Brave jhorne, genthe korthe; que la preja soie talv vei";
    assert(samples.includes(formula));
    const attested = new Set(["talv", "narthen", "jhorne"]);
    for (const token of attested) assert(samples.includes(`_${token}_`), token);
    // These two existing closed-class words have their own preserved consonant finals.
    const closed = new Set(["at", "ez"]);
    assert(language.fm.data.words.some(({ form, class: cls }) => form === "at" && cls === "art"));
    assert(language.fm.data.words.some(({ form, class: cls }) => form === "ez" && cls === "v"));
    const openings = new Set(
        language.fm.data.sounds.edges.find(({ edge }) => edge === "openCluster").sounds,
    );
    const closings = new Set(
        language.fm.data.sounds.edges.find(({ edge }) => edge === "closeConsonant").sounds,
    );
    for (const { word } of ordinary) {
        if (word.form === formula) continue;
        assert(!/['’]/u.test(word.form), word.form);
        for (const token of word.form.match(/\p{L}[\p{L}\p{M}]*/gu) ?? []) {
            const decomposed = token.normalize("NFD");
            assert((decomposed.match(/\p{M}/gu) ?? []).length <= 1, token);
            const text = decomposed.replace(/\p{M}/gu, "").toLowerCase();
            if (attested.has(text) || closed.has(text)) continue;
            assert(!/th|dh|kh|gh|zd/u.test(text), word.form);
            const sounds = text.match(/ch|ny|./g) ?? [];
            const clusters = sounds
                .join(" ")
                .split(/ ?[aeiou] ?/)
                .map((part) => part.trim().split(" ").filter(Boolean));
            assert(
                clusters.every((cluster) => cluster.length <= language.fm.data.sounds.clusters.max),
                `${word.form}: cluster`,
            );
            assert(
                clusters[0].length <= 1 || openings.has(clusters[0].join("")),
                `${word.form}: opening`,
            );
            const closing = clusters.at(-1);
            assert(
                closing.length === 0 || (closing.length === 1 && closings.has(closing[0])),
                `${word.form}: closing`,
            );
        }
    }
});

test("source receipts remain attested and older unresolved loans remain explicit", () => {
    const inherited = new Set(
        parent.fm.data.words.flatMap((word) => [
            word.form,
            ...(word.variants ?? []),
            ...(word.source?.form ? [word.source.form] : []),
        ]),
    );
    for (const word of language.fm.data.words)
        if (["inherited", "worn"].includes(word.source?.kind) && word.source.form)
            assert(inherited.has(word.source.form), `${word.form}: ${word.source.form}`);
    const unresolved = language.fm.data.words
        .filter((word) => {
            if (word.source?.kind !== "borrowed") return false;
            const donor = word.source.language === "skill-vylarilng" ? parent : northern;
            return !donor.fm.data.words.some(
                (source) =>
                    source.form === word.source.form ||
                    (source.variants ?? []).includes(word.source.form),
            );
        })
        .map(({ form, source }) => ({ form, source: source.form }));
    // These existing references are preserved pending their own provenance correction.
    assert.deepEqual(unresolved, [
        { form: "tolmesa", source: "thólmesa" },
        { form: "tilandon", source: "thíelandon" },
    ]);
});

const tarveni = read(process.env.TARVENI_PATH ?? "assets/content/Skills/Languages/Tarveni.md");
const tarveniNotes = [tarveni, parent, language, northern, inventory];
const tarveniRecords = tarveniNotes.map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
    data: {
        ...fm.data,
        ...(fm.data.family ? { family: canonical(fm.data.family) } : {}),
        ...(fm.data.words ?
            {
                words: fm.data.words.map((word) => ({
                    ...word,
                    ...(word.source?.language ?
                        { source: { ...word.source, language: canonical(word.source.language) } }
                    :   {}),
                })),
            }
        :   {}),
    },
}));
const tarveniByKey = new Map(
    tarveniRecords.map((record) => [canonical(`${record.type}-${record.shortcode}`), record]),
);
const tarveniIndex = {
    notes: tarveniNotes,
    contentPackage: "thalorna",
    types: new Set(tarveniNotes.map(({ fm }) => fm.type)),
    addressHit: (key) => tarveniByKey.get(key),
};
const tarveniNearest = new Map();
for (const [depth, note] of [tarveni, parent].entries())
    for (const word of note.fm.data.words)
        if (!tarveniNearest.has(word.form.normalize("NFC")))
            tarveniNearest.set(word.form.normalize("NFC"), { word, depth });
const tarveniSources = new Set();
for (const word of tarveni.fm.data.words) {
    if (!word.source?.form) continue;
    if (word.source.language === `${parent.fm.type}-${parent.fm.shortcode}`)
        tarveniSources.add(word.source.form.normalize("NFC"));
    if (["inherited", "worn", "kept"].includes(word.source.kind))
        for (const ancestor of parent.fm.data.words)
            if (ancestor.form === word.source.form || ancestor.source?.form === word.source.form)
                tarveniSources.add(ancestor.form.normalize("NFC"));
}
// Independent whole-word matches in the daughter's actual Spanish/Basque models.
// Their inherited dictionary records remain intact; ordinary alternatives are supplied locally.
const tarveniModelCollisions = new Set([
    "kan",
    "kaldera",
    "kalderos",
    "talon",
    "arzon",
    "lan",
    "ziron",
    "kona",
]);
const tarveniInheritedUsable = (word) => {
    if (tarveniModelCollisions.has(word.form.normalize("NFC"))) return false;
    const base = parseWordClass(word.class).base;
    if (base === "call" || (base === "v" && !/(?:ad|ed|id)$/u.test(word.form))) return false;
    // Retain compatible ancestral noun/quality/particle expressions when their
    // individually cited components remain ordinary here. Whole action clauses
    // still need a daughter SVO citation; no ancestral inflection is inferred.
    if (word.form.includes(" "))
        return (
            base !== "v" &&
            word.form.split(" ").every((form) => {
                const entry = tarveniNearest.get(form.normalize("NFC"));
                return (
                    entry &&
                    eligible.has(parseWordClass(entry.word.class).base) &&
                    !entry.word.form.endsWith("-") &&
                    (!entry.depth || tarveniInheritedUsable(entry.word))
                );
            })
        );
    if (/f|^r|kh|gh|ph|dh|mr|['’]|c(?!h)|j|y/iu.test(word.form)) return false;
    if (!/[aeioundkrls]$|th$|ts$/iu.test(word.form)) return false;
    const text = word.form.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
    const sounds = text.match(/th|rr|ts|ch|./g) ?? [];
    const clusters = sounds
        .join(" ")
        .split(/ ?[aeiou] ?/)
        .map((part) => part.trim().split(" ").filter(Boolean));
    const openings = new Set(
        tarveni.fm.data.sounds.edges.find(({ edge }) => edge === "openCluster").sounds,
    );
    if (clusters[0].length > 1 && !openings.has(clusters[0].join(""))) return false;
    if (clusters.some((cluster) => cluster.length > tarveni.fm.data.sounds.clusters.max))
        return false;
    return !tarveniSources.has(word.form.normalize("NFC"));
};
const tarveniOrdinary = [...tarveniNearest.values()].filter(
    ({ word, depth }) =>
        eligible.has(parseWordClass(word.class).base) &&
        !word.form.endsWith("-") &&
        (!depth || tarveniInheritedUsable(word)),
);
const tarveniBindings = (id) => tarveniOrdinary.filter(({ word }) => ids(word).includes(id));

test("Tarveni gives every current core concept an ordinary nearest expression", () => {
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id));
    const missing = [...known].filter((id) => !tarveniBindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary Tarveni expressions`);
    for (const { word } of tarveniNearest.values())
        for (const id of ids(word)) assert(known.has(id), `${word.form}: unknown concept ${id}`);
});

test("Tarveni nearest dictionary definitions retain their actual classes and senses", () => {
    const rows = dictionaryAndTermRows(tarveniRecords).dictionary.filter(
        ({ language: owner }) => owner === canonical(`${tarveni.fm.type}-${tarveni.fm.shortcode}`),
    );
    for (const { word, depth } of tarveniNearest.values()) {
        if (!eligible.has(parseWordClass(word.class).base)) continue;
        const row = rows.find(({ name }) => name === word.form.normalize("NFC"));
        assert(row, word.form);
        assert.equal(row.depth, depth, word.form);
        assert.equal(row.class, word.class, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Tarveni declarations and real borrowed sources satisfy the consumer contract", () => {
    assert.deepEqual(
        lintNote(tarveni, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(tarveni, { index: tarveniIndex }), []);
    assert.deepEqual(namesFindings(tarveni, BEING_LOOK_VOCABULARY), []);
    const donors = new Map(
        [parent, language, northern].map((note) => [`${note.fm.type}-${note.fm.shortcode}`, note]),
    );
    for (const word of tarveni.fm.data.words.filter((word) => word.source?.language)) {
        const donor = donors.get(word.source.language);
        assert(donor, word.form);
        assert(
            donor.fm.data.words.some(
                (source) =>
                    source.form === word.source.form ||
                    (source.variants ?? []).includes(word.source.form),
            ),
            `${word.form}: source ${word.source.form}`,
        );
    }
});

test("Tarveni uses its actual configured lexicon and Semaron font", async () => {
    const { renderRuns, runContext, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = runContext({ ...config, rootDir: process.cwd() }, [
        ...tarveniRecords,
        { ...spelling.fm, file: spelling.file, package: "thalorna", system: "note" },
    ]);
    const selected = Object.entries(config.languages).filter(
        ([, value]) => value.note === `${tarveni.fm.type}-${tarveni.fm.shortcode}`,
    );
    assert.equal(selected.length, 1);
    const [[key, definition]] = selected;
    assert(context.wordBooks.has(key));
    assert(context.lexicons.has(key));
    const map = compileMap(spelling.fm.data.map);
    const face = resolveScriptFonts(process.cwd()).faces.get(tarveni.fm.data.writtenIn.font);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    const native = nativeLookup(context.lexicons.get(key), map.name, face.slug);
    const attributes = `.nativefont lang=${key} map=${map.name} font=${face.slug}`;
    const scanned = scanRuns(`[${tarveni.fm.data.words[0].form}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].lang, key);
    assert.equal(scanned.runs[0].tag, definition.tag);
    const drawn = (form) => {
        const written = applyMap(map, form, { font: face.slug, native }).text;
        assert(written.trim(), form);
        for (const char of written) {
            if (/\s/u.test(char)) continue;
            const point = char.codePointAt(0),
                glyph = outlines.glyph(point);
            assert(face.draws.has(point) && glyph?.d && glyph.index !== box, `${form}: ${char}`);
        }
        return written;
    };
    for (const { word } of tarveniOrdinary) {
        const output = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(output.errors, [], word.form);
        assert(output.markdown.includes(drawn(word.form)), word.form);
    }
    const unknown = "kordkord";
    assert.equal(context.wordBooks.get(key).accepts(unknown), false);
    drawn(unknown);
    const negative = renderRuns(`[${unknown}]{${attributes}}`, context);
    assert.equal(negative.errors.length, 1);
    assert(negative.errors[0].message.includes(`\`${unknown}\` is not a word`));
    assert(negative.errors[0].message.includes(`\`${key}\` lexicon`));
});

test("Tarveni ordinary words avoid retired forms and its new native citations keep the palette", () => {
    const retired = new Set(tarveni.fm.data.retired.map(({ form }) => form.normalize("NFC")));
    for (const { word } of tarveniOrdinary)
        for (const token of word.form.split(" "))
            assert(!retired.has(token.normalize("NFC")), `${word.form}: retired ${token}`);
    const edges = tarveni.fm.data.sounds.edges;
    const openings = new Set(edges.find(({ edge }) => edge === "openCluster").sounds);
    const closings = new Set(edges.find(({ edge }) => edge === "closeConsonant").sounds);
    for (const word of tarveni.fm.data.words.filter(({ source }) => source?.kind === "coined")) {
        assert(!word.form.includes(" "), word.form);
        const decomposed = word.form.normalize("NFD");
        assert((decomposed.match(/\p{M}/gu) ?? []).length <= 1, word.form);
        const text = decomposed.replace(/\p{M}/gu, "").toLowerCase();
        assert(!/f|^r|kh|gh|ph|dh|mr|['’cjy]/u.test(text), word.form);
        const sounds = text.match(/th|rr|ts|./g) ?? [];
        const clusters = sounds
            .join(" ")
            .split(/ ?[aeiou] ?/)
            .map((part) => part.trim().split(" ").filter(Boolean));
        assert(
            clusters[0].length <= 1 || openings.has(clusters[0].join("")),
            `${word.form}: opening`,
        );
        assert(
            clusters.every((cluster) => cluster.length <= tarveni.fm.data.sounds.clusters.max),
            `${word.form}: cluster`,
        );
        const closing = clusters.at(-1);
        assert(!closing.length || closings.has(closing.join("")), `${word.form}: closing`);
        if (parseWordClass(word.class).base === "v")
            assert(/(?:ad|ed|id)$/u.test(word.form), word.form);
    }
    const ancestral = new Set(
        parent.fm.data.words.flatMap((word) => [
            word.form,
            ...(word.variants ?? []),
            ...(word.source?.form ? [word.source.form] : []),
        ]),
    );
    for (const word of tarveni.fm.data.words)
        if (["inherited", "worn", "kept"].includes(word.source?.kind) && word.source.form)
            assert(ancestral.has(word.source.form), `${word.form}: ${word.source.form}`);
    for (const { word, depth } of tarveniOrdinary)
        if (depth && word.form.includes(" "))
            assert.notEqual(parseWordClass(word.class).base, "v", word.form);
});
