---
tags:
  - animal
  - creature
name:
  full: Thornback Raptor
  aliases: []
description: "A five-to-six-foot bipedal reptilian pack hunter that coordinates ambushes with psychological terror through jungles, forests, and ruins."
shortcode: thrnbckr
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
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+10
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 35 } }
    - name: Slashing Claw Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: talon
          name: Slashing Claw Strike
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 2
            aspect: edged
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
    - name: Biting Attack
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Biting Attack
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
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
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Body
            shortcode: torsozone
            probWeight: 4
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 4
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
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
            probWeight: 6
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
      weight:
        base: 150
        calc: "150"
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thrnbckr|Thornback Raptor]]{float: top-left}

The tap-tap-tap of claw on stone precedes recognition — a rhythmic, eerie clicking that sends primal warning up your spine. The creature steps into view on powerful hind legs, its form undeniably reptilian: sleek, muscular, and covered in mottled green-brown scales that shift with each movement. Jagged bony ridges run the length of its spine, glinting with an ominous light. The yellow eyes are unblinking and intelligent, and as it tilts its head with unsettling fluidity, the mouth opens to emit a sound that is part hiss, part something more — a clicking, chittering vocalization that seems designed to unnerve prey. You notice the claws on each foot curve upward in deadly arcs, clearly specialized for slashing and eviscerating.

# Dossier {#dossier}

The Thornback Raptor is a bipedal reptilian predator standing 5-6 feet tall, found in forests, jungles, and ruins across warm and temperate regions. These pack hunters work together closely and use fear as much as claw and tooth to overcome prey. Adventurers encounter them primarily while exploring ruins, traveling through jungles, or camping near areas where the creatures hunt.

## Presentation

The Thornback Raptor is a sleek, muscular predator covered in mottled scales ranging from green to brown to gray, providing excellent camouflage in jungle and forest environments. The distinctive feature is the row of jagged bony ridges running along the spine from neck to tail. The head is proportionally large with forward-facing yellow eyes suited for predatory vision. The mouth contains rows of small, sharp teeth designed for precision cutting. The body is built for speed and agility over raw strength. The legs are powerful and positioned for bipedal locomotion, ending in three-toed feet with curved claws like a bird of prey's.

## Key Behaviors

Thornback Raptors hunt in coordinated packs of 4-8 individuals stalking with patience and cunning. They remain just beyond prey's perception, calling to unnerve and confuse. The creatures are intelligent and capable of mimicking sounds of wounded animals or humanoids to lure prey. Packs demonstrate clear hierarchies with alpha individuals directing hunts. Young raptors are trained in pack coordination through mock hunts. The creatures are most active during twilight and night hours.

## Combat Strategy

Raptors use sound and fear to weaken prey, then attack with precision strikes. Individual raptors leap and slash with their curved claws, targeting vital areas, then withdraw to allow venom or bleeding to weaken victims. Packs coordinate flank attacks that prevent prey from engaging all threats simultaneously. The raptors avoid prolonged direct combat when possible, preferring to kill through accumulated damage and disorientation.

## Attack Methods

### Slashing Claw Strike

The raptor executes a high-speed slash with its curved hind-leg claw, designed to disembowel or sever limbs. Multiple strikes in rapid succession can create severe bleeding.

### Biting Attack

The raptor's bite is designed for precision rather than crushing, targeting exposed flesh and creating puncture wounds.

### Coordinated Pack Attack

Multiple raptors attack simultaneously from different directions, making comprehensive defense nearly impossible.

## Special Abilities

### Predatory Vocalization

Raptors emit clicking, hissing sounds that can be modulated to mimic wounded creatures. These calls work on the nerves of prey.

### Pack Coordination

Raptors communicate and coordinate their hunts through calls and body language. A coordinated pack is many times as dangerous as its members would be alone.

### Fear Stalker

Being stalked by raptors for long wears at the mind, bringing on suspicion and confusion that cloud a victim's judgment.

### Surgical Precision

Raptor attacks find vital areas with great accuracy, and an exposed target is in particular danger.

### Ambush Predator

Raptors are at their most effective when attacking from cover or a hidden position, and a strike from ambush is very hard to meet.

### Additional Information

Raptors are much less dangerous when isolated from pack support. Individual raptors tend to retreat rather than engage determined opposition. The creatures avoid well-lit areas and respond negatively to loud noise that disrupts their vocalizations. Packs that have successfully hunted humanoids become more bold in targeting humans. The creatures' scales can be harvested after death and used for armor or crafting.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 8-11 (1d4+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
