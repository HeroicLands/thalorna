---
shortcode: talirbshrn
name: {full: Talira Basiron}
type: being
subType: npc
description: "A freeman alchemist of Thirenae, trusted for herbal remedies and discretion, who keeps a shop called The Argonaut."
tags: [draft, mages]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage, scholar]
  occupation: Alchemist
  lore: []
  culture: helioniteclt
  homes: [thyrenae2]
  affiliations: {thyrenae: {rank: 4}, marendas: {rank: 1}}
  gender: female
  species: humanflk
  born: 685.154
  height: 5' 3"
  weight: 117 lbs
  frame: light
  appearance:
    eye_color: amber
    hair_color: auburn
    skin_color: tanned
    complexion: [scarred]
    extra_features: [a scar on the left ear]
  packFolder: helladhelionis
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 28}}
    - {model: skill-helnkscrpt, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-mysticalability-alch, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 12}}
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

At 5'3" and slender of build, Talira Basiron cuts a deceptively fragile silhouette—one belied by the wiry strength visible in her forearms and the assured way she moves. Her face is striking rather than conventional: high cheekbones, a wide intelligent forehead, and eyes of deep amber that seem to catalog everything they encounter. Auburn hair, usually pinned or braided in the practical style of working scholars, frames features marked by a long scar that runs from her left temple down behind her ear—a thin line of pale tissue that catches light when she turns her head. Her skin holds the tanned olive complexion of southern [[place-helionis|Helionis]], and there is a faint callus across the inner fingers of her right hand, the mark of hours spent grinding herbs and mixing solutions. She favors a thick woolen cloak the color of burned sienna, and beneath it practical linen and wool—nothing that draws attention, everything chosen for utility.

# Dossier {#dossier}

Talira Basiron was born to a freeman metalworking family in the lower quarters of [[place-thyrenae2|Thirenae]] in 685 of the current age. Her father, [Dorashkar]{.name data-type="being/npc"}, was a respected bronzesmith; her mother, [Philonike]{.name data-type="being/npc"}, came from a merchant family with ties to [[place-pelagora2|Pelagora]]'s maritime trade. It was an education-minded household, the kind where even the children of tradespeople were expected to read and cipher. She was ten years old when [[affiliation-ordoarcanis|The Order]] came through Thirenae recruiting promising youths for preliminary training, a routine canvassing that changed her life.

