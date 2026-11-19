/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import test from "node:test";
import { respellText } from "./aelwythi-respell.mjs";
import { frontmatterOf, notePath } from "./note-index.mjs";

const note = frontmatterOf(notePath("skill-aelwthlng"));
const words = note.data.words;
const { writing, samples } = note.sohl.flags.thalorna;
// Historical native test phrases receive only the approved closing-y substitutions.
const guideSpelled = (text) => respellText(text).replace(/([aeo])y(?![aeiou])/g, "$1i");
const forConcept = (id) => words.filter((word) => [word.concept ?? []].flat().includes(id));
const forms = (id) => forConcept(id).map(({ form }) => form);
const hash = (text) => createHash("sha256").update(text).digest("hex");

test("ordinary Aelwythi questions and courtesies state the addressee's number", () => {
    for (const [concept, form] of [
        ["question-polar", "Knoest dhau him."],
        ["question-why", "Wherefore weepest dhau."],
        ["question-how", "How farest dhau."],
        ["question-how-many", "How meni ben there."],
        ["question-to-whom", "To whom speakest dhau."],
        ["question-for-what-purpose", "To what end labourest dhau."],
        ["question-clarification", "What miinest dhau."],
        ["expression-please", "I prai dhii"],
        ["expression-thank-you", "I thank dhii"],
        ["expression-how-do-you-say", "How seist dhau this in Eilwìthi."],
        ["expression-what-is-this-called", "What kallest dhau this."],
        ["expression-excuse-me", "Bi dhai leave"],
    ])
        assert(
            forms(concept).includes(guideSpelled(form)),
            `${concept} needs the standard expression ${form}`,
        );
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
    // Derive every declared paradigm's usable forms from the note's declared paradigms.
    const rows = writing.paradigms;
    assert.equal(rows.length, 10, "the ordinary and named exceptional paradigms remain declared");
    for (const row of rows) {
        const { verb: headword, I, thou, heSheIt, plural } = row;
        const displayed = [I, thou, heSheIt, plural];
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
        "duuen",
        "goen",
        "komen",
        "knoen",
        "meist",
    ])
        assert(all.has(form), `${form} is part of the prescribed standard`);
    for (const form of ["are", "has", "does", "willen", "shallen", "canen", "mayen"])
        assert(!all.has(form), `${form} conflicts with the prescribed present standard`);
});

/** The lines of the declared Aelwythi verse works in `samples`. */
const aelwythiVerseLines = ({ verse }) => verse.flatMap(({ lines }) => lines);

