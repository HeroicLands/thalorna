---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Sofíenna Torvaleth
  title: ""
  given: Sofíenna
  clan: Torvaleth
  home: valdes
  aliases:
    - Reslâva Vespera Sunstone
packFolder: aureldiatarvenia
shortcode: sofntrvlth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - tarvenanclt
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 34
  birthday: 690/4/9
  height: 1.73
  weight: 68
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: gray
    skin_color: tanned
    complexion: ruddy
    extra_features:
      - a scar on the right elbow
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 36 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 36 } }
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

Sofíenna Torvaleth is a woman marked by labour and weather. At thirty-four her grey hair and weathered skin make her look older, and nothing about her is frail. She stands five feet eight inches, lean and muscled — a body that works outdoors every day. Her face is angular, the beauty in it the beauty of strong bone rather than softness, and her large hazel eyes carry a sharp intelligence and a warmth that puts common people at ease. The scar along her right elbow is a story she does not tell: an accident, or something deliberate, that could have ended her working life and did not. Her hands are calloused and stained with soil and herbs that never wash clean. She wears the plain, sturdy robes of a field priest under a worn linen mantle that has been down every road and into every harbour of the Tarvénan coast.

# Dossier {#dossier}

Before the boats go out for the season, Sofíenna blesses the nets. That is one of her offices in Valdés and the fishing villages around it; the others fill the rest of the year. She attends the mothers and brings the children into the world; she says the rites that carry the dead into Flórania's keeping; when two families fall out over a water right or a field boundary she is the one who sits them down; and she teaches the people she serves to understand their work as a share in the goddess's making. Priestess, healer, elder, counsellor — she has spent sixteen years in the temple building something that is all four and has no other name.

Sofíenna was born and raised in the coastal villages around Valdés to a fishing family that lived at the mercy of season and sea. Her mother died in childbirth when she was twelve, and her father and his sisters raised her in the close world of families that work the water and the land in turn. She could fish before she could pray properly, read the weather in wind and water, and lay up the year's plenty against the winter.

At sixteen came the injury that scarred her elbow. She says nothing about how, and the arm healed whole though marked. An old priestess of Flórania, Marna, came to the village during the recovery and stayed through the scar's forming, and saw in the girl a calling to the earth-work that is the goddess's chief business in places like Valdés: bless the crops, attend the births, prepare the dead, settle the quarrels by wisdom rather than by rank. Sofíenna entered the temple at eighteen.

The grey came seven years ago, after a run of hard seasons — drought, failed crops, hunger. She fasted alongside her people and undertook extended ritual petitions that nearly killed her, and though she recovered, the strain aged her in a way that shows. Some in Valdés say she carries a curse for it. Others say the goddess marked her with a blessing. She says nothing on the subject, which is like her.

## Psyche

Sofíenna is a woman of integrity and practical wisdom who has chosen a quieter life than her gifts would have bought her. Those gifts would carry her a long way up the priesthood, and she has turned down every step of the way to stay with the families and the fishing crews of Valdés.

What she does best is be present through the whole of a human life. She tends gardens and animals, sits at births and at deathbeds, keeps the harvest feast and mourns the famine, and brings the same attention to each. Her understanding is that sacred work is not done on feast days in fine temples but in fields and kitchens and boats, in the ordinary hours when a life is kept or lost — a radical idea in a priesthood that usually keeps its distance from such work.

The cost is loneliness. The work takes everything, and she has never sought a partner or made a household of her own. Her relationships are deep and carefully bounded: she is everyone's trusted counsellor and nobody's intimate. The scar and the silence around it suggest something she has never set down; now and then, in a certain light or season, she draws into herself in a way that worries the people who know her.

She is cannier than she looks — a surprise in someone who seems so plain, and evidence that she has learned to move carefully. She sees more of the politics than she lets on: the pull between old Tarvénan ways and the merchant oligarchies that are remaking the coastal cities, and where the temple's work sits between them. She has placed herself where she is useful to several powers and belongs to none.

## Social

Sofíenna's formal affiliation is with the Temple of Flórania; her actual position in Valdés is larger than any rank in it. She is one of very few people in the city respected by both the old fishing families and the merchant class that now controls the harbour. When she speaks in the communal assembly — the Tarvénan institution where free citizens meet to settle common matters — the assembly listens. She has never sought office. The influence comes from the fact that everyone knows her judgements are made in their interest and not her own.

The position is getting harder to hold. As Valdés grows rich and the merchant oligarchy tightens its grip, there is quiet pressure to remake the city's institutions along tidier lines, and the temple is not exempt. Some of the merchant leaders find her field-work old-fashioned, her mediation slower than a magistrate, and her lack of interest in expanding the temple's reach a failure of leadership. On the other side, conservatives in Tarvénia's priesthood consider her willingness to work with the poor and the dispossessed beneath the dignity of the office.

## Companions

**Patrons:**

- **Alderman Darius Silvain**, leader of the fishing cooperative that speaks for the common fishermen of Valdés. He has sat beside Sofíenna in the communal assembly for six years and trusts her completely.
- **The Widow Thesa**, an elderly woman of considerable wisdom who was Sofíenna's informal mentor and is still consulted on spiritual matters that touch the community.

**Enemies:**

- **Merchant-Captain Lucien Vasquez**, whose family is gathering up control of the harbour trade. He sees Sofíenna's hold on the common people as an obstacle to the changes he is pushing through and has been quietly working to undercut her.
- **Bishop Aldhelm**, a senior figure in the formal priesthood who visited Valdés two years ago and was scandalised by what he took for an informal, unstructured way of doing the office. He has recommended closer oversight and that her temple's funds go to more formally trained clergy.

## Plot Hooks

1. **The Drought Returns** — A hard drought settles on the Tarvénan coast and threatens the fields and the fishing cycles that keep Valdés alive. Sofíenna begins the fast and the extended petition she undertook seven years ago; and this time a stranger arrives — a wandering healer or scholar from outside Tarvénia who claims to know the drought's cause and offers a remedy that would require her to abandon her principles or her community's traditions to use it. The price of salvation may not be one she can pay.
2. **The Merchant's Daughter** — A girl of a merchant family is pregnant by a sailor bound for distant ports, and he does not come back. The family demands that Sofíenna arrange an "accident" to end the pregnancy rather than bear the shame. She refuses and offers the girl her help instead, which is an insult to the family's honour and the beginning of a crisis that could cost her her standing in the city.
3. **The Hidden History** — An old sailor arrives in Valdés, knows Sofíenna, and begins hinting that the scar on her elbow came from violence, not accident — that she killed someone in her youth, or was marked as a warning. He may be telling the truth or testing her. Either way he brings back a past she has spent eighteen years leaving.
4. **The Temple's Modernization** — Bishop Aldhelm comes to Valdés with orders to "reform" the temple: fold the informal healing and mediation into formal posts, bring in trained clergy, and fit her work into the ordinary hierarchy. Accept the loss of her freedom and her direct service, or refuse and risk removal altogether.
5. **The Magical Awakening** — Something stirs in the deep places around Valdés — an old thing, perhaps connected to Aelwyth's mystical influence reaching into these waters, perhaps nearer and worse. Her skill with the dead goes far past what preparing them for burial requires, and it suggests knowledge of death-work she has never explained. She is drawn into a matter on the boundary between the living and the dead, and what she does there could save her community or damn it.
