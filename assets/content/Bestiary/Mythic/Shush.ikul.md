---
shortcode: onemore
name: {full: "Shush'ikul", en: [The One More]}
type: being
subType: creature
description: "Hairless, eyeless dog-shaped things of the waste that follow a party for days, always one more of them than there are travelers, and take whoever leaves the firelight."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: sohl-none-icon-hound
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
    str: 1d6+8
    end: 1d6+10
    agl: 1d6+12
    per: 1d6+12
    snt: 1d6+12
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d6+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 60}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true}
    - name: Hands
      type: skill
      system:
        shortcode: hands
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: hands
          name: Hands
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: edged}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 5}
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
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
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
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: &a1 {blunt: 2, edged: 1, piercing: 1, fire: 1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: *a1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: *a1
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
      weight: {base: 120, calc: "120"}
      reachBase: 0
      bodyScaleBase: 1.15
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

You see them on the second morning, gray shapes on a ridge a long bowshot behind, standing in a row the way men stand. When the party walks they walk. When it stops to drink they stop, and sit, and their heads turn toward it all together, though they have no eyes to look with. The accounts you bought at the gate told you to count them, so you count them. There are nine. There are eight of you.

At night they come round the camp at the edge of the firelight, hairless and gray as wet ash, with long thin legs that bend the wrong way and forefeet that close like hands. Out in the dark, one of them coughs, a dry, tired cough, like an old man in a cold camp.

# Dossier {#dossier}

The shush'ikul, the One More of the returners' accounts, are the hairless dog-shaped things of the waste. They hunt in packs, they follow a party for days, and a pack that follows a party is always one more in number than the party it follows. The gate's warnings name them for their bare skins, and the name in the priests' tongue means hairless. They are found through all of [[place-ashcountry|the Ash Country]], and a smaller kind runs in the trees of [[place-sickforest|the Sick Forest]].

## Presentation

A shush'ikul is the size of a large hound and about as heavy as a man, built long and thin. Its skin is bare, gray, and faintly wet, and lies close over the bones. Its legs are long and bend backward at both knees, forelegs and hind legs alike, so that it stands a little like a man on all fours. Its forefeet are long-toed and close like hands, and it can hold and carry with them. Its head is long and narrow, with a wide mouth and no eyes at all, only smooth skin where eyes would be, and two holes behind for ears. It makes one sound, the cough.

The forest kind is smaller, darker, and has longer forefeet, and it goes through the trees hand over hand as well as it goes on the ground.

## In the Land

The packs range the whole Ash Country, from the foot of [[place-ashstair|the Ash Stair]] south to the Boiling Ground and beyond. No pack has been seen above the Stair. They turn back a day short of [[place-deadmountain|the Dead Mountain]], and the accounts that reach [[place-xelemixbal2|the Dead Jaguar]] say they stop at the edge of the glass. In the Sick Forest the packs are smaller and quieter, and they follow a party from the branches overhead, where nobody can count them easily.

## Key Behaviors

A pack finds a party within a day or two of the Stair and follows it from then on, at the distance of a long bowshot by day, and at the edge of the firelight by night. It keeps pace exactly. It stops when the party stops, lies down when the party lies down, and gets up when it gets up.

A pack is always one more than the party it follows. A party of eight is followed by nine, and a caravan of thirty by thirty-one. When a man dies, by any cause, one of the pack goes off before the next morning. When a party takes in a stranger, one more comes in from somewhere and joins the row on the ridge. When a party splits, the pack splits too, and each half is one more than the men it follows. The gate's cords hold no account of a party large enough to find the end of it.

They do not attack a party by day, and they do not come into the light of a fire.

## How the Day Ends

The shush'ikul take whoever leaves the firelight alone. A man who walks out into the dark to relieve himself, or to look at the stars, or to see what coughed, is gone without a cry, and in the morning there is nothing of him but his tracks going out. The pack is one fewer in the morning, and still one more than the party.

So the day ends with nobody sleeping. A party followed by the One More doubles its watch, keeps its fire up through the night with fuel it carried for days, and goes nowhere beyond the light, not even a few steps. It walks on in the morning short of sleep, and is shorter of it each night after, and a party that has been followed for a week walks like a party of old men. The first to fall behind on the march are the most tired, and a man who falls far enough behind is out of the party's sight by dusk.

## What the Returners Do

Returners count the pack every morning and every evening, aloud, and count the party after it. A party that is followed ties itself together at night with a cord from wrist to wrist, so that nobody goes out of the light without waking the man beside him. The returners do not answer the cough, and teach that a man who hears it from inside the light is to stay where he is and speak his own name aloud, so that the others know where he is.

A party that kills one does not gain by it: the pack goes on as one more. A party that kills the whole pack is soon followed by another.

## Signs

- A row of gray shapes on a ridge behind the party, standing still and all facing it.
- Tracks like a dog's beside tracks like a man's hand, in pairs.
- A dry cough in the dark outside the camp, like an old man's.
- Footprints of a man going out of a camp at night and none coming back.
- In the Sick Forest, slime and torn bark on the high branches over the path.

## Combat Strategy

The pack does not fight a party that keeps together and keeps its light. It takes a man who is alone and out of the light, three or four of them at once, with the forefeet closing on his mouth and arms so that he makes no sound, and drags him out into the dark. Wounded, a shush'ikul goes back to the pack and the pack draws back to its bowshot. In the forest the smaller kind drops from above onto a man at the back of the line and is gone up the trunk with him before the man in front turns round.

## Attack Methods

### Bite

The wide jaws close and hold. A shush'ikul that has bitten does not let go while the others drag.

### Hands

The forefeet seize, tear and hold, and they go first for the mouth.

## Special Abilities

### Blind Sense

A shush'ikul has no eyes and needs none. It knows where everything is around it by smell and by hearing, in daylight and in the dark alike, and a man who keeps still and silent in the dark is still found.

### The Count

A pack is always one more than the party it follows, and a party can neither outnumber it nor thin it by killing.

### Silence

The pack moves without a sound. Apart from the cough, nothing a party hears tells it where the shush'ikul are.

## Attributes

Strength
: 9-14 (1d6+8)

Endurance
: 11-16 (1d6+10)

Agility
: 13-18 (1d6+12)

Perception
: 13-18 (1d6+12)

Scent
: 13-18 (1d6+12)

Aura
: 7-12 (1d6+6)

Will
: 11-16 (1d6+10)

Reasoning
: 7-12 (1d6+6)

Creativity
: 5-8 (1d4+4)

## See Also

[[place-ashcountry|The Ash Country]]
: the ash plains the packs range

[[place-sickforest|The Sick Forest]]
: the rotting forest, where a smaller kind hunts from the trees

[[place-ashstair|The Ash Stair]]
: the descent no pack climbs

[[place-xelemixbalrgn|Shelem Ish'bal Region]]
: the waste
