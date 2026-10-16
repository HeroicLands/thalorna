---
shortcode: kchchkcntnnt
name: {full: K'ich'chik Continent, aliases: [Kichchik]}
type: place
subType: region
description: The western continent—a pyramid-building theocratic civilization unified under the Itsani faith, with unconquered tribal nations in the north and forsaken wastes in the far south.
tags: [continent, kichchik]
data:
  demonym: K'ich'chik
  lore: [humanflk]
  parents: [worldthlrn]
  population: 34000000
  packFolder: kichchik

# terran_analog: "North America and South America joined as one great continent—pre-Columbian Mesoamerica/Andean civilization in the central and southern reaches, unconquered tribal nations in the North-American-analog north, and the forsaken Patagonian-analog wastes in the far south. The connecting isthmus (Central-America-analog) is roughly five times broader than the real-world Panama, giving K'ich'chik the geographic continuity that the Americas in the real world only narrowly preserve."
---

## Overview

K'ich'chik is a vast continent stretching from frozen northern forests to the blasted wastelands of the far south, dominated by a civilization of pyramid-building city-states unified under the [[affiliation-itzanpnthn|Itsani faith]] and the celestial calendar. The K'ich'chik peoples are builders, astronomers, and warriors whose culture revolves around the cosmic cycle of creation and destruction known as the Celestial Recurrence. Their great cities rise from tropical jungles and highland plateaus, connected by _ish'lan ch'upul_ (white roads) and bound together by a shared priesthood, a common tongue, and the rhythms of the sacred calendar.

Despite the cultural unity of the K'ich'chik heartland, the continent is far from monolithic. The northern reaches remain unconquered frontier, held by five fierce tribal nations who worship earth spirits and ancestral totems rather than the [[affiliation-itzanpnthn|Ten of the Celestial Round]]. The southern extremes descend into a forsaken wasteland of blasted earth and frozen tundra, spoken of in legend as the scar of an ancient cataclysm. Between these extremes, the city-states of the central and upper southern regions compete for prestige through monumental architecture, astronomical achievement, and ritual observance.

## Geography

K'ich'chik spans an enormous range of climates and terrain. The continent is broadly divided into three zones that reflect both geography and the reach of K'ich'chik civilization.

The **Northern Territories** encompass everything from the boreal forests and great lakes of the northeast to the towering mountain ranges and coastal forests of the northwest, with vast grasslands and river valleys between them. The southern edge of this zone is defined by [[place-chakultzklrgn|Ch'akul Tsa'kul]], a terrible expanse of desert that serves as a natural buffer between the unconquered north and the civilized heartland. Five rival nations of tribal peoples hold these lands against all comers, cooperating to repel any K'ich'chik expansion while warring fiercely among themselves.

The **Central Regions** form the heartland of K'ich'chik civilization, encompassing highland plateaus, dense tropical jungles, limestone lowlands, and fertile coastal plains. This is where the great pyramid-cities rise, where the white roads connect centers of trade and pilgrimage, and where the [[affiliation-itzanpnthn|Itsani priesthood]] holds its greatest influence. The four regions of the center—[[affiliation-ixilankul|Ish'ilankul]], [[affiliation-kankul|K'ankul]], [[affiliation-neokbaate|Ne'ok Ba'ate]], and [[affiliation-xelem|Shelem]]—represent the full flowering of K'ich'chik culture.

