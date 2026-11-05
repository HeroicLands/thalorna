---
shortcode: jrmnashrn
name: {full: Jiraman Ashuruni}
type: being
subType: npc
description: "A singer of Yamuzel's Veterans' Quarter who sings the war's songs in the veterans' halls, makes his own instruments, and is wanted on Review night both in the halls and at the banquet on the height."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar]
  occupation: Shudarum
  lore: []
  culture: taruzelianclt
  homes: [yamuzel2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, lusinia: {rank: 1}}
  gender: male
  species: humanflk
  born: 677.138
  height: 5' 10"
  weight: 161 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: medium
    complexion: []
    extra_features: [a tattoo of a falcon on the right arm]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 75}}
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

Jiraman Ashuruni is a 42-year-old man who stands 5'10" tall and is of moderate build. He has an angular face with prominent cheekbones, a high forehead, and a narrow jaw that leads to a strong chin. His large hazel eyes sit beneath arched brows, lending him an expressive gaze. A straight nose and curved lips complete his features. He has medium-toned skin. His dark brown hair is cropped short, and a tattoo of a falcon is inked on his right arm.

# Dossier {#dossier}

Jiraman Ashuruni is a _shudarum_, a singer of war songs and teller of tales, in [[place-yamuzel2|Yamuzel]], who lives and works in the [Veterans' Quarter]{.name data-type="place/site"} on the slope between the admirals' street and the yards. He sings in the veterans' halls of the quarter, in the taverns of the harbor streets and at the festivals, and his voice is deep and carries to the back of any hall. He plays instruments he has made himself, at a bench in his room under the eaves of a yard men's tenement.

His songs are the war's: the yards building the fleet, the blockade broken, the squadrons going into the [[place-tamzirshoals|Tamzir Shoals]] at dawn. On the night of the [[lore-fleetreview|Fleet Review]] the halls pin fresh paper over the old broadsheets, read the names of their dead and sing [[lore-paidattheshoals|What Was Paid at the Shoals]] until the lamps burn out, and in the hall he sings in, Jiraman leads it.

## Background

**The family.** Jiraman was raised in a family of fighting men and learned the sword before he learned his letters, but it was his voice that the harbor taverns paid for.

**The war.** He was a grown man when the war of independence came, and he sang in the yards while the fleet was built. Many of the songs the quarter sings now he first sang there.

## Psyche

### Personality

Jiraman is proud, reserved and serious about his songs. He sings a song one way, the way he first made it, and does not change it for a room that wants something lighter.

### Motivation

He wants the war remembered as the men who fought it remember it, and he wants his songs sung after him.

### Strengths

He has a powerful voice, a great store of songs and tales, and a craftsman's hand with wood. He notices everything in a room while he sings.

### Weaknesses

He can seem aloof, and an audience that does not want the war's songs gets little else from him.

## Social

### Enemies

Other singers of the harbor taverns envy him the halls' custom and say that he sings the same ten songs.

### Others

- **The veterans' halls of the quarter**, which feed him and keep a stool for him by the fire.
- **The tavern hosts of the harbor streets**, who pay him to sing when the convoys are in the roads.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Yamuzel, free to trade under the Confederation's tariffs and entitled to petition the [[affiliation-grandcouncil|Grand Council]] through his state's councilors.
- **[[affiliation-lusinia|Faith of Lusinia]]**: one of the lay faithful, the Devran, who keep the World-Weaver's feasts without office in the temple.

## Plot Hooks

1. **The new verse.** The hall Jiraman sings in wants a new verse for Review night, one that names a captain of the height and says what he did at the Shoals. The men who asked for it will not say the name in the tavern, and Jiraman has not yet said whether he will sing it.
2. **The banquet.** The [Admiral's Council]{.name data-type="affiliation/governmental"} has asked Jiraman to sing at its banquet on the height on Review night, for a purse larger than the halls have ever paid him. The halls keep their own night, and the halls do not go up to the height.
3. **The terraces.** The veterans ploughing the marked plots on [[place-khamisar|Khamisar]]'s southern terraces ask Jiraman to come and sing on the day the marines come to clear them, because many of the marines grew up in the quarter singing his songs.

:::secret {title="The Truth of Yamuzel"}
The captain the hall wants named is the one whose ship broke from the line on the second day of the Shoals and was later counted among the victors. His house is on the height, and the ship model missing from an admirals' window is his: a veteran's son of the quarter took it, and the card left behind with one battle scratched out is the veterans' accusation. The new verse would say aloud what the card says in silence.
:::
