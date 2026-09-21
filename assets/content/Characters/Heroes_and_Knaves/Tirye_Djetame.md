---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Tirye Djet'amê
  title: ""
  given: Tirye
  clan: Djet'amê
  home: meruhotep
  aliases:
    - Tirye Djetamê
packFolder: northernfertileregiontakheperu
shortcode: tiryedjetm
type: being
data:
  banner: takheperubnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Thespian
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: female
  species: null
  age: 29
  birthday: 691/9/10
  height: 1.63
  weight: 55.3
  frame: light
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark
    complexion: null
    extra_features:
      - a tattoo of a dragonfly on the neck
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 15 } }
    - { model: affiliation-hapi }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-slkshirt }
    - { model: sohl-sohl-armorgear-sgbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-sgclk }
    - { model: sohl-sohl-armorgear-vcap }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - name: Silk pouch for makeup and cosmetics
      type: miscgear
      system:
        shortcode: silkpouchformakeup
        weight: 0.3
        value: 100
        durability: 3
    - name: Stage prop collection
      type: miscgear
      system:
        shortcode: stagepropcollection
        weight: 1
        value: 100
        durability: 3
    - name: Scripts and performance notes
      type: miscgear
      system:
        shortcode: scripts
        quantity: 1
        weight: 1
        value: 100
        durability: 3
    - name: Mirror with ornate frame
      type: miscgear
      system:
        shortcode: mirrorwithornate
        weight: 0.5
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bglgcvs }
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

**Home:** [[place-meruhotep|Meru-Hotep]]

# Appearance {#appearance}

