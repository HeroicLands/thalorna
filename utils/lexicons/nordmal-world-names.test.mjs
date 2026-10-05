/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { checkConcordance, judge, lexiconFrom } from "./nordmal-lexicon.mjs";

const language = fs.readFileSync("assets/content/Skills/Languages/Nordmal.md", "utf8");
const rule = lexiconFrom(language);

function entry(name, subType) {
    return { type: "place", subType, newName: name };
}

test("world concordance entries use published compounds and reject unknown elements", () => {
    assert.deepEqual(judge("Thursguard", "compound", rule), []);
    assert(judge("Thursguard", "place", rule).length > 0);
    const tally = new Map();
    assert.deepEqual(
        checkConcordance({ entries: [entry("Thursguard", "world")] }, rule, tally),
        [],
    );
    const findings = checkConcordance(
        { entries: [entry("Unknownthursguard", "world")] },
        rule,
        tally,
    );
    assert.equal(findings.length, 1);
    assert.match(findings[0], /compound rule rejects it/);
    assert.equal(tally.get("compound"), 1);
});

test("settlement concordance entries retain their place generics", () => {
    assert.deepEqual(
        checkConcordance({ entries: [entry("Nalthmark", "settlement")] }, rule, new Map()),
        [],
    );
    const findings = checkConcordance(
        { entries: [entry("Thursguard", "settlement")] },
        rule,
        new Map(),
    );
    assert.equal(findings.length, 1);
    assert.match(findings[0], /place rule rejects it/);
});

test("world note frontmatter selects compounds while earthly settlements retain their class", () => {
    const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "thalorna-world-name-"));
    try {
        const languagePath = path.join(fixture, "assets/content/Skills/Languages/Nordmal.md");
        fs.mkdirSync(path.dirname(languagePath), { recursive: true });
        fs.writeFileSync(languagePath, language);
        const dir = path.join(fixture, "assets/content/Regions/Ankaris/Nordlands");
        fs.mkdirSync(dir, { recursive: true });
        for (const [name, subType] of [
            ["Thursguard", "world"],
            ["Unknownthursguard", "world"],
            ["Nalthmark", "settlement"],
        ]) {
            fs.writeFileSync(
                path.join(dir, `${name}.md`),
                `---\nname: {full: ${name}, aliases: []}\ntype: place\nsubType: ${subType}\n---\n`,
            );
        }
        const moduleUrl = pathToFileURL(path.resolve("utils/lexicons/nordmal-lexicon.mjs")).href;
        const script = `import fs from 'node:fs'; import {corpus, lexiconFrom, judge} from ${JSON.stringify(moduleUrl)};
            const rule = lexiconFrom(fs.readFileSync('assets/content/Skills/Languages/Nordmal.md', 'utf8'));
            console.log(JSON.stringify(corpus(rule).names.filter(row => !row.listed).map(row => ({name: row.name, kind: row.kind, broken: judge(row.name, row.kind, rule)}))));`;
        const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
            cwd: fixture,
            encoding: "utf8",
        });
        assert.equal(result.status, 0, result.stderr);
        const names = JSON.parse(result.stdout);
        assert.deepEqual(
            names.find((row) => row.name === "Thursguard"),
            { name: "Thursguard", kind: "compound", broken: [] },
        );
        const invalid = names.find((row) => row.name === "Unknownthursguard");
        assert.equal(invalid.kind, "compound");
        assert(invalid.broken.length > 0);
        assert.deepEqual(
            names.find((row) => row.name === "Nalthmark"),
            { name: "Nalthmark", kind: "place", broken: [] },
        );
    } finally {
        fs.rmSync(fixture, { recursive: true, force: true });
    }
});
