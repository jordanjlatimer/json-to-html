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
exports.buildHtmlFromObject = exports.identifyComponents = void 0;
var utils_1 = require("./utils");
var findComponents = function (tree) {
    var _a;
    var finalArray = [];
    if (typeof tree === "string") {
        undefined;
    }
    else if (tree["type"] === "element") {
        (_a = tree["children"]) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            finalArray = finalArray.concat(findComponents(child));
        });
    }
    else if (tree["type"] === "component") {
        finalArray.push(tree);
        finalArray = finalArray.concat(findComponents(tree["html"]));
    }
    return finalArray;
};
var findUniqueCss = function (array) {
    var identities = {};
    var identitiesIndex = 0;
    array.forEach(function (component) {
        if (identitiesIndex === 0) {
            identities[identitiesIndex] = [component];
            identitiesIndex += 1;
        }
        else {
            var keepGoing_1 = true;
            Object.keys(identities).forEach(function (key) {
                if (keepGoing_1) {
                    identities[parseInt(key)].forEach(function (item) {
                        if (keepGoing_1) {
                            if (utils_1.equalObjects(component.css || {}, item.css || {})) {
                                identities[parseInt(key)].push(component);
                            }
                            else {
                                identities[identitiesIndex] = [component];
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
var identifyComponents = function (tree) {
    return findUniqueCss(findComponents(tree));
};
exports.identifyComponents = identifyComponents;
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
var routeChild = function (tree, currentString, components) {
    if (typeof tree === "string") {
        return tree;
    }
    else if (tree["type"] === "component") {
        var className_1 = "";
        Object.keys(components).forEach(function (key) {
            components[parseInt(key)].forEach(function (component) {
                if (component === tree) {
                    className_1 = "c" + key;
                }
            });
        });
        return constructElement(tree["html"], currentString, components, className_1);
    }
    else if (tree["type"] === "element") {
        return constructElement(tree, currentString, components);
    }
    else {
        return currentString;
    }
};
var buildHtmlFromObject = function (tree, components) {
    return routeChild(tree, "", components);
};
exports.buildHtmlFromObject = buildHtmlFromObject;
