---
shortcode: crglrkr
name: {full: Crag Lurker, aliases: []}
type: being
subType: creature
description: "A horse-sized ambush spider that scales sheer cliffs in ghostly silence before striking prey in rocky, vertical terrain."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+10
    dex: 1d6+9
    agl: 1d6+8
    per: 1d6+11
    aur: 1d4+5
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Envenoming Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Envenoming Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Leg Grapple
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Leg Grapple
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 15, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, entangle: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 3}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 3}
          - {name: Legs, shortcode: legszone, probWeight: 4}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.22
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

![[crglrkr|Crag Lurker]]{float=top-left}

The crack in the gully wall is a shadow among shadows, and the gray stone beside it has a grain like every other stone on the mountain. Then the grain moves. A leg as long as a man unfolds from the rock, and another, and the shape resolves into a body the size of a horse, eight black eyes in two rows catching the light, hanging from the sheer face above the path as if the face were a floor. Two mandibles the length of your hand click together once, flint on stone.

# Dossier {#dossier}

The Crag Lurker is the great rock spider of the [[place-graznmntns|Grazian]] north face: a horse-sized body on eight legs that reach eight to ten feet, about two hundred and fifty pounds, with a carapace grained and colored like weathered gray stone. It lives in the cracks of cliffs and the ceilings of caves, strings its webs across the places where animals pass, and waits in its crevice for days for a line to shake. The guides call it the crack hunter, and the labyrinth-walkers of [[place-vurdil|Vurdish]] call it the ceiling-hunter of the upper passages, and both mean the same animal.

A caravan meets it on a ledge path or at a cave mouth that looked like shelter. A party in the cut passages under the mountains meets it where the passage roof goes up out of torchlight.

## Presentation

A spider of enormous size, built heavy rather than fast. The forebody is a compact dome of hardened chitin; the abdomen behind it is round and pendulous and holds the silk. The legs are long, jointed and dexterous, each ending in a cluster of hooked claws that grip stone. The whole carapace is gray or dull brown with a relief like rock grain, so that a motionless Lurker on a cliff is a boss of stone. Eight eyes in two rows, four looking forward and four to the sides, show as a faint gleam when a torch catches them, and the gleam is often the first thing seen. The mandibles are long, sharp and curved slightly down. It smells of musk, strongly enough that horses and dogs find it before people do.

## In the Land

Crag Lurkers hold the gullies and ledges of the Grazian north face above the [[place-dkrqrrgn|Diqraqor]], where they wait on the ledges above the narrow places, and the upper galleries of the [[place-grazruins|ruins and labyrinths]] under the glaciers, where a passage cut tall by whoever cut it gives them a ceiling to hang from. Each spider holds five to twenty square miles of rock and almost never leaves it. It wants a deep crack or a cave for its lair, out of the weather, and a route below it that goats, rams or caravans use.

## Key Behaviors

A Lurker builds and keeps a web-work across its whole range: anchor lines from the cliff to boulders and spurs, funnel webs across the paths its prey uses, retreat lines back to the lair. The lines are its senses. It feels every vibration that comes along them and knows where a thing is on the mountain, how heavy it is and how fast it is moving, in full dark. It sits in its crevice for days or weeks between meals and comes out when a line shakes. It eats its prey whole over a long while, molts once in a year or two and is soft and vulnerable for some days afterward, and it never moves its home while the hunting holds.

## What the Guides Do

The guides who lead strings over the passes read the rock for lines. A single silk strand across a gully, thick as a bowstring and gray with dust, means a Lurker above, and a guide who finds one turns the string back and goes round by the longer way. Nobody camps in a cave on the north face without putting a torch to its roof first. In the labyrinths, parties walk with a torch held high and a man watching the ceiling, and they do not run a passage whose roof they cannot see. The silk is worth taking when the spider is dead: dried, it does not rot, and a rope of it holds a laden mule.

## Signs

- Gray strands across a gully or a path at the height of a man's chest, dusty, stronger than any cord.
- Dried husks of goats and rams wedged in a crack, drained and light.
- A faint double row of glints high on a wall or a cave roof that does not move when the torch does.
- A strong smell of musk at a cave mouth, and horses that will not go in.
- Lines that run from a crevice to the ground on both sides of a narrow place, like the guys of a tent.

## Combat Strategy

The Lurker lets the prey come to the web. Once something is tangled it comes down the lines faster than its size suggests, bites several times to put the venom in, and binds the prey while it weakens. Prey that keeps clear of the webs it stalks across the rock, where it climbs far faster than anything on two legs, and drives toward the dense lines or a dead end. On its own ground, or hungry, it follows a long way. Hurt, or facing something it cannot bring down, it goes back up the rock to the crevice, and the crevice is too narrow and too high for pursuit. Its soft points are the joints of the legs and the underside of the abdomen; a Lurker caught on open ground in daylight, away from its lines, is a slow and frightened animal.

## Attack Methods

### Envenoming Bite

The spider lunges with the mandibles open and drives them in. They go through leather and light mail. The venom works within minutes, and several bites in quick succession will kill a man.

### Leg Grapple

Several legs at once pin a struggling victim's arms and body against the rock or the ground, holding it still for the bite.

## Special Abilities

### Web Entanglement

Prey blunders into a funnel web or has fresh silk thrown over it. The silk is immensely strong and sticky, a thing caught in it binds itself tighter by struggling, and getting free takes a sharp blade or great strength.

### Web-based Sensory Network

The lines across the range are the spider's nerves. It knows the place, weight and speed of anything moving on its mountain, in any light, and it does not hunt by chance.

### Neurotoxic Venom and Multiple Doses

The venom paralyzes nerve and muscle. One bite weakens; several kill by stopping the breath, over minutes rather than at once, which gives the spider time to bind its prey before it dies.

### Perfect Camouflage and Vertical Terrain Dominance

Still, the Lurker is stone. Moving, it crosses a sheer face as easily as a floor, and nothing that follows it onto the rock can match it.

### Spinning and Repairing Webs

A broken web is rebuilt and a new trap laid within hours. A range that has been cut through is strung again by morning.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
