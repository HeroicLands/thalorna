/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { landsOf, loadRegistry, treeIndex } from "./outline-guard.mjs";

/*
 * Governance guard for the land of Zerathia: Au'Khelathu, Okharis, Bethua,
 * the Southern Savannahs, the Central Rainforests and the South Marches.
 *
 * Every polity there carries offices of its own, none borrows another land's
 * rank ladder, the Empire's first office is the Gar-Au, and every polity
 * whose offices are declared has a living named holder of its first office.
 *
 * The selatu keep one governance block by owner ruling, recorded in the
 * outline registry's `sharedGovernance` list; two polities that are both on
 * that list may share offices. Notes are named by shortcode. A polity belongs
 * to the guard when it is listed in COVERED or when its seat or parents reach
 * the land, so a new polity is checked without editing the guard.
 *
 * The ALLOWED lists hold the violations the guard tolerates until each
 * polity is rewritten. A listed polity that no longer violates fails the
 * test, so an entry is removed in the same change that fixes its polity, and
 * a violation not listed fails at once.
 */

const LAND_ID = "zerathia";

const COVERED = [
    "empireakhlth",
    "capitalselat",
    "borderselatu",
    "deltaselatu",
    "upperrivrslt",
    "okharis",
    "dongarutrb",
    "khamundatrb",
    "kirofatrb",
    "magaratrb",
    "ngorashatrb",
    "shokumatrb",
    "talumengtrb",
    "wambuchitrb",
    "yeshirotrb",
    "zhikandetrb",
    "mtrrchybth",
    "nylbtrblntn",
    "ekunda",
    "fenjara",
];

/** The Empire, whose first office is the throne. */
const EMPIRE = "empireakhlth";
const THRONE = "Gar-Au";

const ALLOWED = {
    sharedOffices: [],
    foreignRanks: [],
    noOffices: [],
    noHead: [
        "borderselatu",
        "capitalselat",
        "deltaselatu",
        "dongarutrb",
        "empireakhlth",
        "khamundatrb",
        "kirofatrb",
        "magaratrb",
        "mtrrchybth",
        "ngorashatrb",
        "selatanztqlt",
        "selatbelgnzl",
        "selatchathu",
        "selatgadjuml",
        "selatgarlut",
        "selatgarqezt",
        "selatgarzant",
        "selatgaulegr",
        "selatgekhenu",
        "selatgezazab",
        "selatgrnlght",
        "selatgrrthsr",
        "selatgrshbzt",
        "selatiaqetlq",
        "selatiqeru",
        "selatiuthnet",
        "selatizetge",
        "selatkhelaga",
        "selatkhelntz",
        "selatkhelzrt",
        "selatlegirus",
        "selatlennnzt",
        "selatlinmut",
        "selatltchlsr",
        "selatltgthzl",
        "selatmaguthn",
        "selatnlghztn",
        "selatseltltr",
        "selatsltplgn",
        "selatwagaru",
        "selatyathlmt",
        "selatzbtrlpt",
        "selatzuger",
        "selatzuqeztu",
        "selatzuzllgl",
        "selatzuzlqtt",
        "seltkhqtmntq",
        "seltqltlnlgr",
        "shokumatrb",
        "talumengtrb",
        "upperrivrslt",
        "wambuchitrb",
        "yeshirotrb",
        "zhikandetrb",
    ],
    noThrone: [],
};

const nonemptyMap = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0;
const shortcodeOf = (value, type) =>
    String(value).replace(new RegExp(`^(?:thalorna-note-)?(?:${type}-)?`), "");

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

const signature = (value) => JSON.stringify(canonical(value));
const officesOf = (note) => note.data?.governance?.offices;
const ranksOf = (note) => note.data?.governance?.ranks ?? [];

/**
 * The guard's findings, each a sorted list of shortcodes.
 *
 * @param {object[]} notes Frontmatter of every note.
 * @param {Set<string>} covered Shortcodes of the polities the guard covers.
 * @param {Set<string>} ruled Shortcodes whose shared block an owner ruling keeps.
 * @param {string} empire Shortcode of the polity whose first office is the throne.
 */
