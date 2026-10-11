/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The sound-change engine the Aurèldían lexicons share.
 *
 * A lexicon note states how one tongue's words become another's as an ordered
 * table under a heading of its own:
 *
 * ```
 * | Step | Change                         | Where          |
 * | ---- | ------------------------------ | -------------- |
 * | 1    | `t' d' k' g'` → `t d k g`      | anywhere       |
 * | 2    | `dh` → `z`; `gh` → `g`         | anywhere       |
 * | 3    | `p` → `v`                      | between vowels |
 * | 4    | `ândis` → `Vndi`               | word end       |
 * | 5    | like vowels merge, long        | —              |
 * | 6    | stress moves to the first syllable | —          |
 * | 7    | acute on the stressed vowel    | —              |
 * ```
 *
 * This module reads such a table and applies it, step by step, to a word. A
 * guard hands it the ancestor's form and compares what comes out with the form
 * the lexicon writes, so the table in the note is the rule and the guard
 * restates nothing.
 *
 * **The Change cell** holds one or more rules separated by `;`. A rule is
 * `` `sources` → `targets` ``: each side a code span of sounds separated by
 * spaces, the sources paired with the targets in order, or one target standing
 * for every source. A target of `—` deletes. A source or a target may be more
 * than one sound (`ândis`). An acute on a target vowel says that vowel takes
 * the stress when the matched vowel carried it (`e` → `ié`); otherwise the
 * first vowel of the target does. The capitals `C`, `V`, `L` and `N` stand for any
 * consonant, vowel, liquid or nasal in a source; in a target they copy, in
 * order, what those classes matched, and a `V` the source did not match copies
 * the nearest vowel to the left of the match, made short. The arrow may be
 * written `→`, `>` or `->`.
 *
 * A Change cell with no arrow names one of the **operations**: `like vowels
 * merge, long`, `like vowels merge, short` and `unlike vowels merge to the
 * first, long`, which contract two vowels that stand together and are not a
 * kept diphthong; `stress moves to the <rule>`, which restresses the word by a
 * stress rule; and the mark operations `acute on the stressed vowel`, `grave on
 * the stressed vowel`, `acute on a stressed short vowel, circumflex on a long
 * one` and `no stress mark`, each optionally qualified `of a word of two
 * syllables or more`, which decide how the stressed vowel is written when the
 * word is rendered.
 *
 * **The Where cell** is `—` or `anywhere` for a rule that holds everywhere,
 * else one or more conditions joined by `and`, every one of which must hold at
 * the matched sounds: `word start`, `word end`, `between vowels`,
 * `after <sounds>`, `before <sounds>`, `after a single consonant`, `open
 * syllable`, `closed syllable`, `stressed syllable` and `unstressed syllable`.
 * The sounds after `after` and `before` are `a vowel`, `a consonant`, `a
 * liquid`, `a nasal` or code spans, joined by `or` or commas. A word outside
 * that vocabulary is reported, and the table it stands in is not applied.
 *
 * **Sounds.** A word is cut into sounds with digraphs whole; a vowel carries
 * three properties read off its marks, the circumflex or macron for length, the
 * tilde for a nasal, and the acute or grave for stress. Rules match a vowel's
 * letter, length and nasality and never its stress; stress is a property of the
 * word, placed once by the stress rule the caller names (or by the marks the
 * input carries), carried through every substitution, and written out at the
 * end by whichever mark operation the table last named.
 *
 * **Syllables.** A syllable is open when its vowel ends the word, or is
 * followed by one consonant and a vowel, or by a stop and a liquid and a vowel;
 * it is closed otherwise. Two vowels standing together are one syllable only
 * when they form a diphthong the caller lists. Weight-based stress falls on a
 * heavy penult (a long or nasal vowel, a diphthong or a closed syllable) and
 * otherwise on the antepenult; a word of one or two syllables stresses its
 * first.
 *
 * @module
 */

