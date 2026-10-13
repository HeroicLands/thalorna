/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
    CONTENT,
    DUNHARI,
    LEXICON,
    check,
    checkWords,
    corpusNotes,
    derive,
    dunhariForms,
    earthHits,
    join,
    lexiconFrom,
    listDirs,
    loadEarth,
    parse,
    rulesFrom,
    shape,
} from "./khazryn-lexicon.mjs";

/** A language note in the shape the guard reads. */
function tongueNote({
    consonants,
    vowels,
    marks = "",
    onsets = "none",
    codas,
    finals,
    doubled = "none",
    pairs = "never",
    initial = "no",
    signature = "",
    extra = "",
    joins,
    suffixHeader = "| Suffix | Sense |\n| --- | --- |",
    suffixes,
}) {
    return `---
shortcode: x
---

Intro.

## Sounds

### Consonants

| Letter | Sound |
| --- | --- |
${consonants.map((c) => `| \`${c}\` | a sound |`).join("\n")}

### Vowels

| Letter | Sound |
| --- | --- |
${vowels.map((v) => `| \`${v}\` | a sound |`).join("\n")}
${marks}
### Syllables

| Rule | Forms |
| --- | --- |
| Onsets | ${onsets} |
| Codas | ${codas} |
| Finals | ${finals} |
| Doubled | ${doubled} |
| Vowel pairs | ${pairs} |
| Initial vowel | ${initial} |
${signature ? `| Signature | ${signature} |\n` : ""}${extra}
### Joins

| Meeting | Rule | Letters |
| --- | --- | --- |
${joins}

### Suffixes

${suffixHeader}
${suffixes}

## Elsewhere

Text.
`;
}

const TOY = tongueNote({
    consonants: ["p", "t", "k", "m", "n", "l", "r", "s"],
    vowels: ["a", "i", "u", "á"],
    marks: `
### Marks

| Mark | Letters | Kind | Limit |
| --- | --- | --- | --- |
| acute | \`á\` | stress | one in a word |
`,
    onsets: "`tr`",
    codas: "`n` `l` `r` `m`",
    finals: "`n` `r`",
    doubled: "`ll`",
    joins: "| `V+V` | `drop` | |\n| `V+C` | `double` | `l` |\n| `C+C` | `merge` | |",
    suffixes: "| `-i` | a people |\n| `-un` | a place |",
});

const OTHER = tongueNote({
    consonants: ["p", "t", "k", "b", "d", "sh"],
    vowels: ["a", "e", "o"],
    codas: "any",
    finals: "any",
    initial: "yes",
    signature: "`sh` `o` `k`",
    joins: "| `V+V` | `insert` | `d` |",
    suffixes: "| `-od` | a camp |",
});

/** A lexicon note in the shape the guard reads. */
function lexicon({
    toyStems,
    otherStems,
    register,
    senses = "`water` `road`",
    derived = "",
    older = "",
}) {
    return `---
shortcode: lex
type: doc
---

## Tongues

| Tongue | Tag | Note |
| --- | --- | --- |
| Toy | \`toy\` | [[skill-toy\\|Toy]] |
| Other | \`other\` | [[skill-other\\|Other]] |

## Scope

| Kind | Value |
| --- | --- |
| folder | \`toyfolder\` |
| parent | \`toyregion\` |
| culture | \`toyclt\` |

## Required senses

Every tongue covers ${senses}.

## Stems

### Toy

| Stem | Sense |
| --- | --- |
${toyStems}

### Other

| Stem | Sense |
| --- | --- |
${otherStems}

${
    derived &&
    `## Derived words

| Word | Tongue | Gloss | Derivation |
| --- | --- | --- | --- |
${derived}
`
}
${
    older &&
    `## Names older than the rules

| Name | Kind |
| --- | --- |
${older}
`
}
## Attested names

| Name | Address | Language | Derivation |
| --- | --- | --- | --- |
${register}

### Language tags

| Tag | Meaning |
| --- | --- |
| toy | a Toy name |
| other | an Other name |
| gloss | a glossed name |
| pending | awaiting coinage |
| faith | held for the faith pass |
| older | a name older than the rules |
`;
}

