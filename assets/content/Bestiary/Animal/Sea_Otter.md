---
shortcode: seaotter
name: {full: Sea Otter}
type: being
subType: creature
description: "A dense-furred marine weasel of the cold western kelp coasts, floating on its back to crack shellfish open on a stone, and prized above all other animals for its pelt."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+3
    end: 1d6+10
    dex: 1d6+12
    agl: 1d6+12
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+7
    rea: 1d4+7
    cre: 1d4+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Body, shortcode: torsozone, probWeight: 5}
          - {name: Tail, shortcode: tailzone, probWeight: 2}
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 70, calc: "70"}
      reachBase: 0
      bodyScaleBase: 0.55
      personalFatigue: enc + 5
    currentMoveMedium: aquatic
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 70
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

In the kelp beyond the surf a brown shape lies on its back, as at ease as a man in a hammock. It holds a flat stone on its chest and brings a shell down on it, tap, tap, tap, then rolls and the shell is open and it eats. The head is pale and round and whiskered, and it turns to watch you with the whole face. A smaller shape rides on its belly, wrapped in a strand of kelp.

# Dossier {#dossier}

The Sea Otter is a marine otter of three to four feet and sixty to eighty pounds that spends nearly its whole life in the water, floating among the kelp. It lives along the cold western coasts: the kelp beds of the [[place-shuqhalaqrgn|Bead Coast]] of the [[affiliation-shuqash|Shell-Bead People]] and the surf beaches and fjord mouths of the [[affiliation-kelwanuk|Cedar People]], in [[place-kelwanukrgn|Kelwanuk Region]]. Its pelt is the densest fur of any animal on the coast.

## Presentation

A thick-bodied, long-bodied otter with a broad head, small ears, a flat whiskered face and a flat, tapering tail. The hind feet are broad flippers; the forefeet are small, handlike and clawless in appearance, with a loose pouch of skin under each foreleg that holds a favorite stone. The fur is dark brown, nearly black, grizzled with silver at the tips, and the head grows paler with age, often to a creamy white. The pelt is so dense that water never reaches the skin.

## In the Land

Sea otters live in the kelp beds and rocky shallows within a mile or two of the shore. They float in rafts among the kelp, anchored in the weed, and dive to the bottom for shellfish, urchins, crabs and fish. They come ashore only rarely, to rest on a rock or beach in a storm. Cold water and storms do not drive them away from the kelp, which breaks the swell and holds them in place as they sleep.

## Key Behaviors

Sea otters float on their backs to eat and to sleep, and a sleeping animal wraps itself in a strand of kelp so that it does not drift. They bring a shellfish and a stone up from the bottom, lay the stone on the chest and break the shell against it. They groom constantly, because the fur is all the insulation they have, and a soiled coat means death by cold. Mothers carry a single pup on the chest for months and leave it floating on the kelp when they dive. They are shy of boats and dive quickly at an approach. An otter that is hauled in or cornered bites ferociously.

## What the Coastal Peoples Do

The [[affiliation-shuqash|Shell-Bead People]] and the [[affiliation-kelwanuk|Cedar People]] hunt sea otters from canoes at the edge of the kelp, for the pelts, which are the finest fur on the coast. The skins are traded inland over the passes and north and south along the coast with beads, shell and dried salmon, and they trim the robes of the wealthy houses. The meat is eaten. The kelp beds hold fish, sea otters and seals in numbers that feed the Shell-Bead towns with little work, and the otters are hunted as one of several resources of the sea.

## Signs

- A raft of brown shapes floating on their backs in a kelp bed, paws held up out of the water.
- A tapping sound across still water, the sound of a shell on a stone.
- A pile of broken shells and urchin spines on a flat rock at the water's edge.
- A strand of kelp wound several times around a sleeping animal, the ends tucked under.
- A head and a pair of eyes in the water, watching a canoe, and gone as it approaches.

## Combat Strategy

The sea otter does not fight if it can dive. It sinks and swims away underwater, surfacing far off in the kelp where a boat cannot follow quickly. A mother defends her pup with a determination out of all proportion to her size. Pressed in the water, an otter twists to bite at hands, wrists and paddle, and it can hold its breath long enough to wait out a pursuer. On the rare occasions when it fights, it bites hard and fast and then slips away.

## Attack Methods

### Bite

The sea otter turns in the water or on a rock and bites at the nearest exposed hand or arm. The teeth are sharp and strong enough to break the shells it eats, and a hurt animal bites without letting go for a time.

### Dive and Slip

Faced with a threat in the water, the otter sinks, swims below the surface, and comes up in the kelp or among the rocks beyond reach. It uses the weed to hide and to tangle a pursuer's boat.

### Mother's Defense

A mother with a pup on her chest stays and fights when she could dive. She bites and clutches, holding the pup, and will not leave it until it is safe.

## Special Abilities

### Dense Fur

The sea otter's fur is the densest of any animal, and traps a layer of air against the skin. It protects the animal from the coldest sea and gives its pelt its enormous value.

### Stone Tool

The sea otter uses a stone to break open shells, carrying a favorite stone in a fold of skin and bringing it back up from each dive. It is one of the few wild animals to use a tool.

### Long Dives

The otter dives for a minute or two at a time to depths of many fathoms, and rests at the surface on its back. In the kelp it is difficult to find and harder to follow.

## Attributes

Strength
: 4-9 (1d6+3) — Small and slight, though strong for its size in the jaw and forepaws

Endurance
: 11-16 (1d6+10) — Spends its life in cold, rough water and breaks shells and dives all day

Dexterity
: 13-18 (1d6+12) — Handles shells, stones and its young with quick, precise paws

Agility
: 13-18 (1d6+12) — Twists and dives with the grace of a seal

Perception
: 12-17 (1d6+11) — Excellent sight and smell above the water; whiskers read the bottom in the dark

Aura
: 8-13 (1d6+7) — A small, striking animal that people love to watch

Will
: 8-13 (1d6+7) — Determined in defense of a pup, but ready to dive rather than fight

Reasoning
: 8-11 (1d4+7) — Learns tools, places and the habits of boats

Creativity
: 8-11 (1d4+7) — Inventive; one of the few animals to use a tool
