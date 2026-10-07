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
import { canonicalYear, check, readTree, stepYears, yearOf } from "./chronology.mjs";

const MADHU = {
    file: "Madhu.md",
    address: "lore-madhu",
    lineOf: () => null,
    fm: {
        shortcode: "madhu",
        data: {
            epoch: "-480.1",
            eras: [
                { shortcode: "bmc", name: "Before the Count", start: null },
                { shortcode: "madhavendra", name: "The Madhusthāna Count", start: 1 },
            ],
        },
    },
};

/** A history note carrying the given event entries. */
function note(shortcode, events) {
    return {
        file: `${shortcode}.md`,
        address: `lore-${shortcode}`,
        lineOf: () => null,
        fm: { shortcode, type: "lore", subType: "history", data: { events } },
    };
}

const ERA = note("agekings", [{ when: -480, until: -241, kind: "era", depth: "region" }]);

/** The findings for a tree of the given history notes and the one calendar. */
function run(...history) {
    return check({ history, calendars: [MADHU] });
}

test("the content tree's chronology is consistent", () => {
    assert.deepEqual(check(readTree()), []);
});

test("a canonical year steps over zero", () => {
    assert.equal(yearOf("~-300"), -300);
    assert.equal(yearOf("720.136"), 720);
    assert.equal(yearOf("unknown"), null);
    assert.equal(stepYears(-1, 1), 1);
    assert.equal(canonicalYear(-480, 1), -480);
    assert.equal(canonicalYear(-480, 240), -241);
    assert.equal(canonicalYear(-480, 481), 1);
    assert.equal(canonicalYear(-480, 1200), 720);
    assert.equal(canonicalYear(-2110, 2378), 268);
});

test("a clean tree has no findings", () => {
    assert.deepEqual(
        run(
            ERA,
            note("forty", [
                {
                    when: -241,
                    stated: { calendar: "madhavendra", text: "M 240" },
                    era: "lore-agekings",
                    depth: "region",
                    names: [{ name: "the Forty Days" }],
                },
            ]),
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
    const [found] = run(note("lost", [{ when: 5, stated: { calendar: "nowhere", text: "N 5" } }]));
    assert.match(found, /stated-calendar-resolves/u);
});

test("stated-agrees: the count read with a year zero is one year off", () => {
    const [found] = run(
        note("off", [{ when: -240, stated: { calendar: "madhavendra", text: "M 240" } }]),
    );
    assert.match(found, /stated-agrees: "M 240" is -241/u);
});

test("era-resolves", () => {
    const [found] = run(note("orphan", [{ when: -300, era: "lore-nosuchera" }]));
    assert.match(found, /era-resolves/u);
});

test("within-era", () => {
    const [found] = run(ERA, note("late", [{ when: -200, era: "lore-agekings" }]));
    assert.match(found, /within-era: `when: -200`/u);
});

test("within-era reads an event's until", () => {
    const [found] = run(ERA, note("long", [{ when: -300, until: -100, era: "lore-agekings" }]));
    assert.match(found, /within-era: `until: -100`/u);
});

test("era-is-ordered", () => {
    const [found] = run(note("backward", [{ when: 100, until: 50, kind: "era" }]));
    assert.match(found, /era-is-ordered/u);
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
