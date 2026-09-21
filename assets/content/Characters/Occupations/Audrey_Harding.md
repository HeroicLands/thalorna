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

Audrey Harding, 35, 5'6", sits very still. She is of moderate build, with a heart-shaped face, defined cheekbones, a smooth forehead and a rounded jaw ending in a firm chin. Narrow amber eyes under expressive brows; a nose that turns up a little; thin lips. Her medium-toned skin is weathered from years on the road between the coastal settlements and the inland markets of Aelwyth, and her chestnut hair falls past her shoulders.

The stillness is the thing people remember. She does not move during a conversation, and her eyes follow whatever moves with a hawk's patience; when her hands do move they are deliberate, and a gesture from her carries weight because there are so few of them. She dresses in rich dyed silks and fine linen, perfectly kept and cut for use as much as show, in the Aelwythan manner that puts the mystical and the mercantile in one garment.

# Dossier {#dossier}

No great contract is concluded in Greywater without Audrey Harding's blessing on it, and the merchant houses would tell you that is theology. It is also the fact that she drafted half of them. She is High Priestess of Vénusia in Greywater, and what she brings the trading class is a priest who reads a ledger as fluently as a liturgy: contract law, mathematics, the languages of trade, and an eye for the opening nobody else has seen.

Audrey was born to the Harding family, a minor noble house of Aelwythan origin rooted in Greywater's trading networks, and spent her childhood on the road with her father between the ports and inland markets of the five realms of Aelwyth, learning the tongues of trade and the tongues of power side by side. Her father, Hrodgar Harding, rose from a small merchant to something near a trading prince on the strength of a brilliant hand at negotiation and a ruthless view of what commerce, and people, are.

At sixteen she was betrothed to seal an alliance with a northern trading concern. The marriage was political and never anything else. She bore one child, a daughter, Lyssa, before her husband was lost at sea in a trade dispute that some whispered was no accident, and by twenty-three she was a widow of moderate means facing the choice Aelwythan noblewomen face: retire, remarry into another trading house, or find a third way.

The third way was the priesthood. She petitioned the Temple of Vénusia, goddess of commerce and prosperity, with an argument rather than a vocation — that a goddess of trade needs priests who understand trade to the bone — and the Temple, weighing her mind and her connections among Aelwyth's trading elite, took her. Her training was her own: she learned the theology, that prosperity is a form of grace and exchange the channel abundance flows through, and she learned contract law harder. By her early thirties the major houses of Greywater kept her on retainer as spiritual adviser and contract mediator. Her rituals over a signing were elaborate and, the participants swore, effective; her contacts ran through the five realms and into Vylaria and beyond; and her own trading, done in the Temple's name and largely in her own interest, made her rich.

At thirty-five she has everything the Harding name was for — wealth, influence, the respect of the trading class, the Temple's honour — and none of it answers the question she has carried since childhood, which is what, past profit and advancement, any of it is for. The emptiness has started to show in the work. Her ceremonies grow more elaborate because the performance fills the hour. She takes on clients because they interest her rather than pay her — to see how they think, what they want, how they could be moved. And she has become fixed on a run of merchant ships lost with valuable cargo in the misty waters between Aelwyth's realms, as if finding what is lost there might answer what money has not.

## Psyche

Audrey's mind is what the Temple's examiners call brilliant, and it shows as an almost uncanny grasp of pattern and system and outcome; she thinks in incentives and leverage because that is how the world arranges itself to her, not from malice. Meet her and she has assessed your value, your weak points and your use to her before you have finished your name.

What makes her troubling is not the mind but what is missing beside it. She does not feel other people. Attachment for its own sake does not draw her, other people's needs puzzle her, and her eloquence lets her perform an understanding she does not have. Ideas she cares for; puzzles; the clean geometry of a well-made deal. People are interesting as systems and not otherwise.

She is not cruel. In commerce and contract she keeps a strict code, and she believes that prosperity serves everyone and that growth makes abundance that can be shared. To those inside her circle she can be extraordinarily generous — her daughter Lyssa, eighteen now and starting out in the trading world, has every advantage Audrey's wealth and connections can buy. To those outside it she is indifferent with the completeness of stone.

