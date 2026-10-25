/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import { createHash } from "node:crypto";
import test from "node:test";
import YAML from "yaml";

const raw = fs.readFileSync("assets/content/Skills/Languages/Aelwythi.md", "utf8");
const words = YAML.parse(raw.split("---")[1]).data.words;
const forConcept = (id) => words.filter((word) => [word.concept ?? []].flat().includes(id));
const forms = (id) => forConcept(id).map(({ form }) => form);
const hash = (text) => createHash("sha256").update(text).digest("hex");

test("ordinary Aelwythi questions and courtesies state the addressee's number", () => {
    for (const [concept, form] of [
        ["question-polar", "Knowest thou him."],
        ["question-why", "Wherefore weepest thou."],
        ["question-how", "How farest thou."],
        ["question-how-many", "How many ben there."],
        ["question-to-whom", "To whom speakest thou."],
        ["question-for-what-purpose", "To what end labourest thou."],
        ["question-clarification", "What meanest thou."],
        ["expression-please", "I pray thee"],
        ["expression-thank-you", "I thank thee"],
        ["expression-how-do-you-say", "How sayst thou this in Aelwythi."],
        ["expression-what-is-this-called", "What callest thou this."],
        ["expression-excuse-me", "By thy leave"],
    ])
        assert(forms(concept).includes(form), `${concept} needs the standard expression ${form}`);
    for (const word of [...forConcept("you-reference"), ...forConcept("your")])
        assert(!/respectful|honorific|with respect/i.test([word.gloss].flat().join(" ")));
    assert(
        words.some(({ form, gloss }) => form === "ye" && /plural/.test([gloss].flat().join(" "))),
    );
    assert(
        words.some(
            ({ form, gloss }) => form === "naught" && /nothing/.test([gloss].flat().join(" ")),
        ),
    );
});

test("declared finite forms support the prescribed present paradigms without modal plural endings", () => {
    const all = new Set(words.flatMap((word) => [word.form, ...(word.variants ?? [])]));
    // Derive every displayed paradigm's usable forms from the author-facing table.
    const table = raw
        .split(/\| Verb\s*\| I\s*\| Thou\s*\| He \/ she \/ it\s*\| We \/ ye \/ they\s*\|/)[1]
        .split("\n\n")[0];
    const rows = table.split("\n").filter((line) => /^\| [a-z]/.test(line));
    assert.equal(rows.length, 10, "the ordinary and named exceptional paradigms remain visible");
    for (const row of rows) {
        const [headword, ...displayed] = row
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim());
        const word = words.find(({ form }) => form === headword);
        assert(word, `${headword} needs an entry`);
        const declared = new Set([word.form, ...(word.variants ?? [])]);
        for (const form of displayed)
            assert(declared.has(form), `${form} needs a declared usable form`);
    }
    for (const form of [
        "speakest",
        "speaketh",
        "speaken",
        "ben",
        "haven",
        "doen",
        "goen",
        "comen",
        "knowen",
        "mayst",
    ])
        assert(all.has(form), `${form} is part of the prescribed standard`);
    for (const form of ["are", "has", "does", "willen", "shallen", "canen", "mayen"])
        assert(!all.has(form), `${form} conflicts with the prescribed present standard`);
});

