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
 * The guard over the Khazryn tongues and their lexicon.
 *
 * Usage: `node utils/lexicons/khazryn-lexicon.mjs [--wordlists <dir>]...
 * [--check <word>...]`
 *
 * **Everything it checks, it reads off the notes.** The lexicon note names the
 * tongues and the language note of each, the scope of the register, the senses
 * every tongue must cover, the stems and the register. Each language note
 * states its consonants, vowels, marks, syllable rules, joins and suffixes in
 * tables. No letter, rule or affix is restated here, so a rule a note stops
 * stating is a rule the guard stops enforcing.
 *
 * The checks:
 *
 * 1. **Inventory and marks** — every letter of every stem, suffix and name is
 *    in its tongue's consonant or vowel table, and a mark limited to one in a
 *    word appears at most once.
 * 2. **Syllable shape** — a word starts with a listed onset (or a vowel, where
 *    the tongue allows one), ends in a listed final (or a vowel, unless the
 *    tongue forbids it), holds between two vowels at most a coda and an onset,
 *    doubles only the listed letters, and sets two vowels together only where
 *    the tongue allows it. A stem may end in any coda, and where the tongue
 *    states mixed vowel groups, a stem of two or more vowels holds one of each.
 * 3. **Stems** — each has a sense, is listed once in its tongue, stands in no
 *    other tongue, and every tongue covers every required sense.
 * 4. **Derivation** — every name tagged with a tongue, and every derived word,
 *    recomputes from the stems and suffixes its derivation lists, through the
 *    tongue's joins; a derived word carries a gloss and is listed once; every
 *    word a glossed name quotes stands among the derived words or in the
 *    register under a tongue or another non-gloss tag.
 * 5. **The register** — every name of every note in scope stands in the
 *    register under the address it comes from, with a declared tag. Scope is
 *    read off the lexicon: notes whose `data.packFolder`, `data.culture`,
 *    `data.lore` or `data.parents` names a listed value, listed addresses, the
 *    tongue notes, and the lexicon itself.
 *    A name tagged `pending` or `faith` is a warning, so a name awaiting its
 *    coinage is visible without failing the run.
 * 6. **Dunhari** — no stem and no derived name equals a name or word the
 *    Dunhari note lists, marks folded.
 * 7. **Earth words** — no stem and no derived name equals a word in a local
 *    word list, and none contains a listed Earth morpheme or proper name. The
 *    lists are every `<language>.txt` in the word-list directories (normalized
 *    as the collision check normalizes) and every `morphemes/*.txt` beneath
 *    them, where a plain line matches anywhere, `-x` only at a word's end and
 *    `x-` only at its start. Forms shorter than three letters after
 *    normalization are not compared with the word lists. The directories are
 *    each `--wordlists <dir>`, else the `KHAZRYN_WORDLISTS` variable (paths
 *    joined by the platform's delimiter), else `nogit/wordlists` and
 *    `nogit/real-word-audit/lists` of the checkout, or of the main checkout
 *    when run inside a worktree under `.claude/worktrees/`. The repository
 *    holds no list; with none present the comparison is skipped with one
 *    message.
 *
 * `--check` runs checks 1, 2, 6 and 7 on each word given, against every tongue,
 * and tries to derive it from each tongue's stems. A word fails when it matches
 * an Earth word, a morpheme or Dunhari, or derives in no tongue.
 *
 * Findings are `file:line:column: severity: message`.
 */

import fs from "node:fs";
import path from "node:path";
import { normalize } from "./collision-check.mjs";
import { corpus, position, section, tables, ticked } from "./khazari-lexicon.mjs";

export const LEXICON = "assets/content/Lore/Khazryn_Lexicon.md";
export const DUNHARI = "assets/content/Skills/Languages/Dunhari.md";
export const CONTENT = "assets/content";

/** Tags that are not tongues and carry their own meaning. */
export const GLOSS = "gloss";
export const WARNED = ["pending", "faith"];

/** A cell with its bold, italic and link marks off. */
export function plain(cell = "") {
    return cell
        .replace(/\[\[[^\]|]*\\?\|([^\]]*)\]\]/g, "$1")
        .replace(/\*\*/g, "")
        .replace(/(^|\s)_|_(\s|$)/g, "$1$2")
        .trim();
}

/** Lowercase, composed. */
const lower = (s) => s.normalize("NFC").toLowerCase();

