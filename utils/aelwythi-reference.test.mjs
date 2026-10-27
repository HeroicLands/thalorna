/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import YAML from "yaml";

const LOOKUP = path.join(import.meta.dirname, "aelwythi-lookup.mjs");
const roots = [];

function fixture() {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aelwythi-reference-"));
    roots.push(root);
    const source = path.join(root, "Aelwythi.md");
    const out = path.join(root, "reference.md");
    const lexicon = [
        {
            form: "say",
            class: "v",
            gloss: ["to say", "express in words"],
            variants: ["sayst", "saith", "sayen", "said"],
            field: "Doing and being",
            concept: ["say", "express"],
            note: "Keep the meaning.",
            native: [{ text: "NOT-ROMAN" }],
        },
        {
            form: "offering",
            class: "n",
            gloss: "a gift presented",
            pronunciation: "OFF-ring",
            note: "Two syllables in the charm.",
        },
        { form: "may", class: "v", gloss: "permission or possibility", variants: ["mayst"] },
        { form: "stay", class: "v", gloss: "remain in one place" },
        { form: "art", class: "n", gloss: "a practiced skill" },
        { form: "art", class: "n", gloss: "a human craft" },
        { form: "Kelara", class: "name", gloss: "a registered given name" },
        {
            form: "be",
            class: "v",
            gloss: "exist",
            variants: ["am", "art", "is", "ben", "was", "were", "been"],
        },
    ];
    const data = {
        type: "skill",
        subType: "language",
        shortcode: "aelwthlng",
        name: { full: "Aelwythi Language" },
        description: "Readable older speech.",
        data: {
            abbreviation: "Aelw.",
            roman: "abcdefghijklmnopqrstuvwxyzáéíóúë",
            words: lexicon,
            names: { pattern: "{given} {byname}", given: { male: ["Kelara"] } },
            elements: [
                { form: "kel", kind: "given", position: "opening", sense: "a sample element" },
            ],
            register: [{ name: "Kelara", kind: "given", built: ["kel", "ara"] }],
        },
    };
    let body = `
## How Aelwythi sounds

Ordinary English keeps readable spelling. Coined words follow fixed sounds.

### Ordinary English words

English words keep their historical pronunciation.

### Coined words and names

Every vowel is sounded. An acute marks stress. No grave is used.

#### Vowels

The vowel e is sounded as in bet.

#### Consonants

The consonant g is always hard.

#### Syllables, stress and marks

A word of two syllables is stressed on the first.

### Foreign words and names

Foreign names are adapted into pronounceable Aelwythi.

### The naming palette

Make names from the registered elements.

## How Aelwythi is written down

### Rules for writers

The period is the sole pause mark. No contracted negatives. Keep possessive apostrophes.

#### Address and present verbs

One person is thou or thee; several are ye or you.

| Use | Singular | Plural |
| --- | --- | --- |
| Subject | thou | ye |
| Object | thee | you |

Only the finite verb carries present agreement. Plurals take -en.

| Verb | I | Thou | He / she / it | We / ye / they |
| --- | --- | --- | --- | --- |
| say | say | sayst | saith | sayen |
| be | am | art | is | ben |

Participles and following bare verbs keep their forms. Past plurals take no -en.

#### Modals, questions and negation

Modals take no plural -en. Thou mayst depart grants permission.

| Modal | Meaning in this register |
| --- | --- |
| may | permission or possibility |
| cannot | inability |

Prefer inversion to ask a question. Put not after the finite verb.

#### Word order and familiar vocabulary

Keep the meaning. Wherefore means why, and whither means toward where.

#### Everyday, formal and ceremonial speech

All registers keep the same agreement. Verse keeps its metre and rhyme.

#### Speech and emphasis

Give direct speech without quotation marks. No bold, italics or underline.

::: {lang=aelw}
Ye may stay.
:::

**Worked phrases.** Source-attested examples.

| Meaning | Aelwythi |
| --- | --- |
| You all say it. | Ye sayen it. |
| May I stay? | May I stay. |

Review a passage by meaning first.

### Sample passages

\`\`\`verse
[NATIVE-VERSE]{.nativefont}
\`\`\`

## Naming Traditions

Coined names follow fixed pronunciation and stress.
`;
    const anchors = {
        "How Aelwythi sounds": "pronunciation",
        "Ordinary English words": "english-pronunciation",
        "Coined words and names": "coined-pronunciation",
        Vowels: "vowels",
        Consonants: "consonants",
        "Syllables, stress and marks": "stress",
        "Foreign words and names": "foreign-names",
        "The naming palette": "naming-palette",
        "Rules for writers": "writing-rules",
        "Address and present verbs": "present-agreement",
        "Modals, questions and negation": "modals-and-questions",
        "Word order and familiar vocabulary": "vocabulary-and-meaning",
        "Everyday, formal and ceremonial speech": "register",
        "Speech and emphasis": "speech-and-emphasis",
        "Sample passages": "sample-passages",
        "Naming Traditions": "names",
    };
    body = body.replace(/^(#{1,6}) (.+)$/gm, (line, hashes, title) =>
        anchors[title] ? `${hashes} ${title} {#${anchors[title]}}` : line,
    );
    fs.writeFileSync(source, `---\n${YAML.stringify(data)}---\n${body}`);
    return { root, source, out, lexicon, body };
}

function lookup(f, args) {
    return spawnSync(process.execPath, [LOOKUP, "--note", f.source, ...args], {
        cwd: f.root,
        encoding: "utf8",
    });
}

afterEach(() => {
    for (const root of roots.splice(0)) fs.rmSync(root, { recursive: true, force: true });
});

describe("direct Aelwythi language-note lookup", () => {
    it("derives every lexical entry, explicit paradigm and real guidance anchor from the note", async () => {
        const f = fixture();
        const { readLanguageNote } = await import("./aelwythi-note.mjs");
        const { data, body, sections } = readLanguageNote(f.source);
        assert.equal(data.lexicon.length, f.lexicon.length);
        for (const [index, source] of f.lexicon.entries()) {
            const entry = data.lexicon[index];
            assert.equal(entry.form, source.form);
            assert.equal(entry.class, source.class);
            assert.deepEqual(
                entry.glosses,
                Array.isArray(source.gloss) ? source.gloss : [source.gloss],
            );
            assert.deepEqual(entry.variants, source.variants ?? []);
            for (const field of ["field", "concept", "pronunciation", "note"])
                assert.deepEqual(entry[field], source[field]);
            assert.equal(Object.hasOwn(entry, "native"), false);
            for (const anchor of entry.guidance) assert(sections.has(anchor));
        }
        const table = f.body
            .match(/\| Verb \|[^]*?(?=\n\n)/)[0]
            .split("\n")
            .slice(2)
            .map((line) =>
                line
                    .split("|")
                    .slice(1, -1)
                    .map((cell) => cell.trim()),
            );
        assert.deepEqual(
            data.presentParadigms.map((row) => [row.verb, ...Object.values(row.forms)]),
            table,
        );
        assert(!body.includes("NATIVE-VERSE"));
        assert(!body.includes(".nativefont"));
        assert(!body.includes("Translation task"));
        assert(body.includes("Verse keeps its metre and rhyme"));
        assert(body.includes("Past plurals take no -en"));
        assert.equal(data.source.sha256.length, 64);
        const name = data.lexicon.find((entry) => entry.class === "name");
        for (const anchor of ["#vowels", "#consonants", "#stress"])
            assert(name.guidance.includes(anchor));
    });

    it("reads canonical words and variants directly without mutating the note or labelling flat variants", () => {
        const f = fixture();
        const original = fs.readFileSync(f.source, "utf8");
        const found = lookup(f, ["saith"]);
        assert.equal(found.status, 0, found.stderr);
        const response = JSON.parse(found.stdout);
        assert.equal(response.match, "variant");
        assert.equal(response.entries[0].form, "say");
        assert.deepEqual(response.entries[0].variants, ["sayst", "saith", "sayen", "said"]);
        assert.equal(response.paradigms[0].forms["He / she / it"], "saith");
        assert.equal(Object.hasOwn(response.entries[0], "past"), false);
        assert(
            response.guidance.some(
                (item) =>
                    item.anchor === "#present-agreement" &&
                    item.text.includes("Only the finite verb"),
            ),
        );
        const absent = lookup(f, ["sayeth"]);
        assert.equal(absent.status, 3);
        assert.deepEqual(JSON.parse(absent.stdout).entries, []);
        assert.equal(fs.readFileSync(f.source, "utf8"), original);
        assert.deepEqual(fs.readdirSync(f.root), ["Aelwythi.md"]);
    });

    it("retains duplicate senses and a homographic noun plus another verb's inflection", () => {
        const f = fixture();
        const result = lookup(f, ["art"]);
        assert.equal(result.status, 0);
        const data = JSON.parse(result.stdout);
        assert.equal(data.match, "form");
        assert.deepEqual(
            data.entries.map((entry) => entry.form),
            ["art", "art", "be"],
        );
        assert.equal(new Set(data.entries.map((entry) => entry.id)).size, 3);
        assert.equal(data.paradigms.find((paradigm) => paradigm.verb === "be").forms.Thou, "art");
    });

    it("searches whole meaning terms, limits records and returns authored linguistic prose", () => {
        const f = fixture();
        const result = lookup(f, ["permission", "--limit", "1"]);
        assert.equal(result.status, 0);
        const data = JSON.parse(result.stdout);
        assert.equal(data.entries.length, 1);
        assert.equal(data.entries[0].form, "may");
        assert.equal(data.match, "meaning");
        assert(data.guidance.some((part) => part.text.includes("Modals take no plural")));
        assert.equal(lookup(f, ["permiss"]).status, 3);
        const guide = lookup(f, ["--guide"]);
        assert.equal(guide.status, 0, guide.stderr);
        assert(guide.stdout.includes("{#writing-rules}"));
        assert(guide.stdout.includes("May I stay?"));
        assert(!guide.stdout.includes("lexicon:"));
        assert(!guide.stdout.includes("Translation task"));
    });

    it("accepts another language without adding English conjugation or procedural instructions", () => {
        const f = fixture();
        const source = {
            type: "skill",
            subType: "language",
            shortcode: "other",
            name: { full: "Another Language" },
            data: { words: [{ form: "sora", class: "v", gloss: "travel", variants: ["sori"] }] },
        };
        fs.writeFileSync(
            f.source,
            `---\n${YAML.stringify(source)}---\n## Words {#vocabulary-and-meaning}\n\nIts verbs do not change.\n`,
        );
        const result = lookup(f, ["sori"]);
        assert.equal(result.status, 0, result.stderr);
        const data = JSON.parse(result.stdout);
        assert.deepEqual(data.paradigms, []);
        assert.deepEqual(data.modals, []);
        assert(data.guidance.every((part) => !part.text.includes("thou")));
        const guide = lookup(f, ["--guide"]);
        assert.equal(guide.status, 0);
        assert(guide.stdout.includes("Its verbs do not change"));
        assert(!guide.stdout.includes("Aelwythi"));
    });

    it("refuses malformed source data, ambiguous anchors, unknown local guidance and unsupported command options", () => {
        const f = fixture();
        const source = fs.readFileSync(f.source, "utf8");
        for (const malformed of [
            source.replace("words:", "words: ["),
            source.replace("form: say", "form: 7"),
            source + "\n## Duplicate {#present-agreement}\n",
            source + "\nSee [the rule](#missing-rule).\n",
        ]) {
            fs.writeFileSync(f.source, malformed);
            const result = lookup(f, ["saith"]);
            assert.equal(result.status, 1);
            assert(result.stderr.includes("error:"));
            assert.equal(fs.readFileSync(f.source, "utf8"), malformed);
        }
        fs.writeFileSync(f.source, source);
        assert.equal(lookup(f, ["--reference", f.out, "saith"]).status, 2);
        assert.equal(lookup(f, ["saith", "--limit", "0"]).status, 2);
    });
});

it("returns a word and a registered name together without changing their case", () => {
    const f = fixture();
    const source = fs.readFileSync(f.source, "utf8");
    const front = /^---\n([^]*?)\n---\n/.exec(source);
    const fm = YAML.parse(front[1]);
    fm.data.words.push({ form: "will", class: "v", gloss: "intend or wish" });
    fm.data.register.push({ name: "Will", kind: "given" });
    fs.writeFileSync(
        f.source,
        "---\n" + YAML.stringify(fm) + "---\n" + source.slice(front[0].length),
    );
    const result = lookup(f, ["WILL"]);
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(
        JSON.parse(result.stdout).entries.map(({ form, class: kind }) => [form, kind]),
        [
            ["will", "v"],
            ["Will", "name"],
        ],
    );
});
