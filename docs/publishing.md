# Publishing Thalorna

Building pages, publishing images and deploying pages are separate operations.
Pushes to `main` build for <https://www.internal.heroiclands.org/thalorna/> on
the LAN/VPN. Public deployment runs for `vMAJOR.MINOR.PATCH` release tags in
main's history, including prerelease suffixes, or emergency manual dispatches
from main/a release tag. Topic-branch dispatches are refused. Gitea's
`HL_DEPLOY_ENABLED` variable must be `true`; GitHub mirrors do not publish.

## Build and verify

Use Node 24 or newer, `npm ci`, and a normally published package-build release
supporting `site build --root`. The lockfile selects the installed toolchain;
no local package override is used. Fetch declared dependencies separately, then
choose the build's addresses explicitly:

```sh
npm run build:deps
node_modules/.bin/package-build site build --root internal.heroiclands.org
node_modules/.bin/package-build site build --root heroiclands.org
```

These are alternative builds of the same output directory, `build/site/thalorna/`,
with deployment-root `build/site/_headers`. The internal build uses
`https://www.internal.heroiclands.org` and `https://cdn.internal.heroiclands.org`;
the public build uses `https://www.heroiclands.org` and `https://cdn.heroiclands.org`.
Both preserve `/thalorna/` and leave the authored homepage, configuration and
content unchanged. Shared navigation, the license link and canonical CDN image
references follow the selected addresses through the toolchain's normal
resolver. External attribution and ordinary authored links keep their URLs.
Without an explicit root the site defaults to the internal www origin and
keeps the configured image host; CI always supplies the root.

`npm run build:site` fetches declared dependencies and performs the default
local build. For a release-address check, use the explicit public command above.
The build reads cached dependencies; it never downloads missing CDN images or
uploads pages or images. Fonts, their license, search files and the package 404
remain in the generated site tree.

Every workflow build runs in a fresh `ubuntu-vm` container with no SSH,
Cloudflare or R2 deployment secrets. It verifies the package prefix, nonempty
landing/404/root headers and at least 1,001 index pages. Root `_headers` retains
the theme's hostname-scoped noindex rules for Pages/custom package hosts.
The artifact contains only the generated page tree; an internal artifact also
contains the shared helper's byte-inventoried `publication.json`.

Run bounded fixtures for workflow/helper edits:

```sh
node --test utils/site-publication.test.mjs
npm run format:check -- .gitea/workflows/deploy-site.yml \
  .gitea/workflows/publish-cdn.yml utils/site-publication.mjs \
  utils/site-publication.test.mjs README.md CONTRIBUTING.md docs/publishing.md
npm run lint:markdown -- README.md CONTRIBUTING.md docs/publishing.md
```

These use synthetic pages and injected Cloudflare calls. They check trigger/root
selection, build/deployment separation, payload guards and the unchanged Pages
project without building the content corpus or publishing anything. Normal CI
supplies the full site gate.

## Deploy internal pages

The build job stages `publication/site/`, retaining `_headers` and the
`thalorna/` prefix. It checks out the trusted shared artifact tools at an
immutable merged revision `5d2db91909feba6a8c99013ac15c9a155f066445` on
`https://git.pupluppy.org` and calls their `manifest` command with package `thalorna`,
the event source SHA and page-count bounds. No package content or deployment
credential is needed to inventory the generated artifact.

The separate `internal` job calls
`HeroicLands/.github/.gitea/workflows/deploy-internal-site.yml` with the artifact
name, package, source SHA and the same bounds. It passes only the named
`PREVIEW_SSH_PRIVATE_KEY` secret. The shared job validates the complete artifact
before its credential-bearing step and runs no build command, package lifecycle
hook or script from the artifact. It uses the ordinary job token for read-only
Gitea ancestry queries.

The shared publisher owns the verified atlas ED25519 host pin, temporary SSH
identity, sender lock, cancellation cleanup and receiver contract. The owner
provisions `PREVIEW_SSH_PRIVATE_KEY` for atlas's restricted `preview-publish`
account. Its forced-rrsync receiver permits no remote shell. Publication sends
only `www/thalorna/`, with ordinary readable file modes, delayed updates and
delayed deletion. Sibling packages, `pr/` and shared `cdn/` stay outside the
transfer. Root `_headers` is validated but not copied to the receiver root;
Caddy does not interpret Pages headers files.

The publisher accepts `published receipt <= candidate <= current main` by
commit ancestry. A main build may finish after main advances, but cannot replace
a newer completed publication or publish divergent history. The protected
completion receipt at
<https://www.internal.heroiclands.org/thalorna/.preview-publication.json>
changes only after page transfer succeeds. It records package, source SHA,
build/publication times, selected base/CDN and page count. The shared publisher
requires an HTTPS readback naming that source SHA before reporting success; a
hidden, missing or mismatched completion receipt fails the job.

Publication replaces files individually. A failed transfer can leave updated
pages beside older pages; the previous receipt remains until a complete
transfer succeeds. Retry the same eligible source SHA to repair an interrupted
transfer. Workflow concurrency and the shared sender's persistent package lock
serialize the existing publication runner. Future independent senders need the
same destination coordination.

The [shared publishing contract](https://git.pupluppy.org/HeroicLands/.github/src/branch/main/docs/internal-site-publishing.md)
describes artifact validation, pinned host identity, monotonic history checks
and failure behavior in full. Authentication and live receiver behavior are
verified by deployment CI, beyond these local fixtures.

## Deploy public pages

Public builds retain the existing Cloudflare Pages project `sohl-thalorna`,
custom domain, Worker routing and `/thalorna/` payload. The separate public job
downloads the current run's artifact and repeats the prefix, landing, 404,
headers and completeness checks before any deployment credential is provided.
It executes trusted helper code checked out at the immutable event SHA.

The project lookup and pinned Wrangler action receive `CLOUDFLARE_API_TOKEN`
and `CLOUDFLARE_ACCOUNT_ID` only in their deployment steps. Missing credentials
retain the validated artifact and skip upload. Project creation keeps the same
`sohl-thalorna` identity and production branch `main`; changing that name would
leave the existing custom domain on another project.

For an emergency public update, manually dispatch the workflow at main or an
eligible release tag. It builds with the public root and uses the existing
Pages deployment. Inspect the workflow result before treating either internal
or public publication as complete.

## Publish images manually

The `publish-cdn.yml` workflow remains manual and independent of every site
job. Its `dest` choice defaults to `internal`; choose `cloudflare` for public
R2 publication. The default dry run lists the existing set/name and transformed
uploads without writing. Internal writes use the named
`PREVIEW_SSH_PRIVATE_KEY`; Cloudflare uses the named `CDN_ENDPOINT`,
`CDN_BUCKET`, `CDN_ACCESS_KEY_ID` and `CDN_SECRET_ACCESS_KEY` inputs. The shared
adapter supplies the pinned SSH alias for atlas's forced-rrsync destination.

The underlying commands are `package-build cdn publish --dest internal` and
`package-build cdn publish --dest cloudflare`, with the workflow's existing
set/name and dry-run options. Publish required images to the chosen CDN as an
explicit operation. Site builds and page deployment neither stage an automatic
asset closure nor fetch fallback images or start a CDN publication.
