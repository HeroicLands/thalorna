---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Ermelína Drekanótt
  title: ""
  given: Ermelína
  clan: Drekanótt
  home: valgard
  aliases: []
packFolder: ankarisnordlands
shortcode: ermlndrknt
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Innkeeper
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kingdmtrgd
  gender: female
  species: null
  age: 52
  born: 668/3/30
  height: 1.78
  weight: 71.7
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: light
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-thorr }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-thuravarkscript, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-hsdress }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wmntl }
    - name: Innkeeper's ledger and records
      type: miscgear
      system:
        shortcode: innkeepersledger
        weight: 1
        value: 100
        durability: 3
    - name: Cooking implements and utensils
      type: miscgear
      system:
        shortcode: cookingimplements
        weight: 1
        value: 100
        durability: 3
    - name: Herbal remedies and tinctures
      type: miscgear
      system:
        shortcode: herbalremedies
        quantity: 5
        weight: 1
        value: 100
        durability: 3
    - name: Provisions (dried herbs, spices)
      type: miscgear
      system:
        shortcode: provisions
        quantity: 3
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Parchment and writing supplies
      type: miscgear
      system:
        shortcode: parchmentandwriting
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 10 } }
    - { model: sohl-sohl-containergear-bktlrg }
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

![[ermlndrknt|Ermelína Drekanótt]]{float: top-left}

Ermelína stands 5'10" tall with a medium build. She has light weathered skin, brown hair, and green eyes. Her features include an oval face, a straight nose, a strong jawline, a firm-set mouth, thick brows, hollow cheeks.

# Dossier {#dossier}

Ermelína was born the third daughter of a minor landowner in the [[affiliation-kingdmtrgd|Kingdom of Targud]], in those borderlands where the Asgardian Pantheon's influence mingles with older, earthier traditions. Her childhood was spent largely in the kitchens of her father's modest estate, where she learned not merely to cook but to understand the chemistry of flavor, the rhythm of seasons, and the satisfaction of feeding people well. When her father died under circumstances never fully explained—some say in a dispute over land rights—her mother struggled to maintain the household, and Ermelína, then barely twenty, was apprenticed to the kitchens of a great inn on the trade road.

For thirty years, she served that inn faithfully, rising from scullery to head cook, until she had saved enough coin and earned enough reputation to purchase her own establishment. The Drekanótt Inn, which bears her family name, has stood for two decades now as a beacon of warmth and exceptional hospitality in an often harsh world. She has weathered everything—poor harvests, bandit raids, the vagaries of trade wars—with an iron will and an unflinching commitment to maintaining the highest standards for her guests.

## Psyche

### Personality

Ermelína is a woman of few wasted words and tremendous emotional depth. Her exterior is stern and demanding, particularly toward those who work for her; she holds herself and others to exacting standards born from a belief that excellence is not a luxury but a form of respect. Yet beneath this austere exterior lies genuine warmth and a surprising philosophical depth. She has seen much in her years—love and loss, triumph and failure, the best and worst of human nature—and this perspective makes her surprisingly wise and compassionate with patrons who open their hearts to her. She speaks plainly, laughs seldom but genuinely, and possesses a dark humor that surfaces when she believes herself unobserved.

### Motivation

Ermelína's primary drive is to create a space of true sanctuary in a world of uncertainty and hardship. The Drekanótt Inn is not merely a business but her legacy and her statement about what hospitality can mean. She seeks to prove that a woman of modest birth can build something enduring and respected, and through this success, to establish security for her own twilight years and to provide opportunity for those who work under her. She is also motivated by a complex loyalty to the community—she feels genuine responsibility to her guests and her employees, even when that responsibility weighs heavily.

### Strengths

- **Master of Culinary Arts**: Ermelína's reputation for exceptional food is known throughout the region; her kitchens produce everything from humble peasant fare to elaborate feasts with equal mastery.
- **Herbal Knowledge**: Years of managing both kitchen and remedies have made her skilled in herbal medicine; she has treated everything from minor wounds to stubborn illnesses.
- **Shrewd Business Acumen**: She understands accounting, inventory management, and the subtle arts of running a profitable establishment while maintaining ethical standards.
- **Physical Strength and Endurance**: Despite her age, she possesses considerable strength and remarkable stamina, able to work from dawn to well past dusk.
- **Perception and Reading People**: Few things escape her notice; she can judge a person's character and circumstances with remarkable accuracy.

