/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
    KHAZARI,
    LEXICON,
    NOTE,
    analyse,
    attestedNames,
    builtForm,
    cognates,
    computedFront,
    harmonyOf,
    opensOnRadical,
    ruleFrom,
    shape,
    worn,
} from "./sinale-lexicon.mjs";

const note = fs.readFileSync(NOTE, "utf8");
const khazari = fs.existsSync(KHAZARI) ? fs.readFileSync(KHAZARI, "utf8") : null;
const lexicon = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : null;
const tree = attestedNames();
const errorsOf = (text, other = khazari, lex = lexicon, names = tree) =>
    analyse(text, other, lex, names).findings.filter((line) => line.includes(": error: "));
const lexErrorsOf = (lex) => errorsOf(note, khazari, lex);

/** The text with one literal replaced, failing loudly when the literal is absent. */
function edited(from, to, text = note) {
    assert(text.includes(from), `the text no longer holds "${from}"`);
    return text.replace(from, to);
}

/** The first given name in a list section. */
function firstListed(heading) {
    const at = note.indexOf(`${heading}\n`);
    return note.slice(at).split("\n")[2].split(",")[0].trim();
}

test("the Sinalë page obeys its own rules", () => {
    assert.deepEqual(errorsOf(note), []);
});

test("every rule table and lexicon section the guard reads is present", () => {
    const { problems, lexiconProblems } = ruleFrom(note, lexicon);
    assert.deepEqual(problems, []);
    assert.deepEqual(lexiconProblems, []);
});

test("a front form the vowel table does not give is an error", () => {
    const { rule } = ruleFrom(note, lexicon);
    assert.equal(computedFront("-tos", rule), "-tës");
    assert.equal(computedFront("li-", rule), "li-");
    assert.equal(computedFront("ha-", rule), "hë-");
    const broken = edited("| _-tës_ |", "| _-tos_ |");
    assert(errorsOf(broken).some((line) => line.includes('"-tos" gives "-tës"')));
});

test("a given name ending on the stem's own last consonant is an error", () => {
    const name = firstListed("### Male Given Names");
    const { rule } = ruleFrom(note, lexicon);
    const vStem = [...rule.lexicon.values()].find(
        (row) => row.class.startsWith("n") && /v[aeiouyë]+$/.test(row.form),
    );
    const ending = harmonyOf(vStem.form, rule) === "back" ? "vo" : "vë";
    const forced = edited(
        `${name},`,
        `${vStem.written[0].toUpperCase()}${vStem.written.slice(1)}${ending},`,
    );
    assert(errorsOf(forced).some((line) => line.includes("repeats the last consonant")));
});

test("a lineage name on an unworn stem is an error", () => {
    const { rule } = ruleFrom(note, lexicon);
    const stem = [...rule.lexicon.values()].find(
        (row) => opensOnRadical(row.form, rule) && /[aeiouyë]$/.test(row.form) && row.class === "n",
    );
    const hearth = harmonyOf(stem.form, rule) === "back" ? "nto" : "ntë";
    const lineage = `${stem.written[0].toUpperCase()}${stem.written.slice(1)}${hearth}—"${stem.gloss}"`;
    const heading = "### Lineage Names (Inherited Matrilineally)\n\n";
    const broken = edited(heading, `${heading}${lineage} `);
    assert(errorsOf(broken).some((line) => line.includes("unworn stem")));
});

test("a wrong-harmony prefix, a letter outside the inventory and an unlisted cluster are errors", () => {
    const broken = edited(
        "## Sample Phrases\n",
        "## Sample Phrases\n\n- _hë-tuve_ and _tuvebo_ and _tuvenstra_\n",
    );
    const lines = errorsOf(broken);
    assert(lines.some((line) => line.includes('the prefix "hë-"')));
    assert(lines.some((line) => line.includes('holds "b"')));
    assert(lines.some((line) => /stacks [3-9] consonants/.test(line)));
});

test("a verb after the negative particle that does not wear is an error", () => {
    const broken = edited("## Sample Phrases\n", "## Sample Phrases\n\n- _ahi tuve_\n");
    assert(errorsOf(broken).some((line) => line.includes("follows the negative particle")));
});

