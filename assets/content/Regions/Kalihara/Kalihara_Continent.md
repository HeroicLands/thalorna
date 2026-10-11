---
shortcode: klhrcntnnt
name: {full: Kalihara Continent, aliases: [Kalihara]}
type: place
subType: region
description: A large tropical island in the western ocean, four to seven hundred miles west of Okháris and Provènzia—one ancient civilization older than the Elder Races' arrival, closed to outsiders except through a few controlled ports on its eastern coast.
tags: [continent, kalihara]
data:
  demonym: Kaliharan
  lore: [humanflk]
  parents: [worldthlrn]
  population: 3000000
  packFolder: kalihara
  government: kalihara

# terran_analog: "A large tropical island in the western ocean, about 400 by 370 miles, lying 450 to 700 miles west of Okháris and Provènzia, off the mouth of the strait between the two continents (think of a landmass the size of the British Isles set where the Azores are, relative to a Mediterranean whose only door opens west). No real-world counterpart; the closest analog in mythic terms is Atlantis as Plato describes it, a known and inhabited island that has chosen to remain insular. The prevailing wind blows from the continents toward the island for most of the year, so the outbound run is a week downwind and the return is a long beat or a swing south toward a band of equatorial calms."
---

Kalihara is the island that is easier to reach than to leave. It lies in the western ocean, four to seven hundred miles west of [[place-okharisrgn|Okháris]] and [[place-provenzrgn|Provènzia]], off the mouth of the western strait through which the [[place-vylarianse|Vylarian Sea]] opens on the ocean, and a ship that clears the strait with the wind behind her raises its volcanic peaks in about a week. Getting home again takes two or three times as long, and the ports of [[place-midhalnrgn|Mídhalión]] reckon that one return voyage in eight does not come home at all. Beyond Kalihara there is only open water until the coasts of [[place-kchchkcntnnt|K'ich'chik]], which lie farther west still.

The island is some four hundred miles across and nearly as far from north to south, with a scatter of islets off its coasts, and it is a single country. Where [[place-ankrscntnnt|Ankaris]] and [[place-xerathia|Xerathia]] are mosaics of cultures and empires, Kalihara carries one continuous civilization, one people, one language family and one philosophical tradition, all reaching back to an origin older than any other recorded history on [[place-worldthlrn|Thalorna]], and it has faced inward for ten thousand years. Geographers who class it a continent do so for that reason and no other: in size it is a large island, and the Kaliharans call it nothing but the island.

## Geography

The coast is the only part of Kalihara a foreigner sees, and it is jungle to the waterline. Coastal lowlands of mangrove, palm and gardened village give way within a few miles to steep ridgelines under unbroken canopy, and overland travel into the interior is impractical for anyone who does not know the paths. The ridges climb to a volcanic highland at the center of the island whose peaks are visible from far out at sea and wrapped in cloud for most of the year. Rivers come down from the highlands on every side; the eastern river valleys carry the broadest terraces and the thickest settlement, the western slopes fall more steeply to a harder coast, and the central highlands hold the oldest of the custodians' sanctuaries. Volcanic soil, terraced for thousands of years, feeds the island's three million people without any trade in staple goods.

The climate is hot and humid the year round, cooler in the highlands, and governed by the monsoon, whose four turnings order the island's year: the **Dry-Turn** about the fourth month, when the rains end; **Stillwater**, the height of the dry season; the **Wet-Turn** about the seventh month, when the rains return; and **Deepwater**, the heart of the wet season late in the year, when travel in the interior stops. The jungle holds an extraordinary range of plants and animals, some of them found nowhere else on Thalorna, and Ankarian naturalists who have seen the specimens suspect that some were cultivated deliberately in a very distant age. They cannot test the suspicion, because the island explains nothing to them.

The waters around the island are the other half of its defenses. Currents off the Kaliharan coast set across the wind, reverse without warning and run hard over reefs that show nothing on the surface, and experienced sailors call them uncanny. No foreign master attempts the approaches without a Kaliharan pilot, and the pilots are not for hire to anyone the island has not chosen to admit. Terrain, jungle and sea together have kept Kalihara closed to every force it did not invite, and that fact has shaped the island's history as decisively as any act of policy.

## The Wind Out and the Long Way Back

For most of the year the prevailing wind over the western ocean blows from the continents toward Kalihara. A Provènzian master who has made the run eleven times puts it plainly to a new mate: "Out, the ship sails herself. Clear the strait, put the wind on your quarter, and in six days or eight you are looking at the peaks and waiting for the pilot. Home is where you earn your pay." Outbound from Provènzia's ports, from Okháris, or from inside the Vylarian Sea by way of the western strait, the passage is a week of downwind sailing, and the only serious hazard is the Kaliharan coast at the end of it.

The return is the same wind in the face. A master going home has two choices. He can beat eastward against the wind, which is slow, wet and safe, and takes two or three weeks of tacking across a long swell. Or he can stand south in search of a slant of wind, and south of the island's eastern approaches lies the **Doldrum Sea**: a wide band of dead air, oppressive heat and drifting current where a ship can lie motionless for weeks, her water going foul and her crew sickening, waiting for a wind that may be a month in coming. The bones of becalmed ships drifting half-crewed on those currents are a recurring sight on the island's eastern approaches. The masters who take the southern swing and win save a week; the ones who lose are the one voyage in eight that the Mídhalión shipowner builds into his insurance rates as a fact of the trade. Nobody sails for Kalihara in Deepwater, when the monsoon brings the storms the island's works are said to turn aside from the interior and nothing turns aside at sea.

