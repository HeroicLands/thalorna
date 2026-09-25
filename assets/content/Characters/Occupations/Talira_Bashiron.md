---
tags:
  - draft
  - mages
  - character
name:
  full: Tàlîra Bâshirôn
  title: ""
  given: Tàlîra
  clan: Bâshirôn
  home: thyrenae2
  aliases:
    - Elspeth Rowen
packFolder: helladhelionis
shortcode: talirbshrn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Alchemist
  stations: []
  lore:
    - helioniteclt
    - commonerrnk
  homes:
    - helionis
  affiliations:
    - thyrenae
  gender: female
  species: humanflk
  born: 685/6/2
  height: 1.6
  weight: 53
  frame: light
  appearance:
    eye_color: amber
    hair_color: auburn
    skin_color: tanned
    complexion: olive_toned
    extra_features:
      - a scar on the left ear
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-menerva }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 28 } }
    - { model: skill-helnkscrpt, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 60 } }
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

At 5'3" and slender of build, Tàlîra cuts a deceptively fragile silhouette—one belied by the wiry strength visible in her forearms and the assured way she moves. Her face is striking rather than conventional: high cheekbones, a wide intelligent forehead, and eyes of deep amber that seem to catalog everything they encounter. Auburn hair, usually pinned or braided in the practical style of working scholars, frames features marked by a long scar that runs from her left temple down behind her ear—a thin line of pale tissue that catches light when she turns her head. Her skin holds the tanned olive complexion of southern [[place-helionis|Heliónis]], and there is a faint callus across the inner fingers of her right hand, the mark of hours spent grinding herbs and mixing solutions. She favors a thick woolen cloak the color of burned sienna, and beneath it practical linen and wool—nothing that draws attention, everything chosen for utility.

# Dossier {#dossier}

Tàlîra Bâshirôn was born to a freeman metalworking family in the lower quarters of [[place-thyrenae2|Thyrenae]] in 685 of the current age. Her father, Konstantinos, was a respected bronzesmith; her mother, Philonike, came from a merchant family with ties to [[place-pelagora2|Pelagora]]'s maritime trade. It was an education-minded household, the kind where even the children of tradespeople were expected to read and cipher. She was ten years old when [[affiliation-ordoarcanis|the Ordo Arcanis]] came through Thyrenae recruiting promising youths for preliminary training—a routine canvassing that changed her life.

