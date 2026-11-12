/* Copyright (c) 2026 Tom Rodriguez ("Toasty")
 * SPDX-License-Identifier: GPL-3.0-or-later */

import { encode, decode, checkRoman, validateData } from "@heroiclands/package-build/convert";

const localize = (key) => game.i18n.localize(`THALORNA.Converter.${key}`);
let dataRequest;

/** Load the shipped format-2 inputs once; a failed request can be retried. */
export function loadConverterData() {
    return (dataRequest ??= fetch(new URL("data/converter.json", import.meta.url))
        .then((response) => {
            if (!response.ok) throw new Error(localize("loadError"));
            return response.json();
        })
        .then(validateData)
        .catch((error) => {
            dataRequest = undefined;
            throw error;
        }));
}

/** List only languages with executable encoding documents, without selecting one. */
export function converterLanguages(data) {
    const languages = new Set(
        Object.values(data.encodings).map((encoding) => encoding.data.language),
    );
    return [...languages]
        .map((id) => ({ id, name: data.languages[id].name }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

/** Foundry resolves ApplicationV2 when the settings menu is registered. */
export function makeScriptConverterApp({ loadData = loadConverterData } = {}) {
    return class ScriptConverter extends foundry.applications.api.ApplicationV2 {
        static DEFAULT_OPTIONS = {
            id: "thalorna-script-converter",
            classes: ["thalorna-script-converter"],
            window: { title: "THALORNA.Converter.title", icon: "fa-solid fa-language" },
            position: { width: 640, height: "auto" },
        };

        async _renderHTML() {
            const panel = document.createElement("section");
            let data;
            try {
                data = validateData(await loadData());
            } catch (error) {
                const message = document.createElement("p");
                message.role = "alert";
                message.textContent = `${localize("loadError")} ${error.message}`;
                panel.append(message);
                return panel;
            }
            const control = (role, tag, labelKey) => {
                const label = document.createElement("label");
                const caption = document.createElement("span");
                caption.textContent = localize(labelKey);
                const input = document.createElement(tag);
                input.dataset.role = role;
                label.append(caption, input);
                panel.append(label);
                return input;
            };
            const option = (select, value, name) => {
                const element = document.createElement("option");
                element.value = value;
                element.selected = select.options.length === 0;
                element.textContent = name;
                select.append(element);
            };
            const language = control("language", "select", "language");
            option(language, "", localize("chooseLanguage"));
            for (const entry of converterLanguages(data)) option(language, entry.id, entry.name);
            const encoding = control("encoding", "select", "encoding");
            option(encoding, "", localize("chooseEncoding"));
            encoding.disabled = true;
            const direction = control("direction", "select", "direction");
            option(direction, "encode", localize("toNative"));
            option(direction, "decode", localize("toRoman"));
            const input = control("input", "textarea", "input");
            input.rows = 5;
            input.spellcheck = false;
            const output = control("output", "textarea", "output");
            output.rows = 5;
            output.readOnly = true;
            output.spellcheck = false;
            const findings = document.createElement("ul");
            findings.dataset.role = "findings";
            findings.setAttribute("aria-live", "polite");
            panel.append(findings);
            const copy = document.createElement("button");
            copy.type = "button";
            copy.dataset.role = "copy";
            copy.textContent = localize("copy");
            copy.disabled = true;
            panel.append(copy);
            const show = (messages) => {
                findings.replaceChildren();
                for (const message of messages) {
                    const item = document.createElement("li");
                    item.textContent = message;
                    findings.append(item);
                }
            };
            const refresh = () => {
                input.className = output.className = "";
                output.value = "";
                copy.disabled = true;
                show([]);
                if (!language.value || !encoding.value) return;
                const font = data.encodings[encoding.value].data.font;
                const native = direction.value === "encode" ? output : input;
                native.classList.add(`hl-${font}`);
                if (!input.value) return;
                try {
                    const convert = direction.value === "encode" ? encode : decode;
                    const result = convert(data, language.value, input.value, {
                        enc: encoding.value,
                    });
                    output.value = result.text;
                    copy.disabled = !result.text;
                    const format = (finding, label) =>
                        `${localize(label)} ${finding.severity}${finding.kind ? ` (${finding.kind})` : ""} ${finding.line}:${finding.column}: ${finding.message}`;
                    const messages = result.findings.map((finding) =>
                        format(finding, "inputFinding"),
                    );
                    if (direction.value === "encode") {
                        const check = checkRoman(data, language.value, input.value, {
                            enc: encoding.value,
                        });
                        if (!check.checked) messages.push(localize("vocabularyNotChecked"));
                        messages.push(
                            ...check.findings.map((finding) => format(finding, "romanCheck")),
                        );
                    }
                    show(messages);
                } catch (error) {
                    show([error.message]);
                }
            };
            language.addEventListener("change", () => {
                encoding.replaceChildren();
                option(encoding, "", localize("chooseEncoding"));
                for (const [id, entry] of Object.entries(data.encodings)) {
                    if (entry.data.language !== language.value) continue;
                    option(
                        encoding,
                        id,
                        `${entry.data.font.replaceAll("-", " ")} (${id.split("-note-doc-").at(-1)})`,
                    );
                }
                encoding.disabled = !language.value;
                refresh();
            });
            encoding.addEventListener("change", refresh);
            direction.addEventListener("change", refresh);
            input.addEventListener("input", refresh);
            copy.addEventListener("click", async () => {
                try {
                    await navigator.clipboard.writeText(output.value);
                } catch {
                    show([localize("copyError")]);
                }
            });
            return panel;
        }

        _replaceHTML(result, content) {
            content.replaceChildren(result);
        }
    };
}

/** Offer the converter to every user, independently of the active game system. */
export function registerScriptConverter() {
    game.settings.registerMenu("thalorna", "scriptConverter", {
        name: "THALORNA.Converter.title",
        label: "THALORNA.Converter.open",
        hint: "THALORNA.Converter.hint",
        icon: "fa-solid fa-language",
        type: makeScriptConverterApp(),
        restricted: false,
    });
}
