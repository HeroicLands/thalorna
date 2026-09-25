---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Sigrún Hafringr
  title: ""
  given: Sigrún
  clan: Hafringr
  home: stormveil
  aliases: []
packFolder: aureldiaaelwyth
shortcode: sgrnhfrngr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - aelwythanclt
    - commonerrnk
  homes:
    - aelwyth
  affiliations:
    - jrldmstrmvld
  gender: female
  species: humanflk
  born: 689/1/27
  height: 1.8
  weight: 80
  frame: heavy
  appearance:
    eye_color: dark_amber
    hair_color: black
    skin_color: dark_brown
    complexion: ruddy
    extra_features:
      - burn mark on wrist
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-asguardian }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 17 } }
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

Sigrún stands 5'11" with a heavy, broad-shouldered build that would not look out of place on a blacksmith's apprentice. Her black hair is thick and wiry, pulled back in a tight knot that keeps it from her face during patrols. Her dark amber eyes are fierce and direct in a dark-skinned, ruddy face that flushes darker still when her temper rises, which is not infrequently. Her features are strong and blunt: a wide jaw, a flat nose, a mouth that sets into a hard line when she is displeased. A burn mark on her left wrist—a crescent of shiny, puckered skin—is the result of a forge accident in her youth, before she left her family's smithy for the watch. She wears a mail shirt over quilted padding, leather gauntlets, and heavy boots, and carries a mace at her hip with the casual grip of someone who has used it.

# Dossier {#dossier}

Sigrún was born in a poor [[place-aelwyth|Aelwythan]] community where her family kept a small weaving shop. She grew up in relative poverty but among people who knew and looked after each other. At sixteen, her family's shop failed, undercut by larger weavers, and her parents fell into debt. At eighteen, Sigrún joined the market square guard partially for employment and partially for reasons she would not articulate clearly: a need to protect her community from the kind of predatory dealing that destroyed her family.

At twenty-six, during a fire that consumed a warehouse in the market district, Sigrún was on patrol nearby. She heard a child screaming from the building and without conscious decision, she ran in. She rescued the child but was severely burned on her wrist in the process. The scar tissue there is substantial and painful on cold mornings. The incident made her locally famous and raised her from ordinary guard to the community's guardian.

Now at thirty-one, she is the market square guard with the reputation of someone who will rush into burning buildings for her community. This reputation is accurate but also somewhat misleading; Sigrún is methodical and careful in her actual work. She simply refuses to abandon people who are in danger, even when abandoning them would be the safer course for a guard.

## Psyche

### Personality

Sigrún is fierce and protective, moving through the market with the bearing of someone who owns the space. She speaks loudly and confidently, and has little patience for people who exploit the vulnerable. She is not cruel but she is not gentle to those she perceives as predatory. She has a fierce sense of humor and is capable of real warmth with people she respects. She carries herself with aggressive confidence that makes most people instinctively defer to her.

### Motivation

What drives Sigrún first is protecting her community. She wants the market square to be a safe place for working people and explicitly distrusts merchants and authorities who treat the poor as disposable. Second is preventing the kind of exploitation that destroyed her family. She is driven by both love for her community and anger at those who prey upon it.

### Strengths

Her physical strength is well above the ordinary. She is fearless in the face of danger to others. She understands how her community works and reads a crowd accurately. Her willingness to step in herself when things turn dangerous makes her extraordinarily effective as a protector.

## Social

Sigrún is beloved by the laboring folk of the market square and deeply trusted by merchants of moderate means. She is distrusted and avoided by wealthy merchants who she has opposed, and treated with careful respect by city authorities who recognize her community support.

## Companions

### Patrons

**Market Master Elyric Kírindi**—The administrator responsible for the market square. Elyric is a fair-minded merchant himself who respects Sigrún's commitment to community protection. He has supported her and seen that her authority is recognized and backed by his office.

### Enemies

**Merchant Magnate Verath Rônondi**—A wealthy merchant who has been systematically buying up small shops in the market district and consolidating them under his control. Sigrún recognizes this process as similar to what destroyed her family and has actively opposed him. Verath views her as an obstacle and is working to have her reassigned or dismissed from the market square.

## Plot Hooks

1. **The Corporate Takeover**—Merchant Magnate Verath quickens his buying of market shops and Sigrún realizes his plan is to drive out independent merchants entirely and hold the market alone. He is doing it by means that are lawful on their face. Sigrún can see it happening but can barely stop any single sale. She attempts to warn merchants, but many are desperate enough to accept Verath's offers. Sigrún considers more aggressive interference but that would exceed her authority. She can accept the takeover or step outside the law to prevent it.

2. **The Guard Station Politics**—Sigrún is reassigned to a different patrol area by a new commanding officer who is politically connected to Merchant Magnate Verath. The removal is officially justified as routine rotation but everyone recognizes it as punishment for her opposition to Verath. Sigrún is devastated by the separation from her community. She can accept the reassignment quietly or openly challenge it, knowing that confrontation will damage her standing in the watch.

3. **The Innocent Arrest**—A young person from the working-class community, someone Sigrún has mentored, is accused of stealing from a wealthy merchant. The evidence appears strong but Sigrún knows the young person and is convinced of his innocence. Investigation reveals that Merchant Magnate Verath planted false evidence to discredit and arrest the young person as retaliation against Sigrún's opposition. Sigrún can publicly expose Verath's corruption, which would require revealing how she knows about the false evidence and so admitting she tampered with the official investigation, or allow an innocent person to be convicted.

4. **The Fire Again**—Another fire breaks out in the market district, this time in a building that Sigrún recognizes as recently purchased by Verath. Evidence suggests it was deliberately set to destroy the previous tenant's stock and ruin them. Sigrún can see the fire and knows people are inside. She can rush in to rescue people, which has already burned her once and could kill her, or keep her distance and report it properly.

5. **The Community's Betrayal**—Sigrún discovers that someone in her community—someone she trusts—has been secretly working with Merchant Magnate Verath, feeding him information about which merchants are ripe for buying out. The betrayal is personal and painful. The person involved claims they had no choice because Verath had leverage over them (debt, family threats, something). Sigrún can expose the betrayal, which punishes the person, or protect them, which allows Verath to continue exploiting the community.
