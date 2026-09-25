---
tags:
  - blackpine-wolves
  - brigand
  - vrystwald
  - underworld
  - character
name:
  full: Hródar Arnthúl
  title: ""
  given: Hródar
  clan: Arnthúl
  aliases:
    - the Crow
packFolder: ankarisvrystwald
shortcode: hrodrrnthl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Brigand
  stations: []
  lore:
    - varokhiclt
    - slavernk
  homes:
    - vrystwald
  affiliations:
    - blckpnwlvs
    - vrystwldtrbs
  gender: male
  species: humanflk
  born: 690/12/7
  height: 1.82
  weight: 76.5
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: light
    complexion: pale
    extra_features:
      - gaunt angular face
      - long arms that give him a gangly look
      - perpetual scowl
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: affiliation-thorr }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-weapongear-haxe }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-psht }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-ltcowl }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 9 } }
    - { model: sohl-sohl-miscgear-medsupil, system: { quantity: 3 } }
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
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

![[hrodrrnthl|Hródar Arnthúl]]{float: top-left}

Hródar Arnthúl is a tall, gaunt man with the angular look of a half-starved crow, which is how he got his nickname. He has long arms, bony wrists, and a narrow face set in a perpetual scowl beneath a leather cowl. His black hair is lank and unwashed, his skin pale from a life lived under the canopy of the [[place-vrystwald|Vrystwald]] pines, and his dark brown eyes hold a sullen, simmering resentment that never quite boils over but never cools. He wears a padded shirt under a leather vest, dark boots, and carries a handaxe and a dagger. He moves through the forest with a long-limbed, loping stride that covers ground quickly and quietly. He rarely speaks unless spoken to, and when he does, his voice is flat and grudging.

# Dossier {#dossier}

Hródar was a timber cutter's son from a logging settlement in the deep pine country. His family worked the imperial timber concession—felling and dragging pine logs to a river depot where Vylarian agents paid a fraction of their worth and called it fair. It was a hard, honest life, and Hródar might have lived it without complaint had the concession not been sold to a Vylarian senator's factor who halved the already miserable wages and doubled the quotas.

When Hródar's father was killed by a falling tree—exhausted, rushing to meet an impossible deadline—the twenty-year-old confronted the factor and broke his jaw. He fled into the forest that same day, knowing the garrison would come. He spent years drifting between illegal logging camps, poaching outfits, and seasonal labor, growing harder and more bitter with each passing winter. He joined the Blackpine Wolves eighteen months ago, recruited by Vandaric in a border tavern, and has proven himself a dependable fighter and woodsman—silent, tough, and willing to do what needs doing without being asked twice.

He is the gang member most driven by genuine grievance. He hates the [[affiliation-vylarinmpr|Vylarian Empire]] with a focused, personal fury that the others—motivated by greed, desperation, or indifference—cannot match. Every merchant he robs is a proxy for the factor who killed his father through negligence, and every Vylarian soldier he fights is an agent of the system that ground his family into the dirt.

# Skills and Abilities

Hródar is a solid, workmanlike fighter—not brilliant, but reliable and hard to put down. His melee skill with the handaxe is good, and his survival and tracking abilities reflect a lifetime in the deep forest. He is a capable climber and moves quietly through woodland. His timber-cutting background gives him practical knowledge of woodworking and an instinctive understanding of the forest. He is a competent archer. He lacks social skills almost entirely and is useless in any situation requiring charm, deception, or persuasion.

## Psyche

### Personality

Hródar is bitter, taciturn, and consumed by resentment. He is not chaotic or unpredictable like Dágulf—his anger is cold, steady, and aimed squarely at the Vylarian Empire and everyone who profits from it. He does the work of banditry with grim efficiency and takes no pleasure in cruelty for its own sake, though he shows no mercy to Vylarian soldiers or imperial officials. Among the gang he is quiet and dependable, does his share without complaint, and neither seeks nor offers friendship. He occasionally mutters to himself in Varokhi when he thinks no one is listening.

### Motivation

Revenge, diffused across an entire empire. Hródar cannot strike at the senator whose factor killed his father, so he strikes at whatever piece of Vylaria comes within reach. He knows this is futile and does not care. The anger sustains him the way food and water sustain other men. If the empire were to collapse tomorrow, he would have no idea what to do with himself.

### Strengths

His reliability, toughness, and forest skills make him a valuable gang member. His focused anger gives him a determination that the others—lazy, frightened, or self-interested—lack. He is the one Dágulf sends to finish a job that requires patience and endurance rather than cunning or brute force.

## Social

## Companions

The Blackpine Wolves. He respects Thráwald's steadiness and tolerates Vandaric's usefulness. He is wary of Skathilda and indifferent to Brunjár. He follows Dágulf's orders because the gang serves his purpose, not out of loyalty.

### Patrons

None.

### Enemies

The Vylarian timber concession's current operators. The garrison that pursued him after he struck the factor. The empire itself, in the abstract.

## Plot Hooks

1. **The Factor's Return**—The Vylarian factor whose jaw Hródar broke nine years ago has returned to Vrystwald as part of a new imperial delegation. Hródar learns of his presence and abandons the gang to pursue a personal vendetta. Dágulf sends the party—or the party is independently hired—to find the missing bandit before he does something that brings the full weight of the garrison down on the Blackpine Wolves.

2. **The Timber War**—A Varokh logging settlement is being squeezed by the same exploitative imperial concession system that destroyed Hródar's family. The loggers are considering armed resistance and have sent word into the forest looking for men willing to fight. Hródar is eager to join them, which would pull him away from the gang and potentially spark a broader conflict. The party arrives in the middle of escalating tensions.

3. **The Silent Guide**—The party needs a guide through a particularly treacherous stretch of the Vrystwald interior. Hródar, separated from the gang after a botched robbery, is the only person in the area who knows the route. He will help—for a price, and only if the party is not traveling with Vylarian soldiers or imperial merchants. His knowledge of the forest is genuine, but his hatred of the empire could make him a dangerous companion if the party's allegiances are not what they seem.
