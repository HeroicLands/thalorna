/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Notes select other notes by address, shortcode, frontmatter property or tag,
 * never by file name or folder.
 *
 * A query that reads `file.folder`, `file.path` or `file.name` and a language
 * scope that states `paths` both tie a note's output to where other notes sit
 * on disk, so renaming or moving a file would change what renders. Every note
 * under `assets/content/` is read.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { matchAllOutsideCode } from "@heroiclands/package-build/engine/code-fences";
import {
    EXPRESSION,
    sqlQueriesInMarkdown,
} from "@heroiclands/package-build/engine/markdown-expressions";
import { parse } from "yaml";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/**
 * A query reading a note's place on disk, in any spelling SQL accepts: quoted or
 * bare, any case, with whitespace around the dot. Comments are blanked before
 * the match, so they never sit between the parts.
 */
const FILE_FIELD =
    /(?<![\w$])(?:"file"|file)\s*\.\s*(?:"(folder|path|name)"|(folder|path|name)(?![\w$]))/gi;

/** A fence line, as the content engine reads it: indent, marker, info string. */
const FENCE_LINE = /^([ \t]*)(`{3,}|~{3,})[ \t]*(.*)$/;

/**
 * Blanks SQL comments and single-quoted string contents to spaces, keeping
 * every newline and offset, so a match in the result is executable SQL only.
 *
 * @param {string} sql
 * @returns {string}
 */
function executableSql(sql) {
    let out = "";
    let i = 0;
    const blank = (/** @type {string} */ text) => text.replace(/[^\n]/g, " ");
    while (i < sql.length) {
        const rest = sql.slice(i);
        const token =
            /^--[^\n]*/.exec(rest) ??
            /^\/\*[\s\S]*?(?:\*\/|$)/.exec(rest) ??
            /^'(?:[^']|'')*(?:'|$)/.exec(rest) ??
            /^"(?:[^"]|"")*(?:"|$)/.exec(rest);
        if (!token) {
            out += sql[i];
            i += 1;
        } else {
            // A quoted identifier is kept: it can name a file field.
            out += token[0].startsWith('"') ? token[0] : blank(token[0]);
            i += token[0].length;
        }
    }
    return out;
}

/**
 * Every file field a SQL text reads, as `[offset, field]`.
 *
 * @param {string} sql
 * @returns {Array<[number, string]>}
 */
function fileFields(sql) {
    return [...executableSql(sql).matchAll(FILE_FIELD)].map((m) => [
        m.index,
        `file.${(m[1] ?? m[2]).toLowerCase()}`,
    ]);
}

/**
 * Every query a note's `sql` helper calls run, as `[lineIndex, text]`. The
 * engine's own reader extracts them, so a single- or double-quoted string and a
 * frontmatter path such as `data.query` resolve exactly as they do at build
 * time, and an expression inside code is never read.
 *
 * @param {string} text - The whole note.
 * @param {object} fm - Its parsed frontmatter.
 * @returns {Array<[number, string]>}
 */
function inlineQueries(text, fm) {
    const found = [];
    for (const match of matchAllOutsideCode(text, EXPRESSION)) {
        const line = text.slice(0, match.index).split("\n").length - 1;
        for (const query of sqlQueriesInMarkdown(match[0], fm)) found.push([line, query]);
    }
    return found;
}

/**
 * The body of each `sql` fence in a note's lines, as `[lineIndex, text]`.
 * Prose and other fences are never read.
 *
 * @param {string[]} lines
 * @returns {Array<[number, string]>}
 */
function queries(lines) {
    const found = [];
    for (let i = 0; i < lines.length; i += 1) {
        const opening = FENCE_LINE.exec(lines[i]);
        if (!opening) continue;
        const [, , marker, info] = opening;
        const closer = new RegExp(`^[ \\t]*${marker[0]}{${marker.length},}[ \\t]*$`);
        let close = i + 1;
        while (close < lines.length && !closer.test(lines[close])) close += 1;
        if (/^sql(?=$|[\s{])/i.test(info.trim()))
            found.push([i + 1, lines.slice(i + 1, close).join("\n")]);
        i = close;
    }
    return found;
}

/** @param {string} dir @returns {string[]} */
function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.sort((a, b) =>
        a.name < b.name ? -1
        : a.name > b.name ? 1
        : 0,
    );
    return entries.flatMap((entry) => {
        const full = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });
}

/**
 * Every place a note under `<root>/assets/content` selects by file or folder,
 * as `path:line: message`.
 *
 * @param {string} root - The repository root.
 * @returns {string[]}
 */
function fileSelectors(root) {
    const content = path.join(root, "assets", "content");
    const findings = [];
    for (const file of walk(content).filter((f) => f.endsWith(".md"))) {
        const rel = path.relative(root, file);
        const text = fs.readFileSync(file, "utf8");
        // A note opens on its frontmatter; a README beside the notes is not one.
        const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
        if (!frontmatter) continue;
        const lines = text.split(/\r?\n/);
        let fm;
        try {
            fm = parse(frontmatter[1]) ?? {};
        } catch {
            // Unparseable frontmatter is the frontmatter lint's finding.
            continue;
        }
        for (const [start, sql] of queries(lines))
            for (const [offset, field] of fileFields(sql)) {
                const line = start + sql.slice(0, offset).split("\n").length;
                findings.push(`${rel}:${line}: selects by \`${field}\``);
            }
        for (const [line, sql] of inlineQueries(text.replace(/\r\n/g, "\n"), fm))
            for (const [, field] of fileFields(sql))
                findings.push(`${rel}:${line + 1}: selects by \`${field}\``);
        const data = fm?.data;
        if (data?.scope && typeof data.scope === "object" && "paths" in data.scope) {
            const scope = lines.findIndex((l) => /^\s+scope:/.test(l));
            const line = lines.findIndex((l, i) => i > scope && /^\s+paths:/.test(l));
            findings.push(`${rel}:${line + 1}: scopes by \`scope.paths\``);
        }
    }
    return findings;
}

