import { Properties as CSSProperties } from "csstype";

export interface SlamElement {
  type: "element";
  tag: string;
  atts?: any;
  children?: Child[];
}

export interface SlamComponent {
  type: "component";
  html: SlamElement;
  css?: CSSObject;
  js?: () => void;
}

export interface ResolvedSlamElement {
  type: "element";
  tag: string;
  atts?: any;
  children?: ResolvedChild[];
}

export interface ResolvedSlamComponent {
  type: "component";
  html: ResolvedSlamElement;
  css?: CSSObject;
  js?: () => void;
}

export type Child = ResolvedChild | Promise<ResolvedSlamElement> | Promise<ResolvedSlamComponent> | string;

export type ResolvedChild = ResolvedSlamElement | ResolvedSlamComponent | string;

interface Selector {
  [key: string]: CSSProperties | Selector;
}

export type CSSObject = CSSProperties | Selector;

export interface Identification {
  [key: number]: ResolvedSlamComponent[];
}
