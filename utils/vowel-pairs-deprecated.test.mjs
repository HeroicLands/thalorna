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
import { forgetNoteIndex, notePath } from "./note-index.mjs";
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
    const hit = report.findings.find((h) => h.file === "name.md");
    assert.deepEqual(hit.candidateLanguages.sort(), ["skill-one", "skill-two"]);
    assert.equal(hit.needsLanguage, true);
    assert.equal(hit.automatic, false);
    assert.equal(
        [...report.findings, ...report.ambiguities].filter(
            (h) => h.file === hit.file && h.start === hit.start,
        ).length,
        1,
    );
});

test("the scoped CLI fails before the authorized edits and passes a prospective fixture", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "vowel-pairs-test-"));
    try {
        const content = path.join(root, "assets/content");
        fs.mkdirSync(content, { recursive: true });
        const guide = fs.readFileSync(notePath("doc-prnncthlrn"), "utf8");
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
        fs.writeFileSync(
            path.join(content, "language.md"),
            '---\ntype: doc\nshortcode: names\n---\n[Drayven Kamruz]{.name data-type="being/npc"}. Drayven returns.\n',
        );
        forgetNoteIndex(root);
        const output2 = [];
        assert.equal(
            pairs.main(["--json"], { out: (s) => output2.push(s), err: () => {} }, root),
            0,
            "a name no note attests as in-world is a review diagnostic",
        );
        const review = JSON.parse(output2[0]);
        assert.equal(review.findings.length, 0);
        assert.ok(
            review.ambiguities.some((h) => h.form === "Drayven" && h.automatic === false),
            "the unattested typed name is reported for review",
        );
        fs.writeFileSync(
            path.join(content, "person.md"),
            "---\ntype: being\nshortcode: draiven\nname: {full: Draiven Kamruz}\n---\n",
        );
        forgetNoteIndex(root);
        assert.equal(
            pairs.main(["--json"], { out: () => {}, err: () => {} }, root),
            1,
            "a name a note spells as the guide does confirms the old spelling even without known language",
        );
        fs.rmSync(path.join(content, "person.md"));
        fs.writeFileSync(
            path.join(content, "language.md"),
            '---\ntype: doc\nshortcode: names\n---\n[Day of Peace]{.name data-type="lore/custom"} and [Graywick]{.name data-type="place/settlement"}.\n',
        );
        forgetNoteIndex(root);
        assert.equal(
            pairs.main(["--json"], { out: () => {}, err: () => {} }, root),
            0,
            "English and unresolved names are review diagnostics, not approvals",
        );
        doc.data.sounds.letters.pop();
        fs.writeFileSync(path.join(content, "guide.md"), "---\n" + YAML.stringify(doc) + "---\n");
        forgetNoteIndex(root);
        assert.equal(
            pairs.main(["--json"], { out: () => {}, err: () => {} }, root),
            0,
            "the size of the guide's sound inventory is not fixed",
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
  words: [{form: dai, gloss: day}, {form: thei, gloss: they}, {form: wai, gloss: way}]
  register: [{name: Grey, tongue: one}]
---
The day they found the way was grey.
_They_ and [Unattesteday]{.name data-type=being/npc}.
[day they way]{lang=one}
`,
        },
    ];
    const report = pairs.pairInventory(sources, { languages: { one: { note: "skill-one" } } });
    assert.ok(
        !report.findings.some(
            (h) => (h.form === "day" || h.form === "way") && h.surface !== "roman-span",
        ),
    );
    assert.ok(report.ambiguities.some((h) => h.form === "Unattesteday" && h.automatic === false));
    assert.ok(report.ambiguities.some((h) => h.form === "they" && h.automatic === false));
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
    const source = fs.readFileSync(notePath("doc-prnncthlrn"), "utf8");
    const inventory = pairs.soundInventory(source);
    const rows = pairs.frontmatterDoc(source).doc.toJS().data.sounds.letters;
    assert.equal(inventory.rows, rows.length);
    const deprecatedRows = rows.filter((row) =>
        row.letters.some((s) => ["ay", "ey", "oy"].includes(s)),
    );
    assert.equal(inventory.duplicates.length, deprecatedRows.length);
    assert.equal(inventory.prospective.rows, rows.length - deprecatedRows.length);
    assert.equal(inventory.prospective.uniqueIPA, inventory.prospective.rows);
    assert.deepEqual(inventory.prospective.spellings, [
        ...new Set(inventory.prospective.spellings),
    ]);
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
name: {full: The Harbor Language}
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
name: {full: The Harbor, test: [Tay]}
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

test("closing-y detection consumes the guide's longest vowel group first", () => {
    for (const form of ["aay", "áay", "ǎay", "âay", "aïy", "aayá"])
        assert.deepEqual(pairs.deprecatedPairs(form), [], form);
    for (const [form, pair] of [
        ["àay", "ay"],
        ["aáy", "áy"],
        ["aäy", "äy"],
        ["aaay", "ay"],
        ["a-ay", "ay"],
    ])
        assert.deepEqual(
            pairs.deprecatedPairs(form).map((h) => h.pair),
            [pair],
            form,
        );
});

test("tongue tags belong to their own page and an unspecified older tongue stays unknown", () => {
    const sources = [
        {
            file: "senali.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: senali\ndata: {tongues: [{tag: older, language: skill-senali}]}\n---\n",
        },
        {
            file: "tellumi.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: tellumi\ndata: {tongues: [{tag: older}], register: [{name: Kayvonad Zarid, tongue: older}]}\n---\n",
        },
        {
            file: "person.md",
            text: "---\ntype: being\nshortcode: kaivonad\nname: {full: Kaivonad Zarid}\n---\n",
        },
    ];
    const report = pairs.pairInventory(sources);
    assert.equal(report.findings.length, 1);
    assert.equal(report.ambiguities.length, 0);
    assert.equal(report.findings[0].language, undefined);
    assert.equal(report.findings[0].needsLanguage, true);
    assert.deepEqual(report.findings[0].candidateLanguages, []);
});

test("visible aliases, glossary definitions and office keys and prose retain exact source ranges", () => {
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  register: [{name: Wraymouth}, {name: Kenbeshay}, {name: Kireshay}, {name: Revunay}, {name: Vurinay}, {name: Domsey}, {name: Kulaywil}]
  words: [{form: alkulay}, {form: tiyup tahay}, {form: Grey, gloss: gray}]
---
`,
        },
        {
            file: "visible.md",
            text: `---
type: lore
shortcode: visible
name: {full: Harbor, en: [Wraymouth, Kenbeshay, Kireshay, Revunay, Vurinay], aliases: [Domsey]}
data:
  glossary: [{name: assembly, definition: "Meets at Domsey."}, {name: Kenbeshay}]
  governance:
    offices:
      alkulay: "Meets at Kulaywil."
      tiyup tahay: "Keeps Kulaywil."
      Grey Head: "An elder."
  seat: kulaywil
---
[[place-wraymouth|Wraymouth]]
`,
        },
    ];
    const report = pairs.pairInventory(sources);
    const hits = report.findings.filter((h) => h.file === "visible.md");
    assert.equal(hits.length, 13, JSON.stringify(hits.map((h) => [h.field, h.form])));
    assert.equal(hits.filter((h) => h.field.endsWith(".$key")).length, 2);
    assert.ok(hits.some((h) => h.field.endsWith(".definition")));
    assert.ok(hits.some((h) => h.field === "data.glossary[1].name" && h.form === "Kenbeshay"));
    for (const hit of hits) assert.equal(sources[1].text.slice(hit.start, hit.end), hit.source);
    assert.ok(!hits.some((h) => h.field === "data.seat" || h.field.includes("Grey Head")));
    assert.equal(report.exclusions.filter((h) => h.category === "link target").length, 1);
});

