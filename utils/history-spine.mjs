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
 * The guard over the spine of world history.
 *
 * A spine event is a note under `assets/content/Lore/History/` carrying an
 * `event:` block: a dated, typed statement of something that happened, which
 * more than one region's history has to account for. The block sits at the top
 * level rather than under `data:` because the toolchain's `lore` vocabulary
 * declares no `data:` keys and the container is closed; the top level is the
 * pass-through region, so the whole schema validates there today and moves to
 * `data:` as one scripted edit per note when a note type declares it.
 *
 * Nothing in the toolchain reads an `event:` block, which is exactly why this
 * file exists. A pass-through key is unchecked by definition: an address inside
 * one resolves against nothing, a year inside one agrees with nothing, and a
 * vocabulary value inside one is whatever was typed. Every rule the spine is
 * held to is therefore stated here, and every one of them is derived from the
 * content tree at runtime rather than from a list kept beside it.
 *
 * Seven checks, each answering one question a reader would otherwise have to
 * answer by hand:
 *
 * 1. **`spine-is-present`** — there is a spine at all. A guard that passes over
 *    an empty set proves nothing, so the absence of events is the first error.
 * 2. **`dates-are-common-calendar`** — every event carries a signed Common
 *    Calendar year with no year zero, and a precision from the closed list; a
 *    span is well formed and contains the year it is filed under.
 * 3. **`identity-is-unique`** — no two events share a shortcode, and no two
 *    share a year and a name. One occurrence with two names is one event with
 *    two `names[]` entries.
 * 4. **`dates-are-in-the-record`** — every event names the sources its date
 *    comes from, every one of those resolves, and the year is found in one of
 *    them: as a figure, or as the count `when.derived` states it was computed
 *    from. The one exemption is an event whose source is a decision rather than
 *    a note, and naming that decision is what buys it. This is the check that
 *    makes a date nothing states impossible to write.
 * 5. **`reach-is-visible`** — every address in `locus` and `reach` resolves to
 *    a place, every reach entry states the consequence someone standing there
 *    could notice, and the containment walk from each place reaches a
 *    continent. Where an event's reach crosses more than one continent, the
 *    region-chronology rule is run for each reached region and the event must
 *    appear in the result.
 * 6. **`follows-is-backward`** — every edge names an event that exists, carries
 *    an edge type from the closed list, and points at an earlier or equal year.
 *    The graph is walked for cycles.
 * 7. **`summary-is-objective`** — no hedge in a summary. What the evidence
 *    supports is `standing`; what a people says is `accounts`; what the world
 *    has not settled is `unresolved`.
 *
 * Findings are written `file:line:column: severity: message`, the path relative
 * to the working directory and first on the line, so a parser reads the
 * position where it expects to. A column is dropped where it would be a guess.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** Where the spine lives. One directory, so a path rule can name it. */
const SPINE_DIR = "assets/content/Lore/History";

/** The whole content tree, for the index every address resolves against. */
const CONTENT_DIR = "assets/content";

/** What kind of occurrence an event is. Grouped for reading, closed for validation. */
const KINDS = new Set([
    "arrival",
    "departure",
    "migration",
    "contact",
    "displacement",
    "founding",
    "charter",
    "accession",
    "secession",
    "conquest",
    "treaty",
    "dissolution",
    "battle",
    "war",
    "siege",
    "revolt",
    "fall",
    "catastrophe",
    "plague",
    "famine",
    "raising",
    "ruin",
    "making",
    "loss",
    "discovery",
    "schism",
    "law",
    "council",
    "birth",
    "death",
]);

/** Who has to read an event. The spine is the `world` set and nothing else. */
const DEPTHS = new Set(["world", "region", "local"]);

/**
 * How closely the year is held. The gazetteer convention of printing `c.`
 * before a receding date, carried as data so the renderer decides how to print
 * it and a query can filter on it.
 */
const PRECISIONS = new Set(["exact", "year", "decade", "century", "millennium", "span"]);

/** What the world's evidence supports, which is independent of how close the date is. */
const STANDINGS = new Set(["attested", "single-source", "reconstructed", "disputed", "legendary"]);

/** Whether the place that felt an event connects it to its cause. */
const KNOWLEDGE = new Set(["named", "misattributed", "unlinked"]);

/** What a participant did. */
const ROLES = new Set([
    "actor",
    "victim",
    "instrument",
    "witness",
    "founder",
    "ruler",
    "author",
    "signatory",
]);

