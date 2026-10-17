---
shortcode: pshtrwldrns
name: {full: Peshtar Wilderness, aliases: [Peshtar Highlands]}
type: place
subType: region
description: Ungoverned highland forests of the Peshtar tribes—animist, druidic, and fiercely independent within the Misty Isle of Aelwyth.
tags: [region]
data:
  demonym: Peshtar
  lore: [humanflk]
  parents: [aelwyth]
  population: 63000
  packFolder: aelwyth

# terran_analog: "Ireland—the great western arm of the inverted-V Aelwythan island, a country of bog, peat moor, ancient mixed forest, glens, and the highland-and-lake interior."
---

The Peshtar Wilderness is the ungoverned highland quarter of [[place-aelwyth|Aelwyth]]—rugged mountains, old-growth forests, boggy upland moors, and mist-choked valleys that have resisted every attempt at conquest, incorporation, or civilization for as long as Aelwyth has kept written records. Nominally part of the Misty Isle, it lies entirely beyond the writ of any crowned king, and the Peshtar tribes who inhabit it regard all outside authority as trespass. The region is a running scandal to the lowland kingdoms, an opportunity for mercenary recruiters, and a spiritual mystery to the older Aureldian clergy who suspect that some of what the Peshtar worship may be older than any pantheon on record.

## Geography

The Peshtar Wilderness occupies the northwestern quarter of Aelwyth, the largest island of the [[place-aureldirgn|Aureldian]] sphere. Its physical character is defined by highland terrain—granite ridges, glacial valleys, cold fast rivers, and peat-soaked upland moor—with dense forests of oak, pine, and ancient hazel covering everything below the treeline. Fog is a near-constant presence: the lowlanders call the region "the cloud-country," and travelers report that one can climb for a full day without seeing the sun through the mist.

The coastline is cliff-bound, broken by a handful of rocky inlets that the tribes use for fishing and occasional coastal raids but that support no real harbors. The one or two natural anchorages that might have made good ports have never been developed—the Peshtar have no interest in concentrated settlement of any kind, and any outsider who has tried to build a port has had his workers harassed, his materials burned, and his stockade overrun within a season.

The interior is crossed by a network of ancient trails and old stone trackways whose origins are older than the Peshtar themselves—the remnants of a previous inhabiting people whose language and identity are entirely lost but whose dolmens, stone circles, and trackstones still mark the land. The Peshtar regard these monuments as sacred but deny any ancestral connection to the people who built them.

## Polities

```sql {allow-empty=true}
SELECT p.address.slug AS _ref,
       p.name.full    AS "Polity",
       p.description  AS "Overview"
FROM notes p
WHERE p.type = 'affiliation'
  AND p.subType = 'polity'
  AND EXISTS (
    SELECT 1
    FROM notes l
    WHERE l.type = 'place'
      AND l.data.government IN (p.address.canonical, p.documentation)
      AND (l.shortcode = 'pshtrwldrns' OR list_contains(l.data.parents, 'thalorna-note-place-pshtrwldrns'))
  )
ORDER BY p.name.full COLLATE NOCASE
```

## Peoples and Culture

The Peshtar are a fierce and fractious highland people, descended from the refugees of the [[lore-pelwarpepl|Pelwar People]] who reached Aelwyth around 1200 BF, as is nearly every human on the island. What sets them apart is not an older origin but their way of life: their clans took no crown and no lowland holding, and kept the wilderness as it was when the refugees first came to it, while the southern kingdoms and the Nordmen settlers of the eastern coasts took their land later. They are not a single tribe but a constellation of related clans—the accounts vary widely on how many clans there are and which have lineal relationships with which—who share a language family, a ritual complex, and a common contempt for the lowlands.

Peshtar society is organized around the clan, which is in turn organized around the war-chief and the druid. The war-chief is the martial leader—typically the foremost warrior of his lineage, chosen by the acclamation of the clan's warriors and holding his position only as long as he remains the foremost warrior. The druid is the spiritual and legal authority—trained from childhood in the clan's mysteries and the landscape's lore, invested with authority over questions of ritual and inheritance and dispute. The two offices balance one another; neither alone can rule, and clans whose war-chief and druid openly quarrel tend to fission.

Life is harsh by lowland standards and spare by design. The Peshtar are semi-nomadic, moving with the seasons between highland summer pastures and sheltered forest valleys in winter. They have no cities, no permanent settlements larger than a clan-village of perhaps a hundred souls, no written language, and no coinage. What they have is an intimate, generations-deep knowledge of their terrain, a martial tradition that prizes endurance as highly as ferocity, and a spiritual orientation toward the land that the settled kingdoms find alien.

Peshtar diet is simple: cattle, sheep, goats, and pigs herded through the highland seasons, supplemented by hunting, fishing, wild grain, and the foraged resources of the forest. Their craft traditions are deep but narrow—textile work, blade work, bronze casting, and carved wooden figures of extraordinary artistry, produced in small quantities and traded rarely.

## Religion

The Peshtar combine worship of the gods of the [[affiliation-arldnpnthn|Aureldian Pantheon]] with older animistic traditions that may predate any organized pantheon in [[place-worldthlrn|The World of Thalorna]]. Their druids maintain the ritual practice; their holy places are natural features—ancient trees, springs, stone circles, the high shoulders of specific mountains—rather than temples or churches.

The relationship between the Peshtar version of the Aureldian gods and the version recognized in mainstream Aureldian theology is ambiguous. The names are recognizable: Peshtar druids invoke something they call [Calmara]{.name data-type="lore/deity"}, something they call [Veyrael]{.name data-type="lore/deity"}, something they call [Vharoth]{.name data-type="lore/deity"}. But the stories they tell, the faces they assign to these gods, and the rituals they use to approach them bear only a distant resemblance to the Aureldian liturgical tradition. A handful of Aureldian theologians have proposed that the Peshtar practice is not a corruption of the true Aureldian traditions but an older stratum of them, preserving what the continent has forgotten. This proposition is not popular in ecclesiastical circles; the theologians who have made it most vigorously have generally ended their careers in obscurity.

