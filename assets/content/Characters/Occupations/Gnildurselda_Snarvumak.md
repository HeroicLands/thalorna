---
shortcode: gnldrsldstrmrt
name: {full: Gnildurselda Snarvumak, en: [Lysandra Aetherwind]}
type: being
subType: npc
description: "A noblewoman of the Snarvumak clan of Nalthmark and independent scholar of ancient Nordheimn inscriptions and Old Eilwìthan, affiliated with the Academy's Helionis chapterhouse."
tags: [draft]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage]
  occupation: Mage (Illusion)
  lore: []
  culture: nordheimnclt
  homes: [nalthmark]
  affiliations: {kngdmnrdhm: {rank: 4}, odvar: {rank: 1}}
  gender: female
  species: humanflk
  born: 683.247
  height: 5' 5"
  weight: 134 lbs
  frame: light
  appearance:
    eye_color: green
    hair_color: blonde
    skin_color: light
    complexion: [clear]
    hair_style: braided
    face_shape: angular
    extra_features: []
  packFolder: ankarisnordlands
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 16}}
    - {model: skill-thuravarkscript, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-mysticalability-tarot, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-alch, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 32}}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
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

Gnildurselda Snarvumak carries herself with the natural authority of the [[lore-nordheimnclt|Nordheimn]] nobility, though her features speak of someone who keeps her own counsel. Slender and lithe, she stands with the practiced grace of someone trained from childhood to command attention. Her face is angular and striking, with sharp cheekbones, a broad forehead, and a steady gaze framed by thick brows that give her a perpetually appraising expression. Her green eyes are luminous and steady. Her blonde hair, plaited in a thick braid, is bound with silver wire wound in fine patterns.

# Dossier {#dossier}

Born into the [Snarvumak clan]{.name data-type="affiliation/lineage"}, one of [[place-nalthmark|Nalthmark]]'s most prominent noble houses, Gnildurselda's path should have been simple: marry well, manage estates, produce heirs. Instead she made herself a scholar of ancient manuscripts and dead languages, a pursuit respectable for a noblewoman and intellectually rigorous. For years she has published treatises on [Old Eilwìthan]{.name data-type="skill/language"} inscriptions, several of which have real value, and attended the chapterhouses of [[affiliation-panepistmm|The Academy]] across the northern lands.

Now at thirty-six, Gnildurselda is known among the Academy's chapters as Lysandra Aetherwind, a visiting scholar of ancient lore. Her family knows her as a disappointment, a woman who will never marry because no man of suitable rank would accept a wife so wholly consumed by her scholarly pursuits.

:::secret {title="What the Game Master knows"}
As a child Gnildurselda showed an unusual gift, the ability to perceive and manipulate the boundary between seen and unseen, which she later recognized as akin to what southern scholars call [[affiliation-zefaris|Zefaris]] magic, the school of illusion. In [[place-nordheim|Nordheim]] such things come under different names: the work of a velva, a seer-woman who walks between worlds through trance and vision. That she manifested these gifts was not scandalous, since women have always kept seid, the mystical knowledge that flows through the land. Her refusal to keep it private was what made her dangerous to her family.

At nineteen she insisted on formal training under old [Hrimrún of the North]{.name data-type="being/npc"}, the seer-priestess, an order her father, a practical warrior and Hersvald, nearly forbade. She struck a compromise: she would cultivate a public identity as a scholar of manuscripts and dead languages, and pursue seid under the guise of "ancestral research." For seventeen years she has lived this double life, teaching herself the deep arts, seeing through veils and reshaping them, making things appear and disappear, bending perception itself.

The Nordheimn name for her work is gefjallan, enchantment or glamour-craft. She has systematized it, married it to written theory and extended its reach far beyond what seid tradition typically allows, and she has specialized in something other velvur view with wariness: making others _forget_, rewriting memory itself, and creating layers of false perception so involved that even a trained seer can become lost in them. Among practitioners who traffic in forbidden knowledge she is the Mistress of Veils.
:::

## Psyche

Gnildurselda is driven by an intellectual hunger so deep it verges on compulsion. She seeks knowledge not for power's sake but because she believes in the truth that **[[lore-odvardty|Odvar]]** himself discovered: that understanding reality from every angle, every perspective, every hidden vantage point is the closest mortals come to divinity. She is fiercely ambitious, but not for rank or wealth; it is for mastery, for the moment when the impossible becomes merely difficult, when mysteries yield to clarity.

