#!/usr/bin/env node
/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Review the approved Aelwythi spelling migration without changing English sources. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { scanRuns } from "@heroiclands/package-build/engine/content-scripts";
import { scanSpans } from "@heroiclands/package-build/engine/content-spans";
import { scanVerse } from "@heroiclands/package-build/engine/content-verse";
import { scanScrolls } from "@heroiclands/package-build/engine/content-scroll";
import { scanBlocks } from "@heroiclands/package-build/engine/content-blocks";
import { parseExtensionAttributes } from "@heroiclands/package-build/engine/extension-attributes";
import { readDocument, readLanguageNote } from "./aelwythi-note.mjs";

const LETTERS = /['’]?[\p{L}\p{M}]+(?:[-‐‑'’][\p{L}\p{M}]+)*(?:['’])?/gu;
const fold = (text) => text.normalize("NFC").toLowerCase();
const likeCase = (source, lower) =>
    source[0] === source[0].toUpperCase() ? lower[0].toUpperCase() + lower.slice(1) : lower;

/** The approved possessive/contraction spelling; hyphen choices are candidates. */
export function orthographyCandidate(word) {
    const suffix = word === word.toUpperCase() ? "ES" : "es";
    if (/^(?:it|that|there|what|who|here|he|she|let)['’]s$/i.test(word))
        return word.replace(/['’]/gu, "");
    let result = word
        .replace(/['’]s$/iu, suffix)
        .replace(/(?<=[\p{L}\p{M}])['’]$/u, suffix)
        .replace(/['’]/gu, "");
    if (/^(?:candle|kandle)[-‐‑]light$/i.test(result)) result = result.replace(/[-‐‑]/gu, "");
    else result = result.replace(/[-‐‑]/gu, " ");
    return result;
}

/** Mechanical candidates plus the owner's sceptic exception, not an edit operation.
 * ch and qu remain unchanged. Reviewed collision spellings live in the note.
 */
export function respellWord(word) {
    word = orthographyCandidate(word);
    if (fold(word) === "sceptic")
        return [..."skeptik"]
            .map((letter, index) =>
                word[index] === word[index].toUpperCase() ? letter.toUpperCase() : letter,
            )
            .join("");
    return word.replace(/sc(?=[eiy])|ck|ch|c|x/gi, (group, offset, whole) => {
        if (/^ch$/i.test(group)) return group;
        const lower = group.toLowerCase();
        const replacement =
            lower === "sc" ? "s"
            : lower === "ck" ? "k"
            : lower === "x" ?
                offset === 0 ?
                    "z"
                :   "ks"
            : /[eiy]/i.test(whole[offset + group.length] ?? "") ? "s"
            : "k";
        return whole === whole.toUpperCase() ?
                replacement.toUpperCase()
            :   likeCase(group, replacement);
    });
}
export const respellText = (text) => text.replace(LETTERS, respellWord);

/** Every authoritative spelling, including paradigm forms and naming references. */
export function languageForms(file) {
    const document = readDocument(file);
    const data = document.data.data;
    const forms = [];
    const add = (form, at, kind) => {
        if (typeof form === "string") forms.push({ form, file, at, kind });
    };
    data.words.forEach((word, index) => {
        add(word.form, `data.words[${index}].form`, "word");
        (word.variants ?? []).forEach((form, variant) =>
            add(form, `data.words[${index}].variants[${variant}]`, "variant"),
        );
    });
    const names = (value, at) => {
        if (typeof value === "string") add(value, at, "name");
        else if (Array.isArray(value))
            value.forEach((item, index) => names(item, `${at}[${index}]`));
        else if (value && typeof value === "object")
            for (const [key, item] of Object.entries(value))
                if (key !== "pattern") names(item, `${at}.${key}`);
    };
    names(data.names, "data.names");
    (data.elements ?? []).forEach((element, index) => {
        add(element.form, `data.elements[${index}].form`, "element");
        (element.examples ?? []).forEach((form, example) =>
            add(form, `data.elements[${index}].examples[${example}]`, "name-example"),
        );
    });
    (data.register ?? []).forEach((entry, index) => {
        add(entry.name, `data.register[${index}].name`, "registered-name");
        (entry.built ?? []).forEach((form, part) =>
            add(form, `data.register[${index}].built[${part}]`, "element-reference"),
        );
    });
    for (const [index, paradigm] of readLanguageNote(file).data.presentParadigms.entries()) {
        add(paradigm.verb, `presentParadigms[${index}].verb`, "grammar");
        for (const [key, form] of Object.entries(paradigm.forms))
            add(form, `presentParadigms[${index}].forms.${key}`, "grammar");
    }
    return forms;
}

const AELWYTHI_ENCODINGS = new Set([
    "aelwsemaronenc",
    "doc-aelwsemaronenc",
    "thalorna-note-doc-aelwsemaronenc",
]);
const isAelwythiEncoding = (value) =>
    typeof value === "string" && AELWYTHI_ENCODINGS.has(fold(value));
const selectedLanguage = (attributes, fallback) =>
    attributes.lang ??
    (isAelwythiEncoding(attributes.enc) ? "aelw"
    : attributes.enc && attributes.enc !== "default" ? "und"
    : fallback);
const hasAelwythiSelector = (source) =>
    [...source.matchAll(/\b(lang|enc)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s}]+))/g)].some((match) =>
        match[1] === "lang" ?
            /^(?:aelw|art-x-aelw)$/i.test(match[2] ?? match[3] ?? match[4])
        :   isAelwythiEncoding(match[2] ?? match[3] ?? match[4]),
    );

/** Exact token edits inside authored Aelwythi runs, excluding targets and attributes. */
export function scopedEdits(source) {
    const starts = [0];
    for (const match of source.matchAll(/\n/g)) starts.push(match.index + 1);
    const spans = scanSpans(source).spans;
    const byStart = new Map(spans.map((span) => [span.start, span]));
    const runs = scanRuns(source, {}).runs;
    const ranges = runs.map((run) => {
        const span = byStart.get(run.start);
        return run.kind === "span" ?
                {
                    from: run.start + 1,
                    to: span.contentEnd,
                    lang: selectedLanguage(Object.fromEntries(span.attrs), run.lang),
                }
            :   { from: starts[run.start + 1], to: starts[run.end], lang: run.lang };
    });
    const replaceRange = (range) => {
        const index = ranges.findIndex(
            (other) => other.from === range.from && other.to === range.to,
        );
        if (index < 0) ranges.push(range);
        else ranges[index] = range;
    };
    // Read selectors from the authored constructs too: a published scanner may
    // expose their attributes before it uses enc to infer a run's language.
    for (const span of spans) {
        const attributes = Object.fromEntries(span.attrs);
        if (attributes.lang || (attributes.enc && attributes.enc !== "default"))
            replaceRange({
                from: span.start + 1,
                to: span.contentEnd,
                lang: selectedLanguage(attributes),
            });
    }
    const divs = [];
    const collectDivs = (text, offset = 0) => {
        for (const block of scanBlocks(text).blocks) {
            if (block.name !== "div") continue;
            divs.push({ ...block, start: offset + block.start, end: offset + block.end });
            collectDivs(block.body, offset + block.start + 1);
        }
    };
    collectDivs(source);
    for (const block of [...divs, ...scanVerse(source).blocks, ...scanScrolls(source).blocks]) {
        const attributes = block.attributes;
        if (attributes.lang || (attributes.enc && attributes.enc !== "default"))
            replaceRange({
                from: starts[block.start + 1],
                to: starts[block.end],
                lang: selectedLanguage(attributes),
            });
    }
    const masked = [];
    for (const span of spans) masked.push([span.contentEnd, span.end]);
    for (const match of source.matchAll(/\{[^{}\n]*\}/g))
        masked.push([match.index, match.index + match[0].length]);
    for (const match of source.matchAll(/\[\[([^\]\n]+)\]\](?:\{([^}\n]*)\})?/g)) {
        const bar = match[1].indexOf("|");
        const attributes = parseExtensionAttributes(match[2] ?? "").values;
        const ownLang = selectedLanguage(attributes);
        if (bar < 0) masked.push([match.index, match.index + match[0].length]);
        else {
            masked.push([match.index, match.index + 2 + bar + 1]);
            if (ownLang)
                ranges.push({
                    from: match.index + 2 + bar + 1,
                    to: match.index + 2 + match[1].length,
                    lang: ownLang,
                });
        }
    }
    for (const match of source.matchAll(/\]\([^\n)]*\)/g))
        masked.push([match.index, match.index + match[0].length]);
    for (const match of source.matchAll(/<[^>\n]+>|⟦[^]*?(?:⟧|$)/g))
        masked.push([match.index, match.index + match[0].length]);
    const edits = [];
    for (const match of source.matchAll(LETTERS)) {
        const from = match.index,
            to = from + match[0].length;
        if (masked.some(([a, b]) => a < to && b > from)) continue;
        const owner = ranges
            .filter((range) => range.from <= from && range.to >= to)
            .sort((a, b) => a.to - a.from - (b.to - b.from))[0];
        if (!/^(?:aelw|art-x-aelw)$/i.test(owner?.lang ?? "")) continue;
        const replacement = respellWord(match[0]);
        edits.push({ from, to, form: match[0], replacement });
    }
    return edits;
}

export function migrationReport(root = process.cwd()) {
    const relative = (file) => path.relative(root, file).split(path.sep).join("/");
    const noteFile = path.join(root, "assets/content/Skills/Languages/Aelwythi.md");
    const forms = languageForms(noteFile).map((form) => ({ ...form, file: relative(form.file) }));
    const content = path.join(root, "assets/content");
    for (const relativeFile of fs
        .readdirSync(content, { recursive: true, encoding: "utf8" })
        .filter((file) => file.endsWith(".md"))
        .sort()) {
        const file = path.join(content, relativeFile);
        const source = fs.readFileSync(file, "utf8");
        if (!hasAelwythiSelector(source)) continue;
        for (const edit of scopedEdits(source))
            forms.push({
                form: edit.form,
                file: relative(file),
                at: edit.from,
                kind: "tagged-content",
            });
    }
    const groups = new Map();
    for (const item of forms) {
        // Full forms and component tokens are both reported; token-only copies
        // make collisions in phrases and names visible without inventing senses.
        for (const form of new Set([item.form, ...(item.form.match(LETTERS) ?? [])])) {
            const target = fold(respellText(form));
            if (!groups.has(target)) groups.set(target, new Map());
            const originals = groups.get(target),
                original = fold(form);
            if (!originals.has(original)) originals.set(original, []);
            originals.get(original).push({ ...item, form });
        }
    }
    const collisions = [...groups]
        .filter(([, originals]) => originals.size > 1)
        .map(([result, originals]) => ({
            result,
            originals: [...originals]
                .sort(([a], [b]) => a.localeCompare(b, "en"))
                .map(([original, occurrences]) => ({ original, occurrences })),
        }))
        .sort((a, b) => a.result.localeCompare(b.result, "en"));
    const unmapped = forms
        .filter(({ form }) => /['’`‐‑-]/u.test(form))
        .map((item) => ({
            ...item,
            result: respellText(item.form),
            marks: [...new Set(item.form.match(/['’`‐‑-]/gu))],
        }));
    return {
        purpose: "Candidate review only; this program never writes or overrides authored spellings",
        reviewedSpellings: { scent: "sente", thick: "thikke", sceptic: "skeptik" },
        sharedLexemes: { cold: "kold" },
        sourceSha256: createHash("sha256").update(fs.readFileSync(noteFile)).digest("hex"),
        formCount: forms.length,
        changedFormCount: forms.filter(({ form }) => respellText(form) !== form).length,
        collisions,
        unmapped,
    };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    process.stdout.write(JSON.stringify(migrationReport(), null, 2) + "\n");
}
