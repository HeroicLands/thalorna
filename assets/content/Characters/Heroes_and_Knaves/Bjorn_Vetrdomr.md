---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Björn Vetrdómr
  title: ""
  given: Björn
  clan: Vetrdómr
  home: ravensholm
  aliases: []
packFolder: ankarisnordlands
shortcode: bjrnvtrdmr
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
    - kngdmnrdhm
  gender: male
  species: null
  age: 54
  birthday: 666/3/30
  height: 1.83
  weight: 72.1
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: white
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a tattoo of a snake on the chest
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-tyr }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-thuravarkscript, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wclk }
    - name: Wooden cask (for ale storage and service)
      type: miscgear
      system:
        shortcode: woodencask
        weight: 2
        value: 100
        durability: 3
    - name: Cooking and brewing supplies
      type: miscgear
      system:
        shortcode: cookingandbrewing
        weight: 1.5
        quantity: 1
        value: 100
        durability: 3
    - name: Innkeeper's ledger (guest records)
      type: miscgear
      system:
        shortcode: innkeepersledger
        weight: 0.5
        value: 2
        durability: 3
    - name: Measuring vessels and cups
      type: miscgear
      system:
        shortcode: measuringvessels
        quantity: 6
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-wtrskin }
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

![[bjrnvtrdmr|Björn Vetrdómr]]{float: top-left}

Björn stands 6'0" tall with a heavy build. He has tanned weathered skin, white hair, and gray eyes. His features include a rectangular face, a slightly upturned nose, a heavy jawline, a firm-set mouth, straight brows. A distinguishing mark is a tattoo of a snake on the chest.

# Dossier {#dossier}

## Background

### The Maker's Path

Björn was born the eldest son of a brewmaster in the northern reaches of [[place-nordheim|Nordheim]], in a small town whose fortunes rose and fell with the success of its seasonal harvests. His father expected him to inherit the family trade, and indeed, young Björn showed considerable talent in the craft—a keen nose for the subtle interplay of grain, herbs, and fermentation that separates merely palatable ale from transcendent brew. But Björn's mother, a storyteller of considerable skill, saw something else in her son: a capacity for hospitality, for creating spaces where strangers became friends and the weary found solace.

When his father died suddenly—struck down by fever when Björn was but twenty—the family brewery fell to his younger brother, Keth, while Björn was left to find his own path. Rather than resent this, Björn saw providence. He spent five years as a traveling merchant, learning the roads and the needs of distant communities. He mastered cooking alongside brewing, understanding that a full belly and satisfied palate were the foundations of fellowship.

### The Founding of the Hearth

At twenty-five, Björn took what savings he had gathered and purchased a modest building in the larger trading town of [[place-ravensholm|Ravensholm]], where the crossroads of three major roads converged. The location was strategic, but Björn's true genius lay in his understanding of what travelers and locals alike truly needed. He built not merely a tavern, but a sanctuary—a place where merchant princes and common folk could break bread together, where disputes were settled over shared drink rather than steel, where lonely wanderers could for a night feel the warmth of community.

For nearly three decades, the Serpent's Hearth (named after his devotion to [[lore-tyrdty|Týr]]) has been Ravensholm's beating heart. Björn's special ales have become renowned throughout the kingdom; his cooking is spoken of in hushed, reverent tones; but most importantly, his establishment has become a genuine refuge. During harsh winters, he has sheltered those with nowhere else to go. During conflicts, he has mediated between feuding families. During celebrations, his hall has echoed with the most joyful sounds any of his patrons have known.

### The Weight of Years

Yet recently, Björn has felt the weight of his years settling upon his shoulders like an iron cloak. His body, once powerful and tireless, now protests after long days of labor. He has made enemies through his impartiality—there are always those displeased by his fair judgments. And most troublingly, he has begun to wonder if all his years of building community and providing sanctuary have merely delayed the darker currents he senses moving through the kingdom. He has also begun to question whether his legendary trustfulness has blinded him to threats that now encircle his beloved establishment.

## Psyche

### Personality

Björn is a man of contradictions—simultaneously warm and reserved, open and calculating, expansive and introspective. He has perfected the art of listening; those who speak to him often feel genuinely heard in a way they rarely experience elsewhere. Yet this apparent openness masks a sharp tactical mind. He understands human nature with the precision of a craftsman understanding his materials, and he manages his patrons with subtle genius that few recognize.

His wit is dry and often self-deprecating, and he laughs readily, though those who know him well recognize that his laughter often masks deeper concerns. He speaks with the measured cadence of one accustomed to being heard, but he never dominates conversation—instead, he draws others out, making them feel as though their thoughts and experiences matter. There is an almost professorial quality to him, as though he is constantly teaching through example rather than lecture.

### Motivation

Björn's driving force is the belief that civilization itself rests upon small acts of hospitality and justice. He views his inn not merely as a business, but as a bulwark against the encroaching darkness of a world that grows colder and more fractious each passing year. He seeks to create spaces where the better nature of humanity can flourish, where conflicts can be resolved through words and shared meals rather than violence and bloodshed. Yet he harbors a growing conviction that such refuges cannot indefinitely stand against the larger currents of history—and this knowledge drives him to accomplish as much as possible before the inevitable reckoning arrives.

### Strengths