/** How far a people's account agrees with the record. */
const AGREES = new Set(["full", "partly", "disputes", "denies", "silent"]);

/** What one event did to the one before it. */
const EDGES = new Set(["caused", "enabled", "ended", "answered"]);

/**
 * Hedges a summary may not carry. The summary is the objective row; a summary
 * that hedges has put a judgement about evidence where the record goes, and
 * `standing`, `accounts` and `unresolved` are the three fields that hold one.
 */
const HEDGES = [
    "may be",
    "may have",
    "it is said",
    "perhaps",
    "some say",
    "reputed",
    "believed",
    "allegedly",
    "supposedly",
    "legend holds",
];

/**
 * A source that is not a note: a decision the owner has recorded outside the
 * tree. An event citing one states a date no note carries, and says whose.
 */
const DECIDED_SOURCES = new Set(["decided-midhalion"]);

/**
 * Split a note into its frontmatter block and its body.
 *
 * @param {string} raw - The file's contents.
 * @returns {{ fm: string, fmStart: number, body: string } | null} The block and
 *   the line the first key sits on, or `null` where there is no frontmatter.
 */
function splitFrontmatter(raw) {
    if (!raw.startsWith("---")) return null;
    const end = raw.indexOf("\n---", 3);
    if (end === -1) return null;
    const fm = raw.slice(raw.indexOf("\n") + 1, end + 1);
    return { fm, fmStart: 2, body: raw.slice(end + 4) };
}

/**
 * Every `.md` file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, relative to the working directory.
 */
function markdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(full));
        else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
    }
    return out.sort();
}

/**
 * The line a top-level or nested frontmatter key sits on, for a finding's
 * position. The search is textual and deliberately shallow: a finding that
 * names the note and the key is already at the place an author has to edit,
 * and a wrong line is worse than a dropped one.
 *
 * @param {string} raw - The file's contents.
 * @param {string} key - The key to find.
 * @returns {number | null} The one-based line, or `null` when it is not found.
 */
function lineOf(raw, key) {
    const lines = raw.split("\n");
    const pattern = new RegExp(`^\\s*${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:`);
    for (let i = 0; i < lines.length; i += 1) {
        if (pattern.test(lines[i])) return i + 1;
    }
    return null;
}

/**
 * One finding, in the toolchain's shape: the path first, the position dropped
 * field by field rather than defaulted, and the severity before the message.
 *
 * @param {string} file - The note.
 * @param {number | null} line - The line, or `null` when only the file is known.
 * @param {string} severity - `error` or `warning`.
 * @param {string} message - What is wrong.
 * @returns {string} The finding.
 */
function finding(file, line, severity, message) {
    const where = line == null ? `${file}:` : `${file}:${line}:`;
    return `${where} ${severity}: ${message}`;
}

/**
 * Read the whole content tree into the index every address resolves against.
 *
 * **Keyed by the whole address, not by the shortcode.** A shortcode is unique
 * within a type and not across the tree: a faith and the ritual skill that
 * practises it share one, deliberately, and an index keyed by the shortcode
 * alone would answer with whichever of them was read second. The address is
 * `type-shortcode` for exactly that reason, and this reads it whole.
 *
 * Each row carries only what a check reads: the type and subType that say what
 * an address may name, the tags that mark a continent, the `data.parents` the
 * containment walk follows, and the raw text a date is looked for in.
 *
 * @returns {Map<string, object>} Keyed by `type-shortcode`.
 */
function readIndex() {
    const index = new Map();
    for (const file of markdownFiles(CONTENT_DIR)) {
        const raw = fs.readFileSync(file, "utf8");
        const split = splitFrontmatter(raw);
        if (!split) continue;
        let fm;
        try {
            fm = YAML.parse(split.fm);
        } catch {
            continue;
        }
        if (!fm || typeof fm !== "object" || !fm.shortcode || !fm.type) continue;
        index.set(`${fm.type}-${fm.shortcode}`, {
            file,
            type: String(fm.type),
            subType: fm.subType,
            shortcode: String(fm.shortcode),
            tags: Array.isArray(fm.tags) ? fm.tags : [],
            // A place names its enclosing places by bare shortcode, and every
            // one of them is a place, so the containment walk reads them back
            // into the address space this index is keyed in.
            parents: (Array.isArray(fm.data?.parents) ? fm.data.parents : []).map(
                (p) => `place-${splitAddress(String(p)).shortcode}`,
            ),
            text: raw,
            name: fm.name?.full ?? String(fm.shortcode),
        });
    }
    return index;
}

