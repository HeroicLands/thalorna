/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of this license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard over the Khazári language note.
 *
 * **Everything it checks, it reads off the note.** The consonant and vowel
 * tables, the cluster rule, the frames in their `K1aK2K3` notation, the doubling
 * table, the prefixes, the suffixes, the function words, the skeletons, the words
 * older than the rules and the shared-ancestor table are all parsed at run time.
 * No letter, frame or affix is restated here, so a rule the note stops stating is
 * a rule the guard stops enforcing.
 *
 * The checks:
 *
 * 1. **Inventory and marks** — every letter of every word is in the consonant or
 *    vowel table; the acute is the only mark.
 * 2. **Syllable shape** — one consonant at the start of a word, never three
 *    together (a doubled consonant counts once), at most two at the end, and no
 *    two vowels together without the glottal between them.
 * 3. **The acute** — at most one in a word, and none in a given name.
 * 4. **Frames** — every italic word in the note decomposes into a listed skeleton
 *    through a listed frame, or a compound of two, with the declared prefixes and
 *    suffixes in their declared order; or it is a function word, a declared affix
 *    or a letter. The frame table's own examples recompute from their skeletons.
 * 5. **Names** — every given name is its list's name frame on some skeleton; every
 *    house name is a compound and carries a gloss; no name is listed twice.
 * 6. **Skeletons** — exactly three consonants, each listed once.
 * 7. **Words older than the rules** — exempt only what the table lists, each with a
 *    gloss and a layer; every exemption is printed.
 * 8. **Cognates** — the shared-ancestor table agrees with the note's own case
 *    table and with the copy in the Sinalë note. While the Sinalë note states no
 *    copy, that is a warning rather than an error.
 *
 * Findings are `file:line:column: severity: message`.
 */

import fs from "node:fs";
import path from "node:path";

export const NOTE = "assets/content/Skills/Languages/Khazari.md";
export const SINALE = "assets/content/Skills/Languages/Sinale.md";

