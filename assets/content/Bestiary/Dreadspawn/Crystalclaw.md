---
shortcode: crystlcl
name: {full: Crystalclaw}
type: being
subType: creature
description: "A crystalline apex predator of gem-rich caverns, a living weapon of razor mineral edges and blinding magical radiance."
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
    str: 1d6+21
    end: 1d6+10
    dex: 1d4+13
    agl: 1d6+14
    per: 1d6+10
    aur: 1d6+6
    wil: 1d4+9
    rea: 1d6+6
    cre: 1d6+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Razor Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Razor Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 6, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crystal Shard Projection
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Crystal Shard Projection
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: edged}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
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
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
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
      weight: {base: 1050, calc: "1050"}
      reachBase: 0
      bodyScaleBase: 1.66
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

![[crystlcl|Crystalclaw]]{float=top-left}

The gem-diggers' gallery opens into a cave whose walls are crusted with crystal, violet and clear, and your lamp turns the whole chamber into a field of sparks. One heap of crystal at the far side is larger than the rest. As the lamp swings, the heap stands up. It is a great cat, longer than a man, built entirely of faceted stone that throws your lamplight back in a hundred colors, and its claws, when it flexes them on the cave floor, ring like a cutter's chisel. Its eyes are two points of white light. Then the whole body flares, a white blaze that fills the cave, and you are blind.

# Dossier {#dossier}

The Crystalclaw is a dreadspawn of living crystal in the shape of a great cat: six to eight feet long, as heavy as a draft ox, with claws that cut stone and a body that stores light and throws it out again in blinding bursts. It hunts in gem-bearing caverns, and it hunts, as far as anyone can tell, for the pleasure of it. One holds the old diggings at the head of the gem-road in the valley of [[place-chandrmahi|the Chandramahi]], in [[place-chendrapurland|Chendrapur Land]], where the stones that make [[place-chendrapur2|Chendrapur]] rich are cut out of the hills. Like every dreadspawn it was made, it is alive, and it does not breed; the gem-diggers say it was set in the hill to keep the stones, and that it has kept them better than any House has.

## Presentation

The crystalclaw is shaped like a lean, long-bodied cat, but every surface of it is faceted crystal: clear in some lights and violet, blue-green or smoky in others, with sharp edges at every angle. The claws on its four feet are long blades of crystal, and the teeth in its open jaw are clusters of points. The eyes are two lights. In darkness it glows from within, faintly, with a shifting color; in lamplight or sunlight it gathers the light and throws it back in moving sparks and rainbows. It moves with a cat's fluid ease, and its claws ring on stone with a high, clean note. When it is struck hard the whole body rings like a bell.

## In the Land

The valley above Chendrapur is a valley of workshops, and the gem-road runs up it to the cutting-villages and the diggings in the hills. The crystalclaw holds a set of caverns and old diggings in those hills that are richer in stones than any other, and that no one has worked in living memory. It patrols them, and it comes out at times into the newer diggings on either side, especially by day, when the light through the shafts gives it strength. It does not leave the hills and has never come down to the river. The diggings beside its caverns are worked, at a price.

## Key Behaviors

The crystalclaw patrols its caverns slowly and thoroughly, and it attacks anything that enters them. It does not seem to need to eat, and it kills more than it could ever eat: the bodies of animals and diggers it has killed lie in its caverns untouched. It hunts by preference in light, when its flashes are strongest, and it plays with its prey, blinding it, wounding it, drawing back and blinding it again. It is clever and reads what its prey will do. It is drawn to light and to raw magic, and a digger's lamp, or a sorcerer's working, brings it from the far side of its ground.

## What the Diggers Do

The gem-diggers of the valley work under the head of whichever of the [Nine Houses]{.name data-type="affiliation/governmental"} holds their village, and the House sets the price for working the diggings next to the crystalclaw's caverns: higher shares for the diggers, a shrine at the gallery mouth, and a widow's portion paid in advance. Diggers in those galleries work with shaded lamps and with their eyes half closed against the flash, and each gang carries a heavy maul and a bronze gong. The gong is their best defense: they say the creature cannot bear a ringing note and backs away from it, and the mauls are for its body, which cracks under a hammer when a sword skates off it. Stones cut from its shed shards are sold up and down the coast as "claw-stones" at many times the price of any other, and most of what is sold under the name never came near it.

## Signs

- Diggers' lamps and torches found smashed in a gallery, and the walls scored by long, clean cuts through solid rock.
- A high, clean ringing in the dark, like a chisel on stone, from somewhere ahead.
- A cave or gallery that glows faintly with shifting colors when every lamp is out.
- Bodies of animals and men lying untouched in a cavern, cut many times and not eaten.
- Splinters of clear and violet crystal on a gallery floor where no vein runs.

## Combat Strategy

The crystalclaw opens with light: it flares, blinding everyone facing it, and closes on the nearest with its claws while they cannot see. If its first rush does not finish them, it withdraws a few paces, flares again, and comes back. It throws shards of its own body at anyone hanging back. It uses the cavern, driving prey into dead ends, toward drops and into the dark where it alone can see. It does not flee and fights until it wins or breaks. Ringing sound and heavy blows are what hurt it.

## Attack Methods

### Razor Claws

The crystalclaw slashes with its four bladed feet in quick succession. The crystal edges are sharper than steel and cut through leather and mail rings, opening long, deep wounds that bleed heavily.

### Crystal Shard Projection

The creature throws shards of its own body, flicking them off its flanks at speed, one after another. Each shard is a razor-edged spike that cuts and pierces and can drive through armor.

## Special Abilities

### Blinding Flash

The crystalclaw gathers light through its body and releases it in one white blaze. Everyone facing it is dazzled and half blind for a short while. The flash is strongest in daylight or under lamps, and it does little to a man whose eyes are shut or shaded.

### Refractive Concealment

The crystalclaw bends light through its body. Among crystal walls, shifting shadows and lamplight it is very hard to see and harder to strike, glittering crystal among glittering crystal.

### Crystal Durability

Its body is harder than stone and steel, and cuts and thrusts skate off it. Heavy blunt blows, hammer-strikes above all, crack it, and a strong blow sets the whole body ringing.

### Resonance Weakness

Ringing sound hurts it. A struck gong, a high sung note or a blow that sets it vibrating makes it flinch and draw back, and steady ringing can crack it from inside.

### Luminous Emission

It makes its own light, enough to hunt by in total darkness, and it can dim it to nothing to hide or blaze it up to dazzle.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 11-16 (1d6+10)

Dexterity
: 14-17 (1d4+13)

Agility
: 15-20 (1d6+14)

Perception
: 11-16 (1d6+10)

Aura
: 7-12 (1d6+6)

Will
: 10-13 (1d4+9)

Reasoning
: 7-12 (1d6+6)

Creativity
: 5-10 (1d6+4)