What drives her now is less the money, of which she has enough, than the mystery. The lost ships, and behind them larger questions: why prosperity feels hollow, what the realms of Aelwyth hide under their mist, whether anything past success justifies the trouble of existing. None of it is spiritual in the usual sense — the gods interest her as systems, not as gods. They are riddles, and they have begun to consume her as wealth never did. She is looking for something that cannot be bought or bargained for, and the search is drawing her out of the safe world of commerce toward one that is not.

## Social

Audrey holds the rank of High Priestess of Vénusia in Greywater, answerable to the Temple hierarchy and largely left alone by it. The Temple consults her on doctrine and on practice, and her readings of a contract carry weight.

Among the trading community of Aelwyth and beyond, her standing is very nearly without rival. The great houses do not conclude a major contract without her blessing; smaller traders pay handsomely for an hour of her time. She is the one who can make peace between rival houses, who knows where profit stops and ruin begins, who sees the chance that others walk past.

With the Temple itself things are less simple. She remains in good standing, and there are whispers that her commerce has swallowed her faith, that she is drifting into a devotion to wealth that Vénusia's deeper teaching does not sanction. The hierarchy tolerates her because her success reflects on the institution, and knows that her road and the priesthood's are diverging.

Among her fellow priests she is respected and not loved. She does not teach the young, does not give the pastoral care the office implies, and is known for results, polish and intellect rather than warmth.

## Companions

**Patrons:** The merchant houses of Greywater and of Aelwyth generally, above all House Marendo, the largest trading concern in the region, and a loose consortium of northern traders. Her daughter Lyssa is too young for a formal patron's role and is drawn deeper into her mother's networks every year. The Temple of Vénusia keeps her officially as a high priestess and knows where her loyalty actually lies.

**Enemies:** House Corven, a rival trading house, sees Audrey as the obstacle to its expansion and suspects, correctly, that she has bent contracts against it. Lord Captain Theron, commander of Greywater's harbour guard, has grown suspicious about the lost ships — smuggling, or worse — and has begun to think Audrey is in it. A number of reform-minded priests in the Temple regard her as a cancer in the priesthood, a priest so fixed on gain that she has forgotten Vénusia's teaching on true abundance and human flourishing. And someone known only as "the Gatherer" is collecting information about her dealings, with blackmail or confrontation the likely end.

## Plot Hooks

1. **The Lost Fleet** — A fragment of evidence reaches Audrey suggesting the missing ships were not lost but taken and hidden, perhaps by a faction in Aelwyth's government using them as leverage over the trading houses; and that someone is selling word of which ships carry what and when they sail. She has to look into it without being seen to, because the people behind it would count her a danger if she knew.
2. **The Daughter's Choice** — Lyssa tells her mother she means to serve another god — justice, perhaps, or mercy — and will not take the place in the family's trading empire that has been prepared for her. Audrey's explanations of why this is foolish drive her daughter further off. She is faced with a person she cannot improve, only lose.
3. **The Heretical Client** — A merchant brings Audrey the sole right to distribute a preparation that seems truly to cure serious illness. It is made by a mystical order outside the Temple's authority. The profit and the mystery both pull at her; taking it means tying herself to a quasi-religious body the Temple would almost certainly oppose.
4. **The Mirror Offer** — House Corven sends a representative with a proposal: an alliance against every other rival, in exchange for steering her merchant clients away from Marendo and toward Corven. The terms are extraordinary. So is the betrayal of the house that made her, and the reputation for good faith that everything else rests on.
5. **The Mystical Depths** — The lost ships lead Audrey to practitioners of the hidden knowledge Aelwyth's mists are said to keep. They tell her the ships are not lost in any sea but in something stranger — that Aelwyth holds passages to places no chart shows — and offer to teach her to see them, if she will risk her reason and her certainties. The world of calculable risk and profit, or a mystery that cannot be priced.
