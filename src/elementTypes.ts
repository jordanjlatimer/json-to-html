interface ariaAtts {
  "aria-activedescendant"?: string;
  "aria-atomic"?: "false" | "true";
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  "aria-busy"?: "false" | "true";
  "aria-checked"?: "false" | "mixed" | "true";
  "aria-colcount"?: number;
  "aria-colindex"?: number;
  "aria-colspan"?: number;
  "aria-controls"?: string;
  "aria-current"?: "false" | "true" | "page" | "step" | "location" | "date" | "time";
  "aria-describedby"?: string;
  "aria-details"?: string;
  "aria-disabled"?: "false" | "true";
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
  "aria-errormessage"?: string;
  "aria-expanded"?: "false" | "true";
  "aria-flowto"?: string;
  "aria-grabbed"?: "false" | "true";
  "aria-haspopup"?: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  "aria-hidden"?: "false" | "true";
  "aria-invalid"?: "false" | "true" | "grammar" | "spelling";
  "aria-keyshortcuts"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-level"?: number;
  "aria-live"?: "off" | "assertive" | "polite";
  "aria-modal"?: "false" | "true";
  "aria-multiline"?: "false" | "true";
  "aria-multiselectable"?: "false" | "true";
  "aria-orientation"?: "horizontal" | "vertical";
  "aria-owns"?: string;
  "aria-placeholder"?: string;
  "aria-posinset"?: number;
  "aria-pressed"?: "false" | "mixed" | "true";
  "aria-readonly"?: "false" | "true";
  "aria-relevant"?: "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals";
  "aria-required"?: "false" | "true";
  "aria-roledescription"?: string;
  "aria-rowcount"?: number;
  "aria-rowindex"?: number;
  "aria-rowspan"?: number;
  "aria-selected"?: "false" | "true";
  "aria-setsize"?: number;
  "aria-sort"?: "none" | "ascending" | "descending" | "other";
  "aria-valuemax"?: number;
  "aria-valuemin"?: number;
  "aria-valuenow"?: number;
  "aria-valuetext"?: string;
  "role": string;
}

interface generalAtts extends ariaAtts {
  accesskey: string;
  autocapitalize: string;
  autofocus: "true" | "false";
  class: string;
  contenteditable: "true" | "false" | "inherit";
  dir: string;
  draggable: "true" | "false";
  enterkeyhint: string; //
  hidden: "true" | "false";
  id: string;
  inputmode: "none" | "text" | "tel" | "email" | "url" | "numeric" | "decimal" | "search";
  is: string;
  itemid: string;
  itemprop: string;
  itemref: string;
  itemscope: "true" | "false";
  itemtype: string;
  lang: string;
  nonce: string;
  slot: string;
  spellcheck: "true" | "false";
  style: string;
  tabindex: number;
  title: string;
  translate: "yes" | "no";
}

interface aAtts extends generalAtts {
  charset: string;
  coords: string;
  download: string;
  href: string;
  hreflang: string;
  name: string;
  ping: string;
  referrerpolicy: string;
  rel: string;
  rev: string;
  shape: string;
  target: string;
  type: string;
}

interface abbrAtts extends generalAtts {

}

interface areaAtts extends generalAtts {
  alt: string;
  coords: string;
  download: string;
  href: string;
  hreflang: string;
  nohref: string;
  ping: string;
  referrerpolicy: string;
  rel: string;
  shape: string;
  target: string;
  type: string;
}

interface audioAtts extends generalAtts {
  autoplay: string; 
  controls: string; 
  crossorigin: string; 
  loop: string; 
  muted: string; 
  preload: string; 
  src: string;
}

interface baseAtts extends generalAtts {
  href: string; 
  target: string;
}

interface bdoAtts extends generalAtts {

}

interface blockquoteAtts extends generalAtts {
  cite: string;
}

interface bodyAtts extends generalAtts {
  alink: string; 
  background: string; 
  bgcolor: string; 
  link: string; 
  text: string; 
  vlink: string;
}

interface brAtts extends generalAtts {
  clear: string;
}

interface buttonAtts extends generalAtts {
  disabled: string;
  form: string;
  formaction: string;
  formenctype: string;
  formmethod: string;
  formnovalidate: string;
  formtarget: string;
  name: string;
  type: string;
  value: string;
}

