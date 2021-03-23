import { Child, SlamElement } from "./slamInterfaces";
import { resolveAndType } from "./utils";
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

export const abbr = async (arg1?: HTMLAbbrAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLAbbrAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "abbr");
};

export const address = async (arg1?: HTMLAddressAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLAddressAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "address");
};

export const area = (arg1?: HTMLAreaAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "area",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const article = async (arg1?: HTMLArticleAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLArticleAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "article");
};

export const aside = async (arg1?: HTMLAsideAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLAsideAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "aside");
};

export const audio = async (arg1?: HTMLAudioAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLAudioAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "audio");
};

export const b = async (arg1?: HTMLBAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLBAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "b");
};

export const base = (arg1?: HTMLBaseAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "base",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const bdi = async (arg1?: HTMLBdiAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLBdiAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "bdi");
};

export const bdo = async (arg1?: HTMLBdoAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLBdoAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "bdo");
};

export const blockquote = async (arg1?: HTMLBlockquoteAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLBlockquoteAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "blockquote");
};

export const body = async (arg1?: HTMLBodyAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLBodyAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "body");
};

export const br = (arg1?: HTMLBrAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "br",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const button = async (arg1?: HTMLButtonAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLButtonAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "button");
};

export const canvas = async (arg1?: HTMLCanvasAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLCanvasAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "canvas");
};

export const caption = async (arg1?: HTMLCaptionAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLCaptionAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "caption");
};

export const cite = async (arg1?: HTMLCiteAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLCiteAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "cite");
};

export const code = async (arg1?: HTMLCodeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLCodeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "code");
};

export const col = (arg1?: HTMLColAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "col",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const colgroup = async (arg1?: HTMLColgroupAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLColgroupAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "colgroup");
};

export const data = async (arg1?: HTMLDataAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDataAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "data");
};

export const datalist = async (arg1?: HTMLDatalistAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDatalistAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "datalist");
};

export const dd = async (arg1?: HTMLDdAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDdAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "dd");
};

export const del = async (arg1?: HTMLDelAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDelAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "del");
};

export const details = async (arg1?: HTMLDetailsAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDetailsAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "details");
};

export const dfn = async (arg1?: HTMLDfnAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDfnAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "dfn");
};

export const dialog = async (arg1?: HTMLDialogAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDialogAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "dialog");
};

export const div = async (arg1?: HTMLDivAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDivAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "div");
};

export const dl = async (arg1?: HTMLDlAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDlAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "dl");
};

export const dt = async (arg1?: HTMLDtAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLDtAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "dt");
};

export const em = async (arg1?: HTMLEmAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLEmAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "em");
};

export const embed = (arg1?: HTMLEmbedAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "embed",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const fieldset = async (arg1?: HTMLFieldsetAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLFieldsetAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "fieldset");
};

export const figcaption = async (arg1?: HTMLFigcaptionAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLFigcaptionAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "figcaption");
};

export const figure = async (arg1?: HTMLFigureAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLFigureAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "figure");
};

export const footer = async (arg1?: HTMLFooterAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLFooterAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "footer");
};

export const form = async (arg1?: HTMLFormAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLFormAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "form");
};

export const h1 = async (arg1?: HTMLH1Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH1Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h1");
};

export const h2 = async (arg1?: HTMLH2Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH2Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h2");
};

export const h3 = async (arg1?: HTMLH3Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH3Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h3");
};

export const h4 = async (arg1?: HTMLH4Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH4Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h4");
};

export const h5 = async (arg1?: HTMLH5Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH5Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h5");
};

export const h6 = async (arg1?: HTMLH6Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLH6Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "h6");
};

export const head = async (arg1?: HTMLHeadAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLHeadAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "head");
};

export const header = async (arg1?: HTMLHeaderAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLHeaderAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "header");
};

export const hgroup = async (arg1?: HTMLHgroupAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLHgroupAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "hgroup");
};

export const hr = (arg1?: HTMLHrAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "hr",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const html = async (arg1?: HTMLHtmlAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLHtmlAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "html");
};

export const i = async (arg1?: HTMLIAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLIAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "i");
};

export const iframe = async (arg1?: HTMLIframeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLIframeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "iframe");
};

export const img = (arg1?: HTMLImgAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "img",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const input = (arg1?: HTMLInputAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "input",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const ins = async (arg1?: HTMLInsAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLInsAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "ins");
};

export const kbd = async (arg1?: HTMLKbdAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLKbdAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "kbd");
};

export const label = async (arg1?: HTMLLabelAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLLabelAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "label");
};

export const legend = async (arg1?: HTMLLegendAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLLegendAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "legend");
};

export const li = async (arg1?: HTMLLiAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLLiAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "li");
};

export const link = (arg1?: HTMLLinkAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "link",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const main = async (arg1?: HTMLMainAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLMainAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "main");
};

export const map = async (arg1?: HTMLMapAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLMapAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "map");
};

export const mark = async (arg1?: HTMLMarkAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLMarkAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "mark");
};

export const menu = async (arg1?: HTMLMenuAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLMenuAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "menu");
};