/** Lowercase with every mark off. */
export function fold(s) {
    return s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/** The first table of a section, or null when the section states none. */
function tableOf(text, heading, required = true) {
    let found;
    try {
        const { text: body, offset } = section(text, heading);
        found = tables(body, offset)[0];
    } catch (error) {
        if (required) throw error;
        return null;
    }
    if (!found && required) throw new Error(`the section "${heading}" states no table`);
    return found ?? null;
}

/** The column of a table whose header starts with a word. */
function column(table, word) {
    const at = table.header.findIndex((cell) => plain(cell).toLowerCase().startsWith(word));
    if (at === -1) throw new Error(`a table has no "${word}" column`);
    return at;
}

/** The address a wikilink cell names, or null. */
export function linked(cell = "") {
    return cell.match(/\[\[([^\]|\\]+)/)?.[1] ?? null;
}

/**
 * A tongue's rules, read off its language note.
 *
 * @param {string} text - The language note.
 * @returns {object} The rules.
 */
export function rulesFrom(text) {
    const consonants = tableOf(text, "### Consonants").rows.flatMap(({ cells }) =>
        ticked(cells[0]).map(lower),
    );
    const vowels = tableOf(text, "### Vowels").rows.flatMap(({ cells }) =>
        ticked(cells[0]).map(lower),
    );

    const marks = [];
    const markTable = tableOf(text, "### Marks", false);
    if (markTable) {
        const [mLetters, mKind, mLimit] = ["letters", "kind", "limit"].map((w) =>
            column(markTable, w),
        );
        for (const { cells } of markTable.rows) {
            marks.push({
                letters: ticked(cells[mLetters]).map(lower),
                kind: plain(cells[mKind]).toLowerCase(),
                one: /^one\b/i.test(plain(cells[mLimit])),
            });
        }
    }

    const syllable = new Map(
        tableOf(text, "### Syllables").rows.map(({ cells }) => [
            plain(cells[0]).toLowerCase(),
            {
                forms: ticked(cells[1]).map(lower),
                words: plain(cells[1]).toLowerCase(),
                raw: cells[1],
            },
        ]),
    );
    const rule = (key) => {
        const found = syllable.get(key);
        if (!found) throw new Error(`the syllable table states no "${key}" row`);
        return found;
    };
    const listOrAny = (key) => {
        const { forms, words } = rule(key);
        if (forms.length) return forms;
        if (/^any\b/.test(words)) return consonants;
        return [];
    };
    const syllables = {
        onsets: rule("onsets").forms,
        codas: listOrAny("codas"),
        finals: listOrAny("finals"),
        doubled: rule("doubled").forms,
        pairs: rule("vowel pairs").forms,
        initialVowel: /^yes\b/.test(rule("initial vowel").words),
        finalVowel: !/^no\b/.test(syllable.get("final vowel")?.words ?? "yes"),
        mixed:
            syllable.has("mixed vowels") ?
                syllable
                    .get("mixed vowels")
                    .raw.split("/")
                    .map((part) => ticked(part).map(lower))
            :   null,
    };

    const joins = new Map();
    const joinTable = tableOf(text, "### Joins", false);
    if (joinTable) {
        const [jMeet, jRule, jLetters] = ["meeting", "rule", "letters"].map((w) =>
            column(joinTable, w),
        );
        for (const { cells } of joinTable.rows) {
            joins.set(ticked(cells[jMeet])[0], {
                rule: ticked(cells[jRule])[0],
                letters: ticked(cells[jLetters] ?? "").map(lower),
            });
        }
    }

    const suffixTable = tableOf(text, "### Suffixes");
    const [sForm, sSense] = ["suffix", "sense"].map((w) => column(suffixTable, w));
    const suffixes = suffixTable.rows.map(({ cells, offset }) => ({
        form: lower(ticked(cells[sForm])[0] ?? ""),
        sense: plain(cells[sSense] ?? ""),
        offset,
    }));

    return { consonants, vowels, marks, syllables, joins, suffixes };
}

/**
 * A word cut into its letters: consonants and vowels, longest consonant first.
 *
 * @returns {{sound: string, kind: "C"|"V"|"?"}[]}
 */
export function sounds(word, rules) {
    const w = lower(word);
    const consonants = [...rules.consonants].sort((a, b) => b.length - a.length);
    const out = [];
    let i = 0;
    while (i < w.length) {
        const c = consonants.find((k) => w.startsWith(k, i));
        if (c) {
            out.push({ sound: c, kind: "C" });
            i += c.length;
            continue;
        }
        const ch = w[i];
        out.push({ sound: ch, kind: rules.vowels.includes(ch) ? "V" : "?" });
        i += 1;
    }
    return out;
}

/** Whether a run of consonants opens a syllable. */
function isOnset(run, rules) {
    if (run.length === 1) return true;
    return rules.syllables.onsets.includes(run.join(""));
}

/**
 * Every way a word breaks its tongue's sound rules.
 *
 * A stem is a bound form: it may end in any consonant that closes a syllable,
 * where a word must end in a listed final.
 *
 * @param {string} word - One word, without spaces.
 * @param {object} rules - From `rulesFrom`.
 * @param {{bound?: boolean}} [options] - `bound` for a stem.
 * @returns {string[]} The problems, empty when the word is sound.
 */
export function shape(word, rules, { bound = false } = {}) {
    const problems = [];
    const s = sounds(word, rules);
    const strange = [...new Set(s.filter((x) => x.kind === "?").map((x) => x.sound))];
    if (strange.length)
        problems.push(`letters outside the inventory: ${strange.map((x) => `\`${x}\``).join(" ")}`);
    if (strange.length || s.length === 0) return problems;

    for (const mark of rules.marks.filter((m) => m.one)) {
        const n = s.filter((x) => mark.letters.includes(x.sound)).length;
        if (n > 1) problems.push(`more than one ${mark.kind} mark`);
    }

    const syl = rules.syllables;
    const runs = [];
    let run = [];
    let vowelsBefore = 0;
    s.forEach((x, i) => {
        if (x.kind === "C") {
            run.push(x.sound);
            return;
        }
        runs.push({ run, initial: vowelsBefore === 0 });
        run = [];
        vowelsBefore += 1;
        const next = s[i + 1];
        if (next?.kind === "V") {
            const pair = fold(x.sound + next.sound);
            if (!syl.pairs.some((p) => fold(p) === pair))
                problems.push(`two vowels together: \`${x.sound}${next.sound}\``);
        }
    });
    const final = run;
    if (vowelsBefore === 0) {
        problems.push("no vowel");
        return problems;
    }

    for (const { run: r, initial } of runs) {
        if (initial) {
            if (r.length === 0 && !syl.initialVowel) problems.push("starts with a vowel");
            if (r.length > 0 && !isOnset(r, rules))
                problems.push(`\`${r.join("")}\` cannot start a word`);
            continue;
        }
        if (r.length === 0) continue;
        const ok =
            isOnset(r, rules) ||
            (syl.codas.includes(r[0]) && r.length > 1 && isOnset(r.slice(1), rules));
        if (!ok) problems.push(`\`${r.join("")}\` cannot stand between two vowels`);
        for (let i = 0; i + 1 < r.length; i += 1) {
            if (r[i] === r[i + 1] && !syl.doubled.includes(r[i] + r[i + 1]))
                problems.push(`\`${r[i]}${r[i + 1]}\` is not a doubled letter the tongue allows`);
        }
    }
    if (final.length === 0 && !bound && !syl.finalVowel) problems.push("ends in a vowel");
    if (bound && syl.mixed && vowelsBefore > 1) {
        const vs = s.filter((x) => x.kind === "V").map((x) => fold(x.sound));
        if (!syl.mixed.every((group) => vs.some((v) => group.map(fold).includes(v))))
            problems.push("keeps to one vowel group, and a stem of two vowels mixes them");
    }
    if (final.length > 1) problems.push(`\`${final.join("")}\` cannot end a word`);
    const ends = bound ? [...syl.finals, ...syl.codas] : syl.finals;
    if (final.length === 1 && !ends.includes(final[0]))
        problems.push(`\`${final[0]}\` cannot end a ${bound ? "stem" : "word"}`);
    return [...new Set(problems)];
}

