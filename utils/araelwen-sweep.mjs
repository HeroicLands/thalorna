#!/usr/bin/env node
/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Araelwen sweep (`node utils/araelwen-sweep.mjs`).
 *
 * Respells the thin places' name in note and changeset prose, reading the
 * respellings from `utils/fixtures/araelwen-respellings.json`: each `from` is a
 * whole word that becomes its `to`, longest first, so _Úkua-Arálwen_ is
 * _Úkua-Araelwen_ and _aralwain_ is _Araelwen_.
 *
 * Left as written: the frontmatter values that are identifiers (found by
 * parsing the YAML, as the Vileria sweep does), fenced and inline code, `⟦…⟧` codage, wikilink targets,
 * markdown link destinations, heading ids, URLs and note addresses such as
 * `lore-aralwen`. A note file whose name carries a `files` form is renamed to
 * the replacement form; directories are not.
 *
 * Rerunning it on any tree, including one that merged other work first,
 * finishes the job, and a second run changes nothing.
 *
 * Usage: `node utils/araelwen-sweep.mjs [--check] [path ...]`. Without paths
 * it sweeps `assets/content` and `.changeset`. `--check` writes nothing and
 * exits 1, listing each file that would change.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { excludedRanges, SPANS } from "./vileria-sweep.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const MAPPING_FILE = path.join(HERE, "fixtures", "araelwen-respellings.json");

/**
 * The respellings and file-name forms, from the mapping data file.
 * @returns {{respellings: {from: string, to: string}[], files: {from: string, to: string}[]}}
 */
export function loadMapping(file = MAPPING_FILE) {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const nfc = (rows = []) =>
        rows.map(({ from, to }) => ({ from: from.normalize("NFC"), to: to.normalize("NFC") }));
    return { respellings: nfc(data.respellings), files: nfc(data.files) };
}

const ADDRESS_TYPES =
    "affiliation|place|lore|being|skill|doc|scenario|folder|mysticalability|trait|icon|image|[a-z]+gear";

/** Spans inside a line that never change: the shared spans and note addresses. */
const PROTECTED_SPANS = [
    ...SPANS,
    `(?<![\\p{L}\\p{N}_-])(?:${ADDRESS_TYPES})-[a-z0-9]+(?![\\p{L}\\p{N}])`,
];

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * A respeller for the given mapping.
 * @param {{from: string, to: string}[]} respellings
 * @returns {(text: string) => string}
 */
export function respeller(respellings) {
    const table = new Map();
    for (const { from, to } of respellings) {
        table.set(from, to);
        table.set(from.normalize("NFD"), to);
    }
    const forms = [...table.keys()].sort((a, b) => b.length - a.length).map(escape);
    const word = `(?<![\\p{L}\\p{M}])(?:${forms.join("|")})(?![\\p{L}\\p{M}])`;
    const rx = new RegExp(`(${PROTECTED_SPANS.join("|")})|(${word})`, "gu");
    const line = (s) => s.replace(rx, (m, kept) => (kept !== undefined ? m : table.get(m)));

    /** Body prose, line by line, leaving fenced code alone. */
    const body = (text) => {
        let inCode = false;
        return text
            .split("\n")
            .map((raw) => {
                if (raw.trimStart().startsWith("```")) {
                    inCode = !inCode;
                    return raw;
                }
                return inCode ? raw : line(raw);
            })
            .join("\n");
    };

    /** Frontmatter prose between the parsed identifier ranges. */
    const frontmatter = (yaml) => {
        const ranges = excludedRanges(yaml);
        if (!ranges) return line(yaml);
        let out = "";
        let at = 0;
        for (const [start, end] of ranges) {
            if (start < at) continue;
            out += line(yaml.slice(at, start)) + yaml.slice(start, end);
            at = end;
        }
        return out + line(yaml.slice(at));
    };

    return (text) => {
        const front = /^(---\r?\n)([\s\S]*?)(\r?\n---[ \t]*)(?=\r?\n|$)/u.exec(text);
        if (!front) return body(text);
        const [head, open, yaml, close] = front;
        return open + frontmatter(yaml) + close + body(text.slice(head.length));
    };
}

/**
 * The renamed path of a note file whose name carries a file form, or the path itself.
 * @param {string} file
 * @param {{from: string, to: string}[]} files
 */
export function renamedPath(file, files) {
    const dir = path.dirname(file);
    let base = path.basename(file);
    for (const { from, to } of files)
        base = base.replace(new RegExp(`(?<![A-Za-z])${escape(from)}(?![a-z])`, "g"), to);
    return path.join(dir, base);
}

function markdownFiles(root) {
    if (!fs.existsSync(root)) return [];
    if (fs.statSync(root).isFile()) return root.endsWith(".md") ? [root] : [];
    const out = [];
    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
        const p = path.join(root, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(p));
        else if (entry.name.endsWith(".md")) out.push(p);
    }
    return out;
}

/**
 * Sweep the given roots.
 * @param {string[]} roots
 * @param {{check?: boolean, mapping?: ReturnType<typeof loadMapping>}} [options]
 * @returns {string[]} each file that changed, or would change, with what happens to it
 */
export function sweep(roots, { check = false, mapping = loadMapping() } = {}) {
    const respell = respeller(mapping.respellings);
    const changed = [];
    for (const file of roots.flatMap(markdownFiles)) {
        const text = fs.readFileSync(file, "utf8");
        const next = respell(text);
        const target =
            file.startsWith(path.join("assets", "content")) ?
                renamedPath(file, mapping.files)
            :   file;
        if (next === text && target === file) continue;
        changed.push(target === file ? file : `${file} -> ${target}`);
        if (check) continue;
        if (next !== text) fs.writeFileSync(file, next, "utf8");
        if (target !== file) fs.renameSync(file, target);
    }
    return changed;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);
    const check = args.includes("--check");
    const paths = args.filter((a) => a !== "--check");
    const changed = sweep(paths.length ? paths : ["assets/content", ".changeset"], { check });
    for (const line of changed)
        console.error(`${line}: ${check ? "error: not yet respelled" : "info: respelled"}`);
    console.log(
        `${changed.length} file${changed.length === 1 ? "" : "s"} ${check ? "to respell" : "respelled"}`,
    );
    if (check && changed.length) process.exitCode = 1;
}
