# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: GPL-3.0-or-later
"""Independent spelling models against explicit glyph expectations."""
import importlib.util
from pathlib import Path
import unittest

HERE = Path(__file__).resolve().parent


def load(family):
    spec = importlib.util.spec_from_file_location(family, HERE / f"font-expect-{family}.py")
    model = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(model)
    return model


class Expectations(unittest.TestCase):
    def test_carved_length_and_doubling(self):
        model = load("pirzath")
        self.assertEqual(model.expected_glyphs("dulák"), ["d", "u", "l", "a", "lengthmark", "k"])
        self.assertEqual(model.expected_glyphs("attha"), ["a", "t_h", "doubling", "a"])
        self.assertEqual(model.expected_glyphs("qq"), ["notdef.box", "notdef.box"])

    def test_hand_precomposes_marks(self):
        hand = load("pirzath-hand")
        self.assertEqual(hand.collapse(["a", "lengthmark", "t_h", "doubling"]), ["aacute", "t_h_t_h"])

    def test_nordmal_context_and_separate_staves(self):
        model = load("thuravark-carved")
        self.assertEqual(model.expected_glyphs("yá-nng-ngh"), ["j", "a", "a.acute", "ng", "ng", "n", "gh"])
        self.assertEqual(model.expected_glyphs("yqëcx"), ["i", "k", "e", "notdef.box", "notdef.box"])

    def test_vylari_length_catch_and_case(self):
        model = load("semaron-kuriale")
        self.assertEqual(model.expected_glyphs("Daamela"), ["D", "a.long", "m", "e", "l", "a"])
        self.assertEqual(model.expected_glyphs("Chyà"), ["T", "s", "h", "y", "a", "grave"])
        self.assertEqual(model.expected_glyphs("yqë"), ["i", "k", "e"])


if __name__ == "__main__":
    unittest.main()
