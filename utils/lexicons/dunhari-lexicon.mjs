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
 * The guard over the Dunhari lexicon.
 *
 * Usage: `node utils/lexicons/dunhari-lexicon.mjs [--wordlists <dir>]...
 * [--missing] [--check <word>...]`
 *
 * Everything it checks is read off `Lore/Dunhari_Lexicon.md` at run time by
 * `lexicon-pages.mjs`, whose contract lists the predicates: the words and
 * their sound rules, the register's coverage of the Dunhara, the Sultanate of
 * Amradad and their people, the attested names held to the rules as warnings,
 * the retired names swept from the tree, and the local Earth word lists,
 * which refuse a word only for copying a source language `SOURCES` names.
 *
 * One rule is Dunhari's own, written here and not in `lexicon-pages.mjs`: the
 * endings `-ôr` and `-ekh` belong to Ātárzādi, so no suffix row, word or
 * name tagged `dunhari` closes on either, however its vowels are marked.
 * Names tagged `ashaian` are exempt, because the Āsháian priesthood titles are
 * Ātárzādi words.
 *
 * A guard proves the page agrees with its own rules, never that a coined
 * word sounds Dunhari; that is judged by reading it aloud.
 */

import fs from "node:fs";
import path from "node:path";
import { fold, lineColumn, readPage, runGuard } from "./lexicon-pages.mjs";

export const LEXICON = "assets/content/Lore/Dunhari_Lexicon.md";

/** The source languages: the Bedouin desert and the Persianate courts. */
export const SOURCES = ["arabic", "persian"];

export const SPEC = {
    lexicon: LEXICON,
    sources: SOURCES,
    label: "Dunhari lexicon",
    titles: true,
    tagFor: () => "dunhari",
};

/** The endings Ātárzādi owns, compared with every mark and length stripped. */
export const REFUSED_ENDINGS = ["-or", "-ekh"];

/**
 * The refusals of the page's rows: a suffix declaring a refused ending, and a
 * word or a `dunhari` register name closing on one.
 *
 * @param {object} page - A page read by `readPage`.
 * @returns {{offset: number, message: string}[]}
 */
export function refusedEndings(page) {
    const out = [];
    const refused = (form) => REFUSED_ENDINGS.find((e) => fold(form).endsWith(e.slice(1)));
    for (const suffix of page.suffixes) {
        if (REFUSED_ENDINGS.includes(fold(suffix.form)))
            out.push({
                offset: suffix.offset,
                message: `the suffix \`${suffix.form}\` is an Ātárzādi ending`,
            });
    }
    for (const word of page.words) {
        if (word.form.endsWith("-")) continue;
        const ending = refused(word.form);
        if (ending)
            out.push({
                offset: word.offset,
                message: `\`${word.form}\` closes on \`${ending}\`, an Ātárzādi ending`,
            });
    }
    for (const name of page.register) {
        if (name.tongue !== "dunhari") continue;
        const ending = refused(name.name);
        if (ending)
            out.push({
                offset: name.offset,
                message: `${name.name} is a dunhari name closing on \`${ending}\`, an Ātárzādi ending`,
            });
    }
    return out;
}

if (import.meta.filename === path.resolve(process.argv[1] ?? "")) {
    runGuard(SPEC);
    if (!process.argv.some((a) => a === "--missing" || a === "--check")) {
        const text = fs.readFileSync(LEXICON, "utf8");
        for (const { offset, message } of refusedEndings(readPage(text))) {
            const { line, column } = lineColumn(text, offset);
            console.error(`${LEXICON}:${line}:${column}: error: ${message}`);
            process.exitCode = 1;
        }
    }
}
