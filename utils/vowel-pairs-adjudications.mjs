/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Source identities confirmed as in-world by contextual review of the initial
 * closing-y work list. These decisions establish spelling scope, not language:
 * dictionary collision checks still need a tongue where ownership is unknown.
 * Keep this small review record separate from the surface scanner. English
 * titles and unresolved names such as Graywick and Grayson are not approvals.
 */
export const reviewedNativeForms = new Set([
    "wraymon",
    "meglay",
    "meykhathi",
    "drayven",
    "meydánikos",
    "veyrael",
    "kayvonad",
    "jayra",
]);

/** Reviewed native portions in otherwise mixed explanatory affix examples. */
export const reviewedAffixExamples = new Set([
    "lushey- > lusheya",
    "kulay > kulayash, the Canoe Kin",
    "kulay > kulaywil, Canoe Place",
]);
