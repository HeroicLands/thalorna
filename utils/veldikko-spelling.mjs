/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Veldikko spelling generator (`node utils/veldikko-spelling.mjs`).
 *
 * The two Veldikko encoding notes, `sinaveldikkoenc` for Sinale and `aeleveldikkoenc`
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

export const NOTES = [
    { tongue: "sinale", file: "assets/content/Lore/Scripts/Veldikko_Spelling.md" },
    { tongue: "aelendi", file: "assets/content/Lore/Scripts/Veldikko_Aelendi_Spelling.md" },
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
 * @param {"sinale" | "aelendi"} tongue
 * @returns {string[]}
 */
function spellingRows(tongue) {
    const AE = tongue === "aelendi";
    const rows = [];
    const add = (from, to, comment, cond) => {
        const condition = cond ? Object.fromEntries([cond.split(/:\s*/)]) : {};
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
    // Sinale s + h are separate consonants, including across a suffix boundary.
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

    // Sinale's performance marks belong to the selected vowel nucleus. The
    // shared Áelendi spelling keeps its existing stress-only vowel rows.
    if (!AE) {
        addSinaleVowels(add);
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
    for (const [b1, v1s] of Object.entries(V))
        for (const [b2, v2s] of Object.entries(V)) {
            const long = b1 === b2 || (b1 === "e" && b2 === "ë");
            if (!long && dip.has(b1 + b2)) continue;
            const to = long ? [b2, "long"] : [b1, "carrier", b2];
            for (const x of v1s)
                for (const y of v2s) {
                    add(x + y, ch("carrier", ...to), cm("carrier", ...to), "at: start");
                    add(x + y, ch(...to), cm(...to));
                }
        }
    return rows;
}

/**
 * Sinale vowel spellings, including NFC and decomposed performance notation.
 * A pair is consumed together so a mark cannot split a long vowel or remove
 * the carrier from two vowels sounded apart. Diaeresis remains the vowel ë.
 */
function addSinaleVowels(add) {
    const marks = { "\u0302": "rise", "\u030c": "fall", "\u0301": "emphasis" };
    const deliveries = [
        "",
        "\u0302",
        "\u030c",
        "\u0301",
        "\u0302\u0301",
        "\u030c\u0301",
        "\u0301\u0302",
        "\u0301\u030c",
    ];
    const vowels = Object.fromEntries(
        [..."aeiouyë"].map((base) => {
            const forms = new Map();
            for (const letter of [base, base.toUpperCase()])
                for (const delivery of deliveries)
                    for (const form of [
                        letter + delivery,
                        (letter + delivery).normalize("NFC"),
                        (letter + delivery).normalize("NFD"),
                    ])
                        forms.set(
                            form,
                            ["rise", "fall", "emphasis"].filter((sign) =>
                                [...delivery].some((mark) => marks[mark] === sign),
                            ),
                        );
            return [base, [...forms].map(([form, signs]) => ({ form, signs }))];
        }),
    );
    // A trailing standalone mark needs no vowel-specific row. Preserve a
    // combined pitch-and-emphasis spelling as one row to canonicalize order.
    const trailingSingle = (form, signs) =>
        signs.length === 1 && /[\u0301\u0302\u030c]$/u.test(form);
    for (const [mark, sign] of Object.entries(marks)) add(mark, ch(sign), cm(sign));
    const write = (from, letters) => {
        add(from, ch("carrier", ...letters), cm("carrier", ...letters), "at: start");
        add(from, ch(...letters), cm(...letters));
    };
    for (const [base, forms] of Object.entries(vowels))
        for (const { form, signs } of forms)
            if (!trailingSingle(form, signs)) write(form, [base, ...signs]);
    for (const from of ["j", "J"]) write(from, ["y"]);
    const diphthongs = new Set([
        "ai",
        "au",
        "ia",
        "eo",
        "oi",
        "ou",
        "ui",
        "uo",
        "ei",
        "ie",
        "yi",
        "ye",
    ]);
    for (const [first, starts] of Object.entries(vowels))
        for (const [last, ends] of Object.entries(vowels)) {
            const long = first === last || (first === "e" && last === "ë");
            if (!long && diphthongs.has(first + last)) continue;
            for (const left of starts)
                for (const right of ends) {
                    // The shorter pair writes its vowel, then the standalone
                    // trailing sign. Retain an explicit row when the two
                    // spellings carry separate signs whose order may change.
                    if (trailingSingle(right.form, right.signs) && !left.signs.length) continue;
                    const signs = [...left.signs, ...right.signs];
                    // A word permits one pitch mark and one emphasis mark;
                    // a pair must not consume repeated or conflicting signs.
                    if (
                        new Set(signs).size !== signs.length ||
                        (signs.includes("rise") && signs.includes("fall"))
                    )
                        continue;
                    const performance = ["rise", "fall", "emphasis"].filter((sign) =>
                        signs.includes(sign),
                    );
                    write(
                        left.form + right.form,
                        long ?
                            [last, "long", ...performance]
                        :   [first, ...left.signs, "carrier", last, ...right.signs],
                    );
                }
        }
}

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
            const key = JSON.stringify([match, condition.before, condition.at]);
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
            JSON.stringify(data?.mappings) !== JSON.stringify(generated.mappings) ||
            JSON.stringify(data?.rules) !== JSON.stringify(generated.rules)
        ) {
            const at = text.indexOf("  mappings:");
            const line = at < 0 ? 1 : text.slice(0, at).split("\n").length;
            findings.push(
                `${file}:${line}:1: error: \`data.mappings\` or \`data.rules\` differs from the program \`utils/veldikko-spelling.mjs\` writes; run \`node utils/veldikko-spelling.mjs\`, then \`npm run format\` on the notes`,
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
