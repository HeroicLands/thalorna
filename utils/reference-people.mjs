/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The guard over the setting's reference people.
 *
 * A **reference person** is a note typed `being` and tagged `reference`: the
 * record of somebody the prose names and nobody has written up. It carries
 * frontmatter and nothing else — no body, and no block for any system the
 * package declares — so it reaches the content index and is queryable there
 * while publishing no page and compiling no character.
 *
 * That shape is a convention, and a convention held by hand over several
 * hundred notes is held until the first one slips. Seven rules state it, and
 * this file is where every one of them is checked:
 *
 * 1. **`body-is-empty`** — nothing after the closing fence but whitespace. A
 *    body makes the note a page that says nothing.
 * 2. **`no-system-block`** — no block for any system named in
 *    `relationships.systems`, **read from `package-build.config.yaml` at
 *    runtime**. This is the rule that keeps the note a record rather than a
 *    character, and reading the declared set is what keeps it true when the set
 *    grows: a written pair of system ids is a second list, free to drift from
 *    the one the build uses.
 * 3. **`description-is-written`** — a non-empty `description`, and no `draft`
 *    tag. The description is the whole of what the record says, and every
 *    generated table prints it.
 * 4. **`template-priority-is-present`** — `data.templatePriority` is written.
 *    It is tri-state with no default, so absent is an authoring error rather
 *    than a silent "not a template".
 * 5. **`filed-with-the-reference-people`** — `packFolder` names the reference
 *    people's folder, so the records sit together.
 * 6. **`references-resolve`** — every `data.homes`, `data.affiliations` and
 *    `name.home` value names a note that exists. A record's only claims about
 *    the world are these, and a reader has no body to correct them against.
 * 7. **`name-is-in-the-prose`** — the `name.full` appears somewhere else in the
 *    content tree. A record exists because a sentence names the person; when
 *    that sentence is rewritten the record is orphaned, and nothing else in the
 *    build would notice.
 *
 * **The guard checks itself first.** There is no error in an empty set here —
 * the records are written a batch at a time, and a tree with none of them yet
 * is a correct tree — so a walk that finds nothing proves nothing about the
 * rules. Before the walk, each rule is run against a note built to break it and
 * against one built to satisfy every rule, over a corpus assembled in memory:
 * a rule that passes its own malformed note is reported as a broken guard, at
 * the same severity as a broken note. Run with `--verbose` to print the finding
 * each rule produces.
 *
 * Findings are written `file:line: severity: message`, the path relative to the
 * working directory and first on the line, so a parser reads the position where
 * it expects to. A column is dropped where it would be a guess.
 *
 * @module
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

/** The content tree, walked whole: an address resolves against all of it. */
const CONTENT_DIR = "assets/content";

/** Where the declared system set is read from, rather than written down here. */
const CONFIG_FILE = "package-build.config.yaml";

/** What a reference person is: this type, carrying this tag. */
const PERSON_TYPE = "being";
const REFERENCE_TAG = "reference";

/** The folder note the records file themselves under. */
const REFERENCE_FOLDER = "referencepeople";

/** A note that says it is unfinished is not a record; lint refuses one. */
const DRAFT_TAG = "draft";

/**
 * Split a note into its frontmatter block and its body.
 *
 * @param {string} raw - The file's contents.
 * @returns {{ fm: string, body: string, fenceLine: number } | null} The block,
 *   what follows it, and the one-based line the closing fence sits on, or
 *   `null` where there is no frontmatter.
 */
function splitFrontmatter(raw) {
    if (!raw.startsWith("---")) return null;
    const end = raw.indexOf("\n---", 3);
    if (end === -1) return null;
    const fm = raw.slice(raw.indexOf("\n") + 1, end + 1);
    const fenceLine = raw.slice(0, end + 1).split("\n").length + 1;
    return { fm, body: raw.slice(end + 4), fenceLine };
}

/**
 * Every `.md` file beneath a directory.
 *
 * @param {string} dir - Where to start.
 * @returns {string[]} Paths, relative to the working directory.
 */
function markdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...markdownFiles(full));
        else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
    }
    return out.sort();
}

/**
 * The line a frontmatter key sits on, for a finding's position. The search is
 * textual and deliberately shallow: a finding naming the note and the key is
 * already at the place an author has to edit, and a wrong line is worse than a
 * dropped one.
 *
 * @param {string} raw - The file's contents.
 * @param {string} key - The key to find.
 * @returns {number | null} The one-based line, or `null` when it is not found.
 */
