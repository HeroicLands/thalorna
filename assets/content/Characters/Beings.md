---
name:
  full: Beings
  aliases: []
type: doc
subType: reference
shortcode: being
tags:
description: Every being across the lands of Thalorna and beyond – people, beasts, spirits, and monsters.
data:
  banner: characterbnr
---

Every being across the lands of Thalorna and beyond: the people whose choices shape the world's ongoing history, and the beasts, spirits, and monsters that share it with them.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'being'
ORDER BY name.full COLLATE NOCASE
```
