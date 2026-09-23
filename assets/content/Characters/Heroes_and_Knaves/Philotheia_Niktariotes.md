---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Philothêia Niktariôtês
  title: ""
  given: Philothêia
  clan: Niktariôtês
  home: thalassos
  aliases: []
packFolder: helladbyzaria
shortcode: phlthnktrts
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Musician (Lute)
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: female
  species: null
  age: 26
  birthday: 694/9/6
  height: 1.75
  weight: 66.2
  frame: light
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: tanned
    complexion: null
    extra_features:
      - a tattoo of a tree on the back
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-sacredforge }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-armorgear-wshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - name: Lute (fine instrument)
      type: miscgear
      system:
        shortcode: lute
        weight: 1
        value: 100
        durability: 3
    - name: Spare lute strings
      type: miscgear
      system:
        shortcode: sparelutestrings
        quantity: 4
        weight: 1
        value: 100
        durability: 3
    - name: Collection of folk songs (manuscript)
      type: miscgear
      system:
        shortcode: collectionoffolk
        weight: 1
        value: 100
        durability: 3
    - name: Leather case for lute
      type: miscgear
      system:
        shortcode: leathercaseforlute
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-liteblkt }
    - { model: sohl-sohl-miscgear-frtns }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-containergear-bgsmcvs }
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

![[phlthnktrts|Philothêia Niktariôtês]]{float: top-left}

Philothêia stands 5'9" tall with a light build. She has sun-tanned skin, black hair, and brown eyes. Her features include a narrow face, an aquiline nose, a narrow chin, well-defined lips, thick dark brows, and hollow cheeks. She has a tattoo of a tree on her back.

# Dossier {#dossier}

Philothêia was born in the maritime city of Thálassos into a merchant family of modest means, though her father Niktar once served as a music tutor to minor nobility. Her childhood was filled with the haunting melodies of her homeland – the cry of gulls mingling with lute-song drifting from harbors and squares. At age eight, her father gifted her a lute carved from the wood of a storm-felled oak, an instrument that would become her closest companion.

Her formal training under the exacting Master Ósiris of the Minstrels' Guild lasted six grueling years. While other students labored over composition theory and courtly decorum, Philothêia proved herself an improviser without equal, her fingers dancing across the strings with an intuitive grace that left her instructors both awed and unsettled. Yet her reluctance to master the rigid constraints of formal composition ultimately limited her advancement within the Guild's hierarchy – a source of quiet frustration to this day.

Now twenty-six and a journeyman performer of growing reputation, Philothêia travels the taverns, festivals, and public squares of the Byzarian League. She earns her bread through impromptu performances, custom ballads, and occasional teaching, but her heart yearns for something more: the discovery of the fabled "Lost Anthem," a pre-ancient melody said to be woven into the land itself.

## Psyche

### Personality

Philothêia is a woman of passionate intensity barely contained beneath a disarming exterior. In performance, she exudes charisma and emotional vulnerability – her voice and music seem to lay bare the listener's own hidden longing. Off the stage, however, she is reserved, sometimes distant, wrestling with private doubts about her worth as an artist. Her wit is sharp and occasionally cutting; she harbors little patience for false sentiment or graceless living.

She is driven by an almost obsessive need for authenticity. Crowd-pleasing superficiality disgusts her, yet paradoxically, she cannot resist the addictive warmth of audience approval. This contradiction fuels much of her internal conflict – the struggle between artistic integrity and the practical need to survive.

### Motivation

Philothêia seeks to go beyond mere entertainment. Obsessed with uncovering the mythical songs that, legend claims, once held power to move the very earth and heal the wounded, she views her performances as both livelihood and research. She believes that among the oldest folk melodies – the ones sung by grandmothers and village seers – lie fragments of a greater cosmic song, and that discovering and properly reconstructing this anthem would prove her worth as more than a talented tavern performer. This quest consumes her thoughts and drives her to accept ever more dangerous commissions and risky investigations into obscure musical traditions.

### Strengths

- **Extraordinary Ear for Music**: Philothêia possesses an almost supernatural ability to hear a melody once and reproduce it perfectly. She can identify the emotions embedded in ancient folk songs and often discovers hidden layers of meaning in traditional pieces that others have sung for generations without truly understanding.

- **Master Improviser**: In performance, she requires no written notes. Her creativity flows untethered, allowing her to adapt her playing to any mood, situation, or audience, making her a useful companion in unpredictable circumstances.

- **Acrobatic Grace**: Her combination of high dexterity and agility makes her skilled at climbing, moving silently through crowds, and physical performance. She can vault onto tavern tables or scale a warehouse wall with practiced ease.

- **Navigating Tavern Culture**: She is fluent in the language of inns, barrooms, and common quarters. Few can read a crowd or extract information through seemingly casual conversation and song as expertly as she can.

- **Artisan of the Lute**: Her technical mastery of her instrument rivals the finest court musicians, and her lute itself is a work of subtle craft, capable of producing tones of unusual depth and clarity.

### Weaknesses

- **No Formal Composition Skills**: Despite her gift for performance and improvisation, Philothêia struggles mightily when asked to formally compose original pieces in accepted musical notation. Her instinctive, intuitive approach conflicts with the rigid structures of formal theory, making her appear inexplicably unskilled in written work.

