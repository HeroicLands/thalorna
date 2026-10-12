/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The chronology guard over every dated event.
 *
 * A dated event is an entry of a `lore` note's `data.events`: most are on
 * history notes, and a few on law or custom notes that record their own
 * origins. Each entry has a `when` in the canonical year of the
 * Common Calendar: signed, negative for a year Before the Founding, and with no
 * year zero, because 1 BF is followed directly by 1 AF.
 *
 * An era is a row of a calendar note's `data.eras`, and the toolchain bounds and
 * selects it, so this guard says nothing about eras. A `stated` date gives an
 * event's year as a calendar writes it: `calendar` is the calendar note's
 * shortcode and `text` is a date in that calendar's default format, at whatever
 * precision it names (`1 AC`, `2378 ST`). It is read through package-build's own
 * date parser, so there is one conversion between a calendar and the axis.
 *
 * The rules:
 *
 * 1. **`no-year-zero`** — no `when` or `until` is year 0.
 * 2. **`depth-is-closed`** — `depth` is `world` or `region`.
 * 3. **`stated-calendar-resolves`** — a `stated.calendar` names a calendar note.
 * 4. **`stated-agrees`** — a `stated.text` carrying a year reads, in that
 *    calendar, as the year `when` gives. A text with no digit in it states no
 *    date and is not read.
 * 5. **`one-date-per-event`** — two entries that give an event the same name
 *    under `names` give it the same `when`.
 * 6. **`follows-in-order`** — an event that `follows` another note's event is
 *    not dated before the earliest event of that note.
 * 7. **`qet-telgu-pair`** — a year of the Qet Telgu written beside a western
 *    year in prose (`1006 ST (1105 BF)`, `2378 ST, 268 AF`) converts to it: an AF
 *    year is the count less 2,110, and a BF year is 2,111 less the count, because
 *    the western reckoning has no year zero.
 * 8. **`throne-numeral`** — the king-list numbers a throne name across its whole
 *    length, so each throne name's numerals rise with the crowning year, a bare
 *    name counting as I. The list is read from the Gar-Aûu note's tables: a Near
 *    Count row gives its crowning year, and a Middle Count abstract row gives its
 *    stretch, with a name's own `crowned N` where it states one.
 * 9. **`throne-listed`** — a throne name written with a numeral anywhere in the
 *    content tree is a reign the king-list holds.
 * 10. **`eras-agree`** — a calendar that counts its years straight through and
 *     divides them into ages (its `std` format prints `Y`, and it has two or
 *     more eras with a numeric `start`) states each age three times, and the
 *     three agree: the `data.eras` row, the row of the body's ages table (the
 *     table whose first header cell is `Age`), and the description of the lore
 *     note that table row links. The table row's years open with the era's
 *     `start` and close with the next era's `start`, or say `present` for the
 *     last; the linked note exists, and its description names the same opening
 *     year and, except for the last age, the same closing year. An era with no
 *     table row is reported, so an age cannot be added to the rows and left out
 *     of the body. The toolchain itself refuses a `stated` date whose age mark
 *     does not cover its year, so that case needs no rule here.
 * 11. **`midhalion-era`** — a history note under the Mídhalión folder carries
 *     exactly one tag naming an age of the Vylarian Ages calendar, and every
 *     `when` on the note falls inside that age's span. An age runs from its
 *     `start` to the year before the next age's `start`; the age with no start
 *     covers every year Before the Founding.
 * 12. **`follows-resolves`** — every `follows` target of such a note names a
 *     note in the tree and, where it is anchored with `#`, an event id that
 *     note holds.
 * 13. **`until-follows-when`** — an event's `until` is not earlier than its
 *     `when`, so a span runs forward.
 * 14. **`ago-agrees`** — a prose phrase such as "six centuries ago" or "sixty
 *     years ago" counts back from the present year (the continent note's "current
 *     year is N AF"). Where the phrase has an AF or BF year within its clause
 *     (`312 BF ... five centuries ago`), the elapsed time agrees: a count of years
 *     is exact to a year, or to a tenth when the clause hedges it (about, some,
 *     nearly, roughly, almost, around), and a count of centuries is within fifty
 *     years. Otherwise, for a span of a century or more, the dated events of every
 *     note its sentence links include one within a fifth of the span (at least ten
 *     years) of where the phrase points; a sentence with no such event is not
 *     read. A count is read as digits or a number word through ninety, and any
 *     other count is passed over.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory, with a field dropped rather
 * than guessed. Both severities go to stderr and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { calendarEras, parseNoteDate } from "@heroiclands/package-build/engine/note-dates";
