---
shortcode: sandwurm
name: {full: Sand Wurm, aliases: []}
type: being
subType: creature
description: "A subterranean apex predator up to a hundred feet long, using tremor sense to ambush prey from beneath the sand, virtually unstoppable underground."
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
    str: 1d6+33
    end: 1d6+27
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+12
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 37}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 31}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - name: Erupting Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Erupting Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 14, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Constricting Body
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Body
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 37, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 6}
          - {name: Forebody, shortcode: torsozone, probWeight: 22}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 12}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
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
            probWeight: 4
            protectionBase: {blunt: 14, edged: 13, piercing: 12, fire: 14}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 14, edged: 13, piercing: 12, fire: 14}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 12, fire: 14}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 12, fire: 14}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 14, edged: 13, piercing: 12, fire: 14}
      weight: {base: 100000, calc: "100000"}
      reachBase: 0
      bodyScaleBase: 2.2
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: dunes, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[sandwurm|Sand Wurm]]{float=top-left}

The camels feel it before you do. The whole string stops and the lead beast plants its feet and moans, and then you feel it too: a deep, slow trembling coming up through the sand into your heels, like a cart going over a bridge somewhere underneath you. The dune ahead of the string sags in a long line, as if a breath had gone out of it. Then the sand at its foot bursts upward in a column, and out of the column comes a head with no eyes in it, round and blunt and as wide as a house door, which opens into a ring of teeth that goes back and back into the dark. It hisses, a sound like sand poured on hot iron, and the smell that rolls over you is sulfur and old stone.

# Dossier {#dossier}

The Sand Wurm is the great burrowing predator of the eastern waste: fifty to a hundred feet long, ten to fifteen feet thick, scaled in beige and tan, with a round mouth eight feet across ringed with teeth that point inward, and no eyes at all. It lives under the deep dunes at the eastern end of the sands and in the caverns of the stone desert of [[place-idwkrrgn|Idvaqor]], swims through loose sand as a fish swims through water, and hunts by the tremor of feet on the surface above it. It takes wild camels, dune striders and gazelle, and whatever else walks over it. It swallows a man or a pony whole.

The tribes do not fight it. A sand wurm reported on a stretch of the road makes the caravans go round that stretch for a season, and the riders who sell passage there lose a season's income and say so to anyone who will listen.

## Presentation

A long, segmented, serpentine body as thick as a hut, covered in overlapping scales the size of shields, pale beige, yellow and tan, ridged and patterned so that the back of a resting wurm looks like a dune. The segments flex on broad, supple joints and the body moves in long waves. The head is a blunt, eyeless dome of heavier plates, pitted with small openings that taste the sand. The mouth fills the front of it: a circle that opens eight or ten feet wide, set with ring inside ring of backward-pointing teeth, each as long as a forearm, so that anything that goes in cannot come out. The throat runs back into the body. The animal smells of sulfur and hot rock.

## In the Land

Sand wurms live in the deeper desert of the east: the high dunes that run up to the edge of the stone desert, where riders arriving at [[place-sowidwell|Sovid Well]] after dark wait for dawn rather than cross the last dunes blind, and the caverns of the hollow ridges of [[place-ruweq|Uruvaq]], where one lairs in the lower galleries below the cut cisterns. A wurm holds a territory of many miles of sand and goes the length of it over a season; two wurms do not share ground, and a fight between them churns a stretch of desert into a new shape. They need deep, loose sand or soft rock to move through and are not found on the gravel reaches, on the salt or in the stone uplands of the west. The camel road crosses their country only at its eastern end, and the tribes that sell that stretch know where a wurm was last seen.

## Key Behaviors

A wurm lies still under the sand for days or weeks, its head a few feet below the surface, and waits for a footfall. It feels a walking animal through the ground at several hundred feet and knows by the rhythm what it is and how heavy; a running animal it feels further, and it comes. It rises under the prey in one movement and takes it in the mouth, and anything too big to swallow it coils round and crushes. Then it goes down again, and the sand closes over it. It eats seldom, a few times a season, and a wurm that has fed sleeps for weeks. It learns: a wurm that has taken a camel from a string knows the sound of a string, and one that has found a well where strings halt comes back to it. A wurm in its cavern hunts the passages the same way and wakes when a party runs.

## What the Caravans Do

A wurm reported is a stretch of road closed. The riders who hold the stage send the strings round by the stone or by another line of wells, which adds days and water, and the price of passage goes up for the season. A string that must cross wurm country does it in the cold hours, slowly, at a walk, with the camels' feet muffled in sacking and nobody running whatever happens, because a wurm hunts by the tremor and a running man is the loudest thing on the sand. A string that feels the trembling stops dead and waits. In Uruvaq the party that goes into the lower caverns walks, and the guides say the one who runs is the one who is eaten. Nobody has killed a wurm on the open sand that anyone at the wells can name. A dead one, found after a fight with another wurm, is stripped for its scales by the tribe that owns the ground; one scale makes a shield, and the teeth are sold at [[place-qisomrktcmp|Qiiso]] as daggers.

## Signs

- A deep trembling felt through the feet, with no sound, that stops when the string stops.
- A long, shallow trough across the face of a dune, as if a log had been dragged under it.
- Camels that refuse to move and moan, facing the same way.
- A stretch of dunes that has changed its shape since the last caravan, with a crater at its foot.
- A smell of sulfur on still air in the deep sand, where nothing burns.

## Combat Strategy

The wurm attacks from below without warning and takes what it rises under. If the first strike misses, it goes down again at once and comes up under another target, or under the same one from another side; it does not stay on the surface longer than it must. On the surface, with prey too large to swallow, it throws coils round it and crushes. It ignores the weapons of anything small enough to eat. A party that stands still and silent gives it nothing to strike at; a party that scatters and runs gives it a target for every man. Wounded, it sinks and does not come back that day. In a cavern, where it cannot sink, it fights with everything it has, and a passage with a wurm in it is a passage to leave.

## Attack Methods

### Erupting Bite

The wurm bursts up from beneath with its mouth open and closes it on whatever was standing there. Anything the size of a pony or smaller is swallowed whole and drawn down. A larger animal is torn by the rings of teeth as the wurm pulls it under.

### Constricting Body

Above the sand the wurm throws loops of its body round a large animal, a wagon or a group of men and crushes. Its weight alone breaks a camel's back.

## Special Abilities

### Tremor Sense

The wurm feels footfalls through sand and rock at several hundred feet, and knows from their rhythm the size and pace of what makes them. A still, silent man is nearly invisible to it.

### Burrow Master

It moves through loose sand at the pace of a trotting horse and through soft rock more slowly, and it is gone below the surface in a few heartbeats.

### Ground Collapse

A wurm passing beneath a dune or a cavern floor leaves the ground hollow behind it. A slope collapses into its wake and buries what stands on it, and a cavern floor it has passed under gives way.

### Massive Strength

It overturns a loaded wagon, breaks a boulder in its coils and shakes the ground for a mile when it fights.

### Regeneration

Its wounds close in days. A wurm that was driven off hurt is whole again by the next season.

## Attributes

Strength
: 34-39 (1d6+33)

Endurance
: 28-33 (1d6+27)

Dexterity
: 8-13 (1d6+7)

Agility
: 8-11 (1d4+7)

Perception
: 13-18 (1d6+12)

Aura
: 7-10 (1d4+6)

Will
: 10-15 (1d6+9)

Reasoning
: 4-7 (1d4+3)

Creativity
: 3-6 (1d4+2)
