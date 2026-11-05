---
shortcode: vkrbrvrjyr
name: {full: Vikrabir Virajyara}
type: being
subType: npc
tags: [heroes-and-knaves, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier, warrior]
  occupation: Maharava
  lore: []
  culture: vedyariclt
  homes: [suryagarha]
  affiliations: {shikhalaya: {rank: 8}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 676.212
  height: 5' 11"
  weight: 176 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: greying_black
    skin_color: tawny
    complexion: [weathered]
    extra_features: [Two fingers of the left hand stiff from frostbite taken on a winter crossing]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 25}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 55}}
    - {model: weapongear-shkhlynswd}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-slkrobe}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: sohl-sohl-miscgear-ringgold}
    - {model: miscgear-passtoken}
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

Vikrabir stands 5'11" with a medium build and the posture of a man who learned to ride before he learned to read. His skin is tawny and weathered by twenty winters of open-season councils held in the cold, his black hair has gone gray at the temples, and his eyes are dark brown and steady. Two fingers of his left hand do not bend all the way; he took the frostbite on a winter crossing as a young man, and he keeps the hand in his sleeve at the Priestly Court and out of it at the Martial Council.

At court he wears the plain silk of a highland king and a wool mantle over it, never the southern brocades his treasury could buy. At his hip is a [[weapongear-shkhlynswd|Shikhalayan Steel Sword]] of the ordinary kind the march companies buy by the wagonload, which is the point of it.

# Dossier {#dossier}

## The Younger Brother

Vikrabir is the **Maharava** of [[affiliation-shikhalaya|Shikhalaya]], and he was not meant to be. His elder brother, [Jagasvar]{.name data-type="being/npc"}, was the presumptive heir, raised beside the king's Rajagorva and taught the law, the rites and the arithmetic of the customs-house. Vikrabir was given a side valley to learn on as a boy and the duties of a Samonta's son, and at nineteen he held a crossing at its head through a winter when the pass was shut to caravans and not to everyone else. He came down in the spring with his warband intact and two stiff fingers, and the chieftains of the far valleys remembered it.

When their father died thirteen years ago, the councils met at [[place-suryagarha|Suryagarha]] in the open season. The [Priestly Court]{.name data-type="affiliation/governmental"} put forward Jagasvar, as custom and the Court both expected. The [Martial Council]{.name data-type="affiliation/governmental"}, sitting on its benches with the far chieftains present, acclaimed Vikrabir. It has done the same with a younger brother before, and it did not explain itself then either.

Jagasvar lives. He keeps a house inside the second wall, attends the rites, sits where the Court seats him and has never said a word against his brother in public. The Court has never said a word against the acclamation. Both silences are complete, and both are noticed.

## Thirteen Years

