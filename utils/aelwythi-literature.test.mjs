/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { scanVerse, verseGroups } from "@heroiclands/package-build/engine/content-verse";
import { scanFigures } from "@heroiclands/package-build/engine/content-figures";
import { createRenderer } from "@heroiclands/package-build/engine/content-render";
import { runContext, scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { compileMap, applyMap } from "@heroiclands/package-build/engine/text-maps";
import { nativeLookup } from "@heroiclands/package-build/engine/map-lexicon";
import { unknownWords } from "@heroiclands/package-build/engine/run-words";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveWebWikilinks } from "@heroiclands/package-build/engine/wikilinks";

const notes = [...fs.globSync("assets/content/**/*.md")].map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { yaml, body } = splitFrontmatter(raw) ?? { yaml: "", body: raw };
    return { file, raw, body, fm: YAML.parse(yaml) };
});
const works = notes.filter(
    ({ fm, body }) =>
        fm?.subType === "literature" &&
        fm.data?.language === "aelwthlng" &&
        scanVerse(body).blocks.length,
);
const language = notes.find(({ fm }) => fm?.shortcode === "aelwthlng");
const spelling = notes.find(({ fm }) => fm?.shortcode === "mapaelwsemaron");
const records = [language, spelling].map(({ fm, file }) => ({
    ...fm,
    file,
    package: "thalorna",
    system: "note",
}));
const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
const map = compileMap(spelling.fm.data.map);
const native = nativeLookup(ctx.lexicons.get("aelw"), map.name, "semaron-kuriale");
const face = resolveScriptFonts(process.cwd()).faces.get("semaron-kuriale");
const outlines = fontOutlines(face.file);
const box = outlines.glyph("c".codePointAt(0)).index;
const renderer = createRenderer("foundry");
const localLinks = {
    contentPackage: "thalorna",
    packages: new Set(["thalorna"]),
    contentTypes: new Set(notes.map(({ fm }) => fm?.type).filter(Boolean)),
    index: new Map(
        notes
            .filter(({ fm }) => fm?.type && fm.shortcode)
            .map(({ fm }) => [
                `thalorna-note-${fm.type}-${fm.shortcode}`,
                { ...fm, name: fm.name?.full ?? fm.name, url: `/${fm.type}-${fm.shortcode}/` },
            ]),
    ),
};
const visible = (html) =>
    html
        .replace(/<[^>]*>/g, "")
        .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
        .replaceAll("&quot;", '"')
        .replaceAll("&apos;", "'")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&amp;", "&");
const plain = (text) => text.replace(/\[([^\]]*)\]\{[^}]*\}/g, "$1");
const modernWords = (line) =>
    plain(line.replace(/\[\[[^\]\n|]+\|([^\]]*)\]\](?:\{[^}]*\})?/g, "$1"));
const verseCells = (row) => {
    const cells = [];
    let depth = 0,
        start = -1,
        level = -1;
    for (const tag of row.matchAll(/<\/?span\b[^>]*>/g)) {
        if (tag[0].startsWith("</")) {
            depth--;
            if (start >= 0 && depth < level) {
                cells.push(visible(row.slice(start, tag.index)));
                start = -1;
            }
        } else {
            depth++;
            if (/class="verse-part(?: verse-secondary)?"/.test(tag[0])) {
                start = tag.index + tag[0].length;
                level = depth;
            }
        }
    }
    return cells;
};

