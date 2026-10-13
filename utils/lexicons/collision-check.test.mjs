/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { main } from "./collision-check.mjs";

// Every word below is invented for the test.
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "collision-check-"));
const lists = path.join(dir, "lists");
fs.mkdirSync(lists);
fs.writeFileSync(path.join(lists, "fixa.txt"), "zorvakin\nbelmo\ndlk\ntmr\nabc\n");
fs.writeFileSync(path.join(lists, "khuzdul.txt"), "klv\n");
fs.writeFileSync(path.join(lists, "fixb.txt"), "plumeta\n");
const note = path.join(dir, "lexicon.md");
fs.writeFileSync(
    note,
    [
        "| form | class | gloss |",
        "| ---- | ----- | ----- |",
        "| `Zorvakín` | n | exact after normalization |",
        "| `zorvakan` | n | one edit, eight letters |",
        "| `plumeto` | n | one edit, seven letters |",
        "| `belma` | n | one edit, five letters |",
        "| `belm` | n | one edit, four letters |",
        "| `quiet` | n | no match |",
        "| `d-l-k` | stone |",
        "| `d-l-t` | no root |",
        "| `th-m-r` | digraph radical |",
        "| `kh-l-v` | digraph radical, default list |",
        "| `a` | single letter |",
        "| `th` | digraph |",
        "| `ab` | two letters |",
        "| `abc` | three letters |",
        "| `42` | number |",
        "",
    ].join("\n"),
);

function run(args, env = {}, declared = {}) {
    const out = [];
    const err = [];
    const status = main(args, env, { out: (s) => out.push(s), err: (s) => err.push(s) }, declared);
    return { status, out, err };
}

test("an exact hit is reported at its row and column, naming the list", () => {
    const { status, err } = run(["--wordlists", lists, note]);
    assert.equal(status, 0);
    const rel = path.relative(process.cwd(), note);
    assert(
        err.includes(
            `${rel}:3:4: warning: exact collision with the fixa list, which is no source language`,
        ),
    );
    assert(!err.join("\n").includes("zorvakin"));
});

test("a one-edit near match is a review note at five letters and not at four", () => {
    const { err } = run(["--wordlists", lists, note]);
    const text = err.join("\n");
    assert(/:4:4: note: one edit from an entry in the fixa list/.test(text));
    assert(/:5:4: note: one edit from an entry in the fixb list/.test(text));
    assert(/:6:4: note: one edit from an entry in the fixa list/.test(text));
    assert(!/:7:4:/.test(text));
    assert(!/:8:4:/.test(text));
    assert(!/belmo|plumeta/.test(text));
});

test("near matches alone leave the exit status at 0", () => {
    const near = path.join(dir, "near.md");
    fs.writeFileSync(
        near,
        "| form | class |\n| --- | --- |\n| `zorvakan` | n |\n| `belma` | n |\n| `quiet` | n |\n",
    );
    const { status, err, out } = run(["--wordlists", lists, near]);
    assert.equal(status, 0);
    assert.equal(err.length, 2);
    assert(err.every((line) => /: note: /.test(line)));
    assert(/0 findings, 0 advisories, 2 near matches for review/.test(out.join("\n")));
});

test("a table of class, tongue or source labels is not compared", () => {
    const labels = path.join(dir, "labels.md");
    fs.writeFileSync(
        labels,
        "| Class | Meaning |\n| --- | --- |\n| `belmo` | a label |\n\n| Tongue | Meaning |\n| --- | --- |\n| `zorvakin` | a label |\n\n| Source | From |\n| --- | --- |\n| `belmo:` | a label |\n\n| Form | Gloss |\n| --- | --- |\n| `belmo` | a word |\n",
    );
    const { status, err } = run(["--wordlists", lists, labels]);
    assert.equal(status, 0);
    assert.deepEqual(
        err.map((line) => line.replace(/^.*?:(\d+):.*$/, "$1")),
        ["15"],
    );
});