test("the illustrative sample words retain their reviewed form", () => {
    const proseSamples = samples.prose;
    assert.equal(proseSamples.length, 2);
    assert(proseSamples.every((line) => !/["“”]/.test(line)));
    // Exact sample spellings preserve words while applying the declared pause characters.
    // The enumerated punctuation bytes keep the reviewed words hash unchanged.
    const reviewed = [
        [
            true,
            "Whither goest dhau stranger and what karriest dhau in dhai pàk. The fog lieth heavi on the water and the gate is shut ere dark. Tarri with us this night and we will ask dhii naught more.",
            "Whither goest thou, stranger, and what carriest thou in thy pack? The fog lieth heavy on the water, and the gate is shut ere dark. Tarry with us this night, and we will ask thee naught more.",
        ],
        [
            true,
            "A word onse given is a stone leid in the waal. pluk it out and the whole house falleth.",
            "A word once given is a stone laid in the wall: pluck it out, and the whole house falleth.",
        ],
        [false, "The wool is shorn the barlei bound", "The wool is shorn, the barley bound,"],
        [false, "The last of summeres gold is ground", "The last of summer's gold is ground;"],
        [false, "Fill high the kup and drink it deep", "Fill high the cup, and drink it deep,"],
        [false, "And name the dead nau fast asleep.", "And name the dead, now fast asleep."],
        [false, "Go softli dhau that walkest late", "Go softly, thou that walkest late,"],
        [false, "And leave dhain ofrìng at the gate", "And leave thine offering at the gate;"],
        [false, "Who wàcheth bi the krossing wide", "Who watcheth by the crossing wide"],
        [false, "Will let the kùrtyòs pass beside.", "Will let the courteous pass beside."],
    ];
    const actual = samples.prose
        .map((line) => [true, line])
        .concat(aelwythiVerseLines(samples).map((line) => [false, line]));
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
    const declared = writing.examples;
    for (const phrase of [
        "_We haven come_",
        "_we haven awaited_",
        "_thei will come_",
        "_thei mei enter_",
        "_Come hither_",
        "_Enter not_",
        "_we believen not_",
        "_thei comen not_",
        "_Haven ye siin him._",
        "_Methinks we haven tarried too long._",
        "We haven biin waiting for dhii since morn.",
        "We ben merchants of the north and haven come hither to sell our wares.",
        "Ye cannot enter till morn.",
        "We cannot abide here longer.",
    ])
        assert(
            declared.includes(respellText(phrase.replaceAll("_", ""))),
            `missing meaningful example: ${phrase}`,
        );
    const utterances = [
        ...declared,
        ...writing.worked.map(({ text }) => text),
        ...writing.conversation,
    ].join(" ");
    for (const phrase of [/haven comen/i, /(?:we|ye|they) (?:are|have|do|go|come|know)\b/i])
        assert(!phrase.test(utterances), `a finite-only agreement regression: ${phrase}`);
    const all = new Set(words.flatMap((word) => [word.form, ...(word.variants ?? [])]));
    for (const [headword, singular] of [
        ["will", "wilt"],
        ["shall", "shalt"],
        ["can", "canst"],
        ["mei", "meist"],
        ["might", "mightst"],
        ["would", "wouldst"],
        ["should", "shouldst"],
        ["ought", "oughtest"],
    ]) {
        const word = words.find(({ form }) => form === guideSpelled(headword));
        assert(
            word?.variants.includes(guideSpelled(singular)),
            `${headword} needs its singular form`,
        );
        assert(!all.has(guideSpelled(`${headword}en`)), `${headword} cannot take a plural ending`);
    }
    for (const form of ["Methinks", "Meseems", "Mii likes", "Mii lists"])
        assert(words.some((word) => word.form === form && /fixed impersonal/.test(word.gloss)));
    assert(forConcept("cannot").every((word) => /unable/.test(word.gloss)));
    assert(forConcept("may-permission").every((word) => /permission/.test(word.gloss)));
    assert(forConcept("ought").every((word) => /moral duty/.test(word.gloss)));
    for (const word of words.filter(({ class: kind }) => kind === "call"))
        assert(!/\bdost thou\b|\b(?:don't|doesn't|can't|won't)\b/i.test(word.form), word.form);
});

test("performed verse takes its reading from the guide without lexical contractions", () => {
    // The charm's two-syllable readings are recorded as variants of the dictionary forms.
    const verse = aelwythiVerseLines(samples);
    assert.equal(verse.length, 8);
    for (const [form, charm] of [
        ["ófòrìng", "ofrìng"],
        ["kourteous", "kùrtyòs"],
    ]) {
        const word = words.find((entry) => entry.form === form);
        assert(word, `${form} remains in the vocabulary`);
        assert(word.variants.includes(charm), `${form} records its charm reading`);
        assert(
            verse.some((line) => line.split(/\s+/).includes(charm)),
            `the charm is written ${charm}`,
        );
        assert(!Object.hasOwn(word, "pronunciation"), `${form} has no reading override`);
        assert(
            !/\b(?:contract(?:ed|ion)?|two[- ]syllable)\b|OFF-ring|COUR-teous/i.test(
                word.note ?? "",
            ),
            `${form} has no contraction override`,
        );
    }
    assert(!/eight-syllable|OFF-ring|COUR-teous/.test(JSON.stringify(note)));
});

test("the standard uses guide sounds and preserves authored lexical meanings", () => {
    const data = (file) => frontmatterOf(file).data;
    const sounds = data(notePath("doc-prnncthlrn")).sounds.letters;
    for (const [letters, ipa] of [
        ["a", "ɑ"],
        ["e", "ɛ"],
        ["i", "i"],
        ["o", "o"],
        ["u", "u"],
        ["y", "j"],
        ["ch", "tʃ"],
        ["sh", "ʃ"],
        ["th", "θ"],
        ["dh", "ð"],
    ])
        assert(
            sounds.some((row) => !row.tongue && row.letters.includes(letters) && row.ipa === ipa),
            `${letters} has its fixed coined sound`,
        );
    const encoding = data(notePath("doc-aelwsemaronenc"));
    assert.equal(encoding.language, "aelw");
    assert.equal(encoding.font, "semaron-kuriale");
    assert.equal(encoding.mappings["."], "POINT");
    assert.equal(encoding.mappings.k, "KALPEZA_MIN");
    for (const [letter, vowel] of [
        ["à", "ANKRON"],
        ["ì", "ILTHERA"],
        ["ò", "ORNETHE"],
        ["ù", "ULMERA"],
    ]) {
        assert.deepEqual(encoding.mappings[letter], [`${vowel}_MIN`, "SHORT"]);
        assert.deepEqual(encoding.mappings[letter.toUpperCase()], [`${vowel}_MAJ`, "SHORT"]);
    }
    assert(!Object.hasOwn(encoding, "map"));
    assert(words.every((word) => !Object.hasOwn(word, "native")));
    assert(
        !words.some((word) => /^Capitalized spelling of |^Recorded variant of /.test(word.gloss)),
    );
    for (const [form, gloss] of [
        ["eksakt", "require or demand"],
        ["kongkòr", "overcome or subdue"],
        ["skeptìk", "one who doubts"],
    ])
        assert(
            words.some((word) => word.form === form && word.gloss === gloss),
            form,
        );
});
