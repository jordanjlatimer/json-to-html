import { SlamElementAttributes } from "./baseInterfaces"

export interface SlamHTMLElementAttributes extends SlamElementAttributes{
  accesskey?: string;
  autocapitalize?: "on" | "off" | "none" | "sentences" | "words" | "characters";
  contenteditable?: string;
  dir?: "ltr" | "rtl" | "auto";
  draggable?: boolean;
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden?: boolean;
  inputmode?: "none" | "text" | "tel" | "email" | "url" | "numeric" | "decimal" | "search";
  is?: string
  lang?: string;
  spellcheck?: boolean;
  title?: string;
  translate?: "yes" | "no";
}

export interface SlamHTMLAbbrAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLAddressAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLAreaAttributes extends SlamHTMLElementAttributes{
  href?: string;
  alt?: string;
  coords?: string;
  download?: string;
  ping?: string;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  rel?: string;
  shape?: "circle" | "default" | "poly" | "rect";
}

export interface SlamHTMLArticleAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLAsideAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLAudioAttributes extends SlamHTMLElementAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
}

export interface SlamHTMLBAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLBaseAttributes extends SlamHTMLElementAttributes {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface SlamHTMLBdiAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLBdoAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLBlockquoteAttributes extends SlamHTMLElementAttributes {
  cite?: string;
}

export interface SlamHTMLBodyAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLBrAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLButtonAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  formmethod?: "GET" | "POST" | "dialog";
  formnovalidate?: boolean;
  formtarget?: "_blank" | "_self" | "_parent" | "_top";
  name?: string;
  type?: "submit" | "reset" | "button";
  value?: string;
}

export interface SlamHTMLCanvasAttributes extends SlamHTMLElementAttributes{
  width?: number;
  height?: number;
}

export interface SlamHTMLCaptionAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLCiteAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLCodeAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLColAttributes extends SlamHTMLElementAttributes{
  span?: number
}

export interface SlamHTMLColgroupAttributes extends SlamHTMLElementAttributes{
  span?: number
}

export interface SlamHTMLDataAttributes extends SlamHTMLElementAttributes{
  value?: string
}

export interface SlamHTMLDatalistAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLDdAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLDelAttributes extends SlamHTMLElementAttributes{
  cite?: string,
  datetime?: string
}

export interface SlamHTMLDetailsAttributes extends SlamHTMLElementAttributes{
  open?: boolean
}

export interface SlamHTMLDfnAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLDialogAttributes extends SlamHTMLElementAttributes{
  open?: boolean
}

export interface SlamHTMLDivAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLDlAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLDtAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLEmAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLEmbedAttributes extends SlamHTMLElementAttributes{
  height?: string;
  src?: string;
  type?: string;
  width?: string;
}

export interface SlamHTMLFieldsetAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  form?: string;
  name?: string;
}

export interface SlamHTMLFigcaptionAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLFigureAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLFooterAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLFormAttributes extends SlamHTMLElementAttributes{
    "accept-charset"?: string;
    action?: string;
    autocomplete?: "on" | "off";
    enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    method?: "GET" | "POST" | "dialog";
    name?: string;
    novalidate?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
}

export interface SlamHTMLH1Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLH2Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLH3Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLH4Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLH5Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLH6Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLHeadAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLHeaderAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLHgroupAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLHrAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLHtmlAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLIAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLIframeAttributes extends SlamHTMLElementAttributes{
  allow?: string;
  allowfullscreen?: boolean;
  height?: string;
  loading?: "lazy" | "eager";
  name?: "_blank" | "_self" | "_parent" | "_top";
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  sandbox?: string;
  src?: string;
  srcdoc?: string;
  width?: string;
}

export interface SlamHTMLImgAttributes extends SlamHTMLElementAttributes{
  alt?: string;
  crossorigin?: "anonymous" | "use-credentials";
  decoding?: "sync" | "async" | "auto";
  height?: number;
  isMap?: boolean;
  loading?: "lazy" | "eager";
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  sizes?: string;
  src?: string;
  srcset?: string;
  useMap?: string;
  width?: number;
}

export interface SlamHTMLInputAttributes extends SlamHTMLElementAttributes{
  accept?: string;
  alt?: string;
  autocomplete?: string;
  checked?: boolean;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  formmethod?: "GET" | "POST" | "dialog";
  formnovalidate?: boolean;
  formtarget?: "_blank" | "_self" | "_parent" | "_top";
  height?: number;
  list?: string;
  max?: string;
  maxlength?: number;
  min?: string;
  minlength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: number;
  src?: string;
  step?: string;
  type?: "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";
  value?: string;
  width?: number;
}

