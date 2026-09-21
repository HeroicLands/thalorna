---
tags:
  - draft
  - guilded
  - mages
  - character
name:
  full: Thórir Járnskel
  title: ""
  given: Thórir
  clan: Járnskel
  home: greyfjord
  aliases:
    - Darius Thornveil
packFolder: ankarisnordlands
shortcode: thrrjrnskl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Mage (Spirit)
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 54
  birthday: 666/4/27
  height: 1.63
  weight: 56
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: light
    complexion: ruddy
    extra_features:
      - a tattoo of a dolphin on the left wrist
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-odinn }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-thuravarkscript, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 9 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-mysticalability-tarot, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-mysticalability-alch, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 75 } }
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

Thórir is a compact man, built closer to the squat proportions of the deep mountain dwellers than typical Nordmen, with the weathered, ruddy face of someone who has spent decades between worlds. His brown eyes are sharp but ringed with shadow, suggesting long nights spent poring over manuscripts or traversing planes of existence most people cannot perceive. His brown hair, pulled back in a tight warrior's knot, shows streaks of gray that speak of age and hard living. But the most striking feature is the tattoo on his left wrist: a dolphin in blue ink, rendered with surprising artistry and entirely at odds with the typical Nordheimn aesthetic. It is a mark of his time in foreign ports and trading ventures—the only visible remnant of a past he does not discuss. Despite his modest stature and quiet demeanor, there is something unsettling about his presence, a sense that he perceives things others do not, that he is only partly in this world.

# Dossier {#dossier}

Thórir Járnskel was born to a family of skilled metalworkers and merchants in [[place-greyfjord|Greyfjord]], the kind of guilded-class family that occupied the space between common folk and nobility—respected, relatively comfortable, but never quite accepted into the higher tiers of Nordheimn society. His early life seemed ordinary: training in his father's smithcraft, learning the family trade, preparing for a practical merchant's life. But at sixteen, his gift manifested in a way that was catastrophic for a young man in Nordheimn culture.

Thórir began to perceive spirits.

Not the approved, formal contacts that the priests of Ódinn's Order of the All-Seeing Eye conducted through sanctioned ritual. Not the divine visions granted to the clergy as instruments of the God's will. But persistent, nearby presences—the spirits of the dead, the genius loci of places, the creatures of the unseen world. And worse, he found he could _communicate_ with them, that they came to him when he slipped into deep trances, that he could bargain with them and draw on their power.

In [[affiliation-kngdmnrdhm|Nordheim]], for a man to practice seidr—the shamanic, spirit-walking arts—is to be branded _ergi_, unmanned, a serious cultural transgression. Seidr is women's work, the domain of völvur and seer-priestesses. The few men who practice it exist in a hidden underground, watched by both the official clergy and by society at large. Thórir understood this immediately, and he chose to hide.

For thirty years, he lived a double life. Publicly, he was a respectable merchant, well-connected in the trading networks that stretched from Nordheim across the northern seas to distant southern ports. He traveled extensively—which provided excuse for his long absences and explained his command of Common Speech, far beyond that of typical Nordmen. He brewed beer and cooked; he made friends with foreign merchants and scholars. He kept a workshop ostensibly for metalcraft but actually for the preparation of ritual items: talismans, spirit-vessels, the material apparatus of hidden practice.

And in the depths of his home, in carefully warded chambers, he walked between worlds.

The catalyst for his change came fifteen years ago when a spirit—a particularly powerful one, the shade of an ancient völva—came to him insisting that knowledge was being lost, that the old practices were in danger of complete suppression, that Thórir had to preserve what he knew. He has spent the intervening years documenting the old rites, gathering forbidden texts, taking on a handful of carefully vetted students—all while maintaining his merchant's cover and attending trade gatherings that mean nothing to him. He is affiliated loosely with [[affiliation-panepistmm|the Panepistemium]], which provides scholarly legitimacy and access to libraries, though the Epistemium has no idea what he truly studies.

But living this way has taken its toll. He is paranoid—reasonably so. He trusts almost no one. He has lost friends and lovers because he could never fully open himself to them. He suffers from recurring nightmares where his practice is discovered, where the priests come for him, where he is exposed before the thing-assembly and stripped of honor, family, and life. He drinks more than he should, and his hands shake on certain mornings.

## Psyche

Thórir is a man living in constant fear of discovery, and that fear has hollowed him out in subtle ways. He is extraordinarily intelligent and deeply learned in lore, but he channels these gifts almost entirely into finding new ways to hide. His will is strong, but it is spent on maintaining cover rather than pursuing any positive goal. He is skilled at human discourse and manipulation—his Common is fluent, and he can charm when he needs to—but these are instruments of concealment rather than connection.

His greatest asset is his awareness and his understanding of hidden things. He perceives the landscape differently than other people—he sees the flows of spirit-power, the thin places where worlds intersect, the places where old knowledge lingers. His aura suggests that spirits recognize him as one of their own, that even humans instinctively sense something other about him. His ability to brew and cook reflects competencies most Nordmen men would never develop, suggesting a flexibility and willingness to learn that sits at odds with his culture.

But that same awareness that makes him gifted makes him unbearably sensitive to threat. Every conversation carries the risk of exposure. Every encounter with officials is a potential trap. He reads hostility into neutral glances. He has constructed such elaborate mental models of possible threats and cover stories that he sometimes confuses what he actually did with what his fictional persona is supposed to have done. He is deeply lonely, isolated by his necessary secrecy and by the understanding that if anyone truly knew him, he would be destroyed.

