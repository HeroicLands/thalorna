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
 * An era is a row of a calendar note's `data.eras`, and the toolchain bounds and
 * selects it, so this guard says nothing about eras. A `stated` date gives an
 * event's year as a calendar writes it: `calendar` is the calendar note's
 * shortcode and `text` is a date in that calendar's default format, at whatever
 * precision it names (`1 AC`, `2378 ST`). It is read through package-build's own
 * date parser, so there is one conversion between a calendar and the axis.
 *
 * The rules:
 *
 * 1. **`no-year-zero`** — no `when` or `until` in a history note is year 0.
 * 2. **`depth-is-closed`** — `depth` is `world` or `region`.
 * 3. **`stated-calendar-resolves`** — a `stated.calendar` names a calendar note.
 * 4. **`stated-agrees`** — a `stated.text` carrying a year reads, in that
 *    calendar, as the year `when` gives. A text with no digit in it states no
 *    date and is not read.
 * 5. **`one-date-per-event`** — two entries that give an event the same name
 *    under `names` give it the same `when`.
 * 6. **`follows-in-order`** — an event that `follows` another note's event is
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
import { calendarEras, parseNoteDate } from "@heroiclands/package-build/engine/note-dates";
import { reckoningContext } from "@heroiclands/package-build/engine/reckoning-markers";
import YAML from "yaml";

/** The content tree read when no other is given. */
export const CONTENT = "assets/content";

/** The `depth` values an event may carry. */
export const DEPTHS = Object.freeze(["world", "region"]);

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
 * Every history note, every calendar note and the world's place note in a tree.
 *
 * @param {string} [content] - The content tree.
 * @returns {{history: object[], calendars: object[], world: object[]}}
 */
export function readTree(content = CONTENT) {
    const history = [];
    const calendars = [];
    const world = [];
    for (const file of markdownFiles(content)) {
        const note = readNote(file);
        if (!note) continue;
        const entry = { file, address: `${note.fm.type}-${note.fm.shortcode}`, ...note };
        if (note.fm.type === "lore" && note.fm.subType === "history") history.push(entry);
        if (note.fm.type === "lore" && note.fm.subType === "calendar") calendars.push(entry);
        if (note.fm.type === "place" && note.fm.data?.year?.days) world.push(entry);
    }
    return { history, calendars, world };
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
export function check({ history, calendars, world = [] }) {
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
