---
shortcode: frstgbln
name: {full: Forest Goblin, aliases: []}
type: being
subType: creature
description: "A sapient woodland goblin dwelling as a solitary hunter, driven by personal hunger and amusement over fragile, greed-strained bonds."
tags: [folk]
data:
  packFolder: folk
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: goblin
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+12
    per: 1d4+10
    aur: 1d4+5
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
      weight: {base: 45, calc: "45"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[frstgbln|Forest Goblin]]{float=top-left}

A branch moves overhead that the wind did not move. Then it is still, and there is a face in the leaves: small, sharp, green-brown, with big bright eyes and a wide mouth that is grinning at you, full of small pointed teeth. Feathers are braided into its hair, its jerkin is made of leaves stitched on bark, and it holds a little bow across its knees. It is no bigger than a child of eight. It puts a finger to its lips, as if the two of you shared a secret, and points behind you; and while you are deciding not to look, the face is gone, and from somewhere to your left comes a soft laugh, and the creak of a bowstring.

# Dossier {#dossier}

The Forest Goblin is a [[lore-goblinfolk|goblin]] of the deep woods: a small, wiry, sapient hunter, three to four feet tall, quick, clever and fiercely individualistic, which follows its own hunger, its own amusement and its own standing among its kind, and a trickster god. Forest goblins live as solitary hunters and in loose, short-lived bands, hunt everything, set traps for everything, lie easily, poison their arrows and blades, and treat outsiders as prey, entertainment or trade goods, as the moment suits. The goblin clans keep their own territories in the deep [[place-vrystwald|Vrystwald]], and the deepest of them is the [[place-vethwald|Véthwald]], the densely canopied Deepwood in the forest's interior.

## Presentation

A forest goblin stands three to four feet tall, wiry and long-limbed, built for climbing and slipping through undergrowth. Its skin is dark green to earthy brown, mottled or striped, and darker or lighter with the season. Its features are sharp: long mobile ears, large bright eyes that catch the light, a wide mouth of small pointed teeth. It wears the forest, leaves woven into clothing, bark strips for armor, feathers and bones braided into its hair, and it carries a short bow, a blowgun, a bone knife or a light spear. It moves without sound, goes up a tree as fast as a squirrel, and laughs a great deal, usually at something it has done to someone.

## In the Land

The Vrystwald is the forest-and-river belt between the Nordlands, Aurèldía and Velanthia, taiga and mixed woodland and slow rivers, and the [[lore-varokhiclt|Varokh]] hold most of it. The goblins hold the parts nobody else wants: the Véthwald's interior, where the canopy shuts out the sun, the deep hollows and the bogs, and the marginal woods between the settled districts. Each goblin hunts its own ground through the trees and keeps its own lairs, a hollow trunk here, a platform in a canopy there, and bands form and dissolve with the hunting. They take deer, pigs, birds, the Varokh villages' stock and the travelers on the rivers, and they trade with anyone who has something they want and is not stupid.

## Key Behaviors

A forest goblin hunts constantly and enjoys it as much as the food. It is opportunistic and self-interested: it hunts with others when the prey is big, and turns on them over the division of the kill. It collects trophies, kills and stories to raise its standing among its kind, and a story about a clever trick played on a big, slow outsider is worth as much as a kill. It lays deadfalls, snares and pits all over its ground and leads its prey into them. It lies with great skill and enjoys lying. It can be bargained with when it is offered something it wants, food, a good weapon, a shiny thing, a good joke, and it keeps a bargain exactly as long as keeping it is more amusing than breaking it.

## What the Varokh Do

The Varokh villages of the Vrystwald share their forest with the goblins and have done so as long as anyone remembers. They do not try to clear them out, because nobody has ever found all of them; they keep their stock penned, walk the paths near the Deepwood in company, and look up. A Varokh hunter crossing goblin ground leaves a small gift at a tree where a goblin can see it, a twist of salt, a bright button, a bit of honeycomb, and is usually let through, and a hunter who forgets is usually robbed and occasionally found dead in a pit. River traders buy goblin-taken furs at the forest landings from goblin middlemen, and count their coins twice. The Varokh say that a goblin's word is good until it gets bored.

## Signs

- Small bare footprints, long-toed, that run up a tree trunk and do not come down.
- Snares, deadfalls and pit-traps along a game trail, too many and too cleverly hidden for any one trapper.
- Small arrows with feather fletching in a dead deer, and the flesh round them blackened by poison.
- Laughter from the canopy, and things missing from a camp in the morning: a knife, a boot, all the salt.
- Little platforms of woven branches high in the trees, with bones and trophies hung from them.

## Combat Strategy

Forest goblins fight from ambush and from the trees. They shoot poisoned arrows and blowgun darts from cover high up, where they are nearly impossible to see, and drive their prey toward their traps. When the prey is wounded, weakened or caught, they come down with spears and knives to finish it. A goblin alone flees if a fight turns, and so does a band, every goblin for itself. They are fragile in close fighting and do not stand in the open. A party that keeps to open ground, watches the trees and does not follow a fleeing goblin into the undergrowth gives them very little to work with.

## Special Abilities

### Poisoned Arrows and Darts

The goblin shoots a short bow or a blowgun from hiding with real accuracy, and its arrows and darts carry poisons from forest plants and insects that bring pain, numbness or sickness.

### Spear and Knife

Close in, against a wounded or trapped victim, it strikes quickly with a light spear or a bone knife at the throat or the back of the knee.

### Trap-Making

It sets deadfalls, snares and pits all over its ground and leads prey into them.

### Forest Mastery

In forest it moves silently and fast at every height, through trees, undergrowth and canopy.

### Camouflage

Its coloring and clothing make it nearly invisible in dense foliage.

### Toxin Knowledge

It knows the poisons of the forest and how to take and use them.

### Tracking

It follows prey through the forest by tracks, scent and broken growth that others miss.

### Trickster's Wit

It lies well and gladly, understands how people think, and leads outsiders into bad decisions for profit or amusement.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 11-14 (1d4+10)