interface canvasAtts extends generalAtts {
  height: string; 
  width: string;
}

interface captionAtts extends generalAtts {
  align: string;
}

interface colAtts extends generalAtts {
  align: string; 
  char: string; 
  charoff: string; 
  span: string; 
  valign: string; 
  width: string;
}

interface colgroupAtts extends generalAtts {
  align: string; 
  char: string; 
  charoff: string; 
  span: string; 
  valign: string; 
  width: string;
}

interface dataAtts extends generalAtts {
  value: string;
}

interface delAtts extends generalAtts {
  cite: string; 
  datetime: string;
}

interface detailsAtts extends generalAtts {
  open: string;
}

interface dfnAtts extends generalAtts {

}

interface dialogAtts extends generalAtts {
  open: string;
}

interface divAtts extends generalAtts {
  align: string;
}

interface dlAtts extends generalAtts {
  compact: string;
}

interface embedAtts extends generalAtts {
  height: string; 
  src: string; 
  type: string; 
  width: string;
}

interface fieldsetAtts extends generalAtts {
  disabled: string; 
  form: string; 
  name: string;
}

interface formAtts extends generalAtts {
  accept: string; 
  "accept-charset": string; 
  action: string; 
  autocomplete: string; 
  enctype: string; 
  method: string; 
  name: string; 
  novalidate: string; 
  target: string;
}

interface h1Atts extends generalAtts {
  align: string;
}

interface h2Atts extends generalAtts {
  align: string;
}

interface h3Atts extends generalAtts {
  align: string;
}

interface h4Atts extends generalAtts {
  align: string;
}

interface h5Atts extends generalAtts {
  align: string;
}

interface h6Atts extends generalAtts {
  align: string;
}

interface headAtts extends generalAtts {
  profile: string;
}

interface hrAtts extends generalAtts {
  align: string; 
  noshade: string; 
  size: string; 
  width: string;
}

interface htmlAtts extends generalAtts {
  manifest: string; 
  version: string;
}

interface iframeAtts extends generalAtts {
  align: string;
  allow: string;
  allowfullscreen: string;
  allowpaymentrequest: string;
  allowusermedia: string;
  frameborder: string;
  height: string;
  loading: string;
  longdesc: string;
  marginheight: string;
  marginwidth: string;
  name: string;
  referrerpolicy: string;
  sandbox: string;
  scrolling: string;
  src: string;
  srcdoc: string;
  width: string;
}

interface imgAtts extends generalAtts {
  align: string;
  alt: string;
  border: string;
  crossorigin: string;
  decoding: string;
  height: string;
  hspace: string;
  ismap: string;
  loading: string;
  longdesc: string;
  name: string;
  referrerpolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  usemap: string;
  vspace: string;
  width: string;
}

interface inputAtts extends generalAtts {
  accept: string;
  align: string;
  alt: string;
  autocomplete: string;
  checked: string;
  dirname: string;
  disabled: string;
  form: string;
  formaction: string;
  formenctype: string;
  formmethod: string;
  formnovalidate: string;
  formtarget: string;
  height: string;
  ismap: string;
  list: string;
  max: string;
  maxlength: string;
  min: string;
  minlength: string;
  multiple: string;
  name: string;
  pattern: string;
  placeholder: string;
  readonly: string;
  required: string;
  size: string;
  src: string;
  step: string;
  type: string;
  usemap: string;
  value: string;
  width: string;
}

interface insAtts extends generalAtts {
  cite: string; 
  datetime: string;
}

interface labelAtts extends generalAtts {
  for: string; 
  form: string;
}

interface legendAtts extends generalAtts {
  align: string;
}

interface liAtts extends generalAtts {
  type: string; 
  value: string;
}

interface linkAtts extends generalAtts {
  as: string;
  charset: string;
  color: string;
  crossorigin: string;
  disabled: string;
  href: string;
  hreflang: string;
  imagesizes: string;
  imagesrcset: string;
  integrity: string;
  media: string;
  referrerpolicy: string;
  rel: string;
  rev: string;
  sizes: string;
  target: string;
  type: string;
}

interface mapAtts extends generalAtts {
  name: string;
}

interface menuAtts extends generalAtts {
  compact: string;
}

interface metaAtts extends generalAtts {
  charset: string; 
  content: string; 
  "http-equiv": string; 
  name: string; 
  scheme: string;
}

