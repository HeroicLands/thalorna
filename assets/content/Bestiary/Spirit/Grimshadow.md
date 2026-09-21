---
tags:
  - spirit
  - creature
name:
  full: Grimshadow
  aliases: []
description: "An ancient malevolent spirit born of concentrated terror, anchored to sites of tragedy where it feeds on fear and despair rather than flesh."
shortcode: grmshdw
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
  kbcat: spirit
  attrRollFormula:
    str: 1d4+8
    end: 1d4+8
    dex: 1d4+10
    agl: 1d4+14
    per: 1d4+10
    aur: 1d4+12
    wil: 1d4+8
    rea: 1d4+8
    cre: 1d4+12
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 28 } }
    - name: Shadow Strike
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: punch
          name: Shadow Strike
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 0
            aspect: blunt
          lengthBase: 0
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
  system:
    body:
      structure:
        zones:
          - name: Core
            shortcode: corezone
            probWeight: 1
          - name: Shroud
            shortcode: shroudzone
            probWeight: 2
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles:
              - vital
              - core
            canHoldItem: false
            probWeight: 10
          - name: Shroud
            shortcode: shroudpart
            bodyZoneCode: shroudzone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Shroud
            shortcode: shroudloc
            bodyPartCode: shroudpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: 0
        calc: "0"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: surface_cover
            key: wetlands
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: dunes
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: mixed_forest
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: barren
            mode: override
            textValue: "0"
          - scope: surface_cover
            key: ruins
            mode: override
            textValue: "0"
          - scope: hydrology
            key: shallow
            mode: override
            textValue: "0"
          - scope: hydrology
            key: deep
            mode: override
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[grmshdw|Grimshadow]]{float: top-left}

Your breath mists. The cold comes so suddenly that you see it before you feel it, and then you feel it on your skin, a cold that has nothing to do with the season. At the edge of your sight something moves — but when you turn to look straight at it, there is only shadow. You feel watched. Hunted, with the particular helplessness of being prey to something you cannot quite see.

# Dossier {#dossier}

Grimshadows haunt places where something terrible happened. They are not demons and not undead but something older and stranger — spirits made out of terror and suffering concentrated in one spot until it took a shape. Most are tied to the place that made them, the massacre or the long torment; a few wander. They eat fear and despair, not flesh, which makes them a danger to the mind before the body, and a person who survives a grimshadow may come out with the body untouched and the rest of him broken. Most encounters with one are contests of nerve rather than of arms.

## What It Is

It has no fixed body. It reads as an absence of light rather than a presence, a human-shaped silhouette about seven feet tall cut out of a deeper darkness, with two points of red or amber light where the eyes would be and intelligence behind them. The outline shifts. Dark tendrils reach out of it and draw back like the arms of something from the sea floor. It moves without weight or momentum, pouring across a surface the way a shadow crosses a wall, and frost forms where it passes and thaws again as soon as it has gone. In dim light or shadow it is nearly invisible, and it goes through darkness as if darkness were open ground. It is not wholly material; a weapon does it little harm. Blessed light and light-magic cut through that and hurt it as steel would hurt a man, and in bright light it becomes more solid and can be struck.

## How It Feeds

A Grimshadow stalks rather than ambushes. It picks people who are already frightened — a lost party, someone alone, a group running from something else — and it follows them, feeding on the dread of being followed. It can go on like that for days, corroding courage and reason at the pace it chooses, and since fear alone sustains it there is no reason for it to hurry the kill; some never make it, and simply toy with a victim until nothing is left. Around the site of its own tragedy it is fiercely territorial and attacks anything that enters.

It fights only when it must. It works on resolve first, with fear and with illusions drawn out of each person's own dread, so that everyone in a party sees a different horror and the horrors do real harm to anyone convinced enough by them. It picks the weakest mind present and works on that one, to demoralise rather than kill. When it strikes, it strikes from an angle nobody was covering, with tendrils of living dark that hit like a blow and leave the victim feeling his strength run out of him. Its mere nearness weighs on the limbs and the will; panic becomes hard to hold off, and under long exposure people freeze entirely and are left with scars of the mind that do not fade. Against prepared opponents in a straight fight it slips back into shadow, and it will not engage anyone carrying strong blessed light or a courage it cannot crack. It prefers the already wounded.

## What Ends It

Blessed or magical light, and magic of hope, courage and protection. Priests of the faiths that make much of light are its natural opponents; a torch, however bright, is not enough. A grimshadow bound to a place cannot be killed there. Destroy it and it re-forms. To finish one, the thing that made it has to be answered — the curse lifted, the murdered avenged, the wound in the place cleaned. There are philosophers who hold that a grimshadow is not wicked but hurt, and that it could be healed. Very few have had the nerve, or the wisdom, to try.

## Attributes

- **Strength:** 9-12 (1d4+8)

- **Endurance:** 9-12 (1d4+8)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 15-18 (1d4+14)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 13-16 (1d4+12)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 13-16 (1d4+12)
