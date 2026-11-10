/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";
import { isGmNote } from "@heroiclands/package-build/engine/note-vocabulary";
import { check } from "./coverage-guard.mjs";
import { landsOf, loadRegistry, resolveRef, treeIndex } from "./outline-guard.mjs";

const base = loadRegistry();
const registry = {
    ...base,
    lands: { east: ["east"], west: ["west"] },
    finished: ["east"],
    archetypes: [],
};
const body = (shortcode, data = {}, type = "affiliation") => ({
    type,
    subType: type === "affiliation" ? "venture" : "region",
    shortcode,
    name: { full: shortcode },
    data,
});
function fixture(t, notes) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "affiliation-range-"));
    t.after(() => fs.rmSync(root, { recursive: true, force: true }));
    fs.mkdirSync(path.join(root, "assets/content"), { recursive: true });
    for (const note of [body("east", {}, "place"), body("west", {}, "place"), ...notes]) {
        fs.writeFileSync(
            path.join(root, "assets/content", `${note.type}-${note.shortcode}.md`),
            `---\n${YAML.stringify(note)}---\n`,
        );
    }
    const index = treeIndex(root);
    return {
        lands: (note) => landsOf(index, note, registry.lands),
        findings: () =>
            check({ root, registry }).findings.filter((f) => f.rule === "affiliation-location"),
    };
}

test("range resolves bare, typed and qualified place addresses across multiple lands", (t) => {
    const notes = [
        body("coast", { parents: ["east"] }, "place"),
        body("coast", { seat: "west" }),
        body("fleet", { seat: null, range: ["coast", "place-west", "thalorna-note-place-coast"] }),
    ];
    const f = fixture(t, notes);
    assert.deepEqual(f.lands(notes[2]), ["east", "west"]);
    assert.deepEqual(f.findings(), []);
});

test("seat takes priority over range while political parents keep their existing lands", (t) => {
    const seat = body("seated", { seat: "place-east", range: ["west"] });
    const child = body("child", { parents: ["seated"], range: ["west"] });
    const f = fixture(t, [seat, child]);
    assert.deepEqual(f.lands(seat), ["east"]);
    assert.deepEqual(f.lands(child), ["east", "west"]);
});

test("a nonempty wrong-type seat never falls back to range", (t) => {
    const note = body("fleet", { seat: "affiliation-east", range: ["west"] });
    const f = fixture(t, [body("east", { seat: "east" }), note]);
    assert.deepEqual(f.lands(note), []);
    assert.match(f.findings()[0].message, /seat.*place/);
});

test("range does not follow wrong-type addresses or change another type's range", (t) => {
    const notes = [
        body("fleet", { range: ["affiliation-east", "place-absent"] }),
        body("ranger", { range: ["east"] }, "being"),
        body("island", { range: ["east"] }, "place"),
        body("east", { seat: "east" }),
    ];
    const f = fixture(t, notes);
    for (const note of notes.slice(0, 3)) assert.deepEqual(f.lands(note), []);
    assert.equal(f.findings().length, 2);
    assert.ok(f.findings().every((finding) => finding.file.endsWith("affiliation-fleet.md")));
});

test("range traversal remains cycle-safe and follows all branches", (t) => {
    const notes = [
        body("loop", { parents: ["loop", "place-coast"], range: ["west"] }),
        body("coast", { parents: ["inlet", "east"] }, "place"),
        body("inlet", { parents: ["coast"] }, "place"),
    ];
    assert.deepEqual(fixture(t, notes).lands(notes[0]), ["east", "west"]);
});

test("missing and empty ranges are findings even when parents supply a land", (t) => {
    const notes = [
        body("missing", { seat: null }),
        body("empty", { seat: "", range: [] }),
        body("null", { range: null }),
        body("scalar", { range: "east" }),
        body("child", { parents: ["place-east"] }),
        body("unfinished", { parents: ["place-west"] }),
    ];
    const found = fixture(t, notes).findings();
    assert.equal(found.length, notes.length);
    assert.equal(found.find((f) => f.file.endsWith("affiliation-child.md")).severity, "error");
    assert.ok(
        found
            .filter((f) => !f.file.endsWith("affiliation-child.md"))
            .every((f) => f.severity === "warning"),
    );
    assert.ok(found.every((f) => /nonempty.*range/.test(f.message)));
});

test("valid ranges without a registered land remain visible as warnings", (t) => {
    const notes = [body("sea", {}, "place"), body("fleet", { range: ["sea"] })];
    const f = fixture(t, notes);
    assert.deepEqual(f.lands(notes[1]), []);
    assert.equal(f.findings().length, 1);
    assert.equal(f.findings()[0].severity, "warning");
    assert.match(f.findings()[0].message, /registered land/);
});

const sourceIndex = treeIndex();
const sourceCoverage = check();

test("every source affiliation without a seat or range has a coverage finding", () => {
    const missing = [...sourceIndex.frontmatter].filter(
        ([, fm]) => fm.type === "affiliation" && !fm.data?.seat && !fm.data?.range?.length,
    );
    assert.ok(missing.length, "the source has seatless affiliations to exercise the guard");
    for (const [file, fm] of missing) {
        const finding = sourceCoverage.findings.find(
            (f) => f.file === file && f.rule === "affiliation-location",
        );
        assert.ok(finding, `${fm.type}-${fm.shortcode}: missing geographic activity is unreported`);
        const finished = landsOf(sourceIndex, fm, base.lands).some((land) =>
            base.finished.includes(land),
        );
        assert.equal(finding.severity, finished ? "error" : "warning", file);
    }
});

test("source ranges are nonempty place references and every unresolved land is reported", () => {
    const ranged = [...sourceIndex.frontmatter].filter(
        ([, fm]) => fm.type === "affiliation" && Object.hasOwn(fm.data ?? {}, "range"),
    );
    assert.ok(ranged.length, "the source needs geographic activity for its seatless bodies");
    for (const [file, fm] of ranged) {
        assert.ok(fm.data.seat == null || fm.data.seat === "", file);
        assert.ok(Array.isArray(fm.data.range) && fm.data.range.length, file);
        for (const value of fm.data.range) {
            const place = resolveRef(sourceIndex, value, ["place"]);
            assert.ok(place, `${file}: ${value} is not a place`);
            assert.ok(!isGmNote(place), `${file}: private range`);
        }
        const findings = sourceCoverage.findings.filter(
            (f) => f.file === file && f.rule === "affiliation-location",
        );
        assert.equal(findings.length, landsOf(sourceIndex, fm, base.lands).length ? 0 : 1, file);
    }
});
