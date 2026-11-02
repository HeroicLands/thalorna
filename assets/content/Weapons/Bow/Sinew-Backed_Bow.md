---
shortcode: snwbkbow
name: {full: Sinew-Backed Bow}
type: weapongear
description: "Short horn-and-wood bow lined along the back with sinew; the arctic hunter's and warrior's ranged weapon."
tags: []
data: {icon: sohl-none-icon-longbow, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: bow
  weaponType: Bow
  system:
    weightBase: 1.5
    valueBase: 45
    durabilityBase: 8
    heftBase: 10
    strikeModes:
      crush:
        type: melee
        name: Crush
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 4, modifier: 0, aspect: blunt}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: -5
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
        lengthBase: 6
        defense: {blockMod: 0, counterstrikeMod: 0}
      ranged:
        type: missile
        name: Ranged
        assocSkillCode: archery
        minParts: 2
        projectileType: arrow
        drawBase: 70
        baseRangeBase: 150
        maxVolleyMult: 4
        attack: {spread: 0, modifier: 0}
        impactBase: {numDice: 0, die: null, modifier: 3, aspect: piercing}
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
---

Sinew glued along the back of a short bow stores the draw that the wood cannot, so a short bow shoots harder than its length suggests. The [[affiliation-tikupilarit|Ice-Edge People]] fight with them, with spears and with knives of stone and copper, and every man of Trading Shore owns a bow and a set of bone armor ([[place-simimanik|Simi Manik]]).

Damp softens the glue, so a bow is kept wrapped in skin and strung only when the quarry is in sight.
