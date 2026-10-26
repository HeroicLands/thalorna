/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 * For full terms, see LICENSE.md or https://www.gnu.org/licenses/gpl-3.0.html.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/** Read canonical language-note data and derive lookup tables in memory. */

import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import YAML from "yaml";

/** A diagnostic with only the source position actually known. */
export class NoteError extends Error {
    constructor(file, message, line, column) {
        super(message);
        this.file = file;
        this.line = line;
        this.column = column;
    }
}

/** Read one Markdown document with YAML frontmatter. */
export function readDocument(file) {
    let text;
    try {
        text = fs.readFileSync(file, "utf8");
    } catch (error) {
        throw new NoteError(file, error.message);
    }
    const opening = /^(?:\uFEFF)?---\r?\n/.exec(text);
    if (!opening) throw new NoteError(file, "expected YAML frontmatter", 1);
    const rest = text.slice(opening[0].length);
    const closing = /^---[ \t]*(?:\r?\n|$)/m.exec(rest);
    if (!closing) throw new NoteError(file, "frontmatter has no closing delimiter");
    const yamlText = rest.slice(0, closing.index);
    const lineCounter = new YAML.LineCounter();
    const parsed = YAML.parseDocument(yamlText, { lineCounter });
    if (parsed.errors.length) {
        const error = parsed.errors[0];
        const position = lineCounter.linePos(error.pos[0]);
        throw new NoteError(file, error.message.split("\n")[0], position.line + 1, position.col);
    }
    const data = parsed.toJSON();
    if (!data || typeof data !== "object" || Array.isArray(data))
        throw new NoteError(file, "frontmatter must be an object");
    return {
        text,
        data,
        body: rest.slice(closing.index + closing[0].length).replace(/\r\n/g, "\n"),
    };
}

const object = (value) => value && typeof value === "object" && !Array.isArray(value);
const text = (value) => typeof value === "string" && value.length > 0;
const strings = (value) => Array.isArray(value) && value.every(text);

/** Publication wrappers are not part of the linguistic prose returned by lookup. */
function prose(body) {
    return body
        .replace(/^```[^\n]*\n[^]*?^```[ \t]*$/gm, "")
        .replace(/^~~~[^\n]*\n[^]*?^~~~[ \t]*$/gm, "")
        .replace(/^:::[^\n]*\n?/gm, "")
        .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
        .replace(/\[\[([^\]]+)\]\]/g, "$1")
        .trim();
}

