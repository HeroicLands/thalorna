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
 * The reader and the guard that every lexicon page of the common shape shares.
 *
 * A lexicon page states its tongue's letters, word edges, clusters, joining and
 * suffixes, its words by field, the scope of its register, the register of
 * every name the setting gives in that scope, and the names it retires. A page
 * for a family adds a Tongues table of several tongues, a roots table whose
 * columns are the tongues, and an ordered `Step | Change | Where` table for each
 * daughter. A guard for one page is a thin file that names the page and calls
 * `runGuard`; **everything the guard checks it reads off the page at run time**,
 * so a rule the page stops stating is a rule the guard stops enforcing.
 *
 * The page's sections, by heading:
 *
 * - `## How to read the tables` with `### Classes` (Class | Meaning) and
 *   `### Fields` (Field | What it holds).
 * - `## Sounds and spelling` with `### Letters` (Letter | Kind | Sounds like,
 *   and an optional Tongue column naming which tongues write it), `### Word
 *   edges` (Edge | Sounds, with the rows "Pairs that may open a word" and
 *   "Consonants that close a word", and optionally "Pairs that may close a word",
 *   "Vowels that may stand together" and "Consonants that may carry a
 *   syllable"), `### Clusters` (Rule | Count, with
 *   the row "Most consonants together inside a word") and optionally
 *   `### Spellings the pages do not use` (Written | Read as | What it is).
 * - `## Building words` with optional `### Joining` (First closes on | Second
 *   opens on | Written | Example) and `### Suffixes` (Suffix | Stem | Makes |
 *   Example; the Stem cell is `added` or `replaces a closing vowel` or
 *   `replaces a closing <letters>`).
 * - For a family, `## The family` with `### Roots` (one column per tongue, the
 *   first the parent, and a Gloss column) and `### From <Parent> to <Daughter>`
 *   for each daughter (Step | Change | Where).
 * - `## Words`, one `### <Field>` table per field (Form | Class | Gloss | Built
 *   from | Attested, and an optional Tongue column; a table with no Tongue
 *   column is the parent's).
 * - `## Scope` (Kind | Value | What it catches; the kinds `folder`, `culture`,
 *   `lore`, `parent`, `address`, `tag` and `path`).
 * - `## Attested names` with `### Tongues` (Tongue | Meaning) and `### Names`
 *   (Name | Notes | Tongue | Built from).
 * - Optionally `## Retired names` (Retired | Written instead | Why).
 *
 * The checks, each an error unless said:
 *
 * 1. **Words.** Every row stands under a declared field, has a declared class,
 *    a gloss, and an Attested cell whose links name notes that exist; its
 *    tongue is one the page declares; no form stands twice in one tongue. Its
 *    letters are the letter table's for its tongue, it opens on a vowel, a
 *    single consonant or a listed pair, it closes on a vowel or a listed
 *    consonant or pair (a bound stem, written with a closing hyphen, closes on
 *    anything), no run of consonants is longer than the stated count, and no
 *    two vowels stand together but the listed pairs when the page lists any.
 *    A consonant the page says may carry a syllable carries one where it
 *    follows a consonant and stands before another or at the end of the word,
 *    and there it counts as a vowel for the edge and cluster rules: _hvrn_ is
 *    _hv-_, a syllable on the _r_, and a closing _n_.
 *    A Built from cell recomputes to the form through the joining and suffix
 *    tables.
 * 2. **The family.** Each daughter cell of the roots table recomputes from the
 *    parent cell through that daughter's change table; a Where phrase the
 *    engine does not know is an error at its row.
 * 3. **The register's coverage.** Every name and alias of every note in scope,
 *    the given and clan name of every being there, and, where the guard asks
 *    for titles, every rank and office title a note's data carries, stands in
 *    the register under that note's address. A row
 *    naming a note that does not exist or does not carry the name, a tag the
 *    Tongues table does not declare, and a row standing twice are errors.
 * 4. **The register's names.** A row in a tongue the page states rules for is
 *    read through the spellings table and held to check 1's sound rules; a
 *    break is a **warning**, since the name is attested and renaming it is the
 *    owner's. A Built from cell must recompute to the name, an error when it
 *    does not; a row with `—` is a warning, a name the lexicon does not reach.
 * 5. **Retired names.** A form the retired table lists, written in any note of
 *    the tree, is an error where it is written; literature notes, poetry
 *    fences, `terran_analog` comments and the table itself are not read.
 * 6. **Earth words.** Every word form and every root is compared with the local
 *    Earth word lists and morphemes; a hit on a form the page coins is an
 *    error, and a hit on a form a note already attests is a warning, since the
 *    attested form is the owner's. A bound stem is not compared, only the words
 *    built on it. With no lists present the comparison is skipped with one
 *    message.
 *
 * `--missing` prints a register row for every name in scope the register lacks,
 * ready to paste; `--check <word>...` holds loose words to the sound rules of
 * every tongue and the Earth lists.
 *
 * A guard proves the page agrees with its own rules, never that the rules are
 * good or the page worth reading. Findings are `file:line:column: severity:
 * message`, both severities to stderr and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { normalize } from "./collision-check.mjs";
import { earthHits, listDirs, loadEarth } from "./khazryn-lexicon.mjs";
import { retiredIn } from "./vedyari-lexicon.mjs";

/** The content tree every page's scope is read from. */
export const CONTENT = "assets/content";

// ---------------------------------------------------------------------------
// Text helpers
// ---------------------------------------------------------------------------

/** Lowercase, composed. */
export const lower = (s = "") => s.normalize("NFC").toLowerCase();

/** Lowercase with every mark off. */
export const fold = (s = "") => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/** A cell with its links reduced to their labels and its bold and italic marks off. */
export function plain(cell = "") {
    return cell
        .replace(/\[\[[^\]|]*\\?\|([^\]]*)\]\]/g, "$1")
        .replace(/\*\*/g, "")
        .replace(/(^|\s)_|_(\s|$)/g, "$1$2")
        .trim();
}

