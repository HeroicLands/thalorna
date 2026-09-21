---
tags:
  - tamzir-crew
  - administration
  - character
name:
  full: Isâra Khalîdra
  title: ""
  given: Isâra
  clan: Khalîdra
  aliases: []
packFolder: helladhelionis
shortcode: isarakhldr
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Courtesan
  stations: []
  lore:
    - gentryrnk
  homes:
    - helionis
  affiliations:
    - thetamzir
    - theradon
  gender: female
  species: null
  age: 26
  birthday: 693/10/26
  height: 1.73
  weight: 62.6
  frame: light
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: medium
    complexion: flawless
    extra_features:
      - carries herself with effortless poise
      - possesses a voice of extraordinary beauty
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 18 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 99 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 92 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 49 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 61 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 53 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 61 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 69 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 63 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-mysticalability-tarot, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-slkrobe }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 52 } }
    - { model: sohl-sohl-miscgear-gldcrwn, system: { quantity: 4 } }
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

![[isarakhldr|Isâra Khalîdra]]{float: top-left}

Isâra Khalîdra is beautiful in the way that a finely crafted instrument is beautiful — with purpose and precision behind every line. She is tall and slender, with rich brown hair that falls in carefully maintained waves, hazel eyes that shift between warmth and calculation with mercurial speed, and a complexion that seems untouched by the harshness of shipboard life. She moves with a dancer's grace, carries herself with effortless poise, and possesses a speaking voice of extraordinary beauty — low, musical, and utterly commanding. She dresses in silk and velvet even aboard the Tamzîr, maintaining an island of elegance amid the ship's general squalor. A superb dagger, its handle set with semiprecious stones, is the only concession to her surroundings.

# Dossier {#dossier}

## Background

### Origin

Isâra was born in the Helionite city of [[place-theradon2|Therádon]], one of the great intellectual and cultural centers of the western world. The daughter of a minor noble family with more prestige than wealth, she was identified at a young age as possessing the combination of beauty, intelligence, and charm that the Helionite courtesan academies prize. At twelve, she entered the Academy of the Silver Veil, one of the most prestigious training institutions for companions in all of Ankaris.

### Training

The Academy of the Silver Veil does not produce common escorts. It produces artists, confidantes, counselors, and social weapons. Isâra spent eight years learning music, dance, poetry, rhetoric, etiquette, herblore, law, and the subtle art of reading people. She studied politics and philosophy alongside the arts of pleasure, and she emerged at twenty as a fully licensed companion — a woman of higher social standing than most of the nobility she served.

### Aboard the Tamzîr

Isâra's motives for choosing to travel aboard the Tamzîr remain opaque, and even Captain Eshârum does not know what a woman of her refinement is doing on a ship full of petty criminals. She claims to be traveling between clients, using the Tamzîr's flexible itinerary to visit ports where her services are in demand. This is plausible but incomplete. Something drove Isâra from [[place-helionis|Heliónis]], and she carries a quiet tension beneath her polished exterior that suggests she is running from something — or toward something she has not yet disclosed.

### Position Aboard

Isâra rents a private cabin aboard the Tamzîr and maintains her independence from the crew's operations. She does not participate in smuggling or theft, and her social standing lends the ship an air of respectability it desperately needs. She has proven useful as a diplomat, translator, and social intermediary in ports where the crew's rough edges would otherwise cause problems. The crew respects her, though they do not entirely understand her.

## Psyche

### Personality

Isâra is poised, witty, and socially devastating. She navigates conversation the way Féthar navigates reefs — with instinctive precision and a deceptive appearance of ease. She is genuinely cultured, deeply intelligent, and capable of making anyone feel like the most important person in the room. But beneath the charm is a fierce independence and a will of steel. She does not tolerate being talked down to, she maintains strict boundaries around her profession, and she can deliver a cutting remark with a smile that does not reach her eyes.

### Motivation

Isâra values her autonomy above all else. She chose the courtesan's path because it offered independence, intellectual stimulation, and social power — not because she lacked alternatives. Her presence aboard the Tamzîr is connected to a deeper purpose she has not revealed to the crew, and her willingness to endure the ship's discomforts suggests the stakes are significant.

### Strengths

She is the most socially skilled person aboard the Tamzîr by an enormous margin. She can charm, manipulate, intimidate, and negotiate with equal facility. She is an accomplished musician, a trained herbalist, and surprisingly competent with a bow and dagger. Her network of contacts among the wealthy and powerful of multiple nations is an invaluable asset.

### Weaknesses

Isâra's emotional armor is nearly impenetrable, which isolates her from the crew and prevents genuine connection. Her pride can shade into arrogance, and she sometimes looks down on the crew's roughness in ways that create friction. Her secrets — whatever they are — make her a liability, because the crew cannot prepare for dangers they do not know exist.

## Social

### Patrons

Isâra maintains relationships with several wealthy and influential clients across the [[place-vylarianse|Vylarian Sea]], though she guards their identities jealously. The **Academy of the Silver Veil** in Heliónis is a powerful institution that protects its graduates.

### Enemies

Unknown. Isâra's secrets suggest she has enemies, but she has not disclosed them.

### Affiliations

Licensed companion of the **Academy of the Silver Veil** (Heliónis). Passenger aboard the **Tamzîr**. She has formed an unlikely connection with **Captain Eshârum Tarûzî** — a mutual respect that neither will openly acknowledge, rooted in the recognition that they are both more complicated than they appear.

## Plot Hooks

1. **The Silver Veil's Reach**: A message arrives for Isâra from the Academy — a summons she cannot easily refuse. The Academy wants something from her, and their request may conflict with the Tamzîr's interests. Isâra must choose between the institution that made her and the ragged family she has unexpectedly found.

2. **A Client's Dangerous Secret**: One of Isâra's former clients contacts her desperately, claiming to possess information about the Ordo Arcanis that could protect Cibella Tamaro — but only if Isâra agrees to a meeting in a Vylarian port city crawling with imperial agents. The information may be genuine, a trap, or both.

3. **The Mask Slips**: During a crisis aboard the Tamzîr, Isâra reveals combat skills and tactical knowledge that go far beyond what a courtesan — even a well-trained one — should possess. The crew begins to question who Isâra really is, and whether her presence aboard the ship is truly coincidental.
