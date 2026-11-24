---
shortcode: tuijawengyan
name: {full: Tuija Wengyan, en: [Iron Spear Piercing the Clouds]}
type: being
subType: npc
description: >-
  Forty-four-year-old Wohou general of the Empire of Tantsou turned rebel—condemned for a disobedience that won the battle it defied, and now leading the revolt that condemnation made inevitable.
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Rebel general
  lore: [wohou]
  culture: tantsouclt
  homes: [tantsouregin]
  affiliations: {tantsouempr: {rank: 0}}
  gender: male
  species: humanflk
  born: "675.122"
  died: null
  height: 5' 9"
  weight: 152 lbs
  frame: light
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: [a pale line across the throat where a rank-cord once crossed it]
  packFolder: threats
  items:
    - key: plcui
      model: armorgear-plcui
      name: "Lacquered harness stripped of every badge of rank"
      kind: armor
    - {key: brdswd, model: weapongear-brdswd, name: "Sword", kind: weapon}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 66}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 22}}
    - {model: skill-tantsoulng, system: {masteryLevelBase: 84}}
    - {model: skill-tengchouscript, system: {masteryLevelBase: 50}}
    - {key: plcui, model: sohl-sohl-armorgear-plcui}
    - {key: brdswd, model: sohl-sohl-weapongear-brdswd}
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
      weight: {base: 152, calc: "(9 * str) + 50"}
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

A lean man of forty-four, 5'9" tall, in a [[lore-wohou|Wohou]] officer's lacquered harness stripped of every badge of rank, stands with his weight square over his feet as if the ground might be taken from him. His face is hard and closed; a pale line where a rank-cord once crossed his throat has never tanned. He speaks with the precise courtesy of the imperial staff and gives orders without raising his voice.

# Dossier {#dossier}

Tuija Wengyan, granted the name Iron Spear Piercing the Clouds for his service, was one of the most respected generals of the Wohou caste. He is now the empire's most dangerous rebel, and the court made him one.

## Background

**The disobedience.** On a critical campaign he received a direct imperial order to hold his position. He judged it a mistake, attacked, and won. The victory was the problem: a battle won by defying an order is proof the order was wrong, and an imperial order cannot be wrong without the [[lore-mandatehvn|Mandate]] behind it being questioned. The court stripped him of his rank and exiled him, and the registry recorded the victory under another commander's name.

**The exile.** He did not accept it. In exile he gathered soldiers disaffected by the purge that followed him and minor [[lore-zhazho|Zhazho]] nobles with grievances of their own against the court. The nobles brought their [[lore-wanduo|Wandwo]] with them, because a Zhazho's sorcerers go where their owner goes.

**The rebellion.** He means to return, not as the empire's servant but as its conqueror. His forces have made real gains in the border provinces, and the alliance that carried them there is beginning to crack.

## Psyche

### Personality

Proud, controlled and exact. He was a great general because he was right more often than his superiors, and he has never learned to hide that he knows it.

### Motivation

To be proved right. He wants the empire to admit that the order was wrong, and he has come to believe that only a new throne will ever admit it.

### Strengths

A first-rate commander who knows the imperial army's doctrine from the inside, its officers by name and its supply routes by heart. He understands the [[lore-weizhairui|Wei Zhai Rwi]] well enough to see his allies playing it against him.

### Weaknesses

He needs nobles he does not trust and sorcerers he does not own. His rebellion has no claim to the Mandate except his own grievance, and every province he takes he must hold with someone else's troops.

## Social

### Patrons

[Zhauwei Lengzhai]{.name data-type="being/npc"}
: called the Radiant Phoenix, the shrewd matriarch of the [Zhauwei clan]{.name data-type="affiliation/lineage"}, who wants her family's influence back after years of decline. Her Wandwo work fire and earth. She favors open battle and thinks Tuija a necessary tool to be put down once the work is done.

[Wenzhau Wengdau]{.name data-type="being/npc"}
: called Wind's Roar, the young head of the [Wenzhau clan]{.name data-type="affiliation/lineage"}, too impatient to wait out his family's slow rehabilitation at court. His Wandwo work air and spirit. He prefers subterfuge, and he also thinks Tuija expendable.

### Enemies

The imperial court
: the officials who condemned him, and the commander whose name the registry gave his victory.

### Affiliations

The rebellion
: his own command, held together by his generalship and the two clans' sorcerers. Tuija plays the two nobles against each other to keep either from taking it from him, and both have begun quietly to look for escape routes and friends beyond the borders, because a failed rebellion ends for each of them in torture and execution.

## Plot Hooks

The True Record
: A clerk in a provincial archive has found the original battle report, with Tuija's name on the victory. Both the rebels and the court want it, for opposite reasons.

The Matriarch's Exit
: Zhauwei Lengzhai wants safe passage out of the empire for her heirs before the rebellion's luck turns, and she will pay with Tuija's plans.

Sorcerers Without Owners
: Two of Wenzhau Wengdau's Wandwo have slipped away from his camp and are trying to reach [[affiliation-hazhao|Ha Zhau]], the Shadow Sect. Their owner, the rebels and the throne all want them back.

The Northern Envoy
: An envoy from [[being-wogenhenzhuo|Wogen Henzhwo]] reaches the rebel camp. Tuija must decide whether a steppe army in the north is an ally or the end of the empire he means to rule.

## See Also

[[being-wogenhenzhuo|Wogen Henzhwo]]
: the northern warlord whose war could meet the rebellion

[[affiliation-yanchaizhao|Yanchai Zhau]]
: a fallen noble house of the court

[[lore-weizhairui|Wei Zhai Rwi]]
: the court's game, played even inside the rebellion

[[affiliation-tantsouempr|Empire of Tantsou]]
: the authority he broke with
