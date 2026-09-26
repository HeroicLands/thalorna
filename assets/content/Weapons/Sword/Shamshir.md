---
shortcode: shmshr
name: {full: Shamshir, aliases: []}
type: weapongear
description: "Deeply curved supple single-edged saber; cavalry officer's refined speed-stroke."
tags: []
data: {icon: icon-sword, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 2.5
    valueBase: 168
    durabilityBase: 12
    heftBase: 9
    strikeModes:
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 10, modifier: 3, aspect: edged}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 6
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
        lengthBase: 5
        defense: {blockMod: 0, counterstrikeMod: 0}
      pommel:
        type: melee
        name: Pommel
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
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
          shaft: false
          pommel: true
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 5
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A deeply curved single-edged blade narrow and supple in the hand, the shamshir favors the horseman's swift stroke. The curve gathers momentum through the slice, while the slender profile allows rapid recovery for another cut. Officers and cavalry elite carry this refined steel, its curve speaking of speed and the practiced swordsman.
