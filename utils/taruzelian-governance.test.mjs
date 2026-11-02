/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";

const CONTENT = "assets/content";
const TARUZEL = `${CONTENT}/Regions/Ankaris/Midhalion/Taruzel/`;

/** Read typed source notes; malformed frontmatter fails rather than hiding a polity. */
function readNotes(dir = CONTENT) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) return readNotes(file);
        if (!entry.name.endsWith(".md")) return [];
        const match = fs.readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        return match ? [{ file, front: YAML.parse(match[1]) }] : [];
    });
}

/** Object member order is not part of an authored governance map. */
function canonical(value) {
    if (Array.isArray(value)) return value.map(canonical);
    if (value && typeof value === "object")
        return Object.fromEntries(
            Object.entries(value)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, item]) => [key, canonical(item)]),
        );
    return value;
}

const officesOf = ({ front }) => front.data?.governance?.offices;
const nonemptyMap = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0;
const local = ({ file }) => file.startsWith(TARUZEL);
const shortcodeOf = (value, type) => String(value).replace(new RegExp(`^${type}-`), "");

/** Select the regional government from its source place link, not a polity-name list. */
function inspect(notes) {
    const polities = notes.filter(
        ({ front }) => front?.type === "affiliation" && front.subType === "polity",
    );
    const targets = polities.filter(local);
    const places = notes.filter(({ front }) => front?.type === "place");
    const localPlaces = places.filter(local);
    const localCodes = new Set(localPlaces.map(({ front }) => front.shortcode));
    const regions = localPlaces.filter(
        ({ front }) =>
            front.subType === "region" &&
            !(front.data?.parents ?? []).some((parent) =>
                localCodes.has(shortcodeOf(parent, "place")),
            ),
    );
    const governments = regions.map(({ file, front }) => {
        const code = shortcodeOf(front.data?.government, "affiliation");
        const polity = targets.find(({ front: target }) => target.shortcode === code);
        assert.ok(polity, `${file}: the regional government resolves to a local polity`);
        return polity;
    });
    const duplicates = targets.flatMap((note) => {
        const offices = officesOf(note);
        if (!nonemptyMap(offices)) return [];
        const signature = JSON.stringify(canonical(offices));
        const copies = polities
            .filter(
                (other) =>
                    other !== note &&
                    nonemptyMap(officesOf(other)) &&
                    JSON.stringify(canonical(officesOf(other))) === signature,
            )
            .map(({ file }) => file)
            .sort();
        return copies.length ? [{ file: note.file, copies }] : [];
    });
    // Member cities belong in confederal descriptions. Singular-city register,
    // citizenship and governing language describes the copied city standing.
    const cityStanding = /\b(?:city['’]s|(?:the|this)\s+city)\b/iu;
    const cityRanks = governments.flatMap(({ file, front }) =>
        (front.data?.governance?.ranks ?? []).flatMap((rank, index) =>
            [rank.title, rank.description].some((text) => cityStanding.test(String(text ?? ""))) ?
                [{ file, rank: index, title: rank.title }]
            :   [],
        ),
    );
    return { targets, regions, duplicates, cityRanks };
}

const polity = (name, offices, ranks = [], file = `${TARUZEL}${name}.md`) => ({
    file,
    front: {
        shortcode: name,
        type: "affiliation",
        subType: "polity",
        data: { governance: { offices, ranks } },
    },
});
const region = (government) => ({
    file: `${TARUZEL}Region.md`,
    front: {
        type: "place",
        subType: "region",
        shortcode: "region",
        data: { government, parents: ["elsewhere"] },
    },
});

const corpus = inspect(readNotes());
test("Taruzelian polities and their regional government derive from typed content", () => {
    assert.ok(corpus.targets.length > 0);
    assert.ok(corpus.regions.length > 0);
});
test("each nonempty Taruzelian office map differs from every other polity's", () => {
    assert.deepEqual(corpus.duplicates, []);
});
test("the Taruzelian Confederation's ranks describe confederal standing rather than one city", () => {
    assert.deepEqual(corpus.cityRanks, []);
});
test("a new polity is checked without adding its name to the guard", () => {
    const notes = [polity("one", { Speaker: "Leads." }), polity("new", { Speaker: "Leads." })];
    assert.deepEqual(
        inspect(notes).duplicates.map(({ file }) => file),
        notes.map(({ file }) => file),
    );
});
test("empty office maps do not count as copied governance", () => {
    assert.deepEqual(inspect([polity("one", {}), polity("two", {})]).duplicates, []);
});
test("reordered maps still count as the same office block", () => {
    assert.equal(
        inspect([
            polity("one", { Speaker: "Leads.", Clerk: "Records." }),
            polity("two", { Clerk: "Records.", Speaker: "Leads." }),
        ]).duplicates.length,
        2,
    );
});
test("a Taruzelian copy of a polity outside Taruzel also fails", () => {
    const other = polity("elsewhere", { Speaker: "Leads." }, [], `${CONTENT}/Elsewhere.md`);
    const found = inspect([polity("one", { Speaker: "Leads." }), other]).duplicates;
    assert.equal(found.length, 1);
    assert.deepEqual(found[0].copies, [other.file]);
});
test("unrelated polities and non-polity institutions stay outside this packet", () => {
    const one = polity("one", { Speaker: "Leads." }, [], `${CONTENT}/Elsewhere.md`);
    const two = polity("two", { Speaker: "Leads." }, [], `${CONTENT}/Another.md`);
    const guild = polity("guild", { Speaker: "Leads." });
    guild.front.subType = "guild";
    assert.deepEqual(inspect([one, two, guild]).duplicates, []);
});
test("the regional government link finds city standing while member-city references pass", () => {
    const root = polity("league", {}, [
        { title: "Freeman of the City", description: "Enrolled in the city's register." },
    ]);
    const notes = [region("affiliation-league"), root];
    assert.equal(inspect(notes).cityRanks.length, 1);
    root.front.data.governance.ranks = [
        { title: "Member", description: "Standing among the member cities of the confederation." },
    ];
    assert.deepEqual(inspect(notes).cityRanks, []);
});
