---
shortcode: velarikreign
name: {full: The Reign of Vélarik III}
type: lore
subType: history
description: "From 688 to 709 AF Vélarik III strengthened the crown of Provénzia by resuming the Gefavel princes' grants and taking the great seal from them; he died without a son, and his nephew Kralen Lédravren succeeded him without a quarrel."
tags: [history]
data:
  packFolder: provenzia
  events:
    - id: resumption
      when: 688
      kind: accession
      depth: region
      sources:
        - affiliation-kngdmprvnz
        - being-kingvelarikiii
        - being-itrolaldrvn
        - place-gwefavel
        - place-jalnazdal
      summary: >-
        Vélarik III takes the crown and at once resumes the crown lands the princes of Gefavel, a cadet branch of House Lédravren, hold by grant, and takes the great seal from the Gefavel prince who holds it as Chancellor. The lands pay for the king's household, and the Gefavel branch loses its standing at court.
      standing: attested
      names:
        - {name: the Resumption, by: affiliation-kngdmprvnz}
        - {name: the Taking, by: place-gwefavel}
      where:
        locus: [place-jalnazdal]
        reach:
          - place: place-gwefavel
            how: the princes lose their grants and the seal, and the branch's standing at court goes with them
            knowledge: named
      who: [{ref: being-kingvelarikiii, role: actor}, {ref: affiliation-kngdmprvnz, role: actor}]
      follows:
        - event: lore-warprinces
          how: enabled
          note: every king since the war works to strengthen the crown inside the Charter's forms
      accounts:
        - by: affiliation-kngdmprvnz
          says: >-
            The crown took back what was its own, by writ, as the crown may.
          agrees: partly
          withholds: whether the writ was issued with the Council's counsel
        - by: place-gwefavel
          says: >-
            A king took his own cousins' lands and seal without the counsel the Charter requires.
          agrees: partly
      unresolved: [whether the writ of resumption was put to the Council of Peers]
    - id: succession
      when: 709
      kind: accession
      depth: region
      sources: [affiliation-kngdmprvnz, being-kingvelarikiii, being-kralenldrvn, place-jalnazdal]
      summary: >-
        Vélarik III dies without a son. His nephew Kralen Lédravren, the son of his younger brother, succeeds him; the Peers, the cities and the great officers send their oaths within the month, and nobody puts up another claimant. Kralen keeps the resumed Gefavel lands and the Chancellor his uncle appointed.
      standing: attested
      names: [{name: the Accession of Kralen, by: affiliation-kngdmprvnz}]
      where: {locus: [place-jalnazdal]}
      who: [{ref: being-kralenldrvn, role: actor}, {ref: affiliation-kngdmprvnz, role: actor}]
      follows:
        - event: lore-velarikreign#resumption
          how: enabled
          note: the lands the old king resumed pay the new king's household, so he keeps them
      accounts:
        - by: affiliation-kngdmprvnz
          says: >-
            The crown passed to the king's nearest kin, as it should, and the realm accepted him.
          agrees: full
---

[[being-kingvelarikiii|Vélarik III]] reigned over the [[affiliation-kngdmprvnz|Kingdom of Provénzia]] from 688 to 709 AF, and his reign is the last turn of the long strengthening of the crown that began after [[lore-warprinces|the War of the Princes]]. He made the crown richer by taking from his own blood, and he left the kingdom the quarrel it argues now.

## The Resumption

Vélarik came to the crown in 688 at forty-three. In the first months of his reign he resumed the crown lands that the princes of [[place-gwefavel|Gefavel]] held by grant. The Gefavel princes were a cadet branch of [[affiliation-hseledravren|House Lédravren]], descended from a younger son of the house, and they held those grants and, in that generation, the great seal as Chancellor. The king took the seal from the Gefavel prince with the lands.

The court calls it the Resumption. Gefavel calls it the Taking. The resumed lands paid for the king's household for twenty years, and the crown needed the Council of Peers less for it. The Gefavel prince died without recovering either the lands or the seal, and his daughter [[being-itrolaldrvn|Itrola Lédravren]] has held Gefavel since. Whether Vélarik put the writ of resumption to the [[affiliation-councilpeers|Council of Peers]], as the [[lore-chrtrrghts|Charter of Rights]] requires for the crown's grants, is the question her petition turns on.

## The Long Reign

The rest of the reign was quiet by Provénzian measure. Vélarik never asked the Council for a levy he could do without, so it had little to refuse him. He gave the great seal in 704 to [[being-velzoreaitv|Velzore Aitevis]], Count of [[place-athavel|Atavel]], and the rivalry between Atavel and [[place-degavel|Degavel]] settled into the shape it has in the Council now.

## The Succession

Vélarik had no son. When he died in 709 at sixty-four, his nephew [[being-kralenldrvn|Kralen Lédravren]], the son of his younger brother, was his nearest kin, and the Peers, the cities and the great officers sent their oaths within the month. Nobody put up another claimant. Kralen kept his uncle's Chancellor and his uncle's lands.

## What It Left {#what-it-left}

- **The Gefavel grievance.** Itrola Lédravren's petition for her branch's grants and the great seal stands before the Council of Peers.
- **A richer crown.** The resumed lands pay for the king's household, and Kralen keeps them.
- **The Chancellor.** Velzore Aitevis holds the seal Gefavel wants.
- **An open succession.** Kralen has no child, and the Charter gives the Council no ruling on who follows him.

## See Also {#see-also}

[[being-kingvelarikiii|King Vélarik III]]
: the king

[[being-kralenldrvn|Kralen Lédravren]]
: his nephew and successor

[[being-itrolaldrvn|Itrola Lédravren]]
: the Princess of Gefavel

[[lore-warprinces|The War of the Princes]]
: the war after which every king strengthened the crown
