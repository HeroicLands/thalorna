/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import test from "node:test";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";
import { openNotesDatabase } from "@heroiclands/package-build/engine/sql-tables";
import { pieceGlosses } from "@heroiclands/package-build/engine/word-rows";
import { withGuidePairSpellings } from "./guide-pair-preservation.mjs";
import { notePath } from "./note-index.mjs";

// The source before #784 supplies the names, collisions and references. Keep
// every ordinary word and name sense through that migration.
const baseline = "fa9ebd561417595fce34ccc29fb00c525641b1c4";
const read = (raw) => {
    const { yaml, body } = splitFrontmatter(raw);
    return { fm: YAML.parse(yaml), body };
};
// Added fields and later array entries do not erase authored information.
function preserves(expected, actual) {
    if (Array.isArray(expected)) {
        if (!Array.isArray(actual)) return false;
        let next = 0;
        return expected.every((item) => {
            const found = actual.findIndex(
                (candidate, index) => index >= next && preserves(item, candidate),
            );
            if (found < 0) return false;
            next = found + 1;
            return true;
        });
    }
    if (expected && typeof expected === "object")
        return (
            actual &&
            typeof actual === "object" &&
            !Array.isArray(actual) &&
            Object.entries(expected).every(
                ([key, value]) => Object.hasOwn(actual, key) && preserves(value, actual[key]),
            )
        );
    return Object.is(expected, actual);
}
// Dictionary presentation fields may gain usage, pronunciation or other
// metadata. The migration protects the ordinary entries and their senses.
const dictionaryMeanings = (fm) =>
    dictionaryAndTermRows([{ ...fm, package: "thalorna" }]).dictionary.map(
        ({ language, name, class: wordClass, senses }) => ({
            language,
            name,
            class: wordClass,
            senses,
        }),
    );
