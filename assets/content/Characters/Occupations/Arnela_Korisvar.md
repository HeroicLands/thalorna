---
tags:
  - draft
  - administration
  - character
name:
  full: Ârnela Kórisvar
  title: Lady
  given: Ârnela
  clan: Kórisvar
  home: fiordaure
  aliases:
    - Lady Seraphina Emberhart
packFolder: aureldiaprovenzia
shortcode: arnelkrsvr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Nobility (Manor Lord)
  stations: []
  lore:
    - provenzianclt
    - landedlordrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: female
  species: null
  age: 42
  born: 678/6/12
  height: 1.68
  weight: 61
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: auburn
    skin_color: medium
    complexion: smooth
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 51 } }
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

Lady Ârnela Kórisvar is a 42-year-old woman who stands 5'6" tall and is of moderate build. She has an oval face with soft cheekbones, a wide forehead, and an angular jaw that leads to a firm chin. Her wide-set hazel eyes sit beneath arched brows and give her an open gaze. She has a straight nose and full lips. She has medium-toned skin with a smooth complexion. Her auburn hair hangs in ringlets.

# Dossier {#dossier}

## Background

### The Kórisvar Name

The Kórisvars are a minor noble house of [[place-fiordaure|Fiòrdaure]], their wealth built on coastal trade and the salt flats east of the town. Ârnela's father, Lord Pálthen Kórisvar, was a cautious man who kept his head down during the last decades of political maneuvering between the crown and the Council of Peers. He died when Ârnela was twenty-six, leaving her an estate that was solvent but unremarkable—a manor house on the hill above Fiòrdaure's harbor, a handful of tenant farms, fishing rights along a stretch of coast, and a seat on the town's charter council that no one particularly coveted.

### A Different Kind of Ambition

Ârnela possessed in abundance what her father lacked in vision. Within a year of inheriting, she had used the estate's modest income to establish a small academy in Fiòrdaure—not a grand institution, but a practical school of navigation, natural philosophy, and commercial law, aimed at the sons and daughters of merchants and skilled tradesmen. In [[place-provenzrgn|Provènzia]], where noble prestige is measured by patronage, this was a shrewd move. The academy cost relatively little to maintain, attracted goodwill from the merchant class, and gave Ârnela a reputation as a reform-minded patron of learning—precisely the currency that matters on the Council of Peers.

She has since leveraged that reputation into a position of real influence. She brokered the current fishing rights compact between Fiòrdaure and [[place-belporte|Belpòrte]], chairs the town's harbor commission, and has twice been selected to represent Fiòrdaure's interests before the royal court. She is not wealthy by the standards of the great Provenzian houses, but she is effective, and in a kingdom that values negotiation over force, effectiveness counts for more than gold.

### Present Circumstances

At forty-two, Ârnela manages her estate, her academy, and her political obligations with a discipline that leaves little room for personal life. She has never married—whether by choice or circumstance, she does not say, and those who know her well enough to ask know better than to press the question. She divides her time between the manor at Fiòrdaure and the court at [[place-aureliane|Aurèliane]], where she maintains a modest townhouse and a growing network of allies and obligations.

## Psyche

### Personality

Ârnela is precise, composed, and relentlessly practical. She listens more than she speaks and chooses her words with the care of someone who has learned that in Provenzian politics, a careless sentence can undo a year's work. She can be charming when it serves her purposes, but her natural mode is directness—she prefers to state what she wants and negotiate from there. Those who mistake her calm for passivity discover their error quickly.

She has a real interest in education and ideas beyond their use as tools of political advancement. She reads widely, corresponds with scholars at [[affiliation-panepistmm|the Panepistemium]] chapterhouse in [[place-chastelclr|Chastèlclair]], and has been known to spend an evening debating natural philosophy with her academy's instructors when she should be reviewing accounts. This intellectual curiosity is both a strength and an indulgence she cannot always afford.

### Motivation

Ârnela wants to build something that outlasts her—to make the Kórisvar name mean something beyond a minor house with fishing rights. The academy is the seed of that ambition, but the deeper goal is to demonstrate that Provènzia's future lies in practical education and broad prosperity, not in the old aristocratic model of land, lineage, and inherited privilege. She is pragmatic enough to work within the existing system while quietly undermining its assumptions.

