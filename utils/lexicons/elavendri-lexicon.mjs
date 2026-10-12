/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Élavendri language.
 *
 * `Lore/Elavendri_Lexicon.md` states the tongue as tables: its letters, with
 * `b`, `f` and `z` marked as letters only a learned word carries; its edges,
 * clusters and stress; the ordered changes that make an Élavendri word of an
 * Áelendi one; the table for the learned words taken from imperial Vylari;
 * one word table per field, each row naming its source; and the register of
 * attested names. The shared core runs the checks every Aurèldían guard has,
 * deriving every inherited row from its row in the Áelendi lexicon, so a word
 * Áelendi took from Sinalë is checked through two tables. This module adds the
 * one check that is Élavendri's own:
 *
 * 1. **The reduced vowel.** `ë` stands only at the end of a word.
 *
 * The letters table writes no long vowel, so a circumflex anywhere is a letter
 * the tongue does not have, and the core reports it.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import path from "node:path";
import { analyseTongue, plain, readTree, runGuard } from "./aureldian-core.mjs";

/** The language page. */
export const NOTE = "assets/content/Skills/Languages/Elavendri.md";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Elavendri_Lexicon.md";

/** The guard's configuration, read by the shared core. */
export const CONFIG = {
    label: "Élavendri",
    tongue: "elavendri",
    NOTE,
    LEXICON,
    daughter: true,
    loanPrefixes: ["vylari:"],
    scope: {
        paths: ["Regions/Ankaris/Aureldia/Elavendre/", "Affiliations/Organizations/Elavendre/"],
        notes: ["Skills/Languages/Elavendri.md", "Lore/Cultures/_lavendri.md"],
        culture: "elavendriclt",
    },
    lists: ["## Male Given Names", "## Female Given Names", "## Clan Names"],
    extra: elavendriChecks,
};

/** Élavendri's own check, run by the shared core after its own. */
export function elavendriChecks({ rule, lexFinding }) {
    for (const word of rule.words) {
        const form = plain(word.form).replace(/-$/, "");
        if (/ë(?!$)/u.test(form))
            lexFinding(
                word.at,
                "error",
                `\`${word.written}\` writes "ë" before the end of the word, where the reduced vowel never stands`,
            );
    }
    return [];
}

export { analyseTongue, readTree };

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(CONFIG);
