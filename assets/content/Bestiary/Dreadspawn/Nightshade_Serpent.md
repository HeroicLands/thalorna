---
shortcode: nghtshds
name: {full: Nightshade Serpent}
type: being
subType: creature
description: "A made serpent of malign intelligence that haunts the dark, feeding on fear and suffering as much as on flesh."
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
    str: 1d4+12
    end: 1d4+10
    dex: 1d4+8
    agl: 1d4+12
    per: 1d4+10
    aur: 1d4+8
    wil: 1d4+8
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Venomous Fang Strike
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Fang Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Constricting Coil
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 69
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coil
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
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

![[nghtshds|Nightshade Serpent]]{float=top-left}

The ferryman has stopped poling. The reed-boat drifts in the still channel between two of the shrine-islands, and the lamps of the nearer temple are reflected in water as flat as a plate. On the far bank, under the papyrus, the shadow is deeper than it should be, and it is moving. Out of it slides a serpent as long as the boat, as thick as a man's thigh, its scales midnight blue and black, and the light does not quite settle on it: the scales swim when you look at them sidelong. Its eyes are a sickly green with no pupil in them. It lowers its head to the water and comes across the channel toward you without a ripple.

# Dossier {#dossier}

The Nightshade Serpent is a dreadspawn in the shape of a great snake, twelve to eighteen feet long and as thick as a man's thigh, which hunts out of shadow, poisons with a venom that brings creeping paralysis and pain, and kills by constriction. It is clever and cruel, and it seems to feed on fear and suffering as much as on flesh: it lingers over its kills. One lives among the shrine-islands of [[place-selatleterunome|Selat-Leteru]] in the delta of [[place-aukhelathrgq|Au'Khelathu]], a quiet pilgrimage country of marsh-temples, channels and reed-beds, and the ferrymen who carry the pilgrims know it. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

A nightshade serpent is heavy-bodied and powerful, a constrictor's build with a viper's head: broad, flat and wedge-shaped, with long folding fangs. Its scales are midnight blue and black in fine patterns that flow and shift at the edge of sight, so that its outline is never quite clear even in good light. Its eyes glow a pale, sickly green, without pupil or iris. It is silent, and it moves through water and reeds without a sound or a ripple. Where it lies, the shadow is deeper than the light allows, and it steps out of shadow as if out of a doorway.

## In the Land

Selat-Leteru is islands and channels, the temples own much of the dry ground, and sound carries between the islands across the still water. The serpent holds the channels and reed-beds among a cluster of the smaller shrine-islands, lies up by day in the deep shade of the papyrus and in the dark undercrofts of a disused shrine, and hunts by night. It takes waterfowl, fish, cats, the temples' dogs, and pilgrims who walk the island paths after dark. It defends its channels against crocodiles. The cool of the delta winter makes it sluggish; it is most active and most dangerous in the hot months.

## Key Behaviors

The serpent hunts by night, from shadow, and it does more than wait: it follows prey, drives it toward water or a dead end, and strikes when the prey is cornered. It bites first, and then it waits, following at a distance while the venom works, until its prey is helpless and in pain, and only then does it coil and kill. It lingers over the dying. It is intelligent and remembers: it learns the paths the pilgrims use and the hours the temple lamps go out, and it remembers anyone who has hurt it. It is drawn to fear and to quarrels.

## What the Ferrymen and Priests Do

The ferrymen of the shrine-islands tell pilgrims to keep their hands inside the boat and their voices down, and some of them say the second rule is older than the temples' dislike of argument: that a raised voice on the water at night carries to something besides the priests. Pilgrims are not allowed on the island paths after the temple lamps are lit, and the temples keep lamps burning all night along the landings, because the serpent dislikes the light. The priests of [[affiliation-uznera|Uzn'era]] treat a bite with prayer, a cold bath and a tourniquet, and keep the bitten man company through the night, because the pain is the worst of it and fear makes it worse. The disused shrine whose undercroft it lies in has been closed by the temple. The temple's own account of why it was closed does not mention the serpent.

## Signs

- A shadow under papyrus or under a landing that is darker than the light allows and does not move with the reeds.
- A dog or a cat found dead on an island path at dawn, crushed, with two deep fang-marks.
- A broad, smooth track through the reeds at the water's edge, and no ripple on the channel beside it.
- Waterfowl that will not settle on one stretch of channel.
- Pilgrims who swear they were followed back from a shrine by something they never saw.

## Combat Strategy

The serpent strikes from darkness, with no warning, and bites to inject its venom. Then it pulls back into shadow and follows, patiently, while the venom weakens its victim, striking again if anyone tries to carry him away. Once its victim is weak, it coils round him and crushes. It uses its speed to avoid blows and strikes from where a man is not looking. It is uncomfortable in bright light and avoids it. Cold slows it and weakens its venom.

## Attack Methods

### Venomous Fang Strike

The head strikes like a whip, the fangs drive deep, and a great dose of venom goes in. The pain begins at once and spreads in waves, and a creeping paralysis follows it.

### Constricting Coil

The serpent throws its coils round a weakened victim and crushes, tighter with every breath he lets out. Armor does little against it.

## Special Abilities

### Shadow Strike

The serpent flows out of shadow, strikes and flows back into it, even in a lit room, from shadow that should not be deep enough to hide it.

### Shadow Affinity

In shadow and darkness it is nearly invisible, and it disappears into one patch of shadow and comes out of another within sight.

### Venom of Living Nightshade

The venom brings searing pain, limbs that grow heavy and will not answer, and, untreated, death. The pain grows worse as the paralysis spreads.

### Intelligent Predation

It learns, remembers and plans, and it anticipates where its prey will run with uncanny accuracy.

### Cold and Light

Cold slows it and weakens its venom. Bright light does not harm it, but it avoids it, and it will not stay in sunlight.

## Attributes

Strength
: 13-16 (1d4+12)

Endurance
: 11-14 (1d4+10)

Dexterity
: 9-12 (1d4+8)

Agility
: 13-16 (1d4+12)

Perception
: 11-14 (1d4+10)

Aura
: 9-12 (1d4+8)

Will
: 9-12 (1d4+8)

Reasoning
: 7-10 (1d4+6)

Creativity
: 7-10 (1d4+6)