/**
 * Read the spine.
 *
 * @returns {object[]} One row per event note, carrying the parsed block, the
 *   raw text a finding's line is measured in, and the file it came from.
 */
function readSpine() {
    const events = [];
    for (const file of markdownFiles(SPINE_DIR)) {
        const raw = fs.readFileSync(file, "utf8");
        const split = splitFrontmatter(raw);
        if (!split) continue;
        let fm;
        try {
            fm = YAML.parse(split.fm);
        } catch (err) {
            events.push({ file, raw, parseError: String(err.message ?? err) });
            continue;
        }
        if (!fm?.event) continue;
        events.push({ file, raw, fm, event: fm.event });
    }
    return events;
}

/**
 * The address a value names, stripped of the type prefix an author writes.
 *
 * An address is written `type-shortcode`, and every check here resolves the
 * shortcode; the prefix is the author's statement of what kind of thing they
 * expect, and is checked against the note that answers.
 *
 * @param {string} value - The address.
 * @returns {{ prefix: string | null, shortcode: string }} Its two halves.
 */
function splitAddress(value) {
    const text = String(value);
    const dash = text.indexOf("-");
    if (dash === -1) return { prefix: null, shortcode: text };
    return { prefix: text.slice(0, dash), shortcode: text.slice(dash + 1) };
}

/**
 * Resolve an address against the index, reporting what is wrong when it does
 * not answer.
 *
 * @param {string} value - The address.
 * @param {Map<string, object>} index - The content index.
 * @param {string[]} [types] - The note types the address may name. Absent, any.
 * @returns {{ row: object | null, problem: string | null }} The note, or why not.
 */
function resolve(value, index, types) {
    const { prefix, shortcode } = splitAddress(value);
    if (!prefix) {
        return {
            row: null,
            problem: `"${value}" is not an address; write it as type-shortcode, so a shortcode two types share resolves to one of them`,
        };
    }
    const row = index.get(`${prefix}-${shortcode}`);
    if (!row) {
        const alternatives = [...index.values()]
            .filter((candidate) => candidate.shortcode === shortcode)
            .map((candidate) => `${candidate.type}-${shortcode}`);
        const hint = alternatives.length ? `; the tree has ${alternatives.join(", ")}` : "";
        return { row: null, problem: `"${value}" names no note in this package${hint}` };
    }
    if (types && !types.includes(row.type)) {
        return {
            row,
            problem: `"${value}" is a ${row.type}, and this field names ${types.join(" or ")}`,
        };
    }
    return { row, problem: null };
}

/**
 * Walk a place up its `parents` chain to the continent that holds it.
 *
 * @param {string} shortcode - Where to start.
 * @param {Map<string, object>} index - The content index.
 * @returns {{ continent: string | null, chain: string[] }} The continent's
 *   shortcode and every place passed on the way, the start included.
 */
function continentOf(address, index) {
    const chain = [];
    const seen = new Set();
    let current = address;
    while (current && !seen.has(current)) {
        seen.add(current);
        chain.push(current);
        const row = index.get(current);
        if (!row) break;
        if (row.tags.includes("continent")) return { continent: current, chain };
        current = row.parents.find((p) => index.has(p));
    }
    return { continent: null, chain };
}

/**
 * Every place contained by one, down the `parents` chain.
 *
 * This is the descendant half of the region-chronology rule, computed the way
 * the rule states it rather than from a second list: a place belongs to a
 * region when the region is anywhere on its containment chain.
 *
 * @param {string} shortcode - The region.
 * @param {Map<string, object>} index - The content index.
 * @returns {Set<string>} The region and everything beneath it.
 */
function descendantsOf(address, index) {
    const out = new Set([address]);
    let grew = true;
    while (grew) {
        grew = false;
        for (const [key, row] of index) {
            if (out.has(key)) continue;
            if (row.parents.some((p) => out.has(p))) {
                out.add(key);
                grew = true;
            }
        }
    }
    return out;
}

/**
 * The chronology a region renders, by the rule the design states: what happened
 * here, what reached here, and the whole spine.
 *
 * @param {string} region - The region's shortcode.
 * @param {object[]} events - Every spine event.
 * @param {Map<string, object>} index - The content index.
 * @returns {Set<string>} The shortcodes of the events the region shows.
 */
