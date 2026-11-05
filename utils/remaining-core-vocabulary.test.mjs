/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import test from "node:test";
import { isDeepStrictEqual } from "node:util";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { WORD_CLASS_BASES, parseWordClass } from "@heroiclands/package-build/engine/word-classes";
import {
    americanSpelling,
    baselinePath,
    withCommonStress,
    withNameForms,
    withStressProse,
} from "./encoding-preservation.mjs";
import { notePath } from "./note-index.mjs";

const baseline = "4da8f980e";
const languageFiles = [
    notePath("skill-tellumilng"),
    notePath("skill-sowideslng"),
    notePath("skill-ekpelulng"),
    notePath("skill-taruzelilng"),
];
const read = (file, raw = fs.readFileSync(file, "utf8")) => ({
    raw,
    fm: YAML.parse(splitFrontmatter(raw).yaml),
    body: splitFrontmatter(raw).body,
});
// Baseline spelling to current spelling for Taruzeli names and words, applied
// to the baseline fixture before comparison.
const taruzeliRespellings = [
    ["Libanu", "Libuna"],
    ["Salumu", "Salmuya"],
    ["Sallimu", "Sallina"],
    ["Gabbaru", "Gabbarim"],
    ["Attunu", "Attuman"],
    ["Kassuru", "Kassuruni"],
    ["nashu", "nashku"],
    ["nishu", "nishmu"],
    ["qadilu", "qadibu"],
    ["salilu", "salillu"],
    ["qamu", "qamzu"],
    ["tulu", "tulmu"],
    ["dalu", "dalmu"],
    ["selu", "selku"],
    ["salu", "sabku"],
    ["taru", "tarmu"],
    ["daru", "darmu"],
    ["naru", "nabzu"],
    ["niru", "nidru"],
    ["balu", "bazzu"],
    ["bar", "baz"],
    ["qad", "qash"],
    ["kal", "kel"],
    ["zukum", "zukush"],
    ["kum", "kush"],
    ["sir", "sik"],
];
// Baseline spelling to current spelling for Sovidur words, their derived forms
// and the names built on them, applied to the baseline fixture before
// comparison.
const sowidesRespellings = [
    ["Khoshiqor", "Ghoshiqor"],
    ["Khoshikud", "Ghoshikud"],
    ["khoshiq", "ghoshiq"],
    ["Orkunoq", "Orghunoq"],
    ["orkunoq", "orghunoq"],
    ["orkun", "orghun"],
    ["Tijodorkun", "Tijodorghun"],
    ["Bulaqsovid", "Bulachsovid"],
    ["bulaq", "bulach"],
    ["zekhir", "zekhil"],
    ["qoqum", "qoqud"],
    ["khökekh", "khökech"],
    ["khodor", "khodoz"],
    ["khüzey", "khüzem"],
    ["zaman", "zamad"],
    ["qolon", "qolom"],
    ["khonaq", "khonach"],
    ["khamas", "khamaz"],
    ["qomikh", "qomich"],
    ["qavun", "qavum"],
    ["khoqoz", "khoqoch"],
    ["khevel", "khevesh"],
    ["qoloq", "qoloch"],
    ["qanaq", "qanash"],
    ["khovuq", "khovud"],
    ["qozan", "qozam"],
    ["qorun", "qorud"],
    ["qadir", "qadil"],
    ["qonoq", "qonod"],
    ["zikir", "zikid"],
    ["qavar", "qavol"],
    ["qozum", "qozut"],
    ["khoquq", "khoquz"],
    ["qorukh", "qoruch"],
    ["churis", "charis"],
    ["chüris", "churis"],
    ["zutin", "zatin"],
    ["zütin", "zutin"],
];
// Baseline spelling to current spelling for Tellumi words and compounds, and
// for the Sovidur name its name-making example quotes, applied to the baseline
// fixture before comparison.
const tellumiRespellings = [
    ["harser", "tunsut"],
    ["ninser", "ninsut"],
    ["har", "tun"],
    ["bur", "bem"],
    ["tul", "tem"],
    ["ser", "sut"],
    ["verhet", "verhes"],
    ["narhet", "narhes"],
    ["dimhet", "dimhes"],
    ["het", "hes"],
    ["lemnul", "lemnus"],
    ["nul", "nus"],
    ["herim", "henim"],
    ["kermesh", "kervesh"],
    ["karli", "kurli"],
    ["namer", "namesh"],
    ["hevir", "hevesh"],
    ["lashergudesh", "lashungudesh"],
    ["lasher", "lashun"],
    ["nevel", "nemel"],
    ["geshem", "gashem"],
    ["semel", "senvel"],
    ["terem", "terum"],
    ["lemur", "lemun"],
    ["gaven", "gaden"],
    ["hesir", "hesur"],
    ["Orkunoq", "Orghunoq"],
    ["orkun", "orghun"],
];
const respellings = new Map([
    [notePath("skill-taruzelilng"), taruzeliRespellings],
    [notePath("skill-sowideslng"), sowidesRespellings],
    [notePath("skill-tellumilng"), tellumiRespellings],
]);
const respelled = (file, raw) => {
    const text = (respellings.get(file) ?? []).reduce(
        (acc, [from, to]) => acc.replace(new RegExp(`(?<!\\p{L})${from}(?!\\p{L})`, "gu"), to),
        raw,
    );
    if (file !== notePath("skill-sowideslng")) return text;
    // Sovidur writes plain o and u, and its harmony table has one front vowel.
    return text
        .replace("front: [e, ö, ü]", "front: [e]")
        .replace("z, o, ö, ü]", "z, o, u]")
        .replace("yzöü0", "yz0")
        .replace(/ö/gu, "o")
        .replace(/ü/gu, "u");
};
const fromBaseline = (file) =>
    americanSpelling(
        respelled(
            file,
            execFileSync("git", ["show", `${baseline}:${baselinePath(file, baseline)}`], {
                encoding: "utf8",
            }).replaceAll("khazrilng", "tellumilng"),
        ),
    );
