---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Renutê Re'en'fré
  title: ""
  given: Renutê
  clan: Re'en'fré
  home: wasetkara
  aliases:
    - Renutê Reenfré
    - Renute Reenfre
packFolder: northernfertileregiontakheperu
shortcode: renuternfr
type: being
data:
  banner: takheperubnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Innkeeper
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: female
  species: null
  age: 32
  birthday: 688/2/8
  height: 1.7
  weight: 86.6
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: dark
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-maat }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 12 } }
    - { model: skill-demtkscrpt, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-lkni }
    - { model: sohl-sohl-armorgear-rhapr }
    - { model: sohl-sohl-armorgear-hstunic }
    - { model: sohl-sohl-armorgear-hstrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-hscap }
    - name: Leather bookkeeping ledger for inn
      type: miscgear
      system:
        shortcode: leatherbookkeeping
        weight: 1
        value: 200
        durability: 3
    - name: Brewing supplies (herbs, spices, seeds)
      type: miscgear
      system:
        shortcode: brewingsupplies
        weight: 1.5
        value: 100
        durability: 3
    - name: Measuring cups and scales
      type: miscgear
      system:
        shortcode: measuringcups
        weight: 0.8
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Sample bottles of various ales
      type: miscgear
      system:
        shortcode: samplebottles
        quantity: 4
        weight: 1.5
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 0.5
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 35 } }
    - { model: sohl-sohl-containergear-bglgcvs }
    - { model: sohl-sohl-containergear-wtrskin }
    - name: Cooking tools
      type: miscgear
      system:
        shortcode: cookingtools
        weight: 2
        value: 50
        durability: 4
    - name: Serving dishes
      type: miscgear
      system:
        shortcode: servingdishes
        weight: 1.5
        value: 100
        durability: 3
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

**Home:** [[place-wasetkara|Wasetkara]]

# Appearance {#appearance}

![[renuternfr|Renutê Re'en'fré]]{float: top-left}

Loud first, then seen: the laugh arrives from the kitchen before she does. She is dark-skinned, 5'7" and lightly built, with black hair, dark brown eyes and a high-cheekboned face — a straight narrow nose, a gentle jawline, generous lips, angular cheeks, dark brows.

# Dossier {#dossier}

Nobody eats alone at the Reenfré. That is the only rule of the house Renutê enforces in person, and a stranger who comes in wanting a quiet corner will find, before the second cup, that the innkeeper has sat a scholar or a sailor down opposite him and gone away laughing. It is how the inn was made, and a good deal of the city has been made in it since.

She was a cook's daughter in the great house of a noble family of the Empire of [[affiliation-empirtkhpr|Ta'Kheperu]], and learned at her mother's side in kitchens that fed dozens. She did not want a lifetime of feeding one family. What she wanted — she could describe it at ten — was a place where anyone could sit, eat well, drink well and talk, and where a story told at one table would be known at the next by morning. At twenty-three, with years of savings and loans from people who had eaten her cooking, she bought a ramshackle building near the harbor and opened it.

The Reenfré has grown since: private rooms for guests who want them, a kitchen that turns out the day's plain fare and, when it matters, something people cross the city for, lodging from a merchant's plain bed to the suites upstairs. Her cellar is talked about in noble houses. She remembers the names, families and troubles of hundreds of guests, asks after all of them, and has a gift for seating two people who need each other. Marriages, partnerships and expeditions have started at her tables, and she keeps the tally.

She sits on the Local Innkeepers' Association and uses it for the small proprietors and the people who work for them. She knows the histories, scandals and quiet victories of half the city, which makes her more than an innkeeper to the people who know that she knows. She still cooks the meals that matter, and still meets her regulars at the door.

## Psyche

### Personality

Loud, quick, and given to big gestures and bad language, with a laugh that carries across the common room. She tells stories — about famous guests, about old wars, about her own past, which grows in the telling and which nobody minds — and holds a room while she does it. She is warm to almost everyone and fooled by very few, and a guest she judges dangerous is out before his drink arrives.

Under the noise is a good head for business, a long knowledge of what people are, and a steady care for her staff and her regulars. She mothers the people she is responsible for, in a practical way: a meal, a loan, an honest word, never a soft one. She has opinions, gives them freely, and is not shaken when they are argued with. Slight the inn, though, and the argument is over.

### Motivation

