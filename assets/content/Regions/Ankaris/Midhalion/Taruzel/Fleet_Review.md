---
shortcode: fleetreview
name: {full: Fleet Review, en: [The Fleet Review, The Review]}
type: lore
subType: gathering
description: "Yamuzel's yearly review of the Confederation's ships on the fourteenth of Brazemandi, the day of the victory at the Tamzir Shoals: the Corsair League's galleys calling their oars under the Grand Council's stand, the admirals' squadrons, the veterans' small boats at the tail, a banquet on the height and a song in the halls."
tags: [taruzel]
data:
  culture: taruzelianclt
  packFolder: taruzel
  events:
    - id: review
      when: "709.105"
      recurs: {every: 1}
      depth: region
      sources:
        - place-yamuzel2
        - affiliation-yamuzel
        - affiliation-corsairleg
        - affiliation-grandcouncil
        - lore-paidattheshoals
      summary: >-
        On the fourteenth of Brazemandi every year, the day of the victory at the Tamzir Shoals, the ships of the Confederation pass in line through the narrows under the walls of Yamuzel before the Admiral's Council and the councilors of the Grand Council. The Corsair League's galleys lead and call their oars as they pass, the admirals' houses' squadrons follow, and the veterans' fishing boats and harbor boats close the line.
      standing: attested
      names: [{name: the Fleet Review, by: affiliation-yamuzel}]
      where:
        locus: [place-yamuzel2]
        reach:
          - place: place-zupumun
            how: >-
              the narrows are closed to merchant traffic from dawn to noon, and the convoys in the roads wait a day
            knowledge: named
      who:
        - {ref: affiliation-yamuzel, role: actor}
        - {ref: affiliation-corsairleg, role: actor}
        - {ref: affiliation-grandcouncil, role: witness}
      follows:
        - event: lore-tamzirbattle#battle
          how: answered
          note: the Review is held on the second day of the battle, the day of the victory

# terran_analog: "Spithead and the Venetian marriage of the sea, naval reviews held for the ruler's eye. Departs: the review is held by the fleet for the government, and its last boats belong to the men the government discharged."
---

"Count the oars," a sergeant of marines tells the recruits he has posted on the walls of [[place-yamuzel2|Yamuzel]] at dawn on the fourteenth of Brazemandi. "Every League captain calls his as he passes, and at the end the League's admiral calls them all. The councilors on the fortress wall are counting too. That is what the morning is for." The Fleet Review is the yearly passage of the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]'s ships through the narrows under Yamuzel, held on the anniversary of the victory at the [[place-tamzirshoals|Tamzir Shoals]] ([[lore-tamzirbattle|The Battle of Tamzir Shoals]]). It is the greatest festival of the city that built the fleet, and it draws visitors from every island of the Confederation.

## The Day

The fourteenth of Brazemandi falls in early summer, when the sailing season is properly open. The narrows are closed to merchant traffic from dawn to noon, and the convoys waiting in the roads below the [Strait Fortress]{.name data-type="place/structure"} lie at anchor another day with their crews on deck to watch. The whole city turns out on the walls, the quays and the cliff stairs, and the inns of the switchback road have been let for weeks.

The line forms in the roads at first light and goes through the narrows on the slack water of the morning tide, north to south, past the walls of the city and the fortress, where the [Admiral's Council]{.name data-type="affiliation/governmental"} and the councilors the [[affiliation-grandcouncil|Grand Council]] sends stand on the wall to take the salute. The Arch-Consul of the year stands among them. The order of the line has not changed since the first Review in 709:

1. **The galleys of the [[affiliation-corsairleg|Corsair League]].** Each captain calls the name of his galley and the number of her oars as she passes the councilors' stand, and the walls repeat the count.
2. **The squadrons of the admirals' houses**, each led by its admiral's galley, the [[affiliation-tanaduni|Tanaduni]] first. The squadrons that fought at the Shoals fly a strip of scorched sail under their pennants.
3. **The prizes.** Those of the six warships taken at the Shoals that still swim, rowed by marines, with the Confederation's flag over the empire's.
4. **The small boats.** Fishing boats with rams on their bows and harbor boats with archers on the thwarts, rowed by the veterans of the flotilla and their children, close the line. The rams are wood now, and painted.

When the last galley of the League has passed, the League's admiral stands in her stern under the fortress and calls the total of the League's oars, and the councilors on the wall applaud it. The Review is the day the League reminds the Council what it owns. It falls a few weeks before the Grand Council's summer session, at which the League's charter is always on the order of business, and the councilors carry the count to Besikar.

## The Night

The Admiral's Council keeps its banquet for the Review in the admirals' houses on the height, with the councilors as its guests and tables paid for by the great houses. Across the city the veterans' halls of the [Veterans' Quarter]{.name data-type="place/site"} keep their own night: they pin fresh paper over the old broadsheets' torn corners, read the names of their dead, and sing [[lore-paidattheshoals|What Was Paid at the Shoals]] until the lamps burn out. The League's captains do not come to the halls that night, and the halls do not go up to the height.

In the empire the same day is kept differently. At [[place-castamar|Kastamar]], where the squadron sailed from, the fleet's crews stand along the eastern mole while the names of the drowned are read.

## The Last Boat

Every year since the outlawing, after the last of the veterans' boats has passed, one more hull has come through the narrows: a fast coaster or a fishing boat with two lanterns at her masthead in daylight and a real ram on her bow, rowed hard, gone round the cape before the guard-boat can reach her. The city calls her the last boat. The walls cheer her louder than the League, and the marines on the fortress have never caught her.

## Hooks

- **The plots.** Veterans have been plowing marked plots on the southern terraces of [[place-khamisar|Khamisar]], saying they were promised them, and the [[affiliation-tanaduni|Tanaduni]], the admirals' house that leases the land, want them cleared before the Review, so that the councilors ride past plowed land with nobody on it.
- **The count.** The League's admiral means to call a number this year that is larger than the League's oars, and a councilor of Besikar has hired a party to count the galleys in the roads the night before.
- **The last boat.** The Commander of the Marines has been told to catch the last boat this year, and his sergeants grew up in the Veterans' Quarter.

## See Also

[[lore-tamzirbattle|The Battle of Tamzir Shoals]]
: the victory the Review keeps

[[place-yamuzel2|Yamuzel]]
: the city that holds it

[[affiliation-corsairleg|Corsair League]]
: the guild that leads the line

[[lore-paidattheshoals|What Was Paid at the Shoals]]
: the song the veterans sing on the Review night

[[scenario-lstbtnrrws|The Last Boat Through the Narrows]]
: a scenario of the Review and the rising

# The Truth of the Last Boat {#truth .secret}

**The last boat is the [[affiliation-freecaptains|Free Captains]]'.** A different Free Captain brings her through each year, chosen by lot in a council of the captains, and the hull goes back to the [[affiliation-shoalsbrthd|Shoals Brotherhood]]'s lagoon by nightfall. The marines on the fortress have orders to stop her and a long tradition of being slow, and the guard-boat's crew are veterans' sons. This year the Commander of the Marines has put a League galley of his own choosing in the roads, out of the line, with orders to wait off the cape. The captain chosen by the lot does not know, and the [[affiliation-unchained|Unchained]] in the Veterans' Quarter will learn of it the evening before, if anyone carries them word.