test("a table of name pieces is not compared", () => {
    const pieces = path.join(dir, "pieces.md");
    fs.writeFileSync(
        pieces,
        "| element | what it names |\n| --- | --- |\n| `belmo-` | a piece |\n\n| ground-closing | what it names |\n| --- | --- |\n| `-zorvakin` | a piece |\n\n| closing | what it makes |\n| --- | --- |\n| `-belmo` | a piece |\n\n| word | what it is |\n| --- | --- |\n| `belmo` | a word |\n",
    );
    const { status, err } = run(["--wordlists", lists, pieces]);
    assert.equal(status, 0);
    assert.deepEqual(
        err.map((line) => line.replace(/^.*?:(\d+):.*$/, "$1")),
        ["15"],
    );
});

test("a suffix or an ending, written with its opening hyphen, is not compared", () => {
    const bound = path.join(dir, "bound.md");
    fs.writeFileSync(
        bound,
        "| Suffix | Makes |\n| --- | --- |\n| `-belmo` | a suffix |\n| `belmo` | a word |\n",
    );
    const { err } = run(["--wordlists", lists, bound]);
    assert.deepEqual(
        err.map((line) => line.replace(/^.*?:(\d+):.*$/, "$1")),
        ["4"],
    );
});

test("skeleton mode matches a skeleton against a root", () => {
    const { err } = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]);
    const text = err.join("\n");
    assert(/:9:4: warning: skeleton collision with the fixa list/.test(text));
    assert(!/:10:4:/.test(text));
});

test("a skeleton with digraph radicals is compared as a skeleton", () => {
    const text = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]).err.join("\n");
    assert(/:11:4: warning: skeleton collision with the fixa list/.test(text));
});

test("cells that are not words of three letters are skipped", () => {
    const { err, out } = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]);
    const text = err.join("\n");
    for (const line of [13, 14, 15, 17]) assert(!new RegExp(`:${line}:4:`).test(text));
    assert(/:16:4: warning: exact collision with the fixa list/.test(text));
    assert(/\b11 forms compared/.test(out.join("\n")));
});

test("skeletons are compared with khuzdul and akkadian lists by default", () => {
    const text = run(["--wordlists", lists, note]).err.join("\n");
    assert(/:12:4: warning: skeleton collision with the khuzdul list/.test(text));
    assert(!/:9:4:.*skeleton/.test(text));
    assert(!/:11:4:.*skeleton/.test(text));
});

test("the environment variable names the directory", () => {
    const { out } = run([note], { COLLISION_WORDLISTS: lists });
    assert.match(out.join("\n"), /compared with 3 lists \(fixa, fixb, khuzdul\)/);
});

test("--wordlists may be given more than once, and lists of one name merge", () => {
    const { out } = run(["--wordlists", lists, "--wordlists", sourced, glossed]);
    assert.match(out.join("\n"), /compared with 6 lists/);
});

test("with no lists the script says so and exits 0", () => {
    const empty = path.join(dir, "empty");
    fs.mkdirSync(empty);
    const result = spawnSync(
        process.execPath,
        [path.resolve("utils/lexicons/collision-check.mjs"), "--wordlists", empty, note],
        { encoding: "utf8" },
    );
    assert.equal(result.status, 0);
    assert.equal(
        result.stdout.trim(),
        `collision-check: no word lists in ${empty}, nothing compared`,
    );
});

test("--allow exempts a named form after normalization and nothing else", () => {
    const rel = path.relative(process.cwd(), note);
    const allowed = run(["--wordlists", lists, "--allow", "zorvakin", note]).err.join("\n");
    assert(!allowed.includes(`${rel}:3:4: warning`));
    assert(allowed.includes(`${rel}:`));
    const other = run(["--wordlists", lists, "--allow", "other", note]).err.join("\n");
    assert(other.includes(`${rel}:3:4: warning`));
    const copying = run([
        "--wordlists",
        sourced,
        "--sources",
        "srca",
        "--allow",
        "velmor",
        glossed,
    ]);
    assert.equal(copying.status, 0);
});

