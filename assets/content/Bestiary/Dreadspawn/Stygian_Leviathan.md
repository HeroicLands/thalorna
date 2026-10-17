---
shortcode: stygnlvt
name: {full: Stygian Leviathan, aliases: []}
type: being
subType: creature
description: "An elder aquatic predator of lightless subterranean seas whose indifferent presence renders entire underground ecosystems dormant with fear."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+16
    end: 1d6+18
    dex: 1d6+10
    agl: 1d6+10
    per: 1d6+14
    aur: 1d6+4
    wil: 1d6+10
    rea: 1d6+6
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 53}}
    - name: Tearing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Tearing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tentacle Grasp
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Tentacle Grasp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Body, shortcode: torsozone, probWeight: 24}
          - {name: Tail, shortcode: tailzone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 20000, calc: "20000"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[stygnlvt|Stygian Leviathan]]{float=top-left}

The underground river opens into a lake, and the priest's torch cannot find its far side. The water is black and perfectly still, and the cave is silent: no bats, no dripping, no blind fish rising, none of the small noises of the passages behind you. Then the water out in the dark lifts in a long, low swell that rolls to your feet and wets your sandals. Out of the swell comes an arm, gray-black and thick as a tree, studded with barnacle-like growths, and it lies along the surface, and it keeps coming, and it is longer than the boat you came in. Behind it, far out, two pale eyes open just above the water, very far apart.

# Dossier {#dossier}

The Stygian Leviathan is a dreadspawn of the deep waters under the earth: forty to sixty feet long and as heavy as a whale, armed with grasping tentacles and jaws that bite a man in half, which lives in cold, lightless underground seas and lies dormant on the bottom for long stretches. Where it lives, everything else falls silent. One lives in the underground waters beneath [[place-kankulrgn|K'ankul Region]], the limestone country of [[place-cntrlkchchk|Central K'ich'chik]] whose ground is hollow with rivers, chambers and the sacred pools that open them to the sky, and whose priests teach that those waters are the mouths of [[place-chaltzumaq|Ch'al Ts'umaq]], the underworld. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The leviathan's body is long and massive, more compact and more muscular than a whale's, with four short, finned limbs and a long, heavy tail. Its hide is gray-black, the color of deep water, studded with barnacle-like growths and clusters of crystal and seamed with old scars. From its shoulders spring a crown of long tentacles, thick, strong and very precise in their movements. Its head is broad and its jaws long, lined with teeth like stakes. Its eyes are pale, filmed and very far apart. It moves slowly and with enormous power, and when it rises the whole lake moves with it. Near it the water is colder than the rock round it.

## In the Land

K'ankul looks low and flat from above, and under it run rivers, chambers and lakes that never see the sun. The leviathan holds the deepest and coldest of those, a lake under the limestone that no priest has seen the far side of, and the flooded passages that run from it for miles. It lies dormant on the lake bottom for months, and wakes to feed on whatever has come into its waters: the blind fish and pale crayfish, the creatures that come down through the sacred pools, the offerings, and the priests. The cave life of its waters falls quiet when it stirs and stays quiet for days. It cannot leave the deep water, and the shallow streams and the sunlit pools near the surface are safe from it.

## Key Behaviors

The leviathan spends most of its time dormant, barely moving on the bottom of its lake. It wakes when something disturbs the water, which it feels from miles away, and rises to feed. It is not cruel; it is indifferent, and everything else in its waters behaves as though that were worse. It drives off other large predators. It seizes prey with its tentacles from a distance, drags it under and holds it there, and finishes it with its jaws. It is intelligent enough to recognize a strong enemy and withdraw from it into the deep water.

## What the Priests Do

The K'ankul priesthood holds that to descend into a sacred pool is to touch the boundary of the realm of [[lore-tzuqilixbaldty|Ts'uqil Ish'bal]], the death god, and the priests who go down into the deepest waters do so knowing that something lives there. They do not call the leviathan a god or a servant of a god. They do mark the passages that lead to its lake with carved stones, pour their offerings into it from the shore and never from a boat, and they go down by torchlight in numbers, because strong light pains it. Blood poured into its water draws it up. Sacrifices that are given to the deepest pools are given knowing what will take them, and the priests regard that as the god's business. Pilgrims are not told.

## Signs

- A cave where the bats are gone, the drip has stopped echoing, and no fish rise.
- Long, slow swells on still underground water with no current or wind to cause them.
- Water in a deep pool colder than it should be, with a faint mineral smell.
- Crystal growths and barnacle-like shells lying on a lake shore far from any sea.
- Offerings left at a sacred pool's edge that are gone in the morning, along with the stone they lay on.

## Combat Strategy

The leviathan attacks with its tentacles first, from a distance, seizing whatever it can reach and dragging it into the water or toward its jaws. It uses several tentacles at once against several enemies. Once its prey is in the water, it holds it under, crushing and drowning it, and bites to finish it. It recognizes overwhelming danger and sinks into the deep water to wait, healing there. Light pains it and confuses its senses, and warmth weakens it; out of deep, cold water it slows badly.

## Attack Methods

### Tearing Bite

The jaws close with crushing force, severing limbs and crushing armored men, and the bite usually ends a fight the leviathan has won.

### Tentacle Grasp

A tentacle snakes out and wraps a victim and drags him toward the body or into the water. The grip is nearly impossible to break without help, and struggling only tires him faster.

## Special Abilities

### Drowning Embrace

A victim dragged into the water is held under by tentacles and body together, crushed and drowned at once.

### Deep-Water Supremacy

In deep, cold water it moves fast and strikes surely, and it shrugs off cold and pressure that would kill anything else. In shallows or on land it is slow and sluggish.

### Vibration Sense

It feels every movement in its waters from miles away.

### Tentacle Mastery

Its tentacles move with great precision and independence, so that it attacks several men at once and handles what it holds with uncanny skill.

### Regeneration in Deep Water

In deep, cold water it heals. Warm, shallow water weakens it badly.

### Light Weakness

Bright light pains it and disrupts its senses, and a party with strong light in its domain is a party it is reluctant to face.

## Attributes

Strength
: 17-22 (1d6+16)

Endurance
: 19-24 (1d6+18)

Dexterity
: 11-16 (1d6+10)

Agility
: 11-16 (1d6+10)

Perception
: 15-20 (1d6+14)

Aura
: 5-10 (1d6+4)

Will
: 11-16 (1d6+10)

Reasoning
: 7-12 (1d6+6)

Creativity
: 7-12 (1d6+6)
