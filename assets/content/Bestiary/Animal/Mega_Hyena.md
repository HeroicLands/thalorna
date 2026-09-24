---
tags:
  - animal
  - creature
name:
  full: Mega Hyena
  aliases: []
description: "A colossal four-foot-tall hyena built for bone-crushing bite force and endurance, its sloped back and coarse mottled coat marking a relentless hunter."
shortcode: mghyn
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
  born: "unknown"
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
    dex: 1d6+8
    agl: 1d6+10
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 35 } }
    - name: Bone-Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bone-Crushing Bite
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
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
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
            roles: &a1
              - locomotor
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
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
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 150
        calc: "150"
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: surface_cover
            key: mixed_forest
            mode: add
            textValue: "-1"
          - scope: surface_cover
            key: needleleaf_forest
            mode: add
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[mghyn|Mega Hyena]]{float: top-left}

The sound of it hits you first—a deep, whooping laugh that seems to vibrate from the very ground, raising hair on the back of your neck. Then the shape emerges from the scrubland, massive and wrong, its sloped back and barrel chest giving it a predatory crouch even while standing still. Its coarse, mottled fur bristles, each hair catching the light in a way that makes the creature seem larger than it already is. Its yellow eyes glow with ancient malevolence, and its jaws—underslung and bristling with oversized teeth—seem capable of consuming whole limbs. When it laughs again, the sound carries the promise of tearing flesh and crushing bone.

# Dossier {#dossier}

The Mega Hyena is a colossal version of its smaller relatives, standing nearly 4 feet tall at the shoulder and weighing 350-450 pounds. Its body is heavily muscled and compact, built for tremendous bite force and endurance rather than speed. The fur is coarse and bristling, mottled with dark brown and black patches, though individual coloration varies. The head is broad and powerful, with the distinctive sloped back and muscular front quarters of its kind. The tail is relatively short and held low.

## Presentation

Mega Hyenas display enormous musculature throughout their frame, particularly in the neck, shoulders, and forelimbs. The head is proportionally massive, with jaws capable of opening to an impressive width. The eyes are large and bright yellow, set forward for good binocular vision. The ears are rounded and alert. The legs are thickly built but less elegant than a true feline predator, suggesting power over finesse. The musk surrounding them is powerful and immediately recognizable. The mouth is often held slightly open, displaying the prominent teeth and creating the appearance of a perpetual snarl. Individual Mega Hyenas often bear extensive scarring from territorial disputes and pack conflicts.

## Key Behaviors

Mega Hyenas are scavengers as much as hunters, thriving in arid savannas and broken terrain. They live in large packs with rigid hierarchies dominated by one or more leaders whose status is determined through combat. Pack size typically ranges from 5-20 individuals. They hunt large prey cooperatively, but are also opportunistic and will steal kills from other predators, defend carcasses from competitors, or hunt smaller prey when the chance arises. Lone Mega Hyenas are typically outcasts or young individuals seeking to establish a new pack, and they are considerably more aggressive and unpredictable than pack members.

## Combat Strategy

Mega Hyenas rely on pack tactics and overwhelming force. In a pack, they coordinate attacks, surrounding prey and attacking from multiple angles simultaneously while the prey is distracted. They target the weakest or most vulnerable opponent first, attempting to separate and isolate individuals from the group. A lone Mega Hyena uses direct aggression, relying on its massive bite force to disable or crush bone in a quick strike. Hyenas do not fight intelligently or tactically on an individual basis; rather, they rely on pack instinct and sheer ferocity.

## Attack Methods

### Bone-Crushing Bite

The Mega Hyena lunges to clamp its enormous jaws on the target, aiming for limbs, throat, or belly; the bite crushes bone, shatters light armor, and pins an opponent in place until they can wrench themselves free by main strength.

### Pack Overwhelm

Multiple Mega Hyenas attack simultaneously from different directions, each attempting to knock the opponent down or distract them; attacks pressed from several sides at once land far more often and can incapacitate isolated opponents quickly.

## Special Abilities

### Crushing Jaws

The Mega Hyena’s bite force is extraordinary, capable of breaking bone, shattering weapons or shields, and penetrating armor; a bite that lands does terrible harm and may incapacitate the victim if it closes on a vital area.

### Pack Instincts

Mega Hyenas fighting alongside their pack strike more often, bite harder, and shrug off what would stop a lone animal; a pack of hyenas is more dangerous than its numbers would suggest.

### Territorial Defense

When defending a kill, den, or pack, a Mega Hyena becomes considerably more aggressive and fights with more skill and fury than at any other time; they will fight to the death to protect the pack's kill, den, or standing.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