const GOOD = {
    toyStems: "| `ta` | water |\n| `lum` | spring, road |\n| `kirun` | salt |",
    otherStems: "| `bedo` | water, road |\n| `poke` | horse |",
    register: [
        "| Tallumi | [[place-tallumi\\|Tallumi]] | `toy` | `ta` + `lum` + `-i` |",
        "| Tallumi Road | [[place-tallumi\\|Tallumi]] | `gloss` | a glossed name on `Tallumi` |",
        "| Old Place | [[place-old\\|Old Place]] | `pending` | — |",
        "| Old Place | [[place-site\\|Old Place]] | `pending` | — |",
    ].join("\n"),
};

const NOTES = [
    {
        file: "a.md",
        text: "---\nx\n---\nTallumi",
        address: "place-tallumi",
        fm: {
            name: { full: "Tallumi", aliases: ["Tallumi Road"] },
            data: { packFolder: "toyfolder" },
        },
    },
    {
        file: "b.md",
        text: "---\nx\n---\n",
        address: "place-old",
        fm: { name: { full: "Old Place" }, data: { culture: "toyclt" } },
    },
    { file: "c.md", text: "", address: "place-elsewhere", fm: { name: "Elsewhere", data: {} } },
    {
        file: "d.md",
        text: "",
        address: "place-site",
        fm: { name: "Old Place", data: { parents: ["toyregion"] } },
    },
];

const tongueNotes = new Map([
    ["skill-toy", { file: "toy.md", text: TOY }],
    ["skill-other", { file: "other.md", text: OTHER }],
]);
const NO_EARTH = { lists: new Map(), morphemes: [] };
const run = (overrides = {}, extra = {}) =>
    check({
        lexText: lexicon({ ...GOOD, ...overrides }),
        tongueNotes,
        notes: NOTES,
        earth: NO_EARTH,
        dunhari: new Set(),
        lexFile: "lex.md",
        ...extra,
    });
const errors = (findings) => findings.filter((f) => f.severity === "error").map((f) => f.message);

const toy = rulesFrom(TOY);
const other = rulesFrom(OTHER);

test("the rules are read off the note's tables", () => {
    assert.deepEqual(toy.syllables.onsets, ["tr"]);
    assert.deepEqual(toy.syllables.codas, ["n", "l", "r", "m"]);
    assert.equal(toy.syllables.initialVowel, false);
    assert.equal(other.syllables.initialVowel, true);
    assert.deepEqual(other.syllables.finals, other.consonants);
    assert.deepEqual(
        toy.suffixes.map((s) => s.form),
        ["-i", "-un"],
    );
    assert.equal(toy.joins.get("V+C").rule, "double");
});

test("sound words keep the shape and broken ones are refused with a reason", () => {
    for (const w of ["tallumi", "trukan", "pinta", "lumán"]) assert.deepEqual(shape(w, toy), [], w);
    const reasons = (w) => shape(w, toy).join("; ");
    assert.match(reasons("tabi"), /outside the inventory/);
    assert.match(reasons("atu"), /starts with a vowel/);
    assert.match(reasons("tamik"), /cannot end a word/);
    assert.match(reasons("tammu"), /not a doubled letter/);
    assert.match(reasons("taup"), /two vowels together/);
    assert.match(reasons("tásumá"), /more than one stress mark/);
    assert.match(reasons("tapku"), /cannot stand between two vowels/);
    assert.match(reasons("pkatu"), /cannot start a word/);
    const strict = rulesFrom(
        OTHER.replace("| Initial vowel | yes |", "| Initial vowel | yes |\n| Final vowel | no |"),
    );
    assert.match(shape("bedo", strict).join(";"), /ends in a vowel/);
    assert.deepEqual(shape("bedo", strict, { bound: true }), []);
    assert.deepEqual(shape("bado", strict, { bound: false }).length, 1);
    const signed = rulesFrom(
        OTHER.replace(
            "| Initial vowel | yes |",
            "| Initial vowel | yes |\n| Signature | `sh` `o` |",
        ),
    );
    assert.deepEqual(shape("bade", signed, { bound: true }), [
        "carries none of the tongue's signature sounds",
    ]);
    assert.deepEqual(shape("shabe", signed, { bound: true }), []);
    assert.deepEqual(shape("bade", signed), []);
    assert.deepEqual(shape("shabo", other), []);
    assert.deepEqual(shape("aboket", other), []);
});

