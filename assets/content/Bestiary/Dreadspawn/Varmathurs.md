---
shortcode: cairngiant
name: {full: Varmathurs, en: [The Cairn-Giant]}
type: being
subType: creature
description: "A single made giant of the Nordlands, five times a man's height and slow, that carries cut stone across a valley to a wall it was made to finish."
tags: [dreadspawn, image-needed]
data:
  packFolder: dreadspawn
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+52
    end: 1d4+16
    dex: 1d4+3
    agl: 1d4+3
    per: 1d4+5
    aur: 1d4+5
    wil: 1d4+8
    cre: 1d4+3
    rea: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 55}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 93}}
    - name: Crushing Blow
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 9, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 22, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Seismic Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Seismic Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 18, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 20, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Rock Throw
      type: skill
      system:
        shortcode: hurl
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: hurl
          name: Rock Throw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 24, aspect: blunt}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 160
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Arms, shortcode: armszone, probWeight: 12}
          - {name: Torso, shortcode: torsozone, probWeight: 12}
          - {name: Legs, shortcode: legszone, probWeight: 18}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 49000, calc: "49000"}
      reachBase: 0
      bodyScaleBase: 2.85
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

From the ridge the whole valley is in view: the river, the birch woods, a farm or two, and across the valley's narrow throat a wall of dry-laid stone, twice a man's height along most of its length and low at its middle, where it is unfinished. Something is walking toward the wall from the quarry face on the far slope. At this distance it looks like a man carrying a sack. Then the eye finds the birches beside its path, and they come up to its waist. It is a giant, gray as the fell, stooped under a block of cut stone the size of an ox cart, and it walks slowly, one long stride at a time, and the ground under the ridge shudders faintly with each step. It sets the block on the wall, presses it down, and turns, slowly, back toward the quarry.

# Dossier {#dossier}

**Varmathurs** (the Cairn-Giant) is a dreadspawn, one of a kind, named in the [[skill-nordmalng|Nordmal Language]] from _varma_, a wall, and _thurs-_, a giant: _the wall-giant_. It is a stooped, gray figure five times as tall as a man, and it does one thing: it cuts stone from a quarry face on one side of a valley in the [[place-nrdlndsrgn|Nordlands Region]], carries it across the valley, and lays it in a wall across the valley's throat. It was made to finish the wall, and it has not finished. It ignores travelers who keep away from its stones, and it fights whoever touches them. Like every dreadspawn it was made, it is alive, and it does not breed. Only one is known.

## Presentation

The varmathurs is shaped like a man, but no man was the pattern for it: its arms are too long, reaching below its knees, its shoulders are a ridge of muscle higher than its head, and its head is small, bald and gray, with a heavy brow over eyes like wet slate. Its skin is thick, gray and creased like weathered rock, and lichen grows in the creases of its back. Its hands are broad as a shield and as hard as the stone they carry. It wears nothing but the dust of the quarry. It never speaks. When it sets a stone it presses it down with both hands and holds it a moment, as a mason does, before it lets go.

## In the Land

The valley it walls is in the Nordlands, among the fells and the fjord heads, a narrow upland valley with a river, birch woods and a few farms, and a quarry face on its southern slope. The wall runs across the valley's throat from slope to slope, and it is high and finished at the ends and low and unfinished in the middle, where the road and the river go through. The varmathurs walks between the quarry and the wall from first light to dark, every day of the year, and it sleeps standing beside the quarry face. It never goes further than the quarry and the wall.

## Key Behaviors

The varmathurs works. It breaks a block from the quarry face with its hands, carries it across the valley on its back, sets it on the wall, and goes back for another, at a pace that does not change. It lays each stone where the wall needs it. A traveler who keeps clear of the quarry, the wall and the line it walks between them is not noticed at all, and the farms in the valley go about their business beside it. Anyone who touches a stone it has cut, climbs its wall, or moves a stone it has set is attacked, and so is anything that stands in its path and does not move. It does not pursue beyond its line, and when the trouble is gone it picks up its stone and goes on.

