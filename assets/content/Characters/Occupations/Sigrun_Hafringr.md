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
  species: null
  age: 31
  birthday: 689/1/27
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

Sigrún stands 5'11" with a heavy, broad-shouldered build that would not look out of place on a blacksmith's apprentice. Her black hair is thick and wiry, pulled back in a tight knot that keeps it out of her face on patrol. Her dark amber eyes are fierce and direct in a dark-skinned, ruddy face that flushes darker still when her temper rises, which is not seldom. Her features are strong and blunt: a wide jaw, a flat nose, a mouth that sets hard when she is displeased. A burn mark on her left wrist — a crescent of shiny, puckered skin — is what the warehouse fire left her. She wears a mail shirt over quilted padding, leather gauntlets and heavy boots, and carries a mace at her hip with the easy grip of someone who has used it.

# Dossier {#dossier}

When the warehouse in the market district burned, Sigrún was on patrol nearby, heard a child screaming inside, and went in without deciding to. She was twenty-six. She brought the child out and the fire took the skin of her wrist for it; the scar is thick and hurts on cold mornings. The market district has treated her as its guardian since, and it is not wrong to, though the story misleads a little. Sigrún is careful and methodical in her work. What she will not do is leave anyone in danger, even when leaving them would be the wise thing.

Sigrún was born into a working-class Aelwythan community where her family ran a small weaving business. They were poor and they were part of something. When she was sixteen the business failed against larger operations and her parents went into debt, and at eighteen she joined the market square guard — for the wage, and for a reason she would not have put into words: to keep her community from the kind of predatory trade that had broken her family.

Now, at thirty-one, she is the market square guard with the reputation of a woman who will run into a burning building, and she is one; and she is also the one who knows every stall-holder by name and which of them is behind on a debt to whom.

## Psyche

### Personality

Fierce and protective, and she moves through the market as if she owned it. She speaks loudly and with confidence, and has little patience for anyone who preys on the weak. Not cruel, but not gentle with people she has decided are predators. She has a fierce sense of humour and a real warmth for people she respects, and a swagger that makes most people step aside before they have thought about it.

### Motivation

To protect her community, in the plainest sense. She wants the market square safe for working people, and she distrusts on principle the merchants and officials who treat the poor as disposable. Under that is the family's failure: she means to stop the kind of exploitation that caused it, and she is driven by love for the square and anger at what feeds on it in about equal measure.

### Strengths

Very strong and very capable. Fearless where someone else is in danger. She reads the square — who is frightened, who is lying, which quarrel is about to turn — accurately, and her readiness to put herself between people and harm makes her a protective force out of proportion to one guard.

## Social

Sigrún is loved by the working people of the market square and trusted by the merchants of modest means. She is distrusted and avoided by the rich merchants she has stood against, and handled carefully by city authorities who know how much of the square is behind her.

## Companions

### Patrons

**Market Master Elyric Thornwell** — The administrator responsible for the running of the market square. Elyric is a fair-minded merchant himself and respects what Sigrún does for the community; he has backed her, and seen to it that her authority is recognised and has the weight of his office behind it.

### Enemies

**Merchant Magnate Verath Coldstone** — A rich merchant who has been buying up the small businesses of the market district and gathering them under his own hand. Sigrún knows the shape of it from her own family's ruin and has opposed him openly. Verath regards her as an obstacle and is working to have her reassigned or dismissed from the square.

## Plot Hooks

1. **The Corporate Takeover** — Verath speeds up his buying, and Sigrún sees where it ends: no independent merchants at all, and the whole market under him. Every step of it is lawful on paper. She can see it happening and can barely block a single sale; she warns the merchants, and many are desperate enough to take his money anyway. Stopping it would mean stepping past her authority. Accept the takeover, or act outside the law to prevent it.
2. **The Guard Station Politics** — A new commanding officer with ties to Verath moves Sigrún to another patrol. Officially it is rotation; everyone knows it is punishment. She is cut off from her community and devastated by it. Take the reassignment quietly, or fight it openly and know what that does to her future in the guard.
3. **The Innocent Arrest** — A young man from the working-class quarter, someone Sigrún has taught and looked after, is accused of stealing from a rich merchant. The evidence looks strong; she knows him and is sure of his innocence. What she finds is that Verath planted the evidence to discredit and jail the boy as payback for her opposition — and to prove it she would have to admit how she knows, which means admitting she tampered with the official inquiry. Expose Verath and herself, or let an innocent be convicted.
4. **The Fire Again** — Another fire in the market district, this time in a building Sigrún knows Verath bought recently, and the signs say it was set to destroy the last tenant's stock and finish him. She can see the fire and knows there are people inside. Go in — it has burned her once and could kill her this time — or hold back, report it properly, and live with what that costs.
5. **The Community's Betrayal** — Sigrún discovers that someone she trusts in the community has been quietly working for Verath, telling him which merchants are weak enough to buy. It is a personal wound. The person says there was no choice — Verath had something over them, a debt, a family, a threat. Expose the betrayal and punish them, or shield them and let Verath go on feeding.
