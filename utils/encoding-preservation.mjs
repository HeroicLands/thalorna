/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Semantic preservation across the approved encoding migration, not new snapshots. */
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import YAML from "yaml";
import { splitFrontmatter } from "@heroiclands/package-build/engine/diagnostics";
import { pieceGlosses } from "@heroiclands/package-build/engine/word-rows";
import { dictionaryAndTermRows } from "@heroiclands/package-build/engine/dictionary-rows";

// The utility CI checkout explicitly fetches full history for pinned git-show
// baselines. This is the last published-dependency commit before the migration;
// the tag baseline/encoding-migration keeps it reachable.
export const ENCODING_BASELINE = "e02f760d9325f1c1398ceeb9622d635224f60400";
export const contentHash = (value) =>
    createHash("sha256")
        .update(typeof value === "string" ? value : JSON.stringify(value))
        .digest("hex");
const historical = new Map();
export function beforeEncodingMigration(file, revision = ENCODING_BASELINE) {
    const key = `${revision}:${file}`;
    if (!historical.has(key)) {
        const raw = execFileSync("git", ["show", key], { encoding: "utf8", maxBuffer: 16000000 });
        historical.set(key, { file, raw, fm: YAML.parse(splitFrontmatter(raw).yaml) });
    }
    return structuredClone(historical.get(key));
}
const transfers = JSON.parse(
    fs.readFileSync(new URL("./fixtures/encoding-role-transfers.json", import.meta.url), "utf8"),
);
const caseless = new Set(["Atarzadi", "Dunhari", "Khelathi", "Nordmal", "Nyaluban"]);
const lower = (text) => text.toLowerCase().normalize("NFC");
export const caselessCitationKey = (word) => `${lower(word.form)}\u0000${word.class ?? ""}`;
const codeAddress = (text) => text.replace(/^thalorna-note-doc-|^doc-/u, "");
const lowerStrings = (value) =>
    typeof value === "string" ? lower(value)
    : Array.isArray(value) ? value.map(lowerStrings)
    : value && typeof value === "object" ?
        Object.fromEntries(
            Object.entries(value).map(([key, item]) => [
                key,
                ["pattern", "metadata", "source"].includes(key) ? item : lowerStrings(item),
            ]),
        )
    :   value;

/** Case changes apply only to the orthographic fields the migration changed. */
function canonical(value, file, path = []) {
    const fold = caseless.has(file.split("/").at(-1).replace(/\.md$/u, ""));
    if (Array.isArray(value)) return value.map((item) => canonical(item, file, path));
    if (!value || typeof value !== "object") return value;
    if (path[0] === "data" && (path.includes("source") || path.includes("metadata")))
        return structuredClone(value);
    const out = {};
    for (const [key, item] of Object.entries(value)) {
        if (path.join(".") === "data" && ["writtenIn", "roman"].includes(key)) continue;
        const scope = path[1];
        if (scope === "names" && [...path, key].includes("metadata")) {
            out[key] = structuredClone(item);
            continue;
        }
        if (key === "native" && Array.isArray(item)) {
            out.native = item.map((entry) => {
                const { map, enc, text, ...rest } = entry;
                // All old native.map entries in these six language baselines
                // are Khelathi's existing authoritative Zethu writings.
                if (map !== undefined) assert.equal(map, "zethu");
                return {
                    ...rest,
                    text:
                        typeof text === "string" ?
                            text.replace(/[\u{E0120}-\u{E01EF}]/gu, "")
                        :   text,
                    ...(enc !== undefined || map !== undefined ?
                        { enc: codeAddress(enc ?? "khelzethuenc") }
                    :   {}),
                };
            });
            continue;
        }
        const orthography =
            path[0] === "data" &&
            ["words", "elements", "register", "affixes", "names", "grammar", "naming"].includes(
                scope,
            ) &&
            (["form", "variants", "built", "examples"].includes(key) ||
                (key === "name" && scope === "register" && value.tongue !== "translation") ||
                (["ending", "becomes"].includes(key) && scope === "grammar") ||
                (scope === "names" && ![...path, key].includes("pattern")));
        out[key] = fold && orthography ? lowerStrings(item) : canonical(item, file, [...path, key]);
    }
    return out;
}
const stable = (value) =>
    JSON.stringify(value, (_key, item) =>
        item && typeof item === "object" && !Array.isArray(item) ?
            Object.fromEntries(
                Object.keys(item)
                    .sort()
                    .map((key) => [key, item[key]]),
            )
        :   item,
    );

