---
shortcode: gundao
name: {full: Green Dragon Crescent Blade, aliases: []}
type: weapongear
description: "Curved polearm blade for slashing across multiple foes."
tags: []
data: {icon: icon-polearm, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 10
    valueBase: 300
    durabilityBase: 12
    heftBase: 22
    strikeModes:
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 10, modifier: 5, aspect: edged}
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
          long: true
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
        lengthBase: 7
        defense: {blockMod: 0, counterstrikeMod: 0}
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
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
        lengthBase: 7
        defense: {blockMod: 0, counterstrikeMod: 0}
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
        lengthBase: 7
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A curved, forward-sweeping blade affixed to a long shaft, the Green Dragon Crescent Blade delivers powerful slashing strokes and thrusts in a single weapon. The distinctive arc lets trained warriors make broad arcs that cut across multiple opponents and interdict cavalry charges with formidable reach and cutting edge.
