/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { encodingReference } from "./encoding-reference.mjs";

const shared = [
    "kiy",
    "kuy",
    "ayiy",
    "kyiy",
    "ayuy",
    "kyuy",
    "yik",
    "yek",
    "yuk",
    "kyek",
    "kyuk",
    "yiyk",
    "yuyk",
];

for (const [language, accepted] of [
    ["aele", ["kiy", "kuy", "kaya", "keyo", "yal", "kya", "kye", "kyi", "eye"]],
    ["sina", ["kaya", "keyo", "yal", "kya", "kye", "kyi", "eye"]],
]) {
    const { encoding } = encodingReference(language, { font: "veldikko" });

    test(`${language}: Veldikko writes the consonant y before a vowel and refuses every closing y`, () => {
        for (const source of ["ay", "ey", "oy", "kay", "key", "koy", "kyn", "kayk"])
            assert.throws(() => encodeText(encoding, source), /matches "y"/u, source);
        for (const source of [...shared, ...accepted]) {
            const native = encodeText(encoding, source);
            assert.equal(encodeText(encoding, decodeText(encoding, native)), native, source);
        }
    });
}
