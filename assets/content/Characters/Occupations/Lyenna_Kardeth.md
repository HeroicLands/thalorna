---
shortcode: glyencrdth
name: {full: Lyenna Kardeth}
type: being
subType: npc
description: "The widowed head of House Kardeth of Port Aelion, who sits on the town council and whose husband was killed on the Elanmere road."
tags: [todo, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier]
  occupation: Noblewoman / Head of House Kardeth
  lore: []
  culture: elavendriclt
  homes: [portaelion]
  affiliations: {kngdmlvndr: {rank: 5}, twncnclprtaln: {rank: 3}}
  gender: female
  species: humanflk
  born: 692.86
  height: 5' 11"
  weight: 168 lbs
  frame: medium
  appearance:
    eye_color: grey
    hair_color: blonde
    skin_color: light
    complexion: [smooth]
    extra_features: []
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 30}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 14}}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
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

Lyenna Kardeth is a 27-year-old woman who stands 5'11" tall and carries herself with the upright, unhurried posture of someone who has never had to rush for anyone. She has a diamond face with high cheekbones, a prominent forehead and a sharp jaw that leads to a pointed chin. Her round gray eyes sit beneath arched brows, and she looks at people as though assessing them, because she is. She has a slightly upturned nose, thin lips and light skin with a smooth complexion. Her blonde hair falls past her shoulders, usually dressed in one of the elaborate styles of the court at Péravel. She dresses impeccably in velvet, silk gloves and fine boots, wears the signet of [House Kardeth]{.name data-type="affiliation/lineage"} on her right hand, and carries a dagger openly at her waist, which is not unusual for a noblewoman of the kingdom.

# Dossier {#dossier}

Lyenna Kardeth is the head of House Kardeth, a noble house of [[place-portaelion|Port Aelion]] of moderate standing, old enough to command respect and not prominent enough to draw unwanted scrutiny. As head of one of the town's older families she sits by custom on the [[affiliation-twncnclprtaln|Town Council of Port Aelion]].

She was raised in the way of [[lore-elavendriclt|Élavendri]] noblewomen: tutored in letters, heraldry, law and the arts of discourse, and expected to manage a household and represent her house with grace. She excelled at all of it. Where other young noblewomen found the maneuvering of court tedious, Lyenna found it invigorating, not because she enjoyed people but because she enjoyed winning.

She married at nineteen. Lord [[being-kenrelkardet|Kenrel Kardeth]], fifteen years her senior, held the family's estates and its seat on the council, and was a decent man, well liked, moderate and content to manage his lands. Lyenna found him dull. Three years ago he was killed on the road between his estates and [[place-elanmere|Elanmere]] in what was reported as a bandit raid. The attack was unusually well coordinated for bandits: the escort was ambushed at a narrow place, Kenrel was singled out and his servants were left alive to carry the news. The crown's garrison at Elanmere investigated under Captain [[being-dharnvldrn|Daran Véldarin]], concluded that the raiders came from beyond the border and closed the case. As his widow, Lyenna took control of the house's affairs and its seat, and she has used both to considerable effect.

Now Kenrel's cousin, Lord [[being-heltankardet|Heltan Kardeth]], is home from service abroad and asking at every gathering in the town how the bandits knew which rider to take.

:::secret {title="The widow's faith"}
The raid on the Elanmere road was arranged by Daran at Lyenna's request. She did not hate Kenrel; she is not sentimental enough for hatred. His moderation and his passive temper were obstacles, and his death gave her the house, the seat and freedom from a husband's oversight.

Her connection to [[affiliation-blackflame|the Black Flame]] is older than her marriage. She came to the faith not by the martial road that brought Daran but by ideology: a young noblewoman who looked at the polite fictions of court life and saw mechanisms by which the timid restrain the capable. Her faith is cold and abstract, a conviction that the natural order is dominance and that courtesy exists to hide it from those too weak to face it. She and Daran are the backbone of the faith in the Elanmere country. He commands the garrison and its investigations; she works in the rooms he cannot reach, the council chamber and the receptions where reputations are made, and smooths over what his lack of grace stirs up. She does not give him orders, and he listens when she advises. When she needs force, a threat silenced or a message delivered, Daran provides it. Both answer to the same Flame-Warden, who counts their partnership a model of how the faith should work in hostile country.

The grovekeeper [[being-lanthevileha|Lánthevile Halren]] has asked Lyenna, as a councilor, to press for a more thorough investigation of the burnings along the lake road than the garrison has made. Lyenna promised to raise it and has no intention of doing so, and that promise has put her in Lánthevile's sight.

**Hook: the cousin's questions.** Heltan has obtained a copy of the garrison's report on Kenrel's death and noted its inconsistencies, and he has asked for a private meeting. Lyenna must reassure him, mislead him, discredit him or arrange something more permanent, with the family watching.

**Hook: the council vote.** A proposal before the council asks the crown to send an investigator from outside the Elanmere garrison's chain of command. If it passes, Daran loses his hold on the investigations. Lyenna must defeat it without appearing to oppose it.

**Hook: Daran's recklessness.** One of Daran's followers has gone too far, the Grove Council is demanding action, and Daran's usual methods cannot bury it. Managing the fallout herself links her to the garrison's handling of the case in a way anyone could notice later.
:::

## Psyche

### Personality

Lyenna presents a composed, capable noblewoman: dignified, articulate and socially exact. She observes every courtesy and fulfills every obligation of her station. None of it is false, exactly, but the warmth is performed, and those who spend time around her begin to sense it. Servants and lesser nobility find her exacting and dismissive. She does not raise her voice, and does not need to. She insists on being addressed as Lady Kardeth, on principle: rank exists to be observed. Among her equals she is more engaged, though every exchange seems weighed and filed for later use.

### Motivation

Lyenna wants power, not the ceremonial kind that comes with a title but the kind that decides outcomes, because she believes she is better at it than anyone around her. She is building House Kardeth into a voice that counts on the council and beyond it.

### Strengths

She reads people quickly, knows when to charm and when to intimidate, and has an instinct for leverage. Her knowledge of law, heraldry and trade gives her practical tools. She is more capable with a blade than her station suggests, having trained seriously and kept the skill discreetly.

### Weaknesses

Her contempt for those she considers lesser blinds her to threats from below: the servant who overhears, the clerk who notices a discrepancy, the minor lord whose humiliation festers. She has associates and clients but no one who would stand by her from affection. Her composure depends on control, and a situation that stripped it away would expose a fragility she has never had to face.

## Social

Lyenna is respected in Port Aelion as the competent head of House Kardeth, and in some quarters feared. The sympathy that attended Kenrel's death has settled into recognition. She receives invitations to every function of consequence, and her presence tells the room that a matter is being taken seriously. She is not loved.

### Companions

Her household, which she runs as tightly as the house's accounts.

### Patrons

Several of the council's members and the heads of two merchant houses of the harbor, whom she has cultivated with care.

### Enemies

Lord Heltan Kardeth, whose questions trouble her, though he does not know he is her enemy.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Lyenna is of a Noble house and heads it.
- **[[affiliation-twncnclprtaln|Town Council of Port Aelion]]**: She sits as a Councilor, by custom as head of an older family.

## Plot Hooks

The Widow's Suitor
: A nobleman of a neighboring district has begun courting Lyenna, drawn by her competence and the value of an alliance with House Kardeth. She asks a party to learn what his own house owes and to whom, before she decides whether he is useful.

A Question at a Gathering
: Heltan Kardeth has asked a party to carry a copy of the Elanmere garrison's report on his cousin's death to someone who can read it without the family's manners. Lyenna, learning of it, invites the party to dinner first.
