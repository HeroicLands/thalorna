---
shortcode: kelnstylgn
name: {full: Kelena Estilgon, given: Kelena, clan: Estilgon}
type: being
subType: character
description: "A courtesan of Pirnebris and the capital and a founder of the Theater Collective, who after thirty years in the trade is valued as much for her counsel and her silence as for her company."
tags: [heroes-and-knaves, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier]
  occupation: Courtesan
  lore: []
  culture: provenzianclt
  homes: [pirnebris, jalnazdal]
  affiliations: {kngdmprvnz: {rank: 2}, prvnzthtrclctv: {rank: 4}, ardavon: {rank: 1}}
  socialTies:
    being-melvrelvns: patron
    being-chalzimechol: patron
    being-chzltolmrs: friend
    affiliation-velvethand: rival
  gender: female
  species: humanflk
  born: 668.97
  height: 5' 7"
  weight: 131 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: golden
    complexion: []
    face_shape: angular
    brow: heavy
    extra_features: [a tattoo of dark green vines on the right upper arm and shoulder]
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-weapongear-estc}
    - {model: sohl-sohl-armorgear-slkdress}
    - {model: sohl-sohl-armorgear-vglv}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-armorgear-slkclk}
    - name: Silver flask (fine work, engraved)
      type: miscgear
      system: {shortcode: silverflask, weight: 1, value: 100, durability: 3}
    - name: Theatrical mask (leather, decorated)
      type: miscgear
      system: {shortcode: theatricalmask, weight: 1, value: 100, durability: 3}
    - name: Velvet coin purse
      type: miscgear
      system: {shortcode: velvetcoinpurse, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-pence, system: {quantity: 75}}
    - {model: sohl-sohl-miscgear-gldcrwn}
    - {model: sohl-sohl-containergear-bpchmd}
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

![[kelnstylgn|Kelena Estilgon]]{float=top-left}

Kelena Estilgon is a 51-year-old woman who stands 5'7" tall and is of heavy build, and she carries the weight as a dancer carries a costume. Her face is angular, with a prominent nose, a pronounced chin and heavy brows over alert eyes that have learned to rest on a speaker as though nobody else were in the room. Her skin is golden, and her black hair, threaded now with gray, still falls loose to her waist when she lets it. A tattoo of dark green vines winds over her right upper arm and shoulder, and she wears gowns that show it.

# Dossier {#dossier}

Kelena Estilgon is a courtesan of [[place-pirnebris|Pirnebris]], the walled cherry town of the eastern march, and of the capital, [[place-jalnazdal|Jalnasdal]], where she keeps a townhouse. She is one of the founders of [[affiliation-prvnzthtrclctv|the Provénzia Theater Collective]], and after thirty years in the trade she is less a companion than a confidante: the patrons who come to her table come for her counsel and her silence as much as for her company.

She was born in the [[affiliation-kngdmprvnz|Kingdom of Provénzia]] to a musician who played in the traveling troupes, and to a father she has never named. She grew up backstage. By ten she had small parts, by fifteen she drew a house as a dancer, and she understood early that a dancer's beauty matters less than her hold on an audience. At eighteen she left the stage for a wealthy merchant's keeping, and from his house she made her way up through the kingdom's society, learning languages, history and the genealogies of every family worth knowing.

At twenty-eight she brought the companies she had grown up among into one federation, and the Collective still treats her counsel as senior. She keeps a share in a small, fashionable troupe and a house in Pirnebris, where the garrison officers and the supply merchants of the last market are rich, bored and shut in together every time the alarm sounds. She has never let herself depend on a single patron.

This summer Pirnebris has shut its gates once already, and the merchants who victualed the garrison through the shutting did very well out of it. A company of the Collective has asked the Convocation to endorse a satire of exactly that, and the merchants it mocks are men who dine at Kelena's table.

## Psyche

### Personality

Kelena is a performer in every exchange, and she reads what a person wants to hear faster than they know it themselves. She does not think this dishonest; it is her art. The few who have reached past it find a dry humor and a real loyalty, and also dark moods when she is alone. She drinks wine every night and has begun to take something stronger before the long evenings.

### Motivation

She wants the security of being indispensable to powerful people, and she wants to prove to a father she has never met that she is worth knowing. Beneath both she wants to be valued for herself, and she has arranged her life so that nobody ever sees enough of her to do it.

### Strengths

She is charming, socially exact and fluent in several tongues and dialects, and she can steer a dinner, a quarrel or a negotiation without seeming to. She knows the private affairs of half the patrons of the march and a good many at court.

### Weaknesses

She cannot lower her guard even when she wants to. Her standing rests on her reputation and on the secrets she keeps, which makes her open to anyone who knows her past. Her use of drink and drugs is turning into dependence. She carries a concealed rapier and is not dangerous with it.

## Social

### Companions

The players of the troupe she backs, who call her the Mother of the Company to her face and other things behind it.

### Patrons

[[being-melvrelvns|The Count of Ravenshold]]
: A magnate of the Council of Peers and a generous patron of the theater, seen at her troupe's performances in the season.

[[being-chalzimechol|Chalzime Cholsamis]]
: A wine merchant of [[place-valarencity|Válaren]], who treats her as an investment and a mark of standing, gives her gifts and the run of the merchant houses' tables, and expects her at his feasts.

:::secret {title="The count's arrangement"}
The Count of Ravenshold has kept an arrangement with Kelena for the past four years. It is more transaction than intimacy, though he is fond of her: he provides substantial financial support, and she provides her company and her discretion about his private affairs. What she knows would cost him his place between the parties of Degavel and Atavel if either learned it.
:::

### Enemies

[Brazema Zedimis]{.name data-type="being/npc"}
: A rival courtesan who has courted several of Kelena's former patrons and works steadily against her reputation. Brazema thinks Kelena the better talent and the lesser birth, and resents her prominence.

[[affiliation-velvethand|The Velvet Hand]]
: The Hand keeps operatives in the touring companies, and Kelena has reason to think it holds papers about her past that would ruin her. She lives in a constant, low fear of its attention.

### Affiliations

- **[[affiliation-prvnzthtrclctv|The Provénzia Theater Collective]]**: Kelena helped found it twenty-three years ago and is an Elder Member whose word the Convocation weighs.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: She is a Freeman of the crown.
- **[[affiliation-ardavon|Faith of Árdavon]]**: She keeps the god's festivals as a woman of her standing does.

## Plot Hooks

The Satire of the Last Market
: A company has brought the Convocation a comedy of the Pirnebris merchants who grow rich every time the town shuts its gates. Two of those merchants dine at Kelena's table, and the First Speaker, [[being-chzltolmrs|Chezile Tolmaris]], has asked her to learn whether they mean to answer it with the law or with knives.

The Letters
: Someone has begun sending Kelena letters that know her past: incidents she thought forgotten, names she used once. The sender wants her to turn certain patrons toward certain ends. She hires a party to find the writer, with absolute discretion, because the blackmail itself would damage her if it came out.

The Absent Father
: A man claiming to be her father has written to say he has watched her life from a distance and wants to meet. She wants a party to learn who he is before she answers, and the trail leads toward the Velvet Hand.

The Rival's Offer
: Brazema Zedimis comes to Kelena with word of a plot among several patrons to break her standing, and offers the details in return for help against a common enemy. Part of what Brazema says is true.

The Private Performance
: A private performance Kelena arranged for a foreign envoy at Jalnasdal ends with the envoy dead in his chair. She must come out of it without telling what she saw, and without the powerful people present deciding that she is the one to blame.
