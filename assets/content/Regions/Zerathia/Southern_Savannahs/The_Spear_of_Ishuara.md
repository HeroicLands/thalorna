---
shortcode: spearishuar
name: {full: The Spear of Ishuara}
type: weapongear
description: "The spear the Fénjara of Fénjara Village keep, said to destroy the most dangerous spiritual creatures, which outsiders want and the family that guards it will not give up."
tags: [artifact, relic, nyaluba]
data:
  kind: weapon
  icon: icon-polearm
  templatePriority: null
  packFolder: southernsavannahs
  unique: true
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 4
    valueBase: 0
    durabilityBase: 14
    heftBase: 13
    strikeModes:
      - shortcode: impale
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 5, aspect: piercing}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 4
          AR: 0
          noAttack: false
          noBlock: false
          entangle: false
          envelop: false
          couched: true
          long: true
          onlyInClose: false
          shieldMod: 0
          slow: true
          thrust: true
          swung: false
          halfSword: false
          bleed: false
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 7
        defense: {block: {modifier: 0}, counterstrike: {modifier: 0}}
      - shortcode: shaft
        type: melee
        name: Shaft
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 3
          AR: 0
          noAttack: false
          noBlock: false
          entangle: false
          envelop: false
          couched: true
          long: true
          onlyInClose: false
          shieldMod: 0
          slow: false
          thrust: false
          swung: false
          halfSword: false
          bleed: false
          twoHndLen: 0
          shaft: true
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 7
        defense: {block: {modifier: 0}, counterstrike: {modifier: 0}}
---

## Overview {#overview}

The Spear of Ishuara is a spear said to destroy even the most dangerous spiritual creatures. It is said to lie in [[place-fenjaravlg|Fénjara Village]], in the gallery forest where the savannah closes into bush. The village has no wall, and the spear is not shown there.

## Who Holds It {#who-holds-it}

The family of [[being-tabesnfnjr|Tabeso nu Fénjara]] keeps it, as guardians of the spiritual world, and the [[affiliation-fenjara|Fénjara Tribe]] do not speak of it to outsiders. The tribe's distrust of outsiders is strongest on this point.

## Its Story {#its-story}

The Fénjara say that the family keeps it as guardians of the spiritual world, and they say no more of how it came to the family.

## What It Does {#what-it-does}

By the Fénjara's account, the spear cuts a spiritual creature that a blade of the ordinary world only passes through, and it does as much harm to a creature of the spirit world as to a body.

## Who Wants It {#who-wants-it}

- **An outsider who wants the spear for personal gain** is the danger the family guards against, and Tabeso stands between such a person and the village.

## Hooks {#hooks}

- An outsider comes to Fénjara Village with a story of a spirit-beast he cannot kill, and the spear is what he has come for. Tabeso must keep it and also face a tribe that mistrusts the stranger and the hunter who brought him.

:::secret {title="What Tabeso uncovers"}
The family guards more than a weapon. The family's lineages follow a trail across the spirit world as readily as across the ground, and the spear came to them along such a trail. The spear is not kept in the village at all: it lies on a trail across the spirit world, and a trail-reader of the family's lineage walks that trail to bring it out and carries it back when the work is done.

Pursuing the spear leads Tabeso to the truth of his own lineage. The family descends from the one who first carried the spear out of the spirit world, and its role as guardians is the price of that carrying: the spear can leave the spirit world only in a family hand, and every time it is drawn, something the family owes the spirit world is drawn with it.
:::

## See Also {#see-also}

[[place-fenjaravlg|Fénjara Village]]
: the family's village

[[being-tabesnfnjr|Tabeso nu Fénjara]]
: the hunter whose family guards it

[[affiliation-fenjara|Fénjara Tribe]]
: the tribe whose family keeps it
