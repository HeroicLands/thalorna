---
shortcode: lkvtprtsy
name: {full: Lokavati Pritasya}
type: being
subType: npc
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Licensed Buyer
  lore: []
  culture: vedyariclt
  homes: [bharavaban]
  affiliations: {bhrvdvbhon: {rank: 3}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: 684.233
  height: 5' 3"
  weight: 118 lbs
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: golden
    complexion: [clear]
    extra_features: [Fingertips stained amber-red from testing lac]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-pfmy, system: {masteryLevelBase: 35}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-ldress}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-monsooncloak}
    - {model: sohl-sohl-miscgear-scalesweig}
    - {model: sohl-sohl-miscgear-waxtablet}
    - {model: miscgear-tomra, system: {quantity: 40}}
    - {model: sohl-sohl-containergear-satchltmd}
    - {model: sohl-sohl-containergear-jarliddedm}
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

Lokavati is a small, quick woman of 5'3", golden-skinned and clear-faced, with black hair worn up under a cloth against the forest's damp and dark brown eyes that settle on a bale's seal before they settle on its carrier. Her fingertips are stained amber-red from testing lac between them. She dresses plainly for the river, in a cotton dress, sandals and an oiled [[miscgear-monsooncloak|Monsoon Cloak]], and she carries her own scales in a leather satchel and lets nobody else weigh for her.

# Dossier {#dossier}

## A Licensed House

Nothing leaves the forest of [[place-bharavaban|Bharavaban]] without a license, and the licenses are the [[affiliation-bhrvdvbhon|Forest Estates]]'s whole instrument of government. The gathering peoples take them, turn the season's resin, lac, wax and spice in at the forest margin, and are paid. Then it belongs to the estate, and the estate sells it to the licensed buyers and carriers of the **Danhija** station, who take it down to the coast and answer for its price.

Lokavati's house, the [Pritasya]{.name data-type="affiliation/lineage"}, has held a carrier's license from three estates of the south bank for four generations. She has run it for eleven years, since her father's eyes failed. She buys at the margin, carries by raft and porter down the pilgrim road, and sells at the quay at [[place-bharavamukha|Bharavamukha]], where the prices are set by men who answer to no sabhra and where the forest's goods arrive with no tithe on them.

## The Month

The mother-temples of the lower river consult each other about price, and it is the only question on which they act as one body. When lac moves on the coast, the keepers along three hundred miles of river hear the same instruction within a month and raise or lower what they ask the buyers. A buyer who knew the coast's price before the keepers did could buy a month's lac at last month's price and sell it at this month's.

Lokavati intends to be that buyer. The temples' letters go upriver by priests on foot, at a pilgrim's pace. She has worked out that the pilgrims themselves move faster, because the free hostels of [[place-bhrvdvstna|the Bharava-Devastena Hostels]] stand a day's walk apart on the busy stretches and three days apart in the forest, and the pilgrims coming up from the sea walk them in an unbroken line. A word given to a pilgrim at the quay reaches the forest margin in days. She has begun paying a few to carry it.

Nothing in the license forbids it. The hostels feed whoever presents himself as a priest or an ascetic, and nobody there asks what he carries or where he is bound. Lokavati is asking them to carry her price in the god's charity, and the doorkeeper of the hostel nearest the quay has noticed.

## The Collective

[[affiliation-mrchntclctvvdyr|The Merchant Collective]] has spent two centuries trying to get a weighing-house onto the lower river and has been refused by every mother-temple it has asked. Its factor at the coast has found Lokavati instead. He has offered to finance her season, against her scales and her ledgers, and to buy the whole of her carriage at the quay at a fixed advance on the temples' price. It would make her the largest buyer on the south bank. It would also make her house the Collective's weighing-house in everything but name.

She has not said yes. She has not said no either. And she wants something the factor cannot give her: the timber license for a stand of hardwood that [[being-bhrjvrmdbd|Bhrijivara Madibada]], the Devapavi of her estates' mother-temple, has closed for forty years. She has offered to finance it herself. He has refused, and given no reason.

## Psyche

### Personality

Lokavati is sharp, cheerful and tireless, and very good company at a river landing at night. She talks to everyone, remembers everything, and treats rumor as a commodity with a price. She is fond of the gathering peoples she buys from and pays them on the day, and she is unsentimental about the temples whose licenses she holds.

She likes being underestimated, and she is underestimated often.

### Motivation

She wants to know the coast's price for lac a month before the keepers do. Everything else, the Collective's offer and the closed stand of hardwood included, she weighs against that.

### Strengths

Mercantile Skill
: She can grade lac, resin and spice by touch and smell, value a cargo at a glance and keep three sets of accounts in her head.

The River
: She knows the pilgrim road, the raft-landings and the porters, and she swims better than most of her raftsmen.

Reading People
: She knows what a keeper, a factor or a doorkeeper wants before he asks, and she is usually right.

### Weaknesses

Greed for Information
: She will pay for any piece of news and use it before she has checked it.

The Hostels
: Using the god's charity to carry prices is legal, unpleasant and certain to be found out. She has not thought hard about what happens when it is.

The Closed Stand
: She does not know why Bhrijivara keeps the hardwood closed, and she is curious enough to find out.

## Social

### Patrons and Allies

The keepers of her three estates
: Who license her house and like her prompt payment.

The Collective's coastal factor
: Who wants her as the lower river's weighing-house and has the money to make it happen.

### Rivals

[[being-bhrjvrmdbd|Bhrijivara Madibada]]
: The Devapavi who confirms her keepers and refuses her the closed stand.

The doorkeeper of the hostel at the quay
: Who has noticed which pilgrims leave with a word from her and arrive at the margin a week before the temple's letter.

### Affiliations

[[affiliation-bhrvdvbhon|Bharava-Devabhona]]
: Danhija, head of a licensed buying and carrying house of the south bank.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She keeps the household rites and gives to the hostels every season, more than she needs to.

## Plot Hooks

The Pilgrim Line
: A pilgrim carrying Lokavati's word upriver has vanished between two hostels in the forest stretch. She needs to know whether he was robbed, stopped by the temples or fell foul of something on the road, and she would rather the party found him before the doorkeeper does.

The Factor's Terms
: The Collective's factor sends Lokavati a contract to sign before the rains. The party is hired, by her, to learn what the Collective means to do with a weighing-house on the lower river once it has one.

The Closed Stand
: Lokavati wants to know what lies past the stand of hardwood Bhrijivara will not license. She hires the party to walk the bounds of the last estate and report what they see. She does not tell them that the Devapavi has asked her not to.
