/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard for the Nordmal drift.
 *
 * The drift retires verbatim Earth names in the north's faith and rank layer
 * and gives the setting its own. Completeness is the thing no reader
 * can check by eye — one survivor in a thousand notes is invisible in a diff —
 * so the check derives the whole question from one table and answers it as a
 * red test.
 *
 * **`utils/nordmal-concordance.json` is the single source.** It carries every
 * historical form a name has been written in, from the pre-rename import
 * onward — provenance the tree's current text alone cannot supply, since a
 * name an earlier pass removed is invisible to a scan of today's tree. Nothing
 * here restates a pair, because a second copy drifts from the first the
 * moment either is edited, which is exactly the failure this guard exists to
 * prevent, moved one level up.
 *
 * **One row per thing, and the sweep reads every form that row retires.** A
 * row holds the primary retired name in `oldName` and every other name the
 * thing answered to in `oldAliases`, so both fields are read. `newAliases` is
 * where a name the thing still carries stands now, so **a form `newAliases`
 * also holds is live and is read past, whichever old field it came from**. That
 * subtraction is the whole of the rule: `oldName` plus `oldAliases` less
 * `newAliases`. Reading the old fields whole instead reports a kept name in the
 * very note that states it — which is what a thing that takes its culture's own
 * word and keeps its former name as an alias does — and reading `oldName` alone
 * stops sweeping every form a merge folded into the aliases.
 *
 * Two halves.
 *
 * **No retired token survives in an in-world sentence.** Read past: a
 * `shortcode` line, a file path, a wikilink's or a markdown link's target, an
 * `affiliation-<god>` line, a `terran_analog` value, a `renamedFrom` line and
 * fenced or inline code. Shortcodes stay the Earth names on purpose, so those
 * exceptions are the heart of the rule and each is written out rather than
 * folded into one exclusion that a later hand can widen. **A wikilink's label
 * is prose and is read**, because a label is what a reader meets.
 *
 * **How far a form is swept is the form's own business, and the row states it.**
 * A theonym, a place, an order, a given name or a Nordmal rank word is a name
 * no other tongue writes by accident, and a pantheon that measures its own
 * maker against the north's writes the north's name inside its own note, so
 * these are swept across the whole corpus and a comparison made from anywhere
 * is reached. A `lore`/`rank` row retires something else: the phrase in the
 * reader's tongue that a standing bore before its culture had a word of its
 * own. `Elder` and `Hunter` are ordinary words, so those forms are swept only
 * in material of the culture whose ladder they name. An office has no note or
 * aliases; its former English phrase is also an ordinary word, even there.
 * The Varokhi lexicon guard checks every `data.governance.offices` key, so the
 * prose sweep skips a row verified as a current office key. No second list of
 * office words is kept here.
 *
 * **The romanisation holds.** The rule is derived from the language note's own
 * § _Romanizing Nordmal_ table: the `written` column gives the letters and the
 * marks Nordmal spells, the `never` column gives the letters it does not, and
 * the sentence beneath gives the assembly its hard opening. A mark outside the
 * derived set, a letter the table forbids, or the assembly spelled `Thing` is
 * a break. This half reads Nordmal and Varokhi material alone, which the table
 * declares, and reads past the words of other tongues that stand in it, which
 * the table also declares and the summary prints.
 *
 * Three traps the table and this guard answer together:
 *
 * 1. **Every spelling is written out, as a form of its thing's one row.**
 *    `Odinn`, `Óðinn` and `Oðinn` are forms of the row `Ódinn` retires;
 *    `Njördr`, `Njordur` and `Njörðr` of the row `Njördur` retires. Each is
 *    swept in its own right rather than reached through the primary, so a rule
 *    written from one spelling cannot report clean. A row's `historical` flag
 *    speaks for its primary form, and each citation's revision says where any
 *    other form stood.
 * 2. **Short tokens are reached.** `Týr` and `Hél` are three characters and
 *    `Lôki` and `Ymir` four, and no minimum length is imposed anywhere. `Hel`
 *    is the one entry that needs its context — `Hel.` abbreviates Helonic in
 *    the language notes — and that single exception is written out below
 *    rather than carried as a per-entry field no other row needs.
 * 3. **A retired name inside a kept word.** The keep-list is matched first and
 *    its spans are taken, so no retired token fires inside a word that keeps
 *    one. Longest match first among the retired tokens themselves, so
 *    `Bjorn-Königers` is found before `Bjorn-König` could claim part of it —
 *    both are written-out forms of one row, rather than one form matched
 *    through an inflection, so a spelling the sweep has not yet met is not
 *    silently assumed to be covered.
 *
 * A guard proves completeness, never accuracy. Whether `Ódvar` is the right
 * name for the Fury-Ward is a judgement; whether it reached every sentence is
 * arithmetic, and only the second is answered here.
 *
 * Findings are written `file:line:column: severity: message`, the path first on
 * the line and relative to the working directory. Both severities go to stderr
 * and the summary to stdout.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** Where the authored tree lives. */
