/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { assertEncodingMigrationPreserved } from "./encoding-preservation.mjs";
import { notePath } from "./note-index.mjs";
import {
    TONGUES,
    addRetired,
    eilwithiRespeller,
    loadFixture,
    nativeRanges,
    proseTable,
    renamedFile,
    respellEilwithi,
    respellProse,
    respellVowelY,
    sweep,
} from "./vowel-y-sweep.mjs";

const fixture = {
    respellings: [
        { from: "leesy", to: "leesì", tongue: "senali" },
        { from: "-ny", to: "-nì", tongue: "senali" },
        { from: "yra", to: "ira", tongue: "varokhi" },
        { from: "envy", to: "envi", tongue: "eilwithi", scope: "eilwithi" },
    ],
    held: [{ form: "eilwith", tongue: "eilwithi", why: "kept" }],
};
const table = proseTable(fixture);
const prose = (text) => respellProse(text, table);

test("a vowel y is i, or Senali's ì; a y before a vowel or after one stays", () => {
    for (const [word, after] of [
        ["envy", "envi"],
        ["Ythros", "Ithros"],
        ["dyrva", "dirva"],
        ["drýenalon", "dríenalon"],
        ["yala", "yala"],
        ["kaya", "kaya"],
        ["kay", "kay"],
        ["Kulaywil", "Kulaywil"],
        ["khuruy", "khuruy"],
        ["canyon", "canyon"],
        ["bany", "bany"],
    ])
        assert.equal(respellVowelY(word), after, word);
    for (const [word, after] of [
        ["leesy", "leesì"],
        ["ylpe", "ìlpe"],
        ["eeviny", "eevinì"],
        ["Rivytti", "Rivìtti"],
        ["yinse", "yinse"],
    ])
        assert.equal(respellVowelY(word, { front: true }), after, word);
});

test("prose changes whole words in any case, and changesets alike", () => {
    assert.equal(prose("the path, leesy; Leesy, LEESY."), "the path, leesì; Leesì, LEESÌ.");
    assert.equal(prose("leesyhe and aleesy"), "leesyhe and aleesy");
    assert.equal(prose("Athalwa yra Vithrund"), "Athalwa ira Vithrund");
    assert.equal(prose('front: "-ny"'), 'front: "-nì"');
});

test("prose leaves links, code, codage, heading ids and addresses as written", () => {
    const text = [
        "[[lore-leesy|leesy]] and [leesy](/leesy/) in `leesy` and ⟦leesy⟧",
        "## Leesy {#leesy}",
        "https://example.org/leesy",
    ].join("\n");
    assert.equal(
        prose(text),
        [
            "[[lore-leesy|leesì]] and [leesì](/leesy/) in `leesy` and ⟦leesy⟧",
            "## Leesì {#leesy}",
            "https://example.org/leesy",
        ].join("\n"),
    );
});

test("frontmatter keeps identifiers and retired forms, and respells prose fields", () => {
    const note = [
        "---",
        "shortcode: leesy",
        "tags: [leesy]",
        "data:",
        "  words:",
        "    - {form: leesy, gloss: 'a path; iha leesy vennas, these paths'}",
        "  retired:",
        "    - {form: leesy, instead: leesì, why: y is never a vowel}",
        "---",
        "",
        "A leesy.",
        "",
    ].join("\n");
    const out = prose(note);
    assert.match(out, /^shortcode: leesy$/mu);
    assert.match(out, /^tags: \[leesy\]$/mu);
    assert.match(out, /\{form: leesì, gloss: 'a path; iha leesì vennas, these paths'\}/u);
    assert.match(out, /\{form: leesy, instead: leesì, why: y is never a vowel\}/u);
    assert.match(out, /A leesì\./u);
});

test("an Eilwithi-scoped word never changes in ordinary prose", () => {
    assert.equal(prose("They envy the king."), "They envy the king.");
});

test("the Eilwithi pass respells tagged runs and native forms, and keeps held forms and English", () => {
    const respell = eilwithiRespeller(new Set(["eilwith"]));
    const body = [
        "English envy and [thy envy in Eilwith]{lang=aelw}.",
        "",
        "::: {.verse lang=aelw}",
        "Go softly by the gate/",
        ":::",
        "",
    ].join("\n");
    assert.equal(
        respellEilwithi(body, { note: false, respell }),
        [
            "English envy and [thi envi in Eilwith]{lang=aelw}.",
            "",
            "::: {.verse lang=aelw}",
            "Go softli bi the gate/",
            ":::",
            "",
        ].join("\n"),
    );
    const note = [
        "---",
        "data:",
        "  words:",
        "    - {form: envy, gloss: envy}",
        "    - {form: Eilwith, gloss: the land}",
        "  register:",
        "    - {name: Ashby, kind: byname}",
        "    - {name: Cyrwick, tongue: translation}",
        "---",
        "The envy of a neighbor.",
        "",
    ].join("\n");
    const out = respellEilwithi(note, { note: true, respell });
    assert.match(out, /\{form: envi, gloss: envy\}/u);
    assert.match(out, /\{form: Eilwith, gloss: the land\}/u);
    assert.match(out, /\{name: Ashbi, kind: byname\}/u);
    assert.match(out, /\{name: Cyrwick, tongue: translation\}/u);
    assert.match(out, /The envy of a neighbor\./u);
});