test("typed names attest repeated identities in prose and YAML without inventing a language", () => {
    const sources = [
        {
            file: "shadezan.md",
            text: `---
type: being
shortcode: shadezan
---
[Drayven Kamruz]{.name data-type="being/npc"}. Drayven challenges him. Drayven returns.
`,
        },
        {
            file: "wahrethu.md",
            text: `---
type: being
shortcode: wahrethu
name: {full: Wahrethu Meykhathi}
description: "The Meykhathi clan's tracker."
---
Wahrethu Meykhathi tracks for the [Meykhathi]{.name data-type="affiliation/lineage"} clan.
Wahrethu Meykhathi returns.
`,
        },
        {
            file: "other.md",
            text: "---\ntype: doc\nshortcode: other\n---\nDrayven is unmarked here.\n",
        },
        {
            file: "spelled-person.md",
            text: "---\ntype: being\nshortcode: draiven\nname: {full: Draiven Kamruz}\n---\n",
        },
        {
            file: "spelled-lineage.md",
            text: "---\ntype: lore\nshortcode: meikhathi\nname: {full: Meikhathi}\n---\n",
        },
    ];
    const report = pairs.pairInventory(sources);
    assert.equal(report.findings.filter((h) => h.file === "shadezan.md").length, 3);
    assert.equal(report.findings.filter((h) => h.file === "wahrethu.md").length, 5);
    assert.ok(report.findings.every((h) => h.confirmedInWorld && h.needsLanguage));
    assert.ok(!report.ambiguities.some((h) => h.file === "other.md"));
});

