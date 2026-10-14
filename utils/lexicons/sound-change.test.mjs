/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import {
    CONDITIONS,
    OPERATIONS,
    STRESS_RULES,
    derive,
    parseChange,
    parseWhere,
    readChanges,
    stressIndex,
    syllableCount,
    tokenize,
} from "./sound-change.mjs";

/** A change table as a note writes it. */
function table(rows) {
    return [
        "| Step | Change | Where |",
        "| --- | --- | --- |",
        ...rows.map((r, i) => `| ${i + 1} | ${r[0]} | ${r[1] ?? "—"} |`),
        "",
    ].join("\n");
}

/** Derive one word through a table written as rows. */
function through(rows, word, options = {}) {
    const { steps, problems } = readChanges(table(rows));
    assert.deepEqual(problems, []);
    return derive(word, steps, { stress: "by weight", ...options }).form;
}

test("a word is cut into sounds with digraphs whole and marks read as properties", () => {
    const sounds = tokenize("Ghôrândis");
    assert.deepEqual(
        sounds.map((s) => s.base),
        ["gh", "o", "r", "a", "n", "d", "i", "s"],
    );
    assert.equal(sounds[1].long, true);
    assert.equal(tokenize("t'ár")[0].base, "t'");
    assert.equal(tokenize("gã")[1].nasal, true);
    assert.equal(tokenize("gã")[1].stress, false);
    assert.equal(tokenize("sé")[1].stress, true);
    assert.equal(tokenize("Lónvë")[4].base, "ë");
});

test("every stress rule places the stress where it says", () => {
    const ctx = { diphthongs: new Set(["ai", "au", "ei", "oi"]), onsets: /^[ptkbdg]h?[lr]$/ };
    const at = (word, rule) => {
        const sounds = tokenize(word);
        return stressIndex(sounds, rule, ctx);
    };
    assert.equal(at("sôrimân", "first syllable"), 1);
    assert.equal(at("sôrimân", "by weight"), 1, "a light penult sends stress to the antepenult");
    assert.equal(at("arkânôs", "by weight"), 3, "a heavy penult carries the stress");
    assert.equal(at("kalmâkên", "by weight"), 4, "a closed penult is heavy");
    assert.equal(at("sôrimân", "penultimate"), 3);
    assert.equal(at("sôrimân", "final"), 5);
    assert.equal(at("sorima", "penultimate or final"), 3);
    assert.equal(at("sorim", "penultimate or final"), 3);
    assert.equal(at("Khôradel", "as marked"), 1);
    assert.equal(at("khoradel", "as marked"), 1, "an unmarked word stresses its first syllable");
    assert.equal(syllableCount("Ghôrândis"), 3);
    assert.equal(syllableCount("kaina"), 2, "a listed diphthong is one syllable");
    assert.deepEqual(
        STRESS_RULES.map((rule) => at("nela", rule) >= 0),
        STRESS_RULES.map(() => true),
    );
});

test("a Change cell is a substitution or an operation, and anything else is a problem", () => {
    const sub = parseChange("`t' d' k' g'` > `t d k g`");
    assert.equal(sub.rules.length, 4);
    assert.deepEqual(sub.problems, []);
    const several = parseChange("`dh` > `z`; `gh` > `g`");
    assert.equal(several.rules.length, 2);
    const del = parseChange("`p ph b w h` > `—`");
    assert.equal(del.rules.length, 5);
    assert.deepEqual(del.rules[0].to, []);
    assert.ok(parseChange("like vowels merge, long").operation);
    assert.ok(parseChange("stress moves to the first syllable").operation);
    assert.ok(
        parseChange("acute on the stressed vowel of a word of two syllables or more").operation,
    );
    assert.equal(parseChange("vowels do something").operation, null);
    assert.equal(parseChange("vowels do something").problems.length, 1);
    assert.equal(parseChange("`a b` > `x y z`").problems.length, 1, "unequal lists are a problem");
    assert.ok(OPERATIONS.length >= 8);
});

