---
tags:
  - todo
  - draft
  - administration
  - character
name:
  full: Glýenna Cárdeth
  title: Lady
  given: Glýenna
  clan: Cárdeth
  home: portaelion
  aliases:
    - Aperâni Valeria Firebrand
packFolder: aureldiaelavendre
shortcode: glyencrdth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Noblewoman / Head of House Cárdeth
  stations: []
  lore:
    - elavendriclt
    - landedlordrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: female
  species: null
  born: 692/3/25
  height: 1.8
  weight: 76
  frame: medium
  appearance:
    eye_color: gray
    hair_color: blonde
    skin_color: light
    complexion: smooth
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-blackflame }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 30 } }
    - { model: skill-thrvrdhscrpt, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 14 } }
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

Glýenna Cárdeth is a 32-year-old woman who stands 5'11" tall and carries herself with the upright, unhurried posture of someone who has never had to rush for anyone. She has a diamond face with high cheekbones, a prominent forehead, and a sharp jaw that leads to a pointed chin. Her round gray eyes sit beneath arched brows, and she has a way of looking at people that makes them feel they are being assessed—because they are. She has a slightly upturned nose and thin lips. She has light skin with a smooth complexion. Her blonde hair falls past her shoulders, usually arranged in one of the elaborate styles fashionable among the Élavendri court. She dresses impeccably—velvet robes, silk gloves, fine leather boots—and wears the signet ring of House Cárdeth on her right hand. She carries a dagger openly at her waist, which is not unusual for a noblewoman in a kingdom where even courtiers are expected to be capable of their own defense, though few who have seen her draw it socially would guess how well she can use it.

# Dossier {#dossier}

Glýenna was born into House Cárdeth, a noble family of moderate standing in the [[affiliation-kngdmlvndr|Élavendre]] court—old enough name to command respect, not prominent enough to attract unwanted scrutiny. She was raised in the way of Élavendri noblewomen: tutored in letters, heraldry, law, and the arts of discourse; expected to manage a household, navigate court politics, and represent her house with grace. She excelled at all of it. Where other young noblewomen found the endless social maneuvering of court life tedious, Glýenna found it invigorating—not because she enjoyed people, but because she enjoyed winning.

Glýenna married young, at nineteen, to Lord Ráegon Cárdeth, a man fifteen years her senior who held the family's estates and its seat on the regional council. The match was advantageous and, by all outward appearances, stable. Ráegon was a decent man—well-liked, politically moderate, content to manage his lands and let the larger currents of Élavendri politics flow around him. Glýenna found him dull. She managed the household, bore the social obligations of the marriage, and quietly began building her own network of relationships among the court's more ambitious factions.

Three years ago, Lord Ráegon was killed in what was reported as a bandit raid on the road between his estates and [[place-elanmere|Elanmere]]. The attack was unusually well-coordinated for common bandits—the escort was ambushed at a narrow point where reinforcement was impossible, and Ráegon was specifically targeted while his servants were left alive to carry the news. The Wardens investigated under the command of Captain [[being-dharnvldrn|Dháran Véldarin]], who concluded that the attackers were a raiding party from beyond the border, likely opportunistic, and that there were no further leads to pursue. The case was closed.

The raid was, in fact, coordinated by Dháran at Glýenna's request.

Ráegon's death was not driven by hatred—Glýenna is not sentimental enough for hatred—but by calculation. His moderate politics and passive temperament were obstacles. As his widow, Glýenna inherited control of House Cárdeth's affairs, its council seat, and the freedom to act without a husband's oversight. She has used all three to considerable effect.

Her connection to [[affiliation-blackflame|The Black Flame]] predates her marriage. She was recruited as a young woman, not through the martial channels that brought Dháran to the faith but through the quieter path of ideology—a noblewoman who looked at the polite fictions of Élavendri court life and saw them for what they were: mechanisms by which the timid restrained the capable. The Black Flame's doctrine that strength should rule, that the world belongs to those willing to seize it, resonated with a woman who had spent her adolescence watching mediocre men hold power by virtue of birth while sharper minds deferred to them out of custom. She does not worship fire in the visceral, physical way Dháran does. Her faith is colder and more abstract—a conviction that the natural order is one of dominance, and that the elaborate courtesies of civilization exist to disguise this fact from those too weak to face it.

Her working relationship with Dháran is the operational backbone of the Black Flame's presence in the Elanmere region. Where Dháran commands the Wardens and controls the investigation apparatus, Glýenna operates in the spaces he cannot reach—the court, the council chamber, the drawing rooms where reputations are built and destroyed. When Dháran's lack of political grace threatens to draw the wrong kind of attention, it is Glýenna who smooths things over: a quiet word with the right councillor, a social favor called in, a subtle redirection of gossip. When one of Dháran's followers does something reckless and the resulting investigation begins to gain traction, Glýenna sees that the council's priorities shift elsewhere. She does not give Dháran orders—he is the senior figure in the faith, and she respects both his rank and his capabilities—but he has learned to listen when she advises, because her judgment in matters of politics and perception has proven consistently sound.

