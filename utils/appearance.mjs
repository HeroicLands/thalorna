/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The appearance guard (`npm run lint:appearance`).
 *
 * Every note whose frontmatter carries `data.appearance` states a being's look
 * in the closed vocabulary of the installed `@heroiclands/package-build`, and
 * keeps in `extra_features` only physical marks.
 *
 * Rules:
 *
 * 1. `complexion` is present and is a list. `[]` states a skin whose condition
 *    is not established; `[clear]` states unremarked skin.
 * 2. `complexion`, `hair_color`, `eye_color`, `skin_color` and `frame` each hold
 *    only words of their vocabulary. The words are read from the package at
 *    run time.
 * 3. No `extra_features` entry states a hair, eye or skin colour or a skin
 *    condition. Those belong to `hair_color`, `eye_color`, `skin_color` and
 *    `complexion`. A localised mark that only mentions skin, such as a scar on
 *    the forearm, is a feature.
 * 4. No `extra_features` entry names gear, clothing or weapons; a voice or
 *    speech; behaviour or manner; an impression of attractiveness or presence;
 *    handedness; sterility; or an apparent-age reading. These are matched by
 *    the explicit term lists in {@link NON_PHYSICAL}. An entry that describes a
 *    tattoo, scar, brand or burn mark is a physical mark and is exempt from the
 *    gear and behaviour lists, so "a tattoo of a knight's helmet" stands.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and
 * the exit status is 1 when there is a finding.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LineCounter, parseDocument } from "yaml";
import { BEING_LOOK_VOCABULARY } from "@heroiclands/package-build/engine/note-vocabulary";

const CONTENT_DIR = "assets/content";

/** The words each checked field takes, read from the installed package. */
export const VOCABULARY = Object.freeze({
    frame: BEING_LOOK_VOCABULARY.frame.map(({ value }) => value),
    "appearance.eye_color": BEING_LOOK_VOCABULARY["appearance.eye_color"].map(({ value }) => value),
    "appearance.hair_color": BEING_LOOK_VOCABULARY["appearance.hair_color"].map(
        ({ value }) => value,
    ),
    "appearance.skin_color": BEING_LOOK_VOCABULARY["appearance.skin_color"].map(
        ({ value }) => value,
    ),
    "appearance.complexion": BEING_LOOK_VOCABULARY["appearance.complexion"].map(
        ({ value }) => value,
    ),
});

/** A vocabulary word as the phrase an author writes: `dark_brown` is "dark brown". */
const phrase = (word) => word.replaceAll("_", "[ -]");

/** A case-insensitive whole-word alternation of phrases. */
const anyOf = (phrases) => new RegExp(`\\b(?:${phrases.join("|")})\\b`, "i");

/** Spellings of a colour word that the vocabulary does not take but an author writes. */
const COLOUR_VARIANTS = [
    "gray",
    "graying",
    "greying",
    "greyed",
    "grayed",
    "blond",
    "ginger",
    "red",
    "white",
    "milky",
    "yellow",
    "gold(?:en)?",
    "pink",
    "orange",
    "purple",
    "silver",
    "copper",
    "blue",
    "green",
    "grey",
    "mixed",
    "streaked",
    "dyed",
];

const HAIR_COLOUR = anyOf([...VOCABULARY["appearance.hair_color"].map(phrase), ...COLOUR_VARIANTS]);
const EYE_COLOUR = anyOf([...VOCABULARY["appearance.eye_color"].map(phrase), ...COLOUR_VARIANTS]);
const SKIN_COLOUR = anyOf(VOCABULARY["appearance.skin_color"].map(phrase));

/** Complexion words that also mean something else; flagged only when the entry is about skin. */
const AMBIGUOUS_COMPLEXION = new Set(["scarred", "rough", "clear", "smooth", "oily", "wan"]);

/** Phrasings of a skin condition that are not vocabulary words. */
const COMPLEXION_SYNONYMS = [
    "freckles",
    "pox marks?",
    "pocked",
    "pitted skin",
    "acne",
    "pimples",
    "sunburn",
    "wrinkles",
    "pallid",
    "flushed",
    "weather-beaten",
];

const COMPLEXION_UNAMBIGUOUS = anyOf([
    ...VOCABULARY["appearance.complexion"]
        .filter((word) => !AMBIGUOUS_COMPLEXION.has(word))
        .map(phrase),
    ...COMPLEXION_SYNONYMS,
]);
const COMPLEXION_AMBIGUOUS = anyOf([...AMBIGUOUS_COMPLEXION]);
const SKIN_WORD = /\b(?:skin|complexion|complected)\b/i;

/**
 * Any punctuation in a feature, except a hyphen or apostrophe standing between two letters
 * ("ink-stained", "a lion's mane"). A comma, colon, dash or full stop marks a clause appended
 * to the mark, which is how a feature becomes a dumping ground.
 */
