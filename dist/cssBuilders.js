"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPageCssString = exports.buildCssFromObject = exports.buildMediaQueryString = exports.buildSelectorString = exports.buildPropertiesString = void 0;
var utils_1 = require("./utils");
var tagNames_1 = require("./tagNames");
function buildPropertiesString(styles) {
    return Object.keys(styles).reduce(function (a, b) { return "" + a + utils_1.toKebabCase(b) + ":" + styles[b] + ";"; }, "");
}
exports.buildPropertiesString = buildPropertiesString;
function buildSelectorString(className, properties) {
    return className + "{" + properties + "}";
}
exports.buildSelectorString = buildSelectorString;
function buildMediaQueryString(className, query, styleObject) {
    return query + "{" + buildCssFromObject(className, styleObject) + "}";
}
exports.buildMediaQueryString = buildMediaQueryString;
function buildCssFromObject(className, styles, isKeyframe) {
    var rootCss = {};
    var finalString = "";
    var imports = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += buildSelectorString(key, buildCssFromObject("", styles[key], true));
        }
        else if (/@media/.test(key)) {
            finalString += buildMediaQueryString(className, key, styles[key]);
        }
        else if (/@import/.test(key)) {
            imports += "@import url(" + styles[key] + ");";
        }
        else if (typeof styles[key] === "object") {
            var finalKey = "";
            if (className) {
                finalKey += (tagNames_1.tagNames.includes(key) ? ">" : "") + key;
            }
            else {
                finalKey = key;
            }
            finalString += buildCssFromObject("" + className + finalKey, styles[key]);
        }
        else {
            rootCss[key] = styles[key];
        }
    });
    var rootCssBuild = buildPropertiesString(rootCss);
    if (!isKeyframe) {
        if (rootCssBuild) {
            finalString = imports + buildSelectorString(className, buildPropertiesString(rootCss)) + finalString;
        }
        else {
            finalString = imports + finalString;
        }
    }
    return finalString;
}
exports.buildCssFromObject = buildCssFromObject;
function buildPageCssString(components, globalStyles) {
    var build = "";
    build += globalStyles ? buildCssFromObject("", globalStyles) : "";
    Object.keys(components).forEach(function (key) {
        var _a;
        var css = (_a = components[parseInt(key)][0].atts) === null || _a === void 0 ? void 0 : _a.css;
        build += css ? buildCssFromObject(".c" + key, css) : "";
    });
    return build;
}
exports.buildPageCssString = buildPageCssString;
