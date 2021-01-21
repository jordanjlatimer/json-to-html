import {
  SlamHTMLAbbrAttributes,
  SlamHTMLAddressAttributes,
  SlamHTMLAreaAttributes,
  SlamHTMLArticleAttributes,
  SlamHTMLAsideAttributes,
  SlamHTMLAudioAttributes,
  SlamHTMLBAttributes,
  SlamHTMLBaseAttributes,
  SlamHTMLBdiAttributes,
  SlamHTMLBdoAttributes,
  SlamHTMLBlockquoteAttributes,
  SlamHTMLBodyAttributes,
  SlamHTMLBrAttributes,
  SlamHTMLButtonAttributes,
  SlamHTMLCanvasAttributes,
  SlamHTMLCaptionAttributes,
  SlamHTMLCiteAttributes,
  SlamHTMLCodeAttributes,
  SlamHTMLColAttributes,
  SlamHTMLColgroupAttributes,
  SlamHTMLDataAttributes,
  SlamHTMLDatalistAttributes,
  SlamHTMLDdAttributes,
  SlamHTMLDelAttributes,
  SlamHTMLDetailsAttributes,
  SlamHTMLDfnAttributes,
  SlamHTMLDialogAttributes,
  SlamHTMLDivAttributes,
  SlamHTMLDlAttributes,
  SlamHTMLDtAttributes,
  SlamHTMLEmAttributes,
  SlamHTMLEmbedAttributes,
  SlamHTMLFieldsetAttributes,
  SlamHTMLFigcaptionAttributes,
  SlamHTMLFigureAttributes,
  SlamHTMLFooterAttributes,
  SlamHTMLFormAttributes,
  SlamHTMLH1Attributes,
  SlamHTMLH2Attributes,
  SlamHTMLH3Attributes,
  SlamHTMLH4Attributes,
  SlamHTMLH5Attributes,
  SlamHTMLH6Attributes,
  SlamHTMLHeadAttributes,
  SlamHTMLHeaderAttributes,
  SlamHTMLHgroupAttributes,
  SlamHTMLHrAttributes,
  SlamHTMLHtmlAttributes,
  SlamHTMLIAttributes,
  SlamHTMLIframeAttributes,
  SlamHTMLImgAttributes,
  SlamHTMLInputAttributes,
  SlamHTMLInsAttributes,
  SlamHTMLKbdAttributes,
  SlamHTMLLabelAttributes,
  SlamHTMLLegendAttributes,
  SlamHTMLLiAttributes,
  SlamHTMLLinkAttributes,
  SlamHTMLMainAttributes,
  SlamHTMLMapAttributes,
  SlamHTMLMarkAttributes,
  SlamHTMLMenuAttributes,
  SlamHTMLMetaAttributes,
  SlamHTMLMeterAttributes,
  SlamHTMLNavAttributes,
  SlamHTMLNoscriptAttributes,
  SlamHTMLObjectAttributes,
  SlamHTMLOlAttributes,
  SlamHTMLOptgroupAttributes,
  SlamHTMLOptionAttributes,
  SlamHTMLOutputAttributes,
  SlamHTMLPAttributes,
  SlamHTMLParamAttributes,
  SlamHTMLPictureAttributes,
  SlamHTMLPreAttributes,
  SlamHTMLProgressAttributes,
  SlamHTMLQAttributes,
  SlamHTMLRpAttributes,
  SlamHTMLRtAttributes,
  SlamHTMLRubyAttributes,
  SlamHTMLSAttributes,
  SlamHTMLSampAttributes,
  SlamHTMLScriptAttributes,
  SlamHTMLSectionAttributes,
  SlamHTMLSelectAttributes,
  SlamHTMLSlotAttributes,
  SlamHTMLSmallAttributes,
  SlamHTMLSourceAttributes,
  SlamHTMLSpanAttributes,
  SlamHTMLStrongAttributes,
  SlamHTMLSubAttributes,
  SlamHTMLSummaryAttributes,
  SlamHTMLSupAttributes,
  SlamHTMLTableAttributes,
  SlamHTMLTbodyAttributes,
  SlamHTMLTdAttributes,
  SlamHTMLTemplateAttributes,
  SlamHTMLTextareaAttributes,
  SlamHTMLTfootAttributes,
  SlamHTMLThAttributes,
  SlamHTMLTheadAttributes,
  SlamHTMLTimeAttributes,
  SlamHTMLTitleAttributes,
  SlamHTMLTrAttributes,
  SlamHTMLTrackAttributes,
  SlamHTMLUAttributes,
  SlamHTMLUlAttributes,
  SlamHTMLVar_Attributes,
  SlamHTMLVideoAttributes,
  SlamHTMLWbrAttributes,
} from "./htmlInterfaces";
import {
  SlamSVGAAttributes,
  SlamSVGAnimateAttributes,
  SlamSVGAnimateMotionAttributes,
  SlamSVGAnimateTransformAttributes,
  SlamSVGCircleAttributes,
  SlamSVGClipPathAttributes,
  SlamSVGDefsAttributes,
  SlamSVGDescAttributes,
  SlamSVGDiscardAttributes,
  SlamSVGEllipseAttributes,
  SlamSVGFeBlendAttributes,
  SlamSVGFeColorMatrixAttributes,
  SlamSVGFeComponentTransferAttributes,
  SlamSVGFeCompositeAttributes,
  SlamSVGFeConvolveMatrixAttributes,
  SlamSVGFeDiffuseLightingAttributes,
  SlamSVGFeDisplacementMapAttributes,
  SlamSVGFeDistantLightAttributes,
  SlamSVGFeDropShadowAttributes,
  SlamSVGFeFloodAttributes,
  SlamSVGFeFuncAAttributes,
  SlamSVGFeFuncBAttributes,
  SlamSVGFeFuncGAttributes,
  SlamSVGFeFuncRAttributes,
  SlamSVGFeGaussianBlurAttributes,
  SlamSVGFeImageAttributes,
  SlamSVGFeMergeAttributes,
  SlamSVGFeMergeNodeAttributes,
  SlamSVGFeMorphologyAttributes,
  SlamSVGFeOffsetAttributes,
  SlamSVGFePointLightAttributes,
  SlamSVGFeSpecularLightingAttributes,
  SlamSVGFeSpotLightAttributes,
  SlamSVGFeTileAttributes,
  SlamSVGFeTurbulenceAttributes,
  SlamSVGFilterAttributes,
  SlamSVGForeignObjectAttributes,
  SlamSVGGAttributes,
  SlamSVGImageAttributes,
  SlamSVGLineAttributes,
  SlamSVGLinearGradientAttributes,
  SlamSVGMarkerAttributes,
  SlamSVGMaskAttributes,
  SlamSVGMetadataAttributes,
  SlamSVGMpathAttributes,
  SlamSVGPathAttributes,
  SlamSVGPatternAttributes,
  SlamSVGPolygonAttributes,
  SlamSVGPolylineAttributes,
  SlamSVGRadialGradientAttributes,
  SlamSVGRectAttributes,
  SlamSVGSetAttributes,
  SlamSVGStopAttributes,
  SlamSVGSvgAttributes,
  SlamSVGSwitch_Attributes,
  SlamSVGSymbolAttributes,
  SlamSVGTextAttributes,
  SlamSVGTextPathAttributes,
  SlamSVGTspanAttributes,
  SlamSVGUnknownAttributes,
  SlamSVGUseAttributes,
  SlamSVGViewAttributes,
} from "./svgInterfaces";
import { genElemString } from "./baseFunctions";

function abbr(atts?: SlamHTMLAbbrAttributes, children?: string[] | string): string;
function abbr(children?: string[] | string): string;
function abbr(atts?: SlamHTMLAbbrAttributes): string;
function abbr(): string;
function abbr(arg1?: SlamHTMLAbbrAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("abbr", arg1, arg2);
}

