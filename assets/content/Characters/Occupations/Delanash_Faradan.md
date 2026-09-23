---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Delânash Faradân
  title: ""
  given: Delânash
  clan: Faradân
  home: ""
  aliases: []
packFolder: dunharatribes
shortcode: delnshfrdn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - dunhariclt
    - commonerrnk
  homes:
    - dunhardsrtrgn
  affiliations:
    - dunhartrbs
  gender: female
  species: null
  age: 41
  birthday: 679/11/21
  height: 1.9
  weight: 119
  frame: massive
  appearance:
    eye_color: honey_brown
    hair_color: chestnut
    skin_color: medium
    complexion: freckled
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-mithara }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 34 } }
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

Delânash is an imposing woman—6'3" with a massive, powerfully built frame that carries 262 pounds with the settled weight of a veteran who has spent decades in harness. Her chestnut hair is thick and unruly, usually bound beneath a linen headwrap against the desert sun, and her honey-brown eyes are sharp and knowing beneath heavy brows. Her medium-toned skin is freckled across the nose and cheeks—unusual for a Dunhari woman and a source of mild self-consciousness. Her face is square-jawed and strong-featured, and her hands are broad and scarred from years of weapons drill. She wears a desert garrison's kit: a long padded coat over linen, leather bracers and greaves, and a curved scimitar on her hip that she maintains with the close care of a woman who trusts her blade above all other weapons.

# Dossier {#dossier}

Delânash comes from Dunhari desert tribes, though her freckled complexion is unusual enough to have marked her as an outsider even in her birth tribe. Her mother was a settlement-keeper whose family had mixed heritage; her father was a Dunhari warrior. The combination produced Delânash: a tall woman with distinctive freckled skin that the pure-blood tribes regarded as a sign of weakness or taint. She was neither fully Dunhari in their eyes nor fully able to pass in settled lands.

At nineteen, she presented herself to the desert fortress garrison as a volunteer. The garrison commander saw a six-foot-two woman of great strength and no tribal allegiances, and he understood immediately that she was perfect for a military institution that did not care about bloodline. For twenty-one years, Delânash has served in the fortress, working her way from basic garrison service to senior officer rank. She has mentored generations of desert warriors and has become indispensable to fortress operations.

Delânash's unusual coloring has become her identifying feature. Young soldiers call her "The Freckled Guard" with respect rather than derision. She has become a symbol of the garrison's ideal of advancement by merit—advancement through competence rather than heritage. This makes her politically significant in ways she neither sought nor particularly wants.

## Psyche

### Personality

Delânash is matter-of-fact and practical, with little patience for ornamentation in language or action. She is kind to those who work competently and will stand by them. She is harsh with those who approach their work with casual laziness, and her criticism is blunt enough to wound. She has a dry sense of humor and occasionally says things of surprising philosophical depth without apparent awareness that she has done so.

### Motivation

Delânash's primary motivation is the garrison itself—that it works and that its soldiers survive their tours of duty. She has made peace with her status as tribal outsider by committing entirely to institutional loyalty. Her secondary motivation is proving that desert-born warriors can be disciplined soldiers rather than tribal mercenaries. She wants the fortress to become a model that expands across [[place-dunharargn|Dunhara]].

### Strengths

Her skill in combat is great, honed through decades of actual desert warfare and fortress defense. She is an inspired tactical commander who understands desert conditions with instinctive precision. Her physical strength is extraordinary and increases her authority with soldiers. She is politically intelligent despite appearing straightforward.

## Social

Delânash occupies a unique social position: respected by the garrison, treated with suspicion by pure-blood Dunhari tribes, invisible to settled commercial classes. Her unusual coloring makes her instantly identifiable and contributes to her semi-mythical status as a garrison legend.

## Companions

### Patrons

**Fortress Commander Khalef ibn Rashid**—The garrison's senior officer. Khalef respects Delânash completely and has made her his effective second-in-command. He is aging and increasingly aware that his time is ending. He has made quiet arrangements to recommend Delânash as his successor, which would be unprecedented—a woman and a tribal outsider commanding the entire fortress.

### Enemies

**Tribal Elder Saqqar ibn Malik**—A pure-blood Dunhari tribal leader who views the fortress's advancement by merit as a threat to traditional tribal hierarchy. He has begun spreading rumors that Delânash is an outsider unfit for command and is being used by foreign interests to weaken Dunhari warrior culture. His political campaign against her has gained traction with conservative tribal factions.

## Plot Hooks

1. **The Succession Battle**—When Fortress Commander Khalef dies, Delânash is officially recommended as his successor by the military hierarchy. The appointment touches off a political firestorm among Dunhari tribes who refuse to accept a woman and tribal outsider commanding the fortress. A rival candidate—a pure-blood Dunhari warrior of great skill—is proposed, backed by Tribal Elder Saqqar. The fortress becomes a political battleground, and Delânash can accept a compromise that strips her of actual authority, or refuse and accept that tribal forces will move against the fortress openly.

2. **The Freckle Prejudice**—Delânash discovers that a younger officer, **Captain Rashesh**, is secretly working with Tribal Elder Saqqar to document her decisions for political criticism. Rashesh respects her military competence but has been convinced by Saqqar that Delânash's presence in command is corrupting Dunhari warrior traditions. Delânash can remove Rashesh from his command, which bears out Saqqar's accusation that she wields power unfairly, or tolerate his undermining and go on with the work.

3. **The Impure Blood Discovery**—Delânash learns that Khalef did not die of natural causes but was poisoned—slowly, over weeks. Investigation reveals the poison was administered by someone in the inner command circle. The political implication is clear: traditional Dunhari factions are eliminating anyone who supports Delânash's advancement. Delânash can accuse Saqqar publicly and risk all-out tribal war, or suppress the investigation and appear weak.

4. **The Desert Refuge**—A group of people arrives at the fortress claiming to be refugee traders. Investigation reveals they are actually members of a neighboring tribe fleeing political upheaval that threatens to kill them. Tribal Elder Saqqar demands that Delânash eject them immediately, claiming they are "undesirable" and will contaminate the garrison. The refugees have nowhere else to go and will be executed if sent away. Delânash can refuse Saqqar, which escalates the tribal conflict, or comply, which betrays everything the garrison stands for.

5. **The Freckles As Advantage**—An external threat emerges—a military force from an adjacent realm staging operations against the fortress. Delânash realizes that her distinctive appearance and her reputation as a garrison commander have actually deterred several potential attacks through intimidation and stories. But that reputation is being used against her by Saqqar, who claims she is a "foreign symbol" leading the garrison away from Dunhari traditions. Delânash can cultivate the stories as a tactical advantage, which bears out Saqqar's accusations, or reject them and lose the protection they provide.
