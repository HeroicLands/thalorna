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
fs.writeFileSync(path.join(lists, "fixa.txt"), "zorvakin\nbelmo\ndlk\n");
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
    assert(err.includes(`${rel}:3:4: warning: exact collision with the fixa list`));
    assert(!err.join("\n").includes("zorvakin"));
});

test("a one-edit near miss is reported at five letters and not at four", () => {
    const { err } = run(["--wordlists", lists, note]);
    const text = err.join("\n");
    assert(/:4:4: warning: one edit collision with the fixa list/.test(text));
    assert(/:5:4: warning: one edit collision with the fixb list/.test(text));
    assert(/:6:4: warning: one edit collision with the fixa list/.test(text));
    assert(!/:7:4:/.test(text));
    assert(!/:8:4:/.test(text));
});

test("skeleton mode matches a skeleton against a root", () => {
    const { err } = run(["--wordlists", lists, note]);
    const text = err.join("\n");
    assert(/:9:4: warning: skeleton collision with the fixa list/.test(text));
    assert(!/:10:4:/.test(text));
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