/** The letters a tongue marks for stress only, which a derivation does not carry. */
function stressLetters(rules) {
    return rules.marks.filter((m) => m.kind === "stress").flatMap((m) => m.letters);
}

/** A word with its stress marks off, the form a derivation is compared in. */
export function unstressed(word, rules) {
    const stress = new Set(stressLetters(rules));
    return [...lower(word)]
        .map((ch) => (stress.has(ch) ? ch.normalize("NFD").replace(/\p{M}/gu, "") : ch))
        .join("");
}

/**
 * Join two pieces through a tongue's join rules.
 *
 * @param {string} a - What stands so far.
 * @param {string} b - The next piece, a suffix's hyphen off.
 * @param {object} rules - From `rulesFrom`.
 * @returns {string} The joined form.
 */
export function join(a, b, rules) {
    if (!a) return b;
    const left = sounds(a, rules);
    const right = sounds(b, rules);
    const last = left.at(-1);
    const first = right[0];
    if (!last || !first) return a + b;
    const key = `${last.kind === "V" ? "V" : "C"}+${first.kind === "V" ? "V" : "C"}`;
    const j = rules.joins.get(key);
    if (!j) return a + b;
    if (j.rule === "drop") return a.slice(0, a.length - last.sound.length) + b;
    if (j.rule === "insert") return a + (j.letters[0] ?? "") + b;
    if (j.rule === "double" && j.letters.includes(first.sound)) return a + first.sound + b;
    if (j.rule === "merge" && last.sound === first.sound) return a + b.slice(first.sound.length);
    return a + b;
}

