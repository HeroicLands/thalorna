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
const note = read("assets/content/Skills/Languages/Okharic.md"),
    inventory = read("assets/content/Reference/Core_Vocabulary.md");
const ordinary = new Set(WORD_CLASS_BASES.filter((c) => c.glossary).map((c) => c.token));
const expected = new Set(inventory.fm.data.concepts.map((c) => c.id));
test("Okharik supplies actual ordinary expressions for the complete inventory", () => {
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
test("Okharik preserves original words, meanings, names, metadata and prose", () => {
    assert.equal(
        hash(words.slice(0, 85).map(({ concept, ...w }) => w)),
        "3a4d5e1c01e338d080331db94451d0aeb78897c61abd5f39368177cc27b98bdc",
    );
    const originalIds = [
        [],
        ["fire"],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        ["mother"],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        ["envy"],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    for (let i = 0; i < 85; i++)
        for (const id of originalIds[i])
            assert([words[i].concept ?? []].flat().includes(id), words[i].form);
    const { words: _words, fields, roman: _roman, ...data } = note.fm.data;
    assert.equal(
        hash({ ...note.fm, data }),
        "76d4a5e832d562eb24c0f2fdc3e37052b2598548d6cc488d7a6cf13b0465f56e",
    );
    assert.equal(
        hash(fields.slice(0, -1)),
        "e02e276458fc4d83fb0999ed9d429a2ec587cdd098694f21ef3ee1f4edd408a5",
    );
    assert.deepEqual(fields.at(-1), {
        name: "Everyday speech",
        holds: "Ordinary words and expressions for perception, bodily life, relationships, things, actions and conversation.",
    });
    const romanNote =
        "The roman repertoire includes the established name spellings `j` and `J` (Jákora, Nánjeri) and the straight catch apostrophe (Nkaru'thar, N'aleya).";
    assert.equal(splitFrontmatter(note.raw).body.split(romanNote).length, 2);
    assert.equal(
        hash(
            splitFrontmatter(note.raw)
                .body.replace(romanNote + "\n\n", "")
                .replace(/\n## Everyday speech\n[\s\S]*$/u, ""),
        ),
        "321bca994318f80824b6550b6fd03f501cab882398d69feb506da3895a7fcea0",
    );
    const beforeData = { ...note.fm.data, words: words.slice(0, 85), fields: fields.slice(0, -1) },
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
    assert.equal(prior.length, 61);
    for (let r of prior)
        assert.deepEqual(
            current.find((x) => x.name === r.name && x.language === r.language),
            r,
            r.name,
        );
});
test("Okharik projects actual classes and meanings through the published dictionary", () => {
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
        (r) => r.language === "thalorna-note-skill-okharclng",
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
test("new Okharik citations keep actual vowel, nasal, ending and qualifier contracts", () => {
    const defined = new Map(words.map((w) => [w.form, w]));
    for (const w of words.slice(85)) {
        assert.equal(w.form, w.form.trim(), w.form);
        for (const token of w.form.split(" ")) {
            assert(defined.has(token), w.form + ": " + token);
            if (words.slice(0, 85).some((old) => old.form === token)) continue;
            assert(/^[a-z]+$/u.test(token), token);
            assert(/[aeiou]/u.test(token), token);
            assert(!/dh|gh|[qx]|c(?!h)/u.test(token), token);
            assert(/(?:[aeiounmlrts]|ng)$/u.test(token), token);
            const vowelPairs = note.fm.data.sounds.edges.find(
                (edge) => edge.edge === "vowelPair",
            ).sounds;
            for (const pair of token.match(/[aeiou]{2,}/gu) ?? [])
                assert(vowelPairs.includes(pair), `${token}: unlisted adjacent vowels ${pair}`);
            const phonemes = token.replace(/kh|sh|zh|th|ng|ch/gu, "K");
            const onset = phonemes.match(/^[^aeiou]+/u)?.[0] ?? "";
            assert(
                onset.length <= 1 || ["mb", "nd", "nj", "nk", "nt", "kw", "Kw"].includes(onset),
                token,
            );
            assert(
                (phonemes.match(/[^aeiou]+/gu) ?? []).every((s) => s.length <= 2),
                token,
            );
        }
    }
    assert.deepEqual(note.fm.data.sounds.stress, {
        two: "first",
        longer: "penultimate",
        mark: "acute",
    });
    assert.deepEqual(SOURCES["Okharic.md"], ["tamazight", "hausa"]);
});
test("Okharik publishes each ordinary citation and its essential meaning", async () => {
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const printed = insertLexicalSections(
        splitFrontmatter(note.raw).body,
        lexicalSectionsFor(records).get("thalorna-note-skill-okharclng"),
    ).markdown;
    for (let w of citations) {
        assert(printed.includes("**" + w.form + "**"), w.form);
        for (let sense of [w.gloss].flat())
            assert(printed.toLowerCase().includes(sense.toLowerCase()), w.form);
    }
});
test("configured Okharik stays Roman and enforces its real wordbook and language tag", async () => {
    const { runContext, renderRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8")),
        [key, setting] = Object.entries(config.languages).find(
            ([, v]) => v.note === "skill-" + note.fm.shortcode,
        );
    assert.equal(key, "okha");
    assert.equal(setting.tag, "art-x-okha");
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
    const unknown = unknownWords("mbokhazu", book);
    assert.equal(unknown.length, 1);
    assert.equal(unknown[0].word, "mbokhazu");
    assert.match(unknownWordMessage(unknown[0].word, key), /not a word of the .okha. lexicon/u);
    // Roman presentation preserves spelling and enforces the same wordbook.
    const roman = renderRuns("[mbokhazu]{lang=" + key + "}", ctx);
    assert.deepEqual(roman.errors, [
        { line: 1, column: 2, message: unknownWordMessage("mbokhazu", key) },
    ]);
    assert(roman.markdown.includes("mbokhazu"));
});
