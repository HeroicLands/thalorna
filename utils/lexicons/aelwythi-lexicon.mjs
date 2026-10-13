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
 * The guard over the Aelwythi lexicon.
 *
 * Usage: `node utils/lexicons/aelwythi-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <name>... [--kind place|given|byname]]`
 *
 * Aelwythi is given in the reader's own language, so the page states no
 * sound rules. It states the elements the island's names are built from, the
 * register of the names in use, and the names that stand outside the pattern.
 * Everything checked is read off `Lore/Aelwythi_Lexicon.md` at run time:
 *
 * 1. **Elements.** Each row of the three element tables has a word, a
 *    position (`first`, `last`, `either` or `link`), a sense and an example;
 *    no row stands twice in a table; the example is a registered name built
 *    with the element; every element is used by some registered name.
 * 2. **The register.** Each row names a note that carries the name, has a
 *    declared kind, and a Built from cell of listed elements that spells the
 *    name: every part but the last may open a name, the last may close one,
 *    a link stands only between parts, and a letter doubled at a seam is
 *    written once. A row standing twice is an error.
 * 3. **Coverage.** Every place name, given name and byname of every place and
 *    being in the page's scope stands in the register or in the table of names
 *    outside the pattern.
 * 4. **Names outside the pattern.** A listed name the elements do build is an
 *    error, since it belongs in the register; one the elements do not build is
 *    attested and left as written.
 * 5. **Earth words.** Each name is compared with the local Earth word lists and
 *    morphemes by the rule `word-lists.mjs` states. A hit on an attested name is
 *    a warning, since renaming it is the owner's. `--check` refuses a coined name
 *    that contains an Earth morpheme and prints a word-list hit as an advisory:
 *    the tongue declares no source language and a loose name carries no gloss,
 *    so no list hit is a copy. With no lists present the comparison is skipped
 *    with one message.
 *
 * A guard proves the page agrees with its own elements, never that a name is
 * good; that is judged by reading it aloud.
 *
 * Findings are written `file:line:column: severity: message`.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { earthHits, listDirs, loadEarth } from "./word-lists.mjs";
import {
    CONTENT,
    fold,
    format,
    linked,
    plain,
    readTree,
    section,
    tables,
    ticked,
} from "./lexicon-pages.mjs";

/** The lexicon. */
export const LEXICON = "assets/content/Lore/Aelwythi_Lexicon.md";

/** No source language: Aelwythi is given in the reader's own language, which no list holds. */
export const SOURCES = [];

const POSITIONS = new Set(["first", "last", "either", "link"]);
const KINDS = ["place", "given", "byname"];

/** A name or part reduced to its letters, lower case and unmarked. */
const letters = (s = "") => fold(s).replace(/[^a-z]/g, "");

/** A name without a leading article. */
const stripThe = (s = "") => s.replace(/^the\s+/i, "").trim();

/** The table under a heading as `{header, rows}`, or null. */
function tableUnder(text, heading) {
    const found = section(text, heading, false);
    if (!found) return null;
    const table = tables(found.text, found.offset)[0];
    return table ?? null;
}

/** The index of the column whose header starts with a word. */
const columnOf = (table, word) =>
    table.header.findIndex((c) => plain(c).toLowerCase().startsWith(word));

/**
 * Read the page.
 *
 * @param {string} text - The lexicon page.
 * @returns {object} Scope rows, element tables, the register and the outside table, with the problems met reading them.
 */