/** The form a list of pieces makes. */
export function derive(pieces, rules) {
    return pieces.reduce((acc, p) => join(acc, lower(p).replace(/^-/, ""), rules), "");
}

/**
 * Every derivation of a word from a tongue's stems and suffixes, up to four
 * pieces with the suffixes last.
 *
 * @returns {string[][]} The derivations found, each a list of pieces.
 */
export function parse(word, rules, stems) {
    const target = unstressed(word, rules);
    const stemForms = [...new Set(stems.map((s) => lower(s.form)))];
    const suffixForms = rules.suffixes.map((s) => s.form).filter(Boolean);
    const found = [];
    const walk = (acc, pieces, suffixed) => {
        if (found.length >= 3 || pieces.length >= 4) return;
        const options = [
            ...(suffixed ? [] : stemForms.map((f) => ({ f, suffix: false }))),
            ...(pieces.length ? suffixForms.map((f) => ({ f, suffix: true })) : []),
        ];
        for (const { f, suffix } of options) {
            const next = join(acc, f.replace(/^-/, ""), rules);
            if (next === target) {
                found.push([...pieces, f]);
                continue;
            }
            const head = next.slice(0, -1);
            if (head.length && target.startsWith(head)) walk(next, [...pieces, f], suffix);
        }
    };
    walk("", [], false);
    return found;
}

/**
 * The lexicon, read off its note.
 *
 * @param {string} text - The lexicon note.
 * @returns {object} Tongues, scope, required senses, stems, register and tags.
 */
