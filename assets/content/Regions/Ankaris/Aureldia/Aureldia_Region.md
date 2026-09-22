---
tags:
  - region
  - aureldia
description: The western heartland of the Aurèldían faith — a mosaic of kingdoms, city-states, and island realms bound by the Twelve rather than by crown.
name:
  full: Aurèldía Region
  aliases: []
shortcode: aureldirgn
type: place
subType: region
data:
  icon: null
  demonym: Aurèldían
  lore:
    - humanflk
    - grukarflk
    - flksinale
    - flkkhazar
  parents:
    - ankrscntnnt
  population: 11000000
terran_analog: Medieval Western Europe (Western Christendom)
packFolder: aureldia
---

Aurèldía is a region bound by faith. It is the western heartland of the [[affiliation-arldnpnthn|Aurèldían Pantheon]] — the Twelve — worshipped across a mosaic of sovereign kingdoms, merchant city-states, and island realms that together form the western third of [[place-ankrscntnnt|Ankaris Continent]]. From the mist-shrouded shores of [[place-aelwyth|Aelwyth]] in the far northwest to the sunlit vineyards of [[place-provenzrgn|Provènzia Region]] on the Vylarian coast, Aurèldía binds together peoples as different as the Aelwythan islanders of the Misty Isle, the mystically attuned Pelwar of [[place-elavendre|Élavendre]], the peninsular kingdoms of [[place-tarvenirgn|Tarvénia Region]], the merchant oligarchs of [[affiliation-calypsa|Calypsa]], and the cultured Provenzian coast. What they share is not language, not lineage, and not a common crown — but the Twelve, and centuries of pilgrimage, intermarriage, trade, rivalry, and quiet mutual recognition.

## Geography

Aurèldía occupies the western third of Ankaris, stretching from the pine forests that mark its border with the [[place-nrdlndsrgn|Nordlands]] in the north, down to the [[place-vylarianse|Vylarian Sea]] where [[place-provenzrgn|Provènzia Region]] and [[place-tarvenirgn|Tarvénia Region]] touch the waters of [[place-midhalnrgn|Mídhalión]]. The western coast faces the open ocean and is broken by the great island of [[place-aelwyth|Aelwyth]] — the Misty Isle — and the smaller port-island of [[affiliation-calypsa|Calypsa]] lying just off the Élavendri shore.

The terrain is remarkably varied. Élavendre's rolling plains and silver-birch forests give way inland to the [[place-drenavrspn|The Drenavar Spine]], a natural divide between the Aurèldían core and the interior regions. The [[place-silvrfrsts|The Silver Forests]] are famous for a near-supernatural luminance at dawn and dusk — a landscape so distinctive that Aurèldían painting, tapestry, and song return to it again and again. Further south, Tarvénia's mountain kingdoms tumble down to the Vylarian coast, while Provènzia's coastal plains, hills, and river valleys produce some of the finest wine, glass, and illuminated work in all of Thalorna.

Climate varies correspondingly: cool and rain-washed in the north and west, temperate through the central heartlands, and warm and dry along the southern coast. The region's many rivers — flowing both westward to the open ocean and southward to the [[place-vylarianse|Vylarian Sea]] — have long served as the arteries of Aurèldían trade.

## Polities

```sql
SELECT address.slug AS _ref,
       name.full    AS "Polity",
       description  AS "Overview"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND list_contains(data.domains, 'aureldirgn')
ORDER BY name.full COLLATE NOCASE
```

## Peoples and Culture

Aurèldía's people are overwhelmingly human, but they are far from homogeneous. Each heartland preserves a distinct cultural character.

The **Aelwythan** of the Misty Isle are marked in their culture by deep legend, druidic survival, and the thin veil between the mortal world and the numinous. The **Élavendri** and **Áelendan** of Élavendre share a common Pelwar ancestry — the Élavendri cultivated and courtly, the Áelendan tribal and forest-dwelling — and both are unusually magically attuned. The **Tarvénan** peoples of the southern peninsula live in a patchwork of feudal kingdoms — [[affiliation-kingdmtrvn|Tarvena]], [[affiliation-kingdmlnrk|Leonrik]], [[affiliation-kngdmglvrn|Galvaren]], and [[affiliation-kngdmstrth|Asturath]] — with [[affiliation-frctyvlthr|Free City of Valthári]] and [[affiliation-frtrtryskrth|Free Territory of Eskárath]] as independent merchant enclaves between them. The **Provenzians** of the southern coast are artists, poets, vintners, and philosophers, their city-culture more southern-coastal than ocean-facing. And the **Calypsi** of Calypsa are merchant-oligarchs whose seafaring houses carry Aurèldían goods across most of Thalorna's known waters.