interface meterAtts extends generalAtts {
  high: string; 
  low: string; 
  max: string; 
  min: string; 
  optimum: string; 
  value: string;
}

interface objectAtts extends generalAtts {
  align: string;
  archive: string;
  border: string;
  classid: string;
  codebase: string;
  codetype: string;
  data: string;
  declare: string;
  form: string;
  height: string;
  hspace: string;
  name: string;
  standby: string;
  type: string;
  typemustmatch: string;
  usemap: string;
  vspace: string;
  width: string;
}

interface olAtts extends generalAtts {
  compact: string; 
  reversed: string; 
  start: string; 
  type: string;
}

interface optgroupAtts extends generalAtts {
  disabled: string; 
  label: string;
}

interface optionAtts extends generalAtts {
  disabled: string; 
  label: string; 
  selected: string; 
  value: string;
}

interface outputAtts extends generalAtts {
  for: string; 
  form: string; 
  name: string;
}

interface pAtts extends generalAtts {
  align: string;
}

interface paramAtts extends generalAtts {
  name: string; 
  type: string; 
  value: string; 
  valuetype: string;
}

interface preAtts extends generalAtts {
  width: string;
}

interface progressAtts extends generalAtts {
  max: string; 
  value: string;
}

interface qAtts extends generalAtts {
  cite: string;
}

interface scriptAtts extends generalAtts {
  async: string;
  charset: string;
  crossorigin: string;
  defer: string;
  integrity: string;
  language: string;
  nomodule: string;
  referrerpolicy: string;
  src: string;
  type: string;
}

interface selectAtts extends generalAtts {
  autocomplete: string; 
  disabled: string; 
  form: string; 
  multiple: string; 
  name: string; 
  required: string; 
  size: string;
}

interface slotAtts extends generalAtts {
  name: string;
}

interface sourceAtts extends generalAtts {
  media: string; 
  sizes: string; 
  src: string; 
  srcset: string; 
  type: string;
}

interface styleAtts extends generalAtts {
  media: string; 
  type: string;
}

interface tableAtts extends generalAtts {
  align: string; 
  bgcolor: string; 
  border: string; 
  cellpadding: string; 
  cellspacing: string; 
  frame: string; 
  rules: string; 
  summary: string; 
  width: string;
}

interface tbodyAtts extends generalAtts {
  align: string; 
  char: string; 
  charoff: string; 
  valign: string;
}

interface tdAtts extends generalAtts {
  abbr: string;
  align: string;
  axis: string;
  bgcolor: string;
  char: string;
  charoff: string;
  colspan: string;
  headers: string;
  height: string;
  nowrap: string;
  rowspan: string;
  scope: string;
  valign: string;
  width: string;
}

interface textareaAtts extends generalAtts {
  autocomplete: string;
  cols: string;
  dirname: string;
  disabled: string;
  form: string;
  maxlength: string;
  minlength: string;
  name: string;
  placeholder: string;
  readonly: string;
  required: string;
  rows: string;
  wrap: string;
}

interface tfootAtts extends generalAtts {
  align: string; 
  char: string; 
  charoff: string; 
  valign: string;
}

interface thAtts extends generalAtts {
  abbr: string;
  align: string;
  axis: string;
  bgcolor: string;
  char: string;
  charoff: string;
  colspan: string;
  headers: string;
  height: string;
  nowrap: string;
  rowspan: string;
  scope: string;
  valign: string;
  width: string;
}

interface theadAtts extends generalAtts {
  align: string; 
  char: string; 
  charoff: string; 
  valign: string;
}

interface timeAtts extends generalAtts {
  datetime: string;
}

interface trAtts extends generalAtts {
  align: string; 
  bgcolor: string; 
  char: string; 
  charoff: string; 
  valign: string;
}

interface trackAtts extends generalAtts {
  default: string; 
  kind: string; 
  label: string; 
  src: string; 
  srclang: string;
}

interface ulAtts extends generalAtts {
  compact: string; 
  type: string;
}

interface videoAtts extends generalAtts {
  autoplay: string;
  controls: string;
  crossorigin: string;
  height: string;
  loop: string;
  muted: string;
  playsinline: string;
  poster: string;
  preload: string;
  src: string;
  width: string;
}

