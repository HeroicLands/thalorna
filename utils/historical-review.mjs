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

import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { validatePages } from "./site-publication.mjs";

/** The branch whose history a reviewable source revision must belong to. */
export const TRUSTED_BRANCH = "origin/main";

const SHA = /^[0-9a-f]{40}$/;
const FONT_FILE = /\.(?:woff2?|ttf|otf)$/i;
const EXTERNAL_FONT_URL =
    /url\(\s*["']?((?:https?:)?\/\/[^)"'\s?#]+\.(?:woff2?|ttf|otf|eot)(?:[?#][^)"'\s]*)?)(?=["')\s])/gi;

/** The page count a review build must reach unless a dispatch lowers it. */
export const DEFAULT_MIN_PAGES = 1001;

function git(cwd, args) {
    const result = spawnSync("git", ["-C", cwd, ...args], { encoding: "utf8" });
    return { ok: result.status === 0, out: (result.stdout || "").trim() };
}

/** Require one full lowercase 40-character commit SHA. */
export function requireSha(sha, label = "source SHA") {
    if (typeof sha !== "string" || !SHA.test(sha))
        throw new Error(`${label} must be a full lowercase 40-character SHA`);
    return sha;
}

/**
 * Validate a requested source against the trusted repository's fetched history.
 * Rejects malformed, unavailable and non-ancestor commits and returns the
 * commit's own full SHA.
 */
export function validateSource(repo, sha, { trusted = TRUSTED_BRANCH } = {}) {
    requireSha(sha);
    if (!git(repo, ["rev-parse", "--verify", "--quiet", `${trusted}^{commit}`]).ok)
        throw new Error(`trusted history ${trusted} is unavailable`);
    const commit = git(repo, ["rev-parse", "--verify", "--quiet", `${sha}^{commit}`]);
    if (!commit.ok || commit.out !== sha)
        throw new Error(`source ${sha} is unavailable in the fetched history`);
    if (!git(repo, ["merge-base", "--is-ancestor", sha, trusted]).ok)
        throw new Error(`source ${sha} is not an ancestor of ${trusted}`);
    return commit.out;
}

/** Verify that the checked-out source is exactly the validated commit. */
export function verifyCheckout(sourceRoot, expected) {
    requireSha(expected, "validated SHA");
    const head = git(sourceRoot, ["rev-parse", "HEAD"]);
    if (!head.ok || head.out !== expected)
        throw new Error(
            `checkout mismatch: expected ${expected}, found ${head.ok ? head.out : "no commit"}`,
        );
    return head.out;
}

async function sha256(file) {
    return createHash("sha256")
        .update(await fs.readFile(file))
        .digest("hex");
}

async function walk(root, relative = "") {
    const files = [];
    for (const name of (await fs.readdir(path.join(root, relative))).sort()) {
        const next = path.join(relative, name);
        const stat = await fs.lstat(path.join(root, next));
        if (stat.isDirectory()) files.push(...(await walk(root, next)));
        else files.push(next.split(path.sep).join("/"));
    }
    return files;
}

/** Hash every file under a tree, in path order. */
export async function manifestOf(root) {
    const files = [];
    for (const file of await walk(root))
        files.push({
            path: file,
            bytes: (await fs.stat(path.join(root, file))).size,
            sha256: await sha256(path.join(root, file)),
        });
    return files;
}

async function installedVersion(sourceRoot, name) {
    try {
        const manifest = JSON.parse(
            await fs.readFile(path.join(sourceRoot, "node_modules", name, "package.json"), "utf8"),
        );
        if (typeof manifest.version === "string" && manifest.version) return manifest.version;
    } catch {
        // Reported below as missing evidence.
    }
    throw new Error(`missing toolchain evidence: ${name} is not installed in the source`);
}

const EXTERNAL = /^(?:https?:)?\/\//i;
const SPACE = /[\t\n\f\r ]/;
const RAW_TEXT = new Set(["script", "style", "textarea", "title", "xmp", "iframe"]);

/** The index just past the first `close` at or after `from`, or the text's end. */
function past(text, close, from) {
    const at = text.indexOf(close, from);
    return at < 0 ? text.length : at + close.length;
}

/**
 * Parse one start tag beginning at `<` and return its lowercased name, its
 * attributes and the index past its closing `>`. A `>` inside a quoted value
 * does not close the tag, and only the first of repeated attributes counts.
 */
function startTag(text, start) {
    let i = start + 1;
    while (i < text.length && !SPACE.test(text[i]) && text[i] !== "/" && text[i] !== ">") i += 1;
    const name = text.slice(start + 1, i).toLowerCase();
    const attributes = new Map();
    while (i < text.length) {
        while (i < text.length && (SPACE.test(text[i]) || text[i] === "/")) i += 1;
        if (i >= text.length || text[i] === ">") return { name, attributes, end: i + 1 };
        const from = i;
        i += 1;
        while (i < text.length && !SPACE.test(text[i]) && !"/>=".includes(text[i])) i += 1;
        const key = text.slice(from, i).toLowerCase();
        while (i < text.length && SPACE.test(text[i])) i += 1;
        let value = "";
        if (text[i] === "=") {
            i += 1;
            while (i < text.length && SPACE.test(text[i])) i += 1;
            const quote = text[i];
            if (quote === '"' || quote === "'") {
                const close = text.indexOf(quote, i + 1);
                const end = close < 0 ? text.length : close;
                value = text.slice(i + 1, end);
                i = end + 1;
            } else {
                const from = i;
                while (i < text.length && !SPACE.test(text[i]) && text[i] !== ">") i += 1;
                value = text.slice(from, i);
            }
        }
        if (!attributes.has(key)) attributes.set(key, value);
    }
    return { name, attributes, end: text.length };
}

/**
 * The attributes of every `<link>` element in an HTML document and the text of
 * every `<style>` element. Comments, declarations, end tags and the contents of
 * raw-text elements such as `<script>` contribute nothing, so markup inside
 * them or inside a quoted attribute value is never read as a tag.
 */
function htmlParts(text) {
    const links = [];
    const styles = [];
    let i = 0;
    while (i < text.length) {
        const open = text.indexOf("<", i);
        if (open < 0) break;
        const next = text[open + 1] ?? "";
        if (text.startsWith("<!--", open)) i = past(text, "-->", open + 4);
        else if (next === "!" || next === "?" || next === "/") i = past(text, ">", open + 2);
        else if (/[a-z]/i.test(next)) {
            const tag = startTag(text, open);
            i = tag.end;
            if (tag.name === "link") links.push(tag.attributes);
            if (RAW_TEXT.has(tag.name)) {
                const close = new RegExp(`</${tag.name}(?=[\\t\\n\\f\\r />])`, "gi");
                close.lastIndex = i;
                const found = close.exec(text);
                const end = found ? found.index : text.length;
                if (tag.name === "style") styles.push(text.slice(i, end));
                i = end;
            }
        } else i = open + 1;
    }
    return { links, styles };
}

/** The index past a CSS string that opens at `start`, honoring backslash escapes. */
function cssStringEnd(css, start) {
    const quote = css[start];
    let i = start + 1;
    while (i < css.length && css[i] !== quote && css[i] !== "\n") i += css[i] === "\\" ? 2 : 1;
    return Math.min(i + 1, css.length);
}

/**
 * The value of a CSS string token with each backslash dropped before the
 * character it precedes. Hex escapes are not decoded, so a target written with
 * them is not recognized as external here; the raw scan flags it instead.
 */
function cssStringValue(css, start, end) {
    const close = css[end - 1] === css[start] && end - 1 > start ? end - 1 : end;
    return css.slice(start + 1, close).replace(/\\(.)/gs, "$1");
}

/** CSS with every comment replaced by a space; a comment opener inside a string is kept. */
function cssWithoutComments(css) {
    let out = "";
    let i = 0;
    while (i < css.length) {
        const c = css[i];
        if (c === "/" && css[i + 1] === "*") {
            i = past(css, "*/", i + 2);
            out += " ";
        } else if (c === '"' || c === "'") {
            const end = cssStringEnd(css, i);
            out += css.slice(i, end);
            i = end;
        } else {
            out += c;
            i += 1;
        }
    }
    return out;
}

/**
 * The targets of every `@import` rule in a stylesheet whose comments are
 * already removed. The text of a string is never read as a rule, so an
 * `@import` inside a quoted value neither hides nor fakes one.
 */
function cssImports(css) {
    const targets = [];
    let i = 0;
    while (i < css.length) {
        const c = css[i];
        if (c === '"' || c === "'") {
            i = cssStringEnd(css, i);
            continue;
        }
        if (c !== "@" || !/^@import(?![\w-])/i.test(css.slice(i, i + 8))) {
            i += 1;
            continue;
        }
        i += "@import".length;
        while (i < css.length && SPACE.test(css[i])) i += 1;
        if (css[i] === '"' || css[i] === "'") {
            const end = cssStringEnd(css, i);
            targets.push(cssStringValue(css, i, end));
            i = end;
        } else if (/^url\(/i.test(css.slice(i, i + 4))) {
            i += 4;
            while (i < css.length && SPACE.test(css[i])) i += 1;
            if (css[i] === '"' || css[i] === "'") {
                const end = cssStringEnd(css, i);
                targets.push(cssStringValue(css, i, end));
                i = end;
            } else {
                const close = css.indexOf(")", i);
                const end = close < 0 ? css.length : close;
                targets.push(css.slice(i, end).trim());
                i = end;
            }
        }
    }
    return targets;
}

/** Pages and documents a browser renders, by the `inspected` count they fall under. */
const MARKUP = { html: /\.(?:html?|xhtml)$/i, svg: /\.svgz?$/i, xml: /\.(?:xml|xslt?)$/i };
const STYLE = /\.css$/i;

/** The most `unparsed` entries a record keeps, and the length of each excerpt. */
const UNPARSED_LIMIT = 100;
const EXCERPT_LENGTH = 80;

/**
 * Namespace declarations that every inline SVG or XHTML document carries. They
 * name a namespace and load nothing, so the raw scan blanks exactly these
 * before it looks for absolute references.
 */
const NAMESPACE =
    /\bxmlns(?::[\w.-]+)?\s*=\s*(["'])http:\/\/www\.w3\.org\/(?:2000\/svg|1999\/xhtml|1999\/xlink|1998\/Math\/MathML|XML\/1998\/namespace)\1/gi;

const ABSOLUTE = /https?:|[/\\]{2}(?! )/gi;
const BASE = /<(?:[\w.-]+:)?base(?![\w.:-])/gi;
const SRCDOC = /\bsrcdoc\b/gi;
const ATTRIBUTE_VALUE = String.raw`\s*=\s*(?=("[^"]*"?|'[^']*'?|[^\t\n\f\r >]*))`;
const URL_NAMES = "href|src|srcset|imagesrcset|poster|action|formaction|data|background";
const URL_ATTRIBUTE = new RegExp(String.raw`\b(${URL_NAMES})` + ATTRIBUTE_VALUE, "gi");
const URL_OR_CONTENT_ATTRIBUTE = new RegExp(
    String.raw`\b(${URL_NAMES}|content)` + ATTRIBUTE_VALUE,
    "gi",
);
const STYLE_ATTRIBUTE = new RegExp(String.raw`\bstyle` + ATTRIBUTE_VALUE, "gi");
const HTTP_EQUIV = /http-equiv/i;
const STYLE_ELEMENT = /<(?:[\w.-]+:)?style(?![\w.:-])/gi;
const STYLE_CLOSE = /<\/(?:[\w.-]+:)?style/i;
const ENTITY = /<!ENTITY/gi;
const REFERENCE = /&(?:#|(?!(?:amp|lt|gt|quot|apos);)[a-z])/i;
const DATA_URL = /^[\x00-\x20]*data:([^,]*)/i;
const MARKUP_TYPE = /css|html|svg|xml/i;
const AT_ESCAPE = /@[\w-]*\\/g;
const URL_OPEN = /url\(/gi;
const IMPORT = /@import/gi;
const UNSAFE = /[\\&\x00-\x1f\x7f]/;
const LOCAL = /^(?:$|[#?]|\/(?![/\\])|\.\.?\/|[\w-][^:]*$)/;

const NAME_CHAR = /[\w-]/;
const HEX_DIGIT = /[0-9a-f]/i;

/**
 * The index just past the CSS escape that starts at `i`, or `i` when the
 * backslash there starts no escape. An escape is a backslash and one to six
 * hex digits with one optional whitespace, or a backslash and any single
 * character that is not a newline.
 */
function escapeEnd(text, i) {
    if (text[i] !== "\\" || i + 1 >= text.length) return i;
    const first = text[i + 1];
    if (!HEX_DIGIT.test(first)) return /[\n\f\r]/.test(first) ? i : i + 2;
    let end = i + 2;
    while (end < i + 7 && end < text.length && HEX_DIGIT.test(text[end])) end += 1;
    if (text.startsWith("\r\n", end)) return end + 2;
    return end < text.length && SPACE.test(text[end]) ? end + 1 : end;
}

/**
 * The index just past the identifier that starts at `i`: a run of name
 * characters and escapes, each consumed once. It is `i` when none starts there.
 */
function identEnd(text, i) {
    let end = i;
    for (;;) {
        if (end < text.length && NAME_CHAR.test(text[end])) end += 1;
        else {
            const next = escapeEnd(text, end);
            if (next === end) return end;
            end = next;
        }
    }
}

/**
 * The offsets of every function written with an escape whose name decodes to
 * `url`. Each character is read once, so the scan is linear in the text.
 */
function escapedUrlFunctions(text) {
    const hits = [];
    let i = 0;
    while (i < text.length) {
        const end = i > 0 && /[\w\\-]/.test(text[i - 1]) ? i : identEnd(text, i);
        if (end === i) {
            i += 1;
            continue;
        }
        const name = text.slice(i, end);
        if (text[end] === "(" && name.includes("\\") && cssIdent(name) === "url") hits.push(i);
        i = end;
    }
    return hits;
}

/** A CSS identifier with its escapes decoded, lowercased. */
function cssIdent(text) {
    return text
        .replace(/\\([0-9a-f]{1,6})(?:\r\n|[\t\n\f\r ])?/gi, (_, hex) => {
            const code = parseInt(hex, 16);
            return code && code <= 0x10ffff ? String.fromCodePoint(code) : "�";
        })
        .replace(/\\(.)/gs, "$1")
        .toLowerCase();
}

/** A URL value with surrounding CSS whitespace and one pair of quotes removed. */
function unquoted(value) {
    const isSpace = (character) => "\t\n\f\r ".includes(character);
    let start = 0;
    let end = value.length;
    while (start < end && isSpace(value[start])) start += 1;
    while (end > start && isSpace(value[end - 1])) end -= 1;
    const trimmed = value.slice(start, end);
    const quote = trimmed[0];
    if (quote !== '"' && quote !== "'") return trimmed;
    return trimmed.slice(1, trimmed.endsWith(quote) && trimmed.length > 1 ? -1 : undefined);
}

/** Whether a URL value is plainly local: no escape, reference or control character, no scheme or host. */
function plainlyLocal(value) {
    return !UNSAFE.test(value) && LOCAL.test(value);
}

/**
 * Whether a URL attribute value is a `data:` URL that a browser can read as
 * CSS, HTML, SVG or XML, or any `data:` URL in an `href`, which covers every
 * stylesheet link.
 */
function markupData(name, value) {
    const data = DATA_URL.exec(value);
    return Boolean(data) && (name.toLowerCase() === "href" || MARKUP_TYPE.test(data[1]));
}

/**
 * The offsets in one file's text where something external-looking appears.
 * The scan reads the raw text and ignores comments, quotes and element
 * boundaries, so markup a parser would treat differently is still seen. It
 * never decides whether a hit would load; every hit counts. It flags:
 *
 * - an `http:` or `https:` scheme, or two slashes or backslashes in any mix
 *   followed by anything but a space;
 * - any `<base` tag and any `srcdoc` attribute;
 * - an `href`, `src`, `srcset`, `imagesrcset`, `poster`, `action`,
 *   `formaction`, `data` or `background` value, or a `content` value in a file
 *   that mentions `http-equiv`, holding `&`, a backslash or a control
 *   character, or holding a `data:` URL of a CSS, HTML, SVG or XML type, or
 *   any `data:` URL in an `href`; every occurrence of such a name is tested,
 *   including one that sits inside another attribute's value;
 * - a numeric character reference, or a named one other than `&amp;`, `&lt;`,
 *   `&gt;`, `&quot;` and `&apos;`, inside a `style` value or between `<style`
 *   and the next `</style`, and any `<!ENTITY` declaration;
 * - an at-keyword written with a CSS escape, and a function written with an
 *   escape whose name decodes to `url`;
 * - a `url(...)` value that is not plainly local, which covers every
 *   `@font-face` source whatever its extension;
 * - an `@import` not followed by a string or `url(`, one whose string target
 *   is not plainly local, and one with a backslash anywhere before its `;`.
 *
 * A plainly local value has no backslash, `&` or control character and is
 * empty, a fragment or query, a path starting with `/` and then neither `/`
 * nor `\`, a path starting with `./` or `../`, or a bare relative name with no
 * `:`.
 */
export function externalLooking(raw) {
    const text = raw.replace(NAMESPACE, (match) => " ".repeat(match.length));
    const hits = [];
    for (const pattern of [ABSOLUTE, BASE, SRCDOC, AT_ESCAPE, ENTITY])
        for (const match of text.matchAll(pattern)) hits.push(match.index);
    const attributes = HTTP_EQUIV.test(text) ? URL_OR_CONTENT_ATTRIBUTE : URL_ATTRIBUTE;
    for (const match of text.matchAll(attributes)) {
        const value = unquoted(match[2]);
        if (UNSAFE.test(value) || markupData(match[1], value)) hits.push(match.index);
    }
    for (const match of text.matchAll(STYLE_ATTRIBUTE))
        if (REFERENCE.test(match[1])) hits.push(match.index);
    for (const match of text.matchAll(STYLE_ELEMENT)) {
        const from = match.index + match[0].length;
        const close = text.slice(from).search(STYLE_CLOSE);
        if (REFERENCE.test(text.slice(from, close < 0 ? text.length : from + close)))
            hits.push(match.index);
    }
    hits.push(...escapedUrlFunctions(text));
    for (const match of text.matchAll(URL_OPEN)) {
        const from = match.index + match[0].length;
        const close = text.indexOf(")", from);
        const value = text.slice(from, close < 0 ? text.length : close);
        if (!plainlyLocal(unquoted(value))) hits.push(match.index);
    }
    for (const match of text.matchAll(IMPORT)) {
        const from = match.index + match[0].length;
        const end = text.indexOf(";", from);
        const rule = text.slice(from, end < 0 ? text.length : end);
        const target = rule.replace(/^[\t\n\f\r ]+/, "");
        let local;
        if (/^url\(/i.test(target)) local = true;
        else if (target[0] === '"' || target[0] === "'") {
            const close = target.indexOf(target[0], 1);
            const line = target.search(/[\n\f\r]/);
            const stop = [close, line].filter((at) => at > 0);
            local = plainlyLocal(target.slice(1, stop.length ? Math.min(...stop) : undefined));
        } else local = false;
        if (!local || rule.includes("\\")) hits.push(match.index);
    }
    return hits;
}

/** The excerpt recorded for a file whose encoding the scan does not read. */
const ENCODING_EXCERPT = "encoding not scanned";

/**
 * Whether a file's bytes are not UTF-8 text the scan can read: a UTF-16
 * byte-order mark, a NUL byte, or gzip compression.
 */
function unscannable(bytes) {
    const [first, second] = bytes;
    return (
        (first === 0xff && second === 0xfe) ||
        (first === 0xfe && second === 0xff) ||
        (first === 0x1f && second === 0x8b) ||
        bytes.includes(0)
    );
}

/**
 * Font files the site contains and the external dependencies its pages and
 * styles name: linked stylesheets, CSS imports and font file URLs, read by a
 * tokenizer, and the raw-text hits of `externalLooking` that make the record
 * fail closed. Line breaks and form feeds are normalized to `\n` before
 * scanning. A file whose bytes are not scannable text is itself a hit. Nothing
 * external is fetched, so what an external stylesheet loads stays unknown.
 */
async function fontEvidence(siteRoot) {
    const files = await walk(siteRoot);
    const included = [];
    for (const file of files.filter((name) => FONT_FILE.test(name)))
        included.push({ path: file, sha256: await sha256(path.join(siteRoot, file)) });
    const stylesheets = new Set();
    const imports = new Set();
    const fontUrls = new Set();
    const unparsed = new Map();
    const inspected = { html: 0, css: 0, svg: 0, xml: 0 };
    for (const file of files) {
        const kind = Object.keys(MARKUP).find((key) => MARKUP[key].test(file));
        if (!kind && !STYLE.test(file)) continue;
        inspected[kind ?? "css"] += 1;
        const bytes = await fs.readFile(path.join(siteRoot, file));
        if (unscannable(bytes)) {
            unparsed.set(`${file}\0${ENCODING_EXCERPT}`, { file, excerpt: ENCODING_EXCERPT });
            continue;
        }
        const text = bytes.toString("utf8").replace(/\r\n?|\f/g, "\n");
        let styles;
        if (kind) {
            const parts = htmlParts(text);
            for (const link of parts.links) {
                const href = (link.get("href") ?? "").trim();
                if (!EXTERNAL.test(href)) continue;
                const rel = (link.get("rel") ?? "").toLowerCase().split(/[\t\n\f\r ]+/);
                if (rel.includes("stylesheet")) stylesheets.add(href);
                else if (rel.includes("preload") && link.get("as")?.toLowerCase() === "font")
                    fontUrls.add(href);
            }
            styles = parts.styles.map(cssWithoutComments);
            // The whole page is searched, comments, scripts and attributes
            // included, so a font URL in a style attribute is recorded, and so
            // is one inside a comment or a script.
            for (const match of text.matchAll(EXTERNAL_FONT_URL)) fontUrls.add(match[1]);
        } else {
            styles = [cssWithoutComments(text)];
            for (const match of styles[0].matchAll(EXTERNAL_FONT_URL)) fontUrls.add(match[1]);
        }
        for (const style of styles)
            for (const target of cssImports(style)) if (EXTERNAL.test(target)) imports.add(target);
        for (const at of externalLooking(text)) {
            const excerpt = text.slice(at, at + EXCERPT_LENGTH);
            unparsed.set(`${file}\0${excerpt}`, { file, excerpt });
        }
    }
    return {
        included,
        external: {
            verified: false,
            inspected,
            stylesheets: [...stylesheets].sort(),
            imports: [...imports].sort(),
            fontUrls: [...fontUrls].sort(),
            unparsed: [...unparsed.keys()]
                .sort()
                .slice(0, UNPARSED_LIMIT)
                .map((key) => unparsed.get(key)),
            unparsedTotal: unparsed.size,
            truncated: unparsed.size > UNPARSED_LIMIT,
        },
    };
}

const UNRESOLVED_NOTE =
    "external stylesheets, imports, font URLs or other external-looking references appear " +
    "and were not fetched; the fonts they load are unknown and their bytes are not part of " +
    "this artifact";
const NONE_NOTE =
    "no external-looking reference appears in the markup and CSS written in the inspected pages and styles; resources a script or XSLT inserts, headers the host sends and files of other types are not covered";

/**
 * The external dependency record for gathered evidence, with its derived
 * status. `none-found` holds only when every list, `unparsed` included, is
 * empty and `unparsedTotal` is zero.
 */
function externalRecord(external) {
    const unresolved =
        external.unparsedTotal > 0 ||
        ["stylesheets", "imports", "fontUrls", "unparsed"].some((key) => external[key].length > 0);
    return {
        ...external,
        status: unresolved ? "unresolved" : "none-found",
        note: unresolved ? UNRESOLVED_NOTE : NONE_NOTE,
    };
}

/** Assemble the provenance record for a built source. */
export async function collectProvenance({
    sourceRoot,
    siteRoot,
    requested,
    validated,
    actual,
    minPages = DEFAULT_MIN_PAGES,
}) {
    requireSha(requested, "requested SHA");
    requireSha(validated, "validated SHA");
    requireSha(actual, "actual SHA");
    if (requested !== validated || validated !== actual)
        throw new Error(`inconsistent SHAs: ${requested} ${validated} ${actual}`);
    let lockfile;
    try {
        lockfile = await sha256(path.join(sourceRoot, "package-lock.json"));
    } catch {
        throw new Error("missing toolchain evidence: the source has no package-lock.json");
    }
    const packageBuild = await installedVersion(sourceRoot, "@heroiclands/package-build");
    const fonts = await installedVersion(sourceRoot, "@heroiclands/fonts");
    const evidence = await fontEvidence(siteRoot);
    if (!evidence.included.length)
        throw new Error("missing font evidence: the built site contains no font files");
    return {
        schema: 1,
        requestedSha: requested,
        validatedSha: validated,
        actualSha: actual,
        minPages,
        lockfile: { path: "package-lock.json", sha256: lockfile },
        packageBuild: { version: packageBuild },
        fonts: { version: fonts, included: evidence.included },
        externalFonts: externalRecord(evidence.external),
    };
}

/**
 * Stage the review artifact: the rendered pages, a file manifest, the source
 * lockfile and the provenance. The stage directory must not exist.
 */
export async function stageArtifact({ stage, sourceRoot, siteRoot, provenance }) {
    await validatePages(siteRoot, { minPages: provenance.minPages });
    await fs.mkdir(stage);
    await fs.copyFile(
        path.join(sourceRoot, "package-lock.json"),
        path.join(stage, "package-lock.json"),
    );
    await fs.cp(siteRoot, path.join(stage, "site"), { recursive: true });
    const files = await manifestOf(path.join(stage, "site"));
    const manifest = { schema: 1, files };
    const manifestText = `${JSON.stringify(manifest, null, 2)}\n`;
    await fs.writeFile(path.join(stage, "manifest.json"), manifestText);
    const record = {
        ...provenance,
        manifest: {
            files: files.length,
            sha256: createHash("sha256").update(manifestText).digest("hex"),
        },
    };
    await fs.writeFile(path.join(stage, "provenance.json"), `${JSON.stringify(record, null, 2)}\n`);
    return record;
}

/** Re-check a staged artifact against its manifest and provenance. */
export async function verifyArtifact(stage, { minPages } = {}) {
    const read = async (name) => {
        try {
            return await fs.readFile(path.join(stage, name), "utf8");
        } catch {
            throw new Error(`${stage}/${name}: error: missing artifact file`);
        }
    };
    const manifestText = await read("manifest.json");
    const manifest = JSON.parse(manifestText);
    const provenance = JSON.parse(await read("provenance.json"));
    const top = (await fs.readdir(stage)).sort();
    if (top.join() !== "manifest.json,package-lock.json,provenance.json,site")
        throw new Error(`${stage}: error: unexpected artifact layout: ${top.join(", ")}`);
    const pages = await validatePages(path.join(stage, "site"), {
        minPages: minPages ?? provenance.minPages ?? DEFAULT_MIN_PAGES,
    });
    const actual = await manifestOf(path.join(stage, "site"));
    if (JSON.stringify(actual) !== JSON.stringify(manifest.files))
        throw new Error(`${stage}: error: the manifest does not match the pages`);
    for (const key of ["requestedSha", "validatedSha", "actualSha"])
        requireSha(provenance[key], key);
    if (
        provenance.requestedSha !== provenance.validatedSha ||
        provenance.validatedSha !== provenance.actualSha
    )
        throw new Error(`${stage}: error: provenance SHAs disagree`);
    if (
        provenance.manifest?.sha256 !== createHash("sha256").update(manifestText).digest("hex") ||
        provenance.manifest.files !== actual.length
    )
        throw new Error(`${stage}: error: provenance does not describe this manifest`);
    for (const [key, value] of [
        ["lockfile", provenance.lockfile?.sha256],
        ["packageBuild", provenance.packageBuild?.version],
        ["fonts", provenance.fonts?.version],
    ])
        if (!value) throw new Error(`${stage}: error: provenance lacks ${key} evidence`);
    if ((await sha256(path.join(stage, "package-lock.json"))) !== provenance.lockfile.sha256)
        throw new Error(`${stage}: error: the lockfile does not match its provenance`);
    if (!provenance.fonts.included?.length)
        throw new Error(`${stage}: error: provenance lacks font hashes`);
    for (const font of provenance.fonts.included) {
        const entry = actual.find((file) => file.path === font.path);
        if (!entry || entry.sha256 !== font.sha256)
            throw new Error(`${stage}: error: font ${font.path} does not match the pages`);
    }
    const recorded = provenance.externalFonts;
    const lists = ["stylesheets", "imports", "fontUrls"];
    if (
        !recorded ||
        recorded.verified !== false ||
        !["unresolved", "none-found"].includes(recorded.status) ||
        ["html", "css", "svg", "xml"].some((key) => !Number.isInteger(recorded.inspected?.[key])) ||
        lists.some(
            (key) =>
                !Array.isArray(recorded[key]) || recorded[key].some((v) => typeof v !== "string"),
        ) ||
        !Array.isArray(recorded.unparsed) ||
        recorded.unparsed.some(
            (entry) => typeof entry?.file !== "string" || typeof entry?.excerpt !== "string",
        ) ||
        !Number.isInteger(recorded.unparsedTotal) ||
        typeof recorded.truncated !== "boolean" ||
        recorded.truncated !== recorded.unparsedTotal > UNPARSED_LIMIT ||
        recorded.unparsed.length !== Math.min(recorded.unparsedTotal, UNPARSED_LIMIT)
    )
        throw new Error(`${stage}: error: provenance lacks external dependency evidence`);
    const current = externalRecord((await fontEvidence(path.join(stage, "site"))).external);
    if (JSON.stringify(current) !== JSON.stringify(recorded))
        throw new Error(`${stage}: error: external dependency evidence does not match the pages`);
    return { pages, files: actual.length };
}

async function output(name, value) {
    if (process.env.GITHUB_OUTPUT)
        await fs.appendFile(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
}

async function main() {
    const [command, ...args] = process.argv.slice(2);
    const given = process.env.MIN_PAGES;
    const minPages = given ? Number(given) : undefined;
    if (given && (!Number.isInteger(minPages) || minPages < 1))
        throw new Error("MIN_PAGES must be a positive integer");
    if (command === "validate") {
        const [repo, sha] = args;
        const trusted = process.env.TRUSTED_HEAD;
        if (trusted) {
            requireSha(trusted, "workflow SHA");
            if (!git(repo, ["merge-base", "--is-ancestor", trusted, TRUSTED_BRANCH]).ok)
                throw new Error(`workflow revision ${trusted} is not on ${TRUSTED_BRANCH}`);
        }
        const validated = validateSource(repo, sha);
        await output("validated", validated);
        console.log(`Validated ${validated}`);
    } else if (command === "verify-checkout") {
        const [source, expected] = args;
        const actual = verifyCheckout(source, expected);
        await output("actual", actual);
        console.log(`Checked out ${actual}`);
    } else if (command === "stage") {
        const [source, site, stage, requested, validated, actual] = args;
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            requested,
            validated,
            actual,
            minPages,
        });
        await stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance });
        console.log(`Staged ${stage}`);
    } else if (command === "verify") {
        const result = await verifyArtifact(args[0], { minPages });
        console.log(`Verified ${result.pages} pages in ${result.files} files`);
    } else throw new Error(`unknown historical review command: ${command}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
    main().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
