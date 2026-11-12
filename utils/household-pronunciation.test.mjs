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

test("Kalihari's declared given names have household names by the guide and consonant-onset cut", () => {
    assert(names.length > 0, "the language declares given names");
    let cut = 0;
    for (const name of names) {
        const parts = syllables(name),
            short = household(name, parts);
        assert.equal(parts.map(({ text }) => text).join(""), name.toLowerCase(), name);
        if (parts.length < 4) {
            assert.equal(short, null, `${name}: fewer than four syllables has no household name`);
            continue;
        }
        if (short === null) continue;
        cut++;
        assert(name.toLowerCase().endsWith(short.toLowerCase()), name);
        assert(!vowel.test(short.toLowerCase()), `${name}: a household name opens on a consonant`);
        assert(short.length < name.length, `${name}: a household name is shorter than the name`);
    }
    assert(cut > 0, "some declared given name has a household name");
    // Keep the consecutive-vowel exception visible, not only ordinary cuts.
    assert(names.includes("Thaeori"));
    assert.equal(household("Thaeori", syllables("Thaeori")), null);
    assert.equal(household("Oruanei", syllables("Oruanei")), "Ruanei");
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
