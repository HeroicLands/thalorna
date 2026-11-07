/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { notePath, parseFrontmatter } from "./note-index.mjs";
import { groupsOf } from "./vowel-pairs.mjs";

const read = (address) => fs.readFileSync(notePath(address), "utf8");
const guide = read("doc-prnncthlrn"),
    kalihari = read("skill-kalihrlng"),
    senali = parseFrontmatter(read("skill-senalilng")),
    names = Object.values(parseFrontmatter(kalihari).data.names.given).flat(),
    groups = [...groupsOf(guide, "skill-kalihrlng")].sort((a, b) => b.length - a.length),
    vowel = /^[aeiou]/u;

// Read these given names with the guide's groups, retaining source cuts.
function syllables(name) {
    const text = name.toLowerCase(),
        out = [];
    let start = 0;
    for (let i = 0; i < text.length; i++) {
        if (!vowel.test(text.slice(i))) continue;
        const group = groups.find((pair) => text.startsWith(pair, i)),
            end = i + (group?.length ?? 1);
        out.push({ start, text: text.slice(start, end) });
        start = end;
        i = end - 1;
    }
    if (start < text.length) out.at(-1).text += text.slice(start);
    return out;
}

// #958 owner answer42670: nearest consonant onset; a whole name is no alias.
function household(name, parts) {
    if (parts.length < 4) return null;
    let cut = parts.length - 2;
    while (cut > 0 && vowel.test(parts[cut].text)) cut--;
    if (cut === 0 || vowel.test(parts[cut].text)) return null;
    const suffix = name.slice(parts[cut].start);
    return suffix[0].toUpperCase() + suffix.slice(1);
}

test("Kalihari's illustrative household table follows the guide and consonant-onset cut", () => {
    const section = kalihari.split("### Household Names\n")[1].split("\n### ")[0],
        rows = [...section.matchAll(/^\|\s*([^|]+?)\s*\|\s*(\w+)\s*\|\s*([a-z-]+)\s*\|$/gmu)];
    assert(rows.length > 0, "household teaching has actual name examples");
    const derived = new Map(names.map((name) => [name, syllables(name)]));
    for (const [, label, name, counted] of rows) {
        assert(derived.has(name), `${name}: example is an actual given name`);
        const parts = derived.get(name),
            short = household(name, parts);
        assert.equal(counted, parts.map(({ text }) => text).join("-"), name);
        assert.equal(label.replaceAll("`", ""), short ?? "—", name);
    }
    // Keep the consecutive-vowel exception visible, not only ordinary cuts.
    assert(rows.some(([, , name]) => name === "Thaeori"));
    assert.match(section, /nearest syllable that opens on a consonant/u);
    assert.match(section, /no separate household name/u);
});

test("Senali's declared diphthongs and harmony groups stay inside the guide", () => {
    const allowed = groupsOf(guide, "skill-senalilng"),
        { vowelPairs, harmony } = senali.data.sounds.syllables;
    assert.deepEqual(
        vowelPairs.filter((pair) => !allowed.has(pair)),
        [],
    );
    for (const set of [harmony.back, harmony.front, harmony.neutral])
        assert.deepEqual(
            set.filter((sound) => sound.length > 1 && !allowed.has(sound)),
            [],
        );
});