test("no note selects other notes by file name or folder", () => {
    const findings = fileSelectors(REPO_ROOT);
    assert.deepEqual(findings, [], `${findings.length} file selectors:\n${findings.join("\n")}`);
});

test("the guard fails on a planted file selector and a planted path scope", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "address-only-queries-"));
    try {
        const write = (/** @type {string} */ rel, /** @type {string} */ text) => {
            fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
            fs.writeFileSync(path.join(root, rel), text);
        };
        write(
            "assets/content/Guides/Guide.md",
            "---\nshortcode: guide\ntype: doc\n---\n\n```sql\nSELECT name.full FROM notes\n" +
                "WHERE file.folder = 'Regions/Hilen'\n  AND file.path <> 'x'\n" +
                "  AND file.name <> 'y'\n```\n",
        );
        write(
            "assets/content/Skills/Tongue.md",
            "---\nshortcode: tongue\ntype: skill\ndata:\n  scope:\n    paths:\n" +
                "      - Regions/Hilen/\n---\n\nBody.\n",
        );
        write(
            "assets/content/Skills/Clean.md",
            "---\nshortcode: clean\ntype: skill\ndata:\n  scope:\n    folders: [hilen]\n---\n\n" +
                "The file name and the folder do not matter.\n",
        );
        assert.deepEqual(fileSelectors(root), [
            "assets/content/Guides/Guide.md:8: selects by `file.folder`",
            "assets/content/Guides/Guide.md:9: selects by `file.path`",
            "assets/content/Guides/Guide.md:10: selects by `file.name`",
            "assets/content/Skills/Tongue.md:6: scopes by `scope.paths`",
        ]);
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});

/**
 * Plants notes under a temporary root and returns the guard's findings.
 *
 * @param {Record<string, string>} notes - Note text by path under the root.
 * @returns {string[]}
 */
