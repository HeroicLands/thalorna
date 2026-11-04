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
 * The coverage guard: each land held to its definition of done.
 *
 * Land resolution, the `lands` map, the `finished` list and the note index come
 * from the outline guard and its registry (`utils/outline-registry.yaml`). A
 * finding is a warning, and an error when the note is in a land the registry's
 * `finished` list names. A reference resolves by its field's declared type
 * (`parentTypes`), through the address parser. A scenario's lands are those of
 * its `data.locations`. Every set is derived from frontmatter, heading
 * anchors and wikilink addresses, never from prose. The rules:
 *
 * 1. **`present-coverage`** — a summary per land, not a finding: how many
 *    summary-depth place and affiliation notes carry `{#present}` where the
 *    outline registry requires it. The per-note finding is the outline guard's.
 * 2. **`homed-being`** — a settlement longer than `rowMaxWords` that no
 *    being's `data.homes` resolves to.
 * 3. **`archetype-coverage`** — an archetype of the registry's `archetypes`
 *    list that no being of the land holds in `data.archetypes`, unless
 *    `archetypeAbsences` records the absence for that land. The summary also
 *    counts the land's beings by `data.occupation` and by office
 *    (`data.affiliations.<id>.office`).
 * 4. **`unpointed-child`** — a note whose `data.parents` names a parent that
 *    does not point back. A parent points to a child when its body holds a
 *    wikilink outside code to the child's address (`[[place-x|Name]]`, written bare or
 *    fully qualified), or a string of its
 *    own frontmatter, `data.parents` aside, is the child's address or shortcode.
 * 5. **`shared-governance`** — two or more affiliations whose `governance`
 *    objects are identical, unless the registry's `sharedGovernance` lists the
 *    affiliation's address.
 * 6. **`reciprocal-links`** — an entry of `data.borders` or `data.routes` whose
 *    target does not list the note in the same key.
 * 7. **`cast-resolves`** — a scenario's `data.cast` (beings), `data.locations`
 *    (places) or `data.factions` (affiliations) entry that resolves to no note.
 * 8. **`unique-linked`** — a note with `data.unique: true` whose body links no
 *    place or being outside code.
 * 9. **`district-parent`** — a `place/district` note none of whose
 *    `data.parents` is a settlement or a region.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { matchAllOutsideCode } from "@heroiclands/package-build/engine/code-fences";
import { parseWikilink, WIKILINK } from "@heroiclands/package-build/engine/wikilink-syntax";
import {
    headings,
    landsOf,
    loadRegistry,
    parentTypes,
    resolveRef,
    selectKind,
    treeIndex,
    wordCount,
} from "./outline-guard.mjs";

/** Place-valued references that give a note with no place parents its lands. */
const LOCATION_KEYS = { scenario: ["locations"] };

/** The 1-based line and column of the first `needle` after `from`, if any. */
function locate(raw, needle, from = 0) {
    const at = raw.indexOf(needle, from);
    if (at < 0) return undefined;
    const before = raw.slice(0, at).split("\n");
    return { line: before.length, column: before.at(-1).length + 1 };
}

/** Every string a frontmatter value holds, `data.parents` excluded. */
function strings(value, out = new Set()) {
    if (typeof value === "string") out.add(value);
    else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
    else if (value && typeof value === "object")
        Object.values(value).forEach((v) => strings(v, out));
    return out;
}

/** A value serialized with its keys in order, so equal objects compare equal. */
function canonical(value) {
    if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
    if (value && typeof value === "object")
        return `{${Object.keys(value)
            .sort()
            .map((k) => `${JSON.stringify(k)}:${canonical(value[k])}`)
            .join(",")}}`;
    return JSON.stringify(value);
}

const asList = (v) => (Array.isArray(v) ? v : []);

/**
 * Checks every note of a content tree against the land definitions.
 *
 * @param {object} [options]
 * @param {string} [options.root] The directory holding `assets/content`.
 * @param {ReturnType<typeof loadRegistry>} [options.registry]
 * @returns {{findings: Array<Record<string, any>>, errors: number, byLand: Map<string, number>, byRule: Map<string, number>, summaries: Map<string, {present: {total: number, with: number}, beings: number, archetypes: Map<string, number>, occupations: Map<string, number>, offices: Map<string, number>}>}}
 */
