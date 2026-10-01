/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for `utils/nordmal-concordance.json` itself.
 *
 * Two guards read that table and neither checks it: `nordmal-drift.mjs` takes
 * its pairs to sweep the corpus, and `nordmal-lexicon.mjs` takes its deity rows
 * to fill the theophoric clause. Both trust its contents whole.
 *
 * **A renamed note keeps no trace of what it was.** There is no `renamedFrom`
 * key, no alias holding a former name, no redirect, so the table is the only
 * place a mapping exists. That makes an error here a *lost* answer rather than
 * a wrong one, and makes a missing row a destroyed mapping rather than a
 * deferred one.
 *
 * Six predicates, each derived from the table and the tree at run time so that
 * nothing here is a second copy of either.
 *
 * **Completeness.** A shortcode names a note, and a note has a path and an
 * address, so a half of a row that writes one of the three writes all three. A
 * half-filled row parses exactly like a full one, which is how four field pairs
 * sat empty for weeks with nothing noticing.
 *
 * **Historical truth.** Every `oldRefPaths` citation is read as
 * `rev:path:line:column` and resolved: the revision exists, the file exists at
 * it, the line exists, and the old form stands at that column. A form the tree
 * stopped writing cannot be found by grepping the tree, so the citation is the
 * only evidence it was ever real.
 *
 * **Agreement with the tree.** Where a note stands at a row's `newPath`, its
 * `shortcode` is that row's `newShortcode` and its `name.full` that row's
 * `newName`. A table the corpus contradicts is worse than no table, because it
 * is believed.
 *
 * **Coverage.** Every note the table's own `scope` declares either carries a row
 * or is provably unchanged, read from the file's own history by
 * `git log --follow`: one `name.full` for its whole life, or an earlier name the
 * note still carries as an alias, or a name that has returned to the one it
 * started with. The test is the file's history and never one bright-line
 * revision: a note created after the import and renamed since has history, and
 * ruling it created destroys exactly what the table holds. A directory a row
 * names that no `scope.paths` prefix reaches is reported, because `scope` is
 * also what the drift sweep reads and the two cannot be set apart here.
 *
 * **No collision.** Two rows never claim one `newShortcode` within a type, and
 * a row's `newShortcode` never lands on a note of its own type that the row
 * does not name. Addresses are one flat namespace per package-system-type.
 *
 * **Nothing is lost.** The table only grows. Every `oldName` any earlier
 * revision of the file carried is carried now; a row that existed and no longer
 * does has destroyed the one record of a rename.
 *
 * A guard proves completeness, never accuracy. Whether `Ódvar` is the right
 * name for the Fury-Ward is a judgement; whether every name has a row and every
 * citation resolves is arithmetic, and only the second is answered here.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory. A field whose position is
 * meaningless is dropped rather than defaulted to `1:1`. Both severities go to
 * stderr and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import YAML from "yaml";

/** The table this guard reads and judges. */
const TABLE = "utils/nordmal-concordance.json";

/** Where the authored tree lives. */
const CONTENT_DIR = "assets/content";

/** A citation, as `oldRefPaths` writes one. */
const CITATION = /^(?<rev>[^:]+):(?<file>.+?):(?<line>\d+)(?::(?<column>\d+))?$/u;

/**
 * What a half of a row has to carry once it carries a shortcode.
 *
 * A shortcode names a note, and a note has a path and an address, so a half
 * that writes one of the three writes all three. This is the failure the table
 * was built to prevent and the one a reader cannot see: four field pairs sat
 * empty for weeks because a half-filled row parses exactly like a full one.
 */
const HALVES = [
    ["oldShortcode", "oldPath", "oldAddress"],
    ["newShortcode", "newPath", "newAddress"],
];

/**
 * The frames a note's title puts around a name.
 *
 * A row's `newName` is the thing's name; the note that describes it may be
 * titled around that name — `Faith of Ódvar` for the faith of the god `Ódvar`,
 * `Ritual Ódvar` for its rite. So a note agrees with its row when the row's
 * name stands in the note's own name block, framed or bare.
 */
const NAME_BLOCK_FIELDS = ["full", "aliases"];

