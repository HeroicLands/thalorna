---
shortcode: azatodmzns
name: {full: Azato Damzanis}
type: being
subType: npc
description: "The Thordimalon's alchemist at Tirellan and the city's best-known scholar, a cold and eloquent Master of the Fisera whose work on mineral transmutation and embalming is admired and watched."
tags: [guilded, mages]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage, scholar]
  occupation: Alchemist
  lore: []
  culture: vylarianclt
  homes: [tyrellan]
  affiliations:
    vylarinmpr: {rank: 5}
    marendas: {rank: 1}
    ordoarcanis: {rank: 4}
    fisera: {rank: 3}
  gender: male
  species: humanflk
  born: 670.147
  height: 5' 4"
  weight: 112 lbs
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: medium
    complexion: [weathered]
    extra_features: []
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 45}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 8}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 9}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-jewl, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 8}}
    - {model: sohl-sohl-mysticalability-alch, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 15}}
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

At forty-nine, Azato Damzanis cuts a sparse, scholarly figure—a little over five feet four, with the lean, almost frail frame of a man whose life revolves around careful work at a workbench rather than physical toil. His medium-toned skin is weathered beyond his years, scored with fine lines that speak of decades spent poring over crystalline structures and volatile mixtures by candlelight. Most striking are his pale blue eyes, sharp and luminous with an intense, unsettling intellect; they hold the quality of a predator watching prey through glass, brilliant but wholly dispassionate. His brown hair, once thick, has thinned to a crown of close-cropped curls swept back from a high, narrow forehead. A hawkish nose and thin, precise lips complete the picture of a man whose expressions rarely venture beyond measured restraint.

# Dossier {#dossier}

Azato Damzanis is the alchemist of the [[affiliation-ordoarcanis|Thordimalon]] at [[place-tyrellan|Tirellan]], a _marendos_ (master) of the Zulen (fellowship) [[affiliation-fisera|Fisera]], the fellowship of earth and substance, and the city's best-known scholar. He is the son of the [Damzanis]{.name data-type="affiliation/lineage"}, a merchant house that holds a seat on the town council below the three _kurthoi_ (senators) who govern it, and his family's standing gave him the [[affiliation-panepistmm|Epistémion]] but no share of real power.

His reputation rests on mineral transmutation that borders on the uncanny, and on a knowledge of herbs and of embalming that points to the question he cares about most: how living substance becomes inert matter, and whether it can be held at the boundary. He works in a laboratory on a rented estate outside the city. His talk is eloquent and commanding, and those who know him well understand it as performance: he feels almost nothing for other people.

For work that skirts what [[affiliation-sekran|The Arcane Inquisition]] (the Sekran) would sanction, he keeps a second name, Kuthstan Crey. Under it he buys and sells through contacts who have never heard of Azato Damzanis.

## Background

**The marked child.** Azato showed a gift for number and the study of substances young, and was marked for the Order as every gifted child in Viléria is. He rose to _marendos_ in the Fisera by his thirties, more slowly and with more quarrels than his gifts alone would explain.

**The partner.** He worked for a time with the _marendos_ [[being-hiltheristho|Hiltheris Tholmaris]] on a project neither of them entered in the Order's records. The partnership ended when he published a demolition of her theories as "fundamentally confused about the nature of mineral essence". She died soon after, about sixteen years ago, in circumstances never fully cleared, and the Sekran's inquiry touched him at its edge. He moved his laboratory to the rented estate and took the second name soon after.

**The response.** Thirteen years ago he took apart the framework of another _marendos_ of the Fisera, [[being-tholmararort|Tholmarar Orthemandis]], in a published response read across the Order. She now chairs the fellowship's examination board.

**The river.** A trading venture by river and coast, to buy crystal specimens ten years ago, made him a competent pilot, an odd skill for an alchemist of the inland valleys.

## Psyche

### Personality

He is brilliant, precise and cold. He can describe another person's motives exactly, and he does not feel them. His warmth in company is built, and he has worn it so long that he sometimes wonders whether anything is behind it.

### Motivation

He wants to understand preservation, the line between living substance and dead matter, and he tells himself that the understanding will justify the years of solitude it has cost.

### Strengths

He is a master of mineral alchemy, herbalism and embalming, an eloquent speaker and a patient, careful worker. He keeps his two lives as separate as any two reagents on his bench.

### Weaknesses

He has no friends, his apprentices resent his exacting coldness, and his name is in a Sekran file that has been set down but not closed.

## Social

### Enemies

- [[being-tholmararort|Tholmarar Orthemandis]]: The _marendos_ whose framework he took apart in print, who chairs the Fisera's examination board and is making careful inquiries into his methods.
- [[being-ronethoszurm|Ronethos Zurmelates]]: A _sekeros_ (inquirer) of the Sekran following thefts from the Epistémion's mineral stores and new compounds on the black market, whose path keeps crossing his.

### Others

- [[being-zenothenguri|Zenothen Gurimandis]]: A _dasken_ (ordained teacher) of [[affiliation-marendas|Marendas]] at the [Temple of Wisdom]{.name data-type="place/structure"} on the forum, whom he meets monthly and speaks to with something like candor.
- **One of the three _kurthoi_ of Tirellan's council**, who has funded his mineral research for twelve years in return for first access to any compound of use in war or manufacture.
- **A merchant's widow of the coast trade**, who has bought and authenticated rare mineral specimens for him for five years and knows him only as Kuthstan Crey.

### Affiliations

- **[[affiliation-ordoarcanis|Thordimalon]]**: a _marendos_, with a vote in his chapter's council.
- **[[affiliation-fisera|Fisera]]**: a Master of the Art, with authority over the fellowship's junior alchemists and apprentices at Tirellan.
- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a _gulmen_ of the propertied order, by his family's standing.
- **[[affiliation-marendas|Faith of Marendas]]**: one of the lay faithful.

## Plot Hooks

1. **The old records.** An apprentice of the Epistémion has found references to the project Azato and Hiltheris Tholmaris worked on before their rupture, and asks innocent questions about it. Azato hires a party to find the rest of the records before anyone else does.
2. **The steel.** The _kurthos_ who funds him has heard that the forging of [[miscgear-vylsteel|Vilérian Steel]] involves an alchemical process the Steel Houses keep as their own, and he wants Azato to learn it. Azato needs a party to bring him samples from a Steel House's bench, which is espionage against the most jealously kept secret in the Empire.
3. **The young priest.** Zenothen Gurimandis has begun to train a young priest to take Azato's monthly confessions after him. The young man is warm, idealistic and worried for Azato's soul, and he has begun to visit the estate uninvited. Azato wants him kept away.
4. **The examination.** An apprentice of Azato's comes before Tholmarar Orthemandis's examination board and is failed on a point of mineral theory that is Azato's, not his. Azato hires a party to learn what else the board asked the boy about his master's work.

:::secret {title="The two names"}
Neither Ronethos nor Tholmarar knows the name Kuthstan Crey, and Zenothen has not been told it. The day Ronethos hears it in a hearing and puts it beside Azato's, his file has a suspect, and a _holsekeros_ (senior inquirer) may open the dormant file on Hiltheris's death beside it, since Azato's name is already in that file. Tholmarar has found the gaps in Azato's laboratory book where the unsanctioned work goes, though not the work itself. Only Azato knows what the shared project with Hiltheris was, and why it ended.
:::
