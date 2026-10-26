/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { gzipSync } from "node:zlib";

const SCRIPT = path.resolve(import.meta.dirname, "./generate-english-words.mjs");
const roots = [];

function fixture() {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "english-words-"));
    roots.push(root);
    const base = path.join(root, "base.json");
    const input = path.join(root, "historical.jsonl");
    const out = path.join(root, "words.json");
    fs.writeFileSync(base, JSON.stringify(["Make", "café", "thee"]));
    fs.writeFileSync(input, "");
    return { root, base, input, out };
}

function run(f, args = [], input) {
    return spawnSync(process.execPath, [SCRIPT, "--base", f.base, "--out", f.out, ...args], {
        cwd: f.root,
        input,
        encoding: "utf8",
        maxBuffer: 4 * 1024 * 1024,
    });
}

function records(file, entries) {
    fs.writeFileSync(file, entries.map((entry) => JSON.stringify(entry)).join("\n") + "\n");
}

afterEach(() => {
    for (const root of roots.splice(0)) fs.rmSync(root, { recursive: true, force: true });
});

describe("English word-list generator", () => {
    it("merges attested historical words and forms with every baseline dialect", () => {
        const f = fixture();
        const base = path.join(f.root, "wordlist-english");
        fs.mkdirSync(base);
        fs.writeFileSync(
            path.join(base, "package.json"),
            JSON.stringify({ name: "wordlist-english", version: "1.2.1" }),
        );
        fs.writeFileSync(path.join(base, "Copyright"), "Baseline licence notice");
        for (const [dialect, words] of Object.entries({
            english: ["Make", "café", "thee"],
            american: ["color"],
            british: ["colour"],
            canadian: ["tuque"],
            australian: ["arvo"],
        }))
            fs.writeFileSync(path.join(base, `${dialect}-words-70.json`), JSON.stringify(words));
        records(f.input, [
            {
                word: "HATH",
                lang_code: "en",
                pos: "verb",
                senses: [{ tags: ["archaic"] }],
                forms: [{ form: "haths" }],
            },
            {
                word: "speaketh",
                lang_code: "en",
                pos: "verb",
                tags: ["obsolete"],
                forms: [{ form: "speakest" }],
            },
            {
                word: "love",
                lang_code: "en",
                pos: "verb",
                forms: [{ form: "loveth", tags: ["archaic"] }, { form: "loves" }],
            },
            { word: "yclept", lang_code: "enm", pos: "verb", forms: [{ form: "y-clept" }] },
            { word: "cafe\u0301", lang_code: "en", pos: "noun", tags: ["dated"] },
            {
                word: "apostrophe",
                lang_code: "en",
                pos: "noun",
                tags: ["obsolete"],
                forms: [{ form: "o'er", tags: ["archaic"] }],
            },
        ]);
        const provenance = path.join(f.root, "sources.json");
        const result = run(f, ["--base", base, "--input", f.input, "--provenance", provenance]);
        assert.equal(result.status, 0);
        const words = JSON.parse(fs.readFileSync(f.out, "utf8"));
        assert.deepEqual(words, [
            "apostrophe",
            "arvo",
            "café",
            "color",
            "colour",
            "hath",
            "loveth",
            "make",
            "o'er",
            "speakest",
            "speaketh",
            "thee",
            "tuque",
            "y-clept",
            "yclept",
        ]);
        assert(!words.includes("loves"));
        assert(!words.includes("haths"));
        const sources = JSON.parse(fs.readFileSync(provenance, "utf8"));
        assert.equal(sources.format, 1);
        assert.equal(sources.baselinePackage.copyright, "Baseline licence notice");
        assert.equal(
            sources.words.hath.some((source) => source.kind === "wiktextract" && source.line === 1),
            true,
        );
        assert.equal(
            sources.words.make.some((source) => source.kind === "baseline"),
            true,
        );
        const refused = run(f, ["--base", base, "--out", path.join(base, "Copyright")]);
        assert.equal(refused.status, 1);
        assert(refused.stderr.includes("same file"));
        assert.equal(
            fs.readFileSync(path.join(base, "Copyright"), "utf8"),
            "Baseline licence notice",
        );
    });

    it("excludes other languages, names, affixes, abbreviations and non-words", () => {
        const f = fixture();
        records(f.input, [
            { word: "hath", lang_code: "en", pos: "verb", senses: [{ tags: ["archaic"] }] },
            ...["name", "prefix", "suffix", "root", "abbrev", "phrase", "symbol"].map((pos) => ({
                word: `excluded-${pos}`,
                lang_code: "enm",
                pos,
            })),
            { word: "foreign", lang_code: "fr", pos: "noun", tags: ["archaic"] },
            { word: "historical-topic", lang_code: "en", pos: "noun", tags: ["historical"] },
            { word: "modern", lang_code: "en", pos: "noun" },
            { word: "two words", lang_code: "enm", pos: "noun" },
            { word: "-bound", lang_code: "enm", pos: "noun" },
            { word: "word2", lang_code: "enm", pos: "noun" },
            {
                word: "abbreviation",
                lang_code: "en",
                pos: "noun",
                tags: ["archaic", "abbreviation"],
            },
            {
                word: "abbreviated",
                lang_code: "enm",
                pos: "noun",
                senses: [{ tags: ["abbreviation"] }],
            },
            { title: "redirect", redirect: "hath" },
        ]);
        const result = run(f, ["--input", f.input]);
        assert.equal(result.status, 0);
        assert.deepEqual(JSON.parse(fs.readFileSync(f.out, "utf8")), [
            "café",
            "hath",
            "make",
            "thee",
        ]);
    });

    it("retains attested leading and possessive apostrophes without admitting bound hyphens", () => {
        const f = fixture();
        records(f.input, [
            { word: "'tis", lang_code: "en", pos: "contraction", tags: ["archaic"] },
            { word: "lovers'", lang_code: "en", pos: "noun", tags: ["archaic"] },
            { word: "-eth", lang_code: "en", pos: "suffix", tags: ["archaic"] },
        ]);
        const result = run(f, ["--input", f.input]);
        assert.equal(result.status, 0);
        assert.deepEqual(JSON.parse(fs.readFileSync(f.out, "utf8")), [
            "'tis",
            "café",
            "lovers'",
            "make",
            "thee",
        ]);
    });

    it("streams gzip and stdin beyond a pipe buffer and produces deterministic JSON", () => {
        const f = fixture();
        const input =
            Array.from({ length: 2000 }, () =>
                JSON.stringify({ word: "hath", lang_code: "en", pos: "verb", tags: ["archaic"] }),
            ).join("\n") + "\n";
        assert(Buffer.byteLength(input) > 65536);
        const gz = path.join(f.root, "historical.jsonl.gz");
        fs.writeFileSync(gz, gzipSync(input));
        const zipped = run(f, ["--input", gz]);
        assert.equal(zipped.status, 0);
        const expected = fs.readFileSync(f.out, "utf8");
        const piped = run(f, ["--input", "-"], input);
        assert.equal(piped.status, 0);
        assert.equal(fs.readFileSync(f.out, "utf8"), expected);
    });

    it("applies sourced additions and historical exclusions without deleting baseline words", () => {
        const f = fixture();
        records(f.input, [{ word: "hath", lang_code: "en", pos: "verb", tags: ["archaic"] }]);
        const review = path.join(f.root, "review.json");
        fs.writeFileSync(
            review,
            JSON.stringify({
                additions: [{ word: "loveth", source: "A cited historical dictionary" }],
                exclusions: ["hath"],
            }),
        );
        assert.equal(run(f, ["--input", f.input, "--review", review]).status, 0);
        assert.deepEqual(JSON.parse(fs.readFileSync(f.out, "utf8")), [
            "café",
            "loveth",
            "make",
            "thee",
        ]);
        const original = fs.readFileSync(f.out, "utf8");
        fs.writeFileSync(review, JSON.stringify({ additions: [], exclusions: ["MAKE"] }));
        const refused = run(f, ["--review", review]);
        assert.equal(refused.status, 1);
        assert(refused.stderr.includes("cannot exclude baseline word `make`"));
        assert.equal(fs.readFileSync(f.out, "utf8"), original);
    });

    for (const failure of ["malformed JSONL", "truncated gzip"])
        it(`preserves existing outputs on ${failure}`, () => {
            const f = fixture();
            const provenance = path.join(f.root, "sources.json");
            fs.writeFileSync(f.out, "original output");
            fs.writeFileSync(provenance, "original sources");
            let input = f.input;
            if (failure === "malformed JSONL") fs.writeFileSync(input, '{}\n{"word":');
            else {
                input += ".gz";
                fs.writeFileSync(
                    input,
                    gzipSync(
                        '{"word":"hath","lang_code":"en","pos":"verb","tags":["archaic"]}\n',
                    ).subarray(0, 20),
                );
            }
            const result = run(f, ["--input", input, "--provenance", provenance]);
            assert.equal(result.status, 1);
            assert(result.stderr.includes("error:"));
            if (failure === "malformed JSONL") assert(result.stderr.includes(`${input}:2:`));
            assert.equal(fs.readFileSync(f.out, "utf8"), "original output");
            assert.equal(fs.readFileSync(provenance, "utf8"), "original sources");
        });

    it("refuses invalid baseline and review shapes", () => {
        const f = fixture();
        fs.writeFileSync(f.base, JSON.stringify(["make", 3]));
        assert.equal(run(f).status, 1);
        assert.equal(fs.existsSync(f.out), false);
        fs.writeFileSync(f.base, '["make"]');
        const review = path.join(f.root, "review.json");
        for (const data of [
            { additions: ["hath"] },
            { additions: [{ word: "hath", source: "" }] },
            { extra: [] },
        ]) {
            fs.writeFileSync(review, JSON.stringify(data));
            assert.equal(run(f, ["--review", review]).status, 1);
        }
    });

    it("stages the source report before replacing the word list and uses the default local destination", () => {
        const f = fixture();
        const original = "existing words";
        fs.writeFileSync(f.out, original);
        const directory = path.join(f.root, "directory");
        fs.mkdirSync(directory);
        const failed = run(f, ["--provenance", directory]);
        assert.equal(failed.status, 1);
        assert.equal(fs.readFileSync(f.out, "utf8"), original);
        const result = spawnSync(process.execPath, [SCRIPT, "--base", f.base], {
            cwd: f.root,
            encoding: "utf8",
        });
        assert.equal(result.status, 0);
        assert.deepEqual(
            JSON.parse(
                fs.readFileSync(path.join(f.root, "assets/data/english-words.json"), "utf8"),
            ),
            ["café", "make", "thee"],
        );
    });

    it("refuses outputs that alias an input, including through a symlink", () => {
        const f = fixture();
        const original = fs.readFileSync(f.base, "utf8");
        const alias = path.join(f.root, "alias.json");
        fs.symlinkSync(f.base, alias);
        for (const args of [
            ["--out", f.base],
            ["--out", alias],
            ["--provenance", f.out],
        ]) {
            const result = run(f, args);
            assert.equal(result.status, 1);
            assert(result.stderr.includes("same file"));
        }
        assert.equal(fs.readFileSync(f.base, "utf8"), original);
    });

    it("reports usage errors separately and derives help from the actual options", () => {
        const result = spawnSync(process.execPath, [SCRIPT, "--unknown"], { encoding: "utf8" });
        assert.equal(result.status, 2);
        const help = spawnSync(process.execPath, [SCRIPT, "--help"], { encoding: "utf8" });
        assert.equal(help.status, 0);
        assert(help.stdout.includes("--base"));
        assert(help.stdout.includes("--input"));
        assert(help.stdout.includes("--out"));
    });
});
