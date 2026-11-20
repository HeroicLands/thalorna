/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { earthMatcher } from "./earth-names.mjs";
import { SOURCES } from "./earth-words.mjs";
import { notePath, parseFrontmatter } from "./note-index.mjs";
import {
    CHECK_NAMES,
    REQUIRED_RESOURCES,
    createSettingChecks,
    loadSettingCheckResources,
    readBoundedFile,
    readIndexRecords,
} from "./setting-checks.mjs";

const guideText = fs.readFileSync(notePath("doc-prnncthlrn"), "utf8");
const languageNote = parseFrontmatter(fs.readFileSync(notePath("skill-aelwthlng"), "utf8"));
const elements = languageNote.data.elements;

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
const languageRecord = {
    ...record("skill", "aelwthlng", { subType: "language", languageCode: "aelw" }),
    data: languageNote.data,
};

/** The element index of the first element with a form and a position. */
const at = (form, position) =>
    elements.findIndex(
        (e) => e.form === form && (e.position === position || e.position === "either"),
    );

/** A context for the opening and closing forms, as the proposer builds it. */
function contextFor(opening, closing, language = languageRecord) {
    const picks = [at(opening, "opening"), at(closing, "closing")];
    assert.ok(
        picks.every((i) => i >= 0),
        `${opening} and ${closing} are declared`,
    );
    return {
        identity: "settlement-1",
        seed: "seed",
        language,
        elements: picks.map((index) => ({ index, form: elements[index].form })),
    };
}

const resources = (overrides = {}) => ({
    guide: { id: id("guide"), text: guideText },
    englishWords: { id: id("english"), words: ["kingwood", "ironwood", "hill"] },
    earthNames: { id: id("earth-names"), matcher: earthMatcher() },
    index: { id: id("index"), records: [languageRecord, record("place", "somewhere")] },
    ...overrides,
});
const build = (overrides, options = { selected: [] }) =>
    createSettingChecks(resources(overrides), options);
const run = (checks, name, context = contextFor("high", "ford")) =>
    Object.fromEntries(
        CHECK_NAMES.map((check) => [check, checks.validators[check](name, context)]),
    );

test("a valid candidate is accepted by all five callbacks, each with evidence", () => {
    const checks = build();
    assert.deepEqual(checks.unavailable, {});
    const results = run(checks, "highford");
    for (const check of CHECK_NAMES) {
        const result = results[check];
        assert.equal(result.available, true, check);
        assert.equal(result.valid, true, check);
        assert.equal(result.check, check);
        assert.ok(result.evidence.length > 0, check);
        assert.ok(
            result.evidence.every((item) => item.ok),
            check,
        );
        assert.equal(result.resource.length, REQUIRED_RESOURCES[check].length, check);
        assert.equal(typeof result.then, "undefined");
    }
    assert.deepEqual(results.indexedNames.resource, [
        {
            name: "index",
            version: "test-1",
            source: "test:index",
            digest: sha(JSON.stringify(resources().index.records)),
        },
    ]);
});

test("every callback is deterministic over the declared pairs it is given", () => {
    const checks = build();
    const again = run(checks, "highford");
    assert.deepEqual(again, run(checks, "highford"));
});

test("a spelling the guide forbids is rejected", () => {
    const checks = build();
    const spelling = (name) => checks.validators.spelling(name, contextFor("high", "ford"));
    for (const name of ["highf'rd", "highfyrd", "highfoy", "highfxrd"]) {
        const result = spelling(name);
        assert.equal(result.available, true, name);
        assert.equal(result.valid, false, name);
        assert.ok(
            result.evidence.some((item) => !item.ok),
            name,
        );
    }
    assert.equal(spelling("highford").valid, true);
});

test("an unsupported kind, position or joining makes every callback unavailable", () => {
    const checks = build();
    const swapped = contextFor("high", "ford");
    swapped.elements.reverse();
    const given = contextFor("kold", "bek");
    given.elements[1] = { index: at("rik", "closing"), form: "rik" };
    const byname = contextFor("kold", "bek");
    byname.elements[1] = { index: at("ton", "closing"), form: "ton" };
    const link = contextFor("high", "ford");
    link.elements[0] = { index: at("s", "link"), form: "s" };
    const closingFirst = contextFor("high", "ford");
    closingFirst.elements[0] = { index: at("ford", "closing"), form: "ford" };
    const openingLast = contextFor("high", "ford");
    openingLast.elements[1] = { index: at("high", "opening"), form: "high" };
    const cases = [
        ["fordhigh", swapped],
        ["koldrik", given],
        ["koldton", byname],
        ["sford", link],
        ["fordford", closingFirst],
        ["highhigh", openingLast],
    ];
    for (const [name, context] of cases)
        for (const check of CHECK_NAMES) {
            const result = checks.validators[check](name, context);
            assert.equal(result.available, false, `${name} ${check}`);
            assert.equal("valid" in result, false, `${name} ${check}`);
            assert.match(result.reason, /plain opening|declared/, `${name} ${check}`);
        }
    // A joining form is outside the plain subset.
    const joined = structuredClone(languageRecord);
    joined.data.elements[at("high", "opening")].joining = "hi";
    const withJoining = build({ index: { id: id("index"), records: [joined] } });
    for (const check of CHECK_NAMES) {
        const result = withJoining.validators[check](
            "highford",
            contextFor("high", "ford", joined),
        );
        assert.equal(result.available, false, check);
        assert.match(result.reason, /plain opening/);
        // The same record's other, plain pairs stay supported.
        assert.equal(
            withJoining.validators[check]("koldbek", contextFor("kold", "bek", joined)).available,
            true,
            check,
        );
    }
});

