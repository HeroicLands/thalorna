---
shortcode: qelodud
name: {full: Qelodud, aliases: [The Well-Lurker]}
type: being
subType: creature
description: "A pale, blind, camel-length ambusher of deep wells that hangs above the waterline and takes whatever comes down on a rope or a stair."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
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
    str: 1d4+8
    end: 1d6+8
    dex: 1d6+10
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Rending Bite
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
          name: Rending Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hauling Coil
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Hauling Coil
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forebody, shortcode: torsozone, probWeight: 5}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 3}
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
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
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
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The bucket goes down on forty feet of rope and the rope goes slack, as it should, when the bucket meets the water. You count to ten. The rope twitches once, the way a line twitches when a fish mouths the bait, and then it is running through your hands so fast that the palms burn. You let go. It slithers over the lip, over the stone, and into the shaft, and from far down comes a sound like a wet sack dragged over gravel. Nothing else follows. After a time, the end of the rope comes up out of the dark, pulled hand over hand by nobody, and it has been cut clean through.

# Dossier {#dossier}

The Qelodud is a long, pale, blind ambusher that lives in the shafts of deep wells and in the drains beneath their stairs. It is about the length of a camel and no thicker than a man's thigh, built of many overlapping plates that slide against each other as it moves, and it spends its life hanging in the dark within reach of water. It takes whatever comes down to the water: a bucket, a hand on the rope, a dog, a child lowered to clear a blockage. The tribes of the sands call it by the name of the thing it guards, _qelod_ and the suffix of a doer, "the well-doer", and when they name it to a stranger they say the word once and look at the lid.

Every well that a Qelodud lives in is a well that was dug deep enough to be cold and old enough to be forgotten. Most of the deep wells of the road were cut by the builders of the [[lore-towercities|Tower Cities]], roofed and stepped for camels and left open to the dark for two thousand years, and that long dark is what the creature needs. It does not travel between wells. A young one, or a hungry one, climbs the shaft at night and goes out across the sand in search of a new shaft, and a tribe that has found the track of one on the surface is a tribe that has a lid to build.

## Presentation

The body is a pale, flexible tube of plates, each plate edged with fine bristles, and there is a pair of legs to every plate. The legs are short and hooked and grip stone as a thumb grips a ledge. It has no eyes. In their place the head carries two long, stiff feelers that it holds out ahead of it, and a ring of smaller feelers around a mouth built of two curved jaws. The color is that of something that has never seen the sun: a bloodless cream, shading to gray along the back, wet-looking even when dry.

An adult is about eight feet long. The tail is a pair of stiff, blunt spurs that it braces against the shaft wall, and with them and its hooked legs it can hang head-down over open air for as long as it likes. A specimen at rest does not look like an animal. It looks like a stripe of mineral staining on a wall, and the rope-scars of a thousand buckets cross it without a mark.

## In the Land

The Qelodud lives wherever the Hosikor and the Idwakor have deep wells, and nowhere else. It is common in the old stepped wells of the sand country and rare on the grass of the Welqator, where the wells are shallow and the tribes dig new ones. Its lair is the lowest part of the shaft, near the waterline, or the drain at the bottom of a dry stair, where the old builders left a sump to catch the last of the seep. The creature in [[place-qelod|Qelod]], the Stepped Well, lies in the drain at the bottom of the stair, and it is the most famous of its kind. Many lesser wells hold one.

It feeds on what the well attracts: bats, swifts, lizards, the rats that come for the damp, goats and dogs that lean over the lip. A well on a busy road feeds it well, and a well nobody uses starves it into the open. In a drought year, when the water table drops and the shaft goes dry, a Qelodud comes up out of the dark and moves into the nearest shade, and the tribes say that a dry well with a lid on it is safe and a dry well with the lid off is a hole with a mouth.

## Key Behaviors

A Qelodud waits. It senses the world through its feelers and through the shaft itself: the tap of a bucket on the wall, a footstep on the stairs, the shiver of a rope. It does not pursue. It lies against the wall just above the waterline, with its feelers spread across the surface of the water, and when something touches the water or the rope above it, it lunges along the rope and takes what holds it.