test("the joins drop, double, insert and merge as the note says", () => {
    assert.equal(join("ta", "lum", toy), "tallum");
    assert.equal(join("ta", "i", toy), "ti");
    assert.equal(join("kirun", "nu", toy), "kirunu");
    assert.equal(join("bedo", "a", other), "bedoda");
    assert.equal(derive(["ta", "lum", "-i"], toy), "tallumi");
    const between = rulesFrom(
        TOY.replace("| Meeting | Rule | Letters |", "| Meeting | Rule | Letters | Where |")
            .replace("| --- | --- | --- |\n| `V+V`", "| --- | --- | --- | --- |\n| `V+V`")
            .replace("| `V+C` | `double` | `l` |", "| `V+C` | `double` | `l` | between stems |"),
    );
    assert.equal(join("ta", "lum", between), "tallum");
    assert.equal(join("ta", "-lu", between), "talu");
    assert.equal(join("ta", "-lu", toy), "tallu");
});

test("a word is parsed back to its stems and suffixes", () => {
    const stems = lexiconFrom(lexicon(GOOD)).stems.filter((s) => s.tongue === "Toy");
    assert.deepEqual(parse("Tallumi", toy, stems)[0], ["ta", "lum", "-i"]);
    assert.deepEqual(parse("Tállumi", toy, stems)[0], ["ta", "lum", "-i"]);
    assert.deepEqual(parse("Tapumi", toy, stems), []);
});

test("a sound lexicon passes, and a pending name is a warning", () => {
    const findings = run();
    assert.deepEqual(errors(findings), []);
    assert.deepEqual(
        findings.filter((f) => f.severity === "warning").map((f) => f.message),
        [
            "Old Place is held as `pending`, awaiting its coinage",
            "Old Place is held as `pending`, awaiting its coinage",
        ],
    );
});

test("stems are refused for shape, a missing sense, a repeat, a second tongue and a missing required sense", () => {
    assert.match(
        errors(run({ toyStems: `${GOOD.toyStems}\n| \`tak\` | dust |` })).join("\n"),
        /`tak`: `k` cannot end a stem/,
    );
    assert.match(
        errors(run({ toyStems: `${GOOD.toyStems}\n| \`sar\` | |` })).join("\n"),
        /`sar` carries no sense/,
    );
    assert.match(
        errors(run({ toyStems: `${GOOD.toyStems}\n| \`ta\` | sea |` })).join("\n"),
        /`ta` is listed twice/,
    );
    const both = run({
        otherStems: `${GOOD.otherStems}\n| \`pa\` | grass |`,
        toyStems: `${GOOD.toyStems}\n| \`pa\` | sky |`,
    });
    assert.match(errors(both).join("\n"), /`pa` stands in both Toy and Other/);
    const keeps = run({ toyStems: `${GOOD.toyStems}\n| \`paka\` | sky |` });
    assert.match(errors(keeps).join("\n"), /Toy stem `paka` also keeps the sound rules of Other/);
    const salt = check({
        lexText: lexicon({ ...GOOD, senses: "`water` `road` `salt`" }),
        tongueNotes,
        notes: NOTES,
        earth: NO_EARTH,
        dunhari: new Set(),
        lexFile: "lex.md",
    });
    assert.match(errors(salt).join("\n"), /Other has no stem for the required sense "salt"/);
});

