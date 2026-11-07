/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import YAML from "yaml";
import { forgetNoteIndex } from "./note-index.mjs";
import * as pairs from "./vowel-pairs.mjs";

test("conflicting name attestations cannot also authorize the same source edit", () => {
    const sources = [
        {
            file: "one.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: one\ndata: {register: [{name: Sey, tongue: one}]}\n---\n",
        },
        {
            file: "two.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: two\ndata: {register: [{name: Sey Daro, tongue: two}]}\n---\n",
        },
        {
            file: "name.md",
            text: "---\ntype: being\nshortcode: person\nname: {full: Sey Daro}\n---\n",
        },
    ];
    const report = pairs.pairInventory(sources, {
        languages: { one: { note: "skill-one" }, two: { note: "skill-two" } },
    });
    const hit = report.ambiguities.find((h) => h.file === "name.md");
    assert.deepEqual(hit.candidateLanguages.sort(), ["skill-one", "skill-two"]);
    assert.ok(!report.findings.some((h) => h.file === hit.file && h.start === hit.start));
});

test("the scoped CLI fails before the authorized edits and passes a prospective fixture", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "vowel-pairs-test-"));
    try {
        const content = path.join(root, "assets/content");
        fs.mkdirSync(content, { recursive: true });
        const guide = fs.readFileSync("assets/content/Lore/Pronouncing_Thalorna.md", "utf8");
        fs.writeFileSync(path.join(content, "guide.md"), guide);
        fs.writeFileSync(
            path.join(content, "language.md"),
            "---\ntype: skill\nsubType: language\nshortcode: one\ndata: {words: [{form: tay, gloss: day}]}\n---\n",
        );
        fs.writeFileSync(
            path.join(root, "package-build.config.yaml"),
            "contentPackage: thalorna\nlanguages: {one: {note: skill-one}}\n",
        );
        const output = [];
        assert.equal(
            pairs.main(
                ["--json"],
                { out: (s) => output.push(s), err: (s) => output.push(s) },
                root,
            ),
            1,
        );
        assert.equal(JSON.parse(output[0]).findings.length, 1);
        const doc = pairs.frontmatterDoc(guide).doc.toJS();
        doc.data.sounds.letters = doc.data.sounds.letters.filter(
            (row) => !row.letters.some((s) => ["ay", "ey", "oy"].includes(s)),
        );
        fs.writeFileSync(path.join(content, "guide.md"), "---\n" + YAML.stringify(doc) + "---\n");
        fs.writeFileSync(
            path.join(content, "language.md"),
            "---\ntype: skill\nsubType: language\nshortcode: one\ndata: {words: [{form: tai, gloss: day}]}\n---\n",
        );
        forgetNoteIndex(root);
        assert.equal(pairs.main(["--json"], { out: () => {}, err: () => {} }, root), 0);
        doc.data.sounds.letters.pop();
        fs.writeFileSync(path.join(content, "guide.md"), "---\n" + YAML.stringify(doc) + "---\n");
        forgetNoteIndex(root);
        assert.equal(
            pairs.main(["--json"], { out: () => {}, err: () => {} }, root),
            1,
            "an omitted distinct sound fails",
        );
    } finally {
        forgetNoteIndex(root);
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("CRLF and repeated occurrences point only to the original pair bytes", () => {
    const text =
        "---\r\ntype: skill\r\nsubType: language\r\nshortcode: one\r\ndata:\r\n  words:\r\n    - {form: TÁY, variants: [tay, tay]}\r\n---\r\n";
    const report = pairs.pairInventory([{ file: "one.md", text }], {
        languages: { one: { note: "skill-one" } },
    });
    assert.equal(report.findings.length, 3);
    assert.deepEqual(
        report.findings.map((h) => [h.line, h.column]),
        [
            [7, 15],
            [7, 31],
            [7, 36],
        ],
    );
    for (const hit of report.findings) assert.equal(text.slice(hit.start, hit.end), hit.source);
});

test("English overlaps need a positive occurrence signal, and unknown tagged names remain reviewable", () => {
    const sources = [
        {
            file: "one.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  words: [{form: day, gloss: day}, {form: they, gloss: they}, {form: way, gloss: way}]
  register: [{name: Grey, tongue: one}]
---
The day they found the way was grey.
_They_ and [Unattesteday]{.name data-type=being/npc}.
[day they way]{lang=one}
`,
        },
    ];
    const report = pairs.pairInventory(sources, { languages: { one: { note: "skill-one" } } });
    assert.equal(report.ambiguities.filter((h) => h.form === "day" || h.form === "way").length, 0);
    assert.ok(report.ambiguities.some((h) => h.form === "Unattesteday" && h.automatic === false));
    assert.ok(
        report.exclusions.some(
            (h) => h.form === "they" && h.category === "ordinary English; lexical overlap",
        ),
    );
    assert.ok(report.findings.filter((h) => h.surface === "roman-span").length === 3);
});

test("typed fields preserve YAML source bytes and documentary English stays out", () => {
    const text = `---
type: skill
subType: language
shortcode: testlng
data:
  words:
    - form: "ta\\u0079"
      gloss: "day"
    - form: >-
        sey
      gloss: "say"
    - {form: tay, variants: [TAY, tay], native: [{text: "tay"}]}
  register: [{name: The Grey Bay, tongue: translation, built: [tay]}]
  retired: [{form: tay, instead: tai, why: old}]
---
`;
    const report = pairs.pairInventory([{ file: "one.md", text }], {
        languages: { test: { note: "skill-testlng" } },
    });
    assert.equal(report.findings.length, 6);
    for (const hit of report.findings) {
        assert.ok(!hit.source.includes("\n"), JSON.stringify(hit));
        assert.ok(!hit.source.includes('"'), JSON.stringify(hit));
    }
    const escaped = report.findings.find((h) => h.field === "data.words[0].form");
    assert.equal(escaped.source, "a\\u0079");
    assert.equal(escaped.replacement, "ai");
});

test("foreign register ownership, nested languages, links and encoded scrolls use declared sources", () => {
    const config = {
        languages: {
            one: { note: "skill-one", tag: "art-x-one" },
            two: { note: "skill-two", tag: "art-x-two" },
        },
    };
    const sources = [
        {
            file: "one.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  tongues: [{tag: second, language: skill-two}]
  register: [{name: Koy Tara, tongue: "other:second"}, {name: Grey, tongue: one}]
  words: [{form: sey, gloss: gray}]
---
`,
        },
        {
            file: "two.md",
            text: `---
type: skill
subType: language
shortcode: two
data: {words: [{form: tay, gloss: grey}]}
---
`,
        },
        {
            file: "encoding.md",
            text: `---
type: doc
subType: encoding
shortcode: enc
data: {language: two}
---
`,
        },
        {
            file: "story.md",
            text: `---
type: doc
shortcode: story
name: {full: Koy Tara}
description: "[Koy Tara]{.name data-type=being/npc}"
---
Koy Tara goes past the grey bay. Koy Tara's ship arrives.
::: {.verse lang=one}
sey [tay]{lang=two} [boy]{lang=en} ⟦oy⟧
:::
[[place-bay|tay]]{lang=two}
\`\`\`scroll {enc=doc-enc}
tay
\`\`\`
`,
        },
    ];
    const report = pairs.pairInventory(sources, config);
    assert.equal(
        report.findings.find((h) => h.file === "one.md" && h.field === "data.register[0].name")
            .language,
        "skill-two",
    );
    assert.ok(report.findings.some((h) => h.file === "story.md" && h.field === "name.full"));
    assert.ok(report.findings.some((h) => h.file === "story.md" && h.field === "description"));
    assert.equal(
        report.findings.filter(
            (h) => h.file === "story.md" && h.surface === "attested-name" && h.form === "Koy",
        ).length,
        2,
    );
    assert.ok(
        report.findings.some((h) => h.surface === "roman-link" && h.language === "skill-two"),
    );
    assert.ok(report.findings.some((h) => h.surface === "scroll" && h.language === "skill-two"));
    assert.ok(!report.findings.some((h) => h.file === "story.md" && h.form === "boy"));
    assert.ok(!report.findings.some((h) => h.file === "story.md" && h.form === "grey"));
    assert.ok(
        report.findings.some(
            (h) => h.file === "story.md" && h.form === "tay" && h.language === "skill-two",
        ),
    );
});

test("deprecated closing y uses original positions and respects the next vowel", () => {
    assert.deepEqual(pairs.deprecatedPairs("😀TÁY, sey oy; kaya kayá kayà kayä iy uy ày òy"), [
        { pair: "ÁY", offset: 3, end: 5, replacement: "ÁI" },
        { pair: "ey", offset: 8, end: 10, replacement: "ei" },
        { pair: "oy", offset: 11, end: 13, replacement: "oi" },
    ]);
    const decomposed = "ka\u0301y";
    const [hit] = pairs.deprecatedPairs(decomposed);
    assert.equal(decomposed.slice(hit.offset, hit.end), "a\u0301y");
    assert.equal(hit.replacement, "a\u0301i");
});

test("sound inventory derives duplicate IPA and prospective counts from guide data", () => {
    const source = fs.readFileSync("assets/content/Lore/Pronouncing_Thalorna.md", "utf8");
    const inventory = pairs.soundInventory(source);
    const rows = pairs.frontmatterDoc(source).doc.toJS().data.sounds.letters;
    assert.equal(inventory.rows, rows.length);
    assert.equal(inventory.uniqueIPA, 49);
    const deprecatedRows = rows.filter((row) =>
        row.letters.some((s) => ["ay", "ey", "oy"].includes(s)),
    );
    assert.equal(inventory.rows, 49 + deprecatedRows.length);
    assert.equal(inventory.duplicates.length, deprecatedRows.length);
    assert.equal(inventory.prospective.rows, 49);
    assert.equal(inventory.prospective.uniqueIPA, 49);
    assert.ok(inventory.prospective.spellings.includes("iy"));
    assert.ok(inventory.prospective.spellings.includes("uy"));
});

test("source ownership distinguishes forms, names, passages and English", () => {
    const config = {
        contentPackage: "thalorna",
        languages: { test: { note: "skill-testlng", tag: "art-x-test" } },
    };
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: testlng
name: {full: The Bay Language}
data:
  words:
    - {form: tay, variants: [tey], gloss: "say hey boy"}
    - {form: kaya, gloss: boy}
    - {form: iy, gloss: day}
    - {form: uy, gloss: day}
  affixes: [{form: -oy, front: -ey, replaces: ay, gloss: day}]
  register: [{name: Ray, tongue: test}]
  names: {given: {male: [Soy]}, en: {given: [Roy]}, pattern: "say"}
---
The day is grey.
`,
        },
        {
            file: "culture.md",
            text: `---
type: lore
subType: culture
shortcode: testclt
data: {lang: test}
---
`,
        },
        {
            file: "prose.md",
            text: `---
type: doc
shortcode: prose
data: {culture: testclt}
name: {full: The Grey Bay, test: [Tay]}
---
The boy may play. [Ray]{.name data-type="being/npc"} meets Tay. Ray's ship meets Ray’s boat.
[tay ⟦tay⟧ kaya iy uy]{lang=test}
::: {.verse lang=test}
tey oy
:::
[boy]{lang=en} and [oy]{lang=zxx}
\`[tay]{lang=test}\`
`,
        },
    ];
    const report = pairs.pairInventory(sources, config);
    assert.ok(report.findings.some((h) => h.field === "data.affixes[0].form" && h.form === "-oy"));
    assert.ok(
        report.findings.some(
            (h) => h.field === "data.register[0].name" && h.language === "skill-testlng",
        ),
    );
    assert.ok(report.findings.some((h) => h.surface === "verse" && h.form === "tey"));
    assert.ok(report.findings.some((h) => h.surface === "name-span" && h.form === "Ray"));
    assert.ok(report.findings.some((h) => h.surface === "attested-name" && h.form === "Tay"));
    assert.ok(
        !report.findings.some((h) =>
            /^(day|boy|say|hey|grey|Bay|Grey|Roy|kaya|iy|uy)$/i.test(h.form),
        ),
    );
    for (const hit of report.findings) {
        const text = sources.find((s) => s.file === hit.file).text;
        assert.equal(text.slice(hit.start, hit.end), hit.source);
        assert.ok(hit.language);
    }
    assert.ok(report.exclusions.some((e) => e.category === "native-literal"));
    assert.ok(report.findings.some((h) => h.form === "Ray's" && h.surface === "attested-name"));
    assert.ok(report.findings.some((h) => h.form === "Ray’s" && h.surface === "attested-name"));
});
