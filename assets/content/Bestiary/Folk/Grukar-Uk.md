---
shortcode: grukaruk
name: {full: Grukar-Uk, aliases: []}
type: being
subType: creature
description: "A small, dull, lazy Grukar drone forming the teeming bulk of any tribe, unremarkable but overwhelming in sheer numbers."
tags: [folk]
data:
  packFolder: folk
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: grukar
  attrRollFormula:
    str: 1d6+8
    end: 1d4+9
    dex: 1d4+5
    agl: 1d4+4
    per: 1d4+4
    aur: 1d4+2
    wil: 1d4+3
    rea: 1d4+2
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
      weight: {base: 120, calc: "120"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[grukaruk|Grukar-Uk]]{float=top-left}

They come out of the tree-line at a jog, twenty or thirty of them, short and broad and gray-green, bristled across the shoulders like boars, and they do not shout. Each carries something to hit with: a hand-axe, a nail-studded club, a fire-hardened spear. Their faces are flat and heavy-browed, with small eyes and stubby tusks jutting from the lower jaw. They do not look at one another or at you; they look at the big one at the back, and when the big one barks, they all change direction at once, like a flock of birds, toward the gate of the steading, where the cattle are.

# Dossier {#dossier}

The Grukar-Uk is the common member of the [[lore-grukarfolk|Grukar Folk]], the laborer and foot soldier of its tribe and roughly eighty-five percent of every tribe's number: about four and a half feet tall, stocky, strong for its size, dull, lazy, and spawned in such numbers that its death matters to no one, least of all to the [[being-grkrahk|Grukar-ahk]] that laid it. An Uk hatches knowing everything it will ever know, how to hold a spear, which fungus is safe, where the tribe's water lies, and it learns nothing afterward. One Uk is a nuisance. Fifty, driven by a [[being-grkrhshk|Grukar-Hushk]] and aimed by a [[being-grkrsh|Grukar-Sha]], are a tide that burns farmsteads, empties folds and carries off the people it catches, to eat.

## Presentation

A Grukar-Uk is short and wide, about four and a half feet tall and as heavy as a big man, with a broad chest, a thick neck, and arms that hang a little too long. Its skin is a dull gray-green, rougher and hairier than the other castes', with coarse dark bristles over the back, shoulders and forearms. The face is broad and flat, with a heavy brow, small eyes and a jutting lower jaw from which short tusks stick up. It wears whatever it has scavenged: ill-fitting leather, scraps of stolen mail, a dented helm. It carries rough, practical weapons, hand-axes, clubs, spears with fire-hardened points, and now and then a stolen sword it does not use well. Uk communicate as all Grukar do, mostly by posture and gesture, with clacks, rasps and calls from the chest and throat, some of them too low or too high for human ears.

## In the Land

Uk are wherever Grukar are: in the nests of [[place-grkrhlmrgn|Grukarholm Region]] and the eastern [[place-vrystwald|Vristwald]], in the forest and tundra on [[place-targud|Targud]]'s eastern border, and in the empty interior of [[place-aelwyth|Aelwyth]], where [[lore-grukaraelwyth|The Grukar of Aelwyth]] have been for seven centuries. A tribe is a place with a spawner in it, and the Uk do the tribe's work round that place: they dig the chambers and the moats, gather the food, cut the wood, carry the loot home and die holding the pass. They go where they are driven. Raiding parties that come down on [[place-skathwald|Skathwald]]'s villages, [[place-auldalon|Áuldalon]]'s steadings and the forest-edge farms of [[place-wyndmarch|The Wyndmarch]] are mostly Uk.

## Key Behaviors

The Uk are idle by nature. Left to themselves they eat, sleep, squabble over food and sleeping places, and do as little as they can. What moves them is hunger, greed, and above all fear of the Hushk; they obey the Sha because a Sha makes obedience feel like their own idea. They do not scheme and do not rebel, and their quarrels rarely come to killing, because killing a neighbor draws attention from above. An Uk cannot learn: shown a task a hundred times, it does it on the hundred and first exactly as on the first. It fights as it hatched knowing how, and that is all. A lone Uk is a cringing thing, more likely to run or grovel than fight. In a mob, with a Hushk behind it, it does not run until the Hushk falls.

## What the Frontier Does

Every people that borders the Grukar deals with the Uk the same way, because the Uk is the same everywhere. Steadings near the forest are built inside a ditch and a palisade, stock is penned at night, and a horn or a beacon calls the neighbors when a raiding party is seen. Nobody takes a Grukar as a slave, because an Uk cannot learn the work a captor needs, and nobody parleys with a raiding party of Uk, because an Uk cannot be told terms. The [[lore-varokhiclt|Varokhi]] villages of Skathwald keep watches and walls and spend more labor on defense than on anything else. The hill levy at Áuldalon and the frontier garrisons of the [[affiliation-kngdmldrth|Kingdom of Aldorath]] have learned the one rule every veteran teaches: kill the Hushk, and the Uk scatter.

## Signs

- Broad, splay-toed, clawed bare footprints in mud, many of them together, in an orderly file.
- Stock gone from a fold in the night, the hurdles broken outward, and the guard dogs dead.
- A rank, musky smell on the edge of a wood, and fresh dung in a pile at a trail-side.
- Felled trees and dug earth at the edge of a forest where nobody from the village has been cutting.
- Low clacks and rasps at night from the trees, and a pressure in the chest from calls that cannot be heard.

## Combat Strategy

Uk fight in a mob under a Hushk's command, and the mob is their strength. They come on together, rush from several sides when a Sha has planned it, and press a target with numbers until it falls. They are strong for their size, and a blow from one is dangerous. They have no tactics of their own and no courage of their own: a mob whose Hushk has been killed or has fled breaks and runs within moments, every Uk for itself. One at a time, an Uk is no match for a trained soldier. Their weapons are whatever they carry, used with the plain competence they hatched with and never improved.

## Special Abilities

### Strength of Numbers

In a mob under a Hushk, Uk press harder and stand longer than any one of them would alone, and their coordinated rush can overwhelm trained soldiers by weight.

### Practical Toughness

Uk are used to hardship and hunger, and they keep going through wounds and exhaustion that would stop many people.

### Inherited Competence

An Uk hatches knowing how to use the rough weapons and tools its tribe uses, and uses them adequately from the day it hatches. It never gets any better.

### Broken Without Leaders

When the Hushk driving a mob falls or flees, the Uk lose all cohesion and scatter.

## Attributes

Strength
: 9-14 (1d6+8)

Endurance
: 10-13 (1d4+9)

Dexterity
: 6-9 (1d4+5)

Agility
: 5-8 (1d4+4)

Perception
: 5-8 (1d4+4)

Aura
: 3-6 (1d4+2)

Will
: 4-7 (1d4+3)

Reasoning
: 3-6 (1d4+2)

Creativity
: 4-7 (1d4+3)
