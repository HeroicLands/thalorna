/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Ki'ich'chik text writes its apostrophe as ASCII U+0027.
 *
 * The files read are the notes of the Ki'ich'chik continent: those in its
 * folders, those of the places within it, and the language note.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { folderChain, folderParents, frontmatterOf, noteFiles, notePath } from "./note-index.mjs";

/** The folder note whose descendants are the continent's notes. */
const CONTINENT_FOLDER = "kiichchik";
/** The place note of the continent; places within it are the continent's. */
const CONTINENT_PLACE = "kiichchik";
/** Notes of the continent that sit in neither a continent folder nor a continent place. */
const ALSO = ["skill-kiichek", "affiliation-chumishlan", "affiliation-redstncmpct"];

/** The files of every note belonging to the Ki'ich'chik continent. */
function continentFiles() {
    const parents = folderParents();
    const notes = noteFiles().map((file) => ({ file, fm: frontmatterOf(file) }));
    const places = new Map(
        notes.filter(({ fm }) => fm.type === "place").map(({ fm }) => [fm.shortcode, fm]),
    );
    const within = (place, seen = new Set()) => {
        if (!place || seen.has(place.shortcode)) return false;
        if (place.shortcode === CONTINENT_PLACE) return true;
        seen.add(place.shortcode);
        return (place.data?.parents ?? []).some((parent) => within(places.get(parent), seen));
    };
    const chosen = new Set(ALSO.map((address) => notePath(address)));
    for (const { file, fm } of notes)
        if (
            folderChain(fm.data?.packFolder, parents).has(CONTINENT_FOLDER) ||
            (fm.type === "place" && within(fm))
        )
            chosen.add(file);
    return [...chosen];
}

test("Ki'ich'chik notes carry no typographic apostrophe", () => {
    const files = continentFiles();
    assert.ok(files.length > 1, "no Ki'ich'chik notes found");
    const findings = [];
    for (const file of files) {
        fs.readFileSync(file, "utf8")
            .split("\n")
            .forEach((line, index) => {
                if (line.includes("’")) findings.push(`${file}:${index + 1}`);
            });
    }
    assert.deepEqual(findings, [], `U+2019 found:\n${findings.join("\n")}`);
});
