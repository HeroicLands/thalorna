---
shortcode: chrssachop
name: {full: Kharessa Chop}
type: skill
subType: combattechnique
description: "The hard edge-of-hand blow of the Kharessa, struck with the hand held open and rigid."
tags: [bethua, unarmed]
data:
  icon: sohl-none-icon-punchblast
  templatePriority: null
  parentSkill: charissa
  packFolder: combatskills
sohl:
  kbcat: unarmed
  strikeMode:
    type: melee
    shortcode: chrsschop
    name: Chop
    minParts: 1
    assocSkillCode: charissa
    attack: {disabled: false, spread: 4, modifier: 0}
    impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
    lengthBase: 1
    defense:
      block: {disabled: true, modifier: 0, successLevelMod: 0}
      counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
    traits:
      meleeMod: 0
      blockSLMod: 0
      durabilityMod: 0
      cxSLMod: 0
      oppDef: 0
      impTA: 2
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
    impairedByRoles: [manipulator]
---

The **Kharessa Chop** is a blow with the outer edge of the open hand, held rigid from fingertip to wrist and driven by the turn of the hip. Together with the [[skill-chrssajab|Kharessa Jab]] it takes the place of the closed-fist punch in the [[skill-charissa|Kharessa]].

The edge of the hand puts the force of the blow into a narrow line, so the Chop lands a point harder than a folk punch. It goes for the throat, the side of the neck, the collarbone and the forearm that holds a weapon: the places where a narrow blow does more than a broad one.

A rigid gauntlet adds 2 to the impact. Thrown with the off-hand, the strike takes −10 and loses a point of impact.
