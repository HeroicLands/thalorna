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
const NPC_PATHS = new Set([
    "Regions/Xerathia/Northern_Fertile_Region/Okharis/Takoro_Zanethar.md",
    "Regions/Ankaris/Nordlands/Malagna/King_Hakon_III.md",
    "Regions/Ankaris/Aureldia/Provenzia/King_Tredavar_III.md",
    "Regions/Ankaris/Tanvur/Threats/Bathur_Hurtzhuk.md",
    "Regions/Ankaris/Tanvur/Threats/Teitjek_Vengyurt.md",
]);

function expectedSubType(relativePath) {
    if (
        NPC_PATHS.has(relativePath) ||
        relativePath.startsWith("Characters/Folk/") ||
        relativePath.startsWith("Characters/Occupations/")
    ) {
        return "npc";
    }
    if (relativePath.startsWith("Bestiary/")) return "creature";
    return "character";
}

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
for (const npcPath of NPC_PATHS) {
    if (!fs.existsSync(path.join(CONTENT_DIR, npcPath))) {
        console.error(`${path.join(CONTENT_DIR, npcPath)}:1: error: expected NPC note is missing`);
        errors += 1;
    }
}

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

    const relativePath = path.relative(CONTENT_DIR, file).split(path.sep).join("/");
    const expected = expectedSubType(relativePath);
    const report = (message) => {
        const line = source.slice(0, source.indexOf(match[1])).split("\n").length;
        console.error(`${file}:${line}: error: ${message}`);
        errors += 1;
    };

    if (frontmatter.subType !== expected) {
        report(`expected subType ${expected}`);
    }
    if (frontmatter.tags?.some((tag) => ["character", "creature"].includes(tag))) {
        report("remove character and creature classification tags");
    }
}

if (errors > 0) process.exitCode = 1;
