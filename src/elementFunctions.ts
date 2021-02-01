import { SlamHTMLAbbrAttributes, SlamHTMLAddressAttributes, SlamHTMLAreaAttributes, SlamHTMLArticleAttributes, SlamHTMLAsideAttributes, SlamHTMLAudioAttributes, SlamHTMLBAttributes, SlamHTMLBaseAttributes, SlamHTMLBdiAttributes, SlamHTMLBdoAttributes, SlamHTMLBlockquoteAttributes, SlamHTMLBodyAttributes, SlamHTMLBrAttributes, SlamHTMLButtonAttributes, SlamHTMLCanvasAttributes, SlamHTMLCaptionAttributes, SlamHTMLCiteAttributes, SlamHTMLCodeAttributes, SlamHTMLColAttributes, SlamHTMLColgroupAttributes, SlamHTMLDataAttributes, SlamHTMLDatalistAttributes, SlamHTMLDdAttributes, SlamHTMLDelAttributes, SlamHTMLDetailsAttributes, SlamHTMLDfnAttributes, SlamHTMLDialogAttributes, SlamHTMLDivAttributes, SlamHTMLDlAttributes, SlamHTMLDtAttributes, SlamHTMLEmAttributes, SlamHTMLEmbedAttributes, SlamHTMLFieldsetAttributes, SlamHTMLFigcaptionAttributes, SlamHTMLFigureAttributes, SlamHTMLFooterAttributes, SlamHTMLFormAttributes, SlamHTMLH1Attributes, SlamHTMLH2Attributes, SlamHTMLH3Attributes, SlamHTMLH4Attributes, SlamHTMLH5Attributes, SlamHTMLH6Attributes, SlamHTMLHeadAttributes, SlamHTMLHeaderAttributes, SlamHTMLHgroupAttributes, SlamHTMLHrAttributes, SlamHTMLHtmlAttributes, SlamHTMLIAttributes, SlamHTMLIframeAttributes, SlamHTMLImgAttributes, SlamHTMLInputAttributes, SlamHTMLInsAttributes, SlamHTMLKbdAttributes, SlamHTMLLabelAttributes, SlamHTMLLegendAttributes, SlamHTMLLiAttributes, SlamHTMLLinkAttributes, SlamHTMLMainAttributes, SlamHTMLMapAttributes, SlamHTMLMarkAttributes, SlamHTMLMenuAttributes, SlamHTMLMetaAttributes, SlamHTMLMeterAttributes, SlamHTMLNavAttributes, SlamHTMLNoscriptAttributes, SlamHTMLObjectAttributes, SlamHTMLOlAttributes, SlamHTMLOptgroupAttributes, SlamHTMLOptionAttributes, SlamHTMLOutputAttributes, SlamHTMLPAttributes, SlamHTMLParamAttributes, SlamHTMLPictureAttributes, SlamHTMLPreAttributes, SlamHTMLProgressAttributes, SlamHTMLQAttributes, SlamHTMLRpAttributes, SlamHTMLRtAttributes, SlamHTMLRubyAttributes, SlamHTMLSAttributes, SlamHTMLSampAttributes, SlamHTMLScriptAttributes, SlamHTMLSectionAttributes, SlamHTMLSelectAttributes, SlamHTMLSlotAttributes, SlamHTMLSmallAttributes, SlamHTMLSourceAttributes, SlamHTMLSpanAttributes, SlamHTMLStrongAttributes, SlamHTMLSubAttributes, SlamHTMLSummaryAttributes, SlamHTMLSupAttributes, SlamHTMLTableAttributes, SlamHTMLTbodyAttributes, SlamHTMLTdAttributes, SlamHTMLTemplateAttributes, SlamHTMLTextareaAttributes, SlamHTMLTfootAttributes, SlamHTMLThAttributes, SlamHTMLTheadAttributes, SlamHTMLTimeAttributes, SlamHTMLTitleAttributes, SlamHTMLTrAttributes, SlamHTMLTrackAttributes, SlamHTMLUAttributes, SlamHTMLUlAttributes, SlamHTMLVar_Attributes, SlamHTMLVideoAttributes, SlamHTMLWbrAttributes} from "./htmlInterfaces"
import { SlamSVGAAttributes, SlamSVGAnimateAttributes, SlamSVGAnimateMotionAttributes, SlamSVGAnimateTransformAttributes, SlamSVGCircleAttributes, SlamSVGClipPathAttributes, SlamSVGDefsAttributes, SlamSVGDescAttributes, SlamSVGDiscardAttributes, SlamSVGEllipseAttributes, SlamSVGFeBlendAttributes, SlamSVGFeColorMatrixAttributes, SlamSVGFeComponentTransferAttributes, SlamSVGFeCompositeAttributes, SlamSVGFeConvolveMatrixAttributes, SlamSVGFeDiffuseLightingAttributes, SlamSVGFeDisplacementMapAttributes, SlamSVGFeDistantLightAttributes, SlamSVGFeDropShadowAttributes, SlamSVGFeFloodAttributes, SlamSVGFeFuncAAttributes, SlamSVGFeFuncBAttributes, SlamSVGFeFuncGAttributes, SlamSVGFeFuncRAttributes, SlamSVGFeGaussianBlurAttributes, SlamSVGFeImageAttributes, SlamSVGFeMergeAttributes, SlamSVGFeMergeNodeAttributes, SlamSVGFeMorphologyAttributes, SlamSVGFeOffsetAttributes, SlamSVGFePointLightAttributes, SlamSVGFeSpecularLightingAttributes, SlamSVGFeSpotLightAttributes, SlamSVGFeTileAttributes, SlamSVGFeTurbulenceAttributes, SlamSVGFilterAttributes, SlamSVGForeignObjectAttributes, SlamSVGGAttributes, SlamSVGImageAttributes, SlamSVGLineAttributes, SlamSVGLinearGradientAttributes, SlamSVGMarkerAttributes, SlamSVGMaskAttributes, SlamSVGMetadataAttributes, SlamSVGMpathAttributes, SlamSVGPathAttributes, SlamSVGPatternAttributes, SlamSVGPolygonAttributes, SlamSVGPolylineAttributes, SlamSVGRadialGradientAttributes, SlamSVGRectAttributes, SlamSVGSetAttributes, SlamSVGStopAttributes, SlamSVGSvgAttributes, SlamSVGSwitch_Attributes, SlamSVGSymbolAttributes, SlamSVGTextAttributes, SlamSVGTextPathAttributes, SlamSVGTspanAttributes, SlamSVGUnknownAttributes, SlamSVGUseAttributes, SlamSVGViewAttributes} from "./svgInterfaces"
import { genElemString } from "./baseFunctions";

