/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The coverage guard: each rule catches the fault it names on a content tree
 * built to carry exactly that fault, and a finding in a finished land is an
 * error.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";
import { check } from "./coverage-guard.mjs";
import { loadRegistry } from "./outline-guard.mjs";

const RULES = JSON.parse(
    fs.readFileSync(new URL("./fixtures/coverage-notes.json", import.meta.url), "utf8"),
).rules;

/** Writes one rule's fixture notes into a fresh content tree. */
function tree(name) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "coverage-"));
    const dir = path.join(root, "assets/content");
    fs.mkdirSync(dir, { recursive: true });
    for (const [file, note] of Object.entries(RULES[name].notes)) {
        const filler = Array.from({ length: note.words }, () => "word").join(" ");
        fs.writeFileSync(
            path.join(dir, file),
            `---\n${YAML.stringify(note.fm)}---\n\n${note.body}\n\n${filler}\n`,
        );
    }
    return root;
}

const base = loadRegistry();
function registryFor(name, over = {}) {
    const rule = RULES[name];
    return {
        ...base,
        lands: { "the-reach": ["reach"] },
        finished: [],
        archetypes: rule.archetypes ?? [],
        archetypeAbsences: {},
        sharedGovernance: [],
        ...over,
    };
}
function run(name, over, rule = name) {
    const result = check({ root: tree(name), registry: registryFor(name, over) });
    return { ...result, found: result.findings.filter((f) => f.rule === rule) };
}
const files = (found) => found.map((f) => path.basename(f.file)).sort();

test("present-coverage counts summary-depth notes with a present slot", () => {
    const { summaries, found } = run("present-coverage");
    assert.deepEqual(summaries.get("the-reach").present, { total: 3, with: 2 });
    assert.deepEqual(found, []);
});

test("homed-being names a summary-depth settlement nobody calls home", () => {
    const { found } = run("homed-being");
    assert.deepEqual(files(found), ["Empty.md"]);
    assert.equal(found[0].severity, "warning");
});

test("archetype-coverage reports an archetype the land lacks", () => {
    const { found, summaries } = run("archetype-coverage");
    assert.equal(found.length, 1);
    assert.match(found[0].message, /mage/);
    assert.equal(summaries.get("the-reach").archetypes.get("warrior"), 1);
});

test("archetype-coverage accepts a recorded absence", () => {
    const { found } = run("archetype-coverage", {
        archetypeAbsences: { "the-reach": { mage: "No magic in the reach." } },
    });
    assert.deepEqual(found, []);
});

test("unpointed-child reports a child its parent does not link", () => {
    const { found } = run("unpointed-child");
    assert.deepEqual(files(found), ["Orphan.md"]);
});

test("shared-governance reports identical governance blocks", () => {
    const { found } = run("shared-governance");
    assert.deepEqual(files(found), ["TwinA.md", "TwinB.md"]);
    assert.ok(found.every((f) => f.line > 1));
});

test("shared-governance exempts an owner-ruled address", () => {
    const { found } = run("shared-governance", {
        sharedGovernance: ["affiliation-twina", "affiliation-twinb"],
    });
    assert.deepEqual(found, []);
});

test("reciprocal-links reports a border or route stated from one end", () => {
    const { found } = run("reciprocal-links");
    assert.deepEqual(files(found), ["eastt.md", "eastt.md", "westt.md"]);
    assert.ok(found.some((f) => /borders/.test(f.message)));
    assert.ok(found.some((f) => /routes/.test(f.message)));
});

test("cast-resolves reports a cast, location or faction that resolves to nothing", () => {
    const { found } = run("cast-resolves");
    assert.equal(found.length, 3);
    assert.ok(found.every((f) => f.line > 1));
});

test("unique-linked reports a unique item linking no place or being", () => {
    const { found } = run("unique-linked");
    assert.deepEqual(files(found), ["Lost.md"]);
});

test("district-parent reports a district without a settlement or region parent", () => {
    const { found } = run("district-parent");
    assert.deepEqual(files(found), ["Orphan.md", "Wrong.md"]);
});

test("a finding in a finished land is an error, and others stay warnings", () => {
    const warn = run("homed-being");
    assert.equal(warn.errors, 0);
    const done = run("homed-being", { finished: ["the-reach"] });
    assert.equal(done.found[0].severity, "error");
    assert.ok(done.errors > 0);
});

test("a bare parent resolves by the field's type when the shortcode is also another type", () => {
    const { found } = run("same-shortcode-two-types", {}, "unpointed-child");
    assert.deepEqual(found, []);
});

test("a fully qualified body link with spaces around the label points to its child", () => {
    assert.deepEqual(run("qualified-body-link", {}, "unpointed-child").found, []);
});

test("a link inside inline code does not point to a child", () => {
    assert.deepEqual(files(run("inline-code-link", {}, "unpointed-child").found), ["coded.md"]);
});

test("a link inside a fenced block does not point to a child", () => {
    assert.deepEqual(files(run("fenced-code-link", {}, "unpointed-child").found), ["fenced.md"]);
});

test("a unique item's links inside code do not count", () => {
    assert.deepEqual(files(run("unique-code-link", {}, "unique-linked").found), ["Code.md"]);
});

test("a scenario takes its land from its locations, so a missing cast entry is an error", () => {
    const { found } = run("cast-resolves", { finished: ["the-reach"] });
    assert.equal(found.length, 3);
    assert.ok(found.every((f) => f.severity === "error" && f.land === "the-reach"));
});
