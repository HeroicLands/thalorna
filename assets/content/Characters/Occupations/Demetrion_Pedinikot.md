---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Demétrion Pediníkot
  title: ""
  given: Demétrion
  clan: Pediníkot
  home: ""
  aliases: []
packFolder: helladbyzaria
shortcode: dmtrnpdnkt
renamedFrom: dmtrnkmnns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - byzarianclt
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: null
  born: 681/2/15
  height: 1.77
  weight: 73
  frame: medium
  appearance:
    eye_color: dark_amber
    hair_color: dark_blonde
    skin_color: olive
    complexion: fair
    extra_features:
      - deep-set eyes
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 23 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 19 } }
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

Demétrion stands 5'10" with a medium, well-proportioned frame that moves with the measured deliberation of a career bureaucrat who happens to carry a sword. His dark blonde hair is receding and kept short, and his dark amber eyes are deeply set in an olive-skinned, fair-complexioned face that gives him a perpetually contemplative look. His features are regular and unremarkable—straight nose, thin lips, a jaw that is neither strong nor weak—the sort of face that is difficult to describe and easy to forget, which suits his work admirably. At thirty-nine, he has the slightly stooped posture of a man who reads too much. He wears the Byzarian city watch uniform with fastidious precision: every buckle aligned, every crease deliberate, his short sword polished but clearly ceremonial.

# Dossier {#dossier}

Demétrion was born into a minor Byzarian merchant family and chose military service partly by inclination and partly by necessity when his family's business fell on difficult times. He joined the bazaar patrol at nineteen and discovered unexpected talent for the work. His career has been unremarkable in the ways that matter for advancement—he has no dramatic arrests, no famous cases—but he has been consistently effective at his work. He has become something of a legend in the bazaar for his ability to recognize trouble before it begins.

Now at thirty-nine, he commands the evening bazaar patrol and maintains order in one of [[place-byzariargn|Byzaría]]'s most chaotic and profitable commercial spaces. His hair is receding noticeably and his thick mustache has gone more gray than black. Most people would describe him as unremarkable if they were forced to provide detail: he is neither tall nor short, neither muscular nor weak, neither young nor aged. He appears sleepy half the time, and people tend to underestimate him reflexively.

Demétrion understands that his apparent unremarkability is one of his greatest assets. Criminals and corrupt merchants are watching for aggressive, obvious authority. They do not notice the sleepy-looking guard who seems to be doing paperwork. He has used this advantage for twenty years to become genuinely effective at his work.

## Psyche

### Personality

Demétrion is quiet and observant, moving through the bazaar with minimal fanfare. He appears disengaged from the events around him but misses nothing. He is not particularly talkative and seems content in his own company. He has a dry sense of humor that emerges unexpectedly and surprises people who assume his quiet nature indicates lack of intelligence. He is methodical and patient, approaching problems with the deliberation of someone who expects complications.

### Motivation

Demétrion's primary motivation is maintaining functional order in a chaotic commercial environment. His secondary motivation is the intellectual satisfaction of recognizing patterns in criminal behavior that others miss. He has no ambitions for advancement and is content to remain in his current role until retirement.

### Strengths

His ability to read people and situations is exceptional. His pattern recognition in criminal behavior is sophisticated and reliable. He is patient with tedious investigation. His knowledge of the bazaar and its networks is comprehensive.

## Social

Demétrion is barely noticed by most bazaar users, which is precisely how he prefers it. He is respected by merchants who understand that his quiet effectiveness benefits them, and he is feared by criminals who recognize that his unremarkable appearance masks genuine competence.

## Companions

### Patrons

**Bazaar Master Karim al-Qahir**—The administrator responsible for bazaar operations. Karim respects Demétrion's competence and has supported him consistently. He pays him adequately and has ensured his position is protected from institutional changes.

### Enemies

**Khasrikon Damakláhr**—A criminal leader who operates protection rackets and black-market operations throughout the bazaar. Khasrikon is aware of Demétrion as an obstacle but also recognizes that Demétrion is not particularly ambitious and can sometimes be worked around. Their relationship is more complex than simple opposition; they have a grudging mutual respect.

## Plot Hooks

1. **The Pattern Recognition**—Demétrion's observations about bazaar behavior accumulate into a troubling pattern: someone is systematically identifying wealthy merchants and arranging their robbery or kidnapping for ransom. The crimes are separated by time and space enough that most observers see them as unrelated. Demétrion recognizes the orchestration. But when he brings his observations to Bazaar Master Karim, he learns that the criminals involved are protected by someone very powerful. The pattern suggests institutional corruption at a level above Karim's authority. Demétrion must choose between pursuing the investigation into dangerous territory or accepting that some crimes will remain unsolved.

2. **The Competitor's Emergence**—A new crime boss, **Merchant Captain Halstrom**, begins moving into the bazaar and encroaching on Khasrikon Damakláhr's territory. The result is an escalating war that threatens the safety of legitimate merchants. Demétrion is pressured to support whichever criminal faction is paying the most effective bribes. He is being placed in an impossible position: choose a side (which makes him openly complicit in corruption) or remain neutral (which makes him ineffective at his actual job of maintaining order).

3. **The Innocent in Custody**—Demétrion arrests a merchant on solid evidence of smuggling contraband. Months later, he discovers evidence suggesting the merchant was framed by Khasrikon Damakláhr using paid witnesses and false documentation. The merchant is now serving time for a crime Demétrion helped prosecute. Demétrion can attempt to prove the frame-up (which requires proving that Khasrikon committed perjury and bribed witnesses) or accept that he has helped incarcerate an innocent person.

4. **The Bazaar Master's Betrayal**—Demétrion discovers that Bazaar Master Karim has been secretly working with Khasrikon Damakláhr, accepting bribes in exchange for looking the other way during certain criminal operations. Karim has been Demétrion's patron and supporter. The discovery is personally painful. Demétrion must choose between reporting Karim (destroying his patron) or becoming complicit in corruption.

5. **The Merchant's Plea**—A wealthy merchant who has been paying protection money to Khasrikon Damakláhr approaches Demétrion privately with a desperate plea: her family has been kidnapped by Khasrikon, and he is demanding additional ransom despite her already paying extraordinary amounts. She is asking Demétrion to help her rescue her family. Helping would require direct confrontation with Khasrikon and would mean going against the criminal hierarchy that Demétrion has carefully managed. Refusing means a family dies.
