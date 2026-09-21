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

Afzandah stands 5'8" tall with a medium build. She has golden olive skin, dark black hair, and green eyes. Her features include an oval face, a strong nose, a pointed chin, slightly pursed lips, arched brows, angular cheeks. A distinguishing mark is a scar on the left ankle.

# Dossier {#dossier}

## Background

### Early Years

Afzandah was born into the Parnâzar clan in the oasis city of Kethramír, where her family had long held a modest reputation as merchants trading in minerals and semi-precious stones. Her father, Rezân Parnâzar, encouraged her curiosity about gemstones and their properties, often taking her to the prospecting camps in the surrounding desert. Her mother, Isâira, was the daughter of a Khazryn weaponsmith, and it was through her mother's lineage that Afzandah gained early exposure to metalworking. While her brothers were groomed to continue the family's trading enterprise, Afzandah was quietly apprenticed at age twelve to the master armorer **Valdrin Corethûs**, a gruff but brilliant craftsman who recognized her exceptional dexterity and creative instinct.

### Mastery and Innovation

Under Valdrin's tutelage for seven years, Afzandah absorbed not merely the technical skills of armor-smithing and weapon-crafting, but the deeper philosophy of her mentor's approach to form and function. Where traditional Khazryn craftsmanship prized durability and martial practicality, Afzandah became fascinated by the intersection of artistry and utility—how decorative metalwork could enhance rather than compromise a weapon's effectiveness. After achieving the rank of Guildmaster at age twenty-five, she established her own workshop in Kethramír's artisan district, earning the patronage of wealthy travelers, minor nobility, and adventurers seeking unique arms. Her signature style blends geometric Khazryn patterns with flowing arabesques influenced by her study of ancient texts and ritual metalwork. The devotion of the Voyager aspect of **Šírvádár** drew her deeper into understanding the spiritual significance of the tools that aid travelers in their journeys.

### Current Situation

Now thirty-three, Afzandah operates her workshop independently, having secured standing within the local artisans' guild—though not without friction from more traditional smiths who view her work as impractical embellishment. Her reputation has grown among discerning clients, and she receives commissions from across the desert kingdoms. However, she struggles with the commercial reality that truly exceptional work commands prices that many adventurers cannot afford, while those who can afford her creations often seek her for purely decorative pieces rather than functional arms. This tension between artistic vision and market demand gnaws at her, and she has begun taking on more dangerous commissions simply to fund her experimental designs. A nagging suspicion that her talent is being wasted on wealthy collectors who will never use their weapons in true combat drives many of her recent decisions.

## Psyche

### Personality

Afzandah possesses a restless creative energy that manifests as both brilliance and stubbornness. In her workshop, she is methodical and absorbed, capable of focusing for hours on minute details that others would dismiss. She speaks with quiet confidence about her craft, her reasoning sharp and her design choices articulate. Yet away from metalwork, she can be aloof and reserved, uncomfortable with small talk and dismissive of those she perceives as intellectually shallow. She is not cruel in this assessment—merely honest to the point of social friction. Her sense of humor, when it surfaces, tends toward dry observation and witty commentary about the foibles of her clients.

Behind her composed exterior lies a deeper restlessness. Afzandah is fascinated by movement, travel, and exploration—interests rooted in her devotion to Šírvádár—and she envies the adventurers who commission her weapons and then vanish into the great wide world to use them. She wants her creations to be tested in the furnace of real experience, not left gathering dust in a noble's vault. This hunger for something beyond her current life occasionally surfaces as impatience and a willingness to take risks that pragmatism would counsel against.

### Motivation

Afzandah is driven by two competing desires that threaten to tear her life in opposite directions. She seeks artistic recognition and the freedom to pursue her creative vision without compromise—to create objects of genuine beauty and power that will be remembered and treasured. Yet she also craves the tangible satisfaction of seeing her work used in earnest, tested against real adversity, acknowledged by the world not as decorative luxury but as essential tools in stories worth telling. She would leave her comfortable workshop in an instant if she believed it would grant her the opportunity to watch her weapons change the course of events in the great world beyond the desert.