Talira possessed the kind of aptitude examiners sought: quick reasoning (inherited from her mother's side), steady hands, an intuitive grasp of proportion and measurement, and most crucially, an unshakeable will. She was brought into the Order's preliminary circles at twelve and instructed in the philosophy of [[affiliation-zemorhodhis|The Six Ways]] and its theoretical groundwork. She left the Order's training at seventeen and took up alchemy instead, respectable and lucrative work outside the Order's formal hierarchy. A long scar runs from her left temple down behind her ear, and she does not say how she came by it.

She apprenticed under the alchemist [Momes Frekhezon]{.name data-type="being/npc"} in Thirenae's scholar quarter, a man of Order-adjacent standing. For fifteen years she built her practice, establishing herself as the most reliable source of herbal remedies, tinctures and medicinals in the town. She became known among the philosophers of [[affiliation-panepistmm|The Academy]] and the poorer quarters alike, neutral ground in a town of competing interests.

Now at 34, Talira runs her shop, "[The Argonaut]{.name data-type="affiliation/venture"}," named for the ancient voyagers, with expertise and a reputation for both efficacy and discretion. She moves carefully in Helionite society, neither seeking advancement nor hiding her competence. She understands heraldry and mercantilism because one cannot survive as a freeman in Thirenae without understanding the structures of power. Her friendship with [Kalliope Argyros]{.name data-type="being/npc"}, a scholar of natural philosophy at the Academy, provides her with the intellectual stimulation she needs, and her relationship with Captain [[being-bakionjamiro|Bákion Jamiros]] of Pelagora, who brings her rare herbs from coastal expeditions, gives her access to ingredients and information most alchemists never dream of.

:::secret {title="What the referee knows"}
At seventeen Talira witnessed something she should not have: a catastrophic failure during a Fire Theory demonstration that killed two other students and left her with the scar behind her ear. The Order hierarchy moved swiftly to conceal not only the tragedy but evidence of what had caused it, a theoretical disagreement about the stability of certain compound structures that had been summarily suppressed. The Order offered her silence, a generous stipend, and the quiet suggestion that she pursue alchemy, a gilded exile. She accepted because she chose not to become the Order's enemy; her family was not wealthy, and the Order's wealth and reach were absolute.

Her teachers in the Order had noticed her aptitude for the practical arts beneath magic, the physical precision of movement and control of breath and body found in fencing masters and ritual practitioners. She continued the training quietly through her years as an alchemist, never admitting it, and has an ambidextrous facility with weapons that no one would expect from a healer.

Roughly ten years ago she adopted the alias Elspeth Rowen, a name with no Helionite flavor, for clients from beyond Helionis whose patronage is lucrative but needs discretion. Some of her closest contacts know her only by it. In a town where the Order watches carefully and mystery cults wield political power, being two people is a survival skill.

Her unspoken understanding with _Marenda_ [[being-amitharabish|Amithara Bisanis]] of the Order, who engineered her exile and now ensures it stays permanent, is a cold peace neither will break. The scar is a reminder of what she learned and a warning about what she knows not to speak. She is not comfortable, but she is safe.
:::

## Psyche

Talira is a woman caught between multiple truths. She is deeply driven to heal and to understand the natural properties of substances; this is not a pose, but a core part of her identity. This has made her compassionate toward ordinary people, from whom she asks little, and cynical about systems of power. She trusts her judgment implicitly when it comes to matters of craft or empirical observation, but she has learned to doubt her own willingness to believe in institutional goodwill.

Her high will and reasoned approach mean she does not act impulsively, even when she is emotionally moved, and she _is_ emotionally moved, frequently and intensely. She feels the suffering of her patients, the struggles of the poor quarters she grew up near, the injustice of the world with an empathy that sometimes makes her angry. But she has learned to transmute that anger into work: another remedy, another carefully researched solution, another relationship built on mutual respect rather than obligation. She is not naive, but she has chosen not to become bitter. That choice costs her something every day.

The dancing she practices, with its movement, rhythm and precision, is partly for the joy of it and partly for the physical discipline it requires.

:::secret {title="What the referee knows"}
The knowledge she carries, that the institutions she might have served are willing to sacrifice lives to maintain their authority, is what makes her more compassionate toward ordinary people and more cynical about power. Her ambidextrous training and latent combat skills sit in her body memory like a secret language. She has not had to use them in earnest since the early days of her training, and she hopes never to.
:::

## Social

In Thirenae, Talira occupies the position of respected tradesperson-scholar, the kind of freeman whose education and competence grant her a certain autonomy but also a clear ceiling on aspiration. She cannot enter the Academy formally, cannot join the Order, cannot claim the kinds of authority that family connections or wealth might provide. What she has instead is reputation: people trust her, seek her counsel on matters beyond mere remedies, recognize her as someone who keeps confidences and delivers results.

The Academy acknowledges her in the way institutions acknowledge useful outsiders, with civility, occasional commissions for specialized remedies, and careful distance. The merchant guilds view her as a peer in economic standing if not in formal membership. The mystery cults leave her carefully alone, sensing in her the kind of knowledge that makes her dangerous without making her committed.

Her deepest social connection is to Kalliope Argyros, a scholar of botanical applications and mineral properties some ten years her junior, whose curiosity about the theoretical underpinnings of alchemical practice has made her something like a friend, which is rarer than she might wish in a town where relationships are often transactional. Among the poorer quarters where she came from, she is remembered with gratitude, though she keeps a certain distance even from these connections, aware that vulnerability is a luxury she cannot quite afford.

:::secret {title="What the referee knows"}
The Order watches her with the attention of people who have made an arrangement they prefer not to think about. Her alias, her relationships with figures of the coastal trade, and her connections beyond Thirenae mark her as a woman with resources and reach beyond her apparent station. Those who notice say nothing, and those who need her services know where to find her under either name.
:::

## Companions

### Patrons and Allies

- **Kalliope Argyros:** A scholar at the Academy, specializing in the natural philosophy of botanical and mineral applications. Ten years Talira's junior, Kalliope's curiosity and rigorous methodology have made her Talira's closest intellectual companion. They meet monthly in a discreet corner of the [Peacock Gardens]{.name data-type="place/site"} to discuss theory and exchange findings.
- **Captain Bákion of Pelagora:** A seagoing merchant and explorer who brings rare herbs and unusual specimens back from trading expeditions beyond the known coasts. He contracts with Talira for custom remedies, and she provides him with counsel on substances that aid long voyages and combat shipboard illness. He owes her a life once, when a fever nearly took him, and he pays that debt in loyalty and silence.

:::secret {title="What the referee knows"}

- **Marenda Amithara Bisanis:** The Order official who arranged Talira's removal from active training and has since ensured her continued safety by keeping certain eyes averted. They have never been friendly, but they are reliable to one another in the way that rivals with too much information to share can be.

Kalliope has never asked about the Order, and Talira has never explained. Bákion suspects she is more than she appears and has never pressed the matter.
:::

### Enemies and Threats

- [[affiliation-sekran|The Arcane Inquisition]]: [[lore-vylarianclt|Vilérian]] inquisitors are not openly active in Helionis proper, but their agents move through the cities gathering intelligence on unlicensed practitioners and heretical knowledge. Talira has thus far escaped their notice, partly through her careful discretion.
- [Kharos the Bitter]{.name data-type="being/npc"}: A rival alchemist whose practice Talira undercut five years ago by securing an exclusive contract to provide remedies to a major noble household. Kharos has spent those years cultivating connections among the Order's lower ranks and spreading rumors that Talira's remedies contain unlicensed workings, a serious accusation that, if believed, could bring official investigation. He has not yet attempted anything direct, but his patience is clearly wearing thin.

:::secret {title="What the referee knows"}

- **Unfinished business from the Order:** Not all those involved in the tragedy at her initiation have risen as safely as _Marenda_ [[being-amitharabish|Amithara Bisanis]]. At least one individual of mid-ranking Order standing was present that day, knows that Talira witnessed the suppression, and now holds a position where exposing her would serve their interests politically. Talira does not know who this person is.

Her protection from the Inquisition's notice is partly the Order's protective indifference: it prefers her obscurity to scrutiny that might expose its own fragile authority.
:::

## Plot Hooks

A Plant That Should Not Exist
: A rare herb in one of Captain [[being-bakionjamiro|Bákion Jamiros]]'s shipments fits no established botanical classification. Talira knows it as a species the Academy tried to grow under Order supervision twenty years ago and dropped for reasons nobody now remembers. She can study it and draw attention, destroy it and lose the knowledge, or hand it to the Order and owe it a debt.

An Illness No Physician Can Name
: A student at the Academy falls ill with symptoms that match no known malady and resist every standard treatment. A desperate colleague of Kalliope Argyros comes to Talira in secret and begs her to find the cause. Finding an antidote means admitting how much she knows.

A Cousin She Never Heard Of
: A young person from the outer provinces arrives in Thirenae claiming to be Talira's cousin, with a letter of introduction from a relative she did not know was alive. The newcomer is observant and asks pointed questions about her real work. Talira must decide whether this is family, an agent sent to assess her, or something else.

:::secret {title="Further hooks"}
Becoming Officially Useful
: [[being-amitharabish|Amithara Bisanis]] sends word that political pressure inside the Order may soon make the arrangement that protects Talira impossible to keep. The one alternative offered is to become officially useful by developing a specific remedy, which requires admitting her real capabilities. Accepting makes her visible and refusing ends the only shield she has.

The Compound in the Locked Texts
: The poison that sickens the student is a theoretical compound discussed only in suppressed Order texts, the kind that should not exist outside locked libraries. Talira knows it on sight, and an antidote shows how deep her knowledge goes.
:::