/** The stress rules a caller may name and a table may move stress to. */
export const STRESS_RULES = [
    "first syllable",
    "by weight",
    "as marked",
    "penultimate",
    "penultimate or final",
    "final",
];

/** The condition words a Where cell may use, besides `after` and `before` phrases. */
export const CONDITIONS = [
    "anywhere",
    "word start",
    "word end",
    "between vowels",
    "after a single consonant",
    "open syllable",
    "closed syllable",
    "stressed syllable",
    "unstressed syllable",
];

/** The sound classes an `after` or `before` phrase may name. */
export const CLASSES = {
    "a vowel": (sound) => sound.kind === "V",
    "a consonant": (sound) => sound.kind === "C",
    "a liquid": (sound) => sound.kind === "C" && /^[lr]$/.test(sound.base),
    "a nasal": (sound) => sound.kind === "C" && /^[mn]$/.test(sound.base),
};

/** The operations a Change cell may name instead of a substitution. */
export const OPERATIONS = [
    "like vowels merge, long",
    "like vowels merge, short",
    "unlike vowels merge to the first, long",
    "stress moves to the <rule>",
    "acute on the stressed vowel",
    "grave on the stressed vowel",
    "acute on a stressed short vowel, circumflex on a long one",
    "no stress mark",
];

/** Consonant digraphs cut as one sound unless the caller names its own. */
export const DEFAULT_DIGRAPHS = [
    "t'",
    "d'",
    "k'",
    "g'",
    "ph",
    "th",
    "kh",
    "dh",
    "gh",
    "sh",
    "ch",
    "zh",
    "ts",
    "rr",
    "nh",
    "lh",
];

/** The diphthongs of the ancient tongue, kept whole unless the caller names its own. */
export const DEFAULT_DIPHTHONGS = ["ai", "au", "ei", "oi"];

/** Clusters that open a syllable, so the vowel before them is in an open syllable. */
const DEFAULT_ONSETS = /^[ptkbdg]h?[lr]$/;

const ACUTE = "́";
const GRAVE = "̀";
const CIRCUMFLEX = "̂";
const TILDE = "̃";
const MACRON = "̄";
const DIAERESIS = "̈";

/** The letters that are vowels, before any mark. */
const VOWEL_LETTERS = new Set(["a", "e", "i", "o", "u", "y", "ë"]);

/**
 * A sound.
 * @typedef {object} Sound
 * @property {"C"|"V"} kind
 * @property {string} base - The letter or digraph, no marks; `ë` keeps its diaeresis.
 * @property {boolean} [long]
 * @property {boolean} [nasal]
 * @property {boolean} [stress]
 */

/**
 * Cut a written word into sounds.
 *
 * @param {string} word - The word, marks and all.
 * @param {{digraphs?: string[]}} [options]
 * @returns {Sound[]}
 */
export function tokenize(word, options = {}) {
    const digraphs = [...(options.digraphs ?? DEFAULT_DIGRAPHS)].sort(
        (a, b) => b.length - a.length,
    );
    const text = word.normalize("NFD");
    const out = [];
    let i = 0;
    while (i < text.length) {
        const char = text[i];
        if (/\p{M}/u.test(char)) {
            // A stray mark with nothing to sit on is dropped.
            i += 1;
            continue;
        }
        const lower = char.toLowerCase();
        if (VOWEL_LETTERS.has(lower) || (lower === "e" && text[i + 1] === DIAERESIS)) {
            const sound = { kind: "V", base: lower, long: false, nasal: false, stress: false };
            i += 1;
            while (i < text.length && /\p{M}/u.test(text[i])) {
                const mark = text[i];
                if (mark === CIRCUMFLEX || mark === MACRON) sound.long = true;
                else if (mark === TILDE) sound.nasal = true;
                else if (mark === ACUTE || mark === GRAVE) sound.stress = true;
                else if (mark === DIAERESIS && sound.base === "e") sound.base = "ë";
                i += 1;
            }
            out.push(sound);
            continue;
        }
        // A consonant: the longest digraph that fits, else the letter.
        const rest = text.slice(i).toLowerCase();
        const digraph = digraphs.find((d) => rest.startsWith(d.normalize("NFD")));
        if (digraph) {
            out.push({ kind: "C", base: digraph });
            i += digraph.normalize("NFD").length;
            continue;
        }
        out.push({ kind: "C", base: lower });
        i += 1;
        while (i < text.length && /\p{M}/u.test(text[i])) i += 1;
    }
    return out;
}

