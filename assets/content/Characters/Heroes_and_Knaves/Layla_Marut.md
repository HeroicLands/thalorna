---
tags:
  - heroes-and-knaves
  - hero
  - guilded
  - tradesfolk
  - character
name:
  full: Layla Marut
  title: ""
  given: Layla
  clan: Marut
  home: bethura
  aliases:
    - The Merchant Princess
packFolder: northernfertileregionbethua
shortcode: laylamarut
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Mercantyler
  stations: []
  lore:
    - commonerrnk
  homes:
    - bethuargn
  affiliations:
    - mtrrchybth
  gender: female
  species: null
  age: 26
  birthday: 694/1/4
  height: 1.68
  weight: 59
  frame: light
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: light
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-demtkscrpt, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-armorgear-slkdress }
    - { model: sohl-sohl-armorgear-vglv }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-slkclk }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 150 } }
    - { model: sohl-sohl-miscgear-gldcrwn, system: { quantity: 2 } }
    - name: Merchant's ledger (personal business records)
      type: miscgear
      system:
        shortcode: merchantsledger
        weight: 1
        value: 100
        durability: 3
    - name: Trade route map (hand-annotated)
      type: miscgear
      system:
        shortcode: traderoutemap
        weight: 1
        value: 100
        durability: 3
    - name: Writing materials (ink, quills, parchment)
      type: miscgear
      system:
        shortcode: writingmaterials
        weight: 1
        value: 100
        durability: 3
    - name: Merchant family credentials
      type: miscgear
      system:
        shortcode: merchantfamily
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-containergear-backpk }
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

![[laylamarut|Layla Marut]]{float: top-left}

Layla stands 5'6" tall with a light build. She has light golden skin, dark brown hair, and brown eyes. Her features include a narrow face, a noble nose, a narrow chin, well-shaped lips, thin brows.

# Dossier {#dossier}

