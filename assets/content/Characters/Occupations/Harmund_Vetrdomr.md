---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Hármund Vetrdómr
  title: ""
  given: Hármund
  clan: Vetrdómr
  home: ""
  aliases: []
packFolder: ankarisnordlands
shortcode: hrmndvtrdmr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 40
  birthday: 680/9/20
  height: 1.82
  weight: 71
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: auburn
    skin_color: olive
    complexion: smooth
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-asguardian }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 18 } }
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

Hármund stands 6'0" even, with a medium build gone a little soft in the middle after twenty-two years of harbour watch rather than field service. His auburn hair is thinning on top and he makes up for it with a thick beard trimmed to regulation length. The hazel eyes are what people remember — pale and watchful in an olive-skinned face that has aged well for forty. His skin is smooth and mostly unscarred; he has spent his life managing docks, not fighting wars. He wears the Greyfjord harbour watch uniform — heavy wool tunic over quilted padding, leather knee boots, a broadsword at his hip that is more warning than weapon — with a brass harbour-watch badge pinned to the left breast.

# Dossier {#dossier}

Every port has a grey market, and Greyfjord's is managed. Hármund commands the harbour watch on the evening and night shifts, and the captains who work Greyfjord regularly know precisely what he will enforce and what he will let pass: the law, yes; the small infractions that are the ordinary cost of shipping, no. He is not corrupt and he is not innocent. He understands that lawful trade and shadow trade run side by side in any harbour, and he has spent twenty-two years keeping the line between them where it does the least harm.

Hármund joined the harbour watch at eighteen, not long after a coastal raid destroyed his family's merchant business. The loss cut deep; the watch gave him a wage and a purpose. He learned the trade fast and made himself known as reliable and observant, and the work has been the same since — cargo, manifests, contraband, the movement of ships arranged with their captains.

What is rare in him, for a harbour guard, is that he has real friendships among the captains and crew leaders. They trust him for fairness and plain sense. At forty he has trained a generation of younger guards and become something of a fixture on the Greyfjord waterfront, and his way of doing the job is beginning to look old-fashioned as stricter forms of governance arrive from the capital.

## Psyche

### Personality

Unhurried and patient; a man who has taken to heart that hurrying rarely improves anything. Sociable with merchants and guards alike, with a friendliness that keeps its boundaries. He does not show much feeling, and his few close bonds run deep. His humour is dry and understated, and lands better with adults than with the young.

### Motivation

To keep Greyfjord harbour working — lawful trade moving, real threats out. Then his family: he married a merchant's daughter fifteen years ago and has two children. And, unspoken, to prove that a port can be run on understanding rather than on rigid enforcement.

### Strengths

His knowledge of the sea trade and how cargo moves is thorough. He is a fine judge of people and reads intentions with uncommon accuracy. He is strong and capable of violence if it comes to that, and avoids it where he can. He has spent decades learning to bring opposed interests to an arrangement.

## Social

Hármund sits between worlds in Greyfjord — too much of the waterfront to be fully at home in the landward hierarchy, too much the guard official to be fully one of the merchants. His standing has risen anyway, on years of being the man who could be relied on.

## Companions

### Patrons

**Harbour Master Thorvald Ironhammer** — The official administrator of Greyfjord harbour. Thorvald is ageing and has come to rely on Hármund for the whole practical business of port security. He has openly shielded him from the new directives from the capital, letting him run the watch by his own methods rather than by stricter rules of enforcement.

### Enemies

**Merchant Captain Helgen Blackwater** — A pirate captain working Greyfjord waters behind a thin front of legitimate trade. Hármund has documented Blackwater's contraband many times and has never been able to seize it lawfully. Blackwater is clever and careful, and knows Hármund for the chief obstacle to his business. He has let it be understood that Hármund's family is not out of reach.

## Plot Hooks

1. **The New Order** — New directives arrive from the capital for Greyfjord harbour: stricter enforcement, and an end to the "grey market" practices Hármund has managed for years. The new rules will foul lawful trade and require him to hunt minor infractions he has always overlooked. Harbour Master Thorvald retires before they take effect. Carry them out, or keep his own way and lose his post.
2. **The Captain's Mercy** — Hármund finds solid, prosecutable proof that Captain Helgen Blackwater is running slaves through Greyfjord harbour. He also finds that one of the captains he respects — **Captain Sera Windmere** — has been drawn into Blackwater's operation without knowing it, through partnerships she did not know led back to the slave trade. Prosecute and destroy both, or bury what he has on Sera and go after Blackwater alone.
3. **The Family Threat** — Blackwater makes good on his hints. Hármund's daughter, **Erina**, is beaten by Blackwater's men as a message — brutally, and not worse than that. Hármund now has cause and lawful grounds to arrest Blackwater, and doing it means real violence: Blackwater is a skilled fighter with a loyal crew, and Hármund is middle-aged and slowing, and would likely lose. Risk his life for justice, or accept that his family's safety may mean leaving his enemy's crimes alone.
4. **The Corrupt Officer** — Hármund learns that a young harbour watch officer is taking Blackwater's money and passing him word of guard movements and cargo inspections. The officer is talented and had seemed loyal. Hármund finds that he is being blackmailed: Blackwater holds proof that the officer has a lover who is a man, which the law punishes. Arrest the officer and destroy him, or protect him and be complicit in the corruption.
5. **The Port Master's Dying Request** — Harbour Master Thorvald, in his last illness, calls Hármund to his bedside and confesses that he has known of Blackwater's operations for years and let them run. His reason: Blackwater agreed to move refugees fleeing political persecution, using the slave-trade as cover, and the network has saved hundreds of lives. Thorvald asks Hármund to keep protecting it after he is gone, knowing that it makes Hármund complicit in slavery while it saves refugees.