Vikrabir has ruled as the Martial Council hoped and the Priestly Court feared. He keeps the crown's writ where it has always run, on the pass-roads, at the customs-house and along the terrace road, and he does not reach past it. He has not touched the question of [[place-slvrgorges|the Silver Gorges]], where the smithing clans lease the rock to [[affiliation-mrchntclctvvdyr|the Merchant Collective]] under prerogatives they hold to be older than the [[lore-passcharter|Charter of the Pass-Road]]. He keeps the crown's position that [[place-gudesroad|Guides' Road]] does not exist, as the three reigns before him did. He has made the clan-chieftains of the valleys richer by the date on the [[miscgear-passtoken|Suryagarha Pass-Token]], which is at the crown's discretion and which he has used, every season, to reward the clans that stood by him.

He is a capable king and a careful one. He is also a king whose title rests on a single afternoon's vote of a council that could, on another afternoon, have voted otherwise. Every Maharava of Shikhalaya knows that the council's acclamation is the kingdom's oldest law. Vikrabir knows it better than most, because he is the proof.

## The Next Acclamation

The two councils do not agree who is to be acclaimed after him, and both argue from [[lore-widowaccl|the Widow's Acclamation]]. The Priestly Court holds that the elder line is owed the throne and that Jagasvar's son, [Kankamar]{.name data-type="being/npc"}, is the heir it was denied. The Martial Council has not named a candidate and will not, and its senior chieftains say only that it acclaims whom it judges fit when the time comes.

Vikrabir's own son is the **Yuvarava**, holding the terrace valleys below the capital as his apprenticeship. He is twenty, well liked and untested. If the Martial Council passes him over for Kankamar, it says that Vikrabir's acclamation was a single exception and the elder line has come back to the throne. If it acclaims him, it says the younger line is the line.

Vikrabir wants the question answered while he is alive to hear the answer. He has been working toward an acclamation of the Yuvarava in his own lifetime, which the kingdom has never held, and he needs the far chieftains at Suryagarha in an open season and the Priestly Court unable to call the vote improper. The Court will call it improper. The Rajagorva, who taught Jagasvar, has said privately that a living king who asks for his successor's acclamation is asking the council to judge his own reign, and that a council asked that question may answer it.

## Psyche

### Personality

Vikrabir is patient, dry and very hard to surprise. He listens more than he speaks at either council, and when he does speak he speaks to the benches, not to the man who asked. He is courteous to his brother, generous to his brother's household and has never once been alone in a room with him in thirteen years.

He likes the open season and dislikes the closed one, when the far chieftains are snowed into their valleys and the capital belongs to the Priestly Court and the clerks. He walks the forty paces between the two halls himself rather than send a Montrin, because the walk is where the kingdom's business is done.

### Motivation

Vikrabir wants an heir acclaimed in his own lifetime, so that no council can answer his acclamation by undoing it with the next. He does not fear his brother; Jagasvar has had thirteen years and has done nothing. He fears the judgment of a council that has not yet sat, on a question it has been allowed to leave open.

### Strengths

Command of the Martial Council
: The chieftains of the far valleys acclaimed him, and he has spent thirteen years making that a sound investment. He knows which bench a man sits on and why, and which clan's tokens were dated early last season.

Knowledge of the Road
: He has crossed the wall in winter and held a pass against a raid. He reads weather, men and caravans as a pass-warden reads them, and the wardens know it.

Patience
: He has never hurried a question he could leave to the open season.

### Weaknesses

A Single Afternoon
: His title rests on a vote, and every act of his reign is shaped by the need not to give the council a reason to regret it.

The Priestly Court
: He has never won the Court and has stopped trying. It is a mistake in a kingdom where no royal act is complete without the ushtakas' sanction, and the Purohata who performs his rites is the Court's man.

His Brother's Silence
: He cannot act against a brother who has done nothing, and he cannot trust one who has done nothing for thirteen years.

## Social

### Patrons and Allies

The Martial Council
: The senior chieftains of the far valleys, who acclaimed him and whose clans have done well by it.

[[being-asvrshmbtn|Asvari Shambatan]]
: The clan-warden of [[place-suryadvar|the Sun-Door]], whose vote on the Martial Council he needs and whose clan's fee he would rather not have to protect.

### Rivals

[Jagasvar]{.name data-type="being/npc"}
: His elder brother, the Priestly Court's candidate thirteen years ago, who lives inside the second wall and has said nothing since.

The Rajagorva
: Jagasvar's teacher, whose counsel outweighs any minister's, and who holds that the elder line was wronged.

### Affiliations

[[affiliation-shikhalaya|Shikhalaya]]
: Maharava, by the Martial Council's acclamation and the rites of the ushtakas.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: A lay devotee who keeps the household rites the court requires and no more.

## Plot Hooks

The Early Date
: Vikrabir wants the far chieftains at Suryagarha in a closed season, which has never been done. He hires a party to escort the senior chieftain of the farthest valley down before the snow lifts, by a route the Osket keep, and to arrive in time for a council the Priestly Court does not know is being called.

The Brother's Letter
: A letter in Jagasvar's hand reaches the Maharava by way of the Tantsou quarter, months late and unopened. Vikrabir asks the party to learn who held it, and whether Jagasvar meant him to read it or meant him never to.

The Unwritten Crossing
: The crown holds that the Guides' Road does not exist. Vikrabir needs a packet carried over it to the far side of the wall without the customs-house, the shrines or his own Priestly Court knowing it went. The party is the packet's escort, hooded and holding a cord.
