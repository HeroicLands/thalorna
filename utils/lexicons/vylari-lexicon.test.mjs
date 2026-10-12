/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
    CONFIG,
    LEXICON,
    NOTE,
    analyseTongue,
    endingTables,
    paradigmModels,
    readTree,
} from "./vylari-lexicon.mjs";
import { listedNames, readLexicon } from "./aureldian-core.mjs";

/** A lexicon small enough to read whole, in the shape the guard expects. */
const FIXTURE_LEXICON = `---
shortcode: vylarilexcn
name: {full: Vylari Lexicon}
type: doc
subType: reference
---

## How to read the tables

### Classes

| Class | Meaning |
| ----- | ------- |
| \`n\`   | a noun  |
| \`adj\` | a word describing a noun |

### Fields

| Field | What it holds |
| ----- | ------------- |
| Oath and song | the sample field |

## Sounds and spelling

### Letters

| Letter | Kind | Sounds like |
| --- | --- | --- |
| \`p\`, \`t\`, \`k\`, \`b\`, \`d\`, \`g\`, \`ph\`, \`th\`, \`kh\`, \`m\`, \`n\`, \`l\`, \`r\`, \`s\`, \`z\`, \`v\`, \`h\`, \`x\` | consonant | as written |
| \`a\`, \`e\`, \`i\`, \`o\`, \`u\` | short vowel | short |
| \`â\`, \`ê\`, \`î\`, \`ô\`, \`û\` | long vowel | long |
| \`ai\`, \`au\`, \`ei\`, \`oi\` | diphthong | two vowels in one syllable |

### Ancient letters

| Letter | Kind | Sounds like |
| --- | --- | --- |
| \`p\`, \`t\`, \`k\`, \`b\`, \`d\`, \`g\`, \`ph\`, \`th\`, \`kh\`, \`dh\`, \`gh\`, \`t'\`, \`k'\`, \`d'\`, \`g'\`, \`m\`, \`n\`, \`l\`, \`r\`, \`s\`, \`z\`, \`w\`, \`y\`, \`h\`, \`x\` | consonant | as written |
| \`a\`, \`e\`, \`i\`, \`o\`, \`u\` | short vowel | short |
| \`â\`, \`ê\`, \`î\`, \`ô\`, \`û\` | long vowel | long |
| \`ai\`, \`au\`, \`ei\`, \`oi\` | diphthong | two vowels in one syllable |

### Word edges

| Edge | Sounds |
| --- | --- |
| Pairs that may open a word | \`pr\`, \`tr\`, \`kr\`, \`dr\`, \`gr\`, \`br\`, \`thr\`, \`khr\` |
| Consonants that close a word | \`s\`, \`n\`, \`r\`, \`l\`, \`x\` |

### Clusters

| Rule | Count |
| --- | --- |
| Most consonants together inside a word | 3 |

### Stress

| Rule | Value |
| --- | --- |
| Stress falls on | by weight |

## From ancient to imperial

### Sound changes

| Step | Change | Where |
| --- | --- | --- |
| 1 | \`t' d' k' g'\` → \`t d k g\` | anywhere |
| 2 | \`dh\` → \`z\`; \`gh\` → \`g\` | anywhere |
| 3 | \`w\` → \`v\` | anywhere |
| 4 | \`b\` → \`v\` | between vowels |

## Building words

### Class I endings

| Case | Singular | Dual | Plural |
| --- | --- | --- | --- |
| nominative | \`-â\` | \`-âu\` | \`-ê\` |
| accusative | \`-ân\` | \`-âu\` | \`-âs\` |

### Suffixes

| Suffix | Stem | Makes |
| --- | --- | --- |
| \`-ândis\` | replaces the final vowel | a house name, "those of" |

### Given names

| Ending | Who | Note |
| --- | --- | --- |
| \`-ôs\` | a man | class II |
| \`-â\` | a woman | class I |

## Words

### Oath and song

| Form | Ancient | Class | Gloss | Built from | Attested |
| --- | --- | --- | --- | --- | --- |
| \`zaron\` | \`dharon\` | n | oath | — | — |
| \`sôrimâ\` | \`sôrimâ\` | n | song | — | [[skill-vylarilng\\|Vylari Language]] |
| \`gôr\` | \`ghôr\` | n | a founder's name | — | — |
| \`gôrândis\` | \`ghôrândis\` | n | those of Gôr | \`gôr\` + \`-ândis\` | — |
| \`karôs\` | \`k'arôs\` | n | kept fire | — | — |

## Shared roots

### Daughters

| Daughter | Lexicon |
| --- | --- |
| Áelendi | \`doc-aelendlexcn\` |

| Ancient | Imperial | Áelendi | Gloss |
| --- | --- | --- | --- |
| \`*dharon\` | \`zaron\` | \`dháron\` | oath |
| \`*k'arôs\` | \`karôs\` | \`k'ar\` | kept fire |

## Attested names

### Tongues

| Tongue | Meaning |
| --- | --- |
| \`vylari\` | a Vylari word |
| \`translation\` | a name given in the language of these pages |

### Names

| Name | Note | Tongue | Built from |
| --- | --- | --- | --- |
| **Vylari Language** | [[skill-vylarilng\\|Vylari Language]] | \`translation\` | — |
| **Vylari** | [[skill-vylarilng\\|Vylari Language]] | \`vylari\` | — |
| **Gôrândis** | [[being-gorandis\\|Gôrândis]] | \`vylari\` | \`gôr\` + \`-ândis\` |
| **Sôrimâ** | [[being-gorandis\\|Gôrândis]] | \`vylari\` | \`sôrimâ\` |

### Retired names

| Name | Instead |
| --- | --- |
`;

