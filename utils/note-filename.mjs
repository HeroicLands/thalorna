/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * A note's file name is its sanitized name.
 *
 * The stem of every note under the content tree is {@link sanitizeName} of its
 * `name.full`, or of `name` where the note writes its name as a bare string. The
 * rule follows package-build's `engine/content-slug.mjs`, so the tree has one
 * normalization, except that it keeps the case and joins with `_`:
 *
 * - transliterate with `unidecode`, so `Jênchái` is `Jenchai`;
 * - elide `'` and `’`, so `Ki'ich'chik` is `Kiichchik`;
 * - turn every other run of non-alphanumerics into `_`, trimmed of `_`.
 *
 * Two shapes add the shortcode, as `<stem>_<shortcode>`:
 *
 * - a folder note (`type: folder`), because `Folders/` is flat;
 * - two or more notes in one directory whose names sanitize alike: each of
 *   them takes it.
 *
 * A note that states no name is exempt.
 */

import fs from "node:fs";
import path from "node:path";
import unidecode from "unidecode";
import YAML from "yaml";

/** The content tree, relative to the repository root. */
export const CONTENT_ROOT = "assets/content";

/**
 * The file-name stem a name reduces to.
 *
 * @param {string} name - A note's display name.
 * @returns {string} The stem; `""` when the name carries no alphanumeric.
 */
export function sanitizeName(name) {
    return unidecode(name)
        .replace(/['’]/gu, "")
        .replace(/[^A-Za-z0-9]+/gu, "_")
        .replace(/^_+|_+$/gu, "");
}

/**
 * The name a note's frontmatter gives it: `name.full`, or `name` when it is a
 * bare string.
 *
 * @param {unknown} frontmatter - The parsed frontmatter.
 * @returns {string | undefined} The name, or `undefined` when none is stated.
 */
export function noteName(frontmatter) {
    const name = /** @type {any} */ (frontmatter)?.name;
    if (typeof name === "string" && name.trim()) return name;
    if (typeof name?.full === "string" && name.full.trim()) return name.full;
    return undefined;
}

/**
 * Parse a note's frontmatter with a YAML parser.
 *
 * @param {string} raw - The note's text.
 * @returns {Record<string, unknown> | undefined} The frontmatter, or
 *   `undefined` when the note has none.
 */
export function parseFrontmatter(raw) {
    const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u);
    if (!fence) return undefined;
    return YAML.parse(fence[1]) ?? undefined;
}

/**
 * Every note file under a directory, as repository-relative paths in sorted
 * order.
 *
 * @param {string} repoRoot - The repository root.
 * @param {string} [dir] - The directory to walk, relative to the root.
 * @returns {string[]} The paths, `/`-separated.
 */
export function listNotes(repoRoot, dir = CONTENT_ROOT) {
    /** @type {string[]} */
    const out = [];
    const walk = (/** @type {string} */ rel) => {
        for (const entry of fs.readdirSync(path.join(repoRoot, rel), {
            withFileTypes: true,
        })) {
            const child = `${rel}/${entry.name}`;
            if (entry.isDirectory()) walk(child);
            else if (entry.name.endsWith(".md")) out.push(child);
        }
    };
    walk(dir);
    return out.sort();
}

/**
 * @typedef {object} ExpectedName
 * @property {string} path - The note's current path.
 * @property {string} [expected] - The path its name gives it; absent when the
 *   note is exempt.
 * @property {string} [name] - The name the stem derives from.
 * @property {string} [shortcode] - The note's shortcode.
 * @property {string} [exempt] - Why the note is exempt.
 */

/**
 * The path every note's name gives it.
 *
 * @param {string} repoRoot - The repository root.
 * @returns {ExpectedName[]} One entry per note, in path order.
 */
export function expectedNames(repoRoot) {
    /** @type {ExpectedName[]} */
    const rows = [];
    for (const rel of listNotes(repoRoot)) {
        const raw = fs.readFileSync(path.join(repoRoot, rel), "utf8");
        const frontmatter = parseFrontmatter(raw);
        const name = noteName(frontmatter);
        if (name === undefined) {
            rows.push({
                path: rel,
                exempt: frontmatter ? "frontmatter states no name" : "no frontmatter",
            });
            continue;
        }
        const shortcode =
            typeof frontmatter?.shortcode === "string" ? frontmatter.shortcode : undefined;
        const stem = sanitizeName(name);
        const folder = frontmatter?.type === "folder";
        rows.push({ path: rel, name, shortcode, expected: folder ? `${stem}_${shortcode}` : stem });
    }

    /** @type {Map<string, ExpectedName[]>} */
    const byStem = new Map();
    for (const row of rows) {
        if (row.expected === undefined) continue;
        const key = `${path.posix.dirname(row.path)}/${row.expected.toLowerCase()}`;
        const group = byStem.get(key) ?? [];
        group.push(row);
        byStem.set(key, group);
    }
    for (const group of byStem.values()) {
        if (group.length < 2) continue;
        for (const row of group) row.expected = `${row.expected}_${row.shortcode}`;
    }
    for (const row of rows) {
        if (row.expected === undefined) continue;
        row.expected = `${path.posix.dirname(row.path)}/${row.expected}.md`;
    }
    return rows;
}
