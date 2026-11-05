/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import yaml from "yaml";
import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import {
    compileEncoding,
    decodeText,
    encodeText,
} from "@heroiclands/package-build/engine/encoding";
import {
    decodeWithLanguage,
    encodeWithLanguage,
} from "@heroiclands/package-build/engine/encoding-language";
import { encodingFor } from "@heroiclands/package-build/engine/encoding-lexicon";
import { emitContentIndex } from "@heroiclands/package-build/engine/content-index";
import { encodeAddresses } from "@heroiclands/package-build/engine/address-values";
import { checkNotes, generateEncoding, GLYPH_CODES, NOTES } from "./veldikko-spelling.mjs";
import { checkLanguage, readIndex, referenceWithPerformance } from "./veldikko-guard.mjs";
import { convertVeldikko } from "./veldikko-reference.mjs";

const config = {
    contentPackage: "thalorna",
    languages: { sina: { tag: "art-x-sina", note: "skill-sinalelng" } },
};
const sign = (...points) => String.fromCodePoint(...points);
function records() {
    return [
        {
            package: "thalorna",
            type: "skill",
            subType: "language",
            shortcode: "sinalelng",
            file: { path: "sinale.md" },
            address: { canonical: "thalorna-note-skill-sinalelng" },
            data: {
                words: [{ form: "pa", gloss: "test" }],
                names: { personal: ["pa"], pattern: "ignored" },
                family: { address: "thalorna-note-skill-parent", anchor: null, anchorKind: null },
            },
        },
        {
            package: "thalorna",
            type: "doc",
            shortcode: "sinaveldikkoenc",
            file: { path: "sinale-encoding.md" },
            data: { language: "sina", font: "veldikko", ...generateEncoding("sinale") },
        },
    ];
}
function indexedContext(config, values) {
    const ctx = {
        ...runContext(
            config,
            values.filter((record) => record.type !== "doc"),
        ),
    };
    ctx.encodings = new Map();
    for (const record of values.filter(
        (record) => record.type === "doc" && record.data?.mappings,
    )) {
        const encoding = compileEncoding(record.data, {
            codes: GLYPH_CODES,
            name: `thalorna-note-doc-${record.shortcode}`,
        });
        ctx.encodings.set(record.shortcode, encoding);
        ctx.encodings.set(encoding.name, encoding);
    }
    ctx.faces = new Map([
        [
            "veldikko",
            {
                slug: "veldikko",
                family: "Veldikko",
                class: "hl-veldikko",
                direction: "ltr",
                features: [],
                draws: new Set(
                    Object.values(GLYPH_CODES).flatMap((text) =>
                        [...text].map((char) => char.codePointAt(0)),
                    ),
                ),
            },
        ],
    ]);
    ctx.encodingFindings = [];
    return ctx;
}
function fixture(t, values = records()) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "veldikko-index-"));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const index = path.join(dir, "metadata.jsonl");
    fs.writeFileSync(index, values.map((record) => JSON.stringify(record)).join("\n") + "\n");
    return {
        dir,
        index,
        language: {
            name: "sina",
            enc: "sinaveldikkoenc",
            note: path.join(dir, "missing.md"),
            reference: true,
        },
    };
}

test("index is read once and decoded; successful forms and names need no source tree", (t) => {
    const { index, language } = fixture(t);
    const reads = [];
    const original = fs.readFileSync;
    t.mock.method(fs, "readFileSync", (file, ...args) => {
        reads.push(file);
        assert.equal(file, index);
        return original(file, ...args);
    });
    t.mock.method(fs, "readdirSync", () => assert.fail("must not scan sources"));
    const decoded = readIndex(index, config);
    assert.equal(encodeAddresses(decoded[0].data.family), "thalorna-note-skill-parent");
    assert.notDeepEqual(decoded[0].data.family, {
        address: "thalorna-note-skill-parent",
    });
    const ctx = indexedContext(config, decoded);
    const result = checkLanguage(language, ctx, decoded[0], () => sign(0x1ed50, 0x1ed70));
    assert.deepEqual(result, { checked: 2, findings: [] });
    assert.deepEqual(reads, [index]);
});