export function lexiconFrom(text) {
    const tongueTable = tableOf(text, "## Tongues");
    const [tName, tTag, tNote] = ["tongue", "tag", "note"].map((w) => column(tongueTable, w));
    const tongues = tongueTable.rows.map(({ cells, offset }) => ({
        name: plain(cells[tName]),
        tag: ticked(cells[tTag])[0],
        address: linked(cells[tNote]),
        offset,
    }));

    const scopeTable = tableOf(text, "## Scope");
    const [cKind, cValue] = ["kind", "value"].map((w) => column(scopeTable, w));
    const scope = scopeTable.rows.map(({ cells }) => ({
        kind: plain(cells[cKind]).toLowerCase(),
        values: ticked(cells[cValue]),
    }));

    const { text: sensesText, offset: sensesOffset } = section(text, "## Required senses");
    const senses = [...sensesText.matchAll(/`([^`]+)`/g)].map((m) => ({
        sense: m[1],
        offset: sensesOffset + m.index,
    }));

    const stems = [];
    const { text: stemBody, offset: stemBase } = section(text, "## Stems");
    const heads = [...stemBody.matchAll(/^### (.+)$/gm)];
    heads.forEach((head, i) => {
        const start = head.index;
        const end = i + 1 < heads.length ? heads[i + 1].index : stemBody.length;
        for (const table of tables(stemBody.slice(start, end), stemBase + start)) {
            const [sForm, sSense] = ["stem", "sense"].map((w) => column(table, w));
            for (const { cells, offset } of table.rows) {
                stems.push({
                    tongue: head[1].trim(),
                    form: lower(ticked(cells[sForm])[0] ?? ""),
                    sense: plain(cells[sSense] ?? ""),
                    offset,
                });
            }
        }
    });

    const registerTable = tableOf(text, "## Attested names");
    const [rName, rAddress, rLanguage, rDerivation] = [
        "name",
        "address",
        "language",
        "derivation",
    ].map((w) => column(registerTable, w));
    const register = registerTable.rows.map(({ cells, offset }) => ({
        name: plain(cells[rName]),
        address: linked(cells[rAddress]),
        language: ticked(cells[rLanguage] ?? "")[0] ?? plain(cells[rLanguage] ?? ""),
        derivation: cells[rDerivation] ?? "",
        offset,
    }));

    const tags = tableOf(text, "### Language tags").rows.map(
        ({ cells }) => ticked(cells[0])[0] ?? plain(cells[0]),
    );

    const derived = [];
    const derivedTable = tableOf(text, "## Derived words", false);
    if (derivedTable) {
        const [dWord, dTongue, dGloss, dDerivation] = ["word", "tongue", "gloss", "derivation"].map(
            (w) => column(derivedTable, w),
        );
        for (const { cells, offset } of derivedTable.rows) {
            derived.push({
                name: plain(cells[dWord]),
                language: ticked(cells[dTongue] ?? "")[0] ?? plain(cells[dTongue] ?? ""),
                gloss: plain(cells[dGloss] ?? ""),
                derivation: cells[dDerivation] ?? "",
                offset,
            });
        }
    }

    return { tongues, scope, senses, stems, register, tags, derived };
}

/**
 * Every name and word the Dunhari note lists: its name lists, and every word of
 * its bold and italic runs, folded.
 *
 * @param {string} text - The Dunhari note.
 * @returns {Set<string>}
 */
export function dunhariForms(text) {
    const out = new Set();
    const add = (w) => {
        const f = fold(w).replace(/[^\p{L}]/gu, "");
        if (f.length >= 3) out.add(f);
    };
    const body = text.replace(/^---\n[\s\S]*?\n---\n/, "");
    let lists = "";
    try {
        lists = section(body.startsWith("\n") ? body : `\n${body}`, "## Name Lists").text;
    } catch {
        lists = "";
    }
    for (const line of lists.split("\n")) {
        if (line.startsWith("#") || !line.includes(",")) continue;
        for (const w of line.split(/,\s*/)) add(w.trim());
    }
    for (const m of body.matchAll(/\*\*([^*\n]+)\*\*|(?:^|\s)_([^_\n]+)_/g)) {
        for (const w of (m[1] ?? m[2]).split(/[\s,—-]+/)) add(w);
    }
    return out;
}

/**
 * The checkout whose `nogit/` holds the lists: this one, or the main checkout
 * when this is a worktree under `.claude/worktrees/`.
 */
function checkoutRoot(cwd = process.cwd()) {
    if (fs.existsSync(path.join(cwd, "nogit"))) return cwd;
    const at = cwd.indexOf(`${path.sep}.claude${path.sep}worktrees${path.sep}`);
    return at === -1 ? cwd : cwd.slice(0, at);
}

/** The word-list directories, from the arguments, the environment or the default. */
export function listDirs(argv = [], env = process.env, cwd = process.cwd()) {
    const given = [];
    for (let i = 0; i < argv.length; i += 1) {
        if (argv[i] === "--wordlists") given.push(argv[i + 1]);
        else if (argv[i].startsWith("--wordlists=")) given.push(argv[i].slice(12));
    }
    if (given.length) return given;
    if (env.KHAZRYN_WORDLISTS) return env.KHAZRYN_WORDLISTS.split(path.delimiter).filter(Boolean);
    const root = checkoutRoot(cwd);
    return [path.join(root, "nogit/wordlists"), path.join(root, "nogit/real-word-audit/lists")];
}

/**
 * The local Earth lists: whole-word lists by name, and morphemes with where
 * they match.
 *
 * @param {string[]} dirs - The word-list directories.
 * @returns {{lists: Map<string, Set<string>>, morphemes: {form: string, at: "any"|"start"|"end"}[]}}
 */
export function loadEarth(dirs) {
    const lists = new Map();
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
    return { lists, morphemes };
}

/**
 * Every Earth list and morpheme a form matches.
 *
 * @param {string} form - The form.
 * @param {ReturnType<typeof loadEarth>} earth - The lists.
 * @returns {string[]} One message per match.
 */
export function earthHits(form, earth) {
    const out = [];
    const n = normalize(form);
    if (!n) return out;
    if (n.length >= 3) {
        for (const [list, entries] of earth.lists) {
            if (entries.has(n)) out.push(`is a word in the ${list} list`);
        }
    }
    for (const m of earth.morphemes) {
        const hit =
            m.at === "end" ? n.endsWith(m.form)
            : m.at === "start" ? n.startsWith(m.form)
            : n.includes(m.form);
        if (hit && n !== m.form) out.push(`contains the Earth morpheme \`${m.form}\``);
        else if (hit) out.push("is an Earth morpheme or proper name");
    }
    return [...new Set(out)];
}

