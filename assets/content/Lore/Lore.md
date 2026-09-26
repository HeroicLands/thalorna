---
name:
  full: Lore
  aliases: []
type: doc
subType: reference
shortcode: lore
tags:
  - draft
description: Myths, legends, and background lore.
data:
  banner: null
---

Myths, legends, and background lore.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'lore'
ORDER BY name.full COLLATE NOCASE
```
