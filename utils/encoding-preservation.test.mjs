/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import {
    americanSpelling,
    assertEncodingMigrationPreserved,
    beforeEncodingMigration,
    inAmericanSpelling,
} from "./encoding-preservation.mjs";
import { notePath } from "./note-index.mjs";

function fixture() {
    const before = {
        file: notePath("skill-dunharlng"),
        fm: {
            type: "skill",
            data: {
                roman: "Qqarvel.",
                writtenIn: { map: "qalezu", font: "qalezu-hand" },
                words: [
                    {
                        form: "Qarvel",
                        class: "n",
                        gloss: "A garden.",
                        concept: "garden",
                        source: { kind: "borrowed", language: "skill-neighbour", form: "Foreign" },
                    },
                ],
                names: { given: ["Qarvel"], metadata: { source: "English Name" } },
                register: [{ name: "Qarvel", tongue: "own" }],
            },
        },
        raw: "---\ntype: skill\n---\nThe English reading stays exactly the same.\n",
    };
    const current = structuredClone(before);
    delete current.fm.data.writtenIn;
    current.fm.data.roman = "qarvel";
    current.fm.data.words[0].form = "qarvel";
    current.fm.data.names.given[0] = "qarvel";
    current.fm.data.register[0].name = "qarvel";
    return { before, current };
}

test("approved spelling-case and presentation changes retain the whole meaning", () => {
    const { before, current } = fixture();
    assert.doesNotThrow(() => assertEncodingMigrationPreserved(current, before));
});
test("migration comparison rejects lost records, changed concepts, senses, names and English readings", () => {
    for (const edit of [
        (note) => {
            note.fm.data.words = [];
        },
        (note) => {
            note.fm.data.words[0].gloss = "A pond.";
        },
        (note) => {
            note.fm.data.words[0].concept = "water";
        },
        (note) => {
            note.fm.data.words[0].form = "qerel";
        },
        (note) => {
            note.fm.data.names.given[0] = "qerel";
        },
        (note) => {
            note.fm.data.names.metadata.source = "english name";
        },
        (note) => {
            note.fm.data.words[0].source.form = "foreign";
        },
        (note) => {
            note.raw = note.raw.replace("English reading", "English meaning");
        },
    ]) {
        const { before, current } = fixture();
        edit(current);
        assert.throws(() => assertEncodingMigrationPreserved(current, before));
    }
});

test("the American baseline keeps a whole language block in its own spelling", () => {
    const raw = [
        "---",
        "type: doc",
        "---",
        "The colour of the gate.",
        "",
        "::: {lang=aelw font=serif}",
        "colour grey favour",
        "",
        "neighbours harboured",
        ":::",
        "",
        "A grey sky.",
        "",
    ].join("\n");
    assert.equal(
        americanSpelling(raw),
        raw.replace("The colour", "The color").replace("A grey", "A gray"),
    );
});

test("the American baseline keeps every entry of a protected block-list field", () => {
    const raw = [
        "---",
        "type: language",
        "data:",
        "  words:",
        "    - form: colour",
        "      variants:",
        "        - colour",
        "        - grey",
        "      plural:",
        "        - favours",
        "      gloss: A grey colour.",
        "    - form: tor",
        "      forms:",
        "      - honour",
        "      - armour",
        "      gloss: Honour.",
        "---",
        "Body.",
        "",
    ].join("\n");
    assert.equal(
        americanSpelling(raw),
        raw
            .replace("gloss: A grey colour.", "gloss: A gray color.")
            .replace("gloss: Honour.", "gloss: Honor."),
    );
});

