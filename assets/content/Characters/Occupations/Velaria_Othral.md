---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Vélaria Óthral
  title: ""
  given: Vélaria
  clan: Óthral
  home: liranel
  aliases:
    - Reslâva Elowen Meadowbloom
packFolder: aureldiaelavendre
shortcode: velarithrl
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
  species: humanflk
  born: 695/1/11
  height: 1.8
  weight: 67
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: blonde
    skin_color: medium
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 48 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 13 } }
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

Vélaria Óthral is a 29-year-old woman who stands 5'11" tall and is of moderate build. She has a long face with broad cheekbones, a prominent forehead, and a sharp jaw that leads to a delicate chin. Her deep-set hazel eyes sit beneath thin brows, lending her a watchful gaze. A delicate nose and thin lips complete her features. She has medium-toned skin with a fair complexion. Her blonde hair hangs in ringlets, usually loosely tied back and often dusted with charcoal from her drawing. She dresses in the plain linen robes common to Flórania's clergy, though hers tend to carry the evidence of her day—herb stains on the sleeves, chalk dust on the hem—and she rarely looks as composed as someone of her height and bearing could.

# Dossier {#dossier}

Vélaria was born in [[place-liranel|Liranel]] to a freeman family. Her father was a joiner; her mother worked as a seamstress for one of the minor merchant houses. The family was respectable but not prosperous, and Vélaria grew up in the streets around Liranel's lower market—close enough to the city's poorer quarters to see how illness, hunger, and neglect ate away at people the rest of the city preferred to ignore.

She showed two gifts early: an extraordinary sensitivity to the suffering of others, and a talent for drawing. The first brought her to the attention of the [[affiliation-florania|Faith of Flórania]] when, at twelve, she was found sitting with a dying beggar outside the temple, holding his hand and humming to him—not because anyone had asked her to, but because she could not bring herself to walk past. The temple's resident priestess took her in as an apprentice that same week. The second gift—the drawing—came alongside the first and proved surprisingly useful: Vélaria could sketch a wound, a rash, or a pattern of symptoms with clinical accuracy, producing illustrations that the temple's physicians found more useful than written descriptions.

She trained as a healer and was ordained as a priestess of Flórania at twenty-two. Unlike many of her peers, who were assigned to rural circuits or temple postings, Vélaria requested placement in Liranel itself—specifically in the lower quarters where she had grown up. The temple granted the request with some reluctance; urban ministry among the poor is considered thankless work, and the temple's resources were better spent, in the view of the senior clergy, on communities that could support a priestess in return. Vélaria did not argue the point. She simply went.

For the past seven years, she has served as Flórania's presence in the poorest neighborhoods of Liranel. She operates out of a rented room above a chandler's shop that she has converted into a makeshift surgery—a table, a shelf of herbs and poultices, a basin, and whatever supplies she can beg or barter from the temple and the city's apothecaries. She treats the people who cannot afford a physician: laborers with infected wounds, children with fevers, women whose pregnancies are complicated by malnutrition, the elderly whose families cannot or will not care for them. She delivers babies, sets bones, lances abscesses, and sits with the dying. She does this six days out of seven, and on the seventh she draws.

Her physician's skill is the best in the lower quarters and rivals that of the guild physicians who serve the merchant class—a fact that those guild physicians find alternately impressive and irritating, given that she has no guild credentials and charges nothing. She supplements her formal training with an intuitive understanding of the body that her teachers could never fully explain: she notices things other healers miss, connects symptoms that appear unrelated, and has a success rate with difficult births that the temple attributes to Flórania's blessing and Vélaria attributes to paying attention.

Her drawings have become something more than a medical tool. Over the years she has filled dozens of sheets with portraits of the people she treats—not clinical illustrations but genuine art, capturing faces and hands and expressions with a skill that would be remarked upon in more elevated circles. She draws the dying with the same care she draws the newborn. She has never shown these drawings to anyone outside the lower quarters, but the people she has drawn treasure them, and in a community where most people will never have their likeness captured in any form, this is a gift that has made her deeply beloved.

She also plays the wooden flute she carries, mostly for children and for the dying—simple melodies that she learned from her mother and has never thought to consider as anything more than comfort. She does not know that her musician's skill is unusual. She has never performed for anyone who would tell her.

## Psyche

### Personality

Vélaria is quiet, observant, and deeply compassionate, but she is not soft. Seven years of working among the urban poor have given her a clear-eyed understanding of suffering that has nothing romantic about it. She has seen children die of preventable diseases because their parents could not afford treatment. She has treated women beaten by their husbands and watched them go home again because they had nowhere else to go. She has learned that compassion without competence is useless, and that the best thing she can do for the people she serves is to be very, very good at her work.

She is more shrewd than she appears. Growing up in the lower quarters and spending her adult life there has taught her to read people quickly, to sense when she is being lied to, and to navigate the small corruptions and territorial disputes that govern life among the poor. She knows which landlords can be shamed into providing clean water and which will retaliate if challenged. She knows which beggars are genuinely destitute and which are running a game. She does not judge either category—she treats both—but she is not naive about the world she operates in. Her guile is not manipulative but practical: the skill of a woman who has learned that getting things done in the lower quarters requires knowing when to ask, when to demand, and when to simply take what is needed and apologize later.

She struggles with the weight of her work. She is better at managing it than she was as a younger woman—she has learned to sleep when she can, to eat when food is available, and to accept that she cannot save everyone—but the losses accumulate, and she carries them. She does not talk about this. She draws instead, and the drawings are how she processes what she has seen.

### Motivation

