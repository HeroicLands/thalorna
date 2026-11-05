/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { decodeText, encodeText } from "@heroiclands/package-build/engine/encoding";
import { encodingReference } from "./encoding-reference.mjs";

for (const font of ["pirzath-hand", "pirzath-carved"]) {
    const { encoding, codes } = encodingReference("khaz", { font });
    const write = (...names) => names.map((name) => codes[name]).join("");

    test(`${font}: an acute is stress, which Pirzath leaves unwritten`, () => {
        for (const [source, letters] of [
            ["dalík", ["DALK", "A", "LADHAV", "I", "KAMV"]],
            ["dulák", ["DALK", "U", "LADHAV", "A", "KAMV"]],
        ]) {
            const native = encodeText(encoding, source);
            assert.equal(native, write(...letters), source);
            assert(!native.includes(codes.LONG), `${source} draws no length`);
            assert.equal(encodeText(encoding, decodeText(encoding, native)), native, source);
        }
    });

    test(`${font}: a doubled vowel is the held vowel, and an acute on it stays unwritten`, () => {
        const native = encodeText(encoding, "duláak");
        assert.equal(native, write("DALK", "U", "LADHAV", "A", "LONG", "KAMV"));
        assert.equal(encodeText(encoding, decodeText(encoding, native)), native);
        assert.equal(encodeText(encoding, "dulaak"), native);
    });

    test(`${font}: an acute on a pair's second letter starts a syllable`, () => {
        assert.equal(encodeText(encoding, "aí"), write("A", "I"));
        assert.equal(encodeText(encoding, "ái"), write("AI"));
    });

    test(`${font}: a split vowel pair keeps its boundary through decoding`, () => {
        for (const [source, letters] of [
            ["aá", ["A", "A"]],
            ["aí", ["A", "I"]],
            ["aú", ["A", "U"]],
            ["eí", ["E", "I"]],
            ["oí", ["O", "I"]],
            ["oú", ["O", "U"]],
        ]) {
            const native = encodeText(encoding, `d${source}k`);
            assert.equal(native, write("DALK", ...letters, "KAMV"), source);
            const decoded = decodeText(encoding, native);
            assert.equal(decoded, `d${source}k`, source);
            assert.equal(encodeText(encoding, decoded), native, source);
        }
    });
}
