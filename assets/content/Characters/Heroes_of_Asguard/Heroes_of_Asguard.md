---
shortcode: heroessgrd
name: {full: Heroes of Asguard, aliases: []}
type: doc
subType: reference
description: "Variety of Asguardian Heroes."
---

```sql
SELECT address.slug    AS _ref,
       name.full       AS "Name",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND file.name <> 'New_Character_Template'
  AND list_contains(tags, 'heroes-of-asguard')
ORDER BY name.full COLLATE NOCASE
```
