import { Child, ResolvedSlamElement, ResolvedChild } from "./slamInterfaces";
import {
  HTMLAbbrAttributes,
  HTMLAddressAttributes,
  HTMLAreaAttributes,
  HTMLArticleAttributes,
  HTMLAsideAttributes,
  HTMLAudioAttributes,
  HTMLBAttributes,
  HTMLBaseAttributes,
  HTMLBdiAttributes,
  HTMLBdoAttributes,
  HTMLBlockquoteAttributes,
  HTMLBodyAttributes,
  HTMLBrAttributes,
  HTMLButtonAttributes,
  HTMLCanvasAttributes,
  HTMLCaptionAttributes,
  HTMLCiteAttributes,
  HTMLCodeAttributes,
  HTMLColAttributes,
  HTMLColgroupAttributes,
  HTMLDataAttributes,
  HTMLDatalistAttributes,
  HTMLDdAttributes,
  HTMLDelAttributes,
  HTMLDetailsAttributes,
  HTMLDfnAttributes,
  HTMLDialogAttributes,
  HTMLDivAttributes,
  HTMLDlAttributes,
  HTMLDtAttributes,
  HTMLEmAttributes,
  HTMLEmbedAttributes,
  HTMLFieldsetAttributes,
  HTMLFigcaptionAttributes,
  HTMLFigureAttributes,
  HTMLFooterAttributes,
  HTMLFormAttributes,
  HTMLH1Attributes,
  HTMLH2Attributes,
  HTMLH3Attributes,
  HTMLH4Attributes,
  HTMLH5Attributes,
  HTMLH6Attributes,
  HTMLHeadAttributes,
  HTMLHeaderAttributes,
  HTMLHgroupAttributes,
  HTMLHrAttributes,
  HTMLHtmlAttributes,
  HTMLIAttributes,
  HTMLIframeAttributes,
  HTMLImgAttributes,
  HTMLInputAttributes,
  HTMLInsAttributes,
  HTMLKbdAttributes,
  HTMLLabelAttributes,
  HTMLLegendAttributes,
  HTMLLiAttributes,
  HTMLLinkAttributes,
  HTMLMainAttributes,
  HTMLMapAttributes,
  HTMLMarkAttributes,
  HTMLMenuAttributes,
  HTMLMetaAttributes,
  HTMLMeterAttributes,
  HTMLNavAttributes,
  HTMLNoscriptAttributes,
  HTMLObjectAttributes,
  HTMLOlAttributes,
  HTMLOptgroupAttributes,
  HTMLOptionAttributes,
  HTMLOutputAttributes,
  HTMLPAttributes,
  HTMLParamAttributes,
  HTMLPictureAttributes,
  HTMLPreAttributes,
  HTMLProgressAttributes,
  HTMLQAttributes,
  HTMLRpAttributes,
  HTMLRtAttributes,
  HTMLRubyAttributes,
  HTMLSAttributes,
  HTMLSampAttributes,
  HTMLScriptAttributes,
  HTMLSectionAttributes,
  HTMLSelectAttributes,
  HTMLSlotAttributes,
  HTMLSmallAttributes,
  HTMLSourceAttributes,
  HTMLSpanAttributes,
  HTMLStrongAttributes,
  HTMLSubAttributes,
  HTMLSummaryAttributes,
  HTMLSupAttributes,
  HTMLTableAttributes,
  HTMLTbodyAttributes,
  HTMLTdAttributes,
  HTMLTemplateAttributes,
  HTMLTextareaAttributes,
  HTMLTfootAttributes,
  HTMLThAttributes,
  HTMLTheadAttributes,
  HTMLTimeAttributes,
  HTMLTitleAttributes,
  HTMLTrAttributes,
  HTMLTrackAttributes,
  HTMLUAttributes,
  HTMLUlAttributes,
  HTMLVar_Attributes,
  HTMLVideoAttributes,
  HTMLWbrAttributes,
} from "./htmlInterfaces";
import {
  SVGAAttributes,
  SVGAnimateAttributes,
  SVGAnimateMotionAttributes,
  SVGAnimateTransformAttributes,
  SVGCircleAttributes,
  SVGClipPathAttributes,
  SVGDefsAttributes,
  SVGDescAttributes,
  SVGDiscardAttributes,
  SVGEllipseAttributes,
  SVGFeBlendAttributes,
  SVGFeColorMatrixAttributes,
  SVGFeComponentTransferAttributes,
  SVGFeCompositeAttributes,
  SVGFeConvolveMatrixAttributes,
  SVGFeDiffuseLightingAttributes,
  SVGFeDisplacementMapAttributes,
  SVGFeDistantLightAttributes,
  SVGFeDropShadowAttributes,
  SVGFeFloodAttributes,
  SVGFeFuncAAttributes,
  SVGFeFuncBAttributes,
  SVGFeFuncGAttributes,
  SVGFeFuncRAttributes,
  SVGFeGaussianBlurAttributes,
  SVGFeImageAttributes,
  SVGFeMergeAttributes,
  SVGFeMergeNodeAttributes,
  SVGFeMorphologyAttributes,
  SVGFeOffsetAttributes,
  SVGFePointLightAttributes,
  SVGFeSpecularLightingAttributes,
  SVGFeSpotLightAttributes,
  SVGFeTileAttributes,
  SVGFeTurbulenceAttributes,
  SVGFilterAttributes,
  SVGForeignObjectAttributes,
  SVGGAttributes,
  SVGImageAttributes,
  SVGLineAttributes,
  SVGLinearGradientAttributes,
  SVGMarkerAttributes,
  SVGMaskAttributes,
  SVGMetadataAttributes,
  SVGMpathAttributes,
  SVGPathAttributes,
  SVGPatternAttributes,
  SVGPolygonAttributes,
  SVGPolylineAttributes,
  SVGRadialGradientAttributes,
  SVGRectAttributes,
  SVGSetAttributes,
  SVGStopAttributes,
  SVGSvgAttributes,
  SVGSwitch_Attributes,
  SVGSymbolAttributes,
  SVGTextAttributes,
  SVGTextPathAttributes,
  SVGTspanAttributes,
  SVGUnknownAttributes,
  SVGUseAttributes,
  SVGViewAttributes,
} from "./svgInterfaces";

