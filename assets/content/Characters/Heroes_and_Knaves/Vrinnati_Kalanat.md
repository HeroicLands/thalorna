---
shortcode: vrnntklnt
name: {full: Vrinnati Kalanat}
type: being
subType: npc
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Horse-Soldier
  lore: []
  culture: vedyariclt
  homes: [bharyastan2]
  affiliations: {bharyastan: {rank: 4}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "694.66"
  height: 5' 7"
  weight: 140 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: tawny
    complexion: [sun_kissed]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 45}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-weapongear-lnc}
    - {model: weapongear-shkhlynswd}
    - {model: sohl-sohl-weapongear-cbw60}
    - {model: sohl-sohl-projectilegear-arwstd}
    - {model: sohl-sohl-containergear-quiversmsh}
    - {model: weapongear-rhnhdshld}
    - {model: sohl-sohl-armorgear-mbyr}
    - {model: sohl-sohl-armorgear-ltbrch}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-ltcap}
    - {model: sohl-sohl-armorgear-wclk}
    - {model: sohl-sohl-miscgear-saddlewar}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 3}}
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

Vrinnati is a tall, strong young woman of 5'7", tawny-skinned and sun-browned, with dark brown hair braided down her back and hazel eyes. She rides in a mail byrnie over leather, with a leather cap, a wool cloak and a rhinoceros-hide shield slung at her knee, and she carries a lance, a short composite bow and a Shikhalayan sword. In a pouch at her belt she keeps a river-stone with a notch cut in it, picked up at the crossing on her first tribute ride at sixteen, which she has never added to the cairn.

# Dossier {#dossier}

## The Four Hundred

[[affiliation-bharyastan|The Kingdom of Bharyastan]] keeps four hundred horse it could not otherwise afford, out of the gold [[affiliation-suvrgrjnpd|the Janpoda of the Gold Mountain]] pays it under the treaty. They are mustered at the horse-ground below the palace at [[place-bharyastan2|Bharyastan]] twice a year and quartered there through the winter. Vrinnati is one of them. She is **Sentija**, of the warrior station, bearing arms by right and owing service in the Maharava's host, and her household has sent a rider to the four hundred in every generation since the kingdom was a kingdom.

She is twenty-six and has ridden in the tribute escort every spring for ten years. She rides the gorge to [[place-sharamukha|Sharamukha]] on exercise, where Bharyastan's horse and the recalled graduates of [[affiliation-dnrktjnpd|the Janpoda of the Bow-Fort]] stopped the host of Daunapur in [[lore-hghlndwar|the Highland War]], and she has drunk at the stream below the shrine there by day and by night.

## The Escort

Every spring the tribute is weighed at the janpoda's own station and carried up in one party, under an escort both parties provide and neither commands. The rule is as old as the treaty and was meant to keep either side from carrying off the gold. Going up, each rider adds a stone to [[place-raiderscairn|the Raiders' Cairn]] at the crossing in the gorge. Coming down, with the gold, nobody stops there.

Two springs ago the escort reached a washed-out ford in the gorge in the last hour of light. Suvargeri's captain, [Satuni]{.name data-type="being/npc"}, would not cross. Bharyastan's would not camp. The two halves of the escort argued on the bank until dark and spent the night divided on either side of the water, with the gold on the Suvargeri side, and in the morning a pack-mule and its load were gone. They were found three days later, down the gorge, in the stream, and the weight was all there. Nobody has explained the mule.

Vrinnati was on the Bharyastani bank that night with a lance and nothing to do with it. She has thought about it every day since.

## One Captain

She wants one captain for the tribute escort the treaty says nobody commands, and she wants that captain to be herself. She has said so to her own officers, who laughed, and to Satuni, who did not. A single command is the one thing both courts agreed eight centuries ago never to allow, and she has no standing to ask either court to change it.

She has one thing in her favor. The treaty is renewed at every succession on either side, and the next renewal is coming, because the Maharava is old. [[being-snrshbhmrn|Sunarsha Bhimarna]], the Samonta of the lowest valley, has been saying at fires that the tribute's weight must rise or the treaty lapse. Vrinnati thinks the treaty must stand. She also thinks that a renewal that has to be argued over is a renewal at which a clause about the escort might be argued too.

## Psyche

### Personality

Vrinnati is direct, proud and impatient with talk. She likes horses, the open season and plain orders, and she is cheerful on the road and restless in barracks. She is honest to the point of rudeness and has never understood why the court finds this a fault.

She is superstitious about the cairn and about nothing else.

### Motivation

She wants one captain for the tribute escort the treaty says nobody commands, and that captain herself.

### Strengths

Horsemanship
: She rides as well as anyone in the four hundred, with lance and bow, in the gorge and on the plain.

The Tribute Road
: She knows every ford, crossing and camp between the horse-ground and the weighing-station, in every weather the spring brings.

Courage
: She has never yet backed down from a fight or a confrontation, and her riders follow her for it.

### Weaknesses

No Standing
: She is a Sentija rider, not a captain, not a Samonta and not a member of any council.

Impatience
: She would rather force a question than wait for it to ripen.

The Mule
: She has convinced herself that the mule was a test, and she may be wrong.

## Social

### Patrons and Allies

Her household
: A Sentija family of the upper valleys that has given the four hundred a rider in every generation.

[Satuni]{.name data-type="being/npc"}
: Suvargeri's captain of the escort, who refused to cross the ford and has since come to agree that something on the road needs changing.

### Rivals

[[being-snrshbhmrn|Sunarsha Bhimarna]]
: The Samonta who has spoken of letting the treaty lapse.

Her own captain
: Who commands Bharyastan's half of the escort and does not intend to give it up.

### Affiliations

[[affiliation-bharyastan|Bharyastan]]
: Sentija, a rider of the four hundred horse, owing service in the Maharava's host.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She lays an offering at the shrine of [[affiliation-mahajaya|Mahajaya]] at Sharamukha whenever she passes it.

## Plot Hooks

Short a Rider
: This year's escort is short a rider, and Vrinnati's captain offers the place to anyone who can sit a horse. The ride up is easy. The talk round the fire is about who in the court wants the treaty to lapse, and Vrinnati wants the newcomer's opinion of the mule.

The Washed-Out Ford
: The escort reaches the same ford in the same weather, and the two captains argue again. Vrinnati crosses with the gold on her own authority, and the party has to decide which bank it is on.

The Renewal
: The Maharava dies, and the renewal opens. Vrinnati asks the party to carry her proposal for a single escort command to Satuni at Suvargeri, past Sunarsha's people on the road, before the two courts sit down.
