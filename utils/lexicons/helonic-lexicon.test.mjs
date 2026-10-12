/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { analyse, readTree } from "./lexicon-pages.mjs";
import { listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { LEXICON, SPEC } from "./helonic-lexicon.mjs";

const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = readTree();
const earth = loadEarth(listDirs());
const haveLists = earth.lists.size > 0;

const run = (text = lexicon, lists = null) =>
    analyse({ lexFile: SPEC.lexicon, lexText: text, tree, earth: lists }).findings;
const errorsOf = (text, lists) => run(text, lists).filter((f) => f.severity === "error");

/** The page with one table row changed by `change`, failing loudly when no row starts with `start`. */
function rowEdited(start, change) {
    const lines = lexicon.split("\n");
    const at = lines.findIndex((line) => line.startsWith(start));
    assert(at !== -1, `the page holds a row starting ${start}`);
    lines[at] = change(lines[at]);
    return lines.join("\n");
}

/** The page with one table cell, counted from zero after the leading bar, replaced. */
function cellEdited(start, index, value) {
    return rowEdited(start, (line) => {
        const cells = line.split(/(?<!\\)\|/);
        cells[index + 1] = ` ${value} `;
        return cells.join("|");
    });
}

test("the Helonic page obeys its own rules", () => {
    assert.deepEqual(
        errorsOf(lexicon).map((f) => f.message),
        [],
    );
});

test("a daughter root the change table does not give is an error", () => {
    const broken = cellEdited("| `sôthira`", 1, "`sôthira`");
    assert(errorsOf(broken).some((f) => f.message.includes("sôtira")));
});

test("a name of the three lands missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Siderákit**"))
        .join("\n");
    assert(broken.length < lexicon.length);
    assert(
        errorsOf(broken).some(
            (f) => f.message.includes("Siderákit") && f.message.includes("not in the register"),
        ),
    );
});

test("a Built from cell its parts do not give is an error", () => {
    const broken = cellEdited("| **Siderákit**", 3, "`sider-` + `-íkot`");
    assert(errorsOf(broken).some((f) => f.message.includes("does not recompute")));
});

test("a word spelled with a letter the page does not write is an error", () => {
    const broken = rowEdited("| `ghymârir`", (line) => line.replace("`ghymârir`", "`ghymâqir`"));
    assert(errorsOf(broken).some((f) => f.message.includes("q")));
});

test("a register row in a tongue the page does not declare is an error", () => {
    const broken = cellEdited("| **Siderákit**", 2, "`helvetic`");
    assert(errorsOf(broken).some((f) => f.message.includes("helvetic")));
});

test("a coined word that is an Earth word is an error", { skip: !haveLists }, () => {
    const broken = rowEdited("| `neur`", (line) => line.replace("`neur`", "`thrên`"));
    assert(errorsOf(broken, earth).some((f) => f.message.includes("thrên")));
});
