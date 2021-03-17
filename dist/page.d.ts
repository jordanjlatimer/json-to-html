import { SlamElement, SlamComponent, Child, CSSObject } from "./slamInterfaces";
export interface Page {
    html: string;
    css: string;
    js: string;
    buildAll: () => void;
    writeFiles: (paths?: {
        htmlPath?: string;
        cssPath?: string;
        jsPath?: string;
    }) => void;
}
interface PageConfig {
    name: string;
    html: SlamElement;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreatePage(config: PageConfig): Page;
interface SlamElementBase {
    tag: string;
    atts?: any;
    children?: Child[];
}
interface SlamComponentBase {
    html: SlamElement;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreateComponent<T>(componentFunction: (props: T) => SlamComponentBase): (props: T) => SlamComponent;
export declare function CreateComponent<T>(component: SlamComponentBase): SlamComponent;
export declare function CreateElement<T>(elementFunction: (props: T) => SlamElementBase): (props: T) => SlamElement;
export declare function CreateElement<T>(element: SlamElementBase): SlamElement;
export {};
