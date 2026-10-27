/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { referenceContext } from "./encoding-reference.mjs";
import { scanRuns } from "@heroiclands/package-build/engine/content-scripts";

const read = (file) => YAML.parse(fs.readFileSync(file, "utf8").split("---")[1]);
const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
const notes = fs
    .readdirSync("assets/content/Skills/Languages")
    .filter((file) => file.endsWith(".md"))
    .map((file) => read(`assets/content/Skills/Languages/${file}`));
const byAddress = new Map(notes.map((note) => [`${note.type}-${note.shortcode}`, note]));

test("each configured language and the drum register own an explicit canonical repertoire", () => {
    for (const [alias, { note: address }] of Object.entries(config.languages)) {
        if (address === undefined) {
            assert.equal(alias, "zxx", "only literal specimens lack a language note");
            continue;
        }
        assert(byAddress.has(address), `configured language note ${address}`);
    }
    for (const note of notes) {
        const roman = note.data.roman;
        assert.equal(typeof roman, "string", note.name.full);
        assert.equal(roman.normalize("NFC"), roman, note.name.full);
        assert.equal(new Set(roman).size, Array.from(roman).length, note.name.full);
    }
    assert.equal(byAddress.get("skill-grukarlng").data.roman, "");
    assert.equal(byAddress.get("skill-nyalbdrm").data.roman, "");
});

test("Vylari adds its grave-vowel catch to shared punctuation", () => {
    const roman = byAddress.get(config.languages.vyl.note).data.roman;
    assert.deepEqual(
        Array.from(roman).filter((char) => !/[\p{L}\p{M}\p{N}]/u.test(char)),
        [],
    );
    assert(roman.includes("à") && roman.includes("À"));
    for (const mark of "'’‘\"“”«»`,;:—–?!") assert(!roman.includes(mark), mark);
    const records = [...notes, read("assets/content/Lore/Scripts/Semaron_Spelling.md")].map(
        (note) => ({ ...note, package: "thalorna", system: "note" }),
    );
    const ctx = {
        ...referenceContext({ ...config, rootDir: process.cwd() }, records),
        wordBooks: new Map(),
    };
    assert.deepEqual(scanRuns("[Kàralzon à.]{lang=vyl}", ctx).errors, []);
    assert.deepEqual(scanRuns("[Kàralzon, à.]{lang=vyl}", ctx).errors, []);
    for (const mark of [";", ":", "'", "’", "“", "”"]) {
        for (const attributes of ["lang=vyl", "enc=vylsemaronenc lang=vyl"]) {
            const errors = scanRuns(`[Kàralzon${mark} à.]{${attributes}}`, ctx).errors;
            assert(
                errors.some((finding) =>
                    /data.roman|not standard Roman punctuation|quotation|not admitted|not a Roman|not in/.test(
                        finding.message,
                    ),
                ),
                `${attributes}: ${mark}`,
            );
        }
    }
});
