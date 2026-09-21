---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Mature Ice Dragon
  aliases: []
description: "A patient apex ice dragon spanning thirty-six feet with fifty-foot wings, an ancient architect of its own legend after centuries of scheming."
shortcode: mtricdrg
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
    str: 1d6+45
    end: 1d6+33
    dex: 1d4+5
    agl: 1d4+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+10
    wil: 1d6+16
    rea: 1d6+10
    cre: 1d6+8
    emp: 1d6+7
    elo: 1d6+10
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 48 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 84 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 66 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
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
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 19
            aspect: piercing
          lengthBase: 8
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
        masteryLevelBase: 75
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
            spread: 12
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 18
            aspect: edged
          lengthBase: 7
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
        masteryLevelBase: 70
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
            spread: 16
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 17
            aspect: blunt
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
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 84
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
            modifier: 15
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits:
            breath: true
            impactBands: 15 · 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 8
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 8
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 6
          - name: Torso
            shortcode: torsozone
            probWeight: 8
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 6
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 8
          - name: Tail
            shortcode: tailzone
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
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
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
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
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
              blunt: 22
              edged: 24
              piercing: 23
              fire: 21
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
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
              blunt: 20
              edged: 22
              piercing: 21
              fire: 19
      weight:
        base: 3000
        calc: "3000"
      reachBase: 0
      bodyScaleBase: 2.61
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 190
        leaguesPerWatch: 16
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

You feel it before the world goes silent — a pressure in your bones, a wrongness that makes your body want to curl in on itself. The cold comes down so fast that ice forms on your eyelashes and in your hair. Each breath is a blade in your lungs. Then the clouds part and you see her — a dragon the size of a merchant ship, pale silver-blue muscle hanging above the glacier, wings spread wider than a barn is long. She does not move with fire or fury. She simply hangs there, and in the time it takes you to understand what she is, your fingers have begun to blacken, your thoughts have scattered like migrating birds, and you know — with the absolute clarity of the condemned — that you are already dead. She is not a creature that hungers. She is hunger itself, patient and eternal, wearing scales and wings, and every breath you draw is a breath stolen from winter. Winter always collects its debts.

# Dossier {#dossier}

A mature ice dragon runs twenty-four to thirty-six feet in length with wings spanning more than fifty, and weighs between two and four thousand pounds. It has lived two or three centuries — long enough to leave animal rage behind, to learn its ground, and to make its own legend.

## Its Lairs

It keeps several. A main lair, a palace in the glacier, is where it broods; ice caves elsewhere in the range hold reserves against a bad season; lone peaks along its migration are its waypoints. Some mature ice dragons hold a mountain fortress and take tribute from the kingdoms below it. Others want nothing from anyone and claim a whole range as theirs alone. A territory typically covers fifty to a hundred square miles of mountain, and the dragon flies its boundaries regularly — to hunt, or for the pleasure of looking — with feeding routes laid along the seasonal movements of game and every pass, valley and path in memory. A settlement that pushes in is watched for months before the dragon decides whether it may stay.

The patience is nearly supernatural. It will wait years to repay an insult. It will shadow a kingdom for decades, learning its defences, holding off for the moment when the blow will do the most. Some have signed treaties with human rulers, taking tribute and slaves in return for leaving the farms alone. Some hold themselves apart entirely, neither attacking nor allowing themselves to be watched.

## The Body

The scales are glacial blue, deepening to midnight blue down the spine and along the tail, with edges clear enough that at a distance the whole animal throws a faint prismatic shimmer even in bad light. The eyes are pale silver, nearly white at the centre, and there is calculation in every glance. Frost weeps from the nostrils. Ice grows of its own accord on the claws and along the ridge of the back, and forms constantly on the ground where the dragon stands; in flight it trails a visible haze of supercooled mist. At certain pitches the scales hum, a harmonic that puts an animal dread into whatever hears it, and when the dragon speaks the voice carries the wind over a glacier and the groan of pack ice. It is scarred — by adventurers who are centuries dead, by rivals as large as itself — and the scars do not diminish it. Many of the scales are hundreds of years old and have never been shed. Nothing ordinary gets through them; a magical weapon or a great heat can.

## How It Fights

With height. It stays above, working with breath and with its own presence before it ever comes down, because few things on the ground can hurt it and it knows that; its concern is to own the field — to turn the battle ground into a frozen hell in which only it can live — and to break the will of whoever is standing on it. It circles, weighs, calculates, and takes the most dangerous opponent first, coldly. If the fight turns it leaves, since winter is on its side: nobody chases a flying dragon into a blizzard, and it can wait in the storm for cold and exhaustion to finish what it started. The sight of it puts despair into everything that has a mind; the strong-willed can hold against that, and most cannot.

When it closes, the jaws crush, and the dragon's supercooled saliva freezes the tissue around the bite. The claws cut deep, several opponents at a stroke, and the wounds freeze at once — the cold stops the bleeding and leaves the flesh around it brittle. The wings, folded and snapped out, batter everything within twenty feet and throw the unbraced back ten feet and more. The tail is nearly as long as the body and sweeps an arc that fells several at once, brings down a small building, or starts an avalanche off a mountainside. In the air it hovers as long as it likes, dives hard and pulls out with an agility nothing its size should have.

## Breath and Cold

The breath is a cone of supercooled crystalline mist thirty feet long, thick enough to blind and cold enough to kill in moments. It freezes the moisture out of the air, turns the blood to slush in a living body, and leaves bare flesh crystallised so that a blow afterward shatters it. The dragon can breathe again at once, and again after that. Its cold is not even-handed: game animals near it freeze and die within minutes, a person suffers frostbite within the hour, and only the dragon moves freely in it. Within a hundred feet it is lethal to anyone unprotected. The light bends in it into mirages, and ice forms without pause on the ground around the dragon. Cold cannot hurt it — not ice, not blizzard, not magic — and it grows a little stronger in it.

## Attributes

- **Strength:** 46-51 (1d6+45)

- **Endurance:** 34-39 (1d6+33)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 11-16 (1d6+10)

- **Will:** 17-22 (1d6+16)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 9-14 (1d6+8)

- **Empathy:** 8-13 (1d6+7)

- **Eloquence:** 11-16 (1d6+10)
