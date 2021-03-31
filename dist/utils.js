"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSlamElement = exports.areEqualObjects = exports.buildAttsString = exports.isChildless = exports.toKebabCase = void 0;
function toKebabCase(value) {
    return value.split("").reduce(function (a, b) { return a + (/[A-Z]/.test(b) ? "-" + b.toLowerCase() : b); }, "");
}
exports.toKebabCase = toKebabCase;
function isPresentAtt(attName) {
    var atts = [
        "allowfullscreen",
        "allowpaymentrequest",
        "async",
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "ismap",
        "loop",
        "multiple",
        "muted",
        "novalidate",
        "open",
        "readonly",
        "required",
        "reversed",
        "selected",
        "typemustmatch",
    ];
    return atts.includes(attName);
}
function isChildless(tag) {
    var isChildless = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        "circle",
        "ellipse",
        "line",
        "path",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "use",
    ];
    return isChildless.includes(tag);
}
exports.isChildless = isChildless;
function buildAttsString(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        if (isPresentAtt(att.toString())) {
            attsText += " " + att;
        }
        else if (att !== "js" && att !== "css") {
            attsText += " " + att + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.buildAttsString = buildAttsString;
function areEqualObjects(object1, object2) {
    if (typeof object1 !== "object") {
        throw "Parameter 1 is not an object.";
    }
    if (typeof object2 !== "object") {
        throw "Parameter 2 is not an object.";
    }
    if (object1 === object2) {
        return true;
    }
    var object1Keys = Object.keys(object1);
    var object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
        return false;
    }
    for (var _i = 0, object1Keys_1 = object1Keys; _i < object1Keys_1.length; _i++) {
        var key = object1Keys_1[_i];
        if (typeof object1[key] === "object") {
            if (!areEqualObjects(object1[key], object2[key])) {
                return false;
            }
        }
        else if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
exports.areEqualObjects = areEqualObjects;
function buildSlamElement(arg1, arg2, atts, tag) {
    var children = [];
    if (arg1) {
        if (typeof arg1 === "string") {
            children.push(arg1);
        }
        else if ("type" in arg1) {
            children.push(arg1);
        }
        else {
            atts = arg1;
        }
    }
    children.push.apply(children, arg2);
    return {
        type: "element",
        tag: tag,
        atts: atts,
        children: children.length > 0 ? children : undefined,
    };
}
exports.buildSlamElement = buildSlamElement;
