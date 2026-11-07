/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseAddress, renderAddress } from "@heroiclands/package-build/engine/address";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
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

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const language = read(process.env.KALIHARI_PATH ?? notePath("skill-kalihrlng"));
const inventory = read(notePath("doc-coreconcepts"));
const port = read(notePath("skill-valtarlng"));
const notes = [language, inventory, port];
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
const byKey = new Map(
    records.map((record) => [canonical(`${record.type}-${record.shortcode}`), record]),
);
const index = {
    notes,
    contentPackage: "thalorna",
    types: new Set(notes.map(({ fm }) => fm.type)),
    addressHit: (key) => byKey.get(key),
};
const eligible = new Set(
    WORD_CLASS_BASES.filter(({ glossary }) => glossary).map(({ token }) => token),
);
const ids = (word) => [word.concept ?? []].flat();
const ordinary = language.fm.data.words.filter(
    (word) => eligible.has(parseWordClass(word.class).base) && !word.form.endsWith("-"),
);
const bindings = (id) => ordinary.filter((word) => ids(word).includes(id));

test("Kalihari has an actual ordinary expression for every current core concept", () => {
    assert.equal(language.fm.data.family, undefined);
    const known = new Set(inventory.fm.data.concepts.map(({ id }) => id)),
        missing = [...known].filter((id) => !bindings(id).length);
    assert.deepEqual(missing, [], `${missing.length} concepts lack ordinary Kalihari expressions`);
    for (const word of language.fm.data.words)
        for (const id of ids(word)) assert(known.has(id), `${word.form}: unknown ${id}`);
    for (const word of ordinary)
        assert.notEqual(parseWordClass(word.class).base, "stem", word.form);
});

test("Kalihari dictionary publishes actual local classes and complete senses", () => {
    const rows = dictionaryAndTermRows(records).dictionary.filter(
        ({ language: owner }) =>
            owner === canonical(`${language.fm.type}-${language.fm.shortcode}`),
    );
    for (const word of ordinary) {
        const row = rows.find(
            ({ name, class: cls }) => name === word.form.normalize("NFC") && cls === word.class,
        );
        assert(row, word.form);
        assert.equal(row.depth, 0, word.form);
        assert.deepEqual(
            row.senses.map(({ text }) => text),
            [word.gloss].flat(),
            word.form,
        );
    }
});

test("Kalihari declarations preserve invariant words and real source references", () => {
    assert.deepEqual(
        lintNote(language, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }).filter(({ severity }) => severity === "error"),
        [],
    );
    assert.deepEqual(checkLanguageWords(language, { index }), []);
    assert.deepEqual(namesFindings(language, BEING_LOOK_VOCABULARY), []);
    assert.equal(language.fm.data.grammar.verbs.invariant, true);
    const donor = `${port.fm.type}-${port.fm.shortcode}`;
    for (const word of language.fm.data.words.filter(({ source }) => source?.language)) {
        assert.equal(word.source.language, donor, word.form);
        assert(
            port.fm.data.words.some(
                (entry) =>
                    entry.form === word.source.form ||
                    (entry.variants ?? []).includes(word.source.form),
            ),
            `${word.form}: ${word.source.form}`,
        );
    }
});

