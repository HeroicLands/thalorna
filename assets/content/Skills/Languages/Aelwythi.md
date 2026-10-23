---
shortcode: aelwthlng
name: {full: Aelwythi Language, aliases: []}
type: skill
subType: language
description: "The speech of the island of Aelwyth, given in these pages in the older register of thou and thee."
tags: []

data:
  core: true
  abbreviation: Aelw.
  writtenIn: {map: aelwythi-semaron, font: semaron-kuriale}
  fields: [{name: Ordinary speech, holds: "Everyday words with script or pronunciation notes."}]
  words:
    - "form": "exact"
      "class": "v"
      "gloss": "require or demand"
      "native": [{"map": "aelwythi-semaron", "text": "󰈳󰈵󰉆󰈰󰈹󰉁"}]
      "field": "Ordinary speech"
    - "form": "conquer"
      "class": "v"
      "gloss": "overcome or subdue"
      "native": [{"map": "aelwythi-semaron", "text": "󰈹󰈽󰈼󰈹󰈳󰈿"}]
      "field": "Ordinary speech"
    - "form": "sceptic"
      "class": "n"
      "gloss": "one who doubts"
      "native": [{"map": "aelwythi-semaron", "text": "󰉀󰈹󰈳󰈾󰉁󰈷󰈹"}]
      "field": "Ordinary speech"
    - form: offering
      class: n
      field: Ordinary speech
      gloss: a gift presented
      pronunciation: OFF-ring
      note: "Two syllables in the crossroads charm; this division specifies the contraction, not a new vowel reading."
    - form: courteous
      class: adj
      field: Ordinary speech
      gloss: showing courtesy or respect
      pronunciation: COUR-teous
      note: "Two syllables in the crossroads charm: teous is compressed into one syllable. The division does not prescribe a new vowel reading."
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {byname}"
    given:
      female:
        - "Dunith"
        - "Eda"
        - "Edrun"
        - "Edrith"
        - "Kenrith"
        - "Ethelinda"
        - "Osrun"
        - "Hildwyn"
        - "Leofith"
        - "Mildrun"
        - "Winrith"
        - "Godrith"
        - "Aldrith"
        - "Wilrith"
        - "Leofrith"
        - "Alfrith"
        - "Aldrun"
        - "Godrun"
        - "Dunrun"
        - "Hildrun"
        - "Wilrun"
        - "Winirun"
        - "Elfrun"
        - "Osrith"
        - "Elfith"
        - "Hildith"
      male:
        - "Dunred"
        - "Aldwald"
        - "Wilred"
        - "Kuthmund"
        - "Mildwald"
        - "Harstan"
        - "Hildmund"
        - "Harred"
        - "Harrik"
        - "Edwald"
        - "Wilwin"
        - "Kenstan"
        - "Harmund"
        - "Harwald"
        - "Hildrik"
        - "Kenmund"
        - "Leofred"
        - "Hildstan"
        - "Wilwald"
        - "Kuthstan"
        - "Mildmund"
        - "Aldmund"
        - "Mildstan"
        - "Mildwin"
        - "Dunwald"
        - "Harwin"
        - "Leofwald"
        - "Aldrik"
        - "Godwald"
        - "Kenwin"
        - "Winimund"
        - "Winirik"
        - "Winiwald"
        - "Alfmund"
        - "Dunmund"
        - "Kenwald"
        - "Kuthwald"
        - "Dunrik"
        - "Mildrik"
        - "Kuthrik"
        - "Wilrik"
    byname:
      - "Adwell"
      - "Alverton"
      - "Ashby"
      - "Barnwell"
      - "Brandon"
      - "Browning"
      - "Chilton"
      - "Chilwell"
      - "Dunwell"
      - "Garmon"
      - "Grayling"
      - "Harden"
      - "Harding"
      - "Helmsley"
      - "Osgood"
      - "Sherwin"
      - "Somervell"
      - "Storton"
      - "Wigmore"
      - "Winwik"
      - "Wolford"
      - "Koldwik"
      - "Greywik"
      - "Thornwell"
      - "Ravenwell"
      - "Stormwell"
      - "Hushwell"
      - "Brynley"
      - "Thornley"
      - "Greymore"
      - "Highmore"
      - "Ravenmore"
      - "Highden"
      - "Thornden"
      - "Ravenden"
      - "Kolddon"
      - "Highdon"
      - "Wolfwik"
      - "Wolfley"
      - "Wolfden"
      - "Storwik"
      - "Storley"
      - "Somerton"
      - "Sherley"
      - "Hardwell"
      - "Wigwik"
      - "Wigden"
      - "Alverwik"
      - "Alverley"
      - "Brandwik"
      - "Brandley"
      - "Brownley"
      - "Chilmore"
      - "Dunwik"
      - "Dunmore"
      - "Winley"
      - "Barnley"
      - "Adwik"
  scope:
    types: [place, being]
    paths:
      - Regions/Ankaris/Aureldia/Aelwyth/Aldorath/
      - Regions/Ankaris/Aureldia/Aelwyth/Dunavarre/
      - Regions/Ankaris/Aureldia/Aelwyth/Ondareth/
      - Regions/Ankaris/Aureldia/Aelwyth/Stormveld/
      - Regions/Ankaris/Aureldia/Aelwyth/Ironfells/Vardain_Valleys/
    addresses:
      - place-aelwyth
      - place-veldareth
      - place-vardanreach
      - place-ironfells
      - place-vorgald
      - place-hallowwood
    cultures: [aelwythanclt]
    skip: [place-aldorathrgn, place-vardainvalleys]
  elements:
    - {form: ash, position: opening, kind: place, sense: the ash tree, examples: [Ashford]}
    - {form: bryn, position: opening, kind: place, sense: a hill, examples: [Brynwold]}
    - {form: grey, position: opening, kind: place, sense: "grey, weathered", examples: [Greywater]}
    - {form: kold, position: opening, kind: place, sense: cold, examples: [Koldbek]}
    - {form: high, position: opening, kind: place, sense: high, examples: [Highfold]}
    - {form: stony, position: opening, kind: place, sense: full of stones, examples: [Stonyhaugh]}
    - {form: thorn, position: opening, kind: place, sense: the thorn bush, examples: [Thornbury]}
    - {form: raven, position: opening, kind: place, sense: the raven, examples: [Ravenmoor]}
    - {form: storm, position: opening, kind: place, sense: storm, examples: [Stormplain]}
    - {form: hush, position: opening, kind: place, sense: silence, examples: [Hushwood]}
    - {form: king, position: opening, kind: place, sense: the king, examples: [Kingshollow]}
    - form: s
      position: link
      kind: place
      sense: "belonging to, of the part before it"
      examples: [Kingshollow]
    - {form: dun, position: opening, kind: place, sense: "dark, dun-coloured", examples: [Dunmere]}
    - {form: kaer, position: opening, kind: place, sense: a fort, examples: [Kaerwynd]}
    - form: sunner
      position: opening
      kind: place
      sense: warmed by the sun
      examples: [Sunnerslade]
    - {form: sunder, position: opening, kind: place, sense: split apart, examples: [Sunderfells]}
    - form: wray
      position: opening
      kind: place
      sense: "a nook, a hidden corner"
      examples: [Wraymouth]
    - {form: thren, position: opening, kind: place, sense: a lament, examples: [Threndale]}
    - {form: var, position: opening, kind: place, sense: of the Vardain, examples: [Vargate]}
    - {form: nord, position: opening, kind: place, sense: north, examples: [Nordfells]}
    - form: aldor
      position: opening
      kind: place
      sense: of the Aldorath kings
      examples: [Aldorvale]
    - {form: iron, position: opening, kind: place, sense: iron, examples: [Ironfells]}
    - {form: ford, position: closing, kind: place, sense: a crossing, examples: [Ashford]}
    - {form: wold, position: closing, kind: place, sense: high open upland, examples: [Brynwold]}
    - {form: march, position: closing, kind: place, sense: a border country, examples: [Wyndmarch]}
    - form: haugh
      position: closing
      kind: place
      sense: low meadow by a river
      examples: [Stonyhaugh]
    - {form: bek, position: closing, kind: place, sense: a stream, examples: [Koldbek]}
    - {form: dale, position: closing, kind: place, sense: a valley, examples: [Threndale]}
    - form: water
      position: closing
      kind: place
      sense: a river or a broad water
      examples: [Greywater]
    - {form: mere, position: closing, kind: place, sense: a lake, examples: [Dunmere]}
    - form: vale
      position: closing
      kind: place
      sense: "a broad, fertile valley"
      examples: [Aldorvale]
    - form: hollow
      position: closing
      kind: place
      sense: "a hollow, a sheltered place"
      examples: [Kingshollow]
    - form: slade
      position: closing
      kind: place
      sense: a grassy valley floor
      examples: [Sunnerslade]
    - {form: bury, position: closing, kind: place, sense: a fortified town, examples: [Thornbury]}
    - {form: moor, position: closing, kind: place, sense: open wet upland, examples: [Ravenmoor]}
    - form: mouth
      position: closing
      kind: place
      sense: where a river meets the sea
      examples: [Wraymouth]
    - form: fells
      position: closing
      kind: place
      sense: "high, bare mountain country"
      examples: [Nordfells]
    - form: levels
      position: closing
      kind: place
      sense: "flat, low-lying ground"
      examples: [Greylevels]
    - form: gate
      position: closing
      kind: place
      sense: a pass or an entrance
      examples: [Vargate]
    - form: fold
      position: closing
      kind: place
      sense: "a pen, a high pasture"
      examples: [Highfold]
    - {form: wood, position: closing, kind: place, sense: a wood, examples: [Hushwood]}
    - form: plain
      position: closing
      kind: place
      sense: open level country
      examples: [Stormplain]
    - form: veil
      position: closing
      kind: place
      sense: a screen of mist or cloud
      examples: [Stormveil]
    - form: hallow
      position: either
      kind: place
      sense: "holy, set apart"
      examples: [Brynhallow]
    - form: wynd
      position: either
      kind: place
      sense: a narrow way between hills
      examples: [Wyndmarch]
    - {form: ald, position: opening, kind: given, sense: old, examples: [Aldwald]}
    - {form: ed, position: opening, kind: given, sense: "fortune, wealth", examples: [Eda]}
    - {form: os, position: opening, kind: given, sense: a god, examples: [Osrun]}
    - {form: god, position: opening, kind: given, sense: good, examples: [Godrun]}
    - {form: leof, position: opening, kind: given, sense: dear, examples: [Leofred]}
    - {form: wil, position: opening, kind: given, sense: will, examples: [Wilred]}
    - {form: wini, position: opening, kind: given, sense: friend, examples: [Winimund]}
    - {form: alf, position: opening, kind: given, sense: the elf-folk, examples: [Alfmund]}
    - {form: elf, position: opening, kind: given, sense: the elf-folk, examples: [Elfrun]}
    - {form: kuth, position: opening, kind: given, sense: known, examples: [Kuthmund]}
    - {form: dun, position: opening, kind: given, sense: dark, examples: [Dunith]}
    - {form: ken, position: opening, kind: given, sense: bold, examples: [Kenmund]}
    - {form: har, position: opening, kind: given, sense: "a host, an army", examples: [Harwald]}
    - {form: mild, position: opening, kind: given, sense: gentle, examples: [Mildrun]}
    - {form: ethel, position: opening, kind: given, sense: noble, examples: [Ethelinda]}
    - {form: hild, position: opening, kind: given, sense: battle, examples: [Hildwyn]}
    - {form: mund, position: closing, kind: given, sense: a protector, examples: [Hildmund]}
    - {form: rik, position: closing, kind: given, sense: a ruler, examples: [Harrik]}
    - {form: win, position: either, kind: given, sense: a friend, examples: [Wilwin]}
    - {form: wyn, position: closing, kind: given, sense: joy, examples: [Hildwyn]}
    - {form: stan, position: closing, kind: given, sense: stone, examples: [Harstan]}
    - {form: wald, position: closing, kind: given, sense: rule, examples: [Wilwald]}
    - {form: ith, position: closing, kind: given, sense: strife, examples: [Dunith]}
    - {form: rith, position: closing, kind: given, sense: strength, examples: [Edrith]}
    - {form: run, position: closing, kind: given, sense: "a secret, a rune", examples: [Edrun]}
    - form: a
      position: closing
      kind: given
      sense: the ending of a woman's name
      examples: [Eda]
    - {form: red, position: either, kind: given, sense: counsel, examples: [Dunred]}
    - {form: lind, position: either, kind: given, sense: "soft, gentle", examples: [Ethelinda]}
    - {form: ad, position: opening, kind: byname, sense: fortune, examples: [Adwell]}
    - form: alver
      position: opening
      kind: byname
      sense: belonging to the elf-folk
      examples: [Alverton]
    - {form: barn, position: opening, kind: byname, sense: "a barn, a store", examples: [Barnwell]}
    - {form: brand, position: opening, kind: byname, sense: a burnt clearing, examples: [Brandon]}
    - {form: brown, position: opening, kind: byname, sense: brown, examples: [Browning]}
    - {form: chil, position: opening, kind: byname, sense: "cold, chill", examples: [Chilton]}
    - {form: gar, position: opening, kind: byname, sense: a spear, examples: [Garmon]}
    - {form: gray, position: opening, kind: byname, sense: grey, examples: [Grayling]}
    - {form: hard, position: opening, kind: byname, sense: "hardy, stout", examples: [Harding]}
    - {form: helm, position: opening, kind: byname, sense: a helm, examples: [Helmsley]}
    - {form: os, position: opening, kind: byname, sense: a god, examples: [Osgood]}
    - {form: sher, position: opening, kind: byname, sense: bright, examples: [Sherwin]}
    - {form: somer, position: opening, kind: byname, sense: summer, examples: [Somervell]}
    - {form: stor, position: opening, kind: byname, sense: great, examples: [Storton]}
    - {form: wig, position: opening, kind: byname, sense: battle, examples: [Wigmore]}
    - {form: wolf, position: opening, kind: byname, sense: the wolf, examples: [Wolford]}
    - form: ton
      position: closing
      kind: byname
      sense: "a farm, a settlement"
      examples: [Chilton]
    - {form: well, position: closing, kind: byname, sense: a spring, examples: [Barnwell]}
    - {form: vell, position: closing, kind: byname, sense: a spring, examples: [Somervell]}
    - form: wik
      position: closing
      kind: byname
      sense: "a dwelling, a dairy farm"
      examples: [Winwik]
    - {form: ley, position: closing, kind: byname, sense: a clearing, examples: [Helmsley]}
    - {form: by, position: closing, kind: byname, sense: a homestead, examples: [Ashby]}
    - {form: more, position: closing, kind: byname, sense: a moor, examples: [Wigmore]}
    - {form: den, position: closing, kind: byname, sense: a wooded valley, examples: [Harden]}
    - {form: don, position: closing, kind: byname, sense: a hill, examples: [Brandon]}
    - {form: ing, position: closing, kind: byname, sense: the kin of, examples: [Harding]}
    - form: ling
      position: closing
      kind: byname
      sense: "the small one, the young"
      examples: [Grayling]
    - {form: good, position: closing, kind: byname, sense: good, examples: [Osgood]}
    - {form: mon, position: closing, kind: byname, sense: a man, examples: [Garmon]}
    - {form: win, position: either, kind: byname, sense: a friend, examples: [Winwik]}
  naming:
    draws:
      - {kind: place, elements: [place]}
      - {kind: given, elements: [given]}
      - {kind: byname, elements: [byname, place]}
  register:
    - {name: Adwell, kind: byname, built: [ad, well]}
    - {name: Dunith, kind: given, built: [dun, ith]}
    - {name: Aldorvale, kind: place, built: [aldor, vale]}
    - {name: Dunred, kind: given, built: [dun, red]}
    - {name: Aldwald, kind: given, built: [ald, wald]}
    - {name: Wilred, kind: given, built: [wil, red]}
    - {name: Alverton, kind: byname, built: [alver, ton]}
    - {name: Ashby, kind: byname, built: [ash, by]}
    - {name: Ashford, kind: place, built: [ash, ford]}
    - {name: Ashwold, kind: place, built: [ash, wold]}
    - {name: Barnwell, kind: byname, built: [barn, well]}
    - {name: Brandon, kind: byname, built: [brand, don]}
    - {name: Browning, kind: byname, built: [brown, ing]}
    - {name: Brynhallow, kind: place, built: [bryn, hallow]}
    - {name: Brynwold, kind: place, built: [bryn, wold]}
    - {name: Kaerwynd, kind: place, built: [kaer, wynd]}
    - {name: Chilton, kind: byname, built: [chil, ton]}
    - {name: Chilwell, kind: byname, built: [chil, well]}
    - {name: Koldbek, kind: place, built: [kold, bek]}
    - {name: Koldford, kind: place, built: [kold, ford]}
    - {name: Kuthmund, kind: given, built: [kuth, mund]}
    - {name: Mildwald, kind: given, built: [mild, wald]}
    - {name: Dunmere, kind: place, built: [dun, mere]}
    - {name: Harstan, kind: given, built: [har, stan]}
    - {name: Dunwell, kind: byname, built: [dun, well]}
    - {name: Eda, kind: given, built: [ed, a]}
    - {name: Hildmund, kind: given, built: [hild, mund]}
    - {name: Edrun, kind: given, built: [ed, run]}
    - {name: Harred, kind: given, built: [har, red]}
    - {name: Harrik, kind: given, built: [har, rik]}
    - {name: Edrith, kind: given, built: [ed, rith]}
    - {name: Edwald, kind: given, built: [ed, wald]}
    - {name: Wilwin, kind: given, built: [wil, win]}
    - {name: Kenrith, kind: given, built: [ken, rith]}
    - {name: Ethelinda, kind: given, built: [ethel, lind, a]}
    - {name: Garmon, kind: byname, built: [gar, mon]}
    - {name: Osrun, kind: given, built: [os, run]}
    - {name: Kenstan, kind: given, built: [ken, stan]}
    - {name: Grayling, kind: byname, built: [gray, ling]}
    - {name: Greylevels, kind: place, built: [grey, levels]}
    - {name: Greywater, kind: place, built: [grey, water]}
    - {name: Hallowwood, kind: place, built: [hallow, wood]}
    - {name: Harden, kind: byname, built: [hard, den]}
    - {name: Harding, kind: byname, built: [hard, ing]}
    - {name: Harmund, kind: given, built: [har, mund]}
    - {name: Harwald, kind: given, built: [har, wald]}
    - {name: Helmsley, kind: byname, built: [helm, s, ley]}
    - {name: Highfold, kind: place, built: [high, fold]}
    - {name: Hildwyn, kind: given, built: [hild, wyn]}
    - {name: Hildrik, kind: given, built: [hild, rik]}
    - {name: Hushwood, kind: place, built: [hush, wood]}
    - {name: Ironfells, kind: place, built: [iron, fells]}
    - {name: Kenmund, kind: given, built: [ken, mund]}
    - {name: Kingshollow, kind: place, built: [king, s, hollow]}
    - {name: Leofred, kind: given, built: [leof, red]}
    - {name: Leofith, kind: given, built: [leof, ith]}
    - {name: Mildrun, kind: given, built: [mild, run]}
    - {name: Nordfells, kind: place, built: [nord, fells]}
    - {name: Osgood, kind: byname, built: [os, good]}
    - {name: Hildstan, kind: given, built: [hild, stan]}
    - {name: Wilwald, kind: given, built: [wil, wald]}
    - {name: Kuthstan, kind: given, built: [kuth, stan]}
    - {name: Ravenmoor, kind: place, built: [raven, moor]}
    - {name: Sherwin, kind: byname, built: [sher, win]}
    - {name: Somervell, kind: byname, built: [somer, vell]}
    - {name: Stonyhaugh, kind: place, built: [stony, haugh]}
    - {name: Stormplain, kind: place, built: [storm, plain]}
    - {name: Stormveil, kind: place, built: [storm, veil]}
    - {name: Storton, kind: byname, built: [stor, ton]}
    - {name: Sunderfells, kind: place, built: [sunder, fells]}
    - {name: Sunderwynd, kind: place, built: [sunder, wynd]}
    - {name: Sunnerslade, kind: place, built: [sunner, slade]}
    - {name: Thornbury, kind: place, built: [thorn, bury]}
    - {name: Threndale, kind: place, built: [thren, dale]}
    - {name: Threnhallow, kind: place, built: [thren, hallow]}
    - {name: Vargate, kind: place, built: [var, gate]}
    - {name: Wigmore, kind: byname, built: [wig, more]}
    - {name: Mildmund, kind: given, built: [mild, mund]}
    - {name: Winrith, kind: given, built: [win, rith]}
    - {name: Winwik, kind: byname, built: [win, wik]}
    - {name: Wolford, kind: byname, built: [wolf, ford]}
    - {name: Wraymouth, kind: place, built: [wray, mouth]}
    - {name: Wyndmarch, kind: place, built: [wynd, march]}
    - {name: Wilrith, kind: given, built: [wil, rith]}
    - {name: Wilstan, kind: given, built: [wil, stan]}
    - {name: Thornwell, kind: byname, built: [thorn, well]}
    - {name: Dunwald, kind: given, built: [dun, wald]}
    - {name: Ravenwell, kind: byname, built: [raven, well]}
    - {name: Mildwin, kind: given, built: [mild, win]}
    - {name: Stormwell, kind: byname, built: [storm, well]}
    - {name: Mildstan, kind: given, built: [mild, stan]}
    - {name: Greywik, kind: byname, built: [grey, wik]}
    - {name: Kenwin, kind: given, built: [ken, win]}
    - {name: Highmore, kind: byname, built: [high, more]}
    - {name: Koldwik, kind: byname, built: [kold, wik]}
    - {name: Dunmore, kind: byname, built: [dun, more]}
    - {name: Godrun, kind: given, built: [god, run]}
    - {name: Winley, kind: byname, built: [win, ley]}
    - {name: Aelwyth, kind: place, why: The island's name; no element builds it.}
    - name: Alananor
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Aldorath, kind: place, why: "A realm name in -ath, shaped like the mainland names."}
    - name: Aldous
      kind: given
      why: A short or foreign-shaped name that no listed element builds.
    - name: Aléndavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Aran
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Arren
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Audrey
      kind: given
      why: A short or foreign-shaped name that no listed element builds.
    - {name: Avis, kind: given, why: A short or foreign-shaped name that no listed element builds.}
    - name: Baloth
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Baridan
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Blackkiln Priory, kind: place, why: A place name of two words; no element builds it.}
    - name: Kélavren
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Kúdavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Dorrin, kind: place, why: A Vardain village name; no element builds it.}
    - name: Dúnavarre
      kind: place
      why: A realm name shaped like the mainland names; no element builds it.
    - {name: Eldskari, kind: byname, why: A Nordmal name borne by an Aelwythan of Nordmen descent.}
    - name: Elowir
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Enéavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Geldar
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Hafringur
      kind: byname
      why: A Nordmal name borne by an Aelwythan of Nordmen descent.
    - name: Hawise
      kind: given
      why: A short or foreign-shaped name that no listed element builds.
    - {name: Hudakal, kind: place, why: A Khazari name.}
    - name: Háravrel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Ilara
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Kadilem
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Kalm, kind: place, why: A Vardain village name; no element builds it.}
    - name: Larad
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Larnavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Lewknor
      kind: byname
      why: A short or foreign-shaped name that no listed element builds.
    - name: Letek
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Loris
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Lúavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Maelvri
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Marrik
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Maud, kind: given, why: A short or foreign-shaped name that no listed element builds.}
    - name: Nemirina
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Nethermoot Hollow, kind: place, why: A place name of two words; no element builds it.}
    - name: Nelin
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Nimavren
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Ondareth, kind: place, why: "A realm name in -eth, shaped like the mainland names."}
    - name: Panivel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Rikar
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Rowena
      kind: given
      why: A short or foreign-shaped name that no listed element builds.
    - {name: Sigrún, kind: given, why: A Nordmal name borne by an Aelwythan of Nordmen descent.}
    - name: Stormveld
      kind: place
      why: "Storm joined to veld, an element the lowland names do not use."
    - name: Taravel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Taravren
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Thaeklia
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - name: Thábavel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Thorir, kind: given, why: A Nordmal name borne by an Aelwythan of Nordmen descent.}
    - name: Torad
      kind: given
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Vardanreach, kind: place, why: The Vardain's name for their own country.}
    - {name: Veldareth, kind: place, why: "A city name in -eth, shaped like the mainland names."}
    - {name: Vellik, kind: place, why: A Vardain village name; no element builds it.}
    - {name: Vorgald, kind: place, why: "A Khazari hold, named in the Khazari manner."}
    - name: Vélthravel
      kind: byname
      why: "An Élavendri-form name, borne by a member of the Dúnavarre embassy."
    - {name: Wenlorne Stage, kind: place, why: A place name of two words; no element builds it.}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Pelwar}}