/** A baseline record for `raw`, read as a note. */
function record(raw) {
    return { file: notePath("skill-dunharlng"), raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
/** Each source form: its baseline, its American reading, and that reading with native text respelled. */
const SOURCE_FORMS = {
    "quoted keys": {
        before: [
            "---",
            "type: skill",
            "data:",
            "  words:",
            '    - "form": colour',
            "      class: n",
            "      gloss: A grey colour.",
            "      'concept': colour",
            '      "variants":',
            "        - colour",
            "        - grey",
            "    - {'form': favour, class: n, gloss: A favour asked., \"plural\": [favours, honours]}",
            "---",
            "The colour of the gate.",
            "",
        ].join("\n"),
        american: [
            ["gloss: A grey colour.", "gloss: A gray color."],
            ["gloss: A favour asked.", "gloss: A favor asked."],
            ["The colour of", "The color of"],
        ],
        native: [
            ['"form": colour', '"form": color'],
            ["'concept': colour", "'concept': color"],
            ["- colour", "- color"],
            ["- grey", "- gray"],
            ["'form': favour", "'form': favor"],
            ["[favours, honours]", "[favors, honors]"],
        ],
    },
    "indented language divs": {
        before: [
            "---",
            "type: skill",
            "data:",
            "  words:",
            "    - {form: qarvel, class: n, gloss: A garden., concept: garden}",
            "---",
            "The colour of the gate.",
            "",
            " ::: {lang=aelw font=serif}",
            " colour grey favour",
            " :::",
            "",
            "   ::: {lang=aelw}",
            "   neighbours harboured",
            "   :::",
            "",
            "A grey sky.",
            "",
        ].join("\n"),
        american: [
            ["The colour of", "The color of"],
            ["A grey sky.", "A gray sky."],
        ],
        native: [
            [" colour grey favour", " color gray favor"],
            ["neighbours harboured", "neighbors harbored"],
        ],
    },
};
const applied = (text, pairs) => pairs.reduce((out, [from, to]) => out.replace(from, to), text);
for (const [form, { before, american, native }] of Object.entries(SOURCE_FORMS)) {
    test(`the American baseline converts the English and keeps the native text, with ${form}`, () => {
        assert.equal(americanSpelling(before), applied(before, american));
        assert.doesNotThrow(() =>
            assertEncodingMigrationPreserved(record(applied(before, american)), record(before)),
        );
    });
    test(`the migration comparison rejects respelled native text, with ${form}`, () => {
        for (const change of native) {
            const mutated = record(applied(applied(before, american), [change]));
            assert.throws(
                () => assertEncodingMigrationPreserved(mutated, record(before)),
                assert.AssertionError,
                change.join(" -> "),
            );
        }
        const respelled = record(applied(applied(before, american), native));
        assert.notEqual(inAmericanSpelling(record(before)).raw, respelled.raw);
        assert.throws(
            () => assertEncodingMigrationPreserved(respelled, record(before)),
            assert.AssertionError,
        );
    });
}

test("retained prose in a narrowed sound section cannot be deleted", () => {
    const note = (address) => {
        const file = notePath(address);
        const raw = fs.readFileSync(file, "utf8");
        return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
    };
    const baseline = (current) => {
        const before = beforeEncodingMigration(current.file);
        // The baseline links the Tellumi note as skill-khazrilng.
        const raw = before.raw.replaceAll("skill-khazrilng", "skill-tellumilng");
        return { ...before, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
    };
    for (const [address, retained] of [
        [
            "skill-atarzadilng",
            " A word never sets two vowels side by side, never doubles a letter, and **always ends on a consonant**",
        ],
        [
            "skill-dunharlng",
            " These diphthongs are fundamental to the melodic quality of the language.",
        ],
        ["skill-varokhlng", "**Alliteration is loose.** "],
    ]) {
        const current = note(address);
        assert(current.raw.includes(retained), `${address}: ${retained}`);
        assert.doesNotThrow(() => assertEncodingMigrationPreserved(current, baseline(current)));
        const cut = { ...current, raw: current.raw.replace(retained, "") };
        assert.throws(
            () => assertEncodingMigrationPreserved(cut, baseline(cut)),
            /original reading changed/,
            address,
        );
    }
});

test("approved closing-y name spellings still reject changed identities, senses and prose", () => {
    const { before, current } = fixture();
    before.fm.data.names.given = ["Kayvonad"];
    current.fm.data.names.given = ["kaivonad"];
    assert.doesNotThrow(() => assertEncodingMigrationPreserved(current, before));
    for (const edit of [
        (note) => {
            note.fm.data.names.given[0] = "kaivonar";
        },
        (note) => {
            note.fm.data.words[0].gloss = "A pond.";
        },
        (note) => {
            note.fm.data.words[0].concept = "water";
        },
        (note) => {
            note.raw = note.raw.replace("English reading", "English meaning");
        },
    ]) {
        const altered = structuredClone(current);
        edit(altered);
        assert.throws(() => assertEncodingMigrationPreserved(altered, before));
    }
});

test("approved affix example spelling preserves the distinct y-before-vowel form", () => {
    const { before, current } = fixture();
    before.file = current.file = notePath("skill-nyalbnlng");
    before.fm.data.affixes = [
        { form: "-a", gloss: "a woman's name", examples: ["Lushey- > Lusheya"] },
    ];
    current.fm.data.affixes = [
        { form: "-a", gloss: "a woman's name", examples: ["lushei- > lusheya"] },
    ];
    assert.doesNotThrow(() => assertEncodingMigrationPreserved(current, before));
    for (const example of ["lushei- > lusheia", "lushei- > lusheya, a pond", "lushey- > lusheya"]) {
        const altered = structuredClone(current);
        altered.fm.data.affixes[0].examples = [example];
        assert.throws(() => assertEncodingMigrationPreserved(altered, before));
    }
});