export function inspect(notes, covered, ruled = new Set(), empire = EMPIRE) {
    const polities = notes.filter((n) => n.type === "affiliation" && n.subType === "polity");
    const targets = polities.filter((n) => covered.has(n.shortcode));
    const sorted = (list) => [...new Set(list)].sort();

    const sharedOffices = targets.flatMap((note) => {
        if (!nonemptyMap(officesOf(note))) return [];
        const mine = signature(officesOf(note));
        return (
                polities.some(
                    (other) =>
                        other !== note &&
                        !(ruled.has(note.shortcode) && ruled.has(other.shortcode)) &&
                        nonemptyMap(officesOf(other)) &&
                        signature(officesOf(other)) === mine,
                )
            ) ?
                [note.shortcode]
            :   [];
    });

    // A ladder copied from a polity outside the land describes another people.
    const foreignRanks = targets.flatMap((note) => {
        if (ranksOf(note).length === 0) return [];
        const mine = signature(ranksOf(note));
        return (
                polities.some(
                    (other) =>
                        !covered.has(other.shortcode) &&
                        ranksOf(other).length > 0 &&
                        signature(ranksOf(other)) === mine,
                )
            ) ?
                [note.shortcode]
            :   [];
    });

    const noOffices = targets.filter((n) => !nonemptyMap(officesOf(n))).map((n) => n.shortcode);

    const noThrone = targets
        .filter((n) => n.shortcode === empire)
        .filter((n) => Object.keys(officesOf(n) ?? {})[0] !== THRONE)
        .map((n) => n.shortcode);

    // The first declared office is the head; a person's title alone is not a holder.
    const noHead = targets
        .filter((n) => nonemptyMap(officesOf(n)))
        .filter((body) => {
            const office = Object.keys(officesOf(body))[0];
            return !notes.some(
                (n) =>
                    n.type === "being" &&
                    !n.data?.died &&
                    Object.entries(n.data?.affiliations ?? {}).some(
                        ([key, standing]) =>
                            shortcodeOf(key, "affiliation") === body.shortcode &&
                            [standing?.office].flat().includes(office) &&
                            ranksOf(body).some((rank) => rank.level === standing.rank),
                    ),
            );
        })
        .map((n) => n.shortcode);

    return {
        sharedOffices: sorted(sharedOffices),
        foreignRanks: sorted(foreignRanks),
        noOffices: sorted(noOffices),
        noHead: sorted(noHead),
        noThrone: sorted(noThrone),
    };
}

const registry = loadRegistry();
const index = treeIndex(".");
const notes = [...index.frontmatter.values()];
const land = { [LAND_ID]: registry.lands?.[LAND_ID] ?? [] };
const covered = new Set([
    ...COVERED,
    ...notes
        .filter(
            (n) =>
                n.type === "affiliation" &&
                n.subType === "polity" &&
                landsOf(index, n, land).includes(LAND_ID),
        )
        .map((n) => n.shortcode),
]);
const ruled = new Set(
    (registry.sharedGovernance ?? []).map((address) => shortcodeOf(address, "affiliation")),
);
const found = inspect(notes, covered, ruled);

const unlisted = (kind) => found[kind].filter((code) => !ALLOWED[kind].includes(code));
const cleared = (kind) => ALLOWED[kind].filter((code) => !found[kind].includes(code));

test("every covered Zerathian polity exists and the land is registered", () => {
    const present = new Set(notes.map((n) => n.shortcode));
    assert.deepEqual(
        COVERED.filter((code) => !present.has(code)),
        [],
    );
    assert.ok(land[LAND_ID].length > 0);
    assert.ok(covered.size >= COVERED.length);
});

test("no Zerathian polity shares another polity's offices beyond the ruling and the allowed list", () => {
    assert.deepEqual(unlisted("sharedOffices"), []);
});
test("no Zerathian polity copies another land's rank ladder beyond the allowed list", () => {
    assert.deepEqual(unlisted("foreignRanks"), []);
});
test("every Zerathian polity declares offices beyond the allowed list", () => {
    assert.deepEqual(unlisted("noOffices"), []);
});
test("the Empire's first office is the Gar-Au", () => {
    assert.deepEqual(unlisted("noThrone"), []);
});
test("every Zerathian polity with offices has a living named head beyond the allowed list", () => {
    assert.deepEqual(unlisted("noHead"), []);
});

