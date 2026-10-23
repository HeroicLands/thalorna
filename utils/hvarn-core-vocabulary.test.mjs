/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const note = read("assets/content/Skills/Languages/Hvarn.md"),
    inventory = read("assets/content/Reference/Core_Vocabulary.md");
const ordinary = new Set(WORD_CLASS_BASES.filter((c) => c.glossary).map((c) => c.token));
const expected = new Set(inventory.fm.data.concepts.map((c) => c.id));
test("Hvarn supplies actual ordinary expressions for the complete inventory", () => {
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
import { SOURCES } from "./earth-words.mjs";
const hash = (o) =>
    createHash("sha256")
        .update(typeof o === "string" ? o : JSON.stringify(o))
        .digest("hex");
const record = ({ fm, file }) => ({ ...fm, file, package: "thalorna", system: "note" }),
    records = [note, inventory].map(record),
    words = note.fm.data.words;
const citations = words.filter((w) => ordinary.has(parseWordClass(w.class).base));
test("Hvarn preserves original words, meanings, names, metadata and prose", () => {
    assert.equal(
        hash(words.slice(0, 21).map(({ concept, ...w }) => w)),
        "72064524b78d9f7903fb7b7ddbbdff6ca7f6f28e7e8569a82fc6dbf5ce9de783",
    );
    const expectedIds = new Map([
        [2, ["hearth"]],
        [14, ["bone"]],
        [4, ["debt"]],
        [9, ["storm"]],
        [10, ["rope"]],
    ]);
    for (let i = 0; i < 21; i++)
        assert.deepEqual([words[i].concept ?? []].flat(), expectedIds.get(i) ?? [], words[i].form);
    const { words: _words, fields, ...data } = note.fm.data;
    assert.equal(
        hash({ ...note.fm, data }),
        "8b57b3715fd4acd680dff80a718b341cb1755059f5e3f6f85cf82d7a6c74cf18",
    );
    assert.equal(
        hash(fields.slice(0, -1)),
        "94fc575ec55cfe315ac5883fc8fabbc09f8ba37913ea21ae0980272a5f86f60b",
    );
    assert.deepEqual(fields.at(-1), {
        name: "Everyday speech",
        holds: "Ordinary expressions for perception, bodily life, relationships, things, actions and conversation.",
    });
    assert.equal(
        hash(splitFrontmatter(note.raw).body.replace(/\n## Everyday speech\n[\s\S]*$/u, "")),
        "84bf61abbba16b86356260d8dac3691651ef32fa7f4f9e676a402abc2e45e2fd",
    );
    const beforeData = { ...note.fm.data, words: words.slice(0, 21), fields: fields.slice(0, -1) },
        before = pieceGlosses(beforeData),
        after = pieceGlosses(note.fm.data),
        forms = new Set();
    function collect(v) {
        if (typeof v === "string") {
            forms.add(v);
            return;
        }
        if (Array.isArray(v)) v.forEach(collect);
        else if (v && typeof v === "object")
            for (let [k, x] of Object.entries(v)) {
                if (["names", "register", "retired"].includes(k)) collect(x);
                else if (
                    [
                        "form",
                        "front",
                        "joining",
                        "built",
                        "variants",
                        "elements",
                        "instead",
                        "name",
                    ].includes(k)
                )
                    collect(x);
                else if (typeof x === "object") collect(x);
            }
    }
    collect(beforeData);
    for (let f of [...forms].flatMap((f) => [f, f.replace(/^-+|-+$/gu, ""), f.toLowerCase()]))
        assert.equal(after(f), before(f), f);
    const prior = dictionaryAndTermRows([{ ...record(note), data: beforeData }]).dictionary,
        current = dictionaryAndTermRows(records).dictionary;
    assert.equal(prior.length, 21);
    for (let r of prior)
        assert.deepEqual(
            current.find((x) => x.name === r.name && x.language === r.language),
            r,
            r.name,
        );
});
test("Hvarn projects actual classes and meanings through the published dictionary", () => {
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
        (r) => r.language === "thalorna-note-skill-hvarnlng",
    );
    assert.equal(dict.length, citations.length);
    for (let w of citations) {
        let r = dict.find((r) => r.name.normalize("NFC") === w.form.normalize("NFC"));
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
    assert.equal(report.total, 921);
    assert.equal(report.covered, 921);
});
test("new Hvarn words retain vowels, dense short roots and whole compound seams", () => {
    const defined = new Set(words.map((w) => w.form));
    let roots = words.slice(21).filter((w) => !w.form.includes(" ") && !w.built);
    assert(
        roots.filter((w) => (w.form.match(/[aeiou]+/gu) ?? []).length === 1).length >
            roots.length * 0.9,
    );
    for (let w of words.slice(21)) {
        assert.equal(w.form, w.form.trim(), w.form);
        for (let token of w.form.split(" ")) {
            assert(defined.has(token), w.form + ": " + token);
            assert(/[aeiou]/u.test(token), token);
            assert(/^[a-z]+$/u.test(token), token);
            assert(!/[aeiou]$/u.test(token), token);
            if (!words.find((w) => w.form === token)?.built) {
                assert(!/kh|gh|th|dh|[qxyjc]/u.test(token), token);
                const phonemes = token
                    .replaceAll("zh", "Z")
                    .replaceAll("sh", "S")
                    .replaceAll("rh", "R")
                    .replaceAll("dz", "D")
                    .replaceAll("ts", "T");
                const onset = phonemes.match(/^[^aeiou]+/u)?.[0] ?? "";
                assert(
                    onset.length <= 1 ||
                        ["hv", "hvr", "vh", "vr", "vn", "kl", "tr", "br", "dr", "zv"].includes(
                            onset,
                        ),
                    token,
                );
                assert(
                    Math.max(...(phonemes.match(/[^aeiou]+/gu) ?? []).map((s) => s.length)) <= 3,
                    token,
                );
            }
        }
        if (w.built) assert.equal(w.form, w.built.join(""), w.form);
    }
    assert.equal(note.fm.data.sounds.stress.two, "first");
    assert.equal(note.fm.data.sounds.stress.longer, "first");
    assert.deepEqual(SOURCES["Hvarn.md"] ?? [], []);
});
test("Hvarn publishes each ordinary citation and its essential meaning", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const printed = insertLexicalSections(
        splitFrontmatter(note.raw).body,
        lexicalSectionsFor(records).get("thalorna-note-skill-hvarnlng"),
    ).markdown;
    for (let w of citations) {
        assert(printed.includes("**" + w.form + "**"), w.form);
        for (let sense of [w.gloss].flat())
            assert(printed.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});
test("configured Hvarn stays Roman and enforces its real wordbook and language tag", async () => {
    const { runContext, renderRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8")),
        [key, setting] = Object.entries(config.languages).find(
            ([, v]) => v.note === "skill-" + note.fm.shortcode,
        );
    assert.equal(key, "hvar");
    assert.equal(setting.tag, "art-x-hvar");
    assert.equal(note.fm.data.writtenIn, undefined);
    const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
    assert(ctx.wordBooks.has(key));
    for (let w of citations) {
        const result = renderRuns("[" + w.form + "]{lang=" + key + "}", ctx);
        assert.deepEqual(result.errors, [], w.form);
        assert(result.markdown.includes(w.form), w.form);
        assert(result.markdown.includes("lang=" + setting.tag), w.form);
    }
    const { unknownWords, unknownWordMessage } =
        await import("@heroiclands/package-build/engine/run-words");
    const book = ctx.wordBooks.get(key);
    for (const w of citations) assert.deepEqual(unknownWords(w.form, book), [], w.form);
    const unknown = unknownWords("hvroudzen", book);
    assert.equal(unknown.length, 1);
    assert.equal(unknown[0].word, "hvroudzen");
    assert.match(unknownWordMessage(unknown[0].word, key), /not a word of the .hvar. lexicon/u);
    // Roman presentation preserves spelling and enforces the same wordbook.
    const roman = renderRuns("[hvroudzen]{lang=" + key + "}", ctx);
    assert.deepEqual(roman.errors, [
        { line: 1, column: 2, message: unknownWordMessage("hvroudzen", key) },
    ]);
    assert(roman.markdown.includes("hvroudzen"));
});