function abbr(atts?: SlamHTMLAbbrAttributes, ...children: string[]): string;
function abbr(...children: string[]): string;
function abbr(): string;
function abbr(arg1?: SlamHTMLAbbrAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("abbr", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("abbr", arg1, arg2);
  }
}

function address(atts?: SlamHTMLAddressAttributes, ...children: string[]): string;
function address(...children: string[]): string;
function address(): string;
function address(arg1?: SlamHTMLAddressAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("address", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("address", arg1, arg2);
  }
}

function area(atts?: SlamHTMLAreaAttributes): string;
function area(): string;
function area(arg1?: SlamHTMLAreaAttributes) {
  return genElemString("area", arg1, []);
}

function article(atts?: SlamHTMLArticleAttributes, ...children: string[]): string;
function article(...children: string[]): string;
function article(): string;
function article(arg1?: SlamHTMLArticleAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("article", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("article", arg1, arg2);
  }
}

function aside(atts?: SlamHTMLAsideAttributes, ...children: string[]): string;
function aside(...children: string[]): string;
function aside(): string;
function aside(arg1?: SlamHTMLAsideAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("aside", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("aside", arg1, arg2);
  }
}

function audio(atts?: SlamHTMLAudioAttributes, ...children: string[]): string;
function audio(...children: string[]): string;
function audio(): string;
function audio(arg1?: SlamHTMLAudioAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("audio", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("audio", arg1, arg2);
  }
}

function b(atts?: SlamHTMLBAttributes, ...children: string[]): string;
function b(...children: string[]): string;
function b(): string;
function b(arg1?: SlamHTMLBAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("b", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("b", arg1, arg2);
  }
}

function base(atts?: SlamHTMLBaseAttributes): string;
function base(): string;
function base(arg1?: SlamHTMLBaseAttributes) {
  return genElemString("base", arg1, []);
}

function bdi(atts?: SlamHTMLBdiAttributes, ...children: string[]): string;
function bdi(...children: string[]): string;
function bdi(): string;
function bdi(arg1?: SlamHTMLBdiAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("bdi", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("bdi", arg1, arg2);
  }
}

function bdo(atts?: SlamHTMLBdoAttributes, ...children: string[]): string;
function bdo(...children: string[]): string;
function bdo(): string;
function bdo(arg1?: SlamHTMLBdoAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("bdo", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("bdo", arg1, arg2);
  }
}

function blockquote(atts?: SlamHTMLBlockquoteAttributes, ...children: string[]): string;
function blockquote(...children: string[]): string;
function blockquote(): string;
function blockquote(arg1?: SlamHTMLBlockquoteAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("blockquote", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("blockquote", arg1, arg2);
  }
}

function body(atts?: SlamHTMLBodyAttributes, ...children: string[]): string;
function body(...children: string[]): string;
function body(): string;
function body(arg1?: SlamHTMLBodyAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("body", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("body", arg1, arg2);
  }
}

function br(atts?: SlamHTMLBrAttributes): string;
function br(): string;
function br(arg1?: SlamHTMLBrAttributes) {
  return genElemString("br", arg1, []);
}

function button(atts?: SlamHTMLButtonAttributes, ...children: string[]): string;
function button(...children: string[]): string;
function button(): string;
function button(arg1?: SlamHTMLButtonAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("button", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("button", arg1, arg2);
  }
}

function canvas(atts?: SlamHTMLCanvasAttributes, ...children: string[]): string;
function canvas(...children: string[]): string;
function canvas(): string;
function canvas(arg1?: SlamHTMLCanvasAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("canvas", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("canvas", arg1, arg2);
  }
}

function caption(atts?: SlamHTMLCaptionAttributes, ...children: string[]): string;
function caption(...children: string[]): string;
function caption(): string;
function caption(arg1?: SlamHTMLCaptionAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("caption", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("caption", arg1, arg2);
  }
}

function cite(atts?: SlamHTMLCiteAttributes, ...children: string[]): string;
function cite(...children: string[]): string;
function cite(): string;
function cite(arg1?: SlamHTMLCiteAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("cite", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("cite", arg1, arg2);
  }
}

function code(atts?: SlamHTMLCodeAttributes, ...children: string[]): string;
function code(...children: string[]): string;
function code(): string;
function code(arg1?: SlamHTMLCodeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("code", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("code", arg1, arg2);
  }
}

function col(atts?: SlamHTMLColAttributes): string;
function col(): string;
function col(arg1?: SlamHTMLColAttributes) {
  return genElemString("col", arg1, []);
}

function colgroup(atts?: SlamHTMLColgroupAttributes, ...children: string[]): string;
function colgroup(...children: string[]): string;
function colgroup(): string;
function colgroup(arg1?: SlamHTMLColgroupAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("colgroup", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("colgroup", arg1, arg2);
  }
}

function data(atts?: SlamHTMLDataAttributes, ...children: string[]): string;
function data(...children: string[]): string;
function data(): string;
function data(arg1?: SlamHTMLDataAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("data", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("data", arg1, arg2);
  }
}

function datalist(atts?: SlamHTMLDatalistAttributes, ...children: string[]): string;
function datalist(...children: string[]): string;
function datalist(): string;
function datalist(arg1?: SlamHTMLDatalistAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("datalist", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("datalist", arg1, arg2);
  }
}

function dd(atts?: SlamHTMLDdAttributes, ...children: string[]): string;
function dd(...children: string[]): string;
function dd(): string;
function dd(arg1?: SlamHTMLDdAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("dd", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("dd", arg1, arg2);
  }
}

function del(atts?: SlamHTMLDelAttributes, ...children: string[]): string;
function del(...children: string[]): string;
function del(): string;
function del(arg1?: SlamHTMLDelAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("del", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("del", arg1, arg2);
  }
}

function details(atts?: SlamHTMLDetailsAttributes, ...children: string[]): string;
function details(...children: string[]): string;
function details(): string;
function details(arg1?: SlamHTMLDetailsAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("details", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("details", arg1, arg2);
  }
}

