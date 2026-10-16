---
shortcode: ankrscntnnt
name: {full: Ankaris Continent, aliases: []}
type: place
subType: region
description: The largest continent of Thalorna—home to Vylaria, Taruzel, the Nordlands, the K'ich'chik-facing west, and the far-eastern empires of Tantsou and Jenchai.
tags: [continent, ankaris]
data:
  demonym: Ankarian
  lore: [humanflk, grukarfolk, flksinale, flkkhazar]
  parents: [worldthlrn]
  population: 300000000
  packFolder: ankaris

# terran_analog: Eurasia (and North Africa's Mediterranean shore, via Mídhalión)
---

Ankaris is the largest continent on [[place-worldthlrn|Thalorna]] and the setting of nearly all recorded human history. It stretches from the fjord-cut coasts and pine forests of the frozen north, through the temperate heartlands of Aureldia and the Hellád, across the great central deserts, and on to the jungles, mountains, and island empires of the far east. Ten major regions—each a world unto itself—are woven together by the [[place-vylarianse|Vylarian Sea]] in the south, the overland trade arteries of the center, and the ancient legacy of the [[affiliation-vylarinmpr|Vylarian Empire]] whose declining reach once touched all of them.

## Geography

Ankaris spans every major climate zone. The far northern white areas of the map are unaligned frozen wastelands, with very few inhabitants and no government that holds the country as a whole. The [[place-nrdlndsrgn|Nordlands]] occupy the fjord-cut northwestern coast below and beside those wilds. South of the Nordlands lie the western heartlands of [[place-aureldirgn|Aureldia]] and [[place-vrystwald|Vristwald]]; east of them, [[place-velanthrgn|Velanthia]] runs toward the [[place-khzryndsrtrgn|Khazryn Desert]]. Along the southern side of this belt are the cities of the [[place-heladrgn|Hellád]] and the [[place-midhalnrgn|Mídhalión]] coast. The Khazryn spreads across the broad eastern interior, with [[place-dunharargn|Dunhara]] to its south. The southwestern shore faces the [[place-vylarianse|Vylarian Sea]], around whose waters the cosmopolitan Mídhalión region has formed.

In the east the continent rises into a complex of mountain ranges, river basins, and coastal plains that host mainland [[place-tantsouregin|Tantsou]] and the southeastern [[place-vedyarargn|Vedyarian]] subcontinent. The unaligned [[place-graznmntns|Grazian Mountains]], the highest range in the world, separate Vedyara from Khazryn and the eastern realms. Across a strait from Tantsou lies the island empire of [[place-jenchairgn|Jenchai]]. The continent's western coast is broken by the great island of [[place-aelwyth|Aelwyth]], containing Aldorath and Dúnavarre, and the smaller port-island of [[affiliation-calypsa|Kalipsa]], both within the Aureldian cultural sphere.

No single mountain range, river, or sea divides Ankaris in half; its geography is instead a layered mosaic, and the cultural regions it contains reflect that layering rather than any neat compass-rose partition.

## Regions

```sql
SELECT address.slug AS _ref,
       name.full    AS "Region",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'thalorna-note-place-ankrscntnnt')
ORDER BY name.full COLLATE NOCASE
```

## Peoples

Ankaris is overwhelmingly a human continent. The great mass of its population—hundreds of millions across the ten regions—is human, varied into dozens of distinct cultural and linguistic groups that do not recognize themselves as a single people.

Two non-human peoples hold substantial territory. The [[skill-grukarlng|Grukar]] tribes dominate the far northeast, with scattered nests in the Vristwald forests and the highlands of neighboring regions. The goblin clans maintain their own territories in the deep Vristwald and in the marginal lands between the settled kingdoms, though they are rarely organized at a scale that registers on Ankarian political maps.

The Elder Races—the [[lore-flksinale|Sinale]] who arrived roughly eight thousand years ago and the [[lore-flkkhazar|Khazari]] who followed two thousand years later—are vanishingly rare on Ankaris as everywhere else. Fewer than one in ten thousand Ankarians has ever seen a Sinale or Khazari; most doubt they exist at all. Where they do persist, they do so in remote enclaves: Sinalean communities in the oldest forests of Élavendre and in the imperial court of Tantsou, Khazari cities in the high faces of the eastern ranges.

Religiously, Ankaris is divided rather than united. The [[affiliation-arldnpnthn|Aureldian Pantheon]] is the faith of the western heartlands and Mídhalión. The [[affiliation-asguardian|Asguardian Pantheon]] holds the north. The [[affiliation-ashanpnthn|Ashaian Pantheon]] dominates the central and southern deserts. The [[affiliation-varakpnthn|Varnuka Pantheon]] anchors Vedyara. The [[affiliation-tengwouronglei|Celestial Order]] of Tantsou and Jenchai stands entirely apart from the western religious world. Older still, the [[affiliation-firstgods|First Gods]] of the [[place-alndntrblnds|Áelendan]] tradition persist beneath the Aureldian surface in certain corners of the west.

## History

