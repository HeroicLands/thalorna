/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import YAML from "yaml";
import { decodeText } from "@heroiclands/package-build/engine/encoding";
import { notePath } from "./note-index.mjs";
import { encodingDocuments, encodingReference, readEncodingNote } from "./encoding-reference.mjs";

function exactFixture() {
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const source = encodingDocuments().find(({ fm }) => fm.shortcode === "vylsemaronenc");
    const encoding = structuredClone(source);
    encoding.fm.data = {
        language: source.fm.data.language,
        font: source.fm.data.font,
        mappings: { a: source.fm.data.mappings.a, e: source.fm.data.mappings.e },
        rules: { normalization: "NFC", matching: "longest-first", roundTrip: "exact" },
    };
    const language = readEncodingNote(notePath(config.languages.vyl.note));
    language.fm.data = {
        roman: "ae",
        sounds: { letters: ["a", "e"] },
        words: [{ form: "a", class: "n" }],
    };
    for (const note of [encoding, language]) note.raw = `---\n${YAML.stringify(note.fm)}---\n`;
    return { config, encoding, language };
}

test("exact reference uses the context's language inventory and compiled encoding", () => {
    const { config, encoding, language } = exactFixture();
    const reference = encodingReference("vyl", { config, records: [encoding, language] });
    assert.equal(reference.encoding.roundTrip, "exact");
    assert.equal(reference.encoding, reference.selection.encoding);
    assert.equal(reference.encoding, reference.ctx.encodings.get(reference.encoding.name));
    assert.deepEqual(reference.ctx.encodingDefinitions.get(reference.encoding.name).sounds, [
        "a",
        "e",
    ]);
    const result = reference.encode("a");
    assert.deepEqual(result.findings, []);
    assert.equal(decodeText(reference.encoding, result.text, { font: reference.face.slug }), "a");
});

test("missing exact inventory preserves the compiler findings without a compatibility fallback", () => {
    const { config, encoding, language } = exactFixture();
    delete language.fm.data.sounds;
    language.raw = `---\n${YAML.stringify(language.fm)}---\n`;
    assert.throws(
        () => encodingReference("vyl", { config, records: [encoding, language] }),
        (error) =>
            error.findings?.some((finding) =>
                finding.message.includes("needs data.sounds.letters"),
            ),
    );
});

test("a language with two font varieties still requires an explicit selection", () => {
    assert.throws(() => encodingReference("khaz"), /Select one encoding document/);
    for (const font of ["pirzath-carved", "pirzath-hand"]) {
        const reference = encodingReference("khaz", { font });
        assert.equal(reference.encoding.font, font);
        assert.equal(reference.encoding, reference.selection.encoding);
    }
});