test("an old spelling of an attested name is a finding in English verse, English labels and full names", () => {
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  register:
    - {name: Kenbeshai, tongue: one}
    - {name: Priest Kenbeshay, tongue: gloss, built: [Kenbeshai]}
    - {name: Vurinai, tongue: one}
    - {name: The Gray Road, tongue: gloss, built: [Vurinai]}
  words: [{form: tai, gloss: "a day of rest"}]
---
`,
        },
        {
            file: "song.md",
            text: `---
type: doc
shortcode: song
name: {full: Kenbeshay Hall}
---
::: {.verse lang=en}
Kenbeshay walks the gray road
and the day is long
:::
`,
        },
        ...["a", "b"].map((id) => ({
            file: `english-${id}.md`,
            text: `---\ntype: doc\nshortcode: english${id}\n---\nThe day is gray and they may stay away.\n`,
        })),
    ];
    const report = pairs.pairInventory(sources);
    const found = (file, form) => report.findings.some((h) => h.file === file && h.form === form);
    assert.ok(
        found("tongue.md", "Kenbeshay"),
        "a gloss register name with an old spelling is a finding",
    );
    assert.ok(found("song.md", "Kenbeshay"), "English verse and the full name are checked");
    assert.equal(
        report.findings.filter((h) => h.file === "song.md" && h.form === "Kenbeshay").length,
        2,
    );
    for (const hit of report.findings) {
        assert.ok(hit.confirmedInWorld, JSON.stringify([hit.file, hit.form]));
        assert.equal(
            sources.find((s) => s.file === hit.file).text.slice(hit.start, hit.end),
            hit.source,
        );
    }
    assert.ok(!report.findings.some((h) => /^(day|gray|they|may|stay|away)$/i.test(h.form)));
    assert.ok(report.exclusions.some((e) => e.category === "explicit English" && e.form === "day"));
});

test("a register name and a lexicon word with a closing pair are found whatever else the corpus writes", () => {
    const tongue = `---
type: skill
subType: language
shortcode: one
data:
  words:
    - {form: hukai, gloss: house}
    - {form: "lushei-", class: stem, gloss: rain}
    - {form: alkulai, gloss: master}
  register:
    - {name: Olkai, tongue: one}
---
A native word is _hukay_ and _alkulay_. The stem _lushey-_ is bound. The plain word hukay stays.
`;
    const sources = [
        { file: "tongue.md", text: tongue },
        {
            file: "verse.md",
            text: `---
type: doc
shortcode: verse
---
::: {.verse lang=en}
The olkai sits and Olkay walks
the hukay burns
:::
Olkay speaks in plain prose.
`,
        },
        {
            file: "office.md",
            text: "---\ntype: lore\nshortcode: office\ndata:\n  ranks:\n    - level: 3\n      title: alkulay\n---\n",
        },
        ...["a", "b", "c"].map((id) => ({
            file: `prose-${id}.md`,
            text: `---\ntype: doc\nshortcode: prose${id}\n---\nThe olkai sits by the hukay and the alkulay.\n`,
        })),
    ];
    const report = pairs.pairInventory(sources);
    const found = (file, form, surface) =>
        report.findings.some(
            (h) => h.file === file && h.form === form && (!surface || h.surface === surface),
        );
    assert.ok(found("verse.md", "Olkay", "explicit English"), "a register name in English verse");
    assert.ok(found("verse.md", "hukay", "explicit English"), "a lexicon word in English verse");
    assert.ok(found("tongue.md", "hukay"), "an emphasized word of a language note");
    assert.ok(found("tongue.md", "alkulay"));
    assert.ok(found("tongue.md", "lushey"), "a bound stem");
    assert.ok(found("office.md", "alkulay"), "a title");
    assert.equal(
        report.findings.filter((h) => h.file === "tongue.md" && h.form === "hukay").length,
        2,
        "a language note's own lexicon form is in-world in emphasis and in plain prose",
    );
    assert.ok(!report.findings.some((h) => h.file.startsWith("prose-")));
    assert.equal(
        report.findings.filter((h) => h.file === "verse.md" && h.form === "Olkay").length,
        2,
        "an attested name is found in verse and in plain prose",
    );
});

test("the full name of a note that resolves to a language is in-world unless the held list keeps it", () => {
    const config = { languages: { one: { note: "skill-one" } } };
    const sources = [
        {
            file: "tongue.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: one\n---\n",
        },
        {
            file: "culture.md",
            text: "---\ntype: lore\nsubType: culture\nshortcode: clt\ndata: {lang: one}\n---\n",
        },
        {
            file: "place.md",
            text: "---\ntype: place\nshortcode: glarv\nname: {full: Glarvey}\ndata: {culture: clt}\n---\n",
        },
        {
            file: "abbey.md",
            text: "---\ntype: place\nshortcode: abby\nname: {full: Abbey}\ndata: {culture: clt}\n---\n",
        },
    ];
    const report = pairs.pairInventory(sources, config);
    assert.ok(report.findings.some((h) => h.file === "place.md" && h.form === "Glarvey"));
    assert.ok(!report.findings.some((h) => h.file === "abbey.md"));
});

test("the command prints its usage", () => {
    const output = [];
    assert.equal(
        pairs.main(["--help"], { out: (s) => output.push(s), err: () => {} }, os.tmpdir()),
        0,
    );
    assert.match(output.join("\n"), /Usage: node utils\/vowel-pairs\.mjs/u);
});

test("the guard's exclusions are reported once", () => {
    const report = pairs.pairInventory([
        {
            file: "tongue.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: one\ndata:\n  register:\n    - {name: The Gray Road, tongue: gloss}\n---\n",
        },
    ]);
    const seen = report.exclusions.map((e) => [e.file, e.field, e.form, e.category].join("|"));
    assert.equal(new Set(seen).size, seen.length);
});

test("a lexicon word in plain prose is a finding in its own language note and a review item elsewhere", () => {
    const config = { languages: { one: { note: "skill-one" } } };
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  words:
    - {form: hukai, gloss: house}
---
The hukay stands and Hukay stand.
`,
        },
        {
            file: "other.md",
            text: "---\ntype: doc\nshortcode: other\n---\nThe hukay stands.\n",
        },
    ];
    const report = pairs.pairInventory(sources, config);
    assert.equal(
        report.findings.filter((h) => h.file === "tongue.md" && /^hukay$/i.test(h.form)).length,
        2,
    );
    assert.ok(!report.findings.some((h) => h.file === "other.md"));
    assert.ok(
        report.ambiguities.some((h) => h.file === "other.md" && h.form === "hukay"),
        "a plain-prose lexicon form outside its language note is reported for review",
    );
    assert.ok(!report.exclusions.some((e) => e.file === "other.md" && e.form === "hukay"));
});