/** Array multiplicities matter; later authored additions remain permitted. */
function contains(actual, expected, label) {
    if (Array.isArray(expected)) {
        assert(Array.isArray(actual), label);
        const remaining = new Map();
        for (const entry of actual) {
            const key = stable(entry);
            remaining.set(key, (remaining.get(key) ?? 0) + 1);
        }
        for (const entry of expected) {
            const key = stable(entry),
                count = remaining.get(key) ?? 0;
            assert(count > 0, `${label}: lost or changed ${key}`);
            remaining.set(key, count - 1);
        }
    } else if (expected && typeof expected === "object") {
        assert(actual && typeof actual === "object", label);
        for (const [key, item] of Object.entries(expected))
            contains(actual[key], item, `${label}.${key}`);
    } else assert.deepEqual(actual, expected, label);
}
function removeOne(entries, entry, label) {
    const index = entries.findIndex((candidate) => stable(candidate) === stable(entry));
    assert(index >= 0, label);
    entries.splice(index, 1);
}
function normalizedRecord(entry, file) {
    return canonical({ data: { words: [entry] } }, file).data.words[0];
}

/** English renderings in a register, by file and baseline name, which take the tongue `translation`. */
const translationRetags = new Map([
    [
        "assets/content/Skills/Languages/Atarzadi.md",
        new Set(["Atárzadi Language", "Atarzadi Language", "Tribes of Atarzád"]),
    ],
]);

/** The baseline with its English register renderings tagged `translation`, and nothing else changed. */
function withTranslationRetags(fm, file) {
    const names = translationRetags.get(file);
    if (!names) return fm;
    const copy = structuredClone(fm);
    for (const row of copy.data?.register ?? [])
        if (names.has(row?.name)) row.tongue = "translation";
    return copy;
}

/** Names respelled to carry one accent, the first, by file: each baseline spelling and its replacement. */
const oneAccentRespellings = new Map([
    ["assets/content/Skills/Languages/Atarzadi.md", [["atárzádegan", "atárzadegan"]]],
    [
        "assets/content/Skills/Languages/Nyaluban.md",
        [
            ["fámangalí", "fámangali"],
            ["ódúmbala", "ódumbala"],
            ["ómalesí", "ómalesi"],
        ],
    ],
]);

/** `text` with the file's one-accent respellings applied, in either initial case. */
function respell(text, file) {
    const upper = (word) => word[0].toUpperCase() + word.slice(1);
    let out = text;
    for (const [from, to] of oneAccentRespellings.get(file) ?? [])
        out = out.replaceAll(from, to).replaceAll(upper(from), upper(to));
    return out;
}

/** The baseline with the one-accent respellings applied to every string. */
function withOneAccentRespellings(fm, file) {
    if (!oneAccentRespellings.has(file)) return fm;
    const walk = (value) => {
        if (typeof value === "string") return respell(value, file);
        if (Array.isArray(value)) return value.map(walk);
        if (value && typeof value === "object")
            return Object.fromEntries(
                Object.entries(value).map(([key, item]) => [key, walk(item)]),
            );
        return value;
    };
    return walk(fm);
}

/** Languages whose English name lists moved under `names.en`, which the encoding never reads. */
const englishNameLists = new Map([["assets/content/Skills/Languages/Nordmal.md", ["epithet"]]]);

/** The baseline with those lists under `names.en` and their pattern placeholders renamed to match. */
function withEnglishNameLists(fm, file) {
    const lists = englishNameLists.get(file);
    if (!lists) return fm;
    const copy = structuredClone(fm);
    const names = copy.data?.names;
    if (!names) return copy;
    names.en ??= {};
    for (const list of lists) {
        names.en[list] = names[list];
        delete names[list];
    }
    const rename = (text) =>
        lists.reduce((out, list) => out.replaceAll(`{${list}}`, `{en.${list}}`), text);
    for (const [gender, patterns] of Object.entries(names.pattern ?? {}))
        names.pattern[gender] = Array.isArray(patterns) ? patterns.map(rename) : rename(patterns);
    return copy;
}

/** Register rows that wrote two names as one, by file: each baseline row's name and the names it splits into. */
const registerSplits = new Map([
    [
        "assets/content/Skills/Languages/Nordmal.md",
        new Map([
            ["gudi / gudja", ["gudi", "gudja"]],
            ["hofgudi / hofgudja", ["hofgudi", "hofgudja"]],
        ]),
    ],
]);

/** The baseline with each such register row split into one row per name. */
function withRegisterSplits(fm, file) {
    const splits = registerSplits.get(file);
    if (!splits || !Array.isArray(fm.data?.register)) return fm;
    const copy = structuredClone(fm);
    // Caseless tongues once wrote these rows capitalized; the match ignores case.
    copy.data.register = copy.data.register.flatMap((row) => {
        const names =
            typeof row?.name === "string" ? splits.get(row.name.toLowerCase()) : undefined;
        return names ? names.map((name) => ({ ...row, name })) : [row];
    });
    return copy;
}

