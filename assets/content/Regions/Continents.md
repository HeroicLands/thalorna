---
shortcode: continents
name: {full: Continents, aliases: []}
type: doc
subType: reference
description: Major landmasses of the world.
tags: [draft]
data: {banner: continentbnr}
---

Major landmasses of the world.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND list_contains(tags, 'continent')
ORDER BY name.full COLLATE NOCASE
```
