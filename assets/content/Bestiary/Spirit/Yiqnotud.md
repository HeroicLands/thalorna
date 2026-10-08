---
shortcode: yiqnotud
name: {full: Yiqnotud, aliases: [The Steppe Hunter]}
type: being
subType: creature
description: "The steppe's name for the semi-material predator spirits that cross on thin blood-fields at night and kill the living they find there."
tags: [spirit, image-needed]
data:
  packFolder: spirit
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    str: 1d4+9
    end: 1d6+10
    dex: 1d4+13
    agl: 1d6+14
    per: 1d4+13
    aur: 1d6+10
    wil: 1d4+9
    rea: 1d6+6
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Ghost Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Ghost Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Cold Rake
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
          name: Cold Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: override, textValue: "0"}
          - {scope: surface_cover, key: dunes, mode: override, textValue: "0"}
          - {scope: surface_cover, key: mixed_forest, mode: override, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: override, textValue: "0"}
          - {scope: surface_cover, key: ruins, mode: override, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: override, textValue: "0"}
          - {scope: hydrology, key: deep, mode: override, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

The camp lies a long day's ride from the broken towers, farther than anyone needs to be from a thin field, and still the herd-dogs will not lie down. They sit in a ring with their backs to the fire, ears flat, looking out into the dark toward the south. A little after moonrise the horses begin to sweat. Out on the flat something is moving, low and quick, with no sound of feet: a shape the color of the dark, long in the body, close to the ground, that keeps to the edge of the firelight and goes round the camp once, as a dog goes round a sleeping flock, counting. Where it crosses the faint line of ash laid at the camp's edge, it stops, and its head comes round. It has no eyes you can see. It is looking at the tent where the old man is dying.

# Dossier {#dossier}

The Yiqnotud is what the tribes of the steppe call the hunters of the thin blood-fields: the predator spirits that cross into this world in a semi-material form on the worst of the ground, take hold of the living and kill them. The word means "the hunter". The tribes use it as the name of a kind and not of a creature, and they do not say it after dark.

Its place in the doctrine is plain. A [[lore-bloodfield|blood-field]] is ground where so many died together, unreceived by their own rites, that the boundary between the worlds tore, and the predators of the spirit realm gather where unreceived souls are. On a thin field the hunters come through in a form that can act on the world. Nothing living crosses the other way. The Yiqnotud is the reason a thin field is called cursed rather than haunted: a body found at its edge in the morning is a thing every district with a thin field has seen. It belongs with the [[being-spctrwlf|Specterwolf]] and the [[being-glmhnd|Gloomhound]] among the semi-material hunters of the spirit realm, and the steppe tells of it in its own terms.

## Presentation

By night the Yiqnotud is a low, long, four-footed shape of darkness the size of a large hound, with a narrow head, a thin whip of a tail and the loose, sliding gait of an animal that has no weight. By day it is not there. Close to, it is not black but the color of nothing: a hollowness in the air through which the stars show, with a hint of ribs. It leaves no tracks, and the dust on which it passes does not move. A person it takes hold of feels a cold that is not a cold of the skin, and a pressure like a hand on the heart.

Those who have seen one in the half-light say that the head is wrong. It has no eyes, but it knows where the living are, and when it turns it turns toward the warm.

## In the Land

The Yiqnotud is found on the thin fields and nowhere else: on the ground at Jilaq, three days off the road, where the towers of the league's chief city stand over a ring wall, and on the sacked caravan town of Qìmod on the southern spur, where no bird sings and no flame stays lit. It walks the field on any night of the year, and in the field's season and when standing water lies on the ground it walks in greater numbers. The lesser fields, such as the oasis called Wemaq, bring bad dreams and nothing that can touch the living. The Yiqnotud is for the thin ones.

It ranges a few miles beyond the edge of the field in the dark. A camp pitched on the field, or a caravan that has strayed onto it, meets it directly. A camp a mile off on a quiet night may see it at the edge of the light and go through the night with its dogs whining.

## Key Behaviors

The hunters of the thin fields are hunting the dead, and the living are the thing in the way. A Yiqnotud turns on a person only when the person stands between it and its prey or when the person bears something of the field: a stone from a ruin, a tool from a grave, a name spoken aloud on the ground. A traveler who walks the field by day and carries nothing away is not followed. A traveler who sleeps there is found at the edge in the morning.

It works in the dark and it works in packs of three or four. It circles first, counting. It does not attack the strongest. It cuts out the weakest, the sick, the old, the sleeper and the child, and it comes for them from behind the others, and it fights only when the thing it hunts is held.

## What the Tribes Do

The steppe's account of the thin fields is simple. The dead of those fields were not carried to a laying-out ground and not named to the four winds, and the dead that go unnamed are hunted. The tribes keep their own dead to the rite, and a camp with an old man dying moves him to the laying-out ground before the end if it can.

They keep away. The road bends three days round Jilaq, and the spur skirts Qìmod at a distance that a rider reckons by the sound of the dogs. Where a camp must lie within a day's ride of a field, it lays a line of ash on the ground at the edge of the grazing and sets lamps at the four corners of the camp, and the old women sit up. A line of ash will turn a Yiqnotud for a night. A line of ash with a lamp lit by a family whose dead lie on the field will turn it for a season.

Nobody speaks the name of the hunter after dark. A child who says it is hushed, and an outsider who says it is asked to leave.

## Signs

- Dogs that sit in a ring with their backs to the fire and will not be coaxed to lie down.
- Horses that sweat in the cold, and camels that kneel and cannot be got up.
- A fire that burns low and blue, and a lamp that gutters without a draft.
- A stillness in which the night insects stop at once, all along a line.
- A cold at the nape of the neck, and the feeling of being counted.
- A body at the edge of a field in the morning, unmarked, with the face turned back toward the south.

## Combat Strategy

The Yiqnotud strikes from outside the circle of light, on one side while the others circle. It closes through the dark at the speed of a running dog, takes hold of a sleeping or isolated person, and chills the life out of the victim by touch. Once it has hold it is not easily shaken off. It leaves a victim that is protected and awake, and it breaks off an attack in the face of a lit lamp, a line of ash, or the proper rite said over the camp.

Ordinary weapons find little to hurt, and lamplight and the rite do more than steel. The settlement rite of a people whose dead lie on the field is the only measure that has ended one, and it works about half the time.

## Attack Methods

### Ghost Bite

The primary attack. The Yiqnotud closes on a victim and bites at the throat or the arm, and the bite is a cold that numbs, then burns. The wound does not bleed freely and does not close.

### Cold Rake

A forepaw sweeps the victim's chest or back with a chill like the touch of ice on the bone. The damage is slight but accumulates, and a victim who has been raked several times cannot feel his hands.

## Special Abilities

### Semi-Material Form

On a thin field the Yiqnotud takes a form that can act on the world, and it can be seen close to. Off the field it is a presence at the edge of sight. It does not leave the thin ground by more than a few miles.

### Warmth Sense

It finds the living by their heat, in the dark and through cloth, and knows a sleeper from a waker. Sleeping figures draw it first.

### Pack Hunting

Three or four act as one. The first draws a watcher's attention, the second circles, and the third takes the sleeper.

### Dread

The sight of one fills a person with terror, and a person who has met the Yiqnotud and been left alive may dream of the field for years.

## Attributes

- **Strength:** 10-13 (1d4+9)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 11-16 (1d6+10)

- **Will:** 10-13 (1d4+9)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 10-13 (1d4+9)

## A Hook

A war captain of a western tribe lost a patrol on the southern spur in the early autumn, and four of its riders were seen going toward Qìmod after dark. Two came back, silent, in the morning, and have not spoken since. The other two were laid out nowhere, and their families cannot lay out riders who have no bodies. The captain will pay in horses for a party that goes to Qìmod by day, finds the two, and carries them to the laying-out ground before the next dusk. The tribe's old women will go as far as the line of ash and no farther.
