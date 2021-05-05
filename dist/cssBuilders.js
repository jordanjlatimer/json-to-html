"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPageCss = exports.buildCss = exports.buildMediaQuery = exports.buildSelector = exports.buildProperties = void 0;
var tagNames_1 = require("./tagNames");
var utils_1 = require("./utils");
function buildProperties(styles) {
    return Object.keys(styles).reduce(function (a, b) { return "" + a + utils_1.toKebabCase(b) + ":" + styles[b] + ";"; }, "");
}
exports.buildProperties = buildProperties;
function buildSelector(className, properties) {
    return className + "{" + properties + "}";
}
exports.buildSelector = buildSelector;
function buildMediaQuery(className, query, styleObject) {
    return query + "{" + buildCss(className, styleObject) + "}";
}
exports.buildMediaQuery = buildMediaQuery;
function buildCss(className, styles, isKeyframe) {
    var rootCss = {};
    var finalString = "";
    var imports = "";
    Object.keys(styles).forEach(function (key) {
        if (/@keyframes/.test(key)) {
            finalString += buildSelector(key, buildCss("", styles[key], true));
        }
        else if (/@media/.test(key)) {
            finalString += buildMediaQuery(className, key, styles[key]);
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
            finalString += buildCss("" + className + finalKey, styles[key]);
        }
        else {
            rootCss[key] = styles[key];
        }
    });
    var rootCssBuild = buildProperties(rootCss);
    if (!isKeyframe) {
        if (rootCssBuild) {
            finalString = imports + buildSelector(className, buildProperties(rootCss)) + finalString;
        }
        else {
            finalString = imports + finalString;
        }
    }
    return finalString;
}
exports.buildCss = buildCss;
function buildPageCss(components, globalStyles) {
    var build = "";
    var mergedCss = Array.isArray(globalStyles) ? utils_1.deepStyleMerge.apply(void 0, __spreadArray([], __read(globalStyles))) : globalStyles;
    build += globalStyles ? buildCss("", mergedCss || {}) : "";
    Object.keys(components).forEach(function (key) {
        var _a;
        var css = (_a = components[parseInt(key)][0].atts) === null || _a === void 0 ? void 0 : _a.css;
        build += css ? buildCss(".c" + key, css) : "";
    });
    return build;
}
exports.buildPageCss = buildPageCss;
