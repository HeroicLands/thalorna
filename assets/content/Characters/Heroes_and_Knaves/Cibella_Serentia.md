---
tags:
  - tamzir-crew
  - dependents
  - character
name:
  full: Cibella Serentia
  title: ""
  given: Cibella
  clan: Serentia
  aliases: []
packFolder: midhalionvylaria
shortcode: cibelasrnt
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Ward
  stations: []
  lore:
    - gentryrnk
  homes:
    - vylariargn
  affiliations:
    - thetamzir
    - vylarinmpr
  gender: female
  species: humanflk
  born: 702/11/27
  height: 1.73
  weight: 62.6
  frame: light
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: fair
    complexion: pale
    extra_features:
      - startlingly beautiful
      - unnervingly still gaze
      - moves with an uncanny grace
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 20 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 84 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 99 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 82 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 81 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 95 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 86 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 74 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 81 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 112 } }
    - { model: sohl-sohl-mysticalability-runecft, system: { masteryLevelBase: 117 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-mysticalability-astr, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-armorgear-lrobe }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
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

![[cibelasrnt|Cibella Serentia]]{float: top-left}

Cibella Serentia is a young woman of startling beauty and deeply unsettling presence. She is slender and pale, with rich brown hair that hangs loose to her waist, hazel eyes that seem to focus on things that are not there, and a face that shifts between ethereal calm and sudden, piercing intensity without warning. Her most characteristic expression is a distant stare—fixed on some point beyond the walls, beyond the horizon, as if she sees something there that no one else can perceive. She does this even sitting in a closed room, and it is deeply unsettling to those around her. Her normal affect is remarkably childlike: she takes wonder and intense concentration at the most inconsequential or ordinary things—a knot in a plank, the way light moves through water, the pattern of someone's breathing—and then, without warning, will blurt out an insight of almost impossible depth or precision before retreating back into quiet fascination. She dresses simply in a linen robe and leather shoes, and she carries nothing. She needs nothing.

# Dossier {#dossier}

## Background

### Origin

Cibella was born in [[place-belekos|Belekos]] to the same wealthy merchant family as her brother Lucerian. From infancy, she was different. She spoke early, read earlier, and displayed an insatiable hunger for knowledge that outpaced every tutor her parents provided. By ten, she was solving mathematical problems that challenged university scholars. By twelve, her arcane aura—the ambient resonance that marks those with potential for magical ability—was measured as Profound, the highest classification. She was a genius in every measurable sense, and the world seemed limitless.

### The Academy

When agents of the [[affiliation-ordoarcanis|Ordo Arcanis]] identified Cibella's extraordinary aura, they approached her parents with an invitation to study at one of the Order's elite academies. The family was honored—the Ordo's training was prestigious, and acceptance was rare. Cibella was ecstatic. For the first time, she would be among peers, studying subjects worthy of her abilities. She entered the academy at thirteen.

### The Experiments

What the Ordo told Cibella's family and what they actually did were vastly different things. The academy was a research facility, and Cibella was its prize subject. Her extraordinary aura and cognitive abilities made her ideal for a series of experiments designed to push the boundaries of arcane potential—techniques to unlock abilities that the Ordo believed lay dormant in sufficiently gifted individuals. The process was excruciating, invasive, and conducted without meaningful consent. Over two years, the Ordo stripped away the barriers between Cibella's conscious mind and the raw currents of arcane energy, giving her access to powers that no seventeen-year-old should possess—and destroying much of the psychological architecture that allowed her to function normally.

### Aftermath

When Lucerian found her and extracted her from the facility, Cibella was a shattered version of the brilliant girl who had entered. She suffers from partial amnesia, panic disorder, paranoia, post-traumatic stress, and episodes of dissociation. She is sometimes lucid—sharp, present, and devastatingly intelligent. Other times she retreats into herself, speaking in fragments, reacting to stimuli no one else can perceive, or going rigid with terror at triggers only she understands. The Ordo's experiments gave her extraordinary abilities—an intuitive understanding of arcane theory, preternatural physical reflexes, a capacity for runecraft that borders on the impossible—but the cost was her stability, her trust, and much of her childhood.

### Aboard the Tamzîr

Cibella has been aboard the Tamzîr for eighteen months, sheltered by the crew and monitored constantly by Lucerian. She spends most of her time in their cabin, drawing, calculating, or staring at things no one else can see. On good days she is gentle, curious, and childlike—studying a rope splice with the rapt attention of a scholar examining a lost manuscript, or watching the cook chop vegetables with an expression of pure wonder. On bad days she is unreachable, or worse—reactive, her erratic abilities surging in ways that frighten everyone, including herself. The crew has learned to give her space, to speak softly around her, and to never, ever touch her without warning. They have also learned that Cibella is not helpless, even if she appears so. Twice the ship has been boarded, and twice Cibella stood frozen while the fighting raged around her—until a blade came close enough to threaten her life, at which point she became something else entirely: blindingly fast, precise, and lethal, disarming or destroying her attackers with a physicality that defies her slight frame. Both times, the moment the danger passed, she simply stopped—blinking, confused, as if waking from a dream—and had to be led below by her brother. She has no memory of what she did, and she cannot do it again on purpose. [[being-kasuradmzr|Kasûra Damzarû]] has made the most progress in reaching her, finding in shared silence and simple mechanical work a connection that words cannot achieve.

## Psyche

### Personality

Cibella is fractured. Her default state is not lucidity but a kind of gentle, childlike reverie—she drifts through the world with wide-eyed fascination, absorbed by things others find unremarkable. She will spend an hour watching a spider build a web, or tracing the grain of a deck plank with her fingertip, wholly content. In this state she is sweet-natured, docile, and easily led. But she is also a savant: without warning, she will look up from her contemplation and deliver an observation of staggering insight—the solution to a navigation problem the pilot has been working for hours, or a casual remark that exposes a lie someone thought perfectly concealed—and then return to studying the spider as if nothing happened. She does not understand that these moments are extraordinary. She notices everything—emotional undercurrents, hidden tensions, the micro-expressions that betray lies—but processes them below the surface, and her blurted insights arrive without social context or filter, sometimes blunt to the point of cruelty without intending harm.

### Motivation

Cibella wants to feel safe. She wants the noise in her head to stop. She wants to be a person rather than a weapon or a patient. Beneath the damage, there is a fierce intelligence that wants to understand what was done to her and why—and an anger, still forming, at those who broke her.

### Strengths

Cibella's abilities are extraordinary—and entirely beyond her voluntary control. She is not in direct command of any of them. Her runecraft mastery exceeds that of Ordo scholars with decades more experience, but it surfaces unpredictably, often when she is drawing or calculating in a dissociative state. Her mathematical and analytical abilities are superhuman, but they emerge as sudden, unbidden insights rather than deliberate reasoning. Most unsettling are her physical capabilities: she is a devastating fighter with sword, dagger, and bare hands, possessed of preternatural reflexes and acts of impossible dexterity and agility—but she does not know this about herself. In calm moments she is passive, even helpless, and will stand idle while threatened, needing others to protect her. It is only when genuine danger reaches her that something deeper takes over—a wholly subconscious response that transforms her into a blur of lethal precision. The moment the threat passes, she reverts, often confused and frightened by what her body has done. She cannot summon these abilities at will, and she is frequently surprised by herself. She also possesses an intuitive awareness of arcane phenomena that allows her to perceive and interact with magical forces in ways that others cannot—she stares at things no one else can see, and what she sees there is real.

### Weaknesses

Cibella suffers from severe dissociation. She is not in control of her own abilities—they operate entirely at a subconscious level, inaccessible to her conscious will. Even when lucid, she cannot voluntarily access her combat skills, her arcane gifts, or her feats of physical prowess. She cannot train, cannot practice, cannot improve deliberately. Everything she does of extraordinary note happens _to_ her rather than _by_ her, and this terrifies her. She cannot always distinguish between reality and the arcane perceptions that flood her senses. She is vulnerable, dependent on her brother and the crew for basic safety, and in most practical situations she is as helpless as she appears—a childlike young woman who needs to be led, fed, and watched over. The Ordo wants her back badly enough to commit significant resources to her recovery. She is also seventeen years old, denied a normal adolescence, and struggling to form an identity from the wreckage of what was done to her.

## Social

### Patrons

Her brother **[[being-lucernsrnt|Lucerian Serentia]]** is her protector, caretaker, and most constant presence. The crew of the **Tamzîr** have become reluctant but genuine guardians.

### Enemies

The **Ordo Arcanis** considers Cibella their most valuable escaped asset. They have deployed agents, bounty hunters, and political pressure to recover her. The intensity of their pursuit suggests that what they learned from the experiments—and what Cibella herself now carries—is of extraordinary strategic importance to the Order.

### Affiliations

Passenger aboard the **Tamzîr**. Sister of **Lucerian Serentia**. She has formed a quiet bond with **Kasûra Damzarû**, who treats her with simple warmth rather than the anxious protectiveness of her brother, and with **[[being-damsnghlrn|Dámàsûn Ghôlâron]]** (Parma), whose calm presence seems to soothe her in ways that defy easy explanation.

## Plot Hooks

1. **Ominous Portents**: While in port, Cibella enters a dissociative state and produces a drawing of extraordinary detail and precision—a map of a location she has never visited, annotated with arcane symbols. The location corresponds to an Ordo Arcanis facility. What she has drawn may be a memory, a vision, or a warning, and deciphering it could reveal the Ordo's plans for her.

2. **The Awakening**: Cibella's abilities begin to stabilize—not diminish, but _cohere_. She starts to gain control over powers that have been erratic since her escape. This is both a gift and a danger: a controlled Cibella is exponentially more valuable to the Ordo, and the stabilization may draw arcane attention that the crew cannot deflect.

3. **The Other Subjects**: Cibella remembers, in fragments, that she was not the only subject in the Ordo's experiments. Others are still inside. She wants to help them. Lucerian wants to run. The crew must decide whether compassion or survival takes precedence.

4. **Recognition**: In a port city, someone from the Ordo recognizes Cibella and the crew. If they make it back aboard the Tamzîr, they know they have been identified—and the Ordo's response will not be subtle.

# Playing Cibella

The tragedy of Cibella Serentia is this: the Ordo's experiments unlocked something truly staggering, but they destroyed the mind that would have been able to wield it. She is arguably the most dangerous person on the [[place-vylarianse|Vylarian Sea]], and she spends her days watching spiders and being led to meals by her brother. The Ordo wants her back not just because she is powerful, but because they believe they can finish what they started—rebuild the control architecture they destroyed. Whether that is possible, and what it would cost, is one of the most compelling tensions in her story.
