# Khelathi temple banner

`render.py` draws `assets/images/banners/khelathubnr.webp`, the Khelathi temple
inscription of Meqes VI, entirely in code. It draws the starred ceiling, the
architrave and its painted band, the kheker frieze and two banded papyrus
columns. Between the columns it draws a cream gypsum wall of registers, divided
into episodes, above a dark red dado. The signs come from the Khelathi Zethu
Glyphs font, set right to left in painted raised relief and lit like a
photograph of a freshly painted temple interior. No photograph and no generated
image is used, so the banner's provenance is `ai: false`. All noise is seeded,
so the same sequence and font always write the same pixels.

## Running it

The renderer reads the font, its sign table and its paint maps from a `fonts`
checkout beside this repository (`../fonts`). It needs Python 3 and the pinned
packages:

```sh
python3 -m venv build/banner-meqes/.venv
build/banner-meqes/.venv/bin/pip install -r utils/banner-meqes/requirements.txt
build/banner-meqes/.venv/bin/python utils/banner-meqes/render.py --crops
```

With no arguments it reads `utils/banner-meqes/sign-sequence.json` and writes
`khelathubnr.png` and `khelathubnr.webp` (quality 90) to `build/banner-meqes/`.
`sign-sequence.md` beside it is the translated text and the sources the sequence sets. It never writes into `assets/`. Copying the WebP over the banner is a separate,
reviewed step.

| Option            | Effect                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| `--sequence PATH` | the sign sequence to set                                                                                      |
| `--out DIR`       | where to write; the default is `build/banner-meqes/`                                                          |
| `--name STEM`     | the output file stem; the default is `khelathubnr`, or `test-khelathubnr` for a test sequence                 |
| `--font PATH`     | the font; the default is `../fonts/fonts/KhelathiZethuGlyphs-Regular.ttf`                                     |
| `--encoding PATH` | the sign table; the default is `../fonts/tools/khelathi-zethu-glyphs/encoding.json`                           |
| `--paint PATH`    | the paint maps, with `paint.py` beside them; the default is `../fonts/tools/khelathi-zethu-glyphs/paint.json` |
| `--ss N`          | supersampling factor, 3 by default                                                                            |
| `--empty`         | draws the wall without the signs                                                                              |
| `--crops`         | also writes 100% crops of the first register, the first cord oval, the first vignette and the left column     |

A run takes about forty seconds at the default supersampling. It prints, for
each register:

- how wide its text is at full height against the room it has, both in quadrats;
- the mean and widest gap between neighbouring ink;
- the share of the register that is bare ground;
- how much of the line is left open at each end.

A line whose text is shorter than its room leaves open wall, which is fixed in
the sequence, not in the renderer.

`test-sequence.json` is a test of the renderer: drawn signs packed in an
arbitrary order, marked `"test": true`. It is not the inscription.

```sh
build/banner-meqes/.venv/bin/python utils/banner-meqes/render.py \
  --sequence utils/banner-meqes/test-sequence.json --crops
```

## The sign sequence

```json
{
  "registers": [
    {
      "n": 1,
      "episode": 1,
      "quadrats": [
        { "frame": false, "rows": [[{ "id": "16-024", "colour": "gold", "shape": "low" }]] },
        {
          "frame": false,
          "rows": [
            [{ "id": "10-016", "colour": "plant" }],
            [{ "id": "16-006", "colour": "stroke" }]
          ]
        },
        { "frame": true, "rows": [[{ "id": "13-002", "colour": "object" }]] }
      ]
    }
  ],
  "vignettes": [
    {
      "spans": [3, 4],
      "side": "start",
      "signs": [
        { "id": "01-056", "colour": "figure" },
        { "id": "05-004", "colour": "figure" }
      ]
    }
  ]
}
```

