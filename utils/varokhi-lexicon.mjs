/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Varokhi lexicon.
 *
 * `Skills/Languages/Varokhi.md` states one formation rule and every class of
 * name uses it: a name is an opening element and a closing element, a linking
 * `-a-` may stand at the seam, and a woman's name adds `-a`. Clan names, place
 * names, ranks, offices and orders are built the same way, and the closing
 * decides which of them a name is. This guard asks one question of every
 * Varokhi name the corpus holds — does it fit the rule for its class? — and
 * answers it as a red test with a count per class, because that enumeration is
 * the work list a rename reads.
 *
 * **The note is the single source.** Every predicate here is derived from the
 * note's own tables at run time: the letters, the openings, the closings, the
 * consonant band and the syllable count, the diphthongs, the elements, the
 * ground-closings, the office closings, the kept words, the bynames the page
 * renders in the reader's tongue, and the marks the romanisation refuses.
 * Nothing is restated, because a second copy of a rule drifts from the first
 * the moment either is edited, and the note is where a phonology is settled.
 *
 * Four checks.
 *
 * **The corpus.** Names are read from frontmatter and from the note's own
 * lists, never from prose: a name in frontmatter is a name, while a capitalized
 * word in a sentence is a guess. Each is tested against the class its note
 * declares, and a name that fits no rule for its class is reported with the
 * rule it breaks.
 *
 * **The note against itself.** Three of the note's tables can disagree without
 * any name showing it. An element that opens a name stands first in it, so its
 * own spelling has to open on a cluster the onset inventory carries; an element
 * that closes a name has to close the way the closing inventory allows; and a
 * ground-closing or an office closing has to be a closing element the lexicon
 * publishes. Both sides of each comparison are read off the note.
 *
 * **The derivation.** Every element row names the names it is read from, and
 * every one of those has to stand in one of the note's own three lists. That is
 * what makes the lexicon derived rather than asserted: a row citing a name
 * nothing publishes is a row with nothing behind it.
 *
 * **The romanisation.** Varokhi is romanized off Nordmal's table with the row
 * for vowel length struck out, so a Varokhi name carries no length mark at all.
 * The marks the note's own table refuses are read from its `never` column, and
 * any other combining mark is a break too.
 *
 * Three traps the rules and this guard answer together:
 *
 * 1. **A mark is not a letter.** A name is demarked before it is decomposed, so
 *    one length mark reports one finding rather than reporting an unknown
 *    letter, a failed decomposition and a wrong consonant band as well.
 * 2. **The feminine `-a` belongs to a given name.** A clan name is unmarked for
 *    gender, so the `-a` is not offered there, and `Velshara` passes on the
 *    `-shara` row rather than on a closing that never existed.
 * 3. **A byname is not a Varokhi word.** The note renders bynames in the
 *    reader's tongue, so the Crow and the Weasel are counted and read past.
 *    Every one is printed, because a filter nobody can see is a filter nobody
 *    can check.
 *
 * A guard proves completeness, never accuracy. Whether `-mark` is well glossed
 * as a keeper is a judgement; whether Vithmark is formed the way the note says
 * a clan name is formed is arithmetic, and only the second is answered here.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory, with a field dropped rather
 * than guessed. Both severities go to stderr and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** The note every predicate is derived from. */
const NOTE = "assets/content/Skills/Languages/Varokhi.md";

/** Where the authored tree lives. */
const CONTENT_DIR = "assets/content";

/** The region whose ground the Varokh name. */
const VRYSTWALD = "Regions/Ankaris/Vrystwald/";

/** Where the standings the Varokh hold are filed. */
const RANKS = "Lore/Ranks/Varokhi/";

/** The culture whose people are named in Varokhi. */
const CULTURE = "varokhiclt";

/** The tag a body of the forest carries, wherever in the tree it is filed. */
const TAG = "vrystwald";

/** The digraphs Varokhi writes, each one sound. */
const DIGRAPHS = ["ch", "kh", "sh", "th", "zh"];

/** A finding, in the shape every diagnostic in this repository takes. */
function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * Every markdown file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, in walk order.
 */
function markdownFiles(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return markdownFiles(full);
        return entry.isFile() && full.endsWith(".md") ? [full] : [];
    });
}