/** A cell's forms in code spans, ticks off. */
export function ticked(cell) {
    return [...cell.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
}

/** A cell with its bold and italic marks off. */
function plain(cell) {
    return cell
        .replace(/\*\*/g, "")
        .replace(/(^|\s)_|_(\s|$)/g, "$1$2")
        .trim();
}

/** The 1-based line and column of an offset. */
export function position(text, offset) {
    const before = text.slice(0, offset);
    const line = before.split("\n").length;
    const column = offset - before.lastIndexOf("\n");
    return { line, column };
}

/**
 * One section of a note by its heading, up to the next heading as shallow.
 *
 * @param {string} text - The note.
 * @param {string} heading - The heading line, hashes included.
 * @returns {{text: string, offset: number}} The section and where it starts.
 */
export function section(text, heading) {
    const start = text.indexOf(`\n${heading}\n`);
    if (start === -1) throw new Error(`the note states no section "${heading}"`);
    const depth = heading.match(/^#+/)[0].length;
    const offset = start + 1;
    const lines = text.slice(offset).split("\n");
    for (let i = 1; i < lines.length; i += 1) {
        const mark = lines[i].match(/^(#+)\s/);
        if (mark && mark[1].length <= depth) {
            return { text: lines.slice(0, i).join("\n"), offset };
        }
    }
    return { text: text.slice(offset), offset };
}

/**
 * Every table in a stretch of text: header cells, and rows with their offsets.
 *
 * @param {string} text - The text.
 * @param {number} [base] - The offset of the text in the note.
 * @returns {{header: string[], rows: {cells: string[], offset: number}[]}[]}
 */
export function tables(text, base = 0) {
    const out = [];
    let current = null;
    let offset = 0;
    for (const line of text.split("\n")) {
        const here = base + offset;
        offset += line.length + 1;
        if (!line.trim().startsWith("|")) {
            current = null;
            continue;
        }
        const cells = line
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim());
        if (cells.every((cell) => /^:?-+:?$/.test(cell))) continue;
        if (!current) {
            current = { header: cells, rows: [] };
            out.push(current);
        } else current.rows.push({ cells, offset: here });
    }
    return out;
}

/** The first table of a section. */
function tableOf(text, heading) {
    const { text: body, offset } = section(text, heading);
    const found = tables(body, offset)[0];
    if (!found) throw new Error(`the section "${heading}" states no table`);
    return found;
}

/** The column of a table whose header starts with a word. */
function column(table, word) {
    const at = table.header.findIndex((cell) => plain(cell).toLowerCase().startsWith(word));
    if (at === -1) throw new Error(`a table has no "${word}" column`);
    return at;
}

/**
 * The rules, read off the note.
 *
 * @param {string} text - The Khazári note.
 * @returns {object} The rules.
 */
export function rulesFrom(text) {
    const consonantTable = tableOf(text, "### Consonants");
    const consonants = [];
    let stops = [];
    let glottal = null;
    for (const { cells } of consonantTable.rows) {
        const forms = ticked(cells[1]);
        if (/glottal/i.test(cells[0])) {
            glottal = forms[0];
            continue;
        }
        consonants.push(...forms);
        if (/^stops?$/i.test(plain(cells[0]))) stops = forms;
    }

    const vowelTable = tableOf(text, "### Vowels");
    const short = vowelTable.rows.map(({ cells }) => ticked(cells[0])[0]);
    const long = new Map(
        vowelTable.rows.map(({ cells }) => [ticked(cells[0])[0], ticked(cells[1])[0]]),
    );

    const clusterTable = tableOf(text, "### Clusters");
    const joiners = ticked(clusterTable.rows[0].cells[0]);
    const separator = ticked(clusterTable.rows[1].cells[1])[0];

    const doubling = new Map(
        tableOf(text, "### Doubling").rows.map(({ cells }) => [
            ticked(cells[0])[0],
            ticked(cells[1])[0],
        ]),
    );

    const skeletonTable = tableOf(text, "### Skeletons");
    const skeletons = skeletonTable.rows.map(({ cells, offset }) => ({
        form: ticked(cells[0])[0],
        sense: plain(cells[1] ?? ""),
        offset,
    }));

    const frameTable = tableOf(text, "### Frames");
    const fName = column(frameTable, "frame");
    const fShape = column(frameTable, "shape");
    const fClass = column(frameTable, "class");
    const exampleColumns = frameTable.header
        .map((cell, i) => ({ i, skeleton: plain(cell).match(/^On (\S+)$/)?.[1] }))
        .filter((c) => c.skeleton);
    const frames = frameTable.rows.map(({ cells, offset }) => {
        const shapes = ticked(cells[fShape]);
        const compound = shapes.length === 3;
        return {
            name: plain(cells[fName]),
            shape: compound ? null : shapes[0],
            parts: compound ? shapes : null,
            classes: plain(cells[fClass])
                .split(/,\s*/)
                .map((c) => c.trim()),
            examples: exampleColumns.map((c) => ({
                skeleton: c.skeleton,
                form: (cells[c.i].match(/_([^_]+)_/) ?? [])[1] ?? null,
            })),
            offset,
        };
    });

    const prefixTable = tableOf(text, "#### Verb prefixes");
    const prefixes = prefixTable.rows.map(({ cells }) => ({
        name: plain(cells[0]),
        beforeStop: ticked(cells[1])[0],
        otherwise: ticked(cells[2])[0],
        kind: plain(cells[3]).toLowerCase(),
    }));

    const suffixesOf = (heading) =>
        tableOf(text, heading).rows.map(({ cells }) => ({
            name: plain(cells[0]).toLowerCase(),
            form: ticked(cells[1])[0] ?? null,
        }));
    const tense = suffixesOf("#### Tense");
    const cases = suffixesOf("#### Case");
    const genders = suffixesOf("#### Gender");
    const numbers = suffixesOf("#### Number");

    const wordTable = tableOf(text, "### Pronouns and particles");
    const words = wordTable.rows.map(({ cells, offset }) => ({
        form: ticked(cells[0])[0],
        cls: plain(cells[1]),
        offset,
    }));
    const numerals = tableOf(text, "### Numbers").rows.map(({ cells, offset }) => ({
        form: ticked(cells[0])[0],
        cls: "num",
        offset,
    }));

    const olderTable = tableOf(text, "### Words older than the rules");
    const older = olderTable.rows.map(({ cells, offset }) => ({
        form: ticked(cells[0])[0],
        gloss: plain(cells[1] ?? ""),
        layer: plain(cells[2] ?? ""),
        offset,
    }));

    return {
        consonants,
        stops,
        glottal,
        short,
        long,
        joiners,
        separator,
        doubling,
        skeletons,
        frames,
        prefixes,
        tense,
        cases,
        genders,
        numbers,
        words: [...words, ...numerals],
        older,
    };
}

/**
 * A word cut into its sounds: consonants (digraphs whole), vowels and the glottal.
 *
 * @returns {{sound: string, kind: "C"|"V"|"G"|"?"}[]}
 */
export function sounds(word, rules) {
    const longs = new Set(rules.long.values());
    const consonants = [...rules.consonants].sort((a, b) => b.length - a.length);
    const out = [];
    let i = 0;
    while (i < word.length) {
        const c = consonants.find((k) => word.startsWith(k, i));
        if (c) {
            out.push({ sound: c, kind: "C" });
            i += c.length;
            continue;
        }
        const ch = word[i];
        if (rules.short.includes(ch) || longs.has(ch)) out.push({ sound: ch, kind: "V" });
        else if (ch === rules.glottal) out.push({ sound: ch, kind: "G" });
        else out.push({ sound: ch, kind: "?" });
        i += 1;
    }
    return out;
}

/** A skeleton's three consonants. */
export function radicals(skeleton) {
    return skeleton.split("-");
}

/**
 * Pour a skeleton through a frame shape, applying the cluster rule and doubling.
 *
 * @param {string} shape - The frame in `K1aK2K3` notation; `V` is the name vowel.
 * @param {string} skeleton - `x-y-z`.
 * @param {object} rules - From `rulesFrom`.
 * @param {string} [vowel] - What `V` stands for.
 * @returns {string} The word.
 */
export function pour(shape, skeleton, rules, vowel = "a") {
    const [k1, k2, k3] = radicals(skeleton);
    const tokens = shape.match(/K[123]|V|./g);
    let out = "";
    for (let i = 0; i < tokens.length; i += 1) {
        const t = tokens[i];
        if (t === "K1") out += k1;
        else if (t === "K2" && tokens[i + 1] === "K2") {
            out += rules.doubling.get(k2) ?? k2 + k2;
            i += 1;
        } else if (t === "K2") {
            out += k2;
            if (tokens[i + 1] === "K3" && !rules.joiners.includes(k2)) out += rules.separator;
        } else if (t === "K3") out += k3;
        else if (t === "V") out += vowel;
        else out += t;
    }
    return out;
}

/** A compound frame's word on two skeletons. */
export function compound(frame, first, second, rules) {
    const byName = new Map(rules.frames.map((f) => [f.name, f]));
    const [a, link, b] = frame.parts;
    return (
        pour(byName.get(a).shape, first, rules) + link + pour(byName.get(b).shape, second, rules)
    );
}

/** Whether a frame makes words of a class. */
const makes = (frame, cls) => frame.classes.includes(cls);

/**
 * Every stem the note's skeletons and frames make, keyed by form.
 *
 * @returns {Map<string, {skeleton: string, frame: string, verb: boolean}>}
 */
export function stems(rules) {
    const out = new Map();
    const skeletons = rules.skeletons.map((s) => s.form);
    for (const frame of rules.frames) {
        if (makes(frame, "name")) continue;
        if (frame.parts) {
            for (const a of skeletons) {
                for (const b of skeletons) {
                    out.set(compound(frame, a, b, rules), {
                        skeleton: `${a} + ${b}`,
                        frame: frame.name,
                        verb: false,
                    });
                }
            }
            continue;
        }
        for (const s of skeletons) {
            const form = pour(frame.shape, s, rules);
            if (!out.has(form) || makes(frame, "v")) {
                out.set(form, { skeleton: s, frame: frame.name, verb: makes(frame, "v") });
            }
        }
    }
    return out;
}

/** Join a suffix, holding two vowels apart with the glottal. */
function join(stem, suffix, rules) {
    const bare = suffix.replace(/^-/, "");
    const isVowel = (ch) => rules.short.includes(ch) || [...rules.long.values()].includes(ch);
    if (isVowel(stem.at(-1)) && isVowel(bare[0])) return stem + rules.glottal + bare;
    return stem + bare;
}

/**
 * Every inflection of a stem: gender, then number, then case.
 *
 * @returns {string[]}
 */
export function inflections(stem, rules) {
    const opt = (list) => [null, ...list.map((s) => s.form).filter(Boolean)];
    const out = [];
    for (const g of opt(rules.genders)) {
        for (const n of opt(rules.numbers)) {
            for (const c of opt(rules.cases)) {
                let w = stem;
                for (const s of [g, n, c]) if (s) w = join(w, s, rules);
                out.push(w);
            }
        }
    }
    return out;
}

/** The name frames, by the list each serves. */
function nameFrames(rules) {
    return rules.frames.filter((f) => makes(f, "name"));
}

/**
 * Whether a word is a given name: some name frame on some three consonants.
 *
 * @param {string} word - The name, capital and all.
 * @param {object} rules
 * @param {string} [only] - A frame name the name must be.
 * @returns {string|null} The skeleton, or null.
 */
export function givenName(word, rules, only) {
    const low = word.toLowerCase();
    const s = sounds(low, rules);
    const cons = s.filter((x) => x.kind === "C").map((x) => x.sound);
    if (cons.length < 3) return null;
    const skeleton = cons.slice(0, 3).join("-");
    for (const frame of nameFrames(rules)) {
        if (only && frame.name !== only) continue;
        for (const v of rules.short) {
            if (pour(frame.shape, skeleton, rules, v) === low) return skeleton;
        }
    }
    return null;
}

/** Whether a word is a compound on any two skeletons, listed or not. */
export function houseName(word, rules) {
    const low = word.toLowerCase();
    const frame = rules.frames.find((f) => f.parts);
    const cons = sounds(low, rules)
        .filter((x) => x.kind === "C")
        .map((x) => x.sound);
    if (cons.length !== 6) return null;
    const a = cons.slice(0, 3).join("-");
    const b = cons.slice(3).join("-");
    return compound(frame, a, b, rules) === low ? `${a} + ${b}` : null;
}

/**
 * Analyse one written word, prefixes and tense suffix included.
 *
 * @returns {{ok: boolean, why?: string, exempt?: boolean}}
 */
export function analyse(token, rules, table = stems(rules)) {
    const low = token.toLowerCase();
    if (rules.older.some((o) => o.form.toLowerCase() === low)) return { ok: true, exempt: true };
    const all = new Set([
        ...rules.consonants,
        ...rules.short,
        ...rules.long.values(),
        rules.glottal,
    ]);
    if (all.has(low)) return { ok: true };
    if (low.startsWith("-") || low.endsWith("-")) {
        return affixes(rules).has(low) ?
                { ok: true }
            :   { ok: false, why: "is no affix the note declares" };
    }
    const pieces = low.split("-");
    if (pieces.length > 1) return verb(pieces, rules, table);
    if (rules.words.some((w) => w.form === low)) return { ok: true };
    for (const w of rules.words.filter((x) => /pron/.test(x.cls))) {
        if (inflections(w.form, rules).includes(low)) return { ok: true };
    }
    for (const [stem] of table) {
        if (!low.startsWith(stem.slice(0, 2))) continue;
        if (inflections(stem, rules).includes(low)) return { ok: true };
    }
    if (/^\p{Lu}/u.test(token)) {
        for (const frame of nameFrames(rules)) {
            for (const v of rules.short) {
                const cons = sounds(low, rules).filter((x) => x.kind === "C");
                if (cons.length < 3) continue;
                const skel = cons
                    .slice(0, 3)
                    .map((x) => x.sound)
                    .join("-");
                const name = pour(frame.shape, skel, rules, v);
                if (low === name) return { ok: true };
                for (const c of rules.cases)
                    if (c.form && join(name, c.form, rules) === low) return { ok: true };
            }
        }
        if (houseName(low, rules)) return { ok: true };
    }
    return { ok: false, why: "decomposes into no listed skeleton, frame and suffixes" };
}

/** Every affix the note declares, as written with its hyphen. */
function affixes(rules) {
    const out = new Set();
    for (const p of rules.prefixes) {
        out.add(p.beforeStop);
        out.add(p.otherwise);
    }
    for (const list of [rules.tense, rules.cases, rules.genders, rules.numbers]) {
        for (const s of list) if (s.form) out.add(s.form);
    }
    for (const frame of rules.frames) {
        if (frame.parts) {
            out.add(`-${frame.parts[1]}-`);
            continue;
        }
        const before = frame.shape.split("K1")[0];
        const after = frame.shape.split("K3").at(-1);
        if (before) out.add(`${before}-`);
        if (after && !after.includes("V")) out.add(`-${after}`);
        if (after && after.includes("V"))
            for (const v of rules.short) out.add(`-${after.replace("V", v)}`);
    }
    return out;
}

/** A hyphenated verb: aspect prefix, voice prefix, core, tense suffix. */
function verb(pieces, rules, table) {
    const tenses = rules.tense.map((t) => t.form.replace(/^-/, ""));
    let rest = [...pieces];
    if (tenses.includes(rest.at(-1))) rest = rest.slice(0, -1);
    const core = rest.pop();
    const entry = table.get(core);
    if (!entry || !entry.verb) {
        return {
            ok: false,
            why: `has \`${core}\` at its core, which is no verb frame on a listed skeleton`,
        };
    }
    const kinds = [];
    for (const piece of rest) {
        const p = rules.prefixes.find((x) => [x.beforeStop, x.otherwise].includes(`${piece}-`));
        if (!p) return { ok: false, why: `carries \`${piece}-\`, which is no declared prefix` };
        kinds.push({ p, piece });
    }
    const order = [...new Set(rules.prefixes.map((p) => p.kind))];
    for (let i = 1; i < kinds.length; i += 1) {
        if (order.indexOf(kinds[i].p.kind) <= order.indexOf(kinds[i - 1].p.kind)) {
            return { ok: false, why: "carries its prefixes out of the declared order" };
        }
    }
    for (let i = 0; i < kinds.length; i += 1) {
        const next = i + 1 < kinds.length ? kinds[i + 1].piece : core;
        const first = sounds(next, rules)[0];
        const want =
            first && rules.stops.includes(first.sound) ?
                kinds[i].p.beforeStop
            :   kinds[i].p.otherwise;
        if (want !== `${kinds[i].piece}-`) {
            return {
                ok: false,
                why: `writes \`${kinds[i].piece}-\` where the ${kinds[i].p.name} is \`${want}\``,
            };
        }
    }
    return { ok: true };
}

/**
 * The shape problems of one word: inventory, marks, clusters, vowels, the acute.
 *
 * @returns {string[]} One message per problem.
 */
export function shape(word, rules, { name = false } = {}) {
    const problems = [];
    const low = word.toLowerCase();
    for (const piece of low.split("-").filter(Boolean)) {
        const s = sounds(piece, rules);
        const odd = s.filter((x) => x.kind === "?").map((x) => x.sound);
        if (odd.length)
            problems.push(
                `carries ${[...new Set(odd)].map((x) => `\`${x}\``).join(", ")}, outside the inventory`,
            );
        let run = 0;
        let lead = true;
        for (let i = 0; i < s.length; i += 1) {
            if (s[i].kind === "C") {
                const doubled = i > 0 && s[i - 1].kind === "C" && s[i - 1].sound === s[i].sound;
                const tth =
                    i > 0 &&
                    s[i - 1].kind === "C" &&
                    [...rules.doubling.values()].includes(s[i - 1].sound + s[i].sound);
                if (!doubled && !tth) run += 1;
                if (lead && run > 1 && !low.includes("-")) problems.push("opens on two consonants");
                if (run > 2) problems.push("sets three consonants together");
            } else {
                lead = false;
                run = 0;
                if (s[i].kind === "V" && s[i + 1]?.kind === "V")
                    problems.push("sets two vowels together with no glottal between");
            }
        }
        if (run > 2) problems.push("ends on three consonants");
    }
    const longs = [...rules.long.values()];
    const acutes = [...low].filter((ch) => longs.includes(ch)).length;
    if (acutes > 1) problems.push("carries more than one acute");
    if (name && acutes > 0) problems.push("is a given name and carries an acute");
    return [...new Set(problems)];
}

/** Every italic token of the note's body, with its offset. */
export function italics(text) {
    const body = text.indexOf("\n---", 4) + 4;
    const out = [];
    for (const m of text
        .slice(body)
        .matchAll(/(?<![\p{L}\p{N}_*])_([^_\n]+)_(?![\p{L}\p{N}_])/gu)) {
        const start = body + m.index + 1;
        for (const t of m[1].matchAll(/[\p{L}'’-]+/gu)) {
            const token = t[0].replace(/’/g, "'");
            if (token === "-") continue;
            out.push({ token, offset: start + t.index });
        }
    }
    return out;
}

/** The name lists: given names by frame, and house names with their glosses. */
export function nameLists(text) {
    const male = section(text, "### Male Given Names");
    const female = section(text, "### Female Given Names");
    const list = (sec) => {
        const body = sec.text.split("\n").slice(1).join("\n");
        const start = sec.offset + sec.text.indexOf(body);
        return [...body.matchAll(/\p{Lu}[\p{L}']+/gu)].map((m) => ({
            name: m[0],
            offset: start + m.index,
        }));
    };
    const house = tableOf(text, "### House Names (Patrilineal)").rows.map(({ cells, offset }) => ({
        name: ticked(cells[0])[0],
        gloss: plain(cells[1] ?? ""),
        offset,
    }));
    return { male: list(male), female: list(female), house };
}

/** The shared-ancestor table of a note, or null where it states none. */
export function cognates(text) {
    const found = tables(text).find((t) => t.header.some((cell) => /^proto/i.test(plain(cell))));
    if (!found) return null;
    const cols = found.header.map((cell) => plain(cell).toLowerCase());
    const out = new Map();
    for (const { cells, offset } of found.rows) {
        const row = {};
        cols.forEach((c, i) => {
            const key =
                c.startsWith("proto") ? "proto"
                : c.startsWith("sinal") ? "sinale"
                : c.startsWith("khaz") ? "khazari"
                : c;
            row[key] = ticked(cells[i] ?? "").join(" ");
        });
        row.offset = offset;
        out.set(plain(cells[0]).toLowerCase(), row);
    }
    return out;
}

/**
 * Every finding over the note.
 *
 * @param {string} text - The Khazári note.
 * @param {string|null} sinale - The Sinalë note, or null.
 * @returns {{offset: number|null, severity: string, message: string}[]}
 */
export function check(text, sinale) {
    const out = [];
    const add = (offset, severity, message) => out.push({ offset, severity, message });
    const rules = rulesFrom(text);
    const table = stems(rules);

    // Skeletons: three consonants of the inventory, each listed once.
    const seen = new Set();
    for (const s of rules.skeletons) {
        const parts = radicals(s.form);
        if (parts.length !== 3 || parts.some((p) => !rules.consonants.includes(p))) {
            add(
                s.offset,
                "error",
                `skeleton \`${s.form}\` is not three consonants of the inventory`,
            );
        }
        if (seen.has(s.form)) add(s.offset, "error", `skeleton \`${s.form}\` is listed twice`);
        seen.add(s.form);
        if (!s.sense) add(s.offset, "error", `skeleton \`${s.form}\` carries no sense`);
    }

    // The frame table's examples recompute.
    for (const frame of rules.frames) {
        for (const ex of frame.examples) {
            if (!ex.form || frame.parts) continue;
            const ok =
                makes(frame, "name") ?
                    rules.short.some(
                        (v) => pour(frame.shape, ex.skeleton, rules, v) === ex.form.toLowerCase(),
                    )
                :   pour(frame.shape, ex.skeleton, rules) === ex.form;
            if (!ok) {
                add(
                    frame.offset,
                    "error",
                    `the ${frame.name} frame on \`${ex.skeleton}\` is \`${pour(frame.shape, ex.skeleton, rules)}\`, not \`${ex.form}\``,
                );
            }
        }
    }

    // Function words and numerals keep the syllable shape.
    for (const w of rules.words) {
        for (const p of shape(w.form, rules)) add(w.offset, "error", `\`${w.form}\` ${p}`);
    }

    // Every italic word decomposes and keeps the shape.
    for (const { token, offset } of italics(text)) {
        const verdict = analyse(token, rules, table);
        if (!verdict.ok) {
            add(offset, "error", `\`${token}\` ${verdict.why}`);
            continue;
        }
        if (verdict.exempt || token.startsWith("-") || token.endsWith("-")) continue;
        for (const p of shape(token, rules)) add(offset, "error", `\`${token}\` ${p}`);
    }

    // Names.
    const lists = nameLists(text);
    const names = nameFrames(rules);
    const byList = [
        [lists.male, names.find((f) => /man$/i.test(f.name) && !/woman/i.test(f.name))],
        [lists.female, names.find((f) => /woman/i.test(f.name))],
    ];
    const listed = new Map();
    for (const [list, frame] of byList) {
        for (const { name, offset } of list) {
            if (!givenName(name, rules, frame?.name))
                add(offset, "error", `\`${name}\` is not the ${frame?.name} frame on any skeleton`);
            for (const p of shape(name, rules, { name: true }))
                add(offset, "error", `\`${name}\` ${p}`);
            if (listed.has(name)) add(offset, "error", `\`${name}\` is listed twice`);
            listed.set(name, offset);
        }
    }
    for (const { name, gloss, offset } of lists.house) {
        if (!houseName(name, rules))
            add(offset, "error", `\`${name}\` is not a compound of two skeletons`);
        for (const p of shape(name, rules)) add(offset, "error", `\`${name}\` ${p}`);
        if (!gloss) add(offset, "error", `\`${name}\` carries no gloss`);
        if (listed.has(name)) add(offset, "error", `\`${name}\` is listed twice`);
        listed.set(name, offset);
    }

    // Words older than the rules.
    for (const o of rules.older) {
        if (!o.gloss) add(o.offset, "error", `\`${o.form}\` is exempt and carries no gloss`);
        if (!o.layer) add(o.offset, "error", `\`${o.form}\` is exempt and states no layer`);
    }

    // Cognates: against this note's cases, and against the Sinalë copy.
    const own = cognates(text);
    if (!own) add(null, "error", "the note states no shared-ancestor table");
    else {
        for (const [name, row] of own) {
            const c = rules.cases.find((x) => x.name === name);
            if (!c)
                add(
                    row.offset,
                    "error",
                    `the shared-ancestor table names the ${name}, which the case table does not`,
                );
            else if (c.form !== row.khazari) {
                add(
                    row.offset,
                    "error",
                    `the shared-ancestor table gives the ${name} as \`${row.khazari}\`; the case table gives \`${c.form}\``,
                );
            }
        }
        const theirs = sinale ? cognates(sinale) : null;
        if (!theirs) add(null, "warning", `${SINALE} states no shared-ancestor table to compare`);
        else {
            const keys = new Set([...own.keys(), ...theirs.keys()]);
            for (const k of keys) {
                const a = own.get(k);
                const b = theirs.get(k);
                if (!a || !b) {
                    add(
                        a?.offset ?? null,
                        "error",
                        `the ${k} stands in only one note's shared-ancestor table`,
                    );
                    continue;
                }
                for (const col of ["proto", "sinale", "khazari"]) {
                    if (a[col] !== b[col]) {
                        add(
                            a.offset,
                            "error",
                            `the ${k} ${col} cognate is \`${a[col]}\` here and \`${b[col]}\` in ${SINALE}`,
                        );
                    }
                }
            }
        }
    }
    return out;
}

/** A finding as a line: path first, field dropped rather than guessed. */
export function format(file, text, finding) {
    if (finding.offset == null) return `${file}: ${finding.severity}: ${finding.message}`;
    const { line, column } = position(text, finding.offset);
    return `${file}:${line}:${column}: ${finding.severity}: ${finding.message}`;
}

/** Run the guard over the tree. */
export function main() {
    const text = fs.readFileSync(NOTE, "utf8");
    const sinale = fs.existsSync(SINALE) ? fs.readFileSync(SINALE, "utf8") : null;
    const findings = check(text, sinale);
    for (const f of findings) console.error(format(NOTE, text, f));
    const rules = rulesFrom(text);
    for (const o of rules.older)
        console.log(`exempt as older than the rules: ${o.form} (${o.gloss})`);
    const errors = findings.filter((f) => f.severity === "error").length;
    const lists = nameLists(text);
    console.log(
        `Khazári: ${rules.skeletons.length} skeletons, ${rules.frames.length} frames, ` +
            `${lists.male.length} male / ${lists.female.length} female given names, ` +
            `${lists.house.length} house names, ${errors} error(s).`,
    );
    if (errors) process.exitCode = 1;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) main();
