/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The outline guard: each rule catches the fault it names on a note built to
 * carry exactly that fault, and the registry covers the kinds the plan
 * profiles.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";
import { check, landsOf, loadRegistry, selectKind, treeIndex } from "./outline-guard.mjs";
import { noteIndex } from "./note-index.mjs";

const FIXTURES = JSON.parse(
    fs.readFileSync(new URL("./fixtures/outline-notes.json", import.meta.url), "utf8"),
).notes;

/** Writes the fixture notes into a fresh content tree and returns its root. */
function tree() {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "outline-"));
    const dir = path.join(root, "assets/content");
    fs.mkdirSync(dir, { recursive: true });
    for (const [file, note] of Object.entries(FIXTURES)) {
        const filler = Array.from({ length: note.words }, () => "word").join(" ");
        const fm = YAML.stringify(note.fm);
        fs.writeFileSync(path.join(dir, file), `---\n${fm}---\n\n${note.body}\n\n${filler}\n`);
    }
    return root;
}

const base = loadRegistry();
const LANDS = { "the-reach": ["reach"] };
const registry = { ...base, lands: LANDS, finished: [] };
const finishedRegistry = { ...registry, finished: ["the-reach"] };
const forFile = (findings, file, rule) =>
    findings.filter((f) => f.file.endsWith(file) && f.rule === rule);
const errorsIn = (file) =>
    forFile(
        check({ root: tree(), registry: finishedRegistry }).findings,
        file,
        "missing-required",
    ).filter((f) => f.severity === "error");

test("a place missing a required present reports a warning", () => {
    const { findings } = check({ root: tree(), registry });
    const found = forFile(findings, "Missing.md", "missing-required");
    assert.equal(found.length, 1);
    assert.match(found[0].message, /present/);
    assert.equal(found[0].severity, "warning");
});

test("the same note in a finished land is an error", () => {
    const { findings, errors } = check({ root: tree(), registry: finishedRegistry });
    const found = forFile(findings, "Missing.md", "missing-required");
    assert.equal(found[0].severity, "error");
    assert.ok(errors > 0);
});

test("a note under a sub-region resolves to its land's id", () => {
    const { findings } = check({ root: tree(), registry });
    const found = forFile(findings, "Under.md", "missing-required");
    assert.equal(found[0].land, "the-reach");
    assert.equal(errorsIn("Under.md").length, 1);
});

test("a parent written as a full address reaches the land", () => {
    assert.equal(errorsIn("Addr.md").length, 1);
});

test("a fully qualified parent reaches the land", () => {
    assert.equal(errorsIn("QualParent.md").length, 1);
});

test("a fully qualified home reaches the land", () => {
    const { findings } = check({ root: tree(), registry: finishedRegistry });
    const found = findings.filter((f) => f.file.endsWith("QualifiedResidence.md"));
    assert.equal(found.length, 2);
    assert.ok(found.every((f) => f.severity === "error"));
});

test("a tribal polity and a temple site each need a history", () => {
    const { findings } = check({ root: tree(), registry });
    for (const file of ["Tribe.md", "TempleSite.md"]) {
        const found = forFile(findings, file, "missing-required");
        assert.equal(found.length, 1, file);
        assert.match(found[0].message, /history/);
    }
    assert.deepEqual(
        findings.filter((f) => f.file.endsWith("TempleHall.md")),
        [],
    );
});

test("a second parent reaches the land", () => {
    assert.equal(errorsIn("Two.md").length, 1);
});

test("a being's land comes from its homes", () => {
    const { findings } = check({ root: tree(), registry: finishedRegistry });
    const found = findings.filter((f) => f.file.endsWith("Home.md"));
    assert.equal(found.length, 2);
    assert.ok(found.every((f) => f.severity === "error" && f.land === "the-reach"));
});

test("a row-depth stub with no present passes", () => {
    const { findings } = check({ root: tree(), registry });
    assert.deepEqual(
        findings.filter((f) => f.file.endsWith("Stub.md")),
        [],
    );
});

