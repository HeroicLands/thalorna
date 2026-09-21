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
  birthday: 678/6/12
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

Lady Ârnela Kórisvar, 42, is 5'6" with a moderate build and an oval face — soft cheekbones, a wide forehead, an angular jaw and a firm chin. Wide-set hazel eyes under arched brows give her an open look that is not the same as an unguarded one. A straight nose, full lips. Medium-toned, smooth skin; auburn hair worn in ringlets.

# Dossier {#dossier}

## Background

### The Kórisvar Name

The Kórisvars are a minor noble house of Fiòrdaure whose money comes from the coastal trade and the salt flats east of the town. Ârnela's father, Lord Pálthen Kórisvar, was a cautious man who kept his head down through the last decades of manoeuvring between the crown and the Council of Peers, and when he died — she was twenty-six — he left her an estate that was solvent and not much more: the manor house on the hill above Fiòrdaure's harbour, a handful of tenant farms, fishing rights along a stretch of coast, and a seat on the town's charter council that nobody much wanted.

### A Different Kind of Ambition

Ârnela had what her father lacked. Within a year of inheriting she had spent the estate's modest income on a small academy in Fiòrdaure — not a grand foundation but a practical school of navigation, natural philosophy and commercial law, for the sons and daughters of merchants and skilled tradesmen. In Provènzia, where a noble's standing is measured in patronage, it was a shrewd purchase. The academy cost little to keep, earned the goodwill of the merchant class, and gave her the name of a forward-looking patron of learning, which is exactly the coin the Council of Peers trades in.

The name has since bought real influence. She brokered the fishing-rights compact now in force between Fiòrdaure and Belpòrte, she chairs the town's harbour commission, and twice she has been chosen to speak for Fiòrdaure before the royal court. By the measure of the great Provenzian houses she is not rich. She is effective, and in a kingdom that prefers negotiation to force, that counts for more than gold.

### Present Circumstances

At forty-two, Ârnela runs the estate, the academy and her political obligations with a discipline that leaves little room for anything else. She has never married. Whether that is choice or circumstance she does not say, and the people close enough to ask know not to. She divides her time between the manor at Fiòrdaure and the court at Aurèliane, where she keeps a modest townhouse and a growing web of allies and debts.

## Psyche

### Personality

Ârnela is precise, composed and relentlessly practical. She listens more than she talks, and chooses her words like someone who has learned that in Provenzian politics one careless sentence can undo a year. She can be charming when charm is useful; her natural mode is directness — say what she wants, then negotiate. People who take the calm for passivity find out their mistake quickly.

She has a real interest in ideas, not only as instruments. She reads widely, keeps up a correspondence with scholars at the Panepistemium chapterhouse in Chastèlclair, and has been known to spend an evening arguing natural philosophy with her academy's masters when the accounts were waiting. It is a strength, and an indulgence she cannot always afford.

### Motivation

She wants to build something that outlasts her — to make the Kórisvar name mean more than a minor house with fishing rights. The academy is the seed of it. The larger aim is to show that Provènzia's future lies in practical learning and broad prosperity rather than in land, lineage and inherited privilege, and she is pragmatic enough to work inside the old system while quietly undermining what it assumes.

Under the calculation is a fear she would never speak aloud: that her father was right, that keeping one's head down is the only safe course, and that her ambition will bring the house down rather than raise it.

### Strengths

Ârnela is a negotiator of the first order who reads people the way a merchant reads a ledger. She understands leverage and timing, and the art of letting the other side believe the compromise was their own idea. Her law is strong — she drafted the Fiòrdaure-Belpòrte fishing compact herself, and it is now used as a teaching text in commercial law. She is disciplined, patient, and able to carry several long political games at once without dropping any of them.

## Social

Ârnela holds a seat on Fiòrdaure's charter council and chairs its harbour commission. She is a familiar presence at the royal court in Aurèliane, where she speaks for Fiòrdaure and cultivates the reform-minded faction of the Council of Peers. The academy has given her connections to the merchant class that most minor nobles do not have.

## Companions

### Patrons

- **Countess Míravel Tárveneth**: A senior member of the Council of Peers and leader of its reformist faction. She sees Ârnela as a useful ally — able, ambitious, and expendable enough to be run out ahead of policies too contentious to champion herself. Ârnela knows this and accepts it as the price of access.
- **Master Lúcen Fáravel**: The elderly head of the Panepistemium chapterhouse in Chastèlclair. He helped Ârnela found her academy and goes on supplying masters and texts, in return for her political support wherever the Epistemium's chartered rights are in question.

### Enemies

- **Lord Vásquen Cortelúni**: Head of one of Fiòrdaure's older noble houses and a thorough traditionalist, who takes Ârnela's academy as an insult to the proper order — teaching commoners above their station, he says, loosens the whole weave of society. He has blocked several of her proposals on the charter council and is quietly working against her at court. The rivalry is conducted with perfect Provenzian courtesy, and is exactly as dangerous as it would be without.
- **The Syndics of Belpòrte**: The merchant guild that governs Belpòrte resents the fishing compact and holds that Ârnela gave Fiòrdaure's fishermen too generous a share. They have retained a litigant to challenge its terms, and there are rumours of less legitimate agents hired to look into her finances and her dealings.

## Plot Hooks

1. **The Compact Under Siege** — The Syndics of Belpòrte have found a legal weakness in the fishing compact and are preparing a formal challenge before the royal court. If it falls, Ârnela loses her signature achievement and the political credit built on it. She has to defend the compact while finding out who inside Fiòrdaure gave the Syndics what they needed.
2. **The Countess's Gambit** — Countess Tárveneth asks Ârnela to champion, in public, a contentious reform — chartered rights for two more towns — knowing it will draw the traditionalists' full weight. If it carries, the reform advances and Ârnela rises. If it fails, the Countess loses nothing and Ârnela takes the whole of the damage. The question is whether the prize is worth being the Countess's sacrificial piece.
3. **A Scholar's Disappearance** — One of the academy's most promising masters vanishes without word. He turns out to have been investigating pre-Vylarian ruins in the hills above Fiòrdaure — work that may have drawn the Ordo Arcanis's attention. Ârnela has to thread the Ordo's relationship with the Provenzian crown, and find her scholar before the Ordo's Quaesitorium does.
4. **The Cortelúni Marriage** — Lord Vásquen proposes a match between his eldest son and Ârnela, dressed as a reconciliation between Fiòrdaure's old and new factions. Politically it is astute and personally it is revolting. Refuse outright and insult a powerful house; accept and be yoked to a man who despises everything she has built. She needs a third way.
5. **Debts of the Father** — A merchant from Harad arrives in Fiòrdaure with papers suggesting that Lord Pálthen Kórisvar borrowed heavily near the end of his life to cover losses Ârnela never knew of. The debts have been sold and sold again, and the present holder wants payment or the estate. The papers may be real; they may be a forgery made to ruin her. Either way the matter has to be settled before her enemies hear of it.
