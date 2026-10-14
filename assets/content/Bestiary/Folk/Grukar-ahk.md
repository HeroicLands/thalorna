---
shortcode: grkrahk
name: {full: Grukar-ahk, aliases: []}
type: being
subType: creature
description: "A self-fertilizing Grukar spawner, one per tribe, uniquely able to choose the subspecies of each clutch it lays."
tags: [folk]
data:
  packFolder: folk
  icon: icon-orchead
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
    str: 1d6+9
    end: 1d6+13
    dex: 1d6+7
    agl: 1d4+6
    per: 1d6+11
    aur: 1d6+12
    wil: 1d6+13
    rea: 1d6+10
    cre: 1d6+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
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
      weight: {base: 220, calc: "220"}
      reachBase: 0
      bodyScaleBase: 1.11
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

The last of the guards is down in the passage, and the chamber beyond it is warm, warmer than any cave should be, and smells of damp earth, resin smoke and something sweet and rancid underneath that catches in your throat. The figure in the middle of it does not get up. It is a Grukar, but broad through the hips and belly, bell-shaped, soft in a way that has nothing to do with weakness, its gray-green skin smooth and patterned with dark whorls along the belly and the inner arms. Round it, in stone-lined hollows in the floor, lie eggs: dull gray ones, pale ridged ones, and two or three that are larger and darker than the rest. Its eyes are large and dark and very steady, and it looks at you with a slow, considering calm, as if you were a problem it has already begun to solve.

# Dossier {#dossier}

The Grukar-ahk is the spawner of the [[lore-grukarfolk|Grukar]], the caste on which every tribe's existence depends. It is self-fertilizing, and every Grukar of its tribe hatched from its eggs. It chooses what each clutch will become, [[being-grukaruk|Uk]], [[being-grkrsh|Sha]] or [[being-grkrhshk|Hushk]], by what it feeds into the eggs as it lays them, and the clutch hatches on the schedule of whatever it was told to become: six weeks for Uk, twelve for Hushk, eighteen for Sha and for Ahk alike. A tribe has one fertile Ahk and three to six infertile ones, its guards and its reserves. The Ahk has no ambition of its own. The welfare and increase of its tribe is its whole purpose, and every cruelty and calculation in a Grukar tribe serves it.

## Presentation

A Grukar-ahk stands about five to five and a half feet tall, shorter than a Hushk and much broader through the hips, belly and pelvis, so that its outline is bell-shaped. Its weight is in its body cavity and its glands, the spawning structures no human anatomist has ever dissected. Its skin is the Grukar gray-green, smoother and less scarred than the warrior castes', marked on the belly, inner arms and thighs with darker whorls only Grukar can read. Its face is heavier-jawed than a Sha's and less brutal than a Hushk's, with broad nostrils, wide-set dark eyes and short tusks. The fertile spawner is slow and heavy, often heavy with eggs; the infertile ones are leaner and quicker, though still slower than any warrior. The spawn-chamber always smells of it.

## In the Land

A Grukar tribe is a place with a spawner in it, and the Ahk is the reason the tribe is where it is. It lives in the spawn-chamber at the heart of the nest, in [[place-grkrhlmrgn|Grukarhölm]], the eastern [[place-vrystwald|Vrystwald]] and [[place-skathwald|Skathwald]], the borderland of [[place-targud|Targud]], and the empty interior of [[place-aelwyth|Aelwyth]], and it almost never leaves. Its infertile reserves cannot leave either: they stay barren only while they are near enough to taste the spawner's suppressing scent, which reaches a chamber or two and no more, and one carried beyond it wakes fertile and founds a new tribe. That is how the Grukar spread. They do not migrate; they bud, a faction stealing a reserve and running with it into unclaimed land, and so the nests move outward one theft at a time.

## Key Behaviors

The Ahk cultivates its tribe the way a farmer works a field. It reads the reports of its Hushk and the counsel of its Sha and decides what the next clutches will be: Uk when the tribe needs labor or is short of food, Sha when it needs minds, Hushk, rarely and at great cost, when it means war. It spawns Hushk in numbers that keep them fighting each other, so that no Hushk ever holds power long enough to wonder what controlling the spawner would be worth. It protects the Sha and uses them as its instruments. It is careful with its land, pacing the hunting and the raids so that game and neighbors recover, and it chooses weak targets and leaves alone those that could bring an army down on the nest. It is the tribe's memory: a Grukar that knows something the tribe cannot lose is invited to dinner, and its brain and nerve-cord are fed to the Ahk, which writes the knowledge into the next laying. It watches its own reserves more closely than any enemy. When the land fails, it does not leave; it manages the decline in good order to the end, and only a conspiracy of Sha saves any part of the tribe.

## What the Frontier Peoples Do

Few people outside the Grukar have seen a spawner and lived, and those who have are mostly [[lore-flkkhazar|Khazári]], who kill Grukar on sight, and veterans of the rare raids that reached a spawn-chamber. Those raids are the frontier's great ambition and its great disappointment. A tribe whose fertile Ahk dies with no reserve near to wake in its place collapses; but the reserves wake, the chamber is defended by the toughest Grukar of the tribe, and a raid that kills the spawner and leaves a reserve alive has only made a new tribe. The commanders who have studied the matter in Aldorath's [[place-wyndmarch|Wyndmarch]] and on Targud's wall say the only raid worth the cost is one that kills every Ahk in the chamber, and that it has been done perhaps twice. More often, what a frontier sees of the Ahk is its work: a nest that has been quiet for years suddenly sending out Hushk, because the spawner decided on war a season ago.

## Signs

- A sudden increase in the number of Hushk in raiding parties, a season after the nest last suffered a loss.
- A new nest appearing far from any other, which means a reserve was stolen and has woken.
- A sweet, rancid musk in the deepest passages of a Grukar nest, and the air growing warm.
- Raids that stop short of strong targets and keep coming against weak ones, paced like a harvest.
- Grukar whose skulls have been opened, laid in a chamber with honor.

## Combat Strategy

The Ahk is not a fighter and fights only when the guards have failed and the chamber itself is breached. Then the fertile spawner fights with desperate strength and a cold authority, and the infertile reserves, which the tribe expects to die before it does, fight as a tight guard at the chamber door, hard to put down and slow to bleed. They do not fight well, but they hatched knowing how to hold a door, and they hold it. A party that has fought through the Hushk to reach the chamber usually finds the reserves the hardest part.

## Special Abilities

### Heavy Club and Grapple

An Ahk that fights uses a heavy club or mace, swung with deliberate weight to disable, and it closes, holds and pins an intruder for the other defenders to kill. Its low, broad build makes it a strong grappler.

### Demographic Spawning (fertile only)

The fertile Ahk chooses at the moment of laying which caste each clutch will hatch as. The effect shows only months later, when the clutch hatches and grows, but it is the most important power in any Grukar tribe.

### Latent Fertility (infertile only)

An infertile Ahk carried beyond the reach of the spawner's scent wakes fertile over weeks to months and begins at once to lay a clutch shaped to its new ground. This is how new tribes are made.

### Tribal Awareness

A fertile Ahk knows, in some way outsiders do not understand, the state of every Grukar in its tribe: their numbers, their deaths, the maturing of each clutch. It cannot be deceived about its own tribe.

### Resilient Constitution

An Ahk is slow but very hard to kill, resistant to bleeding, shock and ordinary wounds, which makes assassinating a spawner much harder than its slowness suggests.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 14-19 (1d6+13)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 13-18 (1d6+12)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 9-14 (1d6+8)
