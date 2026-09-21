---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Rängr Vetrdómr
  title: ""
  given: Rängr
  clan: Vetrdómr
  home: skorrborg
  aliases: []
packFolder: ankarisnordlands
shortcode: rngrvtrdmr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Thatcher
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kingdomlgn
  gender: male
  species: null
  age: 47
  birthday: 673/5/5
  height: 1.85
  weight: 80.7
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: dark_brown
    skin_color: tanned
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-ymir }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-weapongear-hcht }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-hstunic }
    - { model: sohl-sohl-armorgear-hstrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-ltglove }
    - { model: sohl-sohl-armorgear-hscap }
    - { model: sohl-sohl-armorgear-hsclk }
    - name: Thatching tools (knife, pricker, needle set)
      type: miscgear
      system:
        shortcode: thatchingtools
        weight: 1
        value: 100
        durability: 3
    - name: Coil of strong twine
      type: miscgear
      system:
        shortcode: coilofstrongtwine
        weight: 0.5
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 0.5
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 4 } }
    - name: Flask of mead
      type: miscgear
      system:
        shortcode: flaskofmead
        quantity: 1
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bktlrg }
    - { model: sohl-sohl-containergear-wtrskin }
    - name: Ladder
      type: miscgear
      system:
        shortcode: ladder
        weight: 1
        value: 100
        durability: 3
    - name: Bundles of straw
      type: miscgear
      system:
        shortcode: bundlesofstraw
        weight: 1
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

# Appearance {#appearance}

![[rngrvtrdmr|Rängr Vetrdómr]]{float: top-left}

Nearly five decades of wind and weather have left Rängr Vetrdómr looking like the trade he follows. At 6'1" and forty-seven winters he still holds himself upright, the habit of a man who works at heights, though he has thickened through the middle. The tanned skin is deeply creased. The eyes are hazel with flecks of green, and patient; he reads the sky the way other men read a page. His dark brown hair, well silvered, is bound in the wrapped braid that Malagna's older craftsmen wear. The hands are broad and calloused and very careful, as they would have to be, and a faded scar runs along his left ribs from a fall twenty years ago that nearly killed him.

# Dossier {#dossier}

Roofs he thatched thirty years ago are still dry. A thatched roof in Malagna is expected to last ten or fifteen years; his last decades longer, and it is not the reed. It is that he knows the angle at which thatch sheds water, how the wind works at a ridge, where the damp gets in, and he will not lay a course until it is right.

He was born in a village in the Kingdom of Malagna to Hafthórr Vetrdómr, a thatcher of real skill, and Sigrun, who knew weather-working and the old folk magic. He grew up watching his father on roofs and learned early that thatching was not laying reed on a frame but a craft of drainage, wind, insulation and pitch. Apprenticed at ten — younger than most would allow — he spent ten years under his father building the strength, balance and nerve the work needs. He took his first commission alone at twenty and by thirty was the master everyone in the district wanted and few could get.

At thirty-five he married Bjorg, a farmer's daughter. They had two children, and five years into the marriage she died bearing a third. He did not stop. He worked and raised the two who lived. His daughter Sigrun, named for his mother, left the village at twenty for the capital; his son Ragnar worked beside him for a while and then chose the shipwright's trade instead, and Rängr has never quite forgiven either the choice or himself for minding it. He has been a widower twelve years. He works as hard as he ever did, and it is beginning to show.

## Psyche

### Personality

Quiet, and not interested in clever talk. The work is how he speaks, and people who want to know him learn to read a roof. He is honest to the point of bluntness: a customer asking whether the money will stretch to another course of reed gets a plain yes or no and no flattery either way.

His faith is in Ymir, god of creation and of what has not yet been made, and it is deeply held and simply kept — the seasonal rites, the offerings, a small carved figure of the primordial being that he touches before a dangerous job. He thinks of thatching as taking part in the making that Ymir began. Among other craftsmen a dry humor surfaces: remarks about the weather, the client, or the general absurdity of the trade, delivered flat, that make men who know him laugh out loud.

### Motivation

To keep the standard, and to see that what he knows does not die when he can no longer climb. Part of it is the plain wish to be very good at the thing he does. Part is a need to prove that slow, careful work built on real knowledge is still worth paying for in a kingdom that increasingly wants fast and new. With his wife dead and his children gone, the work is what he has, and what holds the shape of his days.

