---
shortcode: biao
name: {full: Meteor Dart, aliases: []}
type: weapongear
description: "Rope-spiked dart for ranged pierce and entangle; cavalry raider's disruptor."
tags: []
data: {icon: icon-flail, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: flail
  weaponType: Flail
  system:
    weightBase: 1
    valueBase: 36
    durabilityBase: 11
    heftBase: 7
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
        defense: {blockMod: -10, counterstrikeMod: -10}
      thrown:
        type: missile
        name: Thrown
        assocSkillCode: thro
        minParts: 1
        attack: {spread: 6, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
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
        projectileType: none
        maxVolleyMult: 2
        baseRangeBase: 30
        drawBase: 0
---

A sharp iron spike attached to a length of rope, the meteor dart is a lighter kin to the meteor hammer. Cast as a ranged weapon to pierce and harass, it can entangle or strike; skilled throwers use it to disrupt skirmish lines before closing for melee. Common among rogue-knights and light cavalry raiders seeking a quick striking reach.
