import { CSSObject } from "./generateCss";
export interface Element {
    tag: string;
    atts?: any;
    children?: Child[];
}
export interface Component {
    html?: Element;
    css?: CSSObject;
    js?: () => void;
}
export declare type Child = Element | Component | string;
export declare const createComponent: (config?: Component | undefined) => {
    html: Element | undefined;
    css: CSSObject | undefined;
    js: (() => void) | undefined;
};
