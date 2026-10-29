/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Splits each paired verse div of a note into an English div and an
 * original div.
 *
 * A paired div is a `.verse` div with `cols=2` whose rows are triplets: a
 * native line (column 1), an English line (column 2, every run `lang=en`) and a
 * roman line (column 2, the native text without `enc=`). A blank line ends a
 * row and a `--- {.canto}` line ends a stanza.
 *
 * The result is two divs, side by side:
 *
 * - a one-column div with `lang=en` holding the English lines;
 * - a `cols=2` div holding the native lines in column 1 and the roman lines
 *   in column 2.
 *
 * In both, a blank line ends a stanza and the row separators are gone. The
 * `numstep` attribute is dropped.
 *
 * With `--target-366`, the output is written for encoded divs and typed line
 * ends:
 *
 * - the original is one div of its roman lines, with no column prefixes and
 *   no `cols=`. The div names `lang=` and `enc=` from the native runs, and
 *   native runs of the one language that disagree on `enc=` are refused. A line
 *   keeps the native text where that holds `⟦…⟧` codage the roman spells out;
 *   runs of another language keep their spans;
 * - both divs of a pair take the same `work=<key>`, the key being the anchor
 *   of the caption above the pair, or `<note>-<n>` when that anchor is missing
 *   or already used;
 * - every line of a stanza but its last ends with `/`, and a literal slash in
 *   the text, outside an attribute block, is written `\/`.
 *
 * Without it, every newline is a line end and the output is what a build
 * without those features renders.
 *
 * Usage: node utils/split-paired-verse.mjs [--target-366] <note.md>...
 *
 * A div that cannot be converted is reported as `file:line: error: message`
 * and its note is left untouched; the exit status is 1.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OPENER_DIV = /^(:::)\s*\{\.verse(?:\s+([^}]*))?\}\s*$/;
const OPENER_NAMED = /^(:::)verse\s*\{([^}]*)\}\s*$/;

/** The line that ends a canto inside a verse div. */
const CANTO = "--- {.canto}";

/**
 * @param {string} line
 * @returns {RegExpMatchArray | null} the verse div opener: the colons and the attributes
 */
const matchOpener = (line) => line.match(OPENER_DIV) ?? line.match(OPENER_NAMED);
/** A bare gap span in a native line, written without a language. */
const GAP = /\[\s*…\s*\](?!\{)/g;
const GAP_TEXT = /^\s*\.*\s*(?:\\\[)?\s*…\s*(?:\\\])?\s*$/;
/** @returns {boolean} whether the run is a gap, however it is spelled */
const isGap = (run) =>
    GAP_TEXT.test(run.text) && run.attrs.every((a) => a === "lang=zxx" || a === "");
const ANCHOR = /^(?::@?\s.*|#+\s.*)\{#([\w-]+)\}\s*$/;

/**
 * @param {string} text
 * @param {number} from index of a `[`
 * @returns {number} the index of its matching `]`, or -1
 */
function closing(text, from) {
    let depth = 0;
    for (let i = from; i < text.length; i++) {
        if (text[i] === "\\") i++;
        else if (text[i] === "[") depth++;
        else if (text[i] === "]" && --depth === 0) return i;
    }
    return -1;
}

/**
 * @param {string} line a content line without its column number
 * @param {boolean} [edges] allow periods and `…` before the first run and `…`
 *   after the last, which stay in the gaps
 * @returns {{runs: {text: string, attrs: string[], link: boolean}[], gaps: string[]} | undefined}
 *   its runs and the whitespace around and between them; undefined when the
 *   line is not made only of runs. A run whose text is one bracketed target is
 *   a link carrying attributes, and `link` is true.
 */
export function parseRuns(line, edges = false) {
    const runs = [];
    const gaps = [];
    let at = 0;
    while (at < line.length) {
        const start = line.slice(at).search(edges && !runs.length ? /[^\s.…]/ : /\S/);
        if (start < 0) break;
        const open = at + start;
        if (edges && runs.length && /^…\s*$/.test(line.slice(open))) break;
        gaps.push(line.slice(at, open));
        const end = line[open] === "[" ? closing(line, open) : -1;
        const braces = end >= 0 && line[end + 1] === "{" ? line.indexOf("}", end) : -1;
        if (braces < 0) return undefined;
        const text = line.slice(open + 1, end);
        runs.push({
            text,
            attrs: line
                .slice(end + 2, braces)
                .trim()
                .split(/\s+/),
            link: text.startsWith("[") && closing(text, 0) === text.length - 1,
        });
        at = braces + 1;
    }
    gaps.push(line.slice(at));
    return runs.length ? { runs, gaps } : undefined;
}

const langOf = (run) => run.attrs.find((a) => a.startsWith("lang="));
const plainText = (run) => run.text.replace(/ enc=[\w-]+(?=[ }])/g, "");
const plainAttrs = (run) => run.attrs.filter((a) => !a.startsWith("enc=")).join(" ");

/**
 * @param {string} nativeText
 * @param {string} romanText
 * @returns {boolean} whether the two are the same text, the native one possibly
 *   holding `⟦…⟧` codage where the roman spells letters
 */
function sameText(nativeText, romanText) {
    if (nativeText === romanText) return true;
    if (!nativeText.includes("⟦")) return false;
    const pattern = nativeText
        .split(/⟦[^⟧]*⟧/)
        .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join(".+?");
    return new RegExp(`^${pattern}$`, "s").test(romanText);
}

/**
 * @param {{runs: object[]}} native
 * @param {{runs: object[]}} roman
 * @returns {boolean} whether the roman line repeats the native one run for run
 */
function matches(native, roman) {
    return (
        native.runs.length === roman.runs.length &&
        native.runs.every(
            (x, i) =>
                (isGap(x) && isGap(roman.runs[i])) ||
                (sameText(plainText(x), plainText(roman.runs[i])) &&
                    langOf(x) === langOf(roman.runs[i])),
        )
    );
}

/**
 * @param {string} line
 * @returns {string} the line with each slash outside a `{...}` block escaped
 */
function escapeSlashes(line) {
    let depth = 0;
    let out = "";
    for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === "\\") out += c + (line[++i] ?? "");
        else if (c === "{") (depth++, (out += c));
        else if (c === "}") (depth && depth--, (out += c));
        else out += c === "/" && !depth ? "\\/" : c;
    }
    return out;
}

