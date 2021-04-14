"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPageCssString = void 0;
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
    var imports = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key], true));
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
    return isKeyframe
        ? finalString
        : imports + buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
}
function buildPageCssString(components, reset, globalStyles) {
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
