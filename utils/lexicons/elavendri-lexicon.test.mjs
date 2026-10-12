/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { CONFIG, LEXICON, NOTE, analyseTongue, readTree } from "./elavendri-lexicon.mjs";

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

test("the Élavendri page obeys its own rules", () => {
    assert(lexicon, `${LEXICON} exists`);
    assert.deepEqual(errors(), []);
});

test("an inherited word is checked against its Áelendi row", () => {
    const wrong = rowEdited("| `shíerothathen`", (line) =>
        line.replace("`shíerothathen`", "`síerothathen`"),
    );
    assert.match(
        errors(wrong).join("\n"),
        /`síerothathen` is not what the changes give \("shíerothathen"\)/,
    );
    const missing = rowEdited("| `shíerothathen`", (line) =>
        line.replace("aelendi:`sîrothathen`", "aelendi:`sîrothathan`"),
    );
    assert.match(errors(missing).join("\n"), /which no row of doc-aelendlexcn carries/);
});

test("a Sinalë word is checked through two tables", () => {
    const wrong = rowEdited("| `kálvirnë`", (line) => line.replace("`kálvirnë`", "`kálpirnë`"));
    assert.match(
        errors(wrong).join("\n"),
        /`kálpirnë` is not what the changes give \("kálvirnë"\)/,
    );
});

test("a learned letter in an inherited word is an error", () => {
    const broken = rowEdited("| `shíerothathen`", (line) =>
        line.replace("`shíerothathen`", "`zíerothathen`"),
    );
    assert.match(
        errors(broken).join("\n"),
        /`zíerothathen` holds "z", a letter only a loan carries/,
    );
    assert(!errors().some((line) => line.includes("`záktela`")));
});

test("the reduced vowel stands only at the end of a word", () => {
    const broken = rowEdited("| `kálvirnë`", (line) => line.replace("`kálvirnë`", "`kálvërnë`"));
    assert.match(errors(broken).join("\n"), /`kálvërnë` writes "ë" before the end of the word/);
});

test("a name in scope missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Béravel**"))
        .join("\n");
    assert.match(
        errors(broken).join("\n"),
        /"Béravel" is a Élavendri name the register does not register/,
    );
});
