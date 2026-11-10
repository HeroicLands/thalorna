/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { oppositeBearing } from "@heroiclands/package-build/engine/place-relations";
import { readPlaces } from "./khazryn-reciprocity.mjs";

// Shortcodes identify the lands, not the affiliations that govern them.
// Returns derive from the adopted table.
const borders = [
    ["alyssa", "moktur", "N"],
    ["alyssa", "hylen", "E"],
    ["alyssa", "salkhalon", "S"],
    ["hylen", "salkhalon", "S"],
    ["moktur", "hylen", null],
    ["moktur", "salkhalon", null],
];
const roads = [
    ["alyssar", "W", 1, "west", "east", "one day"],
    ["aravantia", "E", 10, "east", "west", "ten days"],
    ["mercavia", "S", 5, "south", "north", "five days"],
    ["aelissium", "S", 5, "south", "north", "five days"],
    ["tyrellan", "N", 20, "north", "south", "twenty days"],
];
const places = new Map(readPlaces().map((place) => [place.shortcode, place]));
const body = (code) =>
    fs.readFileSync(places.get(code).file, "utf8").split("---").slice(2).join("---");

for (const [from, to, bearing] of borders) {
    test(`adopted provincial border ${from}–${to}: ${bearing ?? "no border"}`, () => {
        for (const [start, end, direction] of [
            [from, to, bearing],
            [to, from, bearing && oppositeBearing(bearing)],
        ]) {
            const edges = (places.get(start).data.borders ?? []).filter((edge) => edge.to === end);
            assert.deepEqual(
                edges.map((edge) => edge.bearing),
                direction ? [direction] : [],
                `${start} → ${end}`,
            );
        }
    });
}

for (const [to, bearing, days, outward, inward, duration] of roads) {
    test(`adopted Orzara road ${to}: ${bearing}, ${days} days, both ends`, () => {
        for (const [from, end, direction] of [
            ["orzara", to, bearing],
            [to, "orzara", oppositeBearing(bearing)],
        ]) {
            const routes = (places.get(from).data.routes ?? []).filter((route) => route.to === end);
            assert.equal(routes.length, 1, `${from} → ${end}: exactly one route`);
            assert.deepEqual(routes[0], {
                to: end,
                bearing: direction,
                mode: "land",
                days,
                terrain: ["road"],
            });
        }
    });
    test(`the ${to} road's bearings and journey appear in prose at both ends`, () => {
        for (const [from, target, direction] of [
            ["orzara", `[[place-${to}|`, outward],
            [to, "Orzara", inward],
        ]) {
            const journey = body(from)
                .split(/[.?!]/u)
                .some(
                    (sentence) =>
                        sentence.includes(target) &&
                        new RegExp(`\\b${direction}\\b`, "u").test(sentence) &&
                        sentence.includes(duration),
                );
            assert.ok(
                journey,
                `${from}: missing ${direction}, ${duration} road prose for ${target}`,
            );
        }
    });
}

test("Orzara and Elissara remain directly in the Viléria Region", () => {
    for (const code of ["orzara", "aelissium"])
        assert.deepEqual(places.get(code).data.parents, ["vylariargn"]);
});