const FIXTURE_NOTE = `---
shortcode: vylarilng
name: {full: Vylari Language, aliases: [Vylari]}
type: skill
---

## Grammar Notes

| _sôrimâ_, class I | Singular | Dual | Plural |
| --- | --- | --- | --- |
| nominative | _sôrimâ_ | _sôrimâu_ | _sôrimê_ |
| accusative | _sôrimân_ | _sôrimâu_ | _sôrimâs_ |

## Male Given Names

Karôs, Zenôthos

## Female Given Names

Sôrimâ

## Clan Names

Gôrândis
`;

const AELENDI_LEXICON = `---
shortcode: aelendlexcn
name: {full: Áelendi Lexicon}
type: doc
---

### Classes

| Class | Meaning |
| --- | --- |
| \`n\` | a noun |

### Fields

| Field | What it holds |
| --- | --- |
| Oath | the sample field |

### Sources

| Source | From | By | Meaning |
| --- | --- | --- | --- |
| \`*\` | \`doc-vylarilexcn\` | ### Sound changes | inherited from ancient Vylari |

### Letters

| Letter | Kind | Sounds like |
| --- | --- | --- |
| \`t\`, \`th\`, \`t'\`, \`d\`, \`dh\`, \`d'\`, \`k\`, \`kh\`, \`k'\`, \`g\`, \`gh\`, \`g'\`, \`s\`, \`m\`, \`n\`, \`l\`, \`r\` | consonant | as written |
| \`a\`, \`e\`, \`i\`, \`o\`, \`u\` | short vowel | short |
| \`á\`, \`é\`, \`í\`, \`ó\`, \`ú\` | stressed vowel | short, stressed |
| \`â\`, \`ê\`, \`î\`, \`ô\`, \`û\` | long vowel | long |

### Word edges

| Edge | Sounds |
| --- | --- |
| Pairs that may open a word | \`dr\`, \`kr\` |
| Consonants that close a word | \`n\`, \`r\`, \`l\`, \`s\`, \`th\`, \`dh\`, \`k\`, \`t\` |

### Clusters

| Rule | Count |
| --- | --- |
| Most consonants together inside a word | 3 |

### Stress

| Rule | Value |
| --- | --- |
| Stress falls on | first syllable |

### Sound changes

| Step | Change | Where |
| --- | --- | --- |
| 1 | \`p ph b w h\` → \`—\` | anywhere |
| 2 | \`ôs\` → \`—\`; \`â\` → \`a\` | word end |
| 3 | stress moves to the first syllable | — |
| 4 | acute on a stressed short vowel, circumflex on a long one of a word of two syllables or more | — |

## Words

### Oath

| Form | Class | Gloss | Source | Built from | Attested |
| --- | --- | --- | --- | --- | --- |
| \`dháron\` | n | oath | \`*dharon\` | — | — |
| \`k'ar\` | n | kept fire | \`*k'arôs\` | — | — |

## Attested names

### Tongues

| Tongue | Meaning |
| --- | --- |
| \`aelendi\` | an Áelendi word |

### Names

| Name | Note | Tongue | Built from |
| --- | --- | --- | --- |

### Retired names

| Name | Instead |
| --- | --- |
`;

