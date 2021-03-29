import { Identification, Page, SlamElement } from "./slamInterfaces";
export declare const identifyCssElements: (tree: SlamElement) => Identification;
export declare const buildPage: (page: Page | Promise<Page>) => Promise<{
    html: string;
    css: string;
    js: string;
}>;
