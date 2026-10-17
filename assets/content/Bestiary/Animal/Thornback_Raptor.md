---
shortcode: thrnbckr
name: {full: Thornback Raptor, aliases: []}
type: being
subType: creature
description: "A five-to-six-foot bipedal reptilian pack hunter that coordinates ambushes with psychological terror through jungles, forests, and ruins."
tags: [animal]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+10
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Slashing Claw Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Slashing Claw Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Biting Attack
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Biting Attack
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thrnbckr|Thornback Raptor]]{float=top-left}

The wall of the old enclosure is head-high and built of fitted stone without mortar, and the grass inside it is long and gold. From the far side of the wall comes a cry: a man's voice, hoarse, calling for help in no language you know. You stop. The cry comes again, from a little to the left, and then, from behind you, a soft clicking. Over the top of the wall rises a head, long-jawed and mottled green and brown, with yellow eyes and a ridge of jagged bone running back from the skull down a neck that keeps on rising. It looks at you and opens its mouth, and the cry for help comes out of it.

# Dossier {#dossier}

The Thornback Raptor is a fast, two-legged reptile, five to six feet tall and about a hundred and fifty pounds, with a ridge of jagged bony plates down its spine and a curved slashing claw on each hind foot. It hunts in packs of four to eight, and it hunts with fear as much as with claws: a pack stalks its prey for hours, calls to it from the dark, mimics the cries of wounded animals and men, and attacks when the prey has broken and run. It lives in the green southeastern highlands of the [[place-sthrnsvnhs|Southern Savannahs]], where the grass is tall, the rivers run all year and the ruins stand, and it dens in the ruins.

## Presentation

A thornback raptor stands on two long, powerful hind legs with its body held level and a long stiff tail behind it for balance. Its scales are small, mottled green, brown and gray, and they blend with tall grass and broken stone. A row of jagged bony plates runs from the back of the skull along the neck, the spine and the tail, and lifts when it is roused. Each hind foot carries one large curved claw, held clear of the ground as it runs. The forelimbs are short and clawed. The head is long and narrow, with yellow, forward-facing eyes and a mouth of small, sharp teeth. It runs very fast in short bursts and turns on the spot. A pack talks constantly in clicks, hisses and low calls, and it can reproduce almost any sound it has heard.

## In the Land

Thornback raptors hold the highland belt of the southeastern savannah, where upland rivers keep the grass tall and the groves thick, and they den in the ruins there: the stone-walled enclosures, the raised platforms and the passageways of a civilization nobody remembers. A pack takes over a ruin, uses its walls as cover and its passages as dens, and hunts the grass and the river-groves for miles round it, following the great herds as they come through to graze. The packs keep away from the open central plains, where there is no cover to stalk from, and from the dense forest of the rainforest margin to the north. A ruin that holds a pack holds it for generations.

## Key Behaviors

A pack hunts at twilight and through the night under the direction of its leading pair. It singles out an animal, follows it at a distance without showing itself, and works at its nerves: calls from different directions, clicks in the dark, the bleat of a lost calf or the cry of a hurt man. When the prey panics and runs, or stops and turns at bay exhausted, the pack closes from several sides at once and the slashing claws do the rest. Raptors are clever and learn: a pack that has hunted men learns their voices and calls with them, and a pack that has been hunted from a ruin moves to another. The young are taught the hunt in mock hunts in the ruins, and the whole pack protects them.

## What the Herders Do

The savannah's hunter-herders know the ruins, and do not talk about them to outsiders; the intermediaries of the [[place-cntrlrnfrsts|Central Rainforests]] who trade with them have learned not to ask. What the intermediaries have pieced together is that the herders keep their cattle out of the highland belt at night, pen them inside thorn fences when they must graze near a ruin, and keep fires burning and drums going until dawn, because the raptors avoid loud noise and bright light. A herder alone at night who hears a familiar voice call his name from the grass does not answer it and does not go to look. Young men are said to prove themselves by taking a raptor's hind-claw, and the claws worn on cords by savannah traders at the forest margin are the only ones the north has ever seen.

## Signs

- Narrow three-toed tracks in mud by a river, in groups, the prints deep and long with the stride of a running man.
- Calls at night that sound like a wounded animal or a voice, coming from the grass and then from somewhere else.
- A cow or antelope found opened along the belly by long clean cuts, and little eaten.
- Bones and horns heaped inside a ruined enclosure, gnawed and scattered.
- Clicking in the dark beyond a fire, answering itself from several directions.

## Combat Strategy

A pack wears its prey down before it attacks. It surrounds a party at night, stays just out of the firelight, and calls: hisses, clicks, cries for help in a voice the party knows. It draws men away from the fire one at a time and kills them in the dark. When it does attack it comes from several sides at once, and each raptor slashes and withdraws, letting the bleeding do the work and going for whoever is hurt or alone. It avoids long fights and strong lights, and a raptor cut off from its pack usually runs.

## Attack Methods

### Slashing Claw Strike

The raptor leaps or kicks and slashes downward with the great curved claw on its hind foot. The cut is long and deep, opens bellies and thighs, and can cut a tendon and cripple a man. Repeated slashes leave him bleeding heavily.

### Biting Attack

The raptor bites with quick, cutting snaps aimed at exposed skin, the neck, the hands and the face, and its small sharp teeth leave deep punctures.

## Special Abilities

### Coordinated Pack Attack

The pack attacks from several directions at once, so that a man who faces one has two more at his back and cannot defend against all of them.

### Predatory Vocalization

Raptors call in clicks and hisses and mimic what they have heard: a wounded calf, a frightened horse, a man's voice calling for help or calling a name. The calls draw prey into the open and work on the nerves of those who hear them.

### Pack Coordination

A pack talks in calls and body signs and hunts as one under its leaders, and together it is many times more dangerous than its members would be alone.

### Fear Stalker

A party stalked by raptors through a night grows tired, frightened and suspicious, starts at shadows and makes bad choices. That is what the stalking is for.

### Surgical Precision

Raptors strike at the belly, the throat and the backs of the legs with great accuracy, and an exposed or unarmored man is in particular danger.

### Ambush Predator

Raptors strike best from cover, out of tall grass or from behind a wall, and an attack from ambush is very hard to meet.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 8-11 (1d4+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
