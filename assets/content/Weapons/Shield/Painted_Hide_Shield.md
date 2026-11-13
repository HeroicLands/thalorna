---
shortcode: pntdhdshld
name: {full: Painted Hide Shield}
type: weapongear
description: "Round shield of rawhide stretched on a frame and painted with its owner's emblem; the Plains warrior's cover."
tags: []
data: {kind: weapon, icon: icon-roundshield, templatePriority: null, packFolder: weapons}
sohl:
  kbcat: shield
  weaponType: Shield
  system:
    weightBase: 3
    valueBase: 20
    durabilityBase: 8
    heftBase: 8
    strikeModes:
      bash:
        type: melee
        name: Bash
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 6, modifier: 0}
        impactBase: {numDice: 1, die: 4, modifier: 0, aspect: blunt}
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
          shieldMod: 8
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
        lengthBase: 1
        defense: {blockMod: 0, counterstrikeMod: 0}
---

Rawhide shrunk over a hoop dries hard enough to turn a glancing arrow and cushion a club. A warrior society paints its emblem on every shield it carries: the Coyote band of the [[affiliation-tenlaya|Grass People]] is named for the coyotes painted on its shields. In the swamp country the same shield is made of margrush hide, which does not rot ([[place-wikopihirgn|Dark Water]]).

The painting is a claim. A shield with an emblem its bearer has no right to is an insult to the society that owns it, and the societies settle such matters themselves.