test("a slot out of registry order is reported at its heading", () => {
    const { findings } = check({ root: tree(), registry });
    const found = forFile(findings, "Order.md", "out-of-order");
    assert.ok(found.length >= 1);
    assert.ok(found.every((f) => f.line > 1 && f.column >= 1));
});

test("a heading after See Also is reported, except the truth section", () => {
    const { findings } = check({ root: tree(), registry });
    assert.equal(forFile(findings, "Last.md", "see-also-not-last").length, 1);
    assert.equal(forFile(findings, "Secret.md", "see-also-not-last").length, 0);
    assert.deepEqual(
        findings.filter((f) => f.file.endsWith("Secret.md")),
        [],
    );
});

test("an unanchored See Also heading the registry declares is checked", () => {
    const { findings } = check({ root: tree(), registry });
    const found = forFile(findings, "Unanchored.md", "see-also-not-last");
    assert.equal(found.length, 1);
    assert.equal(found[0].severity, "error");
    assert.equal(forFile(findings, "UnanchoredLast.md", "see-also-not-last").length, 0);
});

test("headings nested in a closing section follow See Also, and a stray one after it is reported", () => {
    const { findings } = check({ root: tree(), registry });
    assert.deepEqual(
        findings.filter((f) => f.file.endsWith("ClosingNested.md")),
        [],
    );
    const stray = forFile(findings, "ClosingStray.md", "see-also-not-last");
    assert.equal(stray.length, 1);
    assert.equal(stray[0].severity, "error");
});

test("a level-three heading after See Also is reported with or without the anchor", () => {
    const { findings } = check({ root: tree(), registry });
    for (const file of ["DeepWithAnchor.md", "DeepNoAnchor.md", "DeepPlain.md"]) {
        const found = forFile(findings, file, "see-also-not-last");
        assert.equal(found.length, 1, file);
        assert.equal(found[0].severity, "error", file);
    }
});

test("a slot nested under See Also is out of place and does not fill the slot", () => {
    const { findings } = check({ root: tree(), registry });
    assert.equal(forFile(findings, "Nested.md", "see-also-not-last").length, 1);
    assert.equal(forFile(findings, "Nested.md", "missing-required").length, 1);
});

test("a heading inside a longer fence holding a shorter fence is not a heading", () => {
    const { findings } = check({ root: tree(), registry });
    assert.equal(forFile(findings, "Fence.md", "missing-required").length, 1);
});

test("an appearance and dossier below level one are misplaced and do not count", () => {
    const { findings } = check({ root: tree(), registry });
    assert.equal(forFile(findings, "Level.md", "misplaced-level").length, 2);
    assert.equal(forFile(findings, "Level.md", "missing-required").length, 2);
});

test("a kind with no registry entry is ignored", () => {
    const { findings } = check({ root: tree(), registry });
    assert.deepEqual(
        findings.filter((f) => f.file.endsWith("Skill.md")),
        [],
    );
});

test("a lore note carrying hooks is reported and history is allowed", () => {
    const { findings } = check({ root: tree(), registry });
    const found = forFile(findings, "Lore.md", "forbidden-slot");
    assert.equal(found.length, 1);
    assert.match(found[0].message, /hooks/);
});

test("findings are grouped by land", () => {
    const { byLand } = check({ root: tree(), registry });
    assert.ok(byLand.get("the-reach") > 0);
});

test("every land names regions that exist in the tree", () => {
    const index = noteIndex(".");
    const codes = new Set([...index.frontmatter.values()].map((fm) => fm.shortcode));
    for (const [land, regions] of Object.entries(base.lands)) {
        for (const code of regions) assert.ok(codes.has(code), `${land}: ${code} is no note`);
    }
});

test("the registry gives every kind it names a unique id and ordered slots", () => {
    const ids = registry.kinds.map((k) => k.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const kind of registry.kinds) {
        const slots = kind.slots.map((s) => s.id);
        assert.equal(new Set(slots).size, slots.length, kind.id);
        for (const s of kind.slots)
            assert.ok(
                ["required", "warranted", "optional"].includes(s.status),
                `${kind.id}/${s.id}`,
            );
    }
    assert.equal(typeof registry.rowMaxWords, "number");
});

