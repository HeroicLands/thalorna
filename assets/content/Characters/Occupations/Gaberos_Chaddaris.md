---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Gábêros Chàddâris
  title: ""
  given: Gábêros
  clan: Chàddâris
  home: athenikos2
  aliases: []
packFolder: helladhelionis
shortcode: gabrschdrs
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - helioniteclt
    - commonerrnk
  homes:
    - helionis
  affiliations:
    - athenikos
  gender: male
  species: null
  age: 39
  birthday: 681/3/13
  height: 1.74
  weight: 63
  frame: light
  appearance:
    eye_color: warm_brown
    hair_color: dark_brown
    skin_color: warm
    complexion: bronzed
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 27 } }
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

Gábêros stands 5'8" with a light, lean build—narrow in the shoulders and spare in the limbs, the frame of a runner rather than a brawler. His dark brown hair is thinning at the crown and kept cropped close, and his warm brown eyes are set in a bronzed, warm-skinned face that carries the permanent squint of a man who has spent decades patrolling sun-baked Helionite streets. His features are sharp and angular: a hawkish nose, prominent cheekbones, a thin-lipped mouth above a clean-shaven chin. At thirty-nine, he moves with a careful economy that suggests old injuries he does not discuss. He wears a light linen tunic over padded armor, sandals rather than boots in the Helionite fashion, and carries a short sword and wooden truncheon on a worn leather belt.

# Dossier {#dossier}

Gábêros was born into a scholarly family in [[place-helionis|Heliónis]] and spent his early years surrounded by philosophy, rhetoric, and intellectual discourse. His father was a minor scholar at [[affiliation-panepistmm|the Panepistemium]]. Gábêros was educated beyond most soldiers' expectations but discovered early that pure intellectual work did not satisfy him—he wanted to apply knowledge to practical problems. At twenty, he joined the agora patrol, the city guard detail responsible for maintaining order in Heliónis's central marketplace and intellectual gathering spaces.

The agora patrol is different from other city guard work. It requires the ability to understand complex commercial disputes, recognize when intellectual debate is beginning to shift into incitement to violence, manage both merchants and philosophers with equal authority. Gábêros thrived in this role. He became known as the guard who would explain the law instead of merely enforcing it, who would engage in actual discussion rather than wielding authority blindly.

Now at thirty-nine, he is the senior patrol commander for the agora and has become something of an institution. Merchants respect him because he understands commerce. Scholars respect him because he understands philosophy. He maintains order through persuasion rather than force. His neatly trimmed beard and careful appearance mark him as someone who takes personal presentation seriously, a Helionite cultural value.

## Psyche

### Personality

Gábêros is patient and thoughtful, approaching conflicts as problems to be solved rather than situations to be dominated. He enjoys intellectual discussion and will engage with both merchants and philosophers on their own terms. He is not condescending and is willing to learn from the people he polices. He can be stubborn when he believes he is correct, but his stubbornness is expressed through argument rather than force.

### Motivation

Gábêros's primary motivation is maintaining the agora as a functional space for both commerce and intellectual discourse. He believes that these two aspects of Helionite culture should reinforce each other rather than conflict, and he works toward that integration. His secondary motivation is proving that intelligent policing is more effective than authoritarian enforcement.

### Strengths

His intellect allows him to understand complex disputes. His rhetorical skill allows him to talk a conflict down. He is physically capable and experienced in combat, though he prefers avoiding it. His understanding of Helionite culture and values is comprehensive.

## Social

Gábêros is fully integrated into Heliónis's intellectual and commercial establishments. He is respected by both academics and merchants, which is unusual in a city where these groups often antagonize each other. His position gives him unusual social authority.

## Companions

### Patrons

**Master Academician Theron Philosophos**—A senior scholar at the Panepistemium who has mentored Gábêros intellectually and has become his patron within the academy. Theron sees that Gábêros has access to scholarly resources and support for his continued intellectual development alongside his guard work.

### Enemies

**Merchant Lord Kallist Opulentus**—A wealthy merchant who has been engaged in systematic fraud within the agora marketplace—misrepresenting goods and engaging in deceptive practices. Gábêros has been aware of the fraud but lacks sufficient evidence for legal prosecution. Kallist views Gábêros as an obstacle and has begun working to discredit him through rumors of bias and prejudicial treatment.

## Plot Hooks

1. **The Fraud Prosecution**—Gábêros finally secures enough evidence to prosecute Merchant Lord Kallist for fraud. The case is strong and Gábêros is prepared to present it to the magistrate. But during the preparation, Gábêros discovers that Master Academician Theron, his patron, has a financial relationship with Kallist—Theron borrowed money from Kallist years ago and is still paying it back. Theron, aware that the prosecution will damage Kallist and potentially interrupt the loan arrangement, asks Gábêros to delay or suppress the case. His patron and his integrity now ask different things of him.

2. **The Philosophical Extremist**—A charismatic philosopher begins gathering followers in the agora and delivering speeches that are technically legal but are clearly inciting social unrest and potentially violence against the merchant community. Gábêros cannot arrest him for speech alone, but he can see that the situation is escalating toward actual conflict. He is in a difficult position: prevent speech to maintain order, or maintain free expression and risk violence.

3. **The Student's Tragedy**—A young scholar, **Kallista**, becomes involved with a merchant involved in slavery. Gábêros recognizes the situation but the student is an adult and technically making choices freely. He attempts to warn Kallista, but she resents his interference and begins spreading rumors that he is abusing his authority to prevent her from making personal choices. Gábêros is caught between warning her against actual danger and respecting her autonomy.

4. **The Merchant Council's Pressure**—The merchant council approaches Gábêros with pressure to be more aggressive in suppressing protesting workers and philosophers who are criticizing merchant practices. They are using political pressure and threatening to have him reassigned if he does not comply. Gábêros believes the protesters have legitimate grievances but is being pressured to silence them through guard authority.

5. **The Academic Conspiracy**—Gábêros discovers evidence that some of the scholars at the Epistemium are engaged in a scheme to manipulate agora merchants through falsified intellectual arguments—deliberately creating philosophical justifications for harmful economic practices. Master Academician Theron is aware of the scheme and may even be involved. Gábêros can expose the conspiracy, which damages the academy he respects and the patron who has supported him, or allow it to continue.
