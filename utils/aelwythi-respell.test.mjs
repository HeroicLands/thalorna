/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { respellWord, respellText, scopedEdits, migrationReport } from "./aelwythi-respell.mjs";

test("approved respelling is deterministic and preserves case and ch/qu", () => {
    for (const [before, after] of [
        ["silence", "silense"],
        ["scent", "sent"],
        ["science", "siense"],
        ["pack", "pak"],
        ["pluck", "pluk"],
        ["cold", "kold"],
        ["exact", "eksakt"],
        ["Xen", "Zen"],
        ["xen", "zen"],
        ["Blackkiln", "Blakkiln"],
        ["quench", "quench"],
        ["Church", "Church"],
        ["Scent", "Sent"],
        ["SCENT", "SENT"],
        ["EXACT", "EKSAKT"],
    ])
        assert.equal(respellWord(before), after, before);
    assert.equal(respellText("Exact scent; silence, pack!"), "Eksakt sent; silense, pak!");
    assert.equal(
        respellText(respellText("scenic, exact, quench")),
        respellText("scenic, exact, quench"),
    );
});

test("tagged edits preserve English prose, attributes and link addresses", () => {
    const source =
        "English pack [pack]{lang=en}\n[pack [cold]{lang=en} [scent]{.emph}]{lang=aelw}\n[[place-pack|Pack]]{lang=aelw}\n::: {lang=aelw font=serif}\npluck [church](/English-cold/)\n:::\n";
    const edits = scopedEdits(source).filter(({ form, replacement }) => form !== replacement);
    assert.deepEqual(
        edits.map(({ form, replacement }) => [form, replacement]),
        [
            ["pack", "pak"],
            ["scent", "sent"],
            ["Pack", "Pak"],
            ["pluck", "pluk"],
        ],
    );
    let changed = source;
    for (const edit of [...edits].reverse())
        changed = changed.slice(0, edit.from) + edit.replacement + changed.slice(edit.to);
    assert(changed.startsWith("English pack [pack]{lang=en}"));
    assert(changed.includes("[cold]{lang=en}"));
    assert(changed.includes("[[place-pack|Pak]]{lang=aelw}"));
    assert(changed.includes("(/English-cold/)"));
    assert(changed.includes("font=serif"));
});

test("the owner's whole-word sceptic exception preserves every letter's case", () => {
    for (const [before, after] of [
        ["sceptic", "skeptik"],
        ["Sceptic", "Skeptik"],
        ["SCEPTIC", "SKEPTIK"],
        ["sCePtIc", "sKePtIk"],
    ])
        assert.equal(respellWord(before), after);
    assert.equal(respellWord("sceptical"), "septikal");
});

test("encoding-only spans and fences select Aelwythi without changing other languages", () => {
    const source = [
        "English sceptic [pack]{lang=en}",
        "[sceptic [cold]{lang=en} [pack]{enc=foreign}]{enc=aelwsemaronenc}",
        "[Pack]{enc=doc-aelwsemaronenc}",
        "[[place-pack|Pack]]{enc=thalorna-note-doc-aelwsemaronenc}",
        "[pack]{enc=foreign-note-doc-aelwsemaronenc}",
        "::: {.verse enc=thalorna-note-doc-aelwsemaronenc}",
        "pluck [cold]{lang=en}",
        ":::",
        "::: {.verse enc=foreign}",
        "pack",
        ":::",
        "::: {enc=doc-aelwsemaronenc}",
        "pack",
        "::: {enc=foreign}",
        "cold",
        ":::",
        ":::",
        "```scroll {enc=aelwsemaronenc chars=4}",
        "exact",
        "```",
    ].join("\n");
    const edits = scopedEdits(source).filter((edit) => edit.form !== edit.replacement);
    assert.deepEqual(
        edits.map(({ form, replacement }) => [form, replacement]),
        [
            ["sceptic", "skeptik"],
            ["Pack", "Pak"],
            ["Pack", "Pak"],
            ["pluck", "pluk"],
            ["pack", "pak"],
            ["exact", "eksakt"],
        ],
    );
    for (const edit of edits) assert.equal(source.slice(edit.from, edit.to), edit.form);
});

test("migration reports include files whose only language selector is an Aelwythi encoding", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aelwythi-enc-report-"));
    try {
        const content = path.join(root, "assets/content");
        fs.mkdirSync(path.join(content, "Skills/Languages"), { recursive: true });
        fs.copyFileSync(
            new URL("../assets/content/Skills/Languages/Aelwythi.md", import.meta.url),
            path.join(content, "Skills/Languages/Aelwythi.md"),
        );
        fs.writeFileSync(
            path.join(content, "Enc.md"),
            "[Sceptic]{enc=doc-aelwsemaronenc}\n::: {.verse enc=aelwsemaronenc}\npack\n:::\n",
        );
        fs.writeFileSync(path.join(content, "Foreign.md"), "[Exact]{lang=en} [pack]{enc=foreign}");
        const report = migrationReport(root);
        const occurrences = report.collisions.flatMap((group) =>
            group.originals.flatMap((original) => original.occurrences),
        );
        assert(
            occurrences.some((row) => row.file === "assets/content/Enc.md" && row.form === "pack"),
        );
        assert(!occurrences.some((row) => row.file === "assets/content/Foreign.md"));
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
});

test("possessives, elisions and compounds follow the owner's unambiguous spellings", () => {
    for (const [source, target] of [
        ["king's", "kinges"],
        ["KING'S", "KINGES"],
        ["lovers'", "loverses"],
        ["stone's", "stonees"],
        ["knife's", "knifees"],
        ["o'er", "oer"],
        ["'tis", "tis"],
        ["kandle-light", "kandlelight"],
        ["sweet-smelling", "sweet smelling"],
        ["full-fed", "full fed"],
    ])
        assert.equal(respellWord(source), target, source);
    const source =
        "English king's [king's]{lang=en} [king's lovers' o'er kandle-light]{enc=aelwsemaronenc}";
    const edits = scopedEdits(source).filter((entry) => entry.form !== entry.replacement);
    assert.deepEqual(
        edits.map(({ form, replacement }) => [form, replacement]),
        [
            ["king's", "kinges"],
            ["lovers'", "loverses"],
            ["o'er", "oer"],
            ["kandle-light", "kandlelight"],
        ],
    );
});