export const meta = (arg1?: HTMLMetaAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "meta",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const meter = async (arg1?: HTMLMeterAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLMeterAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "meter");
};

export const nav = async (arg1?: HTMLNavAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLNavAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "nav");
};

export const noscript = async (arg1?: HTMLNoscriptAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLNoscriptAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "noscript");
};

export const object = async (arg1?: HTMLObjectAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLObjectAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "object");
};

export const ol = async (arg1?: HTMLOlAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLOlAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "ol");
};

export const optgroup = async (arg1?: HTMLOptgroupAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLOptgroupAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "optgroup");
};

export const option = async (arg1?: HTMLOptionAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLOptionAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "option");
};

export const output = async (arg1?: HTMLOutputAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLOutputAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "output");
};

export const p = async (arg1?: HTMLPAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLPAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "p");
};

export const param = (arg1?: HTMLParamAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "param",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const picture = async (arg1?: HTMLPictureAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLPictureAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "picture");
};

export const pre = async (arg1?: HTMLPreAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLPreAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "pre");
};

export const progress = async (arg1?: HTMLProgressAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLProgressAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "progress");
};

export const q = async (arg1?: HTMLQAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLQAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "q");
};

export const rp = async (arg1?: HTMLRpAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLRpAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "rp");
};

export const rt = async (arg1?: HTMLRtAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLRtAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "rt");
};

export const ruby = async (arg1?: HTMLRubyAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLRubyAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "ruby");
};

export const s = async (arg1?: HTMLSAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "s");
};

export const samp = async (arg1?: HTMLSampAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSampAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "samp");
};

export const script = async (arg1?: HTMLScriptAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLScriptAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "script");
};

export const section = async (arg1?: HTMLSectionAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSectionAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "section");
};

export const select = async (arg1?: HTMLSelectAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSelectAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "select");
};

export const slot = async (arg1?: HTMLSlotAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSlotAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "slot");
};

export const small = async (arg1?: HTMLSmallAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSmallAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "small");
};

export const source = (arg1?: HTMLSourceAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "source",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const span = async (arg1?: HTMLSpanAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSpanAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "span");
};

export const strong = async (arg1?: HTMLStrongAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLStrongAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "strong");
};

export const sub = async (arg1?: HTMLSubAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSubAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "sub");
};

export const summary = async (arg1?: HTMLSummaryAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSummaryAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "summary");
};

export const sup = async (arg1?: HTMLSupAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLSupAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "sup");
};

export const table = async (arg1?: HTMLTableAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTableAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "table");
};

export const tbody = async (arg1?: HTMLTbodyAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTbodyAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "tbody");
};

export const td = async (arg1?: HTMLTdAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTdAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "td");
};

export const template = async (arg1?: HTMLTemplateAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTemplateAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "template");
};

export const textarea = async (arg1?: HTMLTextareaAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTextareaAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "textarea");
};

export const tfoot = async (arg1?: HTMLTfootAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTfootAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "tfoot");
};

export const th = async (arg1?: HTMLThAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLThAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "th");
};

export const thead = async (arg1?: HTMLTheadAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTheadAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "thead");
};

export const time = async (arg1?: HTMLTimeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTimeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "time");
};

export const title = async (arg1?: HTMLTitleAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTitleAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "title");
};

export const tr = async (arg1?: HTMLTrAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLTrAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "tr");
};

export const track = (arg1?: HTMLTrackAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "track",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const u = async (arg1?: HTMLUAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLUAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "u");
};

export const ul = async (arg1?: HTMLUlAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLUlAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "ul");
};

export const var_ = async (arg1?: HTMLVar_Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLVar_Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "var");
};

export const video = async (arg1?: HTMLVideoAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: HTMLVideoAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "video");
};

export const wbr = (arg1?: HTMLWbrAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "wbr",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const a = async (arg1?: SVGAAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGAAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "a");
};

export const animate = async (arg1?: SVGAnimateAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGAnimateAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "animate");
};

export const animateMotion = async (
  arg1?: SVGAnimateMotionAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGAnimateMotionAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "animateMotion");
};

export const animateTransform = async (
  arg1?: SVGAnimateTransformAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGAnimateTransformAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "animateTransform");
};

export const circle = (arg1?: SVGCircleAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "circle",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const clipPath = async (arg1?: SVGClipPathAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGClipPathAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "clipPath");
};

export const defs = async (arg1?: SVGDefsAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGDefsAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "defs");
};

export const desc = async (arg1?: SVGDescAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGDescAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "desc");
};

export const discard = async (arg1?: SVGDiscardAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGDiscardAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "discard");
};

