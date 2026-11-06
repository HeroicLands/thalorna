---
shortcode: carengrvth
name: {full: Kárenna Graveth, given: Kárenna, clan: Graveth}
type: being
subType: character
description: "A Herald of the Crown of Tarvénia from Thórgila, a skilled mediator whose ambition and private alliances have given her enemies at court."
tags: [heroes-and-knaves, guilded, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier, scholar]
  occupation: Herald
  lore: []
  culture: tarvenanclt
  homes: [thorgila]
  affiliations: {kingdmtrvn: {rank: 3, office: Herald of the Crown}, pozeras: {rank: 1}}
  gender: female
  species: humanflk
  born: 688.111
  height: 6'
  weight: 167 lbs
  frame: light
  appearance:
    eye_color: green
    hair_color: black
    skin_color: olive
    complexion: [clear]
    extra_features: []
  packFolder: aureldiatarvenia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-lshirt}
    - {model: sohl-sohl-armorgear-sgtrsr}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-armorgear-slkclk}
    - name: Leather satchel for official documents
      type: miscgear
      system: {shortcode: leathersatchel, weight: 1, value: 100, durability: 3}
    - name: Scrolls of royal announcements
      type: miscgear
      system: {shortcode: scrollsofroyal, weight: 1, value: 100, durability: 3}
    - name: Family seal (Graveth)
      type: miscgear
      system: {shortcode: familyseal, weight: 1, value: 100, durability: 3}
    - name: Silver writing pen
      type: miscgear
      system: {shortcode: silverwritingpen, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - name: Ink bottle and parchment sheaf
      type: miscgear
      system: {shortcode: inkbottle, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-containergear-bpchmd}
    - {model: sohl-sohl-containergear-backpk}
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

![[carengrvth|Kárenna Graveth]]{float=top-left}

Kárenna Graveth is a 31-year-old woman who stands 6'0" tall and is of light build. She has an oblong face with a prominent nose, a strong jawline, well-defined lips and expressive brows. Her green eyes are quick and warm and miss very little, her olive skin is clear, and her black hair is dressed for court even on the road. She carries her height like a dancer, and her voice reaches the back of a hall without being raised.

# Dossier {#dossier}

Born into the Graveth family of [[place-thorgila|Thórgila]], a family of standing that holds no lordship but has long had friends at the High King's court, Kárenna was raised in an environment where words were as valuable as swords and social grace was an imperative. Her early training in Heraldry began before she could properly write, learning the complex symbology and lineage of the noble houses, the elaborate forms of herald-craft, and the weight of official pronouncements. She proved adept at these studies, her natural eloquence and perceptiveness making her stand out among her peers.

At twenty-four, she was named a Herald of the Crown of [[affiliation-kingdmtrvn|Tarvénia]] and attached to the High King's household at [[place-lezkora|Lezkora]], a post of real prestige. For the past seven years, she has been one of the kingdom's principal emissaries and bearers of official messages, attending royal functions, delivering proclamations, and—increasingly—handling delicate negotiations between fractious noble houses. Her success comes not from blind adherence to form, but from her willingness to adapt tradition to circumstance, to find common ground between opposing parties, and to speak with the voice of the crown in ways that inspire rather than merely compel obedience.

## Psyche

### Personality

Kárenna is a masterwork of careful cultivation, so practiced in the arts of social performance that distinguishing her authentic self from her carefully maintained public persona has become nearly impossible—perhaps even for herself. She is warm and engaging, interested in the concerns of others, skilled at making each person feel heard and valued. Yet this warmth coexists with a calculating mind; she is always aware of social hierarchies, political alignments, and the leverage points within any conversation. Her wit is sharp and her humor typically gentle, though those who cross her discover that she can deploy words as precisely as any blade.

Her philosophy is fundamentally pragmatic: the world is better served by agreement than conflict, by compromise than absolutism, by understanding than judgment. This makes her an excellent mediator but occasionally renders her morally ambiguous—she will argue persuasively for positions she does not personally believe in if doing so advances the cause of peace. Her fellow-feeling is real but selective; she feels deeply for those within her circle of concern, yet can maintain emotional distance from the broader consequences of her diplomatic maneuvering.

### Motivation

Kárenna's driving ambition is the advancement of her house and, by extension, herself. She seeks to become the most trusted advisor to the crown, the herald whose voice carries such weight that her recommendations shape policy. She believes that by placing the Graveth name at the center of the court's favor, she secures not only her family's prosperity but her own lasting legacy. She also harbors a real, if secondary, commitment to preventing conflict where possible, viewing her diplomatic successes as victories for the realm itself. Recognition and status matter deeply to her; she cultivates the appearance of humble service while actually pursuing power and influence with considerable ambition.

### Strengths

Eloquence and Voice
: Eloquent and clear-voiced, Kárenna can persuade, inspire, command, and soothe through speech alone. She understands the music of language and deploys it with artistry.

Diplomatic Acumen
: Her fellow-feeling, perception, reasoning, and social grace make her adept at reading people, understanding their motivations, and finding pathways to agreement.

Heraldic Knowledge
: Her mastery of heraldic lore, noble lineages, and courtly form means she can handle the politics of Tarvénia's nobility with authority and precision.

Physical Grace and Presence
: Trained in dancing and movement from childhood, she possesses the physical poise that reinforces her verbal authority. Her bearing alone commands attention.

Intrigue and Guile
: Her high skill in intrigue and guile, combined with her apparent openness, allows her to move through hidden political currents while maintaining plausible deniability about her own role in events.

### Weaknesses

Lack of Physical Prowess
: She is not a fighter and possesses no martial skills of note. In physical danger, she is vulnerable and dependent on guards or allies for protection.

Over-Investment in Consensus
: Her tendency toward diplomacy and compromise can leave conflicts papered over rather than settled, storing problems for later ignition.

Perceived Lack of Gravity
: Some traditionalists view her new approach to herald-craft as insufficiently formal or authoritative. Important figures from older traditions sometimes doubt her sincerity or question her qualifications.

Emotional Distance and Inauthenticity
: Her constant performance and cultivation of persona can leave her isolated, unsure whom—if anyone—she can trust with her true self. She struggles with authentic emotional connection.

Dependence on Position
: Her power derives entirely from her role and reputation. Without her status as a herald of the crown, she would be merely another ambitious noble, and this knowledge creates a subtle anxiety that drives increasingly risky political maneuvering.

## Social

### Patrons

Lord [[being-iltherozedim|Ilthero]] III, a Crown Councilor of Lyenrik
: The Councilor values Kárenna's counsel and has come to rely on her judgment in matters of diplomacy and internal realm politics. He has indicated subtle support for her continued advancement within the herald corps.

Lord [[being-volkemokaldr|Volkemo Kaldris]], Marshal of Lyenrik
: A powerful lord of the lowland host who has engaged Kárenna's services repeatedly in mediating disputes with the neighboring kingdoms. He views her as a valuable ally.

Lady [[being-hiltheratsol|Hilthera Tsoluregi]], Master of Commerce
: The king of Lyenrik's chief advisor on trade, a Crown Councilor at Torvaleth, who has become Kárenna's closest confidant and patron among the courts and guides her through the currents of the lowland lords.

### Enemies

Lord [[being-ervothotholm|Ervotho Tholmaris]], Herald Emeritus
: The previous chief herald, now retired, views Kárenna as an upstart who lacks the necessary gravitas for her position. He has begun subtly undermining her authority, questioning her decisions before the High King and his allies among the older nobility.

The conservative priests
: Some of the older priests of the twelve faiths of the [[affiliation-arldnpnthn|Aureldian Pantheon]] think Kárenna's pragmatic morality improper in a woman who speaks for the crown, and have begun questioning her moral standing from their pulpits.

Merchant-Lord [[being-bedarrekmozk|Bedarrek]]
: A wealthy and politically connected trader whose interests Kárenna opposed in a recent negotiation, resulting in significant financial loss to his enterprises. He has been quietly gathering evidence of her conflicts of interest and inappropriate relationships, intending to expose her when circumstances allow.

### Affiliations

- **[[affiliation-kingdmtrvn|Kingdom of Tarvénia]]**: Kárenna is of the Gentry and holds the office of Herald of the Crown, which is her source of authority and the protection of her person.
- **The Graveth family**: Her family, whose interests she quietly promotes through her position.
- **[[affiliation-pozeras|Faith of Pozeras]]**: She keeps a public devotion to Pozeras the Voyager while privately doubting the priesthoods.

## Plot Hooks

1. **The herald's house.** The quarrels of the High King's court follow Kárenna home to [[place-thorgila|Thórgila]]. [[being-nizelganotis|Nizel Ganotis]] asks her to carry the court's displeasure to her neighbor, Father Ostaran Dorvás, who is investigating him.
2. **The merchant's leverage.** [[being-bedarrekmozk|Bedarrek Mozkarreta]] reveals that he holds documented evidence of her conflicts of interest and offers her a choice. She asks a party to learn how he came by it.
3. **The old herald.** [[being-ervothotholm|Ervotho Tholmaris]] is undermining her authority with the older nobility at Lezkora. She asks a party to carry the crown's word to a lord who will not take it from her.

:::secret {title="The Marshal"}
Kárenna is the occasional lover of [[being-volkemokaldr|Volkemo Kaldris]], the Marshal of Lyenrik, and the two keep it carefully concealed.

:::
