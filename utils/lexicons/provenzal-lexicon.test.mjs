/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { CONFIG, LEXICON, NOTE, analyseTongue, readTree, startForm } from "./provenzal-lexicon.mjs";

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

test("the Provenzal page obeys its own rules", () => {
    assert(lexicon, `${LEXICON} exists`);
    assert.deepEqual(errors(), []);
});

test("an inherited word starts from the ancient accusative", () => {
    assert.equal(startForm("prêdhâ", { cls: "n I f" }, { prefix: "*" }), "prêdhân");
    assert.equal(startForm("kalmêthar", { cls: "n III m" }, { prefix: "*" }), "kalmêtharen");
    assert.equal(startForm("ôrzâlon", { cls: "n II n" }, { prefix: "vylari:" }), "ôrzâlon");
    const broken = rowEdited("| `jõàche`", (line) => line.replace("`jõàche`", "`junàche`"));
    assert.match(errors(broken).join("\n"), /`junàche` is not what the changes give \("jõàche"\)/);
});

test("a learned word the loan table does not give is an error", () => {
    const broken = rowEdited("| `marendàlo`", (line) => line.replace("`marendàlo`", "`marendàl`"));
    assert.match(
        errors(broken).join("\n"),
        /`marendàl` stands twice|is not what the changes give \("marendàlo"\)/,
    );
});

test("an inherited word opening on th is an error, and a loan may", () => {
    const broken = rowEdited("| `tolmèza`", (line) => line.replace("`tolmèza`", "`tholmèza`"));
    assert.match(errors(broken).join("\n"), /`tholmèza` is inherited and opens on "th"/);
    assert(!errors().some((line) => line.includes("`tholmèsa` is inherited")));
});

test("a worn word whose ancient form no Vylari row carries is an error", () => {
    const broken = rowEdited("| `tè`", (line) => line.replace("worn:`*thêsôs`", "worn:`*thêsâs`"));
    assert.match(
        errors(broken).join("\n"),
        /`tè` is worn from `\*thêsâs`, which no row of the Vylari lexicon carries/,
    );
});

test("a name in scope missing from the register is an error", () => {
    const broken = lexicon
        .split("\n")
        .filter((line) => !line.startsWith("| **Jalnazdàl**"))
        .join("\n");
    assert.match(
        errors(broken).join("\n"),
        /"Jalnazdàl" is a Provenzal name the register does not register/,
    );
});

/**
 * The page with the `| **Dorèn**` row renamed to `name` and a bare `Kórisvar`
 * row, in the given tongue, added after it (replacing the page's own).
 */
function withHouse(name, tongue) {
    const lines = rowEdited("| **Dorèn**", (line) => line.replace("**Dorèn**", `**${name}**`))
        .split("\n")
        .filter((line) => !line.startsWith("| **Kórisvar**"));
    const at = lines.findIndex((line) => line.startsWith(`| **${name}**`));
    lines.splice(
        at + 1,
        0,
        lines[at].replace(`**${name}**`, "**Kórisvar**").replace("`provenzal`", `\`${tongue}\``),
    );
    return lines.join("\n");
}

const warnings = (lex, name) => {
    process.env.LEXICON_VERBOSE = "1";
    try {
        return listed(lex, name);
    } finally {
        delete process.env.LEXICON_VERBOSE;
    }
};

const listed = (lex, name) =>
    run(lex)
        .filter((line) => line.includes(": warning: ") && line.includes(`**${name}**`))
        .join("\n");

test("a person of a registered other house is checked on the given name alone", () => {
    const lex = withHouse("Kàrena Kórisvar", "other:elavendri");
    assert.equal(warnings(lex, "Kàrena Kórisvar"), "");
});

test("a person of a registered other house is still flagged for a given name that breaks the rules", () => {
    const lex = withHouse("Wárena Kórisvar", "other:elavendri");
    assert.match(warnings(lex, "Wárena Kórisvar"), /holds "w"/);
    assert.doesNotMatch(warnings(lex, "Wárena Kórisvar"), /"ó"/);
});

test("a surname registered as Provenzal is checked like the given name", () => {
    const lex = withHouse("Kàrena Kórisvar", "provenzal");
    assert.match(warnings(lex, "Kàrena Kórisvar"), /"ó"/);
});
