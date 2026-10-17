---
shortcode: cvtrll
name: {full: Cave Troll, aliases: []}
type: being
subType: creature
description: "A slow-witted but devastating cavern apex predator that hunts in absolute darkness using senses far keener than any humanoid's."
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
    str: 1d6+25
    end: 1d6+27
    dex: 1d4+5
    agl: 1d4+5
    per: 1d4+8
    aur: 1d4+9
    wil: 1d4+13
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 31}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 8, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Terrible Bite
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
          name: Terrible Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 8}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Legs, shortcode: legszone, probWeight: 12}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 1300, calc: "1300"}
      reachBase: 0
      bodyScaleBase: 1.84
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 55
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[cvtrll|Cave Troll]]{float=top-left}

The old gallery goes down past the last of the timbering, and your lamp shows bones on the floor: a pony's skull, ribs, a miner's boot with the foot still in it. A wet, rattling breath comes out of the dark ahead, slow and enormous. Then two small lights, blue-white and pupilless, come on at a height well above your head, and under them, as the creature leans into the lamplight, a long pale face with a jaw that hangs open and does not close, full of teeth. Its skin is the color of a fish's belly and faintly shining. A hand comes out of the dark onto the gallery wall, four long fingers with claws like hay-hooks, and grips the rock.

# Dossier {#dossier}

The Cave Troll is a dreadspawn made for the deep places: ten to twelve feet tall, long-limbed and narrow-bodied, pale and faintly luminous, with a jaw full of teeth and claws like hooks, and a body that heals almost any wound. It hunts in total darkness by hearing and smell, and it eats anything it catches. The [[affiliation-motefnir|Faith of Mótefnir]] names the trolls among the god's work without hedging, and the north has more of them than anywhere; the cave troll is the one [[place-norgaad|Norgaad]]'s miners meet when a gallery breaks into old dark. Like every dreadspawn it was made, it is alive, and it does not breed. A troll that has found a way into a mine stays in it until it is killed or driven out.

## Presentation

The cave troll is tall and stooped, with a heavy chest and long, thin arms and legs out of proportion to it, so that it moves in a sprawling, spidery way, often on all fours, and fits into passages a man would call too narrow for it. Its skin is pale, almost translucent, with a cold blue-white sheen, veined and blotched darker. The head is long and angular, the jaw hangs too far and never fully closes, and the teeth are many, serrated and pointed. The eyes are small, bright and pupilless, and glow faintly. Each hand has four long fingers ending in curved claws. It breathes with a constant wet rattle that carries a long way underground, and it smells of cold mud and old meat.

## In the Land

Cave trolls live in the deepest cave systems of the [[place-nrdlndsrgn|Nordlands Region]] mountains, in passages where light has never been, and Norgaad's mining country, which drives galleries into those mountains for the richest iron and silver in the north, keeps breaking into their ground. A troll claims miles of passage, rests in a hidden chamber at the heart of them, and hunts along the routes where prey moves: cave fish and blind crayfish in the underground streams, bats, other dreadspawn, and anything that comes down from above. When a gallery opens into its ground, it comes up the gallery. Troll lairs are known by their bones, and the oldest are deep ossuaries.

## Key Behaviors

A cave troll hunts by sound and smell. It hears a pick on rock through a mountain, smells lamp-oil and sweat down a long passage, and follows them patiently, sometimes for days, until it can catch something alone. It drags what it kills back to its lair and eats there. It is not clever, and it does not plan beyond the next kill, but it learns where prey comes and how. It attacks any large creature that enters its ground. Daylight hurts and weakens it, and long exposure kills it, and it never comes out into the open by day.

## What the Miners Do

The mining camps of Norgaad treat a troll the way they treat bad air: as a danger of going deep, to be watched for and never argued with. A gallery that breaks into an open cavern is not worked further until a party with lamps has gone in and looked, and a camp that finds troll bones in a new working seals it with a wall of stone and earth and moves its digging. Every gallery has a fire-pot at its mouth and a bucket of pitch beside it, because fire is the one thing that stops a troll healing. When a troll does get into a working, the camp sends to the valley for men, and they go in with torches, burning pitch and long spears, in daylight, to drive it toward the surface; a troll driven into the sun is a dead troll. A troll's skull, cleaned and set over a hov door, is an offering the Mótefnir faith holds in honor.

## Signs

- A slow, wet, rattling breath echoing up a gallery from somewhere deep below.
- Bones heaped in a side passage: animal, dreadspawn and human, cracked open for the marrow.
- Long, four-fingered claw marks on the gallery walls at well above head height.
- A smell of cold mud and rotten meat drifting up a shaft on the draft.
- Lamps that go out in a deep working, and the men carrying them who do not come back up.

## Combat Strategy

A troll attacks from darkness, after it has located its prey by sound and smell and before the prey knows it is there. It charges, claws and bites, and once it is hurt it fights in a blind fury, attacking whatever is nearest without care for itself. It roars in confined passages to panic and scatter a group. It does not flee unless it is near death, and it chases fleeing prey through the passages it knows, but it stops at open ground and at daylight. Fire and strong light are a party's best weapons: fire stops its healing and light confuses its senses.

## Attack Methods

### Raking Claws

The troll slashes with both clawed hands in quick succession, tearing through mail rings and leather and opening long, deep wounds.

### Terrible Bite

The troll lunges with its huge jaw and bites a limb or the body, crushing and tearing. If it has hold it keeps hold and shakes, and it can tear away an arm.

## Special Abilities

### Shocking Roar

The troll roars, a deafening, shapeless howl that fills the passages. Those who hear it close are dazed and can be panicked, and the roar leaves them half deaf for a while.

### Sensory Dominance

It hunts by hearing, smell and a dim sight of its own, and it fights perfectly in absolute darkness. Bright light confuses it: in strong light it perceives poorly and its blows go wide.

### Regeneration

The troll heals astonishingly fast. Small wounds close within minutes and terrible ones within hours. Fire stops its healing for as long as the fire lasts, and only burning, dismemberment past rejoining, or daylight will kill it for good.

### Tunnel Supremacy

Its narrow body and long limbs take it through tight passages, up chimneys and down shafts that would stop a man, and it moves through a cave system faster than anyone following.

### Sunlight Weakness

Daylight weakens a cave troll at once and kills it if it stays in the light. It never comes into the sun of its own will.

## Attributes

Strength
: 26-31 (1d6+25)

Endurance
: 28-33 (1d6+27)

Dexterity
: 6-9 (1d4+5)

Agility
: 6-9 (1d4+5)

Perception
: 9-12 (1d4+8)

Aura
: 10-13 (1d4+9)

Will
: 14-17 (1d4+13)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)
