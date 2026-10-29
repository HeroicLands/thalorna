# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: OFL-1.1
"""Independent spelling-to-glyph expectations.

Adapted from fonts tools/pirzath-hand/guard.py at
3ec43cd207ba13072a0806421a2a62efb7aabca6. No encoding loader or codepoint table.
"""

VOWELS = {"a": "aacute", "e": "eacute", "i": "iacute", "o": "oacute", "u": "uacute"}

def collapse(glyphs: list[str]) -> list[str]:
    """The hand's glyphs for a carved sequence or fixture: a vowel and its length mark are the
    long-vowel glyph, a consonant and its doubling mark are the doubled glyph, and the carved
    word dot is the hand's plain space."""
    out: list[str] = []
    for g in glyphs:
        if g in ("lengthmark", "doubling"):
            k = len(out) - 1
            if g == "doubling":
                out[k] = f"{out[k]}_{out[k]}"
            elif out[k] in VOWELS:
                out[k] = VOWELS[out[k]]
            else:
                out.append(g)
        elif g == "space.dot":
            out.append("space")
        else:
            out.append(g)
    return out