export const ellipse = (arg1?: SVGEllipseAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "ellipse",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const feBlend = async (arg1?: SVGFeBlendAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeBlendAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feBlend");
};

export const feColorMatrix = async (
  arg1?: SVGFeColorMatrixAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeColorMatrixAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feColorMatrix");
};

export const feComponentTransfer = async (
  arg1?: SVGFeComponentTransferAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeComponentTransferAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feComponentTransfer");
};

export const feComposite = async (arg1?: SVGFeCompositeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeCompositeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feComposite");
};

export const feConvolveMatrix = async (
  arg1?: SVGFeConvolveMatrixAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeConvolveMatrixAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feConvolveMatrix");
};

export const feDiffuseLighting = async (
  arg1?: SVGFeDiffuseLightingAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeDiffuseLightingAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feDiffuseLighting");
};

export const feDisplacementMap = async (
  arg1?: SVGFeDisplacementMapAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeDisplacementMapAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feDisplacementMap");
};

export const feDistantLight = async (
  arg1?: SVGFeDistantLightAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeDistantLightAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feDistantLight");
};

export const feDropShadow = async (
  arg1?: SVGFeDropShadowAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeDropShadowAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feDropShadow");
};

export const feFlood = async (arg1?: SVGFeFloodAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeFloodAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feFlood");
};

export const feFuncA = async (arg1?: SVGFeFuncAAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeFuncAAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feFuncA");
};

export const feFuncB = async (arg1?: SVGFeFuncBAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeFuncBAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feFuncB");
};

export const feFuncG = async (arg1?: SVGFeFuncGAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeFuncGAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feFuncG");
};

export const feFuncR = async (arg1?: SVGFeFuncRAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeFuncRAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feFuncR");
};

export const feGaussianBlur = async (
  arg1?: SVGFeGaussianBlurAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeGaussianBlurAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feGaussianBlur");
};

export const feImage = async (arg1?: SVGFeImageAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeImageAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feImage");
};

export const feMerge = async (arg1?: SVGFeMergeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeMergeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feMerge");
};

export const feMergeNode = async (arg1?: SVGFeMergeNodeAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeMergeNodeAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feMergeNode");
};

export const feMorphology = async (
  arg1?: SVGFeMorphologyAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeMorphologyAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feMorphology");
};

export const feOffset = async (arg1?: SVGFeOffsetAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeOffsetAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feOffset");
};

export const fePointLight = async (
  arg1?: SVGFePointLightAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFePointLightAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "fePointLight");
};

export const feSpecularLighting = async (
  arg1?: SVGFeSpecularLightingAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeSpecularLightingAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feSpecularLighting");
};

export const feSpotLight = async (arg1?: SVGFeSpotLightAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeSpotLightAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feSpotLight");
};

export const feTile = async (arg1?: SVGFeTileAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeTileAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feTile");
};

export const feTurbulence = async (
  arg1?: SVGFeTurbulenceAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFeTurbulenceAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "feTurbulence");
};

export const filter = async (arg1?: SVGFilterAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGFilterAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "filter");
};

export const foreignObject = async (
  arg1?: SVGForeignObjectAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGForeignObjectAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "foreignObject");
};

export const g = async (arg1?: SVGGAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGGAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "g");
};

export const image = async (arg1?: SVGImageAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGImageAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "image");
};

export const line = (arg1?: SVGLineAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "line",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const linearGradient = async (
  arg1?: SVGLinearGradientAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGLinearGradientAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "linearGradient");
};

export const marker = async (arg1?: SVGMarkerAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGMarkerAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "marker");
};

export const mask = async (arg1?: SVGMaskAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGMaskAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "mask");
};

export const metadata = async (arg1?: SVGMetadataAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGMetadataAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "metadata");
};

export const mpath = async (arg1?: SVGMpathAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGMpathAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "mpath");
};

export const path = (arg1?: SVGPathAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "path",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const pattern = async (arg1?: SVGPatternAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGPatternAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "pattern");
};

export const polygon = (arg1?: SVGPolygonAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "polygon",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const polyline = (arg1?: SVGPolylineAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "polyline",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const radialGradient = async (
  arg1?: SVGRadialGradientAttributes | Child,
  ...arg2: Child[]
): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGRadialGradientAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "radialGradient");
};

export const rect = (arg1?: SVGRectAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "rect",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const set = async (arg1?: SVGSetAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGSetAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "set");
};

export const stop = (arg1?: SVGStopAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "stop",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const svg = async (arg1?: SVGSvgAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGSvgAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "svg");
};

export const switch_ = async (arg1?: SVGSwitch_Attributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGSwitch_Attributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "switch");
};

export const symbol = async (arg1?: SVGSymbolAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGSymbolAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "symbol");
};

export const text = async (arg1?: SVGTextAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGTextAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "text");
};

export const textPath = async (arg1?: SVGTextPathAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGTextPathAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "textPath");
};

export const tspan = async (arg1?: SVGTspanAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGTspanAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "tspan");
};

export const unknown = async (arg1?: SVGUnknownAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGUnknownAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "unknown");
};

export const use = (arg1?: SVGUseAttributes): SlamElement => {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "use",
    atts: { ...arg1, css: undefined, js: undefined },
    children: undefined,
  };
};

export const view = async (arg1?: SVGViewAttributes | Child, ...arg2: Child[]): Promise<SlamElement> => {
  let r2 = await Promise.all(arg2.map(async item => await item));
  let atts: SVGViewAttributes | undefined = undefined;
  return await resolveAndType(arg1, r2, atts, "view");
};