/**
 * @param {string[]} lines the lines of one stanza
 * @returns {string[]} the lines, each but the last ending with a line-end mark
 */
const marked = (lines) => lines.map((l, i) => (i < lines.length - 1 ? `${l}/` : l));

/**
 * @param {string} raw a line without its column number
 * @returns {string} the line with its English runs unwrapped; a line that is
 *   not made only of runs is plain English and stays as written
 */
function englishOf(raw) {
    const parsed = parseRuns(raw);
    return parsed ? unwrapEnglish(parsed) : raw.trim();
}

/** @returns {string} the line with its English runs unwrapped */
function unwrapEnglish(parsed) {
    return unwrapRuns(parsed, "en");
}

/**
 * @param {{runs: object[], gaps: string[]}} parsed
 * @param {string} lang the language whose bare runs are written as plain text
 * @returns {string} the line, with the runs of `lang` unwrapped
 */
function unwrapRuns({ runs, gaps }, lang) {
    let out = gaps[0];
    runs.forEach((r, i) => {
        out +=
            r.attrs.length === 1 && r.attrs[0] === `lang=${lang}` ?
                r.link ?
                    `[${r.text}]`
                :   r.text
            :   `[${r.text}]{${r.attrs.join(" ")}}`;
        out += gaps[i + 1];
    });
    return out.trim();
}

/**
 * @param {string[]} body the lines of a paired div
 * @param {number} first the 1-based line number of the div's first body line
 * @param {boolean} [lenient] take a row of a native and an English line as its
 *   own roman, and ignore a canto break at either edge of the div
 * @returns {{stanzas?: {native: string[], english: string[], roman: string[]}[], findings: {line: number, message: string}[]}}
 */
