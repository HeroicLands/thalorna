/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { encodingReference } from "./encoding-reference.mjs";

const { encoding } = encodingReference("aele", { font: "veldikko" });

test("Áelendi Veldikko writes y only before a vowel or after i and u", () => {
    for (const source of ["ay", "ey", "oy", "kay", "key", "koy", "kyn", "kayk"])
        assert.throws(() => encodeText(encoding, source), /matches "y"/u, source);
    for (const source of ["kiy", "kuy", "kaya", "keyo", "yal"]) {
        const native = encodeText(encoding, source);
        assert.equal(encodeText(encoding, decodeText(encoding, native)), native, source);
    }
});
