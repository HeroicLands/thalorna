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

Hallveig Stormrót carries herself with the natural authority of the Nordheimn nobility, though her features speak of something deeper—a woman caught between two worlds. Slender and lithe, she stands with the practiced grace of someone trained from childhood to command attention. Her face is angular and striking, with sharp cheekbones, a broad forehead, and a steady gaze framed by thick brows that give her a perpetually appraising expression. Her green eyes are luminous and oddly distant, as though she is calculating probabilities in some unseen realm. Her blonde hair, plaited in a thick braid, is bound with silver wire wound in fine patterns. There is something almost otherworldly about her presence—a shimmer in the air around her that hints at veils not quite seen, at realities that shift when one looks away.

# Dossier {#dossier}

Born into the Stormrót clan, one of [[place-frostmark|Frostmark]]'s most prominent noble houses, Hallveig's path should have been simple: marry well, manage estates, produce heirs. Instead, her childhood was shaped by an unusual gift—the ability to perceive and manipulate the boundary between seen and unseen, a talent she would later recognize as akin to what the southern scholars call Zephäris magic, the school of illusion. In [[affiliation-kngdmnrdhm|Nordheim]], such things came under different names: the work of a völva, a seer-woman who walked between worlds through trance and vision. That Hallveig manifested these gifts was not inherently scandalous; women had always been the keepers of seidr, the mystical knowledge that flowed through the land.

Her refusal to keep it private was what made her dangerous to her family. At nineteen, she insisted on formal training under old Thórfrídr the seer-priestess, an order that her father—a practical warrior and chieftain—nearly forbade. Instead, she struck a compromise: she would cultivate a public identity as a scholar of ancient manuscripts and dead languages (respectable for a noblewoman, intellectually rigorous), and she would pursue seidr studies under guise of "ancestral research." For sixteen years, she lived this double life: publishing scholarly treatises on Old Aelwythan inscriptions (which did have real value), attending [[affiliation-panepistmm|Panepistemium]] chapterhouses across northern lands, and quietly teaching herself the deep arts—seeing through veils and then reshaping them, making things appear and disappear, bending perception itself to her will.

The Nordheimn name for her work was gefjallan—enchantment, illusion, the glamour-craft of the old tradition. But Hallveig had done something dangerous: she had systematized it, married it to written theory, extended its reach far beyond what seidr tradition typically allowed. And she had begun to specialize in something that even other völvur viewed with wariness: the craft of making others _forget_, of rewriting memory itself, of creating cascading layers of false perception so involved that even a trained seer could become lost in them.

Now at thirty-seven, Hallveig maintains her scholarly cover with elaborate care, but her reputation in the hidden circles of Nordheim's mage-craft runs far deeper. She is known as Lysandra Aetherwind among the Epistemium's chapters, a visiting scholar of ancient lore. She is known as the Mistress of Veils among the practitioners who traffic in forbidden knowledge. And she is known to her family as a disappointment—a woman who will never marry because no man of suitable rank would accept a wife so wholly consumed by her scholarly pursuits.

## Psyche

Hallveig is driven by an intellectual hunger so deep it verges on compulsion. She seeks knowledge not for power's sake, though power certainly flows from her mastery, but because she believes in the fundamental truth that [[lore-oinndty|Ódinn]] himself discovered: that understanding reality from every angle, every perspective, every hidden vantage point is the closest mortals come to divinity. She is ambitious, yes—fiercely so—but her ambition is not for rank or wealth; it is for mastery, for the moment when the impossible becomes merely difficult, when mysteries yield to clarity.

Her greatest strengths lie in her extraordinary intellect and her unshakeable will. She has an aura that unsettles those around her, a presence that makes people instinctively trust her claims about the world, even when those claims defy ordinary perception. Her argument is almost supernatural in its precision; she can argue anything convincingly and make a listener question their own sanity in the process. She is a master of layered deception, not through moral crookedness but through fundamental understanding of how perception works—which details matter, which ones we ignore, where human attention naturally flows and where it falters.

But this same quality that makes her brilliant makes her dangerous. She has become distant from other people, in a way that troubles even her. The constant manipulation of perception, the layers of false identity, the constant awareness of how easily people can be made to believe anything—it has hollowed something in her. She struggles to feel close to anyone; she finds herself constantly analyzing people instead of relating to them, calculating their vulnerabilities instead of their merits. She is reckless in her pursuit of knowledge, willing to risk others' safety for understanding, and increasingly conscious of that willingness without being able to stop it. And there is a brittleness to her—a sense that if someone were ever to fully penetrate her carefully constructed reality, if someone were to make her _see herself_, she might shatter.

