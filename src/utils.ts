import { Child, ElementAttributes, ResolvedChild, SlamElement } from "./slamInterfaces";

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
    } else if (att !== "js" && att !== "css") {
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
  if (object1 === object2) {
    return true;
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

export async function resolveAndType<T>(
  arg1: Child | T,
  arg2: ResolvedChild[],
  atts: T | undefined,
  tag: string
): Promise<SlamElement> {
  let children: SlamElement["children"] = [];
  if (arg1) {
    let r1 = await arg1;
    if (typeof r1 === "string") {
      children.push(r1);
    } else if ("type" in r1) {
      children.push(r1);
    } else {
      atts = r1;
    }
  }
  children = children.concat(arg2);
  return {
    type: "element",
    tag: tag,
    atts: atts,
    children: children.length > 0 ? children : undefined,
  };
}