import { reckoningContext } from "@heroiclands/package-build/engine/reckoning-markers";
import YAML from "yaml";

/** The content tree read when no other is given. */
export const CONTENT = "assets/content";

/** The `depth` values an event may carry. */
export const DEPTHS = Object.freeze(["world", "region"]);

/** The note that holds the Khelâthi king-list. */
export const KING_LIST = "garauu";

/**
 * A Khelâthi throne name: a name element, the seam, and a god's house-form, with
 * an optional numeral after it.
 */
const THRONE =
    /(?<![\p{L}'])([A-Z][a-zâêîôû]+'(?:el')?(?:Uqa|Qar|Retha|Psaqa|Uzner))(?![\p{L}'])(?:\s+([IVXL]+)\b)?/gu;

/** A Qet Telgu year beside a western one, in either order, within a clause. */
const PAIR =
    /\b(\d{1,2},?\d{3}|\d{1,3}) ST\b[^.;\n]{0,40}?\b(\d{1,4}) (AF|BF)\b|\b(\d{1,4}) (AF|BF)\b[^.;\n]{0,40}?\b(\d{1,2},?\d{3}|\d{1,3}) ST\b/gu;

/** A Roman numeral's value. */
export function roman(text) {
    const value = { I: 1, V: 5, X: 10, L: 50 };
    let total = 0;
    for (let i = 0; i < text.length; i += 1) {
        const here = value[text[i]];
        const next = value[text[i + 1]] ?? 0;
        total += here < next ? -here : here;
    }
    return total;
}

/** The calendar whose eras are the ages of the Vylarian Empire. */
export const VYLARIAN_AGES = "vylariages";

/** The path segment that puts a history note under the Mídhalión folder. */
const MIDHALION = `${path.sep}Midhalion${path.sep}`;

/** The content package the tree belongs to. */
const PACKAGE = "thalorna";

/** A finding, in the shape every diagnostic in this repository takes. */
export function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * The canonical year a date names, or null where it names none.
 *
 * @param {unknown} value - A `when` or `until` as YAML read it.
 * @returns {number|null} The signed year as written.
 */
export function yearOf(value) {
    if (value === null || value === undefined) return null;
    const match = String(value)
        .trim()
        .match(/^~?\s*(-?\d+)(?:\.\d+)?(?::\d+)?$/u);
    return match ? Number(match[1]) : null;
}

/**
 * The years between a year of the Common Calendar and a present year.
 *
 * @param {number} year - Signed, with no year zero.
 * @param {number} present - The present year.
 * @returns {number} Whole years elapsed.
 */
export function elapsed(year, present) {
    return present - year - (year < 0 ? 1 : 0);
}

/** Every `.md` file under a directory, sorted. */
function markdownFiles(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(full));
        else if (entry.name.endsWith(".md")) out.push(full);
    }
    return out.sort();
}

/**
 * A note's frontmatter, parsed, with the line of any path in it.
 *
 * @param {string} file - The note's path.
 * @returns {{fm: object, raw: string, lineOf: (keyPath: (string|number)[]) => number|null}|null}
 */
function readNote(file) {
    const raw = fs.readFileSync(file, "utf8");
    const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/u);
    if (!fence) return null;
    const start = raw.indexOf(fence[1]);
    let doc;
    try {
        doc = YAML.parseDocument(fence[1]);
    } catch {
        return null;
    }
    const fm = doc.toJS() ?? {};
    const lineOf = (keyPath) => {
        const node = doc.getIn(keyPath, true);
        const offset = node?.range?.[0];
        if (offset === undefined) return null;
        return raw.slice(0, start + offset).split("\n").length;
    };
    return { fm, raw, lineOf };
}

