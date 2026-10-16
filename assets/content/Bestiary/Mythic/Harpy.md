---
shortcode: harpy
name: {full: Harpy, aliases: []}
type: being
subType: creature
description: "A quasi-reptilian flying humanoid of high peaks and coastal cliffs, combining predatory cunning with animalistic, territorial ferocity across a fourteen-foot wingspan."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-harpy
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
  kbcat: mythic
  attrRollFormula:
    str: 1d4+6
    end: 1d4+5
    dex: 1d4+6
    agl: 1d6+7
    per: 1d6+13
    aur: 1d4+3
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+4
    emp: 1d4+1
    elo: 1d4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Thrown Stone
      type: skill
      system:
        shortcode: stone
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: stone
          name: Thrown Stone
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 20
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 4
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 3
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 3
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 4
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 4
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: &a1 {blunt: 0, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: *a1
          - name: Right Arm
            shortcode: rarmloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: *a1
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: *a1
          - name: Left Arm
            shortcode: larmloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: *a1
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: *a1
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2 {blunt: -1, edged: 0, piercing: -1, fire: 1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: *a1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: *a1
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 6
            protectionBase: *a1
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: *a1
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 6
            protectionBase: *a1
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: *a1
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
      weight: {base: 70, calc: "70"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 55
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The scream comes off the cliff above the beach and goes on too long for any gull. There are three of them on the ledges, hunched and pale, and as you watch, one spreads a pair of mottled wings fourteen feet across where its legs should be and drops into the wind. It has a woman's head and shoulders, gaunt and sharp-faced, and under them nothing a woman has: chitinous legs, clawed feet, and wings that glisten wet. It passes over you low enough to smell, carrion and copper, and a stone the size of a fist comes down out of the sky behind it and bursts on the shingle at your feet.

# Dossier {#dossier}

The harpy is a flying hunter with the head, arms and torso of a gaunt woman set on the wings and clawed legs of something that is neither bird nor lizard, five and a half feet from crown to wing-root and fourteen feet across the wings. It nests in flocks on the sea-cliffs of the volcanic islands off the northwest coast of the [[place-nrdlndsrgn|Nordlands]] and on the fjord headlands, and on isolated peaks inland, and it hunts by stooping, by driving, and by dropping stones from a height. It eats seal pups, sea-birds, goats and people, and it treats all people alike. The fjord crews that take eggs on the island cliffs lose a man to the harpies most seasons and go on taking the eggs.

It has the cunning to set an ambush and no speech, no tools and no interest in either. It is a very dangerous animal that looks like something else.

## Presentation

A gaunt, pale torso with a woman's head, dark matted hair, sharp features and a mouth of small pointed teeth, set on a body that is all wing and leg. The wings grow from the hips, overlapping feathers and thin membrane in mottled greens, purples and browns, slick with a secretion that smells of decay. The legs are thin, hard and jointed like an insect's, ending in three-toed feet with claws as long as fingers that grip rock and tear flesh. The hands have long nails. The eyes are large and forward-set and open wide in poor light. On a ledge it crouches on its feet with the wings folded like a cloak.

## In the Land

Harpy flocks nest on the volcanic islands off the Nordlands' northwest coast, where the hot springs keep the cliffs clear of ice and the sea-bird colonies feed them, and on the sheer fjord headlands and inland crags along the northern coast; smaller flocks hold peaks in the mountain tracts behind the fjords. A flock is three to fifty birds on one cliff, with the biggest and oldest on the highest ledges. They range a day's flight from the nest and come back to it. They are not found in forest or on flat ground, where they cannot stoop and cannot climb away.

## Key Behaviors

Harpies hunt by day and are at their worst at dawn and dusk, when the light is poor for a bowman. They quarter the sea and the shore from a height and come down on seal pups, nesting birds, a stray goat, a man alone on a beach or a boat under the cliff. A flock drives prey off a ledge or into a gully and takes it there, and the birds drop stones on a thing they cannot reach. They cache meat on high ledges and gorge for days after a good kill. They talk to each other in shrieks and wing-beats and plan an ambush well enough to lay one for a party coming back along a known path. In spring the males fight in the air and the females defend their nests to the death.

## What the Fjord People Do

The egg-crews that work the island cliffs go down on ropes in parties, with a man at the top holding a bow and another a shield over the climber, and they work the harpy ledges last or not at all. A boat under a harpy cliff keeps a sail or a hide stretched over the rowers against the stones. A flock that has taken to a headland near a steading is burned off: men climb to the nests at night with torches and pitch and come down fast. Harpy wing-feathers make a poor fletching and nobody wants the rest. The fjord people hold that a harpy was a woman once and do not say what she did; a gudi asked about it says the Ten have never claimed the harpies and the harpies have never asked.

## Signs

- A scream off a cliff that goes on too long for a bird and is answered from several ledges.
- Bones of seals and goats on a ledge, with the skulls broken from above.
- Stones lying on a beach or a path far from any slope they could have fallen from, some of them bloody.
- Sea-birds rising all at once from a colony and wheeling without settling.
- A smell of carrion on a clean sea wind.

## Combat Strategy

The flock stoops from above and behind, where a shield does no good, several birds at once, each one striking and climbing away for the next. They go for the archers first and then for whoever is alone. From a height they drop stones, which they pick up from the ledges and the shingle and let fall with an aim that improves with practice; a flock over a boat sinks it. They drive a running man toward a drop or a dead end and finish him there. A harpy that is hurt goes up where nothing can follow. Under trees, under a roof or in a narrow gully they lose the wind and the height and fight badly, and that is where they are killed.

## Attack Methods

### Claw

The foot-claws rake on the pass, opening long wounds across the back and shoulders, and the hands tear at the face and eyes of a man who is down. The weight of the stoop knocks a man off his feet.

### Thrown Stone

From a height a harpy lets fall a stone the size of a fist or a head, picked up from its ledge, and a flock drops a dozen at once. A head-sized stone from a hundred feet breaks a shield arm or a skull.

## Special Abilities

### Aerial Superiority

In open sky a harpy is out of reach of everything but a bow, and it comes from any quarter faster than a man can turn. Trees, low roofs and narrow places take all of this from it.

### Flock Coordination

A flock hunting together moves as one, each bird knowing the others' lines, and lays a two-sided ambush that a lone harpy could not. A flock is far cleverer than any bird in it.

### Shriek of Terror

The harpy's scream is pitched to carry and to hurt, and a party under a screaming flock loses its nerve and its order; animals bolt and men run for the wrong cover.

### Cliff Dwelling

Harpies nest and perch where no man can climb, cling to vertical rock, and keep their footing on ledges a goat would refuse.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 6-9 (1d4+5)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 14-19 (1d6+13)

- **Aura:** 4-7 (1d4+3)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 5-8 (1d4+4)

- **Empathy:** 2-5 (1d4+1)

- **Eloquence:** 1-4 (1d4)
