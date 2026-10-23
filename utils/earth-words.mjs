/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Earth-word guard (`npm run lint:earth-words`).
 *
 * Every word of a language note (`data.words[]`) is compared with word lists
 * the person running the check keeps locally. The repository holds no list and
 * no word of any real language.
 *
 * - **An Earth collision is an error.** The word's normalized form equals a
 *   whole word in a list of the language its culture is modelled on
 *   (`SOURCES`). Form alone decides it, except for the two languages in
 *   `MEANING_REQUIRED`, whose short words collide constantly: there the word
 *   must also share a meaning with the list's gloss. A match in any other
 *   list is coincidence and is not reported, and a stem or root inside a word
 *   never counts, so a stem or affix written with a hyphen at either end
 *   (`hrafn-`, `-ar`) is not compared. A language with no human model has no
 *   list and no check.
 *
 * **The lists.** Every `<language>.txt` in the word-list directories holds one
 * form per line; lists of one name in several directories merge. A
 * `<language>.tsv` beside it carries glosses, one entry per line, the form in
 * the first tab-separated column and the gloss in the last. A form may stand on
 * several lines, one per sense. A form of fewer than three letters is not
 * compared.
 *
 * **Meaning.** Where it is required, two glosses mean the same when they share content words: each
 * gloss is lowercased, its marks stripped and split into words of letters,
 * cleared of the function words and dictionary labels in `GLOSS_STOPWORDS`, and
 * a plural `-s`, `-es` or `-ies` reduced to its singular. The glosses agree
 * when the words they share are at least half the shorter gloss's words. A form
 * with several senses agrees when any one does.
 *
 * **The directories** are each `--wordlists <dir>`, else the `KHAZRYN_WORDLISTS`
 * environment variable (paths joined by the platform's delimiter), else
 * `lists/` and `base/` of an `earth-wordlists` clone beside the checkout (beside
 * the main checkout inside a worktree under `.claude/worktrees/`). The lists
 * are private to the person who keeps them, so a machine without them is the
 * ordinary case: when no directory holds a list, the check says so once on
 * stderr and exits 0.
 *
 * Findings are `file:line:column: severity: message`, to stderr; the summary
 * goes to stdout. The exit status is 1 when there is an error.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** Where the language notes live. */
const LANGUAGES_DIR = "assets/content/Skills/Languages";

/** The shortest normalized form compared with the whole-word lists. */
const MIN_LENGTH = 3;

/** The share of the shorter gloss's content words two glosses must share to mean the same. */
const SAME_MEANING = 0.5;

/**
 * The model languages each language note is written after, as list names, by
 * the note's file name. A note absent here, or with an empty list, has no human
 * model and no check.
 */
export const SOURCES = {
    "Aelendi.md": ["welsh", "old-irish"],
    "Aelwythi.md": ["old-english"],
    "Atarzadi.md": ["persian"],
    "Bethuan.md": ["ancient-greek", "arabic"],
    "Byzarian.md": ["ancient-greek", "persian", "turkish"],
    "Dunhari.md": ["persian", "arabic"],
    "Ekpelu.md": ["ubangian"],
    "Elavendri.md": ["old-french", "breton"],
    "Helonic.md": ["ancient-greek"],
    "Jurthat.md": ["japanese"],
    "Khazari.md": ["khuzdul"],
    "Khazri.md": ["sogdian", "tajik", "hebrew"],
    "Khelathi.md": ["egyptian"],
    "Ki.ichek.md": ["yucatec-maya"],
    "Nordmal.md": ["old-norse"],
    "Nyaluban.md": ["sotho-tswana", "shona"],
    "Okharic.md": ["tamazight", "hausa"],
    "Provenzal.md": ["occitan", "galician", "portuguese"],
    "Sinale.md": ["finnish"],
    "Sowides.md": ["mongolian", "turkish"],
    "Tantsou.md": ["chinese"],
    "Taruzeli.md": ["akkadian", "phoenician"],
    "Tarveni.md": ["spanish", "basque"],
    "Valtari.md": ["lingua-franca"],
    "Varokhi.md": ["old-high-german", "old-saxon"],
    "Vedyari.md": ["sanskrit", "hindi"],
    "Vylari.md": ["latin"],
};

/** The notes whose words collide only when the meaning agrees as well as the form. */
export const MEANING_REQUIRED = new Set(["Tantsou.md", "Jurthat.md"]);

/** Function words and dictionary labels a gloss's meaning does not rest on. */
const GLOSS_STOPWORDS = new Set(
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

/**
 * Reduce a form to its comparison shape: lowercase, the letters the spelling
 * guide replaces written as it writes them (`þ` as `th`, `ð` as `dh`, `ŋ` as
 * `ng`, `ß` as `ss`, `æ` as `a`, `ø` as `o`, `œ` as `e`, `ç` as `s`), marks
 * stripped, `q` and a
 * `c` not followed by `h` become `k`, `w` becomes `v`, `ph` becomes `f`, `dh`
 * becomes `d`, `kh` becomes `k`, doubled letters collapse, and anything that is
 * not a letter is dropped. `th`, `gh` and `ch` are kept: a word spelled with one
 * of them is a different word from one spelled with `t`, `g` or `k`.
 *
 * @param {string} form
 * @returns {string}
 */
export function normalize(form) {
    const s = form
        .toLowerCase()
        .replace(/þ/g, "th")
        .replace(/ð/g, "dh")
        .replace(/ŋ/g, "ng")
        .replace(/ß/g, "ss")
        .replace(/æ/g, "a")
        .replace(/ø/g, "o")
        .replace(/œ/g, "e")
        .replace(/ç/g, "s")
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/[^\p{L}]/gu, "")
        .replace(/c(?!h)|q/g, "k")
        .replace(/w/g, "v")
        .replace(/ph/g, "f")
        .replace(/dh/g, "d")
        .replace(/kh/g, "k");
    return s.replace(/(\p{L})\1+/gu, "$1");
}

/**
 * The checkout the `earth-wordlists` clone sits beside: this one, or the main
 * checkout when this is a worktree under `.claude/worktrees/`.
 *
 * @param {string} cwd
 * @returns {string}
 */
function checkoutRoot(cwd) {
    const at = cwd.indexOf(`${path.sep}.claude${path.sep}worktrees${path.sep}`);
    return at === -1 ? cwd : cwd.slice(0, at);
}

/**
 * The word-list directories.
 *
 * @param {string[]} argv - Arguments, of which `--wordlists <dir>` are read.
 * @param {Record<string, string|undefined>} env
 * @param {string} cwd
 * @returns {string[]}
 */
export function listDirs(argv, env, cwd) {
    const given = [];
    for (let i = 0; i < argv.length; i += 1) {
        if (argv[i] === "--wordlists") given.push(argv[i + 1]);
        else if (argv[i].startsWith("--wordlists=")) given.push(argv[i].slice(12));
    }
    if (given.length) return given;
    if (env.KHAZRYN_WORDLISTS) return env.KHAZRYN_WORDLISTS.split(path.delimiter).filter(Boolean);
    const root = checkoutRoot(cwd);
    const clone = path.join(path.dirname(root), "earth-wordlists");
    return [path.join(clone, "lists"), path.join(clone, "base")];
}

/**
 * The Earth lists in the given directories.
 *
 * @param {string[]} dirs
 * @returns {{lists: Map<string, Set<string>>, glosses: Map<string, Map<string, string[]>>}}
 */
export function loadEarth(dirs) {
    const lists = new Map();
    const glosses = new Map();
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
    }
    return { lists, glosses };
}

