/* SPDX-License-Identifier: GPL-3.0-or-later */

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import {
    collectProvenance,
    externalLooking,
    stageArtifact,
    validateSource,
    verifyArtifact,
    verifyCheckout,
} from "./historical-review.mjs";

function run(cwd, ...args) {
    const result = spawnSync("git", ["-C", cwd, ...args], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
}

async function scratch() {
    return fs.mkdtemp(path.join(os.tmpdir(), "thalorna-review-"));
}

/** A repository with a merged ancestor and an unmerged side commit. */
async function repository() {
    const root = await scratch();
    run(root, "init", "-q", "-b", "main");
    run(root, "config", "user.email", "a@example.org");
    run(root, "config", "user.name", "A");
    run(root, "config", "commit.gpgsign", "false");
    await fs.writeFile(path.join(root, "a"), "1");
    run(root, "add", "a");
    run(root, "commit", "-q", "-m", "first");
    const merged = run(root, "rev-parse", "HEAD");
    run(root, "switch", "-q", "-c", "topic");
    await fs.writeFile(path.join(root, "b"), "2");
    run(root, "add", "b");
    run(root, "commit", "-q", "-m", "side");
    const side = run(root, "rev-parse", "HEAD");
    run(root, "switch", "-q", "main");
    await fs.writeFile(path.join(root, "c"), "3");
    run(root, "add", "c");
    run(root, "commit", "-q", "-m", "second");
    run(root, "update-ref", "refs/remotes/origin/main", "main");
    return { root, merged, side, head: run(root, "rev-parse", "HEAD") };
}

test("a merged ancestor validates", async () => {
    const { root, merged, head } = await repository();
    try {
        assert.equal(validateSource(root, merged), merged);
        assert.equal(validateSource(root, head), head);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("malformed, unavailable and non-ancestor sources are rejected", async () => {
    const { root, side } = await repository();
    try {
        for (const bad of [
            "",
            "main",
            "abc123",
            "A".repeat(40),
            "g".repeat(40),
            "a".repeat(39),
            "a".repeat(41),
            undefined,
        ])
            assert.throws(() => validateSource(root, bad), /40-character/, String(bad));
        assert.throws(() => validateSource(root, "a".repeat(40)), /unavailable/);
        assert.throws(() => validateSource(root, side), /not an ancestor/);
        assert.throws(
            () => validateSource(root, side, { trusted: "origin/absent" }),
            /trusted history/,
        );
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("a checkout at another commit is rejected", async () => {
    const { root, merged, head } = await repository();
    try {
        assert.equal(verifyCheckout(root, head), head);
        assert.throws(() => verifyCheckout(root, merged), /checkout mismatch/);
        assert.throws(() => verifyCheckout(path.join(root, "absent"), head), /checkout mismatch/);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

const SHA = "5aaab64f666c8125b3039b25e5e16eac04c44c08";

/** A source tree with its toolchain installed and a built site. */
async function built({ fonts = true, toolchain = true, packageFonts = true } = {}) {
    const root = await scratch();
    const source = path.join(root, "source");
    const site = path.join(source, "build/site");
    await fs.mkdir(path.join(site, "thalorna/child"), { recursive: true });
    await fs.mkdir(path.join(site, "thalorna/fonts"), { recursive: true });
    await fs.writeFile(path.join(site, "_headers"), "/*\n  X-Robots-Tag: noindex\n");
    await fs.writeFile(
        path.join(site, "thalorna/index.html"),
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=X&display=swap">' +
            "<link href='//use.fontawesome.com/f.css' rel='preload stylesheet'>" +
            '<link rel="stylesheet" href="/local.css">' +
            '<link title="href=/local.css" rel=stylesheet href=https://example.com/fonts.css>' +
            '<link data-x="a>b" rel=stylesheet href=https://example.com/quoted.css>' +
            "<!-- <link rel=stylesheet href=https://fake.example.org/comment.css> -->" +
            '<a title="<link rel=stylesheet href=https://fake.example.org/attr.css>">a</a>' +
            '<script>"<link rel=stylesheet href=https://fake.example.org/script.css>"</script>' +
            '<style>@import url(https://example.com/inline.css);/* @import "https://fake.example.org/c.css"; */' +
            "p::after{content:\"@import 'https://fake.example.org/s.css'\"}</style>" +
            "<main>Landing</main>",
    );
    await fs.writeFile(path.join(site, "thalorna/child/index.html"), "<main>Child</main>");
    await fs.writeFile(
        path.join(site, "thalorna/404.html"),
        '<link data-href="https://example.com/x.css" rel="stylesheet" href="/local.css">' +
            "<link href=https://example.com/a.css rel=stylesheet><main>Missing</main>",
    );
    await fs.writeFile(
        path.join(site, "thalorna/site.css"),
        '@font-face{src:url("https://fonts.example.org/a.woff2?v=1")}' +
            "body{background:url(https://img.example.org/bg.png)}" +
            '@import url("https://fonts.example.org/imp.css");@import "https://x.example.org/q.css";' +
            "@import 'https://x.example.org/s.css';@import url(//example.com/b.css);" +
            '/* @import "https://fake.example.org/c.css"; src:url(https://fake.example.org/f.woff2) */' +
            ".q::before{content:\"/* @import 'https://fake.example.org/q.css'\"}" +
            '@import "https://x.example.org/after.css";',
    );
    if (fonts) await fs.writeFile(path.join(site, "thalorna/fonts/a.woff2"), "font bytes");
    await fs.writeFile(path.join(source, "package-lock.json"), "{}");
    if (toolchain) {
        const pkg = path.join(source, "node_modules/@heroiclands/package-build");
        await fs.mkdir(pkg, { recursive: true });
        await fs.writeFile(path.join(pkg, "package.json"), '{"version":"23.11.0"}');
    }
    if (packageFonts) {
        const pkg = path.join(source, "node_modules/@heroiclands/fonts");
        await fs.mkdir(pkg, { recursive: true });
        await fs.writeFile(path.join(pkg, "package.json"), '{"version":"1.4.1"}');
    }
    return { root, source, site };
}

const shas = { requested: SHA, validated: SHA, actual: SHA };

test("missing toolchain or font evidence is rejected", async () => {
    for (const [options, message] of [
        [{ toolchain: false }, /package-build is not installed/],
        [{ packageFonts: false }, /fonts is not installed/],
        [{ fonts: false }, /no font files/],
    ]) {
        const { root, source, site } = await built(options);
        try {
            await assert.rejects(
                collectProvenance({ sourceRoot: source, siteRoot: site, ...shas }),
                message,
            );
        } finally {
            await fs.rm(root, { recursive: true, force: true });
        }
    }
    const { root, source, site } = await built();
    try {
        await fs.unlink(path.join(source, "package-lock.json"));
        await assert.rejects(
            collectProvenance({ sourceRoot: source, siteRoot: site, ...shas }),
            /package-lock/,
        );
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("disagreeing SHAs are rejected", async () => {
    const { root, source, site } = await built();
    try {
        await assert.rejects(
            collectProvenance({
                sourceRoot: source,
                siteRoot: site,
                requested: SHA,
                validated: SHA,
                actual: "a".repeat(40),
            }),
            /inconsistent/,
        );
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("a complete build stages and verifies, and tampering is rejected", async () => {
    const { root, source, site } = await built();
    try {
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        assert.equal(provenance.minPages, 2);
        assert.equal(provenance.packageBuild.version, "23.11.0");
        assert.equal(provenance.fonts.version, "1.4.1");
        assert.equal(provenance.fonts.included.length, 1);
        assert.equal(provenance.externalFonts.verified, false);
        assert.equal(provenance.externalFonts.status, "unresolved");
        assert.deepEqual(provenance.externalFonts.inspected, { html: 3, css: 1, svg: 0, xml: 0 });
        assert.deepEqual(provenance.externalFonts.stylesheets, [
            "//use.fontawesome.com/f.css",
            "https://example.com/a.css",
            "https://example.com/fonts.css",
            "https://example.com/quoted.css",
            "https://fonts.googleapis.com/css2?family=X&display=swap",
        ]);
        assert.deepEqual(provenance.externalFonts.imports, [
            "//example.com/b.css",
            "https://example.com/inline.css",
            "https://fonts.example.org/imp.css",
            "https://x.example.org/after.css",
            "https://x.example.org/q.css",
            "https://x.example.org/s.css",
        ]);
        assert.deepEqual(provenance.externalFonts.fontUrls, [
            "https://fonts.example.org/a.woff2?v=1",
        ]);
        assert.ok(provenance.externalFonts.unparsed.length > 0);
        const stage = path.join(root, "review");
        await stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance });
        assert.deepEqual(await verifyArtifact(stage), { pages: 2, files: 6 });
        assert.deepEqual(await verifyArtifact(stage, { minPages: 2 }), { pages: 2, files: 6 });
        assert.equal(
            await fs.readFile(path.join(stage, "package-lock.json"), "utf8"),
            await fs.readFile(path.join(source, "package-lock.json"), "utf8"),
        );
        await fs.writeFile(path.join(stage, "package-lock.json"), '{"changed":true}');
        await assert.rejects(verifyArtifact(stage), /lockfile does not match/);
        await fs.writeFile(path.join(stage, "package-lock.json"), "{}");
        await assert.rejects(verifyArtifact(stage, { minPages: 3 }), /incomplete/);
        await fs.writeFile(path.join(stage, "site/thalorna/fonts/a.woff2"), "other");
        await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /manifest does not match/);
        await fs.writeFile(path.join(stage, "site/thalorna/fonts/a.woff2"), "font bytes");
        const file = path.join(stage, "provenance.json");
        const record = JSON.parse(await fs.readFile(file, "utf8"));
        record.actualSha = "b".repeat(40);
        await fs.writeFile(file, JSON.stringify(record));
        await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /SHAs disagree/);
        record.actualSha = SHA;
        const original = structuredClone(record.externalFonts);
        for (const change of [
            (e) => delete record.externalFonts,
            (e) => (e.status = "none-found"),
            (e) => (e.stylesheets = []),
            (e) => (e.stylesheets = e.stylesheets.filter((s) => !s.endsWith("/fonts.css"))),
            (e) => (e.stylesheets = e.stylesheets.filter((s) => !s.endsWith("/quoted.css"))),
            (e) => (e.imports = e.imports.filter((s) => !s.endsWith("/inline.css"))),
            (e) => (e.imports = e.imports.filter((s) => !s.endsWith("/after.css"))),
            (e) => e.imports.push("https://fake.example.org/c.css"),
            (e) => (e.imports = "x"),
            (e) => (e.inspected = {}),
            (e) => (e.inspected = { html: 3, css: 1 }),
            (e) => e.unparsed.pop(),
            (e) => delete e.unparsed,
            (e) => (e.unparsed = [{ file: 1, excerpt: "x" }]),
            (e) => delete e.unparsedTotal,
            (e) => (e.unparsedTotal += 1),
            (e) => (e.unparsedTotal = String(e.unparsedTotal)),
            (e) => delete e.truncated,
            (e) => (e.truncated = !e.truncated),
            (e) => (e.verified = true),
        ]) {
            record.externalFonts = structuredClone(original);
            change(record.externalFonts);
            await fs.writeFile(file, JSON.stringify(record));
            await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /external dependency/);
        }
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("a stylesheet behind quoted attribute text is recorded, and omitting it is rejected", async () => {
    for (const link of [
        '<link title="href=/local.css" rel=stylesheet href=https://example.com/fonts.css>',
        '<link data-x="a>b" rel=stylesheet href=https://example.com/fonts.css>',
        "<link title='rel=preload' rel=\"stylesheet\" data-y='>' href='https://example.com/fonts.css'>",
    ]) {
        const { root, source, site } = await built();
        try {
            await fs.writeFile(
                path.join(site, "thalorna/index.html"),
                `${link}<main>Landing</main>`,
            );
            await fs.writeFile(path.join(site, "thalorna/404.html"), "<main>Missing</main>");
            await fs.writeFile(path.join(site, "thalorna/site.css"), "body{margin:0}");
            const provenance = await collectProvenance({
                sourceRoot: source,
                siteRoot: site,
                ...shas,
                minPages: 2,
            });
            assert.equal(provenance.externalFonts.status, "unresolved", link);
            assert.deepEqual(provenance.externalFonts.stylesheets, [
                "https://example.com/fonts.css",
            ]);
            assert.deepEqual(provenance.externalFonts.imports, []);
            const stage = path.join(root, "review");
            await stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance });
            assert.deepEqual(await verifyArtifact(stage, { minPages: 2 }), { pages: 2, files: 6 });
            const file = path.join(stage, "provenance.json");
            const record = JSON.parse(await fs.readFile(file, "utf8"));
            record.externalFonts = {
                ...record.externalFonts,
                stylesheets: [],
                status: "none-found",
                note: "no external stylesheet, import or font URL appears in the inspected pages and styles",
            };
            await fs.writeFile(file, JSON.stringify(record));
            await assert.rejects(
                verifyArtifact(stage, { minPages: 2 }),
                /external dependency evidence does not match/,
                link,
            );
        } finally {
            await fs.rm(root, { recursive: true, force: true });
        }
    }
});

test("markup inside comments, scripts and strings is not a precise finding but fails closed", async () => {
    const { root, source, site } = await built();
    try {
        await fs.writeFile(
            path.join(site, "thalorna/index.html"),
            "<!-- <link rel=stylesheet href=https://fake.example.org/a.css> -->" +
                '<a title="<link rel=stylesheet href=https://fake.example.org/b.css>">a</a>' +
                "<script>'<link rel=stylesheet href=https://fake.example.org/c.css>'</script>" +
                '<style>/* @import "https://fake.example.org/d.css"; */</style>' +
                "<main>Landing</main>",
        );
        await fs.writeFile(path.join(site, "thalorna/404.html"), "<main>Missing</main>");
        await fs.writeFile(
            path.join(site, "thalorna/site.css"),
            '/* @import url(https://fake.example.org/e.css); */p::after{content:"@import \\"https://fake.example.org/f.css\\""}',
        );
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        assert.equal(provenance.externalFonts.status, "unresolved");
        assert.deepEqual(provenance.externalFonts.stylesheets, []);
        assert.deepEqual(provenance.externalFonts.imports, []);
        assert.deepEqual(provenance.externalFonts.fontUrls, []);
        assert.deepEqual(
            [...new Set(provenance.externalFonts.unparsed.map((entry) => entry.file))],
            ["thalorna/index.html", "thalorna/site.css"],
        );
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

/** The external dependency record of a site holding exactly these extra files. */
async function externalFor(files) {
    const { root, source, site } = await built();
    try {
        await fs.writeFile(path.join(site, "thalorna/index.html"), "<main>Landing</main>");
        await fs.writeFile(path.join(site, "thalorna/404.html"), "<main>Missing</main>");
        await fs.writeFile(path.join(site, "thalorna/site.css"), "body{margin:0}");
        for (const [name, text] of Object.entries(files))
            await fs.writeFile(path.join(site, "thalorna", name), text);
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        return provenance.externalFonts;
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
}

const DISGUISED = {
    "comment closers": [
        ["a.html", "<!--><link rel=stylesheet href=//evil.example/a.css><!-- -->"],
        ["a.html", "<!---><link rel=stylesheet href=//evil.example/a.css><!-- -->"],
        ["a.html", "<!-- a --!><link rel=stylesheet href=//evil.example/a.css><!-- -->"],
    ],
    "a base element": [
        ["a.html", '<base href="/x/"><link rel=stylesheet href=a.css>'],
        ["a.html", "<BASE href=x><style>@import 'a.css';</style>"],
        ["a.xhtml", '<h:base href="x"/><style>@font-face{src:url(a.woff2)}</style>'],
    ],
    "character references in attributes": [
        ["a.html", '<link rel=stylesheet href="&#47;&#47;evil.example/a.css">'],
        ["a.html", '<link rel=stylesheet href="https&colon;&#47;&#47;evil.example/a.css">'],
        ["a.html", '<link rel="style&#115;heet" href="/a.css?x=1&amp;y">'],
    ],
    "URLs the browser rewrites": [
        ["a.html", '<link rel=stylesheet href="/\t/evil.example/a.css">'],
        ["a.html", '<link rel=stylesheet href="/\n/evil.example/a.css">'],
        ["a.html", '<link rel=stylesheet href="\\\\evil.example/a.css">'],
        ["a.html", '<link rel=stylesheet href="/\\evil.example/a.css">'],
        ["a.html", '<link rel=stylesheet href="\u0001/x.css">'],
        ["a.html", '<link rel=stylesheet href="///evil.example/a.css">'],
    ],
    "raw text in foreign content and srcdoc": [
        ["a.html", "<svg><title><link rel=stylesheet href='&#47;/evil/a.css'></title></svg>"],
        ["a.html", "<svg><style><p></p><link rel=stylesheet href='\\\\evil/a.css'></style></svg>"],
        ["a.html", '<iframe srcdoc="<link rel=stylesheet href=/a.css>"></iframe>'],
    ],
    "CSS escapes": [
        ["a.css", '@import "\\2f\\2f evil.example/a.css";'],
        ["a.css", "@import url(\\2f\\2f evil.example/a.css);"],
        ["a.css", "@\\69mport 'a.css';"],
        ["a.css", "@font-face{src:url(/a.woff\\32)}"],
        ["a.css", "@font-face{src:u\\72l(/a.woff2)}"],
        ["a.css", "@import 'a.css' scr\\65 en;"],
    ],
    "a comment opener inside an unquoted url": [
        ["a.css", "@import url(/*);@import url(\\2f\\2f evil.example/a.css);"],
        ["a.css", "@font-face{src:url(/*)}@import url(%2f%2fevil.example/x/*/a.css);"],
    ],
    "fonts without a font extension or with a leading space": [
        ["a.css", "@font-face{src:url(//evil.example/font?id=1) format('woff2')}"],
        ["a.css", "@font-face{src:url(https://fonts.gstatic.com/l/font?kit=abc)}"],
        ["a.css", '@font-face{src:url(" /a.woff2")}'],
        ["a.css", "@font-face{src:url(data:font/woff2;base64,AAAA)}"],
    ],
    "pages in other file types": [
        ["a.htm", "<link rel=stylesheet href=//evil.example/a.css>"],
        ["a.xhtml", '<link rel="stylesheet" href="&#47;/evil.example/a.css"/>'],
        ["a.svg", "<svg><style>@import url(\\2f\\2f evil.example/a.css);</style></svg>"],
        ["a.xml", '<?xml-stylesheet href="//evil.example/a.css"?><a/>'],
    ],
    "a URL attribute name ending another attribute's value": [
        ["a.html", '<link rel=stylesheet title="x href=" href="&#47;&#47;evil/a.css">'],
        [
            "a.svg",
            '<?xml-stylesheet type="text/css" title="x href=" href="&#47;&#47;evil/a.css"?><svg/>',
        ],
    ],
    "data URLs of a markup type or in an href": [
        ["a.html", '<link rel=stylesheet href="data:text/css;base64,QGltcG9ydA==">'],
        ["a.html", '<link rel=stylesheet href="data:;base64,QGltcG9ydA==">'],
        ["a.html", '<iframe src="data:text/html;base64,PGxpbms+"></iframe>'],
        ["a.html", '<object data="DATA:image/svg+xml;base64,PHN2Zz4="></object>'],
        ["a.svg", '<?xml-stylesheet href="data:text/css,a{}"?><svg/>'],
    ],
    "character references in styles and entity declarations": [
        ["a.svg", "<svg><style>@&#105;mport 'a.css';</style></svg>"],
        ["a.xhtml", "<style>a{background:u&#x72;l(x)}</style>"],
        ["a.html", '<div style="--x:u&#114;l(&#47;&#47;evil/a.png)">x</div>'],
        ["a.svg", "<svg><style>a{font:&nbsp;x}</style></svg>"],
        ["a.svg", '<!DOCTYPE svg [<!ENTITY e "x">]><svg>&e;</svg>'],
    ],
    "a hex escape followed by CRLF": [
        ["a.css", "@font-face{src:u\\72\r\nl(\\2f\\2f evil/a.woff2)}"],
    ],
    "a meta refresh with a character reference": [
        ["a.html", '<meta http-equiv=refresh content="0;url=&#47;&#47;evil/">'],
    ],
    "a scheme without slashes": [
        ["a.html", '<link rel=stylesheet href="http:evil.example/a.css">'],
        ["a.css", "@import 'HTTPS:evil.example/a.css';"],
        ["a.css", "@import 'ftp:a.css';"],
    ],
};

test("a long run of adjacent hex escapes is scanned in linear time", () => {
    const script = String.raw`
        import { externalLooking } from ${JSON.stringify(new URL("./historical-review.mjs", import.meta.url).href)};
        const inputs = [
            "\\\\abcdef".repeat(5000),
            "\\abcdef".repeat(5000),
            "\\abcdefword".repeat(5000),
            "\\abcdef-w".repeat(5000) + "x",
            "u\\72l(" + "\\abcdef".repeat(5000),
        ];
        console.log(JSON.stringify(inputs.map((text) => externalLooking(text).length > 0)));
    `;
    const result = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
        encoding: "utf8",
        timeout: 5000,
    });
    assert.equal(result.error, undefined, String(result.error));
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout), [true, false, false, false, true]);
});

test("files in an encoding the scan does not read are unresolved", async () => {
    for (const [name, bytes] of [
        ["a.html", Buffer.from("\ufeff<link>", "utf16le")],
        ["a.html", Buffer.concat([Buffer.from([0xfe, 0xff]), Buffer.from("<p>")])],
        ["a.css", Buffer.from("a{}\0@import '//evil/a.css';")],
        ["a.svgz", Buffer.from([0x1f, 0x8b, 0x08, 0x00, 0x00])],
    ]) {
        const external = await externalFor({ [name]: bytes });
        assert.equal(external.status, "unresolved", name);
        assert.deepEqual(
            external.unparsed.filter((entry) => entry.file === `thalorna/${name}`),
            [{ file: `thalorna/${name}`, excerpt: "encoding not scanned" }],
        );
    }
});

for (const [group, cases] of Object.entries(DISGUISED))
    test(`${group} read unresolved`, async () => {
        for (const [name, text] of cases) {
            const external = await externalFor({ [name]: text });
            assert.equal(external.status, "unresolved", `${name}: ${text}`);
            assert.ok(
                external.unparsed.some((entry) => entry.file === `thalorna/${name}`),
                `${name}: ${text}`,
            );
        }
    });

test("a site with only local references reads none-found", async () => {
    const external = await externalFor({
        "index.html":
            "<!doctype html><html><head>" +
            '<link rel="stylesheet" href="/thalorna/site.css">' +
            "<link rel=icon href=favicon.png>" +
            "<style>@import 'local.css';@import url(\"../shared.css\");" +
            "@font-face{font-family:x;src:url(./fonts/a.woff2) format('woff2')}</style>" +
            '</head><body><a href="child/">Child</a><img src="/img/a.png" srcset="/img/a.png 1x">' +
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            '<use href="#i"/><rect fill="url(#g)"/></svg><main>Landing</main></body></html>',
        "head.html":
            '<meta http-equiv="content-type" content="text/html; charset=utf-8">' +
            '<p style="color:red">Fish &amp; chips</p><img src="data:image/png;base64,AAAA">',
        "site.css":
            "@font-face{src:url('/thalorna/fonts/a.woff2')}\r\nbody{background:url(bg.png)}",
        "icon.svg":
            '<svg xmlns="http://www.w3.org/2000/svg"><style>a&gt;b{fill:red}</style>' +
            '<path d="M0 0"/></svg>',
    });
    assert.equal(external.status, "none-found");
    assert.deepEqual(external.unparsed, []);
    assert.equal(external.unparsedTotal, 0);
    assert.equal(external.truncated, false);
    assert.deepEqual(external.inspected, { html: 4, css: 1, svg: 1, xml: 0 });
});

test("more hits than are kept are counted, and verify rejects an altered count", async () => {
    const { root, source, site } = await built();
    try {
        const bases = Array.from({ length: 150 }, (_, n) => `<base id=b${n}>`).join("\n");
        await fs.writeFile(path.join(site, "thalorna/index.html"), `${bases}<main>Landing</main>`);
        await fs.writeFile(path.join(site, "thalorna/404.html"), "<main>Missing</main>");
        await fs.writeFile(path.join(site, "thalorna/site.css"), "body{margin:0}");
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        const external = provenance.externalFonts;
        assert.equal(external.status, "unresolved");
        assert.equal(external.unparsed.length, 100);
        assert.equal(external.unparsedTotal, 150);
        assert.equal(external.truncated, true);
        const stage = path.join(root, "review");
        await stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance });
        assert.deepEqual(await verifyArtifact(stage, { minPages: 2 }), { pages: 2, files: 6 });
        const file = path.join(stage, "provenance.json");
        const record = JSON.parse(await fs.readFile(file, "utf8"));
        const original = structuredClone(record.externalFonts);
        for (const change of [
            (e) => (e.unparsedTotal = 100),
            (e) => (e.unparsedTotal = 151),
            (e) => (e.truncated = false),
            (e) => delete e.truncated,
            (e) => delete e.unparsedTotal,
        ]) {
            record.externalFonts = structuredClone(original);
            change(record.externalFonts);
            await fs.writeFile(file, JSON.stringify(record));
            await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /external dependency/);
        }
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("verify rejects a record that drops an unparsed entry", async () => {
    const { root, source, site } = await built();
    try {
        await fs.writeFile(
            path.join(site, "thalorna/index.html"),
            '<base href="/x/"><link rel=stylesheet href=a.css><main>Landing</main>',
        );
        await fs.writeFile(path.join(site, "thalorna/404.html"), "<main>Missing</main>");
        await fs.writeFile(path.join(site, "thalorna/site.css"), "body{margin:0}");
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        const external = provenance.externalFonts;
        assert.equal(external.status, "unresolved");
        assert.deepEqual(external.stylesheets, []);
        assert.deepEqual(external.unparsed, [
            {
                file: "thalorna/index.html",
                excerpt: '<base href="/x/"><link rel=stylesheet href=a.css><main>Landing</main>',
            },
        ]);
        const stage = path.join(root, "review");
        await stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance });
        assert.deepEqual(await verifyArtifact(stage, { minPages: 2 }), { pages: 2, files: 6 });
        const file = path.join(stage, "provenance.json");
        const record = JSON.parse(await fs.readFile(file, "utf8"));
        record.externalFonts.unparsed = [];
        await fs.writeFile(file, JSON.stringify(record));
        await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /lacks external dependency/);
        record.externalFonts.unparsedTotal = 0;
        await fs.writeFile(file, JSON.stringify(record));
        await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /does not match the pages/);
        record.externalFonts.status = "none-found";
        record.externalFonts.note =
            "no external-looking reference appears in the markup and CSS written in the inspected pages and styles; resources a script or XSLT inserts, headers the host sends and files of other types are not covered";
        await fs.writeFile(file, JSON.stringify(record));
        await assert.rejects(verifyArtifact(stage, { minPages: 2 }), /does not match the pages/);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("an incomplete site is never staged", async () => {
    const { root, source, site } = await built();
    try {
        const provenance = await collectProvenance({
            sourceRoot: source,
            siteRoot: site,
            ...shas,
            minPages: 2,
        });
        await fs.unlink(path.join(site, "thalorna/404.html"));
        const stage = path.join(root, "review");
        await assert.rejects(
            stageArtifact({ stage, sourceRoot: source, siteRoot: site, provenance }),
        );
        await assert.rejects(fs.stat(stage));
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("the workflow cannot publish: one job, no secrets, no dependents, hardened checkouts", async () => {
    const text = await fs.readFile(
        new URL("../.gitea/workflows/historical-review-pages.yml", import.meta.url),
        "utf8",
    );
    const workflow = parse(text);
    assert.deepEqual(Object.keys(workflow.on), ["workflow_dispatch"]);
    assert.deepEqual(workflow.permissions, { contents: "read" });
    assert.deepEqual(Object.keys(workflow.jobs), ["build"]);
    const job = workflow.jobs.build;
    assert.equal(job.needs, undefined);
    assert.equal(job.uses, undefined);
    assert.equal(job.secrets, undefined);
    assert.match(job.if, /refs\/heads\/main/);
    assert.ok(
        !/secrets\.|wrangler|pages deploy|PREVIEW_SSH|CLOUDFLARE|CDN_|deploy-internal/i.test(text),
    );
    assert.ok(!/\$\{\{\s*inputs\./.test(job.steps.map((step) => step.run ?? "").join("\n")));
    const checkouts = job.steps.filter((step) => step.uses?.startsWith("actions/checkout@"));
    assert.equal(checkouts.length, 2);
    for (const step of checkouts) assert.equal(step.with["persist-credentials"], false);
    const order = (needle) => job.steps.findIndex((step) => step.run?.includes(needle));
    const sourceCheckout = job.steps.indexOf(checkouts[1]);
    assert.ok(order("historical-review.mjs validate") < sourceCheckout);
    assert.ok(sourceCheckout < order("verify-checkout"));
    assert.ok(order("verify-checkout") < order("npm ci"));
    const install = job.steps.findIndex((step) => /npm ci/.test(step.run ?? ""));
    job.steps.forEach((step, index) => {
        if (/node --test/.test(step.run ?? "")) assert.ok(index > install, step.name);
    });
    const build = job.steps.find((step) => step.run?.includes("site build"));
    assert.match(build.env.NODE_OPTIONS, /--max-old-space-size=6144/);
    assert.equal(job["timeout-minutes"], 60);
    const upload = job.steps.findIndex((step) => step.uses?.startsWith("actions/upload-artifact@"));
    assert.equal(upload, job.steps.length - 1);
    assert.equal(job.steps[upload].if, undefined);
    assert.equal(job.steps[upload].with["if-no-files-found"], "error");
    assert.ok(order("historical-review.mjs verify review") < upload);
});

const CLI = fileURLToPath(new URL("./historical-review.mjs", import.meta.url));

function cli(env, ...args) {
    return spawnSync(process.execPath, [CLI, ...args], {
        encoding: "utf8",
        env: { PATH: process.env.PATH, ...env },
    });
}

test("the command line validates, records outputs and checks the workflow revision", async () => {
    const { root, merged, side, head } = await repository();
    const out = path.join(root, "..", `${path.basename(root)}-output`);
    try {
        let result = cli({ GITHUB_OUTPUT: out, TRUSTED_HEAD: head }, "validate", root, merged);
        assert.equal(result.status, 0, result.stderr);
        assert.match(await fs.readFile(out, "utf8"), new RegExp(`^validated=${merged}$`, "m"));
        result = cli({ GITHUB_OUTPUT: out }, "verify-checkout", root, head);
        assert.equal(result.status, 0, result.stderr);
        assert.match(await fs.readFile(out, "utf8"), new RegExp(`^actual=${head}$`, "m"));
        result = cli({ TRUSTED_HEAD: side }, "validate", root, merged);
        assert.equal(result.status, 1);
        assert.match(result.stderr, /workflow revision .* is not on/);
        result = cli({ TRUSTED_HEAD: "main" }, "validate", root, merged);
        assert.match(result.stderr, /workflow SHA must be/);
        result = cli({}, "validate", root, side);
        assert.match(result.stderr, /not an ancestor/);
        result = cli({}, "publish");
        assert.equal(result.status, 1);
        assert.match(result.stderr, /unknown historical review command: publish/);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
        await fs.rm(out, { force: true });
    }
});

test("the command line stages, verifies and parses MIN_PAGES", async () => {
    const { root, source, site } = await built();
    try {
        const stage = path.join(root, "review");
        let result = cli({ MIN_PAGES: "two" }, "verify", stage);
        assert.match(result.stderr, /MIN_PAGES must be a positive integer/);
        result = cli({ MIN_PAGES: "0" }, "verify", stage);
        assert.match(result.stderr, /MIN_PAGES must be a positive integer/);
        result = cli({ MIN_PAGES: "3" }, "stage", source, site, stage, SHA, SHA, SHA);
        assert.equal(result.status, 1);
        assert.match(result.stderr, /incomplete/);
        result = cli({ MIN_PAGES: "2" }, "stage", source, site, stage, SHA, SHA, SHA);
        assert.equal(result.status, 0, result.stderr);
        assert.equal(
            JSON.parse(await fs.readFile(path.join(stage, "provenance.json"))).minPages,
            2,
        );
        result = cli({}, "verify", stage);
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Verified 2 pages in 6 files/);
        result = cli({ MIN_PAGES: "3" }, "verify", stage);
        assert.equal(result.status, 1);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});