/** A note's name and aliases. */
function namesOf(note) {
    const n = note.fm.name;
    if (typeof n === "string") return [n];
    return [n?.full, ...(n?.aliases ?? [])].filter((x) => typeof x === "string" && x);
}

/** Whether a note falls in the lexicon's scope. */
function inScope(note, scope, fixed) {
    if (fixed.has(note.address)) return true;
    const data = note.fm.data ?? {};
    const lore = Array.isArray(data.lore) ? data.lore : [];
    for (const { kind, values } of scope) {
        if (kind === "folder" && values.includes(data.packFolder)) return true;
        if (kind === "culture" && values.includes(data.culture)) return true;
        if (kind === "lore" && lore.some((l) => values.includes(l))) return true;
        if (kind === "address" && values.includes(note.address)) return true;
        if (kind === "parent" && (data.parents ?? []).some((x) => values.includes(x))) return true;
    }
    return false;
}

/**
 * Every finding over the tongues, the lexicon and its register.
 *
 * @param {object} input
 * @param {string} input.lexText - The lexicon note.
 * @param {Map<string, {file: string, text: string}>} input.tongueNotes - Language notes by address.
 * @param {object[]} input.notes - From `corpus`.
 * @param {ReturnType<typeof loadEarth>} input.earth - The local Earth lists.
 * @param {Set<string>} input.dunhari - From `dunhariForms`.
 * @returns {{file: string, text: string, offset: number|null, severity: string, message: string}[]}
 */
