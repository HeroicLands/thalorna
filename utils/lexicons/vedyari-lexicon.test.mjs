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
    analyse,
    attestedNames,
    builtForm,
    callingNames,
    join,
    ruleFrom,
    soundProblems,
    suffixed,
    syllables,
} from "./vedyari-lexicon.mjs";

const note = fs.readFileSync(NOTE, "utf8");
const lexicon = fs.readFileSync(LEXICON, "utf8");
const tree = attestedNames();
const { rule } = ruleFrom(note, lexicon);

const findingsOf = (lex = lexicon, text = note) => analyse(text, lex, tree).findings;
const errorsOf = (lex, text) => findingsOf(lex, text).filter((line) => line.includes(": error: "));
const warningsOf = (lex, text) =>
    findingsOf(lex, text).filter((line) => line.includes(": warning: "));

/** The text with one literal replaced, failing loudly when the literal is absent. */
function edited(from, to, text = lexicon) {
    assert(text.includes(from), `the text no longer holds "${from}"`);
    return text.replace(from, to);
}

/** The lexicon line that opens with a word's form. */
function wordLine(form) {
    const line = lexicon.split("\n").find((text) => text.startsWith(`| \`${form}\``));
    assert(line, `the lexicon holds \`${form}\``);
    return line;
}

/** The register line for a name. */
function registerLine(name) {
    const line = lexicon.split("\n").find((text) => text.startsWith(`| **${name}**`));
    assert(line, `the register holds **${name}**`);
    return line;
}

test("the Vedyari pages obey their own rules", () => {
    assert.deepEqual(errorsOf(), []);
});

test("every rule table and section the guard reads is present", () => {
    const { problems } = ruleFrom(note, lexicon);
    assert.deepEqual(problems, []);
    assert(rule.words.length > 0);
    assert(rule.register.length > 0);
});

test("the seam and the suffixes make the words the corpus writes", () => {
    assert.equal(join("vyāla", "indra", rule), "vyālendra");
    assert.equal(join("padma", "āvali", rule), "padmāvali");
    assert.equal(join("tri", "āchārya", rule), "triyāchārya");
    assert.equal(join("dhanur", "kota", rule), "dhanurkota");
    assert.equal(suffixed("karma", "-ja", rule), "karmāja");
    assert.equal(suffixed("ritu", "-ja", rule), "ritūja");
    assert.equal(suffixed("vrata", "-in", rule), "vratin");
    assert.equal(suffixed("gan", "-aka", rule), "ganaka");
    assert.equal(
        builtForm("`sūrya` + `teja` + `mahā` + `ānanda`", rule).form,
        "sūryatejamahānanda",
    );
});

test("a vowel r between consonants is read as a vowel", () => {
    assert.deepEqual(soundProblems("prthimaja", rule), []);
    assert.deepEqual(soundProblems("smrti", rule), []);
});

test("a lexicon word that breaks a sound rule is an error", () => {
    const line = wordLine("dhomba");
    for (const [bad, why] of [
        ["`zdhomba`", "opens on"],
        ["`dhombat`", "closes on"],
        ["`dhombqa`", "not a letter of Vedyari"],
        ["`dhomskba`", "stacks 4 consonants"],
        ["`dhoemba`", "not a diphthong"],
    ]) {
        const broken = edited(line, line.replace("`dhomba`", bad));
        assert(
            errorsOf(broken).some((text) => text.includes(why)),
            `${bad} should fail on "${why}"`,
        );
    }
});

test("a verb stem is bound and may close on any consonant", () => {
    const line = wordLine("bhīn-");
    assert.deepEqual(errorsOf(edited(line, line.replace("`bhīn-`", "`bhīnk-`"))), []);
});

test("a word standing twice, an undeclared class or field, and a missing gloss are errors", () => {
    const line = wordLine("dhomba");
    assert(
        errorsOf(edited(line, `${line}\n${line}`)).some((text) => text.includes("stands twice")),
    );
    assert(
        errorsOf(edited(line, line.replace(/\|\s*n\s*\|/, "| noun |"))).some((text) =>
            text.includes('the class "noun"'),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace(/\|\s*a hill\s*\|/, "|  |"))).some((text) =>
            text.includes("carries no gloss"),
        ),
    );
    const heading = `\n### ${rule.fields[0]}\n`;
    assert(
        errorsOf(edited(heading, "\n### Nowhere in particular\n")).some((text) =>
            text.includes("is not in the field list"),
        ),
    );
});

test("a built word its parts do not give, or built from a word the lexicon lacks, is an error", () => {
    const line = wordLine("ganaka");
    assert(
        errorsOf(edited(line, line.replace("`ganaka`", "`gannaka`"))).some((text) =>
            text.includes("is not what its parts give"),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace("`gan-` + `-aka`", "`nonesuch` + `-aka`"))).some(
            (text) => text.includes("is not a row of the lexicon"),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace("`gan-` + `-aka`", "`gan-` + `-zzz`"))).some((text) =>
            text.includes("is not a suffix the lexicon declares"),
        ),
    );
});