export interface SlamHTMLInsAttributes extends SlamHTMLElementAttributes{
  cite?: string,
  datetime?: string
}

export interface SlamHTMLKbdAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLLabelAttributes extends SlamHTMLElementAttributes{
  for?: string;
}

export interface SlamHTMLLegendAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLLiAttributes extends SlamHTMLElementAttributes{
  value?: number
}

export interface SlamHTMLLinkAttributes extends SlamHTMLElementAttributes{
  as?: string;
  color?: string;
  crossorigin?: "anonymous" | "use-credentials";
  disabled?: boolean;
  href?: string;
  hreflang?: string;
  imagesizes?: string;
  imagesrcset?: string;
  integrity?: string;
  media?: string;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  rel?: string;
  sizes?: string;
  type?: string;
}

export interface SlamHTMLMainAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLMapAttributes extends SlamHTMLElementAttributes{
  name?: string;
}

export interface SlamHTMLMarkAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLMenuAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLLegendAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLMetaAttributes extends SlamHTMLElementAttributes{
  charset?: "utf-8"
  content?: string;
  "http-equiv"?: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy";
  name?: string;
}

export interface SlamHTMLMeterAttributes extends SlamHTMLElementAttributes{
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

export interface SlamHTMLNavAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLNoscriptAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLObjectAttributes extends SlamHTMLElementAttributes{
  data?: string;
  form?: string;
  height?: string;
  name?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
  usemap?: string;
  width?: string;
}

export interface SlamHTMLOlAttributes extends SlamHTMLElementAttributes{
  reversed?: boolean;
  start?: number;
  type?: "1" | "a" | "A" | "i" | "I"
}

export interface SlamHTMLOptgroupAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  label?: string;
}

export interface SlamHTMLOptionAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

export interface SlamHTMLOutputAttributes extends SlamHTMLElementAttributes{
  for?: string;
  form?: string;
  name?: string;
}

export interface SlamHTMLPAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLParamAttributes extends SlamHTMLElementAttributes{
  name?: string;
  value?: string;
}

export interface SlamHTMLPictureAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLPreAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLProgressAttributes extends SlamHTMLElementAttributes{
  value?: number;
  max?: number;
}

export interface SlamHTMLQAttributes extends SlamHTMLElementAttributes{
  cite?: string;
}

export interface SlamHTMLRpAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLRtAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLRubyAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSampAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLScriptAttributes extends SlamHTMLElementAttributes{
  async?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  defer?: boolean;
  integrity?: string;
  nomodule?: boolean;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  src?: string;
  type?: "module" | string;
}

export interface SlamHTMLSectionAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSelectAttributes extends SlamHTMLElementAttributes{
  autocomplete?: string;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}

export interface SlamHTMLSlotAttributes extends SlamHTMLElementAttributes{
  name?: string;
}

export interface SlamHTMLSmallAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSourceAttributes extends SlamHTMLElementAttributes{
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

export interface SlamHTMLSpanAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLStrongAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLStyleAttributes extends SlamHTMLElementAttributes{
  media?: string
}

export interface SlamHTMLSubAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSummaryAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLSupAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTableAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTbodyAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTdAttributes extends SlamHTMLElementAttributes{
  colspan?: number;
  rowspan?: number;
  headers?: string;
}

export interface SlamHTMLTemplateAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTextareaAttributes extends SlamHTMLElementAttributes{
  autocomplete?: string;
  cols?: number;
  dirname?: string;
  disabled?: boolean;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  wrap?: "soft" | "hard";
}

export interface SlamHTMLTfootAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLThAttributes extends SlamHTMLElementAttributes{
  abbr?: string;
  colspan?: number;
  rowspan?: number;
  headers?: string;
  scope?: "row" | "col" | "rowgroup" | "colgroup"
}

export interface SlamHTMLTheadAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTimeAttributes extends SlamHTMLElementAttributes{
  datetime?: string;
}

export interface SlamHTMLTitleAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTrAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLTrackAttributes extends SlamHTMLElementAttributes{
  default?: boolean;
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  label?: string;
  src?: string;
  srclang?: string;
}

export interface SlamHTMLUAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLUlAttributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLVar_Attributes extends SlamHTMLElementAttributes{}

export interface SlamHTMLVideoAttributes extends SlamHTMLElementAttributes{
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
  height?: number;
  playsinline?: boolean;
  poster?: string;
  width?: number;
}

export interface SlamHTMLWbrAttributes extends SlamHTMLElementAttributes{}