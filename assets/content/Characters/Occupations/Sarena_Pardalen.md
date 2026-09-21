---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Sárena Párdalen
  title: ""
  given: Sárena
  clan: Párdalen
  home: silvain
  aliases:
    - Reslâva Mira Lightwhisper
packFolder: aureldiaelavendre
shortcode: sarenprdln
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - elavendriclt
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: female
  species: null
  age: 27
  birthday: 697/3/3
  height: 1.7
  weight: 64
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: pale
    complexion: pale
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 36 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 12 } }
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

Sárena Párdalen is a 27-year-old woman who stands 5'7" tall and is of moderate build. She has a heart-shaped face with angular cheekbones, a narrow forehead, and a rounded jaw that leads to a firm chin. Her almond-shaped hazel eyes sit beneath arched brows and give her a measured gaze. She has a slightly upturned nose and curved lips. She has pale skin. Her brown hair flows past her shoulders, often woven with small dried flowers or sprigs of herbs in the manner common among Flórania's clergy. She dresses simply — plain linen robes, leather sandals — and carries herself with the quiet, unhurried manner of someone accustomed to sitting at bedsides and waiting for fevers to break.

# Dossier {#dossier}

Sárena was born in [[place-silvain|Silvain]] to a freeman family of modest means. Her father was a woodworker; her mother kept a garden that supplied herbs to the local healer. It was through her mother's garden that Sárena first came to the attention of the [[affiliation-florania|Faith of Flórania]] — the temple's herbalist noticed the girl's unusual sensitivity to the properties of plants, her ability to identify by smell and touch what others needed a reference text to distinguish, and suggested she be taken on as an apprentice. She entered the faith's service at fourteen.

The clergy of Flórania are healers, midwives, and stewards of fertility and renewal. They tend the sick, assist in childbirth, bless the planting seasons, and maintain the small shrines and physic gardens that are the faith's presence in rural communities. It is not glamorous work. The temples of Flórania are not grand edifices but modest houses surrounded by herb gardens, and the priestesses — for the clergy skews heavily female, though there are men among them — spend more time with their hands in soil or wound-dressings than in prayer. Sárena took to it with a natural aptitude that her teachers described as a gift from the Nurturer herself.

She completed her training at twenty-one and was assigned as an itinerant priestess — a healer who travels a circuit of villages and farmsteads too small or too remote to support a resident temple. For the past six years, she has walked this circuit through the countryside around Silvain, arriving at each settlement on a roughly predictable schedule to treat the sick, check on expectant mothers, replenish the village herb stocks, and conduct the seasonal rites of renewal. She carries her supplies in a canvas sack, sleeps where she is offered a bed, and is paid in meals, lodging, and whatever small gifts the communities can spare.

She is good at what she does. Her herblore is far beyond her years — she has an instinct for combining remedies that more experienced physicians lack — and her feeling for others, which borders on the supernatural, lets her sense distress in people and animals before it becomes visible. She has delivered dozens of children, set bones, treated fevers and infections, and talked more than one despairing farmer back from the edge. The communities on her circuit know her by name and watch for her arrival with relief.

She is also, at twenty-seven, beginning to encounter the limits of what a lone itinerant priestess can accomplish. The circuit is too large for one person. Some villages see her only every few weeks, and in the intervals, people suffer and sometimes die from conditions she could have treated if she had been present. She has petitioned the temple at Silvain for an assistant, but the faith's resources are stretched thin and the rural circuits are not a priority. This frustration — the gap between what she can see needs doing and what she is able to do — is the defining tension of her life at present.

## Psyche

### Personality

Sárena is warm, patient, and compassionate, and these qualities are rooted in her temperament and her faith. She listens more than she speaks, notices more than she says, and has the kind of quiet presence that puts frightened people at ease. She does not judge the circumstances that bring people to need her help, and she does not turn anyone away, regardless of their ability to pay or their standing in the community.

She is also more perceptive than her gentle manner suggests. Six years of traveling alone through rural communities have taught her to read situations quickly — to sense when a household's tensions run deeper than the illness she has been called to treat, to notice when a bruise was not caused by a fall, to understand what is not being said. She does not intervene in matters outside her role unless asked, but she remembers what she sees, and the picture she carries in her head of the households around Silvain is detailed and accurate.

Her weakness is that she gives too much of herself. She absorbs the suffering of others as though it were her own, and she has not yet learned to set the boundaries that older healers know are necessary for survival. She lies awake after losing a patient. She blames herself for outcomes that were never in her control. She skips meals when there is work to be done, walks through pain rather than rest, and dismisses her own exhaustion as unimportant when set against the needs of others. Her seniors in the faith have warned her about this tendency. She has not yet listened.

### Motivation

Sárena's driving force is simple and unshakeable: she believes that suffering can be reduced and that it is her duty to reduce it. This is not an abstract philosophical position but a lived commitment — she has held dying children, dressed wounds that made her stomach turn, and walked through storms to reach a farmstead where a woman was giving birth alone, and none of it has diminished her conviction that the work matters and that she is meant to do it.

