/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { checkReciprocalEdges, readPlaces } from "./khazryn-reciprocity.mjs";

function place(shortcode, data = {}) {
    return { file: `${shortcode}.md`, shortcode, data };
}

test("the guard reports a deliberately one-way Khazryn border", () => {
    const findings = checkReciprocalEdges([
        place("khzryndsrtrgn", { borders: [{ to: "outside", bearing: "W" }] }),
        place("outside"),
    ]);
    assert.equal(findings.length, 1);
    assert.match(findings[0], /khzryndsrtrgn\.md.*borders.*outside/);
});

test("new zones and their wells enter the scope from their authored parents", () => {
    const findings = checkReciprocalEdges([
        place("khzryndsrtrgn"),
        place("newzone", { parents: ["khzryndsrtrgn"] }),
        place("newwell", {
            parents: ["newzone"],
            routes: [{ to: "outside", bearing: "E", mode: "land", days: 5 }],
        }),
        place("outside"),
    ]);
    assert.equal(findings.length, 1);
    assert.match(findings[0], /newwell\.md.*routes.*outside/);
});

test("an external note's entry into the Khazryn needs a return", () => {
    const findings = checkReciprocalEdges([
        place("khzryndsrtrgn"),
        place("outside", { borders: [{ to: "khzryndsrtrgn", bearing: "E" }] }),
    ]);
    assert.equal(findings.length, 1);
    assert.match(findings[0], /outside\.md.*borders.*khzryndsrtrgn/);
});

test("the return belongs to the same kind of edge", () => {
    const findings = checkReciprocalEdges([
        place("khzryndsrtrgn", { borders: [{ to: "outside", bearing: "W" }] }),
        place("outside", {
            routes: [{ to: "khzryndsrtrgn", bearing: "E", mode: "land", days: 3 }],
        }),
    ]);
    assert.equal(findings.length, 2);
});

test("an entry whose far note is absent fails", () => {
    const findings = checkReciprocalEdges([
        place("khzryndsrtrgn", {
            routes: [{ to: "missing", bearing: "E", mode: "land", days: 3 }],
        }),
    ]);
    assert.equal(findings.length, 1);
    assert.match(findings[0], /missing.*no place note/);
});

test("reciprocal borders and routes agree on bearing, mode and journey marker", () => {
    assert.deepEqual(
        checkReciprocalEdges([
            place("khzryndsrtrgn", {
                borders: [{ to: "outside", bearing: "W" }],
                routes: [{ to: "outside", bearing: "W", mode: "land", days: 3 }],
            }),
            place("outside", {
                borders: [{ to: "khzryndsrtrgn", bearing: "E" }],
                routes: [{ to: "khzryndsrtrgn", bearing: "E", mode: "land", days: 3 }],
            }),
        ]),
        [],
    );
});

test("one-way entries outside the Khazryn stay outside this guard", () => {
    assert.deepEqual(
        checkReciprocalEdges([
            place("khzryndsrtrgn"),
            place("outside", {
                routes: [{ to: "elsewhere", bearing: "E", mode: "land", days: 3 }],
            }),
            place("elsewhere"),
        ]),
        [],
    );
});

test("typed place references resolve to the same endpoints", () => {
    assert.deepEqual(
        checkReciprocalEdges([
            place("khzryndsrtrgn"),
            place("newzone", {
                parents: ["place-khzryndsrtrgn"],
                borders: [{ to: "thalorna-note-place-outside", bearing: "W" }],
            }),
            place("outside", { borders: [{ to: "place-newzone", bearing: "E" }] }),
        ]),
        [],
    );
});

test("the command exits red on a one-way source fixture and green after its return", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "khazryn-reciprocity-"));
    try {
        fs.writeFileSync(
            path.join(root, "desert.md"),
            "---\nshortcode: khzryndsrtrgn\ntype: place\ndata:\n  borders: [{to: outside, bearing: W}]\n---\n",
        );
        const far = path.join(root, "outside.md");
        fs.writeFileSync(far, '---\nshortcode: outside\ntype: "place"\ndata: {}\n---\n');
        const run = () =>
            spawnSync(
                process.execPath,
                [new URL("./khazryn-reciprocity.mjs", import.meta.url).pathname, root],
                { encoding: "utf8", timeout: 120_000 },
            );
        const red = run();
        assert.equal(red.error, undefined, `the check did not finish: ${red.error}`);
        assert.equal(red.status, 1, red.stderr);
        assert.match(red.stderr, /desert\.md.*borders.*outside.*no reciprocal/);
        fs.writeFileSync(
            far,
            "---\nshortcode: outside\ntype: place\ndata:\n  borders: [{to: khzryndsrtrgn, bearing: E}]\n---\n",
        );
        const green = run();
        assert.equal(green.error, undefined, `the check did not finish: ${green.error}`);
        assert.equal(green.status, 0, green.stderr);
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("the current source-derived Khazryn borders and routes have returns", () => {
    assert.deepEqual(checkReciprocalEdges(readPlaces()), []);
});

test("a return at the wrong bearing fails", () => {
    assert.equal(
        checkReciprocalEdges([
            place("khzryndsrtrgn", { borders: [{ to: "outside", bearing: "W" }] }),
            place("outside", { borders: [{ to: "khzryndsrtrgn", bearing: "W" }] }),
        ]).length,
        2,
    );
});

test("a route returned by another mode or journey marker fails", () => {
    for (const back of [
        { to: "khzryndsrtrgn", bearing: "W", mode: "boat", days: 3 },
        { to: "khzryndsrtrgn", bearing: "W", mode: "land", days: 5 },
    ])
        assert.equal(
            checkReciprocalEdges([
                place("khzryndsrtrgn", {
                    routes: [{ to: "outside", bearing: "E", mode: "land", days: 3 }],
                }),
                place("outside", { routes: [back] }),
            ]).length,
            2,
        );
});
