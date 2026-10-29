/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import test from "node:test";
import { convertNote, verseContent } from "./split-paired-verse.mjs";

const NOTE = `Intro.

: I. First {#lay-1}

::: {.verse form=lay numstep=5 cols=2}
1 [irtal nysse]{lang=sina enc=e}
2 [A child comes up]{lang=en}
2 [irtal nysse]{lang=sina}

1 [.penvai [onsa]{lang=aele enc=f} halpi]{lang=sina enc=e}
2 [.and [Nela]{.name data-type="being/npc"} leaves]{lang=en}
2 [.penvai [onsa]{lang=aele} halpi]{lang=sina}

--- {.canto}

1 [.[a]{lang=aele enc=f} tarne]{lang=sina enc=e}
2 [.]{lang=en}[[place-x|X]]{lang=en}[, you call it]{lang=en}
2 [.[a]{lang=aele} tarne]{lang=sina}

--- {.canto}

1 [ahi]{lang=sina enc=e}
2 [no]{lang=en}
2 [ahi]{lang=sina}
:::

Outro.
`;

test("a paired fence becomes an English fence and an original fence", () => {
    const { text, findings, converted } = convertNote("a.md", NOTE);
    assert.deepEqual(findings, []);
    assert.equal(converted, 1);
    assert.equal(
        text,
        `Intro.

: I. First {#lay-1}

::: {.verse form=lay lang=en}
A child comes up
.and [Nela]{.name data-type="being/npc"} leaves

.[[place-x|X]], you call it

no
:::

::: {.verse form=lay cols=2}
1 [irtal nysse]{lang=sina enc=e}
1 [.penvai [onsa]{lang=aele enc=f} halpi]{lang=sina enc=e}
2 [irtal nysse]{lang=sina}
2 [.penvai [onsa]{lang=aele} halpi]{lang=sina}

1 [.[a]{lang=aele enc=f} tarne]{lang=sina enc=e}
2 [.[a]{lang=aele} tarne]{lang=sina}

1 [ahi]{lang=sina enc=e}
2 [ahi]{lang=sina}
:::

Outro.
`,
    );
});

test("the English, native and roman lines survive in order", () => {
    const { text } = convertNote("a.md", NOTE);
    assert.deepEqual(verseContent(text), verseContent(NOTE));
    assert.equal(verseContent(NOTE).english.length, 4);
});

test("target-366 writes one encoded original with work keys and line ends", () => {
    const note = NOTE.replace("[irtal nysse]{lang=sina enc=e}", "[irtal/nysse]{lang=sina enc=e}")
        .replace("[irtal nysse]{lang=sina}", "[irtal/nysse]{lang=sina}")
        .replace("A child comes up", "A child/comes up");
    const { text, findings } = convertNote("a.md", note, { target366: true });
    assert.deepEqual(findings, []);
    assert.equal(
        text,
        `Intro.

: I. First {#lay-1}

::: {.verse form=lay lang=en work=lay-1}
A child\\/comes up/
.and [Nela]{.name data-type="being/npc"} leaves

.[[place-x|X]], you call it

no
:::

::: {.verse form=lay lang=sina enc=e work=lay-1}
irtal\\/nysse/
.penvai [onsa]{lang=aele} halpi

.[a]{lang=aele} tarne

ahi
:::

Outro.
`,
    );
    assert.deepEqual(verseContent(text), verseContent(note));
    const plain = convertNote("The_Lay.md", NOTE.replace(": I. First {#lay-1}", "Plain."), {
        target366: true,
    }).text;
    assert.equal(plain.match(/work=the-lay-1/g).length, 2);
});

