import { Properties as CSSProperties } from "csstype";
import { CSSObject } from "./slamInterfaces";
import { toKebabCase } from "./utils";

const tagNames = [
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "a",
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "discard",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tspan",
  "unknown",
  "use",
  "view",
];

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
      if (tagNames.includes(key)) {
        finalKey += ">";
      }
      finalKey += key;
      finalString += buildCssFromObject(`${className}${finalKey}`, styles[key] as CSSObject);
    } else {
      //@ts-ignore Following line threw "Expression produces a union type that is too complex to represent.""
      rootCss[key] = styles[key];
    }
  });
  if (isKeyframe) {
    return finalString;
  } else {
    return generateSelectorString(className, "", generatePropertiesString(rootCss)) + finalString;
  }
};