### Strengths

- **Technical Mastery**: Angles, water, wind, the moisture of each season — he considers things most thatchers never learn exist, and his roofs are better for it.
- **Durability**: Thirty-year roofs, on a craft where fifteen is good. It is what people know him for and what he is proudest of.
- **Dangerous Heights Confidence**: He is easy at heights that stop other men's breath, and steady enough there to work in weather nobody else would go up in.
- **Weather Prediction Acuity**: His mother's teaching and a lifetime of looking; he calls a change in the weather a day before it comes.
- **Problem-Solving Under Constraint**: On an awkward repair he finds a way to keep the roof honest around the building's faults, and his solutions get copied.

### Weaknesses

- **Physical Decline**: Forty-seven years, most of them on roofs. The joints ache, heights that never troubled him bring a moment's dizziness, and the endurance is not what it was. He is having to think about dying.
- **Resistance to the New**: New materials and new methods get a slow, doubtful look. He thinks reed is better than anything they have thought of, whatever the results say, and it may make him the last of something.
- **Difficulty Mentoring**: Teaching frustrates him. The young seem careless, and because carelessness on a roof kills, he is harsh with them, and they leave.
- **Social Isolation**: A quiet man in a solitary trade, with his children gone and no ties beyond the work. The loneliness comes out as gruffness.
- **Limited Business Acumen**: He charges too little and always has, out of humility and because he does not know what he is worth.

## Social

### Patrons

- **The Farmer's Collective of Malagna's Outer Reaches**: Farming families across the district who wait months for him and consider it worth it; his roof is over their families.
- **Dún Ragnarsson, Local Chieftain**: Keeps him on a kind of retainer for the hall and its outbuildings. Steady work, and standing.
- **The Temple of Ymir**: The priests of his own god bring him the temple's difficult roofs and consider keeping the sacred house tight a matter of importance.
- **Wealthy Merchants Traveling to the Capital**: Traders building second houses or trading posts in Malagna have sited them near his district to get his work.

### Enemies

- **Master Thatcher Bergur**: Younger, faster, cheaper, using new materials, and taking contracts that would once have been Rängr's. Bergur regards him as the obstacle and has gone after his work deliberately.
- **The Merchant Synod of Progress**: Traders who want building done at scale and see old craftsmen as a cost. They are putting money into mass-made roofing.
- **His Own Aging**: Not a man, but the enemy he fights every morning: a body that refuses what it once did without thought.

### Affiliations

- **The Rural Craftsmen's Guild of Malagna**: Senior, respected, rarely present. The guild counts him among its finest living members.
- **The Thatcher's Society**: A smaller society of roof craftsmen across the kingdom, where he is among the most senior and is called in on hard jobs.

## Plot Hooks

1. **The Building That Remembers**: Restoring the roof of a structure said to be three centuries old, he has found things worked into the old thatch — coins, carved bone, scraps of cloth — and realized that generations of thatchers have been leaving messages in it for each other. One layer carries his father's mark. Some of the newer messages seem meant for him. The merchant who owns the building wants the practice kept up, which is not how Rängr thatches.

2. **The Thatcher's Curse**: A village building he has been asked to repair has needed re-thatching seven times in ten years, which does not happen. The elders talk about a curse laid after some old wrong by the first owner. Up on the roof he has begun seeing the wrong, and his hands have begun laying patterns he did not choose that read, from above, as runes.

3. **The Impossible Commission**: A patron who will pay anything and set no deadline wants a roof that sheds rain and also draws the sky's blessing down, so that the house under it heals and prospers. He finds, working, that he can do it — and that doing it is using something of his mother's that he has spent his life not using.

4. **The Mentor's Despair**: He finally took an apprentice, young Einar, who had the gift and the patience. Two months in, Einar fell, and will never work at height again. Rängr holds himself responsible though it was the risk any apprentice runs, and has set about finding a way — new methods, new tools, and if it comes to it, magic — for Einar to stay in the craft. He is not sure whether that honors the craft or betrays it.

5. **The Prophecy in Reed and Straw**: A travelling seer saw him at work and was terrified. The pattern he was laying, she said, matches one from an old prophecy about a craftsman whose hands rebuild the world in a time of upheaval, and she believes his work is setting something in motion. He thought her mad. Since then the buildings he thatches have become places people gather in trouble, and they seem to hold luck.
