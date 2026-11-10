/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { CONTENT_DIR, forgetNoteIndex, noteFiles, notePath } from "./note-index.mjs";

const UTILS = path.dirname(fileURLToPath(import.meta.url));

/** Notes the guards cover by address, selection or folder membership. */
const RENAMED = [
    "doc-prnncthlrn",
    "doc-trnnlgsrfrnc",
    "doc-coreconcepts",
    "skill-aelwthlng",
    "skill-vylarilng",
    "skill-kiichek",
    "skill-nordmalng",
    "affiliation-kankul",
    "affiliation-kelwanuk",
    "affiliation-chumishlan",
    "lore-nartumrefuse",
    "lore-heladwells",
    "lore-garauu",
    "folder-vylaria",
];

/** Guards that read the tree from the working directory. */
const SCRIPTS = ["chronology.mjs", "observer-shape.mjs", "roman-coverage.mjs", "verse.mjs"];
const TESTS = [
    "kiichek-zone-governance.test.mjs",
    "kiichchik-apostrophe.test.mjs",
    "retired-names.test.mjs",
    "roman-inventories.test.mjs",
];

/** Runs node with the arguments in a directory, collecting its status and output. */
function run(name, args, cwd) {
    return new Promise((resolve) => {
        const child = spawn(process.execPath, args, { cwd });
        let output = "";
        child.stdout.on("data", (chunk) => (output += chunk));
        child.stderr.on("data", (chunk) => (output += chunk));
        child.on("close", (status) => resolve({ name, status, output }));
    });
}

test("renaming and moving notes changes no address and no guard", async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), `note-rename-${process.pid}-`));
    try {
        fs.cpSync(CONTENT_DIR, path.join(root, CONTENT_DIR), { recursive: true });
        fs.copyFileSync("package-build.config.yaml", path.join(root, "package-build.config.yaml"));
        const before = new Map(noteFiles().map((file) => [file, fs.readFileSync(file, "utf8")]));

        const moved = new Map();
        RENAMED.forEach((address, index) => {
            const from = notePath(address, root);
            const to = `${CONTENT_DIR}/Moved_${index % 3}/Deeper/Renamed_${index}.md`;
            fs.mkdirSync(path.dirname(path.join(root, to)), { recursive: true });
            fs.renameSync(path.join(root, from), path.join(root, to));
            moved.set(address, { from, to });
        });

        forgetNoteIndex(root);
        for (const [address, { from, to }] of moved) {
            assert.equal(notePath(address, root), to, address);
            assert.equal(fs.readFileSync(path.join(root, to), "utf8"), before.get(from), address);
        }
        const after = noteFiles(root).map((file) => fs.readFileSync(path.join(root, file), "utf8"));
        assert.deepEqual(after.sort(), [...before.values()].sort());

        // Each guard loads the whole content index, so they run one at a time to keep
        // the peak to a single index inside the job container's memory limit.
        const runs = [
            ...SCRIPTS.map((name) => [name, [path.join(UTILS, name)]]),
            ...TESTS.map((name) => [name, ["--test", path.join(UTILS, name)]]),
        ];
        for (const [name, args] of runs) {
            const { status, output } = await run(name, args, root);
            assert.equal(status, 0, `${name}:\n${output}`);
        }
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});