- **`registers`** holds 4 to 16 registers, top to bottom. The wall's height,
  less its bands and rules, is shared among them. A register beside a scene
  takes an even share. A register with no scene whose text falls short takes
  up to 1.4 shares, so its line is set larger, as a heading is, and runs edge
  to edge. Each register's `quadrats` run in reading order, right to left.
- **`episode`** groups registers. A thick coloured band stands between episodes
  and at the top and foot of the wall. A thin rule in a darker tone of the
  episode's band divides the registers of one episode. A register with no
  `episode` is an episode of its own.
- **A quadrat's `rows`** run top to bottom, and each row runs in reading order.
  So two rows stack their signs, and two signs in one row stand side by side,
  the first at the right.
- **`frame: true`** puts a quadrat inside the cord oval. A run of framed
  quadrats shares one oval, tied at the left.
- **A sign** gives `id` (such as `01-028`) and `colour`. It may also give:
  - `shape` (`tall`, `low` or `small`); otherwise it is taken from the sign's
    box in the font's table;
  - `codepoint`, checked against the font's table;
  - `variant` (`a`, `b` or `c`);
  - `mirror`, which flips the sign left to right;
  - `tone` (`blue` or `green`), which picks a bird's colour; otherwise birds
    alternate between the two;
  - `regions`, a list of `[x, y, colour]` that repaints the region under each
    point. The point is a share of the sign's ink box from its top-left
    corner, and the colour is a pigment name such as `yellow`, `blue`,
    `white` or `gold`.
- **`vignettes`** are scenes. Each spans the registers in `spans`, which
  must lie in one episode, at the `start` (right) or `end` (left) of their
  lines. Its signs stand on the lower register's ground. A person fills the
  height, and other signs stand at a size set by their group: beasts, birds,
  buildings and things. The thin rule stops at the scene's edges, and the text
  of both lines runs beside it. Its figures stand a gutter apart. When the text
  beside the scenes of a pair of lines is too short to fill them, all the
  scenes of that pair grow together, until the room left is what the shorter
  line can reach; the longer line is then set a little smaller to match. People already stand the full height, so
  only the beasts, birds and things grow toward it, and each group stops at a
  size of its own; a sack never stands as tall as a man.
- **The text of a scene pair** is one block. Both lines start at the start
  scene and end at one point, as wide as the shorter line can grow at full
  height. The end scene closes up against that point, so any wall left over
  lies by the frame and never between the text and a scene. The thin rule
  between the two lines runs under the text block only. The run reports how
  much each pair leaves open.
- **A vignette in the text** is a quadrat of one row whose signs carry
  `vignette: true`. It spans its own register and the next one in its episode,
  or the one before when it is the episode's last register. It stands at its
  place in the reading order.
- **Other keys** are ignored, such as `subject`, `writes`, `role`, `flag`, `k`
  and `width`.

### Packing

Every quadrat fits a cell one line high:

- a tall sign spans the height;
- a low sign spans the width, and a lone low sign may run to a quadrat and a
  quarter;
- a small sign takes half the cell.

Stacked and paired signs sit 3% of a quadrat apart, and quadrats sit 4% apart.
That gutter is fixed: a line is justified by scaling its quadrats until they
meet the rules, never by opening the gutters. A line still short after that
lets its width-bound quadrats widen, up to 1.3 times; these are a low sign, or
signs paired side by side. A line too long for its room is set smaller.

### Colours

