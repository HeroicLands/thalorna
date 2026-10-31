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
    formsOf,
    listDirs,
    loadEarth,
    main,
    normalize,
    sameMeaning,
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
    assert.deepEqual(formsOf(fs.readFileSync(file, "utf8")), [
        { form: "aqua", gloss: "water", line: 5, column: 13 },
    ]);
});

/** A language note carrying words, name lists and a register. */
function fullNote(name, { words = "", names = "", register = "" }) {
    const block = (key, text) => (text ? `  ${key}:\n${text}\n` : "");
    return write(
        `notes/${name}`,
        `---\nshortcode: x\ndata:\n${block("words", words)}${block("names", names)}${block("register", register)}---\nBody\n`,
    );
}

test("name lists and native register names are read, with their positions", () => {
    const file = fullNote("Vylari.md", {
        names: [
            '    pattern: "{given} {clan}"',
            "    given:",
            "      female:",
            "        - aqua",
            "      male:",
            "        - via",
            "    clan:",
            "      - kalos",
            "    en:",
            "      - water",
        ].join("\n"),
        register: [
            "    - {name: aquae, tongue: vylari}",
            "    - {name: Water Road, tongue: translation}",
            "    - {name: viae, tongue: gloss}",
            "    - {name: kept, tongue: kept}",
            "    - {name: exo, tongue: exonym:vylari}",
            "    - {name: oth, tongue: other}",
        ].join("\n"),
    });
    const forms = formsOf(fs.readFileSync(file, "utf8"));
    assert.deepEqual(
        forms.map((f) => [f.form, f.line, f.column]),
        [
            ["aqua", 8, 11],
            ["via", 10, 11],
            ["kalos", 12, 9],
            ["aquae", 16, 14],
        ],
    );
});

test("a name-list entry that is a whole Earth word is an error at its position", () => {
    const file = fullNote("Vylari.md", {
        names: ["    pattern: x", "    given:", "      female:", "        - Aqua"].join("\n"),
    });
    const { status, err } = run(["--wordlists", lists(), file]);
    assert.equal(status, 1);
    assert.deepEqual(err, ['notes/Vylari.md:8:11: error: "Aqua" is a word of the latin list']);
});

test("a native register name is an error and a translation is not", () => {
    const file = fullNote("Vylari.md", {
        register: [
            "    - {name: aqua, tongue: vylari}",
            "    - {name: via, tongue: translation}",
        ].join("\n"),
    });
    const { status, err } = run(["--wordlists", lists(), file]);
    assert.equal(status, 1);
    assert.deepEqual(err, ['notes/Vylari.md:5:14: error: "aqua" is a word of the latin list']);
});

test("apostrophe-like letters are dropped", () => {
    for (const mark of ["\u02BC", "\u02BB", "\u02BF", "'", "\u2019"])
        assert.equal(normalize(`pu${mark}uts`), "puuts", mark);
});

test("hooked letters fold to their plain base letters", () => {
    assert.equal(normalize("ɓaɗaƙiƴa"), "badakiya");
    assert.equal(normalize("ƁƊƘƳ"), "bdky");
    assert.equal(normalize("ɣɛr"), "ger");
});

test("a hooked spelling meets its plain spelling in a list", () => {
    const root = path.join(dir, "hooked");
    write("hooked/hausa.txt", "ɓaɗaƙa\n");
    write("hooked/tamazight.txt", "ɣɛrnu\n");
    const earth = loadEarth([root]);
    assert.equal(earthHits({ form: "badaka", gloss: "" }, earth, ["hausa"]).length, 1);
    assert.equal(earthHits({ form: "gernu", gloss: "" }, earth, ["tamazight"]).length, 1);
});

test("a Yucatec j is read as h in the Yucatec list only", () => {
    const root = path.join(dir, "yucatec");
    write("yucatec/yucatec-maya.txt", "janal\npuʼuts\n");
    write("yucatec/latin.txt", "janal\n");
    const earth = loadEarth([root]);
    assert.equal(earthHits({ form: "ha'nal", gloss: "" }, earth, ["yucatec-maya"]).length, 1);
    assert.equal(earthHits({ form: "janal", gloss: "" }, earth, ["yucatec-maya"]).length, 1);
    assert.equal(earthHits({ form: "pu'uts", gloss: "" }, earth, ["yucatec-maya"]).length, 1);
    assert.equal(earthHits({ form: "hanal", gloss: "" }, earth, ["latin"]).length, 0);
    assert.equal(earthHits({ form: "janal", gloss: "" }, earth, ["latin"]).length, 1);
    assert.notEqual(normalize("janal"), normalize("hanal"));
});

test("doubled letters are kept", () => {
    assert.notEqual(normalize("rumma"), normalize("ruma"));
    assert.notEqual(normalize("raame"), normalize("rame"));
    const root = path.join(dir, "doubles");
    write("doubles/finnish.txt", "ruma\ntupa\n");
    const earth = loadEarth([root]);
    assert.deepEqual(earthHits({ form: "rumma", gloss: "" }, earth, ["finnish"]), []);
    assert.equal(earthHits({ form: "ruma", gloss: "" }, earth, ["finnish"]).length, 1);
});

