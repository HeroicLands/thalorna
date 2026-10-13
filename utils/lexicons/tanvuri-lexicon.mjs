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
 * The guard over the Tāntsou lexicon.
 *
 * Usage: `node utils/lexicons/tanvuri-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Tantsou_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the register's coverage of Tāntsou, Jénchài, the
 * Celestial Order and their people, the attested names held to the rules as warnings,
 * the retired names swept from the tree, and the local Earth word lists,
 * which refuse a word only for copying a source language `SOURCES` names.
 *
 * On top of those it holds every word to the syllable the page states: an
 * optional initial from the Letters table, a final from the Finals table, and
 * a closing `n` or `ng` from the Word edges table. A syllable carries at most
 * one tone mark, one the Letters table writes, on the vowel the marking rule
 * names.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Tāntsou; that is judged by reading it aloud.
 */

import path from "node:path";
import { runGuard } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Tantsou_Lexicon.md";

/** The source language: imperial China. */
export const SOURCES = ["chinese"];

/** Tāntsou syllables are two or three letters; the word lists compare from two. */
export const MIN_LENGTH = 2;

const MARKS = new Map([
    ["\u0304", "macron"],
    ["\u0301", "acute"],
    ["\u0300", "grave"],
]);

/** A letter's base vowel and the combining marks on it. */
function split(ch) {
    const [base, ...marks] = ch.normalize("NFD");
    return { base, marks };
}

/**
 * The vowel a syllable's tone mark belongs on: `a`, else `e`, else `o`, else the
 * last vowel.
 *
 * @param {string[]} vowels - The bases of the syllable's vowels.
 * @returns {number} The index into `vowels`.
 */
export function markedVowel(vowels) {
    for (const v of ["a", "e", "o"]) if (vowels.includes(v)) return vowels.indexOf(v);
    return vowels.length - 1;
}

/**
 * A word cut into syllables: an initial the Letters table writes, the vowels of
 * a final, and a closing consonant the Word edges table lists. Any cut that
 * consumes the word is returned, the one with the longest closing consonants
 * first.
 *
 * @param {string} word - The word, composed.
 * @param {{initials: string[], codas: string[]}} rules
 * @returns {{initial: string, vowels: string[], coda: string}[]|null} Null when no cut fits.
 */
export function syllables(word, { initials, codas }) {
    const chars = [...word.normalize("NFC")];
    const isVowel = (ch) => /[aeiou]/.test(split(ch).base);
    const cut = (at) => {
        if (at === chars.length) return [];
        const rest = chars.slice(at).join("");
        for (const initial of ["", ...initials]) {
            if (initial && !rest.startsWith(initial)) continue;
            let i = at + [...initial].length;
            const start = i;
            while (i < chars.length && isVowel(chars[i])) i += 1;
            if (i === start) continue;
            for (const coda of ["", ...codas].sort((a, b) => b.length - a.length)) {
                const tail = chars.slice(i).join("");
                if (coda && !tail.startsWith(coda)) continue;
                const more = cut(i + [...coda].length);
                if (more) return [{ initial, vowels: chars.slice(start, i), coda }, ...more];
            }
        }
        return null;
    };
    return cut(0);
}

/**
 * The messages for one word: a syllable that is not initial + listed final, a
 * syllable with two tone marks, a tone mark the Letters table does not write, and
 * a tone mark on the wrong vowel.
 *
 * @param {{form: string}} word - A word row.
 * @param {object} page - From `readPage`.
 * @returns {string[]}
 */
export function wordChecks(word, page) {
    const form = word.form.normalize("NFC").toLowerCase();
    const letters = page.letters.filter((l) => l.tags === null || l.tags.includes("tanvuri"));
    const initials = letters
        .filter((l) => l.vowel === false && l.kind !== "closing consonant")
        .map((l) => l.form)
        .sort((x, y) => y.length - x.length);
    const written = new Set(letters.map((l) => l.form));
    const finals = page.finals;
    if (!finals) return ["has no Finals table to be read by"];
    const parts = syllables(form, { initials, codas: page.edges.closing });
    if (!parts)
        return ["is not an initial, a final and a closing `n` or `ng`, syllable by syllable"];
    const out = [];
    for (const { initial, vowels, coda } of parts) {
        const at = `\`${initial}${vowels.join("")}${coda}\``;
        const bases = vowels.map((v) => split(v).base);
        const final = bases.join("") + coda;
        if (!finals.includes(final))
            out.push(
                `writes the final \`${final}\` in ${at}, which the Finals table does not list`,
            );
        const marked = vowels.map((v, i) => ({ i, marks: split(v).marks }));
        const carrying = marked.filter((m) => m.marks.length);
        const count = carrying.reduce((n, m) => n + m.marks.length, 0);
        if (count > 1)
            out.push(`puts ${count} tone marks on ${at}; a syllable carries at most one`);
        for (const m of carrying) {
            for (const mark of m.marks) {
                if (!MARKS.has(mark)) {
                    out.push(`writes a mark on ${at} that is no tone mark`);
                } else if (!written.has(vowels[m.i].normalize("NFC").toLowerCase())) {
                    out.push(
                        `writes \`${vowels[m.i]}\` in ${at}, a tone the Letters table does not write`,
                    );
                }
            }
            if (count === 1 && m.i !== markedVowel(bases))
                out.push(
                    `marks \`${vowels[m.i]}\` in ${at}; the tone mark belongs on \`${bases[markedVowel(bases)]}\``,
                );
        }
    }
    return out;
}

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Tāntsou lexicon",
    titles: true,
    tagFor: () => "tanvuri",
    minLength: MIN_LENGTH,
    extra: { wordChecks },
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
