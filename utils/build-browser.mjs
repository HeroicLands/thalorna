/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */
import { build } from "esbuild";

await build({
    entryPoints: ["src/thalorna.mjs"],
    outfile: "build/browser/thalorna.mjs",
    bundle: true,
    platform: "browser",
    format: "esm",
    target: "es2022",
    legalComments: "inline",
});
