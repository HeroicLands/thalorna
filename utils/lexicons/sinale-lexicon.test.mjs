/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { KHAZARI, NOTE, analyse, cognates, computedFront, ruleFrom } from "./sinale-lexicon.mjs";

const note = fs.readFileSync(NOTE, "utf8");
const khazari = fs.existsSync(KHAZARI) ? fs.readFileSync(KHAZARI, "utf8") : null;
const errorsOf = (text, other = khazari) =>
    analyse(text, other).findings.filter((line) => line.includes(": error: "));

/** The note with one literal replaced, failing loudly when the literal is absent. */
function edited(from, to, text = note) {
    assert(text.includes(from), `the note no longer holds "${from}"`);
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

test("every rule table the guard reads is present", () => {
    assert.deepEqual(ruleFrom(note).problems, []);
});

test("a front form the vowel table does not give is an error", () => {
    const { rule } = ruleFrom(note);
    assert.equal(computedFront("-tos", rule), "-tës");
    assert.equal(computedFront("li-", rule), "li-");
    assert.equal(computedFront("ha-", rule), "hë-");
    const broken = edited("| _-tës_ |", "| _-tos_ |");
    assert(errorsOf(broken).some((line) => line.includes('"-tos" gives "-tës"')));
});

test("a given name ending on the stem's own last consonant is an error", () => {
    const name = firstListed("### Male Given Names");
    const { rule } = ruleFrom(note);
    const vStem = [...rule.lexicon.values()].find(
        (row) => row.class.startsWith("n") && /v[aeiouyë]+$/.test(row.form),
    );
    const ending = /[aou]/.test(vStem.form) ? "vo" : "vë";
    const forced = edited(
        `${name},`,
        `${vStem.written[0].toUpperCase()}${vStem.written.slice(1)}${ending},`,
    );
    assert(errorsOf(forced).some((line) => line.includes("repeats the last consonant")));
});

test("a lineage name on an unworn stem is an error", () => {
    const { rule } = ruleFrom(note);
    const stem = [...rule.lexicon.values()].find(
        (row) => /^[ptk]/.test(row.form) && row.class === "n",
    );
    const hearth = /[aou]/.test(stem.form) ? "nto" : "ntë";
    const lineage = `${stem.written[0].toUpperCase()}${stem.written.slice(1)}${hearth}—"${stem.gloss}"`;
    const heading = "### Lineage Names (Inherited Matrilineally)\n\n";
    const broken = edited(heading, `${heading}${lineage} `);
    assert(errorsOf(broken).some((line) => line.includes("unworn stem")));
});

test("a wrong-harmony prefix, a letter outside the inventory and an unlisted cluster are errors", () => {
    const broken = edited(
        "## Sample Phrases\n",
        "## Sample Phrases\n\n- _hë-tuve_ and _tuvedo_ and _tuvenstra_\n",
    );
    const lines = errorsOf(broken);
    assert(lines.some((line) => line.includes('the prefix "hë-"')));
    assert(lines.some((line) => line.includes('holds "d"')));
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

test("a stem standing twice is an error", () => {
    const { rule } = ruleFrom(note);
    const row = rule.lexiconRows[0];
    const line = note.split("\n").find((text) => text.startsWith(`| \`${row.written}\``));
    const broken = edited(line, `${line}\n${line}`);
    assert(errorsOf(broken).some((text) => text.includes("stands twice")));
});

test("the cognate table must agree with the Khazári copy and with the case table", () => {
    const ours = cognates(note);
    assert(ours, "the note states a shared-ancestor table");
    const table = note
        .split("\n")
        .filter((line) => line.startsWith("|"))
        .filter((line, i, all) => {
            const start = all.findIndex((text) => /Proto-Elder/.test(text));
            return i >= start && i < start + 5;
        })
        .join("\n");
    const agreeing = `# Khazári\n\n${table}\n`;
    assert.deepEqual(errorsOf(note, agreeing), []);
    const disagreeing = agreeing.replace("`-um`", "`-om`");
    assert(errorsOf(note, disagreeing).some((line) => line.includes("differs from the copy")));
    const absent = analyse(note, "# Khazári\n").findings;
    assert(absent.some((line) => line.includes(": warning: ")));
    assert(!absent.some((line) => line.includes(": error: ")));
    const caseDrift = edited("| `-ho`/`-hë`   |", "| `-hu`/`-hy`   |");
    assert(errorsOf(caseDrift, agreeing).some((line) => line.includes("the case table gives")));
});