export function check({ lexText, tongueNotes, notes, earth, dunhari, lexFile = LEXICON }) {
    const out = [];
    const add = (offset, severity, message, file = lexFile, text = lexText) =>
        out.push({ file, text, offset, severity, message });
    const lex = lexiconFrom(lexText);

    // Tongues and their rules.
    const rulesByTag = new Map();
    const nameToTag = new Map();
    for (const t of lex.tongues) {
        const note = tongueNotes.get(t.address);
        if (!note) {
            add(t.offset, "error", `tongue ${t.name} names no language note \`${t.address}\``);
            continue;
        }
        let rules;
        try {
            rules = rulesFrom(note.text);
        } catch (error) {
            add(null, "error", error.message, note.file, note.text);
            continue;
        }
        rulesByTag.set(t.tag, rules);
        nameToTag.set(t.name, t.tag);
        if (!lex.tags.includes(t.tag))
            add(t.offset, "error", `tongue tag \`${t.tag}\` is not a declared language tag`);
        for (const s of rules.suffixes) {
            const strange = sounds(s.form.replace(/^-/, ""), rules).filter((x) => x.kind === "?");
            if (!s.form.startsWith("-") || strange.length)
                add(
                    s.offset,
                    "error",
                    `suffix \`${s.form}\` is not a hyphen and letters of the inventory`,
                    note.file,
                    note.text,
                );
            if (!s.sense)
                add(
                    s.offset,
                    "error",
                    `suffix \`${s.form}\` carries no sense`,
                    note.file,
                    note.text,
                );
        }
    }

    const earthCheck = (form, offset, what, file, text) => {
        for (const hit of earthHits(form, earth))
            add(offset, "error", `${what} \`${form}\` ${hit}`, file, text);
        if (dunhari.has(fold(form).replace(/[^\p{L}]/gu, "")))
            add(offset, "error", `${what} \`${form}\` is a Dunhari name or word`, file, text);
    };

    // Stems.
    const stemsByTag = new Map([...rulesByTag.keys()].map((k) => [k, []]));
    const owner = new Map();
    for (const s of lex.stems) {
        const tag = nameToTag.get(s.tongue);
        if (!tag) {
            add(
                s.offset,
                "error",
                `stem \`${s.form}\` stands under ${s.tongue}, which is not a tongue`,
            );
            continue;
        }
        const rules = rulesByTag.get(tag);
        if (!s.form) {
            add(s.offset, "error", "a stem row states no stem");
            continue;
        }
        for (const p of shape(s.form, rules, { bound: true }))
            add(s.offset, "error", `${s.tongue} stem \`${s.form}\`: ${p}`);
        if (!s.sense) add(s.offset, "error", `${s.tongue} stem \`${s.form}\` carries no sense`);
        const key = unstressed(s.form, rules);
        const mine = stemsByTag.get(tag);
        if (mine.some((x) => unstressed(x.form, rules) === key))
            add(s.offset, "error", `${s.tongue} stem \`${s.form}\` is listed twice`);
        const other = owner.get(fold(s.form));
        if (other && other !== s.tongue)
            add(s.offset, "error", `stem \`${s.form}\` stands in both ${other} and ${s.tongue}`);
        owner.set(fold(s.form), s.tongue);
        mine.push(s);
        earthCheck(s.form, s.offset, `${s.tongue} stem`);
    }

    // Required senses.
    for (const t of lex.tongues) {
        const mine = stemsByTag.get(t.tag);
        if (!mine) continue;
        const held = new Set(
            mine.flatMap((s) =>
                s.sense
                    .toLowerCase()
                    .split(/[,;]\s*/)
                    .map((x) => x.replace(/^(a|an|the|to)\s+/, "").trim()),
            ),
        );
        for (const { sense, offset } of lex.senses) {
            if (!held.has(sense.toLowerCase()))
                add(offset, "error", `${t.name} has no stem for the required sense "${sense}"`);
        }
    }

    const recompute = (r) => {
        const rules = rulesByTag.get(r.language);
        const pieces = ticked(r.derivation);
        if (!pieces.length) {
            add(
                r.offset,
                "error",
                `${r.name} is tagged \`${r.language}\` and states no derivation`,
            );
            return;
        }
        const stems = stemsByTag.get(r.language);
        for (const p of pieces) {
            const isSuffix = p.startsWith("-");
            const known =
                isSuffix ?
                    rules.suffixes.some((s) => s.form === lower(p))
                :   stems.some((s) => s.form === lower(p));
            if (!known)
                add(
                    r.offset,
                    "error",
                    `${r.name}: \`${p}\` is not a listed ${isSuffix ? "suffix" : "stem"} of its tongue`,
                );
        }
        const made = derive(pieces, rules);
        if (made !== unstressed(r.name, rules))
            add(
                r.offset,
                "error",
                `${r.name} does not recompute: its derivation makes \`${made}\``,
            );
        for (const p of shape(r.name, rules)) add(r.offset, "error", `${r.name}: ${p}`);
        earthCheck(r.name, r.offset, "name");
    };

    // Derived words.
    const derivedForms = new Set();
    for (const d of lex.derived) {
        if (!rulesByTag.has(d.language)) {
            add(
                d.offset,
                "error",
                `${d.name} stands under \`${d.language}\`, which is not a tongue`,
            );
            continue;
        }
        if (!d.gloss) add(d.offset, "error", `${d.name} carries no gloss`);
        if (derivedForms.has(lower(d.name))) add(d.offset, "error", `${d.name} is listed twice`);
        derivedForms.add(lower(d.name));
        recompute(d);
    }

    // The register.
    const tagSet = new Set(lex.tags);
    const registered = new Map();
    for (const r of lex.register) {
        const key = `${r.address}\u0000${r.name}`;
        if (registered.has(key))
            add(r.offset, "error", `${r.name} is registered twice under ${r.address}`);
        registered.set(key, r);
    }
    const anyTongueOrKept = new Set([
        ...lex.register.filter((r) => r.language !== GLOSS).map((r) => lower(r.name)),
        ...derivedForms,
    ]);
    for (const r of lex.register) {
        if (!tagSet.has(r.language)) {
            add(r.offset, "error", `${r.name} carries the undeclared tag \`${r.language}\``);
            continue;
        }
        if (rulesByTag.has(r.language)) {
            recompute(r);
        } else if (r.language === GLOSS) {
            for (const w of ticked(r.derivation)) {
                if (!anyTongueOrKept.has(lower(w)))
                    add(
                        r.offset,
                        "error",
                        `${r.name} glosses \`${w}\`, which the register does not hold under a tongue`,
                    );
            }
        } else if (WARNED.includes(r.language)) {
            add(
                r.offset,
                "warning",
                `${r.name} is held as \`${r.language}\`, awaiting its coinage`,
            );
        }
    }

    // Scope.
    const fixed = new Set(lex.tongues.map((t) => t.address).filter(Boolean));
    const lexNote = notes.find((n) => path.resolve(n.file) === path.resolve(lexFile));
    if (lexNote) fixed.add(lexNote.address);
    for (const note of notes) {
        if (!inScope(note, lex.scope, fixed)) continue;
        for (const name of namesOf(note)) {
            if (registered.has(`${note.address}\u0000${name}`)) continue;
            const offset = Math.max(0, note.text.indexOf(name));
            add(
                offset,
                "error",
                `${name} is in scope and not in the register under ${note.address}`,
                note.file,
                note.text,
            );
        }
    }
    return out;
}