function chronologyOf(region, events, index) {
    const within = descendantsOf(region, index);
    const shown = new Set();
    for (const ev of events) {
        const block = ev.event ?? {};
        const code = ev.fm?.shortcode;
        if (!code) continue;
        const locus = block.where?.locus ?? [];
        const reach = (block.where?.reach ?? []).map((entry) => entry.place ?? "");
        if (locus.some((p) => within.has(p))) shown.add(code);
        else if (reach.some((p) => within.has(p))) shown.add(code);
        else if (block.depth === "world") shown.add(code);
    }
    return shown;
}

/**
 * Every spelling of a Common Calendar year the tree writes.
 *
 * The corpus writes a four-digit year both with and without the thousands
 * comma, and the era label with and without a space, so a check that looked for
 * one spelling would report a date the tree plainly states. A year after the
 * Founding is also written `Year N`, which is how the epoch itself is written
 * in the note that defines the reckoning.
 *
 * @param {number} year - The signed year.
 * @returns {RegExp} What to look for in a note's text.
 */
function yearPattern(year) {
    const magnitude = Math.abs(year);
    const era = year < 0 ? "BF" : "AF";
    const plain = String(magnitude);
    const grouped = plain.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const forms = plain === grouped ? [plain] : [plain, grouped];
    const labelled = `\\b(${forms.join("|")})\\s?${era}\\b`;
    if (year < 0) return new RegExp(labelled);
    return new RegExp(`${labelled}|\\bYear\\s\\*{0,2}${plain}\\b`);
}

/**
 * Check one event's `when` block.
 *
 * @param {object} ev - The event row.
 * @param {string[]} out - Findings, appended to.
 */
function checkWhen(ev, out) {
    const when = ev.event.when;
    const line = lineOf(ev.raw, "when");
    if (!when || typeof when !== "object") {
        out.push(finding(ev.file, lineOf(ev.raw, "event"), "error", "`event.when` is missing"));
        return;
    }
    if (!Number.isInteger(when.year)) {
        out.push(
            finding(
                ev.file,
                line,
                "error",
                `\`event.when.year\` must be a signed Common Calendar integer, but reads ${JSON.stringify(when.year)}`,
            ),
        );
    } else if (when.year === 0) {
        out.push(
            finding(
                ev.file,
                line,
                "error",
                "`event.when.year` is 0, and the Common Calendar has no year zero: -1 is 1 BF and 1 is 1 AF",
            ),
        );
    }
    if (!PRECISIONS.has(when.precision)) {
        out.push(
            finding(
                ev.file,
                line,
                "error",
                `\`event.when.precision\` must be one of ${[...PRECISIONS].join(", ")}, but reads ${JSON.stringify(when.precision)}`,
            ),
        );
    }
    if (when.precision === "span") {
        const span = when.span;
        if (!span || !Number.isInteger(span.from) || !Number.isInteger(span.to)) {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    "a `span` precision needs `event.when.span` with integer `from` and `to`",
                ),
            );
        } else {
            if (span.from > span.to) {
                out.push(
                    finding(
                        ev.file,
                        line,
                        "error",
                        `\`event.when.span\` runs backwards: from ${span.from} to ${span.to}`,
                    ),
                );
            }
            if (Number.isInteger(when.year) && (when.year < span.from || when.year > span.to)) {
                out.push(
                    finding(
                        ev.file,
                        line,
                        "error",
                        `\`event.when.year\` ${when.year} sits outside the span ${span.from} to ${span.to} it is filed under`,
                    ),
                );
            }
        }
    } else if (when.span) {
        out.push(
            finding(
                ev.file,
                line,
                "error",
                "`event.when.span` is written, but the precision is not `span`",
            ),
        );
    }
}

/**
 * Check that an event's date is one the record states, in a source the event
 * names.
 *
 * @param {object} ev - The event row.
 * @param {Map<string, object>} index - The content index.
 * @param {string[]} out - Findings, appended to.
 */
