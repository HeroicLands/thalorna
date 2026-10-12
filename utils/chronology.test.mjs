/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The chronology guard: the content tree is clean, and each rule catches the
 * fault it names on a tree built to carry exactly that fault.
 */

import assert from "node:assert/strict";
import test from "node:test";
import {
    ageSpans,
    agesTable,
    check,
    checkAgo,
    checkEras,
    elapsed,
    checkKhelathi,
    kingList,
    readTree,
    roman,
    yearOf,
} from "./chronology.mjs";

const WORLD = { file: "World.md", fm: { type: "place", data: { year: { days: 365 } } } };

const MADHU = {
    file: "Madhu.md",
    fm: {
        shortcode: "madhu",
        type: "lore",
        subType: "calendar",
        data: {
            epoch: "-480.1",
            months: [{ name: "Long", days: 365 }],
            eras: [
                { shortcode: "before", name: "Before the Count", abbreviation: "BC", start: null },
                { shortcode: "kings", name: "The Kings", abbreviation: "AK", start: 1 },
                { shortcode: "copyists", name: "The Copyists", abbreviation: "AC", start: 240 },
            ],
            formats: { std: "D MMMM [yearInEra] GGG" },
        },
    },
};

/** A history note carrying the given event entries. */
function note(shortcode, events) {
    return {
        file: `${shortcode}.md`,
        address: `lore-${shortcode}`,
        fm: { shortcode, type: "lore", subType: "history", data: { events } },
    };
}

/** The findings for a tree of the given history notes, the one calendar and the world. */
function run(...history) {
    return check({ history, calendars: [MADHU], world: [WORLD] });
}

test("the content tree's chronology is consistent", () => {
    assert.deepEqual(check(readTree()), []);
});

test("a date's year is read as written", () => {
    assert.equal(yearOf("~-300"), -300);
    assert.equal(yearOf("720.136"), 720);
    assert.equal(yearOf("unknown"), null);
});

test("a clean tree has no findings", () => {
    assert.deepEqual(
        run(
            note("start", [{ when: -480, stated: { calendar: "madhu", text: "1 AK" } }]),
            note("forty", [
                {
                    when: -241,
                    stated: { calendar: "madhu", text: "1 AC" },
                    depth: "region",
                    names: [{ name: "the Forty Days" }],
                },
            ]),
            note("after", [{ when: 5, stated: { calendar: "madhu", text: "246 AC" } }]),
        ),
        [],
    );
});

test("no-year-zero", () => {
    const [found] = run(note("zero", [{ when: 0, depth: "region" }]));
    assert.match(found, /no-year-zero/u);
});

test("depth-is-closed", () => {
    const [found] = run(note("deep", [{ when: 5, depth: "regional" }]));
    assert.match(found, /depth-is-closed/u);
});

test("stated-calendar-resolves", () => {
    const [found] = run(note("lost", [{ when: 5, stated: { calendar: "nowhere", text: "5 AC" } }]));
    assert.match(found, /stated-calendar-resolves/u);
});

test("stated-agrees: a year counted with a year zero is one year off", () => {
    const [found] = run(note("off", [{ when: -240, stated: { calendar: "madhu", text: "1 AC" } }]));
    assert.match(found, /stated-agrees: "1 AC" in madhu is not the year/u);
});

test("stated-agrees: a text the calendar cannot read", () => {
    const [found] = run(
        note("bad", [{ when: -241, stated: { calendar: "madhu", text: "M 240" } }]),
    );
    assert.match(found, /stated-agrees: "M 240" does not read/u);
});

test("stated-agrees reads no text without a year", () => {
    assert.deepEqual(
        run(note("zero", [{ when: -480, stated: { calendar: "madhu", text: "the first day" } }])),
        [],
    );
});

test("one-date-per-event", () => {
    const [found] = run(
        note("first", [{ when: 315, names: [{ name: "the Fall of the March" }] }]),
        note("second", [{ when: 316, names: [{ name: "The Fall of the March" }] }]),
    );
    assert.match(found, /one-date-per-event/u);
});