Ankaris's recorded history begins with the arrival of the Sinale roughly seventy-five centuries before the Founding of the [[affiliation-vylarinmpr|Vylarian Empire]] (the present-day calendar anchor), when humanity already existed as scattered hunter-gatherer bands. The [[lore-flkkhazar|Khazari]] followed two thousand years later, around 5300 BF.

It is the settled opinion of human scholarship that both Elder Races observed a strict policy of non-interference with human development. Of the [[lore-flksinale|Sinale]] this appears to be true. Of the Khazari it is not, and the reason human scholarship believes otherwise is that no human has ever read a Khazari archive.

**The Deep Folk could not feed themselves.** A hold grows nothing and cannot be supplied from outside—a people dependent on an outside larder can be starved by whoever holds the road, which the Khazari have never been willing to accept. They arrived into a world whose humans were hunter-gatherers, and hunter-gatherers cannot provision a hold. So within a few centuries of their arrival, in the upland country around their first holds, the Khazari **taught the peoples nearest them to farm**—water-works, drainage, terracing, seed-storage, the granary—which are precisely the crafts the Khazari are best at and precisely what turns thin mountain ground into a food supply.

Nothing about this was a gift, and nothing about it was intended as an uplift. They were building a larder. They would have done the same for any creature that could be taught to hold a plow, and the evidence suggests they took no further interest whatever in what those people subsequently became.

What those people subsequently became was everything. The knowledge did not stay in the hills: it ran downhill and outward over centuries, into the great river valleys where soil and water made it explode, and the earliest human civilizations—[[affiliation-empireakhlth|Empire of Au'Khelathu]] on its river by about 2110 BF, [[affiliation-tantsouempr|Tantsou]] claiming a line three millennia long—were raised on a foundation nobody remembers being handed. No human record reaches within two thousand years of the event. The Khazari records presumably state it plainly, in the tone in which they state everything, and no human has ever read one.

The surviving trace of the arrangement is the [[lore-vardain|Vardain]] of Aelwyth, who still farm for a hold and still cannot say why they were taught to.

Recorded human history in the west begins with the Pelwar migrations, the founding of the early city-states of what would become Mídhalión, and eventually—around 650 BF—the establishment of the [[affiliation-vylarinmpr|Vylarian Republic]] on the Vylarian Sea. The Republic became an Empire in the year that the Vylarian reckoning still calls Year 1, and for several centuries Vylaria projected power across Mídhalión and the western continent. The current year is 720 AF, and the Empire has been in decline for generations; Taruzel has won its independence, Provenzia and Tarvénia are long-independent successor states, and the Empire's remaining territories are beset by crises its institutions can no longer resolve.

The eastern empires—Tantsou and Vedyara—kept their own reckonings and their own histories, largely unaffected by Vylarian ascendancy and equally untouched by its decline. The northern kingdoms trace their own lines of kings back into the mists of the Pelwar migrations and have their own accounts of the Founding and of the centuries since.

## Trade and External Relations

Ankaris is the commercial heart of Thalorna. Its three great trade systems—the maritime routes of the Vylarian Sea, the overland caravans of the Khazryn and Dunhara, and the Celestial Road network of the eastern empires—reach every inhabited continent except Iseron.

Across the Vylarian Sea, Ankaris is connected to [[place-xerathia|Zerathia]]: the Mídhalión region is genuinely shared between the two, and the Zerathian empires are in continuous diplomatic and commercial contact with the northern shore. To the west, Ankaris's western ports have irregular contact with [[affiliation-kalihara|Kalihara]], an island some four hundred and fifty to seven hundred miles out and about a week's sail in fair weather, through its tightly regulated coastal trading settlements. Further west still, [[place-kchchkcntnnt|K'ich'chik]] is known to Ankarian scholars largely through secondhand account; direct contact is rare and commercially negligible. The southern continents of [[place-arnscntnnt|Aurionis]] and [[place-isrncntnnt|Iseron]] are more legend than destination for all but a handful of Ankarian expeditions.

## See Also

- [[place-worldthlrn|The World of Thalorna]]—World overview
- [[place-aureldirgn|Aureldia Region]]—Western heartland
- [[place-midhalnrgn|Mídhalión Region]]—Vylarian Sea basin (shared with Zerathia)
- [[place-heladrgn|Hellád Region]]—Intellectual and trade crossroads
- [[place-nrdlndsrgn|Nordlands Region]]—The frozen north
- [[place-grkrhlmrgn|Grukarholm Region]]—Far northeastern Grukar lands
- [[place-khzryndsrtrgn|Khazryn Desert Region]]—Central desert
- [[place-dunharargn|Dunhara Region]]—Southern desert
- [[place-vedyarargn|Vedyara Region]]—Southeastern subcontinent
- [[place-tantsouregin|Empire of Tantsou Region]]—Eastern empire
- [[place-jenchairgn|Jenchai Region]]—Eastern island empire
- [[affiliation-vylarinmpr|Vylarian Empire]]—The declining western empire
- [[place-vylarianse|Vylarian Sea]]—The southern inland sea
- [[affiliation-ordoarcanis|Thordimalon]]—Dominant western arcane institution
- [[lore-pnthnrgnlmp|Pantheon Regional Map]]—Where each pantheon holds sway
