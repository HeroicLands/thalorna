/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Nordmal lexicon.
 *
 * `Skills/Languages/Nordmal.md` states a formation rule for every class of
 * name the north carries: given names and clan names built from a stem and an
 * ending, and places, offices, orders, gods and earned clan names built as
 * compounds of elements. This guard asks one question of every name the corpus
 * holds — does it fit the rule for its class? — and answers it as a red test
 * with a count per class, because that enumeration is the work list a rename
 * reads.
 *
 * **The note is the single source.** Every predicate here is derived from the
 * note's own tables at run time: the stems, the endings, the elements, the
 * place generics, the office suffixes, the kept words, the opening and closing
 * inventories, the consonant band and the syllable counts. Nothing is restated,
 * because a second copy of a rule drifts from the first the moment either is
 * edited, and the note is where a phonology is settled.
 *
 * Two halves.
 *
 * **The corpus.** Names are read from frontmatter and from the note's own
 * lists, never from prose: a name in frontmatter is a name, while a capitalized
 * word in a sentence is a guess. Each is tested against the class its note
 * declares, and a name that fits no rule for its class is reported with the
 * rule it breaks.
 *
 * **The concordance.** `utils/nordmal-concordance.json` settles which names are
 * old and which are new. A name it settles as new, or keeps as standing, that
 * this note's rules reject is a disagreement between two settled things rather
 * than work for a rename, so it is reported as a warning and counted apart.
 *
 * Three traps the rules and this guard answer together:
 *
 * 1. **A bound seam degeminates and a compound seam does not.** `alth-` with
 *    `-thann` is Althann, while `storm-` with `-maelendir` is Stormmaelendir.
 *    A single seam rule applied to both would accept half the corpus twice and
 *    reject the other half.
 * 2. **No minimum length anywhere.** `ís-`, `bú-`, `ná-` and `ód-` are two
 *    characters and `-ven` three, so a decomposition that required a longer
 *    piece would silently refuse the shortest elements the note publishes.
 * 3. **A byname is not a Nordmal word.** The note renders bynames in the
 *    reader's tongue, so Oakheart and the Crow are counted and read past. Every
 *    one is printed, because a filter nobody can see is a filter nobody can
 *    check.
 *
 * A guard proves completeness, never accuracy. Whether `Hlartharukh` is a good
 * name for a clan of the passes is a judgement; whether it is formed the way
 * the note says a clan name is formed is arithmetic, and only the second is
 * answered here.
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
const NOTE = "assets/content/Skills/Languages/Nordmal.md";

/** The register of which names are settled old and which settled new. */
const CONCORDANCE = "utils/nordmal-concordance.json";

/** Where the authored tree lives. */
const CONTENT_DIR = "assets/content";

/** The region whose places are named in Nordmal. */
const NORDLANDS = "Regions/Ankaris/Nordlands/";

/** The culture whose people are named in Nordmal. */
const CULTURE = "nordheimnclt";

/** Where the gods, their orders and their rites are filed. */
const DIVINE = ["Affiliations/Divine/Asguardian/", "Lore/Deities/Asguardian/"];
const ORDERS = "Affiliations/Organizations/Asguardian_Orders/";

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

/**
 * The whole rule, read off the note.
 *
 * @param {string} text - The note.
 * @returns {object} Every derived inventory.
 */
