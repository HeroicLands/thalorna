/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The affix-replaces guard (`npm run lint:affix-replaces`).
 *
 * An affix of a language note (`data.affixes[]`) describes in prose, under
 * `attaches`, how it joins a stem. The mapped-run word check reads only the
 * declared key: a suffix derives a word from a stem when it states `replaces`
 * (`vowel`, or the closing letters it takes the place of). An affix whose
 * `attaches` prose says it replaces, drops, loses or takes the place of a
 * stem's closing sound, but states no `replaces`, is an error.
 *
 * Findings are `file:line:column: severity: message`, to stderr; the summary
 * goes to stdout. The exit status is 1 when there is an error.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** Where the language notes live. */
const LANGUAGES_DIR = "assets/content/Skills/Languages";

/** Prose that says an affix takes the place of part of the stem. */
export const REPLACING_PROSE =
    /\b(replaces?|drops?|loses|lose|takes? the place of|in place of|instead of)\b/iu;

/**
 * The affixes of a language note that say in prose they replace part of the
 * stem and state no `replaces`, with where each stands.
 *
 * @param {string} text - The note.
 * @returns {{form: string, attaches: string, line: number, column: number}[]}
 */
export function unstatedReplaces(text) {
    const match = /^---\n([\s\S]*?)\n---/.exec(text);
    if (!match) return [];
    const lineCounter = new YAML.LineCounter();
    const doc = YAML.parseDocument(match[1], { lineCounter });
    const affixes = doc.getIn(["data", "affixes"]);
    if (!YAML.isSeq(affixes)) return [];
    const out = [];
    for (const item of affixes.items) {
        if (!YAML.isMap(item)) continue;
        const attaches = item.get("attaches");
        if (typeof attaches !== "string" || !REPLACING_PROSE.test(attaches)) continue;
        if (item.has("replaces")) continue;
        const node = item.get("attaches", true);
        const { line, col } = lineCounter.linePos(node.range[0]);
        const form = item.get("form") ?? item.get("zero") ?? "";
        out.push({ form: String(form), attaches, line: line + 1, column: col });
    }
    return out;
}

/**
 * Check the language notes.
 *
 * @param {string[]} argv - Note paths; none checks every language note.
 * @param {{out: (s: string) => void, err: (s: string) => void}} [io]
 * @param {string} [cwd]
 * @returns {number} The exit status.
 */
export function main(argv, io = { out: console.log, err: console.error }, cwd = process.cwd()) {
    const files =
        argv.length ? argv : (
            fs
                .readdirSync(path.join(cwd, LANGUAGES_DIR))
                .filter((name) => name.endsWith(".md"))
                .sort()
                .map((name) => path.join(LANGUAGES_DIR, name))
        );
    let errors = 0;
    for (const file of files) {
        const rel = path.relative(cwd, path.resolve(cwd, file)) || file;
        for (const hit of unstatedReplaces(fs.readFileSync(path.resolve(cwd, file), "utf8"))) {
            errors += 1;
            io.err(
                `${rel}:${hit.line}:${hit.column}: error: affix "${hit.form}" says "${hit.attaches}" but states no replaces`,
            );
        }
    }
    io.out(`${files.length} notes checked: ${errors} error(s)`);
    return errors ? 1 : 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
