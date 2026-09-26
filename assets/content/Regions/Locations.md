---
shortcode: locations
name: {full: Locations, aliases: []}
type: doc
subType: reference
description: Notable places—ruins, landmarks, dungeons, and wonders.
tags: [draft]
data: {banner: sitebnr}
---

Notable places—ruins, landmarks, dungeons, and wonders.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType IN ('site', 'structure', 'feature')
ORDER BY name.full COLLATE NOCASE
```
