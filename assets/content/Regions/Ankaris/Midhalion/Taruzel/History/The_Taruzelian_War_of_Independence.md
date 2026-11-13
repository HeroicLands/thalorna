---
shortcode: taruzelwar
name:
  full: The Taruzelian War of Independence
  en: [Taruzelian War of Independence, The War of Independence, The Taruzelian Secession]
type: lore
subType: history
description: "In 707 AF the merchant princes of Taruzel bankroll a rising against the Vilérian Empire; the harbor militias lose on land, Khelathi gold keeps the rebellion solvent, and a flotilla of armed traders and fishing boats closes the island channels to imperial shipping until the empire sends its largest squadron to open them."
tags: [history, taruzel, thecore]
data:
  culture: taruzelianclt
  packFolder: taruzel
  events:
    - id: war
      when: 707
      until: 708
      kind: war
      depth: region
      sources:
        - place-taruzelrgn
        - affiliation-cnfdrtntrzlnstts
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - affiliation-empireakhlth
        - affiliation-kngdmmrdd
        - lore-easternline
      summary: >-
        The merchant princes of Taruzel, refused a voice in the imperial Senate and squeezed by new tariffs, raise the harbors, the fishing villages and the hill tribes against the Vilérian Empire with broadsheets printed at guild expense. The legions win the first engagements, besiege Besikar and rout the militias on the coastal plains, and the hill auxiliaries of the old forts desert to the rebels. Au'Khelathu sends gold, weapons, naval stores and advisors under the name of commerce, Amradad helps across the strait, and a flotilla of armed traders, fishing boats and harbor craft cuts the convoys that supply the island garrisons until the empire sends its largest squadron to open the channels.
      standing: attested
      names:
        - {name: the War of Independence, by: affiliation-cnfdrtntrzlnstts}
        - {name: the Taruzelian secession, by: affiliation-vylarinmpr}
      where:
        locus: [place-taruzelrgn]
        reach:
          - place: place-taruzelrgn
            how: >-
              the broadsheets of the rising are still pinned on the walls of the veterans' halls, and the guild families who paid for it hold the harbors
            knowledge: named
          - place: place-aukhelathrgq
            how: >-
              Khelathi hulls pay reduced dues in every Taruzelian harbor, and nobody in either court says why
            knowledge: named
          - place: place-vylariargn
            how: >-
              the eastern trade comes to Vilérian harbors under Taruzelian dues, and the navy is being rebuilt
            knowledge: named
      who:
        - {ref: affiliation-cnfdrtntrzlnstts, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
        - {ref: affiliation-vylrnmltry, role: actor}
        - {ref: affiliation-empireakhlth, role: actor}
        - {ref: affiliation-kngdmmrdd, role: actor}
      follows:
        - event: lore-easternline
          how: enabled
          note: the hill horsemen the old line had trained and paid for a century deserted the forts to the rebels
      accounts:
        - by: affiliation-cnfdrtntrzlnstts
          says: >-
            The people of Taruzel rose against an empire that taxed them without a voice, and won their freedom with their own ships.
          agrees: partly
          withholds: the Khelathi gold, and that the guild families had settled who would govern before the fighting ended
        - by: affiliation-vylarinmpr
          says: >-
            A province of merchants bought a rebellion with foreign gold and took the eastern sea while the empire was pressed on its other borders.
          agrees: partly
          withholds: that the legions lost engagements on land they should have won
        - by: affiliation-empireakhlth
          says: >-
            The court traded with a troubled neighbor, as it trades with every harbor of the sea.
          agrees: disputes
      unresolved: ["how much Amradad gave the rebellion, and what it was promised in return"]

# terran_analog: "The Dutch Revolt and the American Revolution as merchants' rebellions carried by sailors and militias, with a foreign power's gold behind them. Departs: the war is short, it is won at sea by small craft, and its paymasters had settled the peace before the fighting ended."
---

A dock foreman of [[place-besikar2|Besikar]] who drilled with the harbor militia in the first spring of the war dates its beginning from the morning the customs house on the Grand Harbor burned. "The guilds had printed the broadsheets all winter," he says. "That morning somebody believed them." The Taruzelian War of Independence began in 707, and within two years it had ended the empire's rule over the islands of [[place-taruzelrgn|Taruzel Region]] and made the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]].

## Under the Empire

Taruzel was among the first lands the [Vilérian Republic]{.name data-type="affiliation/polity"} absorbed, and it was an old possession by the time the Republic became the [[affiliation-vylarinmpr|Vilérian Empire]] in Year 1. For centuries it was the empire's eastern anchor and its gateway to the trade of the [[affiliation-empireakhlth|Empire of Au'Khelathu]], Dunhara, the Khazrin and the lands beyond. Taruzelian harbors funneled eastern wealth into the imperial treasury, and Taruzelian ships carried Vilérian goods to markets the legions never reached.

