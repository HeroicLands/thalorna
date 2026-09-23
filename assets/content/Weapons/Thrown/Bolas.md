---
tags: []
name:
  full: Bolas
  aliases: []
description: "Weighted cord-balls entangle and trip; herder's disabled-cavalry tool."
shortcode: bola
type: weapongear
data:
  icon: icon-bolas
  templatePriority: null
sohl:
  kbcat: thrown
  weaponType: Thrown
  system:
    weightBase: 2
    valueBase: 15
    durabilityBase: 10
    heftBase: 5
    strikeModes:
      thrown:
        type: missile
        name: Thrown
        assocSkillCode: thro
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
        projectileType: none
        maxVolleyMult: 2
        baseRangeBase: 30
        drawBase: 0
packFolder: weapons
---

Two or more weighted balls connected by cord, the bolas is cast to wrap around a target's legs or arms. The spinning weights entangle and trip the prey—hunters use it for game capture with minimal injury; soldiers throw it to disable cavalry and break formations. Simple to craft from leather and stone, it favors herders and irregular troops more than professional soldiers.