/**
 * The written form of one vowel under a mark policy.
 *
 * @param {Sound} sound
 * @param {{mode: string, mark: boolean}} policy - How stress is written, and whether this word takes a mark at all.
 */
function writeVowel(sound, policy) {
    let out = sound.base.normalize("NFD");
    if (sound.nasal) out += TILDE;
    else if (sound.long) out += CIRCUMFLEX;
    else if (sound.stress && policy.mark) {
        if (policy.mode === "acute" || policy.mode === "acute-or-circumflex") out += ACUTE;
        else if (policy.mode === "grave") out += GRAVE;
    }
    return out;
}

/**
 * Write sounds back as a word.
 *
 * @param {Sound[]} sounds
 * @param {{mode?: string, minSyllables?: number, diphthongs?: string[], capital?: boolean}} [policy] -
 *   `mode` is `none`, `acute`, `grave` or `acute-or-circumflex`; `minSyllables`
 *   is the fewest syllables a word needs to take a stress mark; `capital`
 *   writes the first letter upper case.
 * @returns {string}
 */
export function render(sounds, policy = {}) {
    const mode = policy.mode ?? "none";
    const count = nuclei(sounds, new Set(policy.diphthongs ?? DEFAULT_DIPHTHONGS)).length;
    const mark = mode !== "none" && count >= (policy.minSyllables ?? 1);
    const text = sounds
        .map((s) => (s.kind === "V" ? writeVowel(s, { mode, mark }) : s.base))
        .join("")
        .normalize("NFC");
    if (!policy.capital || !text) return text;
    const first = text.normalize("NFD");
    return (first[0].toUpperCase() + first.slice(1)).normalize("NFC");
}

/** A word with every mark stripped. */
export function demark(word) {
    return word.normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");
}

/** The sounds' nuclei: each vowel's index, a listed diphthong counted once at its first vowel. */
function nuclei(sounds, diphthongs) {
    const out = [];
    for (let i = 0; i < sounds.length; i += 1) {
        if (sounds[i].kind !== "V") continue;
        const prev = sounds[i - 1];
        if (
            prev &&
            prev.kind === "V" &&
            out.length &&
            out[out.length - 1].at === i - 1 &&
            diphthongs.has(prev.base + sounds[i].base)
        ) {
            out[out.length - 1].diphthong = true;
            continue;
        }
        out.push({ at: i, diphthong: false });
    }
    return out;
}

/** The index of the sound a syllable's vowel (or diphthong) ends at. */
function nucleusEnd(sounds, nucleus) {
    return nucleus.diphthong ? nucleus.at + 1 : nucleus.at;
}

/**
 * Whether the syllable whose vowel sits at `at` is open.
 *
 * @param {Sound[]} sounds
 * @param {number} at - The index of the vowel.
 * @param {{diphthongs: Set<string>, onsets: RegExp}} ctx
 */
function isOpen(sounds, at, ctx) {
    const list = nuclei(sounds, ctx.diphthongs);
    const nucleus = list.find((n) => n.at === at || (n.diphthong && n.at + 1 === at));
    const end = nucleus ? nucleusEnd(sounds, nucleus) : at;
    const following = [];
    for (let i = end + 1; i < sounds.length && sounds[i].kind === "C"; i += 1)
        following.push(sounds[i].base);
    const vowelFollows = end + 1 + following.length < sounds.length;
    if (following.length === 0) return true;
    if (!vowelFollows) return false;
    if (following.length === 1) return true;
    return following.length === 2 && ctx.onsets.test(following.join(""));
}