export function lexiconFrom(text) {
    // The stems, in three grades apiece.
    const stems = new Map();
    for (const cells of rows(section(text, "### Name-stems and name-endings"))) {
        const [hard, middle, deep, sense] = cells.map((cell) => cell.replace(/[_*`]/g, "").trim());
        for (const [form, grade] of [
            [hard, "hard"],
            [middle, "middle"],
            [deep, "deep"],
        ]) {
            stems.set(form, { base: hard, grade, sense });
        }
    }

    // The endings a name-giver and a ting put on a stem.
    const bestowal = new Map();
    for (const [ending, names] of rows(section(text, "### The bestowal endings"))) {
        const bare = ticked(ending)[0]?.replace(/^-/, "");
        if (!bare) continue;
        bestowal.set(bare, /woman/.test(names) ? "female" : "male");
    }
    const ting = new Set();
    for (const [ending] of rows(section(text, "### The ting-endings"))) {
        const bare = ticked(ending)[0]?.replace(/^-/, "");
        if (bare) ting.add(bare);
    }

    // The elements. A row whose entry opens with a hyphen closes a compound;
    // anything else opens one. Several spellings may share one row.
    const opening = new Set();
    const closing = new Set();
    // One row may write one element two ways—`thrún-` and `thrumu-` are the
    // same piece—so the spellings of a row are kept together. A god's name
    // clipped into a place name may arrive in either.
    const kin = new Map();
    for (const [entry] of rows(section(text, "### The element lexicon"))) {
        const forms = ticked(entry);
        const row = forms.map((form) => form.replace(/^-|-$/g, "").toLowerCase());
        for (const form of forms) {
            const bare = form.replace(/^-|-$/g, "").toLowerCase();
            if (form.startsWith("-")) closing.add(bare);
            else opening.add(bare);
            kin.set(bare, row);
        }
    }

    // § _Place names_ carries two tables. The generics tick their entry in the
    // first column; the table of what may stand first ticks it in the second,
    // and names in words the two sources no list can hold—a god's name and a
    // founder's, which are resolved from the register and from the note's own
    // given-name rule.
    const generics = new Set();
    const placeFirst = new Set();
    let fromGod = false;
    let fromFounder = false;
    for (const cells of rows(section(text, "### Place names"))) {
        const head = ticked(cells[0] ?? "");
        if (head.length) {
            for (const form of head) generics.add(form.replace(/^-/, "").toLowerCase());
            continue;
        }
        // The god's row and the founder's row describe a source rather than
        // listing a form, and the founder's row ticks the genitive markers. So
        // neither row's tick marks are read as elements, which would otherwise
        // put a bare `s` and a bare `a` in front of every generic.
        if (/\bgod\b/.test(cells[0] ?? "")) {
            fromGod = true;
            continue;
        }
        if (/\bfounder\b/.test(cells[0] ?? "")) {
            fromFounder = true;
            continue;
        }
        for (const form of ticked(cells[1] ?? ""))
            placeFirst.add(form.replace(/^-|-$/g, "").toLowerCase());
    }

    const offices = new Set();
    const kept = new Set();
    const ranks = section(text, "### Ranks, offices and orders");
    for (const cells of rows(ranks)) {
        const marks = ticked(cells[0]);
        if (marks.length)
            for (const form of marks) offices.add(form.replace(/^-/, "").toLowerCase());
        else for (const word of cells[0].split(/,\s*/)) kept.add(word.trim().toLowerCase());
    }

    // The words a reader meets in their own tongue, from the closed list the
    // byname section states.
    const bynames = section(text, "### Bynames");
    const closedList = bynames.match(/the list is closed:([^.]+)\./);
    const readerTongue = new Set(
        (closedList ? closedList[1] : "")
            .split(/,\s*/)
            .map((word) =>
                word
                    .replace(/^the\s+/i, "")
                    .trim()
                    .toLowerCase(),
            )
            .filter(Boolean),
    );

    // The names older than the stem system, which the note bolds.
    const standing = new Set(
        [...section(text, "### The names that stand").matchAll(/\*\*([^*]+)\*\*/g)]
            .map((match) => match[1].trim().toLowerCase())
            .filter((word) => /^[\p{L}\p{M}]+$/u.test(word)),
    );

    // The openings and the closings.
    const sounds = section(text, "### Openings and closings");
    const onsets = new Set();
    let finals = new Set();
    let clanFinal = null;
    let doubled = new Set();
    for (const cells of rows(sounds)) {
        const label = cells[0].toLowerCase();
        const marks = ticked(cells[1] ?? "");
        if (/^(one sound|two|three)$/.test(label)) for (const mark of marks) onsets.add(mark);
        else if (/^any name$/.test(label)) finals = new Set(marks);
        else if (/clan name/.test(label)) clanFinal = marks[0] ?? null;
        else if (/written double/.test(label)) doubled = new Set(marks);
    }

    // The letters, from the paragraph that closes the set.
    const letterPara = sounds ? text.slice(text.indexOf("**The letters are a closed set.**")) : "";
    const letters = new Set();
    for (const run of ticked(letterPara.slice(0, letterPara.indexOf("\n\n"))))
        for (const letter of run.split(/\s+/)) letters.add(letter.toLowerCase());
    const forbidden = new Set(
        [...letterPara.slice(0, letterPara.indexOf("\n\n")).matchAll(/no `([a-z])`/g)].map(
            (match) => match[1],
        ),
    );

    // The bands, one row per class of name.
    const bands = new Map();
    for (const cells of rows(sounds)) {
        if (!/consonants per vowel/.test(cells[1] ?? "") && ticked(cells[1] ?? "").length === 2) {
            const [low, high] = ticked(cells[1]).map(Number);
            const [least, most] = ticked(cells[2] ?? "").map(Number);
            bands.set(/compound/.test(cells[0]) ? "compound" : "bound", { low, high, least, most });
        }
    }

    // The diphthongs, from the sentence that closes that set too.
    const hiatus = sounds.slice(sounds.indexOf("**There is no glottal stop.**"));
    const diphthongs = new Set(ticked(hiatus.slice(0, hiatus.indexOf("\n\n") + 1 || undefined)));

    // The same paragraph names what Nordmal writes and what it refuses, so the
    // refused letters are taken back out of the set the tick marks collected.
    for (const letter of forbidden) letters.delete(letter);

    // A published element keeps its own spelling wherever it stands, so the
    // pairs inside one are read alongside the free diphthongs rather than
    // reported against every compound the element closes.
    for (const element of [...opening, ...closing, ...generics]) {
        for (const pair of element.matchAll(/[aeiouyáéíóúýö]{2,}/gu)) diphthongs.add(pair[0]);
    }

    const vowels = new Set([...letters].filter((letter) => "aeiouyáéíóúýö".includes(letter)));
    return {
        stems,
        bestowal,
        ting,
        opening,
        closing,
        generics,
        offices,
        kept,
        readerTongue,
        kin,
        placeFirst,
        fromGod,
        fromFounder,
        // Filled from the register of the gods, which a language note is not
        // where to settle. `withGods` puts it here.
        godFirst: new Set(),
        compoundEnds: new Set([...closing, ...generics]),
        standing,
        onsets,
        finals,
        clanFinal,
        doubled,
        letters,
        forbidden,
        bands,
        diphthongs,
        vowels,
    };
}

/**
 * A word cut into sounds, with `th` and `kh` counted as one apiece.
 *
 * @param {string} word - The name, in any case.
 * @returns {string[]} The sounds, lower case.
 */
export function sounds(word) {
    const lower = word.toLowerCase();
    const out = [];
    for (let i = 0; i < lower.length;) {
        if (lower.startsWith("th", i) || lower.startsWith("kh", i)) {
            out.push(lower.slice(i, i + 2));
            i += 2;
        } else {
            out.push(lower[i]);
            i += 1;
        }
    }
    return out;
}

/**
 * A stem and a bestowal or ting ending joined, degeminated at the seam.
 *
 * The bound seam is the only seam that degeminates, so this is used for given
 * and clan names and for nothing else.
 *
 * @param {string} stem - The name-stem.
 * @param {string} ending - The ending, without its hyphen.
 * @returns {string} The name, lower case.
 */
export function bind(stem, ending) {
    for (const digraph of ["th", "kh"]) {
        if (stem.endsWith(digraph) && ending.startsWith(digraph))
            return stem + ending.slice(digraph.length);
    }
    const last = stem.slice(-1);
    if (last === ending[0]) return stem + ending.slice(1);
    return stem + ending;
}

/** A name with its first letter raised, the way the corpus writes one. */
function cap(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Whether a word is a compound of published elements.
 *
 * The search is exhaustive rather than greedy, because `hring` opens a compound
 * and `hringr` closes one, so a longest-first pass would take the wrong piece
 * and report a lawful name as broken. A genitive `-s` or `-a` may stand at any
 * seam but the last, and the final element may take the strong `-r`.
 *
 * @param {string} word - The name, lower case.
 * @param {object} rule - The derived lexicon.
 * @param {Set<string>} last - What may stand in the final position.
 * @returns {string[]|null} The elements, or null when nothing decomposes it.
 */
export function decompose(word, rule, last) {
    const walk = (rest, taken) => {
        if (taken.length >= 1) {
            for (const tail of last) {
                if (rest === tail) return [...taken, tail];
                if (rest === `${tail}r` && !tail.endsWith("r")) return [...taken, tail];
            }
        }
        for (const head of rule.opening) {
            for (const seam of ["", "s", "a"]) {
                const piece = head + seam;
                if (!rest.startsWith(piece) || rest.length === piece.length) continue;
                const found = walk(rest.slice(piece.length), [...taken, head]);
                if (found) return found;
            }
        }
        return null;
    };
    // A bare quality takes the strong `-r` on one element alone.
    for (const head of rule.opening) {
        if (word === `${head}r`) return [head];
    }
    return walk(word, []);
}

/**
 * The gods' names, resolved into the elements they lend a place.
 *
 * The note states the rule—a place held from a god takes that god's name,
 * clipped to its first element—and says nothing about who the gods are,
 * because a language note is not where a pantheon is settled. The register is
 * `utils/nordmal-concordance.json`, which the tree already keeps and another
 * packet already maintains, so this reads it rather than carrying a second
 * list that would drift from it.
 *
 * Every spelling of the element's row is admitted, since a row writes one
 * piece more than one way: Thrúnvald lends `thrún-` and `thrumu-` alike.
 *
 * @param {object} rule - The derived lexicon.
 * @param {object} table - The concordance.
 * @returns {object} The same rule, with the gods' openings filled in.
 */
export function withGods(rule, table) {
    if (!rule.fromGod) return rule;
    for (const entry of table.entries ?? []) {
        if (entry.subType !== "deity" || !entry.newName || /\s/.test(entry.newName)) continue;
        const pieces = decompose(entry.newName.toLowerCase(), rule, rule.compoundEnds);
        if (!pieces) continue;
        for (const spelling of rule.kin.get(pieces[0]) ?? [pieces[0]]) rule.godFirst.add(spelling);
    }
    return rule;
}

/**
 * The checks every Nordmal name answers whatever its class.
 *
 * @param {string} name - The name as written.
 * @param {object} rule - The derived lexicon.
 * @param {"bound"|"compound"} band - Which band the class sits in.
 * @returns {string[]} What the name breaks, in the note's words.
 */
export function shape(name, rule, band) {
    const broken = [];
    const segs = sounds(name);
    for (const seg of segs) {
        if (rule.letters.has(seg)) continue;
        // Everything downstream reads the unknown letter as a consonant, so a
        // single wrong letter would otherwise report an opening, a closing and
        // a ratio that are all artifacts of it.
        return [`it is written with "${seg}", which Nordmal does not write`];
    }
    if (name.includes("'") || name.includes("’"))
        broken.push("it carries an apostrophe, and Nordmal has no glottal stop");

    let opening = 0;
    while (opening < segs.length && !rule.vowels.has(segs[opening])) opening += 1;
    const onset = segs.slice(0, opening).join("");
    if (onset && !rule.onsets.has(onset))
        broken.push(`it opens on "${onset}", which is not an opening Nordmal uses`);

    const tail = segs[segs.length - 1];
    const twin = segs.slice(-2).join("");
    const closes =
        rule.vowels.has(tail) ||
        rule.finals.has(tail) ||
        tail === rule.clanFinal ||
        rule.doubled.has(twin);
    if (!closes) broken.push(`it closes on "${tail}", which no Nordmal word closes on`);

    const vowelCount = segs.filter((seg) => rule.vowels.has(seg)).length;
    const consonants = segs.length - vowelCount;
    if (vowelCount === 0) broken.push("it carries no vowel");
    else {
        const { low, high, least, most } = rule.bands.get(band);
        const ratio = consonants / vowelCount;
        if (ratio < low || ratio > high)
            broken.push(
                `it carries ${ratio.toFixed(2)} consonants to the vowel, outside the ${low} to ${high} band`,
            );
        if (
            Number.isFinite(least) &&
            Number.isFinite(most) &&
            (vowelCount < least || vowelCount > most)
        )
            broken.push(
                `it runs ${vowelCount} syllable(s), outside the ${least} to ${most} a ${band} name runs`,
            );
    }

    const lower = name.toLowerCase();
    for (const pair of lower.matchAll(/[aeiouyáéíóúýö]{2,}/gu)) {
        if (pair[0].length > 2 || !rule.diphthongs.has(pair[0]))
            broken.push(`"${pair[0]}" is not one of the diphthongs Nordmal writes`);
    }
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

    if (kind === "given" || kind === "clan") {
        const endings = kind === "given" ? [...rule.bestowal.keys()] : [...rule.ting];
        for (const [stem] of rule.stems) {
            for (const ending of endings) {
                if (bind(stem, ending) === lower) return [];
            }
        }
        if (kind === "given") {
            if (lower.includes("kh"))
                return ['it carries a "kh", which no given name carries anywhere'];
            return [
                "it is not a name-stem in one of the eight bestowal endings",
                ...shape(name, rule, "bound"),
            ];
        }
        // A clan name is a ting-built name or an earned compound.
        if (decompose(lower, rule, rule.compoundEnds)) return shape(name, rule, "compound");
        return [
            "it is neither a name-stem in a ting-ending nor a compound of published elements",
            ...shape(name, rule, "compound"),
        ];
    }

    if (kind === "place") {
        for (const generic of rule.generics) {
            if (!lower.endsWith(generic) || lower.length === generic.length) continue;
            const head = lower.slice(0, lower.length - generic.length);
            // Held from the ground alone: a name-stem, degeminating at the seam.
            for (const [stem] of rule.stems) {
                if (stem === head || bind(stem, generic) === lower) return [];
            }
            // Held from a god, from the ting and its law, from a sanctuary or
            // from the gods' world: the forms the note's own table names.
            if (rule.placeFirst.has(head) || rule.godFirst.has(head)) return [];
            // Held from a founder: a lawful given name, with a genitive at the
            // seam or with none.
            if (rule.fromFounder) {
                for (const [stem] of rule.stems) {
                    for (const ending of rule.bestowal.keys()) {
                        const given = bind(stem, ending);
                        if (head === given || head === `${given}s` || head === `${given}a`)
                            return [];
                    }
                }
            }
        }
        const generic = [...rule.generics].find(
            (end) => lower.endsWith(end) && lower.length > end.length,
        );
        return [
            generic ?
                `its generic "-${generic}" stands, and its first element "${name.slice(0, lower.length - generic.length)}-" is neither a name-stem nor a name the place can be held from`
            :   "it is not a first element and a place generic",
            ...shape(name, rule, "compound"),
        ];
    }

    if (kind === "realm") {
        if (rule.standing.has(lower)) return [];
        return ["it is not one of the names the note lists as standing"];
    }

    if (kind === "rank") {
        if (rule.kept.has(lower)) return [];
        if (decompose(lower, rule, rule.offices)) return [];
        return [
            "it is neither a word the tongue keeps nor an element in an office suffix",
            ...shape(name, rule, "compound"),
        ];
    }

    // A god, an order or anything else the corpus names is a compound.
    if (decompose(lower, rule, rule.compoundEnds)) return shape(name, rule, "compound");
    return ["it is not a compound of published elements", ...shape(name, rule, "compound")];
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
 * Every name the corpus holds, with the class it belongs to and where it is
 * written.
 *
 * Names come from frontmatter and from the language note's own lists. Prose is
 * not read: a name in frontmatter is a name, while a capitalized word in a
 * sentence is a guess, and a work list built on guesses costs more to check
 * than to build.
 *
 * @param {object} rule - The derived lexicon.
 * @returns {object[]} `{ name, kind, file, line, column }` for each.
 */
export function corpus(rule) {
    const found = [];
    const bynames = [];
    const titles = [];
    // A note's title may be a frame in the reader's tongue—`Faith of Ódinn`,
    // `The Order of Ymir's Children`—and the Nordmal inside one stands beside
    // it as a single-word alias. So a title of more than one word is counted
    // and printed rather than judged, and its aliases are judged instead.
    const add = (name, kind, file, raw, framed = false) => {
        if (typeof name !== "string" || !name.trim()) return;
        const word = name.trim();
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

        if (front.type === "being" && front.data?.culture === CULTURE) {
            add(front.name?.given, "given", file, raw);
            add(front.name?.clan, "clan", file, raw);
            const full = String(front.name?.full ?? "");
            const parts = [front.name?.given, front.name?.clan].filter(Boolean).map(String);
            let rest = full;
            for (const part of parts) rest = rest.replace(part, " ");
            rest = rest.replace(/\b(King|Queen|Jarl|[IVX]+)\b/g, " ").trim();
            for (const alias of [rest, ...(front.name?.aliases ?? [])]) {
                if (alias && String(alias).trim()) bynames.push(String(alias).trim());
            }
        }

        if (front.type === "place" && relative.startsWith(NORDLANDS)) {
            const kind = front.subType === "region" ? "realm" : "place";
            add(front.name?.full, kind, file, raw, true);
            for (const alias of front.name?.aliases ?? []) add(alias, kind, file, raw, true);
        }

        for (const [dirs, kind] of [
            [DIVINE, "theonym"],
            [[ORDERS], "order"],
        ]) {
            if (!dirs.some((dir) => relative.startsWith(dir))) continue;
            add(front.name?.full, kind, file, raw, true);
            for (const alias of front.name?.aliases ?? []) add(alias, kind, file, raw, true);
        }

        const governance = front.data?.governance;
        if (governance && relative.startsWith(NORDLANDS)) {
            for (const rank of governance.ranks ?? []) add(rank.title, "rank", file, raw);
            for (const office of Object.keys(governance.offices ?? {}))
                add(office, "rank", file, raw);
        }
    }

    // The note's own lists, which the note must pass before anything else does.
    const note = fs.readFileSync(NOTE, "utf8");
    for (const [heading, kind] of [
        ["## Male Given Names", "given"],
        ["## Female Given Names", "given"],
        ["## Clan Names", "clan"],
    ]) {
        const from = note.indexOf(`\n${heading}\n`);
        const body = section(note, heading).split("\n").slice(1).join("\n").trim();
        for (const name of body.split(/,\s*/).filter(Boolean)) {
            const { line, column } = positionOf(note, name, from);
            found.push({ name, kind, file: NOTE, line, column, listed: heading });
        }
    }
    return { names: found, bynames, titles };
}

/**
 * The note's lists, checked against the tables they are built from.
 *
 * @param {object[]} names - The corpus rows drawn from the note.
 * @param {object} rule - The derived lexicon.
 * @returns {string[]} Findings.
 */
export function checkLists(names, rule) {
    const out = [];
    const listed = names.filter((row) => row.listed);
    for (const heading of new Set(listed.map((row) => row.listed))) {
        const inList = listed.filter((row) => row.listed === heading);
        const seen = new Set();
        const stemsUsed = new Set();
        for (const row of inList) {
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
            const endings = row.kind === "given" ? [...rule.bestowal.keys()] : [...rule.ting];
            for (const [stem] of rule.stems) {
                for (const ending of endings) {
                    if (bind(stem, ending) === row.name.toLowerCase()) stemsUsed.add(stem);
                }
            }
        }
        const missing = [...rule.stems.keys()].filter((stem) => !stemsUsed.has(stem));
        if (missing.length)
            out.push(
                finding(
                    NOTE,
                    null,
                    null,
                    "error",
                    `${heading} names no name from ${missing.length} of the ${rule.stems.size} stem-forms: ${missing.join(", ")}`,
                ),
            );
        if (inList.length !== rule.stems.size)
            out.push(
                finding(
                    NOTE,
                    null,
                    null,
                    "error",
                    `${heading} holds ${inList.length} name(s) against ${rule.stems.size} stem-forms; the list carries one for each`,
                ),
            );
    }
    return out;
}

/** Where a concordance row's class comes from. */
const CONCORDANCE_KIND = new Map([
    ["deity", "theonym"],
    ["rank", "rank"],
    ["settlement", "place"],
]);

/**
 * Every name the concordance settles as new, or keeps as standing, that this
 * note's rules reject.
 *
 * These are not work for a rename. They are two settled things disagreeing, so
 * they are reported as warnings and counted apart.
 *
 * @param {object} table - The concordance.
 * @param {object} rule - The derived lexicon.
 * @param {Map<string, number>} tally - Where the count is collected.
 * @returns {string[]} Findings.
 */
export function checkConcordance(table, rule, tally) {
    const out = [];
    const seen = new Set();
    const rowsToCheck = [
        ...(table.entries ?? [])
            .filter((entry) => entry.newName && entry.type !== "spelling")
            .map((entry) => ({
                name: entry.newName,
                kind:
                    entry.type === "place" ?
                        "place"
                    :   (CONCORDANCE_KIND.get(entry.subType) ?? "compound"),
                why: "the concordance settles it as new",
            })),
        // A keep-list row says a name stands and does not say what kind of name
        // it is, so it is held to whichever rule fits: a place name and a
        // compound are both lawful things for one to be.
        ...(table.keep ?? []).map((entry) => ({
            name: entry.literal,
            kind: ["compound", "place"],
            why: "the concordance keeps it standing",
        })),
    ];
    for (const row of rowsToCheck) {
        const word = String(row.name).replace(/^the\s+/i, "");
        if (/[\s']/.test(word) || seen.has(word)) continue;
        seen.add(word);
        const kinds = Array.isArray(row.kind) ? row.kind : [row.kind];
        const verdicts = kinds.map((kind) => ({ kind, broken: judge(word, kind, rule) }));
        if (verdicts.some((verdict) => verdict.broken.length === 0)) continue;
        for (const { kind, broken } of verdicts) {
            out.push(
                finding(
                    CONCORDANCE,
                    null,
                    null,
                    "warning",
                    `"${row.name}" — ${row.why}, and the ${kind} rule rejects it: ${broken.join("; ")}`,
                ),
            );
            tally.set(kind, (tally.get(kind) ?? 0) + 1);
        }
    }
    return out;
}

/** Run every half and report. @returns {number} The exit code. */
function main() {
    for (const file of [NOTE, CONCORDANCE]) {
        if (!fs.existsSync(file)) {
            console.error(`${file}: error: it is absent, and every rule is read from it`);
            return 1;
        }
    }
    const note = fs.readFileSync(NOTE, "utf8");
    const table = JSON.parse(fs.readFileSync(CONCORDANCE, "utf8"));
    const rule = withGods(lexiconFrom(note), table);
    const { names, bynames, titles } = corpus(rule);

    const out = [];
    const byClass = new Map();
    const offByClass = new Map();
    // A rename works from names, not from occurrences: the nine retired ranks
    // stand in five kingdom notes apiece, and that is nine pieces of work.
    const offDistinct = new Map();
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
    out.push(...checkLists(names, rule));

    const disagreements = new Map();
    out.push(...checkConcordance(table, rule, disagreements));

    for (const line of out) console.error(line);

    const say = (line) => process.stdout.write(`${line}\n`);
    const list = (map) =>
        [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([key, n]) => `${key}=${n}`)
            .join("  ");

    say(
        `The rules are read off ${NOTE}: ${rule.stems.size} stem-forms, ` +
            `${rule.bestowal.size} bestowal endings, ${rule.ting.size} ting-endings, ` +
            `${rule.opening.size + rule.closing.size} elements, ${rule.generics.size} place generics, ` +
            `${rule.offices.size} office suffixes, ${rule.kept.size} kept words. ` +
            `A place may also be held from ${rule.godFirst.size} god-element(s) and ` +
            `${rule.placeFirst.size} named source(s), which ${CONCORDANCE} and the note's own table supply.`,
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
        disagreements.size ?
            `Settled names this note's rules reject, by class: ${list(disagreements)}`
        :   "Every name the concordance settles fits its class's rule.",
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
        say(`The lexicon holds: every name in the corpus fits its class's rule.`);
        return warnings === 0 ? 0 : 0;
    }
    console.error(`${errors} error(s) and ${warnings} warning(s) across ${names.length} name(s).`);
    return 1;
}

// Run as a command; imported, the predicates stand on their own.
if (import.meta.filename === path.resolve(process.argv[1] ?? "")) process.exit(main());