function checkSources(ev, index, out) {
    const block = ev.event;
    const line = lineOf(ev.raw, "sources");
    const sources = block.sources;
    if (!Array.isArray(sources) || sources.length === 0) {
        out.push(
            finding(
                ev.file,
                lineOf(ev.raw, "event"),
                "error",
                "`event.sources` must name where this event's date comes from, so a date nothing states cannot be written",
            ),
        );
        return;
    }
    const noteRows = [];
    let decided = false;
    for (const source of sources) {
        if (DECIDED_SOURCES.has(String(source))) {
            decided = true;
            continue;
        }
        const { row, problem } = resolve(source, index);
        if (problem) out.push(finding(ev.file, line, "error", `\`event.sources\`: ${problem}`));
        if (row) noteRows.push(row);
    }
    if (decided) return;
    if (!Number.isInteger(block.when?.year)) return;

    // A year the record gives as a count rather than as a figure — "ten
    // thousand years", "roughly two hundred years ago" — is arrived at by
    // subtraction from the present year, and `derived` carries the phrase the
    // subtraction was performed on. Checking that the phrase is still in the
    // source is a stronger guard than exempting the event: it catches both an
    // invented year and a source whose wording has moved on.
    const derived = block.when.derived;
    if (typeof derived === "string" && derived.trim() !== "") {
        const needle = derived.toLowerCase();
        if (noteRows.some((row) => row.text.toLowerCase().includes(needle))) return;
        out.push(
            finding(
                ev.file,
                lineOf(ev.raw, "derived"),
                "error",
                `no note in \`event.sources\` states "${derived}", which is the figure \`event.when.year\` is computed from`,
            ),
        );
        return;
    }

    const pattern = yearPattern(block.when.year);
    if (noteRows.some((row) => pattern.test(row.text))) return;
    out.push(
        finding(
            ev.file,
            line,
            "error",
            `no note in \`event.sources\` states ${Math.abs(block.when.year)} ${block.when.year < 0 ? "BF" : "AF"}; ` +
                "a year the record states as a count carries `event.when.derived` naming that count, and a year that is a decision names it in `event.sources`",
        ),
    );
}

/**
 * Check where an event happened, where it was felt, and that a region which
 * felt it can see it.
 *
 * @param {object} ev - The event row.
 * @param {object[]} events - Every event, for the chronology rule.
 * @param {Map<string, object>} index - The content index.
 * @param {string[]} out - Findings, appended to.
 */
function checkWhere(ev, events, index, out) {
    const where = ev.event.where;
    const line = lineOf(ev.raw, "where");
    if (!where || !Array.isArray(where.locus) || where.locus.length === 0) {
        out.push(
            finding(
                ev.file,
                line ?? lineOf(ev.raw, "event"),
                "error",
                "`event.where.locus` must name at least one place — where the thing physically happened",
            ),
        );
        return;
    }
    for (const address of where.locus) {
        const { problem } = resolve(address, index, ["place"]);
        if (problem) out.push(finding(ev.file, line, "error", `\`event.where.locus\`: ${problem}`));
    }
    const reach = Array.isArray(where.reach) ? where.reach : [];
    const continents = new Set();
    const reached = [];
    for (const entry of reach) {
        if (!entry?.place) {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    "a `reach` entry carries no `place` to have reached",
                ),
            );
            continue;
        }
        const { problem } = resolve(entry.place, index, ["place"]);
        if (problem) {
            out.push(finding(ev.file, line, "error", `\`event.where.reach\`: ${problem}`));
            continue;
        }
        if (typeof entry.how !== "string" || entry.how.trim() === "") {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    `the reach entry for "${entry.place}" states no \`how\`; a consequence someone standing there could notice is what earns the entry`,
                ),
            );
        }
        if (!KNOWLEDGE.has(entry.knowledge)) {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    `the reach entry for "${entry.place}" must carry \`knowledge\` of ${[...KNOWLEDGE].join(", ")}, but reads ${JSON.stringify(entry.knowledge)}`,
                ),
            );
        }
        if (entry.knowledge === "misattributed" && !entry.attributedTo) {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    `the reach entry for "${entry.place}" is misattributed and does not say to what`,
                ),
            );
        }
        reached.push(entry.place);
        const { continent } = continentOf(entry.place, index);
        if (!continent) {
            out.push(
                finding(
                    ev.file,
                    line,
                    "error",
                    `the containment walk from "${entry.place}" reaches no continent, so no region's chronology can find this event through it`,
                ),
            );
        } else continents.add(continent);
    }
    if (continents.size < 2) return;
    for (const address of reached) {
        const shown = chronologyOf(address, events, index);
        if (shown.has(ev.fm.shortcode)) continue;
        out.push(
            finding(
                ev.file,
                line,
                "error",
                `"${address}" is named in \`reach\` but the region-chronology rule does not return this event for it`,
            ),
        );
    }
}