function splitBody(body, first, lenient = false) {
    const findings = [];
    const fail = (i, message, shape, rows = []) =>
        findings.push({ line: first + i, message, shape, rows });
    let poisoned = false;
    const stanzas = [];
    let current = { native: [], english: [], roman: [], pairs: [] };
    let row = [];
    let rowStart = 0;
    let afterBreak = true;

    const endRow = () => {
        if (poisoned) {
            poisoned = false;
            row = [];
            return;
        }
        if (!row.length) return;
        const native = row.filter((r) => r.col === "1");
        const second = row.filter((r) => r.col === "2");
        const isEnglish = (r) =>
            !r.parsed ||
            (r.parsed.runs.every((x) => x.attrs.includes("lang=en") || isGap(x)) &&
                r.parsed.runs.some((x) => x.attrs.includes("lang=en")));
        const isMarker = (r) =>
            r.parsed?.runs.every((x) => x.attrs.includes("lang=zxx") || isGap(x));
        let english = second.filter(isEnglish);
        if (!english.length && second.length === 2 && second.every(isMarker)) english = [second[0]];
        if (lenient && native.length === 1 && second.length === 2 && english.length !== 1) {
            const twin = second.filter((r) => r.parsed && matches(native[0].parsed, r.parsed));
            if (twin.length === 1) english = second.filter((r) => r !== twin[0]);
        }
        let roman = second.filter((r) => !english.includes(r));
        const gapOnly =
            lenient &&
            row.length === 2 &&
            native.length === 1 &&
            !english.length &&
            roman.length === 1 &&
            isMarker(native[0]) &&
            isMarker(roman[0]);
        const bare = lenient && native.length === 1 && english.length === 1 && row.length === 2;
        if (bare)
            roman = [
                {
                    ...native[0],
                    col: "2",
                    parsed: {
                        gaps: native[0].parsed.gaps,
                        runs: native[0].parsed.runs.map((x) => ({
                            ...x,
                            attrs: x.attrs.filter((a) => !a.startsWith("enc=")),
                        })),
                    },
                },
            ];
        if (
            !bare &&
            !gapOnly &&
            (native.length !== 1 || english.length !== 1 || roman.length !== 1 || row.length !== 3)
        ) {
            fail(
                rowStart,
                "a row needs exactly one native, one English and one roman line",
                "a row with a missing or extra line",
                row.map((r) => `${r.col} ${r.raw}`),
            );
        } else {
            const [n, e, r] = [native[0], english[0], roman[0]];
            const same =
                n.parsed.runs.length === r.parsed.runs.length &&
                n.parsed.runs.every(
                    (x, i) =>
                        (isGap(x) && isGap(r.parsed.runs[i])) ||
                        (sameText(plainText(x), plainText(r.parsed.runs[i])) &&
                            langOf(x) === langOf(r.parsed.runs[i])),
                ) &&
                n.parsed.gaps.map((g) => g.trim()).join("|") ===
                    r.parsed.gaps.map((g) => g.trim()).join("|");
            if (!same)
                fail(
                    n.index,
                    "the native text differs from the roman text",
                    "native text that differs from the roman beyond codage",
                    row.map((x) => `${x.col} ${x.raw}`),
                );
            else {
                current.native.push(`1 ${n.raw}`);
                if (e) current.english.push(englishOf(e.raw));
                current.roman.push(`2 ${r.raw}`);
                current.pairs.push({ n: n.parsed, r: r.parsed, line: n.index });
            }
        }
        row = [];
    };

    body.forEach((line, i) => {
        if (!line.trim()) return endRow();
        if (line.trim() === CANTO) {
            endRow();
            if (afterBreak && !(lenient && !stanzas.length))
                fail(
                    i,
                    "a stanza break with no stanza before it",
                    "a stanza break with nothing before it",
                );
            else if (!afterBreak) stanzas.push(current);
            current = { native: [], english: [], roman: [], pairs: [] };
            afterBreak = true;
            return;
        }
        const m = line.match(/^([12]) +(.*)$/);
        const parsed = m && parseRuns(lenient ? m[2].replace(GAP, "[…]{lang=zxx}") : m[2], lenient);
        if (!m || (m[1] === "1" && !parsed)) {
            poisoned = true;
            return fail(
                i,
                "a native line is not a column number followed by runs",
                "a native line with no language run",
                [line],
            );
        }
        if (!row.length) rowStart = i;
        row.push({ col: m[1], raw: m[2], parsed, index: i });
        afterBreak = false;
    });
    endRow();
    if (afterBreak && stanzas.length)
        lenient ||
            fail(
                body.length - 1,
                "a stanza break with no stanza after it",
                "a stanza break with nothing after it",
            );
    else if (!afterBreak) stanzas.push(current);
    return findings.length ? { findings } : { stanzas, findings };
}

