/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
    LEXICON,
    NOTE,
    SINALE,
    analyse,
    check,
    checkLexicon,
    cognates,
    corpus,
    fieldCounts,
    givenName,
    houseName,
    lexiconFrom,
    nameLists,
    pour,
    rulesFrom,
} from "./khazari-lexicon.mjs";

const text = fs.readFileSync(NOTE, "utf8");
const sinale = fs.readFileSync(SINALE, "utf8");
const rules = rulesFrom(text);
const errors = (t, s = sinale) => check(t, s).filter((f) => f.severity === "error");

test("the Khazári note obeys its own rules", () => {
    assert.deepEqual(
        errors(text).map((f) => f.message),
        [],
    );
});

test("the cluster rule parts a second consonant outside the joiners", () => {
    const bare = rules.frames.find((f) => f.name === "bare").shape;
    const joiner = rules.joiners[0];
    const other = rules.consonants.find((c) => !rules.joiners.includes(c) && c.length === 1);
    assert.equal(pour(bare, `d-${joiner}-k`, rules), `da${joiner}k`);
    assert.equal(pour(bare, `d-${other}-k`, rules), `da${other}${rules.separator}k`);
});

test("every frame example recomputes and every listed name parses", () => {
    for (const frame of rules.frames.filter((f) => f.classes.includes("name"))) {
        for (const ex of frame.examples) assert(givenName(ex.form, rules, frame.name), ex.form);
    }
    for (const { name } of nameLists(text).house) assert(houseName(name, rules), name);
});

test("a word on an unlisted skeleton is refused", () => {
    const bare = rules.frames.find((f) => f.name === "bare").shape;
    const listed = new Set(rules.skeletons.map((s) => s.form));
    const free = ["p", "b", "t", "d", "k", "g"]
        .flatMap((a) => ["f", "z"].map((b) => `${a}-${b}-p`))
        .find((s) => !listed.has(s));
    assert.equal(analyse(pour(bare, free, rules), rules).ok, false);
});

test("a voice prefix in the wrong form is refused", () => {
    const passive = rules.prefixes.find((p) => p.kind === "voice" && p.beforeStop !== p.otherwise);
    const deed = rules.frames.find((f) => f.name === "deed").shape;
    const onStop = rules.skeletons.find((s) => rules.stops.includes(s.form.split("-")[0])).form;
    const core = pour(deed, onStop, rules);
    assert.equal(analyse(`${passive.beforeStop}${core}-ak`, rules).ok, true);
    assert.equal(analyse(`${passive.otherwise}${core}-ak`, rules).ok, false);
});

test("a given name that breaks its frame is an error at its line", () => {
    const name = text.match(/### Male Given Names\n\n(\p{Lu}\p{L}+)/u)[1];
    const broken = text.replace(`\n\n${name},`, `\n\n${name}x,`);
    assert(errors(broken).some((f) => f.message.includes(`${name}x`)));
});

test("a cognate copy that disagrees with the Sinalë note fails", () => {
    const ours = cognates(text);
    assert(ours, "the Khazári note states a shared-ancestor table");
    const proto = ours.get("accusative").proto;
    const elsewhere = `| Case | Proto-Elder | Sinalë | Khazári |\n| --- | --- | --- | --- |\n| accusative | \`${proto}x\` | \`-n\` | \`-am\` |\n`;
    assert(errors(text, elsewhere).some((f) => /accusative proto/.test(f.message)));
});

test("an exemption carries a gloss and a layer", () => {
    for (const o of rules.older) {
        assert(o.gloss, o.form);
        assert(o.layer, o.form);
    }
});

const lexText = fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : "";
const notes = corpus();
const lexErrors = (l = lexText, n = text) =>
    checkLexicon(l, n, notes).filter((f) => f.severity === "error");

test("the Khazári lexicon obeys the note and registers every name in scope", () => {
    assert(lexText, `${LEXICON} exists`);
    assert.deepEqual(
        lexErrors().map((f) => f.message),
        [],
    );
});

test("a lexicon word that is not its skeleton through its frame is refused", () => {
    const lex = lexiconFrom(lexText);
    const word = lex.words.find((w) => w.skeletons.length === 1 && w.frame === "bare");
    const broken = lexText.replace(new RegExp(`^\\| \`${word.form}\``, "m"), `| \`${word.form}u\``);
    assert(lexErrors(broken).some((f) => f.message.startsWith(`\`${word.form}u\` is not`)));
});

test("a lexicon word on an unlisted skeleton is refused", () => {
    const lex = lexiconFrom(lexText);
    const s = lex.skeletons.find((x) => lex.words.some((w) => w.skeletons.includes(x.form)));
    const broken = lexText.replace(new RegExp(`^\\| \`${s.form}\` .*\\n`, "m"), "");
    assert(
        lexErrors(broken).some((f) => f.message.includes("which the skeleton table does not list")),
    );
});

test("a name in scope that the register omits is an error at the name's own note", () => {
    const lex = lexiconFrom(lexText);
    const row = lex.register[0];
    const line = lexText.split("\n").find((l) => l.startsWith(`| ${row.name} `));
    const broken = lexText.replace(`${line}\n`, "");
    const found = lexErrors(broken).find((f) => f.message.startsWith(`${row.name} is in scope`));
    assert(found, row.name);
    assert.notEqual(found.file, LEXICON);
});

test("a skeleton of the language note keeps its sense in the lexicon", () => {
    const s = rules.skeletons[0];
    const row = text.split("\n").find((l) => l.startsWith(`| \`${s.form}\``));
    const broken = text.replace(row, row.replace(s.sense, `${s.sense} twice`));
    assert(
        lexErrors(lexText, broken).some((f) => f.message.startsWith(`skeleton \`${s.form}\` is`)),
    );
});

test("a skeleton that yields no word is refused", () => {
    const lex = lexiconFrom(lexText);
    const field = lex.skeletons[0].field;
    const row = `| \`p-f-p\` | a test sense | \`${field}\` |`;
    const first = lexText.split("\n").find((l) => l.startsWith(`| \`${lex.skeletons[0].form}\``));
    const broken = lexText.replace(first, `${first}\n${row}`);
    assert(lexErrors(broken).some((f) => f.message === "skeleton `p-f-p` yields no word"));
});

test("every field of the lexicon reaches its words", () => {
    for (const [id, c] of fieldCounts(lexText)) {
        assert(c.skeletons > 0, `${id} has skeletons`);
        assert(c.words >= c.skeletons, `${id} has a word per skeleton`);
    }
});

test("the vocabulary of rock, caves, the face, listening and writing is present", () => {
    const planned = { rock: 16, cave: 9, face: 6, listen: 17, letter: 7 };
    const counts = fieldCounts(lexText);
    for (const [id, least] of Object.entries(planned)) {
        const c = counts.get(id);
        assert(c, `the lexicon declares the \`${id}\` field`);
        assert(c.skeletons >= least, `\`${id}\` holds ${c.skeletons} skeletons, wants ${least}`);
        assert(c.words >= c.skeletons * 3, `\`${id}\` builds at least three words per skeleton`);
    }
});

test("a fissure is the rock's own line, not a shadow", () => {
    const lex = lexiconFrom(lexText);
    const fissure = lex.skeletons.find((s) => s.form === "h-l-gh");
    assert.equal(fissure?.field, "rock");
});
