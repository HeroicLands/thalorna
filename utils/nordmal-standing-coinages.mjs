/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { decompose, shape } from "./lexicons/nordmal-lexicon.mjs";

/** Validate body-specific standing mappings against authored affiliations and the language.
 * @param {object} section - The concordance's standingCoinages section.
 * @param {object} rule - The published Nordmal lexicon.
 * @param {function(string): object} readNote - Read an authored note's frontmatter.
 * @returns {string[]} Errors ready for the concordance diagnostic prefix.
 */
export function checkStandingCoinages(section, rule, readNote) {
    if (!section) return [];
    const errors = [];
    const placed = new Set();
    const positions = new Set();
    const checkWord = (title) => {
        if (typeof title !== "string" || !title) return ["title is required"];
        if (!decompose(title.toLowerCase(), rule, rule.compoundEnds))
            return [`${title} is not a compound of published elements`];
        return shape(title, rule, "compound");
    };
    if (!Array.isArray(section.rungs) || !Array.isArray(section.deliberatelyUnused))
        return ["standingCoinages requires rungs and deliberatelyUnused arrays"];
    for (const row of section.rungs) {
        const label = `${row.path}:${row.level}`;
        errors.push(...checkWord(row.title).map((error) => `${label}: ${error}`));
        placed.add(row.title);
        if (!Number.isInteger(row.level) || !row.oldTitle)
            errors.push(`${label}: an integer level and oldTitle are required`);
        if (positions.has(label)) errors.push(`${label}: duplicate standing mapping`);
        positions.add(label);
        if (
            typeof row.path !== "string" ||
            !row.path.startsWith("assets/content/") ||
            row.path.includes("..")
        ) {
            errors.push(`${label}: path must name an authored content note`);
            continue;
        }
        try {
            const note = readNote(row.path);
            if (note.type !== "affiliation") errors.push(`${label}: body is not an affiliation`);
            const ranks =
                note.data?.governance?.ranks?.filter((rank) => rank.level === row.level) ?? [];
            if (ranks.length !== 1 || ranks[0].title !== row.title || !ranks[0].description?.trim())
                errors.push(`${label}: authored rung must match its title and carry a description`);
        } catch (error) {
            errors.push(`${label}: cannot read body: ${error.message}`);
        }
    }
    const unused = new Set();
    for (const row of section.deliberatelyUnused) {
        errors.push(...checkWord(row.title));
        if (placed.has(row.title) || unused.has(row.title))
            errors.push(`${row.title}: deliberately unused title is placed or duplicated`);
        unused.add(row.title);
        if (!row.reason?.trim() || !Array.isArray(row.elements) || !row.elements.length)
            errors.push(`${row.title}: unused title requires elements and a reason`);
    }
    return errors;
}
