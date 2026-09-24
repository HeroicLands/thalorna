---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Êrmyn Véldarin
  title: ""
  given: Êrmyn
  clan: Véldarin
  home: ""
  aliases: []
packFolder: aureldiaelavendre
shortcode: ermynvldrn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - elavendriclt
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: male
  species: null
  age: 23
  born: 697/6/8
  height: 1.72
  weight: 58
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: gray
    skin_color: medium
    complexion: rugged
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 10 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 19 } }
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

Êrmyn is slight—5'8" and 128 pounds, with a light build that makes him seem younger than his twenty-three years. His hair is prematurely gray, a shock of silver-white that he keeps cropped close to his skull, and his dark brown eyes are large and watchful in a medium-toned, rugged face that carries more tension than a man his age should. His features are fine—narrow jaw, high cheekbones, a thin nose—with the slightly hollowed look of someone who does not eat or sleep enough. He moves quietly, almost silently, a habit from years as a refugee when making noise meant danger. He wears the forest-town guard's standard kit—leather tunic, quilted padding, soft boots—but everything hangs slightly loose on his spare frame, and he keeps his cloak drawn close regardless of weather, as though perpetually braced against cold.

# Dossier {#dossier}

Êrmyn was born to Élavendren parents but does not remember his early childhood. He was part of a refugee cohort that fled political persecution twelve years ago, when he was eleven years old. The experience of flight, loss, and displacement marked him in ways that remain visible in his bearing. His parents died during the journey (he will not say how), and he was taken in by a settlement near [[place-elavendre|Élavendre]]'s forest edge—a community that specialized in accepting refugees and integrating them into its life.

At eighteen, he joined the local town guard not out of ambition but out of pragmatic recognition that he had no other skills to sell. The work suited him in unexpected ways. His years as a refugee had made him acutely aware of danger and threat; his instinctive watchfulness, which had been a liability in civilian life, became an asset in security work. He moves through the forest-edge town with the characteristic silence of someone who learned early that making noise could mean death.

At twenty-three, he has served five years in the town guard and is respected by older, more experienced officers. His prematurely gray hair—which began during his refugee years—has become his identifying feature. He speaks quietly, often barely audible, and uses fewer words than almost anyone in his town. His reputation is for being the guard who notices things others miss and who remains calm under stress.

## Psyche

### Personality

Êrmyn is quiet to the point of seeming mute. He speaks only when necessary and often seems to be observing rather than participating. He is extraordinarily aware of his surroundings and reads danger signs that others miss. He is not unfriendly but is deeply private about his internal emotional state. He has learned not to trust easily, and his relationships are characterized by caution. He moves with the deliberate silence of someone for whom noise can be dangerous.

### Motivation

Êrmyn's primary motivation is simple survival and security. He has experienced the worst that the world offers and has no illusions about human nature. His secondary motivation, which he rarely articulates even to himself, is the desire to protect the refugee community that saved him from death as a displaced child. He wants others spared the suffering he endured.

### Strengths

His awareness of danger is preternatural. His ability to move silently and remain unnoticed is uncommon. His physical competence is solid and reliable. His emotional restraint allows him to remain calm under stress that would destabilize others.

## Social

Êrmyn is regarded with a mixture of respect and unease by his community. His status as refugee-turned-guard makes him something of a symbol of successful integration, but the marks his past has left on him and his emotional distance make people uncomfortable in his company for long. He is welcomed but not fully accepted.

## Companions

### Patrons

**Town Magistrate Lénira Mórlineth**—The administrator of the forest-edge town. Lénira was instrumental in the settling of refugees and personally advocated for Êrmyn's acceptance. She has become his primary patron and has made it clear that she trusts him absolutely. She has also quietly supported his continued education.

### Enemies

**Local Extremist Kessian Forestborn**—A Élavendren traditionalist who views refugees as a contamination of local culture. Kessian has publicly opposed the refugee settlement and has made it clear that he resents Êrmyn's presence in the guard. He spreads rumors that Êrmyn is a spy for external powers and that his refugee background makes him untrustworthy.

## Plot Hooks

1. **The Refugee Crisis Revisited**—A new wave of refugees arrives at the forest-edge town, fleeing the same political persecution that displaced Êrmyn a decade ago. The new arrivals include people Êrmyn knew in his childhood—people from his refugee cohort who scattered years before. Some want to stay and settle; others are being actively hunted by the persecutors they fled. The town becomes divided about accepting the refugees. Êrmyn is personally invested in their survival but must keep the impartiality of his office. Kessian uses the crisis to demand that Êrmyn be dismissed as potentially biased in favor of refugees.

2. **The Personal Recognition**—One of the new refugees recognizes Êrmyn and reveals knowledge about Êrmyn's parents' deaths that he has buried—details he has shut out of memory in order to go on. The refugee is offering to tell him the truth. He can face what he has spent years avoiding, or keep his footing by refusing to know.

3. **The Extremist's Escalation**—Kessian begins actively organizing violence against the refugee settlement, using rhetoric that stokes local resentment. He is technically not breaking laws—his speech, while inflammatory, is within legal bounds. Êrmyn can see violence developing and knows that his intervention could prevent it, but doing so would require suppressing legal speech or arresting Kessian on insufficient evidence. Town Magistrate Lénira asks him to find a way to stop Kessian. He can hold to the law or prevent the violence, not both.

4. **The Forest Revelation**—While patrolling the forest-edge, Êrmyn discovers evidence of an Élavendren government military operation that appears to be deliberately targeting refugee settlements beyond Élavendre's official borders. The operation is technically operating in foreign territory and therefore outside Élavendren's jurisdiction. But the refugees being targeted are people Êrmyn knows and cares about. Reporting this to Town Magistrate Lénira would be reporting his own government to someone outside it, technically treason. Not reporting means allowing refugees to be assassinated.

5. **The Spy's Truth**—Êrmyn discovers evidence that the accusation Kessian made—that Êrmyn is a spy—is partially accurate. Someone has been using Êrmyn's access to town information to gather intelligence on the refugee settlement. Investigation suggests someone in the community has been coercing another refugee into providing information. Êrmyn learns that the coercion involves threats against family members. Êrmyn can expose the coercion, which means revealing how he obtained the evidence and admitting he was investigating Kessian's accusation, or protect the coerced refugee and let the spying go on.
