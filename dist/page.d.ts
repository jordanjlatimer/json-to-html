import { CSSObject, ResolvedSlamElement, ResolvedSlamComponent } from "./slamInterfaces";
export interface Page {
    html: string;
    css: string;
    js: string;
    buildAll: () => Promise<void>;
    writeFiles: (paths?: {
        htmlPath?: string;
        cssPath?: string;
        jsPath?: string;
    }) => void;
}
interface PageConfig {
    name: string;
    html: Promise<ResolvedSlamElement>;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreatePage(config: PageConfig): Page;
interface SlamComponentBase {
    html: Promise<ResolvedSlamElement>;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreateComponent<T>(componentFunction: (props?: T) => SlamComponentBase | Promise<SlamComponentBase>): (props?: T) => Promise<ResolvedSlamComponent>;
export declare function CreateComponent<T>(component: SlamComponentBase): Promise<ResolvedSlamComponent>;
export {};