/** Whether a nucleus is heavy: long or nasal, a diphthong, or in a closed syllable. */
function isHeavy(sounds, nucleus, ctx) {
    const vowel = sounds[nucleus.at];
    if (vowel.long || vowel.nasal || nucleus.diphthong) return true;
    return !isOpen(sounds, nucleus.at, ctx);
}

/**
 * The index of the vowel that carries the stress under a rule.
 *
 * @param {Sound[]} sounds
 * @param {string} rule - One of `STRESS_RULES`.
 * @param {{diphthongs: Set<string>, onsets: RegExp}} ctx
 * @returns {number} The index, or -1 for a word with no vowel.
 */
export function stressIndex(sounds, rule, ctx) {
    const list = nuclei(sounds, ctx.diphthongs);
    if (!list.length) return -1;
    const last = list.length - 1;
    switch (rule) {
        case "first syllable":
            return list[0].at;
        case "final":
            return list[last].at;
        case "penultimate":
            return list[Math.max(0, last - 1)].at;
        case "penultimate or final": {
            const endsOnVowel = sounds[sounds.length - 1].kind === "V";
            return endsOnVowel ? list[Math.max(0, last - 1)].at : list[last].at;
        }
        case "by weight": {
            if (list.length <= 2) return list[0].at;
            const penult = list[last - 1];
            return isHeavy(sounds, penult, ctx) ? penult.at : list[last - 2].at;
        }
        case "as marked": {
            const marked = sounds.findIndex((s) => s.kind === "V" && s.stress);
            return marked === -1 ? list[0].at : marked;
        }
        default:
            return -1;
    }
}

/** Place the stress on one vowel and nowhere else. */
function setStress(sounds, at) {
    for (const s of sounds) if (s.kind === "V") s.stress = false;
    if (at >= 0 && sounds[at]) sounds[at].stress = true;
}

/** The class a capital letter in a pattern stands for, or null. */
function classOf(letter) {
    return (
        {
            C: CLASSES["a consonant"],
            V: CLASSES["a vowel"],
            L: CLASSES["a liquid"],
            N: CLASSES["a nasal"],
        }[letter] ?? null
    );
}

/**
 * Cut the content of a pattern code span into pattern sounds: class letters
 * become class matchers and everything else a literal sound.
 */
function patternOf(text, options) {
    const out = [];
    let rest = text.normalize("NFC");
    while (rest.length) {
        const letter = rest[0];
        if (classOf(letter)) {
            out.push({ cls: letter });
            rest = rest.slice(1);
            continue;
        }
        // Take the longest run of non-class characters and tokenize it.
        let run = "";
        while (rest.length && !classOf(rest[0])) {
            run += rest[0];
            rest = rest.slice(1);
        }
        for (const sound of tokenize(run, options)) out.push({ sound });
    }
    return out;
}

/** Whether two sounds are the same letter, length and nasality; stress is not compared. */
function sameSound(a, b) {
    if (a.kind !== b.kind || a.base !== b.base) return false;
    if (a.kind === "C") return true;
    return Boolean(a.long) === Boolean(b.long) && Boolean(a.nasal) === Boolean(b.nasal);
}

/**
 * Parse a Change cell.
 *
 * @param {string} cell
 * @param {{digraphs?: string[]}} [options]
 * @returns {{rules: Array<{from: object[], to: object[]}>, operation: object|null, problems: string[]}}
 */