/** Keep every meaning, class, concept, native writing, name and English reading. */
export function assertEncodingMigrationPreserved(
    current,
    before = beforeEncodingMigration(current.file),
) {
    assert.equal(current.file, before.file);
    const file = current.file;
    const actual = canonical(current.fm, file),
        expected = canonical(
            withRegisterSplits(
                withEnglishNameLists(
                    withOneAccentRespellings(withTranslationRetags(before.fm, file), file),
                    file,
                ),
                file,
            ),
            file,
        );
    assert(
        !Object.hasOwn(current.fm.data, "writtenIn"),
        "the encoding replaces the retired default",
    );
    const roles = transfers.filter((transfer) => transfer.file === file);
    for (const transfer of roles) {
        const source = normalizedRecord(transfer.source, file);
        removeOne(expected.data.words, source, `baseline role ${transfer.form}`);
        const target = canonical(
            { data: { [transfer.target.section]: [transfer.target.entry] } },
            file,
        ).data[transfer.target.section][0];
        contains(
            actual.data[transfer.target.section],
            [target],
            `transferred ${transfer.retainedRole} ${transfer.form}`,
        );
        const ordinaryBefore = normalizedRecord(transfer.ordinaryBefore, file);
        removeOne(expected.data.words, ordinaryBefore, `baseline citation ${transfer.form}`);
        expected.data.words.push(normalizedRecord(transfer.ordinaryAfter, file));
        // A role move may union exact old senses, never replace the original one.
        for (const gloss of [transfer.ordinaryBefore.gloss].flat())
            assert([transfer.ordinaryAfter.gloss].flat().includes(gloss), transfer.form);
    }
    contains(actual, expected, file);
    let body = splitFrontmatter(current.raw).body;
    const originalBody = respell(splitFrontmatter(before.raw).body, file);
    if (roles.length && file.endsWith("/Atarzadi.md")) {
        const addition =
            " The derived-word titles _toqel_, _zhudek_, _rezhul_ and _shekhul_ stand with their meanings and derivations in the name register.";
        assert(body.includes(addition), "the title/name role remains in the reading guidance");
        body = body.replace(addition, "");
        const column = 'SELECT name AS "Name", coalesce(gloss, \'—\') AS "Meaning", ';
        assert(body.includes(column), "the name register displays its preserved meanings");
        body = body.replace(column, 'SELECT name AS "Name", ');
    }
    if (roles.length && file.endsWith("/Khelathi.md")) {
        const addition =
            'The rank morphemes _nelgir_ ("god"), _lekhau_ ("sacred power") and _halzi_ ("heart, and the account a heart answers for") are stems of the corresponding nouns.';
        assert(body.includes(addition), "the rank-stem roles remain explicit");
        body = body.replace(addition + "\n\n", "");
    }
    // Existing English and sample lines retain their bytes and order. New
    // explanatory prose may be added; an old reading cannot disappear.
    const lines = body.split("\n");
    let at = 0;
    for (const line of originalBody.split("\n")) {
        const found = lines.indexOf(line, at);
        assert(found >= 0, `${file}: original reading changed: ${line}`);
        at = found + 1;
    }
}

/** The historical public-API input, with only the approved representation moves. */
function projectionData(before, prefix, moveRoles = true) {
    const data = canonical(before.fm, before.file).data;
    if (prefix !== undefined) data.words = data.words.slice(0, prefix);
    if (moveRoles)
        for (const transfer of transfers.filter((entry) => entry.file === before.file)) {
            const source = normalizedRecord(transfer.source, before.file);
            const sourceIndex = data.words.findIndex((entry) => stable(entry) === stable(source));
            if (sourceIndex < 0) continue;
            data.words.splice(sourceIndex, 1);
            const ordinary = normalizedRecord(transfer.ordinaryBefore, before.file);
            const ordinaryIndex = data.words.findIndex(
                (entry) => stable(entry) === stable(ordinary),
            );
            if (ordinaryIndex >= 0) data.words.splice(ordinaryIndex, 1);
            data.words.push(normalizedRecord(transfer.ordinaryAfter, before.file));
            const section = transfer.target.section;
            const target = canonical({ data: { [section]: [transfer.target.entry] } }, before.file)
                .data[section][0];
            data[section] ??= [];
            if (!data[section].some((entry) => stable(entry) === stable(target)))
                data[section].push(target);
        }
    return data;
}

