---
shortcode: njorven
name: {full: Njörven, aliases: [The Sea Wraith]}
type: being
subType: creature
description: "The Sea Wraith of the Nordlands—long ago overthrown by Thrúnvald, slowly waking beneath the northern seas, venerated by a cult that means to see it free, and the thing the Ritual of Binding exists to seal away."
tags: [mythic]
data:
  packFolder: mythic
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  height: null
  weight: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: mythic
  # No strike modes. Njörven is bound and does not come ashore to be fought;
  # what reaches the party is weather, minions and the cult. The attributes
  # carry what it is—will, reason and aura at a scale nothing mortal matches,
  # and no physical presence to engage.
  attrRollFormula:
    str: null
    end: null
    agl: null
    per: 1d6+18
    snt: 1d4+2
    aur: 2d6+22
    wil: 2d6+20
    rea: 1d6+16
    cre: 1d6+12
  items:
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 29}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 95}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 95}}
---

# Appearance {#appearance}

Njörven is not seen. What is seen is the weather.

A coast under its attention gets storms out of season and out of shape: a flat calm that holds for a week while the glass falls, then a sea that rises without wind behind it. Nets come up empty, then come up full of things nobody can name. The old people on the strand stop going out and will not say why, and the ones who do go out come back changed in ways their families notice before they do.

Those who claim to have looked on it directly do not agree on much. A shape under the water larger than the hull above it. A drowned hall lit from within. A face in the trough of a wave that was gone at the crest. The cult's own tellings are the most confident and the least consistent, and a skald who has heard three of them will tell you that the only thing every account shares is the cold.

# Dossier {#dossier}

The Sea Wraith was overthrown long ago by **Thrúnvald** and put into a watery prison beneath the northern seas, and it has lain there since. It is not dead. The Ritual of Binding seals and does not kill, and the evidence that it has been worked before is that Njörven was already imprisoned when this age began, and is stirring out of that prison now.

What the Nordlands meet is the stirring rather than the thing itself. Storms come in violently and out of season, old curses that had gone quiet wake up, and the influence seeps inland far enough that the Kingdom of Malagna's troubles are no longer separable from it. Gróa's vision names three threats and this is the one she calls most urgent, because the other two—the kingdom's internal strife, and the foreign fleets—get worse in proportion to it.

## What It Is Not

**Njörven is not a problem that can be hit.** The campaign material states this early and by design, and the Spear of Sigrid is placed first in play so a party learns it before committing to the wrong approach: the Spear is won in the spirit world by trials of wisdom, wit and resolve, and brute strength there produces failure rather than a harder fight.

Nothing engages Njörven in melee. Its minions can be fought and the cult can be fought, and both will be. The thing itself is reached only through the rite.

## The Njörvar Question

**Njörvar** is not one of the Asguardian Twelve. The name belongs to an older sea-power of the Nordlands, largely displaced by the **Ásvinir** and surviving now in place-names, in a few coastal observances the priests of Thrúnvald tolerate without approving, and in the horn that bears the name.

Every version of the story notices the resemblance between Njörvar and Njörven, and no two versions agree on what it means. Some tellings make them enemies of old, and the horn the instrument by which the elder power bound the younger the first time. Some make them kin. A few, told quietly and not in halls, make them the same thing under two names—which raises an obvious and unwelcome question about what the Ritual of Binding actually invokes.

Gróa has been advised not to pursue the question until after the sealing.

## The Cult

[[affiliation-njorvencult|Njörven's Cult]] venerates the Sea Wraith and means to see it free. It is an active faction in the campaign rather than a background colour, and its interest runs directly against the rite: the Ritual requires a specific hidden coastal temple, a long working, and an invoker who cannot defend himself while working it.

## Sealing It

The rite needs all three regalia and will not proceed on two: the [[miscgear-sprsigrid|Spear of Sigrid]], the [[miscgear-crwnwyrm|Crown of the Wyrm]] and the [[miscgear-hornnjordur|Horn of Njörvar]]. It needs the hidden coastal temple and nowhere else. It needs spiritual and material preparation, and the spiritual half falls on the invoker personally.

Then it needs holding. The climax of [[scenario-groascmpgn|Gróa's Campaign]] is a defense rather than a duel, in which the party protects someone deliberately helpless while Njörven's minions, the rival factions and the foreign invaders all arrive at once. A party that has the regalia and no allies does not finish it, because the temple cannot be held by a party alone—the sealing turns on having brought Malagna's fractured clans far enough together that the ground can be held at all.

And what it buys is a reprieve of the same kind the last one bought. Everyone who works the rite knows that.

## See Also

- [[affiliation-njorvencult|Njörven's Cult]]—the faction that wants it loose
- [[lore-njordurritlbinding|The Ritual of Binding]]—the rite, its requirements and its shape
- [[miscgear-sprsigrid|The Spear of Sigrid]] · [[miscgear-crwnwyrm|The Crown of the Wyrm]] · [[miscgear-hornnjordur|The Horn of Njörvar]]—the three regalia
- [[scenario-groascmpgn|Gróa's Campaign]]—the campaign that ends at the coastal temple