function dfn(atts?: SlamHTMLDfnAttributes, ...children: string[]): string;
function dfn(...children: string[]): string;
function dfn(): string;
function dfn(arg1?: SlamHTMLDfnAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("dfn", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("dfn", arg1, arg2);
  }
}

function dialog(atts?: SlamHTMLDialogAttributes, ...children: string[]): string;
function dialog(...children: string[]): string;
function dialog(): string;
function dialog(arg1?: SlamHTMLDialogAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("dialog", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("dialog", arg1, arg2);
  }
}

function div(atts?: SlamHTMLDivAttributes, ...children: string[]): string;
function div(...children: string[]): string;
function div(): string;
function div(arg1?: SlamHTMLDivAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("div", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("div", arg1, arg2);
  }
}

function dl(atts?: SlamHTMLDlAttributes, ...children: string[]): string;
function dl(...children: string[]): string;
function dl(): string;
function dl(arg1?: SlamHTMLDlAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("dl", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("dl", arg1, arg2);
  }
}

function dt(atts?: SlamHTMLDtAttributes, ...children: string[]): string;
function dt(...children: string[]): string;
function dt(): string;
function dt(arg1?: SlamHTMLDtAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("dt", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("dt", arg1, arg2);
  }
}

function em(atts?: SlamHTMLEmAttributes, ...children: string[]): string;
function em(...children: string[]): string;
function em(): string;
function em(arg1?: SlamHTMLEmAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("em", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("em", arg1, arg2);
  }
}

function embed(atts?: SlamHTMLEmbedAttributes): string;
function embed(): string;
function embed(arg1?: SlamHTMLEmbedAttributes) {
  return genElemString("embed", arg1, []);
}

function fieldset(atts?: SlamHTMLFieldsetAttributes, ...children: string[]): string;
function fieldset(...children: string[]): string;
function fieldset(): string;
function fieldset(arg1?: SlamHTMLFieldsetAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("fieldset", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("fieldset", arg1, arg2);
  }
}

function figcaption(atts?: SlamHTMLFigcaptionAttributes, ...children: string[]): string;
function figcaption(...children: string[]): string;
function figcaption(): string;
function figcaption(arg1?: SlamHTMLFigcaptionAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("figcaption", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("figcaption", arg1, arg2);
  }
}

function figure(atts?: SlamHTMLFigureAttributes, ...children: string[]): string;
function figure(...children: string[]): string;
function figure(): string;
function figure(arg1?: SlamHTMLFigureAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("figure", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("figure", arg1, arg2);
  }
}

function footer(atts?: SlamHTMLFooterAttributes, ...children: string[]): string;
function footer(...children: string[]): string;
function footer(): string;
function footer(arg1?: SlamHTMLFooterAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("footer", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("footer", arg1, arg2);
  }
}

function form(atts?: SlamHTMLFormAttributes, ...children: string[]): string;
function form(...children: string[]): string;
function form(): string;
function form(arg1?: SlamHTMLFormAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("form", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("form", arg1, arg2);
  }
}

function h1(atts?: SlamHTMLH1Attributes, ...children: string[]): string;
function h1(...children: string[]): string;
function h1(): string;
function h1(arg1?: SlamHTMLH1Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h1", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h1", arg1, arg2);
  }
}

function h2(atts?: SlamHTMLH2Attributes, ...children: string[]): string;
function h2(...children: string[]): string;
function h2(): string;
function h2(arg1?: SlamHTMLH2Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h2", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h2", arg1, arg2);
  }
}

function h3(atts?: SlamHTMLH3Attributes, ...children: string[]): string;
function h3(...children: string[]): string;
function h3(): string;
function h3(arg1?: SlamHTMLH3Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h3", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h3", arg1, arg2);
  }
}

function h4(atts?: SlamHTMLH4Attributes, ...children: string[]): string;
function h4(...children: string[]): string;
function h4(): string;
function h4(arg1?: SlamHTMLH4Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h4", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h4", arg1, arg2);
  }
}

function h5(atts?: SlamHTMLH5Attributes, ...children: string[]): string;
function h5(...children: string[]): string;
function h5(): string;
function h5(arg1?: SlamHTMLH5Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h5", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h5", arg1, arg2);
  }
}

function h6(atts?: SlamHTMLH6Attributes, ...children: string[]): string;
function h6(...children: string[]): string;
function h6(): string;
function h6(arg1?: SlamHTMLH6Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("h6", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("h6", arg1, arg2);
  }
}

function head(atts?: SlamHTMLHeadAttributes, ...children: string[]): string;
function head(...children: string[]): string;
function head(): string;
function head(arg1?: SlamHTMLHeadAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("head", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("head", arg1, arg2);
  }
}

function header(atts?: SlamHTMLHeaderAttributes, ...children: string[]): string;
function header(...children: string[]): string;
function header(): string;
function header(arg1?: SlamHTMLHeaderAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("header", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("header", arg1, arg2);
  }
}

function hgroup(atts?: SlamHTMLHgroupAttributes, ...children: string[]): string;
function hgroup(...children: string[]): string;
function hgroup(): string;
function hgroup(arg1?: SlamHTMLHgroupAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("hgroup", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("hgroup", arg1, arg2);
  }
}

function hr(atts?: SlamHTMLHrAttributes): string;
function hr(): string;
function hr(arg1?: SlamHTMLHrAttributes) {
  return genElemString("hr", arg1, []);
}

function html(atts?: SlamHTMLHtmlAttributes, ...children: string[]): string;
function html(...children: string[]): string;
function html(): string;
function html(arg1?: SlamHTMLHtmlAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return "<!DOCTYPE html>" + genElemString("html", undefined, [arg1].concat(arg2));
  } else {
    return "<!DOCTYPE html>" + genElemString("html", arg1, arg2);
  }
}

function i(atts?: SlamHTMLIAttributes, ...children: string[]): string;
function i(...children: string[]): string;
function i(): string;
function i(arg1?: SlamHTMLIAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("i", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("i", arg1, arg2);
  }
}

function iframe(atts?: SlamHTMLIframeAttributes, ...children: string[]): string;
function iframe(...children: string[]): string;
function iframe(): string;
function iframe(arg1?: SlamHTMLIframeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("iframe", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("iframe", arg1, arg2);
  }
}

function img(atts?: SlamHTMLImgAttributes): string;
function img(): string;
function img(arg1?: SlamHTMLImgAttributes) {
  return genElemString("img", arg1, []);
}