/**
 * A row that describes something with no note of its own.
 *
 * `newShortcode` is the tell: a row that names a note carries that note's
 * shortcode, and a row for a name that lives only in a sentence has none to
 * carry. Such a row's path fields hold the note the sentence sits in rather
 * than a note the row describes — `nordmal-drift.mjs` requires them there,
 * because a path on both sides of a disagreement is what tells the sweep that
 * two Nordmen share one historical given name rather than one word being
 * entered twice.
 *
 * @param {object} row - A table entry.
 * @returns {boolean} Whether the row describes a thing with no note behind it.
 */
function hasNoNote(row) {
    return !row.newShortcode;
}

/**
 * A row whose path fields name the note its name is written inside.
 *
 * Several Nordmen share one historical given name while being coined into
 * different lawful names of their own, and `nordmal-drift.mjs` tells them apart
 * by requiring a path on both sides of the disagreement. So on these rows the
 * path is a discriminator rather than a note the row describes, and it carries
 * no shortcode and no address because the person named in a sentence never had
 * one. The tell is that the row's own sighting sits in the path it names.
 *
 * @param {object} row - A table entry.
 * @returns {boolean} Whether the path names the note the name is written in.
 */
function pathIsWhereItStands(row) {
    if (!row.newPath || row.newShortcode) return false;
    return (row.oldRefPaths ?? []).some((citation) => String(citation).includes(row.newPath));
}

/**
 * Run git, returning `null` where it fails rather than throwing.
 *
 * @param {string[]} args - The arguments after `git`.
 * @returns {string|null} Standard output, or `null`.
 */
function git(args) {
    try {
        return execFileSync("git", ["-c", "core.quotePath=false", ...args], {
            encoding: "utf8",
            maxBuffer: 1 << 28,
            stdio: ["ignore", "pipe", "pipe"],
        });
    } catch {
        return null;
    }
}

/**
 * Every markdown file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, in walk order.
 */
function markdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/**
 * A note's frontmatter, or `null` where it is absent or unparseable.
 *
 * @param {string} text - The file's whole content.
 * @returns {object|null} The parsed frontmatter.
 */
function frontmatter(text) {
    const head = /^---\n([\s\S]*?)\n---/u.exec(text);
    if (!head) return null;
    try {
        return YAML.parse(head[1]);
    } catch {
        return null;
    }
}

/**
 * One finding, in the house form.
 *
 * A field whose position carries no meaning is dropped rather than defaulted,
 * because `1:1` sends a reader to the frontmatter every time.
 *
 * @param {string} file - The path, relative to the working directory.
 * @param {number|null} line - The line, or `null`.
 * @param {number|null} column - The column, or `null`.
 * @param {string} severity - `error` or `warning`.
 * @param {string} message - What is wrong.
 * @returns {string} The finding.
 */
function finding(file, line, column, severity, message) {
    const where =
        line == null ? file
        : column == null ? `${file}:${line}`
        : `${file}:${line}:${column}`;
    return `${where}: ${severity}: ${message}`;
}

/**
 * Where a literal stands in a file, as a line and a column.
 *
 * A finding about a row is located by searching the table for the row's own
 * text, since a JSON parse keeps no positions. The occurrence index is honoured
 * so repeats land on their own lines.
 *
 * @param {string} text - The file's content.
 * @param {string} literal - What to find.
 * @param {number} nth - Which occurrence, counting from zero.
 * @returns {{line: number, column: number}|{line: null, column: null}} The position.
 */
function positionOf(text, literal, nth = 0) {
    let at = -1;
    for (let seen = 0; seen <= nth; seen += 1) {
        at = text.indexOf(literal, at + 1);
        if (at < 0) return { line: null, column: null };
    }
    const before = text.slice(0, at);
    const line = before.split("\n").length;
    const column = at - (before.lastIndexOf("\n") + 1) + 1;
    return { line, column };
}

/**
 * Where a row stands in the table, by its most distinctive field.
 *
 * @param {string} raw - The table's text.
 * @param {object} row - The entry.
 * @returns {{line: number|null, column: number|null}} The position.
 */
function rowPosition(raw, row) {
    for (const field of ["newShortcode", "newPath", "newName", "oldName"]) {
        if (!row[field]) continue;
        const spot = positionOf(raw, `"${field}": ${JSON.stringify(row[field])}`);
        if (spot.line != null) return spot;
    }
    return { line: null, column: null };
}

/**
 * Every row that writes one half of a pair and not the other.
 *
 * @param {object[]} rows - The entries.
 * @param {string} raw - The table's text.
 * @returns {string[]} Findings.
 */
