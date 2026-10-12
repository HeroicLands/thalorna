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
 * The guard over the Grukar lexicon.
 *
 * Usage: `node utils/lexicons/grukar-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Grukar_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the register's coverage of the Grukar notes, the
 * attested names held to the rules as warnings, the retired names swept from
 * the tree, and the local Earth word lists.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Grukar; that is judged by reading it aloud.
 */

import path from "node:path";
import { runGuard } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Grukar_Lexicon.md";

export const SPEC = {
    lexicon: LEXICON,
    label: "Grukar lexicon",
    tagFor: () => "grukar",
};

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) runGuard(SPEC);
