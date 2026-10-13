/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of this license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard over the Ekpelu lexicon.
 *
 * Usage: `node utils/lexicons/ekpelu-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Ekpelu_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the register's coverage of the tongue's notes, the
 * attested names held to the rules as warnings, and the local Earth word
 * lists, which refuse a word only for copying a source language `SOURCES`
 * names.
 *
 * The one check that is Ekpelu's own is tone. Every word carries a Tones cell
 * of `H` and `L` only, one letter to a vowel (the page admits no vowel pair, so
 * a vowel is a syllable), and a word built from a root and endings carries the
 * root's tones followed by each ending's.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Ekpelu; that is judged by reading it aloud.
 */

import path from "node:path";
import { runGuard, ticked } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Ekpelu_Lexicon.md";

/** The source languages: the Bantu tongues, the analog of the Congo basin. */
export const SOURCES = ["swahili", "zulu"];

/** The tone letters. */
const TONES = /^[HL]+$/;

/**
 * The tone problems of one word.
 *
 * @param {{form: string, tones: string|null, built: string}} word
 * @param {{words: object[], suffixes: object[]}} page
 * @returns {string[]} One message per break.
 */
export function toneChecks(word, page) {
    if (!word.tones) return ["has no tones"];
    if (!TONES.test(word.tones)) return [`has tones \`${word.tones}\`, which are not only H and L`];
    const syllables = (word.form.match(/[aeiou]/g) ?? []).length;
    if (word.tones.length !== syllables)
        return [`has ${word.tones.length} tones for ${syllables} syllables`];
    const parts = ticked(word.built);
    if (!parts.length) return [];
    const known = parts.map(
        (p) =>
            page.words.find((w) => w.form === p)?.tones ??
            page.suffixes.find((s) => s.form === p)?.tones,
    );
    if (known.every(Boolean) && known.join("") !== word.tones)
        return [`has tones \`${word.tones}\`, but its parts give \`${known.join("")}\``];
    return [];
}

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Ekpelu lexicon",
    titles: true,
    tagFor: () => "ekpelu",
    extra: { wordChecks: toneChecks },
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
