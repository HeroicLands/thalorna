---
shortcode: harpoon
name: {full: Harpoon}
type: weapongear
description: "Toggling-headed hunting spear on a line; the sea hunter's tool and, in the far north, a weapon of war."
tags: []
data: {icon: icon-polearm, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: polearm
  weaponType: Polearm
  system:
    weightBase: 2.5
    valueBase: 25
    durabilityBase: 8
    heftBase: 9
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

A shaft with a detachable head tied to a line. When the head enters, it turns crosswise under the skin and holds. [[affiliation-tikupilarit|The Ice-Edge People]] and their kin hunt walrus, seal and whale with it, and the kin moving east along the arctic coasts bring "harpoons whose heads turn in the wound" ([[place-kawiskakrgn|Kawiskak Region]]). On the Cedar People's coast a harpooner stands in the bow of an eight-man canoe, and a whale struck with a head of mussel shell is held on sealskin floats until it tires ([[place-malkisis|Malkisis]]).

In a fight the head stays in the body and the line stays in the hand of whoever threw it. Against a man it is a spear that cannot be pulled back out.