/**
 * Writes the original of each stanza once, as its roman lines, and names the
 * div's language and encoding from the native runs.
 *
 * The div language is the one with the most native text carrying `enc=`; an
 * original with no `enc=` anywhere takes the one language of its native runs,
 * written on a one-column div with no `enc=`. Its
 * runs are written as plain text and any other run keeps its span. Where the
 * native text holds codage, the line keeps the native text.
 *
 * @param {{pairs: {n: object, r: object, line: number}[]}[]} stanzas
 * @param {number} first the 1-based line number of the div's first body line
 * @returns {{lang?: string, enc?: string, lines?: string[][], finding?: {line: number, message: string}}}
 */
function originalOf(stanzas, first) {
    const weight = new Map();
    for (const { n } of stanzas.flatMap((s) => s.pairs))
        for (const run of n.runs) {
            const lang = langOf(run)?.slice(5);
            if (lang && run.attrs.some((a) => a.startsWith("enc=")))
                weight.set(lang, (weight.get(lang) ?? 0) + run.text.length);
        }
    let lang = [...weight.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    if (!lang) {
        const runs = stanzas.flatMap((x) => x.pairs).flatMap(({ n }) => n.runs);
        const share = new Map();
        for (const run of runs) {
            const l = langOf(run)?.slice(5);
            if (l && l !== "zxx" && !isGap(run))
                share.set(l, (share.get(l) ?? 0) + run.text.length);
        }
        const ranked = [...share.entries()].sort((a, b) => b[1] - a[1]);
        const total = ranked.reduce((sum, [, n]) => sum + n, 0);
        const spoken = ranked.filter(([l]) => l !== "en");
        const other = spoken.slice(1).reduce((sum, [, n]) => sum + n, 0);
        if (other > total / 4)
            return {
                finding: {
                    line: first,
                    message: `the native runs alternate between languages: ${ranked.map(([l]) => l).join(", ")}`,
                    shape: "native runs of an unscripted original disagree on language",
                },
            };
        lang = (spoken[0] ?? ranked[0])?.[0];
    }
    if (!lang)
        return {
            finding: {
                line: first,
                message: "no native run names a language",
                shape: "no native run names a language",
            },
        };
    const encs = new Map();
    for (const { n, line } of stanzas.flatMap((s) => s.pairs))
        for (const run of n.runs)
            if (langOf(run) === `lang=${lang}`) {
                const enc = run.attrs.find((a) => a.startsWith("enc="));
                if (enc && !encs.has(enc)) encs.set(enc, first + line);
            }
    if (encs.size > 1) {
        const [, at] = [...encs.entries()][1];
        return {
            finding: {
                line: at,
                shape: "native runs of one language disagree on enc=",
                message: `the native runs of ${lang} disagree on enc: ${[...encs.keys()].join(", ")}`,
            },
        };
    }
    const gapTexts = new Set(
        stanzas.flatMap((x) => x.pairs).flatMap(({ r }) => r.runs.filter(isGap).map(plainText)),
    );
    const body = (t) => t.replace(/^\s*\.*\s*/, "");
    const bodies = new Set([...gapTexts].map(body));
    const gapText = (t) =>
        (/^\s*\.*/.exec(t)[0].replace(/\s/g, "") ?? "") +
        (bodies.size === 1 ? [...bodies][0] : "…");
    const lines = stanzas.map((s) =>
        s.pairs.map(({ n, r }) =>
            unwrapRuns(
                {
                    runs: r.runs.map((run, i) =>
                        isGap(run) ?
                            { text: gapText(plainText(run)), attrs: ["lang=zxx"], link: false }
                        :   { ...run, text: plainText(n.runs[i]) },
                    ),
                    gaps: r.gaps,
                },
                lang,
            ),
        ),
    );
    return { lang, enc: [...encs.keys()][0], lines };
}

/**
 * @param {string} file path shown in findings and used to name work keys
 * @param {string} text the note
 * @param {{target366?: boolean}} [options]
 * @returns {{text: string, findings: string[], converted: number, refusals: {file: string, line: number, shape: string, count: number, rows: string[]}[]}}
 */
export function convertNote(file, text, options = {}) {
    const lines = text.split("\n");
    const out = [];
    const findings = [];
    const refusals = [];
    const refuse = (line, shape, rows = []) => {
        const known = refusals.find((r) => r.line === line && r.shape === shape);
        if (known) {
            known.count++;
            if (known.rows.length < 3) known.rows.push(...rows.slice(0, 3 - known.rows.length));
        } else refusals.push({ file, line, shape, count: 1, rows: rows.slice(0, 3) });
    };
    const slug = path
        .basename(file, ".md")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    const anchors = new Set(lines.map((l) => l.match(ANCHOR)?.[1]).filter(Boolean));
    const used = new Set();
    let converted = 0;
    let ordinal = 0;

    for (let i = 0; i < lines.length; i++) {
        const open = matchOpener(lines[i]);
        const attrs = open && (open[2] ?? "").trim().split(/\s+/).filter(Boolean);
        const cols = attrs?.find((a) => a.startsWith("cols="));
        if (!open || !cols) {
            out.push(lines[i]);
            continue;
        }
        const close = lines.findIndex((l, j) => j > i && l === open[1]);
        if (close < 0) {
            findings.push(`${file}:${i + 1}: error: the verse div never closes`);
            refuse(i + 1, "a div that never closes");
            out.push(lines[i]);
            continue;
        }
        ordinal++;
        if (cols !== "cols=2" || attrs.some((a) => !/^[\w-]+=[^\s=]+$/.test(a))) {
            findings.push(
                `${file}:${i + 1}: error: the div attributes are not simple key=value pairs with cols=2`,
            );
            refuse(i + 1, "div attributes that are not simple key=value pairs with cols=2");
            out.push(...lines.slice(i, close + 1));
            i = close;
            continue;
        }
        const { stanzas, findings: bad } = splitBody(
            lines.slice(i + 1, close),
            i + 2,
            !!options.target366,
        );
        if (!stanzas) {
            for (const f of bad) {
                findings.push(`${file}:${f.line}: error: ${f.message}`);
                refuse(i + 1, f.shape, f.rows);
            }
            out.push(...lines.slice(i, close + 1));
            i = close;
            continue;
        }

        let key;
        if (options.target366) {
            let j = i - 1;
            while (j >= 0 && !lines[j].trim()) j--;
            const anchor = j >= 0 ? lines[j].match(ANCHOR)?.[1] : undefined;
            key = anchor && !used.has(anchor) ? anchor : `${slug}-${ordinal}`;
            used.add(key);
            if (anchors.has(key) && key !== anchor) {
                findings.push(`${file}:${i + 1}: error: the work key ${key} is already an anchor`);
            }
        }
        const kept = attrs.filter((a) => !a.startsWith("numstep="));
        const flag = options.target366;
        const enAttrs = kept
            .filter((a) => !a.startsWith("cols="))
            .map((a) => (a.startsWith("lang=") ? "lang=en" : a));
        if (!kept.some((a) => a.startsWith("lang="))) enAttrs.push("lang=en");
        let original = kept;
        if (flag) {
            const o = originalOf(stanzas, i + 2);
            if (o.finding) {
                findings.push(`${file}:${o.finding.line}: error: ${o.finding.message}`);
                refuse(
                    i + 1,
                    o.finding.shape,
                    stanzas
                        .flatMap((x) => x.native)
                        .slice(0, 3)
                        .map((l) => l),
                );
                out.push(...lines.slice(i, close + 1));
                i = close;
                continue;
            }
            original = kept
                .filter((a) => !a.startsWith("cols=") && !a.startsWith("lang="))
                .concat(o.enc ? [`lang=${o.lang}`, o.enc] : [`lang=${o.lang}`]);
            stanzas.forEach((s, n) => (s.original = o.lines[n]));
        }
        const work = key ? [`work=${key}`] : [];
        const opener = (a) => `${open[1]} {.verse ${[...a, ...work].join(" ")}}`;
        const prep = (lines, prefixed) => {
            if (!flag) return lines;
            const ends = lines.map((l) => {
                const m = prefixed && l.match(/^([12] )(.*)$/);
                return m ? m[1] + escapeSlashes(m[2]) : escapeSlashes(l);
            });
            return marked(ends);
        };
        const joinMarked = (parts, prefixed) =>
            stanzas
                .map((s) => parts.flatMap((pick) => prep(pick(s), prefixed)).join("\n"))
                .join("\n\n");

        out.push(opener(enAttrs), joinMarked([(s) => s.english], false), open[1], "");
        out.push(
            opener(original),
            flag ?
                joinMarked([(s) => s.original], false)
            :   joinMarked([(s) => s.native, (s) => s.roman], true),
            open[1],
        );
        converted++;
        i = close;
    }
    return { text: out.join("\n"), findings, converted, refusals };
}

/**
 * The comparable content of a note, laid out as old triplet rows or as the new
 * two divs.
 *
 * @param {string} text
 * @returns {{english: string[], native: string[], roman: string[]}}
 */
export function verseContent(text) {
    const unmark = (l) => l.replace(/(?<!\\)\/$/, "").replace(/\\\//g, "/");
    const norm = (l) =>
        l
            .replace(/\{[^}]*\}/g, "")
            .replace(/\\([[\]])/g, "$1")
            .replace(/[[\]]/g, "")
            .replace(/\s*…\s*/g, "…")
            .replace(/\s+/g, " ")
            .trim();
    const result = { english: [], native: [], roman: [] };
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
        const open = matchOpener(lines[i]);
        if (!open) continue;
        const attrs = (open[2] ?? "").split(/\s+/);
        const close = lines.findIndex((l, j) => j > i && l === open[1]);
        const body = lines.slice(i + 1, close);
        i = close;
        const content = body.filter((l) => l.trim() && l.trim() !== CANTO);
        const lang = attrs.find((a) => a.startsWith("lang="));
        if (
            !attrs.includes("cols=2") &&
            (attrs.some((a) => a.startsWith("enc=")) || (lang && lang !== "lang=en"))
        ) {
            for (const l of content) {
                const line = norm(unmark(l.trim()));
                result.native.push(line);
                result.roman.push(line);
            }
            continue;
        }
        if (!attrs.includes("cols=2")) {
            result.english.push(...content.map((l) => norm(unmark(l.trim()))));
            continue;
        }
        const rows = splitBody(body, 1, true);
        if (rows.stanzas) {
            for (const s of rows.stanzas) {
                result.english.push(...s.english.map(norm));
                s.native.forEach((n, k) => {
                    result.native.push(norm(n.slice(2)));
                    result.roman.push(norm((n.includes("⟦") ? n : s.roman[k]).slice(2)));
                });
            }
            continue;
        }
        for (const line of content) {
            const m = line.match(/^([12]) +(.*)$/);
            result[m[1] === "1" ? "native" : "roman"].push(norm(unmark(m[2])));
        }
    }
    return result;
}

