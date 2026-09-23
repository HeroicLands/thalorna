---
tags:
  - dreadspawn
  - creature
name:
  full: Octowolf
  aliases: []
description: "An unnatural wolf-and-octopus fusion haunting coastal marshes, deltas, and corrupted waters where land and water meet."
shortcode: octowolf
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
    str: 1d6+14
    end: 1d4+13
    dex: 1d6+14
    agl: 1d4+13
    per: 1d4+13
    aur: 1d4+9
    wil: 1d4+13
    rea: 1d4+13
    cre: 1d6+10
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 43 } }
    - name: Rending Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Rending Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 4
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
    - name: Tentacle Constriction
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Tentacle Constriction
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 3
            aspect: blunt
          lengthBase: 3
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
              - manipulator
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
            probWeight: 4
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
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
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aquatic
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[octowolf|Octowolf]]{float: top-left}

Something vast disturbs the water ahead – a shape that might be a log or might be shadow given form. Then a massive wolf's head breaks the surface, water streaming from jaws of terrible size and purpose, its eyes burning with predatory hunger. As it rises further from the murk, the horror deepens: behind the wolf's snarling face, eight muscular tentacles unfurl like the legs of some blasphemous spider, each lined with dark, grasping suckers and moving with eerie, independent grace. The creature's black fur is slicked with an oily sheen, and the water around it seems to darken and thicken with its mere presence. You hear the sound of suckers releasing from stone – wet, popping sounds like bones breaking – as it advances.

# Dossier {#dossier}

The Octowolf is an unnatural fusion of apex predators from incompatible environments – a creature that defies all natural law, as though some mad sorcerer reached into the minds of both wolf and octopus and melded them into singular, abominable flesh. These creatures haunt regions where land and water meet: coastal marshes, river deltas, deep lakes, and especially places where magical corruption has warped the natural order. An Octowolf is a patient hunter that exploits its hybrid nature ruthlessly, equally comfortable pursuing prey in water or on land, and capable of rapid transitions between the two. Solitary and territorial, a single Octowolf can deplete an entire region of game animals and livestock before moving on to new hunting grounds.

## Presentation

An Octowolf measures roughly 12 to 16 feet in total length, with the wolf-portion constituting about half its frame. Its front end resembles a massive, dire wolf – muscular shoulders, powerful forelimbs ending in ripping claws, and a head of terrible size with jaws large enough to swallow a human whole. Its fur is midnight black, slick and oil-like, seeming to swallow light, and it perpetually appears wet even when dry. Its eyes are an unsettling silver-gray, ringed with what appears to be calcified predator-scar tissue. Behind and below the wolf-body, eight tentacles of extraordinary musculature erupt, each as thick as a man's torso and covered in dark suckers that can pierce armor. The creature's skin where wolf-body transitions to tentacles is a twisted, scarred mass of tissue that never fully healed. The smell it carries is of deep water, predatory musk, and the ozone-scent of deep underwater caves.

## Key Behaviors

Octowolves are ambush predators that haunt the water-to-land interface, using water as their primary domain but willing to pursue prey considerable distances inland if the hunting is good. They are intelligent and creative, preferring to study their prey and set tactical advantages rather than attacking immediately. A single Octowolf can claim a territory spanning many miles and will patrol it regularly, familiarizing itself with every stone, every shallow, every place a prey creature might escape. They are cannibalistic and will consume dead packmates without hesitation, and they seem to regard smaller dreadspawn as either threats or food depending on context. An Octowolf breeds slowly; a gravid female becomes impossibly aggressive and will attack anything that approaches her chosen den.

## Combat Strategy

An Octowolf typically initiates combat from water or dense vegetation, using ranged tentacle attacks and ambush positioning to whittle down opponents before committing to melee. Its tentacles allow it to attack multiple targets simultaneously or focus all force on a single victim. Once engaged, it uses its superior dexterity and reach to control the battle space, using tentacles to grapple and immobilize while its jaws deliver devastating bite attacks. The creature is intelligent enough to recognize overwhelming force and will retreat into water where it maintains significant tactical advantage. A cornered or protecting young Octowolf fights with terrifying ferocity.

## Attack Methods

### Rending Bite

The Octowolf's massive jaws snap down with bone-crushing force, capable of severing limbs or tearing through armor. A bite that lands does catastrophic damage and may leave the victim unable to act.

### Tentacle Constriction

One or more of the creature's tentacles wraps around a victim with relentless pressure, constricting their breath and crushing bones. A victim caught in a tentacle cannot move and is crushed harder with every moment.

### Tentacle Rake

Multiple tentacles lash out in rapid succession, each one capable of piercing or slashing with horrifying speed. Against multiple opponents, this allows the creature to strike several targets in quick succession.

## Special Abilities

### Amphibious Supremacy

The Octowolf moves with equal ease in water and on land. In water it is faster, can approach unseen, and has escape routes land-bound creatures cannot follow.

### Tentacle Precision

The creature's eight tentacles move with independent, highly precise coordination, allowing it to grapple multiple targets or perform complex actions simultaneously. The tentacles can extend surprising distances and handle objects with great dexterity.

### Predatory Intellect

The Octowolf is intelligent, learning prey patterns, setting traps, and anticipating evasive action. It can coordinate with other Octowolves if they happen to meet, though these encounters often end in combat between them.

## Additional Information

Fire and extreme cold are the Octowolf's primary vulnerabilities – fire damages its flesh directly and overwhelms its sensory organs, while sustained cold immobilizes its tentacles and slows its reflexes dramatically. Deep, warm water is where the Octowolf is most dangerous; in cold waters or dry conditions, it is far less dangerous. The creature's tentacles, if severed, will eventually regenerate over weeks or months, but significant tissue damage takes years to fully heal. Harvesting an Octowolf after death is dangerous – the creature's tentacle reflexes persist for hours, and the venom glands in its suckers remain active even in death. The fur can be crafted into water-resistant clothing of fine quality, and the teeth make good weapons or trophies. Some hunters have made it their life's work to track and kill Octowolves, building elaborate traps or calling in aid from multiple communities; these hunts are often as deadly for the hunters as for the prey.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 10-13 (1d4+9)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 14-17 (1d4+13)

- **Creativity:** 11-16 (1d6+10)