/**
 * Every lore note with events, every calendar note and the world's place note.
 *
 * @param {string} [content] - The content tree.
 * @returns {{history: object[], calendars: object[], world: object[]}}
 */
export function readTree(content = CONTENT) {
    const history = [];
    const calendars = [];
    const world = [];
    const prose = [];
    for (const file of markdownFiles(content)) {
        const note = readNote(file);
        if (!note) continue;
        const entry = { file, address: `${note.fm.type}-${note.fm.shortcode}`, ...note };
        prose.push(entry);
        if (note.fm.type === "lore" && Array.isArray(note.fm.data?.events)) history.push(entry);
        if (note.fm.type === "lore" && note.fm.subType === "calendar") calendars.push(entry);
        if (note.fm.type === "place" && note.fm.data?.year?.days) world.push(entry);
    }
    return { history, calendars, world, prose };
}

/** The 1-based line and column of an offset in a text. */
function position(text, offset) {
    const before = text.slice(0, offset).split("\n");
    return { line: before.length, column: before.at(-1).length + 1 };
}

/**
 * Every reign the king-list's tables hold, in the order of the count.
 *
 * @param {string} raw - The Gar-Aûu note.
 * @returns {{name: string, numeral: number, written: string, year: number, offset: number}[]}
 */
export function kingList(raw) {
    const reigns = [];
    let offset = 0;
    for (const line of raw.split("\n")) {
        const here = offset;
        offset += line.length + 1;
        if (!line.trim().startsWith("|")) continue;
        const cells = line.split("|").slice(1, -1);
        const stretch = cells[0]?.trim().match(/^(\d+)\s*[–-]\s*\d+$/u);
        const crowned = cells.map((cell) => cell.trim()).find((cell) => /^\d{3,4}$/u.test(cell));
        if (!stretch && !crowned) continue;
        let order = 0;
        for (const match of line.matchAll(THRONE)) {
            const after = line.slice(
                match.index + match[0].length,
                match.index + match[0].length + 40,
            );
            const own = after.match(/^\**\s*\(crowned (\d+)/u);
            const year =
                own ? Number(own[1])
                : stretch ? Number(stretch[1]) + order / 1000
                : Number(crowned);
            order += 1;
            reigns.push({
                name: match[1],
                numeral: match[2] ? roman(match[2]) : 1,
                written: match[0],
                year,
                offset: here + match.index,
            });
        }
    }
    return reigns.sort((a, b) => a.year - b.year);
}

/**
 * The Khelâthi findings: Qet Telgu pairs in prose, and the king-list's numerals.
 *
 * @param {object[]} prose - Every note, from {@link readTree}.
 * @param {(file: string) => string} relative - A path as the finding writes it.
 * @returns {string[]} Findings.
 */
export function checkKhelathi(prose, relative) {
    const findings = [];
    for (const note of prose) {
        for (const match of note.raw.matchAll(PAIR)) {
            const count = Number((match[1] ?? match[6]).replace(",", ""));
            const year = Number(match[2] ?? match[4]);
            const side = match[3] ?? match[5];
            const expected = side === "AF" ? count - 2110 : 2111 - count;
            if (expected === year && expected > 0) continue;
            const { line, column } = position(note.raw, match.index);
            const right = count > 2110 ? `${count - 2110} AF` : `${2111 - count} BF`;
            findings.push(
                finding(
                    relative(note.file),
                    line,
                    column,
                    "error",
                    `qet-telgu-pair: ${count} ST is ${right}, not ${year} ${side}`,
                ),
            );
        }
    }

    const list = prose.find((note) => note.fm?.shortcode === KING_LIST);
    if (!list) return findings;
    const reigns = kingList(list.raw);
    const last = new Map();
    for (const reign of reigns) {
        const prior = last.get(reign.name);
        if (prior && reign.numeral <= prior.numeral) {
            const { line, column } = position(list.raw, reign.offset);
            findings.push(
                finding(
                    relative(list.file),
                    line,
                    column,
                    "error",
                    `throne-numeral: ${reign.written} is crowned in ${Math.floor(reign.year)} ST, after ${prior.written} in ${Math.floor(prior.year)} ST, so its numeral must be higher`,
                ),
            );
        }
        last.set(reign.name, reign);
    }

    const held = new Set(reigns.map((reign) => `${reign.name} ${reign.numeral}`));
    for (const note of prose) {
        for (const match of note.raw.matchAll(THRONE)) {
            if (!match[2] || held.has(`${match[1]} ${roman(match[2])}`)) continue;
            const { line, column } = position(note.raw, match.index);
            findings.push(
                finding(
                    relative(note.file),
                    line,
                    column,
                    "error",
                    `throne-listed: ${match[0]} is no reign the king-list in ${relative(list.file)} holds`,
                ),
            );
        }
    }
    return findings;
}

/**
 * The ages table of a calendar note's body: the rows of the first table whose
 * first header cell is `Age`, each with its name, its linked address and the
 * text of its years cell.
 *
 * @param {string} raw - The calendar note.
 * @returns {{name: string, link: string|null, years: string, offset: number}[]}
 */
export function agesTable(raw) {
    const rows = [];
    let offset = 0;
    let inTable = false;
    let yearsColumn = -1;
    for (const line of raw.split("\n")) {
        const here = offset;
        offset += line.length + 1;
        if (!line.trim().startsWith("|")) {
            if (inTable) break;
            continue;
        }
        const cells = line
            .split(/(?<!\\)\|/u)
            .slice(1, -1)
            .map((cell) => cell.trim());
        if (!inTable) {
            if (cells[0]?.toLowerCase() !== "age") continue;
            inTable = true;
            yearsColumn = cells.findIndex((cell) => /^its years\b/iu.test(cell));
            continue;
        }
        if (/^:?-+:?$/u.test(cells[0] ?? "")) continue;
        const link = cells[0].match(/^\[\[([a-z]+-[a-z0-9]+)\\?\|([^\]]+)\]\]$/u);
        rows.push({
            name: link ? link[2] : cells[0].replace(/\*\*/gu, ""),
            link: link ? link[1] : null,
            years: yearsColumn === -1 ? "" : (cells[yearsColumn] ?? ""),
            offset: here,
        });
    }
    return rows;
}

