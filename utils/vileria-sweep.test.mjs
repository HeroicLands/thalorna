/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { assertEncodingMigrationPreserved } from "./encoding-preservation.mjs";
import { notePath } from "./note-index.mjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
    RESPELLINGS_FILE,
    loadRespellings,
    renamedFile,
    respellVileria,
    sweepTable,
} from "./vileria-sweep.mjs";

test("each mapping applies, with case, possessives and lowercase prose", () => {
    for (const [before, after] of [
        ["Vylarians", "Vilérians"],
        ["Vylarian", "Vilérian"],
        ["Vylaria", "Viléria"],
        ["Vylari", "Vilari"],
        ["Vylarian's", "Vilérian's"],
        ["the Vylarians' road", "the Vilérians' road"],
        ["_Vylaria_ and Vylari-speaking", "_Viléria_ and Vilari-speaking"],
        ["a vylarian word", "a vilérian word"],
        ["VYLARIA", "VILÉRIA"],
        ["Khazryni", "Khazrini"],
        ["Khazryn", "Khazrin"],
        ["the Khazryn's dust, Khazryni law", "the Khazrin's dust, Khazrini law"],
        ["[[place-vylariargn|Vylaria Region]]", "[[place-vylariargn|Viléria Region]]"],
        ['[Vylarian Gate]{.name data-type="place"}', '[Vilérian Gate]{.name data-type="place"}'],
    ])
        assert.equal(respellVileria(before), after, before);
});

test("shortcodes, wikilink targets, codage and stem-only words stay", () => {
    const source = [
        "---",
        "shortcode: vylari",
        "tags: [vylaria, Vylari, khazryn]",
        "name: Vylaria",
        "data: {name: Vylari, tongue: vylari}",
        "  retired:",
        "    - {form: Vylarian, instead: Elsewhere, why: x Vylari}",
        "---",
        "[[lore-vylari|Vylari]] and [[place-vylaria#the-vylarian-calendar|the Vylarian Calendar]]",
        "### The Vylarian Calendar {#the-vylarian-calendar}",
        "⟦VYLARI Vylaria⟧ and `vylari:` and Vylarisian and the River Vylaris",
        "The_Vylarian_Calendar.md and lore-vylari and affiliation-vylarinmpr and khazrynclt, [[place-khazryndesert|Khazryn]]",
    ].join("\n");
    const expected = [
        "---",
        "shortcode: vylari",
        "tags: [vylaria, Vylari, khazryn]",
        "name: Viléria",
        "data: {name: Vilari, tongue: vylari}",
        "  retired:",
        "    - {form: Vylarian, instead: Elsewhere, why: x Vilari}",
        "---",
        "[[lore-vylari|Vilari]] and [[place-vylaria#the-vylarian-calendar|the Vilérian Calendar]]",
        "### The Vilérian Calendar {#the-vylarian-calendar}",
        "⟦VYLARI Vylaria⟧ and `vylari:` and Vylarisian and the River Vilaris",
        "The_Vylarian_Calendar.md and lore-vylari and affiliation-vylarinmpr and khazrynclt, [[place-khazryndesert|Khazrin]]",
    ].join("\n");
    assert.equal(respellVileria(source), expected);
});

test("a second run changes nothing and a partly swept tree finishes", () => {
    const source = "Vylarians of Vylaria speak Vylari; Vilérian and Vylarian both appear.";
    const once = respellVileria(source);
    assert.equal(once, "Vilérians of Viléria speak Vilari; Vilérian and Vilérian both appear.");
    assert.equal(respellVileria(once), once);
});

test("a capitalised word after a hyphen changes and a lowercase one does not", () => {
    assert.equal(
        respellVileria("pre-Vylarian ruins, lore-vylari"),
        "pre-Vilérian ruins, lore-vylari",
    );
});

test("note file names take the accent-free forms and a second pass changes nothing", () => {
    assert.equal(renamedFile("The_Vylarian_Empire.md"), "The_Vilerian_Empire.md");
    assert.equal(renamedFile("Vylaria_midhalionvylaria.md"), "Vileria_midhalionvylaria.md");
    assert.equal(renamedFile("Vylari_Language.md"), "Vilari_Language.md");
    assert.equal(
        renamedFile("Khazryn_Desert_Adventurers_Guide.md"),
        "Khazrin_Desert_Adventurers_Guide.md",
    );
    assert.equal(renamedFile("Vilerian_Empire.md"), "Vilerian_Empire.md");
});

