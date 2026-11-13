---
shortcode: zmrhdhsncnttns
name: {full: Zemor Hodhis Incantations}
type: lore
subType: arcana
description: "A catalogue of the incantations of the Six Ways, grouped by the six currents of the arcane and the central mastery of Kentra, with their levels and effects."
tags: [lore, arcane, zemor-hodhis]
data: {packFolder: affiliationszemorhodhis, culture: vylarianclt}
---

The incantations of [[affiliation-zemorhodhis|The Six Ways]], the Zemor Hodhis, are grouped below by the six currents of the arcane. [[affiliation-kentra|Kentra]] stands at the center of their seal: mastery of all six, rather than a seventh current. Each list gives the incantations in order of level, with a brief account of their effects.

## Pirethos (Fire)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pirethos'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Zefaris (Air)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zefaris'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Fisera (Earth/Life)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'fisera'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Hidalis (Water)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hidalis'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Sideris (Metal)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideris'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Neumenos (Spirit)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'neumenos'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Kentra (_The Center All_)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'kentra'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## See Also {#see-also}

- [[affiliation-zemorhodhis|Zemor Hodhis]]
