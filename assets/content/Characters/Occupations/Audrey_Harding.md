---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Audrey Harding
  title: ""
  given: Audrey
  clan: Harding
  home: greywater
  aliases:
    - Shénasenè Callista Tradewind
packFolder: aureldiaaelwyth
shortcode: audryhrdng
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - aelwythanclt
    - landedlordrnk
  homes:
    - aelwyth
  affiliations:
    - kngdmldrth
  gender: female
  species: null
  age: 35
  birthday: 689/1/18
  height: 1.68
  weight: 64
  frame: medium
  appearance:
    eye_color: amber
    hair_color: chestnut
    skin_color: medium
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 45 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 34 } }
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

Audrey Harding is a 35-year-old woman who stands 5'6" tall and is of moderate build. She has a heart-shaped face with defined cheekbones, a smooth forehead, and a rounded jaw that leads to a firm chin. Her narrow amber eyes sit beneath expressive brows and give her a keen gaze. She has a slightly upturned nose and thin lips. She has medium-toned skin with a weathered complexion. Her chestnut hair flows past her shoulders.

Her weathered complexion speaks of years spent traveling, moving between the coastal settlements and inland trading routes of [[place-aelwyth|Aelwyth]]. There is something almost predatory about her stillness – she sits motionless during conversations, her amber eyes tracking movement with a raptor's precision. Her hands, when they move, are elegant and deliberate; she gestures rarely, but when she does, the gesture carries weight. She favors richly dyed silks and fine linen, always impeccably maintained, though her clothing is tailored for function as much as display. Her style is distinctly Aelwythan in its fusion of the mystical and the mercantile – there is something otherworldly about her presentation, as though she has traveled between states of being as well as across geography.

# Dossier {#dossier}

Audrey Harding was born into the Harding family, a minor noble house of Aelwythan origin with deep roots in [[place-greywater|Greywater]]'s trading networks. Her childhood was spent in the liminal spaces between the five realms of Aelwyth, traveling with her merchant-father between ports and inland markets, learning the languages of trade and the languages of power. Her father, Hrodgar Harding, was a brilliant negotiator and trader who rose from minor merchant to something close to a trading prince – but who also harbored a ruthless pragmatism about the nature of commerce and of human beings.

At the age of sixteen, Audrey was betrothed to cement an alliance between her house and a northern trading concern. The marriage was political and loveless from its inception. She produced one child – a daughter named Lyssa – before her husband was lost at sea in a trade dispute that some whispered was no accident. By twenty-three, Audrey was widowed, with moderate wealth, and facing the choice that confronts many Aelwythan noblewomen: become a recluse, remarry into another trading family, or find a third path.

She chose the third path. Recognizing that her brilliant mind for mathematics, contract language, and the subtle arts of negotiation would be wasted in a conventional marriage, she petitioned to enter the priesthood of Vénusia. The request was startling – Vénusia's priesthood is not typically a refuge for the ambitious – but Audrey presented a compelling argument: Vénusia, goddess of commerce and prosperity, required priests who understood the sacred nature of trade at a deep level. The Temple, recognizing both her intellectual gifts and her connections to Aelwyth's trading elite, accepted her.

Her training in the priesthood was unconventional. While she mastered the theological framework of Vénusia – the belief that prosperity is a form of divine grace, that exchange and commerce create the flow of abundance through the world – she focused intensely on practical skills: contract law, mathematics, the languages of trade, the political and spiritual dimensions of commerce. She developed a reputation as a priest who could mediate between merchant houses, draft contracts that honored both parties while leaving room for profit, and locate opportunities for expansion and growth that others had missed.

By her early thirties, Audrey had become something close to indispensable to Greywater's trading class. Major merchant houses retained her as a spiritual advisor and contract mediator. She conducted elaborate rituals for successful transactions, blessed new ventures with ceremonies that participants swore brought good fortune, and maintained a network of contacts that spanned the five realms of Aelwyth and extended into [[place-vylariargn|Vylaria]] and beyond. Her income, drawn from the combined resources of grateful merchants and her own shrewd trading ventures (conducted in the Temple's name, though often primarily in her own interest), made her wealthy on her own account.

Now, at thirty-five, Audrey stands at a peculiar apex of power. She is wealthy, influential, respected by the trading class of Aelwyth, and honored by the Temple of Vénusia as one of its most successful priests. She is also, by her own assessment, deeply unfulfilled. The wealth she has accumulated has not satisfied the hunger that drives her. The influence she has gathered has not answered the question that has haunted her since childhood: what, beyond profit and advancement, justifies existence?

This spiritual emptiness has begun to manifest in her work. She finds herself conducting increasingly elaborate ceremonies not because they are truly necessary but because the ritual, the complexity, the performance, temporarily fills the void. She has begun to take on clients not because they are profitable but because they are fascinating – to study how they think, what they desire, how they can be persuaded or manipulated. She has developed an almost obsessive interest in a series of missing merchant ships, all lost in the misty waters between Aelwyth's realms, all carrying valuable cargo. Some part of her whispers that if she could solve this mystery, could find what is lost, it might answer the question that ordinary wealth and power cannot address.

## Psyche

Audrey is brilliant, with a mind that sees patterns, understands systems, and predicts outcomes with an ease that looks almost supernatural. She thinks in terms of incentives, leverage, and advantage – not out of malice, but because this is the lens through which her mind naturally processes the world. When she meets a person, she instinctively assesses their value, their vulnerabilities, their use to her.