export function check({ root = ".", registry = loadRegistry() } = {}) {
    const index = treeIndex(root);
    const finished = new Set(registry.finished ?? []);
    const lands = registry.lands ?? {};
    const exemptGovernance = new Set(registry.sharedGovernance ?? []);
    const findings = [];
    const summaries = new Map();
    const summary = (land) => {
        if (!summaries.has(land))
            summaries.set(land, {
                present: { total: 0, with: 0 },
                beings: 0,
                archetypes: new Map(),
                occupations: new Map(),
                offices: new Map(),
            });
        return summaries.get(land);
    };
    for (const land of Object.keys(lands)) summary(land);

    const notes = [...index.frontmatter].map(([file, fm]) => {
        const raw = fs.readFileSync(path.join(root, file), "utf8");
        const split = splitFrontmatter(raw);
        return {
            file,
            fm,
            raw,
            body: split?.body ?? "",
            address: `${fm.type}-${fm.shortcode}`,
            lands: landsOf(index, fm, lands),
        };
    });
    const byNote = new Map(notes.map((n) => [n.fm, n]));
    const ref = (value, types) => {
        const found = resolveRef(index, value, types);
        return found ? byNote.get(found) : undefined;
    };
    const ALL = [...index.vocabulary.types];
    // A note kind whose parents are not places takes its lands from its
    // place-valued references.
    for (const n of notes) {
        if (n.lands.length) continue;
        const found = new Set();
        for (const key of LOCATION_KEYS[n.fm.type] ?? [])
            for (const value of asList(n.fm.data?.[key])) {
                const place = resolveRef(index, value, ["place"]);
                if (place) landsOf(index, place, lands).forEach((l) => found.add(l));
            }
        n.lands = [...found].sort();
    }
    // The notes a body links, outside code, by the address each link names.
    const linksOf = (n) => {
        const out = [];
        for (const [, inner] of matchAllOutsideCode(n.body, new RegExp(WIKILINK.source, "g"))) {
            const found = resolveRef(index, parseWikilink(inner).target, ALL);
            if (found) out.push(byNote.get(found));
        }
        return out;
    };

    const report = (note, rule, message, at = {}, landIds = note.lands) => {
        const land = landIds.find((l) => finished.has(l)) ?? landIds[0];
        findings.push({
            file: path.join(root, note.file),
            ...at,
            severity: landIds.some((l) => finished.has(l)) ? "error" : "warning",
            rule,
            land,
            message,
        });
    };
    /** The position of a key's line, or of a literal after it. */
    const where = (note, key, literal) => {
        const keyAt = note.raw.search(new RegExp(`^\\s*${key}:`, "m"));
        if (keyAt < 0) return {};
        return locate(note.raw, literal ?? `${key}:`, keyAt) ?? locate(note.raw, `${key}:`) ?? {};
    };

    // 1. present-coverage
    for (const n of notes) {
        if (n.fm.type !== "place" && n.fm.type !== "affiliation") continue;
        const kind = selectKind(registry, n.fm);
        const slot = kind?.slots.find((s) => s.id === "present" && s.status === "required");
        if (!slot || (slot.needs === "summary" && wordCount(n.body) <= registry.rowMaxWords))
            continue;
        const level = slot.level ?? registry.slotLevel ?? 2;
        const has = headings(n.body).some((h) => h.id === "present" && h.level === level);
        for (const land of n.lands) {
            summary(land).present.total++;
            if (has) summary(land).present.with++;
        }
    }

    // 2. homed-being
    const homed = new Set();
    for (const n of notes)
        if (n.fm.type === "being")
            for (const home of asList(n.fm.data?.homes)) {
                const place = ref(home, ["place"]);
                if (place) homed.add(place.address);
            }
    for (const n of notes) {
        if (n.fm.type !== "place" || n.fm.subType !== "settlement") continue;
        if (wordCount(n.body) <= registry.rowMaxWords || homed.has(n.address)) continue;
        report(n, "homed-being", "settlement of summary depth has no being whose home it is");
    }

    // 3. archetype-coverage
    for (const n of notes) {
        if (n.fm.type !== "being") continue;
        for (const land of n.lands) {
            const s = summary(land);
            s.beings++;
            const bump = (map, key) => map.set(key, (map.get(key) ?? 0) + 1);
            for (const a of asList(n.fm.data?.archetypes)) bump(s.archetypes, a);
            if (typeof n.fm.data?.occupation === "string")
                bump(s.occupations, n.fm.data.occupation);
            for (const link of Object.values(n.fm.data?.affiliations ?? {}))
                if (typeof link?.office === "string") bump(s.offices, link.office);
        }
    }
    for (const [land, codes] of Object.entries(lands)) {
        const anchor =
            notes.find((n) => n.fm.shortcode === codes[0] && n.fm.type === "place") ??
            notes.find((n) => n.fm.shortcode === codes[0]);
        if (!anchor) continue;
        const absent = registry.archetypeAbsences?.[land] ?? {};
        for (const archetype of registry.archetypes ?? []) {
            if (summary(land).archetypes.has(archetype) || absent[archetype]) continue;
            report(
                anchor,
                "archetype-coverage",
                `land ${land} has no being of archetype ${archetype}`,
                {},
                [land],
            );
        }
    }

    // 4. unpointed-child
    for (const n of notes) {
        for (const parentRef of asList(n.fm.data?.parents)) {
            const parent = ref(parentRef, parentTypes(n.fm.type));
            if (!parent) continue;
            const linked = linksOf(parent).includes(n);
            const { parents: _parents, ...rest } = parent.fm.data ?? {};
            const named = [...strings(rest)].some((s) => s === n.address || s === n.fm.shortcode);
            if (linked || named) continue;
            report(
                n,
                "unpointed-child",
                `parent ${parent.address} does not point to this note`,
                where(n, "parents"),
            );
        }
    }

    // 5. shared-governance
    const byGovernance = new Map();
    for (const n of notes) {
        const g = n.fm.data?.governance;
        if (n.fm.type !== "affiliation" || !g || typeof g !== "object") continue;
        const key = canonical(g);
        if (!byGovernance.has(key)) byGovernance.set(key, []);
        byGovernance.get(key).push(n);
    }
    for (const group of byGovernance.values()) {
        if (group.length < 2) continue;
        for (const n of group) {
            if (exemptGovernance.has(n.address)) continue;
            const others = group.filter((o) => o !== n).map((o) => o.address);
            report(
                n,
                "shared-governance",
                `governance is identical to ${others.join(", ")}`,
                where(n, "governance"),
            );
        }
    }

    // 6. reciprocal-links
    for (const n of notes) {
        for (const key of ["borders", "routes"]) {
            for (const entry of asList(n.fm.data?.[key])) {
                const target = ref(entry?.to, ["place"]);
                if (!target) continue;
                const back = asList(target.fm.data?.[key]).some((e) => ref(e?.to, ["place"]) === n);
                if (back) continue;
                report(
                    n,
                    "reciprocal-links",
                    `${key} lists ${target.address}, which does not list ${n.address} in ${key}`,
                    where(n, key, String(entry.to)),
                );
            }
        }
    }

    // 7. cast-resolves
    const castKeys = { cast: ["being"], locations: ["place"], factions: ["affiliation"] };
    for (const n of notes) {
        if (n.fm.type !== "scenario") continue;
        for (const [key, types] of Object.entries(castKeys))
            for (const entry of asList(n.fm.data?.[key])) {
                if (ref(entry, types)) continue;
                report(
                    n,
                    "cast-resolves",
                    `${key} entry ${JSON.stringify(entry)} resolves to no ${types[0]} note`,
                    where(n, key, String(entry)),
                );
            }
    }

    // 8. unique-linked
    for (const n of notes) {
        if (n.fm.data?.unique !== true) continue;
        const links = linksOf(n).some((t) => t.fm.type === "place" || t.fm.type === "being");
        if (!links) report(n, "unique-linked", "unique item links no place or being");
    }

    // 9. district-parent
    for (const n of notes) {
        if (n.fm.type !== "place" || n.fm.subType !== "district") continue;
        const ok = asList(n.fm.data?.parents).some((p) => {
            const parent = ref(p, ["place"]);
            return parent && ["settlement", "region"].includes(parent.fm.subType);
        });
        if (!ok)
            report(
                n,
                "district-parent",
                "district has no settlement or region among its parents",
                where(n, "parents"),
            );
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
        byLand: tally("land"),
        byRule: tally("rule"),
        summaries,
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
    console.log(`coverage: ${result.findings.length} findings (${result.errors} errors)`);
    console.log(`coverage: by rule: ${line(result.byRule)}`);
    console.log(`coverage: by land: ${line(result.byLand)}`);
    for (const [land, s] of result.summaries) {
        const pct = s.present.total ? Math.round((100 * s.present.with) / s.present.total) : 0;
        console.log(
            `coverage: ${land}: {#present} ${s.present.with}/${s.present.total} (${pct}%), ${s.beings} beings, ${s.archetypes.size} archetypes, ${s.occupations.size} occupations, ${s.offices.size} offices`,
        );
    }
    return result.errors === 0 ? 0 : 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main(process.argv[2] ?? ".");
}