/** The backticked forms of a cell, with the ticks off. */
export function ticked(cell = "") {
    return [...cell.matchAll(/`([^`]*)`/g)].map((m) => m[1]);
}

/** Every address a cell links. */
export function linked(cell = "") {
    return [...cell.matchAll(/\[\[([^\]|\\]+)/g)].map((m) => m[1]);
}

/** The 1-based line and column of an offset. */
export function lineColumn(text, offset) {
    const before = text.slice(0, offset).split("\n");
    return { line: before.length, column: before.at(-1).length + 1 };
}

/**
 * A section of a note by its heading line, up to the next heading as shallow,
 * with the offset of its first character in the note.
 *
 * @param {string} text - The note.
 * @param {string} heading - The heading line, hashes included.
 * @param {boolean} [required] - Throw when the section is absent.
 * @returns {{text: string, offset: number}|null}
 */
export function section(text, heading, required = true) {
    const needle = `\n${heading}\n`;
    let start = text.indexOf(needle);
    if (start === -1 && text.startsWith(`${heading}\n`)) start = -1;
    else if (start === -1) {
        if (required) throw new Error(`the page states no section "${heading}"`);
        return null;
    }
    const offset = start + 1;
    const depth = heading.match(/^#+/)[0].length;
    const rest = text.slice(offset);
    const lines = rest.split("\n");
    let end = rest.length;
    let at = 0;
    for (let i = 0; i < lines.length; i += 1) {
        if (i > 0) {
            const mark = lines[i].match(/^(#+)\s/);
            if (mark && mark[1].length <= depth) {
                end = at;
                break;
            }
        }
        at += lines[i].length + 1;
    }
    return { text: rest.slice(0, end), offset };
}

/**
 * Every table of a text: header cells, and rows with their offsets.
 *
 * @param {string} text - The text.
 * @param {number} [base] - The offset of the text in its note.
 * @returns {{header: string[], rows: {cells: string[], offset: number}[]}[]}
 */
export function tables(text, base = 0) {
    const out = [];
    let current = null;
    let at = 0;
    for (const line of text.split("\n")) {
        const offset = base + at;
        at += line.length + 1;
        if (!line.trim().startsWith("|")) {
            current = null;
            continue;
        }
        // A `\|` inside a cell, as a wikilink's label bar is written, splits nothing.
        const cells = line
            .split(/(?<!\\)\|/)
            .slice(1, -1)
            .map((c) => c.trim());
        if (cells.every((c) => /^:?-+:?$/.test(c))) continue;
        if (!current) {
            current = { header: cells, rows: [] };
            out.push(current);
        } else current.rows.push({ cells, offset });
    }
    return out;
}

/** The first table of a section, or null when the section or table is absent. */
export function tableOf(text, heading, required = true) {
    const found = section(text, heading, required);
    if (!found) return null;
    const table = tables(found.text, found.offset)[0];
    if (!table && required) throw new Error(`the section "${heading}" states no table`);
    return table ?? null;
}

/** The index of the column whose header starts with a word, or -1. */
export function column(table, word) {
    return table.header.findIndex((cell) => plain(cell).toLowerCase().startsWith(word));
}

/** The column, or a thrown error naming the table. */
function need(table, word, where) {
    const at = column(table, word);
    if (at === -1) throw new Error(`the ${where} table has no "${word}" column`);
    return at;
}

// ---------------------------------------------------------------------------
// The derivation engine: an ordered table of changes
// ---------------------------------------------------------------------------

/** The base letter of a character, marks off and lowered. */
export function base(ch = "") {
    return ch.normalize("NFD")[0]?.toLowerCase() ?? "";
}

/** Whether a character is a letter of a word; an apostrophe is one. */
export function isLetter(ch = "") {
    return /[\p{L}'’]/u.test(ch);
}

/** Whether a character is a vowel: a letter whose base is a, e, i, o, u or y. */
export function isVowel(ch = "") {
    return /[aeiouy]/.test(base(ch));
}

/** Whether a character is a consonant: a letter that is not a vowel. */
export function isConsonant(ch = "") {
    return isLetter(ch) && !isVowel(ch);
}

const FRONT = /[eiy]/;
const BACK = /[aou]/;
const NASAL = /[mnñ]/;
const LIQUID = /[lr]/;

function before(text, at) {
    const ch = text[at - 1] ?? "";
    return isLetter(ch) ? ch : "";
}

function after(text, at) {
    const ch = text[at] ?? "";
    return isLetter(ch) ? ch : "";
}

function nasalBefore(text, at) {
    const prev = before(text, at);
    if (!prev) return false;
    if (NASAL.test(base(prev))) return true;
    return base(prev) === "g" && base(before(text, at - 1)) === "n";
}

/**
 * The closed vocabulary of environments a change table may name in its Where
 * cell, each a test over the text, the start of the match and its end.
 *
 * @type {Record<string, (text: string, start: number, end: number) => boolean>}
 */
export const ENVIRONMENTS = {
    anywhere: () => true,
    "at the start of a word": (text, start) => before(text, start) === "",
    "at the end of a word": (text, _s, end) => after(text, end) === "",
    "between vowels": (text, start, end) =>
        isVowel(before(text, start)) && isVowel(after(text, end)),
    "before a vowel": (text, _s, end) => isVowel(after(text, end)),
    "after a vowel": (text, start) => isVowel(before(text, start)),
    "before a consonant": (text, _s, end) => isConsonant(after(text, end)),
    "after a consonant": (text, start) => isConsonant(before(text, start)),
    "before two consonants": (text, _s, end) =>
        isConsonant(after(text, end)) && isConsonant(after(text, end + 1)),
    "before a front vowel": (text, _s, end) => FRONT.test(base(after(text, end))),
    "before a back vowel": (text, _s, end) => BACK.test(base(after(text, end))),
    "after a nasal": (text, start) => nasalBefore(text, start),
    "after a liquid": (text, start) => LIQUID.test(base(before(text, start))),
    "before a nasal": (text, _s, end) => NASAL.test(base(after(text, end))),
    "before a liquid": (text, _s, end) => LIQUID.test(base(after(text, end))),
    "not at the end of a word": (text, _s, end) => after(text, end) !== "",
    "not at the start of a word": (text, start) => before(text, start) !== "",
};

const NOTHING = new Set(["", "—", "∅", "-"]);

/**
 * One change read from its cells: two code spans with `>` between, the second
 * `—` for a deletion, and a Where phrase from `ENVIRONMENTS`.
 *
 * @returns {{from: string, to: string, where: string}|{problem: string}}
 */
export function parseChange(changeCell, whereCell) {
    const spans = ticked(changeCell);
    if (spans.length !== 2 || !changeCell.includes(">")) {
        return {
            problem: `the change "${changeCell.trim()}" is not two code spans with > between`,
        };
    }
    const from = lower(spans[0]);
    const to = NOTHING.has(spans[1].trim()) ? "" : lower(spans[1]);
    if (!from) return { problem: "a change cannot start from nothing" };
    const where = whereCell.trim().toLowerCase().replace(/\s+/g, " ");
    if (!(where in ENVIRONMENTS)) {
        return { problem: `"${whereCell.trim()}" is not an environment the engine knows` };
    }
    return { from, to, where };
}

/**
 * The ordered changes a table states, sorted by step, with the problems its
 * rows carry.
 *
 * @param {{header: string[], rows: {cells: string[], offset: number}[]}} table
 * @returns {{changes: {step: number, from: string, to: string, where: string, offset: number}[], problems: {offset: number, message: string}[]}}
 */
export function changesFrom(table) {
    const changes = [];
    const problems = [];
    const step = column(table, "step");
    const change = column(table, "change");
    const where = column(table, "where");
    if (step === -1 || change === -1 || where === -1) {
        return {
            changes,
            problems: [
                { offset: null, message: "the change table lacks a Step, Change or Where column" },
            ],
        };
    }
    for (const { cells, offset } of table.rows) {
        const n = Number.parseInt(cells[step] ?? "", 10);
        if (!Number.isInteger(n)) {
            problems.push({ offset, message: `the step "${cells[step] ?? ""}" is not a number` });
            continue;
        }
        const parsed = parseChange(cells[change] ?? "", cells[where] ?? "");
        if ("problem" in parsed) {
            problems.push({ offset, message: parsed.problem });
            continue;
        }
        changes.push({ step: n, ...parsed, offset });
    }
    changes.sort((a, b) => a.step - b.step);
    return { changes, problems };
}

/** One change applied: every match found on the form as it stands, then replaced. */
export function applyChange(form, change) {
    const holds = ENVIRONMENTS[change.where];
    const spans = [];
    let i = 0;
    while (i < form.length) {
        if (form.startsWith(change.from, i) && holds(form, i, i + change.from.length)) {
            spans.push([i, i + change.from.length]);
            i += change.from.length;
        } else i += 1;
    }
    if (!spans.length) return form;
    let out = "";
    let last = 0;
    for (const [start, end] of spans) {
        out += form.slice(last, start) + change.to;
        last = end;
    }
    return out + form.slice(last);
}

/**
 * A parent form carried through an ordered table of changes.
 *
 * @returns {{form: string, trace: {step: number, before: string, after: string}[]}}
 */
export function derive(form, changes) {
    const capital = /^\p{Lu}/u.test(form);
    let current = lower(form);
    const trace = [];
    for (const change of changes) {
        const next = applyChange(current, change);
        if (next !== current) trace.push({ step: change.step, before: current, after: next });
        current = next;
    }
    if (capital && current) current = current[0].toUpperCase() + current.slice(1);
    return { form: current, trace };
}

// ---------------------------------------------------------------------------
// Reading the page
// ---------------------------------------------------------------------------

/**
 * The whole page, read into its tables.
 *
 * @param {string} text - The lexicon page.
 * @returns {object} The page: tongues, classes, fields, letters, edges,
 *   clusters, spellings, joining, suffixes, roots, changes, words, scope,
 *   register, retired, retiredAt and problems.
 */
export function readPage(text) {
    const problems = [];
    const read = (fn, fallback) => {
        try {
            return fn();
        } catch (error) {
            problems.push(error.message);
            return fallback;
        }
    };

    const tongues = read(() => {
        const t = tableOf(text, "### Tongues");
        const tag = need(t, "tongue", "Tongues");
        const meaning = column(t, "meaning");
        return t.rows.map(({ cells, offset }) => {
            const code = ticked(cells[tag])[0] ?? plain(cells[tag]);
            const name = plain(cells[meaning] ?? "");
            return {
                tag: code,
                meaning: name,
                address: linked(cells[meaning] ?? "")[0] ?? null,
                offset,
            };
        });
    }, []);

    const classes = read(
        () =>
            tableOf(text, "### Classes").rows.map(
                ({ cells }) => ticked(cells[0])[0] ?? plain(cells[0]),
            ),
        [],
    );
    const fields = read(
        () => tableOf(text, "### Fields").rows.map(({ cells }) => plain(cells[0])),
        [],
    );

    // Letters, with the tongues each is written in. A tongue column lists tags,
    // or "all"; a page with one tongue has no such column.
    const letters = read(() => {
        const t = tableOf(text, "### Letters");
        const letter = need(t, "letter", "Letters");
        const kind = need(t, "kind", "Letters");
        const tongue = column(t, "tongue");
        return t.rows.flatMap(({ cells, offset }) => {
            const kindText = plain(cells[kind]).toLowerCase();
            const tags =
                tongue === -1 ? null
                : /^all\b/i.test(plain(cells[tongue])) ? null
                : ticked(cells[tongue]);
            return ticked(cells[letter]).map((form) => ({
                form: lower(form),
                vowel: /vowel|diphthong/.test(kindText),
                tags,
                offset,
            }));
        });
    }, []);

    const edges = read(
        () => {
            const t = tableOf(text, "### Word edges");
            const out = {
                opening: [],
                closing: [],
                closingPairs: [],
                vowelPairs: null,
                syllabic: [],
            };
            for (const { cells } of t.rows) {
                const label = plain(cells[0]).toLowerCase();
                const forms = ticked(cells[1] ?? "").map(lower);
                if (label.startsWith("pairs that may open")) out.opening = forms;
                else if (label.startsWith("consonants that close")) out.closing = forms;
                else if (label.startsWith("pairs that may close")) out.closingPairs = forms;
                else if (label.startsWith("vowels that may stand together")) out.vowelPairs = forms;
                else if (label.startsWith("consonants that may carry a syllable"))
                    out.syllabic = forms;
            }
            return out;
        },
        { opening: [], closing: [], closingPairs: [], vowelPairs: null, syllabic: [] },
    );

    const clusters = read(() => {
        const t = tableOf(text, "### Clusters");
        const row = t.rows.find(({ cells }) => /^most consonants together/i.test(plain(cells[0])));
        if (!row)
            throw new Error(
                'the Clusters table states no "Most consonants together inside a word" row',
            );
        return Number.parseInt(plain(row.cells[1]), 10);
    }, Infinity);

    // A page whose marks are read past rather than unused heads the table so.
    const spellings = read(() => {
        const t =
            tableOf(text, "### Spellings the pages do not use", false) ??
            tableOf(text, "### Marks and spellings read past", false);
        if (!t) return [];
        return t.rows.map(({ cells }) => ({
            written: lower(ticked(cells[0])[0] ?? ""),
            read: lower(ticked(cells[1])[0] ?? ""),
        }));
    }, []);

    const joining = read(() => {
        const t = tableOf(text, "### Joining", false);
        if (!t) return [];
        return t.rows.map(({ cells }) => ({
            first: ticked(cells[0]).map(lower),
            second: ticked(cells[1]).map(lower),
            written: lower(ticked(cells[2])[0] ?? ""),
        }));
    }, []);

    const suffixes = read(() => {
        const t = tableOf(text, "### Suffixes", false);
        if (!t) return [];
        return t.rows.map(({ cells, offset }) => {
            const stem = plain(cells[1] ?? "").toLowerCase();
            const replaces = stem.match(/replaces a closing (vowel|`[^`]+`)/);
            return {
                form: lower(ticked(cells[0])[0] ?? ""),
                replaces:
                    !replaces ? null
                    : replaces[1] === "vowel" ? "vowel"
                    : lower(replaces[1].slice(1, -1)),
                makes: plain(cells[2] ?? ""),
                offset,
            };
        });
    }, []);

    // The family: a roots table whose columns are tongue names, and a change
    // table per daughter.
    const family = read(() => {
        const roots = tableOf(text, "### Roots", false);
        if (!roots) return null;
        const gloss = need(roots, "gloss", "Roots");
        const cols = roots.header
            .map((h, i) => ({ name: plain(h), i }))
            .filter(({ i }) => i !== gloss);
        const parent = cols[0];
        const daughters = cols.slice(1).map((col) => {
            const heading = `### From ${parent.name} to ${col.name}`;
            const table = tableOf(text, heading, false);
            if (!table) {
                problems.push(
                    `the page states no "${heading}" table for the roots column ${col.name}`,
                );
                return { ...col, changes: [], offset: null };
            }
            const { changes, problems: bad } = changesFrom(table);
            for (const p of bad)
                problems.push({ offset: p.offset, message: `${heading}: ${p.message}` });
            return { ...col, changes };
        });
        const rows = roots.rows.map(({ cells, offset }) => ({
            parent: ticked(cells[parent.i])[0] ?? plain(cells[parent.i]),
            gloss: plain(cells[gloss] ?? ""),
            cells: daughters.map((d) => ticked(cells[d.i])[0] ?? plain(cells[d.i] ?? "")),
            offset,
        }));
        return { parent, daughters, rows };
    }, null);

    const words = read(() => {
        const body = section(text, "## Words");
        const out = [];
        const heads = [...body.text.matchAll(/^### (.+)$/gm)];
        heads.forEach((head, i) => {
            const start = head.index;
            const end = i + 1 < heads.length ? heads[i + 1].index : body.text.length;
            const field = head[1].trim();
            for (const table of tables(body.text.slice(start, end), body.offset + start)) {
                const form = column(table, "form");
                if (form === -1) continue;
                const cls = column(table, "class");
                const gloss = column(table, "gloss");
                const built = column(table, "built");
                const attested = column(table, "attested");
                const tongue = column(table, "tongue");
                for (const { cells, offset } of table.rows) {
                    out.push({
                        field,
                        form: ticked(cells[form])[0] ?? "",
                        cls: cls === -1 ? "" : (ticked(cells[cls])[0] ?? plain(cells[cls] ?? "")),
                        gloss: gloss === -1 ? "" : plain(cells[gloss] ?? ""),
                        built: built === -1 ? "—" : (cells[built] ?? "—"),
                        attested: attested === -1 ? "—" : (cells[attested] ?? "—"),
                        tongue:
                            tongue === -1 ? null : (
                                (ticked(cells[tongue])[0] ?? plain(cells[tongue] ?? ""))
                            ),
                        offset,
                    });
                }
            }
        });
        return out;
    }, []);

    const scope = read(() => {
        const t = tableOf(text, "## Scope");
        const kind = need(t, "kind", "Scope");
        const value = need(t, "value", "Scope");
        return t.rows.map(({ cells }) => ({
            kind: plain(cells[kind]).toLowerCase(),
            values: ticked(cells[value]),
        }));
    }, []);

    const register = read(() => {
        const t = tableOf(text, "### Names");
        const name = need(t, "name", "Names");
        const notes = need(t, "notes", "Names");
        const tongue = need(t, "tongue", "Names");
        const built = need(t, "built", "Names");
        return t.rows.map(({ cells, offset }) => ({
            name: plain(cells[name]),
            addresses: linked(cells[notes] ?? ""),
            tongue: ticked(cells[tongue] ?? "")[0] ?? plain(cells[tongue] ?? ""),
            built: cells[built] ?? "—",
            offset,
        }));
    }, []);

    const retiredHeading = "## Retired names";
    const retiredSection = section(text, retiredHeading, false);
    const retired = [];
    if (retiredSection) {
        for (const table of tables(retiredSection.text, retiredSection.offset).slice(0, 1)) {
            for (const { cells } of table.rows) {
                const name = ticked(cells[0])[0] ?? "";
                if (name) retired.push({ name, instead: ticked(cells[1] ?? "")[0] ?? null });
            }
        }
    }
    const retiredAt =
        retiredSection ?
            { from: retiredSection.offset, to: retiredSection.offset + retiredSection.text.length }
        :   null;

    return {
        tongues,
        classes,
        fields,
        letters,
        edges,
        clusters,
        spellings,
        joining,
        suffixes,
        family,
        words,
        scope,
        register,
        retired,
        retiredAt,
        problems,
    };
}

// ---------------------------------------------------------------------------
// Sound rules
// ---------------------------------------------------------------------------

/** A word read through the spellings table, lowered. */
export function respell(word, spellings) {
    const w = lower(word);
    const byLength = [...spellings]
        .filter((s) => s.written)
        .sort((a, b) => b.written.length - a.written.length);
    let out = "";
    let i = 0;
    // One pass, longest spelling first, so a spelling's reading is never read again.
    while (i < w.length) {
        const hit = byLength.find((s) => w.startsWith(s.written, i));
        if (hit) {
            out += hit.read;
            i += hit.written.length;
        } else {
            out += w[i];
            i += 1;
        }
    }
    return out;
}

/** The letters of one tongue, longest first. */
export function lettersOf(page, tag) {
    return page.letters
        .filter((l) => l.tags === null || l.tags.includes(tag))
        .sort((a, b) => b.form.length - a.form.length);
}

/**
 * A word cut into its letters, longest letter first, by one tongue's table.
 *
 * @returns {{letter: string, vowel: boolean|null}[]} `vowel` null for a character no letter covers.
 */
export function sounds(word, letters) {
    const out = [];
    let i = 0;
    while (i < word.length) {
        const ch = word[i];
        if (!isLetter(ch) && ch !== "-") {
            i += 1;
            continue;
        }
        if (ch === "-") {
            out.push({ letter: "-", vowel: null, bound: true });
            i += 1;
            continue;
        }
        const hit = letters.find((l) => word.startsWith(l.form, i));
        if (hit) {
            out.push({ letter: hit.form, vowel: hit.vowel });
            i += hit.form.length;
        } else {
            out.push({ letter: ch, vowel: null });
            i += 1;
        }
    }
    return out;
}

/**
 * Every sound rule a word breaks: an unlisted letter, an opening or closing the
 * page does not allow, a consonant run past the count, two vowels together.
 *
 * @param {string} word - The word, already read through the spellings table.
 * @param {object} page - From `readPage`.
 * @param {string} tag - The tongue.
 * @returns {string[]} One message per break.
 */
export function soundProblems(word, page, tag) {
    const out = [];
    const bound = word.endsWith("-");
    const body = bound ? word.slice(0, -1) : word;
    const cut = sounds(body, lettersOf(page, tag));
    // A syllabic consonant between consonants, or closing the word after one,
    // carries the syllable and counts as a vowel.
    const syllabic = page.edges.syllabic ?? [];
    if (syllabic.length) {
        for (let i = 1; i < cut.length; i += 1) {
            const next = cut[i + 1];
            if (
                cut[i].vowel === false &&
                syllabic.includes(cut[i].letter) &&
                cut[i - 1].vowel === false &&
                (next === undefined || next.vowel === false)
            )
                cut[i] = { ...cut[i], vowel: true, syllabic: true };
        }
    }
    const unknown = [
        ...new Set(cut.filter((s) => s.vowel === null && !s.bound).map((s) => s.letter)),
    ];
    if (unknown.length)
        out.push(`writes ${unknown.map((l) => `\`${l}\``).join(", ")}, not in the letter table`);
    const runs = [];
    let run = [];
    for (const s of cut) {
        if (s.vowel === false) run.push(s.letter);
        else {
            if (run.length) runs.push(run);
            run = [];
        }
    }
    if (run.length) runs.push(run);
    const opensOnConsonant = cut.length && cut[0].vowel === false;
    const closesOnConsonant = cut.length && cut.at(-1).vowel === false;
    if (opensOnConsonant && runs[0].length > 1) {
        const pair = runs[0].join("");
        if (!page.edges.opening.includes(pair))
            out.push(`opens on \`${pair}\`, a pair the page does not list`);
    }
    if (closesOnConsonant && !bound) {
        const last = runs.at(-1);
        const pair = last.join("");
        const ok =
            last.length === 1 ?
                page.edges.closing.includes(pair) || page.edges.closing.includes("any")
            :   page.edges.closingPairs.includes(pair);
        if (!ok)
            out.push(`closes on \`${pair}\`, which the page does not allow a word to close on`);
    }
    const inner = runs.slice(
        opensOnConsonant ? 1 : 0,
        closesOnConsonant && !bound ? -1 : undefined,
    );
    for (const r of inner) {
        if (r.length > page.clusters)
            out.push(
                `runs ${r.length} consonants together (\`${r.join("")}\`), past ${page.clusters}`,
            );
    }
    if (page.edges.vowelPairs) {
        for (let i = 1; i < cut.length; i += 1) {
            if (cut[i - 1].vowel && cut[i].vowel) {
                const pair = cut[i - 1].letter + cut[i].letter;
                if (!page.edges.vowelPairs.includes(pair))
                    out.push(`sets \`${pair}\` together, two vowels the page does not pair`);
            }
        }
    }
    return out;
}

