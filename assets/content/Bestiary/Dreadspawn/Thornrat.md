---
shortcode: thornrat
name: {full: Thornrat, aliases: []}
type: being
subType: creature
description: "A small but deadly plague-bearing scavenger whose venomous spines and toxic bites can spread disease through an entire settlement."
tags: [dreadspawn]
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
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+3
    end: 1d4+6
    dex: 1d4+8
    agl: 1d4+12
    per: 1d4+6
    wil: 1d4+5
    cre: 1d4+6
    aur: 1d4+2
    rea: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Barbed Spine Salvo
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: quill
          name: Barbed Spine Salvo
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Venomous Bite
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
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
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
            roles: &a1 [locomotor]
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 25, calc: "25"}
      reachBase: 0
      bodyScaleBase: 0.67
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thornrat|Thornrat]]{float=top-left}

The caravanserai's dung-yard is a reeking slope of straw, camel dung and refuse behind the stables, and it is moving. Small gray bodies run over it, dozens of them, the size of cats, mangy and bristling. One stops on the yard wall and looks at you. It is a rat, or something like a rat crossed with a mongoose, its fur falling out in patches over gray-purple skin, and it is covered in short, barbed quills. Its eyes are red. It hunches, and the quills stand up, and with a sound like a handful of gravel thrown at a door, they fly. Behind it, the whole yard has stopped moving, and every red eye in it is turned toward you.

# Dossier {#dossier}

The Thornrat is a small dreadspawn in the shape of a mangy, quilled rat, eight to twelve inches high and about twenty-five pounds, which lives in colonies in filth and decay, shoots venomous barbed spines, bites with venomous teeth, and carries disease into every wound. Alone it is a nuisance; a colony is a plague. A colony of them infests the lower quarter of [[place-tahrodan|Tahrodan]], the fortress city of the caravan road and the largest city of the Kingdom of Amradad, where every caravan from the desert interior passes on its way to the coast. Like every dreadspawn they were made, and they cannot breed. The colony came all at once and has not grown; it only spreads.

## Presentation

A thornrat is built like a lean, long-bodied rat or a mongoose, muscular and quick, and covered on its back, flanks and tail in short, barbed, poison-tipped spines. Its fur is mangy and falls out in patches, showing sickly gray or mottled purple-black skin with sores on it. Its eyes are small and red, its teeth yellow and long. It smells of rot and sickness. It moves in quick darts and freezes, and when it is threatened it hunches and raises its spines with a dry rattle, and then shoots them, all at once, in every direction.

## In the Land

Tahrodan is a city goods pass through, thirty thousand people inside walls that every caravan must pass, and its lower quarter is caravanserais, stables, tanneries and dung-yards. The thornrat colony lives there, a few hundred strong, in the dung-heaps and refuse-pits, the drains and cesspits, the burial ground outside the walls, and anywhere else that death and filth gather. They eat refuse, carrion and dung, and kill small animals, dogs and sleeping beggars. They are nocturnal. They spread through the quarter along the drains, and individual thornrats ride out of the city in caravan baggage and turn up, singly, at the caravanserais along the road, where they do great harm before anyone knows what they are.

## Key Behaviors

Thornrats live in colonies and act together. By night they come out of the dung-heaps and drains to feed, and they range through the lower quarter in packs. They are skittish one at a time and flee from anything large, but a colony together is bold, and it attacks a sleeper, a drunk or a lost child in an alley without hesitation. Every wound they leave festers, and sickness follows them: fevers, fluxes and rotting sores break out wherever a colony settles. They coordinate when they attack, timing their spine salvos and their rushes so that the whole colony strikes together.

## What the City Does

The governor of Tahrodan and the priests of the [[affiliation-ashanpnthn|Āsháian]] fire-temples, neither of whom can rule without the other, agree on the thornrats: they are filth, and fire cleanses filth. The temples send priests with fire into the lower quarter at the new moon to burn out a dung-yard or a drain-mouth, and the governor's soldiers stand guard while they do it. It has never been enough; the colony moves to another heap. The caravanserai-keepers sweep their yards and burn their dung daily, which is the best defense anyone has found. Caravan-masters leaving the city shake out their baggage on the open road a day out, and kill anything that falls out of it. Physicians in the city treat a spine wound by cutting out the barbs and cauterizing the hole, and they are busy.

## Signs

- A dry rattling in a dung-heap or a drain at night, like gravel shaken in a box.
- Barbed gray spines stuck in a stable door or a sack, each as long as a finger, with a dark tip.
- Dogs and cats found dead in the alleys with festering sores and spines in them.
- A run of fevers and rotting wounds in one street of a quarter.
- Small red eyes, dozens of them, in a refuse-pit at night.

## Combat Strategy

One thornrat is a minor danger and runs. A colony attacks together: the front rank hunches and shoots spines all at once, the rest dart in to bite and slash at legs and hands, and then they all fall back and shoot again. They pick a victim who is down, asleep or alone. They are skittish and flee when they lose many of their number or when fire comes, and they come back the next night. Fire is the weapon against them: it burns their spines and their skin and scatters a colony, and burning out their heaps is the only way anyone has thinned them.

## Attack Methods

### Barbed Spine Salvo

The thornrat contracts its whole body and shoots dozens of barbed, poison-tipped spines in every direction. Each is a shallow wound; together they are many, and every one carries venom and sickness.

### Venomous Bite

The thornrat darts in and bites at a hand, an ankle or a face, and slashes with its small claws. The wound is small, the venom in it is strong, and it festers.

## Special Abilities

### Spine Regeneration

Its spines grow back fast, and a colony can shoot salvo after salvo through a long fight without running short.

### Plague Vector

Thornrats carry sickness in their teeth, their spines and their filth. Even minor wounds from them fester, and fevers and fluxes break out where they live.

### Colony Coordination

Together they time their salvos and their rushes with uncanny precision and overwhelm a defender from every side at once.

### Fire Weakness

Fire burns their spines and skin and drives them off, and burning their heaps is the one way to thin a colony.

## Attributes

- **Strength:** 4-7 (1d4+3)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 9-12 (1d4+8)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 7-10 (1d4+6)

- **Will:** 6-9 (1d4+5)

- **Creativity:** 7-10 (1d4+6)

- **Aura:** 3-6 (1d4+2)

- **Reasoning:** 4-7 (1d4+3)
