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

/**
 * The guard over the Helonic family lexicon: Helonic, Byzarian and Bethuan.
 *
 * Usage: `node utils/lexicons/helonic-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Helonic_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the daughters' reflexes of the shared roots through the
 * page's change tables, the register's coverage of the three lands and the
 * three cultures' beings, the attested names held to the rules as warnings,
 * the retired names swept from the tree, and the local Earth word lists,
 * which refuse a word only for copying a source language `SOURCES` names.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Helonic; that is judged by reading it aloud.
 */

import path from "node:path";
import { runGuard } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Helonic_Lexicon.md";

/**
 * The source languages by tongue: Helonic reads classical Greek, Byzarian a
 * Greek koine with Persian and Turkic eastern roots, and Bethuan a Romance
 * island tongue with an Arabic loan stratum.
 */
export const SOURCES = {
    helonic: ["ancient-greek"],
    byzarian: ["ancient-greek", "persian", "turkish"],
    bethuan: ["spanish", "arabic"],
};

/** Which tongue a note in scope belongs to, by its culture or its folder. */
const TONGUE_OF = {
    helioniteclt: "helonic",
    byzarianclt: "byzarian",
    bethuanclt: "bethuan",
    hellad: "helonic",
    helionis: "helonic",
    byzaria: "byzarian",
    bethua: "bethuan",
};

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Helonic lexicon",
    tagFor(note) {
        const data = note.front?.data ?? {};
        return TONGUE_OF[data.culture] ?? TONGUE_OF[data.packFolder] ?? "helonic";
    },
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
