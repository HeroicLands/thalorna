---
tags: []
name:
  full: Katana
  aliases: []
description: "Folded-layer curved single-edged blade; officer's status and discipline."
shortcode: ktna
type: weapongear
data:
  icon: icon-sword
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 3
    valueBase: 240
    durabilityBase: 13
    heftBase: 12
    strikeModes:
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 6
          modifier: 0
        impactBase:
          numDice: 1
          die: 10
          modifier: 3
          aspect: edged
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
          twoHndLen: -1
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 5
        defense:
          blockMod: 0
          counterstrikeMod: 0
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 6
          modifier: 0
        impactBase:
          numDice: 1
          die: 8
          modifier: 2
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
          halfSword: false
          bleed: false
          twoHndLen: -1
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 5
        defense:
          blockMod: 0
          counterstrikeMod: 0
      pommel:
        type: melee
        name: Pommel
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 4
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 0
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
          halfSword: false
          bleed: false
          twoHndLen: 0
          shaft: false
          pommel: true
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 5
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
          modifier: 2
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
        lengthBase: 5
        defense:
          blockMod: 0
          counterstrikeMod: 0
---

A long curved single-edged blade forged in folded layers and tempered to a keen edge, the katana is the work of patient smithcraft. The distinctive curve gathers force in the downward cut, while the blade tapers to a fine point suited to thrusting and precision. Worn at the waist by ranked officers and sworn retainers, this steel speaks of status and martial discipline.
