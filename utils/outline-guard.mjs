/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The outline guard over every note's section anchors.
 *
 * `utils/outline-registry.yaml` gives each note kind its slots in order. A note
 * marks a slot on a heading with an anchor (`## Any Wording {#present}`), and
 * the guard reads those anchors, never the heading's wording. The rules:
 *
 * 1. **`missing-required`** — a required slot has no heading. A slot that
 *    `needs: summary` is required only of a note longer than the registry's
 *    `rowMaxWords`.
 * 2. **`out-of-order`** — a slot's heading comes after the heading of a slot
 *    the registry places later.
 * 3. **`see-also-not-last`** — a heading of any level follows See Also, other
 *    than a section the registry lists as `closing` and the headings nested
 *    under it. A See Also heading is the one anchored `{#see-also}`, or an
 *    unanchored heading whose text is the `heading` the kind's registry entry
 *    declares for that slot.
 * 4. **`forbidden-slot`** — a note carries a slot its kind lists as `absent`.
 * 5. **`misplaced-level`** — a slot's anchor is on a heading of another level
 *    than the slot takes, so it fills nothing; a being's `{#appearance}` and
 *    `{#dossier}` are level one, as the content engine reads them.
 *
 * A note whose kind has no entry is not read. A finding is a warning, and an
 * error when the note is in a land the registry's `finished` list names; a
 * `see-also-not-last` finding is an error in every land. The
 * registry's `lands` map names each land's regions, and a note is in a land
 * when any branch of its `data.parents`, a being's `data.homes`, or an
 * affiliation's `data.seat` (or its seatless `data.range`) reaches one. A
 * reference is a bare shortcode or a full address.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseAddress } from "@heroiclands/package-build/engine/address";
import { scanHeadingAttributes } from "@heroiclands/package-build/engine/heading-attributes";
import YAML from "yaml";
import { CONTENT_DIR, noteIndex } from "./note-index.mjs";

export const REGISTRY = new URL("./outline-registry.yaml", import.meta.url);

/**
 * The outline registry.
 *
 * @param {URL | string} [file] The registry file.
 * @returns {{rowMaxWords: number, finished: string[], closing: string[], kinds: Array<Record<string, any>>}}
 */
export function loadRegistry(file = REGISTRY) {
    return YAML.parse(fs.readFileSync(file, "utf8"));
}

/**
 * The first registry entry whose selector a note satisfies.
 *
 * @param {{kinds: Array<Record<string, any>>}} registry
 * @param {{type?: string, subType?: string, tags?: string[]}} fm A note's frontmatter.
 * @returns {Record<string, any> | undefined}
 */
export function selectKind(registry, fm) {
    const tags = Array.isArray(fm.tags) ? fm.tags : [];
    return registry.kinds.find(({ match }) => {
        if (match.type !== undefined && match.type !== fm.type) return false;
        if (match.subType !== undefined && ![match.subType].flat().includes(fm.subType))
            return false;
        if (match.anyTag && !match.anyTag.some((t) => tags.includes(t))) return false;
        if (match.noTag && match.noTag.some((t) => tags.includes(t))) return false;
        for (const [key, value] of Object.entries(match.data ?? {})) {
            if (fm.data?.[key] !== value) return false;
        }
        return true;
    });
}

/**
 * The headings of a body with their anchors, outside code and raw HTML, read by
 * the content engine's own heading scanner.
 *
 * @param {string} body
 * @param {number} firstLine The 1-based line the body starts on.
 * @returns {Array<{level: number, id?: string, text: string, line: number, column: number}>}
 */
export function headings(body, firstLine = 1) {
    const lines = body.split("\n");
    return scanHeadingAttributes(body, firstLine).headings.map((h) => {
        const at = lines[h.line - firstLine].indexOf("{#");
        return {
            level: h.level,
            id: h.id || undefined,
            text: h.text,
            line: h.line,
            column: h.id ? at + 1 : 1,
        };
    });
}

export function wordCount(body) {
    return body.split(/\s+/).filter(Boolean).length;
}

/** The content package a tree belongs to, which qualifies a written address. */
export function contentPackage(root) {
    try {
        const config = YAML.parse(
            fs.readFileSync(path.join(root, "package-build.config.yaml"), "utf8"),
        );
        if (typeof config?.contentPackage === "string") return config.contentPackage;
    } catch {
        // A tree without a configuration is read as the Thalorna package.
    }
    return "thalorna";
}

