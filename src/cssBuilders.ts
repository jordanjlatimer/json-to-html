import { CSSObject, Identification } from "./slamInterfaces";
import { deepStyleMerge, toKebabCase } from "./utils";
import { Properties as CSSProperties } from "csstype";
import { tagNames } from "./tagNames";

export function buildPropertiesString(styles: CSSProperties): string {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
}

export function buildSelectorString(className: string, properties: string): string {
  return `${className}{${properties}}`;
}

export function buildMediaQueryString(className: string, query: string, styleObject: CSSObject): string {
  return `${query}{${buildCssFromObject(className, styleObject)}}`;
}

export function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean): string {
  let rootCss: CSSProperties = {};
  let finalString = "";
  let imports = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += buildSelectorString(key, buildCssFromObject("", styles[key] as CSSObject, true));
    } else if (/@media/.test(key)) {
      finalString += buildMediaQueryString(className, key, styles[key] as CSSObject);
    } else if (/@import/.test(key)) {
      imports += `@import url(${styles[key]});`;
    } else if (typeof styles[key] === "object") {
      let finalKey = "";
      if (className) {
        finalKey += (tagNames.includes(key) ? ">" : "") + key;
      } else {
        finalKey = key;
      }
      finalString += buildCssFromObject(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      rootCss[key] = styles[key];
    }
  });
  const rootCssBuild = buildPropertiesString(rootCss);
  if (!isKeyframe) {
    if (rootCssBuild) {
      finalString = imports + buildSelectorString(className, buildPropertiesString(rootCss)) + finalString;
    } else {
      finalString = imports + finalString;
    }
  }
  return finalString;
}

export function buildPageCssString(components: Identification, globalStyles?: CSSObject | CSSObject[]): string {
  let build = "";
  let mergedCss = Array.isArray(globalStyles) ? deepStyleMerge(...globalStyles) : globalStyles;
  build += globalStyles ? buildCssFromObject("", mergedCss || {}) : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    build += css ? buildCssFromObject(`.c${key}`, css) : "";
  });
  return build;
}
