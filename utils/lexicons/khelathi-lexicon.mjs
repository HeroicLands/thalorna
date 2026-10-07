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
 * The guard over the Khelâthi lexicon.
 *
 * **Everything it checks, it reads off the language note.** The note publishes
 * the elements, the gods and their house-forms, the place-building morphemes and
 * the name lists; it also states the rules those forms obey. So the check and the
 * specification are one document, and a rule the note stops stating is a rule the
 * guard stops enforcing.
 *
 * Seven predicates:
 *
 * 1. **A word ends in a vowel or in `n`, `t`, `s`, `r`.** A prefix ending in `-`
 *    and a suffix opening with one are bound morphemes and close no word, so
 *    neither is held to it.
 * 2. **Every name element carries one of `l`, `g`, `z`, `th`, `q`**, and no one of
 *    the five carries more than its share. Membership is necessary; the spread is
 *    what keeps the inventory from leaning on a single letter.
 * 3. **A given name carries no seam.** The glottal is the sacred and lineage
 *    register, so it belongs to a god, a throne, an institution or a house.
 * 4. **A house name ends in `-u` and carries a seam.** The collective is what
 *    makes a house name a house name.
 * 5. **No name is listed twice**, within a list or across them, and every house-form
 *    names a god the note lists.
 * 6. **A given name as long as the note's threshold has a near name**: the name
 *    broken off after its second vowel, that vowel held long. Every row of the
 *    note's worked table is that form of its given name, and every Khelâthi being
 *    whose given name reaches the threshold carries it among its aliases.
 * 7. **No note writes a retired form.** A form the note's retired table lists,
 *    written in any note of the content tree, is an error at the place it is
 *    written. Marks are ignored and case is kept, so an address, which is lower
 *    case, never matches. A literature note, a poetry fence, a `terran_analog`
 *    comment and the retired table itself are not read.
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { retiredIn } from "./vedyari-lexicon.mjs";

export const NOTE = "assets/content/Skills/Languages/Khelathi.md";

/** The content tree the beings are read from. */
export const CONTENT = "assets/content";

/** The culture a being names to be held to the near-name rule. */
const CULTURE = "khelathiclt";

/** The letters a coined element must carry at least one of. */
const MARKERS = ["th", "l", "g", "z", "q"];

/** The share of the elements any one marker may carry. */
const CAP = 0.6;

/** What a word may end in: a vowel, or one of these four consonants. */
const FINAL = /[aeiouâêîôûáéíóúäëïöüāīē]$|[ntsr]$/i;

/** @param {string} file @param {number|null} line @param {string} severity @param {string} message */
function finding(file, line, severity, message) {
    return `${file}:${line ?? ""}${line ? "" : ""}: ${severity}: ${message}`.replace("::", ":");
}

/** The line a literal sits on, 1-based, or null when it is absent. */
function lineOf(text, literal) {
    const at = text.indexOf(literal);
    return at === -1 ? null : text.slice(0, at).split("\n").length;
}

/**
 * One section of the note, by its heading, up to the next heading as shallow.
 *
 * @param {string} text - The note.
 * @param {string} heading - The heading line, hashes included.
 * @returns {string} The section, heading included.
 */
