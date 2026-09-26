---
shortcode: reference
name: {full: References, aliases: []}
type: doc
subType: reference
description: Reference materials and source documents.
tags: [draft]
data: {banner: null}
---

Reference materials and source documents.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'doc'
  AND subType = 'reference'
ORDER BY name.full COLLATE NOCASE
```
