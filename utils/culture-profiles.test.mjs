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

/** A culture's appearance profile: its own, else its first parent culture's. */
function cultureProfile(culture, seen = new Set()) {
    if (culture.front.data?.appearanceProfile) return culture.front.data.appearanceProfile;
    seen.add(culture.front.shortcode);
    for (const parent of culture.front.data?.parents ?? []) {
        const next = byShortcode.get(String(parent).replace(/^lore-/, ""));
        if (!next || seen.has(next.front.shortcode)) continue;
        const found = cultureProfile(next, seen);
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
        .filter((culture) => !cultureProfile(culture))
        .map(({ file }) => `${file}: no data.appearanceProfile`);
    assert.deepEqual(missing, []);
});

/** The cultures of Zerathia's peoples, by shortcode. */
const ZERATHIAN = [
    "khelathiclt",
    "deltakhelclt",
    "bordkhelclt",
    "bethuanclt",
    "okharinclt",
    "nyalubaclt",
    "herdclanclt",
    "bikoclt",
    "yesomaclt",
    "kubindoclt",
    "pewayeclt",
    "luwandoclt",
    "gorgfolkclt",
];
const VISIBLE_FIELDS = ["frame", "skin_color", "height"];

test("every Zerathian culture exists and states its own profile", () => {
    const missing = ZERATHIAN.filter((code) => !byShortcode.has(code));
    assert.deepEqual(missing, []);
});

test("every pair of Zerathian cultures differs in frame, skin or height", () => {
    const same = [];
    for (let i = 0; i < ZERATHIAN.length; i++) {
        for (let j = i + 1; j < ZERATHIAN.length; j++) {
            const a = byShortcode.get(ZERATHIAN[i])?.front.data.appearanceProfile;
            const b = byShortcode.get(ZERATHIAN[j])?.front.data.appearanceProfile;
            const differing = VISIBLE_FIELDS.filter(
                (field) => JSON.stringify(a?.[field]) !== JSON.stringify(b?.[field]),
            );
            if (differing.length < 2) same.push(`${ZERATHIAN[i]} and ${ZERATHIAN[j]}`);
        }
    }
    assert.deepEqual(same, []);
});

test("a culture naming only Tantsou draws the imperial core's profile", () => {
    const parent = byShortcode.get("tantsouclt");
    const core = byShortcode.get("tantsouimpclt");
    assert(parent && core);
    assert.deepEqual(cultureProfile(core), parent.front.data.appearanceProfile);
});

test("the Tantsou child cultures state profiles that differ from the parent", () => {
    const parent = byShortcode.get("tantsouclt").front.data.appearanceProfile;
    for (const shortcode of ["tantsoutribclt", "tantsoumrchclt"]) {
        const culture = byShortcode.get(shortcode);
        assert(culture, shortcode);
        assert.deepEqual(culture.front.data.parents, ["lore-tantsouclt"]);
        assert.notDeepEqual(culture.front.data.appearanceProfile, parent);
    }
});
