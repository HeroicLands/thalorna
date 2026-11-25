/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
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
import { createHash } from "node:crypto";
import { beforeEncodingMigration } from "./encoding-preservation.mjs";
import { notePath } from "./note-index.mjs";
function note(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { raw, file, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const language = note(notePath("skill-tantsoulng"));
const inventory = note(notePath("doc-coreconcepts"));
const records = [language, inventory].map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
}));
const expected = new Set(inventory.fm.data.concepts.map(({ id }) => id));
const glossary = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const words = language.fm.data.words;
test("Tantsou expresses every inventory concept through ordinary dictionary words", () => {
    const actual = new Set(
        words
            .filter((w) => glossary.has(parseWordClass(w.class).base))
            .flatMap((w) => [w.concept ?? []].flat()),
    );
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
    const report = coreReport(records, { language: language.fm.shortcode }).languages[0];
    assert.equal(report.total, expected.size);
    assert.equal(report.covered, expected.size);
});
test("Tantsou dictionary preserves every actual form, class and meaning", () => {
    const dictionary = dictionaryAndTermRows(records).dictionary.filter(
        (r) => r.language === "thalorna-note-skill-tantsoulng",
    );
    const ordinary = words.filter((w) => glossary.has(parseWordClass(w.class).base));
    assert.equal(dictionary.length, ordinary.length);
    for (const w of ordinary) {
        const row = dictionary.find((r) => r.name === w.form);
        assert(row, w.form);
        assert.equal(row.class, w.class, w.form);
        assert.deepEqual(
            row.senses.map((s) => s.text),
            [w.gloss].flat(),
            w.form,
        );
        assert(
            [w.gloss].flat().every((s) => typeof s === "string" && s.trim()),
            w.form,
        );
    }
});
test("Tantsou preserves its fixed syllables and unchanged compound constituents", () => {
    const initials = language.fm.data.sounds.edges.find((e) => e.edge === "openConsonant").sounds;
    const finals = language.fm.data.sounds.finals.map((f) => f.final);
    assert.equal(initials.length, 20);
    assert.equal(finals.length, 19);
    const roots = new Map(
        words
            .filter((w) => initials.some((i) => finals.some((f) => i + f === w.form)))
            .map((w) => [w.form, w]),
    );
    for (const w of words) {
        if (roots.has(w.form)) continue;
        const form = w.form.replaceAll(" ", "").toLowerCase();
        const segments = new Set([0]);
        for (let at = 0; at < form.length; at++) {
            if (!segments.has(at)) continue;
            for (const root of roots.keys())
                if (form.startsWith(root, at)) segments.add(at + root.length);
        }
        assert(segments.has(form.length), `${w.form}: every syllable is a free root`);
        if (w.built) {
            for (const p of w.built) assert(roots.has(p), `${w.form}: undefined free root ${p}`);
            assert.equal(w.built.join("").toLowerCase(), form, w.form);
        }
    }
    for (const root of roots.keys()) {
        assert(!/^yi|^gw[u]/u.test(root), root);
    }
});
test("Tantsou words, names and frontmatter satisfy consumer contracts", () => {
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
    assert.equal(language.fm.data.writtenIn, undefined);
    assert(words.every((w) => w.native === undefined));
});
test("Tantsou published dictionary includes essential lexical usage", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const sections = lexicalSectionsFor(records).get("thalorna-note-skill-tantsoulng");
    const rendered = insertLexicalSections(splitFrontmatter(language.raw).body, sections).markdown;
    for (const w of words.filter((w) => glossary.has(parseWordClass(w.class).base))) {
        assert(rendered.includes(`**${w.form}**`), w.form);
        for (const sense of [w.gloss].flat())
            assert(rendered.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});

test("Tantsou Roman citations retain the configured language without an invented map", async () => {
    const { runContext, renderRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
    for (const word of words) {
        const rendered = renderRuns(`[${word.form}]{lang=tant}`, ctx);
        assert.deepEqual(rendered.errors, [], word.form);
        assert.equal(
            rendered.markdown,
            `[${word.form}]{lang=${config.languages.tant.tag}}`,
            word.form,
        );
    }
});

const daughter = note(notePath("skill-jurthatlng"));
const { parseAddress, renderAddress } = await import("@heroiclands/package-build/engine/address");
const daughterRecords = [
    ...records,
    { ...daughter.fm, file: daughter.file, package: "thalorna", system: "note" },
].map((record) => ({
    ...record,
    data: {
        ...record.data,
        ...(record.data.words ?
            {
                words: record.data.words.map((word) => ({
                    ...word,
                    ...(word.source?.language ?
                        {
                            source: {
                                ...word.source,
                                language: renderAddress(
                                    parseAddress(word.source.language, {
                                        package: "thalorna",
                                        system: "note",
                                        types: new Set(["skill", "doc"]),
                                    }),
                                ),
                            },
                        }
                    :   {}),
                })),
            }
        :   {}),
    },
}));
/**
 * Whether an `exonym:<tag>` register entry is another tongue's own name: the
 * language note that declares the tag registers the same name with the same
 * pieces.
 */
const registeredExonym = (entry) => {
    if (!entry.tongue.startsWith("exonym:")) return false;
    const tag = entry.tongue.slice("exonym:".length);
    const declared = [language.fm, daughter.fm]
        .flatMap((fm) => fm.data.tongues ?? [])
        .find((tongue) => tongue.tag === tag && tongue.language);
    if (!declared) return false;
    return (note(notePath(declared.language)).fm.data.register ?? []).some(
        (row) =>
            row.tongue === tag &&
            row.name === entry.name &&
            JSON.stringify(row.built) === JSON.stringify(entry.built),
    );
};
const digest = (value) =>
    createHash("sha256")
        .update(typeof value === "string" ? value : JSON.stringify(value))
        .digest("hex");
const currentWords = daughter.fm.data.words;
const registeredName = (word) =>
    word.class === "name" &&
    word.source?.kind === "coined" &&
    word.built?.length > 0 &&
    word.built.every((piece) => currentWords.some(({ form }) => form === piece)) &&
    (daughter.fm.data.register ?? []).some(
        ({ name, tongue, built }) =>
            tongue === "jurthati" &&
            name.normalize("NFC").toLowerCase() === word.form.normalize("NFC") &&
            JSON.stringify(built) === JSON.stringify(word.built),
    );
/**
 * The established Jurthati rows: the first 339 of the baseline revision. Each
 * survives unchanged and in order in the current note; the only rows set among
 * them are coined names that the register builds from the same pieces as their
 * words.
 */
const establishedJurthatiRows = () => {
    const established = beforeEncodingMigration(daughter.file, "7dbfd920d").fm.data.words.slice(
        0,
        339,
    );
    let next = 0;
    for (const word of currentWords) {
        if (next === established.length) break;
        if (digest(word) === digest(established[next])) next++;
        else assert(registeredName(word), `${word.form}: changes or displaces an established row`);
    }
    assert.equal(
        next,
        established.length,
        `${established[next]?.form}: established row is missing or changed`,
    );
    return established;
};

test("Jurthati has its own actual dictionary expression for every core concept", () => {
    assert.equal(daughter.fm.data.family, undefined);
    const actual = new Set(
        daughter.fm.data.words
            .filter((w) => glossary.has(parseWordClass(w.class).base))
            .flatMap((w) => [w.concept ?? []].flat()),
    );
    assert.deepEqual(
        [...expected].filter((id) => !actual.has(id)),
        [],
        "missing own expressions",
    );
    assert.deepEqual(
        [...actual].filter((id) => !expected.has(id)),
        [],
    );
    const dictionary = dictionaryAndTermRows(daughterRecords).dictionary.filter(
        (r) => r.language === "thalorna-note-skill-jurthatlng",
    );
    for (const w of daughter.fm.data.words.filter((w) =>
        glossary.has(parseWordClass(w.class).base),
    )) {
        const row = dictionary.find((r) => r.name === w.form);
        assert(row, w.form);
        assert.equal(row.depth, 0, w.form);
        assert.equal(row.class, w.class, w.form);
        assert.deepEqual(
            row.senses.map((s) => s.text),
            [w.gloss].flat(),
            w.form,
        );
    }
});

test("Jurthati satisfies its word, name and actual-source contracts", () => {
    const allNotes = [language, daughter, inventory];
    const index = {
        notes: allNotes,
        contentPackage: "thalorna",
        types: new Set(["skill", "doc"]),
        addressHit: (key) =>
            daughterRecords.find((r) => key === `thalorna-note-${r.type}-${r.shortcode}`),
    };
    assert.deepEqual(
        lintNote(daughter, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkLanguageWords(daughter, { index }), []);
    assert.deepEqual(namesFindings(daughter, BEING_LOOK_VOCABULARY), []);
    assert.equal(daughter.fm.data.writtenIn, undefined);
    for (const word of daughter.fm.data.words) {
        assert.equal(word.native, undefined);
        if (word.source?.form) {
            assert.equal(word.source.language, "skill-tantsoulng");
            assert(
                words.some((p) => p.form.normalize("NFC") === word.source.form.normalize("NFC")),
                word.form,
            );
        }
        for (const piece of word.built ?? [])
            assert(
                daughter.fm.data.words.some((w) => w.form === piece) ||
                    daughter.fm.data.affixes.some((a) => a.form === piece),
                `${word.form}: ${piece}`,
            );
    }
});
test("Jurthati publishes every own meaning and its actual Roman citation", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const { runContext, renderRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const ctx = runContext({ ...config, rootDir: process.cwd() }, daughterRecords);
    const section = lexicalSectionsFor(daughterRecords).get("thalorna-note-skill-jurthatlng");
    const rendered = insertLexicalSections(splitFrontmatter(daughter.raw).body, section).markdown;
    for (const w of daughter.fm.data.words.filter((w) =>
        glossary.has(parseWordClass(w.class).base),
    )) {
        assert(rendered.includes(`**${w.form}**`), w.form);
        for (const sense of [w.gloss].flat())
            assert(rendered.toLowerCase().includes(sense.toLowerCase()), w.form);
        const roman = renderRuns(`[${w.form}]{lang=jurt}`, ctx);
        assert.deepEqual(roman.errors, [], w.form);
        assert.equal(roman.markdown, `[${w.form}]{lang=${config.languages.jurt.tag}}`, w.form);
    }
});

test("Jurthati Roman words follow the actual island syllable structure", () => {
    const onsets = [
        "ch",
        "sh",
        "ts",
        "w",
        "j",
        "z",
        "r",
        "y",
        "d",
        "k",
        "m",
        "n",
        "h",
        "f",
        "t",
        "s",
        "b",
        "g",
        "",
    ];
    const vowels = ["ou", "ai", "ei", "ui", "a", "e", "i", "o", "u"];
    function ordinary(word) {
        const reached = new Set([0]);
        for (let at = 0; at < word.length; at++) {
            if (!reached.has(at)) continue;
            for (const onset of onsets)
                for (const vowel of vowels) {
                    const syllable = onset + vowel;
                    if (!word.startsWith(syllable, at)) continue;
                    const end = at + syllable.length;
                    reached.add(end);
                    if (
                        word[end] === "n" &&
                        (end + 1 === word.length || /^[bdgjmnrwyz]/u.test(word.slice(end + 1)))
                    )
                        reached.add(end + 1);
                }
        }
        return reached.has(word.length);
    }
    for (const w of daughter.fm.data.words)
        for (const token of w.form.toLowerCase().split(/\s+/u))
            assert(ordinary(token), `${w.form}: island syllable ${token}`);
});

test("Jurthati tagged body and action expressions carry their actual grammatical roles", () => {
    const verbs = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "verbs").map((c) => c.id),
    );
    for (const id of ["eat", "breathe"]) verbs.add(id);
    const body = new Set(
        inventory.fm.data.concepts.filter((c) => c.group === "body").map((c) => c.id),
    );
    body.add("cup");
    for (const word of daughter.fm.data.words)
        for (const id of [word.concept ?? []].flat()) {
            if (verbs.has(id))
                assert.equal(parseWordClass(word.class).base, "v", `${word.form}: ${id}`);
            if (body.has(id))
                assert.equal(parseWordClass(word.class).base, "n", `${word.form}: ${id}`);
        }
});

test("Jurthati free citations preserve old recipient name-piece interpretations", async () => {
    const { pieceGlosses } = await import("@heroiclands/package-build/engine/word-rows");
    const originalData = { ...daughter.fm.data, words: establishedJurthatiRows() };
    const before = pieceGlosses(originalData),
        after = pieceGlosses(daughter.fm.data);
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
    // Kept mainland names use mainland pieces; recipient words do not reinterpret them.
    const { register, ...recipientData } = originalData;
    collect(recipientData);
    for (const name of register ?? []) if (name.tongue !== "kept") collect(name);
    for (const form of [...forms].flatMap((form) => [form, form.replace(/^-+|-+$/gu, "")]))
        assert.equal(after(form), before(form), `${form}: old recipient piece`);
    const kept = (register ?? []).find((r) => r.name === "Lengwou");
    assert.equal(kept.tongue, "kept");
    assert.deepEqual(kept.built, ["leng", "wou"]);
    assert.equal(pieceGlosses(language.fm.data)("wou"), "court, palace, hall");
});

test("Jurthati name-preservation repair retains old rows and native provenance", async () => {
    assert.equal(
        digest(establishedJurthatiRows()),
        "9a9d26a7a03d70038ea897d1156a9b0350aa8c86dfcf554ee601dd7a2207c4c4",
    );
    // The rest of the frontmatter matches its baseline revision, except for
    // inserted names. A register entry is accepted in one of three forms:
    // a Jurthati name that a registered name word builds; a Jurthati name whose
    // citation is a coined word of any class built from the same pieces (a
    // common noun that lends its name, as _rija_ does the war junk); or an
    // `exonym:<tag>` name that the language the tag declares registers with the
    // same pieces, which records another tongue's name for a Jurthati thing. A
    // given name is accepted when it is the citation of a name word, inserted or
    // replacing a given name that cites none.
    const withoutWords = (fm) => {
        const { words: _words, roman: _roman, ...data } = fm.data;
        return { ...fm, data };
    };
    const baseline = withoutWords(beforeEncodingMigration(daughter.file, "acf0fbf7d").fm);
    assert.equal(
        digest(baseline),
        "5e20b9fae923817df1eff974a62c8f734542fd948f2a2b4767bedc1c4a4bcf07",
    );
    const current = withoutWords(daughter.fm);
    const nameWord = (name) =>
        currentWords.some(
            (word) =>
                word.class === "name" &&
                word.form.normalize("NFC") === name.normalize("NFC").toLowerCase(),
        );
    const keepsBaseline = (before, after, allowed, label) => {
        let kept = 0;
        for (const [index, entry] of after.entries()) {
            if (kept < before.length && digest(entry) === digest(before[kept])) {
                kept++;
                continue;
            }
            assert(allowed(entry), `${label}: ${JSON.stringify(entry)} is not a registered name`);
            const replaces =
                kept < before.length &&
                typeof before[kept] === "string" &&
                !nameWord(before[kept]) &&
                (kept + 1 === before.length ?
                    index + 1 === after.length
                :   digest(after[index + 1]) === digest(before[kept + 1]));
            if (replaces) kept++;
        }
        assert.equal(kept, before.length, `${label}: ${before[kept]} is missing or changed`);
    };
    keepsBaseline(
        baseline.data.register ?? [],
        current.data.register ?? [],
        (entry) =>
            (entry.tongue === "jurthati" &&
                currentWords.some(
                    (word) =>
                        word.form.normalize("NFC") === entry.name.normalize("NFC").toLowerCase() &&
                        (registeredName(word) ||
                            (word.source?.kind === "coined" &&
                                JSON.stringify(word.built) === JSON.stringify(entry.built))),
                )) ||
            registeredExonym(entry),
        "register",
    );
    for (const [list, path] of [
        ["female", ["given", "female"]],
        ["male", ["given", "male"]],
        ["house", ["house"]],
    ]) {
        const at = (names) => path.reduce((value, key) => value?.[key], names) ?? [];
        keepsBaseline(
            at(baseline.data.names),
            at(current.data.names),
            (name) => typeof name === "string" && nameWord(name),
            list,
        );
    }
    const { register: _register, names: currentNames, ...currentRest } = current.data;
    const { register: _baseRegister, names: baseNames, ...baseRest } = baseline.data;
    assert.deepEqual({ ...current, data: currentRest }, { ...baseline, data: baseRest });
    assert.deepEqual(Object.keys(currentNames), Object.keys(baseNames));
    assert.deepEqual(Object.keys(currentNames.given), Object.keys(baseNames.given));
    assert.equal(currentNames.pattern, baseNames.pattern);
    assert.equal(
        digest(
            splitFrontmatter(daughter.raw).body.replace(
                /## Ordinary expressions\n[\s\S]*?(?=## Sample Phrases)/u,
                "",
            ),
        ),
        "de047ceac8fe60575840fe777c12d12cba9ed4600dbabc9382df2ac91d3fa996",
    );
    for (const form of ["dun", "jun"])
        assert.deepEqual(daughter.fm.data.words.find((w) => w.form === form).source, {
            kind: "coined",
        });
    assert(!daughter.fm.data.words.some((w) => ["dan", "jai"].includes(w.form)));
});

test("an exonym register entry needs the named tongue to register the same name and pieces", () => {
    const entry = (name, tongue, built) => ({ name, tongue, built });
    assert(registeredExonym(entry("Jari", "exonym:tanvuri", ["ja", "ri"])));
    assert(!registeredExonym(entry("Jari", "exonym:tanvuri", ["ri", "ja"])));
    assert(!registeredExonym(entry("Rijari", "exonym:tanvuri", ["ja", "ri"])));
    assert(!registeredExonym(entry("Jari", "exonym:nowhere", ["ja", "ri"])));
    assert(!registeredExonym(entry("Jari", "jurthati", ["ja", "ri"])));
});
