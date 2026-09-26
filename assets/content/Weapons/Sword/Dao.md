---
shortcode: dao
name: {full: Dao, aliases: []}
type: weapongear
description: "Curved single-edged blade gathering momentum through geometry."
tags: []
data: {icon: icon-sword, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 3
    valueBase: 156
    durabilityBase: 12
    heftBase: 10
    strikeModes:
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 6, modifier: 0}
        impactBase: {numDice: 1, die: 10, modifier: 3, aspect: edged}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 5
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
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 6, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 1, aspect: piercing}
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

A single-edged blade with a gentle curve, the dao gathers momentum through its geometry. The blade widens gradually toward the tip, which concentrates the cutting force in a sweeping stroke from foot soldier or mounted troop alike. Simple in craft but effective in the press of bodies, this saber serves both disciplined formations and ranged skirmish.