const CONTENT_DIR = "assets/content";

/** The table every packet and this guard read from. */
const MAPPING_FILE = "utils/nordmal-concordance.json";

/**
 * The one context exception the corpus needs. `Hel.` abbreviates Helonic in
 * the language notes, so the bare form is excepted when followed by a full
 * stop. No other entry needs a context exception, so this stays a single
 * hardcoded case rather than a per-entry field every other row would carry as
 * `null`.
 */
const HEL_ABBREVIATION = /^\./u;

/**
 * A note's address written bare, by the prefixes the corpus writes.
 *
 * Held to those prefixes rather than to any hyphenated lower-case word,
 * because `rune-priests` and `world-tree` are prose and a sweep that read past
 * them would read past whatever stood beside them.
 */
const ADDRESS =
    /(?<![\p{L}\p{M}])(?:affiliation|place|lore|being|skill|sohl|icon|miscgear|weapongear|armorgear|concoctiongear|mysticalability|mystery|scenario|doc)-[a-z0-9]+(?:#[\w-]+)?(?![\p{L}\p{M}])/gu;

/** The marks a language note may state in its romanisation table. */
const MARK_NAMES = new Map([
    ["́", "an acute"],
    ["̈", "a diaeresis"],
    ["̂", "a circumflex"],
    ["̄", "a macron"],
    ["̀", "a grave"],
    ["̃", "a tilde"],
    ["̌", "a caron"],
    ["̊", "a ring"],
]);

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
 * Every markdown file a packet writes that is not a note.
 *
 * `.changeset/` publishes into the changelog permanently and `README.md` is the
 * first page anyone reads, so both are swept with the tree.
 *
 * @returns {string[]} The paths that exist.
 */
function looseFiles() {
    const out = ["README.md"];
    if (fs.existsSync(".changeset")) {
        for (const name of fs.readdirSync(".changeset")) {
            if (name.endsWith(".md") && name !== "README.md")
                out.push(path.join(".changeset", name));
        }
    }
    return out.filter((file) => fs.existsSync(file));
}

/** A finding, in the shape every diagnostic in this repository takes. */
function finding(file, line, column, severity, message) {
    const at = [file, line, column].filter((part) => part !== null && part !== undefined).join(":");
    return `${at}: ${severity}: ${message}`;
}

/**
 * Read the mapping.
 *
 * @returns {object} The parsed table.
 */
function readMapping() {
    return JSON.parse(fs.readFileSync(MAPPING_FILE, "utf8"));
}

/**
 * A literal as a regular expression source.
 *
 * @param {string} text - The literal.
 * @returns {string} The escaped source.
 */
function escape(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * The pattern one retired token is matched by.
 *
 * The trailing boundary permits `'s` and nothing else: a rule that blocked a
 * following apostrophe would miss `Ódinn's` and `Ymir's Children`, and one
 * that allowed any apostrophe would reach into a foreign compound that carries
 * one. An inflected spelling such as `Bjorn-Königers` is its own entry rather
 * than a suffix matched onto `Bjorn-König`, so this pattern is never asked to
 * cross an inflection.
 *
 * @param {object} pair - The mapping row.
 * @returns {RegExp} The pattern.
 */
function patternFor(pair) {
    const before = "(?<![\\p{L}\\p{M}])";
    const after = "(?![\\p{L}\\p{M}])(?:(?=['’]s(?![\\p{L}\\p{M}]))|(?!['’]))";
    return new RegExp(`${before}${escape(String(pair.retired))}${after}`, "gu");
}

/**
 * Blank out the spans of a file nobody reads as a sentence, keeping every
 * position, so a finding lands where the text lands.
 *
 * @param {string} raw - The whole file.
 * @returns {string} The in-world text, the same length as the file.
 */
export function inWorld(raw) {
    const blank = (text) => text.replace(/[^\n]/g, " ");
    return (
        raw
            // Fenced code, then inline code.
            .replace(/```[\s\S]*?```/g, blank)
            .replace(/`[^`\n]*`/g, blank)
            // The frontmatter lines whose value is an address or the analog.
            .replace(/^(\s*shortcode:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*renamedFrom:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*terran_analog:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            .replace(/^(\s*#\s*terran_analog:)(.*)$/gm, (_all, key, rest) => key + blank(rest))
            // A wikilink's target, keeping its label; a bare wikilink is all
            // address and goes entirely.
            .replace(/\[\[([^\]\n]*)\]\]/g, (all, inner) => {
                const bar = inner.indexOf("|");
                if (bar === -1) return blank(all);
                return `${blank(`[[${inner.slice(0, bar)}|`)}${inner.slice(bar + 1)}  `;
            })
            // A markdown link's target.
            .replace(/\]\(([^)\n]*)\)/g, blank)
            // An address written bare — `affiliation-odvar`, `place-knalthstead`.
            // The prefixes are the corpus's own, so an ordinary hyphenated
            // compound stays prose and is read.
            .replace(ADDRESS, blank)
            // A file path, and a note's name written as one. Held to a
            // directory the tree has or to a file extension, so `Fadir/Módir`
            // and `Konungr/Konungrkvinde` are read as the titles they are.
            .replace(
                /(?<![\p{L}\p{M}])(?:https?:\/\/|(?:assets|modules|nogit|utils|build|src|lang|styles|systems|packs|images|icons|docs)\/)[\w./#:-]+/gu,
                blank,
            )
            .replace(
                /(?<![\p{L}\p{M}])[\w.-]*[A-Za-z_][\w.-]*\.(?:md|json|mjs|js|yaml|yml|png|webp|svg|jpg)(?![\p{L}\p{M}])/gu,
                blank,
            )
            // A note name written with underscores — `Faith_of_Odvar`.
            .replace(
                /(?<![\p{L}\p{M}])[\p{L}\p{M}]+(?:_[\p{L}\p{M}0-9]+)+(?![\p{L}\p{M}])/gu,
                blank,
            )
    );
}

/**
 * The 1-based line and column of an offset.
 *
 * @param {string} text - The file.
 * @param {number} offset - The offset.
 * @returns {{line: number, column: number}} The position.
 */
function positionOf(text, offset) {
    const before = text.slice(0, offset);
    const line = before.split("\n").length;
    const column = offset - (before.lastIndexOf("\n") + 1) + 1;
    return { line, column };
}

/**
 * A note's frontmatter block, parsed.
 *
 * @param {string} raw - The whole file.
 * @returns {object | null} The parsed frontmatter, or `null` where there is
 *   none or it does not parse.
 */
function frontmatterOf(raw) {
    if (!raw.startsWith("---")) return null;
    const end = raw.indexOf("\n---", 3);
    if (end === -1) return null;
    const fm = raw.slice(raw.indexOf("\n") + 1, end + 1);
    try {
        return YAML.parse(fm);
    } catch {
        return null;
    }
}

/**
 * Whether a retired rank row names a current governance office.
 *
 * Office rows have no standalone note or shortcode. Check the current key in
 * the note named by the row before leaving its old English phrase to the
 * Varokhi lexicon guard. A missing or changed key keeps the row in this sweep
 * rather than silently treating it as an office.
 *
 * @param {object} entry - A concordance row.
 * @returns {boolean} Whether the replacement is a governance office key.
 */
function isGovernanceOffice(entry) {
    if (
        entry.type !== "lore" ||
        entry.subType !== "rank" ||
        entry.newShortcode ||
        !entry.newPath ||
        !entry.newName ||
        !fs.existsSync(entry.newPath)
    )
        return false;
    const front = frontmatterOf(fs.readFileSync(entry.newPath, "utf8"));
    return Object.hasOwn(front?.data?.governance?.offices ?? {}, entry.newName);
}

/**
 * A `data.homes` or `data.parents` entry, normalised to the bare shortcode it
 * names.
 *
 * The corpus writes a place three ways: a bare shortcode, an address
 * (`place-eichengrnd`), or a wikilink (`[[place-eichengrnd|Eichengrund]]`).
 * Stripping the wikilink brackets, the label after `|`, a `#` fragment, and
 * the type prefix before the last `-` reaches the shortcode any of the three
 * names.
 *
 * @param {string} value - The authored value.
 * @returns {string} The shortcode, lower-cased.
 */
function namedShortcode(value) {
    let text = String(value).trim();
    if (text.startsWith("[[") && text.endsWith("]]")) text = text.slice(2, -2);
    text = text.split("|")[0].split("#")[0].trim();
    const dash = text.lastIndexOf("-");
    if (dash !== -1) text = text.slice(dash + 1);
    return text.toLowerCase();
}

/**
 * Every place note's own `data.parents`, keyed by address.
 *
 * Keyed `place-<shortcode>` rather than by the bare shortcode, because a
 * shortcode is unique within a type and not across the tree, and this reads
 * the whole address for the same reason {@link readIndex} in
 * `history-spine.mjs` does. Built from the frontmatter the sweep already holds
 * in memory, so resolving a settlement up its containment chain costs no
 * second read of the tree.
 *
 * @param {Array<{file: string, raw: string}>} files - Every file the sweep read.
 * @returns {Map<string, string[]>} Each place's own parents, as addresses.
 */
function placeIndex(files) {
    const index = new Map();
    for (const { raw } of files) {
        const fm = frontmatterOf(raw);
        if (!fm || fm.type !== "place" || !fm.shortcode) continue;
        const parents = Array.isArray(fm.data?.parents) ? fm.data.parents : [];
        index.set(
            `place-${namedShortcode(fm.shortcode)}`,
            parents.map((p) => `place-${namedShortcode(p)}`),
        );
    }
    return index;
}

/**
 * Every place on a containment chain, the start included.
 *
 * The `seen` set terminates the walk on a cycle rather than hanging it, the
 * way `continentOf` in `history-spine.mjs` does.
 *
 * @param {string} address - Where to start, as `place-<shortcode>`.
 * @param {Map<string, string[]>} index - Each place's own parents, from
 *   {@link placeIndex}.
 * @returns {Set<string>} The chain.
 */
function ancestryOf(address, index) {
    const chain = new Set();
    let frontier = [address];
    while (frontier.length) {
        const next = [];
        for (const current of frontier) {
            if (chain.has(current)) continue;
            chain.add(current);
            for (const parent of index.get(current) ?? []) next.push(parent);
        }
        frontier = next;
    }
    return chain;
}

/**
 * Whether a file is Nordmal or Varokhi material, which is what the
 * romanisation governs.
 *
 * A being's `data.homes` names the settlement it lives in, not the region
 * around it, so a home is resolved up its `data.parents` chain and the note is
 * in scope when any place on that chain is one `scope.homes` names. A value
 * that already names a region keeps matching directly, since a region is the
 * first place on its own chain.
 *
 * @param {string} file - The path, relative to the working directory.
 * @param {string} raw - The whole file.
 * @param {object} scope - The table's `scope`.
 * @param {Map<string, string[]>} index - Each place's own parents, from
 *   {@link placeIndex}.
 * @returns {boolean} Whether the romanisation is read here.
 */
export function inScope(file, raw, scope, index) {
    const relative = file.startsWith(`${CONTENT_DIR}/`) ? file.slice(CONTENT_DIR.length + 1) : file;
    if ((scope.paths ?? []).some((prefix) => relative.startsWith(prefix))) return true;
    if ((scope.notes ?? []).includes(relative)) return true;
    const fm = frontmatterOf(raw);
    const homes = Array.isArray(fm?.data?.homes) ? fm.data.homes : [];
    if (homes.length === 0) return false;
    const scopedHomes = new Set((scope.homes ?? []).map((code) => `place-${namedShortcode(code)}`));
    return homes.some((home) => {
        const chain = ancestryOf(`place-${namedShortcode(home)}`, index ?? new Map());
        return [...chain].some((address) => scopedHomes.has(address));
    });
}

/**
 * The romanisation, read off the language note's own table.
 *
 * The table's `written` column gives what Nordmal spells and its `never` column
 * gives what it does not. Reading them keeps the guard and the note from
 * disagreeing: a rule copied from the note is a second copy, and the note is
 * where a phonology is settled.
 *
 * @param {string} text - The language note.
 * @param {string} heading - The section's heading text.
 * @returns {{marks: Set<string>, forbidden: Map<string, string>}} The rule.
 */
export function romanisationFrom(text, heading) {
    const start = text.indexOf(heading);
    if (start === -1) throw new Error(`${heading} is not a section of the language note`);
    const rest = text.slice(start);
    const end = rest.indexOf("\n## ");
    const section = end === -1 ? rest : rest.slice(0, end);

    const marks = new Set();
    const forbidden = new Map();
    for (const line of section.split("\n")) {
        if (!line.trim().startsWith("|")) continue;
        const cells = line.split("|").map((cell) => cell.trim());
        if (cells.length < 5) continue;
        const written = cells[2].replace(/`/g, "");
        const never = cells[3];
        for (const mark of written.normalize("NFD").match(/\p{M}/gu) ?? []) marks.add(mark);
        // The `never` column names a letter rather than writing it, so the
        // names are what the note gives and what a finding quotes back.
        if (/thorn/i.test(never)) forbidden.set("þ", "a thorn");
        if (/\beth\b/i.test(never)) forbidden.set("ð", "an eth");
        if (/ash/i.test(never)) forbidden.set("æ", "an ash");
    }
    if (marks.size === 0 || forbidden.size === 0) {
        throw new Error(`${heading} states no romanisation table this rule can read`);
    }
    return { marks, forbidden };
}

/**
 * Every retired token surviving in an in-world sentence.
 *
 * **How far a row reaches is the row's own business.** A theonym, a place, an
 * order, a given name, a Nordmal rank word: no other tongue in the setting
 * writes any of them by accident, and a pantheon that compares its own maker to
 * the north's writes the north's name in its own note, so these are swept
 * across the whole corpus and a comparison made from anywhere is reached. The
 * English phrase a standing bore before its culture had a word of its own is
 * the other case: `Elder` and `Hunter` are ordinary words of the reader's
 * tongue, so retired standing phrases are swept only in their culture's
 * material, the same scope the romanisation holds to. `Guide` and `Healer`
 * are former office phrases, also ordinary words there; they are omitted by
 * {@link isGovernanceOffice}, since the Varokhi lexicon guard checks the
 * actual governance keys.
 *
 * `pair.scoped` carries that decision, derived in {@link main} from the row's
 * own `type` and `subType`, so nothing here is held to a second list of words.
 *
 * @param {object[]} pairs - The drift rows.
 * @param {object[]} keep - The keep-list.
 * @param {Array<{file: string, raw: string}>} files - The files to read.
 * @param {Set<string>} scoped - The paths that are Nordmal or Varokhi material.
 * @param {object} tally - Where counts are collected.
 * @returns {string[]} Findings.
 */
export function checkDrift(pairs, keep, files, scoped, tally) {
    const out = [];
    const keepPatterns = keep.map((entry) => ({
        ...entry,
        rx: new RegExp(
            `(?<![\\p{L}\\p{M}])${escape(String(entry.literal))}(?![\\p{L}\\p{M}])`,
            "gu",
        ),
    }));
    // Longest first, so an overlapping row is found at its full length and a
    // shorter row cannot claim part of it.
    const patterns = pairs
        .map((pair) => ({ ...pair, rx: patternFor(pair) }))
        .sort((a, b) => String(b.retired).length - String(a.retired).length);

    for (const { file, raw } of files) {
        const text = inWorld(raw);
        const ownTongue = scoped.has(file);
        /** @type {Array<[number, number]>} Spans a keep-list word or an earlier row has taken. */
        const taken = [];
        const overlaps = (from, to) => taken.some(([a, b]) => from < b && to > a);

        for (const entry of keepPatterns) {
            entry.rx.lastIndex = 0;
            let match;
            while ((match = entry.rx.exec(text)) !== null) {
                taken.push([match.index, match.index + match[0].length]);
                tally.kept.set(entry.literal, (tally.kept.get(entry.literal) ?? 0) + 1);
            }
        }

        for (const pair of patterns) {
            if (pair.scoped && !ownTongue) continue;
            pair.rx.lastIndex = 0;
            let match;
            while ((match = pair.rx.exec(text)) !== null) {
                const from = match.index;
                const to = from + match[0].length;
                if (overlaps(from, to)) continue;

                if (pair.retired === "Hel" && HEL_ABBREVIATION.test(text.slice(to))) {
                    tally.excluded.set(
                        "Hel followed by /\\./",
                        (tally.excluded.get("Hel followed by /\\./") ?? 0) + 1,
                    );
                    continue;
                }

                taken.push([from, to]);
                const { line, column } = positionOf(text, from);
                const says =
                    pair.drop ?
                        `the ${pair.group} table retires it and replaces it with nothing`
                    :   `the ${pair.group} table replaces it with "${pair.replacement}"`;
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `retired name "${match[0]}" survives; ${says}`,
                    ),
                );
                tally.byGroup.set(pair.group, (tally.byGroup.get(pair.group) ?? 0) + 1);
                tally.byToken.set(pair.retired, (tally.byToken.get(pair.retired) ?? 0) + 1);
            }
        }
    }
    return out;
}

/**
 * Every break of the romanisation in Nordmal and Varokhi material.
 *
 * @param {object} spec - The table's `romanisation`.
 * @param {{marks: Set<string>, forbidden: Map<string, string>}} rule - The derived rule.
 * @param {Array<{file: string, raw: string}>} files - The files in scope.
 * @param {object} tally - Where counts are collected.
 * @returns {string[]} Findings.
 */
export function checkRomanisation(spec, rule, files, tally) {
    const out = [];
    const foreign = new Map((spec.foreign ?? []).map((entry) => [entry.word, entry.tongue]));
    const variants = (spec.variants ?? []).map((entry) => ({
        ...entry,
        rx: new RegExp(
            `(?<![\\p{L}\\p{M}])${escape(String(entry.retired))}(?![\\p{L}\\p{M}])`,
            "gu",
        ),
    }));
    // The assembly keeps its hard opening, so the word the note refuses is the
    // one that buries it in an English noun. Only a capital is read: written
    // small it is that ordinary noun.
    const assembly = new RegExp(
        `(?<![\\p{L}\\p{M}])(?:Al)?Thing(?:s|stead)?(?![\\p{L}\\p{M}])`,
        "gu",
    );

    for (const { file, raw } of files) {
        const text = inWorld(raw);

        for (const match of text.matchAll(/[\p{L}\p{M}]+/gu)) {
            const word = match[0].normalize("NFC");
            if (foreign.has(word)) {
                tally.foreign.set(word, (tally.foreign.get(word) ?? 0) + 1);
                continue;
            }
            const decomposed = word.normalize("NFD");
            for (const [letter, name] of rule.forbidden) {
                const at = word.toLowerCase().indexOf(letter);
                if (at === -1) continue;
                const { line, column } = positionOf(text, match.index + at);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${word}" is written with ${name}; Nordmal writes it out`,
                    ),
                );
                tally.romanisation.set(name, (tally.romanisation.get(name) ?? 0) + 1);
            }
            for (const [offset, character] of [...decomposed].entries()) {
                if (!/\p{M}/u.test(character) || rule.marks.has(character)) continue;
                const name =
                    MARK_NAMES.get(character) ??
                    `the mark U+${character.codePointAt(0).toString(16)}`;
                const at = match.index + Math.min(offset, word.length - 1);
                const { line, column } = positionOf(text, at);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${word}" carries ${name}, which Nordmal does not write`,
                    ),
                );
                tally.romanisation.set(name, (tally.romanisation.get(name) ?? 0) + 1);
            }
        }

        assembly.lastIndex = 0;
        let match;
        while ((match = assembly.exec(text)) !== null) {
            const { line, column } = positionOf(text, match.index);
            out.push(
                finding(
                    file,
                    line,
                    column,
                    "error",
                    `"${match[0]}" is the assembly; the northern word for a lawful gathering is the ${spec.assembly}`,
                ),
            );
            tally.romanisation.set(
                "the assembly",
                (tally.romanisation.get("the assembly") ?? 0) + 1,
            );
        }

        for (const variant of variants) {
            variant.rx.lastIndex = 0;
            let hit;
            while ((hit = variant.rx.exec(text)) !== null) {
                const { line, column } = positionOf(text, hit.index);
                out.push(
                    finding(
                        file,
                        line,
                        column,
                        "error",
                        `"${variant.retired}" is written "${variant.replacement}" — ${variant.note}`,
                    ),
                );
                tally.romanisation.set(
                    "a name of the north",
                    (tally.romanisation.get("a name of the north") ?? 0) + 1,
                );
            }
        }
    }
    return out;
}

