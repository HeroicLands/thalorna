/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { applyMap, compileMap, checkMapField } from "@heroiclands/package-build/engine/text-maps";
import { renderRuns, runContext } from "@heroiclands/package-build/engine/content-scripts";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { lintNote } from "@heroiclands/package-build/engine/frontmatter-lint";
import { ENGINE_NOTE_SCHEMAS } from "@heroiclands/package-build/engine/note-schemas";
import { NOTE_SCHEMAS } from "@heroiclands/package-build/sohl/note-schemas";
import { NOTE_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";

const read = (file) => {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
};
const spelling = read("assets/content/Lore/Scripts/Semaron_Spelling.md");
const language = read("assets/content/Skills/Languages/Elavendri.md");
const map = compileMap(spelling.fm.data.map);
const write = (text) => applyMap(map, text, { font: "semaron-kuriale" }).text;
const points = (text) => [...text].map((char) => char.codePointAt(0));
const glyphs = (...codes) => String.fromCodePoint(...codes);

test("acute y has the same literal contextual signs as plain y in both cases", () => {
    for (const [plain, acute, glide, vowel] of [
        ["y", "ý", 0xf0245, 0xf0237],
        ["Y", "Ý", 0xf0215, 0xf0207],
    ]) {
        for (const next of map.vowels) {
            assert.equal(points(write(plain + next))[0], glide, plain + next);
            assert.equal(points(write(acute + next))[0], glide, acute + next);
            assert.equal(write(acute + next), write(plain + next));
        }
        for (const next of ["", "n", "N", " ", "."]) {
            assert.equal(points(write(plain + next))[0], vowel, plain + next);
            assert.equal(points(write(acute + next))[0], vowel, acute + next);
            assert.equal(write(acute + next), write(plain + next));
        }
    }
});

test("existing Semaron inputs keep their mapping and normalization behavior", () => {
    const oldMap = compileMap({
        ...spelling.fm.data.map,
        rows: spelling.fm.data.map.rows.filter(
            (row) => !["ý", "Ý"].includes(Array.isArray(row) ? row[0] : row.from),
        ),
    });
    for (const row of oldMap.rows) {
        for (const next of ["", ...oldMap.vowels, "n", " ", "."]) {
            const input = row.from + next;
            assert.equal(
                write(input),
                applyMap(oldMap, input, { font: "semaron-kuriale" }).text,
                input,
            );
        }
    }
    assert.equal(write("y\u0301a"), glyphs(0xf0237) + "\u0301" + glyphs(0xf0230));
    assert.equal(write("Y\u0301a"), glyphs(0xf0207) + "\u0301" + glyphs(0xf0230));
});

test("the original Élavendri acute-y words render through their real map and outlined font", () => {
    const expected = new Map([
        [
            "drýenalon",
            [0xf0232, 0xf023f, 0xf0245, 0xf0233, 0xf023c, 0xf0230, 0xf023a, 0xf023d, 0xf023c],
        ],
        ["rýedamon", [0xf023f, 0xf0245, 0xf0233, 0xf0232, 0xf0230, 0xf023b, 0xf023d, 0xf023c]],
    ]);
    const records = [language, spelling].map(({ fm, file }) => ({
        ...fm,
        file,
        package: "thalorna",
        system: "note",
    }));
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const context = runContext({ ...config, rootDir: process.cwd() }, records);
    const face = resolveScriptFonts(process.cwd()).faces.get("semaron-kuriale");
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0)).index;
    for (const [form, codes] of expected) {
        assert(
            language.fm.data.words.some((word) => word.form === form),
            form,
        );
        const written = write(form);
        const output = renderRuns(
            `[${form}]{.nativefont lang=elav map=semaron font=semaron-kuriale}`,
            context,
        );
        assert.deepEqual(output.errors, [], form);
        assert.deepEqual(points(written), codes, form);
        assert(output.markdown.includes(written), form);
        for (const char of written) {
            const glyph = outlines.glyph(char.codePointAt(0));
            assert(face.draws.has(char.codePointAt(0)), form);
            assert(glyph?.d && glyph.index !== box, form);
        }
    }
});

test("the authored Semaron map satisfies its schema and executable map contract", () => {
    assert.deepEqual(
        lintNote(spelling, {
            schemas: { ...ENGINE_NOTE_SCHEMAS, ...NOTE_SCHEMAS },
            vocabulary: NOTE_VOCABULARY,
            addressContext: { package: "thalorna", system: "note" },
        }),
        [],
    );
    assert.deepEqual(checkMapField(spelling), []);
});