// ---------------------------------------------------------------------------
// Building words
// ---------------------------------------------------------------------------

/** Two pieces joined by the joining table, else set side by side. */
export function join(first, second, page) {
    for (const rule of page.joining) {
        const f = rule.first.find((x) => first.endsWith(x));
        const s = rule.second.find((x) => second.startsWith(x));
        if (f !== undefined && s !== undefined) {
            if (rule.written.endsWith("+")) return first + rule.written.slice(0, -1) + second;
            return first.slice(0, first.length - f.length) + rule.written + second.slice(s.length);
        }
    }
    return first + second;
}

/** A suffix added to a stem as the suffix table says. */
export function suffixed(stem, suffix, page) {
    const rule = page.suffixes.find((s) => s.form === suffix);
    if (!rule) return null;
    const tail = suffix.replace(/^-/, "");
    if (rule.replaces === "vowel") {
        const cut = sounds(
            stem,
            page.letters.slice().sort((a, b) => b.form.length - a.form.length),
        );
        const last = cut.at(-1);
        if (last && last.vowel) return stem.slice(0, stem.length - last.letter.length) + tail;
        return stem + tail;
    }
    if (rule.replaces && stem.endsWith(rule.replaces))
        return stem.slice(0, stem.length - rule.replaces.length) + tail;
    // An added suffix meets the stem as two words meet, so the joining table applies.
    return join(stem, tail, page);
}

