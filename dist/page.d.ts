import { CSSObject } from "./baseInterfaces";
import { TypedSlamElement, TypedSlamComponent, Child } from "./baseInterfaces";
interface Page {
    readonly type: "page";
    name: string;
    html?: TypedSlamElement;
    css?: CSSObject;
    js?: () => void;
    components: {
        [key: number]: TypedSlamComponent[];
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
export declare function CreatePage(name: string): Page;
interface SlamElement {
    tag: string;
    atts?: any;
    children?: Child[];
}
interface SlamComponent {
    html: TypedSlamElement;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreateComponent<T>(componentFunction: (props: T) => SlamComponent): (props: T) => TypedSlamComponent;
export declare function CreateComponent<T>(component: SlamComponent): TypedSlamComponent;
export declare function CreateElement<T>(elementFunction: (props: T) => SlamElement): (props: T) => TypedSlamElement;
export declare function CreateElement<T>(element: SlamElement): TypedSlamElement;
export {};
