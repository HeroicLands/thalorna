---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Young Ice Dragon
  aliases: []
description: "A young apex ice-wyrm of high peaks and glaciers, methodical and cold rather than aggressive, mastering the frozen air."
shortcode: yngicdrg
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
  birthday: "unknown"
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
    str: 1d6+33
    end: 1d6+24
    dex: 1d4+4
    agl: 1d6+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+9
    wil: 1d6+14
    rea: 1d6+8
    cre: 1d4+7
    emp: 1d4+5
    elo: 1d6+8
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 36 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 27 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 71
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
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 13
            aspect: piercing
          lengthBase: 5
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
        masteryLevelBase: 65
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
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 12
            aspect: edged
          lengthBase: 4
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
        masteryLevelBase: 52
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
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 11
            aspect: blunt
          lengthBase: 6
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
        masteryLevelBase: 75
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
            modifier: 11
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits:
            breath: true
            impactBands: 11 · 7
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 4
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 4
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 3
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 3
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 4
          - name: Tail
            shortcode: tailzone
            probWeight: 3
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
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
              blunt: 10
              edged: 12
              piercing: 11
              fire: 9
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
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
              blunt: 16
              edged: 18
              piercing: 17
              fire: 15
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
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
              blunt: 14
              edged: 16
              piercing: 15
              fire: 13
      weight:
        base: 1000
        calc: "1000"
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 14
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The air crystallizes before you see it. Your breath freezes mid-exhale, turning to glittering needles that catch light that isn't there. The temperature drops so gradually, so deliberately, that by the time you realize something is wrong, your extremities have already begun to numb. Then you see it—pale silver scales catching the glacial light, almost translucent at the wing edges, a creature of perhaps twenty-four feet from snout to tail. It watches you with eyes like winter itself, patient and knowing. Where a fire dragon would announce itself with roaring fury and a cascade of flame, this one simply exists, and the world freezes around it. Your heartbeat slows. Your thoughts grow sluggish. It doesn't need to hunt you—the cold will do the work. The young ice dragon has already learned what takes its elder centuries to perfect: that patience is sharper than any blade, and the silence before the avalanche is more terrifying than the avalanche itself.

# Dossier {#dossier}

Young ice dragons are apex predators of high mountains and glacial regions, possessing great strength and aerial mastery despite their comparative youth. They range from sixteen to twenty-four feet in length with wingspans of up to thirty-six feet, weighing between eight hundred and two thousand five hundred pounds. Unlike their fire-breathing kin, ice dragons are notably less aggressive and more methodical—a difference that makes them deadlier, in ways that take patience to recognize. A young ice dragon will observe a settlement for weeks before hunting, learning routes and schedules. It does not strike in rage; it strikes with precision.

The cold aura that surrounds a young ice dragon is lethal within prolonged proximity. Unprotected travelers within fifty feet will find their core body temperature dropping noticeably within minutes. Frostbite begins within an hour of exposure. The dragon's lair, invariably located in a glacier or mountain ice cave, becomes an environment where only the dragon thrives—stone becomes brittle, metal becomes treacherous, and flesh hardens and fails.

## Presentation

A young ice dragon's scales are predominantly pale silver-blue, with deeper glacial blue striations along the spine and wings. The edges of its scales are translucent, almost crystalline, causing light to refract in disorienting patterns. Unlike the heat-darkened scales of fire dragons, these scales remain bright and reflective, making the creature shimmer even in dim light. Its eyes are pale silver-gray, devoid of warmth, and seem to calculate rather than merely observe.

The dragon's hide is supernaturally cold to the touch, radiating frost in visible waves during calm weather. Breath mists perpetually from its nostrils. Ice forms spontaneously around its claws where they touch stone. Its wings, when folded, create a faint musical chiming as the scales settle against one another. The dragon's voice, when it chooses to speak, is low and measured—never urgent, never panicked. It speaks with the confidence of something that knows it will outlast its listener.

## Key Behaviors

Young ice dragons are territorial and solitary, establishing lairs that may span an entire glacier system. They return to the same feeding grounds seasonally, hunting the region's livestock and the occasional hunting party that ventures into their domain. Unlike fire dragons, which may hoard gold and gems, ice dragons collect victims—maintaining a frozen necropolis of perfectly preserved prey, some decades old, stored in chambers maintained at perpetual deep freeze.

The young ice dragon is patient to the point of unsettling. It will circle prey for days, studying behavior patterns. It will wait in storms that would kill other creatures. It will follow a merchant caravan for a hundred miles before striking at the most isolated point. The dragon does not need to hurry. Time itself is its ally.

## Combat Strategy

A young ice dragon prefers to engage enemies at a distance, using its flight and frost breath to separate prey from aid and create environmental hazards. It circles at altitude, making ranged attacks difficult while it pummels targets with its breath. Only when prey is sufficiently weakened—frozen, disoriented, or isolated—does the dragon descend to fight at close quarters.

The dragon uses terrain ruthlessly. A single sweep of its tail near a glacier's edge can trigger avalanches. Its presence itself creates hazards; ice sheets become slick and treacherous, stone becomes brittle, and the very air becomes a weapon. The dragon is patient enough to force enemies into mistakes born of cold, fear, and desperation.

## Attack Methods

### Bite

The dragon's bite takes a single enemy within reach. The jaws crush and tear with the creature's full strength behind them, and the wound freezes as it is made, so the victim suffers the cold as well as the injury.

### Claw Rake

The dragon's claws extend and rake across one or more targets within reach, opening wounds that frostbite rapidly. A claw rake can catch several enemies standing close together.

### Tail Sweep

The dragon's muscular tail whips in a broad arc, attempting to knock enemies down or hurl them backward. Anyone in the tail's path who cannot brace against it is thrown to the ground and battered.

### Frost Breath

The dragon exhales a spreading cloud of supercooled mist and crystalline shards that reaches fifteen feet. Those caught in it are seared by the cold, and those who cannot shake it off are slowed and left more vulnerable to the next blast. Unprotected targets can suffer frostbite.

## Special Abilities

### Frost Breath

The dragon's breath is a spreading blast of supercooled air laced with razor-sharp ice crystals. The cold is so intense it burns, and the mist obscures vision. A young ice dragon can breathe this way several times but must rest between breaths.

### Flight

The dragon is a masterful flier, capable of hovering and performing acrobatic maneuvers despite its size. Its wings generate no sound despite their span.

### Armored Scales

The dragon's scales are supernaturally hard, shedding conventional weapons and providing natural armor superior to plate mail. Magical weapons and intense heat are required to penetrate the hide.

### Cold Aura

The dragon's natural body temperature is so far below freezing that it radiates killing cold. Creatures within fifty feet of the dragon are harmed by the cold, and the harm grows the closer they stand and the longer they stay. The aura cannot be lifted without affecting the dragon itself.

## Attributes

- **Strength:** 34-39 (1d6+33)

- **Endurance:** 25-30 (1d6+24)

- **Dexterity:** 5-8 (1d4+4)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 10-15 (1d6+9)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 9-14 (1d6+8)

- **Creativity:** 8-11 (1d4+7)

- **Empathy:** 6-9 (1d4+5)

- **Eloquence:** 9-14 (1d6+8)