export function checkCompleteness(rows, raw) {
    const out = [];
    const filled = (value) =>
        value !== null && value !== undefined && !(Array.isArray(value) && !value.length);
    for (const row of rows) {
        const { line, column } = rowPosition(raw, row);
        const named = row.newName ?? row.oldName;
        if (pathIsWhereItStands(row)) continue;
        for (const fields of HALVES) {
            const written = fields.filter((field) => filled(row[field]));
            if (!written.length || written.length === fields.length) continue;
            const missing = fields.filter((field) => !filled(row[field]));
            out.push(
                finding(
                    TABLE,
                    line,
                    column,
                    "error",
                    `the row for "${named}" writes ${written.join(" and ")} and not ${missing.join(" or ")}; a half-filled row reads exactly like a full one`,
                ),
            );
        }
        // A row that renames a note moves its name as well as its address, and
        // one that retires a name with nothing to put in its place writes
        // `newName: null` deliberately, which the drift sweep reads as a drop.
        if (filled(row.oldShortcode) && !filled(row.newName) && row.newName !== null)
            out.push(
                finding(
                    TABLE,
                    line,
                    column,
                    "error",
                    `the row for "${named}" renames a note and names no new name`,
                ),
            );
        if (!filled(row.newName) && !filled(row.oldName) && row.newName !== null)
            out.push(
                finding(
                    TABLE,
                    line,
                    column,
                    "error",
                    `a row carries neither an old name nor a new one`,
                ),
            );
    }
    return out;
}

/**
 * Every `oldRefPaths` citation that does not resolve.
 *
 * The revision has to exist, the file has to exist at it, the line has to
 * exist, and the old form has to stand at the stated column. A citation that
 * resolves to nothing is the row's only evidence, so its failure is an error
 * rather than a note.
 *
 * A citation may name `main` so that a branch can cite a change it has not
 * merged, and that form is reported as provisional: `main` moves, and the
 * citation holds only until a line is inserted above the one it names.
 *
 * @param {object[]} rows - The entries.
 * @param {string} raw - The table's text.
 * @returns {string[]} Findings.
 */
export function checkCitations(rows, raw) {
    const out = [];
    const cache = new Map();
    const fileAt = (rev, file) => {
        const key = `${rev}:${file}`;
        if (!cache.has(key))
            cache.set(key, rev === "main" ? readWorking(file) : git(["show", key]));
        return cache.get(key);
    };
    const readWorking = (file) => {
        // `main:` cites the tree as it stands; reading the checkout keeps the
        // guard usable on a branch whose change has not merged.
        try {
            return fs.readFileSync(file, "utf8");
        } catch {
            return git(["show", `main:${file}`]);
        }
    };

    for (const row of rows) {
        const spot = rowPosition(raw, row);
        for (const [index, citation] of (row.oldRefPaths ?? []).entries()) {
            // `main` moves. A citation pinned to it holds only until a line is
            // inserted above the one it names, and the table is the single
            // permanent record of what a thing used to be, so provisional
            // evidence in it decays into no evidence at all.
            if (String(citation).startsWith("main:")) {
                out.push(
                    finding(
                        TABLE,
                        spot.line,
                        spot.column,
                        "warning",
                        `citation ${index + 1} is pinned to \`main\`, which moves; repin it to the revision that holds the form`,
                    ),
                );
            }
            const parsed = CITATION.exec(String(citation));
            if (!parsed) {
                out.push(
                    finding(
                        TABLE,
                        spot.line,
                        spot.column,
                        "error",
                        `citation ${index + 1} of "${row.oldName ?? row.newName}" is "${citation}", which is not rev:path:line[:column]`,
                    ),
                );
                continue;
            }
            const { rev, file, line, column } = parsed.groups;
            const text = fileAt(rev, file);
            if (text == null) {
                out.push(
                    finding(
                        TABLE,
                        spot.line,
                        spot.column,
                        "error",
                        `citation "${citation}" names no file the repository holds at that revision`,
                    ),
                );
                continue;
            }
            const lines = text.split("\n");
            const body = lines[Number(line) - 1];
            if (body === undefined) {
                out.push(
                    finding(
                        TABLE,
                        spot.line,
                        spot.column,
                        "error",
                        `citation "${citation}" names line ${line}, and the file holds ${lines.length}`,
                    ),
                );
                continue;
            }
            const form = row.oldName ?? row.newName;
            if (!form) continue;
            if (column === undefined) {
                if (!body.includes(String(form)))
                    out.push(
                        finding(
                            TABLE,
                            spot.line,
                            spot.column,
                            "error",
                            `citation "${citation}" does not hold "${form}" on that line`,
                        ),
                    );
                continue;
            }
            const at = Number(column) - 1;
            if (body.slice(at, at + String(form).length) !== String(form))
                out.push(
                    finding(
                        TABLE,
                        spot.line,
                        spot.column,
                        "error",
                        `citation "${citation}" does not hold "${form}" at that column; the line reads "${body.slice(at, at + 40).trim()}"`,
                    ),
                );
        }
        // A form the tree no longer writes carries its sightings or nothing
        // evidences it; a form still standing carries one exemplary sighting.
        if (row.oldName && !(row.oldRefPaths ?? []).length)
            out.push(
                finding(
                    TABLE,
                    spot.line,
                    spot.column,
                    "warning",
                    `"${row.oldName}" is entered as a retired form and cites no sighting, so nothing evidences it was ever written`,
                ),
            );
    }
    return out;
}