function lineOf(raw, key) {
    const lines = raw.split("\n");
    const pattern = new RegExp(`^\\s*${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:`);
    for (let i = 0; i < lines.length; i += 1) {
        if (pattern.test(lines[i])) return i + 1;
    }
    return null;
}

/**
 * One finding. The rule is carried beside the message so the self-test can ask
 * which rule fired without reading English.
 *
 * @param {object} note - The note the finding is about.
 * @param {number | null} line - The line, or `null` when only the file is known.
 * @param {string} rule - Which rule.
 * @param {string} message - What is wrong.
 * @returns {object} The finding.
 */
function finding(note, line, rule, message) {
    return { file: note.file, line, severity: "error", rule, message };
}

/**
 * Render a finding in the toolchain's shape: the path first, the position
 * dropped field by field rather than defaulted, and the severity before the
 * message.
 *
 * @param {object} item - The finding.
 * @returns {string} The line.
 */
function render(item) {
    const where = item.line == null ? `${item.file}:` : `${item.file}:${item.line}:`;
    return `${where} ${item.severity}: ${item.message}`;
}

/**
 * Parse one note.
 *
 * @param {string} file - Where it came from. A self-test note names itself.
 * @param {string} raw - Its contents.
 * @returns {object} The row every check reads: the file, the raw text a line is
 *   measured in, the frontmatter, the body, and why it could not be read.
 */
function parseNote(file, raw) {
    const split = splitFrontmatter(raw);
    if (!split) {
        return { file, raw, fm: null, body: "", problem: "the file carries no frontmatter block" };
    }
    let fm;
    try {
        fm = YAML.parse(split.fm);
    } catch (err) {
        return {
            file,
            raw,
            fm: null,
            body: split.body,
            fenceLine: split.fenceLine,
            problem: `frontmatter does not parse: ${String(err.message ?? err)}`,
        };
    }
    return {
        file,
        raw,
        fm: fm && typeof fm === "object" ? fm : {},
        body: split.body,
        fenceLine: split.fenceLine,
    };
}

/**
 * Whether a note is one of the reference people.
 *
 * The tag alone does not answer it: `reference` marks a page written to be
 * looked things up in, and the tree tags lore notes with it. A reference person
 * is the tag **on a being**.
 *
 * @param {object} note - The note.
 * @returns {boolean} Whether the rules below apply to it.
 */
function isReferencePerson(note) {
    if (!note.fm) return false;
    const tags = Array.isArray(note.fm.tags) ? note.fm.tags.map(String) : [];
    return note.fm.type === PERSON_TYPE && tags.includes(REFERENCE_TAG);
}

/**
 * The corpus every reference person is checked against: what a shortcode
 * resolves to, and the prose a name has to appear in.
 *
 * The prose is the text of every note that is **not** a reference person,
 * concatenated once. A record's own frontmatter states its name, and a record
 * has no body, so a corpus including them would answer rule 7 with the record
 * itself.
 *
 * @param {object[]} notes - Every note.
 * @returns {{ byShortcode: Map<string, object[]>, byAddress: Map<string, object>, prose: string }} The corpus.
 */
function buildCorpus(notes) {
    const byShortcode = new Map();
    const byAddress = new Map();
    const prose = [];
    for (const note of notes) {
        if (!note.fm?.shortcode || !note.fm?.type) continue;
        const shortcode = String(note.fm.shortcode);
        const type = String(note.fm.type);
        if (!byShortcode.has(shortcode)) byShortcode.set(shortcode, []);
        byShortcode.get(shortcode).push(note);
        byAddress.set(`${type}-${shortcode}`, note);
        if (!isReferencePerson(note)) prose.push(note.raw);
    }
    return { byShortcode, byAddress, prose: prose.join("\n") };
}

/**
 * Whether an address names a note the tree holds.
 *
 * A value is written as the tree writes one: a bare shortcode, or the
 * `type-shortcode` address in full. A bare shortcode is unique within a type
 * and not across the tree, so a bare one resolves when any note answers to it,
 * and a qualified one only when that exact address does.
 *
 * @param {string} value - What the note wrote.
 * @param {object} corpus - The corpus.
 * @returns {boolean} Whether a note answers.
 */
