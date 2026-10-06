/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Collision check for the elder-tongue lexicons.
 *
 * Usage: `node utils/lexicons/collision-check.mjs [--wordlists <dir>]
 * [--skeleton] [--skeleton-lists <name,...>] <lexicon-note.md>...`
 *
 * Every form in the first column of a lexicon table (a form in a code span) is
 * compared with word lists the person running the check keeps locally. The
 * repository holds no list and no word of any real language; the lists are
 * assembled from Eldamo's published lexicon data (Quenya, Sindarin, Khuzdul),
 * the Kotus Finnish word list, a Welsh Hunspell dictionary, a Hebrew Hunspell
 * dictionary and an ORACC Akkadian glossary, one form per line in
 * `<language>.txt`.
 *
 * The directory is `--wordlists <dir>`, else the `COLLISION_WORDLISTS`
 * environment variable, else `nogit/wordlists`. A worktree points the variable
 * at the main checkout's directory. With no `.txt` list present the check
 * prints a single message and exits 0, so CI, which never has the lists,
 * compares nothing.
 *
 * Normalization applied to both sides: lowercase, marks stripped (`ë` becomes
 * `e`), `c` and `q` become `k`, `w` becomes `v`, `ph` becomes `f`, `th` and `dh`
 * become `t` and `d`, `kh` and `gh` become `k` and `g`, doubled letters
 * collapse, anything that is not a letter is dropped.
 *
 * Only first-column cells that are words are compared: a form needs at least
 * three letters after normalization, so single letters, digraphs in phonology
 * tables, suffix stubs, punctuation and numbers are skipped. A skeleton is
 * exempt from the length floor because its radicals are the letters.
 *
 * Findings: a form matching a list entry exactly after normalization. A
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
 * Findings are `file:line:column: error: …` and notes are
 * `file:line:column: note: …`, each naming the list and never the matching
 * word. Exit status is 1 when there is a finding, else 0; notes never change it.
 */

import fs from "node:fs";
import path from "node:path";

const DEFAULT_DIR = "nogit/wordlists";
const MIN_EDIT_LENGTH = 5;

/**
 * Reduce a form to its comparison shape.
 * @param {string} form
 * @returns {string}
 */
export function normalize(form) {
    let s = form
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/[^\p{L}]/gu, "");
    s = s.replace(/[cq]/g, "k").replace(/w/g, "v");
    s = s.replace(/ph/g, "f").replace(/th/g, "t").replace(/dh/g, "d");
    s = s.replace(/kh/g, "k").replace(/gh/g, "g");
    return s.replace(/(\p{L})\1+/gu, "$1");
}

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
 * Forms in the first column of every markdown table row of a note.
 * @param {string} text
 * @param {boolean} forceSkeleton Treat every form as a skeleton.
 * @returns {{ line: number, column: number, form: string, skeleton: boolean }[]}
 */
export function extractForms(text, forceSkeleton = false) {
    const rows = [];
    text.split("\n").forEach((raw, index) => {
        const match = /^\s*\|\s*`([^`]+)`/.exec(raw);
        if (!match) return;
        const form = match[1];
        const skeleton = forceSkeleton || SKELETON_SHAPE.test(form);
        const length = normalize(form).length;
        if (length === 0 || (!skeleton && length < MIN_FORM_LENGTH)) return;
        const column = match.index + match[0].length - form.length;
        rows.push({
            line: index + 1,
            column,
            form,
            skeleton,
        });
    });
    return rows;
}

/**
 * Read every `<language>.txt` in a directory, normalized and deduplicated.
 * @param {string} dir
 * @returns {Map<string, Set<string>>}
 */
export function loadLists(dir) {
    const lists = new Map();
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return lists;
    for (const name of fs.readdirSync(dir).sort()) {
        if (!name.endsWith(".txt")) continue;
        const norm = new Set();
        for (const line of fs.readFileSync(path.join(dir, name), "utf8").split("\n")) {
            const n = normalize(line);
            if (!n) continue;
            norm.add(n);
        }
        if (norm.size > 0) lists.set(name.slice(0, -4), norm);
    }
    return lists;
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
 * Run the check.
 * @param {string[]} argv Arguments after the script name.
 * @param {Record<string, string | undefined>} env
 * @param {{ out: (s: string) => void, err: (s: string) => void }} io
 * @returns {number} Exit status.
 */
export function main(argv, env = process.env, io = { out: console.log, err: console.error }) {
    const files = [];
    let dir = env.COLLISION_WORDLISTS || DEFAULT_DIR;
    let skeleton = false;
    let skeletonLists = DEFAULT_SKELETON_LISTS;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === "--wordlists") dir = argv[++i];
        else if (argv[i].startsWith("--wordlists=")) dir = argv[i].slice("--wordlists=".length);
        else if (argv[i] === "--skeleton-lists") skeletonLists = splitNames(argv[++i]);
        else if (argv[i].startsWith("--skeleton-lists="))
            skeletonLists = splitNames(argv[i].slice("--skeleton-lists=".length));
        else if (argv[i] === "--skeleton") skeleton = true;
        else files.push(argv[i]);
    }
    const lists = loadLists(dir);
    if (lists.size === 0) {
        io.out(`collision-check: no word lists in ${dir}, nothing compared`);
        return 0;
    }
    let findings = 0;
    let notes = 0;
    let forms = 0;
    for (const file of files) {
        const rel = path.relative(process.cwd(), file) || file;
        for (const row of extractForms(fs.readFileSync(file, "utf8"), skeleton)) {
            forms++;
            for (const hit of compare(row, lists, skeletonLists)) {
                if (hit.kind === "one edit") {
                    notes++;
                    io.err(
                        `${rel}:${row.line}:${row.column}: note: one edit from an entry in the ${hit.list} list`,
                    );
                } else {
                    findings++;
                    io.err(
                        `${rel}:${row.line}:${row.column}: error: ${hit.kind} collision with the ${hit.list} list`,
                    );
                }
            }
        }
    }
    io.out(
        `collision-check: ${forms} forms compared with ${lists.size} lists (${[...lists.keys()].join(", ")}), ${findings} findings, ${notes} near matches for review`,
    );
    return findings > 0 ? 1 : 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) {
    process.exit(main(process.argv.slice(2)));
}
