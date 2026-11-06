---
shortcode: eldiragarrun
name: {full: Eldira Garrundeta, given: Eldira, clan: Garrundeta}
type: being
subType: character
description: "A glassworker of Herthema whose bold, nearly abstract windows make enemies of both sides of the town's quarrel over figured glass."
tags: [heroes-and-knaves, guilded, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan]
  occupation: Glassworker
  lore: []
  culture: tarvenanclt
  homes: [herthema]
  affiliations: {cnclhrthm: {rank: 2}}
  gender: female
  species: humanflk
  born: "693.110"
  height: 5' 10"
  weight: 157 lbs
  frame: light
  appearance:
    eye_color: green
    hair_color: dark_brown
    skin_color: olive
    complexion: []
    extra_features: [a tattoo of a wolf on the shoulder]
  packFolder: aureldiatarvenia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-wtunic}
    - {model: sohl-sohl-armorgear-wbrch}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-armorgear-wcap}
    - name: Wooden crate for glass supplies and tools
      type: miscgear
      system: {shortcode: woodencrateforglass, weight: 2, value: 100, durability: 3}
    - name: Glass cutters and scoring tools
      type: miscgear
      system: {shortcode: glasscutters, weight: 0.5, value: 100, durability: 3}
    - name: Colored glass pieces (assorted)
      type: miscgear
      system: {shortcode: coloredglasspieces, quantity: 2, weight: 1, value: 100, durability: 3}
    - name: Metal frames and leads for window assembly
      type: miscgear
      system: {shortcode: metalframesandleads, weight: 0.8, value: 100, durability: 3}
    - name: Glass polishing and smoothing tools
      type: miscgear
      system: {shortcode: glasspolishing, weight: 1, value: 100, durability: 3}
    - name: Furnace materials and fusing supplies
      type: miscgear
      system: {shortcode: furnacematerials, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 2}}
    - {model: sohl-sohl-containergear-bpchmd}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

![[eldiragarrun|Eldira Garrundeta]]{float=top-left}

Eldira Garrundeta is a 26-year-old woman who stands 5'10" tall and is of light build. She has a diamond-shaped face with a hawkish nose, a pronounced chin, slightly pursed lips and dark brows. Her green eyes rest on light and color before they rest on people, and her olive skin carries small white burn scars on the backs of both hands. Her dark brown hair is tied back from the furnace, and a tattoo of a wolf shows on her shoulder when she works in a sleeveless shift.

# Dossier {#dossier}

Eldira Garrundeta was born in [[place-herthema|Herthema]], on the coast of [[place-tarvenirgn|Tarvénia]], to a family with established but not distinguished ties to craftsmanship. Her father was a metalworker of modest reputation, and her mother kept a small herb garden and grew rare plants. From childhood Eldira was fascinated by light and color, particularly the way sunlight changed when it passed through the colored glass of the temple windows. By twelve she was haunting the temple's glassworker, Master [Gerdan]{.name data-type="being/npc"}, begging him to teach her his craft.

Gerdan, who had no children of his own and saw unusual talent, took her on as an informal apprentice. For eight years she learned traditional glasswork: cutting, leading, soldering and the practical making of windows. Even as an apprentice her inclinations ran against the conventional. She tried color combinations her master thought garish, designed patterns that departed from temple tradition, and pushed at what glass could say.

At twenty-three, after Gerdan's death, Eldira set up her own furnace-house in Herthema. Her work, bold, unconventional and sometimes nearly abstract, drew a devoted clientele of reform-minded priests, wealthy collectors and merchants who wanted something no one else had. The town's glass trade is quarreling over whether the old plain standard should give way to the figured glass the merchants' houses buy, and Eldira's work belongs to neither side, so she has made enemies of both. She remains fiercely independent and will not trim her work to win acceptance, which has made her reputation and her enemies together.

## Psyche

### Personality

Eldira is a creature of paradoxes: confident in her vision to the point of stubbornness, yet sensitive to criticism and sometimes paralyzed by doubt about her direction. She is intensely creative but can become obsessive over small details and lose sight of larger work. She is reserved about her own life and quick to be moved by other people's troubles, and she often takes commissions at reduced cost from those in real need.

