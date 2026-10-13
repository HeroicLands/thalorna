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
 * The guard over the Hvarn lexicon.
 *
 * Usage: `node utils/lexicons/hvarn-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Hvarn_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the register's coverage of the Hvarn, their offices and the places
 * they hold, the attested names held to the rules as warnings,
 * the retired names swept from the tree, and the local Earth word lists,
 * which refuse a word only for copying a source language `SOURCES` names.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Hvarn; that is judged by reading it aloud.
 */

import path from "node:path";
import { runGuard } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Hvarn_Lexicon.md";

/** No source language: Hvarn is modelled on no Earth tongue. */
export const SOURCES = [];

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Hvarn lexicon",
    titles: true,
    tagFor: () => "hvarn",
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
