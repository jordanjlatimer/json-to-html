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
    noCssReset?: true;
}
export declare function CreatePage(config: PageConfig | (() => PageConfig | Promise<PageConfig>)): Page;
interface SlamComponentBase {
    html: Promise<ResolvedSlamElement>;
    css?: CSSObject;
    js?: () => void;
}
export declare function CreateComponent(config: SlamComponentBase): Promise<ResolvedSlamComponent>;
export {};
