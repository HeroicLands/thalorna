/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { encodingReference } from "./encoding-reference.mjs";

const onset = [
    "kaya",
    "keyo",
    "yal",
    "kya",
    "kye",
    "kyi",
    "eye",
    "yik",
    "yek",
    "yuk",
    "kyek",
    "kyuk",
];
const closing = ["kiy", "kuy", "ayiy", "kyiy", "ayuy", "kyuy", "yiyk", "yuyk"];
const never = ["ay", "ey", "oy", "kay", "key", "koy", "kyn", "kayk"];

// Áelendi takes iy and uy as closing pairs; Senali declares neither, so it
// refuses every closing y.
for (const [language, accepted, refused] of [
    ["aele", [...onset, ...closing], never],
    ["sina", onset, [...never, ...closing]],
]) {
    const { encoding } = encodingReference(language, { font: "veldikko" });

    test(`${language}: Veldikko writes the consonant y before a vowel and refuses what its pairs omit`, () => {
        for (const source of refused)
            assert.throws(() => encodeText(encoding, source), /matches "y"/u, source);
        for (const source of accepted) {
            const native = encodeText(encoding, source);
            assert.equal(encodeText(encoding, decodeText(encoding, native)), native, source);
        }
    });
}
