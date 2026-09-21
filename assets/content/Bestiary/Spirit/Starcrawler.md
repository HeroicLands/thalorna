---
tags:
  - spirit
  - creature
name:
  full: Starcrawler
  aliases: []
description: "A rare celestial being of stellar essence given flesh, appearing where earth and sky grow thin, harmless yet utterly alien in its priorities."
shortcode: strcrwlr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+14
    agl: 1d4+16
    per: 1d4+6
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 23 } }
    - name: Sharp Mandibles
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: mandible
          name: Sharp Mandibles
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -1
            aspect: edged
          lengthBase: 0
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Paralyzing Venom
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: sting
          name: Paralyzing Venom
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -1
            aspect: piercing
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            poison: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Thorax
            shortcode: thoraxzone
            probWeight: 1
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 1
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 8
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: 0
        calc: "0"
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[strcrwlr|Starcrawler]]{float: top-left}

A constellation walks across the ground. At first you take it for some trick of the night sky, but the stars move with purpose, in a direction, across a surface where no star should be. As it comes nearer you see that the lights belong to something small and delicate — an insect's shape no bigger than your hand, every segment of its body set with points of light. Where it passes it leaves a trail of light that hangs for a moment before it fades, and the air around it smells faintly of ozone and of distance.

# Dossier {#dossier}

Starcrawlers are creatures of the sky that have somehow come down into the world — pieces of starlight given a body, by the commonest account — and they appear where the boundary between earth and sky wears thin. Some keep an ancient site as if guarding it; some drift with no purpose anyone can find. They are not hostile, but their priorities are not human ones: a starcrawler may shield a traveller in one hour and watch him die in the next, on a logic nobody has followed.

They move by night and in deep shadow and go dull and slow in direct sun, seeking shelter from it. They climb — peaks, towers, the tops of tall trees — and from there they appear to watch the sky, or the land under it, or something else entirely; there are those who think they are tracking a pattern in the stars, or a change in the world, that people cannot see. They take no notice of ordinary food and seem to live on something people cannot supply, starlight perhaps, or raw magic. They hold no territory and ignore each other completely; several on one hilltop behave as if each were alone. They do not breed. Each one seems to be a single being, unique and possibly very old, and none has ever been known to attack a person unprovoked.

## When Cornered

A Starcrawler's answer to threat is to leave — up a wall, across a ceiling, into open sky, at a speed that makes it very hard to strike and that seems to owe nothing to the ground under it. Cornered, it fights to open an escape, not to kill. The mandibles are stronger and sharper than their size suggests and strike fast, but the wounds are slight, and the bite carries a toxin that numbs and weakens the bitten limb — enough to slow a pursuer, not enough to stop one. It can flare its lights to a blinding brightness, or put them out and vanish into the dark. The light is not magic as a mage means the word; it is nearer to the glow of deep-sea creatures. And it is only partly in this world: it can thicken into flesh that a blade will cut, or thin until a blade passes through it. Against several opponents, or anything clearly beyond it, it simply goes.

Ordinary weapons do it little harm. Magic does more, and earth-magic most of all, as if the ground itself were the opposite of what the creature is. There are accounts of starcrawlers being spoken with, by people who found the right approach; the exchange is difficult and odd, since the creature seems to think in shapes human language has no words for. Those who have killed one say the lights went out like a snuffed candle and the body thinned to nothing — no carcass, no mark, nothing to show it had been there.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 15-18 (1d4+14)

- **Agility:** 17-20 (1d4+16)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 9-12 (1d4+8)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 7-10 (1d4+6)