Tàlîra possessed the kind of aptitude examiners sought: quick reasoning (inherited from her mother's side), steady hands, an intuitive grasp of proportion and measurement, and most crucially, an unshakeable will. She was brought into the Ordo's preliminary circles at twelve, tested in the philosophy of the Héx Hodäi, instructed in the theoretical groundwork of the Six Ways. For five years she progressed, believing she would eventually take her vows and enter the Discipuli ranks. But at seventeen, in a moment that would splinter her life, she witnessed something she should not have: a catastrophic failure during a Fire Theory demonstration, one that killed two other students and left her with the scar that marks her ear. Worse, she saw the Ordo hierarchy move swiftly to conceal not merely the tragedy but evidence of what had actually caused it—a theoretical disagreement about the stability of certain compound structures that had been summarily suppressed.

The Ordo offered her silence, a generous stipend, and a quiet suggestion that she pursue alchemy instead—respectable work, lucrative, and crucially, _outside_ their formal hierarchy. It was, in essence, a gilded exile. She accepted, not because she was intimidated (though she was), but because she chose not to become their enemy. Her family was not wealthy; the Ordo's wealth and reach were absolute.

She apprenticed under the alchemist Theodoros Philokenos in Thyrenae's scholar quarter, a man of Ordo-adjacent standing who asked no questions about her sudden abandonment of magical studies. For fifteen years she built her practice, establishing herself as the most reliable source of genuine herbal remedies, tinctures, and medicinals in the city. She became known among [[affiliation-panepistmm|the Panepistemium]]'s philosophers and the poorer quarters alike—neutral ground in a city of competing interests. It was during this period that she also developed her other skills: her teachers in the Ordo had noticed her unusual aptitude not just for theory but for the _practical arts_ that underlay magic—the physical precision of movement, the control of breath and body, the kind of discipline that appeared in both fencing masters and ritual practitioners. She quietly continued training, never admitting it to anyone, cultivating an ambidextrous facility with weapons that no one would expect from a healer.

For convenience, necessity, and safety, she adopted the alias Elspeth Rowen roughly ten years ago—a name with no Helionite flavor, used primarily when dealing with clients from beyond Heliónis whose patronage was lucrative but required discretion. It allowed her to maintain certain relationships without them becoming entangled in her primary identity. Some of her closest contacts know her by this name; to them, she is someone else entirely—a consultant, a solver of delicate problems, someone with knowledge of substances and theorycraft that goes deeper than herbalism. She has learned over the years that in a city where the Ordo watches carefully and mystery cults wield political power, the ability to be two people is not a liability but a survival skill.

Now at 35, Tàlîra runs her legitimate shop—"The Argonaut," named for the ancient voyagers—with genuine expertise and a reputation for both efficacy and discretion. She moves carefully in Helionite society, neither seeking advancement nor hiding her competence. She understands heraldry and mercantilism because one cannot survive as a freeman in Thyrenae without understanding the structures of power. Her friendship with Kalliope Argyros, a scholar of natural philosophy at the Epistemium, provides her with the intellectual stimulation she needs. Her carefully maintained relationship with Captain Nikandros of Pelagora, who brings her rare herbs from coastal expeditions, gives her access to ingredients and information most alchemists never dream of. And her tenuous, unspoken understanding with Magistra Ariadne Thespis of the Ordo Arcanis—the one who engineered her exile and now ensures it remains permanent—is a cold peace neither of them will ever break.

She is not comfortable, but she is safe. And in the tension between those two states, she has built a life of genuine usefulness. The scar on her ear is both a reminder of what she learned and a warning about what she knows not to speak.

## Psyche

Tàlîra is a woman caught between multiple truths. She is genuinely, deeply driven to heal and to understand the natural properties of substances—this is not a pose, but a core part of her identity. Yet she also carries the weight of knowledge that the institutions she might have served are willing to sacrifice lives to maintain their authority. This has made her simultaneously more compassionate toward ordinary people (from whom she asks little) and more cynical about systems of power. She trusts her judgment implicitly when it comes to matters of craft or empirical observation, but she has learned to doubt her own willingness to believe in institutional goodwill.

Her high will and reasoned approach mean she does not act impulsively, even when she is emotionally moved—and she _is_ emotionally moved, frequently and intensely. She feels the suffering of her patients, the struggles of the poor quarters she grew up near, the injustice of the world with an empathy that sometimes makes her angry. But she has learned to transmute that anger into work: another remedy, another carefully researched solution, another relationship built on mutual respect rather than obligation. She is not naive—she has seen too much—but she has chosen not to become bitter. That choice costs her something every day.

Her ambidextrous training and latent combat skills exist in her body memory like a secret language. She has not had to use them in earnest since the early days of her training, and she has no illusions about what it would mean if she ever had to. That knowledge sits quietly at the back of her mind, a capability she maintains and hopes never to deploy. The dancing she practices—movement, rhythm, precision—is partly for the joy of it, partly for the physical discipline it requires.

## Social

In Thyrenae, Tàlîra occupies the position of respected tradesperson-scholar, the kind of freeman whose education and competence grant her a certain autonomy but also a clear ceiling on aspiration. She cannot enter the Epistemium formally, cannot join the Ordo, cannot claim the kinds of authority that family connections or wealth might provide. What she has instead is reputation: people trust her, seek her counsel on matters beyond mere remedies, recognize her as someone who keeps confidences and delivers results.

The Epistemium acknowledges her in the way institutions acknowledge useful outsiders—with civility, occasional commissions for specialized remedies, and careful distance. The Ordo watches her with the attention of people who have made an arrangement they prefer not to think about. The merchant guilds view her as a peer in economic standing if not in formal membership. The mystery cults leave her carefully alone, sensing in her the kind of knowledge that makes her dangerous without making her committed.

Her deepest social connection is to Kalliope Argyros, a scholar of botanical applications and mineral properties some five years her junior, whose genuine curiosity about the theoretical underpinnings of alchemical practice has made her something like a friend—rarer than she might wish in a city where relationships are often transactional. Among the poorer quarters where she came from, she is remembered with genuine gratitude, though she keeps a certain distance even from these connections, aware that vulnerability is a luxury she cannot quite afford.

The fact that she maintains an alias, relationships with figures from the coastal trade, and connections that extend beyond Thyrenae proper marks her as a woman with resources and reach that transcend her apparent station. Those who notice this say nothing. Those who need her services know where to find her—under either name.

## Companions

### Patrons and Allies

**Kalliope Argyros**—A scholar at the Panepistemium, specializing in the natural philosophy of botanical and mineral applications. Ten years Tàlîra's junior, Kalliope's genuine curiosity and rigorous methodology have made her Tàlîra's closest intellectual companion. They meet monthly in a discrete corner of the Peacock Gardens to discuss theory, exchange findings, and maintain the pretense that their conversations are merely casual scholarly gossip. Kalliope has never asked about the Ordo, and Tàlîra has never explained.

**Captain Nikandros of Pelagora**—A seagoing merchant and explorer who brings rare herbs and unusual specimens back from trading expeditions beyond the known coasts. He contracts with Tàlîra for custom remedies, and she provides him with counsel on substances that aid long voyages and combat shipboard illness. He suspects she is more than she appears and has never pressed the matter. He owes her a life once, when a fever nearly took him, and he pays that debt in loyalty and silence.

**Magistra Ariadne Thespis**—The Ordo Arcanis official who arranged Tàlîra's removal from active training and has since ensured her continued safety by keeping certain eyes averted. Their relationship is one of cold clarity: each knows what the other is capable of, each understands the cost of visibility. They have never been friendly, but they are reliable to one another in the way that rivals with too much information to share can be.

### Enemies and Threats

**The Quaesitorium**—Vylarian inquisitors are not openly active in Heliónis proper, but their agents move through the cities gathering intelligence on unlicensed practitioners and heretical knowledge. Tàlîra has thus far escaped their notice, partly through her careful discretion and partly through the Ordo's protective indifference—they prefer her obscurity to scrutiny that might expose their own fragile authority. But this protection is not guaranteed.

**Kharos the Bitter**—A rival alchemist whose practice Tàlîra undercut five years ago by securing an exclusive contract to provide remedies to a major noble household. Kharos has spent those years cultivating connections among the Ordo's lower ranks and spreading rumors that Tàlîra's remedies contain unlicensed workings—a serious accusation that, if believed, could bring official investigation. He has not yet attempted anything direct, but his patience is clearly wearing thin.

**Unfinished Business from the Ordo**—Not all those involved in the tragedy at her initiation have risen as safely as Magistra Thespis. There remains at least one individual of mid-ranking Ordo standing who was present that day, who knows that Tàlîra witnessed the suppression, and who now holds a position where exposing her would serve their interests politically. Tàlîra does not know who this person is, only that the possibility exists—a threat as vague and pervasive as a shadow at dusk.

## Plot Hooks

1. **The Specimen**—A rare and impossible herb arrives in one of Captain Nikandros's shipments: a plant that, according to every established botanical classification, should not exist. Tàlîra recognizes it immediately as a species the Epistemium attempted to cultivate under Ordo supervision twenty years ago and abandoned for reasons no one now remembers. She must decide whether to study it (which draws attention), destroy it (which seems like betraying knowledge itself), or bury it (which places her in the Ordo's debt).

