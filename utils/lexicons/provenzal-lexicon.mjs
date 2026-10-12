/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Provenzal language.
 *
 * `Lore/Provenzal_Lexicon.md` states the tongue as tables: its letters, edges,
 * clusters and stress; the ordered changes that make a Provenzal word of an
 * ancient Vylari one; the tables that adapt a learned word from imperial
 * Vylari and a loan from Élavendri; the suffixes; one word table per field,
 * each row naming its source; and the register of attested names. The shared
 * core runs the checks every Aurèldían guard has. This module supplies what is
 * Provenzal's own:
 *
 * 1. **The accusative.** Provenzal inherits each word from its ancient
 *    accusative. The core starts an inherited row's changes from the
 *    accusative singular that the Vylari lexicon's ending tables give for the
 *    ancient row's class, not from the nominative the row cites.
 * 2. **No native `th-` or `dh-`.** The changes take the breath off `th` and
 *    `dh` at the start of a word, so an inherited row opening on either is an
 *    error; a loan may.
 * 3. **Worn words.** A row whose source is `worn:` names an ancient form that
 *    a row of the Vylari lexicon carries.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { analyseTongue, parseSource, plain, readTree, runGuard } from "./aureldian-core.mjs";
import { caseForm, endingTables, LEXICON as VYLARI_LEXICON } from "./vylari-lexicon.mjs";

/** The language page. */
export const NOTE = "assets/content/Skills/Languages/Provenzal.md";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Provenzal_Lexicon.md";

/** The Vylari lexicon, which holds the ancient forms. */
export const ANCESTOR = "doc-vylarilexcn";

let endingsCache = null;

/** The Vylari lexicon's ending tables, read once. */
function endings() {
    if (!endingsCache)
        endingsCache =
            fs.existsSync(VYLARI_LEXICON) ?
                endingTables(fs.readFileSync(VYLARI_LEXICON, "utf8"))
            :   new Map();
    return endingsCache;
}

/** The form an inherited row's changes start from: the ancient accusative. */
export function startForm(etymon, row, declared) {
    if (declared.prefix !== "*") return etymon;
    return caseForm(etymon, row.cls, "accusative", endings());
}

/** The guard's configuration, read by the shared core. */
export const CONFIG = {
    label: "Provenzal",
    tongue: "provenzal",
    NOTE,
    LEXICON,
    daughter: true,
    loanPrefixes: ["vylari:", "elavendri:", "built"],
    startForm,
    scope: {
        paths: ["Regions/Ankaris/Aureldia/Provenzia/"],
        notes: ["Skills/Languages/Provenzal.md", "Lore/Cultures/Provenzian.md"],
        culture: "provenzianclt",
    },
    lists: ["#### Male Names", "#### Female Names", "#### Clan Names"],
    extra: provenzalChecks,
};

/** Provenzal's own checks, run by the shared core after its own. */
export function provenzalChecks({ rule, load, lexFinding }) {
    const ancestor = load(ANCESTOR);
    for (const word of rule.words) {
        const source = parseSource(word.source);
        const label = `\`${word.written}\``;
        if (source.prefix === "*" && /^(th|dh)/.test(plain(word.form)))
            lexFinding(
                word.at,
                "error",
                `${label} is inherited and opens on "${plain(word.form).slice(0, 2)}", which only a loan from the north opens on`,
            );
        if (source.prefix === "worn:" && ancestor) {
            const ancient = plain(source.etymon ?? "").replace(/^\*/, "");
            if (!ancestor.rule.words.some((w) => w.ancient.includes(ancient)))
                lexFinding(
                    word.at,
                    "error",
                    `${label} is worn from \`*${ancient}\`, which no row of the Vylari lexicon carries`,
                );
        }
    }
    return [];
}

export { analyseTongue, readTree };

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(CONFIG);