## What the Valley Does

The farmers of the valley live with the varmathurs as they live with the weather. They keep their beasts out of its line, they do not cut stone, they take the road through the unfinished middle of the wall and they do not stop there. They do not know who made it or why the wall is wanted, and they do not ask. The wall rises a little every year, and every family in the valley knows that when the middle is closed, the road and the river are closed with it, and the valley is shut.

## Signs

- A dry-stone wall across a valley's throat, its stones each as big as an ox cart, laid without mortar.
- A quarry face with blocks broken out of it by hand, the marks of fingers in the stone.
- Signs cut into the quarry face above the giant's reach, older than any farm in the valley.
- A line of footprints each as long as a man is tall, worn into a track between a quarry and a wall.
- Birches along that line broken off at the height of a man's head, as if brushed aside.
- A faint shudder in the ground every few heartbeats, from dawn to dusk.

## Combat Strategy

The varmathurs fights as it walks, from momentum. It swings the stone it carries, or its arm, in a long, slow sweep that clears everything in front of it, and it stamps on what is underfoot. It throws a stone at anyone on its wall or in its quarry out of reach. It is enormously strong and nearly impossible to hurt with ordinary weapons, and it is slow: it cannot turn quickly, it cannot stop a sweep once it has begun it, and it is slow to understand anything that is not in front of it.

## Attack Methods

### Crushing Blow

A sweep of its arm or of the stone it carries, which breaks shields, men and horses and throws what is left down the slope.

### Seismic Stomp

It stamps down with all its weight, and the ground jumps under everyone near it and throws them off their feet.

### Rock Throw

It hurls a block of cut stone at anyone out of reach on its wall or its quarry face, and the block crushes whatever it lands on.

## Special Abilities

### Giant Bulk

Its size and strength are beyond anything ordinary weapons were made for. Spears and arrows go into it like thorns into a man.

### Momentum

Once moving, it does not stop or turn quickly, and its sweeps and strides go on through anything in their way.

### The Task

It does nothing but its work and fights only for its work. Whatever does not touch its stones it does not see.

## Attributes

Strength
: 53-58 (1d6+52)

Endurance
: 17-20 (1d4+16)

Dexterity
: 4-7 (1d4+3)

Agility
: 4-7 (1d4+3)

Perception
: 6-9 (1d4+5)

Aura
: 6-9 (1d4+5)

Will
: 9-12 (1d4+8)

Creativity
: 4-7 (1d4+3)

Reasoning
: 4-7 (1d4+3)

## Plot Hooks

1. **The road through the middle.** The gap in the middle of the wall has narrowed to a cart's width, and the valley's farmers and the traders who use the road want it kept open. They pay a party to find a way to stop the wall before it closes.
2. **Whose wall.** A chieftain from beyond the valley's head has begun to send men to watch the wall, and pays a party to find out who wanted the valley shut and why.
3. **A stone touched.** A boy laid his hand on one of its stones on a dare and ran, and the varmathurs has stopped its work and stands at the stone, on the track between his family's farm and the road. The family needs the giant moved on before nightfall.
4. **The quarry face.** Signs older than any farm in the valley are cut into the quarry face above where the giant breaks its stone, and a scholar wants a party to copy them without touching anything it has cut.

:::secret {title="What beats the varmathurs"}

- **Pits and rockfalls.** It walks the same line every day. A pit dug in its track, or a rockfall loosed on it from the slope above, brings it down, and a fallen varmathurs takes a long time to rise.
- **Tiring it.** It is enormously strong but not tireless. Kept fighting and turning, with no momentum to use, it slows and at last stands still, spent, and can be reached.
- **The keystone.** Its task ends when the wall is done. The wall's middle wants one great keystone set over the river, and a party that sets a keystone there, or moves its stones so that the wall reads as finished, finds the varmathurs walking back to its quarry and lying down at the face. It does not get up again.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-nrdlndsrgn|Nordlands Region]]
: the fjord-lands where its valley lies

[[being-mntntrll|Mountain Troll]]
: another made giant of the high country
