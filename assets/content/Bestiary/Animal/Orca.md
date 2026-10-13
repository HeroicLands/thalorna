---
shortcode: orca
name: {full: Orca, aliases: [Killer Whale]}
type: being
subType: creature
description: "A massive, intelligent pack-hunting marine mammal and apex predator of every ocean, the most dangerous animal encounter possible on open water."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: spermwhale, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+19
    end: 1d6+14
    dex: 1d6+8
    agl: 1d6+10
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+12
    rea: 1d6+8
    cre: 1d6+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 53}}
    - name: Ramming Strike
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Ramming Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Fluke Bludgeon
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Fluke Bludgeon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Seize and Drag
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Seize and Drag
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Body, shortcode: torsozone, probWeight: 24}
          - {name: Tail, shortcode: tailzone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 8000, calc: "8000"}
      reachBase: 0
      bodyScaleBase: 1.62
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 120
        leaguesPerWatch: 16
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[orca|Orca]]{float=top-left}

The fjord has been still all morning, and then the water breaks. A black fin rises out of it like the sail of a small boat, six feet high and straight as a blade, and behind it come others, curved, in a long line. The pod rolls up out of the swell with a roar of spray from each blowhole. White patches gleam behind the eyes. A calf surfaces beside the oldest female, and the fishing boats nearest the mouth of the fjord turn quietly for home.

# Dossier {#dossier}

The Orca is the largest of the dolphins, twenty-five to thirty feet and eight to twelve thousand pounds, hunting in pods of five to thirty in the cold seas off the [[place-nrdlndsrgn|Nordlands]] and the fjord coasts of [[place-vithgard|Vithgard]]. The coastal folk know the pods, name them and plan their sailing seasons around them. Some pods hunt fish, some seals, some whales. The seal-hunting and whale-hunting pods can capsize an ice floe and wash prey off a rock, and a pod that has learned that ships carry food is a danger at sea.

## Presentation

A massive, streamlined animal, jet black above and bright white below, with a white patch over and behind each eye and a gray saddle patch behind the dorsal fin that is different on every animal; the northern sailors know individuals by it. The body is powerfully muscled and drives itself at over thirty miles an hour in short bursts with a pair of horizontal flukes. The dorsal fin of an adult male is a straight blade up to six feet high; females and young have shorter, curved fins. The mouth holds forty to fifty interlocking conical teeth, for gripping and not slicing.

## In the Land

Orcas range the cold seas of the [[place-nrdlndsrgn|Nordlands]], the fjord coasts of [[place-vithgard|Vithgard]] and the northern ocean where the seal and whale grounds lie. A pod of five to thirty follows the herring runs in the autumn, the seals in winter and the whales on their passage through the straits. Each pod keeps its own calls and its own method of hunting, and returns to the same coasts year after year.

## Key Behaviors

Orcas live in pods of five to thirty, kept by the oldest female, who carries decades of knowledge about hunting grounds, migration routes and prey. A pod has its own dialect of clicks, whistles and calls. Each pod teaches its hunting method from mother to calf: fish-herding pods drive shoals into a tight ball against the surface, seal-hunting pods make waves to wash seals off ice floes and whale-hunting pods work in relays to wear down a whale over hours. They breach, rise vertically to look about and seem to play. They investigate ships, swimmers and strange objects, and curiosity can turn to aggression if the pod sees a threat or a rival.

## What the Whalers Do

The whaling crews of the Nordlands know the pods by their marks and watch them in the season, since a pod will drive a whale to the surface and into the shallows. A crew that finds a pod at a whale does not take the whale until the pod has eaten. Fishermen keep their boats close to shore when a pod passes, and small craft keep away from a pod hunting seals. Old pods are named in the villages, and a pod that has been seen for generations is thought to bring luck to the coast. No hunter will take an orca.

## Signs

- A tall, black fin, taller than a man, cutting the water at the head of a line of smaller fins.
- A burst of spray in a calm fjord and the dark back that follows it.
- A seal colony on the beach that has fallen silent, with every animal looking out to sea.
- A whale stranded in the shallows with its flukes shredded and its flanks torn.
- A chorus of clicks and whistles heard through the planking of a boat.

## Combat Strategy

