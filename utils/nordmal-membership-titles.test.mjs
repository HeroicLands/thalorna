/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { keepsMembershipTitle, membershipTitleSpans } from "./nordmal-membership-titles.mjs";
import { checkDrift } from "./nordmal-drift.mjs";
const table = JSON.parse(fs.readFileSync("utils/nordmal-concordance.json", "utf8"));
const entries = table.keep.filter((row) => Number.isInteger(row.membershipLevel));
const tally = () => ({
    kept: new Map(),
    excluded: new Map(),
    byGroup: new Map(),
    byToken: new Map(),
});
test("generic membership exceptions match only their exact authored affiliation rung", () => {
    assert.equal(entries.length, 2);
    for (const entry of entries)
        for (const file of entry.paths) {
            const raw = fs.readFileSync(file, "utf8");
            const front = YAML.parse(raw.split("---")[1]);
            const rank = front.data.governance.ranks.find((r) => r.level === entry.membershipLevel);
            assert(keepsMembershipTitle(entry, file, front, rank));
            assert.equal(membershipTitleSpans(entry, file, raw).length, 1);
            assert(!keepsMembershipTitle(entry, "other.md", front, rank));
            assert(!keepsMembershipTitle(entry, file, front, { ...rank, level: 2 }));
            assert(!keepsMembershipTitle(entry, file, { ...front, type: "lore" }, rank));
            assert(!keepsMembershipTitle(entry, file, front, { ...rank, title: "Invented" }));
        }
});
test("drift protects only the membership title, not prose or another level or path", () => {
    const entry = entries.find((row) => row.literal === "Devotee");
    const file = entry.paths[0];
    const raw = fs.readFileSync(file, "utf8");
    const pairs = [{ retired: "Devotee", replacement: "Dróttmadr", group: "rank", scoped: true }];
    assert.equal(checkDrift(pairs, [entry], [{ file, raw }], new Set([file]), tally()).length, 0);
    for (const changed of [
        raw.replace("level: 1", "level: 2"),
        raw + "\nDevotee\n",
        raw.replace("offices: {}", "offices:\n      Devotee: Keeper"),
    ]) {
        assert.equal(
            checkDrift(pairs, [entry], [{ file, raw: changed }], new Set([file]), tally()).length,
            1,
        );
    }
    assert.equal(
        checkDrift(pairs, [entry], [{ file: "other.md", raw }], new Set(["other.md"]), tally())
            .length,
        1,
    );
});

test("an invalid contextual level never becomes a whole-file drift exemption", () => {
    const source = entries.find((row) => row.literal === "Devotee");
    for (const level of [null, "1", 2]) {
        const entry = { ...source, membershipLevel: level };
        const file = entry.paths[0];
        const raw = fs.readFileSync(file, "utf8");
        assert.equal(
            checkDrift(
                [{ retired: "Devotee", replacement: "Dróttmadr", group: "rank", scoped: false }],
                [entry],
                [{ file, raw }],
                new Set(),
                tally(),
            ).length,
            1,
        );
    }
});
