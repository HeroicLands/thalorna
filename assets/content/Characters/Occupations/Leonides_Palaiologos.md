---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Leónidês Palaiológos
  title: ""
  given: Leónidês
  clan: Palaiológos
  home: ""
  aliases: []
packFolder: helladbyzaria
shortcode: lendspllgs
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - byzarianclt
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: null
  age: 30
  born: 690/12/15
  height: 1.96
  weight: 112
  frame: massive
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: fair
    complexion: smooth
    extra_features:
      - tattoo on arm
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 25 } }
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

Leónidês is striking in his proportions—6'5" tall with a massive, heavily muscled frame that makes him the largest man in most rooms he enters. His dark brown hair is thick and curling, worn to his collar in the Byzarian style, and his brown eyes are unexpectedly gentle in a face built for war. His fair skin is smooth and largely unmarked despite his martial profession, though a sprawling tattoo of a griffon in dark ink covers his right shoulder and upper arm—the mark of his regiment. His features are broad and heavy-boned, with a wide nose and a strong chin softened by a neatly trimmed black beard. He wears his Byzarian heavy infantry kit with obvious pride: a polished mail hauberk over a padded coat, kurbul greaves, and a broadsword that looks almost proportional in his enormous grip.

# Dossier {#dossier}

Leónidês was born in a Byzarian trading family that was more interested in commerce than he was in the family business. At seventeen, instead of accepting a position in his father's company, he took his military training into the field and joined a private military company that defended merchant convoys across the Byzarian crossroads. The Black Serpent Company was not prestigious, but they were effective, and for eight years Leónidês worked himself into a senior position through competence and a willingness to do the work others considered beneath them.

At twenty-five, the Black Serpent Company disbanded after a disastrous campaign against bandits who had political protection. Leónidês was left without a command structure and with a serpent tattoo that marked him as military personnel. He has since worked as an independent caravan escort, hiring himself out to merchants moving goods across the Byzarian territories and toward the western realms. The work is variable: sometimes it is routine protection from casual bandits, sometimes it is complex logistics involving military-grade combat, sometimes it is simply being an enormous armed presence that discourages most casual violence.

Now at thirty years old, Leónidês has established a reputation as reliable but expensive security. He has saved enough money to consider retirement within a decade, though the prospect of settled civilian life deeply unsettles him. He is professionally competent, personally isolated, and quietly haunted by the company dissolution—specifically, by the knowledge that the military leadership was corrupted by political pressure and abandoned soldiers in the field.

## Psyche

### Personality

Leónidês is quiet in the manner of a man who learned early that his size makes language unnecessary. He observes before acting, thinks before speaking, and is remarkably patient with people who are trying to communicate. When he does speak, his words carry weight because they are infrequent. He has a dry, understated appreciation for absurdity and occasionally surprises people with observations of unusual insight.

### Motivation

Leónidês wants personal autonomy more than anything else. After serving under command structures that were compromised and corrupted, he has no interest in institutional loyalty. His motivation is professional excellence and financial independence—the security of knowing that he will never need to compromise his judgment to survive. His secondary motivation, which he acknowledges rarely, is the desire to save soldiers from the kind of betrayal he experienced during the Black Serpent dissolution.

### Strengths

His combat ability is exceptional, honed through years of actual field experience rather than training ground posturing. He is strategically minded and can assess threat quickly and accurately. He is genuinely difficult to intimidate and maintains composure under extreme pressure.

## Social

Leónidês operates in the liminal space between military structures and civilian commerce. He is respected by soldiers and merchants both, but belongs fully to neither world. His Byzarian identity is evident but not particularly important to his sense of self.

## Companions

### Patrons

**Master Merchant Theodor Kantakouzenios**—A wealthy merchant who has retained Leónidês for significant operations over the past five years. Theodor recognizes Leónidês's value and pays generously, but more importantly, he does not attempt to micromanage or demand unnecessary risks. Their relationship is purely professional, but Theodor has begun suggesting that Leónidês consider permanent employment with his merchant house—a position that would provide wealth and security beyond what freelance work offers.

### Enemies

**Colonel Marian Vex**—The military officer who commanded the operational decisions that led to the Black Serpent Company's dissolution. Marian was acting under political pressure but knew what the orders would cost. He sacrificed soldiers he commanded to satisfy higher authorities. Leónidês has heard rumors that Marian was promoted for his "effective command" of a difficult situation. The knowledge that political corruption was rewarded rather than punished drives Leónidês's deepest resentment.

## Plot Hooks

1. **The Impossible Cargo**—Master Merchant Kantakouzenios asks Leónidês to escort a caravan carrying sealed containers that nobody is allowed to inspect. The cargo is valuable enough that Kantakouzenios offers double his usual rates. Leónidês agrees, but during the journey, bandits attack with tactical knowledge that suggests they knew exactly where the caravan would be and what route it would take. Leónidês fights them off, but realizes the attack was too coordinated to be coincidence. Investigation reveals that Kantakouzenios has been using his merchant operation to move restricted military supplies to political factions, and the bandits were military forces attempting to intercept the contraband. Leónidês is now caught between his respect for Kantakouzenios and his ethical opposition to military corruption.

2. **The Recruitment**—A high-ranking military officer approaches Leónidês privately and offers him a position commanding a military security operation with authority, pay, and resources far beyond what he currently has. The position is legitimate and genuinely well-intentioned. But the officer has military connections, and Leónidês recognizes that accepting the position would entangle him in the same institutional structures that compromised his judgment during the Black Serpent years. He must choose between returning to military command and maintaining his hard-won independence.

3. **The Survivor's Recognition**—A caravan escort arrives injured and alone, claiming to be a survivor of an ambush on a competing merchant's convoy. The man is Byzarian military, and Leónidês recognizes him immediately: **Ser Karos**, a lieutenant who served under him in the Black Serpent Company and survived the dissolution. Karos was reported killed in action five years ago. Now he has reappeared, claiming that the official report was false—that the soldiers were not killed in combat but deliberately executed by command to cover up the political corruption that led to the disaster. Karos has evidence but knows his life is in danger. He asks Leónidês to help him go public with the truth, which means pursuing Colonel Marian Vex through military and political channels with Karos as a witness.

4. **The Moral Compromise**—A small merchant convoy carrying medicinal goods asks Leónidês to escort them through bandit territory. The merchants are honest, the cargo is legitimate, and the payment is fair. But during the journey, Leónidês discovers that the convoy is actually a cover operation for transporting refugee families fleeing political persecution. The "medicinal goods" containers are disguised to hide people. Leónidês is now escort for refugees, which is technically illegal in several territories he will traverse. He can abandon them and maintain his neutral professional status, or commit to protecting them despite the legal risk to himself.

5. **The Old Wound Reopens**—Leónidês is contracted to provide security for a diplomatic mission in a territory where Colonel Marian Vex now commands local forces. Leónidês's presence becomes known. Marian reaches out privately with a message: he knows what Leónidês thinks of him, and he does not care. But he offers Leónidês a chance at something he has wanted since the Black Serpent dissolution—a direct military confrontation with Marian, no witnesses, no consequences. Marian seems to be offering him the opportunity to kill him with impunity. Leónidês must consider whether the offer is genuine or a trap designed to eliminate him, and whether the chance at revenge is worth compromising his integrity.
