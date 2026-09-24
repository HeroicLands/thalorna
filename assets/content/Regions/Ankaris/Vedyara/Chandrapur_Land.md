---
tags:
  - region
  - held
description: "The land of the city-state of Chandrapur—the lower Chandramahī and its delta, the gem-road up the valley behind it, and the roadstead at the river mouth where the galleys lie."
name:
  full: Chandrapur Land
  aliases: []
shortcode: chandrapurland
type: place
subType: region
data:
  demonym: Chandrapuri
  lore:
    - humanflk
  parents:
    - vedyarargn
  population: 6000000
packFolder: vedyara
---

## Overview

Chandrapur Land is the country the city-state of [[affiliation-chandrapur|Chandrapur]] holds: the lower **Chandramahī** from the last of the rapids down to the sea, the delta the river builds there, and the roadstead outside the bar where deep-water hulls wait out the monsoon. The city stands at the head of the delta, and everything in the land is arranged with reference to it—the gem-road that climbs the valley to the cutting-villages, the rice and cotton of the floodplain, the salt-pans and the fishing beaches along the shore.

## How the land is held

The land is **held**, not endowed, and that is the first thing a traveler up from the janapadas notices. Away from the city the villages answer to a person. In the valley quarters a house has kept for generations, that person is a **Kulina**, the head of one of the Nine Houses. On the crown's fields at the river mouth it is the Mahārāja's own people. It is a temple only where a temple has been endowed with ground outright, and in this land that is uncommon. A cultivator here works under a holder as he works under a sabhā fifty miles inland, but he knows the holder's name, and the holder's name is a man's.

The seats descend by house and not by turn, so a Chandrapuri village changes hands at a marriage or a bankruptcy and never at an election. The Houses' rise and fall is read off the map of the valley as much as off the court's seating.

## Settlements

```sql
SELECT address.slug AS _ref,
       name.full       AS "Settlement",
       data.population AS "Population",
       description     AS "Overview"
FROM entries
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'chandrapurland')
ORDER BY name.full COLLATE NOCASE
```

The query names the city and the port. The rest of the land lives in the cutting-villages of the valley, in the rice and cotton villages of the floodplain, and in the salt and fishing settlements strung along the shore, each of which answers to the house or the crown that holds it and none of which speaks for itself.

## The Valley, the Floodplain and the Shore

The **valley** is the gem-road. It climbs behind the city along the last hundred miles of the Chandramahī, and its villages are workshops with fields attached rather than the other way about. A village that saws and a village that polishes may be an hour apart and will not do each other's work.

The **floodplain** is the delta itself, two rice crops a year on ground the river remakes, with cotton on the drier back-country. It is the most productive land in the city-state and the least regarded, because nothing that grows on it is worth what a cut stone is worth.

The **shore** runs east and west from the river mouth: salt-pans behind the dunes, fishing beaches, and the boat-timber the yards at [[place-chandrmukha|Chandramukha]] consume. The shore villages are the poorest in the land and the least attached to it, because a man on that coast can always go to sea.

## Economy

The gem trade organizes the whole land. Rough stone arrives at the city from mines across Vedyara and beyond; the cutting, polishing and setting are done in the city and in the valley villages that have specialized in one stage of the work for centuries; the finished pieces leave by sea. Around that runs an ordinary and very productive delta economy—two rice crops on the floodplain, cotton on the drier ground behind it, salt from the pans, and the fish and the boat-timber of the shore.

The river mouth is the other half of it. The fleet lies at [[place-chandrmukha|Chandramukha]], and the sailing season governs the land's year as firmly as the monsoon governs its planting.

## See Also

- [[affiliation-chandrapur|Chandrapur]]—the city-state that holds this land
- [[place-chandrapur2|Chandrapur]]—the city itself
- [[place-chandrmukha|Chandramukha]]—the port at the river's mouth
- [[place-chandrmahi|The Chandramahī]]—the river the land is built along
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[affiliation-mrchntclctvvdyr|The Merchant Collective of Vedyara]]—the caravan and credit network the gem trade runs on