export function parseChange(cell, options = {}) {
    const problems = [];
    const text = cell.trim();
    const hasArrow = /→|->|>/.test(text.replace(/`[^`]*`/g, ""));
    if (!hasArrow) {
        const operation = parseOperation(text);
        if (!operation) problems.push(`"${text}" is neither a substitution nor an operation`);
        return { rules: [], operation, problems };
    }
    const rules = [];
    for (const part of text.split(";")) {
        const match = part.trim().match(/^`([^`]*)`\s*(?:→|->|>)\s*`([^`]*)`$/u);
        if (!match) {
            problems.push(`"${part.trim()}" is not written \`sources\` → \`targets\``);
            continue;
        }
        const sources = match[1].trim().split(/\s+/).filter(Boolean);
        const targets = match[2].trim().split(/\s+/).filter(Boolean);
        if (!sources.length) {
            problems.push(`"${part.trim()}" names no source`);
            continue;
        }
        if (targets.length !== 1 && targets.length !== sources.length) {
            problems.push(
                `"${part.trim()}" pairs ${sources.length} source(s) with ${targets.length} target(s)`,
            );
            continue;
        }
        sources.forEach((source, i) => {
            const target = targets.length === 1 ? targets[0] : targets[i];
            const from = patternOf(source, options);
            const to = target === "—" || target === "-" ? [] : patternOf(target, options);
            if (!from.length) problems.push(`"${source}" is an empty source`);
            rules.push({ from, to });
        });
    }
    return { rules, operation: null, problems };
}

/** Parse an operation named in a Change cell, or return null. */
function parseOperation(text) {
    const t = text.trim().toLowerCase().replace(/\s+/g, " ");
    if (t === "like vowels merge, long") return { kind: "merge", like: true, long: true };
    if (t === "like vowels merge, short") return { kind: "merge", like: true, long: false };
    if (t === "unlike vowels merge to the first, long")
        return { kind: "merge", like: false, long: true };
    const move = t.match(/^stress moves to the (.+)$/);
    if (move && STRESS_RULES.includes(move[1])) return { kind: "restress", rule: move[1] };
    const qualifier = " of a word of two syllables or more";
    const minSyllables = t.endsWith(qualifier) ? 2 : 1;
    const bare = t.endsWith(qualifier) ? t.slice(0, -qualifier.length) : t;
    if (bare === "acute on the stressed vowel")
        return { kind: "mark", mode: "acute", minSyllables };
    if (bare === "grave on the stressed vowel")
        return { kind: "mark", mode: "grave", minSyllables };
    if (bare === "acute on a stressed short vowel, circumflex on a long one")
        return { kind: "mark", mode: "acute-or-circumflex", minSyllables };
    if (bare === "no stress mark") return { kind: "mark", mode: "none", minSyllables };
    return null;
}

/**
 * Parse a Where cell into conditions.
 *
 * @param {string} cell
 * @param {{digraphs?: string[]}} [options]
 * @returns {{conditions: object[], problems: string[]}}
 */
