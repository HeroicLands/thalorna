---
shortcode: crgclmbr
name: {full: Cragclimber, aliases: []}
type: being
subType: creature
description: "A draconic cliffside ambush predator perfectly adapted to vertical hunting, lurking invisible on rockfaces until the moment it strikes."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+10
    end: 1d4+12
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Whip
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Whip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[crgclmbr|Cragclimber]]{float=top-left}

You are halfway down the cliff on the rope, with the sea working at the rocks below and the gulls screaming, and the basket at your belt half full of eggs. The ledge below you is gray rock, streaked white, empty. Then a piece of the ledge turns its head. It is a lizard as long as a man, slate-gray and dun, the exact grain and color of the cliff, and it is looking up at you with eyes like polished granite. It lifts one clawed foot off the rock. Its long tail uncurls from a crack, and the tip of it, unhurried, reaches up toward your rope.

# Dossier {#dossier}

The Cragclimber is a dreadspawn shaped like a lean, long-tailed drake, about six feet long and two hundred pounds, made to hunt on vertical rock. It clings motionless to a cliff face, colored and textured like the stone, and strikes whatever passes within reach, then lets the cliff do the rest. It can harden its scales to stone. The cliff coast of [[place-zuravlenrgn|Zûravlen]], Provènzia's western seaboard on the cold ocean, has had cragclimbers on it for as long as its egg-gatherers have gone down on ropes, and the coast reckons them among the costs of its hard living. Like every dreadspawn it was made and it cannot breed; more than one of the pattern hunts that coast, and each is known by the stretch of cliff it holds.

## Presentation

The cragclimber is long, lean and sinewy, built for flexibility, with four strong limbs ending in long, curved climbing claws and particularly heavy hind legs. Half its length is tail, which is jointed, prehensile and strong, and it can coil the tail round a spur of rock to hang by it or round a man's ankle to pull him off. Its scales are small and overlapping, gray-brown, slate and dusty tan, and they match the rock it lies on in color and in grain. The head is wedge-shaped, the mouth full of backward-curving teeth, and the eyes gray and hard as polished stone. When it hardens its scales they turn dull and rough like weathered rock, and an arrow that strikes them rings and falls away.

## In the Land

Zûravlen's coast is long and cliff-bound, with few harbors and the cold ocean working at its foot, and its cliffs are full of seabirds. The cragclimbers hunt the bird ledges: each one holds a few miles of cliff face, lies on it among the nesting birds, and takes gulls, auks, eggs, seals hauled out on the rocks below, and anything else that comes along the rock. They are found too on the sea-cliffs of the river gorges behind the coast and in the high rocky country inland, wherever there is steep stone. They do not go out onto level ground or into the farmed valleys, and they are never met in the settlements.

## Key Behaviors

A cragclimber spends most of its life motionless, pressed against the rock, waiting. It hunts at dawn and dusk, when the light is flat and the shadows on the cliff are long. When prey comes within reach, it strikes in an instant, claws and tail together, and tries to knock its prey off the cliff; it then climbs down to eat what has fallen. The foot of a cragclimber's cliff is littered with bones and broken eggshell. When it has eaten it lies still for days. Cragclimbers ignore one another. They are patient, they learn the paths along a cliff that men and animals use, and they wait beside them.

## What the Egg-Gatherers Do

The egg-gatherers of the Zûravlen coast go down the cliffs on ropes every spring for the seabird eggs, which are a large part of the coast's food in a lean season, and every village has its stretch of cliff and its rules for it. Nobody goes down alone: a man on the rope has a partner on the clifftop holding a second rope, and a third man with a sling and a bag of stones watching the face. A stretch where a cragclimber hunts is worked only at midday, when the light is high and the creature is easiest to see, and the gatherer goes down carrying a short iron hook to beat off the tail. The salt-workers say a cragclimber hates water; a gatherer who sees one on his ledge throws a bucket of seawater over it before he throws anything else. A dead cragclimber's hide, hardened, makes a buckler that turns an arrow.

## Signs

- Bones, broken eggshell and the remains of seals heaped at the foot of a cliff, under one stretch of the face.
- Long, parallel claw-scratches across the white guano of a ledge.
- Seabirds that nest on every stretch of a cliff but one, where the ledges stand empty.
- A rope found frayed and cut on the rock, with no edge there sharp enough to cut it.
- A patch of rock on a cliff face that is a slightly different shape from one day to the next.

## Combat Strategy

A cragclimber strikes once from perfect concealment, as hard as it can, and tries to wound its prey or knock it off the rock. Then it uses the cliff: it hooks with its tail, shoves, and drives the victim toward the edge and the loose rock. If the prey proves tougher than expected, it hardens its scales and withdraws across the face, where nothing without claws can follow, and waits for the victim to weaken or come back. It does not follow anyone onto level ground.

## Attack Methods

### Raking Claws

The cragclimber slashes with its forefeet in quick succession, opening deep cuts in the arms, the face and the hands that hold the rope, so that the victim bleeds and cannot climb.

### Tail Whip

The long tail lashes or coils. It hooks round a leg or an arm and pulls, topples a man standing on a ledge, or knocks him back toward the drop.

## Special Abilities

### Diving Strike

From above, the cragclimber launches itself off the rock onto its victim, claws first, and the weight of the leap and the tearing of the claws together strike harder than either alone.

### Stone Camouflage

On rock, still, it is nearly invisible, and it can hold its place for days without being seen.

### Vertical Supremacy

It climbs, runs and turns on sheer rock and overhangs as easily as a dog on a road, and a man on a rope or a ledge cannot follow or escape it there.

### Stone Hardening

In a fight it hardens its scales to the toughness of stone, and blows and missiles do little against it while it holds them hard.

### Water Weakness

Water softens its hardened scales and makes it let go. Soaked through, it cannot harden itself, and it climbs away from the wet.

## Attributes

- **Strength:** 11-14 (1d4+10)

- **Endurance:** 13-16 (1d4+12)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 15-18 (1d4+14)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
