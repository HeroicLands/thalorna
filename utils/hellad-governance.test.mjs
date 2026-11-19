/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { landsOf, treeIndex } from "./outline-guard.mjs";

/*
 * Governance guard for the Hellád land: Helionis, Bizaria and the Unpaid Fort.
 *
 * Every polity there carries offices of its own, the federation's and the
 * League's ranks describe a league rather than one city, and every polity
 * whose offices are declared has a living named holder of its first office.
 *
 * Notes are named by shortcode. A polity belongs to the guard when it is
 * listed in COVERED or when its seat lies in the land of Hellád, so a new
 * polity is checked without editing the guard.
 *
 * The ALLOWED lists name the polities that may still violate. A listed
 * polity that passes fails the test, so an entry is removed in the change
 * that fixes its polity, and a violation not listed fails at once.
 */

const LAND = { hellad: ["heladrgn"] };

const COVERED = [
    "ctysttshlns",
    "thyrenae",
    "theradon",
    "pelagora",
    "kalydria",
    "korinthea",
    "athenikos",
    "kostaros2",
    "byzarianlg",
    "khryshteikhos",
    "nesthiros",
    "argyrteikhos",
    "karvashion",
    "orashion",
    "cncltwlvbzrs",
    "mrchntcnsrtchr",
    "mgstrcythls",
    "cnclkstrsh",
    "cnclslmr",
    "cmmndnpdfrt",
];

/** The federation and the League, whose ranks describe a league. */
const LEAGUES = ["ctysttshlns", "byzarianlg"];

const ALLOWED = {
    sharedOffices: [
        "argyrteikhos",
        "byzarianlg",
        "karvashion",
        "khryshteikhos",
        "nesthiros",
        "orashion",
    ],
    cityRanks: ["byzarianlg"],
    noOffices: [
        "cnclkstrsh",
        "cnclslmr",
        "cncltwlvbzrs",
        "hrbrbrdthsln",
        "mgstrcythls",
        "mrchntcnsrtchr",
        "vllgcnclmrshfld",
        "vllgcnclvrdn",
    ],
    noHead: [
        "argyrteikhos",
        "athenikos",
        "byzarianlg",
        "ctysttshlns",
        "kalydria",
        "karvashion",
        "khryshteikhos",
        "korinthea",
        "kostaros2",
        "nesthiros",
        "orashion",
        "pelagora",
        "theradon",
        "thyrenae",
    ],
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

// Member cities belong in confederal descriptions. Singular-city register,
// citizenship and governing language describes a city's own standing.
const cityStanding = /\b(?:city['’]s|(?:the|this)\s+city)\b/iu;

/**
 * The guard's findings, each a sorted list of shortcodes.
 *
 * @param {object[]} notes Frontmatter of every note.
 * @param {Set<string>} covered Shortcodes of the polities the guard covers.
 * @param {string[]} leagues Shortcodes of the federation and the League.
 */
export function inspect(notes, covered, leagues = LEAGUES) {
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
                        nonemptyMap(officesOf(other)) &&
                        signature(officesOf(other)) === mine,
                )
            ) ?
                [note.shortcode]
            :   [];
    });

    const noOffices = targets.filter((n) => !nonemptyMap(officesOf(n))).map((n) => n.shortcode);

    const cityRanks = targets
        .filter((n) => leagues.includes(n.shortcode))
        .filter(
            (n) =>
                ranksOf(n).some((rank) =>
                    [rank.title, rank.description].some((text) =>
                        cityStanding.test(String(text ?? "")),
                    ),
                ) ||
                (ranksOf(n).length > 0 &&
                    polities.some(
                        (other) =>
                            other !== n &&
                            !leagues.includes(other.shortcode) &&
                            signature(ranksOf(other)) === signature(ranksOf(n)),
                    )),
        )
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
        cityRanks: sorted(cityRanks),
        noOffices: sorted(noOffices),
        noHead: sorted(noHead),
    };
}

const index = treeIndex(".");
const notes = [...index.frontmatter.values()];
const covered = new Set([
    ...COVERED,
    ...notes
        .filter(
            (n) =>
                n.type === "affiliation" &&
                n.subType === "polity" &&
                landsOf(index, n, LAND).includes("hellad"),
        )
        .map((n) => n.shortcode),
]);
const found = inspect(notes, covered);

const unlisted = (kind) => found[kind].filter((code) => !ALLOWED[kind].includes(code));
const cleared = (kind) => ALLOWED[kind].filter((code) => !found[kind].includes(code));

test("every covered Hellád polity exists", () => {
    const present = new Set(notes.map((n) => n.shortcode));
    assert.deepEqual(
        COVERED.filter((code) => !present.has(code)),
        [],
    );
    assert.ok(covered.size >= COVERED.length);
});

test("no Hellád polity shares another polity's offices beyond the allowed list", () => {
    assert.deepEqual(unlisted("sharedOffices"), []);
});
test("the federation's and the League's ranks describe a league beyond the allowed list", () => {
    assert.deepEqual(unlisted("cityRanks"), []);
});
test("every Hellád polity declares offices beyond the allowed list", () => {
    assert.deepEqual(unlisted("noOffices"), []);
});
test("every Hellád polity with offices has a living named head beyond the allowed list", () => {
    assert.deepEqual(unlisted("noHead"), []);
});

test("an allowed entry whose polity no longer violates is removed from the list", () => {
    assert.deepEqual(
        Object.fromEntries(Object.keys(ALLOWED).map((kind) => [kind, cleared(kind)])),
        { sharedOffices: [], cityRanks: [], noOffices: [], noHead: [] },
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
test("a copy of a polity outside the covered set still counts as sharing", () => {
    const pair = [polity("one", { Speaker: "Leads." }), polity("elsewhere", { Speaker: "Leads." })];
    assert.deepEqual(inspect(pair, new Set(["one"])).sharedOffices, ["one"]);
});
test("league ranks that name one city, or copy a member city's ladder, fail", () => {
    const cityLadder = [
        { level: 0, title: "Freeman of the City", description: "Enrolled in the city's register." },
    ];
    const notesA = [polity("league", { Speaker: "Leads." }, cityLadder)];
    assert.deepEqual(inspect(notesA, new Set(["league"]), ["league"]).cityRanks, ["league"]);
    const copied = [
        polity("league", { A: "a." }, ladder),
        polity("member", { B: "b." }, structuredClone(ladder)),
    ];
    assert.deepEqual(inspect(copied, new Set(["league"]), ["league"]).cityRanks, ["league"]);
    const confederal = [
        polity("league", { A: "a." }, [
            { level: 0, title: "Member", description: "Standing among the member cities." },
        ]),
        polity("member", { B: "b." }, ladder),
    ];
    assert.deepEqual(inspect(confederal, new Set(["league"]), ["league"]).cityRanks, []);
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
