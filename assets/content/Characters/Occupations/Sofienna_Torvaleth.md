---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Sofíenna Torvaleth
  title: ""
  given: Sofíenna
  clan: Torvaleth
  home: valdes
  aliases:
    - Reslâva Vespera Sunstone
packFolder: aureldiatarvenia
shortcode: sofntrvlth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
  stations: []
  lore:
    - tarvenanclt
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 34
  birthday: 690/4/9
  height: 1.73
  weight: 68
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: gray
    skin_color: tanned
    complexion: ruddy
    extra_features:
      - a scar on the right elbow
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 36 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-slng, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 36 } }
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

Sofíenna Torvaleth is a woman marked by labor and weather. At thirty-four, her gray hair and weathered complexion make her appear older, yet there is no quality of fragility in her bearing. She stands five feet eight inches with a lean, muscular frame—the build of someone who works physically and outdoors daily. Her angular face carries the practical beauty of strong bone structure rather than softness, and her large hazel eyes hold a combination of sharp intelligence and real warmth that puts common people at ease. The scar running along her right elbow tells a story she rarely elaborates on: an accident, or perhaps something more deliberate, that could have ended her ability to work but did not. Her hands are calloused and stained with soil and herbal preparations that will never quite wash clean. She wears the simple, sturdy robes of a field priest—functional rather than ceremonial—often topped with a worn linen mantle that has traveled the roads and harbors of [[place-tarvenirgn|Tarvénia]]'s coastal regions.

# Dossier {#dossier}

Sofíenna was born and raised in the coastal villages around Valdés, the daughter of a fishing family whose livelihood depended upon the whims of season and sea. Her mother died in childbirth when she was twelve, and she was raised by her father and her father's sisters in the tight-knit world of families that worked the water and the land in complementary rhythm. She learned to fish before she learned formal prayer, to read the signs of weather in wind and water, to preserve the year's abundance against the hunger of winter.

At sixteen, she suffered the injury that scarred her elbow—the details are unclear, and she offers no elaboration when asked—but the wound healed in a way that left her arm fully functional though marked. In the months of recovery, she was cared for by an old priestess of Flórania who came to the village and stayed through the scar's formation. This priestess, Marna, recognized in the young Sofíenna a true calling to the earth-work that constitutes Flórania's primary mission in communities like Valdés: blessing crops, attending births, preparing the dead, resolving disputes through mediation and wisdom rather than authority.

She joined the temple formally at eighteen and has spent the intervening sixteen years building something that is part priestess, part healer, part community elder, and part practical counselor. In Valdés and the fishing villages that surround it, she is simultaneously: the woman who blesses the nets before fishing season; the healer who attends expectant mothers and helps them through childbirth; the priestess who performs the rites that shepherd the dead toward Flórania's embrace; the mediator when two families fall into dispute over water rights or land boundaries; and the spiritual teacher who helps her community understand their work as sacred participation in the goddess's ongoing creation.

Her premature graying began seven years ago, after a series of harsh seasons that produced drought, crop failure, and hunger. She fasted in solidarity with her community and undertook extended ritual petitions that nearly killed her. She recovered, but the strain aged her visibly. Her villages are divided on whether she carries a curse or a blessing the goddess marked upon her. She herself remains characteristically quiet on the matter.

## Psyche

Sofíenna is a woman of deep integrity and practical wisdom who has chosen a deliberately quieter life than her gifts might have allowed. She has the feeling for people and the imagination that would qualify her for positions of greater prominence within the priesthood, but she has consistently declined advancement, preferring her direct work with the families and fishing crews of Valdés and the surrounding regions.

Her greatest strength is her ability to be fully present in the whole cycle of human life—she tends gardens and animals, assists at births and deaths, celebrates harvests and mourns famines, and brings the same attention and reverence to each task. She works from the understanding that sacred work is done in fields and kitchens and fishing boats, in the ordinary moments where life is sustained or lost, as much as on ceremonial days in formal temples. This philosophy is radical in a world where formal priesthood typically separates itself from such elemental work.

She struggles with isolation. Her work demands so much of her energy that she has never pursued romantic attachment or established a household of her own. Her relationships are deep but bounded—she is everyone's trusted advisor and no one's intimate. The scar on her elbow and the vagueness surrounding its origin suggest a past wound she has not fully come to terms with; occasionally, in certain lights or certain seasons, she retreats into herself in ways that trouble those who know her.