// Preserve the migrated inventory without closing either language to growth.
function assertRowsRetained(actual, expected, key, message) {
    for (const row of expected) {
        const matches = actual.filter((candidate) => key(candidate) === key(row));
        assert.equal(matches.length, 1, `${message}: ${key(row)} must remain unique`);
        assert(
            preserves(row, matches[0]),
            `${message}: ${key(row)} lost or changed an expected field`,
        );
    }
}
for (const address of ["skill-sowideslng", "skill-tellumilng"]) {
    const file = notePath(address);
    const source = execFileSync(
        "git",
        [
            "grep",
            "-l",
            "--all-match",
            "-e",
            `^shortcode: ${address.slice(6)}$`,
            "-e",
            "^type: skill$",
            baseline,
            "--",
            "assets/content",
        ],
        { encoding: "utf8" },
    ).trim();
    const original = read(execFileSync("git", ["show", source], { encoding: "utf8" }));
    const before = {
        ...original,
        fm: withGuidePairSpellings({ file, fm: original.fm, raw: "" }).fm,
    };
    const after = read(fs.readFileSync(file, "utf8"));
    const oldData = before.fm.data;
    const data = after.fm.data;
    const names = oldData.words.filter(
        (word) => word.class === "name" && word.form !== word.form.toLowerCase(),
    );
    const forms = new Set(
        oldData.words
            .filter((word) => word.form !== word.form.toLowerCase())
            .map((word) => word.form),
    );
    const collisions = names.filter((word) =>
        oldData.words.some((other) => other.form === word.form.toLowerCase()),
    );
    const removed = new Set(collisions.map((word) => word.form));
    const lowerBuilt = (row) => ({
        ...row,
        ...(row.built && {
            built: row.built.map((piece) => (forms.has(piece) ? piece.toLowerCase() : piece)),
        }),
    });
    const oldMeaning = pieceGlosses(oldData);
    const meaning = pieceGlosses(data);
    const aliases = oldData.register.filter((row) =>
        row.built?.some((piece) => removed.has(piece)),
    );

    test(`${address}: caseless name words and references preserve the source inventory`, () => {
        assert.deepEqual(
            data.words.filter(
                (word) => word.class === "name" && word.form !== word.form.toLowerCase(),
            ),
            [],
        );
        assert.equal(
            new Set(data.words.map((word) => word.form)).size,
            data.words.length,
            "duplicate word forms",
        );
        const expected = oldData.words
            .filter((word) => !removed.has(word.form))
            .map((word) =>
                lowerBuilt({
                    ...word,
                    form: forms.has(word.form) ? word.form.toLowerCase() : word.form,
                }),
            );
        assertRowsRetained(
            data.words,
            expected,
            (word) => word.form,
            "only colliding names leave words; Delkoshekh changes case and other ordinary entries stay exact",
        );
        for (const name of removed)
            assert(
                !data.words.some(
                    (word) =>
                        word.class === "name" && word.form.toLowerCase() === name.toLowerCase(),
                ),
                `${name}: migrated homograph must remain in the register`,
            );
        for (const row of oldData.register) {
            const current = data.register.find((item) => item.name === row.name);
            assert(current, `missing register identity ${row.name}`);
            assert.deepEqual(current.built, lowerBuilt(row).built, `${row.name}: built references`);
            for (const piece of row.built ?? []) {
                if (!forms.has(piece)) continue;
                assert(meaning(piece.toLowerCase()), `${row.name}: unresolved ${piece}`);
                if (!removed.has(piece))
                    assert.equal(meaning(piece.toLowerCase()), oldMeaning(piece));
            }
        }
    });

    test(`${address}: register names and aliases retain their contextual senses`, () => {
        assert.equal(
            new Set(data.register.map((row) => row.name)).size,
            data.register.length,
            "duplicate register identities",
        );
        const expected = oldData.register.map((row) => {
            const next = lowerBuilt(row);
            const word = collisions.find((item) => item.form === row.name);
            if (word) next.gloss = word.gloss;
            if (aliases.includes(row)) next.gloss = row.built.map(oldMeaning).join(" + ");
            return next;
        });
        for (const word of collisions) {
            if (!expected.some((row) => row.name === word.form))
                expected.push({
                    name: word.form,
                    tongue: address === "skill-sowideslng" ? "sowides" : "tellumi",
                    built: word.built,
                    gloss: word.gloss,
                });
            const row = data.register.find((item) => item.name === word.form);
            assert(row, `${word.form}: missing register row`);
            assert(row.gloss.includes(word.gloss), `${word.form}: lost original name sense`);
            assert.equal(
                meaning(word.form.toLowerCase()),
                oldMeaning(word.form.toLowerCase()),
                `${word.form}: ordinary homograph meaning`,
            );
        }
        // The owner's answer also explicitly retains this naming sense.
        const qiimod = expected.find((row) => row.name === "Qiimod");
        if (qiimod) qiimod.gloss += "; the silent one";
        assertRowsRetained(
            data.register,
            expected,
            (row) => row.name,
            "migrated name and alias glosses and built references remain intact",
        );
        for (const row of aliases) {
            const current = data.register.find((item) => item.name === row.name);
            assert.equal(
                current.gloss,
                row.built.map(oldMeaning).join(" + "),
                `${row.name}: contextual alias meaning`,
            );
        }
    });

    test(`${address}: the published register table displays every migrated sense`, async () => {
        const query = [...after.body.matchAll(/```sql\n([\s\S]*?)```/gu)]
            .map((match) => match[1])
            .find((sql) => sql.includes("FROM register WHERE"));
        assert(query, "the language's actual register query");
        // Use both real languages so optional relation columns have their
        // corpus types. Index records carry canonical scope Addresses.
        const records = ["skill-sowideslng", "skill-tellumilng"].map((item) => {
            const record = {
                ...read(fs.readFileSync(notePath(item), "utf8")).fm,
                package: "thalorna",
            };
            record.data.scope.addresses = record.data.scope.addresses.map(
                (ref) => `thalorna-note-${ref}`,
            );
            return record;
        });
        const db = await openNotesDatabase(records, { testMemoryLimit: true });
        try {
            const result = await db.query(query);
            assert(result.columnNames.includes("Meaning"));
            assert.equal(result.rows.length, data.register.length);
            for (const word of collisions) {
                const row = result.rows.find((item) => item.Name === word.form);
                assert(row?.Meaning?.includes(word.gloss), `${word.form}: published name sense`);
                if (word.form === "Qiimod") assert(row.Meaning.includes("the silent one"));
            }
            for (const alias of aliases) {
                const row = result.rows.find((item) => item.Name === alias.name);
                assert.equal(
                    row?.Meaning,
                    alias.built.map(oldMeaning).join(" + "),
                    `${alias.name}: published contextual sense`,
                );
            }
        } finally {
            await db.close();
        }
    });

    test(`${address}: ordinary dictionary entries retain their classes and meanings`, () => {
        const expected = structuredClone(before.fm);
        // Delkoshekh is an ordinary noun: only its casing changes.
        const borrowed = expected.data.words.find((word) => word.form === "Delkoshekh");
        if (borrowed) borrowed.form = "delkoshekh";
        const originalDictionary = dictionaryMeanings(expected);
        assert(originalDictionary.length > 0, "exercise the actual dictionary projection");
        assertRowsRetained(
            dictionaryMeanings(after.fm),
            originalDictionary,
            (row) => `${row.language}:${row.name}`,
            "ordinary dictionary meanings",
        );
    });
}