/**
 * The form a Built from cell makes: its code spans, joined left to right, a
 * span opening on `-` taken as a suffix and a span closing on `-` as a bound
 * stem whose hyphen is dropped.
 *
 * @returns {{made: string, missing: string[]}|null} null for a root (`—` or no spans).
 */
export function builtForm(cell, page) {
    const pieces = ticked(cell).map(lower);
    if (!pieces.length) return null;
    let made = "";
    const missing = [];
    for (const piece of pieces) {
        if (piece.startsWith("-")) {
            const out = suffixed(made, piece, page);
            if (out === null) {
                missing.push(piece);
                made += piece.slice(1);
            } else made = out;
        } else {
            const stem = piece.endsWith("-") ? piece.slice(0, -1) : piece;
            made = made ? join(made, stem, page) : stem;
        }
    }
    return { made, missing };
}

// ---------------------------------------------------------------------------
// The content tree
// ---------------------------------------------------------------------------

/** Every Markdown file under a directory. */
export function markdownFiles(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(full));
        else if (entry.name.endsWith(".md")) out.push(full);
    }
    return out;
}

/** The names a note's frontmatter carries, with their kinds; titles only when asked. */
function namesOf(front, titles = false) {
    const own = front.name ?? {};
    const out = [];
    const push = (value, kind) => {
        if (typeof value === "string" && value.trim()) out.push({ name: value.trim(), kind });
    };
    if (typeof own === "string") push(own, "full");
    else {
        if (front.type === "being" && (own.given || own.clan)) {
            push(own.given, "given");
            push(own.clan, "clan");
        } else push(own.full, "full");
        for (const alias of own.aliases ?? []) push(alias, "alias");
    }
    const walk = (value) => {
        if (Array.isArray(value)) value.forEach(walk);
        else if (value && typeof value === "object") {
            for (const [key, inner] of Object.entries(value)) {
                if (key === "title" && typeof inner === "string") push(inner, "title");
                else {
                    if (
                        key === "offices" &&
                        inner &&
                        !Array.isArray(inner) &&
                        typeof inner === "object"
                    )
                        for (const office of Object.keys(inner)) push(office, "title");
                    walk(inner);
                }
            }
        }
    };
    if (titles) walk(front.data);
    return out;
}

