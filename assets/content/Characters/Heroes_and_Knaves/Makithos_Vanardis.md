---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Màkîthos Vânardis
  title: ""
  given: Màkîthos
  clan: Vânardis
  home: valdosta
  aliases: []
packFolder: midhalionvylaria
shortcode: mkthsvnrds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Thespian
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provnchyln
  gender: male
  species: null
  age: 41
  born: 679/5/25
  height: 1.7
  weight: 62.6
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: black
    skin_color: light
    complexion: tanned
    extra_features:
      - a scar on the right side of the face
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-sacredforge }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 90 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-armorgear-vshirt }
    - { model: sohl-sohl-armorgear-vbrch }
    - { model: sohl-sohl-armorgear-vcap }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-slkclk }
    - name: Leather-bound notebook (script drafts and notes)
      type: miscgear
      system:
        shortcode: leatherboundnotebook
        weight: 1
        value: 100
        durability: 3
    - name: Writing kit (quill, inks, parchment)
      type: miscgear
      system:
        shortcode: writingkit
        weight: 1
        value: 100
        durability: 3
    - name: Collection of dramatic scripts (personal works)
      type: miscgear
      system:
        shortcode: collectionofdramatic
        weight: 1
        value: 100
        durability: 3
    - name: Theatrical props (small, personal collection)
      type: miscgear
      system:
        shortcode: theatricalprops
        weight: 1
        value: 100
        durability: 3
    - name: Mask (theatrical, personal)
      type: miscgear
      system:
        shortcode: mask
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-backpk }
    - { model: sohl-sohl-containergear-bpchmd }
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

![[mkthsvnrds|Màkîthos Vânardis]]{float: top-left}

Màkîthos stands 5'7" tall with a medium build. He has light tanned skin, black hair, and hazel eyes. His features include an oblong face, an aquiline nose, a pointed chin, a wide mouth, heavy brows, and angular cheeks. He has a scar on the right side of his face.

# Dossier {#dossier}

## Background

### The Wanderer's Child

Màkîthos was born to a family of traveling performers—musicians, acrobats, and storytellers who moved from city to city across the Empire of Vylaria. Unlike his siblings, who found contentment in the transient performer's life, young Màkîthos was haunted by a hunger for something deeper: to craft stories rather than only perform them, to shape language and emotion into compelling architecture. By his teenage years, he was composing pieces for his family's performances, demonstrating an uncommon gift for understanding human motivation and emotional truth. A visiting scholar from the capital saw one of his works and recognized genius; the scholar invited the promising youth to study in the city's prestigious Academy of Dramatic Arts.

### The Path of Fire

The Academy years were transformative and torturous. Màkîthos threw himself into study with an intensity that alarmed his instructors—he seemed never to sleep, never satisfied, never willing to complete a work. His plays grew longer and more complex, layered with philosophical depth and linguistic precision that audiences found challenging and critics called incomprehensible. During a performance of his most ambitious work, "The Sovereign Burning," a theatrical accident during the finale consumed a portion of the set and scarred his face. Rather than retreat, Màkîthos saw the scar as a mark of his devotion—physical proof of the fires of his art. He transformed it into a badge of authenticity, refused to have it treated properly, and emerged from the Academy as the most talented and most controversial artist the city had produced in a generation.

### The Controversial Genius

Now, at forty-one, Màkîthos occupies a precarious position of fame and notoriety. His works are commissioned by the wealthiest patrons and performed at the grandest venues in the Empire's heart—yet critics remain divided, with as many voices condemning his "overwrought pretension" as praising his "peerless brilliance." He has trained a devoted coterie of actors who understand his vision and can perform his demanding scripts. He has also become infamous for his working methods: crushing schedules, impossible standards, demands for absolute commitment from collaborators, and willingness to completely overhaul a production mere days before premiere if something fails to achieve his vision. He has ruined several promising performers through his perfectionism, yet still commands loyalty from those who remain under his direction. His romantic life is volatile and brief; his work is his true passion and the source of both his greatest triumphs and his deepest anguish.

## Psyche

### Personality

Màkîthos is a man of passionate intensity held in barely controlled check by intellectual discipline. In conversation, he is articulate and charming, capable of holding a room's attention through the sheer force of his ideas and the eloquence of his expression. Yet the polish covers an almost manic energy—he moves restlessly, speaks with rapid intensity, and seems unable to prevent himself from analyzing every exchange as potential material for performance or dramatic structure. He is generous with those he deems worthy of his time, mentoring talented performers with real care for their growth. Toward critics, rivals, or those he judges artistically mediocre, he is dismissive to the point of cruelty. He experiences intense emotional swings, capable of great joy followed by devastating periods of self-doubt during which he locks himself away and refuses all company. His scar has become a defining feature of his persona—he touches it unconsciously when thinking deeply and frequently references it in self-deprecating humor.

### Motivation

Màkîthos is driven by a vision of theater as the highest form of human artistic expression—capable of capturing and communicating truths about the human condition that no other medium can reach. He believes that compromise is betrayal of this sacred calling, and that to lower one's standards for any reason is to fail in fundamental duty to the art. Yet he is also desperately motivated by recognition and validation; his arrogance covers a persistent fear that his work, despite its complexity and brilliance, may ultimately be dismissed as incomprehensible pretension. He seeks to create a legacy—plays that will be performed for centuries, works that will define the age. He also harbors a desire, though one he would never admit, for personal connection and true love; his intense, demanding nature makes this almost impossible to achieve.

