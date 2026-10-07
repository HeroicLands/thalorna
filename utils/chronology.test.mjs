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
import { check, readTree, yearOf } from "./chronology.mjs";

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
