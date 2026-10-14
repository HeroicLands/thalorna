---
shortcode: glmhnd
name: {full: Gloomhound, aliases: []}
type: being
subType: creature
description: "A semi-corporeal shadow-realm predator that hunts in coordinated packs, slipping through darkness and stone to ambush prey underground or by night."
tags: [spirit]
data:
  packFolder: spirit
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
    - name: Ethereal Bite
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
          name: Ethereal Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Shadow Strike
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
          name: Shadow Strike
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

![[glmhnd|Gloomhound]]{float=top-left}

The lamp throws its light a dozen paces up the cut passage, and at the very edge of it something is standing. It is the shape of a long, lean hound, larger than any dog, and you can see the passage wall through it. Its eyes are two points of pale light that do not reflect the lamp. It does not come nearer. When you take a step forward it takes a step back, keeping exactly to the rim of the light, and the cold in the passage deepens until your breath smokes. On the stone floor where it stood, a print of frost fades as you watch.

# Dossier {#dossier}

The Gloomhound is a spirit: a hunter shaped like a great lean hound, eight or nine feet from nose to tail, made of something between shadow and smoke, which crosses into the world in lightless places and in places where death runs deep. It hunts the living by following them at the edge of their light, patiently, and it does not attack until the light fails. In [[place-vurdil|Vurdish]], the labyrinth of cut passages that climbs into the [[place-graznmntns|Grazian]] north face, one holds the dark beyond the first mile, and the climbers who prove Tellumi peaks call it the pale hound. They come in packs of three or four in other places: the ruins and [[lore-bloodfield|blood-fields]] of the [[place-khzryndsrtrgn|Khazryn]], old catacombs and deep caves. It is clever. It learns, plans, and knows a weakened thing when it sees one.

## Presentation

The outline is a hound's—long-legged, deep-chested, narrow-headed—but the substance is shadow, and the edges blur and soften as if it were not quite all here. Light passes through it oddly. In bright light it becomes denser, nearly solid and plainly visible; in shadow it is nearly invisible. The eyes are the one solid thing in it, pale yellow or pale amber, unblinking, and they give back no reflection. Its coat ripples like water as it moves. It leaves no prints on earth or sand, and on stone or metal it leaves a faint print of frost where its weight touched. The cold comes with it, and a deep silence: the sound of a party's own footsteps seems to go dead when a gloomhound is near.

## In the Land

Gloomhounds come into the world where the dark is constant or where many have died badly. In the Khazryn they are found in the deep passages of Vurdish, in the sealed halls of the dead cities, and on the blood-fields where the unreceived dead lie, beside the [[being-yiqnotud|Yiqnotud]] that the steppe tribes fear more. Elsewhere they haunt catacombs, deep caves and the old woods at night. A pack holds its ground as a wolf pack holds a range and drives off other hunters, living or not. Where one has been seen once it is likely to be seen again, and Vurdish's pale hound has held the dark of the upper passages for as long as the Tellumi have kept the record of climbers who went in.

## Key Behaviors

A gloomhound hunts by wearing its prey down. It follows at the rim of the light, out of reach, for hours or days, and waits for the lamp oil to run low, the torch to gutter, the party to split or someone to fall behind. It follows a wounded creature until the wound has done its work. A pack splits to herd prey toward the others and coordinates without sound. It passes through cut stone, timber and worked metal as if they were not there, so a door or a dressed wall does not keep it out; natural rock slows it, and deep bedrock stops it. It is not wasteful and does not kill for the sake of it. Some who have met them say a lone gloomhound can be bargained with, and that one has let a village alone that kept to its side of a boundary.

## What the Climbers Do

The climbers who go into Vurdish carry twice the oil they expect to need and never let the last lamp burn down. They walk in pairs with a lamp between them, keep the party together, and turn back at the second junction if a lamp has gone out. They stand with their backs to the natural rock of the mountain, not to a cut wall, because the hound comes through the dressed walls and not through the living rock. Beyond Vurdish, people who must cross a gloomhound's ground do it in daylight, with fire, with a priest if one will come; the hounds avoid sanctified ground and holy light hurts them. Weapons of natural stone, a flint or an unworked river-stone, are said to bite on them as steel does not.

## Signs

- A shape at the edge of the lamplight that keeps exactly to the rim of it, whichever way the lamp moves.
- Prints of frost on a stone floor, fading as they are watched.
- A cold that deepens in a passage with no draft, and footsteps that seem to fall dead.
- A pair of pale points in the dark that give back no reflection.
- A body found in a passage with no wound but a few cold marks, and its face gray.

## Combat Strategy

The gloomhound waits for the dark. When the light fails it strikes, from wherever the party is weakest, and a pack strikes from several sides at once, one hound in front to hold the eyes and the others coming through the walls behind. It goes for the isolated and the injured and keeps away from anyone carrying fire or holy power. Against a party that holds its light and its order, it pulls back and waits again; a fight turning against it ends with the hound withdrawing through stone. A party split up in the dark is the hound's meal.

## Attack Methods

### Ethereal Bite

The jaws close and the bite feels wrong: little tearing, a deep cold, and a draining weakness as if something vital were running out through the wound. The wound is small and the man is weaker for days.

### Shadow Strike

A rake of shadowy claws that passes partly through armor and cloth. Where it strikes, strength ebbs and resolve wavers.

## Special Abilities

### Coordinated Ambush

A pack moves without signal or sound, each hound knowing where the others are, and strikes from several sides at once, including through the walls. A hound cut off from its pack loses this and is far less dangerous.

### Phase Through Worked Matter

It walks through cut stone, timber and worked metal as through air and can come out of a wall in the middle of a fight. Natural rock slows it and bedrock stops it.

### Shadow Form

In darkness it is nearly invisible and hard to strike; in bright light it becomes solid, plain to see and as easy to hit as a hound.

### Life Drain

Its bites and strikes drain vitality as well as wounding, and a man struck several times feels a cold lethargy settle into his bones.

### Weaknesses

Holy power burns it, bright light makes it solid, sanctified ground keeps it off, and weapons of natural stone wound it more than steel.

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
