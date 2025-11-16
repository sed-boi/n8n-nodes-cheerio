"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheerio = void 0;
const cheerio = __importStar(require("cheerio"));
const n8n_workflow_1 = require("n8n-workflow");
class Cheerio {
    constructor() {
        this.description = {
            displayName: "Cheerio",
            name: "cheerio",
            icon: "file:cheerio.svg",
            group: ["transform"],
            version: 1,
            description: "Parse HTML using Cheerio",
            defaults: {
                name: "Cheerio",
            },
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            properties: [
                {
                    displayName: "HTML",
                    name: "html",
                    type: "string",
                    default: "",
                    placeholder: "<div>Example HTML</div>",
                    description: "The HTML to parse",
                    required: true,
                },
                {
                    displayName: "Selectors",
                    name: "selectors",
                    type: "fixedCollection",
                    typeOptions: {
                        multipleValues: true,
                        sortable: true,
                    },
                    placeholder: "Add Selector",
                    default: {},
                    options: [
                        {
                            name: "selectorValues",
                            displayName: "Selector",
                            values: [
                                {
                                    displayName: "Name",
                                    name: "name",
                                    type: "string",
                                    default: "",
                                    placeholder: "title",
                                    description: "Name for this selector",
                                    required: true,
                                },
                                {
                                    displayName: "CSS Selector",
                                    name: "selector",
                                    type: "string",
                                    default: "",
                                    placeholder: "h1.title",
                                    description: "CSS selector to find elements",
                                    required: true,
                                },
                                {
                                    displayName: "Attribute",
                                    name: "attribute",
                                    type: "string",
                                    default: "",
                                    placeholder: "class",
                                    description: "Attribute to extract. If not provided, the entire element will be returned",
                                    required: false,
                                },
                                {
                                    displayName: "Trim text value",
                                    name: "trimText",
                                    type: "boolean",
                                    default: true,
                                    description: "Remove new line and space characters",
                                },
                                {
                                    displayName: "Return Single Item",
                                    name: "singleItem",
                                    type: "boolean",
                                    default: false,
                                    description: "Whether to return only the first matching element",
                                },
                                {
                                    displayName: "Return HTML",
                                    name: "returnHTML",
                                    type: "boolean",
                                    default: false,
                                    description: "Return HTML instead of text. HTML tags will not be striped. Useful for further processing.",
                                },
                            ],
                        },
                    ],
                    description: "The CSS selectors to use",
                },
                {
                    displayName: "Remove Elements",
                    name: "removeElements",
                    type: "string",
                    default: "",
                    placeholder: "script, style, nav, footer",
                    description: "Comma-separated CSS selectors for elements to remove before parsing (e.g. 'script, style, nav, footer')",
                    required: false,
                },
            ],
        };
    }
    async execute() {
        var _a, _b;
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const html = this.getNodeParameter("html", i);
                const selectorsData = this.getNodeParameter("selectors.selectorValues", i, []);
                if (selectorsData.length === 0) {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), "At least one selector is required");
                }
                const removeElements = (_b = ((_a = this.getNodeParameter("removeElements", i, "")) !== null && _a !== void 0 ? _a : "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)) !== null && _b !== void 0 ? _b : [];
                const $ = cheerio.load(html);
                if (Array.isArray(removeElements) && removeElements.length > 0) {
                    const selectorsToRemove = removeElements.join(", ");
                    $(selectorsToRemove).remove();
                }
                const results = {};
                let totalElements = 0;
                for (const selectorData of selectorsData) {
                    const { name, selector, singleItem, attribute, trimText, returnHTML, } = selectorData;
                    const $elements = $(selector);
                    const elements = [];
                    $elements.each((_, el) => {
                        const elementValue = returnHTML ? $(el).html() : $(el).text();
                        const elementOrAttributeValue = attribute
                            ? $(el).attr(attribute)
                            : elementValue;
                        const value = trimText
                            ? elementOrAttributeValue === null || elementOrAttributeValue === void 0 ? void 0 : elementOrAttributeValue.trim()
                            : elementOrAttributeValue;
                        if (value) {
                            elements.push(value);
                        }
                    });
                    results[name] = singleItem ? elements[0] || "" : elements;
                    totalElements += elements.length;
                }
                const executionResults = {
                    results,
                    totalElements,
                    selectors: selectorsData.length,
                };
                returnData.push({
                    json: executionResults,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), `HTML parsing failed: ${error.message}`);
                }
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), "HTML parsing failed with an unknown error");
            }
        }
        return [returnData];
    }
}
exports.Cheerio = Cheerio;
//# sourceMappingURL=Cheerio.node.js.map