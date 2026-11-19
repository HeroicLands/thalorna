/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";
import { scopedEdits } from "./aelwythi-respell.mjs";
import { CONTENT_DIR, notePath } from "./note-index.mjs";

const NOTE = notePath("skill-aelwthlng");
const raw = fs.readFileSync(NOTE, "utf8");
const { words, retired } = YAML.parse(raw.split("---")[1]).data;
const norm = (text) => text.normalize("NFC").toLowerCase();

/** Retired rows that record a respelling to the guide, as old form to new form. */
const respelled = retired
    .filter((row) => /^respelled to Pronouncing Thalorna:/.test(row.why ?? ""))
    .filter((row) => !/\s/.test(row.form) && !/^[A-Z]/.test(row.form));

// A token that carries an old stem and is not a respelling: each entry names its reason.
const EXCEPTIONS = new Map([
    ["this", "th plus is is its own word, not thi with an ending"],
    ["waist", "its own word, not wai with an ending"],
    ["seed", "its own word, not see with an ending"],
    ["wares", "ware with an ending, not war"],
]);

// Endings the note's grammar adds to a stem.
const ENDINGS = ["s", "es", "d", "ed", "ing", "en", "est", "eth", "st", "er", "ers", "ment"];

const isOldStem = (token) =>
    respelled.some(
        (row) =>
            row.form.length >= 3 &&
            (norm(token) === norm(row.form) ||
                ENDINGS.some((ending) => norm(token) === norm(row.form) + ending)),
    );

test("no live headword or variant carries the old stem of a respelled family", () => {
    const flagged = [];
    for (const word of words)
        for (const form of [word.form, ...(word.variants ?? [])])
            for (const token of form.split(/\s+/))
                if (isOldStem(token) && !EXCEPTIONS.has(norm(token)))
                    flagged.push(`${word.form}: ${token}`);
    assert.deepEqual(flagged, []);
    assert(respelled.length > 100, "the check covers every respelled family");
});

test("no old form of a respelled family stands in an Eilwìthi passage", () => {
    const files = [
        NOTE,
        ...fs
            .readdirSync(CONTENT_DIR, { recursive: true, encoding: "utf8" })
            .filter((file) => file.endsWith(".md"))
            .map((file) => path.join(CONTENT_DIR, file)),
    ];
    const found = [];
    for (const file of new Set(files)) {
        const source = fs.readFileSync(file, "utf8");
        if (
            !/lang\s*[=:]\s*"?aelw|enc\s*=\s*"?(?:doc-|thalorna-note-doc-)?aelwsemaronenc/.test(
                source,
            )
        )
            continue;
        for (const edit of scopedEdits(source, (word) => word))
            if (isOldStem(edit.form) && !EXCEPTIONS.has(norm(edit.form)))
                found.push(`${path.basename(file)}: ${edit.form}`);
    }
    assert.deepEqual(found, []);
});