function resolves(value, corpus) {
    const text = String(value);
    if (corpus.byShortcode.has(text)) return true;
    return corpus.byAddress.has(text);
}

/**
 * The systems the package declares, read from its configuration.
 *
 * @param {string} configText - The configuration file's contents.
 * @returns {string[]} The declared system ids, in the order declared.
 */
function declaredSystems(configText) {
    const config = YAML.parse(configText);
    const declared = config?.relationships?.systems;
    if (!Array.isArray(declared)) return [];
    return declared.map((entry) => String(entry?.id ?? "")).filter((id) => id !== "");
}

/**
 * The line a note's body starts saying something on.
 *
 * @param {object} note - The note.
 * @returns {number | null} The one-based line, or `null` where the fence was
 *   never found.
 */
function firstBodyLine(note) {
    if (note.fenceLine == null) return null;
    const lines = note.body.split("\n");
    for (let i = 0; i < lines.length; i += 1) {
        if (lines[i].trim() !== "") return note.fenceLine + i;
    }
    return note.fenceLine;
}

/**
 * Check one reference person against every rule.
 *
 * @param {object} note - The note.
 * @param {{ systems: string[], corpus: object }} context - What the rules read.
 * @returns {object[]} Findings, one per broken rule.
 */
function checkReferencePerson(note, context) {
    const out = [];
    const { systems, corpus } = context;
    const fm = note.fm;
    const tags = Array.isArray(fm.tags) ? fm.tags.map(String) : [];

    if (note.body.trim() !== "") {
        out.push(
            finding(
                note,
                firstBodyLine(note),
                "body-is-empty",
                "a reference person is a record and has no body; anything after the closing fence publishes a page that says nothing",
            ),
        );
    }

    for (const system of systems) {
        if (fm[system] === undefined) continue;
        out.push(
            finding(
                note,
                lineOf(note.raw, system),
                "no-system-block",
                `\`${system}:\` makes this a character rather than a record; a reference person carries no block for any system \`relationships.systems\` declares (${systems.join(", ")})`,
            ),
        );
    }

    const description = typeof fm.description === "string" ? fm.description : "";
    if (description.trim() === "") {
        out.push(
            finding(
                note,
                lineOf(note.raw, "description") ?? lineOf(note.raw, "name"),
                "description-is-written",
                "`description` is the whole of what this record says, and every generated table prints it; one sentence, reaching no further than the sentence that names the person",
            ),
        );
    }
    if (tags.includes(DRAFT_TAG)) {
        out.push(
            finding(
                note,
                lineOf(note.raw, "tags"),
                "description-is-written",
                `a reference person is not tagged \`${DRAFT_TAG}\`: a thing nobody has started is not a thing in progress, and lint refuses the pair`,
            ),
        );
    }

    if (!(fm.data && typeof fm.data === "object" && "templatePriority" in fm.data)) {
        out.push(
            finding(
                note,
                lineOf(note.raw, "data"),
                "template-priority-is-present",
                "`data.templatePriority` is required with no default: write `null` to state this record is not a template",
            ),
        );
    }

    const folder = fm.packFolder == null ? "" : String(fm.packFolder);
    const folderShortcode = folder.startsWith("folder-") ? folder.slice("folder-".length) : folder;
    if (folderShortcode !== REFERENCE_FOLDER) {
        out.push(
            finding(
                note,
                lineOf(note.raw, "packFolder"),
                "filed-with-the-reference-people",
                `\`packFolder\` reads ${JSON.stringify(folder)}, and a reference person files itself under \`${REFERENCE_FOLDER}\` so the records sit together`,
            ),
        );
    }

    const references = [
        ...(Array.isArray(fm.data?.homes) ? fm.data.homes : []).map((value) => ({
            key: "data.homes",
            value,
            at: "homes",
        })),
        ...(Array.isArray(fm.data?.affiliations) ? fm.data.affiliations : []).map((value) => ({
            key: "data.affiliations",
            value,
            at: "affiliations",
        })),
        ...(fm.name?.home == null || String(fm.name.home).trim() === "" ?
            []
        :   [{ key: "name.home", value: fm.name.home, at: "home" }]),
    ];
    for (const reference of references) {
        if (resolves(reference.value, corpus)) continue;
        out.push(
            finding(
                note,
                lineOf(note.raw, reference.at),
                "references-resolve",
                `\`${reference.key}\` names "${reference.value}", which no note in this package answers to; a record states a place or a body the tree holds, or states none`,
            ),
        );
    }

    const full = typeof fm.name?.full === "string" ? fm.name.full.trim() : "";
    if (full !== "" && !corpus.prose.includes(full)) {
        out.push(
            finding(
                note,
                lineOf(note.raw, "full"),
                "name-is-in-the-prose",
                `no other note writes "${full}"; this record exists because a sentence names the person, and a rewrite that renamed them leaves it pointing at nobody`,
            ),
        );
    }

    return out;
}

