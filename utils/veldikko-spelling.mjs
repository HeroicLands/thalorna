/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Veldikko spelling generator (`node utils/veldikko-spelling.mjs`).
 *
 * The two Veldikko encoding notes, `senaveldikkoenc` for Senali and `aeleveldikkoenc`
 * for Áelendi, share nearly every row. This script writes the `data.mappings` and `data.rules`
 * of both from one source, so they cannot drift; everything else in a note is
 * authored by hand and left as it is.
 *
 * With no argument it rewrites the generated program. With `--check` it rewrites nothing and
 * exits 1, with a finding at the note, when a note's rows differ from what it
 * would write. Findings are written `file:line:column: error: message`, the path
 * first and relative to the working directory, to stderr.
 */

import fs from "node:fs";
import YAML from "yaml";
import { fontCodes } from "@heroiclands/package-build/engine/encoding-notes";
import { resolveScriptFonts } from "@heroiclands/package-build/engine/script-fonts";
import { fileURLToPath } from "node:url";
import { notePath } from "./note-index.mjs";

export const NOTES = [
    { tongue: "senali", file: notePath("doc-senaveldikkoenc") },
    { tongue: "aelendi", file: notePath("doc-aeleveldikkoenc") },
];

const L = {
    p: 0x1ed50,
    v: 0x1ed51,
    m: 0x1ed52,
    t: 0x1ed53,
    s: 0x1ed54,
    n: 0x1ed55,
    d: 0x1ed56,
    dh: 0x1ed57,
    k: 0x1ed58,
    h: 0x1ed59,
    ng: 0x1ed5a,
    l: 0x1ed5b,
    r: 0x1ed5c,
    carrier: 0x1ed5d,
    g: 0x1ed60,
    th: 0x1ed61,
    dhasp: 0x1ed62,
    kh: 0x1ed63,
    gh: 0x1ed64,
    tej: 0x1ed65,
    dej: 0x1ed66,
    kej: 0x1ed67,
    gej: 0x1ed68,
    a: 0x1ed70,
    o: 0x1ed71,
    u: 0x1ed72,
    e: 0x1ed73,
    i: 0x1ed74,
    y: 0x1ed75,
    ë: 0x1ed76,
    long: 0x1ed78,
    bar: 0x1ed7c,
    rise: 0x1ed79,
    fall: 0x1ed7a,
    emphasis: 0x1ed7b,
};
const ch = (...ks) => ks.map((k) => String.fromCodePoint(L[k])).join("");
const cm = (...ks) => ks.map((k) => "U+" + L[k].toString(16).toUpperCase()).join(" ");

/**
 * The rows of a tongue's mapping, as the lines of a YAML list.
 *
 * @param {"senali" | "aelendi"} tongue
 * @returns {string[]}
 */
