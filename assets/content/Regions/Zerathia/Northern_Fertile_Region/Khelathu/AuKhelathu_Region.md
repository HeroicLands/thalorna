---
shortcode: aukhelathrgq
name: {full: Au'Khelathu Region}
type: place
subType: region
description: The great river valley and delta of Zerathia's northern shore—a band of flood-fed abundance running hundreds of leagues inland, and the seat of the Empire of Au'Khelathu.
tags: [region]
data:
  demonym: Khelathi
  lore: [humanflk]
  parents: [nrthrnfrtlrgn, xerathia]
  borders:
    - {to: bethuargn, bearing: W}
    - {to: dunharargn, bearing: NE}
    - {to: vylarianse, bearing: NW}
  routes: [{to: chandrmukha, bearing: NE, mode: ship, days: 30}]
  population: 19000000
  packFolder: regkhregn
  government: empireakhlth
  culture: khelathiclt
---

## Overview {#overview}

Au'Khelathu is a single river and the land it waters: [[place-zumeleshrvr|the Zumelesh]] runs north out of the southern uplands for hundreds of leagues, through desert, to a delta on the [[place-vylarianse|Vilérian Sea]], and nineteen million people live within reach of its water. Everyone in the [[place-nrthrnfrtlrgn|Northern Fertile Region]] knows the country by its flood. Once a year the river rises over the fields and goes down again leaving black silt behind, and that silt is why the [[affiliation-empireakhlth|Empire of Au'Khelathu]] can feed more people on less ground than anywhere else in the known world.

"Stand on the bank and look west," a river pilot tells a passenger on the first morning above the delta. "Green for a few miles, then nothing. The line where the black soil stops is where the country stops. Everything you want is between the two lines, and so is everybody else."

The river makes Au'Khelathu the exception in its region. [[place-bethuargn|Bethua Region]] and [[place-okharisrgn|Okharis Region]] draw their harvests from aqueducts and herds, and their ground is fertile only where somebody has engineered it to be. The [[lore-khelathiclt|Khelathi]] valley is fed by the river itself.

## Character

The country changes three times between the sea and the cataracts, and a traveler going upriver meets each change in turn.

The delta shares the wet-coastal character of the whole northern shore: sea-tempered winters, moderate summers, and the orchard crops that go with them—citrus, olive, grape, fig and date. Its channels, marshes and silt-islands hold the ports, the papyrus beds and the salt-pans, and it is the part of Au'Khelathu a foreigner usually sees first.

Upstream, the valley is almost tropical. Its water is warm enough that hippopotami and crocodiles thrive in it and kill farmers every year, and on a summer evening the air on the bank feels nothing like the dry country a day's ride to either side.

Beyond the flood's reach is desert. West of the river, high desert and chaparral run out toward the [[lore-bethuanclt|Bethuan]] frontier and give way to sand dunes nearer the valley; east, the land rises into rugged, mineral-rich hills before it runs out into the semi-desert of [[place-khuqetmiglet|Khuqet-Miglet]] and the [[lore-dunhariclt|Dunhari]] sand seas. Canal and cistern carry water a little way into this country, and herds graze its margins; nothing else lives there by choice. The deep sands of [[place-lareshu|Lareshu]] lie out beyond the settled country altogether.

## Peoples and Culture

The region is Khelathi: urban, literate and hierarchical, governed by a vast scribal bureaucracy beneath the divine office of the [[lore-garauu|Gar-Au]], and organized around the temples of the [[affiliation-khelathpnthn|Khelathi Pantheon]]. A visitor learns quickly that a Khelathi asks two things of a stranger before anything else—whose house speaks for him, and which of the two hands he was taught to write.

Along the western margins, herding peoples graze the dry country under arrangements with the Khelathi Halzi'a (provincial governors), of the kind found on the edges of the region's other realms.

## Politics and Power

The region is the heartland of the Empire of Au'Khelathu and is administered through its thirty-nine selatu (provinces), grouped as [[affiliation-deltaselatu|the Delta Selatu]], [[affiliation-upperrivrslt|the Upper River Selatu]], [[affiliation-borderselatu|the Border Selatu]] and [[affiliation-capitalselat|the Capital Selat]] around [[place-galezkara|Galezkara]]. The frontier with Bethua to the west has never been precisely drawn, and the occasional friction along it is the region's most persistent quarrel with a neighbor.

## Places {#places}

```sql
SELECT address.slug AS _ref,
       name.full    AS "Place",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'thalorna-note-place-aukhelathrgq')
ORDER BY name.full COLLATE NOCASE
```

[[place-akhozamenlaa|Akhoza-Menlaa]]
: a hidden site kept out of every record, of which the embalmers tell dark stories

[[place-anlaghura|Anlaghura]]
: the monolith standing alone in the [Targa River Valley]{.name data-type="place/region"}

[[place-beshakan|Beshakan]]
: the desert ruins where the earliest astronomers carved star maps into the stones

[[place-chenosolis|Chenosolis]]
: the highlands whose mountain shrine keeps the oldest records of the empire's astrologers

[[place-meqetgaru2|Meqet-Garu]]
: a small village remembered for a night a celebrated performer would rather forget

[[place-clublstvlt|The Burial Club's Last Vault]]
: the rock-cut common tomb in the dry margin west of the river

## Current Situation {#present}

The line where the black soil stops has moved toward the river. Two low floods in a row have left the water short of the canal-heads, so the ditches and qanats that carry the flood out to the valley's edges run dry earlier in the season, and the fields at the desert margin are the first to go back to dust. The dense basins in the middle of the valley hold their crops but draw harder on the granaries, and the delta's marshes shrink around the ports and papyrus beds. The orchard coast along the Vilérian Sea lives on winter rain and is least touched.

Every settled place counts the year by the Measure at [[place-yathtelgu|Yath-Telgu]] and the stores in its own cisterns and granaries. Villages assess what is left, the scribes of each selat remeasure the fields, and the Halzi'a argue that the render should follow the shortfall. Their reckonings reach the capital late and lower than the flood explains, and the suspicion that tribute is being held back is the empire's chief political fact: the selatu speak of it as the river's doing, and Galezkara reads it as something else.

The herding peoples of the western margins graze closer to the water under their arrangements with the Halzi'a, and the dry years push them into the farmers' stubble. The frontier with Bethua, which was never precisely drawn, takes the strain. Along the eastern edge, the garrisons of [[place-khuqetmiglet|Khuqet-Miglet]] are fed from a valley that has less to send.

Behind all of it stands the throne's standing. The [[lore-garauu|Gar-Au]] is 46 and in her twelfth year, the question of the succession is asked at court, and the river's failure falls on the one office that is supposed to answer for it.

## See Also {#see-also}

[[place-nrthrnfrtlrgn|Northern Fertile Region]]
: the parent region

[[place-zumeleshrvr|The Zumelesh]]
: the river the country is built on

[[affiliation-empireakhlth|Empire of Au'Khelathu]]
: the realm that holds this region

[[lore-khelathiclt|Khelathi]]
: the people and their ways

[[place-khuqetmiglet|Khuqet-Miglet]]
: the northeastern desert-march toward [[place-dunharargn|Dunhara]]

[[place-lutithnet|Lut-Ithnet]]
: a funerary estate under the western cliffs, at the end of a canal that has run dry

[[place-bethuargn|Bethua Region]]
: neighbor to the west

[[place-okharisrgn|Okharis Region]]
: the irrigated and pastoral country beyond Bethua