Beneath and around the Aureldian names, the Peshtar also maintain a set of explicitly animistic practices—the recognition of landscape-spirits, ancestor-spirits, and the named spirits of specific rivers, specific groves, specific stones. These traditions have no counterpart in mainstream Aureldian practice and are, almost certainly, the older stratum of the Peshtar faith.

## Politics and Power

The Peshtar Wilderness has no government in any sense the lowlands would recognize. There is no king, no council of chiefs, no federation, no common law. Each clan governs itself; inter-clan relations are a matter of ad-hoc negotiation, seasonal gathering, occasional druidic mediation, and frequent small-scale warfare. Druidic gatherings at the ancient stone circles—held at the major seasonal turns—serve as the closest thing the Peshtar have to a supra-clan institution. At these gatherings disputes can be adjudicated, alliances formalized, and occasional broader decisions made; but the gatherings' authority is moral rather than compulsory, and a clan that rejects a druidic ruling simply rejects it.

No outsider has ever successfully ruled the Peshtar. Punitive expeditions from the lowland kingdoms have a long and inglorious history: the Peshtar do not offer pitched battle, do not defend fixed positions, and do not have anything the invader can seize to compel their submission. An army that enters the wilderness is harassed continuously, picked apart piece by piece, and eventually starved out or destroyed in terrain where supply and maneuver favor the defenders absolutely.

## Trade

Trade with the Peshtar is small in volume but surprisingly persistent. Lowland merchants accepted by particular clans can exchange salt, metal goods, fine textiles, and written charters for highland cattle, hides, honey, herbal medicines, and the occasional piece of Peshtar metalwork that fetches extraordinary prices in the lowland art markets. This trade operates under carefully negotiated terms that are often hereditary on both sides; the merchant families who hold standing agreements with specific clans guard these relationships as irreplaceable assets.

Peshtar warriors occasionally take service as mercenaries in the lowland kingdoms, prized for their ferocity and endurance even as their manners are deplored. A Peshtar warrior in lowland service is typically under a year's oath, will not fight against another Peshtar, and will return to the wilderness when the oath expires. The tradition is old and reliable; it is also how most of the lowlands' accurate information about the Peshtar eventually trickles out.

## Relations with Neighboring Regions

To the **south** lies the [[affiliation-repblcndrth|Republic of Ondareth]], which has borne the brunt of Peshtar raiding for centuries and whose border is a long line of fortified farmsteads, watch-burgs, and burned-over no-man's-land. Relations are formally hostile, practically managed.

To the **east** lies the [[affiliation-jrldmstrmvld|Jarldom of Stormveld]] and other Nordmal-descended polities of Aelwyth. The Peshtar and the Nordmen of Aelwyth share a martial temperament and a highland respect, and relations between them are often more comprehensible and more stable than Peshtar relations with the continental Aureldian polities.

To the **north and west** lies the sea. The Peshtar have no maritime ambition, and the cliff coasts discourage any outside power from attempting a landing in strength.

## See Also

[[place-aelwyth|Aelwyth]]
: the parent island

[[affiliation-repblcndrth|Republic of Ondareth]]
: southern lowland neighbor

[[affiliation-jrldmstrmvld|Jarldom of Stormveld]]
: eastern Nordmal-descended neighbor

[[affiliation-arldnpnthn|Aureldian Pantheon]]
: partial overlay of the older Peshtar faith

[[skill-varokhlng|Varokhi]]
: related naming tradition

[[place-aureldirgn|Aureldia Region]]
: the broader cultural region

[[place-ankrscntnnt|Ankaris Continent]]
: parent continent

## Extent and Peoples

The **Peshtar Wilderness** is not a polity and does not consider itself one. It covers the **entire
north-west of Aelwyth and much of the northern coast**, and it holds, with the other unsettled country,
roughly **125,000** people—about a sixth of everyone on the island.

They are not one people. The wilderness supports many **tribal cultures**, differing in speech, custom
and disposition, sharing chiefly the fact that no realm's writ reaches them. Along the northern coasts
and the north-west the tribes are principally herders, fishers and hunters, and their dealings with the
settled realms are intermittent, wary and mostly commercial.

Beyond Peshtar proper, further tribal communities live in **isolated wooded settlements** through the
island's interior and its eastern and southern zones, in the deep forest that covers a third of
Aelwyth. These are markedly **more warlike** than the northern tribes—they raid, they are raided, and
they have long memories about which is owed—and the settled realms treat the forest margins as
frontier rather than as border.

## The War Nobody Records

For **more than five hundred years** the peoples of the wilderness have been fighting
[[lore-grukaraelwyth|Grukar]].

The Grukar reached Aelwyth some seven centuries ago and established themselves in exactly the country
the tribes live in—the deep forest, the wooded folds, the moor. There is no lowland chronicle of the
fighting because no lowland realm has ever been in it, and the tribes have neither the means nor the
inclination to send anybody an account.

It is not a war in any sense that admits of campaigns, victories or an end. It is a **condition**, and
it has shaped these peoples completely: the forest communities of the interior and the south are
markedly more warlike than the northern herders because twenty generations of them have lived beside
something that breeds faster than it can be killed. Frontier settlements of
the [[place-aldorathrgn|Aldorath Region]] find them impossible to deal with and put it down to savagery.

The lowland realms use the word _barbarian_ for all of them indiscriminately, which is convenient and
tells you nothing.
