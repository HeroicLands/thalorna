/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Actual language encoding documents and the selected installed font's codes. */
import fs from "node:fs";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import { parseAddress, isAddressTuple } from "@heroiclands/package-build/engine/address";
import { compileEncoding } from "@heroiclands/package-build/engine/encoding";
import { encodingFor } from "@heroiclands/package-build/engine/encoding-lexicon";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { fontCodes } from "@heroiclands/package-build/engine/encoding-notes";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";

export function readEncodingNote(file) {
    const raw = fs.readFileSync(file, "utf8");
    return { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) };
}
const recordOf = (note) =>
    note.fm ?
        { ...note.fm, file: note.file, raw: note.raw, package: "thalorna", system: "note" }
    :   note;
let documents;
let languageNotes;
export function encodingDocuments() {
    return (documents ??= fs
        .globSync("assets/content/Lore/Scripts/*.md")
        .map(readEncodingNote)
        .filter(({ fm }) => fm.type === "doc" && fm.data?.mappings && fm.data?.rules));
}
export function referenceContext(config, records = []) {
    const all = [...encodingDocuments(), ...records].map(recordOf);
    const byAddress = new Map(all.map((record) => [`${record.type}-${record.shortcode}`, record]));
    languageNotes ??= fs.globSync("assets/content/Skills/Languages/*.md").map(readEncodingNote);
    const available = new Map(
        languageNotes.map((note) => [`${note.fm.type}-${note.fm.shortcode}`, recordOf(note)]),
    );
    for (const record of byAddress.values()) {
        const family = record.data?.family;
        const parentAddress = parseAddress(
            typeof family?.address === "string" ? family.address : family,
            { package: config.contentPackage, system: "note", types: new Set(["skill"]) },
        );
        if (!isAddressTuple(parentAddress) || parentAddress.package !== config.contentPackage)
            continue;
        const parent = `${parentAddress.type}-${parentAddress.shortcode}`;
        if (!byAddress.has(parent) && available.has(parent))
            byAddress.set(parent, available.get(parent));
    }
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
    const fonts = resolveScriptFonts(process.cwd());
    const codes = fontCodes(fonts, own.fm.data.font);
    const { packFolder: _packFolder, ...data } = own.fm.data;
    const encoding = compileEncoding(data, {
        codes,
        name: `thalorna-note-doc-${own.fm.shortcode}`,
    });
    languageNotes ??= fs.globSync("assets/content/Skills/Languages/*.md").map(readEncodingNote);
    const ownLanguage = languageNotes.find(
        (note) => `${note.fm.type}-${note.fm.shortcode}` === config.languages[alias]?.note,
    );
    const ctx = referenceContext(config, [
        ...(ownLanguage ? [ownLanguage] : []),
        ...records,
        ...(typeof language === "object" ? [language] : []),
    ]);
    const selection = encodingFor(ctx, { enc: encoding.name, lang: alias });
    if (!selection) throw new Error(`Cannot select ${encoding.name} for ${alias}`);
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
