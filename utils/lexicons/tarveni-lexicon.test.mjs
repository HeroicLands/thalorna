/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { CONFIG, LEXICON, NOTE, analyseTongue, readTree } from "./tarveni-lexicon.mjs";

const note = fs.existsSync(NOTE) ? fs.readFileSync(NOTE, "utf8") : "";
const lexicon = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : "";
const tree = readTree();

const run = (lex = lexicon, notes = tree) =>
    analyseTongue(CONFIG, { note, lex, tree: notes }).findings;
const errors = (lex, notes) => run(lex, notes).filter((line) => line.includes(": error: "));

/** The page with one table row changed by `change`, failing loudly when no row starts with `start`. */
function rowEdited(start, change) {
    const lines = lexicon.split("\n");
    const at = lines.findIndex((line) => line.startsWith(start));
    assert(at !== -1, `the page holds a row starting ${start}`);
    lines[at] = change(lines[at]);
    return lines.join("\n");
}

test("the Tarvéni page obeys its own rules", () => {
    assert(lexicon, `${LEXICON} exists`);
    assert.deepEqual(errors(), []);
});

test("an ejective stays voiceless where a plain stop is voiced", () => {
    const wrong = rowEdited("| `karálzo`", (line) => line.replace("`karálzo`", "`garálzo`"));
    assert.match(errors(wrong).join("\n"), /`garálzo` is not what the changes give \("karálzo"\)/);
    const voiced = rowEdited("| `sókhada`", (line) => line.replace("`sókhada`", "`sókhata`"));
    assert.match(errors(voiced).join("\n"), /`sókhata` is not what the changes give \("sókhada"\)/);
});

test("a word of the old mountain speech keeps its shape", () => {
    const withF = rowEdited("| `menútsa`", (line) => line.replace("`menútsa`", "`fenútsa`"));
    assert.match(errors(withF).join("\n"), /`fenútsa` is of the old mountain speech and holds "f"/);
    const withR = rowEdited("| `menútsa`", (line) => line.replace("`menútsa`", "`renútsa`"));
    assert.match(
        errors(withR).join("\n"),
        /`renútsa` is of the old mountain speech and opens on "r"/,
    );
    const cluster = rowEdited("| `menútsa`", (line) => line.replace("`menútsa`", "`menúrtsa`"));
    assert.deepEqual(
        errors(cluster).filter((l) => l.includes("old mountain speech")),
        [],
    );
    const three = rowEdited("| `menútsa`", (line) => line.replace("`menútsa`", "`menúrkla`"));
    assert.match(
        errors(three).join("\n"),
        /`menúrkla` is of the old mountain speech and sets "rkl" between two vowels/,
    );
});

test("an inherited word with ts is an error", () => {
    const broken = rowEdited("| `karálzo`", (line) => line.replace("`karálzo`", "`karáltso`"));
    assert.match(
        errors(broken).join("\n"),
        /`karáltso` holds "ts", which only the old mountain speech has/,
    );
});

test("a learned word the loan table does not give is an error", () => {
    const broken = rowEdited("| `kurzális`", (line) => line.replace("`kurzális`", "`kurdális`"));
    assert.match(
        errors(broken).join("\n"),
        /is not what the changes give \("kurzális"\)|stands twice/,
    );
});

test("a name in scope missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Tarvénia Region**"))
        .join("\n");
    assert.match(
        errors(broken).join("\n"),
        /"Tarvénia Region" is a Tarvéni name the register does not register/,
    );
});