### Strengths

- **Masterful Metalcraft**: Afzandah's technical skill in metalworking is exceptional, allowing her to create weapons and armor of superior quality and unique design. Her weapons balance lethal function with artistic beauty in ways that few craftspeople can achieve.

- **Detailed Perception**: Her high perception (14) and exceptional drawing ability (16) grant her a keen eye for structural detail, material properties, and visual nuance. She can spot flaws in materials and design with remarkable accuracy.

- **Creative Innovation**: With creativity at 17, Afzandah constantly imagines new designs, novel approaches to ancient problems, and experimental applications of traditional techniques. She refuses to be bound by "how things have always been done."

- **Resourcefulness in Scarcity**: Her high expertise in mineralogy and tracking, combined with survival skills, makes her capable of sourcing rare materials and even prospecting for valuable stones herself when commissions require extraordinary components.

- **Dual Competence**: She is not merely an artisan—her combat-relevant skills (melee, throwing, archery, climbing) mean she is capable in the field, a rarity among workshop-bound craftspeople.

### Weaknesses

- **Artistic Stubbornness**: Afzandah's high creativity and strong reasoning often manifest as inflexibility. Once she has determined the "correct" way to execute a design, she resists client feedback and practical modifications, sometimes to the detriment of commissions.

- **Commercial Blindness**: She struggles to understand or appreciate the commercial value of her work, often underpricing exceptional pieces or refusing profitable but creatively "uninteresting" commissions. This has left her perpetually struggling financially despite her reputation.

- **Restlessness and Wanderlust**: Her low empathy (11) and driving need for travel and adventure make her poor at sustained client relationships. She can abandon a workshop full of half-finished commissions if the call to adventure grows strong enough.

- **Low Interpersonal Grace**: With modest eloquence (12) and empathy, she is poor at charm and persuasion. She cannot negotiate effectively, cannot manipulate social situations, and often alienates potential patrons with undiplomatic honesty.

- **Physical Limitations in Combat**: While capable, her strength is modest (12). In prolonged martial engagement, she would be outmatched by dedicated warriors, limiting her ability to truly "test" her creations in the field.

## Social

### Patrons

- **Zephyr-Merchant Kaelûs**: A wealthy trader in exotic materials who regularly commissions Afzandah for unique decorative arms to gift to minor nobility. His consistent business sustains her workshop, though she finds his taste uninspired.

- **Lady Savâ d'Anûr**: A desert knight of some renown who appreciates Afzandah's work and has commissioned several functional war-weapons. Their relationship is based on mutual professional respect, and Savâ occasionally invites Afzandah to hear tales of her campaigns.

- **High Artisan Valdrin Corethûs**: Her former master, now retired, who takes pride in Afzandah's accomplishments and occasionally directs difficult technical problems to her for consultation.

### Enemies

- **Master-Smith Thordûn Blackforge**: A traditional weaponsmith who views Afzandah's ornamental designs as frivolous and has actively discouraged clients from commissioning her work. He sees her as a threat to the reputation of "serious" arms-craft and spreads rumors about the durability of her weapons.

- **The Ferric Brotherhood**: A loose association of traditionalist craftspeople who have formally protested her advancement within the artisans' guild, claiming her work violates the guild's standards for martial functionality. They have attempted, thus far unsuccessfully, to have her expelled.

### Affiliations

- **Kethramír Artisans' Guild**: Afzandah holds full Guildmaster standing, though her relationship with the organization is fraught. She pays her dues and maintains the minimum necessary involvement, frustrated by their conservatism.

- **The Devotees of Šírvádár**: She maintains loose affiliation with the temple of the Voyager in Kethramír, participating in seasonal rituals and seeking spiritual guidance regarding her wanderlust. The priests encourage her to see travel and adventure as forms of sacred service.

