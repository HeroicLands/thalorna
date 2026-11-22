/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { createPackRouter } from "@heroiclands/package-build/engine/pack-router";
import { treeIndex } from "./outline-guard.mjs";

/*
 * Pack routing guard. Every being with a `sohl:` block compiles to an Actor,
 * and the Actor lands in a pack the configuration answers for: a public being
 * in a public Actor pack, a GM-only being in a private one. A GM-only being
 * that lands in a public pack is skipped by the compiler without an error, so
 * it declares `pack: gm-actors`. A GM-only affiliation an Actor references
 * declares `pack: gm-items` for the same reason, and its prose goes to GM
 * Journals.
 */

const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
const router = createPackRouter(config.packs);
const privatePacks = new Set(config.packs.filter((p) => p.private).map((p) => p.name));
const notes = [...treeIndex(".").frontmatter.values()];
const statted = notes.filter((n) => n.type === "being" && n.sohl);
const isGm = (n) => [n.tags ?? []].flat().includes("gm");

/** The pack a note's Actor lands in, or the routing error's message. */
function actorPack(n) {
    try {
        return router.resolve(n, "Actor", "sohl");
    } catch (error) {
        return `error: ${error.message}`;
    }
}

test("every public statted being routes to a public Actor pack", () => {
    assert.ok(statted.some((n) => !isGm(n)));
    const wrong = statted
        .filter((n) => !isGm(n))
        .map((n) => [n.shortcode, actorPack(n)])
        .filter(([, pack]) => !pack || pack.startsWith("error:") || privatePacks.has(pack));
    assert.deepEqual(wrong, []);
});

test("every GM-only statted being routes to a private Actor pack", () => {
    assert.ok(statted.some(isGm));
    const wrong = statted
        .filter(isGm)
        .map((n) => [n.shortcode, actorPack(n)])
        .filter(([, pack]) => !privatePacks.has(pack));
    assert.deepEqual(wrong, []);
});

test("the router sends each kind of being where the configuration says", () => {
    const being = (extra) => ({ type: "being", shortcode: "fixture", data: {}, ...extra });
    assert.equal(router.resolve(being({ sohl: { system: {} } }), "Actor", "sohl"), "actors");
    assert.equal(
        router.resolve(
            being({ tags: ["gm"], data: { pack: "gm-actors" }, sohl: { system: {} } }),
            "Actor",
            "sohl",
        ),
        "gm-actors",
    );
    assert.equal(router.resolve(being({}), "JournalEntry"), "journals");
});

test("the GM-only hold affiliations compile to the private Item pack, their prose to GM Journals", () => {
    for (const shortcode of ["mgrthbdhld", "talgnugarhld"]) {
        const hold = notes.find((n) => n.shortcode === shortcode);
        assert.ok(hold, shortcode);
        assert.ok(isGm(hold), shortcode);
        assert.equal(router.resolve(hold, "Item", "sohl"), "gm-items", shortcode);
        assert.equal(router.resolve(hold, "JournalEntry"), "gm-journals", shortcode);
    }
});

test("an undeclared public affiliation compiles to the public Item pack", () => {
    const affiliation = {
        type: "affiliation",
        subType: "polity",
        shortcode: "fixture",
        data: {},
        sohl: { system: {} },
    };
    assert.equal(router.resolve(affiliation, "Item", "sohl"), "items");
    assert.equal(router.resolve(affiliation, "JournalEntry"), "journals");
});
