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
 * The chronology guard over every history note.
 *
 * A history note is a `lore` note with `subType: history`. Its dated events are
 * the entries of `data.events`, each with a `when` in the canonical year of the
 * Common Calendar: signed, negative for a year Before the Founding, and with no
 * year zero, because 1 BF is followed directly by 1 AF.
 *
 * An **era** is a history note whose event entry carries `kind: era`; its span
 * runs from that entry's `when` to its `until`. A `when` of `unknown` opens the
 * span with no lower bound, and an era with no `until` runs to the present. An
 * event names the era it falls in with `era: lore-<shortcode>`.
 *
 * Everything the guard checks is read from the notes themselves: the eras, the
 * calendars a `stated` date is written in, and the names an event is known by.
 * There is no second list to drift from them. The rules:
 *
 * 1. **`no-year-zero`** — no `when` or `until` in a history note is year 0.
 * 2. **`depth-is-closed`** — `depth` is `world` or `region`.
 * 3. **`stated-calendar-resolves`** — a `stated.calendar` names a calendar note
 *    by its shortcode, one of its eras' shortcodes, or one of its eras' names
 *    with the article and diacritics set aside.
 * 4. **`stated-agrees`** — a `stated.text` carrying a year converts, through
 *    that calendar's `epoch` and with no year zero, to the year `when` gives. A
 *    text with no year in it states no date and is not read.
 * 5. **`era-resolves`** — an `era` names a history note that declares an era.
 * 6. **`within-era`** — an event's `when`, and its `until` where it has one,
 *    lie inside the span of the era it names.
 * 7. **`era-is-ordered`** — an era's `when` is not later than its `until`.
 * 8. **`one-date-per-event`** — two entries that give an event the same name
 *    under `names` give it the same `when`.
 * 9. **`follows-in-order`** — an event that `follows` another note's event is
 *    not dated before the earliest event of that note.
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
import YAML from "yaml";

/** The content tree read when no other is given. */
export const CONTENT = "assets/content";

/** The `depth` values an event may carry. */
export const DEPTHS = Object.freeze(["world", "region"]);

/** The present year, the end of an era with no `until`. */
const PRESENT = 720;

/** A finding, in the shape every diagnostic in this repository takes. */
export function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * The canonical year a date names, or null where it names none.
 *
 * `~-300`, `-480`, `"720.136"` and `315` all name a year; `unknown` and an
 * absent value name none.
 *
 * @param {unknown} value - A `when` or `until` as YAML read it.
 * @returns {number|null} The signed year.
 */
export function yearOf(value) {
    if (value === null || value === undefined) return null;
    const match = String(value)
        .trim()
        .match(/^~?\s*(-?\d+)(?:\.\d+)?(?::\d+)?$/u);
    return match ? Number(match[1]) : null;
}

/**
 * Step a canonical year forward by a count of years, with no year zero.
 *
 * @param {number} from - A signed canonical year, never 0.
 * @param {number} count - Years to step, zero or more.
 * @returns {number} The year reached.
 */
export function stepYears(from, count) {
    const reached = from + count;
    return from < 0 && reached >= 0 ? reached + 1 : reached;
}

/**
 * The canonical year of a calendar's year, through the calendar's epoch.
 *
 * Calendar year 1 is the epoch's canonical year, and the count runs forward
 * from it with no year zero on the canonical axis.
 *
 * @param {number} epochYear - The canonical year of calendar year 1.
 * @param {number} calendarYear - The year as the calendar writes it.
 * @returns {number} The signed canonical year.
 */
export function canonicalYear(epochYear, calendarYear) {
    return stepYears(epochYear, calendarYear - 1);
}

/** A name with its article, case, diacritics and punctuation set aside. */
export function normalized(name) {
    return String(name ?? "")
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/^the\s+/u, "")
        .replace(/[^a-z0-9]/gu, "");
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
 * @returns {{fm: object, lineOf: (keyPath: (string|number)[]) => number|null}|null}
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
    return { fm, lineOf };
}

/**
 * Every history note and every calendar note in a content tree.
 *
 * @param {string} [content] - The content tree.
 * @returns {{history: object[], calendars: object[]}}
 */
