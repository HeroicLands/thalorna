/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
    earthHits,
    listDirs,
    loadEarth,
    main,
    normalize,
    sameMeaning,
    wordsOf,
} from "./earth-words.mjs";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "earth-words-"));
test.after(() => fs.rmSync(dir, { recursive: true, force: true }));

/** Write a file under the scratch directory and return its path. */
function write(name, text) {
    const file = path.join(dir, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, text);
    return file;
}

/** A scratch word-list directory holding latin and greek lists, the latin one with glosses. */
function lists() {
    const root = path.join(dir, "lists");
    write("lists/latin.txt", "aqua\nvia\n");
    write("lists/latin.tsv", "aqua\tnoun\twater\nvia\tnoun\ta road, way, path\n");
    write("lists/greek.txt", "kalos\n");
    return root;
}

/** A language note whose words are the given form and gloss pairs. */
function note(name, words) {
    const body = words
        .map(([form, gloss]) => `    - form: ${form}\n      class: n\n      gloss: "${gloss}"`)
        .join("\n");
    return write(`notes/${name}`, `---\nshortcode: x\ndata:\n  words:\n${body}\n---\nBody\n`);
}

/** Run the check, collecting what it prints. */
function run(argv, env = {}) {
    const out = [];
    const err = [];
    const status = main(argv, env, { out: (s) => out.push(s), err: (s) => err.push(s) }, dir);
    return { status, out, err };
}

test("the lists are looked for in an earth-wordlists clone beside the main checkout", () => {
    const root = path.join(path.sep, "dev", "thalorna");
    const expected = [
        path.join(path.sep, "dev", "earth-wordlists", "lists"),
        path.join(path.sep, "dev", "earth-wordlists", "base"),
    ];
    assert.deepEqual(listDirs([], {}, root), expected);
    assert.deepEqual(listDirs([], {}, path.join(root, ".claude", "worktrees", "w")), expected);
});

test("a form is compared after normalization", () => {
    assert.equal(normalize("Aqüa"), normalize("akua"));
    assert.equal(normalize("kh-ath"), "kath");
    assert.equal(normalize("goði"), normalize("godhi"));
    assert.equal(normalize("þing"), normalize("thing"));
    assert.equal(normalize("Æsir"), normalize("asir"));
    assert.notEqual(normalize("kathur"), normalize("katur"));
    assert.notEqual(normalize("meghar"), normalize("megar"));
    assert.notEqual(normalize("Charissa"), normalize("karisa"));
});

test("glosses sharing a content word mean the same, and unrelated ones do not", () => {
    assert.equal(sameMeaning("the road", "a path, road, way"), true);
    assert.equal(sameMeaning("a river", "a kind of reed"), false);
});

test("words are read with their line and column", () => {
    const file = note("Vylari.md", [["aqua", "water"]]);
    assert.deepEqual(wordsOf(fs.readFileSync(file, "utf8")), [
        { form: "aqua", gloss: "water", line: 5, column: 13 },
    ]);
});

test("a whole word of the language's own model is an error", () => {
    const earth = loadEarth([lists()]);
    const hits = earthHits({ form: "aquä", gloss: "a flame" }, earth, ["latin"]);
    assert.deepEqual(
        hits.map((h) => h.severity),
        ["error"],
    );
    assert.match(hits[0].message, /latin list/);
});

test("the same word in another language's list is not reported", () => {
    const earth = loadEarth([lists()]);
    assert.deepEqual(earthHits({ form: "kalos", gloss: "" }, earth, ["latin"]), []);
    assert.deepEqual(earthHits({ form: "aqua", gloss: "" }, earth, []), []);
});

test("a stem or affix written with a hyphen is not compared", () => {
    const earth = loadEarth([lists()]);
    assert.deepEqual(earthHits({ form: "aqua-", gloss: "" }, earth, ["latin"]), []);
    assert.deepEqual(earthHits({ form: "-aqua", gloss: "" }, earth, ["latin"]), []);
});

test("a stem inside a word is not reported", () => {
    const earth = loadEarth([lists()]);
    assert.deepEqual(earthHits({ form: "aquaron", gloss: "" }, earth, ["latin"]), []);
    assert.deepEqual(earthHits({ form: "saqua", gloss: "" }, earth, ["latin"]), []);
});

test("where meaning is required a different meaning is not reported and the same one is", () => {
    const earth = loadEarth([lists()]);
    assert.deepEqual(earthHits({ form: "aqua", gloss: "a flame" }, earth, ["latin"], true), []);
    const hits = earthHits({ form: "aqua", gloss: "water" }, earth, ["latin"], true);
    assert.equal(hits.length, 1);
    assert.match(hits[0].message, /copies its word for "water"/);
});

test("a whole-word collision is reported at its position and fails the run", () => {
    const file = note("Vylari.md", [["aquä", "a flame"]]);
    const { status, err } = run(["--wordlists", lists(), file]);
    assert.equal(status, 1);
    assert.equal(err.length, 1);
    assert.match(err[0], /notes\/Vylari\.md:5:13: error: "aquä" is a word of the latin list/);
});

test("Tantsou and Jurthat words collide only when the meaning agrees", () => {
    const other = note("Tantsou.md", [["aqua", "a flame"]]);
    assert.equal(run(["--wordlists", lists(), other]).status, 0);
    const same = note("Jurthat.md", [["aqua", "water"]]);
    write("lists/japanese.txt", "aqua\n");
    write("lists/japanese.tsv", "aqua\tnoun\twater\n");
    const { status, err } = run(["--wordlists", lists(), same]);
    assert.equal(status, 1);
    assert.match(err[0], /error: "aqua" copies its word for "water" in the japanese list/);
});

test("a language with no model has no check", () => {
    const file = note("Khazari.md", [["aqua", "water"]]);
    const { status, err } = run(["--wordlists", lists(), file]);
    assert.equal(status, 0);
    assert.deepEqual(err, []);
});

test("with no word lists the check says so once on stderr and exits 0", () => {
    const empty = path.join(dir, "empty");
    fs.mkdirSync(empty, { recursive: true });
    const file = note("Vylari.md", [["aquä", "water"]]);
    const { status, err, out } = run(["--wordlists", empty, file]);
    assert.equal(status, 0);
    assert.deepEqual(err, [`Earth-word checks skipped: no word lists at ${empty}`]);
    assert.deepEqual(out, []);
});

test("a directory that does not exist is skipped the same way", () => {
    const missing = path.join(dir, "missing");
    const { status, err } = run(["--wordlists", missing]);
    assert.equal(status, 0);
    assert.deepEqual(err, [`Earth-word checks skipped: no word lists at ${missing}`]);
});

test("the environment variable names the directories", () => {
    const file = note("Vylari.md", [["aquä", "water"]]);
    const { status } = run([file], { KHAZRYN_WORDLISTS: lists() });
    assert.equal(status, 1);
});
