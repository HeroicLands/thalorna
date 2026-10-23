---
shortcode: chrssajab
name: {full: Kharessa Jab, aliases: []}
type: skill
subType: combattechnique
description: "The fast, precise open-hand strike of the Kharessa, aimed with the fingertips or the heel of the hand."
tags: [bethua, unarmed]
data:
  icon: sohl-none-icon-fist
  templatePriority: null
  parentSkill: charissa
  packFolder: combatskills
sohl:
  kbcat: unarmed
  strikeMode:
    type: melee
    shortcode: chrssjab
    name: Jab
    minParts: 1
    assocSkillCode: charissa
    attack: {disabled: false, spread: 3, modifier: 5}
    impactBase: {numDice: 1, die: 6, modifier: -3, aspect: blunt}
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

The **Kharessa Jab** is a short, straight strike with the fingertips or the heel of the open hand, thrown and withdrawn before an opponent can answer it. Together with the [[skill-chrssachop|Kharessa Chop]] it takes the place of the closed-fist punch in the [[skill-charissa|Kharessa]].

The Jab is the art's speed made into a single blow. It strikes no harder than a folk punch, but it arrives sooner and lands where it is sent, so it takes +5 to the attack and aims more precisely than any other open-hand blow. It goes for the eyes, the throat and the ribs, and it is most often the blow that opens the way for the next.

A rigid gauntlet adds 2 to the impact. Thrown with the off-hand, the strike takes −10 and loses a point of impact.