export function section(text, heading) {
    const start = text.indexOf(`\n${heading}\n`);
    if (start === -1) throw new Error(`${NOTE} states no section "${heading}"`);
    const depth = heading.match(/^#+/)[0].length;
    const rest = text.slice(start + 1);
    const lines = rest.split("\n");
    for (let i = 1; i < lines.length; i += 1) {
        const mark = lines[i].match(/^(#+)\s/);
        if (mark && mark[1].length <= depth) return lines.slice(0, i).join("\n");
    }
    return rest;
}

/**
 * Every table row of a section, as cells, less the header and its rule.
 *
 * @param {string} text - The section.
 * @returns {string[][]} One array of cells per row.
 */
export function rows(text) {
    const cells = text
        .split("\n")
        .filter((line) => line.trim().startsWith("|"))
        .map((line) =>
            line
                .split("|")
                .slice(1, -1)
                .map((cell) => cell.trim()),
        );
    const out = [];
    for (let i = 0; i < cells.length; i += 1) {
        const isRule = cells[i].every((cell) => /^:?-+:?$/.test(cell));
        const isHeader =
            i + 1 < cells.length && cells[i + 1].every((cell) => /^:?-+:?$/.test(cell));
        if (!isRule && !isHeader) out.push(cells[i]);
    }
    return out;
}

/** The backticked forms of a cell, with the ticks off. */
function ticked(cell) {
    return [...cell.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
}

/** Every bulleted item of a section. */
function bullets(text) {
    return [...text.matchAll(/^- (.+)$/gm)].map((m) => m[1].trim());
}

/**
 * The whole lexicon, read off the note.
 *
 * @param {string} text - The note.
 * @returns {object} The published inventories.
 */
export function lexiconFrom(text) {
    const elements = [];
    for (const cells of rows(section(text, "### Name elements"))) {
        for (const form of [...ticked(cells[0]), ...ticked(cells[1] ?? "")]) elements.push(form);
    }
    // `section` stops at the next heading as shallow, so a `####` subsection sits
    // inside its parent. The gods are the rows above the house-form table.
    const godsSection = section(text, "### The nineteen gods").split(/^#### /m)[0];
    const gods = rows(godsSection).flatMap((cells) => ticked(cells[0]));
    const houseForms = rows(section(text, "#### The clipped house-form")).map((cells) => ({
        god: ticked(cells[0])[0],
        form: ticked(cells[1])[0],
    }));
    const places = rows(section(text, "### Place-building elements")).flatMap((cells) =>
        ticked(cells[0]),
    );
    // A rank morpheme and a particle are bound; a trade, a temple word and the
    // realm's own names stand alone.
    const bound = ["### Particles", "### The morphemes a rank is built from"].flatMap((heading) =>
        rows(section(text, heading)).flatMap((cells) => ticked(cells[0])),
    );
    const words = [
        "### Occupation words",
        "### Temple, arcane and cosmology",
        "### The realm, its people and its hands",
    ].flatMap((heading) => rows(section(text, heading)).flatMap((cells) => ticked(cells[0])));

    // Split on the headings rather than lookahead past them: JavaScript has no
    // `\Z`, and a regex written with one stops at the first literal `Z` in the
    // text, which silently truncates a list.
    const lists = new Map();
    const chunks = section(text, "## Name Lists").split(/^### /m).slice(1);
    for (const chunk of chunks) {
        const [heading, ...body] = chunk.split("\n");
        lists.set(heading.trim(), bullets(body.join("\n")));
    }
    // The forms retired from the setting, and the span of the note that lists them.
    const retiredHeading = "### Retired names";
    const retiredBody = text.includes(`\n${retiredHeading}\n`) ? section(text, retiredHeading) : "";
    const retiredFrom = retiredBody ? text.indexOf(`\n${retiredHeading}\n`) + 1 : -1;
    const retired = rows(retiredBody)
        .map((cells) => ({
            name: ticked(cells[0])[0] ?? "",
            instead: ticked(cells[1] ?? "")[0] ?? null,
        }))
        .filter((one) => one.name);
    const retiredAt =
        retiredBody ? { from: retiredFrom, to: retiredFrom + retiredBody.length } : null;

    return { elements, gods, houseForms, places, bound, words, lists, retired, retiredAt };
}

/** A vowel run: one syllable, however many letters spell it. */
const VOWEL_RUN = /[aeiouâêîôûáéíóúäëïöüāīē]+/giu;

/** The long form of each plain vowel, which a near name ends on. */
const LONG = { a: "â", e: "ê", i: "î", o: "ô", u: "û" };

/** The note's spelled-out numbers, for the threshold it states in words. */
const NUMBERS = { two: 2, three: 3, four: 4, five: 5, six: 6 };

/**
 * How many syllables a name has: one per run of vowels, so `Gezehutyu` has four
 * and `Lersaîs` two.
 *
 * @param {string} name - A given name.
 * @returns {number} The syllable count.
 */
export function syllables(name) {
    return [...name.matchAll(VOWEL_RUN)].length;
}

/**
 * The near name a given name yields: the name broken off after its second vowel,
 * and that vowel held long.
 *
 * @param {string} given - A given name.
 * @returns {string|undefined} The near name, or undefined for a name of one syllable.
 */
export function nearName(given) {
    const runs = [...given.matchAll(VOWEL_RUN)];
    if (runs.length < 2) return undefined;
    const end = runs[1].index + runs[1][0].length;
    const stem = given.slice(0, end);
    const last = stem.at(-1);
    const plain = last.normalize("NFD")[0].toLowerCase();
    return stem.slice(0, -1) + (LONG[plain] ?? last);
}

/**
 * The near-name rule as the note states it: the threshold, read off the bold
 * sentence that states it, and the worked table beneath.
 *
 * @param {string} text - The note.
 * @returns {{threshold: number, examples: {near: string, given: string}[]}} The rule.
 */
export function nearRuleFrom(text) {
    const body = section(text, "### The Near Name");
    const stated = body.match(/\*\*A given name of (\w+) syllables or more\b/);
    if (!stated || !(stated[1] in NUMBERS)) {
        throw new Error(`${NOTE} states no near-name threshold under "### The Near Name"`);
    }
    const examples = rows(body).map((cells) => ({
        near: ticked(cells[0])[0] ?? cells[0],
        given: ticked(cells[1] ?? "")[0] ?? cells[1],
    }));
    return { threshold: NUMBERS[stated[1]], examples };
}

/** Every Markdown file under a directory. */
function markdownFiles(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(full));
        else if (entry.name.endsWith(".md")) out.push(full);
    }
    return out;
}

/**
 * Every Khelâthi being: its file, its given name and its aliases.
 *
 * A being with no `given` key is named by the first word of its full name.
 *
 * @param {string} [root] - The content tree.
 * @returns {{file: string, line: number, given: string, aliases: string[]}[]} The beings.
 */
export function khelathiBeings(root = CONTENT) {
    const out = [];
    for (const file of markdownFiles(root)) {
        const text = fs.readFileSync(file, "utf8");
        const head = text.match(/^---\n([\s\S]*?)\n---/);
        if (!head) continue;
        let front;
        try {
            front = YAML.parse(head[1]);
        } catch {
            continue;
        }
        if (front?.type !== "being" || front?.data?.culture !== CULTURE) continue;
        const name = front.name ?? {};
        const given = String(name.given ?? String(name.full ?? "").split(/\s+/)[0]).trim();
        out.push({
            file: path.relative(process.cwd(), file).split(path.sep).join("/"),
            line: lineOf(text, "\nname:") + 1,
            given,
            aliases: (name.aliases ?? []).map(String),
        });
    }
    return out;
}

/**
 * Every note of the content tree, and whether it is a literature note.
 *
 * @param {string} [root] - The content tree.
 * @returns {{file: string, text: string, literature: boolean}[]} The notes.
 */
export function contentTexts(root = CONTENT) {
    const out = [];
    for (const file of markdownFiles(root)) {
        const text = fs.readFileSync(file, "utf8");
        const head = text.match(/^---\n([\s\S]*?)\n---/);
        let front = null;
        try {
            front = head ? YAML.parse(head[1]) : null;
        } catch {
            front = null;
        }
        out.push({
            file: path.relative(process.cwd(), file).split(path.sep).join("/"),
            text,
            literature: front?.type === "lore" && front?.subType === "literature",
        });
    }
    return out;
}

/** The 1-based line and column of an offset into a text. */
function lineColumn(text, offset) {
    const before = text.slice(0, offset).split("\n");
    return { line: before.length, column: before.at(-1).length + 1 };
}

/**
 * Every finding over the note, the beings that speak it and the notes of the tree.
 *
 * @param {string} text - The language note.
 * @param {{file: string, line: number, given: string, aliases: string[]}[]} beings - The beings.
 * @param {{file: string, text: string, literature: boolean}[]} [texts] - The notes read for
 *   retired forms. The language note among them is read as `text`, its retired table skipped.
 * @returns {string[]} One finding per line.
 */
export function analyse(text, beings, texts = []) {
    const lex = lexiconFrom(text);
    const out = [];
    const report = (literal, severity, message) =>
        out.push(finding(NOTE, lineOf(text, literal), severity, message));

    // 1. A word ends in a vowel or in n, t, s, r.
    //
    // Rule 4 governs a word. A name element and a place morpheme never stand alone —
    // `Gar-` opens a compound and `zab` sits inside one — and the word they build
    // does comply, so holding a morpheme to a word's rule would refuse the note's own
    // vocabulary. The gods, the trades, the temple words and the realm's own names
    // are words, and they are held to it.
    for (const form of [...lex.gods, ...lex.words]) {
        if (form.startsWith("-") || form.endsWith("-") || form.endsWith("'")) continue;
        if (!FINAL.test(form)) {
            report(form, "error", `\`${form}\` ends in none of a vowel, n, t, s or r`);
        }
    }

    // 2. Every element carries a marker, and no marker carries more than its share.
    //
    // An element carrying two markers counts under both: what the share measures is
    // how far the inventory leans on one letter, not which letter was found first.
    const carried = new Map(MARKERS.map((m) => [m, 0]));
    for (const form of lex.elements) {
        const low = form.toLowerCase();
        const has = MARKERS.filter((m) => low.includes(m));
        if (has.length === 0) {
            report(form, "error", `\`${form}\` carries none of ${MARKERS.join(", ")}`);
            continue;
        }
        for (const m of has) carried.set(m, carried.get(m) + 1);
    }
    for (const [marker, n] of carried) {
        if (lex.elements.length && n / lex.elements.length > CAP) {
            out.push(
                finding(
                    NOTE,
                    lineOf(text, "### Name elements"),
                    "error",
                    `\`${marker}\` is in ${n} of ${lex.elements.length} elements, past the share any one may hold`,
                ),
            );
        }
    }

    // 3 and 4. The register: a given name is smooth, a house name is seamed and collective.
    for (const [listName, names] of lex.lists) {
        const isHouse = /clan|house|tribe/i.test(listName);
        for (const name of names) {
            if (!isHouse && /['’]/.test(name)) {
                report(name, "error", `\`${name}\` is a given name and carries a seam`);
            }
            if (isHouse && !/['’]/.test(name)) {
                report(name, "error", `\`${name}\` is a house name and carries no seam`);
            }
            if (isHouse && !/[uû]$/.test(name)) {
                report(name, "error", `\`${name}\` is a house name and does not end in \`-u\``);
            }
        }
    }

    // 5. No name twice, and every house-form names a god the note lists.
    const seen = new Map();
    for (const [listName, names] of lex.lists) {
        for (const name of names) {
            if (seen.has(name)) {
                report(
                    name,
                    "error",
                    `\`${name}\` is listed under both ${seen.get(name)} and ${listName}`,
                );
            } else seen.set(name, listName);
        }
    }
    for (const { god, form } of lex.houseForms) {
        if (!lex.gods.includes(god)) {
            report(
                god,
                "error",
                `\`${form}\` is the house-form of \`${god}\`, which the note does not list`,
            );
        }
    }

    // 6. A long given name has its near name, formed by the rule, and a being carries it.
    const { threshold, examples } = nearRuleFrom(text);
    for (const { near, given } of examples) {
        if (syllables(given) < threshold) {
            report(
                `\`${near}\``,
                "error",
                `\`${given}\` has ${syllables(given)} syllables, fewer than a near name needs`,
            );
        } else if (nearName(given) !== near) {
            report(
                `\`${near}\``,
                "error",
                `\`${near}\` is not the near name of \`${given}\`, which is \`${nearName(given)}\``,
            );
        }
    }
    for (const being of beings) {
        if (syllables(being.given) < threshold) continue;
        const near = nearName(being.given);
        if (!being.aliases.includes(near)) {
            out.push(
                finding(
                    being.file,
                    being.line,
                    "error",
                    `\`${being.given}\` has ${syllables(being.given)} syllables and carries no alias \`${near}\``,
                ),
            );
        }
    }

    // 7. No note writes a retired form.
    for (const note of texts) {
        if (note.literature) continue;
        const own = path.resolve(note.file) === path.resolve(NOTE);
        const body = own ? text : note.text;
        const skip = own && lex.retiredAt ? [lex.retiredAt] : [];
        for (const hit of retiredIn(body, lex.retired, skip)) {
            const { line, column } = lineColumn(body, hit.at);
            const instead =
                hit.instead ?
                    `the setting writes \`${hit.instead}\``
                :   "and the setting writes none in its place";
            out.push(
                `${note.file}:${line}:${column}: error: \`${hit.written}\` is a retired form; ${instead}`,
            );
        }
    }
    return out;
}

function main() {
    const text = fs.readFileSync(NOTE, "utf8");
    const out = analyse(text, khelathiBeings(), contentTexts());
    for (const line of out) console.error(line);
    if (out.length) {
        console.error(`${out.length} Khelâthi lexicon finding(s).`);
        process.exitCode = 1;
    } else {
        const lex = lexiconFrom(text);
        console.log(
            `The note publishes ${lex.elements.length} element form(s), ${lex.gods.length} gods, ` +
                `${lex.places.length} place morphemes, ${[...lex.lists.values()].flat().length} names ` +
                `and ${lex.retired.length} retired forms.`,
        );
    }
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) main();
