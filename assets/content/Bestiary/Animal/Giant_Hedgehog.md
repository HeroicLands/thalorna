---
shortcode: gnthdghg
name: {full: Giant Hedgehog}
type: being
subType: creature
description: "A bulky, six-foot nocturnal forager armored in razor-sharp quills, rooting through leaf litter for grubs and roots but perilous to touch."
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
    str: 1d6+7
    end: 1d6+9
    dex: 1d6+8
    agl: 1d4+7
    per: 1d6+9
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Quill Volley
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: quill
          name: Quill Volley
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Charging Gore
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Charging Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: &a1 [locomotor]
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
            roles: []
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
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 30, calc: "30"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gnthdghg|Giant Hedgehog]]{float=top-left}

Something in the stubble beyond the hedge has been rattling for some minutes, a dry sound like dice shaken in a barrel, and the farm dogs will not go near it. When you climb the gate you see why: a round-backed animal six feet long and as high as your waist is rooting along the furrow, and the whole of its back is quills a foot long, brown and gray and shining at the points. It lifts a long snout toward you, sniffs, and the quills come up all together with a rattle that carries across the field.

# Dossier {#dossier}

The Giant Hedgehog is a six-foot, foot-quilled, night-foraging animal of the wood edges and farmland of [[place-velanthrgn|Velanthia]], which eats grubs, worms, beetles, roots and fallen fruit and would be a harmless nuisance if its back were not a field of foot-long spines. It is slow, nearsighted and not interested in people. It turns up in a barley field or a ditch at night, a dog or a horse that blunders into it dies of the wounds, and when it is frightened it throws its quills.

## Presentation

A round, heavy-bodied animal three feet at the shoulder on short strong legs, covered from crown to rump in quills up to a foot long, thick and sharp and laid in overlapping rows, with shorter spines on the flanks and few on the belly. The head is small and tapers to a long, mobile snout with a fine nose and small teeth for grubbing. The eyes are small, dark and set at the sides, and it sees poorly ahead. The coat under the quills is brown or gray and usually caked with soil. The quills whisper against each other as it walks and rattle when they are raised.

## In the Land

Giant Hedgehogs live along the margins of the Velanthian forest-steppe where the woods meet the grain-belt: in the hedges and ditches of the river-prince kingdoms' farmland, the wood edges, the orchards and the old field-banks, where the ground is soft and full of grubs. They den in a scrape under roots or in a bank, hole up through the deep winter and come out with the thaw. They are commonest where the farming is oldest and the hedges thickest, and a village of the grain-belt usually has one or two in its woods and leaves them there.

## Key Behaviors

The hedgehog forages by night, chiefly on warm wet nights when the worms are up, snuffling along a furrow or a hedge-bottom and turning the soil with its snout. It eats what it finds, meat included, and takes eggs and nestlings from a ground nest. It keeps a feeding ground and tolerates no other hedgehog on it outside the autumn mating, and it fears nothing, because nothing in the grain-belt can get past the quills. Frightened, it curls; frightened further, it throws quills; and a sow with young at the den charges.

## What the Farmers Do

Velanthian farmers count the hedgehog a mixed blessing: it eats the grubs that eat the barley and it eats the hens' eggs too, and a horse that treads on one in the dark is lamed for the season. A field with a hedgehog in it is worked by day and the dogs are kept in at night. Boys gather the shed quills from the hedge-bottoms in autumn and the fletchers buy them, and a whole skin, taken from an animal killed in its winter sleep, makes a shield-facing that no hand will grip. A hedgehog in its den in winter can be dug out and killed without danger, and the smallholders who do it say the meat is good. A tame one, raised from a hoglet, lives under the granary and keeps it clear of rats, and bites the hand that feeds it about once a month.

## Signs

- A furrow or a hedge-bottom turned over in a straight line, as if by a small plow, with the worms gone.
- Loose quills a foot long lying in the stubble, brown and gray and sharp.
- A dog with a muzzle full of spines, howling.
- A dry rattle from the dark beyond the hedge that stops when a lantern comes near.
- A hole under the roots of a hedge-oak, lined with leaves, with a heap of spines at the mouth.

## Combat Strategy

The hedgehog's defense is to curl, quills outward, and wait. Nothing can hurt it in the ball and it does not need to do anything else. A threat that persists is answered with a shake of the whole body that sends quills flying several yards, and a hedgehog shaking itself in a lane empties the lane. It charges only to defend its young or when it is cornered, head down, and the charge is slow and easy to see coming and hits hard. It is killed by flipping it, with a pole, and striking at the belly, which takes two people and a strong pole.

## Attack Methods

### Quill Volley

A shudder of the body throws loose quills at whatever is near, hard enough to go through leather and into flesh. Several shudders in succession fill the air in front of the animal with spines.

### Charging Gore

Head lowered, the hedgehog runs at a threat and drives the forward quills into it with the weight of its body. The charge is slow for an animal of its kind and bad to be hit by.

## Special Abilities

### Quill Armor

Anything that strikes the hedgehog at close quarters comes away bleeding, and anything that holds onto it is pierced again with every movement. The belly carries few quills and is the one soft place.

### Defensive Curl

Rolled up, the hedgehog shows quills on every side and can be hurt only from the belly, which is inside the ball. It stays rolled until the threat has gone.

## Attributes

Strength
: 8-13 (1d6+7)

Endurance
: 10-15 (1d6+9)

Dexterity
: 9-14 (1d6+8)

Agility
: 8-11 (1d4+7)

Perception
: 10-15 (1d6+9)

Aura
: 7-10 (1d4+6)

Will
: 9-14 (1d6+8)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
