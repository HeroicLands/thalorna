---
shortcode: rckbckbr
name: {full: Rockback Bear, aliases: []}
type: being
subType: creature
description: "A solitary mountain apex bear standing ten feet tall and topped with rocky protrusions, intensely territorial and quick to hunt large prey."
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
    str: 1d6+14
    end: 1d6+13
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+9
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Massive Claw Swipe
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Massive Claw Swipe
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Bite
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
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
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
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
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
      weight: {base: 1200, calc: "1200"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[rckbckbr|Rockback Bear]]{float=top-left}

The scree slope is quiet except for the wind, and then a boulder at the top of it rolls over. It is not a boulder. It is the back of a bear, humped and gray and knobbed with lumps like rough stone, and the bear under it stands up on its hind legs and keeps standing up until its head is higher than a man on a horse. Dark, wet-matted fur, small eyes, a breath that smokes in the cold. It drops to all fours, and the stony plates on its shoulders grind against each other with a sound like a millstone. Then it starts down the scree toward you at a run, and the slope moves under it.

# Dossier {#dossier}

The Rockback Bear is a great mountain bear, eight to ten feet tall standing, solitary and fiercely territorial, whose back, shoulders and skull are armored with thick, knobbed growths of bone and horn that look and feel like stone. It lives in the high, broken country of the [[place-nrdlndsrgn|Nordlands Region]], and it is the master of the [[place-shtrdpks|Shattered Peaks]] and the [[place-flarnfjall|Flarnfjall]] round them in [[place-norgaad|Norgaad]]. It eats roots, berries and fish when it can get them and hunts goats, caribou and anything else that will feed it when it cannot, and it attacks people who come onto its ground. A rockback that has been hunted and escaped remembers it.

## Presentation

A rockback is heavier in the shoulder than any other bear, with a high hump, a massive head and short thick legs. Its fur is dark brown to near black, long and coarse, usually matted with mud and ice. Along the spine, across the shoulders and over the crown of the skull grow its plates: rough, gray, lumpy growths of bone sheathed in horn, overlapping like roof slates along the back and fused into a helmet on the skull. They are scarred, chipped and often split, and lichen grows on old ones. The claws are black and as long as a man's fingers, the jaws broad and heavy. A rockback smells of wet fur and carrion. It moves with a heavy rolling walk, climbs broken rock better than any man, and when it runs downhill it seems to fall with the slope.

## In the Land

Rockbacks hold the high country of Norgaad's interior: the scree, the cirques and the boulder-fields of the Shattered Peaks, the high shoulders of the Flarnfjall above [[place-tvarnmark|Tvarnmark]], and the valleys between the ranges up toward the mines. Each bear has a range of many miles, a den in a cave or under a rock-shelf for the winter, and a round it follows through the year: down to the rivers for the summer fish runs, up to the berry-slopes in autumn, onto the high shoulders where the caribou graze in summer. They are thinly scattered, perhaps one to a valley, and a bear's ground is known to the people who share it. In winter they sleep, and a bear woken from its winter den is the most dangerous animal in the north.

## Key Behaviors

A rockback eats whatever it can find and catch: roots dug out of the scree, berries, fish from the rivers, carrion, goats on the spires and caribou calves on the shoulders. It is a strong hunter of large animals and kills a grown caribou with one blow. It marks its ground by tearing the bark off trees, turning over boulders and leaving its dung on the paths, and it drives off or kills other bears, wolves and anything else it finds eating there. The males fight in spring and are most dangerous then; a female with cubs attacks anything that comes near them and follows an intruder a long way. Rockbacks are clever and remember. A bear that has never met men may ignore them, and one that has been hurt by them hunts them.

## What the Herders Do

The plateau clans who graze caribou on the lower shoulders of the Peaks know each bear on their ground and its round, and they move their herds to stay out of its way in the season it comes up. They do not hunt rockbacks; when one starts taking the herd, the clan sends for a party of hunters from the valleys and pays them in calves. Hunting a rockback is a feat a man boasts of for the rest of his life, done with heavy boar-spears set against the charge and a pack of dogs to hold it, and men die doing it. A bear's back-plates go to the armorers at Tvarnmark, who rivet them to a shield's face, and a skull-plate makes a helm-crown a jarl's man will pay a year's wage for. Prospectors climbing into the Peaks after the rumored mithral carry fire and noise, keep to the saddle route, and do not camp in caves.

## Signs

- Pine and birch stripped of bark from the ground to a height well above a man's head, the wood scored with five-clawed marks.
- Boulders the size of a sheep rolled out of their beds and turned over on a slope.
- Huge five-toed prints in snow or mud, the hind print longer than a man's foot.
- A caribou carcass dragged under rock and covered over with scree and moss.
- A grinding, scraping sound, like stone on stone, from the far side of a ridge.

## Combat Strategy

A rockback that decides to fight comes straight in. It charges, downhill if it can, rears at the last moment and strikes with both forepaws, then closes and bites. It does not back off from wounds, and a hurt rockback is angrier and more dangerous. It uses its plates: it takes blows on the shoulders and the back of the skull and shoves forward into spears. It fights to the death over cubs, over a kill, or in its den. A bear that has been driven off once often comes back at night, and a bear that has been wounded and escaped may follow the men who hurt it for days.

## Attack Methods

### Massive Claw Swipe

The bear rears and swings a forepaw down and across. The claws tear through leather and mail rings, open long, deep wounds, and break bones under them, and the weight of the blow throws a man off his feet. It strikes again and again, left and right.

### Crushing Bite

The jaws close on a limb, a shoulder or a head and crush. The bear uses its bite to seize and shake, and to finish a man who is down.

## Special Abilities

### Rocky Armor

The plates on the back, shoulders and skull protect like a coat of scale. Cuts and thrusts glance off them, and a blow has to find the belly, the throat, the face or the legs to do real harm.

### Shoulder Slam

The bear drives its plated shoulder into a man with its whole weight behind it, knocking even an armored man backward and off his feet.

### Grapple and Shake

A bear that gets hold of a man hugs him in with the forelegs, lifts him, and shakes him, crushing ribs and limbs and pulling him into position for the bite.

### Downhill Charge

A rockback charging down a slope hits harder for every stride, and a man below it on steep ground cannot stand against the blow or get out of its way.

### Primal Ferocity

Once a rockback is fighting it does not retreat, cannot be frightened off, and fights on through wounds that would stop another animal.

### Mountaineer Instinct

The bear moves fast and sure over scree, ice, boulder-fields and steep rock where a man must pick every step, and it fights best on that ground.

### Regenerative Nature

A rockback heals fast. Minor wounds close within hours and bad ones within days, and a bear that escaped hurt is back on its round sooner than hunters expect.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 14-19 (1d6+13)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
