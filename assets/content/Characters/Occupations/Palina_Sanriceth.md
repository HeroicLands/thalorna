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

Pálina Sánriceth carries the contradictions of her upbringing inscribed upon her body. At 28, she stands nearly six feet tall with the lean, muscled frame of someone accustomed to physical labor, yet moves with the grace instilled by her noble birth. Her face is notable more for its character than classical beauty—long-boned, strong-jawed, with amber eyes that hold real warmth rather than the calculated depths of pure charm. The scar running down her right leg, visible when she wears the flowing ritual robes of Vénusia, tells an unresolved story: not accidental, not self-inflicted, but deliberate. Her dark brown hair, worn in a single thick braid, has never been fashioned into the elaborate styles preferred by [[place-tarvenirgn|Tarvénia]]’s coastal nobility. There is something fundamentally honest about her appearance—she seems incapable of pretense, even when ceremonial duty demands it.

# Dossier {#dossier}

Pálina was born the eldest daughter of a minor noble house in Solárden, a coastal city where the warrior traditions of Tarvénia still held sway even as merchant wealth began to reshape the region’s hierarchy. Her family expected her to make an advantageous marriage, but Pálina showed early aptitude for matters spiritual rather than dynastic. More troublingly, she showed a real interest in the lives and struggles of ordinary people—the fishing families, the dock workers, the dispossessed—an interest her family considered dangerously idealistic.

At twenty-two, following a violent incident in her family’s household that left her scarred and ostensibly "disgraced" (the details remain vague even now, spoken of only in whispers), Pálina was permitted—indeed, perhaps encouraged—to seek asylum in the Temple of Vénusia in Solárden. What her family intended as a convenient exile, Pálina made into a true calling. She threw herself into the priesthood with singular intensity, studying the deeper philosophy beyond the rituals of seduction and fertility blessing that constitute Vénusia’s work: the understanding that human connection, physical love, and the creation of new life are sacred acts worthy of reverence.

Now, six years into her service, Pálina has become something of an anomaly—a priestess of the goddess of seduction and sensual pleasure who approaches her work with almost ascetic dedication. She conducts fertility blessings with the solemnity of a healer; she counsels couples with real care for their wellbeing; she works particularly with women of lower classes, helping them through pregnancy, childbirth, and the hardships that accompany motherhood in a society that offers them little protection. In a region suspicious of organized religion and skeptical of formal temple hierarchies, she has won real respect by being what she seems rather than by artifice.

## Psyche

Pálina’s defining characteristic is her absolute sincerity in a world that has taught her that sincerity is dangerous. She believes that pleasure, desire, and human connection are divine gifts and that her role is to help people receive these gifts with reverence and authenticity. This conviction is both her greatest strength and her most vulnerable point.

She works from deep fellow-feeling paired with a sharp eye for the game. She perceives what people truly need under what they claim to want, and she can move through Tarvénia’s tangled politics and society without appearing to do so. To most people, she seems straightforward and guileless; in fact, she is careful and calculating, but her calculation always serves others’ wellbeing rather than her own advancement.

Her idealism does cause real problems. She sees the potential for good in people and circumstances that are fundamentally compromised, and she is slow to recognize when she is being manipulated or when her generosity is being exploited. The scar on her leg came from defending someone she believed in; there are indications it was not the only time her trust was catastrophically misplaced.

Her greatest weakness is a kind of spiritual perfectionism. She holds herself to standards of authenticity and service that human beings cannot sustain indefinitely, and when she inevitably falls short, she experiences it as deep failure. She is capable of being judgmental toward those who do not share her commitment to honest connection, even as she consciously struggles against this judgment.

## Social

Pálina occupies an unusual position in Solárden’s religious life. The Temple of Vénusia offers her formal affiliation and legitimacy, yet her approach to priesthood sets her apart from other temple authorities. The high priestess views her with respect but also with a degree of exasperation; Pálina’s work among the poor and dispossessed brings in little money and considerable complications. Yet Pálina’s evident effectiveness—the marriages she has helped thrive, the births she has attended, the women whose lives have been materially improved by her intervention—makes her difficult to dismiss or control.

Among Solárden’s ordinary population, her reputation approaches that of a minor saint. Fishing families seek her blessings before long voyages. Couples come to her for fertility guidance not because she promises magical outcomes but because her presence seems to bless their unions with real care. Women in precarious circumstances—unmarried pregnant women, wives of absent sailors, widows—know they can approach her without judgment.

Among the coastal nobility and merchant classes, Pálina is viewed as somewhat quaint, a priestess who has failed to understand her true purpose. Some respect her commitment; others view her as wasteful of her obvious gifts of charm and persuasion. There are occasional whispers that her family deliberately removed her from circulation to avoid scandal, and that she makes virtue of necessity through her work with the lower classes.

## Companions

**Patrons:**

- **Magdalen Weaver**, a widow who runs a small cloth-working shop employing a dozen women. She comes to Pálina monthly for blessings and counsel and has become something approaching a friend.
- **Captain Serafin Cordova**, a merchant captain who credits Pálina’s fertility blessing with his ability to father a child after years of childlessness. His family’s loyalty is fierce.

**Enemies:**

- **Lord Marchand**, a wealthy merchant who approached Pálina for intimate counsel and was rebuffed. He views her rejection as an affront and has begun subtly undermining her reputation in higher circles, suggesting her work is beneath her station.
- **Father Anselm**, an older priest of the Aurèldían faith whose austere views of spirituality directly conflict with Vénusia’s philosophy. He views Pálina as a corruptor of proper religious order and has been agitating for stricter oversight of temple activities in Solárden.

## Plot Hooks

1. **The Impossible Blessing** — A young woman of high birth comes to Pálina seeking a fertility blessing, but reveals that her situation is truly hopeless: her husband is impotent or absent, her family will cast her out if she remains childless within the year, and she has nowhere to go. Pálina’s commitment to authentic solutions rather than magical ones is tested when the woman begins to hint at increasingly desperate measures.

2. **The Corrupted Blessing** — Pálina discovers that her fertility blessings, which she performs with absolute spiritual authenticity, have been dressed up and sold by merchants as magical talismans, at exorbitant prices to desperate women across the region. She can publicly repudiate the deception or allow it to continue if it gives the women some hope.

3. **The Scarred Past** — Someone from the incident that scarred Pálina’s leg appears in Solárden, recognizing her and hinting at knowledge that could fundamentally alter how her community views her. The person may be a threat or may be seeking redemption, but either way, Pálina’s tightly controlled history begins to unravel.

4. **The Aristocrat’s Daughter** — A high-born woman in an abusive marriage comes to Pálina seeking help. Pálina begins assisting her, only to realize that the woman’s husband has significant political power in Solárden and connections to Pálina’s own family. Helping the woman could set off dangerous complications with her family while abandoning her would violate everything Pálina believes.

5. **The Priestess’s Calling** — The Temple of Vénusia receives notice that Pálina is being considered for elevation to high priestess of a major regional temple—an honor that would require her to leave Solárden and work among the coastal nobility and merchant classes rather than the poor. The promotion appears sincere but also suspiciously convenient; someone may be attempting to remove her from her current position precisely because she is becoming too influential among the lower classes.