test("a mismatched candidate for a supported pair is available but invalid", () => {
    const checks = build();
    const context = contextFor("high", "ford");
    const result = checks.validators.language("highmoor", context);
    assert.equal(result.available, true);
    assert.equal(result.valid, false);
    assert.equal(result.evidence.find((item) => item.rule === "composition").ok, false);
    for (const check of CHECK_NAMES)
        assert.equal(checks.validators[check]("highmoor", context).available, true, check);
});

test("an element the language does not declare is unavailable, not accepted", () => {
    const checks = build();
    const context = contextFor("high", "ford");
    context.elements[0] = { index: 9999, form: "high" };
    assert.deepEqual(Object.keys(checks.validators.language("highford", context)).sort(), [
        "available",
        "check",
        "reason",
    ]);
    assert.equal(checks.validators.language("highford", context).available, false);
    const wrongForm = contextFor("high", "ford");
    wrongForm.elements[0] = { index: wrongForm.elements[0].index, form: "other" };
    assert.equal(checks.validators.language("otherford", wrongForm).available, false);
});

test("a form outside the declared roman inventory, a retired form and a recorded form are rejected", () => {
    const narrow = {
        ...languageRecord,
        data: { ...languageRecord.data, roman: languageRecord.data.roman.replaceAll(/[gG]/g, "") },
    };
    const outside = build({ index: { id: id("index"), records: [narrow] } });
    const result = outside.validators.language("highford", contextFor("high", "ford", narrow));
    assert.equal(result.valid, false);
    assert.deepEqual(result.evidence.find((item) => item.rule === "roman-inventory").outside, [
        "g",
    ]);

    const retired = {
        ...languageRecord,
        data: {
            ...languageRecord.data,
            retired: [{ form: "Highford", instead: "Hiford", why: "a test reason" }],
        },
    };
    const held = build({ index: { id: id("index"), records: [retired] } });
    const gone = held.validators.language("highford", contextFor("high", "ford", retired));
    assert.equal(gone.valid, false);
    assert.equal(gone.evidence.find((item) => item.rule === "retired-form").why, "a test reason");

    const recorded = build().validators.language("ashford", contextFor("ash", "ford"));
    assert.equal(recorded.valid, false);
    assert.equal(recorded.evidence.find((item) => item.rule === "recorded-form").ok, false);
});

test("a place draw that does not permit place elements is rejected", () => {
    const noPlace = {
        ...languageRecord,
        data: {
            ...languageRecord.data,
            naming: { draws: [{ kind: "place", elements: ["given"] }] },
        },
    };
    const checks = build({ index: { id: id("index"), records: [noPlace] } });
    const result = checks.validators.language("highford", contextFor("high", "ford", noPlace));
    assert.equal(result.valid, false);
    assert.equal(result.evidence.find((item) => item.rule === "place-draw").ok, false);
});

test("a whole English word is rejected, an unlisted compound is accepted", () => {
    const checks = build();
    const rejected = checks.validators.earthWords("kingwood", contextFor("king", "wood"));
    assert.equal(rejected.valid, false);
    assert.deepEqual(rejected.evidence[0].hits, ["a word of the English list"]);
    assert.equal(checks.validators.earthWords("Hill", contextFor("high", "ford")).valid, false);
    assert.equal(checks.validators.earthWords("highford", contextFor("high", "ford")).valid, true);
});

test("a model-language list the language declares is read, and its absence is unavailable", () => {
    const key = "skill-aelwthlng";
    const before = SOURCES[key];
    SOURCES[key] = ["testlist"];
    try {
        const earth = {
            lists: new Map([["testlist", new Set(["highford"])]]),
            glosses: new Map(),
        };
        const present = build({ earthWordLists: { id: id("lists"), earth } });
        const rejected = present.validators.earthWords("highford", contextFor("high", "ford"));
        assert.equal(rejected.valid, false);
        assert.ok(rejected.evidence[0].hits.some((hit) => hit.includes("testlist")));
        assert.equal(
            present.validators.earthWords("kingwood", contextFor("king", "wood")).valid,
            false,
        );
        const absent = build();
        assert.equal(
            absent.validators.earthWords("highford", contextFor("high", "ford")).available,
            false,
        );
        const empty = build({
            earthWordLists: { id: id("lists"), earth: { lists: new Map(), glosses: new Map() } },
        });
        assert.equal(
            empty.validators.earthWords("highford", contextFor("high", "ford")).available,
            false,
        );
    } finally {
        if (before === undefined) delete SOURCES[key];
        else SOURCES[key] = before;
    }
});

