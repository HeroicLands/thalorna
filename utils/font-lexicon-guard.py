# Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
# SPDX-License-Identifier: GPL-3.0-or-later
"""Assert language lexicons shape to independently predicted glyphs.

Font-owned native fixtures and geometry run separately. The input is encoded by
Thalorna's public encoding-document API; no font authoring loader is involved.
"""
import argparse
import importlib.util
import json
import sys
from pathlib import Path

from fontTools.pens.boundsPen import BoundsPen

HERE = Path(__file__).resolve().parent


def module(file, name):
    spec = importlib.util.spec_from_file_location(name, file)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


def visible(renderer, shaped, text):
    """Remove only selectors/ignorables proved to have no ink and no advance."""
    kept = []
    glyphset = renderer.tt.getGlyphSet()
    for index, glyph in enumerate(shaped.glyphs):
        name = renderer.order[glyph[0]]
        cluster = shaped.clusters[index]
        char = text[cluster] if cluster < len(text) else ""
        selector = char and 0xE0100 <= ord(char) <= 0xE01EF
        if selector or name in {"ignorable", "ignorable.sub"}:
            pen = BoundsPen(glyphset)
            glyphset[name].draw(pen)
            if glyph[3] or pen.bounds is not None:
                raise ValueError(f"invisible control draws {name} or advances {glyph[3]}")
        else:
            kept.append(glyph)
    shaped.glyphs = kept
    names = [renderer.order[glyph[0]] for glyph in kept]
    if any(name in {".notdef", "notdef.box"} for name in names):
        raise ValueError(f".notdef or the box in {names}")
    return names


def check_group(fonts, group):
    family = group["model"]
    model = module(fonts / "tools" / family / "guard.py", family.replace("-", "_"))
    render = module(fonts / "tools" / "render.py", "font_guard_render")
    renderer = (model.Shaper if family == "veldikko" else render.Renderer)(Path(group["font"]))
    independent = None
    if family in {"pirzath", "pirzath-hand", "thuravark-carved", "semaron-kuriale"}:
        independent = module(HERE / f"font-expect-{family}.py", "expect_" + family.replace("-", "_"))
    carved = module(HERE / "font-expect-pirzath.py", "expect_carved") if family == "pirzath-hand" else None
    points = model.anchors() if family == "veldikko" else None
    failures = []
    for entry in group["entries"]:
        try:
            native = entry["native"]
            clean = "".join(char for char in native if not 0xE0100 <= ord(char) <= 0xE01EF)
            direction = "rtl" if family in {"qalezu-hand", "veldikko"} else "ltr"
            shaped = renderer.shape(native, direction=direction)
            got = visible(renderer, shaped, native)
            if carved:
                want = independent.collapse(carved.expected_glyphs(entry["source"]))
            elif independent:
                want = independent.expected_glyphs(entry["source"])
            elif family == "veldikko":
                want = model.expected(model.glyphs_of(clean))
            else:
                want = model.drawn(clean)
                if direction == "rtl":
                    want = want[::-1]
                if family == "vedyakshara":
                    got = model.plain(got)
            if got != want:
                raise ValueError(f"shaped {got}, expected {want}")
            if family == "veldikko":
                for problem in model.placement(got, shaped, points, renderer.ink):
                    failures.append(f"{entry['language']} {entry['source']}: {problem}")
        except (ValueError, KeyError) as error:
            failures.append(f"{entry['language']} {entry['source']}: {error}")
    print(f"{family}: {len(group['entries'])} lexicon forms, {len(failures)} failures")
    return failures


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--fonts", type=Path, required=True)
    parser.add_argument("--input", type=Path, required=True)
    args = parser.parse_args()
    sys.path.insert(0, str(args.fonts.resolve() / "tools"))
    payload = json.loads(args.input.read_text(encoding="utf-8"))
    if payload.get("version") != 1 or len(payload.get("groups", [])) != 8:
        raise ValueError("Expected all eight font guard groups in version 1 input")
    failures = []
    for group in payload["groups"]:
        failures += check_group(args.fonts.resolve(), group)
    for failure in failures:
        print(f"error: {failure}", file=sys.stderr)
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