Her cunning and her nose for intrigue are somewhat surprising in someone who appears so straightforward, and suggest that she has learned through experience to tread carefully. She is more politically aware than she allows others to realize, understanding the tensions between traditional Tarvénan values and the merchant oligarchies beginning to reshape the peninsula's coastal cities. She has positioned her temple work in a way that allows her to remain useful to multiple power centers without belonging entirely to any.

## Social

Sofíenna's formal affiliation is with the Temple of Flórania, yet her actual position in Valdés goes well beyond her rank in the priesthood. She is one of the few figures in the city who commands respect from both the traditional fishing families and the increasingly powerful merchant classes who control the harbor. The communal assembly—that foundational Tarvénan institution where free citizens gather to decide matters of common concern—listens when she speaks. She has never sought formal political power; her influence emerges from the fact that everyone understands her decisions are made in their interest rather than her own advancement.

This position is increasingly precarious. As Valdés grows wealthier and the merchant oligarchy consolidates control, there is quiet pressure to reform the city's institutions, to make them more "orderly" and "accountable." The temple is no exception. Some merchant leaders view Sofíenna's field-based work as antiquated, her mediation of disputes as slower than formal magistrates, her lack of interest in expanding the temple's power as a failure of leadership. Meanwhile, more conservative elements within Tarvénia's priesthood view her willingness to work with the dispossessed and the common folk as a violation of priestly dignity.

## Companions

**Patrons:**

- **Alderman Darius Silvain**, leader of the fishing cooperative that represents the common fishermen of Valdés. He has served alongside Sofíenna in the communal assembly for six years and trusts her absolutely.
- **The Widow Thesa**, an elderly woman of significant wisdom who was Sofíenna's informal mentor and continues to consult with her on matters of spiritual importance affecting the community.

**Enemies:**

- **Merchant-Captain Lucien Vasquez**, whose family has been consolidating control of Valdés's harbor trade. He views Sofíenna's influence over the common people as an obstacle to the changes he is bringing in and has been quietly working to undermine her authority.
- **Bishop Aldhelm**, a high-ranking member of the formal priesthood who visited Valdés two years ago and was scandalized by what he perceived as Sofíenna's informal, unstructured approach to her duties. He has recommended that she be placed under closer oversight and that her temple funding be redirected toward more formally trained clergy.

## Plot Hooks

1. **The Drought Returns**—A severe drought descends upon the Tarvénan coast, threatening the agricultural and fishing cycles that sustain Valdés. Sofíenna undertakes an extended fast and ritual petition as she did seven years before, but this time a visitor arrives—a wandering healer or scholar from outside Tarvénia who claims to know the cause of the drought and offers a solution that would require Sofíenna to abandon her ethical principles or her community's traditions to implement. The price of salvation may be unacceptable.

2. **The Merchant's Daughter**—A young woman from one of the merchant families becomes pregnant, and the father—a sailor bound for distant ports—does not return. The girl's family demands that Sofíenna arrange an "accident" to remove the pregnancy rather than face the shame. When Sofíenna refuses and offers support instead, she directly offends the merchant family's honor and triggers a crisis that could overturn her standing in the community.

3. **The Hidden History**—An old sailor arrives in Valdés, recognizes Sofíenna, and begins hinting that the scar on her elbow came from violence, not accident—that Sofíenna may have killed someone in her youth or been marked as a warning. He may be telling the truth or testing her, but his presence forces her to confront a past she has worked for eighteen years to leave behind.

4. **The Temple's Modernization**—Bishop Aldhelm arrives in Valdés with orders to "reform" the temple's work. He proposes consolidating the various informal healing and mediation roles into formal positions, hiring trained clergy, and reshaping her work to fit conventional priesthood hierarchy. Sofíenna can accept the loss of her independence and her direct service to the community, or refuse and risk being removed from her position entirely.

5. **The Magical Awakening**—A disturbance in the deep places awakens something ancient in the lands surrounding Valdés—perhaps something connected to Aelwyth's mystical influence filtering into distant waters, or perhaps something more immediately dangerous. Sofíenna's unusual skill in embalming suggests she has knowledge or experience with death-work that goes beyond conventional preparation of corpses. She is drawn into a mystery that involves the boundary between the living and the dead, and her involvement could either save her community or damn it depending on choices she has not anticipated needing to make.