test("a native word that a gloss cites is still found in its old spelling", () => {
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  words:
    - {form: tai, gloss: house}
    - {form: kanai, gloss: "from tai; of Olkai"}
  register:
    - {name: Olkai, tongue: one}
---
`,
        },
        {
            file: "verse.md",
            text: `---
type: doc
shortcode: verse
---
::: {.verse lang=en}
Olkay walks and tay burns
:::
The word _tay_ is native.
`,
        },
    ];
    const report = pairs.pairInventory(sources);
    const found = (form) => report.findings.some((h) => h.file === "verse.md" && h.form === form);
    assert.ok(found("Olkay"));
    assert.ok(found("tay"));
});

test("a language note's own lexicon form that reads as English is reported for review", () => {
    const sources = [
        {
            file: "tongue.md",
            text: `---
type: skill
subType: language
shortcode: one
data:
  words:
    - {form: mai, gloss: "may; be allowed"}
    - {form: thei, gloss: "they; several people"}
---
Use will, shall, kan, may. And none may kross; they komen not.
`,
        },
    ];
    const report = pairs.pairInventory(sources, { languages: { one: { note: "skill-one" } } });
    for (const form of ["may", "they"])
        assert.ok(
            report.ambiguities.some((h) => h.file === "tongue.md" && h.form === form),
            `${form}: reported for review`,
        );
    assert.ok(!report.exclusions.some((e) => e.form === "may" || e.form === "they"));
    assert.equal(report.findings.length, 0);
});

test("a held form with an English scope is kept only inside English passages", () => {
    const sources = [
        {
            file: "tongue.md",
            text: "---\ntype: skill\nsubType: language\nshortcode: one\ndata:\n  words:\n    - {form: nai, gloss: no}\n---\n",
        },
        {
            file: "verse.md",
            text: "---\ntype: doc\nshortcode: verse\n---\n::: {.verse lang=en}\nnone say him nay\n:::\n",
        },
    ];
    const report = pairs.pairInventory(sources);
    assert.ok(!report.findings.some((h) => h.form === "nay"));
    assert.ok(report.exclusions.some((e) => e.form === "nay" && e.category === "explicit English"));
});

test("a complete registered name attests its components in English passages", () => {
    const tongue =
        "---\ntype: skill\nsubType: language\nshortcode: one\ndata:\n  register:\n    - {name: Kenbeshai Arathan, tongue: one}\n---\n";
    const prose =
        "---\ntype: doc\nshortcode: prose\n---\nHe met [Kenbeshay Arathan]{lang=en} and Arathan Kenbeshay.\n";
    const sources = [
        { file: "tongue.md", text: tongue },
        { file: "prose.md", text: prose },
    ];
    const report = pairs.pairInventory(sources, { languages: { one: { note: "skill-one" } } });
    const hits = report.findings.filter((h) => h.file === "prose.md");
    assert.equal(hits.length, 1);
    assert.equal(hits[0].form, "Kenbeshay");
    assert.equal(hits[0].source, "ay");
    assert.equal(prose.slice(hits[0].start, hits[0].end), "ay");
    assert.equal(hits[0].replacement, "ai");
    assert.equal(hits[0].language, "skill-one");

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "vowel-pairs-compound-"));
    try {
        const content = path.join(root, "assets/content");
        fs.mkdirSync(content, { recursive: true });
        fs.writeFileSync(
            path.join(content, "guide.md"),
            fs.readFileSync(notePath("doc-prnncthlrn"), "utf8"),
        );
        fs.writeFileSync(path.join(content, "tongue.md"), tongue);
        fs.writeFileSync(path.join(content, "prose.md"), prose);
        fs.writeFileSync(
            path.join(root, "package-build.config.yaml"),
            "contentPackage: thalorna\nlanguages: {one: {note: skill-one}}\n",
        );
        forgetNoteIndex(root);
        const errors = [];
        assert.equal(pairs.main([], { out: () => {}, err: (s) => errors.push(s) }, root), 1);
        assert.match(errors.join("\n"), /prose\.md:\d+:\d+: error: "Kenbeshay" closes "ay"/u);
    } finally {
        forgetNoteIndex(root);
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("a registered name is matched across wrapped lines and at any length", () => {
    const cases = [
        {
            register: "Kenbeshai Arathan",
            prose: "He met [Kenbeshay\n  Arathan]{lang=en} at dusk.\n",
        },
        {
            register: "Kenbeshai Arathan Arathan Arathan Arathan",
            prose: "He met [Kenbeshay Arathan Arathan Arathan Arathan]{lang=en} at dusk.\n",
        },
        {
            register: "Arathan Arathan Arathan Arathan Kenbeshai",
            prose: "> He met Arathan Arathan\n> Arathan Arathan Kenbeshay.\n",
        },
    ];
    for (const { register, prose } of cases) {
        const tongue = `---\ntype: skill\nsubType: language\nshortcode: one\ndata:\n  register:\n    - {name: ${register}, tongue: one}\n---\n`;
        const note = `---\ntype: doc\nshortcode: prose\n---\n${prose}`;
        const report = pairs.pairInventory(
            [
                { file: "tongue.md", text: tongue },
                { file: "prose.md", text: note },
            ],
            { languages: { one: { note: "skill-one" } } },
        );
        const hits = report.findings.filter((h) => h.file === "prose.md");
        assert.equal(hits.length, 1, register);
        assert.equal(note.slice(hits[0].start, hits[0].end), "ay");

        const root = fs.mkdtempSync(path.join(os.tmpdir(), "vowel-pairs-wrap-"));
        try {
            const content = path.join(root, "assets/content");
            fs.mkdirSync(content, { recursive: true });
            fs.writeFileSync(
                path.join(content, "guide.md"),
                fs.readFileSync(notePath("doc-prnncthlrn"), "utf8"),
            );
            fs.writeFileSync(path.join(content, "tongue.md"), tongue);
            fs.writeFileSync(path.join(content, "prose.md"), note);
            fs.writeFileSync(
                path.join(root, "package-build.config.yaml"),
                "contentPackage: thalorna\nlanguages: {one: {note: skill-one}}\n",
            );
            forgetNoteIndex(root);
            assert.equal(pairs.main([], { out: () => {}, err: () => {} }, root), 1, register);
        } finally {
            forgetNoteIndex(root);
            fs.rmSync(root, { recursive: true, force: true });
        }
    }
});
