---
shortcode: fethardhrl
name: {full: Fetar Darel, given: Fetar, clan: Darel, prov: [Fet]}
type: being
subType: character
description: "The pilot of the Tamzir, a cheerful dyer's son of Blavera in the Zuravlen valley and arguably the finest pilot on the Vilérian Sea."
tags: [tamzir-crew, tradesfolk]
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: [mariner]
  occupation: Pilot
  lore: []
  culture: provenzianclt
  homes: [blavera]
  affiliations: {thetamzir: {rank: 3}, kngdmprvnz: {rank: 2}}
  gender: male
  species: humanflk
  born: 685.142
  height: 6'
  weight: 170 lbs
  frame: medium
  appearance:
    eye_color: blue
    hair_color: red
    skin_color: fair
    complexion: [freckled]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 41}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 61}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 41}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 57}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 29}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 119}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 66}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 37}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-cleg}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-containergear-bpchmd}
    - {model: sohl-sohl-miscgear-pence, system: {quantity: 88}}
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

![[fethardhrl|Fetar Darel]]{float=top-left}

Fetar Darel is a 34-year-old man who stands 6'0" tall and is gangly and loose-limbed. He has a mop of unruly red hair, a scatter of freckles and blue eyes that always seem to be enjoying a private joke. He dresses like a man off a Provénzian promenade, in patterned tunics and embroidered tabards that clash with the grime of a trading deck, and his hands on the helm are as steady as stone.

# Dossier {#dossier}

Fetar Darel is the pilot of [[affiliation-thetamzir|the Tamzir]], a trading ship of mixed crew and mixed reputation, and he was born and still has his family at [[place-blavera|Blavera]], the river manor of the [[place-zuravlenrgn|Zuravlen]] valley where the river slows on the flat ground.

He is a dyer's son. As a boy he spent every hour he could steal on the river in whatever he could borrow or build, fishing for the family pot and watching the fruit boats go down toward the sea. At seventeen he followed them to the coast with his family's reluctant blessing and apprenticed himself to a pilot, and his river sense turned out to work on open water. Within five years he was one of the finest pilots on the southern coast.

He joined the Tamzir seven years ago, after its last pilot was taken up for smuggling of his own. [[being-zbzmjkdn|Zabuzum Jakuduni]], whom the crew call Bu, did not think much of the cheerful Provénzian in the ridiculous clothes until Fetar threaded the ship through a reef passage at night in a storm with an imperial patrol behind. Three years ago he married [[being-slvrvlskyr|Sélvara Valskir]], and he is besotted with her and a little afraid of not measuring up to her.

He goes home to Blavera when the Tamzir lays up, and the valley he left has changed. The fast boats out of [[place-volsather|Volsater]] carry fresh fruit on the evening wind, the barony quarrels over every basket, and his brothers have asked whether a pilot who can run a reef by night could run peaches down to Volsater faster than anyone else.

## Psyche

### Personality

Fetar is the Tamzir's warmth: funny, kind and stubbornly cheerful in a crew that leans toward brooding. He jokes his way past his own worries, and in a crisis at the helm he goes quiet and quick in a way that surprises people who know only the clown.

### Motivation

He wants to sail, to be with Sélvara and the strange family of the Tamzir, and to see what is past the next headland. He also wants his family at Blavera proud of him, and they would rather he came home.

### Strengths

He is arguably the finest pilot on the [[place-vylarianse|Vilérian Sea]], with a feel for water and hulls that borders on the uncanny. He keeps the crew's spirits up when nothing else will, and his courage is the quiet kind.

### Weaknesses

He is no fighter beyond a dagger in self-defense. He takes needless risks to prove he is worth more than his piloting, and he is slow to believe the worst of anyone.

## Social

### Companions

The crew of the Tamzir, and above all his wife, Sélvara Valskir.

### Patrons

None formally. His family at Blavera are respectable dyers who worry about him constantly.

### Enemies

Nobody personally; the Tamzir's enemies are his by association.

### Affiliations

- **[[affiliation-thetamzir|The Tamzir]]**: Fetar is the ship's pilot.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: He is a Freeman of the crown.

## Plot Hooks

The Fast Boat
: Fetar's brothers have bought a share in a Volsater fast boat and want him to pilot it through the harvest, down a coast he knows by night. The baron's steward at [[place-elthrembis|Eltrembis]] wants every basket graded before it sails, and the Volsater masters mean to sail ungraded or not at all.

The Pilot's Price
: A Provénzian shipping house offers Fetar a lead pilot's berth: good pay, respectability and safety for Sélvara. The offer is generous, and the house's last pilot drowned in calm water.

The Flood on the River
: The weir above Blavera has broken in a spring flood, the manor's mill is gone and the fields are under water. His family needs help, and his knowledge of the river could save lives, but reaching them means leaving the Tamzir at a bad moment.

The Uncharted Passage
: An old chart shows a passage through a reef-strewn archipelago that would cut weeks off the run between [[place-taruzelrgn|Taruzel]] and the northern ports. Only a pilot like Fetar could take it, and the chart may be incomplete or a trap.
