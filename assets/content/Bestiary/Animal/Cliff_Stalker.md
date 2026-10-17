---
shortcode: clffstlk
name: {full: Cliff Stalker, aliases: []}
type: being
subType: creature
description: "A massive solitary mountain feline built for vertical terrain and patient precision ambush, far larger than any snow leopard."
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
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+11
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Throat Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Throat Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
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
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 130, calc: "130"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[clffstlk|Cliff Stalker]]{float=top-left}

The ledge is fifty feet above the path, pale gray rock mottled with lichen, and you have looked straight at it twice. The third time a patch of the mottling has ears. They turn toward you. A long tail, longer than the body it belongs to, lifts off the stone and begins to swing in slow arcs, and two amber eyes hold on you without blinking while the rest of the animal stays exactly as still as the mountain.

# Dossier {#dossier}

The Cliff Stalker is the great cat of the high ledges of [[place-graznmntns|The Grazian Mountains]]: three feet at the shoulder, seven feet from nose to tail-tip with the tail making up nearly half of that, a hundred and thirty pounds of a hunter built for rock. Its coat is pale gray spotted with dark rosettes, and on the stone it lives on it cannot be seen until it moves. It kills the wild goats and rams of the high country by dropping on them from above, and it has learned that a pack train on a mountain road is slower than a goat and carries food.

It is one of the four creatures the guides of the passes name when a lowlander asks what the mountains hold, with the [[being-crglrkr|Crag Lurker]], the [[being-stoneram|Stone Ram]] and the [[being-roc|Roc]]. Of the four it is the one most likely to take a sleeping man out of a camp.

## Presentation

A compact, deep-chested cat with the frame of a lion built smaller and lower, heavy through the shoulders and hindquarters, with a head small for the body and eyes set forward for judging a drop. The ears are short and rounded and turn independently. The coat is thick and soft, silver-gray with dark rosettes, and the paws are very large, padded with hard callus that grips wet or iced stone. The tail is thicker than a man's wrist and does the work of a balancing pole on a ledge a hand's breadth wide. Older animals carry scars about the face and shoulders from fights over territory.

## In the Land

Cliff Stalkers hold the ledges and gullies of the Grazian north face, above the [[place-dkrqrrgn|Diqraqor]] and along the approaches to the high passes, and the [[place-grazruins|Ruins and Labyrinths of the Grazian Mountains]] under the glaciers, where the cut passages open onto cliff. Each cat holds ten to thirty square miles of broken rock and marks its edges with scent; two never share a range outside the mating season. They follow the goats, and the goats follow the thin grass, so a cat's range runs from the scree below the snowline down to the ravine mouths where the plateau tribes water their flocks. They dislike deep cold and lie up in high caves through the worst of the winter, which is the one season a guide crosses the north face without watching the ledges.

## Key Behaviors

A Cliff Stalker hunts alone, by stalking and then by ambush. It finds its prey from a height, works round above it over hours or a day, and lies flat on a ledge over the path, breathing slow, until the animal is directly below; then it drops. It sleeps most of the day between kills and hunts at the hours its prey is moving. It is a learning animal: a cat that has taken a goat from a flock, or a mule from a string, comes back to the same bend of the same path, and a cat that has killed a man has learned that men are slow.

## What the Guides Do

The guides who lead caravans over the passes keep a man walking above the string on any stretch where a ledge overhangs the path, and they camp in the open, away from the foot of a cliff, with the animals inside the ring of fires. A string that has lost a mule to a Stalker moves the next day's camp a long way off, because the cat will be back. The plateau tribes below set a boy with a sling on a rock above the flock and lose a goat a season anyway. A pelt brings a good price at the pass shrines and in [[place-kethramir|Kethramír]], silver-gray and spotted and the size of a man, and the hunters who take them do it with dogs to find the lie and a crossbow from below.

## Signs

- Goat bones on a ledge no goat could reach, cracked for the marrow.
- A drag-trail up a scree slope, with blood on the stones at intervals.
- Pack animals that stop and stare at one place on a cliff and will not go under it.
- Four-toed prints as wide as a man's hand in snow or mud, with no claw marks, in a straight line.
- A patch of mottled rock on a ledge that was not there an hour ago.

## Combat Strategy

The cat attacks from above. It waits until a man or an animal is below it and alone, or asleep, and drops onto the back, driving the prey face-down and biting for the neck. Against a group it takes the one at the edge, tries to drag it off the path and out of reach, and kills it where the others cannot follow. A failed drop ends the attack: the cat goes up the rock faster than anyone can shoot and watches from a height. A wounded animal it has let go, it follows at a distance for a day. It fights to the finish only when it is cornered or standing over a kill; then it does not stop for wounds, and a hurt Stalker is more dangerous than a whole one.

## Attack Methods

### Throat Bite

With the prey pinned, the jaws close on the throat and crush the windpipe and the great vessels. A full bite kills within minutes.

### Raking Claws

Standing off from the prey, the cat rakes with its forepaws to open the long muscles of a limb and bleed it. Several rakes in the same place cut tendon and the limb fails.

## Special Abilities

### Pouncing Ambush

The cat drops from a ledge or launches from behind, and its weight and the fall knock a man flat before he knows what has him. It tries to land the prey face-down.

### Spine Bite

A prey animal lying on its front takes the bite at the back of the neck or the spine, and its hindquarters stop working.

### Superlative Ambush Predator

The Stalker's camouflage, stillness and patience make its first blow the one that counts: a man taken from above is usually down and bitten before anyone can draw. It will wait on a ledge for a day for the right moment.

### Surefooted on Vertical Terrain

The cat crosses near-vertical rock, wet or iced, as a man crosses a floor. It cannot be shaken off a ledge, and it fights on footing that would kill a man.

### Vision and Hearing

It sees a moving goat across a valley and hears a boot on gravel far below. In its own country it knows a party is coming long before the party knows anything.

### Extreme Pain Tolerance and Killer Instinct

A Stalker that has committed finishes the attack whatever it takes. Wounds do not turn it back; they make it savage.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
