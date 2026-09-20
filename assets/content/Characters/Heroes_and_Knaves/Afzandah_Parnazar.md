---
tags:
  - heroes-and-knaves
  - guilded
  - tradesfolk
  - character
name:
  full: Afzandah Parnâzar
  title: ""
  given: Afzandah
  clan: Parnâzar
  home: kethramir
  aliases: []
packFolder: ankariskhazryndesert
shortcode: afzndhprnzr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Weaponcrafter (Armorer)
  stations: []
  lore:
    - commonerrnk
  homes:
    - khzryndsrtrgn
  affiliations:
    - khzrncnfdrtn
  gender: female
  species: null
  age: 33
  birthday: 687/4/16
  height: 1.73
  weight: 70.8
  frame: medium
  appearance:
    eye_color: green
    hair_color: black
    skin_color: golden
    complexion: null
    extra_features:
      - a scar on the left ankle
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-sirvadar }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-weapongear-whmr }
    - { model: sohl-sohl-armorgear-rhgntl }
    - { model: sohl-sohl-armorgear-rhtunic }
    - { model: sohl-sohl-armorgear-rhbrch }
    - { model: sohl-sohl-armorgear-rhshoe }
    - { model: sohl-sohl-armorgear-rhmntl }
    - name: Metalcraft tools (chisels, files, engraving burins)
      type: miscgear
      system:
        shortcode: metalcrafttools
        weight: 1.5
        value: 100
        durability: 3
    - name: Decorative gemstones (assorted)
      type: miscgear
      system:
        shortcode: decorativegemstones
        quantity: 20
        value: 50
        weight: 1
        durability: 3
    - name: Leather apron for workshop
      type: miscgear
      system:
        shortcode: leatherapron
        weight: 1
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-bktlrg }
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

![[afzndhprnzr|Afzandah Parnâzar]]{float: top-left}

Green eyes in an oval face, golden olive skin, dark black hair, a strong nose, a pointed chin, angular cheeks, arched brows and a mouth that is usually slightly pursed. She is 5'8" and medium in build, and there is a scar on her left ankle.

# Dossier {#dossier}

## Background

### Early Years

They buy the sword and ride away with it, and she stays. Afzandah has watched it happen for eight years — adventurers coming to her workshop in Kethramír's artisan quarter, paying for a blade that took her a month, and vanishing into the wide world to use it — and each time she envies them more. She wants her work tested. She would rather one of her blades came back notched from a real fight than hung in a noble's vault for a lifetime.

She was born to the Parnâzar clan in the oasis city of Kethramír, traders in minerals and half-precious stones of modest standing. Her father, Rezân Parnâzar, fed her curiosity about stones and took her out to the desert prospecting camps; her mother, Isâira, was a Khazryn weaponsmith's daughter, and through that side of the family she first saw metal worked. Her brothers were raised for the trading house. She was apprenticed, quietly, at twelve, to the master armorer Valdrin Corethûs, a gruff man who saw her hands and her eye and wanted both.

### Mastery and Innovation

Seven years with Valdrin gave her the smith's trade and something else: his way of thinking about form and function together. Khazryn work prizes toughness and use. Afzandah became interested in where ornament and use meet — in decorative metalwork that makes a weapon better rather than worse — and by the time she was made Guildmaster at twenty-five and opened her own workshop she had a style of her own: Khazryn geometry laced with flowing arabesques out of old texts and ritual metalwork. Her devotion to Šírvádár in the Voyager's aspect took her further into the meaning of the tools a traveller carries.

### Current Situation

At thirty-three she has standing in the artisans' guild, commissions from across the desert kingdoms, and a set of traditional smiths who consider her work embellishment. She also has a problem she cannot smith her way out of. Work as good as hers costs more than the adventurers who would use it can pay, and the people who can pay want it to look at. She has begun taking dangerous commissions to fund the experimental pieces, and a suspicion that her best work is going to people who will never draw it is behind more of her recent choices than she would admit.

## Psyche

### Personality

Restless in the way that produces both brilliance and obstinacy. At the bench she is absorbed and exact and can spend hours on a detail nobody else would see. She talks about her craft with quiet certainty and can explain every choice in a design. Away from the forge she is reserved, bad at small talk, and short with people she thinks shallow — not from cruelty, from an honesty that does not stop for manners. Her humor, when it shows, is dry and mostly about her clients.

Under the composure she is hungry for movement. Travel, exploration, the road — her devotion to Šírvádár is part of it and the rest is temperament — and she envies the people who commission her weapons and go. It makes her impatient, and it makes her take risks that prudence would not.

### Motivation