/**
 * A note's section, from its heading to the next heading of the same depth or
 * shallower.
 *
 * @param {string} text - The whole note.
 * @param {string} heading - The heading line, marks included.
 * @returns {string} The section, the heading line included.
 */
export function section(text, heading) {
    const start = text.indexOf(`\n${heading}\n`);
    if (start === -1) throw new Error(`${NOTE} states no section "${heading}"`);
    const depth = heading.match(/^#+/)[0].length;
    const rest = text.slice(start + 1);
    const lines = rest.split("\n");
    for (let i = 1; i < lines.length; i += 1) {
        const mark = lines[i].match(/^(#+)\s/);
        if (mark && mark[1].length <= depth) return lines.slice(0, i).join("\n");
    }
    return rest;
}

/**
 * Every table row of a section, as cells.
 *
 * The header row and the rule beneath it carry no data, so both are dropped by
 * the same test: a rule row is all dashes, and a header row is whatever stands
 * above one.
 *
 * @param {string} text - The section.
 * @returns {string[][]} One array of cells per row.
 */
export function rows(text) {
    const lines = text.split("\n").filter((line) => line.trim().startsWith("|"));
    const cells = lines.map((line) =>
        line
            .split("|")
            .slice(1, -1)
            .map((cell) => cell.trim()),
    );
    const out = [];
    for (let i = 0; i < cells.length; i += 1) {
        const isRule = cells[i].every((cell) => /^:?-+:?$/.test(cell));
        const isHeader =
            i + 1 < cells.length && cells[i + 1].every((cell) => /^:?-+:?$/.test(cell));
        if (!isRule && !isHeader) out.push(cells[i]);
    }
    return out;
}

/** Every backticked token in a cell or a sentence. */
function ticked(text) {
    return [...text.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
}

/** A word with every combining mark taken off it. */
export function demark(word) {
    return word
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .normalize("NFC");
}

/** The combining marks a word carries, in the order they stand. */
export function marksOf(word) {
    return [...word.normalize("NFD")].filter((char) => /[̀-ͯ]/.test(char));
}

/**
 * A word cut into sounds, with each of the digraphs counted as one.
 *
 * @param {string} word - The name, in any case.
 * @returns {string[]} The sounds, lower case.
 */
export function sounds(word) {
    const lower = word.toLowerCase();
    const out = [];
    for (let i = 0; i < lower.length; ) {
        const pair = lower.slice(i, i + 2);
        if (DIGRAPHS.includes(pair)) {
            out.push(pair);
            i += 2;
        } else {
            out.push(lower[i]);
            i += 1;
        }
    }
    return out;
}

/**
 * The sentence a phrase stands in, so a rule stated in prose can be read.
 *
 * @param {string} text - The note.
 * @param {string} phrase - The phrase to find.
 * @returns {string} The sentence, or the empty string.
 */
function sentenceWith(text, phrase) {
    const at = text.indexOf(phrase);
    if (at === -1) return "";
    const from = Math.max(
        text.lastIndexOf(". ", at),
        text.lastIndexOf("\n", at),
        text.lastIndexOf("| ", at),
    );
    const to = text.indexOf(". ", at + phrase.length);
    return text.slice(from + 1, to === -1 ? undefined : to + 1);
}

/**
 * The three name lists the note publishes.
 *
 * @param {string} text - The note.
 * @returns {Array<{name: string, kind: string, listed: string}>} Every name.
 */
export function listed(text) {
    const out = [];
    for (const [heading, kind] of [
        ["## Male Given Names", "given"],
        ["## Female Given Names", "given"],
        ["## Clan Names", "clan"],
    ]) {
        const body = section(text, heading).split("\n").slice(1).join("\n").trim();
        // A clan entry carries its gloss, so the split is on a comma that a
        // capital follows; a given-name list has nothing but names in it.
        const entries =
            kind === "clan" ?
                body.split(/,\s*(?=[A-Z])/)
            :   body.split(/,\s*/);
        for (const entry of entries) {
            const word = entry.trim().split(/\s*[–-]\s*"/)[0].trim();
            if (word) out.push({ name: word, kind, listed: heading });
        }
    }
    return out;
}

/**
 * The whole rule, read off the note.
 *
 * @param {string} text - The note.
 * @returns {object} Every derived inventory.
 */
export function lexiconFrom(text) {
    const sounding = section(text, "### Openings and closings");

    // The letters, from the paragraph that closes the set, and the ones the
    // same paragraph refuses.
    const letterPara = sounding.slice(
        sounding.indexOf("**The letters are a closed set.**"),
        sounding.indexOf("**What may open a name.**"),
    );
    const letters = new Set();
    for (const run of ticked(letterPara)) for (const letter of run.split(/\s+/)) letters.add(letter);
    const forbidden = new Set(
        [...letterPara.matchAll(/no `([a-z])`/g)].map((match) => match[1].toLowerCase()),
    );
    for (const letter of forbidden) letters.delete(letter);
    const vowels = new Set(
        (letterPara.match(/the vowels `([^`]+)`/)?.[1] ?? "")
            .split(/\s+/)
            .filter((letter) => letters.has(letter)),
    );

    // The openings and the closings.
    const onsets = new Set();
    let finals = new Set();
    const finalClusters = new Set();
    for (const cells of rows(sounding)) {
        const label = cells[0].toLowerCase();
        const marks = ticked(cells[1] ?? "");
        if (/^(one sound|two|three)$/.test(label)) for (const mark of marks) onsets.add(mark);
        else if (/^any name$/.test(label)) finals = new Set(marks);
        else if (/cluster/.test(label)) for (const mark of marks) finalClusters.add(mark);
    }

    // The band, one row for every class of name.
    let band = null;
    for (const cells of rows(sounding)) {
        if (/consonants per vowel/.test(cells[1] ?? "")) continue;
        if (ticked(cells[1] ?? "").length !== 2) continue;
        const [low, high] = ticked(cells[1]).map(Number);
        const [least, most] = ticked(cells[2] ?? "").map(Number);
        band = { low, high, least, most };
    }

    // The diphthongs, from the sentence that closes that set.
    const diphthongs = new Set(ticked(sentenceWith(sounding, "the free pairs are")));

    // The three pieces of the formation rule that are stated in prose: the
    // vowel that links a seam, the vowel that marks a woman's name, and the one
    // closing that names either.
    const linking = ticked(sentenceWith(text, "A linking"))[0]?.replace(/-/g, "") ?? "";
    const feminine =
        ticked(sentenceWith(text, "**A woman's name closes on"))[0]?.replace(/^-/, "") ?? "";
    const either = ticked(sentenceWith(text, "**A name closing on"))[0]?.replace(/^-/, "") ?? "";

    // The elements. A row whose entry opens with a hyphen closes a name;
    // anything else opens one. Several spellings may share one row, and every
    // row names the names it is read from.
    const opening = new Set();
    const closing = new Set();
    const readFrom = new Map();
    for (const cells of rows(section(text, "### The element lexicon"))) {
        const forms = ticked(cells[0] ?? "");
        if (!forms.length) continue;
        const cited = (cells[cells.length - 1] ?? "")
            .split(/[,;]/)
            .map((part) => part.trim().split(/\s/)[0].replace(/[_*`"]/g, ""))
            .filter((word) => /^[A-Z][\p{L}\p{M}']*$/u.test(word));
        for (const form of forms) {
            const bare = form.replace(/^-|-$/g, "").toLowerCase();
            if (form.startsWith("-")) closing.add(bare);
            else opening.add(bare);
            readFrom.set(form, cited);
        }
    }

    // The closings a place takes, and the ones an office takes. Both are drawn
    // from the closings above, so each table is checked against that lexicon
    // rather than standing on its own.
    const ground = new Set();
    for (const cells of rows(section(text, "### Place names")))
        for (const form of ticked(cells[0] ?? "")) ground.add(form.replace(/^-/, "").toLowerCase());
    const offices = new Set();
    for (const cells of rows(section(text, "### Ranks, offices and orders")))
        for (const form of ticked(cells[0] ?? "")) offices.add(form.replace(/^-/, "").toLowerCase());

    // The particle that joins two names in a company's or an order's name, and
    // the words the tongue gives whole.
    const kept = new Set();
    for (const cells of rows(section(text, "### The words the tongue keeps")))
        if (cells[0]) kept.add(cells[0].replace(/[_*`]/g, "").trim().toLowerCase());
    const joiner = (() => {
        for (const cells of rows(section(text, "### The words the tongue keeps")))
            if (/joining two names/.test(cells[1] ?? ""))
                return cells[0].replace(/[_*`]/g, "").trim().toLowerCase();
        return null;
    })();

    // The bynames the page renders in the reader's tongue, from the sentence
    // that names them.
    const bynameSection = section(text, "### Bynames");
    const readerTongue = new Set(
        (bynameSection.match(/^([^.]*?) are therefore not Varokhi words/m)?.[1] ?? "")
            .split(/,\s*|\s+and\s+/)
            .map((word) =>
                word
                    .replace(/^the\s+/i, "")
                    .trim()
                    .toLowerCase(),
            )
            .filter(Boolean),
    );

    // The marks the romanisation refuses, from its own `never` column.
    const refused = new Map();
    for (const cells of rows(section(text, "### Romanizing Varokhi"))) {
        for (const run of ticked(cells[2] ?? "")) {
            for (const letter of run.split(/\s+/)) {
                for (const mark of marksOf(letter)) refused.set(mark, letter);
            }
        }
    }

    return {
        letters,
        forbidden,
        vowels,
        onsets,
        finals,
        finalClusters,
        band,
        diphthongs,
        linking,
        feminine,
        either,
        opening,
        closing,
        readFrom,
        ground,
        offices,
        kept,
        joiner,
        readerTongue,
        refused,
    };
}

/**
 * Whether a demarked word is an opening element and a closing element.
 *
 * The search is exhaustive rather than greedy, because `keth-` and `kheth-` are
 * one row written two ways and `-mar` stands inside `-marthir`, so a
 * longest-first pass would take the wrong piece and report a lawful name as
 * broken. A linking vowel may stand at the seam, and a given name may add the
 * vowel that marks a woman's.
 *
 * @param {string} word - The name, lower case and demarked.
 * @param {object} rule - The derived lexicon.
 * @param {Set<string>} last - What may stand in the closing position.
 * @param {boolean} gendered - Whether the feminine vowel is offered.
 * @returns {string[]|null} The two elements, or null when nothing decomposes it.
 */
export function decompose(word, rule, last, gendered) {
    for (const head of rule.opening) {
        if (!word.startsWith(head) || word.length === head.length) continue;
        for (const seam of rule.linking ? ["", rule.linking] : [""]) {
            const rest = word.slice(head.length + seam.length);
            if (seam && !word.startsWith(head + seam)) continue;
            if (!rest) continue;
            for (const tail of last) {
                if (rest === tail) return [head, tail];
                if (gendered && rule.feminine && rest === `${tail}${rule.feminine}`)
                    return [head, tail];
            }
        }
    }
    return null;
}

/**
 * The checks every Varokhi name answers whatever its class.
 *
 * @param {string} name - The name as written.
 * @param {object} rule - The derived lexicon.
 * @returns {string[]} What the name breaks, in the note's words.
 */
export function shape(name, rule) {
    const broken = [];
    const marks = marksOf(name);
    if (marks.length) {
        // The letters as the name writes them, so a reader sees where the mark
        // sits rather than the bare combining character.
        const shown = [
            ...new Set(
                [...name.normalize("NFC")].filter((letter) => marksOf(letter).length).map(
                    (letter) => `"${letter}"`,
                ),
            ),
        ].join(", ");
        const refused = marks.every((mark) => rule.refused.has(mark));
        broken.push(
            refused ?
                `it carries ${shown}, a length mark, and Varokhi marks no vowel long`
            :   `it carries ${shown}, a mark the romanisation does not write`,
        );
    }
    if (name.includes("'") || name.includes("’"))
        broken.push("it carries an apostrophe, and Varokhi has no glottal stop");

    const bare = demark(name);
    const segs = sounds(bare);
    for (const seg of segs) {
        if (rule.letters.has(seg)) continue;
        // Everything downstream reads an unknown letter as a consonant, so one
        // wrong letter would otherwise report an opening, a closing and a
        // consonant band that are all artifacts of it.
        return [...broken, `it is written with "${seg}", which Varokhi does not write`];
    }

    let opening = 0;
    while (opening < segs.length && !rule.vowels.has(segs[opening])) opening += 1;
    const onset = segs.slice(0, opening).join("");
    if (onset && !rule.onsets.has(onset))
        broken.push(`it opens on "${onset}", which is not an opening Varokhi uses`);

    let closing = segs.length;
    while (closing > 0 && !rule.vowels.has(segs[closing - 1])) closing -= 1;
    const coda = segs.slice(closing).join("");
    if (coda && !rule.finals.has(coda) && !rule.finalClusters.has(coda))
        broken.push(`it closes on "${coda}", which no Varokhi name closes on`);

    const vowelCount = segs.filter((seg) => rule.vowels.has(seg)).length;
    const consonants = segs.length - vowelCount;
    if (vowelCount === 0) broken.push("it carries no vowel");
    else {
        const { low, high, least, most } = rule.band;
        const ratio = consonants / vowelCount;
        if (ratio < low || ratio > high)
            broken.push(
                `it carries ${ratio.toFixed(2)} consonants to the vowel, outside the ${low} to ${high} band`,
            );
        if (vowelCount < least || vowelCount > most)
            broken.push(
                `it runs ${vowelCount} syllable(s), outside the ${least} to ${most} a Varokhi name runs`,
            );
    }

    const lower = bare.toLowerCase();
    for (const pair of lower.matchAll(/[aeiouy]{2,}/g)) {
        if (pair[0].length > 2 || !rule.diphthongs.has(pair[0]))
            broken.push(`"${pair[0]}" is not one of the diphthongs Varokhi writes`);
    }
    if (/(.)\1/.test(lower)) broken.push("it doubles a letter, and no Varokhi name doubles one");
    return broken;
}

/**
 * Whether one name fits the rule for its class.
 *
 * @param {string} name - The name as written.
 * @param {string} kind - The class the corpus files it under.
 * @param {object} rule - The derived lexicon.
 * @returns {string[]} What it breaks, empty when it fits.
 */
export function judge(name, kind, rule) {
    const lower = name.toLowerCase();
    if (rule.readerTongue.has(lower) || rule.readerTongue.has(lower.replace(/^the\s+/, "")))
        return [];
    if (rule.kept.has(lower)) return [];

    const bare = demark(lower);
    const last =
        kind === "place" ? rule.ground
        : kind === "rank" ? rule.offices
        : rule.closing;
    const gendered = kind === "given";
    if (decompose(bare, rule, last, gendered)) return shape(name, rule);

    const what =
        kind === "place" ? "an element and one of the ground-closings"
        : kind === "rank" ? "an element and one of the office closings"
        : "an opening element and a closing element";
    return [`it is not ${what}`, ...shape(name, rule)];
}

/**
 * The 1-based line and column of the first place a literal stands in a file.
 *
 * @param {string} raw - The whole file.
 * @param {string} literal - What to find.
 * @param {number} [from] - Where to start looking, so a name that also stands
 *   in prose is located in the list being read rather than in the sentence.
 * @returns {{line: number|null, column: number|null}} The position, or nulls
 *   where the literal does not stand in the file at all.
 */
export function positionOf(raw, literal, from = 0) {
    const at = raw.indexOf(literal, from);
    if (at === -1) return { line: null, column: null };
    const before = raw.slice(0, at);
    return { line: before.split("\n").length, column: at - (before.lastIndexOf("\n") + 1) + 1 };
}

/**
 * Every Varokhi name the corpus holds, with the class it belongs to and where
 * it is written.
 *
 * Names come from frontmatter and from the language note's own lists. Prose is
 * not read: a name in frontmatter is a name, while a capitalized word in a
 * sentence is a guess, and a work list built on guesses costs more to check
 * than to build.
 *
 * @param {object} rule - The derived lexicon.
 * @returns {object} `{ names, bynames, titles }`.
 */
export function corpus(rule) {
    const found = [];
    const bynames = [];
    const titles = [];
    // A note's title may be a frame in the reader's tongue, and a company's or
    // an order's name may be two Varokhi names joined by the particle the note
    // keeps. So a joined name is judged as its halves, a title of more than one
    // word is counted and printed, and a single word is judged.
    const add = (name, kind, file, raw, framed = false) => {
        if (typeof name !== "string" || !name.trim()) return;
        const word = name.trim();
        const halves = rule.joiner ? word.split(new RegExp(`\\s+${rule.joiner}\\s+`, "i")) : [word];
        if (halves.length > 1) {
            for (const half of halves) add(half, kind, file, raw, framed);
            return;
        }
        if (framed && /\s/.test(word)) {
            titles.push(word);
            return;
        }
        const { line, column } = positionOf(raw, word);
        found.push({ name: word, kind, file, line, column });
    };

    for (const file of markdownFiles(CONTENT_DIR)) {
        const raw = fs.readFileSync(file, "utf8");
        const head = raw.match(/^---\n([\s\S]*?)\n---/);
        if (!head) continue;
        let front;
        try {
            front = YAML.parse(head[1]);
        } catch {
            // A note whose frontmatter does not parse is invisible to every
            // build, so it is reported rather than skipped in silence.
            found.push({ name: null, kind: "unreadable", file, line: 1, column: null });
            continue;
        }
        if (!front) continue;
        const relative = file.slice(CONTENT_DIR.length + 1);
        const tagged = (front.tags ?? []).includes(TAG);

        if (front.type === "being" && front.data?.culture === CULTURE) {
            const full = String(front.name?.full ?? "").trim();
            const parts = full.split(/\s+/).filter(Boolean);
            // A note states the two pieces where it knows them; where it states
            // only the whole name, the first two words are the given name and
            // the clan, which is the order the note's own introduction uses.
            const given = front.name?.given ?? (parts.length >= 2 ? parts[0] : null);
            const clan = front.name?.clan ?? (parts.length >= 2 ? parts[1] : null);
            add(given, "given", file, raw);
            add(clan, "clan", file, raw);
            let rest = full;
            for (const part of [given, clan].filter(Boolean)) rest = rest.replace(String(part), " ");
            for (const alias of [rest, ...(front.name?.aliases ?? [])]) {
                if (alias && String(alias).trim()) bynames.push(String(alias).trim());
            }
        }

        if (front.type === "place" && relative.startsWith(VRYSTWALD)) {
            add(front.name?.full, "place", file, raw, true);
            for (const alias of front.name?.aliases ?? []) add(alias, "place", file, raw, true);
        }

        if (front.type === "lore" && relative.startsWith(RANKS)) {
            add(front.name?.full, "rank", file, raw);
            for (const alias of front.name?.aliases ?? []) add(alias, "rank", file, raw);
        }

        if (front.type === "affiliation" && (tagged || relative.startsWith(VRYSTWALD))) {
            add(front.name?.full, "order", file, raw, true);
            for (const alias of front.name?.aliases ?? []) add(alias, "order", file, raw, true);
        }

        const governance = front.data?.governance;
        if (governance && (tagged || relative.startsWith(VRYSTWALD))) {
            for (const rank of governance.ranks ?? []) add(rank.title, "rank", file, raw);
            for (const office of Object.keys(governance.offices ?? {}))
                add(office, "rank", file, raw);
        }
    }

    // The note's own lists, which the note must pass before anything else does.
    const note = fs.readFileSync(NOTE, "utf8");
    for (const row of listed(note)) {
        const from = note.indexOf(`\n${row.listed}\n`);
        const { line, column } = positionOf(note, row.name, from);
        found.push({ ...row, file: NOTE, line, column });
    }
    return { names: found, bynames, titles };
}

/**
 * The note's tables, checked against one another.
 *
 * @param {object} rule - The derived lexicon.
 * @param {string} note - The note.
 * @returns {string[]} Findings.
 */
export function checkElements(rule, note) {
    const out = [];
    const at = (literal) => positionOf(note, literal);
    for (const element of [...rule.opening].sort((a, b) => a.localeCompare(b, "en"))) {
        const segs = sounds(element);
        let i = 0;
        while (i < segs.length && !rule.vowels.has(segs[i])) i += 1;
        const onset = segs.slice(0, i).join("");
        if (!onset || rule.onsets.has(onset)) continue;
        const { line, column } = at(`\`${element}-\``);
        out.push(
            finding(
                NOTE,
                line,
                column,
                "error",
                `the element "${element}-" opens on "${onset}", which is not an opening a name may take, so no name can carry it`,
            ),
        );
    }
    for (const element of [...rule.closing].sort((a, b) => a.localeCompare(b, "en"))) {
        const segs = sounds(element);
        let i = segs.length;
        while (i > 0 && !rule.vowels.has(segs[i - 1])) i -= 1;
        const coda = segs.slice(i).join("");
        if (!coda || rule.finals.has(coda) || rule.finalClusters.has(coda)) continue;
        const { line, column } = at(`\`-${element}\``);
        out.push(
            finding(
                NOTE,
                line,
                column,
                "error",
                `the element "-${element}" closes on "${coda}", which no name closes on, so no name can carry it`,
            ),
        );
    }
    for (const [label, set] of [
        ["ground-closing", rule.ground],
        ["office closing", rule.offices],
    ]) {
        for (const element of [...set].sort((a, b) => a.localeCompare(b, "en"))) {
            if (rule.closing.has(element)) continue;
            const { line, column } = at(`\`-${element}\``);
            out.push(
                finding(
                    NOTE,
                    line,
                    column,
                    "error",
                    `the ${label} "-${element}" is no closing element the lexicon publishes`,
                ),
            );
        }
    }
    return out;
}

/**
 * Every name an element row cites, checked against the note's own lists.
 *
 * @param {object} rule - The derived lexicon.
 * @param {object[]} names - The corpus rows drawn from the note.
 * @param {string} note - The note.
 * @returns {string[]} Findings.
 */
export function checkDerivation(rule, names, note) {
    const out = [];
    const published = new Set(
        names.filter((row) => row.listed).map((row) => demark(row.name).toLowerCase()),
    );
    for (const [element, cited] of rule.readFrom) {
        for (const name of cited) {
            if (published.has(demark(name).toLowerCase())) continue;
            const { line, column } = positionOf(note, `\`${element}\``);
            out.push(
                finding(
                    NOTE,
                    line,
                    column,
                    "error",
                    `the "${element}" row is read from "${name}", which no name list publishes, so the row has nothing behind it`,
                ),
            );
        }
    }
    return out;
}

/**
 * The note's lists, checked against the rules they are built from.
 *
 * @param {object[]} names - The corpus rows drawn from the note.
 * @param {object} rule - The derived lexicon.
 * @returns {string[]} Findings.
 */
export function checkLists(names, rule) {
    const out = [];
    const inLists = names.filter((row) => row.listed);
    for (const heading of new Set(inLists.map((row) => row.listed))) {
        const list = inLists.filter((row) => row.listed === heading);
        const seen = new Set();
        for (const row of list) {
            if (seen.has(row.name))
                out.push(
                    finding(
                        NOTE,
                        row.line,
                        row.column,
                        "error",
                        `${heading} lists "${row.name}" twice`,
                    ),
                );
            seen.add(row.name);
            // A woman's name is marked by the vowel and a man's by its absence,
            // so each list is held to the half of the rule it carries.
            if (!/Given Names$/.test(heading)) continue;
            const bare = demark(row.name).toLowerCase();
            const feminine =
                rule.feminine ? bare.endsWith(rule.feminine) || bare.endsWith(rule.either) : false;
            if (/^## Female/.test(heading) && !feminine)
                out.push(
                    finding(
                        NOTE,
                        row.line,
                        row.column,
                        "error",
                        `${heading} lists "${row.name}", which closes on neither the "-${rule.feminine}" a woman's name takes nor the "-${rule.either}" that names either`,
                    ),
                );
            if (/^## Male/.test(heading) && bare.endsWith(rule.feminine))
                out.push(
                    finding(
                        NOTE,
                        row.line,
                        row.column,
                        "error",
                        `${heading} lists "${row.name}", which closes on the "-${rule.feminine}" that marks a woman's name`,
                    ),
                );
        }
    }
    // Every element the lexicon publishes stands in a listed name, or the
    // lexicon is carrying a piece the tongue does not use.
    const unused = [];
    for (const kind of ["opening", "closing"]) {
        for (const element of rule[kind]) {
            const used = inLists.some((row) => {
                const bare = demark(row.name).toLowerCase();
                return kind === "opening" ? bare.startsWith(element) : bare.includes(element);
            });
            if (!used) unused.push(kind === "opening" ? `${element}-` : `-${element}`);
        }
    }
    if (unused.length)
        out.push(
            finding(
                NOTE,
                null,
                null,
                "error",
                `${unused.length} element(s) stand in no published name: ${unused.sort((a, b) => a.localeCompare(b, "en")).join(", ")}`,
            ),
        );
    return out;
}

/** Run every half and report. @returns {number} The exit code. */
function main() {
    if (!fs.existsSync(NOTE)) {
        console.error(`${NOTE}: error: it is absent, and every rule is read from it`);
        return 1;
    }
    const note = fs.readFileSync(NOTE, "utf8");
    const rule = lexiconFrom(note);
    const { names, bynames, titles } = corpus(rule);

    const out = [];
    const byClass = new Map();
    const offByClass = new Map();
    // A rename works from names, not from occurrences: one clan stands in five
    // notes, and that is one piece of work.
    const offDistinct = new Map();
    const marked = new Set();
    for (const row of names) {
        if (row.kind === "unreadable") {
            out.push(
                finding(
                    row.file,
                    row.line,
                    null,
                    "error",
                    "its frontmatter does not parse, so every name in it is invisible to this check",
                ),
            );
            continue;
        }
        byClass.set(row.kind, (byClass.get(row.kind) ?? 0) + 1);
        if (marksOf(row.name).length) marked.add(row.name);
        const broken = judge(row.name, row.kind, rule);
        if (!broken.length) continue;
        offByClass.set(row.kind, (offByClass.get(row.kind) ?? 0) + 1);
        if (!offDistinct.has(row.kind)) offDistinct.set(row.kind, new Set());
        offDistinct.get(row.kind).add(row.name);
        out.push(
            finding(
                row.file,
                row.line,
                row.column,
                "error",
                `"${row.name}" is off-lexicon as a ${row.kind} name: ${broken.join("; ")}`,
            ),
        );
    }
    out.push(...checkElements(rule, note));
    out.push(...checkDerivation(rule, names, note));
    out.push(...checkLists(names, rule));

    for (const line of out) console.error(line);

    const say = (line) => process.stdout.write(`${line}\n`);
    const list = (map) =>
        [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([key, n]) => `${key}=${n}`)
            .join("  ");

    say(
        `The rules are read off ${NOTE}: ${rule.letters.size} letters and digraphs, ` +
            `${rule.onsets.size} openings, ${rule.finals.size + rule.finalClusters.size} closings, ` +
            `${rule.opening.size} opening element(s), ${rule.closing.size} closing element(s), ` +
            `${rule.ground.size} ground-closing(s), ${rule.offices.size} office closing(s), ` +
            `${rule.kept.size} kept word(s), ${rule.diphthongs.size} diphthong(s), ` +
            `a band of ${rule.band.low} to ${rule.band.high} consonants per vowel across ` +
            `${rule.band.least} to ${rule.band.most} syllables, and ${rule.refused.size} refused mark(s).`,
    );
    say(`Names read: ${list(byClass)}`);
    say(
        offByClass.size ?
            "Off-lexicon by class, distinct names and occurrences: " +
                [...offDistinct.entries()]
                    .sort((a, b) => b[1].size - a[1].size)
                    .map(([kind, set]) => `${kind}=${set.size} (${offByClass.get(kind)})`)
                    .join("  ")
        :   "No name in the corpus is off-lexicon.",
    );
    for (const [kind, set] of [...offDistinct.entries()].sort()) {
        say(
            `  off-lexicon ${kind}: ${[...set].sort((a, b) => a.localeCompare(b, "en")).join(", ")}`,
        );
    }
    say(
        marked.size ?
            `Names carrying a length mark the romanisation refuses (${marked.size}): ${[...marked].sort((a, b) => a.localeCompare(b, "en")).join(", ")}`
        :   "No name carries a length mark.",
    );
    // Printed rather than hidden, because a filter nobody can see is a filter
    // nobody can check.
    const distinct = [...new Set(bynames)].sort((a, b) => a.localeCompare(b, "en"));
    say(
        distinct.length ?
            `Read past as bynames, which the note renders in the reader's tongue (${distinct.length}): ${distinct.join(", ")}`
        :   "No byname was read past.",
    );
    const framed = [...new Set(titles)].sort((a, b) => a.localeCompare(b, "en"));
    say(
        framed.length ?
            `Read past as titles in the reader's tongue (${framed.length}): ${framed.join(", ")}`
        :   "No title was read past.",
    );
    say("Names are read from frontmatter and from the note's own lists; prose is not read.");

    const errors = out.filter((line) => line.includes(": error: ")).length;
    const warnings = out.filter((line) => line.includes(": warning: ")).length;
    if (errors === 0) {
        say("The lexicon holds: every name in the corpus fits its class's rule.");
        return 0;
    }
    console.error(`${errors} error(s) and ${warnings} warning(s) across ${names.length} name(s).`);
    return 1;
}

// Run as a command; imported, the predicates stand on their own.
if (import.meta.filename === path.resolve(process.argv[1] ?? "")) process.exit(main());
