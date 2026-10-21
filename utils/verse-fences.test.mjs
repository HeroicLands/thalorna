/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { findPoetryFences } from "./verse-fences.mjs";

const found = (text) => findPoetryFences("a.md", text);

test("a poetry fence is reported at its line and column", () => {
    assert.deepEqual(found("text\n```poetry {form=epic lang=en}\nline\n```\n"), [
        "a.md:2:4: error: a poetry fence renders as code; write the fence as verse",
    ]);
});

test("tilde and indented openers are reported", () => {
    const out = found("~~~poetry\nx\n~~~\n\n  ````  poetry\nx\n````\n");
    assert.deepEqual(
        out.map((f) => f.split(": ")[0]),
        ["a.md:1:4", "a.md:5:9"],
    );
});

test("verse fences, other fences and the word in prose pass", () => {
    assert.deepEqual(
        found("```verse {form=epic}\nx\n```\n```js\nx\n```\nA poetry reading.\n```poetryx\n```\n"),
        [],
    );
});
