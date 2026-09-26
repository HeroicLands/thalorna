---
name:
  full: Settlements
  aliases: []
type: doc
subType: reference
shortcode: setlements
tags:
  - draft
description: Cities, towns, villages, and other inhabited places.
data:
  banner: settlementbnr
---

Cities, towns, villages, and other inhabited places.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
ORDER BY name.full COLLATE NOCASE
```
