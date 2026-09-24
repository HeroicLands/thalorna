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
  born: 673/5/5
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

Rängr Vetrdómr is a man shaped by nearly five decades of exposure to wind, weather, and the unforgiving demands of his craft. At 6'1" and forty-seven winters, he carries himself with the upright posture of one accustomed to working at dangerous heights, though his frame has begun to thicken slightly through the middle—evidence of a body aging while still demanding physical labor. His tanned skin is deeply weathered, creased by sun and wind into a topography of experience. His eyes, a warm hazel touched with flecks of green, hold the patient, observant gaze of someone who reads the sky as readily as others read text. Dark brown hair, showing significant silver, is bound in a traditional wrapped braid, a style common to Malagna's older craftspeople. His hands are perhaps his most telling feature—broad, calloused, with the careful strength of a man accustomed to working at terrible heights where a single careless movement means death. A faded scar traces along his left ribs, a souvenir from a fall that nearly killed him twenty years past.

# Dossier {#dossier}

Rängr was born in a small village in the Kingdom of Malagna to Hafthórr Vetrdómr, a thatcher of considerable skill, and Sigrun, a woman known for her knowledge of weather-working and old folk magic. From his earliest memory, Rängr spent his days watching his father repair and construct roofs, learning that thatching was a demanding craft requiring an understanding of drainage, wind patterns, insulation, and the precise angle at which thatch naturally sheds water.

Apprenticed at ten years old—when many would consider him too young—Rängr spent ten years training under his father, gradually building the strength, balance, and nerve required to work confidently at height. At twenty, Rängr took his first solo commission, and by thirty, had established himself as a master craftsperson whose work outlasted anyone else's in the region. His roofs last decades longer than typical—not through superior materials but through careful craftsmanship and understanding of the craft's finer points.

At thirty-five, Rängr married Bjorg, a farmer's daughter, and they had two children before she died in childbirth bearing a third five years into their marriage. Rather than withdraw into grief, Rängr threw himself into his work, eventually raising his two surviving children while maintaining his reputation. His daughter Sigrun (named after his mother) left the village at twenty to seek opportunities in the capital; his son Ragnar initially worked alongside him but eventually chose the trade of shipwright instead, a disappointment Rängr has never entirely overcome. Now a widower of twelve years with adult children pursuing their own paths, Rängr works with undiminished dedication, though the physical demands are beginning to visibly weigh upon him.

## Psyche

### Personality

Rängr is quiet and somewhat taciturn, with little interest in clever speech or elaborate conversation. He expresses himself primarily through his work, and those who attempt to know him must learn to read the language of his craft. He is honest to the point of bluntness—a customer asking if he can stretch their purse to add extra work will receive a straightforward answer about whether it can be done well or not, without flattery or false assurance.

His relationship with his faith, centered on Ymir, god of creation and primordial potential, is deeply felt but expressed simply. He observes the seasonal rites and makes offerings at appropriate times, viewing his work as participation in the ongoing act of creation that Ymir initiated. He carries a small carved figurine of the primordial being, touched for blessings before beginning particularly complex or dangerous work. Despite his quiet nature, Rängr possesses a dry, understated humor that surfaces in conversation with fellow craftspeople—observations about weather, clients, or the general absurdities of his profession delivered in deadpan tones that cause real laughter among those who work closely with him.

### Motivation

Rängr seeks to maintain the highest standards of his craft, so that knowledge and technique do not vanish when he becomes too old or infirm to work. He is driven partly by a simple desire to be excellent at what he does, and partly by a deeper need to prove that traditional craftsmanship—slow, careful, and rooted in deep knowledge—remains valuable in a world that increasingly prizes speed and novelty. The loss of his wife and the distance of his children have left him somewhat isolated; his work has become his primary emotional outlet and the thing that gives his life structure and meaning.

### Strengths

- **Exceptional Technical Mastery**: Rängr's understanding of thatching extends to subtle considerations most practitioners never develop—angles, water flow, the ways of wind, seasonal moisture variations. His roofs are not only beautiful but functionally superior to contemporary work.
- **Legendary Durability**: Structures he thatched thirty years ago remain in excellent condition, far outlasting the ten to fifteen years typical for thatched roofs. This durability is what he is known for and his primary source of pride.
- **Dangerous Heights Confidence**: Rängr works comfortably at extreme heights that would terrify ordinary people. His balance, strength, and nerve allow him to operate in conditions others cannot safely manage.
- **Weather Prediction Acuity**: From his mother's instruction in weather-working and his own lifetime of observation, Rängr can forecast weather changes with surprising accuracy, information valuable for planning projects and preventing work delays.
- **Problem-Solving Under Constraint**: When working on repairs or renovations with structural limitations, Rängr can devise creative solutions that accommodate physical constraints while maintaining quality. His work frequently becomes teaching examples of clever adaptive technique.

### Weaknesses

- **Physical Decline**: At forty-seven, the cumulative damage from a lifetime of physical labor becomes apparent. Rängr experiences chronic pain in his joints, occasional dizziness at heights that never troubled him before, and lacks the boundless endurance of his younger years. His mortality is becoming difficult to ignore.
- **Resistance to Innovation**: While not rigid, Rängr approaches new materials or techniques conservatively. Newer materials and other kinds of roofing seem to him inferior to traditional reed, however well they perform. This conservatism may eventually make him irrelevant.
- **Difficulty Mentoring**: Rängr finds it frustrating to teach others his craft, particularly younger people whom he perceives as impatient or careless. The physical danger involved in learning thatching terrifies him when teaching others, making him overly critical and harsh.
- **Social Isolation**: His quiet nature and the isolated nature of his work have left him with few close relationships. His children have moved away, and he has never cultivated community ties beyond those of his trade. This isolation sometimes tips into loneliness that he expresses through increased gruffness.
- **Limited Business Acumen**: While competent with basic finances, Rängr frequently undercharges for work, failing to reckon his true skill. He could command significantly higher prices but doesn't, partly from ingrained humility and partly from not understanding what his work is worth.

