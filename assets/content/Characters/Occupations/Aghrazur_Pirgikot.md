---
shortcode: aghrzrpyrgkt
name: {full: Ághrazur Pirgikot}
type: being
subType: npc
description: "A Bizarian caravan escort of enormous size and long field service, who sells his sword to merchants crossing the Bizarian lands and works free of any army."
tags: [draft, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Man-at-Arms
  lore: []
  culture: byzarianclt
  homes: [byzariargn]
  affiliations: {byzarianlg: {rank: 3}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "690.350"
  height: 6' 5"
  weight: 247 lbs
  frame: massive
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: fair
    complexion: [smooth]
    hair_texture: curly
    facial_hair: short_beard
    nose: broad
    extra_features: [tattoo on arm]
  packFolder: helladbyzaria
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 47}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
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

Ághrazur Pirgikot is striking in his proportions—6'5" tall with a massive, heavily muscled frame that makes him the largest man in most rooms he enters. His dark brown hair is thick and curling, worn to his collar in the [[lore-byzarianclt|Bizarian]] style, and his brown eyes are unexpectedly gentle in a face built for war. A sprawling serpent tattoo in dark ink covers his right shoulder and upper arm, the mark of the [Black Serpent Company]{.name data-type="affiliation/venture"}. His features are broad and heavy-boned, with a wide nose and a strong chin softened by a neatly trimmed black beard. He wears a polished mail hauberk over a padded coat, kurbul greaves, and a broadsword that looks almost proportional in his enormous grip.

# Dossier {#dossier}

Ághrazur was born in a Bizarian trading family that was more interested in commerce than he was in the family business. At sixteen, instead of accepting a position in his father's company, he took his military training into the field and joined a private military company that defended merchant convoys across the [[place-byzariargn|Bizaria Region]] crossroads. The Black Serpent Company was not prestigious, but they were effective, and for eight years Ághrazur worked himself into a senior position through competence and a willingness to do the work others considered beneath them.

At twenty-four, the Black Serpent Company disbanded after a disastrous campaign against bandits who had political protection. Ághrazur was left without a command structure and with a serpent tattoo that marked him as military personnel. He has since worked as an independent caravan escort, hiring himself out to merchants moving goods across the Bizarian territories and toward the western realms. The work is variable: sometimes it is routine protection from casual bandits, sometimes it is complex work involving military-grade combat, sometimes it is simply being an enormous armed presence that discourages most casual violence.

Now at twenty-nine years old, Ághrazur has established a reputation as reliable but expensive security. He has saved enough money to consider retirement within a decade, though the prospect of settled civilian life deeply unsettles him. He is highly competent at his work, personally isolated, and quietly haunted by the company dissolution—specifically, by the knowledge that the military leadership was corrupted by political pressure and abandoned soldiers in the field.

## Psyche

### Personality

Ághrazur is quiet in the manner of a man who learned early that his size makes language unnecessary. He observes before acting, thinks before speaking, and is patient with people who are trying to communicate. When he does speak, his words carry weight because they are infrequent. He has a dry, understated appreciation for absurdity and occasionally surprises people with observations of unusual insight.

### Motivation

Ághrazur wants personal autonomy more than anything else. After serving under command structures that were compromised and corrupted, he has no interest in institutional loyalty. His motivation is excellence at his work and financial independence—the security of knowing that he will never need to compromise his judgment to survive. His secondary motivation, which he acknowledges rarely, is the desire to save soldiers from the kind of betrayal he experienced during the Black Serpent dissolution.

### Strengths

His combat ability is outstanding, honed through years of actual field experience rather than training ground posturing. He thinks ahead and can assess threat quickly and accurately. He is difficult to intimidate and maintains composure under extreme pressure.

## Social

Ághrazur operates in the liminal space between military structures and civilian commerce. He is respected by soldiers and merchants both, but belongs fully to neither world. His Bizarian origin is evident but not particularly important to him.

## Companions

### Patrons

**Master Merchant [Storon Kantakouzenios]{.name data-type="being/npc"}**—A wealthy merchant who has retained Ághrazur for significant operations over the past five years. Storon recognizes Ághrazur's value and pays generously, but more importantly, he does not attempt to dictate every step or demand unnecessary risks. Their relationship is purely one of business, but Storon has begun suggesting that Ághrazur consider permanent employment with his merchant house—a position that would provide wealth and security beyond what freelance work offers.

### Enemies

[Nikómarzan Varakazur]{.name data-type="being/npc"}—The military officer who commanded the operational decisions that led to the Black Serpent Company's dissolution. Nikómarzan was acting under political pressure but knew what the orders would cost. He sacrificed soldiers he commanded to satisfy higher authorities. Ághrazur has heard rumors that Nikómarzan was promoted for his "effective command" of a difficult situation. The knowledge that political corruption was rewarded rather than punished drives Ághrazur's deepest resentment.

## Plot Hooks

Sealed Crates at Double Rates
: Master Merchant Storon Kantakouzenios hires Ághrazur at twice his usual rate to escort a caravan of sealed crates that nobody may open. Bandits then strike with exact knowledge of the route and the day, and Ághrazur must decide whether to keep guarding a cargo he cannot inspect.

The Lieutenant Who Was Reported Dead
: An injured man staggers into a caravan camp and proves to be [[being-mazhreliongh|Mazhrelion Ghotidek]], Ághrazur's lieutenant, reported killed five years ago. He says the official report is false and asks Ághrazur to help him carry his evidence against Nikómarzan Varakazur to a public hearing, at the risk of both their lives.

A Place in the House
: Storon Kantakouzenios offers Ághrazur permanent employment with his merchant house, with wealth and security no freelance contract gives. Taking it binds him to one master again, and refusing risks the best patron he has had in five years.

:::secret {title="Further hooks"}
What Kantakouzenios Moves
: The sealed crates Kantakouzenios has Ághrazur guard hold restricted military supplies bound for a political faction, and the bandits are soldiers sent to seize them. Ághrazur must choose between his respect for his best patron and his hatred of military corruption.

The Report Mazhrelion Carries
: The Black Serpent soldiers listed as killed in action were executed on command to cover the political corruption behind the disaster. Mazhrelion holds evidence of it, and his life is in danger for it.

:::