/** A word reduced to its singular: `-ies` to `-y`, `-es` after a sibilant, a lone `-s`. */
function singular(word) {
    if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
    if (word.length > 4 && /(s|x|z|ch|sh)es$/.test(word)) return word.slice(0, -2);
    if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
    return word;
}

/**
 * The content words of a gloss.
 *
 * @param {string} gloss
 * @returns {Set<string>}
 */
function glossWords(gloss) {
    const words = gloss
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .replace(/['\u2019]s\b/g, "")
        .match(/[a-z]+/g);
    return new Set((words ?? []).filter((w) => !GLOSS_STOPWORDS.has(w)).map(singular));
}

/**
 * Whether two glosses mean the same.
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
 * Every word of a language note, with where it stands.
 *
 * @param {string} text - The note.
 * @returns {{form: string, gloss: string, line: number, column: number}[]}
 */
export function wordsOf(text) {
    const match = /^---\n([\s\S]*?)\n---/.exec(text);
    if (!match) return [];
    const lineCounter = new YAML.LineCounter();
    const doc = YAML.parseDocument(match[1], { lineCounter });
    const words = doc.getIn(["data", "words"]);
    if (!YAML.isSeq(words)) return [];
    const out = [];
    for (const item of words.items) {
        const node = YAML.isMap(item) ? item.get("form", true) : null;
        if (!YAML.isScalar(node) || typeof node.value !== "string") continue;
        const { line, col } = lineCounter.linePos(node.range[0]);
        const gloss = item.get("gloss");
        out.push({
            form: node.value,
            gloss: typeof gloss === "string" ? gloss : "",
            line: line + 1,
            column: col,
        });
    }
    return out;
}

/**
 * What one word collides with in its model languages' lists.
 *
 * @param {{form: string, gloss: string}} word
 * @param {ReturnType<typeof loadEarth>} earth
 * @param {string[]} sources - The list names of the word's model languages.
 * @param {boolean} [meaningRequired] - Whether the meaning must agree too.
 * @returns {{severity: "error", message: string}[]}
 */
export function earthHits({ form, gloss }, earth, sources, meaningRequired = false) {
    const out = [];
    if (/^-|-$/.test(String(form).trim())) return out;
    const n = normalize(form);
    if (n.length < MIN_LENGTH) return out;
    for (const list of sources) {
        if (!earth.lists.get(list)?.has(n)) continue;
        if (!meaningRequired) {
            out.push({ severity: "error", message: `is a word of the ${list} list` });
            continue;
        }
        const sense = earth.glosses
            .get(list)
            ?.get(n)
            ?.find((g) => sameMeaning(gloss, g));
        if (sense)
            out.push({
                severity: "error",
                message: `copies its word for "${sense}" in the ${list} list`,
            });
    }
    return out;
}

/**
 * Run the check.
 *
 * @param {string[]} argv - `--wordlists <dir>` options, then language notes; the
 *   notes under `assets/content/Skills/Languages` when none are named.
 * @param {Record<string, string|undefined>} [env]
 * @param {{out: (s: string) => void, err: (s: string) => void}} [io]
 * @param {string} [cwd]
 * @returns {number} The exit status.
 */
export function main(
    argv,
    env = process.env,
    io = { out: console.log, err: console.error },
    cwd = process.cwd(),
) {
    const dirs = listDirs(argv, env, cwd);
    const earth = loadEarth(dirs);
    if (earth.lists.size === 0) {
        io.err(`Earth-word checks skipped: no word lists at ${dirs.join(", ")}`);
        return 0;
    }
    const named = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--wordlists");
    const files =
        named.length ? named : (
            fs
                .readdirSync(path.join(cwd, LANGUAGES_DIR))
                .filter((name) => name.endsWith(".md"))
                .sort()
                .map((name) => path.join(LANGUAGES_DIR, name))
        );
    let errors = 0;
    let words = 0;
    for (const file of files) {
        const rel = path.relative(cwd, path.resolve(cwd, file)) || file;
        const sources = SOURCES[path.basename(file)] ?? [];
        for (const word of wordsOf(fs.readFileSync(path.resolve(cwd, file), "utf8"))) {
            words += 1;
            for (const hit of earthHits(
                word,
                earth,
                sources,
                MEANING_REQUIRED.has(path.basename(file)),
            )) {
                errors += 1;
                io.err(
                    `${rel}:${word.line}:${word.column}: ${hit.severity}: "${word.form}" ${hit.message}`,
                );
            }
        }
    }
    io.out(`${words} words compared: ${errors} error(s)`);
    return errors ? 1 : 0;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? ""))
    process.exitCode = main(process.argv.slice(2));
