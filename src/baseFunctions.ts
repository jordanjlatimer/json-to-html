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

function presentAtt(attName: string) {
  const presentAtts = [
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

type styleProps = {
  [key: string]: string;
};

function parseAtts<T>(atts: T) {
  let attsText = "";
  (Object.keys(atts) as Array<keyof T>).forEach(att => {
    if (presentAtt(att.toString())) {
      attsText += " " + att;
    } else if (att === "style") {
      attsText += ' style="';
      Object.keys(atts[att]).forEach(styleProp => {
        attsText += styleProp + ": " + ((atts[att] as unknown) as styleProps)[styleProp] + ";";
      });
      attsText += '"';
    } else {
      attsText += " " + att + '="' + atts[att] + '"';
    }
  });
  return attsText;
}

function genElemString<T>(arg1: string, arg2?: T, arg3?: string[]) {
  let htmlString = "<" + arg1;
  if (arg2) {
    htmlString += parseAtts(arg2);
  }
  if (noChildren(arg1)) {
    htmlString += "/>";
  } else {
    htmlString += ">";
  }
  if (arg3) {
    arg3.forEach(child => {
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

export { noChildren, parseAtts, genElemString };
