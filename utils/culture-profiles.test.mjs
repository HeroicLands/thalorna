/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";

const ROOT = "assets/content";

/** Every markdown file under a directory, recursively. */
function* markdown(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* markdown(full);
        else if (entry.name.endsWith(".md")) yield full;
    }
}

/** The frontmatter of a note, or undefined when it has none. */
function frontmatter(file) {
    const match = fs.readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
    return match ? YAML.parse(match[1]) : undefined;
}

const notes = [...markdown(ROOT)].map((file) => ({ file, front: frontmatter(file) }));
const cultures = notes.filter(({ front }) => front?.type === "lore" && front.subType === "culture");
const config = YAML.parse(fs.readFileSync("package-build.config.yaml", "utf8"));
/** The language codes whose note is a language skill of this package. */
const languages = new Set(
    Object.entries(config.languages ?? {})
        .filter(([, language]) => language?.note)
        .map(([code]) => code),
);
const byShortcode = new Map(cultures.map((culture) => [culture.front.shortcode, culture]));

/** A culture's language: its own `data.lang`, else its first parent culture's. */
function cultureLanguage(culture, seen = new Set()) {
    if (culture.front.data?.lang) return culture.front.data.lang;
    seen.add(culture.front.shortcode);
    for (const parent of culture.front.data?.parents ?? []) {
        const next = byShortcode.get(String(parent).replace(/^lore-/, ""));
        if (!next || seen.has(next.front.shortcode)) continue;
        const found = cultureLanguage(next, seen);
        if (found) return found;
    }
    return undefined;
}

test("the content tree holds culture notes", () => {
    assert(cultures.length > 0);
});

test("every culture resolves the language its people speak", () => {
    const missing = cultures
        .filter((culture) => !languages.has(cultureLanguage(culture)))
        .map(
            (culture) =>
                `${culture.file}: data.lang resolves to ${JSON.stringify(cultureLanguage(culture))}`,
        );
    assert.deepEqual(missing, []);
});

test("every culture states an appearance profile", () => {
    const missing = cultures
        .filter(({ front }) => !front.data?.appearanceProfile)
        .map(({ file }) => `${file}: no data.appearanceProfile`);
    assert.deepEqual(missing, []);
});
