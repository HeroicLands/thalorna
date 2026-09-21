---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Björg Drekanótt
  title: ""
  given: Björg
  clan: Drekanótt
  home: ulfheim
  aliases: []
packFolder: ankarisnordlands
shortcode: bjorgdrknt
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Beggar
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: female
  species: null
  age: 29
  birthday: 691/3/3
  height: 1.6
  weight: 54
  frame: light
  appearance:
    eye_color: green
    hair_color: dark_brown
    skin_color: fair
    complexion: pale
    extra_features:
      - a tattoo of a crescent moon on the neck
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 17 } }
    - { model: affiliation-thorr }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-armorgear-hsclk }
    - { model: sohl-sohl-armorgear-hstunic }
    - { model: sohl-sohl-armorgear-hsbrch }
    - { model: sohl-sohl-armorgear-stshoes }
    - name: Worn lute (well-maintained despite appearance)
      type: miscgear
      system:
        shortcode: wornlute
        value: 8
        weight: 1
        durability: 3
    - name: Tin cup (dented but functional)
      type: miscgear
      system:
        shortcode: tincup
        weight: 1
        value: 100
        durability: 3
    - name: Simple necklace (keepsake from parents)
      type: miscgear
      system:
        shortcode: simplenecklace
        value: 2
        weight: 1
        durability: 3
    - name: Wool shawl (extra layer for warmth)
      type: miscgear
      system:
        shortcode: woolshawl
        weight: 1
        value: 100
        durability: 3
    - name: Herbal throat remedies (for singing)
      type: miscgear
      system:
        shortcode: herbalthroatremedies
        quantity: 2
        value: 1
        weight: 1
        durability: 3
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

![[bjorgdrknt|Björg Drekanótt]]{float: top-left}

Björg stands 5'3" tall with a light build. She has fair pale skin, dark brown hair, and green eyes. Her features include an oblong face, a prominent nose, a broad chin, a slightly downturned mouth, dark brows, hollow cheeks. A distinguishing mark is a tattoo of a crescent moon on the neck.

# Dossier {#dossier}

## Background

### Early Years

Björg was born to a fisher's family in the coastal settlements of [[affiliation-kngdmnrdhm|Nordheim]], where the howling wind and crashing waves formed the soundtrack of her childhood. When she was but seven winters old, a devastating storm claimed both her parents at sea. She was taken in by a monastery dedicated to [[lore-thorrdty|Thórr]], where the monks recognized in her a gift for song that seemed to transcend mortal origin. For fifteen years, she learned to weave melodies into prayers, channeling her grief into sacred music that moved even the stoniest hearts to tears. The crescent moon was marked upon her neck at her coming-of-age, a blessing and a burden both.

### The Breaking

A theological schism within the monastery forced Björg to flee when she refused to renounce her personal spiritual experiences in favor of rigid doctrine. Cast out without coin or shelter, she initially despaired—until she discovered that the very gift that had protected her in the monastery could sustain her on the streets. For the past decade, she has survived by her voice and wit, performing in taverns, marketplaces, and shadowed alleyways where coin and coppers fall from purses of those moved by her haunting ballads. She has become something of a ghost, known to street folk as "the Moon Singer," appearing and vanishing like the celestial body marked upon her neck.

### Present Condition

Now a fixture of Nordheim's underworld community, Björg exists in the liminal spaces between respectability and ruin. She shares her meager earnings with other street folk and has become an unofficial keeper of their stories and secrets. Yet her trusting heart has made her prey to those less scrupulous, and more than once her charity has been exploited. Still, she refuses to harden herself, believing each kindness plants a seed that might one day bloom into redemption—whether for others or herself remains uncertain.

## Psyche

### Personality

Björg carries an almost ethereal quality despite her earthly struggles, as though part of her soul still dwells in those monastery halls where her voice once sanctified the air. She speaks with careful deliberation, choosing words as though they were precious gems to be gifted rather than casually scattered. There is a poetic melancholy to her humor, and she laughs rarely but deeply. Those who spend time in her presence often find themselves confessing secrets long buried, for there is something in her bearing that invites vulnerability and promises compassion in return.

Yet this very openness is both her greatest strength and her fatal weakness. She sees the best in everyone, even those who prey upon her generosity, and she struggles to recognize malice when clothed in flattering words. Her idealism remains unbroken by hardship, stubbornly clinging to the belief that love and understanding can transform even the darkest hearts.

### Motivation

Björg seeks not fortune nor fame, but redemption—both her own and that of others. She bears an unshakeable conviction that she was spared from the storm that claimed her parents for a purpose: to be a voice for the voiceless, a song of hope in the darkness that threatens to consume the forgotten. In her quiet moments, she whispers prayers to Thórr, not asking for deliverance, but asking how she might best serve those the gods seem to have abandoned. Every coin given to a hungry child, every tale preserved in song, every moment of human connection forged in the cold streets feels to her like a small victory against the encroaching tide of despair.

