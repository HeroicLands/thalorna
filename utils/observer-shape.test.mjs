/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { findObservers, scan } from "./observer-shape.mjs";

const found = (text) => findObservers("a.md", text);

test("a person appended to a fact is found, with its column", () => {
    assert.deepEqual(
        found("The wall is old.\nThe gate is shut, and a Nordman will tell you it never opens."),
        [
            'a.md:2:17: error: ", and a Nordman will tell" appends an invented observer; stop at the fact or make the consequence the subject',
        ],
    );
});

test("each variant of the shape is found", () => {
    assert.equal(
        found("Salt is cheap here, and a Provenzian would correct a foreigner on the point.")
            .length,
        1,
    );
    assert.equal(found("The seal is cut deep—and a clerk would notice at once.").length, 1);
    assert.equal(found("The stone is cold; and an old miner can tell it by the sound.").length, 1);
    assert.equal(
        found(
            "Only a custodian has one, and anyone who has handled a work knows at a touch what it is.",
        ).length,
        1,
    );
    assert.equal(found("The hall is old, and anyone who looks closely can see it.").length, 1);
    assert.equal(
        found("The road bends twice, and you will find the ford below the second bend.").length,
        1,
    );
    assert.equal(found("The road bends twice—and you would notice the ford.").length, 1);
    assert.equal(found("The road bends twice, and you could discover the ford.").length, 1);
    assert.equal(
        found("It is a scribe's answer, and anyone who has sat the course knows it.").length,
        1,
    );
    assert.equal(
        found("They differ, and a herder and a fisher would never mistake each other.").length,
        1,
    );
});

test("a hazard, a capacity or a list of people passes", () => {
    assert.deepEqual(
        found("The open sand kills fast, and a windstorm can bury a camp in minutes."),
        [],
    );
    assert.deepEqual(
        found(
            "An auditor can read a record, and a craftsperson can tell when a repair conceals damage.",
        ),
        [],
    );
    assert.deepEqual(
        found("It serves rogues, scouts, and anyone who needs a moment of concealment."),
        [],
    );
    assert.deepEqual(
        found("A daughter who can read a ledger is worth more, and a son who cannot is not."),
        [],
    );
    assert.deepEqual(
        found("The mistress says them, and anyone with two hands says the fifth."),
        [],
    );
    assert.deepEqual(found("The cave is dark, and you can see the wall through it."), []);
    assert.deepEqual(found("It outruns a horse, and a kick can kill a lion."), []);
});

test("a speaker's words inside quotation marks pass", () => {
    assert.deepEqual(
        found(
            'He says, "The Senate lists the range as imperial, and you will find the stones at the passes."',
        ),
        [],
    );
    assert.deepEqual(found("She says, “The wall is old, and a Nordman will tell you so.”"), []);
    assert.equal(found('"Fine," he says, and a Nordman will tell you otherwise.').length, 1);
});

test("frontmatter, code fences and verse divs are not read", () => {
    const shape = "The wall is old, and a Nordman will tell you so.";
    assert.deepEqual(found(`---\ndescription: ${shape}\n---\nplain`), []);
    assert.deepEqual(found("::: {.verse form=praise}\n" + shape + "\n:::\nplain"), []);
    assert.deepEqual(found(":::verse {form=praise}\n" + shape + "\n:::\nplain"), []);
    assert.deepEqual(found("```text\n" + shape + "\n```\nplain"), []);
    assert.deepEqual(found("~~~\n" + shape + "\n~~~\nplain"), []);
    assert.deepEqual(found("---\ntitle: x\n---\n::: {.verse}\n" + shape + "\n:::\n"), []);
    assert.deepEqual(
        found("::: {.verse}\nverse\n:::\n" + shape).map((f) => f.split(": ")[0]),
        ["a.md:4:16"],
    );
});

test("the style guide that names the shape is exempt", () => {
    assert.deepEqual(
        findObservers(
            "assets/content/README-gazeteer.md",
            "It is filler, and a Nordman will tell you so.",
        ),
        [],
    );
});

test("no note appends an invented observer", () => {
    assert.deepEqual(scan(), []);
});