for (const note of [...works, language]) {
    test(`${note.fm.name.full}: every verse line has script, modern reading and roman source`, () => {
        const { blocks, errors } = scanVerse(note.body);
        assert(blocks.length, `${note.file}: verse must be executable`);
        assert.deepEqual(errors, [], note.file);
        const figures = scanFigures(note.body);
        assert.deepEqual(figures.errors, [], note.file);
        const lines = note.body.split("\n");
        for (const block of blocks) {
            const caption = figures.figures.find(
                ({ kind, bodyStart }) => kind === "poem" && bodyStart === block.start,
            );
            assert(
                caption?.caption && caption.id,
                `${note.file}: each verse has a caption and anchor`,
            );
            assert.equal(block.attributes.numstep, "5", note.file);
            assert.equal(block.attributes.cols, "2", note.file);
            const groups = verseGroups(block, lines).filter((group) => !group.stanzaBreak);
            assert(groups.length, note.file);
            for (const { parts } of groups) {
                assert.deepEqual(
                    parts.map(({ column }) => column),
                    [1, 2, 2],
                    note.file,
                );
                const [nativePart, modernPart, romanPart] = parts;
                assert.match(nativePart.text, /^\[.*\]\{\.nativefont lang=aelw\}$/, note.file);
                assert(modernPart.text.endsWith("{lang=en}"), note.file);
                assert.match(romanPart.text, /^\[.*\]\{lang=aelw\}$/, note.file);
                assert.equal(plain(nativePart.text), plain(romanPart.text), note.file);
            }
            const source = lines.slice(block.start, block.end + 1).join("\n");
            assert.deepEqual(scanRuns(source, ctx).errors, [], note.file);
            const linkErrors = [];
            const linked = resolveWebWikilinks(source, {
                ...localLinks,
                type: note.fm.type,
                errors: linkErrors,
                src: note.file,
            });
            assert.deepEqual(linkErrors, [], note.file);
            const rendered = renderer.render(linked, { runs: ctx });
            const rows = [...rendered.matchAll(/<span class="verse-row">(.*)/g)];
            assert.equal(rows.length, groups.length, note.file);
            for (const [i, row] of rows.entries()) {
                assert.equal([...row[1].matchAll(/class="verse-column"/g)].length, 2);
                assert.equal([...row[1].matchAll(/class="verse-part/g)].length, 3);
                const [, modernPart, romanPart] = groups[i].parts;
                const modern = modernWords(modernPart.text);
                const roman = plain(romanPart.text);
                const mapped = applyMap(map, roman, { font: "semaron-kuriale", native }).text;
                const cells = verseCells(row[1]);
                assert.deepEqual(
                    cells,
                    [mapped, modern, roman],
                    `${note.file}: actual script, modern and Roman cells at line ${i + 1}`,
                );
                assert.equal(
                    row[1].match(/class="verse-number">([^<]*)/)[1],
                    (i + 1) % 5 === 0 ? String(i + 1) : "",
                );
                for (const char of mapped) {
                    if (/\s/u.test(char)) continue;
                    const glyph = outlines.glyph(char.codePointAt(0));
                    assert(
                        face.draws.has(char.codePointAt(0)) && glyph?.d && glyph.index !== box,
                        `${note.file}: usable glyph for ${char}`,
                    );
                }
            }
        }
    });
    test(`${note.fm.name.full}: non-English passages are plain, and Aelwythi vocabulary is declared`, () => {
        const checked = scanRuns(note.body, ctx);
        assert.deepEqual(checked.errors, [], note.file);
        const lines = note.body.split("\n");
        for (const run of checked.runs.filter(
            ({ lang, kind }) => lang && lang !== "en" && kind !== "verse",
        )) {
            const source =
                run.kind === "span" ?
                    note.body.slice(run.start, run.end)
                :   lines.slice(run.start + 1, run.end).join("\n");
            const text = run.kind === "span" ? source.match(/^\[([\s\S]*)\]\{[^}]*\}$/)[1] : source;
            const written = plain(text);
            assert(
                !/[*_]|<\/?(?:em|strong|b|i|u)\b/i.test(written),
                `${note.file}: non-English passages use words for emphasis`,
            );
            if (run.lang === "aelw") {
                assert(
                    !/["“”«»]/u.test(written),
                    `${note.file}: Aelwythi speech uses attribution without quotation marks`,
                );
                const aelwythi = text.replace(/\[[^\]]*\]\{lang="?elav"?\}/g, "");
                assert.deepEqual(
                    unknownWords(plain(aelwythi), ctx.wordBooks.get("aelw")),
                    [],
                    `${note.file}: actual Aelwythi forms, including Roman prose`,
                );
            }
            if (run.kind === "block") {
                assert.equal(
                    run.font,
                    "serif",
                    `${note.file}: performed prose keeps its readable Roman text`,
                );
                assert.equal(run.map, undefined, note.file);
                const html = renderer.render(lines.slice(run.start, run.end + 1).join("\n"), {
                    runs: ctx,
                });
                assert(!/<(?:em|strong|u)\b/i.test(html), note.file);
                assert(!/[\u{f0000}-\u{ffffd}]/u.test(html), `${note.file}: prose remains Roman`);
            }
        }
    });
}