The **Southern Territories** range from the upper south, where K'ich'chik civilization extends along mountain ranges and river basins, to the lower south, where the land descends into desolation. The upper regions of [[affiliation-ixbaltzaku|Ish'bal Tsa'ku]] and [[affiliation-kuxiixbal|K'ushi Ish'bal]] are fully integrated into K'ich'chik civilization, with cities and agricultural estates. But beyond [[affiliation-qapteltzakl|Q'aptel Tsa'kul]], the land gives way to the frozen and blasted wastes of [[place-xelemixbalrgn|Shelem Ish'bal]], a place of terrible fauna, poisonous flora, and stories of divine wrath. Warriors and priests journey there as a proving ground, for to survive Shelem Ish'bal is to demonstrate worth before the gods.

## Regions

```sql
SELECT address.slug AS _ref,
       name.full    AS "Region",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'thalorna-note-place-kchchkcntnnt')
ORDER BY name.full COLLATE NOCASE
```

## The Five Nations of the North

The northern territories are dominated by five tribal nations about which K'ich'chik scholars know relatively little. These peoples have their own languages, their own names for themselves and their lands, and their own traditions—none of which they share willingly with outsiders. What follows are K'ich'chik designations: the place-names are in the K'ich'chik tongue, and the nation-names are exonyms assigned by K'ich'chik merchants and border scouts based on the totemic animals observed in these peoples' war-standards and camp-markings. What these nations call themselves remains largely unknown. They are generally hostile to outsiders, tolerating K'ich'chik traders only at arm's length and only when trade serves their immediate interests. Despite constant rivalry among themselves, they unite with devastating effectiveness against any outside incursion, and the vast distances of the north make conventional military campaigns nearly impossible.

- [[affiliation-ixbalkiahk|Ish'bal Ki'ahk]]—The Shak'nal Ts'omalil ("Eagle People" in K'ich'chik), mountain and coastal dwellers of the far west
- [[affiliation-ixtemtzul|Ishtem Tsul]]—The No'kin Ts'omalil ("Bear People"), hardy folk of the northern prairies
- [[affiliation-penqalchakal|P'enqal Ch'akal]]—The Ts'okum Ts'omalil ("Coyote People"), nomadic hunters of the great central grasslands
- [[affiliation-xikulchakl|Shik'ul Ch'akal]]—The Ha'ik Ts'omalil ("Otter People"), canoe-folk of the eastern lakes and forests
- [[affiliation-tzumanotun|Ts'uma No'tun]]—The Ch'akun Ts'omalil ("Serpent People"), chieftain-led peoples of the ancient eastern mountains and southern swamps

The sixth northern region, [[place-hanalxilanrgn|Ha'nal Shi'lan]], is contested borderlands where the Coyote, Otter, and Serpent peoples clash over the rich river valleys. [[place-chakultzklrgn|Ch'akul Tsa'kul]], the great southern desert, is claimed by no nation and serves as the barrier between the tribal north and K'ich'chik civilization.

## Culture and Society

K'ich'chik is not an empire in the conventional sense—no single sovereign commands the allegiance of all the city-states, and no dynasty has ever united the continent under temporal rule. It is, instead, a **theocratic civilization**: a constellation of independent and competing city-states bound together by the transnational authority of the [[affiliation-itzanpnthn|Itsani]] priesthood. The priesthood forms a single, unbroken hierarchy stretching from the Ch'alish Tq'an (supreme high priest) in [[affiliation-ixilankul|Ish'ilankul]] to the lowliest Tq'an'ik (priestly initiate) in the most remote outpost. This hierarchy transcends the borders of any individual city-state, and it is the priesthood—not any Ts'enmah—that provides the connective tissue holding K'ich'chik civilization together. The result is a civilization unified not by conquest or dynasty but by faith—and by the priesthood's monopoly on the instruments that make civilization possible. The Itsani control the calendar by which all agriculture and commerce are timed, they administer the communication network that binds the realm, they levy religious tribute on all trade, and they alone possess the astronomical knowledge on which political legitimacy depends. No other religious hierarchy on Thalorna wields such sweeping temporal power.

Each city-state is ruled by a Ts'enmah (Sun Lord) who serves as political sovereign and ritual intermediary between the people and the gods. No Ts'enmah rules without priestly sanction—the Itsani must consecrate a Sun Lord's reign through elaborate investiture ceremonies, and the priesthood retains the authority to withdraw that sanction. Conversely, the most powerful Ts'enmah exert influence over priestly appointments within their domains, creating a dynamic tension between temporal and spiritual power that drives much of K'ich'chik political life.

Society is stratified into nobles, warriors, artisans and merchants, free farmers, bound laborers, and slaves. Warfare between city-states is ritualized but real, driven by the need for captives for sacrificial rites and by competition for trade routes and agricultural land. The blood sacrifice that sustains the cosmic cycle is central to K'ich'chik religious life, though its scale and frequency vary between city-states and across the ages of the Celestial Recurrence.

Names follow rank as closely as dress does, and the first thing a newcomer must learn is which name to use. A noble or a priest carries a long compound name of three or more elements, and at home goes by its first element alone: _Ch'akul Ts'ultel Ish'bal Tsul_ is _Ch'akul_ to the household, to kin and to equals. That house name travels downward and sideways and never upward. If you stand below the person, you say the whole name, with the title after it, every time, and the first element alone from your mouth is an insult to the person and to the rank. A commoner's two-element name is spoken whole by everyone. Only the full name is knotted into the census cords or cut in glyphs, so a Sun Lord's house name is common knowledge in the palace and absent from every record of the reign.

The K'ich'chik are accomplished astronomers, mathematicians, and architects. Their vigesimal number system, their precise celestial calendar, and their monumental pyramid-temples are among the great achievements of Thalorna. They are also skilled agriculturalists, cultivating terraced fields and raised garden beds to support dense urban populations in tropical environments.

## The Ch'um Ish'lan (The Speaking Road)

The single greatest instrument of priestly power—and arguably the foundation on which K'ich'chik unity rests—is the **Ch'um Ish'lan** ("Speaking Road"), a vast relay network of trained runners called **Ch'umbal** ("Voice Bearers") who carry messages, decrees, and intelligence across the breadth of K'ich'chik civilization.

The Ch'um Ish'lan is controlled exclusively by the [[affiliation-itzanpnthn|Itsani]] priesthood. The Ch'umbal are not servants of any Ts'enmah but ordained religious functionaries sworn to the service of [[affiliation-itzanpnthn|Ts'en'ul Tq'an]], god of order and the sun's daily return. No secular lord may command, delay, inspect, or interfere with a runner on the Speaking Road—to do so is among the gravest offenses in K'ich'chik law, punishable by sacrifice. The priesthood alone decides what messages are carried, in what priority, and to whom intelligence is disclosed. No Ts'enmah receives word from distant provinces except through the priesthood's hands. This monopoly on long-distance communication is the single most powerful check on any Sun Lord's ambition, for no rebellion can be coordinated, no alliance formed, and no war planned without the knowledge of the priests who read the knotted cords.

The Ch'umbal operate from way-stations spaced at intervals of roughly half a day's hard run along every major white road, each station staffed at all hours by at least two runners ready to receive a message and sprint it to the next post. They carry not only spoken messages—committed to memory through rigorous mnemonic training—but also knotted cord records called **k'otsel** that encode numerical data, tribute tallies, and calendar reckonings in a system of colored threads and knot positions legible only to trained readers. The central dispatch at Kul'taq'an in [[affiliation-ixilankul|Ish'ilankul]] is the nerve center of the entire system, where k'otsel from across the realm are decoded, copied, and redistributed by priestly scribes under the direct supervision of the Ch'alish Tq'an's inner circle.

### Transit Times Across the White Roads

The Ch'um Ish'lan achieves remarkable speed across the vast distances of K'ich'chik. Typical transit times along the major white roads, measured from the dispatch of a message to its arrival and decoding:

- **Within Ish'ilankul** (plateau internal): same day—the density of way-stations is unmatched, and a message can cross the entire plateau region between dawn and dusk
- **Ish'ilankul to [[affiliation-kankul|K'ankul]]** (highland to eastern lowlands): 2 days via the great eastern white road
- **Ish'ilankul to [[affiliation-neokbaate|Ne'ok Ba'ate]]** (highland to isthmus): 2–3 days via the southern highland road
- **Ish'ilankul to [[affiliation-xelem|Shelem]]** (highland to eastern frontier): 3–4 days, routing through K'ankul's coastal network and then by river relay
- **Ish'ilankul to [[affiliation-ixbaltzaku|Ish'bal Tsa'ku]]** (highland to upper south): 3–4 days via the great southern white road through Ne'ok Ba'ate
- **Ish'ilankul to [[affiliation-kuxiixbal|K'ushi Ish'bal]]** (highland to southern frontier): 5–6 days—way-stations thin here, runners are harder to recruit, and the altitude slows passage
- **Full network, Ish'ilankul to [[affiliation-qapteltzakl|Q'aptel Tsa'kul]]** (the last outpost): 7–8 days—the Speaking Road's practical limit; beyond Q'aptel Tsa'kul, the white roads end and communication relies on the courage of individual messengers
- **K'ankul coastal network** (internal): 1–2 days between major city-states via the coastal white road
- **End to end, K'ankul to K'ushi Ish'bal** (eastern lowlands to southern frontier): 6–8 days, routing through Ish'ilankul

Beyond K'ushi Ish'bal, the Speaking Road falls silent. The last k'otsel cord to arrive from the civilized world is decoded at [[place-qptlulneok|Q'aptel'ul Ne'ok]], and what lies further south depends on the bravery of individual runners who carry no priestly mandate. The Ch'um Ish'lan does not extend into the northern territories either—the Five Nations have no white roads, and the great desert of [[place-chakultzklrgn|Ch'akul Tsa'kul]] marks the network's northern boundary.

