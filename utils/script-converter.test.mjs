/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";
import { build } from "esbuild";
import { stageAssets } from "@heroiclands/package-build/stage";
import { parseHTML } from "linkedom";
import YAML from "yaml";
import { encode, decode, checkRoman, validateData } from "@heroiclands/package-build/convert";
import {
    converterLanguages,
    makeScriptConverterApp,
    registerScriptConverter,
} from "../src/script-converter.mjs";

const alphabet = "thalorna-note-doc-alphabet";
const glyphs = "thalorna-note-doc-glyphs";
const data = {
    format: 2,
    contentPackage: "thalorna",
    encodings: {
        [alphabet]: {
            data: {
                language: "letters",
                font: "demo-script",
                mappings: { a: "A", b: "B" },
                rules: { normalization: "NFC", matching: "longest-first" },
            },
            codes: { A: "\uE000", B: "\uE001" },
        },
        [glyphs]: {
            data: {
                language: "signs",
                font: "demo-script",
                mappings: {},
                rules: { normalization: "NFC", matching: "longest-first" },
            },
            codes: { A: "\uE000", B: "\uE001" },
        },
    },
    languages: {
        letters: {
            name: "Letters <img src=x>",
            lexicon: {
                language: "letters",
                data: { words: [{ form: "ab", class: "n", gloss: "known" }] },
            },
        },
        signs: {
            name: "Signs",
            lexicon: {
                language: "signs",
                data: {
                    words: [
                        {
                            form: "first",
                            class: "n",
                            gloss: "first sense",
                            native: [{ enc: glyphs, text: "\uE000" }],
                        },
                        {
                            form: "later",
                            class: "n",
                            gloss: "later sense",
                            native: [{ enc: glyphs, text: "\uE000" }],
                        },
                    ],
                },
            },
        },
        unwritten: { name: "No script" },
    },
};

function environment(t) {
    const { document, window } = parseHTML("<html><body></body></html>");
    const globals = {
        document,
        foundry: { applications: { api: { ApplicationV2: class {} } } },
        game: { i18n: { localize: (key) => key }, settings: { registerMenu() {} } },
    };
    for (const [key, value] of Object.entries(globals)) {
        const original = Object.getOwnPropertyDescriptor(globalThis, key);
        Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
        t.after(() =>
            original ? Object.defineProperty(globalThis, key, original) : delete globalThis[key],
        );
    }
    return { document, window };
}
function choose(select, value, window) {
    for (const option of select.options) option.removeAttribute("selected");
    [...select.options].find((option) => option.value === value).setAttribute("selected", "");
    select.dispatchEvent(new window.Event("change"));
}

test("shared browser API handles alphabetic unknowns, logographic refusals and first-sense decoding", () => {
    validateData(data);
    const known = encode(data, "letters", "ab", { enc: alphabet });
    assert.equal(known.text, "\uE000\uE001");
    assert.equal(decode(data, "letters", known.text, { enc: alphabet }).text, "ab");
    const unknown = encode(data, "letters", "aa", { enc: alphabet });
    assert.equal(unknown.findings.length, 0);
    assert.equal(
        checkRoman(data, "letters", "aa", { enc: alphabet }).findings[0].kind,
        "unknown-word",
    );
    assert.match(
        decode(data, "letters", unknown.text, { enc: alphabet }).findings[0].message,
        /not in.*lexicon/,
    );
    assert.match(
        encode(data, "signs", "missing", { enc: glyphs }).findings[0].message,
        /no writing|not in.*encoding/,
    );
    assert.equal(decode(data, "signs", "\uE000", { enc: glyphs }).text, "first");
    assert.ok(decode(data, "signs", "\uE001", { enc: glyphs }).findings.length);
});

test("settings button is available to players under any system", (t) => {
    environment(t);
    let registered;
    game.settings.registerMenu = (...args) => {
        registered = args;
    };
    registerScriptConverter();
    assert.equal(registered[0], "thalorna");
    assert.equal(registered[1], "scriptConverter");
    assert.equal(registered[2].restricted, false);
    assert.ok(new registered[2].type() instanceof foundry.applications.api.ApplicationV2);
});

test("window requires language and encoding, renders native text, labels Roman lexical coordinates and copies exact output", async (t) => {
    const { document, window } = environment(t);
    let copied;
    const original = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    Object.defineProperty(globalThis, "navigator", {
        configurable: true,
        value: {
            clipboard: {
                writeText: async (text) => {
                    copied = text;
                },
            },
        },
    });
    t.after(() =>
        original ?
            Object.defineProperty(globalThis, "navigator", original)
        :   delete globalThis.navigator,
    );
    const App = makeScriptConverterApp({ loadData: async () => data });
    const app = new App();
    const panel = await app._renderHTML();
    const get = (role) => panel.querySelector(`[data-role=${role}]`);
    assert.deepEqual(
        converterLanguages(data).map((x) => x.id),
        ["letters", "signs"],
    );
    assert.equal(panel.querySelector("img"), null);
    assert.equal(get("encoding").disabled, true);
    choose(get("direction"), "encode", window);
    get("input").value = "aa";
    choose(get("language"), "letters", window);
    assert.equal(get("output").value, "");
    choose(get("encoding"), alphabet, window);
    assert.equal(get("output").value, "\uE000\uE000");
    assert.ok(get("output").classList.contains("hl-demo-script"));
    assert.match(
        get("findings").textContent,
        /romanCheck.*warning \(unknown-word\) 1:1:.*not a word.*lexicon/,
    );
    get("copy").click();
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(copied, "\uE000\uE000");
    choose(get("direction"), "decode", window);
    get("input").value = "\uE000\uE001";
    get("input").dispatchEvent(new window.Event("input"));
    assert.equal(get("output").value, "ab");
    assert.ok(get("input").classList.contains("hl-demo-script"));
    assert.equal(get("output").className, "");
    assert.equal(get("findings").textContent, "");
    choose(get("language"), "signs", window);
    assert.equal(get("output").value, "");
    assert.equal(get("encoding").value, "");
    const content = document.createElement("div");
    app._replaceHTML(panel, content);
    assert.equal(content.firstChild, panel);
});

