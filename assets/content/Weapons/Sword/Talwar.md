---
tags: []
name:
  full: Talwar
  aliases: []
description: "Curved single-edged saber with disk pommel; eastern cavalry preference."
shortcode: tlwr
type: weapongear
data:
  icon: icon-sword
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: sword
  weaponType: Sword
  system:
    weightBase: 2.5
    valueBase: 144
    durabilityBase: 12
    heftBase: 9
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
          modifier: 2
          aspect: edged
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
          modifier: 1
          aspect: piercing
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
---

A curved single-edged blade broad and sharp, the talwar ends in a disk-shaped pommel that balances the steel's weight through the cut. The curve favors the cavalry saber's slice, while the hilt's distinctive geometry provides a secure purchase even in the mounted charge's tumult. Ranked warriors of the eastern realms carry this steel.