test("target-366 keeps native codage and refuses disagreeing encodings", () => {
    const coded = `::: {.verse form=lay cols=2}
1 [⟦A⟧]{lang=zxx enc=z}[, tob.]{lang=khaz enc=k}
2 [One.]{lang=en}
2 [A]{lang=zxx}[, tob.]{lang=khaz}
:::
`;
    const ok = convertNote("a.md", coded, { target366: true });
    assert.deepEqual(ok.findings, []);
    assert.match(ok.text, /lang=khaz enc=k work=a-1\}\n\[⟦A⟧\]\{lang=zxx\}, tob\.\n/);
    const split = coded
        .replace("enc=k}", "enc=k}[x]{lang=khaz enc=other}")
        .replace("[, tob.]{lang=khaz}", "[, tob.]{lang=khaz}[x]{lang=khaz}");
    assert.match(
        convertNote("a.md", split, { target366: true }).findings[0],
        /^a\.md:2: error: .*disagree on enc/,
    );
    const bad = coded.replace("[, tob.]{lang=khaz}", "[, tab.]{lang=khaz}");
    assert.match(
        convertNote("a.md", bad, { target366: true }).findings[0],
        /differs from the roman/,
    );
});

test("without the flag there are no work keys or marks", () => {
    const { text } = convertNote("a.md", NOTE);
    assert.doesNotMatch(text, /work=|\/$/m);
});

test("a row without its three lines is refused at its line", () => {
    const bad = NOTE.replace("2 [A child comes up]{lang=en}\n", "");
    const { text, findings } = convertNote("a.md", bad);
    assert.deepEqual(findings, [
        "a.md:6: error: a row needs exactly one native, one English and one roman line",
    ]);
    assert.equal(text, bad);
});

test("native text that differs from the roman is refused", () => {
    const { findings } = convertNote(
        "a.md",
        NOTE.replace("2 [irtal nysse]{lang=sina}", "2 [irtal nyssa]{lang=sina}"),
    );
    assert.deepEqual(findings, ["a.md:6: error: the native text differs from the roman text"]);
});

test("a fence without columns is left alone", () => {
    const plain = "::: {.verse form=lay lang=en}\nA line\n:::\n";
    assert.deepEqual(convertNote("a.md", plain), {
        text: plain,
        findings: [],
        converted: 0,
        refusals: [],
    });
});

const BARE = `::: {.verse form=lay cols=2}
--- {.canto}

1 [irtal nysse]{lang=sina enc=e}
2 [A child]{lang=en}

1 [ahi]{lang=sina enc=e}
2 [no]{lang=en}
2 [ahi]{lang=sina}

--- {.canto}
:::
`;

test("target-366 takes a native run as its own roman and drops edge cantos", () => {
    const { text, findings } = convertNote("a.md", BARE, { target366: true });
    assert.deepEqual(findings, []);
    assert.equal(
        text,
        "::: {.verse form=lay lang=en work=a-1}\nA child/\nno\n:::\n\n" +
            "::: {.verse form=lay lang=sina enc=e work=a-1}\nirtal nysse/\nahi\n:::\n",
    );
});

test("a canto break between stanzas stays a stanza break, and the no-flag mode refuses the shapes", () => {
    const between = BARE.replace("2 [ahi]{lang=sina}\n\n", "2 [ahi]{lang=sina}\n\n").replace(
        "\n1 [ahi]",
        "--- {.canto}\n\n1 [ahi]",
    );
    const { text } = convertNote("a.md", between, { target366: true });
    assert.match(text, /^A child\n\nno$/m);
    assert.ok(convertNote("a.md", BARE).findings.length > 0);
});

test("refusals name the shape and quote the rows", () => {
    const bad = "::: {.verse form=lay cols=2}\n1 [x]\n2 [y]{lang=en}\n:::\n";
    const { refusals } = convertNote("a.md", bad, { target366: true });
    assert.equal(refusals[0].shape, "a native line with no language run");
    assert.deepEqual(refusals[0].rows, ["1 [x]"]);
});

const UNSCRIPTED = `::: {.verse form=lay cols=2}
1 [nyolawa ndaweyu]{lang=nyal}
2 [A child]{lang=en}
2 [nyolawa ndaweyu]{lang=nyal}

1 [ndaza]{lang=nyal}
2 [no]{lang=en}
2 [ndaza]{lang=nyal}
:::
`;

