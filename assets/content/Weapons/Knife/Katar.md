---
shortcode: katr
name: {full: Katar, aliases: []}
type: weapongear
description: "H-gripped forearm-blade for knuckle-punch; tavern brawler's forcing steel."
tags: []
data: {icon: icon-broaddagger, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: knife
  weaponType: Knife
  system:
    weightBase: 1
    valueBase: 60
    durabilityBase: 12
    heftBase: 6
    strikeModes:
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 6, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 2, aspect: piercing}
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
        lengthBase: 3
        defense: {blockMod: 0, counterstrikeMod: 0}
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 10, modifier: 1, aspect: edged}
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
          swung: true
          halfSword: false
          bleed: false
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 3
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A straight blade fixed to a wide H-shaped grip that runs the length of the forearm, swung and thrust with the whole hand in a knuckle-punch motion. The blade tapers from a broad base to a point, forcing impact through mail and plate when driven with shoulder and hip. A weapon of close brawlers and bare-knuckle fighters, favored in the packed press of a tavern or ambush.