// Baseline older names, by file, whose register rows and older-name list
// entries the comparison drops from the baseline fixture.
const replacedOlderNames = new Map([
    [
        notePath("skill-tellumilng"),
        new Set([
            "Azardan",
            "Bazudar Shahrun",
            "Durmand",
            "Nari Sahravan",
            "Sahri",
            "Shirzari",
            "Zarnush",
        ]),
    ],
]);
// Baseline prose sentences, by file, that an approved edit replaces: the
// comparison swaps each old sentence for its new one in the baseline
// paragraphs, and only for the sentences named here.
const replacedProse = new Map([
    [
        notePath("skill-tellumilng"),
        [
            // The neighbor tongues are described as Pronouncing Thalorna reads them.
            ["or a front group (_e_, _ö_, _ü_), with", "or a front group (_e_), with"],
            [
                "is harsh and long-voweled: _kh_, _gh_, _sh_ and _zh_, long vowels, and every word closed by a consonant.",
                "is harsh: _kh_, _gh_, _sh_ and _zh_, and every word closed by a consonant.",
            ],
        ],
    ],
    [
        notePath("skill-sowideslng"),
        [
            [
                "a front stem is made of _e_, _o_ and _u_ and the lighter _k_ and _g_; and _i_ sits with either.",
                "a front stem is made of _e_ and the lighter _k_ and _g_; and _i_ sits with either. A stem written with _o_ or _u_ keeps the group it was coined in, and its endings stay as written.",
            ],
            ["an _o_, an _o_ or a _u_", "an _o_ or a _u_"],
            [
                "In ordinary reading, _o_ is _e_ said with rounded lips, and _u_ is _i_ said with rounded lips. Plain _e_ and _i_ are also fine for players.",
                "Every vowel is said as written, _o_ as _o_ and _u_ as _u_.",
            ],
        ],
    ],
    [
        notePath("skill-taruzelilng"),
        [
            [
                "Features full vowel marking and adherence to classical grammar.",
                "Favors the full run of _a_, _u_ and _i_ in open syllables, the endings _-um_, _-ush_ and _-uni_, and adherence to classical grammar.",
            ],
            [
                "and heavily marked vowels for contractual precision.",
                "and a careful, even run of _a_, _u_ and _i_ in every syllable for contractual precision.",
            ],
            // Taruzeli narrows Pronouncing Thalorna: no unwritten length, stress or pitch.
            [
                "Its long vowels give names and words a flowing, measured quality",
                "Its open vowels give names and words a flowing, measured quality",
            ],
            [
                "cut to its stressed syllable with the vowel held long: _Zabuzum_ is _Bu_.",
                "cut to its stressed syllable: _Zabuzum_ is _Bu_.",
            ],
            [
                "Taruzeli employs five primary vowel qualities, each with both short and long forms:",
                "Taruzeli employs five primary vowel qualities:",
            ],
            [" (short or long)", ""],
            [
                "Long vowels carry heavy semantic weight. Compare _Shamut_ (short) vs. _Shamulu_ (long vowel emphasis). The interplay of long and short vowels creates a distinctive rhythmic pattern in speech.",
                "",
            ],
            [
                "Diphthongs are rare; vowel length and stress are preferred for emphasis.",
                "Diphthongs are rare.",
            ],
            [
                "Taruzeli exhibits stress patterns that tend toward the penultimate syllable in multi-syllable words, with secondary stress on earlier syllables in longer forms.",
                "Taruzeli stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: the first syllable of a two-syllable word, the second-to-last of a longer one.",
            ],
            [
                "The language is generally non-tonal but employs pitch accents for emphasis in formal contexts.",
                "The language is non-tonal.",
            ],
        ],
    ],
]);
const withReplacedProse = (file, text) =>
    withStressProse(
        (replacedProse.get(file) ?? []).reduce((out, [from, to]) => out.replace(from, to), text),
        file,
    );