/**
 * Check the closed vocabularies, the certainty fields, and the people an event
 * names.
 *
 * @param {object} ev - The event row.
 * @param {Map<string, object>} index - The content index.
 * @param {string[]} out - Findings, appended to.
 */
function checkRecord(ev, index, out) {
    const block = ev.event;
    const at = (key) => lineOf(ev.raw, key);
    if (!KINDS.has(block.kind)) {
        out.push(
            finding(
                ev.file,
                at("kind"),
                "error",
                `\`event.kind\` must be one of the closed list, but reads ${JSON.stringify(block.kind)}`,
            ),
        );
    }
    if (!DEPTHS.has(block.depth)) {
        out.push(
            finding(
                ev.file,
                at("depth"),
                "error",
                `\`event.depth\` must be one of ${[...DEPTHS].join(", ")}, but reads ${JSON.stringify(block.depth)}`,
            ),
        );
    } else if (block.depth !== "world") {
        out.push(
            finding(
                ev.file,
                at("depth"),
                "error",
                `only \`depth: world\` belongs in ${SPINE_DIR}; an event a single region can hold is that region's`,
            ),
        );
    }
    if (!STANDINGS.has(block.standing)) {
        out.push(
            finding(
                ev.file,
                at("standing"),
                "error",
                `\`event.standing\` must be one of ${[...STANDINGS].join(", ")}, but reads ${JSON.stringify(block.standing)}`,
            ),
        );
    }
    const summary = typeof block.summary === "string" ? block.summary : "";
    if (summary.trim() === "") {
        out.push(finding(ev.file, at("summary"), "error", "`event.summary` is missing"));
    }
    const lowered = summary.toLowerCase();
    for (const hedge of HEDGES) {
        if (!lowered.includes(hedge)) continue;
        out.push(
            finding(
                ev.file,
                at("summary"),
                "error",
                `\`event.summary\` hedges with "${hedge}"; the summary is the objective row, and what the evidence supports belongs in \`standing\`, what a people says in \`accounts\`, and what is open in \`unresolved\``,
            ),
        );
    }
    for (const entry of block.who ?? []) {
        if (!entry?.ref) {
            out.push(finding(ev.file, at("who"), "error", "a `who` entry names no `ref`"));
            continue;
        }
        const { problem } = resolve(entry.ref, index);
        if (problem) out.push(finding(ev.file, at("who"), "error", `\`event.who\`: ${problem}`));
        if (!ROLES.has(entry.role)) {
            out.push(
                finding(
                    ev.file,
                    at("who"),
                    "error",
                    `\`event.who\` role must be one of ${[...ROLES].join(", ")}, but reads ${JSON.stringify(entry.role)}`,
                ),
            );
        }
    }
    for (const entry of block.names ?? []) {
        if (!entry?.name) {
            out.push(finding(ev.file, at("names"), "error", "a `names` entry carries no `name`"));
        }
        if (!entry?.by) continue;
        const { problem } = resolve(entry.by, index);
        if (problem)
            out.push(finding(ev.file, at("names"), "error", `\`event.names\`: ${problem}`));
    }
    for (const entry of block.accounts ?? []) {
        if (!entry?.by) {
            out.push(
                finding(
                    ev.file,
                    at("accounts"),
                    "error",
                    "an `accounts` entry names nobody holding it",
                ),
            );
            continue;
        }
        const { problem } = resolve(entry.by, index);
        if (problem) {
            out.push(finding(ev.file, at("accounts"), "error", `\`event.accounts\`: ${problem}`));
        }
        if (!AGREES.has(entry.agrees)) {
            out.push(
                finding(
                    ev.file,
                    at("accounts"),
                    "error",
                    `\`event.accounts\` agrees must be one of ${[...AGREES].join(", ")}, but reads ${JSON.stringify(entry.agrees)}`,
                ),
            );
        }
    }
    if (!Array.isArray(block.unresolved)) {
        out.push(
            finding(
                ev.file,
                at("unresolved"),
                "error",
                "`event.unresolved` must be a list, empty where the record settles everything",
            ),
        );
    }
}

/**
 * Check the causal edges: backward only, typed, and free of cycles.
 *
 * @param {object[]} events - Every event.
 * @param {string[]} out - Findings, appended to.
 */