test("an Earth proper name is rejected, written as the setting writes a name", () => {
    const checks = build();
    for (const name of ["japan", "france", "tolkien"]) {
        const result = checks.validators.earthNames(name, contextFor("high", "ford"));
        assert.equal(result.valid, false, name);
        assert.ok(result.evidence[0].findings[0].includes("Earth"), name);
    }
    assert.equal(checks.validators.earthNames("highford", contextFor("high", "ford")).valid, true);
});

test("indexed names, aliases, registers, name spans and accent-folded forms collide", () => {
    const records = [
        languageRecord,
        record("place", "one", { name: { full: "Highford" } }),
        record("place", "two", { name: { full: "Other", en: ["Brinwold"] } }),
        record("lore", "three", { names: [{ name: "Kingwood", type: "place" }] }),
        record("skill", "otherlng", {
            subType: "language",
            data: {
                register: [{ name: "Koldbek", kind: "place" }],
                names: { pattern: "{given}", given: { female: ["Stonihaugh"] } },
            },
        }),
        record("place", "four", { name: { full: "Ravenmóor" } }),
    ];
    const checks = build({ index: { id: id("index"), records } });
    const indexed = (name, context) => checks.validators.indexedNames(name, context);
    const hit = indexed("highford", contextFor("high", "ford"));
    assert.equal(hit.valid, false);
    assert.equal(hit.evidence[0].matches[0].kind, "name");
    assert.equal(hit.evidence[0].matches[0].address, "thalorna-note-place-one");
    assert.ok(
        indexed("brinwold", contextFor("brin", "wold")).evidence[0].matches.some(
            (match) => match.kind === "alias" && match.address === "thalorna-note-place-two",
        ),
    );
    assert.equal(
        indexed("kingwood", contextFor("king", "wood")).evidence[0].matches[0].kind,
        "name-span",
    );
    assert.equal(
        indexed("koldbek", contextFor("kold", "bek")).evidence[0].matches[0].kind,
        "register",
    );
    assert.equal(indexed("stonihaugh", contextFor("stoni", "haugh")).valid, false);
    assert.equal(indexed("ravenmoor", contextFor("raven", "moor")).valid, false);
    assert.equal(indexed("stoniwold", contextFor("stoni", "wold")).valid, true);
});

test("names selected in the same operation collide, read at every call", () => {
    const selected = [];
    const checks = build(undefined, { selected });
    const call = () => checks.validators.indexedNames("highford", contextFor("high", "ford"));
    assert.equal(call().valid, true);
    selected.push("Highford");
    const result = call();
    assert.equal(result.valid, false);
    assert.deepEqual(result.evidence[0].matches, [{ name: "Highford", kind: "selected" }]);

    let names = ["Híghford"];
    const dynamic = build(undefined, { selected: () => names });
    const via = () => dynamic.validators.indexedNames("highford", contextFor("high", "ford"));
    assert.equal(via().valid, false);
    names = new Set();
    assert.equal(via().valid, true);
});

test("a missing resource makes only its callbacks unavailable, never accepted", () => {
    for (const key of ["guide", "englishWords", "earthNames", "index"]) {
        const supplied = resources();
        delete supplied[key];
        const checks = createSettingChecks(supplied, { selected: [] });
        const results = run(checks, "highford");
        for (const check of CHECK_NAMES) {
            const needed = REQUIRED_RESOURCES[check].includes(key);
            assert.equal(results[check].available, !needed, `${key} ${check}`);
            if (needed) {
                assert.deepEqual(Object.keys(results[check]).sort(), [
                    "available",
                    "check",
                    "reason",
                ]);
                assert.ok(checks.unavailable[check].includes(key), `${key} ${check}`);
            }
        }
    }
});

test("a resource without a full identity is unavailable", () => {
    for (const bad of [undefined, null, {}, { name: "n" }, { name: "n", version: "1" }, "id"]) {
        const checks = build({ guide: { id: bad, text: guideText } });
        assert.equal(run(checks, "highford").spelling.available, false);
    }
    const blank = build({
        guide: { id: { name: " ", version: "1", source: "s" }, text: guideText },
    });
    assert.equal(run(blank, "highford").spelling.available, false);
});

