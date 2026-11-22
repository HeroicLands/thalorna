/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { earthMatcher } from "./earth-names.mjs";
import { SOURCES } from "./earth-words.mjs";
import { notePath, parseFrontmatter } from "./note-index.mjs";
import { CHECK_NAMES, REQUIRED_RESOURCES, createSettingChecks } from "./setting-checks.mjs";

const guideText = fs.readFileSync(notePath("doc-prnncthlrn"), "utf8");
const eilwithiNote = parseFrontmatter(fs.readFileSync(notePath("skill-aelwthlng"), "utf8"));
const dunhariNote = parseFrontmatter(fs.readFileSync(notePath("skill-dunharlng"), "utf8"));

const id = (name) => ({ name, version: "test-1", source: `test:${name}` });
const record = (type, shortcode, extra = {}) => ({
    address: {
        canonical: { address: `thalorna-note-${type}-${shortcode}` },
        slug: `${type}-${shortcode}`,
    },
    package: "thalorna",
    type,
    shortcode,
    name: { full: shortcode },
    ...extra,
});
const eilwithiRecord = {
    ...record("skill", "aelwthlng", { subType: "language", languageCode: "aelw" }),
    data: eilwithiNote.data,
};

const declared = (position, forms) =>
    forms.map(([form, sense]) => ({ form, position, kind: "place", sense, examples: [] }));
const dunhariElements = [
    ...declared("opening", [
        ["qarvel", "to wall in"],
        ["tazhin", "to thresh grain"],
        ["venzel", "to press oil"],
        ["sorvad", "to sow"],
        ["tevraz", "to well up without failing"],
        ["ghavul", "to draw water"],
    ]),
    ...declared("closing", [
        ["avad", "watered ground: an oasis or a spring"],
        ["akhend", "a town, a walled settlement"],
    ]),
];
const dunhariRecord = {
    ...record("skill", "dunharlng", { subType: "language", languageCode: "dunh" }),
    data: {
        ...dunhariNote.data,
        elements: dunhariElements,
        naming: { draws: [{ kind: "place", elements: ["place"] }] },
    },
};

/** A context for the opening and closing forms of a language record, as the proposer builds it. */
function contextFor(language, opening, closing) {
    const data = language.data.elements;
    const picks = [
        data.findIndex((e) => e.form === opening && e.position !== "closing"),
        data.findIndex((e) => e.form === closing && e.position !== "opening"),
    ];
    assert.ok(
        picks.every((i) => i >= 0),
        `${opening} and ${closing} are declared`,
    );
    return {
        identity: "settlement-1",
        seed: "seed",
        language,
        elements: picks.map((index) => ({ index, form: data[index].form })),
    };
}
const dunhari = (opening, closing) => contextFor(dunhariRecord, opening, closing);
const eilwithi = () => contextFor(eilwithiRecord, "high", "ford");

const modelLists = (extra = [], emptied) => ({
    id: id("lists"),
    earth: {
        lists: new Map(
            SOURCES["skill-dunharlng"].map((name) => [
                name,
                name === emptied ? new Set() : new Set(["kabul", ...extra]),
            ]),
        ),
        glosses: new Map(),
    },
});
const resources = (overrides = {}) => ({
    guide: { id: id("guide"), text: guideText },
    englishWords: { id: id("english"), words: ["kingwood", "ironwood", "hill"] },
    earthNames: { id: id("earth-names"), matcher: earthMatcher() },
    index: {
        id: id("index"),
        records: [eilwithiRecord, dunhariRecord, record("place", "somewhere")],
    },
    earthWordLists: modelLists(),
    ...overrides,
});
const build = (overrides, options = { selected: [] }) =>
    createSettingChecks(resources(overrides), options);
const run = (checks, name, context) =>
    Object.fromEntries(
        CHECK_NAMES.map((check) => [check, checks.validators[check](name, context)]),
    );

test("a declared Dunhari composition is accepted by all five callbacks", () => {
    const checks = build();
    assert.deepEqual(checks.unavailable, {});
    const results = run(checks, "qarvelavad", dunhari("qarvel", "avad"));
    for (const check of CHECK_NAMES) {
        assert.equal(results[check].available, true, check);
        assert.equal(results[check].valid, true, `${check} ${JSON.stringify(results[check])}`);
    }
    assert.equal(
        results.earthWords.resource.length,
        REQUIRED_RESOURCES.earthWords.length + 1,
        "the model-language lists identify the Earth-word verdict",
    );
    assert.equal(results.earthWords.resource.at(-1).name, "lists");
    assert.equal(results.spelling.resource.length, REQUIRED_RESOURCES.spelling.length);
    for (const [opening, closing, name] of [
        ["tevraz", "akhend", "tevrazakhend"],
        ["ghavul", "akhend", "ghavulakhend"],
        ["sorvad", "avad", "sorvadavad"],
    ])
        assert.equal(
            build().validators.language(name, dunhari(opening, closing)).valid,
            true,
            name,
        );
});