/** A reference as a note's frontmatter: a bare shortcode or a full address. */
export function resolveRef(index, ref, types) {
    if (typeof ref !== "string") return undefined;
    const vocabulary = index.vocabulary;
    for (const type of types) {
        const tuple = parseAddress(ref, {
            ...vocabulary,
            package: index.contentPackage,
            system: "note",
            type,
        });
        if (tuple.reason || tuple.package !== index.contentPackage) continue;
        const file = index.byAddress.get(`${tuple.type}-${tuple.shortcode}`);
        if (file && types.includes(tuple.type)) return index.frontmatter.get(file);
    }
    return undefined;
}

/**
 * The types a note's `data.parents` may name, in the order a bare shortcode
 * is tried: a place's parents are places, an affiliation's its liege
 * affiliations or the places that hold it, and any other kind's its own kind.
 *
 * @param {string} type A note's type.
 * @returns {string[]}
 */
export function parentTypes(type) {
    if (type === "place") return ["place"];
    if (type === "affiliation") return ["affiliation", "place"];
    return [type, "place", "affiliation"];
}

/**
 * The ids of the lands a note is in: every branch of `data.parents` (and, for a
 * being, `data.homes`, or an affiliation, its seat or seatless range) is
 * followed upward, cycle-safely. The nearest note along it that a land names
 * puts the note in that land.
 */
export function landsOf(index, fm, lands) {
    const owner = new Map();
    for (const [id, codes] of Object.entries(lands ?? {}))
        for (const code of codes) owner.set(code, id);
    const found = new Set();
    const visit = (note, seen) => {
        if (!note) return;
        const identity = `${note.type}-${note.shortcode}`;
        if (seen.has(identity)) return;
        const land = note.type === "place" ? owner.get(note.shortcode) : undefined;
        if (land) {
            found.add(land);
            return;
        }
        seen.add(identity);
        const up = [
            ...(Array.isArray(note.data?.parents) ? note.data.parents : []).map((r) =>
                resolveRef(index, r, parentTypes(note.type)),
            ),
            ...(note.type === "affiliation" ?
                (note.data?.seat ? [note.data.seat]
                : Array.isArray(note.data?.range) ? note.data.range
                : []
                ).map((r) => resolveRef(index, r, ["place"]))
            :   []),
            ...(note.type === "being" ?
                (Array.isArray(note.data?.homes) ? note.data.homes : []).map((r) =>
                    resolveRef(index, r, ["place"]),
                )
            :   []),
        ];
        for (const parent of up) visit(parent, new Set(seen));
    };
    visit(fm, new Set());
    return [...found].sort();
}

/**
 * The note index of a content root, with the content package and the
 * vocabulary a written address is parsed against.
 *
 * @param {string} [root] The directory holding `assets/content`.
 */
export function treeIndex(root = ".") {
    const base = noteIndex(root);
    const pkg = contentPackage(root);
    return {
        ...base,
        contentPackage: pkg,
        vocabulary: {
            types: new Set([...base.frontmatter.values()].map((fm) => fm.type)),
            packages: new Set([pkg]),
        },
    };
}

/**
 * Checks every note of a content tree against the registry.
 *
 * @param {object} [options]
 * @param {string} [options.root] The directory holding `assets/content`.
 * @param {ReturnType<typeof loadRegistry>} [options.registry]
 * @returns {{findings: Array<{file: string, line?: number, column?: number, severity: string, rule: string, kind: string, land?: string, message: string}>, errors: number, checked: number, byLand: Map<string, number>, byRule: Map<string, number>, byKind: Map<string, number>}}
 */
