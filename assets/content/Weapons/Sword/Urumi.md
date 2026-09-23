---
tags: []
name:
  full: Urumi
  aliases: []
description: "Flexible-bladed whip spiraling from grip; specialist's weapon demanding conditioning."
shortcode: urumi
type: weapongear
data:
  icon: icon-sword
  templatePriority: null
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 2
    valueBase: 96
    durabilityBase: 10
    heftBase: 9
    strikeModes:
      lash:
        type: melee
        name: Lash
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 8
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 1
          aspect: edged
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
          bleed: true
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 8
        defense:
          blockMod: -20
          counterstrikeMod: -20
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
          impTA: 2
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
        lengthBase: 8
        defense:
          blockMod: 0
          counterstrikeMod: 0
packFolder: weapons
---

A whip of flexible blades—one or many—coiled around a hilt or grip, the urumi is a specialist's weapon requiring years of conditioning. The wielder cracks the blades outward in a controlled spiral, striking from unexpected angles at multiple foes. Only the truly skilled dare draw this steel without marking their own flesh.