The inn is a refuge, and that is the point of it: honest food, honest welcome, and no need to pretend. She could have stopped working some time ago and has not, because the Reenfré is not a business to her; it is what she believes in, built. She wants a place where the lonely find someone and the tired find a bed, and she counts an expedition that came home or a partnership that prospered as the inn's own success. She pays her people fairly and treats them well, and thinks of that as part of the same experiment.

### Strengths

- **Culinary Mastery:** Her cooking is among the best in the empire, and cooks she trained now run their own kitchens.
- **Memory for People:** Names, families, histories, what they drink — hundreds of them — and the gift of putting two together.
- **Running a Large House:** For someone who hates a ledger, she runs a big, complicated inn very well, and has for years.
- **Warmth:** Real, not performed. People feel it and come back for it.
- **Judge of Character:** She reads a guest in a glance and is seldom wrong.
- **Physical Strength:** Stronger than she looks and able to end a fight in her own common room, though she would rather talk.
- **Political Sense:** She knows how the guilds and the magistrates work and gets what she wants out of the Association.

### Weaknesses

- **Aversion to Detail Work:** Accounts, records and the fine end of management bore her, and she leaves them to staff who are good at it.
- **Overconfidence in Her Judgment:** When someone reaches her sympathy, her read of them goes soft.
- **Loud and Sometimes Inappropriate:** Refined company finds her a lot, and she does not always notice.
- **Vulnerability to Emotional Manipulation:** Ask her for help in the name of loyalty and she may give it before she has thought.
- **Protective Impulsiveness:** She has hidden fugitives and waded into other people's quarrels, and the inn has paid for it.
- **Age and Stamina:** She tires now, and heals slower than she did.

## Social

### Patrons

- **Captain Ahmet Sekar:** A decorated naval officer who lodges at the Reenfré and holds his meetings in her common room, because she keeps them private.
- **Master Merchant Khadija:** Head of a large trading house, who asks Renutê whom to trust and whom to travel with, and has made money by the answers.
- **The Scholars' Circle:** Learned men and women who meet at the inn on a fixed night, eat well, and are not overheard.
- **Various Adventuring Companies:** Several bands make the Reenfré their base between expeditions, and have done for years.

### Enemies

- **Vex the Competitor:** Runs a rival house and has started rumours about the Reenfré's kitchen and its cleanliness. A trade quarrel more than a feud, but real.
- **City Magistrate Tomás:** Tried to load the innkeepers with new regulations; Renutê organised the opposition. He has been looking for something to fine her for since.
- **The Debt Collector's Guild:** She will not pay them protection, on the grounds that the city's law is the only law over her inn. They would like to make an example of her and are wary of how many people would notice.

### Affiliations

- **Local Innkeepers' Association:** An active member and an argumentative one, on the side of the workers and the customers more often than the owners like.
- **The Harbor Community:** Merchants, sailors and dock workers count her as one of theirs.
- **The Scholars' Circle:** Not a member, but their host, and they have the run of her private rooms.

## Plot Hooks

1. **The Mysterious Inheritance:** A rich guest she barely remembers has died and named her heir to an estate far from the city. To take it she would have to leave the Reenfré, for a long time or for good, and his family are saying she talked him into it. Someone is going to have to go and see what he meant.

2. **The Missing Supplier Crisis:** Her grain merchant, her fisherman and her vintner have all, within a month, stopped dealing with her — frightened off, it seems, by the same someone. The kitchen is running on what she can find. She wants to know who, and she wants her suppliers back or as good replaced.

3. **The Trouble the Reenfré Brings:** A criminal company has been using her inn as neutral ground for its bargaining, counting on her discretion. Now that she knows, her openness and her conscience want different things, and she is looking for a way to be rid of them that does not make the inn a place where people are turned away.

4. **The Recipe Worth Killing For:** A stranger says one of her signature dishes — a particular seafood preparation, a spiced wine — was stolen generations ago from a noble house whose heirs now want it back, with compensation; or that it uses something the priests or the law forbid, and the stranger speaks for them. She would like to know whether there is anything in it before she decides how loudly to laugh.

5. **The Legacy Moment:** A large hospitality concern wants to buy the Reenfré for enough to keep her in comfort, and would change it into something else. A member of her staff who understands the place wants to take it on and cannot pay. What she decides is what the inn will be after her, and she knows it.