function address(atts?: SlamHTMLAddressAttributes, children?: string[] | string): string;
function address(children?: string[] | string): string;
function address(atts?: SlamHTMLAddressAttributes): string;
function address(): string;
function address(arg1?: SlamHTMLAddressAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("address", arg1, arg2);
}

function area(atts?: SlamHTMLAreaAttributes, children?: string[] | string): string;
function area(children?: string[] | string): string;
function area(atts?: SlamHTMLAreaAttributes): string;
function area(): string;
function area(arg1?: SlamHTMLAreaAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("area", arg1, arg2);
}

function article(atts?: SlamHTMLArticleAttributes, children?: string[] | string): string;
function article(children?: string[] | string): string;
function article(atts?: SlamHTMLArticleAttributes): string;
function article(): string;
function article(arg1?: SlamHTMLArticleAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("article", arg1, arg2);
}

function aside(atts?: SlamHTMLAsideAttributes, children?: string[] | string): string;
function aside(children?: string[] | string): string;
function aside(atts?: SlamHTMLAsideAttributes): string;
function aside(): string;
function aside(arg1?: SlamHTMLAsideAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("aside", arg1, arg2);
}

function audio(atts?: SlamHTMLAudioAttributes, children?: string[] | string): string;
function audio(children?: string[] | string): string;
function audio(atts?: SlamHTMLAudioAttributes): string;
function audio(): string;
function audio(arg1?: SlamHTMLAudioAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("audio", arg1, arg2);
}

function b(atts?: SlamHTMLBAttributes, children?: string[] | string): string;
function b(children?: string[] | string): string;
function b(atts?: SlamHTMLBAttributes): string;
function b(): string;
function b(arg1?: SlamHTMLBAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("b", arg1, arg2);
}

function base(atts?: SlamHTMLBaseAttributes, children?: string[] | string): string;
function base(children?: string[] | string): string;
function base(atts?: SlamHTMLBaseAttributes): string;
function base(): string;
function base(arg1?: SlamHTMLBaseAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("base", arg1, arg2);
}

function bdi(atts?: SlamHTMLBdiAttributes, children?: string[] | string): string;
function bdi(children?: string[] | string): string;
function bdi(atts?: SlamHTMLBdiAttributes): string;
function bdi(): string;
function bdi(arg1?: SlamHTMLBdiAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("bdi", arg1, arg2);
}

function bdo(atts?: SlamHTMLBdoAttributes, children?: string[] | string): string;
function bdo(children?: string[] | string): string;
function bdo(atts?: SlamHTMLBdoAttributes): string;
function bdo(): string;
function bdo(arg1?: SlamHTMLBdoAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("bdo", arg1, arg2);
}

function blockquote(atts?: SlamHTMLBlockquoteAttributes, children?: string[] | string): string;
function blockquote(children?: string[] | string): string;
function blockquote(atts?: SlamHTMLBlockquoteAttributes): string;
function blockquote(): string;
function blockquote(arg1?: SlamHTMLBlockquoteAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("blockquote", arg1, arg2);
}

function body(atts?: SlamHTMLBodyAttributes, children?: string[] | string): string;
function body(children?: string[] | string): string;
function body(atts?: SlamHTMLBodyAttributes): string;
function body(): string;
function body(arg1?: SlamHTMLBodyAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("body", arg1, arg2);
}

function br(atts?: SlamHTMLBrAttributes, children?: string[] | string): string;
function br(children?: string[] | string): string;
function br(atts?: SlamHTMLBrAttributes): string;
function br(): string;
function br(arg1?: SlamHTMLBrAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("br", arg1, arg2);
}

function button(atts?: SlamHTMLButtonAttributes, children?: string[] | string): string;
function button(children?: string[] | string): string;
function button(atts?: SlamHTMLButtonAttributes): string;
function button(): string;
function button(arg1?: SlamHTMLButtonAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("button", arg1, arg2);
}

function canvas(atts?: SlamHTMLCanvasAttributes, children?: string[] | string): string;
function canvas(children?: string[] | string): string;
function canvas(atts?: SlamHTMLCanvasAttributes): string;
function canvas(): string;
function canvas(arg1?: SlamHTMLCanvasAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("canvas", arg1, arg2);
}

function caption(atts?: SlamHTMLCaptionAttributes, children?: string[] | string): string;
function caption(children?: string[] | string): string;
function caption(atts?: SlamHTMLCaptionAttributes): string;
function caption(): string;
function caption(arg1?: SlamHTMLCaptionAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("caption", arg1, arg2);
}

function cite(atts?: SlamHTMLCiteAttributes, children?: string[] | string): string;
function cite(children?: string[] | string): string;
function cite(atts?: SlamHTMLCiteAttributes): string;
function cite(): string;
function cite(arg1?: SlamHTMLCiteAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("cite", arg1, arg2);
}

function code(atts?: SlamHTMLCodeAttributes, children?: string[] | string): string;
function code(children?: string[] | string): string;
function code(atts?: SlamHTMLCodeAttributes): string;
function code(): string;
function code(arg1?: SlamHTMLCodeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("code", arg1, arg2);
}

function col(atts?: SlamHTMLColAttributes, children?: string[] | string): string;
function col(children?: string[] | string): string;
function col(atts?: SlamHTMLColAttributes): string;
function col(): string;
function col(arg1?: SlamHTMLColAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("col", arg1, arg2);
}

function colgroup(atts?: SlamHTMLColgroupAttributes, children?: string[] | string): string;
function colgroup(children?: string[] | string): string;
function colgroup(atts?: SlamHTMLColgroupAttributes): string;
function colgroup(): string;
function colgroup(arg1?: SlamHTMLColgroupAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("colgroup", arg1, arg2);
}

function data(atts?: SlamHTMLDataAttributes, children?: string[] | string): string;
function data(children?: string[] | string): string;
function data(atts?: SlamHTMLDataAttributes): string;
function data(): string;
function data(arg1?: SlamHTMLDataAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("data", arg1, arg2);
}

function datalist(atts?: SlamHTMLDatalistAttributes, children?: string[] | string): string;
function datalist(children?: string[] | string): string;
function datalist(atts?: SlamHTMLDatalistAttributes): string;
function datalist(): string;
function datalist(arg1?: SlamHTMLDatalistAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("datalist", arg1, arg2);
}

function dd(atts?: SlamHTMLDdAttributes, children?: string[] | string): string;
function dd(children?: string[] | string): string;
function dd(atts?: SlamHTMLDdAttributes): string;
function dd(): string;
function dd(arg1?: SlamHTMLDdAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("dd", arg1, arg2);
}

function del(atts?: SlamHTMLDelAttributes, children?: string[] | string): string;
function del(children?: string[] | string): string;
function del(atts?: SlamHTMLDelAttributes): string;
function del(): string;
function del(arg1?: SlamHTMLDelAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("del", arg1, arg2);
}

function details(atts?: SlamHTMLDetailsAttributes, children?: string[] | string): string;
function details(children?: string[] | string): string;
function details(atts?: SlamHTMLDetailsAttributes): string;
function details(): string;
function details(arg1?: SlamHTMLDetailsAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("details", arg1, arg2);
}

function dfn(atts?: SlamHTMLDfnAttributes, children?: string[] | string): string;
function dfn(children?: string[] | string): string;
function dfn(atts?: SlamHTMLDfnAttributes): string;
function dfn(): string;
function dfn(arg1?: SlamHTMLDfnAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("dfn", arg1, arg2);
}

function dialog(atts?: SlamHTMLDialogAttributes, children?: string[] | string): string;
function dialog(children?: string[] | string): string;
function dialog(atts?: SlamHTMLDialogAttributes): string;
function dialog(): string;
function dialog(arg1?: SlamHTMLDialogAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("dialog", arg1, arg2);
}