Minority peoples include [[lore-grukarfolk|Grukar]] living in highland enclaves and seasonal trading posts, and — vanishingly rare, but not entirely absent — the elder races: [[lore-flksinale|Sinalë]] who sometimes walk through Élavendre's oldest forests, and [[lore-flkkhazar|Khazári]] whose scattered halls endure in the deepest reaches of the mountains.

Despite the diversity, Aurèldían high culture shares certain hallmarks: chivalric and courtly ideals; a tradition of bardic and scholastic learning epitomized by Élavendre's [[affiliation-bardicolgs|The Bardic Colleges]]; reverence for the land as a living participant in human affairs; and a deep preference for sovereignty at the polity level. No emperor has ever ruled Aurèldía. No Aurèldían expects one to.

## The Aurèldían Faith

Aurèldía takes its name from the [[affiliation-arldnpnthn|Aurèldían Pantheon]]. Every Aurèldían polity builds temples to the Twelve — Aethería of dreams, Thánatos of death, Táranon of storms, Jánus of order, Ménérva of knowledge, Vénusia of prosperity, Lúsinía of creation, Karnavos of chaos, Múrkír of voyages, Mórváná of decay, Flórania of fertility, and Vúlcan of fire in one of his two contested aspects.

The faith extends well beyond Aurèldían borders — it is worshipped in [[affiliation-vylarinmpr|Vylaria]], [[affiliation-cnfdrtnhrdnstts|Harad]], [[place-helionis|Heliónis]], [[affiliation-byzarianlg|Byzaría]], and elsewhere across the [[place-midhalnrgn|Mídhalión]] basin — but Aurèldía is the cradle and the heartland. The great pilgrim-routes, the oldest shrines, the most influential scholars of the Twelve, and the highest concentration of clergy all lie in Aurèldían lands. A priest educated in Élavendre or a scholar trained in Provènzia carries authority anywhere the Twelve are honored.

The Vúlcani Schism is the faith's great fracture. Five centuries ago the clergy of Vúlcan divided over whether the Forge-Lord's true nature was creative or destructive. [[affiliation-sacredforge|The Sacred Forge]] — Vúlcan as craftsman, protector, and illuminator — became the mainstream Aurèldían faith. [[affiliation-blackflame|The Black Flame]] — Vúlcan as purifier-through-destruction, fire as weapon and instrument of domination — was suppressed across most kingdoms but survives in hidden orders and secretive shrines. The enmity between the two has shaped Aurèldían politics for generations, and accusations of Black Flame sympathies remain a potent political weapon.

[[place-aelwyth|Aelwyth]] is the great partial exception to the Aurèldían religious pattern. Centuries of Nordmen settlement have woven the [[affiliation-asguardian|Asguardian]] gods into the island's religious life, and many Aelwythans revere both pantheons — an uneasy syncretism that the mainland Aurèldían clergy view with curiosity, tolerance, or alarm depending on the decade.

## Politics and Power

Aurèldía has no emperor, no paramount king, no unified church-state. What it has is an intricate web of sovereign polities bound by shared faith, dynastic intermarriage, common legal traditions descended loosely from old Vylarian law, and the constant low-level friction of competing ambitions. A Tarvénan knight, a Provenzian merchant, and an Aelwythan bard would recognize each other instantly as fellow Aurèldíans — and might still go to war the following season.

The major powers of the region are:

- [[place-aelwyth|Aelwyth]] — The Misty Isle, a patchwork of kingdoms ([[affiliation-kngdmldrth|Aldorath]], [[affiliation-kingdmdnvr|Dunavarre]]) and a republican enclave ([[affiliation-repblctrvn|Tarvenne]]), knit together by shared culture more than by government.
- [[place-elavendre|Élavendre]] — The Pelwar coastal kingdom, culturally preeminent but politically divided between the [[affiliation-kngdmlvndr|Kingdom of Élavendre]] and the neighboring [[place-alndntrblnds|Áelendan Tribal Lands]].
- [[affiliation-calypsa|Calypsa]] — The merchant city-state, whose oligarchic trading houses make it influential far out of proportion to its size.
- [[place-tarvenirgn|Tarvénia Region]] — The peninsular patchwork of four kingdoms and two free territories.
- [[place-provenzrgn|Provènzia Region]] — The [[affiliation-kngdmprvnz|Kingdom of Provènzia]] and its constellation of cultured cities ([[place-belporte|Belpòrte]], [[place-monverdre|Monvèrdre]], [[place-valcerise|Valcèrise]], [[place-aureliane|Aurèliane]], [[place-chastelclr|Chastèlclair]], [[place-fiordaure|Fiòrdaure]], [[place-lunacorte|Lunacòrte]]).

