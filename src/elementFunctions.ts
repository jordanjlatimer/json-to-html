import { Child, SlamElement } from "./slamInterfaces";
import { buildSlamElement } from "./utils";
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

export function abbr(arg1?: HTMLAbbrAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLAbbrAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "abbr");
}

export function address(arg1?: HTMLAddressAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLAddressAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "address");
}

export function area(arg1?: HTMLAreaAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "area",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function article(arg1?: HTMLArticleAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLArticleAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "article");
}

export function aside(arg1?: HTMLAsideAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLAsideAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "aside");
}

export function audio(arg1?: HTMLAudioAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLAudioAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "audio");
}

export function b(arg1?: HTMLBAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLBAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "b");
}

export function base(arg1?: HTMLBaseAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "base",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function bdi(arg1?: HTMLBdiAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLBdiAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "bdi");
}

export function bdo(arg1?: HTMLBdoAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLBdoAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "bdo");
}

export function blockquote(arg1?: HTMLBlockquoteAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLBlockquoteAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "blockquote");
}

export function body(arg1?: HTMLBodyAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLBodyAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "body");
}

export function br(arg1?: HTMLBrAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "br",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function button(arg1?: HTMLButtonAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLButtonAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "button");
}

export function canvas(arg1?: HTMLCanvasAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLCanvasAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "canvas");
}

export function caption(arg1?: HTMLCaptionAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLCaptionAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "caption");
}

export function cite(arg1?: HTMLCiteAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLCiteAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "cite");
}

export function code(arg1?: HTMLCodeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLCodeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "code");
}

export function col(arg1?: HTMLColAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "col",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function colgroup(arg1?: HTMLColgroupAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLColgroupAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "colgroup");
}

export function data(arg1?: HTMLDataAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDataAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "data");
}

export function datalist(arg1?: HTMLDatalistAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDatalistAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "datalist");
}

export function dd(arg1?: HTMLDdAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDdAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "dd");
}

export function del(arg1?: HTMLDelAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDelAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "del");
}

export function details(arg1?: HTMLDetailsAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDetailsAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "details");
}

export function dfn(arg1?: HTMLDfnAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDfnAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "dfn");
}

export function dialog(arg1?: HTMLDialogAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDialogAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "dialog");
}

export function div(arg1?: HTMLDivAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDivAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "div");
}

export function dl(arg1?: HTMLDlAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDlAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "dl");
}

export function dt(arg1?: HTMLDtAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLDtAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "dt");
}

export function em(arg1?: HTMLEmAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLEmAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "em");
}

export function embed(arg1?: HTMLEmbedAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "embed",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function fieldset(arg1?: HTMLFieldsetAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLFieldsetAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "fieldset");
}

export function figcaption(arg1?: HTMLFigcaptionAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLFigcaptionAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "figcaption");
}

export function figure(arg1?: HTMLFigureAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLFigureAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "figure");
}

export function footer(arg1?: HTMLFooterAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLFooterAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "footer");
}

export function form(arg1?: HTMLFormAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLFormAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "form");
}

export function h1(arg1?: HTMLH1Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH1Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h1");
}

export function h2(arg1?: HTMLH2Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH2Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h2");
}

export function h3(arg1?: HTMLH3Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH3Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h3");
}

export function h4(arg1?: HTMLH4Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH4Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h4");
}

export function h5(arg1?: HTMLH5Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH5Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h5");
}

export function h6(arg1?: HTMLH6Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLH6Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "h6");
}

export function head(arg1?: HTMLHeadAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLHeadAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "head");
}

export function header(arg1?: HTMLHeaderAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLHeaderAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "header");
}

export function hgroup(arg1?: HTMLHgroupAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLHgroupAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "hgroup");
}

export function hr(arg1?: HTMLHrAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "hr",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function html(arg1?: HTMLHtmlAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLHtmlAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "html");
}

export function i(arg1?: HTMLIAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLIAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "i");
}

export function iframe(arg1?: HTMLIframeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLIframeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "iframe");
}

export function img(arg1?: HTMLImgAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "img",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function input(arg1?: HTMLInputAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "input",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function ins(arg1?: HTMLInsAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLInsAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "ins");
}

export function kbd(arg1?: HTMLKbdAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLKbdAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "kbd");
}

export function label(arg1?: HTMLLabelAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLLabelAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "label");
}

export function legend(arg1?: HTMLLegendAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLLegendAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "legend");
}

export function li(arg1?: HTMLLiAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLLiAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "li");
}

export function link(arg1?: HTMLLinkAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "link",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function main(arg1?: HTMLMainAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLMainAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "main");
}

export function map(arg1?: HTMLMapAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLMapAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "map");
}

export function mark(arg1?: HTMLMarkAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLMarkAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "mark");
}

export function menu(arg1?: HTMLMenuAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLMenuAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "menu");
}

