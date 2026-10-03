/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Khelâthi lexicon sweep.
 *
 * The sweep retires an Earth vocabulary from one culture and replaces it. Its
 * completeness is the thing no reader can check by eye — 441 notes, thousands
 * of occurrences, and a single survivor is invisible in the diff. So the check
 * derives the whole question from one table and answers it as a red test.
 *
 * **`utils/khelathi-mapping.yaml` is the single source.** Nothing here restates
 * a pair, because a second copy drifts from the first the moment either is
 * edited — which is exactly the failure this guard exists to prevent, moved one
 * level up.
 *
 * Four predicates:
 *
 * 1. **No retired token survives**, outside a `renamedFrom` value, which is the
 *    one place a moved address is *supposed* to name its old self.
 * 2. **Every replacement satisfies the coinage rules** — it carries one of
 *    `l g z th q` with the `g` audible, and it ends in a vowel or in `n t s r`.
 * 3. **The rule-3 letters are distributed**, so no single letter carries more
 *    than 35% of the replacements and each carries at least 10%.
 * 4. **No replacement collides** with a different retired token's replacement,
 *    which would merge two senses the corpus keeps apart.
 *
 * A guard proves completeness, never accuracy. Whether `Qeztu` is the right
 * name for a war god is a judgement; whether it survived the sweep everywhere
 * is arithmetic, and only the second is checked here.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/**
 * Where authored words live.
 *
 * A changeset is published prose: it reaches a reader through the changelog
 * exactly as a note reaches one through a page, so the same vocabulary holds
 * in both. Retired words survived a sweep of the notes by sitting in a
 * changeset nobody was scanning.
 */
const SCANNED_DIRS = ["assets/content", ".changeset"];

/**
 * What makes a note this sweep's business.
 *
 * The lexicon is retired from one culture, not from the world. A Vedyari sword
 * named `Pata` and a Khelâthi house named for `Ptā'h` share four letters and
 * nothing else, so the scan asks first whether a note is Khelâthi at all — by
 * the culture it declares, by the pack it compiles into, or by naming the
 * people in its own text.
 *
 * **The test names the people both ways, old and new.** A note swept early would
 * otherwise fall out of scope the moment its last `Kheperi` became `Khelâthi`,
 * taking its unswept ranks and places with it — the sweep would report itself
 * finished by shrinking what it was willing to look at.
 */
const IN_SCOPE_TEXT =
    /(?<![\p{L}])(Kheperi|Kheperan|Kheperian|Kemet[ií]an|Ta'Kheperu|khepericlt|takheperu|Khelâthi|Khelâthu|Aû'Khelâthu|khelathiclt|khelathu)(?![\p{L}])/u;

/** @param {string} text @returns {boolean} */
function inScope(text) {
    return IN_SCOPE_TEXT.test(text);
}

/** The table every packet and this guard read from. */
const MAPPING_FILE = "utils/lexicons/khelathi-mapping.yaml";

/** The letters a coined morpheme must carry at least one of. */
const RULE_THREE = ["l", "g", "z", "th", "q"];

/** What a word may end in. Rule 4, which 58 of 63 place names already keep. */
const ENDINGS = /[aeiouâêîôûáéíóúäëïöü]$|[ntsr]$/i;

/** Share of replacements one rule-3 letter may carry, and must carry. */
const CAP = 0.35;
const FLOOR = 0.1;

/**
 * Groups whose rows are bound morphemes rather than words.
 *
 * Rule 4 governs a *word*. A place element and a name element never stand
 * alone — `Gar-` opens a compound and `zab` sits inside one — and the word they
 * build does comply. Holding a morpheme to a word's rule would refuse the
 * table's own vocabulary.
 */
const MORPHEME_GROUPS = new Set(["placeElements", "nameElements"]);

/**
 * Every markdown file under a directory.
 * @param {string} dir - Where to start.
 * @returns {string[]} Absolute-ish paths, in walk order.
 */
function markdownFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/**
 * Read the mapping as one flat list of pairs.
 * @returns {{groups: Record<string, object[]>, pairs: object[]}} The table.
 */
function readMapping() {
    const parsed = YAML.parse(fs.readFileSync(MAPPING_FILE, "utf8"));
    const groups = {};
    const pairs = [];
    for (const [group, rows] of Object.entries(parsed)) {
        if (group === "keep" || !Array.isArray(rows)) continue;
        groups[group] = rows;
        for (const row of rows) {
            if (row?.retired && row?.replacement) pairs.push({ ...row, group });
        }
    }
    return { groups, pairs };
}

/** A finding, in the shape every diagnostic in this repository takes. */
function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * Whether a coined form carries an audible rule-3 letter.
 *
 * `gh` does not count: an English reader hears it as silent or `/f/`, so
 * `Lughtu` reads "Luff-too" and passes a naive membership test while failing
 * the ear. `g` counts only before a vowel.
 *
 * @param {string} word - The replacement.
 * @returns {string[]} Which letters it carries.
 */
function ruleThreeLetters(word) {
    const lower = word.toLowerCase();
    const carried = [];
    if (/l/.test(lower)) carried.push("l");
    if (/g(?![h])/.test(lower) && /g[aeiouâêîôûáéíóú]/.test(lower)) carried.push("g");
    if (/z/.test(lower)) carried.push("z");
    if (/th/.test(lower)) carried.push("th");
    if (/q/.test(lower)) carried.push("q");
    return carried;
}

/** The last word of a replacement, which is the one rule 4 governs. */
function finalWord(replacement) {
    const words = replacement.split(/[\s'-]+/).filter(Boolean);
    return words[words.length - 1] ?? replacement;
}

/**
 * Check the table itself, before any note is read.
 * @param {object[]} pairs - Every mapping row.
 * @returns {string[]} Findings.
 */
export function checkMapping(pairs) {
    const out = [];
    const tally = Object.fromEntries(RULE_THREE.map((letter) => [letter, 0]));
    const seen = new Map();
    let sole = 0;

    for (const pair of pairs) {
        const { retired, replacement, group } = pair;
        const where = `${MAPPING_FILE}: ${group}: ${retired} → ${replacement}`;

        const letters = ruleThreeLetters(replacement);
        if (letters.length === 0) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} carries none of ${RULE_THREE.join(", ")} audibly; ` +
                        "a `g` counts only before a vowel",
                ),
            );
        }
        // Rule 3 caps how many morphemes *lean on* a letter, not how many
        // happen to contain one. `Lem'Nelgir` carries `l` and `g` and depends
        // on neither, so it counts toward nothing; `Wazu` has only `z` and
        // counts there. Containment would report that `l` is everywhere, which
        // is true of English and says nothing about the coinage.
        if (letters.length === 1) tally[letters[0]] += 1;
        sole += letters.length === 1 ? 1 : 0;

        // Rule 2 keeps a replacement's shape, so a token whose original broke
        // rule 4 may break it in the same place. `Sobek` ended in `k` and
        // `Tjelsuk` does too, by construction rather than by oversight.
        const last = finalWord(replacement);
        const inherited = !ENDINGS.test(finalWord(retired));
        const bound = MORPHEME_GROUPS.has(group) || retired.includes("-");
        if (!ENDINGS.test(last) && !inherited && !bound) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} ends in "${last.slice(-1)}"; a word ends in a vowel or in n, t, s, r`,
                ),
            );
        }

        // A deliberate merge says so. Five spellings of one demonym, or two
        // words the design folds together, are not a collision.
        const collision = seen.get(replacement);
        if (collision && collision !== retired && !pair.merges) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${replacement} replaces both ${collision} and ${retired}, ` +
                        "merging two senses the corpus keeps apart",
                ),
            );
        }
        seen.set(replacement, retired);
    }

    // Measured against the replacements that lean on exactly one letter, which
    // is the population the rule is about.
    const total = sole || pairs.length;
    for (const letter of RULE_THREE) {
        const share = tally[letter] / total;
        if (share > CAP) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `"${letter}" is the only rule-3 letter in ${tally[letter]} of ` +
                        `${total} single-letter replacements (${Math.round(share * 100)}%), ` +
                        `past the ${CAP * 100}% cap`,
                ),
            );
        }
        if (share < FLOOR) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `"${letter}" is the only rule-3 letter in ${tally[letter]} of ` +
                        `${total} single-letter replacements (${Math.round(share * 100)}%), ` +
                        `under the ${FLOOR * 100}% floor`,
                ),
            );
        }
    }
    return out;
}

