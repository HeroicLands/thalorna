---
shortcode: chrssakick
name: {full: Kharessa Kick, aliases: []}
type: skill
subType: combattechnique
description: "The Kharessa's kick, trained to reach as high as the head, which the folk kick cannot."
tags: [bethua, unarmed]
data:
  icon: sohl-none-icon-foottrip
  templatePriority: null
  parentSkill: charissa
  packFolder: combatskills
sohl:
  kbcat: unarmed
  strikeMode:
    type: melee
    shortcode: chrsskick
    name: Kick
    minParts: 1
    assocSkillCode: charissa
    attack: {disabled: false, spread: 4, modifier: 0}
    impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
    lengthBase: 2
    defense:
      block: {disabled: true, modifier: 0, successLevelMod: 0}
      counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
    traits:
      meleeMod: 0
      blockSLMod: 0
      durabilityMod: 0
      cxSLMod: 0
      oppDef: 0
      impTA: 0
      AR: 0
      noAttack: false
      noBlock: true
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
      strRoll: false
  system:
    skillBaseFormula: "@agl, @dex"
    improveFlag: false
    combatCategory: melee
    parentSkillCode: charissa
    initSkillMult: 0
    impairedByRoles: [locomotor]
---

The **Kharessa Kick** is a kick trained for height. The folk kick aims low, at the legs and the body; a [[skill-charissa|Kharessa]] fighter learns from girlhood the balance and the reach of the hip that carry a foot to an opponent's head, and so her kick can be aimed anywhere a punch can.

It keeps the folk kick's strengths: twice the reach of a hand, and the weight of the leg and hip behind it. It keeps its cost too. A leg in the air is a leg not holding the kicker up, and a kick that misses leaves her open.

A rigid boot adds 2 to the impact. Thrown with the off-foot, the strike takes −10 and loses a point of impact.
