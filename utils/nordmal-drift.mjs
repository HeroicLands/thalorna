/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Nordmal drift.
 *
 * The drift retires every verbatim Earth name in the north's faith, office and
 * rank layer and gives the setting its own. Completeness is the thing no reader
 * can check by eye — one survivor in a thousand notes is invisible in a diff —
 * so the check derives the whole question from one table and answers it as a
 * red test.
 *
 * **`utils/nordmal-drift.yaml` is the single source.** Nothing here restates a
 * pair, because a second copy drifts from the first the moment either is
 * edited, which is exactly the failure this guard exists to prevent, moved one
 * level up.
 *
 * Two halves.
 *
 * **No retired token survives in an in-world sentence.** Read past: a
 * `shortcode` line, a file path, a wikilink's or a markdown link's target, an
 * `affiliation-<god>` line, a `terran_analog` value, a `renamedFrom` line and
 * fenced or inline code. Shortcodes stay the Earth names on purpose, so those
 * exceptions are the heart of the rule and each is written out rather than
 * folded into one exclusion that a later hand can widen. **A wikilink's label
 * is prose and is read**, because a label is what a reader meets.
 *
 * **The romanisation holds.** The rule is derived from the language note's own
 * § _Romanizing Nordmal_ table: the `written` column gives the letters and the
 * marks Nordmal spells, the `never` column gives the letters it does not, and
 * the sentence beneath gives the assembly its hard opening. A mark outside the
 * derived set, a letter the table forbids, or the assembly spelled `Thing` is
 * a break. This half reads Nordmal and Varokhi material alone, which the table
 * declares, and reads past the words of other tongues that stand in it, which
 * the table also declares and the summary prints.
 *
 * Three traps the table and this guard answer together:
 *
 * 1. **Every spelling is a row.** `Odinn` and `Ódinn` are labels on one
 *    address; `Njördur`, `Njördr`, `Njordur` and `Ragnarok` are each written
 *    beside a marked form. A rule written from one spelling reports clean.
 * 2. **Short tokens are reached.** `Týr` and `Hél` are three characters and
 *    `Lôki` and `Ymir` four, and no minimum length is imposed anywhere. Where
 *    a token needs its context — `Hel.` abbreviates Helonic — the table says
 *    so and every occurrence the context excludes is counted and printed.
 * 3. **A retired name inside a kept word.** The keep-list is matched first and
 *    its spans are taken, so no retired token fires inside a word that keeps
 *    one. Longest match first among the retired tokens themselves, so
 *    `Bjorn-König` is found before `König` could be.
 *
 * A guard proves completeness, never accuracy. Whether `Ódvar` is the right
 * name for the Fury-Ward is a judgement; whether it reached every sentence is
 * arithmetic, and only the second is answered here.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory. Both severities go to stderr
 * and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** Where the authored tree lives. */
const CONTENT_DIR = "assets/content";

/** The table every packet and this guard read from. */
const MAPPING_FILE = "utils/nordmal-drift.yaml";

/**
 * A note's address written bare, by the prefixes the corpus writes.
 *
 * Held to those prefixes rather than to any hyphenated lower-case word,
 * because `rune-priests` and `world-tree` are prose and a sweep that read past
 * them would read past whatever stood beside them.
 */