Vélaria wants to build a proper clinic in the lower quarters—a real one, with beds, a storeroom, an assistant, and enough supplies to treat the volume of patients who need her. She has been working toward this for years, saving what little coin she receives, cultivating relationships with sympathetic merchants, and petitioning the temple for support. The temple has been politely noncommittal. The city council considers the lower quarters a problem to be contained rather than invested in. She is running out of channels to try and is beginning to consider less conventional ones.

Beyond the clinic, she is motivated by a conviction she does not often articulate: that the way a society treats its poorest members reveals what it truly believes, and that [[affiliation-kngdmlvndr|Élavendre]], for all its beauty and tradition, has been failing this test for a long time. She does not frame this as political—she is not an agitator—but her daily work is, in its quiet way, an indictment of every feast and festival held while children in the lower quarters go hungry.

### Strengths

Vélaria is an exceptional physician—perceptive, creative, and experienced far beyond her years. Her empathy allows her to sense distress in ways that border on the uncanny, and her clinical skills are rigorous enough to act on what her instincts tell her. She is trusted absolutely by the community she serves, which gives her access and influence that no official or noble could replicate. Her drawing talent, while she considers it peripheral, has made her a beloved figure in the lower quarters and has given her a detailed visual record of the community that no one else possesses. She is also tougher than she looks—she has not survived seven years in the poorest part of Liranel by being fragile.

### Weaknesses

Her world is small. She knows the lower quarters intimately and operates there with confidence, but she has almost no experience of the city's upper strata—the court, the merchant houses, the temple hierarchy's politics. If her ambition to build a clinic forces her to engage with those worlds, she will be out of her depth. She does not know how to navigate formal social settings, does not understand the currency of favors and obligations that governs elite Élavendri society, and is likely to be either overlooked or patronized by people who view charity to the poor as a pleasant abstraction rather than the daily, physical work she knows it to be.

Her attachment to her community also makes her vulnerable. She cares deeply about specific people—the families she has treated for years, the children she has delivered, the elderly she has kept alive season after season—and a threat to them would compromise her judgment in ways that a threat to herself would not. Someone who understood this could use the community as leverage against her.

## Social

Vélaria is well known and well loved in the lower quarters of Liranel, where she is simply called "the priestess" as though no other exists. She is a familiar figure in the streets and market stalls, and people approach her freely with ailments, worries, and the kinds of problems that have nothing to do with medicine but that she listens to anyway. Her rented room above the chandler's shop functions as an unofficial community center as much as a surgery.

Outside the lower quarters, she is largely invisible. The guild physicians know of her—she has occasionally been consulted on cases they found puzzling, always informally and never with credit—and the temple of Flórania considers her a dedicated but somewhat stubborn junior priestess who insists on a posting the institution would prefer to phase out. She has no connections among the nobility, no presence at court, and no patron with the means to champion her cause.

Within the [[affiliation-florania|Faith of Flórania]], she reports to the temple at Liranel, which supplies her with a small allowance and occasional materiel. The temple's senior priestess, Mother Délitha, respects Vélaria's work but has warned her that the temple cannot indefinitely support a ministry that generates no revenue and serves a population with no political voice.

## Companions

### Patrons

Vélaria's only institutional patron is the temple of Flórania at Liranel, and that support is conditional and may not last. She has recently attracted the quiet attention of a merchant named Brégan who has made several anonymous donations of supplies to her surgery. She does not know the donor's identity. Brégan's motives are mixed—he is genuinely moved by her work, but he also has business interests in the lower quarters and sees value in having a beloved community figure in his debt.

### Enemies

Vélaria has no enemies in the conventional sense, but she has irritants that could become threats. The guild physicians resent her unlicensed practice, and one in particular—a man named Drévan—has made pointed remarks at guild meetings about unqualified healers endangering public health. The complaints have not gained traction because Vélaria's patients have nowhere else to go, but Drévan is persistent and has the ear of several council members. A landlord named Fáerel, who owns several of the worst tenements in the lower quarters, views her presence as an inconvenience—she has, on more than one occasion, publicly documented the conditions in his properties by sketching them and showing the drawings to anyone who would look, and he would like her gone.

## Plot Hooks

1. **The Clinic**—A wealthy patron has offered to fund Vélaria's clinic, but the offer comes with conditions: the patron wants naming rights, control over which patients are admitted, and the right to use the clinic's reputation for political purposes. Vélaria must decide whether half a dream is better than none, or whether accepting would compromise everything the clinic is meant to be.

2. **The Guild Complaint**—Drévan has escalated his campaign against unlicensed healers and has persuaded three council members to support an ordinance that would effectively shut down Vélaria's surgery. The temple is reluctant to fight the battle publicly. Vélaria must find allies, make arguments, and navigate a political arena she has no experience in—or lose everything she has built.

3. **The Tenement Fire**—A fire in one of Fáerel's tenements kills several residents and injures dozens more. Vélaria treats the survivors and, in doing so, discovers evidence that the building's condition was criminally neglected. Fáerel has powerful friends. Vélaria has drawings of the damage and the testimony of people no one in authority wants to listen to. What she does with this evidence will define whether she remains a healer or becomes something more dangerous.

4. **The Poisoned Well**—Water in the lower quarters has been making people sick—not dramatically, but persistently, in ways that Vélaria recognizes as unnatural. Her investigation leads her upstream, socially and literally, into parts of the city she has never had reason to visit and conflicts she is not equipped to handle. The source of the contamination may be accidental, or it may be something far worse.

5. **The Stranger's Offer**—A woman arrives at Vélaria's surgery with a wound that was clearly inflicted by a blade and a story that does not hold together. She pays well, asks no questions, and leaves. She returns a week later with another wound. And then again. Vélaria realizes she is treating someone involved in something violent, and the woman's trust in her discretion is itself a kind of trap—because if the wrong people learn that Vélaria has been quietly stitching up a fugitive, her reputation and her freedom are both at risk.
