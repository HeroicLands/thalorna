---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Pálina Sánriceth
  title: ""
  given: Pálina
  clan: Sánriceth
  home: solarden
  aliases:
    - Shénasenè Seraphine Dreamweaver
packFolder: aureldiatarvenia
shortcode: palnsnrcth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - tarvenanclt
    - landedlordrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 28
  birthday: 696/3/25
  height: 1.78
  weight: 70
  frame: medium
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: tanned
    complexion: rugged
    extra_features:
      - a scar running down the right leg
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 48 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 70 } }
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

Pálina Sánriceth carries the contradictions of her upbringing on her body. At 28 she stands nearly six feet, lean and muscled like someone used to physical work, and moves with the grace her noble birth drilled into her. The face is more character than beauty — long-boned, strong-jawed, with amber eyes that hold warmth rather than the studied depths of practised charm. The scar down her right leg shows when she wears the flowing ritual robes of Vénusia, and it tells an unfinished story: not an accident, not self-inflicted, deliberate. Her dark brown hair goes in one thick braid and has never been dressed in the styles Tarvénia's coastal nobility prefer. There is an honesty about her that she cannot switch off, even when ceremony asks her to.

# Dossier {#dossier}

The women who come to Pálina's door in Solárden are mostly poor: fishwives, the wives of sailors months gone, unmarried girls with a child coming and nowhere to go. She is a priestess of Vénusia, goddess of seduction and sensual pleasure, and she conducts the fertility blessings and the couples' counsel that are the temple's ordinary trade — and does it with a solemnity closer to a healer's than a courtesan's. Six years in the temple have made her something the temple did not expect: an ascetic in the service of desire.

Pálina was born the eldest daughter of a minor noble house in Solárden, a coastal city where Tarvénia's warrior traditions still held while merchant money rewrote the order of things around them. Her family expected a good marriage. She showed an early bent for the spiritual instead, and, more worryingly to them, a real interest in the lives of ordinary people — the fishing families, the dockhands, the dispossessed — which her family thought dangerously idealistic.

At twenty-two there was a violent incident in the household that left her scarred and, in the family's word, "disgraced." The details are still vague and spoken of in whispers. She was permitted, perhaps encouraged, to seek asylum in the Temple of Vénusia in Solárden, and what her family meant as a tidy exile she turned into a vocation. She threw herself into the priesthood and studied past the rites of seduction and fertility to the philosophy under them: that human connection, physical love and the making of new life are sacred, and to be handled with reverence.

Now she is the priestess who blesses a marriage bed as gravely as a sickbed, who counsels couples as if their happiness were her own concern, and who works above all with the women of the lower classes — through pregnancy, through childbirth, through the poverty that follows motherhood in a society that gives such women almost no protection. In a region suspicious of organised religion and unimpressed by temple hierarchies, she has earned respect by being exactly what she appears to be.

## Psyche

Pálina's defining trait is her absolute sincerity, in a world that has taught her sincerity is dangerous. She believes that pleasure, desire and human connection are the goddess's gifts and that her work is to help people take them with reverence. The conviction is her strength and the place she can be hurt.

Her empathy is 18, her intrigue 75, her guile 51. The first lets her see what people need under what they say they want; the other two let her move through Tarvénia's tangled politics without seeming to. To most people she looks straightforward and guileless. In fact she is careful, and plans; and every plan she makes is for someone else's good rather than her own advancement.

The idealism causes real trouble. She sees the good that might be in people and situations that are past saving, and she is slow to notice when she is being used or her generosity milked. The scar on her leg came from defending someone she believed in, and there are signs it was not the only time her trust was catastrophically misplaced.

Her worst weakness is a kind of spiritual perfectionism. She holds herself to a standard of sincerity and service no human being can sustain, and when she falls short of it she takes the failure as a wound. She can be judgemental toward those who do not share her commitment to honest connection, even as she fights the judgement in herself.

## Social

Pálina's place in Solárden's religious order is an odd one. The Temple of Vénusia gives her formal standing and legitimacy, and her way of doing the office sets her apart from everyone else in it. The high priestess respects her and is exasperated by her: work among the poor brings the temple little revenue and considerable complication. But Pálina's results — the marriages that have held, the births she has brought through, the women whose lives are materially better for her — make her hard to dismiss and harder to control.

Among the common people of Solárden she is something close to a minor saint. Fishing families ask her blessing before a long voyage. Couples come to her for fertility counsel, not because she promises miracles but because she plainly cares whether they thrive. Women in trouble — unmarried and pregnant, wives of absent sailors, widows — know they can come to her and not be judged.

Among the coastal nobility and the merchant class she is thought a little quaint: a priestess who has failed to grasp what she is for. Some respect the commitment. Others think her gifts of charm and persuasion wasted on fishwives. There are whispers that her family put her out of circulation to avoid a scandal and that she has made a virtue of necessity among the poor.

## Companions

**Patrons:**

- **Magdalen Weaver**, a widow who runs a small cloth-working shop employing a dozen women. She comes to Pálina monthly for blessings and counsel and has become something near a friend.
- **Captain Serafin Cordova**, a merchant seaman who credits Pálina's fertility blessing with the child that came after years of none. His family's loyalty to her is fierce.

**Enemies:**

- **Lord Marchand**, a rich merchant who came to Pálina for intimate counsel and was turned away. He takes the refusal as an affront and has begun quietly undermining her name in higher circles, suggesting her work is beneath her station.
- **Father Anselm**, an older priest of the Aurèldían faith whose austere idea of the spirit sits directly against Vénusia's. He regards Pálina as a corrupter of proper religious order and has been pressing for stricter oversight of temple activity in Solárden.

## Plot Hooks

1. **The Impossible Blessing** — A young woman of high birth comes for a fertility blessing and admits that her case is hopeless: her husband is impotent or absent, her family will put her out if she is childless within the year, and she has nowhere else to go. Pálina's commitment to honest remedies over magical ones is tested as the woman begins to hint at more desperate measures.
2. **The Corrupted Blessing** — Pálina learns that her fertility blessings, performed in complete good faith, are being packaged and sold by merchants as magical talismans, at cruel prices, to desperate women across the region. Denounce the fraud in public, or let it stand because it gives those women something to hope for.
3. **The Scarred Past** — Someone from the incident that scarred her leg turns up in Solárden, recognises her, and hints at knowledge that would change how the city sees her. The person may be a threat or may be looking for absolution; either way, the history she has kept so tightly begins to come loose.
4. **The Aristocrat's Daughter** — A high-born woman in a brutal marriage comes to Pálina for help. Pálina begins to give it, and then learns that the husband has real power in Solárden and ties to her own family. Helping the woman may set off a family crisis; abandoning her would betray everything Pálina believes.
5. **The Priestess's Calling** — Word comes that Pálina is being considered for elevation to high priestess of a major regional temple, which would take her out of Solárden and away from the poor to serve the coastal nobility and the merchant class. The honour looks real and suspiciously convenient; someone may want her out of her present place precisely because of how much the lower classes have come to listen to her.
