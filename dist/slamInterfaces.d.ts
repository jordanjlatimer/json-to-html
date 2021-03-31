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
    content?: () => any | Promise<any>;
}
export interface BuildObject {
    html: string;
    css: string;
    js: string;
}
export declare type Child = SlamElement | string;
interface Selector {
    [key: string]: CSSProperties | Selector;
}
export declare type CSSObject = CSSProperties | Selector;
export interface Identification {
    [key: number]: SlamElement[];
}
export {};