### Strengths

- **Unparalleled Creative Genius**: Màkîthos's ability to craft layered, searching narratives and deploy language with exact control has no equal in the realm.
- **Theatrical Performance**: As an actor himself, he possesses extraordinary stage presence and the ability to convey complex emotional states with minimal gesture or expression.
- **Masterful Direction**: He can shape the performance of others with great skill, drawing out depths of emotion and authenticity through relentless coaching and demands for precision.
- **Linguistic Virtuosity**: His command of language—including multiple dialects, poetic forms, and registers of speech—allows him to craft dialogue that rings true.
- **Absolute Dedication**: Once committed to a project, he will pursue it with an intensity of focus that outlasts all obstacles, working through exhaustion and personal cost to achieve his vision.

### Weaknesses

- **Perfectionism Unto Self-Destruction**: His refusal to accept anything less than impossible standards means that projects frequently overrun their time and their purse, damaging his finances and his standing with those he works with.
- **Emotional Volatility**: His mood swings are severe and unpredictable; he can shift from charm to cruelty within moments, making him dangerous and exhausting to work with.
- **Contempt for Lesser Talents**: He struggles to work with performers or collaborators he deems artistically inadequate, and his contempt is often visible and wounding.
- **Physical Vulnerability**: His frame is slight, his health often compromised by the physical toll of his relentless work schedule; he has no combat training or physical resilience.
- **Isolation and Loneliness**: His intensity and demands have isolated him socially; friendships elude him, and his personal life remains fractured despite his success on the stage.

## Social

### Patrons

- **Lady Thespis Aurelia**: An immensely wealthy widow and patron of the arts who has championed Màkîthos's work despite critical controversy, commissioning his most ambitious productions and providing financial stability.
- **The Imperial Theater Company**: The state-sanctioned theatrical institution, which despite tensions with Màkîthos's nonconformity, regularly produces his works and provides him with resources and prestige.

### Enemies

- **Kritikos the Savage**: The city's most influential theater critic, whose scathing reviews of Màkîthos's early works were instrumental in establishing the controversial reputation that has followed him; they share a complex relationship of mutual contempt.
- **Lysias Vánarthes**: A former collaborator and rival playwright whose prospects Màkîthos effectively destroyed through public criticism and sabotage; Lysias now works to undermine every project Màkîthos attempts.

### Affiliations

- **The City Theater Company**: Principal playwright and frequent director; maintains a complicated relationship with the institution despite his central importance to its prestige.
- **The Writers' Guild**: Member in good standing, though frequently at odds with the guild's standards and expectations.
- **The Circle of Artistic Innovation**: An informal collective of avant-garde artists and thinkers who view Màkîthos as a central figure in reshaping the city's arts.

## Plot Hooks

1. **The Masterwork Commission**: The Imperial Court commissions Màkîthos to create a theatrical work celebrating the Emperor's upcoming jubilee—an enormous honor with impossible requirements. The play must be completed in months, must satisfy both artistic integrity and political expectations, and must involve the participation of various court factions whose interests directly conflict. The party becomes entangled as Màkîthos's assistants, investigators of backstage intrigue, and potentially the unwilling subjects of his dramatic experimentation. They discover that the commission itself is part of a larger political scheme, and that the play's success or failure will determine the course of imperial succession.

2. **The Burned Manuscript**: The only copy of Màkîthos's most ambitious work—a sweeping epic tragedy that represents the culmination of his artistic vision—is destroyed in a fire at his chambers. Whether the fire is accident or deliberate sabotage remains unclear. Devastated but determined, Màkîthos becomes obsessed with reconstructing the work through the memories of those who have read portions of it and the scattered notes he has preserved. The party helps him gather fragments and reconstruct the manuscript while also investigating whether enemies deliberately destroyed his masterwork. In the process, they discover that the destroyed manuscript contained truths about the city's power structure that powerful people wanted suppressed.

3. **The Impossible Performance**: Màkîthos creates a play so technically complex and emotionally demanding that no traditional theatrical company can mount it. He approaches the party (or characters the party recruits) to become his actors, offering generous compensation but demanding absolute commitment. As they rehearse, they discover that the play is more than art—it contains elements of real ritual magic, embedded within the script in ways Màkîthos himself may not fully understand. The performance itself becomes dangerous, with each rehearsal bringing participants closer to a real transformation of the mind and actual magical consequence.

4. **The Critic's Revenge**: Kritikos the critic dies under mysterious circumstances, and evidence suggests Màkîthos may be responsible. As the party investigates, they uncover a complex relationship between artist and critic far deeper than rivalry—perhaps a real friendship twisted by misunderstanding, or a collaboration that went tragically wrong. The resolution requires untangling truth from performance and determining whether Màkîthos is guilty of murder or merely guilty of living a life so theatrical that any event becomes susceptible to dramatic reinterpretation.

5. **The Actor's Curse**: One of Màkîthos's most devoted performers begins to show signs of a disordered mind, unable to distinguish between the complex characters he performs and his own identity. As the condition worsens, other members of the theatrical company report similar experiences. Màkîthos suspects that his plays have become so searching and emotionally demanding that they are damaging the minds of those who perform them. The party must investigate whether this is real danger or theatrical delusion, and whether the cure lies in a physician's care, in revising the plays, or in something more occult entirely.
