---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Shamûlû Zabîsh
  title: ""
  given: Shamûlû
  clan: Zabîsh
  home: ashkabel2
  aliases: []
packFolder: midhalionharad
shortcode: shamulzbsh
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - haradianclt
    - commonerrnk
  homes:
    - haradregin
  affiliations:
    - cnfdrtnhrdnstts
  gender: male
  species: null
  born: 685/1/27
  height: 1.8
  weight: 73
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: gray
    skin_color: olive
    complexion: medium
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 65 } }
    - { model: skill-hazarscrpt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 24 } }
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

At thirty-nine, Shamûlû Zabîsh appears a decade older than his actual age, worn down by relentless exposure to human suffering. His gray hair, prematurely aged, is kept short and practical—no vanity in this man, though his careful grooming suggests discipline if not self-regard. His face is sharp-featured, almost ascetic, with deep lines around his hazel eyes that speak of years spent in close focus: reading medical texts, examining wounded patients, witnessing death. There is a gentleness in his expression that seems almost incongruous with his intimidating stature—he stands nearly six feet tall with the solid build of someone who has performed physical labor all his life, yet he moves with the careful precision of a healer, as if aware that his size could frighten the vulnerable people he serves. His olive skin bears the marks of his work: small scars, minor burns from herbal preparations, permanent stains from medicines that will not wash away. He wears the simple robes of a temple healer, practical rather than ceremonial, often carrying a well-worn leather satchel containing the tools of his trade.

# Dossier {#dossier}

Shamûlû was born twenty years after [[affiliation-cnfdrtnhrdnstts|Harad]]'s declaration of independence from [[affiliation-vylarinmpr|the Vylarian Empire]], born into a freeman family of modest means in [[place-ashkabel2|Ashkabel]]. His early years coincided with a time of cautious optimism—the new oligarchy had not yet consolidated its control, and there remained hope that Harad's revolutionary sacrifice might yield real freedom and prosperity for common people. He was apprenticed to an older healer at fourteen and showed immediate aptitude: his perception was sharp, his feeling for the sick real, and his hands steady in crisis.

The last fifteen years have been grinding. [[affiliation-auricompct|The Auric Compact]]'s consolidation of power meant that wealth concentrated upward while common people discovered that independence meant only that their oppressors were local rather than distant. [[affiliation-corsairleg|The Corsair League]]'s rise created periodic violence. [[affiliation-mrchntryvl|The Merchantry of the Veil]] operated in shadows. Shamûlû treated the consequences: wound infections, poverty-related illness, malnutrition, complications from unsafe births. He also treated soldiers—sometimes soldiers of the oligarchy's forces, sometimes wounded corsairs or resistance fighters. Over years, his clinic became a de facto neutral ground, and through his work, he accumulated knowledge that no one person should carry alone.

He came to the priesthood of Flórania almost incidentally, recognizing that the goddess of growth and fertility encompassed the healing he performed. The temple gave him some legitimacy and minor protection, though everyone in Ashkabel knew that his true authority came not from hierarchy but from the fact that everyone—oligarch, corsair, common laborer—might eventually need his ministrations. His gray hair is the visible cost of this knowledge: information that could destabilize the city, secrets that could end lives, the accumulated weight of knowing exactly how fragile the oligarchy's control truly is.

## Psyche

Shamûlû is a man suspended between his calling as a healer and his unwilling role as a repository of dangerous information. His feeling for others lets him perceive his patients' physical ailments and also the social and political realities that produced them. His eye for intrigue is not his gift as much as it is his curse—he has learned to read the subtext beneath every conversation, to recognize when wounded men are military intelligence operatives, to understand the hidden connections between disparate patients.

He operates from a framework of absolute commitment to the sanctity of healing. In his world, his patients' lives matter more than political allegiances, ideological purity, or even his own safety. This has made him simultaneously respected and dangerous—both the oligarchy and the resistance trust him, and both understand that he would never betray a patient's confidence, even under threat. This integrity is his armor and the source of his vulnerability.

He suffers from the moral weight of witnessing human suffering produced by an unjust order while having only the power to address its symptoms, not its causes. His perception means he sees clearly; his feeling for others means he feels what follows. He has become increasingly aware that his very existence as a neutral space enables the oligarchy's continuance—if he did not treat the consequences of their rule, the suffering would be more visible, the pressure for change more intense.

