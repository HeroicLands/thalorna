/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/**
 * The vowel-y rule of Pronouncing Thalorna and its fixture: _y_ is never a
 * vowel, so a vowel _y_ is respelled. `vowel-y-sweep.mjs` applies it to the
 * tree, and the Eilwithi respelling applies it to every Eilwithi word.
 *
 * @module
 */
import fs from "node:fs";
import { fileURLToPath } from "node:url";

/** The data file of respellings and held forms. */
export const FIXTURE = fileURLToPath(
    new URL("./fixtures/vowel-y-respellings.json", import.meta.url),
);

/** Each tongue's language note, by the name the fixture uses. */
export const TONGUES = {
    eilwithi: "skill-aelwthlng",
    elavendri: "skill-elvndrlng",
    helonic: "skill-helonclng",
    nordmal: "skill-nordmalng",
    sinale: "skill-sinalelng",
    varokhi: "skill-varokhlng",
};

const VOWEL = /^[aeiou]$/u;
const ACUTE = "\u0301";
const baseOf = (char) => (char ? char.normalize("NFD")[0].toLowerCase() : "");
const isVowel = (char) => VOWEL.test(baseOf(char));
const fold = (text) => text.normalize("NFC").toLowerCase();

/**
 * A word with every vowel _y_ respelled.
 *
 * @param {string} word
 * @param {{front?: boolean}} [options] - `front` writes Sinale's _ì_ and reads
 *   _ny_ as _n_ and a vowel.
 * @returns {string}
 */
export function respellVowelY(word, { front = false } = {}) {
    const chars = [...word.normalize("NFC")];
    return chars
        .map((char, index) => {
            if (baseOf(char) !== "y") return char;
            const acute = char.normalize("NFD").includes(ACUTE);
            const before = chars[index - 1];
            if (!acute) {
                if (isVowel(chars[index + 1]) || isVowel(before)) return char;
                if (!front && baseOf(before) === "n") return char;
            }
            const vowel = front ? "ì" : "i";
            const written = (acute ? vowel + ACUTE : vowel).normalize("NFC");
            return char === char.toLowerCase() ? written : written.toUpperCase();
        })
        .join("");
}

/**
 * The fixture: the prose respellings and the held forms.
 *
 * @param {string} [file]
 * @returns {{respellings: {from: string, to: string, tongue: string}[],
 *   held: {form: string, tongue: string, why: string}[]}}
 */
export function loadFixture(file = FIXTURE) {
    const { respellings = [], held = [] } = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const entry of respellings)
        if (!entry.from || !entry.to || !TONGUES[entry.tongue])
            throw new Error(`${file}: a respelling needs a from, a to and a known tongue`);
    return { respellings, held };
}

let held;
/**
 * The folded forms the fixture holds, which keep their spelling.
 *
 * @returns {Set<string>}
 */
export function heldForms() {
    held ??= new Set(loadFixture().held.map(({ form }) => fold(form)));
    return held;
}

/**
 * Every word of a text with its vowel _y_ respelled to _i_, but held forms.
 *
 * @param {string} text
 * @returns {string}
 */
export function respellVowelYWords(text) {
    return text.replace(/[\p{L}\p{M}]+/gu, (word) =>
        heldForms().has(fold(word)) ? word : respellVowelY(word),
    );
}
