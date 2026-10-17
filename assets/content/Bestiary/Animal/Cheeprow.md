---
shortcode: cheeprow
name: {full: Cheeprow, aliases: []}
type: being
subType: creature
description: "A ten-inch creature of disarming cuteness that lures travelers with innocent charm before revealing itself as a dangerous pack predator."
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
    str: 1d4+1
    end: 1d4+2
    dex: 1d6+8
    agl: 1d6+9
    per: 1d6+9
    aur: 1d4+5
    wil: 1d6+6
    rea: 1d4+3
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 13}}
    - name: Claw Grip
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Grip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -4, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            roles: &a1 [locomotor, manipulator]
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 3, calc: "3"}
      reachBase: 0
      bodyScaleBase: 0.52
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 15
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[cheeprow|Cheeprow]]{float=top-left}

Something is chirping in the grass by the fire: a soft, bright run of notes like small bells. It hops into the light, a round ball of dun fur no higher than your boot, with two huge dark eyes and a little beak, and tilts its head at the buckle on your pack. It chirps again, closer. Out in the dark beyond the fire a second chirp answers it, and a third, and then a dozen, from every side of the camp.

# Dossier {#dossier}

The Cheeprow is a ten-inch ball of fur with a beak, big eyes, four short legs and a pair of stubby wings, which lives in colonies of dozens or hundreds in burrows under the open grass of the steppe and scrub country: the [[place-wlqtrrgn|Volketor]] on the western edge of the [[place-khzryndsrtrgn|Khazryn]], and the grass-belt of [[place-velanthrgn|Velanthia]] beyond it. One Cheeprow is a curiosity that follows a traveler for miles, chirping. Eight together are a pack that kills. It is the one animal of the grass that herders teach their children not to feed.

A single Cheeprow weighs three pounds, eats insects, mice and roots, and comes to a camp for food and for anything that shines. What it finds, it chirps about, and the chirp carries. Within a short while the colony has come to the sound, and once six or eight are gathered the behavior of every one of them changes.

## Presentation

A round body about ten inches high and six across, covered in soft fur from pale tan to warm gray, on four stubby legs that hop rather than walk. A pair of short, rounded wings carries it in low, whirring flights of a few dozen yards at a time, and it covers more ground in the air than on its feet. The head is nearly a sphere and most of it is eyes: enormous, dark and glossy. The beak is small and round. Under the fur are sharp claws on the forelimbs and a mouth of small teeth for tearing meat, and none of this shows while the animal is sitting in the firelight looking at a buckle. One Cheeprow looks exactly like another.

## In the Land

Cheeprows burrow in dry, open ground with grass cover: the spring grass and summer dust of the Volketor, the steppe margin of Velanthia, and the scrub on the edges of the camel road where the first [[lore-sowidesclt|Sovidur]] tribes graze. A colony's burrows spread across an acre or more of a low rise, with dozens of mouths, and the ground above them is cropped bare. They are thickest where a water source draws mice and insects, which is also where a caravan camps, and the tribes who sell passage on the western road reckon a Cheeprow rise as a place to pass before dark and not to sleep.

## Key Behaviors

A colony forages at dawn and dusk and sleeps underground through the heat and the dark. A Cheeprow parted from its colony chirps without stopping until it finds another. One that finds food, or a bright object, changes the pitch of its chirp, and every Cheeprow in hearing repeats the call and comes toward it, so that the sound spreads outward across the grass and brings in animals from half a mile. Once the gathered number passes six or eight, the pack turns on whatever drew it: it surrounds the thing, closes, and attacks the legs, the hands and the face from every side at once. Food and bright metal make the frenzy worse. The tribes say a Cheeprow pack has no more mind than a single bird has, and that the mind arrives with the numbers.

## What the Herders Do

A herder who finds one Cheeprow in his camp kills it quietly or drives it off at once, before it has found anything to chirp about, and never lets a child feed one. A string that must camp near a rise covers its metal, keeps its food in closed bags, and sets a watch to kill the first bird that comes to the fire; the chirp that brings a pack is a distress call as much as a discovery call, so the watch kills it with one blow, not with a chase. A pack already gathered is met with fire, which they will not cross, and with cloaks wound round the forearms. The Volketor tribes burn a rise that lies too close to a well, and the colony digs in again a mile off within the season.

## Signs

- A low rise of close-cropped grass pocked with holes the width of a fist.
- One round, dun bird hopping behind a string for a mile, chirping, with no others in sight.
- A chirp answered from the dark, and the answer answered.
- Small, clean-picked bones of hares and birds scattered round the burrow mouths.
- A fox or a dog found dead on the grass, bitten in a hundred places.

## Combat Strategy

One Cheeprow does not attack. Seized, it struggles and shrieks, and the shriek brings the pack. Six to eight together surround a person, keep between them and the open grass, and go for the ankles and calves, the hands and the eyes, clinging where a sword cannot be swung and a boot cannot reach. Several on each limb will bring a grown man down, and the pack does not stop while anything moves. They are hard to hit, they fly over a swung blade and come back, and they do not run from their own dead. Fire turns them, and so does the loss of most of the pack, which is more birds than most parties can kill before they are on the ground.

## Attack Methods

### Claw Grip

Several Cheeprows at once catch hold of clothing, straps and skin with their foreclaws and cling, pulling the limb down and holding it for the others.

### Bite

Once holding, each bird bites with small sharp teeth and tears. A single bite is a nuisance; a hundred open a man from ankle to throat, and every one of them festers.

## Special Abilities

### Deceptive Appearance and Pack Mentality

Alone, a Cheeprow is a harmless and appealing animal that people feed and children chase, and it gathers its numbers unmolested. Past a certain count the gathered birds act as one, by chirps and by scent, and no one has found where the one mind is.

### Rapid Summoning and Escalation

A frightened or excited Cheeprow calls in a pitch that carries half a mile over open ground, and every bird that hears it comes and repeats it. The pack arrives in minutes, from all sides.

### Small Size and Agility

A Cheeprow slips through gaps, climbs where a man cannot reach, and lifts over a swung weapon in a whir of short wings. It is very hard to strike cleanly, and harder when there are thirty of them.

### Resistance to Pain and Relentless Aggression

In the frenzy, a wounded Cheeprow keeps attacking until it cannot move. A dying bird bites as hard as a whole one.

## Attributes

Strength
: 2-5 (1d4+1)

Endurance
: 3-6 (1d4+2)

Dexterity
: 9-14 (1d6+8)

Agility
: 10-15 (1d6+9)

Perception
: 10-15 (1d6+9)

Aura
: 6-9 (1d4+5)

Will
: 7-12 (1d6+6)

Reasoning
: 4-7 (1d4+3)

Creativity
: 5-8 (1d4+4)