const ADDRESS =
    /(?<![\p{L}\p{M}])(?:affiliation|place|lore|being|skill|sohl|icon|miscgear|weapongear|armorgear|concoctiongear|mysticalability|mystery|scenario|doc)-[a-z0-9]+(?:#[\w-]+)?(?![\p{L}\p{M}])/gu;

/** The groups of the mapping that carry drift pairs. */
const PAIR_GROUPS = ["gods", "furniture", "ranks", "orders"];

/** The marks a language note may state in its romanisation table. */
const MARK_NAMES = new Map([
    ["́", "an acute"],
    ["̈", "a diaeresis"],
    ["̂", "a circumflex"],
    ["̄", "a macron"],
    ["̀", "a grave"],
    ["̃", "a tilde"],
    ["̌", "a caron"],
    ["̊", "a ring"],
]);

/**
 * Every markdown file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, in walk order.
 */
function markdownFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/**
 * Every markdown file a packet writes that is not a note.
 *
 * `.changeset/` publishes into the changelog permanently and `README.md` is the
 * first page anyone reads, so both are swept with the tree.
 *
 * @returns {string[]} The paths that exist.
 */
function looseFiles() {
    const out = ["README.md"];
    if (fs.existsSync(".changeset")) {
        for (const name of fs.readdirSync(".changeset")) {
            if (name.endsWith(".md") && name !== "README.md")
                out.push(path.join(".changeset", name));
        }
    }
    return out.filter((file) => fs.existsSync(file));
}

/** A finding, in the shape every diagnostic in this repository takes. */
function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * Read the mapping.
 *
 * @returns {object} The parsed table.
 */
function readMapping() {
    return YAML.parse(fs.readFileSync(MAPPING_FILE, "utf8"));
}

/**
 * A literal as a regular expression source.
 *
 * @param {string} text - The literal.
 * @returns {string} The escaped source.
 */
function escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * The pattern one retired token is matched by.
 *
 * The trailing boundary permits `'s` and nothing else: a rule that blocked a
 * following apostrophe would miss `Ódinn's` and `Ymir's Children`, and one
 * that allowed any apostrophe would reach into a foreign compound that carries
 * one. A row marked `suffix` is matched through an inflection instead, which is
 * how one row covers a name the corpus writes both bare and declined.
 *
 * @param {object} pair - The mapping row.
 * @returns {RegExp} The pattern.
 */
function patternFor(pair) {
    const before = "(?<![\\p{L}\\p{M}])";
    const after =
        pair.suffix ?
            "[\\p{L}\\p{M}]*(?![\\p{L}\\p{M}])"
        :   "(?![\\p{L}\\p{M}])(?:(?=['’]s(?![\\p{L}\\p{M}]))|(?!['’]))";
    return new RegExp(`${before}${escape(String(pair.retired))}${after}`, "gu");
}

/**
 * Blank out the spans of a file nobody reads as a sentence, keeping every
 * position, so a finding lands where the text lands.
 *
 * @param {string} raw - The whole file.
 * @returns {string} The in-world text, the same length as the file.
 */
export function inWorld(raw) {
    const blank = (text) => text.replace(/[^\n]/g, " ");
    return (
        raw
            // Fenced code, then inline code.
            .replace(/```[\s\S]*?```/g, blank)
            .replace(/`[^`\n]*`/g, blank)
            // The frontmatter lines whose value is an address or the analog.
            .replace(/^(\s*shortcode:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*renamedFrom:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*terran_analog:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*#\s*terran_analog:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            // A wikilink's target, keeping its label; a bare wikilink is all
            // address and goes entirely.
            .replace(/\[\[([^\]\n]*)\]\]/g, (all, inner) => {
                const bar = inner.indexOf("|");
                if (bar === -1) return blank(all);
                return `${blank(`[[${inner.slice(0, bar)}|`)}${inner.slice(bar + 1)}  `;
            })
            // A markdown link's target.
            .replace(/\]\(([^)\n]*)\)/g, blank)
            // An address written bare — `affiliation-odinn`, `place-thrymstead`.
            // The prefixes are the corpus's own, so an ordinary hyphenated
            // compound stays prose and is read.
            .replace(ADDRESS, blank)
            // A file path, and a note's name written as one. Held to a
            // directory the tree has or to a file extension, so `Fadir/Módir`
            // and `Konungr/Konungrkvinde` are read as the titles they are.
            .replace(
                /(?<![\p{L}\p{M}])(?:https?:\/\/|(?:assets|modules|nogit|utils|build|src|lang|styles|systems|packs|images|icons|docs)\/)[\w./#:-]+/gu,
                blank,
            )
            .replace(
                /(?<![\p{L}\p{M}])[\w.-]*[A-Za-z_][\w.-]*\.(?:md|json|mjs|js|yaml|yml|png|webp|svg|jpg)(?![\p{L}\p{M}])/gu,
                blank,
            )
            // A note name written with underscores — `Faith_of_Odinn`.
            .replace(
                /(?<![\p{L}\p{M}])[\p{L}\p{M}]+(?:_[\p{L}\p{M}0-9]+)+(?![\p{L}\p{M}])/gu,
                blank,
            )
    );
}

/**
 * The 1-based line and column of an offset.
 *
 * @param {string} text - The file.
 * @param {number} offset - The offset.
 * @returns {{line: number, column: number}} The position.
 */
function positionOf(text, offset) {
    const before = text.slice(0, offset);
    const line = before.split("\n").length;
    const column = offset - (before.lastIndexOf("\n") + 1) + 1;
    return { line, column };
}

/**
 * Whether a file is Nordmal or Varokhi material, which is what the
 * romanisation governs.
 *
 * @param {string} file - The path, relative to the working directory.
 * @param {string} raw - The whole file.
 * @param {object} scope - The table's `scope`.
 * @returns {boolean} Whether the romanisation is read here.
 */
export function inScope(file, raw, scope) {
    const relative = file.startsWith(`${CONTENT_DIR}/`) ? file.slice(CONTENT_DIR.length + 1) : file;
    if ((scope.paths ?? []).some((prefix) => relative.startsWith(prefix))) return true;
    if ((scope.notes ?? []).includes(relative)) return true;
    const head = raw.split("\n---")[0];
    return (scope.homes ?? []).some((code) =>
        new RegExp(`^\\s*homes:.*(?<![\\p{L}\\p{M}])${escape(code)}(?![\\p{L}\\p{M}])`, "mu").test(
            head,
        ),
    );
}

/**
 * The romanisation, read off the language note's own table.
 *
 * The table's `written` column gives what Nordmal spells and its `never` column
 * gives what it does not. Reading them keeps the guard and the note from
 * disagreeing: a rule copied from the note is a second copy, and the note is
 * where a phonology is settled.
 *
 * @param {string} text - The language note.
 * @param {string} heading - The section's heading text.
 * @returns {{marks: Set<string>, forbidden: Map<string, string>}} The rule.
 */
export function romanisationFrom(text, heading) {
    const start = text.indexOf(heading);
    if (start === -1) throw new Error(`${heading} is not a section of the language note`);
    const rest = text.slice(start);
    const end = rest.indexOf("\n## ");
    const section = end === -1 ? rest : rest.slice(0, end);

    const marks = new Set();
    const forbidden = new Map();
    for (const line of section.split("\n")) {
        if (!line.trim().startsWith("|")) continue;
        const cells = line.split("|").map((cell) => cell.trim());
        if (cells.length < 5) continue;
        const written = cells[2].replace(/`/g, "");
        const never = cells[3];
        for (const mark of written.normalize("NFD").match(/\p{M}/gu) ?? []) marks.add(mark);
        // The `never` column names a letter rather than writing it, so the
        // names are what the note gives and what a finding quotes back.
        if (/thorn/i.test(never)) forbidden.set("þ", "a thorn");
        if (/\beth\b/i.test(never)) forbidden.set("ð", "an eth");
        if (/ash/i.test(never)) forbidden.set("æ", "an ash");
    }
    if (marks.size === 0 || forbidden.size === 0) {
        throw new Error(`${heading} states no romanisation table this rule can read`);
    }
    return { marks, forbidden };
}

