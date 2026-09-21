---
tags:
  - animal
  - creature
name:
  full: Cheeprow
  aliases: []
description: "A ten-inch creature of disarming cuteness that lures travelers with innocent charm before revealing itself as a dangerous pack predator."
shortcode: cheeprow
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
  kbcat: animal
  attrRollFormula:
    str: 1d4+1
    end: 1d4+2
    dex: 1d6+8
    agl: 1d6+9
    per: 1d6+9
    aur: 1d4+5
    wil: 1d6+6
    rea: 1d4+3
    cre: 1d4+4
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 13 } }
    - name: Claw Grip
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Grip
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: -4
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
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
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
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -3
            aspect: piercing
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
          - name: Forequarters
            shortcode: fqtrzone
            probWeight: 1
          - name: Torso
            shortcode: torsozone
            probWeight: 1
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 1
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
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
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
      weight:
        base: 3
        calc: "3"
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[cheeprow|Cheeprow]]{float: top-left}

Bells. That is what you hear first: a soft chirping, bright and almost musical, like tiny bells chiming in sequence. When you find the source, your guard drops on the instant, because the creature is absurdly endearing. It stands no higher than your boot, a fluffy round ball of dun fur on stubby legs, with enormous dark eyes that sparkle with an innocent curiosity. Its small beak opens in what seems to be a happy chirp as it hops closer and investigates a button on your pack with tender fascination. You would almost swear it was smiling — until, a moment later, you hear the sound repeat from somewhere nearby, and again, and again, each new chirp answered by others, drawing in from every shadow and corner around you.

# Dossier {#dossier}

The Cheeprow looks like a harmless little animal, a living mascot ten inches tall, and one of them is exactly that. It is curious, it is drawn to food and to anything shiny, it will trail after a party for miles without the least aggression, chirping contentedly. The danger is in the numbers. One is curiosity; a dozen is trouble; a swarm is the end of anything it can surround. They nest in colonial burrows in grassland, forest and scrub, and the single curious animal is nearly always the first sign of the whole colony.

## The Body

About ten inches tall and six across, a round, stout body under soft dun fur running from pale tan to warm grey, on four short legs that carry it in hops. The head is out of proportion, nearly a perfect sphere, and the great dark eyes take up a quarter of the face — bright, shining, apparently innocent. The small round beak feeds it and makes the chirp. Under the fur are sharp claws on the forelimbs and sharp teeth made for meat. The fur hides it well in grass and scrub. One cheeprow cannot be told from another, and they know each other by scent.

## The Chirp

Cheeprows nest in burrow systems of dozens to hundreds and forage at dawn and dusk for insects, small animals and roots. One that has lost its group frets and chirps without stopping until it finds them. One nosing round a camp is after food and bright objects — reflection draws them, perhaps because it looks like water or like another shining-eyed animal — and when it finds something worth having, its chirp changes pitch and pattern. The changed call carries. Every cheeprow that hears it comes, and repeats it, so that the call spreads outward and animals arrive from farther and farther off, dozens of them inside a few minutes. A cheeprow grabbed or threatened gives a different cry, a wail that carries a long way and brings every animal within hearing at a run; one half a mile off will start toward it. And striking a single cheeprow brings the same answer from everything nearby.

## The Swarm

One cheeprow will not attack a person. Six or eight, and the colony's behaviour turns: they stop investigating and start hunting, with a coordination that suggests either a shared mind or something in the scent that runs them, and with tactics that look learned. They ring the target so it cannot back away and go for bare flesh, eyes, hands and feet, clustering round the legs and arms where nothing can get at them; several gripping different limbs at once will pin a large man. They grab clothing, straps and skin with their claws, and once they have hold they bite, hard for their size, and keep biting and tearing until the target cannot move or they are pulled off; dozens of small wounds together bleed a great deal and every one of them is a way for rot to get in. They come from all sides so that no one direction can be held, and the ones behind do the most harm. Each animal works to open a chance for the next. They are small and quick enough that most blows miss, a sword swung at one generally passes over or around it, and they get through gaps and into places a person cannot follow. Food, or bright metal, in view makes them wilder. And past a certain number they stop caring about injury: a cheeprow with a killing wound goes on biting until it physically cannot move.

## Attributes

- **Strength:** 2-5 (1d4+1)

- **Endurance:** 3-6 (1d4+2)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-12 (1d6+6)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 5-8 (1d4+4)
