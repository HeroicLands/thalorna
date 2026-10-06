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

function run(args, env = {}) {
    const out = [];
    const err = [];
    const status = main(args, env, { out: (s) => out.push(s), err: (s) => err.push(s) });
    return { status, out, err };
}

test("an exact hit is reported at its row and column, naming the list", () => {
    const { status, err } = run(["--wordlists", lists, note]);
    assert.equal(status, 1);
    const rel = path.relative(process.cwd(), note);
    assert(err.includes(`${rel}:3:4: error: exact collision with the fixa list`));
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
    assert(/0 findings, 2 near matches for review/.test(out.join("\n")));
});

test("a table of class or tongue labels is not compared", () => {
    const labels = path.join(dir, "labels.md");
    fs.writeFileSync(
        labels,
        "| Class | Meaning |\n| --- | --- |\n| `belmo` | a label |\n\n| Tongue | Meaning |\n| --- | --- |\n| `zorvakin` | a label |\n\n| Form | Gloss |\n| --- | --- |\n| `belmo` | a word |\n",
    );
    const { status, err } = run(["--wordlists", lists, labels]);
    assert.equal(status, 1);
    assert.deepEqual(
        err.map((line) => line.replace(/^.*?:(\d+):.*$/, "$1")),
        ["11"],
    );
});

test("skeleton mode matches a skeleton against a root", () => {
    const { err } = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]);
    const text = err.join("\n");
    assert(/:9:4: error: skeleton collision with the fixa list/.test(text));
    assert(!/:10:4:/.test(text));
});

test("a skeleton with digraph radicals is compared as a skeleton", () => {
    const text = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]).err.join("\n");
    assert(/:11:4: error: skeleton collision with the fixa list/.test(text));
});

test("cells that are not words of three letters are skipped", () => {
    const { err, out } = run(["--wordlists", lists, "--skeleton-lists", "fixa", note]);
    const text = err.join("\n");
    for (const line of [13, 14, 15, 17]) assert(!new RegExp(`:${line}:4:`).test(text));
    assert(/:16:4: error: exact collision with the fixa list/.test(text));
    assert(/\b11 forms compared/.test(out.join("\n")));
});

test("skeletons are compared with khuzdul and akkadian lists by default", () => {
    const text = run(["--wordlists", lists, note]).err.join("\n");
    assert(/:12:4: error: skeleton collision with the khuzdul list/.test(text));
    assert(!/:9:4:.*skeleton/.test(text));
    assert(!/:11:4:.*skeleton/.test(text));
});

test("the environment variable names the directory", () => {
    const { status } = run([note], { COLLISION_WORDLISTS: lists });
    assert.equal(status, 1);
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

test.after(() => fs.rmSync(dir, { recursive: true, force: true }));