test("register names must recompute from listed pieces and carry declared tags", () => {
    const bad = (row) => errors(run({ register: `${GOOD.register}\n${row}` })).join("\n");
    assert.match(
        bad("| Tumi | [[place-tallumi\\|Tallumi]] | `toy` | `ta` + `lum` + `-i` |"),
        /Tumi does not recompute/,
    );
    assert.match(
        bad("| Tasumi | [[place-tallumi\\|Tallumi]] | `toy` | `ta` + `sum` + `-i` |"),
        /`sum` is not a listed stem/,
    );
    assert.match(
        bad("| Tasumi | [[place-tallumi\\|Tallumi]] | `toy` | — |"),
        /states no derivation/,
    );
    assert.match(
        bad("| Tasumi | [[place-tallumi\\|Tallumi]] | `english` | — |"),
        /undeclared tag `english`/,
    );
    assert.match(
        bad("| The Road | [[place-tallumi\\|Tallumi]] | `gloss` | on `Narumi` |"),
        /glosses `Narumi`/,
    );
    assert.match(
        bad("| Tallumi | [[place-tallumi\\|Tallumi]] | `toy` | `ta` + `lum` + `-i` |"),
        /registered twice/,
    );
});

test("a name tagged older must stand in the table of names older than the rules", () => {
    const row = "| Old Gate | [[place-old\\|Old Place]] | `older` | — |";
    const register = `${GOOD.register}\n${row}`;
    const listed = run({ register, older: "| Old Gate | a place |" });
    assert.deepEqual(errors(listed), []);
    assert.match(
        errors(run({ register })).join("\n"),
        /Old Gate is tagged `older` and stands in no row of the names older than the rules/,
    );
});

test("derived words recompute, carry a gloss and may be quoted by a glossed name", () => {
    const derived = "| Kirunun | `toy` | the salt place | `kirun` + `-un` |";
    const register = `${GOOD.register}\n| Salt Road | [[place-tallumi\\|Tallumi]] | \`gloss\` | on \`Kirunun\` |`;
    assert.deepEqual(errors(run({ derived, register })), []);
    const bad = errors(
        run({
            derived: `${derived}\n| Kirunun | \`toy\` | | \`kirun\` + \`-i\` |\n| Bedo | \`gloss\` | water | \`bedo\` |`,
        }),
    ).join("\n");
    assert.match(bad, /Kirunun carries no gloss/);
    assert.match(bad, /Kirunun is listed twice/);
    assert.match(bad, /Kirunun does not recompute/);
    assert.match(bad, /Bedo stands under `gloss`, which is not a tongue/);
});

test("every name in scope must stand in the register under its address", () => {
    const register = GOOD.register.split("\n").slice(0, 2).join("\n");
    const found = errors(run({ register }));
    assert.deepEqual(found, [
        "Old Place is in scope and not in the register under place-old",
        "Old Place is in scope and not in the register under place-site",
    ]);
});

test("Earth words, Earth morphemes and Dunhari forms are refused", () => {
    const earth = {
        lists: new Map([["testlang", new Set(["kirun"])]]),
        morphemes: [
            { form: "lum", at: "any" },
            { form: "pok", at: "start" },
            { form: "do", at: "end" },
        ],
    };
    const found = errors(run({}, { earth, dunhari: new Set(["ta"]) })).join("\n");
    assert.doesNotMatch(found, /`kirun`/);
    assert.match(found, /stem `lum` is an Earth morpheme/);
    assert.match(found, /name `Tallumi` contains the Earth morpheme `lum`/);
    assert.match(found, /stem `poke` contains the Earth morpheme `pok`/);
    assert.match(found, /stem `bedo` contains the Earth morpheme `do`/);
    const dun = errors(
        run({ toyStems: `${GOOD.toyStems}\n| \`sumar\` | sky |` }, { dunhari: new Set(["sumar"]) }),
    );
    assert.match(dun.join("\n"), /`sumar` is a Dunhari name or word/);
    assert.deepEqual(
        earthHits("ta", { lists: new Map([["x", new Set(["ta"])]]), morphemes: [] }),
        [],
    );
});

