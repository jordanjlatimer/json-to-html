import { Properties as CSSProperties } from "csstype";
import { CSSObject } from "./slamInterfaces";
import { toKebabCase } from "./utils";
import { tagNames } from "./tagNames";

const generatePropertiesString = (styles: CSSProperties) => {
  return (Object.keys(styles) as Array<keyof CSSObject>).reduce((a, b) => `${a}${toKebabCase(b)}:${styles[b]};`, "");
};

const generateSelectorString = (className: string, selector: string, properties: string) => {
  return `${className}${selector}{${properties}}`;
};

const generateKeyframeString = (keyframe: string, selectors: string) => {
  return `${keyframe}{${selectors}}`;
};

const generateMediaQueryString = (className: string, query: string, styleObject: CSSObject) => {
  return `${query}{${buildCssFromObject(className, styleObject)}}`;
};

export const buildCssFromObject = (className: string, styles: CSSObject, isKeyframe?: boolean) => {
  let rootCss: CSSProperties = {};
  let finalString = "";
  (Object.keys(styles) as Array<keyof CSSObject>).forEach(key => {
    if (/@keyframes/.test(key)) {
      finalString += generateKeyframeString(key, buildCssFromObject(className, styles[key] as CSSObject, true));
    } else if (/@media/.test(key)) {
      finalString += generateMediaQueryString(className, key, styles[key] as CSSObject);
    } else if (typeof styles[key] === "object") {
      let finalKey = "";
      finalKey += (tagNames.includes(key) ? ">" : "") + key;
      finalString += buildCssFromObject(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
      rootCss[key] = styles[key];
    }
  });
  return isKeyframe
    ? finalString
    : generateSelectorString(className, "", generatePropertiesString(rootCss)) + finalString;
};

export const CSS = <T extends Record<string, CSSObject>>(arg: T): T => arg;
