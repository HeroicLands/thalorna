/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Ki'ich'chik city-states govern by zone.
 *
 * The city-states are the polity notes under the continent's central and
 * southern regions, found at runtime. Each belongs to one of three zones,
 * highland, lowland and southern, and each zone has its own template: no two
 * city-states of different zones name the same set of offices, and none names
 * the set of any other polity on the continent. Every city-state writes its
 * own `governance.summary`.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";

const CONTINENT = "assets/content/Regions/Kiichchik";

/** The regions whose polities are city-states. */
const CITY_STATE_REGIONS = ["Central", "South"];

/** Each city-state's zone, by shortcode. */
const ZONES = {
    ixilankul: "highland",
    kankul: "lowland",
    neokbaate: "lowland",
    xelem: "lowland",
    ixbaltzaku: "southern",
    kuxiixbal: "southern",
    qapteltzakl: "southern",
};

/** Every markdown file under a directory, recursively. */
function* markdown(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* markdown(full);
        else if (entry.name.endsWith(".md")) yield full;
    }
}

/** The frontmatter of a note, or undefined when it has none. */
function frontmatter(file) {
    const match = fs.readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
    return match ? YAML.parse(match[1]) : undefined;
}

/** The polity notes under a directory. */
function polities(dir) {
    return [...markdown(dir)]
        .map((file) => ({ file, front: frontmatter(file) }))
        .filter(({ front }) => front?.type === "affiliation" && front.subType === "polity");
}

/** The office titles a polity names, sorted, as one comparable string. */
function officeSet(front) {
    const offices = front.data?.governance?.offices;
    if (!offices || typeof offices !== "object") return "";
    return JSON.stringify(Object.keys(offices).sort());
}

const cityStates = CITY_STATE_REGIONS.flatMap((region) => polities(path.join(CONTINENT, region)));
const others = polities(CONTINENT).filter(
    ({ file }) => !cityStates.some((city) => city.file === file),
);

test("every city-state has a zone and every zone names a city-state", () => {
    const found = cityStates.map(({ front }) => front.shortcode).sort();
    assert.deepEqual(found, Object.keys(ZONES).sort());
});

test("every city-state writes its governance summary", () => {
    const empty = cityStates
        .filter(({ front }) => !String(front.data?.governance?.summary ?? "").trim())
        .map(({ file }) => `${file}: data.governance.summary is empty`);
    assert.deepEqual(empty, []);
});

test("no two zones share an offices map", () => {
    const shared = [];
    for (const [i, a] of cityStates.entries())
        for (const b of cityStates.slice(i + 1))
            if (
                ZONES[a.front.shortcode] !== ZONES[b.front.shortcode] &&
                officeSet(a.front) === officeSet(b.front)
            )
                shared.push(
                    `${a.file} (${ZONES[a.front.shortcode]}) and ${b.file} ` +
                        `(${ZONES[b.front.shortcode]}) name the same offices`,
                );
    assert.deepEqual(shared, []);
});

test("no city-state shares an offices map with another polity of the continent", () => {
    const shared = [];
    for (const city of cityStates)
        for (const other of others)
            if (officeSet(city.front) && officeSet(city.front) === officeSet(other.front))
                shared.push(`${city.file} and ${other.file} name the same offices`);
    assert.deepEqual(shared, []);
});