function plant(notes) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "address-only-queries-"));
    try {
        for (const [rel, text] of Object.entries(notes)) {
            fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
            fs.writeFileSync(path.join(root, rel), text);
        }
        return fileSelectors(root);
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
}

test("the guard reads a CRLF note's queries and path scope", () => {
    const findings = plant({
        "assets/content/Guides/Crlf.md":
            "---\r\nshortcode: crlf\r\ntype: skill\r\ndata:\r\n  scope:\r\n    paths:\r\n" +
            "      - Regions/Hilen/\r\n---\r\n\r\n```sql\r\nSELECT file.folder FROM notes\r\n```\r\n",
    });
    assert.deepEqual(findings, [
        "assets/content/Guides/Crlf.md:11: selects by `file.folder`",
        "assets/content/Guides/Crlf.md:6: scopes by `scope.paths`",
    ]);
});

test("the guard catches every spelling of a file identifier in executable SQL", () => {
    const sql = (/** @type {string} */ body) =>
        `---\nshortcode: x\ntype: doc\n---\n\n\`\`\`sql {layout=table}\n${body}\n\`\`\`\n`;
    const spellings = [
        'SELECT "file"."folder" FROM notes',
        "SELECT FILE.FOLDER FROM notes",
        "SELECT file . folder FROM notes",
        "SELECT file /* c */ . /* c */ path FROM notes",
        "SELECT file -- c\n  . name FROM notes",
        'SELECT "FILE"."Path" FROM notes',
    ];
    for (const spelling of spellings)
        assert.equal(
            plant({ "assets/content/A/X.md": sql(spelling) }).length,
            1,
            `missed: ${spelling}`,
        );
    const expression = plant({
        "assets/content/A/E.md":
            "---\nshortcode: e\ntype: doc\n---\n\nSee {{sql \"SELECT count(*) FROM notes WHERE file.folder = 'a'\"}}.\n",
    });
    assert.deepEqual(expression, ["assets/content/A/E.md:6: selects by `file.folder`"]);
});

test("the guard ignores prose, other fences, comments, strings and other tables", () => {
    assert.deepEqual(
        plant({
            "assets/content/A/Clean.md":
                "---\nshortcode: c\ntype: doc\n---\n\nThe file.folder column is not used.\n\n" +
                "```text\nSELECT file.folder\n```\n\n" +
                "```sql\nSELECT profile.folder, myfile.path, file.folders\n" +
                "FROM notes -- file.folder\nWHERE name = 'file.name' /* file.path */\n```\n",
        }),
        [],
    );
});

test("the guard reads each inline query as the engine extracts it", () => {
    const findings = plant({
        "assets/content/A/Single.md":
            "---\nshortcode: single\ntype: doc\n---\n\nSee {{sql 'SELECT file.folder FROM notes'}}.\n",
        "assets/content/A/Front.md":
            "---\nshortcode: front\ntype: doc\ndata:\n  query: SELECT file.path FROM notes\n---\n\n" +
            "Counted {{sql data.query}} times.\n",
        "assets/content/A/Nested.md":
            "---\nshortcode: nested\ntype: doc\n---\n\n" +
            "Any: {{or (sql \"SELECT count(*) FROM notes WHERE file.name = 'x'\") 0}}.\n",
    });
    assert.deepEqual(findings, [
        "assets/content/A/Front.md:8: selects by `file.path`",
        "assets/content/A/Nested.md:6: selects by `file.name`",
        "assets/content/A/Single.md:6: selects by `file.folder`",
    ]);
});

test("the guard ignores an inline query's literals and comments and inline code", () => {
    assert.deepEqual(
        plant({
            "assets/content/A/Clean.md":
                "---\nshortcode: c\ntype: doc\n---\n\n" +
                "Literal {{sql \"SELECT 'file.folder' AS label\"}}.\n\n" +
                'Comment {{sql "SELECT 1 /* file.path */"}}.\n\n' +
                'Example: `{{sql "SELECT file.folder FROM notes"}}` is refused.\n',
        }),
        [],
    );
});
