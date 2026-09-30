# Writing an Adventurer's Guide

An Adventurer's Guide is the **front door to a culture for players and GMs**. A reader should finish it with a feel for the place, a character who belongs there or has reason to visit, and several directions an adventure could take. The guide offers a way in; the setting notes hold the detail. The [Vedyara](Vedyara_Adventurers_Guide.md) and [Aû'Khelâthu](AuKhelathu_Adventurers_Guide.md) guides show how different cultures can meet that purpose in their own voices.

The _Sword Coast Adventurer's Guide_ is a model for the job: welcome a traveler, make the setting vivid, and connect its places and people to play. Draw on its approach to orientation and invitation, using original wording and Thalorna's own material.

## Voice

Write with the warmth and confidence of someone who knows the country and wants to show it to a newcomer. Start with a journey, an encounter, or a choice a character can picture. Put a temple hall, a toll gate, a workshop, or a flood crossing in view before explaining the institution behind it. Address the reader directly when it helps them choose a place or a role. Let each culture sound like itself.

Give the reader reasons to be curious. A useful paragraph says what makes a place distinctive **and** what a party might do there. Tension can be a disputed claim, a journey that needs a guide, a festival that gathers rivals, or an obligation someone cannot settle. Wonder and ordinary life matter too: food, craft, worship, learning, hospitality, and the rhythms of the year give characters something to care about.

Keep claims grounded in the corpus. A guide can suggest a possible adventure without declaring an unwritten event to be established fact. Describe a culture's beliefs as its people's beliefs where the wider world does not establish them as fact. Make room for local variation and for characters who disagree with their neighbors.

## The opening story

Begin with a story of someone encountering the land for the first time. Put it in second person and in a blockquote. Coming on a caravan, entering a town for the first time, crossing a ridge and seeing a valley; make the description vivid, sensory, enticing, with a palpable sense of excitement at reaching a new land. Give the reader the time of day and the quality of the light, the air on their skin, the smell and noise of the place, and the shape and color of its streets, buildings, and temples. Let the arrival lead into a working place with people in it: show what several people look like and wear, how they move through the crowd, and what they are doing. Ground these details in the culture and region notes; show variety among individuals rather than assigning one appearance or outfit to a whole people.

Let a local person welcome the traveler before asking for work or presenting a problem. Give that person a name and a visible presence. Have them introduce themselves as someone of that culture would, using a home, lineage, guild, office, or title when it fits; explain the local terms naturally in English so the reader understands the introduction as it happens. A greeting, a drink, or a meal can show the culture at work before the adventure begins. The opening story should stay brief—one or two paragraphs—and invite the reader onward.

If it makes sense, you may continue using the character from the story throughout the material to enhance or explain how someone foreign might experience the culture. Keep these passages in blockquotes too, so readers can distinguish the imagined encounter from the setting's general description.

## What the reader needs

- **A clear invitation.** Open with the place in motion and state the idea that makes life there distinct.
- **A map of choices.** Name the lands, settlements, roads, seasons, and borders that give parties different places to begin. Explain what changes from one to another.
- **People and institutions.** Show who holds authority, who offers work or shelter, and what a character owes to a household, guild, temple, ruler, or other community.
- **Culture in use.** Explain the customs, faith, language, money, and magic that affect an ordinary encounter or a character's decisions. Link to the full account for detail.
- **Ways into play.** Offer several grounded character ties and campaign starts. Give the GM a place, a claim on the party, and people with reasons to act. Put information meant only for the GM in a secret passage.
- **Paths onward.** Give major regions, polities, religions, institutions, and lineages clear routes from the guide. Include people and creatures where they belong in the setting, using a query for a complete list when the corpus has a reliable field to select them.

The guide should be enough to begin play. Detailed rosters, histories, procedures, and taxonomies belong in their own notes; the guide explains why a reader might want to follow them.

## The path through the corpus

Every note about a culture needs a navigable path from its guide, though every note need not appear on the guide's first page. Build the path through natural hubs:

| From the guide               | Follow onward to                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Region and route notes       | Lands, settlements, landmarks, neighboring regions, and the people and events tied to them |
| Culture and lore notes       | Customs, language, history, social roles, calendars, and other everyday knowledge          |
| Polities and affiliations    | Rulers, assemblies, temples, guilds, orders, and their members                             |
| Faith and magical traditions | Pantheons, deities, rites, schools, and practitioners                                      |
| People                       | Character dossiers, their homes, affiliations, and relationships                           |
| Starting situations          | Relevant adventures, creatures, gear, and other material when those notes exist            |

Use SQL queries for lists that the corpus can define from its own fields: regions and settlements by place type and folder, polities or lineages by affiliation type, and characters by `type: being`, the `character` tag, and `data.culture`. In a SQL query, write the culture as its complete four-part Address, such as `thalorna-note-lore-vedyariclt`; the content index stores Address fields in that form. A query picks up new notes without an editor copying a list into the guide. Show full notes to readers, rather than draft entries. Put direct links in prose when a particular place, person, or institution matters to the explanation, or when no reliable field selects the group. Do not use a name pattern or description search as a substitute for a real category.

Keep the guide readable as an introduction. A short account of a major region sits beside its route to the rest of that region's notes. A culture-filtered people list opens into character dossiers; those dossiers lead to homes, affiliations, and relationships. A creature belongs on the route through its region or lore when its note has no structured home to query. If a note has no path from the guide, add the link at the most natural point in that chain.

## Working from the source

Read the region, culture, affiliation, faith, and character notes before drafting a claim about them. Check the examples against those notes, including what they say about an outsider's first encounter. Write the invitation first; add enough explanation to make each choice intelligible; then link the reader to the full subject. Read the result once as a player choosing a character and once as a GM choosing a first situation.

Check the Markdown and content links with `npm run lint:markdown` and `npm run lint:content-links`. The latter needs the dependency content index from `npm run build:deps` in a fresh checkout.