function input(atts?: SlamHTMLInputAttributes): string;
function input(): string;
function input(arg1?: SlamHTMLInputAttributes) {
  return genElemString("input", arg1, []);
}

function ins(atts?: SlamHTMLInsAttributes, ...children: string[]): string;
function ins(...children: string[]): string;
function ins(): string;
function ins(arg1?: SlamHTMLInsAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("ins", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("ins", arg1, arg2);
  }
}

function kbd(atts?: SlamHTMLKbdAttributes, ...children: string[]): string;
function kbd(...children: string[]): string;
function kbd(): string;
function kbd(arg1?: SlamHTMLKbdAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("kbd", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("kbd", arg1, arg2);
  }
}

function label(atts?: SlamHTMLLabelAttributes, ...children: string[]): string;
function label(...children: string[]): string;
function label(): string;
function label(arg1?: SlamHTMLLabelAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("label", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("label", arg1, arg2);
  }
}

function legend(atts?: SlamHTMLLegendAttributes, ...children: string[]): string;
function legend(...children: string[]): string;
function legend(): string;
function legend(arg1?: SlamHTMLLegendAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("legend", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("legend", arg1, arg2);
  }
}

function li(atts?: SlamHTMLLiAttributes, ...children: string[]): string;
function li(...children: string[]): string;
function li(): string;
function li(arg1?: SlamHTMLLiAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("li", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("li", arg1, arg2);
  }
}

function link(atts?: SlamHTMLLinkAttributes): string;
function link(): string;
function link(arg1?: SlamHTMLLinkAttributes) {
  return genElemString("link", arg1, []);
}

function main(atts?: SlamHTMLMainAttributes, ...children: string[]): string;
function main(...children: string[]): string;
function main(): string;
function main(arg1?: SlamHTMLMainAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("main", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("main", arg1, arg2);
  }
}

function map(atts?: SlamHTMLMapAttributes, ...children: string[]): string;
function map(...children: string[]): string;
function map(): string;
function map(arg1?: SlamHTMLMapAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("map", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("map", arg1, arg2);
  }
}

function mark(atts?: SlamHTMLMarkAttributes, ...children: string[]): string;
function mark(...children: string[]): string;
function mark(): string;
function mark(arg1?: SlamHTMLMarkAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("mark", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("mark", arg1, arg2);
  }
}

function menu(atts?: SlamHTMLMenuAttributes, ...children: string[]): string;
function menu(...children: string[]): string;
function menu(): string;
function menu(arg1?: SlamHTMLMenuAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("menu", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("menu", arg1, arg2);
  }
}

function meta(atts?: SlamHTMLMetaAttributes): string;
function meta(): string;
function meta(arg1?: SlamHTMLMetaAttributes) {
  return genElemString("meta", arg1, []);
}

function meter(atts?: SlamHTMLMeterAttributes, ...children: string[]): string;
function meter(...children: string[]): string;
function meter(): string;
function meter(arg1?: SlamHTMLMeterAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("meter", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("meter", arg1, arg2);
  }
}

function nav(atts?: SlamHTMLNavAttributes, ...children: string[]): string;
function nav(...children: string[]): string;
function nav(): string;
function nav(arg1?: SlamHTMLNavAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("nav", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("nav", arg1, arg2);
  }
}

function noscript(atts?: SlamHTMLNoscriptAttributes, ...children: string[]): string;
function noscript(...children: string[]): string;
function noscript(): string;
function noscript(arg1?: SlamHTMLNoscriptAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("noscript", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("noscript", arg1, arg2);
  }
}

function object(atts?: SlamHTMLObjectAttributes, ...children: string[]): string;
function object(...children: string[]): string;
function object(): string;
function object(arg1?: SlamHTMLObjectAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("object", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("object", arg1, arg2);
  }
}

function ol(atts?: SlamHTMLOlAttributes, ...children: string[]): string;
function ol(...children: string[]): string;
function ol(): string;
function ol(arg1?: SlamHTMLOlAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("ol", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("ol", arg1, arg2);
  }
}

function optgroup(atts?: SlamHTMLOptgroupAttributes, ...children: string[]): string;
function optgroup(...children: string[]): string;
function optgroup(): string;
function optgroup(arg1?: SlamHTMLOptgroupAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("optgroup", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("optgroup", arg1, arg2);
  }
}

function option(atts?: SlamHTMLOptionAttributes, ...children: string[]): string;
function option(...children: string[]): string;
function option(): string;
function option(arg1?: SlamHTMLOptionAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("option", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("option", arg1, arg2);
  }
}

function output(atts?: SlamHTMLOutputAttributes, ...children: string[]): string;
function output(...children: string[]): string;
function output(): string;
function output(arg1?: SlamHTMLOutputAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("output", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("output", arg1, arg2);
  }
}

function p(atts?: SlamHTMLPAttributes, ...children: string[]): string;
function p(...children: string[]): string;
function p(): string;
function p(arg1?: SlamHTMLPAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("p", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("p", arg1, arg2);
  }
}

function param(atts?: SlamHTMLParamAttributes): string;
function param(): string;
function param(arg1?: SlamHTMLParamAttributes) {
  return genElemString("param", arg1, []);
}

function picture(atts?: SlamHTMLPictureAttributes, ...children: string[]): string;
function picture(...children: string[]): string;
function picture(): string;
function picture(arg1?: SlamHTMLPictureAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("picture", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("picture", arg1, arg2);
  }
}

function pre(atts?: SlamHTMLPreAttributes, ...children: string[]): string;
function pre(...children: string[]): string;
function pre(): string;
function pre(arg1?: SlamHTMLPreAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("pre", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("pre", arg1, arg2);
  }
}

function progress(atts?: SlamHTMLProgressAttributes, ...children: string[]): string;
function progress(...children: string[]): string;
function progress(): string;
function progress(arg1?: SlamHTMLProgressAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("progress", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("progress", arg1, arg2);
  }
}

function q(atts?: SlamHTMLQAttributes, ...children: string[]): string;
function q(...children: string[]): string;
function q(): string;
function q(arg1?: SlamHTMLQAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("q", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("q", arg1, arg2);
  }
}

function rp(atts?: SlamHTMLRpAttributes, ...children: string[]): string;
function rp(...children: string[]): string;
function rp(): string;
function rp(arg1?: SlamHTMLRpAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("rp", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("rp", arg1, arg2);
  }
}