### Weaknesses

- **Emotional Rigidity**: While she possesses deep feeling, she struggles to express it directly; her sternness can be misread as coldness.
- **Perfectionism**: Her exacting standards, while beneficial for her business, can create tension with staff and make it difficult for her to delegate or accept imperfect work.
- **Limited Combat Training**: Though she can handle herself in a brawl due to physical strength, she lacks formal martial skill.
- **Trust Issues**: Past betrayals have made her cautious about forming close personal bonds; she maintains emotional distance even from those closest to her.
- **Stress-Related Ailments**: The weight of responsibility manifests in physical tension, poor sleep, and occasional outbursts of uncharacteristic anger.

## Social

### Patrons

- **Lord Tárvund**: The regional noble whose lands surround her inn depends on her for hospitality during his frequent hunting expeditions; he has granted her a charter ensuring her establishment's protection.
- **The Merchant Consortium of Targud**: Several wealthy merchant families use her inn as a neutral meeting ground for negotiations; they value both her discretion and her excellent wine cellars.
- **Master Brewer Khorvak**: The head of the regional brewers' guild maintains a close relationship with Ermelína, supplying her with the finest ales and meads, and relying on her recommendations to advance his reputation.

### Enemies

- **Halgar Stonefist**: A rival innkeeper who runs a disreputable establishment nearby and views Ermelína's success as a personal affront; he spreads rumors about her business and occasionally orchestrates minor sabotage.
- **The Crimson Road Bandits**: A loose confederation of brigands operating in the borderlands sees her well-stocked inn as both a target and a gathering place; they have robbed her twice in past years.
- **Lord Márkos's Agent**: A nobleman's representative who attempted to purchase her inn by any means necessary, including coercion; they harbor considerable resentment over her refusal.

### Affiliations

- **Innkeepers' Guild of Targud**: Ermelína maintains an active, respected position within this association and serves on its council, advocating for fair trade practices and safe roads.
- **The Brewers' Circle**: She networks with master brewers and vintners across the region, helping to establish quality standards and fair pricing.

## Plot Hooks

1. **The Poisoned Guest**: A prominent merchant patron dies under suspicious circumstances while staying at the Drekanótt Inn, and suspicion falls on Ermelína herself. Though her reputation is sterling, the dead man's wealthy family demands justice, and the party must help prove her innocence while uncovering who truly poisoned the guest—perhaps revealing dangerous enemies the merchant had made.

2. **The Hidden Cache**: While renovating her cellar, Ermelína's workers discover a sealed chamber containing artifacts and documents from an era long past—possibly religious relics, forbidden knowledge, or evidence of a historical secret. She must decide whether to report the discovery or investigate its implications, and powerful interests emerge to claim or suppress what was found.

3. **The Deserter's Daughter**: A young woman arrives at the inn claiming to be the daughter of a man Ermelína knew decades ago—a soldier who vanished during a territorial dispute. The woman brings news of her father's fate and a plea for help in retrieving something he left hidden. Ermelína must grapple with unexpected family connections and the possibility of reopening old wounds.

4. **A Sanctuary Request**: Ermelína is approached by fugitives—perhaps refugees from persecution, escaped prisoners, or people fleeing dangerous circumstances—seeking shelter. Harboring them would violate laws and risk her livelihood, yet her sense of justice compels her. The party becomes entangled in helping her navigate this moral crossroads while evading authorities.

5. **The Festival Opportunity**: When a major regional festival approaches, a prestigious noble or wealthy merchant offers Ermelína an enormous contract to cater the event, but with impossible demands and an extremely tight timeline. Success could elevate her reputation and fortune permanently, but the undertaking threatens to destroy her by its sheer scope. The party might assist her in an ambitious kitchen campaign while also uncovering hidden agendas behind the event itself.
