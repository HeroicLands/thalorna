/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The invented-observer guard (`npm run lint:observer`).
 *
 * House prose stops at the fact. A clause that appends a hypothetical person who
 * notices, judges or corrects it is filler: "..., and a Nordman will tell you
 * ...", "...--and a clerk would notice ...", "..., and anyone who has seen one
 * knows ...", "..., and you will find ...". The remedy is to end the sentence at
 * the fact, or to make the consequence the subject.
 *
 * Three shapes are refused in note prose:
 *
 * - `, and a/an <person> will|would|can|could <perceive or react>`, also after a
 *   dash or a semicolon;
 * - `, and anyone who ... <perceives>`, with or without a modal;
 * - `, and you will|would|can|could find|notice|discover`.
 *
 * The verb list is narrow on purpose: "and a windstorm can bury a camp" and
 * "and a craftsperson can tell when a repair conceals damage" state a capacity
 * or a hazard and pass. A speaker's words inside quotation marks pass, because
 * the note attributes them. Frontmatter, code fences, `.verse` divs (verse is
 * not house prose) and the style guide that names the shape are not read.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and the
 * exit status is 1 when there is a finding.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CONTENT_DIR = "assets/content";

/** The opener of a verse div: `::: {.verse …}` or `:::verse {…}`. */
const VERSE_DIV = /^\s*:::\s*(?:\{\.verse(?:\s[^}]*)?\}|verse\s*\{[^}]*\})\s*$/;

/** The style guide quotes the shape in order to forbid it. */
const EXEMPT_FILES = new Set(["assets/content/README-gazeteer.md"]);

const MODAL =
    "(?:will|would|can|could)(?:\\s+(?:also|always|usually|soon|quickly|never|not|easily|still|generally|readily|immediately|simply|at\\s+once))?";

/** Verbs that perceive or react whatever follows them. */
const STRONG =
    "(?:say|notice|spot|recogni[sz]e|correct|object|point\\s+out|remark|distinguish|judge|detect|guess|laugh|wince|smile|frown|sneer|scoff|observe|make\\s+out|work\\s+out|mistake)";

/** What a plain verb must be followed by to count as perceiving something. */
const COMPLEMENT =
    "(?=\\s+(?:at\\b|in\\s+a\\b|by\\b|that\\b|why\\b|how\\b|what\\b|whether\\b|the\\s+difference|it\\b|him\\b|her\\b|them\\b|you\\b|me\\b|from\\b|apart\\b|straight\\b))";

/** Verbs that also name a plain capacity, so they count only with a perceived object. */
const WEAK = `(?:tell|see|hear|smell|find|know|read|identify)${COMPLEMENT}`;

/** Third-person verbs after `anyone who ...`. */
const THIRD = `(?:(?:notices|spots|recogni[sz]es|corrects|objects|remarks|distinguishes|detects|observes|judges|guesses)|(?:tells|sees|hears|smells|finds|knows|reads|identifies)${COMPLEMENT})`;

const SUBJECT =
    "(?:(?!(?:who|that|which|whose)\\b)[\\p{L}'’-]+\\s+){0,3}(?!(?:who|that|which|whose)\\b)[\\p{L}'’-]+";

const PERSON = `[,—–;]\\s?and\\s+(?:a|an)\\s+${SUBJECT}\\s+${MODAL}\\s+(?:${STRONG}|${WEAK})\\b`;
const ANYONE = `[,—–]\\s?and\\s+(?:anyone|anybody)\\s+(?:[\\p{L}'’-]+\\s+){0,8}?(?:${THIRD}|${MODAL}\\s+(?:${STRONG}|${WEAK}))\\b`;
const YOU = `[,—–]\\s?and\\s+you\\s+${MODAL}\\s+(?:find|notice|discover)\\b`;

const OBSERVER = new RegExp(`${PERSON}|${ANYONE}|${YOU}`, "giu");

/**
 * @param {string} line
 * @param {number} index
 * @returns {boolean} whether `index` falls inside a quotation on the line
 */
function inQuotation(line, index) {
    const before = line.slice(0, index);
    const straight = (before.match(/"/g) ?? []).length % 2 === 1;
    const curly = (before.match(/“/g) ?? []).length > (before.match(/”/g) ?? []).length;
    return straight || curly;
}

/**
 * @param {string} file path shown in the finding
 * @param {string} text the note
 * @returns {string[]} one finding per observer clause in the note's prose
 */
export function findObservers(file, text) {
    if (EXEMPT_FILES.has(file)) return [];
    const lines = text.split("\n");
    let i = 0;
    if (lines[0]?.trim() === "---") {
        i = lines.findIndex((l, j) => j > 0 && l.trim() === "---") + 1;
        if (i === 0) return [];
    }
    const findings = [];
    let fence = null;
    let inVerse = false;
    for (; i < lines.length; i++) {
        const line = lines[i];
        if (inVerse) {
            if (/^\s*:::\s*$/.test(line)) inVerse = false;
            continue;
        }
        if (!fence && VERSE_DIV.test(line)) {
            inVerse = true;
            continue;
        }
        const opener = line.match(/^\s*(`{3,}|~{3,})\s*(\w*)/);
        if (fence) {
            if (
                opener &&
                opener[1][0] === fence[0] &&
                opener[1].length >= fence.length &&
                !opener[2]
            )
                fence = null;
            continue;
        }
        if (opener) {
            fence = opener[1];
            continue;
        }
        for (const m of line.matchAll(OBSERVER)) {
            if (inQuotation(line, m.index)) continue;
            findings.push(
                `${file}:${i + 1}:${m.index + 1}: error: "${m[0].trim()}" appends an invented observer; stop at the fact or make the consequence the subject`,
            );
        }
    }
    return findings;
}

/**
 * @param {string} dir
 * @returns {string[]} every file beneath `dir`
 */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

/** @returns {string[]} every finding across the notes */
export function scan() {
    return walk(CONTENT_DIR)
        .filter((f) => f.endsWith(".md"))
        .flatMap((f) => findObservers(f, fs.readFileSync(f, "utf8")));
}

/** Prints the findings and the summary; returns the exit status. */
export function main() {
    const findings = scan();
    for (const f of findings) console.error(f);
    console.log(`observer-shape: ${findings.length} finding${findings.length === 1 ? "" : "s"}`);
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main();
}
