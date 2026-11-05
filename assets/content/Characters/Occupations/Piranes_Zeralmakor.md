---
shortcode: pyrnszrlmkr
name: {full: Piranes Zeralmakor}
type: being
subType: npc
description: "A mapmaker of Polthara who walks and draws the estates of the Hilen country, plain plans for their stewards and gilded ones for the collectors of the capital, and who knows the wooded margins better than its bandits do."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, artisan]
  occupation: Cartographer/Artist
  lore: []
  culture: vylarianclt
  homes: [polthara]
  affiliations: {vylarinmpr: {rank: 5}, marendas: {rank: 1}}
  gender: male
  species: humanflk
  born: 681.88
  height: 5' 9"
  weight: 157 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: olive
    complexion: [weathered]
    extra_features: [a scar on the left thigh]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 15}}
    - {model: skill-vylarilng, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 24}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 45}}
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

Piranes Zeralmakor is a 38-year-old man who stands 5'9" tall and is of moderate build. He has a square face with angular cheekbones, a wide forehead, and a strong jaw that leads to a strong chin. His almond-shaped brown eyes sit beneath prominent brows, lending him a measured gaze. A straight nose and firm lips complete his features. He has olive skin with a weathered complexion from years of walking fields in all weathers. His brown hair is combed neatly to one side. A long scar on his left thigh, from a fall down a ravine in the wooded margins of the district, gives him a slight hitch on stairs.

# Dossier {#dossier}

Piranes Zeralmakor is a mapmaker and draughtsman of [[place-polthara|Polthara]], the market town of the [[place-hylen|Hilen]] estate country, and a man of the propertied order whose family keeps a house in the town. He draws the estates of the district: their fields, vineyards, woods, roads and boundary-stones, surveyed on foot with a chain and a sighting-board and drawn fair on vellum.

His work has two buyers. The stewards of the great houses commission plain plans of their masters' land, for leases, for boundary quarrels and for the courts of the province, where a sealed plan stands beside a register copy as evidence of what an estate holds. The collectors of the capital buy the other kind: the same estates drawn with their houses in elevation, their vines in rows and their woods in single trees, bordered with the arms of the house. The second kind pays for the first.

He walks every survey himself, including the wooded margins of the district where the stewards ride home in company. He knows those roads better than most of the men who rob on them.

## Background

**The family.** The Zeralmakor hold a little land in the district and a town house off the market square, and they live on its rents. Piranes was taught to draw by a tutor, to survey by an old boundary-setter of the estates, and to sell by nobody.

**The margins.** He has surveyed the district from one edge to the other, and his plans are on the tables of half the stewards who sell at Polthara. He took the scar on his thigh on a survey in the margins, and he walked the rest of the survey before he had it seen to.

## Psyche

### Personality

Piranes is curious, exact and reckless with his own skin. He takes a risk on a survey that he would forbid a hired chainman, and he cannot leave a blank on a plan.

### Motivation

He wants the map of the district complete and true: every field where it lies, every boundary-stone where it stands, whatever the estate's master says it holds.

### Strengths

He draws beautifully and measures accurately, he is patient on the ground, and he has a sharp eye for a field that has gone back to scrub.

### Weaknesses

He is no man of business, and he will tell a steward exactly what his plan shows whether the steward wants to hear it or not.

## Social

### Enemies

He has none he knows of. Several stewards of absent masters would prefer that the plans of their estates were less exact.

### Others

- **The stewards of the district**, who commission his plans and argue with what they show.
- **The collectors of the capital**, who buy his drawn estates through a dealer of the market square and never see the ground.
- **The pupils of the heralds' school** on the north road, who come to him on market days to check the arms in his borders.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a Gulmen, of the propertied order from which the empire's officers and great commands are filled.
- **[[affiliation-marendas|Faith of Marendas]]**: one of the lay faithful, the Devran, who keeps the feasts of the god of knowledge without office in the temple.

## Plot Hooks

1. **The fallow estate.** Piranes surveyed an estate of a capital master six years ago and drew its fields as scrub. Its steward brings wagons of grain and wine under its mark to the Polthara market twice a month. Piranes has noticed, and he wants someone to ride out with him and look at the fields again before he says anything at the Register House.
2. **The road home.** The stewards robbed on the road home from the market want a plan of the woods where it happened, and Piranes is the only man who has walked them. He asks a party to come with him, because the last time he went alone he came back with the scar.
3. **The dead man's desk.** A widow who found her late husband's writing-desk in a Polthara sale, sold as the goods of an estate she has never heard of, has come to Piranes for a plan of that estate. His plan shows a farmhouse of four rooms, and no house that ever held a desk like hers.
4. **The collector.** A collector of the capital offers Piranes more than a year's commissions for a drawn map of the whole district on one sheet, every estate and every road, and will not say what he wants it for.