## Faith

The K'ich'chik follow the [[affiliation-itzanpnthn|Itsani faith]], a unified religion centered on the Ten of the Celestial Round—ten gods whose domains encompass the full range of mortal experience. Unlike many other cultures on Thalorna where competing priesthoods serve individual deities, the Itsani maintain a single priestly hierarchy that serves the entire pantheon, calling upon individual gods as circumstances require. The theology of Celestial Recurrence—the belief that the world has been created and destroyed through five successive ages—permeates every aspect of K'ich'chik life, from the calendar to architecture to the practice of blood sacrifice.

The holiest site in all of K'ich'chik—and the supreme destination of pilgrimage—is [[place-tzomalchalix|Ts'omal Ch'alish]] (the "Sacred Foundation"), a precinct at the heart of Kul'taq'an in [[affiliation-ixilankul|Ish'ilankul]] where [[affiliation-itzanpnthn|P'iqal Kul'qat]] (god of creation) is believed to have first breathed the world into existence at the dawn of the First Age. The precinct is centered on an ancient volcanic vent from which warm, mineral-laden vapors still rise—regarded as the living breath of the creator god—and above it stands the **Ts'ultel Ch'alish** ("Sacred Mountain"), the tallest and most ancient pyramid in K'ich'chik, its nine ascending tiers representing the nine layers of the heavens. Every K'ich'chik person is expected to make pilgrimage to Ts'omal Ch'alish at least once in their lifetime, and the great festivals of the Celestial Recurrence—particularly the **K'ayik Kul'al** ("the Living Flame") marking the turning of the 52-year cycle—draw hundreds of thousands of pilgrims from every region, transforming Kul'taq'an into a city beyond cities. To have breathed the vapors of creation and stood in the shadow of the Ts'ultel Ch'alish is to have touched the divine; to die without making the journey is, in K'ich'chik theology, to face the gods with an incomplete soul. The sacred pools of [[affiliation-kankul|K'ankul]], the sacred lake of [[place-ixkulchalix|Ishkul Ch'alish]], and the temple-fortresses of the south are all sites of deep spiritual significance, but none approach Ts'omal Ch'alish in sanctity.

## Trade

K'ich'chik is rich in resources. The central regions produce cacao, jade, obsidian, cotton, tropical hardwoods, and exotic feathers. The upper southern regions contribute metals, medicinal plants, and highland produce. Trade flows along the white roads and by coastal canoe, connecting city-states in a complex web of commerce. Jade and cacao serve as currency alongside the gold crown and pence used elsewhere on Thalorna. The northern frontier contributes furs, amber, and freshwater pearls through irregular border trade with the tribal nations, though this exchange is sporadic and often tense.

## See Also

- [[affiliation-itzanpnthn|Itsani Pantheon]]—The unified faith of K'ich'chik
- [[skill-kicheklng|Ki'ichek Language]]—the tongue, its lexicon and its naming conventions
- [[affiliation-ixilankul|Ish'ilankul]]—The greatest city-state of the central heartland, seat of the Ch'alish Tq'an and home to Ts'omal Ch'alish
- [[place-xelemixbalrgn|Shelem Ish'bal]]—The forsaken southern wastes
