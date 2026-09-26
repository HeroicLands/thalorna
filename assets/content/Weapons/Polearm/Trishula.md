---
shortcode: trsha
name: {full: Trishula, aliases: []}
type: weapongear
description: "Sacred three-pronged polearm symbolizing cosmic order and battlefield virtue."
tags: []
data: {icon: icon-polearm, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 5
    valueBase: 108
    durabilityBase: 12
    heftBase: 14
    strikeModes:
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 4, aspect: piercing}
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
        lengthBase: 6
        defense: {blockMod: 5, counterstrikeMod: 5}
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
        lengthBase: 6
        defense: {blockMod: 0, counterstrikeMod: 0}
      halfswordshaft:
        type: melee
        name: Half-Sword Shaft
        assocSkillCode: melee
        minParts: 2
        attack: {spread: 4, modifier: 0}
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
          halfSword: true
          bleed: false
          twoHndLen: 0
          shaft: true
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 6
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A three-pronged sacred polearm featuring symmetrical tines, the Trishula is both weapon and symbol of cosmic order. Its three prongs pierce and divide, making it effective for thrusting and binding; warriors prize it for both its battlefield virtue and its ceremonial prestige.
