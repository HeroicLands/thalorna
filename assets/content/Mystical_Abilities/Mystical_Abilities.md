---
shortcode: mysticalability
name: {full: Mystical Abilities}
type: doc
subType: reference
description: Magical and supernatural powers.
tags: [draft]
data: {banner: packagebuild-none-image-mysticalabilitybnr}
---

## Arcane Incantation

Arcane incantations are divided by tradition.

- [[affiliation-zemorhodhis|Zemor Hodhis]]

### Incantation Hidalis

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hidalis'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Kentra

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'kentra'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Neumenos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'neumenos'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Fisera

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'fisera'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Pirethos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pirethos'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Sideris

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideris'
ORDER BY name.full COLLATE NOCASE
```

### Incantation Zefaris

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zefaris'
ORDER BY name.full COLLATE NOCASE
```

## Arcane Talent

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM entries
WHERE type = 'mysticalability'
  AND subType = 'arcanetalent'
ORDER BY name.full COLLATE NOCASE
```

## Shamanic Rite

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'shamanicrite'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Action

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritaction'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Power

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritpower'
ORDER BY name.full COLLATE NOCASE
```

## Benediction

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'benediction'
ORDER BY name.full COLLATE NOCASE
```

## Divine Devotion

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divinedevotion'
ORDER BY name.full COLLATE NOCASE
```

## Divine Incantation

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divineincantation'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Talent

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spirittalent'
ORDER BY name.full COLLATE NOCASE
```

## Alchemy

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'alchemy'
ORDER BY name.full COLLATE NOCASE
```

## Divination

```sql {allow-empty=true}
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divination'
ORDER BY name.full COLLATE NOCASE
```
