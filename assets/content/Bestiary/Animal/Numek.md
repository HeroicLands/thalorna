---
shortcode: numek
name: {full: Numek, aliases: [The Tower-Roost Colony]}
type: being
subType: creature
description: "A night-flying colony animal of eight-foot wingspan that roosts by the thousand in dead light-towers and pours out at dusk to hunt."
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
    str: 1d6+6
    end: 1d4+9
    dex: 1d6+14
    agl: 1d6+16
    per: 1d4+13
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+9
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
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
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: edged}
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
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
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
            probWeight: 3
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: -1, piercing: -2, fire: 0}
      weight: {base: 8, calc: "8"}
      reachBase: 0
      bodyScaleBase: 0.94
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

Dusk comes on the waste with the last light turning the sand to copper, and the tower stands against it a mile off, a stub of brick with the lamp-chamber gone from its crown. A thread of smoke rises from the broken top. You watch it for a breath before you understand that it is not smoke: it thickens, spreads, and begins to pour outward and downward across the sky in a river of small dark shapes, with a sound like a rushing of rain on a tent. There are thousands. They come out of the tower in a long coil, wheel once over the dunes and fan out across the evening to hunt, and the first of them passes over your camp a hand's breadth above the tent-pole, close enough that you hear it click.

# Dossier {#dossier}

The Numek are night-flying creatures that roost in colonies in the dead light-towers of the waste and pour out at dusk to hunt. The word is the tribes' word for night, and it names the creature and the colony alike. A single bat-like animal is a Numek, and the roost is a Numek, and a camp that says "the Numek are out" means the whole of them, in the air, at once.

They are neither the largest nor the deadliest creatures of the road. They are the most numerous, and the tower roosts are among the few places in the waste where an ordinary night shelter is also the lair of a colony of thousands.

## Presentation

A Numek is a leather-winged flyer with a wingspan of about eight feet, a small, blunt-nosed head and large, folded ears. The body is the size of a cat and covered in short, dense fur, a mottled dark brown that is nearly black by lamplight. The eyes are small. The wings are narrow and long, with a hooked thumb-claw at the elbow that the animal uses to climb stone, and when it hangs head-down in its roost the wings fold around it like a cloak. The teeth are small, needle-sharp and numerous.

The sound of the colony is the first warning. A roost in the daytime gives off a steady dry rustle and a sour, ammoniac smell that carries a quarter mile downwind, and at dusk the rustle swells to a roar and the smell comes down on a camp like fog.

## In the Land

The Numek lives wherever the old [[lore-towercities|light-towers]] stand in numbers, which is to say along the road from the Welqator to the Idwakor, and above all in the central sands, where a hundred miles of road are lined with fallen towers. A tower is a good roost: tall, hollow, dark inside, with a stairwell that draws air and a wall too sheer for a predator to climb. The lamp-chamber at the crown, where the league's glass lenses once stood, is the heart of the roost. A tower may hold from a few hundred to several thousand animals, and the floor beneath it is a gray drift of old droppings, knee-deep and as light as ash.

They feed over the open waste on moths, beetles and flying insects, on small birds that are caught asleep, and on the rodents of the sand. A colony will range twenty miles from its tower on a night. At the end of the night, before dawn, the animals stream back, and the dark mass of the colony pours into the tower from every side.

## Key Behaviors

The Numek is a creature of fixed habits. It leaves the roost at the last light, hunts until the small hours, and returns before the sky grays. In the daytime it sleeps, and a roost is quiet until the heat of the afternoon, when the animals begin to stir. The outpouring at dusk is the busiest hour. It is also the only time the colony is dangerous to people.

They are not hunters of large game. A Numek that finds a sleeping man, or a camel with an open wound, will feed, in the same way it feeds on a roosting bird. It bites and laps, and a dozen animals on one victim is a serious loss of blood by morning. The colony also defends its roost. A party that enters a tower by day and wakes the sleepers is attacked from every wall, and a party that lights a fire in the lower chamber fills the whole of the tower with the shrieks of thousands of animals trying to leave.

## What the Tribes Do

The tribes treat a tower as a place to avoid after dark and to use by day. A caravan halts at a tower in the afternoon for the shade of the walls and is away from its foot by the hour before dusk. Those who must camp near one pitch their tents a mile off, upwind, and keep the lamps low.

The tribes of the road leave a lamp at the foot of a tower on the night the last city fell, and they say it is for the dead of the league. Whatever the reason, the lamp has an effect: it draws insects, and the colony feeds in the air above the lamp, within sight of the tower, rather than ranging over the camps. A tribe that keeps its lamp burning has a roost that feeds quietly at its own door.

The droppings are worth the labor. The tribes of the road cut them from the floors of the oldest towers in sacks and sell them at Qìso to the gardeners of the Tellumel, who pay for them by weight. A family with a roost on its range has a harvest it does not have to herd.

## Signs

- A dark pillar of wheeling shapes over a ruined tower at dusk, thinning to a thread.
- A white streak down a wall below the crown of a tower, like a long splash.
- A sour smell of ammonia on the downwind side of a ruin.
- A dry, steady rustling from a tower's stairwell in the afternoon, like paper.
- A dead sand grouse or desert lark under a tower with only the breast eaten out.
- Small spots of blood on a sleeper's blanket in the morning, and a feeling of having slept in a draft.

## Combat Strategy

A Numek attacks in a cloud. Its first strike is aimed at the eyes and the face, and the second is aimed at any open wound. Against a prepared party with torches it is afraid and flies off. Against a sleeping or disabled victim or a party that has fouled the roost, it presses the attack with a hundred animals at a time, and any single animal caught in the hand is a cat-sized creature that dies to one blow.

It hunts by echo. A loud noise, a clap or a shout from a doorway scatters the cloud for several breaths. Fire holds it at a distance, and a lit torch carried through a flock cuts a clear path.

## Attack Methods

### Bite

The Numek bites with needle teeth, and the wound bleeds longer than its size suggests. The animal laps at the wound afterward.

### Claw Rake

The hooked thumb-claw and the foot claws rake the face and scalp as the animal passes. A cloud passing over a camp leaves long, shallow scratches on every exposed face.

## Special Abilities

### Echolocation

It flies in complete darkness, finds prey by the echo of its own cries and cannot be blinded by the dark or by smoke.

### Roost Swarm

A disturbed colony rises as one. All the animals in a tower attack the same target for a short time, and the attack ends when the intruder leaves the tower or the colony tires.

### Night Adaptation

A Numek is dazzled by strong light. A bright lamp or a torch in the face turns it from its path.

## Attributes

- **Strength:** 7-12 (1d6+6)

- **Endurance:** 10-13 (1d4+9)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 17-22 (1d6+16)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 7-12 (1d6+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 10-13 (1d4+9)

- **Creativity:** 7-12 (1d6+6)

## A Hook

A Byzarian factor will pay for one intact lens from the crown of a light-tower, and the tower on the nearest ridge still has its glass. The lamp-chamber is the heart of the Numek roost. The tribe whose range holds the tower will let a party climb it only by day, in the two hours after noon, when the colony is deepest in sleep, and it will send a boy to watch the sky from the foot. A party that stays in the chamber past the middle of the afternoon is in a dark room with a colony of thousands, and a torch lit on the stair brings the whole roost down the stairwell.
