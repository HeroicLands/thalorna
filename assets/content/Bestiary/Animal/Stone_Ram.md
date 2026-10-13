---
shortcode: stoneram
name: {full: Stone Ram, aliases: []}
type: being
subType: creature
description: "A powerfully built mountain herbivore and exceptional climber that holds cliffside territories beyond the reach of ground-bound predators."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+12
    end: 1d6+11
    dex: 1d6+9
    agl: 1d6+11
    per: 1d6+9
    aur: 1d4+7
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Horn Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 350, calc: "350"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[stoneram|Stone Ram]]{float=top-left}

The ridge narrows to a knife of gray rock with a drop on either side, and there is a ram standing on it where the path goes over. It is as big as a pony, shaggy gray and white, and its horns curl back from its skull and round again in a full spiral as thick as your thigh at the root, slate-dark and ridged. It has seen you. It does not move off the path. It lowers its head a little, so that the horns come forward, and strikes the rock once with a forefoot, and the sound carries down the ridge like a hammer on an anvil.

# Dossier {#dossier}

The Stone Ram is the wild sheep of the high ridges of the [[place-graznmntns|Grazian]] north face: four to five feet at the shoulder, three hundred and fifty pounds, with a spiral of horn on each side of the head that a grown man cannot lift. It lives in herds of five to thirty on the ridges and plateaus above the snowline, grazes the thin grass and lichen there, and climbs rock that stops a goat. It is a grazer and does not hunt anything. It is on the guides' list of the four dangers of the north face, with the [[being-clffstlk|Cliff Stalker]], the [[being-crglrkr|Crag Lurker]] and the [[being-roc|Roc]], because a ram defends its ridge against anything that comes along it carrying a weapon, and the ridges are where the paths go.

## Presentation

A stocky, deep-bodied sheep on short, heavily muscled legs, in a coat of thick shaggy wool from gray to gray-white with darker saddle and legs, shed in great matted sheets in early summer. The rams carry the horns: dark, deeply grooved with the rings of each year, curling back and round in a spiral that may run three feet along its curve and weigh twenty pounds a side, scarred and chipped at the front where they have met other horns. The ewes carry short, backswept horns. The head is broad and blocky, the eyes pale yellow with a bar for a pupil, and the hooves are small, split and hard-rimmed round a soft center that grips smooth rock. A ram on a ledge stands as easily as a man on a floor.

## In the Land

Stone rams hold the ridges, saddles and high plateaus of the Grazian north face, from the snowline down to the head of the scree, above the [[place-dkrqrrgn|Dikraqor]] and the oasis strip of [[place-swoasisbelt|Tellumel]], and along the approaches to the high passes and the [[place-grazruins|ruins and labyrinths]] under the glaciers. A herd keeps to its own stretch of ridge for generations and moves up and down it with the seasons, high in summer and down to the sheltered south-facing ledges in winter. The herds are thickest above the Western Descent, where the range breaks into lower peaks and the grass comes higher. They avoid the deep snow and the ice of the summits, and they do not come down into the plateau.

## Key Behaviors

A herd grazes in the morning and evening and lies up at midday on a ledge with a long view, with one animal always on its feet watching. The herd has a strict order, settled each autumn among the rams by fights in which two rams back off, rear and run at each other, and the crack of the horns meeting carries across a valley. In the rut the rams are dangerous to everything: a ram that has fought all day attacks a mule, a man or a rock that looks like a rival. Outside the rut a herd threatened on open ground goes up the nearest cliff, where nothing can follow. A herd that cannot climb away, or that has young, puts the rams between the threat and the ewes, and the rams charge. A ram remembers a path where men have shot at it and keeps off that path for years.

## What the Mountain People Do

The guides who take parties onto the north face give a ram on a ridge the path, and wait, sometimes for an hour, rather than go at it; a ram that is not pressed walks off when it has made its point. Nobody crosses a herd's ridge in the autumn rut. The climbers the Tellumi houses hire to prove an ancestral peak meet the rams on every route above the Descent and carry slings for them, because a stone thrown at a ram's flank turns it where a spear brings it on. The horns are the prize: a pair from an old ram, ring-counted and polished, hangs in the hall of a Tellumi house that claims the peak it was taken on, and a horn cup made from one is a gift between princes. Ram wool, combed from the ledges where they shed, is the softest fiber the mountain produces and the plateau women spin it for nobody but themselves.

## Signs

- A crack like a felled tree echoing across a valley in autumn, repeated at intervals.
- Tufts of gray wool caught on the rock at the head of a scree, and small split tracks above them where no goat would go.
- Droppings in neat heaps on a high ledge with a long view, where the herd lies up.
- A single animal standing on a skyline crest, unmoving, facing down the path.
- Scored and broken rock on a ridge where two rams have fought.

## Combat Strategy

A ram on its own ground uses the ground. It meets an intruder on the narrowest part of a ridge or path, where there is no way round, and charges downhill with the full weight of its body behind the horns, aiming to put the man over the edge. A ram that misses wheels on a ledge no man could turn on and comes again. Cornered or caught with the herd, it rears and kicks with the forefeet before it charges. A ram that has been hurt goes up the rock and watches. The herd fights together only for its lambs: the rams come from two sides at once, and a party between two charging rams on a ridge has a long way to fall.

## Attack Methods

### Horn Charge

The ram drops its head and runs, and the horns strike with the whole of its weight and speed behind them. A man in the open has his ribs broken or is thrown several yards; a man on a ridge is thrown off it. Downhill, over a few strides, the blow breaks a shield.

### Kick

Rearing, the ram strikes down with the forefeet, or lashes back with the hind feet at something behind it. The hooves are small and very hard and open a scalp or break a forearm.

## Special Abilities

### Mountain Agility

The ram crosses near-vertical rock, ledges a hand wide and loose scree at a run, and turns where a man could not stand. On its own ridges it is surer of every footing than any man.

### Downhill Charge

A charge with a slope behind it hits harder for every stride. A man below a ram on a steep path cannot sidestep it and cannot stand against it.

### Herd Defense

Rams defending a herd charge from different sides and take turns, so that a man who turns to face one is struck by the next.

### Head Butt

Close in, with no room to run, the ram drives its skull and horn-bases into a man in short, repeated blows that stagger and daze him.

## Attributes

- **Strength:** 13-18 (1d6+12)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 8-11 (1d4+7)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