const INWORD_JOINER = /(?<=\p{L})[-'’](?=\p{L})/gu;
const PUNCTUATION = /[\p{P}\p{S}]/u;
const hasStrayPunctuation = (entry) => PUNCTUATION.test(entry.replace(INWORD_JOINER, ""));

/** An entry describing one of these is a physical mark, whatever else it mentions. */
const MARK =
    /\b(?:tattoos?|tatoo|scars?|scarred|scarring|scarification|brand(?:ed)?|birthmark|burn marks?|pox marks?)\b/i;

/**
 * Terms that mark an `extra_features` entry as not a physical mark, by category.
 * `exemptMarks` lets an entry that describes a tattoo, scar or brand pass.
 *
 * @type {ReadonlyArray<{ category: string, pattern: RegExp, exemptMarks: boolean }>}
 */
export const NON_PHYSICAL = Object.freeze([
    {
        category: "gear, clothing or a weapon",
        pattern: anyOf([
            "wears?",
            "worn",
            "wearing",
            "carr(?:ies|ied|ying)(?! (?:him|her|them|it)self)",
            "cloak(?:ed|s)?",
            "clothing",
            "clothes",
            "robes?",
            "vestments",
            "tunic",
            "mail",
            "armou?r",
            "shirt",
            "axe",
            "sword",
            "dagger",
            "staff",
            "bag",
            "chain",
            "cord",
            "thong",
            "boots?",
            "hat",
            "helm(?:et)?",
            "ring",
            "amulet",
            "pendant",
            "belt",
            "weapons?",
            "garb",
            "dress(?:ed|es)?",
            "gloves?",
        ]),
        exemptMarks: true,
    },
    {
        category: "a voice or speech",
        pattern: anyOf([
            "voice",
            "speech",
            "speaks?",
            "spoken",
            "accent",
            "lisp",
            "stutter\\w*",
            "stammer\\w*",
            "whisper\\w*",
            "tone",
            "laugh\\w*",
            "sings?",
            "singing",
        ]),
        exemptMarks: false,
    },
    {
        category: "behaviour or manner",
        pattern: anyOf([
            "moves?",
            "moving",
            "fidgets?",
            "smil\\w+",
            "grin\\w*",
            "scowl\\w*",
            "frown\\w*",
            "gaze",
            "stares?",
            "glare\\w*",
            "poise",
            "grace\\w*",
            "bearing",
            "demeanou?r",
            "manner",
            "habits?",
            "grooming",
            "expressive",
            "intensity",
            "shakes?",
            "air of",
            "carr(?:y|ies|ied|ying) (?:him|her|them|it)self",
            "hyperactive",
            "restless\\w*",
            "jitter\\w*",
            "twitch\\w*",
            "nervous\\w*",
            "anxious\\w*",
            "energetic",
            "lively",
            "cheerful",
            "sullen",
            "shy",
            "calm",
            "placid",
            "fidgety",
        ]),
        exemptMarks: true,
    },
    {
        category: "an impression rather than a mark",
        pattern: anyOf([
            "beautiful",
            "handsome",
            "attractive",
            "ugly",
            "imposing",
            "menacing",
            "unnerv\\w+",
            "disarming",
            "commanding",
            "presence",
            "authority",
            "pretty",
            "lovely",
            "gorgeous",
            "stunning",
            "comely",
            "homely",
            "hideous",
            "striking\\w*",
            "alluring",
            "dashing",
            "rugged",
            "elegant\\w*",
            "grace\\w*",
            "feminine",
            "masculine",
            "girly",
            "good looks",
        ]),
        exemptMarks: false,
    },
    {
        category: "handedness",
        pattern: /\b(?:left|right)[- ]handed\b|\bambidextrous\b|\bhandedness\b|\bsouthpaw\b/i,
        exemptMarks: false,
    },
    {
        category: "sterility",
        pattern: anyOf(["steril\\w*", "infertil\\w*", "barren", "childless"]),
        exemptMarks: false,
    },
    {
        category: "an apparent-age reading",
        pattern: anyOf([
            "look(?:s|ing)? (?:younger|older|young|old)",
            "younger than",
            "older than",
            "appears? (?:\\w+ )?(?:years|young|old)",
            "apparent age",
            "youthful",
            "boyish",
            "girlish",
            "childlike",
            "ageless",
            "elderly",
        ]),
        exemptMarks: false,
    },
]);

/**
 * Why an `extra_features` entry is not a physical mark.
 *
 * @param {string} entry
 * @returns {string[]} one message per rule the entry breaks
 */
export function featureProblems(entry) {
    const problems = [];
    const hasWord = (re) => re.test(entry);
    if (hasWord(/\bhair\b/i) && hasWord(HAIR_COLOUR)) {
        problems.push("states a hair colour, which belongs in hair_color");
    }
    if (hasWord(/\beyes?\b/i) && hasWord(EYE_COLOUR)) {
        problems.push("states an eye colour, which belongs in eye_color");
    }
    if (hasWord(SKIN_WORD) && hasWord(SKIN_COLOUR)) {
        problems.push("states a skin colour, which belongs in skin_color");
    }
    const bareAmbiguous = new RegExp(`^(?:${[...AMBIGUOUS_COMPLEXION].join("|")})$`, "i");
    if (
        hasWord(COMPLEXION_UNAMBIGUOUS) ||
        bareAmbiguous.test(entry.trim()) ||
        (hasWord(COMPLEXION_AMBIGUOUS) && hasWord(SKIN_WORD) && !hasWord(MARK))
    ) {
        problems.push("states a skin condition, which belongs in complexion");
    }
    if (hasStrayPunctuation(entry)) {
        problems.push(
            "carries punctuation; a feature is a short plain description of one visible mark, with a hyphen or apostrophe only inside a word",
        );
    }
    const isMark = hasWord(MARK);
    for (const { category, pattern, exemptMarks } of NON_PHYSICAL) {
        if (exemptMarks && isMark) continue;
        if (hasWord(pattern)) problems.push(`names ${category}, which is not a physical mark`);
    }
    return problems;
}

/** A sentence listing the words of one field. */
const words = (field) => VOCABULARY[field].join(", ");

/**
 * Checks one note.
 *
 * @param {string} file - The path, as printed in a finding.
 * @param {string} text - The note's source.
 * @returns {{ rule: "complexion-missing" | "vocabulary" | "feature-vocabulary" | "feature-non-physical", finding: string }[]}
 */
export function checkNote(file, text) {
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    if (!m) return [];
    const lineCounter = new LineCounter();
    const doc = parseDocument(m[1], { lineCounter, uniqueKeys: false });
    const appearance = doc.getIn(["data", "appearance"], true);
    if (!appearance || !appearance.items) return [];
    const out = [];
    const at = (node, rule, message) => {
        const range = node?.range ?? node?.key?.range;
        const pos = lineCounter.linePos(range ? range[0] : 0);
        out.push({ rule, finding: `${file}:${pos.line + 1}:${pos.col}: error: ${message}` });
    };
    const pair = (name) => appearance.items.find((p) => p.key?.value === name);

    const complexion = pair("complexion");
    if (!complexion || complexion.value == null || complexion.value.value === null) {
        at(
            complexion?.value ?? complexion ?? appearance.items[0] ?? appearance,
            "complexion-missing",
            "appearance.complexion is absent or null; state the skin's condition as a list, [clear] for unremarked skin or [] when no condition is established",
        );
    } else if (!complexion.value.items) {
        at(
            complexion.value,
            "complexion-missing",
            "appearance.complexion is a single word; write it as a list",
        );
    }

    const checkWords = (node, field) => {
        if (!node) return;
        const entries = node.items ?? [node];
        for (const entry of entries) {
            if (!VOCABULARY[field].includes(entry.value)) {
                at(
                    entry,
                    "vocabulary",
                    `${JSON.stringify(entry.value)} is not a ${field.replace("appearance.", "")} word; the words are ${words(field)}`,
                );
            }
        }
    };
    for (const name of ["complexion", "hair_color", "eye_color", "skin_color"]) {
        const p = pair(name);
        if (p?.value && p.value.value !== null) checkWords(p.value, `appearance.${name}`);
    }
    const frame = doc.getIn(["data", "frame"], true);
    if (frame && frame.value !== null) checkWords(frame, "frame");

    const features = pair("extra_features")?.value;
    for (const entry of features?.items ?? []) {
        if (typeof entry.value !== "string") continue;
        for (const problem of featureProblems(entry.value)) {
            const rule =
                /^(?:names |carries punctuation)/.test(problem) ? "feature-non-physical" : (
                    "feature-vocabulary"
                );
            at(entry, rule, `extra_features entry ${JSON.stringify(entry.value)} ${problem}`);
        }
    }
    return out;
}

/**
 * @param {string} dir
 * @returns {string[]} every file beneath `dir`
 */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

/** @returns {{ rule: string, finding: string }[]} every finding across the content tree */
export function scan() {
    return walk(CONTENT_DIR)
        .filter((f) => f.endsWith(".md"))
        .flatMap((f) => checkNote(f, fs.readFileSync(f, "utf8")));
}

/** Prints the findings and the summary; returns the exit status. */
export function main() {
    const findings = scan();
    const counts = {};
    for (const { rule, finding } of findings) {
        console.error(finding);
        counts[rule] = (counts[rule] ?? 0) + 1;
    }
    const detail = Object.entries(counts)
        .map(([rule, n]) => `${rule} ${n}`)
        .join(", ");
    console.log(
        `appearance: ${findings.length} finding${findings.length === 1 ? "" : "s"}${detail ? ` (${detail})` : ""}`,
    );
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main();
}
