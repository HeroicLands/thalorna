---
shortcode: giraffe
name: {full: Giraffe, aliases: []}
type: being
subType: creature
description: "The tallest animal alive, an improbable long-necked herbivore browsing the high canopy of the savannahs and open woodlands."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+14
    end: 1d6+11
    dex: 1d4+7
    agl: 1d6+8
    per: 1d6+12
    aur: 1d6+8
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Neck Swing
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Neck Swing
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor]
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
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[giraffe|Giraffe]]{float=top-left}

Above the flat tops of the thorn trees something is moving that cannot be a branch. A neck comes up out of the acacias, patched in brown and cream, and a small head turns on top of it with long-lashed dark eyes. A tongue nearly a foot and a half long curls round a thorny twig and strips it of leaves, and the animal chews, slowly, looking at you from three times your height.

# Dossier {#dossier}

The Giraffe is the tallest animal alive, fifteen to nineteen feet high and eighteen hundred to twenty-eight hundred pounds, browsing the acacia and baobab country of the [[place-sthrnsvnhs|Southern Savannahs]] and the open woodland at its edge. From that height it sees farther than any other animal, and the others read its alertness. The savanna peoples see it as a creature that walks between earth and sky. It will move off at a stately walk, but a cornered animal or a mother with a calf kills with a single kick.

## Presentation

An animal that is hard to believe: a horse-sized body on legs so long the back stands six feet off the ground, and a neck that adds another six to eight feet. The small head has large dark eyes with long lashes, short skin-covered horns and a long, mobile muzzle with a grasping upper lip. The tongue is up to eighteen inches long, dark blue-gray, and strips leaves from thorns without harm. The coat is a pattern of large brown patches divided by cream lines, different on every animal, and it breaks up the outline among trees. The forelegs are slightly longer than the hind, so the back slopes. The tail is tufted.

## In the Land

Giraffes browse the acacia and baobab country of the [[place-sthrnsvnhs|Southern Savannahs]], the open woodland on the edge of the savanna and the wooded plains of the south of [[place-okharisrgn|Okháris]]. A tower of up to a dozen animals moves slowly from tree to tree through the day, and drinks at the water-holes at dawn or dusk, splaying its forelegs to reach the water. They avoid dense forest and the open desert alike.

## Key Behaviors

Giraffes live loosely, in groups that change daily from a lone bull to twenty or more at a good feeding place. Bulls settle rank by necking: they stand side by side and swing the heavy necks at each other like flails, with blows audible from a hundred yards, for half an hour or more. Injuries are rare but occur. A giraffe browses sixteen to twenty hours a day, chiefly on acacia, and gets most of its water from the leaves. When it does drink it must splay its forelegs and lower its neck, slow to rise again, and lions time their ambushes for it.

## What the Herding Clans Do

The herding clans of the savanna drive their cattle past a giraffe tower without stopping and do not hunt giraffes for meat. A young hunter who kills one has done something his elders will argue about. The tail-hair is made into bracelets and fly-whisks, the sinew into bowstrings and the hide into shields and sandal-soles. Traders from the north carry giraffe-hide to the cities of the Northern Fertile Region. A giraffe's kick can break a lion's skull, and the cattle-herders keep their dogs away from one that has calved.

## Signs

- The tops of acacia trees stripped flat, level with each other, at the height of a rooftop.
- Large, split-hoofed prints, in a line, on a dried mud bank at a water-hole.
- A line of long necks above the grass, swaying as the animals walk.
- Dung in round pellets scattered under a thorn tree, not a heap.
- A group of giraffes standing stock-still, all facing the same way, and a lion in the grass.

## Combat Strategy

A giraffe's primary defense is its height and its vision. From eighteen feet up, a giraffe can detect approaching predators at distances that give it ample time to walk away — and a giraffe's walking pace exceeds the comfortable trotting speed of most predators, meaning that a giraffe that has detected a threat at distance is effectively uncatchable without a committed high-speed pursuit. At a gallop, a giraffe reaches speeds that test a good horse, and the stride length is enormous.

