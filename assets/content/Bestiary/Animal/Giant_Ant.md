---
shortcode: giantant
name: {full: Giant Ant, aliases: []}
type: being
subType: creature
description: "A hyper-evolved insect soldier up to five feet long, defending its vast colony with terrible, coordinated ferocity when disturbed."
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
    str: 1d6+9
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+9
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Mandible Bite
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Mandible Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Grapple and Drag
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Grapple and Drag
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[giantant|Giant Ant]]{float=top-left}

The leaf litter ahead of you is moving. It takes a moment to see that the movement is a column, two abreast, each the size of a hound, bronze segments catching the light as they pass over the roots with the sound of a thousand small sticks breaking. The air is sharp with something like vinegar. The nearest one stops, turns its head toward you, and opens its mandibles wider than seems possible, and the ones behind it stop too.

# Dossier {#dossier}

The Giant Ant is a soldier ant three to five feet long, bronze-shelled, one of a colony of dozens to hundreds that nests under the floor of the [[place-cntrlrnfrsts|Central Rainforests]] and in the hot forest and river valleys of [[place-okharisrgn|Okháris]], and it exists to feed and defend a queen it never sees. A single soldier is a dangerous animal. A column of them is the reason the forest peoples move a village when the ground over a nest begins to hum.

It is met on its foraging trails, in the old stone enclosures of the savanna margin where a colony has dug in under the paving, and underground wherever a cave or a ruin is warm and damp enough.

## Presentation

A segmented body in dark brown to red-bronze chitin, with a large head, two compound eyes, and mandibles that open to the width of the head and close like shears. The thorax is thick and carries six jointed legs that move in step and grip bark, stone and a vertical wall as well as the ground. The abdomen is bulbous and segmented and carries a small sting at its tip, used chiefly to lay scent. The shell clicks faintly as the segments flex. The smell of a soldier is sharp and sour and a column of them can be smelled before it is seen.

## In the Land

Colonies are thickest in the equatorial forest, where the floor is warm and wet the year round, and in the rain-fed western forests and river valleys of Okháris, where the village tribes know every nest within a day's walk of their fields. A nest is a mound and the galleries under it, going down forty feet or more, with foraging trails cleared through the litter in every direction and worn to bare earth by use. The old ruins on the forest's southern edge, with their paved courts and dry chambers, are taken over by colonies that dig through the floors, and a party that enters one is in the nest.

## Key Behaviors

A colony lives by scent. The queen's smell holds it together, the workers lay trails that the soldiers follow, and an alarm scent from one soldier brings the rest at a run. Soldiers patrol the trails and the ground round the mound, kill what they meet there, and carry it home in pieces; a column on the march takes a snake, a monkey or a goat as it comes and leaves the bones. They work in concert, several soldiers to a large animal, and they do not stop for their dead. A soldier cut off from its colony is still dangerous and much less determined.

## What the Villages Do

The Okhárin village tribes dig no field within a long bowshot of a mound and burn a trail that comes too close to a house. A nest that has grown large enough to send columns into the village is burned out, which takes the whole village a day, with brush piled on the mound and the galleries smoked, and the soldiers that come out of the smoke killed with long-handled hoes; people die at it. The eggs, dug from a small nest in the dry season, are eaten and traded as a delicacy to the temple-cities, and the men who dig them work fast and lose fingers. The shell of a soldier is worked into light plates for a hunter's forearms and shins.

## Signs

- A path through the leaf litter worn to bare earth, a foot wide, with nothing growing on it.
- A sour, vinegar smell on still air.
- A monkey or a goat skeleton on the forest floor, picked clean and the bones scattered a short way along a trail.
- A low hum felt through the soles of the feet near a mound.
- Bronze shell fragments the size of a hand, with a mandible still on one.

## Combat Strategy

One soldier comes straight on, seizes with the mandibles and tries to drag the prey back along the trail toward the nest; it wants the body for the brood more than it wants the kill. A colony attacks from every side at once, several soldiers to a person, and cuts a wounded or separated person out of the group. They climb anything, so a wall or a tree is no refuge. They follow a scent trail and ignore a corpse, and they do not retreat until the losses are enormous or the queen is in danger. Fire stops them, and a flooded gallery, and nothing else does.

## Attack Methods

### Mandible Bite

The mandibles close on a limb with force enough to go through leather and bone, and the ant locks them and pulls, dragging the prey toward it or tearing the wound wide.

### Grapple and Drag

The soldier wraps its legs round a body and hauls, with the mandibles still locked, back along the trail. Two soldiers on one man take him off his feet.

## Special Abilities

### Colony Coordination

Soldiers fighting together move as one animal: no hesitation, no gap, and a steady effort to isolate and surround each person in turn. A soldier alone loses the half of its danger that was the colony.

### Exoskeletal Armor

The shell turns a cut and a thrust that strikes it square. A heavy blow cracks it; a point finds the joints between the segments.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