/** A content tree holding only what the fixtures name. */
function fakeTree(withAelendi = true) {
    const notes = new Map();
    const add = (address, rel, names, extra = {}) => {
        const entry = {
            address,
            file: `assets/content/${rel}`,
            rel,
            text: `---\nname: {full: ${names[0]}}\n---\n${names.join(" ")}`,
            names: new Set(
                names.map((n) => n.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "")),
            ),
            mine: names.map((name, i) => ({ name, kind: i === 0 ? "full" : "alias" })),
            type: address.split("-")[0],
            given: null,
            gender: null,
            culture: null,
            lore: [],
            tags: [],
            ownNames: names,
            ...extra,
        };
        notes.set(address, entry);
    };
    add("skill-vylarilng", "Skills/Languages/Vylari.md", ["Vylari Language", "Vylari"]);
    add("being-gorandis", "Characters/Heroes_and_Knaves/Gorandis.md", ["Sôrimâ", "Gôrândis"], {
        culture: "vylarianclt",
        given: "Sôrimâ",
        gender: "female",
        mine: [
            { name: "Sôrimâ", kind: "given" },
            { name: "Gôrândis", kind: "clan" },
        ],
    });
    add("doc-vylarilexcn", "Lore/Vylari_Lexicon.md", ["Vylari Lexicon"], { text: FIXTURE_LEXICON });
    if (withAelendi)
        add("doc-aelendlexcn", "Lore/Aelendi_Lexicon.md", ["Áelendi Lexicon"], {
            text: AELENDI_LEXICON,
        });
    return { root: "fixture", notes, all: [...notes.values()], texts: [] };
}

const run = (lex = FIXTURE_LEXICON, note = FIXTURE_NOTE, tree = fakeTree()) =>
    analyseTongue(CONFIG, { note, lex, tree }).findings;
const errors = (...args) => run(...args).filter((line) => line.includes(": error: "));
const warnings = (...args) => run(...args).filter((line) => line.includes(": warning: "));

/** The fixture with one literal replaced, failing loudly when it is absent. */
function edited(from, to, text = FIXTURE_LEXICON) {
    assert(text.includes(from), `the fixture no longer holds "${from}"`);
    return text.replace(from, to);
}

test("the fixture lexicon and page pass every check", () => {
    assert.deepEqual(errors(), []);
    const { problems } = readLexicon(FIXTURE_LEXICON);
    assert.deepEqual(problems, []);
});

test("an imperial form that the changes do not give is an error, and a mark-only difference a warning", () => {
    assert.match(
        errors(edited("| `zaron` | `dharon` |", "| `daron` | `dharon` |"))[0],
        /not what the changes give \("zaron"\)/,
    );
    assert.match(
        warnings(edited("| `zaron` | `dharon` |", "| `zâron` | `dharon` |"))[0],
        /differs in its marks/,
    );
});