/** All source headings with positions, ignoring fenced publication examples. */
function headings(body) {
    const masked = body.replace(/^(```|~~~)[^\n]*\n[^]*?^\1[ \t]*$/gm, (block) =>
        block.replace(/[^\n]/g, " "),
    );
    return [...masked.matchAll(/^(#{1,6})[ \t]+([^\n]+)$/gm)].map((match) => ({
        start: match.index,
        end: match.index + match[0].length,
        level: match[1].length,
        anchor: /\{#([a-z][a-z0-9-]*)\}[ \t]*$/.exec(match[2])?.[1],
    }));
}

/** Direct source prose beneath each anchor, plus hierarchical section ranges. */
function sectionsOf(body, file) {
    const all = headings(body);
    const sections = new Map(),
        ranges = new Map();
    for (const [index, heading] of all.entries()) {
        if (!heading.anchor) continue;
        const anchor = `#${heading.anchor}`;
        if (sections.has(anchor)) throw new NoteError(file, `duplicate guidance anchor ${anchor}`);
        const ownEnd = all[index + 1]?.start ?? body.length;
        const treeEnd =
            all.slice(index + 1).find((next) => next.level <= heading.level)?.start ?? body.length;
        sections.set(anchor, prose(body.slice(heading.start, ownEnd)));
        ranges.set(anchor, {
            start: heading.start,
            end: treeEnd,
            text: prose(body.slice(heading.start, treeEnd)),
        });
    }
    for (const match of prose(body).matchAll(/\]\(#([a-z][a-z0-9-]*)\)/g))
        if (!sections.has(`#${match[1]}`))
            throw new NoteError(file, `unknown local guidance anchor #${match[1]}`);
    return { sections, ranges };
}

/** Parse a source table only when it exists; column labels remain source-owned. */
function table(section, firstHeader, file) {
    if (!section) return undefined;
    for (const match of section.matchAll(/(?:^\|[^\n]+\|[ \t]*\n?)+/gm)) {
        const rows = match[0]
            .trim()
            .split("\n")
            .map((line) =>
                line
                    .split(/(?<!\\)\|/)
                    .slice(1, -1)
                    .map((cell) => cell.trim().replace(/\\\|/g, "|")),
            );
        if (rows[0]?.[0] !== firstHeader) continue;
        if (rows.length < 3 || rows[1].some((cell) => !/^:?-+:?$/.test(cell)))
            throw new NoteError(file, `invalid ${firstHeader} table`);
        if (rows.slice(2).some((row) => row.length !== rows[0].length || row.some((cell) => !cell)))
            throw new NoteError(file, `incomplete ${firstHeader} table row`);
        return { headers: rows[0], rows: rows.slice(2) };
    }
    return undefined;
}

/** Read the note directly; no generated file or historical dictionary is consulted. */
export function readLanguageNote(file) {
    const document = readDocument(file);
    const note = document.data;
    const fail = (message) => {
        throw new NoteError(file, message);
    };
    if (note.type !== "skill" || note.subType !== "language")
        fail("expected a skill/language note");
    if (!text(note.name?.full) || !text(note.shortcode))
        fail("language note requires name.full and shortcode");
    if (!Array.isArray(note.data?.words)) fail("language note data.words must be an array");
    const { sections, ranges } = sectionsOf(document.body, file);
    const known = (...anchors) => anchors.filter((anchor) => sections.has(anchor));
    const lexicon = note.data.words.map((word, position) => {
        if (!object(word) || !text(word.form) || !text(word.class))
            fail(`data.words[${position}] requires form and class`);
        const glosses = Array.isArray(word.gloss) ? word.gloss : [word.gloss];
        if (!strings(glosses) || !glosses.length)
            fail(`data.words[${position}].gloss must contain meaning strings`);
        if (word.variants !== undefined && !strings(word.variants))
            fail(`data.words[${position}].variants must be strings`);
        const entry = {
            id: `lexeme-${position + 1}`,
            form: word.form,
            class: word.class,
            glosses,
            variants: word.variants ?? [],
        };
        for (const field of ["field", "pronunciation", "note"])
            if (word[field] !== undefined) {
                if (!text(word[field])) fail(`data.words[${position}].${field} must be a string`);
                entry[field] = word[field];
            }
        if (word.concept !== undefined) {
            if (!text(word.concept) && (!strings(word.concept) || !word.concept.length))
                fail(`data.words[${position}].concept must be a string or nonempty string array`);
            entry.concept = word.concept;
        }
        entry.guidance = known(
            "#vocabulary-and-meaning",
            "#writing-rules",
            ...(word.class === "v" ? ["#present-agreement", "#modals-and-questions"] : []),
            ...(word.class === "name" ?
                [
                    "#names",
                    "#coined-pronunciation",
                    "#vowels",
                    "#consonants",
                    "#stress",
                    "#foreign-names",
                    "#naming-palette",
                ]
            :   []),
        );
        return entry;
    });
    const present = table(sections.get("#present-agreement"), "Verb", file);
    const address = table(sections.get("#present-agreement"), "Use", file);
    const modals = table(sections.get("#modals-and-questions"), "Modal", file);
    const examples = table(sections.get("#speech-and-emphasis"), "Meaning", file);
    const presentParadigms = (present?.rows ?? []).map(([verb, ...forms]) => ({
        verb,
        forms: Object.fromEntries(
            present.headers.slice(1).map((header, index) => [header, forms[index]]),
        ),
        guidance: "#present-agreement",
    }));
    if (new Set(presentParadigms.map((entry) => entry.verb)).size !== presentParadigms.length)
        fail("duplicate verb in present paradigm table");
    const data = {
        language: {
            name: note.name.full,
            shortcode: note.shortcode,
            ...(note.description ? { description: note.description } : {}),
            ...(note.data.abbreviation ? { abbreviation: note.data.abbreviation } : {}),
            ...(note.data.roman ? { roman: note.data.roman } : {}),
        },
        source: {
            file: path.relative(process.cwd(), path.resolve(file)),
            sha256: createHash("sha256").update(document.text).digest("hex"),
        },
        lexicon,
        presentParadigms,
        address: (address?.rows ?? []).map(([use, singular, plural]) => ({
            use,
            singular,
            plural,
            guidance: "#present-agreement",
        })),
        modals: (modals?.rows ?? []).map(([form, meaning]) => ({
            form,
            meaning,
            guidance: "#modals-and-questions",
        })),
        examples: (examples?.rows ?? []).map(([modern, target]) => ({
            modern,
            target,
            guidance: "#speech-and-emphasis",
        })),
        naming: {
            ...(note.data.names ? { names: note.data.names } : {}),
            ...(note.data.elements ? { elements: note.data.elements } : {}),
            ...(note.data.naming ? { pattern: note.data.naming } : {}),
            ...(note.data.register ? { register: note.data.register } : {}),
        },
    };
    const allowed = new Set([
        "#pronunciation",
        "#english-pronunciation",
        "#coined-pronunciation",
        "#vowels",
        "#consonants",
        "#stress",
        "#foreign-names",
        "#naming-palette",
        "#writing-rules",
        "#present-agreement",
        "#modals-and-questions",
        "#vocabulary-and-meaning",
        "#register",
        "#speech-and-emphasis",
        "#names",
    ]);
    const selected = [...ranges]
        .filter(([anchor]) => allowed.has(anchor))
        .map(([, range]) => range)
        .sort((a, b) => a.start - b.start);
    const roots = selected.filter(
        (range) =>
            !selected.some(
                (ancestor) =>
                    ancestor !== range &&
                    ancestor.start <= range.start &&
                    ancestor.end >= range.end,
            ),
    );
    const body =
        roots.length ?
            roots.map((range) => range.text).join("\n\n") + "\n"
        :   prose(document.body) + "\n";
    return { data, body, sections };
}

/** Return a diagnostic whose path is relative to the current directory. */
export function diagnostic(error, fallback) {
    const file = error.file ?? fallback;
    const location = [
        file ?
            path.relative(process.cwd(), path.resolve(file)) || path.basename(file)
        :   "<arguments>",
        error.line,
        error.column,
    ]
        .filter((value) => value !== undefined)
        .join(":");
    return `${location}: error: ${error.message}`;
}
