import { Properties as CSSProperties } from "csstype";

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

export interface SlamElement {
  type: "element";
  tag: string;
  atts?: any;
  children?: Child[];
}

export interface Page {
  name: string;
  html: SlamElement | ((args: any) => SlamElement);
  cssReset?: boolean;
  globalStyles?: CSSObject;
  content?: () => any | Promise<any>;
}

export interface BuildObject {
  html: string;
  css: string;
  js: string;
}

export type Child = SlamElement | string;

interface Selector {
  [key: string]: CSSProperties | Selector;
}

interface ImportDeclaration {
  "@import": string;
}

export type CSSObject = CSSProperties | Selector | ImportDeclaration;

export interface Identification {
  [key: number]: SlamElement[];
}
