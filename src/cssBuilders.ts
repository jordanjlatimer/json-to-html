import { CSSObject, Identification } from "./slamInterfaces";
import { toKebabCase } from "./utils";
import { Properties as CSSProperties } from "csstype";
import { tagNames } from "./tagNames";

function buildPropertiesString(styles: CSSProperties): string {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
}

function buildSelectorString(className: string, selector: string, properties: string): string {
  return `${className}${selector}{${properties}}`;
}

function buildKeyframeString(keyframe: string, selectors: string): string {
  return `${keyframe}{${selectors}}`;
}

function buildMediaQueryString(className: string, query: string, styleObject: CSSObject): string {
  return `${query}{${buildCssFromObject(className, styleObject)}}`;
}

function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean): string {
  let rootCss: CSSProperties = {};
  let finalString = "";
  let imports = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key] as CSSObject, true));
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
  finalString = isKeyframe
    ? finalString
    : imports + buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
  return finalString;
}

export function buildPageCssString(components: Identification, reset?: boolean, globalStyles?: CSSObject): string {
  let build = "";
  build += globalStyles ? buildCssFromObject("", globalStyles) : "";
  Object.keys(components).forEach(key => {
    let css = components[parseInt(key)][0].atts?.css;
    build += css ? buildCssFromObject(`.c${key}`, css) : "";
  });
  return build;
}
