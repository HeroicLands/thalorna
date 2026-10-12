/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { IN_WORLD, findEarthNames, scan } from "./earth-names.mjs";

test("an Earth name is found, with its column", () => {
    assert.deepEqual(findEarthNames("a.md", "ok\nas in Scottish loch"), [
        'a.md:2:7: error: "Scottish" is an Earth proper name',
    ]);
    assert.equal(findEarthNames("a.md", "as in English").length, 1);
    assert.equal(findEarthNames("a.md", "the Common tongue calls it").length, 1);
    assert.equal(findEarthNames("a.md", "a Common-tongue name").length, 1);
    assert.equal(findEarthNames("a.md", "dated in the Common Calendar").length, 1);
    assert.equal(findEarthNames("a.md", "the common calendar calls it").length, 1);
    assert.equal(findEarthNames("a.md", "Latin letters, and Tolkien").length, 2);
    assert.equal(findEarthNames("a.md", "from France to Japan").length, 2);
    assert.equal(findEarthNames("a.md", "speaking Norwegian").length, 1);
});

test("whole words and in-world vocabulary pass", () => {
    assert.equal(findEarthNames("a.md", "englishman").length, 0);
    assert.equal(findEarthNames("a.md", "the common tongue of an empire").length, 0);
    assert.equal(findEarthNames("a.md", "latin and the romans in lower case").length, 0);
    assert.equal(findEarthNames("a.md", "Romanization of the Frankish").length, 0);
});

test("the Terran analogs note and terran_analog comments are exempt", () => {
    assert.deepEqual(findEarthNames("assets/content/Reference/Terran_Analogs.md", "Rome"), []);
    assert.deepEqual(findEarthNames("a.md", "# terran_analog: Rome, Norse"), []);
    assert.equal(findEarthNames("a.md", "Rome").length, 1);
});

test("every exemption carries a reason", () => {
    for (const [name, why] of Object.entries(IN_WORLD)) {
        assert.ok(why.trim().length > 0, `${name} needs a one-line reason`);
    }
});

test("no note, README or lexicon data file names Earth", () => {
    assert.deepEqual(scan(), []);
});