Dháran, for his part, treats Glýenna with the regard of a man who recognizes a peer, not the deference that men of his temperament sometimes offer to noblewomen. She has proven herself ruthless when the situation demands it, capable with a blade when circumstances have forced her hand, and reliable in a crisis. She arranged her own husband's death without flinching and managed the aftermath with flawless composure. In the Black Flame's hierarchy of strength, that earns respect regardless of gender or station. When Glýenna requires martial support—a threat silenced, a message delivered with force—Dháran provides it without question.

## Psyche

### Personality

Glýenna presents to the world as a composed, capable noblewoman of the Élavendri court—dignified, articulate, and socially precise. She observes every courtesy, fulfills every obligation of her station, and conducts herself with the kind of controlled grace that earns admiration from peers and deference from subordinates. None of this is false, exactly. She is skilled at the work of court life. But the warmth is performed, and those who spend enough time around her begin to sense it.

She has a reputation for being stern. Servants and lesser nobility experience her as exacting and dismissive—not cruel, but cold, with an air of impatience toward anyone she considers beneath her notice. She does not raise her voice. She does not need to. A cool look and a clipped word is enough to send a servant scurrying, and her silences in conversation carry a weight that more voluble women cannot match. She insists on being addressed properly as Lady Cárdeth—not out of vanity, but as a matter of principle. Rank, in her view, exists to be observed, and those who neglect the forms are announcing that they do not take the structures of authority seriously. A servant who calls her "my lady" rather than "Lady Cárdeth" will be corrected once, quietly, and will not need to be corrected again. Among her equals she is warmer, or at least more engaged, though even here there is a quality of assessment—as though every exchange is being weighed and cataloged for future use.

Beneath the surface, Glýenna is as cold and calculating as any operative the Black Flame has ever produced. She does not experience the hot, physical fervor that drives Dháran and his followers. Her commitment to the faith is intellectual and absolute: she believes the strong should rule because she has observed, her entire life, that they do—and that everything else is pretense designed to make the arrangement more palatable to those on the bottom. She feels no guilt over Ráegon's death, no remorse over the people Dháran's followers have harmed, and no conflict between her public persona and her private beliefs. The mask of the gracious noblewoman fits comfortably because she has worn it since childhood, and because she understands, in a way that Dháran does not, that the mask is itself a weapon.

### Motivation

Glýenna wants power—not the ceremonial kind that comes with a title, but the operational kind that determines outcomes. She wants to be the person in the room whose word shapes what happens next, and she wants this not for its own sake but because she believes she is better at it than anyone else around her. The Black Flame's philosophy validates this ambition: if the strong should rule, and if she is demonstrably more capable than the men and women who currently hold authority in Élavendre, then her rise is justified and inevitable.

More practically, she is building House Cárdeth into a vehicle for the Black Flame's influence at the council level. She wants a seat at the tables where Élavendri policy is made—not to burn those tables, but to control who sits at them. She understands, as Dháran sometimes does not, that the Black Flame's long-term success in Élavendre depends not on open confrontation but on having enough people in the right positions that confrontation becomes unnecessary.

### Strengths

Glýenna's greatest asset is her ability to operate in two worlds simultaneously without the seams showing. She can spend a morning manipulating a council vote, an afternoon hosting a perfectly gracious reception for visiting dignitaries, and an evening reviewing intelligence from Dháran's network, and no observer would see anything but a busy noblewoman managing her affairs. Socially she is very able: she reads people quickly and accurately, knows when to charm and when to intimidate, and has an instinct for the leverage points in any political situation. Her knowledge of law, heraldry, and mercantile affairs gives her practical tools that complement Dháran's martial ones. And while she is no warrior, she is more capable with a blade than her station would suggest—she trained seriously in her youth and has maintained her skills discreetly, and the few people who have seen her fight did not live to revise their assumptions.

### Weaknesses

Glýenna's contempt for those she considers lesser is her most dangerous liability. She manages it well in public—the mask rarely slips—but her dismissiveness toward servants, minor officials, and lower nobility means she is blind to threats from below. The servant who overhears a conversation, the clerk who notices a discrepancy in the accounts, the minor lord whose humiliation at her hands festers into something actionable—these are the threats she consistently underestimates because she does not consider such people worth her attention.

Her emotional coldness, while operationally useful, has left her without real allies. She has associates, clients, and subordinates, but no one who would stand by her out of affection rather than calculation. If her position ever collapses, there will be no one to catch her—only people settling accounts. Her relationship with Dháran is the closest thing she has to a partnership, and even that is ultimately transactional: they respect each other's capabilities and serve the same cause, but neither would hesitate to sacrifice the other if the faith demanded it.

