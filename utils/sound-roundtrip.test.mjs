/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import YAML from "yaml";
import { CONTENT_DIR, notePath, forgetNoteIndex } from "./note-index.mjs";
import { compileEncoding, decodeText } from "@heroiclands/package-build/engine/encoding";
import {
    encodeWithLanguage,
    decodeWithLanguage,
} from "@heroiclands/package-build/engine/encoding-language";
import {
    collectRoundtripCases,
    checkSoundRoundtrips,
    main,
    REQUIRED_ENCODINGS,
    writeFindingReport,
} from "./sound-roundtrip.mjs";
import { positionOfFrontmatterPath } from "@heroiclands/package-build/engine/diagnostics";

const note = (type, shortcode, data, subType) => {
    const fm = { type, shortcode, ...(subType ? { subType } : {}), data };
    return {
        ...fm,
        package: "thalorna",
        system: "note",
        file: `${shortcode}.md`,
        raw: `---\n${YAML.stringify(fm)}---\n`,
    };
};
const config = {
    contentPackage: "thalorna",
    rootDir: process.cwd(),
    languages: { test: { tag: "qaa", note: "skill-child" } },
};
const guide = note("doc", "prnncthlrn", { sounds: { letters: ["a", "e"] } });
const script = note(
    "skill",
    "semrnscrpt",
    { script: { fonts: ["semaron-kuriale", "second-face"] } },
    "script",
);
const language = (data) =>
    note("skill", "child", { roman: "ae", sounds: { letters: ["a", "e"] }, ...data }, "language");

function fixture(mapping, words, font = "semaron-kuriale") {
    const data = {
        language: "test",
        font,
        mappings: mapping,
        rules: { normalization: "NFC", matching: "longest-first", roundTrip: "none" },
    };
    const doc = note("doc", `encoding-${font}`, data);
    const record = language({ words: words.map((form) => ({ form, class: "n" })) });
    const encoding = compileEncoding(data, {
        name: `thalorna-note-doc-encoding-${font}`,
        codes: { A: "\uE000", E: "\uE001" },
    });
    const lexicon = { language: "test", data: record.data };
    const ctx = {
        contentPackage: "thalorna",
        languages: config.languages,
        languageRecords: new Map([["test", record]]),
        encodings: new Map([[`doc-encoding-${font}`, encoding]]),
        lexicons: new Map([["test", lexicon]]),
        encodingFindings: [],
    };
    return { records: [guide, script, record, doc], ctx, record, doc };
}

test("collection retains every occurrence and nearest inherited word", () => {
    const parent = note(
        "skill",
        "parent",
        { roman: "ae", words: [{ form: "a", variants: ["e"] }, { form: "e" }] },
        "language",
    );
    const child = language({
        family: "skill-parent",
        words: [{ form: "a", variants: ["aa"], plural: "ae", built: ["ea"] }, { form: "a" }],
        register: [{ name: "a" }, { name: "e", tongue: "translation" }],
        names: { native: ["e"], en: ["English"], pattern: "instruction", metadata: "description" },
        elements: [{ form: "a-", variants: ["-e"], examples: ["ae"] }],
        affixes: [{ form: "-a", front: "-e" }, { zero: true }],
    });
    const result = collectRoundtripCases({ config, records: [parent, child] });
    const texts = result.cases.map((item) => item.text);
    for (const value of ["a", "aa", "ae", "ea", "e", "a-", "-e", "-a"])
        assert.ok(texts.includes(value), value);
    assert.equal(
        result.cases.filter((item) => item.text === "a" && item.kind === "word").length,
        2,
    );
    assert.equal(
        result.cases.filter((item) => item.text === "e" && item.kind === "word")[0].noteAddress,
        "skill-parent",
    );
    assert.ok(
        !texts.includes("English") &&
            !texts.includes("instruction") &&
            !texts.includes("description"),
    );
    assert.equal(result.zeroAffixes.length, 1);
    const missing = collectRoundtripCases({ config: { ...config }, records: [parent] });
    assert.ok(missing.findings.some((finding) => finding.message.includes("Configured language")));
    child.data.words.push({ form: "ee", variants: ["aaa"] });
    child.data.register.push({ name: "eaa" });
    const added = collectRoundtripCases({
        config: { ...config },
        records: [parent, child],
    }).cases.map((item) => item.text);
    for (const value of ["ee", "aaa", "eaa"]) assert.ok(added.includes(value));
});