export function meta(arg1?: HTMLMetaAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "meta",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function meter(arg1?: HTMLMeterAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLMeterAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "meter");
}

export function nav(arg1?: HTMLNavAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLNavAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "nav");
}

export function noscript(arg1?: HTMLNoscriptAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLNoscriptAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "noscript");
}

export function object(arg1?: HTMLObjectAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLObjectAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "object");
}

export function ol(arg1?: HTMLOlAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLOlAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "ol");
}

export function optgroup(arg1?: HTMLOptgroupAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLOptgroupAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "optgroup");
}

export function option(arg1?: HTMLOptionAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLOptionAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "option");
}

export function output(arg1?: HTMLOutputAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLOutputAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "output");
}

export function p(arg1?: HTMLPAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLPAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "p");
}

export function param(arg1?: HTMLParamAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "param",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function picture(arg1?: HTMLPictureAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLPictureAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "picture");
}

export function pre(arg1?: HTMLPreAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLPreAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "pre");
}

export function progress(arg1?: HTMLProgressAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLProgressAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "progress");
}

export function q(arg1?: HTMLQAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLQAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "q");
}

export function rp(arg1?: HTMLRpAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLRpAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "rp");
}

export function rt(arg1?: HTMLRtAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLRtAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "rt");
}

export function ruby(arg1?: HTMLRubyAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLRubyAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "ruby");
}

export function s(arg1?: HTMLSAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "s");
}

export function samp(arg1?: HTMLSampAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSampAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "samp");
}

export function script(arg1?: HTMLScriptAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLScriptAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "script");
}

export function section(arg1?: HTMLSectionAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSectionAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "section");
}

export function select(arg1?: HTMLSelectAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSelectAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "select");
}

export function slot(arg1?: HTMLSlotAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSlotAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "slot");
}

export function small(arg1?: HTMLSmallAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSmallAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "small");
}

export function source(arg1?: HTMLSourceAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "source",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function span(arg1?: HTMLSpanAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSpanAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "span");
}

export function strong(arg1?: HTMLStrongAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLStrongAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "strong");
}

export function sub(arg1?: HTMLSubAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSubAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "sub");
}

export function summary(arg1?: HTMLSummaryAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSummaryAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "summary");
}

export function sup(arg1?: HTMLSupAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLSupAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "sup");
}

export function table(arg1?: HTMLTableAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTableAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "table");
}

export function tbody(arg1?: HTMLTbodyAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTbodyAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "tbody");
}

export function td(arg1?: HTMLTdAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTdAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "td");
}

export function template(arg1?: HTMLTemplateAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTemplateAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "template");
}

export function textarea(arg1?: HTMLTextareaAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTextareaAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "textarea");
}

export function tfoot(arg1?: HTMLTfootAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTfootAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "tfoot");
}

export function th(arg1?: HTMLThAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLThAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "th");
}

export function thead(arg1?: HTMLTheadAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTheadAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "thead");
}

export function time(arg1?: HTMLTimeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTimeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "time");
}

export function title(arg1?: HTMLTitleAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTitleAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "title");
}

export function tr(arg1?: HTMLTrAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLTrAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "tr");
}

export function track(arg1?: HTMLTrackAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "track",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function u(arg1?: HTMLUAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLUAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "u");
}

export function ul(arg1?: HTMLUlAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLUlAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "ul");
}

export function var_(arg1?: HTMLVar_Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLVar_Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "var");
}

export function video(arg1?: HTMLVideoAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: HTMLVideoAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "video");
}

export function wbr(arg1?: HTMLWbrAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "wbr",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function a(arg1?: SVGAAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGAAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "a");
}

export function animate(arg1?: SVGAnimateAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGAnimateAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "animate");
}

export function animateMotion(arg1?: SVGAnimateMotionAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGAnimateMotionAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "animateMotion");
}

export function animateTransform(arg1?: SVGAnimateTransformAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGAnimateTransformAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "animateTransform");
}

export function circle(arg1?: SVGCircleAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "circle",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function clipPath(arg1?: SVGClipPathAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGClipPathAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "clipPath");
}

export function defs(arg1?: SVGDefsAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGDefsAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "defs");
}

export function desc(arg1?: SVGDescAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGDescAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "desc");
}

export function discard(arg1?: SVGDiscardAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGDiscardAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "discard");
}

