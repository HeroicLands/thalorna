---
name:
  full: Mystical Abilities
  aliases: []
type: doc
subType: reference
shortcode: mysticalability
tags:
description: Magical and supernatural powers.
data:
  banner: packagebuild-none-image-mysticalabilitybnr
---

## Arcane Incantation

Arcane incantations are divided by tradition.

- [[lore-hexhodai|Hex Hodai]]

### Incantus Hydälis

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hydalis'
ORDER BY name.full COLLATE NOCASE
```

### Incantus Kentra

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

### Incantus Physéra

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'physera'
ORDER BY name.full COLLATE NOCASE
```

### Incantus Pneuménos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pneumenos'
ORDER BY name.full COLLATE NOCASE
```

### Incantus Pyréthos

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pyrethos'
ORDER BY name.full COLLATE NOCASE
```

### Incantus Sidéros

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideros'
ORDER BY name.full COLLATE NOCASE
```

### Incantus Zephäris

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zepharis'
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

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'shamanicrite'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Action

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritaction'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Power

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spiritpower'
ORDER BY name.full COLLATE NOCASE
```

## Benediction

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'benediction'
ORDER BY name.full COLLATE NOCASE
```

## Divine Devotion

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divinedevotion'
ORDER BY name.full COLLATE NOCASE
```

## Divine Incantation

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divineincantation'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Talent

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'spirittalent'
ORDER BY name.full COLLATE NOCASE
```

## Alchemy

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'alchemy'
ORDER BY name.full COLLATE NOCASE
```

## Divination

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'divination'
ORDER BY name.full COLLATE NOCASE
```
