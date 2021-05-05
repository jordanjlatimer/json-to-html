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
exports.buildHtml = exports.buildAtts = void 0;
var svgKebabCaseAtts_1 = require("./svgKebabCaseAtts");
var utils_1 = require("./utils");
function buildAtts(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        var stringAtt = att;
        if (svgKebabCaseAtts_1.kebabCaseSvgAtts.includes(att)) {
            stringAtt = utils_1.toKebabCase(att);
        }
        if (utils_1.isPresentAtt(att.toString())) {
            attsText += " " + stringAtt;
        }
        else if (att !== "js" && att !== "css" && typeof atts[att] !== "object") {
            attsText += " " + stringAtt + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.buildAtts = buildAtts;
function buildHtml(tree, components) {
    if (typeof tree === "string") {
        return tree;
    }
    else if (tree) {
        var className_1 = "";
        Object.keys(components).forEach(function (key) {
            components[parseInt(key)].forEach(function (component) {
                if (component === tree) {
                    className_1 = "c" + key;
                }
            });
        });
        var build_1 = "<" + tree["tag"];
        if (tree["atts"] || className_1) {
            var atts = tree["atts"] || {};
            var attsClass = atts["class"] || "";
            var fullClass = className_1 ? (attsClass ? attsClass + " " + className_1 : className_1) : attsClass;
            var classObject = fullClass ? { class: fullClass } : {};
            build_1 += buildAtts(__assign(__assign({}, atts), classObject));
        }
        build_1 += utils_1.isChildless(tree["tag"]) ? "/>" : ">";
        tree["children"] && tree["children"].forEach(function (child) { return (build_1 += buildHtml(child, components)); });
        build_1 += !utils_1.isChildless(tree["tag"]) ? "</" + tree["tag"] + ">" : "";
        return build_1;
    }
    else {
        return "";
    }
}
exports.buildHtml = buildHtml;
