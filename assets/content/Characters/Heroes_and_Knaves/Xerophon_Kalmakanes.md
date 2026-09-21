---
tags:
  - heroes-and-knaves
  - soldiery
  - character
name:
  full: Xerôphôn Kâlmâkanês
  title: ""
  given: Xerôphôn
  clan: Kâlmâkanês
  home: ashenmere
  aliases: []
packFolder: midhalionvylaria
shortcode: xrphnklmkns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Gaoler
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provncmktr
  gender: male
  species: null
  age: 39
  birthday: 681/5/18
  height: 1.8
  weight: 78
  frame: medium
  appearance:
    eye_color: green
    hair_color: dark_brown
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a scar on the left ear
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-maul }
    - { model: sohl-sohl-armorgear-lshirt }
    - { model: sohl-sohl-armorgear-ltrsr }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-mvest }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-frtns, system: { quantity: 2 } }
    - name: Iron key ring
      type: miscgear
      system:
        shortcode: ironkeyring
        weight: 1
        value: 100
        durability: 3
    - name: Shackles and restraint chains
      type: miscgear
      system:
        shortcode: shacklesandrestraint
        weight: 3
        value: 100
        durability: 3
    - name: Guard's whistle
      type: miscgear
      system:
        shortcode: guardswhistle
        weight: 0.1
        value: 100
        durability: 3
    - name: Prison logbook
      type: miscgear
      system:
        shortcode: prisonlogbook
        weight: 0.5
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchlg }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
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
    defaultCombatGroup: null
---

# Appearance {#appearance}

![[xrphnklmkns|Xerôphôn Kâlmâkanês]]{float: top-left}

The left ear carries the scar, an old one, taken from a suspect's knife when he was still on the streets. He stands 5'11", medium in build, tanned and weathered, with dark brown hair and green eyes, a narrow face, a hawkish nose, an angular jaw, a wide mouth, dark brows and sculpted cheeks.

# Dossier {#dossier}

**The Soldier's Path**

The younger guards talk about new locks. New chains, tally-boards, a way of running the cells that needs fewer men and less watching — a prison as a problem of arrangement rather than of people. Nobody has said to Xerôphôn that this would make him unnecessary. He has heard it anyway. It does not frighten him; it has the feel of an ending, the kind that comes to a way of doing a thing when the thing is about to be done another way.

He did not start in the prison. He was a soldier of the City Watch in Moktur, the Empire of Vylaria's mountainous northern province, and an unusual one: while the others chased the arrests that got noticed, he did the evidence, the paperwork and the long patient questioning of suspects. His superiors found in him a man who could not be bribed and who also understood that the law was a range rather than a line, and that applying it without looking at the case in front of him served nobody.

**The Jailer's Burden**

At twenty-one, after a street fight that cost him the piece of his ear, he asked to move from patrol to the prisons. The Empire keeps a great many people locked up, and a Jailer — the guard-master responsible for the daily order and discipline of a facility — has real power. He has held the post for eighteen years and is known for fairness, consistency, and a way of keeping a cell block quiet without beating it quiet. He knows how confined men arrange themselves, who leads and who is about to break, and he handles the whole with the care of someone who knows one misjudgment ends in a riot.

**The Iron Structure**

In practice he runs the largest detention house in Moktur. The officials defer to him on how prisoners are sorted, secured and punished; the younger guards learn from him; and the prisoners, who have no reason to like him, know that what he does follows from what they did and not from his mood. He is not gentle. He is just, and in a prison that is the nearest thing to mercy on offer.

**The Approaching Obsolescence**

He is thirty-nine winters old, and the new locks are coming.

## Psyche

### Personality

Discipline, economy of feeling, and a devotion to principle that would not be out of place in a monastery. He speaks little and plainly, does not flatter and does not make conversation, and the people who work beside him understand that the plainness is a form of respect: he tells them the truth because he thinks they can bear it.