/** The profile numbers B.4 adopts. */
const ADOPTED = Array.from({ length: 27 }, (_, i) => i + 1);

/** A note the entry's own selector picks, built from the selector alone. */
function sample(match) {
    return {
        type: match.type ?? "miscgear",
        subType: match.subType === undefined ? "other" : [match.subType].flat()[0],
        tags: match.anyTag ? [match.anyTag[0]] : [],
        data: match.data ?? {},
    };
}

test("every adopted profile has a registry entry", () => {
    const covered = new Set(base.kinds.flatMap((k) => [k.profile ?? []].flat()));
    assert.deepEqual(
        ADOPTED.filter((n) => !covered.has(n)),
        [],
    );
});

test("every entry with a profile is reached by a note its selector describes", () => {
    for (const kind of base.kinds) {
        assert.equal(selectKind(base, sample(kind.match)).id, kind.id, `${kind.id} is shadowed`);
    }
});

test("a capital city takes the city outline, and only a wall takes the seat outline", () => {
    const capital = { type: "place", subType: "settlement", tags: ["capital", "city"] };
    assert.equal(selectKind(base, capital).id, "city");
    assert.equal(selectKind(base, { ...capital, tags: ["fortified", "city"] }).id, "seat");
});

test("place and affiliation kinds in the tree with no entry of their own are listed", (t) => {
    const index = noteIndex(".");
    const bare = new Map();
    for (const fm of index.frontmatter.values()) {
        if (fm.type !== "place" && fm.type !== "affiliation") continue;
        const kind = selectKind(registry, fm);
        if (!kind) bare.set(`${fm.type}/${fm.subType}`, "no entry");
        else if (!kind.profile && kind.slots.length)
            bare.set(`${fm.type}/${fm.subType}`, `falls to ${kind.id}`);
    }
    t.diagnostic([...bare].map(([k, v]) => `${k}: ${v}`).join("; ") || "every kind has a profile");
    for (const [k, v] of bare) assert.notEqual(v, "no entry", `${k} has no registry entry`);
});

// The Vilérian Empire and the Taruzelian Confederation declare their capitals
// as seats while keeping their independent political parents empty.
test("an affiliation's place seat locates it and its political children", () => {
    const root = tree();
    const notes = [
        { type: "place", shortcode: "capital", data: { parents: ["reach"] } },
        { type: "affiliation", shortcode: "capital", data: { parents: [] } },
        { type: "affiliation", shortcode: "independent", data: { parents: [], seat: "capital" } },
        { type: "affiliation", shortcode: "child", data: { parents: ["independent"] } },
        {
            type: "affiliation",
            shortcode: "loop",
            data: { parents: ["loop"], seat: "place-capital" },
        },
    ];
    for (const note of notes)
        fs.writeFileSync(
            path.join(root, "assets/content", `${note.type}-${note.shortcode}.md`),
            `---\n${YAML.stringify(note)}---\n`,
        );
    const index = treeIndex(root);
    for (const note of notes.filter((note) =>
        ["independent", "child", "loop"].includes(note.shortcode),
    ))
        assert.deepEqual(landsOf(index, note, LANDS), ["the-reach"], note.shortcode);
});

test("an affiliation and its place seat may share a shortcode", () => {
    const root = tree();
    const notes = [
        { type: "place", shortcode: "capital", data: { parents: ["reach"] } },
        { type: "affiliation", shortcode: "capital", data: { parents: [], seat: "capital" } },
    ];
    for (const note of notes)
        fs.writeFileSync(
            path.join(root, "assets/content", `${note.type}-${note.shortcode}.md`),
            `---\n${YAML.stringify(note)}---\n`,
        );
    assert.deepEqual(landsOf(treeIndex(root), notes[1], LANDS), ["the-reach"]);
});