test("an ancient form outside the ancient letters is an error", () => {
    assert.match(
        errors(edited("| `zaron` | `dharon` |", "| `zaron` | `dharoñ` |"))[0],
        /not a letter of ancient Vylari/,
    );
});

test("a form outside the imperial letters, or opening or closing wrongly, is an error", () => {
    assert.match(
        errors(edited("| `karôs` | `k'arôs` |", "| `k'arôs` | `k'arôs` |"))[0],
        /not a letter of Vylari/,
    );
    assert.match(errors(edited("| `gôr` | `ghôr` |", "| `gôrt` | `ghôr` |"))[0], /closes on "rt"/);
});

test("a built-from cell that does not give the form is an error", () => {
    assert.match(
        errors(edited("`gôr` + `-ândis`", "`gôr` + `-âtês`"))[0],
        /not a suffix the lexicon declares/,
    );
    assert.match(
        errors(edited("| `gôrândis` | `ghôrândis`", "| `gôrandis` | `ghôrândis`")).join("\n"),
        /not what its parts give/,
    );
});

test("a paradigm cell the ending table does not give is an error on the page", () => {
    const broken = FIXTURE_NOTE.replace("_sôrimâu_ | _sôrimê_", "_sôrimâu_ | _sôrimâr_");
    const found = errors(FIXTURE_LEXICON, broken);
    assert.equal(found.length, 1);
    assert.match(
        found[0],
        /nominative plural of `sôrimâ` is "sôrimâr", and the ending table gives "sôrimê"/,
    );
    assert.deepEqual(paradigmModels(FIXTURE_NOTE), ["sôrimâ, class i"]);
    assert.equal(endingTables(FIXTURE_LEXICON).get("i").get("accusative").plural, "âs");
});

test("a shared root is checked through the daughter's own table", () => {
    assert.match(
        errors(edited("| `*k'arôs` | `karôs` | `k'ar` |", "| `*k'arôs` | `karôs` | `kar` |"))[0],
        /Áelendi reflex of `\*k'arôs` is written "kar", and the Áelendi changes give "k'ar"/,
    );
    assert.match(
        errors(edited("| `*dharon` | `zaron` |", "| `*dharon` | `zâron` |"))[0],
        /imperial form "zâron", and the lexicon row gives "zaron"/,
    );
    assert.match(
        errors(edited("| `*dharon` | `zaron` |", "| `*dhoron` | `zaron` |"))[0],
        /ancient form of no lexicon row/,
    );
    assert.match(
        warnings(FIXTURE_LEXICON, FIXTURE_NOTE, fakeTree(false)).join("\n"),
        /Áelendi \(doc-aelendlexcn\) lexicon cannot be read/,
    );
});

test("a daughter that takes another case is checked from that case", () => {
    const accusative = edited(
        "| Daughter | Lexicon |\n| --- | --- |\n| Áelendi | `doc-aelendlexcn` |",
        "| Daughter | Lexicon | Takes | Through |\n| --- | --- | --- | --- |\n| Áelendi | `doc-aelendlexcn` | the accusative | — |",
        edited(
            "| `sôrimâ` | `sôrimâ` | n | song |",
            "| `sôrimâ` | `sôrimâ` | n I f | song |",
            edited(
                "| `*k'arôs` | `karôs` | `k'ar` | kept fire |",
                "| `*k'arôs` | `karôs` | `k'ar` | kept fire |\n| `*sôrimâ` | `sôrimâ` | `sôrima` | song |",
            ),
        ),
    );
    const found = errors(
        accusative.replace("| `n` | a noun |", "| `n` | a noun |\n| `n I f` | a noun of class I |"),
    );
    assert.match(
        found.join("\n"),
        /Áelendi reflex of `\*sôrimâ` is written "sôrima", and the Áelendi changes give "sôrimân"/,
    );
});

