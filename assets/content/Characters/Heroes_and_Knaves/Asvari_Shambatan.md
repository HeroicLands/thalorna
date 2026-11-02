---
shortcode: asvrshmbtn
name: {full: Asvari Shambatan}
type: being
subType: npc
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, woodsman]
  occupation: Samonta (Clan-Warden of Suryadvar)
  lore: []
  culture: vedyariclt
  homes: [suryadvar]
  affiliations: {shikhalaya: {rank: 6}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: "681.88"
  height: 5' 6"
  weight: 138 lbs
  frame: medium
  appearance: {eye_color: brown, hair_color: black, skin_color: tanned, complexion: [weathered]}
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 25}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 35}}
    - {model: weapongear-shkhlynswd}
    - {model: sohl-sohl-weapongear-spr}
    - {model: sohl-sohl-weapongear-lbw75}
    - {model: sohl-sohl-projectilegear-arwstd}
    - {model: sohl-sohl-containergear-quiversmsh}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-wshirt}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-miscgear-hvyblkt}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - {model: miscgear-pledgecord}
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

Asvari stands 5'6" with a climber's build, long in the arm and narrow through the hips. Her skin is tanned dark by snow-glare, with pale creases at the corners of her eyes where she squints into it, and her black hair is braided tight and pinned under a beaver-skin cap. Her eyes are brown and watchful. She wears leather over wool, a heavy cloak, and gloves that have been mended more often than replaced, and she carries a spear on the road and a Shikhalayan sword at court.

Her traveler's cord is thick with knots from crossings of her own, and she wears it outside her cloak, where a guide can see it.

# Dossier {#dossier}

## The Warden-Right

The road through [[place-suryadvar|the Sun-Door]] climbs twenty days from the walls of [[place-suryagarha|Suryagarha]] to the fork, and the [[affiliation-osketguides|Osket]] take every caravan over it. They do it under Shikhalayan clan-wardens who hold the warden-right by inheritance, and who answer to the Maharava in theory. Asvari Shambatan is the senior of them. Her clan has held its stretch of the road since before the charter, and she holds it as **Samonta**, with a warband sized to the clan's standing and a bench on the [Martial Council]{.name data-type="affiliation/governmental"}.

The arrangement on the road is simple and is said aloud at every caravan. The warden names the fee and the guide-lineage names the season. A caravan master pays the warden, waits on the lineage, and goes over when both are satisfied. The fee is the clan's. The customs at the citadel, the weighing on entry and exit and the [[miscgear-passtoken|Suryagarha Pass-Token]] with its date all belong to the crown, and none of them is the warden's business.

## The Once

A warden who overrules a guide-lineage on a question of weather does it exactly once. Asvari did it in her first season as warden, at twenty-four. The lineage said the col would close in two days; a caravan of the Merchant Collective was waiting with a letter from the capital, and the date on its token was about to run out. She sent it up. The weather came a day early. Eleven people did not come down, and the [[place-pssshrines|Pass-Shrines]] at the summit entered them in its register before the customs-house had them in its own.

She has never overruled a guide since. She went up herself in the spring to bring down what could be brought, and she paid the households of the dead out of the clan's fee for three years. The guide-mother whose lineage she overruled has never mentioned it to her, which Asvari reads as the worst judgment she could have been given.

## The Fee and the Crown

The crown's treasury wants one payment at one counter. The **Koshadyoksha**, who answers for the revenue, has put it to the Maharava more than once that the warden's fee should be folded into the price of the pass-token and paid at the customs-house, with the crown remitting the clans their share. It would be simpler for the caravans, safer for the clans, and better for the crown, which would hold the money first.

Asvari has refused every time it has been put, and she has the Martial Council behind her. A fee the crown collects and remits is a fee the crown can delay, and the crown already decides who crosses early and who crosses late by the date it writes on a token. If it also held the wardens' money, it would hold the road entire. Her clan holds its stretch because a caravan master pays her in her own yard, and she means to keep it that way.

She sits on the Martial Council as one of the senior chieftains, and her vote is wanted. [[being-vkrbrvrjyr|Vikrabir Virajyara]], the Maharava, has been gathering the far chieftains for an acclamation of his son in his own lifetime. He has not asked for her vote outright. He has let it be known that the question of the fee will not be raised again while he reigns, which she understands to mean that it will be raised by whoever reigns next.

## Psyche

### Personality

Asvari is blunt, practical and slow to trust anybody who has not been on the road in bad weather. She prefers the warden's house on the climb to the capital and goes down to the councils only when she must. She keeps careful accounts of the fee, in her own hand, and she shows them to any caravan master who asks.

She does not drink at the capital, does not dance, and does not stay for the rites after a council has risen. She sings on the road, badly, and the guides tolerate it.

### Motivation

She wants the warden's fee kept in her clan's hand, never folded into the crown's token. She does not care who reigns, so long as nobody who reigns collects it.

### Strengths

The Road
: She has crossed the wall more often than most guides' sons. She can climb, travel on ice, read the cloud on [[place-suryashkhr|Suryashikhar]] and hold a warband together in a storm.

The Warden-Right
: Her authority on her stretch of road is inherited and complete, short of the guides' own word on the weather.

A Bench on the Council
: Her vote counts, and the Maharava knows it.

### Weaknesses

The Eleven
: She has never forgiven herself for the caravan she sent up, and it makes her overcautious with lives she is responsible for and careless with her own.

Contempt for the Capital
: She regards the customs clerks and the Priestly Court as people who have never been cold, and she says so in front of them.

A Bargain Unspoken
: Her clan's fee is safe for exactly as long as the present Maharava reigns, and she has not decided what she will do to keep it safe after.

## Social

### Patrons and Allies

The far chieftains of the Martial Council
: Clans that hold their own valleys and their own fees, who see the warden-right as their own right in another form.

The Osket lineage of her stretch
: The guides she works beside, who have never spoken to her of the one time she overruled them.

### Rivals

The Koshadyoksha
: The crown's treasurer, who would fold her fee into the token.

The Merchant Collective's caravan masters
: Who want one payment and one counter, and who have long memories of the season she sent their caravan up.

### Affiliations

[[affiliation-shikhalaya|Shikhalaya]]
: Samonta, clan-warden of Suryadvar, with a seat on the Martial Council.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She leaves an offering at every Pass-Shrine she passes, and asks for nothing at any of them.

## Plot Hooks

The Remitted Fee
: A caravan arrives at Asvari's yard with a receipt from the customs-house showing the warden's fee already paid at the counter. Either a clerk has started collecting it without leave, or someone has forged the receipt to test her. She needs the party to go down to the capital and find out which before the Martial Council meets.

The Eleven
: A thaw on the col has brought something down out of the ice: a pack-frame with a Collective seal, from the caravan she sent up. Its contents are not what the caravan's manifest said. The party is asked to recover the rest before the Collective's factor arrives to claim it.

The Vote
: The Maharava's acclamation of his son needs Asvari's bench. The Priestly Court's candidate, Jagasvar's son, sends her a private promise about the fee. The party carries the answer, and she has not told them which.
