---
shortcode: lmnphg
name: {full: Luminophage}
type: being
subType: creature
description: "A parasitic ceiling-dwelling predator of lightless depths that weaponizes bioluminescence as a lure to draw wanderers into its grasp."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+5
    end: 1d6+6
    dex: 1d6+10
    agl: 1d6+6
    per: 1d4+13
    aur: 1d6+10
    wil: 1d4+9
    rea: 1d6+6
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Needle Strike
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Needle Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 2}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[lmnphg|Luminophage]]{float=top-left}

The tomb-cutter's lamp gutters as you come round the bend of the passage, and then steadies, and then begins to fade as if its oil were running out, though the bowl is full. Ahead, the passage opens into a burial chamber, and the chamber is lit: a cold, pulsing, green-white glow coming from the ceiling. Something is hanging there. It is pale and translucent, like a great jellyfish made of horn, and the glow runs along channels inside it. From its body hang long jointed arms, eight of them, each ending in a cluster of fine needles, and they sway very slightly. Your lamp goes out. The glow on the ceiling brightens.

# Dossier {#dossier}

The Luminophage is a dreadspawn that hangs from the roofs of dark places: a translucent, segmented body like a jellyfish built on a scorpion's plan, five to eight feet from crown to the tips of its arms, which floats through the air and feeds on light and blood. It drains the light from lamps and torches, glows with what it has taken, and draws prey to its glow, then stings it helpless with needle-tipped arms. It is found in caverns, cut tombs and deep passages, and one has made the cavern-tombs of [[place-zebtrelptslt|Zebt-Relepet Selat]], on the upper river of [[place-aukhelathrgq|Au'Khelathu]], its ground. Like every dreadspawn it was made, it is alive, and it does not breed. The tomb-cutters know it as the thing that eats lamps.

## Presentation

The body is a translucent dome of pale chitin, white to wan gray, shading into a long segmented tail, and through it run channels that pulse with a cold light in green, blue or white. Six to eight jointed arms hang from the underside, each ending in a cluster of fine needles. It hangs from a ceiling by hooked feet at the crown, or floats free in the air, drifting slowly, without wings and without sound. Its glow brightens and dims in a slow rhythm that holds the eye. Near it, every other light weakens: flames shrink and go blue and die, and the luminophage brightens as they go.

## In the Land

Zebt-Relepet is a plain, workmanlike mortuary selat, its cliffs cut with cavern-tombs for the dead and its flats dug for the natron the embalmers need. The luminophage holds the oldest of the cavern-tombs, deep in the cliffs, where the passages run back past the sealed chambers into natural caves no one mapped. It hangs in a chamber for weeks, then drifts along the passages to another. It feeds on bats, on the cave crickets and lizards of the tombs, on the jackals and foxes that come in after the offerings, and on the tomb-cutters, priests and robbers who carry lamps into the dark. It never comes out into daylight.

## Key Behaviors

A luminophage waits on a ceiling, glowing, for days. Light draws it: a lamp coming down a passage brings it drifting toward it, and when it is near enough it drains the flame and grows brighter. Its glow, in a dark place, draws living things in their turn, and a creature that stares at it too long walks toward it. When prey is under it, it drops its arms, drives the needles in, and holds on while the venom takes hold. Then it feeds, slowly, drawing blood through the needles. It is solitary, cautious and intelligent, and it avoids a fight it is not sure of.

## What the Tomb-Cutters Do

The cutters who carve new tombs into the cliffs and the priests of [[affiliation-wethur|Weth'ur]] who serve the dead there have rules for the old passages. Nobody goes into the deep tombs with only one light: a party carries a lamp for each man and a pitch torch besides, and if the lamps start to fade together, everyone turns back at once. A tomb chamber with a cold glow in it is not entered. The cutters have learned that fire hurts the creature, and they keep a pot of burning pitch at the mouth of any passage they work. The embalmers buy its venom when one of the creature's needles can be found broken off in a cutter's arm, and they use it, they say, to keep the dead still. Tomb-robbers who come for the old burials think the creature guards them. The cutters say it guards nothing; it only eats what comes.

## Signs

- Lamps and torches that dim, burn blue and go out in a passage where there is no draft.
- A cold, pulsing green-white glow in a tomb chamber with no lamp in it.
- Bats, jackals and foxes found in the tombs dead and bloodless, with clusters of fine punctures.
- Pale, translucent flakes of shed chitin on a chamber floor, still faintly glowing.
- A man who stood staring at a light in the dark and had to be pulled away from it.

## Combat Strategy

A luminophage opens by draining the party's light and brightening its own glow until someone stares and steps toward it. It strikes the one who comes closest, needling him from above with several arms at once, and holds him while the venom works. Against a party that fights back it drifts out of reach and strikes at whoever is weakest. It avoids a long fight, and fire, which burns its body and overwhelms its senses, makes it withdraw. It is slower in bright light, and it does not follow anyone into daylight.

## Attack Methods

### Needle Strike

The arms drop and drive clusters of fine needles into exposed skin, precisely and from several directions at once. The needles bite deep, and through them the creature injects its venom and draws blood.

## Special Abilities

### Paralytic Venom

The venom spreads fast. A man needled several times loses the use of his limbs and is held helpless while the creature feeds.

### Bioluminescent Lure

Its glow fascinates. A man who looks at it too long walks toward it in spite of himself; a strong will or a clear head can refuse the pull.

### Light Absorption

It drains the light from any flame or lamp near it, snuffing torches in moments and dimming even magical light, and grows brighter with what it takes.

### Darkness Adaptation

It sees perfectly in total darkness and moves through it easily. In strong light it is sluggish and slow to react.

### Fire Weakness

Fire burns its translucent body and overwhelms its senses, and a burning torch thrust at it makes it withdraw.

## Attributes

Strength
: 6-9 (1d4+5)

Endurance
: 7-12 (1d6+6)

Dexterity
: 11-16 (1d6+10)

Agility
: 7-12 (1d6+6)

Perception
: 14-17 (1d4+13)

Aura
: 11-16 (1d6+10)

Will
: 10-13 (1d4+9)

Reasoning
: 7-12 (1d6+6)

Creativity
: 10-13 (1d4+9)
