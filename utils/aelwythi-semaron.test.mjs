/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { applyMap, compileMap } from "@heroiclands/package-build/engine/text-maps";
import { renderRuns, runContext } from "@heroiclands/package-build/engine/content-scripts";
import { collectContentIndex } from "@heroiclands/package-build/engine/content-index";
import { entryContext } from "@heroiclands/package-build/engine/foundry-entries";
import { buildContentLinkIndex } from "@heroiclands/package-build/engine/helpers";
import { buildJournalEntry } from "@heroiclands/package-build/engine/journals";
import { loadPackConfig } from "@heroiclands/package-build/engine/pack-config";
import { convertWikilinks } from "@heroiclands/package-build/engine/wikilinks";
import { openNotesDatabase } from "@heroiclands/package-build/engine/sql-tables";
import { nativeLookup, transliterate } from "@heroiclands/package-build/engine/map-lexicon";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { fromWrittenIn, writtenInOf } from "@heroiclands/package-build/engine/written-in";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { NOTE_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";

const CONTENT = "assets/content/";
function note(path) {
    const file = CONTENT + path;
    const raw = fs.readFileSync(file, "utf8");
    const split = splitFrontmatter(raw);
    return { file, raw, fm: YAML.parse(split.yaml) };
}
const language = note("Skills/Languages/Aelwythi.md");
const shared = note("Lore/Scripts/Semaron_Spelling.md");
const guide = note("Lore/Pronouncing_Thalorna.md");
const own = note("Lore/Scripts/Aelwythi_Semaron_Spelling.md");
const map = compileMap(own.fm.data.map);
const records = [language, own].map((value) => ({
    ...value.fm,
    package: "thalorna",
    system: "note",
    file: value.file,
}));
const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
const native = nativeLookup(ctx.lexicons.get("aelw"), map.name, "semaron-kuriale");
const write = (text) => applyMap(map, text, { font: "semaron-kuriale", native }).text;
const face = resolveScriptFonts(process.cwd()).faces.get("semaron-kuriale");
const outlines = fontOutlines(face.file);
const box = outlines.glyph("c".codePointAt(0)).index;
function missing(text) {
    return [...text].filter((char) => {
        if (/\s/u.test(char)) return false;
        if (/\p{Default_Ignorable_Code_Point}/u.test(char)) {
            if (face.draws.has(char.codePointAt(0))) {
                const glyph = outlines.glyph(char.codePointAt(0));
                assert(!glyph.d, "a declared control has no ink");
                assert.equal(glyph.advance, 0, "a declared control has no advance");
            }
            return false;
        }
        const glyph = outlines.glyph(char.codePointAt(0));
        return !face.draws.has(char.codePointAt(0)) || !glyph || !glyph.d || glyph.index === box;
    });
}
const hash = (text) => createHash("sha256").update(text).digest("hex");
const samples = language.raw
    .split(/### Sample passages(?: \{#[^}]+\})?\n/)[1]
    .split("\n## Naming Traditions")[0];
const authoredSamples = samples
    .split("\n")
    .filter((line) => line.startsWith("> ") || /^2 \[.*\]\{lang=aelw\}$/.test(line))
    .map((line) => ({
        prose: line.startsWith("> "),
        text: line.startsWith("> ") ? line.slice(2) : line.match(/^2 \[(.*)\]\{lang=aelw\}$/)[1],
    }));
// The canonical hash fixes the sample words while allowing the approved pause spelling.
// Apostrophes, quotation wrappers, spacing and line breaks remain part of the hash.
const sampleWorks = authoredSamples
    .map(({ prose, text }) => `> ${prose ? `"${text}"` : text}`)
    .join("\n");
const passage = authoredSamples.map(({ text }) => text).join("\n");

test("ordinary Aelwythi source exposes the shared mapping's unsupported characters", () => {
    const old = applyMap(compileMap(shared.fm.data.map), "conquer?").text;
    assert(missing(old).includes("c"));
    assert(missing(old).includes("?"));
    const oldSample = applyMap(
        compileMap(shared.fm.data.map),
        "Thol aa ii uu ee oo ya thy ch q kàralzon.",
    ).text;
    assert.deepEqual(
        [...oldSample].map((char) => char.codePointAt(0)),
        [
            0xf0251, 0xf023d, 0xf023a, 32, 0xf0248, 32, 0xf024a, 32, 0xf024c, 32, 0xf0233, 0xf0233,
            32, 0xf023d, 0xf023d, 32, 0xf0245, 0xf0230, 32, 0xf0250, 0xf0237, 32, 0xf0241, 0xf0240,
            0xf0236, 32, 0xf0239, 32, 0xf0239, 0xf0270, 0xf0230, 0xf023f, 0xf0230, 0xf023a, 0xf0246,
            0xf023d, 0xf023c, 0xf0268,
        ],
    );
});

test("both Semaron maps reserve the pause point for period", () => {
    for (const value of [shared, own]) {
        const compiled = compileMap(value.fm.data.map);
        const pause = String.fromCodePoint(0xf0268);
        assert.deepEqual(
            compiled.rows.filter((row) => row.to.includes(pause)).map((row) => row.from),
            ["."],
            compiled.name,
        );
        assert.equal(applyMap(compiled, ".").text, pause);
        for (const mark of ",;:—–?!¡¿…()[]")
            assert.equal(applyMap(compiled, mark).text, mark, `${compiled.name}: ${mark}`);
    }
});

test("Vylari grave catches preserve their native attachment and case", () => {
    const compiled = compileMap(shared.fm.data.map);
    const cases = [
        ["à", [0xf0230, 0xf0270]],
        ["À", [0xf0200, 0xf0270]],
        [
            "kàralzon",
            [0xf0239, 0xf0270, 0xf0230, 0xf023f, 0xf0230, 0xf023a, 0xf0246, 0xf023d, 0xf023c],
        ],
        ["Kà", [0xf0209, 0xf0270, 0xf0230]],
        ["kÀ", [0xf0239, 0xf0270, 0xf0200]],
        ["KÀ", [0xf0209, 0xf0270, 0xf0200]],
    ];
    for (const [source, expected] of cases) {
        const output = applyMap(compiled, source).text;
        assert.deepEqual(
            [...output].map((char) => char.codePointAt(0)),
            expected,
            source,
        );
        assert.deepEqual(missing(output), [], source);
    }
});

test("the language selects its own executable mapping in the installed renderer", () => {
    assert.equal(map.name, "aelwythi-semaron");
    const scripts = writtenInOf(new Map([["aelw", language.fm]]), new Map([[map.name, map]]));
    assert.deepEqual(fromWrittenIn({ lang: "aelw" }, scripts, new Map([[map.name, map]])), {
        map: "aelwythi-semaron",
        font: "semaron-kuriale",
    });
});

test("explicit native Aelwythi runs use the installed renderer and dictionary forms", () => {
    const rendered = renderRuns("[Exact conquer sceptic]{.nativefont lang=aelw}", ctx);
    assert.deepEqual(rendered.errors, []);
    assert.match(rendered.markdown, /hl-semaron-kuriale/);
    assert(rendered.markdown.includes(write("Exact conquer sceptic")));
    for (const word of language.fm.data.words.filter((word) =>
        word.native?.some((entry) => entry.map === map.name),
    )) {
        assert.equal(write(word.form), word.native[0].text);
        assert.notEqual(applyMap(map, word.form).text, word.native[0].text);
    }
});

test("sound and mapping frontmatter use the installed schemas", () => {
    for (const value of [language, guide, own]) {
        assert.deepEqual(
            lintNote(value, {
                schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
                vocabulary: NOTE_VOCABULARY,
                addressContext: { package: "thalorna", system: "note" },
            }),
            [],
        );
    }
    const sounds = guide.fm.data.sounds.letters.filter((row) =>
        row.tongue?.includes("skill-aelwthlng"),
    );
    for (const ipa of [
        "ɪ",
        "e",
        "a",
        "ɤ",
        "ʊ",
        "ɒ",
        "ɑ",
        "ə",
        "iː",
        "ɛː",
        "ɐː",
        "ɑː",
        "ɔː",
        "oː",
        "uː",
        "əɪ",
        "əʊ",
    ])
        assert(
            sounds.some((row) => row.ipa === ipa),
            `OP vowel ${ipa} needs a scoped spelling account`,
        );
    const consonants = new Set(
        sounds
            .filter((row) => row.kind.includes("consonant"))
            .flatMap((row) => row.ipa.split(/[ ,]+/)),
    );
    for (const ipa of [
        "p",
        "b",
        "t",
        "d",
        "k",
        "ɡ",
        "f",
        "v",
        "θ",
        "ð",
        "s",
        "z",
        "ʃ",
        "h",
        "m",
        "n",
        "ŋ",
        "l",
        "ɹ",
        "j",
        "w",
        "ʍ",
        "tʃ",
        "dʒ",
    ])
        assert(consonants.has(ipa), `OP consonant ${ipa} needs a scoped spelling account`);
    for (const row of sounds) {
        assert(row.like, "a sound needs a readable contextual explanation");
        // These rows describe conventional English words, whose whole-word native
        // exceptions apply; isolated c/x spellings are deliberately not map rules.
        for (const letters of row.letters) assert.equal(typeof letters, "string");
    }
});

test("Readable graphemes, case, elision and punctuation have usable glyph sequences", () => {
    const expectations = [
        ["qQ", [0xf0247, 0xf0217]],
        ["qu", [0xf0247, 0xf0242]],
        ["th", [0xf0250]],
        ["Th", [0xf0251]],
        ["ch", [0xf028c]],
        ["Ch", [0xf028d]],
        ["sh", [0xf0286]],
        ["Sh", [0xf0287]],
        ["dh", [0xf0280]],
        ["kh", [0xf0282]],
        ["gh", [0xf0284]],
        ["zh", [0xf0288]],
        ["ts", [0xf028a]],
        ["ng", [0xf028e]],
        ["y", [0xf0245]],
        ["ya", [0xf0245, 0xf0230]],
        ["nya", [0xf0290, 0xf0230]],
        ["ny", [0xf023c, 0xf0245]],
        ["aa", [0xf0230, 0xf0230]],
        [
            "áÉíÓú",
            [
                0xf0230, 0xe0114, 0xf0203, 0xe0114, 0xf0237, 0xe0114, 0xf020d, 0xe0114, 0xf0242,
                0xe0114,
            ],
        ],
        ["'tis", [0xf0241, 0xf0237, 0xf0240]],
        ["’tis", [0xf0241, 0xf0237, 0xf0240]],
        ['"I."', [0xf0207, 0xf0268]],
        ["a-b", [0xf0230, 32, 0xf0231]],
    ];
    for (const from of ["c", "C", "x", "X", "CH", "cH", "ë", "Ë", "à", "À"])
        assert(
            !map.rows.some((row) => row.from === from),
            `${from} is not an added conversion rule`,
        );
    const stress = outlines.glyph(0xe0114);
    assert(stress && stress.index !== box);
    assert.equal(stress.d, "");
    assert.equal(stress.advance, 0);
    for (const [text, codepoints] of expectations) {
        assert.deepEqual(
            [...write(text)].map((c) => c.codePointAt(0)),
            codepoints,
            text,
        );
        assert.deepEqual(missing(write(text)), [], text);
    }
});

test("reviewed sample words stay protected while automatic conversion draws every character", () => {
    assert.equal(
        hash(sampleWorks.replace(/[.,;:!?]/gu, "")),
        "11bbf66f5c410e410fb3f7553c1ff1f03151a9530992c28ad5446c4ff9435669",
    );
    const converted = transliterate(ctx, { lang: "aelw", map: map.name }, passage);
    assert.equal(converted.text, write(passage));
    assert.deepEqual(missing(converted.text), []);
    for (const form of ["offering", "courteous"]) {
        const word = language.fm.data.words.find((word) => word.form === form);
        assert.equal(word.pronunciation.split("-").length, 2);
        assert(word.note.includes("syllables"));
    }
    const representative =
        "thin thy ship church judge sing where wear cup put hot watch the see day bird wall fawn go do my boy now ocean exact conquer 'tis summer's";
    assert.deepEqual(missing(write(representative)), []);
    for (const [form, points] of [
        ["pack", [0xf023e, 0xf0230, 0xf0239, 0xf0239]],
        ["pluck", [0xf023e, 0xf023a, 0xf0242, 0xf0239, 0xf0239]],
        [
            "Blackkiln",
            [0xf0201, 0xf023a, 0xf0230, 0xf0239, 0xf0239, 0xf0239, 0xf0237, 0xf023a, 0xf023c],
        ],
    ])
        assert.equal(write(form), String.fromCodePoint(...points), form);
    for (const { name } of language.fm.data.register)
        assert.deepEqual(missing(write(name)), [], `registered name ${name}`);
    for (const row of own.fm.data.map.rows) {
        const [from, to] = Array.isArray(row) ? row : [row.from, row.to];
        assert.deepEqual(missing(to), [], `declared output of ${from}`);
    }
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
