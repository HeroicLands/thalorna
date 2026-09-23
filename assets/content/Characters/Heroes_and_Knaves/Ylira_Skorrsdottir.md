---
tags:
  - tamzir-crew
  - soldiery
  - character
name:
  full: Ylíra Skorrsdottir
  title: ""
  given: Ylíra
  clan: Íseldr
  aliases: []
packFolder: ankarisnordlands
shortcode: ylrskrsdtr
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Warrior
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - thetamzir
    - kngdmnrdhm
  gender: female
  species: null
  age: 25
  birthday: 694/2/17
  height: 1.7
  weight: 54
  frame: scant
  appearance:
    eye_color: blue
    hair_color: blonde
    skin_color: fair
    complexion: pale
    extra_features:
      - lean and wiry
      - scar on her right hand
      - intensity in her gaze that unnerves strangers
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 97 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 74 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 46 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 84 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 46 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-weapongear-whmr }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-rndsh }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ccowl }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-ltglove }
    - { model: sohl-sohl-armorgear-plhhelm }
    - { model: sohl-sohl-armorgear-plvamb }
    - { model: sohl-sohl-armorgear-mbyr }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 168 } }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

![[ylrskrsdtr|Ylíra Skorrsdottir]]{float: top-left}

Ylíra Skorrsdottir is a lean, wiry young woman with the pale skin and blonde hair of the [[place-nordheim|Nordheim]] coast. Her blue eyes carry an intensity that unnerves strangers – not aggressive, but watchful, like a hawk assessing whether something is prey or threat. Her scant frame belies a ferocious strength; she is built for speed and endurance rather than brute force, with the compact muscle of a lifelong fighter. A scar crosses her right hand where a blade once found its mark. She wears practical clothing layered with mail and plate – a byrnie, half-helm, and vambraces – and carries a warhammer and roundshield with the easy familiarity of extensions of her own body.

# Dossier {#dossier}

## Background

### Origin

Ylíra was born on the storm-battered coast of Nordheim, the daughter of a weaponcrafter father and a mother captured in a coastal raid. This mixed heritage – half Nordheimer, half from the conquered peoples of the coast – left her caught between two worlds. She was raised in the harsh Nordheim traditions, worshipping the old gods, learning to fight before she could read, and enduring the casual cruelty of a culture that valued strength above all else.

### Shieldmaiden

Ylíra became a shieldmaiden at fifteen, earning the title in the most direct way possible: a drunken Nordheimer sailor attempted to assault her, and she killed him with his own weapon. The act earned her respect among the warriors of her community, though her mixed blood ensured that respect was always tinged with suspicion. She trained obsessively, honing her skills with warhammer and shield until she was among the finest young fighters on the coast.

### The Breaking Point

At twenty, while visiting a Nordheimer fortress town, Ylíra witnessed an act of brutality that shattered her faith in the warrior culture she had been raised in. The details she does not share, but the consequence was immediate – she killed one of the fortress garrison's men in a confrontation and was forced to flee. In the aftermath, she lost her faith in the old gods and stopped using her clan name, cutting ties with her heritage as completely as she could.

### Adrift

Since fleeing Nordheim, Ylíra has been adrift – a warrior without a clan, a believer without a faith, a fighter without a cause. She drifted south along the coast, taking mercenary work where she could find it, until she encountered the Tamzîr and signed on as additional muscle. She has been aboard for three years, and in that time she has found something she did not expect: people worth fighting for, even if she is not yet ready to admit it.

## Psyche

### Personality

Ylíra is quiet, intense, and deeply private. She speaks sparingly and acts decisively. She has a dry, dark sense of humor that emerges rarely and without warning. She is uncomfortable with emotion – both her own and others' – and tends to withdraw when conversations become personal. In combat, she is transformed: focused, lethal, and possessed of a controlled fury that makes her one of the most dangerous fighters aboard the Tamzîr.

### Motivation

Ylíra is searching for something to replace what she lost – a code, a purpose, a reason to fight that does not leave her feeling hollow afterward. The Tamzîr's crew has become, almost against her will, the closest thing she has to a community. She is not ready to call them family, but she would die to protect them, and that contradiction occupies much of her private thought.

### Strengths

Ylíra is a superb fighter – arguably the best pure warrior aboard the Tamzîr, with a melee skill that borders on the exceptional. She is also an excellent archer, a skilled metalworker and weaponcrafter, and possesses the wilderness survival skills of someone raised on a harsh frontier. Her awareness and perception are acute, making her an invaluable watchkeeper.

### Weaknesses

Ylíra's emotional isolation limits her relationships and her ability to process the trauma of her past. She struggles with trust, particularly with men, and her intensity can make her difficult to be around. Her crisis of faith has left a void she fills with combat and discipline, but the underlying pain remains unaddressed. She is also slight of build and can be overpowered by larger opponents in prolonged grappling, despite her skill.

## Social

### Patrons

None. Ylíra has severed all connections to her homeland and her clan.

### Enemies

She is wanted in a Nordheimer fortress town for killing a garrison soldier. The dead man's kin may still seek blood-price or vengeance. More broadly, her mixed heritage and her rejection of Nordheim traditions make her unwelcome in many Nordheimer communities.

### Affiliations

Crewmember of the **Tamzîr**. She has formed a particular bond with **[[being-slvrvlskyr|Sélvara Válskyr]]**, recognizing in the first mate a kindred spirit – another woman warrior who has built a life on her own terms. She respects **Captain Eshârum Tarûzî** but maintains a careful distance.

## Plot Hooks

1. **Blood-Price**: A Nordheimer longship arrives in a port where the Tamzîr is docked, and among its crew is a kinsman of the man Ylíra killed. Nordheim custom demands blood-price or combat. Ylíra must decide whether to face her past, flee again, or let the crew fight a battle that is hers alone.

2. **The Old Gods Call**: Ylíra begins experiencing vivid dreams – visions she cannot explain and does not want. They carry the imagery of the Nordheim pantheon she has rejected, and they seem to be showing her something important. Whether this is genuine divine contact, suppressed trauma, or something connected to Cibella's arcane presence aboard the ship is unclear.

3. **The Weaponcrafter's Daughter**: Ylíra learns that her father has died and left his forge to her – along with debts, obligations, and a half-finished commission for a powerful Nordheimer jarl. Claiming the inheritance would mean returning to the life she fled. Abandoning it would mean losing the last connection to the parent who loved her unconditionally.

4. **Shield-Sister**: During a fierce battle, Ylíra saves Cibella's life and discovers that the young woman's erratic arcane abilities resonate with her own deep aura in unexpected ways. The experience suggests a connection between them that neither understands, and it may explain why the Ordo Arcanis is so desperate to recover their escaped subject.
