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
exports.buildPageHtmlString = exports.buildElementAndChildrenStrings = exports.buildAttsString = void 0;
var utils_1 = require("./utils");
var svgKebabCaseAtts_1 = require("./svgKebabCaseAtts");
function buildAttsString(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        var stringAtt = att;
        if (svgKebabCaseAtts_1.kebabCaseSvgAtts.includes(att)) {
            stringAtt = utils_1.toKebabCase(att);
        }
        if (utils_1.isPresentAtt(att.toString())) {
            attsText += " " + stringAtt;
        }
        else if (att !== "js" && att !== "css") {
            attsText += " " + stringAtt + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.buildAttsString = buildAttsString;
function buildElementAndChildrenStrings(tree, components, className) {
    if (typeof tree === "string") {
        return tree;
    }
    else if (tree) {
        var build_1 = "<" + tree["tag"];
        if (tree["atts"] || className) {
            var atts = tree["atts"] || {};
            var attsClass = atts["class"] || "";
            var fullClass = className ? (attsClass ? attsClass + " " + className : className) : attsClass;
            var classObject = fullClass ? { class: fullClass } : {};
            build_1 += buildAttsString(__assign(__assign({}, atts), classObject));
        }
        build_1 += utils_1.isChildless(tree["tag"]) ? "/>" : ">";
        tree["children"] && tree["children"].forEach(function (child) { return (build_1 += buildPageHtmlString(child, components)); });
        build_1 += !utils_1.isChildless(tree["tag"]) ? "</" + tree["tag"] + ">" : "";
        return build_1;
    }
    else {
        return "";
    }
}
exports.buildElementAndChildrenStrings = buildElementAndChildrenStrings;
function buildPageHtmlString(tree, components) {
    if (typeof tree === "string") {
        return tree;
    }
    else {
        var className_1 = "";
        Object.keys(components).forEach(function (key) {
            components[parseInt(key)].forEach(function (component) {
                if (component === tree) {
                    className_1 = "c" + key;
                }
            });
        });
        return buildElementAndChildrenStrings(tree, components, className_1);
    }
}
exports.buildPageHtmlString = buildPageHtmlString;