What makes Audrey troubling is not her intelligence but her want of fellow-feeling. She does not naturally understand emotional connection, does not feel drawn to relationships for their own sake, and finds the emotional needs of others somewhat bewildering. She can simulate understanding when it serves her purposes – her eloquence lets her perform compassion convincingly – but the actual felt sense of another person's inner life is opaque to her. She cares deeply about ideas, about solving puzzles, about the elegant geometry of a well-structured deal. People, in her view, are interesting insofar as they are complex systems to be understood, but not in themselves.

This does not make her actively cruel. Audrey operates by a strict code of honor in matters of commerce and contract. She believes that prosperity serves everyone, that growth creates abundance that can be shared. She is capable of extraordinary generosity with those she has decided are worthy of it – her own daughter Lyssa, now eighteen and beginning her own life in the trading world, receives every advantage Audrey's wealth and connections can provide. But this generosity extends only to those within her circle of concern. To those outside that circle, she is indifferent with the completeness of stone.

What drives Audrey is increasingly less the accumulation of wealth (she has enough) and more the pursuit of mystery. She is obsessed with the lost ships, yes, but also with broader questions: why prosperity feels hollow, what the realms of Aelwyth are hiding beneath their mist, and whether anything beyond material success justifies the burden of existence. These questions are not spiritual in any conventional sense – she has no interest in the gods except insofar as they represent interesting metaphysical systems. Rather, they are intellectual riddles that have begun to consume her in a way that wealth never did.

She is searching for something that cannot be purchased or negotiated – and the search is slowly drawing her away from the comfortable world of commerce and toward something she cannot price.

## Social

Audrey holds the formal rank of High Priestess of Vénusia in Greywater, answerable to the Temple hierarchy but operating with significant autonomy in her work. She is consulted by the Temple on major theological and practical matters, and her decisions on contract interpretation carry significant weight.

Among the trading community of Aelwyth and beyond, her standing has few equals. Major merchant houses would not conclude significant contracts without her blessing. Smaller traders pay substantial fees for her consultations. She is known as someone who can broker peace between rival houses, who understands the balance point between profit and what a trade can bear, who can see opportunities that others have missed.

Yet her relationship with the Temple itself is increasingly complex. While she remains formally in good standing, there are whispers that her focus on commerce has become excessive, that her spiritual life has become hollow, that she is drifting toward a kind of spiritual materialism that violates Vénusia's deeper teachings. The Temple hierarchy tolerates her because her success reflects well on the institution, but there is a sense that her path is diverging from what the priesthood should be.

Among her peers in the priesthood, she is respected but not beloved. She is not known for mentoring younger priests, for spiritual teaching, or for the kind of pastoral care that typically characterizes priestly work. She is known for results, for sophistication, for intellectual excellence – but not for warmth.

## Companions

**Patrons:** The merchant houses of Greywater and throughout Aelwyth are Audrey's primary patrons, particularly House Marendo (the largest trading concern in the region) and a loose consortium of northern traders. Her daughter Lyssa, while too young for formal patron relationships, is becoming increasingly involved in her mother's commercial networks. The Temple of Vénusia maintains her officially as a high priestess but is aware that her true loyalties lie with commerce rather than spiritual institution.

**Enemies:** A rival merchant house, House Corven, views Audrey as an obstacle to their expansion plans and suspects (correctly) that she has deliberately manipulated contracts to disadvantage them. Lord Captain Theron, commander of Greywater's harbor guard, has grown suspicious of the lost ships – he suspects smuggling or darker activities and is beginning to believe Audrey may be involved. Several reform-minded priests in the Temple view her as a spiritual cancer – a priest so focused on material gain that she has forgotten Vénusia's deeper teachings about true abundance and human flourishing. A mysterious figure, known only as "the Gatherer," appears to be acquiring information about Audrey's dealings and may be preparing to blackmail or confront her.

## Plot Hooks

1. **The Lost Fleet** – Audrey receives a fragment of evidence suggesting that the missing merchant ships are not lost but deliberately seized and hidden – perhaps by a faction within Aelwyth's government that is using them to maintain leverage over the trading houses. The evidence also suggests someone is selling information about which ships are valuable and when they will be at sea. Audrey must investigate without exposing herself, as the conspiracy may involve people who would consider her a threat if she knows too much.

2. **The Daughter's Choice** – Lyssa, Audrey's daughter, reveals that she wishes to become a priestess of a different god – perhaps one focused on justice or compassion – and wants to refuse the role in the family's trading empire that her mother has prepared for her. Audrey's attempts to explain why this is impractical and foolish only alienate her daughter further. Audrey has to face that her daughter is a person with her own values and desires, and cannot be managed like a contract.

3. **The Heretical Client** – A merchant approaches Audrey with an extraordinary proposal: to become the sole seller of a remedy that seems to cure serious illnesses. The remedy is being produced by a mystical order believed to be operating outside the Temple hierarchy. Audrey is drawn to both the profit potential and the mystery, but accepting would require her to involve herself with a quasi-religious organization that the Temple hierarchy would almost certainly oppose.

4. **The Mirror Offer** – A representative from House Corven approaches Audrey with an astonishing proposal: they will ally with her against other rivals in exchange for her agreement to begin steering her merchant clients toward their house rather than toward Marendo. The offer is seductive – House Corven is offering extraordinary terms – but it would require her to betray House Marendo, the primary patron that has supported her rise. She would profit enormously, but at the cost of her reputation for trustworthiness.

5. **The Mystical Depths** – Audrey's obsession with the missing ships leads her to make contact with practitioners of the kind of esoteric knowledge that Aelwyth's mists are said to hide. They hint that the ships are not lost anywhere on a map but somewhere deeper – that Aelwyth contains passages to places that do not appear on normal maps. They offer to teach her to see what others cannot see, but only if she is willing to risk her reason and her commercial certainty. The choice is between the world of calculable risk and profit and a mystery that cannot be priced or controlled.
