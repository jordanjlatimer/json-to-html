interface SlamHTMLElementAttributes extends SlamElementAttributes{
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

interface SlamHTMLAAttributes extends SlamHTMLElementAttributes{
  href?: string;
  download?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  rel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
}

interface SlamHTMLAbbrAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLAddressAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLAreaAttributes extends SlamHTMLElementAttributes{
  href?: string;
  alt?: string;
  coords?: string;
  download?: string;
  ping?: string;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  rel?: string;
  shape?: "circle" | "default" | "poly" | "rect";
}

interface SlamHTMLArticleAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLAsideAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLAudioAttributes extends SlamHTMLElementAttributes {
  autoplay?: boolean;
  controls?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  src?: string;
}

interface SlamHTMLBAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLBaseAttributes extends SlamHTMLElementAttributes {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

interface SlamHTMLBdiAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLBdoAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLBlockquoteAttributes extends SlamHTMLElementAttributes {
  cite?: string;
}

interface SlamHTMLBodyAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLBrAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLButtonAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLCanvasAttributes extends SlamHTMLElementAttributes{
  width?: number;
  height?: number;
}

interface SlamHTMLCaptionAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLCiteAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLCodeAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLColAttributes extends SlamHTMLElementAttributes{
  span?: number
}

interface SlamHTMLColgroupAttributes extends SlamHTMLElementAttributes{
  span?: number
}

interface SlamHTMLDataAttributes extends SlamHTMLElementAttributes{
  value?: string
}

interface SlamHTMLDatalistAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLDdAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLDelAttributes extends SlamHTMLElementAttributes{
  cite?: string,
  datetime?: string
}

interface SlamHTMLDetailsAttributes extends SlamHTMLElementAttributes{
  open?: boolean
}

interface SlamHTMLDfnAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLDialogAttributes extends SlamHTMLElementAttributes{
  open?: boolean
}

interface SlamHTMLDivAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLDlAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLDtAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLEmAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLEmbedAttributes extends SlamHTMLElementAttributes{
  height?: string;
  src?: string;
  type?: string;
  width?: string;
}

interface SlamHTMLFieldsetAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  form?: string;
  name?: string;
}

interface SlamHTMLFigcaptionAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLFigureAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLFooterAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLFormAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLH1Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLH2Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLH3Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLH4Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLH5Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLH6Attributes extends SlamHTMLElementAttributes{}

interface SlamHTMLHeadAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLHeaderAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLHgroupAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLHrAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLHtmlAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLIAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLIframeAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLImgAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLInputAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLInsAttributes extends SlamHTMLElementAttributes{
  cite?: string,
  datetime?: string
}

interface SlamHTMLKbdAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLLabelAttributes extends SlamHTMLElementAttributes{
  for?: string;
}

interface SlamHTMLLegendAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLLiAttributes extends SlamHTMLElementAttributes{
  value?: number
}

interface SlamHTMLLinkAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLMainAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLMapAttributes extends SlamHTMLElementAttributes{
  name?: string;
}

interface SlamHTMLMarkAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLMenuAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLLegendAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLMetaAttributes extends SlamHTMLElementAttributes{
  charset?: "utf-8"
  content?: string;
  "http-equiv"?: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy";
  name?: string;
}

interface SlamHTMLMeterAttributes extends SlamHTMLElementAttributes{
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}

interface SlamHTMLNavAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLNoscriptAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLObjectAttributes extends SlamHTMLElementAttributes{
  data?: string;
  form?: string;
  height?: string;
  name?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
  usemap?: string;
  width?: string;
}

interface SlamHTMLOlAttributes extends SlamHTMLElementAttributes{
  reversed?: boolean;
  start?: number;
  type?: "1" | "a" | "A" | "i" | "I"
}

interface SlamHTMLOptgroupAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  label?: string;
}

interface SlamHTMLOptionAttributes extends SlamHTMLElementAttributes{
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value?: string;
}

interface SlamHTMLOutputAttributes extends SlamHTMLElementAttributes{
  for?: string;
  form?: string;
  name?: string;
}

interface SlamHTMLPAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLParamAttributes extends SlamHTMLElementAttributes{
  name?: string;
  value?: string;
}

interface SlamHTMLPictureAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLPreAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLProgressAttributes extends SlamHTMLElementAttributes{
  value?: number;
  max?: number;
}

interface SlamHTMLQAttributes extends SlamHTMLElementAttributes{
  cite?: string;
}

interface SlamHTMLRpAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLRtAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLRubyAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSampAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLScriptAttributes extends SlamHTMLElementAttributes{
  async?: boolean;
  crossorigin?: "anonymous" | "use-credentials";
  defer?: boolean;
  integrity?: string;
  nomodule?: boolean;
  referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  src?: string;
  type?: "module" | string;
}

interface SlamHTMLSectionAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSelectAttributes extends SlamHTMLElementAttributes{
  autocomplete?: string;
  disabled?: boolean;
  form?: string;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  size?: number;
}

interface SlamHTMLSlotAttributes extends SlamHTMLElementAttributes{
  name?: string;
}

interface SlamHTMLSmallAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSourceAttributes extends SlamHTMLElementAttributes{
  media?: string;
  sizes?: string;
  src?: string;
  srcset?: string;
  type?: string;
}

interface SlamHTMLSpanAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLStrongAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLStyleAttributes extends SlamHTMLElementAttributes{
  media?: string
}

interface SlamHTMLSubAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSummaryAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLSupAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTableAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTbodyAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTdAttributes extends SlamHTMLElementAttributes{
  colspan?: number;
  rowspan?: number;
  headers?: string;
}

interface SlamHTMLTemplateAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTextareaAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLTfootAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLThAttributes extends SlamHTMLElementAttributes{
  abbr?: string;
  colspan?: number;
  rowspan?: number;
  headers?: string;
  scope?: "row" | "col" | "rowgroup" | "colgroup"
}

interface SlamHTMLTheadAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTimeAttributes extends SlamHTMLElementAttributes{
  datetime?: string;
}

interface SlamHTMLTitleAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTrAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLTrackAttributes extends SlamHTMLElementAttributes{
  default?: boolean;
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  label?: string;
  src?: string;
  srclang?: string;
}

interface SlamHTMLUAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLUlAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLVarAttributes extends SlamHTMLElementAttributes{}

interface SlamHTMLVideoAttributes extends SlamHTMLElementAttributes{
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

interface SlamHTMLWbrAttributes extends SlamHTMLElementAttributes{}