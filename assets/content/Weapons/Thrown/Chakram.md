---
shortcode: chak
name: {full: Chakram, aliases: []}
type: weapongear
description: "Sharpened steel disc thrown or hand-held; cavalry skirmisher's precise reach."
tags: []
data: {icon: icon-circle, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: knife
  weaponType: Knife
  system:
    weightBase: 0.5
    valueBase: 3
    durabilityBase: 11
    heftBase: 7
    strikeModes:
      cut:
        type: melee
        name: Cut
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
        lengthBase: 3
        defense: {blockMod: 0, counterstrikeMod: 0}
      thrown:
        type: missile
        name: Thrown
        assocSkillCode: thro
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
        projectileType: none
        maxVolleyMult: 2
        baseRangeBase: 80
        drawBase: 0
---

A flat steel disc with a sharpened outer rim, the chakram is thrown spinning to cut at range or held in the palm for slashing in close. Its disc shape gives stable flight and returns partly on recovery, though skilled throwers depend more on precision than return. Worn open on the wrist or hidden in a sleeve, it favors duelists and cavalry skirmishers.