/** Restore the public piece-meaning and dictionary projection preservation proofs. */
export function assertPublicLanguageProjections(current, before, prefix) {
    const priorData = projectionData(before, prefix);
    const oldMeaning = pieceGlosses(priorData),
        completeMeaning = pieceGlosses(projectionData(before)),
        currentMeaning = pieceGlosses(current.fm.data);
    const forms = new Set();
    const probeKeys =
        /\/(Atarzadi|Varokhi)\.md$/u.test(current.file) ? ["form", "front", "joining"]
        : current.file.endsWith("/Khelathi.md") ? ["form", "front", "joining", "instead", "near"]
        : ["form", "name", "front", "joining", "instead", "near"];
    function collect(value) {
        if (Array.isArray(value)) return value.forEach(collect);
        if (!value || typeof value !== "object") return;
        for (const [key, item] of Object.entries(value)) {
            if (probeKeys.includes(key) && typeof item === "string") forms.add(item);
            if (["built", "variants", "elements"].includes(key) && Array.isArray(item))
                for (const form of item) if (typeof form === "string") forms.add(form);
            collect(item);
        }
    }
    function names(value) {
        if (typeof value === "string" && !value.includes("{")) forms.add(value);
        else if (Array.isArray(value)) value.forEach(names);
        else if (value && typeof value === "object")
            Object.entries(value)
                .filter(([key]) => key !== "metadata")
                .forEach(([, item]) => names(item));
    }
    collect(priorData);
    names(priorData.names);
    const body = splitFrontmatter(before.raw).body;
    if (/\/(Dunhari|Nyaluban)\.md$/u.test(current.file)) {
        const nameList =
            /## (?:Example )?Name Lists\n([\s\S]*?)## (?:Dunhari|Nyáluban) Lexicon/u.exec(
                body,
            )?.[1];
        assert(nameList !== undefined, "the original name-list API probes remain present");
        for (const line of nameList.split("\n")) {
            if (line.startsWith("- ")) forms.add(line.slice(2).split(" (")[0].trim());
            else if (current.file.endsWith("/Dunhari.md") && line && !line.startsWith("#"))
                for (const form of line.split(",")) forms.add(form.trim());
        }
        const sayings = /## Sample Phrases\n([\s\S]*?)## (?:Lexicon|Related Languages)/u.exec(
            body,
        )?.[1];
        assert(sayings !== undefined, "the original phrase API probes remain present");
        for (const line of sayings.split("\n"))
            if (line && !line.startsWith(":"))
                for (const form of line.split(" ")) forms.add(form.trim());
    }
    if (current.file.endsWith("/Varokhi.md"))
        for (const match of body.matchAll(/`(-[\p{L}]+-?|-?[\p{L}]+-)`/gu)) forms.add(match[1]);
    const variants = (form) => {
        const bare = form.replace(/^-+|-+$/gu, "");
        if (/\/(Atarzadi|Varokhi)\.md$/u.test(current.file)) return [form, bare];
        const values = [form, form.toLowerCase(), bare, bare.toLowerCase()];
        if (current.file.endsWith("/Nyaluban.md"))
            values.push(
                form
                    .normalize("NFD")
                    .replace(/\p{M}/gu, "")
                    .replace(/^-+|-+$/gu, "")
                    .toLowerCase(),
            );
        return values;
    };
    for (const form of [...forms].flatMap(variants)) {
        if (current.file.endsWith("/Nyaluban.md") && form === "zherami le zhone") {
            assert.equal(oldMeaning(form), null);
            assert(
                body.includes(
                    'Zherami le zhone\n: _Blessing invocation; "Spirits good abide" (formulaic expression of peaceful greeting)_',
                ),
            );
            assert.equal(
                currentMeaning(form),
                current.fm.data.words.find((word) => word.form === form).gloss,
            );
        } else
            assert.equal(
                currentMeaning(form),
                current.file.endsWith("/Khelathi.md") && oldMeaning(form) === null ?
                    completeMeaning(form)
                :   oldMeaning(form),
                `${form}: preserved public piece meaning`,
            );
    }
    const record = (note, data) => ({
        ...note.fm,
        data,
        file: note.file,
        package: "thalorna",
        system: "note",
    });
    const originalRows = dictionaryAndTermRows([record(before, priorData)]).dictionary;
    const currentRows = dictionaryAndTermRows([record(current, current.fm.data)]).dictionary;
    for (const row of originalRows)
        assert.deepEqual(
            currentRows.find(
                (candidate) =>
                    candidate.language === row.language &&
                    candidate.name === row.name &&
                    candidate.class === row.class,
            ),
            row,
            `${row.name}: preserved public dictionary projection`,
        );
    if (current.file.endsWith("/Atarzadi.md"))
        assert.equal(
            dictionaryAndTermRows([record(before, projectionData(before, 40, false))]).dictionary
                .length,
            0,
            "the original first forty name/stem citations do not become dictionary entries",
        );
}
