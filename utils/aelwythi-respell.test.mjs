/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import test from "node:test";
import { respellWord, respellText, scopedEdits } from "./aelwythi-respell.mjs";

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
