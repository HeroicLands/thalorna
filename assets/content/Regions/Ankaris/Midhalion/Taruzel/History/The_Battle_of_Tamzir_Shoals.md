---
shortcode: tamzirbattle
name: {full: The Battle of Tamzir Shoals, en: [Battle of Tamzir Shoals, The Shoals]}
type: lore
subType: history
description: "In the early summer of 708 AF the largest squadron the Vylarian Empire had sent into the eastern sea follows the Taruzelian flotilla into the Tamzir Shoals and is destroyed there in two days; the island garrisons fall within months, and Vylaria recognizes the Confederation within the year."
tags: [history, taruzel, aftershoals]
data:
  culture: taruzelianclt
  packFolder: taruzel
  events:
    - id: battle
      when: "708.104"
      until: "708.105"
      kind: battle
      depth: region
      sources:
        - place-tamzirshoals
        - affiliation-cnfdrtntrzlnstts
        - affiliation-vylrnmltry
        - place-castamar
        - place-yamuzel2
        - lore-paidattheshoals
      summary: >-
        A Vylarian squadron of some forty warships sails from Kastamar to break the blockade of the island channels and relieve the garrisons. The Taruzelian flotilla shows itself at the edge of the Tamzir Shoals and withdraws into them, the imperial admiral follows, and his deep-keeled ships take the sand on the falling tide. Over two days fishing boats with rams, harbor boats of archers, fire-boats and the merchant warships burn, board or wreck the squadron; the admiral is killed, six warships are taken, and the rest burn or break up in the Shoals.
      standing: attested
      names:
        - {name: the Battle of Tamzir Shoals, by: affiliation-cnfdrtntrzlnstts}
        - {name: the Shoals, by: affiliation-vylrnmltry}
      where:
        locus: [place-tamzirshoals]
        reach:
          - place: place-yamuzel2
            how: >-
              the city holds the Fleet Review every year on the day of the victory, and its veterans' halls sing what the battle cost
            knowledge: named
          - place: place-besikar2
            how: >-
              a captured imperial warship stands in a dry-dock on the waterfront, and the veterans hang wreaths on her ram on the day of the battle
            knowledge: named
          - place: place-castamar
            how: >-
              the names of the drowned are cut on the inner face of the eastern mole, and the fleet's crews stand along it while they are read
            knowledge: named
          - place: place-tamzirshoals
            how: >-
              the wrecks of the squadron lie on the sand with their bronze rams still on them
            knowledge: named
      who:
        - {ref: affiliation-cnfdrtntrzlnstts, role: actor}
        - {ref: affiliation-yamuzel, role: actor}
        - {ref: affiliation-tanaduni, role: actor}
        - {ref: affiliation-vylrnmltry, role: victim}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: lore-taruzelwar#war
          how: ended
          note: the battle broke the empire's power at sea, and with it the war
      accounts:
        - by: affiliation-cnfdrtntrzlnstts
          says: >-
            Captains who had never fought together chose the ground, and the flotilla destroyed the empire's squadron in two days.
          agrees: full
        - by: affiliation-vylrnmltry
          says: >-
            The squadron was lost because officers who had bought their commissions took deep-keeled ships into water no centurion of the marines would have entered.
          agrees: partly
          withholds: that the admiral had orders from the capital to force the channel
        - by: place-castamar
          says: >-
            The Taruzelian pilots aboard the squadron's leading ships steered them onto the sand.
          agrees: disputes
      unresolved:
        - whether the Taruzelian pilots hired by the squadron steered its leading ships onto the sand
        - whether the admiral's ship was among those taken, or where she lies
    - id: recognition
      when: ~709
      kind: treaty
      depth: region
      sources: [affiliation-cnfdrtntrzlnstts, affiliation-vylarinmpr, lore-empirdclne]
      summary: >-
        Cut off from supply by sea, the imperial garrisons on the islands are reduced one by one, by siege, by negotiation and by desertion, and the fortress over the narrows at Yamuzel is given up by treaty. Within a year of the battle the empire, pressed on its other borders, recognizes the sovereignty of the Confederation of Taruzelian States, and the prisoners taken from the water at the Shoals go home in the year after.
      standing: attested
      names: [{name: the Recognition, by: affiliation-cnfdrtntrzlnstts}]
      where:
        locus: [place-taruzelrgn]
        reach:
          - place: place-taruzelrgn
            how: >-
              the Vylarian forts on the coasts stand empty or in Taruzelian hands, and no therkos governs in the islands
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: signatory}
        - {ref: affiliation-cnfdrtntrzlnstts, role: signatory}
      follows:
        - event: lore-tamzirbattle#battle
          how: caused
          note: without the squadron the garrisons could be neither supplied nor relieved
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The empire chose to end a costly war in a province that had ceased to pay for its own defense.
          agrees: partly
          withholds: that it had no ships left in the eastern sea to fight it with

# terran_analog: "Salamis and the Armada's end on the Irish coast, shoal water and small craft against heavy ships; the Dutch fireships. Departs: the defeated fleet is the imperial one, it is wrecked in two days in water chosen for it, and its hulls stay where they sank."
---

