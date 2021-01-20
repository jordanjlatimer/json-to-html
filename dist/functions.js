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
    "keygen",
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
    if (typeof arg2 === "string") {
      htmlString += ">";
      if (!noChildren(arg1)) {
        htmlString += arg2 + "</" + arg1 + ">";
      }
    } else if (Array.isArray(arg2)) {
      htmlString += ">";
      if (!noChildren(arg1)) {
        arg2.forEach(function (child) {
          htmlString += child;
        });
        htmlString += "</" + arg1 + ">";
      }
    } else {
      htmlString += parseAtts(arg2) + ">";
      if (arg3) {
        if (!noChildren(arg1)) {
          if (typeof arg3 === "string") {
            htmlString += arg3 + "</" + arg1 + ">";
          } else {
            arg3.forEach(function (child) {
              htmlString += child;
            });
            htmlString += "</" + arg1 + ">";
          }
        }
      }
    }
  } else {
    htmlString += ">";
  }
  //replace _ with -, or remove altogether in certain cases.
  htmlString = htmlString.replace("var_", "var");
  htmlString = htmlString.replace("switch_", "switch");
  htmlString = htmlString.replace("_", "-");
  return htmlString;
}
exports.genElemString = genElemString;
