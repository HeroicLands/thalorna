---
shortcode: gryphon
name: {full: Gryphon}
type: being
subType: creature
description: "A three-hundred-pound eagle-lion predator of legend, lean and supremely muscled, blending the majesty of birds with the ferocity of beasts."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-griffinsymbol
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
    str: 1d6+14
    end: 1d6+10
    agl: 1d6+11
    per: 1d6+16
    snt: 1d4+1
    aur: 1d4+5
    wil: 1d6+10
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 66}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 70}}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 2, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
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
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a1 {blunt: 2, edged: 1, piercing: 0, fire: 1}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2 {blunt: 2, edged: 1, piercing: 0, fire: 1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 3
            protectionBase: &a3 {blunt: 4, edged: 3, piercing: 2, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 6
            protectionBase: &a4 {blunt: 3, edged: 2, piercing: 1, fire: 2}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 3
            protectionBase: *a3
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 6
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 1}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The cry comes down the valley ahead of it, half an eagle's scream and half a lion's cough, and the mules throw up their heads. It is already in the air when you find it: a shape launching off a spire of rock a thousand feet above the path, wings of bronze and gold twenty feet across, and under them, where a bird ends, the tawny body and lashing tail of a great cat. It does not stoop. It settles on a ledge above the track, folds its wings, and looks down at the string with one golden eye, the way a lord on his wall looks at a cart that has stopped at his gate.

# Dossier {#dossier}

The gryphon is an eagle in front and a lion behind: three to four feet at the shoulder, five to six feet from the grip of the fore-talons to the tail-tip, three hundred pounds of hunter, with wings that span twenty feet and carry it higher than any eagle flies. It nests on the highest crags of [[place-graznmntns|the Grazian Mountains]], above [[place-pssshrines|the Pass-Shrines]], and in the wind-scoured mountain tracts behind the [[place-nrdlndsrgn|Nordlands fjords]], and it holds a range of many valleys against every other gryphon. It eats goats, ibex, wild horses and caribou. It kills men who climb toward its eyrie and lets men pass who do not, and it knows the difference.

It is a thinking animal, as clever as a bright child and prouder than most men, and the few people in any age who have won one's regard have ridden it to war.

## Presentation

The eagle half is heavy: a head as large as a shield with amber eyes, a hooked beak that goes through plate, and a thick, feathered neck. The forelegs are an eagle's legs scaled to the body, ending in talons the length of a short sword, and the breast and shoulders are feathered bronze and gold. Behind the shoulders the feathers give way to tawny fur with no visible seam, and the rest of the animal is a lion: deep-chested, long in the haunch, with a tufted tail and retractable claws on the hind feet. The wings are broad and long and the gryphon flies on the mountain wind more than on its own strokes, with small, exact corrections.

## In the Land

Gryphons nest where nothing else can: on the spires and hanging ledges of [[place-sthrnwall|the Southern Wall]] of the Grazian range, which the [[lore-vedyariclt|Vedyari]] hold to be the dwellings of their gods, and on the peaks above the caribou plateaus in the north, where the reclusive clans know the eyries by name. A pair holds a range that takes in several valleys and the passes between them, and the guides of the Grazian roads reckon a crossing by which pair's country it runs through. Unpaired gryphons wander, looking for a range of their own, and a wandering gryphon is the one a lowlander meets.

The eyrie is a thing worth knowing about: a nest the size of a cart on a ledge no man can climb to, kept clean, and decorated with what the gryphon finds beautiful, polished stones, worked metal taken from the dead and from the living, and the bones of its best kills laid out in an order of its own.

## Key Behaviors

A gryphon hunts both as an eagle and as a lion. It drives a herd toward a cliff from the air and takes what goes over; it circles high and stoops; it stalks on foot across broken ground and springs. A kill feeds it for several days, and between kills it keeps its eyrie, grooms, watches its valleys and takes routes along the ridges that have nothing to do with hunting and everything to do with the view. Pairs mate for life, raise one young a year, and both parents fight for it. Rivals are driven out of the range, and two gryphons fighting for a range fight in the air for hours, which the mountain people watch from a long way off. They tolerate eagles and hawks, ignore goats when they are fed, and remember a man's face. A gryphon holds a grudge for life and knows gratitude for as long.

## What the Mountain People Do

The guides of the Grazian passes keep their strings close under the crags on a gryphon's stretch of road and leave an offering of a goat on a rock at the foot of its crag, which the gryphon takes and which the guides say is why the string is let pass. The Pass-Shrines count a pair that nests above them as a mark of the god's favor and will not have one hunted. Nobody robs an eyrie twice. In the north the caribou clans lose calves to the gryphons every spring and sing about it rather than hunting them, since a hunt in that country means a man on a rope on a sheer crag with both parents in the air.

A bonded gryphon is a thing of legend and a fact: once in a long while a gryphon decides that a particular man or woman is worth its company, after months or years of acquaintance that the gryphon began, and carries that rider in war and in travel for the rest of the rider's life. The tales of the passes keep the names of such riders, and no one in living memory has seen one.

## Signs

- A cry down a valley that is half scream and half roar, and the pack animals' heads going up together.
- Goat and ibex bones on a ledge no climber could reach, laid in a line.
- A shadow across the scree too broad for an eagle, moving against the wind.
- A nest the size of a cart on a hanging ledge, with something bright in it that catches the sun.
- Mountain goats grazing untroubled under a cliff where no wolf comes.

## Combat Strategy

The gryphon begins from the air. It watches, chooses, and comes down in a stoop with the talons out, raking as it passes and climbing away. A foe it respects it lands for, and on the ground it rears on its lion's haunches with the wings spread for balance and fights with both fore-talons at once, circling, using rock and slope and the edge of a drop, and taking to the air again when that serves it. Against many it stays high, strikes the weak and the separated, and leaves if the odds turn; it is not a fool and it does not die for a meal. Defending its eyrie or its young it fights until it cannot.

## Attack Methods

### Beak

The hooked beak is used when the gryphon has committed to a kill or has an opponent down: it pierces and tears rather than crushes, cracks bone and takes a limb off at the joint.

### Talon

The fore-talons strike at the end of a stoop with the whole weight and speed of the animal behind them, piercing mail and breaking bones, and on the ground they rake in quick succession at the head and the arms.

### Claw

The hind feet carry a lion's claws, and a gryphon rearing or rolling with an opponent rakes with them along the body and the legs.

## Special Abilities

### Wing Buffet

A full stroke of a wing knocks a standing man off his feet or breaks an attack, and the gryphon uses its wings to make room as often as to fly.

### Mythic Perception

An eagle's eyes and a lion's nose and ears together: it sees movement across a range of hills, smells a man in a forest and hears riders a valley away, and in a fight it knows where every opponent is.

### Aerial Mastery

It climbs straight up, turns in its own length, hovers on the wind and lands on a cliff face, and it judges a drop to the inch. In the air nothing but another gryphon matches it.

### Roar of Command

The gryphon's cry carries for miles and shakes the people who hear it close; a man within a few yards of it is stunned for a moment. It is a call to its mate and a claim on its country, and it is not an animal's noise.

### Bonding

Rarely, and never by compulsion, a gryphon chooses a person and stays chosen. It carries that rider, shares what it sees, fights for them and dies for them, and a gryphon whose rider has died keeps the range in grief or in fury for years.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 17-22 (1d6+16)

Scent
: 2-5 (1d4+1)

Aura
: 6-9 (1d4+5)

Will
: 11-16 (1d6+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 6-9 (1d4+5)