test("the register covers every name in scope and names real notes", () => {
    const missing = errors(
        edited("| **Sôrimâ** | [[being-gorandis\\|Gôrândis]] | `vylari` | `sôrimâ` |\n", ""),
    );
    assert.match(missing[0], /"Sôrimâ" is a Vylari name the register does not register/);
    assert.match(
        errors(
            edited(
                "[[being-gorandis\\|Gôrândis]] | `vylari` | `gôr`",
                "[[being-nobody\\|Nobody]] | `vylari` | `gôr`",
            ),
        )[0],
        /which no note has/,
    );
    assert.match(
        errors(edited("| `translation` | — |", "| `greek` | — |"))[0],
        /tongue "greek", which the register does not declare/,
    );
});

test("a register row may name a note that writes the name in bold in its prose", () => {
    const row = "| **Sôrimâ** | [[being-gorandis\\|Gôrândis]] | `vylari` | `sôrimâ` |\n";
    const withPerson = edited(
        row,
        `${row}| **Sôrimâ Gôrândis** | [[place-harbor\\|Harbor]] | \`vylari\` | \`sôrimâ\` · \`gôr\` + \`-ândis\` |\n`,
    );
    const treeWith = (body) => {
        const tree = fakeTree();
        const entry = {
            address: "place-harbor",
            file: "assets/content/Regions/Harbor.md",
            rel: "Regions/Harbor.md",
            text: `---\nname: {full: Harbor}\n---\n${body}`,
            names: new Set(["harbor"]),
            mine: [{ name: "Harbor", kind: "full" }],
            type: "place",
            given: null,
            gender: null,
            culture: null,
            lore: [],
            tags: [],
            ownNames: ["Harbor"],
        };
        tree.notes.set(entry.address, entry);
        tree.all.push(entry);
        return tree;
    };
    assert.deepEqual(
        errors(
            withPerson,
            FIXTURE_NOTE,
            treeWith("The keeper, **Sôrimâ Gôrândis**, banks the fire."),
        ),
        [],
    );
    assert.match(
        errors(
            withPerson,
            FIXTURE_NOTE,
            treeWith("The keeper, Sôrimâ Gôrândis, banks the fire."),
        ).join("\n"),
        /\*\*Sôrimâ Gôrândis\*\* is not a name of \[\[place-harbor\]\]/,
    );
});

test("a name list that breaks the sound rules is one counted warning per list", () => {
    const found = warnings(
        FIXTURE_LEXICON,
        FIXTURE_NOTE.replace("Karôs, Zenôthos", "Karôs, Zenôthos, Nîkôlaos, Xýstrôs"),
    );
    assert.match(
        found.join("\n"),
        /2 of 4 names under "## Male Given Names" break the Vylari sound rules/,
    );
    assert.equal(listedNames(FIXTURE_NOTE, "## Male Given Names").length, 2);
});

test("a retired name written in the tree is an error where it is written", () => {
    const tree = fakeTree();
    tree.texts = [
        {
            file: "assets/content/Lore/Some_Note.md",
            text: "The city of Tibur stands.",
            literature: false,
        },
    ];
    const found = analyseTongue(CONFIG, {
        note: FIXTURE_NOTE,
        lex: edited(
            "| Name | Instead |\n| --- | --- |\n",
            "| Name | Instead |\n| --- | --- |\n| `Tibur` | `Tîvûra` |\n",
        ),
        tree,
    }).findings;
    assert.match(
        found.find((l) => l.includes("Some_Note")),
        /"Tibur" is a retired name; the setting writes Tîvûra/,
    );
});

test("the real Vylari pages obey their own rules", { skip: !fs.existsSync(LEXICON) }, () => {
    const note = fs.readFileSync(NOTE, "utf8");
    const lex = fs.readFileSync(LEXICON, "utf8");
    const found = analyseTongue(CONFIG, { note, lex, tree: readTree() }).findings;
    assert.deepEqual(
        found.filter((line) => line.includes(": error: ")),
        [],
    );
});
