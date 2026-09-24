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
  born: "unknown"
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

The darkness seems to breathe. What emerges from the night is not wolf and not ordinary beast, but something touched by old, foul magic. It stands nearly four feet at the shoulder, but where a dire wolf is lean and quick, this creature is vast and heavy—muscles like iron beneath fur black as starless night, each bristle of its mane catching reflected firelight like dark metal. The eyes arrest you first: they burn with an intelligence that is alien and malevolent—the calculating judgment of something that reasons, understands, and has decided your worth is measured in blood. When it breathes, you see that its breath steams even in mild air, and the sound it makes is a rumble like distant thunder. Around it, you sense movement in the darkness—other shapes, other eyes—and you understand with chilling clarity that this beast does not hunt alone, but commands. The thing fixes you in its gaze and you feel the weight of its attention like a physical force. It speaks—and though the sound that emerges is a subsonic howl, the meaning is clear: _We are here. We will feed._

# Dossier {#dossier}

The Warg is a supernatural predator of the highest order: a giant wolf touched and transformed by fell magic into something well beyond an animal. Standing three and a half to four feet at the shoulder and weighing four hundred to five hundred pounds, the warg combines the hunting skill of wolves with an unnatural intelligence that borders on the sapient. Unlike dire wolves—which are merely large and somewhat smarter versions of their natural cousins—the warg is categorically different: a creature twisted by dark powers into a tool of conquest and death. Wargs have a malevolent cunning, an understanding of tactics beyond anything natural wolves achieve, and a capacity for cruelty that goes beyond hunger. They are sometimes ridden by Grukar (goblin-folk), serving as both mounts and leaders of goblin war bands. These partnerships are nothing like domestication; the warg and its Grukar rider are allies in shared cruelty. Wargs maintain pack structures similar to ordinary wolves, but with hierarchies far more rigid and potentially brutal. A warg pack is not a cooperative family unit but a military organization with strict command and absolute obedience. Adventurers encounter wargs primarily as vanguards of goblin war bands or as independent predators in wilderness regions touched by ancient curses and dark magic.

## Presentation

The warg is fundamentally canid—four-legged, digitigrade, with the body plan of a predatory hunter—but warped into something no natural wolf resembles. The body is massive and heavily muscled, with longer legs than a normal wolf and a deeper chest that speaks of terrible power. The fur is invariably dark: black, dark gray, or burned brown, and it lies sleek and oily against the massive frame, shot through with an unsettling iridescence in certain light, as though the creature itself sheds darkness. The mane is voluminous and bristles constantly, regardless of wind or emotion, as though perpetually raised by unseen forces. The head is large and wedge-shaped, with a longer snout than a dire wolf but a more massive jaw structure. The teeth are enormous, yellow and cruel, visibly capable of crushing bone. The eyes are the most terrible feature: they burn with an unnatural intelligence, filled with hunger and malice and something approaching comprehension. The tail is thick and powerful, useful for balance and expression. The claws are non-retractable and wickedly sharp, suited equally to gripping prey and climbing. The whole presence is wrong—a creature that violates the natural order and inspires a dread beyond practical fear.

## Key Behaviors

Wargs organize into packs of five to fifteen individuals, with rigid hierarchies centered on the strongest or most magically potent individuals. Unlike natural wolves, wargs do not hunt cooperatively for survival but perform coordinated military operations with clear tactical objectives. A warg pack under a dominant alpha operates with precision and subordination that natural wolves never achieve. They maintain territories but are far more aggressive in defending or expanding them than natural wolves, conducting deliberate raid operations against rival packs and other predators. They are diurnal or nocturnal as circumstances dictate, fully capable of hunting effectively in either condition. They are omnivorous but strongly carnivorous, and they show particular predatory preference for humanoid prey—elves, humans, dwarves—treating such hunting as a form of sport rather than mere survival. Wargs bonded to Grukar riders develop a partnership unlike that of any animal and rider; the warg appears to understand tactics, strategy, and the wider purpose of a campaign. Wargs are capable of vocalizing beyond simple howls and growls, producing subsonic rumbles that carry complex meaning to other wargs across vast distances. They live significantly longer than natural wolves, with individuals potentially reaching forty years or more.

## Combat Strategy

A warg pack's combat doctrine is organized and ruthless: flanking maneuvers that isolate targets, coordinated ambushes from multiple vectors, and relentless pressing of attacks until prey collapses. Individual wargs demonstrate clear understanding of formation fighting, maintaining coordinated positions and supporting flanking maneuvers without apparent communication. A warg will shift tactics based on observed enemy behavior, focusing on archers first, then isolating individual targets for elimination. Against heavily armored opponents, wargs coordinate attacks on weak points—joints, exposed legs, faces—rather than attempting to overwhelm through raw force. A warg pack defending territory or protecting young exhibits suicidal determination, attacking far stronger opponents without hesitation. A single warg separated from its pack becomes cautious but not cowardly; it will pursue prey relentlessly even alone, understanding that it outclasses most individual opponents.

## Attack Methods

### Crushing Bite

The warg's bite force exceeds that of natural wolves and dire wolves combined. A single bite can crush bones, sever limbs, and penetrate armor of moderate strength. The warg's technique involves clamping and holding, pinning prey while pack-mates attack.

### Coordinated Pack Strike

Multiple wargs attack simultaneously from different vectors, each strike designed to support the others' attempts to isolate and overwhelm targets. This coordination suggests real communication and planning.

### Raking Claw Attack

At close range, the warg tears with claws as readily as teeth, particularly effective against targets that are trying to flee or defend against the bite.

### Driving and Trapping

The warg pack uses terrain and coordinated movement to drive prey toward specific locations—cliff edges, dead-ends, prepared ambush sites—forcing targets into positions of maximum vulnerability.

## Special Abilities

### Supernatural Intelligence

The warg reasons as a sapient being does: it understands tactics, hierarchy, cause and effect across time, and even the broader contexts of military campaigns. While not capable of language or abstract philosophy, the warg can plan multi-stage operations, remember specific individuals, and make decisions based on calculated risk versus reward.

### Pack Dominion

A warg pack under a dominant alpha operates with supernatural synchronization. Individual wargs maintain formation without apparent communication, anticipate the actions of pack-mates with perfect accuracy, and adjust tactics mid-combat based on emerging circumstances. This coordination suggests shared consciousness or magical link between pack members.

### Darkvision

The warg hunts as effectively in absolute darkness as in daylight, seeing in the infrared spectrum and through magical darkness with equal competence. This gives warg packs enormous advantage in nocturnal or subterranean environments.

### Aura of Dread

The presence of a warg induces supernatural fear in prey creatures—a primal dread that reason cannot dispel. Creatures in the presence of a warg pack are pressed by fear toward panic, flight, or paralysis.

### Terrible Howl

The warg can vocalize in a subsonic howl that carries across distances of miles, conveying complex meaning to other wargs and disrupting the morale of hearing creatures. This howl can coordinate pack actions across great distances and shake the courage of lesser beings.

### Supernatural Endurance

Wargs are less subject to fatigue than natural wolves and can maintain pursuit for days at a time without rest, seemingly driven by will and magic rather than mere physiology.

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
