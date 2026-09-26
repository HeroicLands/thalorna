---
name:
  full: Peoples
  aliases: []
type: doc
subType: reference
shortcode: peoples
tags:
  - draft
description: Distinct peoples, races, and lineages.
data:
  banner: peoplebnr
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
