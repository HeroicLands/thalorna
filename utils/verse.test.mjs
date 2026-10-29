/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { findVerseFences } from "./verse.mjs";

const found = (text) => findVerseFences("a.md", text);

test("a poetry or verse fence is reported at its line and column", () => {
    assert.deepEqual(found("text\n```poetry {form=epic lang=en}\nline\n```\n"), [
        "a.md:2:4: error: a poetry fence renders as code; write a ::: {.verse} div",
    ]);
    assert.deepEqual(found("```verse {form=epic}\nx\n```\n"), [
        "a.md:1:4: error: a verse fence renders as code; write a ::: {.verse} div",
    ]);
});

test("tilde and indented openers are reported", () => {
    const out = found("~~~poetry\nx\n~~~\n\n  ````  verse\nx\n````\n");
    assert.deepEqual(
        out.map((f) => f.split(": ")[0]),
        ["a.md:1:4", "a.md:5:9"],
    );
});

test("verse divs, other fences and the words in prose pass", () => {
    assert.deepEqual(
        found(
            "::: {.verse form=epic}\nx\n:::\n:::verse {form=epic}\nx\n:::\n```js\nx\n```\nA poetry reading.\n```poetryx\n```\n```versex\n```\n",
        ),
        [],
    );
});
