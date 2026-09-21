---
tags:
  - draft
  - mages
  - character
name:
  full: Hallveig Stormrót
  title: ""
  given: Hallveig
  clan: Stormrót
  home: frostmark
  aliases:
    - Lysandra Aetherwind
packFolder: ankarisnordlands
shortcode: hlvgstrmrt
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Mage (Illusion)
  stations: []
  lore:
    - nordheimnclt
    - landedlordrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: female
  species: null
  age: 37
  birthday: 683/9/4
  height: 1.65
  weight: 61
  frame: light
  appearance:
    eye_color: green
    hair_color: blonde
    skin_color: light
    complexion: clear
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 15 } }
    - { model: affiliation-odinn }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-thuravarkscript, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-glas, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-mysticalability-tarot, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 32 } }
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

Hallveig Stormrót carries herself with the natural authority of the Nordheimn nobility, and something else underneath it that a careful eye catches — a woman with a foot in two places. Slender and lithe, she stands the way someone stands who was trained from childhood to be looked at. The face is angular and striking: sharp cheekbones, a broad forehead, thick brows over a steady gaze that gives her a permanently appraising look. Her green eyes are luminous and oddly far away, as if she were working something out in a place nobody else can see. Her blonde hair is plaited in a thick braid bound with silver wire wound in close patterns. There is a shimmer about her that people notice and cannot place, a suggestion of veils not quite seen, of a room that shifts when one looks away from it.

# Dossier {#dossier}

Hallveig goes by three names. To the Epistemium's chapterhouses she is Lysandra Aetherwind, a visiting scholar of ancient lore. To the practitioners who trade in forbidden knowledge she is the Mistress of Veils. To her family she is Hallveig Stormrót, thirty-seven, unmarried, and a disappointment.

The Stormrót are among the most prominent noble houses of Frostmark, and the path laid out for a daughter of the house was plain: marry well, run the estates, bear heirs. What set her off it was a gift that showed in childhood — she could see the seam between the seen and the unseen, and move it. The southern scholars would call that Zephäris magic, the school of illusion. Nordheim has older names for it: the work of a völva, a seer-woman who walks between worlds in trance and vision; seidr, the mystical knowledge that runs through the land and has always been kept by women. The gift itself scandalised nobody.

What made her dangerous to her family was refusing to keep it private. At nineteen she insisted on formal training under old Thórfrídr the seer-priestess, and her father — a warrior and a chieftain, a practical man — very nearly forbade it. The compromise they struck has held for sixteen years. In public she is a scholar of ancient manuscripts and dead languages, a respectable and rigorous pursuit for a noblewoman; the seidr studies travel under the name of "ancestral research." She has published treatises on Old Aelwythan inscriptions that are real scholarship, sat in Panepistemium chapterhouses across the north, and all the while taught herself the deep arts — not only seeing through veils but reshaping them, making things appear and vanish, bending what people perceive to what she wants them to.

The Nordheimn word for the work is gefjallan: enchantment, illusion, the glamour-craft of the old tradition. Hallveig has done something with it that the tradition does not allow. She has systematised it, married it to written theory, and pushed it far past what seidr custom permits; and she has specialised in the thing that other völvur regard with wariness, the craft of making people forget — of rewriting memory, of building layered false perceptions so deep that a trained seer can lose herself in them.

## Psyche

Hallveig is driven by an intellectual hunger that stops just short of compulsion. She wants knowledge not for the power it brings, though it brings a great deal, but because she holds to what Ódinn himself found: that to understand the world from every angle and every hidden vantage is as near to divinity as mortals come. She is ambitious, fiercely, and the ambition is for mastery rather than rank — for the moment the impossible becomes merely hard and the mystery gives up.

The sheet puts her reasoning at 17 and her creativity at 14, her will at 16, her aura at 18 — that unsettling presence that makes people take her word for what the world is, even against their own eyes — and her discourse at 80. She can argue anything and leave you doubting your own senses. She is a master of layered deception, not from crookedness but from an exact understanding of how perception works: which details matter, which are passed over, where attention goes and where it fails.

