function noChildren(tag: string) {
  const noChildren = [
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

function parseAtts<T>(atts: T) {
  let attsText = "";
  (Object.keys(atts) as Array<keyof T>).forEach(att => {
    attsText += " " + att + '="' + atts[att] + '"';
  });
  return attsText;
}

function genElemString<T>(arg1: string, arg2?: T, arg3?: string[]) {
  let htmlString = "<" + arg1;
  if (arg2) {
    htmlString += parseAtts(arg2) + ">";
  } else {
    htmlString += ">";
  }
  if (arg3) {
    arg3.forEach(child => {
      htmlString += child;
    });
  }
  if (noChildren(arg1)) {
    if (!arg2) {
      htmlString += ">";
    }
  } else {
    htmlString += "</" + arg1 + ">";
  }
  //replace _ with -, or remove altogether in certain cases.
  htmlString = htmlString.replace("var_", "var");
  htmlString = htmlString.replace("switch_", "switch");
  return htmlString;
}

export { noChildren, parseAtts, genElemString };
