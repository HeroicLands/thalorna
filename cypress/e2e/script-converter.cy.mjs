/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */
const app = "#thalorna-script-converter";
const control = (role) => cy.get(`${app} [data-role=${role}]`);
let data;
const pageErrors = [];
const failedRequests = [];
const moduleLogs = [];

Cypress.on("window:before:load", (win) => {
    pageErrors.length = 0;
    failedRequests.length = 0;
    moduleLogs.length = 0;
    win.addEventListener("error", (event) =>
        pageErrors.push(`${event.message} ${event.filename}:${event.lineno}`.slice(0, 240)),
    );
    win.addEventListener("unhandledrejection", (event) =>
        pageErrors.push(`rejection ${String(event.reason)}`.slice(0, 240)),
    );
    const log = win.console.log;
    win.console.log = (...args) => {
        const line = args.map(String).join(" ");
        if (/thalorna \|/i.test(line)) moduleLogs.push(line.slice(0, 160));
        log.apply(win.console, args);
    };
    const report = win.console.error;
    win.console.error = (...args) => {
        pageErrors.push(`console ${args.map(String).join(" ")}`.slice(0, 240));
        report.apply(win.console, args);
    };
});

/** Wait for Foundry's game client; a timeout reports what the page shows. */
function gameReady() {
    cy.window({ timeout: 60000 }).should((win) => {
        const state = JSON.stringify({
            url: win.location.href,
            title: win.document.title,
            ready: win.game?.ready,
            keys: Object.keys(win.game ?? {}).slice(0, 12),
            text: (win.document.body?.innerText ?? "").replace(/\s+/g, " ").slice(0, 300),
            errors: pageErrors.slice(0, 6),
            failed: failedRequests.slice(0, 8),
        });
        expect(win.game?.ready, state).to.equal(true);
    });
}
function login() {
    cy.env(["gmPassword"], { log: false }).then(({ gmPassword }) =>
        cy
            .request({
                method: "POST",
                url: "/join",
                headers: {
                    "Sec-Fetch-Site": "same-origin",
                    Origin: new URL(Cypress.config("baseUrl")).origin,
                },
                body: {
                    action: "join",
                    userid: Cypress.expose("gmId"),
                    userId: Cypress.expose("gmId"),
                    password: gmPassword,
                },
                log: false,
            })
            .its("body.status")
            .should("eq", "success"),
    );
    cy.intercept("**", (req) => {
        req.on("response", (res) => {
            if (res.statusCode >= 400)
                failedRequests.push(`${res.statusCode} ${req.url}`.slice(0, 200));
        });
    });
    cy.visit("/game");
    cy.location("pathname").should("eq", "/game");
    gameReady();
    cy.window().then((win) => {
        expect(win.game.modules.get("thalorna").active).to.equal(true);
        expect(win.game.world.id).to.equal(Cypress.expose("worldId"));
        cy.writeFile("cypress/results/foundry.json", {
            foundry: win.game.version,
            system: { id: win.game.system.id, version: win.game.system.version },
            thalorna: win.game.modules.get("thalorna").version,
        });
    });
}
function open() {
    // Use Foundry's settings application and its registered menu button.
    cy.window({ timeout: 30000 }).should((win) => {
        const state = JSON.stringify({
            menus: [...win.game.settings.menus.keys()].slice(0, 20),
            active: win.game.modules.get("thalorna")?.active,
            ready: win.game.ready,
            errors: pageErrors.slice(0, 6),
            failed: failedRequests.slice(0, 8),
            moduleLogs: moduleLogs.slice(-6),
            scripts: win.performance
                .getEntriesByType("resource")
                .filter((r) => /thalorna/.test(r.name) && /\.m?js(?:\?|$)/.test(r.name))
                .map(
                    (r) =>
                        `${r.name.split("/").pop()} ${Math.round(r.startTime)}-${Math.round(r.responseEnd)}`,
                )
                .slice(0, 6),
            domContentLoaded: Math.round(
                win.performance.getEntriesByType("navigation")[0]?.domContentLoadedEventStart ?? -1,
            ),
            thalornaSettings: [...win.game.settings.settings.keys()]
                .filter((k) => k.startsWith("thalorna."))
                .slice(0, 6),
        });
        expect(win.game.settings.menus.has("thalorna.scriptConverter"), state).to.equal(true);
    });
    cy.window().then((win) => {
        const menu = win.game.settings.menus.get("thalorna.scriptConverter");
        expect(menu.restricted).to.equal(false);
        expect(menu.type.prototype).to.be.instanceOf(win.foundry.applications.api.ApplicationV2);
        win.game.settings.sheet.render(true);
    });
    // The settings window lists each package under its own category tab; select it
    // through the application so no other element can sit over the tab button.
    cy.get('[data-action="tab"][data-group="categories"][data-tab="thalorna"]', {
        timeout: 15000,
    }).should("exist");
    cy.window().then((win) => win.game.settings.sheet.changeTab("thalorna", "categories"));
    cy.get('[data-key="thalorna.scriptConverter"]', { timeout: 15000 }).click({
        scrollBehavior: "center",
    });
    cy.get(app).should("be.visible");
}
function select(language, font) {
    control("language").select(language);
    control("encoding").should("have.value", "");
    const id = Object.keys(data.encodings).find(
        (id) =>
            data.encodings[id].data.language === language && data.encodings[id].data.font === font,
    );
    expect(id, `${language} ${font} encoding`).to.be.a("string");
    control("encoding").select(id);
}
function input(text) {
    control("input").invoke("val", text).trigger("input");
}
function loadedNativeFont(role) {
    control(role)
        .then(async ($native) => {
            const element = $native[0];
            const win = element.ownerDocument.defaultView;
            const family = win.getComputedStyle(element).fontFamily.split(",")[0];
            const faces = await win.document.fonts.load(`24px ${family}`, element.value);
            expect(faces, `loaded native face ${family}`).not.to.be.empty;
            for (const face of faces) expect(face.status).to.equal("loaded");
            const fonts = win.performance
                .getEntriesByType("resource")
                .filter((r) => /\.woff2(?:\?|$)/.test(r.name));
            expect(fonts, "native font resources").not.to.be.empty;
            return fonts.map((r) => r.name);
        })
        .then((urls) => {
            for (const url of urls) cy.request(url).its("status").should("eq", 200);
        });
}

