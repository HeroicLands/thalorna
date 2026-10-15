/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Vylari language, ancient and imperial.
 *
 * `Lore/Vylari_Lexicon.md` states the tongue as tables: the imperial letters
 * and the ancient ones, the word edges and clusters, the stress rule, the
 * ordered changes that turn an ancient form into an imperial one, the ending
 * tables of the noun classes, the suffixes and name endings, one word table
 * per field with an `Ancient` column beside the imperial `Form`, the shared
 * roots every daughter tongue inherits, and the register of attested names.
 * `Skills/Languages/Vylari.md` carries the grammar as paradigm tables and the
 * name lists. The shared core runs the checks every Aurèldían guard has; this
 * module adds the three that are Vylari's own:
 *
 * 1. **The ancient forms.** Every `Ancient` cell is spelled with the letters
 *    of `### Ancient letters`.
 * 2. **Paradigms regenerate.** A table on the language page whose first header
 *    cell reads `<form>, class <name>` is a paradigm of that model noun, and
 *    every cell of it is the model's stem and the ending the lexicon's
 *    `### Class <name> endings` table gives for that case and number. The stem
 *    is the model's form with its nominative singular ending taken off.
 * 3. **Shared roots.** In `## Shared roots`, every `Ancient` cell is the
 *    ancient form of a lexicon row and the `Imperial` cell is that row's form;
 *    every daughter cell recomputes from the ancient form through that
 *    daughter's own `### Sound changes` table, read from the lexicon the
 *    `### Daughters` table names for it, and is a row of that lexicon. A
 *    daughter whose `Takes` cell names a case starts from the ancient form in
 *    that case, by the ending tables; a daughter whose `Through` cell names
 *    another daughter starts from that daughter's reflex. A daughter whose
 *    lexicon does not exist is one warning.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import path from "node:path";
import {
    analyseTongue,
    compareForms,
    finding,
    lineColumn,
    plain,
    readTree,
    rows,
    runGuard,
    section,
    sections,
    soundProblems,
    ticked,
} from "./aureldian-core.mjs";
import { derive } from "./sound-change.mjs";

/** The language page. */
export const NOTE = "assets/content/Skills/Languages/Vylari.md";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Vylari_Lexicon.md";

/**
 * The source language: the Roman tongue. The collision check reads it for this guard's notes; the
 * guard itself compares no word list.
 */
export const SOURCES = ["latin"];

/** The guard's configuration, read by the shared core. */
export const CONFIG = {
    label: "Vylari",
    tongue: "vylari",
    NOTE,
    LEXICON,
    daughter: false,
    scope: {
        paths: [
            "Regions/Ankaris/Midhalion/Vylaria/",
            "Affiliations/Organizations/Vylarian/",
            "Skills/Scripts/Semaron.md",
            "Skills/Scripts/Tharavarkon.md",
        ],
        notes: ["Lore/Cultures/Vylarian.md", "Skills/Languages/Vylari.md"],
        culture: "vylarianclt",
    },
    lists: ["## Male Given Names", "## Female Given Names", "## Clan Names"],
    extra: vylariChecks,
};

/** A letter table read as a bare inventory, for checking spelling alone. */
function inventoryOf(lex, heading) {
    const found = section(lex, heading);
    if (!found) return null;
    const consonants = new Map();
    const shortVowels = new Set();
    const longVowels = new Set();
    const diphthongs = new Set();
    for (const { cells } of rows(found.body)) {
        const kind = (cells[1] ?? "").toLowerCase();
        for (const letter of ticked(cells[0]).map(plain)) {
            if (kind.startsWith("diphthong")) diphthongs.add(letter);
            else if (kind.startsWith("long vowel")) longVowels.add(letter);
            else if (kind.startsWith("short vowel")) shortVowels.add(letter);
            else if (kind.startsWith("consonant")) consonants.set(letter, { loanOnly: false });
        }
    }
    const anything = { has: () => true };
    return {
        consonants,
        shortVowels,
        longVowels,
        nasalVowels: new Set(),
        stressedVowels: new Set(),
        diphthongs,
        onsets: anything,
        finals: anything,
        maxRun: Number.POSITIVE_INFINITY,
    };
}