So the world is welcome to visit Kalihara, and has good reason to think hard before it does. The asymmetry has kept the island's insularity practical for as long as there has been ocean shipping: it costs a foreigner more to go home than to arrive, and the island has never needed to go anywhere.

## Regions

```sql
SELECT address.slug AS _ref,
       name.full    AS "Region",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'thalorna-note-place-klhrcntnnt')
ORDER BY name.full COLLATE NOCASE
```

## Civilization

The rest of Thalorna knows Kalihara through its [[affiliation-kalihara|ports]] and the accounts of the merchants permitted to trade there, and what those merchants report is a civilization that does not trace itself to its own ancestors. The Kaliharans hold that the [[lore-theithari|Ithári]] ("Those Who Came Before") came to the island in the deepest prehistory, long before the Elder Races reached Thalorna; found scattered human bands living there; took them in; and taught them agriculture, medicine, governance, a vocabulary for all of it, and the understanding of the world as one living whole that everything Kaliharan has been built on since. In 7,300 BF the Ithári departed, abruptly and for reasons the Kaliharans either do not know or do not share.

The Kaliharans kept what they were given, and eighty centuries later they keep it still. That includes the [[affiliation-kalihara#the-ancient-structures|ancient structures]] the Ithári left standing across the interior, some of which continue to do their work in ways the Kaliharans themselves no longer wholly understand, and it includes [[affiliation-tharivaan|Thári'vaan]] ("The Living Whole"), a tradition with no gods, no prayers and no offerings, in which a person observes the world and tends the part of it that is his. The custodians of both, the **Ithári'kaan**, are the island's institutional heart. The polity note [[affiliation-kalihara|Kalihara]] carries the councils, the structures and the ports in detail.

## The Elder Races on Kalihara

Kalihara is the one human civilization on Thalorna with a long relationship to an Elder Race, and the relationship ran the other way from everywhere else. When the [[lore-flksinale|Sinalë]] first arrived on Thalorna, some seventy-five centuries before the founding of the [[affiliation-vylarinmpr|Vylarian Empire]], the Kaliharans were already thousands of years into their civilization, and the Ithári were still in the world. It was the Ithári the Sinalë met, once and by chance, and were politely declined by; the Sinalë came away without learning who they had met, and Kalihara, which was not party to the meeting, has never told them. When the [[lore-flkkhazar|Khazári]] followed two thousand years later, the Ithári had gone and the island stood alone. Each Elder Race in its turn asked the island for settlement. Each was received with courtesy, told that Kalihara was complete, and refused, and each was welcome to trade at the ports and did so. The interior was closed to both, and the answer has not been revised since.

Everywhere else on Thalorna the Elder Races held to a policy of non-interference with human development, and uplifted humanity in spite of it, by observation, inference and the occasional unauthorized individual; that argument is made in [[lore-longnhrtnc|The Long Inheritance]]. On Kalihara the uplift was deliberate, it was done by someone else, and it is admitted. The Kaliharans did not need Sinalëan wisdom or Khazári craft. They had an older teaching, and they kept it.

## The Ports and the World

The island has never been disconnected from the world; it has decided exactly where the world may touch it. Four ports on the eastern coast and its islets serve as the interface. [[place-qasirah|Qasirah]] is the greatest, a city of eighteen thousand with a foreign quarter, merchant palaces and an Aurèldían temple for the traders; [[place-korinthel|Korinthel]], [[place-vashuran|Vashurán]] and [[place-telvari|Telvári]] are smaller and more tightly held. Foreign merchants keep to designated quarters under the eyes of the harbor-wardens, goods move in and out, and information flows both ways through a careful filter. Centuries of Ankarian, Haradian and Vedyaran contact have made the ports genuinely cosmopolitan, with mixed populations, foreign shrines and a culture quite distinct from the interior's.

Ankarian contact with Kalihara is commercially significant and culturally thin. A merchant who has traded there for twenty years has usually seen nothing of the island beyond the walls of the foreign quarter, and western scholarship on Kalihara is a patchwork of such accounts and the theories built on them. In the Kaliharan view most of those theories describe Ankarian assumptions, and the Kaliharans see no reason to correct them.

## See Also

- [[place-kaliharargn|Kalihara Region]]—the island's inhabited country, which is nearly all of it
- [[affiliation-kalihara|Kalihara]]—the Kaliharan civilization and its councils
- [[affiliation-tharivaan|Thári'vaan]]—the Living Whole and its custodians
- [[place-qasirah|Qasirah]]—the principal port
- [[place-provenzrgn|Provènzia Region]] and [[place-okharisrgn|Okháris Region]]—the nearest coasts, four to seven hundred miles east
- [[place-vylarianse|Vylarian Sea]]—the inner sea whose western strait is the door to Kalihara
- [[place-kchchkcntnnt|K'ich'chik]]—the next land west, across open ocean
- [[lore-flksinale|Sinalë]], [[lore-flkkhazar|Khazári]]—Elder Races whose settlement Kalihara refused
- [[place-worldthlrn|The World of Thalorna]]—world overview
