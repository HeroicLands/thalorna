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
const note = read(notePath("skill-okharclng")),
    inventory = read(notePath("doc-coreconcepts"));
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
import { notePath } from "./note-index.mjs";
/** Women's names respelled away from Earth words, each current spelling and the one it replaced. */
const respelled = [
    ["Sashira", "Sashi"],
    ["Sunari", "Suna"],
    ["Tálumeng", "Táluméng"],
];
const beforeRespelling = (text) =>
    respelled.reduce(
        (out, [now, was]) => out.replace(new RegExp(`(?<!\\p{L})${now}(?!\\p{L})`, "gu"), was),
        text,
    );
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
    const { fields } = note.fm.data;
    assert.equal(originalDigest(note.fm), ORIGINAL_DIGEST);
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
            beforeRespelling(splitFrontmatter(note.raw).body)
                .replace(romanNote + "\n\n", "")
                .replace(/\*\*Coining\.\*\*[^\n]*\n\n/u, "")
                .replace(/\n## Everyday speech\n[\s\S]*$/u, ""),
        ),
        "0e5519f5591f21f6f82d34e6a3ed95541a68ae0ed46b3cdf420044fe74690615",
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
    assert.deepEqual(SOURCES["skill-okharclng"], ["tamazight", "hausa"]);
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

const ORIGINAL_DIGEST = "8a44d9caa84bc3ac5c0ecbee72e6bc85f713931682bb433dd6af5655337021fe";
/** Register rows the language note accepts beyond its original register, each exactly once. */
const approvedRegisterRows = () => [
    { name: "Dorumbe", tongue: "okharik" },
    { name: "Hasembe", tongue: "okharik" },
    { name: "Khandoru", tongue: "okharik" },
    { name: "Kwendo", tongue: "okharik" },
    { name: "Mbarelo", tongue: "okharik" },
    { name: "Ngarali", tongue: "okharik" },
    { name: "Njeko", tongue: "okharik" },
    { name: "Okhelo", tongue: "okharik" },
    { name: "South Marches Adventurer's Guide", tongue: "translation" },
    { name: "Tarembe", tongue: "okharik" },
    { name: "Thumbel", tongue: "okharik" },
    { name: "Ukhedo", tongue: "okharik" },
];
/**
 * The register without the approved additions. Each approved row must appear once with exactly
 * its name and tongue; every other row stays in place and in order.
 */
function historicalRegister(register) {
    const rows = [...register];
    for (const approved of approvedRegisterRows()) {
        const at = rows.flatMap((r, i) => (r?.name === approved.name ? [i] : []));
        if (at.length === 0) throw new Error(`missing approved register row ${approved.name}`);
        if (at.length > 1) throw new Error(`duplicate approved register row ${approved.name}`);
        try {
            assert.deepEqual(rows[at[0]], approved);
        } catch {
            throw new Error(`register row ${approved.name} differs from its approved form`);
        }
        rows.splice(at[0], 1);
    }
    return rows;
}
/** Digest of the language note's original metadata, with respelled names mapped back. */
function originalDigest(fm) {
    const { words: _words, fields: _fields, roman: _roman, ...authored } = fm.data;
    const data = JSON.parse(beforeRespelling(JSON.stringify(authored)));
    data.retired = data.retired.filter((row) => !respelled.some(([, was]) => row.form === was));
    data.register = historicalRegister(data.register);
    return hash({ ...fm, data });
}
const cloneFm = () => structuredClone(note.fm);
const approvedNames = new Set(approvedRegisterRows().map((r) => r.name));
test("Okharik register additions are exactly the approved twelve rows", () => {
    assert.equal(approvedRegisterRows().length, 12);
    assert.equal(originalDigest(note.fm), ORIGINAL_DIGEST);
    const present = note.fm.data.register.filter((r) => approvedNames.has(r.name));
    assert.deepEqual(present.map((r) => r.name).sort(), [...approvedNames].sort());
});
test("Okharik register rejects approved rows that are missing, duplicated, misspelled or altered", () => {
    const at = (fm, name) => fm.data.register.findIndex((r) => r.name === name);
    const missing = cloneFm();
    missing.data.register.splice(at(missing, "Thumbel"), 1);
    assert.throws(() => originalDigest(missing), /missing approved register row Thumbel$/u);
    const duplicate = cloneFm();
    duplicate.data.register.push({ name: "Ukhedo", tongue: "okharik" });
    assert.throws(() => originalDigest(duplicate), /duplicate approved register row Ukhedo$/u);
    const misspelled = cloneFm();
    misspelled.data.register[at(misspelled, "Mbarelo")].name = "Mbarello";
    assert.throws(() => originalDigest(misspelled), /missing approved register row Mbarelo$/u);
    const retagged = cloneFm();
    retagged.data.register[at(retagged, "Khandoru")].tongue = "translation";
    assert.throws(
        () => originalDigest(retagged),
        /register row Khandoru differs from its approved form$/u,
    );
    const guide = cloneFm();
    guide.data.register[at(guide, "South Marches Adventurer's Guide")].tongue = "okharik";
    assert.throws(
        () => originalDigest(guide),
        /register row South Marches Adventurer's Guide differs from its approved form$/u,
    );
    const extra = cloneFm();
    extra.data.register[at(extra, "Njeko")].built = ["njeko"];
    assert.throws(
        () => originalDigest(extra),
        /register row Njeko differs from its approved form$/u,
    );
});
test("Okharik register keeps every original row, property and order, and all other metadata", () => {
    const originalAt = (fm) => fm.data.register.findIndex((r) => !approvedNames.has(r.name));
    const withBuilt = (fm) => fm.data.register.findIndex((r) => r.built);
    const changes = {
        "changed original name": (fm) => (fm.data.register[originalAt(fm)].name += "x"),
        "changed original tongue": (fm) => (fm.data.register[originalAt(fm)].tongue = "other"),
        "changed native construction": (fm) => fm.data.register[withBuilt(fm)].built.pop(),
        "deleted original row": (fm) => fm.data.register.splice(originalAt(fm), 1),
        "reordered original rows": (fm) => {
            const i = originalAt(fm);
            const j = fm.data.register.findIndex((r, k) => k > i && !approvedNames.has(r.name));
            [fm.data.register[i], fm.data.register[j]] = [fm.data.register[j], fm.data.register[i]];
        },
        "unrelated register addition": (fm) =>
            fm.data.register.push({ name: "Zorumbe", tongue: "okharik" }),
        "unrelated metadata key": (fm) => (fm.data.unrelated = true),
        "changed retired row": (fm) => (fm.data.retired[0].form += "x"),
        "changed description": (fm) => (fm.description += "x"),
    };
    for (const [label, change] of Object.entries(changes)) {
        const fm = cloneFm();
        change(fm);
        assert.notEqual(originalDigest(fm), ORIGINAL_DIGEST, label);
    }
});
