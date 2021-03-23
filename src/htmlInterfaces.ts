import { ElementAttributes } from "./slamInterfaces";

export interface HTMLElementAttributes extends ElementAttributes {
  accesskey?: string;
  autocapitalize?: "on" | "off" | "none" | "sentences" | "words" | "characters";
  contenteditable?: string;
  dir?: "ltr" | "rtl" | "auto";
  draggable?: boolean;
  enterkeyhint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden?: boolean;
  inputmode?: "none" | "text" | "tel" | "email" | "url" | "numeric" | "decimal" | "search";
  is?: string;
  lang?: string;
  spellcheck?: boolean;
  title?: string;
  translate?: "yes" | "no";
}

export interface HTMLAbbrAttributes extends HTMLElementAttributes {}

export interface HTMLAddressAttributes extends HTMLElementAttributes {}

export interface HTMLAreaAttributes extends HTMLElementAttributes {
  href?: string;
  alt?: string;
  coords?: string;
  download?: string;
  ping?: string;
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  rel?: string;
  shape?: "circle" | "default" | "poly" | "rect";
}

export interface HTMLArticleAttributes extends HTMLElementAttributes {}

export interface HTMLAsideAttributes extends HTMLElementAttributes {}

export interface HTMLAudioAttributes extends HTMLElementAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
}

export interface HTMLBAttributes extends HTMLElementAttributes {}

