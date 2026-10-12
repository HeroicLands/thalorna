/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import {
    ENVIRONMENTS,
    analyse,
    applyChange,
    builtForm,
    changesFrom,
    derive,
    format,
    inScope,
    parseChange,
    readPage,
    respell,
    soundProblems,
    tables,
} from "./lexicon-pages.mjs";

/** A page of the common shape, small enough to read, with one daughter tongue. */
const PAGE = `---
shortcode: testlexcn
type: doc
---

Prose.

## How to read the tables

### Classes

| Class | Meaning |
| ----- | ------- |
| \`n\` | a noun  |
| \`v\` | a verb  |

### Fields

| Field | What it holds |
| ----- | ------------- |
| Water | wet things    |
| Kin   | people        |

## Sounds and spelling

### Letters

| Letter                  | Kind        | Sounds like | Tongue   |
| ----------------------- | ----------- | ----------- | -------- |
| \`k\`, \`t\`, \`r\`, \`n\`, \`s\`, \`th\` | consonant | plain | all |
| \`a\`, \`e\`, \`i\`, \`o\`, \`u\` | short vowel | plain | all |
| \`ā\`                   | long vowel  | long        | \`par\`  |
| \`z\`                   | consonant   | buzz        | \`dau\`  |

### Word edges

| Edge                            | Sounds           |
| ------------------------------- | ---------------- |
| Pairs that may open a word      | \`tr\`, \`kr\`   |
| Consonants that close a word    | \`n\`, \`r\`, \`s\`, \`z\` |
| Vowels that may stand together  | \`ai\`           |

### Clusters

| Rule                                   | Count |
| -------------------------------------- | ----- |
| Most consonants together inside a word | 2     |

### Spellings the pages do not use

| Written | Read as | What it is |
| ------- | ------- | ---------- |
| \`c\`   | \`k\`   | a scholars' letter |

## Building words

### Joining

| First closes on | Second opens on | Written | Example |
| --------------- | --------------- | ------- | ------- |
| \`a\`           | \`a\`           | \`ā\`   | x       |
| \`i\`           | \`a\`, \`e\`    | \`y+\`  | x       |

### Suffixes

| Suffix | Stem                      | Makes        | Example |
| ------ | ------------------------- | ------------ | ------- |
| \`-an\` | added                    | a doer       | x       |
| \`-is\` | replaces a closing vowel | one from it  | x       |

## The family

### Roots

| Parent    | Daughter  | Gloss |
| --------- | --------- | ----- |
| \`kāta\`  | \`kata\`  | water |
| \`tiras\` | \`tiraz\` | house |
| \`sana\`  | —         | lost  |

### From Parent to Daughter

| Step | Change        | Where                |
| ---- | ------------- | -------------------- |
| 2    | \`s\` > \`z\` | at the end of a word |
| 1    | \`ā\` > \`a\` | anywhere             |

## Words

### Water

| Form      | Class | Gloss       | Built from        | Attested |
| --------- | ----- | ----------- | ----------------- | -------- |
| \`kāta\`  | \`n\` | water       | —                 | [[place-well\\|Well]] |
| \`kātān\` | \`n\` | a waterman  | \`kāta\` + \`-an\` | —       |
| \`ana\` | \`n\` | flow | — | — |
| \`kātāna\` | \`n\` | a water-flow | \`kāta\` + \`ana\` | — |

### Kin

| Form      | Class | Gloss  | Built from | Attested | Tongue  |
| --------- | ----- | ------ | ---------- | -------- | ------- |
| \`tiraz\` | \`n\` | house  | —          | —        | \`dau\` |
| \`tiris\` | \`n\` | of the house | \`tira-\` + \`-is\` | — | \`par\` |
| \`tira-\` | \`n\` | house (bound) | — | — | \`par\` |

## Making names

Prose.

## Scope

| Kind    | Value        | What it catches |
| ------- | ------------ | --------------- |
| folder  | \`wells\`    | the places      |
| culture | \`testclt\`  | the beings      |

## Attested names

### Tongues

| Tongue        | Meaning                   |
| ------------- | ------------------------- |
| \`par\`       | the parent, [[skill-parlng\\|Parent]] |
| \`dau\`       | the daughter              |
| \`translation\` | a name in the reader's tongue |
| \`kept\`      | a name kept by the owner's ruling |

### Names

| Name          | Notes                    | Tongue        | Built from          |
| ------------- | ------------------------ | ------------- | ------------------- |
| **Kātān**     | [[place-well\\|Well]]    | \`par\`       | \`kāta\` + \`-an\`  |
| **The Well**  | [[place-well\\|Well]]    | \`translation\` | —                 |
| **Tiraz**     | [[being-tiraz\\|Tiraz]]  | \`dau\`       | —                   |

## Retired names

| Retired   | Written instead | Why          |
| --------- | --------------- | ------------ |
| \`Kathra\` | \`Kātān\`      | an Earth god |
`;