function div(atts?: SlamHTMLDivAttributes, children?: string[] | string): string;
function div(children?: string[] | string): string;
function div(atts?: SlamHTMLDivAttributes): string;
function div(): string;
function div(arg1?: SlamHTMLDivAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("div", arg1, arg2);
}

function dl(atts?: SlamHTMLDlAttributes, children?: string[] | string): string;
function dl(children?: string[] | string): string;
function dl(atts?: SlamHTMLDlAttributes): string;
function dl(): string;
function dl(arg1?: SlamHTMLDlAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("dl", arg1, arg2);
}

function dt(atts?: SlamHTMLDtAttributes, children?: string[] | string): string;
function dt(children?: string[] | string): string;
function dt(atts?: SlamHTMLDtAttributes): string;
function dt(): string;
function dt(arg1?: SlamHTMLDtAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("dt", arg1, arg2);
}

function em(atts?: SlamHTMLEmAttributes, children?: string[] | string): string;
function em(children?: string[] | string): string;
function em(atts?: SlamHTMLEmAttributes): string;
function em(): string;
function em(arg1?: SlamHTMLEmAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("em", arg1, arg2);
}

function embed(atts?: SlamHTMLEmbedAttributes, children?: string[] | string): string;
function embed(children?: string[] | string): string;
function embed(atts?: SlamHTMLEmbedAttributes): string;
function embed(): string;
function embed(arg1?: SlamHTMLEmbedAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("embed", arg1, arg2);
}

function fieldset(atts?: SlamHTMLFieldsetAttributes, children?: string[] | string): string;
function fieldset(children?: string[] | string): string;
function fieldset(atts?: SlamHTMLFieldsetAttributes): string;
function fieldset(): string;
function fieldset(arg1?: SlamHTMLFieldsetAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("fieldset", arg1, arg2);
}

function figcaption(atts?: SlamHTMLFigcaptionAttributes, children?: string[] | string): string;
function figcaption(children?: string[] | string): string;
function figcaption(atts?: SlamHTMLFigcaptionAttributes): string;
function figcaption(): string;
function figcaption(arg1?: SlamHTMLFigcaptionAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("figcaption", arg1, arg2);
}

function figure(atts?: SlamHTMLFigureAttributes, children?: string[] | string): string;
function figure(children?: string[] | string): string;
function figure(atts?: SlamHTMLFigureAttributes): string;
function figure(): string;
function figure(arg1?: SlamHTMLFigureAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("figure", arg1, arg2);
}

function footer(atts?: SlamHTMLFooterAttributes, children?: string[] | string): string;
function footer(children?: string[] | string): string;
function footer(atts?: SlamHTMLFooterAttributes): string;
function footer(): string;
function footer(arg1?: SlamHTMLFooterAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("footer", arg1, arg2);
}

function form(atts?: SlamHTMLFormAttributes, children?: string[] | string): string;
function form(children?: string[] | string): string;
function form(atts?: SlamHTMLFormAttributes): string;
function form(): string;
function form(arg1?: SlamHTMLFormAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("form", arg1, arg2);
}

function h1(atts?: SlamHTMLH1Attributes, children?: string[] | string): string;
function h1(children?: string[] | string): string;
function h1(atts?: SlamHTMLH1Attributes): string;
function h1(): string;
function h1(arg1?: SlamHTMLH1Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h1", arg1, arg2);
}

function h2(atts?: SlamHTMLH2Attributes, children?: string[] | string): string;
function h2(children?: string[] | string): string;
function h2(atts?: SlamHTMLH2Attributes): string;
function h2(): string;
function h2(arg1?: SlamHTMLH2Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h2", arg1, arg2);
}

function h3(atts?: SlamHTMLH3Attributes, children?: string[] | string): string;
function h3(children?: string[] | string): string;
function h3(atts?: SlamHTMLH3Attributes): string;
function h3(): string;
function h3(arg1?: SlamHTMLH3Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h3", arg1, arg2);
}

function h4(atts?: SlamHTMLH4Attributes, children?: string[] | string): string;
function h4(children?: string[] | string): string;
function h4(atts?: SlamHTMLH4Attributes): string;
function h4(): string;
function h4(arg1?: SlamHTMLH4Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h4", arg1, arg2);
}

function h5(atts?: SlamHTMLH5Attributes, children?: string[] | string): string;
function h5(children?: string[] | string): string;
function h5(atts?: SlamHTMLH5Attributes): string;
function h5(): string;
function h5(arg1?: SlamHTMLH5Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h5", arg1, arg2);
}

function h6(atts?: SlamHTMLH6Attributes, children?: string[] | string): string;
function h6(children?: string[] | string): string;
function h6(atts?: SlamHTMLH6Attributes): string;
function h6(): string;
function h6(arg1?: SlamHTMLH6Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("h6", arg1, arg2);
}

function head(atts?: SlamHTMLHeadAttributes, children?: string[] | string): string;
function head(children?: string[] | string): string;
function head(atts?: SlamHTMLHeadAttributes): string;
function head(): string;
function head(arg1?: SlamHTMLHeadAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("head", arg1, arg2);
}

function header(atts?: SlamHTMLHeaderAttributes, children?: string[] | string): string;
function header(children?: string[] | string): string;
function header(atts?: SlamHTMLHeaderAttributes): string;
function header(): string;
function header(arg1?: SlamHTMLHeaderAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("header", arg1, arg2);
}

function hgroup(atts?: SlamHTMLHgroupAttributes, children?: string[] | string): string;
function hgroup(children?: string[] | string): string;
function hgroup(atts?: SlamHTMLHgroupAttributes): string;
function hgroup(): string;
function hgroup(arg1?: SlamHTMLHgroupAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("hgroup", arg1, arg2);
}

function hr(atts?: SlamHTMLHrAttributes, children?: string[] | string): string;
function hr(children?: string[] | string): string;
function hr(atts?: SlamHTMLHrAttributes): string;
function hr(): string;
function hr(arg1?: SlamHTMLHrAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("hr", arg1, arg2);
}

function html(atts?: SlamHTMLHtmlAttributes, children?: string[] | string): string;
function html(children?: string[] | string): string;
function html(atts?: SlamHTMLHtmlAttributes): string;
function html(): string;
function html(arg1?: SlamHTMLHtmlAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("html", arg1, arg2);
}

function i(atts?: SlamHTMLIAttributes, children?: string[] | string): string;
function i(children?: string[] | string): string;
function i(atts?: SlamHTMLIAttributes): string;
function i(): string;
function i(arg1?: SlamHTMLIAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("i", arg1, arg2);
}

function iframe(atts?: SlamHTMLIframeAttributes, children?: string[] | string): string;
function iframe(children?: string[] | string): string;
function iframe(atts?: SlamHTMLIframeAttributes): string;
function iframe(): string;
function iframe(arg1?: SlamHTMLIframeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("iframe", arg1, arg2);
}

function img(atts?: SlamHTMLImgAttributes, children?: string[] | string): string;
function img(children?: string[] | string): string;
function img(atts?: SlamHTMLImgAttributes): string;
function img(): string;
function img(arg1?: SlamHTMLImgAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("img", arg1, arg2);
}

function input(atts?: SlamHTMLInputAttributes, children?: string[] | string): string;
function input(children?: string[] | string): string;
function input(atts?: SlamHTMLInputAttributes): string;
function input(): string;
function input(arg1?: SlamHTMLInputAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("input", arg1, arg2);
}

function ins(atts?: SlamHTMLInsAttributes, children?: string[] | string): string;
function ins(children?: string[] | string): string;
function ins(atts?: SlamHTMLInsAttributes): string;
function ins(): string;
function ins(arg1?: SlamHTMLInsAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("ins", arg1, arg2);
}