test("derived homographs keep their own source occurrence and diagnostic line", () => {
    const child = language({
        words: [
            { form: "a", class: "n", plural: "ae" },
            { form: "a", class: "n", plural: "ea" },
        ],
    });
    const collected = collectRoundtripCases({ config: { ...config }, records: [child] });
    const first = collected.cases.find((item) => item.kind === "derived" && item.text === "ae");
    const second = collected.cases.find((item) => item.kind === "derived" && item.text === "ea");
    assert.deepEqual(first.keys, ["data", "words", 0, "form"]);
    assert.deepEqual(second.keys, ["data", "words", 1, "form"]);
    const example = fixture({ a: "A", e: "A" }, ["a"]);
    const context = {
        ...example.ctx,
        languageRecords: new Map([["test", child]]),
        lexicons: new Map([["test", { language: "test", data: child.data }]]),
    };
    const result = checkSoundRoundtrips({
        config,
        records: [guide, script, child, example.doc],
        context,
        cases: [second],
    });
    const failure = result.findings.find(
        (finding) => finding.file === "child.md" && finding.message.includes("decoded"),
    );
    assert.ok(failure);
    assert.equal(failure.line, positionOfFrontmatterPath(child.raw, second.keys).line);
    assert.notEqual(failure.line, positionOfFrontmatterPath(child.raw, first.keys).line);
});

test("published direct decoder detects ambiguous none-mode mappings", () => {
    const reversible = fixture({ a: "A", e: "E" }, ["a", "e"]);
    const good = checkSoundRoundtrips({
        config,
        records: reversible.records,
        context: reversible.ctx,
        cases: [
            {
                language: "test",
                text: "a",
                noteAddress: "skill-child",
                keys: ["data", "words", 0, "form"],
                kind: "word",
            },
        ],
    });
    assert.equal(good.counts[0].failed, 0);
    const ambiguous = fixture({ a: "A", e: "A" }, ["a", "e"]);
    const bad = checkSoundRoundtrips({
        config,
        records: ambiguous.records,
        context: ambiguous.ctx,
        cases: [
            {
                language: "test",
                text: "a",
                noteAddress: "skill-child",
                keys: ["data", "words", 0, "form"],
                kind: "word",
            },
        ],
    });
    assert.equal(bad.counts[0].failed, 1);
    assert.ok(
        bad.findings.some(
            (finding) => finding.file === "child.md" && finding.message.includes("decoded"),
        ),
    );
});

test("a lexicon recovery cannot replace direct decoding", () => {
    const example = fixture({ a: "A", e: "E" }, ["a"]);
    const encoding = example.ctx.encodings.get("doc-encoding-semaron-kuriale");
    const lexicon = {
        language: "test",
        data: {
            words: [
                { form: "a", class: "n", native: [{ enc: encoding.name, text: "\uE001\uE001" }] },
            ],
        },
    };
    example.ctx.lexicons.set("test", lexicon);
    const encoded = encodeWithLanguage(encoding, "a", { font: "semaron-kuriale", lexicon });
    assert.deepEqual(encoded.findings, []);
    assert.equal(decodeText(encoding, encoded.text, { font: "semaron-kuriale" }), "ee");
    assert.equal(
        decodeWithLanguage(encoding, encoded.text, { font: "semaron-kuriale", lexicon }).text,
        "a",
    );
    const result = checkSoundRoundtrips({
        config,
        records: example.records,
        context: example.ctx,
        cases: [
            {
                language: "test",
                text: "a",
                noteAddress: "skill-child",
                keys: ["data", "words", 0, "form"],
                kind: "word",
            },
        ],
    });
    assert.equal(result.counts[0].failed, 1);
});