The [[affiliation-ordoarcanis|Ordo Arcanis]] maintains chapters across most Aurèldían polities, asserting its claim to oversee all arcane practice — a claim honored in breach as often as in observance. Élavendre's independent magical traditions (the [[lore-faecourts|The Fae Courts]], the Bardic Colleges, the [[place-silvrfrsts|The Silver Forests]] mysteries) chafe constantly against Ordo authority, and the Aelwythan druidic survivals have never truly accepted Ordo oversight at all. The result is a magical culture that is broadly licensed under Ordo rules on paper and riddled with regional exceptions in practice.

## Trade

Aurèldía sits at the western terminus of two great trade systems. The overland routes from Mídhalión and the eastern continents converge in Provènzia and Tarvénia, then feed north through Élavendre and west to the port cities of Calypsa and Aelwyth. The maritime routes of the western ocean — still only partially charted — radiate outward from those same ports.

The region exports wine, tapestries, illuminated manuscripts, Élavendri silverwork, Tarvénan steel and horses, Aelwythan wool and curiosities, and the famed Provenzan glass. It imports spices, silks, and exotic goods from the east through Vylarian and Mídhalión trade, and raw metals, amber, and furs from the Nordlands. Calypsa's merchant houses and Valthari's free city both function as neutral meeting grounds where Aurèldían traders and their Mídhalión counterparts negotiate under guarantees of safe conduct — guarantees whose inviolability is one of the few things every Aurèldían polity agrees upon.

## Relations with Neighboring Regions

To the **north**, the [[place-nrdlndsrgn|Nordlands]] press against Aurèldía across a long, forested frontier. Contact is simultaneously commercial (Nordmen amber and furs for Aurèldían wine and steel), religious (uneasy coexistence of the Twelve and the Asguardian gods), and martial (periodic Nordmen raids along the coast, especially into northern Aelwyth and Élavendre). The Aelwythan religious syncretism is the clearest expression of the long relationship.

To the **southeast**, [[place-midhalnrgn|Mídhalión]] is at once Aurèldía's great trading partner and its great cultural rival. The two regions share the Aurèldían faith but diverge sharply on everything else — governance, aesthetics, law, and the nature of empire. [[place-provenzrgn|Provènzia Region]] and [[place-tarvenirgn|Tarvénia Region]] straddle the boundary between the two regions culturally and, in Provènzia's case, formally: Provènzia belongs to both Aurèldía and Mídhalión, the living seam between them.

To the **east**, beyond the [[place-drenavrspn|The Drenavar Spine]], lie the interior regions of Ankaris. Contact is thinner and filtered through mountain passes, and the interior peoples view Aurèldía as distant and slightly unreal — a land of cathedrals and bards on the far side of the mountains.

## Reckoning

Aurèldía uses the **Common Calendar** — the AF/BF system established by the [[affiliation-vylarinmpr|Vylarian Empire]] after its founding, now universally adopted across the region. See [[affiliation-vylarinmpr#the-common-calendar|the Vylarian Empire's Common Calendar]] for the full reckoning.

## See Also

- [[affiliation-arldnpnthn|Aurèldían Pantheon]] — The Twelve; the region's defining faith
- [[place-aelwyth|Aelwyth]] — The Misty Isle
- [[place-elavendre|Élavendre]] — Pelwar coastal kingdom and cultural heartland
- [[affiliation-calypsa|Calypsa]] — Merchant city-state
- [[place-tarvenirgn|Tarvénia Region]] — The peninsular kingdoms
- [[place-provenzrgn|Provènzia Region]] — The cultured southern coast (also part of [[place-midhalnrgn|Mídhalión]])
- [[affiliation-sacredforge|The Sacred Forge]], [[affiliation-blackflame|The Black Flame]] — The rival Vúlcani faiths
- [[affiliation-ordoarcanis|Ordo Arcanis]] — Cross-border arcane institution
- [[place-nrdlndsrgn|Nordlands Region]] — Northern neighbor
- [[place-midhalnrgn|Mídhalión]] — Southeastern neighbor and trading partner
- [[place-ankrscntnnt|Ankaris Continent]] — Parent continent