/**
 * Every retired token surviving in an in-world sentence.
 *
 * @param {object[]} pairs - The drift rows.
 * @param {object[]} keep - The keep-list.
 * @param {Array<{file: string, raw: string}>} files - The files to read.
 * @param {object} tally - Where counts are collected.
 * @returns {string[]} Findings.
 */
export function checkDrift(pairs, keep, files, tally) {
    const out = [];
    const keepPatterns = keep.map((entry) => ({
        ...entry,
        rx: new RegExp(
            `(?<![\\p{L}\\p{M}])${escape(String(entry.literal))}(?![\\p{L}\\p{M}])`,
            "gu",
        ),
    }));
    // Longest first, so an overlapping row is found at its full length and a
    // shorter row cannot claim part of it.
    const patterns = pairs
        .map((pair) => ({ ...pair, rx: patternFor(pair) }))
        .sort((a, b) => String(b.retired).length - String(a.retired).length);

    for (const { file, raw } of files) {
        const text = inWorld(raw);
        /** @type {Array<[number, number]>} Spans a keep-list word or an earlier row has taken. */
        const taken = [];
        const overlaps = (from, to) => taken.some(([a, b]) => from < b && to > a);

        for (const entry of keepPatterns) {
            entry.rx.lastIndex = 0;
            let match;
            while ((match = entry.rx.exec(text)) !== null) {
                taken.push([match.index, match.index + match[0].length]);
                tally.kept.set(entry.literal, (tally.kept.get(entry.literal) ?? 0) + 1);
            }
        }

        for (const pair of patterns) {
            pair.rx.lastIndex = 0;
            let match;
            while ((match = pair.rx.exec(text)) !== null) {
                const from = match.index;
                const to = from + match[0].length;
                if (overlaps(from, to)) continue;

                if (
                    pair.exceptFollowedBy &&
                    new RegExp(`^(?:${pair.exceptFollowedBy})`, "u").test(text.slice(to))
                ) {
                    tally.excluded.set(
                        `${pair.retired} followed by /${pair.exceptFollowedBy}/`,
                        (tally.excluded.get(
                            `${pair.retired} followed by /${pair.exceptFollowedBy}/`,
                        ) ?? 0) + 1,
                    );
                    continue;
                }
                if (
                    pair.exceptPrecededBy &&
                    new RegExp(`(?:${pair.exceptPrecededBy})$`, "u").test(text.slice(0, from))
                ) {
                    tally.excluded.set(
                        `${pair.retired} preceded by /${pair.exceptPrecededBy}/`,
                        (tally.excluded.get(
                            `${pair.retired} preceded by /${pair.exceptPrecededBy}/`,
                        ) ?? 0) + 1,
                    );
                    continue;
                }

                taken.push([from, to]);
                const { line, column } = positionOf(text, from);
                const says =
                    pair.drop ?
                        `the ${pair.group} table retires it and replaces it with nothing`
                    :   `the ${pair.group} table replaces it with "${pair.replacement}"`;
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `retired name "${match[0]}" survives; ${says}`,
                    ),
                );
                tally.byLayer.set(pair.layer, (tally.byLayer.get(pair.layer) ?? 0) + 1);
                tally.byToken.set(pair.retired, (tally.byToken.get(pair.retired) ?? 0) + 1);
            }
        }
    }
    return out;
}

