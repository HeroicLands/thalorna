---
shortcode: mntndrk
name: {full: Mountain Drake, aliases: []}
type: being
subType: creature
description: "A lean, granite-scaled reptilian predator up to eight feet long, spined along the back and built to climb and ambush across rocky mountain terrain."
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
    str: 1d6+10
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+10
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Wings, shortcode: wingszone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
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
            probWeight: 8
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 120, calc: "120"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 120
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mntndrk|Mountain Drake]]{float=top-left}

The rain has stopped and the cloud is lifting off the crag above the path, and for a moment the rock is just rock: gray, wet, streaked with lichen. Then part of it turns its head. It is a lizard as long as a man is tall, the exact gray of the stone, with a ridge of spines down its back and two short curved horns, and it is lying along a ledge thirty feet up with its amber eyes on the sheep below you. A smell like a struck flint drifts down. As you watch it spreads a pair of short leathery wings, drops off the ledge, and comes down the face in a long slanting glide, straight at the flock.

# Dossier {#dossier}

The Mountain Drake is a lean, gray, spined lizard of the high crags, seven to eight feet from snout to tail-tip, with short wings that cannot lift it from flat ground but carry it a long way in a glide from a height. It hunts the goats, sheep, hares and birds of the steep country from ledges and outcrops, dropping onto them out of the cloud, and it fights anything that comes near its lair. It is an animal and not a true dragon, whatever the name. On [[place-aelwyth|Aelwyth]] its country is [[place-ironfells|the Ironfells]], wet, steep and snow-covered for a third of the year, and the shepherds and smugglers who use the high ground there count it with the weather as the dangers of the passes.

## Presentation

A drake is built long and low, with a narrow, heavily muscled body, four short powerful legs with hooked climbing claws, and a tail as long as the body. Its scales are rough and stone-colored, granite gray, charcoal and dun, broken with paler blotches that look like lichen. A row of sharp spines runs from the back of the skull down the spine to the tail, and two small curved horns sweep back from the brow. The head is broad and heavy-jawed, with forward-facing amber eyes and slit pupils. The wings fold flat along the flanks and are easy to miss; spread, they are short and broad, gray membrane on long finger-bones. Drakes smell of sulfur, like a spent spark, and the smell hangs round a lair. They are silent hunters, but a cornered drake hisses with a sound like steam.

## In the Land

Mountain drakes keep to the crags, cliffs and boulder-fields of the Ironfells above the tree line, from [[place-sunderfells|the Sunderfells]] in the north, where the range walls [[place-stormveld|Stormveld]] off from [[place-aldorathrgn|Aldorath]], round to the eastern heights where the range meets the sea. They lair in caves and deep cracks high on cliff faces and use the same ledges as lookouts year after year. They follow the flocks: in summer they hunt the high grazing above [[place-vardainvalleys|the Vardain Valleys]] and the hill pastures on either side of the two passes, and in winter, when the snow drives the flocks down, they come lower, into the steep forest at the head of the valleys. They avoid the wet, wooded lowlands. In thick cloud, which is most days, they hunt by waiting for a gap.

## Key Behaviors

A drake hunts by day from a high perch. It lies motionless on a ledge or outcrop, watching the slope below, and when something it can kill moves into the open, it launches and glides down onto it, claws first. It drags small kills back up to its lair and eats larger ones where they fall. Drakes are solitary and each holds a few miles of crag, and two drakes that meet at a kill fight. They are clever on their own ground. A drake knows which slabs and boulders on its crags are loose, and it will push one down onto prey it cannot reach, or onto a man who is climbing toward its lair. It remembers a man who has hurt it and the path he came by.

## What the Hill People Do

The shepherds of the Vardain Valleys bring the flocks into folds with roofs of turf before the first snow, because the drakes come down with the snow. In the summer grazing a shepherd watches the crags, and a bad drake that has learned to take sheep is reported to the valley's elders, who send to the [[lore-flkkhazar|Khazari]] at [[place-vorgald|Vorgald]]; something from the hold comes down, and the drake is not seen again, and nobody in the valleys asks what. The smugglers who carry goods over the Sunderfells by pack-pony travel the high path in groups, with a man at the back watching the cliffs above, and they go under an overhang when they hear rocks falling. At [[place-caerwynd|Kaerwynd]] a drake's skin, hung on the gate, is a soldier's proof that he has been up in the passes, and a drake skull with its horns fetches a price in the wool markets of [[place-brynwold|Brynwold]].

## Signs

- A whiff of sulfur on a wet crag, strongest under an overhang or at the mouth of a crack.
- Sheep or goat bones heaped under a high ledge, and pellets of fur and bone dropped from above.
- Long scratches in the lichen at the lip of a ledge, where something heavy launches and lands.
- Fresh rockfall on a path that was clear the day before, with no frost or rain to explain it.
- A flock that bunches and will not graze below a particular cliff.

## Combat Strategy

A drake attacks from above. It drops onto a man out of a glide, claws reaching for the face and shoulders, and tries to knock him down the slope. If he stays on his feet it fights close with claws and tail, keeping uphill of him, and lashes the tail to throw him off the path. It uses its crags: it lures pursuers onto loose ground, sets rocks rolling down onto them, and fights from ledges where a man must climb to reach it. When a fight goes against it, it runs to the nearest drop, spreads its wings and glides away, and nobody follows it there.

## Attack Methods

### Raking Claws

The drake strikes with its forefeet, raking the hooked claws down and across, most often as it lands from a glide. The claws tear flesh and cut through leather, and the drake aims for the face, the throat and the shoulders.

### Tail Strike

The long tail lashes sideways and its weight knocks a man back, sweeps his legs from under him on a narrow path, or knocks a weapon out of his hand. On a ledge, a tail strike can put a man over the edge.

## Special Abilities

### Gliding Master

A drake that launches from a height glides a long way on its short wings, steering well, and comes down out of the cloud onto prey that never saw it leave its perch. It reaches crags and ledges that nothing without wings can get to, and it escapes off any drop. It cannot take off from flat ground.

### Environmental Exploitation

On its own crags the drake knows every loose slab and boulder, and it shoves them down onto men below it. A rockfall strikes everyone in its path and can bury or trap whoever it catches.

### Mountain Camouflage

A drake lying still on gray rock is very hard to see, even for a man who knows to look for one, and in the wet and the cloud of the Ironfells it is nearly invisible.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 10-15 (1d6+9)

Dexterity
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 11-16 (1d6+10)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 7-10 (1d4+6)

Creativity
: 5-8 (1d4+4)
