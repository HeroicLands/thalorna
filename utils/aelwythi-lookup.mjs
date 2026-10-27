#!/usr/bin/env node
/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 * For full terms, see LICENSE.md or https://www.gnu.org/licenses/gpl-3.0.html.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/** Query canonical language-note vocabulary and anchored linguistic prose. */

import path from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";
import { readLanguageNote, diagnostic } from "./aelwythi-note.mjs";

const normalize = (text) => text.normalize("NFC").toLowerCase().normalize("NFC");
const terms = (text) => normalize(text).match(/[\p{L}\p{M}\p{N}]+/gu) ?? [];

/** Keep all exact homographs before falling back to whole-term modern meanings. */
export function lookupNote({ data, sections }, query, limit) {
    const normalized = normalize(query.trim());
    const names = (data.naming?.register ?? [])
        .filter(
            (name) =>
                !data.lexicon.some(
                    (entry) =>
                        entry.class === "name" && normalize(entry.form) === normalize(name.name),
                ),
        )
        .map((name, index) => ({
            id: `registered-name-${index + 1}`,
            form: name.name,
            class: "name",
            glosses: [name.why ?? `${name.kind} name`],
            variants: [],
            guidance: ["#names"].filter((anchor) => sections.has(anchor)),
        }));
    const lexicon = [...data.lexicon, ...names];
    const direct = lexicon.filter((entry) => normalize(entry.form) === normalized);
    const variants = lexicon.filter((entry) =>
        entry.variants.some((variant) => normalize(variant) === normalized),
    );
    const matchedParadigms = data.presentParadigms.filter((paradigm) =>
        Object.values(paradigm.forms).some((form) => normalize(form) === normalized),
    );
    const paradigmatic = lexicon.filter((entry) =>
        matchedParadigms.some((paradigm) => normalize(entry.form) === normalize(paradigm.verb)),
    );
    let match =
        direct.length ? "form"
        : variants.length ? "variant"
        : "paradigm";
    let matches = [
        ...new Map(
            [...direct, ...variants, ...paradigmatic].map((entry) => [entry.id, entry]),
        ).values(),
    ];
    if (!matches.length && !matchedParadigms.length) {
        match = "meaning";
        const queryTerms = [...new Set(terms(query))];
        matches = lexicon
            .filter((entry) =>
                entry.glosses.some((gloss) => {
                    const glossaryTerms = new Set(terms(gloss));
                    return queryTerms.length && queryTerms.every((term) => glossaryTerms.has(term));
                }),
            )
            .sort((a, b) => {
                const exact = (entry) =>
                    entry.glosses.some((gloss) => normalize(gloss) === normalized) ? 1 : 0;
                return exact(b) - exact(a);
            });
    }
    const found = matches.length > 0 || matchedParadigms.length > 0;
    const entries = matches.slice(0, limit);
    const paradigms = data.presentParadigms.filter(
        (paradigm) =>
            entries.some((entry) => normalize(entry.form) === normalize(paradigm.verb)) ||
            matchedParadigms.includes(paradigm),
    );
    const modals = data.modals.filter((modal) =>
        modal.form
            .split(/\s*\/\s*/)
            .some((form) => entries.some((entry) => normalize(entry.form) === normalize(form))),
    );
    const anchors = new Set(found && sections.has("#writing-rules") ? ["#writing-rules"] : []);
    for (const item of [...entries, ...paradigms, ...modals])
        for (const anchor of Array.isArray(item.guidance) ? item.guidance : [item.guidance])
            anchors.add(anchor);
    return {
        query,
        found,
        match: found ? match : "none",
        total: matches.length,
        truncated: matches.length > limit,
        entries,
        paradigms,
        modals,
        guidance: [...anchors].map((anchor) => ({ anchor, text: sections.get(anchor) })),
    };
}

function main() {
    let options, query, limit;
    try {
        const parsed = parseArgs({
            allowPositionals: true,
            options: {
                note: { type: "string", default: "assets/content/Skills/Languages/Aelwythi.md" },
                guide: { type: "boolean" },
                limit: { type: "string", default: "10" },
                help: { type: "boolean", short: "h" },
            },
        });
        options = parsed.values;
        if (options.help) {
            console.log(
                "Usage: node utils/aelwythi-lookup.mjs [--note <language.md>] [--limit <1..100>] <query>\n       node utils/aelwythi-lookup.mjs [--note <language.md>] --guide\nExit status: 0 success, 1 invalid language note, 2 usage error, 3 no matching entry.",
            );
            return;
        }
        query = parsed.positionals.join(" ").trim();
        if (options.guide ? Boolean(query) : !query || !terms(query).length)
            throw new Error("provide a query or --guide, not both");
        if (!/^[1-9]\d*$/.test(options.limit) || Number(options.limit) > 100)
            throw new Error("--limit must be an integer from 1 to 100");
        limit = Number(options.limit);
    } catch (error) {
        console.error(diagnostic(error));
        process.exitCode = 2;
        return;
    }
    try {
        const note = readLanguageNote(options.note);
        if (options.guide) {
            process.stdout.write(note.body.trim() + "\n");
            return;
        }
        const result = lookupNote(note, query, limit);
        console.log(JSON.stringify(result, null, 2));
        if (!result.found) process.exitCode = 3;
    } catch (error) {
        console.error(diagnostic(error, options.note));
        process.exitCode = 1;
    }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
