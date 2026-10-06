---
shortcode: titlelexcn
name: {full: Title Lexicon, aliases: [Titles, Forms of Address]}
type: doc
subType: reference
data: {banner: null}
---

Thalorna's peoples do the same things and call them by different words. A
Nordman and a Khelâthi both have a man who holds a province for the king; one is
a Jarl and the other a Halzi'a. This note sets those words beside each other, so
that a name met in play can be placed, and a name needed in play can be found.

## Standing and office are two different things

**Standing** is where a person stands—what the law and the neighbors reckon
them, whether or not they hold any post. **Office** is the job: a charge held,
exercised, and one day handed on. They move independently. Three of the Nine
Houses of Chandrapur share a standing and hold no office at all between them,
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
always a silence: the Khelâthi run their selatu without a treasurer and read no
omens at court, and both are facts about Aû'Khelâthu rather than gaps in the
account of it.

```sql {section-level=3}
WITH peoples AS (
  SELECT n.*, CASE
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Khelathu%'       THEN 'Khelâthi'
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Bethua%'           THEN 'Bethuan'
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Okharis%'          THEN 'Okharin'
      WHEN n.file.folder LIKE 'Regions/Xerathia/Southern_Savannahs%' THEN 'Nyaluba'
      WHEN n.file.folder LIKE 'Regions/K.ich.chik/%'                 THEN 'Itzani'
      WHEN n.file.folder LIKE 'Regions/Kalihara%'                    THEN 'Kaliharan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Vedyara%'             THEN 'Vedyari'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Nordlands%'           THEN 'Nordmal'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Vrystwald%'           THEN 'Vrystwald'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Hellad/Helionis%'     THEN 'Helionite'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Hellad/Byzaria%'      THEN 'Byzarian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Midhalion/Harad%'     THEN 'Haradian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Midhalion/Vylaria%'   THEN 'Vylarian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Dunhara%'             THEN 'Dunhari'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Khazryn%'             THEN 'Khazryn'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Tanvur%'              THEN 'Tanvuri'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Jurthat%'             THEN 'Jurthat'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Elavendre%'  THEN 'Elavendri'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Aelwyth%'    THEN 'Aelwythan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Tarvena%'    THEN 'Tarvenan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Provenzia%'  THEN 'Provenzian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Calypsa%'    THEN 'Calypsan'
      END AS people
  FROM notes n
  WHERE n.type = 'affiliation' AND n.subType = 'polity'
)
SELECT min(lr.address.slug)                   AS _ref,
       p.people                                AS _section,
       r.title                                 AS "Title",
       r.level                                 AS "Level",
       string_agg(DISTINCT p.name.full, ' · ') AS "Polities",
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
WITH traditions AS (
  SELECT n.*,
         replace(
             regexp_extract(n.file.folder, '^Affiliations/(?:Divine|Arcane)/([A-Za-z_]+)', 1),
             '_', ' '
         ) AS tradition
  FROM notes n
  WHERE n.type = 'affiliation'
    AND (n.file.folder LIKE 'Affiliations/Divine/%' OR n.file.folder LIKE 'Affiliations/Arcane/%')
)
SELECT min(lr.address.slug)                   AS _ref,
       t.tradition                             AS _section,
       r.title                                 AS "Title",
       r.level                                 AS "Level",
       string_agg(DISTINCT t.name.full, ' · ') AS "Bodies",
       coalesce(
           nullif(regexp_extract(r.description, '^(.*?[.!?])(\s|$)', 1), ''),
           r.description
       )                                       AS "What it is"
FROM traditions t, unnest(t.data.governance.ranks) AS u(r)
LEFT JOIN notes lr ON concat(lr.package, '-note-', lr.type, '-', lr.shortcode) = r.lore
WHERE t.tradition IS NOT NULL AND t.tradition <> ''
GROUP BY t.tradition, r.level, r.title, "What it is"
ORDER BY t.tradition, r.level, r.title COLLATE NOCASE, "Bodies"
```

## Offices, people by people

A people divides the work of governing as its own history left it, and no two
divide it alike, so an office has no counterpart in another people's table to be
set beside. Find the people, then the word. Each entry says what its holder
actually does.

```sql {section-level=3}
WITH peoples AS (
  SELECT n.*, CASE
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Khelathu%'       THEN 'Khelâthi'
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Bethua%'           THEN 'Bethuan'
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Okharis%'          THEN 'Okharin'
      WHEN n.file.folder LIKE 'Regions/Xerathia/Southern_Savannahs%' THEN 'Nyaluba'
      WHEN n.file.folder LIKE 'Regions/K.ich.chik/%'                 THEN 'Itzani'
      WHEN n.file.folder LIKE 'Regions/Kalihara%'                    THEN 'Kaliharan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Vedyara%'             THEN 'Vedyari'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Nordlands%'           THEN 'Nordmal'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Vrystwald%'           THEN 'Vrystwald'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Hellad/Helionis%'     THEN 'Helionite'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Hellad/Byzaria%'      THEN 'Byzarian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Midhalion/Harad%'     THEN 'Haradian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Midhalion/Vylaria%'   THEN 'Vylarian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Dunhara%'             THEN 'Dunhari'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Khazryn%'             THEN 'Khazryn'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Tanvur%'              THEN 'Tanvuri'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Jurthat%'             THEN 'Jurthat'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Elavendre%'  THEN 'Elavendri'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Aelwyth%'    THEN 'Aelwythan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Tarvena%'    THEN 'Tarvenan'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Provenzia%'  THEN 'Provenzian'
      WHEN n.file.folder LIKE 'Regions/Ankaris/Aureldia/Calypsa%'    THEN 'Calypsan'
      END AS people
  FROM notes n
  WHERE n.type = 'affiliation' AND n.subType = 'polity'
)
-- `offices` is read as a MAP because the corpus carries more than two hundred
-- distinct office keys, which is the threshold above which a JSON object is
-- inferred as a map rather than a struct. Consolidating the office vocabulary
-- below that count flips the column to a struct and `map_entries` stops binding,
-- which fails the build rather than emptying the table.
SELECT p.people AS _section,
       e.key    AS "Office",
       coalesce(
           nullif(regexp_extract(min(e.value), '^(.*?[.!?])(\s|$)', 1), ''),
           min(e.value)
       )        AS "What it is"
FROM peoples p, unnest(map_entries(p.data.governance.offices)) AS t(e)
WHERE p.people IS NOT NULL
GROUP BY p.people, e.key
ORDER BY p.people, e.key COLLATE NOCASE
```

## Reading the tables

**A word standing under many peoples is not a translation.** Where the same
English word appears in a dozen rows—`Bondservant`, `Chieftain`, `Elder`,
`Greater Nobility`—it is the reckoning showing through rather than a word any
of those peoples uses at home. Read those rows as a statement about the account,
not about the people.

**A word standing alone is worth attention.** `Níding`, `Atimos`, `Nützōk` and
`Severed` all name the man set outside the law, and each carries its people's
particular idea of what that means—thrown out of the kindred, struck from the
citizen roll, unnamed, or cut away. The word is the argument.

**The same word can mean two things in two places.** `Mōbad` is the chief priest
of the Ashalan faiths and an office among the Khazryn; `Elder` is a standing, an
office in six peoples, and a courtesy anyone may use. Nothing prevents it, and
the setting is older than its vocabulary.

**Standing does not sort peoples against each other.** A Vedyari `Sāmanta` and a
Nordmal `Jarl` occupy the same rung of their own ladders. That says they stand
in the same relation to their sovereign, and nothing at all about which of them
is the greater man.
