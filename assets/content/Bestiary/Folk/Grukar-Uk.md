---
tags:
  - folk
  - creature
name:
  full: Grukar-Uk
  aliases: []
description: "A small, dull, lazy Grukar drone forming the teeming bulk of any tribe, unremarkable but overwhelming in sheer numbers."
shortcode: grukaruk
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
  kbcat: grukar
  attrRollFormula:
    str: 1d6+8
    end: 1d4+9
    dex: 1d4+5
    agl: 1d4+4
    per: 1d4+4
    aur: 1d4+2
    wil: 1d4+3
    rea: 1d4+2
    cre: 1d4+3
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-bflkbite }
    - { model: sohl-sohl-skill-bflkgrab }
    - { model: sohl-sohl-skill-bflkheadbutt }
    - { model: sohl-sohl-skill-bflkkick }
    - { model: sohl-sohl-skill-limbblock }
    - { model: sohl-sohl-skill-press }
    - { model: sohl-sohl-skill-bflkpunch }
    - { model: sohl-sohl-skill-trip }
  system:
    body:
      structure:
        zones:
          - name: Head and Arms
            shortcode: headzone
            probWeight: 2
          - name: Torso
            shortcode: torsozone
            probWeight: 2
          - name: Legs
            shortcode: legszone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase:
              blunt: 2
              edged: 2
              piercing: 1
              fire: 2
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase:
              blunt: 2
              edged: 2
              piercing: 1
              fire: 2
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase:
              blunt: 2
              edged: 2
              piercing: 1
              fire: 2
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase:
              blunt: 2
              edged: 2
              piercing: 1
              fire: 2
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase:
              blunt: 2
              edged: 2
              piercing: 1
              fire: 2
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 2
              edged: 4
              piercing: 1
              fire: 4
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 2
              edged: 4
              piercing: 1
              fire: 4
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 2
              edged: 4
              piercing: 1
              fire: 4
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase:
              blunt: 2
              edged: 4
              piercing: 1
              fire: 4
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase:
              blunt: 2
              edged: 4
              piercing: 1
              fire: 4
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase:
              blunt: 2
              edged: 3
              piercing: 1
              fire: 3
      weight:
        base: 172
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[grukaruk|Grukar-Uk]]{float: top-left}

There are a lot of them. That is the first thing you notice — not any single one, but the sheer grubby mass of them, squatting round smoky fires, bickering over scraps of meat, scratching themselves with thick blunt fingers. One by itself is unimpressive: it comes up to your chest, squat and bandy-legged, with a barrel chest and arms corded with a wiry, stubborn muscle that seems wasted on so slouching a creature. Its skin is a muddy grey-green, bristling with coarse dark hair across the shoulders and back. Its face is flat and heavy, dominated by a jutting lower jaw and a pair of small yellowed tusks. Its eyes are dull and sullen, watching the world with a resentful apathy — the look of a creature that would rather be doing nothing, and usually is. But there are so very many of them. And each one is carrying something sharp.

# Dossier {#dossier}

The Grukar-Uk are the crowd of Grukar society, about eighty-five parts in a hundred of any tribe. They are the plainest of the three kinds by every measure: small, stupid, and lazy beyond belief. Left alone, a group of Uk will eat, sleep, squabble over trifles and do as little work as they can get away with. They have nothing of the Hai's terrifying power in a fight and nothing of the Sha's wits. What they have is numbers, a stubborn bodily strength out of proportion to their size, and a rough hand at simple crafts — crude weapons, cured leather, gathered and prepared food, basic fortification. They are the tribe's labourers, its foot soldiers and its expendable bodies. One Uk is a nuisance. Fifty of them, driven forward by a bellowing Grukar-Hai warlord and steered by the murmurs of a Grukar-Sha counsellor, are a real and frightening thing. Laziness is their great weakness — without a strong hand on them they simply will not bother — but their fear of the Hai runs very deep, and a warlord terrible enough can whip them into a frenzy of desperate violence.

## What They Are For

Laziness and fear are the whole of an Uk's character. It is idle by nature and moves only for hunger, greed, or — most reliably — dread of what the Grukar-Hai will do if it does not. It is not clever enough to scheme and not brave enough to rebel, which makes it the ideal subject of a society run on intimidation. Among themselves the Uk are petty and quarrelsome, forever bickering over food and sleeping places and small marks of standing, but the quarrels rarely come to blood, because even an Uk dimly grasps that killing a neighbour draws attention from above. They obey the Hai out of plain terror. They obey the Sha because the Sha are clever enough to make obedience look like the Uk's own idea. Met alone, an Uk is a cringing, pitiable thing, likelier to run or grovel than fight unless it is cornered or sees an easy mark. In a group it finds a dim collective courage, each egging the others on to violence none would try by itself.

## Kit

The Uk stand about four and a half feet, the shortest of the three kinds, but stocky and strongly made — broad shoulders, thick necks, arms that hang a little too long. The skin is dull grey-green, rougher and hairier than the other Grukar, with coarse dark bristles over the back, shoulders and forearms. The face is broad and flat under a heavy brow, with small piggish eyes and the jutting jaw and stubby tusks. They wear what they can scrounge — ill-fitting leather, bits of stolen armour, crude iron caps — and carry rough, working weapons: hand-axes, clubs studded with nails, spears with fire-hardened points, now and then a salvaged sword worn like a trophy. Everything about them is crude, practical brutality with no finish on it.

## In a Fight

They fight as soldiers. They take orders, hold a formation, and work with the Uk beside them, and their tactics are plain ones — a charge with missiles behind it, a flanking move, a shield wall. One on one an Uk is competent and no better; in numbers they are dangerous, because they coordinate and because there are more of them. A spear thrust, held in one hand or two, to keep an enemy off; the swing of a hand-axe or a club, strength with a rough technique behind it, repeated until the opponent wears down; a bow or crossbow from behind the line rather than in it. In a unit they all go for one target at once and bury him. A mass of Uk charging together hits hard enough to break a formation or sweep lighter troops away. Under a clear commander they fight better than any single one of them could — a well-led band of Uk is a serious threat, less aggressive than the Hai but more disciplined and better coordinated than a good many human soldiers. They are used to hardship and keep fighting through wounds and exhaustion longer than most. They have handled axes, spears and bows since they were small and handle them with a plain competence, never mastery. And an Uk fights better with other Uk around it than it ever does alone.

## Breaking Them

The Uk are, at once, the least and the most dangerous of the three kinds. One on its own is a coward, dim and easily cowed — bribed with food, frightened off with a show of force, even taken and put to reluctant work. But the Uk are almost never met one at a time. In a war band, driven by fear of the Hai and ordered by a Sha, they become a swarming tide of crude weapons and desperate violence; the strength is real, muscle and bone and stubborn endurance, so that even one blow from an Uk is dangerous, and they come in numbers that grind down trained soldiers by attrition. The answer is always the same: take the leaders. Kill or rout the Grukar-Hai and the Uk break and scatter within minutes. Without fear driving them, their laziness and cowardice come back almost at once. They will not fight to the death for any cause, any loyalty or any principle. They fight to the death only when running looks more dangerous than staying, which is to say, only when a Grukar-Hai is standing behind them.

## Attributes

- **Strength:** 9-14 (1d6+8)

- **Endurance:** 10-13 (1d4+9)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 5-8 (1d4+4)

- **Perception:** 5-8 (1d4+4)

- **Aura:** 3-6 (1d4+2)

- **Will:** 4-7 (1d4+3)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 4-7 (1d4+3)