- **Culinary Mastery**: Björn's cooking transcends mere sustenance; his meals are memorable experiences that evoke emotional responses. He understands how flavors and textures can soothe wounds both bodily and spiritual.
- **Brewing Genius**: His ales, meads, and fermented beverages are sought after throughout the kingdom. He has developed proprietary techniques and flavor profiles that cannot be easily replicated.
- **Emotional Intelligence**: He reads people with remarkable accuracy and understands the unspoken currents of group dynamics. He can calm heated situations through seemingly casual comments.
- **Strategic Thinking**: Beneath his warm demeanor lies a sharp tactical mind. He has built and sustained his business through careful planning, observation, and adaptation.
- **Conflict Resolution**: He possesses an almost supernatural ability to mediate disputes and find common ground, though this talent comes from hard-won experience rather than innate gift.
- **Extensive Network**: Years of hospitality have built him a web of connections throughout Nordheim. Merchants, nobles, mercenaries, and common folk all consider him a trusted ally or acquaintance.

### Weaknesses

- **Excessive Trust**: His openness and faith in human nature, while admirable, have made him vulnerable. He often fails to recognize predatory intent until it is too late.
- **Physical Decline**: His aging body cannot match the demands he places upon it. Long periods of labor leave him exhausted, and he is no longer capable of the physical feats required in genuine combat.
- **Emotional Burden**: The weight of being a refuge to so many has accumulated over decades. He carries the sorrows and struggles of his patrons within his own heart, and the burden grows heavier each year.
- **Conflict Avoidance in Personal Matters**: While skilled at mediating others' disputes, he avoids addressing problems within his own life—unresolved tensions with his brother Keth, questions about his legacy and succession, and doubts about his own worthiness.
- **Blindness to Systemic Problems**: For all his understanding of human nature, Björn sometimes fails to recognize larger patterns and conspiracies that extend beyond his personal sphere of influence.

## Social

### Patrons

- **Lady Constance Ashford**: A noble widow who has become Björn's confidante and occasional romantic interest. She secretly funds his more charitable endeavors and has warned him of court intrigue affecting his region.
- **Magistrate Horatio Greensleeves**: The town's chief law enforcement, who relies heavily on Björn's network of informants and his insight into the community's pulse.
- **The Merchant Consortium of Ravensholm**: The collective of trading guilds treats Björn's inn as their de facto meeting place and headquarters; they provide steady business and seek his counsel on commercial matters.

### Enemies

- **Keth Vetrdómr** (His Brother): A source of deep pain for Björn, his younger brother inherited the family brewery and has built it into a vast commercial empire. Yet Keth resents Björn's greater fame and community standing, and he has subtly worked to undermine his brother's reputation and business.
- **Thane Blackthorn**: A warlord of the northern territories who views the Serpent's Hearth as a den of spies and resistance, and has made veiled threats about bringing Björn and his establishment to heel.
- **The Poison Cult of Vúlcan**: A heretical sect has begun to target Björn, viewing his worship of Týr and his work in promoting order as direct opposition to their chaotic spiritual vision. They have begun poisoning patrons who drink from his taproom.

### Affiliations

- **The Innkeepers' Guild**: A formal organization whose meetings Björn attends, though he is often frustrated by their focus on profit over purpose.
- **The Order of Týr's Justice**: An informal society of those devoted to the principle of fair judgment and order. Björn is considered one of their spiritual leaders, though he rarely claims the title.
- **The Ravensholm Community Council**: An ad-hoc assembly of merchants, craftspeople, and concerned citizens who often meet at the Serpent's Hearth to discuss town matters.

## Plot Hooks

1. **The Succession Question**: Björn is aging, and he has no clear heir for his beloved inn. His nephew—Keth's son—approaches him with an offer: in exchange for naming him successor, the young man will help Björn discover the extent of his father's (Keth's) campaign against him. But the nephew has his own hidden agenda, and accepting his help may inadvertently enable a scheme that threatens the entire community.

2. **The Plague of False Ale**: A mysterious illness begins spreading through Ravensholm, affecting those who have consumed ale from the Serpent's Hearth. Björn is horrified to discover that someone has deliberately contaminated his supplies with subtle poison. The taint spreads faster than he can contain it, and he must work with both allies and dangerous outsiders to identify the poisoner while his reputation—and his patrons' lives—hang in the balance.

3. **The Noble's Dark Secret**: A prominent noble confides in Björn, sharing a terrible secret that, if revealed, would destroy her family and alter the political landscape of Nordheim. She asks for his absolute discretion, and he grants it—until adventurers arrive seeking information about her, and Björn must decide whether to betray his code of hospitality to prevent whatever catastrophe they're trying to avert.

4. **The Resurrection of Keth**: Word arrives that Björn's younger brother, long thought lost to a trading accident years ago, has been discovered alive in distant lands, possessed of vast wealth and mysterious new allegiances. Keth returns to Ravensholm with claims to both the family brewery and the Serpent's Hearth, and he brings with him shadowy associates whose intentions are deeply unclear. Björn must navigate this reunion without knowing whether his brother is genuinely returned or an imposter, and what dark purposes motivate his sudden reappearance.

5. **The Tapestry of Fate**: An ancient prophet or oracle arrives at the inn, claiming to possess knowledge of a coming darkness that will test every principle Björn has built his life upon. She offers cryptic guidance in exchange for shelter and resources, but her predictions grow increasingly specific and disturbing. Björn must determine whether she is genuine or mad, while the events she predicted begin—slowly, terrifyingly—to manifest around him.