test("Eilwìthi results are the same when Dunhari is also supplied", () => {
    const both = run(build(), "highford", eilwithi());
    const alone = run(
        createSettingChecks(
            resources({
                index: { id: id("index"), records: [eilwithiRecord] },
                earthWordLists: undefined,
            }),
            { selected: [] },
        ),
        "highford",
        eilwithi(),
    );
    for (const check of CHECK_NAMES) {
        assert.equal(both[check].available, true, check);
        assert.equal(both[check].valid, alone[check].valid, check);
        assert.equal(both[check].resource.length, alone[check].resource.length, check);
    }
    assert.deepEqual(both.language.evidence, alone.language.evidence);
});

test("a Dunhari candidate that is not the declared composition is rejected", () => {
    const checks = build();
    const wrong = checks.validators.language("tazhinavad", dunhari("qarvel", "avad"));
    assert.equal(wrong.available, true);
    assert.equal(wrong.valid, false);
    assert.equal(wrong.evidence.find((item) => item.rule === "composition").ok, false);
    const outside = checks.validators.language("qarvelavað", dunhari("qarvel", "avad"));
    assert.equal(outside.evidence.find((item) => item.rule === "roman-inventory").ok, false);
});

test("a Dunhari name already in the index or selected is rejected", () => {
    const named = { ...record("place", "oldplace"), name: { full: "Qarvelakhend" } };
    const indexed = build({
        index: { id: id("index"), records: [eilwithiRecord, dunhariRecord, named] },
    });
    const hit = indexed.validators.indexedNames("qarvelakhend", dunhari("qarvel", "akhend"));
    assert.equal(hit.valid, false);
    assert.ok(hit.evidence[0].matches.some((match) => match.name === "Qarvelakhend"));
    const chosen = build(undefined, { selected: ["Venzelavad"] });
    assert.equal(
        chosen.validators.indexedNames("venzelavad", dunhari("venzel", "avad")).valid,
        false,
    );
    assert.equal(
        chosen.validators.indexedNames("qarvelavad", dunhari("qarvel", "avad")).valid,
        true,
    );
});

test("a Dunhari candidate that is a model-language word is rejected", () => {
    const checks = build({ earthWordLists: modelLists(["karvelavad"]) });
    const result = checks.validators.earthWords("qarvelavad", dunhari("qarvel", "avad"));
    assert.equal(result.available, true);
    assert.equal(result.valid, false);
    assert.ok(result.evidence[0].hits.length > 0);
});

test("missing Dunhari Earth-word resources make only Dunhari earthWords unavailable", () => {
    const context = dunhari("qarvel", "avad");
    const missing = build({ earthWordLists: undefined });
    const absent = missing.validators.earthWords("qarvelavad", context);
    assert.equal(absent.available, false);
    assert.match(absent.reason, /model-language word lists/);
    assert.equal(missing.validators.earthWords("highford", eilwithi()).valid, true);
    for (const check of CHECK_NAMES.filter((name) => name !== "earthWords"))
        assert.equal(missing.validators[check]("qarvelavad", context).available, true, check);

    for (const lists of [
        { lists: new Map(), glosses: new Map() },
        modelLists([], SOURCES["skill-dunharlng"][0]).earth,
        { lists: {} },
        {},
    ]) {
        const checks = build({ earthWordLists: { id: id("lists"), earth: lists } });
        assert.equal(checks.validators.earthWords("qarvelavad", context).available, false);
        assert.equal(checks.validators.earthWords("highford", eilwithi()).available, true);
    }
});

test("a language record absent from the index leaves only that language unavailable", () => {
    const withoutDunhari = build({
        index: { id: id("index"), records: [eilwithiRecord, record("place", "somewhere")] },
    });
    for (const check of CHECK_NAMES) {
        const result = withoutDunhari.validators[check]("qarvelavad", dunhari("qarvel", "avad"));
        assert.equal(result.available, false, check);
        assert.match(result.reason, /no dunharlng language record/, check);
    }
    assert.equal(withoutDunhari.validators.language("highford", eilwithi()).valid, true);
    const withoutEilwithi = build({
        index: { id: id("index"), records: [dunhariRecord, record("place", "somewhere")] },
    });
    assert.equal(withoutEilwithi.validators.language("highford", eilwithi()).available, false);
    assert.equal(
        withoutEilwithi.validators.language("qarvelavad", dunhari("qarvel", "avad")).valid,
        true,
    );
});

