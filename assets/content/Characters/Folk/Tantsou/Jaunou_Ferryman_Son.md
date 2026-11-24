---
shortcode: jaunoufrysn
name: {full: "Fourth Son of the Ferryman of the Clan of Ash on the Lower Water, near Jaunou"}
type: being
subType: npc
description: "A ferryman's son of Jaunou, twenty-four, whose father's ferry has nothing to carry while the town's river is dry in its bed, and who spends his days among the households the famine has ruined."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [commoner]
  occupation: Ferryman
  lore: [nouwen]
  culture: tantsouclt
  homes: [jaunou]
  affiliations: {mwonouprv: {rank: 1}, tantsouempr: {rank: 2}}
  gender: male
  species: humanflk
  born: "695.301"
  died: null
  height: 5' 6"
  weight: 124 lbs
  frame: light
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
  packFolder: ankaristantsou
  items:
    - {key: ctunic, model: armorgear-ctunic, name: "Undyed hemp clothing", kind: clothing}
    - {key: ltsndls, model: armorgear-ltsndls, kind: clothing}
    - {key: kni, model: weapongear-kni, name: "Knife", kind: weapon}
    - {key: rope12hemp, model: miscgear-rope12hemp, name: "Ferry rope", kind: miscgear}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 44}}
    - {model: skill-tantsoulng, system: {masteryLevelBase: 72}}
    - {key: ctunic, model: sohl-sohl-armorgear-ctunic}
    - {key: ltsndls, model: sohl-sohl-armorgear-ltsndls}
    - {key: kni, model: sohl-sohl-weapongear-kni}
    - {key: rope12hemp, model: sohl-sohl-miscgear-rope12hemp}
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
      weight: {base: 124, calc: "(9 * str) + 50"}
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

He is a 24-year-old man who stands 5'6" tall and is of light build, thinner than his frame, as most of Jaunou is this year. He wears undyed hemp and keeps his father's ferry rope coiled over one shoulder from habit.

# Dossier {#dossier}

He is the fourth son of a ferryman of [[place-jaunou|Jaunou]], a market town in the famine country of [[place-mwonouplnd|the Mwonou Uplands]], and he names himself by his description: Fourth Son of the Ferryman of the [Clan of Ash on the Lower Water]{.name data-type="affiliation/lineage"}, near Jaunou. The small river that waters the town's paddies is dry in its bed, and his father's ferry has nothing to carry over it.

## The Famine

**The market.** The rice in Jaunou's market is rice the province buys from the granaries of [[affiliation-wongsenprv|Wongsen Province]], at the price the Prince of Wongsen names, and a fourth son with no ferry to work has little to buy it with.

**The dead first.** The households feed their dead before their children, as the ledger of [[lore-ancstrwrshp|Ancestor Worship]] requires, and a household that cannot keep the [Festival of the Dead]{.name data-type="lore/gathering"} properly faces a year with weakened advocates in heaven. He keeps company with the households that can no longer keep it.

**The court.** The famine petitions come to the magistrate, [[being-jaunoumgstrt|Eldest Son of the Commandant of the Clan of Red Gate in Autumn]], faster than he can answer them, and the ferryman's son spends long days among the petitioners who wait at the court.

:::secret {title="The Cult of the Forsaken"}
He is a Recruiter of [[affiliation-nuotsourui|The Cult of the Forsaken]]. He works the margins the cult recruits from: indebted [[lore-shuonong|Shwonong]] whose households have collapsed, [[lore-noutsou|Nwitsou]] whose classification has drifted into irrecoverable disgrace, and above all the condemned, whose ledgers admit no ritual redemption and for whom no ancestor will advocate. Famine Jaunou is full of households losing their advocates in heaven, and he meets them where imperial religion has given up on them, with the cult's assertion that their condemnation is not their failure but the failure of the system that condemned them.

He sees each recruitment through to its act of irreversible commitment: a public blasphemy, a petty sabotage of a local temple, or a first small act of violence, after which the recruit's standing in the mainstream order cannot be recovered. He is Committed himself, and nobody has ever confirmed a rank above that. His regional cell plans its own operations, he knows no center, and if he is taken the cult disowns him.
:::

## Psyche

### Personality

He is patient and a good listener, and he says little until a person has said everything.

### Motivation

He wants a living in a town where his father's ferry has no water under it.

### Strengths

The ruined of Jaunou talk to him, since he is as hungry as they are and has no office to report them to.

### Weaknesses

The famine has left him no trade, and as a fourth son he has no inheritance to wait for.

## Social

### Family

- His father, a ferryman of the Clan of Ash on the Lower Water.

### Affiliations

- **[[affiliation-mwonouprv|Mwonou Province]]**: a subject, entered in the registers of the province.
- **[[affiliation-tantsouempr|Empire of Tantsou]]**: of the [[lore-nouwen|Nouwen]].

:::secret {title="The cult"}
**The Cult of the Forsaken**: Recruiter, a Committed member of a regional cell.
:::

## Plot Hooks

1. **The defaced shrine.** A household of Jaunou finds its ancestor shrine defaced the night after it was turned away at the magistrate's court, and its head wants a party to learn who did it.
2. **The turned-away petitioners.** The magistrate hears the famine petitions faster than he can answer them, and he wants a party to learn who is telling the petitioners he turns away that heaven has already given up on them.
3. **The tribute rolls.** The district owes its tribute in a bad year as in a good one, and a party carrying the district's rolls to the province hears that someone in Jaunou has been asking when they travel and by which road.