test("a stem is refused only for copying its tongue's source language", () => {
    const glossed = (gloss) => ({
        lists: new Map([["testlang", new Set(["kirun"])]]),
        glosses: new Map([["testlang", new Map([["kirun", [gloss]]])]]),
        morphemes: [],
    });
    const kirun = (findings) =>
        findings
            .filter((f) => f.message.includes("`kirun`"))
            .map((f) => `${f.severity}: ${f.message}`);
    assert.deepEqual(
        kirun(run({}, { earth: glossed("rock salt"), sources: { toy: ["testlang"] } })),
        [
            'error: Toy stem `kirun` is a word in the testlang list, a source language, and copies its word for "rock salt"',
        ],
    );
    assert.deepEqual(kirun(run({}, { earth: glossed("a cart"), sources: { toy: ["testlang"] } })), [
        "warning: Toy stem `kirun` is a word in the testlang list, a source language, with another meaning",
    ]);
    assert.deepEqual(kirun(run({}, { earth: glossed("rock salt"), sources: { toy: ["other"] } })), [
        "warning: Toy stem `kirun` is a word in the testlang list, which is no source language",
    ]);
});

test("loose words are checked against every tongue, and a refused word says why", () => {
    const earth = { lists: new Map([["testlang", new Set(["narvan"])]]), morphemes: [] };
    const results = checkWords(["Tallumi", "Narvan", "Kepumi"], {
        lexText: lexicon(GOOD),
        tongueNotes,
        earth,
        dunhari: new Set(),
    });
    assert.deepEqual(
        results.map((r) => r.ok),
        [true, false, false],
    );
    assert.match(results[1].lines.join("\n"), /is a word in the testlang list/);
    assert.match(results[2].lines.join("\n"), /breaks Toy/);
});

test("missing word-list directories are skipped, not fatal", () => {
    const empty = loadEarth([path.join(os.tmpdir(), "khazryn-lexicon-no-such-dir")]);
    assert.equal(empty.lists.size, 0);
    assert.equal(empty.morphemes.length, 0);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "khazryn-lexicon-"));
    fs.writeFileSync(path.join(dir, "testlang.txt"), "Kírun\n");
    fs.mkdirSync(path.join(dir, "morphemes"));
    fs.writeFileSync(path.join(dir, "morphemes", "x.txt"), "# comment\n-do\npok-\nlum\n");
    const earth = loadEarth([dir]);
    assert.ok(earth.lists.get("testlang").has("kirun"));
    assert.deepEqual(
        earth.morphemes.map((m) => m.at),
        ["end", "start", "any"],
    );
    fs.rmSync(dir, { recursive: true });
    assert.deepEqual(listDirs(["--wordlists", "a", "--wordlists=b"]), ["a", "b"]);
    assert.deepEqual(listDirs([], { KHAZRYN_WORDLISTS: ["c", "d"].join(path.delimiter) }), [
        "c",
        "d",
    ]);
    assert.deepEqual(
        listDirs([], {}, "/r/.claude/worktrees/w").map((d) =>
            d.split(path.sep).slice(0, 3).join("/"),
        ),
        ["/r/nogit", "/r/nogit"],
    );
});

test("the Dunhari note's names and words are read", () => {
    const forms = dunhariForms(fs.readFileSync(DUNHARI, "utf8"));
    assert.ok(forms.size > 300);
});

test(
    "the tree's Khazryn tongues and lexicon pass the guard",
    { skip: !fs.existsSync(LEXICON) },
    () => {
        const lexText = fs.readFileSync(LEXICON, "utf8");
        const { notes, tongueNotes: real } = corpusNotes(lexText, CONTENT);
        const findings = check({
            lexText,
            tongueNotes: real,
            notes,
            earth: NO_EARTH,
            dunhari: dunhariForms(fs.readFileSync(DUNHARI, "utf8")),
        });
        assert.deepEqual(errors(findings), []);
    },
);

/** A harmonic tongue in the shape of the steppe candidate. */
const HARMONY_ROW =
    "| Harmony | back `a` `o` `u` / front `e` `ö` `ü` / neutral `i`, which alone counts as front |";