export function readPage(text) {
    const problems = [];
    const problem = (offset, message) => problems.push({ offset, message });
    const page = {
        scope: [],
        elements: { place: [], given: [], byname: [] },
        kinds: new Map(),
        register: [],
        outside: [],
        problems,
    };

    const scope = tableUnder(text, "## Scope");
    if (!scope) problem(null, 'the page states no "## Scope" table');
    else {
        const [k, v] = [columnOf(scope, "kind"), columnOf(scope, "value")];
        for (const row of scope.rows)
            page.scope.push({
                kind: plain(row.cells[k]).toLowerCase(),
                values: ticked(row.cells[v]),
                offset: row.offset,
            });
    }

    for (const kind of KINDS) {
        const heading = {
            place: "### Place-name elements",
            given: "### Given-name elements",
            byname: "### Byname elements",
        }[kind];
        const table = tableUnder(text, heading);
        if (!table) {
            problem(null, `the page states no "${heading}" table`);
            continue;
        }
        const [e, s, n, x] = ["element", "stands", "sense", "example"].map((w) =>
            columnOf(table, w),
        );
        if ([e, s, n, x].includes(-1)) {
            problem(
                null,
                `the "${heading}" table needs Element, Stands, Sense and Example columns`,
            );
            continue;
        }
        for (const row of table.rows) {
            const [word] = ticked(row.cells[e]);
            page.elements[kind].push({
                kind,
                word: word ?? "",
                stands: plain(row.cells[s]).toLowerCase(),
                sense: plain(row.cells[n]),
                examples: row.cells[x]
                    .split(",")
                    .map((c) => plain(c))
                    .filter(Boolean),
                offset: row.offset,
            });
        }
    }

    const kinds = tableUnder(text, "### Kinds");
    if (!kinds) problem(null, 'the page states no "### Kinds" table');
    else
        for (const row of kinds.rows)
            page.kinds.set(ticked(row.cells[0])[0] ?? plain(row.cells[0]), {
                uses: ticked(row.cells[columnOf(kinds, "built")]),
            });

    const names = tableUnder(text, "### Names");
    if (!names) problem(null, 'the page states no "### Names" table');
    else {
        const [a, b, c, d] = ["name", "notes", "kind", "built"].map((w) => columnOf(names, w));
        for (const row of names.rows)
            page.register.push({
                name: plain(row.cells[a]),
                addresses: linked(row.cells[b]),
                kind: ticked(row.cells[c])[0] ?? plain(row.cells[c]),
                parts: ticked(row.cells[d]),
                offset: row.offset,
            });
    }

    const outside = tableUnder(text, "## Names outside the pattern");
    if (!outside) problem(null, 'the page states no "## Names outside the pattern" table');
    else {
        const [a, b, c] = ["name", "notes", "kind"].map((w) => columnOf(outside, w));
        for (const row of outside.rows)
            page.outside.push({
                name: plain(row.cells[a]),
                addresses: linked(row.cells[b]),
                kind: ticked(row.cells[c])[0] ?? plain(row.cells[c]),
                offset: row.offset,
            });
    }
    return page;
}

/** The element tables a kind of name may draw on. */
const usable = (page, kind) =>
    kind === "place" ? page.elements.place
    : kind === "given" ? page.elements.given
    : [...page.elements.byname, ...page.elements.place];

/** Whether an element may stand at a place in a name. */
function fits(element, index, last) {
    const s = element.stands;
    if (s === "link") return index > 0 && !last;
    if (last) return s === "last" || s === "either";
    return s === "first" || s === "either";
}

/**
 * Every way a name is built from elements of a kind.
 *
 * @param {string} name - The name.
 * @param {string} kind - `place`, `given` or `byname`.
 * @param {ReturnType<typeof readPage>} page - The page.
 * @returns {string[][]} Each reading, as its parts.
 */
export function readings(name, kind, page) {
    const target = letters(stripThe(name));
    const pool = usable(page, kind).filter((e) => e.word);
    const out = [];
    const walk = (rest, parts, previous) => {
        if (rest === "") {
            if (parts.length && fits(parts.at(-1).element, parts.length - 1, true))
                out.push(parts.map((p) => p.element.word));
            return;
        }
        for (const element of pool) {
            const word = letters(element.word);
            if (!word) continue;
            const index = parts.length;
            for (const skip of [0, 1]) {
                // A letter doubled at a seam is written once.
                if (skip === 1 && !(previous && previous.at(-1) === word[0])) continue;
                const written = word.slice(skip);
                if (!rest.startsWith(written) || !written) continue;
                const left = rest.slice(written.length);
                if (!fits(element, index, left === "")) continue;
                walk(left, [...parts, { element }], word);
            }
        }
    };
    walk(target, [], "");
    return out;
}