test("forms of one and two letters are compared", () => {
    const root = path.join(dir, "short");
    write("short/spanish.txt", "en\nko\na\n");
    const earth = loadEarth([root]);
    for (const form of ["en", "Ko", "a"])
        assert.equal(earthHits({ form, gloss: "" }, earth, ["spanish"]).length, 1, form);
    assert.deepEqual(earthHits({ form: "e", gloss: "" }, earth, ["spanish"]), []);
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

test("source boundaries and explicit bound classes do not become whole words", () => {
    const root = path.join(dir, "bound-classes");
    const classes = [
        "root",
        "affix",
        "suffix",
        "prefix",
        "infix",
        "interfix",
        "circumfix",
        "combining_form",
    ];
    const forms = [
        "radika",
        "afixa",
        "sufixa",
        "prefika",
        "infika",
        "interika",
        "circuma",
        "kombina",
    ];
    write("bound-classes/latin.txt", [...forms, "eza", "pre", "unlisted"].join("\n"));
    write(
        "bound-classes/latin.tsv",
        [
            ...classes.map((pos, i) => `${forms[i]}\t${pos}\tbound sense`),
            "-eza\tnoun\tmarked at the left boundary",
            "pre-\tnoun\tmarked at the right boundary",
        ].join("\n"),
    );
    const earth = loadEarth([root]);
    for (const form of [...forms, "eza", "pre"])
        assert.deepEqual(earthHits({ form, gloss: "" }, earth, ["latin"]), [], form);
    assert.equal(earthHits({ form: "unlisted", gloss: "" }, earth, ["latin"]).length, 1);
});

test("a free homonym survives while its bound glosses cannot create meaning matches", () => {
    const root = path.join(dir, "homonyms");
    write("homonyms/latin.txt", "aqua\n");
    write("homonyms/latin.tsv", "-áqua\tsuffix\tfire\naqua\troot\tstone\nAQUA\tnoun\twater\n");
    const earth = loadEarth([root]);
    assert.equal(earthHits({ form: "aqua", gloss: "fire" }, earth, ["latin"]).length, 1);
    assert.deepEqual(earth.glosses.get("latin").get(normalize("aqua")), ["water"]);
    assert.deepEqual(earthHits({ form: "aqua", gloss: "fire" }, earth, ["latin"], true), []);
    assert.equal(earthHits({ form: "aqua", gloss: "water" }, earth, ["latin"], true).length, 1);
});

test("bound-only entries in one directory cannot erase an independent word in another", () => {
    const bound = path.join(dir, "union-bound");
    const free = path.join(dir, "union-free");
    write("union-bound/latin.txt", "eza\n");
    write("union-bound/latin.tsv", "-eza\tsuffix\tfire\n");
    write("union-free/latin.txt", "eza\n");
    write("union-free/latin.tsv", "eza\tnoun\twater\n");
    for (const dirs of [
        [bound, free],
        [free, bound],
    ]) {
        const earth = loadEarth(dirs);
        assert.equal(earthHits({ form: "eza", gloss: "" }, earth, ["latin"]).length, 1);
        assert.deepEqual(earth.glosses.get("latin").get("eza"), ["water"]);
    }
});

test("text-only lists retain unclassified words and internal hyphens", () => {
    const root = path.join(dir, "text-only");
    const bound = path.join(dir, "text-only-bound");
    write("text-only/latin.txt", "-suffix\nprefix-\nordinary\npart-whole\neza\n");
    write("text-only-bound/latin.txt", "eza\n");
    write("text-only-bound/latin.tsv", "-eza\tsuffix\tbound sense\n");
    for (const dirs of [
        [bound, root],
        [root, bound],
    ]) {
        const earth = loadEarth(dirs);
        for (const form of ["suffix", "prefix"])
            assert.deepEqual(earthHits({ form, gloss: "" }, earth, ["latin"]), []);
        for (const form of ["ordinary", "part-whole", "eza"])
            assert.equal(earthHits({ form, gloss: "" }, earth, ["latin"]).length, 1, form);
    }
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

test("Khazari reports whole Khuzdul words regardless of gloss and ignores stems and other models", () => {
    const root = lists();
    write("lists/khuzdul.txt", "kibil\n");
    const file = note("Khazari.md", [
        ["kibíl", "an unrelated meaning"],
        ["kibilron", "a compound"],
        ["kibil-", "a stem"],
        ["-kibil", "an affix"],
        ["aqua", "water"],
    ]);
    const { status, err, out } = run(["--wordlists", root, file]);
    assert.equal(status, 1);
    assert.deepEqual(err, ['notes/Khazari.md:5:13: error: "kibíl" is a word of the khuzdul list']);
    assert.deepEqual(out, ["5 words compared: 1 error(s)"]);
});

test("a language with no model has no check", () => {
    const file = note("Unmodelled.md", [["aqua", "water"]]);
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