/** A tree of two notes in scope and one outside it. */
const TREE = [
    {
        file: "a/Well.md",
        rel: "a/Well.md",
        address: "place-well",
        front: {
            type: "place",
            shortcode: "well",
            name: { full: "Kātān", aliases: ["The Well"] },
            data: { packFolder: "wells" },
        },
        names: [
            { name: "Kātān", kind: "full" },
            { name: "The Well", kind: "alias" },
        ],
        text: "---\nname: {full: Kātān}\n---\nThe well of Kātān.",
        literature: false,
    },
    {
        file: "b/Tiraz.md",
        rel: "b/Tiraz.md",
        address: "being-tiraz",
        front: {
            type: "being",
            shortcode: "tiraz",
            name: { full: "Tiraz" },
            data: { culture: "testclt" },
        },
        names: [{ name: "Tiraz", kind: "full" }],
        text: "---\nname: {full: Tiraz}\n---\nA person.",
        literature: false,
    },
    {
        file: "c/Other.md",
        rel: "c/Other.md",
        address: "place-other",
        front: {
            type: "place",
            shortcode: "other",
            name: { full: "Other" },
            data: { packFolder: "elsewhere" },
        },
        names: [{ name: "Other", kind: "full" }],
        text: "---\nname: {full: Other}\n---\nElsewhere.",
        literature: false,
    },
];

const run = (lexText = PAGE, tree = TREE) =>
    analyse({ lexFile: "Lex.md", lexText, tree, earth: null }).findings.map(format);
const errors = (lexText, tree) => run(lexText, tree).filter((l) => l.includes(": error: "));
const warnings = (lexText, tree) => run(lexText, tree).filter((l) => l.includes(": warning: "));

function edited(from, to, text = PAGE) {
    assert(text.includes(from), `the fixture no longer holds "${from}"`);
    return text.replace(from, to);
}

test("the fixture page is read whole", () => {
    const page = readPage(PAGE);
    assert.deepEqual(page.problems, []);
    assert.deepEqual(
        page.tongues.map((t) => t.tag),
        ["par", "dau", "translation", "kept"],
    );
    assert.equal(page.tongues[0].address, "skill-parlng");
    assert.deepEqual(page.fields, ["Water", "Kin"]);
    assert.equal(page.words.length, 7);
    assert.equal(page.family.rows.length, 3);
    assert.equal(page.family.daughters[0].changes[0].step, 1);
    assert.equal(page.register.length, 3);
    assert.deepEqual(page.retired, [{ name: "Kathra", instead: "Kātān" }]);
    assert.equal(page.clusters, 2);
    assert.deepEqual(page.edges.vowelPairs, ["ai"]);
});

test("the fixture page agrees with its own rules, and warns on the name it does not reach", () => {
    assert.deepEqual(errors(), []);
    assert.deepEqual(warnings(), [
        "Lex.md:135:1: warning: Tiraz is a dau name the lexicon does not reach",
    ]);
});

test("tables are read with their offsets", () => {
    const t = tables("| A | B |\n| - | - |\n| 1 | 2 |", 10);
    assert.deepEqual(t[0].header, ["A", "B"]);
    assert.equal(t[0].rows[0].offset, 30);
});

test("the engine: environments, parsing, order and simultaneity", () => {
    const at = (env, text, from) => {
        const s = text.indexOf(from);
        return ENVIRONMENTS[env](text, s, s + from.length);
    };
    assert(at("between vowels", "aka", "k"));
    assert(!at("between vowels", "arka", "k"));
    assert(at("before two consonants", "akra", "k") === false);
    assert(at("before two consonants", "atkra", "t"));
    assert(at("after a nasal", "angk", "k"));
    assert(at("not at the end of a word", "aka", "k"));
    assert.match(parseChange("p to f", "anywhere").problem, /not two code spans/);
    assert.match(parseChange("`p` > `f`", "in a stressed syllable").problem, /not an environment/);
    assert.equal(applyChange("akaka", { from: "k", to: "p", where: "between vowels" }), "apapa");
    const { changes } = changesFrom(
        tables(
            "| Step | Change | Where |\n|-|-|-|\n| 2 | `os` > `o` | at the end of a word |\n| 1 | `p` > `b` | between vowels |",
        )[0],
    );
    assert.deepEqual(
        changes.map((c) => c.step),
        [1, 2],
    );
    assert.equal(derive("Hapos", changes).form, "Habo");
});