test("exact sound codec preserves normalization and marked distinctions", () => {
    const data = {
        language: "test",
        font: "semaron-kuriale",
        mappings: { a: "A", e: "E", aa: "AA" },
        rules: { normalization: "NFC", matching: "longest-first", roundTrip: "exact" },
    };
    const doc = note("doc", "exact", data);
    const record = language({
        sounds: { letters: ["a", "e", "aa"] },
        words: [{ form: "a", class: "n" }],
    });
    const toneGuide = note("doc", "prnncthlrn", { sounds: { letters: ["a", "e", "aa"] } });
    const encoding = compileEncoding(data, {
        name: "thalorna-note-doc-exact",
        codes: { A: "\uE000", E: "\uE001", AA: "\uE002" },
        sounds: ["a", "e", "aa"],
    });
    const context = {
        contentPackage: "thalorna",
        languages: config.languages,
        languageRecords: new Map([["test", record]]),
        encodings: new Map([["doc-exact", encoding]]),
        lexicons: new Map([["test", { language: "test", data: record.data }]]),
        encodingFindings: [],
    };
    const forms = ["a", "a\u0301", "á", "áa", "âa", "ǎa", "aä", "a-e"];
    const cases = forms.map((text) => ({
        language: "test",
        text,
        noteAddress: "skill-child",
        keys: ["data", "words", 0, "form"],
        kind: "word",
    }));
    const result = checkSoundRoundtrips({
        config,
        records: [toneGuide, script, record, doc],
        context,
        cases,
    });
    assert.equal(result.counts[0].failed, 0);
    const upper = checkSoundRoundtrips({
        config,
        records: [toneGuide, script, record, doc],
        context,
        cases: [{ ...cases[0], text: "A" }],
    });
    assert.equal(upper.counts[0].failed, 1);
});

test("each face is selected and compilation, association and corpus failures stay visible", () => {
    const one = fixture({ a: "A", e: "E" }, ["a"]);
    const two = fixture({ a: "A", e: "E" }, ["a"], "second-face");
    const context = {
        ...one.ctx,
        encodings: new Map([...one.ctx.encodings, ...two.ctx.encodings]),
        encodingFindings: [{ file: "bad.md", line: 2, column: 1, message: "compilation failed" }],
    };
    const result = checkSoundRoundtrips({
        config,
        records: [...one.records, two.doc],
        context,
        cases: [],
    });
    assert.equal(result.counts.length, 2);
    assert.ok(result.findings.some((f) => f.message.includes("No lexical cases")));
    assert.ok(result.findings.some((f) => f.message.includes("compilation failed")));
    assert.ok(result.findings.some((f) => f.message.includes("Missing encoding association")));
    const unknown = note("doc", "unknown", {
        language: "test",
        font: "unknown",
        mappings: {},
        rules: {},
    });
    assert.ok(
        checkSoundRoundtrips({
            config,
            records: [...one.records, unknown],
            context: one.ctx,
            cases: [],
        }).findings.some((f) => f.message.includes("classified script")),
    );
});

test("literal and logographic records are separate exclusions", () => {
    const one = fixture({ a: "A" }, ["a"]);
    const logograph = note("skill", "khelthzscrpt", { script: { fonts: ["glyphs"] } }, "script");
    const logDoc = note("doc", "log", {
        language: "test",
        font: "glyphs",
        mappings: {},
        rules: {},
    });
    const literal = note("doc", "literal", {
        language: "zxx",
        font: "glyphs",
        mappings: {},
        rules: {},
    });
    const result = checkSoundRoundtrips({
        config,
        records: [...one.records, logograph, logDoc, literal],
        context: one.ctx,
        cases: [],
    });
    assert.deepEqual(
        result.excluded.map((row) => row.reason),
        ["logographic", "literal"],
    );
});