Two wants that pull against each other. She wants to be recognized as an artist and left free to make beautiful, powerful things without compromise. And she wants to see those things used — carried into real danger, proved, made part of a story worth telling. She would leave the workshop tomorrow if she believed it would let her watch one of her blades change something.

### Strengths

- **Masterful Metalcraft**: Weapons and armor of the first quality, in a style nobody else can produce, that fight as well as they look.
- **Detailed Perception**: She draws well and sees exactly. A flaw in the steel, a fault in a line, a wrongness in a stone — she catches them.
- **Invention**: New designs, old problems approached sideways, traditional techniques put to uses nobody intended. "How it has always been done" is not an argument she accepts.
- **Resourcefulness in Scarcity**: She knows minerals, can track, and can live in the desert, and she has gone out and found the stone a commission needed herself.
- **Dual Competence**: She can fight — blade, thrown weapon, bow — and climb, which is rare in a smith who spends her days indoors.

### Weaknesses

- **Artistic Stubbornness**: Once she has decided how a piece should be made, a client's wishes and practical objections bounce off her, to the harm of the commission.
- **Commercial Blindness**: She underprices her best work and turns down profitable jobs that bore her, and is poor for it despite her name.
- **Restlessness and Wanderlust**: She is bad at keeping clients over years, and she could leave a bench full of half-finished commissions if the road called loudly enough.
- **Low Interpersonal Grace**: She cannot charm or persuade, cannot manage a room, and has lost patrons to plain honesty.
- **Physical Limitations in Combat**: Capable, not strong. A trained warrior would outlast her, which limits how far she can test her own creations.

## Social

### Patrons

- **Zephyr-Merchant Kaelûs**: A trader in exotic materials who commissions decorative arms to give to minor nobility. His custom keeps the workshop open; his taste bores her.
- **Lady Savâ d'Anûr**: A desert knight of some reputation who has had several war-weapons from her and uses them. They respect each other, and Savâ sometimes invites her to hear about the campaigns.
- **High Artisan Valdrin Corethûs**: Her old master, retired, proud of her, and still sending her the technical problems he cannot be bothered with.

### Enemies

- **Master-Smith Thordûn Blackforge**: A traditional weaponsmith who calls her work frivolous, steers clients away from it, and spreads doubts about whether her blades hold.
- **The Ferric Brotherhood**: Traditionalist craftsmen who have formally objected to her standing in the guild on the grounds that her work fails its standards of martial use. They have tried to have her expelled and have not managed it yet.

### Affiliations

- **Kethramír Artisans' Guild**: Full Guildmaster, dues paid, attendance minimal, patience with its conservatism gone.
- **The Devotees of Šírvádár**: The Voyager's temple in Kethramír, whose seasonal rites she keeps and whose priests tell her that her wanderlust is a calling.

## Plot Hooks

1. **The Caravan Master's Commission**: A caravan master named Hesûd al-Kethrim is assembling fighters and craftsmen for a distant noble's expedition into the Shattered Peaks, where mithral is rumored, and wants her for her skill with strange materials in hard conditions. The pay would fund a year of experiments. He is vague about the dangers. The noble behind him is the sorcerer-lord Vex'thar, and the mithral is for a rite, and she will not learn that until she has signed.

2. **The Stolen Masterwork**: A ceremonial curved blade she made for Lady Savâ d'Anûr three years ago has been taken from a secure vault, deliberately, by assassins in a rival house's pay. Savâ fears it will be used for a murder and the scandal will fall on both of them, and has asked Afzandah to help get it back before it is. It is the first time she has been asked to follow one of her blades out into the world.

3. **The Experimental Forge**: A scholar and self-taught alchemist, Dr. Malachar Venn, has proposed a collaboration: his method for binding elemental essences into metal, in exchange for her hands on one weapon made to his exact design. Months in, she has understood that his essences come from something dangerous and that the weapon is being made to carry something worse than fire. She can finish it, spoil it or hand him over, and none of those undoes what she has already made.

4. **The Wanderer's Return**: Kael Dustrunner, a travelling merchant who bought her early work and used it as a mercenary across the known world, is back in Kethramír after ten years with stories of the fights her blades won. He also carries an offer from a warlord in the eastern kingdoms who wants a whole arsenal from her. The stories about the warlord are of slavery and cruelty. Kael says they are exaggerated.

5. **The Challenge of the Desert Kings**: The gathering held once every seven years has, for the first time in a decade, an event for artisans: a working weapon forged under judges' eyes. Winning would carry her name past the Khazryn Desert. Thordûn Blackforge is entered, has been training, has acquired some advantage he is not talking about, and has let it be known he means to shame her in front of every craftsman in the region.
