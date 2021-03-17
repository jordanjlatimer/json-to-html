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

export type Child = SlamElement | SlamComponent | string;

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

export interface Identification {
  [key: number]: SlamComponent[];
}