Beyond the immediate, she wants to build something that outlasts her — a network of trained village healers along her circuit who can provide basic care in her absence, so that the gap between her visits is not a gap in coverage. She has begun teaching informally during her rounds, showing village women which herbs to keep, how to clean a wound, when a fever requires intervention and when it will pass on its own. This is quiet, unglamorous work, but she believes it is the most important thing she can do.

### Strengths

Sárena's feeling for others is her strongest quality: an almost preternatural ability to sense the physical and emotional state of those around her. Combined with her herblore and her practical medical skills, this makes her an extraordinarily effective healer. She is creative in her remedies, combining treatments in ways that more conventionally trained physicians would not think to try, and her results consistently exceed what her resources and training would predict. She is also deeply trusted by the communities she serves, which gives her a standing that no amount of rank or wealth could purchase — people tell her things they would not tell a magistrate or a priest of a more formal faith, and this makes her an unexpectedly well-informed observer of rural life.

### Weaknesses

Her self-sacrificing nature is unsustainable. She is already showing signs of the exhaustion that claims many young healers — the disturbed sleep, the inability to set aside the work, the creeping sense that she is personally responsible for every death on her circuit. If she does not learn to pace herself, she will either collapse or become so emotionally depleted that her effectiveness suffers. Her physical stamina, while adequate, is no more than that, and she pushes herself harder than her body can support.

She is also naive about power in ways that could endanger her. She trusts people who show her kindness, assumes good faith in those who seek her help, and does not think about her own position. A person or faction that wished to use her — her reputation, her access to households, her knowledge of the communities — would find her easy to manipulate, because it would not occur to her that someone offering to help her work might have ulterior motives.

## Social

Sárena occupies a humble but valued position in the communities around Silvain. She has no rank, no wealth, and no political influence, but she is welcome in every household on her circuit and trusted with the most intimate details of people's lives. In a society that can be rigidly hierarchical, she moves through all levels with an ease that wealthier and more powerful people cannot match — she delivers the babies of freemen and nobility alike, and a woman in labor does not care about the healer's social class.

Within the [[affiliation-florania|Faith of Flórania]], she is regarded as a capable and dedicated junior priestess who has not yet found her full potential. Her superiors at the temple in Silvain recognize her talent but worry about her tendency to overextend herself. She has been mentioned as a candidate for a permanent temple posting, which would be a step up in status and stability, but she has so far resisted the idea — she feels the rural circuit needs her more than the temple does.

## Companions

### Patrons

Sárena's primary patron is the temple of Flórania at Silvain, which provides her with basic supplies, a bed when she returns from her circuit, and the institutional authority to perform rites and administer healing in the goddess's name. The temple's senior priestess, Mother Aelwyn, is her mentor and has gently but persistently urged Sárena to accept a more structured role within the faith.

### Enemies

Sárena has no true enemies, but she has drawn the quiet resentment of a local apothecary named Gwýdden who views her free healing services as competition that undermines his livelihood. His complaints have so far amounted to nothing more than grumbling at the tavern, but he has connections among the merchant class and could make trouble if he chose to formalise his grievances. More broadly, her knowledge of the intimate affairs of dozens of households makes her a potential threat to anyone with secrets — a fact she has not yet considered but that others may have.

## Plot Hooks

1. **The Overburdened Circuit** — A wave of illness has struck two villages on Sárena's circuit simultaneously. She cannot be in both places at once, and the village she does not reach in time will suffer preventable deaths. The experience forces her to confront the unsustainability of her current situation and may push her to accept help she has so far resisted — whether from the temple, from a traveling companion, or from a source whose motives are less transparent.

2. **The Apothecary's Complaint** — Gwýdden has filed a formal grievance with the Silvain merchants' guild, claiming that the Faith of Flórania's itinerant healers are engaging in unlicensed trade by dispensing remedies without guild membership. The complaint is legally tenuous but politically inconvenient, and the temple has asked Sárena to resolve it — a task that requires diplomatic skills she has never had to exercise.

3. **The Household Secret** — During a routine visit to a prominent household, Sárena notices signs that one of the family members is being poisoned — slowly, deliberately, by someone within the home. She has no proof, no authority to investigate, and no certainty that reporting her suspicion would not put the victim in greater danger. She must decide how to act with only her healer's intuition and her conscience to guide her.

4. **The Stranger's Offer** — A well-dressed traveler arrives in one of Sárena's villages and offers to fund the expansion of her circuit — more supplies, an assistant, perhaps a second healer. The offer seems too good to be true, and it is: the patron has their own reasons for wanting a trusted, well-connected figure moving through the rural communities, and those reasons have nothing to do with healing.

5. **The Grove Council's Request** — The druids of a nearby grove have asked Sárena to assist with a matter that falls outside her usual work: something is wrong with the land itself. Crops are failing, animals are sickening, and the usual blessings are not taking hold. The Grove Council suspects a corruption of some kind and wants Flórania's clergy involved. Sárena's herblore and her sensitivity to living things make her the natural choice, but the investigation may lead her into contact with forces — and people — far more dangerous than anything her circuit has prepared her for.
