---
shortcode: grkrhshk
name: {full: Grukar-Hushk, aliases: []}
type: being
subType: creature
description: "A towering six-foot apex Grukar warrior, strongest of its kind, so consumed by the need for dominance it cannot tolerate its own kin."
tags: [folk]
data:
  packFolder: folk
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
  kbcat: grukar
  attrRollFormula:
    str: 1d6+13
    end: 1d6+14
    dex: 1d4+6
    agl: 1d4+5
    per: 1d4+8
    aur: 1d4+8
    wil: 1d4+14
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[grkrhshk|Grukar-Hushk]]{float=top-left}

The thing that fills the doorway has to stoop to come through it. It is a Grukar, but built on another scale: six feet and more of gray-green muscle over heavy bone, broader across the shoulders than two men abreast, scarred everywhere, with chunks bitten out of its ears and a pair of cracked yellow tusks jutting from its underslung jaw. It carries a cleaver of black iron that looks made for something larger still, and it carries it easily. Behind it the smaller ones crowd and wait. It looks at you with small, deep-set eyes, and there is no measuring in the look. It has already decided what you are. It is only deciding where to begin.

# Dossier {#dossier}

The Grukar-Hushk is the warrior caste of the [[lore-grukarfolk|Grukar]]: the largest, the strongest and by far the most dangerous, five and a half to six and a half feet tall and massively built, and perhaps one Grukar in twenty. It rules the [[being-grukaruk|Grukar-Uk]] by fear and fights everything, other Hushk most of all, because it cannot abide a rival; two Hushk who meet fight until one is dead. That fratricide keeps the Hushk few and fierce, and it is no accident: the tribe's [[being-grkrahk|Grukar-ahk]] spawns its Hushk in numbers that guarantee it, because a Hushk with time to think might come to understand that mastering the spawner would make it master of everything. A Hushk clutch takes twelve weeks and costs the tribe more food than any other laying, and word that the spawn-chamber has laid Hushk runs through a tribe like a declaration of war, which is what it is.

## Presentation

A Grukar-Hushk is a slab of corded muscle over thick, heavy bone, dense enough that floors creak under it. Its skin runs from dark gray-green to a mottled brown-black and is a patchwork of ritual scars, bite marks and badly healed wounds, every one a trophy of a fight it won. The face is heavy-browed and brutal, with a pronounced underbite and cracked tusks, and the eyes are small, deep-set and lit with a feral intelligence. It wears armor of scavenged metal and bone, hung with trophies, fingers, teeth, scraps of banners. Its weapons are oversized, cleavers, great axes, war-clubs and swords no man could swing, and it swings them easily. It speaks no human tongue; it signals, as Grukar do, by posture and by calls from the chest and throat.

## In the Land

Every Grukar tribe has its Hushk, one or two at a time and seldom more, in [[place-grkrhlmrgn|Grukarhölm]], in the eastern [[place-vrystwald|Vrystwald]], on [[place-targud|Targud]]'s burned eastern border, and in the empty interior of [[place-aelwyth|Aelwyth]]. The Hushk leads the raids that come out of those places, at the head of its Uk. It is the Hushk, more than any other Grukar, that the frontier peoples remember. In [[lore-burningeast|the Burning of the East]], which laid waste Targud's eastern districts from 604 to 614 AF, a Sha did the planning, and a Hushk led what the Sha planned.

## Key Behaviors

A Hushk recognizes one law, that the strong rule and the weak serve or die. With other Hushk there is no hierarchy but the question of who can kill whom, settled by posturing if possible and by a fight to the death if not, and the tribe's spawner lets those fights happen. Over the Uk it rules by terror. It tolerates the Sha that make themselves useful to it, and a clever Sha at a Hushk's elbow is often the real voice of the warband. A Hushk is not taught; it hatches knowing how to fight. Within that one field it learns, and learns well: which shield-wall gives on the left, what a crossbow does at forty paces and cannot do at ten, which neighbor's warband breaks under pressure and which only pretends to. An old Hushk is much more dangerous than a young one. But it learns tactics and nothing else. It cannot imagine a situation it has not stood in, or trace a consequence more than one step, and it wins the battle in front of it while losing the war it never understood it was in.

## What the Watch Does

Commanders who face Grukar learn first to find the Hushk, because the Hushk is the warband. The Uk do not stand once their Hushk is dead, and a raiding party whose Hushk has been killed is a crowd of Grukar running home. Frontier levies in [[place-auldalon|Áuldalon]] and Aldorath's [[place-wyndmarch|Wyndmarch]] keep their best spearmen and their crossbows for the big one. They learn the second lesson too: a warband with two Hushk in it is a civil war waiting for an excuse, and a commander who can give the Hushk that excuse, a wound, a retreat that looks like cowardice, a captured standard, may see them settle it themselves. A lone Hushk, with no rival to provoke, will sometimes stop to look at a warrior who stands his ground without fear, before it kills him.

## Signs

- Huge clawed footprints, deeper than an ox's, among the smaller tracks of a raiding party.
- Trophies left on stakes at the edge of a raided steading: hands, heads, a broken banner.
- The body of a Grukar-Hushk, killed by another Hushk, left where it fell with its trophies taken.
- A raiding party that moves with a single purpose and does not stop to plunder until its target is taken.
- Trees and gateposts hacked through with a single stroke.

## Combat Strategy

A Hushk fights head-on and without let-up. It wades into the enemy line, swinging its huge weapon in strokes that cut through shields and men, and keeps pressing until the line breaks or it dies. It uses its strength to control the ground, sweeping a space clear round itself. It uses the Uk as a weapon and a shield, driving them in ahead of it and over the bodies. What it has learned from earlier fights it uses: the gap in a shield-wall, the place an archer cannot reach. It does not plan beyond the fight in front of it, it does not retreat while it can stand, and it does not forgive. It does not cooperate with another Hushk, and two Hushk on one field fight beside each other only until the enemy breaks.

## Special Abilities

### Tremendous Strength

The Hushk's strength is far beyond a man's. It wields weapons two men would struggle with, and its grip is very hard to break.

### Battle-Learned Tactics

A Hushk remembers every fight it survived and what worked in it, and an old Hushk fights with a veteran's cunning within the narrow field of the battle in front of it.

### Battle Endurance

It fights far longer than a man without tiring and grows more dangerous, not less, as a fight goes on.

### Will to Fight

It keeps fighting through wounds that would drop anyone else, until it is dead or can no longer stand.

### Fratricidal Rivalry

A Hushk cannot abide another Hushk. Two in the same warband fight each other given any excuse, and that rivalry is the surest weakness of a Grukar force.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 6-9 (1d4+5)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 9-12 (1d4+8)

- **Will:** 15-18 (1d4+14)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
