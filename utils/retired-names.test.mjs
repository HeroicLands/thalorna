/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Retired names outside the Nordmal concordance stay retired.
 *
 * The Nordmal drift guard reads `utils/nordmal-concordance.json`, whose scope is
 * the north. A name of another culture that gives way to its culture's own has
 * no row there, so its retired forms are written out here and swept from prose.
 *
 * A row's `scope` is `corpus` for a name no other tongue writes by accident (a
 * theonym, a place), and a list of note paths for a personal name another
 * bearer keeps: there the retired form is swept only from the notes that speak
 * of the renamed person.
 *
 * Read past, because they are not prose: a `shortcode:` line, a
 * `# terran_analog:` comment, a wikilink's target, a markdown link's target, an
 * address and inline code. Shortcodes keep their original letters on purpose.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const CONTENT_DIR = "assets/content";

/** @type {{retired: string[], replacement: string, scope: "corpus" | string[]}[]} */
export const RETIRED = [
    {
        retired: ["Jánus", "Janus", "Jánusian", "Janusian"],
        replacement: "Árdavon",
        scope: "corpus",
    },
    { retired: ["Thánatos", "Thanatos"], replacement: "Sélmoros", scope: "corpus" },
    {
        retired: ["Vúlcan", "Vulcan", "Vúlcani", "Vulcani", "Vúlcanian", "Vulcanian"],
        replacement: "Ústaron",
        scope: "corpus",
    },
    {
        retired: ["Vénusia", "Venusia", "Vénusian", "Vénustria", "Vénustrian"],
        replacement: "Ólvenía",
        scope: "corpus",
    },
];

const LETTER = "\\p{L}\\p{M}";
const NOT_PROSE =
    /\[\[[^\]|]*(?=[|\]])|\]\([^)]*\)|`[^`]*`|(?<![\w-])(?:affiliation|place|lore|being|skill|icon|image)-[a-z0-9]+/gu;

/**
 * The prose of a note: every line but a shortcode or terran_analog line, with
 * link targets, addresses and code spans blanked.
 * @param {string} text
 * @returns {string[]}
 */
export function proseLines(text) {
    return text.split("\n").map((line) => {
        const bare = line.trimStart();
        if (bare.startsWith("shortcode:") || bare.startsWith("# terran_analog")) return "";
        return line.replace(NOT_PROSE, (m) => " ".repeat(m.length));
    });
}

/**
 * Every place a retired form stands in prose, as `file:line:column`.
 * @param {string} file
 * @param {string} text
 * @param {string[]} forms
 * @returns {string[]}
 */
export function sightings(file, text, forms) {
    const alternation = [...forms]
        .sort((a, b) => b.length - a.length)
        .map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
    const rx = new RegExp(`(?<![${LETTER}])(?:${alternation})(?![${LETTER}])`, "gu");
    const found = [];
    proseLines(text).forEach((line, i) => {
        for (const m of line.matchAll(rx)) found.push(`${file}:${i + 1}:${m.index + 1}: ${m[0]}`);
    });
    return found;
}

function notes(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...notes(p));
        else if (entry.name.endsWith(".md")) out.push(p);
    }
    return out;
}

test("the sweep reads prose and passes over shortcodes, link targets and analogues", () => {
    const text = [
        "shortcode: janusdty",
        "# terran_analog: Janus, the Roman god of gates",
        "See [[affiliation-janus|Faith of Árdavon]] and `Janus`.",
        "A priest of Jánus.",
    ].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Jánus", "Janus"]), ["x.md:4:13: Jánus"]);
});

test("a retired form inside a longer word is not a sighting", () => {
    assert.deepEqual(sightings("x.md", "Januspath and Vénusiana", ["Janus", "Vénusia"]), []);
});

test("no retired name stands in the prose of its scope", () => {
    const all = notes(CONTENT_DIR);
    const findings = [];
    for (const row of RETIRED) {
        const files = row.scope === "corpus" ? all : row.scope;
        for (const file of files) {
            assert(fs.existsSync(file), `${file}: the scope names a note that does not exist`);
            findings.push(...sightings(file, fs.readFileSync(file, "utf8"), row.retired));
        }
    }
    assert.deepEqual(findings, []);
});
