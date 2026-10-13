---
shortcode: courser
name: {full: Courser, aliases: []}
type: being
subType: creature
description: "A light, swift horse bred for speed and stamina, the nervous, quick-reacting mount favored by scouts, messengers, and light cavalry."
tags: [animal, creature]
data: {packFolder: animals, icon: horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+24
    end: 1d6+7
    agl: 1d6+9
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+8
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 52}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 1100, calc: "1100"}
      reachBase: 0
      bodyScaleBase: 1.79
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 150
        leaguesPerWatch: 12
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[courser|Courser]]{float=top-left}

The rider is bent low over the neck of a slim bay horse, and the pair come down the ridge at a flat gallop with the dust standing behind them. The horse's head is high and its eyes are wide, rolling white at the rim. It checks at the ford, snorting, and the rider has to speak to it twice before it will go on into the water.

# Dossier {#dossier}

The Courser is the light, fast horse of the steppe and the post-roads, fourteen to fifteen hands high and eight hundred to a thousand pounds, bred for speed and stamina rather than weight. Scouts, messengers and light cavalry ride it. Herds are bred on the grass of the [[place-khzryndsrtrgn|Khazryn]] steppe, the horse pasture of [[place-velanthrgn|Velanthia]] and the plateau of [[place-byzariargn|Byzaría]]. It outruns a draft or war horse but lacks the weight for a charge.

## Presentation

An elegant horse built long in the leg rather than heavy in the body. The legs are fine-boned, with the tendons and muscles showing under thin skin. The chest is deep rather than broad, the back short and straight, and the neck long and curved, carried high. The head is fine, with flaring nostrils and large, often wide eyes. The coat is sleek and comes in chestnut, bay, black, gray or spotted. The mane and tail are fine but full.

## In the Land

Coursers are bred on the grass of the [[place-khzryndsrtrgn|Khazryn]] steppe, the horse-pasture of [[place-velanthrgn|Velanthia]] and the plateau of [[place-byzariargn|Byzaría]], and they are kept at the posting-stations along the long roads. A courser lives on pasture in summer and hay and grain in winter, and it is ridden hard for a day and rested for two. The tribes run their light horses in herds, and a colt is handled at a year.

## Key Behaviors

Coursers are nervous, quick to react to a sound or a movement and aware of danger. They need a steady rider, since a rider's anxiety passes to the horse. They bond hard with a handler they trust. They need less feed than a heavy horse but regular water and rest. They answer light pressure from whip and spur, and a heavy hand makes them resistant. They remember routes and threats well. When one panics it bolts at speed. They are less suited to discipline than chargers. Wild ones live in large herds.

## What the Scouts Do

A scout, a courier or a rider of the border companies chooses a courser for its speed and its nerve, and rides it light, with a short stirrup and little baggage. A message-rider keeps two or three on the road and changes horses at each station. The Byzarian marches keep coursers for their border scouts, and the Hosts of Velanthia ride them on raids. The tribes of the steppe prize a courser's bloodline and keep it in the family for generations. A courser fed too richly turns fretful, and a heavy hand ruins one in a week.

## Signs

- A rider's dust, a long way off, moving fast along a ridge and never slowing.
- Light, narrow hoof-prints, cut deep at the toe, in a soft river-bank.
- A horse at a post-station standing sweat-streaked and trembling, led in circles to cool.
- A fine-boned horse that shies at a leaf in the wind and then stands for a whole afternoon with its rider.
- A line of horses at full gallop across a flat, with riders low over the neck.

## Combat Strategy

A Courser’s strength in a fight is speed and mobility. An ideal strategy for a Courser-mounted rider is to use hit-and-run tactics: make passes at enemies while maintaining distance, strike from unexpected angles, and retreat at speed if pressed. The horse is not defensively strong and should not be expected to stand and fight. A competent Courser rider will use terrain, speed, and mobility to overcome opponents relying on weight and strength. Against multiple mounted opponents on heavier horses, a Courser can typically outmaneuver them. Against a mounted knight on a Charger, the Courser’s speed is its advantage, allowing evasion of the more powerful charge but reducing opportunity for decisive counter-attacks.

## Attack Methods

### Precision Hoof Strike

With focused effort, the Courser can deliver a sharp kick—typically rear legs—with surprising force for its size. The impact is more precise than a heavier horse’s stomp but carries somewhat less force. The Courser uses hoof strikes defensively against unmounted threats or to deter attackers from approaching the rider.

### Bite and Nip

The Courser will bite if grabbed or if an opponent comes too close. The bite is less powerful than a heavier horse’s bite but is sharp and causes bleeding. The Courser uses biting primarily for defense rather than as an offensive strategy.

### Quick Evasion and Repositioning

The Courser’s primary contribution to combat is not through direct attack but through speed that allows the rider to maintain positioning advantage. The horse rapidly changes direction, accelerates, and decelerates in ways that heavier horses cannot match, allowing mounted riders to execute tactics that ground-based or mounted-on-heavier-horses opponents cannot.

## Special Abilities

### Speed and Acceleration

A Courser can accelerate from standstill to gallop in seconds and can sustain speeds that exceed most horses significantly. The speed is particularly useful for distance travel and for tactical retreat. A Courser at full gallop is faster than a human can run, faster than most mounted pursuers can match, and faster than most projectiles can travel.

### Rapid Reflexes and Quick Maneuvering

The Courser’s physiology supports quick reaction to rein and spur inputs, allowing it to change direction sharply, stop quickly, and execute maneuvers that would be impossible for heavier horses. This agility allows riders to navigate tight terrain, avoid obstacles, and respond instantly to emerging threats.

### Sensitive and Responsive to Training

A Courser that has bonded with an experienced rider will respond to subtle communications: weight shifts, barely-perceptible rein movements, and leg pressure that heavier horses might not notice. This responsiveness allows riders to execute complex tactical maneuvers and maintains constant communication between rider and mount.

### Sustained Endurance Despite Light Build

Despite light weight and fine bone structure, a well-trained and well-fed Courser has great endurance, capable of traveling thirty to forty miles per day at moderate pace and maintaining reasonable speed for hours at a time. This endurance advantage is particularly useful for scouts and messengers who need to cover ground quickly.

## Attributes

- **Strength:** 25-30 (1d6+24)

- **Endurance:** 8-13 (1d6+7)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 3-6 (1d4+2)

- **Aura:** 3-6 (1d4+2)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 3-6 (1d4+2)
