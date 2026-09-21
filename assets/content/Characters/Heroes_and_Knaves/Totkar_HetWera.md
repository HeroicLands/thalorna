---
tags:
  - heroes-and-knaves
  - guilded
  - administration
  - character
name:
  full: Tot'kar Het'Wera
  title: ""
  given: Tot'kar
  clan: Het'Wera
  home: meruhotep
  aliases:
    - Totkar HetWera
packFolder: northernfertileregiontakheperu
shortcode: totkarhtwr
type: being
data:
  banner: takheperubnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Litigant
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: male
  species: null
  age: 48
  birthday: 672/9/17
  height: 1.78
  weight: 66.7
  frame: heavy
  appearance:
    eye_color: hazel
    hair_color: graying_black
    skin_color: tawny
    complexion: null
    extra_features:
      - a tattoo of a leaf on the wrist
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-thoth }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 17 } }
    - { model: skill-demtkscrpt, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-armorgear-slkshirt }
    - { model: sohl-sohl-armorgear-sgtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-slkclk }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 1 } }
    - name: Leather satchel for legal documents
      type: miscgear
      system:
        shortcode: leathersatchel
        weight: 1
        value: 100
        durability: 3
    - name: Legal texts and reference volumes
      type: miscgear
      system:
        shortcode: legaltexts
        weight: 2
        value: 100
        durability: 3
    - name: Writing materials (parchment, ink, quills)
      type: miscgear
      system:
        shortcode: writingmaterials
        weight: 0.5
        value: 100
        durability: 3
    - name: Case notes and case files
      type: miscgear
      system:
        shortcode: casenotesandcase
        quantity: 1
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchlg }
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

**Home:** [[place-meruhotep|Meru-Hotep]]

# Appearance {#appearance}

![[totkarhtwr|Tot'kar Het'Wera]]{float: top-left}

A big man gone soft in the way of men who sit all day over documents: Tot'kar is 5'10", heavy, tawny-skinned, with black hair and brows going gray, green-brown eyes, and a diamond-shaped face with a prominent nose and a narrow chin, generous lips, high-set brows, angular cheeks. A leaf is tattooed on one wrist.

# Dossier {#dossier}

## Background

### The Scholar's Path

Opposing counsel, on learning that Totkar will speak for the other side, have been known to offer terms the same afternoon. It has happened often enough that he has stopped finding it flattering.

