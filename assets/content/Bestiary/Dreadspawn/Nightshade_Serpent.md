---
tags:
  - dreadspawn
  - creature
name:
  full: Nightshade Serpent
  aliases: []
description: "A shadow-corrupted serpent of malign intelligence that haunts the dark, feeding on fear and suffering as much as on flesh."
shortcode: nghtshds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
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
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 35 } }
    - name: Venomous Fang Strike
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Fang Strike
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
            aspect: piercing
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            poison: true
    - name: Constricting Coil
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 69
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coil
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 15
            aspect: blunt
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            constrict: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 3
          - name: Forebody
            shortcode: torsozone
            probWeight: 11
          - name: Hindbody
            shortcode: hindbodyzone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles:
              - core
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles:
              - core
              - locomotor
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
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
      weight:
        base: 150
        calc: "150"
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
          - scope: surface_cover
            key: wetlands
            mode: add
            textValue: "-2"
          - scope: hydrology
            key: shallow
            mode: add
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[nghtshds|Nightshade Serpent]]{float: top-left}

The shadows between the stones are wrong — deeper, more solid than they should be. You catch a glint like a jewel, then a movement that was never quite there, a shape that shifts at the edge of your eye. The air goes cold and still, and you smell it: something like rotting nightflowers, a scent that prickles your skin with an old, animal dread. Then you see the eyes — no, feel them — two points of sickly luminescence in the darkness, ancient and intelligent and without anything you would recognise as mercy. A sinuous form rises out of the shadow itself, scaled the colour of midnight oil, and the hiss of a serpent moving becomes deafening in your ears.

# Dossier {#dossier}

Nightshade Serpents are ordinary serpents that magic has corrupted into something worse. They are intelligent far beyond any animal, malicious on purpose, and hungry for more than meat — they feed on fear and pain as much as on flesh. They haunt deep caves, drowned ruins and any place the sun does not reach, and they come into towns to hunt in cellars and the dark under the streets. One serpent can terrorise a region, working through it methodically and leaving drained corpses behind.

## The Serpent

It measures 12 to 18 feet, its body as thick as a man's thigh and packed with muscle. The scales are midnight blue and black in patterns that seem to move when looked at sideways, as though the animal were partly in shadow whatever the light. The eyes glow a sick phosphorescent green with no pupil and no iris, see perfectly in the dark, and are plainly thinking. The fangs are long and sharp and wet with a venom so strong it smokes faintly in the air. It moves like poured water and can fold and compress itself in ways a body should not allow, and it carries a faint nauseous scent of nightshade flowers and grave-earth wherever it goes.

## What It Does With Prey

It hunts by night for preference, and at any hour where the dark is deep enough. It holds a hunting ground and drives other large predators off it. Unlike a natural snake it does not only lie in wait; it follows, and herds a victim toward ground where the victim is at a disadvantage. And it enjoys the work. A Nightshade Serpent will keep a person alive for hours, hurting him and withholding the bite that would end it. They breed seldom, and a gravid female attacks anything that comes near her nest with a ferocity that empties the country around it.

The first strike comes out of darkness or cover: the head snapping forward like a whip, the fangs driven deep, and a great quantity of neurotoxin pumped in. The venom starts at once — waves of pain, and a paralysis that spreads from the bite, the limbs growing heavy and dead while the pain gets worse, and death at the end of it unless something is done. After that the serpent is patient. It keeps out of reach, strikes again when it can do so safely, and follows its weakening prey at a walk, toying with it as the numbness spreads. When the prey can no longer struggle it coils around him and crushes; armour is little help against that pressure. It learns and remembers, finds the gaps in a defence, and reads an attempt to dodge before it is made. Badly hurt, it withdraws into the deepest dark it can find. Cornered, it fights to the death.

## Shadow

Shadow is ground to it. It passes through darkness as if darkness were a road, vanishes into one patch of shadow and comes out of any other within sight, and in deep shade it can scarcely be seen at all. It can strike out of shadow in a lit room — flowing from a darkness that should not be there, biting, and drawing back into it.

## Against It

Cold. In cold weather the serpent slows and its venom loses much of its strength. Bright light does not harm it but it dislikes light, and it keeps out of direct sun when it can. Holy water and magic of the wholesome kind hurt it, as though something corrupt were part of what keeps it alive. Its venom, carefully drawn, is worth a fortune to poisoners and to sorcerers of the darker sort. The legends make the serpents the corrupted remains of old serpent-gods, cursed into their present shape, and killing one gives little satisfaction: the dead face keeps its cold smile, as if it had already won something that mortal deaths merely punctuate.

## Attributes

- **Strength:** 13-16 (1d4+12)

- **Endurance:** 11-14 (1d4+10)

- **Dexterity:** 9-12 (1d4+8)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 9-12 (1d4+8)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 7-10 (1d4+6)
