# Script converter

Open **Game Settings → Configure Settings → Thalorna Setting → Open Converter**.
The converter is available to every player under any game system.

Choose a language, then an encoding. Each encoding selects its script and face;
choose explicitly even when a language has one encoding. Languages with encoding
documents appear in the list. Choose **Roman to native script** or **Native script
to Roman**, then type or paste into **Input**. The **Result** updates as you type.
Native text uses the selected face. **Copy result** copies its Unicode characters;
the receiving application needs the same font to display them. If clipboard
access fails, select and copy the result manually.

The shared converter uses the language's lexicon to recover Roman spellings.
Zethu readings with more than one sense use the shared converter's first reading.
Ambiguous Roman writings and unsupported characters show their own findings.
Encoding checks the original Roman input against the shared lexicon, independently
of conversion. **Roman input vocabulary** warnings locate unknown words in that
input, including words whose native writing matches a known word. A language
without a lexicon explicitly reports **Vocabulary not checked**. Conversion
findings retain their severity, kind and input line/column; vocabulary warnings
never replace the requested output. Native-to-Roman conversion retains the shared
decoder's lexical recovery and findings.

For a logographic script, a word needs a native writing in the lexicon. Literal
font codes inside `⟦` and `⟧` use the selected encoding's supported codes. Consult
[Writing in the tongues of Thalorna](writing-in-the-tongues.md) for spelling,
encoding documents and native passages. The converter reports unknown words and
signs; it does not invent their spelling or meaning.

## Building the module

`npm run build:browser` bundles the module entry and package-build's browser
converter into `build/browser/thalorna.mjs`. `npm run build:module` builds that
bundle and writes the manifest and format-2 inputs to
`build/stage/data/converter.json`. The content build (`npm run build:db`) creates the
browser bundle before it builds and stages the content. Generated bundles and
converter data remain under `build/` and are included in the installed module.
The manifest stages the fonts used by the encoding documents. Conversion rules
and lexical inputs come from the same notes as the setting's other outputs;
there is no separate converter dictionary.

## Verify the installed window

The Thalorna-owned Cypress suite runs through the shared package-build harness.
After installing the normal published dependency and building the genuine stage,
run `npm run e2e:full`. The harness deploys only Thalorna, seeds and enables it in
a disposable module world, recreates the container, waits for that world and
stops the container after the suite. The supporting released system must already
be installed in the isolated test data root. These tests exercise Thalorna;
they do not run the supporting system's test suite.

For scoped iterations after the initial stage exists, use
`npm run e2e:fast -- --build=module,assets -- --spec cypress/e2e/script-converter.cy.mjs`.
The module target rebuilds the bundle and manifest and requests recreation.
`npm run e2e:open` opens the same repository suite interactively. Keep lifecycle
operations inside this harness.

The Gitea **Thalorna Foundry e2e** workflow supports manual dispatch and ready
pull requests labeled `ci/e2e`. It calls the pinned shared workflow on the single
serialized e2e runner. That runner supplies port 30013, the Docker socket, shared
signed test data and caches. The supported `container.name: heroiclands-foundry`
preserves the signed hostname. A trusted administrator provisions
`$HL_E2E_SECRETS/thalorna.env.local` as a runner-owned file with mode 0600; the
workflow copies it privately into the checkout and removes the copy afterward.
Never commit or print credentials. See package-build's **Test a package in
Foundry** guide for local settings, license and account variables. The repository
configuration resolves port and seeded GM credentials through the same APIs as
the harness.

The suite checks the real settings button and ApplicationV2 window, every offered
language/encoding against installed converter data, explicit selection, authentic
Eilwithi and Zethu examples, Roman vocabulary, native fonts and font requests,
Unicode clipboard binding and localized clipboard rejection, and registration
when the calendar resource is unavailable. Clipboard operations are stubbed to
avoid writing the host clipboard. Browser exceptions are not suppressed.
`cypress/results/` records fresh run totals and actual Foundry/system/module
versions; failure screenshots remain under `cypress/screenshots/`. The reusable
workflow retains evidence as Actions artifacts. A DOM or bundle test alone does
not establish that this installed-window suite passed.
