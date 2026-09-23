---
tags: []
name:
  full: Meteor Hammer
  aliases: []
description: "Rope-weighted iron ball whirled; master's devastating entangling reach."
shortcode: mtrhmr
type: weapongear
data:
  icon: icon-bolas
  templatePriority: null
sohl:
  kbcat: thrown
  weaponType: Thrown
  system:
    weightBase: 4
    valueBase: 96
    durabilityBase: 11
    heftBase: 14
    strikeModes:
      thrown:
        type: missile
        name: Thrown
        assocSkillCode: metrhamr
        minParts: 2
        attack:
          spread: 6
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 5
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
          entangle: true
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
        projectileType: ""
        maxVolleyMult: 1
        baseRangeBase: 10
        drawBase: 0
      crush:
        type: melee
        name: Crush
        assocSkillCode: metrhamr
        minParts: 1
        attack:
          spread: 6
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
          entangle: true
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
        lengthBase: 8
        defense:
          blockMod: 0
          counterstrikeMod: 0
packFolder: weapons
---

A heavy iron weight attached to a long rope or chain, the meteor hammer is whirled to gather momentum before striking with crushing force. Advanced warriors spin it around their bodies to generate devastating reach and unpredictable angles; the weight can wrap around limbs or shafts to entangle and disarm. Mastery requires years of discipline—poor handling risks striking the wielder.
