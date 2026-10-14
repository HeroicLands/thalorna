/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The local Earth word lists, and the rule that judges a coined word against them.
 *
 * **The rule.** A coined word is refused only for copying: it is an error when
 * it has the same form and the same meaning as a word of a source language its
 * culture is modelled on. Every other match is advisory, a warning that never
 * fails a run: a match in a list that is no source language, a match in a source
 * language with another meaning, and a match in a source language whose list
 * carries no gloss to compare. Earth proper names are refused by
 * `lint:earth-names`, and the morpheme lists below stay strict; neither is
 * judged by this rule.
 *
 * **Source languages.** Each guard declares the source languages of its
 * culture beside its configuration, as list names: an array for the whole
 * lexicon, or an object from tongue tag to array where the tongues of one page
 * are modelled on different languages. A lexicon modelled on no Earth language
 * declares none, and every match against it is advisory. A lexicon that
 * borrows from its source languages by design exports `BORROWS = true` beside
 * them, with the owner's reason in its JSDoc; its copies are warnings that name the source
 * word, and every other match is judged as for any lexicon.
 *
 * **The lists.** Every `<language>.txt` in the word-list directories holds one
 * form per line. Lists of one name in several directories are merged. A
 * `<language>.tsv` beside it carries glosses, one entry per line, the form in
 * the first tab-separated column and the gloss in the last, as a kaikki or
 * Wiktionary extract writes `form`, part of speech and gloss. A form may stand
 * on several lines, one per sense. Every `morphemes/*.txt` beneath a directory
 * holds Earth proper names and source-language morphemes a word may not
 * contain: a plain line matches anywhere, `-x` only at a word's end and `x-`
 * only at its start. The repository holds no list.
 *
 * **Meaning.** Two glosses mean the same when they share content words: each
 * gloss is lowercased, its marks stripped, split into words of letters, and
 * cleared of the function words and dictionary labels in `GLOSS_STOPWORDS`; a
 * plural `-s`, `-es` or `-ies` is reduced to its singular. The glosses agree
 * when the words they share are at least `SAME_MEANING` (one half) of the
 * shorter gloss's words. So "the road" agrees with "a path, road, way", and "to
 * keep watch" with "to keep, hold"; "a river" does not agree with "a kind of
 * reed". A form matching several senses agrees when any one does.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";

/**
 * Reduce a form to its comparison shape: lowercase, marks stripped (`ë` becomes
 * `e`), `c` and `q` become `k`, `w` becomes `v`, `ph` becomes `f`, `th` and `dh`
 * become `t` and `d`, `kh` and `gh` become `k` and `g`, doubled letters
 * collapse, anything that is not a letter is dropped.
 *
 * @param {string} form
 * @returns {string}
 */
export function normalize(form) {
    let s = form
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/[^\p{L}]/gu, "");
    s = s.replace(/[cq]/g, "k").replace(/w/g, "v");
    s = s.replace(/ph/g, "f").replace(/th/g, "t").replace(/dh/g, "d");
    s = s.replace(/kh/g, "k").replace(/gh/g, "g");
    return s.replace(/(\p{L})\1+/gu, "$1");
}

/**
 * The checkout whose `nogit/` holds the lists: this one, or the main checkout
 * when this is a worktree under `.claude/worktrees/`.
 *
 * @param {string} [cwd]
 * @returns {string}
 */
export function checkoutRoot(cwd = process.cwd()) {
    if (fs.existsSync(path.join(cwd, "nogit"))) return cwd;
    const at = cwd.indexOf(`${path.sep}.claude${path.sep}worktrees${path.sep}`);
    return at === -1 ? cwd : cwd.slice(0, at);
}

/**
 * The word-list directories: each `--wordlists <dir>`, else the paths in `variable`
 * (joined by the platform's delimiter), else `nogit/wordlists` and
 * `nogit/real-word-audit/lists` of the checkout.
 *
 * @param {string[]} [argv]
 * @param {Record<string, string|undefined>} [env]
 * @param {string} [cwd]
 * @param {string} [variable] - The environment variable naming the directories.
 * @returns {string[]}
 */