function kbd(atts?: SlamHTMLKbdAttributes, children?: string[] | string): string;
function kbd(children?: string[] | string): string;
function kbd(atts?: SlamHTMLKbdAttributes): string;
function kbd(): string;
function kbd(arg1?: SlamHTMLKbdAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("kbd", arg1, arg2);
}

function label(atts?: SlamHTMLLabelAttributes, children?: string[] | string): string;
function label(children?: string[] | string): string;
function label(atts?: SlamHTMLLabelAttributes): string;
function label(): string;
function label(arg1?: SlamHTMLLabelAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("label", arg1, arg2);
}

function legend(atts?: SlamHTMLLegendAttributes, children?: string[] | string): string;
function legend(children?: string[] | string): string;
function legend(atts?: SlamHTMLLegendAttributes): string;
function legend(): string;
function legend(arg1?: SlamHTMLLegendAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("legend", arg1, arg2);
}

function li(atts?: SlamHTMLLiAttributes, children?: string[] | string): string;
function li(children?: string[] | string): string;
function li(atts?: SlamHTMLLiAttributes): string;
function li(): string;
function li(arg1?: SlamHTMLLiAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("li", arg1, arg2);
}

function link(atts?: SlamHTMLLinkAttributes, children?: string[] | string): string;
function link(children?: string[] | string): string;
function link(atts?: SlamHTMLLinkAttributes): string;
function link(): string;
function link(arg1?: SlamHTMLLinkAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("link", arg1, arg2);
}

function main(atts?: SlamHTMLMainAttributes, children?: string[] | string): string;
function main(children?: string[] | string): string;
function main(atts?: SlamHTMLMainAttributes): string;
function main(): string;
function main(arg1?: SlamHTMLMainAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("main", arg1, arg2);
}

function map(atts?: SlamHTMLMapAttributes, children?: string[] | string): string;
function map(children?: string[] | string): string;
function map(atts?: SlamHTMLMapAttributes): string;
function map(): string;
function map(arg1?: SlamHTMLMapAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("map", arg1, arg2);
}

function mark(atts?: SlamHTMLMarkAttributes, children?: string[] | string): string;
function mark(children?: string[] | string): string;
function mark(atts?: SlamHTMLMarkAttributes): string;
function mark(): string;
function mark(arg1?: SlamHTMLMarkAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("mark", arg1, arg2);
}

function menu(atts?: SlamHTMLMenuAttributes, children?: string[] | string): string;
function menu(children?: string[] | string): string;
function menu(atts?: SlamHTMLMenuAttributes): string;
function menu(): string;
function menu(arg1?: SlamHTMLMenuAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("menu", arg1, arg2);
}

function meta(atts?: SlamHTMLMetaAttributes, children?: string[] | string): string;
function meta(children?: string[] | string): string;
function meta(atts?: SlamHTMLMetaAttributes): string;
function meta(): string;
function meta(arg1?: SlamHTMLMetaAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("meta", arg1, arg2);
}

function meter(atts?: SlamHTMLMeterAttributes, children?: string[] | string): string;
function meter(children?: string[] | string): string;
function meter(atts?: SlamHTMLMeterAttributes): string;
function meter(): string;
function meter(arg1?: SlamHTMLMeterAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("meter", arg1, arg2);
}

function nav(atts?: SlamHTMLNavAttributes, children?: string[] | string): string;
function nav(children?: string[] | string): string;
function nav(atts?: SlamHTMLNavAttributes): string;
function nav(): string;
function nav(arg1?: SlamHTMLNavAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("nav", arg1, arg2);
}

function noscript(atts?: SlamHTMLNoscriptAttributes, children?: string[] | string): string;
function noscript(children?: string[] | string): string;
function noscript(atts?: SlamHTMLNoscriptAttributes): string;
function noscript(): string;
function noscript(arg1?: SlamHTMLNoscriptAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("noscript", arg1, arg2);
}

function object(atts?: SlamHTMLObjectAttributes, children?: string[] | string): string;
function object(children?: string[] | string): string;
function object(atts?: SlamHTMLObjectAttributes): string;
function object(): string;
function object(arg1?: SlamHTMLObjectAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("object", arg1, arg2);
}

function ol(atts?: SlamHTMLOlAttributes, children?: string[] | string): string;
function ol(children?: string[] | string): string;
function ol(atts?: SlamHTMLOlAttributes): string;
function ol(): string;
function ol(arg1?: SlamHTMLOlAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("ol", arg1, arg2);
}

function optgroup(atts?: SlamHTMLOptgroupAttributes, children?: string[] | string): string;
function optgroup(children?: string[] | string): string;
function optgroup(atts?: SlamHTMLOptgroupAttributes): string;
function optgroup(): string;
function optgroup(arg1?: SlamHTMLOptgroupAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("optgroup", arg1, arg2);
}

function option(atts?: SlamHTMLOptionAttributes, children?: string[] | string): string;
function option(children?: string[] | string): string;
function option(atts?: SlamHTMLOptionAttributes): string;
function option(): string;
function option(arg1?: SlamHTMLOptionAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("option", arg1, arg2);
}

function output(atts?: SlamHTMLOutputAttributes, children?: string[] | string): string;
function output(children?: string[] | string): string;
function output(atts?: SlamHTMLOutputAttributes): string;
function output(): string;
function output(arg1?: SlamHTMLOutputAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("output", arg1, arg2);
}

function p(atts?: SlamHTMLPAttributes, children?: string[] | string): string;
function p(children?: string[] | string): string;
function p(atts?: SlamHTMLPAttributes): string;
function p(): string;
function p(arg1?: SlamHTMLPAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("p", arg1, arg2);
}

function param(atts?: SlamHTMLParamAttributes, children?: string[] | string): string;
function param(children?: string[] | string): string;
function param(atts?: SlamHTMLParamAttributes): string;
function param(): string;
function param(arg1?: SlamHTMLParamAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("param", arg1, arg2);
}

function picture(atts?: SlamHTMLPictureAttributes, children?: string[] | string): string;
function picture(children?: string[] | string): string;
function picture(atts?: SlamHTMLPictureAttributes): string;
function picture(): string;
function picture(arg1?: SlamHTMLPictureAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("picture", arg1, arg2);
}

function pre(atts?: SlamHTMLPreAttributes, children?: string[] | string): string;
function pre(children?: string[] | string): string;
function pre(atts?: SlamHTMLPreAttributes): string;
function pre(): string;
function pre(arg1?: SlamHTMLPreAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("pre", arg1, arg2);
}

function progress(atts?: SlamHTMLProgressAttributes, children?: string[] | string): string;
function progress(children?: string[] | string): string;
function progress(atts?: SlamHTMLProgressAttributes): string;
function progress(): string;
function progress(arg1?: SlamHTMLProgressAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("progress", arg1, arg2);
}

function q(atts?: SlamHTMLQAttributes, children?: string[] | string): string;
function q(children?: string[] | string): string;
function q(atts?: SlamHTMLQAttributes): string;
function q(): string;
function q(arg1?: SlamHTMLQAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("q", arg1, arg2);
}

function rp(atts?: SlamHTMLRpAttributes, children?: string[] | string): string;
function rp(children?: string[] | string): string;
function rp(atts?: SlamHTMLRpAttributes): string;
function rp(): string;
function rp(arg1?: SlamHTMLRpAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("rp", arg1, arg2);
}

function rt(atts?: SlamHTMLRtAttributes, children?: string[] | string): string;
function rt(children?: string[] | string): string;
function rt(atts?: SlamHTMLRtAttributes): string;
function rt(): string;
function rt(arg1?: SlamHTMLRtAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("rt", arg1, arg2);
}