export function ellipse(arg1?: SVGEllipseAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "ellipse",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function feBlend(arg1?: SVGFeBlendAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeBlendAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feBlend");
}

export function feColorMatrix(arg1?: SVGFeColorMatrixAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeColorMatrixAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feColorMatrix");
}

export function feComponentTransfer(arg1?: SVGFeComponentTransferAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeComponentTransferAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feComponentTransfer");
}

export function feComposite(arg1?: SVGFeCompositeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeCompositeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feComposite");
}

export function feConvolveMatrix(arg1?: SVGFeConvolveMatrixAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeConvolveMatrixAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feConvolveMatrix");
}

export function feDiffuseLighting(arg1?: SVGFeDiffuseLightingAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeDiffuseLightingAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feDiffuseLighting");
}

export function feDisplacementMap(arg1?: SVGFeDisplacementMapAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeDisplacementMapAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feDisplacementMap");
}

export function feDistantLight(arg1?: SVGFeDistantLightAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeDistantLightAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feDistantLight");
}

export function feDropShadow(arg1?: SVGFeDropShadowAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeDropShadowAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feDropShadow");
}

export function feFlood(arg1?: SVGFeFloodAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeFloodAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feFlood");
}

export function feFuncA(arg1?: SVGFeFuncAAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeFuncAAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feFuncA");
}

export function feFuncB(arg1?: SVGFeFuncBAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeFuncBAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feFuncB");
}

export function feFuncG(arg1?: SVGFeFuncGAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeFuncGAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feFuncG");
}

export function feFuncR(arg1?: SVGFeFuncRAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeFuncRAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feFuncR");
}

export function feGaussianBlur(arg1?: SVGFeGaussianBlurAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeGaussianBlurAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feGaussianBlur");
}

export function feImage(arg1?: SVGFeImageAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeImageAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feImage");
}

export function feMerge(arg1?: SVGFeMergeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeMergeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feMerge");
}

export function feMergeNode(arg1?: SVGFeMergeNodeAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeMergeNodeAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feMergeNode");
}

export function feMorphology(arg1?: SVGFeMorphologyAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeMorphologyAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feMorphology");
}

export function feOffset(arg1?: SVGFeOffsetAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeOffsetAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feOffset");
}

export function fePointLight(arg1?: SVGFePointLightAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFePointLightAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "fePointLight");
}

export function feSpecularLighting(arg1?: SVGFeSpecularLightingAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeSpecularLightingAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feSpecularLighting");
}

export function feSpotLight(arg1?: SVGFeSpotLightAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeSpotLightAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feSpotLight");
}

export function feTile(arg1?: SVGFeTileAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeTileAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feTile");
}

export function feTurbulence(arg1?: SVGFeTurbulenceAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFeTurbulenceAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "feTurbulence");
}

export function filter(arg1?: SVGFilterAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGFilterAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "filter");
}

export function foreignObject(arg1?: SVGForeignObjectAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGForeignObjectAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "foreignObject");
}

export function g(arg1?: SVGGAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGGAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "g");
}

export function image(arg1?: SVGImageAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGImageAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "image");
}

export function line(arg1?: SVGLineAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "line",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function linearGradient(arg1?: SVGLinearGradientAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGLinearGradientAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "linearGradient");
}

export function marker(arg1?: SVGMarkerAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGMarkerAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "marker");
}

export function mask(arg1?: SVGMaskAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGMaskAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "mask");
}

export function metadata(arg1?: SVGMetadataAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGMetadataAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "metadata");
}

export function mpath(arg1?: SVGMpathAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGMpathAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "mpath");
}

export function path(arg1?: SVGPathAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "path",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function pattern(arg1?: SVGPatternAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGPatternAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "pattern");
}

export function polygon(arg1?: SVGPolygonAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "polygon",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function polyline(arg1?: SVGPolylineAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "polyline",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function radialGradient(arg1?: SVGRadialGradientAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGRadialGradientAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "radialGradient");
}

export function rect(arg1?: SVGRectAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "rect",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function set(arg1?: SVGSetAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGSetAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "set");
}

export function stop(arg1?: SVGStopAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "stop",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function svg(arg1?: SVGSvgAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGSvgAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "svg");
}

export function switch_(arg1?: SVGSwitch_Attributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGSwitch_Attributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "switch");
}

export function symbol(arg1?: SVGSymbolAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGSymbolAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "symbol");
}

export function text(arg1?: SVGTextAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGTextAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "text");
}

export function textPath(arg1?: SVGTextPathAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGTextPathAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "textPath");
}

export function tspan(arg1?: SVGTspanAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGTspanAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "tspan");
}

export function unknown(arg1?: SVGUnknownAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGUnknownAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "unknown");
}

export function use(arg1?: SVGUseAttributes): SlamElement {
  let css = arg1 ? arg1["css"] : undefined;
  let js = arg1 ? arg1["js"] : undefined;
  return {
    type: "element",
    tag: "use",
    atts: { ...arg1, css: css, js: js },
    children: undefined,
  };
}

export function view(arg1?: SVGViewAttributes | Child, ...arg2: Child[]): SlamElement {
  let atts: SVGViewAttributes | undefined = undefined;
  return buildSlamElement(arg1, arg2, atts, "view");
}
