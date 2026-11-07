/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import fs from "node:fs";
import { addressOf } from "./note-index.mjs";

const approved = JSON.parse(
    fs.readFileSync(new URL("./fixtures/guide-pair-preservation.json", import.meta.url), "utf8"),
).notes;

/**
 * Apply only the enumerated guide spelling changes to a historical record.
 * Current source never passes through this function. Whole scalar matches keep
 * glosses, identifiers, y before a vowel and unlisted spellings unchanged.
 * The original raw frontmatter remains evidence; fm carries its semantic comparison.
 */
export function withGuidePairSpellings(before) {
    const changes = approved[addressOf(before.file)];
    if (!changes) return before;
    // Historical snapshot capitalization is retained letter by letter
    // while comparing whole scalars.
    const values = new Map(changes.values.map(([from, to]) => [from.toLowerCase(), to]));
    const walk = (value) => {
        if (typeof value === "string") {
            const replacement = values.get(value.toLowerCase());
            return replacement === undefined ? value : (
                    [...replacement]
                        .map((letter, i) =>
                            value[i] === value[i].toUpperCase() ?
                                letter.toUpperCase()
                            :   letter.toLowerCase(),
                        )
                        .join("")
                );
        }
        if (Array.isArray(value)) return value.map(walk);
        if (value && typeof value === "object")
            return Object.fromEntries(
                Object.entries(value).map(([key, item]) => [key, walk(item)]),
            );
        return value;
    };
    return {
        ...before,
        fm: walk(before.fm),
        raw: withGuidePairProse(before.raw, before.file),
    };
}

/** Only the exact approved prose lines, after earlier historical spelling moves. */
export function withGuidePairProse(text, file) {
    const lines = new Map(approved[addressOf(file)]?.lines ?? []);
    return text
        .split("\n")
        .map((line) => lines.get(line) ?? line)
        .join("\n");
}