/**
 * Every row the corpus contradicts.
 *
 * @param {object[]} rows - The entries.
 * @param {string} raw - The table's text.
 * @returns {string[]} Findings.
 */
export function checkAgreement(rows, raw) {
    const out = [];
    const said = new Set();
    const say = (line) => {
        // Several rows name one note — a faith, its ritual skill and each
        // spelling of its god all point at the same files — so a disagreement
        // is stated once rather than once per row.
        if (said.has(line)) return;
        said.add(line);
        out.push(line);
    };
    for (const row of rows) {
        if (!row.newPath || pathIsWhereItStands(row) || !fs.existsSync(row.newPath)) continue;
        const text = fs.readFileSync(row.newPath, "utf8");
        const front = frontmatter(text);
        if (!front) {
            say(
                finding(
                    row.newPath,
                    1,
                    null,
                    "error",
                    `the frontmatter does not parse, so no build reads this note`,
                ),
            );
            continue;
        }
        if (row.newShortcode && front.shortcode !== row.newShortcode) {
            const spot = positionOf(text, `shortcode: ${front.shortcode}`);
            say(
                finding(
                    row.newPath,
                    spot.line,
                    spot.column,
                    "error",
                    `the note writes shortcode "${front.shortcode}" and the table says "${row.newShortcode}"`,
                ),
            );
        }
        // A leading article is rendering rather than name, so `the Green
        // Wardens` and `The Green Wardens` are one name.
        const bare = (value) => String(value).replace(/^the\s+/iu, "");
        const block = NAME_BLOCK_FIELDS.flatMap((field) => {
            const value = front.name?.[field];
            return (
                Array.isArray(value) ? value.map(String)
                : value ? [String(value)]
                : []).map(bare);
        });
        if (row.newName && !block.some((written) => written.includes(bare(row.newName)))) {
            const spot = positionOf(text, String(front.name?.full ?? ""));
            say(
                finding(
                    row.newPath,
                    spot.line,
                    spot.column,
                    "error",
                    `the note is named "${front.name?.full}" and the table says "${row.newName}", which stands nowhere in its name block`,
                ),
            );
        }
    }
    // A row naming a note that is not there has either run ahead of the rename
    // or named the wrong path, and the two are told apart by the path alone.
    for (const row of rows) {
        if (!row.newPath || pathIsWhereItStands(row) || fs.existsSync(row.newPath)) continue;
        const spot = rowPosition(raw, row);
        out.push(
            finding(
                TABLE,
                spot.line,
                spot.column,
                "warning",
                `the row for "${row.newName}" names ${row.newPath}, where no note stands`,
            ),
        );
    }
    return out;
}

/**
 * Every note the table's own scope reaches that no row covers.
 *
 * A note with one `name.full` across its whole history has never been renamed
 * and needs no row. Anything else does, and which of §6a's cases it falls under
 * is said in the finding so the reader knows what the row has to carry.
 *
 * @param {object} table - The whole table.
 * @param {object[]} rows - The entries.
 * @returns {{findings: string[], tally: object}} Findings and the accounting.
 */
