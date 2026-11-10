/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { resolveRef, treeIndex } from "./outline-guard.mjs";

const bodies = [
    "imprlscrblgld",
    "tevran",
    "varkalenis",
    "imperialoffices",
    "seamensgld",
    "danvar",
    "tolvan",
    "tevranaelissium",
    "tarmex",
];
const index = treeIndex(".");
const notes = [...index.frontmatter.values()];

// The office key comes from the institution; a person's title is not a holder entry.
function missingHeads(rows) {
    return bodies.filter((id) => {
        const body = rows.find((n) => n.type === "affiliation" && n.shortcode === id);
        assert.ok(body, id);
        const office = Object.keys(body.data.governance.offices)[0];
        assert.ok(office, id);
        return !rows.some(
            (n) =>
                n.type === "being" &&
                !n.data?.died &&
                Object.entries(n.data?.affiliations ?? {}).some(
                    ([key, standing]) =>
                        resolveRef(index, key, ["affiliation"])?.shortcode === id &&
                        [standing.office].flat().includes(office) &&
                        body.data.governance.ranks.some((r) => r.level === standing.rank),
                ),
        );
    });
}

function removeAffiliations(rows, id) {
    for (const n of rows) {
        if (n.type !== "being") continue;
        for (const key of Object.keys(n.data?.affiliations ?? {})) {
            if (resolveRef(index, key, ["affiliation"])?.shortcode === id) {
                delete n.data.affiliations[key];
            }
        }
    }
}

test("the Vilérian heads have living holders in their declared offices", () => {
    assert.deepEqual(missingHeads(notes), []);
});

test("missing, misplaced and historical entries cannot stand for a head", () => {
    for (const id of bodies) {
        const rows = structuredClone(notes);
        removeAffiliations(rows, id);
        const body = rows.find((n) => n.type === "affiliation" && n.shortcode === id);
        const office = Object.keys(body.data.governance.offices)[0];
        const rank = body.data.governance.ranks.find((r) => r.level > 0).level;
        const holder = {
            type: "being",
            shortcode: "probe",
            data: { affiliations: { [id]: { rank, office } } },
        };
        assert.ok(missingHeads(rows).includes(id));
        assert.ok(!missingHeads([...rows, holder]).includes(id));
        const wrongOffice = structuredClone(holder);
        wrongOffice.data.affiliations[id].office = "An undeclared office";
        assert.ok(missingHeads([...rows, wrongOffice]).includes(id));
        const wrongBody = structuredClone(holder);
        wrongBody.data.affiliations = { elsewhere: { rank, office } };
        assert.ok(missingHeads([...rows, wrongBody]).includes(id));
        const wrongRank = structuredClone(holder);
        wrongRank.data.affiliations[id].rank = -999;
        assert.ok(missingHeads([...rows, wrongRank]).includes(id));
        const historical = structuredClone(holder);
        historical.data.died = "719.100";
        assert.ok(missingHeads([...rows, historical]).includes(id));
    }
});

test("additional valid people and metadata leave existing coverage intact", () => {
    const extra = {
        type: "being",
        shortcode: "additionalresident",
        data: { homes: ["orzara"], affiliations: {} },
    };
    assert.deepEqual(missingHeads([...notes, extra]), missingHeads(notes));
    const enriched = structuredClone(notes);
    for (const row of enriched) row.description = "Additional useful prose";
    assert.deepEqual(missingHeads(enriched), missingHeads(notes));
});

test("legal affiliation address forms and office lists retain the same heads", () => {
    for (const prefix of ["", "affiliation-", "thalorna-note-affiliation-"]) {
        for (const officeList of [false, true]) {
            const rows = structuredClone(notes);
            for (const n of rows) {
                if (n.type !== "being") continue;
                for (const [key, standing] of Object.entries(n.data?.affiliations ?? {})) {
                    const body = resolveRef(index, key, ["affiliation"]);
                    if (!bodies.includes(body?.shortcode)) continue;
                    delete n.data.affiliations[key];
                    if (officeList && standing.office) standing.office = [standing.office].flat();
                    n.data.affiliations[prefix + body.shortcode] = standing;
                }
            }
            assert.deepEqual(
                missingHeads(rows),
                [],
                `${prefix || "bare"}; office list: ${officeList}`,
            );
            for (const id of bodies) {
                const missing = structuredClone(rows);
                removeAffiliations(missing, id);
                assert.deepEqual(missingHeads(missing), [id], `${prefix || "bare"}: removed ${id}`);
            }
        }
    }
});