function ruby(atts?: SlamHTMLRubyAttributes, children?: string[] | string): string;
function ruby(children?: string[] | string): string;
function ruby(atts?: SlamHTMLRubyAttributes): string;
function ruby(): string;
function ruby(arg1?: SlamHTMLRubyAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("ruby", arg1, arg2);
}

function s(atts?: SlamHTMLSAttributes, children?: string[] | string): string;
function s(children?: string[] | string): string;
function s(atts?: SlamHTMLSAttributes): string;
function s(): string;
function s(arg1?: SlamHTMLSAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("s", arg1, arg2);
}

function samp(atts?: SlamHTMLSampAttributes, children?: string[] | string): string;
function samp(children?: string[] | string): string;
function samp(atts?: SlamHTMLSampAttributes): string;
function samp(): string;
function samp(arg1?: SlamHTMLSampAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("samp", arg1, arg2);
}

function script(atts?: SlamHTMLScriptAttributes, children?: string[] | string): string;
function script(children?: string[] | string): string;
function script(atts?: SlamHTMLScriptAttributes): string;
function script(): string;
function script(arg1?: SlamHTMLScriptAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("script", arg1, arg2);
}

function section(atts?: SlamHTMLSectionAttributes, children?: string[] | string): string;
function section(children?: string[] | string): string;
function section(atts?: SlamHTMLSectionAttributes): string;
function section(): string;
function section(arg1?: SlamHTMLSectionAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("section", arg1, arg2);
}

function select(atts?: SlamHTMLSelectAttributes, children?: string[] | string): string;
function select(children?: string[] | string): string;
function select(atts?: SlamHTMLSelectAttributes): string;
function select(): string;
function select(arg1?: SlamHTMLSelectAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("select", arg1, arg2);
}

function slot(atts?: SlamHTMLSlotAttributes, children?: string[] | string): string;
function slot(children?: string[] | string): string;
function slot(atts?: SlamHTMLSlotAttributes): string;
function slot(): string;
function slot(arg1?: SlamHTMLSlotAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("slot", arg1, arg2);
}

function small(atts?: SlamHTMLSmallAttributes, children?: string[] | string): string;
function small(children?: string[] | string): string;
function small(atts?: SlamHTMLSmallAttributes): string;
function small(): string;
function small(arg1?: SlamHTMLSmallAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("small", arg1, arg2);
}

function source(atts?: SlamHTMLSourceAttributes, children?: string[] | string): string;
function source(children?: string[] | string): string;
function source(atts?: SlamHTMLSourceAttributes): string;
function source(): string;
function source(arg1?: SlamHTMLSourceAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("source", arg1, arg2);
}

function span(atts?: SlamHTMLSpanAttributes, children?: string[] | string): string;
function span(children?: string[] | string): string;
function span(atts?: SlamHTMLSpanAttributes): string;
function span(): string;
function span(arg1?: SlamHTMLSpanAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("span", arg1, arg2);
}

function strong(atts?: SlamHTMLStrongAttributes, children?: string[] | string): string;
function strong(children?: string[] | string): string;
function strong(atts?: SlamHTMLStrongAttributes): string;
function strong(): string;
function strong(arg1?: SlamHTMLStrongAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("strong", arg1, arg2);
}

function sub(atts?: SlamHTMLSubAttributes, children?: string[] | string): string;
function sub(children?: string[] | string): string;
function sub(atts?: SlamHTMLSubAttributes): string;
function sub(): string;
function sub(arg1?: SlamHTMLSubAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("sub", arg1, arg2);
}

function summary(atts?: SlamHTMLSummaryAttributes, children?: string[] | string): string;
function summary(children?: string[] | string): string;
function summary(atts?: SlamHTMLSummaryAttributes): string;
function summary(): string;
function summary(arg1?: SlamHTMLSummaryAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("summary", arg1, arg2);
}

function sup(atts?: SlamHTMLSupAttributes, children?: string[] | string): string;
function sup(children?: string[] | string): string;
function sup(atts?: SlamHTMLSupAttributes): string;
function sup(): string;
function sup(arg1?: SlamHTMLSupAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("sup", arg1, arg2);
}

function table(atts?: SlamHTMLTableAttributes, children?: string[] | string): string;
function table(children?: string[] | string): string;
function table(atts?: SlamHTMLTableAttributes): string;
function table(): string;
function table(arg1?: SlamHTMLTableAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("table", arg1, arg2);
}

function tbody(atts?: SlamHTMLTbodyAttributes, children?: string[] | string): string;
function tbody(children?: string[] | string): string;
function tbody(atts?: SlamHTMLTbodyAttributes): string;
function tbody(): string;
function tbody(arg1?: SlamHTMLTbodyAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("tbody", arg1, arg2);
}

function td(atts?: SlamHTMLTdAttributes, children?: string[] | string): string;
function td(children?: string[] | string): string;
function td(atts?: SlamHTMLTdAttributes): string;
function td(): string;
function td(arg1?: SlamHTMLTdAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("td", arg1, arg2);
}

function template(atts?: SlamHTMLTemplateAttributes, children?: string[] | string): string;
function template(children?: string[] | string): string;
function template(atts?: SlamHTMLTemplateAttributes): string;
function template(): string;
function template(arg1?: SlamHTMLTemplateAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("template", arg1, arg2);
}

function textarea(atts?: SlamHTMLTextareaAttributes, children?: string[] | string): string;
function textarea(children?: string[] | string): string;
function textarea(atts?: SlamHTMLTextareaAttributes): string;
function textarea(): string;
function textarea(arg1?: SlamHTMLTextareaAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("textarea", arg1, arg2);
}

function tfoot(atts?: SlamHTMLTfootAttributes, children?: string[] | string): string;
function tfoot(children?: string[] | string): string;
function tfoot(atts?: SlamHTMLTfootAttributes): string;
function tfoot(): string;
function tfoot(arg1?: SlamHTMLTfootAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("tfoot", arg1, arg2);
}

function th(atts?: SlamHTMLThAttributes, children?: string[] | string): string;
function th(children?: string[] | string): string;
function th(atts?: SlamHTMLThAttributes): string;
function th(): string;
function th(arg1?: SlamHTMLThAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("th", arg1, arg2);
}

function thead(atts?: SlamHTMLTheadAttributes, children?: string[] | string): string;
function thead(children?: string[] | string): string;
function thead(atts?: SlamHTMLTheadAttributes): string;
function thead(): string;
function thead(arg1?: SlamHTMLTheadAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("thead", arg1, arg2);
}

function time(atts?: SlamHTMLTimeAttributes, children?: string[] | string): string;
function time(children?: string[] | string): string;
function time(atts?: SlamHTMLTimeAttributes): string;
function time(): string;
function time(arg1?: SlamHTMLTimeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("time", arg1, arg2);
}

function title(atts?: SlamHTMLTitleAttributes, children?: string[] | string): string;
function title(children?: string[] | string): string;
function title(atts?: SlamHTMLTitleAttributes): string;
function title(): string;
function title(arg1?: SlamHTMLTitleAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("title", arg1, arg2);
}

function tr(atts?: SlamHTMLTrAttributes, children?: string[] | string): string;
function tr(children?: string[] | string): string;
function tr(atts?: SlamHTMLTrAttributes): string;
function tr(): string;
function tr(arg1?: SlamHTMLTrAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("tr", arg1, arg2);
}

function track(atts?: SlamHTMLTrackAttributes, children?: string[] | string): string;
function track(children?: string[] | string): string;
function track(atts?: SlamHTMLTrackAttributes): string;
function track(): string;
function track(arg1?: SlamHTMLTrackAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("track", arg1, arg2);
}

function u(atts?: SlamHTMLUAttributes, children?: string[] | string): string;
function u(children?: string[] | string): string;
function u(atts?: SlamHTMLUAttributes): string;
function u(): string;
function u(arg1?: SlamHTMLUAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("u", arg1, arg2);
}

