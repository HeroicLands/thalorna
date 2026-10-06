# Thalorna Module for Song of Heroic Lands

This module provides the necessary items, actors, and assets needed to play in the Thalorna setting for Song of Heroic Lands

## Building

```sh
npm ci
npm run build                # the whole module, from a clean install and an empty build/stage/
npm run build:stage-reset    # empty build/stage/; build/cache/ is kept
npm run build:content-index  # assets/content/ → build/content-index/
npm run build:calendars      # the content index → build/calendars/
npm run build:compiledb      # assets/content/ → build/stage/packs/{items,journals,actors}
npm run build:site-content   # assets/content/ → build/hugo/content/
npm run build:site           # the above, then Hugo → build/site/thalorna/
```

`npm run build` empties `build/stage/` before anything writes to it, so the
assembled package holds only what current sources produce; a renamed or deleted
asset leaves nothing behind. The individual `build:*` commands write into the
stage as it stands.

A plain checkout is all that is needed. There is no sibling repository to clone
and no `HEROICLANDS_VAULT` to set — this repository owns its content outright,
and everything it ships is generated from it.

## Content

Thalorna's notes are **source**, in [`assets/content/`](assets/content/README.md).
That README is the one to read before adding or editing a note: it covers the
frontmatter fields that carry identity, what makes a note compile into an item
rather than a journal, and how to write a link into another package.

Everything built from those notes — the compendium packs, the link manifest, and
the website — is generated output: the packs and the manifest land under
`build/`, the site under `build/hugo/content/` and `build/site/thalorna/`. All of
it is gitignored, and no compiled output is committed.

The pack compiler is [`@heroiclands/package-build`](https://www.npmjs.com/package/@heroiclands/package-build),
the shared toolchain every HeroicLands content package builds with. This
repository declares what is its own — the content package it compiles, the
Foundry package it ships, its pack list — in `package-build.config.yaml`, and
holds no copy of the compilers.

## Calendars

Five peoples in the setting keep their own reckoning, and each is a note in
`assets/content/` with `subType: calendar`. `npm run build:calendars` compiles
every one of them into `build/calendars/`, and the build stages that directory
into the module at `calendars/`. The notes are the source; nothing here is
edited by hand.

| Calendar               | File          | Kept by                                     |
| ---------------------- | ------------- | ------------------------------------------- |
| The Common Calendar    | `commoncal`   | Vylaria and the lands it reaches            |
| The Khelâthi Calendar  | `khprclndr`   | Aû'Khelâthu                                 |
| The Khazryn Calendar   | `khzrnclndr`  | The Khazryn kingdoms and the exile Mobadate |
| The Mādhavendra Count  | `mdhvndrcnt`  | Vedyara                                     |
| Calendar and Astrology | `clndrstrlgy` | The Empire of Tānvür                        |

Each calendar ships twice. `calendars/<file>.json` is Foundry's own calendar
shape, and `calendars/<file>.calendaria.json` is the same definition inside the
envelope the [Calendaria](https://foundryvtt.com/packages/calendaria) module's
settings importer reads, generated against import format **1.4.2**.

**A world with no calendar of its own gets the Common Calendar.** The module
sets it during `init`, and only when the world calendar is still Foundry's
Simplified Gregorian default — so a calendar another package has claimed is
left alone. Foundry then divides the year into Floralis through Janar, names
the week Newday through Setday, and marks the four seasons, and a world at time
zero opens on **1 Floralis of year 1**, where the calendar's own count begins.
The setting's present is year 720, so a campaign starting there sets the world
time forward.

The printed forms — _14 Taranis, 720 AF_ — come from the `formats` the notes
declare, which Calendaria reads and core does not. The era before year 1 counts
its years backwards and prints them as _330 BF_; it is an authoring convenience
and is left out of the Calendaria definition, which has no backwards-counting
era.

**Calendaria is optional and this module does not require it.** To use one of
these calendars inside Calendaria, open its settings, import
`modules/thalorna/calendars/<file>.calendaria.json`, and pick the calendar
there. The import files carry the same licence as the rest of this
repository's content, [CC BY-SA 4.0](LICENSE.md).

## Publishing to the website

This repository owns exactly one path on heroiclands.org — **`/thalorna`** — and
builds, renders and deploys the whole of it. Nothing else writes to that prefix,
and no other repository is in the path between these pages and their readers.

```sh
npm run build:site   # assets/content/ → build/hugo/content/ → build/site/thalorna/
npm run serve:site   # the same content step, then `hugo server` for a local preview
```

`build/hugo/` is the generated Hugo project: `package-build site` writes its
configuration and the content mount there, and the home page is rendered by
the theme's landing layout from `assets/content/homepage.md`. The shared theme
ships inside `@heroiclands/package-build`, which arrives through `npm ci`.
Nothing under `build/hugo/` is committed.

The `deploy-site.yml` workflow runs on every push to `main` and on manual
dispatch, with no path filter. It runs the tests under `utils/`, builds the
site, and checks that the 404 page, the deployment root's `_headers` and a
complete page tree were produced. When both `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` are set as repository secrets, it then creates the
`sohl-thalorna` Cloudflare Pages project if it does not exist and uploads the
build there. When either secret is missing, the workflow builds and verifies the
site and skips the upload.

### The address is written down once

`baseURL` for the generated Hugo site is `package.json`'s own `homepage`, and
`contentPackage` in
[`package-build.config.yaml`](package-build.config.yaml) is where the site build
is: a page publishes at `/<contentPackage>/<type>-<shortcode>/`, and `site.base`
overrides that prefix. Pointing both at another prefix — or at an origin of this
package's own — moves the whole site.

### The emitter is the toolchain's, entirely

`npm run build:site-content` is `package-build site`. This repository holds no
site code: the walk, the filter, the page writer and the wikilink resolver all
live in `@heroiclands/package-build`, and a fix to any of them is made there.

What the build does to a note:

- **Addresses** it as `type-shortcode`, and writes it flat: a page publishes at
  `/thalorna/<type>-<shortcode>/` whatever directory the note is filed in.
  The package root publishes the homepage at `/thalorna/`.
- **Expands** its fenced `sql` table directives — SQL run by DuckDB over the
  content index — against every published note.
- **Resolves** its wikilinks to site-local hrefs — the same authored links the
  pack compiler turns into Foundry `@UUID` enrichers.

The build emits **no redirects**. A note's alternative names live in
`name.aliases`, and they are names only: they publish no URL alias. A top-level
`aliases:` key is refused by the frontmatter check.