function spellingRows(tongue) {
    const AE = tongue === "aelendi";
    const rows = [];
    const add = (from, to, comment, cond) => {
        const condition =
            typeof cond === "string" ? Object.fromEntries([cond.split(/:\s*/)]) : (cond ?? {});
        rows.push({ from, to, ...condition });
    };
    const cases = (s) => {
        // every upper/lower combination of the letters of s
        let out = [""];
        for (const c of s) {
            const alts =
                c.toLowerCase() === c.toUpperCase() ? [c] : [c.toLowerCase(), c.toUpperCase()];
            out = out.flatMap((p) => alts.map((a) => p + a));
        }
        return out;
    };

    // consonants
    const singles = ["p", "v", "m", "t", "s", "n", "d", "k", "h", "l", "r"].concat(AE ? ["g"] : []);
    const digraphs =
        AE ?
            [
                ["ng", "ng"],
                ["dh", "dhasp"],
                ["th", "th"],
                ["kh", "kh"],
                ["gh", "gh"],
            ]
        :   [
                ["ng", "ng"],
                ["dh", "dh"],
            ];
    const near = [
        ["b", "p"],
        ["f", "v"],
        ["w", "v"],
        ["z", "s"],
        ["c", "k"],
        ["q", "k"],
    ].concat(AE ? [] : [["g", "k"]]);
    const doubled = [];
    for (const c of singles) doubled.push([c + c, c]);
    for (const [s, k] of digraphs) doubled.push([s + s, k]);
    // longest first is the engine's job; order here is for the reader
    for (const [s, k] of digraphs) for (const v of cases(s)) add(v, ch(k), cm(k));
    for (const v of cases("nk")) add(v, ch("ng", "k"), cm("ng", "k"));
    for (const v of cases("ch")) add(v, ch("k"), cm("k"));
    // Áelendi writes sh as s. The rule is Áelendi's alone: s and h never
    // meet in a Senali word.
    if (AE) for (const v of cases("sh")) add(v, ch("s"), cm("s"));
    for (const v of cases("x")) add(v, ch("k", "s"), cm("k", "s"));
    for (const c of singles) for (const v of cases(c)) add(v, ch(c), cm(c));
    for (const [s, k] of near) for (const v of cases(s)) add(v, ch(k), cm(k));
    for (const [s, k] of doubled) {
        const base =
            digraphs.find(([x]) => x + x === s) ? digraphs.find(([x]) => x + x === s)[1] : k;
        for (const v of cases(s)) add(v, ch(base, "bar"), cm(base, "bar"));
    }
    // hyphen
    add("-", "", "writes nothing", "at: start");
    add("-", "", "writes nothing", "at: end");
    add("-", " ", "a word space");

    // Senali's performance marks belong to the selected vowel nucleus. The
    // shared Áelendi spelling keeps its existing stress-only vowel rows.
    if (!AE) {
        addSenaliVowels(add);
        return rows;
    }

    // vowels
    const V = {
        a: ["a", "A", "á", "Á"],
        e: ["e", "E", "é", "É"],
        i: ["i", "I", "í", "Í"],
        o: ["o", "O", "ó", "Ó"],
        u: ["u", "U", "ú", "Ú"],
        y: ["y", "Y", "ý", "Ý"],
        ë: ["ë", "Ë"],
    };
    const dip = new Set(["ai", "au", "ia", "eo", "oi", "ou", "ui", "uo", "ei", "ie", "yi", "ye"]);
    for (const [b, vs] of Object.entries(V))
        for (const v of vs) {
            add(v, ch("carrier", b), cm("carrier", b), "at: start");
            add(v, ch(b), cm(b));
        }
    for (const v of cases("j")) {
        add(v, ch("carrier", "y"), cm("carrier", "y"), "at: start");
        add(v, ch("y"), cm("y"));
    }
    // An acute on the second letter of a held vowel or a diphthong starts a
    // syllable there, so the pair is two vowels, the second on the carrier.
    const acute = (v) => v.normalize("NFD").includes("\u0301");
    for (const [b1, v1s] of Object.entries(V))
        for (const [b2, v2s] of Object.entries(V)) {
            // Only i and u take a closing y; a, e, ë and o do not.
            if (b2 === "y" && !["i", "u", "y"].includes(b1)) continue;
            const long = b1 === b2 || (b1 === "e" && b2 === "ë");
            const joined = long || dip.has(b1 + b2);
            for (const x of v1s)
                for (const y of v2s) {
                    if (joined && !long && !acute(y)) continue;
                    const to = long && !acute(y) ? [b2, "long"] : [b1, "carrier", b2];
                    add(x + y, ch("carrier", ...to), cm("carrier", ...to), "at: start");
                    add(x + y, ch(...to), cm(...to));
                }
        }
    return rows;
}

