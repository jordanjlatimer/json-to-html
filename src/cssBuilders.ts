import { Properties as CSSProperties } from "csstype";
import { CSSObject, Identification } from "./slamInterfaces";
import { tagNames } from "./tagNames";
import { deepStyleMerge, toKebabCase } from "./utils";

export function buildProperties(styles: CSSProperties): string {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
}

export function buildSelector(className: string, properties: string): string {
  return `${className}{${properties}}`;
}

export function buildMediaQuery(className: string, query: string, styleObject: CSSObject): string {
  return `${query}{${buildCss(className, styleObject)}}`;
}

export function buildCss(className: string, styles: CSSObject, isKeyframe?: boolean): string {
  let rootCss: CSSProperties = {};
  let finalString = "";
  let imports = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += buildSelector(key, buildCss("", styles[key] as CSSObject, true));
    } else if (/@media/.test(key)) {
      finalString += buildMediaQuery(className, key, styles[key] as CSSObject);
    } else if (/@import/.test(key)) {
      imports += `@import url(${styles[key]});`;
    } else if (typeof styles[key] === "object") {
      let finalKey = "";
      if (className) {
        finalKey += (tagNames.includes(key) ? ">" : "") + key;
      } else {
        finalKey = key;
      }
      finalString += buildCss(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      rootCss[key] = styles[key];
    }
  });
  const rootCssBuild = buildProperties(rootCss);
  if (!isKeyframe) {
    if (rootCssBuild) {
      finalString = imports + buildSelector(className, buildProperties(rootCss)) + finalString;
    } else {
      finalString = imports + finalString;
    }
  }
  return finalString;
}

export function buildPageCss(components: Identification, globalStyles?: CSSObject | CSSObject[]): string {
  let build = "";
  let mergedCss = Array.isArray(globalStyles) ? deepStyleMerge(...globalStyles) : globalStyles;
  build += globalStyles ? buildCss("", mergedCss || {}) : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    build += css ? buildCss(`.c${key}`, css) : "";
  });
  return build;
}
