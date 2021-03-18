"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCssFromObject = void 0;
var utils_1 = require("./utils");
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
            finalString += exports.buildCssFromObject("" + className + key, styles[key]);
        }
        else {
            //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
            rootCss[key] = styles[key];
        }
    });
    if (isKeyframe) {
        return finalString;
    }
    else {
        return generateSelectorString(className, "", generatePropertiesString(rootCss)) + finalString;
    }
};
exports.buildCssFromObject = buildCssFromObject;