/** Prints findings; returns the exit status. */
export function main(argv) {
    const target366 = argv.includes("--target-366");
    const report = argv.find((a) => a.startsWith("--refusals="))?.slice(11);
    const files = argv.filter((a) => !a.startsWith("--"));
    if (!files.length) {
        console.error(
            "usage: split-paired-verse.mjs [--target-366] [--refusals=<file>] <note.md>...",
        );
        return 2;
    }
    let status = 0;
    const refused = [];
    for (const file of files) {
        const before = fs.readFileSync(file, "utf8");
        const { text, findings, converted, refusals } = convertNote(file, before, { target366 });
        refused.push(...refusals);
        if (!report) for (const f of findings) console.error(f);
        if (findings.length) {
            status = 1;
            continue;
        }
        if (text !== before) fs.writeFileSync(file, text);
        console.log(`${file}: ${converted} paired div${converted === 1 ? "" : "s"} split`);
    }
    if (report) fs.writeFileSync(report, refusalReport(refused));
    return status;
}

/**
 * @param {{file: string, line: number, shape: string, count: number, rows: string[]}[]} refusals
 * @returns {string} the refused divs as markdown, grouped by shape
 */
export function refusalReport(refusals) {
    const shapes = Map.groupBy(refusals, (r) => r.shape);
    let out = "# Refused paired divs\n";
    for (const [shape, group] of shapes) {
        out += `\n## ${shape} (${group.length} div${group.length === 1 ? "" : "s"})\n`;
        for (const r of group) {
            out += `\n- \`${r.file}:${r.line}\`${r.count > 1 ? `, ${r.count} rows` : ""}\n`;
            for (const row of r.rows) out += `  - \`${row.replace(/\n/g, " ")}\`\n`;
        }
    }
    return out;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main(process.argv.slice(2));
}