export function listDirs(
    argv = [],
    env = process.env,
    cwd = process.cwd(),
    variable = "KHAZRYN_WORDLISTS",
) {
    const given = [];
    for (let i = 0; i < argv.length; i += 1) {
        if (argv[i] === "--wordlists") given.push(argv[i + 1]);
        else if (argv[i].startsWith("--wordlists=")) given.push(argv[i].slice(12));
    }
    if (given.length) return given;
    if (env[variable]) return env[variable].split(path.delimiter).filter(Boolean);
    const root = checkoutRoot(cwd);
    return [path.join(root, "nogit/wordlists"), path.join(root, "nogit/real-word-audit/lists")];
}

/**
 * The local Earth lists: whole-word lists by name, their glosses by name and
 * normalized form, and morphemes with where they match.
 *
 * @param {string[]} dirs - The word-list directories.
 * @returns {{lists: Map<string, Set<string>>, glosses: Map<string, Map<string, string[]>>, morphemes: {form: string, at: "any"|"start"|"end"}[]}}
 */
export function loadEarth(dirs) {
    const lists = new Map();
    const glosses = new Map();
    const morphemes = [];
    const isDir = (d) => fs.existsSync(d) && fs.statSync(d).isDirectory();
    for (const dir of dirs.filter(isDir)) {
        for (const name of fs.readdirSync(dir).sort()) {
            if (!name.endsWith(".txt")) continue;
            const key = name.slice(0, -4);
            const set = lists.get(key) ?? new Set();
            for (const line of fs.readFileSync(path.join(dir, name), "utf8").split("\n")) {
                const n = normalize(line);
                if (n) set.add(n);
            }
            if (set.size) lists.set(key, set);
            const tsv = path.join(dir, `${key}.tsv`);
            if (!fs.existsSync(tsv)) continue;
            const senses = glosses.get(key) ?? new Map();
            for (const line of fs.readFileSync(tsv, "utf8").split("\n")) {
                const cells = line.split("\t");
                if (cells.length < 2) continue;
                const n = normalize(cells[0]);
                const gloss = cells[cells.length - 1].trim();
                if (!n || !gloss) continue;
                if (!senses.has(n)) senses.set(n, []);
                if (!senses.get(n).includes(gloss)) senses.get(n).push(gloss);
            }
            glosses.set(key, senses);
        }
        const mdir = path.join(dir, "morphemes");
        if (!isDir(mdir)) continue;
        for (const name of fs.readdirSync(mdir).sort()) {
            if (!name.endsWith(".txt")) continue;
            for (const raw of fs.readFileSync(path.join(mdir, name), "utf8").split("\n")) {
                const line = raw.trim();
                if (!line || line.startsWith("#")) continue;
                const at =
                    line.startsWith("-") ? "end"
                    : line.endsWith("-") ? "start"
                    : "any";
                const form = normalize(line);
                if (form) morphemes.push({ form, at });
            }
        }
    }
    return { lists, glosses, morphemes };
}

/** Function words and dictionary labels a gloss's meaning does not rest on. */
export const GLOSS_STOPWORDS = new Set(
    (
        "a an the of to in on at by for from with into onto upon and or nor but as is are be " +
        "been being was were it its this that these those which who whom whose what one ones " +
        "his her their our your my he she they we you i me him them us so such than then also " +
        "very any some each every all no etc especially usually often used kind sort type " +
        "alternative form forms spelling variant obsolete archaic dated rare plural singular " +
        "genitive dative accusative nominative vocative ablative instrumental locative " +
        "inflection participle romanization transliteration abbreviation synonym literally " +
        "figuratively something someone"
    ).split(" "),
);

/** The share of the shorter gloss's content words two glosses must share to mean the same. */
export const SAME_MEANING = 0.5;

/** A word reduced to its singular: `-ies` to `-y`, `-es` after a sibilant, a lone `-s`. */
function singular(word) {
    if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
    if (word.length > 4 && /(s|x|z|ch|sh)es$/.test(word)) return word.slice(0, -2);
    if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
    return word;
}

/**
 * The content words of a gloss. A possessive `'s` is dropped, not read as a
 * word.
 *
 * @param {string} gloss
 * @returns {Set<string>}
 */
