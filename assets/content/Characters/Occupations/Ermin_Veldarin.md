---
shortcode: ermynvldrn
name: {full: Ermin Véldarin}
type: being
subType: npc
description: "A gray-haired young yeoman of the crown's serjeanty at Liranel, a child of the road from a Varokh raid, set to watch the tally-house at night."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Town Guard
  lore: []
  culture: elavendriclt
  homes: [liranel]
  affiliations: {kngdmlvndr: {rank: 2}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "697.160"
  height: 5' 8"
  weight: 128 lbs
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: grey
    skin_color: medium
    complexion: [weathered]
    hair_style: cropped
    nose: narrow
    extra_features: []
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 19}}
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

Ermin Véldarin is a 22-year-old man who stands 5'8" tall and is of light build, slight enough at 128 pounds to seem younger than he is. His hair is prematurely gray, a shock of silver-white that he keeps cropped close to his skull, and his dark brown eyes are large and watchful in a medium-toned, weathered face that carries more tension than a man his age should. His features are fine, a narrow jaw, high cheekbones and a thin nose, with the slightly hollowed look of someone who does not eat or sleep enough. He moves quietly, almost silently. He wears the serjeanty's kit of leather tunic, quilted padding and soft boots, all of it hanging loose on his spare frame, and he keeps his cloak drawn close in any weather.

# Dossier {#dossier}

Ermin Véldarin is a yeoman of the crown's serjeanty at [[place-liranel|Liranel]], the timber town of the [[place-lirve|Lirve]] coast, an [[lore-elavendrnppl|Élavendren]] freeman who keeps the peace of the forest court under the serjeant [[being-khornhalrn|Horen Halren]].

He does not remember much of his early childhood. He was eleven when a [[lore-varokhiclt|Varokh]] war-party came over the [[place-auldalon|Áuldalon]] hills and burned his family's steading, and he walked west with the other families who fled it. His parents died on the road, and he will not say how. The temple of [[affiliation-lizelas|Lizelas]] at Liranel took in the children who reached the town, and the town found them places, not all of them kind.

At eighteen he took the crown's coin as a yeoman because he had no other skill to sell, and the work suited him. The watchfulness that made him a strange child makes him a good guard: he notices what others miss and stays calm when they do not. In four years under Horen he has become the yeoman sent to watch a door, follow a man or sit outside the tally-house all night. He speaks quietly and seldom, and his gray head is known in every street of the town.

## Psyche

### Personality

Ermin is quiet to the point of seeming mute. He observes rather than joins in, reads danger before others see it and keeps his feelings to himself. He trusts slowly.

### Motivation

He wants safety, his own and that of the other children of the road, most of whom still live in Liranel. He wants no one else to walk the road he walked.

### Strengths

His awareness of danger is uncommon, he moves silently and goes unnoticed, he is a steady hand with a spear and he does not panic.

### Weaknesses

He keeps everyone at a distance, he does not sleep, and a threat to the families of the road clouds his judgment.

## Social

The town regards Ermin with respect and some unease. He is welcome in the serjeanty's hall and the temple's kitchen, and in few other houses for long.

### Companions

The other yeomen of the serjeanty, who have stopped teasing him, and the families who came west with him.

### Patrons

Horen Halren, who took him on, and the magistrate [Ílthera Úlmernde]{.name data-type="being/npc"} of Liranel's royal court, who placed the children of the road in the town and has quietly paid for Ermin's letters.

### Enemies

A hired guide of the town, [Aulde Hérselnde]{.name data-type="being/npc"}, who says the road children are thieves and that a yeoman who was one of them cannot be trusted with a door.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Ermin is a Freeman of the crown and a yeoman of its serjeanty at Liranel.

## Plot Hooks

The Tally-House Door
: Horen has set Ermin to watch the tally-house at night while the forest court's quarrel over the moved bounds is heard. On the second night someone came with a key, and Ermin let him pass, because he knew him.

The Order's Night
: An [[affiliation-ordoarcanis|Order]] fellow is hiring guards for a moonlit night at [[place-wrghthllw|the Wrought Hollow]], and two of the road children have signed on for the wages. The crown's guide [[being-lenirasrdln|Lénira Sérdalnde]] has refused to go, and Ermin asks a party to go in his place and bring the two back.

The Guide's Word
: Aulde has told the guides that a road child robbed a party's packs past the margin, and the guides want the boy given up. Ermin knows the boy did not do it and knows who did.