export function checkCoverage(table, rows) {
    const out = [];
    const scope = new Set();
    for (const file of markdownFiles(CONTENT_DIR)) {
        const relative = path.relative(CONTENT_DIR, file);
        if ((table.scope?.paths ?? []).some((prefix) => relative.startsWith(prefix)))
            scope.add(file);
    }
    for (const note of table.scope?.notes ?? []) scope.add(path.join(CONTENT_DIR, note));

    const covered = new Set();
    for (const row of rows) {
        if (row.newPath) covered.add(row.newPath);
        if (row.oldPath) covered.add(row.oldPath);
    }
    const names = new Map();
    for (const row of rows) {
        if (row.newName) names.set(row.newName, row);
        if (row.oldName) names.set(row.oldName, row);
    }

    const tally = { inScope: 0, covered: 0, unchanged: 0, uncovered: 0 };
    for (const file of [...scope].sort()) {
        tally.inScope += 1;
        const front = frontmatter(fs.readFileSync(file, "utf8"));
        const full = front?.name?.full;
        if (covered.has(file) || (full && names.has(full))) {
            tally.covered += 1;
            continue;
        }
        const history = nameHistory(file);
        const aliases = (front?.name?.aliases ?? []).map(String);
        // Three ways a file's history settles that nothing has been lost. One
        // name for its whole life is the plain case. A note that carries an
        // earlier name as an alias still writes it, so nothing was retired. And
        // a note whose name has returned to the one it started with has given up
        // nothing either — what stood between was a form the tree corrected, not
        // a name the setting took.
        const oneName = history.length === 1;
        const earlierKept = history.slice(0, -1).every((name) => aliases.includes(name));
        const returned = history.length > 1 && history[0] === history[history.length - 1];
        if (oneName || earlierKept || returned) {
            tally.unchanged += 1;
            continue;
        }
        tally.uncovered += 1;
        const text = fs.readFileSync(file, "utf8");
        const spot = positionOf(text, String(full ?? ""));
        out.push(
            finding(
                file,
                spot.line,
                spot.column,
                "error",
                history.length ?
                    `"${full}" has no row, and the file's own history carries ${history.length} names: ${history.join(" then ")}`
                :   `"${full}" has no row, and the file's own history cannot be read`,
            ),
        );
    }

    // A row naming a note outside `scope` is a note the coverage half cannot
    // reach, so the gap is reported rather than closed by widening the universe
    // here: what `scope` declares is also what the drift sweep reads, and the
    // two cannot be set apart.
    const outside = new Set();
    for (const row of rows) {
        if (!row.newPath || scope.has(row.newPath) || !fs.existsSync(row.newPath)) continue;
        // Named at the depth `scope.paths` is written at, so one missing prefix
        // reads as one finding rather than one per leaf directory.
        const segments = path.relative(CONTENT_DIR, path.dirname(row.newPath)).split(path.sep);
        outside.add(segments.slice(0, 2).join("/"));
    }
    for (const dir of [...outside].sort())
        out.push(
            finding(
                TABLE,
                null,
                null,
                "warning",
                `rows name notes under ${dir}/, which no scope.paths prefix reaches, so coverage there is unchecked`,
            ),
        );
    tally.outside = outside.size;
    return { findings: out, tally };
}

/**
 * Every distinct `name.full` a file has carried, oldest first.
 *
 * `git log --follow` is the test §6a names, because a note created long after
 * the import and renamed since has history that one bright-line revision
 * cannot see.
 *
 * @param {string} file - The note's path.
 * @returns {string[]} The names, oldest first.
 */
export function nameHistory(file) {
    const log = git(["log", "--follow", "--format=%H", "--name-only", "--", file]);
    if (log == null) return [];
    const revisions = [];
    let revision = null;
    for (const line of log.split("\n")) {
        if (/^[0-9a-f]{40}$/u.test(line)) revision = line;
        else if (line.trim() && revision) {
            revisions.push({ revision, path: line.trim() });
            revision = null;
        }
    }
    const names = [];
    for (const { revision: rev, path: at } of revisions.reverse()) {
        const text = git(["show", `${rev}:${at}`]);
        if (text == null) continue;
        const full = frontmatter(text)?.name?.full;
        if (full === undefined) continue;
        if (!names.length || names[names.length - 1] !== full) names.push(full);
    }
    return names;
}

/**
 * Every `newShortcode` two things claim at once.
 *
 * A shortcode is unique within one package-system-type space and no wider, so
 * `odinn` legally names both a faith and a ritual skill. A collision is
 * therefore two rows of one type, or a row landing on a note of its own type
 * that the row does not name.
 *
 * @param {object[]} rows - The entries.
 * @param {string} raw - The table's text.
 * @returns {string[]} Findings.
 */
