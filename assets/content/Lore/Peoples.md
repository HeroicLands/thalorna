---
shortcode: peoples
name: {full: Peoples, aliases: []}
type: doc
subType: reference
description: Distinct peoples, races, and lineages.
tags: [draft]
data: {banner: peoplebnr}
---

Distinct peoples, races, and lineages.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'lore'
  AND subType = 'folk'
ORDER BY name.full COLLATE NOCASE
```