const HARMONIC = tongueNote({
    consonants: "b d t k g q gh kh j ch s sh z m n l r v y".split(" "),
    vowels: ["a", "o", "u", "e", "ö", "ü", "i"],
    codas: "`b` `d` `t` `k` `g` `q` `gh` `kh` `j` `ch` `s` `sh` `z` `m` `n` `l` `r` `v` `y`",
    finals: "`d` `t` `k` `q` `kh` `ch` `s` `sh` `z` `m` `n` `l` `r` `y`",
    pairs: "`aa` `ee` `ii` `oo` `uu` `öö` `üü`",
    initial: "yes",
    signature: "`q` `gh` `kh` `ch` `j` `z` `o` `ö` `ü`",
    extra: `| Never initial | \`r\` |\n${HARMONY_ROW}\n`,
    joins: "| `V+V` | `insert` | `y` |\n| `C+C` | `merge` | |",
    suffixHeader: "| Back | Front | Sense |\n| --- | --- | --- |",
    suffixes: [
        "| `-ur` | `-ür` | a people or tribe |",
        "| `-oq` | `-ök` | a union, a binding |",
        "| `-or` | `-ör` | a range or grazing |",
    ].join("\n"),
});

/** A tongue in the shape of the oasis candidate. */
const OASIS = tongueNote({
    consonants: "p t k b d g m n l r s sh ts h v y".split(" "),
    vowels: ["a", "e", "i", "u"],
    codas: "`l` `m` `n` `r` `t` `d` `k` `s` `sh`",
    finals: "`l` `m` `n` `r` `t` `d` `k` `s` `sh` `y`",
    doubled: "`bb` `dd` `gg` `kk` `ll` `mm` `nn` `pp` `rr` `ss` `tt` `vv`",
    joins: "| `V+V` | `drop` | |\n| `V+C` | `double` | `b` `d` `g` `k` `l` `m` `n` `p` `r` `s` `t` `v` |",
    suffixes: "| `-mi` | a people |\n| `-ash` | a city or town |\n| `-a` | a woman's given name |",
});

/** Read inside each test, so a rule the guard cannot read fails that test alone. */
const harmonic = () => rulesFrom(HARMONIC);
const oasis = () => rulesFrom(OASIS);

test("the harmony row and the suffix alternants are read off the note", () => {
    const { harmony } = harmonic().syllables;
    assert.equal(harmony.groups.get("a"), "back");
    assert.equal(harmony.groups.get("ü"), "front");
    assert.equal(harmony.groups.get("i"), "neutral");
    assert.equal(harmony.neutralAs, "front");
    assert.deepEqual(
        harmonic().suffixes.map((s) => [s.form, s.front]),
        [
            ["-ur", "-ür"],
            ["-oq", "-ök"],
            ["-or", "-ör"],
        ],
    );
    assert.equal(toy.syllables.harmony, null);
    assert.equal(toy.syllables.neverInitial.length, 0);
    assert.deepEqual(harmonic().syllables.neverInitial, ["r"]);
    assert.throws(
        () => rulesFrom(HARMONIC.replace(" / neutral `i`, which alone counts as front", "")),
        /harmony row places no group for the vowel `i`/,
    );
    assert.throws(
        () => rulesFrom(HARMONIC.replace(", which alone counts as front", "")),
        /harmony row states no harmony for a stem of neutral vowels alone/,
    );
});

test("a stem whose vowels come from both harmony groups is refused", () => {
    assert.match(
        shape("kedul", harmonic(), { bound: true }).join("; "),
        /mixes back and front vowels/,
    );
    assert.deepEqual(shape("kedül", harmonic(), { bound: true }), []);
    assert.deepEqual(shape("qodir", harmonic(), { bound: true }), []);
    assert.deepEqual(shape("jiz", harmonic(), { bound: true }), []);
    // A compound keeps each stem's own harmony, so a word is not judged whole.
    assert.deepEqual(shape("kedülqodir", harmonic()), []);
});

test("a doubled vowel of two groups passes the pairs row folded and is refused by harmony", () => {
    const problems = shape("qoöz", harmonic(), { bound: true });
    assert.ok(!problems.some((p) => /two vowels together/.test(p)), problems.join("; "));
    assert.match(problems.join("; "), /mixes back and front vowels/);
    assert.deepEqual(shape("qöön", harmonic(), { bound: true }), []);
});

