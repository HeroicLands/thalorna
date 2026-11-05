---
shortcode: titlelexcn
name: {full: Title Lexicon, en: [Titles, Forms of Address]}
type: doc
subType: reference
data: {banner: null}
---

The Title Lexicon sets out how [[place-worldthlrn|the World of Thalorna]]'s peoples do the same things and call them by different words. A
member of the [[lore-nordheimnclt|Nordheimn]] people and a [[lore-khelathiclt|Khelathi]] both have a man who holds a province for the king; one is
a Jarl and the other a Halzi'a. This note sets those words beside each other, so
that a name met in play can be placed, and a name needed in play can be found.

## Standing and office are two different things

**Standing** is where a person stands—what the law and the neighbors reckon
them, whether or not they hold any post. **Office** is the job: a charge held,
exercised, and one day handed on. They move independently. Three of the [Nine Houses of Chendrapur]{.name data-type="affiliation"} share a standing and hold no office at all between them,
while the man who keeps the canal has an office and very little standing.

So the tables below are two kinds, and they are read differently. Standing is a
place on one body's own ladder, so it is looked up **by people** or **by
tradition**: find the people, then the rung, and the description says what that
rung is. Office is a charge rather than a rung, so it is tabled separately, also
**by people**: find the people, then the word, and the entry says what its holder
does.

## Standing among the peoples

Every polity states its ladder as a run of rungs, and each rung carries a level,
a title and a description. The tables here set out those ladders people by
people, lowest rung first, with level 0—the man set outside the law—at the
head of each. A rung that has a note of its own under
[[doc-lore|Lore]] links to it from its title, and a rung several polities state in
the same words is one row naming them all.

A level is a place on its own people's ladder and nothing more. Level 4 in one
polity and level 4 in another are not the same standing, so the rows are never
read across peoples by number; the title and the description say what each rung
is.