/**
 * Senali vowel spellings under the common marks of Pronouncing Thalorna. A
 * word is read left to right, taking the held vowels aa, ii and uu and
 * Senali's diphthongs as groups wherever they start; every other vowel stands
 * alone. Each group or lone vowel is one nucleus, and a nucleus followed by a
 * vowel writes the carrier that vowel stands on, so a vowel after another
 * nucleus is always on the carrier. An acute marks stress and draws the stress
 * sign after its nucleus. An acute on a group's second letter splits the group,
 * so that letter starts a nucleus of its own. A tone sits on the first letter
 * of a held vowel and draws the rise or fall sign after the long sign; a tone
 * anywhere else has no row and is refused.
 *
 * A toned held vowel is refused where the letter before it would open a group
 * with the toned letter, as in paâa or kaîi. Its rows therefore hold only at a
 * word's start, after a consonant, or after a vowel that forms no group with
 * it. Where such a vowel ends a group the reading has already taken, as in
 * paaâa or paiîi, one row spells that group and the toned held vowel together,
 * so the matcher, reading groups left to right, reaches the pair only from the
 * start of that group. A row condition sees only the one letter before it, so
 * this reaches one group back: a second toned held vowel straight after such a
 * row, as in paaâaâa, has no row and is refused.
 */
function addSenaliVowels(add) {
    const acute = { a: "á", e: "é", i: "í", o: "ó", u: "ú", y: "ý" };
    const tones = { "\u030c": "rise", "\u0302": "fall" };
    const write = (from, letters, after) => {
        add(from, ch("carrier", ...letters, "carrier"), "", { before: "vowel", at: "start" });
        add(from, ch("carrier", ...letters), "", { at: "start" });
        for (const condition of after ?? [{}]) {
            add(from, ch(...letters, "carrier"), "", { ...condition, before: "vowel" });
            add(from, ch(...letters), "", condition);
        }
    };
    const groups = new Set([..."aiu"].map((v) => v + v).concat(SENALI_DIPHTHONGS));
    // Where a toned held vowel may follow directly: after a consonant, or
    // after a vowel that would open no group with its toned letter.
    const after = Object.fromEntries(
        [..."aiu"].map((held) => [
            held,
            [{ after: "consonant" }].concat(
                Object.entries(acute)
                    .filter(([base]) => !groups.has(base + held))
                    .flatMap(([base, stressed]) => [{ after: base }, { after: stressed }]),
            ),
        ]),
    );
    // Every two-letter group as its rows spell it, with its last letter: plain,
    // with an acute on its first letter, and, for a held vowel, with a tone
    // there, which keeps the toned vowel's own conditions.
    const spelled = [];
    for (const held of "aiu") {
        spelled.push({ from: held + held, last: held, letters: [held, "long"] });
        spelled.push({ from: acute[held] + held, last: held, letters: [held, "long", "emphasis"] });
        for (const [mark, sign] of Object.entries(tones))
            spelled.push({
                from: (held + mark).normalize("NFC") + held,
                last: held,
                letters: [held, "long", sign],
                after: after[held],
            });
    }
    for (const [first, last] of SENALI_DIPHTHONGS) {
        spelled.push({ from: first + last, last, letters: [first, last] });
        spelled.push({ from: acute[first] + last, last, letters: [first, "emphasis", last] });
    }
    // A glide w is the vowel u it glides from: wo and wi spell the pairs uo and ui.
    for (const last of "oi") spelled.push({ from: "w" + last, last, letters: ["u", last] });
    for (const [base, stressed] of Object.entries(acute)) {
        write(base, [base]);
        write(stressed, [base, "emphasis"]);
    }
    // ì is the front vowel, drawn with the y mark. It has no precomposed
    // stressed form, so it takes no acute row.
    write("ì", ["y"]);
    add("j", ch("carrier", "y"), "", { at: "start" });
    add("j", ch("y"), "");
    for (const { from, letters, after: condition } of spelled) write(from, letters, condition);
    for (const held of "aiu")
        for (const [mark, sign] of Object.entries(tones)) {
            const toned = (held + mark).normalize("NFC") + held;
            for (const group of spelled)
                if (groups.has(group.last + held))
                    write(
                        group.from + toned,
                        [...group.letters, "carrier", held, "long", sign],
                        group.after,
                    );
        }
}

/** Senali's diphthongs, as its language note lists them. */
const SENALI_DIPHTHONGS = ["ai", "au", "ia", "eo", "oi", "ou", "ui", "uo", "ei", "ie", "yi", "ye"];

/** Every vowel letter a Senali spelling writes, marked or not, for the `before: vowel` rows. */
const SENALI_VOWELS = "aeiouyìáéíóúýǎâǐîǔû";