test("an unlisted diphthong is an error", () => {
    const broken = edited("## Sample Phrases\n", "## Sample Phrases\n\n- _tuveo_\n");
    assert(
        errorsOf(broken).some(
            (line) => line.includes("not a listed diphthong") || line.includes("not built"),
        ),
    );
});

test("only what the older table lists is exempt", () => {
    const exempt = edited("## Sample Phrases\n", "## Sample Phrases\n\n- _Sinalë_\n");
    assert.deepEqual(errorsOf(exempt), []);
    const unlisted = edited("## Sample Phrases\n", "## Sample Phrases\n\n- _Sinalëa_\n");
    assert(errorsOf(unlisted).length > 0);
    const noLayer = edited("| Primordial |", "| Lost |");
    assert(errorsOf(noLayer).some((line) => line.includes('the layer "Lost"')));
});

test("a word standing twice is an error", () => {
    const { rule } = ruleFrom(note, lexicon);
    const row = rule.lexiconRows[0];
    const line = lexicon.split("\n").find((text) => text.startsWith(`| \`${row.written}\``));
    const broken = edited(line, `${line}\n${line}`, lexicon);
    assert(lexErrorsOf(broken).some((text) => text.includes("stands twice")));
});

test("a built form its parts do not give is an error", () => {
    const { rule } = ruleFrom(note, lexicon);
    const row = rule.lexiconRows.find((one) => one.built.includes("+"));
    assert(row, "the lexicon holds a built word");
    const built = builtForm(row.built, rule);
    assert.equal(built.form, row.form);
    const line = lexicon.split("\n").find((text) => text.startsWith(`| \`${row.written}\``));
    const broken = edited(line, line.replace(`\`${row.written}\``, `\`${row.written}a\``), lexicon);
    assert(lexErrorsOf(broken).some((text) => text.includes("is not what its parts give")));
    const unknown = edited(line, line.replace(row.built, "`nonesuch` + `-sa`"), lexicon);
    assert(lexErrorsOf(unknown).some((text) => text.includes("is not a row of the lexicon")));
});

test("a root word that breaks harmony, a field or a class the lexicon does not declare are errors", () => {
    const { rule } = ruleFrom(note, lexicon);
    const row = rule.lexiconRows.find((one) => one.built === "—" && /^[ptkvshmnlr]/.test(one.form));
    const line = lexicon.split("\n").find((text) => text.startsWith(`| \`${row.written}\``));
    const mixed = edited(line, line.replace(`\`${row.written}\``, "`kaly`"), lexicon);
    assert(lexErrorsOf(mixed).some((text) => text.includes("holds a back and a front vowel")));
    const heading = `\n### ${rule.fields[0]}\n`;
    const field = edited(heading, "\n### Nowhere in particular\n", lexicon);
    assert(lexErrorsOf(field).some((text) => text.includes("is not in the field list")));
    const cls = edited(line, line.replace(` ${row.class} `, " noun "), lexicon);
    assert(lexErrorsOf(cls).some((text) => text.includes('the class "noun"')));
});

test("an attested name the register does not hold is an error", () => {
    const one = tree.names[0];
    assert(one, "the tree attests at least one name");
    const { rule } = ruleFrom(note, lexicon);
    const row = rule.register.find(
        (entry) => entry.name === one.name && entry.address === one.address,
    );
    assert(row, `the register holds "${one.name}"`);
    const line = lexicon
        .split("\n")
        .find(
            (text) => text.startsWith(`| **${one.name}**`) && text.includes(`[[${one.address}\\|`),
        );
    const broken = edited(`${line}\n`, "", lexicon);
    assert(lexErrorsOf(broken).some((text) => text.includes("does not register it")));
});

