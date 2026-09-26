---
shortcode: pata
name: {full: Pata, aliases: []}
type: weapongear
description: "Blade-fixed gauntlet for armored straight-arm thrust; duelist's sword-shield."
tags: []
data: {icon: icon-sword, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 3
    valueBase: 180
    durabilityBase: 12
    heftBase: 10
    strikeModes:
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
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 10, modifier: 2, aspect: edged}
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
        lengthBase: 5
        defense: {blockMod: 0, counterstrikeMod: 0}
      bash:
        type: melee
        name: Gauntlet Bash
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
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 5
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A straight or slightly curved blade fixed to a wide steel gauntlet that runs from fingertips to elbow, providing hand and arm defense while the blade strikes. Worn as a single piece, the pata thrusts and cuts with the whole armored arm behind it, making it both sword and shield for the swordhand. Favored by heavily armored horsemen and duel-fighters.
