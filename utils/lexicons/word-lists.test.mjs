/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { glossWords, sameMeaning } from "./word-lists.mjs";

test("a possessive 's is not a gloss word", () => {
    assert.deepEqual([...glossWords("Emperor's style")].sort(), ["emperor", "style"]);
    assert.deepEqual([...glossWords("Emperor’s style")].sort(), ["emperor", "style"]);
});

test("glosses sharing only a possessive do not mean the same", () => {
    assert.equal(sameMeaning("Emperor's style", "one's troops"), false);
});

test("glosses sharing a content word still match", () => {
    assert.equal(sameMeaning("Emperor's style", "style of the emperor"), true);
});