/**
 * A value the table writes bare or as a list, as a list either way.
 *
 * @param {string | string[] | null | undefined} value - The authored value.
 * @returns {string[]} The members.
 */
function asList(value) {
    if (Array.isArray(value)) return value.map(String);
    return value == null ? [] : [String(value)];
}

/**
 * Every form one row retires.
 *
 * A row names one thing and holds the primary retired name in `oldName`, with
 * every other name the thing answered to in `oldAliases`. Both are swept,
 * because a form folded into the aliases is a form the corpus must no longer
 * write.
 *
 * **Less whatever `newAliases` holds, and that reaches `oldName` too.**
 * `oldAliases` begins as a copy of the note's own aliases and grows as synonyms
 * are found, so it carries the live ones beside the retired ones; `newAliases`
 * is where a live alias stands now. A form in either old field that `newAliases`
 * also holds is one the thing still answers to, and sweeping it reports it in
 * the very note that states it. A thing that takes its culture's own word and
 * keeps its former name as an alias, so the phrase a reader knows it by still
 * finds it, is exactly that case: the former name is where it belongs and is
 * not a survivor.
 *
 * @param {object} entry - The concordance row.
 * @returns {string[]} The forms, the primary first.
 */
export function retiredForms(entry) {
    const kept = new Set(asList(entry.newAliases));
    return [...(entry.oldName ? [String(entry.oldName)] : []), ...asList(entry.oldAliases)].filter(
        (form) => !kept.has(form),
    );
}

