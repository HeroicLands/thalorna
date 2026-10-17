---
shortcode: spctrwlf
name: {full: Specterwolf, aliases: []}
type: being
subType: creature
description: "The spectral remnant of ancient beasts, hunting on both sides of the veil in relentless, coordinated packs that terrorize isolated travelers."
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
    str: 1d4+8
    end: 1d4+10
    dex: 1d4+10
    agl: 1d4+14
    per: 1d4+12
    aur: 1d4+12
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Ethereal Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
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
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
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

![[spctrwlf|Specterwolf]]{float=top-left}

The ring wall stands black against the stars, and between you and it the ground is empty. Then it is not. A wolf is trotting across the gravel toward the camp, and the sound of its paws reaches you late and faint, as if from a long way off, though it is only a bowshot away. You can see the ground through it. Its eyes are pale silver and catch no firelight. It stops where the light ends, and three more come up beside it out of nothing, and the cold that comes off them reaches the fire before they do.

# Dossier {#dossier}

The Specterwolf is a spirit in the shape of a big wolf, one of the predator spirits that gather where the dead have gone unreceived and hunt on both sides of the boundary between the worlds. It is seen most where that boundary is thinnest: on the thin [[lore-bloodfield|blood-fields]] such as [[place-jilaq|Jilaq]], where hunters cross into the world in a half-material form any night of the year, and in old ruins and barrow-ground where many died badly and nobody received them. It runs in packs of four to eight, follows its prey for days, and kills by draining as much as by biting. It does not eat. It hunts because hunting is what it is.

The steppe tribes count it among the [[being-yiqnotud|Yiqnotud]], their word for the hunters of the blood-fields, which names a kind of creature and not any one of them. Elsewhere it has other names. Some packs are bound by necromancers or by shamans who have gone wrong as guards or hounds of their own, and a bound pack does not leave the ground its master set it to keep.

## Presentation

A large wolf, long-legged and lean, built to run all night, made of mist and shadow with a shimmer like heat-haze that bends the ground seen through it. Where the fur shows it is matted and lank, as if soaked and dried many times. The eyes are the clearest part of it, pale blue or silver, faintly lit from within. The fangs, when the mouth opens, look more solid than the rest of it. It leaves no prints, makes little sound and that sound comes from the wrong distance, and the air goes cold where it has passed.

## In the Land

Specterwolves are found where unreceived dead are: the thin blood-fields of the [[place-khzryndsrtrgn|Khazryn Desert Region]], the barrows and battlefields of the north, and ruins where a whole people died and nobody spoke their rites. A pack holds that ground and ranges out from it at night, and a pack that has killed in a place returns to it. On a moderate field they are a sight at the edge of vision and a howl in the dark; on a thin field they cross into the world, take hold and kill. They avoid daylight and are seldom seen far from the field or ruin they belong to, except when they are following something.

## Key Behaviors

A pack hunts at night and in shadow. It picks its prey, follows it at a distance for hours or days, and lets fear and lack of sleep do part of the work, and it closes when the prey is alone, exhausted or in the dark. The wolves coordinate without sound. They pass through worked stone, timber and metal as if these were air, so a wall or a door is no defense, but living rock and undug earth stop them. They see in full darkness and seem to sense the living by their warmth and their fear rather than by smell. They learn: a pack that has been driven off by fire waits for the fire to burn down.

## What People Do

Every people that lives beside a blood-field keeps the same habit—nobody crosses after dark, and the road bends round it—and that habit is most of the defense against specterwolves. A party that must camp near one keeps a large fire and keeps it fed until dawn, and camps against a natural rock face, not a wall. Weapons blessed by a priest and blessed light hurt them, and a holy symbol held high makes a pack hang back. Killing a pack on its own ground does not end it: the wolves gather again within days. What ends them is ending the field, by the settlement rite of the people whose dead lie there, or destroying whatever object binds a bound pack to its master.

## Signs

- Wolves seen at the edge of a camp's light that cast no shadow and leave no tracks.
- A howl that seems to come from very far off and from close by at once.
- A sudden cold on a still night, and the horses and camels all facing the same way.
- A traveler found at dawn at the edge of a blood-field, gray-faced, with cold marks on him and no blood.
- A sleeper who wakes weak and cold after dreaming of running.

## Combat Strategy

The pack surrounds and isolates. One wolf comes at the front to hold the eyes while the others come through walls, stones and wagons from the sides and behind, and they go for whoever carries the light, then whoever is alone or hurt. They bite, drain and fall back into the dark, and come again. A specterwolf cut off from its pack is far less sure and often flees. Against fire, blessed weapons or holy power they grow cautious, and a well-fed fire keeps a pack at bay until it dies down; then they come in.

## Attack Methods

### Ethereal Bite

The jaws pass partly through armor and flesh, and the bite is cold and wrong: a draining that reaches the strength under the wound. A man bitten several times cannot fight or run, and the wounds heal slowly and leave him weaker for weeks.

## Special Abilities

### Disarming Howl

The wolf gives a keening howl that the body feels as much as the ear hears. Those close to it are dizzy and clumsy for a moment, weapons slip from weakened hands, and footing goes.

### Phasing

The wolf passes through worked stone, timber, metal and anything else made by hands. Living rock and unworked earth stop it.

### Pack Coordination

The pack moves and strikes as one, without sound, and times its attacks from several sides together.

### Spirit Senses

It sees in complete darkness and finds the living by their warmth and their fear, across ground no natural tracker could follow.

### Life Drain

Its bite saps strength and vitality as well as flesh, and a man who has been bitten feels diminished long after the wound has closed.

### Weaknesses

Bright and blessed light drives it back and makes it slow and easier to strike, blessed weapons wound it, and a pack destroyed on its ground re-forms in days unless the field is settled or its binding broken.

## Attributes

Strength
: 9-12 (1d4+8)

Endurance
: 11-14 (1d4+10)

Dexterity
: 11-14 (1d4+10)

Agility
: 15-18 (1d4+14)

Perception
: 13-16 (1d4+12)

Aura
: 13-16 (1d4+12)

Will
: 11-14 (1d4+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 9-12 (1d4+8)