test("follows-in-order", () => {
    const [found] = run(
        note("cause", [{ when: 315 }]),
        note("effect", [{ when: 310, follows: [{ event: "lore-cause", how: "caused" }] }]),
    );
    assert.match(found, /follows-in-order/u);
});

/** A note whose whole text is the given prose. */
function prose(raw, shortcode = "page") {
    return { file: `${shortcode}.md`, fm: { shortcode }, raw };
}

/** A king-list note with a Middle Count stretch and a Near Count table. */
const LIST = prose(
    [
        "| Count (ST) | Houses | Reigns | What the list holds |",
        "| --- | --: | --: | --- |",
        "| 1–620 | 1 | 2 | **Amqel'Uqa** (150), **Zab'Uzner** (90) |",
        "| 1006–1390 | 9 | 41 | **Zu'Amqeletu**: **Anlagh'el'Qar I** (crowned 1006) |",
        "",
        "| House | Throne name | Crowned (ST) | Years | AF | The list enters |",
        "| --- | --- | --: | --: | --: | --- |",
        "| Zu'Letetu | **Zab'Uzner II** | 2470 | 10 | 360 | went to the West |",
    ].join("\n"),
    "garauu",
);

const same = (file) => file;

test("a Roman numeral reads as its value", () => {
    assert.equal(roman("III"), 3);
    assert.equal(roman("XIV"), 14);
    assert.equal(roman("XL"), 40);
});

test("the king-list is read in the order of the count", () => {
    assert.deepEqual(
        kingList(LIST.raw).map((reign) => [reign.name, reign.numeral, Math.floor(reign.year)]),
        [
            ["Amqel'Uqa", 1, 1],
            ["Zab'Uzner", 1, 1],
            ["Anlagh'el'Qar", 1, 1006],
            ["Zab'Uzner", 2, 2470],
        ],
    );
});

test("qet-telgu-pair: a pair that converts passes", () => {
    assert.deepEqual(
        checkKhelathi(
            [LIST, prose("In 1006 ST (1105 BF) and 2378 ST, 268 AF, and 2,830 ST, or 720 AF.")],
            same,
        ),
        [],
    );
});

test("qet-telgu-pair: a BF year counted with a year zero is one year off", () => {
    const [found] = checkKhelathi([LIST, prose("The crossing, 1006 ST (1104 BF).")], same);
    assert.match(
        found,
        /^page\.md:1:\d+: error: qet-telgu-pair: 1006 ST is 1105 BF, not 1104 BF$/u,
    );
});

test("qet-telgu-pair: the western year may come first", () => {
    const [found] = checkKhelathi([LIST, prose("In 269 AF, which is 2378 ST.")], same);
    assert.match(found, /qet-telgu-pair: 2378 ST is 268 AF, not 269 AF/u);
});

test("throne-numeral: a numeral that does not rise with the count", () => {
    const bad = prose(
        LIST.raw.replace("**Anlagh'el'Qar I** (crowned 1006)", "**Zab'Uzner II** (crowned 1006)"),
        "garauu",
    );
    const found = checkKhelathi([bad], same);
    assert.equal(found.length, 1);
    assert.match(
        found[0],
        /throne-numeral: Zab'Uzner II is crowned in 2470 ST, after Zab'Uzner II in 1006 ST/u,
    );
});

test("throne-listed: a numbered throne name the list does not hold", () => {
    const found = checkKhelathi(
        [LIST, prose("Anlagh'el'Qar I and Anlagh'el'Qar II reigned.")],
        same,
    );
    assert.equal(found.length, 1);
    assert.match(found[0], /^page\.md:1:\d+: error: throne-listed: Anlagh'el'Qar II is no reign/u);
});

