---
shortcode: hppgryph
name: {full: Hippogryph, aliases: []}
type: being
subType: creature
description: "A five-hundred-pound eagle-and-horse hybrid prized for balance over raw power, lacking the gryphon's fierce territorial aggression."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: mythic
  attrRollFormula:
    str: 1d6+19
    end: 1d6+8
    agl: 1d6+7
    per: 1d6+17
    snt: 1d4+1
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 49}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 5, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, trample: true}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 6, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 5}
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
            probWeight: 7
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a1 {blunt: 4, edged: 3, piercing: 2, fire: 3}
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
            protectionBase: &a2 {blunt: 3, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
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
            probWeight: 5
            protectionBase: &a3 {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: &a4 {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: *a3
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 2}
      weight: {base: 500, calc: "500"}
      reachBase: 0
      bodyScaleBase: 1.57
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
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

A call comes down out of the sky, clear and almost musical, with a horse's whinny under it, and the herd on the far slope lifts its heads together. It comes in over the ridge on wings twenty-five feet across, gray and gold, an eagle's head and breast on the body of a tall horse, and it lands at a canter on the grass a bowshot off, folds its wings, and begins to graze. After a while it lifts its head and looks at you with an eagle's eye and a horse's curiosity, and takes two steps nearer.

# Dossier {#dossier}

The hippogriff is an eagle in front and a horse behind: four feet at the shoulder, eight feet from fore-talons to tail, five hundred pounds, with wings that span twenty-five feet and a horse's hindquarters and hooves. It grazes like a horse, flies farther and faster than anything else its size, and moves with the seasons across the breadth of Ankaris, summering on the open steppe of [[place-velanthrgn|Velanthia]] and the high pastures under the [[place-graznmntns|Grazian]] foothills and wintering on the warm shores round the [[place-midhalnrgn|Mídhalión]] basin, by routes its kind has flown for centuries. It is curious about people, it has been ridden, and it is the one of the great winged beasts that comes to a village on purpose.

## Presentation

The head is an eagle's, finer than a gryphon's, with amber or gold eyes and a sharp hooked beak, on a feathered neck that flows into deep, heavily muscled withers. The forelegs are an eagle's, feathered to the talons. Behind the shoulders the plumage gives way to a horse's coat, gray, silver, brown or dappled, often with white on the face or legs, and the hindquarters, legs, hooves and tail are a tall horse's. The wings are long and light-boned, built for distance, and feathered in browns, grays and golds. The mane flows like a horse's and a hippogriff spends a good deal of its day on it.

## In the Land

Hippogriffs fly north in spring to the forest-steppe of Velanthia and the grass under the Grazian wall, where the pairs raise their young on the open ground and graze beside the horse-herds of the river-prince kingdoms, and south in autumn along the river valleys to the coasts and islands of the inland sea, where the winters are mild. The routes do not change. A pair with one or two young travels together; larger groups gather at the resting-grounds along the way and part again. A hippogriff that has found a village it likes on its road returns to it every year, sometimes for decades, and is known there by name.

## Key Behaviors

A hippogriff grazes as a horse does and eats a little meat when it comes by it, and it flies for the pleasure of it, circling for hours on a warm day with nothing to hunt. It is wary and quick off the ground, and it hears and sees a predator a long way off. It is curious, and it comes to a camp or a village to look, and stays if it is not driven off. It learns names and faces, follows a few plain words, and keeps a kindness in mind for years; it mourns a dead rider and a dead mate. Pairs mate for life. Among themselves they have a speech of calls and posture that is more than a horse's and less than a man's, and nobody has learned it.

## What the Steppe People Do

The herding Hosts of the Velanthian frontier count a hippogriff pair that summers on their grass as good fortune and leave a field unmown for them, and a steppe herdsman who has had the same pair on his pasture for twenty years talks to them. A few houses on the Velanthian frontier and round the inland sea have kept hippogriffs for generations, bred from young that were raised to the hand, and ride them: a rider on a hippogriff crosses in a day what a horseman crosses in a week, and a lord with three of them knows what is happening on his borders. The bond is the hippogriff's to give and to keep. One that is beaten or caged leaves at the first chance and does not come back to that house, and the steppe people hold a man who has driven one off to have earned whatever follows.

## Signs

- A clear, ringing call from high up on a still day, with a whinny in it.
- Hoofprints in a pasture that begin and end in the middle of the grass.
- Horse-herds that stand and watch the sky together without alarm.
- A pair circling for an hour over a valley with nothing below them worth hunting.
- A village where the children wave at something overhead and nobody runs.

## Combat Strategy

A hippogriff fights to get away. It takes off at the first threat and strikes from the air if it must, a dive, a rake with the fore-talons, and a climb-out before anything can answer, and it does this longer than any other flier because it does not tire. On the ground it rears and strikes down with both forelegs as a war-horse does, kicks behind as it backs away, and takes off again the moment it has room. It knows a fight it cannot win and leaves it, and it is shamed by nothing. A hippogriff with a bonded rider in danger stays and fights, and a pair with young on the ground meet a wolf pack together.

## Attack Methods

### Talon

The fore-talons strike at the end of a dive or in a rearing blow from the ground, several quick rakes that open a man's face and arms and go through light mail.

### Kick

The hind legs kick as a horse kicks, backward and with the whole weight of the animal; a kick breaks ribs and kills a man who is behind it at the wrong moment.

### Beak

The hooked beak tears at whatever the talons have taken hold of, and takes the hand off a man who reaches for the bridle.

## Special Abilities

### Exceptional Speed

Nothing with wings but a dragon outflies a hippogriff. It comes in from a quarter nobody expected and is gone before the answer is made.

### Endurance Flight

A hippogriff flies from dawn to dusk, holds its pace for hours and is fresh the next morning. It crosses a country in a day.

### Equine Intelligence

It knows a few words, remembers a place and a face for decades, works out a latch and a knot, and returns a kindness years later.

### Sure-Footed Mastery

Its hooves hold on wet rock, ice and scree, and it lands and takes off from a mountain ledge, a bog or a shingle beach where no other flier of its size could.

### Willing Bond

A hippogriff chooses a rider freely and may refuse one without grudge. One that has chosen carries its rider with care, warns of danger and fights for them, and goes on dealing with other people and other beasts besides; a hippogriff whose rider dies grieves and in time takes to its roads again, or chooses another.

## Attributes

- **Strength:** 20-25 (1d6+19)

- **Endurance:** 9-14 (1d6+8)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 18-23 (1d6+17)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 7-10 (1d4+6)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