test("an affiliation sharing a land root's shortcode is not that place", () => {
    const root = tree();
    const note = { type: "affiliation", shortcode: "reach", data: { parents: [], seat: null } };
    fs.writeFileSync(
        path.join(root, "assets/content", "affiliation-reach.md"),
        `---\n${YAML.stringify(note)}---\n`,
    );
    assert.deepEqual(landsOf(treeIndex(root), note, LANDS), []);
});

/** A content tree of one place and one scenario, the place's See Also given. */
function backlinkTree(seeAlso, locations = ["spot"]) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "backlink-"));
    const dir = path.join(root, "assets/content");
    fs.mkdirSync(dir, { recursive: true });
    const write = (file, fm, body) =>
        fs.writeFileSync(path.join(dir, file), `---\n${YAML.stringify(fm)}---\n\n${body}\n`);
    write("Spot.md", { shortcode: "spot", type: "place", data: { parents: [] } }, seeAlso);
    write("Tale.md", { shortcode: "tale", type: "scenario", data: { locations } }, "A scenario.");
    return root;
}

const backlinks = (root, extra = {}) =>
    check({ root, registry: { ...registry, kinds: [], ...extra } }).findings.filter(
        (f) => f.rule === "scenario-backlink",
    );

test("a scenario's listed place that does not link back is an error at its See Also", () => {
    const found = backlinks(
        backlinkTree("A spot.\n\n## See Also {#see-also}\n\n- [[place-spot|Spot]]"),
    );
    assert.equal(found.length, 1);
    assert.equal(found[0].severity, "error");
    assert.equal(found[0].line, 10);
    assert.match(found[0].message, /scenario-tale/);
});

test("a listed place with no See Also is reported without a line", () => {
    const found = backlinks(backlinkTree("A spot."));
    assert.equal(found.length, 1);
    assert.equal(found[0].line, undefined);
});

test("a listed place that links the scenario by address passes", () => {
    const see =
        "A spot.\n\n## See Also {#see-also}\n\n[[scenario-tale|The Tale]]\n: a scenario set here";
    assert.deepEqual(backlinks(backlinkTree(see)), []);
    const bare = "A spot.\n\n## See Also\n\n- [[scenario-tale|The Tale]]";
    assert.deepEqual(backlinks(backlinkTree(bare)), []);
});

test("a link outside the See Also section does not count", () => {
    const body =
        "A spot, with [[scenario-tale|The Tale]].\n\n## See Also {#see-also}\n\n- [[place-spot|Spot]]";
    assert.equal(backlinks(backlinkTree(body)).length, 1);
});

test("a pair on the deferred list is skipped", () => {
    const root = backlinkTree("A spot.");
    assert.equal(backlinks(root, { deferredBacklinks: ["tale spot"] }).length, 0);
});

test("the registry's deferred pairs name scenarios and places in the tree", () => {
    const index = treeIndex(".");
    for (const pair of loadRegistry().deferredBacklinks ?? []) {
        const [scenario, place] = pair.split(" ");
        assert.ok(index.byAddress.has(`scenario-${scenario}`), pair);
        assert.ok(index.byAddress.has(`place-${place}`), pair);
    }
});

test("a scenario link in inline code or a fenced block does not count", () => {
    const inline = "A spot.\n\n## See Also {#see-also}\n\n- `[[scenario-tale|The Tale]]`";
    assert.equal(backlinks(backlinkTree(inline)).length, 1);
    const fenced = "A spot.\n\n## See Also {#see-also}\n\n```\n[[scenario-tale|The Tale]]\n```\n";
    assert.equal(backlinks(backlinkTree(fenced)).length, 1);
});

test("an unlabelled scenario link does not count", () => {
    const body = "A spot.\n\n## See Also {#see-also}\n\n- [[scenario-tale]]";
    assert.equal(backlinks(backlinkTree(body)).length, 1);
});

test("a labelled scenario link with an anchor-free target counts", () => {
    const body = "A spot.\n\n## See Also {#see-also}\n\n- [[scenario-tale|The Tale]]";
    assert.deepEqual(backlinks(backlinkTree(body)), []);
});