## Social

Hallveig's official position is as an independent scholar affiliated with the Panepistemium, particularly with the Heliónis chapterhouse, where she conducts research into ancient Nordheimn inscriptions and the linguistic roots of rune-craft. In this capacity, she is entirely legitimate, known for careful scholarship and fresh interpretations of historical texts. Several of her papers on the etymology of Old Aelwythan have been considered definitive within academic circles.

She also maintains networks within Nordheim's hidden magical circles—practitioners of the old seidr traditions, rúnameistari who work outside Ódinn's formal clergy, collectors of texts that the authorities prefer forgotten. These connections are not _hostile_ to Ódinn's faith so much as orthogonal to it; Ódinn himself values the pursuit of knowledge at any cost, and his most learned servants often turn a blind eye to heterodox methods.

Her status as a Stormrót noble gives her considerable insulation. Attacking her directly would require political will her enemies may not possess. But it also makes her visible in ways she increasingly resents—her family expects her to eventually accept her duty and cease this "scholarly phase."

## Companions

### Patrons and Allies

**Thórfrídr of the North**, her original seidr teacher (now in her seventies) and the person Hallveig trusts most in the world. Thórfrídr is her spiritual anchor, the one person who knows the full extent of Hallveig's work and does not judge it. Their bond is rarely acknowledged publicly but is absolute.

**Jarl Kaer Stormrót**, Hallveig's uncle and effective head of the Stormrót household, provides financial support and family protection, though he knows nothing of the true scope of her studies. He believes her to be an eccentric scholar and accepts this with the tolerance of a man who understands that noble families contain eccentrics.

**The Collector of Amber**, a mysterious figure connected to the Epistemium's more liberal elements, supplies rare texts and acts as a fence for Hallveig's acquisitions. Identity unknown; all communication is by letter.

### Enemies and Rivals

**Jón the Iron**, a brutal rúnameistari who views Hallveig's systematization of seidr as a violation of tradition and a threat to the old ways. He has made subtle attempts to undermine her reputation and would not mourn her disappearance. The threat he poses is growing.

**The Stormrót Succession**, specifically Hallveig's cousin Erik and his ambitious wife, who see her scholarly pursuits as a dangerous anomaly and believe a woman of her station should be married off to secure alliance. They have been quietly lobbying Jarl Kaer to force the issue.

## Plot Hooks

1. **The Memory That Shouldn't Exist** — A scholar from southern lands arrives at a chapterhouse with documents that describe Hallveig's illusion work in precise detail—impossible documents, from sources that predate her research. He is being watched carefully, and soon others will notice him. Hallveig must determine if he is a threat, a potential ally, or something far worse, before interested parties move against him.

2. **The Victim Who Remembers** — One of Hallveig's memory-veils, carefully constructed years ago to protect a client from dangerous knowledge, begins to unravel. The person involved is starting to remember things they were made to forget, and those memories are tearing them apart mentally. Hallveig must either repair the veil (risking discovery if she moves openly) or allow the person to break, potentially revealing her hand.

3. **Jón's Challenge** — Jón the Iron has gathered evidence of Hallveig's systematic deviation from traditional seidr and brings formal complaint before the High Völva, the spiritual authority of the northern mysteries. Hallveig is summoned to defend herself, knowing that if she is found in violation, she may lose her ability to practice openly—or worse. Yet admitting what she has made of the craft might brand her a heretic.

4. **The Archivist's Fall** — The Collector of Amber is arrested by political rivals through means Hallveig does not understand. The texts they handle, the networks they maintain, could lead directly to her if interrogated. Hallveig must choose: rescue a contact that few people know she's connected to, potentially revealing her hand to powerful enemies, or abandon them to their fate.

5. **The Truth Behind the Veil** — An ancient inscription Hallveig uncovered in her scholarly work references seidr practices that suggest someone, centuries ago, was doing what she is doing now—systematizing illusion into a formal magical discipline. The inscription points to a hidden cache of texts. The effort to reach it undetected will test every skill she possesses, and retrieving the texts will make her a target for every faction that deals in forbidden knowledge.
