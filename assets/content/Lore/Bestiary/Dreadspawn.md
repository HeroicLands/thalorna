---
tags: []
name:
  full: Dreadspawn
  aliases: []
description: "Creatures made, not born — the work of any god of invention or creation, or of a mortal who dares it; none of them can breed, and some are favoured templates recreated over and over."
shortcode: dreadspawncrtr
type: lore
subType: bestiary
data:
  banner: creaturebnr
---

Dreadspawn are creatures that were made, not born. They are not the creation of any single god; they are a manifestation of the powers of invention and creation themselves. Every pantheon has one or more gods of invention or creation, and each of them, in all likelihood, dabbles in the making of such things. Mortal agents make them too: a made man stitched together from the dead is a dreadspawn as surely as anything a god has shaped.

Two things connect every dreadspawn, whatever made it and whatever it is made of. It is made rather than born, and it is incapable of reproduction — universally, without exception. A dreadspawn has no young. For reasons known only to their makers, some of them are nonetheless favoured templates, recreated over and over again, so that a shape first made long ago can be met in many places and many ages.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'dreadspawn'
```