She is also more fragile than she appears. Her composure is total and unbroken, but it depends on control—control of her environment, her household, her public image. A situation that stripped away her ability to manage perceptions, that forced her to operate without the social apparatus she has spent her life mastering, would expose vulnerabilities she has never had to confront.

## Social

Glýenna holds a respected position in Élavendri society as the head of House Cárdeth and the widow of Lord Ráegon. The sympathy that attended her husband's death has long since faded into a settled recognition that Lady Cárdeth manages her house's affairs with notable competence. She sits on the regional council as head of her house, votes on matters of local policy, and is courted by various factions who value her sharp mind and her willingness to make decisions.

She is not loved. She is respected, and in some quarters feared, which she considers more useful. Her reputation for sternness is well known—servants trade stories about her cold silences, and junior members of the court have learned to prepare carefully before bringing business to her attention. Among her peers she is regarded as dangerous to cross and somewhat humorless, the kind of woman who makes a room quieter when she enters it. She receives invitations to every function of consequence, and her presence is considered an indicator that a matter is being taken seriously.

Her connection to Dháran is known publicly only as the working relationship between a councillor and the captain of the local Wardens—she was, after all, the bereaved party in the investigation he led. That she privately directs his political protection, and that his followers provide her with enforcement capabilities she could never maintain openly, is known to no one outside the Black Flame's inner circle.

## Companions

### Patrons

Glýenna's position within the Black Flame places her under the same handler as Dháran—the senior priest who coordinates the faith's operations across the region. This handler regards the Dháran-Glýenna partnership as a model of how the Black Flame should operate in hostile territory: martial strength and political influence working in concert. Within legitimate society, Glýenna has cultivated relationships with several influential council members and the heads of two prominent merchant houses, none of whom suspect her true affiliations.

### Enemies

Glýenna's most dangerous adversary does not yet know he is one. A young nobleman who is Ráegon's cousin, Lord Thenélar Cárdeth, has recently returned from service abroad and has begun asking pointed questions about the circumstances of Ráegon's death. The original investigation satisfied the family at the time, but Thenélar is sharper than his late cousin and has a soldier's eye for tactical details that do not add up. His inquiries are currently social rather than formal—conversations at gatherings, letters to family members who were present in the aftermath—but they have the potential to reopen a case that Glýenna considered permanently closed.

The druid Aelineth, who has been investigating Black Flame activity in the forests around Elanmere, has also made contact with Glýenna in her capacity as a council member, asking for support in pushing for a more thorough investigation than the Wardens have provided. Glýenna handled the request gracefully, expressing concern and promising to raise the matter at the next council session—a promise she has no intention of keeping, but one that has placed her in Aelineth's line of sight.

## Plot Hooks

1. **The Cousin's Questions**—Lord Thenélar has obtained a copy of the original Warden report on Ráegon's death and has noted several inconsistencies. He has requested a private meeting with Glýenna to discuss his concerns. She must decide how to manage a man who is both family and a potential threat—reassure him, mislead him, discredit him, or arrange something more permanent, each option carrying different risks given that the family is watching.

2. **The Council Vote**—A proposal has been brought before the regional council to establish an independent investigative body outside the Wardens' chain of command, in response to growing unease about unresolved incidents in the countryside. If it passes, Dháran loses his monopoly on investigations and the Black Flame's entire protective apparatus is compromised. Glýenna must defeat the proposal without appearing to oppose it—a delicate piece of political maneuvering that may require sacrificing a lesser position to protect the greater one.

3. **The Druid's Persistence**—Aelineth has grown impatient with the council's inaction on her reports and has begun approaching individual members directly, including Glýenna, with detailed evidence of ritual activity in the forests. She is becoming harder to deflect without arousing suspicion, and her findings are uncomfortably accurate. Glýenna must find a way to neutralize the inquiry—whether by co-opting it, discrediting it, or warning Dháran that his people need to go quiet for a time.

4. **The Widow's Suitor**—A prominent nobleman from a neighboring district has begun courting Glýenna, attracted by her competence and the value of a marriage alliance with House Cárdeth. The match would strengthen her public position considerably, but a husband means scrutiny, shared quarters, and the loss of the operational freedom that widowhood provides. The political advantages have to be weighed against the risks to her secret life, and the suitor judged useful enough to keep or dangerous enough to discourage.

5. **Dháran's Recklessness**—One of Dháran's followers has gone too far and the resulting incident cannot be fully contained. The council is demanding answers, the Grove Council is demanding action, and Dháran's usual methods of burying evidence are insufficient. Glýenna must step in to manage the political fallout—but doing so visibly links her to the Wardens' handling of the case in a way that could invite questions if anyone connects the pattern later.
