---
tags:
  - animal
  - creature
name:
  full: Cheeprow
  aliases: []
description: "A ten-inch creature of disarming cuteness that lures travelers with innocent charm before revealing itself as a dangerous pack predator."
shortcode: cheeprow
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
  birthday: "unknown"
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
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 13 } }
    - name: Claw Grip
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Grip
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: -4
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
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -3
            aspect: piercing
          lengthBase: 0
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
          - name: Forequarters
            shortcode: fqtrzone
            probWeight: 1
          - name: Torso
            shortcode: torsozone
            probWeight: 1
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 1
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1
              - locomotor
              - manipulator
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
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
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
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: -1
              edged: -2
              piercing: -3
              fire: -1
      weight:
        base: 3
        calc: "3"
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

![[cheeprow|Cheeprow]]{float: top-left}

The sound reaches you first: a soft chirping, bright and almost musical, like tiny bells chiming in sequence. When you locate the source, your eyes fall upon a creature so absurdly cute that your guard drops instantly. Standing barely a foot tall, it resembles a fluffy, round ball of dun-colored fur perched on stubby legs, with enormous dark eyes that sparkle with innocent curiosity. Its small beak opens in what seems like a happy chirp as it hops closer, investigating a button on your pack with tender fascination. You would almost swear the creature was smiling—until, moments later, you hear the sound repeat from somewhere else nearby, and again, and again, each new chirp answered by others, drawing from every shadow and corner around you.

# Dossier {#dossier}

The Cheeprow appears to be a small, harmless creature—a living mascot barely ten inches tall. Yet this deceptive cuteness masks a dangerous pack predator. Individual Cheeprows are curious and seemingly harmless; they investigate travelers and camps with innocent enthusiasm, drawn to shiny objects and food. Lone Cheeprows have been known to follow adventurers for miles without aggression, chirping contentedly. However, when their numbers grow, their true nature emerges: coordinated, savage, and relentless. A solitary Cheeprow represents curiosity; a dozen represent danger; a swarm represents extinction for anything they can surround and overwhelm. Adventurers encounter Cheeprows in grasslands, forests, and scrublands, where these creatures nest in colonial burrows. A single curious Cheeprow often precedes an encounter with its entire pack.

## Presentation

A round, fluffy creature approximately ten inches tall and six inches across, covered entirely in soft, dun-colored fur ranging from pale tan to warm gray. The body is stout and compact, supported by four short, stubby legs that allow hopping movement. The head is disproportionately large and almost perfectly spherical, dominated by enormous dark eyes that comprise nearly a quarter of the face’s surface area—these eyes are bright, shiny, and convey an impression of innocent curiosity. The small, round beak is used for feeding and for producing the characteristic chirping vocalizations. The cuddly exterior hides sharp claws on the forelimbs and sharp teeth made for tearing meat. The fur provides excellent camouflage in grassland and scrub environments. Individual Cheeprows are indistinguishable from one another, and their responses to one another are governed by complex pheromone communication.

## Key Behaviors

Cheeprows are colonial creatures, nesting in burrow systems containing dozens to hundreds of individuals. They are most active at dawn and dusk, foraging for insects, small animals, and roots. Individual Cheeprows separated from their nest become anxious and attempt to locate their group, chirping continuously to communicate. A single Cheeprow exploring a human camp is investigating for food and shiny objects—the creatures are attracted to reflective materials, possibly because such reflections mimic water sources or other shiny-eyed creatures. When a Cheeprow discovers something of interest, its chirp changes in pitch and pattern, communicating the discovery to nearby Cheeprows. This chirp triggers a cascade effect: other individuals are drawn to the location and repeat the discovery chirp, bringing more Cheeprows from increasing distances. Within minutes, dozens of creatures can gather in response to a single discovery. Once numbers are sufficient, the behavior shifts—the creatures cooperate in a manner that suggests a shared intelligence or a pheromone-driven instinct. They attack in coordinated waves, using tactics that suggest previous experience of how prey defends itself.

## Combat Strategy

A solitary Cheeprow will not attack a human. If threatened or grabbed, it will struggle and chirp in distress—a sound that immediately triggers pack response from any Cheeprows within hearing distance. Once the pack assembles and numbers reach a critical threshold (approximately six to eight individuals), the collective behavior becomes predatory. The Cheeprows no longer investigate—they attack. Their tactics are coordinated: they surround the target, keep it from retreating, and attack exposed flesh, eyes, and extremities. They use their small size to advantage, clustering around legs and arms where defenders cannot easily target them. Multiple Cheeprows simultaneously gripping different limbs can immobilize even a large humanoid. The presence of food or shiny objects amplifies this aggression—the creatures become increasingly frenzied in the presence of provisioning opportunities.

## Attack Methods

### Claw Grip and Bite

Multiple Cheeprows will grab a single target simultaneously, their claws latching onto clothing, pack straps, or skin. Once secured, they bite with surprising force, tearing flesh and puncturing skin. Dozens of small bites and cuts together can cause significant blood loss and leave many wounds open to infection. The creatures will continue biting and tearing until the target is immobilized or the Cheeprows are physically removed.

### Coordinated Swarming

As the pack’s numbers increase, individual Cheeprows coordinate attacks, attacking from multiple angles simultaneously. This prevents the target from concentrating defense in a single direction. Cheeprows attacking from behind are particularly effective, as defenders often focus on visible threats in front of them.

### Distraction and Overwhelming

Cheeprows will focus attacks on creating opportunities for additional Cheeprows to inflict damage. A creature busy defending against one line of attack is open to attack from others. The small size of each creature makes them difficult to strike, even with magic or weapons that sweep an area.

## Special Abilities

### Deceptive Appearance and Pack Mentality

Individual Cheeprows present as harmless, cute animals that inspire protection rather than caution. This deception allows them to gather in numbers unmolested. Once sufficient numbers are present, they operate as a unified organism, communicating through chirps and pheromones. The coordination displayed by large packs suggests either a shared intelligence or an elaborate instinct—the mechanism is not fully understood.

### Rapid Summoning and Escalation

When threatened, a Cheeprow emits a wailing cry that travels considerable distance and triggers immediate response from the entire pack. Even Cheeprows a half-mile away will begin moving toward the sound. This allows the pack to rapidly concentrate force against any threat, and attacking a single Cheeprow triggers an immediate and severe response from all nearby individuals.

### Small Size and Agility

Cheeprows are small and agile enough to evade most targeted attacks. They can squeeze through gaps that would impede larger creatures, climb into places humans cannot reach, and move quickly across terrain cluttered with obstacles. Their small size also makes them difficult to strike with many weapons—a sword swing aimed at a Cheeprow often passes over or around them, inflicting no damage.

### Resistance to Pain and Relentless Aggression

Once the pack reaches critical mass, individual Cheeprows display apparent indifference to injury. A Cheeprow with a fatal wound will continue attacking. This suggests either a different response to pain than mammals have, or something in the blood that heightens aggression during pack hunting. Multiple injuries do not dissuade the creatures—they continue attacking until physically incapable of movement.

## Attributes

- **Strength:** 2-5 (1d4+1)

- **Endurance:** 3-6 (1d4+2)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-12 (1d6+6)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 5-8 (1d4+4)
