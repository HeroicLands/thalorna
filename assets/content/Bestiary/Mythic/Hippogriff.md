---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Hippogryph
  aliases: []
description: "A five-hundred-pound eagle-and-horse hybrid prized for balance over raw power, lacking the gryphon's fierce territorial aggression."
shortcode: hppgryph
type: being
data:
  icon: icon-griffinsymbol
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+19
    end: 1d6+8
    agl: 1d6+7
    per: 1d6+17
    snt: 1d4+1
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 22 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 6 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 49 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 60 } }
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 5
            aspect: edged
          lengthBase: 2
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
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 3
            aspect: blunt
          lengthBase: 2
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
            trample: true
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 6
            aspect: piercing
          lengthBase: 2
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
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 3
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 1
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 3
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 4
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 5
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 3
              fire: 4
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 3
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 5
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a1
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2
              blunt: 3
              edged: 2
              piercing: 1
              fire: 2
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase:
              blunt: 6
              edged: 5
              piercing: 4
              fire: 5
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: 5
              edged: 4
              piercing: 2
              fire: 4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: &a3
              blunt: 5
              edged: 4
              piercing: 2
              fire: 4
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: &a4
              blunt: 4
              edged: 3
              piercing: 1
              fire: 3
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: *a3
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 2
      weight:
        base: 500
        calc: "500"
      reachBase: 0
      bodyScaleBase: 1.57
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The sound reaches you first — not a predator's scream but a clarion call, almost musical, with the whinny of a horse underneath it. Then you see it banking between the peaks, quicker than anything so large has a right to be. It comes down in a wide spiral, and as it nears you make out what it is: the proud head and piercing eyes of a war eagle, the great wings of a creature born to the sky, and then — where you expected a lion's body — the sleek, muscular frame of a horse, four strong legs and a flowing mane that ripples as if it stood in wind.

The eagle front is all awareness, its eyes bright with intelligence and an almost companionable curiosity rather than the cold arithmetic of a hunting bird. The wings beat with a hypnotic rhythm as it circles, powerful strokes that carry it through the air with astonishing speed. The horse's body below is no plough-animal; it is built for speed and distance, muscle rippling under a coat that shimmers between grey-silver and gold as the light moves. It lands with controlled grace, and you see the join plainly: the feathered neck flows into the withers of a destrier, and where you looked for awkwardness there is instead a harmony that says this creature was always meant to have exactly this shape. Even at rest, on its hooves, it carries itself like something royal. There is not much hunger in its gaze. There is intelligence, and something else besides — a melancholy, as though it watched a world it could see and never quite enter.

# Dossier {#dossier}

In some scholarly circles the hippogriff is rated above the gryphon — not for strength but for balance. A grown animal stands four feet at the shoulder, runs about eight feet from the grip of its forelegs to the end of its tail, and weighs around five hundred pounds. It lives seventy to a hundred years. It is more biddable than a gryphon, which is a long way from tame or harmless, and it has been ridden: warrior-lords of the old stories flew to their battles on hippogriff-back, and several orders of knights have kept small breeding lines for centuries.

## The Animal

The eagle half is finer than a gryphon's, built for speed rather than tearing: a graceful head, amber or gold eyes, a beak sharp but a little smaller in proportion, a neck with a horse's ease in it. The wings are the animal's glory — huge, light-boned, spanning more than twenty-five feet, plumed in browns, greys and golds. The chest is deep to hold the lungs flight needs. The legs are a horse's, the hooves dark and hard, the coat grey, brown or silver, sometimes roan or dappled, sometimes marked white on the face or legs. The muscle shows as an athlete's does, not a draught animal's. The mane is a horse's mane, and hippogriffs spend time keeping it groomed.

They eat as a horse eats — grass, grain, leaves — and will take meat now and again. That makes them cheap to keep beside a gryphon. Their hearing and sight are very good; one will hear a predator coming a long way off and be airborne in moments.

## Where They Go

Hippogriffs are sociable. A mated pair stays together for life and travels with one or two young, and none of them holds a territory. They range widely and migrate with the seasons, north in summer and south in winter, on routes that have not changed in centuries. They fly, as far as anyone can tell, because they like it — an animal will circle for hours on a thermal doing nothing a hunt requires. They approach settlements when they read no threat, learn names, know faces, follow a simple spoken instruction, and have been seen to grieve for a keeper. Nobody has settled the question of whether the mix of calls and posture they use among themselves is a language.

## In a Fight

A hippogriff fights more carefully than a gryphon. From the air it dives, strikes with both taloned forelegs and climbs away before the answer comes, and it can keep that up longer than almost anything else with wings. Its dive hits lighter than a gryphon's, for it is a lighter animal, but it lands where it is aimed. Forced to the ground, it rears and comes down with both forelegs, or rakes with the talons while its hind legs hold, or kicks backward as it withdraws — a hind-leg kick from it breaks ribs and has killed. Its hooves grip rock, mud and ice that would put a horse down, so it can land and leave from ledges other flyers cannot use. It will break off and go long before a gryphon would. It is not cowardice; it can tell a fight it will lose.

## The Bond

A hippogriff will take a human partner more readily than a gryphon, and the bond runs both ways: the animal can decline it and bears no grudge for declining. A bonded hippogriff carries its rider with care, warns of danger, and keeps company. It is not an exclusive attachment — the animal goes on dealing with other people and other creatures — and when the partner dies it grieves, then goes back to its migrations, and may in time choose someone else.

## Attributes

- **Strength:** 20-25 (1d6+19)

- **Endurance:** 9-14 (1d6+8)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 18-23 (1d6+17)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 7-10 (1d4+6)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
