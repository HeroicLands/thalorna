/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { GROUPS, compileGroup, matchCase, respellText } from "./guide-sweep.mjs";

const group = (forms) => compileGroup({ tongue: "skill-x", scope: "corpus", forms });

test("every group names a tongue, a scope and forms that change", () => {
    assert(GROUPS.length > 0);
    for (const g of GROUPS) {
        assert.match(g.tongue, /^skill-/u);
        assert(["corpus", "tongue"].includes(g.scope), g.tongue);
        for (const [from, to] of Object.entries(g.forms)) assert.notEqual(from, to, from);
    }
});

test("each form changes in its case, with possessives and its own apostrophes", () => {
    const c = group({ "Ki'ich'chik": "Kì'ìch'chik", Lienrik: "Lyenrik", "kaan'sili": "kaan-sili" });
    for (const [before, after] of [
        ["Ki'ich'chik", "Kì'ìch'chik"],
        ["the Ki'ich'chik's coast", "the Kì'ìch'chik's coast"],
        ["Lienrik and LIENRIK", "Lyenrik and LYENRIK"],
        ["_kaan'sili_ is said", "_kaan-sili_ is said"],
        ["Lienriks and xLienrik", "Lienriks and xLienrik"],
    ])
        assert.equal(respellText(before, c), after, before);
});

test("a form that is also English changes only where it cannot be English", () => {
    const c = group({ lie: "lye", tsiao: "tsyau" });
    assert.equal(respellText("they lie down", c), "they lie down");
    assert.equal(respellText("_tsiao lie_ and Lie", c), "_tsyau lye_ and Lie");
    const note = [
        "---",
        "data:",
        "  words:",
        "    - {form: lie, gloss: to lie down}",
        "---",
        "",
    ].join("\n");
    assert.equal(respellText(note, c), note.replace("form: lie", "form: lye"));
});

test("identifiers, links, codage and retired forms stay; a code span holding a form changes", () => {
    const c = group({ Lienrik: "Lyenrik", "-dómur": "-domur" });
    const source = [
        "---",
        "shortcode: lienrik",
        "tags: [Lienrik]",
        "name: Lienrik",
        "data:",
        "  retired:",
        "    - {form: Lienrik, instead: Lienrik, why: x}",
        "---",
        "[[place-lienrik|Lienrik]] and [x](Lienrik.md) and ⟦Lienrik⟧ and `-dómur` and `Lienrik:`",
        "## Lienrik {#lienrik}",
    ].join("\n");
    const expected = [
        "---",
        "shortcode: lienrik",
        "tags: [Lienrik]",
        "name: Lyenrik",
        "data:",
        "  retired:",
        "    - {form: Lienrik, instead: Lyenrik, why: x}",
        "---",
        "[[place-lienrik|Lyenrik]] and [x](Lienrik.md) and ⟦Lienrik⟧ and `-domur` and `Lienrik:`",
        "## Lyenrik {#lienrik}",
    ].join("\n");
    assert.equal(respellText(source, c), expected);
});

test("a second sweep changes nothing", () => {
    const c = group({ chiao: "chyau", Lienrik: "Lyenrik" });
    const once = respellText("_chiao_ in Lienrik", c);
    assert.equal(respellText(once, c), once);
});

test("case follows the word replaced", () => {
    assert.equal(matchCase("Tui", "twi"), "Twi");
    assert.equal(matchCase("TUI", "twi"), "TWI");
    assert.equal(matchCase("tui", "twi"), "twi");
    assert.equal(matchCase("TuI", "twi"), undefined);
    assert.equal(matchCase("Ha Luo Zhao", "ha lwo zhau"), "Ha Lwo Zhau");
});

test("each occurrence keeps its own case, whatever the case of the mapping", () => {
    const c = group({ Velgrímur: "Velgrimur", "Ki'ich'chik": "Kì'ìch'chik" });
    assert.equal(
        respellText("velgrímur bugna velhug/ and Velgrímur", c),
        "velgrimur bugna velhug/ and Velgrimur",
    );
    assert.equal(respellText("ki'ich'chik and KI'ICH'CHIK", c), "kì'ìch'chik and KÌ'ÌCH'CHIK");
});

test("an English-overlap form changes inside the tongue's own lang span or block", () => {
    const c = compileGroup({
        tongue: "skill-tantsoulng",
        scope: "tongue",
        forms: { lie: "lye", die: "dye" },
    });
    assert.equal(respellText("[lie die]{lang=tant}", c), "[lye dye]{lang=tant}");
    assert.equal(respellText("[Lie die]{lang=art-x-tant}", c), "[Lye dye]{lang=art-x-tant}");
    assert.equal(
        respellText("::: {.verse lang=tant}\nlie die/\n:::\n\nthey lie", c),
        "::: {.verse lang=tant}\nlye dye/\n:::\n\nthey lie",
    );
    assert.equal(respellText("[lie die]{lang=nord}", c), "[lie die]{lang=nord}");
});

test("ordinary English stays, even capitalized at the start of a sentence", () => {
    const c = compileGroup({
        tongue: "skill-tantsoulng",
        scope: "tongue",
        forms: { lie: "lye", die: "dye" },
    });
    assert.equal(
        respellText("Lie down. Die well, they said.", c),
        "Lie down. Die well, they said.",
    );
});

test("an inner span or block in another language keeps its words inside native text", () => {
    const c = compileGroup({
        tongue: "skill-tantsoulng",
        scope: "tongue",
        forms: { lie: "lye", die: "dye" },
    });
    assert.equal(
        respellText("::: {.verse lang=tant}\nlie die [lie down. die well.]{lang=en} lie/\n:::", c),
        "::: {.verse lang=tant}\nlye dye [lie down. die well.]{lang=en} lye/\n:::",
    );
    assert.equal(
        respellText("[lie [die]{lang=nord} lie]{lang=tant}", c),
        "[lye [die]{lang=nord} lye]{lang=tant}",
    );
});
