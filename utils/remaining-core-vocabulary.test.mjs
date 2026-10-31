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
import { withNameForms } from "./encoding-preservation.mjs";

const baseline = "4da8f980e";
const languageFiles = [
    "assets/content/Skills/Languages/Tellumi.md",
    "assets/content/Skills/Languages/Sowides.md",
    "assets/content/Skills/Languages/Ekpelu.md",
    "assets/content/Skills/Languages/Taruzeli.md",
];
const read = (file, raw = fs.readFileSync(file, "utf8")) => ({
    raw,
    fm: YAML.parse(splitFrontmatter(raw).yaml),
    body: splitFrontmatter(raw).body,
});
// The baseline commit holds Tellumi as Khazri.md with shortcode khazrilng.
const baselinePath = (file) =>
    file.endsWith("/Tellumi.md") ? file.replace("Tellumi.md", "Khazri.md") : file;
// Taruzeli names respelled since the baseline.
const taruzeliRespellings = [
    ["Libanu", "Libuna"],
    ["Salumu", "Salmuya"],
    ["Sallimu", "Sallina"],
    ["Gabbaru", "Gabbarim"],
    ["Attunu", "Attuman"],
    ["Kassuru", "Kassuruni"],
];
const respelled = (file, raw) =>
    file.endsWith("/Taruzeli.md") ?
        taruzeliRespellings.reduce(
            (text, [from, to]) =>
                text.replace(new RegExp(`(?<!\\p{L})${from}(?!\\p{L})`, "gu"), to),
            raw,
        )
    :   raw;
const fromBaseline = (file) =>
    respelled(
        file,
        execFileSync("git", ["show", `${baseline}:${baselinePath(file)}`], {
            encoding: "utf8",
        }).replaceAll("khazrilng", "tellumilng"),
    );
// Older names the steppe-tribe rulings replaced: the register rows and the
// older-name list entries no longer exist, by file.
const replacedOlderNames = new Map([
    [
        "assets/content/Skills/Languages/Tellumi.md",
        new Set(["Azardan", "Durmand", "Sahri", "Shirzari", "Zarnush"]),
    ],
]);
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
// The `kept` tag held the older tribe name Sahri, which the rulings replaced.
function withoutKeptTag(fm, file) {
    if (file !== "assets/content/Skills/Languages/Sowides.md") return fm;
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
    const inventory = read("assets/content/Reference/Core_Vocabulary.md");
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
                file.endsWith("/Sowides.md") ?
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
                withoutReplacedOlderNames(withNameForms(before.fm, after.fm), file),
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

        const currentBody = after.body.replace(/\s+/gu, " ").trim();
        for (const paragraph of before.body
            .split(/\n\s*\n/u)
            .map((part) => part.replace(/\s+/gu, " ").trim())
            .filter(Boolean))
            assert(
                currentBody.includes(paragraph),
                `${file}: original prose is missing: ${paragraph.slice(0, 80)}`,
            );
    }
});