/** A straight-count calendar with three ages, its ages table, and the notes it links. */
function straightCount(overrides = {}) {
    const eras = overrides.eras ?? [
        { shortcode: "before", name: "Before the Count", abbreviation: "BC", start: null },
        { shortcode: "first", name: "The First Age", abbreviation: "FA", start: 1 },
        { shortcode: "second", name: "The Second Age", abbreviation: "SA", start: 500 },
        { shortcode: "third", name: "The Third Age", abbreviation: "TA", start: 900 },
    ];
    const table =
        overrides.table ??
        [
            "| Age | Mark | Its years (SC) |",
            "| --- | --- | --- |",
            "| Before the Count | BC | counted back |",
            "| [[lore-firstage\\|The First Age]] | FA | 1 to 500 |",
            "| [[lore-secondage\\|The Second Age]] | SA | 500 to 900 |",
            "| [[lore-thirdage\\|The Third Age]] | TA | 900 to the present, 1,200 |",
        ].join("\n");
    const raw = `---\nshortcode: straight\n---\n\n## The Ages\n\n${table}\n\nProse after.\n`;
    const calendar = {
        file: "Straight.md",
        address: "lore-straight",
        raw,
        fm: {
            shortcode: "straight",
            type: "lore",
            subType: "calendar",
            data: { epoch: "-100.1", eras, formats: { std: "D MMMM Y GGG" } },
        },
        lineOf: () => null,
    };
    const era = (shortcode, description) => ({
        file: `${shortcode}.md`,
        address: `lore-${shortcode}`,
        raw: "",
        fm: { shortcode, type: "lore", subType: "history", description },
        lineOf: () => 5,
    });
    const prose = overrides.prose ?? [
        calendar,
        era("firstage", "1 to 500 SC: the first age."),
        era("secondage", "500 to 900 SC: the second age."),
        era("thirdage", "900 SC to the present: the third age."),
    ];
    return { calendar, prose };
}

test("the ages table is read with its links and years", () => {
    const { calendar } = straightCount();
    assert.deepEqual(
        agesTable(calendar.raw).map((row) => [row.name, row.link, row.years]),
        [
            ["Before the Count", null, "counted back"],
            ["The First Age", "lore-firstage", "1 to 500"],
            ["The Second Age", "lore-secondage", "500 to 900"],
            ["The Third Age", "lore-thirdage", "900 to the present, 1,200"],
        ],
    );
});

test("eras-agree: a calendar whose rows, table and notes agree has no findings", () => {
    const { calendar, prose } = straightCount();
    assert.deepEqual(checkEras([calendar], prose, same), []);
});

test("eras-agree: a calendar with no body is skipped", () => {
    const { calendar, prose } = straightCount();
    delete calendar.raw;
    assert.deepEqual(checkEras([calendar], prose, same), []);
});

test("eras-agree: an era row the ages table leaves out", () => {
    const { calendar, prose } = straightCount();
    calendar.fm.data.eras.push({ shortcode: "fourth", name: "The Fourth Age", start: 1100 });
    const found = checkEras([calendar], prose, same);
    assert.ok(
        found.some((line) =>
            /eras-agree: the era "The Fourth Age" \(start 1100\) has no row/u.test(line),
        ),
    );
});

test("eras-agree: a table span that opens or closes on the wrong year", () => {
    const { calendar, prose } = straightCount();
    calendar.fm.data.eras.find((era) => era.shortcode === "second").start = 480;
    const found = checkEras([calendar], prose, same);
    assert.ok(
        found.some((line) =>
            /opens "The Second Age" at 500, and its era row starts it at 480/u.test(line),
        ),
    );
    assert.ok(
        found.some((line) =>
            /closes "The First Age" at 500, and the next era row, "The Second Age", starts at 480/u.test(
                line,
            ),
        ),
    );
});

test("eras-agree: a last age the table does not run to the present", () => {
    const { calendar, prose } = straightCount({
        table: [
            "| Age | Its years |",
            "| --- | --- |",
            "| [[lore-firstage\\|The First Age]] | 1 to 500 |",
            "| [[lore-secondage\\|The Second Age]] | 500 to 900 |",
            "| [[lore-thirdage\\|The Third Age]] | 900 to 1,200 |",
        ].join("\n"),
    });
    const [found] = checkEras([calendar], prose, same);
    assert.match(
        found,
        /closes "The Third Age", the last era, without saying it runs to the present/u,
    );
});