for (const address of ["skill-sowideslng", "skill-tellumilng"]) {
    test(`${address}: preservation permits growth and rejects lost or altered meanings`, () => {
        const note = read(fs.readFileSync(notePath(address), "utf8"));
        const fm = note.fm;
        const data = fm.data;
        const wordKey = (word) => word.form;
        const registerKey = (row) => row.name;
        const dictionaryKey = (row) => `${row.language}:${row.name}`;
        const extended = structuredClone(fm);
        extended.data.words.find((word) => !Object.hasOwn(word, "usage")).usage =
            "A later usage note.";
        extended.data.register.find((row) => !Object.hasOwn(row, "why")).why =
            "A later note about this name.";
        const grownNote = read(
            `---\n${YAML.stringify(extended)}---\n${note.body}\nAdditional language commentary.\n`,
        );
        assert(grownNote.body.endsWith("Additional language commentary.\n"));
        const grown = grownNote.fm;
        // Test-only additions exercise the accepted data shape, not new lore.
        grown.data.words.push({ form: "proofword", class: "n", gloss: "a test addition" });
        grown.data.register.push({ name: "Proof Name", tongue: "gloss", gloss: "a test addition" });
        assert.doesNotThrow(() => {
            assertRowsRetained(grown.data.words, data.words, wordKey, "word growth");
            assertRowsRetained(grown.data.register, data.register, registerKey, "register growth");
            assertRowsRetained(
                dictionaryMeanings(grown),
                dictionaryMeanings(fm),
                dictionaryKey,
                "dictionary growth",
            );
        });
        const contextual = data.register.filter(
            (row) =>
                row.gloss &&
                row.built?.some((piece) =>
                    data.words.some((word) => word.class !== "name" && word.form === piece),
                ),
        );
        assert(contextual.length > 0);
        for (const row of contextual) {
            const missing = data.register.filter((item) => item.name !== row.name);
            const altered = data.register.map((item) =>
                item.name === row.name ? { ...item, gloss: "a different sense" } : item,
            );
            assert.throws(
                () => assertRowsRetained(missing, [row], registerKey, "missing name sense"),
                assert.AssertionError,
            );
            assert.throws(
                () => assertRowsRetained(altered, [row], registerKey, "altered name sense"),
                assert.AssertionError,
            );
            for (const piece of row.built) {
                const word = data.words.find(
                    (item) => item.form === piece && item.class !== "name",
                );
                if (!word) continue;
                const changed = data.words.map((item) =>
                    item === word ? { ...item, gloss: "a different sense" } : item,
                );
                assert.throws(
                    () => assertRowsRetained(changed, [word], wordKey, "ordinary homograph sense"),
                    assert.AssertionError,
                );
            }
        }
    });
}
