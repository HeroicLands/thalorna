---
shortcode: dhanurkotajnpd
name: {full: Dhanurkota Janapada, aliases: []}
type: place
subType: region
description: "The land of the Dhanurkota Janapada—villages along a defensible curve of the upper Sarvada, around the ancient bow-fort where the river leaves the northern hills."
tags: [region, endowed]
data:
  demonym: Dhanurkoti
  lore: [vedyariclt]
  parents: [vedyarargn]
  population: 30000
  packFolder: vedyara
  government: dhnrktjnpd

# terran_analog: "Medieval South Indian temple-republic with a martial-caste specialty—Chola-era brahmadeya village federation centered on a fortified temple complex, distinguished by hereditary archery training traditions"
---

[[affiliation-dhnrktjnpd|Dhanurkota Janapada]] is the upper [[place-sarvadarivr|Sarvada]] valley of [[place-vedyarargn|Vedyara]], thirty thousand people along a long defensible curve of the river where it comes out of the northern hill country into the inland plain. It is the land of the temple-republic of [[affiliation-dhnrktjnpd|Dhanurkota Janapada]]; that note explains how the sabhā governs it, and this one describes the ground and what the villages on it do.

Ask the ferryman at [[place-taranaghatta|Taranaghatta]] what the valley is for and he answers by listing it: "Bamboo for the bows, reed for the arrows, horn for the backings, wax for the bindings. The rest of us grow dinner." Almost every village in the janapada supplies something the bowyers, the fletchers or the academies need, and the rest feed and clothe the people who work them.

## The Bow-Fort

The town of Dhanurkota stands on a low fortified hill where the Sarvada bends west around an outcrop of red rock. The fort is older than the janapada, older than the Mahā-Sangha and older than the temples, and perhaps older than the Vedyari language. Its lowest courses are megalithic, in a style no living mason can reproduce; the upper walls have been rebuilt many times in successive Vedyari styles. Inside are the **Mahájaya temple**, the four academy halls, the sabhā chamber and the granary, and the town spreads down the slope below the walls and along the riverbank. [[place-bowfort|The Bow-Fort]] has its own note.

The fort's name has always been Dhanurkota, and what the word means is disputed. Some scholars derive _dhanur_ from the bow that has been the janapada's emblem since before recorded history. Others derive it from a much older root meaning a bend in a river, which is the likelier account: the bow came to the name after the academies were founded, and nothing will get it out again.

## Settlements

```sql
SELECT s.address.slug AS _ref,
       s.name.full AS "Name",
       s.data.market || ' ' || m.name AS "Market",
       s.data.population AS "People",
       (SELECT CASE
                   WHEN p.address.slug IS NULL THEN p.name.full
                   ELSE '[[' || p.address.slug || '|' || p.name.full || ']]'
               END
        FROM entries p
        WHERE p.type = 'affiliation'
          AND p.documents IS NULL
          AND s.data.government IN (p.address.canonical, p.documentation)) AS "Government",
       -- No field states why a place stands where it does, so "For" projects nothing.
       NULL AS "For"
FROM entries s
LEFT JOIN market m ON m.value = s.data.market
WHERE s.type = 'place'
  AND s.subType = 'settlement'
  AND list_contains(s.data.parents, 'thalorna-note-place-dhanurkotajnpd')
ORDER BY s.name.full COLLATE NOCASE
```

The table names the constituent villages and the bow-fort town. The rest of the janapada lives in the hamlets and farmsteads attached to them, which the sabhā counts with the village whose turn they share.

What each village is for:

- **The bow:** [[place-venuvana|Venuvana]] grows the bamboo staves, [[place-vishanagrama|Vishānagrāma]] supplies horn and sinew for facings and backings, [[place-sharavana|Sharavana]] cuts the reed for shafts and fletches them, and [[place-madhupada|Madhupāda]] sends wax for the bindings.
- **The halls and the horses:** [[place-vanasthali|Vanasthalī]] cuts the timber of the academy halls and the fort, and [[place-ashvatira|Ashvatīra]] keeps the horses of the [[place-swifthand|Swift Hand]].
- **The table and the loom:** [[place-shaligrama|Shāligrāma]] grows rice, [[place-ikshukshetra|Ikshukshetra]] sugarcane, [[place-tilavana|Tilavana]] sesame and [[place-gokshetra|Gokshetra]] cattle; [[place-karpasagrama|Kārpāsagrāma]] weaves cotton and [[place-nilavana|Nīlavana]] dyes it.
- **The road and the muster:** [[place-taranaghatta|Taranaghatta]] holds the crossing and its toll, and [[place-virasthali|Vīrasthalī]] sends more men to the muster than any other village.

## Society

The cultivator villages along the Sarvada produce rice, sugarcane, sesame and the cotton that feeds the local weavers' workshops. The janapada's wealth gathers in the town and the temple; the villages live as well as any in inland Vedyara and no better.

## Economy

Dhanurkota's economy rests on three things. The first is agriculture, the standard Vedyari rice, cotton and sugarcane mix, which feeds the janapada and leaves a modest export surplus. The second is the making of bows and arrows by hereditary bowyer and fletcher families, whose work is sold across Vedyara. The third is the academies and their retainers.

The academies bring in the least direct revenue of the three and the most of everything else: the pilgrim traffic of aspirants and their families, the steady payments from patron kingdoms for graduate services, and the donations to the Mahájaya temple.

## See Also

- [[affiliation-dhnrktjnpd|Dhanurkota Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[place-dhanurkota|Dhanurkota]]—the temple-seat