test("a Where cell uses the closed vocabulary and nothing else", () => {
    assert.deepEqual(parseWhere("—").conditions, []);
    assert.deepEqual(parseWhere("anywhere").conditions, []);
    assert.equal(parseWhere("word end and after a vowel").conditions.length, 2);
    assert.equal(parseWhere("after a vowel or a liquid").conditions[0].matchers.length, 2);
    assert.equal(parseWhere("after `n`, `r`, `l`").conditions[0].matchers.length, 3);
    assert.equal(parseWhere("before `ie`, `ei`, `ýe`").conditions[0].matchers.length, 3);
    for (const word of CONDITIONS) assert.deepEqual(parseWhere(word).problems, []);
    const bad = parseWhere("in the second syllable");
    assert.equal(bad.problems.length, 1);
    assert.match(bad.problems[0], /not a condition the engine knows/);
});

test("a table with a word outside the vocabulary reports the row", () => {
    const text = `## From ancient Vylari\n\n${table([["`p` > `v`", "in a stressed foot"]])}`;
    const { steps, problems } = readChanges(text, "## From ancient Vylari");
    assert.equal(steps.length, 1);
    assert.equal(problems.length, 1);
    assert.ok(problems[0].at > 0);
    assert.equal(readChanges(text, "## Absent").at, null);
});

test("each condition holds where it says and nowhere else", () => {
    assert.equal(through([["`p` > `v`", "between vowels"]], "apa"), "ava");
    assert.equal(through([["`p` > `v`", "between vowels"]], "pa"), "pa");
    assert.equal(through([["`th` > `t`", "word start"]], "thath"), "tath");
    assert.equal(through([["`s` > `—`", "word end"]], "sas"), "sa");
    assert.equal(through([["`k` > `g`", "after a vowel"]], "arka"), "arka");
    assert.equal(through([["`k` > `v`", "after a vowel or a liquid"]], "arka"), "arva");
    assert.equal(through([["`n` > `—`", "before a vowel"]], "ana"), "aa");
    assert.equal(through([["`p` > `v`", "after a nasal or a liquid"]], "ampa"), "amva");
    assert.equal(through([["`e` > `—`", "word end and after a single consonant"]], "kane"), "kan");
    assert.equal(
        through([["`e` > `—`", "word end and after a single consonant"]], "kante"),
        "kante",
    );
    assert.equal(through([["`e` > `—`", "word end and after `n`, `r`"]], "kare"), "kar");
    assert.equal(through([["`e` > `—`", "word end and after `n`, `r`"]], "kade"), "kade");
    assert.equal(through([["`k` > `ch`", "before `ie`, `ei`"]], "kiela"), "chiela");
    assert.equal(through([["`e` > `ie`", "open syllable"]], "nela"), "niela");
    assert.equal(through([["`e` > `ie`", "open syllable"]], "nelta"), "nelta");
    assert.equal(through([["`e` > `ie`", "closed syllable"]], "nelta"), "nielta");
    assert.equal(
        through([["`e` > `ie`", "open syllable"]], "petra"),
        "pietra",
        "stop and liquid open",
    );
    assert.equal(through([["`â` > `a`", "unstressed syllable"]], "sôrimâ"), "sôrima");
    assert.equal(through([["`â` > `a`", "stressed syllable"]], "sôrimâ"), "sôrimâ");
    assert.equal(through([["`ô` > `o`", "stressed syllable"]], "sôrimâ"), "sorimâ");
});