test("target-366 writes an unscripted original as one column of its language", () => {
    const { text, findings } = convertNote("a.md", UNSCRIPTED, { target366: true });
    assert.deepEqual(findings, []);
    assert.match(
        text,
        /::: \{\.verse form=lay lang=nyal work=a-1\}\nnyolawa ndaweyu\/\nndaza\n:::\n$/,
    );
    assert.deepEqual(verseContent(text), verseContent(UNSCRIPTED));
    const mixed = UNSCRIPTED.replaceAll("[ndaza]{lang=nyal}", "[ndazandazandaza]{lang=khaz}");
    assert.match(
        convertNote("a.md", mixed, { target366: true }).findings[0],
        /alternate between languages/,
    );
});

test("target-366 reads a bare gap in a native line as a zxx span", () => {
    const gap = `::: {.verse form=lay cols=2}
1 […][ thufar ]{lang=khaz enc=k}[ … ]
2 [A word]{lang=en}

1 […]
2 [lost]{lang=en}

1 [ahi]{lang=khaz enc=k}
2 [no]{lang=en}
2 [ahi]{lang=khaz}
:::
`;
    const { text, findings } = convertNote("a.md", gap, { target366: true });
    assert.deepEqual(findings, []);
    assert.match(
        text,
        /lang=khaz enc=k work=a-1\}\n\[…\]\{lang=zxx\} thufar \[…\]\{lang=zxx\}\/\n\[…\]\{lang=zxx\}\/\nahi\n/,
    );
    assert.deepEqual(verseContent(text), verseContent(gap));
    const other = gap.replace("1 […]\n", "1 [stray text]\n");
    assert.match(
        convertNote("a.md", other, { target366: true }).findings[0],
        /not a column number/,
    );
});

test("target-366 carries marks outside the span, gap spellings and English gap rows", () => {
    const note = `::: {.verse form=lay cols=2}
1 .[gaz khumad]{lang=khaz enc=k}
2 [.A word]{lang=en}
2 .[gaz khumad]{lang=khaz}

1 …[halib baval]{lang=khaz enc=k}…
2 […][ burned to ash ]{lang=en}[…]
2 …[halib baval]{lang=khaz}…

1 [\\[…\\]]{lang=zxx}
2 [lost]{lang=en}
2 [\\[…\\]]{lang=zxx}

1 [ …  ]
2 [gone]{lang=en}
2 […]{lang=zxx}
:::
`;
    const { text, findings } = convertNote("a.md", note, { target366: true });
    assert.deepEqual(findings, []);
    const [english, original] = text.split(":::\n\n");
    assert.match(
        english,
        /\.A word\/\n\[…\]\[ burned to ash \]\{lang=en\}\[…\]\/\nlost\/\ngone\n$/,
    );
    assert.match(
        original,
        /lang=khaz enc=k work=a-1\}\n\.gaz khumad\/\n…halib baval…\/\n\[…\]\{lang=zxx\}\/\n\[…\]\{lang=zxx\}\n/,
    );
    assert.deepEqual(verseContent(text), verseContent(note));
});

test("target-366 keeps a note's own gap spelling when it is consistent", () => {
    const note = `::: {.verse form=lay cols=2}
1 [\\[…\\]]{lang=zxx}[ ahi ]{lang=khaz enc=k}
2 [lost]{lang=en}
2 [\\[…\\]]{lang=zxx}[ ahi ]{lang=khaz}
:::
`;
    assert.match(
        convertNote("a.md", note, { target366: true }).text,
        /\[\\\[…\\\]\]\{lang=zxx\} ahi\n/,
    );
});

test("an unscripted original keeps an English or embedded span and refuses alternating tongues", () => {
    const note = `::: {.verse form=lay cols=2}
1 [Other Chief]{lang=en}[ malwen malwen malwen.]{lang=varo}
2 [A chief]{lang=en}
2 [Other Chief]{lang=en}[ malwen malwen malwen.]{lang=varo}
:::
`;
    const { text, findings } = convertNote("a.md", note, { target366: true });
    assert.deepEqual(findings, []);
    assert.match(text, /lang=varo work=a-1\}\n\[Other Chief\]\{lang=en\} malwen malwen malwen\.\n/);
});
