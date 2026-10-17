---
shortcode: erthrvr
name: {full: Earthreaver, aliases: []}
type: being
subType: creature
description: "A venomous burrowing arthropod that rules underground ecosystems through speed and toxin, carving vast tunnel hunting grounds."
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
    str: 1d6+16
    end: 1d6+14
    dex: 1d6+10
    agl: 1d4+13
    per: 1d4+13
    aur: 1d6+4
    wil: 1d4+13
    rea: 1d6+6
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 5, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Acid Slime
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Acid Slime
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forebody, shortcode: torsozone, probWeight: 17}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 9}
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
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[erthrvr|Earthreaver]]{float=top-left}

The cavern floor is dry, cracked clay, and the cracks are moving. A ripple runs across it toward the lamp like a wave under a carpet, and the clay bulges and splits. What comes out is a body of black and brown plates, wet and glistening, thick as a barrel and going on and on behind the head, carried on pair after pair of jointed legs that move in a wave. The head is all mandible. Two blades as long as your arm open and close, and a drop falls from them onto the stone and smokes. The smell is turned earth and something sour enough to sting your eyes.

# Dossier {#dossier}

The Earthreaver is a dreadspawn: a burrowing, many-legged, armored thing thirty feet long, with venomous mandibles that cut stone and a hide that sweats an acid slime. It lives in the caverns of the hollow ridges of the eastern stone desert, [[place-idwkrrgn|Idvaqor]], where it tunnels under the cavern floors and opens passages of its own into the older ones, and it hunts anything that moves through the ground it has claimed. At [[place-ruweq|Uruvaq]], whose caverns hold cut cisterns of standing water and walls painted in a script no one reads, an earthreaver's passages cross the old galleries and come up under the floor of halls a party believed were solid. Like every dreadspawn it was made and cannot breed. There are several in the ridges of Idvaqor, each holding its own warren, and the tribes do not know whether they were set there together or arrived one by one.

## Presentation

A long body of overlapping segments, dark brown and black, each plated over the back and carried on its own pair of jointed legs, so that the whole animal moves in a wave from head to tail. The head is a wedge of heavier plate with two great curved mandibles that close like shears and drip a venom with an oily shine. Short, moving feelers ring the front segments and taste the air. The whole hide is wet with a slime that eases its way through the ground and burns skin it touches, and its tunnels are lined with it. Moving through stone it grinds; moving through earth it makes a wet, sucking sound that carries through the rock.

## In the Land

Earthreavers live under the hollow ridges of Idvaqor and in the deep caverns of the eastern waste, in soft rock and packed clay where they can tunnel at speed, and their warrens join and cross the older passages that people cut long before the tribes came. A [[being-sandwurm|sand wurm]] lairs in the lowest caverns of Uruvaq and the earthreaver's passages run above it. Each earthreaver holds its own warren and attacks any other that breaks into it. They are not found in the open sand, which will not hold a tunnel, nor in hard granite. The cisterns of Uruvaq draw animals down into the caverns to drink, and the earthreaver hunts the passages that lead to them.

## Key Behaviors

An earthreaver hunts often and moves constantly through its warren, coming up at places of its choosing to take what it finds. It feels movement through rock at a long distance and comes up under it or behind it. It learns the paths animals and people use through its caverns and waits on them, and it drives prey along a passage toward a dead end of its own digging. It keeps some passages for hunting and leaves others alone, and the tribes who know Uruvaq say it lets bats and cave-rats breed in certain galleries and comes back to them, as a herdsman comes back to a flock. Fed, it lies still in a chamber for some days.

## What the Tribes Do

The riders of Idvaqor who know the hollow ridges do not camp in a cavern with a clay floor, and they keep to the passages that were cut by hands, with walls of solid stone. A party going into Uruvaq for the water or the painted walls carries a pole to sound the floor ahead and does not go below the cistern galleries, and it goes out the moment the floor trembles. Fire is the earthreaver's enemy: its wet hide blisters in heat, and a burning brand thrust at its head turns it. Water poured into one of its tunnels drives it to the surface, which only helps a party that wants to meet it. Its mandibles, taken from a dead one, are mounted as picks by the cistern-cleaners of the oasis towns, because they cut rock and do not dull.

## Signs

- A ripple running across a clay floor, and the floor afterward cracked in a line.
- Round tunnels in a cavern wall, a yard and more across, lined with a glistening, stinking slime.
- Bones of bats and cave animals in heaps at a junction of passages, etched pale as if by vinegar.
- A wet grinding heard through the rock, coming nearer and stopping.
- Stone at a tunnel mouth eaten smooth and pitted where the slime has lain on it.

## Combat Strategy

The earthreaver strikes from below or from the side of a passage, bursting out through the floor or wall under its prey and biting before it can turn. It bites once or twice to put the venom in and goes back into its tunnel, then comes out again somewhere else. It is in no hurry: venomed prey slows, and it waits. A party that holds a hand-cut gallery of solid stone forces it to come at them along the passage, where it fights directly and fiercely and uses its slime to foul the ground and the weapons. It is hard to kill by cutting, because a body of thirty segments goes on working with several of them broken. Fire, a narrow stone passage and many spears are what kill one.

## Attack Methods

### Venomous Bite

The mandibles shear and grip, cutting through leather and light mail, and drive in a venom that weakens and then paralyzes. Each further bite deepens it.

### Acid Slime

The creature's slime burns bare skin and eats leather, cloth and the edge of a blade. It throws its coils and its slimed body against a man so that he is coated, and it smears the floor of a passage so that men slip and burn as they fight.

## Special Abilities

### Burrow Eruption

The earthreaver bursts out through floor or wall so suddenly that a man standing over the spot is thrown down, and its first bite on emerging is very hard to meet.

### Burrowing Mastery

It moves through clay and soft rock at a walking pace and through packed earth faster, leaving a passage large enough for its body behind it.

### Venom Potency

Its venom builds with every dose. One bite weakens; three or four leave a man unable to move.

### Segmented Resilience

Its body goes on working with segments crushed or cut. It must be hurt along its whole length to be stopped.

### Vibration Sensing

It feels movement through rock at a long distance and knows where a party is and how fast it is going.

## Attributes

Strength
: 17-22 (1d6+16)

Endurance
: 15-20 (1d6+14)

Dexterity
: 11-16 (1d6+10)

Agility
: 14-17 (1d4+13)

Perception
: 14-17 (1d4+13)

Aura
: 5-10 (1d6+4)

Will
: 14-17 (1d4+13)

Reasoning
: 7-12 (1d6+6)

Creativity
: 7-12 (1d6+6)
