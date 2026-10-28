---
shortcode: nuoworoth
name: {full: Nuoworoth}
type: being
subType: creature
description: "A giant flightless carrion bird ruling barren rocky wastes, savagely territorial and attacking any intruder that crosses into its badland domain."
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
    str: 1d6+15
    end: 1d6+13
    dex: 1d6+8
    agl: 1d6+9
    per: 1d6+13
    aur: 1d6+9
    wil: 1d6+13
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Hooked Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Hooked Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Raking Talons
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: edged}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nuoworoth|Nuoworoth]]{float=top-left}

The ravine smells of carrion long before you see the bones: a heap of them against the rock wall, cracked and scraped white, goat and ass and something with a skull too round for either. Then the boulder beside the heap stands up. It is a bird, black and seven feet tall, with a bare gray-and-red head on a long wrinkled neck and a hooked beak as long as your forearm, stained dark to the nostrils. It spreads a pair of short, heavy wings wide, not to fly but to make itself bigger, and hisses with a rattle in the throat. Then it starts toward you, and its feet click on the stone.

# Dossier {#dossier}

The Nuoworoth is the great flightless carrion bird of the [[place-khzryndsrtrgn|Khazryn Desert Region]]'s stone uplands: seven feet tall, twelve from beak to tail, four hundred pounds, black-feathered with a bare, leathery head and a foot-long hooked beak. It eats the dead of the badlands—goats, wild asses, fallen camels and fallen men—and it kills to defend the ground it eats on. Each bird holds a long stretch of ravine and broken plateau as its own and attacks anything that walks into it, by leaping from behind a rock with no warning but the smell. It is the bird the guides mean when they tell a party on the black rock to keep to the track and to turn back from any ravine with bones at its mouth.

## Presentation

A massive running bird built on the lines of a great ratite, deep-bodied on two legs as thick as a man's thigh, with three-toed feet carrying curved talons as long as fingers. The plumage is coarse and nearly black, with an oily green sheen in sunlight, ragged and often missing in patches. The head and the upper neck are bare skin, wrinkled and mottled gray and red, and the beak is huge, hooked and dark-stained at the tip. The eyes are small, deep-set and bloodshot. The wings are short and too weak to lift it, but heavily muscled; it spreads them to balance in a leap and to frighten. It smells of what it eats.

## In the Land

Nuoworoths live in the stone uplands and badlands of the Khazryn: the mesas and dry ravines of the [[place-dkrqrrgn|Diqraqor]], where the rock is black enough to hide them, and the broken ridges of the eastern stone desert of [[place-idwkrrgn|Idvaqor]]. Each holds a range of several miles of ravine and rock-shelf and walks its edges, and marks them with heaps of cleaned bones, claw-scored boulders and the stench of old kills. They are not found on open sand, where there is nothing to hide behind, nor in the mountains above. A ravine that a nuoworoth holds is one the plateau tribes do not graze, and a track that runs through one is a track the guides go round.

## Key Behaviors

The bird spends its day walking its range, nose to the wind. It smells carrion and blood a mile off and goes to it, and it drives off anything already at a carcass, from a [[being-mghyn|mega hyena]] clan to a man skinning his own dead camel. It kills what it finds within its range when the thing is small enough or alone enough: a goat, an ass, a sleeping man, a wounded one. It watches before it strikes. A bird that has seen a party will follow it unseen along the ravine rim for an hour, crouched behind boulders, until one of them falls behind or stops to drink, and then it leaps. It does not retreat from its own ground, and a wounded bird attacks harder.

## What the Tribes Do

The hard, poor tribes of the plateau know every range and keep their flocks out of them; a herdsman who loses a goat into a nuoworoth ravine lets it go. A party that must cross one keeps together, in daylight, with spears out, and walks the middle of the ravine rather than the rocky edge. The birds are killed, when they must be, by the bird's own refusal to give ground: men show themselves at the mouth of the ravine, the bird comes out at them, and archers on the rim shoot it as it comes. A flash of sunlight off a polished blade into its eyes stops it for a moment, and plateau guides carry a bronze mirror for the purpose. The beak makes the best skinning-knife on the plateau and the feathers are worn by young men of the plateau tribes who have killed one.

## Signs

- A heap of cleaned and broken bones at the mouth of a ravine or against a boulder.
- A heavy, sweet stench of carrion on the wind in country with no visible carcass.
- Three-toed tracks as long as a man's forearm, with the talon-points dug deep.
- Boulders scored by claws at the height of a man's chest.
- A black shape on the ravine rim above a party, that ducks down when anyone looks up.

## Combat Strategy

The bird leaps from concealment, landing on its target with its weight and talons, and presses the attack at once with beak and claws before the party has formed up. It goes for the one who is apart from the others, the one carrying the heaviest load, or the one who is already hurt. It drives prey toward loose scree, a drop or a dead-end gully. It does not retreat while it stands on its own ground, and it does not stop for wounds. It cannot fly, so a man on a ledge above it or across water is safe, and it is clumsy in a narrow space. A bright light flashed in its eyes, or a thrown torch, makes it flinch and gives a spearman his chance.

## Attack Methods

### Hooked Beak

The beak strikes down at the head, the neck and the shoulders, tearing rather than stabbing. It shears leather and cracks bone, and it is the bird's killing stroke.

### Raking Talons

The bird kicks forward and down with one foot and then the other, and each talon opens a long, deep gash. It rakes as it lands from a leap and keeps raking a man who is down.

## Special Abilities

### Leaping Strike

With a wing-assisted bound the bird covers thirty feet from a crouch and lands on its target with crushing force, knocking a man down before he has seen it.

### Camouflage Plumage

Crouched among black rock, the bird is one more boulder. It is seen when it moves.

### Carrion Sense

It smells carrion or a fresh wound a mile off, and follows a bleeding animal across its whole range.

### Terrifying Presence

Wings spread, beak open and hissing, it makes pack animals bolt and freezes smaller creatures where they stand.

### Patience

It watches from cover before striking and chooses its moment, and it will follow a party along the rim for an hour to get it.

## Attributes

Strength
: 16-21 (1d6+15)

Endurance
: 14-19 (1d6+13)

Dexterity
: 9-14 (1d6+8)

Agility
: 10-15 (1d6+9)

Perception
: 14-19 (1d6+13)

Aura
: 10-15 (1d6+9)

Will
: 14-19 (1d6+13)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
