/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { referenceContext } from "./encoding-reference.mjs";
import { scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { noteFilesWhere, notePath } from "./note-index.mjs";

const read = (file) => YAML.parse(fs.readFileSync(file, "utf8").split("---")[1]);
const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
const notes = noteFilesWhere(({ type, subType }) => type === "skill" && subType === "language").map(
    read,
);
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

test("Vylari writes its catch with the guide's apostrophe", () => {
    const roman = byAddress.get(config.languages.vyl.note).data.roman;
    assert.deepEqual(
        Array.from(roman).filter((char) => !/[\p{L}\p{M}\p{N}]/u.test(char)),
        ["'"],
    );
    for (const mark of '’‘"“”«»`,;:—–?!') assert(!roman.includes(mark), mark);
    const records = [...notes, read(notePath("doc-elavsemaronenc"))].map((note) => ({
        ...note,
        package: "thalorna",
        system: "note",
    }));
    const ctx = {
        ...referenceContext({ ...config, rootDir: process.cwd() }, records),
        wordBooks: new Map(),
    };
    for (const attributes of ["lang=vyl", "enc=vylsemaronenc lang=vyl"]) {
        assert.deepEqual(scanRuns(`[K'aralzon a'.]{${attributes}}`, ctx).errors, [], attributes);
        assert.deepEqual(scanRuns(`[K'aralzon, a'.]{${attributes}}`, ctx).errors, [], attributes);
    }
    for (const mark of [";", ":", "’", "“", "”"]) {
        for (const attributes of ["lang=vyl", "enc=vylsemaronenc lang=vyl"]) {
            const errors = scanRuns(`[K'aralzon${mark} a'.]{${attributes}}`, ctx).errors;
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
