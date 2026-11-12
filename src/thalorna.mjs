/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Entry point for the Thalorna Setting module.
 *
 * This module is almost entirely content: its packs are compiled from
 * `assets/content/` at build time and Foundry loads them from `module.json`
 * without any code running. Code offers the Common Calendar to a world
 * that has no calendar of its own, and a script converter in module settings.
 *
 * It is deliberately usable **without** Song of Heroic Lands. The Item and
 * Actor packs are system-specific and Foundry hides them outside SoHL, but the
 * Journal, Macro and Scene packs are setting material that any system can use,
 * so they carry no system of their own. Running under another system is a
 * supported configuration, not an error — nothing here warns about it.
 */

import { registerScriptConverter } from "./script-converter.mjs";

/** This module's Foundry id — the `name` of `package.json`, which the generated
 * `module.json` takes its `id` from. */
const MODULE_ID = "thalorna";

/**
 * The Common Calendar's Foundry definition, staged beside this file by the
 * build from `assets/content/.../The_Vilerian_Calendar.md`.
 *
 * Resolved against `import.meta.url` so it carries whatever route prefix the
 * server is mounted under. The fetch is not awaited: a module script's
 * top-level `await` does not hold back `DOMContentLoaded`, so Foundry can
 * dispatch `init` before the fetch settles, and a hook registered after the
 * `await` would never run. Every hook is registered synchronously, and the
 * calendar is applied by whichever of `init` and the fetch comes last.
 */
let worldCalendar = null;
let initialised = false;
let calendarApplied = false;

/** Set the world calendar once `init` has run and the definition has arrived. */
function applyWorldCalendar() {
    if (!initialised || !worldCalendar || calendarApplied) return;
    calendarApplied = true;
    // A world that has a calendar keeps it. Foundry's own default is the only
    // value this module overwrites, so whichever calendar module ran first
    // holds the slot, and one that runs after this overwrites it in turn.
    if (CONFIG.time.worldCalendarConfig !== foundry.data.SIMPLIFIED_GREGORIAN_CALENDAR_CONFIG) {
        console.log(`${MODULE_ID} | another package has set the world calendar; leaving it`);
        return;
    }
    CONFIG.time.worldCalendarConfig = worldCalendar;
    console.log(`${MODULE_ID} | world calendar set to ${worldCalendar.name}`);
}

fetch(new URL("calendars/commoncal.json", import.meta.url))
    .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
    .then((calendar) => {
        worldCalendar = calendar;
        applyWorldCalendar();
    })
    .catch((reason) => {
        console.error(`${MODULE_ID} | Common Calendar unavailable (${reason})`);
    });

Hooks.once("init", () => {
    registerScriptConverter();
    const module = game.modules.get(MODULE_ID);
    console.log(`${MODULE_ID} | Thalorna Setting ${module?.version} initializing`);
    initialised = true;
    applyWorldCalendar();
});
