/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Earth lists made in memory for the guards' tests, so a test of the copying
 * rule needs no local word list.
 *
 * @module
 */

import { plain, readPage } from "./lexicon-pages.mjs";
import { normalize } from "./word-lists.mjs";

/**
 * Lists in which `list` holds `form`, glossed `gloss`.
 *
 * @param {string} form
 * @param {string} list
 * @param {string} gloss
 * @returns {{lists: Map<string, Set<string>>, glosses: Map<string, Map<string, string[]>>, morphemes: []}}
 */
export function earthHolding(form, list, gloss) {
    const n = normalize(form);
    return {
        lists: new Map([[list, new Set([n])]]),
        glosses: new Map([[list, new Map([[n, [gloss]]])]]),
        morphemes: [],
    };
}

/**
 * The gloss a lexicon page gives a word, with its links and marks off.
 *
 * @param {string} text - The page.
 * @param {string} form - The word.
 * @returns {string}
 */
export function glossOn(text, form) {
    return plain(readPage(text).words.find((w) => w.form === form)?.gloss ?? "");
}
