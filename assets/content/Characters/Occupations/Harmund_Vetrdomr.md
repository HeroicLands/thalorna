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

Hármund stands 6'0" even, with a medium build that has gone slightly soft around the middle after twenty-two years of harbor watch rather than field combat. His auburn hair is beginning to thin on top, and he compensates with a thick beard that he keeps trimmed to regulation length. His hazel eyes are his most striking feature — pale and watchful in an olive-skinned face that has aged well for a man of forty. His skin is smooth and largely unscarred, a testament to a career spent managing docks rather than fighting wars. He wears the [[place-greyfjord|Greyfjord]] harbor watch uniform: a heavy wool tunic over quilted padding, leather knee boots, and a broadsword at his hip that sees more use as a visual deterrent than a weapon. A brass harbor-watch badge is pinned to his left breast.

# Dossier {#dossier}

Hármund joined the Greyfjord harbor watch at eighteen, shortly after his family's merchant business was destroyed by a coastal raid. The experience of loss was acute, but the harbor watch offered steady employment and purpose. He learned the trade quickly, establishing himself as reliable and observant. For twenty-two years, he has worked port security: managing cargo, verifying manifests, watching for contraband, coordinating with merchant captains on vessel movements.

Hármund has achieved something rare among harbor guards: genuine friendships with the merchant captains and crew leaders who work Greyfjord regularly. His reputation is for fairness and practical-mindedness. He is not corrupt, but he is not naive about how commerce works. He understands that legitimate business and shadow trade operate in parallel, and he manages the border between them with surprising nuance. Captains trust him to uphold actual laws while ignoring the minor infractions that are simply the cost of maritime business.

Now at forty, he is the senior watch commander for the evening and night shifts. He has trained generations of younger guards and has become something of an institution at Greyfjord harbor. His approach is slowly becoming outmoded as newer, more rigid governance structures arrive from the capital.

## Psyche

### Personality

Hármund is unhurried and patient, moving through his work with the steady deliberation of a man who has internalized that rushing rarely improves situations. He is sociable with merchants and guards both, though his friendliness maintains clear professional boundaries. He is not particularly demonstrative about emotions, but his few close relationships are deep. He has a dry, understated sense of humor that appeals more to adults than to younger people.

### Motivation

Hármund's primary motivation is maintaining the functionality of Greyfjord harbor—ensuring that legitimate commerce moves smoothly while keeping genuine threats out. His secondary motivation is providing for his family (he married a merchant's daughter fifteen years ago and has two children). His tertiary, unspoken motivation is proving that a port can be effectively managed through understanding rather than rigid enforcement.

### Strengths

His knowledge of maritime trade and shipping logistics is comprehensive. He is an exceptional judge of character and can read people's intentions remarkably accurately. He is physically strong and capable of violence if necessary, though he will avoid it if possible. His ability to negotiate between conflicting interests is refined through decades of practice.

## Social

Hármund occupies a liminal space in Greyfjord society—too much a maritime person to be fully accepted in land-based hierarchy, too much a guard official to be fully accepted by merchant communities. His status has become elevated through the years of maintaining his reliability.

## Companions

### Patrons

**Harbor Master Thorvald Ironhammer** — The official administrator of Greyfjord harbor operations. Thorvald is aging and has come to rely on Hármund absolutely for the actual functioning of port security. He has explicitly protected Hármund from the new directives arriving from the capital, allowing him to continue managing the watch according to his own methods rather than stricter enforcement protocols.

### Enemies

**Merchant Captain Helgen Blackwater** — A pirate captain operating in Greyfjord waters under a thin veneer of legitimate merchant trade. Blackwater's vessel carries contraband that Hármund has documented numerous times but has been unable to intercept legally. Blackwater is intelligent and careful, and he recognizes Hármund as the primary obstacle to his operation. He has implied threats toward Hármund's family.

## Plot Hooks

1. **The New Order** — Greyfjord harbor receives new governance directives from the capital mandating stricter enforcement and elimination of the "gray market" practices that Hármund has been managing carefully. The new protocols will disrupt legitimate commerce and will require Hármund to actively persecute minor infractions that he has previously overlooked. Harbor Master Thorvald retires before the directives take effect. Hármund must choose between implementing the new protocols and maintaining his established approach—knowing that refusing will cost him his position.

2. **The Captain's Mercy** — Hármund discovers definitive proof that Captain Helgen Blackwater is operating a slave trading operation through Greyfjord harbor. The evidence is solid and prosecutable. But Hármund also discovers that one of the merchant captains he respects—**Captain Sera Windmere**—has inadvertently become entangled with Blackwater's operation through business partnerships she did not realize were connected to slavery. Hármund can prosecute and destroy both Blackwater and Sera, or he can suppress evidence about Sera while moving against Blackwater separately. He must choose between thorough justice and mercy toward someone he respects.

3. **The Family Threat** — Blackwater makes good on his implied threats against Hármund's family. His daughter, **Erina**, is assaulted (not sexually, but brutally) by Blackwater's agents as a message. Hármund now has both motivation and legal cause to arrest Blackwater, but doing so will escalate into actual violence. Blackwater is a skilled fighter with a loyal crew. Hármund is middle-aged with slowing reflexes. He will likely lose a direct confrontation. He must choose between risking his life for justice or accepting that his family's security might require him to ignore his enemy's crimes.

4. **The Corrupt Officer** — Hármund discovers that a younger harbor watch officer is taking bribes from Blackwater and feeding him information about guard movements and cargo inspections. The officer is talented and had seemed genuinely committed. Hármund realizes the officer is likely blackmailed (Hármund finds evidence that Blackwater has compromised photographs of the officer with another man—homosexuality being illegal). Hármund must choose between arresting his officer (which destroys him) or protecting him (which makes Hármund complicit in corruption).

5. **The Port Master's Dying Request** — Harbor Master Thorvald, now in his final illness, calls Hármund to his bedside and confesses that he has known about Blackwater's operations for years but has allowed them to continue. His reason: Blackwater has agreed to facilitate the smuggling of refugees fleeing political persecution, using his slave-trading operation as cover for refugee movement. The refugee network has saved hundreds of lives. Thorvald asks Hármund to continue protecting the operation after his death, knowing that it makes Hármund complicit in slavery while saving refugees. Hármund must choose between ideological purity and pragmatic morality.