It will go up a shaft after prey as far as the first landing, and no farther. The light of day at the lip turns it back, and it does not climb into a place where its feelers find the wind. Stairs are different. A stair gives it a wall to hug, and a party on the lower flights of a dry stair is within its reach at every turn.

## What the Tribes Do

The owners lid a well that has one in it, with a flat stone and a weight on the stone, and say so when asked. A lidded well is drawn with the owner's own rope and bucket, lowered by the owner's own hands. The rope is kept short enough that the bucket stops a few feet above the water, and the water is drawn by a bucket on a second line. At a hand-off well, the keeper lowers a bag of sand on the rope before the string draws, and a well that takes the bag is a well that is drawn at dawn and not at dusk, by the keeper's sons, with a spear in the other hand.

A tribe that finds a new Qelodud in a well it uses does not fight it. It fills the shaft, digs a new well forty paces off and covers the old one with stone, and it tells the next caravan master to the day how long the new one will take to fill. A tribe that cannot afford to lose the well lowers a wet goat hide on a rope, lets the creature seize it, and pulls up hand over hand with six men on the rope and a fire on the lip, because a Qelodud brought into firelight lets go.

## Signs

- A rope that comes up cut clean, or does not come up at all. A cut that is ragged was a fall; a cut that is clean was a jaw.
- A bucket stained with a pale slime that dries to a crust, or with small gray plates shed like scales.
- Birds that will not drink at a well, though they drink at the trough beside it.
- A dog that sits down and refuses the lip of a shaft.
- A faint, regular ticking from deep in the shaft, like a fingernail on stone, that stops when you call down.
- A track across dry sand like a bundle of knitting needles drawn in a line, running from one shaft to the next.

## Combat Strategy

A Qelodud fights only where its prey has no footing: on a rope, on a narrow stair, at the lip of a shaft. It strikes at the hand, the rope and the throat, and drags what it takes into the dark. It does not stay to finish a fight on open ground and will flee up the shaft from lamplight and fire, and a party that brings torches down a stair meets it at its weakest. A party that goes down in the dark has made its choice.

On a stair it uses the wall. It hangs flat against the stone just beyond the reach of a lamp, lets the first of a file pass, and takes the second from behind. It coils to hold a victim against the wall while the jaws work, and a person held this way cannot be pulled free by a rope or a hand. Cutting the body, rather than dragging against it, is the way out.

## Attack Methods

### Rending Bite

The primary attack. The jaws close on a hand, a forearm or a throat with a shearing grip, and the Qelodud shakes its head to widen the wound. It does not release a hold unless it is struck in the head or lit.

### Hauling Coil

The creature throws the front third of its body around a limb or a torso and hauls toward the dark. The grip is that of a heavy rope under load. A person held by it is pulled off the stair or the lip in a moment, and the fall is the larger part of the harm.

## Special Abilities

### Feeler Sense

The feelers read vibration, moving air and the faint warmth of living bodies through water and stone. A Qelodud knows where every rope in a shaft is and what is on it. In the dark it is never surprised, and it is not fooled by a hanging lamp.

### Wall-Hanger

The hooked legs and braced tail let it hold a vertical wall of dressed stone as easily as it holds a floor. It hangs over open air and strikes from above, and it can pass along the underside of a stair.

### Light-Shy

Strong light, flame and the open day drive it back toward its dark. A lit torch held steady in its face makes it release a hold and withdraw, but a wavering light does not.

## Attributes

- **Strength:** 9-12 (1d4+8)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)

## A Hook

Drought has dried every ordinary water on the grazing of a small tribe, and one deep well is left to it, lidded and weighted. The dowek will let a caravan draw there on one condition: the caravan's own rope goes down first, in the caravan's own hands, while the tribe watches. The party's guide learns why from a herd-boy. The tribe's last two guests each lost a man at the same well, and the tribe took the price of the water from both. The rope comes up cut clean, and the dowek's youngest son is already standing at the lip with a spear, and the herd-boy will not say what he is waiting for.
