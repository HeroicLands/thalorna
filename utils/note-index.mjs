/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Resolves a note's address to its file, and a file to its address.
 *
 * A note is addressed `<type>-<shortcode>` from its own `type:` and `shortcode:`
 * frontmatter, so nothing here depends on where a file sits or what it is
 * called. Guards name notes by address and resolve them through this index at
 * run time. An index is built once per content root and cached for the process.
 */
import fs from "node:fs";
import path from "node:path";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import YAML from "yaml";

export const CONTENT_DIR = "assets/content";

const indexes = new Map();

/**
 * A note's parsed frontmatter, split as the content engine splits it, so CRLF
 * notes, comments, quoting and any indentation read as they build. Text with
 * no frontmatter, or frontmatter that does not parse, gives undefined; the
 * frontmatter lint reports the latter.
 *
 * @param {string} raw The note's text.
 * @returns {Record<string, any> | undefined}
 */
export function parseFrontmatter(raw) {
    const split = splitFrontmatter(raw);
    if (!split) return undefined;
    try {
        const fm = YAML.parse(split.yaml);
        return fm && typeof fm === "object" ? fm : undefined;
    } catch {
        return undefined;
    }
}

function identity(fm) {
    const { type, shortcode } = fm ?? {};
    return typeof type === "string" && shortcode != null ? `${type}-${shortcode}` : undefined;
}

function build(root) {
    const byAddress = new Map();
    const byFile = new Map();
    const frontmatter = new Map();
    const dir = path.join(root, CONTENT_DIR);
    for (const entry of fs.readdirSync(dir, { recursive: true }).sort()) {
        if (!entry.endsWith(".md")) continue;
        const file = `${CONTENT_DIR}/${entry.split(path.sep).join("/")}`;
        const fm = parseFrontmatter(fs.readFileSync(path.join(root, file), "utf8"));
        const address = identity(fm);
        if (address === undefined) continue;
        if (byAddress.has(address)) {
            throw new Error(`${file}: address ${address} is also ${byAddress.get(address)}`);
        }
        byAddress.set(address, file);
        byFile.set(file, address);
        frontmatter.set(file, fm);
    }
    return { byAddress, byFile, frontmatter };
}

/**
 * The index of one content root.
 *
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {{byAddress: Map<string, string>, byFile: Map<string, string>, frontmatter: Map<string, Record<string, any>>}}
 */
export function noteIndex(root = ".") {
    const key = path.resolve(root);
    if (!indexes.has(key)) indexes.set(key, build(key));
    return indexes.get(key);
}

/**
 * Drops a root's cached index, for a tree that changes while the process runs.
 *
 * @param {string} [root] The directory holding `assets/content`.
 */
export function forgetNoteIndex(root = ".") {
    indexes.delete(path.resolve(root));
}

/**
 * The file of a note, relative to the content root.
 *
 * @param {string} address `<type>-<shortcode>`.
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {string}
 */
export function notePath(address, root = ".") {
    const file = noteIndex(root).byAddress.get(address);
    if (file === undefined) throw new Error(`no note has the address ${address}`);
    return file;
}

/**
 * The address of a note file, or undefined when the file is not a note.
 *
 * @param {string} file Path relative to the content root.
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {string | undefined}
 */
export function addressOf(file, root = ".") {
    return noteIndex(root).byFile.get(file);
}

/**
 * Every note file, sorted by path.
 *
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {string[]}
 */
export function noteFiles(root = ".") {
    return [...noteIndex(root).byFile.keys()];
}

/**
 * A note file's parsed frontmatter, as the index read it.
 *
 * @param {string} file Path relative to the content root.
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {Record<string, any> | undefined}
 */
export function frontmatterOf(file, root = ".") {
    return noteIndex(root).frontmatter.get(file);
}

/**
 * The files of the notes whose parsed frontmatter satisfies a predicate.
 *
 * @param {(fm: Record<string, any>, address: string) => boolean} test
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {string[]}
 */
export function noteFilesWhere(test, root = ".") {
    const { byFile, frontmatter } = noteIndex(root);
    return [...byFile]
        .filter(([file, address]) => test(frontmatter.get(file), address))
        .map(([file]) => file);
}

/**
 * The address a note's own text declares, or undefined when it declares none.
 *
 * @param {string} raw The note's text, frontmatter included.
 * @returns {string | undefined}
 */
export function addressOfText(raw) {
    return identity(parseFrontmatter(raw));
}

/**
 * A folder and every folder above it, by shortcode. A folder's parent is one
 * shortcode, or a map of shortcodes by the pack that nests it.
 *
 * @param {string | undefined} folder - A folder note's shortcode.
 * @param {Map<string, unknown>} parents - Each folder's `data.parent`.
 * @returns {Set<string>}
 */
export function folderChain(folder, parents) {
    const chain = new Set();
    const pending = [folder];
    while (pending.length) {
        const code = pending.pop();
        if (typeof code !== "string" || chain.has(code)) continue;
        chain.add(code);
        const parent = parents.get(code);
        pending.push(...(parent && typeof parent === "object" ? Object.values(parent) : [parent]));
    }
    return chain;
}

/**
 * Each folder note's `data.parent`, by the folder's shortcode.
 *
 * @param {string} [root] The directory holding `assets/content`.
 * @returns {Map<string, unknown>}
 */
export function folderParents(root = ".") {
    return new Map(
        noteFilesWhere(({ type }) => type === "folder", root).map((file) => {
            const fm = frontmatterOf(file, root);
            return [fm.shortcode, fm.data?.parent];
        }),
    );
}