/**
 * Every break of the romanisation in Nordmal and Varokhi material.
 *
 * @param {object} spec - The table's `romanisation`.
 * @param {{marks: Set<string>, forbidden: Map<string, string>}} rule - The derived rule.
 * @param {Array<{file: string, raw: string}>} files - The files in scope.
 * @param {object} tally - Where counts are collected.
 * @returns {string[]} Findings.
 */
export function checkRomanisation(spec, rule, files, tally) {
    const out = [];
    const foreign = new Map((spec.foreign ?? []).map((entry) => [entry.word, entry.tongue]));
    const variants = (spec.variants ?? []).map((entry) => ({
        ...entry,
        rx: new RegExp(
            `(?<![\\p{L}\\p{M}])${escape(String(entry.retired))}(?![\\p{L}\\p{M}])`,
            "gu",
        ),
    }));
    // The assembly keeps its hard opening, so the word the note refuses is the
    // one that buries it in an English noun. Only a capital is read: written
    // small it is that ordinary noun.
    const assembly = new RegExp(
        `(?<![\\p{L}\\p{M}])(?:Al)?Thing(?:s|stead)?(?![\\p{L}\\p{M}])`,
        "gu",
    );

    for (const { file, raw } of files) {
        const text = inWorld(raw);

        for (const match of text.matchAll(/[\p{L}\p{M}]+/gu)) {
            const word = match[0].normalize("NFC");
            if (foreign.has(word)) {
                tally.foreign.set(word, (tally.foreign.get(word) ?? 0) + 1);
                continue;
            }
            const decomposed = word.normalize("NFD");
            for (const [letter, name] of rule.forbidden) {
                const at = word.toLowerCase().indexOf(letter);
                if (at === -1) continue;
                const { line, column } = positionOf(text, match.index + at);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${word}" is written with ${name}; Nordmal writes it out`,
                    ),
                );
                tally.romanisation.set(name, (tally.romanisation.get(name) ?? 0) + 1);
            }
            for (const [offset, character] of [...decomposed].entries()) {
                if (!/\p{M}/u.test(character) || rule.marks.has(character)) continue;
                const name =
                    MARK_NAMES.get(character) ??
                    `the mark U+${character.codePointAt(0).toString(16)}`;
                const at = match.index + Math.min(offset, word.length - 1);
                const { line, column } = positionOf(text, at);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${word}" carries ${name}, which Nordmal does not write`,
                    ),
                );
                tally.romanisation.set(name, (tally.romanisation.get(name) ?? 0) + 1);
            }
        }

        assembly.lastIndex = 0;
        let match;
        while ((match = assembly.exec(text)) !== null) {
            const { line, column } = positionOf(text, match.index);
            out.push(
                finding(
                    file,
                    line,
                    column,
                    "error",
                    `"${match[0]}" is the assembly; the northern word for a lawful gathering is the ${spec.assembly}`,
                ),
            );
            tally.romanisation.set(
                "the assembly",
                (tally.romanisation.get("the assembly") ?? 0) + 1,
            );
        }

        for (const variant of variants) {
            variant.rx.lastIndex = 0;
            let hit;
            while ((hit = variant.rx.exec(text)) !== null) {
                const { line, column } = positionOf(text, hit.index);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${variant.retired}" is written "${variant.replacement}" — ${variant.note}`,
                    ),
                );
                tally.romanisation.set(
                    "a name of the north",
                    (tally.romanisation.get("a name of the north") ?? 0) + 1,
                );
            }
        }
    }
    return out;
}