/**
 * The notes the self-test checks against: a place, a body, and a page whose
 * prose names the person. Assembled in memory, so the rules are proved against
 * a corpus that cannot drift with the tree.
 *
 * @returns {object[]} The rows.
 */
function selfTestCorpusNotes() {
    return [
        parseNote(
            "self-test:harbourtown.md",
            [
                "---",
                "name:",
                "  full: Harbourtown",
                "shortcode: harbourtown",
                "type: place",
                "---",
                "",
            ].join("\n"),
        ),
        parseNote(
            "self-test:harbour-guild.md",
            [
                "---",
                "name:",
                "  full: The Harbour Guild",
                "shortcode: harbourguild",
                "type: affiliation",
                "---",
                "",
            ].join("\n"),
        ),
        parseNote(
            "self-test:the-quay.md",
            [
                "---",
                "name:",
                "  full: The Quay",
                "shortcode: thequay",
                "type: lore",
                "---",
                "",
                "Ilvana Sorrel keeps the tide-book for the guild.",
                "",
            ].join("\n"),
        ),
    ];
}

/**
 * A reference person, written well, with one field replaced.
 *
 * @param {object} [changes] - What to write differently. A key set to `null` is
 *   left out of the note entirely.
 * @returns {string} The note.
 */
function selfTestPerson(changes = {}) {
    const written = {
        tags: ["character", "reference"],
        full: "Ilvana Sorrel",
        description: "A tide-book keeper of the Harbour Guild.",
        packFolder: REFERENCE_FOLDER,
        templatePriority: "null",
        homes: ["harbourtown"],
        affiliations: ["harbourguild"],
        systemBlock: null,
        body: "",
        ...changes,
    };
    const lines = ["---", "tags:"];
    for (const tag of written.tags) lines.push(`  - ${tag}`);
    lines.push("name:", `  full: ${written.full}`, "  home: harbourtown");
    if (written.description !== null)
        lines.push(`description: ${JSON.stringify(written.description)}`);
    lines.push(
        `packFolder: ${written.packFolder}`,
        "shortcode: ilvanasorrel",
        `type: ${PERSON_TYPE}`,
    );
    lines.push("data:");
    if (written.templatePriority !== null)
        lines.push(`  templatePriority: ${written.templatePriority}`);
    lines.push("  homes:");
    for (const home of written.homes) lines.push(`    - ${home}`);
    lines.push("  affiliations:");
    for (const affiliation of written.affiliations) lines.push(`    - ${affiliation}`);
    if (written.systemBlock !== null) lines.push(...written.systemBlock);
    lines.push("---", "");
    if (written.body !== "") lines.push(written.body);
    return lines.join("\n");
}

/**
 * Every note the self-test runs, and the one rule each is written to break.
 *
 * `null` is the control: a record written well, which every rule has to pass.
 * The system block is built from the **declared** system set rather than named,
 * so the fixture that proves rule 2 is derived from the same configuration the
 * rule reads.
 *
 * @param {string[]} systems - The declared system ids.
 * @returns {Array<{name: string, breaks: string | null, raw: string}>} The notes.
 */