/** The ending tables of the lexicon: class name → case → {singular, dual, plural}. */
export function endingTables(lex) {
    const out = new Map();
    for (const match of lex.matchAll(/^### Class (.+) endings$/gm)) {
        const found = section(lex, match[0]);
        const cases = new Map();
        for (const { named, cells } of rows(found.body)) {
            const label = plain(named.case ?? cells[0]).trim();
            const numbers = {};
            for (const [key, value] of Object.entries(named)) {
                if (key === "case") continue;
                const [ending] = ticked(value);
                numbers[key] = ending === undefined ? null : plain(ending).replace(/^-/, "");
            }
            cases.set(label, numbers);
        }
        out.set(plain(match[1]).trim(), cases);
    }
    return out;
}

/** The ending table each word class of the lexicon declines by. */
export const CLASS_TABLES = {
    "n I f": "i",
    "n I m": "i",
    "n II m": "ii masculine",
    "n II f": "ii masculine",
    "n II n": "ii neuter",
    "n III m": "iii",
    "n III f": "iii",
    "n III n": "iii neuter",
    "n IV m": "iv",
    "n V f": "v",
    "n hal": "hallowed",
    adj: "ii masculine",
    "adj III": "iii",
};

/**
 * An ancient form in another case of the singular: the nominative ending taken
 * off and the case's ending put on, by the ending table of the word's class. A
 * word of a class that does not decline, or a form that does not end on its
 * class's nominative, is returned as it is.
 *
 * @param {string} ancient - The ancient nominative.
 * @param {string} cls - The lexicon class, such as `n I f`.
 * @param {string} kase - The case, such as `accusative`.
 * @param {ReturnType<typeof endingTables>} endings
 */
export function caseForm(ancient, cls, kase, endings) {
    const table = endings.get(CLASS_TABLES[cls] ?? "");
    const nominative = table?.get("nominative")?.singular;
    const wanted = table?.get(kase)?.singular;
    if (nominative === undefined || wanted === undefined || wanted === null) return ancient;
    const form = plain(ancient);
    if (!form.endsWith(nominative)) return ancient;
    return form.slice(0, form.length - nominative.length) + wanted;
}

/**
 * The paradigm tables of the language page: each has a first header cell
 * `<form>, class <name>`.
 */
export function paradigms(note) {
    const out = [];
    const lines = note.split("\n");
    let at = 0;
    for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        const here = at;
        at += line.length + 1;
        const head = line.match(/^\|\s*\*?\*?([^|*]+?)\*?\*?,\s*class\s+([^|]+?)\s*\|/u);
        if (!head || !lines[i + 1] || !/^\|\s*:?-+/.test(lines[i + 1])) continue;
        let end = i;
        while (end < lines.length && lines[end].trim().startsWith("|")) end += 1;
        const table = lines.slice(i, end).join("\n");
        out.push({
            model: plain(head[1].replace(/_/g, "")).trim(),
            cls: plain(head[2]).trim(),
            rows: rows(table, here),
            at: here,
        });
        i = end - 1;
    }
    return out;
}

