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
 * The guard over the Jürthāti lexicon.
 *
 * Usage: `node utils/lexicons/jurthati-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Jurthati_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, each native reading of a Tāntsou root through the page's
 * change table, the register's coverage of Jénchài and its tongue, the
 * attested names held to the rules as warnings, and the local Earth word
 * lists, which refuse a word only for copying a source language `SOURCES`
 * names.
 *
 * Two checks are this page's own, both read off its Voicing and Suffixes
 * tables:
 *
 * - **A compound voices its second part.** A Built from cell whose second or
 *   later word opens on a consonant the Voicing table lists as plain is an
 *   error: inside a compound that word takes its voiced compound form from the
 *   suffix table.
 * - **A compound form is its word voiced.** A suffix whose Makes cell calls it
 *   "the compound form of _x_" must be _x_ with its opening voiced by the
 *   Voicing table; a word built with a suffix that is not is an error.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Jürthāti; that is judged by reading it aloud.
 */

import fs from "node:fs";
import path from "node:path";
import { lower, runGuard, tableOf, ticked } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Jurthati_Lexicon.md";

/** The language note. */
export const NOTE = "assets/content/Skills/Languages/Jurthat.md";

/**
 * The source languages: the island speech is patterned on Japanese, and its
 * inherited stock comes from a parent patterned on Chinese.
 */
export const SOURCES = ["japanese", "chinese"];

/**
 * The Voicing table: each plain opening with the voiced one it takes inside a
 * compound, the longest plain opening first so `sh` is read before `s`.
 *
 * @param {string} text - The lexicon page.
 * @returns {{plain: string, voiced: string}[]}
 */
export function voicingOf(text) {
    const table = tableOf(text, "### Voicing", false);
    if (!table) return [];
    return table.rows
        .map(({ cells }) => ({
            plain: lower(ticked(cells[0])[0] ?? ""),
            voiced: lower(ticked(cells[1] ?? "")[0] ?? ""),
        }))
        .filter((r) => r.plain && r.voiced)
        .sort((a, b) => b.plain.length - a.plain.length);
}

/**
 * A word with its opening voiced, or null when it opens on nothing the table
 * lists as plain.
 *
 * @param {string} word
 * @param {{plain: string, voiced: string}[]} voicing
 */
export function voiced(word, voicing) {
    const rule = voicing.find((r) => word.startsWith(r.plain));
    return rule ? rule.voiced + word.slice(rule.plain.length) : null;
}

/**
 * The words each suffix claims to be the compound form of, read off the raw
 * Makes cells: `-jai` → [`chai`].
 *
 * @param {string} text - The lexicon page.
 * @returns {Map<string, string[]>}
 */
export function compoundFormsOf(text) {
    const out = new Map();
    const table = tableOf(text, "### Suffixes", false);
    if (!table) return out;
    for (const { cells } of table.rows) {
        const form = lower(ticked(cells[0])[0] ?? "");
        const claims = [...(cells[2] ?? "").matchAll(/compound form of _([^_]+)_/g)].map((m) =>
            lower(m[1]),
        );
        if (form && claims.length) out.set(form, claims);
    }
    return out;
}

/**
 * The page's own word checks, read off the text of the page being checked.
 *
 * @param {string} text - The lexicon page.
 * @returns {{wordChecks: (word: {built: string}) => string[]}}
 */
export function extraFor(text) {
    const voicing = voicingOf(text);
    const forms = compoundFormsOf(text);
    return {
        wordChecks(word) {
            const out = [];
            const pieces = ticked(word.built).map(lower);
            pieces.forEach((piece, i) => {
                if (piece.startsWith("-")) {
                    for (const claim of forms.get(piece) ?? []) {
                        const made = voiced(claim, voicing) ?? claim;
                        if (`-${made}` !== piece)
                            out.push(
                                `is built with \`${piece}\`, which the suffix table calls the compound form of \`${claim}\`, but \`${claim}\` voiced is \`${made}\``,
                            );
                    }
                    return;
                }
                if (i === 0) return;
                const stem = piece.replace(/-$/, "");
                const made = voiced(stem, voicing);
                if (made !== null)
                    out.push(
                        `sets \`${stem}\` unvoiced inside a compound; a second part takes its voiced form, \`-${made}\`, from the suffix table`,
                    );
            });
            return out;
        },
    };
}

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Jürthāti lexicon",
    titles: true,
    tagFor: () => "kept",
    extra: extraFor(fs.existsSync(LEXICON) ? fs.readFileSync(LEXICON, "utf8") : ""),
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