function rt(atts?: SlamHTMLRtAttributes, ...children: string[]): string;
function rt(...children: string[]): string;
function rt(): string;
function rt(arg1?: SlamHTMLRtAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("rt", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("rt", arg1, arg2);
  }
}

function ruby(atts?: SlamHTMLRubyAttributes, ...children: string[]): string;
function ruby(...children: string[]): string;
function ruby(): string;
function ruby(arg1?: SlamHTMLRubyAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("ruby", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("ruby", arg1, arg2);
  }
}

function s(atts?: SlamHTMLSAttributes, ...children: string[]): string;
function s(...children: string[]): string;
function s(): string;
function s(arg1?: SlamHTMLSAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("s", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("s", arg1, arg2);
  }
}

function samp(atts?: SlamHTMLSampAttributes, ...children: string[]): string;
function samp(...children: string[]): string;
function samp(): string;
function samp(arg1?: SlamHTMLSampAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("samp", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("samp", arg1, arg2);
  }
}

function script(atts?: SlamHTMLScriptAttributes, ...children: string[]): string;
function script(...children: string[]): string;
function script(): string;
function script(arg1?: SlamHTMLScriptAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("script", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("script", arg1, arg2);
  }
}

function section(atts?: SlamHTMLSectionAttributes, ...children: string[]): string;
function section(...children: string[]): string;
function section(): string;
function section(arg1?: SlamHTMLSectionAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("section", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("section", arg1, arg2);
  }
}

function select(atts?: SlamHTMLSelectAttributes, ...children: string[]): string;
function select(...children: string[]): string;
function select(): string;
function select(arg1?: SlamHTMLSelectAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("select", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("select", arg1, arg2);
  }
}

function slot(atts?: SlamHTMLSlotAttributes, ...children: string[]): string;
function slot(...children: string[]): string;
function slot(): string;
function slot(arg1?: SlamHTMLSlotAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("slot", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("slot", arg1, arg2);
  }
}

function small(atts?: SlamHTMLSmallAttributes, ...children: string[]): string;
function small(...children: string[]): string;
function small(): string;
function small(arg1?: SlamHTMLSmallAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("small", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("small", arg1, arg2);
  }
}

function source(atts?: SlamHTMLSourceAttributes): string;
function source(): string;
function source(arg1?: SlamHTMLSourceAttributes) {
  return genElemString("source", arg1, []);
}

function span(atts?: SlamHTMLSpanAttributes, ...children: string[]): string;
function span(...children: string[]): string;
function span(): string;
function span(arg1?: SlamHTMLSpanAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("span", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("span", arg1, arg2);
  }
}

function strong(atts?: SlamHTMLStrongAttributes, ...children: string[]): string;
function strong(...children: string[]): string;
function strong(): string;
function strong(arg1?: SlamHTMLStrongAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("strong", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("strong", arg1, arg2);
  }
}

function sub(atts?: SlamHTMLSubAttributes, ...children: string[]): string;
function sub(...children: string[]): string;
function sub(): string;
function sub(arg1?: SlamHTMLSubAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("sub", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("sub", arg1, arg2);
  }
}

function summary(atts?: SlamHTMLSummaryAttributes, ...children: string[]): string;
function summary(...children: string[]): string;
function summary(): string;
function summary(arg1?: SlamHTMLSummaryAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("summary", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("summary", arg1, arg2);
  }
}

function sup(atts?: SlamHTMLSupAttributes, ...children: string[]): string;
function sup(...children: string[]): string;
function sup(): string;
function sup(arg1?: SlamHTMLSupAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("sup", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("sup", arg1, arg2);
  }
}

function table(atts?: SlamHTMLTableAttributes, ...children: string[]): string;
function table(...children: string[]): string;
function table(): string;
function table(arg1?: SlamHTMLTableAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("table", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("table", arg1, arg2);
  }
}

function tbody(atts?: SlamHTMLTbodyAttributes, ...children: string[]): string;
function tbody(...children: string[]): string;
function tbody(): string;
function tbody(arg1?: SlamHTMLTbodyAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("tbody", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("tbody", arg1, arg2);
  }
}

function td(atts?: SlamHTMLTdAttributes, ...children: string[]): string;
function td(...children: string[]): string;
function td(): string;
function td(arg1?: SlamHTMLTdAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("td", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("td", arg1, arg2);
  }
}

function template(atts?: SlamHTMLTemplateAttributes, ...children: string[]): string;
function template(...children: string[]): string;
function template(): string;
function template(arg1?: SlamHTMLTemplateAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("template", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("template", arg1, arg2);
  }
}

function textarea(atts?: SlamHTMLTextareaAttributes, ...children: string[]): string;
function textarea(...children: string[]): string;
function textarea(): string;
function textarea(arg1?: SlamHTMLTextareaAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("textarea", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("textarea", arg1, arg2);
  }
}

function tfoot(atts?: SlamHTMLTfootAttributes, ...children: string[]): string;
function tfoot(...children: string[]): string;
function tfoot(): string;
function tfoot(arg1?: SlamHTMLTfootAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("tfoot", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("tfoot", arg1, arg2);
  }
}

function th(atts?: SlamHTMLThAttributes, ...children: string[]): string;
function th(...children: string[]): string;
function th(): string;
function th(arg1?: SlamHTMLThAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("th", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("th", arg1, arg2);
  }
}

function thead(atts?: SlamHTMLTheadAttributes, ...children: string[]): string;
function thead(...children: string[]): string;
function thead(): string;
function thead(arg1?: SlamHTMLTheadAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("thead", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("thead", arg1, arg2);
  }
}

function time(atts?: SlamHTMLTimeAttributes, ...children: string[]): string;
function time(...children: string[]): string;
function time(): string;
function time(arg1?: SlamHTMLTimeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("time", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("time", arg1, arg2);
  }
}

function title(atts?: SlamHTMLTitleAttributes, ...children: string[]): string;
function title(...children: string[]): string;
function title(): string;
function title(arg1?: SlamHTMLTitleAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("title", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("title", arg1, arg2);
  }
}

function tr(atts?: SlamHTMLTrAttributes, ...children: string[]): string;
function tr(...children: string[]): string;
function tr(): string;
function tr(arg1?: SlamHTMLTrAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("tr", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("tr", arg1, arg2);
  }
}

