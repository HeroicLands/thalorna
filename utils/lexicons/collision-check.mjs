/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Collision check for the lexicons.
 *
 * Usage: `node utils/lexicons/collision-check.mjs [--wordlists <dir>]...
 * [--sources <list,...>] [--borrows] [--skeleton] [--skeleton-lists <name,...>]
 * [--allow <form,...>] <lexicon-note.md>...`
 *
 * Every form in the first column of a lexicon table (a form in a code span) is
 * compared with word lists the person running the check keeps locally, read by
 * `word-lists.mjs`, whose header states the lists' format and the rule. The
 * repository holds no list and no word of any real language.
 *
 * **The rule.** A form is an error only when it copies a source language: the
 * same form as a word in the list of a source language its culture is modelled
 * on, with the same meaning. Every other collision is an advisory: one with a
 * list that is no source language, one with a source-language word of another
 * meaning, and one with a source-language word the list carries no gloss for.
 * A form's meaning is the cell of its table's `Gloss`, `Meaning` or `Sense`
 * column; a form in a table without one carries no gloss, so its collisions
 * are advisories.
 *
 * A copy is an advisory too in two cases. A row whose table has an `Attested`
 * column, and whose cell there links a note, is a form the setting already
 * attests: renaming it is the owner's, as in the guards. And a lexicon that
 * borrows from its source languages by design, by its guard's `BORROWS` or
 * by `--borrows`, has its copies reported as advisories naming the source
 * word.
 *
 * **Source languages.** `--sources` names them for every file given. Without
 * it, a file takes the source languages its guard declares: every
 * `*-lexicon.mjs` beside this module that exports `SOURCES` declares them for
 * its `LEXICON` and its `NOTE`. A guard that declares them by tongue lends the
 * file all of them, since a table row names no tongue. A file no guard covers
 * has none.
 *
 * `--allow` names forms that stand although a list holds them: it exists for
 * the few words a name already carries, and each is compared after the same
 * normalization as every other form.
 *
 * The directories are each `--wordlists <dir>`, else the `COLLISION_WORDLISTS`
 * environment variable (paths joined by the platform's delimiter), else
 * `nogit/wordlists` and `nogit/real-word-audit/lists` of the checkout, or of
 * the main checkout when run inside a worktree under `.claude/worktrees/`. With
 * no `.txt` list present the check prints a single message and exits 0, so CI,
 * which never has the lists, compares nothing.
 *
 * Both sides are compared after `normalize`.
 *
 * Only first-column cells that are words are compared: a form needs at least
 * three letters after normalization, so single letters, digraphs in phonology
 * tables, punctuation and numbers are skipped. A suffix or an ending written
 * with its opening hyphen (`-ândis`) is bound and never stands as a word, so it
 * is skipped at any length; the words built with it are compared. A skeleton is
 * exempt from the length floor because its radicals are the letters. A table
 * whose first header cell is `Class`, `Tongue` or `Source` lists a lexicon's
 * labels for word classes, name tongues and word sources, not words, and is
 * skipped. A table whose first
 * header cell is `element`, `closing` or `ground-closing` lists the pieces a
 * tongue builds its names from, and is skipped too: a name stands even where a
 * real language has the same form, so only a tongue's words are held to the
 * lists, never the pieces of its names.
 *
 * Collisions: a form matching a list entry exactly after normalization. A
 * skeleton (three radicals joined by hyphens, each radical one letter or one of
 * the consonant digraphs th, kh, gh, sh, zh, dh, ch, ph; or any first-column
 * form under `--skeleton`) collides when it equals a list entry after
 * normalization, so a list of consonantal roots is matched root for root.
 *
 * Skeleton comparison uses only the lists in `--skeleton-lists`, default
 * `khuzdul,akkadian`: those hold roots or forms whose consonants carry meaning.
 * An unvocalized whole-word list (Hebrew, for one) holds nearly every
 * three-consonant combination, so matching skeletons against it flags almost
 * every root; name it in `--skeleton-lists` to opt it in. Whole-word comparison
 * always uses every list.
 *
 * Review notes: a form of five or more letters within one edit of a list entry
 * is a near match. It is printed for review by ear and is not a finding; a near
 * match is judged by how the word sounds beside its neighbour, which no edit
 * distance decides.
 *
 * Errors are `file:line:column: error: …`, advisories
 * `file:line:column: warning: …` and notes `file:line:column: note: …`. Each
 * names the list and never the matching word; an error quotes the gloss of the
 * source-language word it copies. Exit status is 1 when there is an error,
 * else 0; advisories and notes never change it.
 */

import fs from "node:fs";
import path from "node:path";
import { allSources, judge, listDirs, loadEarth, normalize } from "./word-lists.mjs";

export { normalize };

const MIN_EDIT_LENGTH = 5;
/** First header cells naming the column that holds a row's meaning. */
const GLOSS_HEADERS = new Set(["gloss", "meaning", "sense"]);

/**
 * Whether two strings are at most one insertion, deletion or substitution apart.
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
export function withinOneEdit(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    if (i === a.length && i === b.length) return true;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1);
    const [short, long] = a.length < b.length ? [a, b] : [b, a];
    return short.slice(i) === long.slice(i + 1);
}

const MIN_FORM_LENGTH = 3;
const DEFAULT_SKELETON_LISTS = ["khuzdul", "akkadian"];
const RADICAL = "(?:th|kh|gh|sh|zh|dh|ch|ph|\\p{L})";
const SKELETON_SHAPE = new RegExp(`^${RADICAL}(?:-${RADICAL}){2}$`, "iu");
/**
 * First header cells of tables that hold no words to compare: a lexicon's labels
 * for word classes, name tongues and word sources, and the pieces its names are
 * built from.
 */
const LABEL_HEADERS = new Set([
    "class",
    "tongue",
    "source",
    "element",
    "closing",
    "ground-closing",
]);

/** The cells of a table row, split on its unescaped pipes. */
const cellsOf = (raw) => raw.split(/(?<!\\)\|/);

/**
 * Forms in the first column of every markdown table row of a note, with the
 * row's gloss when the table has a Gloss, Meaning or Sense column, and whether
 * the row is attested: its table has an Attested column whose cell links a note.
 * @param {string} text
 * @param {boolean} forceSkeleton Treat every form as a skeleton.
 * @returns {{ line: number, column: number, form: string, skeleton: boolean, gloss: string, attested: boolean }[]}
 */
export function extractForms(text, forceSkeleton = false) {
    const rows = [];
    let header = null;
    let glossAt = -1;
    let attestedAt = -1;
    text.split("\n").forEach((raw, index) => {
        if (!/^\s*\|/.test(raw)) {
            header = null;
            return;
        }
        if (header === null) {
            const heads = cellsOf(raw).map((c) => c.trim().toLowerCase());
            header = heads[1] ?? "";
            glossAt = heads.findIndex((c, i) => i > 1 && GLOSS_HEADERS.has(c));
            attestedAt = heads.findIndex((c, i) => i > 1 && c === "attested");
            return;
        }
        if (LABEL_HEADERS.has(header)) return;
        const match = /^\s*\|\s*`([^`]+)`/.exec(raw);
        if (!match) return;
        const form = match[1];
        if (form.startsWith("-")) return;
        const skeleton = forceSkeleton || SKELETON_SHAPE.test(form);
        const length = normalize(form).length;
        if (length === 0 || (!skeleton && length < MIN_FORM_LENGTH)) return;
        const column = match.index + match[0].length - form.length;
        const gloss = glossAt === -1 ? "" : (cellsOf(raw)[glossAt] ?? "").trim();
        rows.push({
            line: index + 1,
            column,
            form,
            skeleton,
            gloss: /^[-—\s]*$/.test(gloss) ? "" : gloss,
            attested: attestedAt !== -1 && /\[\[/.test(cellsOf(raw)[attestedAt] ?? ""),
        });
    });
    return rows;
}

/**
 * Compare one form with every list.
 * @param {{ form: string, skeleton: boolean }} row
 * @param {Map<string, Set<string>>} lists
 * @param {string[]} skeletonLists Names of the lists a skeleton is compared with.
 * @returns {{ list: string, kind: string }[]}
 */
export function compare(row, lists, skeletonLists = DEFAULT_SKELETON_LISTS) {
    const hits = [];
    const norm = normalize(row.form);
    if (!norm) return hits;
    for (const [list, entries] of lists) {
        if (row.skeleton) {
            if (skeletonLists.includes(list) && entries.has(norm))
                hits.push({ list, kind: "skeleton" });
        } else if (entries.has(norm)) {
            hits.push({ list, kind: "exact" });
        } else if (norm.length >= MIN_EDIT_LENGTH) {
            for (const entry of entries) {
                if (withinOneEdit(norm, entry)) {
                    hits.push({ list, kind: "one edit" });
                    break;
                }
            }
        }
    }
    return hits;
}

/**
 * @param {string | undefined} value Comma-separated list names.
 * @returns {string[]}
 */
function splitNames(value = "") {
    return value
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean);
}

/**
 * The source languages each guard declares, and whether it borrows from them,
 * by the resolved path of every note it guards: its `LEXICON` and, where it
 * exports one, its language `NOTE`. A guard is any `*-lexicon.mjs` beside this
 * module that exports `SOURCES`; it borrows when it exports `BORROWS = true`.
 *
 * @param {string} [dir] - The directory holding the guards.
 * @returns {Promise<Map<string, {sources: string[]|Record<string, string[]>, borrows: boolean}>>}
 */
export async function declaredSources(dir = import.meta.dirname) {
    const out = new Map();
    for (const name of fs.readdirSync(dir).sort()) {
        if (!name.endsWith("-lexicon.mjs")) continue;
        const guard = await import(path.join(dir, name));
        if (!guard.SOURCES) continue;
        for (const file of [guard.LEXICON, guard.NOTE].filter(Boolean))
            out.set(path.resolve(file), {
                sources: guard.SOURCES,
                borrows: guard.BORROWS === true,
            });
    }
    return out;
}

/**
 * Run the check.
 * @param {string[]} argv Arguments after the script name.
 * @param {Record<string, string | undefined>} env
 * @param {{ out: (s: string) => void, err: (s: string) => void }} io
 * @param {{ sourcesByFile?: Map<string, {sources: string[]|Record<string, string[]>, borrows: boolean}> }} [declared]
 *   What each guarded note declares, from `declaredSources`.
 * @returns {number} Exit status.
 */
export function main(
    argv,
    env = process.env,
    io = { out: console.log, err: console.error },
    { sourcesByFile = new Map() } = {},
) {
    const files = [];
    let skeleton = false;
    let skeletonLists = DEFAULT_SKELETON_LISTS;
    let allow = new Set();
    let sources = null;
    let borrows = null;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === "--wordlists") i++;
        else if (argv[i].startsWith("--wordlists=")) continue;
        else if (argv[i] === "--skeleton-lists") skeletonLists = splitNames(argv[++i]);
        else if (argv[i].startsWith("--skeleton-lists="))
            skeletonLists = splitNames(argv[i].slice("--skeleton-lists=".length));
        else if (argv[i] === "--allow") allow = new Set(splitNames(argv[++i]).map(normalize));
        else if (argv[i].startsWith("--allow="))
            allow = new Set(splitNames(argv[i].slice("--allow=".length)).map(normalize));
        else if (argv[i] === "--sources") sources = splitNames(argv[++i]);
        else if (argv[i].startsWith("--sources="))
            sources = splitNames(argv[i].slice("--sources=".length));
        else if (argv[i] === "--borrows") borrows = true;
        else if (argv[i] === "--skeleton") skeleton = true;
        else files.push(argv[i]);
    }
    const dirs = listDirs(argv, env, process.cwd(), "COLLISION_WORDLISTS");
    const earth = loadEarth(dirs);
    const { lists } = earth;
    if (lists.size === 0) {
        io.out(`collision-check: no word lists in ${dirs.join(", ")}, nothing compared`);
        return 0;
    }
    let findings = 0;
    let advisories = 0;
    let notes = 0;
    let forms = 0;
    for (const file of files) {
        const rel = path.relative(process.cwd(), file) || file;
        const declared = sourcesByFile.get(path.resolve(file));
        const fileSources = sources ?? allSources(declared?.sources);
        const fileBorrows = borrows ?? declared?.borrows ?? false;
        for (const row of extractForms(fs.readFileSync(file, "utf8"), skeleton)) {
            if (allow.has(normalize(row.form))) continue;
            forms++;
            for (const hit of compare(row, lists, skeletonLists)) {
                if (hit.kind === "one edit") {
                    notes++;
                    io.err(
                        `${rel}:${row.line}:${row.column}: note: one edit from an entry in the ${hit.list} list`,
                    );
                    continue;
                }
                const { severity, reason } = judge({
                    list: hit.list,
                    norm: normalize(row.form),
                    gloss: row.gloss,
                    sources: fileSources,
                    glosses: earth.glosses,
                    borrows: fileBorrows,
                });
                // A copy on an attested row is the owner's to judge, as in the guards.
                const owned = severity === "error" && row.attested;
                const shown = owned ? "warning" : severity;
                if (shown === "error") findings++;
                else advisories++;
                io.err(
                    `${rel}:${row.line}:${row.column}: ${shown}: ${hit.kind} collision with the ${hit.list} list${reason}${owned ? "; it is attested, so the form is the owner's" : ""}`,
                );
            }
        }
    }
    io.out(
        `collision-check: ${forms} forms compared with ${lists.size} lists (${[...lists.keys()].join(", ")}), ${findings} findings, ${advisories} advisories, ${notes} near matches for review`,
    );
    return findings > 0 ? 1 : 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) {
    const sourcesByFile = await declaredSources();
    process.exit(main(process.argv.slice(2), process.env, undefined, { sourcesByFile }));
}