export interface HTMLBaseAttributes extends HTMLElementAttributes {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface HTMLBdiAttributes extends HTMLElementAttributes {}

export interface HTMLBdoAttributes extends HTMLElementAttributes {}

export interface HTMLBlockquoteAttributes extends HTMLElementAttributes {
  cite?: string;
}

export interface HTMLBodyAttributes extends HTMLElementAttributes {}

export interface HTMLBrAttributes extends HTMLElementAttributes {}

export interface HTMLButtonAttributes extends HTMLElementAttributes {
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

export interface HTMLCanvasAttributes extends HTMLElementAttributes {
  width?: number | string;
  height?: number | string;
}

export interface HTMLCaptionAttributes extends HTMLElementAttributes {}

export interface HTMLCiteAttributes extends HTMLElementAttributes {}

export interface HTMLCodeAttributes extends HTMLElementAttributes {}

export interface HTMLColAttributes extends HTMLElementAttributes {
  span?: number;
}

export interface HTMLColgroupAttributes extends HTMLElementAttributes {
  span?: number;
}

export interface HTMLDataAttributes extends HTMLElementAttributes {
  value?: string;
}

export interface HTMLDatalistAttributes extends HTMLElementAttributes {}

export interface HTMLDdAttributes extends HTMLElementAttributes {}

export interface HTMLDelAttributes extends HTMLElementAttributes {
  cite?: string;
  datetime?: string;
}

export interface HTMLDetailsAttributes extends HTMLElementAttributes {
  open?: boolean;
}

export interface HTMLDfnAttributes extends HTMLElementAttributes {}

export interface HTMLDialogAttributes extends HTMLElementAttributes {
  open?: boolean;
}

export interface HTMLDivAttributes extends HTMLElementAttributes {}

export interface HTMLDlAttributes extends HTMLElementAttributes {}

export interface HTMLDtAttributes extends HTMLElementAttributes {}

export interface HTMLEmAttributes extends HTMLElementAttributes {}

export interface HTMLEmbedAttributes extends HTMLElementAttributes {
  height?: string;
  src?: string;
  type?: string;
  width?: string;
}

export interface HTMLFieldsetAttributes extends HTMLElementAttributes {
  disabled?: boolean;
  form?: string;
  name?: string;
}

export interface HTMLFigcaptionAttributes extends HTMLElementAttributes {}

export interface HTMLFigureAttributes extends HTMLElementAttributes {}

export interface HTMLFooterAttributes extends HTMLElementAttributes {}

export interface HTMLFormAttributes extends HTMLElementAttributes {
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

export interface HTMLH1Attributes extends HTMLElementAttributes {}

export interface HTMLH2Attributes extends HTMLElementAttributes {}

export interface HTMLH3Attributes extends HTMLElementAttributes {}

export interface HTMLH4Attributes extends HTMLElementAttributes {}

export interface HTMLH5Attributes extends HTMLElementAttributes {}

export interface HTMLH6Attributes extends HTMLElementAttributes {}

export interface HTMLHeadAttributes extends HTMLElementAttributes {}

export interface HTMLHeaderAttributes extends HTMLElementAttributes {}

export interface HTMLHgroupAttributes extends HTMLElementAttributes {}

export interface HTMLHrAttributes extends HTMLElementAttributes {}

export interface HTMLHtmlAttributes extends HTMLElementAttributes {}

export interface HTMLIAttributes extends HTMLElementAttributes {}

export interface HTMLIframeAttributes extends HTMLElementAttributes {
  allow?: string;
  allowfullscreen?: boolean;
  height?: string;
  loading?: "lazy" | "eager";
  name?: "_blank" | "_self" | "_parent" | "_top";
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  sandbox?: string;
  src?: string;
  srcdoc?: string;
  width?: string;
}

export interface HTMLImgAttributes extends HTMLElementAttributes {
  alt?: string;
  crossorigin?: "anonymous" | "use-credentials";
  decoding?: "sync" | "async" | "auto";
  height?: number | string;
  isMap?: boolean;
  loading?: "lazy" | "eager";
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  sizes?: string;
  src?: string;
  srcset?: string;
  useMap?: string;
  width?: number | string;
}

export interface HTMLInputAttributes extends HTMLElementAttributes {
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
  height?: number | string;
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
  type?:
    | "hidden"
    | "text"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "password"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "number"
    | "range"
    | "color"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "image"
    | "reset"
    | "button";
  value?: string;
  width?: number | string;
}

export interface HTMLInsAttributes extends HTMLElementAttributes {
  cite?: string;
  datetime?: string;
}

export interface HTMLKbdAttributes extends HTMLElementAttributes {}

export interface HTMLLabelAttributes extends HTMLElementAttributes {
  for?: string;
}

export interface HTMLLegendAttributes extends HTMLElementAttributes {}

export interface HTMLLiAttributes extends HTMLElementAttributes {
  value?: number;
}

export interface HTMLLinkAttributes extends HTMLElementAttributes {
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
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  rel?: string;
  sizes?: string;
  type?: string;
}

export interface HTMLMainAttributes extends HTMLElementAttributes {}

export interface HTMLMapAttributes extends HTMLElementAttributes {
  name?: string;
}

export interface HTMLMarkAttributes extends HTMLElementAttributes {}

export interface HTMLMenuAttributes extends HTMLElementAttributes {}

export interface HTMLLegendAttributes extends HTMLElementAttributes {}

export interface HTMLMetaAttributes extends HTMLElementAttributes {
  charset?: "utf-8";
  content?: string;
  "http-equiv"?: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy";
  name?: string;
}

export interface HTMLMeterAttributes extends HTMLElementAttributes {
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

export interface HTMLNavAttributes extends HTMLElementAttributes {}

export interface HTMLNoscriptAttributes extends HTMLElementAttributes {}

export interface HTMLObjectAttributes extends HTMLElementAttributes {
  data?: string;
  form?: string;
  height?: string;
  name?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
  usemap?: string;
  width?: string;
}

export interface HTMLOlAttributes extends HTMLElementAttributes {
  reversed?: boolean;
  start?: number;
  type?: "1" | "a" | "A" | "i" | "I";
}

export interface HTMLOptgroupAttributes extends HTMLElementAttributes {
  disabled?: boolean;
  label?: string;
}

export interface HTMLOptionAttributes extends HTMLElementAttributes {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

export interface HTMLOutputAttributes extends HTMLElementAttributes {
  for?: string;
  form?: string;
  name?: string;
}

export interface HTMLPAttributes extends HTMLElementAttributes {}

export interface HTMLParamAttributes extends HTMLElementAttributes {
  name?: string;
  value?: string;
}

export interface HTMLPictureAttributes extends HTMLElementAttributes {}

export interface HTMLPreAttributes extends HTMLElementAttributes {}

export interface HTMLProgressAttributes extends HTMLElementAttributes {
  value?: number;
  max?: number;
}

export interface HTMLQAttributes extends HTMLElementAttributes {
  cite?: string;
}

export interface HTMLRpAttributes extends HTMLElementAttributes {}

export interface HTMLRtAttributes extends HTMLElementAttributes {}

export interface HTMLRubyAttributes extends HTMLElementAttributes {}

export interface HTMLSAttributes extends HTMLElementAttributes {}

export interface HTMLSampAttributes extends HTMLElementAttributes {}

export interface HTMLScriptAttributes extends HTMLElementAttributes {
  async?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  defer?: boolean;
  integrity?: string;
  nomodule?: boolean;
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "same-origin"
    | "origin"
    | "strict-origin"
    | "origin-when-cross-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  src?: string;
  type?: "module" | string;
}

export interface HTMLSectionAttributes extends HTMLElementAttributes {}

export interface HTMLSelectAttributes extends HTMLElementAttributes {
  autocomplete?: string;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}

export interface HTMLSlotAttributes extends HTMLElementAttributes {
  name?: string;
}

export interface HTMLSmallAttributes extends HTMLElementAttributes {}

export interface HTMLSourceAttributes extends HTMLElementAttributes {
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

export interface HTMLSpanAttributes extends HTMLElementAttributes {}

export interface HTMLStrongAttributes extends HTMLElementAttributes {}

export interface HTMLStyleAttributes extends HTMLElementAttributes {
  media?: string;
}

export interface HTMLSubAttributes extends HTMLElementAttributes {}

export interface HTMLSummaryAttributes extends HTMLElementAttributes {}

export interface HTMLSupAttributes extends HTMLElementAttributes {}

export interface HTMLTableAttributes extends HTMLElementAttributes {}

export interface HTMLTbodyAttributes extends HTMLElementAttributes {}

export interface HTMLTdAttributes extends HTMLElementAttributes {
  colspan?: number;
  rowspan?: number;
  headers?: string;
}

export interface HTMLTemplateAttributes extends HTMLElementAttributes {}

export interface HTMLTextareaAttributes extends HTMLElementAttributes {
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

export interface HTMLTfootAttributes extends HTMLElementAttributes {}

export interface HTMLThAttributes extends HTMLElementAttributes {
  abbr?: string;
  colspan?: number;
  rowspan?: number;
  headers?: string;
  scope?: "row" | "col" | "rowgroup" | "colgroup";
}

export interface HTMLTheadAttributes extends HTMLElementAttributes {}

export interface HTMLTimeAttributes extends HTMLElementAttributes {
  datetime?: string;
}

export interface HTMLTitleAttributes extends HTMLElementAttributes {}

export interface HTMLTrAttributes extends HTMLElementAttributes {}

export interface HTMLTrackAttributes extends HTMLElementAttributes {
  default?: boolean;
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  label?: string;
  src?: string;
  srclang?: string;
}

export interface HTMLUAttributes extends HTMLElementAttributes {}

export interface HTMLUlAttributes extends HTMLElementAttributes {}

export interface HTMLVar_Attributes extends HTMLElementAttributes {}

export interface HTMLVideoAttributes extends HTMLElementAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
  height?: number | string;
  playsinline?: boolean;
  poster?: string;
  width?: number | string;
}

export interface HTMLWbrAttributes extends HTMLElementAttributes {}