test("class letters match and copy, and a copied V without a source copies the vowel to the left", () => {
    assert.equal(through([["`CC` > `CCe`", "word end"]], "jhorn"), "jhorne");
    assert.equal(through([["`CC` > `CCe`", "word end"]], "jhora"), "jhora");
    assert.equal(through([["`ândis` > `Vndi`", "word end"]], "Ghôrândis"), "Ghôrondi");
    assert.equal(through([["`ândis` > `Vndi`", "word end"]], "Dhârgândis"), "Dhârgandi");
    assert.equal(through([["`VN` > `NV`", "anywhere"]], "an"), "na");
});

test("the operations merge vowels, move stress and choose the written mark", () => {
    assert.equal(through([["`p` > `—`"], ["like vowels merge, long"]], "apa"), "â");
    assert.equal(through([["`p` > `—`"], ["like vowels merge, short"]], "apa"), "a");
    assert.equal(through([["`h` > `—`"], ["unlike vowels merge to the first, long"]], "aho"), "â");
    assert.equal(
        through([["`h` > `—`"], ["unlike vowels merge to the first, long"]], "kaina"),
        "kaina",
        "a kept diphthong does not merge",
    );
    assert.equal(
        through([["acute on the stressed vowel"]], "sôrimâ"),
        "sôrimâ",
        "a long vowel keeps its circumflex",
    );
    assert.equal(through([["acute on the stressed vowel"]], "sorima"), "sórima");
    assert.equal(through([["grave on the stressed vowel"]], "sorima"), "sòrima");
    assert.equal(
        through([["stress moves to the penultimate"], ["grave on the stressed vowel"]], "sorima"),
        "sorìma",
    );
    assert.equal(
        through([["stress moves to the final"], ["acute on the stressed vowel"]], "sorima"),
        "sorimá",
    );
    assert.equal(
        through([["acute on the stressed vowel of a word of two syllables or more"]], "kar"),
        "kar",
    );
    assert.equal(
        through([["acute on the stressed vowel of a word of two syllables or more"]], "karo"),
        "káro",
    );
    assert.equal(
        through([["acute on a stressed short vowel, circumflex on a long one"]], "sôrimâ"),
        "sôrimâ",
    );
    assert.equal(
        through([["acute on a stressed short vowel, circumflex on a long one"]], "sorima"),
        "sórima",
    );
    assert.equal(
        through([["`an` > `ã`", "before a vowel"], ["grave on the stressed vowel"]], "gana"),
        "gãa",
        "a nasal takes its tilde and no other mark",
    );
    assert.equal(
        through([["acute on the stressed vowel"], ["no stress mark"]], "sorima"),
        "sorima",
    );
});

test("stress survives substitution, a target acute places it, and a deleted stressed vowel passes it on", () => {
    assert.equal(
        through(
            [
                ["`e` > `ié`", "stressed syllable and open syllable"],
                ["acute on the stressed vowel"],
            ],
            "nela",
        ),
        "niéla",
    );
    assert.equal(
        through([["`â` > `ae`", "stressed syllable"], ["acute on the stressed vowel"]], "Dâran", {
            stress: "as marked",
        }),
        "Dáeran",
    );
    assert.equal(
        through([["`o` > `—`", "word start"], ["acute on the stressed vowel"]], "orima", {
            stress: "first syllable",
        }),
        "ríma",
    );
});

test("a capital on the source form is kept and the trace shows each step", () => {
    const { steps } = readChanges(table([["`dh` > `z`"], ["`gh` > `g`"]]));
    const out = derive("Ghôrândis", steps, { stress: "by weight" });
    assert.equal(out.form, "Gôrândis");
    assert.deepEqual(
        out.trace.map((t) => t.form),
        ["Ghôrândis", "Gôrândis"],
    );
});

// The five tables of the Aurèldían design, each proved on the forms the notes attest.

const VYLARI = [
    ["`t' d' k' g'` > `t d k g`", "anywhere"],
    ["`dh` > `z`; `gh` > `g`", "anywhere"],
    ["`w` > `v`", "anywhere"],
    ["`b` > `v`", "between vowels"],
];