Her greatest strengths lie in her extraordinary intellect and her unshakeable will. She has become distant from other people, in a way that troubles even her. She struggles to feel close to anyone and finds herself constantly analyzing people instead of relating to them. She is reckless in her pursuit of knowledge, willing to risk others' safety for understanding, and increasingly conscious of that willingness without being able to stop it. There is a brittleness to her, a sense that if someone were ever to fully penetrate her carefully constructed reality, she might shatter.

:::secret {title="What the Game Master knows"}
She has an aura that unsettles those around her, a presence that makes people instinctively trust her claims about the world, even when those claims defy ordinary perception. Her argument is almost supernatural in its precision; she can argue anything convincingly and make a listener question their own sanity. She is a master of layered deception, not through moral crookedness but through a fundamental understanding of how perception works: which details matter, which ones we ignore, where human attention flows and where it falters. The constant manipulation of perception, the layers of false identity and the awareness of how easily people can be made to believe anything have hollowed something in her.
:::

## Social

Gnildurselda's official position is as an independent scholar affiliated with the Academy, particularly with the [[place-helionis|Helionis]] chapterhouse, where she conducts research into ancient Nordheimn inscriptions and the linguistic roots of rune-craft. In this capacity she is entirely legitimate, known for careful scholarship and fresh interpretations of historical texts. Several of her papers on the etymology of Old Eilwìthan have been considered definitive within academic circles.

Her status as a Snarvumak noble gives her considerable insulation. It also makes her visible in ways she increasingly resents, since her family expects her to eventually accept her duty and cease this "scholarly phase."

:::secret {title="What the Game Master knows"}
She maintains networks within Nordheim's hidden magical circles: practitioners of the old seid traditions, rúnstjori who work outside the formal clergy of the [[affiliation-odvar|Faith of Odvar]], and collectors of texts the authorities prefer forgotten. These connections are not hostile to Odvar's faith so much as orthogonal to it; Odvar himself, in their belief, values the pursuit of knowledge at any cost, and his most learned servants often turn a blind eye to heterodox methods. Attacking her directly would take political will her enemies may not possess.
:::

## Companions

### Patrons and Allies

- **Jarl [[being-hlarthvirsna|Hlarthvir Snarvumak]]:** Gnildurselda's uncle and effective head of the Snarvumak household, who provides financial support and family protection. He believes her an eccentric scholar and accepts this with the tolerance of a man who understands that noble families contain eccentrics.

:::secret {title="What the Game Master knows"}

- **Hrimrún of the North:** Her original seid teacher, now in her seventies, and the person Gnildurselda trusts most in the world. Hrimrún is her spiritual anchor, the one person who knows the full extent of her work and does not judge it. Their bond is rarely acknowledged publicly but is absolute.
- **The Collector of Amber:** A mysterious figure connected to the Academy's more liberal elements, who supplies rare texts and acts as a fence for her acquisitions. Identity unknown; all communication is by letter.
  :::

### Enemies and Rivals

- **The Snarvumak succession:** Gnildurselda's cousin [Snirvorv]{.name data-type="being/npc"} and his ambitious wife see her scholarly pursuits as a dangerous anomaly and believe a woman of her station should be married off to secure an alliance. They have been quietly lobbying Jarl Hlarthvir to force the issue.

:::secret {title="What the Game Master knows"}

- **Jon the Iron:** A brutal rúnstjori who views her systematization of seid as a violation of tradition and a threat to the old ways. He has made subtle attempts to undermine her reputation and would not mourn her disappearance. The threat he poses is growing.
  :::

## Plot Hooks

Documents That Predate the Research
: A scholar from the southern lands arrives at a chapterhouse carrying documents that describe Gnildurselda's research in precise detail, from sources older than her own research. He is being watched, and others will soon notice him. She must learn whether he is a threat, a possible ally or something worse before interested parties act against him.

The Inscription and the Cache
: An ancient inscription Gnildurselda found in her scholarly work points to a hidden cache of texts. Reaching it unseen would test every skill she has, and retrieving it would make her a target for every faction that collects rare old texts.

:::secret {title="Further hooks"}
The Older Systematizer
: The inscription shows that someone, centuries ago, made a formal discipline of illusion within seid, as Gnildurselda does now.

A Veil Comes Undone
: A memory-veil she wove years ago to shield a client from dangerous knowledge begins to unravel, and the client is starting to remember what was forgotten, with the memories tearing at the client's mind. She can repair the veil, risking discovery if she moves openly, or let the client break and perhaps reveal her hand.

Jon's Complaint
: Jon the Iron gathers evidence of her systematic departure from traditional seid and brings it before the ting as a formal complaint. Summoned to answer, she risks losing the ability to practice openly if the assembly finds against her, and admitting what she has made of the craft might brand her a heretic.

:::
