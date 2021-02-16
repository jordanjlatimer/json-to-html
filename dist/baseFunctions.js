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
function presentAtt(attName) {
    var presentAtts = [
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
    return presentAtts.includes(attName);
}
function parseAtts(atts) {
    var attsText = "";
    Object.keys(atts).forEach(function (att) {
        if (presentAtt(att.toString())) {
            attsText += " " + att;
        }
        else if (att === "style") {
            attsText += ' style="';
            Object.keys(atts[att]).forEach(function (styleProp) {
                attsText += styleProp + ": " + atts[att][styleProp] + ";";
            });
            attsText += '"';
        }
        else {
            attsText += " " + att + '="' + atts[att] + '"';
        }
    });
    return attsText;
}
exports.parseAtts = parseAtts;
function genElemString(arg1, arg2, arg3) {
    var htmlString = "<" + arg1;
    if (arg2) {
        htmlString += parseAtts(arg2);
    }
    if (noChildren(arg1)) {
        htmlString += "/>";
    }
    else {
        htmlString += ">";
    }
    if (arg3) {
        arg3.forEach(function (child) {
            htmlString += child;
        });
    }
    if (!noChildren(arg1)) {
        htmlString += "</" + arg1 + ">";
    }
    //replace _ with -, or remove altogether in certain cases.
    htmlString = htmlString.replace("var_", "var");
    htmlString = htmlString.replace("switch_", "switch");
    return htmlString;
}
exports.genElemString = genElemString;