test("code inside an Eilwithi passage keeps its spelling while the native words around it change", () => {
    const respell = eilwithiRespeller(new Set());
    const body = [
        "[envy `envy` and ``by `thy` by`` envy]{lang=aelw}",
        "",
        "::: {.verse lang=aelw}",
        "my envy `my envy`",
        "```",
        "my envy",
        "```",
        "thy envy",
        ":::",
        "",
    ].join("\n");
    assert.equal(
        respellEilwithi(body, { note: false, respell }),
        [
            "[envi `envy` and ``by `thy` by`` envi]{lang=aelw}",
            "",
            "::: {.verse lang=aelw}",
            "mi envi `my envy`",
            "```",
            "my envy",
            "```",
            "thi envi",
            ":::",
            "",
        ].join("\n"),
    );
});

test("the migration comparison rejects code changed inside an Eilwithi passage", () => {
    const record = (raw) => ({
        file: notePath("skill-dunharlng"),
        raw,
        fm: YAML.parse(splitFrontmatter(raw).yaml),
    });
    const before = [
        "---",
        "type: skill",
        "data:",
        "  words: []",
        "---",
        "Prose.",
        "",
        "[my envy `envy`]{lang=aelw}",
        "",
        "::: {lang=aelw}",
        "```",
        "thy envy",
        "```",
        ":::",
        "",
    ].join("\n");
    const swept = before.replace("[my envy `envy`]", "[mi envi `envy`]");
    assert.doesNotThrow(() => assertEncodingMigrationPreserved(record(swept), record(before)));
    for (const changed of [
        swept.replace("`envy`", "`envi`"),
        swept.replace("thy envy\n```", "thi envi\n```"),
    ])
        assert.throws(
            () => assertEncodingMigrationPreserved(record(changed), record(before)),
            assert.AssertionError,
        );
});

test("native ranges skip patterns, English lists and recorded refusals", () => {
    const yaml = [
        "data:",
        "  words:",
        "    - {form: envy, gloss: envy}",
        "    - {form: wyrm, instead: wurm, gloss: x}",
        "  names:",
        "    pattern: ['{given} by {place}']",
        "    en: [Lady]",
        "    given: [Hildwyn]",
    ].join("\n");
    const texts = nativeRanges(yaml, "eilwithi").map(([a, b]) => yaml.slice(a, b));
    assert.deepEqual(texts, ["envy", "Hildwyn"]);
});

test("retired records are added once, to a block list, a flow list or none", () => {
    const forms = [{ from: "yra", to: "ira" }];
    const block =
        "---\ndata:\n  retired:\n    - {form: a, instead: b, why: c}\nsohl: {}\n---\nBody.\n";
    const once = addRetired(block, forms);
    assert.equal(
        once,
        "---\ndata:\n  retired:\n    - {form: a, instead: b, why: c}\n    - {form: yra, instead: ira, why: y is never a vowel}\nsohl: {}\n---\nBody.\n",
    );
    assert.equal(addRetired(once, forms), once);
    const flow = "---\ndata:\n  retired: [{form: a, instead: b, why: c}]\n---\n";
    assert.deepEqual(
        YAML.parse(addRetired(flow, forms).split("---\n")[1]).data.retired.map((r) => r.form),
        ["a", "yra"],
    );
    const none = "---\ndata:\n  words: []\nsohl: {}\n---\n";
    const added = YAML.parse(addRetired(none, forms).split("---\n")[1]);
    assert.deepEqual(added.data.retired, [
        { form: "yra", instead: "ira", why: "y is never a vowel" },
    ]);
    assert.deepEqual(added.sohl, {});
});

test("a note file is renamed to the accent-free respelled form", () => {
    assert.equal(
        renamedFile("Domrik_yra_Vithrund_wur_Eichengrund.md", table),
        "Domrik_ira_Vithrund_wur_Eichengrund.md",
    );
    assert.equal(renamedFile("Leesy.md", table), "Leesi.md");
    assert.equal(renamedFile("Leesyhe.md", table), "Leesyhe.md");
});

test("the fixture names known tongues, and no form is both respelled and held", () => {
    const { respellings, held } = loadFixture();
    const heldForms = new Set(held.map(({ form }) => form));
    for (const { from, to, tongue } of respellings) {
        assert.ok(TONGUES[tongue], tongue);
        assert.ok(!heldForms.has(from), from);
        assert.notEqual(from, to);
    }
});

test("every respelled form is retired in its tongue's note", () => {
    const { respellings } = loadFixture();
    for (const [tongue, address] of Object.entries(TONGUES)) {
        const text = fs.readFileSync(notePath(address), "utf8");
        const fm = YAML.parse(/^---\n([\s\S]*?)\n---/u.exec(text)[1]);
        const retired = new Set((fm.data.retired ?? []).map(({ form }) => String(form)));
        for (const { from } of respellings.filter((entry) => entry.tongue === tongue))
            assert.ok(retired.has(from), `${tongue}: ${from}`);
    }
});

test("the tree is swept: a rerun changes nothing", () => {
    const { changed } = sweep(["assets/content", ".changeset"], { check: true });
    assert.deepEqual(changed, []);
});
