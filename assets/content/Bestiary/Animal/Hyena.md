---
shortcode: hyena
name: {full: Hyena, aliases: []}
type: being
subType: creature
description: "A muscular, endurance-built carnivore with a distinctive sloping back, weighing up to a hundred and sixty pounds and marked by a unique mottled coat."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+12
    dex: 1d6+9
    agl: 1d6+10
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+10
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Bone-Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bone-Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
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
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 125, calc: "125"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[hyena|Hyena]]{float=top-left}

After dark a whooping laugh breaks out of the grass, rising to a scream, and is answered from three directions. At the edge of the firelight a pair of eyes shines, low to the ground, and does not move. Then a heavy, sloping shape with a mottled coat and a thick neck steps half into the light, head swinging from side to side, and a rank smell of carrion drifts across the camp.

# Dossier {#dossier}

The Hyena is the clan-living carnivore of the dry country, thirty inches at the shoulder and ninety to a hundred sixty pounds, with a back that slopes from high shoulders to low hips. Clans hold ground in the savanna of the [[place-sthrnsvnhs|Southern Savannahs]], the desert margin of [[place-aukhelathrgq|Au'Khelathu]] and the grass and badlands of the [[place-khzryndsrtrgn|Khazryn]], where the [[being-mghyn|Mega Hyena]] also hunts. They are as much hunters as scavengers, and break up bone that no other large predator can stomach.

## Presentation

A heavy-shouldered animal with a massive head, powerful jaws and teeth that show even when the mouth is closed. The coat is coarse and bristling, longer along the neck and spine, mottled in brown, tan and black, in a pattern different for every animal. The ears are rounded and set on top of the head, the eyes small and dark, the tail short and carried low. It has a strong, pungent musk. It whoops, cackles, growls and squeals, and the sound carries for miles.

## In the Land

Hyena clans hold ground in the savanna of the Southern Savannahs, the dry scrub and desert margin of Au'Khelathu and the grass and badlands of the Khazryn, where the Mega Hyena also hunts. A clan of a dozen or more keeps a territory of ten square miles around a communal den, hunts at night and follows the big cats to their kills. It marks its borders with dung and scent.

## Key Behaviors

Clans are led by a matriarch, with strict rank among all members, males as well. A clan marks and defends ten square miles or more. Its members follow big predators to steal kills and hunt together to bring down prey, planning and signaling the tactics. Their digestion handles bone, fur and hide. They are intelligent and strategic hunters, and not the mindless scavengers they are taken for.

## What the Clans Do

The herding clans guard their cattle at night against hyenas and keep fires lit by the cattle-fold. Camel-drivers cover their loads and tether the animals close to the camp, since hyenas will take a sleeping man's foot or a tethered kid. Hunters follow the sound of a clan to find a carcass. In the cities of the river the hyenas come to the edge of the burial grounds, and the temples keep the necropolis walls high. A clan that has lost a den has been driven out by lions or a spreading drought.

## Signs

- A whooping, giggling call in the dark that rises into a scream.
- White droppings, chalky and full of hair, in a heap at a track junction.
- A carcass cracked open, with the large bones snapped and the marrow gone.
- Tracks of a four-toed paw with blunt, close-set claws, in an echelon around a kill.
- A pair of eyes at the edge of firelight that don't move, and then another pair.

## Combat Strategy

Hyenas prefer to hunt and fight in packs, using numerical advantage and coordinated tactics to overwhelm prey. They harass opponents relentlessly, striking from multiple angles and withdrawing to strike again. A lone hyena separated from its clan will attempt to flee unless defending a kill or territory. In clan groups, a lone opponent faces a coordinated assault from multiple angles simultaneously, with each hyena working to distract or injure while others attempt to move into devastating positions.

## Attack Methods

### Bone-Crushing Bite

The hyena's jaws are among the most powerful in the animal world; a bite can crush bone, shatter shields, dent armor, and inflict catastrophic wound damage. The bite is typically delivered to the legs or arms to immobilize before moving in for a killing strike to the throat or belly.

### Pack Harassment

Multiple hyenas attack simultaneously from different angles, forcing opponents to split attention; one hyena may feign an attack to distract while others circle to flank or target from behind.

## Special Abilities

### Bone-Crushing Bite

The hyena's bite force is famed, capable of breaking bone, shattering weapons, and penetrating most armor; a target bitten by a hyena suffers ongoing damage from the deep puncture wounds and potential infection.

### Pack Tactics

Hyenas fight far more effectively alongside clan members, and they can execute complex coordinated attacks based on the hierarchy and experience of the pack.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 13-18 (1d6+12)

Dexterity
: 10-15 (1d6+9)

Agility
: 11-16 (1d6+10)

Perception
: 12-17 (1d6+11)

Aura
: 8-13 (1d6+7)

Will
: 11-16 (1d6+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 5-8 (1d4+4)
