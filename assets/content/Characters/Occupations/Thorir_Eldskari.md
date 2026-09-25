---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Thórir Eldskari
  title: ""
  given: Thórir
  clan: Eldskari
  home: stormveil
  aliases: []
packFolder: aureldiaaelwyth
shortcode: thorrldskr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - jrldmstrmvld
  gender: male
  species: humanflk
  born: 677/10/2
  height: 1.86
  weight: 116
  frame: massive
  appearance:
    eye_color: dark_amber
    hair_color: graying_black
    skin_color: golden
    complexion: tanned
    extra_features:
      - scar across forehead
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 27 } }
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

Thórir is an enormous man, standing 6'1" and carrying 256 pounds of heavy bone and packed muscle on a massive frame. His black hair is graying at the temples and cropped close to his skull, and his dark amber eyes are deep-set beneath a heavy brow that bears a long, pale scar running from his left temple to just above his right eye—a souvenir from a quarry accident in his youth. His golden, tanned skin is thick and weathered, his jaw broad, his hands like shovels. He moves with the slow deliberation of a man who knows his own strength and has learned not to break things accidentally. His [[place-stormveil|Stormveil]] garrison armor is scale over quilted padding, reinforced at the shoulders and forearms, and he carries a warhammer that most men would need two hands to lift.

# Dossier {#dossier}

Thórir was born in the Stormveil mountains, to a family of quarrymen who had worked the black stone for generations. At fourteen, he was conscripted into the garrison—a standard practice in [[place-aelwyth|Aelwyth]]. He was broad, strong, and ideally suited for the physical labor the garrison required. He spent his first three years doing essentially what his family did: moving stone, building fortifications, hauling supplies. Then a captain noticed his size and recruited him for the castle guard.

In twenty-six years of castle guard service, Thórir has become what the military calls "essential furniture." His dense muscle is running to gray-speckled fat as he ages. The scar that runs from his right ear to his chin was earned in a barracks brawl in his twenties—a knife fight over a woman, the kind of stupid violence that Thórir now regards with the distant disgust of age. He has suppressed more riots, broken up more fights, physically removed more drunken nobles from the castle than any three other guards combined.

Now at forty-three, Thórir's knees hurt, his hands have arthritis, and his wind is no longer reliable. He knows his time as active guard is ending. The garrison commander has quietly suggested that Thórir move into training and supervision roles. Thórir, who has never done anything but physical work, faces the terrifying prospect of becoming supervising authority rather than executing authority. He is six years away from mandatory retirement and counting the days.

## Psyche

### Personality

Thórir is tired in a way that sleep does not fix. He moves with the careful deliberation of a man who has learned that his size makes him dangerous and has worked his entire life to control it. He speaks in a low, measured voice and rarely shows emotion. This restraint is not coldness; it is the discipline of someone who learned early that men his size frighten people and that displaying anger only makes it worse. He is kinder to the enlisted soldiers than to the nobility, a bias born from the recognition that enlisted men and he come from the same brutal world.

### Motivation

Thórir's motivation is simple: survive until retirement. He wants to return to his family's quarries and work stone again, where the work is simple and honest and kills a man in predictable ways. He has no ambitions and no need for advancement. He simply wants to reach the finish line without catastrophe.

### Strengths

His physical strength remains great despite age. His judgment in physical confrontations is sound—he knows how to restrain people without permanently injuring them, a skill developed over decades of suppressing noble tantrums. He is loyal to the institution of the castle, if not to the individuals who command it.

## Social

Thórir is respected by guards and soldiers, invisible to most nobility, and regarded as vaguely dangerous by those who interact with him regularly. He has no family in Aelwyth anymore; his siblings either died or left for other territories.

## Companions

### Patrons

**Commander Aelys Thânandi**—The captain of Stormveil castle guard for the past fifteen years. Aelys is a soldier by trade who recognizes Thórir's value and has explicitly protected him from reassignment. She has also quietly agreed to write a strong recommendation for Thórir's retirement, which will secure him the fullest pension. Their relationship is built on practical respect.

### Enemies

**Lord Kael Draven**—A younger noble who arrived at Stormveil five years ago as the regional lord's military advisor. Draven is ambitious, aristocratic, and disdainful of soldiers who serve for pay. He has attempted to force Thórir into increasingly harsh discipline, and when Thórir did not comply, Draven began spreading rumors that Thórir is "soft" and "a relic of the old guard." Thórir ignores this, which infuriates Draven more than direct confrontation would.

## Plot Hooks

1. **The Heir's Crisis**—The regional lord's eldest son is discovered in a tavern brawl with severe injuries—injuries inflicted by a woman. The official story becomes that he was robbed; the truth is that he attempted to force himself on a guard captain's daughter and she defended herself. The lord demands justice. Thórir is instructed to arrest the woman and suppress the evidence. Commander Aelys is overridden by the lord's authority and forced to accept the orders. Thórir can follow the order and arrest an innocent woman, or defy his commander and the lord, knowing that disobedience will end his service one year short of his mandatory retirement.

2. **The Assassin's Opportunity**—Thórir suspects that an attempted assault on the regional lord in the castle's inner courtyard was not random banditry but an inside job. He begins quietly investigating and discovers that two junior guards are being blackmailed by assassins from outside. The guards are young, terrified, and facing financial ruin if they do not cooperate. Thórir realizes that the next assassination attempt is coming soon, probably within days. He can arrest the guards and prevent the plot, but that means destroying their lives; he can warn them and give them a chance to escape, but that leaves the lord unprotected; or he can secretly feed the assassins false information and attempt to trap them. Each option risks his life in a different way.

3. **The Inheritance Dispute**—The regional lord dies unexpectedly, and the succession becomes contested. Two of his children claim legitimate right to inherit. Neither is suitable; both want Thórir's personal guard loyalty to strengthen their claim. Both offer promises of early retirement, increased pension, or positions of honor. Thórir is suddenly political, whether he wants to be or not. Commander Aelys is caught between the two factions and asks Thórir to choose sides, knowing that his physical loyalty will influence other guards. Thórir's choice will determine who rules the territory.

4. **The Dying Guard**—A younger guard under Thórir's command, **Ser Hadrian**, is diagnosed with a wasting illness. Hadrian is married with children, and his military pension will not support them adequately after his death. Hadrian asks Thórir privately to help him fake his death so he can disappear and pursue hidden work as a mercenary, allowing him to earn higher wages and leave his family better-positioned. The request puts Thórir in a position to either help his subordinate commit fraud (and desertion) or watch a man die knowing he could have helped. The garrison would certainly investigate Hadrian's "death," making false documentation extremely difficult to pull off.