/**
 * Every note of the tree: its address, names, frontmatter and text.
 *
 * @param {string} [root] - The content tree.
 * @returns {{file: string, rel: string, address: string|null, front: object|null, names: {name: string, kind: string}[], text: string, literature: boolean}[]}
 */
export function readTree(root = CONTENT, { titles = false } = {}) {
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
        const rel = path.relative(root, file).split(path.sep).join("/");
        out.push({
            file: path.relative(process.cwd(), file).split(path.sep).join("/"),
            rel,
            address: front?.shortcode && front?.type ? `${front.type}-${front.shortcode}` : null,
            front,
            names: front ? namesOf(front, titles) : [],
            text,
            literature: front?.type === "lore" && front?.subType === "literature",
        });
    }
    return out;
}

/** Whether a note falls in the page's scope. */
export function inScope(note, page, fixed) {
    if (!note.front || note.front.type === "folder" || !note.address) return false;
    if (fixed.has(note.address)) return true;
    const data = note.front.data ?? {};
    const lore = [].concat(data.lore ?? []);
    const tags = [].concat(note.front.tags ?? []);
    const parents = [].concat(data.parents ?? []);
    for (const { kind, values } of page.scope) {
        if (kind === "folder" && values.includes(data.packFolder)) return true;
        if (kind === "culture" && values.includes(data.culture)) return true;
        if (kind === "lore" && lore.some((l) => values.includes(l))) return true;
        if (kind === "parent" && parents.some((p) => values.includes(p))) return true;
        if (kind === "address" && values.includes(note.address)) return true;
        if (kind === "tag" && tags.some((t) => values.includes(t))) return true;
        if (kind === "path" && values.some((p) => note.rel.startsWith(p))) return true;
    }
    return false;
}