## Plot Hooks

1. **The Caravan Master's Commission**: A caravan master named **Hesûd al-Kethrim** arrives in Kethramír with an extraordinary offer. He has been hired by a distant noble to assemble a company of capable warriors and craftspeople for a dangerous expedition into the Shattered Peaks, where legendary mithral deposits are rumored to exist. He seeks Afzandah specifically, having heard that she can work with exotic materials under harsh conditions. The commission is substantial—enough to fund a year of experimental work—but it requires her personal involvement in the expedition's field operations. Hesûd is vague about the precise dangers, mentioning only "environmental hazards" and "territorial complications." Afzandah's expertise in mineralogy and material sourcing would be invaluable, but she would be away from her workshop for months. The real danger is that Hesûd's patron is actually the sorcerer-lord **Vex'thar**, who seeks mithral not for legitimate commerce but for a dark ritual. Afzandah and her party would discover this truth only after accepting the contract.

2. **The Stolen Masterwork**: One of Afzandah's greatest creations—a ceremonial curved blade commissioned by Lady Savâ d'Anûr three years ago—vanishes from a secure vault in the noble's estate. Investigation reveals that the theft was neither simple burglary nor accident: the weapon was specifically targeted by a group of assassins affiliated with a rival noble house. Savâ fears the blade will be used to commit murder, and then the evidence of stolen craftsmanship will create a scandal that damages both their reputations. She asks Afzandah to help track down the weapon before it can be used. This adventure would require Afzandah to leave her workshop, investigate in unfamiliar territories, and confront the uncomfortable truth that her art can be weaponized in moral ways she never intended.

3. **The Experimental Forge**: An eccentric scholar and self-proclaimed alchemist named **Dr. Malachar Venn** arrives at Afzandah's workshop with a proposal that captivates her. He claims to have discovered a method to infuse metalwork with elemental essences, creating weapons that carry magical properties inherent to their material structure. Malachar offers to share his research in exchange for Afzandah's expertise in crafting a specific weapon according to his exacting specifications. The project consumes her attention for months, but gradually she realizes that Malachar's "essences" are derived from dangerous alchemical processes, and the weapon they are creating is designed to channel something far darker and more unstable than mere elemental force. She must decide whether to continue the project, sabotage it, or betray Malachar to authorities—and in doing so, confront her own complicity in creating something potentially catastrophic.

4. **The Wanderer's Return**: An old acquaintance from Afzandah's years of apprenticeship—a traveling merchant named **Kael Dustrunner**—returns to Kethramír after a decade away. Kael once purchased several of Afzandah's early works and used them in dangerous mercenary work across the known world. He brings back stories of how her weapons saved his life, turned battles, and earned respect in places beyond the desert. More importantly, he brings an invitation: a warlord in the eastern kingdoms has heard of Afzandah's creations and wants to commission an entire arsenal. The pay is extraordinary, but the warlord's reputation is dark—rumors of slavery, conquest, and cruelty. Kael insists the stories are exaggerated and that Afzandah's work would only strengthen the position of a powerful leader. The opportunity to see her creations used in earnest is seductive, but so are the moral complications.

5. **The Challenge of the Desert Kings**: A gathering of desert warriors and craftspeople is announced—a competition and festival held once every seven years. The Challenge features tests of combat prowess, craftsmanship, and survival. For the first time in a decade, the artisan categories include a specific event: creating a functional weapon under pressure, in full view of judges and spectators. Victory would cement Afzandah's reputation and earn her contracts beyond the Khazryn Desert. However, one of the competitors is her old rival, Thordûn Blackforge, who has been training intensely and has acquired some advantage—perhaps a powerful new technique or mysterious sponsorship. Afzandah must travel to the Challenge site, prepare her greatest work under the scrutiny of the Desert Kings, and face down a competitor who has made it clear he intends to humiliate her in front of the entire region's craftspeople.
