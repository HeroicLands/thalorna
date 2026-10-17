---
shortcode: frostjaw
name: {full: Frostjaw, aliases: []}
type: being
subType: creature
description: "A predator of ice and deep cold given animal form, pursuing prey relentlessly across frozen wastes, driven by hunger and territorial fury."
tags: [elemental]
data:
  packFolder: elementals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: elemental
  attrRollFormula:
    str: 1d6+17
    end: 1d4+12
    dex: 1d4+8
    agl: 1d4+12
    per: 1d4+10
    aur: 1d4+8
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Frost Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Frost Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Freezing Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Freezing Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 6, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
    - name: Shatter Strike
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Shatter Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 550, calc: "550"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[frostjaw|Frostjaw]]{float=top-left}

The snow on the high fell is hard and the wind has dropped, and in the stillness you hear the ice on the tarn below crack, once, like a whip. On the far shore a wolf is standing. It is far too big for a wolf, as long as a cart, and it is made of ice: clear in places, blue-white in others, patterned all over with frost that moves across it like cloud-shadow, and its breath does not steam, because it is colder than the air. Its eyes are pale and empty. It lowers its head and starts toward you across the frozen tarn, and the ice under its feet thickens and whitens as it comes, and the cold reaches you before it does.

# Dossier {#dossier}

The Frostjaw is an ice elemental in the shape of a great wolf: a spirit of the cold that manifests as ten to twelve feet of living ice, drawn to the deepest cold and to living warmth, which it hunts. It is solitary, territorial and relentless, and where it stays, the winter deepens. One hunts the high folds of [[place-nordfells|The Nordfells]], the cold, wet, nearly empty northern mountains of [[place-stormveld|Stormveld]] on [[place-aelwyth|Aelwyth]], where snow lies on the tops into what passes for summer. The shepherds, turf-cutters and upland steadings of the fells know it as the winter that walks. Like every elemental it can be destroyed in the material world, and it comes back, usually to the same fell, usually in the dead of winter.

## Presentation

The frostjaw is shaped like a huge wolf, heavy in the shoulder and long in the leg, and its body is ice: clear in places, cloudy blue-white in others, with patterns of frost that shift over its surface like the shadows of clouds. Its eyes are pale and have no pupils. Its teeth and claws are icicles, very sharp. Snow settles on it and does not melt. The air round it is bitterly cold, and frost spreads on the ground where it stands; water freezes at its feet. It moves silently except for the creak and crack of ice as it runs. It smells of nothing at all.

## In the Land

The Nordfells run along the whole northern edge of Stormveld, higher and colder than [[place-ironfells|The Ironfells]] to the south, with narrow boggy valleys and cliffs and inlets on the northern coast. The frostjaw hunts the high folds and the snowfields above the valleys, and in hard winters it comes down into the valleys after the steadings' flocks and the warmth of their hearths. It is drawn to heat: warm-blooded animals, a lit steading, a fire on a hillside, a man. It does not go down to the coast, where the sea keeps the cold off, and in the brief summer it withdraws to the high snow or vanishes until the cold comes back.

## Key Behaviors

A frostjaw hunts alone, by day and by night, following warmth. It runs down deer, sheep and men across the snow, and it seems to delight in killing warm things and leaving them frozen. It slows its prey with its breath and its cold before it closes. It claims a stretch of high fell and stays in it for months, and the longer it stays the colder that ground becomes: the tarns freeze solid, the heather dies, and snow lies there after it has melted everywhere else. When its body is destroyed it shatters into a heap of ice that melts away, and it returns when the cold is deep enough, often with a grudge.

## What the Fell People Do

The shepherds, turf-cutters and steadings of the Nordfells, Nordmen, thralls and the Aelwythan uplanders who acknowledge nobody alike, count the frostjaw a hazard of the high folds and treat it as they treat a blizzard. They bring the flocks down early in a year when frost comes to the high tarns before its time, and they bank their fires and keep their doors shut on still winter nights, because the light and warmth of a steading draws it. Every steading keeps a store of seasoned wood for a great fire, because fire is what drives it off and what destroys it, and a household that has burned through its woodpile to keep the frostjaw away counts it the cheapest winter's work it ever did. The [[affiliation-jrldmstrmvld|Jarldom of Stormveld]]'s hunters, who range the fells, will not hunt it, and the jarl's men in the fells file its kills as raids by the [[lore-grukarfolk|Grukar Folk]].

## Signs

- A tarn or a stretch of bog frozen solid when the ground round it is not.
- Sheep or deer found dead in the snow, frozen hard all the way through, with great tooth-marks.
- Wolf-prints in snow far larger than any wolf's, with frost spreading round each print.
- A crack like a whip from frozen water on a still night.
- A cold that falls suddenly on a fell, and frost forming on clothes and beards in a moment.

## Combat Strategy

A frostjaw slows its prey before it kills it. It breathes freezing air and ice over its enemies to stiffen and trap them, freezes the ground under them to make them fall, and then closes, biting, and shatters what it has frozen. It uses snow and ice as its ground and leads its enemies onto frozen tarns and snow-bridges. It does not give up a chase. Fire is what hurts it: torches, burning brands and a great fire drive it off, and fire magic does it great harm. In warm weather it weakens and withdraws.

## Attack Methods

### Frost Bite

The jaws close and crush, and the cold goes into the wound: the bitten limb stiffens and numbs, and the victim's strength drains as the cold spreads.

### Freezing Breath

The frostjaw breathes a torrent of bitter air and driven ice over everything in front of it. Those caught in it are half frozen, slow, stiff and clumsy, and a long exposure freezes a man where he stands.

### Shatter Strike

The frostjaw strikes a frozen enemy or the frozen ground with its full weight. A frozen limb cracks, frozen ground explodes into shards of ice, and the cold spreads further.

## Special Abilities

### Glacial Resilience

Its body of living ice is hard, heals itself and shrugs off cold entirely. Fire and heat harm it.

### Frozen Territory

In deep winter or on glacial ice it draws strength from the cold and is very hard to stop.

### Freezing Aura

Near it, exposed skin begins to freeze and movement grows sluggish; staying close brings frostbite and then worse.

### Winter's Curse

Where it stays, the cold deepens and stays: water freezes, plants die, and the land becomes more and more like the high ice it came from.

## Attributes

- **Strength:** 18-23 (1d6+17)

- **Endurance:** 13-16 (1d4+12)

- **Dexterity:** 9-12 (1d4+8)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 9-12 (1d4+8)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
