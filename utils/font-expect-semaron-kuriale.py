# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: OFL-1.1
"""Independent spelling-to-glyph expectations.

Adapted from fonts tools/semaron-kuriale/guard.py at
3ec43cd207ba13072a0806421a2a62efb7aabca6. No encoding loader or codepoint table.
"""

BOX = "notdef.box"

BOX_GLYPHS = {BOX}

EMPTY = {"ignorable", "ignorable.sub"}

LETTERS = "abdefghijklmnoprstuvwz"

VOWELS = "aeiou"

LONG_VOWELS = "aiu"

ACUTES = {"á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "Á": "A", "É": "E", "Í": "I", "Ó": "O", "Ú": "U",
          "ë": "e", "Ë": "E", "q": "k", "Q": "K"}

PAUSES = "."

CATCHES = "'’`-"

SILENT = "​‌‍‎‏‪‫‬‭‮⁦⁧⁨⁩﻿"

BASES = {
    *LETTERS, *LETTERS.upper(), "th", "TH",
    *(f"{v}.long" for v in VOWELS), *(f"{v.upper()}.long" for v in VOWELS),
}

def expected_glyphs(text: str) -> list[str]:
    """The glyph names a line must shape to, from the spelling rules alone."""
    t = "".join(ACUTES.get(ch, ch) for ch in text)
    out: list[str] = []
    i = 0
    while i < len(t):
        ch = t[i]
        low = ch.lower()
        pair = t[i : i + 2].lower()
        if low in "tkdg" and i + 1 < len(t) and t[i + 1] in "àÀ":
            out += [ch, "grave", "A" if t[i + 1].isupper() else "a"]
            i += 2
            continue
        if ch in "àÀ":
            out += ["A" if ch.isupper() else "a", "grave"]
            i += 1
            continue
        if pair == "th":
            out.append("TH" if ch.isupper() else "th")
            i += 2
            continue
        if pair == "ch":
            out += ["T" if ch.isupper() else "t", "s", "h"]
            i += 2
            continue
        if low in LONG_VOWELS and pair == low + low:
            out.append((low.upper() if ch.isupper() else low) + ".long")
            i += 2
            continue
        if low == "y":
            following = t[i + 1].lower() if i + 1 < len(t) else ""
            name = "y" if following and following in VOWELS + "à" else "i"
            out.append(name.upper() if ch.isupper() else name)
        elif low in LETTERS and ch.isascii():
            out.append(ch)
        elif ch.isascii() and ch.isdigit():
            out.append(f"num.{ch}")
        elif ch == " ":
            out.append("space")
        elif ch in PAUSES:
            out.append("point")
        elif ch in CATCHES:
            out.append("grave" if out and out[-1] in BASES else BOX)
        elif ch in SILENT:
            pass
        else:
            out.append(BOX)
        i += 1
    return out

def normalized(names: list[str]) -> list[str]:
    """Shaped glyph names with the empty ignorables dropped and every copy of the box named as it."""
    return [BOX if n in BOX_GLYPHS else n for n in names if n not in EMPTY]