/** Whether some reading of the name spells exactly the given parts. */
function spells(name, kind, page, parts) {
    return readings(name, kind, page).some(
        (r) => r.length === parts.length && r.every((p, i) => p === parts[i]),
    );
}

/**
 * Hold a loose name to the elements and the Earth lists.
 *
 * @param {string} name - The name.
 * @param {ReturnType<typeof readPage>} page - The page.
 * @param {ReturnType<typeof loadEarth>|null} earth - The lists, or null.
 * @param {string} [kind] - `place`, `given` or `byname`; place when absent.
 * @returns {{parts: string[]|null, problems: string[], advisories: string[]}} A
 *   problem refuses the name; an advisory is a word-list hit to read.
 */
export function checkWord(name, page, earth, kind = "place") {
    const found = readings(name, kind, page);
    const problems = [];
    const advisories = [];
    if (!found.length)
        problems.push(`${name} is not built from listed elements of the ${kind} kind`);
    if (earth)
        for (const hit of earthHits(name, earth, { sources: SOURCES }))
            (hit.severity === "error" ? problems : advisories).push(`${name} ${hit.message}`);
    return { parts: found[0] ?? null, problems, advisories };
}

/** The names a note carries, by the kind the register files them under. */
function requiredNames(note) {
    const front = note.front;
    const out = [];
    if (front.type === "place") {
        const full = typeof front.name === "string" ? front.name : front.name?.full;
        if (full) out.push({ name: stripThe(full), kind: "place" });
    } else if (front.type === "being") {
        const own = front.name ?? {};
        if (own.given || own.clan) {
            if (own.given) out.push({ name: own.given, kind: "given" });
            if (own.clan) out.push({ name: own.clan, kind: "byname" });
        } else if (own.full) {
            const words = own.full.split(/\s+/);
            out.push({ name: words[0], kind: "given" });
            if (words.length > 1) out.push({ name: words.slice(1).join(" "), kind: "byname" });
        }
    }
    return out;
}

/** Whether a note carries a name, as a title, a word of a being's name, or an alias. */
function carries(note, name) {
    const want = fold(stripThe(name));
    return note.names.some((n) => {
        const have = fold(stripThe(n.name));
        return have === want || have.split(/\s+/).includes(want) || have.endsWith(` ${want}`);
    });
}

/** Whether a note falls in the page's scope. */
function inScope(note, page) {
    if (!note.front || !note.address) return false;
    const type = page.scope.filter((s) => s.kind === "type").flatMap((s) => s.values);
    if (!type.includes(note.front.type)) return false;
    if (page.scope.some((s) => s.kind === "skip" && s.values.includes(note.address))) return false;
    const data = note.front.data ?? {};
    return page.scope.some(
        (s) =>
            (s.kind === "address" && s.values.includes(note.address)) ||
            (s.kind === "culture" && s.values.includes(data.culture)) ||
            (s.kind === "path" && s.values.some((p) => note.rel.startsWith(p))),
    );
}

/**
 * Every finding over the page and the tree.
 *
 * @param {object} input
 * @param {string} input.lexFile - The page's path.
 * @param {string} input.lexText - The page.
 * @param {ReturnType<typeof readTree>} input.tree - The content tree.
 * @param {ReturnType<typeof loadEarth>|null} [input.earth] - The Earth lists, or null to skip.
 * @returns {{findings: object[], page: object, missing: {name: string, address: string, kind: string}[]}}
 */
