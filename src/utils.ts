import { Properties as CSSProperties } from "csstype";
import { ElementAttributes } from "./baseInterface";

export const toKebabCase = (value: string) => {
  return value.split("").reduce((a, b) => a + (/[A-Z]/.test(b) ? "-" + b.toLowerCase() : b), "");
};

const presentAtt = (attName: string) => {
  const atts = [
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

export function noChildren(tag: string) {
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

export function parseAtts<T extends ElementAttributes>(atts: T) {
  let attsText = "";
  (Object.keys(atts) as Array<keyof T>).forEach(att => {
    if (presentAtt(att.toString())) {
      attsText += " " + att;
    } else if (att === "style") {
      attsText += ' style="';
      Object.keys(atts[att]).forEach(styleProp => {
        attsText +=
          toKebabCase(styleProp) + ": " + (atts[att] as CSSProperties)[styleProp as keyof CSSProperties] + ";";
      });
      attsText += '"';
    } else {
      attsText += " " + att + '="' + atts[att] + '"';
    }
  });
  return attsText;
}

interface GenericObject {
  [key: string]: any;
}

export function equalObjects(object1: GenericObject, object2: GenericObject) {
  if (typeof object1 !== "object") {
    throw "Parameter 1 is not an object.";
  }
  if (typeof object2 !== "object") {
    throw "Parameter 2 is not an object.";
  }
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of object1Keys) {
    if (typeof object1[key] === "object") {
      if (!equalObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