The province was also restive. The city-states had been trading powers long before Viléria conquered them, and they never fully accepted the role of provincial subjects. Taruzelians paid their taxes, obeyed their _therkoi_ (governors) and sent their sons to the legions, and each generation did so with deeper resentment than the last.

## The Merchant Princes

As the empire's reach extended east and south, Taruzelian merchants became its indispensable intermediaries: they knew the languages, the sea routes, the customs and the contacts that Vilérian traders lacked. The great trading families of Besikar, [[place-yamuzel2|Yamuzel]] and [[place-bazunel2|Bazunel]] grew spectacularly wealthy. These **merchant princes** controlled the shipping lanes, the warehouses, the counting houses and the factors who made the eastern trade work. A Vilérian _therkos_ issued edicts; the merchant princes decided whether goods moved.

The imperial court answered with heavier taxation. New tariffs fell on Taruzelian exports, trade agreements were rewritten to favor Vilérian merchants, harbor fees rose, and customs inspections became more frequent and more expensive. The _therkos_'s office, once a sleepy posting for minor aristocrats, went to harder men with instructions to bring the merchant princes to heel. The Taruzelians had no seat in [[affiliation-seldan|The Vilérian Senate]] (Seldan), so they could contest none of it. A petition was ignored, and a bribe bought a season's relief before the next levy.

## The Broadsheets

The merchant princes began as lobbyists, petitioning for tax relief and seats in the Senate. When petitions failed they slowed the harbors, delayed shipments and let critical goods run short, and the empire answered with arrests, confiscations and more legions sent to "maintain order". At that point the princes decided to leave the empire, and since they had warehouses full of goods and no armies, they recruited a cause.

Broadsheets appeared in every harbor district, tavern and market square, printed at guild expense and signed "the people of Taruzel". They carried a broken chain, a rising sun, a ship under a Taruzelian flag and the words _we bleed gold for an empire that gives us nothing but chains_, and they spoke of a Taruzel that governed itself. The harbors were full of men who had loaded cargo all their lives for Vilérian factors, the fishing villages were full of families whose sons had been conscripted into imperial wars, and the hill tribes had endured decades of administrators who taxed their livestock and took their young men. The grievances were real, whatever the printers meant by them.

The militias that formed in the port cities drew on every class. Dock workers drilled beside ship captains, fishermen sharpened boarding pikes next to merchants' sons, and the tribes sent warriors down from the island hills who cared nothing for merchant politics and hated the empire. For one season Taruzel was united across class, country and culture.

## The War on Land

The legions garrisoned on the islands moved to crush the rising before it spread, and the first engagements went decisively their way. Besikar was besieged, an attempted blockade of Yamuzel was broken, and the militias were routed in three engagements on the coastal plains: brave, disorganized and no match for professional legions in open battle.