// The five tribes' replacement names, as they stand in prose that names them.
const tribeRenames = new Map([
    ["Azardan", "Jobizur"],
    ["Durmand", "Qibudur"],
    ["Sahri", "Oroqidur"],
    ["Shirzari", "Kenodur"],
    ["Zarnush", "Koserur"],
]);
const renameTribes = (text) =>
    [...tribeRenames].reduce((out, [from, to]) => out.replaceAll(from, to), text);
// The baseline fixture's `kept` tag holds the older tribe name Sahri, which
// the comparison drops.
function withoutKeptTag(fm, file) {
    if (file !== notePath("skill-sowideslng")) return fm;
    const copy = structuredClone(fm);
    copy.data.tongues = copy.data.tongues.filter((item) => item?.tag !== "kept");
    copy.data.register = copy.data.register.filter((row) => row?.tongue !== "kept");
    return copy;
}
function withoutReplacedOlderNames(fm, file) {
    const names = replacedOlderNames.get(file);
    if (!names) return fm;
    const copy = structuredClone(fm);
    if (Array.isArray(copy.data?.register))
        copy.data.register = copy.data.register.filter(
            (row) => !(row?.tongue === "older" && names.has(row.name)),
        );
    if (Array.isArray(copy.data?.older))
        copy.data.older = copy.data.older.filter((item) => !names.has(item?.form));
    return copy;
}
const ordinary = new Set(
    WORD_CLASS_BASES.filter((item) => item.glossary).map((item) => item.token),
);
const ids = (word) => [word.concept ?? []].flat();
const usableForm = (form) =>
    typeof form === "string" &&
    Boolean(form.trim()) &&
    !form
        .trim()
        .split(/\s+/u)
        .some((atom) => atom.endsWith("-"));

function preserves(oldValue, newValue) {
    if (Array.isArray(oldValue)) {
        if (!Array.isArray(newValue)) return false;
        let next = 0;
        return oldValue.every((oldItem) => {
            const found = newValue.findIndex(
                (newItem, index) => index >= next && preserves(oldItem, newItem),
            );
            if (found < 0) return false;
            next = found + 1;
            return true;
        });
    }
    if (oldValue && typeof oldValue === "object")
        return (
            newValue &&
            typeof newValue === "object" &&
            !Array.isArray(newValue) &&
            Object.entries(oldValue).every(
                ([key, value]) => Object.hasOwn(newValue, key) && preserves(value, newValue[key]),
            )
        );
    return Object.is(oldValue, newValue);
}

