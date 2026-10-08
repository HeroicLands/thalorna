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
