/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { encodingReference } from "./encoding-reference.mjs";

for (const language of ["helo", "valt"]) {
    const { encoding, codes } = encodingReference(language);
    const write = (...names) => names.map((name) => codes[name]).join("");

    test(`${language}: an acute on the second letter of ei or ou keeps its boundary`, () => {
        for (const [source, letters] of [
            ["teíkh", ["T_MIN", "E_MIN", "I_MIN", "K_MIN", "H_MIN"]],
            ["Teíkh", ["T_MAJ", "E_MIN", "I_MIN", "K_MIN", "H_MIN"]],
            ["poút", ["P_MIN", "O_MIN", "U_MIN", "T_MIN"]],
            ["Eírin", ["E_MAJ", "I_MIN", "R_MIN", "I_MIN", "N_MIN"]],
            ["Oúrin", ["O_MAJ", "U_MIN", "R_MIN", "I_MIN", "N_MIN"]],
        ]) {
            const native = encodeText(encoding, source);
            assert.equal(native, write(...letters), source);
            const decoded = decodeText(encoding, native);
            assert.equal(decoded, source, source);
            assert.equal(encodeText(encoding, decoded), native, source);
        }
    });

    test(`${language}: an acute on the first letter of ei or ou is the long letter`, () => {
        assert.equal(encodeText(encoding, "téikh"), write("T_MIN", "LONG_E_MIN", "K_MIN", "H_MIN"));
        assert.equal(encodeText(encoding, "póut"), write("P_MIN", "LONG_O_MIN", "T_MIN"));
    });
}
