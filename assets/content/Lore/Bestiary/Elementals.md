---
tags:
  - draft
name:
  full: Elementals
  aliases:
    - Elemental
description: "Physical manifestations of astral spirits, each embodying a single elemental aspect."
shortcode: elemcrtr
type: lore
subType: bestiary
data:
  banner: creaturebnr
---

Physical manifestations of spirits from the astral realm that embody a single elemental aspect.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'elemental'
```