test("invalid arguments fail and the manual workflow keeps failures", () => {
    assert.equal(main(["--unknown"]), 2);
    const workflow = fs.readFileSync(".gitea/workflows/sound-roundtrip.yml", "utf8");
    assert.match(workflow, /workflow_dispatch:/);
    assert.match(workflow, /if: always\(\)/);
    assert.doesNotMatch(workflow, /continue-on-error|pull_request:|push:|secrets\./);
    assert.match(workflow, /npm run check:sound-roundtrip/);
    assert.match(workflow, /contents: read/);
    assert.match(workflow, /timeout-minutes: 30/);
    assert.match(workflow, /retention-days: 30/);
    assert.match(workflow, /path: build\/sound-report\//);
});

test("CLI reads indexed fixtures and reports exact and ambiguous conversions", async () => {
    const os = await import("node:os");
    const path = await import("node:path");
    const { execFileSync, spawnSync } = await import("node:child_process");
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "sound-roundtrip-"));
    const write = (name, text) => {
        const file = path.join(root, name);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, text);
    };
    const writeNote = (record) =>
        write(path.join(CONTENT_DIR, `${record.shortcode}.md`), record.raw);
    try {
        write("package.json", JSON.stringify({ name: "fixture", version: "1.0.0" }));
        write(
            "node_modules/@heroiclands/package-build/package.json",
            JSON.stringify({ version: "25.9.0" }),
        );
        write(
            "node_modules/@heroiclands/fonts/package.json",
            JSON.stringify({
                name: "@heroiclands/fonts",
                version: "1.0.0",
                exports: { "./package.json": "./package.json" },
            }),
        );
        const missing = [
            ["doc-extra0", "skill-valtarlng", "skill-semrnscrpt", "semaron-kuriale"],
            ["doc-extra1", "skill-vylarilng", "skill-thrvrknscrpt", "thuravark-carved-bound"],
            ["doc-extra2", "skill-taruzelilng", "skill-merazanscrpt", "fixture-merazan"],
            ["doc-extra3", "skill-valtarlng", "skill-merazanscrpt", "fixture-merazan"],
            ["doc-extra4", "skill-okharclng", "skill-okhthztscrpt", "fixture-okhatha"],
            ["doc-extra5", "skill-aelendlng", "skill-thrvrdhscrpt", "fixture-thurarth"],
        ];
        const specs = [...REQUIRED_ENCODINGS, ...missing];
        const languageNames = [...new Set(specs.map(([, lang]) => lang.slice(6)))];
        const scripts = [...new Set(specs.map(([, , script]) => script.slice(6)))];
        const fonts = [...new Set(specs.map(([, , , font]) => font))];
        const languages = Object.fromEntries(
            languageNames.map((name, i) => [`l${i}`, { tag: `qaa-x-${i}`, note: `skill-${name}` }]),
        );
        write(
            "package-build.config.yaml",
            YAML.stringify({ contentPackage: "thalorna", languages }),
        );
        write(
            "node_modules/@heroiclands/fonts/fonts.json",
            JSON.stringify({
                families: fonts.map((font) => ({
                    family: font,
                    class: `hl-${font}`,
                    codepoints: [
                        { codepoint: "U+E000", code: "A" },
                        { codepoint: "U+E001", code: "E" },
                    ],
                })),
            }),
        );
        writeNote(guide);
        for (const name of scripts) {
            const associated = [
                ...new Set(
                    specs
                        .filter(([, , script]) => script === `skill-${name}`)
                        .map(([, , , font]) => font),
                ),
            ];
            writeNote(note("skill", name, { script: { fonts: associated } }, "script"));
        }
        for (const name of languageNames)
            writeNote(
                note(
                    "skill",
                    name,
                    {
                        roman: "ae",
                        sounds: { letters: ["a", "e"] },
                        words: [{ form: "a", class: "n" }],
                    },
                    "language",
                ),
            );
        for (const [document, lang, , font] of specs) {
            const data = {
                language: `l${languageNames.indexOf(lang.slice(6))}`,
                font,
                mappings: { a: "A", e: "E" },
                rules: { normalization: "NFC", matching: "longest-first", roundTrip: "exact" },
            };
            writeNote(note("doc", document.slice(4), data));
        }
        execFileSync("git", ["init", "-q", root]);
        execFileSync("git", [
            "-C",
            root,
            "-c",
            "user.name=Fixture",
            "-c",
            "user.email=fixture@example.invalid",
            "commit",
            "--allow-empty",
            "-qm",
            "Fixture",
        ]);
        const command = path.resolve("utils/sound-roundtrip.mjs");
        const success = spawnSync(process.execPath, [command, "--root", root], {
            encoding: "utf8",
        });
        assert.equal(success.status, 0, success.stderr);
        for (const shortcode of ["aeleveldikkoenc", "khazpirzathcarvedenc"]) {
            const file = path.join(root, notePath(`doc-${shortcode}`, root));
            fs.renameSync(file, `${file}.saved`);
            const absent = spawnSync(process.execPath, [command, "--root", root], {
                encoding: "utf8",
            });
            assert.equal(absent.status, 1);
            assert.match(
                absent.stderr,
                new RegExp(`error: Missing encoding coverage doc-${shortcode}`),
            );
            fs.renameSync(`${file}.saved`, file);
        }
        const ambiguous = note("doc", "valthelonikaenc", {
            language: `l${languageNames.indexOf("valtarlng")}`,
            font: "helonika-book",
            mappings: { a: "A", e: "A" },
            rules: { normalization: "NFC", matching: "longest-first", roundTrip: "none" },
        });
        writeNote(ambiguous);
        const failure = spawnSync(process.execPath, [command, "--root", root], {
            encoding: "utf8",
        });
        assert.equal(failure.status, 1);
        assert.match(failure.stderr, /assets\/content\/valtarlng\.md:\d+:\d+: error:.*decoded/);
        write(path.join(CONTENT_DIR, "malformed.md"), "---\ntype: [\n---\n");
        const malformed = spawnSync(process.execPath, [command, "--root", root], {
            encoding: "utf8",
        });
        assert.equal(malformed.status, 1);
        assert.match(malformed.stderr, /malformed.md: error: Malformed frontmatter/);
    } finally {
        forgetNoteIndex(root);
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("the artifact retains every finding after the console limit", async () => {
    const os = await import("node:os");
    const path = await import("node:path");
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "sound-findings-"));
    try {
        const findings = Array.from({ length: 5001 }, (_, i) => ({
            file: `source-${i}.md`,
            line: i + 1,
            message: `failure ${i}`,
        }));
        findings.push(
            ...Array.from({ length: 6 }, (_, i) => ({
                file: `script-${i}.md`,
                message: `Missing encoding association ${i}`,
            })),
        );
        const file = writeFindingReport(root, findings);
        assert.equal(
            path.relative(root, file),
            path.join("build", "sound-report", "findings.jsonl"),
        );
        const parsed = fs
            .readFileSync(file, "utf8")
            .trimEnd()
            .split("\n")
            .map((line) => JSON.parse(line));
        assert.deepEqual(parsed, findings);
        assert.equal(
            parsed
                .slice(-6)
                .filter((item) => item.message.startsWith("Missing encoding association")).length,
            6,
        );
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("reports missing inventories, guide coverage and unavailable encodings", () => {
    const example = fixture({ a: "A", e: "E" }, ["a"]);
    example.record.data.sounds = { letters: [] };
    const missingInventory = checkSoundRoundtrips({
        config,
        records: example.records,
        context: example.ctx,
        cases: [],
    });
    assert.ok(
        missingInventory.findings.some((f) =>
            f.message.includes("Language sound inventory is missing"),
        ),
    );
    assert.ok(
        missingInventory.findings.some((f) =>
            f.message.includes("does not declare exact round trip"),
        ),
    );
    example.record.data.sounds = { letters: ["a", "e"] };
    const noGuide = checkSoundRoundtrips({
        config,
        records: example.records.filter((r) => r !== guide),
        context: example.ctx,
        cases: [],
    });
    assert.ok(
        noGuide.findings.some((f) => f.message.includes("shared sound inventory is missing")),
    );
    const narrowGuide = note("doc", "prnncthlrn", { sounds: { letters: ["a"] } });
    const absent = checkSoundRoundtrips({
        config,
        records: [narrowGuide, ...example.records.filter((r) => r !== guide)],
        context: example.ctx,
        cases: [],
    });
    assert.ok(absent.findings.some((f) => f.message.includes("absent from the guide")));
    const noEncoding = checkSoundRoundtrips({
        config,
        records: example.records,
        context: { ...example.ctx, encodings: new Map() },
        cases: [],
    });
    assert.equal(noEncoding.counts[0].failed, null);
});

test("locates a missing configured language at its actual config key", () => {
    const configSourceRaw = "languages:\n  test:\n    tag: qaa\n    note: skill-child\n";
    const result = collectRoundtripCases({ config: { ...config, configSourceRaw }, records: [] });
    assert.deepEqual(result.findings[0], {
        file: "package-build.config.yaml",
        line: 4,
        column: 5,
        message: "Configured language test has no language note skill-child",
    });
});
