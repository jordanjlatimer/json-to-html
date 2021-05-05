import { Child, Identification, SlamElement, TagName } from "./slamInterfaces";
import { kebabCaseSvgAtts } from "./svgKebabCaseAtts";
import { isChildless, isPresentAtt, toKebabCase } from "./utils";

export function buildAtts<T extends SlamElement<TagName>["atts"]>(atts: T): string {
  let attsText = "";
  Object.keys(atts!).forEach(att => {
    let stringAtt = att;
    if (kebabCaseSvgAtts.includes(att)) {
      stringAtt = toKebabCase(att);
    }
    if (isPresentAtt(att.toString())) {
      attsText += " " + stringAtt;
    } else if (att !== "js" && att !== "css" && typeof atts[att as keyof T] !== "object") {
      attsText += " " + stringAtt + '="' + atts![att as keyof T] + '"';
    }
  });
  return attsText;
}

export function buildHtml(tree: Child, components: Identification): string {
  if (typeof tree === "string") {
    return tree;
  } else if (tree) {
    let className = "";
    Object.keys(components).forEach(key => {
      components[parseInt(key)].forEach(component => {
        if (component === tree) {
          className = `c${key}`;
        }
      });
    });
    let build = `<${tree["tag"]}`;
    if (tree["atts"] || className) {
      const atts = tree["atts"] || {};
      const attsClass = atts["class"] || "";
      const fullClass = className ? (attsClass ? `${attsClass} ${className}` : className) : attsClass;
      const classObject = fullClass ? { class: fullClass } : {};
      build += buildAtts({ ...atts, ...classObject });
    }
    build += isChildless(tree["tag"]) ? "/>" : ">";
    tree["children"] && tree["children"].forEach(child => (build += buildHtml(child, components)));
    build += !isChildless(tree["tag"]) ? `</${tree["tag"]}>` : "";
    return build;
  } else {
    return "";
  }
}
