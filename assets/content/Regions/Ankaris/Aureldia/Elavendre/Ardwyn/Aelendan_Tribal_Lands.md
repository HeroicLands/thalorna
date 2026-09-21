---
tags:
  - region
description: Mountainous interior of Élavendre, sovereign to the Áelendan tribal confederation — Pelwar forest-dwellers who keep the Old Way.
name:
  full: Áelendan Tribal Lands
  aliases:
    - Tribal Lands
    - The Interior
shortcode: alndntrblnds
type: place
subType: region
data:
  icon: null
  demonym: Áelendan
  lore:
    - humanflk
  parents:
    - ardwyn
  population: null
terran_analog: "Switzerland and the high-Alpine country of eastern France — the highland interior of Élavendre, including the Áelendan-sacred ranges that face Vylaria across the Cervaron Spine."
packFolder: elavendre
---

The **Áelendan Tribal Lands** are the mountainous interior of [[place-elavendre|Élavendre]] — a vast, lightly populated expanse of peaks, valleys, ancient forests, and sacred sites that the [[lore-aelendnppl|Áelendan]] have inhabited continuously since the earliest Pelwar settlement of the region. The Lands are not a polity in the lowland sense: there is no capital, no central administration, no marked border enforced by officials. What there is, instead, is an understood territory — recognized by the Crown, by the tribes themselves, and by anyone with sense — whose extent is defined by the geography of the interior and by the sacred sites of the Kindred Pact.

To cross into the Tribal Lands is to pass out of the jurisdiction of royal magistrates and into a landscape governed by tribal custom, the word of local councils of elders, and the watchful attention of the Wardens.

## Geography

The Lands occupy the broad mountainous interior that rises behind the coastal plains and lowland river valleys where the settled [[place-elavendre|Élavendri]] make their cities. The heart of the territory is the **[[place-drenavrspn|Drenavar Spine]]**, a sacred range whose peaks and high valleys hold the most ancient sites of the Kindred Pact. Around the mountains lie the ancient forests — oldest among them the **Silver Forests**, a fae-touched woodland of unusual depth and darkness that the Áelendan and the Sinalë share as neighbors.

The landscape is characterized by:

- **Forested valleys** — narrow, stream-threaded, and densely wooded, connecting the high country to the lower slopes
- **High pastures** — summer grazing for the small herds of sheep and goats that the tribal communities maintain
- **Mountain sanctuaries** — natural features (peaks, passes, springs, caves) recognized as sacred sites of the Kindred Pact, each with its own protocols
- **Grove shrines** — smaller sacred sites scattered through the forested belts, often tended by a single Tradition Keeper or Warden
- **Ancient trackways** — unmarked paths through the mountains and forests, known to the Áelendan and to the Wardens, and largely impassable to outsiders who have not been shown the way

### The Cervaron Frontier

