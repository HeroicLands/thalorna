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

The temperature drops so suddenly you can see your breath misting in the air. In your peripheral vision, something moves—but when you turn to look directly at it, only shadow remains. You feel watched and hunted, prey to something you cannot quite see. There is a cold on your skin that has nothing to do with winter.

# Dossier {#dossier}

Grimshadows are ancient malevolent spirits that haunt places of old tragedy and despair. They are not demons, not undead, but something older and stranger—creatures born from concentrated terror and suffering. A Grimshadow is often tied to a location, anchored by the death or torment that created it, though some wander at will. They feed on fear and despair rather than flesh, making them more dangerous to the mind than the body. A victim of a Grimshadow may survive physically but be left broken spiritually. Most encounters with Grimshadows are a contest of nerve rather than of arms.

## Presentation

The Grimshadow has no fixed form. It appears as an absence of light more than a presence—a humanoid silhouette carved from deeper darkness, roughly seven feet tall. Where eyes should be, two points of red or amber light burn with terrible intelligence. Its outline shifts and wavers, and dark tendrils extend and withdraw like the tentacles of some deep-sea thing. It moves without the normal restrictions of weight or momentum, flowing across surfaces as easily as shadow flows across a wall. Where it passes, frost crystallizes in an instant and melts just as quickly.

## Key Behaviors

Grimshadows prefer to stalk rather than ambush, following their prey and feeding off the growing anxiety of being hunted. They often manifest in places where travelers are already vulnerable—lost parties, isolated individuals, those fleeing other dangers. A Grimshadow may follow a caravan for days, appearing at dusk, vanishing at dawn, slowly corroding the victims' courage and sanity through sustained dread. Unlike other predators, they do not rush the kill. A Grimshadow can sustain itself on fear alone and will sometimes toy with victims indefinitely, feeding on their slow degradation. They show strong territorial behavior around places of past tragedy, and will defend such areas aggressively against intruders.

## Combat Strategy

Grimshadows do not fight directly if they can help it. They use fear and illusions to break opponents' resolve, herding them into mistakes or paralysis. In combat, a Grimshadow uses its superior mobility to strike from unexpected angles, always emphasizing the victim's inability to predict or stop it. It targets the most fearful member of a group, focusing attacks to demoralize rather than kill. If forced into sustained direct combat against prepared opponents, a Grimshadow attempts to retreat into shadow; it will not engage an opponent armed with strong light-magic or unshakeable courage, preferring prey with existing weaknesses.

## Attack Methods

### Shadow Strike

Tendrils of living darkness coalesce around the creature's form and strike with supernatural precision. The blow is both physical and spiritual—victims feel as though their strength drains with each impact, and the horror of being struck by something that should not exist is crushing.

### Fear Aura

The Grimshadow radiates an overwhelming presence of dread and despair. Those near it struggle to think clearly, their muscles feel heavy, and panic becomes difficult to resist. Under sustained exposure, victims may become completely paralyzed by terror.

## Special Abilities

### Shadow Blend

In any area of dim light or shadow, the Grimshadow becomes nearly invisible. It can move through areas of darkness as though they were open space, and an attack it makes from shadow or dim light is very hard to see coming.

### Tenebrous Form

The Grimshadow is not fully material and is resistant to physical weapons. Light-magic and blessed light bypass this resistance and harm it as normal. The creature's form becomes more solid and vulnerable in bright light.

### Despair Manifestation

The Grimshadow can create phantom images and sensations drawn from the fears of those near it. Victims see different horrors depending on what they fear most. These illusions can do real harm, through a victim's conviction that they are real.

### Aura of Dread

Simply being near a Grimshadow wears at the mind. The longer a victim remains close to it, the more their will and strength deteriorate. Extended exposure can leave scars on the mind that never heal.

## Additional Information

Grimshadows are most vulnerable to blessed light and magic associated with hope, courage, and protection. Clerics and priests of faiths emphasizing light and righteousness are natural counters to these creatures. Bright torchlight alone is insufficient; the light must be blessed or magical in nature to fully suppress a Grimshadow. A Grimshadow cannot be permanently killed while anchored to a location—it will reform in that place. To permanently destroy one, the source of its manifestation must be addressed: the curse lifted, the murdered spirit avenged, the old wound cleansed. Some philosophers argue that Grimshadows are not truly evil but wounded, and that redemption or healing is possible. Few have been brave or wise enough to attempt it.

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
