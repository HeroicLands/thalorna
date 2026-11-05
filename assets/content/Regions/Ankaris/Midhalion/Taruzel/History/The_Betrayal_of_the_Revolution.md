---
shortcode: taruzelbetrayal
name: {full: The Betrayal of the Revolution, en: [The Betrayal, The Discharge]}
type: lore
subType: history
description: "From about 709 AF the merchant guilds who paid for Taruzel's war write the Confederation's charter for themselves, discharge the veterans with a purse of silver, and outlaw the captains and militia leaders who will not be quiet; by about 710 the Confederation is an oligarchy in all but name, and the outlaws hold the island channels."
tags: [history, taruzel, aftershoals]
data:
  culture: taruzelianclt
  packFolder: taruzel
  events:
    - id: charter
      when: ~709
      kind: charter
      depth: region
      sources:
        - affiliation-cnfdrtntrzlnstts
        - affiliation-grandcouncil
        - affiliation-auricompct
        - affiliation-corsairleg
        - lore-paidattheshoals
      summary: >-
        In the months after the recognition the merchant guilds write the charter of the Confederation. The Grand Council counts every measure by heads and again by each member's deposits with the treasury, the courts are staffed with magistrates the guilds choose, and the harbors, customs houses and warehouses stay with the families who held them before the war. The veterans are discharged with a small purse of silver in place of the land, the guild places, the pensions and the voice they were promised in the square.
      standing: attested
      names:
        - {name: the Charter, by: affiliation-cnfdrtntrzlnstts}
        - {name: the Discharge, by: affiliation-unchained}
      where:
        locus: [place-besikar2]
        reach:
          - place: place-yamuzel2
            how: >-
              the sailors and marines who won the war live in tenements built for the yard men, and the plots promised them are leased to an admirals' house
            knowledge: named
          - place: place-besikar2
            how: >-
              the Auric Compact keeps its headquarters in the palace of the Vilérian therkos
            knowledge: named
          - place: place-taruzelrgn
            how: >-
              the hill tribes who sent their warriors to the war were given nothing, and the old military road is unrepaired
            knowledge: named
      who:
        - {ref: affiliation-auricompct, role: author}
        - {ref: affiliation-cnfdrtntrzlnstts, role: founder}
        - {ref: affiliation-grandcouncil, role: instrument}
      follows:
        - event: lore-tamzirbattle#recognition
          how: enabled
          note: the guilds wrote the charter in the months the recognition gave them
      accounts:
        - by: affiliation-auricompct
          says: >-
            The war was fought for freedom, and Taruzel is free: of imperial taxes, of Vilérian governors and of conscription into foreign legions.
          agrees: partly
          withholds: what the broadsheets and the recruiters promised in the square
        - by: affiliation-unchained
          says: >-
            Four things were promised and a purse of silver was paid, and the guilds keep the difference.
          agrees: full
    - id: outlawry
      when: ~710
      kind: law
      depth: region
      sources:
        - affiliation-cnfdrtntrzlnstts
        - affiliation-grandcouncil
        - affiliation-corsairleg
        - affiliation-freecaptains
        - affiliation-shoalsbrthd
      summary: >-
        The guilds marginalize the veterans who led the militias and captained the flotilla, with fabricated debts, charges and conspiracies, small posts and small pensions, and a few disappearances. The most stubborn are declared outlaws by acts of the Grand Council, on charges of piracy or sedition, and the Corsair League, taken over by the shipowners, is set to hunt them. The outlawed captains take to the channels as the Free Captains and the Shoals Brotherhood, and the veterans ashore form the Unchained.
      standing: attested
      names: [{name: the Outlawing, by: affiliation-freecaptains}]
      where:
        locus: [place-besikar2]
        reach:
          - place: place-zupumun
            how: >-
              outlawed captains raid guild shipping from coves and anchorages known only to the people who use them
            knowledge: named
          - place: place-tamzirshoals
            how: >-
              the Shoals Brotherhood holds the water where the squadron was destroyed
            knowledge: named
      who:
        - {ref: affiliation-grandcouncil, role: actor}
        - {ref: affiliation-auricompct, role: actor}
        - {ref: affiliation-corsairleg, role: instrument}
        - {ref: affiliation-freecaptains, role: victim}
        - {ref: affiliation-shoalsbrthd, role: victim}
        - {ref: affiliation-unchained, role: victim}
      follows:
        - event: lore-taruzelbetrayal#charter
          how: caused
          note: the veterans' petitions against the charter made their leaders the people the guilds could least afford at liberty
      accounts:
        - by: affiliation-grandcouncil
          says: >-
            The Council outlawed pirates and seditious men who preyed on Taruzelian commerce.
          agrees: disputes
          withholds: that the charges of piracy came before the piracy
      unresolved: [how many of the veterans who disappeared in the first two years are dead]

# terran_analog: "The aftermath of revolutions won by artisans and sailors for merchants: the Dutch regents after the Revolt, the discharged veterans of the Continental Army, the Gracchan land question. Departs: the betrayal is written into a charter, its victims took to the sea as outlaws, and it is twelve years old."
---