test("a data file's respellings apply as written, capitalized or in capitals, never in lowercase", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vileria-sweep-"));
    const file = path.join(dir, "respellings.json");
    fs.writeFileSync(
        file,
        JSON.stringify({
            respellings: [
                { from: "Caldovia", to: "Kaldóvia", reading: "kahl-DOH-vee-ah" },
                { from: "Lut-Regyt", to: "Lut-Regit" },
            ],
            forOwner: [{ names: ["Wyndmarch"] }],
        }),
    );
    try {
        const table = sweepTable(loadRespellings(file));
        const source = [
            "---",
            "shortcode: caldovia",
            "name: Caldovia",
            "data: {parents: [caldovia], see: caldovia}",
            "---",
            "[Caldovia]{.name} and [[place-caldovia|Caldovia]], CALDOVIA, a caldovia,",
            "Lut-Regyt's fields, ⟦Caldovia⟧, `Caldovia`, and the Vylarian road.",
        ].join("\n");
        const expected = [
            "---",
            "shortcode: caldovia",
            "name: Kaldóvia",
            "data: {parents: [caldovia], see: caldovia}",
            "---",
            "[Kaldóvia]{.name} and [[place-caldovia|Kaldóvia]], KALDÓVIA, a caldovia,",
            "Lut-Regit's fields, ⟦Caldovia⟧, `Caldovia`, and the Vilérian road.",
        ].join("\n");
        const counts = new Map();
        assert.equal(respellVileria(source, counts, table), expected);
        assert.equal(respellVileria(expected, undefined, table), expected);
        assert.equal(counts.get("Kaldóvia"), 4);
        assert.equal(renamedFile("Caldovia.md", table), "Kaldovia.md");
        assert.equal(renamedFile("Lut_Regyt.md", table), "Lut_Regit.md");
        assert.equal(renamedFile("Caldovia_caldovia.md", table), "Kaldovia_caldovia.md");
        assert.equal(renamedFile("Vylaria.md", table), "Vileria.md");
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("a data file entry without a from or a to is refused", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vileria-sweep-"));
    const file = path.join(dir, "respellings.json");
    fs.writeFileSync(file, JSON.stringify({ respellings: [{ from: "Caldovia" }] }));
    try {
        assert.throws(() => loadRespellings(file), /needs a from and a to/);
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("the respellings data file loads, and each entry is a respelling the default sweep applies", () => {
    for (const { from, to } of loadRespellings(RESPELLINGS_FILE)) {
        assert.notEqual(from, to);
        assert.equal(respellVileria(`the ${from} road`), `the ${to} road`, from);
        assert.equal(respellVileria(`the ${to} road`), `the ${to} road`, to);
    }
});

/** A preservation record for the Dunhari note, read from its raw text. */
function record(raw) {
    return { file: notePath("skill-dunharlng"), raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}

/**
 * Each fixture: a baseline, its correct sweep, and the mutations the preservation
 * assertion must reject.
 */
const YAML_FORMS = {
    "block tags": {
        before: [
            "---",
            "type: skill",
            "tags:",
            "  - Vylari",
            "  - khazryn",
            "data:",
            "  words: []",
            "---",
            "The Vylari road.",
            "",
        ],
        after: [
            "---",
            "type: skill",
            "tags:",
            "  - Vylari",
            "  - khazryn",
            "data:",
            "  words: []",
            "---",
            "The Vilari road.",
            "",
        ],
        forbidden: [
            ["  - Vylari", "  - Vilari"],
            ["  - khazryn", "  - khazrin"],
        ],
    },
    "a quoted retired form": {
        before: [
            "---",
            "type: skill",
            "data:",
            "  retired:",
            '    - "form": Vylarian',
            "      instead: Elsewhere",
            "      why: the Vylarian spelling",
            "---",
            "",
        ],
        after: [
            "---",
            "type: skill",
            "data:",
            "  retired:",
            '    - "form": Vylarian',
            "      instead: Elsewhere",
            "      why: the Vilérian spelling",
            "---",
            "",
        ],
        forbidden: [['"form": Vylarian', '"form": Vilérian']],
    },
    "a folded retired form": {
        before: [
            "---",
            "type: skill",
            "data:",
            "  retired:",
            "    - form: >-",
            "        Vylarian",
            "      instead: Vylaria",
            "      why: the Vylarian spelling",
            "---",
            "",
        ],
        after: [
            "---",
            "type: skill",
            "data:",
            "  retired:",
            "    - form: >-",
            "        Vylarian",
            "      instead: Viléria",
            "      why: the Vilérian spelling",
            "---",
            "",
        ],
        forbidden: [["        Vylarian", "        Vilérian"]],
    },
    "a lowercase description": {
        before: [
            "---",
            "type: skill",
            "description: a vylarian road in khazryn",
            "tags: [vylaria]",
            "data:",
            "  tongue: vylari",
            "  culture: khazryn",
            "---",
            "",
        ],
        after: [
            "---",
            "type: skill",
            "description: a vilérian road in khazrin",
            "tags: [vylaria]",
            "data:",
            "  tongue: vylari",
            "  culture: khazryn",
            "---",
            "",
        ],
        forbidden: [
            ["a vilérian road in khazrin", "a vylarian road in khazryn"],
            ["tags: [vylaria]", "tags: [viléria]"],
            ["tongue: vylari", "tongue: vilari"],
            ["culture: khazryn", "culture: khazrin"],
        ],
    },
    "single-word prose beside identifiers": {
        before: [
            "---",
            "type: skill",
            "description: vylarian",
            "data:",
            "  culture: vylarianclt",
            "  parents: [khazryndesert, khazryn]",
            "  see: vylaria",
            "  relations:",
            "    khazryn: ally",
            "  words:",
            "    - {form: zarel, class: n, gloss: khazryn, concept: zarel}",
            "  retired:",
            "    - {form: Vylarian, instead: vylaria, why: x}",
            "---",
            "",
        ],
        after: [
            "---",
            "type: skill",
            "description: vilérian",
            "data:",
            "  culture: vylarianclt",
            "  parents: [khazryndesert, khazryn]",
            "  see: vylaria",
            "  relations:",
            "    khazryn: ally",
            "  words:",
            "    - {form: zarel, class: n, gloss: khazrin, concept: zarel}",
            "  retired:",
            "    - {form: Vylarian, instead: viléria, why: x}",
            "---",
            "",
        ],
        forbidden: [
            ["description: vilérian", "description: vylarian"],
            ["gloss: khazrin", "gloss: khazryn"],
            ["instead: viléria", "instead: vylaria"],
            ["parents: [khazryndesert, khazryn]", "parents: [khazryndesert, khazrin]"],
            ["see: vylaria", "see: viléria"],
            ["    khazryn: ally", "    khazrin: ally"],
        ],
    },
};
for (const [form, fixture] of Object.entries(YAML_FORMS)) {
    const before = fixture.before.join("\n"),
        after = fixture.after.join("\n");
    test(`the sweep keeps excluded values and renames prose, with ${form}`, () => {
        assert.equal(respellVileria(before), after);
        assert.equal(respellVileria(after), after);
    });
    test(`the preservation assertion accepts the rename and rejects a forbidden change, with ${form}`, () => {
        assert.doesNotThrow(() => assertEncodingMigrationPreserved(record(after), record(before)));
        for (const [from, to] of fixture.forbidden) {
            assert(after.includes(from), from);
            assert.throws(
                () =>
                    assertEncodingMigrationPreserved(
                        record(after.replace(from, to)),
                        record(before),
                    ),
                assert.AssertionError,
                `${from} -> ${to}`,
            );
        }
    });
}

test("a structured name's parts are prose, even where a part equals a shortcode", () => {
    const before =
        "---\nshortcode: vylaria\nname: {full: vylaria, en: [Vylaria]}\ndata:\n  parents: [vylaria]\n---\n\nBody.\n";
    const after =
        "---\nshortcode: vylaria\nname: {full: viléria, en: [Viléria]}\ndata:\n  parents: [vylaria]\n---\n\nBody.\n";
    assert.equal(respellVileria(before), after);
});