function track(atts?: SlamHTMLTrackAttributes): string;
function track(): string;
function track(arg1?: SlamHTMLTrackAttributes) {
  return genElemString("track", arg1, []);
}

function u(atts?: SlamHTMLUAttributes, ...children: string[]): string;
function u(...children: string[]): string;
function u(): string;
function u(arg1?: SlamHTMLUAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("u", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("u", arg1, arg2);
  }
}

function ul(atts?: SlamHTMLUlAttributes, ...children: string[]): string;
function ul(...children: string[]): string;
function ul(): string;
function ul(arg1?: SlamHTMLUlAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("ul", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("ul", arg1, arg2);
  }
}

function var_(atts?: SlamHTMLVar_Attributes, ...children: string[]): string;
function var_(...children: string[]): string;
function var_(): string;
function var_(arg1?: SlamHTMLVar_Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("var_", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("var_", arg1, arg2);
  }
}

function video(atts?: SlamHTMLVideoAttributes, ...children: string[]): string;
function video(...children: string[]): string;
function video(): string;
function video(arg1?: SlamHTMLVideoAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("video", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("video", arg1, arg2);
  }
}

function wbr(atts?: SlamHTMLWbrAttributes): string;
function wbr(): string;
function wbr(arg1?: SlamHTMLWbrAttributes) {
  return genElemString("wbr", arg1, []);
}

function a(atts?: SlamSVGAAttributes, ...children: string[]): string;
function a(...children: string[]): string;
function a(): string;
function a(arg1?: SlamSVGAAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("a", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("a", arg1, arg2);
  }
}

function animate(atts?: SlamSVGAnimateAttributes, ...children: string[]): string;
function animate(...children: string[]): string;
function animate(): string;
function animate(arg1?: SlamSVGAnimateAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("animate", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("animate", arg1, arg2);
  }
}

function animateMotion(atts?: SlamSVGAnimateMotionAttributes, ...children: string[]): string;
function animateMotion(...children: string[]): string;
function animateMotion(): string;
function animateMotion(arg1?: SlamSVGAnimateMotionAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("animateMotion", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("animateMotion", arg1, arg2);
  }
}

function animateTransform(atts?: SlamSVGAnimateTransformAttributes, ...children: string[]): string;
function animateTransform(...children: string[]): string;
function animateTransform(): string;
function animateTransform(arg1?: SlamSVGAnimateTransformAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("animateTransform", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("animateTransform", arg1, arg2);
  }
}

function circle(atts?: SlamSVGCircleAttributes): string;
function circle(): string;
function circle(arg1?: SlamSVGCircleAttributes) {
  return genElemString("circle", arg1, []);
}

function clipPath(atts?: SlamSVGClipPathAttributes, ...children: string[]): string;
function clipPath(...children: string[]): string;
function clipPath(): string;
function clipPath(arg1?: SlamSVGClipPathAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("clipPath", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("clipPath", arg1, arg2);
  }
}

function defs(atts?: SlamSVGDefsAttributes, ...children: string[]): string;
function defs(...children: string[]): string;
function defs(): string;
function defs(arg1?: SlamSVGDefsAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("defs", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("defs", arg1, arg2);
  }
}

function desc(atts?: SlamSVGDescAttributes, ...children: string[]): string;
function desc(...children: string[]): string;
function desc(): string;
function desc(arg1?: SlamSVGDescAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("desc", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("desc", arg1, arg2);
  }
}

function discard(atts?: SlamSVGDiscardAttributes, ...children: string[]): string;
function discard(...children: string[]): string;
function discard(): string;
function discard(arg1?: SlamSVGDiscardAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("discard", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("discard", arg1, arg2);
  }
}

function ellipse(atts?: SlamSVGEllipseAttributes): string;
function ellipse(): string;
function ellipse(arg1?: SlamSVGEllipseAttributes) {
  return genElemString("ellipse", arg1, []);
}

function feBlend(atts?: SlamSVGFeBlendAttributes, ...children: string[]): string;
function feBlend(...children: string[]): string;
function feBlend(): string;
function feBlend(arg1?: SlamSVGFeBlendAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feBlend", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feBlend", arg1, arg2);
  }
}

function feColorMatrix(atts?: SlamSVGFeColorMatrixAttributes, ...children: string[]): string;
function feColorMatrix(...children: string[]): string;
function feColorMatrix(): string;
function feColorMatrix(arg1?: SlamSVGFeColorMatrixAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feColorMatrix", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feColorMatrix", arg1, arg2);
  }
}

function feComponentTransfer(atts?: SlamSVGFeComponentTransferAttributes, ...children: string[]): string;
function feComponentTransfer(...children: string[]): string;
function feComponentTransfer(): string;
function feComponentTransfer(arg1?: SlamSVGFeComponentTransferAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feComponentTransfer", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feComponentTransfer", arg1, arg2);
  }
}

function feComposite(atts?: SlamSVGFeCompositeAttributes, ...children: string[]): string;
function feComposite(...children: string[]): string;
function feComposite(): string;
function feComposite(arg1?: SlamSVGFeCompositeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feComposite", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feComposite", arg1, arg2);
  }
}

function feConvolveMatrix(atts?: SlamSVGFeConvolveMatrixAttributes, ...children: string[]): string;
function feConvolveMatrix(...children: string[]): string;
function feConvolveMatrix(): string;
function feConvolveMatrix(arg1?: SlamSVGFeConvolveMatrixAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feConvolveMatrix", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feConvolveMatrix", arg1, arg2);
  }
}

function feDiffuseLighting(atts?: SlamSVGFeDiffuseLightingAttributes, ...children: string[]): string;
function feDiffuseLighting(...children: string[]): string;
function feDiffuseLighting(): string;
function feDiffuseLighting(arg1?: SlamSVGFeDiffuseLightingAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feDiffuseLighting", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feDiffuseLighting", arg1, arg2);
  }
}

function feDisplacementMap(atts?: SlamSVGFeDisplacementMapAttributes, ...children: string[]): string;
function feDisplacementMap(...children: string[]): string;
function feDisplacementMap(): string;
function feDisplacementMap(arg1?: SlamSVGFeDisplacementMapAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feDisplacementMap", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feDisplacementMap", arg1, arg2);
  }
}

