---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Old Ice Dragon
  aliases:
    - Frost Wyrm
description: "A colossal, ancient ice-wyrm exceeding forty feet, embodying merciless patience and predatory cunning honed across centuries of frozen dominion."
shortcode: oldicdrg
type: being
data:
  icon: icon-dragonheadft
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+57
    end: 1d6+42
    dex: 1d4+6
    agl: 1d4+6
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+11
    wil: 1d6+18
    rea: 1d6+14
    cre: 1d6+10
    emp: 1d6+10
    elo: 1d6+14
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 60 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 45 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 21 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 95 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 93 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 68 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 25
            aspect: piercing
          lengthBase: 10
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
            armorReduction: 3
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 24
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 24
            aspect: edged
          lengthBase: 9
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
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 32
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 23
            aspect: blunt
          lengthBase: 11
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
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 96
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 4
            modifier: 19
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits:
            breath: true
            impactBands: 19 · 15 · 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 16
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 16
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 12
          - name: Torso
            shortcode: torsozone
            probWeight: 16
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 12
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 16
          - name: Tail
            shortcode: tailzone
            probWeight: 12
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: &a1
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6
              blunt: 28
              edged: 30
              piercing: 29
              fire: 27
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 26
              edged: 28
              piercing: 27
              fire: 25
      weight:
        base: 8000
        calc: "8000"
      reachBase: 0
      bodyScaleBase: 3.01
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 180
        leaguesPerWatch: 18
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

There is no temperature. There is no breath. There is no thought. There is only cold — an absolute, final, suffocating cold that comes before even the idea of suffering. Your mind breaks into a thousand scattered pieces, and with what is left of it you understand that the thing above the glacier does not kill. It erases. It is not a creature of flesh and scale so much as winter itself given a shape, vast past measuring, its scales the colour of the deep ice that lies untouched at the bottom of glaciers older than any town. It simply is, and your own existence becomes unbearable in front of it. This is not rage. This is not hunger. This is the end of things, patient and certain, watching you with eyes that hold ten thousand frozen winters. It does not need to move. By the time you see it you are already dying — have been dying, slowly, all your life, waiting for this moment when the winter comes to collect.

# Dossier {#dossier}

An old ice dragon runs thirty-two to forty-eight feet from snout to tail, spans more than sixty feet across the wings, and weighs between six and twelve thousand pounds — the weight of a merchant galleon. It has lived four to eight centuries, sometimes longer, and it has watched dynasties begin and end. Whole lines of warriors have gone against such a dragon over the generations; perhaps one man in ten thousand came back. Its ground is a mountain range or a chain of glaciers hundreds of miles long, with a main lair so large and so deep that miners could spend their lives mapping it — chambers of impossible size, ice so old it gives off a light of its own.

## What the Cold Does

The cold around an old ice dragon is not a hardship. It is the end of things. Bare flesh dies within minutes of it, and wards against cold begin to fail in its presence, because the dragon's cold is more absolute than the magic that was written to keep cold out. It is lethal two hundred feet away. Light bends in it and sound goes wrong, so that the dragon is seen in mirage and heard from the wrong direction, and ice forms on the ground under the dragon while it stands there; standing water freezes and the ice then splits deeper, so that the dragon's resting place is a glacier actively growing.

The breath is a cone of crystalline mist sixty feet long, so cold it seems to glow, and it freezes living tissue in the space of a heartbeat. Those caught in it die in moments unless something supernatural is keeping them alive. The cold hangs where the breath fell for a while after, so that the ground itself goes on killing. What the breath leaves is preserved in glacial ice, perfect and unburied. The dragon breathes as often as it likes. Cold of any kind, natural or worked, cannot touch it; a blizzard feeds it.

## The Body

The scales are midnight blue shading to black along the spine, the colour of the deepest glacial ice, and their edges are perfectly clear, so that light passing through them seems to enter somewhere else. Single scales are the size of a man. There are almost no scars: a creature this old has learned to avoid injury by means that have nothing to do with fighting well. The eyes are a luminous pale silver with patterns in them like frost and crystal. Breath mists from it without pause. Rime grows on the scales in ordered crystalline shapes that are not frost, and in flight it trails ribbons of supercooled mist that hang in the air long after it has gone. Stone its claws touch turns brittle and cracks in spidering lines. When it speaks, and it does, the voice carries the sound of avalanches, of glaciers groaning under their own weight, of wind that has never met an obstacle.

The scales stop anything ordinary. Swords shatter on them and arrows glance off, and a worked weapon bites with difficulty. They are near diamond in hardness, refined by centuries in the hardest weather Thalorna has. Spells find the dragon as hard to reach as steel does; only magic of very great power, in the hands of a caster of very great skill, gets through with any reliability.

## How It Lives

Nothing moves in the dragon's range without the dragon knowing it. How it knows is not established — through the ice, some think, or through the cold itself. Beyond that, an old ice dragon's dealings with lesser beings run from indifference to slow, elaborate cruelty. Some keep written treaties with human rulers and conduct the correspondence through servants who have learned to work in cold that would kill anyone else. Some have withdrawn altogether to the poles or the highest peaks and are known only by rumour. Some have stopped hunting to feed at all and hunt for reasons of their own, or set kingdoms against each other for the entertainment of it, or have arrived at a kind of detachment that looks from outside like meditation.

The patience is the thing to understand. An old ice dragon will wait a century for a circumstance to arrange itself. It will move a glacier by will alone, an increment at a time, across decades. It forgets no injury done to it, and when it finally moves against the one who did it, the reprisal is the kind that gets written down.

## How It Fights

It does not fight the way a young dragon fights, all wings and acrobatics. It moves deliberately and wastes nothing. It prefers to stand off and let the breath and its own presence do the first work — the mere sight of it drives the weak-minded past despair into madness; some go catatonic; even the strongest feel the weight of ages and the pointlessness of resisting — and it treats close fighting as beneath it, arranging instead that enemies come to it over ground of its choosing, usually ground the cold has already made treacherous. It cuts the vulnerable from their protectors. It waits for a flank to overreach and closes on it. It thinks in armies, not in men, and an old ice dragon in battle is not trying to win so much as managing the rate at which its opponents die.

When it does close: the jaws crush armour and bone with contempt, and a bite carries the cold into the wound. Each claw is a sword's length and harder than forged steel, rakes several men at a stroke, and leaves wounds that freeze solid and will not heal by ordinary means; the same claws leave their marks in castle walls. The wings, folded and snapped open, throw a shock like a small avalanche thirty feet in every direction — trees snap, walls crack, men are simply gone from where they stood. The tail, thick as a man's torso and nearly as long as the body, moves with a terrible slowness and topples towers.

In the air it hovers as long as it pleases, turns in ways its mass should forbid, and stoops like a dropped stone to pull up at the last moment with no loss of speed.

## Its Lair

Inside its lair the dragon knows everything: where every creature is and what state it is in, every tremor through ice and stone, every movement seen through the ice as through glass. There is no approach it has not already watched.

## Attributes

- **Strength:** 58-63 (1d6+57)

- **Endurance:** 43-48 (1d6+42)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 12-17 (1d6+11)

- **Will:** 19-24 (1d6+18)

- **Reasoning:** 15-20 (1d6+14)

- **Creativity:** 11-16 (1d6+10)

- **Empathy:** 11-16 (1d6+10)

- **Eloquence:** 15-20 (1d6+14)
