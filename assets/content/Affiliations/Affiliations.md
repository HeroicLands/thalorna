---
name:
  full: Affiliations
  aliases: []
type: doc
subType: reference
shortcode: affiliation
tags:
description: Every organized body of Thalorna – religions, schools of magic, spirit traditions, and secular orders.
data:
  banner: organizationbnr
---

An affiliation is any organized body a character can belong to, and belonging to
one is a standing within it rather than a label on the character. What kind of
body it is comes from its subtype.

A religion is an affiliation and nothing more than an affiliation. The
organization is recorded here; the practices of its rites are a **skill**, and
the powers it grants are **mystical abilities**. Those three are separate, and a
character may hold any of them without the others.

## Religions and Churches

Deity-facing traditions – pantheons, the cults of individual deities, and the
orders sworn to them.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType IN ('faithtradition', 'order')
ORDER BY name.full COLLATE NOCASE
```

## Schools of Magic

Arcane traditions, including alchemical schools.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'arcanetradition'
ORDER BY name.full COLLATE NOCASE
```

## Spirit Traditions

Shamanic and totemic traditions, ancestor cults, and the spirit courts.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'spirittradition'
ORDER BY name.full COLLATE NOCASE
```

## Secular Bodies

Guilds, banks, syndicates, noble houses, military units, and the other worldly
institutions.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType IN ('guild', 'venture', 'criminal', 'governmental', 'fellowship', 'lineage')
ORDER BY name.full COLLATE NOCASE
```