Where a people is absent, none of its polities states a ladder. An absence is not
always a silence: the Khelathi run their selatu without a treasurer and read no
omens at court, and both are facts about [[affiliation-empireakhlth|Au'Khelathu]] rather than gaps in the
account of it.

```sql {section-level=3}
WITH people_of(folder, people) AS (
  VALUES
    ('thalorna-none-folder-aelwyth', 'Aelwythan'),
    ('thalorna-none-folder-bethua', 'Bethuan'),
    ('thalorna-none-folder-byzaria', 'Bizarian'),
    ('thalorna-none-folder-calypsa', 'Calypsan'),
    ('thalorna-none-folder-amradad', 'Dunhari'),
    ('thalorna-none-folder-dunharadesert', 'Dunhari'),
    ('thalorna-none-folder-elavendre', 'Elavendri'),
    ('thalorna-none-folder-helionis', 'Helionite'),
    ('thalorna-none-folder-hanalxilan', 'Itsani'),
    ('thalorna-none-folder-ixbaltzaku', 'Itsani'),
    ('thalorna-none-folder-ixilankul', 'Itsani'),
    ('thalorna-none-folder-kankul', 'Itsani'),
    ('thalorna-none-folder-kelwanuk', 'Itsani'),
    ('thalorna-none-folder-kuxiixbal', 'Itsani'),
    ('thalorna-none-folder-neokbaate', 'Itsani'),
    ('thalorna-none-folder-osetakona', 'Itsani'),
    ('thalorna-none-folder-qapteltzakul', 'Itsani'),
    ('thalorna-none-folder-shuqash', 'Itsani'),
    ('thalorna-none-folder-tenlaya', 'Itsani'),
    ('thalorna-none-folder-teyumi', 'Itsani'),
    ('thalorna-none-folder-tikupilarit', 'Itsani'),
    ('thalorna-none-folder-tokchiaska', 'Itsani'),
    ('thalorna-none-folder-xelem', 'Itsani'),
    ('thalorna-none-folder-jenchai', 'Jurthati'),
    ('thalorna-none-folder-kalihara', 'Kaliharan'),
    ('thalorna-none-folder-khazryndesert', 'Khazrin'),
    ('thalorna-none-folder-regkhpol', 'Khelathi'),
    ('thalorna-none-folder-malagna', 'Nordmal'),
    ('thalorna-none-folder-nordheim', 'Nordmal'),
    ('thalorna-none-folder-norgaad', 'Nordmal'),
    ('thalorna-none-folder-targud', 'Nordmal'),
    ('thalorna-none-folder-vithgard', 'Nordmal'),
    ('thalorna-none-folder-politiesnyaluba', 'Nyaluba'),
    ('thalorna-none-folder-okharis', 'Okharin'),
    ('thalorna-none-folder-tribes', 'Okharin'),
    ('thalorna-none-folder-provenzia', 'Provénzian'),
    ('thalorna-none-folder-tantsou', 'Tantsou'),
    ('thalorna-none-folder-taruzel', 'Taruzelian'),
    ('thalorna-none-folder-tarvenia', 'Tarvenan'),
    ('thalorna-none-folder-vedyara', 'Vedyari'),
    ('thalorna-none-folder-vrystwald', 'Vristwald'),
    ('thalorna-none-folder-vylaria', 'Vilérian')
),
peoples AS (
  SELECT n.*, o.people
  FROM notes n
  LEFT JOIN people_of o ON n.data.packFolder = o.folder
  WHERE n.type = 'affiliation' AND n.subType = 'polity'
)
SELECT min(lr.address.slug)                   AS _ref,
       p.people                                AS _section,
       r.title                                 AS "Title",
       r.level                                 AS "Level",
       string_agg(DISTINCT p.name.full, ' · ' ORDER BY p.name.full) AS "Polities",
       coalesce(
           nullif(regexp_extract(r.description, '^(.*?[.!?])(\s|$)', 1), ''),
           r.description
       )                                       AS "What it is"
FROM peoples p, unnest(p.data.governance.ranks) AS t(r)
LEFT JOIN notes lr ON concat(lr.package, '-note-', lr.type, '-', lr.shortcode) = r.lore
WHERE p.people IS NOT NULL
GROUP BY p.people, r.level, r.title, "What it is"
ORDER BY p.people, r.level, r.title COLLATE NOCASE, "Polities"
```

## Standing in the faiths and the traditions

A temple, an order and a school of magic each rank their people on a ladder of
the same shape the polities use: a level, a title and a description for every
rung. The tables are grouped by tradition, lowest rung
first, and the words are entirely their own. A rung that has a note of its own
under [[doc-lore|Lore]] links to it from its title, and a rung several bodies state
in the same words is one row naming them all.

```sql {section-level=3}
WITH homes AS (
  SELECT n.*,
         coalesce(n.data.packFolder, (
           SELECT min(h.data.packFolder)
           FROM notes h
           WHERE list_contains(n.data.parents,
                               concat(h.package, '-note-', h.type, '-', h.shortcode))
         )) AS home
  FROM notes n
  WHERE n.type = 'affiliation'
),
traditions AS (
  SELECT n.*, CASE
      WHEN n.home = 'thalorna-none-folder-pantheonsasguardian'
        THEN 'Asguardian'
      WHEN n.home = 'thalorna-none-folder-ashaian' AND n.subType = 'faithtradition'
        THEN 'Ashaian'
      WHEN n.home = 'thalorna-none-folder-ashaian' AND n.subType = 'spirittradition'
        THEN 'Sovidur'
      WHEN n.home = 'thalorna-none-folder-pantheonsaureldian'
        THEN 'Aureldian'
      WHEN n.home = 'thalorna-none-folder-pantheonsfirstgods'
        THEN 'First Gods'
      WHEN n.home = 'thalorna-none-folder-pantheonitzani'
        THEN 'Itsani'
      WHEN n.home = 'thalorna-none-folder-regkhaff' AND n.subType IN ('faithtradition', 'order')
        THEN 'Khelathi'
      WHEN n.home = 'thalorna-none-folder-regkhaff' AND n.subType = 'arcanetradition'
        THEN 'Khelunu Lekhau'
      WHEN n.home = 'thalorna-none-folder-pantheonsnkaruthar'
        THEN 'Nkaruthar'
      WHEN n.home = 'thalorna-none-folder-nyaluba'
        THEN 'Nyaluba'
      WHEN n.home IN ('thalorna-none-folder-pantheonstengwouronglei',
                               'thalorna-none-folder-celestialpantheon',
                               'thalorna-none-folder-elementallords',
                               'thalorna-none-folder-demonlords',
                               'thalorna-none-folder-youweng')
        THEN 'Tengwou Rong Lei'
      WHEN n.home = 'thalorna-none-folder-pantheonstharivaan'
        THEN 'Tharivaan'
      WHEN n.home = 'thalorna-none-folder-pantheonsvarnuka' AND n.subType <> 'criminal'
        THEN 'Varnuka'
      WHEN n.home = 'thalorna-none-folder-affiliationszemorhodhis'
        THEN 'Zemor Hodhis'
      END AS tradition
  FROM homes n
)
SELECT min(lr.address.slug)                   AS _ref,
       t.tradition                             AS _section,
       r.title                                 AS "Title",
       r.level                                 AS "Level",
       string_agg(DISTINCT t.name.full, ' · ' ORDER BY t.name.full) AS "Bodies",
       coalesce(
           nullif(regexp_extract(r.description, '^(.*?[.!?])(\s|$)', 1), ''),
           r.description
       )                                       AS "What it is"
FROM traditions t, unnest(t.data.governance.ranks) AS u(r)
LEFT JOIN notes lr ON concat(lr.package, '-note-', lr.type, '-', lr.shortcode) = r.lore
WHERE t.tradition IS NOT NULL
GROUP BY t.tradition, r.level, r.title, "What it is"
ORDER BY t.tradition, r.level, r.title COLLATE NOCASE, "Bodies"
```

## Offices, people by people

A people divides the work of governing as its own history left it, and no two
divide it alike, so an office has no counterpart in another people's table to be
set beside. Find the people, then the word. Each entry says what its holder
actually does.

```sql {section-level=3}
WITH people_of(folder, people) AS (
  VALUES
    ('thalorna-none-folder-aelwyth', 'Aelwythan'),
    ('thalorna-none-folder-bethua', 'Bethuan'),
    ('thalorna-none-folder-byzaria', 'Bizarian'),
    ('thalorna-none-folder-calypsa', 'Calypsan'),
    ('thalorna-none-folder-amradad', 'Dunhari'),
    ('thalorna-none-folder-dunharadesert', 'Dunhari'),
    ('thalorna-none-folder-elavendre', 'Elavendri'),
    ('thalorna-none-folder-helionis', 'Helionite'),
    ('thalorna-none-folder-hanalxilan', 'Itsani'),
    ('thalorna-none-folder-ixbaltzaku', 'Itsani'),
    ('thalorna-none-folder-ixilankul', 'Itsani'),
    ('thalorna-none-folder-kankul', 'Itsani'),
    ('thalorna-none-folder-kelwanuk', 'Itsani'),
    ('thalorna-none-folder-kuxiixbal', 'Itsani'),
    ('thalorna-none-folder-neokbaate', 'Itsani'),
    ('thalorna-none-folder-osetakona', 'Itsani'),
    ('thalorna-none-folder-qapteltzakul', 'Itsani'),
    ('thalorna-none-folder-shuqash', 'Itsani'),
    ('thalorna-none-folder-tenlaya', 'Itsani'),
    ('thalorna-none-folder-teyumi', 'Itsani'),
    ('thalorna-none-folder-tikupilarit', 'Itsani'),
    ('thalorna-none-folder-tokchiaska', 'Itsani'),
    ('thalorna-none-folder-xelem', 'Itsani'),
    ('thalorna-none-folder-jenchai', 'Jurthati'),
    ('thalorna-none-folder-kalihara', 'Kaliharan'),
    ('thalorna-none-folder-khazryndesert', 'Khazrin'),
    ('thalorna-none-folder-regkhpol', 'Khelathi'),
    ('thalorna-none-folder-malagna', 'Nordmal'),
    ('thalorna-none-folder-nordheim', 'Nordmal'),
    ('thalorna-none-folder-norgaad', 'Nordmal'),
    ('thalorna-none-folder-targud', 'Nordmal'),
    ('thalorna-none-folder-vithgard', 'Nordmal'),
    ('thalorna-none-folder-politiesnyaluba', 'Nyaluba'),
    ('thalorna-none-folder-okharis', 'Okharin'),
    ('thalorna-none-folder-tribes', 'Okharin'),
    ('thalorna-none-folder-provenzia', 'Provénzian'),
    ('thalorna-none-folder-tantsou', 'Tantsou'),
    ('thalorna-none-folder-taruzel', 'Taruzelian'),
    ('thalorna-none-folder-tarvenia', 'Tarvenan'),
    ('thalorna-none-folder-vedyara', 'Vedyari'),
    ('thalorna-none-folder-vrystwald', 'Vristwald'),
    ('thalorna-none-folder-vylaria', 'Vilérian')
),
peoples AS (
  SELECT n.*, o.people
  FROM notes n
  LEFT JOIN people_of o ON n.data.packFolder = o.folder
  WHERE n.type = 'affiliation' AND n.subType = 'polity'
)
-- `offices` is keyed by office, so it is read through `json_each`, which walks
-- an object's keys whether the column is typed as a struct or a map.
SELECT p.people AS _section,
       j.key    AS "Office",
       coalesce(
           nullif(regexp_extract(min(j.value->>'$'), '^(.*?[.!?])(\s|$)', 1), ''),
           min(j.value->>'$')
       )        AS "What it is"
FROM peoples p, json_each(to_json(p.data.governance.offices)) AS j
WHERE p.people IS NOT NULL
  AND json_type(j.value) = 'VARCHAR'
GROUP BY p.people, j.key
ORDER BY p.people, j.key COLLATE NOCASE
```

## Reading the tables

**A word standing under many peoples is not a translation.** Where the same
A glossed word appears in a dozen rows—`Bondservant`, `Chieftain`, `Elder`,
`Greater Nobility`—it is the reckoning showing through rather than a word any
of those peoples uses at home. Read those rows as a statement about the account,
not about the people.

**A word standing alone is worth attention.** `Niding`, `Átimor`, `Nuitsou` and
`Severed` all name the man set outside the law, and each carries its people's
particular idea of what that means—thrown out of the kindred, struck from the
citizen roll, unnamed, or cut away. The word is the argument.

**The same word can mean two things in two places.** `Shekhul` is the chief priest
of the Ashaian faiths and an office among the [[lore-khazariclt|Khazrin]]; `Elder` is a standing, an
office in six peoples, and a courtesy anyone may use. Nothing prevents it, and
the setting is older than its vocabulary.

**Standing does not sort peoples against each other.** A [[lore-vedyariclt|Vedyari]] `Samanta` and a
Nordmal `Jarl` occupy the same rung of their own ladders. That says they stand
in the same relation to their sovereign, and nothing at all about which of them
is the greater man.
