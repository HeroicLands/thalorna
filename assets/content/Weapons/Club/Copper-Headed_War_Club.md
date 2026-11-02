---
shortcode: cuhdclub
name: {full: Copper-Headed War Club}
type: weapongear
description: "Hardwood club capped with a hammered copper head; the One Fire's warriors' close weapon."
tags: []
data: {icon: icon-club, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: club
  weaponType: Club
  system:
    weightBase: 4
    valueBase: 30
    durabilityBase: 10
    heftBase: 12
    strikeModes:
      crush:
        type: melee
        name: Crush
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
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
          couched: false
          long: false
          onlyInClose: false
          shieldMod: 0
          slow: false
          thrust: false
          swung: true
          halfSword: false
          bleed: false
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 4
        defense: {blockMod: -5, counterstrikeMod: -5}
      shaft:
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
          couched: false
          long: false
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
        lengthBase: 4
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A short hardwood club whose striking end is capped or studded with copper. The north works copper cold, so the head is hammered rather than cast and dents before it breaks. The [[affiliation-tokchiaska|One Fire]]'s warriors carry them, and the copper they carry them with comes down through [[place-kahnionrgn|the Western Lakes]]: the Copper People sell it, and the River People ask at every great council that they stop ([[place-kahnekwaroten|Hammerstone]] names the clubs outright).

The head carries the weight. A blow lands as a hammer lands, and the hammered copper dents on a steel guard instead of breaking.