- **Social Naïveté in Noble Courts**: The unwritten rules and hierarchical expectations of high society baffle and frustrate her. She has been known to accidentally offend patrons of rank through blunt speech or perceived disrespect of etiquette.

- **Mercurial Temper**: When questioned about her art or the authenticity of a musical tradition, Philothêia can become sharp-tongued and defensive to the point of self-sabotage. She has walked away from lucrative contracts over perceived slights to musical integrity.

- **Fragile Financial Stability**: Living hand-to-mouth as a traveling performer, she is perpetually vulnerable to misfortune. A single season of poor attendance can leave her desperate.

- **Obsessive about the Lost Anthem**: Her fixation on discovering the mythical proto-song sometimes blinds her to more immediate concerns. She may pursue dangerous leads based on half-remembered legends or cryptic clues that prove wholly imaginary.

## Social

### Patrons

- **Varékos the Heartful**: Proprietor of the Siren's Repose, a beloved tavern in Thálassos's harbor district. He has become something of a father figure to Philothêia, offering her steady employment and shelter, though he worries about her increasingly dangerous quests. Their relationship is complex – he has never concealed romantic interest, which Philothêia gently deflects with affection but firm boundaries.

- **Lady Aéthna Tethyríon**: An aging widow of minor noble standing who became enchanted with Philothêia's playing at a merchant's wedding. She now sponsors the musician's travels and has deep connections throughout the League's nobility, which Philothêia leverages despite her distaste for aristocratic politics.

- **The Fisher-Folk of Coastal Villages**: Widespread informal patronage from common people in maritime communities. They see in Philothêia a keeper of the old songs, and they share information about any stranger asking about ancient music.

### Enemies

- **Démetros the Flawless**: A virtuoso courtier-musician of aristocratic birth who views Philothêia as an untutored talent who has undeservedly garnered Guild attention. He has spread rumors questioning her authenticity and occasionally purchases her commissions only to cancel them publicly, damaging her reputation.

- **The Orthodox Guild Establishment**: While she holds membership in good standing, several senior Guild masters view her refusal to commit to formal composition as a betrayal of their teachings. They have subtly blacklisted her from high-profile teaching positions.

- **Kârell the Sage-Hunter**: An obsessive collector of arcane lore who believes Philothêia possesses information about the Lost Anthem that rightfully belongs to him. He has begun following her travels, offering payment for her research, and growing more threatening as she refuses his advances.

### Affiliations

- **Minstrels' Guild of the Byzarian League**: Her official membership, though tensions exist with the establishment hierarchy regarding her unconventional approach.

- **The Siren's Repose**: Effectively her home base and regular venue for performances.

- **The Fellowship of the Old Songs**: An informal network of folklorists, scholars, and village storytellers scattered across three kingdoms. She is a junior member seeking to gain standing through her discoveries.

## Plot Hooks

1. **The Tavern Tragedy**: A beloved innkeeper in a village where Philothêia has been playing is found dead – apparently poisoned – and his entire collection of hand-copied song manuscripts is missing. Philothêia discovers that three of the songs in his collection matched fragments of what she believes are Lost Anthem verses. Now she must find out whether his death was coincidence or something darker, while competing against other unknown parties also seeking these rare manuscripts. Her investigation may lead her to discover a secret organization collecting and suppressing dangerous pre-ancient music.

2. **The Counterfeit Bard**: A charlatan claiming to be a long-lost rival composer from Philothêia's Guild days arrives in her current city, giving elaborate performances of "newly recovered" ancient music that attract massive crowds. Philothêia recognizes the songs as modern compositions passed off as ancient, but proving the deception could expose uncomfortable truths about her own research and credibility. Meanwhile, this impostor may actually be pursuing the same Lost Anthem fragments Philothêia seeks – perhaps they have a shared history she has forgotten or suppressed.

3. **The Silent Prison**: An elderly woman approaches Philothêia after a performance, claiming to be a survivor of an ancient disaster where the Lost Anthem was used as a weapon of terrible power. The woman is nearly mute and much damaged, but hums fragments of unmistakably pre-ancient melodies. She will only trust Philothêia and only communicate through music and song. Helping her recover her story could unlock dangerous knowledge about why powerful forces want the Lost Anthem buried and forgotten – and may put Philothêia in mortal danger.

4. **The Wedding that Never Was**: Philothêia receives a commission from a mysterious patron to learn a specific complex melody by a certain date, payment generous enough to resolve all her current debts. The melody matches one she has been obsessively searching for. When she arrives to perform, she discovers the supposed wedding is a ruse – she has been manipulated into learning a piece that is actually a magical key, a spell-song that will unlock a sealed chamber when performed. She is caught between paying her debts and discovering what is being so carefully locked away from the world.

5. **The Guild Master's Secret**: Master Ósiris, her former instructor, falls gravely ill and requests her at his bedside. Before witnesses, he tells her that he has spent forty years seeking the Lost Anthem to atone for a great mistake – that he knew of its location once, as a young man, but rejected it as heresy. He reveals cryptic information suggesting it lies hidden beneath the earth in a place no one has excavated, protected by traps designed by the ancients themselves. He dies before explaining more, and Philothêia can share this information with the Guild or pursue this most tantalizing lead alone, knowing others in the Guild may have also heard his confession.
