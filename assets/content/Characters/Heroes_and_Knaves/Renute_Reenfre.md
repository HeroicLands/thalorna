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
  born: 688/2/8
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

Renutê stands 5'7" tall with a light build. She has dark skin, black hair, and dark brown eyes. Her features include a high-cheekboned face, a straight narrow nose, a gentle jawline, generous lips, dark brows, and angular cheeks.

# Dossier {#dossier}

**From Humble Hearth to the Reenfré**

**Renutê** was born the daughter of a cook in the grand house of a noble family of the Empire of [[affiliation-empirtkhpr|Ta'Kheperu]], learning her culinary arts at her mother's side in vast kitchens where she prepared food for dozens. However, rather than spending her life in service to a single household, she dreamed of something greater: a place where people of all stations could gather, where fine food and drink would flow freely, where stories would be exchanged and friendships forged. At twenty-three, using money saved across years of careful management and loans from supportive patrons of her cooking, she purchased a ramshackle building near the harbor and converted it into the Reenfré, an establishment that would become famous across the empire.

**The Making of Legend**

Over three decades, Renutê transformed her modest inn into one of the city's most beloved establishments. Her culinary skill is true artistry—she can take simple ingredients and transform them into dishes that people travel miles to experience, and she maintains an extensive wine and ale collection that rivals noble houses. Beyond the food and drink, she created an atmosphere where adventurers, merchants, scholars, and common folk could mingle without pretense. She remembers the names and histories of hundreds of guests, asks about their families and fortunes, and has a gift for introducing people who need to meet each other. Tales of matches made at her tables, business deals struck, and adventures planned in her common room form a vast oral history that she treasures.

**Current Authority**

Now in her early sixties (though she claims fifty), Renutê reigns over the Reenfré with benevolent authority. Her establishment has expanded over the years, with private rooms for important guests, a kitchen that produces both everyday fare and culinary masterworks, and accommodations ranging from simple rooms for traveling merchants to more luxurious suites. She serves on the Local Innkeepers' Association and uses that position to advocate for the interests of hospitality workers and small proprietors. She has become the keeper of the city's stories—she knows the histories, scandals, secrets, and victories of hundreds of people, and this knowledge makes her a subtle but significant power broker. Yet for all her influence and success, she remains connected to the work of the inn, personally cooking many of its most important meals and greeting regular patrons with authentic warmth.

## Psyche

### Personality

Renutê is boisterous and vivacious, with a laugh that can be heard across the common room and a tendency to express herself in dramatic gestures and colorful language. She is a natural storyteller who can transfix an audience with tales of notable guests, historical events, or her own adventurous past (the extent to which her stories embellish reality is a matter of good-natured debate). She treats most people with warmth but is not naive; she can size up a person's character quickly and will refuse service to those she deems dangerous or disreputable.

With the boisterousness goes a sharp mind for business, a deep understanding of human nature, and a commitment to the welfare of her staff and regular patrons. She can be maternal in her concern for those she feels responsible for, though she expresses this through practical help and honest counsel rather than sentimentality. She has strong opinions and expresses them freely, though she is secure enough in herself that disagreement doesn't threaten her. She is fiercely proud of her inn and its reputation, and she takes personally any attack on its quality or standing.

### Motivation

Renutê is motivated by her vision of her inn as a sanctuary—a place where people can find honest food, warm hospitality, and the freedom to be themselves without pretense or judgment. She continues working long past the age when she could have retired, because the Reenfré has become more than a business to her; it is a vocation and an expression of her values. She is driven by a desire to create and maintain a space where community happens naturally, where the lonely can find connection and the weary can find rest. She takes pride in the success of her patrons—when adventurers who planned their journeys at her tables return with stories of triumph, or when business partnerships made at her tables flourish, she feels that her inn has fulfilled its purpose. She also maintains a commitment to paying her staff fairly and treating them with respect, viewing the Reenfré as much as an experiment in creating a just workplace as in providing hospitality.

### Strengths

- **Culinary Mastery:** Renutê is an artist with food and drink; her creations are among the finest in the empire, and her knowledge of cuisines, ingredients, and flavor combinations is extensive and refined. She has trained numerous cooks who now run their own establishments.
- **Exceptional Memory for People:** She remembers the names, histories, families, and preferences of hundreds of patrons; this gift makes guests feel valued and gives her a rare ability to bring people together.
- **Management of Complex Operations:** Despite her reputation for being less detail-oriented, she runs her inn well; she understands stores, staffing, accounts, and standards well enough to maintain a thriving business across decades.
- **Genuine Warmth and Charisma:** Her capacity to make people feel welcome and valued is authentic rather than performed; she has a gift for creating atmosphere and comfort that goes beyond mere hospitality.
- **Sound Judgment of Character:** She can assess a person's integrity and trustworthiness quickly; her instincts about people have proven reliable across decades, making her a good source of judgment about someone's reliability or danger.
- **Substantial Physical Strength:** She is stronger than most people would assume from looking at her; she can handle herself in physical confrontation if necessary, though she prefers to avoid it.
- **Political Savvy:** She handles guild politics and city governance with considerable skill, using her position on the Innkeepers' Association to advocate effectively for her interests and values.

### Weaknesses

- **Aversion to Detail Work:** While she manages her business adequately, she struggles with careful record-keeping, complex accounting, and the fine administrative details that separate adequate management from excellence. She relies on capable staff members to compensate for this weakness.
- **Overconfidence in Her Judgment:** Her generally accurate assessment of people can occasionally lead her to misjudge someone, particularly if they appeal to her sympathies or if she is emotionally invested in believing in their integrity.
- **Loud and Sometimes Inappropriate:** Her boisterous nature and tendency toward colorful language can be jarring in more refined settings; she sometimes lacks the filter to recognize when her exuberance is unwelcome.
- **Vulnerability to Emotional Manipulation:** Those who appeal to her loyalty or her desire to help can occasionally manipulate her into providing assistance that she later regrets or that compromises her business interests.
- **Protective Impulsiveness:** Her fierce loyalty to her staff and regular patrons can cause her to act without full consideration of consequences; she has been known to shelter fugitives or become involved in disputes that endanger her business.
- **Age and Stamina:** While still strong and vital, she is no longer young; sustained physical exertion tires her, and she recovers from injuries more slowly than she once did.

## Social

### Patrons

- **Captain Ahmet Sekar:** A decorated naval officer who frequently stays at the Reenfré and uses her common room for important meetings. He values her discretion and her ability to keep conversations private.
- **Master Merchant Hetmiya:** The head of a major trading concern who has relied on Renutê's recommendations for finding trustworthy business associates and reliable travel partners. Their relationship has made both of them substantial profits.
- **The Scholars' Circle:** A group of learned individuals who hold regular meetings at the Reenfré and have come to depend on Renutê's ability to provide excellent meals on their schedule and maintain privacy for their discussions.
- **Various Adventuring Companies:** Numerous groups of adventurers have made the Reenfré their base of operations between expeditions, and they maintain loyalty to Renutê across the years.

### Enemies

- **Vex the Competitor:** The proprietor of a rival establishment who views Renutê's success with jealousy and has begun spreading rumors about food quality and sanitation at the Reenfré. The conflict is more trade rivalry than true enmity, but it is real enough.
- **City Magistrate Tomás:** An official who attempted to impose onerous new regulations on innkeepers, which Renutê organized opposition against. He views her advocacy as insubordination and has looked for ways to harass or fine her establishment.
- **The Debt Collector's Guild:** A disreputable organization that Renutê has refused to pay protection fees to, insisting that her inn exists under the city's legitimate jurisdiction. They view her as a target and an example, though direct action against her is risky given her popularity.

### Affiliations

- **Local Innkeepers' Association:** Renutê is an active member and advocate for innkeeper interests, though her focus on fair labor practices and customer treatment sometimes puts her at odds with more profit-focused proprietors.
- **The Harbor Community:** As someone located near the docks, Renutê maintains connections with merchants, sailors, and port workers; she is considered part of the harbor community and is trusted by its members.
- **The Scholars' Circle:** While not formally a member, Renutê has close ties to this intellectual group and allows them preferential access to her private spaces.

## Plot Hooks

1. **The Mysterious Inheritance:** A wealthy patron whom Renutê knew casually decades ago arrives at her inn and announces that she has been named in his will as the inheritor of a substantial estate and fortune. The catch: the estate is located far from the city, in a region she has never visited, and accepting it would require her to leave the Reenfré for an extended period or permanently. The patron's family also contests the will, suggesting that Renutê somehow manipulated him. The party becomes involved in traveling to the estate to investigate the situation, potentially defending Renutê's character while discovering what the deceased patron's true intentions were.

2. **The Missing Supplier Crisis:** Several of Renutê's key suppliers—a grain merchant, a fisherman, a vintner—suddenly disappear or become unavailable, causing her ability to maintain the Reenfré's quality and reputation to suffer. Investigation suggests they have been pressured or threatened to cease dealing with the Reenfré as part of a coordinated effort to undermine her business. The party is hired to discover who is orchestrating this campaign and to either convince the suppliers to return or find replacements that meet Renutê's standards.

3. **The Trouble the Reenfré Brings:** A dangerous criminal organization uses the Reenfré as a neutral meeting ground for negotiations, assuming Renutê's reputation for discretion means she will not interfere with their business. When the party discovers this, they pressure Renutê to deny the criminals access or to inform the authorities about their meetings. Renutê is torn between her loyalty to her inn's openness and her moral obligation to prevent crime, and she involves the party in a delicate situation where she must balance community values with justice.

4. **The Recipe Worth Killing For:** A mysterious visitor approaches Renutê with an extraordinary claim: one of her signature dishes—a particular seafood preparation or spiced wine blend—is actually based on a recipe stolen centuries ago from a noble house, and that house's descendants are now demanding she surrender the recipe and compensation. Alternatively, the recipe is based on ingredients or knowledge that are forbidden by religious or legal authorities, and the mysterious visitor is a representative of that authority. Renutê weighs whether the recipe is worth legal trouble, and the party becomes involved in either defending her right to use the recipe or discovering whether there is actual foundation to the claim.

5. **The Legacy Moment:** After decades of running the Reenfré, Renutê is presented with an opportunity to sell her establishment to a larger hospitality organization that would offer her substantial wealth and retirement but would fundamentally change the character of her inn. Simultaneously, a promising staff member expresses interest in taking over the business and continuing it according to Renutê's values, but lacks the capital to buy it. The party becomes involved in helping Renutê through what amounts to a decision about her legacy and the future of a beloved community institution.
