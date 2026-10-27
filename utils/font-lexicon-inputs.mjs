/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Language-owned input for the independent font shaping guards. */
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import { lexiconEntries } from "@heroiclands/package-build/engine/encoding-lexicon";
import { encodingReference } from "./encoding-reference.mjs";

export const TARGETS = [
    { model: "pirzath", font: "pirzath-carved", languages: ["khaz"] },
    { model: "pirzath-hand", font: "pirzath-hand", languages: ["khaz"] },
    {
        model: "thuravark-carved",
        font: "thuravark-carved",
        languages: ["nord"],
        names: true,
        affixes: true,
        elements: true,
    },
    { model: "qalezu-hand", font: "qalezu-hand", languages: ["khel"] },
    { model: "semaron-kuriale", font: "semaron-kuriale", languages: ["vyl"] },
    {
        model: "helonika",
        font: "helonika-book",
        languages: ["helo", "valt", "biza", "beth"],
        names: true,
        affixes: true,
    },
    { model: "vedyakshara", font: "vedyakshara-classical", languages: ["vedy"] },
    { model: "veldikko", font: "veldikko", languages: ["sina", "aele"], names: true },
];
const TONGUES = { helo: "helonic", valt: "valtari", biza: "byzarian", beth: "bethuan" };

/** Collect name values, excluding the name-pattern instruction and the English lists under `en`. */
export function nameForms(data, language) {
    const out = [];
    const walk = (value) => {
        if (typeof value === "string") out.push(value);
        else if (Array.isArray(value)) value.forEach(walk);
        else if (value && typeof value === "object")
            for (const [key, item] of Object.entries(value))
                if (key !== "pattern" && key !== "metadata" && key !== "en") walk(item);
    };
    walk(data.names);
    for (const row of data.register ?? [])
        if (
            row.tongue !== "translation" &&
            (!TONGUES[language] || row.tongue === TONGUES[language])
        )
            if (typeof row.name === "string") out.push(row.name);
    return out;
}

/** Authored affix spellings; a zero affix has no characters to shape. */
export function affixForms(data) {
    const forms = [];
    for (const affix of data.affixes ?? []) {
        if (affix.zero === true) continue;
        if (typeof affix.form !== "string" || !affix.form)
            throw new Error("A nonzero font guard affix must have a nonempty form");
        forms.push(affix.form);
    }
    return forms;
}

/** Encode every collected form through the current public document/lexicon API. */
export function lexiconInputs(target, reference) {
    const { language, ctx, encoding, face } = reference;
    const listed = lexiconEntries(ctx, { lang: language, enc: encoding.name, derived: true });
    if ("problem" in listed) throw new Error(listed.problem);
    const data = ctx.lexicons.get(language).data;
    const forms = listed.entries.map((row) => row.form);
    // Variants are authored spellings too, independently of the citation list.
    for (const word of data.words ?? [])
        for (const variant of word.variants ?? [])
            forms.push(typeof variant === "string" ? variant : variant.form);
    if (target.names) forms.push(...nameForms(data, language));
    if (target.affixes) forms.push(...affixForms(data));
    if (target.elements) for (const element of data.elements ?? []) forms.push(element.form);
    if (!forms.length) throw new Error(`${language}: no font guard forms`);
    return [...new Set(forms)].map((source) => {
        if (typeof source !== "string" || !source)
            throw new Error(`${language}: invalid guard form`);
        const result = reference.encode(source);
        if (result.findings.length)
            throw new Error(
                `${language}: ${source}: ${result.findings.map((one) => one.message).join("; ")}`,
            );
        return { language, source, native: result.text, font: face.file, model: target.model };
    });
}

export function fontLexiconInputs() {
    const groups = TARGETS.map((target) => {
        const references = target.languages.map((language) =>
            encodingReference(language, { font: target.font }),
        );
        return {
            model: target.model,
            font: references[0].face.file,
            entries: references.flatMap((reference) => lexiconInputs(target, reference)),
        };
    });
    return { version: 1, groups };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    const args = process.argv.slice(2);
    if (args.length !== 1)
        throw new Error("usage: node utils/font-lexicon-inputs.mjs <output.json>");
    fs.writeFileSync(args[0], `${JSON.stringify(fontLexiconInputs(), null, 2)}\n`);
}
