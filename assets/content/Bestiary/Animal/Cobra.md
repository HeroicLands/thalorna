---
shortcode: cobra
name: {full: Cobra, aliases: []}
type: being
subType: creature
description: "A large, fast venomous serpent of the river lowlands, haunting river margins, granaries, and ruins where its bite delivers swift death."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+3
    end: 1d4+5
    dex: 1d6+11
    agl: 1d4+12
    per: 1d6+14
    aur: 1d6+8
    wil: 1d4+7
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 18}}
    - name: Hooded Strike
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Hooded Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forebody, shortcode: torsozone, probWeight: 5}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 30, calc: "30"}
      reachBase: 0
      bodyScaleBase: 0.67
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[cobra|Cobra]]{float=top-left}

A sound like torn cloth comes from the dark behind the grain-bin. In the slit of light from the door a slender body rises off the floor to the height of your waist, the neck flattening into a broad, dark hood with a pale pattern on it. A small oval head sways over it, perfectly calm, and the round black eyes watch your hand.

# Dossier {#dossier}

The Cobra is the great venomous snake of the river lowlands, six to eight feet long, thirty pounds, found in irrigation channels, granaries, ruined temples and rocky ground at the desert edge of [[place-aukhelathrgq|Au'Khelathu]]. Its raised hood is the royal sign of the empire, and a living cobra is sacred and may be killed only in self-defense. Farmers value it for the rats it keeps down and fear it for a bite that kills a grown man within hours.

## Presentation

A large, smooth-scaled snake with a slender, strong body, jet black, dark brown or gray-olive above and cream or yellow below. When it is alarmed it lifts the front third of its body and spreads a hood eight to ten inches across, marked with eyespots, pale bands or chevrons. The head is small and oval, with round pupils. The fangs are fixed and short, half an inch to an inch, at the front of the mouth. It moves in a smooth side-to-side glide.

## In the Land

Cobras live in the papyrus marshes of the delta of Au'Khelathu, along the irrigation channels and field-banks of the river valley, in granaries and in the rocky ground at the desert edge. A snake keeps to one length of bank or one set of ruins, hunting rats, frogs and birds, and basking on a wall in the morning. Cobras are common in the river lowlands, and nearly every village has one living in its mud-brick walls or its grain store.

## Key Behaviors

Cobras are active in the morning and evening and lie up in shade, burrows or rubble through the heat. They hunt alone, taking rats, frogs, lizards, other snakes and birds, which draws them to granaries. They avoid a fight and retreat if they can. A cornered or startled cobra rears and spreads its hood as a clear warning, and strikes if the warning is ignored. A female guarding eggs strikes without warning. Cobras swim well and hunt along channels and banks, and they climb trees and walls to reach nests or escape a flood.

## What the Delta Villages Do

The raised hood is the royal sign of the empire, and a cobra is sacred to [[lore-shebazetdty|Shebazet]], the cobra-goddess of the delta's papyrus marshes, and the temples and estates of the [[affiliation-shebazet|Faith of Shebazet]] hold the marsh villages of [[place-garshebazet|Gar-Shebazet]]. A village does not kill a cobra in its granary; it sends for a snake-charmer of the temple, who takes the animal in a basket and carries it to the marsh. A farmer who is bitten is taken to the temple, whose priests keep the antidotes. Fowlers and reed-cutters wear tall boots of reed-weave and beat the ground ahead of them with a stick.

## Signs

- A shed skin, whole and as long as a man, caught on a reed or in the crack of a granary wall.
- A track like a rope drawn through the dust, with a soft S-shaped edge.
- A sudden hiss from a pile of baskets or the shadow of a door, and a hood spread like a hand.
- A dead rat on the threshold of a granary, with two small punctures in the neck.
- Frogs leaping out of a ditch in a line, all in the same direction.

## Combat Strategy

A cobra's defensive strategy begins with avoidance. If it detects a threat at distance, it will attempt to retreat into cover. If cornered or surprised, it raises into the striking posture — the anterior body lifts, the hood spreads, and the snake tracks the threat's movement with precise lateral adjustments. The striking range is roughly one-third of the snake's total body length — a six-foot cobra can strike from approximately two feet away. The strike itself is extraordinarily fast, faster than the human eye can track, driving the fangs into exposed flesh and delivering a measured dose of venom. Unlike vipers, which strike and release, cobras often hold the bite, chewing briefly to ensure venom injection through their shorter, fixed fangs. After striking, a cobra may retreat or maintain its defensive posture, prepared to strike again. A cobra has sufficient venom for multiple strikes and will not hesitate to bite repeatedly if the threat persists.

## Attack Methods

### Hooded Strike

The cobra's signature attack. From the raised defensive posture, the snake lunges forward and downward, driving its fixed fangs into the target. The strike is aimed at whatever is closest — typically the lower legs and feet of a standing human, or the hands and arms of someone reaching into the snake's refuge. The bite delivers neurotoxic venom through a brief chewing motion that works the short fangs into the wound. The initial pain is sharp but not overwhelming — the true danger develops over the following minutes and hours as the venom takes effect.

### Ground Strike

When not in the raised posture — when surprised while moving or hunting — the cobra strikes laterally from ground level, a whipping motion of the head that can reach targets within the snake's strike radius. This attack is less precise than the hooded strike but equally venomous.

## Special Abilities

### Neurotoxic Venom

The cobra's venom is a potent neurotoxin that attacks the nervous system, causing progressive paralysis that begins at the bite site and spreads throughout the body. Early symptoms include pain and swelling at the wound, followed by drooping eyelids, difficulty swallowing, and slurred speech. Without treatment, the paralysis eventually reaches the respiratory muscles, causing death by suffocation within six to twelve hours depending on the dose and the victim's size and health. Treatment requires immediate application of herbal antivenoms known to river-kingdom physicians, or magical healing that specifically addresses poison. The venom is medically distinct from viper venom — viper antivenom does not work against cobra envenomation, and vice versa.

### Hood Display

The spread hood works as both warning and defense. The expanded neck presents a larger, more intimidating silhouette that causes many predators to reconsider their approach. The eyespot markings on some cobra populations create the illusion of a much larger face staring at the threat, exploiting the instinctive fear response of predators that recognize facial patterns. The display is effective — most animals, including humans, instinctively recoil from a hooded cobra, buying the snake time to escape or prepare a strike.

### Awareness

Cobras perceive the world primarily through vibration, scent, and thermal sensitivity. They detect the footsteps of approaching creatures through ground vibration, identify prey and predators through the scent organ in the roof of the mouth (served by the constantly flickering tongue), and sense the body heat of warm-blooded creatures at close range. This combination of senses makes cobras extremely difficult to surprise and allows them to hunt effectively in total darkness.

### Sacred Serpent

The cobra holds a position of deep religious significance in the river kingdoms. The uraeus — the rearing cobra — adorns the crowns of the god-kings and the headdresses of high priests, symbolizing divine authority and the power to deal death to enemies of the realm. Living cobras found in temples are considered manifestations of divine protection and are fed milk and offerings. This sacred status means that cobras in settled river areas face virtually no predation pressure from humans, allowing populations to thrive in close proximity to human habitation.

## Attributes

Strength
: 4-7 (1d4+3)

Endurance
: 6-9 (1d4+5)

Dexterity
: 12-17 (1d6+11)

Agility
: 13-16 (1d4+12)

Perception
: 15-20 (1d6+14)

Aura
: 9-14 (1d6+8)

Will
: 8-11 (1d4+7)

Reasoning
: 5-8 (1d4+4)

Creativity
: 3-6 (1d4+2)