test("Kalihari uses its configured Roman wordbook without an invented native map or Earth model", async () => {
    assert.equal(language.fm.data.writtenIn, undefined);
    assert.deepEqual(SOURCES["skill-kalihrlng"] ?? [], []);
    const { renderRuns, runContext, scanRuns } =
        await import("@heroiclands/package-build/engine/content-scripts");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8")),
        context = runContext({ ...config, rootDir: process.cwd() }, records),
        selected = Object.entries(config.languages).filter(
            ([, entry]) => entry.note === `${language.fm.type}-${language.fm.shortcode}`,
        );
    assert.equal(selected.length, 1);
    const [[key, definition]] = selected;
    assert(context.wordBooks.has(key));
    assert(context.lexicons.has(key));
    const attributes = `lang=${key}`,
        known = ordinary[0].form,
        scanned = scanRuns(`[${known}]{${attributes}}`, context);
    assert.deepEqual(scanned.errors, []);
    assert.deepEqual(scanned.warnings, []);
    assert.equal(scanned.runs[0].lang, key);
    assert.equal(scanned.runs[0].tag, definition.tag);
    for (const word of ordinary) {
        const result = renderRuns(`[${word.form}]{${attributes}}`, context);
        assert.deepEqual(result.errors, [], word.form);
        assert.equal(
            result.markdown,
            `[${word.form.replace(/(?<=\p{L})['-](?=\p{L})/gu, "\\$&")}]{lang=${definition.tag}}`,
            word.form,
        );
    }
    // The renderer checks words in mapped runs. This language has no map;
    // exercise that same public lexical scanner against its configured book.
    const { unknownWords, unknownWordMessage } =
        await import("@heroiclands/package-build/engine/run-words");
    const unknown = "vuvuvuvu",
        book = context.wordBooks.get(key);
    assert.equal(book.accepts(unknown), false);
    const negative = unknownWords(unknown, book);
    assert.deepEqual(negative, [{ offset: 0, word: unknown }]);
    const message = unknownWordMessage(negative[0].word, key);
    assert(message.includes(`\`${unknown}\` is not a word`));
    assert(message.includes(`\`${key}\` lexicon`));
});

test("Kalihari keeps the complete original stock, body and reserved interpretations", async () => {
    const hash = (x) =>
        crypto
            .createHash("sha256")
            .update(typeof x === "string" ? x : JSON.stringify(x))
            .digest("hex");
    const originalWords = language.fm.data.words.slice(0, 59);
    assert.equal(
        hash(originalWords.map(({ concept, ...w }) => w)),
        "f3d295c24ad484284df053b1e7ed936607e90b7c1161287350e40e156c2df438",
    );
    for (const [form, id] of [
        ["vaar-", "hold"],
        ["vanu-", "water"],
        ["nao-", "green"],
        ["ilo-", "door"],
    ])
        assert(ids(originalWords.find((w) => w.form === form)).includes(id), form);
    const meta = structuredClone(language.fm);
    delete meta.data.words;
    // The new repertoire is checked independently by roman-inventories.test.mjs.
    delete meta.data.roman;
    meta.data.fields = meta.data.fields.slice(0, 3);
    assert.equal(hash(meta), "88eefd088b22ebfd57572553aae1a3d419af12bb15808021af8ac4855f8fd793");
    const body = splitFrontmatter(language.raw).body.replace(
        /## Everyday speech\n[\s\S]*?(?=## Script and Literacy\n)/u,
        "",
    );
    assert.equal(hash(body), "82a6627e192fd3ba3b4b0ceb6691589c2d8071d283455194893bc2f78b029e97");
    const oldData = {
        ...language.fm.data,
        words: originalWords,
        fields: language.fm.data.fields.slice(0, 3),
    };
    const { pieceGlosses } = await import("@heroiclands/package-build/engine/word-rows");
    const before = pieceGlosses(oldData),
        after = pieceGlosses(language.fm.data),
        probes = new Set();
    const add = (form) => {
        if (typeof form !== "string" || form.includes("{")) return;
        for (const f of [
            form,
            form.toLowerCase(),
            form.replace(/^-+|-+$/g, ""),
            form.toLowerCase().replace(/^-+|-+$/g, ""),
            form.replace(/[aeiou]$/i, "").toLowerCase(),
        ])
            if (f) probes.add(f);
    };
    for (const w of originalWords) {
        add(w.form);
        for (const f of w.built ?? []) add(f);
        for (const f of w.variants ?? []) add(f);
    }
    for (const w of oldData.affixes) {
        add(w.form);
        for (const f of [w.front ?? []].flat()) add(f);
    }
    const walk = (v) => {
        if (typeof v === "string") add(v);
        else if (Array.isArray(v)) v.forEach(walk);
        else if (v && typeof v === "object") Object.values(v).forEach(walk);
    };
    walk(oldData.names);
    for (const r of oldData.register)
        if (r.tongue !== "translation") {
            add(r.name);
            for (const p of r.built ?? []) add(p);
        }
    for (const r of oldData.retired) {
        add(r.form);
        walk(r.instead);
    }
    // Preserve #776's historical lookup probes, including its old household aliases.
    // Current pronunciation teaching is checked in household-pronunciation.test.mjs.
    for (const name of Object.values(oldData.names.given).flat()) {
        const syllables = [],
            text = name.toLowerCase();
        let start = 0;
        for (let i = 0; i < text.length; i++) {
            if (!/[aeiou]/u.test(text[i])) continue;
            let end = i + 1;
            if (["ai", "ei", "ao", "ae", "oa", "ou"].includes(text.slice(i, i + 2))) end = i + 2;
            syllables.push({ start, text: text.slice(start, end) });
            start = end;
            i = end - 1;
        }
        if (start < text.length && syllables.length) syllables.at(-1).text += text.slice(start);
        if (syllables.length < 4) continue;
        let cut = syllables.length - 2;
        if (/^[aeiou]/u.test(syllables[cut].text)) cut--;
        add(name.slice(syllables[cut].start));
    }
    assert.equal(probes.size, 776);
    for (const form of probes) assert.equal(after(form), before(form), form);
    const oldRecord = { ...records[0], data: oldData },
        oldRows = dictionaryAndTermRows([oldRecord]).dictionary,
        currentRows = dictionaryAndTermRows(records).dictionary.filter(
            (r) => r.language === canonical("skill-kalihrlng"),
        );
    for (const row of oldRows)
        assert.deepEqual(
            currentRows.find((r) => r.name === row.name),
            row,
            row.name,
        );
});

