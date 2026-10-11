---
shortcode: compactsignd
name: {full: The Signing of the Compact, aliases: [The Hiring of the Nordmen]}
type: lore
subType: history
description: "About 550 AF the Vylarian Empire began paying Nordmen to garrison the frontier its own fleets had loosened, and about 560 the free companies of the north met at Hringstead and signed the Compact, so that an employer would know what he bought and a captain what he owed."
tags: [history, nordlands]
data:
  packFolder: nordlands
  events:
    - id: hiring
      when: ~550
      kind: contact
      depth: region
      stated: {calendar: domseycount, text: "264 HF"}
      sources: [affiliation-malldbndlg, affiliation-vylarinmpr, lore-southrnfleets]
      summary: >-
        With the fleets gone home and the western provinces drifting, the empire's frontier commanders begin hiring Nordmen crews by the season to hold what the raids had loosened, paying in silver what the raids had taken in silver. The first contracts are made with captains of the same hirds that had burned Provènzia a generation before.
      standing: single-source
      names: [{name: the Hiring of the Nordmen, by: affiliation-skaldscrcl}]
      where:
        locus: [place-provenzrgn]
        reach:
          - place: place-nrdlndsrgn
            how: a surplus of warriors finds a trade that pays better than raiding and costs fewer ships
            knowledge: named
      who: [{ref: affiliation-vylarinmpr, role: actor}]
      follows:
        - event: lore-southrnfleets
          how: caused
          note: the empire hired the hirds it could not keep out
      unresolved:
        - which Augustar first paid a Nordmen captain, which the north never asked and the empire's chroniclers date differently
    - id: signing
      when: ~560
      kind: charter
      depth: region
      stated: {calendar: domseycount, text: "274 HF"}
      sources: [affiliation-malldbndlg, place-hringstead]
      summary: >-
        The captains of the free companies meet at Hringstead, on the neutral ground the Circle has held since before the kingdoms, and sign the Compact: a captain swears his company before a council of nine, wears the bandalagshringr, and answers for his company's conduct under its oath, so that an employer knows what he buys. The Compact-Hall is raised on the Circle's swearing-ground.
      standing: attested
      names: [{name: the Signing of the Compact, by: affiliation-malldbndlg}]
      where:
        locus: [place-hringstead]
        reach:
          - place: place-nrdlndsrgn
            how: every free company of the north answers to the Hall or is an outlaw to it
            knowledge: named
      who: [{ref: affiliation-malldbndlg, role: actor}]
      follows:
        - event: lore-compactsignd#hiring
          how: caused
          note: the trade the Compact was made to make legible
      unresolved:
        - the names of the first nine on the Council, which the Hall's own roll begins a generation later
---

"Swear before the Council, and swear it with the whole company standing behind you," a captain tells the captain of a newly raised band at the door of the Compact-Hall. The oath is a century and a half old, and the reason for it is older: the first Nordmen the empire hired were the same men who had been burning its coast twenty years before, and nobody on either side of the bargain trusted it.

## The Empire Buys What It Could Not Stop

The [[lore-southrnfleets|Southern Fleets]] went home about 530, and the empire they had struck did not recover its western coast. Provènzia and Tarvénia were drifting toward realms of their own, the legions were thin, and a frontier commander in the west had a problem a Vylarian could solve with money: there were more Nordmen warriors than the north could feed, and they had just shown they could take a coast. About 550 the first contracts were made, by the season, for a crew and its captain to hold a fort or a harbor the empire could no longer garrison itself. The silver that went north in wages was the same silver that had gone north in plunder, and the captains who took it were in several cases the sons of the men who had taken it the other way.

The trade suited the north. A younger son, a dispossessed jarl, an oath-broken huscarl or a drengr without a hall had always taken ship and hired his sword somewhere; now there was an employer who paid in coin, by contract, for a season at a time, and did not need to be raided first. Within a generation the empire had made Nordmen a standing part of its frontier garrisons, and the halls had a word for a man who came home from the south with silver and no story: he had been paid.

## The Hall at Hringstead

A trade in sworn men needs a place where the swearing can be witnessed, and the north had one. [[place-hringstead|Hringstead]], on the border of Nordheim and Vithgard, had been neutral ground since the [[affiliation-skaldscrcl|Skalds' Circle]] swore its first oath there, before any kingdom existed, and every king guaranteed it. About 560 the captains of the free companies met there and signed the **Compact**, the [[affiliation-malldbndlg|Málalidabandalag]] in the north's own speech: a captain swears his company before a council of nine, wears the _bandalagshringr_, the ring that marks him signed, and answers before the Council for his company's conduct under its oath. An employer who hires a signed company knows what it will and will not do. A company that breaks its oath is discharged by vote, its ring surrendered and its contracts dishonored, and no hall on either side of the water will hire it after.

The Compact-Hall was raised on the Circle's swearing-ground, and the two bodies have shared the place since: the Circle keeps the north's memory there, and the Compact keeps its word.

## What It Left

- **The Hall and the Truce.** On Compact-Hall ground every signed warrior is under truce, and to kill a man at Hringstead is an act for which there is no expiation.
- **The trade.** Thirty-four signed companies of any size answer to the Hall today, from twelve-sword scouting bands to a long-ship fellowship of nearly four hundred, and Nordmen serve in armies across the continent.
- **The empire's habit.** Vylarian frontier garrisons have carried Nordmen since, and a Nordman in imperial pay is an ordinary sight on the Vrystwald march and the western coast.
- **The cautionary tale.** The largest company the Hall ever signed, the Stormhand Brotherhood, was broken in Vrystwald about 692, and the Hall tells its story to every new captain.

A party that signs a small company into the Compact takes on the Council's law along with its contracts, and a captain who finds that the employer who hired his company is also the one it was hired against has a question only the Council of the Hall can answer.

## See Also

- [[affiliation-malldbndlg|Málalidabandalag]]—the Compact, its Council and its roll
- [[place-hringstead|Hringstead]]—the neutral ground and the Compact-Hall
- [[lore-southrnfleets|The Southern Fleets]]—the raids the hiring answered
- [[affiliation-vylarinmpr|Vylarian Empire]]—the employer
- [[lore-domseycount|The Dómsey Count]]—the age of the Hunger and the Fleets