She has a dry wit and a surprising humor, which show only where she feels safe. She is spiritually inclined in an unconventional way and treats her glasswork as meditation and devotion rather than mere craft. She has arranged her life to keep others at a distance, though she longs for company more than she admits.

### Motivation

Eldira wants to make beauty that says what she believes is true, whether or not it matches what others expect. She means to prove that glass need not be limited to plain windows or the old temple images, and can carry personal and spiritual meaning. She also wants, more quietly, to be counted an artist of the first rank, respected not for keeping the tradition but for having gone beyond it.

### Strengths

Artistic Vision
: Her eye for color and composition, sharpened by drawing, pottery and the stage, sees relationships and balances that others miss.

Technical Skill
: Her hands are precise and strong, and she can carry out what she imagines in glass with both delicacy and force.

Invention
: She works out new techniques when old ones fail her, and other glassworkers of the town have quietly taken up several of them.

Grace at Height
: She is agile and fearless on a scaffold, and comfortable fitting a window from a ladder in a high wind.

Versatility
: She works in pottery, metal and leather and can letter a design, so she can make a whole piece that joins several materials.

### Weaknesses

Limited Large-Scale Experience
: She excels at small pieces and moderate windows but has not finished a great one. Large commissions frighten her, and she struggles with the planning they need.

Sensitivity to Criticism
: She knows criticism is necessary and takes it personally all the same. A harsh word about her work can stop her for weeks.

Emotional Isolation
: Her skill at keeping her own counsel has kept her from any close bond and leaves her lonely, though she rarely admits it.

Commercial Naïveté
: She undervalues her work, takes commissions at poor rates and struggles to bargain with clients.

Few Patrons
: The guild's masters on both sides of the quarrel steer commissions away from her, and she has none of the long patronage the established furnace-houses enjoy.

## Social

### Patrons

A priest of the [[affiliation-brazemas|Faith of Brazemas]]
: A reform-minded Priest of Storms who commissioned windows from her that express the god without picturing him. He is her chief patron and her loudest defender against more conservative priests.

Lady [[being-oltremalizel|Oltrema Lizelis]]
: A wealthy widow of [[place-valthari|Valthari]] with refined taste, who has commissioned several great pieces for her manor and pays premium prices for original work.

Master Gerdan's estate
: Her master's will left a small sum to commission one work from her every year, which gives her a little security and keeps faith with their work together.

### Enemies

[[being-vlmrjthrn|Velmar Gútharen]]
: The master who speaks for the old plain standard on the bench of the [Glassworkers' Guild of Herthema]{.name data-type="affiliation/guild"}. He calls her work a corruption of the craft and steers clients toward the furnace-houses that keep the standard.

[Zekudi Ozkuregi]{.name data-type="being/npc"}
: A younger glassworker who studied in her furnace-house and left it bitterly, feeling himself outmatched. He has taken up the figured work of the younger masters to put distance between himself and her, and calls her novelties an abandonment of proper technique.

### Affiliations

- **[[affiliation-cnclhrthm|Council of Herthema]]**: Eldira is a Freeman of the town, entitled to trade in it and to plead before the council.
- **The Glassworkers' Guild of Herthema**: She holds a master's place in the guild and sits uneasily in it. She attends its meetings rarely and resists its rulings.

## Plot Hooks

1. **The guild's quarrel.** The Glassworkers' Guild of Herthema is divided between the old masters and the younger masters who make figured glass, and Eldira's abstract work makes enemies of both. She asks a party to learn who has been breaking her kiln-loads.
2. **The widow's commission.** [[being-oltremalizel|Oltrema Lizelis]] of Valthari wants a window made for her manor in a style no guild has attempted. Eldira asks a party to carry the sketches down the coast without letting the guild see them.
3. **The lost master's work.** Eldira has found fragments of glass by her old master Gerdan in an abandoned temple, work unlike any she has seen. She asks a party to escort her to the temple and keep the site quiet.
