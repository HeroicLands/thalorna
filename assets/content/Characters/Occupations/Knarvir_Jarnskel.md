---
shortcode: knrvrjrnskl
name: {full: Knarvir Jarnskel}
type: being
subType: npc
description: "A widely traveled merchant of Thraldfjord who keeps the village's small rite of the current, a minor scholar of Nordheimn antiquities fluent in foreign tongues and loosely attached to the Academy."
tags: [draft, guilded]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage, cleric]
  occupation: Mage (Spirit)
  lore: []
  culture: nordheimnclt
  homes: [thraldfjord]
  affiliations: {kngdmnrdhm: {rank: 3}, odvar: {rank: 1}}
  gender: male
  species: humanflk
  born: 666.118
  height: 5' 4"
  weight: 123 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: light
    complexion: [ruddy]
    extra_features: [a tattoo of a dolphin on the left wrist]
  packFolder: ankarisnordlands
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-eng, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-pfmy, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 16}}
    - {model: skill-thuravarkscript, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 9}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-slng, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-mysticalability-tarot, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-mysticalability-alch, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 75}}
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

Knarvir Jarnskel is a compact man, built closer to the squat proportions of the deep mountain dwellers than typical [[lore-nordheimnclt|Nordheimn]] people, with the weathered, ruddy face of someone who has spent decades on the northern seas and roads. His brown eyes are sharp but ringed with shadow from long nights over manuscripts and accounts. His brown hair, pulled back in a tight warrior's knot, shows streaks of gray that speak of age and hard living. But the most striking feature is the tattoo on his left wrist: a dolphin in blue ink, rendered with surprising artistry and entirely at odds with the typical Nordheimn aesthetic. It is a mark of his time in foreign ports and trading ventures—the only visible remnant of a past he does not discuss.

# Dossier {#dossier}

Knarvir Jarnskel was born to a family of skilled metalworkers and merchants in [[place-thraldfjord|Thraldfjord]], the kind of guilded-class family that occupied the space between common folk and nobility: respected, relatively comfortable, but never quite accepted into the higher tiers of Nordheimn society. His early life seemed ordinary, with training in his father's smithcraft, the family trade, and a practical merchant's life ahead of him.

He became a merchant of the trading networks that stretch from [[place-nordheim|Nordheim]] across the northern seas to distant southern ports. He traveled extensively, which explains his long absences and his command of foreign tongues, far beyond that of typical Nordmen. He brews beer and cooks, and he has made friends among foreign merchants and scholars. He keeps a workshop for metalcraft.

At home he keeps the small rite that asks the fjord's current for a fair season, a practice the gudi of the hov of the [[affiliation-thrunvald|Faith of Thrunvald]] tolerates without naming it faith. He is also affiliated loosely with [[affiliation-panepistmm|The Academy]], which gives him access to libraries and the standing of a scholar, and he has published a few respectable but unremarkable papers on metalcraft traditions and historical trading routes.

He is guarded, and a solitary man. He trusts few people, has lost friends and lovers to his long silences, drinks more than he should, and his hands shake on certain mornings.

:::secret {title="What the referee knows"}
At sixteen Knarvir's gift manifested in a way that was catastrophic for a young man in Nordheimn culture: he began to perceive spirits. These were not the approved contacts that the priests of [[affiliation-odvar|Odvar]]'s [Order of the All-Seeing Eye]{.name data-type="affiliation/order"} conduct through sanctioned ritual, but persistent, nearby presences: the spirits of the dead, the genius loci of places, the creatures of the unseen world. He found he could communicate with them in deep trances, bargain with them and draw on their power.

In Nordheim a man who practices seid, the shamanic spirit-walking arts, is branded _ergi_, unmanned. Seid is women's work, the domain of velvur and seer-priestesses, and the few men who practice it live in a hidden underground watched by the clergy and by society. Knarvir understood this at once and chose to hide. The fjord rite is the only part of his practice that stands in the open, and its toleration is what he trades on; in a village of two hundred where every household knows every other, the rest of his practice stays in the carefully warded chambers of his home and on his long journeys. His workshop is ostensibly for metalcraft but is used to prepare ritual items: talismans, spirit-vessels and the material apparatus of hidden practice.

For twenty-two years he has lived this double life. Fifteen years ago the shade of an ancient velva came to him insisting that knowledge was being lost and the old practices were in danger of complete suppression, and that he had to preserve what he knew. Since then he has documented the old rites, gathered forbidden texts, and taken a handful of carefully vetted students, all while keeping his merchant's cover. His relationship with the Academy is cynical: he uses its libraries and legitimacy and contributes nothing of his real knowledge. It would likely expel him if it understood his true practice, but he is too minor and too useful for it to investigate.

He suffers recurring nightmares in which the priests come for him and he is exposed before the ting and stripped of honor, family and life.
:::

## Psyche

Knarvir is extraordinarily intelligent and deeply learned in lore, and he channels these gifts largely into keeping his own counsel. His will is strong. He is skilled at human discourse, his Common is fluent, and he can charm when he needs to. His ability to brew and cook reflects competencies most Nordmen would never develop, suggesting a flexibility and willingness to learn that sits at odds with his culture.

