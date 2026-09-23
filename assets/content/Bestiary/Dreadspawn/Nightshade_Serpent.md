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

The shadows between the stones seem wrong – deeper, more solid than they should be. You catch the glint of something like a jewel, then – movement that was never quite there, a shape that shifts at the edge of vision. The air grows cold and still, and you smell it: something like rotting nightflowers, a scent that makes your skin prickle with primal dread. Then you see the eyes – no, feel them – two points of sickly luminescence in the darkness, ancient and intelligent and empty of anything resembling mercy. A sinuous form rises from shadow itself, scales the color of midnight oil, and the whisper-sound of serpentine movement becomes deafening in your ears.

# Dossier {#dossier}

Nightshade Serpents are apex predators of shadow and darkness, born from the corruption of natural serpents by magical forces that transform them into something far greater and terrible. They are creatures of deliberate malice, possessing an intelligence far beyond that of normal animals and a hunger that goes beyond sustenance – they seem to feed on fear and suffering as much as on flesh. These serpents haunt deep caves, sunken ruins, and places where sunlight rarely penetrates, sometimes moving into civilization to hunt in cellars, crypts, and the darkness beneath cities. A single Nightshade Serpent can bring terror to an entire region as it methodically hunts, leaving behind only drained corpses.

## Presentation

A Nightshade Serpent measures 12 to 18 feet in length, its body thick as a man’s thigh and muscled with terrible power. Its scales are midnight blue and black, arranged in fine patterns that seem to shift and flow when observed indirectly, as though the creature exists partially in shadow regardless of lighting. Its eyes glow a sickly phosphorescent green, without pupil or iris, seeing in perfect darkness and burning with visible intelligence. Its mouth opens to reveal fangs of terrible length and sharpness, glistening with venom so potent it smokes faintly in the air. The creature moves with liquid grace, its musculature rippling beneath its scales, and it can contort and compress its body in ways that seem to mock natural anatomy. A faint, nauseating smell of nightshade flowers and grave-earth surrounds it constantly.

## Key Behaviors

Nightshade Serpents are primarily nocturnal hunters, though they can remain active in deep darkness regardless of time of day. They are territorial, establishing a hunting ground and defending it fiercely from other large predators. Unlike natural serpents, they are not purely ambush predators – they will pursue prey relentlessly, driving it toward terrain disadvantages. They seem to hunt for pleasure as much as for food, often playing with prey rather than killing it immediately. A Nightshade Serpent has been known to toy with a victim for hours, inflicting pain without delivering the mercy of a killing bite. They breed rarely, and a gravid female becomes impossibly aggressive, attacking anything that approaches her nesting site with world-ending ferocity.

## Combat Strategy

A Nightshade Serpent initiates combat by striking from darkness or obscurement, attempting to land a poisonous bite that will weaken its prey over time. It uses its superior speed and agility to avoid countermeasures, positioning itself where it can strike multiple times without taking damage. Once it has injected venom, it becomes patient, pursuing its weakening opponent at a measured pace, toying with it even as paralysis spreads. The creature is cunning enough to recognize overwhelming force and will attempt to retreat into the deepest darkness if severely wounded, though a cornered Nightshade Serpent fights with suicidal ferocity rather than surrender.

## Attack Methods

### Venomous Fang Strike

The serpent’s head strikes like a whip-crack, its elongated fangs driving deep into flesh and injecting an incredible volume of potent neurotoxin. The venom begins its work almost immediately, spreading through the victim’s body in waves of pain and creeping paralysis.

### Constricting Coil

Once prey is weakened or immobilized by venom, the serpent coils its massive length around the victim, crushing the life from them with inexorable pressure. Armor provides minimal protection against the absolute force of the creature’s muscular body.

### Shadow Strike

The creature’s connection to darkness allows it to strike from obscurement even in well-lit areas, seeming to flow from shadow itself before striking and retreating back into darkness that shouldn’t exist.

## Special Abilities

### Shadow Affinity

The Nightshade Serpent moves through shadows as though they were solid ground, able to disappear into darkness and emerge from any patch of shadow within line of sight. In areas of deep shadow or darkness, the creature is nearly invisible.

### Venom of Living Nightshade

The creature’s venom is a mixture of neurotoxins that causes creeping paralysis, searing pain, and eventual death. Those bitten find their limbs growing heavy and unresponsive even as the pain intensifies unbearably.

### Intelligent Predation

Unlike natural serpents, Nightshade Serpents demonstrate cunning and malice. They learn and remember, exploiting weaknesses in their prey’s defenses and predicting evasive action with unsettling accuracy.

## Additional Information

Cold is the Nightshade Serpent’s primary weakness – sustained cold or freezing temperatures slow its metabolism and reduce the efficacy of its venom dramatically. Bright light does not harm it but does seem to make it uncomfortable, and the creature will usually avoid areas of direct sunlight if possible. Holy water and positive magical energy can damage it as well, as though the creature is partially sustained by negative or corrupted forces. The venom, if carefully harvested, is extraordinarily valuable, and poisoners and dark sorcerers alike will pay for it; a single vial can command a fortune from the right buyer. Some legends suggest that Nightshade Serpents are the corrupted remains of ancient serpent-gods, twisted into their current form by some primordial curse. Even in death the creature’s cold smile remains.

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
