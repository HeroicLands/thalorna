---
shortcode: klnlvn
name: {full: Kalonei Luavanu, given: Kalonei, clan: Luavanu, aliases: []}
type: being
subType: character
tags: [heroes-and-knaves, guilded, common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan, woodsman]
  occupation: Charcoaler
  lore: []
  culture: kaliharanclt
  homes: [ilovanu]
  affiliations: {kalihara: {rank: 3}, sacredforge: {rank: 1}}
  gender: male
  species: humanflk
  born: 683.137
  height: 6' 1"
  weight: 177 lbs
  frame: medium
  appearance:
    eye_color: amber
    hair_color: black
    skin_color: dark_brown
    complexion: null
    extra_features: []
  packFolder: heroesandknaveskalihara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-eng, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-weapongear-hcht}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-hstunic}
    - {model: sohl-sohl-armorgear-hstrsr}
    - {model: sohl-sohl-armorgear-rhshoe}
    - {model: sohl-sohl-armorgear-ltglove}
    - {model: sohl-sohl-armorgear-hscap}
    - name: Burlap sacks (charcoal transport)
      type: miscgear
      system: {shortcode: burlapsacks, quantity: 4, weight: 1, value: 100, durability: 3}
    - name: Kiln tools (rake, poker, spade)
      type: miscgear
      system: {shortcode: kilntools, weight: 2, value: 100, durability: 3}
    - name: Fire-starting flint and steel
      type: miscgear
      system: {shortcode: firestartingflint, weight: 0.5, value: 100, durability: 3}
    - name: Whetstone
      type: miscgear
      system: {shortcode: whetstone, weight: 0.5, value: 100, durability: 3}
    - name: Wood samples (oak, cedar, pine)
      type: miscgear
      system: {shortcode: woodsamples, weight: 1, value: 100, durability: 3}
    - name: Cloth for filtering charcoal dust
      type: miscgear
      system: {shortcode: clothforfiltering, quantity: 2, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 4}}
    - {model: sohl-sohl-containergear-bktlrg}
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

![[klnlvn|Kalonei Luavanu]]{float=top-left}

Kalonei stands 6'1" tall with a medium build. He has deep ebony skin, black hair, and dark amber eyes. His features include an angular face, a straight nose, a refined jawline, full lips, fine brows, sculpted cheeks.

# Dossier {#dossier}

## Background

### The Kilns Behind the Harbor

Kalonei Luavanu was born in the charcoal-burners' quarter behind the harbor of [[place-ilovanu|Ilovanu]], where the sky over the kilns is gray with woodsmoke most days of the year. His father was a charcoaler of modest name, and the boy understood fire early: where others saw black dust, Kalonei saw endless variation in quality, purity and character, each batch a new thing made by turning wood into something else entirely.

### The Better Burn

In his early twenties he began to experiment beyond his father's ways, learning how different woods, kiln shapes and careful control of the burn changed what came out. The port's best smiths found that his charcoal burned hotter, cleaner and more evenly than any other, and they have bought from no one else since. Fifteen years ago he opened his own kilns, and he is now the most charcoaler on the coast, with more orders than his methods will ever let him fill.

### The God of the Forge

Like many port Kaliharans, Kalonei keeps the faith of the foreigners he grew up among. His devotion to Ústaron, the fire-god of [[affiliation-sacredforge|the Sacred Forge]] in the [[affiliation-arldnpnthn|Aurèldían Pantheon]], is less a duty than a part of his work: in a well-tended kiln he sees a small, holy act of transformation, an echo of the god's own fire.

## Psyche

### Personality

Kalonei is quiet and intense, given to long silences broken by sudden floods of explanation about his craft. He speaks slowly and exactly, and the talk of woods and kilns turns him from a reserved craftsman into an eager teacher. With strangers he keeps his distance; with the smiths and charcoalers he counts as his own, he is warm.

His defining trait is a perfectionism close to obsession. He will spend hours on the moisture of a log or the heat of a burn while a buyer waits and the profit goes elsewhere, which impresses those who share his values and infuriates those who do not. Under the rigor is a dry humor, usually at his own expense and his endless chase after a slightly better burn.

### Motivation

Kalonei wants to make perfect charcoal. He knows there is no such thing, and the knowledge only spurs him on: improving his craft honors Ústaron and the wood, turning one noble material into another by discipline and knowledge. Fame and money matter less to him than the thought of a smith somewhere making something fine with his fire.

He also wants to show that a humble trade can hold as much mastery as any learned one. His charcoal feeds every forge on the coast, and he thinks of himself as a servant of the fire, not of the market.