export function readTree(content = CONTENT) {
    const history = [];
    const calendars = [];
    for (const file of markdownFiles(content)) {
        const note = readNote(file);
        if (!note || note.fm.type !== "lore") continue;
        const entry = { file, address: `lore-${note.fm.shortcode}`, ...note };
        if (note.fm.subType === "history") history.push(entry);
        if (note.fm.subType === "calendar") calendars.push(entry);
    }
    return { history, calendars };
}

/** Each calendar note's epoch year, keyed by every key that resolves to it. */
function calendarKeys(calendars) {
    const keys = new Map();
    for (const calendar of calendars) {
        const epoch = yearOf(calendar.fm.data?.epoch);
        if (epoch === null) continue;
        const add = (key) => key && keys.set(normalized(key), { epoch, calendar });
        add(calendar.fm.shortcode);
        for (const era of calendar.fm.data?.eras ?? []) {
            add(era.shortcode);
            add(era.name);
        }
    }
    return keys;
}

/** The first year a `stated.text` carries, or null. */
function statedYear(text) {
    const match = String(text ?? "").match(/\d[\d,]*/u);
    return match ? Number(match[0].replace(/,/gu, "")) : null;
}

/**
 * Check a content tree's chronology.
 *
 * @param {{history: object[], calendars: object[]}} tree - From {@link readTree}.
 * @returns {string[]} Findings, one per line.
 */
export function check({ history, calendars }) {
    const findings = [];
    const keys = calendarKeys(calendars);
    const relative = (file) => path.relative(process.cwd(), file) || file;
    const report = (note, keyPath, message) =>
        findings.push(finding(relative(note.file), note.lineOf(keyPath), null, "error", message));

    const events = [];
    for (const note of history) {
        const list = note.fm.data?.events;
        if (!Array.isArray(list)) continue;
        list.forEach((row, index) => {
            if (row && typeof row === "object") events.push({ note, row, index });
        });
    }

    const eras = new Map();
    for (const { note, row, index } of events) {
        if (row.kind !== "era") continue;
        const from = String(row.when).trim() === "unknown" ? -Infinity : yearOf(row.when);
        const to = row.until === undefined ? PRESENT : yearOf(row.until);
        eras.set(note.address, { from, to });
        if (from !== null && to !== null && from > to) {
            report(
                note,
                ["data", "events", index, "until"],
                `era-is-ordered: the era runs from ${row.when} to ${row.until}, which ends before it begins`,
            );
        }
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
        const until = yearOf(row.until);

        for (const [field, year] of [
            ["when", when],
            ["until", until],
        ]) {
            if (year === 0) {
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
            const resolved = keys.get(normalized(row.stated.calendar));
            if (!resolved) {
                report(
                    note,
                    at("stated", "calendar"),
                    `stated-calendar-resolves: \`${row.stated.calendar}\` names no calendar note or calendar era`,
                );
            } else {
                const year = statedYear(row.stated.text);
                if (year !== null && when !== null) {
                    const expected = canonicalYear(resolved.epoch, year);
                    if (expected !== when) {
                        report(
                            note,
                            at("when"),
                            `stated-agrees: "${row.stated.text}" is ${expected} in the Common Calendar, but \`when\` gives ${row.when}`,
                        );
                    }
                }
            }
        }

        if (row.era !== undefined) {
            const era = eras.get(row.era);
            if (!era) {
                report(
                    note,
                    at("era"),
                    `era-resolves: \`era: ${row.era}\` names no history note that declares an era`,
                );
            } else {
                for (const [field, year] of [
                    ["when", when],
                    ["until", until],
                ]) {
                    if (year === null) continue;
                    if (year < era.from || year > era.to) {
                        report(
                            note,
                            at(field),
                            `within-era: \`${field}: ${row[field]}\` lies outside ${row.era}, which runs from ${era.from} to ${era.to}`,
                        );
                    }
                }
            }
        }

        for (const name of row.names ?? []) {
            const key = normalized(name?.name);
            if (!key || when === null) continue;
            const prior = named.get(key);
            if (!prior) named.set(key, { note, when, row, name: name.name });
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
    return findings;
}

/** Run the guard over a content tree and print what it finds. */
export function main(content = CONTENT) {
    const tree = readTree(content);
    const findings = check(tree);
    for (const line of findings) console.error(line);
    console.log(
        `chronology: ${tree.history.length} history notes, ${findings.length} finding${findings.length === 1 ? "" : "s"}`,
    );
    return findings.length === 0 ? 0 : 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main(process.argv[2] ?? CONTENT);
}
