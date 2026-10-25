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

/** Every configured language owns its literal roman character inventory. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const CONFIG = "package-build.config.yaml";
const LANGUAGES = "assets/content/Skills/Languages";

/** The configuration selects the notes; an oral register needs no invented alphabet. */
export function scan() {
    const config = YAML.parse(fs.readFileSync(CONFIG, "utf8"));
    const notes = new Map();
    for (const name of fs.readdirSync(LANGUAGES).filter((name) => name.endsWith(".md"))) {
        const file = path.join(LANGUAGES, name);
        const source = fs.readFileSync(file, "utf8");
        const frontmatter = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(source);
        if (!frontmatter) continue;
        const fm = YAML.parse(frontmatter[1]);
        if (fm.type === "skill" && fm.subType === "language")
            notes.set(`skill-${fm.shortcode}`, { file, fm });
    }
    const findings = [];
    for (const { file, fm } of notes.values())
        if (typeof fm.data?.roman !== "string")
            findings.push(
                `${file}: error: every language skill declares data.roman; an empty string explicitly declares no written words`,
            );
    for (const [language, declaration] of Object.entries(config.languages ?? {})) {
        const note = notes.get(declaration.note?.replace(/^thalorna-note-/, ""));
        if (!note) {
            findings.push(`${CONFIG}: error: ${language} names no language skill note`);
            continue;
        }
    }
    return findings;
}

export function main() {
    const findings = scan();
    for (const finding of findings) console.error(finding);
    console.log(`roman-coverage: ${findings.length} finding${findings.length === 1 ? "" : "s"}`);
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]))
    process.exitCode = main();
