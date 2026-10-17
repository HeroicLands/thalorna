---
shortcode: wardensstaff
name: {full: "A Warden's Staff", aliases: []}
type: weapongear
description: "An iron-shod staff of dark hardwood, the mark of office of the Wardens of the Approaches and the only iron most islanders handle."
tags: [kalihara]
data: {icon: icon-polearm, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 3
    valueBase: 25
    durabilityBase: 12
    heftBase: 12
    strikeModes:
      shoe:
        type: melee
        name: Iron Shoe
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
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
        lengthBase: 7
        defense: {blockMod: 0, counterstrikeMod: 0}
      shaft:
        type: melee
        name: Shaft
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
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
        lengthBase: 7
        defense: {blockMod: 0, counterstrikeMod: 0}
---

A Warden's staff is a staff of dark hardwood taller than the person who carries it, shod at the foot with iron and bound at the head with a band of woven fiber. It is the mark of office of [[affiliation-wardensapproaches|The Wardens of the Approaches]]: a Harbor-Warden carries one on the quay of a port, and the Warden of the Approaches carries one at [[place-telvari|Telvari]]. The shoe is the only iron most islanders ever handle.

On the quay the staff stands for the word of the one who carries it, and the carrier's word decides what a foreigner may see, buy and carry. In a fight it is a long hardwood shaft with a hard iron point at one end, and the carrier is trained to use it.

## See Also

- [[affiliation-wardensapproaches|The Wardens of the Approaches]]—the order whose officers carry the staff
- [[place-telvari|Telvari]]—the islet where the Warden of the Approaches keeps the watch
- [[place-ilovanu|Ilovanu]]—the port whose Harbor-Warden holds the principal anchorage