test("a word under an unlisted field, class or tongue is refused", () => {
    assert.match(errors(edited("### Kin\n", "### Kith\n"))[0], /stands under "Kith"/);
    assert.match(errors(edited("| `kātān` | `n` |", "| `kātān` | `x` |"))[0], /class `x`/);
    assert.match(
        errors(
            edited(
                "| `tiraz` | `n` | house  | —          | —        | `dau` |",
                "| `tiraz` | `n` | house  | —          | —        | `zzz` |",
            ),
        )[0],
        /`zzz`, which is not a tongue/,
    );
});

test("a word that breaks the sound rules is refused with the rule named", () => {
    const found = errors(edited("| `kāta`  | `n` | water", "| `kātz`  | `n` | water"));
    assert(
        found.some((l) => /`kātz` writes `z`, not in the letter table/.test(l)),
        found.join("\n"),
    );
    assert.match(
        errors(edited("| `kāta`  | `n` | water", "| `kāt`  | `n` | water"))[0],
        /closes on `t`/,
    );
    assert.match(
        errors(edited("| `kāta`  | `n` | water", "| `skāta`  | `n` | water"))[0],
        /opens on `sk`/,
    );
    assert.match(
        errors(edited("| `kāta`  | `n` | water", "| `kāntra`  | `n` | water"))[0],
        /runs 3 consonants/,
    );
    assert.match(
        errors(edited("| `kāta`  | `n` | water", "| `kāua`  | `n` | water"))[0],
        /sets `āu` together/,
    );
});

test("a consonant that may carry a syllable counts as a vowel between consonants", () => {
    const plainPage = readPage(PAGE);
    assert.deepEqual(plainPage.edges.syllabic, []);
    assert.match(soundProblems("trnak", plainPage, "par").join("\n"), /opens on `trn`/);
    const page = readPage(
        PAGE.replace(
            "| Vowels that may stand together  | \`ai\`           |",
            "| Vowels that may stand together  | \`ai\`           |\n| Consonants that may carry a syllable | \`r\`, \`n\` |",
        ),
    );
    assert.deepEqual(page.edges.syllabic, ["r", "n"]);
    // `trnan`: `t`, a syllable on `r`, then `nan`.
    assert.deepEqual(soundProblems("trnan", page, "par"), []);
    // `ktrn` closes on a syllable on `n` after `ktr`, which opens on a pair the page does not list.
    assert.match(soundProblems("ktrn", page, "par").join("\n"), /opens on `kt`/);
    // After a vowel the consonant is only a consonant: `kartta` runs `rtt` together.
    assert.match(soundProblems("kartta", page, "par").join("\n"), /runs 3 consonants/);
});

test("a Built from cell that does not recompute, or names an unknown part, is refused", () => {
    assert.match(
        errors(
            edited(
                "| `kātān` | `n` | a waterman  | `kāta` + `-an` |",
                "| `kātān` | `n` | a waterman  | `kāta` + `-is` |",
            ),
        )[0],
        /does not recompute: its parts make `kātis`/,
    );
    assert.match(
        errors(
            edited(
                "| `kātān` | `n` | a waterman  | `kāta` + `-an` |",
                "| `kātān` | `n` | a waterman  | `kāt` + `-an` |",
            ),
        )[0],
        /built from `kāt`, which is no word or root/,
    );
    assert.match(
        errors(
            edited(
                "| `kātān` | `n` | a waterman  | `kāta` + `-an` |",
                "| `kātān` | `n` | a waterman  | `kāta` + `-um` |",
            ),
        )[0],
        /`-um`, a suffix the page does not list/,
    );
});

test("joining and suffix rules build the forms the page states", () => {
    const page = readPage(PAGE);
    assert.equal(builtForm("`kāta` + `ana`", page).made, "kātāna");
    assert.equal(builtForm("`kāta` + `-an`", page).made, "kātān");
    assert.equal(builtForm("`tira-` + `-is`", page).made, "tiris");
    assert.equal(builtForm("`kāta` + `-is`", page).made, "kātis");
    assert.equal(respell("Cāta", page.spellings), "kāta");
    assert.deepEqual(soundProblems("trakan", page, "par"), []);
});

test("a daughter root that does not follow from the parent is refused", () => {
    assert.match(
        errors(edited("| `tiras` | `tiraz` | house |", "| `tiras` | `tiras` | house |"))[0],
        /Daughter `tiras` does not follow from `tiras`: the changes make `tiraz`/,
    );
});

