---
shortcode: reefspear
name: {full: A Reef Spear}
type: weapongear
description: "A barbed hardwood spear tipped with worked shell, the common weapon of the island's reef villages and a fishing tool first."
tags: [kalihara]
data: {icon: icon-polearm, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 2
    valueBase: 4
    durabilityBase: 8
    heftBase: 10
    strikeModes:
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
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
        lengthBase: 6
        defense: {blockMod: 0, counterstrikeMod: 0}
      shaft:
        type: melee
        name: Shaft
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
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
          long: true
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
        lengthBase: 6
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A reef spear is a shaft of dark hardwood a little taller than the person who carries it, with a head of hardwood barbs set in a socket of worked shell. It is the one weapon found in nearly every household on the island, and it is a fishing tool first: the villages of [[place-reithovani|Reithovani]] and [[place-vaelukoa|Vaelukoa]] spear their catch from the edge of the reef at low water, and the barbs hold a fish against a struggle.

Where a villager needs a weapon, the reef spear is what comes down from the wall. It reaches a long way and wounds deep, and the barbs make it slow to draw out of anything it has struck.

## See Also

[[place-reithovani|Reithovani]]
: a reef village whose fishing ground the spear works

[[place-vaelukoa|Vaelukoa]]
: the reef village behind the coral shore
