---
tags:
  - mythic
  - image-needed
  - creature
name:
  full: Warg
  aliases: []
description: "A monstrous four-hundred-pound wolf warped by fell magic into a near-sapient predator far deadlier than any dire wolf."
shortcode: warg
type: being
data:
  icon: icon-wolfhead
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: mythic
  attrRollFormula:
    str: 1d6+15
    end: 1d6+15
    agl: 1d6+9
    per: 1d6+13
    snt: 1d4+3
    aur: 1d4+4
    wil: 1d6+13
    rea: 1d4+5
    cre: 1d6+7
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 68 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 4
            aspect: piercing
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            armorReduction: 2
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 3
            aspect: edged
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 1
          - name: Torso
            shortcode: torsozone
            probWeight: 5
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 8
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: &a1
              blunt: 5
              edged: 4
              piercing: 3
              fire: 5
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a2
              blunt: 4
              edged: 3
              piercing: 2
              fire: 3
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: *a1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a1
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: *a1
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 2
      weight:
        base: 240
        calc: "240"
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 150
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: surface_cover
            key: mixed_forest
            mode: add
            textValue: "-1"
          - scope: surface_cover
            key: needleleaf_forest
            mode: add
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

The darkness seems to breathe. What comes out of the night is not a wolf and not any ordinary beast, but something touched by old, foul magic. It stands nearly as high as your chest at the shoulder, and where a dire wolf is lean and quick this creature is vast and heavy — muscle like iron under fur as black as a starless night, every bristle of its mane catching the firelight like dark metal. The eyes arrest you first: they burn with an intelligence that is wholly alien and wholly malevolent — not the plain focus of a hunting beast but the calculating judgement of something that reasons, understands, and has decided what you are worth in blood. Its breath steams in the mild air, and the sound it makes has more of distant thunder in it than of any growl. Around it you sense movement in the dark — other shapes, other eyes — and you understand, with a chill, that this beast does not hunt alone. It commands. It fixes you in its gaze and you feel the weight of its attention like a hand on your chest. Then it speaks — and though the sound that comes is a howl below hearing, the meaning is plain: _We are here. We will feed._

# Dossier {#dossier}

The Warg is a giant wolf that fell magic has made into something else. It stands three and a half to four feet at the shoulder and weighs four to five hundred pounds, and it joins a wolf's economy in killing to an intelligence that borders on the sapient. A dire wolf is a large, somewhat cleverer wolf. A warg is a different kind of thing, twisted by dark powers into an instrument of conquest — cunning, tactical, and cruel past any hunger. Wargs are met as the vanguard of Grukar war bands or on their own in wild country under old curses.

## The Riders

Grukar ride them, and a warg carries its rider as a leader of the band rather than as a mount. It is not domestication. The two understand each other, and the warg understands more than the rider might like — the plan of a raid, the shape of a campaign, what an enemy will do next.

## The Pack

Wargs run in packs of five to fifteen under the strongest or the most magic-touched among them, and the hierarchy is rigid and enforced. A natural wolf pack hunts to eat. A warg pack conducts operations: raids on rival packs and on other predators, deliberate expansion of territory, hunts with objectives. They hunt by day or by night as the work requires. They eat anything but prefer meat and prefer above all the flesh of elves, humans and dwarves, which they pursue as sport. They speak to each other in rumbles below human hearing that carry meaning across miles, and a warg lives long for a wolf — forty years and more.

In a fight the pack flanks and isolates, comes from several directions at once, and keeps pressing until the prey goes down. Each warg holds its place in a formation and supports its neighbours without any sign passing between them. They read an enemy and change tactics on it: archers first, then one man at a time cut out and finished; against armour, the joints, the legs, the face, rather than brute force. They drive prey with the ground — to a cliff edge, into a dead end, onto a place they have prepared. Defending territory or young they attack anything, however strong, without hesitation. A warg on its own is careful but not afraid; it will run down a lone man for as long as it takes, knowing it outmatches him. The synchrony of a pack under a strong leader is not natural — every animal seems to know what every other will do before it does it, and the likeliest explanation is that something links them.

## The Body

It is built as a canid — four legs, walking on the toes, a hunter's frame — and everything in the frame is enlarged and made worse: longer legs than a wolf's, a deeper chest, a great deal more mass. The fur is always dark, black or dark grey or burned brown, lying oily and sleek, with an unsettling iridescence in some lights, as if the animal shed darkness. The mane bristles all the time, whatever the wind or the animal's mood. The head is big and wedge-shaped, the muzzle longer than a dire wolf's and the jaw much heavier, the teeth enormous, yellow and plainly able to crush bone. The tail is thick and expressive. The claws do not retract and are sharp enough for climbing as well as for holding prey. The whole animal reads as a violation, and the fear it causes is out of proportion to the practical danger, which is already very great.

The bite is stronger than a natural wolf's and a dire wolf's put together — it crushes bone, takes limbs, and goes through moderate armour — and the warg's habit is to clamp and hold, pinning the victim for the rest of the pack. At close quarters it tears with the claws as readily as the teeth, most of all at prey trying to run or to guard against the bite. It sees in total darkness, in the heat of bodies and through magical dark, and a warg pack underground or by night has every advantage. Its mere presence puts a supernatural dread into prey that reason does not lift; people panic, run or freeze. Its howl carries for miles below hearing, orders the pack across that distance and breaks the courage of anyone who feels it. And it does not tire as a wolf tires. A warg can follow a trail for days without rest, driven by will and by magic more than by flesh.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 14-19 (1d6+13)

- **Scent:** 4-7 (1d4+3)

- **Aura:** 5-8 (1d4+4)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 8-13 (1d6+7)