/** Every whole number written in a text, in order. */
function numbersIn(text) {
    return [...String(text).matchAll(/\d[\d,]*/gu)].map((match) =>
        Number(match[0].replace(/,/gu, "")),
    );
}

/**
 * The eras findings: a straight-count calendar's ages agree with its body table
 * and the notes the table links. A calendar with no body has no table to agree with
 * and is skipped.
 *
 * @param {object[]} calendars - Every calendar note, from {@link readTree}.
 * @param {object[]} prose - Every note, from {@link readTree}.
 * @param {(file: string) => string} relative - A path as the finding writes it.
 * @returns {string[]} Findings.
 */
export function checkEras(calendars, prose, relative) {
    const findings = [];
    const notes = new Map(prose.map((note) => [note.address, note]));
    for (const calendar of calendars) {
        const std = String(calendar.fm.data?.formats?.std ?? "");
        if (/\[yearInEra/u.test(std) || !/\bY\b|YYYY/u.test(std)) continue;
        if (typeof calendar.raw !== "string") continue;
        const eras = (calendar.fm.data?.eras ?? [])
            .map((row, index) => ({ ...row, index }))
            .filter((row) => Number.isInteger(row.start) && row.start >= 1)
            .sort((a, b) => a.start - b.start);
        if (eras.length < 2) continue;
        const table = agesTable(calendar.raw);
        const file = relative(calendar.file);
        eras.forEach((era, order) => {
            const next = eras[order + 1];
            const row = table.find((entry) => entry.name === era.name);
            const at = calendar.lineOf(["data", "eras", era.index, "start"]);
            if (!row) {
                findings.push(
                    finding(
                        file,
                        at,
                        null,
                        "error",
                        `eras-agree: the era "${era.name}" (start ${era.start}) has no row in the ages table of the note's body`,
                    ),
                );
                return;
            }
            const { line } = position(calendar.raw, row.offset);
            const years = numbersIn(row.years);
            if (years[0] !== era.start) {
                findings.push(
                    finding(
                        file,
                        line,
                        null,
                        "error",
                        `eras-agree: the ages table opens "${era.name}" at ${years[0] ?? "no year"}, and its era row starts it at ${era.start}`,
                    ),
                );
            }
            if (next && years.at(-1) !== next.start) {
                findings.push(
                    finding(
                        file,
                        line,
                        null,
                        "error",
                        `eras-agree: the ages table closes "${era.name}" at ${years.at(-1) ?? "no year"}, and the next era row, "${next.name}", starts at ${next.start}`,
                    ),
                );
            }
            if (!next && !/\bpresent\b/iu.test(row.years)) {
                findings.push(
                    finding(
                        file,
                        line,
                        null,
                        "error",
                        `eras-agree: the ages table closes "${era.name}", the last era, without saying it runs to the present`,
                    ),
                );
            }
            if (!row.link) return;
            const linked = notes.get(row.link);
            if (!linked) {
                findings.push(
                    finding(
                        file,
                        line,
                        null,
                        "error",
                        `eras-agree: the ages table links "${era.name}" to ${row.link}, which names no note`,
                    ),
                );
                return;
            }
            const stated = numbersIn(linked.fm.description ?? "");
            const wanted = next ? [era.start, next.start] : [era.start];
            const missing = wanted.filter((year) => !stated.includes(year));
            if (missing.length) {
                findings.push(
                    finding(
                        relative(linked.file),
                        linked.lineOf(["description"]),
                        null,
                        "error",
                        `eras-agree: the description of ${row.link} does not name ${missing.join(" or ")}, the ${missing.length === 2 ? "years" : "year"} the calendar ${file} gives "${era.name}"`,
                    ),
                );
            }
        });
    }
    return findings;
}

const SMALL = {
    a: 1,
    an: 1,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
};

/** "<number> centuries|[hundred] years|century ago", as the sentence writes it; a compound count ("nine hundred and sixty") is passed over. */
const AGO = new RegExp(
    `(?<![\\w,-])(\\d[\\d,]*|(?<!(?:hundred|thousand|and)\\s)(?:${Object.keys(SMALL).join("|")}))(?:\\s+(hundred))?\\s+(centur(?:y|ies)|years?)\\s+ago\\b`,
    "giu",
);

/** A count of years that a clause hedges. */
const HEDGE = /\b(?:about|some|nearly|roughly|almost|around)\b/iu;

/** The farthest a stated year may sit from its "ago" phrase, within one clause. */
const REACH = 160;

/** The present year a continent note states, or null where none does. */
export function presentYear(prose) {
    for (const note of prose) {
        const match = note.raw?.match(/current year is (\d+) AF/u);
        if (match) return Number(match[1]);
    }
    return null;
}

/**
 * Every "N units ago" phrase in a note, with the years it spans, the addresses
 * its sentence links (empty inside the frontmatter), the AF and BF years its
 * clause states within reach, and its position.
 *
 * @param {string} raw - The note.
 * @returns {{text: string, span: number, links: string[], stated: {year: number, text: string, hedged: boolean}[], offset: number}[]}
 */
export function agoPhrases(raw) {
    const fence = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/u);
    const from = fence ? fence[0].length : 0;
    const out = [];
    for (const match of raw.matchAll(AGO)) {
        const word = match[1].toLowerCase();
        const base = /^\d/u.test(word) ? Number(word.replace(/,/gu, "")) : SMALL[word];
        const span = base * (/^centur/iu.test(match[3]) || match[2] ? 100 : 1);
        const end = match.index + match[0].length;

        const clauseStart = Math.max(
            raw.lastIndexOf(".", match.index),
            raw.lastIndexOf(";", match.index),
            raw.lastIndexOf("\n", match.index),
        );
        const clauseStops = [".", ";", "\n"]
            .map((mark) => raw.indexOf(mark, end))
            .filter((at) => at >= 0);
        const clauseEnd = clauseStops.length ? Math.min(...clauseStops) : raw.length;
        const clause = raw.slice(clauseStart + 1, clauseEnd);
        const stated = [];
        for (const one of clause.matchAll(/\b(\d{1,4}) (AF|BF)\b/gu)) {
            const at = clauseStart + 1 + one.index;
            const gap = at < match.index ? match.index - (at + one[0].length) : at - end;
            if (gap > REACH) continue;
            const near = raw.slice(
                Math.max(0, Math.min(at, match.index) - 40),
                Math.max(at + one[0].length, end),
            );
            stated.push({
                year: one[2] === "BF" ? -Number(one[1]) : Number(one[1]),
                text: one[0],
                hedged: HEDGE.test(near),
            });
        }

        let links = [];
        if (match.index >= from) {
            const body = raw.slice(from);
            const bodyAt = match.index - from;
            const start = Math.max(
                body.lastIndexOf(". ", bodyAt),
                body.lastIndexOf("\n\n", bodyAt),
                -1,
            );
            const stop = [body.indexOf(". ", bodyAt), body.indexOf("\n\n", bodyAt)]
                .filter((at) => at >= 0)
                .reduce((a, b) => Math.min(a, b), body.length);
            links = [...body.slice(start + 1, stop).matchAll(/\[\[([^\]|]+)/gu)].map((link) =>
                link[1].trim(),
            );
        }
        out.push({ text: match[0], span, links, stated, offset: match.index });
    }
    return out;
}

/**
 * The ago findings: each "N units ago" phrase agrees with the years its clause
 * states and, failing those, with a dated event its sentence links.
 *
 * @param {object[]} history - Notes with events, from {@link readTree}.
 * @param {object[]} prose - Every note, from {@link readTree}.
 * @param {(file: string) => string} relative - A path as the finding writes it.
 * @returns {string[]} Findings.
 */
export function checkAgo(history, prose, relative) {
    const present = presentYear(prose);
    if (present === null) return [];
    const years = new Map();
    for (const note of history) {
        const list = (note.fm.data.events ?? []).flatMap((row) =>
            [yearOf(row?.when), yearOf(row?.until)].filter((year) => year !== null),
        );
        if (list.length) years.set(note.address, list);
    }
    const findings = [];
    for (const note of prose) {
        if (typeof note.raw !== "string") continue;
        for (const phrase of agoPhrases(note.raw)) {
            const { line, column } = position(note.raw, phrase.offset);
            if (phrase.stated.length) {
                const centuries = /centur/iu.test(phrase.text) || /hundred/iu.test(phrase.text);
                for (const one of phrase.stated) {
                    const real = elapsed(one.year, present);
                    const slack =
                        centuries ? 50
                        : one.hedged ? Math.ceil(real / 10)
                        : 1;
                    if (Math.abs(phrase.span - real) <= slack) continue;
                    findings.push(
                        finding(
                            relative(note.file),
                            line,
                            column,
                            "error",
                            `ago-agrees: ${one.text} is ${real} years before ${present} AF, not ${phrase.text}`,
                        ),
                    );
                }
                continue;
            }
            if (phrase.span < 100) continue;
            const candidates = phrase.links
                .flatMap((address) => years.get(address) ?? [])
                .filter((year) => Number.isFinite(year));
            if (!candidates.length) continue;
            const slack = Math.max(phrase.span / 5, 10);
            const reaches = present - phrase.span;
            const agrees = candidates.some(
                (year) => Math.abs((year < 0 ? year + 1 : year) - reaches) <= slack,
            );
            if (agrees) continue;
            findings.push(
                finding(
                    relative(note.file),
                    line,
                    column,
                    "error",
                    `ago-agrees: "${phrase.text}" reaches back to about ${reaches} from the present ${present} AF, and the events it can mean are dated ${[...new Set(candidates)].join(", ")}`,
                ),
            );
        }
    }
    return findings;
}

/**
 * The ages of a calendar as spans of calendar years.
 *
 * @param {object} calendar - A calendar note from {@link readTree}.
 * @returns {{shortcode: string, from: number, to: number}[]} Each age's first and last year.
 */
export function ageSpans(calendar) {
    const rows = calendar.fm.data?.eras ?? [];
    const numeric = rows
        .filter((row) => Number.isInteger(row.start))
        .sort((a, b) => a.start - b.start);
    const spans = rows
        .filter((row) => row.start === null)
        .map((row) => ({ shortcode: row.shortcode, from: -Infinity, to: 0 }));
    numeric.forEach((row, index) => {
        const next = numeric[index + 1];
        spans.push({
            shortcode: row.shortcode,
            from: row.start,
            to: next ? next.start - 1 : Infinity,
        });
    });
    return spans;
}

/**
 * The Mídhalión history findings: each note's tagged age holds its dates, and
 * each `follows` target exists.
 *
 * @param {object[]} history - Notes with events, from {@link readTree}.
 * @param {object[]} calendars - Every calendar note.
 * @param {object[]} prose - Every note, for resolving `follows` targets.
 * @param {(file: string) => string} relative - A path as the finding writes it.
 * @returns {string[]} Findings.
 */
export function checkMidhalion(history, calendars, prose, relative) {
    const findings = [];
    const scoped = history.filter(
        (note) => note.fm.subType === "history" && path.normalize(note.file).includes(MIDHALION),
    );
    if (!scoped.length) return findings;
    const report = (note, keyPath, message) =>
        findings.push(
            finding(relative(note.file), note.lineOf?.(keyPath) ?? null, null, "error", message),
        );
    const ages = calendars.find((calendar) => calendar.fm.shortcode === VYLARIAN_AGES);
    const spans = ages ? ageSpans(ages) : [];
    const known = new Map(prose.concat(history).map((note) => [note.address, note]));

    for (const note of scoped) {
        const tags = Array.isArray(note.fm.tags) ? note.fm.tags : [];
        const named = spans.filter((span) => tags.includes(span.shortcode));
        const age = named.length === 1 ? named[0] : null;
        if (!ages) {
            report(note, ["tags"], `midhalion-era: no calendar has the shortcode ${VYLARIAN_AGES}`);
        } else if (named.length !== 1) {
            report(
                note,
                ["tags"],
                `midhalion-era: the note carries ${named.length} tags naming an age of ${VYLARIAN_AGES}, and needs exactly one`,
            );
        }
        (note.fm.data?.events ?? []).forEach((row, index) => {
            const at = (...rest) => ["data", "events", index, ...rest];
            const when = yearOf(row?.when);
            if (age && when !== null && (when < age.from || when > age.to)) {
                report(
                    note,
                    at("when"),
                    `midhalion-era: \`when: ${row.when}\` lies outside ${age.shortcode}, which runs ${age.from === -Infinity ? "before 1" : age.from} to ${age.to === Infinity ? "the present" : age.to}`,
                );
            }
            for (const link of row?.follows ?? []) {
                const [address, anchor] = String(link?.event ?? "").split("#");
                const target = known.get(address);
                const held = (target?.fm.data?.events ?? []).some((event) => event?.id === anchor);
                if (!target || (anchor && !held)) {
                    report(
                        note,
                        at("follows"),
                        `follows-resolves: \`${link?.event}\` names no ${target ? "event of that note" : "note"} in the tree`,
                    );
                }
            }
        });
    }
    return findings;
}

/** The axis year of an authored date, through package-build's parser. */
function axisYear(value, context) {
    const { date, findings } = parseNoteDate(value, { ...context, allowUnknown: true });
    const error = findings.find((one) => one.severity === "error");
    if (error) return { error: error.message };
    return { year: date?.canonicalYear ?? null };
}

/**
 * Check a content tree's chronology.
 *
 * @param {{history: object[], calendars: object[], world?: object[]}} tree - From {@link readTree}.
 * @returns {string[]} Findings, one per line.
 */
export function check({ history, calendars, world = [], prose = [] }) {
    const findings = [];
    const context = reckoningContext({
        notes: [...calendars, ...world].map(({ fm, file, raw }) => ({ fm, file, raw })),
        contentPackage: PACKAGE,
    });
    const shortcodes = new Set(calendars.map((calendar) => calendar.fm.shortcode));
    const relative = (file) => path.relative(process.cwd(), file) || file;
    const report = (note, keyPath, message) =>
        findings.push(
            finding(relative(note.file), note.lineOf?.(keyPath) ?? null, null, "error", message),
        );

    const events = [];
    for (const note of history) {
        const list = note.fm.data?.events;
        if (!Array.isArray(list)) continue;
        list.forEach((row, index) => {
            if (row && typeof row === "object") events.push({ note, row, index });
        });
    }

    const earliest = new Map();
    for (const { note, row } of events) {
        const year = yearOf(row.when);
        if (year === null) continue;
        earliest.set(note.address, Math.min(earliest.get(note.address) ?? Infinity, year));
    }

    const named = new Map();
    for (const { note, row, index } of events) {
        const at = (...rest) => ["data", "events", index, ...rest];
        const when = yearOf(row.when);

        for (const field of ["when", "until"]) {
            if (yearOf(row[field]) === 0) {
                report(
                    note,
                    at(field),
                    `no-year-zero: \`${field}: ${row[field]}\` names year 0, and the Common Calendar has none; 1 BF is -1 and 1 AF is 1`,
                );
            }
        }

        const until = yearOf(row.until);
        if (when !== null && until !== null && until < when) {
            report(
                note,
                at("until"),
                `until-follows-when: \`until: ${row.until}\` is earlier than \`when: ${row.when}\`, so the span runs backward`,
            );
        }

        if (row.depth !== undefined && !DEPTHS.includes(row.depth)) {
            report(
                note,
                at("depth"),
                `depth-is-closed: \`depth: ${row.depth}\` is not one of ${DEPTHS.join(", ")}`,
            );
        }

        if (row.stated && typeof row.stated === "object") {
            const calendar = String(row.stated.calendar ?? "");
            let resolves = shortcodes.has(calendar);
            if (resolves) {
                try {
                    calendarEras(calendar, context);
                } catch {
                    resolves = false;
                }
            }
            if (!resolves) {
                report(
                    note,
                    at("stated", "calendar"),
                    `stated-calendar-resolves: \`${calendar}\` names no calendar note`,
                );
            } else if (/\d/u.test(String(row.stated.text ?? "")) && when !== null) {
                const stated = axisYear(`datefrom ${calendar} ${row.stated.text}`, context);
                const given = axisYear(String(row.when).replace(/^~\s*/u, ""), context);
                if (stated.error) {
                    report(
                        note,
                        at("stated", "text"),
                        `stated-agrees: "${row.stated.text}" does not read as a date in ${calendar}: ${stated.error}`,
                    );
                } else if (stated.year !== given.year) {
                    report(
                        note,
                        at("when"),
                        `stated-agrees: "${row.stated.text}" in ${calendar} is not the year \`when: ${row.when}\` gives`,
                    );
                }
            }
        }

        for (const name of row.names ?? []) {
            const key = String(name?.name ?? "")
                .normalize("NFD")
                .replace(/\p{M}/gu, "")
                .toLowerCase()
                .replace(/^the\s+/u, "")
                .replace(/[^a-z0-9]/gu, "");
            if (!key || when === null) continue;
            const prior = named.get(key);
            if (!prior) named.set(key, { note, when, row });
            else if (prior.when !== when) {
                report(
                    note,
                    at("when"),
                    `one-date-per-event: "${name.name}" is dated ${row.when} here and ${prior.row.when} in ${relative(prior.note.file)}`,
                );
            }
        }

        for (const link of row.follows ?? []) {
            const before = earliest.get(link?.event);
            if (before === undefined || when === null) continue;
            if (when < before) {
                report(
                    note,
                    at("when"),
                    `follows-in-order: \`when: ${row.when}\` is earlier than ${link.event}, which this event follows and which begins in ${before}`,
                );
            }
        }
    }
    findings.push(...checkKhelathi(prose, relative));
    findings.push(...checkEras(calendars, prose, relative));
    findings.push(...checkAgo(history, prose, relative));
    findings.push(...checkMidhalion(history, calendars, prose, relative));
    return findings;
}

/** Run the guard over a content tree and print what it finds. */
export function main(content = CONTENT) {
    const tree = readTree(content);
    const findings = check(tree);
    for (const line of findings) console.error(line);
    console.log(
        `chronology: ${tree.history.length} notes with dated events, ${findings.length} finding${findings.length === 1 ? "" : "s"}`,
    );
    return findings.length === 0 ? 0 : 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main(process.argv[2] ?? CONTENT);
}