export const abbr = async (arg1?: HTMLAbbrAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "abbr",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const address = async (arg1?: HTMLAddressAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "address",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const area = (arg1?: HTMLAreaAttributes): ResolvedSlamElement => ({
  tag: "area",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const article = async (arg1?: HTMLArticleAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "article",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const aside = async (arg1?: HTMLAsideAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "aside",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const audio = async (arg1?: HTMLAudioAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "audio",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const b = async (arg1?: HTMLBAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "b",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const base = (arg1?: HTMLBaseAttributes): ResolvedSlamElement => ({
  tag: "base",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const bdi = async (arg1?: HTMLBdiAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "bdi",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const bdo = async (arg1?: HTMLBdoAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "bdo",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const blockquote = async (
  arg1?: HTMLBlockquoteAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "blockquote",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const body = async (arg1?: HTMLBodyAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "body",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const br = (arg1?: HTMLBrAttributes): ResolvedSlamElement => ({
  tag: "br",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const button = async (arg1?: HTMLButtonAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "button",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const canvas = async (arg1?: HTMLCanvasAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "canvas",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const caption = async (arg1?: HTMLCaptionAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "caption",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const cite = async (arg1?: HTMLCiteAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "cite",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const code = async (arg1?: HTMLCodeAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "code",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const col = (arg1?: HTMLColAttributes): ResolvedSlamElement => ({
  tag: "col",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const colgroup = async (
  arg1?: HTMLColgroupAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "colgroup",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const data = async (arg1?: HTMLDataAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "data",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const datalist = async (
  arg1?: HTMLDatalistAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "datalist",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const dd = async (arg1?: HTMLDdAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "dd",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const del = async (arg1?: HTMLDelAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "del",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const details = async (arg1?: HTMLDetailsAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "details",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const dfn = async (arg1?: HTMLDfnAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "dfn",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const dialog = async (arg1?: HTMLDialogAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "dialog",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const div = async (arg1?: HTMLDivAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "div",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const dl = async (arg1?: HTMLDlAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "dl",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const dt = async (arg1?: HTMLDtAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "dt",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const em = async (arg1?: HTMLEmAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "em",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const embed = (arg1?: HTMLEmbedAttributes): ResolvedSlamElement => ({
  tag: "embed",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const fieldset = async (
  arg1?: HTMLFieldsetAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "fieldset",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const figcaption = async (
  arg1?: HTMLFigcaptionAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "figcaption",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const figure = async (arg1?: HTMLFigureAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "figure",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const footer = async (arg1?: HTMLFooterAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "footer",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const form = async (arg1?: HTMLFormAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "form",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h1 = async (arg1?: HTMLH1Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h1",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h2 = async (arg1?: HTMLH2Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h2",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h3 = async (arg1?: HTMLH3Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h3",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h4 = async (arg1?: HTMLH4Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h4",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h5 = async (arg1?: HTMLH5Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h5",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const h6 = async (arg1?: HTMLH6Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "h6",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const head = async (arg1?: HTMLHeadAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "head",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const header = async (arg1?: HTMLHeaderAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "header",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const hgroup = async (arg1?: HTMLHgroupAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "hgroup",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const hr = (arg1?: HTMLHrAttributes): ResolvedSlamElement => ({
  tag: "hr",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const html = async (arg1?: HTMLHtmlAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "html",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const i = async (arg1?: HTMLIAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "i",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const iframe = async (arg1?: HTMLIframeAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "iframe",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const img = (arg1?: HTMLImgAttributes): ResolvedSlamElement => ({
  tag: "img",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const input = (arg1?: HTMLInputAttributes): ResolvedSlamElement => ({
  tag: "input",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const ins = async (arg1?: HTMLInsAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "ins",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const kbd = async (arg1?: HTMLKbdAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "kbd",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const label = async (arg1?: HTMLLabelAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "label",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const legend = async (arg1?: HTMLLegendAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "legend",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const li = async (arg1?: HTMLLiAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "li",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const link = (arg1?: HTMLLinkAttributes): ResolvedSlamElement => ({
  tag: "link",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const main = async (arg1?: HTMLMainAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "main",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const map = async (arg1?: HTMLMapAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "map",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const mark = async (arg1?: HTMLMarkAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "mark",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const menu = async (arg1?: HTMLMenuAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "menu",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const meta = (arg1?: HTMLMetaAttributes): ResolvedSlamElement => ({
  tag: "meta",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const meter = async (arg1?: HTMLMeterAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "meter",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const nav = async (arg1?: HTMLNavAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "nav",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const noscript = async (
  arg1?: HTMLNoscriptAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "noscript",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const object = async (arg1?: HTMLObjectAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "object",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const ol = async (arg1?: HTMLOlAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "ol",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const optgroup = async (
  arg1?: HTMLOptgroupAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "optgroup",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const option = async (arg1?: HTMLOptionAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "option",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const output = async (arg1?: HTMLOutputAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "output",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const p = async (arg1?: HTMLPAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "p",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const param = (arg1?: HTMLParamAttributes): ResolvedSlamElement => ({
  tag: "param",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const picture = async (arg1?: HTMLPictureAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "picture",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const pre = async (arg1?: HTMLPreAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "pre",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const progress = async (
  arg1?: HTMLProgressAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "progress",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const q = async (arg1?: HTMLQAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "q",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const rp = async (arg1?: HTMLRpAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "rp",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const rt = async (arg1?: HTMLRtAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "rt",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const ruby = async (arg1?: HTMLRubyAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "ruby",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const s = async (arg1?: HTMLSAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "s",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const samp = async (arg1?: HTMLSampAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "samp",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const script = async (arg1?: HTMLScriptAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "script",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const section = async (arg1?: HTMLSectionAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "section",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const select = async (arg1?: HTMLSelectAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "select",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const slot = async (arg1?: HTMLSlotAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "slot",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const small = async (arg1?: HTMLSmallAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "small",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const source = (arg1?: HTMLSourceAttributes): ResolvedSlamElement => ({
  tag: "source",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const span = async (arg1?: HTMLSpanAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "span",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const strong = async (arg1?: HTMLStrongAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "strong",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const sub = async (arg1?: HTMLSubAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "sub",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const summary = async (arg1?: HTMLSummaryAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "summary",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const sup = async (arg1?: HTMLSupAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "sup",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const table = async (arg1?: HTMLTableAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "table",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const tbody = async (arg1?: HTMLTbodyAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "tbody",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const td = async (arg1?: HTMLTdAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "td",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const template = async (
  arg1?: HTMLTemplateAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "template",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const textarea = async (
  arg1?: HTMLTextareaAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "textarea",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const tfoot = async (arg1?: HTMLTfootAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "tfoot",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const th = async (arg1?: HTMLThAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "th",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const thead = async (arg1?: HTMLTheadAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "thead",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const time = async (arg1?: HTMLTimeAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "time",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const title = async (arg1?: HTMLTitleAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "title",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const tr = async (arg1?: HTMLTrAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "tr",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const track = (arg1?: HTMLTrackAttributes): ResolvedSlamElement => ({
  tag: "track",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const u = async (arg1?: HTMLUAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "u",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const ul = async (arg1?: HTMLUlAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "ul",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const var_ = async (arg1?: HTMLVar_Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "var",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const video = async (arg1?: HTMLVideoAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "video",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const wbr = (arg1?: HTMLWbrAttributes): ResolvedSlamElement => ({
  tag: "wbr",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const a = async (arg1?: SVGAAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "a",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const animate = async (arg1?: SVGAnimateAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "animate",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const animateMotion = async (
  arg1?: SVGAnimateMotionAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "animateMotion",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const animateTransform = async (
  arg1?: SVGAnimateTransformAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "animateTransform",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const circle = (arg1?: SVGCircleAttributes): ResolvedSlamElement => ({
  tag: "circle",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const clipPath = async (
  arg1?: SVGClipPathAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "clipPath",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const defs = async (arg1?: SVGDefsAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "defs",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const desc = async (arg1?: SVGDescAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "desc",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const discard = async (arg1?: SVGDiscardAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "discard",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const ellipse = (arg1?: SVGEllipseAttributes): ResolvedSlamElement => ({
  tag: "ellipse",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const feBlend = async (arg1?: SVGFeBlendAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feBlend",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feColorMatrix = async (
  arg1?: SVGFeColorMatrixAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feColorMatrix",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feComponentTransfer = async (
  arg1?: SVGFeComponentTransferAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feComponentTransfer",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feComposite = async (
  arg1?: SVGFeCompositeAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feComposite",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feConvolveMatrix = async (
  arg1?: SVGFeConvolveMatrixAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feConvolveMatrix",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feDiffuseLighting = async (
  arg1?: SVGFeDiffuseLightingAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feDiffuseLighting",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feDisplacementMap = async (
  arg1?: SVGFeDisplacementMapAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feDisplacementMap",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feDistantLight = async (
  arg1?: SVGFeDistantLightAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feDistantLight",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feDropShadow = async (
  arg1?: SVGFeDropShadowAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feDropShadow",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feFlood = async (arg1?: SVGFeFloodAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feFlood",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feFuncA = async (arg1?: SVGFeFuncAAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feFuncA",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feFuncB = async (arg1?: SVGFeFuncBAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feFuncB",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feFuncG = async (arg1?: SVGFeFuncGAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feFuncG",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feFuncR = async (arg1?: SVGFeFuncRAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feFuncR",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feGaussianBlur = async (
  arg1?: SVGFeGaussianBlurAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feGaussianBlur",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feImage = async (arg1?: SVGFeImageAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feImage",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feMerge = async (arg1?: SVGFeMergeAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feMerge",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feMergeNode = async (
  arg1?: SVGFeMergeNodeAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feMergeNode",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feMorphology = async (
  arg1?: SVGFeMorphologyAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feMorphology",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feOffset = async (
  arg1?: SVGFeOffsetAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feOffset",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const fePointLight = async (
  arg1?: SVGFePointLightAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "fePointLight",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feSpecularLighting = async (
  arg1?: SVGFeSpecularLightingAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feSpecularLighting",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feSpotLight = async (
  arg1?: SVGFeSpotLightAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feSpotLight",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feTile = async (arg1?: SVGFeTileAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feTile",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const feTurbulence = async (
  arg1?: SVGFeTurbulenceAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "feTurbulence",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const filter = async (arg1?: SVGFilterAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "filter",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const foreignObject = async (
  arg1?: SVGForeignObjectAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "foreignObject",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const g = async (arg1?: SVGGAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "g",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const image = async (arg1?: SVGImageAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "image",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const line = (arg1?: SVGLineAttributes): ResolvedSlamElement => ({
  tag: "line",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const linearGradient = async (
  arg1?: SVGLinearGradientAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "linearGradient",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const marker = async (arg1?: SVGMarkerAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "marker",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const mask = async (arg1?: SVGMaskAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "mask",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const metadata = async (
  arg1?: SVGMetadataAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "metadata",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const mpath = async (arg1?: SVGMpathAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "mpath",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const path = (arg1?: SVGPathAttributes): ResolvedSlamElement => ({
  tag: "path",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const pattern = async (arg1?: SVGPatternAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "pattern",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const polygon = (arg1?: SVGPolygonAttributes): ResolvedSlamElement => ({
  tag: "polygon",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const polyline = (arg1?: SVGPolylineAttributes): ResolvedSlamElement => ({
  tag: "polyline",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const radialGradient = async (
  arg1?: SVGRadialGradientAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "radialGradient",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const rect = (arg1?: SVGRectAttributes): ResolvedSlamElement => ({
  tag: "rect",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const set = async (arg1?: SVGSetAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "set",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const stop = (arg1?: SVGStopAttributes): ResolvedSlamElement => ({
  tag: "stop",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const svg = async (arg1?: SVGSvgAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "svg",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const switch_ = async (arg1?: SVGSwitch_Attributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "switch",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const symbol = async (arg1?: SVGSymbolAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "symbol",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const text = async (arg1?: SVGTextAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "text",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const textPath = async (
  arg1?: SVGTextPathAttributes | Child,
  ...arg2: Child[]
): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "textPath",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const tspan = async (arg1?: SVGTspanAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "tspan",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const unknown = async (arg1?: SVGUnknownAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "unknown",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};

export const use = (arg1?: SVGUseAttributes): ResolvedSlamElement => ({
  tag: "use",
  type: "element" as "element",
  atts: arg1,
  children: undefined,
});

export const view = async (arg1?: SVGViewAttributes | Child, ...arg2: Child[]): Promise<ResolvedSlamElement> => {
  let r1 = await arg1;
  let r2 = await Promise.all(arg2.map(async item => await item));
  let arg1IsChild = r1?.hasOwnProperty("tag") || r1?.hasOwnProperty("html") || typeof r1 === "string";
  return {
    tag: "view",
    atts: arg1IsChild ? undefined : r1,
    type: "element" as "element",
    children: r1 ? (arg1IsChild ? [r1 as ResolvedChild].concat(r2) : r2) : r2,
  };
};
