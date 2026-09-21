---
tags:
  - dreadspawn
  - creature
name:
  full: Earthreaver
  aliases: []
description: "A venomous burrowing arthropod that rules underground ecosystems through speed and toxin, carving vast tunnel hunting grounds."
shortcode: erthrvr
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
    str: 1d6+16
    end: 1d6+14
    dex: 1d6+10
    agl: 1d4+13
    per: 1d4+13
    aur: 1d6+4
    wil: 1d4+13
    rea: 1d6+6
    cre: 1d6+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 48 } }
    - name: Venomous Bite
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
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 5
            aspect: piercing
          lengthBase: 2
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
    - name: Acid Slime
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: missile
        impairedByRoles:
          - manipulator
        strikeMode:
          type: missile
          shortcode: spray
          name: Acid Slime
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 0
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 5
            aspect: fire
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 4
          - name: Forebody
            shortcode: torsozone
            probWeight: 17
          - name: Hindbody
            shortcode: hindbodyzone
            probWeight: 9
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
              blunt: 8
              edged: 7
              piercing: 6
              fire: 8
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 6
              fire: 8
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 6
              fire: 8
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 6
              fire: 8
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 8
              edged: 7
              piercing: 6
              fire: 8
      weight:
        base: 2000
        calc: "2000"
      reachBase: 0
      bodyScaleBase: 1.47
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
---

# Appearance {#appearance}

![[erthrvr|Earthreaver]]{float: top-left}

The ground writhes. Soil ripples like water under your feet, and then the thing erupts — segmented, armoured, impossibly long. Its body is a chain of chitinous plates glistening with slime and crushed earth. Too many legs move in a single dreadful rhythm, carrying it toward you at a speed nothing that size should manage. Its mandibles open, and what drips from them hisses where it touches the stone. The stench of turned soil and something acid fills your nose.

# Dossier {#dossier}

Earthreavers rule the country under the ground, hunting by speed and poison rather than by brute strength. Their burrowing remakes the terrain: a single animal cuts a great network of passages under its territory and hunts through them. They are met in deep cave systems, in the passes through mountains, and wherever a mine has broken into soil the creature counts as its own.

## The Animal

An Earthreaver is a worm-shaped arthropod about thirty feet long, built of overlapping segments of dark brown and black chitin. Each segment is armoured on its own and carried on jointed legs — six pairs in all — so that the whole body moves in a wave that carries it up and down as easily as along. The head is mostly mandibles, strong enough to cut stone, and they drip an iridescent venom. Tentacles on the front segments feel for prey. The skin is always wet with a secretion that eases burrowing and is itself acid and caustic; it burns bare flesh and corrodes armour, and gear that has been in it for long falls apart. The creature can smear it deliberately over a victim, or over a passage it wants to make dangerous. It moves to the wet sound of earth being cut and the scrape of chitin through rock.

## The Tunnels

It goes through earth, sand and stone as other animals go through air, fast, and leaves behind it passages large enough for its own body, which it then uses for ambush, for escape, and for pushing its ground outward. It hunts often and actively rather than lying in wait, surfacing without warning anywhere in its territory to take whatever is moving there, and it hunts with intelligence — it reads how prey behaves, sets ambushes in the passages prey uses, and drives prey toward a killing ground it has chosen. Earthreavers have been seen to farm: keeping a burrow system in order, letting a prey species settle in it, then hunting it through methodically. Another earthreaver in the territory means a fight; there is no evidence of mates, or of young kept, or of any social life at all. After feeding it is quieter, though never off guard. It feels the whole of its territory through the ground, and anything walking on it or digging through it is known at a good distance.

## The Bite

The mandibles snap forward faster than the eye follows, to seize and crush, and what matters more is what goes in with them: a venom that brings on paralysis and weakness by stages, and adds up — each further bite from the same animal makes the paralysis worse, until the victim cannot move at all. The first attack is generally an eruption from below, the sudden violence of it as much a weapon as the jaws; whatever is standing over it is thrown down, and the creature gets its first bite in before anyone has found their feet. Then it withdraws. If the venom is working it stalks, patiently. If the prey is proving tough it strikes again from the passages, and again, never staying exposed for long, using its tunnels to break contact and recover between bouts. Only against prey that has managed to deny it the ground does it stand and fight, and even then it keeps moving. A damaged segment costs it little; the body goes on working around it, and the animal has to be wrecked from end to end before it stops.

## What Works

Fire. Heat dries and damages the wet shell and plainly hurts it badly. Hard cold cracks and weakens the chitin in much the same way. Water is a lever, too — flooding the passages drives an earthreaver up to the surface, though it can travel through water for a while when it must.

## Attributes

- **Strength:** 17-22 (1d6+16)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 5-10 (1d6+4)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 7-12 (1d6+6)
