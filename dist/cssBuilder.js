"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlamStyles = exports.buildCssFromObject = void 0;
var utils_1 = require("./utils");
var tagNames_1 = require("./tagNames");
function buildPropertiesString(styles) {
    return Object.keys(styles).reduce(function (a, b) { return "" + a + utils_1.toKebabCase(b) + ":" + styles[b] + ";"; }, "");
}
function buildSelectorString(className, selector, properties) {
    return "" + className + selector + "{" + properties + "}";
}
function buildKeyframeString(keyframe, selectors) {
    return keyframe + "{" + selectors + "}";
}
function buildMediaQueryString(className, query, styleObject) {
    return query + "{" + buildCssFromObject(className, styleObject) + "}";
}
function buildCssFromObject(className, styles, isKeyframe) {
    var rootCss = {};
    var finalString = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key], true));
        }
        else if (/@media/.test(key)) {
            finalString += buildMediaQueryString(className, key, styles[key]);
        }
        else if (typeof styles[key] === "object") {
            var finalKey = "";
            finalKey += (tagNames_1.tagNames.includes(key) ? ">" : "") + key;
            finalString += buildCssFromObject("" + className + finalKey, styles[key]);
        }
        else {
            //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
            rootCss[key] = styles[key];
        }
    });
    return isKeyframe ? finalString : buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
}
exports.buildCssFromObject = buildCssFromObject;
function SlamStyles(arg) {
    return arg;
}
exports.SlamStyles = SlamStyles;
