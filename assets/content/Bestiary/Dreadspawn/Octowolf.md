---
shortcode: octowolf
name: {full: Octowolf}
type: being
subType: creature
description: "An unnatural wolf-and-octopus fusion haunting coastal marshes, deltas, and blighted waters where land and water meet."
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
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Rending Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Rending Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tentacle Constriction
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Tentacle Constriction
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
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
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 300, calc: "300"}
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

![[octowolf|Octowolf]]{float=top-left}

The wreck lies on its side on the sandbar, its ribs out of the water at low tide, black and weed-hung, the last of an imperial squadron that came into these channels and never went out. Something is lying in the shadow of the hull. It lifts its head: a wolf, huge and black, its fur slick and wet as oil, its jaws long enough to take a man's head. It stands up on two great forelegs and keeps standing, because behind the shoulders there are no hind legs, and the black fur gives way to gray-green skin and to arms, eight of them, thick and sucker-lined and curling, which carry it forward over the sand and down into the channel toward your boat, faster than a running dog.

# Dossier {#dossier}

The Octowolf is a dreadspawn that joins the fore-parts of a great wolf to the hind-parts of an octopus: twelve to sixteen feet long and three hundred pounds, with a wolf's head, jaws and forelegs and eight long, sucker-lined arms behind, which carry it on land and drive it through water. It hunts where land and water meet, and it is clever, patient and cruel. One holds the [[place-tamzirshoals|Tamzir Shoals]] in the Taruzelian archipelago, the maze of sandbars, rocks and hard currents where a makeshift Taruzelian fleet destroyed a Vylarian squadron and won [[place-taruzelrgn|Taruzel]] its independence, and it lairs in the wrecks of that squadron. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The octowolf's front half is a wolf on a monstrous scale: heavy shoulders, two powerful forelegs with ripping claws, and a great head with jaws that can close over a man's head and shoulders. Its fur is black, slick and oily, and it does not shine even wet. Behind the shoulders the fur gives way to smooth gray-green skin that changes color, and to eight thick, muscular arms, each as long as a man, lined with suckers ringed with small hooks. On land it moves in a fast, pouring lope, pulling with the forelegs and pushing with the arms. In water it swims like an octopus, fast and jetting. Its eyes are yellow and very intelligent. It smells of salt, weed and wet dog.

## In the Land

The Tamzir Shoals are full of wrecks: the imperial warships driven onto the sand in the battle still lie there, and the channels have taken many ships since. The octowolf lairs in the hulks, using them as dens and as blinds, and it hunts the shoals and their channels for miles: seals, turtles, sharks, fish, seabirds on the sandbars, and the crews of small boats. It moves from wreck to wreck with the tides and comes ashore on the sandbars and the low islands at night. It wants warm, shallow water near deep channels. It does not go out into the open sea.

## Key Behaviors

An octowolf hunts by study and ambush. It watches its prey from a wreck or from under the water, learns its habits, and sets up its attack: it waits under a sandbar where a boat must ground, or in a hull a salvager will climb into. It attacks from the water with its arms first, seizing and dragging, then closes with its jaws. It is intelligent and inventive: it has been seen to drag a boat onto the sand and wait for its crew to wade. It pursues prey a long way inland if the hunting is good, and it returns to the water to eat. Two octowolves that meet fight.

## What the Pilots Do

Every pilot on the coast gives a newcomer the same first warning about the Tamzir Shoals, and the pilots who work them add a second: do not anchor in the lee of a wreck, and do not go aboard one. Fishermen of the islands net the shoals in daylight only, in pairs of boats, and carry fire-pots. Salvagers who dive the wrecks for imperial bronze and the squadron's treasure pay the [[affiliation-corsairleg|Corsair League]] for a guard boat and still lose men. The veterans' children, who inherited the grievance with the story, say the shoals keep the battle's wages for themselves. The Taruzelian cities have offered a bounty on the creature, and the Corsair League has not tried hard to collect it, because the octowolf keeps strangers out of channels the League would rather nobody else used.

## Signs

- Seal carcasses on the sandbars with the heads crushed and the bodies marked with rings of small hooked punctures.
- Broad, smeared tracks across the sand from the water to a wreck: two large clawed prints and a wide, wet drag.
- A wreck that the seabirds will not perch on.
- Nets torn from below and pulled down, with the floats sucked under.
- A boat found drifting in the channels with its gunwales scored by claws.

## Combat Strategy

An octowolf opens from the water or from cover, reaching with its arms to seize and drag one or several victims at once before it shows itself. Once it has someone, it uses its arms to hold, to strike and to keep the others off, and closes its jaws on the one it wants. It controls the ground: it fights at the water's edge where it can drag victims under, and in the channels where boats ground. It retreats into deep water when it is hurt, and it comes back. Fire and cold are what it fears.

## Attack Methods

### Rending Bite

The great jaws close with bone-crushing force on a limb, a shoulder or a head. A bite that lands can take off an arm or break a man's back.

### Tentacle Constriction

One or several arms wrap a victim and squeeze, and the hooked suckers hold. A man caught cannot move freely, cannot breathe easily, and is crushed harder the longer he is held, and the arms drag him toward the water and the jaws.

## Special Abilities

### Tentacle Rake

The arms lash out one after another, the hooked suckers tearing skin, so that it strikes several men in quick succession.

### Amphibious Supremacy

It moves well on land and better in water, where it is faster, approaches unseen, and escapes where nothing that walks can follow.

### Tentacle Precision

Its eight arms work independently and precisely, holding several men at once, reaching surprising distances, opening hatches, and handling objects with skill.

### Predatory Intellect

It learns, sets traps, and anticipates where its prey will run.

### Fire and Cold

Fire burns its skin and overwhelms its senses. Cold water stiffens its arms and slows it badly, and it keeps to warm shallows.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 14-17 (1d4+13)

Dexterity
: 15-20 (1d6+14)

Agility
: 14-17 (1d4+13)

Perception
: 14-17 (1d4+13)

Aura
: 10-13 (1d4+9)

Will
: 14-17 (1d4+13)

Reasoning
: 14-17 (1d4+13)

Creativity
: 11-16 (1d6+10)
