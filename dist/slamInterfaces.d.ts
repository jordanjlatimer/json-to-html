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
    [key: string]: CSSProperties;
}
interface Keyframe {
    [key: string]: Selector;
}
interface MediaQuery {
    [key: string]: Selector | CSSProperties;
}
export declare type CSSObject = Keyframe | MediaQuery | Selector | CSSProperties;
export interface Identification {
    [key: number]: ResolvedSlamComponent[];
}
export {};
