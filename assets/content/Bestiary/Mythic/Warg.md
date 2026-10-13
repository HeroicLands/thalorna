---
shortcode: warg
name: {full: Warg, aliases: []}
type: being
subType: creature
description: "A monstrous four-hundred-pound wolf warped by fell magic into a near-sapient predator far deadlier than any dire wolf."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-wolfhead
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+15
    end: 1d6+15
    agl: 1d6+9
    per: 1d6+13
    snt: 1d4+3
    aur: 1d4+4
    wil: 1d6+13
    rea: 1d4+5
    cre: 1d6+7
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 2}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 3, aspect: edged}
          lengthBase: 1
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
          - {name: Torso, shortcode: torsozone, probWeight: 5}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
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
            probWeight: 8
          - name: Right Hind Leg
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
            protectionBase: &a1 {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a2 {blunt: 4, edged: 3, piercing: 2, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: *a1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a1
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: *a1
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a2
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 2}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 150
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "-1"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

The wolves have been crying in the forest since dusk, and now the crying has stopped. The dogs are under the sledge. Out past the firelight, where the spruce closes over the trail, a shape stands that is too big for a wolf, nearly four feet at the shoulder and black as the gap between trees, with a mane that bristles though there is no wind. Its breath smokes. Its eyes catch the fire, and they do not move the way an animal's eyes move: they go from face to face round the fire, and stop on the one with the bow.

# Dossier {#dossier}

The warg is a wolf grown to four hundred pounds and three and a half or four feet at the shoulder, black or iron-gray, and warped by something that no one has named into an animal that plans. It runs in packs of five to fifteen through the dense forest and marsh-woods of [[place-grkrhlmrgn|Grukarhölm]] and the eastern reaches of [[place-vrystwald|Vrystwald]] where the Grukar nests thicken, and it hunts elk, boar, Grukar and men, and takes men by preference when it can. It is cleverer than any wolf: it remembers faces, lays an ambush a day ahead, and kills the archer first. The Varokh of the frontier villages do not go into Skathwald after dark in a winter when the wargs are running, and they do not say why in front of the children.

What made it is not known. The description the frontier gives, a wolf touched by fell magic, is as far as anyone has gone, and the Varokh shamans leave the question alone.

## Presentation

A huge, heavy wolf with longer legs and a deeper chest than any dire wolf, in fur that is black, iron-gray or burned brown and lies sleek and oily, with a sheen in firelight like dark metal. The mane along the neck and shoulders bristles whatever the weather. The head is long and wedge-shaped, the jaws deep, the teeth yellow and very large. The eyes are pale and steady and look at a person as a person looks back. The claws are long and do not retract, and the tail is thick and expressive. It smells of wolf and of something underneath that the dogs will not go near.

## In the Land

Wargs hold the deep mixed forest and the frozen marshes of Grukarhölm, where the country is roadless and the Grukar tribes are thickest, and they range west into the [[place-skathwald|Skathwald]] reach of Vrystwald and south toward the Velanthian frontier in hard winters. A pack holds a range of many square miles and raids the ranges of other packs on purpose. They den in windfalls, old Grukar diggings and the banks of the slow rivers, and they are commonest where the Grukar war-trails run, since a Grukar war-band leaves dead behind it. The Grukar neither hunt the wargs nor are much hunted by them; the two give each other room in a way the Varokh find worse than war.

## Key Behaviors

A warg pack is a company under a captain. The strongest leads, the rest hold their places, and the places are kept by fights that end in death. They hunt by day or by night as suits them, in formation, and they hunt men as a thing done for its own sake and not only for meat. A pack scouts a village for days before it comes in, learns the hour the gate is shut and the house the dogs sleep in, and takes the watchman. They talk across miles in a howl pitched too low to hear and felt in the chest, and a pack that has been scattered gathers again by it. A warg lives forty years and more and remembers every man who has hurt it, by scent and by face.

## What the Villages Do

A Varokh frontier village that has wargs in its woods brings the stock inside the palisade at dusk, sets two men on the gate instead of one, and sends nobody on the forest paths alone in winter. The dogs are kept in, because a pack lures the dogs out first. The village hunts a pack with the whole hunting band, on skis in deep snow where the wargs sink and the men do not, with spears and with the archers in the middle of the line and not on its edge; a pack that has been hunted once hunts the hunters. A warg pelt is a chief's cloak and a thing a man is remembered for. A village that cannot drive a pack off loses its stock, then its outlying houses, then its road, and some of the empty clearings along the Skathwald edge were villages.

## Signs

- Wolf-sign too large for a wolf: prints as wide as a man's two hands, in a line, in step.
- A trail that circles a village at a bowshot's distance, trodden by several animals, night after night.
- Dogs that go under the sledge and will not come out, and wolves that fall silent all at once.
- A watchman gone from the gate with no sound, and the stock untouched.
- A low note felt in the chest at night, from the forest, answered from far off.

## Combat Strategy

The pack flanks, isolates and finishes. It comes from two or three sides at once, cuts one man out of a party, and brings him down before the rest have turned; the first warg takes the archer and the next two take whoever goes to help him. Against men in mail they go for the legs, the hands and the face. They drive a running party toward a drop, a frozen river or a place they have chosen beforehand, and they press until the party breaks. A warg alone is careful and does not give up; it follows a man for days. A pack with young in the den fights anything to the death. They are beaten by a shield-wall that does not break, by a line of fire, and by deep snow under men on skis.

## Attack Methods

### Bite

The jaws crush bone, take a hand off at the wrist and go through mail at the joints. The warg bites, holds and pulls the man down for the pack.

### Claw

At close quarters it rakes with the forepaws, long and deep, at a man who is running or holding a shield up against the teeth.

## Special Abilities

### Supernatural Intelligence

The warg reasons: it plans a hunt days ahead, remembers a man and a place, weighs a risk and takes it or not, and understands the shape of a fight the way a captain does. It has no speech and needs none.

### Pack Dominion

A pack under its leader moves as one body without a sound, each warg where the plan wants it, and changes the plan in the middle of a fight as if one mind held them all.

### Sight in the Dark

The warg hunts in full dark as well as at noon, by eye, nose and the warmth of a body, and darkness laid by magic does not blind it.

### Aura of Dread

Its presence puts a fear into animals and people that reason does not lift. Horses bolt, dogs cower, and men who have stood against a boar find their hands shaking.

### Terrible Howl

A howl pitched below hearing carries for miles, gathers and directs the pack across country, and leaves the men who feel it in their chests less willing to stand.

### Supernatural Endurance

A warg runs for days without rest and follows a trail across a province. What drives it is not in its legs.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 14-19 (1d6+13)

- **Scent:** 4-7 (1d4+3)

- **Aura:** 5-8 (1d4+4)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 8-13 (1d6+7)