He was born in 676 to a merchant family of no great standing, and was so quick with words and logic that his family, instead of putting him to the trade, bound him to a litigant: Master Litigant Amenhophis, a man of great gifts and greater honesty. Under him Totkar learned the vast codes of [[affiliation-empirtkhpr|Ta'Kheperu]]'s empire and the ideas underneath them, which Amenhophis thought the more important. He had seven languages and the legal traditions of several realms before he was twenty.

### The Rise to Prominence

Twenty years on he is one of the empire's most respected litigants, a name that reassures a client and makes the other side careful. He takes cases other litigants call lost, he takes them for the justice in them rather than the fee, and he wins them more often than the odds say he should. Scholars in other lands write to him, and his written readings of the codes have begun to turn up in judgements far from Ta'Kheperu.

### The Burden of Knowledge

It has cost him. He feels his clients' wrongs with a rawness he has never learned to manage, and the more clearly he sees an injustice the more it wears. He has begun to wonder whether the law can deliver justice at all, or whether he only works the rules for a slightly better outcome inside something rotten through. He keeps a modest house, has never married, and has no life that is not the practice.

## Psyche

### Personality

He talks the way he writes, in complete sentences, chosen. He seems unable to be casual. His mind is always at work on the inconsistency in what was just said and the consequence nobody has mentioned yet, and the same mind, turned on a client's suffering, feels it far more than his composure shows.

He is humble for a man of his standing, because he knows exactly how much the law cannot do. His faith in Thōth, god of wisdom and knowledge, is deep and rather austere: the god's pursuit of the whole truth is the standard he holds his practice to, and the certainty of falling short is part of the faith. He keeps a daily discipline of study and meditation and brings the same discipline to a brief.

With people he is warm and reserved, with long silences while he chooses words. He has a few friends, held very close. His humour is dry and turns up without warning in the middle of something grave. Colleagues respect him and some fear him; his standards are exacting and he has no time for a shortcut or a lazy argument.

### Motivation

Justice — not the procedure, the thing itself, the outcome that matches the right of the matter. Every case he takes is a wager that the truth can be found and made to count, that law can shelter the weak, that his gifts are for the people who have no voice in the rooms where power sits. He is hungry for the questions too; each case is a new place where law meets a human life. He has started to teach, wanting younger litigants to hold the practice to a standard. And under all of it, lately, is dread: that what he does is a small resistance to a corruption too large to touch, and that he has no proof otherwise.

### Strengths

- **Comprehensive Legal Mastery**: The codes of Ta'Kheperu, the laws of several neighbouring realms, and the principles under them; nobody in the empire disputes him on the law.
- **Logical Brilliance**: He finds the flaw and builds the argument, and against ordinary opposing counsel he does not lose.
- **Linguistic Virtuosity**: Seven languages, with a real understanding of how each people thinks about law, so he can defend a foreigner in a foreign court.
- **Ethical Integrity**: He will not cut a corner, and judges know it, which is why his arguments are believed.
- **Understanding of People**: He grasps what his clients have actually lived through, and the argument he builds has that in it as well as the law.
- **Disciplined Scholar**: His research is exhaustive and his briefs are models; judges have said so from the bench.

### Weaknesses

- **Emotional Vulnerability**: He carries his clients' wrongs home, and the weight has become depression and a kind of spiritual exhaustion.
- **Too Little Pragmatism**: He takes cases that cannot be won and challenges powers that cannot be beaten, and the defeats are heavy.
- **Isolation**: His reserve and his learning keep people at a distance; he has no wife and few friends outside the practice.
- **Cynicism About the Law**: He knows what the law cannot fix, and the knowledge is eating his faith that it can fix anything.
- **Physical Vulnerability**: A sedentary life; no training; no use in a fight.
- **Compulsive Perfectionism**: He is intolerant of sloppiness in others and can freeze over the perfect argument when a sufficient one would do.

## Social

### Patrons

- **Priestess Seshat**: High priestess of Thōth's temple and a scholar of law herself; she engages him for the temple's cases, consults him on religious jurisprudence, and has become his spiritual adviser.
- **The Widow Nebuia**: He took her case for nothing, years ago, and won her family's property and standing back. She sends him cases and speaks of him everywhere.
- **Lord Magistrate Khenti**: The city's chief judge, who respects him, favours him quietly in scheduling and procedure, and asks his view on hard questions of interpretation.
- **Master Scribe Amenhotep**: Once a rival, now a colleague; they work together on the most tangled matters.

### Enemies

- **The Bureaucratic Ministry**: Ministers whose corruption he has exposed and whose authority he has questioned; they work, without saying so, to discredit him and keep certain cases from reaching him.
- **Litigant Djehuty**: Rich, unscrupulous, and beaten by Totkar many times; he has begun to threaten Totkar's clients quietly, to frighten him off cases against him.
- **The Conservative Faction**: Legal scholars of the old school who think his challenges to settled readings, and his choice of clients, a danger to the law's stability.

### Affiliations

- **Litigant's Guild**: A senior member, on the ethics committee, sounded out for leadership; his standards shape the guild's.
- **The Order of Thōth**: A committed lay member, active in its scholarly circles, writing on where divine wisdom and human justice meet.

## Plot Hooks

1. **The Case of Impossible Innocence**: A young person convicted of murder by what looks like perfect procedure has asked him to appeal. Every piece of evidence says guilty; every witness agrees; his own first inquiry agreed. The desperation is real, and he has come to believe the conviction was built — by the magistrate and the prosecutors together, to hide something larger. To win, he will have to show the court's own corruption to a court.

2. **The Scholar's Rival**: Master Amenhophis, thought dead for more than ten years, has come to the city old and ill with a claim: that his whole practice was steered from the shadows by an organisation using the law for its own politics, and that Totkar's has been too. They have begun to look, and the trail runs through several realms and suggests that some of Totkar's finest victories served people he would have fought. He is not sure he wants to know the end of it.

3. **The Contract with Consequences**: A woman whose daughter was enslaved by legal means has found a flaw in the code that would free the girl — if Totkar argues a reading that would unsettle a great deal of commerce and bring the merchant houses down on both of them. The fee is enormous, and the enslavement was, technically, unlawful. Winning would set a precedent that could be turned against the very people he usually defends.

4. **The Revelation of Authorship**: He has found reason to think that Amenhophis, who shaped much of the empire's present law, upheld a false reading for decades to protect a merchant dynasty whose founder once saved his life. Exposing it would destroy the man he reveres and shake laws that rest on his readings. Not exposing it makes Totkar what he has spent his life refusing to be.