## Social

### Patrons

- **The Farmer's Collective of Malagna's Outer Reaches**: Agricultural families throughout the region contract Rängr for roof work, often waiting months for his availability. They consider his work worth the wait and the expense, trusting him implicitly with their family's primary shelter.
- **Dún Ragnarsson, Local Chieftain**: The regional leader maintains Rängr on semi-retainer, so that the chieftain's hall and outlying buildings receive maintenance from the finest craftsperson available. This provides Rängr with steady work and prestige.
- **The Temple of Ymir**: The local priesthood of Rängr's god regularly contract his services for the temple's complex roofing requirements, viewing the maintenance of the sacred structure's integrity as highly important.
- **Wealthy Merchants Traveling to the Capital**: Successful traders investing in secondary residences or trading posts throughout Malagna sometimes locate them near Rängr's region specifically to access his reputation for superior craftsmanship.

### Enemies

- **Master Thatcher Bergur**: A younger, more forward-looking competitor operating in the region who uses newer materials and quicker methods that undercut Rängr's both in cost and speed. Bergur views Rängr as an obstacle to his own advancement and has deliberately sought to replace him on certain contracts.
- **The Merchant Synod of Progress**: A loose organization of traders and merchants pushing for faster and cheaper building. They view traditional craftspeople like Rängr as slow and costly and are paying for attempts to make roofing that can be turned out in quantity.
- **His Own Aging**: While not a personified enemy, Rängr's body increasingly feels like an opponent, rebelling against demands he could once meet without thought. His true enemy is time and physical decline.

### Affiliations

- **The Rural Craftsmen's Guild of Malagna**: Rängr holds senior rank and is respected by all members, though he rarely attends guild functions. The guild recognizes him as one of its finest living practitioners.
- **The Thatcher's Society**: A smaller, more specialized organization of roof craftspeople across the kingdom. Rängr is among the most senior active members and is occasionally consulted on difficult projects.

## Plot Hooks

1. **The Building That Remembers**: A wealthy merchant commissions Rängr to restore the roof of an ancient structure rumored to have stood for at least three centuries. As Rängr works, he discovers that the previous thatch contains objects deliberately woven into the structure—coins, carved bones, fragments of cloth—creating a hidden archive. Investigation reveals that generations of thatchers have left messages in the roofing, turning the structure into a palimpsest of craftsperson communication spanning centuries. Rängr discovers his own father's mark woven into an earlier layer. As he works, he finds messages that seem directed specifically at him, raising questions about whether the building itself carries consciousness or whether extraordinary coincidence is creating meaning from random patterns. The merchant wants him to preserve the embedded objects and continue the tradition. Rängr can honor this practice, breaking his usual focus on purely functional craftsmanship, or stick to his principles and risk erasing an old tradition.

2. **The Thatcher's Curse**: Rängr undertakes repairs on a village building that has required re-thatching seven times in the last decade—an impossible frequency suggesting either deep structural flaws or something worse. Elders mention in hushed tones that a curse was placed on the structure decades ago after an injustice committed by the building's original owner. Rängr initially dismisses this as superstition, but as he works, he experiences visions of the past injustice and feels inexplicable compulsion to work in ways he doesn't consciously choose. His hands move to create patterns that, when viewed from above, form runic symbols. Rängr suspects the curse can be lifted through proper application of thatching craft combined with ritual blessing. He must manage both the practical engineering of a stable roof and the unseen work of lifting a curse through his art.

3. **The Impossible Commission**: A mysterious patron approaches Rängr with unprecedented specifications: create a roof that sheds water and also draws the sky's blessing, a roof that will make the building beneath it a place of healing and positive fortune. The patron can pay any price and offers no timeline constraint. The commission tantalizes Rängr because it asks him for something his working life has never approached: spiritual meaning through craft, beyond functional excellence. As he works, Rängr discovers he is capable of this work, but it requires merging his technical mastery with intuitive magical sensitivity he didn't know he possessed. The process slowly reveals that Rängr may have inherited his mother's latent gift for weather-working, something his practical focus on traditional craft has suppressed. He can pursue this emerging spiritual side of his work or hold to the material mastery he has cultivated.

4. **The Mentor's Despair**: Rängr finally accepts an apprentice—a young person showing real aptitude and dedication to learning thatching. However, after only two months of training, the apprentice, young Einar, suffers a catastrophic fall from height, resulting in injuries that leave them unable to work at elevation. Einar survives but faces a future of disability that prevents continuation in their chosen craft. Rängr, taking personal responsibility for the accident despite it being the unavoidable risk of training, becomes determined to find a way for Einar to continue in the craft despite the physical limitation. He redesigns how the work is done, creates special tools, and potentially explores magical solutions to allow Einar to contribute meaningfully.

5. **The Prophecy in Reed and Straw**: An itinerant seer arrives in the village and, seeing Rängr working on a roof, becomes agitated and insists on speaking with him privately. The seer claims that the pattern Rängr is creating in his thatching matches a pattern from an ancient prophecy about a craftsperson whose hands will literally rebuild the world during an apocalyptic transformation. The seer is terrified and believes Rängr's work may be inadvertently triggering cosmic changes. Rängr initially dismisses this as the seer's derangement, but strange occurrences follow: buildings Rängr thatches become focal points for unusual phenomena, people gravitate toward them during crises, the structures seem to hold luck and protection inexplicably. Rängr must investigate whether he is merely a skilled craftsperson or if his apparently ordinary work is somehow cosmically significant.