/** Vylari's own checks, run by the shared core after its own. */
export function vylariChecks({ rule, lex, note, load, lexFinding }) {
    const findings = [];
    const noteFinding = (offset, severity, message) => {
        const { line, column } = lineColumn(note, offset);
        findings.push(finding(NOTE, line, column, severity, message));
    };

    // 1. The ancient forms are spelled with the ancient letters.
    const ancient = inventoryOf(lex, "### Ancient letters");
    if (!ancient)
        findings.push(
            finding(
                LEXICON,
                null,
                null,
                "error",
                'the lexicon states no "### Ancient letters" table',
            ),
        );
    else
        for (const word of rule.words)
            for (const form of word.ancient)
                for (const problem of soundProblems(form, ancient, { label: "ancient Vylari" }))
                    lexFinding(word.at, "error", `\`*${form}\` ${problem}`);

    // 2. Paradigms regenerate from the ending tables.
    const endings = endingTables(lex);
    for (const paradigm of paradigms(note)) {
        const table = endings.get(paradigm.cls);
        if (!table) {
            noteFinding(
                paradigm.at,
                "error",
                `the paradigm of \`${paradigm.model}\` names class "${paradigm.cls}", and the lexicon has no "### Class ${paradigm.cls} endings" table`,
            );
            continue;
        }
        const nominative = table.get("nominative")?.singular ?? "";
        if (!paradigm.model.endsWith(nominative)) {
            noteFinding(
                paradigm.at,
                "error",
                `\`${paradigm.model}\` does not end on the nominative singular "-${nominative}" of class ${paradigm.cls}`,
            );
            continue;
        }
        const stem = paradigm.model.slice(0, paradigm.model.length - nominative.length);
        for (const row of paradigm.rows) {
            const label = plain(row.cells[0]).trim();
            const expected = table.get(label);
            if (!expected) {
                noteFinding(
                    row.at,
                    "error",
                    `the paradigm of \`${paradigm.model}\` has a row "${row.cells[0]}" the ending table does not`,
                );
                continue;
            }
            for (const [number, ending] of Object.entries(expected)) {
                const cell = row.named[number];
                if (cell === undefined) continue;
                const [written] = ticked(cell);
                const form = plain(written ?? cell.replace(/[_*]/g, "")).trim();
                if (ending === null) {
                    if (form && form !== "—")
                        noteFinding(
                            row.at,
                            "error",
                            `\`${paradigm.model}\` has a ${label} ${number} and the ending table gives none`,
                        );
                    continue;
                }
                const made = stem + ending;
                if (form !== made)
                    noteFinding(
                        row.at,
                        "error",
                        `the ${label} ${number} of \`${paradigm.model}\` is "${form}", and the ending table gives "${made}"`,
                    );
            }
        }
    }

    // 3. Shared roots.
    const daughtersSection = section(lex, "### Daughters");
    const daughters = new Map();
    if (daughtersSection)
        for (const { cells, named } of rows(daughtersSection.body)) {
            const [address] = ticked(cells[1]);
            const takes = plain(named.takes ?? "").match(
                /nominative|vocative|accusative|genitive|dative|ablative|locative/,
            )?.[0];
            const through = plain(named.through ?? "").trim();
            if (cells[0] && address)
                daughters.set(plain(cells[0]).trim(), {
                    address,
                    label: cells[0].trim(),
                    takes: takes ?? "nominative",
                    through: through && through !== "—" ? through : null,
                });
        }
    const shared = section(lex, "## Shared roots");
    if (!shared)
        findings.push(
            finding(
                LEXICON,
                null,
                null,
                "warning",
                'the lexicon states no "## Shared roots" table',
            ),
        );
    else {
        const missing = new Set();
        const byAncient = new Map();
        for (const word of rule.words) for (const form of word.ancient) byAncient.set(form, word);
        const digraphs = [...(rule.ancient?.consonants ?? rule.consonants.keys())].filter(
            (c) => c.length > 1,
        );
        const diphthongs = [...(rule.ancient?.diphthongs ?? rule.diphthongs)];
        const cognateRows = rows(shared.body, shared.at).filter(
            (r) => "ancient" in r.named && "imperial" in r.named,
        );
        for (const row of cognateRows) {
            const [ancientForm] = ticked(row.named.ancient).map((f) => plain(f.replace(/^\*/, "")));
            const [imperial] = ticked(row.named.imperial).map(plain);
            const word = ancientForm ? byAncient.get(ancientForm) : null;
            if (!word) {
                lexFinding(
                    row.at,
                    "error",
                    `the shared root \`*${ancientForm ?? row.named.ancient}\` is the ancient form of no lexicon row`,
                );
                continue;
            }
            if (imperial && imperial !== word.form)
                lexFinding(
                    row.at,
                    "error",
                    `the shared root \`*${ancientForm}\` gives the imperial form "${imperial}", and the lexicon row gives "${word.form}"`,
                );
            /** The reflex of the row in a daughter, through any sister it comes by; null when unreadable. */
            const reflexIn = (key) => {
                const { address, label: daughter, takes, through } = daughters.get(key);
                const other = load(address);
                if (!other) {
                    missing.add(`${daughter} (${address})`);
                    return null;
                }
                const steps = other.rule.changes.get("### Sound changes");
                if (!steps) {
                    missing.add(`${daughter} (${address}, which has no "### Sound changes" table)`);
                    return null;
                }
                if (through && daughters.has(through)) {
                    const sister = reflexIn(through);
                    const by = load(daughters.get(through).address);
                    if (sister === null || !by) return null;
                    return derive(sister, steps, {
                        stress: by.rule.stress,
                        digraphs: [...by.rule.consonants.keys()].filter((c) => c.length > 1),
                        diphthongs: [...by.rule.diphthongs],
                    }).form;
                }
                const start = caseForm(ancientForm, word.cls, takes, endings);
                return derive(start, steps, { stress: rule.stress, digraphs, diphthongs }).form;
            };
            for (const [key, { address, label: daughter }] of daughters) {
                const cell = row.named[key];
                if (cell === undefined) continue;
                const [written] = ticked(cell);
                if (!written || cell.trim() === "—") continue;
                const other = load(address);
                const form = reflexIn(key);
                if (form === null) continue;
                const how = compareForms(written.replace(/-$/, ""), form.replace(/-$/, ""));
                if (how === "letters")
                    lexFinding(
                        row.at,
                        "error",
                        `the ${daughter} reflex of \`*${ancientForm}\` is written "${written}", and the ${daughter} changes give "${form}"`,
                    );
                else if (how === "marks")
                    lexFinding(
                        row.at,
                        "warning",
                        `the ${daughter} reflex of \`*${ancientForm}\` is written "${written}", and the ${daughter} changes give "${form}"`,
                    );
                const target = plain(written);
                if (
                    !other.rule.words.some(
                        (w) =>
                            w.form === target ||
                            w.form === `${target}-` ||
                            w.form.replace(/-$/, "") === target.replace(/-$/, ""),
                    )
                )
                    lexFinding(
                        row.at,
                        "warning",
                        `the ${daughter} reflex "${written}" of \`*${ancientForm}\` is not a row of the ${daughter} lexicon`,
                    );
            }
        }
        for (const one of missing)
            findings.push(
                finding(
                    LEXICON,
                    null,
                    null,
                    "warning",
                    `the ${one} lexicon cannot be read, so its column of the shared roots is not checked`,
                ),
            );
    }
    return findings;
}

/** Every paradigm heading the page carries, for the test to prove the reader sees them. */
export function paradigmModels(note) {
    return paradigms(note).map((p) => `${p.model}, class ${p.cls}`);
}

export { analyseTongue, readTree, sections, path };

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(CONFIG);
