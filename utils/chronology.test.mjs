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
import { check, checkKhelathi, kingList, readTree, roman, yearOf } from "./chronology.mjs";

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
