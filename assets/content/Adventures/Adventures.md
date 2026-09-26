---
name:
  full: Adventures
  aliases: []
type: doc
subType: reference
shortcode: scenario
tags:
  - draft
description: Playable adventures and modules.
data:
  banner: null
---

Playable adventures and modules.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'scenario'
  AND subType = 'adventure'
ORDER BY name.full COLLATE NOCASE
```
