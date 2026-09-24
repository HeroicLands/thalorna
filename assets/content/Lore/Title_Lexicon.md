---
type: doc
subType: reference
name:
  full: Title Lexicon
  aliases:
    - Titles
    - Forms of Address
shortcode: titlelexcn
data:
  banner: null
---

Thalorna's peoples do the same things and call them by different words. A
Nordman and a Kheperi both have a man who holds a province for the king; one is
a Jarl and the other a Haty'a. This note sets those words beside each other, so
that a name met in play can be placed, and a name needed in play can be found.

## Standing and office are two different things

**Standing** is where a person stands — what the law and the neighbours reckon
them, whether or not they hold any post. **Office** is the job: a charge held,
exercised, and one day handed on. They move independently. Three of the Nine
Houses of Chandrapur share a standing and hold no office at all between them,
while the man who keeps the canal has an office and very little standing.

So the tables below are two, and they are read differently. Standing is looked
up **by function** — you know what the thing is and want each people's word for
it. Office is looked up **by people** — you have met a word and want to know
what its holder does.

## Standing among the peoples

Every rung on every ladder in the setting is reckoned against one of the
standings under [[doc-lore|Lore]], and each of those has its own note. They are
the headings here. Under each is every people that has a word for it.

Where a people is absent from a heading, its ladder does not reach that far or
does not divide there. An absence is not always a silence: the Kheperi run their
nomes without a treasurer and read no omens at court, and both are facts about
Ta'Kheperu rather than gaps in the account of it.

```sql :section-level 3
WITH peoples AS (
  SELECT n.*, CASE
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Ta.Kheperu%'       THEN 'Kheperi'
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
SELECT lr.name.full || ' — ' || lr.description AS _section,
       p.people                                AS "People",
       string_agg(DISTINCT r.title, ' · ')     AS "What they call it",
       min(min(r.level)) OVER (PARTITION BY lr.shortcode) AS _rung,
       lr.name.full                            AS _function
FROM peoples p, unnest(p.data.governance.ranks) AS t(r)
JOIN notes lr ON lr.shortcode = r.lore AND lr.file.folder = 'Lore/Ranks'
WHERE p.people IS NOT NULL
GROUP BY lr.shortcode, lr.name.full, lr.description, p.people
ORDER BY _rung, _function, p.people
```

## Standing in the faiths and the traditions

A temple, an order and a school of magic each rank their people, and they do it
on the same reckoning the polities use — which is what lets a priest's ladder be
set beside a king's without either being bent to fit. The words are entirely
their own.

```sql :section-level 3
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
SELECT lr.name.full || ' — ' || lr.description AS _section,
       t.tradition                             AS "Tradition",
       string_agg(DISTINCT r.title, ' · ')     AS "What they call it",
       min(min(r.level)) OVER (PARTITION BY lr.shortcode) AS _rung,
       lr.name.full                            AS _function
FROM traditions t, unnest(t.data.governance.ranks) AS u(r)
JOIN notes lr ON lr.shortcode = r.lore AND lr.file.folder = 'Lore/Ranks'
WHERE t.tradition IS NOT NULL AND t.tradition <> ''
GROUP BY lr.shortcode, lr.name.full, lr.description, t.tradition
ORDER BY _rung, _function, t.tradition
```

## Offices, people by people

There is no common reckoning for offices as there is for standing — a people
divides the work of governing as its own history left it, and no two divide it
alike. So these are read the other way about: find the people, then the word.
Each entry says what its holder actually does.

```sql :section-level 3
WITH peoples AS (
  SELECT n.*, CASE
      WHEN n.file.folder LIKE 'Regions/Xerathia/%/Ta.Kheperu%'       THEN 'Kheperi'
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
English word appears in a dozen rows — `Bondservant`, `Chieftain`, `Elder`,
`Greater Nobility` — it is the reckoning showing through rather than a word any
of those peoples uses at home. Read those rows as a statement about the account,
not about the people.

**A word standing alone is worth attention.** `Níding`, `Atimos`, `Nützōk` and
`Severed` all name the man set outside the law, and each carries its people's
particular idea of what that means — thrown out of the kindred, struck from the
citizen roll, unnamed, or cut away. The word is the argument.

**The same word can mean two things in two places.** `Mōbad` is the chief priest
of the Ashalan faiths and an office among the Khazryn; `Elder` is a standing, an
office in six peoples, and a courtesy anyone may use. Nothing prevents it, and
the setting is older than its vocabulary.

**Standing does not sort peoples against each other.** A Vedyari `Sāmanta` and a
Nordmal `Jarl` occupy the same rung of their own ladders. That says they stand
in the same relation to their sovereign, and nothing at all about which of them
is the greater man.
