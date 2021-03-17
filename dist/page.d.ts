import { CSSObject } from "./baseInterfaces";
import { SlamElement, SlamComponent, Child } from "./baseInterfaces";
export interface Page {
    readonly type: "page";
    name: string;
    html: SlamElement;
    css?: CSSObject;
    js?: () => void;
    components: {
        [key: number]: SlamComponent[];
    };
    finalBuild: {
        html: string;
        css: string;
        js: string;
    };
    buildHtml: () => void;
    buildCss: () => void;
    buildJs: () => void;
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
