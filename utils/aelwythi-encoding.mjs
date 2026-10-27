/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Read the actual encoding document and its installed font-owned glyph codes. */
import fs from "node:fs";
import YAML from "yaml";
import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import { encodingFor } from "@heroiclands/package-build/engine/encoding-lexicon";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { fontCodes } from "@heroiclands/package-build/engine/encoding-notes";
import { fontOutlines } from "@heroiclands/package-build/engine/font-outlines";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { readDocument } from "./aelwythi-note.mjs";

export function readNote(file) {
    const document = readDocument(file);
    return { file, raw: document.text, body: document.body, fm: document.data };
}

export function aelwythiEncoding() {
    const language = readNote("assets/content/Skills/Languages/Aelwythi.md");
    const spelling = readNote("assets/content/Lore/Scripts/Aelwythi_Semaron_Spelling.md");
    const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
    const records = [language, spelling].map(({ fm, file, raw }) => ({
        ...fm,
        file,
        raw,
        package: "thalorna",
        system: "note",
    }));
    const ctx = runContext({ ...config, rootDir: process.cwd() }, records);
    if (ctx.encodingFindings.length) throw new Error(JSON.stringify(ctx.encodingFindings));
    const encoding = ctx.encodings.get("aelwsemaronenc");
    if (!encoding) throw new Error("The Aelwythi encoding document did not resolve");
    const selection = encodingFor(ctx, { enc: encoding.name });
    const fonts = resolveScriptFonts(process.cwd());
    const codes = fontCodes(fonts, encoding.font);
    const face = fonts.faces.get(encoding.font);
    const outlines = fontOutlines(face.file);
    const box = outlines.glyph("c".codePointAt(0))?.index;
    const encode = (text) =>
        encodeWithLanguage(encoding, text, { font: selection.font, lexicon: selection.lexicon });
    const glyphProblems = (text) => {
        const findings = [];
        for (const char of text) {
            if (/\s/u.test(char)) continue;
            const point = char.codePointAt(0),
                glyph = outlines.glyph(point);
            if (/\p{Default_Ignorable_Code_Point}/u.test(char)) {
                if (face.draws.has(point) && (!glyph || glyph.d || glyph.advance !== 0))
                    findings.push({ point, message: "a declared control has ink or advance" });
            } else if (!face.draws.has(point) || !glyph?.d || glyph.index === box)
                findings.push({ point, message: "missing, undeclared or boxed visible glyph" });
        }
        return findings;
    };
    return {
        language,
        spelling,
        config,
        records,
        ctx,
        encoding,
        selection,
        fonts,
        codes,
        face,
        outlines,
        encode,
        glyphProblems,
    };
}