export function analyse({ lexFile, lexText, tree, earth = null }) {
    const out = [];
    const add = (offset, severity, message) =>
        out.push({ file: lexFile, text: lexText, offset, severity, message });
    const page = readPage(lexText);
    for (const p of page.problems) add(p.offset, "error", p.message);
    const byAddress = new Map(tree.filter((n) => n.address).map((n) => [n.address, n]));

    // 1. Elements.
    const used = new Set(page.register.flatMap((r) => r.parts));
    for (const kind of KINDS) {
        const seen = new Set();
        for (const e of page.elements[kind]) {
            const key = `${e.word}/${e.stands}`;
            if (!e.word) add(e.offset, "error", "an element row names no `word`");
            if (seen.has(key))
                add(
                    e.offset,
                    "error",
                    `the ${kind} element \`${e.word}\` (${e.stands}) stands twice`,
                );
            seen.add(key);
            if (!POSITIONS.has(e.stands))
                add(
                    e.offset,
                    "error",
                    `the ${kind} element \`${e.word}\` stands "${e.stands}", not first, last, either or link`,
                );
            if (!e.sense) add(e.offset, "error", `the ${kind} element \`${e.word}\` has no sense`);
            if (!used.has(e.word))
                add(
                    e.offset,
                    "error",
                    `the ${kind} element \`${e.word}\` is used by no registered name`,
                );
            if (!e.examples.length)
                add(e.offset, "error", `the ${kind} element \`${e.word}\` has no example`);
            for (const example of e.examples) {
                const row = page.register.find((r) => r.name === example);
                if (!row)
                    add(
                        e.offset,
                        "error",
                        `the example ${example} of \`${e.word}\` is not in the register`,
                    );
                else if (!row.parts.includes(e.word))
                    add(
                        e.offset,
                        "error",
                        `the example ${example} of \`${e.word}\` is not built with it`,
                    );
            }
        }
    }

    // 2. The register.
    const standing = new Map();
    for (const row of page.register) {
        const key = `${row.kind}:${row.name}`;
        if (standing.has(key)) add(row.offset, "error", `${row.name} stands twice in the register`);
        standing.set(key, row);
        if (!page.kinds.has(row.kind))
            add(
                row.offset,
                "error",
                `${row.name} has the kind "${row.kind}", which the page does not declare`,
            );
        for (const address of row.addresses) {
            const note = byAddress.get(address);
            if (!note)
                add(row.offset, "error", `${row.name} links ${address}, which is not a note`);
            else if (!carries(note, row.name))
                add(
                    row.offset,
                    "error",
                    `${row.name} links ${address}, which does not carry the name`,
                );
        }
        if (!row.addresses.length) add(row.offset, "error", `${row.name} names no note`);
        if (!row.parts.length) {
            add(
                row.offset,
                "error",
                `${row.name} is not built from listed elements: its Built from cell is empty`,
            );
            continue;
        }
        const pool = usable(page, row.kind);
        const unknown = row.parts.filter((p) => !pool.some((e) => e.word === p));
        if (unknown.length)
            add(
                row.offset,
                "error",
                `${row.name} is not built from listed elements: ${unknown.map((u) => `\`${u}\``).join(", ")} ${unknown.length === 1 ? "is" : "are"} not listed for a ${row.kind}`,
            );
        else if (!spells(row.name, row.kind, page, row.parts))
            add(
                row.offset,
                "error",
                `${row.name} is not what ${row.parts.map((p) => `\`${p}\``).join(" + ")} spell through the listed elements and their positions`,
            );
    }

    // 3. Coverage, and 4. the names outside the pattern.
    const outsideKeys = new Map();
    for (const row of page.outside) {
        const key = `${row.kind}:${row.name}`;
        if (outsideKeys.has(key))
            add(
                row.offset,
                "error",
                `${row.name} stands twice among the names outside the pattern`,
            );
        outsideKeys.set(key, row);
        if (standing.has(key))
            add(
                row.offset,
                "error",
                `${row.name} stands in the register and among the names outside the pattern`,
            );
        if (!page.kinds.has(row.kind))
            add(
                row.offset,
                "error",
                `${row.name} has the kind "${row.kind}", which the page does not declare`,
            );
        for (const address of row.addresses) {
            const note = byAddress.get(address);
            if (!note)
                add(row.offset, "error", `${row.name} links ${address}, which is not a note`);
            else if (!carries(note, row.name))
                add(
                    row.offset,
                    "error",
                    `${row.name} links ${address}, which does not carry the name`,
                );
        }
        if (readings(row.name, row.kind, page).length)
            add(
                row.offset,
                "error",
                `${row.name} is built from listed elements and belongs in the register`,
            );
    }
    const missing = [];
    for (const note of tree) {
        if (!inScope(note, page)) continue;
        for (const { name, kind } of requiredNames(note)) {
            const key = `${kind}:${name}`;
            const row = standing.get(key) ?? outsideKeys.get(key);
            if (!row) {
                missing.push({ name, address: note.address, kind });
                add(
                    null,
                    "error",
                    `${name} (${kind}) of ${note.address} is not in the register or among the names outside the pattern`,
                );
            } else if (!row.addresses.includes(note.address))
                add(row.offset, "error", `${name} does not link ${note.address}, which carries it`);
        }
    }

    // 5. Earth words.
    if (earth)
        for (const row of [...page.register, ...page.outside]) {
            const hits = earthHits(row.name, earth, { sources: SOURCES });
            if (hits.length)
                add(
                    row.offset,
                    "warning",
                    `${row.name} ${hits.map((h) => h.message).join("; ")}; it is attested, so renaming it is the owner's`,
                );
        }
    return { findings: out, page, missing };
}