function ul(atts?: SlamHTMLUlAttributes, children?: string[] | string): string;
function ul(children?: string[] | string): string;
function ul(atts?: SlamHTMLUlAttributes): string;
function ul(): string;
function ul(arg1?: SlamHTMLUlAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("ul", arg1, arg2);
}

function var_(atts?: SlamHTMLVar_Attributes, children?: string[] | string): string;
function var_(children?: string[] | string): string;
function var_(atts?: SlamHTMLVar_Attributes): string;
function var_(): string;
function var_(arg1?: SlamHTMLVar_Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("var_", arg1, arg2);
}

function video(atts?: SlamHTMLVideoAttributes, children?: string[] | string): string;
function video(children?: string[] | string): string;
function video(atts?: SlamHTMLVideoAttributes): string;
function video(): string;
function video(arg1?: SlamHTMLVideoAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("video", arg1, arg2);
}

function wbr(atts?: SlamHTMLWbrAttributes, children?: string[] | string): string;
function wbr(children?: string[] | string): string;
function wbr(atts?: SlamHTMLWbrAttributes): string;
function wbr(): string;
function wbr(arg1?: SlamHTMLWbrAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("wbr", arg1, arg2);
}

function a(atts?: SlamSVGAAttributes, children?: string[] | string): string;
function a(children?: string[] | string): string;
function a(atts?: SlamSVGAAttributes): string;
function a(): string;
function a(arg1?: SlamSVGAAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("a", arg1, arg2);
}

function animate(atts?: SlamSVGAnimateAttributes, children?: string[] | string): string;
function animate(children?: string[] | string): string;
function animate(atts?: SlamSVGAnimateAttributes): string;
function animate(): string;
function animate(arg1?: SlamSVGAnimateAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("animate", arg1, arg2);
}

function animateMotion(atts?: SlamSVGAnimateMotionAttributes, children?: string[] | string): string;
function animateMotion(children?: string[] | string): string;
function animateMotion(atts?: SlamSVGAnimateMotionAttributes): string;
function animateMotion(): string;
function animateMotion(arg1?: SlamSVGAnimateMotionAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("animateMotion", arg1, arg2);
}

function animateTransform(atts?: SlamSVGAnimateTransformAttributes, children?: string[] | string): string;
function animateTransform(children?: string[] | string): string;
function animateTransform(atts?: SlamSVGAnimateTransformAttributes): string;
function animateTransform(): string;
function animateTransform(arg1?: SlamSVGAnimateTransformAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("animateTransform", arg1, arg2);
}

function circle(atts?: SlamSVGCircleAttributes, children?: string[] | string): string;
function circle(children?: string[] | string): string;
function circle(atts?: SlamSVGCircleAttributes): string;
function circle(): string;
function circle(arg1?: SlamSVGCircleAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("circle", arg1, arg2);
}

function clipPath(atts?: SlamSVGClipPathAttributes, children?: string[] | string): string;
function clipPath(children?: string[] | string): string;
function clipPath(atts?: SlamSVGClipPathAttributes): string;
function clipPath(): string;
function clipPath(arg1?: SlamSVGClipPathAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("clipPath", arg1, arg2);
}

function defs(atts?: SlamSVGDefsAttributes, children?: string[] | string): string;
function defs(children?: string[] | string): string;
function defs(atts?: SlamSVGDefsAttributes): string;
function defs(): string;
function defs(arg1?: SlamSVGDefsAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("defs", arg1, arg2);
}

function desc(atts?: SlamSVGDescAttributes, children?: string[] | string): string;
function desc(children?: string[] | string): string;
function desc(atts?: SlamSVGDescAttributes): string;
function desc(): string;
function desc(arg1?: SlamSVGDescAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("desc", arg1, arg2);
}

function discard(atts?: SlamSVGDiscardAttributes, children?: string[] | string): string;
function discard(children?: string[] | string): string;
function discard(atts?: SlamSVGDiscardAttributes): string;
function discard(): string;
function discard(arg1?: SlamSVGDiscardAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("discard", arg1, arg2);
}

function ellipse(atts?: SlamSVGEllipseAttributes, children?: string[] | string): string;
function ellipse(children?: string[] | string): string;
function ellipse(atts?: SlamSVGEllipseAttributes): string;
function ellipse(): string;
function ellipse(arg1?: SlamSVGEllipseAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("ellipse", arg1, arg2);
}

function feBlend(atts?: SlamSVGFeBlendAttributes, children?: string[] | string): string;
function feBlend(children?: string[] | string): string;
function feBlend(atts?: SlamSVGFeBlendAttributes): string;
function feBlend(): string;
function feBlend(arg1?: SlamSVGFeBlendAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feBlend", arg1, arg2);
}

function feColorMatrix(atts?: SlamSVGFeColorMatrixAttributes, children?: string[] | string): string;
function feColorMatrix(children?: string[] | string): string;
function feColorMatrix(atts?: SlamSVGFeColorMatrixAttributes): string;
function feColorMatrix(): string;
function feColorMatrix(arg1?: SlamSVGFeColorMatrixAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feColorMatrix", arg1, arg2);
}

function feComponentTransfer(atts?: SlamSVGFeComponentTransferAttributes, children?: string[] | string): string;
function feComponentTransfer(children?: string[] | string): string;
function feComponentTransfer(atts?: SlamSVGFeComponentTransferAttributes): string;
function feComponentTransfer(): string;
function feComponentTransfer(
  arg1?: SlamSVGFeComponentTransferAttributes | string[] | string,
  arg2?: string[] | string
) {
  return genElemString("feComponentTransfer", arg1, arg2);
}

function feComposite(atts?: SlamSVGFeCompositeAttributes, children?: string[] | string): string;
function feComposite(children?: string[] | string): string;
function feComposite(atts?: SlamSVGFeCompositeAttributes): string;
function feComposite(): string;
function feComposite(arg1?: SlamSVGFeCompositeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feComposite", arg1, arg2);
}

function feConvolveMatrix(atts?: SlamSVGFeConvolveMatrixAttributes, children?: string[] | string): string;
function feConvolveMatrix(children?: string[] | string): string;
function feConvolveMatrix(atts?: SlamSVGFeConvolveMatrixAttributes): string;
function feConvolveMatrix(): string;
function feConvolveMatrix(arg1?: SlamSVGFeConvolveMatrixAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feConvolveMatrix", arg1, arg2);
}

function feDiffuseLighting(atts?: SlamSVGFeDiffuseLightingAttributes, children?: string[] | string): string;
function feDiffuseLighting(children?: string[] | string): string;
function feDiffuseLighting(atts?: SlamSVGFeDiffuseLightingAttributes): string;
function feDiffuseLighting(): string;
function feDiffuseLighting(arg1?: SlamSVGFeDiffuseLightingAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feDiffuseLighting", arg1, arg2);
}

function feDisplacementMap(atts?: SlamSVGFeDisplacementMapAttributes, children?: string[] | string): string;
function feDisplacementMap(children?: string[] | string): string;
function feDisplacementMap(atts?: SlamSVGFeDisplacementMapAttributes): string;
function feDisplacementMap(): string;
function feDisplacementMap(arg1?: SlamSVGFeDisplacementMapAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feDisplacementMap", arg1, arg2);
}

function feDistantLight(atts?: SlamSVGFeDistantLightAttributes, children?: string[] | string): string;
function feDistantLight(children?: string[] | string): string;
function feDistantLight(atts?: SlamSVGFeDistantLightAttributes): string;
function feDistantLight(): string;
function feDistantLight(arg1?: SlamSVGFeDistantLightAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feDistantLight", arg1, arg2);
}