describe("Thalorna's installed script converter", () => {
    before(() => {
        cy.request("/modules/thalorna/data/converter.json")
            .its("body")
            .then((body) => {
                data = body;
                expect(data.format).to.equal(2);
            });
    });
    beforeEach(() => {
        login();
        open();
    });

    it("offers exactly the shipped languages and encodings, with explicit selection", () => {
        const languages = [...new Set(Object.values(data.encodings).map((e) => e.data.language))];
        control("language")
            .find("option")
            .then(($options) => {
                expect(
                    [...$options]
                        .map((o) => o.value)
                        .filter(Boolean)
                        .sort(),
                ).to.deep.equal(languages.sort());
                for (const option of [...$options].filter((o) => o.value))
                    expect(option.textContent).to.equal(data.languages[option.value].name);
            });
        control("encoding").should("be.disabled");
        for (const language of languages) {
            control("language").select(language);
            control("encoding")
                .should("have.value", "")
                .find("option")
                .then(($options) => {
                    const expected = Object.keys(data.encodings).filter(
                        (id) => data.encodings[id].data.language === language,
                    );
                    expect(
                        [...$options]
                            .map((o) => o.value)
                            .filter(Boolean)
                            .sort(),
                    ).to.deep.equal(expected.sort());
                });
            control("output").should("have.value", "");
            control("copy").should("be.disabled");
            for (const [id, encoding] of Object.entries(data.encodings).filter(
                ([, e]) => e.data.language === language,
            )) {
                control("encoding").select(id);
                control("output").should("have.class", `hl-${encoding.data.font}`);
            }
        }
    });

    it("reverses authentic Eilwithi and Zethu, loads native fonts and copies exact Unicode", () => {
        select("aelw", "semaron-kuriale");
        input("eksakt");
        control("output").should("not.have.value", "").and("have.class", "hl-semaron-kuriale");
        loadedNativeFont("output");
        control("output")
            .invoke("val")
            .then((native) => {
                control("direction").select("decode");
                input(native);
                control("output").should("have.value", "eksakt");
                control("input").should("have.class", "hl-semaron-kuriale");
            });
        select("khel", "khelathi-zethu-glyphs");
        control("direction").select("encode");
        input("ez");
        control("output").should("have.value", "𞭗").and("have.class", "hl-khelathi-zethu-glyphs");
        loadedNativeFont("output");
        cy.window().then((win) =>
            cy.stub(win.navigator.clipboard, "writeText").resolves().as("copy"),
        );
        control("copy").click();
        cy.get("@copy").should("have.been.calledOnceWithExactly", "𞭗");
        control("direction").select("decode");
        input("𞭗");
        control("output").should("have.value", "ez");
        cy.screenshot("thalorna-zethu-recovery");
    });

    it("checks original Roman vocabulary without changing lossy native output or conversion findings", () => {
        select("khel", "qalezu-hand");
        input("au");
        control("output")
            .invoke("val")
            .then((known) => {
                expect(known).not.to.equal("");
                control("findings").should("not.contain.text", "unknown-word");
                input("aaaaaaa");
                control("output").should("have.value", known);
                control("findings")
                    .should("contain.text", "warning (unknown-word) 1:1")
                    .and("contain.text", "aaaaaaa");
            });
        input("au\naaaaaaa ⟦NOT_A_CODE⟧");
        control("findings")
            .should("contain.text", "warning (unknown-word) 2:1")
            .and("contain.text", "error 2:10");
        cy.window().then((win) => {
            const messages = win.document.querySelector(`${app} [data-role=findings]`).textContent;
            expect(messages).to.include(win.game.i18n.localize("THALORNA.Converter.inputFinding"));
            expect(messages).to.include(win.game.i18n.localize("THALORNA.Converter.romanCheck"));
        });
        const unchecked = Object.entries(data.encodings).find(
            ([, e]) => !data.languages[e.data.language]?.lexicon,
        );
        expect(unchecked, "shipped script without a language lexicon").to.exist;
        const [, encoding] = unchecked;
        select(encoding.data.language, encoding.data.font);
        input(`⟦${Object.keys(encoding.codes)[0]}⟧`);
        cy.window().then((win) => {
            control("findings").should(
                "contain.text",
                win.game.i18n.localize("THALORNA.Converter.vocabularyNotChecked"),
            );
        });
        select("khel", "qalezu-hand");
        cy.window().then((win) =>
            cy.stub(win.navigator.clipboard, "writeText").rejects(new Error("denied")),
        );
        input("au");
        control("copy").click();
        cy.window().then((win) => {
            control("findings").should(
                "have.text",
                win.game.i18n.localize("THALORNA.Converter.copyError"),
            );
        });
    });
});

describe("Thalorna's installed script converter without its calendar", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/modules/thalorna/calendars/commoncal.json", {
            statusCode: 404,
            body: "",
        });
        login();
        open();
    });

    it("registers the real settings window when the calendar resource is unavailable", () => {
        control("language").find("option").should("have.length.greaterThan", 1);
    });
});
