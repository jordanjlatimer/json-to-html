import { Properties as CSSProperties } from "csstype";
import { HtmlTagAttributes } from "./htmlInterfaces";
import { SvgTagAttributes } from "./svgInterfaces";

export interface ElementAttributes {
  class?: string;
  id?: string;
  slot?: string;
  css?: CSSObject;
  js?: () => void;
  autofocus?: boolean;
  nonce?: string;
  tabindex?: number;
}

export type TagName = keyof HtmlTagAttributes | keyof SvgTagAttributes;

export type TagAttributes<T> = T extends keyof HtmlTagAttributes
  ? HtmlTagAttributes[T]
  : T extends keyof SvgTagAttributes
  ? SvgTagAttributes[T]
  : never;

export type ChildlessElements =
  | "area"
  | "base"
  | "br"
  | "col"
  | "embed"
  | "hr"
  | "img"
  | "input"
  | "link"
  | "meta"
  | "param"
  | "source"
  | "track"
  | "wbr"
  | "circle"
  | "ellipse"
  | "line"
  | "path"
  | "polygon"
  | "polyline"
  | "rect"
  | "stop"
  | "use";

export type ParentalElements = Exclude<TagName, ChildlessElements>;

export interface SlamElement<T extends TagName> {
  type: "element";
  tag: T;
  atts: TagAttributes<T>;
  children?: T extends ChildlessElements ? undefined : Child[];
}

export interface Page {
  content: {
    getter?: () => any | Promise<any>;
    consumer: (content: any) => SlamElement<"html">;
  };
  cssReset?: boolean;
  globalStyles?: CSSObject | CSSObject[];
}

export interface PageRoute {
  key: string;
  serverPaths: {
    html: string[];
    css: string;
    js: string;
  };
  clientPaths: {
    css: string;
    js: string;
    reset: string;
  };
  page: Page;
}

type NeverPage = {
  [Property in keyof Page]?: never;
};

export type SiteMap = {
  [key: string]: Page | SiteMap;
} & NeverPage;

export interface BuildObject {
  html: string;
  css: string;
  js: string;
}

export type Child = SlamElement<TagName> | string | undefined;

interface Selector {
  [key: string]: CSSObject | CSSObject[];
}

interface Import {
  "@import"?: string;
}

export type CSSObject = CSSProperties | Selector | Import;

export interface Identification {
  [key: number]: SlamElement<TagName>[];
}

export type ChildlessElementFunction<T extends TagName> = (arg1?: TagAttributes<T>) => SlamElement<T>;

export type ParentalElementFunction<T extends TagName> = (
  arg1?: TagAttributes<T> | Child | Child[],
  ...arg2: (Child | Child[])[]
) => SlamElement<T>;

export type ElementFunction<T extends TagName> = ParentalElementFunction<T> | ChildlessElementFunction<T>;

export interface Cache {
  [key: string]: {
    content: any;
    build: BuildObject;
  };
}