test("a register row in an undeclared tongue, on a missing note or misbuilt is an error", () => {
    const { rule } = ruleFrom(note, lexicon);
    const stem = [...rule.lexicon.values()].find(
        (row) =>
            row.class === "n" &&
            harmonyOf(row.form, rule) === "back" &&
            /[aeiou]$/.test(row.form) &&
            !/d[aeiou]+$/.test(row.form),
    );
    const name = `${stem.written[0].toUpperCase()}${stem.written.slice(1)}dhe`;
    const address = rule.register[0].address;
    const line = `| **${name}** | [[${address}\\|x]] | \`sinale\` | \`${stem.written}\` + \`-dhe\` |`;
    const last = lexicon.trimEnd().split("\n").at(-1);
    const withRow = edited(last, `${last}\n${line}`, lexicon);
    assert.deepEqual(lexErrorsOf(withRow), []);
    const tongue = edited(line, line.replace("`sinale`", "`nonesuch`"), withRow);
    assert(lexErrorsOf(tongue).some((text) => text.includes('the tongue "nonesuch"')));
    const missing = edited(line, line.replace(`[[${address}`, "[[lore-nonesuch"), withRow);
    assert(lexErrorsOf(missing).some((text) => text.includes("which no note has")));
    const wrong = edited(line, line.replace(`**${name}**`, `**${name}a**`), withRow);
    assert(lexErrorsOf(wrong).some((text) => text.includes("is not what its parts give")));
});

test("the cognate table must agree with the Khazári copy and with the case table", () => {
    const ours = cognates(note);
    assert(ours, "the note states a shared-ancestor table");
    const table = note
        .split("\n")
        .filter((line) => line.startsWith("|"))
        .filter((line, i, all) => {
            const start = all.findIndex((text) => /\|\s*Proto/.test(text));
            return i >= start && i < start + 5;
        })
        .join("\n");
    const agreeing = `# Khazári\n\n${table}\n`;
    assert.deepEqual(errorsOf(note, agreeing), []);
    const disagreeing = agreeing.replace("`-um`", "`-om`");
    assert(errorsOf(note, disagreeing).some((line) => line.includes("differs from the copy")));
    const absent = analyse(note, "# Khazári\n", lexicon, tree).findings;
    assert(absent.some((line) => line.includes(": warning: ")));
    assert(!absent.some((line) => line.includes(": error: ")));
    const caseDrift = edited("| `-ho`/`-hë`   |", "| `-hu`/`-hy`   |");
    assert(errorsOf(caseDrift, agreeing).some((line) => line.includes("the case table gives")));
});

test("a word of neutral vowels alone takes the harmony the vowel section names", () => {
    const { rule } = ruleFrom(note, lexicon);
    assert.equal(rule.neutralAs, "back");
    assert.equal(harmonyOf("ressi", rule), "back");
    assert.equal(harmonyOf("epyri", rule), "front");
    const flipped = ruleFrom(
        edited("neutral vowels counts as back", "neutral vowels counts as front"),
        lexicon,
    ).rule;
    assert.equal(harmonyOf("ressi", flipped), "front");
    const silent = edited("a word built only of neutral vowels counts as back", "it varies");
    assert(ruleFrom(silent, lexicon).problems.some((text) => text.includes("neutral vowels")));
});

test("a sound that stands only after certain others stands nowhere else", () => {
    const { rule } = ruleFrom(note, lexicon);
    assert.deepEqual([...rule.bound.get("d")].sort(), ["l", "n", "r"]);
    assert.deepEqual(shape("tuvendo", rule), []);
    assert(shape("tuvedo", rule).some((text) => text.includes('holds "d" after "e"')));
    assert(shape("tuvemdo", rule).length > 0);
});

test("a word opening on a digraph does not wear as the stop it starts with", () => {
    const { rule } = ruleFrom(note, lexicon);
    assert.equal(worn("thalve", rule), "thalve");
    assert.equal(worn("tirvali", rule), "sirvali");
    assert.equal(opensOnRadical("thalve", rule), false);
    assert.equal(opensOnRadical("kalvi", rule), true);
});

test("a consonant digraph counts as one consonant in a cluster", () => {
    const { rule } = ruleFrom(note, lexicon);
    assert.deepEqual(shape("tuvelthe", rule), []);
    assert(shape("tuvelthre", rule).some((text) => /stacks 3 consonants/.test(text)));
});
