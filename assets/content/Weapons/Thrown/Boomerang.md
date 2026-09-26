---
tags: []
name:
  full: Boomerang
  aliases: []
description: "Curved throwing-stick breaks fleeing game; war-variant non-returning."
shortcode: bmrg
type: weapongear
data:
  icon: icon-boomerang
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: thrown
  weaponType: Club
  system:
    weightBase: 1
    valueBase: 15
    durabilityBase: 11
    heftBase: 8
    strikeModes:
      crush:
        type: melee
        name: Crush
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
        defense:
          blockMod: 0
          counterstrikeMod: 0
      ranged:
        type: missile
        name: Ranged
        assocSkillCode: bmrng
        minParts: 1
        attack:
          spread: 0
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 3
          aspect: edged
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
        maxVolleyMult: 3
        baseRangeBase: 240
        drawBase: 0
---

A curved wooden throwing-stick that travels in a flat arc and strikes targets at a distance, the boomerang is a hunting tool pressed occasionally into war service. Heavy war-boomerangs do not return; they are thrown to break legs or ribs of fleeing game or skirmishers. Light returning variants are ceremonial; practical warriors keep them as backup implements.