The same gift is what makes her dangerous, and she knows it. Her empathy is 11 and her morality 11, and the distance has grown on her in a way that troubles even her. The constant handling of other people's perceptions, the layered identities, the daily knowledge of how easily anyone can be made to believe anything — it has hollowed something. She finds herself analysing people instead of knowing them, weighing their weak points rather than their worth. She is reckless in pursuit of knowledge, willing to risk others for it, and increasingly aware of that willingness without being able to stop. And there is a brittleness in her: a sense that if anyone ever got all the way through the reality she has built, if anyone ever made her see herself, she might come apart.

## Social

Hallveig's official standing is as an independent scholar attached to the Panepistemium, in particular its Heliónis chapterhouse, where she works on ancient Nordheimn inscriptions and the linguistic roots of rune-craft. In that capacity she is entirely legitimate, known for exact scholarship and fresh readings of old texts; several of her papers on the etymology of Old Aelwythan are treated as definitive.

Under it she keeps her connections in Nordheim's hidden magical circles — practitioners of the old seidr, rúnameistari who work outside Ódinn's formal clergy, collectors of texts the authorities would rather were forgotten. These circles are not hostile to Ódinn's faith so much as beside it; Ódinn prizes knowledge at any cost, and his most learned servants often look the other way at heterodox means.

Her rank as a Stormrót noble is a good deal of insulation. To move against her directly would take political will her enemies may not have. It also makes her visible in ways she has come to resent: the family expects her, eventually, to accept her duty and put an end to this "scholarly phase."

## Companions

### Patrons and Allies

**Thórfrídr of the North**, her first seidr teacher, now in her seventies, and the person Hallveig trusts above anyone. Thórfrídr is her anchor — the one who knows the whole extent of the work and does not judge it. The bond is almost never acknowledged in public and is absolute.

**Jarl Kaer Stormrót**, her uncle and the effective head of the household, supplies money and the family's protection, and knows nothing of what she actually studies. He takes her for an eccentric scholar and tolerates it as a man does who understands that noble houses produce eccentrics.

**The Collector of Amber**, a figure of unknown identity connected to the Epistemium's more liberal elements, who supplies rare texts and disposes of Hallveig's acquisitions. Every exchange is by letter.

### Enemies and Rivals

**Jón the Iron**, a brutal rúnameistari, holds that her systematising of seidr violates the tradition and endangers the old ways. He has made quiet attempts on her reputation and would not mourn her disappearance. He is becoming more dangerous, not less.

**The Stormrót Succession** — her cousin Erik and his ambitious wife in particular — regard her studies as a dangerous anomaly and hold that a woman of her rank should be married off to secure an alliance. They have been working on Jarl Kaer to force the matter.

## Plot Hooks

1. **The Memory That Shouldn't Exist** — A scholar from the south arrives at a chapterhouse carrying documents that describe Hallveig's illusion-work in exact detail — documents that cannot exist, from sources older than her research. He is being watched, and soon others will notice him. She has to find out whether he is a threat, an ally, or something worse, before the interested parties move on him.
2. **The Victim Who Remembers** — A memory-veil she built years ago to shield a client from dangerous knowledge is coming undone. The person is starting to remember what they were made to forget, and the remembering is tearing them apart. Repair the veil, and risk being seen at work; or let the person break, and risk what breaks out with them.
3. **Jón's Challenge** — Jón the Iron has gathered his evidence of her departures from traditional seidr and laid a formal complaint before the High Völva, the spiritual authority of the northern mysteries. Hallveig is summoned to answer. Found in violation, she may lose the right to practise openly, or worse; and to defend what she has made of seidr is to confess it.
4. **The Archivist's Fall** — The Collector of Amber is arrested by political rivals, for reasons Hallveig cannot make out. The texts they handled and the networks they kept lead straight to her under questioning. Rescue a contact almost nobody knows she has, and show her hand to powerful enemies; or leave them to it.
5. **The Truth Behind the Veil** — An ancient inscription turned up in her scholarly work speaks of seidr practices that suggest someone, centuries ago, was doing what she does now — making illusion into a formal discipline — and points to a hidden cache of texts. Reaching it unseen will take everything she has, and having it will make her a target for every faction that trades in forbidden knowledge.