export function check({ root = ".", registry = loadRegistry() } = {}) {
    const index = treeIndex(root);
    const finished = new Set(registry.finished ?? []);
    const closing = new Set(registry.closing ?? []);
    const findings = [];
    let checked = 0;

    for (const [file, fm] of index.frontmatter) {
        const kind = selectKind(registry, fm);
        if (!kind) continue;
        checked++;
        const raw = fs.readFileSync(path.join(root, file), "utf8");
        const split = splitFrontmatter(raw);
        if (!split) continue;
        const firstLine = raw.slice(0, raw.length - split.body.length).split("\n").length;
        const lands = landsOf(index, fm, registry.lands);
        const land = lands.find((l) => finished.has(l)) ?? lands[0];
        const severity = lands.some((l) => finished.has(l)) ? "error" : "warning";
        const report = (rule, message, at = {}) =>
            findings.push({
                file: path.join(root, file),
                ...at,
                severity: rule === "see-also-not-last" ? "error" : severity,
                rule,
                kind: kind.id,
                land,
                message,
            });

        const marks = headings(split.body, firstLine);
        const slotIndex = new Map(kind.slots.map((s, i) => [s.id, i]));
        const levelOf = (slot) => slot.level ?? registry.slotLevel ?? 2;
        const slotById = new Map(kind.slots.map((s) => [s.id, s]));
        const present = new Map();
        for (const h of marks) {
            const slot = h.id === undefined ? undefined : slotById.get(h.id);
            if (slot && h.level === levelOf(slot) && !present.has(h.id)) present.set(h.id, h);
        }
        const anyAnchor = new Map();
        for (const h of marks) if (h.id && !anyAnchor.has(h.id)) anyAnchor.set(h.id, h);

        const long = wordCount(split.body) > registry.rowMaxWords;
        for (const slot of kind.slots) {
            if (slot.status !== "required" || present.has(slot.id)) continue;
            if (slot.needs === "summary" && !long) continue;
            report(
                "missing-required",
                `${kind.id} note is missing the required slot {#${slot.id}}`,
            );
        }

        for (const id of kind.absent ?? []) {
            const h = anyAnchor.get(id);
            if (h)
                report(
                    "forbidden-slot",
                    `${kind.id} note carries {#${id}}, which its kind never has`,
                    h,
                );
        }

        // A See Also heading is the one anchored `{#see-also}`, or one without an
        // anchor whose text is the heading the kind's registry entry declares for
        // that slot.
        const seeAlsoSlot = slotById.get("see-also");
        const seeAlso = marks.find(
            (h) =>
                h.id === "see-also" ||
                (h.id === undefined &&
                    seeAlsoSlot?.heading !== undefined &&
                    h.text === seeAlsoSlot.heading &&
                    h.level === levelOf(seeAlsoSlot)),
        );
        let highest = -1;
        let highestId;
        let closingLevel = 0;
        for (const h of marks) {
            if (seeAlso && h.line > seeAlso.line) {
                if (closingLevel && h.level > closingLevel) continue;
                closingLevel = 0;
                if (closing.has(h.id)) {
                    closingLevel = h.level;
                } else {
                    report("see-also-not-last", "a section follows See Also, which comes last", h);
                }
                continue;
            }
            const at = h.id === undefined ? undefined : slotIndex.get(h.id);
            if (at === undefined) continue;
            if (h.level !== levelOf(slotById.get(h.id))) {
                report(
                    "misplaced-level",
                    `{#${h.id}} is on a level ${h.level} heading; this slot takes level ${levelOf(slotById.get(h.id))}`,
                    h,
                );
                continue;
            }
            if (at < highest) {
                report(
                    "out-of-order",
                    `{#${h.id}} comes after {#${highestId}}, which the registry places later`,
                    h,
                );
            } else {
                highest = at;
                highestId = h.id;
            }
        }
    }

    const tally = (key) => {
        const counts = new Map();
        for (const f of findings)
            counts.set(f[key] ?? "(none)", (counts.get(f[key] ?? "(none)") ?? 0) + 1);
        return counts;
    };
    return {
        findings,
        errors: findings.filter((f) => f.severity === "error").length,
        checked,
        byLand: tally("land"),
        byRule: tally("rule"),
        byKind: tally("kind"),
    };
}

/** Run the guard over a content tree and print what it finds. */
export function main(root = ".") {
    const result = check({ root });
    const here = (file) => path.relative(process.cwd(), file);
    for (const f of result.findings) {
        const at = f.line ? `${here(f.file)}:${f.line}:${f.column}` : here(f.file);
        console.error(`${at}: ${f.severity}: ${f.message} [${f.rule}]`);
    }
    const line = (counts) =>
        [...counts]
            .sort((a, b) => b[1] - a[1])
            .map(([k, n]) => `${k} ${n}`)
            .join(", ") || "none";
    console.log(
        `outline: ${result.checked} notes checked, ${result.findings.length} findings (${result.errors} errors)`,
    );
    console.log(`outline: by rule: ${line(result.byRule)}`);
    console.log(`outline: by kind: ${line(result.byKind)}`);
    console.log(`outline: by land: ${line(result.byLand)}`);
    return result.errors === 0 ? 0 : 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main(process.argv[2] ?? ".");
}
