---
tags:
  - blackpine-wolves
  - brigand
  - vrystwald
  - underworld
  - character
name:
  full: Brunjár Skathhelm
  title: ""
  given: Brunjár
  clan: Skathhelm
  aliases: []
packFolder: ankarisvrystwald
shortcode: brunjarskathhel
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Brigand
  stations: []
  lore:
    - slavernk
  homes:
    - vrystwald
  affiliations:
    - blckpnwlvs
  gender: male
  species: null
  age: 22
  birthday: 697/10/3
  height: 1.75
  weight: 68
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: fair
    complexion: freckled
    extra_features:
      - boyish face that makes him look younger than his years
      - fidgets constantly
sohl:
  kbcat: npc
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-weapongear-clb }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-slng }
    - { model: sohl-sohl-armorgear-hstunic }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bgsmcvs }
    - { model: sohl-sohl-projectilegear-sston, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 2 } }
    - { model: sohl-sohl-skill-spirit, initSkillMult: 3 }
    - { model: sohl-sohl-skill-bflkbite, initSkillMult: 2 }
    - { model: sohl-sohl-skill-bflkgrab, initSkillMult: 2 }
    - { model: sohl-sohl-skill-bflkheadbutt, initSkillMult: 2 }
    - { model: sohl-sohl-skill-bflkkick, initSkillMult: 2 }
    - { model: sohl-sohl-skill-limbblock, initSkillMult: 2 }
    - { model: sohl-sohl-skill-press, initSkillMult: 2 }
    - { model: sohl-sohl-skill-bflkpunch, initSkillMult: 2 }
    - { model: sohl-sohl-skill-trip, initSkillMult: 2 }
    - { model: sohl-sohl-mysticalability-sprt }
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
        base: 150
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
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

![[brunjarskathhel|Brunjár Skathhelm]]{float: top-left}

Brunjár Skathhelm looks like what he is: a boy who ended up in a bad place and is in over his head. He has a round, freckled face that makes him look sixteen rather than twenty-two, with hazel eyes that dart nervously and never quite meet anyone's gaze. His brown hair is shaggy and unkempt, and he has the soft, unfinished look of someone who has not yet grown fully into his frame. He wears a homespun tunic and leather shoes—the worst-equipped member of the gang—and carries a club, a dagger, and a sling with a pouch of stones. He fidgets constantly, picking at his nails, shifting his weight, tugging at his sleeves. He is the member of the Blackpine Wolves that victims remember as "the one who looked like he didn't want to be there."

# Dossier {#dossier}

Brunjár grew up in a small Varokh village not far from Dágulf's own birthplace, the son of a herdsman and a weaver. His was an unremarkable childhood—poor but not desperate, with parents who tried their best and an older sister who looked out for him. He was never strong or brave, but he was observant, good with animals, and a fair hand with a sling from years of chasing crows out of the barley fields.

His trouble began when his father was accused of stealing a neighbor's ram—a charge that was true, as it happened, though born of desperation during a hard winter. The village clanhead ordered a beating that left his father crippled, and the family's small holding was forfeit. Brunjár's mother died of fever the following spring, and his sister married into another village to survive. At seventeen, alone and landless, Brunjár drifted into poaching, then petty theft, and finally stumbled into Dágulf's orbit when the gang raided a caravan Brunjár happened to be robbing at the same time.

Dágulf kept him because he was useful—a good lookout, quiet on his feet, and too frightened to disobey. Brunjár has been with the Blackpine Wolves for two years now and hates every moment of it, but sees no way out. He has witnessed things that haunt him, and participated in acts he cannot undo.

# Skills and Abilities

Brunjár is the gang's primary lookout and scout. His perception is good, he moves quietly through the forest, and his sling work is the best in the group—he can drop a crow at forty paces. He has a knack with animals and can calm horses during an ambush, which is practically useful. He is a mediocre fighter at best, lacks confidence, and freezes under pressure.

## Psyche

### Personality

Brunjár is anxious, guilt-ridden, and desperately unhappy. He is not a bad person—he has genuine empathy, a functioning conscience, and the moral awareness to know that what the gang does is wrong. He simply lacks the will to leave and the courage to resist. He is eager to please and quick to obey, which makes him useful to Dágulf but contemptible to Skathilda. He talks too much when nervous, apologizes compulsively, and sleeps badly.

### Motivation

Brunjár wants out. He dreams of a quiet life—a small farm, a wife, honest work—but cannot see how to get there from where he is. He fears Dágulf's retribution if he tries to leave, and he fears the law if he turns himself in. He is paralyzed between guilt and cowardice, and each day he stays makes the next departure harder.

### Strengths

His perception and stealth make him a genuinely useful scout. His empathy, though it torments him, means he occasionally shows kindness to captives when no one is watching. His sling skill is underestimated by those who don't take the weapon seriously.

## Social

## Companions

The Blackpine Wolves, reluctantly. Thráwald ignores him. Skathilda openly despises him. Dágulf uses him. He finds the company of the gang's dogs and horses more tolerable than the company of its men.

### Patrons

None.

### Enemies

No personal enemies beyond those the gang has made collectively. His sister, Hildára, married into a village two days' walk south and does not know what her brother has become.

## Plot Hooks

1. **The Reluctant Informant**—Brunjár is captured during a botched ambush and, terrified, offers to lead the party to the Blackpine Wolves' camp in exchange for mercy. He is telling the truth and will cooperate fully, but his information may be incomplete—and if Dágulf learns of the betrayal before the party can act, Brunjár's life is forfeit.

2. **A Sister's Letter**—The party encounters a Varokh woman who is searching for her younger brother. She carries a scrap of cloth he'd recognize and asks strangers on the road if they've seen a young man with freckles and a sling. If the party has already dealt with the Blackpine Wolves, they must decide what to tell her about her brother's fate.

3. **The Captive's Friend**—After a robbery, one of the gang's captives reports that a freckle-faced young bandit secretly loosened their bonds and whispered where to find help. The party can use this information to identify a potential ally within the gang—if they can reach Brunjár before Dágulf discovers his treachery.
