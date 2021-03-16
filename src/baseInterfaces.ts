import { Properties as CSSProperties } from "csstype";

export interface ElementAttributes {
  class?: string;
  id?: string;
  slot?: string;
  style?: CSSProperties;
  autofocus?: boolean;
  nonce?: string;
  tabindex?: number;
}

export interface TypedSlamElement {
  type: "element";
  tag: string;
  atts?: any;
  children?: Child[];
}

export interface TypedSlamComponent {
  type: "component";
  html: TypedSlamElement;
  css?: CSSObject;
  js?: () => void;
}

export type Child = TypedSlamElement | TypedSlamComponent | string;

interface Selector {
  [key: string]: CSSProperties;
}

interface Keyframe {
  [key: string]: Selector;
}

interface MediaQuery {
  [key: string]: Selector | CSSProperties;
}

export type CSSObject = Keyframe | MediaQuery | Selector | CSSProperties;