// ---------------------------------------------------------------------------
// The guard
// ---------------------------------------------------------------------------

/** Tags that stand in no tongue and take no sound check. */
const FREE_TAGS = new Set(["translation", "kept"]);

/**
 * Every finding over a page and the tree.
 *
 * @param {object} input
 * @param {string} input.lexFile - The page's path, relative to the working directory.
 * @param {string} input.lexText - The page.
 * @param {ReturnType<typeof readTree>} input.tree - The content tree.
 * @param {ReturnType<typeof loadEarth>|null} [input.earth] - The local Earth lists, or null to skip.
 * @param {object} [input.extra] - Extra checks: `wordChecks(word, page) => string[]` run on every word.
 * @returns {{findings: {file: string, text: string, offset: number|null, severity: string, message: string}[], page: object, missing: {name: string, address: string, kind: string}[]}}
 */
export function analyse({ lexFile, lexText, tree, earth = null, extra = {} }) {
    const page = readPage(lexText);
    const out = [];
    const add = (offset, severity, message, file = lexFile, text = lexText) =>
        out.push({ file, text, offset, severity, message });
    for (const p of page.problems) {
        if (typeof p === "string") add(null, "error", p);
        else add(p.offset, "error", p.message);
    }
    const tags = new Set(page.tongues.map((t) => t.tag));
    // A tongue the page states rules for: not a free tag, not an exonym.
    const ruleTags = new Set([...tags].filter((t) => !FREE_TAGS.has(t) && !t.startsWith("exonym")));
    const parentTag = [...ruleTags][0] ?? null;
    const fieldSet = new Set(page.fields);
    const classSet = new Set(page.classes);
    const byAddress = new Map(tree.filter((n) => n.address).map((n) => [n.address, n]));

    // 1. Words.
    const seen = new Map();
    const wordSet = new Map(); // tag -> Set of forms
    for (const w of page.words) {
        const tag = w.tongue ?? parentTag;
        if (!wordSet.has(tag)) wordSet.set(tag, new Set());
        wordSet.get(tag).add(lower(w.form));
    }
    for (const w of page.words) {
        const tag = w.tongue ?? parentTag;
        if (!w.form) {
            add(w.offset, "error", "a word row states no form in a code span");
            continue;
        }
        if (!fieldSet.has(w.field))
            add(
                w.offset,
                "error",
                `\`${w.form}\` stands under "${w.field}", which the Fields table does not list`,
            );
        if (!classSet.has(w.cls))
            add(
                w.offset,
                "error",
                `\`${w.form}\` has the class \`${w.cls}\`, which the Classes table does not list`,
            );
        if (!w.gloss || w.gloss === "—") add(w.offset, "error", `\`${w.form}\` carries no gloss`);
        if (!tags.has(tag))
            add(
                w.offset,
                "error",
                `\`${w.form}\` stands under \`${tag}\`, which is not a tongue the page declares`,
            );
        const key = `${tag}\u0000${lower(w.form)}`;
        if (seen.has(key)) add(w.offset, "error", `\`${w.form}\` is listed twice under ${tag}`);
        seen.set(key, w);
        for (const address of linked(w.attested)) {
            if (!byAddress.has(address))
                add(
                    w.offset,
                    "error",
                    `\`${w.form}\` is attested at ${address}, which no note carries`,
                );
        }
        if (ruleTags.has(tag)) {
            for (const p of soundProblems(respell(w.form, page.spellings), page, tag))
                add(w.offset, "error", `\`${w.form}\` ${p}`);
        }
        const built = builtForm(w.built, page);
        if (built) {
            for (const m of built.missing)
                add(
                    w.offset,
                    "error",
                    `\`${w.form}\` is built with \`${m}\`, a suffix the page does not list`,
                );
            for (const piece of ticked(w.built)) {
                const p = lower(piece);
                if (p.startsWith("-")) continue;
                const stem = p.endsWith("-") ? p : p;
                // A daughter builds on its own words and on the inherited stock.
                const bare = stem.replace(/-$/, "");
                const has = (t) => wordSet.get(t)?.has(stem) || wordSet.get(t)?.has(bare);
                const known =
                    has(tag) ||
                    has(parentTag) ||
                    page.family?.rows.some((r) => lower(r.parent) === bare);
                if (!known)
                    add(
                        w.offset,
                        "error",
                        `\`${w.form}\` is built from \`${piece}\`, which is no word or root of ${tag}`,
                    );
            }
            if (respell(built.made, page.spellings) !== respell(w.form, page.spellings)) {
                add(
                    w.offset,
                    "error",
                    `\`${w.form}\` does not recompute: its parts make \`${built.made}\``,
                );
            }
        }
        // A bound stem is no word, so only the words built on it are compared.
        // A hit on a word the setting already attests is the owner's to judge,
        // so it warns; a hit on a word this page coins is an error.
        if (earth && (earth.lists.size || earth.morphemes.length) && w.cls !== "stem") {
            const severity = linked(w.attested).length ? "warning" : "error";
            for (const hit of earthHits(w.form, earth))
                add(w.offset, severity, `\`${w.form}\` ${hit}`);
        }
        if (extra.wordChecks)
            for (const m of extra.wordChecks(w, page)) add(w.offset, "error", `\`${w.form}\` ${m}`);
    }

    // 2. The family.
    if (page.family) {
        for (const row of page.family.rows) {
            page.family.daughters.forEach((d, i) => {
                const cell = row.cells[i];
                if (!cell || cell === "—") return;
                const { form } = derive(row.parent, d.changes);
                if (lower(form) !== lower(cell)) {
                    add(
                        row.offset,
                        "error",
                        `${d.name} \`${cell}\` does not follow from \`${row.parent}\`: the changes make \`${form}\``,
                    );
                }
            });
            // The roots are the inherited stock the notes attest, so a hit warns.
            if (earth && (earth.lists.size || earth.morphemes.length)) {
                for (const hit of earthHits(row.parent, earth))
                    add(row.offset, "warning", `\`${row.parent}\` ${hit}`);
            }
        }
    }

    // 3. The register's coverage.
    const registered = new Map();
    for (const r of page.register) {
        for (const address of r.addresses) {
            const key = `${address}\u0000${fold(r.name)}`;
            if (registered.has(key))
                add(r.offset, "error", `${r.name} is registered twice under ${address}`);
            registered.set(key, r);
        }
        if (!r.addresses.length) add(r.offset, "error", `${r.name} names no note`);
        for (const address of r.addresses) {
            const note = byAddress.get(address);
            if (!note) {
                add(r.offset, "error", `${r.name} names ${address}, which no note carries`);
                continue;
            }
            if (!note.names.some((n) => fold(n.name) === fold(r.name))) {
                add(
                    r.offset,
                    "error",
                    `${r.name} is registered under ${address}, whose note does not carry that name`,
                );
            }
        }
        const tongueTag = r.tongue.startsWith("exonym:") ? "exonym" : r.tongue;
        if (!tags.has(r.tongue) && !FREE_TAGS.has(r.tongue) && tongueTag !== "exonym") {
            add(
                r.offset,
                "error",
                `${r.name} carries the tag \`${r.tongue}\`, which the Tongues table does not declare`,
            );
            continue;
        }
        // 4. A name in a tongue.
        if (ruleTags.has(r.tongue)) {
            const read = respell(r.name, page.spellings);
            for (const part of read.split(/[\s'’-]+/).filter(Boolean)) {
                for (const p of soundProblems(part, page, r.tongue))
                    add(r.offset, "warning", `${r.name} ${p}`);
            }
            const built = builtForm(r.built, page);
            if (!built)
                add(
                    r.offset,
                    "warning",
                    `${r.name} is a ${r.tongue} name the lexicon does not reach`,
                );
            else if (
                fold(built.made) !== fold(r.name).replace(/[\s'’]/g, "") &&
                lower(built.made) !== lower(r.name)
            ) {
                add(
                    r.offset,
                    "error",
                    `${r.name} does not recompute: its parts make \`${built.made}\``,
                );
            }
        }
    }
    const fixed = new Set([lexFile, ...page.tongues.map((t) => t.address).filter(Boolean)]);
    const lexNote = tree.find((n) => path.resolve(n.file) === path.resolve(lexFile));
    if (lexNote?.address) fixed.add(lexNote.address);
    const missing = [];
    for (const note of tree) {
        if (!inScope(note, page, fixed)) continue;
        for (const { name, kind } of note.names) {
            if (registered.has(`${note.address}\u0000${fold(name)}`)) continue;
            missing.push({ name, address: note.address, kind, note });
            const offset = Math.max(0, note.text.indexOf(name));
            add(
                offset,
                "error",
                `${name} is in scope and not in the register under ${note.address}`,
                note.file,
                note.text,
            );
        }
    }

    // 5. Retired names.
    for (const note of tree) {
        if (note.literature || !page.retired.length) continue;
        const own = path.resolve(note.file) === path.resolve(lexFile);
        const body = own ? lexText : note.text;
        const skip = own && page.retiredAt ? [page.retiredAt] : [];
        for (const hit of retiredIn(body, page.retired, skip)) {
            const instead =
                hit.instead ?
                    `the setting writes \`${hit.instead}\``
                :   "and the setting writes none in its place";
            add(
                hit.at,
                "error",
                `\`${hit.written}\` is a retired form; ${instead}`,
                own ? lexFile : note.file,
                body,
            );
        }
    }

    return { findings: out, page, missing };
}

/** A finding as a line: path, line and column, severity, message. */
export function format(f) {
    if (f.offset === null || f.offset === undefined)
        return `${f.file}: ${f.severity}: ${f.message}`;
    const { line, column } = lineColumn(f.text, f.offset);
    return `${f.file}:${line}:${column}: ${f.severity}: ${f.message}`;
}

/**
 * The guard's main: read the page and the tree, print findings, exit 1 on an
 * error. `--missing` prints register rows for every name in scope the register
 * lacks; `--check <word>...` holds loose words to the rules.
 *
 * @param {{lexicon: string, label: string, tagFor?: (note: object, page: object) => string, extra?: object}} spec
 * @param {string[]} [argv]
 */
export function runGuard(spec, argv = process.argv.slice(2)) {
    const dirs = listDirs(argv);
    const earth = loadEarth(dirs);
    if (earth.lists.size === 0 && earth.morphemes.length === 0) {
        console.log(
            `${spec.label}: no Earth word lists in ${dirs.join(", ")}, Earth words not compared`,
        );
    }
    if (!fs.existsSync(spec.lexicon)) {
        console.error(`${spec.lexicon}: error: the lexicon page does not exist`);
        process.exitCode = 1;
        return;
    }
    const lexText = fs.readFileSync(spec.lexicon, "utf8");
    const at = argv.indexOf("--check");
    if (at !== -1) {
        const page = readPage(lexText);
        for (const word of argv.slice(at + 1).filter((w) => !w.startsWith("--"))) {
            const lines = [];
            for (const t of page.tongues) {
                const problems = soundProblems(respell(word, page.spellings), page, t.tag);
                lines.push(
                    `  ${t.tag}: ${problems.length ? problems.join("; ") : "keeps the sound rules"}`,
                );
            }
            for (const hit of earthHits(word, earth)) lines.push(`  ${hit}`);
            console.log(`${word}\n${lines.join("\n")}`);
        }
        return;
    }
    const tree = readTree(CONTENT, { titles: Boolean(spec.titles) });
    const { findings, page, missing } = analyse({
        lexFile: spec.lexicon,
        lexText,
        tree,
        earth,
        extra: spec.extra ?? {},
    });
    if (argv.includes("--missing")) {
        for (const m of missing) {
            const tag =
                spec.tagFor ? spec.tagFor(m.note, page) : (page.tongues[0]?.tag ?? "translation");
            const label = m.name.replace(/\|/g, "\\|");
            console.log(`| **${label}** | [[${m.address}\\|${label}]] | \`${tag}\` | — |`);
        }
        return;
    }
    for (const f of findings) console.error(format(f));
    const errors = findings.filter((f) => f.severity === "error").length;
    console.log(
        `${spec.label}: ${page.words.length} words, ${page.family?.rows.length ?? 0} roots, ${page.register.length} registered names, ${page.retired.length} retired; ${errors} error(s), ${findings.length - errors} warning(s).`,
    );
    if (errors) process.exitCode = 1;
}
