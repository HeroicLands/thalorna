/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Tarvéni language.
 *
 * `Lore/Tarveni_Lexicon.md` states the tongue as tables: its letters, edges,
 * clusters and stress; the ordered changes that make a Tarvéni word of an
 * ancient Vylari one; the tables for the learned words taken from imperial
 * Vylari and the loans from Provenzal; one word table per field, each row
 * naming its source; and the register of attested names. The shared core runs
 * the checks every Aurèldían guard has. This module adds what is Tarvéni's own:
 *
 * 1. **The old mountain speech.** A row whose source is `substrate` keeps that
 *    speech's shape: it holds no `f` and no `p`, opens on no `r` and on no
 *    pair of consonants, closes on at most one consonant, and sets at most two
 *    consonants between two vowels, `rr` and `ts` each counting as one.
 * 2. **Inherited words keep their own shape.** A row from any other source
 *    holds no `ts` and opens on no `rr`, the two marks of the old speech.
 * 3. **Worn words.** A row whose source is `worn:` names an ancient form that
 *    a row of the Vylari lexicon carries.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import path from "node:path";
import {
    analyseTongue,
    parseSource,
    plain,
    readTree,
    runGuard,
    sounds,
} from "./aureldian-core.mjs";

/** The language page. */
export const NOTE = "assets/content/Skills/Languages/Tarveni.md";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Tarveni_Lexicon.md";

/** The Vylari lexicon, which holds the ancient forms. */
export const ANCESTOR = "doc-vylarilexcn";

/** The guard's configuration, read by the shared core. */
export const CONFIG = {
    label: "Tarvéni",
    tongue: "tarveni",
    NOTE,
    LEXICON,
    daughter: true,
    loanPrefixes: ["vylari:", "provenzal:"],
    scope: {
        paths: ["Regions/Ankaris/Aureldia/Tarvena/"],
        notes: ["Skills/Languages/Tarveni.md", "Lore/Cultures/Tarv_nan.md"],
        culture: "tarvenanclt",
    },
    lists: ["## Male Given Names", "## Female Given Names", "## Clan Names"],
    extra: tarveniChecks,
};

/**
 * What a word of the old mountain speech breaks of that speech's shape, as messages.
 *
 * @param {string} word - A plain word.
 * @param {object} rule - The lexicon's rule, for cutting the word into sounds.
 */
export function substrateProblems(word, rule) {
    const out = [];
    const cut = sounds(plain(word), rule);
    for (const letter of ["f", "p"])
        if (cut.some((s) => s.sound === letter)) out.push(`holds "${letter}"`);
    if (cut[0]?.kind === "C" && /^r/.test(cut[0].sound)) out.push(`opens on "${cut[0].sound}"`);
    if (cut[0]?.kind === "C" && cut[1]?.kind === "C")
        out.push(`opens on "${cut[0].sound}${cut[1].sound}"`);
    let run = [];
    let leading = true;
    for (const s of cut) {
        if (s.kind === "C") {
            run.push(s.sound);
            continue;
        }
        if (!leading && run.length > 2) out.push(`sets "${run.join("")}" between two vowels`);
        run = [];
        leading = false;
    }
    if (run.length > 1) out.push(`closes on "${run.join("")}"`);
    return out;
}

/** Tarvéni's own checks, run by the shared core after its own. */
export function tarveniChecks({ rule, load, lexFinding }) {
    const ancestor = load(ANCESTOR);
    for (const word of rule.words) {
        const source = parseSource(word.source);
        const label = `\`${word.written}\``;
        const form = plain(word.form);
        if (source.prefix === "substrate") {
            for (const problem of substrateProblems(form, rule))
                lexFinding(
                    word.at,
                    "error",
                    `${label} is of the old mountain speech and ${problem}, which that speech never does`,
                );
            continue;
        }
        if (sounds(form, rule).some((s) => s.sound === "ts"))
            lexFinding(
                word.at,
                "error",
                `${label} holds "ts", which only the old mountain speech has`,
            );
        if (form.startsWith("rr"))
            lexFinding(
                word.at,
                "error",
                `${label} opens on "rr", which only the old mountain speech does`,
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
