/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of this license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const CONTENT_DIR = "assets/content";

// `subType` states whether a being is a character, an npc or a creature, so a
// tag repeating it is a second answer to a settled question and can disagree
// with the first.
const CLASSIFICATION_TAGS = new Set(["character", "creature"]);

function markdownFiles(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(directory, entry.name);
        return (
            entry.isDirectory() ? markdownFiles(fullPath)
            : entry.isFile() && entry.name.endsWith(".md") ? [fullPath]
            : []
        );
    });
}

let errors = 0;

for (const file of markdownFiles(CONTENT_DIR)) {
    const source = fs.readFileSync(file, "utf8");
    const match = source.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    if (!match) continue;

    let frontmatter;
    try {
        frontmatter = YAML.parse(match[1]);
    } catch {
        continue;
    }
    if (frontmatter?.type !== "being") continue;

    const offending = (frontmatter.tags ?? []).filter((tag) => CLASSIFICATION_TAGS.has(tag));
    if (offending.length === 0) continue;

    const index = source.indexOf(match[1]);
    const line = source.slice(0, index + match[1].indexOf("tags:")).split("\n").length;
    console.error(
        `${file}:${line}: error: tags name the being's classification (${offending.join(", ")}); ` +
            `subType already states it`,
    );
    errors += 1;
}

if (errors > 0) process.exitCode = 1;