test("an empty, malformed or unloaded resource is unavailable", () => {
    const cases = {
        spelling: [
            { guide: { id: id("g"), text: "" } },
            { guide: { id: id("g"), text: "no frontmatter" } },
            { guide: { id: id("g") } },
            { guide: Promise.resolve({ id: id("g"), text: guideText }) },
        ],
        earthWords: [
            { englishWords: { id: id("e"), words: [] } },
            { englishWords: { id: id("e"), words: "hill" } },
            { englishWords: { id: id("e"), words: [1, 2] } },
            { englishWords: { id: id("e"), words: Promise.resolve(["hill"]) } },
            { englishWords: { id: id("e") } },
        ],
        earthNames: [
            { earthNames: { id: id("n"), matcher: /France/u } },
            { earthNames: { id: id("n"), matcher: "France" } },
            { earthNames: { id: id("n") } },
        ],
        indexedNames: [
            { index: { id: id("i"), records: [] } },
            { index: { id: id("i"), records: "records" } },
            { index: { id: id("i"), records: Promise.resolve([languageRecord]) } },
        ],
        language: [
            { index: { id: id("i"), records: [record("place", "only")] } },
            { index: { id: id("i"), records: [{ ...languageRecord, languageCode: "other" }] } },
            { index: { id: id("i"), records: [{ ...languageRecord, shortcode: "other" }] } },
        ],
    };
    for (const [check, variants] of Object.entries(cases))
        for (const overrides of variants) {
            const result = run(build(overrides), "highford")[check];
            assert.equal(
                result.available,
                false,
                `${check} ${JSON.stringify(overrides).slice(0, 60)}`,
            );
            assert.equal("valid" in result, false);
        }
});

test("a language record without its declarations is unavailable", () => {
    for (const data of [
        undefined,
        {},
        { roman: "abc" },
        { roman: "abc", elements: [] },
        { ...languageRecord.data, naming: { draws: [] } },
        { ...languageRecord.data, roman: "" },
    ]) {
        const broken = { ...languageRecord, data };
        const checks = build({ index: { id: id("i"), records: [broken] } });
        const result = checks.validators.language("highford", contextFor("high", "ford", broken));
        assert.equal(result.available, false, JSON.stringify(data)?.slice(0, 40));
    }
});

test("an unsupported language, composition or candidate is unavailable", () => {
    const checks = build();
    const good = contextFor("high", "ford");
    const foreign = { ...good, language: { ...languageRecord, shortcode: "elvndrlng" } };
    for (const context of [
        foreign,
        { ...good, elements: [good.elements[0]] },
        { ...good, elements: undefined },
        { ...good, language: undefined },
        undefined,
        null,
        "context",
    ])
        for (const check of CHECK_NAMES)
            assert.equal(checks.validators[check]("highford", context).available, false, check);
    for (const candidate of [undefined, null, "", "  ", 7, {}])
        for (const check of CHECK_NAMES)
            assert.equal(checks.validators[check](candidate, good).available, false, check);
});

test("the selected names are required, and a throwing or asynchronous source is refused", () => {
    const good = contextFor("high", "ford");
    const none = createSettingChecks(resources());
    assert.equal(none.validators.indexedNames("highford", good).available, false);
    assert.equal(none.validators.spelling("highford", good).available, true);
    const sources = [
        () => {
            throw new Error("boom");
        },
        () => Promise.resolve(["x"]),
        () => ({ then() {} }),
        () => 5,
        () => [1],
        () => [""],
        Promise.resolve([]),
        5,
    ];
    for (const selected of sources) {
        const result = createSettingChecks(resources(), { selected }).validators.indexedNames(
            "highford",
            good,
        );
        assert.equal(result.available, false);
        assert.equal("valid" in result, false);
    }
});

test("a resource that throws on access is unavailable and never escapes", () => {
    const hostile = new Proxy(
        {},
        {
            get() {
                throw new Error("no access");
            },
            has() {
                throw new Error("no access");
            },
        },
    );
    for (const key of ["guide", "englishWords", "earthNames", "index"]) {
        const checks = createSettingChecks({ ...resources(), [key]: hostile }, { selected: [] });
        const results = run(checks, "highford");
        for (const check of CHECK_NAMES)
            if (REQUIRED_RESOURCES[check].includes(key))
                assert.equal(results[check].available, false, `${key} ${check}`);
    }
    const bad = createSettingChecks(undefined, { selected: [] });
    for (const check of CHECK_NAMES)
        assert.equal(
            bad.validators[check]("highford", contextFor("high", "ford")).available,
            false,
        );
});

test("a candidate carrying a thenable context field never produces a promise", () => {
    const checks = build();
    const context = contextFor("high", "ford");
    for (const check of CHECK_NAMES) {
        const result = checks.validators[check]("highford", { ...context, then() {} });
        assert.equal(typeof result.then, "undefined", check);
    }
});

