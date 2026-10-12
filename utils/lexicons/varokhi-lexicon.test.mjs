/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import test from "node:test";
import { checkFormalNames, formalParts, lexiconFrom } from "./varokhi-lexicon.mjs";

const NOTE = "assets/content/Skills/Languages/Varokhi.md";
const note = fs.readFileSync(NOTE, "utf8");
const rule = lexiconFrom(note);
const villages = new Map([
    ["eichengrnd", "Eichengrund"],
    ["grimholt", "Grimholt"],
]);

/** A being as the corpus reads it. */
function being(full, given, clan, { aliases = [], homes = ["eichengrnd"] } = {}) {
    const raw = `---\nname: {full: ${full}, given: ${given}, clan: ${clan}}\n---\n`;
    return { file: "Being.md", raw, full, given, clan, aliases, homes };
}

const errorsOf = (...beings) => checkFormalNames(beings, rule, villages);

test("the note names both particles of a name in full", () => {
    assert.equal(rule.ofClan, "yra");
    assert.equal(rule.ofVillage, "wur");
});

test("a name in full is read into its three names", () => {
    assert.deepEqual(formalParts("Athalwa yra Vithrúnd wur Eichengrund", rule), {
        given: "Athalwa",
        clan: "Vithrúnd",
        village: "Eichengrund",
    });
    assert.equal(formalParts("Athalwa Vithrúnd", rule), null);
});

test("a name in full that agrees with its pieces and its home holds", () => {
    assert.deepEqual(
        errorsOf(being("Athalwa yra Vithrúnd wur Eichengrund", "Athalwa", "Vithrúnd")),
        [],
    );
});

test("a bare given name and clan is not a name in full", () => {
    const [found] = errorsOf(being("Athalwa Vithrúnd", "Athalwa", "Vithrúnd"));
    assert.match(found, /"Athalwa Vithrúnd" is not a name in full/u);
});

test("a village standing as a clan is a finding", () => {
    const found = errorsOf(
        being("Athalwa yra Eichengrund wur Eichengrund", "Athalwa", "Eichengrund"),
    );
    assert(found.some((line) => /its clan is "Eichengrund", which is a village/u.test(line)));
});

test("a name in full ending on another village than the home is a finding", () => {
    const [found] = errorsOf(
        being("Véthar yra Thalruvan wur Eichengrund", "Véthar", "Thalruvan", {
            homes: ["grimholt"],
        }),
    );
    assert.match(found, /ends on "Eichengrund", but its home is Grimholt/u);
});

test("a published Varokhi byname may follow the given name", () => {
    assert.deepEqual(errorsOf(being("Thornak Blodtusc Bar", "Thornak", "Mahnlin")), []);
});

test("an alias setting a given name beside its clan is a finding", () => {
    const [found] = errorsOf(
        being("Thornak Blodtusc Bar", "Thornak", "Mahnlin", { aliases: ["Thornak Mahnlin"] }),
    );
    assert.match(found, /the alias "Thornak Mahnlin" sets a given name beside a clan/u);
});

test("a being stating no clan is a finding", () => {
    const [found] = errorsOf(being("Athalwa Blodtusc", "Athalwa", null));
    assert.match(found, /neither its name in full nor its name.given and name.clan/u);
});

test("the content tree's Varokhi names hold", () => {
    const run = spawnSync(process.execPath, ["utils/lexicons/varokhi-lexicon.mjs"], {
        encoding: "utf8",
    });
    assert.equal(run.status, 0, run.stderr);
});
