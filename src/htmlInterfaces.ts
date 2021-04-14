import { ElementAttributes } from "./slamInterfaces";

export interface HtmlElementAttributes extends ElementAttributes {
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

export interface HtmlTagAttributesMap {
  abbr: {};
  address: {};
  area: {
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
  };
  article: {};
  aside: {};
  audio: {
    autoplay?: boolean;
    controls?: boolean;
    crossorigin?: "anonymous" | "use-credentials";
    loop?: boolean;
    muted?: boolean;
    preload?: "none" | "metadata" | "auto";
    src?: string;
  };
  b: {};
  base: {};
  bdi: {};
  bdo: {};
  blockquote: {
    cite?: string;
  };
  body: {};
  br: {};
  button: {
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
  };
  canvas: {
    width?: number | string;
    height?: number | string;
  };
  caption: {};
  cite: {};
  code: {};
  col: {
    span?: number;
  };
  colgroup: {
    span?: number;
  };
  data: {
    value?: string;
  };
  datalist: {};
  dd: {};
  del: {
    cite?: string;
    datetime?: string;
  };
  details: {
    open?: boolean;
  };
  dfn: {};
  dialog: {
    open?: boolean;
  };
  div: {};
  dl: {};
  dt: {};
  em: {};
  embed: {
    height?: string;
    src?: string;
    type?: string;
    width?: string;
  };
  fieldset: {
    disabled?: boolean;
    form?: string;
    name?: string;
  };
  figcaption: {};
  figure: {};
  footer: {};
  form: {
    acceptCharset?: string;
    action?: string;
    autocomplete?: "on" | "off";
    enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    method?: "GET" | "POST" | "dialog";
    name?: string;
    novalidate?: boolean;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
  };
  h1: {};
  h2: {};
  h3: {};
  h4: {};
  h5: {};
  h6: {};
  head: {};
  header: {};
  hgroup: {};
  hr: {};
  html: {};
  i: {};
  iframe: {
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
  };
  img: {
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
  };
  input: {
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
  };
  ins: {
    cite?: string;
    datetime?: string;
  };
  kbd: {};
  label: {
    for?: string;
  };
  legend: {};
  li: {
    value?: number;
  };
  link: {
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
  };
  main: {};
  map: {
    name?: string;
  };
  mark: {};
  menu: {};
  meta: {
    charset?: "utf-8";
    content?: string;
    httpEquiv?: "content-type" | "default-style" | "refresh" | "x-ua-compatible" | "content-security-policy";
    name?: string;
  };
  meter: {
    high?: number;
    low?: number;
    max?: number;
    min?: number;
    optimum?: number;
    value?: number;
  };
  nav: {};
  noscript: {};
  object: {
    data?: string;
    form?: string;
    height?: string;
    name?: "_blank" | "_self" | "_parent" | "_top";
    type?: string;
    usemap?: string;
    width?: string;
  };
  ol: {
    reversed?: boolean;
    start?: number;
    type?: "1" | "a" | "A" | "i" | "I";
  };
  optgroup: {
    disabled?: boolean;
    label?: string;
  };
  option: {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
  };
  output: {
    for?: string;
    form?: string;
    name?: string;
  };
  p: {};
  param: {
    name?: string;
    value?: string;
  };
  picture: {};
  pre: {};
  progress: {
    value?: number;
    max?: number;
  };
  q: {
    cite?: string;
  };
  rp: {};
  rt: {};
  ruby: {};
  s: {};
  samp: {};
  script: {
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
  };
  section: {};
  select: {
    autocomplete?: string;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
  };
  slot: {
    name?: string;
  };
  small: {};
  source: {
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
  };
  span: {};
  strong: {};
  sub: {};
  summary: {};
  sup: {};
  table: {};
  tbody: {};
  td: {
    colspan?: number;
    rowspan?: number;
    headers?: string;
  };
  template: {};
  textarea: {
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
  };
  tfoot: {};
  th: {
    abbr?: string;
    colspan?: number;
    rowspan?: number;
    headers?: string;
    scope?: "row" | "col" | "rowgroup" | "colgroup";
  };
  thead: {};
  time: {
    datetime?: string;
  };
  title: {};
  tr: {};
  track: {
    default?: boolean;
    kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    label?: string;
    src?: string;
    srclang?: string;
  };
  u: {};
  ul: {};
  var_: {};
  video: {
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
  };
  wbr: {};
}

export type HtmlTagAttributes = {
  [P in keyof HtmlTagAttributesMap]: HtmlTagAttributesMap[P] & HtmlElementAttributes;
};
