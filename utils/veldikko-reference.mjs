// Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
// SPDX-License-Identifier: GPL-3.0-or-later

/** Independent Sinale spelling model, adapted from the author's OFL-1.1 script
 * fonts tools/veldikko/convert.mjs
 * at 3ec43cd207ba13072a0806421a2a62efb7aabca6. Glyph values come from the
 * installed font manifest, independently of the authored encoding document. */
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";

class Unmappable extends Error {
    constructor(letter, offset) {
        super(`No Veldikko reference sign for ${JSON.stringify(letter)} at ${offset}`);
        this.letter = letter;
        this.offset = offset;
    }
}

const VOWELS = new Set(["a", "e", "i", "o", "u", "y", "ë"]);
const DIPHTHONGS = new Set([
    "ai",
    "au",
    "ia",
    "eo",
    "oi",
    "ou",
    "ui",
    "uo",
    "ei",
    "ie",
    "yi",
    "ye",
]);
const DIGRAPHS = new Set(["dh", "ng"]);
const BREAKS = new Set([" ", "\t", "\n", "-"]);

/** Bind the reference model to published glyph metadata, without an encoding reader. */
export function veldikkoTable(fonts = resolveScriptFonts(process.cwd())) {
    const family = fonts.manifest?.families.find((entry) => entry.family === "Veldikko");
    if (!family) throw new Error("Installed fonts have no Veldikko glyph metadata");
    const glyphs = new Map(
        family.codepoints.map((row) => [
            row.glyph,
            String.fromCodePoint(Number.parseInt(row.codepoint.slice(2), 16)),
        ]),
    );
    const point = (glyph) => {
        if (!glyphs.has(glyph)) throw new Error(`Missing Veldikko reference glyph ${glyph}`);
        return glyphs.get(glyph);
    };
    return {
        letters: new Map(
            [..."pvmtsdnkhlr", "dh", "ng", ""].map((letter) => [
                letter,
                point(letter || "carrier"),
            ]),
        ),
        vowels: new Map(
            [...VOWELS].map((vowel) => [
                vowel,
                point(`vowel.${vowel === "ë" ? "edieresis" : vowel}`),
            ]),
        ),
        signs: new Map(["long", "bar"].map((sign) => [sign, point(sign)])),
    };
}

/**
 * The Veldikko code points a romanized Sinale text is written with.
 *
 * @param {string} text - The romanized spelling.
 * @returns {string} The code points, in logical order.
 * @throws {Unmappable} When a character has no sign.
 */
export function convertVeldikko(text, table = veldikkoTable()) {
    const { letters, vowels, signs } = table;
    const s = Array.from(text.normalize("NFC").toLowerCase());
    const out = [];
    let wordStart = true;
    let afterNucleus = false; // the last thing written was a vowel nucleus
    let i = 0;
    while (i < s.length) {
        const ch = s[i];
        if (BREAKS.has(ch)) {
            if (out.length && out[out.length - 1] !== " ") out.push(" ");
            wordStart = true;
            afterNucleus = false;
            i += 1;
            continue;
        }
        if (VOWELS.has(ch)) {
            if (wordStart || afterNucleus) out.push(letters.get(""));
            const next = s[i + 1];
            if (next === ch || (ch === "e" && next === "ë")) {
                // a doubled vowel is one mark drawn long; eë is the long ë
                const vowel = next;
                out.push(vowels.get(vowel), signs.get("long"));
                i += 2;
            } else if (next && DIPHTHONGS.has(ch + next)) {
                out.push(vowels.get(ch), vowels.get(next));
                i += 2;
            } else {
                out.push(vowels.get(ch));
                i += 1;
            }
            wordStart = false;
            afterNucleus = true;
            continue;
        }
        const two = s.slice(i, i + 2).join("");
        let spelling;
        let step;
        if (DIGRAPHS.has(two)) {
            spelling = two;
            step = 2;
        } else if (ch === "n" && s[i + 1] === "k") {
            spelling = "ng";
            step = 1;
        } else if (letters.has(ch) && ch !== "") {
            spelling = ch;
            step = 1;
        } else {
            throw new Unmappable(ch, i);
        }
        out.push(letters.get(spelling));
        i += step;
        const again = s.slice(i, i + step).join("");
        if (again === spelling) {
            out.push(signs.get("bar"));
            i += step;
        }
        wordStart = false;
        afterNucleus = false;
    }
    while (out.length && out[out.length - 1] === " ") out.pop();
    return out.join("");
}