function feDistantLight(atts?: SlamSVGFeDistantLightAttributes, ...children: string[]): string;
function feDistantLight(...children: string[]): string;
function feDistantLight(): string;
function feDistantLight(arg1?: SlamSVGFeDistantLightAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feDistantLight", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feDistantLight", arg1, arg2);
  }
}

function feDropShadow(atts?: SlamSVGFeDropShadowAttributes, ...children: string[]): string;
function feDropShadow(...children: string[]): string;
function feDropShadow(): string;
function feDropShadow(arg1?: SlamSVGFeDropShadowAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feDropShadow", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feDropShadow", arg1, arg2);
  }
}

function feFlood(atts?: SlamSVGFeFloodAttributes, ...children: string[]): string;
function feFlood(...children: string[]): string;
function feFlood(): string;
function feFlood(arg1?: SlamSVGFeFloodAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feFlood", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feFlood", arg1, arg2);
  }
}

function feFuncA(atts?: SlamSVGFeFuncAAttributes, ...children: string[]): string;
function feFuncA(...children: string[]): string;
function feFuncA(): string;
function feFuncA(arg1?: SlamSVGFeFuncAAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feFuncA", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feFuncA", arg1, arg2);
  }
}

function feFuncB(atts?: SlamSVGFeFuncBAttributes, ...children: string[]): string;
function feFuncB(...children: string[]): string;
function feFuncB(): string;
function feFuncB(arg1?: SlamSVGFeFuncBAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feFuncB", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feFuncB", arg1, arg2);
  }
}

function feFuncG(atts?: SlamSVGFeFuncGAttributes, ...children: string[]): string;
function feFuncG(...children: string[]): string;
function feFuncG(): string;
function feFuncG(arg1?: SlamSVGFeFuncGAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feFuncG", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feFuncG", arg1, arg2);
  }
}

function feFuncR(atts?: SlamSVGFeFuncRAttributes, ...children: string[]): string;
function feFuncR(...children: string[]): string;
function feFuncR(): string;
function feFuncR(arg1?: SlamSVGFeFuncRAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feFuncR", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feFuncR", arg1, arg2);
  }
}

function feGaussianBlur(atts?: SlamSVGFeGaussianBlurAttributes, ...children: string[]): string;
function feGaussianBlur(...children: string[]): string;
function feGaussianBlur(): string;
function feGaussianBlur(arg1?: SlamSVGFeGaussianBlurAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feGaussianBlur", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feGaussianBlur", arg1, arg2);
  }
}

function feImage(atts?: SlamSVGFeImageAttributes, ...children: string[]): string;
function feImage(...children: string[]): string;
function feImage(): string;
function feImage(arg1?: SlamSVGFeImageAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feImage", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feImage", arg1, arg2);
  }
}

function feMerge(atts?: SlamSVGFeMergeAttributes, ...children: string[]): string;
function feMerge(...children: string[]): string;
function feMerge(): string;
function feMerge(arg1?: SlamSVGFeMergeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feMerge", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feMerge", arg1, arg2);
  }
}

function feMergeNode(atts?: SlamSVGFeMergeNodeAttributes, ...children: string[]): string;
function feMergeNode(...children: string[]): string;
function feMergeNode(): string;
function feMergeNode(arg1?: SlamSVGFeMergeNodeAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feMergeNode", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feMergeNode", arg1, arg2);
  }
}

function feMorphology(atts?: SlamSVGFeMorphologyAttributes, ...children: string[]): string;
function feMorphology(...children: string[]): string;
function feMorphology(): string;
function feMorphology(arg1?: SlamSVGFeMorphologyAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feMorphology", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feMorphology", arg1, arg2);
  }
}

function feOffset(atts?: SlamSVGFeOffsetAttributes, ...children: string[]): string;
function feOffset(...children: string[]): string;
function feOffset(): string;
function feOffset(arg1?: SlamSVGFeOffsetAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feOffset", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feOffset", arg1, arg2);
  }
}

function fePointLight(atts?: SlamSVGFePointLightAttributes, ...children: string[]): string;
function fePointLight(...children: string[]): string;
function fePointLight(): string;
function fePointLight(arg1?: SlamSVGFePointLightAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("fePointLight", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("fePointLight", arg1, arg2);
  }
}

function feSpecularLighting(atts?: SlamSVGFeSpecularLightingAttributes, ...children: string[]): string;
function feSpecularLighting(...children: string[]): string;
function feSpecularLighting(): string;
function feSpecularLighting(arg1?: SlamSVGFeSpecularLightingAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feSpecularLighting", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feSpecularLighting", arg1, arg2);
  }
}

function feSpotLight(atts?: SlamSVGFeSpotLightAttributes, ...children: string[]): string;
function feSpotLight(...children: string[]): string;
function feSpotLight(): string;
function feSpotLight(arg1?: SlamSVGFeSpotLightAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feSpotLight", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feSpotLight", arg1, arg2);
  }
}

function feTile(atts?: SlamSVGFeTileAttributes, ...children: string[]): string;
function feTile(...children: string[]): string;
function feTile(): string;
function feTile(arg1?: SlamSVGFeTileAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feTile", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feTile", arg1, arg2);
  }
}

function feTurbulence(atts?: SlamSVGFeTurbulenceAttributes, ...children: string[]): string;
function feTurbulence(...children: string[]): string;
function feTurbulence(): string;
function feTurbulence(arg1?: SlamSVGFeTurbulenceAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("feTurbulence", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("feTurbulence", arg1, arg2);
  }
}

function filter(atts?: SlamSVGFilterAttributes, ...children: string[]): string;
function filter(...children: string[]): string;
function filter(): string;
function filter(arg1?: SlamSVGFilterAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("filter", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("filter", arg1, arg2);
  }
}

function foreignObject(atts?: SlamSVGForeignObjectAttributes, ...children: string[]): string;
function foreignObject(...children: string[]): string;
function foreignObject(): string;
function foreignObject(arg1?: SlamSVGForeignObjectAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("foreignObject", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("foreignObject", arg1, arg2);
  }
}

function g(atts?: SlamSVGGAttributes, ...children: string[]): string;
function g(...children: string[]): string;
function g(): string;
function g(arg1?: SlamSVGGAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("g", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("g", arg1, arg2);
  }
}

function image(atts?: SlamSVGImageAttributes, ...children: string[]): string;
function image(...children: string[]): string;
function image(): string;
function image(arg1?: SlamSVGImageAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("image", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("image", arg1, arg2);
  }
}

