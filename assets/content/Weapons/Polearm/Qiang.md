---
tags: []
name:
  full: Qiang
  aliases: []
description: "Leaf-shaped slender thrusting spear with silk tassel; versatile reach."
shortcode: qing
type: weapongear
data:
  icon: icon-polearm
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 3.5
    valueBase: 72
    durabilityBase: 11
    heftBase: 12
    strikeModes:
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 8
          modifier: 0
        impactBase:
          numDice: 1
          die: 8
          modifier: 4
          aspect: piercing
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
        defense:
          blockMod: 0
          counterstrikeMod: 0
      shaft:
        type: melee
        name: Shaft
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 8
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 1
          aspect: blunt
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
        defense:
          blockMod: 0
          counterstrikeMod: 0
      halfswordimpale:
        type: melee
        name: Half-Sword Impale
        assocSkillCode: melee
        minParts: 2
        attack:
          spread: 4
          modifier: 0
        impactBase:
          numDice: 1
          die: 8
          modifier: 3
          aspect: piercing
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
          halfSword: true
          bleed: false
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 7
        defense:
          blockMod: 0
          counterstrikeMod: 0
      halfswordshaft:
        type: melee
        name: Half-Sword Shaft
        assocSkillCode: melee
        minParts: 2
        attack:
          spread: 4
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 1
          aspect: blunt
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
        lengthBase: 7
        defense:
          blockMod: 0
          counterstrikeMod: 0
---

A slender thrusting spear with a leaf-shaped blade and decorative tassel, the Qiang blends reach and flexibility in a versatile polearm. The silk wrapping and tassel prevent blood from fouling the grip while serving to signal and distract in melee.