test("the four expanded languages cover the current core inventory with ordinary expressions", () => {
    const inventory = read(notePath("doc-coreconcepts"));
    const expected = new Set(inventory.fm.data.concepts.map((concept) => concept.id));

    for (const file of languageFiles) {
        const note = read(file);
        const actual = new Set(
            note.fm.data.words
                .filter((word) => {
                    const glosses = Array.isArray(word.gloss) ? word.gloss : [word.gloss];
                    return (
                        ordinary.has(parseWordClass(word.class).base) &&
                        usableForm(word.form) &&
                        glosses.length > 0 &&
                        glosses.every((gloss) => typeof gloss === "string" && gloss.trim())
                    );
                })
                .flatMap(ids),
        );

        for (const word of note.fm.data.words) {
            for (const id of ids(word)) assert(expected.has(id), `${file}: ${word.form}: ${id}`);
        }
        assert.deepEqual(
            [...expected].filter((id) => !actual.has(id)),
            [],
            `${file}: concepts without ordinary expressions`,
        );
        assert.deepEqual(
            [...actual].filter((id) => !expected.has(id)),
            [],
            `${file}: unknown concept IDs`,
        );
        for (const word of note.fm.data.words.filter(
            (item) => ids(item).length && ordinary.has(parseWordClass(item.class).base),
        )) {
            assert(
                usableForm(word.form),
                `${file}: concept-tagged word needs a free word or phrase`,
            );
            const glosses = Array.isArray(word.gloss) ? word.gloss : [word.gloss];
            assert(glosses.length > 0, `${file}: ${word.form} needs a gloss`);
            assert(
                glosses.every((gloss) => typeof gloss === "string" && gloss.trim()),
                `${file}: ${word.form} needs nonempty gloss text`,
            );
        }
    }
});

test("original language entries, metadata and prose are retained", () => {
    for (const file of languageFiles) {
        const before = read(file, fromBaseline(file));
        const after = read(file);
        const oldWords = before.fm.data.words;
        const newWords = after.fm.data.words;

        for (const baselineWord of oldWords) {
            const oldWord =
                file === notePath("skill-sowideslng") ?
                    {
                        ...baselineWord,
                        ...(typeof baselineWord.gloss === "string" && {
                            gloss: renameTribes(baselineWord.gloss),
                        }),
                    }
                :   baselineWord;
            const candidates = newWords.filter(
                (word) =>
                    word.form === oldWord.form &&
                    word.class === oldWord.class &&
                    (!Object.hasOwn(oldWord, "tones") ||
                        isDeepStrictEqual(word.tones, oldWord.tones)),
            );
            assert(
                candidates.some((word) =>
                    Object.entries(oldWord).every(([key, value]) => {
                        if (key === "concept")
                            return (
                                ids(word).length >= ids(oldWord).length &&
                                ids(oldWord).every((id) => ids(word).includes(id))
                            );
                        return Object.hasOwn(word, key) && isDeepStrictEqual(word[key], value);
                    }),
                ),
                `${file}: original word record changed: ${oldWord.form}`,
            );
        }

        const oldMetadata = structuredClone(
            withoutKeptTag(
                withoutReplacedOlderNames(
                    withCommonStress(withNameForms(before.fm, after.fm), file),
                    file,
                ),
                file,
            ),
        );
        const newMetadata = structuredClone(after.fm);
        delete oldMetadata.data.words;
        delete newMetadata.data.words;
        assert(
            preserves(oldMetadata, newMetadata),
            `${file}: original metadata was removed or changed`,
        );

        // Whitespace and the width of a table's rule row are layout.
        const flatten = (text) =>
            text
                .replace(/\s+/gu, " ")
                .replace(/(?<=\| )-{3,}(?= \|)/gu, "---")
                .trim();
        const currentBody = flatten(after.body);
        for (const paragraph of before.body
            .split(/\n\s*\n/u)
            .map(flatten)
            .map((paragraph) => withReplacedProse(file, paragraph))
            .filter(Boolean))
            assert(
                currentBody.includes(paragraph),
                `${file}: original prose is missing: ${paragraph.slice(0, 80)}`,
            );
    }
});