test("eras-agree: an era note whose description disagrees, and a link to no note", () => {
    const { calendar, prose } = straightCount();
    prose.find((note) => note.address === "lore-secondage").fm.description = "501 to 900 SC: late.";
    prose.splice(
        prose.findIndex((note) => note.address === "lore-thirdage"),
        1,
    );
    const found = checkEras([calendar], prose, same);
    assert.ok(
        found.some((line) =>
            /^secondage\.md:5: error: eras-agree: the description of lore-secondage does not name 500/u.test(
                line,
            ),
        ),
    );
    assert.ok(
        found.some((line) =>
            /links "The Third Age" to lore-thirdage, which names no note/u.test(line),
        ),
    );
});

test("eras-agree reads no calendar that counts by era year or has one era", () => {
    const { calendar, prose } = straightCount();
    calendar.fm.data.formats.std = "D MMMM [yearInEra] GGG";
    calendar.fm.data.eras.find((era) => era.shortcode === "second").start = 480;
    assert.deepEqual(checkEras([calendar], prose, same), []);
    calendar.fm.data.formats.std = "D MMMM Y GGG";
    calendar.fm.data.eras = calendar.fm.data.eras.slice(0, 2);
    assert.deepEqual(checkEras([calendar], prose, same), []);
});

const DOMSEY = {
    file: "Domsey_Count.md",
    raw: [
        "---",
        "shortcode: domseycount",
        "---",
        "",
        "| Age | Written | Its years (count) |",
        "| --- | --- | --- |",
        "| Before the Sittings | BS | counted back from 1 BS |",
        "| The Five Crowns | FC | 1 to 226 |",
        "| The Hunger and the Fleets | HF | 226 to the present, 434 |",
        "",
    ].join("\n"),
    lineOf: () => null,
    fm: {
        shortcode: "domseycount",
        type: "lore",
        subType: "calendar",
        data: {
            epoch: "287.1",
            months: [{ name: "Turn", days: 365 }],
            eras: [
                {
                    shortcode: "beforesits",
                    name: "Before the Sittings",
                    abbreviation: "BS",
                    marker: "NBS",
                    start: null,
                },
                {
                    shortcode: "fivecrowns",
                    name: "The Five Crowns",
                    abbreviation: "FC",
                    marker: "NFC",
                    start: 1,
                },
                {
                    shortcode: "hungerfleets",
                    name: "The Hunger and the Fleets",
                    abbreviation: "HF",
                    marker: "NHF",
                    start: 226,
                },
            ],
            formats: { std: "D MMMM Y GGG" },
        },
    },
};

/** The findings for a tree whose calendars are the Madhusthāna count and the Dómsey count. */
function runNorth(...history) {
    return check({ history, calendars: [MADHU, DOMSEY], world: [WORLD] });
}

test("the Dómsey count: a count year reads as the Vylarian year it stands for", () => {
    assert.deepEqual(
        runNorth(
            note("sitting", [{ when: 287, stated: { calendar: "domseycount", text: "1 FC" } }]),
            note("oath", [{ when: 518, stated: { calendar: "domseycount", text: "232 HF" } }]),
            note("halls", [{ when: -110, stated: { calendar: "domseycount", text: "396 BS" } }]),
        ),
        [],
    );
});

test("the Dómsey count: a count year one off its Vylarian year is a finding", () => {
    const [found] = runNorth(
        note("off", [{ when: 519, stated: { calendar: "domseycount", text: "232 HF" } }]),
    );
    assert.match(found, /stated-agrees: "232 HF" in domseycount is not the year/u);
});

test("the Dómsey count: a sitting named by its number states no date and is read past", () => {
    assert.deepEqual(
        runNorth(
            note("named", [
                {
                    when: 518,
                    stated: { calendar: "domseycount", text: "the thirty-fourth sitting" },
                },
            ]),
        ),
        [],
    );
});

const CONTINENT = prose("The current year is 720 AF.", "continent");

test("ago-agrees: a phrase that reaches the linked event passes", () => {
    const found = check({
        history: [note("fort", [{ when: 615 }])],
        calendars: [MADHU],
        world: [WORLD],
        prose: [CONTINENT, prose("It began about a century ago ([[lore-fort|the Fort]]).", "town")],
    });
    assert.deepEqual(found, []);
});