His great strength is his absolute trustworthiness and his skilled hands. His great weakness is that he is emotionally depleted, burned out on human suffering, and increasingly aware that his commitments are irreconcilable. He cannot heal his way to justice. The realization has turned him inward; he speaks less each year and seems to recede further into himself, driven forward only by the fact that turning away from a suffering person remains unthinkable.

## Social

Shamûlû's formal affiliation is with the Temple of Flórania in Ashkabel, a position that offers him some legitimacy and minimal resources. Yet his actual social authority derives not from the temple hierarchy but from his indispensable position in Ashkabel's tangled politics. The oligarchs view him as a resource to be protected. The corsair networks know him as trustworthy. The merchant families consult him regarding family matters. The dispossessed and the desperate know him as the one person who will treat them without judgment or exploitation.

This positions him as uniquely isolated. He has no peers in Ashkabel's priesthood—the other temple clergy view him with a mixture of reverence and resentment. He cannot socialize openly with either oligarchs or resistance figures without raising questions about his loyalties. His personal relationships are minimal; people approach him as a healer, not as a friend. The emotional cost of this role, however necessary it is, accumulates daily.

His status as a Freeman rather than a member of the formal nobility or merchant class initially seemed like a disadvantage. In practice, it has been essential to his ability to move between social strata. He is not beholden to any faction, which means all factions must treat him as neutrally as possible.

## Companions

**Patrons:**

- **Captain Loris "Ironhand" Devereux**, a corsair captain with an old wound that Shamûlû healed years ago. Devereux considers him a friend and owes him life-debt, but this association is dangerous if discovered by the oligarchs.
- **Merchant-Mother Silene Vasquez**, one of the more enlightened members of the Auric Compact who quietly steers resources toward Shamûlû's clinic and has never demanded anything in return beyond his discretion.

**Enemies:**

- **Magistrate Kael Orthar**, a rising figure in Ashkabel's oligarchic hierarchy who views Shamûlû's neutrality as insufficiently committed to their rule. He has been slowly pressuring the temple authorities to exert more control over the clinic's operations.
- **The Shadow Broker**, a mysterious figure who operates in the interstices of Ashkabel's resistance networks and who has been attempting to pressure or leverage Shamûlû into providing information about the oligarchs' health vulnerabilities—a request Shamûlû has thus far refused at considerable personal risk.

## Plot Hooks

1. **The Lethal Patient**—A dying man arrives at Shamûlû's clinic bearing a fresh wound from an oligarchic enforcer. He is a resistance leader, and his death would cripple a faction already weakened by betrayal. The man asks Shamûlû to save him, knowing that his recovery will inevitably lead to Shamûlû being implicated in resistance activities. Shamûlû cannot refuse, but compliance will destroy his neutrality and potentially his clinic.

2. **The Oligarch's Secret**—Shamûlû diagnoses a terminal illness in a high-ranking member of the Auric Compact—someone whose death might actually destabilize the regime or precipitate civil war. The patient asks him to keep the diagnosis secret while they arrange succession, but delaying disclosure means allowing the oligarchy to continue policies that are actively killing the poor. Shamûlû's commitment to healer's discretion conflicts irreconcilably with his knowledge of the consequences of silence.

3. **The Informant's Test**—An intelligence operative from an outside power (perhaps a rival nation or a competing faction) arrives in Ashkabel and begins deliberately getting wounded in ways that require Shamûlû's care, each time establishing deeper rapport and testing whether he might be turned as an informant. The operative is subtle and charming, and by the time Shamûlû realizes what is happening, he has already become emotionally attached to them.

4. **The Clinic's Collapse**—Resources mysteriously begin drying up. Magistrate Orthar has been quietly but systematically undermining the clinic's supply chains and the temple authorities are becoming less protective. Within months, Shamûlû may have to close the clinic. The realization that he might be forced to abandon his patients breaks something in him, and he begins considering desperate measures.

5. **The Healer's Choice**—Two former patients—one an oligarchic official, one a resistance fighter—both arrive at the clinic gravely wounded at nearly the same moment. Shamûlû has resources to save one, perhaps both if he is extraordinarily fortunate. But his knowledge of each man's role and significance makes this decision far more than medical. Whoever he saves shapes Ashkabel's future. The weight of choosing which faction deserves to win finally forces Shamûlû to confront that his "neutrality" has always been a fiction.
