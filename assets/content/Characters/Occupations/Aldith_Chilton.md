---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Aldith Chilton
  title: ""
  given: Aldith
  clan: Chilton
  home: ashford
  aliases:
    - Shénasenè Lysandra Goldleaf
packFolder: aureldiaaelwyth
shortcode: aldthchltn
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
  age: 30
  birthday: 694/6/10
  height: 1.7
  weight: 63
  frame: medium
  appearance:
    eye_color: gray
    hair_color: auburn
    skin_color: light
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 55 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-jewl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 39 } }
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

Aldith Chilton is a striking vision of carefully cultivated beauty that seems almost unnatural in its perfection. At 30, she carries herself with the assurance of one who has learned that beauty is a form of power—perhaps the most potent power in certain circles. Her deep-set gray eyes hold an almost haunting quality, watching, assessing, measuring the desire and ambition of everyone around her. She moves with practiced grace, her movements economical yet somehow mesmerizing. Her auburn hair, braided and coiled at the nape, frames a face that bears the subtle lines of someone who has lived intensely—weathered not by age but by the accumulation of countless intimate encounters and whispered confessions. There is something otherworldly about her presence, as if the perpetual mists of [[place-aelwyth|Aelwyth]] have woven themselves into her very being, making her seem simultaneously tangible and illusory.

# Dossier {#dossier}

Aldith Chilton was born into the minor nobility of Aelwyth thirty years ago, a fourth-daughter in a family more concerned with accumulating wealth than molding heirs. Her beauty became apparent early—almost unsettlingly so—and from adolescence, she understood that it opened doors that birth alone could not. She chose the priesthood of [[lore-venusiadty|Vénusia]] not from genuine spiritual calling but from pragmatic recognition: within Vénusia's temples, her gifts would be celebrated as divine rather than merely cosmetic, and she could operate with the authority and autonomy that marriage to some minor noble would have denied her.

Her rise within the temple hierarchy was meteoric. She studied the rituals of seduction and attraction—not as mere performance but as a priestess studies sacred mysteries. Her exceptional creativity and charm gave her an intuitive grasp of the elaborate psychology that underpins desire: how to read a room, how to make each patron feel uniquely chosen, how to weave flattery and genuine compliment so skillfully that they become indistinguishable. She learned to cultivate an air of mystery, to retreat into inscrutability at precisely the moment a patron craves her most. At 30, she hosts the most sought-after salons in [[place-ashford|Ashford]], intimate gatherings where wealthy merchants, minor nobility, and ambitious magistrates come seeking guidance—and seeking her.

Yet success has a peculiar hollowness to it. Those who know her well enough to see beneath the carefully maintained façade note a certain emptiness at her core. Her low reasoning and middling will suggest someone driven more by impulse than conviction, by the intoxicating thrill of being desired than by any genuine connection to Vénusia's philosophy. She believes pleasure is sacred because her life has taught her that pleasure is the only reliable source of power and validation. Whether this constitutes genuine faith or merely convenient rationalization remains an open question—even to herself.

## Psyche

Aldith operates in a state of perpetual seduction, both outward and inward. She is creative and intuitive, able to perceive the hidden desires and vulnerabilities in those around her with almost preternatural accuracy. Yet this gift of perception is paired with a fundamental shallowness of reasoning—she feels, reads, and acts, but rarely thinks deeply about the consequences of her manipulations. Her will, while present, is undisciplined; she struggles to commit to anything beyond the immediate gratification of her appetites.

Her relationship to her own beauty is complex and troubling. It has become her identity, her tool, her prison. She derives genuine pleasure from being desired but suffers from a gnawing fear that if her beauty ever faded—through age, illness, or circumstance—she would cease to exist as a person of consequence. This drives her toward increasingly elaborate rituals of self-maintenance and toward patrons whose devotion feels most unconditional. She can be remarkably generous and warm with those who worship her adequately; toward those who show indifference or, worse, who recognize the emptiness beneath her beauty, she turns cold and vindictive.

