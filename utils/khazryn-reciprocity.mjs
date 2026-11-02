/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/** Borders and routes through the Khazryn have a return at their far end. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { parseAddress, isAddressTuple } from "@heroiclands/package-build/engine/address";
import { oppositeBearing } from "@heroiclands/package-build/engine/place-relations";

const CONTENT = "assets/content";
const KHAZRYN = "khzryndsrtrgn";

function placeKey(value) {
    const address = parseAddress(
        value,
        { package: "thalorna", system: "note", type: "place", types: new Set(["place"]) },
        { declared: true },
    );
    return isAddressTuple(address) && address.package === "thalorna" ?
            address.shortcode
        :   undefined;
}

/** Read place notes directly from their authored frontmatter.
 * @param {string} [content] The content directory.
 * @returns {{file:string,shortcode:string,data:Record<string,any>}[]} Place records.
 */
export function readPlaces(content = CONTENT) {
    const places = [];
    function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const file = path.join(dir, entry.name);
            if (entry.isDirectory()) walk(file);
            else if (entry.isFile() && file.endsWith(".md")) {
                const raw = fs.readFileSync(file, "utf8");
                const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(raw);
                if (!match) continue;
                const note = YAML.parse(match[1]);
                if (note?.type !== "place") continue;
                places.push({ file, shortcode: note.shortcode, data: note.data ?? {} });
            }
        }
    }
    walk(content);
    return places.sort((a, b) => a.file.localeCompare(b.file));
}

/** Derive the Khazryn's descendants and check every edge entering or leaving them.
 * @param {{file:string,shortcode:string,data:Record<string,any>}[]} places Authored places.
 * @returns {string[]} Missing reciprocal entries, with their source files.
 */
export function checkReciprocalEdges(places) {
    const byCode = new Map(places.map((place) => [place.shortcode, place]));
    if (!byCode.has(KHAZRYN)) return [`${KHAZRYN}: the Khazryn region has no place note`];
    const covered = new Set([KHAZRYN]);
    let changed = true;
    while (changed) {
        changed = false;
        for (const place of places) {
            if (
                !covered.has(place.shortcode) &&
                (place.data.parents ?? []).some((parent) => covered.has(placeKey(parent)))
            ) {
                covered.add(place.shortcode);
                changed = true;
            }
        }
    }

    const findings = [];
    for (const place of places) {
        for (const kind of ["borders", "routes"]) {
            for (const edge of place.data[kind] ?? []) {
                const to = placeKey(edge.to);
                if (!covered.has(place.shortcode) && !covered.has(to)) continue;
                const far = byCode.get(to);
                const source = `${place.file}: data.${kind}: ${place.shortcode} → ${edge.to}`;
                if (!far) findings.push(`${source}: the far end has no place note`);
                else if (
                    !(far.data[kind] ?? []).some(
                        (back) =>
                            placeKey(back.to) === place.shortcode &&
                            back.bearing === oppositeBearing(edge.bearing) &&
                            (kind !== "routes" ||
                                (back.mode === edge.mode && back.days === edge.days)),
                    )
                )
                    findings.push(`${source}: no reciprocal ${kind} entry in ${far.file}`);
            }
        }
    }
    return findings;
}

/** Print the source-derived findings and return the command's exit status. */
export function main(content = CONTENT) {
    const findings = checkReciprocalEdges(readPlaces(content));
    for (const finding of findings) console.error(finding);
    console.log(`khazryn-reciprocity: ${findings.length} finding(s)`);
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]))
    process.exitCode = main(process.argv[2] ?? CONTENT);
