/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";
import { loadPackageBuildConfig } from "@heroiclands/package-build/config";
import { resolveE2EWorld } from "@heroiclands/package-build/e2e";
import { containerName } from "@heroiclands/package-build/container";
import cypress from "../cypress.config.mjs";

test("browser configuration uses the seeded module world and shared signed hostname", () => {
    const build = loadPackageBuildConfig();
    const world = resolveE2EWorld(build);
    assert.equal(cypress.expose.worldId, world.worldId);
    assert.equal(cypress.expose.gmId, world.gmId);
    assert.equal(cypress.env.gmPassword, world.gmPassword);
    assert.equal(
        containerName(build.packageId, build.e2eStage, build.containerName),
        "heroiclands-foundry-test",
    );
    assert.equal(build.packageKind, "modules");
    assert.equal(cypress.e2e.supportFile, false);
    assert.ok(cypress.e2e.viewportWidth >= 1366 && cypress.e2e.viewportHeight >= 768);
    assert.ok(cypress.e2e.defaultCommandTimeout >= 15000);
});

test("fresh run metadata is created by the real Cypress after-run callback", async () => {
    const previous = process.cwd();
    const directory = await fs.mkdtemp(path.join(os.tmpdir(), "thalorna-e2e-results-"));
    try {
        process.chdir(directory);
        const handlers = {};
        cypress.e2e.setupNodeEvents((event, callback) => {
            handlers[event] = callback;
        });
        assert.deepEqual(Object.keys(handlers).sort(), ["after:run", "before:browser:launch"]);
        handlers["after:run"]({
            totalTests: 4,
            totalPassed: 4,
            totalFailed: 0,
            browserVersion: "test-only",
        });
        const result = JSON.parse(await fs.readFile("cypress/results/run.json", "utf8"));
        assert.equal(result.totalTests, 4);
        assert.equal(result.totalFailed, 0);
        assert.equal(result.browserVersion, "test-only");
    } finally {
        process.chdir(previous);
        await fs.rm(directory, { recursive: true, force: true });
    }
});

test("a headless Chromium launch gets software WebGL, and other browsers are left alone", () => {
    const handlers = {};
    cypress.e2e.setupNodeEvents((event, callback) => {
        handlers[event] = callback;
    });
    const launch = (browser) => handlers["before:browser:launch"](browser, { args: [] }).args;
    assert.deepEqual(launch({ family: "chromium", isHeadless: true, name: "chrome" }), [
        "--use-gl=angle",
        "--use-angle=swiftshader",
        "--enable-unsafe-swiftshader",
        "--window-size=1920,1080",
    ]);
    assert.deepEqual(launch({ family: "chromium", isHeadless: true, name: "electron" }), []);
    assert.deepEqual(launch({ family: "chromium", isHeadless: false, name: "chrome" }), []);
    assert.deepEqual(launch({ family: "firefox", isHeadless: true, name: "firefox" }), []);
});

test("runner caller requires a deliberate ready request and stages the real package", async () => {
    const workflow = YAML.parse(await fs.readFile(".gitea/workflows/e2e-full.yml", "utf8"));
    assert.ok(Object.hasOwn(workflow.on, "workflow_dispatch"));
    assert.ok(!workflow.on.schedule);
    const job = workflow.jobs["full-e2e"];
    assert.match(workflow.jobs.requested.if, /ci\/e2e/);
    assert.equal(job.needs, "requested");
    assert.match(job.if, /needs.requested.outputs.run/);
    assert.match(job.if, /!startsWith.*WIP:/);
    assert.match(
        job.uses,
        /^HeroicLands\/\.github\/\.gitea\/workflows\/e2e-full.yml@[a-f0-9]{40}$/,
    );
    assert.deepEqual(job.with, { package: "thalorna", "build-script": "build:noci" });
    const build = loadPackageBuildConfig();
    assert.deepEqual(build.e2eSuite.run, ["npx", "cypress", "run"]);
    assert.deepEqual(build.e2eResults, ["cypress/results"]);
});
