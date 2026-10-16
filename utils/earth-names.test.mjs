/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { GREEK_NAMES, IN_WORLD, findEarthNames, scan } from "./earth-names.mjs";

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

test("the founder of an Earth faith is found under each of his names", () => {
    assert.deepEqual(findEarthNames("a.md", "the month of Zarathustra"), [
        'a.md:1:14: error: "Zarathustra" is an Earth proper name',
    ]);
    assert.equal(findEarthNames("a.md", "Zoroaster and Zarathushtra").length, 2);
});

test("the Earth weekday names are found", () => {
    assert.deepEqual(findEarthNames("a.md", "on an ordinary Tuesday"), [
        'a.md:1:16: error: "Tuesday" is an Earth proper name',
    ]);
    for (const day of ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]) {
        assert.equal(findEarthNames("a.md", `the ${day} market`).length, 1, day);
    }
    assert.equal(findEarthNames("a.md", "tuesdays and sundayish").length, 0);
});

test("whole words and in-world vocabulary pass", () => {
    assert.equal(findEarthNames("a.md", "englishman").length, 0);
    assert.equal(findEarthNames("a.md", "the common tongue of an empire").length, 0);
    assert.equal(findEarthNames("a.md", "the romans in lower case").length, 0);
    assert.equal(findEarthNames("a.md", "Romanization of the Frankish").length, 0);
});

test("the Terran analogs note and terran_analog comments are exempt", () => {
    assert.deepEqual(findEarthNames("assets/content/Reference/Terran_Analogs.md", "Rome"), []);
    assert.deepEqual(findEarthNames("a.md", "# terran_analog: Rome, Norse"), []);
    assert.equal(findEarthNames("a.md", "Rome").length, 1);
});

test("the reader's languages are refused even where Earth names are exempt", () => {
    const analogs = "assets/content/Reference/Terran_Analogs.md";
    assert.equal(findEarthNames("a.md", "# terran_analog: the Latin of Rome").length, 1);
    assert.equal(findEarthNames("a.md", "# terran_analog: latin").length, 1);
    assert.equal(findEarthNames(analogs, "French").length, 1);
    assert.equal(findEarthNames(analogs, "English").length, 1);
    assert.deepEqual(findEarthNames("a.md", "# terran_analog: Japan"), []);
    assert.deepEqual(findEarthNames(analogs, "Rome"), []);
    const guide = "assets/content/Lore/Pronouncing_Thalorna.md";
    assert.deepEqual(findEarthNames(guide, "English, Roman and Scottish"), []);
});

test("Earth-Greek given and place names are found, accented or not", () => {
    assert.deepEqual(findEarthNames("a.md", "ok\nLord Commander Vasilis holds it"), [
        'a.md:2:16: error: "Vasilis" is an Earth-Greek name',
    ]);
    assert.equal(findEarthNames("a.md", "the scribe-houses of Temnos and Kephala").length, 2);
    assert.equal(findEarthNames("a.md", "Stávros and Anastásios").length, 2);
    assert.equal(findEarthNames("a.md", "Phótios, Fótios and Eufrasía").length, 3);
    assert.equal(findEarthNames("a.md", "Melissêna the Elder").length, 1);
    assert.equal(findEarthNames("a.md", "Fótianos Hodíkot and Grégoras").length, 2);
    assert.equal(findEarthNames("a.md", "Efthymiópoulos, Ángelides and Patrikîos").length, 3);
});

test("Earth-Greek names match whole words only, and the setting's own forms pass", () => {
    assert.equal(findEarthNames("a.md", "Stavrazul and Anastazâde").length, 0);
    assert.equal(findEarthNames("a.md", "Basilkâr, Chrysandáhr and Nikómarzân").length, 0);
    assert.equal(findEarthNames("a.md", "Vasilisk").length, 0);
});

test("the Earth-Greek list is plain, unaccented and free of duplicates", () => {
    assert.equal(new Set(GREEK_NAMES).size, GREEK_NAMES.length);
    for (const name of GREEK_NAMES) {
        assert.equal(name, name.normalize("NFD").replace(/\p{M}/gu, ""), `${name} is accented`);
        assert.match(name, /^[A-Z][a-z]+$/, `${name} is not a single capitalised word`);
    }
});

test("every exemption carries a reason", () => {
    for (const [name, why] of Object.entries(IN_WORLD)) {
        assert.ok(why.trim().length > 0, `${name} needs a one-line reason`);
    }
});

test("no note, README or lexicon data file names Earth", () => {
    assert.deepEqual(scan(), []);
});

test("a retired entry's form is read past and its replacement is checked", () => {
    const note = [
        "---",
        "data:",
        "  retired:",
        "    - {form: Scottish, instead: Scottish, why: x}",
        "    - form: Scottish",
        "      instead: Fine",
        "  words: []",
        "  other: Scottish",
        "---",
    ].join("\n");
    assert.deepEqual(
        findEarthNames("a.md", note).map((f) => f.split(": error")[0]),
        ["a.md:4:33", "a.md:8:10"],
    );
});