function selfTestNotes(systems) {
    const system = systems[0] ?? "";
    return [
        { name: "a record written well", breaks: null, raw: selfTestPerson() },
        {
            name: "a body after the fence",
            breaks: "body-is-empty",
            raw: selfTestPerson({ body: "# Dossier {#dossier}\n\nTBD\n" }),
        },
        {
            name: "a system block",
            breaks: "no-system-block",
            raw: selfTestPerson({ systemBlock: [`${system}:`, "  subType: humanoid"] }),
        },
        {
            name: "no description",
            breaks: "description-is-written",
            raw: selfTestPerson({ description: null }),
        },
        {
            name: "a draft tag",
            breaks: "description-is-written",
            raw: selfTestPerson({ tags: ["character", "reference", DRAFT_TAG] }),
        },
        {
            name: "no templatePriority",
            breaks: "template-priority-is-present",
            raw: selfTestPerson({ templatePriority: null }),
        },
        {
            name: "another folder",
            breaks: "filed-with-the-reference-people",
            raw: selfTestPerson({ packFolder: "heroesandknaves" }),
        },
        {
            name: "a home no note answers to",
            breaks: "references-resolve",
            raw: selfTestPerson({ homes: ["nowhereatall"] }),
        },
        {
            name: "a name the prose does not write",
            breaks: "name-is-in-the-prose",
            raw: selfTestPerson({ full: "Nobody Atall" }),
        },
    ];
}

/**
 * Run every rule against a note written to break it, and against one written to
 * satisfy them all.
 *
 * @param {string[]} systems - The declared system ids.
 * @param {boolean} verbose - Whether to print the finding each rule produces.
 * @returns {{ findings: string[], rules: number }} Findings about the **guard**,
 *   empty when every rule caught its own note, and how many rules were proved.
 */
function selfTest(systems, verbose) {
    const out = [];
    const rules = new Set();
    for (const test of selfTestNotes(systems)) {
        const note = parseNote(`self-test:${test.breaks ?? "well-formed"}`, test.raw);
        const corpus = buildCorpus([...selfTestCorpusNotes(), note]);
        const found = checkReferencePerson(note, { systems, corpus });
        const fired = [...new Set(found.map((item) => item.rule))].sort();
        const expected = test.breaks === null ? [] : [test.breaks];
        if (test.breaks !== null) rules.add(test.breaks);
        if (fired.join(",") !== expected.join(",")) {
            out.push(
                `${CONFIG_FILE}: error: the guard does not hold: "${test.name}" should report ${
                    expected.length === 0 ? "nothing" : `\`${expected[0]}\``
                } and reports ${fired.length === 0 ? "nothing" : fired.map((rule) => `\`${rule}\``).join(", ")}`,
            );
            continue;
        }
        if (!verbose) continue;
        if (found.length === 0) console.log(`  ${test.name}: clean`);
        else for (const item of found) console.log(`  ${test.name}: ${render(item)}`);
    }
    if (verbose)
        console.log(`  ${rules.size} rule(s) proved against a note written to break each.`);
    return { findings: out, rules: rules.size };
}

/**
 * Run the guard and report.
 *
 * @returns {number} The process's exit code.
 */
function main() {
    const verbose = process.argv.includes("--verbose") || process.argv.includes("-v");
    const out = [];

    let systems = [];
    try {
        systems = declaredSystems(fs.readFileSync(CONFIG_FILE, "utf8"));
    } catch (err) {
        console.error(`${CONFIG_FILE}: error: ${String(err.message ?? err)}`);
        return 1;
    }
    if (systems.length === 0) {
        console.error(
            `${CONFIG_FILE}: error: \`relationships.systems\` declares no system, and the rule that a reference person carries no system block is derived from that list`,
        );
        return 1;
    }

    if (verbose) console.log(`Proving each rule against the ${systems.join(", ")} declaration:`);
    const proved = selfTest(systems, verbose);
    out.push(...proved.findings);

    const notes = markdownFiles(CONTENT_DIR).map((file) =>
        parseNote(file, fs.readFileSync(file, "utf8")),
    );
    const corpus = buildCorpus(notes);
    const people = notes.filter((note) => isReferencePerson(note));
    for (const note of notes) {
        if (!note.problem || !/^\s*-\s*reference\s*$/m.test(note.raw)) continue;
        out.push(render({ file: note.file, line: null, severity: "error", message: note.problem }));
    }
    for (const note of people) {
        for (const item of checkReferencePerson(note, { systems, corpus })) out.push(render(item));
    }

    const errors = out.filter((line) => line.includes(": error: "));
    for (const line of out) console.error(line);
    if (errors.length === 0) {
        console.log(
            `The reference people hold: ${people.length} record(s) checked against ${proved.rules} proved rule(s).`,
        );
        return 0;
    }
    console.error(`${errors.length} error(s) across ${people.length} record(s).`);
    return 1;
}

process.exit(main());