test("Dunhari elements outside the declared composition are unavailable", () => {
    const checks = build();
    const context = dunhari("qarvel", "avad");
    const swapped = { ...context, elements: [context.elements[1], context.elements[0]] };
    const undeclared = {
        ...context,
        elements: [{ index: 99, form: "qarvel" }, context.elements[1]],
    };
    const eilwithiElements = { ...context, elements: eilwithi().elements };
    for (const [bad, reason] of [
        [swapped, /not a plain opening and a plain closing place element/],
        [undeclared, /not declared by the language/],
        [eilwithiElements, /not declared by the language/],
    ])
        for (const check of CHECK_NAMES) {
            const result = checks.validators[check]("qarvelavad", bad);
            assert.equal(result.available, false, check);
            assert.match(result.reason, reason, check);
        }
    const joined = {
        ...dunhariRecord,
        data: {
            ...dunhariRecord.data,
            elements: dunhariElements.map((e) => (e.form === "avad" ? { ...e, joining: "-" } : e)),
        },
    };
    const joining = build({ index: { id: id("index"), records: [eilwithiRecord, joined] } });
    for (const check of CHECK_NAMES) {
        const result = joining.validators[check](
            "qarvelavad",
            contextFor(joined, "qarvel", "avad"),
        );
        assert.equal(result.available, false, check);
        assert.match(result.reason, /not a plain opening and a plain closing place element/, check);
    }
});

test("a third language is unavailable, as is a Dunhari note with another identity", () => {
    const thirdNote = parseFrontmatter(fs.readFileSync(notePath("skill-elvndrlng"), "utf8"));
    const third = {
        ...record("skill", "elvndrlng", { subType: "language", languageCode: "elvn" }),
        data: {
            ...thirdNote.data,
            elements: dunhariElements,
            naming: { draws: [{ kind: "place", elements: ["place"] }] },
        },
    };
    const checks = build({
        index: {
            id: id("index"),
            records: [eilwithiRecord, dunhariRecord, third, record("place", "somewhere")],
        },
    });
    const good = dunhari("qarvel", "avad");
    for (const language of [
        third,
        { ...dunhariRecord, languageCode: "elvn" },
        { ...dunhariRecord, package: "kethira" },
        { ...dunhariRecord, subType: "tongue" },
    ])
        for (const check of CHECK_NAMES) {
            const context =
                language === third ? contextFor(third, "qarvel", "avad") : { ...good, language };
            const result = checks.validators[check]("qarvelavad", context);
            assert.equal(result.available, false, check);
            assert.match(result.reason, /only the aelwthlng and dunharlng languages/, check);
        }
});

test("a malformed vowel-group entry in the guide leaves only spelling unavailable", () => {
    const broken = guideText.replace(
        "      - {letters: [ai], kind: vowel pair, like: eye, ipa: aɪ}",
        "      - {letters: 5, kind: vowel pair}\n      - {letters: [ai], kind: vowel pair, like: eye, ipa: aɪ}",
    );
    assert.notEqual(broken, guideText);
    const checks = build({ guide: { id: id("guide"), text: broken } });
    assert.match(checks.unavailable.spelling, /the guide cannot be read/);
    assert.equal(
        checks.validators.spelling("qarvelavad", dunhari("qarvel", "avad")).available,
        false,
    );
    assert.equal(checks.validators.language("qarvelavad", dunhari("qarvel", "avad")).valid, true);
});

test("the factory reports each language's unavailable callbacks and the lists it read", () => {
    const whole = build();
    assert.deepEqual(
        whole.languages.map((entry) => entry.unavailable),
        [{}, {}],
    );
    assert.ok(whole.resources.earthWords.some((item) => item.name === "lists"));
    assert.equal(
        whole.resources.spelling.some((item) => item.name === "lists"),
        false,
    );

    const noLists = build({ earthWordLists: undefined });
    const [eilwithiEntry, dunhariEntry] = noLists.languages;
    assert.deepEqual(eilwithiEntry.unavailable, {});
    assert.match(dunhariEntry.unavailable.earthWords, /model-language word lists/);
    assert.deepEqual(Object.keys(dunhariEntry.unavailable), ["earthWords"]);
    assert.equal(
        noLists.resources.earthWords.some((item) => item.name === "lists"),
        false,
    );

    const noEilwithi = build({
        index: { id: id("index"), records: [dunhariRecord, record("place", "somewhere")] },
    });
    assert.deepEqual(
        Object.keys(noEilwithi.languages[0].unavailable).sort(),
        [...CHECK_NAMES].sort(),
    );
    assert.match(noEilwithi.languages[0].unavailable.language, /no aelwthlng language record/);
    assert.deepEqual(noEilwithi.languages[1].unavailable, {});
});

test("the supported languages are the Eilwìthi and Dunhari notes", () => {
    assert.deepEqual(
        build().languages.map((entry) => entry.shortcode),
        ["aelwthlng", "dunharlng"],
    );
});
