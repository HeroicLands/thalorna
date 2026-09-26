---
tags: []
name:
  full: Blowgun
  aliases: []
description: "Silent hollow tube for poison darts; hunter's covert strike."
shortcode: bgun
type: weapongear
data:
  icon: icon-blowgun
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: blown
  weaponType: Blown
  system:
    weightBase: 1
    valueBase: 30
    durabilityBase: 8
    heftBase: 10
    strikeModes:
      ranged:
        type: missile
        name: Ranged
        assocSkillCode: blgn
        minParts: 1
        attack:
          spread: 0
          modifier: 0
        impactBase:
          numDice: 1
          die: 4
          modifier: 0
          aspect: piercing
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 0
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
        projectileType: dart
        maxVolleyMult: 3
        baseRangeBase: 40
        drawBase: 0
---

A hollow tube of wood or bone through which sharp darts are blown via lung power. Used by hunters stalking game and by assassins working in silence where crossbow or bow would draw notice, the blowgun favors stealth and poison over force. Darts pierce lightly but travel far enough for silent work at close quarters.