The eastern edge of the Áelendan sacred country runs along the **[[place-vylariargn#the-cervaron-spine|Cervaron Spine]]** — the great mountain arc that separates Élavendre from the [[affiliation-vylarinmpr|Vylarian Empire]]. The Cervaron is, by Áelendan reckoning, an inseparable extension of the same sacred high country that includes the Drenavar Spine and the other interior ranges: the same First Gods dwell on its peaks, the same glacier-springs feed the world's first waters, the same Kindred Pact binds its protocols. The Vylarian chancery, by its own reckoning, considers the Cervaron Vylarian territory and has done so since the early Republic. The two reckonings have never been reconciled. Vylarian punitive expeditions across the Cervaron passes have been repulsed every time they have been attempted; Áelendan war-bands have crossed east into Vylarian frontier districts more than once in retaliation, and have always returned home. The result is a stable but unresolved standoff in which the Áelendan effectively control the range, the Vylarian Senate continues to claim it, and Vylarian merchants who need to cross with goods pay informal "passage-gifts" to the local clans and are granted safe conduct in return.

## The Tarvénan Diaspora {#the-tarvenan-diaspora}

Although the Tribal Lands proper sit within Élavendre, Áelendan communities exist well beyond Élavendri borders — most substantially across the **Toravar Range** and through the forested uplands of northern [[place-tarvenirgn|Tarvénia]]. These are not lost-tribes-of-the-Áelendan or schismatic offshoots; they are the same people, holding the same Kindred Pact, recognizing the same Wardens, observing the same religious calendar. They live where they live because the high mountain country and the deep forests of northern Tarvénia are the same kind of land the Áelendan have always preferred — defensible, sparsely populated, and rich in the kind of sacred geography the Kindred Pact requires.

The Toravar Range itself, which forms the natural northern border of Tarvénia and the southern border of Provènzia, is densely Áelendan in its higher reaches. So are the great forested uplands that flank it on both sides. Smaller enclaves are scattered further south into the Tarvénan highland interior, generally clustered around sacred springs, ancient groves, or the stone-circle sanctuaries that mark the older Pelwar settlements. Total Áelendan population outside Élavendre is perhaps a quarter of the total — substantial, geographically dispersed, and politically significant when the Kindred Pact calls.

Relations with the Tarvénan kingdoms are mostly cordial. The Áelendan occupy the kind of territory the Tarvénan crown and the lowland feudal nobility have no use for: too cold, too steep, too forested, and (in Tarvénan reckoning) too haunted to settle. The Áelendan, in turn, leave the lowland farmland and the cities entirely alone. The arrangement has held for many generations.

When friction does occur, it is almost always over the same handful of issues: a Tarvénan noble whose herds wander up into Áelendan-held high pasture; a Tarvénan logging concession that pushes its cuts too far up a sacred slope; a Tarvénan road-survey that crosses a grove the local clans consider their own; an itinerant Aurèldían priest who attempts to convert an Áelendan community and is forcibly escorted out of the territory. Such incidents are usually handled by the local Wardens with the local Tarvénan baron, often without ever reaching the crown's notice. When they escalate — perhaps once a generation, when a particularly brittle baron meets a particularly stubborn clan — the result is a brief, ugly mountain-war that the crown of Tarvena prefers to settle quickly and quietly through Élavendri diplomatic intermediaries. No Tarvénan king has ever attempted to extend formal authority over the Áelendan enclaves. None is expected to.

## Polities

```sql
SELECT address.slug AS _ref,
       name.full    AS "Polity",
       description  AS "Overview"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND list_contains(data.domains, 'alndntrblnds')
ORDER BY name.full COLLATE NOCASE
```

## Borders

The Lands have no surveyed border, but in practice their edge is the point at which the lowland cultivation, roads, and settled villages give way to unbroken forest and rising terrain. Crown magistrates do not attempt to impose their authority beyond that line. Where royal roads end, the Wardens' jurisdiction begins; where Élavendri villages give way to Áelendan hamlets and seasonal camps, the law of the tribes takes over.

A handful of chartered lowland settlements sit at the edge of the Lands, serving as points of contact and trade. Beyond them, no outside institution — neither the Crown's, nor the Ordo Arcanis's, nor any merchant house's — holds standing.

## Notable Places

- **[[place-drenavrspn|The Drenavar Spine]]** — The sacred mountain range at the heart of the Lands; the most densely Pact-bound territory and the largest concentration of Wardens
- **[[place-eshalshldg|Eshálosha Lodge]]** — The principal Áelendan settlement, a ceremonial and political gathering place in a sheltered valley of the Drenavar Spine
- **The Silver Forests** — An ancient fae-touched woodland under heavy Warden watch, shared in neighborly arrangement with the [[lore-flksinale|Sinalë]]
- **Mountain sanctuaries and grove shrines** — Scattered across the interior; each has its own standing in the Kindred Pact and its own customary protocols

## Access and Travel

Outsiders do enter the Tribal Lands — traders at edge settlements, pilgrims seeking permission to visit a sanctuary, scholars who have earned invitation, occasional parties under the protection of a tribal host. What they do not do is enter unaccompanied. Crossing alone into the interior is understood as an intrusion; crossing into sacred territory is understood as a violation. The Wardens enforce the latter without appeal.

Those who have reason to travel the Lands are expected to take a tribal guide, to respect the customs of the communities they pass, and to stay clear of sacred ground unless specifically cleared to enter it.

## See Also

- [[lore-aelendnppl|Áelendan]] — The people who inhabit these lands
- [[affiliation-alndnwrdns|Áelendan Wardens]] — The order charged with protecting sacred territory
- [[place-elavendre|Élavendre]] — The kingdom within which the Lands lie
- [[place-drenavrspn|Drenavar Spine]] — The sacred range at the heart of the Lands
- [[place-eshalshldg|Eshálosha Lodge]] — Principal Áelendan settlement
- [[skill-aelendlng|Áelendi Language]] — The language spoken throughout the Lands
- [[affiliation-theoldway|The Old Way]] — The religious tradition of the Áelendan (pantheon: [[affiliation-firstgods|The First Gods]])
- [[lore-flksinale|Sinalë]] — Neighboring elder race of the Silver Forests
