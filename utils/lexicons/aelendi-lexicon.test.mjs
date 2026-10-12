/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { CONFIG, LEXICON, NOTE, analyseTongue, loanGender, readTree } from "./aelendi-lexicon.mjs";

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

test("the Áelendi page obeys its own rules", () => {
    assert(lexicon, `${LEXICON} exists`);
    assert.deepEqual(errors(), []);
});

test("an inherited word the changes do not give is an error", () => {
    const broken = rowEdited("| `nélamis`", (line) => line.replace("`nélamis`", "`nélemis`"));
    assert.match(errors(broken).join("\n"), /`nélemis` is not what the changes give \("nélamis"\)/);
});

test("a native word with p is an error, and a loan may carry it", () => {
    const broken = rowEdited("| `nélamis`", (line) => line.replace("`nélamis`", "`pélamis`"));
    assert.match(errors(broken).join("\n"), /`pélamis` holds "p", a letter only a loan carries/);
    assert(!errors().some((line) => line.includes("`tórpel`")));
});

test("a loan whose Sinalë form no row of the Sinalë lexicon carries is an error", () => {
    const broken = rowEdited("| `tórpel`", (line) =>
        line.replace("sinale:`torvel`", "sinale:`torvelk`"),
    );
    assert.match(
        errors(broken).join("\n"),
        /derives from `torvelk`, which no row of doc-sinalelexcn carries/,
    );
});

test("a loan takes its gender from its last sound", () => {
    assert.equal(loanGender("tórpel"), "m");
    assert.equal(loanGender("nûpa"), "f");
    assert.equal(loanGender("áudhi"), "n");
    const broken = rowEdited("| `tórpel`", (line) => line.replace(/\|\s*n m\s*\|/, "| n f |"));
    assert.match(
        errors(broken).join("\n"),
        /`tórpel` is a loan of the class "n f", and its last sound makes it "n m"/,
    );
});

test("a kept word is checked against its ancient form and against the Vylari lexicon", () => {
    const wrong = rowEdited("| `ûron`", (line) => line.replace("`ûron`", "`ûran`"));
    assert.match(errors(wrong).join("\n"), /`ûran` is not what the changes give \("ûron"\)/);
    const carried = rowEdited("| `ûron`", (line) =>
        line.replace("kept:`*hûron`", "kept:`*nelâmis`"),
    );
    assert.match(errors(carried).join("\n"), /which the Vylari lexicon carries/);
});

test("a built word its parts do not give is an error", () => {
    const broken = rowEdited("| `sálpurnand`", (line) =>
        line.replace("`sálpurn-` + `-and`", "`sálpurn-` + `-alon`"),
    );
    assert.match(errors(broken).join("\n"), /`sálpurnand` is not what its parts give/);
});

test("a name element naming a word it does not begin is an error", () => {
    const broken = rowEdited("| `nel`", (line) => line.replace("`nélamis`", "`rêdha`"));
    assert.match(errors(broken).join("\n"), /the name element `nel` does not begin `rêdha`/);
});

test("a name in scope missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **The At'aan Wyrd**"))
        .join("\n");
    assert.match(
        errors(broken).join("\n"),
        /"The At'aan Wyrd" is a Áelendi name the register does not register/,
    );
});
