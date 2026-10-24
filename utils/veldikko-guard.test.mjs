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
import { emitContentIndex } from "@heroiclands/package-build/engine/content-index";
import { encodeAddresses } from "@heroiclands/package-build/engine/address-values";
import { checkNotes, generateRows, NOTES } from "./veldikko-spelling.mjs";
import { checkLanguage, readIndex, referenceWithPerformance } from "./veldikko-guard.mjs";

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
            file: { path: "Skills/Languages/Sinale.md" },
            address: { canonical: "thalorna-note-skill-sinalelng" },
            data: {
                words: [{ form: "pa", gloss: "test" }],
                names: { personal: ["Pa"], pattern: "ignored" },
                writtenIn: {
                    script: {
                        address: "thalorna-note-lore-veldikko",
                        anchor: null,
                        anchorKind: null,
                    },
                },
            },
        },
        {
            package: "thalorna",
            type: "lore",
            shortcode: "veldikko",
            file: { path: "Lore/Scripts/Veldikko_Spelling.md" },
            data: {
                map: { name: "veldikko", rows: yaml.parse(generateRows("sinale").join("\n")) },
            },
        },
    ];
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
            map: "veldikko",
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
    assert.equal(encodeAddresses(decoded[0].data.writtenIn.script), "thalorna-note-lore-veldikko");
    assert.notDeepEqual(decoded[0].data.writtenIn.script, {
        address: "thalorna-note-lore-veldikko",
    });
    const ctx = runContext(config, decoded);
    const result = checkLanguage(language, ctx, decoded[0], () => sign(0x1ed50, 0x1ed70));
    assert.deepEqual(result, { checked: 2, findings: [] });
    assert.deepEqual(reads, [index]);
});

test("unwritable forms and names retain exact source positions", (t) => {
    const values = records();
    values[0].data.words = [{ form: "p?", gloss: "test" }];
    values[0].data.names.personal = ["P?"];
    const { index, language } = fixture(t, values);
    fs.writeFileSync(language.note, "---\ndata:\n  words:\n    - form: p?\n  names: [P?]\n---\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(language, runContext(config, decoded), decoded[0]);
    assert.deepEqual(result.findings, [
        `${language.note}:4:13: error: the form \`p?\` has no veldikko sign for \`?\``,
        `${language.note}:5:11: error: the name \`P?\` has no veldikko sign for \`?\``,
    ]);
});

test("independent converter mismatch preserves scalar diagnostic", (t) => {
    const { index, language } = fixture(t);
    fs.writeFileSync(language.note, "pa\nPa\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(language, runContext(config, decoded), decoded[0], () =>
        sign(0x1ed51, 0x1ed70),
    );
    assert.equal(result.findings.length, 2);
    assert.match(
        result.findings[0],
        /:1:1: error:.*U\+1ED50 U\+1ED70, but the converter writes U\+1ED51 U\+1ED70/,
    );
});

test("missing map and language cannot pass with zero checked forms", (t) => {
    const { index, language } = fixture(t);
    const decoded = readIndex(index, config);
    assert.throws(
        () => checkLanguage(language, runContext(config, decoded.slice(0, 1)), decoded[0]),
        /veldikko/,
    );
    assert.throws(
        () => checkLanguage(language, runContext(config, decoded), undefined),
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

test("CLI requires an explicit index and fails clearly on missing fonts", (t) => {
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
    assert.match(fonts.stderr, /reference converter/i);
});

test("performance adapter keeps the independent converter's scalars and sign order", () => {
    assert.equal(
        referenceWithPerformance("pâá", () => sign(0x1ed50, 0x1ed70, 0x1ed78)),
        sign(0x1ed50, 0x1ed70, 0x1ed78, 0x1ed79, 0x1ed7b),
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
    const ctx = runContext(config, decoded);
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

test("malformed map rows produce unmapped form findings", (t) => {
    const values = records();
    values[1].data.map.rows = [{ from: "pa" }];
    const { index, language } = fixture(t, values);
    fs.writeFileSync(language.note, "pa\nPa\n");
    const decoded = readIndex(index, config);
    const result = checkLanguage(language, runContext(config, decoded), decoded[0]);
    assert.equal(result.findings.length, 2);
    assert.match(result.findings[0], /:1:1:.*has no veldikko sign for `p`, `a`/);
});

test("mapping-note byte checks retain their source reads and exact rows diagnostic", (t) => {
    const texts = new Map(
        NOTES.map(({ tongue, file }) => [
            file,
            `---\ndata:\n  map:\n    rows:\n${generateRows(tongue).join("\n")}\n    fonts: []\n---\n`,
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
    texts.set(file, texts.get(file).replace("# U+", "# altered U+"));
    assert.match(checkNotes()[0], /:4:1: error: `data.map.rows` differs/);
});

test("CLI checks both indexed languages and keeps the summary and exit status", (t) => {
    const values = records();
    const aele = structuredClone(values[0]);
    aele.shortcode = "aelendlng";
    aele.address.canonical = "thalorna-note-skill-aelendlng";
    aele.file.path = "Skills/Languages/Aelendi.md";
    aele.data.writtenIn.script.address = "thalorna-note-lore-veldikkoaelendi";
    const map = structuredClone(values[1]);
    map.shortcode = "veldikkoaelendi";
    map.file.path = "Lore/Scripts/Veldikko_Aelendi_Spelling.md";
    map.data.map.name = "veldikko-aelendi";
    map.data.map.rows = yaml.parse(generateRows("aelendi").join("\n"));
    const { index } = fixture(t, [...values, aele, map]);
    const result = spawnSync(process.execPath, ["utils/veldikko-guard.mjs", "--index", index], {
        encoding: "utf8",
        timeout: 10000,
    });
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
