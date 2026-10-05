/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { lexiconFrom } from "./lexicons/nordmal-lexicon.mjs";
import { checkStandingCoinages } from "./nordmal-standing-coinages.mjs";
const rule = lexiconFrom(fs.readFileSync("assets/content/Skills/Languages/Nordmal.md", "utf8"));
const section = JSON.parse(
    fs.readFileSync("utils/nordmal-concordance.json", "utf8"),
).standingCoinages;
const readNote = (file) => YAML.parse(fs.readFileSync(file, "utf8").split("---")[1]);
test("every mapped standing agrees with its affiliation and published compound rules", () => {
    assert.deepEqual(checkStandingCoinages(section, rule, readNote), []);
});
test("stale titles, levels and body paths fail", () => {
    for (const field of ["title", "level", "path"]) {
        const wrong = structuredClone(section);
        wrong.rungs[0][field] = field === "level" ? 999 : "Missing";
        assert(checkStandingCoinages(wrong, rule, readNote).length > 0, field);
    }
});
test("a rung needs a description and an affiliation body", () => {
    for (const mutate of [
        (n) => {
            n.type = "lore";
        },
        (n) => {
            n.data.governance.ranks[0].description = "";
        },
    ]) {
        assert(
            checkStandingCoinages(section, rule, (p) => {
                const n = readNote(p);
                mutate(n);
                return n;
            }).length > 0,
        );
    }
});
test("duplicate mappings and contradictory unused dispositions fail", () => {
    const duplicate = structuredClone(section);
    duplicate.rungs.push(duplicate.rungs[0]);
    assert(checkStandingCoinages(duplicate, rule, readNote).some((e) => e.includes("duplicate")));
    const contradictory = structuredClone(section);
    contradictory.deliberatelyUnused[0].title = contradictory.rungs[0].title;
    assert(checkStandingCoinages(contradictory, rule, readNote).some((e) => e.includes("placed")));
});
