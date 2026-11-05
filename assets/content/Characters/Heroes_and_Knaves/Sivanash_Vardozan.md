---
shortcode: svnshvrdzn
name: {full: Sivanash Vardozan}
type: being
subType: npc
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Factor
  lore: []
  culture: dunhariclt
  homes: [sandyapur]
  affiliations: {dunhartrbs: {rank: 4}, aravesta: {rank: 1}}
  gender: male
  species: humanflk
  born: "671.150"
  height: 5' 9"
  weight: 162 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: greying_black
    skin_color: olive
    complexion: [sun_kissed]
    extra_features: [A narrow tribal tattoo of three dots beneath the left eye]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: skill-vedyarlng, system: {masteryLevelBase: 60}}
    - {model: skill-qalzscrscrpt, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-weapongear-scmtr}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-slkrobe}
    - {model: sohl-sohl-armorgear-lshirt}
    - {model: sohl-sohl-armorgear-ltcboot}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: miscgear-letterofcredit}
    - {model: sohl-sohl-miscgear-scalesweig}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: sohl-sohl-containergear-bpchlg}
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

Sivanash is a man of middle height and middle weight, olive-skinned and sun-darkened, with black hair going gray and kept short under a wrapped cloth. His eyes are hazel, and beneath the left one his tribe's mark is tattooed as three small dots. He dresses as a Sandyapur merchant does, in a cotton robe and a light mantle, and keeps a scimitar at his side as no Sandyapur merchant does. On a cord inside his robe he carries a folded paper in a leather sleeve, which he has never been seen to take out in public.

# Dossier {#dossier}

## The Man on the Paved Street

[[place-sandyapur|Sandyapur]] is the capital of [[affiliation-bhumipal|Bhumipal]] and the end of [[place-marchroad|the March Road]]. On the road quarter's one paved street stand two houses that do the western trade's business. One is [[affiliation-mrchntclctvvdyr|the Merchant Collective]]'s, the westernmost house it has. The other is Sivanash Vardozan's, and he is the only man of the sand in the town with a house of his own.

He was born in a householder's tent of one of the tribes whose grazing the road crosses, and he came to the coast at twenty with his father's horses and the duty of selling them. He stayed. For thirty years he has bought for the oases and sold for them: Vedyari cotton, grain, worked iron and Shikhalayan steel going west, horses, hides and the wool of the sand coming east. The tribes trade by barter and by [[lore-kinhalcrdt|Kin and Hall Credit]], and a Dunhari caravan settles in animals and goods and silver taken by weight. Sivanash settles all of those, and he settles one thing more.

He holds a [[miscgear-letterofcredit|Collective Letter of Credit]], issued to him in his own name and redeemable at any member's house. A Dunhari who holds one is rare enough that the men at the exchange know his name, and he is the only one. The Collective's factor across the street issued it twelve years ago, after a season in which Sivanash carried the Collective's own goods west through a raid and brought back what the raiders had left, counted. The factor has never had reason to regret it, and has never let him forget whose seal is on it.

## Terms at the Palace

The Maharava's court deals with Sivanash on terms no Vedyari merchant is offered. He is received in the palace compound without waiting at the gate, he pays the escort money at a rate set for him by the court and not posted with the others, and when the crown wants to know what a sheikh intends before the sheikh has said it, it sends for him. The Vedyari merchants of the road quarter resent all three, and they resent the scimitar.

The arrangement is plain to everyone who has a part in it. The crown's standing policy on the road is to make raiding unprofitable, and the cheapest way to make a raid unprofitable is to have bought the raider's goods already. Sivanash buys the oases' surplus in a good year and holds it against a bad one, and in a lean season a tribe that would otherwise ride against the road can sell to him instead.

## The Lean Season

The [[affiliation-dunhartrbs|Dunhara Tribes]] signed nothing and hold that the road crosses their grazing by their forbearance. They raid in lean seasons and trade in fat ones. The grazing beyond the last wells at [[place-marukupa|Marukupa]] failed in the spring, the camels are thin, and the sheikhs of the road tribes are meeting.

Sivanash has bought every bale he can carry, and he has bought it on the letter. If the road closes, the Collective will call it, and a Dunhari who cannot honor a Collective letter will never be issued another. If the road stays open, he will have carried the tribes through a bad year and made the crown's policy work, and the sheikhs will owe him for it.

He has no standing to bind a sheikh and no wish to. He wants the road open through the lean season whatever the sheikhs decide, and he is prepared to pay, to bargain and to lie in both languages to keep it open.

## Psyche

### Personality

Sivanash is warm, unhurried and exact. He gives every visitor water and a pinch of salt before business, by the code of salt his people keep, and he does not discuss price until the cup is empty. He keeps his accounts in [[skill-qalzscrscrpt|Qalezu Script]] for the tribes and in the Vedyari script for the Collective, and each ledger agrees with the other to the last weight of silver.

He has lived among Vedyari for thirty years and still finds the wrist-line absurd. He shows a bare wrist when it is asked for, and he has stopped explaining that it says nothing.

### Motivation

He wants the march road kept open through a lean season, whatever the sheikhs decide. Everything he owns is on that road, and so is the only paper of its kind a man of the sand has ever held.

### Strengths

Both Languages and Both Ledgers
: He speaks [[skill-vedyarlng|Vedyari Language]] fluently and reckons in both systems of exchange. Very few people on either side of the sand can follow both of his accounts.

The Palace's Ear
: The court receives him, and the crown's officers ask his opinion of the tribes before they ask the companies.

A Horseman's Eye
: He was raised among horses, and the dealers of [[place-ashvapada|Ashvapada]] do not cheat him.

### Weaknesses

The Letter
: His whole credit with the Collective rests on one sealed sheet, and he has spent it to the edge.

Resented
: The Vedyari merchants of the road quarter would be glad to see him fail and would help it happen.

Kin Far Away
: His tribe's households are three weeks west. When the sheikhs meet, he will not be in the tent.

## Social

### Patrons and Allies

The Maharava's court at Sandyapur
: Which deals with him on his own terms because he is useful, and for no other reason.

The Collective's factor
: His neighbor across the paved street, who issued the letter and watches what he does with it.

[[being-umrtdrtn|Umarti Daritan]]
: A captain of the march companies, whose company escorts his caravans on the second stage and whose arrears he has more than once advanced.

### Rivals

The Vedyari merchants of the road quarter
: Who pay the posted rate and wait at the gate.

A sheikh of his own tribe
: Who holds that a householder who sells the tribe's surplus to the road in a good year is selling the tribe's raid in a bad one.

### Affiliations

[[affiliation-dunhartrbs|Dunhara Tribes]]
: Householder of his own tent, and nothing higher; he speaks for his house and not for his tribe.

[[affiliation-aravesta|Faith of Aravesta]]
: He keeps the Golden Giver's observances as a merchant of the sand does, and gives at the new moon.

## Plot Hooks

The Meeting of the Sheikhs
: Sivanash cannot leave Sandyapur without the Collective's factor reading it as flight. He needs someone to carry his offer to the sheikhs' meeting beyond Marukupa: grain for the thin months, on his credit, in exchange for a season's peace on the road. The offer has to arrive before the vote, and someone on the road does not want it to.

The Called Letter
: The Collective's factor receives a forged instruction to call Sivanash's letter. If it is honored, he is ruined within a week. The party has to find who wrote it, and the merchants of the road quarter all have reasons.

Bought Goods
: A tribe that sold its surplus to Sivanash in the spring raids a caravan in the autumn and offers him the goods it took. He will not buy them, and he will not report the tribe to the court either. He hires the party to return the goods to their owners without saying where they came from.