Her greatest strength is her supernatural ability to make others feel special, desired, understood. Her greatest weakness is that she does not genuinely understand connection—she understands only its performance. The distinction, when she allows herself to notice it, causes her considerable distress that she typically drowns in wine, scented oils, and the arms of whatever beautiful person is currently at hand.

## Social

Aldith is not merely affiliated with the Temple of Vénusia in Ashford—she essentially is the Temple's public face, at least among the wealthy elite who fund its operations. The high priestess tolerates her because Aldith generates substantial coin through her salons and because her obvious piety (however self-interested) brings prestige to the order. Aldith's authority is considerable but brittle; it rests entirely on her continued beauty and charisma. Among the temple's minor priests and acolytes, she is viewed with a mixture of awe, resentment, and fear. She does not mentor; she competes.

Within Ashford's upper circles, she moves with ease and recognition. Merchants' wives seek her blessing for fertility. Ambitious magistrates visit her salons to be seen among the elite. Younger noblewomen ask her for advice on matters of love and seduction, and she gives it with the smugness of someone who has never experienced genuine romantic rejection. Yet there is a brittleness to her social standing. She has made enemies through her indifference and through her casual willingness to favor some patrons over others based on whim. Some of the families whose daughters she has humiliated, whose sons she has rejected, harbor quiet resentments that, given the right circumstance, could turn into genuine danger.

## Companions

**Patrons:**

- **Lord Aldwin Forthright**, a wealthy merchant lord with diverse trading interests who has been Aldith's most generous patron for five years. He views her with a mixture of genuine affection and proprietary ownership that borders on controlling.
- **Lady Mérindel Ashford**, wife of a minor noble, who funds Aldith's salons partly from genuine appreciation and partly because attending them elevates her own social standing.

**Enemies:**

- **Father Sérismond**, high priestess of the Temple of Vénusia, who views Aldith as a useful asset but no more than that. Their relationship is cordial but tense; Sérismond's spiritual authority stands in implicit competition with Aldith's charismatic power.
- **Theron Blackweir**, a merchant's son whom Aldith humiliated publicly at a salon five years ago by publicly preferring another patron. He smiles when their paths cross in Ashford society, but his smile does not reach his eyes.

## Plot Hooks

1. **The Priestess's Prophecy** — A traveling oracle arrives in Ashford and attends one of Aldith's salons. She pulls Aldith aside and whispers that the goddess has shown her a vision of Aldith's beauty failing within the year—a curse, perhaps, or merely a warning of advancing age. Aldith, terrified, begins searching for ways to stave off this fate, drawing the oracle deeper into her world and potentially into conflict with the temple authorities.

2. **A Rival's Rise** — A younger priestess of Vénusia, nearly as beautiful as Aldith but with genuine spiritual conviction, begins establishing herself in Ashford and attracting Aldith's patrons with teachings of authentic connection rather than performative seduction. Aldith moves to discredit her rival, but the younger priestess's genuine faith makes her difficult to undermine.

3. **The Stolen Heart** — Aldith genuinely falls in love with someone for the first time—a wealthy merchant, a military officer, perhaps another priestess—only to discover they were playing the seduction game as skillfully as she was. The realization that she has been used as she uses others threatens her carefully constructed worldview.

4. **The Disgraced Noble** — A woman of considerable rank, publicly shamed through Aldith's negligence or malice at a salon, seeks revenge by carefully orchestrating Aldith's social downfall. She collects evidence of Aldith's more unethical manipulations and prepares to expose them to the temple authorities and the city magistrates.

5. **The Mirror** — An artifact surfaces in Aelwyth—a scrying mirror said to reveal one's true self beneath all illusions. Aldith becomes obsessed with obtaining it, terrified of what she might see, yet unable to resist the possibility of finally understanding who she actually is beneath the performance of beauty and seduction. The mirror may be genuine or may be a carefully constructed trap set by someone who knows her vulnerabilities.
