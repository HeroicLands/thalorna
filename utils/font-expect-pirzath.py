# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: OFL-1.1
"""Independent spelling-to-glyph expectations.

Adapted from fonts tools/pirzath/guard.py at
3ec43cd207ba13072a0806421a2a62efb7aabca6. No encoding loader or codepoint table.
"""

DIGRAPHS = {"th": "t_h", "dh": "d_h", "gh": "g_h", "kh": "k_h"}

ACUTES = {"á": "aacute", "é": "eacute", "í": "iacute", "ó": "oacute", "ú": "uacute"}

LETTERS = {c: c for c in "bdgkptvfzshmnlraeiou"}

PUNCT_MAP = {
    "-": "hyphen", ".": "period", ",": "comma", "!": "exclam",
    # The carved face draws its word dot at every space, by a ccmp substitution.
    " ": "space.dot", "\u00a0": "space.dot",
    "\u201c": "quote.open", "\u201d": "quote.close",
}

CONSONANT_NAMES = {
    "p", "b", "f", "v", "m", "t", "d", "t_h", "d_h", "n", "k", "g", "k_h", "g_h", "s", "z", "h",
    "l", "r", "sh", "zh", "ts", "ch", "j", "q", "ng", "ny", "catch", "w", "y", "hl",
}

DOUBLED_DIGRAPHS = {k[0] + k: v for k, v in DIGRAPHS.items()}

def expected_glyphs(form: str) -> list[str]:
    out = []
    i = 0
    s = form.lower()
    while i < len(s):
        three = s[i : i + 3]
        if three in DOUBLED_DIGRAPHS:
            out += [DOUBLED_DIGRAPHS[three], "doubling"]
            i += 3
            continue
        two = s[i : i + 2]
        if two in DIGRAPHS:
            out.append(DIGRAPHS[two])
            i += 2
            continue
        ch = s[i]
        if ch in ACUTES:
            out += [ACUTES[ch][0], "lengthmark"]
        elif ch in LETTERS:
            out.append(LETTERS[ch])
        elif ch in PUNCT_MAP:
            out.append(PUNCT_MAP[ch])
        else:
            out.append("notdef.box")
        i += 1
    # A consonant written twice is the letter once with the doubling mark.
    for j in range(1, len(out)):
        if out[j] in CONSONANT_NAMES and out[j] == out[j - 1]:
            out[j] = "doubling"
    return out