The metaphor he uses most often, in the rare moments he is honest about his emotional state, is drowning—he describes himself as drowning in air, unable to breathe, holding his head just above water while everyone around him remains perfectly comfortable.

## Social

Officially, Thórir is a respected merchant and sometime scholar of Nordheimn antiquities, loosely affiliated with the Panepistemium. He has published a few respectable but unremarkable papers on metalcraft traditions and historical trading routes. He maintains a public persona as a somewhat eccentric but ultimately harmless middleman—someone who brings foreign goods and foreign ideas into Nordheim, and whom the authorities tolerate because the trade is economically useful and he causes no visible disruption.

This cover is solid enough to withstand casual scrutiny. He pays taxes, maintains legitimate business relationships, sits on a minor guild council. He is not rich enough to draw significant attention, not poor enough to seem suspicious. He lives in Greyfjord, a large trading city, where transience and eccentricity are expected and overlooked.

But beneath this, he is part of an entirely different society: a network of hidden practitioners, most of them women but a handful of men like himself, who maintain the old arts in secret. They meet rarely and with extreme caution. They pass texts and knowledge through carefully obscured channels. It is not quite an organization so much as a loose confederation bound together by a combination of mutual interest and mutual vulnerability—all of them are committing a cultural and perhaps a legal transgression, and if one falls, all may fall.

His relationship with the Panepistemium is entirely cynical: he uses their libraries and archives, their legitimacy and their protection, while contributing nothing of his real knowledge. The Epistemium would likely expel him if they understood his true practice, but he is too minor and too useful for them to bother investigating thoroughly.

## Companions

### Patrons and Teachers

**Thurídr of the Deep Roads**, his original teacher and the most powerful völva in the northern underground (though she is now in her eighties and preparing to pass her knowledge on). She is the person Thórir owes the most—she took him in when he manifested his gifts, taught him to survive and hide, gave him the framework that allowed him to live at all. She is also his greatest source of paranoia; he constantly worries that she is becoming a liability, that her age and visibility are threats to the entire community, that someone will eventually break her and trace the network back to him. His love for her is absolute; his fear that she will bring him down is equally so.

**Kolr Fisherman**, an ostensible friend from his merchant days (connection from southern trading voyages) who is actually a supplier of rare materials and books from beyond Nordheim. The arrangement is old and relatively safe; Kolr asks no questions, and Thórir pays well in coin that is clean and untraced.

### Enemies and Threats

**Skaold Righteous**, a clerk within Ódinn's Order of the All-Seeing Eye, who has developed a personal crusade against "corruptions" in traditional practice. He is not yet investigating Thórir specifically, but his inquiries are widening, and he has the authority and institutional backing to cause serious damage. The tension is building.

**The Unidentified Watcher**, a person or persons (Thórir is uncertain which) who has been asking questions in Greyfjord about Thórir's past, his associates, his patterns of travel. These inquiries are subtle and indirect, which somehow makes them worse—they suggest that whoever is interested in him is patient and practised, not a casual busybody. He has no idea who they are or what they want, which is the core of his current paranoia.

**His Own Fragmented Self**, the most dangerous enemy—the part of him that is exhausted by hiding, that wants to simply _be_ without constant fear, and that increasingly questions whether this life is even worth preserving. The breakdown he feels coming is not distant; he knows it is near.

## Plot Hooks

1. **The Student's Betrayal** — One of Thórir's carefully vetted students, a younger woman he trained in seidr over the course of five years, comes to him with news: she has been approached by Skaold Righteous, and Skaold knows some (but not all) of what she practices. She is begging Thórir for guidance on whether to run, admit everything, or attempt to deceive Skaold. Thórir can help her, at the risk of exposing the network; flee first, abandoning her and the others; or move against Skaold directly, which means acting against the institutional clergy.

2. **The Unidentified Watcher Reveals Themselves** — The person or persons investigating Thórir finally makes direct contact, revealing that they are a representative of the southern [[affiliation-ordoarcanis|Ordo Arcanis]], interested in his spirit-craft for reasons he does not initially understand. They offer him a proposition: share his knowledge, become a consultant to their organization, gain protection through their institutional power. The catch is that doing so would require him to leave Nordheim and potentially betray the hiding network. The offer is tempting and deeply dangerous.

3. **Thurídr is Dying** — His teacher suffers a sudden severe illness (or falls into a supernatural crisis that only manifests as illness). Thórir must either stay hidden and hope she survives without him (knowing she probably will not), or reveal himself by coming openly to her aid. The time pressure is extreme; he has perhaps three days to decide before the moment passes.

4. **The Spirit's Demand** — The same powerful spirit that years ago demanded he preserve knowledge comes to him with a new command: there is something hidden in the world that must be found, retrieved, and protected. To find it, Thórir will need to undertake a spirit-journey of unprecedented depth and scope, but he will also need to gather allies and resources in ways that will necessarily expose his practice. The spirit is not asking; it is commanding in terms that make clear that refusal is not an option.

5. **The Merchant's Identity Collapses** — Through a chain of events he cannot entirely predict (perhaps a rival merchant, perhaps simple bad luck), his cover story begins to unravel. People are putting together inconsistencies: his absences, his possessions, his associations. Within two weeks, he will either need to solidify an entirely new false identity (requiring resources and risk he does not have), disappear entirely, or admit something true. He has never faced exposure before, and he is not certain what he will choose when forced to actually decide.
