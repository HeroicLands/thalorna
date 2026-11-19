/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Actual language encoding documents and the selected installed font's codes. */
import fs from "node:fs";
import { noteFilesWhere } from "./note-index.mjs";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import { encodingFor } from "@heroiclands/package-build/engine/encoding-lexicon";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { fontCodes } from "@heroiclands/package-build/engine/encoding-notes";

export function readEncodingNote(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const recordOf = (note) =>
    note.fm ?
        { ...note.fm, file: note.file, raw: note.raw, package: "thalorna", system: "note" }
    :   note;
const languageFiles = () =>
    noteFilesWhere(({ type, subType }) => type === "skill" && subType === "language");
let documents;
let languageNotes;
export function encodingDocuments() {
    return (documents ??= noteFilesWhere(
        ({ type, data }) => type === "doc" && data?.mappings && data?.rules,
    ).map(readEncodingNote));
}
/**
 * Compile indexed encoding and language declarations together, including family ancestors.
 * @param {object} config - Package configuration and installed-font root.
 * @param {object[]} [records] - Indexed or {fm,file,raw} records overriding source records by Address.
 * @returns {ReturnType<typeof runContext>} The published context with compiler findings intact.
 */
export function referenceContext(config, records = []) {
    languageNotes ??= languageFiles().map(readEncodingNote);
    const all = [...encodingDocuments(), ...languageNotes, ...records].map(recordOf);
    const byAddress = new Map(all.map((record) => [`${record.type}-${record.shortcode}`, record]));
    return runContext({ ...config, rootDir: config.rootDir ?? process.cwd() }, [
        ...byAddress.values(),
    ]);
}
export function languageAlias(
    note,
    config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8")),
) {
    if (typeof note === "string") return note;
    const fm = note.fm ?? note;
    const pair = Object.entries(config.languages).find(
        ([, value]) => value.note === `${fm.type}-${fm.shortcode}`,
    );
    if (!pair) throw new Error(`No configured language for ${fm.shortcode}`);
    return pair[0];
}
/**
 * Select one language/font document using the context's compiled sound inventory.
 * @param {string|object} language - Configured language key or its indexed/{fm,file,raw} note.
 * @param {object} [options] - Selection and source overrides.
 * @param {string} [options.font] - Required when the language has more than one font document.
 * @param {object[]} [options.records] - Source records overriding indexed notes by Address.
 * @param {object} [options.config] - Package configuration; defaults to package-build.config.yaml.
 * @returns {object} The document, compiled encoding, context, font codes, selection and encode function.
 * @throws {Error} If selection is ambiguous, unavailable or names an absent installed font.
 * An unavailable selection retains the compiler's located errors in error.findings.
 */
export function encodingReference(
    language,
    {
        font,
        records = [],
        config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8")),
    } = {},
) {
    const alias = languageAlias(language, config);
    const documents = encodingDocuments().filter(
        ({ fm }) => fm.data.language === alias && (!font || fm.data.font === font),
    );
    const own = documents.length === 1 ? documents[0] : undefined;
    if (!own)
        throw new Error(`Select one encoding document for ${alias}${font ? ` in ${font}` : ""}`);
    const name = `${config.contentPackage}-note-doc-${own.fm.shortcode}`;
    const ctx = referenceContext(config, [
        ...records,
        ...(typeof language === "object" ? [language] : []),
    ]);
    const selection = encodingFor(ctx, { enc: name, lang: alias });
    if (!selection)
        throw Object.assign(new Error(`Cannot select ${name} for ${alias}`), {
            findings: ctx.encodingFindings,
        });
    const { encoding } = selection;
    const fonts = ctx.fonts;
    const codes = fontCodes(fonts, encoding.font);
    const face = fonts.faces.get(encoding.font);
    if (!face) throw new Error(`Missing installed face ${encoding.font}`);
    return {
        language: alias,
        spelling: own,
        encoding,
        ctx,
        face,
        codes,
        fonts,
        selection,
        encode: (text) =>
            encodeWithLanguage(encoding, text, { font: face.slug, lexicon: selection.lexicon }),
    };
}
