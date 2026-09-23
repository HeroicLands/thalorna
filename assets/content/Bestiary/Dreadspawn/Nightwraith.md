---
tags:
  - dreadspawn
  - creature
name:
  full: Nightwraith
  aliases: []
description: "A corrupted giant bat twisted into a cunning nocturnal killer, hunting the night skies and lightless caverns with ruthless precision."
shortcode: nghtwrth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
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
    str: 1d6+10
    end: 1d4+13
    dex: 1d6+14
    agl: 1d6+16
    per: 1d6+16
    aur: 1d6+6
    wil: 1d4+13
    rea: 1d4+9
    cre: 1d6+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 38 } }
    - name: Blood-Draining Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Blood-Draining Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 2
            aspect: piercing
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Raking Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: talon
          name: Raking Talons
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 1
            aspect: edged
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 2
          - name: Left Wing
            shortcode: lwingzone
            probWeight: 2
          - name: Body
            shortcode: torsozone
            probWeight: 4
          - name: Right Wing
            shortcode: rwingzone
            probWeight: 2
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 2
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
              - manipulator
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
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[nghtwrth|Nightwraith]]{float: top-left}

The darkness above you ripples with motion – a shadow that moves against the shadows themselves. Then comes a sound – not the flap of wings but a wet, clicking chirp that seems to come from everywhere at once. The temperature plummets as an enormous winged shape passes overhead, blocking out even the starlight, and you catch the reek of blood and cave-rot. Two points of sickly crimson luminescence fixate on you from above – eyes that see you more clearly in utter darkness than you can see in daylight. Fangs the length of fingers curve downward, and you hear the thrash of leathery wings as the creature wheels for another pass.

# Dossier {#dossier}

Nightwraiths are apex predators of the darkness, corrupted giant bats whose forms have been twisted by magical or infernal forces into killers of terrible economy. They roam the night skies, deep cave systems, and the spaces below ground where no natural light reaches, hunting with ruthless precision. Unlike their natural ancestors, Nightwraiths possess an intelligence that borders on cunning, and they seem to take pleasure in the hunt itself, beyond the feeding. They are said to gather in large roosts in caverns of particular depth or remoteness, and traveling merchants have learned to fear the arrival of dusk and the sound of their chittering calls.

## Presentation

A Nightwraith measures 15 to 20 feet from wingtip to wingtip, with a muscular, emaciated frame that seems half-starved despite its constant feeding. Its skin is a sickly, translucent gray-black like rotted leather stretched over bone, with visible veins and sinews pulsing beneath. Its wings are vast and membranous, webbed with a material that seems to absorb light rather than reflect it, and they emit a wet, chittering sound when they flex. Its face is a nightmare of adaptation – eyes like burning coals set above a mouth of terrible proportions, lined with fangs of fearsome length and sharpness. Tufts of bristling fur run along its spine and the upper edges of its wings. The creature emits a constant, ultrasonic clicking that humans can feel but barely hear, and the air around it carries the overpowering stench of blood and corrupted flesh.

## Key Behaviors

Nightwraiths are primarily crepuscular and nocturnal, becoming active as darkness falls and hunting throughout the night until dawn drives them to roost. They are colonial creatures, returning to large communal roosts in deep caves or cavern systems where dozens or even hundreds may gather during the day. At night, they disperse to hunt, each creature claiming its own territory but often overlapping with others. They are drawn to areas of high prey density – particularly settlements where livestock or humans might be found. A Nightwraith’s hearing is extraordinarily sensitive; it can detect the heartbeat of a human at considerable distance and will stalk wounded or sick prey with patient deliberation.

## Combat Strategy

A Nightwraith attacks from above and behind whenever possible, attempting to rake prey with its fangs and claws before ascending beyond reach. It relies on speed and superior agility to avoid damage, making multiple passes rather than committing to prolonged melee. Against multiple opponents or heavily armored foes, it attempts to separate and isolate targets, dragging one away from the group where it can finish the kill without interference. The creature is intelligent enough to recognize when it faces an overwhelmingly superior threat and will retreat to its roost if severely wounded, though it may circle and wait for an opportunity to renew the attack once its opponent shows signs of fatigue.

## Attack Methods

### Blood-Draining Bite

The Nightwraith dives from above, attempting to drive its elongated fangs into exposed flesh and anchoring itself while it feeds. Victims lose blood rapidly and begin to weaken from blood loss and the creature’s parasitic venom.

### Raking Talons

The creature’s claws are nearly as dangerous as its fangs, used to rake prey during aerial passes or to hold a victim immobile while it feeds.

### Sonic Screech

The Nightwraith’s ultrasonic vocalizations can be focused into a devastating assault that disorients and dazes every creature in front of it, disrupting spellcasting and balance alike.

## Special Abilities

### Echolocation Mastery

The Nightwraith navigates and hunts with perfect precision in complete darkness, its echolocation revealing the world to it in perfect detail even when totally blind. It can perceive creatures by heartbeat, breath, and body heat with accuracy that rivals magical sight.

### Nocturnal Predation

In darkness or low light, the Nightwraith’s movement and attacks are enhanced, and its perceptiveness is magnified. Creatures trying to track or strike it in darkness find it very hard to do so.

### Blood Hunger

Once the Nightwraith has tasted blood, it enters a state of heightened aggression and focus on that particular victim, pursuing it with relentless determination. A bleeding target cannot easily escape or hide from the creature.

## Additional Information

Bright light is the Nightwraith’s primary weakness – sustained illumination causes it physical pain and forces it to retreat. Daylight is nearly unbearable; a Nightwraith caught in direct sunlight will flee desperately to the nearest darkness. Fire is equally effective, not only harming the creature but overwhelming its sensitive senses and disrupting its echolocation. Roosts can sometimes be eliminated by smoke or by destroying the cavern entrances, trapping the creatures in daylight where they slowly weaken. The guano accumulated in Nightwraith roosts is extraordinarily valuable to alchemists and tends to accumulate in toxic, crystalline forms that can be harvested. Some desperate communities have attempted to negotiate with Nightwraith colonies by providing regular sacrificial livestock, reducing human predation in exchange for food – a practice viewed with deep moral ambiguity by most societies.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 17-22 (1d6+16)

- **Perception:** 17-22 (1d6+16)

- **Aura:** 7-12 (1d6+6)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 10-13 (1d4+9)

- **Creativity:** 7-12 (1d6+6)