---

Aelwythi is the speech of the island of [[place-aelwyth|Aelwyth]]. Fluency measures the sophistication of expression in Aelwythi, from the halting phrases of a visitor to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The [[skill-aelwthlng#lexicon|Aelwythi Lexicon]] gives the elements the island's names are built from, the register of the names in use, and the names that stand outside the pattern.

## Overview

Aelwythi is the tongue of the three Aelwythan realms, the [[affiliation-kngdmldrth|Kingdom of Aldorath]], the [[affiliation-kingdmdnvr|Kingdom of Dúnavarre]] and the [[affiliation-repblcndrth|Republic of Ondareth]], which share essentially one culture and one speech though they share no political order ([[lore-aelwythanclt|Aelwythan]]). It is spoken in the manor and the market town, at the [[affiliation-dunavarsynod|Synod]]'s harbor and in the [Senate]{.name data-type="affiliation/governmental"}'s portico, and an Aelwythan carries it wherever the island's people go.

Nearly every human on the island descends from the [[lore-pelwarpepl|Pelwar refugees]] who reached it about 1200 BF, and Aelwythi is the speech of those descendants. The notes name no mainland tongue as its parent and give no account of how it parted from the speech the refugees brought, and this page says no more than they do.

Other speech on the island stands apart from it. The [[lore-nordheimnclt|Nordmen]] of [[place-stormveld|Stormveld]] speak [[skill-nordmalng|Nordmal]], and the [[place-pshtrwldrns|Peshtar clans]] keep a language family of their own with no written form. Aelwythi is not the speech of either.

## How Aelwythi sounds

Aelwythi names have two parts, each an old word: a first part such as _Ald-_, _Ed-_, _God-_, _Hild-_ or _Leof-_, and a second such as _-wald_, _-rik_, _-mund_, _-rith_, _-win_ or _-run_.

**The vowels.** _a_, _e_ and _i_ carry most names, with _o_ in _God-_ and _Os-_.

**The consonants.** _w_, _th_, _d_, _l_, _r_, _f_ and _g_ are common. The hard sound is always written _k_, as in _Kuth-_ and _-rik_.

**Endings.** Men's names end in _-wald_, _-rik_, _-mund_, _-win_ or _-red_. Women's names end in _-rith_, _-run_, _-ith_ or _-wyn_.

**The naming elements.** Their hard consonant is written _k_. The prose and verse keep their ordinary readable word spellings, including _c_ and _x_. Its names are new pairings of the old parts, not the attested names of history.

## Beside Élavendri and Vylari

Three tongues meet on Aelwyth, each with its own work. Aelwythi is the island's own speech: plain, direct and quick to take in foreign words. Mainlanders call it coarse; Aelwythans hold that its plainness is honesty.

[[skill-elvndrlng|Élavendri]] is the language of courts and verse. Its grammar draws fine distinctions of rank, courtesy and feeling that Aelwythi leaves unsaid, and it carries prestige at court, above all at [[affiliation-kingdmdnvr|Dúnavarre]], whose Synod keeps close ties with the Élavendren royal house. [[skill-vylarilng|Vylari]] is the language of law, scholarship and treaty, and the learned, clergy, lawyers and diplomats of the island use it as their counterparts across the west do.

Ordinary folk who stay at home speak Aelwythi alone. The travelled and educated commonly have more: nobles and courtiers, the learned, merchants and traders, sailors, and anyone who goes abroad. Such a person speaks Aelwythi, the neighbour's Élavendri, and Vylari for anything written to last. The learned and well-travelled of [[place-elavendre|Élavendre]] likewise speak Aelwythi. Aelwythi and Élavendri have long borrowed words from each other.

## How Aelwythi is written down

Aelwythi is given in these pages in the reader's own language, in a register that stays older than the ordinary prose of the notes. Anything said, sung or recorded in Aelwythi is set in this register throughout: quoted speech, songs, proverbs, oaths, charms and folklore. The notes that describe the language, the people and the land stay in the setting's ordinary present-tense prose; only the text in Aelwythi follows the rules below.

Aelwythi is written in the [[skill-semrnscrpt|Semaron Script]]. The
[[doc-mapaelwsemaron|Aelwythi Semaron Spelling]] converts a passage marked
`lang=aelw` into the Kuriale hand. Its source keeps ordinary readable word
spellings; the [[doc-prnncthlrn#aelwythi|Aelwythi pronunciation rules]] give
them the reconstructed sounds of the older stage.

**Rules for writers.**

- **Grammar.** One person addressed familiarly is _thou_ (subject), _thee_ (object), and _thy_ or _thine_ (possessive). _Thine_ often precedes a vowel and also stands alone; _thy_ before a vowel is possible. _Ye_ and _you_ address several people, or one with respect. A finite present verb with _thou_ commonly takes _-est_ or _-st_, with forms such as _art_, _hast_, _dost_, _canst_, _wilt_ and _shalt_. An auxiliary carries the agreement: _dost thou carry_, with the following verb bare. With _he_, _she_ or _it_, both _-s_ and _-eth_ occur; _hath_, _doth_ and _saith_ are common older forms. Questions and denials allow _dost thou know_, _I know not_, _fear not_, _wilt thou_ and _shalt thou_. Word order may invert for emphasis.
- **Vocabulary.** Words in use around the year 1600, and no others, each in the sense it then had. A word coined, or a sense acquired, in a later age is not used. Where a word is in doubt, a plainer word that was certainly current takes its place.
- **Style.** The cadence and idiom of the older stage, both prose and verse. Antique words scattered through modern sentences are wrong; the sentence itself is built the older way. Verse keeps its metre and rhyme.

**The same rule governs the lexicon.** Any gloss, saying or example written in Aelwythi on the [[skill-aelwthlng#lexicon|Aelwythi Lexicon]] page follows these rules; the lexicon's own commentary stays in ordinary prose.

### Sample passages

A harbor-gate greeting:

> "Whither goest thou, stranger, and what dost thou carry in thy pack? The fog lieth heavy on the water, and the gate is shut ere dark. Tarry with us this night, and we will ask thee nothing more."

A saying of the manors:

> "A word once given is a stone laid in the wall: pluck it out, and the whole house falleth."

A harvest song:

> The wool is shorn, the barley bound,
> The last of summer's gold is ground;
> Fill high the cup, and drink it deep,
> And name the dead that lie asleep.

A charm said at the crossroads:

> Go softly, thou that walkest late,
> And leave thine offering at the gate;
> Who watcheth where the roads divide
> Will let the courteous pass beside.

In the charm, _offering_ and _courteous_ each take two syllables: _off-ring_,
and _cour-teous_ with the second part compressed. These divisions mark the
metre; the vowel readings still follow the pronunciation guide and the word.
_Who_ here means _whoever_. Both the charm and the harvest song have eight
syllables to a line. The contracted _off'ring_ is attested in
[_Henry IV, Part 1_, 4.1](https://internetshakespeare.uvic.ca/doc/1H4_M/scene/4.1/index.html),
and the two-syllable _courteous_ fits the line in
[_A Midsummer Night's Dream_, 3.1](https://shakespeare.mit.edu/midsummer/full.html).
The older verb alternatives are described in the
[language companion's account of third-person endings](https://www.shakespeareswords.com/Public/LanguageCompanion/ThemesAndTopics.aspx?TopicId=40).

## Naming Traditions

Names on Aelwyth are in the reader's own language, and they are kept in the forms already in use. The island's people name by compounding, and the same small stock of elements serves places, people and families.

**A place name is a compound of quality and ground.** The first part says what the place is like or whose it is; the last says what kind of ground it is. _[[place-ashford|Ashford]]_ is a crossing by the ash trees, _[[place-brynwold|Brynwold]]_ the upland of the hills, _[[place-wyndmarch|The Wyndmarch]]_ the border country of the narrow ways, _[[place-stonyhaugh|Stonyhaugh]]_ the stony river meadow, _[[place-coldbeck|Koldbek]]_ the cold stream, _[[place-threndale|Threndale]]_ the valley of lament, and _[[place-greywater|Greywater]]_ the grey river. A joining _s_ marks ownership, as in _[[place-kingsholow|Kingshollow]]_.

**A given name is two elements set together,** and a feminine name often closes on _-a_, _-ith_ or _-rith_: _Leofred_, _Harred_, _Aldwald_, _Hildwyn_, _Edrun_.

**A byname is usually a place.** The family of a farm, a spring or a clearing takes its name: _Chilton_, _Barnwell_, _Helmsley_, _Ashby_, _Winwik_. A byname closing on _-ing_ marks kin, as _Harding_ and _Browning_ do, and one closing on _-ling_ marks the small or the young, as _Grayling_ does.

**Some names stand outside the pattern.** The realm names in _-ath_ and _-eth_ (_Aldorath_, _Ondareth_, _[[place-veldareth|Veldareth]]_), _Aelwyth_ itself, a few place names of [[lore-vardain|the Vardain]] and the [[lore-flkkhazar|Khazár Folk]], the Élavendri-form names of the Dúnavarre embassy, and the Nordmal names of Aelwythans of Nordmen descent are all attested and are kept as written. The lexicon lists each with its reason. A new name for the island is built from the listed elements, or it is entered there as an exception.

## Aelwythi Lexicon {#lexicon}

Aelwythi is the speech of Aelwyth, plain, direct and quick to take in foreign words, and the setting gives it in the reader's own language, in the older register set out above. Mainlanders call it coarse; Aelwythans hold that its plainness is honesty. The pronunciation guide states their historical readings; the dictionary's native forms state exceptional Semaron spellings. This page states what the island's names are made of: the small stock of elements that place names, given names and bynames are built from, the register of the names in use, and the names that stand outside the pattern.

The elements are the island's own, and the pattern they make is what keeps a new name from sounding as if it came from another coast. A new place, person or family on Aelwyth is built from the elements below, or it is a plain exception and is entered in the last table with the reason.

## How to read the tables

- **Element** is the word a name is built from, set in backticks.
- **Stands** says where in a name the element may stand. `first` opens a name or stands inside it, `last` closes it, `either` does both, and `link` is a joining letter that stands between two parts and never begins or ends a name.
- **Sense** is what the element means.
- **Example** is a registered name built with it.
- **Built from** joins the elements of a name with `+`. The parts, written one after another, spell the name. A letter that falls double where two parts meet is written once, so `hard` + `den` is Harden.

## Scope

The register holds the place names, given names and bynames of every place and being that one of these rows catches. The type row limits the register to places and beings; a realm or an order that carries a place name is not entered, since its name is the place's. The register also holds the names the island's literature coins, each linked to the work whose title or alias carries it.

```sql
SELECT CASE kind WHEN 'types' THEN 'type' WHEN 'paths' THEN 'path' WHEN 'addresses' THEN 'address' WHEN 'cultures' THEN 'culture' WHEN 'skip' THEN 'skip' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-aelwthlng'
GROUP BY kind ORDER BY CASE kind WHEN 'types' THEN 0 WHEN 'paths' THEN 1 WHEN 'addresses' THEN 2 WHEN 'cultures' THEN 3 WHEN 'skip' THEN 4 END
```

## Making names

**A place name is a compound of what the ground is and what stands on it.** One element says the quality or the owner, a second says the kind of ground: `ash` + `ford` is a crossing by the ash trees, `kold` + `bek` a cold stream, `stony` + `haugh` a stony river meadow. A joining `s` carries ownership, as in Kingshollow.

**A given name is two elements of the old stock set together,** one for the quality and one for the strength it promises: `leof` + `red`, `hild` + `mund`. A feminine name often closes on `a`, or on `ith` or `rith`.

**A byname is a place, a calling or a descent.** Most are the name of a farm, a spring or a clearing: `chil` + `ton`, `barn` + `well`, `helm` + `s` + `ley`. A name ending in `ing` marks kin of the person it names, and one ending in `ling` marks the small or the young.

## Elements

The tables list the elements by the kind of name they build.

### Place-name elements

```sql
SELECT '`' || form || '`' AS "Element",
       CASE element_position WHEN 'opening' THEN 'first' WHEN 'closing' THEN 'last' ELSE element_position END AS "Stands",
       sense AS "Sense", array_to_string(examples, ', ') AS "Example"
FROM elements WHERE language = 'thalorna-note-skill-aelwthlng' AND kind = 'place' ORDER BY position
```

### Given-name elements

```sql
SELECT '`' || form || '`' AS "Element",
       CASE element_position WHEN 'opening' THEN 'first' WHEN 'closing' THEN 'last' ELSE element_position END AS "Stands",
       sense AS "Sense", array_to_string(examples, ', ') AS "Example"
FROM elements WHERE language = 'thalorna-note-skill-aelwthlng' AND kind = 'given' ORDER BY position
```

### Byname elements

A byname draws on these and on the place-name elements above.

```sql
SELECT '`' || form || '`' AS "Element",
       CASE element_position WHEN 'opening' THEN 'first' WHEN 'closing' THEN 'last' ELSE element_position END AS "Stands",
       sense AS "Sense", array_to_string(examples, ', ') AS "Example"
FROM elements WHERE language = 'thalorna-note-skill-aelwthlng' AND kind = 'byname' ORDER BY position
```

## Attested names

### Kinds

```sql
SELECT '`' || kind || '`' AS "Kind",
       array_to_string(list_transform(elements, e -> CASE e WHEN 'byname' THEN 'the byname elements' ELSE 'the ' || e || '-name elements' END), ' and ') AS "Built from"
FROM name_draws WHERE language = 'thalorna-note-skill-aelwthlng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || kind || '`' AS "Kind", coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-aelwthlng' AND why IS NULL ORDER BY position
```

## Names outside the pattern

Each name here is attested and stands as written. None is renamed; each is listed with the reason no element builds it.

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || kind || '`' AS "Kind", why AS "Why"
FROM register WHERE language = 'thalorna-note-skill-aelwthlng' AND why IS NOT NULL ORDER BY position
```
