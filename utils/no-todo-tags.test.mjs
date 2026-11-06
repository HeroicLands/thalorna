/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * No note carries a `todo` tag or a `todo-` tag. Deferred work is an issue,
 * not a marker in a note's frontmatter.
 */

import assert from "node:assert/strict";
import test from "node:test";
import { noteFilesWhere } from "./note-index.mjs";

const TODO_TAG = /^todo(-.*)?$/i;

/**
 * Whether a note's tags hold a todo marker.
 * @param {Record<string, any> | undefined} fm
 * @returns {boolean}
 */
export function hasTodoTag(fm) {
    return Array.isArray(fm?.tags) && fm.tags.some((tag) => TODO_TAG.test(String(tag)));
}

test("the guard recognizes todo and todo- tags", () => {
    assert.equal(hasTodoTag({ tags: ["clergy", "todo"] }), true);
    assert.equal(hasTodoTag({ tags: ["todo-warrior"] }), true);
    assert.equal(hasTodoTag({ tags: ["draft", "soldiery"] }), false);
    assert.equal(hasTodoTag({}), false);
});

test("no note carries a todo tag", () => {
    assert.deepEqual(noteFilesWhere(hasTodoTag), []);
});
