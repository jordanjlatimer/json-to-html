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
export declare type Child = ResolvedChild | Promise<ResolvedSlamElement> | Promise<ResolvedSlamComponent> | string;
export declare type ResolvedChild = ResolvedSlamElement | ResolvedSlamComponent | string;
interface Selector {
    [key: string]: CSSProperties | Selector;
}
interface Keyframe {
    [key: string]: Selector;
}
export declare type CSSObject = Keyframe | Selector | CSSProperties;
export interface Identification {
    [key: number]: ResolvedSlamComponent[];
}
export {};