![[tiryedjetm|Tirye Djet'amê]]{float: top-left}

Off the stage she is small — 5'4" and lightly made — and easy to lose in a crowd, which she uses. Dark skin, black hair, brown eyes, a narrow face with a slightly arched nose, a smooth jawline and elegantly curved brows, and a dragonfly tattooed on her neck.

# Dossier {#dossier}

## Background

### The Daughter of Performance

The house is silent for the length of a breath after she finishes, every night, and then it is not. She has learned to stand still in the breath. It is the only part of the evening she is sure she has earned.

She was born in 691 in one of [[affiliation-empirtkhpr|Ta'Kheperu]]'s great theatrical cities, to two established players of the Kemetían tradition — the emotional, interpretive school — and was carried into rehearsal before she could walk. Instead of a schooling she had movement, voice, character and the whole mythology of the Kemetían Pantheon from the best teachers in the empire. The dragonfly on her neck was put there at thirteen, at a mystical retreat, when she gave herself to the art and to the goddess of transformation.

### The Rising Star

By her early twenties she had gone from child player to a leading actress of the City Theater Company, and her work became known for its nakedness — she will show an audience a feeling most players keep back. Tragic heroines and complicated villains are hers; the house stands for her; a following comes to every performance. Nobles commission private evenings. There is talk of the imperial court.

### The Hidden Struggle

The work is eating her. The line between the part and the person has gone thin, and between performances she is sure she is a mimic with nothing under the mimicry, that the success is a trick that will be seen through. She has withdrawn from people, and when she cannot withdraw she goes into a character instead, and the friendships and lovers who wanted her and not the role have mostly given up.

## Psyche

### Personality

Sure on the stage, unsure off it. Performing, she fills an amphitheatre; away from it she is quiet, careful, a little tentative, and always watching — collecting a walk, a turn of phrase, a way of holding a cup, so that even in private she is somewhat at work.

She sees the world as material. A quarrel in the street is a scene; a grief is a question of how it would be shown. Her art is a devotion to Hâpi and the principle of transformation, and she means it as prayer. The same intensity makes her moods theatrical: exultation to despair and back with nothing outside her to account for it. The people who love her have learned to wait it out.

She is gracious to everyone in public and lets almost nobody in. There is a loneliness at the centre that she has decided is the price: to be known, she thinks, would be to be smaller.

### Motivation

Beauty and truth on the stage, and through them to be remembered — to matter, to have her existence confirmed by a house in tears. That is the noble version. The other is that she does not believe she is worth anything without an audience, and takes the hardest parts she can find in the hope that the next one will settle it. She also looks after the younger actresses of the Company, because she remembers what it was to have nobody do that for her.

### Strengths

- **Performance**: She inhabits a part so completely that audiences leave shaken and stay shaken for days.
- **Emotional Range**: The whole span of feeling, on demand, and the ability to turn from one to its opposite in a breath and be believed.
- **Improvisation**: When the script fails she builds the scene on the spot, reading her fellow players and the house as she goes.
- **Physical Mastery**: Her body is exact and expressive; she can show a state of mind in how she crosses a stage.
- **Presence**: Even at rest she draws the eye.
- **Languages**: Eight of them, well enough to perform in each tradition as if born to it.

### Weaknesses

- **Fragile Self-Concept**: Without a part to be, she does not quite know who is there, and the emptiness frightens her.
- **Paralysis by Self-Doubt**: Between performances she is certain she is a fraud about to be found out.
- **Emotional Instability**: Despair, elation and dread at stage pitch, which makes a steady decision hard to hold.
- **Isolation and Avoidance**: She would rather perform than be close, and it has cost her lovers and friends.
- **Physical Vulnerability**: Grace is not toughness; she has no training for a fight and tires quickly.
- **Spiritual Dependency**: Her devotion to Hâpi can become obsession, and she is easy prey for a spiritual fraud with a convincing manner.

## Social

### Patrons

- **Lord Architect Merenset**: A powerful noble and the City Theater Company's chief patron, taken with her work; he commissions private performances and funds the experimental pieces she wants to try.
- **Master Playwright Khenti**: The Company's head writer, who has become something like a mentor, writes parts to her gifts, and is pressing her name on the imperial court.
- **Priestess Sentayet**: A priestess of Hâpi in the temple district, her spiritual adviser, who guides her practice and the religious side of her art.
- **The Merchant Prince Aahmes**: A rich collector and patron of players, lately fascinated with her work and generous with money and introductions.

### Enemies

- **Actress Nebunia**: A rival of nearly equal gifts, passed over for Tirye too many times, who has begun to spread ugly stories about Tirye's private life and state of mind.
- **The Puritanical Faction**: Priests of the sterner gods who hold the theatre corrupting, and have begun organising against her performances, especially the ones they call indecent.
- **Critic Amenhotep**: The influential critic whose savaging of her early work cut deep, and who has gone on dismissing her through every success since.

### Affiliations

- **City Theater Company**: A senior player, not yet in its leadership, its most celebrated name, and the person the younger actresses go to.
- **The Artistic Collective of Hâpi**: Players, painters and musicians who explore the spiritual side of art and keep the Kemetían traditions; she is committed to it and not always reliable.

## Plot Hooks

1. **The Inheritance of Impossible Expectation**: Her retired mother is gravely ill and wants to see her before she dies — and has said that Tirye will be disinherited unless she leaves the theatre and marries a respectable merchant. Tirye must go home, to the family and the pressure and her own uncertainty. It may be that the illness is a device of relatives who want the estate, and that her mother is using her daughter's stage as a counter in that game.

2. **The Lost Script and the Dangerous Truth**: A collector has brought her a fragment of an ancient Kemetían text — part of a sacred cycle suppressed centuries ago — and the role in it might have been written for her. To play it would break a religious ban and bring the priests down on her. The cycle was suppressed, it turns out, for what it said about the priesthood and the gods, and playing it would be either courage or heresy, and she cannot tell which.

3. **The Doppelgänger**: There is a woman in the city with her face, playing at a rival theatre in the parts Tirye was passed over for, and playing them well. She may be a twin, separated at birth and raised elsewhere. The rival house may have arranged the whole thing for the sensation. Tirye is left with a question she did not want: what she is, if someone else can be it.

4. **The Patron's Darker Commission**: Aahmes has offered her a large fee for a private performance before the most powerful people in the empire, in a part that flatters her, and the money would make her independent. In rehearsal she has begun to understand that the performance is a working — a rite meant to bend the imperial succession by what it does to the feelings of the people in the room — and that the other players do not know, and that Aahmes has been using his patronage to find ambitious artists for this. She can expose him and lose him, or go on and serve whatever it is for.