2. **The Poisoning**—A student at the Epistemium falls ill with symptoms that match no known malady but respond to none of the standard physician's treatments. A desperate colleague of Kalliope's seeks Tàlîra's aid in secret, begging her to identify the poison. She recognizes it as a theoretical compound discussed only in suppressed Ordo texts—the kind that should not exist outside locked libraries. Finding an antidote means admitting how much she knows.

3. **The Seeker**—A young person from the outer provinces arrives in Thyrenae claiming to be a cousin of Tàlîra's, someone she has never heard of, with a letter of introduction from a relative she did not know was alive. They are observant, curious, and asking pointed questions about what Tàlîra's real work might be. Either they are genuinely family and represent a connection to her past she thought safely buried, or they are an agent sent to assess her, or they are something else entirely.

4. **The Compact**—Magistra Ariadne Thespis sends word that the arrangement protecting Tàlîra's safety may soon become impossible to maintain due to shifting political pressures within the Ordo. She offers a single alternative: become officially useful. The Ordo wants her to develop a specific remedy using methods and knowledge that would require her to admit her true capabilities. Accepting makes her visible; refusing breaks the only shield between her and exposure.

5. **Voices in the Dark**—A mystery cult known as the Luminaries—philosophers who believe direct empirical investigation should override institutional authority—has approached Tàlîra through oblique channels with a proposal: help them acquire certain suppressed texts from the Ordo's archives. The payment offered is substantial, the risk is absolute, but the opportunity to recover and preserve knowledge that the Ordo has buried is precisely the kind of thing that once made her willing to endure almost anything. She has asked for time to decide, and time is running short.