test("new ordinary Kalihari words keep the documented sounds and published usage", async () => {
    const free = new Set(ordinary.map((w) => w.form)),
        formula = "theiluori koruvei avaelith";
    for (const w of language.fm.data.words.slice(59))
        for (const p of w.form.split(" ")) {
            if (w.form !== formula)
                assert(free.has(p), w.form + ": undefined ordinary constituent " + p);
            const spelling = p.toLowerCase(),
                token = spelling.normalize("NFD").replace(/\u0301/gu, "");
            assert(/^(?:[aeiournlvksmptwy]|th|ng|')+$/u.test(token), p);
            assert((spelling.match(/[áéíóú]/gu) ?? []).length <= 1, p);
            assert((token.match(/'/g) ?? []).length <= 1, p);
            assert((token.match(/aa|ai|ei|ao|[aeiou]/g) ?? []).length <= 4, p);
            const phonemes = token.replaceAll("th", "T").replaceAll("ng", "N");
            for (const cluster of phonemes.split(/[aeiou']+/u).filter(Boolean))
                assert(cluster.length <= 1, p + ": unlicensed cluster");
            assert(/[aeiounlr]$|th$/u.test(token), p + ": ending");
        }
    assert(splitFrontmatter(language.raw).body.includes("_Theiluori koruvei avaelith_"));
    const { lexicalSectionsFor, insertLexicalSections } =
        await import("@heroiclands/package-build/engine/lexical-sections");
    const printed = insertLexicalSections(
        splitFrontmatter(language.raw).body,
        lexicalSectionsFor(records).get(canonical("skill-kalihrlng")),
    ).markdown;
    for (const w of ordinary) {
        assert(printed.includes("**" + w.form + "**"), w.form);
        for (const g of [w.gloss].flat())
            assert(printed.includes(g.charAt(0).toUpperCase() + g.slice(1)), w.form + ": " + g);
    }
});
