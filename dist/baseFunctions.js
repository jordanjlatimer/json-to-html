"use strict";
exports.__esModule = true;
exports.genElemString = exports.parseAtts = exports.noChildren = void 0;
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
        attsText += " " + att + '="' + atts[att] + '"';
    });
    return attsText;
}
exports.parseAtts = parseAtts;
function genElemString(arg1, arg2, arg3) {
    var htmlString = "<" + arg1;
    if (arg2) {
        htmlString += parseAtts(arg2) + ">";
    }
    else {
        htmlString += ">";
    }
    if (arg3) {
        arg3.forEach(function (child) {
            htmlString += child;
        });
    }
    if (noChildren(arg1)) {
        if (!arg2) {
            htmlString += ">";
        }
    }
    else {
        htmlString += "</" + arg1 + ">";
    }
    //replace _ with -, or remove altogether in certain cases.
    htmlString = htmlString.replace("var_", "var");
    htmlString = htmlString.replace("switch_", "switch");
    return htmlString;
}
exports.genElemString = genElemString;
