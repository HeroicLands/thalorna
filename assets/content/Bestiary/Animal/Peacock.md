---
shortcode: peacock
name: {full: Peacock, aliases: [Peafowl]}
type: being
subType: creature
description: "A spectacular southern bird whose iridescent male unfurls a seven-foot train of elongated tail coverts in the most dazzling display in the world."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+4
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+10
    aur: 1d6+10
    wil: 1d4+5
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Spur Slash
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Spur Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -3, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Peck
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Peck
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 13, calc: "13"}
      reachBase: 0
      bodyScaleBase: 0.6
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aerial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[peacock|Peacock]]{float=top-left}

Just after dawn a scream rips across the temple garden, a piercing, many-noted cry like a woman calling for help. On the wall by the gate a bird has fanned its tail into a shimmering wall of blue and gold, taller than a man, and is turning slowly, trembling it, with a low rustle. Ranks of eye-spots shift in the sunlight. The peahen it faces has not looked up from the grain.

# Dossier {#dossier}

The Peacock is the peafowl of the monsoon south, the male three to four feet tall and nine to thirteen pounds, with a train that runs to seven or eight feet when folded and spreads over six feet across. It is wild in the forests, scrub and river margins of [[place-vedyarargn|Vedyara]], half-wild in the farmland and tame in the temples, palaces and great estates. In southern religion it is tied to several gods, its plumage is said to hold all the colors of creation, and the eyes on the tail are signs of divine watchfulness. Killing one is forbidden in most southern jurisdictions, with penalties from a fine to exile.

## Presentation

The male's head and neck are glossy, iridescent blue and green, topped by a fan-shaped crest of upright feathers each tipped with a small disc. The body is green and bronze on the back, with dark wing feathers. The train is about two hundred long upper tail feathers, each with a bare shaft and an eye at the tip, an oval of concentric rings of blue, green, gold and bronze. The peahen is a medium-sized brown bird with greenish neck feathers and no train, crest or bright color.

## In the Land

Peafowl live wild in the forests, scrub and river margins of [[place-vedyarargn|Vedyara]] and half-wild in the farmland, and tame in the temples, palaces and great estates. A flock of one male and several hens feeds on the ground by day and roosts in the tall trees at night. In the dry months the males call from the roofs at dawn, and a shrieking chorus at dusk tells a village that a snake or a cat is moving in the dark.

## Key Behaviors

Peafowl live on the ground and roost in trees at night. They eat seeds, grain, insects, small reptiles and anything else going, including offerings left for the gods and food on an unattended table. In the breeding season a male keeps several females, and outside it they keep in larger flocks. The male displays to the hens, and sometimes at his own reflection, raising and trembling the train and turning slowly, with a humming vibration and a piercing, many-noted scream. The scream sounds at dawn, at dusk, before rain, when alarmed, and often at other times. They fly short distances over walls and low roofs on heavy wingbeats, preferring to walk. In temples and gardens they are bold, stealing food and strutting through crowds.

## What the Temples Do

The temples keep peacocks and feed them, and nobody strikes a bird in a sacred precinct. The feathers are cut for fans, canopies and the headdresses of dancers, and they are shed in the summer and collected from the ground. A farmer tolerates the birds in the fields, since they eat insects and snakes. A bird that eats the grain is chased away with a clap of the hands. A palace garden keeps a pair at the gate, and a visitor is greeted by a scream.

## Signs

- A harsh, carrying cry at dawn from a rooftop or a high tree.
- A trail of long, eyed feathers on a garden path.
- A male in the sun with his train raised in a shivering fan, turning slowly.
- A line of three-toed prints across wet mud with a drag-line behind.
- A swarm of small birds mobbing a bough where a snake has been seen.

## Combat Strategy

Peafowl are not combatants and will flee from any real threat. A cornered male will face the threat and spread the train in a defensive display — the sudden explosion of color and the array of eye patterns may startle predators and buy the bird time to escape. Males will also fight each other during the breeding season, using their leg spurs — short, sharp keratinous spikes on the back of the lower leg — to slash at rivals in brief, violent confrontations. These fights are rarely fatal but can draw blood and occasionally blind an eye.

Against humans, peafowl are a hazard only in the sense that they will eat your food, defecate on your equipment, and wake you at dawn with screaming. The primary "combat" interaction between adventurers and peafowl is the social combat of trying to eat, sell, or remove a sacred bird in a southern settlement without being arrested or mobbed by an outraged community.

## Attack Methods

### Spur Slash

A defensive attack used primarily in male-on-male combat. The bird jumps and kicks, driving the sharp leg spurs at the opponent's head and body. The spurs are hard and pointed enough to cut skin and draw blood, and a well-placed strike can blind an eye. Against humans, this attack is more startling than dangerous, but a rooster-sized bird launching itself at your face with sharp implements is not a pleasant experience regardless of the damage potential.

## Special Abilities

### Iridescent Display

The peacock's train display is the most visually spectacular natural phenomenon in the southern animal kingdom. The structural coloration — produced by light refraction rather than pigment — means the feathers shift color depending on the viewing angle, creating a shimmering, rippling effect that is difficult to look away from. Whether this display has any supernatural component (as some southern theologians claim) or is simply the most effective product of sexual selection in nature, it is beautiful enough to stop conversations, halt work, and cause hardened travelers to stand and stare.

### Dawn Alarm

The peacock's screaming call — given reliably at first light — functions as an alarm that is impossible to sleep through and audible at considerable distance. Southern settlements treat peafowl as a natural alarm system, and the birds' alarm calls at unusual hours (triggered by the approach of predators, strangers, or snakes) provide a warning that the community has learned to take seriously. A temple or village with resident peafowl has a perimeter alert system that no human sentry can match for reliability.

### Snake Detector

Peafowl are aggressive hunters of snakes, including venomous species. They detect snakes through keen eyesight and respond with focused pecking attacks that target the snake's head. Their quick reflexes and hard beak allow them to kill cobras and vipers with relative impunity, and settlements that maintain peafowl populations report significantly lower rates of snakebite. This practical function — combined with their sacred status — makes peafowl useful residents despite their considerable nuisance value.

### Sacred Immunity

In most southern jurisdictions, peafowl are legally and religiously protected. Harming, killing, or removing a peacock from a temple complex is a punishable offense, and communities near wild peafowl populations enforce informal protections with equal vigor. This sacred status means that peafowl exist in a state of total confidence around humans, which makes them simultaneously endearing and infuriating. For adventurers, the practical consequence is that any violent interaction with a peacock — even an accidental one — risks serious social and legal consequences.

## Attributes

- **Strength:** 3-6 (1d4+2)

- **Endurance:** 5-8 (1d4+4)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 11-16 (1d6+10)

- **Will:** 6-9 (1d4+5)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
