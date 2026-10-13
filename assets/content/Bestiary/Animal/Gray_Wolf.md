---
shortcode: graywolf
name: {full: Gray Wolf, aliases: []}
type: being
subType: creature
description: "A highly social pack predator of temperate and cold wilds, using numbers and tactical cunning to bring down prey far larger than itself."
tags: [animal, creature]
data: {packFolder: animals, icon: wolfhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+7
    end: 1d6+7
    agl: 1d6+11
    per: 1d6+14
    snt: 1d4+3
    aur: 1d4+2
    wil: 1d6+10
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Bite
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
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
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
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
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
      weight: {base: 80, calc: "80"}
      reachBase: 0
      bodyScaleBase: 0.94
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 130
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[graywolf|Gray Wolf]]{float=top-left}

Far up the slope, on the skyline above the tree-line, a gray shape stands against the snow. It is joined by another, and then a third. None of them moves. A long note rises from the first and is taken up by the others, falling and rising, and hangs over the valley. When it stops the silence is complete, and the shapes are gone.

# Dossier {#dossier}

The Gray Wolf is the pack-hunting wolf of the cold and temperate wilds, thirty inches at the shoulder and eighty to a hundred twenty pounds. Packs run in the forests of [[place-vrystwald|Vrystwald]], the [[place-nrdlndsrgn|Nordlands]], the forest-steppe of [[place-velanthrgn|Velanthia]] and the [[place-graznmntns|Grazian Mountains]], and each holds a range it defends. By working together they pull down animals far bigger than themselves. A pack whose range reaches the farms hunts the stock.

## Presentation

A lean, muscular canine, larger than most dogs, built for endurance and speed. The coat is thick and layered, in gray, brown, black and white, darker along the spine and paler on belly and chest. The head is broad but tapering, with a long snout and forward-facing eyes. The ears are triangular, set high and turn independently. The canines are prominent. The tail is long and bushy and serves for balance and signals.

## In the Land

Gray wolves run in the forests and open country of [[place-vrystwald|Vrystwald]], the [[place-nrdlndsrgn|Nordlands]], the forest-steppe of [[place-velanthrgn|Velanthia]] and the mountains of the [[place-graznmntns|Grazian range]], and south along the Khazryn steppe. A pack of six to twelve keeps a range of a hundred square miles, follows the deer and the stock, and denns each spring in a hollow under a bank. In winter, when the snow lies deep, the pack drives its prey into the open.

## Key Behaviors

Packs of four to ten live by a rank order headed by an alpha pair. They hunt together, using planned tactics, mostly deer and elk and smaller animals, and they scavenge. A pack patrols its range and marks the borders with scent and howling. They are most active at dawn and dusk and hunt at any hour when prey is to be found. They speak by howls, barks, growls and posture.

## What the Villages Do

The wolf is the wesk of Vrystwald villages such as Hárholt, Wulfrýth and Hildburg, whose rites forbid the killing of a wolf in the village's own woods, and the Kindred of the north include wolf-spirits who ward a particular ridge. Elsewhere the villages post a watch on the sheepfolds in winter, keep big dogs, and pay a bounty for a pair of ears. The steppe tribes hunt wolves from horseback in winter with bows. The pelts are made into cloaks and hoods. A shepherd in the Grazian passes follows the sound of the pack to learn where the flock is safe.

## Signs

- Tracks in the snow in a single line, one set placed exactly in the last.
- A long howl at dusk on a ridge, and the answer from the next ridge.
- A deer killed and half-eaten in a thicket, with the carcass dragged and the bones scattered.
- Gray scat full of hair and bone, on the crown of a trail.
- A flock that bunches in the fold and will not graze after dark.

## Combat Strategy

A wolf pack's hunting strategy is designed for efficiency and safety—multiple wolves attack from different angles simultaneously, flanking prey and focusing on vulnerable points. If prey escapes, the pack pursues relentlessly, using endurance to tire prey faster than it can run. A single wolf is cautious and will retreat if outnumbered or outmatched; a pack shows far more aggression and commitment. A pack defending its territory or young becomes almost suicidal in its determination.

## Attack Methods

### Powerful Bite

The wolf's bite is designed to puncture and tear—the sharp teeth are meant to lacerate blood vessels and cause shock through blood loss. A wolf will bite and hold, attempting to drag prey down or create space for packmates.

### Pack Coordination

Multiple wolves attack simultaneously from different angles, using confusion and overwhelming numbers to isolate individual targets. The pack works with apparent telepathy, each member anticipating the actions of others.

## Special Abilities

### Pack Tactics

When hunting with other wolves, the pack gains supernatural coordination—they never hesitate or stumble over each other, they read each other's movements perfectly, and they execute tactics that isolate and overwhelm targets. A solitary wolf loses this advantage and becomes noticeably less effective.

### Endurance

The wolf can pursue prey across vast distances without tiring, running at a steady pace for days if necessary. This endurance allows wolves to wear down prey that cannot sustain such effort.

## Additional Information

A wolf pack's territory can be traversed safely if one understands their behavior and respects their boundaries. Packs generally avoid humans unless desperate or defending territory. A wolf pack that has learned humanoid prey are available will become increasingly bold, potentially attacking settlements. Some cultures venerate wolves as symbols of wildness, loyalty, or hunting prowess.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 8-13 (1d6+7)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 4-7 (1d4+3)

- **Aura:** 3-6 (1d4+2)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
