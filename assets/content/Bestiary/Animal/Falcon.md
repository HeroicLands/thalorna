---
shortcode: falcon
name: {full: Falcon, aliases: []}
type: being
subType: creature
description: "A sleek, compact raptor of the middle air, striking prey in devastating high-speed vertical dives no larger bird can match."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-falconmoon, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4
    end: 1d4+6
    agl: 1d6+10
    per: 1d6+21
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 2}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: -9, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -8, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
      weight: {base: 2, calc: "2"}
      reachBase: 0
      bodyScaleBase: 0.33
      personalFatigue: enc + 5
    currentMoveMedium: aerial
    movementProfiles:
      - medium: aerial
        feetPerRound: 400
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[falcon|Falcon]]{float=top-left}

A dark speck hangs in the wind a long way above the field, hardly moving. A flock of pigeons feeding at the edge of the stubble goes up with a clatter of wings, scatters, and the speck comes down out of the sky like a thrown stone. There is a puff of feathers. By the time the pigeons have settled, the speck has gone off with something small and limp in its feet.

# Dossier {#dossier}

The Falcon is the fast raptor of the middle air, a foot and a half tall, striking birds in flight in a vertical dive. It nests on crags and rock faces in [[place-vrystwald|Vristwald]], on the cliffs above the [[place-falkhaven|Falkhaven]] shore, in the [[place-graznmntns|Grazian range]] and along the desert edge of [[place-aukhelathrgq|Au'Khelathu]]. A pair hunts the open country below its ledge. Nobles and the desert hunters keep trained falcons.

## Presentation

A small, compact raptor, all muscle under fine plumage, dark steel-blue on the back with a buff or russet breast and dark malar stripes on the face. The eyes are large and face forward. The talons are moderate and sharp, and the beak is hooked for quick killing. Even perched, the falcon looks alert and ready to spring.

## In the Land

Falcons nest on crags and rock faces in [[place-vrystwald|Vristwald]], the cliffs above the [[place-falkhaven|Falkhaven]] shore, the mountains of the [[place-graznmntns|Grazian range]] and the desert edge of [[place-aukhelathrgq|Au'Khelathu]]. A pair uses one ledge year after year and hunts the open country below it for birds. A falcon watches from a high perch or from the air, folds its wings, and drops on a bird in flight. In winter it follows the flocks of waterbirds down to the marshes and the coast.

## Key Behaviors

Falcons live alone and hold their hunting ground fiercely. They hunt on the wing, climbing to a great height and stooping at tremendous speed on a bird in flight, or snatching a small mammal from the ground. A falcon spends hours aloft. It leaves less sign of a kill than an eagle does, since it eats quickly or caches the prey in some high place.

## What the Falconers Do

The falcon is the wesk of Vristwald villages such as Radstein and Falkreth, and Falkenstein takes its name and its totem from the falcon that nests on the crag the fort is cut into. In Au'Khelathu the hunters of the desert edge take nestlings and passage-birds for the nobles, and the Guiding Falcon, [[lore-gewaatisdty|Gewa'atis]], is the god of travelers and voyages. The lords of the Bizarian March fly hawks and falcons with hounds and coursing cats. A trained falcon is carried hooded on the fist, flown at a flushed bird and called back to a lure.

## Signs

- A dark bird holding itself still in the wind high over a field, and then falling like a stone.
- Feathers scattered across a stone in a ring, the breastbone picked clean.
- A pair of loud, ringing calls from a cliff, over and over, in the nesting season.
- A flock of pigeons or ducks that suddenly goes silent and bunches over water.
- A falconer's hood and jesses hung by the door of a lord's mews.

## Combat Strategy

A falcon's only true tactic is the stoop—climbing high, then diving at target at speed no ground-bound creature can match or escape. The falcon uses this initial pass to wound, then circles for follow-up attacks if the target survives the first strike. If prey proves difficult or dangerous, a falcon will make several high-speed passes before retreating to altitude to reassess. A cornered falcon fights with its talons and beak in confined space, but it strongly prefers to fight only when it has aerial advantage. Unlike the eagle, a falcon is more likely to abandon a nest than to defend it with suicidal desperation.

## Attack Methods

### Talon Rake

Delivered during the blur of a high-speed dive or in close combat—the falcon extends its legs with terrible force to rake with curved talons, causing deep puncture wounds and lacerations. The sheer velocity of a diving strike makes this potentially catastrophic; in close quarters, the falcon executes rapid successive strikes.

### Piercing Beak

The falcon's beak is built for swift, precise damage—it is neither as hooked as an eagle's nor designed for tearing, but rather shaped for driving deep into flesh with surgical precision. A falcon will strike at the eyes, throat, or any exposed soft target.

## Special Abilities

### Blinding Dive

A falcon can reach speeds in a vertical dive that make its approach nearly imperceptible until the moment of impact. A target of a diving falcon has little chance to defend unless it has advance warning. The falcon's speed in the stoop also allows it to target opponents that believe they are safely out of range.

### Aerial Mastery

The falcon is supremely graceful in the air—it can recover from a dive into a near-vertical climb, pivot instantly, or execute turns that leave terrestrial predators behind. A falcon in open air combat has overwhelming tactical advantage. On the ground, a falcon is clumsy and awkward, moving with visible discomfort.

## Additional Information

Falcons have been trained since ancient times as hunting companions to nobility and elite warriors. A character might recruit a young falcon for hawking, though the bird will always be wild at heart and liable to abandon its handler if presented with an easier hunting opportunity elsewhere. Falcon feathers are prized for fletching and ceremonial dress. The bird's territory is its most valuable asset—a falcon that has established a rich hunting ground will defend it unto death.

## Attributes

- **Strength:** 1-4 (1d4)

- **Endurance:** 7-10 (1d4+6)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 22-27 (1d6+21)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 3-6 (1d4+2)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