const AELENDI = [
    ["`p ph b w h` > `—`", "anywhere"],
    ["`y` > `—`; `z` > `s`", "anywhere"],
    ["like vowels merge, long", "—"],
    ["unlike vowels merge to the first, long", "—"],
    ["`ândis` > `di`", "word end and after `n`"],
    ["`ândis` > `ndi`", "word end and after a vowel"],
    ["`ândis` > `Vndi`", "word end"],
    ["`ôs` > `—`; `â` > `a`", "word end"],
    ["stress moves to the first syllable", "—"],
    ["`â ê î ô û` > `a e i o u`", "unstressed syllable"],
    [
        "acute on a stressed short vowel, circumflex on a long one of a word of two syllables or more",
        "—",
    ],
];

const ELAVENDRI = [
    ["`t' d' k' g'` > `t d k g`", "anywhere"],
    ["`kh` > `h`", "anywhere"],
    ["`gh` > `g`", "word start"],
    ["`gh` > `—`", "anywhere"],
    ["like vowels merge, short", "—"],
    ["`â ê î ô û` > `ae ei ie ou ýe`", "stressed syllable and open syllable"],
    ["`â ê î ô û` > `a e i o u`", "anywhere"],
    ["`p` > `v`", "between vowels"],
    ["`p` > `v`", "after a nasal or a liquid"],
    ["`t d k g` > `d dh g y`", "between vowels"],
    ["`k g s` > `ch j sh`", "before `ie`, `ei`, `ýe`"],
    ["`e i o u y` > `ë`", "word end"],
    ["acute on the stressed vowel", "—"],
];

const PROVENZAL = [
    ["`t' d' k' g'` > `t d k g`", "anywhere"],
    ["`ph` > `f`; `kh` > `ch`; `gh` > `g`; `h` > `—`", "anywhere"],
    ["`th dh` > `t d`", "word start"],
    ["`w` > `v`", "anywhere"],
    ["`y` > `j`", "word start"],
    ["`y` > `i`", "anywhere"],
    ["`p b` > `v`; `t` > `d`; `d` > `dh`; `k g` > `v`", "after a vowel or a liquid"],
    ["`an ân` > `ã`; `en ên in în` > `ẽ`; `on ôn un ûn` > `õ`", "before a vowel"],
    ["`ôs ôn on` > `—`; `ân` > `a`", "word end"],
    ["`CC` > `CCe`", "word end"],
    ["`â ê î ô û` > `a e i o u`", "anywhere"],
    ["stress moves to the penultimate or final", "—"],
    ["grave on the stressed vowel", "—"],
];

const TARVENI = [
    ["`p t k` > `b d g`", "between vowels"],
    ["`t' d'` > `t`; `k' g'` > `k`", "anywhere"],
    ["`ph` > `h`; `dh` > `d`; `gh` > `g`", "anywhere"],
    ["`w` > `v`; `y` > `i`", "anywhere"],
    ["`e o` > `ié ué`", "stressed syllable and open syllable"],
    ["`ôs` > `o`; `â` > `a`; `on` > `o`", "word end"],
    ["`e` > `—`", "word end and after a single consonant and after `n`, `r`, `l`, `s`, `d`"],
    ["`â ê î ô û` > `a e i o u`", "anywhere"],
    ["acute on the stressed vowel of a word of two syllables or more", "—"],
];

test("ancient Vylari becomes imperial Vylari", () => {
    for (const [from, to] of [
        ["dharon", "zaron"],
        ["Ghôrândis", "Gôrândis"],
        ["k'arôs", "karôs"],
        ["wâk", "vâk"],
        ["abâ", "avâ"],
        ["prêdâ", "prêdâ"],
    ])
        assert.equal(through(VYLARI, from), to, from);
});