He believes the work matters — that keeping order, enforcing consequence and holding the dangerous apart from everyone else are not functions but duties — and the belief is what has kept the grimness of the place from turning him cynical, as it turns most. He allows himself a small mercy now and then: a marginally better cell, a word to a prisoner who is trying to be better than he was. Never in a way that could be read as weakness, and never twice in a row.

### Motivation

Order first, because nothing else is possible without it. He has taken the Aurèldián Pantheon's teaching on structure and organization to heart and thinks of himself as its servant. He does not want advancement or fame; he wants to do the work as well as it can be done, and to be remembered, by the men who served under him, as someone whose word never changed.

### Strengths

- **Authoritative Presence**: His voice and bearing get obedience without a raised hand, and his hold over dangerous men rests on consistency rather than force.
- **Knowledge of Human Nature**: Twenty years of watching confined men. He sees a lie, a plan or a breaking point before it surfaces.
- **Systematic Competence**: Records, hierarchies, routines — he can make hundreds of people live in close quarters without disorder.
- **Unquestionable Integrity**: Nobody in Moktur, from the Council to the cells, doubts that he will do what he said.

### Weaknesses

- **Inflexibility**: The same response to the same act, every time, even when the circumstances have changed enough to want a different one.
- **Emotional Distance**: The reserve that serves him at work fails him everywhere else. He does not know how to speak to a person's feelings.
- **Resistance to the New**: Anything untried looks to him worse than anything proven, and some of the new methods are better than the old.
- **Limited Vision Beyond Duty**: He is the Jailer and very little else. He has not thought about what he is when he stops being that, and the question is closer than he would like.

## Social

### Patrons

- **Commander Vâlaris of the City Watch**: The head of Moktur's Watch, who takes his advice on prison matters as a rule.
- **The Imperial Council of Moktur**: Officials who have needed a sensitive prisoner held quietly and have relied on his discretion to do it.
- **Magistrate Théodôr the Strict**: A judge known for hard sentences, who values a jailer who carries them out exactly.

### Enemies

- **Ferûn the Escaped**: Led an escape attempt eight years ago that killed three guards. He was caught and returned, and he is still in the facility, a standing reminder that Xerôphôn's control was once broken.
- **Warden Kasânder**: The political appointee who administers the prison on paper. Xerôphôn considers him incompetent and corrupt; Kasânder considers Xerôphôn insubordinate; each needs the other and neither hides his contempt.
- **The Brotherhood of the Freed**: A criminal fraternity that breaks its members out by violence, bribery or stealth. He has stopped several of their attempts and they know his name.

### Affiliations

- **The City Watch of Moktur**: He is still, formally, a member of the Watch, and on questions of law-keeping his opinion counts.

## Plot Hooks

1. **The Political Prisoner**: A high-born prisoner of doubtful guilt has been put in his custody with quiet instructions to keep them safe and out of sight. Xerôphôn has come to think the prisoner is innocent and that the rot goes to the top of the government — and the truth is worse: the crime was real, and the powerful people who arranged the imprisonment did it for reasons of their own. He can follow orders or act on what he knows.

2. **The Brotherhood's Infiltration**: The Brotherhood of the Freed has a man inside, in a guard's uniform, slowly arranging a mass escape and undermining Xerôphôn a little at a time. He knows something is wrong and cannot find it, and he is having to face the fact that his control was never as complete as he thought.

3. **The Innocence Revelation**: He has found proof that a prisoner he has held for eight years did not do it — a judicial error, or a deliberate framing. The prisoner has long since given up. Xerôphôn has not, and getting an innocent man out of a system he has served his whole life means turning against that system.

4. **The Reformer's Challenge**: A new administrator with reforming ideas has been set over the prison and is dismantling his arrangements — new watching methods, softer discipline, less authority for the guards. He is certain it will end in blood, and he is partly right, though not in the way he expects.

5. **The Escape Conspiracy**: A dangerous, well-loved prisoner is planning an elaborate escape, and the escape is a screen for something larger, involving people outside the walls with an interest in the prisoner's freedom or death. Stopping the escape may be the wrong move. Letting it happen and following it may be the right one, and he has never in his life let a prisoner walk.
