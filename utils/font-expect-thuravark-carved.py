# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: OFL-1.1
"""Independent spelling-to-glyph expectations.

Adapted from fonts tools/thuravark-carved/guard.py at
3ec43cd207ba13072a0806421a2a62efb7aabca6. No encoding loader or codepoint table.
"""

DIGRAPHS = ("th", "dh", "kh", "gh", "ng", "hl")

VOWELS = "aeiou"

ACUTE = {"á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u"}

def expected_glyphs(form: str) -> list[str]:
    s = form.lower()
    out: list[str] = []
    i = 0
    while i < len(s):
        ch = s[i]
        if ch in ACUTE:
            out += [ACUTE[ch], ACUTE[ch] + ".acute"]
            i += 1
            continue
        if ch == "y":
            out.append("j" if i + 1 < len(s) and s[i + 1] in VOWELS + "áéíóú" else "i")
            i += 1
            continue
        if ch == "-":
            pass
        elif ch == " ":
            out.append("space")
        elif ch == ".":
            out.append("period")
        elif ch == "q":
            out.append("k")
        elif ch == "ë":
            out.append("e")
        elif ch in "cx":
            out.append("notdef.box")
        elif s[i : i + 3] == "nng":
            out += ["ng", "ng"]
            i += 3
            continue
        elif s[i : i + 2] == "ng" and s[i : i + 3] != "ngh":
            out.append("ng")
            i += 2
            continue
        elif s[i : i + 2] in DIGRAPHS and s[i : i + 2] != "ng":
            out.append(s[i : i + 2])
            i += 2
            continue
        elif ch in "abdefghijklmnoprstuvwz":
            out.append(ch)
        else:
            out.append("notdef.box")
        i += 1
    return out
