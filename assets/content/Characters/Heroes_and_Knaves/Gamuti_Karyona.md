---
shortcode: gmtkryn
name: {full: Gamuti Karyona}
type: being
subType: npc
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Kupapala (Well-Keeper)
  lore: []
  culture: vedyariclt
  homes: [vandyabhumi]
  affiliations: {gomarga: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "674.45"
  height: 5' 4"
  weight: 141 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: greying_black
    skin_color: dark_brown
    complexion: [weathered]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 35}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-hsdress}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-containergear-bucketleat}
    - {model: sohl-sohl-miscgear-rope12hemp, system: {quantity: 60}}
    - {model: sohl-sohl-miscgear-waxtablet}
    - {model: sohl-sohl-containergear-bpchmd}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-containergear-wtrskin}
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

Gamuti is a broad, short woman of 5'4", dark-skinned and weathered by the plateau's wind, with gray running through the black hair she wears in a single plait. Her eyes are brown and patient. She dresses in homespun and a wool mantle, walks in sandals over stony ground that would cut a lowlander's feet, and wears at her waist a cord of knotted tallies, one knot for each herd that has watered at her trough in the season.

# Dossier {#dossier}

## The Kupapala

[[affiliation-gomarga|The Kingdom of the Cattle-Road]] holds the wells and the droveways of [[place-vandyabhumi|the Barren Country]] and does not hold the grazing. The wells themselves are not the crown's. Each was cut by a named lineage, is heritable and divisible among that lineage's households, and is kept by a **Kupapala** the lineage names and the crown confirms, who sets what a passing herd pays to drink.

Gamuti is the Kupapala of a circuit well on the north-eastern droveways, named by the great herd-lineage of the [Karyona]{.name data-type="affiliation/lineage"} and confirmed by the crown when she was thirty. She is **Danhija** by birth, and on the plateau that is the station that matters: the Karyona own their stock, own their wells, pay for the escort and can move their whole wealth out of a bad district in a fortnight. She has kept her well through sixteen years of herds, quarrels and dry seasons, and the moving court has stopped at it on its circuit eleven times.

## The Filled Well

The Karyona are the lineage that filled [[place-shunyakupa|the Empty Well]].

About 440 a raid out of the river country took the Karyona wells on the eastern edge of the plateau, and the king of Gomarga, three wells away on his circuit, did not ride. The lineage filled its great well with stones so that the raiders could not water at it, and walked its herds off the plateau. The other great lineages followed, and for a century Gomarga was a kingdom of wells with no herds at them ([[lore-emptycrct|the Second Breaking and the Empty Circuit]]). The plateau still says "he filled the well" of a man who broke his word.

The lineages walked back about 540, on terms the crown has kept since, and the **Rojni** has kept a standing camp at the winter wells with the treasury, the written record and the hostages ever since. A Karyona child was among the first hostages, and there has been one in the standing camp in every generation. Gamuti's daughter is there now.

Shunyakupa itself has never been reopened. Its shaft is stopped with fieldstone to within a man's height of the lip, the droveway past it has a new course two days south, and the well-villages along the dead road stand empty.

## Reopening

The Karyona mean to clear it. The lineage has named Gamuti to speak for it, because she keeps a working well, knows the law of the circuit better than anyone in the household and is patient with the crown's officers.

The question is the one the plateau has been avoiding for three centuries. If a reopened Shunyakupa is a new well, the lineage keeps it on its own terms and the crown takes only its share. If it is the old well, it is still owed the old guarantee, the one the crown failed to honor, and the crown must say before the stones come out that it will ride to defend it this time. Either answer is a precedent for every well on the plateau.

Gamuti wants Shunyakupa reopened as the old well, still owed the guarantee the crown failed. She wants the crown to sign that it owes it, in the Rojni's record, before a single stone is lifted, and she has told the lineage's elders that she will not clear the well on any other terms. The crown's **Margapala** of the eastern droveway would rather it stayed filled. A new well on a dead droveway is one more quarrel, and an old one owed a guarantee is a debt the crown would have to acknowledge in writing.

The well-villages along the dead droveway have been losing stock at night to something that leaves no tracks a drover recognizes. Nobody will clear the well while that goes on, and Gamuti has offered water-rights to whoever clears the villages first.

## Psyche

### Personality

Gamuti is slow to speak and slower to concede. She hears out every drover who argues the price at her trough, answers him exactly, and does not lower it. She knows the watering dues of every well on the north-eastern circuit by heart and the genealogies of the lineages that cut them.

She does not pray much. She counts. She trusts a written record over a sworn word and a sworn word over a promise, and she has spent her life among herds that die if a promise is broken.

### Motivation

She wants Shunyakupa reopened as the old well, still owed the guarantee the crown failed, with the debt written down before the stones come out.

### Strengths

The Law of the Wells
: She knows the bargain between crown and lineage in every particular, and its history, and she can cite both to a Margapala who would rather she could not.

Herdcraft
: She was raised on the droveways and can judge a herd's health, its water and its distance from the next well at a glance.

The Lineage
: The Karyona are one of the great herd-lineages, and when she speaks for them the crown listens.

### Weaknesses

Her Daughter
: The girl is a hostage in the standing camp. Gamuti is a patient negotiator with every party but the one that holds her child.

Stubbornness
: She will not take a compromise that leaves the guarantee unwritten, even when a compromise would get the well open.

The Dead Villages
: Whatever is taking stock on the dead droveway is beyond anything a Kupapala can deal with.

## Social

### Patrons and Allies

The elders of the Karyona
: The great lineage that named her and that has named her to speak for it now.

[[being-blknsrtn|Balakin Saratin]]
: A young drover bonded to a Karyona household, whom she has sent ahead to watch the dead droveway, and whose tally she has promised to strike if he learns what is taking the stock.

### Rivals

The Margapala of the eastern droveway
: The crown's keeper of the road past Shunyakupa, who would rather the well stayed filled.

The other great lineages
: Who would gain nothing from a reopened Shunyakupa and would lose a precedent if the crown signs a guarantee for the Karyona alone.

### Affiliations

[[affiliation-gomarga|Gomarga]]
: Danhija of a great herd-lineage, and Kupapala of a circuit well, named by the lineage and confirmed by the crown.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She keeps the household rites and the day the herds move, which the Purohata names.

## Plot Hooks

Something in the Villages
: Herds driven near the dead droveway lose stock at night. The Karyona offer water-rights at Gamuti's well to anyone who clears the empty well-villages around Shunyakupa, and Gamuti insists on going with them to see what is there.

The Pledge
: The lineage's head carried the well's pledge on his person when the Karyona walked off, and it was lost on the road a century later. A broker in the river country now offers to sell it to the Margapala. Gamuti hires the party to get it first.

The Moving Court
: The Maharava's court arrives at Gamuti's well on its circuit. She means to put the guarantee to the crown in person, at the trough, before the whole district. The Margapala means to stop her, and the party is hired by one of them to keep the peace while the other speaks.
