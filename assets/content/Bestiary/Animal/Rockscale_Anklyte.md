---
shortcode: rcksclan
name: {full: Rockscale Anklyte, aliases: []}
type: being
subType: creature
description: "A quadrupedal herbivore over 800 pounds and twelve feet long, grazing sparse badland vegetation yet defending its ground with overwhelming force."
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
    str: 1d6+13
    end: 1d6+12
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+9
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Tail Club
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Club
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Charging Ram
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Charging Ram
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Rear Leg Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Rear Leg Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            roles: [manipulator]
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
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 7, fire: 9}
      weight: {base: 800, calc: "800"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: topography, key: steep, mode: add, textValue: "0"}
          - {scope: surface_cover, key: alpine, mode: add, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[rcksclan|Rockscale Anklyte]]{float=top-left}

You feel it through your boots before you hear it, a low hum in the rock like a struck bell gone quiet. The gray mound you took for an outcrop at the edge of the scrub has moved. It rises on four thick legs, shedding gravel and dust from a back of overlapping stone-gray plates, and turns a small blunt head toward you with two dull red eyes in it. It is twelve feet long, most of it body and the rest a tail that ends in a knob of bone the size of a water-jar. The tail swings once, slowly, and a smell of sulfur comes over the rock.

# Dossier {#dossier}

The Rockscale Anklyte is the armored grazer of the [[place-khzryndsrtrgn|Khazryn Desert Region]]'s badlands: twelve feet long, eight hundred pounds, low and barrel-bodied on four legs, plated in gray and brown scales that look and feel like rock, with a tail that ends in a heavy bone club. It eats the saltbush, thorn and tough grasses of the stone uplands, lives in small herds of three to eight, and holds its grazing ground against everything that walks onto it, by warning first and then by charging. It hunts nothing. It is dangerous to people because the ground it grazes is the same thin ground the plateau tribes need for their goats, and a herd that has settled near a cistern has settled there for years.

## Presentation

A squat, broad animal, wider than it is high, on four short, columnar legs. The whole back and flanks are covered in thick, rough plates of gray and brown with lighter streaks, ridged along the spine and the flanks so that a resting anklyte is an outcrop. The belly is paler and softer. The head is small for the body, low and narrow-snouted for cropping between stones, with small eyes that shine a dull red in shadow. The tail is thick at the root and tapers to a club of fused bone and plate. The animal smells of sulfur, and its breath smells worse. A herd hums: a low sound, more felt through the ground than heard, that carries a long way over rock.

## In the Land

Anklytes graze the stone uplands and badlands of the Khazryn: the mesas and ravine floors of the [[place-dkrqrrgn|Diqraqor]], the black-rock margins above the oasis strip of [[place-swoasisbelt|Tellumel]], and the broken ridges of the eastern stone desert. A herd holds a range of a few square miles round a source of water—a cistern, a seep, a rock-pool that fills in the spring rains—and keeps it for as long as the grazing lasts, which on the plateau may be a generation. They are not found on sand, which will not carry their weight, and avoid the steep ravine walls. They graze at dawn and dusk and lie up through the heat in a tight ring, plates outward, looking like a heap of stones.

## Key Behaviors

A herd keeps to its range and moves slowly round it from one patch of grazing to the next. It warns before it fights: the hum deepens until it can be felt in the chest, the animals turn broadside to show their bulk, and the lead animal swings its tail and breathes out a cloud of foul sulfurous breath. An intruder who backs away is let go. One who stays is charged. A herd defends its young by putting the adults round them in a ring, tails out, and a ring of anklytes cannot be broken into by anything that walks. Two herds meeting at a boundary hum at each other for a day and settle it with a short, crashing fight of tail against plate.

## What the Tribes Do

The plateau tribes give an anklyte range the room it asks for and water their goats elsewhere when they can, and they cannot always. A herd that has taken a cistern a tribe depends on is moved by fire—brush fires lit upwind at dusk for several nights—which works slowly and costs the tribe its grazing too. Nobody fights a herd. A single old animal driven out of its herd is hunted, by a whole tribe with spears from above in a ravine, and the plates are worth the trouble: they are cut and drilled into scale-coats and cistern-covers, and an anklyte's tail-club hung over a tent door is a mark of the household that took it. The Tellumi buy the plates at the oasis towns for the facing of walls.

## Signs

- A low hum felt through the soles of the feet near a patch of grazing.
- Ground cropped to the stones across a broad stretch, with heaps of dung like dark stones.
- A ring of what look like boulders on open rock at midday, which is not there in the evening.
- A sulfurous smell on the wind in country with no hot springs.
- Rock scarred and broken at knee-height where a tail-club has hit it.

## Combat Strategy

An anklyte warns, then charges, then clubs. It runs at a threat with its head down, faster than its bulk suggests, and knocks it over with its body; then it turns and brings the tail round on whatever is on the ground or within reach. A man who gets behind it is kicked. It uses a slope to put weight into the charge and stands in a narrow place to keep a party in front of it. Once committed it fights until the threat is gone or it is dead. The plates turn a blade; the belly, the neck under the jaw and the joints of the legs do not, and a party that wants to kill one does it from a ledge above, where the tail cannot reach.

## Attack Methods

### Tail Club

The anklyte swings its tail in a wide, flat arc and the club of bone at its end strikes with enough force to break a leg, crush a shield and the arm behind it, or throw a man several yards.

### Charging Ram

Head down, the animal charges and hits with its whole barrel-shaped body, knocking a man flat or off a ledge, and then wheels to use the tail.

### Rear Leg Kick

Something behind it or at its flank is kicked with a hind leg, hard and quick, from a stance that does not need to turn.

## Special Abilities

### Stone Armor

The plates are as good as scale armor and turn cuts and thrusts. A damaged plate grows back over a season.

### Crushing Stomp

A man knocked down within its reach is trodden on, and eight hundred pounds of animal breaks ribs and legs under its feet.

### Ground Tremor

A charging or fighting anklyte shakes the rock under it enough to make a man stagger and a stack of loads fall.

### Herd Hum

The herd's low hum carries across miles of rock and calls the herd together, and close to, at its deepest, it leaves a man queasy and unsteady.

### Sulfurous Breath

Threatened, the anklyte breathes out a cloud of foul, sulfurous breath. It does no lasting harm, and a man in it gags and loses his footing.

## Attributes

Strength
: 14-19 (1d6+13)

Endurance
: 13-18 (1d6+12)

Dexterity
: 8-13 (1d6+7)

Agility
: 8-11 (1d4+7)

Perception
: 10-15 (1d6+9)

Aura
: 7-10 (1d4+6)

Will
: 11-16 (1d6+10)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