She also carries a fear she would never voice aloud: that her father was right, that keeping one's head down is the only safe strategy, and that her ambition will eventually bring the house down rather than raise it up.

### Strengths

Ârnela is a superb negotiator who reads people with the precision of a merchant reading a ledger. She understands leverage, timing, and the art of making others believe a compromise was their own idea. Her legal knowledge is deep—she drafted the Fiòrdaure-Belpòrte fishing compact herself, a document now used as a teaching text in commercial law. She is disciplined, patient, and capable of maintaining several long-term political strategies simultaneously without losing track of any of them.

## Social

Ârnela holds a seat on Fiòrdaure's charter council and chairs the harbor commission. She is a regular presence at the royal court in Aurèliane, where she represents Fiòrdaure's interests and cultivates relationships with the reform-minded faction among the Council of Peers. Her academy has given her connections to the merchant class that most minor nobles lack.

## Companions

### Patrons

- **Countess Míravel Tárveneth**: A senior member of the Council of Peers and leader of the reformist faction. She sees Ârnela as a useful ally—capable, ambitious, and expendable enough that the Countess can use her as a stalking horse for policies too controversial to champion directly. Ârnela is aware of this and accepts it as the cost of access.
- **Master Lúcen Fáravel**: The elderly head of the Panepistemium chapterhouse in Chastèlclair. He helped Ârnela establish her academy in Fiòrdaure and continues to provide instructors and texts in exchange for her political support on matters affecting the Epistemium's chartered rights.

### Enemies

- **Lord Vásquen Cortelúni**: Head of one of Fiòrdaure's older noble families and a staunch traditionalist who views Ârnela's academy as an insult to the proper order—educating commoners above their station, he says, weakens the order of society. He has blocked several of her proposals on the charter council and is quietly working to undermine her influence at court. The rivalry is conducted with impeccable Provenzian courtesy, and is dangerous all the same.
- **The Syndics of Belpòrte**: The merchant guild that governs Belpòrte resents the fishing compact that Ârnela brokered, believing she gave Fiòrdaure's fishermen too generous a share. They have retained a litigant to challenge the compact's terms, and there are rumors they have also hired less legitimate agents to gather information about Ârnela's finances and political dealings.

## Plot Hooks

1. **The Compact Under Siege**—The Syndics of Belpòrte have found a legal vulnerability in the fishing compact and are preparing a formal challenge before the royal court. If the compact is overturned, Ârnela loses her signature achievement and the political credibility built upon it. She must defend the compact while discovering who inside Fiòrdaure leaked the information the Syndics needed.

2. **The Countess's Gambit**—Countess Tárveneth asks Ârnela to publicly champion a controversial reform—extending chartered rights to two more towns—knowing it will draw fierce opposition from traditionalists. If Ârnela succeeds, the reform advances and her standing rises. If she fails, the Countess loses nothing while Ârnela absorbs the political damage. The reward may or may not justify the risk of becoming the Countess's sacrificial piece.

3. **A Scholar's Disappearance**—One of the academy's most promising instructors vanishes without notice. Investigation reveals he was conducting research into pre-Vylarian ruins in the hills above Fiòrdaure—research that may have drawn the attention of [[affiliation-ordoarcanis|the Ordo Arcanis]]. Ârnela has to handle the delicate politics of the Ordo's relationship with the Provenzian crown while finding her missing scholar before the Ordo's Quaesitorium does.

4. **The Cortelúni Marriage**—Lord Vásquen proposes a marriage alliance between his eldest son and Ârnela, framing it as a reconciliation between the traditional and reform factions in Fiòrdaure. The offer is politically astute and personally revolting. Refusing outright would insult a powerful family; accepting would yoke her to a man who despises everything she has built. She needs a third option.

5. **Debts of the Father**—A merchant from Harad arrives in Fiòrdaure with documents suggesting that Lord Pálthen Kórisvar borrowed heavily near the end of his life to cover losses that Ârnela never knew about. The debts were sold and resold, and the current holder wants payment—or the estate. The documents may be authentic, or they may be a forgery designed to destroy her. Either way, she must resolve the matter before her enemies learn of it.
