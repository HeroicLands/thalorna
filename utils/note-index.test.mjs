/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The note index reads frontmatter as the content engine does: YAML comments,
 * quoting, indentation, flow style and CRLF line ends change neither a note's
 * address nor whether a property selection finds it.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { addressOfText, frontmatterOf, noteFilesWhere, notePath } from "./note-index.mjs";

/** A path under the planted content root. */
const at = (rel) => ["assets", "content", rel].join("/");

const NOTES = {
    "a/Commented.md":
        "---\ntype: skill # a language note\nsubType: language # its tongue\n" +
        'shortcode: "cmntlng" # quoted\n---\n\nBody.\n',
    "b/Crlf.md":
        "---\r\ntype: skill\r\nsubType: language\r\nshortcode: crlflng\r\n---\r\n\r\nBody.\r\n",
    "c/Four.md":
        "---\ntype: doc\nshortcode: fourdoc\ndata:\n    mappings: {a: b}\n    rules: [x]\n---\n\nBody.\n",
    "d/Flow.md":
        "---\ntype: doc\nshortcode: flowdoc\ndata: {mappings: {a: b}, rules: [x]}\n---\n\nBody.\n",
    "e/Plain.md": "---\ntype: doc\nshortcode: plaindoc\ndata:\n  title: none\n---\n\nBody.\n",
    "f/Broken.md": "---\ntype: doc\nshortcode: [unclosed\n---\n\nBody.\n",
};

function withTree(run) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "note-index-"));
    try {
        for (const [rel, text] of Object.entries(NOTES)) {
            const file = path.join(root, "assets", "content", rel);
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, text);
        }
        run(root);
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
}

test("comments and quoting do not change an address or a selection", () =>
    withTree((root) => {
        assert.equal(notePath("skill-cmntlng", root), at("a/Commented.md"));
        assert.deepEqual(
            noteFilesWhere(({ subType }) => subType === "language", root),
            [at("a/Commented.md"), at("b/Crlf.md")],
        );
    }));

test("a CRLF note is indexed with its parsed frontmatter", () =>
    withTree((root) => {
        assert.equal(notePath("skill-crlflng", root), at("b/Crlf.md"));
        assert.equal(frontmatterOf(at("b/Crlf.md"), root).subType, "language");
    }));

test("a data property selects notes whatever their YAML layout", () =>
    withTree((root) => {
        assert.deepEqual(
            noteFilesWhere(
                ({ type, data }) => type === "doc" && data?.mappings && data?.rules,
                root,
            ),
            [at("c/Four.md"), at("d/Flow.md")],
        );
    }));

test("unparseable frontmatter is not indexed", () =>
    withTree((root) => {
        assert.throws(() => notePath("doc-[unclosed", root));
        assert.equal(addressOfText(NOTES["f/Broken.md"]), undefined);
        assert.equal(addressOfText(NOTES["a/Commented.md"]), "skill-cmntlng");
    }));