function line(atts?: SlamSVGLineAttributes): string;
function line(): string;
function line(arg1?: SlamSVGLineAttributes) {
  return genElemString("line", arg1, []);
}

function linearGradient(atts?: SlamSVGLinearGradientAttributes, ...children: string[]): string;
function linearGradient(...children: string[]): string;
function linearGradient(): string;
function linearGradient(arg1?: SlamSVGLinearGradientAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("linearGradient", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("linearGradient", arg1, arg2);
  }
}

function marker(atts?: SlamSVGMarkerAttributes, ...children: string[]): string;
function marker(...children: string[]): string;
function marker(): string;
function marker(arg1?: SlamSVGMarkerAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("marker", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("marker", arg1, arg2);
  }
}

function mask(atts?: SlamSVGMaskAttributes, ...children: string[]): string;
function mask(...children: string[]): string;
function mask(): string;
function mask(arg1?: SlamSVGMaskAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("mask", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("mask", arg1, arg2);
  }
}

function metadata(atts?: SlamSVGMetadataAttributes, ...children: string[]): string;
function metadata(...children: string[]): string;
function metadata(): string;
function metadata(arg1?: SlamSVGMetadataAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("metadata", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("metadata", arg1, arg2);
  }
}

function mpath(atts?: SlamSVGMpathAttributes, ...children: string[]): string;
function mpath(...children: string[]): string;
function mpath(): string;
function mpath(arg1?: SlamSVGMpathAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("mpath", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("mpath", arg1, arg2);
  }
}

function path(atts?: SlamSVGPathAttributes): string;
function path(): string;
function path(arg1?: SlamSVGPathAttributes) {
  return genElemString("path", arg1, []);
}

function pattern(atts?: SlamSVGPatternAttributes, ...children: string[]): string;
function pattern(...children: string[]): string;
function pattern(): string;
function pattern(arg1?: SlamSVGPatternAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("pattern", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("pattern", arg1, arg2);
  }
}

function polygon(atts?: SlamSVGPolygonAttributes): string;
function polygon(): string;
function polygon(arg1?: SlamSVGPolygonAttributes) {
  return genElemString("polygon", arg1, []);
}

function polyline(atts?: SlamSVGPolylineAttributes): string;
function polyline(): string;
function polyline(arg1?: SlamSVGPolylineAttributes) {
  return genElemString("polyline", arg1, []);
}

function radialGradient(atts?: SlamSVGRadialGradientAttributes, ...children: string[]): string;
function radialGradient(...children: string[]): string;
function radialGradient(): string;
function radialGradient(arg1?: SlamSVGRadialGradientAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("radialGradient", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("radialGradient", arg1, arg2);
  }
}

function rect(atts?: SlamSVGRectAttributes): string;
function rect(): string;
function rect(arg1?: SlamSVGRectAttributes) {
  return genElemString("rect", arg1, []);
}

function set(atts?: SlamSVGSetAttributes, ...children: string[]): string;
function set(...children: string[]): string;
function set(): string;
function set(arg1?: SlamSVGSetAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("set", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("set", arg1, arg2);
  }
}

function stop(atts?: SlamSVGStopAttributes): string;
function stop(): string;
function stop(arg1?: SlamSVGStopAttributes) {
  return genElemString("stop", arg1, []);
}

function svg(atts?: SlamSVGSvgAttributes, ...children: string[]): string;
function svg(...children: string[]): string;
function svg(): string;
function svg(arg1?: SlamSVGSvgAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("svg", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("svg", arg1, arg2);
  }
}

function switch_(atts?: SlamSVGSwitch_Attributes, ...children: string[]): string;
function switch_(...children: string[]): string;
function switch_(): string;
function switch_(arg1?: SlamSVGSwitch_Attributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("switch_", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("switch_", arg1, arg2);
  }
}

function symbol(atts?: SlamSVGSymbolAttributes, ...children: string[]): string;
function symbol(...children: string[]): string;
function symbol(): string;
function symbol(arg1?: SlamSVGSymbolAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("symbol", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("symbol", arg1, arg2);
  }
}

function text(atts?: SlamSVGTextAttributes, ...children: string[]): string;
function text(...children: string[]): string;
function text(): string;
function text(arg1?: SlamSVGTextAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("text", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("text", arg1, arg2);
  }
}

function textPath(atts?: SlamSVGTextPathAttributes, ...children: string[]): string;
function textPath(...children: string[]): string;
function textPath(): string;
function textPath(arg1?: SlamSVGTextPathAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("textPath", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("textPath", arg1, arg2);
  }
}

function tspan(atts?: SlamSVGTspanAttributes, ...children: string[]): string;
function tspan(...children: string[]): string;
function tspan(): string;
function tspan(arg1?: SlamSVGTspanAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("tspan", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("tspan", arg1, arg2);
  }
}

function unknown(atts?: SlamSVGUnknownAttributes, ...children: string[]): string;
function unknown(...children: string[]): string;
function unknown(): string;
function unknown(arg1?: SlamSVGUnknownAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("unknown", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("unknown", arg1, arg2);
  }
}

function use(atts?: SlamSVGUseAttributes): string;
function use(): string;
function use(arg1?: SlamSVGUseAttributes) {
  return genElemString("use", arg1, []);
}

function view(atts?: SlamSVGViewAttributes, ...children: string[]): string;
function view(...children: string[]): string;
function view(): string;
function view(arg1?: SlamSVGViewAttributes | string, ...arg2: string[]) {
  if (typeof arg1 === "string"){
    return genElemString("view", undefined, [arg1].concat(arg2));
  } else {
    return genElemString("view", arg1, arg2);
  }
}

export { abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, menu, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, slot, small, source, span, strong, sub, summary, sup, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, var_, video, wbr, a, animate, animateMotion, animateTransform, circle, clipPath, defs, desc, discard, ellipse, feBlend, feColorMatrix, feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, feDisplacementMap, feDistantLight, feDropShadow, feFlood, feFuncA, feFuncB, feFuncG, feFuncR, feGaussianBlur, feImage, feMerge, feMergeNode, feMorphology, feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, filter, foreignObject, g, image, line, linearGradient, marker, mask, metadata, mpath, path, pattern, polygon, polyline, radialGradient, rect, set, stop, svg, switch_, symbol, text, textPath, tspan, unknown, use, view };