export function glossWords(gloss = "") {
    const words = gloss
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/['\u2019]s\b/g, "")
        .match(/[a-z]+/g);
    return new Set((words ?? []).filter((w) => !GLOSS_STOPWORDS.has(w)).map(singular));
}

/**
 * Whether two glosses mean the same: the content words they share make up at
 * least `SAME_MEANING` of the shorter gloss's content words.
 *
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
export function sameMeaning(a, b) {
    const left = glossWords(a);
    const right = glossWords(b);
    if (!left.size || !right.size) return false;
    let shared = 0;
    for (const w of left) if (right.has(w)) shared += 1;
    return shared / Math.min(left.size, right.size) >= SAME_MEANING;
}

/**
 * The source languages declared for a tongue.
 *
 * @param {string[]|Record<string, string[]>|undefined} sources - An array for
 *   the whole lexicon, or arrays by tongue tag.
 * @param {string|null} [tag] - The tongue.
 * @returns {string[]}
 */
export function sourcesFor(sources, tag = null) {
    if (!sources) return [];
    if (Array.isArray(sources)) return sources;
    return sources[tag] ?? [];
}

/**
 * Every source language a declaration names, whatever the tongue.
 *
 * @param {string[]|Record<string, string[]>|undefined} sources
 * @returns {string[]}
 */
export function allSources(sources) {
    if (!sources) return [];
    if (Array.isArray(sources)) return sources;
    return [...new Set(Object.values(sources).flat())];
}

/**
 * Judge one match of a coined form in one list, by the rule this module states.
 *
 * @param {object} input
 * @param {string} input.list - The list the form matched.
 * @param {string} input.norm - The normalized form.
 * @param {string} [input.gloss] - The coined word's gloss.
 * @param {string[]} [input.sources] - The source languages of its tongue.
 * @param {Map<string, Map<string, string[]>>} [input.glosses] - Glosses by list.
 * @param {boolean} [input.borrows] - Whether the lexicon borrows from its
 *   source languages by design, so a copy is a warning.
 * @returns {{severity: "error"|"warning", reason: string}} The reason continues
 *   a clause naming the match, as in `is a word in the latin list` + reason.
 */
export function judge({
    list,
    norm,
    gloss = "",
    sources = [],
    glosses = new Map(),
    borrows = false,
}) {
    if (!sources.includes(list))
        return { severity: "warning", reason: ", which is no source language" };
    const senses = glosses.get(list)?.get(norm) ?? [];
    if (!senses.length)
        return {
            severity: "warning",
            reason: ", a source language whose list carries no gloss for it; review it for copying",
        };
    if (!glossWords(gloss).size)
        return {
            severity: "warning",
            reason: ", a source language, and carries no gloss to compare; review it for copying",
        };
    const same = senses.find((sense) => sameMeaning(gloss, sense));
    if (same && borrows)
        return {
            severity: "warning",
            reason: `, a source language the lexicon borrows from, and is its word for "${same}"`,
        };
    if (same)
        return {
            severity: "error",
            reason: `, a source language, and copies its word for "${same}"`,
        };
    return { severity: "warning", reason: ", a source language, with another meaning" };
}

/**
 * Every Earth list and morpheme a form matches, each judged. A list match is
 * judged by the copying rule; a morpheme match is an error.
 *
 * @param {string} form - The form.
 * @param {ReturnType<typeof loadEarth>} earth - The lists.
 * @param {{gloss?: string, sources?: string[], borrows?: boolean, minLength?: number}} [coined] - The
 *   form's gloss, the source languages of its tongue, whether its lexicon
 *   borrows from them, and the shortest normalized form compared with the
 *   whole-word lists (three letters unless a lexicon of short syllables says
 *   otherwise).
 * @returns {{severity: "error"|"warning", message: string}[]} One per match.
 */
export function earthHits(
    form,
    earth,
    { gloss = "", sources = [], borrows = false, minLength = 3 } = {},
) {
    const out = [];
    const n = normalize(form);
    if (!n) return out;
    if (n.length >= minLength) {
        for (const [list, entries] of earth.lists) {
            if (!entries.has(n)) continue;
            const { severity, reason } = judge({
                list,
                norm: n,
                gloss,
                sources,
                glosses: earth.glosses ?? new Map(),
                borrows,
            });
            out.push({ severity, message: `is a word in the ${list} list${reason}` });
        }
    }
    for (const m of earth.morphemes) {
        const hit =
            m.at === "end" ? n.endsWith(m.form)
            : m.at === "start" ? n.startsWith(m.form)
            : n.includes(m.form);
        if (hit && n !== m.form)
            out.push({ severity: "error", message: `contains the Earth morpheme \`${m.form}\`` });
        else if (hit)
            out.push({ severity: "error", message: "is an Earth morpheme or proper name" });
    }
    const seen = new Set();
    return out.filter((h) => !seen.has(h.message) && seen.add(h.message));
}