/** The guard's main. */
export function run(argv = process.argv.slice(2)) {
    const dirs = listDirs(argv);
    const earth = loadEarth(dirs);
    const haveLists = earth.lists.size > 0 || earth.morphemes.length > 0;
    if (!haveLists)
        console.log(
            `Aelwythi lexicon: no Earth word lists in ${dirs.join(", ")}, Earth words not compared`,
        );
    if (!fs.existsSync(LEXICON)) {
        console.error(`${LEXICON}: error: the lexicon page does not exist`);
        process.exitCode = 1;
        return;
    }
    const lexText = fs.readFileSync(LEXICON, "utf8");
    const check = argv.indexOf("--check");
    if (check !== -1) {
        const page = readPage(lexText);
        const kindAt = argv.indexOf("--kind");
        const kind = kindAt === -1 ? "place" : argv[kindAt + 1];
        const skip = new Set(kindAt === -1 ? [] : [kindAt, kindAt + 1]);
        for (const [i, name] of argv.entries()) {
            if (i <= check || skip.has(i) || name.startsWith("--")) continue;
            const result = checkWord(name, page, haveLists ? earth : null, kind);
            console.log(
                `${name} (${kind}): ${result.parts ? result.parts.join(" + ") : "no reading"}`,
            );
            for (const p of result.problems) console.log(`  ${p}`);
            for (const a of result.advisories) console.log(`  advisory: ${a}`);
            if (result.problems.length) process.exitCode = 1;
        }
        return;
    }
    const tree = readTree(CONTENT);
    const { findings, page, missing } = analyse({
        lexFile: LEXICON,
        lexText,
        tree,
        earth: haveLists ? earth : null,
    });
    if (argv.includes("--missing")) {
        for (const m of missing)
            console.log(`| **${m.name}** | [[${m.address}\\|${m.name}]] | \`${m.kind}\` | — |`);
        return;
    }
    for (const f of findings) console.error(format(f));
    const errors = findings.filter((f) => f.severity === "error").length;
    console.log(
        `Aelwythi lexicon: ${page.elements.place.length + page.elements.given.length + page.elements.byname.length} elements, ${page.register.length} registered names, ${page.outside.length} outside the pattern; ${errors} error(s), ${findings.length - errors} warning(s).`,
    );
    if (errors) process.exitCode = 1;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) run();
