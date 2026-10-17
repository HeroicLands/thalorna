---
shortcode: skysrpnt
name: {full: Sky Serpent, aliases: []}
type: being
subType: creature
description: "A serpentine aerial predator up to thirty feet long that glides from mountain heights and canopies to ambush and constrict prey."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+17
    end: 1d6+12
    dex: 1d6+11
    agl: 1d6+13
    per: 1d6+12
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 6, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Constricting Coils
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coils
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 21, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forebody, shortcode: torsozone, probWeight: 11}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.52
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "-2"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[skysrpnt|Sky Serpent]]{float=top-left}

The resin-cutter in front of you stops on the path and looks up, and so do you. High in the canopy, where the light comes through in green and gold, something long is crossing the gap between two crowns: a snake, impossibly long, flat as a ribbon, with fins of thin skin spread along both its sides, sliding through the air from one tree to the next without a sound. It shimmers green and blue and silver and is hard to keep in sight against the leaves and the sky. It lands in the far crown, coils round a branch, and turns its head. The resin-cutter takes you by the arm and walks you briskly back the way you came.

# Dossier {#dossier}

The Sky Serpent is a gliding constrictor of the tall forest, twenty to thirty feet long but slender, about a hundred and fifty pounds, with broad fins of skin along its flanks that it spreads to glide from tree to tree or down from a height onto its prey. It bites with a venom that weakens and numbs, and it kills by constriction. In [[place-vedyarargn|Vedyara Region]] its country is the forest of [[place-bharavarivr|The Bharava]]: the endowed estates of [[place-bharavavana|Bharavavana]] and, above them, [[place-forestnoroad|The Forest of No Road]], which is unclaimed. It hunts monkeys, birds, deer and the forest's pigs, and it takes the gatherers who work the canopy for resin and lac.

## Presentation

A sky serpent is a long, flattened snake, two to four feet across with its fins spread and much narrower with them folded, and its scales are iridescent, shifting from green through blue to silver as the light moves on them. Along both flanks run frills of thin, ribbed skin that fold flat against the body at rest and spread like sails when it launches. The head is small and narrow, with forward-set, slit-pupiled eyes and a mouth of long, needle-sharp, backward-curved fangs. The tail is long and muscular and steers the glide. On the ground a sky serpent moves slowly, in heavy loops, and it does not like to stay there; in the trees it is fast and sure. It makes no sound but a hiss when cornered.

## In the Land

Sky serpents need tall trees, a broken canopy with gaps to glide across, and water near. Bharavavana gives them six hundred miles of it along the lower river, and the Forest of No Road above the gold highlands gives them more, where nobody cuts anything and the oldest trees stand. Each serpent holds a stretch of canopy a mile or two across, with a resting-tree near a river or a pool, and it glides out from high perches over the gaps, the clearings and the river channels to hunt. It comes down to the water in the heat of the day and lies along the margins in the wetlands and shallows. They are thickest along the pilgrim road's river reaches, where the canopy is broken by the river and the clearings.

## Key Behaviors

A sky serpent hunts by day. It climbs high, waits on a branch above a gap or a game trail, and when something moves below, it launches, spreads its fins, and glides down onto it from above and behind, strikes, and wraps. It bites and holds while its coils tighten, and it waits while the venom and the coils do their work. It swallows a monkey or a small deer whole and then lies up in its resting-tree for a week to digest. It is solitary except in the breeding season, when pairs are seen gliding together. A serpent that has taken a man in a clearing comes back to that clearing.

## What the Gatherers Do

The forest's gathering peoples, who cut the resin, scrape the lac and climb for honey and pepper under the estates' licenses, know every serpent's tree on their season's paths and work round it. A gatherer climbing a tall tree goes up with a partner below him and a knife on a cord round his wrist, and nobody works alone under a broken canopy at midday. A serpent's shed skin, found whole on the forest floor, is sold at the margin for a good price; the estates' keepers send it down the river to the temple physicians, who grind it into a remedy for numbness and palsy. The pilgrims on the road are told by the keepers of [[place-bhrvdvsthna|The Bharava-Devastena Hostels]] not to sleep in clearings and not to step off the road to look at anything in the trees.

## Signs

- A long, ribbon-wide skin shed on the forest floor, translucent and shimmering, with the impressions of fins along it.
- Monkeys that scream and scatter from a stretch of canopy and do not come back to it.
- A broad, smooth trail in the mud at the edge of a pool, with no footprints.
- A deer or pig carcass with its bones crushed and two deep fang-marks, found under a tall tree.
- A glimpse of something long crossing a gap in the canopy without a sound.

## Combat Strategy

A sky serpent attacks from above and from surprise. It glides down onto a man's back or shoulders, bites, and throws its coils round him before he can turn. It tries to pin his arms and wrap his chest, and holds on while the venom works. If the first attack fails or a party fights it off, it does not stay on the ground to fight: it climbs the nearest tall trunk, gains height, and glides away. In dense undergrowth with no gap above it, it is slow and much less dangerous.

## Attack Methods

### Venomous Bite

The serpent strikes with its long fangs, at the neck, the shoulder or the arm, and holds on. The fangs drive deep and the bite bleeds, and the venom goes in with it.

### Constricting Coils

The serpent throws loop after loop round its victim's body and squeezes, tightening every time he breathes out. A man caught with his arms pinned cannot fight back, and the coils crush ribs and stop breath. He can break free only by main strength or with help.

## Special Abilities

### Diving Strike

A serpent gliding down from a height hits with its whole weight and knocks a man off his feet, and it is wrapped round him before he is up.

### Gliding Mastery

With its fins spread, the serpent glides a long way from a height in silence, turning and changing speed with movements of its body, and lands where it chooses.

### Venomous Strike

The venom weakens and numbs, and a large dose brings a spreading paralysis. It works slowly and is very effective against an unarmored man.

### Aerial Agility

Gliding, it turns sharply, drops steeply and changes direction with no warning, and it is hard to hit in the air.

### Predatory Vision

Its eyes catch movement on the ground and in the lower canopy from high in the trees.

### Heat Sensing

Older serpents sense the warmth of a living body, and find warm-blooded prey hidden in leaves or in darkness.

## Attributes

Strength
: 18-23 (1d6+17)

Endurance
: 13-18 (1d6+12)

Dexterity
: 12-17 (1d6+11)

Agility
: 14-19 (1d6+13)

Perception
: 13-18 (1d6+12)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