test("the illustrative sample words retain their reviewed form", () => {
    const samples = raw.split("### Sample passages\n")[1].split("\n## Naming Traditions")[0];
    const proseSamples = samples.split("\n").filter((line) => line.startsWith("> "));
    assert.equal(proseSamples.length, 2);
    assert(proseSamples.every((line) => !/["“”]/.test(line)));
    // Exact sample spellings preserve words while applying the declared pause characters.
    // The enumerated punctuation bytes keep the reviewed words hash unchanged.
    const reviewed = [
        [
            true,
            "Whither goest thou stranger and what carriest thou in thy pack. The fog lieth heavy on the water and the gate is shut ere dark. Tarry with us this night and we will ask thee naught more.",
            "Whither goest thou, stranger, and what carriest thou in thy pack? The fog lieth heavy on the water, and the gate is shut ere dark. Tarry with us this night, and we will ask thee naught more.",
        ],
        [
            true,
            "A word once given is a stone laid in the wall. pluck it out and the whole house falleth.",
            "A word once given is a stone laid in the wall: pluck it out, and the whole house falleth.",
        ],
        [false, "The wool is shorn the barley bound", "The wool is shorn, the barley bound,"],
        [false, "The last of summer's gold is ground", "The last of summer's gold is ground;"],
        [false, "Fill high the cup and drink it deep", "Fill high the cup, and drink it deep,"],
        [false, "And name the dead now fast asleep.", "And name the dead, now fast asleep."],
        [false, "Go softly thou that walkest late", "Go softly, thou that walkest late,"],
        [false, "And leave thine offering at the gate", "And leave thine offering at the gate;"],
        [false, "Who watcheth by the crossing wide", "Who watcheth by the crossing wide"],
        [false, "Will let the courteous pass beside.", "Will let the courteous pass beside."],
    ];
    const actual = samples
        .split("\n")
        .filter((line) => line.startsWith("> ") || /^2 \[.*\]\{lang=aelw\}$/.test(line))
        .map((line) => [
            line.startsWith("> "),
            line.startsWith("> ") ? line.slice(2) : line.slice(3, -12),
        ]);
    assert.deepEqual(
        actual,
        reviewed.map(([prose, current]) => [prose, current]),
    );
    let quoted = reviewed
        .map(([prose, _current, previous]) => (prose ? `> "${previous}"` : `> ${previous}`))
        .join("\n");
    for (const [current, previous] of [
        ["what carriest thou", "what dost thou carry"],
        ["naught more", "nothing more"],
        ["And name the dead, now fast asleep.", "And name the dead that lie asleep."],
        ["Who watcheth by the crossing wide", "Who watcheth where the roads divide"],
    ]) {
        assert(quoted.includes(current), `missing reviewed sample: ${current}`);
        quoted = quoted.replace(current, previous);
    }
    assert.equal(hash(quoted), "489e6aca669e0750a1259459e4edf229a30add3e65132630d13209e6533869c6");
});

test("auxiliary, modal and fixed impersonal examples keep their meaning and finite agreement", () => {
    const guide = raw
        .split("### Rules for writers")[1]
        .split("### Sample passages")[0]
        .replace(/\s+/g, " ");
    for (const phrase of [
        "_We haven come_",
        "_we haven awaited_",
        "_they will come_",
        "_they may enter_",
        "_Come hither_",
        "_Enter not_",
        "_we believen not_",
        "_they comen not_",
        "_Haven ye seen him?_",
        "_Methinks we haven tarried too long._",
        "We haven been waiting for thee since morn.",
        "We ben merchants of the north, and haven come hither to sell our wares.",
        "Ye cannot enter till morn.",
        "We cannot abide here longer.",
    ])
        assert(guide.includes(phrase.replaceAll("_", "")), `missing meaningful example: ${phrase}`);
    const utterances = [
        guide.split("**Worked phrases.**")[0],
        ...raw
            .split("**Worked phrases.**")[1]
            .split("A gate conversation")[0]
            .split("\n")
            .filter((line) => line.startsWith("| "))
            .map((line) => line.split("|").at(-2).trim()),
    ].join(" ");
    for (const phrase of [/haven comen/i, /(?:we|ye|they) (?:are|have|do|go|come|know)\b/i])
        assert(!phrase.test(utterances), `a finite-only agreement regression: ${phrase}`);
    const all = new Set(words.flatMap((word) => [word.form, ...(word.variants ?? [])]));
    for (const [headword, singular] of [
        ["will", "wilt"],
        ["shall", "shalt"],
        ["can", "canst"],
        ["may", "mayst"],
        ["might", "mightst"],
        ["would", "wouldst"],
        ["should", "shouldst"],
        ["ought", "oughtest"],
    ]) {
        const word = words.find(({ form }) => form === headword);
        assert(word?.variants.includes(singular), `${headword} needs its singular form`);
        assert(!all.has(`${headword}en`), `${headword} cannot take a plural ending`);
    }
    for (const form of ["Methinks", "Meseems", "Me likes", "Me lists"])
        assert(words.some((word) => word.form === form && /fixed impersonal/.test(word.gloss)));
    assert(forConcept("cannot").every((word) => /unable/.test(word.gloss)));
    assert(forConcept("may-permission").every((word) => /permission/.test(word.gloss)));
    assert(forConcept("ought").every((word) => /moral duty/.test(word.gloss)));
    for (const word of words.filter(({ class: kind }) => kind === "call"))
        assert(!/\bdost thou\b|\b(?:don't|doesn't|can't|won't)\b/i.test(word.form), word.form);
});

test("the reviewed verse retains eight syllables and each rhyming couplet", () => {
    const samples = raw.split("### Sample passages\n")[1].split("\n## Naming Traditions")[0];
    const lines = samples.split("\n").filter((line) => /^2 \[.*\]\{lang=aelw\}$/.test(line));
    assert.equal(lines.length, 8);
    // Lexical counts follow the unchanged pronunciation guide and the two declared contractions.
    const longer = new Map([
        ["barley", 2],
        ["summer's", 2],
        ["asleep", 2],
        ["softly", 2],
        ["walkest", 2],
        ["offering", 2],
        ["watcheth", 2],
        ["crossing", 2],
        ["courteous", 2],
        ["beside", 2],
    ]);
    for (const line of lines) {
        const syllables = [
            ...line
                .slice(3, -12)
                .toLowerCase()
                .matchAll(/[a-z]+(?:'[a-z]+)?/g),
        ].reduce((sum, [word]) => sum + (longer.get(word) ?? 1), 0);
        assert.equal(syllables, 8, line);
    }
    const endWords = lines.map((line) => line.slice(3, -12).match(/([a-z]+)[.;,]?$/i)[1]);
    for (const [pair, rhyme] of ["ound", "eep", "ate", "ide"].entries()) {
        assert(endWords[pair * 2].endsWith(rhyme));
        assert(endWords[pair * 2 + 1].endsWith(rhyme));
    }
});

test("the register leaves pronunciation, the executable map and existing lexical exceptions intact", () => {
    const data = (file) => YAML.parse(fs.readFileSync(file, "utf8").split("---")[1]).data;
    assert.equal(
        hash(JSON.stringify(data("assets/content/Lore/Pronouncing_Thalorna.md").sounds)),
        "066df2e16173ca2b809ec0744603d0f224dc2ea164785e57009f205d62b6e46c",
    );
    // The preservation hash includes only these enumerated punctuation rows.
    // The actual map separately admits period as the sole pause input.
    const map = data("assets/content/Lore/Scripts/Aelwythi_Semaron_Spelling.md").map;
    const pause = String.fromCodePoint(0xf0268);
    assert.deepEqual(
        map.rows
            .filter((row) => (Array.isArray(row) ? row[1] : row.to).includes(pause))
            .map((row) => (Array.isArray(row) ? row[0] : row.from)),
        ["."],
    );
    const priorMap = {
        ...map,
        rows: map.rows.flatMap((row) =>
            row[0] === "." ?
                [row, ...Array.from(",;:—–?!¡¿…()[]", (mark) => [mark, pause])]
            :   [row],
        ),
    };
    assert.equal(
        hash(JSON.stringify(priorMap)),
        "e230cd3f13f39ae325c43e64e21d13591e0ed4363672cfa9fe5a3fe69d033084",
    );
    assert.equal(
        hash(JSON.stringify(words.filter((word) => word.pronunciation || word.native))),
        "960147483e4ab3125e3769b6afed3864b6433dcac0a8b47975d3d60421924c6c",
    );
});
