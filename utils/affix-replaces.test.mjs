/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { main, unstatedReplaces } from "./affix-replaces.mjs";

const note = (affixes) => `---\nname: X\ndata:\n  affixes:\n${affixes}\n---\nbody\n`;

test("an affix saying it replaces, with no replaces, is found with its position", () => {
    const hits = unstatedReplaces(
        note('    - form: "-os"\n      attaches: "replaces the final vowel"'),
    );
    assert.equal(hits.length, 1);
    assert.equal(hits[0].form, "-os");
    assert.equal(hits[0].line, 6);
});

test("an affix stating replaces is clean", () => {
    assert.deepEqual(
        unstatedReplaces(
            note(
                '    - form: "-os"\n      attaches: "replaces the final vowel"\n      replaces: vowel',
            ),
        ),
        [],
    );
});

test("an affix added whole, or one with no prose, is clean", () => {
    assert.deepEqual(
        unstatedReplaces(
            note('    - form: "-os"\n      attaches: added\n    - form: "-a"\n      gloss: x'),
        ),
        [],
    );
});

test("dropping and taking the place of count as replacing", () => {
    const hits = unstatedReplaces(
        note(
            '    - form: "-a"\n      attaches: "drops a final e"\n    - form: "-b"\n      attaches: "takes the place of the last letters"',
        ),
    );
    assert.equal(hits.length, 2);
});

test("a note with no affixes or no frontmatter is clean", () => {
    assert.deepEqual(unstatedReplaces("no frontmatter"), []);
    assert.deepEqual(unstatedReplaces("---\nname: X\n---\n"), []);
});

test("main reports file:line:column and exits 1 on an error", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "affix-replaces-"));
    try {
        const file = path.join(dir, "X.md");
        fs.writeFileSync(file, note('    - form: "-os"\n      attaches: "replaces a vowel"'));
        const out = [];
        const err = [];
        const status = main(["X.md"], { out: (s) => out.push(s), err: (s) => err.push(s) }, dir);
        assert.equal(status, 1);
        assert.match(err[0], /^X\.md:6:\d+: error: /u);
        assert.match(out[0], /1 error/u);
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});