/**
 * Check the table itself, before any note is read.
 *
 * A replacement is not required to be unique to one pair: one row retires every
 * form of its thing's name, so `Odinn`, `Óðinn` and `Oðinn` reach the sweep
 * beside `Ódinn` and legitimately share the replacement `Faith of Ódvar`. What
 * must be unique is the retired spelling itself — two rows naming the same form
 * is an ambiguous instruction the sweep cannot follow, **unless each names its
 * own `oldPath`**: a given name is a person's, not a word's, and a handful of
 * Nordmen legitimately share one historical spelling while coined into
 * different lawful names of their own. A path on both sides of the
 * disagreement is what tells the sweep these are two people rather than one
 * word entered twice.
 *
 * @param {object[]} pairs - The drift rows.
 * @returns {string[]} Findings.
 */
export function checkMapping(pairs) {
    const out = [];
    const seenNames = new Map();
    for (const pair of pairs) {
        const where = `${pair.group}: ${pair.retired}`;
        const priorEntries = seenNames.get(pair.retired) ?? [];
        for (const prior of priorEntries) {
            if (prior.replacement === pair.replacement) continue;
            const distinguishedByPath =
                Boolean(pair.path) && Boolean(prior.path) && pair.path !== prior.path;
            if (!distinguishedByPath) {
                out.push(
                    finding(
                        MAPPING_FILE,
                        null,
                        null,
                        "error",
                        `"${pair.retired}" is entered twice, replaced once by "${prior.replacement}" and once by "${pair.replacement}"`,
                    ),
                );
            }
        }
        priorEntries.push({ replacement: pair.replacement, path: pair.path });
        seenNames.set(pair.retired, priorEntries);

        if (!pair.drop && !pair.replacement) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} names no replacement and is not marked \`drop\``,
                ),
            );
            continue;
        }
        if (pair.drop) continue;
        const replacement = String(pair.replacement);
        if (patternFor(pair).test(replacement)) {
            out.push(
                finding(
                    MAPPING_FILE,
                    null,
                    null,
                    "error",
                    `${where} is replaced by "${replacement}", which the sweep finds again; a replacement never carries the name it retires`,
                ),
            );
        }
    }
    return out;
}