The hills went the other way. The ruined forts of [[lore-easternline|The Eastern Line]] still had garrisons of hill horsemen on the empire's pay, the sons of a century of auxiliaries, and in the first summer most of them rode out of the forts and joined their own tribes. The tribes harassed the imperial supply roads in country they knew, and a column that left the coast in the hills lost its baggage before it reached the next fort. They lacked the numbers to force a decision, and the merchant princes, who had expected a swift separation backed by economic pressure, found themselves financing a real war with real casualties.

## Foreign Hands

[[affiliation-empireakhlth|Au'Khelathu]] kept the rebellion alive. The merchant princes had sent envoys south at the start of the rising, and the Khelathi court received them with the elaborate hospitality that signals serious interest. An independent Taruzel would be a grateful trading partner with no reason to prefer Vilérian commerce, so the court supplied gold, weapons, naval stores and experienced advisors. Khelathi gold kept the rebellion solvent while the princes' own fortunes drained away, Khelathi steel armed militias that imperial confiscations had left short, and Khelathi naval advisors helped the captains turn their flotilla into something close to a fighting force.

None of it was acknowledged. The Khelathi court kept up the fiction of "humanitarian commerce" with a troubled neighbor, the merchant princes knew that foreign backing would spoil the story of Taruzelian self-determination, and the empire's protests were met with bland assurances that fooled nobody. The [[affiliation-kngdmmrdd|Kingdom of Amradad]], long antagonistic to Viléria, also helped across the strait, and the islands have kept cordial relations with the Kingdom since.

The first crisis of the war was financial. Taruzel's paper script was cleared through [[affiliation-tarmex|The Tarmeks Orzan]], the imperial treasury, and within weeks of the rising the Tarmeks froze the clearing accounts, so that moneylenders could not honor their own notes before the first engagement was fought. [[affiliation-vezakuni|The Council of the Guild-Wardens]] (the Vezakuni), founded by the rebels' council in the war's last weeks, and its treasury, the [[affiliation-merazuni|Merazuni]], are the islands' answer to that morning.

## The Flotilla

On the islands the legions depended on the sea, because the hill roads were too slow and too exposed to the tribes. The Taruzelian captains knew those waters better than any Vilérian admiral: the tides, the shoals, the hidden channels and the harbors where a shallow-draft vessel could shelter and a deep-keeled warship could not. Through the winter and the next spring they cut supply convoys and took troop transports, until no imperial ship went through the eastern sea without a heavy escort.

A flotilla fought that war. It was made of warships from the merchant fleets, armed traders, fishing boats with rams spiked to their bows and boarding planks on their decks, and harbor craft loaded with archers. Each was outmatched by the heavy warships of the Vilérian navy, but they were fast and numerous, and their captains knew every rock and current in the islands. They raided, retreated, drew imperial squadrons into unfamiliar water and refused the fleet engagement the empire wanted.

In the summer of 708 the empire sent the largest squadron it had ever gathered in the eastern sea to break the blockade of the island channels, and the flotilla met it at the [[place-tamzirshoals|Tamzir Shoals]]. The battle is told in [[lore-tamzirbattle|The Battle of Tamzir Shoals]], and what the merchant princes made of the victory in [[lore-taruzelbetrayal|The Betrayal of the Revolution]].

## What It Left {#what-it-left}

- **The broadsheets.** Printed by the guilds to raise a war and kept on the walls of the veterans' halls, where they are read as a promise.
- **The debt.** Khelathi gold the Confederation denies in public and repays in private, through reduced harbor fees and trade agreements that favor Khelathi hulls.
- **The empty forts.** The hill garrisons rode home and never came back, and the old military road is unmaintained.
- **A habit of small boats.** The fishing boats that carried rams in the war carry nets again, and the [[affiliation-corsairleg|Corsair League]] still hires their crews as pilots.

## See Also {#see-also}

[[lore-tamzirbattle|The Battle of Tamzir Shoals]]
: the battle that ended the war at sea

[[lore-taruzelbetrayal|The Betrayal of the Revolution]]
: the peace the merchant princes made

[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]
: the state the war founded

[[lore-easternline|The Eastern Line]]
: the hill forts whose garrisons changed sides