test("ago-agrees: a phrase that misses the linked event", () => {
    const [found] = check({
        history: [note("fort", [{ when: 615 }])],
        calendars: [MADHU],
        world: [WORLD],
        prose: [CONTINENT, prose("It began two centuries ago ([[lore-fort|the Fort]]).", "town")],
    });
    assert.match(
        found,
        /^town\.md:1:\d+: error: ago-agrees: "two centuries ago" reaches back to about 520/u,
    );
});

test("ago-agrees: a year the sentence states is an event it can mean", () => {
    const found = check({
        history: [],
        calendars: [MADHU],
        world: [WORLD],
        prose: [CONTINENT, prose("About six hundred years ago, around 120 AF, it moved.", "river")],
    });
    assert.deepEqual(found, []);
    const [bad] = check({
        history: [],
        calendars: [MADHU],
        world: [WORLD],
        prose: [CONTINENT, prose("About six hundred years ago, around 400 AF, it moved.", "river")],
    });
    assert.match(bad, /ago-agrees/u);
});

test("ago-agrees reads neither a span under a century nor a sentence with no event", () => {
    const found = check({
        history: [note("fort", [{ when: 615 }])],
        calendars: [MADHU],
        world: [WORLD],
        prose: [
            CONTINENT,
            prose("Twelve years ago ([[lore-fort|the Fort]]).", "a"),
            prose("Seven centuries ago the Grukar came.", "b"),
        ],
    });
    assert.deepEqual(found, []);
});

test("ago-agrees reads a figure with a thousands comma", () => {
    const [found] = check({
        history: [note("occasion", [{ when: -2110 }])],
        calendars: [MADHU],
        world: [WORLD],
        prose: [
            CONTINENT,
            prose(
                "Counted from 2,830 years ago ([[lore-occasion|it]]) and 1,000 years ago ([[lore-occasion|it]]).",
                "empire",
            ),
        ],
    });
    assert.match(found, /"1,000 years ago"/u);
});

/** The Vylarian Ages in miniature: three ages, the first with no start. */
const AGES = {
    file: "Ages.md",
    fm: {
        shortcode: "vylariages",
        type: "lore",
        subType: "calendar",
        data: {
            epoch: "1.1",
            months: [{ name: "Long", days: 365 }],
            eras: [
                { shortcode: "kingsrepub", name: "The Kings", abbreviation: "KR", start: null },
                {
                    shortcode: "firstaugs",
                    name: "The First Augustars",
                    abbreviation: "FA",
                    start: 1,
                },
                {
                    shortcode: "ageconquest",
                    name: "The Age of Conquest",
                    abbreviation: "AC",
                    start: 96,
                },
            ],
            formats: { std: "D MMMM [yearInEra] GGG" },
        },
    },
};

/** A history note under the Mídhalión folder. */
function midhalion(shortcode, tags, events) {
    return {
        file: `assets/content/Regions/Ankaris/Midhalion/Vylaria/History/${shortcode}.md`,
        address: `lore-${shortcode}`,
        fm: { shortcode, type: "lore", subType: "history", tags, data: { events } },
    };
}

/** The findings for Mídhalión history notes beside the ages calendar. */
function runMidhalion(...history) {
    return check({ history, calendars: [AGES], world: [WORLD] });
}

test("midhalion-era: the ages are spans of calendar years", () => {
    assert.deepEqual(
        ageSpans(AGES).map((span) => [span.shortcode, span.from, span.to]),
        [
            ["kingsrepub", -Infinity, 0],
            ["firstaugs", 1, 95],
            ["ageconquest", 96, Infinity],
        ],
    );
});

test("midhalion-era: notes dated inside their tagged age, with real follows targets, are clean", () => {
    const first = midhalion("firstnote", ["history", "firstaugs"], [{ id: "a", when: 12 }]);
    const second = midhalion(
        "secondnote",
        ["history", "ageconquest"],
        [{ when: 140, follows: [{ event: "lore-firstnote#a", how: "enabled" }] }],
    );
    assert.deepEqual(runMidhalion(first, second), []);
});