function feDropShadow(atts?: SlamSVGFeDropShadowAttributes, children?: string[] | string): string;
function feDropShadow(children?: string[] | string): string;
function feDropShadow(atts?: SlamSVGFeDropShadowAttributes): string;
function feDropShadow(): string;
function feDropShadow(arg1?: SlamSVGFeDropShadowAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feDropShadow", arg1, arg2);
}

function feFlood(atts?: SlamSVGFeFloodAttributes, children?: string[] | string): string;
function feFlood(children?: string[] | string): string;
function feFlood(atts?: SlamSVGFeFloodAttributes): string;
function feFlood(): string;
function feFlood(arg1?: SlamSVGFeFloodAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feFlood", arg1, arg2);
}

function feFuncA(atts?: SlamSVGFeFuncAAttributes, children?: string[] | string): string;
function feFuncA(children?: string[] | string): string;
function feFuncA(atts?: SlamSVGFeFuncAAttributes): string;
function feFuncA(): string;
function feFuncA(arg1?: SlamSVGFeFuncAAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feFuncA", arg1, arg2);
}

function feFuncB(atts?: SlamSVGFeFuncBAttributes, children?: string[] | string): string;
function feFuncB(children?: string[] | string): string;
function feFuncB(atts?: SlamSVGFeFuncBAttributes): string;
function feFuncB(): string;
function feFuncB(arg1?: SlamSVGFeFuncBAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feFuncB", arg1, arg2);
}

function feFuncG(atts?: SlamSVGFeFuncGAttributes, children?: string[] | string): string;
function feFuncG(children?: string[] | string): string;
function feFuncG(atts?: SlamSVGFeFuncGAttributes): string;
function feFuncG(): string;
function feFuncG(arg1?: SlamSVGFeFuncGAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feFuncG", arg1, arg2);
}

function feFuncR(atts?: SlamSVGFeFuncRAttributes, children?: string[] | string): string;
function feFuncR(children?: string[] | string): string;
function feFuncR(atts?: SlamSVGFeFuncRAttributes): string;
function feFuncR(): string;
function feFuncR(arg1?: SlamSVGFeFuncRAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feFuncR", arg1, arg2);
}

function feGaussianBlur(atts?: SlamSVGFeGaussianBlurAttributes, children?: string[] | string): string;
function feGaussianBlur(children?: string[] | string): string;
function feGaussianBlur(atts?: SlamSVGFeGaussianBlurAttributes): string;
function feGaussianBlur(): string;
function feGaussianBlur(arg1?: SlamSVGFeGaussianBlurAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feGaussianBlur", arg1, arg2);
}

function feImage(atts?: SlamSVGFeImageAttributes, children?: string[] | string): string;
function feImage(children?: string[] | string): string;
function feImage(atts?: SlamSVGFeImageAttributes): string;
function feImage(): string;
function feImage(arg1?: SlamSVGFeImageAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feImage", arg1, arg2);
}

function feMerge(atts?: SlamSVGFeMergeAttributes, children?: string[] | string): string;
function feMerge(children?: string[] | string): string;
function feMerge(atts?: SlamSVGFeMergeAttributes): string;
function feMerge(): string;
function feMerge(arg1?: SlamSVGFeMergeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feMerge", arg1, arg2);
}

function feMergeNode(atts?: SlamSVGFeMergeNodeAttributes, children?: string[] | string): string;
function feMergeNode(children?: string[] | string): string;
function feMergeNode(atts?: SlamSVGFeMergeNodeAttributes): string;
function feMergeNode(): string;
function feMergeNode(arg1?: SlamSVGFeMergeNodeAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feMergeNode", arg1, arg2);
}

function feMorphology(atts?: SlamSVGFeMorphologyAttributes, children?: string[] | string): string;
function feMorphology(children?: string[] | string): string;
function feMorphology(atts?: SlamSVGFeMorphologyAttributes): string;
function feMorphology(): string;
function feMorphology(arg1?: SlamSVGFeMorphologyAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feMorphology", arg1, arg2);
}

function feOffset(atts?: SlamSVGFeOffsetAttributes, children?: string[] | string): string;
function feOffset(children?: string[] | string): string;
function feOffset(atts?: SlamSVGFeOffsetAttributes): string;
function feOffset(): string;
function feOffset(arg1?: SlamSVGFeOffsetAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feOffset", arg1, arg2);
}

function fePointLight(atts?: SlamSVGFePointLightAttributes, children?: string[] | string): string;
function fePointLight(children?: string[] | string): string;
function fePointLight(atts?: SlamSVGFePointLightAttributes): string;
function fePointLight(): string;
function fePointLight(arg1?: SlamSVGFePointLightAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("fePointLight", arg1, arg2);
}

function feSpecularLighting(atts?: SlamSVGFeSpecularLightingAttributes, children?: string[] | string): string;
function feSpecularLighting(children?: string[] | string): string;
function feSpecularLighting(atts?: SlamSVGFeSpecularLightingAttributes): string;
function feSpecularLighting(): string;
function feSpecularLighting(arg1?: SlamSVGFeSpecularLightingAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feSpecularLighting", arg1, arg2);
}

function feSpotLight(atts?: SlamSVGFeSpotLightAttributes, children?: string[] | string): string;
function feSpotLight(children?: string[] | string): string;
function feSpotLight(atts?: SlamSVGFeSpotLightAttributes): string;
function feSpotLight(): string;
function feSpotLight(arg1?: SlamSVGFeSpotLightAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feSpotLight", arg1, arg2);
}

function feTile(atts?: SlamSVGFeTileAttributes, children?: string[] | string): string;
function feTile(children?: string[] | string): string;
function feTile(atts?: SlamSVGFeTileAttributes): string;
function feTile(): string;
function feTile(arg1?: SlamSVGFeTileAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feTile", arg1, arg2);
}

function feTurbulence(atts?: SlamSVGFeTurbulenceAttributes, children?: string[] | string): string;
function feTurbulence(children?: string[] | string): string;
function feTurbulence(atts?: SlamSVGFeTurbulenceAttributes): string;
function feTurbulence(): string;
function feTurbulence(arg1?: SlamSVGFeTurbulenceAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("feTurbulence", arg1, arg2);
}

function filter(atts?: SlamSVGFilterAttributes, children?: string[] | string): string;
function filter(children?: string[] | string): string;
function filter(atts?: SlamSVGFilterAttributes): string;
function filter(): string;
function filter(arg1?: SlamSVGFilterAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("filter", arg1, arg2);
}

function foreignObject(atts?: SlamSVGForeignObjectAttributes, children?: string[] | string): string;
function foreignObject(children?: string[] | string): string;
function foreignObject(atts?: SlamSVGForeignObjectAttributes): string;
function foreignObject(): string;
function foreignObject(arg1?: SlamSVGForeignObjectAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("foreignObject", arg1, arg2);
}

function g(atts?: SlamSVGGAttributes, children?: string[] | string): string;
function g(children?: string[] | string): string;
function g(atts?: SlamSVGGAttributes): string;
function g(): string;
function g(arg1?: SlamSVGGAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("g", arg1, arg2);
}

function image(atts?: SlamSVGImageAttributes, children?: string[] | string): string;
function image(children?: string[] | string): string;
function image(atts?: SlamSVGImageAttributes): string;
function image(): string;
function image(arg1?: SlamSVGImageAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("image", arg1, arg2);
}

function line(atts?: SlamSVGLineAttributes, children?: string[] | string): string;
function line(children?: string[] | string): string;
function line(atts?: SlamSVGLineAttributes): string;
function line(): string;
function line(arg1?: SlamSVGLineAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("line", arg1, arg2);
}

function linearGradient(atts?: SlamSVGLinearGradientAttributes, children?: string[] | string): string;
function linearGradient(children?: string[] | string): string;
function linearGradient(atts?: SlamSVGLinearGradientAttributes): string;
function linearGradient(): string;
function linearGradient(arg1?: SlamSVGLinearGradientAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("linearGradient", arg1, arg2);
}

