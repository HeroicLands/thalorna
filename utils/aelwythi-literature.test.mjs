/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { parseVerse, scanVerse } from "@heroiclands/package-build/engine/content-verse";
import { createRenderer } from "@heroiclands/package-build/engine/content-render";
import { runContext, scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { aelwythiEncoding } from "./aelwythi-encoding.mjs";
import { unknownWords } from "@heroiclands/package-build/engine/run-words";
import { resolveWebWikilinks } from "@heroiclands/package-build/engine/wikilinks";

const notes = [...fs.globSync("assets/content/**/*.md")].map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { yaml, body } = splitFrontmatter(raw) ?? { yaml: "", body: raw };
    return { file, raw, body, fm: YAML.parse(yaml) };
});
const works = notes.filter(
    ({ fm, body }) =>
        fm?.subType === "literature" && fm.data?.lang === "aelw" && scanVerse(body).blocks.length,
);
const language = notes.find(({ fm }) => fm?.shortcode === "aelwthlng");
const { ctx, encode, glyphProblems } = aelwythiEncoding();
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
const verseRows = (html) => [...html.matchAll(/<span class="verse-row">(.*)/g)];
const verseCells = (row) =>
    [
        ...row.matchAll(
            /<span class="verse-(native|roman)\b[^>]*>\s*<span class="verse-line">([^<]*)/g,
        ),
    ].map((m) => [m[1], visible(m[2])]);

for (const note of [...works, language]) {
    test(`${note.fm.name.full}: every Aelwythi verse has an English version and an encoded original`, () => {
        const { blocks, errors } = scanVerse(note.body);
        assert(blocks.length, `${note.file}: verse must be executable`);
        assert.deepEqual(errors, [], note.file);
        const lines = note.body.split("\n");
        const stanzas = (block) =>
            parseVerse(block.body).groups.map((group) => group.lines.map((line) => line.text));
        for (const block of blocks.filter(({ attributes }) => attributes.lang === "aelw")) {
            const { work } = block.attributes;
            assert(work, `${note.file}: an Aelwythi verse names its work`);
            assert.equal(block.attributes.enc, "aelwsemaronenc", note.file);
            const english = blocks.find(
                ({ attributes }) => attributes.work === work && attributes.lang === "en",
            );
            assert(english, `${note.file}: work=${work} has an English version`);
            const original = stanzas(block);
            assert.deepEqual(
                original.map((stanza) => stanza.length),
                stanzas(english).map((stanza) => stanza.length),
                `${note.file}: work=${work} has the English stanza shape`,
            );
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
            const rows = verseRows(renderer.render(linked, { runs: ctx }));
            const romans = original.flat();
            assert.equal(rows.length, romans.length, `${note.file}: work=${work}`);
            for (const [i, row] of rows.entries()) {
                const roman = plain(romans[i]);
                const encoded = encode(roman);
                assert.deepEqual(encoded.findings, [], note.file);
                const [[nativeKind, native], [romanKind, shown]] = verseCells(row[1]);
                assert.deepEqual([nativeKind, romanKind], ["native", "roman"], note.file);
                assert(
                    native.startsWith(encoded.text),
                    `${note.file}: script cell at row ${i + 1}`,
                );
                assert.equal(shown, roman, `${note.file}: Roman cell at row ${i + 1}`);
                assert.deepEqual(glyphProblems(native), [], note.file);
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
                assert.equal(run.enc, "default", note.file);
                const html = renderer.render(lines.slice(run.start, run.end + 1).join("\n"), {
                    runs: ctx,
                });
                assert(!/<(?:em|strong|u)\b/i.test(html), note.file);
                assert(!/[\u{f0000}-\u{ffffd}]/u.test(html), `${note.file}: prose remains Roman`);
            }
        }
    });
}