/**
 * Find every surviving retired token in the tree.
 *
 * Matched whole-word and case-sensitively, because `Ra`, `Set`, `Min`, `Sau`,
 * `Imet`, `Ipu`, `Wab` and `Sile` are all substrings of ordinary words. A
 * `renamedFrom` line is skipped, since that is the one place a moved address is
 * meant to name its old self.
 *
 * @param {object[]} pairs - Every mapping row.
 * @param {string[]} files - The notes to read.
 * @returns {string[]} Findings.
 */
export function checkTree(pairs, files, counts = new Map()) {
    const out = [];
    // A generator builds names; it is not a token to hunt in prose. `sat` and
    // `ren` are English words, and a scan that flagged them would report a
    // Haradian note's "sat uncomfortably" as a surviving Khelâthi morpheme.
    const patterns = pairs
        .filter((pair) => !pair.generator)
        .map((pair) => ({
            ...pair,
            // A leading or trailing hyphen marks an affix, which needs no boundary
            // on the joined side.
            rx: new RegExp(
                (pair.retired.startsWith("-") ? "" : "(?<![\\p{L}\\p{M}])") +
                    pair.retired.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
                    (pair.retired.endsWith("-") ? "" : "(?![\\p{L}\\p{M}])"),
                "gu",
            ),
        }));

    for (const file of files) {
        const source = fs.readFileSync(file, "utf8");
        if (!inScope(source)) continue;
        const lines = source.split("\n");
        lines.forEach((text, index) => {
            if (/^\s*renamedFrom:/.test(text)) return;
            for (const pattern of patterns) {
                pattern.rx.lastIndex = 0;
                let match;
                while ((match = pattern.rx.exec(text)) !== null) {
                    out.push(
                        finding(
                            file,
                            index + 1,
                            match.index + 1,
                            "error",
                            `retired token "${pattern.retired}" survives; ` +
                                `the ${pattern.group} table replaces it with "${pattern.replacement}"`,
                        ),
                    );
                    counts.set(pattern.layer, (counts.get(pattern.layer) ?? 0) + 1);
                }
            }
        });
    }
    return out;
}

/** Run both halves and report. @returns {number} The exit code. */
function main() {
    if (!fs.existsSync(MAPPING_FILE)) {
        console.error(`${MAPPING_FILE}: error: the lexicon mapping is absent`);
        return 1;
    }
    const { pairs } = readMapping();
    if (pairs.length === 0) {
        console.error(`${MAPPING_FILE}: error: the mapping declares no pairs`);
        return 1;
    }

    const byLayer = new Map();
    const out = [
        ...checkMapping(pairs),
        ...checkTree(pairs, SCANNED_DIRS.flatMap(markdownFiles), byLayer),
    ];
    for (const line of out) console.error(line);

    // What each packet still owes, so progress through the sweep is a number
    // rather than an impression.
    if (byLayer.size) {
        const layers = [...byLayer.entries()].sort((a, b) => a[0] - b[0]);
        console.error(
            "remaining by packet: " + layers.map(([layer, n]) => `${layer}=${n}`).join("  "),
        );
    }

    const errors = out.filter((line) => line.includes(": error: ")).length;
    if (errors === 0) {
        console.log(
            `The lexicon holds: ${pairs.length} retired token(s), none surviving in Khelâthi material.`,
        );
        return 0;
    }
    console.error(`${errors} error(s) across ${pairs.length} mapped token(s).`);
    return 1;
}

process.exit(main());