### Strengths

- **Fire**: he understands burning by instinct, holds a kiln's heat exactly where he wants it and can tell how a burn will end before it is half done.
- **Method**: he tests every change and records the results in journals that by now make a library of the craft.
- **Wood**: he judges a log's kind, dryness and yield at a glance, and chooses his wood accordingly.
- **Reliability**: buyers of his charcoal know exactly what they are getting, and that certainty is worth his prices.
- **Teaching**: the few apprentices he accepts learn both the technique and the reverence behind it.

### Weaknesses

- **Perfectionism**: he will hold back a delivery for an improvement no buyer could detect, and loses customers and money by it.
- **Silence**: he says so little that he seems curt or dismissive, and puts off people who could help him.
- **Inflexibility**: inventive inside his craft, he resists every demand from outside it.
- **Solitude**: his work leaves no room for the friendships and alliances that would protect his interests.
- **Pride**: anyone who flatters his skill can talk him into spending his resources on schemes that do not serve him.

## Social

### Patrons

- **Master Smith Melovai**: a famous Ilovanu smith whose forges burn nothing but Kalonei's charcoal, and whose public praise has sent other smiths looking for the same edge.
- **The Wardens' Armory**: the armory of the Wardens of the Approaches, which forges the blades and boat-fittings of the pilots and the harbor watch and buys his charcoal for the purpose, steadily if not always promptly.
- **Merchant-Artificer Sornak**: a dealer in fine tools and materials who holds the sole right to sell Kalonei's best charcoal in the three smaller ports.

### Enemies

- **The Bulk Producers**: an association of larger charcoaling yards that sees his prices and methods as a threat. They spread rumors about his reliability and try to lure away his best buyers.
- **The harbor factors**: the port's smiths and the foreign hulls that load charcoal for the voyage home want ever more of it, and the factors who broker it count Kalonei's refusal to burn more as an obstruction to trade.
- **Rival Craftsman Olunavi**: a charcoaler who tried to copy Kalonei's methods and failed, and who tells the quarter that Kalonei hoards secrets, sooner than admit his own work is worse.

### Affiliations

- [[affiliation-kalihara|Kalihara]]: a craftsman's standing among the port Kaliharans, and the standard-bearer of quality in the Charcoalers' Guild of the port, increasingly at odds with its push to burn more and burn faster.
- [[affiliation-sacredforge|The Sacred Forge]]: a quiet member of the Order of Ústaron's Flame, the fellowship of fire-workers—smiths, brewers, potters and charcoalers—attached to the god's temple in the foreign quarter.

## Plot Hooks

1. **The Commission of Urgency**: A foreign agent arrives in Ilovanu with an enormous order: enough charcoal to fire the forges of an army fitting out across the water for a war of conquest. The price would make Kalonei rich for life, and meeting it would mean bad wood and rushed burns. The harbor factors press him to accept for the port's sake. Kalonei must weigh his craft against the trade, and find out whose war his fire would feed, and whether the Wardens would let it sail.
2. **The Contaminated Source**: The coppiced woodland that has supplied his kilns for twenty years has been secretly cut by someone else and replanted with poor trees. Someone has sabotaged his supply on purpose, probably a rival, and Kalonei must find who, and decide whether to retaliate, move his kilns or find new wood without lowering his standards.
3. **The Apprentice's Tragedy**: An apprentice Kalonei has been training is caught stealing from the kilns and selling poor charcoal under his master's name. The betrayal wounds Kalonei as a craftsman, a teacher and a believer. He must choose between handing the boy to the guild, learning what drove him to it—hunger, or a rival's pressure—and finding a way to protect his name that still leaves the boy a road back.
4. **The Innovation Demand**: A brilliant, impatient young inventor brings Kalonei a design for a new kiln that could burn three times as much without, he claims, losing quality, and backers among the great merchant houses are ready to pay for it. Kalonei is fascinated by the idea and deeply suspicious of speed and size. He must risk his name on an experiment or watch others build it without him.
5. **The Sacred Affront**: The temple of Ústaron in the foreign quarter announces that it will pull down the old communal kilns that have burned behind the harbor for centuries and replace them with one great kiln-yard under its own management, a hotter and purer fire for the god. To Kalonei the old kilns are holy ground, where generations of charcoalers have worked and prayed. He must decide whether to oppose a priesthood he reveres, and whether he can win allies among the port's Kaliharans, for whom a practice kept exactly for centuries is not lightly changed.