:::secret {title="What the referee knows"}
Knarvir lives in constant fear of discovery, and the fear has hollowed him out. His will is spent on maintaining cover rather than on any positive goal, and his charm is an instrument of concealment rather than connection. His awareness lets him perceive the landscape differently, the flows of spirit-power, the thin places where worlds intersect, the places where old knowledge lingers, and spirits recognize him as one of their own. That same awareness makes him unbearably sensitive to threat: every conversation carries the risk of exposure, every encounter with officials is a potential trap, and he reads hostility into neutral glances. He has built such elaborate cover stories that he sometimes confuses what he did with what his persona is supposed to have done. He is deeply lonely, and the metaphor he uses in rare honest moments is drowning in air.
:::

## Social

Officially, Knarvir is a respected merchant and sometime scholar of Nordheimn antiquities, loosely affiliated with the Academy. He maintains a public persona as a somewhat eccentric but ultimately harmless middleman who brings foreign goods and foreign ideas into Nordheim, and whom the authorities tolerate because the trade is economically useful and he causes no visible disruption. He pays his taxes and keeps legitimate business relationships. He is not rich enough to draw significant attention, and not poor enough to seem suspicious.

He lives in Thraldfjord, a fishing village of some two hundred people, where he is known to every household as the man who keeps the rite of the current and goes away on trade.

:::secret {title="What the referee knows"}
Beneath this, he is part of an entirely different society: a network of hidden practitioners, most of them women but a handful of men like himself, who maintain the old arts in secret. They meet rarely and with extreme caution, and pass texts and knowledge through carefully obscured channels. It is a loose confederation bound by mutual interest and mutual vulnerability; if one falls, all may fall.
:::

## Companions

### Patrons and Teachers

- [Svalthmil Fisherman]{.name data-type="being/npc"}: A friend from Knarvir's merchant days, known from southern trading voyages. The arrangement is old and relatively safe.

:::secret {title="What the referee knows"}

- [Thurídur of the Deep Roads]{.name data-type="being/npc"}: His original teacher and the most powerful velva in the northern underground, now in her eighties and preparing to pass her knowledge on. She took him in when he manifested his gifts, taught him to survive and hide, and gave him the framework that allowed him to live at all. She is also his greatest source of paranoia: he worries that her age and visibility are a threat to the entire community and that someone will eventually break her and trace the network back to him. His love for her is absolute; his fear that she will bring him down is equally so.
- Svalthmil is actually a supplier of rare materials and books from beyond Nordheim. He asks no questions, and Knarvir pays well in coin that is clean and untraced.
  :::

### Enemies and Threats

- [Skaold Righteous]{.name data-type="being/npc"}: A clerk within Odvar's Order of the All-Seeing Eye, who has developed a personal crusade against "corruptions" in traditional practice. He is not yet investigating Knarvir specifically, but his inquiries are widening, and he has the authority and institutional backing to cause serious damage.
- [The Unidentified Watcher]{.name data-type="being/npc"}: A person or persons, Knarvir is uncertain which, who have been asking questions in Thraldfjord about Knarvir's past, his associates and his patterns of travel. The inquiries are subtle and indirect, which somehow makes them worse; whoever is interested in him is patient and practiced, not a casual busybody. He has no idea who they are or what they want.

:::secret {title="What the referee knows"}

- **His own fragmented self:** The part of him that is exhausted by hiding and increasingly questions whether this life is worth preserving. The breakdown he feels coming is near.
  :::

## Plot Hooks

Questions About a Merchant's Past
: Someone patient and indirect has begun asking in Thraldfjord about Knarvir's past, his associates and his travel patterns. In a village of two hundred a stranger's questions are noticed at once, but Knarvir cannot tell whether one person or several are asking, or what they want, and learning it means drawing attention to himself.

Skaold's Widening Inquiry
: Skaold Righteous, a clerk of the Order of the All-Seeing Eye, has widened his crusade against corruptions of traditional practice to the rites that the Faith of Thrunvald's gudi tolerates without naming faith, among them the rite of the current at Thraldfjord. Knarvir's name is not yet on his list. Knarvir can let the gudi's silence stand and keep to the village, or go to the merchants and scholars the inquiry will reach and put his own name in front of Skaold.

A Season the Fjord Withholds
: A season at Thraldfjord fails, and households that never fully trust the fjord ask whether the rite did its work, some of them blaming Knarvir. He can keep the rite under the gudi's eye and answer for it, or step back and let the gudi decide whether it continues.

:::secret {title="Further hooks"}
A Student Approached
: One of Knarvir's carefully vetted students, a younger woman he has trained in seid for five years, tells him that Skaold Righteous has approached her and knows some, though not all, of what she practices. She asks whether to run, confess or deceive. Knarvir can help her at the risk of the whole network, flee and abandon her, or move against Skaold and so against the clergy.

The Watcher Steps Forward
: The one asking after Knarvir proves to be a representative of [[affiliation-ordoarcanis|The Order]] in the south, interested in his spirit-craft. They offer protection and a place as a consultant in return for his knowledge, which would mean leaving Nordheim and probably betraying the hidden network.
:::
