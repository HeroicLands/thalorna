/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Áelendi language.
 *
 * `Lore/Aelendi_Lexicon.md` states the tongue as tables: its letters, with `p`
 * marked as a letter only a loan carries; its word edges, clusters and stress;
 * the ordered changes that make an Áelendi word of an ancient Vylari one; the
 * table that adapts a Sinalë word to Áelendi mouths; the suffixes; one word
 * table per field, each row naming its source; the elements the names are
 * built from; and the register of attested names. The shared core runs the
 * checks every Aurèldían guard has, deriving every inherited row from the
 * ancient form in the Vylari lexicon and every loan from its row in the Sinalë
 * lexicon. This module adds what is Áelendi's own:
 *
 * 1. **Kept words.** A row whose source is `kept:` names an ancient form the
 *    Vylari lexicon does not carry, because imperial Vylari lost the word. The
 *    form is spelled with the ancient letters, and the Áelendi word is exactly
 *    what the sound changes make of it.
 * 2. **The gender of a loan.** A Sinalë noun takes its gender from its last
 *    sound: feminine when it closes on `-a`, neuter on any other vowel,
 *    masculine on a consonant.
 * 3. **Name elements.** Every element in `### Name elements` is spelled with
 *    Áelendi letters, and an element that names its word names a lexicon row
 *    beginning with it.
 *
 * `p` stands only in a Sinalë loan, or in a word built from one, whose parts
 * are rows of the lexicon and so carry it only from a loan; the core holds every
 * other row to that.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import path from "node:path";
import {
    analyseTongue,
    compareForms,
    demark,
    parseSource,
    plain,
    readTree,
    rows,
    runGuard,
    section,
    soundProblems,
    ticked,
} from "./aureldian-core.mjs";
import { derive } from "./sound-change.mjs";

/** The language page. */
export const NOTE = "assets/content/Skills/Languages/Aelendi.md";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Aelendi_Lexicon.md";

/** The Vylari lexicon, which holds the ancient forms. */
export const ANCESTOR = "doc-vylarilexcn";

/** The guard's configuration, read by the shared core. */
export const CONFIG = {
    label: "Áelendi",
    tongue: "aelendi",
    NOTE,
    LEXICON,
    daughter: true,
    loanPrefixes: ["sinale:", "built"],
    scope: {
        paths: ["Lore/Spirits/Aelendan/"],
        notes: [
            "Skills/Languages/Aelendi.md",
            "Skills/Scripts/Thuravardh.md",
            "Regions/Ankaris/Aureldia/Elavendre/Aelendan_People.md",
            "Regions/Ankaris/Aureldia/Elavendre/Sorvanda/Aelendan_Tribal_Lands.md",
            "Regions/Ankaris/Aureldia/Elavendre/Sorvanda/Eshalosha_Lodge.md",
            "Regions/Ankaris/Aureldia/Elavendre/Sorvanda/Drenavar_Spine.md",
            "Regions/Ankaris/Aureldia/Elavendre/Sorvanda/The_Long_Stair.md",
            "Regions/Ankaris/Aureldia/Elavendre/Sorvanda/The_Owl_Hollow.md",
            "Affiliations/Organizations/Elavendre/Aelendan_Wardens.md",
        ],
    },
    lists: ["## Male Given Names", "## Female Given Names", "## Clan Names"],
    extra: aelendiChecks,
};

/** The gender a Sinalë loan takes from its last sound. */
export function loanGender(form) {
    const last = demark(form).slice(-1);
    if (last === "a") return "f";
    return /[aeiouy]/.test(last) ? "n" : "m";
}

/** Áelendi's own checks, run by the shared core after its own. */
export function aelendiChecks({ rule, lex, load, lexFinding }) {
    const findings = [];
    const ancestor = load(ANCESTOR);
    const steps = rule.changes.get("### Sound changes");

    for (const word of rule.words) {
        const source = parseSource(word.source);
        const label = `\`${word.written}\``;

        // 1. Kept words.
        if (source.prefix === "kept:") {
            const ancient = plain(source.etymon ?? "").replace(/^\*/, "");
            if (!ancient) {
                lexFinding(word.at, "error", `${label} is kept and names no ancient form`);
                continue;
            }
            if (ancestor?.rule.ancient) {
                const letters = {
                    ...ancestor.rule,
                    consonants: new Map(
                        [...ancestor.rule.ancient.consonants].map((c) => [c, { loanOnly: false }]),
                    ),
                    diphthongs: ancestor.rule.ancient.diphthongs,
                    onsets: { has: () => true },
                    finals: { has: () => true },
                    maxRun: Number.POSITIVE_INFINITY,
                };
                for (const problem of soundProblems(ancient, letters, {
                    label: "ancient Vylari",
                }))
                    lexFinding(
                        word.at,
                        "error",
                        `${label} is kept from \`*${ancient}\`, which ${problem}`,
                    );
                if (ancestor.rule.words.some((w) => w.ancient.includes(ancient)))
                    lexFinding(
                        word.at,
                        "error",
                        `${label} is kept from \`*${ancient}\`, which the Vylari lexicon carries; its source is \`*${ancient}\``,
                    );
            }
            if (steps) {
                const digraphs = [...(ancestor?.rule.ancient?.consonants ?? [])].filter(
                    (c) => c.length > 1,
                );
                const diphthongs = [...(ancestor?.rule.ancient?.diphthongs ?? [])];
                const { form } = derive(ancient, steps, {
                    stress: ancestor?.rule.stress ?? "by weight",
                    ...(digraphs.length ? { digraphs } : {}),
                    ...(diphthongs.length ? { diphthongs } : {}),
                });
                const how = compareForms(word.form.replace(/-$/, ""), form);
                if (how === "letters")
                    lexFinding(
                        word.at,
                        "error",
                        `${label} is not what the changes give ("${form}")`,
                    );
                else if (how === "marks")
                    lexFinding(
                        word.at,
                        "warning",
                        `${label} differs in its marks from what the changes give ("${form}")`,
                    );
            }
        }

        // 2. The gender of a loan.
        if (source.prefix === "sinale:") {
            const gender = word.cls.match(/^n ([mfn])$/)?.[1];
            if (gender && gender !== loanGender(word.form))
                lexFinding(
                    word.at,
                    "error",
                    `${label} is a loan of the class "${word.cls}", and its last sound makes it "n ${loanGender(word.form)}"`,
                );
        }
    }

    // 3. Name elements.
    const elements = section(lex, "### Name elements");
    if (!elements) lexFinding(null, "error", 'the lexicon states no "### Name elements" table');
    else
        for (const { named, cells, at } of rows(elements.body, elements.at)) {
            const [element] = ticked(named.element ?? cells[0]).map(plain);
            if (!element) continue;
            for (const problem of soundProblems(element, rule, { bound: true, label: "Áelendi" }))
                lexFinding(at, "error", `the name element \`${element}\` ${problem}`);
            const [word] = ticked(named.word ?? "").map(plain);
            if (!word) continue;
            const known = rule.words.find(
                (w) => w.form.replace(/-$/, "") === word.replace(/-$/, ""),
            );
            if (!known)
                lexFinding(
                    at,
                    "error",
                    `the name element \`${element}\` names \`${word}\`, which is not a row of the lexicon`,
                );
            else if (!demark(known.form).startsWith(demark(element)))
                lexFinding(
                    at,
                    "error",
                    `the name element \`${element}\` does not begin \`${word}\``,
                );
        }
    return findings;
}

export { analyseTongue, readTree };

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(CONFIG);
