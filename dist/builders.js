"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHtmlFromObject = exports.identifyCssElements = void 0;
var utils_1 = require("./utils");
var findElementsWithCSS = function (tree) {
    var _a, _b;
    var finalArray = [];
    if (typeof tree === "object") {
        if ((_a = tree.atts) === null || _a === void 0 ? void 0 : _a.css) {
            finalArray.push(tree);
        }
        (_b = tree["children"]) === null || _b === void 0 ? void 0 : _b.forEach(function (child) {
            finalArray = finalArray.concat(findElementsWithCSS(child));
        });
    }
    return finalArray;
};
var findUniqueCss = function (array) {
    var identities = {};
    var identitiesIndex = 0;
    array.forEach(function (element) {
        if (identitiesIndex === 0) {
            identities[identitiesIndex] = [element];
            identitiesIndex += 1;
        }
        else {
            var keepGoing_1 = true;
            Object.keys(identities).forEach(function (key) {
                if (keepGoing_1) {
                    identities[parseInt(key)].forEach(function (item) {
                        var _a, _b;
                        if (keepGoing_1) {
                            if (utils_1.equalObjects(((_a = element.atts) === null || _a === void 0 ? void 0 : _a.css) || {}, ((_b = item.atts) === null || _b === void 0 ? void 0 : _b.css) || {})) {
                                identities[parseInt(key)].push(element);
                            }
                            else {
                                identities[identitiesIndex] = [element];
                                identitiesIndex += 1;
                            }
                            keepGoing_1 = false;
                        }
                    });
                }
            });
        }
    });
    return identities;
};
var identifyCssElements = function (tree) {
    return findUniqueCss(findElementsWithCSS(tree));
};
exports.identifyCssElements = identifyCssElements;
var constructElement = function (tree, currentString, components, className) {
    if (typeof tree === "string") {
        return tree;
    }
    currentString += "<" + tree["tag"];
    if (tree["atts"] || className) {
        var atts = tree["atts"] || {};
        var attsClass = atts["class"] || "";
        var fullClass = className ? (attsClass ? attsClass + " " + className : className) : attsClass;
        var classObject = fullClass ? { class: fullClass } : {};
        currentString += utils_1.parseAtts(__assign(__assign({}, atts), classObject));
    }
    if (utils_1.noChildren(tree["tag"])) {
        currentString += "/>";
    }
    else {
        currentString += ">";
    }
    if (tree["children"]) {
        tree["children"].forEach(function (child) {
            currentString += routeChild(child, "", components);
        });
    }
    if (tree["tag"]) {
        if (!utils_1.noChildren(tree["tag"])) {
            currentString += "</" + tree["tag"] + ">";
        }
    }
    return currentString;
};
var routeChild = function (tree, currentString, cssElements) {
    if (typeof tree === "string") {
        return tree;
    }
    else {
        var className_1 = "";
        Object.keys(cssElements).forEach(function (key) {
            cssElements[parseInt(key)].forEach(function (element) {
                if (element === tree) {
                    className_1 = "c" + key;
                }
            });
        });
        return constructElement(tree, currentString, cssElements, className_1);
    }
};
var buildHtmlFromObject = function (tree, cssElements) {
    return routeChild(tree, "", cssElements);
};
exports.buildHtmlFromObject = buildHtmlFromObject;