const sha = (data) => `sha256:${createHash("sha256").update(data).digest("hex")}`;
const guideFile = path.resolve(notePath("doc-prnncthlrn"));
const englishFile = path.resolve("assets/data/english-words.json");
const sourcesFile = path.resolve("assets/data/english-words.sources.json");
const indexLines = (records) => records.map((r) => JSON.stringify(r)).join("\n") + "\n";

/** A scratch directory with an index file of the given records. */
function withIndex(records, body) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "setting-checks-"));
    try {
        const file = path.join(dir, "index.jsonl");
        fs.writeFileSync(file, indexLines(records));
        return body(dir, file);
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}
const explicit = (file, extra = {}) => ({
    guideFile,
    englishWordsFile: englishFile,
    englishSourcesFile: sourcesFile,
    indexFile: file,
    ...extra,
});

test("importing the module reads no content and works from any directory", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "setting-checks-import-"));
    try {
        const probe = path.join(dir, "probe.mjs");
        fs.writeFileSync(
            probe,
            `import fs from "node:fs";
const reads = [];
for (const method of ["readFileSync", "readdirSync", "opendirSync", "statSync", "existsSync"]) {
    const original = fs[method];
    fs[method] = function (...args) {
        reads.push([method, String(args[0])]);
        return original.apply(this, args);
    };
}
const entry = await import(process.argv[2]);
console.log(JSON.stringify({ reads, entry: typeof entry.createSettingChecks, loader: typeof entry.loadSettingCheckResources }));
`,
        );
        const empty = fs.mkdtempSync(path.join(dir, "cwd-"));
        const module = new URL("./setting-checks.mjs", import.meta.url).href;
        const run = spawnSync(process.execPath, [probe, module], { cwd: empty, encoding: "utf8" });
        assert.equal(run.status, 0, run.stderr);
        const seen = JSON.parse(run.stdout);
        assert.equal(seen.entry, "function");
        assert.equal(seen.loader, "function");
        for (const [method, file] of seen.reads) {
            assert.ok(method === "readFileSync", `${method} ${file}`);
            assert.match(file, /\.(mjs|js)$/, `only module sources are read: ${file}`);
        }
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("the loader reads explicit files, identifies each by the digest of its bytes, and is independent of the working directory", () => {
    const records = [languageRecord, record("place", "one", { name: { full: "Highford" } })];
    withIndex(records, (dir, file) => {
        assert.equal(readIndexRecords(file).length, 2);
        const loaded = loadSettingCheckResources(explicit(file));
        assert.deepEqual(loaded.problems, []);
        assert.deepEqual(Object.keys(loaded.resources).sort(), [
            "earthNames",
            "englishWords",
            "guide",
            "index",
        ]);
        for (const resource of Object.values(loaded.resources))
            for (const key of ["name", "version", "source", "digest"])
                assert.ok(resource.id[key].length > 0, key);
        assert.equal(loaded.resources.index.id.digest, sha(fs.readFileSync(file)));
        assert.equal(loaded.resources.guide.id.digest, sha(fs.readFileSync(guideFile)));
        assert.equal(loaded.resources.englishWords.id.digest, sha(fs.readFileSync(englishFile)));
        assert.match(loaded.resources.englishWords.id.version, /^wordlist-english@\S+$/);
        assert.match(loaded.resources.earthNames.id.version, /^countries-list@\d/);
        const checks = createSettingChecks(loaded.resources, { selected: [] });
        assert.deepEqual(checks.unavailable, {});
        const context = contextFor("high", "ford");
        assert.equal(checks.validators.spelling("highford", context).valid, true);
        assert.equal(checks.validators.earthNames("highford", context).valid, true);
        assert.equal(checks.validators.indexedNames("highford", context).valid, false);
        assert.equal(
            checks.validators.indexedNames("stoniwold", contextFor("stoni", "wold")).valid,
            true,
        );
        assert.equal(checks.resources.indexedNames[0].digest, loaded.resources.index.id.digest);

        const cwd = process.cwd();
        process.chdir(dir);
        try {
            const away = loadSettingCheckResources(explicit(file));
            assert.deepEqual(away.problems, []);
            assert.equal(away.resources.index.id.digest, loaded.resources.index.id.digest);
        } finally {
            process.chdir(cwd);
        }
    });
});

test("captured immutable data and the loader give the same results and identities", () => {
    withIndex(
        [languageRecord, record("place", "one", { name: { full: "Highford" } })],
        (dir, file) => {
            const loaded = loadSettingCheckResources(explicit(file)).resources;
            const captured = {
                guide: Object.freeze({ id: { ...loaded.guide.id }, text: loaded.guide.text }),
                englishWords: Object.freeze({
                    id: { ...loaded.englishWords.id },
                    words: Object.freeze([...loaded.englishWords.words]),
                }),
                earthNames: Object.freeze({ ...loaded.earthNames }),
                index: Object.freeze({
                    id: { ...loaded.index.id },
                    records: Object.freeze(readIndexRecords(file)),
                }),
            };
            const left = createSettingChecks(loaded, { selected: ["Wynford"] });
            const right = createSettingChecks(captured, { selected: ["Wynford"] });
            for (const [open, close] of [
                ["high", "ford"],
                ["stoni", "wold"],
                ["king", "wood"],
                ["ash", "ford"],
            ]) {
                const context = contextFor(open, close);
                for (const check of CHECK_NAMES)
                    assert.deepEqual(
                        right.validators[check](open + close, context),
                        left.validators[check](open + close, context),
                        `${open}${close} ${check}`,
                    );
            }
            assert.deepEqual(right.resources, left.resources);
        },
    );
});

test("the identity digest of captured data changes with the data", () => {
    const base = build().resources;
    const digestOf = (overrides, check) => build(overrides).resources[check][0].digest;
    assert.match(base.indexedNames[0].digest, /^sha256:[0-9a-f]{64}$/);
    assert.equal(base.indexedNames[0].digest, build().resources.indexedNames[0].digest);
    const more = [languageRecord, record("place", "somewhere"), record("place", "added")];
    assert.notEqual(
        digestOf({ index: { id: id("index"), records: more } }, "indexedNames"),
        base.indexedNames[0].digest,
    );
    assert.notEqual(
        digestOf({ guide: { id: id("guide"), text: `${guideText}\n` } }, "spelling"),
        base.spelling[0].digest,
    );
    assert.notEqual(
        digestOf({ englishWords: { id: id("english"), words: ["hill"] } }, "earthWords"),
        base.earthWords[0].digest,
    );
    const stated = `sha256:${"a".repeat(64)}`;
    assert.equal(
        digestOf(
            { guide: { id: { ...id("guide"), digest: stated }, text: guideText } },
            "spelling",
        ),
        stated,
    );
    const bad = build({ guide: { id: { ...id("guide"), digest: "md5" }, text: guideText } });
    assert.equal(run(bad, "highford").spelling.available, false);
});

test("resources are snapshotted: later changes to the data or the files do not change results", () => {
    const records = [languageRecord, record("place", "one", { name: { full: "Highford" } })];
    withIndex(records, (dir, file) => {
        const loaded = loadSettingCheckResources(explicit(file)).resources;
        const checks = createSettingChecks(loaded, { selected: [] });
        const context = contextFor("stoni", "wold");
        const before = run(checks, "stoniwold", context);
        assert.equal(before.indexedNames.valid, true);
        fs.writeFileSync(
            file,
            indexLines([record("place", "two", { name: { full: "Stoniwold" } })]),
        );
        loaded.index.records.push(record("place", "three", { name: { full: "Stoniwold" } }));
        loaded.englishWords.words.push("stoniwold");
        loaded.index.records[0].data.roman = "";
        assert.deepEqual(run(checks, "stoniwold", context), before);
    });
});

test("a missing, unreadable or oversized explicit input is unavailable", () => {
    withIndex([languageRecord], (dir, file) => {
        const none = loadSettingCheckResources({});
        assert.deepEqual(Object.keys(none.resources), ["earthNames"]);
        assert.equal(none.problems.length, 3);
        const results = run(createSettingChecks(none.resources, { selected: [] }), "highford");
        for (const check of ["spelling", "language", "earthWords", "indexedNames"])
            assert.equal(results[check].available, false, check);

        const absent = loadSettingCheckResources(explicit(path.join(dir, "absent.jsonl")));
        assert.equal(absent.resources.index, undefined);
        assert.equal(absent.problems.length, 1);

        for (const [option, key] of [
            ["guideFile", "guide"],
            ["englishWordsFile", "englishWords"],
            ["indexFile", "index"],
        ]) {
            const big = loadSettingCheckResources(explicit(file, { limits: { [option]: 10 } }));
            assert.equal(big.resources[key], undefined, option);
            assert.match(big.problems.join("\n"), new RegExp(`${key}: .*byte limit`));
            const checks = createSettingChecks(big.resources, { selected: [] });
            assert.equal(
                checks.validators[
                    key === "index" ? "indexedNames"
                    : key === "guide" ? "spelling"
                    : "earthWords"
                ]("highford", contextFor("high", "ford")).available,
                false,
            );
        }

        fs.writeFileSync(path.join(dir, "model.txt"), "highford\n");
        const lists = loadSettingCheckResources(explicit(file, { wordlistDirs: [dir] }));
        assert.match(lists.resources.earthWordLists.id.digest, /^sha256:/);
        assert.ok(lists.resources.earthWordLists.earth.lists.get("model").has("highford"));
        const bigLists = loadSettingCheckResources(
            explicit(file, { wordlistDirs: [dir], limits: { wordlistDirs: 1 } }),
        );
        assert.equal(bigLists.resources.earthWordLists, undefined);
        assert.match(bigLists.problems.join("\n"), /earthWordLists: .*byte limit/);
        const empty = loadSettingCheckResources(
            explicit(file, { wordlistDirs: [path.join(dir, "none")] }),
        );
        assert.equal(empty.resources.earthWordLists, undefined);

        fs.writeFileSync(file, "{not json}\n");
        assert.equal(loadSettingCheckResources(explicit(file)).problems.length, 1);
        assert.throws(() => readIndexRecords(file));
        fs.writeFileSync(file, "[1]\n");
        assert.throws(() => readIndexRecords(file), /not an object/);
        assert.equal(loadSettingCheckResources(explicit(file)).problems.length, 1);
    });
});

test("a polity's declared settlement rows collide", () => {
    const polity = record("affiliation", "polity", {
        data: { settlements: [{ settlement: "Stoniwold", households: 10 }, { households: 3 }] },
    });
    const checks = build({ index: { id: id("index"), records: [languageRecord, polity] } });
    const result = checks.validators.indexedNames("stoniwold", contextFor("stoni", "wold"));
    assert.equal(result.valid, false);
    assert.equal(result.evidence[0].matches[0].kind, "settlement");
    assert.equal(result.evidence[0].matches[0].address, "thalorna-note-affiliation-polity");
});

test("names differing only in spaces, hyphens or apostrophes collide", () => {
    for (const variant of [
        "Stoni Wold",
        "Stoni-wold",
        "Stoni'wold",
        "Stoni\u2019wold",
        "Stoni\u2010wold",
    ]) {
        const indexed = build({
            index: {
                id: id("index"),
                records: [languageRecord, record("place", "x", { name: { full: variant } })],
            },
        });
        const context = contextFor("stoni", "wold");
        assert.equal(indexed.validators.indexedNames("stoniwold", context).valid, false, variant);
        const chosen = build(undefined, { selected: [variant] });
        assert.equal(chosen.validators.indexedNames("stoniwold", context).valid, false, variant);
    }
});

test("a malformed model-language list resource is unavailable", () => {
    const key = "skill-aelwthlng";
    const before = SOURCES[key];
    SOURCES[key] = ["testlist"];
    try {
        for (const earth of [
            undefined,
            {},
            { lists: {} },
            { lists: [["testlist", new Set(["x"])]] },
        ]) {
            const checks = build({ earthWordLists: { id: id("lists"), earth } });
            const result = checks.validators.earthWords("highford", contextFor("high", "ford"));
            assert.equal(result.available, false);
        }
    } finally {
        if (before === undefined) delete SOURCES[key];
        else SOURCES[key] = before;
    }
});

test("the selected names must be an array or a set, after calling a function", () => {
    const good = contextFor("high", "ford");
    const call = (selected) =>
        createSettingChecks(resources(), { selected }).validators.indexedNames("highford", good);
    const refused = (selected, reason) => {
        const result = call(selected);
        assert.equal(result.available, false, String(reason));
        assert.match(result.reason, /array or a set|name/);
    };
    refused("Highford", "string");
    refused(() => "Highford", "function returning a string");
    refused(
        (function* () {
            yield "Highford";
        })(),
        "generator",
    );
    refused(
        () =>
            (function* () {
                yield "Highford";
            })(),
        "function returning a generator",
    );
    refused(["Highford"][Symbol.iterator](), "array iterator");
    refused(() => new Map([["Highford", 1]]), "map");
    refused(() => [1], "non-string member");
    refused(new Set([""]), "blank member");
    assert.equal(call(["Wynford"]).valid, true);
    assert.equal(call(new Set(["Wynford"])).valid, true);
    assert.equal(call(["Highford"]).valid, false);
    assert.equal(call(new Set(["Highford"])).valid, false);

    let calls = 0;
    const checks = createSettingChecks(resources(), {
        selected: () => (++calls % 2 ? ["Wynford"] : ["Highford"]),
    });
    const results = CHECK_NAMES.map((check) => checks.validators[check]("highford", good));
    assert.equal(results[4].valid, true);
    assert.equal(checks.validators.indexedNames("highford", good).valid, false);
    const throwing = createSettingChecks(resources(), {
        selected: () => {
            throw new Error("boom");
        },
    });
    assert.equal(throwing.validators.indexedNames("highford", good).available, false);
});

test("an explicit file is read through one descriptor within its limit", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "setting-checks-bound-"));
    try {
        const file = path.join(dir, "data.txt");
        fs.writeFileSync(file, "12345");
        assert.equal(readBoundedFile(file, 5).toString(), "12345");
        assert.throws(() => readBoundedFile(file, 4), /above the 4 byte limit/);
        assert.equal(readBoundedFile(file, 5, { onSized: () => {} }).length, 5);
        // A file that grows after the size check cannot exceed the limit.
        assert.throws(
            () => readBoundedFile(file, 5, { onSized: () => fs.appendFileSync(file, "6789") }),
            /above the 5 byte limit/,
        );
        assert.equal(fs.statSync(file).size, 9);
        assert.throws(() => readBoundedFile(path.join(dir, "absent"), 5), /ENOENT/);
        assert.throws(() => readBoundedFile("", 5), /no file is named/);
        assert.throws(() => readBoundedFile(dir, 5), /not a regular file|EISDIR/);
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("a non-regular explicit input is refused without blocking", (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "setting-checks-special-"));
    try {
        if (fs.existsSync("/dev/null"))
            assert.throws(() => readBoundedFile("/dev/null", 100), /not a regular file/);
        else t.diagnostic("no /dev/null on this platform");
        const fifo = path.join(dir, "pipe");
        const made = spawnSync("mkfifo", [fifo]);
        if (made.status === 0) {
            assert.throws(() => readBoundedFile(fifo, 100), /not a regular file/);
            const link = path.join(dir, "link");
            fs.symlinkSync(fifo, link);
            assert.throws(() => readBoundedFile(link, 100), /not a regular file/);
            const loaded = loadSettingCheckResources(explicit(fifo));
            assert.equal(loaded.resources.index, undefined);
            assert.match(loaded.problems.join("\n"), /index: .*not a regular file/);
        } else t.diagnostic("mkfifo is unavailable; the FIFO cases are skipped");
        const asDirectory = loadSettingCheckResources(explicit(dir));
        assert.equal(asDirectory.resources.index, undefined);
        assert.ok(asDirectory.problems.some((line) => line.startsWith("index:")));
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test("an invalid limit override is a problem for the resource it bounds", () => {
    withIndex([languageRecord], (dir, file) => {
        for (const bad of [undefined, Number.NaN, Number.POSITIVE_INFINITY, -1, 1.5, "10", null]) {
            const loaded = loadSettingCheckResources(
                explicit(file, { limits: { indexFile: bad } }),
            );
            assert.equal(loaded.resources.index, undefined, String(bad));
            assert.match(
                loaded.problems.join("\n"),
                /index: the indexFile limit is not a non-negative integer/,
            );
            assert.equal(loaded.resources.guide !== undefined, true);
        }
        const notObject = loadSettingCheckResources(explicit(file, { limits: null }));
        assert.equal(notObject.resources.index, undefined);
        assert.equal(
            loadSettingCheckResources(explicit(file, { limits: { indexFile: 0 } })).resources.index,
            undefined,
        );
        assert.ok(
            loadSettingCheckResources(explicit(file, { limits: { indexFile: 1e9 } })).resources
                .index,
        );
    });
});

test("word lists come from one bounded pass over the directories", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "setting-checks-lists-"));
    try {
        const second = fs.mkdtempSync(path.join(dir, "more-"));
        fs.writeFileSync(path.join(dir, "model.txt"), "highford\n");
        fs.writeFileSync(path.join(dir, "model.tsv"), "highford\tnoun\ta ford\n");
        fs.writeFileSync(path.join(dir, "ignored.md"), "x");
        fs.writeFileSync(path.join(second, "other.txt"), "stoniwold\n");
        withIndex([languageRecord], (scratch, file) => {
            const options = (extra = {}) =>
                explicit(file, { wordlistDirs: [dir, second], ...extra });
            const loaded = loadSettingCheckResources(options());
            assert.deepEqual(loaded.problems, []);
            const { lists } = loaded.resources.earthWordLists.earth;
            assert.ok(lists.get("model").has("highford"));
            assert.equal(lists.get("other").size, 1);
            const hash = createHash("sha256");
            const model = fs.readFileSync(path.join(dir, "model.txt"));
            const tsv = fs.readFileSync(path.join(dir, "model.tsv"));
            hash.update(`0\0model.tsv\0${tsv.length}\0`).update(tsv);
            hash.update(`0\0model.txt\0${model.length}\0`).update(model);
            const other = fs.readFileSync(path.join(second, "other.txt"));
            hash.update(`1\0other.txt\0${other.length}\0`).update(other);
            assert.equal(loaded.resources.earthWordLists.id.digest, `sha256:${hash.digest("hex")}`);
            fs.writeFileSync(path.join(dir, "model.txt"), "changed\n");
            assert.ok(lists.get("model").has("highford"));
            assert.equal(
                loadSettingCheckResources(options()).resources.earthWordLists.id.digest ===
                    loaded.resources.earthWordLists.id.digest,
                false,
            );

            const tooMany = loadSettingCheckResources(options({ limits: { wordlistEntries: 3 } }));
            assert.equal(tooMany.resources.earthWordLists, undefined);
            assert.match(tooMany.problems.join("\n"), /more than 3 entries/);
            const tooBig = loadSettingCheckResources(options({ limits: { wordlistDirs: 10 } }));
            assert.equal(tooBig.resources.earthWordLists, undefined);
            assert.match(tooBig.problems.join("\n"), /byte limit/);
        });
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});