test("Roman vocabulary reports original coordinates and explicitly distinguishes no lexicon", async (t) => {
    const { window } = environment(t);
    const noLexicon = structuredClone(data);
    delete noLexicon.languages.letters.lexicon;
    const App = makeScriptConverterApp({ loadData: async () => noLexicon });
    const panel = await new App()._renderHTML();
    const get = (role) => panel.querySelector(`[data-role=${role}]`);
    choose(get("language"), "letters", window);
    choose(get("encoding"), alphabet, window);
    get("input").value = "ab";
    get("input").dispatchEvent(new window.Event("input"));
    assert.equal(get("output").value, "\uE000\uE001");
    assert.match(get("findings").textContent, /vocabularyNotChecked/);
    const check = checkRoman(data, "letters", "ab\naa ⟦A⟧", { enc: alphabet });
    assert.equal(check.checked, true);
    assert.deepEqual(
        check.findings.map(({ kind, line, column, offset }) => ({ kind, line, column, offset })),
        [{ kind: "unknown-word", line: 2, column: 1, offset: 3 }],
    );
});

test("load errors are visible as text without executing supplied markup", async (t) => {
    environment(t);
    const App = makeScriptConverterApp({
        loadData: async () => {
            throw new Error("<img src=x>");
        },
    });
    const panel = await new App()._renderHTML();
    assert.match(panel.textContent, /loadError.*<img src=x>/);
    assert.equal(panel.querySelector("img"), null);
});

test("browser bundle registers settings despite absent calendar and manifest stages generated inputs", async (t) => {
    environment(t);
    let init;
    let menu;
    const previousHooks = globalThis.Hooks;
    const previousFetch = globalThis.fetch;
    globalThis.Hooks = {
        once: (event, callback) => {
            assert.equal(event, "init");
            init = callback;
        },
    };
    globalThis.fetch = async () => ({ ok: false, status: 404 });
    game.modules = new Map();
    game.settings.registerMenu = (...args) => {
        menu = args;
    };
    t.after(() => {
        globalThis.Hooks = previousHooks;
        globalThis.fetch = previousFetch;
    });
    const dir = await fs.realpath(
        await fs.mkdtemp(path.join(os.tmpdir(), "thalorna-converter-bundle-")),
    );
    t.after(() => fs.rm(dir, { recursive: true, force: true }));
    const outfile = path.join(dir, "thalorna.mjs");
    await build({
        entryPoints: ["src/thalorna.mjs"],
        outfile,
        bundle: true,
        platform: "browser",
        format: "esm",
        target: "es2022",
    });
    await import(pathToFileURL(outfile).href);
    init();
    assert.equal(menu[1], "scriptConverter");
    let dataUrl;
    globalThis.fetch = async (url) => {
        dataUrl = url.href;
        return { ok: true, json: async () => data };
    };
    const app = new menu[2].type();
    const panel = await app._renderHTML();
    assert.ok(panel.querySelector("[data-role=language]"));
    assert.equal(dataUrl, pathToFileURL(path.join(dir, "data/converter.json")).href);
    const staged = path.join(dir, "stage");
    assert.equal(
        stageAssets([
            [outfile, path.join(staged, "thalorna.mjs")],
            [path.resolve("src/script-converter.css"), path.join(staged, "script-converter.css")],
        ]).files,
        2,
    );
    assert.equal(
        await fs.readFile(path.join(staged, "thalorna.mjs"), "utf8"),
        await fs.readFile(outfile, "utf8"),
    );
    const previousConfig = globalThis.CONFIG;
    t.after(() => {
        globalThis.CONFIG = previousConfig;
    });
    const defaultCalendar = {};
    const commonCalendar = { name: "Common Calendar" };
    foundry.data = { SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG: defaultCalendar };
    globalThis.CONFIG = { time: { worldCalendarConfig: defaultCalendar } };
    globalThis.fetch = async () => ({ ok: true, json: async () => commonCalendar });
    await import(`${pathToFileURL(outfile).href}?calendar=default`);
    init();
    assert.equal(CONFIG.time.worldCalendarConfig, commonCalendar);
    const existingCalendar = { name: "World Calendar" };
    CONFIG.time.worldCalendarConfig = existingCalendar;
    await import(`${pathToFileURL(outfile).href}?calendar=existing`);
    init();
    assert.equal(CONFIG.time.worldCalendarConfig, existingCalendar);
    const config = YAML.parse(await fs.readFile("package-build.config.yaml", "utf8"));
    assert.equal(config.packageBuild.converterData, "data/converter.json");
    assert.ok(
        config.packageBuild.assets.some(
            (entry) => entry.from === "build/browser/thalorna.mjs" && entry.to === "thalorna.mjs",
        ),
    );
    assert.deepEqual(config.packageBuild.manifest.esmodules, ["thalorna.mjs"]);
    assert.ok(config.packageBuild.manifest.styles.includes("script-converter.css"));
    const pkg = JSON.parse(await fs.readFile("package.json", "utf8"));
    const buildDb = pkg.scripts["build:db"];
    const browserAt = buildDb.indexOf("npm run build:browser");
    const contentAt = buildDb.indexOf("package-build content build");
    assert.ok(browserAt >= 0 && contentAt >= 0);
    assert.ok(browserAt < contentAt);
});