/** Run both halves and report. @returns {number} The exit code. */
function main() {
    if (!fs.existsSync(MAPPING_FILE)) {
        console.error(`${MAPPING_FILE}: error: the drift table is absent`);
        return 1;
    }
    const table = readMapping();

    // Every form a row retires is a spelling this guard sweeps for, taken from
    // {@link retiredForms}. `subType` names the kind of thing a finding reports
    // — deity, rank, order — and `type` is the fallback where a row states no
    // subType. `newName: null` is `drop`: retired with nothing to replace it.
    //
    // A `lore`/`rank` row for a standing retires an English phrase and is swept
    // only where its culture is written. Office keys are checked directly by
    // the Varokhi lexicon guard, so their ordinary English phrases are omitted.
    const pairs = (table.entries ?? []).flatMap((entry) =>
        isGovernanceOffice(entry) ?
            []
        :   retiredForms(entry).map((form) => ({
                retired: form,
                replacement: entry.newName,
                drop: entry.newName === null || entry.newName === undefined,
                group: entry.subType ?? entry.type,
                scoped: entry.type === "lore" && entry.subType === "rank",
                note: entry.note,
                path: entry.oldPath ?? null,
            })),
    );
    if (pairs.length === 0) {
        console.error(`${MAPPING_FILE}: error: the table declares no pairs`);
        return 1;
    }

    const paths = [...markdownFiles(CONTENT_DIR), ...looseFiles()];
    const files = paths.map((file) => ({ file, raw: fs.readFileSync(file, "utf8") }));

    const language = fs.readFileSync(table.romanisation.note, "utf8");
    const rule = romanisationFrom(language, table.romanisation.section);
    const places = placeIndex(files);
    const scoped = files.filter(({ file, raw }) => inScope(file, raw, table.scope ?? {}, places));

    const tally = {
        byGroup: new Map(),
        byToken: new Map(),
        kept: new Map(),
        excluded: new Map(),
        foreign: new Map(),
        romanisation: new Map(),
    };

    const scopedPaths = new Set(scoped.map(({ file }) => file));
    const out = [
        ...checkMapping(pairs),
        ...checkDrift(pairs, table.keep ?? [], files, scopedPaths, tally),
        ...checkRomanisation(table.romanisation, rule, scoped, tally),
    ];
    for (const line of out) console.error(line);

    const say = (line) => process.stdout.write(`${line}\n`);
    const list = (map) =>
        [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([key, n]) => `${key}=${n}`)
            .join("  ");

    const ownTongueOnly = pairs.filter((pair) => pair.scoped).length;
    say(
        `${pairs.length} retired name(s) swept from the table. ` +
            `${pairs.length - ownTongueOnly} name(s) no other tongue writes, swept across all ${files.length} file(s); ` +
            `${ownTongueOnly} standing phrase(s) in the reader's tongue, swept in the ${scoped.length} file(s) of Nordmal and Varokhi material, which is also where the romanisation is read.`,
    );
    say(
        `The romanisation is read off ${table.romanisation.note}: ` +
            `${rule.marks.size} mark(s) written, ${[...rule.forbidden.values()].join(", ")} never.`,
    );
    if (tally.byGroup.size) say(`Surviving names by kind: ${list(tally.byGroup)}`);
    if (tally.byToken.size) say(`By name: ${list(tally.byToken)}`);
    if (tally.romanisation.size) say(`Romanisation breaks: ${list(tally.romanisation)}`);
    if (tally.kept.size) say(`Kept words protected from the sweep: ${list(tally.kept)}`);
    say(
        tally.excluded.size ?
            `Excluded by context, and read by nobody as a Nordland name: ${list(tally.excluded)}`
        :   "No occurrence was excluded by context.",
    );
    say(
        tally.foreign.size ?
            `Read past as another tongue's: ${list(tally.foreign)}`
        :   "No word was read past as another tongue's.",
    );
    say(
        "A shortcode, a file path, a wikilink's target, an `affiliation-<god>` line and fenced code are read by nobody and are not swept; a wikilink's label is.",
    );

    const errors = out.filter((line) => line.includes(": error: ")).length;
    if (errors === 0) {
        say(`The drift holds: no retired name survives and the romanisation is kept.`);
        return 0;
    }
    console.error(`${errors} error(s) across ${pairs.length} retired name(s).`);
    return 1;
}

process.exit(main());
