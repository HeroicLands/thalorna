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
import { withGuidePairSpellings } from "./guide-pair-preservation.mjs";
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
    if (file === notePath("skill-ekpelulng"))
        // Ekpelu writes no tone: the lexicon's tone sequences and their column are gone.
        return text
            .replace(/\n\s+"?tones"?: "?[HL]+"?(?=\n)/gu, "")
            .replace(/,\s*"?tones"?: "?[HL]+"?(?=[,}])/gu, "")
            .replace(", '`' || tones || '`' AS \"Tones\"", "");
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
        notePath("skill-ekpelulng"),
        [
            // Ekpelu narrows Pronouncing Thalorna: no tone, and kp and gb read as the guide reads them.
            [
                "**Double-closure stops:** kp, gb",
                "**Paired stops:** kp, gb, read as [[doc-prnncthlrn|Pronouncing Thalorna]] reads them: _k_ then _p_, _g_ then _b_",
            ],
            ["### Tones", ""],
            ["### Tone", ""],
            [
                "Ekpelu is a tonal tongue with two level tones, high and low. Tone tells words apart, so a word's tones are part of its form as much as its consonants and vowels. Because the pitch carries the meaning, the forest peoples can call to one another across a long distance in pitch alone, without shaping a single consonant. Names and prose are written here without tone marks, as the people's own speech is not written; the [[skill-ekpelulng#lexicon|Ekpelu Lexicon]] shows the tones of every word.",
                "",
            ],
            [
                "Ekpelu has two level tones, high (`H`) and low (`L`), and each syllable carries one. Two words spelled alike with different tones are different words, so a word's tones are as much a part of its form as its letters. The lexicon writes them in the Tones column, one letter to a syllable, and nowhere else: names and prose on every other page are spelled without tone marks, since the people's own speech is not written.",
                "",
            ],
            [
                "An ending carries its own tone whatever the root, so a built word's tones are its root's followed by the ending's: `luwa` (`LH`) with `-ndo` (`L`) is `luwando` (`LHL`).",
                "",
            ],
            [
                "Tone is level pitch, never a rising question tune. Each vowel has the high or low pitch given in the dictionary. A phrase keeps the tone sequence of its separate words; the displayed sequence simply puts those sequences together. Social suffixes append their established tone to the whole root sequence, so _luwa_ LH plus _-ndo_ L remains _luwando_ LHL. Ordinary names and transcribed passages require no tone marks. Pitch and emphasis do not replace the question words.",
                "The words are said on a level voice, with only their stress. Pitch and emphasis do not replace the question words.",
            ],
            [
                " Ekpelu is a tonal tongue: every vowel is sung on a high or a low pitch, and the pitch is part of the word.",
                "",
            ],
        ],
    ],
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
            [
                "Taruzeli is characterized by rhythmic, sonorous tones. Its open vowels give names and words a flowing, measured quality suited to contract negotiations and formal agreements.",
                "",
            ],
            [
                "Taruzeli is the ledger-speech of the sea-lanes. It has three vowels and leans on doubled consonants.",
                "",
            ],
            ["**The vowels.** _a_, _u_ and _i_, with _e_ rarer.", ""],
            ["**The consonants.** _sh_, _z_, _m_, _q_, _b_, _d_, _g_, _k_, _r_ and _n_.", ""],
            [
                "**Clusters.** Doubled consonants (_mm_, _rr_, _zz_) stand between vowels. A word opens on one consonant.",
                "",
            ],
            ["**Endings.** Taruzeli words end in _-um_, _-ush_, _-uni_, _-am_ or _-u_.", ""],
            ["**What Taruzeli leaves out.** It has no _o_, no _f_ and no _th_.", ""],
            ["## Phonology", ""],
            ["### Consonant System", ""],
            [
                "Taruzeli features a rich consonant inventory with several distinctive sound clusters:",
                "",
            ],
            ["Stops : /p/, /b/, /t/, /d/, /k/, /q/ (uvular)", ""],
            [
                "Fricatives : /f/, /z/, /sh/ (voiceless sh-sound), /kh/ (velar fricative), /gh/ (voiced velar)",
                "",
            ],
            ["Nasals : /m/, /n/", ""],
            ["Liquids : /r/, /l/", ""],
            ["Affricates : /dz/, /ts/", ""],
            [
                "Characteristic clusters appear in given names: _Sharrush, Nadumar, Iddinash, Tarruk, Bissush_. Double consonants (_mm_, _rr_, _dd_, _tt_, _kk_, _ss_, _zz_) are phonologically significant, often marking emphasis or etymological depth.",
                "",
            ],
            [
                "The velar _kh_ and uvular _q_ give Taruzeli a guttural quality that distinguishes it from neighboring Ankarian languages.",
                "",
            ],
            ["### Vowel System", ""],
            ["Taruzeli employs five primary vowel qualities:", ""],
            ["a : front open vowel", ""],
            ["e : front mid vowel", ""],
            ["i : front close vowel", ""],
            ["o : back mid vowel", ""],
            ["u : back close vowel", ""],
            ["Diphthongs are rare.", ""],
            ["### Stress and Prosody", ""],
            [
                "Taruzeli stress follows the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: the first syllable of a two-syllable word, the second-to-last of a longer one. This creates a measured, rolling cadence suited to oral recitation of contracts and maritime commands.",
                "",
            ],
            ["Examples from given names:", ""],
            [
                "- _na-DU-mar_ (stress on the second-to-last syllable) - _sha-MU-lu_ (stress on the second-to-last syllable) - _TAR-ruk_ (stress on first)",
                "",
            ],
            ["The language is non-tonal.", ""],
            [
                "- **-i** (masculine lineage marker)—_Bibudi, Shamurin, Girmali_ - **-uni** (feminine/collective lineage)—_Pasharuni, Beshuni, Pilmuni_ - **-um** (emphatic lineage)—_Bilulum, Kalurum, Eshkarum, Ilammu_",
                "",
            ],
            [
                "Family names are prestigious markers and carry explicit gender/collective suffixes:",
                "",
            ],
            [
                "- **-i** endings mark patrilineal descent (masculine focus) - **-uni** endings mark broader family collectives or matrilineal branches - **-um** endings emphasize family honor and strength",
                "",
            ],
            [
                "The sound of Taruzeli is rolling and full-voiced. Vowels come short or long, and a consonant doubled inside a word is held and pressed: _Sharrush_, _Zattuya_, _Ilammuni_. Stress falls on the second-last syllable, and a word never opens on two consonants.",
                "",
            ],
            ["Two vowels standing together are both said, one after the other.", ""],
            [
                '**A house or a body** is named for its founder or its work, with the lineage ending: the _[Merazuni]{.name data-type="affiliation/governmental"}_, the Confederation\'s treasury, is the whole company of the ledger, built as `meraz-` + `-uni`. The _[[affiliation-vezakuni|Vezakuni]]_, the Council of the Guild-Wardens, is the whole company of the warding, `vezak-` + `-uni`, and its seat, the _[Vezakar]{.name data-type="place/site"}_, is where the warding is kept; its overseers are the _[Pazasuni]{.name data-type="affiliation"}_, the company of the lookouts. The [[affiliation-auricompct|Auric Compact]] is a banking cartel named in the reader\'s tongue for the gold it holds.',
                "",
            ],
            [
                "A retired name is one the setting does not write: a name from Earth, or a name no Taruzeli root builds. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose.",
                "",
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
        const before = withGuidePairSpellings({ file, ...read(file, fromBaseline(file)) });
        before.body = splitFrontmatter(before.raw).body;
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
