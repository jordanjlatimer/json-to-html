import { Properties as CSSProperties } from "csstype";
import { CSSObject } from "./slamInterfaces";
import { toKebabCase } from "./utils";
import { tagNames } from "./tagNames";

function buildPropertiesString(styles: CSSProperties) {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
}

function buildSelectorString(className: string, selector: string, properties: string) {
  return `${className}${selector}{${properties}}`;
}

function buildKeyframeString(keyframe: string, selectors: string) {
  return `${keyframe}{${selectors}}`;
}

function buildMediaQueryString(className: string, query: string, styleObject: CSSObject) {
  return `${query}{${buildCssFromObject(className, styleObject)}}`;
}

export function buildCssFromObject(className: string, styles: CSSObject, isKeyframe?: boolean) {
  let rootCss: CSSProperties = {};
  let finalString = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += buildKeyframeString(key, buildCssFromObject(className, styles[key] as CSSObject, true));
    } else if (/@media/.test(key)) {
      finalString += buildMediaQueryString(className, key, styles[key] as CSSObject);
    } else if (typeof styles[key] === "object") {
      let finalKey = "";
      finalKey += (tagNames.includes(key) ? ">" : "") + key;
      finalString += buildCssFromObject(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
      rootCss[key] = styles[key];
    }
  });
  return isKeyframe ? finalString : buildSelectorString(className, "", buildPropertiesString(rootCss)) + finalString;
}
