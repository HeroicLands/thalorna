---
shortcode: arnelkrsvr
name: {full: Arnela Kórisvar}
type: being
subType: npc
description: "The head of the Kórisvar house of Lizela, who founded a school, chairs the harbor commission and must give the town's answer to the crown's salt loan."
tags: [administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier]
  occupation: Nobility (Manor Lord)
  lore: []
  culture: provenzianclt
  homes: [lizela]
  affiliations:
    kngdmprvnz: {rank: 5}
    ardavon: {rank: 1}
    hsekorisvar: {rank: 2, office: Head of House Kórisvar}
  socialTies: {being-kiramailthor: patron, being-aurentheorth: rival}
  gender: female
  species: humanflk
  born: 678.164
  height: 5' 6"
  weight: 134 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: auburn
    skin_color: medium
    complexion: [smooth]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 51}}
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

Arnela Kórisvar is a 41-year-old woman who stands 5'6" tall and is of medium build. Her auburn hair falls in ringlets she does not bother to pin, her medium-toned skin is smooth, and her wide-set hazel eyes are open and attentive, the eyes of a woman who listens to the end of a sentence. She has a straight nose, full lips and an angular jaw, and she dresses well enough for the council and no better.

# Dossier {#dossier}

Arnela Kórisvar is the head of the [[affiliation-hsekorisvar|Kórisvars]], a minor noble house of [[place-lizela|Lizela]], the salt town on the southern coast. She holds the Kórisvar estate, sits on the town's charter council, chairs its harbor commission and keeps a small school, and she has made a house that spent generations avoiding notice interesting to everyone.

## The Kórisvar Name

The Kórisvars built their wealth on coastal trade and the salt pans east of the town. Arnela's father, [[being-lordhemekoris|Dolvere Kórisvar]], was a cautious man who kept his head down through the long maneuver between the crown and the [[affiliation-councilpeers|Council of Peers]]. He died when Arnela was twenty-six and left her an estate that was solvent and unremarkable: a manor on the hill above the harbor, a handful of tenant farms, fishing rights along the coast and a council seat nobody coveted.

## A Different Kind of Ambition

Within a year of inheriting, Arnela used the estate's modest income to found a small, practical school in Lizela, teaching navigation, natural philosophy and commercial law to the sons and daughters of merchants and tradesmen. In a kingdom where noble prestige is measured by patronage the move was shrewd, and it was also sincere. The school cost little, won the goodwill of the merchant houses and gave her a name as a patron of learning.

She has since turned that name into influence. She brokered the fishing compact between Lizela and [[place-kalveza|Kalveza]], which is now a teaching text in commercial law, and she has twice represented Lizela at court in [[place-jalnazdal|Jalnasdal]], where she keeps a modest townhouse. She has never married, and those who know her well enough to ask know better than to.

## The Salt Loan

The salt has made her quarrels dangerous. The crown's treasurer has asked the coastal houses for a loan against the salt revenue, and Lizela's pans are the salt revenue. A loan the Council never voted is a levy by another name under the [[lore-chrtrrghts|Charter of Rights]], and whichever answer Lizela gives places it in the contest at Jalnasdal that its houses have always kept out of. Lord [[being-aurentheorth|Aurente Ortemandis]], head of the oldest family in the town, means to answer whichever way she does not.

## Psyche

### Personality

Arnela is precise, composed and relentlessly practical. She listens more than she speaks and chooses her words with care, because in Provénzian politics a careless sentence can undo a year's work. She can charm when it serves her, but her natural mode is directness: she states what she wants and negotiates from there. She has a real interest in ideas, reads widely and writes to the scholars of the [[affiliation-panepistmm|Epistémion]] chapterhouse at [[place-durvalis|Durvalis]], and she spends evenings debating with her instructors when she should be reviewing accounts.

### Motivation

Arnela wants to build something that outlasts her, and to make the Kórisvar name mean more than a minor house with fishing rights. The school is the seed. The deeper aim is to show that Provénzia's future lies in practical learning and broad prosperity, and she is pragmatic enough to work inside the old order while undermining its assumptions. She carries a fear she would never voice: that her father was right, and that her ambition will bring the house down.

### Strengths

She is a superb negotiator who reads people as a merchant reads a ledger, understands leverage and timing, and makes others believe a compromise was their own idea. Her knowledge of commercial law is deep, and she can keep several long strategies in hand at once.

### Weaknesses

She has made herself useful to people more powerful than she is, and they treat her as expendable.

## Social

### Companions

The instructors of her school, and the merchant families whose children it teaches.

### Patrons

[[being-kiramailthor|Kirama Iltoris]]
: A countess, a Peer and the leader of the Council's reformist faction, who sees Arnela as a useful ally, capable, ambitious and expendable enough to carry policies too controversial to champion directly. Arnela knows it and accepts it as the price of access.

[Lucen Fáravel]{.name data-type="being/npc"}
: The elderly head of the Epistémion chapterhouse at Durvalis, who helped her found the school and still sends instructors and texts in return for her support on matters touching the Epistémion's chartered rights.

### Enemies

[[being-aurentheorth|Aurente Ortemandis]]
: Head of the oldest family in Lizela and a traditionalist, who holds that educating commoners above their station weakens the order of society. He blocks her proposals on the charter council and works against her at court, always with impeccable courtesy.

Kalveza's charter council
: Its members resent the fishing compact, believing Arnela gave Lizela's fishermen too generous a share. They have retained an advocate to challenge its terms, and it is said they have hired less respectable agents to look into her finances.

### Affiliations

- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: Arnela is of the Lesser Nobility and holds the Kórisvar estate.
- **[[affiliation-hsekorisvar|House Kórisvar]]**: She is its head.
- **[[affiliation-ardavon|Faith of Árdavon]]**: She keeps the god's festivals as her house always has.

## Plot Hooks

The Answer to the Treasurer
: Arnela must give Lizela's answer to the crown's loan before the council votes, and both the crown's men and the Peers' have come to Lizela to learn it first. She wants a party to find out which of her own council colleagues is selling her letters to Aurente.

The Compact Under Siege
: Kalveza's advocate has found a weakness in the fishing compact and will bring it before the high courts at [[place-aureliane|Aurelane]]. Arnela must defend it, and learn who inside Lizela gave Kalveza what it needed.

The Countess's Gambit
: Kirama Iltoris asks Arnela to champion the chartering of two more towns before the Council, knowing it will draw fierce opposition. If Arnela wins, the reform advances and her standing rises; if she loses, the countess loses nothing.

A Scholar's Disappearance
: One of the school's best instructors has vanished. He was studying [[place-ruinslizela|the ruins in the hills above Lizela]], older than the Vilérians, and his work may have drawn the attention of [[affiliation-ordoarcanis|the Thordimalon]]. Arnela must find him before the Order's enforcers, [[affiliation-sekran|the Sekran]], do.

The Ortemandis Match
: Aurente proposes a marriage between his younger brother and Arnela, as a reconciliation of the old families and the new. Refusing outright would insult the oldest house in the town; accepting would yoke her to a family that despises what she has built.

Debts of the Father
: A merchant from [[place-taruzelrgn|Taruzel]] has come to Lizela with papers saying Dolvere Kórisvar borrowed heavily near the end of his life, and that the debts were sold until they reached him. He wants payment or the estate. The papers may be genuine or a forgery meant to ruin her.