test("unwritable forms and names retain exact source positions", (t) => {
    const values = records();
    values[0].data.words = [{ form: "p$", gloss: "test" }];
    values[0].data.names.personal = ["p$"];
    const { index, language } = fixture(t, values);
    fs.writeFileSync(language.note, "---\ndata:\n  words:\n    - form: p$\n  names: [p$]\n---\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(language, indexedContext(config, decoded), decoded[0]);
    assert.equal(result.findings.length, 2);
    assert(
        result.findings[0].startsWith(
            `${language.note}:4:13: error: the form \`p$\` cannot be encoded:`,
        ),
    );
    assert(
        result.findings[1].startsWith(
            `${language.note}:5:11: error: the name \`p$\` cannot be encoded:`,
        ),
    );
    for (const finding of result.findings) assert(finding.includes("$"));
});

test("independent converter mismatch preserves scalar diagnostic", (t) => {
    const { index, language } = fixture(t);
    fs.writeFileSync(language.note, "pa\npa\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(language, indexedContext(config, decoded), decoded[0], () =>
        sign(0x1ed51, 0x1ed70),
    );
    assert.equal(result.findings.length, 2);
    assert.match(
        result.findings[0],
        /:1:1: error:.*U\+1ED50 U\+1ED70, but the converter writes U\+1ED51 U\+1ED70/,
    );
});

test("missing encoding and language cannot pass with zero checked forms", (t) => {
    const { index, language } = fixture(t);
    const decoded = readIndex(index, config);
    assert.throws(
        () => checkLanguage(language, indexedContext(config, decoded.slice(0, 1)), decoded[0]),
        /encoding/,
    );
    assert.throws(
        () => checkLanguage(language, indexedContext(config, decoded), undefined),
        /language note/,
    );
});

test("missing, corrupt, empty and incompatible indexes fail without rebuilding", (t) => {
    const { index } = fixture(t);
    fs.unlinkSync(index);
    assert.throws(() => readIndex(index, config), /index.*build:content-index/s);
    fs.writeFileSync(index, "\n{");
    assert.throws(() => readIndex(index, config), /:2:.*malformed/i);
    fs.writeFileSync(index, "\n");
    assert.throws(() => readIndex(index, config), /empty/i);
    fs.writeFileSync(index, JSON.stringify({ package: "other", type: "skill" }));
    assert.throws(() => readIndex(index, config), /incompatible/i);
    for (const sourcePath of [undefined, "", 12]) {
        fs.writeFileSync(
            index,
            JSON.stringify({ package: "thalorna", file: { path: sourcePath } }),
        );
        assert.throws(() => readIndex(index, config), /incompatible.*source path/i);
    }
    const values = records();
    values[0].address.canonical = "incomplete";
    fs.writeFileSync(index, JSON.stringify(values[0]));
    assert.throws(() => readIndex(index, config), /:1:.*incompatible.*complete Address/i);
});

test("CLI requires an explicit index and rejects the retired external-converter option", (t) => {
    const script = path.resolve("utils/veldikko-guard.mjs");
    const missing = spawnSync(process.execPath, [script], { encoding: "utf8" });
    assert.equal(missing.status, 1);
    assert.match(missing.stderr, /--index.*build:content-index/s);
    const { index, dir } = fixture(t);
    const fonts = spawnSync(
        process.execPath,
        [script, "--index", index, "--fonts", path.join(dir, "absent")],
        { encoding: "utf8" },
    );
    assert.equal(fonts.status, 1);
    assert.match(fonts.stderr, /invalid argument.*--fonts/i);
});

test("performance adapter keeps the independent converter's scalars and sign order", () => {
    const plain = () => sign(0x1ed50, 0x1ed70, 0x1ed78);
    assert.equal(referenceWithPerformance("pâa", plain), sign(0x1ed50, 0x1ed70, 0x1ed78, 0x1ed7a));
    assert.equal(referenceWithPerformance("pǎa", plain), sign(0x1ed50, 0x1ed70, 0x1ed78, 0x1ed79));
    assert.equal(referenceWithPerformance("páa", plain), sign(0x1ed50, 0x1ed70, 0x1ed78, 0x1ed7b));
});

test("the reference refuses a tone off a held vowel's first letter", () => {
    for (const source of ["pâ", "paâ", "pâi", "pâá", "pấa"])
        assert.throws(() => referenceWithPerformance(source, convertVeldikko), /Sinale/, source);
});

/**
 * A tone on a letter that left-to-right grouping makes the second letter of a
 * held vowel or a diphthong, whichever vowel the toned letter could open.
 */
const OVERLAPPING_TONES = [
    "paâa",
    "paǎa",
    "aâa",
    "aǎa",
    "piîi",
    "piǐi",
    "iîi",
    "puûu",
    "puǔu",
    "uûu",
    "paaaâa",
    "kaîi",
    "kaûu",
    "kiâa",
    "kuîi",
    "keîi",
    "koîi",
    "koûu",
    "kyîi",
];

test("the reference groups letters left to right before placing a tone", () => {
    for (const source of OVERLAPPING_TONES)
        assert.throws(
            () => referenceWithPerformance(source, convertVeldikko),
            /first letter of aa, ii or uu/,
            source,
        );
    const P = 0x1ed50,
        CARRIER = 0x1ed5d,
        A = 0x1ed70,
        U = 0x1ed72,
        I = 0x1ed74,
        LONG = 0x1ed78,
        RISE = 0x1ed79,
        FALL = 0x1ed7a;
    assert.equal(
        referenceWithPerformance("pâaa", convertVeldikko),
        sign(P, A, LONG, FALL, CARRIER, A),
    );
    assert.equal(
        referenceWithPerformance("paaâa", convertVeldikko),
        sign(P, A, LONG, CARRIER, A, LONG, FALL),
    );
    assert.equal(
        referenceWithPerformance("puǎa", convertVeldikko),
        sign(P, U, CARRIER, A, LONG, RISE),
    );
    assert.equal(
        referenceWithPerformance("piûu", convertVeldikko),
        sign(P, I, CARRIER, U, LONG, FALL),
    );
    assert.equal(
        referenceWithPerformance("paiîi", convertVeldikko),
        sign(P, A, I, CARRIER, I, LONG, FALL),
    );
});

test("an acute on a held vowel's or diphthong's second letter splits it", () => {
    const P = 0x1ed50,
        CARRIER = 0x1ed5d,
        A = 0x1ed70,
        I = 0x1ed74,
        STRESS = 0x1ed7b;
    assert.equal(referenceWithPerformance("paá", convertVeldikko), sign(P, A, CARRIER, A, STRESS));
    assert.equal(referenceWithPerformance("paí", convertVeldikko), sign(P, A, CARRIER, I, STRESS));
    assert.equal(referenceWithPerformance("pái", convertVeldikko), sign(P, A, STRESS, I));
});

/** The Sinale program compiled with the installed font's codes. */
function sinale() {
    return compileEncoding(
        { language: "sina", font: "veldikko", ...generateEncoding("sinale") },
        { codes: GLYPH_CODES, name: "thalorna-note-doc-sinaveldikkoenc" },
    );
}

test("the Sinale program accepts only the common tone and stress marks", () => {
    const encoding = sinale();
    const accepted = [
        "onsâa",
        "ovûu",
        "kǎa",
        "kîi",
        "kǐi",
        "kûu",
        "kǔu",
        "ká",
        "kéta",
        "káa",
        "kaá",
        "kái",
        "kaí",
        "kaé",
    ];
    for (const source of accepted) {
        const native = encodeText(encoding, source);
        assert.equal(native, referenceWithPerformance(source, convertVeldikko), source);
        assert.equal(decodeText(encoding, native).replace(/^ch/, "k"), source, source);
    }
    for (const source of ["kâ", "kǎ", "kaâ", "kêe", "kôo", "kâi", "kaî", "kấa", "kâá", "ŷ"])
        assert.throws(() => encodeText(encoding, source), undefined, source);
});

test("the Sinale program groups three or more vowels as the reference does", () => {
    const encoding = sinale();
    for (const source of [
        "pâaa",
        "paaâa",
        "puǎa",
        "piûu",
        "paiîi",
        "koâa",
        "koaa",
        "kaaa",
        "kaai",
        "kaia",
        "kaáa",
        "aaa",
        "eaa",
    ]) {
        const native = encodeText(encoding, source);
        assert.equal(native, referenceWithPerformance(source, convertVeldikko), source);
        assert.equal(decodeText(encoding, native).replace(/^ch/, "k"), source, source);
    }
});

/**
 * Toned held vowels after a vowel, grouped left to right: valid where the
 * letter before ends a group already read or opens none with the toned letter.
 */
const PLACED_TONES = [
    "pâa",
    "puâa",
    "pâaa",
    "paaâa",
    "páaâa",
    "piaâa",
    "paiîi",
    "pauûu",
    "poiîi",
    "pouûu",
    "pâaâa",
    "pǔuîi",
    "peâa",
    "poâa",
    "pyâa",
    "púâa",
    "piûu",
    "peûu",
    "aaâa",
    "âaâa",
    "onsâa",
    "ovûu",
];

test("the Sinale program refuses a tone the left-to-right grouping puts off a held vowel's first letter", () => {
    const encoding = sinale();
    for (const source of [...OVERLAPPING_TONES, "paáâa", "paâaâa", "kaâaîi", "pyîi", "peîi"]) {
        assert.throws(() => referenceWithPerformance(source, convertVeldikko), /Sinale/, source);
        assert.throws(() => encodeText(encoding, source), /No row|not in/, source);
    }
    for (const source of PLACED_TONES) {
        const native = encodeText(encoding, source);
        assert.equal(native, referenceWithPerformance(source, convertVeldikko), source);
        assert.equal(decodeText(encoding, native), source, source);
    }
    // A row condition sees one letter back, so a second toned held vowel
    // straight after a group-and-tone row has no row.
    referenceWithPerformance("paaâaâa", convertVeldikko);
    assert.throws(() => encodeText(encoding, "paaâaâa"), /No row/);
});

test("a lexicon form with a tone on a group's second letter is a finding", (t) => {
    const values = records();
    values[0].data.words = OVERLAPPING_TONES.map((form) => ({ form, gloss: "test" }));
    values[0].data.names = { pattern: "ignored" };
    const { index, language } = fixture(t, values);
    fs.writeFileSync(language.note, OVERLAPPING_TONES.join("\n") + "\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(
        language,
        indexedContext(config, decoded),
        decoded[0],
        convertVeldikko,
    );
    assert.equal(result.findings.length, OVERLAPPING_TONES.length);
    for (const [n, form] of OVERLAPPING_TONES.entries())
        assert.ok(
            new RegExp(
                `: error: the form \`${form}\` cannot be encoded: No row of the \`[^\`]+\` encoding matches "[âǎîǐûǔ]"`,
            ).test(result.findings[n]),
            form,
        );
});

test("a held vowel's tone round-trips on its first letter, bare and with the lexicon", (t) => {
    const encoding = sinale();
    for (const source of ["onsâa", "ovûu"])
        assert.equal(decodeText(encoding, encodeText(encoding, source)), source);
    const values = records();
    values[0].data.words = [
        { form: "onsâa", gloss: "test" },
        { form: "ovûu", gloss: "test" },
    ];
    values[0].data.names = { pattern: "ignored" };
    const { index } = fixture(t, values);
    const decoded = readIndex(index, config);
    const ctx = indexedContext(config, decoded);
    ctx.lexicons = new Map([["sina", { language: "sina", data: decoded[0].data }]]);
    const selected = encodingFor(ctx, { enc: "sinaveldikkoenc", lang: "sina" });
    assert.ok(selected.lexicon);
    for (const source of ["onsâa", "ovûu"]) {
        const options = { font: selected.font, lexicon: selected.lexicon };
        const encoded = encodeWithLanguage(selected.encoding, source, options);
        assert.deepEqual(encoded.findings, [], source);
        const back = decodeWithLanguage(selected.encoding, encoded.text, options);
        assert.deepEqual(back, { text: source, findings: [] });
    }
});

test("an inverted pitch sign in the encoding is a finding", (t) => {
    const values = records();
    values[0].data.words = [{ form: "onsâa", gloss: "test" }];
    values[0].data.names = { pattern: "ignored" };
    const { rules } = values[1].data;
    const toned = rules["contextual-mappings"].filter((row) => row.match === "âa");
    assert.ok(toned.some((row) => row.after === "consonant" && !row.before));
    for (const row of toned) {
        assert.ok(row.emit.includes("FALL"));
        row.emit = row.emit.map((code) => (code === "FALL" ? "RISE" : code));
    }
    const { index, language } = fixture(t, values);
    fs.writeFileSync(language.note, "onsâa\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(
        language,
        indexedContext(config, decoded),
        decoded[0],
        convertVeldikko,
    );
    assert.equal(result.findings.length, 1);
    assert.match(
        result.findings[0],
        /:1:1: error: the form `onsâa` is written .*U\+1ED79, but the converter writes .*U\+1ED7A/,
    );
});

test("an acute on the second letter of a held vowel or a diphthong starts a syllable", () => {
    const converted = new Map([
        ["pa", sign(0x1ed50, 0x1ed70)],
        ["a", sign(0x1ed5d, 0x1ed70)],
        ["i", sign(0x1ed5d, 0x1ed74)],
    ]);
    const convert = (text) => {
        assert.ok(converted.has(text), text);
        return converted.get(text);
    };
    assert.equal(
        referenceWithPerformance("paá", convert),
        sign(0x1ed50, 0x1ed70, 0x1ed5d, 0x1ed70, 0x1ed7b),
    );
    assert.equal(
        referenceWithPerformance("paí", convert),
        sign(0x1ed50, 0x1ed70, 0x1ed5d, 0x1ed74, 0x1ed7b),
    );
});

test("derived and variant forms use the canonical lexicon with no names", (t) => {
    const values = records();
    values[0].data.words = [
        { form: "pa", class: "n", plural: "pama", variants: ["ma"], gloss: "test" },
    ];
    values[0].data.names = { pattern: "ignored" };
    const { index, language } = fixture(t, values);
    const decoded = readIndex(index, config);
    const ctx = indexedContext(config, decoded);
    const observed = [];
    const expected = new Map([
        ["pa", sign(0x1ed50, 0x1ed70)],
        ["ma", sign(0x1ed52, 0x1ed70)],
        ["pama", sign(0x1ed50, 0x1ed70, 0x1ed52, 0x1ed70)],
    ]);
    const result = checkLanguage(language, ctx, decoded[0], (source) => {
        observed.push(source);
        assert.ok(expected.has(source), source);
        return expected.get(source);
    });
    assert.deepEqual(result, { checked: 3, findings: [] });
    assert.deepEqual(new Set(observed), new Set(expected.keys()));
});

test("malformed encoding mappings are refused before a form can pass", (t) => {
    const values = records();
    values[1].data.mappings.pa = "UNKNOWN_GLYPH";
    const { index } = fixture(t, values);
    const decoded = readIndex(index, config);
    assert.throws(() => indexedContext(config, decoded), /Unknown glyph code UNKNOWN_GLYPH/);
});

test("encoding-note checks retain source reads and exact code-program diagnostics", (t) => {
    for (const { tongue } of NOTES) {
        const program = generateEncoding(tongue);
        assert(Object.keys(program.mappings).every((source) => source === source.toLowerCase()));
        const compiled = compileEncoding(
            { language: tongue === "sinale" ? "sina" : "aele", font: "veldikko", ...program },
            { codes: GLYPH_CODES, name: "lowercase-veldikko" },
        );
        const uppercase = encodeWithLanguage(compiled, "Pa");
        assert(uppercase.findings.length > 0);
        assert.equal(uppercase.findings[0].offset, 0);
        assert(
            program.rules["contextual-mappings"].every(
                (row) => row.match === row.match.toLowerCase(),
            ),
        );
        assert.deepEqual(program.rules["word-separators"], ["-"]);
        assert(!Object.hasOwn(program.mappings, "-"));
        assert.deepEqual(
            program.rules["contextual-mappings"]
                .filter((row) => row.match === "-")
                .map((row) => [row.at, row.emit]),
            [
                ["start", []],
                ["end", []],
            ],
        );
    }
    const texts = new Map(
        NOTES.map(({ tongue, file }) => [
            file,
            "---\n" + yaml.stringify({ data: generateEncoding(tongue) }) + "---\n",
        ]),
    );
    const reads = [];
    t.mock.method(fs, "readFileSync", (file) => {
        reads.push(file);
        return texts.get(file);
    });
    assert.deepEqual(checkNotes(), []);
    assert.deepEqual(
        reads,
        NOTES.map(({ file }) => file),
    );
    const file = NOTES[0].file;
    texts.set(file, texts.get(file).replace("PELANNE", "VELUNNA"));
    assert.match(
        checkNotes()[0],
        /:3:1: error: `data.vowels`, `data.mappings` or `data.rules` differs/,
    );
});

test("CLI checks both indexed languages and keeps the summary and exit status", (t) => {
    const values = records();
    const aele = structuredClone(values[0]);
    aele.shortcode = "aelendlng";
    aele.address.canonical = "thalorna-note-skill-aelendlng";
    aele.file.path = "aelendi.md";
    const map = structuredClone(values[1]);
    map.shortcode = "aeleveldikkoenc";
    map.file.path = "aelendi-encoding.md";
    map.data = { language: "aele", font: "veldikko", ...generateEncoding("aelendi") };
    const { index } = fixture(t, [...values, aele, map]);
    const result = spawnSync(process.execPath, ["utils/veldikko-guard.mjs", "--index", index], {
        encoding: "utf8",
        timeout: 120_000,
    });
    assert.equal(result.error, undefined, `the guard did not finish: ${result.error}`);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Veldikko guard: 4 forms and names checked, 0 findings\./);
    assert.match(result.stderr, /Veldikko timing: \d+ms, 4 index records/);
});

