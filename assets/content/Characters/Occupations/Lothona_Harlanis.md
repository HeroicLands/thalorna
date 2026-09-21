---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Lôthônâ Hârlânis
  title: ""
  given: Lôthônâ
  clan: Hârlânis
  home: ""
  aliases: []
packFolder: midhalionvylaria
shortcode: lothnhrlns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: female
  species: null
  age: 35
  birthday: 685/12/19
  height: 1.73
  weight: 72
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: chestnut
    skin_color: tanned
    complexion: freckled
    extra_features:
      - calloused knuckles
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 22 } }
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

Lôthônâ stands 5'8" with a solid, medium build that carries its weight in the shoulders and arms. Her chestnut hair is kept practical — tied back and pinned on duty, down to her shoulders when it is loose. Her dark brown eyes are direct and unblinking, the kind that get a confession out of a petty thief before she has asked the question. Her tanned skin is freckled across the nose and cheeks, and her face is broad and strong-featured, with a firm jaw and a mouth that settles naturally into a sceptical line. Her knuckles are calloused from years of hand-to-hand drill. She wears the standard Alyssa guard kit — padded tunic over linen, leather bracers, a short sword and a truncheon on her belt — with the ease of a woman who stopped noticing her uniform a decade ago.

# Dossier {#dossier}

The Alyssa docks at night are their own kind of violent — smuggling, theft, the trade in bodies, now and then a murder dressed as a drunk's fall into the harbour — and Lôthônâ has dealt with all of it. She supervises the docks night patrol, the post that sits between the guard station's hierarchy and the actual work on the quays, and she has held it since her late twenties. Her hands are calloused from hauling drunks and pulling fights apart, and she carries herself with the wariness of someone who has learned that almost anyone will turn dangerous if cornered.

Lôthônâ joined the docks patrol at seventeen, the same age as her older brother Brákôs, though she went to the urban garrison and he to the garrison cavalry. Her first years were merchant-crew brawls and the chaos of the dockside market, and what the work taught her was to read a fight at a glance — which ones a guard's presence would settle and which ones would need her hands. She became very good at that judgement.

At thirty-five she is still in the same post, and not for want of offers. She has turned down promotion twice, preferring the work of policing to the paperwork of rank. Nobody in the guard knows the docks as she does, and the merchants and dockworkers know her as fair and not for sale.

## Psyche

### Personality

Tough without cruelty, fair without softness. She speaks plainly and expects the same back. She has no patience for excuses and calls a lie the moment she hears it. But she is concerned for the welfare of the people on her watch, criminals included; she arrests with regret rather than satisfaction. Her humour is dark, as it would be after years of this.

### Motivation

To keep order in a place that resists it, and to keep the people on her watch out of the hands of the worst predators. She has no illusion of ending crime; she means to stop the needless suffering that follows when violence goes unopposed. Under that runs the need to prove she got her post by competence and not by family — her brother's place in the military makes people assume otherwise.

### Strengths

Her ability to take the heat out of a fight has no equal on the docks and was learned the hard way. She is strong and good with her weapons, and prefers not to use them. She understands how the docks work — who owes whom, what moves through and why — better than any single merchant or dock master. She is intelligent, and thinks about the keeping of the peace as a craft.

## Social

Lôthônâ occupies an odd place: respected by dockworkers and merchants alike, fully accepted by neither. Being a woman made authority harder at first; it has slowly become an advantage, now that she has shown she can carry it.

## Companions

### Patrons

**Dock Master Sevenros** — The official coordinator of dock operations for Alyssa's harbour authority. Sevenros has worked with Lôthônâ for twelve years and trusts her judgement completely. He has the authority to hire additional guards and has often asked for her by name on sensitive work, which brings her extra pay and a secure post.

### Enemies

**Smuggling Kingpin Verath Carlock** — The criminal who runs most of the black-market traffic through the docks. Carlock is intelligent and careful and leaves almost nothing a prosecutor could use. Lôthônâ knows he is guilty of everything from weapons smuggling to arranging the sale of people, and has never been able to build a case that would hold. He has made it plain that he respects her, and equally plain that he will destroy her if she becomes too much of an obstacle.

## Plot Hooks

1. **The Corruption Ascension** — Lôthônâ finds that a young guard in her own patrol has been taking Verath Carlock's money to let certain contraband through the checkpoints. He is the nephew of a powerful merchant family with political friends. When she moves to arrest him, Dock Master Sevenros stops her: the boy's family has just won a major contract with the harbour authority, and Sevenros is caught between the pressure from above and his loyalty to her. Swallow the corruption and keep her patron, or make the arrest and lose him.
2. **The Slave Ship** — Evidence reaches the station that one of the merchant vessels at the quay is carrying people for illegal sale. The ship is registered to a legitimate trading house; the captain says the "cargo" is indentured labour lawfully bound. Lôthônâ knows he is lying, and the papers say he is not. She cannot lawfully board without better evidence, and by the time she has it the ship will have sailed. Board illegally and end her service if it comes out, or let the ship go with the people in its hold.
3. **The Informant's Price** — Someone offers Lôthônâ the case against Verath Carlock: a low-ranking man in his organisation who wants out and will hand her everything needed to make it airtight. His price is that she help him vanish — a substantial bribe to a merchant captain for passage out of Alyssa, paid by her. It is a felony he is asking for. She believes the information is real and the case would be unanswerable.
4. **The Guard Station War** — The city guard is reorganised and Lôthônâ is placed under a new commander, **Captain Meredith Vane**, who is ambitious and means to turn the "soft" docks patrol into hard enforcement: heavy-handed searches, harassment of merchants and dockworkers, and a general approach that Lôthônâ knows will wreck the balance she has kept for years. She is ordered to carry it out.
5. **The Merchant's Daughter** — Lôthônâ comes across a young woman, **Lyssa**, daughter of a major merchant house, working as a fence for goods stolen on the docks. Lyssa is clever and careful, and her trade does less harm than most of the smuggling around it. The two grew up in the same quarter. Lyssa asks to be left alone to operate, and offers in exchange what she hears about the larger criminal operations. Protecting a criminal to reach bigger ones — Lôthônâ has to decide whether that is a trade she can make.