| `colour`       | Painted                                                     |
| -------------- | ----------------------------------------------------------- |
| `figure`       | red ochre skin, a black wig, a white kilt or long garment   |
| `bird`         | blue or green body, the other colour for the head, red legs |
| `gold`         | gold leaf, solid ink included (a sun's disk)                |
| `water`        | Egyptian blue; water drawn only as lines is painted blue    |
| `plant`        | green, with blue between the stems of a many-stemmed plant  |
| `object`       | yellow ochre, with red ochre on its small parts             |
| `land`         | pink-brown ochre with red dots                              |
| `stroke`       | blue-black                                                  |
| `god:uqaa`     | a gold disk, red flame tongues                              |
| `god:uznera`   | a white lotus, green leaves, a red serpent                  |
| `god:qearet`   | white tablets on a gold beam and post                       |
| `god:rethsaar` | a gold roll, a turquoise quill, a red cord                  |
| `god:chaqur`   | a green serpent, a gold bolt                                |

### Paint maps

How a sign is painted belongs to the font. `--paint` names the font's
`paint.json`, and the `paint.py` beside it finds each sign's enclosed regions.
The default is the `fonts` checkout's `tools/khelathi-zethu-glyphs/paint.json`.
The renderer reads the outlines, finds the regions and places the seeds all
through that module, so the banner sees the same regions as the font's guard
and contact sheets. The font, the sign table and the paint maps must come from
one checkout of the font. To render against a fonts worktree, pass all three:

```sh
F=~/dev/HeroicLands/fonts/.claude/worktrees/<name>
build/banner-meqes/.venv/bin/python utils/banner-meqes/render.py --crops \
  --font $F/fonts/KhelathiZethuGlyphs-Regular.ttf \
  --encoding $F/tools/khelathi-zethu-glyphs/encoding.json \
  --paint $F/tools/khelathi-zethu-glyphs/paint.json
```

`paint.json` lists its `categories`, a default category per sign group under
`defaults`, and under `signs`, per sign id, its regions. Each region is a seed
point in glyph units with its `paint`. A sign may also give a `default` for
regions no seed reaches, and an `outline` category. The renderer's palette gives
each category its colour:

| Category                                                        | Painted                                                                                            |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `skin-male`                                                     | red ochre                                                                                          |
| `skin-female`                                                   | yellow ochre                                                                                       |
| `linen`                                                         | white                                                                                              |
| `hair`                                                          | black                                                                                              |
| `red`                                                           | a strong red, for painted cloth and leather                                                        |
| `pottery`, `faience`, `water`, `plant`, `cord`, `stone`, `wood` | their materials' colours                                                                           |
| `gold`                                                          | gold leaf                                                                                          |
| `ground`                                                        | bare wall: the air between a bow and its string, inside a loop or between a striding figure's legs |

A category with no colour in the palette stops the run. A sign the maps do
not cover is painted by the colour rules below, from its `colour` in the
sequence. That `colour` also decides a few things a map cannot reach: solid
ink on a gold sign is gilded, land carries red dots, and strokes are outlined
blue-black.

### Colour rules

The font draws each sign as a hairline outline. The renderer paints the wall
that a ball a little wider than the hairline can reach from outside the sign.
Everything else inside the outline is filled, so an outline left open by a
hairline or two, such as an ankle stopping short of its foot, is still filled.
Each region's colour comes from its place in the sign (top, foot, size and
shape) by the sign's colour rule. `SIGN_REGIONS` in `render.py` repaints the
regions those rules get wrong, such as a throne. The outline is then painted
as the painters drew it. It is a warm umber line about 0.8 of the font's
hairline, brown on gold leaf and blue-black on strokes. The fill runs under its
trimmed edges.

## How it is lit

Each sign's silhouette becomes a height map. It is rounded at the edge, gently
domed, and grooved along its interior lines. The plaster carries a fine grain
and a very slight unevenness, and the paint varies in tone along the brush.
The light rakes from the upper left:

- edges facing the light are lit, and the far edges fall into shadow;
- each raised form casts a soft shadow down and to the right;
- the ground darkens where the relief meets it;
- gold leaf is shaded from a dark-bronze-to-pale ramp. Its highlights vary
  across a surface, with a specular glint on the lit edge.

The wall falls off from the upper left toward the lower right. The architrave
shadows the frieze and the wall's head, and the columns are shaded as cylinders
with dark flutes. A photographic finish follows: a warm white balance, a soft
tone curve, a bloom on the gold, a slight vignette and fine grain.