/**
 * Check the table itself, before any note is read.
 *
 * @param {object[]} pairs - The drift rows.
 * @returns {string[]} Findings.
 */
export function checkMapping(pairs) {
    const out = [];
    const seen = new Map();
    for (const pair of pairs) {
        const where = `${pair.group}: ${pair.retired}`;
        if (!pair.drop && !pair.replacement) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} names no replacement and is not marked \`drop\``,
                ),
            );
            continue;
        }
        if (pair.drop) continue;
        const replacement = String(pair.replacement);
        if (patternFor(pair).test(replacement)) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} is replaced by "${replacement}", which the sweep finds again; a replacement never carries the name it retires`,
                ),
            );
        }
        const collision = seen.get(replacement);
        if (collision && collision !== pair.retired && !pair.merges) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `"${replacement}" replaces both ${collision} and ${pair.retired}, merging two names the setting keeps apart`,
                ),
            );
        }
        seen.set(replacement, pair.retired);
    }
    return out;
}

/** Run both halves and report. @returns {number} The exit code. */
function main() {
    if (!fs.existsSync(MAPPING_FILE)) {
        console.error(`${MAPPING_FILE}: error: the drift table is absent`);
        return 1;
    }
    const table = readMapping();

    const pairs = [];
    for (const group of PAIR_GROUPS) {
        for (const row of table[group] ?? []) {
            if (row?.retired) pairs.push({ ...row, group });
        }
    }
    if (pairs.length === 0) {
        console.error(`${MAPPING_FILE}: error: the table declares no pairs`);
        return 1;
    }

    const paths = [...markdownFiles(CONTENT_DIR), ...looseFiles()];
    const files = paths.map((file) => ({ file, raw: fs.readFileSync(file, "utf8") }));

    const language = fs.readFileSync(table.romanisation.note, "utf8");
    const rule = romanisationFrom(language, table.romanisation.section);
    const scoped = files.filter(({ file, raw }) => inScope(file, raw, table.scope ?? {}));

    const tally = {
        byLayer: new Map(),
        byToken: new Map(),
        kept: new Map(),
        excluded: new Map(),
        foreign: new Map(),
        romanisation: new Map(),
    };

    const out = [
        ...checkMapping(pairs),
        ...checkDrift(pairs, table.keep ?? [], files, tally),
        ...checkRomanisation(table.romanisation, rule, scoped, tally),
    ];
    for (const line of out) console.error(line);

    const say = (line) => process.stdout.write(`${line}\n`);
    const list = (map) =>
        [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([key, n]) => `${key}=${n}`)
            .join("  ");

    say(
        `${pairs.length} retired name(s) in the table; ${files.length} file(s) swept, ${scoped.length} of them Nordmal or Varokhi.`,
    );
    say(
        `The romanisation is read off ${table.romanisation.note}: ` +
            `${rule.marks.size} mark(s) written, ${[...rule.forbidden.values()].join(", ")} never.`,
    );
    if (tally.byLayer.size) {
        const layers = [...tally.byLayer.entries()].sort((a, b) => a[0] - b[0]);
        say(`Surviving names by packet: ${layers.map(([layer, n]) => `${layer}=${n}`).join("  ")}`);
    }
    if (tally.byToken.size) say(`By name: ${list(tally.byToken)}`);
    if (tally.romanisation.size) say(`Romanisation breaks: ${list(tally.romanisation)}`);
    if (tally.kept.size) say(`Kept words protected from the sweep: ${list(tally.kept)}`);
    say(
        tally.excluded.size ?
            `Excluded by context, and read by nobody as a Nordland name: ${list(tally.excluded)}`
        :   "No occurrence was excluded by context.",
    );
    say(
        tally.foreign.size ?
            `Read past as another tongue's: ${list(tally.foreign)}`
        :   "No word was read past as another tongue's.",
    );
    say(
        "A shortcode, a file path, a wikilink's target, an `affiliation-<god>` line and fenced code are read by nobody and are not swept; a wikilink's label is.",
    );

    const errors = out.filter((line) => line.includes(": error: ")).length;
    if (errors === 0) {
        say(`The drift holds: no retired name survives and the romanisation is kept.`);
        return 0;
    }
    console.error(`${errors} error(s) across ${pairs.length} retired name(s).`);
    return 1;
}

process.exit(main());