test("midhalion-era: a misdated note is red", () => {
    const found = runMidhalion(midhalion("misdated", ["history", "firstaugs"], [{ when: 140 }]));
    assert.equal(found.length, 1);
    assert.match(
        found[0],
        /^assets\/content\/Regions\/Ankaris\/Midhalion\/Vylaria\/History\/misdated\.md:\d*:?\s*error: midhalion-era: `when: 140` lies outside firstaugs, which runs 1 to 95/u,
    );
});

test("midhalion-era: a note naming no age, or two, is red", () => {
    assert.equal(runMidhalion(midhalion("untagged", ["history"], [{ when: 12 }])).length, 1);
    assert.equal(
        runMidhalion(midhalion("twice", ["firstaugs", "ageconquest"], [{ when: 12 }])).length,
        1,
    );
});

test("follows-resolves: a target that names no note, or no event of the note, is red", () => {
    const first = midhalion("firstnote", ["firstaugs"], [{ id: "a", when: 12 }]);
    const missing = midhalion(
        "missing",
        ["ageconquest"],
        [{ when: 140, follows: [{ event: "lore-nowhere", how: "caused" }] }],
    );
    const anchor = midhalion(
        "anchor",
        ["ageconquest"],
        [{ when: 140, follows: [{ event: "lore-firstnote#b", how: "caused" }] }],
    );
    const found = runMidhalion(first, missing, anchor);
    assert.equal(found.length, 2);
    assert.match(found[0], /follows-resolves: `lore-nowhere` names no note/u);
    assert.match(found[1], /follows-resolves: `lore-firstnote#b` names no event of that note/u);
});

test("midhalion-era: a history note outside the Mídhalión folder is not held to the ages", () => {
    const outside = {
        ...midhalion("elsewhere", ["history"], [{ when: 12 }]),
        file: "elsewhere.md",
    };
    assert.deepEqual(check({ history: [outside], calendars: [AGES], world: [WORLD] }), []);
});

test("until-follows-when: a span that runs backward", () => {
    assert.deepEqual(run(note("war", [{ when: -335, until: -312 }])), []);
    const [found] = run(note("war", [{ when: -312, until: -335 }]));
    assert.match(found, /until-follows-when: `until: -335` is earlier than `when: -312`/u);
});

test("elapsed counts the years to the present with no year zero", () => {
    assert.equal(elapsed(-312, 720), 1031);
    assert.equal(elapsed(520, 720), 200);
});

const agoProse = (text) => [
    { file: "continent.md", raw: "The current year is 720 AF." },
    { file: "n.md", raw: text },
];

test("ago-agrees: a count that matches the present passes", () => {
    assert.deepEqual(
        checkAgo([], agoProse("In 520 AF the legions left, two centuries ago."), same),
        [],
    );
    assert.deepEqual(checkAgo([], agoProse("The city fell 1031 years ago, in 312 BF."), same), []);
    assert.deepEqual(checkAgo([], agoProse("About 1000 years ago, in 312 BF, it fell."), same), []);
});

test("ago-agrees: a misdated count is a finding", () => {
    const [found] = checkAgo([], agoProse("The city fell in 312 BF, five centuries ago."), same);
    assert.match(
        found,
        /^n\.md:1:\d+: error: ago-agrees: 312 BF is 1031 years before 720 AF, not five centuries ago/u,
    );
    assert.equal(checkAgo([], agoProse("It fell in 312 BF, 1000 years ago."), same).length, 1);
});

test("ago-agrees reads past a count it cannot read", () => {
    assert.deepEqual(checkAgo([], agoProse("In 312 BF, a thousand years ago, it fell."), same), []);
});

test("ago-agrees reads a tens word as a count and passes over a compound one", () => {
    assert.deepEqual(checkAgo([], agoProse("It fell in 660 AF, sixty years ago."), same), []);
    assert.equal(checkAgo([], agoProse("It fell in 700 AF, sixty years ago."), same).length, 1);
    assert.deepEqual(
        checkAgo([], agoProse("It fell in 241 BF, some nine hundred and sixty years ago."), same),
        [],
    );
});