// A source language with glosses beside its forms, and one without.
const sourced = path.join(dir, "sourced");
fs.mkdirSync(sourced);
fs.writeFileSync(path.join(sourced, "srca.txt"), "velmor\nkastun\ndrevan\n");
fs.writeFileSync(
    path.join(sourced, "srca.tsv"),
    "velmor\tnoun\tthe deep river, a flowing stream\nkastun\tnoun\ta kind of reed\n",
);
fs.writeFileSync(path.join(sourced, "srcb.txt"), "drevan\n");
fs.writeFileSync(path.join(sourced, "unrel.txt"), "kastun\n");
const glossed = path.join(dir, "glossed.md");
fs.writeFileSync(
    glossed,
    [
        "| Form | Class | Gloss |",
        "| ---- | ----- | ----- |",
        "| `velmor` | n | a river |",
        "| `kastun` | n | a river |",
        "| `drevan` | n | a river |",
        "",
    ].join("\n"),
);

function sourcedRun(...extra) {
    const result = run(["--wordlists", sourced, ...extra, glossed]);
    const at = (line) => result.err.filter((l) => l.includes(`:${line}:4: `));
    return { ...result, at };
}

test("a same-form, same-meaning match in a source language is an error naming what it copies", () => {
    const { status, at } = sourcedRun("--sources", "srca,srcb");
    assert.equal(status, 1);
    assert.deepEqual(
        at(3).map((l) => l.replace(/^.*?:3:4: /, "")),
        [
            'error: exact collision with the srca list, a source language, and copies its word for "the deep river, a flowing stream"',
        ],
    );
});

test("a same-form match in a source language with another meaning is advisory", () => {
    const lines = sourcedRun("--sources", "srca,srcb").at(4);
    assert(
        lines.includes(
            lines.find((l) =>
                / warning: exact collision with the srca list, a source language, with another meaning$/.test(
                    l,
                ),
            ),
        ),
    );
    assert(lines.every((l) => / warning: /.test(l)));
});

test("a match in a list that is no source language is advisory", () => {
    const lines = sourcedRun("--sources", "srca,srcb").at(4);
    assert(
        lines.some((l) =>
            / warning: exact collision with the unrel list, which is no source language$/.test(l),
        ),
    );
    const { status, err } = sourcedRun();
    assert.equal(status, 0);
    assert(err.every((l) => !/ error: /.test(l)));
});

test("a same-form match in a source language whose list carries no glosses is advisory", () => {
    const lines = sourcedRun("--sources", "srca,srcb").at(5);
    assert(
        lines.some((l) =>
            / warning: exact collision with the srcb list, a source language whose list carries no gloss for it; review it for copying$/.test(
                l,
            ),
        ),
    );
    assert(lines.every((l) => !/ error: /.test(l)));
});

test("a copy in a borrowing lexicon is advisory and names the source word", () => {
    const borrowed = sourcedRun("--sources", "srca", "--borrows").at(3);
    assert.deepEqual(
        borrowed.map((l) => l.replace(/^.*?:3:4: /, "")),
        [
            'warning: exact collision with the srca list, a source language the lexicon borrows from, and is its word for "the deep river, a flowing stream"',
        ],
    );
    const declared = (borrows) =>
        run(
            ["--wordlists", sourced, glossed],
            {},
            {
                sourcesByFile: new Map([[path.resolve(glossed), { sources: ["srca"], borrows }]]),
            },
        );
    assert.equal(declared(true).status, 0);
    assert.equal(declared(false).status, 1);
});

test("a copy on an attested row is advisory, and on a coined row an error", () => {
    const table = path.join(dir, "attested.md");
    fs.writeFileSync(
        table,
        [
            "| Form | Class | Gloss | Attested |",
            "| ---- | ----- | ----- | -------- |",
            "| `velmor` | n | a river | [[place-ford\\|Ford]] |",
            "| `velmor` | n | a river | — |",
            "",
        ].join("\n"),
    );
    const { status, err } = run(["--wordlists", sourced, "--sources", "srca", table]);
    assert.equal(status, 1);
    assert.match(
        err.find((l) => l.includes(":3:4: ")),
        / warning: .*copies its word for .*; it is attested, so the form is the owner's$/,
    );
    assert.match(
        err.find((l) => l.includes(":4:4: ")),
        / error: .*copies its word for /,
    );
});

test.after(() => fs.rmSync(dir, { recursive: true, force: true }));