export function parseWhere(cell, options = {}) {
    const problems = [];
    const conditions = [];
    const text = cell.trim();
    if (!text || text === "—" || text === "-" || text.toLowerCase() === "anywhere")
        return { conditions, problems };
    for (const raw of text.split(/;|\band\b/)) {
        const part = raw.trim();
        if (!part) continue;
        const lower = part.toLowerCase();
        if (CONDITIONS.includes(lower)) {
            if (lower !== "anywhere") conditions.push({ kind: lower });
            continue;
        }
        const side = lower.match(/^(after|before)\s+(.+)$/);
        if (side) {
            const matchers = [];
            let ok = true;
            for (const alt of side[2].split(/\bor\b|,/).map((s) => s.trim())) {
                if (!alt) continue;
                if (CLASSES[alt]) matchers.push(CLASSES[alt]);
                else {
                    const span = alt.match(/^`([^`]+)`$/);
                    if (!span) {
                        ok = false;
                        break;
                    }
                    const wanted = tokenize(span[1], options);
                    matchers.push((sound, sounds, at) => {
                        // The listed sounds end (for `after`) or start (for `before`) at this position.
                        if (side[1] === "after") {
                            const start = at - wanted.length + 1;
                            if (start < 0) return false;
                            return wanted.every((w, k) => sameSound(w, sounds[start + k]));
                        }
                        return wanted.every(
                            (w, k) => sounds[at + k] && sameSound(w, sounds[at + k]),
                        );
                    });
                }
            }
            if (ok) {
                conditions.push({ kind: side[1], matchers });
                continue;
            }
        }
        problems.push(`"${part}" is not a condition the engine knows`);
    }
    return { conditions, problems };
}

/**
 * Read an ordered change table from a note.
 *
 * @param {string} text - The note, or the section holding the table.
 * @param {string} [heading] - The heading of the section holding the table; the
 *   whole text is read when omitted.
 * @param {{digraphs?: string[]}} [options]
 * @returns {{steps: Array<{step: string, change: string, where: string, rules: object[],
 *   operation: object|null, conditions: object[], at: number}>, problems: Array<{at: number,
 *   message: string}>, at: number|null}} The steps in order, the problems with
 *   each, and where the table starts; `at` is null when the heading is absent.
 */
export function readChanges(text, heading, options = {}) {
    let body = text;
    let base = 0;
    if (heading) {
        const marker = `\n${heading}\n`;
        const found = text.startsWith(`${heading}\n`) ? -1 : text.indexOf(marker);
        if (found === -1 && !text.startsWith(`${heading}\n`))
            return { steps: [], problems: [], at: null };
        base = found + 1;
        const depth = heading.match(/^#+/)[0].length;
        const lines = text.slice(base).split("\n");
        let length = lines[0].length + 1;
        for (let i = 1; i < lines.length; i += 1) {
            const mark = lines[i].match(/^(#+)\s/);
            if (mark && mark[1].length <= depth) break;
            length += lines[i].length + 1;
        }
        body = text.slice(base, base + length);
    }
    const steps = [];
    const problems = [];
    let at = base;
    let header = null;
    let sawRule = false;
    for (const line of body.split("\n")) {
        const here = at;
        at += line.length + 1;
        if (!line.trim().startsWith("|")) {
            header = null;
            sawRule = false;
            continue;
        }
        const cells = line
            .split(/(?<!\\)\|/)
            .slice(1, -1)
            .map((c) => c.trim());
        if (header === null) {
            header = cells.map((c) => c.toLowerCase());
            continue;
        }
        if (!sawRule && cells.every((c) => /^:?-+:?$/.test(c))) {
            sawRule = true;
            continue;
        }
        const stepCol = header.indexOf("step");
        const changeCol = header.indexOf("change");
        const whereCol = header.indexOf("where");
        if (changeCol === -1) continue;
        const change = cells[changeCol] ?? "";
        const where = whereCol === -1 ? "" : (cells[whereCol] ?? "");
        const parsedChange = parseChange(change, options);
        const parsedWhere = parseWhere(where, options);
        for (const p of [...parsedChange.problems, ...parsedWhere.problems])
            problems.push({ at: here, message: p });
        steps.push({
            step: stepCol === -1 ? String(steps.length + 1) : cells[stepCol],
            change,
            where,
            rules: parsedChange.rules,
            operation: parsedChange.operation,
            conditions: parsedWhere.conditions,
            at: here,
        });
    }
    return { steps, problems, at: base };
}

/** The vowel a match is about: the first vowel in it, else the nearest before it. */
function matchVowel(sounds, start, end) {
    for (let i = start; i < end; i += 1) if (sounds[i].kind === "V") return i;
    for (let i = start - 1; i >= 0; i -= 1) if (sounds[i].kind === "V") return i;
    return -1;
}

/** Whether every condition holds for a match at [start, end). */
function holds(conditions, sounds, start, end, ctx) {
    for (const c of conditions) {
        switch (c.kind) {
            case "word start":
                if (start !== 0) return false;
                break;
            case "word end":
                if (end !== sounds.length) return false;
                break;
            case "between vowels":
                if (!(sounds[start - 1]?.kind === "V" && sounds[end]?.kind === "V")) return false;
                break;
            case "after": {
                const prev = sounds[start - 1];
                if (!prev || !c.matchers.some((m) => m(prev, sounds, start - 1))) return false;
                break;
            }
            case "before": {
                const next = sounds[end];
                if (!next || !c.matchers.some((m) => m(next, sounds, end))) return false;
                break;
            }
            case "after a single consonant": {
                const prev = sounds[start - 1];
                if (!prev || prev.kind !== "C") return false;
                const before = sounds[start - 2];
                if (before && before.kind === "C") return false;
                break;
            }
            case "open syllable":
            case "closed syllable": {
                const v = matchVowel(sounds, start, end);
                if (v === -1) return false;
                const open = isOpen(sounds, v, ctx);
                if (c.kind === "open syllable" ? !open : open) return false;
                break;
            }
            case "stressed syllable":
            case "unstressed syllable": {
                const v = matchVowel(sounds, start, end);
                if (v === -1) return false;
                const stressed = Boolean(sounds[v].stress);
                if (c.kind === "stressed syllable" ? !stressed : stressed) return false;
                break;
            }
            default:
                return false;
        }
    }
    return true;
}

/** Try one rule at a position; the length matched, or 0. */
function matchAt(rule, sounds, at) {
    let i = at;
    for (const p of rule.from) {
        const s = sounds[i];
        if (!s) return 0;
        if (p.cls) {
            if (!classOf(p.cls)(s)) return 0;
        } else if (!sameSound(p.sound, s)) return 0;
        i += 1;
    }
    return i - at;
}

/** Build the replacement for a matched span. */
function replacement(rule, sounds, start, end) {
    const matched = sounds.slice(start, end);
    const byClass = {};
    for (let i = 0; i < rule.from.length; i += 1) {
        const p = rule.from[i];
        if (p.cls) (byClass[p.cls] ??= []).push(matched[i]);
    }
    const used = {};
    const out = [];
    for (const p of rule.to) {
        if (p.cls) {
            const list = byClass[p.cls] ?? [];
            const k = used[p.cls] ?? 0;
            used[p.cls] = k + 1;
            if (list[k]) out.push({ ...list[k], stress: false });
            else if (p.cls === "V") {
                // Copy the nearest vowel to the left of the match, short.
                let v = null;
                for (let i = start - 1; i >= 0; i -= 1)
                    if (sounds[i].kind === "V") {
                        v = sounds[i];
                        break;
                    }
                if (!v) v = matched.find((s) => s.kind === "V") ?? { kind: "V", base: "a" };
                out.push({ kind: "V", base: v.base, long: false, nasal: false, stress: false });
            }
            continue;
        }
        out.push({ ...p.sound, stress: false, marked: Boolean(p.sound.stress) });
    }
    // Stress carried by the matched span moves to the vowel of the replacement the
    // target marks with an acute, else to its first vowel, or on to the next vowel
    // of the word when the replacement has none.
    const stressed = matched.some((s) => s.kind === "V" && s.stress);
    if (stressed) {
        const v = out.find((s) => s.kind === "V" && s.marked) ?? out.find((s) => s.kind === "V");
        if (v) v.stress = true;
    }
    for (const s of out) delete s.marked;
    return { out, stressed };
}

/** Apply one step to the sounds, in place of the array returned. */
function applyStep(sounds, step, ctx) {
    if (step.operation) return applyOperation(sounds, step.operation, ctx);
    let i = 0;
    let out = sounds;
    let carry = false;
    while (i < out.length) {
        let advanced = false;
        for (const rule of step.rules) {
            const length = matchAt(rule, out, i);
            if (!length) continue;
            if (!holds(step.conditions, out, i, i + length, ctx)) continue;
            const { out: made, stressed } = replacement(rule, out, i, i + length);
            out = [...out.slice(0, i), ...made, ...out.slice(i + length)];
            if (stressed && !made.some((s) => s.kind === "V")) carry = true;
            i += made.length;
            advanced = true;
            break;
        }
        if (!advanced) {
            if (carry && out[i].kind === "V") {
                out[i].stress = true;
                carry = false;
            }
            i += 1;
        }
    }
    if (carry) {
        // The stressed vowel fell at the end of the word: stress the last vowel left.
        for (let k = out.length - 1; k >= 0; k -= 1)
            if (out[k].kind === "V") {
                out[k].stress = true;
                break;
            }
    }
    return out;
}

/** Apply a named operation. */
function applyOperation(sounds, op, ctx) {
    if (op.kind === "restress") {
        const copy = sounds.map((s) => ({ ...s }));
        setStress(copy, stressIndex(copy, op.rule, ctx));
        return copy;
    }
    if (op.kind === "mark") {
        ctx.policy = { ...ctx.policy, mode: op.mode, minSyllables: op.minSyllables };
        return sounds;
    }
    if (op.kind === "merge") {
        const out = [];
        for (const s of sounds) {
            const prev = out[out.length - 1];
            if (
                prev &&
                prev.kind === "V" &&
                s.kind === "V" &&
                !ctx.diphthongs.has(prev.base + s.base) &&
                (op.like ? prev.base === s.base : prev.base !== s.base)
            ) {
                prev.long = op.long;
                prev.nasal = prev.nasal || s.nasal;
                prev.stress = prev.stress || s.stress;
                continue;
            }
            out.push({ ...s });
        }
        return out;
    }
    return sounds;
}

/**
 * Derive a word through an ordered table.
 *
 * @param {string} word - The source form, marks and all.
 * @param {ReturnType<typeof readChanges>["steps"]} steps - From `readChanges`.
 * @param {{stress?: string, digraphs?: string[], diphthongs?: string[], onsets?: RegExp}} [options] -
 *   `stress` names how the source tongue places stress (one of `STRESS_RULES`,
 *   default `as marked`); `diphthongs` are the pairs kept whole.
 * @returns {{form: string, trace: Array<{step: string, form: string}>}} The
 *   derived form and the form after each step. A capital on the source form is
 *   kept; everything else is written lower case.
 */
export function derive(word, steps, options = {}) {
    const diphthongs = options.diphthongs ?? DEFAULT_DIPHTHONGS;
    const capital = /^\p{Lu}/u.test(word);
    const ctx = {
        diphthongs: new Set(diphthongs),
        onsets: options.onsets ?? DEFAULT_ONSETS,
        policy: { mode: "none", minSyllables: 1, diphthongs, capital },
    };
    const tokenOptions = { digraphs: options.digraphs };
    let sounds = tokenize(word, tokenOptions);
    setStress(sounds, stressIndex(sounds, options.stress ?? "as marked", ctx));
    const trace = [];
    for (const step of steps) {
        sounds = applyStep(sounds, step, ctx);
        trace.push({ step: step.step, form: render(sounds, ctx.policy) });
    }
    return { form: render(sounds, ctx.policy), trace };
}

/**
 * Whether a syllable is open, for callers that reason about words themselves.
 *
 * @param {Sound[]} sounds
 * @param {number} at - The index of the vowel.
 * @param {{diphthongs?: string[], onsets?: RegExp}} [options]
 */
export function openSyllable(sounds, at, options = {}) {
    return isOpen(sounds, at, {
        diphthongs: new Set(options.diphthongs ?? DEFAULT_DIPHTHONGS),
        onsets: options.onsets ?? DEFAULT_ONSETS,
    });
}

/** How many syllables a word has, a listed diphthong counting once. */
export function syllableCount(word, options = {}) {
    return nuclei(
        tokenize(word, { digraphs: options.digraphs }),
        new Set(options.diphthongs ?? DEFAULT_DIPHTHONGS),
    ).length;
}