test("ancient Vylari becomes Áelendi", () => {
    for (const [from, to] of [
        ["prêdâ", "rêda"],
        ["khalôs", "khal"],
        ["ganôs", "gan"],
        ["k'arôs", "k'ar"],
        ["dharon", "dháron"],
        ["nela", "néla"],
        ["Ghôrândis", "Ghôrondi"],
        ["Dhargânôs", "Dhárgan"],
        ["Khaldenândis", "Kháldendi"],
        ["Sîlmârenândis", "Sîlmarendi"],
    ])
        assert.equal(through(AELENDI, from), to, from);
});

test("Áelendi becomes Élavendri, and the Sinalë loans ride the same table", () => {
    for (const [from, to] of [
        ["T'áldor", "Táldor"],
        ["Móghoren", "Móren"],
        ["Khálden", "Hálden"],
        ["Dêran", "Déiran"],
        ["Ghálmir", "Gálmir"],
        ["Khôradel", "Hóuradhel"],
        ["Ûlmakar", "Úlmagar"],
        ["Sîlmaren", "Sílmaren"],
        ["sîl", "síl"],
        ["thêl", "thél"],
        ["kír", "kír"],
        ["rêda", "réidha"],
        ["Ghórondi", "Górondë"],
        ["Lónpu", "Lónvë"],
        ["Thálpe", "Thálvë"],
        ["Kálpi", "Kálvë"],
        ["Tórpel", "Tórvel"],
        ["Móllu", "Móllë"],
        ["Nûpa", "Nýeva"],
        ["Pílme", "Pílmë"],
        ["Tárnepi", "Tárnevë"],
        ["Sírnasto", "Sírnastë"],
    ])
        assert.equal(through(ELAVENDRI, from, { stress: "as marked" }), to, from);
});

test("ancient Vylari becomes Provenzal, from the accusative", () => {
    for (const [from, to] of [
        ["arkân", "àrva"],
        ["prêdân", "prèdha"],
        ["dharon", "dàr"],
        ["nelân", "nèla"],
        ["ganon", "gã"],
        ["k'aron", "kàr"],
        ["khalon", "chàl"],
        ["sôrimân", "sorìma"],
    ])
        assert.equal(through(PROVENZAL, from), to, from);
});

test("ancient Vylari becomes Tarveni, the ejective kept as a voiceless stop", () => {
    for (const [from, to] of [
        ["sêk'â", "séka"],
        ["sêkâ", "séga"],
        ["dharon", "dáro"],
        ["arkôs", "árko"],
        ["arkâ", "árka"],
        ["nela", "niéla"],
        ["khalôs", "khálo"],
        ["ganôs", "gáno"],
        ["k'arôs", "káro"],
        ["prêdâ", "préda"],
        ["kálmâkên", "kalmágen"],
    ])
        assert.equal(through(TARVENI, from), to, from);
});

test("a change is written with > and any other arrow is refused", () => {
    const written = "`t' d' k' g'` > `t d k g`; `p ph` > `—`";
    const read = parseChange(written);
    assert.deepEqual(read.problems, []);
    assert.equal(read.rules.length, 6);
    assert.deepEqual(read.rules[4].to, []);
    assert.equal(through([["`ândis` > `Vndi`", "word end"]], "Ghôrândis"), "Ghôrondi");
    assert.equal(through([["`e` > `ié`", "stressed syllable and open syllable"]], "nela"), "niela");
    assert.equal(through([["`â` > `a`", "unstressed syllable"]], "sôrimâ"), "sôrima");
    for (const arrow of ["\u2192", "->"]) {
        const refused = parseChange(`\`p\` ${arrow} \`v\``);
        assert.equal(refused.rules.length, 0, `${arrow} reads no rule`);
        assert.equal(refused.problems.length, 1, `${arrow} is a problem`);
        assert.match(refused.problems[0], /write > between/);
    }
    const mixed = parseChange("`dh` > `z`; `gh` \u2192 `g`");
    assert.equal(mixed.rules.length, 1);
    assert.equal(mixed.problems.length, 1);
});