/** Selected font metadata is the only glyph-code table. */
export const GLYPH_CODES = fontCodes(resolveScriptFonts(process.cwd()), "veldikko");
const codesFor = new Map(Object.entries(GLYPH_CODES).map(([name, text]) => [text, name]));

/** Generate the public encoding program from the shared spelling convention. */
export function generateEncoding(tongue) {
    const mappings = {},
        contextual = new Map();
    for (const { from, to, ...condition } of spellingRows(tongue)) {
        const match = from.toLowerCase().normalize("NFC");
        if (match === "-" && to === " " && !Object.keys(condition).length) continue;
        const emit = [...to].map((char) => {
            const code = codesFor.get(char);
            if (!code) throw new Error(`The installed Veldikko font has no code for ${char}`);
            return code;
        });
        if (Object.keys(condition).length) {
            const key = JSON.stringify([match, condition.after, condition.before, condition.at]);
            const previous = contextual.get(key);
            if (previous && JSON.stringify(previous.emit) !== JSON.stringify(emit))
                throw new Error(`Conflicting lowercase Veldikko context for ${match}`);
            if (!previous) contextual.set(key, { match, emit, ...condition });
        } else {
            const previous = mappings[match];
            if (
                previous !== undefined &&
                JSON.stringify([previous].flat()) !== JSON.stringify(emit)
            )
                throw new Error(`Conflicting lowercase Veldikko mapping for ${match}`);
            if (previous === undefined) mappings[match] = emit.length === 1 ? emit[0] : emit;
        }
    }
    return {
        mappings,
        rules: {
            normalization: "NFC",
            matching: "longest-first",
            roundTrip: "canonical",
            "word-separators": ["-"],
            "contextual-mappings": [...contextual.values()],
        },
        ...(tongue === "senali" ? { vowels: SENALI_VOWELS } : {}),
    };
}

/** Preserve the note's metadata and prose while replacing its generated program. */
function rewrite(text, tongue) {
    const split = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n?)/.exec(text);
    if (!split) throw new Error("An encoding document requires frontmatter");
    const document = YAML.parseDocument(split[1]);
    if (!document.hasIn(["data", "mappings"]) || !document.hasIn(["data", "rules"]))
        throw new Error("Migrate the encoding document to data.mappings and data.rules first");
    const generated = generateEncoding(tongue);
    if (generated.vowels !== undefined) document.setIn(["data", "vowels"], generated.vowels);
    document.setIn(["data", "mappings"], generated.mappings);
    document.setIn(["data", "rules"], generated.rules);
    return "---\n" + document.toString() + "---" + split[2] + text.slice(split[0].length);
}

/** Exact code sequences and conditions, independent of YAML layout. */
export function checkNotes() {
    const findings = [];
    for (const { tongue, file } of NOTES) {
        const text = fs.readFileSync(file, "utf8");
        const split = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
        const data = split ? YAML.parse(split[1]).data : undefined;
        const generated = generateEncoding(tongue);
        if (
            data?.vowels !== generated.vowels ||
            JSON.stringify(data?.mappings) !== JSON.stringify(generated.mappings) ||
            JSON.stringify(data?.rules) !== JSON.stringify(generated.rules)
        ) {
            const at = text.indexOf("  mappings:");
            const line = at < 0 ? 1 : text.slice(0, at).split("\n").length;
            findings.push(
                `${file}:${line}:1: error: \`data.vowels\`, \`data.mappings\` or \`data.rules\` differs from the program \`utils/veldikko-spelling.mjs\` writes; run \`node utils/veldikko-spelling.mjs\`, then \`npm run format\` on the notes`,
            );
        }
    }
    return findings;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    if (process.argv.includes("--check")) {
        const findings = checkNotes();
        for (const finding of findings) process.stderr.write(`${finding}\n`);
        process.exitCode = findings.length ? 1 : 0;
    } else {
        for (const { tongue, file } of NOTES)
            fs.writeFileSync(file, rewrite(fs.readFileSync(file, "utf8"), tongue));
    }
}
