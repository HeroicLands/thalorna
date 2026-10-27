/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { encodeText, decodeText } from "@heroiclands/package-build/engine/encoding";
import { renderRuns } from "@heroiclands/package-build/engine/content-scripts";
import { collectContentIndex } from "@heroiclands/package-build/engine/content-index";
import { entryContext } from "@heroiclands/package-build/engine/foundry-entries";
import { buildContentLinkIndex } from "@heroiclands/package-build/engine/helpers";
import { buildJournalEntry } from "@heroiclands/package-build/engine/journals";
import { loadPackConfig } from "@heroiclands/package-build/engine/pack-config";
import { convertWikilinks } from "@heroiclands/package-build/engine/wikilinks";
import { openNotesDatabase } from "@heroiclands/package-build/engine/sql-tables";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { NOTE_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";
import { aelwythiEncoding, readNote } from "./aelwythi-encoding.mjs";
import { languageForms } from "./aelwythi-respell.mjs";

const {
    language,
    spelling: own,
    config,
    ctx,
    encoding,
    codes,
    outlines,
    encode,
    glyphProblems,
} = aelwythiEncoding();
const guide = readNote("assets/content/Lore/Pronouncing_Thalorna.md");
const samples = language.raw
    .split(/### Sample passages(?: \{#[^}]+\})?\n/)[1]
    .split("\n## Naming Traditions")[0];
const sampleLines = samples
    .split("\n")
    .filter((line) => line.startsWith("> ") || /^2 \[.*\]\{lang=aelw\}$/.test(line))
    .map((line) =>
        line.startsWith("> ") ? line.slice(2) : line.match(/^2 \[(.*)\]\{lang=aelw\}$/)[1],
    );

test("the actual encoding document reads its selected font's glyph codes", () => {
    assert.equal(own.fm.shortcode, "aelwsemaronenc");
    assert.equal(encoding.name, "thalorna-note-doc-aelwsemaronenc");
    assert.equal(encoding.language, "aelw");
    assert.equal(encoding.font, "semaron-kuriale");
    assert.equal(codes.KALPEZA_MIN, "\u{F0239}");
    assert.equal(codes.LONG_ORNETHE_MAJ, "\u{F0223}");
    assert.equal(codes.CATCH, "\u{F0270}");
    assert.equal(codes.STRESS, "\u{E0114}");
    for (const key of ["map", "name", "codes", "codage"])
        assert(!Object.hasOwn(own.fm.data, key), `${key} is not copied into the encoding note`);
    assert(!Object.hasOwn(language.fm.data, "writtenIn"));
    assert(language.fm.data.words.every((word) => !word.native));
});

test("only the shared punctuation standard and explicit mappings apply", () => {
    assert.equal(encodeText(encoding, "."), "\u{F0268}");
    for (const [source, point] of [
        ["?", 0xe0101],
        ["‼", 0xe0102],
        ["!", 0xe0103],
    ])
        assert.equal(encodeText(encoding, source), String.fromCodePoint(point), source);
    for (const source of [";", ":", '"', "ë", "à", "c", "ce", "Ci", "cy", "x", "X", "CH", "cH"])
        assert(encode(source).findings.length, `${source} is refused, not silently rewritten`);
});

test("encoding selection supplies language and font while the default stays Roman", () => {
    const source = "[say]{enc=aelwsemaronenc}";
    const rendered = renderRuns(source, ctx);
    assert.deepEqual(rendered.errors, []);
    assert.match(rendered.markdown, /lang=art-x-aelw/);
    assert.match(rendered.markdown, /hl-semaron-kuriale/);
    assert(rendered.markdown.includes(encodeText(encoding, "say")));
    const roman = renderRuns("[say]{lang=aelw enc=default}", ctx);
    assert.deepEqual(roman.errors, []);
    assert(roman.markdown.includes("say"));
    assert(!roman.markdown.includes("hl-semaron-kuriale"));
});

test("fixed letter groups, case, contextual ny and stress have exact usable glyphs", () => {
    const cases = [
        ["qu", [0xf0247, 0xf0242]],
        ["th", [0xf0250]],
        ["Th", [0xf0251]],
        ["ch", [0xf028c]],
        ["Ch", [0xf028d]],
        ["tch", [0xf0241, 0xf028c]],
        ["sh", [0xf0286]],
        ["dh", [0xf0280]],
        ["kh", [0xf0282]],
        ["gh", [0xf0284]],
        ["zh", [0xf0288]],
        ["ts", [0xf028a]],
        ["ng", [0xf028e]],
        ["y", [0xf0245]],
        ["nya", [0xf0290, 0xf0230]],
        ["ny", [0xf023c, 0xf0245]],
        ["aa", [0xf0230, 0xf0230]],
        ["á", [0xf0230, 0xe0114]],
        ["Á", [0xf0200, 0xe0114]],
        ["é", [0xf0233, 0xe0114]],
        ["É", [0xf0203, 0xe0114]],
        ["í", [0xf0237, 0xe0114]],
        ["Í", [0xf0207, 0xe0114]],
        ["ó", [0xf023d, 0xe0114]],
        ["Ó", [0xf020d, 0xe0114]],
        ["ú", [0xf0242, 0xe0114]],
        ["Ú", [0xf0212, 0xe0114]],
    ];
    for (const [source, points] of cases) {
        const native = encodeText(encoding, source);
        assert.equal(native, String.fromCodePoint(...points), source);
        assert.deepEqual(glyphProblems(native), [], source);
        assert.equal(decodeText(encoding, native), source);
    }
    assert(encode("aé").findings.length, "a vowel group's stress belongs on its first vowel");
    const stress = outlines.glyph(0xe0114);
    assert.equal(stress.d, "");
    assert.equal(stress.advance, 0);
});

test("literal codage uses the selected font's code names", () => {
    const named = encode("⟦CHEROLA_MIN⟧"),
        point = encode("⟦U+F028C⟧");
    assert.deepEqual(named.findings, []);
    assert.deepEqual(point.findings, []);
    assert.equal(named.text, point.text);
    assert(named.text.includes("\u{F028C}"));
    assert.deepEqual(glyphProblems(named.text), []);
});

test("the pronunciation references keep the Aelwythi orthographic exceptions explicit", () => {
    const commonOpening = guide.body
        .split("## Common pronunciation")[1]
        .split("### English words and coined spellings")[0];
    assert(commonOpening.includes("neither apostrophes nor hyphens"));
    assert(!commonOpening.includes("including its stress and apostrophe rules"));
    const coined = language.body
        .split("### Coined words and names")[1]
        .split("### Foreign words and names")[0];
    assert(!coined.includes("An apostrophe marks"));
    assert(!coined.includes("An apostrophe's consonant"));
});

test("sound and encoding frontmatter satisfy the current schema", () => {
    for (const value of [language, guide, own])
        assert.deepEqual(
            lintNote(value, {
                schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
                vocabulary: NOTE_VOCABULARY,
                addressContext: { package: "thalorna", system: "note" },
            }),
            [],
        );
});

test("every registered name follows the same lossless encoding", () => {
    const findings = [];
    for (const { name } of language.fm.data.register) {
        const result = encode(name),
            rendered = renderRuns(`[${name}]{enc=aelwsemaronenc}`, ctx);
        if (result.findings.length || rendered.errors.length)
            findings.push({ name, encoded: result.findings, rendered: rendered.errors });
        else {
            assert.deepEqual(glyphProblems(result.text), [], name);
            assert.equal(decodeText(encoding, result.text), name);
        }
    }
    assert.deepEqual(findings, [], "all names encode without hidden per-word spellings");
});

test("all naming elements, name lists and grammar forms satisfy the encoding", () => {
    const findings = [];
    for (const entry of languageForms(language.file).filter(
        ({ kind }) => !["word", "variant"].includes(kind),
    )) {
        const result = encode(entry.form);
        if (result.findings.length)
            findings.push({ at: entry.at, form: entry.form, findings: result.findings });
        else {
            assert.deepEqual(glyphProblems(result.text), [], entry.at);
            assert.equal(decodeText(encoding, result.text), entry.form, entry.at);
        }
    }
    assert.deepEqual(
        findings,
        [],
        "unused authoritative forms have no character, case or diacritic exemption",
    );
});

test("reviewed samples render through the encoding without silent substitutions", () => {
    const findings = [];
    for (const source of sampleLines) {
        const result = encode(source),
            rendered = renderRuns(`[${source}]{enc=aelwsemaronenc}`, ctx);
        if (result.findings.length || rendered.errors.length)
            findings.push({ source, encoded: result.findings, rendered: rendered.errors });
        else {
            assert(rendered.markdown.includes(result.text), source);
            assert.deepEqual(glyphProblems(result.text), [], source);
            assert.equal(decodeText(encoding, result.text), source);
        }
    }
    assert.deepEqual(findings, [], "no invalid reviewed sample is exempted from the rules");
});

test("the guide's executable pronunciation tables show their scoped sound data", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "aelwythi-pronunciation-"));
    let db;
    try {
        for (const value of [language, guide, own])
            fs.writeFileSync(path.join(dir, path.basename(value.file)), value.raw);
        const indexed = collectContentIndex(dir, {
            contentPackage: config.contentPackage,
            skipDirectories: [],
        });
        db = await openNotesDatabase(indexed);
        const queries = [...guide.raw.matchAll(/```sql\n([\s\S]*?)\n```/g)];
        assert.equal(queries.length, 2);
        const counts = [];
        for (const [, sql] of queries) {
            const result = await db.query(sql);
            assert(result.rows.length > 0, "a published pronunciation table must not be empty");
            counts.push(result.rows.length);
        }
        const scoped = guide.fm.data.sounds.letters.filter((row) =>
            row.tongue?.includes("skill-aelwthlng"),
        );
        assert.equal(
            counts[0],
            scoped.filter((row) => ["vowel", "long vowel", "vowel pair"].includes(row.kind)).length,
        );
        assert.equal(counts[0] + counts[1], scoped.length);
    } finally {
        await db?.close();
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("pronunciation references resolve to an exported journal page", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "aelwythi-pronunciation-links-"));
    try {
        for (const value of [language, guide, own])
            fs.writeFileSync(path.join(dir, path.basename(value.file)), value.raw);
        const resolved = loadPackConfig();
        const manifest = entryContext(resolved);
        const indexed = collectContentIndex(dir, {
            contentPackage: resolved.contentPackage,
            manifest,
            skipDirectories: [],
        });
        const index = buildContentLinkIndex(dir, manifest.packRouter, {
            config: resolved,
            records: indexed,
            foreign: { index: new Map(), references: new Map(), stale: [] },
        });
        const target = indexed.find((record) => record.shortcode === guide.fm.shortcode);
        const results = [language, own].map((source) => {
            const references = [
                ...source.raw.matchAll(
                    source === language ?
                        /\[\[doc-prnncthlrn(?:#[^|\]]+)?(?:\|[^\]]+)?\]\]/g
                    :   /\[\[skill-aelwthlng#pronunciation(?:\|[^\]]+)?\]\]/g,
                ),
            ];
            assert.equal(references.length, 1, `${source.file} must link to pronunciation rules`);
            const result = convertWikilinks(references[0][0], {
                type: source.fm.type,
                id: indexed.find((record) => record.shortcode === source.fm.shortcode).id,
                index,
            });
            return { source, result };
        });
        assert.deepEqual(
            results.flatMap(({ result }) => result.unresolved),
            [],
        );
        for (const { source, result } of results) {
            const destination =
                source === language ? target : (
                    indexed.find((record) => record.shortcode === language.fm.shortcode)
                );
            const uuid =
                result.links[0].anchor ?
                    destination.foundry.note.anchors[result.links[0].anchor]
                :   destination.foundry.note.uuid;
            const journal = buildJournalEntry({
                id: destination.id,
                name: destination.name.full,
                markdown: splitFrontmatter(source === language ? guide.raw : language.raw).body,
            });
            assert(uuid, "the content index must publish the referenced section");
            assert(result.markdown.includes(`@UUID[${uuid}]`), source.file);
            assert(
                uuid === destination.foundry.note.uuid ||
                    journal.pages.some(
                        (page) =>
                            uuid ===
                            `${destination.foundry.note.uuid}.JournalEntryPage.${page._id}`,
                    ),
                "the resolved UUID must address a page the journal exporter creates",
            );
        }
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});