### Strengths

- **Transcendent Voice**: Her singing is genuinely remarkable, capable of moving even cynical hearts. It is both a tool for survival and a spiritual practice that connects her to something greater than herself.
- **Emotional Intelligence**: Björg reads people with uncanny accuracy, perceiving the hidden wounds and hopes beneath surface presentations. This makes her an invaluable confidante.
- **Charm and Presence**: She possesses a natural magnetism that draws others to her, despite her humble station. People instinctively trust her, though often to their mutual detriment.
- **Physical Grace**: Years of movement through crowded markets and rooftops have made her graceful and agile; she climbs, dances, and dodges with an economy of motion that belies her slight frame.
- **Resilience of Spirit**: Though her body knows hunger and cold, her spirit refuses to break. She maintains hope and kindness as fierce acts of defiance.

### Weaknesses

- **Reckless Trust**: Björg's inability to see malice makes her vulnerable to exploitation. Con artists and predators find her an easy mark, and she rarely learns from being deceived.
- **Impractical Idealism**: Her insistence on living by spiritual rather than pragmatic principles often leaves her in precarious circumstances that could be avoided through shrewdness.
- **Physical Frailty**: Her light frame and generally poor nutrition leave her vulnerable to illness and violence. In a direct fight, she would be utterly outmatched.
- **Attachment to Loss**: She carries her past—her parents' deaths, her expulsion from the monastery—as an unbridgeable chasm within her soul. This grief sometimes paralyzes her decision-making.
- **Conflict Aversion**: Confrontation causes her genuine distress, and she will often capitulate to avoid conflict, even when standing firm would serve her better.

## Social

### Patrons

- **Brother Aldrin**: A sympathetic former monk from her monastery who occasionally slips her coin and information, though he himself risks punishment for maintaining the connection.
- **Magistrate Keira Stonehearst**: A widow who fell in love with Björg's voice years ago and has quietly ensured she survives each harsh winter, though few know of their association.
- **The Wayfarers' Council**: An informal collective of street folk who provide protection and shelter to Björg in exchange for her songs, which preserve their histories.

### Enemies

- **The Copper Syndicate**: A gang of organized pickpockets and con artists who view Björg's easy trust as an exploitable resource. They have repeatedly victimized her, and she has recently begun to recognize the pattern.
- **Father Cormac**: Her former monastery's new priest, a zealot who views her as a heretic whose very existence challenges the theological authority he seeks to establish. He has forbidden anyone from assisting her.
- **Merchant House Drâk**: A trading family whose wayward son she spurned; his wounded pride has translated into a vendetta, spreading lies about her character.

### Affiliations

- **The Street Chorus**: An informal network of street performers, buskers, and wandering minstrels who share information, performance spaces, and resources.
- **The Devotees of Thórr's Storm**: Though she no longer affiliates with any formal temple, she maintains loose spiritual bonds with independent worshippers who honor the storm god.

## Plot Hooks

1. **The Singing Stone**: A scholar seeking Björg claims that ancient texts describe a legendary artifact—the Singing Stone of Asgard—whose power can only be awakened through a voice of perfect purity. He believes Björg is the key to recovering it from a temple buried beneath Nordheim's oldest districts. What he doesn't know is that darker forces have also caught wind of this rumor, and they would sacrifice far more than ancient stone to possess such power. Björg must navigate the intersection of faith, greed, and ancient magic.

2. **Memory in Melody**: A mysterious figure approaches Björg, offering substantial coin to help recover a stolen musical score said to contain encrypted messages crucial to a political uprising. The requester claims the oppressed people of a neighboring kingdom depend on her aid. Yet accepting this task would make Björg an unwitting pawn in a conflict between nobles, and the true contents of the score—and the true intended use of its decryption—remain obscure and potentially devastating.

3. **The Lost Monastery**: Word reaches Björg that survivors from her monastery have been discovered alive in the mountains after being presumed dead in a catastrophic fire. The monastery's new leadership denies their existence and refuses all inquiries. Björg is torn between the possibility of reunion with former brothers and the danger that investigating will draw unwanted attention from those who might benefit from keeping certain truths buried.

4. **The Child of Storm**: A young orphan appears in the streets, displaying an uncanny ability to predict coming storms with disturbing accuracy. The child becomes attached to Björg, and soon it becomes apparent the monastery—and perhaps darker forces—are searching for the child with considerable urgency. Björg must decide whether protecting this mysterious youth is worth becoming a fugitive herself.

5. **The Silent Singer's Last Song**: An elderly bard, one of Nordheim's few remaining living legends, seeks out Björg specifically, claiming he has trained his entire life to recognize a specific prophecy written in a long-lost saga. According to his interpretation, a singer marked with the crescent moon of Thórr will either be the salvation or the doom of Nordheim in the coming age of darkness. He asks for her help in deciphering which, and whether she has the courage to accept what the answer might demand of her.