function marker(atts?: SlamSVGMarkerAttributes, children?: string[] | string): string;
function marker(children?: string[] | string): string;
function marker(atts?: SlamSVGMarkerAttributes): string;
function marker(): string;
function marker(arg1?: SlamSVGMarkerAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("marker", arg1, arg2);
}

function mask(atts?: SlamSVGMaskAttributes, children?: string[] | string): string;
function mask(children?: string[] | string): string;
function mask(atts?: SlamSVGMaskAttributes): string;
function mask(): string;
function mask(arg1?: SlamSVGMaskAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("mask", arg1, arg2);
}

function metadata(atts?: SlamSVGMetadataAttributes, children?: string[] | string): string;
function metadata(children?: string[] | string): string;
function metadata(atts?: SlamSVGMetadataAttributes): string;
function metadata(): string;
function metadata(arg1?: SlamSVGMetadataAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("metadata", arg1, arg2);
}

function mpath(atts?: SlamSVGMpathAttributes, children?: string[] | string): string;
function mpath(children?: string[] | string): string;
function mpath(atts?: SlamSVGMpathAttributes): string;
function mpath(): string;
function mpath(arg1?: SlamSVGMpathAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("mpath", arg1, arg2);
}

function path(atts?: SlamSVGPathAttributes, children?: string[] | string): string;
function path(children?: string[] | string): string;
function path(atts?: SlamSVGPathAttributes): string;
function path(): string;
function path(arg1?: SlamSVGPathAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("path", arg1, arg2);
}

function pattern(atts?: SlamSVGPatternAttributes, children?: string[] | string): string;
function pattern(children?: string[] | string): string;
function pattern(atts?: SlamSVGPatternAttributes): string;
function pattern(): string;
function pattern(arg1?: SlamSVGPatternAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("pattern", arg1, arg2);
}

function polygon(atts?: SlamSVGPolygonAttributes, children?: string[] | string): string;
function polygon(children?: string[] | string): string;
function polygon(atts?: SlamSVGPolygonAttributes): string;
function polygon(): string;
function polygon(arg1?: SlamSVGPolygonAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("polygon", arg1, arg2);
}

function polyline(atts?: SlamSVGPolylineAttributes, children?: string[] | string): string;
function polyline(children?: string[] | string): string;
function polyline(atts?: SlamSVGPolylineAttributes): string;
function polyline(): string;
function polyline(arg1?: SlamSVGPolylineAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("polyline", arg1, arg2);
}

function radialGradient(atts?: SlamSVGRadialGradientAttributes, children?: string[] | string): string;
function radialGradient(children?: string[] | string): string;
function radialGradient(atts?: SlamSVGRadialGradientAttributes): string;
function radialGradient(): string;
function radialGradient(arg1?: SlamSVGRadialGradientAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("radialGradient", arg1, arg2);
}

function rect(atts?: SlamSVGRectAttributes, children?: string[] | string): string;
function rect(children?: string[] | string): string;
function rect(atts?: SlamSVGRectAttributes): string;
function rect(): string;
function rect(arg1?: SlamSVGRectAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("rect", arg1, arg2);
}

function set(atts?: SlamSVGSetAttributes, children?: string[] | string): string;
function set(children?: string[] | string): string;
function set(atts?: SlamSVGSetAttributes): string;
function set(): string;
function set(arg1?: SlamSVGSetAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("set", arg1, arg2);
}

function stop(atts?: SlamSVGStopAttributes, children?: string[] | string): string;
function stop(children?: string[] | string): string;
function stop(atts?: SlamSVGStopAttributes): string;
function stop(): string;
function stop(arg1?: SlamSVGStopAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("stop", arg1, arg2);
}

function svg(atts?: SlamSVGSvgAttributes, children?: string[] | string): string;
function svg(children?: string[] | string): string;
function svg(atts?: SlamSVGSvgAttributes): string;
function svg(): string;
function svg(arg1?: SlamSVGSvgAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("svg", arg1, arg2);
}

function switch_(atts?: SlamSVGSwitch_Attributes, children?: string[] | string): string;
function switch_(children?: string[] | string): string;
function switch_(atts?: SlamSVGSwitch_Attributes): string;
function switch_(): string;
function switch_(arg1?: SlamSVGSwitch_Attributes | string[] | string, arg2?: string[] | string) {
  return genElemString("switch_", arg1, arg2);
}

function symbol(atts?: SlamSVGSymbolAttributes, children?: string[] | string): string;
function symbol(children?: string[] | string): string;
function symbol(atts?: SlamSVGSymbolAttributes): string;
function symbol(): string;
function symbol(arg1?: SlamSVGSymbolAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("symbol", arg1, arg2);
}

function text(atts?: SlamSVGTextAttributes, children?: string[] | string): string;
function text(children?: string[] | string): string;
function text(atts?: SlamSVGTextAttributes): string;
function text(): string;
function text(arg1?: SlamSVGTextAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("text", arg1, arg2);
}

function textPath(atts?: SlamSVGTextPathAttributes, children?: string[] | string): string;
function textPath(children?: string[] | string): string;
function textPath(atts?: SlamSVGTextPathAttributes): string;
function textPath(): string;
function textPath(arg1?: SlamSVGTextPathAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("textPath", arg1, arg2);
}

function tspan(atts?: SlamSVGTspanAttributes, children?: string[] | string): string;
function tspan(children?: string[] | string): string;
function tspan(atts?: SlamSVGTspanAttributes): string;
function tspan(): string;
function tspan(arg1?: SlamSVGTspanAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("tspan", arg1, arg2);
}

function unknown(atts?: SlamSVGUnknownAttributes, children?: string[] | string): string;
function unknown(children?: string[] | string): string;
function unknown(atts?: SlamSVGUnknownAttributes): string;
function unknown(): string;
function unknown(arg1?: SlamSVGUnknownAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("unknown", arg1, arg2);
}

function use(atts?: SlamSVGUseAttributes, children?: string[] | string): string;
function use(children?: string[] | string): string;
function use(atts?: SlamSVGUseAttributes): string;
function use(): string;
function use(arg1?: SlamSVGUseAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("use", arg1, arg2);
}

function view(atts?: SlamSVGViewAttributes, children?: string[] | string): string;
function view(children?: string[] | string): string;
function view(atts?: SlamSVGViewAttributes): string;
function view(): string;
function view(arg1?: SlamSVGViewAttributes | string[] | string, arg2?: string[] | string) {
  return genElemString("view", arg1, arg2);
}

export {
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  section,
  select,
  slot,
  small,
  source,
  span,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  var_,
  video,
  wbr,
  a,
  animate,
  animateMotion,
  animateTransform,
  circle,
  clipPath,
  defs,
  desc,
  discard,
  ellipse,
  feBlend,
  feColorMatrix,
  feComponentTransfer,
  feComposite,
  feConvolveMatrix,
  feDiffuseLighting,
  feDisplacementMap,
  feDistantLight,
  feDropShadow,
  feFlood,
  feFuncA,
  feFuncB,
  feFuncG,
  feFuncR,
  feGaussianBlur,
  feImage,
  feMerge,
  feMergeNode,
  feMorphology,
  feOffset,
  fePointLight,
  feSpecularLighting,
  feSpotLight,
  feTile,
  feTurbulence,
  filter,
  foreignObject,
  g,
  image,
  line,
  linearGradient,
  marker,
  mask,
  metadata,
  mpath,
  path,
  pattern,
  polygon,
  polyline,
  radialGradient,
  rect,
  set,
  stop,
  svg,
  switch_,
  symbol,
  text,
  textPath,
  tspan,
  unknown,
  use,
  view,
};
