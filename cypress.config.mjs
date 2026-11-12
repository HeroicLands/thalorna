/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */
import fs from "node:fs";
import { defineConfig } from "cypress";
import { loadPackageBuildConfig } from "@heroiclands/package-build/config";
import { resolveStagePort } from "@heroiclands/package-build/container";
import { resolveE2EWorld } from "@heroiclands/package-build/e2e";

// Match the harness's file precedence without exposing credentials to specs.
for (const file of [".env.local", ".env"]) {
    try {
        process.loadEnvFile(file);
    } catch (error) {
        if (error.code !== "ENOENT") throw error;
    }
}
const build = loadPackageBuildConfig();
const port = resolveStagePort(build.e2eStage, { stages: build.containerStages });
const { worldId, gmId, gmPassword } = resolveE2EWorld(build);

export default defineConfig({
    expose: { worldId, gmId },
    env: { gmPassword },
    video: false,
    e2e: {
        baseUrl: `http://localhost:${port}`,
        // Foundry renders its windows slowly under the headless browser.
        defaultCommandTimeout: 30000,
        // Foundry raises a permanent error notification below its minimum window size.
        viewportWidth: 1920,
        viewportHeight: 1080,
        supportFile: false,
        specPattern: "cypress/e2e/**/*.cy.mjs",
        fixturesFolder: false,
        setupNodeEvents(on) {
            // Foundry draws with WebGL; a headless browser has none without software rendering.
            on("before:browser:launch", (browser, launchOptions) => {
                if (
                    browser.family === "chromium" &&
                    browser.isHeadless &&
                    browser.name !== "electron"
                ) {
                    launchOptions.args.push(
                        "--use-gl=angle",
                        "--use-angle=swiftshader",
                        "--enable-unsafe-swiftshader",
                        "--window-size=1920,1080",
                    );
                }
                return launchOptions;
            });
            on("after:run", (result) => {
                // The shared harness rejects a successful run without fresh evidence.
                fs.mkdirSync("cypress/results", { recursive: true });
                fs.writeFileSync(
                    "cypress/results/run.json",
                    JSON.stringify({
                        startedTestsAt: result.startedTestsAt,
                        totalTests: result.totalTests,
                        totalPassed: result.totalPassed,
                        totalFailed: result.totalFailed,
                        browserVersion: result.browserVersion,
                        cypressVersion: result.cypressVersion,
                    }),
                );
            });
        },
    },
});
