"use strict";
exports.__esModule = true;
exports.slam = void 0;
function selfClosing(tag) {
  var selfClosers = [
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
  return selfClosers.includes(tag);
}
function parseAtts(atts) {
  var attsText = "";
  Object.keys(atts).forEach(function (att) {
    attsText += " " + att + '="' + atts[att] + '"';
  });
  return attsText;
}
function slam(arg1, arg2, arg3) {
  var html = "<" + arg1;
  if (arg2) {
    if (Array.isArray(arg2)) {
      if (arg3) {
        if (!Array.isArray(arg3)) {
          html += parseAtts(arg3);
        }
      }
      html += ">";
      if (selfClosing(arg1)) {
        throw new Error("Children are not permitted for " + arg1 + " tag.");
      } else {
        arg2.forEach(function (child) {
          html += child;
        });
        html += "</" + arg1 + ">";
      }
    } else {
      html += parseAtts(arg2) + ">";
      if (arg3) {
        if (selfClosing(arg1)) {
          throw new Error("Children are not permitted for " + arg1 + " tag.");
        } else {
          if (Array.isArray(arg3)) {
            arg3.forEach(function (child) {
              html += child;
            });
            html += "</" + arg1 + ">";
          }
        }
      }
    }
  } else {
    html += ">";
    if (!selfClosing(arg1)) {
      html += "</" + arg1 + ">";
    }
  }
  return html;
}
exports.slam = slam;