test("a never-initial sound cannot start a stem or a word", () => {
    assert.match(shape("ruval", harmonic()).join("; "), /`r` cannot start a word/);
    assert.deepEqual(shape("uruval", harmonic()), []);
    assert.deepEqual(shape("ruvol", harmonic(), { bound: true }), ["`r` cannot start a word"]);
    assert.deepEqual(shape("uruvol", harmonic(), { bound: true }), []);
});

/** The lexicon with Other replaced by the harmonic tongue. */
const runHarmonic = (register) =>
    run(
        {
            otherStems: "| `ködü` | water |\n| `qodir` | road |\n| `jiz` | salt |",
            register,
        },
        {
            notes: [],
            tongueNotes: new Map([
                ["skill-toy", { file: "toy.md", text: TOY }],
                ["skill-other", { file: "other.md", text: HARMONIC }],
            ]),
        },
    );
const row = (name, pieces) =>
    `| ${name} | [[place-x\\|${name}]] | \`other\` | ${pieces.map((p) => `\`${p}\``).join(" + ")} |`;

test("a suffix takes the harmony of the stem before it", () => {
    assert.deepEqual(
        errors(
            runHarmonic(
                [
                    row("Ködüyür", ["ködü", "-ür"]),
                    row("Qodiror", ["qodir", "-or"]),
                    row("Jizök", ["jiz", "-ök"]),
                    row("Ködüqodiror", ["ködü", "qodir", "-or"]),
                ].join("\n"),
            ),
        ),
        [],
    );
    const refused = errors(
        runHarmonic(
            [
                row("Ködüyur", ["ködü", "-ur"]),
                row("Qodirör", ["qodir", "-ör"]),
                row("Jizoq", ["jiz", "-oq"]),
            ].join("\n"),
        ),
    );
    assert.deepEqual(refused, [
        "Ködüyur: `-ur` is the back form of a suffix, after the front stem `ködü`; it takes `-ür`",
        "Qodirör: `-ör` is the front form of a suffix, after the back stem `qodir`; it takes `-or`",
        "Jizoq: `-oq` is the back form of a suffix, after the front stem `jiz`; it takes `-ök`",
    ]);
});

test("a suffix alternant must keep the harmony it is listed under", () => {
    const crossed = HARMONIC.replace("| `-ur` | `-ür` |", "| `-ür` | `-ur` |");
    const found = run(
        { otherStems: "| `ködü` | water |\n| `qodir` | road |", register: "" },
        {
            notes: [],
            tongueNotes: new Map([
                ["skill-toy", { file: "toy.md", text: TOY }],
                ["skill-other", { file: "other.md", text: crossed }],
            ]),
        },
    );
    assert.deepEqual(errors(found), [
        "the back form of suffix `-ür` holds a front vowel",
        "the front form of suffix `-ur` holds a back vowel",
    ]);
});

test("a word is parsed with both suffix forms, and only in harmony", () => {
    const stems = lexiconFrom(
        lexicon({ ...GOOD, otherStems: "| `ködü` | water |\n| `qodir` | road |" }),
    ).stems.filter((s) => s.tongue === "Other");
    assert.deepEqual(parse("Ködüyür", harmonic(), stems), [["ködü", "-ür"]]);
    assert.deepEqual(parse("Qodiroq", harmonic(), stems), [["qodir", "-oq"]]);
    assert.deepEqual(parse("Ködüyur", harmonic(), stems), []);
});

test("the candidate tongues keep apart on the stems that tested closest", () => {
    for (const w of ["bolid", "sovid"]) {
        assert.deepEqual(shape(w, harmonic(), { bound: true }), [], w);
        assert.notDeepEqual(shape(w, oasis(), { bound: true }), [], w);
    }
    for (const w of ["nelim", "lisen"]) {
        assert.deepEqual(shape(w, oasis(), { bound: true }), [], w);
        assert.notDeepEqual(shape(w, harmonic(), { bound: true }), [], w);
    }
});