An orca pod fights the way a wolf pack fights — with coordination, role specialization, and relentless endurance. Against a ship, the pod's strategy depends on its size and experience. A common approach is the "wave wash": several orcas swim in formation beneath the vessel and surface simultaneously, creating a combined wave that can capsize small boats and swamp larger ones. Against swimmers or people on ice floes, the pod coordinates to create waves that wash the target into the water, where waiting pod members seize it. In direct combat, individual orcas take turns attacking — one engages while others rest, creating a relay system that exhausts prey while conserving the pod's energy. The lead female directs the pod's movements, and experienced pods adjust their tactics in real time based on the prey's responses. Against armored or dangerous targets, orcas use their tail flukes as bludgeoning weapons, delivering strikes powerful enough to shatter bone and timber. They are patient hunters willing to sustain an engagement for hours if necessary, and they virtually never abandon a committed hunt.

## Attack Methods

### Ramming Strike

The orca accelerates to full speed and drives its head into the target — a ship's hull, an ice floe, or a creature in the water. The impact of several tons of muscle moving at speed is devastating, sufficient to hole light hulls, capsize small vessels, and kill or stun marine prey outright.

### Tail Fluke Bludgeon

The horizontal tail flukes are swung laterally or vertically with enormous force, striking targets at or near the surface. A tail strike can shatter a small boat's gunwale, break human limbs, and send spray and debris across a wide area. The strike is fast and can be delivered while the orca is already turning for another pass.

### Seize and Drag

The orca lunges from the water or surges from below to seize a target in its jaws, then dives, dragging the victim beneath the surface. The conical teeth grip rather than cut, making escape from the jaw extremely difficult. Once submerged, the orca holds the target under until drowned, then surfaces to feed.

### Coordinated Wave

Multiple orcas swim in tight formation and surface simultaneously near a target vessel or ice floe, generating a combined wave that can swamp or capsize boats up to longship size. This technique requires pod coordination and is typically directed by the lead female.

## Special Abilities

### Echolocation

Orcas produce focused beams of clicking sounds that bounce off objects and return detailed information about size, shape, distance, and internal structure. An orca can "see" through murky water, detect fish inside a net, identify the shape of a hull from below, and locate prey at distances far beyond visual range. This makes concealment in water effectively impossible against an orca.

### Pod Tactics

An orca pod fights as a coordinated tactical unit, with the lead female directing movements and individual pod members executing specialized roles — drivers, blockers, strikers. The pod communicates throughout the engagement using vocalizations, and experienced pods adapt their strategy in real time. This is not instinct; it is learned, cultural behavior passed down across generations.

### Endurance Relay

The pod hunts in relay — individual orcas take turns leading the pursuit while others rest, creating a system of effectively unlimited stamina. Prey that can outrun one orca cannot outrun the pod, because fresh pursuers constantly replace tired ones. This technique can sustain a pursuit for hours across dozens of miles of open ocean.

### Cultural Intelligence

Each orca pod carries a unique body of learned knowledge — hunting techniques, migration routes, seasonal patterns, and knowledge of specific prey populations — that is transmitted from mother to calf across generations. This means that individual pods have distinct "personalities" and capabilities. A pod that has learned to capsize boats is far more dangerous to ships than one that specializes in fish herding, even if their physical capabilities are identical.

## Attributes

- **Strength:** 20-25 (1d6+19) — Massive physical power; ramming impact can hole hulls
- **Endurance:** 15-20 (1d6+14) — Tireless in water; pod relay system extends effective stamina indefinitely
- **Dexterity:** 9-14 (1d6+8) — Adequate; precise enough for coordinated maneuvers
- **Agility:** 11-16 (1d6+10) — Surprisingly fast and maneuverable for their size; burst speed exceeds 30 mph
- **Perception:** 13-18 (1d6+12) — Echolocation provides detailed underwater awareness; excellent vision above and below surface
- **Aura:** 9-14 (1d6+8) — Northern peoples regard them as the wolves of the sea; feared and respected
- **Will:** 13-18 (1d6+12) — Relentless pack hunters; will not abandon a committed pursuit
- **Reasoning:** 9-14 (1d6+8) — Among the most intelligent non-humanoid creatures; cultural learning, tactical adaptation
- **Creativity:** 8-13 (1d6+7) — Develop novel hunting techniques; each pod innovates independently
