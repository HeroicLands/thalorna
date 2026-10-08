---
shortcode: budeq
name: {full: Budeq, aliases: [The Road-Vulture]}
type: being
subType: creature
description: "A carrion bird of nine-foot wingspan that follows a caravan for days and settles on the weakest beast, giving the strings their omens."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
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
    str: 1d6+7
    end: 1d6+9
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Talon Rake
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hooked Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Hooked Beak
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
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
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
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
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
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

On the third morning out of the last well there is a bird over the string. It is high, a black cross on a white sky, and it turns in wide slow circles without a beat of its wings. On the fourth morning it is lower. By the sixth you can see the bare gray neck and the hooked, yellow beak, and when the string halts for the noon rest the bird drops onto a rock a hundred paces off and settles its shoulders like a man pulling a cloak about him. It does not look at the camels. It looks at one camel, the old gray with the sore on its hock, and it has not looked away since the second day.

# Dossier {#dossier}

The Budeq is a large carrion bird of the open road, and the one creature of the waste that follows a caravan as a matter of course. It rides the thermals above a string for days at a time, drops to the ground when the string halts and goes up again when it moves, and watches for the animal or the person that will fall behind. The tribes of the sands know it by its own name, which is also the word for the bird, and every string has a name for the particular one that follows it.

It is not a hunter of the living in the way a camel spider is. It is something worse for a caravan master to look at: it is accurate. A Budeq settles on the weakest beast in a string, and in most strings the weakest beast dies.

## Presentation

An adult has a wingspan of nine to ten feet and stands waist-high to a man when it walks. The body is a rusty black, the head and neck are bare skin the gray of wet slate, and a ruff of white down circles the base of the neck like a collar. The beak is long, hooked and the yellow of old ivory. The eyes are very dark and set deep in the skull, and they follow a moving animal with a steadiness that makes strangers uncomfortable.

On the ground it is clumsy, running a few steps with wings half open before it can lift, and it is easily frightened by anything that moves toward it with a clear purpose. In the air it is graceful, and it holds a thermal for hours without effort.

## In the Land

The Budeq ranges the whole length of the road, from the grass of the Welqator to the passes of the Idwakor, and follows strings rather than any one stretch of ground. It nests on cliffs, in the tops of dead light-towers and on the ledges of stone uplands, and a pair raises one chick a year. Between nesting seasons the birds roam in loose parties of a dozen, and each party works a stretch of road a hundred miles long, handing a string over to the next party at the boundary as if by arrangement. The Dikraqor and the Hosikor have the greatest numbers, since the stone and the sand are the hard stretches where beasts fall.

It feeds on carcasses, and a road lined with the dead feeds it well. A caravan is a moving feast, and a Budeq that has picked a string stays with it for as long as the string loses animals.

## Key Behaviors

A Budeq picks its animal on the first or second day and does not change. It chooses by gait, by the set of the head, by a sore or a limp or a slow gait it reads from a thousand feet up, and its choice is right so often that the caravan masters keep a watch on the bird to learn which beast it has picked. The bird will not touch a healthy animal. It settles at a distance, waits, and moves in when the animal lies down, and a camel that lies down in the middle of a stage is dead to the Budeq the moment it does.

It is bolder with the dying. It has been known to take the eyes of a camel that has not yet stopped breathing, and a sleeping or wounded person is a carcass in waiting. Several together will mob a lone walker who has fallen behind, beating with their wings and stabbing at the face and hands until he stops moving, and it is the drovers' fear of this that has put the birds in so many omens.

## What the Tribes Do

Every string keeps its omens, and most of them are about the Budeq. One bird in the air on the first day is the usual weather. Two is a hard stage. A bird that settles on a person's pole or tent-peg is a death in the party, and the party strikes the tent before dawn. A bird that does not settle at all, in twelve days, and wheels without pause over the whole string is the worst of the signs, and caravan masters talk about it in a low voice and pay for a guide to take the string off the road.

The riders of the Sowides do not kill a Budeq, and they leave offal at the edge of the track for the birds that follow them, so that the birds' attention is on the track rather than on the string. A tribe that has lost a rider on the road finds the body by following the bird. Raiders also read the birds: the Shirzâri and others who live by the raid look to the sky for a string that is dropping animals, and hit the string on the ninth day.

A drover who sees the bird fix on a beast has three choices. He can lighten its load, he can slaughter it for meat before it falls, or he can leave it at the next well with a tribe's blessing and a coin, and a caravan with a good master does the first and the last.

## Signs

- A bird that circles one string for days and does not wander off over the next ridge.
- A bird that lands when the string halts and rises when it moves.
- A bare, gray head turned at a single animal, with the eyes fixed.
- A drift of black feathers at the edge of a camp.
- Several birds on the ground at once, hopping, with their wings half open, at the edge of a halt: something has fallen.
- Dung-streaked white ledges on a dead tower or a cliff, with the sharp smell of old bone.

## Combat Strategy

The Budeq prefers not to fight. It goes after the helpless and flies from the strong. A lone bird will not close on a standing, armed person and will retreat if struck, and a party that fights back drives it off at once. A group is a different thing: three or four birds will attack a fallen or sleeping creature together, with one drawing off the defender's attention and the others going for the eyes.

It strikes from above, with the beak, from the blind side. The talons are weak and serve for gripping, and a bird that has fixed its claws in a victim's shoulder uses its beak to rip. A fleeing Budeq flies low and fast across open ground.

## Attack Methods

### Hooked Beak

The principal attack. The beak stabs and tears, and it goes for the eyes, the face and the open wounds first.

### Talon Rake

The feet rake downward as the bird lands or lifts, and the claws open the skin of the scalp, the shoulders and the hands.

## Special Abilities

### Death Sight

A Budeq reads the condition of an animal at a distance, from the gait, the sheen of the coat and the set of the head. It is seldom wrong about who will fall next.

### Thermal Rider

It gains height without effort in the hot air of the day and can hold a position over a string for hours without a wingbeat.

### Carrion Sense

It finds a carcass by sight and by smell from miles away, and flocks gather within an hour of a death.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-11 (1d4+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)

## A Hook

A Budeq has followed a string for twelve days without once settling, and a ring of bronze is fixed to one of its legs. The caravan master, who has read every omen in the road's long book, has never seen a ring on a bird. The ring carries a mark that one of the party's guides recognizes, and will not name. Someone has been feeding the bird to keep it on this string, and the animal it watches is carrying more than its load.
