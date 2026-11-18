---
shortcode: obsdnblade
name: {full: Obsidian Blade}
type: weapongear
description: "Volcanic-glass blade that cuts bone clean and shatters on hard use; the temples' ritual edge and a warrior's sidearm."
tags: []
data: {kind: weapon, icon: icon-broaddagger, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: knife
  weaponType: Knife
  system:
    weightBase: 0.8
    valueBase: 40
    durabilityBase: 4
    heftBase: 6
    strikeModes:
      impale:
        type: melee
        name: Impale
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
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
        lengthBase: 3
        defense: {blockMod: 5, counterstrikeMod: 5}
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
        lengthBase: 3
        defense: {blockMod: 5, counterstrikeMod: 5}
      pommel:
        type: melee
        name: Pommel
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 4, modifier: 0}
        impactBase: {numDice: 1, die: 4, modifier: 0, aspect: blunt}
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
        lengthBase: 3
        defense: {blockMod: 5, counterstrikeMod: 5}
---

Obsidian is flaked or ground to an edge sharper than steel and more brittle than anything a smith makes. [[place-nekiahkul|Ne' Ki'ahkul]] carves it into the priests' ritual blades, "sharp enough to cut bone", and the heartland's temples buy them by the rack ([[place-kiichchik|Kì'ìch'chik]] sends obsidian out as ritual blades, mirrors and trade stone). The edge parts flesh without a drag, which is why the same blade serves a bloodletting and a fight.

Its weakness is the edge itself. A blade that meets a steel guard, copper plate or a shield rim chips or breaks across, and a broken obsidian blade is a pile of razors. Carried for show it is regalia; carried for use it is a single good strike.
