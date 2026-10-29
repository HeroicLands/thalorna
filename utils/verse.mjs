/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The verse guard (`npm run lint:verse`).
 *
 * A poem is written in a `.verse` div (`::: {.verse form=epic}` ... `:::`). A
 * code fence whose info string begins with `verse` or `poetry` is not a verse:
 * it renders as a plain code listing and the build stays green. Every opener of
 * the form ```` ```verse ````, ```` ```poetry ```` or `~~~verse`, `~~~poetry`
 * in a note under `assets/content/`, indented or not, is an error.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and
 * the exit status is 1 when there is a finding. The column is that of the
 * `verse` or `poetry` word.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CONTENT_DIR = "assets/content";

/** A fence opener whose info string begins with `verse` or `poetry`. */
const VERSE_FENCE = /^(\s*(?:`{3,}|~{3,})\s*)(verse|poetry)(?![\w-])/;

/**
 * @param {string} file path shown in the finding
 * @param {string} text the note
 * @returns {string[]} one finding per `verse` or `poetry` fence opener
 */
export function findVerseFences(file, text) {
    const findings = [];
    text.split("\n").forEach((line, i) => {
        const m = line.match(VERSE_FENCE);
        if (m)
            findings.push(
                `${file}:${i + 1}:${m[1].length + 1}: error: a ${m[2]} fence renders as code; write a ::: {.verse} div`,
            );
    });
    return findings;
}

/**
 * @param {string} dir
 * @returns {string[]} every file beneath `dir`
 */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

/** @returns {string[]} every finding across the notes */
export function scan() {
    return walk(CONTENT_DIR)
        .filter((f) => f.endsWith(".md"))
        .flatMap((f) => findVerseFences(f, fs.readFileSync(f, "utf8")));
}

/** Prints the findings and the summary; returns the exit status. */
export function main() {
    const findings = scan();
    for (const f of findings) console.error(f);
    console.log(`verse: ${findings.length} finding${findings.length === 1 ? "" : "s"}`);
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main();
}
