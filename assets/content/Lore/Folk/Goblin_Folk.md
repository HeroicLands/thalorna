---
shortcode: goblinfolk
name: {full: Goblins, aliases: [Goblin, The Cunning Tricksters]}
type: lore
subType: folk
description: "Small, cunning and fiercely individualistic followers of a trickster god, who thrive on chaos and rarely cooperate even with each other."
tags: []
---

## Goblins - The Cunning Tricksters

Goblins are small, mischievous creatures known for their cunning, stealth, and guile. As followers of their trickster god, they thrive on chaos and deception. Goblins can be found in a variety of environments, from the dark depths of caves to dense, shadowy forests. They possess pointed features, sharp claws, and skin tones that allow them to blend seamlessly into their surroundings. Unlike many communal creatures, goblins are fiercely individualistic, rarely cooperating even when encountered in groups. Instead, they exploit chaos and confusion to their advantage, each seeking personal gain. Renowned for their ability to lie and deceive with ease, goblins are adept at setting traps and ambushing unsuspecting prey. Their weapons are often simple but effective, frequently enhanced with poisons and toxins. Whether lurking in the underbrush or hiding in the shadows, goblins present a constant nuisance and danger to adventurers with their unpredictable and treacherous nature.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'goblin'
```
