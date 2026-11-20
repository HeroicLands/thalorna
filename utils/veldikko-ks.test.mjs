/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { admits } from "./decoded-readings.mjs";
import { encodingReference } from "./encoding-reference.mjs";

const K = "\u{1ED58}";
const S = "\u{1ED54}";
const BAR = "\u{1ED7C}";

for (const language of ["aele", "sina"]) {
    const { encoding } = encodingReference(language, { font: "veldikko" });

    test(`${language}: Veldikko writes ks as the signs K and S and reads them back`, () => {
        for (const source of ["dheks", "aksa", "aksi"]) {
            const native = encodeText(encoding, source);
            assert.ok(native.includes(K + S), source);
            assert.ok(admits(decodeText(encoding, native), source), source);
        }
    });

    test(`${language}: Veldikko writes kss with the barred S`, () => {
        const native = encodeText(encoding, "akssa");
        assert.ok(native.includes(K + S + BAR), "akssa");
        assert.ok(admits(decodeText(encoding, native), "akssa"));
    });

    test(`${language}: Veldikko has no sign row for x`, () => {
        assert.throws(() => encodeText(encoding, "axa"), /"x"/u);
    });
}

test("aele: Veldikko writes ksh as K and S", () => {
    const { encoding } = encodingReference("aele", { font: "veldikko" });
    const native = encodeText(encoding, "aksha");
    assert.ok(native.includes(K + S), "aksha");
    assert.ok(!native.includes(S + "\u{1ED59}"), "aksha");
    assert.ok(admits(decodeText(encoding, native), "aksha"));
});
