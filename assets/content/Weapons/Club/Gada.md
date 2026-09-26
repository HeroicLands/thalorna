---
tags: []
name:
  full: Gada
  aliases: []
description: "Heavy spherical or flanged mace-head; champion's crushing blow."
shortcode: gada
type: weapongear
data:
  icon: icon-club
  templatePriority: null
  packFolder: weapons
sohl:
  kbcat: club
  weaponType: Club
  system:
    weightBase: 8
    valueBase: 120
    durabilityBase: 12
    heftBase: 18
    strikeModes:
      crush:
        type: melee
        name: Crush
        assocSkillCode: melee
        minParts: 1
        attack:
          spread: 8
          modifier: 0
        impactBase:
          numDice: 1
          die: 6
          modifier: 6
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
          blockMod: -5
          counterstrikeMod: -5
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
          long: false
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
        lengthBase: 5
        defense:
          blockMod: 0
          counterstrikeMod: 0
---

A heavy-headed mace with a long haft, its bulbous spherical or slightly ovoid head rendered in iron or hardened bronze and often crowned with flanges or blunt spikes. The gada's weight and shape concentrate crushing force in a single devastating blow, making it valued by warriors who favor brute impact over technique. It is swung with both hands and favors strength above all, best wielded by champions and strong-armed veterans.