In the veterans' halls of [[place-yamuzel2|Yamuzel]] the Battle of Tamzir Shoals is counted as two days and one night, and the old men give the night the most time. The battle was fought on the thirteenth and fourteenth of Brazemandi in 708, in the [[place-tamzirshoals|Tamzir Shoals]] west of [[place-khamisar|Khamisar]], and at its end the Vylarian Empire had no fleet in the eastern sea. The Confederation keeps the second day, the day of the victory, as its own: Yamuzel holds the [[lore-fleetreview|Fleet Review]] on it every year.

## The Squadron

By the spring of 708 the Taruzelian flotilla had closed the island channels to imperial shipping, and the garrisons on the islands were short of food, men and pay. The empire's answer sailed from [[place-castamar|Kastamar]] at the end of spring: some forty warships, the largest squadron the empire had ever gathered in the eastern sea, with transports carrying marines and the garrisons' supplies. Its heaviest ships had three banks of oars and a bronze ram at the bow, and nothing in the islands could stand against one in open water.

Its orders were to break the blockade and relieve the fortress over the narrows under Yamuzel's walls, which the empire still held. From the west, every route to the narrows passes through the channels around Khamisar, and the worst ground in those channels is the Shoals: a maze of sandbars, submerged rocks and hard currents, where a pilot reads the color of the water to find the channel and the channels move with every winter storm.

## The First Day

On the morning of the thirteenth the flotilla showed itself off the western edge of the Shoals: the merchant warships, the armed traders, the fishing boats with rams spiked to their bows and the harbor boats packed with archers, under captains who had never fought together. When the squadron came on, the flotilla broke and ran into the Shoals, and the imperial admiral, with the channel open ahead and the enemy in sight, followed it in.

The leading warships took the sand within the hour, on the falling tide. Behind them the squadron could neither turn nor back out of the channel, and the lighter Taruzelian vessels came out of the side channels and worked around the stranded ships like wolves around elk. A fishing boat with a ram could not sink a warship, but it could stave in her oars on one side, and a warship with her oars broken lay where the current put her. The harbor boats came in under the archers' cover, threw fire-pots over the rails and pulled away. By evening a dozen imperial ships were aground or burning, and the rest were anchored in the channel, waiting for the flood.

## The Night

The flood came after dark, and the flotilla came with it. Two old merchant hulls, packed with tar, oil and brushwood, were set alight up-current and let go, and the tide carried them down on the anchored squadron. The imperial crews cut their cables to escape the fire-boats, and in the dark, in water none of them knew, ship after ship drove onto the sand. The halls tell the night by its light: the fire-boats, the burning warships, and the boats of the flotilla rowing among them, hunting.

## The Second Day

On the fourteenth the admiral tried to fight his way out on the morning flood with the ships he still had afloat. The flotilla's merchant warships met him in the one channel deep enough to carry his ships out, among them the squadron of the [[affiliation-tanaduni|Tanaduni]] under [[being-dlzrtndn|Delzuru Tanaduni]], and the boats closed in from the sides. The admiral was killed on his own deck in the boarding. By noon the squadron had ceased to exist. Six warships were taken and towed out of the Shoals, and every other warship that had entered them was burned, sunk or broken on the sand. The transports that had waited outside picked up what men they could and sailed for Kastamar.

Most of the squadron's marines drowned. The Taruzelian boats took a few hundred men out of the water, and they were held on the islands as prisoners until the peace.

## The Recognition

Without the squadron the garrisons could not be supplied or relieved. Over the following months they were reduced one by one, by siege, by negotiation and by desertion, as their soldiers understood that no relief was coming, and the fortress over the narrows was given up by treaty with its stores full. The empire, already stretched on its other borders, chose to end the war, and its recognition of Taruzelian sovereignty followed within the year. The prisoners of the Shoals went home in the year after it.

What the merchant princes made of the victory is told in [[lore-taruzelbetrayal|The Betrayal of the Revolution]].

## What It Left

- **The wrecks.** Most of the squadron still lies in the Shoals, and its bronze rams lie with it (see [[place-tamzirshoals|Tamzir Shoals]]).
- **The prizes.** The six captured warships were the first warships of the Confederation, and one of them stands in a dry-dock at [[place-besikar2|Besikar]] as the [Tamzir Monument]{.name data-type="place/site"}.
- **The day.** Yamuzel's Fleet Review on the fourteenth of Brazemandi, the veterans' song [[lore-paidattheshoals|What Was Paid at the Shoals]] on the night after it, and the reading of the names on the mole at Kastamar on the same day.
- **The League.** The captains who fought at the Shoals founded the [[affiliation-corsairleg|Corsair League]] as a brotherhood of veterans.
- **A reckoning in the empire.** The Dukran's report on the war, and the reform it forced on the commission system ([[lore-commissioncmp|The Commission Compromise]]).

## See Also

[[place-tamzirshoals|Tamzir Shoals]]
: the water the battle was fought in

[[lore-taruzelwar|The Taruzelian War of Independence]]
: the war the battle ended

[[lore-taruzelbetrayal|The Betrayal of the Revolution]]
: the peace that followed

[[place-castamar|Kastamar]]
: the port the squadron sailed from