function checkFollows(events, out) {
    const byCode = new Map(events.filter((e) => e.fm?.shortcode).map((e) => [e.fm.shortcode, e]));
    const edges = new Map();
    for (const ev of events) {
        const line = lineOf(ev.raw, "follows");
        const list = ev.event.follows ?? [];
        const targets = [];
        for (const edge of list) {
            if (!edge?.event) {
                out.push(finding(ev.file, line, "error", "a `follows` edge names no event"));
                continue;
            }
            const shortcode = splitAddress(edge.event).shortcode;
            const target = byCode.get(shortcode);
            if (!target) {
                out.push(
                    finding(
                        ev.file,
                        line,
                        "error",
                        `\`event.follows\`: "${edge.event}" names no spine event`,
                    ),
                );
                continue;
            }
            targets.push(shortcode);
            if (!EDGES.has(edge.how)) {
                out.push(
                    finding(
                        ev.file,
                        line,
                        "error",
                        `\`event.follows\` how must be one of ${[...EDGES].join(", ")}, but reads ${JSON.stringify(edge.how)}`,
                    ),
                );
            }
            const here = ev.event.when?.year;
            const there = target.event.when?.year;
            if (Number.isInteger(here) && Number.isInteger(there) && there > here) {
                out.push(
                    finding(
                        ev.file,
                        line,
                        "error",
                        `\`event.follows\` points forward: "${shortcode}" is dated ${there} and this event ${here}, and an edge runs backward only`,
                    ),
                );
            }
        }
        if (ev.fm?.shortcode) edges.set(ev.fm.shortcode, targets);
    }
    const state = new Map();
    const walk = (code, trail) => {
        if (state.get(code) === "done") return;
        if (state.get(code) === "open") {
            const ev = byCode.get(code);
            out.push(
                finding(
                    ev.file,
                    lineOf(ev.raw, "follows"),
                    "error",
                    `\`event.follows\` closes a cycle: ${[...trail, code].join(" -> ")}`,
                ),
            );
            return;
        }
        state.set(code, "open");
        for (const next of edges.get(code) ?? []) walk(next, [...trail, code]);
        state.set(code, "done");
    };
    for (const code of edges.keys()) walk(code, []);
}

/**
 * Run every check and report.
 *
 * @returns {number} The process's exit code.
 */
function main() {
    const out = [];
    const index = readIndex();
    const events = readSpine();

    for (const ev of events) {
        if (!ev.parseError) continue;
        out.push(finding(ev.file, null, "error", `frontmatter does not parse: ${ev.parseError}`));
    }
    const usable = events.filter((ev) => !ev.parseError);

    if (usable.length === 0) {
        out.push(
            finding(
                `${SPINE_DIR}/`,
                null,
                "error",
                "no spine event is written here; the world's regions have no shared chronology to answer to",
            ),
        );
    }

    const byShortcode = new Map();
    const byYearAndName = new Map();
    for (const ev of usable) {
        const code = ev.fm?.shortcode;
        if (!code) {
            out.push(
                finding(
                    ev.file,
                    null,
                    "error",
                    "the note carries an `event:` block and no `shortcode`",
                ),
            );
            continue;
        }
        if (byShortcode.has(code)) {
            out.push(
                finding(
                    ev.file,
                    lineOf(ev.raw, "shortcode"),
                    "error",
                    `"${code}" is already the shortcode of ${byShortcode.get(code)}`,
                ),
            );
        } else byShortcode.set(code, ev.file);
        const key = `${ev.event.when?.year}|${ev.fm.name?.full}`;
        if (byYearAndName.has(key)) {
            out.push(
                finding(
                    ev.file,
                    lineOf(ev.raw, "name"),
                    "error",
                    `${byYearAndName.get(key)} already states this year and this name; one occurrence is one event, with its other names in \`names\``,
                ),
            );
        } else byYearAndName.set(key, ev.file);

        checkWhen(ev, out);
        checkSources(ev, index, out);
        checkWhere(ev, usable, index, out);
        checkRecord(ev, index, out);
    }
    checkFollows(usable, out);

    for (const line of out) console.error(line);
    const errors = out.filter((line) => line.includes(": error: ")).length;
    const warnings = out.length - errors;
    if (errors === 0) {
        console.log(
            `The spine holds: ${usable.length} world event(s) checked, ${warnings} advisory finding(s).`,
        );
        return 0;
    }
    console.error(
        `${errors} error(s) and ${warnings} warning(s) across ${usable.length} spine event(s).`,
    );
    return 1;
}

process.exit(main());