test("an attested cell naming a missing note is an error", () => {
    const line = wordLine("sūrya");
    const broken = edited(line, line.replace(/\[\[[^\\|\]]+/, "[[place-nonesuch"));
    assert(errorsOf(broken).some((text) => text.includes("which no note has")));
});

test("a Vedyaran name the register does not hold is an error", () => {
    const line = registerLine("Marukūpa");
    const broken = edited(`${line}\n`, "");
    assert(errorsOf(broken).some((text) => text.includes('"Marukūpa" is a Vedyaran name')));
});

test("a register row in an undeclared tongue, on a missing note, or not the note's name is an error", () => {
    const line = registerLine("Marukūpa");
    assert(
        errorsOf(edited(line, line.replace("`vedyari`", "`nonesuch`"))).some((text) =>
            text.includes('the tongue "nonesuch"'),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace("[[place-marukupa", "[[place-nonesuch"))).some((text) =>
            text.includes("which no note has"),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace("[[place-marukupa", "[[place-sangama"))).some((text) =>
            text.includes("is not a name of [[place-sangama]]"),
        ),
    );
    assert(
        errorsOf(edited(line, `${line}\n${line}`)).some((text) => text.includes("stands twice")),
    );
});

test("a register name its parts do not give is an error; a length its parts do not give is a warning", () => {
    const line = registerLine("Marukūpa");
    assert(
        errorsOf(edited(line, line.replace("`kūpa`", "`grāma`"))).some((text) =>
            text.includes("**Marukūpa** is not what its parts give"),
        ),
    );
    const length = edited(line, line.replace("**Marukūpa**", "**Marukupa**"));
    assert.deepEqual(errorsOf(length), []);
    assert(
        warningsOf(length).some((text) =>
            text.includes("**Marukupa** differs in a vowel's length"),
        ),
    );
});

test("a spelling the pages do not use and a stress mark are warnings, not errors", () => {
    const line = registerLine("Marukūpa");
    const marked = edited(line, line.replace("**Marukūpa**", "**Marukûpa**"));
    assert.deepEqual(errorsOf(marked), []);
    assert(warningsOf(marked).some((text) => text.includes('**Marukûpa** writes "û"')));
    // The acute is a stress mark, so the long vowel beneath it is read either way.
    assert(!warningsOf().some((text) => text.includes("**Mahájaya** differs in a vowel's length")));
});

test("a man's name closing on a woman's ending is a warning on the list", () => {
    const broken = edited("### Male Given Names\n\n", "### Male Given Names\n\n- Sundarī\n", note);
    const lines = warningsOf(lexicon, broken);
    assert(lines.some((text) => text.includes('Sundarī is a man\'s name and closes on "-ī"')));
});

test("a listed name that breaks a sound rule is a warning on the language page", () => {
    const broken = edited("### Clan Names\n\n", "### Clan Names\n\n- Vrakt\n", note);
    const lines = warningsOf(lexicon, broken);
    assert(lines.some((text) => text.startsWith(NOTE) && text.includes('Vrakt closes on "kt"')));
    assert.deepEqual(errorsOf(lexicon, broken), []);
});

test("the scholars' spelling is read before the rules apply", () => {
    const broken = edited("### Clan Names\n\n", "### Clan Names\n\n- Kṣemaṇa\n", note);
    assert(!warningsOf(lexicon, broken).some((text) => text.includes("Kṣemaṇa")));
});

test("a syllable is counted by its vowel, a vowel r included", () => {
    assert.equal(syllables("Padmàvali", rule), 4);
    assert.equal(syllables("Prthîmâja", rule), 4);
    assert.equal(syllables("Chandrakīrtisundarī", rule), 7);
    assert.equal(syllables("Nárava", rule), 3);
});

test("a calling name is cut before the second or third vowel, or doubles the first syllable", () => {
    const ways = callingNames("Rāmachandra", rule);
    assert.equal(ways.get("rāmu"), "man");
    assert.equal(ways.get("rāmachi"), "woman");
    assert(ways.has("rārā"));
    assert.equal(callingNames("Padmàvali", rule).get("padmi"), "woman");
    assert(callingNames("Drkshàrana", rule).has("drkshu"));
    assert(callingNames("Suvaratika", rule).has("susu"));
    // A name that opens on a vowel has no doubled form.
    assert(![...callingNames("Anûraja", rule).keys()].includes("aa"));
    assert(!callingNames("Padmàvali", rule).has("padu"));
});

test("a calling name the rule does not cut from the given name is an error", () => {
    const line = registerLine("Padmi");
    const broken = edited(line, line.replace("**Padmi**", "**Padu**"));
    assert(
        errorsOf(broken).some((text) =>
            text.includes("**Padu** is not a calling name the rule cuts from Padmàvali"),
        ),
    );
});

test("a calling name whose cell names another given name, or on a note with none, is an error", () => {
    const line = registerLine("Padmi");
    assert(
        errorsOf(edited(line, line.replace("`Padmàvali`", "`Pallàvi`"))).some((text) =>
            text.includes('**Padmi** is cut from "Pallàvi"'),
        ),
    );
    assert(
        errorsOf(edited(line, line.replace("[[being-pdmvldhnrvdkrtrj", "[[place-marukupa"))).some(
            (text) => text.includes("[[place-marukupa]] has no given name"),
        ),
    );
});

test("a long given name with no calling name is an error on the being", () => {
    const line = registerLine("Padmi");
    const errors = errorsOf(edited(`${line}\n`, ""));
    assert(
        errors.some(
            (text) =>
                text.includes("Padmavali_Dhanurvedakirtiraja.md") &&
                text.includes("[[being-pdmvldhnrvdkrtrj]] carries no calling name"),
        ),
    );
});

test("a calling name closing as the other gender's is a warning", () => {
    const line = registerLine("Padmi");
    const swapped = edited(line, line.replace("**Padmi**", "**Padmu**"));
    assert(
        warningsOf(swapped).some((text) =>
            text.includes("**Padmu** closes as a man's calling name"),
        ),
    );
});

test("the calling-name rule must be stated", () => {
    const { problems } = ruleFrom(note, edited("### Calling names", "### Short names"));
    assert(problems.some((text) => text.includes('"### Calling names"')));
});