test("an allowed entry whose polity no longer violates is removed from the list", () => {
    assert.deepEqual(
        Object.fromEntries(Object.keys(ALLOWED).map((kind) => [kind, cleared(kind)])),
        { sharedOffices: [], foreignRanks: [], noOffices: [], noHead: [], noThrone: [] },
    );
});

const polity = (shortcode, offices, ranks = [], extra = {}) => ({
    type: "affiliation",
    subType: "polity",
    shortcode,
    data: { governance: { offices, ranks }, ...extra },
});
const head = (shortcode, body, standing, died) => ({
    type: "being",
    shortcode,
    data: { affiliations: { [body]: standing }, ...(died ? { died } : {}) },
});
const ladder = [
    { level: 0, title: "Resident", description: "Lives there." },
    { level: 1, title: "Speaker", description: "Leads." },
];

test("a new covered polity is checked without being named in an allowed list", () => {
    const notesA = [polity("one", { Speaker: "Leads." }), polity("new", { Speaker: "Leads." })];
    assert.deepEqual(inspect(notesA, new Set(["new"])).sharedOffices, ["new"]);
});
test("reordered office maps still count as one block, and empty maps do not", () => {
    const shared = [
        polity("one", { Speaker: "Leads.", Clerk: "Records." }),
        polity("two", { Clerk: "Records.", Speaker: "Leads." }),
    ];
    assert.deepEqual(inspect(shared, new Set(["one", "two"])).sharedOffices, ["one", "two"]);
    const empty = [polity("one", {}), polity("two", {})];
    const found2 = inspect(empty, new Set(["one", "two"]));
    assert.deepEqual(found2.sharedOffices, []);
    assert.deepEqual(found2.noOffices, ["one", "two"]);
});
test("ruled polities may share with each other but not with an unruled polity", () => {
    const three = [
        polity("a", { Governor: "Governs." }),
        polity("b", { Governor: "Governs." }),
        polity("group", { Governor: "Governs." }),
    ];
    const found2 = inspect(three, new Set(["a", "b", "group"]), new Set(["a", "b"]));
    assert.deepEqual(found2.sharedOffices, ["a", "b", "group"]);
    assert.deepEqual(
        inspect(three.slice(0, 2), new Set(["a", "b"]), new Set(["a", "b"])).sharedOffices,
        [],
    );
});
test("a ladder copied from outside the covered set fails, and one shared inside it does not", () => {
    const pair = [
        polity("here", { A: "a." }, ladder),
        polity("elsewhere", { B: "b." }, structuredClone(ladder)),
    ];
    assert.deepEqual(inspect(pair, new Set(["here"])).foreignRanks, ["here"]);
    assert.deepEqual(inspect(pair, new Set(["here", "elsewhere"])).foreignRanks, []);
});
test("the Empire fails until its first office is the throne", () => {
    const wrong = polity("realm", { Governor: "Governs.", "Gar-Au": "Rules." });
    const right = polity("realm", { "Gar-Au": "Rules.", Governor: "Governs." });
    assert.deepEqual(inspect([wrong], new Set(["realm"]), new Set(), "realm").noThrone, ["realm"]);
    assert.deepEqual(inspect([right], new Set(["realm"]), new Set(), "realm").noThrone, []);
});
test("only a living holder of the first office at a declared rank is a head", () => {
    const body = polity("body", { Speaker: "Leads.", Clerk: "Records." }, ladder);
    const covers = new Set(["body"]);
    const standing = { rank: 1, office: "Speaker" };
    assert.deepEqual(inspect([body], covers).noHead, ["body"]);
    assert.deepEqual(inspect([body, head("a", "body", standing)], covers).noHead, []);
    assert.deepEqual(
        inspect([body, head("a", "affiliation-body", { rank: 1, office: ["Speaker"] })], covers)
            .noHead,
        [],
    );
    for (const wrong of [
        head("a", "body", { rank: 1, office: "Clerk" }),
        head("a", "body", { rank: 9, office: "Speaker" }),
        head("a", "elsewhere", standing),
        head("a", "body", standing, "719.100"),
    ])
        assert.deepEqual(inspect([body, wrong], covers).noHead, ["body"]);
});
