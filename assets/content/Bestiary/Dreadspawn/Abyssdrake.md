---
shortcode: abyssdrk
name: {full: Abyssdrake, aliases: []}
type: being
subType: creature
description: "A rare, intelligent draconic ambush predator of lightless depths that guards sunken ruins, trenches, and underwater sanctuaries."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+14
    end: 1d4+14
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+12
    aur: 1d4+16
    wil: 1d4+14
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Serpent Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Serpent Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Shadow Claws
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
          name: Shadow Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Corrosive Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Corrosive Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 5, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            roles: [manipulator]
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
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
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
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
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.33
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
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[abyssdrk|Abyssdrake]]{float=top-left}

The tide is at its lowest, and the stones of the drowned street are out of the water for the one hour in the month they show: weed-hung walls, a doorway, a stair going down into black water. Something is lying along the stair. It is longer than a fishing boat and black as wet slate, and it is so still that you see it only because the light catches a row of fins down its back, each one rimmed in a faint, sickly green. Then it turns its head, and two eyes open in it, burning a cold, hard blue. The smell of brine and rotten eggs comes up off the water, and a hiss you feel in your breastbone more than hear.

# Dossier {#dossier}

The Abyssdrake is a dreadspawn made in the shape of a sea-drake: twenty to thirty feet of black-scaled, finned, serpentine body that hunts in lightless water and comes up out of it at night, with jaws, claws and a breath of corrosive vapor. It was made, like all dreadspawn, and it does not breed; this one, at least, was made to guard. Off the fog-bound coast of [[place-galvaren|Galváren]], where the fishing towns tell stories of drowned cities and take them seriously, the abyssdrake is the reason one of those stories is told as a warning. It keeps a sunken ruin under the cliffs and kills what comes into it, and it has done so for longer than any family on the coast can remember.

## Presentation

The body is long and slender, scaled in a black that seems to swallow light, with a pointed head, a mouth of backward-curving teeth, and a ridge of jagged fins over each eye. A crest of spines runs the length of the back, each rimmed in a faint violet or green glow. Along each flank runs a broad, black fin like a ray's wing, which drives it through the water and which it spreads, out of the water, to lift itself into the air in slow, heavy, gliding flight. The claws are long and dark as iron. It smells of brine and sulfur and something rotting. It moves smoothly and without hurry in water and on land, and it makes a low, thrumming hiss when it is roused.

## In the Land

The abyssdrake keeps the drowned ruin off the Galváreni coast that the fishing towns call the sunken city: a few streets of fitted stone under the cliffs, uncovered at the lowest spring tides and drowned the rest of the month, with stairs that go down into flooded passages and sea-caves no one has followed to their end. Its lair is somewhere in those passages. It hunts the seal rocks and the fishing grounds round the ruin by night, and on dark nights it lifts out of the sea and glides along the cliffs, and boats coming home late have seen it against the stars. It does not go far from the ruin. Whatever the ruin held, the drake has outlived it, and it stays.

## Key Behaviors

The drake hunts alone, mostly at night and in deep, dark water, and lies up in the drowned passages by day. It is a patient ambusher and will wait days in one place for prey to come. It is intelligent and holds its ground the way a lord holds a manor: it drives seals, sharks and boats out of the water round the ruin without eating them, and it attacks anything that goes down into the ruin itself. A fishing boat that keeps its distance is usually let alone. A party that goes into the ruin at low tide has an hour before the sea comes back and the drake comes with it.

## What the Fishing Towns Do

The fishermen of the coast set their nets well wide of the ruin, sail home before dark in the dark of the moon, and do not anchor within sight of the sunken city. The harbor tellers of [[place-ornethe|Ornéthe]] say the drake keeps the gate of a city that the sea took for its pride, and that what lies at the bottom of the stair is the city's treasure, still waiting. Every generation some young man takes a boat out at the lowest spring tide to look, and most of them come back. The ones who do not are remembered by name at the harbor, and their names are told to the next young man. An [[affiliation-arldnpnthn|Aurèldían]] priest blesses the fleet each spring with lamps, because the drake shuns strong light.

## Signs

- Seals hauled out on rocks far from their usual grounds, and none on the rocks near the ruin.
- Nets and lobster-pots near the ruin cut cleanly, as if by a blade, and dragged down.
- A smell of brine and rotten eggs on a still evening, rising off the water.
- Patches of water where the weed and the barnacles on the rocks are dead and bleached.
- A long shape against the stars, gliding along the cliffs on a moonless night.

## Combat Strategy

The drake fights from darkness and water. It strikes from below or out of a flooded passage, bites and claws, and pulls back into the dark to judge what it has hit. It uses its corrosive breath against a group, then closes on whoever is left standing. It drags what it seizes down into deep water. It does not fight to the death: if a fight goes against it, it goes deep and waits, and heals in the dark, and comes back. It is clever in tight places, fights in the narrow passages where a party cannot spread out, and avoids strong light.

## Attack Methods

### Serpent Bite

The drake lunges with its whole length behind its jaws and seizes. The backward teeth hold, and once it has a grip it pulls its victim toward deep water.

### Shadow Claws

The forefeet rake with long black claws that cut through cloth, leather and flesh. The drake claws to hold and tear while it bites, and to keep a victim from getting away.

### Corrosive Breath

The drake breathes out a stream of hot, stinking vapor and fluid that blisters skin, eats into leather and pits iron. The burns go on eating into exposed skin for a while after the breath has passed.

## Special Abilities

### Shadow Adaptation

In darkness or murky water the drake is nearly invisible, and in complete darkness it strikes a man who cannot see in the dark before he knows it is there.

### Regeneration

In darkness or water the drake heals far faster than any natural creature. Sunlight or strong, steady light stops its healing entirely, and a drake kept in light cannot heal at all.

### Aquatic Propulsion

Its long body, its tail and its winglike fins make it much faster in water than any swimmer, and it turns and dives where nothing that walks can follow.

### Gliding Flight

Out of the water the drake spreads its fins and lifts itself into the air, slowly and heavily, and glides along cliffs and over the water on dark nights.

### Light Aversion

The drake shuns strong light. A bright lamp, a fire or a lit blessing held up in its face drives it back into the dark and keeps it from healing.

## Attributes

- **Strength:** 15-18 (1d4+14)

- **Endurance:** 15-18 (1d4+14)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 13-16 (1d4+12)

- **Aura:** 17-20 (1d4+16)

- **Will:** 15-18 (1d4+14)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 11-14 (1d4+10)