export function checkCollisions(rows, raw) {
    const out = [];
    const claimed = new Map();
    for (const row of rows) {
        if (!row.newShortcode) continue;
        const key = `${row.type}-${row.newShortcode}`;
        const prior = claimed.get(key);
        if (prior && prior.newPath !== row.newPath) {
            const spot = rowPosition(raw, row);
            out.push(
                finding(
                    TABLE,
                    spot.line,
                    spot.column,
                    "error",
                    `both "${prior.newName}" and "${row.newName}" claim the ${row.type} shortcode "${row.newShortcode}"`,
                ),
            );
        }
        if (!prior) claimed.set(key, row);
    }

    for (const file of markdownFiles(CONTENT_DIR)) {
        const front = frontmatter(fs.readFileSync(file, "utf8"));
        if (!front?.shortcode || !front.type) continue;
        const row = claimed.get(`${front.type}-${front.shortcode}`);
        if (!row || row.newPath === file) continue;
        const spot = positionOf(fs.readFileSync(file, "utf8"), `shortcode: ${front.shortcode}`);
        out.push(
            finding(
                file,
                spot.line,
                spot.column,
                "error",
                `"${front.shortcode}" is this ${front.type}'s shortcode and the table gives it to "${row.newName}" at ${row.newPath}`,
            ),
        );
    }
    return out;
}

/**
 * Every `oldName` an earlier revision of the table carried and this one does not.
 *
 * The table only grows. A row that existed and no longer does has destroyed the
 * one record of a rename, and nothing downstream can recover it.
 *
 * A name the keep-list now holds is reclassified rather than lost: the decision
 * went the other way, the name stands, and the keep-list's `why` records what it
 * was once paired with.
 *
 * @param {object[]} rows - The entries.
 * @param {object[]} keep - The keep-list.
 * @returns {string[]} Findings.
 */
export function checkNothingLost(rows, keep) {
    const out = [];
    const held = new Set(rows.map((row) => row.oldName).filter(Boolean));
    for (const entry of keep ?? []) held.add(entry.literal);
    const log = git(["log", "--format=%H", "--", TABLE]);
    if (log == null) return out;
    for (const revision of log.split("\n").filter(Boolean)) {
        const text = git(["show", `${revision}:${TABLE}`]);
        if (text == null) continue;
        let earlier;
        try {
            earlier = JSON.parse(text);
        } catch {
            continue;
        }
        for (const row of earlier.entries ?? []) {
            if (!row.oldName || held.has(row.oldName)) continue;
            out.push(
                finding(
                    TABLE,
                    null,
                    null,
                    "error",
                    `"${row.oldName}" carried a row at ${revision.slice(0, 9)} and carries none now; the mapping to "${row.newName}" is the only record of that rename`,
                ),
            );
            held.add(row.oldName);
        }
    }
    return out;
}

/** Run every predicate and report. @returns {number} The exit code. */
function main() {
    if (!fs.existsSync(TABLE)) {
        console.error(
            `${TABLE}: error: it is absent, and every mapping in the north is read from it`,
        );
        return 1;
    }
    const raw = fs.readFileSync(TABLE, "utf8");
    let table;
    try {
        table = JSON.parse(raw);
    } catch (error) {
        console.error(`${TABLE}: error: it does not parse as JSON: ${error.message}`);
        return 1;
    }
    const rows = table.entries ?? [];

    const out = [
        ...checkCompleteness(rows, raw),
        ...checkCitations(rows, raw),
        ...checkAgreement(rows, raw),
        ...checkCollisions(rows, raw),
        ...checkNothingLost(rows, table.keep),
    ];
    const coverage = checkCoverage(table, rows);
    out.push(...coverage.findings);

    for (const line of out) console.error(line);

    const errors = out.filter((line) => /: error: /u.test(line)).length;
    const warnings = out.length - errors;
    console.log(
        `${rows.length} row(s) read. Coverage: ${coverage.tally.inScope} note(s) in reach, ${coverage.tally.covered} with a row, ${coverage.tally.unchanged} proved unchanged by their own history, ${coverage.tally.uncovered} uncovered.`,
    );
    if (!out.length) {
        console.log(
            "The record holds: every pair is filled, every citation resolves, and every name has a row.",
        );
        return 0;
    }
    console.error(`${errors} error(s) and ${warnings} warning(s) across ${rows.length} row(s).`);
    return errors ? 1 : 0;
}

process.exitCode = main();