Layla Marut is the eldest daughter—and heir-presumptive—of **House Marut**, a prosperous Lesser House of the [[affiliation-bthntrdhss|Bethûan Trade-Houses]], whose trade reaches from the orchard-ports of the [[affiliation-mtrrchybth|Bethûan]] coast across the [[place-vylarianse|Vylarian Sea]] to [[affiliation-empirtkhpr|Ta'Kheperu]] and the wider Northern Fertile Region. As is the Bethûan way, the House is led by its matriarch—Layla's mother—and it is Layla, the eldest daughter, who is meant one day to take the bench and the seal. She was trained from childhood in the arts of negotiation, trade, reckoning, and diplomacy, and she is formidable at all of them; her sharp mind and quicker tongue have already won the House deals and clients beyond its station. But the prospect of a life spent on the matriarch's bench, marrying for advantage and counting another generation's coin, stifles her. She wants the world, not the ledger.

Layla and [[being-zahirmlkht|Zahira]] met when House Marut hired the bounty hunter to run down a thief who had robbed one of the family's caravans. Taken with Zahira's nerve and skill, Layla talked her mother into letting her ride along "to learn the trade-roads first-hand"—and never quite came back to the counting-house. She brings to Zahira's hunts a web of mercantile contacts, an intimate grasp of the trade-routes and the credit that moves along them, and a reading of people and politics as sharp as any blade in the company.

## Background

### Skills and Abilities

- **Strength**: While not physically imposing, Layla has enough strength for day-to-day activities but lacks martial prowess.
- **Endurance**: She can handle the rigors of travel, but her life has been more about negotiations than physical challenges.
- **Dexterity**: Layla is reasonably deft, able to handle delicate items and move with grace in social situations.
- **Agility**: She has a natural grace that serves her well in avoiding physical dangers and staying poised.
- **Perception**: Layla’s ability to read situations and people is among her greatest strengths, allowing her to stay one step ahead in negotiations and alliances.
- **Comeliness**: Layla is strikingly beautiful in a refined, elegant way, which she often uses to her advantage in social and business dealings.
- **Aura**: Layla has a respectable presence but does not rely on magical or spiritual prowess.
- **Will**: She is determined and rarely backs down when she has set her sights on something, whether in business or adventure.
- **Reasoning**: Layla is highly intelligent, able to think on her feet and quickly assess the best course of action in any situation.
- **Creativity**: Layla is imaginative and resourceful, often coming up with creative solutions to complex problems.
- **Empathy**: Though she can be calculating, Layla has a keen understanding of the emotions and motives of others, which helps her in negotiations.
- **Eloquence**: Layla’s way with words is one of her greatest assets, allowing her to persuade, charm, and outmaneuver opponents in any social or business setting.
- **Morality**: Layla, as a Merchant Princess, is driven by ambition and her need for freedom, willing to take advantage of situations or bend the rules when necessary, especially when there’s profit or power involved.
- **Voice**: Layla’s voice is pleasant but unremarkable when it comes to singing. She uses her voice more for negotiation and persuasion than for performance.
- **Skilled Negotiator**: Layla can broker deals, negotiate with enemies, and use her charm to turn potentially hostile encounters into profitable ventures. Her ability to navigate the merchant world is unmatched.
- **Trade Network Knowledge**: Layla’s extensive knowledge of trade routes, contacts, and economic systems makes her an expert at gathering information. She can leverage her family’s connections to open doors or find hidden opportunities.
- **Cunning and Strategy**: Layla excels at reading people and situations, often advising [[being-zahirmlkht|Zahira]] on the political and social dynamics at play in any given situation. Her strategic mind allows the team to stay one step ahead of their enemies.

## Psyche

### Personality

Layla is a charming and confident woman, skilled in negotiation and persuasion. She is driven by a desire for excitement and freedom, and she relishes the chance to escape the stifling confines of her merchant clan’s expectations. Layla’s adventurous spirit is balanced by a keen sense of survival—she is always thinking several steps ahead, especially when it comes to deals and alliances. While she lacks [[being-zahirmlkht|Zahira]]’s martial skills, her sharp tongue and keen mind make her a force to be reckoned with.

### Motivation

Layla is driven by a desire for freedom and adventure. She views her alliance with [[being-zahirmlkht|Zahira]] as a way to break free from the matriarch's bench her family has reserved for her. At the same time she is her mother's daughter to the bone—she hopes to build a network of contacts and influence all her own, and harbors a quiet ambition to see House Marut rise from a Lesser House to one of the Great Houses of the federation, on terms she set herself rather than ones handed down to her.

### Strengths

- **Negotiation**
- **Trade Network Knowledge**

## Social

## Plot Hooks

1. **The Rival House**: House Marut falls into a bitter commercial war with **House Hânnârês**, a larger and better-connected rival clan that means to choke Marut out of a lucrative coastal route. When the feud turns ugly and Layla's younger sister **Sûfìra** is seized as leverage, Layla must navigate the treacherous politics of the [[affiliation-bthntrdhss|Council of Matriarchs]] and balance her wanderer's freedom against her duty to her House—all while uncovering how far Hânnârês has bought influence among the federation's matriarchs.

2. **The Correspondent's Price**: A chance opens for House Marut to take its first **[[affiliation-perhati|Pér-Háti]] correspondent account** at Wasetkara—the credit relationship that could begin the House's climb toward Great House standing. But the account comes through a Kheperi temple-factor who wants more than fees in return, and a Great House that does not wish to see Marut rise is quietly working to spoil the deal. Layla must decide how much of herself, and of her House's independence, the dream is worth.

3. **The Silent Caravan**: One of House Marut's inland caravans vanishes in the dry country toward the southern marches, along with a shipment of premium goods. When a single surviving drover staggers back with a story that does not hold together, Layla follows the trail into the borderlands—where the signs point to either a rival House's dirty work or the southern raiders who answer to no Dómissa. She must decide whether to confront the threat head-on or unravel it through her network before it bleeds the House dry.

4. **The Foreign Suitor**: A wealthy Aurelian noble of [[affiliation-vylarinmpr|Vylaria]]—**Aurelian Tavius**—makes discreet overtures, through intermediaries, for Layla's hand. Bethûan matriarchal custom does not permit a foreign husband to alter a House's inheritance, so the proposal is less a marriage than a gambit: an alliance and an opening into Vylarian markets, dangled before an ambitious Lesser House. Layla's mother is tempted; the [[affiliation-mtrrchybth|Council of Priestesses]] is uneasy at any Vylarian entanglement while the privateer war smolders; and Layla—who was not consulted—must decide whether to be a pawn, a player, or gone.
