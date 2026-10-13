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
const languages = new Set(
    notes
        .filter(({ front }) => front?.type === "skill" && front.subType === "language")
        .map(({ front }) => `skill-${front.shortcode}`),
);

test("the content tree holds culture notes", () => {
    assert(cultures.length > 0);
});

test("every culture names the language skill its people speak", () => {
    const missing = cultures
        .filter(({ front }) => !languages.has(front.data?.language))
        .map(
            ({ file, front }) =>
                `${file}: data.language is ${JSON.stringify(front.data?.language)}`,
        );
    assert.deepEqual(missing, []);
});

test("every culture states an appearance profile", () => {
    const missing = cultures
        .filter(({ front }) => !front.data?.appearanceProfile)
        .map(({ file }) => `${file}: no data.appearanceProfile`);
    assert.deepEqual(missing, []);
});
