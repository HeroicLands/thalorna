---
shortcode: hamaktlghnth
name: {full: Hamak Talg-hunáth}
type: being
subType: npc
description: "Elder of the house of the spanning of the snow and Master of Works of Talg-nugár Hold, who keeps the Lunvharn valley's channels and holds that a fall brought down on a sound slope is a forced cut."
tags: [gm]
data:
  pack: gm-actors
  icon: icon-person
  templatePriority: null
  archetypes: [artisan, scholar]
  occupation: Master of Works
  lore: []
  culture: khazariclt
  homes: [hvolvern]
  affiliations: {talgnugarhld: {rank: 3, office: [Elder of a House, Master of Works]}}
  socialTies: {being-kavalannlpfrd: friend, being-darakhtnvgrz: rival}
  gender: female
  species: flkkhazar
  born: "662.140"
  died: null
  height: 4' 7"
  weight: 145 lbs
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: medium
    complexion: [rough]
    hair_style: knotted
    facial_hair: full_beard
    extra_features: [a right thumb flattened broad by years on the sounding hammer]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: skill-khazarlng, system: {masteryLevelBase: 80}}
    - {model: skill-drthrkscrpt, system: {masteryLevelBase: 62}}
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
      weight: {base: 145, calc: "145"}
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

Hamak Talg-hunáth (_HAH-mahk tahlg-hoo-NAHTH_) is a Khazár woman of 4'7" and heavy build, with medium, rough skin, dark brown hair knotted at the nape, a full dark brown beard and dark brown eyes. Her right thumb is flattened broad by years on the sounding hammer, which she wears on a cord around her neck, and she wears a coat of felted wool stiff with the lime of the channels.

# Dossier {#dossier}

**Master of Works of [[affiliation-talgnugarhld|Talg-nugár Hold]]. Wants every channel in the valley running, every terrace wall standing, and no cut entered against the hold that she could have prevented.**

Hamak is an elder of the house of [Talg-hunáth]{.name data-type="affiliation/lineage"}, the spanning of the snow, and sits for it at the council of Talg-nugár Hold. Her house bridges the ice and the gullies of the Reach, and as Master of Works she keeps the channels that lead the meltwater to the [Lunvharn]{.name data-type="affiliation"} terraces, the terrace walls, the granaries and the hold's own works. Her given name is built on the note a hammer rings from sound stone.

## Background

Hamak learned the hammer late, after six years of listening, because her teachers would not let her strike while she still mistook a dull note for a seam. She spent her first working years on the spans of her house across the gullies of the col and came down to the valley's channels when the Master of Works before her lost his hands. In the autumn she sent the engineers down to raise the walls of the highest terraces after the late thaw split them, and walked the work herself.

On the council she stands with [[being-kavalannlpfrd|Kavalan Nalp-furád]] against bringing down the slope above the terraces. A fall brought down on sound rock is a forced cut, and she will not have the hold entered in the record for it.

## Psyche

### Personality

Hamak is quick, exacting and short with anyone who talks while she is listening to stone.

### Motivation

She wants the works her house and her office hold kept sound, and she wants no cut entered against the hold that she did not argue against.

### Strengths

She hears a fault in a channel wall from twenty paces, and the engineers of the hold will rebuild a wall twice on her word.

### Weaknesses

She keeps what she knows until she has proved it, and on the council that means she often speaks last and too late.

## Social

### Companions

The engineers of her office, and Kavalan Nalp-furád, the Speaker at the Gate.

### Patrons

None. The council sent her to her work.

### Enemies

None she would name. On the council, [[being-darakhtnvgrz|Darakh Tanv-guráz]] opposes her over the slope.

### Affiliations

- **[[affiliation-talgnugarhld|Talg-nugár Hold]]**: Hamak is an elder of the council and its Master of Works.

## Plot Hooks

1. **The split walls.** Hamak wants to know why the highest terrace walls split in a thaw that was late but not hard, and suspects the slope above them is moving.
2. **The dressed silver.** Hamak wants the piece of dressed silver the prospector picked up, because whoever let it fall from a load was careless with the hold's work.
3. **The ice bridge.** A span of her house across a gully of the col has begun to sag, and Hamak wants it sounded before the yak-trains cross it in the spring.

:::secret {title="The forced cut in the lowest working"}
The hold's lowest working follows the silver of the Gorges north under the slope above the terraces, and Hamak has sounded it from below: two seasons of the prospector's digging open into it. She has not told the council, because the working's last stretch was cut by her own grandmother across the grain, a forced cut that was entered and never mended. If the prospector breaks in, the first thing in the hold any outsider sees is her house's fault, and she means to mend it before the thaw without saying why.
:::
