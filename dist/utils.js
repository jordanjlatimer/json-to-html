"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeTag = exports.equalObjects = exports.parseAtts = exports.noChildren = exports.toKebabCase = void 0;
var toKebabCase = function (value) {
    return value.split("").reduce(function (a, b) { return a + (/[A-Z]/.test(b) ? "-" + b.toLowerCase() : b); }, "");
};
exports.toKebabCase = toKebabCase;
var presentAtt = function (attName) {
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
};
function noChildren(tag) {
    var noChildren = [
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
    return noChildren.includes(tag);
}
exports.noChildren = noChildren;
function parseAtts(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        if (presentAtt(att.toString())) {
            attsText += " " + att;
        }
        else if (att !== "js" && att !== "css") {
            attsText += " " + att + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.parseAtts = parseAtts;
function equalObjects(object1, object2) {
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
            if (!equalObjects(object1[key], object2[key])) {
                return false;
            }
        }
        else if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
exports.equalObjects = equalObjects;
function typeTag(arg1, arg2, atts, tag) {
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
exports.typeTag = typeTag;
