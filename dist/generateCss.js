"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSS = exports.buildCssFromObject = void 0;
var utils_1 = require("./utils");
var tagNames_1 = require("./tagNames");
var generatePropertiesString = function (styles) {
    return Object.keys(styles).reduce(function (a, b) { return "" + a + utils_1.toKebabCase(b) + ":" + styles[b] + ";"; }, "");
};
var generateSelectorString = function (className, selector, properties) {
    return "" + className + selector + "{" + properties + "}";
};
var generateKeyframeString = function (keyframe, selectors) {
    return keyframe + "{" + selectors + "}";
};
var generateMediaQueryString = function (className, query, styleObject) {
    return query + "{" + exports.buildCssFromObject(className, styleObject) + "}";
};
var buildCssFromObject = function (className, styles, isKeyframe) {
    var rootCss = {};
    var finalString = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += generateKeyframeString(key, exports.buildCssFromObject(className, styles[key], true));
        }
        else if (/@media/.test(key)) {
            finalString += generateMediaQueryString(className, key, styles[key]);
        }
        else if (typeof styles[key] === "object") {
            var finalKey = "";
            finalKey += (tagNames_1.tagNames.includes(key) ? ">" : "") + key;
            finalString += exports.buildCssFromObject("" + className + finalKey, styles[key]);
        }
        else {
            //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
            rootCss[key] = styles[key];
        }
    });
    return isKeyframe
        ? finalString
        : generateSelectorString(className, "", generatePropertiesString(rootCss)) + finalString;
};
exports.buildCssFromObject = buildCssFromObject;
var CSS = function (arg) { return arg; };
exports.CSS = CSS;