When cornered or defending a calf, however, the giraffe fights, and the fight is devastating. The giraffe kicks — a single, massive, downward-driving stamp with a hoof the size of a dinner plate, powered by a leg over six feet long and the full weight of the hindquarters. A giraffe's kick generates enough force to crush a lion's skull, shatter a hyena's spine, and cave in the ribcage of a horse. The kick is aimed downward and outward, targeting the head and body of anything within range, and the range — given the length of the leg — is considerably greater than most attackers expect. Giraffes kick in all directions: forward with the forelegs, backward and sideways with the hind legs, and the transitions between these kicks are fast enough that an attacker circling the giraffe finds no safe angle of approach.

Lions are the giraffe's only regular predator, and even lions approach with caution. A healthy adult giraffe is one of the most dangerous prey animals a pride can attempt, and lion hunts against giraffes frequently result in the death or serious injury of the attacking lions. Most successful giraffe kills involve targeting calves, sick individuals, or adults caught at waterholes in the vulnerable drinking posture.

## Attack Methods

### Power Kick

The giraffe's devastating primary weapon. The leg drives downward and outward, the broad hoof striking with the force of the animal's considerable weight behind a limb over six feet long. The mechanics are comparable to a battering ram — the hoof concentrates over a thousand pounds of impact force into an area the size of a man's hand. A direct hit to the head or torso of any human-sized target is almost certainly fatal. The kick is surprisingly fast for such a large movement, and the reach exceeds what attackers anticipate.

### Neck Swing

Primarily used in male-on-male combat but occasionally deployed against threats. The giraffe swings its neck in a lateral or overhead arc, driving the heavy skull and ossicones into the target. The impact force is substantial — the skull and upper neck together weigh over two hundred pounds, and the swing generates momentum across a six-foot arc. Against a human target, a neck swing to the torso could break ribs; to the head, it could be fatal.

## Special Abilities

### Savanna Watchtower

The giraffe's eighteen-foot eye height gives it the most extensive visual range of any land animal. From its vantage point, a giraffe can detect movement across miles of open savanna, spotting predators, other herds, and geographical features long before any ground-level observer can. Every other animal on the savanna knows this — gazelles, zebras, and wildebeest herds that associate with giraffes benefit from this elevated surveillance, and the sudden alertness of a giraffe (head raised, ears forward, staring in one direction) is an early warning system for every creature in visual range. For adventurers, reading giraffe behavior is the fastest way to assess the safety of the surrounding terrain.

### Acacia Crown Browser

The giraffe's combination of height, prehensile tongue, and thorn-resistant mouth gives it exclusive access to a food source — the upper canopy of acacia and other savanna trees — that no other herbivore can reach. This competitive advantage means the giraffe does not compete for food with any other animal, allowing it to thrive in habitats where the ground-level browse has been exhausted by other herbivores. It also means the giraffe shapes its habitat — heavy giraffe browsing creates the characteristic "browse line" visible on savanna trees, where foliage extends only above the height that giraffes can reach.

### Deceptive Speed

Despite its ungainly appearance, a giraffe at full gallop is fast — covering ground with strides of fifteen to twenty feet at speeds that challenge mounted pursuit. The rocking, swaying gait that looks precarious at a walk transforms into a fluid, powerful gallop that eats distance with deceptive ease. A party that assumes they can chase down a giraffe on horseback is frequently surprised to find the animal pulling steadily away.

### Thick Hide

The giraffe's skin is thick and tough — up to an inch in places — and has been used by savanna peoples for shield-making for millennia. This natural armor provides meaningful protection against claw strikes and glancing blows, and combined with the animal's size, it makes the giraffe resistant to the predation methods that work against smaller herbivores. A lion that leaps onto a giraffe's back must contend with hide that resists penetration and a body that can simply walk away with the lion still clinging.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 8-11 (1d4+7)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 9-14 (1d6+8)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
