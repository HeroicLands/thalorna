/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Araelwen sweep respells prose, leaves identifiers alone, and has
 * nothing left to do on the tree.
 */

import assert from "node:assert/strict";
import test from "node:test";
import { loadMapping, renamedPath, respeller, sweep } from "./araelwen-sweep.mjs";

const mapping = loadMapping();
const respell = respeller(mapping.respellings);

test("every retired form is respelled, the compound and the plural included", () => {
    assert.equal(
        respell("Úkua-Arálwen is an aralwen, one of the aralwain, beside an arálwen-water."),
        "Úkua-Araelwen is an Araelwen, one of the Araelwen, beside an Araelwen-water.",
    );
    assert.equal(respell("The Aralwain and the Aralwen."), "The Araelwen and the Araelwen.");
});

test("a decomposed accent is respelled as well as a composed one", () => {
    assert.equal(respell("Arálwen"), "Araelwen");
});

test("addresses, link targets, heading ids, code and shortcode lines are kept", () => {
    const text = [
        "---",
        "shortcode: aralwen",
        "---",
        "See [[lore-aralwen|aralwain]] and [the note](lore-aralwen), `aralwen`, ⟦aralwen⟧.",
        "## Aralwen {#aralwen}",
        "lore-aralwen",
    ].join("\n");
    assert.equal(
        respell(text),
        [
            "---",
            "shortcode: aralwen",
            "---",
            "See [[lore-aralwen|Araelwen]] and [the note](lore-aralwen), `aralwen`, ⟦aralwen⟧.",
            "## Araelwen {#aralwen}",
            "lore-aralwen",
        ].join("\n"),
    );
});

test("a data.retired row keeps the form it retires", () => {
    const text = [
        "---",
        "data:",
        "  retired:",
        "    - {form: Arálwen, instead: Araelwen, why: an acute on the stressed syllable}",
        "    - form: Aralwen",
        "      instead: Araelwen",
        "  register:",
        "    - {name: Aralwen, tongue: elavendri}",
        "---",
    ].join("\n");
    const out = respell(text).split("\n");
    assert.equal(
        out[3],
        "    - {form: Arálwen, instead: Araelwen, why: an acute on the stressed syllable}",
    );
    assert.equal(out[4], "    - form: Aralwen");
    assert.equal(out[7], "    - {name: Araelwen, tongue: elavendri}");
});

test("a form inside a longer word is not respelled", () => {
    assert.equal(respell("Aralwenish aralwens"), "Aralwenish aralwens");
});

test("respelling twice changes nothing more", () => {
    const once = respell("An aralwen of Úkua-Arálwen.");
    assert.equal(respell(once), once);
});

test("a note file named for a retired form takes the new form", () => {
    assert.equal(renamedPath("notes/Lore/Aralwen.md", mapping.files), "notes/Lore/Araelwen.md");
    assert.equal(
        renamedPath("notes/Lore/Blood_fields.md", mapping.files),
        "notes/Lore/Blood_fields.md",
    );
});

test("the tree has nothing left to respell", () => {
    assert.deepEqual(sweep(["assets/content", ".changeset"], { check: true }), []);
});

test("a quoted shortcode key and a flow-sequence tag keep their spelling", () => {
    const text = [
        "---",
        '"shortcode": aralwen',
        "tags: [aralwen]",
        "name: Aralwen",
        "---",
        "",
    ].join("\n");
    assert.equal(
        respell(text),
        ["---", '"shortcode": aralwen', "tags: [aralwen]", "name: Araelwen", "---", ""].join("\n"),
    );
});

test("a CRLF note keeps its retired form", () => {
    const text = [
        "---",
        "data:",
        "  retired:",
        "    - {form: Arálwen, instead: Araelwen}",
        "---",
        "An Aralwen.",
    ].join("\r\n");
    assert.equal(respell(text), text.replace("An Aralwen.", "An Araelwen."));
});