test("reads the emitter's untyped notes, stubs, documentation journals and assets", (t) => {
    const { dir } = fixture(t);
    const content = path.join(dir, "assets/content");
    const assets = path.dirname(content);
    fs.mkdirSync(content, { recursive: true });
    fs.mkdirSync(path.join(assets, "images"));
    fs.writeFileSync(path.join(content, "README.md"), "Authoring instructions.\n");
    fs.writeFileSync(
        path.join(content, "Untyped.md"),
        "---\nname: {full: Untyped}\n---\nUnaddressed prose.\n",
    );
    fs.writeFileSync(
        path.join(content, "Stub.md"),
        "---\ntype: lore\nshortcode: stub\nname: {full: Stub}\n---\n",
    );
    fs.writeFileSync(
        path.join(content, "Item.md"),
        "---\ntype: affliction\nshortcode: sample\nname: {full: Sample}\nsohl: {}\n---\nItem prose.\n",
    );
    fs.writeFileSync(
        path.join(assets, "images/sample.svg"),
        '<svg xmlns="http://www.w3.org/2000/svg"/>',
    );
    fs.writeFileSync(
        path.join(assets, "images/provenance.yaml"),
        "attribution: Fixture\nlicense: CC0-1.0\nai: false\n",
    );
    const emitterConfig = {
        ...config,
        foundryPackage: "thalorna",
        paths: { content, assets, contentIndex: path.join(dir, "out") },
        skipDirectories: [],
        docEntryTypes: new Set(["affliction"]),
    };
    const emitted = emitContentIndex({ config: emitterConfig });
    const published = fs
        .readFileSync(emitted.file, "utf8")
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line));
    assert.ok(
        published.some(
            (record) => record.file?.path === "README.md" && !Object.hasOwn(record, "type"),
        ),
    );
    assert.ok(
        published.some(
            (record) => record.file?.path === "Untyped.md" && !Object.hasOwn(record, "type"),
        ),
    );
    assert.ok(
        published.some((record) => record.file?.path === "Stub.md" && record.address === null),
    );
    assert.ok(published.some((record) => record.documents));
    assert.ok(published.some((record) => record.asset?.path === "images/sample.svg"));
    const decoded = readIndex(emitted.file, emitterConfig);
    assert.equal(decoded.length, published.length);
    for (const record of decoded.filter((record) => record.address?.canonical)) {
        assert.equal(typeof encodeAddresses(record.address.canonical), "string");
        assert.notEqual(typeof record.address.canonical, "string");
    }
    assert.doesNotThrow(() => runContext(emitterConfig, decoded));
});