A sail-maker of the Veterans' Quarter in [[place-yamuzel2|Yamuzel]] keeps two things nailed to the wall of his loft: a guild broadsheet with a broken chain on it, and the purse he was discharged with after the war, empty, with the seal of the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]] still on its string. He shows apprentices the purse first. "That is the treaty," he tells them. "The other one is the price they opened at." The betrayal of the revolution is the peace the merchant guilds made in the two years after [[lore-tamzirbattle|The Battle of Tamzir Shoals]], and every grievance on the coast is a remainder of it.

## The Charter

The merchant princes had financed the war. They had organized the supply lines, bribed the officials, printed the broadsheets and paid the soldiers, and during the fighting they had quietly placed themselves to control whatever government came out of it. The Confederation that took shape in the months after the recognition was, on paper, a federation of equal city-states. The guilds wrote its charter.

The charter's [[affiliation-grandcouncil|Grand Council]] counts every measure twice: once by heads, and once by the weight of each member's deposits with the treasury, so that the city with the most money decides. Its judiciary was staffed with magistrates the guilds chose, and its tax code was rewritten in favor of commercial enterprise. The harbors, customs houses, warehouses and banking houses stayed with the families who had held them before the war.

## The Discharge

The veterans were the dock workers, fishermen and tribal warriors of the militias and the captains who had sailed into the imperial fleet at the Shoals. They had been promised four things: land for those who had none, guild membership for those the guilds had never admitted, pensions for those who came home maimed, and a voice in the government of their own cities. They received a discharge, a small purse of silver, and the knowledge that the men who had paid for the revolution now owned the result.

The merchant princes had not lied, exactly. Taruzel was free of imperial taxation, of Vilérian _therkoi_ (governors) and of conscription into foreign legions. The princes had meant their own freedom, to trade without imperial interference and to set their own tariffs, and the harbors had heard something else in the same words. Many of the promises were made aloud in the squares by recruiters, and none of them was ever written down.

## The Guilds Take the Peace

The [[affiliation-auricompct|Auric Compact]], the banking cartel that had underwritten the war, called in its debts, and the new Confederation owed it staggering sums. It took the palace of the Vilérian _therkos_ in [[place-besikar2|Besikar]] for its headquarters, and the men behind its desks were no kinder than the men they replaced. The [[affiliation-corsairleg|Corsair League]], founded by the captains of the Shoals as a brotherhood of veterans, was taken over by the shipowners and turned into a shipping cartel, and some of the captains who had founded it voted for the change. The [[affiliation-mrchntryvl|Merchantry of the Veil]] went on as it always had, profiting from the confusion of the transition.

Within two years of independence the Confederation was an oligarchy in all but name. The guild families lived in palatial estates and the veterans in harbor tenements. Guild fees took the place of imperial levies and fell on the same backs, and guild enforcers took the place of the legions. The hill tribes, who had sent their warriors down to the coast to die for a revolution of the port cities, received nothing at all, and the roads the Vilérian administrators had kept up fell into ruin.

## The Suppression

The men and women who had led the militias, captained the flotilla and organized the resistance were the people the new government could least afford to leave at liberty: experienced fighters with popular followings and a grievance every dock worker shared. A single crackdown would have looked like the imperial oppression the revolution claimed to have ended, so the guilds worked slowly. Prominent veterans were accused of debts they did not owe, charged with crimes they had not committed, or implicated in conspiracies the guilds' agents had fabricated. Some were bought off with minor posts and pensions too small to organize with. Others were tried in guild-friendly courts and imprisoned, and a few disappeared.

The captains and militia leaders who would not be silenced were declared outlaws by acts of the Grand Council. The charge was piracy for a captain who had served in the flotilla, and sedition, conspiracy or "disrupting public order" for the rest. An outlaw can be sheltered by no member state, landed at no Taruzelian quay and heard in no Confederation court, and the Compact's enforcers and the League's patrol galleys were given broad authority to bring them in.

## The Outlaws

The outlawed captains took to the sea, and since the guilds called them pirates, pirates they became. The island channels and hidden coves that had sheltered the flotilla in the war became their hunting ground, and they raid guild shipping from them still. They are three bodies, and the guilds call all of them pirates:

[[affiliation-freecaptains|The Free Captains]]
: outlawed masters who sail their own hulls, raid guild cargoes and sell them across the strait.

[[affiliation-shoalsbrthd|The Shoals Brotherhood]]
: the sworn crews who hold the Tamzir Shoals themselves, under a code of their own.

[[affiliation-unchained|The Unchained]]
: the veterans ashore, who shelter the captains, burn the guilds' bonds and free the debt-bound.

## What It Left

- **The tenements and the estates.** The veterans' quarters of the port cities, and the guild families' houses above them.
- **The petition.** At every session of the Grand Council a councilor of Yamuzel sponsors the veterans' petition for the land, the guild places, the pensions and the voice, and it is read on the last afternoon.
- **The children.** The veterans of the Shoals are growing old, and their sons and daughters are of an age to inherit the grievance and the broadsheets with it.
- **The outlaws.** Three bodies of outlaws in the channels and the harbor districts, and a League that would sooner hire them than hunt them.

## See Also

[[lore-taruzelwar|The Taruzelian War of Independence]]
: the war the guilds paid for

[[lore-tamzirbattle|The Battle of Tamzir Shoals]]
: the victory the peace was made from

[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]
: the state the charter made

[[affiliation-grandcouncil|Grand Council]]
: the council the charter weighs