test("a change table with an unknown environment is an error at its row", () => {
    assert.match(
        errors(
            edited(
                "| 2    | `s` > `z` | at the end of a word |",
                "| 2    | `s` > `z` | under stress |",
            ),
        )[0],
        /"under stress" is not an environment/,
    );
});

test("a name in scope and not in the register is an error on its note", () => {
    const tree = [
        ...TREE,
        {
            ...TREE[0],
            file: "d/Spring.md",
            rel: "d/Spring.md",
            address: "place-spring",
            front: {
                type: "place",
                shortcode: "spring",
                name: { full: "Sana" },
                data: { packFolder: "wells" },
            },
            names: [{ name: "Sana", kind: "full" }],
            text: "---\nname: {full: Sana}\n---\n",
        },
    ];
    const found = errors(PAGE, tree);
    assert.deepEqual(found, [
        "d/Spring.md:2:14: error: Sana is in scope and not in the register under place-spring",
    ]);
    assert.deepEqual(
        analyse({ lexFile: "Lex.md", lexText: PAGE, tree, earth: null }).missing.map((m) => m.name),
        ["Sana"],
    );
});

test("a register row naming a missing note, a wrong name, an undeclared tag or a bad derivation is refused", () => {
    assert.match(
        errors(
            edited(
                "[[place-well\\|Well]]    | `translation`",
                "[[place-pond\\|Pond]]    | `translation`",
            ),
        )[0],
        /names place-pond, which no note carries/,
    );
    assert.match(
        errors(edited("| **The Well**  |", "| **The Pond**  |"))[0],
        /The Pond is registered under place-well, whose note does not carry that name/,
    );
    const bad = errors(
        edited(
            "| **Kātān**     | [[place-well\\|Well]]    | `par`       | `kāta` + `-an`  |",
            "| **Kātān**     | [[place-well\\|Well]]    | `par`       | `kāta` + `-is`  |",
        ),
    );
    assert.match(bad[0], /Kātān does not recompute: its parts make `kātis`/);
    const tag = errors(
        edited(
            "| **The Well**  | [[place-well\\|Well]]    | `translation` |",
            "| **The Well**  | [[place-well\\|Well]]    | `elvish` |",
        ),
    );
    assert.match(tag[0], /tag `elvish`, which the Tongues table does not declare/);
});

test("a name in a tongue that breaks a sound rule is a warning, not an error", () => {
    const text = edited(
        "| **Kātān**     | [[place-well\\|Well]]    | `par`       | `kāta` + `-an`  |",
        "| **Kātān**     | [[place-well\\|Well]]    | `par`       | —  |",
    );
    const found = warnings(text);
    assert(
        found.some((l) => /Kātān is a par name the lexicon does not reach/.test(l)),
        found.join("\n"),
    );
    const broken = warnings(
        edited(
            "| **Tiraz**     | [[being-tiraz\\|Tiraz]]  | `dau`       | —                   |",
            "| **Tiraz**     | [[being-tiraz\\|Tiraz]]  | `par`       | —                   |",
        ),
    );
    assert(
        broken.some((l) => /Tiraz writes `z`, not in the letter table/.test(l)),
        broken.join("\n"),
    );
});

test("a retired form written in a note is an error where it stands, and the table itself is not read", () => {
    const tree = [
        ...TREE,
        {
            file: "e/Old.md",
            rel: "e/Old.md",
            address: "lore-old",
            front: { type: "lore", shortcode: "old", name: { full: "Old" }, data: {} },
            names: [{ name: "Old", kind: "full" }],
            text: "---\ntype: lore\n---\nThe priests of Kathra.",
            literature: false,
        },
    ];
    const found = errors(PAGE, tree).filter((l) => /retired/.test(l));
    assert.deepEqual(found, [
        "e/Old.md:4:16: error: `Kathra` is a retired form; the setting writes `Kātān`",
    ]);
});

test("a GM-only note is in a page's scope only by its own address", () => {
    const page = {
        scope: [
            { kind: "culture", values: ["tanvuriclt"] },
            { kind: "address", values: ["thalorna-note-doc-named"] },
        ],
    };
    const note = (address, tags) => ({
        address,
        rel: "x.md",
        front: { type: "doc", tags, data: { culture: "tanvuriclt" } },
    });
    const none = new Set();
    assert.equal(inScope(note("thalorna-note-doc-open", []), page, none), true);
    assert.equal(inScope(note("thalorna-note-doc-secret", ["gm"]), page, none), false);
    assert.equal(inScope(note("thalorna-note-doc-named", ["gm"]), page, none), true);
});