/**
 * Check loose words against every tongue: Earth lists, morphemes, Dunhari,
 * sound rules and derivation.
 *
 * @returns {{word: string, ok: boolean, lines: string[]}[]}
 */
export function checkWords(words, { lexText, tongueNotes, earth, dunhari }) {
    const lex = lexiconFrom(lexText);
    return words.map((word) => {
        const lines = [];
        let ok = true;
        for (const hit of earthHits(word, earth)) {
            lines.push(`${word} ${hit}`);
            ok = false;
        }
        if (dunhari.has(fold(word).replace(/[^\p{L}]/gu, ""))) {
            lines.push(`${word} is a Dunhari name or word`);
            ok = false;
        }
        let derives = false;
        for (const t of lex.tongues) {
            const note = tongueNotes.get(t.address);
            if (!note) continue;
            const rules = rulesFrom(note.text);
            const problems = shape(word, rules);
            const stems = lex.stems.filter((s) => s.tongue === t.name);
            const found = problems.length ? [] : parse(word, rules, stems);
            if (found.length) {
                derives = true;
                lines.push(
                    `${word} derives in ${t.name}: ${found[0].map((p) => `\`${p}\``).join(" + ")}`,
                );
            } else if (problems.length)
                lines.push(`${word} breaks ${t.name}: ${problems.join("; ")}`);
            else lines.push(`${word} keeps ${t.name}'s sounds but derives from no listed stem`);
        }
        if (!derives) ok = false;
        return { word, ok, lines };
    });
}

/** A finding as a line: path first, field dropped rather than guessed. */
export function format(finding) {
    const where = path.relative(process.cwd(), finding.file) || finding.file;
    if (finding.offset == null) return `${where}: ${finding.severity}: ${finding.message}`;
    const { line, column: col } = position(finding.text, finding.offset);
    return `${where}:${line}:${col}: ${finding.severity}: ${finding.message}`;
}

/**
 * The content tree's notes, and the language notes the lexicon names by address.
 *
 * @param {string} lexText - The lexicon note.
 * @param {string} [root] - The content root.
 */
export function corpusNotes(lexText, root = CONTENT) {
    const notes = corpus(root);
    const byAddress = new Map(notes.map((n) => [n.address, n]));
    const tongueNotes = new Map();
    for (const t of lexiconFrom(lexText).tongues) {
        const n = byAddress.get(t.address);
        if (n) tongueNotes.set(t.address, { file: n.file, text: n.text });
    }
    return { notes, tongueNotes };
}

/** Run the guard over the tree. */
export function main(argv = process.argv.slice(2)) {
    const dirs = listDirs(argv);
    const earth = loadEarth(dirs);
    if (earth.lists.size === 0 && earth.morphemes.length === 0)
        console.log(
            `khazryn-lexicon: no Earth word lists in ${dirs.join(", ")}, Earth words not compared`,
        );
    if (!fs.existsSync(LEXICON)) {
        console.error(`${LEXICON}: error: the lexicon note does not exist`);
        process.exitCode = 1;
        return;
    }
    const lexText = fs.readFileSync(LEXICON, "utf8");
    const { notes, tongueNotes } = corpusNotes(lexText, CONTENT);
    const dunhari = dunhariForms(fs.readFileSync(DUNHARI, "utf8"));

    const at = argv.indexOf("--check");
    if (at !== -1) {
        const words = argv.slice(at + 1).filter((w) => !w.startsWith("--"));
        let failed = 0;
        for (const r of checkWords(words, { lexText, tongueNotes, earth, dunhari })) {
            for (const line of r.lines) console.log(line);
            console.log(`${r.word}: ${r.ok ? "passes" : "refused"}`);
            if (!r.ok) failed += 1;
        }
        if (failed) process.exitCode = 1;
        return;
    }

    const findings = check({ lexText, tongueNotes, notes, earth, dunhari });
    for (const f of findings) console.error(format(f));
    const lex = lexiconFrom(lexText);
    const counts = lex.tongues
        .map((t) => `${t.name} ${lex.stems.filter((s) => s.tongue === t.name).length}`)
        .join(", ");
    console.log(
        `Khazryn lexicon: stems ${counts}; ${lex.register.length} registered names; ` +
            `${earth.lists.size} Earth lists, ${earth.morphemes.length} morphemes.`,
    );
    const errors = findings.filter((f) => f.severity === "error").length;
    console.log(`${errors} error(s), ${findings.length - errors} warning(s).`);
    if (errors) process.exitCode = 1;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) main();
